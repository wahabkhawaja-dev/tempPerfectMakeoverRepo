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

Deserializers["Level1_Hair_Playable_Step47"] = function (request, data, root) {
  var i822 = root || request.c( 'Level1_Hair_Playable_Step47' )
  var i823 = data
  request.r(i823[0], i823[1], 0, i822, 'wetCloth')
  request.r(i823[2], i823[3], 0, i822, 'waterDripingParticle')
  i822.ZoomStep1 = request.d('ZoomPos', i823[4], i822.ZoomStep1)
  var i825 = i823[5]
  var i824 = []
  for(var i = 0; i < i825.length; i += 2) {
  request.r(i825[i + 0], i825[i + 1], 2, i824, '')
  }
  i822.AllTrash = i824
  var i827 = i823[6]
  var i826 = []
  for(var i = 0; i < i827.length; i += 2) {
  request.r(i827[i + 0], i827[i + 1], 2, i826, '')
  }
  i822.AllTrashOutlines = i826
  i822.trashDone = !!i823[7]
  i822.trashThrown = i823[8]
  i822.trashTotal = i823[9]
  request.r(i823[10], i823[11], 0, i822, 'bd_Sticky')
  i822.ZoomStep2 = request.d('ZoomPos', i823[12], i822.ZoomStep2)
  request.r(i823[13], i823[14], 0, i822, 'ToolStep2')
  request.r(i823[15], i823[16], 0, i822, 'camFollowStep2')
  var i829 = i823[17]
  var i828 = []
  for(var i = 0; i < i829.length; i += 2) {
  request.r(i829[i + 0], i829[i + 1], 2, i828, '')
  }
  i822.AllBugOutlines = i828
  i822.ZoomStep2b = request.d('ZoomPos', i823[18], i822.ZoomStep2b)
  request.r(i823[19], i823[20], 0, i822, 'ToolStep2b')
  request.r(i823[21], i823[22], 0, i822, 'camFollowStep2b')
  request.r(i823[23], i823[24], 0, i822, 'dustColStep2')
  request.r(i823[25], i823[26], 0, i822, 'handIndicationShower')
  request.r(i823[27], i823[28], 0, i822, 'hairDirtyStatic')
  request.r(i823[29], i823[30], 0, i822, 'hairDirtyWetStatic')
  request.r(i823[31], i823[32], 0, i822, 'dryHairAnim')
  i822.ZoomStep3 = request.d('ZoomPos', i823[33], i822.ZoomStep3)
  request.r(i823[34], i823[35], 0, i822, 'ShampooOnHand')
  request.r(i823[36], i823[37], 0, i822, 'ShampooInHandCap')
  request.r(i823[38], i823[39], 0, i822, 'ToolStep3')
  request.r(i823[40], i823[41], 0, i822, 'shampooPatch')
  request.r(i823[42], i823[43], 0, i822, 'handSpriteRend')
  request.r(i823[44], i823[45], 0, i822, 'bottleDefault')
  request.r(i823[46], i823[47], 0, i822, 'bottlePressed')
  request.r(i823[48], i823[49], 0, i822, 'shampooDropping')
  request.r(i823[50], i823[51], 0, i822, 'bottleOpenSfx')
  request.r(i823[52], i823[53], 0, i822, 'bottleSqueezSfx')
  request.r(i823[54], i823[55], 0, i822, 'bottlePourSfx')
  i822.ZoomStep4 = request.d('ZoomPos', i823[56], i822.ZoomStep4)
  request.r(i823[57], i823[58], 0, i822, 'ToolStep4')
  request.r(i823[59], i823[60], 0, i822, 'camFollowStep4')
  request.r(i823[61], i823[62], 0, i822, 'foamLight_E')
  request.r(i823[63], i823[64], 0, i822, 'foam2_E')
  request.r(i823[65], i823[66], 0, i822, 'foamCol')
  request.r(i823[67], i823[68], 0, i822, 'handIndicationHands')
  request.r(i823[69], i823[70], 0, i822, 'progressStep4')
  i822.ZoomStep5a = request.d('ZoomPos', i823[71], i822.ZoomStep5a)
  i822.ZoomStep5b = request.d('ZoomPos', i823[72], i822.ZoomStep5b)
  request.r(i823[73], i823[74], 0, i822, 'ShowerDamaged')
  request.r(i823[75], i823[76], 0, i822, 'ShowerDamaged_Drag')
  request.r(i823[77], i823[78], 0, i822, 'ShowerBackDMG')
  request.r(i823[79], i823[80], 0, i822, 'ShowerInner_dirty')
  request.r(i823[81], i823[82], 0, i822, 'ShowerInner_Target')
  request.r(i823[83], i823[84], 0, i822, 'ShowerFrontDMG')
  request.r(i823[85], i823[86], 0, i822, 'OpenShowerIndication')
  request.r(i823[87], i823[88], 0, i822, 'CloseShowerIndication')
  request.r(i823[89], i823[90], 0, i822, 'showrOpenInput')
  request.r(i823[91], i823[92], 0, i822, 'showerDisk')
  request.r(i823[93], i823[94], 0, i822, 'showerFixReverseAnimDrag')
  request.r(i823[95], i823[96], 0, i822, 'showerDragDamage')
  request.r(i823[97], i823[98], 0, i822, 'ToolStep5Rev')
  request.r(i823[99], i823[100], 0, i822, 'handIndicationShowerPlace')
  i822.ZoomStep5 = request.d('ZoomPos', i823[101], i822.ZoomStep5)
  request.r(i823[102], i823[103], 0, i822, 'ToolStep5')
  request.r(i823[104], i823[105], 0, i822, 'ToolStep5Placeable')
  request.r(i823[106], i823[107], 0, i822, 'toolStep5Progress')
  request.r(i823[108], i823[109], 0, i822, 'toolStep5ProgressHelp')
  request.r(i823[110], i823[111], 0, i822, 'camFollowStep5')
  request.r(i823[112], i823[113], 0, i822, 'showerRender')
  request.r(i823[114], i823[115], 0, i822, 'showerDirty')
  request.r(i823[116], i823[117], 0, i822, 'showerClean')
  request.r(i823[118], i823[119], 0, i822, 'waterShotParticle')
  request.r(i823[120], i823[121], 0, i822, 'showerProblemClip')
  request.r(i823[122], i823[123], 0, i822, 'FixErrorClip')
  i822.ZoomStep6 = request.d('ZoomPos', i823[124], i822.ZoomStep6)
  request.r(i823[125], i823[126], 0, i822, 'ToolStep6')
  request.r(i823[127], i823[128], 0, i822, 'camFollowStep6')
  request.r(i823[129], i823[130], 0, i822, 'wetHairs_E')
  request.r(i823[131], i823[132], 0, i822, 'hairDryFade')
  i822.ZoomStep7 = request.d('ZoomPos', i823[133], i822.ZoomStep7)
  request.r(i823[134], i823[135], 0, i822, 'ToolStep7')
  request.r(i823[136], i823[137], 0, i822, 'camFollowStep7')
  request.r(i823[138], i823[139], 0, i822, 'dryHairs_E')
  request.r(i823[140], i823[141], 0, i822, 'dryCombed_BG')
  request.r(i823[142], i823[143], 0, i822, 'brushController')
  request.r(i823[144], i823[145], 0, i822, 'handIndicationBrush')
  i822.levelName = i823[146]
  i822.levelReward = i823[147]
  request.r(i823[148], i823[149], 0, i822, 'LevelIcon')
  request.r(i823[150], i823[151], 0, i822, 'Level_BG')
  var i831 = i823[152]
  var i830 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Sprite')))
  for(var i = 0; i < i831.length; i += 2) {
  request.r(i831[i + 0], i831[i + 1], 1, i830, '')
  }
  i822.ToolIcons = i830
  var i833 = i823[153]
  var i832 = []
  for(var i = 0; i < i833.length; i += 2) {
  request.r(i833[i + 0], i833[i + 1], 2, i832, '')
  }
  i822.AllDrags = i832
  var i835 = i823[154]
  var i834 = []
  for(var i = 0; i < i835.length; i += 2) {
  request.r(i835[i + 0], i835[i + 1], 2, i834, '')
  }
  i822.AllSources = i834
  var i837 = i823[155]
  var i836 = []
  for(var i = 0; i < i837.length; i += 2) {
  request.r(i837[i + 0], i837[i + 1], 2, i836, '')
  }
  i822.AllScratches = i836
  i822.stepsDone = i823[156]
  i822.levelNo = i823[157]
  i822.partNo = i823[158]
  var i839 = i823[159]
  var i838 = []
  for(var i = 0; i < i839.length; i += 2) {
  request.r(i839[i + 0], i839[i + 1], 2, i838, '')
  }
  i822.disableOnLevelComplete = i838
  request.r(i823[160], i823[161], 0, i822, 'bubbleGum')
  return i822
}

Deserializers["ZoomPos"] = function (request, data, root) {
  var i840 = root || request.c( 'ZoomPos' )
  var i841 = data
  i840.CameraPos = new pc.Vec3( i841[0], i841[1], i841[2] )
  i840.CameraFOV = i841[3]
  return i840
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
  var i857 = i855[15]
  var i856 = []
  for(var i = 0; i < i857.length; i += 2) {
  request.r(i857[i + 0], i857[i + 1], 2, i856, '')
  }
  i854.thingsToDisableOnEndCard = i856
  i854.endCardDelay = i855[16]
  i854.showEndCardOnProgressTrigger = !!i855[17]
  i854.showEndCardOnToolAppearTrigger = !!i855[18]
  i854.onCtaFired = request.d('UnityEngine.Events.UnityEvent', i855[19], i854.onCtaFired)
  i854.logWhenFired = !!i855[20]
  return i854
}

Deserializers["UnityEngine.Events.UnityEvent"] = function (request, data, root) {
  var i858 = root || request.c( 'UnityEngine.Events.UnityEvent' )
  var i859 = data
  i858.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i859[0], i858.m_PersistentCalls)
  return i858
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i860 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i861 = data
  var i863 = i861[0]
  var i862 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i863.length; i += 1) {
    i862.add(request.d('UnityEngine.Events.PersistentCall', i863[i + 0]));
  }
  i860.m_Calls = i862
  return i860
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i866 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i867 = data
  request.r(i867[0], i867[1], 0, i866, 'm_Target')
  i866.m_TargetAssemblyTypeName = i867[2]
  i866.m_MethodName = i867[3]
  i866.m_Mode = i867[4]
  i866.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i867[5], i866.m_Arguments)
  i866.m_CallState = i867[6]
  return i866
}

Deserializers["PlayableFadeCoverSettings"] = function (request, data, root) {
  var i868 = root || request.c( 'PlayableFadeCoverSettings' )
  var i869 = data
  i868.revealDelay = i869[0]
  i868.revealDuration = i869[1]
  return i868
}

Deserializers["ScratchCardAsset.ScratchCardManager"] = function (request, data, root) {
  var i870 = root || request.c( 'ScratchCardAsset.ScratchCardManager' )
  var i871 = data
  request.r(i871[0], i871[1], 0, i870, 'MainCamera')
  i870.RenderType = i871[2]
  request.r(i871[3], i871[4], 0, i870, 'ScratchSurfaceSprite')
  i870.ScratchSurfaceSpriteHasAlpha = !!i871[5]
  i870.MaskProgressCutOffValue = i871[6]
  request.r(i871[7], i871[8], 0, i870, 'EraseTexture')
  i870.EraseTextureScale = new pc.Vec2( i871[9], i871[10] )
  i870.InputEnabled = !!i871[11]
  request.r(i871[12], i871[13], 0, i870, 'Card')
  i870.Mode = i871[14]
  request.r(i871[15], i871[16], 0, i870, 'Progress')
  request.r(i871[17], i871[18], 0, i870, 'MeshCard')
  request.r(i871[19], i871[20], 0, i870, 'SpriteCard')
  request.r(i871[21], i871[22], 0, i870, 'ImageCard')
  request.r(i871[23], i871[24], 0, i870, 'MaskShader')
  request.r(i871[25], i871[26], 0, i870, 'BrushShader')
  request.r(i871[27], i871[28], 0, i870, 'MaskProgressShader')
  request.r(i871[29], i871[30], 0, i870, 'MaskProgressCutOffShader')
  return i870
}

Deserializers["ScratchCardAsset.ScratchCard"] = function (request, data, root) {
  var i872 = root || request.c( 'ScratchCardAsset.ScratchCard' )
  var i873 = data
  request.r(i873[0], i873[1], 0, i872, 'MainCamera')
  request.r(i873[2], i873[3], 0, i872, 'Surface')
  i872.RenderTextureQuality = i873[4]
  request.r(i873[5], i873[6], 0, i872, 'Eraser')
  request.r(i873[7], i873[8], 0, i872, 'Progress')
  request.r(i873[9], i873[10], 0, i872, 'ScratchSurface')
  request.r(i873[11], i873[12], 0, i872, 'RenderTexture')
  i872.BrushScale = new pc.Vec2( i873[13], i873[14] )
  request.r(i873[15], i873[16], 0, i872, 'ToolTip')
  i872.InputEnabled = !!i873[17]
  i872.IsScratching = !!i873[18]
  i872.useChangingScale = !!i873[19]
  i872.useGivenBrushScale = !!i873[20]
  i872.canSpreadMask = !!i873[21]
  i872.shouldPaintHoles = !!i873[22]
  i872.canRotateTip = !!i873[23]
  i872._mode = i873[24]
  return i872
}

Deserializers["ScratchCardAsset.EraseProgress"] = function (request, data, root) {
  var i874 = root || request.c( 'ScratchCardAsset.EraseProgress' )
  var i875 = data
  request.r(i875[0], i875[1], 0, i874, 'Card')
  i874.currentProgress = i875[2]
  return i874
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animator"] = function (request, data, root) {
  var i876 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animator' )
  var i877 = data
  request.r(i877[0], i877[1], 0, i876, 'animatorController')
  request.r(i877[2], i877[3], 0, i876, 'avatar')
  i876.updateMode = i877[4]
  i876.hasTransformHierarchy = !!i877[5]
  i876.applyRootMotion = !!i877[6]
  var i879 = i877[7]
  var i878 = []
  for(var i = 0; i < i879.length; i += 2) {
  request.r(i879[i + 0], i879[i + 1], 2, i878, '')
  }
  i876.humanBones = i878
  i876.enabled = !!i877[8]
  return i876
}

Deserializers["BD_AnimationHelper"] = function (request, data, root) {
  var i882 = root || request.c( 'BD_AnimationHelper' )
  var i883 = data
  i882.OnAnimationComplete = request.d('UnityEngine.Events.UnityEvent', i883[0], i882.OnAnimationComplete)
  request.r(i883[1], i883[2], 0, i882, 'sfxClip')
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

Deserializers["UnityEngine.U2D.Animation.SpriteSkin"] = function (request, data, root) {
  var i888 = root || request.c( 'UnityEngine.U2D.Animation.SpriteSkin' )
  var i889 = data
  request.r(i889[0], i889[1], 0, i888, 'm_RootBone')
  var i891 = i889[2]
  var i890 = []
  for(var i = 0; i < i891.length; i += 2) {
  request.r(i891[i + 0], i891[i + 1], 2, i890, '')
  }
  i888.m_BoneTransforms = i890
  i888.m_AlwaysUpdate = !!i889[3]
  i888.m_AutoRebind = !!i889[4]
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

Deserializers["Luna.Unity.DTO.UnityEngine.Components.LineRenderer"] = function (request, data, root) {
  var i900 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.LineRenderer' )
  var i901 = data
  i900.textureMode = i901[0]
  i900.alignment = i901[1]
  i900.widthCurve = new pc.AnimationCurve( { keys_flow: i901[2] } )
  i900.colorGradient = i901[3] ? new pc.ColorGradient(i901[3][0], i901[3][1], i901[3][2]) : null
  var i903 = i901[4]
  var i902 = []
  for(var i = 0; i < i903.length; i += 3) {
    i902.push( new pc.Vec3( i903[i + 0], i903[i + 1], i903[i + 2] ) );
  }
  i900.positions = i902
  i900.positionCount = i901[5]
  i900.widthMultiplier = i901[6]
  i900.startWidth = i901[7]
  i900.endWidth = i901[8]
  i900.numCornerVertices = i901[9]
  i900.numCapVertices = i901[10]
  i900.useWorldSpace = !!i901[11]
  i900.loop = !!i901[12]
  i900.startColor = new pc.Color(i901[13], i901[14], i901[15], i901[16])
  i900.endColor = new pc.Color(i901[17], i901[18], i901[19], i901[20])
  i900.generateLightingData = !!i901[21]
  i900.enabled = !!i901[22]
  request.r(i901[23], i901[24], 0, i900, 'sharedMaterial')
  var i905 = i901[25]
  var i904 = []
  for(var i = 0; i < i905.length; i += 2) {
  request.r(i905[i + 0], i905[i + 1], 2, i904, '')
  }
  i900.sharedMaterials = i904
  i900.receiveShadows = !!i901[26]
  i900.shadowCastingMode = i901[27]
  i900.sortingLayerID = i901[28]
  i900.sortingOrder = i901[29]
  i900.lightmapIndex = i901[30]
  i900.lightmapSceneIndex = i901[31]
  i900.lightmapScaleOffset = new pc.Vec4( i901[32], i901[33], i901[34], i901[35] )
  i900.lightProbeUsage = i901[36]
  i900.reflectionProbeUsage = i901[37]
  return i900
}

Deserializers["StaticFixedPipe"] = function (request, data, root) {
  var i906 = root || request.c( 'StaticFixedPipe' )
  var i907 = data
  request.r(i907[0], i907[1], 0, i906, 'lineRenderer')
  request.r(i907[2], i907[3], 0, i906, 'toolTransform')
  request.r(i907[4], i907[5], 0, i906, 'toolDirectionPoint')
  request.r(i907[6], i907[7], 0, i906, 'fixedEndPoint')
  i906.segmentCount = i907[8]
  i906.totalLength = i907[9]
  i906.constraintIterations = i907[10]
  i906.gravity = new pc.Vec3( i907[11], i907[12], i907[13] )
  i906.pipeWidth = i907[14]
  return i906
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteMask"] = function (request, data, root) {
  var i908 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteMask' )
  var i909 = data
  i908.frontSortingLayerID = i909[0]
  i908.frontSortingOrder = i909[1]
  i908.backSortingLayerID = i909[2]
  i908.backSortingOrder = i909[3]
  i908.alphaCutoff = i909[4]
  request.r(i909[5], i909[6], 0, i908, 'sprite')
  i908.tileMode = i909[7]
  i908.isCustomRangeActive = !!i909[8]
  i908.spriteSortPoint = i909[9]
  i908.enabled = !!i909[10]
  request.r(i909[11], i909[12], 0, i908, 'sharedMaterial')
  var i911 = i909[13]
  var i910 = []
  for(var i = 0; i < i911.length; i += 2) {
  request.r(i911[i + 0], i911[i + 1], 2, i910, '')
  }
  i908.sharedMaterials = i910
  i908.receiveShadows = !!i909[14]
  i908.shadowCastingMode = i909[15]
  i908.sortingLayerID = i909[16]
  i908.sortingOrder = i909[17]
  i908.lightmapIndex = i909[18]
  i908.lightmapSceneIndex = i909[19]
  i908.lightmapScaleOffset = new pc.Vec4( i909[20], i909[21], i909[22], i909[23] )
  i908.lightProbeUsage = i909[24]
  i908.reflectionProbeUsage = i909[25]
  return i908
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CircleCollider2D"] = function (request, data, root) {
  var i912 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CircleCollider2D' )
  var i913 = data
  i912.radius = i913[0]
  i912.enabled = !!i913[1]
  i912.isTrigger = !!i913[2]
  i912.usedByEffector = !!i913[3]
  i912.density = i913[4]
  i912.offset = new pc.Vec2( i913[5], i913[6] )
  request.r(i913[7], i913[8], 0, i912, 'material')
  return i912
}

Deserializers["DG.Tweening.DOTweenAnimation"] = function (request, data, root) {
  var i914 = root || request.c( 'DG.Tweening.DOTweenAnimation' )
  var i915 = data
  i914.targetIsSelf = !!i915[0]
  request.r(i915[1], i915[2], 0, i914, 'targetGO')
  i914.tweenTargetIsTargetGO = !!i915[3]
  i914.delay = i915[4]
  i914.duration = i915[5]
  i914.easeType = i915[6]
  i914.easeCurve = new pc.AnimationCurve( { keys_flow: i915[7] } )
  i914.loopType = i915[8]
  i914.loops = i915[9]
  i914.id = i915[10]
  i914.isRelative = !!i915[11]
  i914.isFrom = !!i915[12]
  i914.isIndependentUpdate = !!i915[13]
  i914.autoKill = !!i915[14]
  i914.autoGenerate = !!i915[15]
  i914.isActive = !!i915[16]
  i914.isValid = !!i915[17]
  request.r(i915[18], i915[19], 0, i914, 'target')
  i914.animationType = i915[20]
  i914.targetType = i915[21]
  i914.forcedTargetType = i915[22]
  i914.autoPlay = !!i915[23]
  i914.useTargetAsV3 = !!i915[24]
  i914.endValueFloat = i915[25]
  i914.endValueV3 = new pc.Vec3( i915[26], i915[27], i915[28] )
  i914.endValueV2 = new pc.Vec2( i915[29], i915[30] )
  i914.endValueColor = new pc.Color(i915[31], i915[32], i915[33], i915[34])
  i914.endValueString = i915[35]
  i914.endValueRect = UnityEngine.Rect.MinMaxRect(i915[36], i915[37], i915[38], i915[39])
  request.r(i915[40], i915[41], 0, i914, 'endValueTransform')
  i914.optionalBool0 = !!i915[42]
  i914.optionalBool1 = !!i915[43]
  i914.optionalFloat0 = i915[44]
  i914.optionalInt0 = i915[45]
  i914.optionalRotationMode = i915[46]
  i914.optionalScrambleMode = i915[47]
  i914.optionalShakeRandomnessMode = i915[48]
  i914.optionalString = i915[49]
  i914.updateType = i915[50]
  i914.isSpeedBased = !!i915[51]
  i914.hasOnStart = !!i915[52]
  i914.hasOnPlay = !!i915[53]
  i914.hasOnUpdate = !!i915[54]
  i914.hasOnStepComplete = !!i915[55]
  i914.hasOnComplete = !!i915[56]
  i914.hasOnTweenCreated = !!i915[57]
  i914.hasOnRewind = !!i915[58]
  i914.onStart = request.d('UnityEngine.Events.UnityEvent', i915[59], i914.onStart)
  i914.onPlay = request.d('UnityEngine.Events.UnityEvent', i915[60], i914.onPlay)
  i914.onUpdate = request.d('UnityEngine.Events.UnityEvent', i915[61], i914.onUpdate)
  i914.onStepComplete = request.d('UnityEngine.Events.UnityEvent', i915[62], i914.onStepComplete)
  i914.onComplete = request.d('UnityEngine.Events.UnityEvent', i915[63], i914.onComplete)
  i914.onTweenCreated = request.d('UnityEngine.Events.UnityEvent', i915[64], i914.onTweenCreated)
  i914.onRewind = request.d('UnityEngine.Events.UnityEvent', i915[65], i914.onRewind)
  return i914
}

Deserializers["PlayTweenOnHit"] = function (request, data, root) {
  var i916 = root || request.c( 'PlayTweenOnHit' )
  var i917 = data
  i916.isContinueous = !!i917[0]
  request.r(i917[1], i917[2], 0, i916, 'tool')
  var i919 = i917[3]
  var i918 = []
  for(var i = 0; i < i919.length; i += 2) {
  request.r(i919[i + 0], i919[i + 1], 2, i918, '')
  }
  i916.animsToPlay = i918
  request.r(i917[4], i917[5], 0, i916, 'tipTarget')
  return i916
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i922 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i923 = data
  request.r(i923[0], i923[1], 0, i922, 'm_ObjectArgument')
  i922.m_ObjectArgumentAssemblyTypeName = i923[2]
  i922.m_IntArgument = i923[3]
  i922.m_FloatArgument = i923[4]
  i922.m_StringArgument = i923[5]
  i922.m_BoolArgument = !!i923[6]
  return i922
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

Deserializers["PlayParticlesOnCollision"] = function (request, data, root) {
  var i938 = root || request.c( 'PlayParticlesOnCollision' )
  var i939 = data
  request.r(i939[0], i939[1], 0, i938, 'Target')
  request.r(i939[2], i939[3], 0, i938, 'ParticlePrefab')
  i938.destroyIt = !!i939[4]
  i938.stayAtPlace = !!i939[5]
  i938.disableOnCollision = !!i939[6]
  i938.OnCollisionEvent = request.d('UnityEngine.Events.UnityEvent', i939[7], i938.OnCollisionEvent)
  return i938
}

Deserializers["InteractableBones"] = function (request, data, root) {
  var i940 = root || request.c( 'InteractableBones' )
  var i941 = data
  request.r(i941[0], i941[1], 0, i940, 'Tip')
  i940.MoveAmount = i941[2]
  i940.MoveSpeed = i941[3]
  i940.ShakeSpeed = i941[4]
  i940.MovementThreshold = i941[5]
  i940.MoveX = !!i941[6]
  i940.MoveY = !!i941[7]
  return i940
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D"] = function (request, data, root) {
  var i942 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D' )
  var i943 = data
  i942.usedByComposite = !!i943[0]
  i942.autoTiling = !!i943[1]
  i942.size = new pc.Vec2( i943[2], i943[3] )
  i942.edgeRadius = i943[4]
  i942.enabled = !!i943[5]
  i942.isTrigger = !!i943[6]
  i942.usedByEffector = !!i943[7]
  i942.density = i943[8]
  i942.offset = new pc.Vec2( i943[9], i943[10] )
  request.r(i943[11], i943[12], 0, i942, 'material')
  return i942
}

Deserializers["WaypointFollower"] = function (request, data, root) {
  var i944 = root || request.c( 'WaypointFollower' )
  var i945 = data
  var i947 = i945[0]
  var i946 = []
  for(var i = 0; i < i947.length; i += 2) {
  request.r(i947[i + 0], i947[i + 1], 2, i946, '')
  }
  i944.waypoints = i946
  i944.speed = i945[1]
  i944.rotationSpeed = i945[2]
  i944.loop = !!i945[3]
  i944.reverse = !!i945[4]
  i944.canMove = !!i945[5]
  request.r(i945[6], i945[7], 0, i944, 'movingSfx')
  return i944
}

Deserializers["OutlinePulse"] = function (request, data, root) {
  var i948 = root || request.c( 'OutlinePulse' )
  var i949 = data
  i948.smallThickness = i949[0]
  i948.largeThickness = i949[1]
  i948.transitionSpeed = i949[2]
  i948.animationSpeed = i949[3]
  i948.isThickOutline = !!i949[4]
  i948.animate = !!i949[5]
  i948.hideSpriteOnly = !!i949[6]
  return i948
}

Deserializers["BasicDrag"] = function (request, data, root) {
  var i950 = root || request.c( 'BasicDrag' )
  var i951 = data
  i950.canDrag = !!i951[0]
  i950.dragByDelta = !!i951[1]
  i950.isDragging = !!i951[2]
  i950.moveWithPointer = !!i951[3]
  i950.canReturn = !!i951[4]
  i950.jumpOnReturn = !!i951[5]
  i950.returnTime = i951[6]
  i950.Tool_Offset = new pc.Vec3( i951[7], i951[8], i951[9] )
  i950.canScaleIncrease = !!i951[10]
  i950.Self_ScaleNew = new pc.Vec3( i951[11], i951[12], i951[13] )
  i950.canRotateOnPick = !!i951[14]
  i950.startRot = new pc.Vec3( i951[15], i951[16], i951[17] )
  i950.newRot = new pc.Vec3( i951[18], i951[19], i951[20] )
  var i953 = i951[21]
  var i952 = []
  for(var i = 0; i < i953.length; i += 2) {
  request.r(i953[i + 0], i953[i + 1], 2, i952, '')
  }
  i950.childSprite = i952
  request.r(i951[22], i951[23], 0, i950, 'ToolSelectClip')
  request.r(i951[24], i951[25], 0, i950, 'ToolLoopClip')
  request.r(i951[26], i951[27], 0, i950, 'thisParticles')
  i950.onDragparticle = !!i951[28]
  request.r(i951[29], i951[30], 0, i950, 'dragParticles')
  request.r(i951[31], i951[32], 0, i950, 'anim')
  i950.startPos = new pc.Vec3( i951[33], i951[34], i951[35] )
  i950.startScale = new pc.Vec3( i951[36], i951[37], i951[38] )
  i950.Vibration = !!i951[39]
  i950.isPlacedCannotMove = !!i951[40]
  i950.isObjectMovingWhileDragging = !!i951[41]
  i950.OnMouseDownEvent = request.d('System.Action', i951[42], i950.OnMouseDownEvent)
  i950.OnMouseUpEvent = request.d('System.Action', i951[43], i950.OnMouseUpEvent)
  i950.ProgStartEvent = request.d('System.Action', i951[44], i950.ProgStartEvent)
  i950.ProgEndEvent = request.d('System.Action', i951[45], i950.ProgEndEvent)
  i950.canCallMouseUpWhenGamePaused = !!i951[46]
  i950.ClampX_L = i951[47]
  i950.ClampX_H = i951[48]
  i950.ClampY_L = i951[49]
  i950.ClampY_H = i951[50]
  i950.startOrder = i951[51]
  i950.dontResetItIsInCollider = !!i951[52]
  request.r(i951[53], i951[54], 0, i950, 'thisCollider')
  request.r(i951[55], i951[56], 0, i950, 'thisSR')
  i950.OnMouseDownEventIndependentFromCanDrag = request.d('System.Action', i951[57], i950.OnMouseDownEventIndependentFromCanDrag)
  return i950
}

Deserializers["System.Action"] = function (request, data, root) {
  var i956 = root || request.c( 'System.Action' )
  var i957 = data
  return i956
}

Deserializers["BD_Progress"] = function (request, data, root) {
  var i958 = root || request.c( 'BD_Progress' )
  var i959 = data
  var i961 = i959[0]
  var i960 = []
  for(var i = 0; i < i961.length; i += 1) {
    i960.push( request.d('ScratchData', i961[i + 0]) );
  }
  i958.AllScratches = i960
  i958.OnScratchComplete = request.d('UnityEngine.Events.UnityEvent', i959[1], i958.OnScratchComplete)
  i958.isProgDone = !!i959[2]
  i958.canCallComplete = !!i959[3]
  i958.CollectiveAppear = !!i959[4]
  i958.tipControl = !!i959[5]
  i958.progressControl = !!i959[6]
  request.r(i959[7], i959[8], 0, i958, 'thisDrag')
  i958.CompleteEvent = request.d('System.Action', i959[9], i958.CompleteEvent)
  i958.SubCompleteEvent = request.d('System.Action', i959[10], i958.SubCompleteEvent)
  return i958
}

Deserializers["ScratchData"] = function (request, data, root) {
  var i964 = root || request.c( 'ScratchData' )
  var i965 = data
  request.r(i965[0], i965[1], 0, i964, 'ScratchManager')
  i964.scratchLimit = i965[2]
  i964.isComplete = !!i965[3]
  return i964
}

Deserializers["BD_Clamp"] = function (request, data, root) {
  var i966 = root || request.c( 'BD_Clamp' )
  var i967 = data
  i966.ClampX_L = i967[0]
  i966.ClampX_H = i967[1]
  i966.ClampY_L = i967[2]
  i966.ClampY_H = i967[3]
  return i966
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i968 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i969 = data
  request.r(i969[0], i969[1], 0, i968, 'clip')
  request.r(i969[2], i969[3], 0, i968, 'outputAudioMixerGroup')
  i968.playOnAwake = !!i969[4]
  i968.loop = !!i969[5]
  i968.time = i969[6]
  i968.volume = i969[7]
  i968.pitch = i969[8]
  i968.enabled = !!i969[9]
  return i968
}

Deserializers["BD_Action"] = function (request, data, root) {
  var i970 = root || request.c( 'BD_Action' )
  var i971 = data
  i970.OnMouseDownEvent = request.d('UnityEngine.Events.UnityEvent', i971[0], i970.OnMouseDownEvent)
  i970.OnMouseUpEvent = request.d('UnityEngine.Events.UnityEvent', i971[1], i970.OnMouseUpEvent)
  i970.setToolLayer = !!i971[2]
  request.r(i971[3], i971[4], 0, i970, 'tool_SP')
  return i970
}

Deserializers["BD_CameraFollow"] = function (request, data, root) {
  var i972 = root || request.c( 'BD_CameraFollow' )
  var i973 = data
  request.r(i973[0], i973[1], 0, i972, 'Tool')
  request.r(i973[2], i973[3], 0, i972, 'Pivot')
  i972.FOV = i973[4]
  i972.Y_L = i973[5]
  i972.Y_H = i973[6]
  i972.X_L = i973[7]
  i972.X_R = i973[8]
  i972.startDelay = i973[9]
  i972.duration = i973[10]
  return i972
}

Deserializers["BD_ProgressHelper"] = function (request, data, root) {
  var i974 = root || request.c( 'BD_ProgressHelper' )
  var i975 = data
  request.r(i975[0], i975[1], 0, i974, 'BD_Progress')
  request.r(i975[2], i975[3], 0, i974, 'fadeSprite')
  i974.fadeIn = !!i975[4]
  return i974
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D"] = function (request, data, root) {
  var i976 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D' )
  var i977 = data
  i976.bodyType = i977[0]
  request.r(i977[1], i977[2], 0, i976, 'material')
  i976.simulated = !!i977[3]
  i976.useAutoMass = !!i977[4]
  i976.mass = i977[5]
  i976.drag = i977[6]
  i976.angularDrag = i977[7]
  i976.gravityScale = i977[8]
  i976.collisionDetectionMode = i977[9]
  i976.sleepMode = i977[10]
  i976.constraints = i977[11]
  return i976
}

Deserializers["BD_Audio"] = function (request, data, root) {
  var i978 = root || request.c( 'BD_Audio' )
  var i979 = data
  request.r(i979[0], i979[1], 0, i978, 'BD')
  request.r(i979[2], i979[3], 0, i978, 'Source')
  i978.shouldRestart = !!i979[4]
  i978.startVol = i979[5]
  i978.targetVol = i979[6]
  i978.duration = i979[7]
  i978.startDelay = i979[8]
  return i978
}

Deserializers["Level1_HairAnim"] = function (request, data, root) {
  var i980 = root || request.c( 'Level1_HairAnim' )
  var i981 = data
  i980.holdDuration = i981[0]
  request.r(i981[1], i981[2], 0, i980, 'targetSprite')
  i980.onHoldComplete = request.d('UnityEngine.Events.UnityEvent', i981[3], i980.onHoldComplete)
  i980.isHolding = !!i981[4]
  request.r(i981[5], i981[6], 0, i980, 'targetObj')
  request.r(i981[7], i981[8], 0, i980, 'thisTool')
  request.r(i981[9], i981[10], 0, i980, 'thisToolTip')
  var i983 = i981[11]
  var i982 = []
  for(var i = 0; i < i983.length; i += 2) {
  request.r(i983[i + 0], i983[i + 1], 2, i982, '')
  }
  i980.hairsAnim = i982
  var i985 = i981[12]
  var i984 = []
  for(var i = 0; i < i985.length; i += 2) {
  request.r(i985[i + 0], i985[i + 1], 2, i984, '')
  }
  i980.hairsRend = i984
  i980.hairsRendFadeThreshold = i981[13]
  request.r(i981[14], i981[15], 0, i980, 'wetHairRend')
  request.r(i981[16], i981[17], 0, i980, 'dryHairRend')
  request.r(i981[18], i981[19], 0, i980, 'dryHairRendBack')
  i980.hairAnimStopDuration = i981[20]
  i980.hairAnimResumeDuration = i981[21]
  return i980
}

Deserializers["BD_SpriteChange"] = function (request, data, root) {
  var i986 = root || request.c( 'BD_SpriteChange' )
  var i987 = data
  request.r(i987[0], i987[1], 0, i986, 'BD')
  request.r(i987[2], i987[3], 0, i986, 'SR')
  request.r(i987[4], i987[5], 0, i986, 'Default')
  request.r(i987[6], i987[7], 0, i986, 'Picked')
  i986.resetOnRelease = !!i987[8]
  return i986
}

Deserializers["BD_TapandHold"] = function (request, data, root) {
  var i988 = root || request.c( 'BD_TapandHold' )
  var i989 = data
  i988.holdDuration = i989[0]
  i988.updateVisuals = !!i989[1]
  request.r(i989[2], i989[3], 0, i988, 'targetSprite')
  i988.onHoldComplete = request.d('UnityEngine.Events.UnityEvent', i989[4], i988.onHoldComplete)
  i988.onCompleteProgress = request.d('UnityEngine.Events.UnityEvent', i989[5], i988.onCompleteProgress)
  i988.currentProgress = i989[6]
  i988.isHolding = !!i989[7]
  request.r(i989[8], i989[9], 0, i988, 'targetObj')
  request.r(i989[10], i989[11], 0, i988, 'thisTool')
  request.r(i989[12], i989[13], 0, i988, 'thisToolTip')
  return i988
}

Deserializers["BD_AnimatorDrag"] = function (request, data, root) {
  var i990 = root || request.c( 'BD_AnimatorDrag' )
  var i991 = data
  request.r(i991[0], i991[1], 0, i990, 'BD')
  request.r(i991[2], i991[3], 0, i990, 'anim')
  request.r(i991[4], i991[5], 0, i990, 'Source')
  i990.Vibration = !!i991[6]
  i990.isCompletable = !!i991[7]
  i990.completionThreshold = i991[8]
  i990.OnComplete = request.d('UnityEngine.Events.UnityEvent', i991[9], i990.OnComplete)
  return i990
}

Deserializers["TapandHold_Simple"] = function (request, data, root) {
  var i992 = root || request.c( 'TapandHold_Simple' )
  var i993 = data
  request.r(i993[0], i993[1], 0, i992, 'actionSfx')
  i992.holdDuration = i993[2]
  i992.dragThreshold = i993[3]
  i992.fadeInOnHold = !!i993[4]
  i992.fadeOutOnRelease = !!i993[5]
  request.r(i993[6], i993[7], 0, i992, 'targetSprite')
  i992.onHoldComplete = request.d('UnityEngine.Events.UnityEvent', i993[8], i992.onHoldComplete)
  i992.currentProgress = i993[9]
  i992.isHolding = !!i993[10]
  i992.isCompleted = !!i993[11]
  request.r(i993[12], i993[13], 0, i992, 'thisTool')
  return i992
}

Deserializers["DraggableBrush"] = function (request, data, root) {
  var i994 = root || request.c( 'DraggableBrush' )
  var i995 = data
  request.r(i995[0], i995[1], 0, i994, 'BD_Progress')
  var i997 = i995[2]
  var i996 = new (System.Collections.Generic.List$1(Bridge.ns('DraggableBrush+Step')))
  for(var i = 0; i < i997.length; i += 1) {
    i996.add(request.d('DraggableBrush+Step', i997[i + 0]));
  }
  i994.movementSteps = i996
  i994.snapSensitivity = i995[3]
  i994.OnComplete = request.d('UnityEngine.Events.UnityEvent', i995[4], i994.OnComplete)
  return i994
}

Deserializers["DraggableBrush+Step"] = function (request, data, root) {
  var i1000 = root || request.c( 'DraggableBrush+Step' )
  var i1001 = data
  i1000.stepName = i1001[0]
  i1000.startX = i1001[1]
  i1000.startY = i1001[2]
  i1000.endY = i1001[3]
  return i1000
}

Deserializers["SpriteButton"] = function (request, data, root) {
  var i1002 = root || request.c( 'SpriteButton' )
  var i1003 = data
  i1002.isLocked = !!i1003[0]
  i1002.lockMsg = i1003[1]
  i1002.onClick = request.d('UnityEngine.Events.UnityEvent', i1003[2], i1002.onClick)
  i1002.onLockedClick = request.d('UnityEngine.Events.UnityEvent', i1003[3], i1002.onLockedClick)
  i1002.isLevelBtnSfx = !!i1003[4]
  request.r(i1003[5], i1003[6], 0, i1002, 'pivot')
  i1002.reductionChange = i1003[7]
  i1002.animationDuration = i1003[8]
  return i1002
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Cubemap"] = function (request, data, root) {
  var i1004 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Cubemap' )
  var i1005 = data
  i1004.name = i1005[0]
  i1004.atlasId = i1005[1]
  i1004.mipmapCount = i1005[2]
  i1004.hdr = !!i1005[3]
  i1004.size = i1005[4]
  i1004.anisoLevel = i1005[5]
  i1004.filterMode = i1005[6]
  var i1007 = i1005[7]
  var i1006 = []
  for(var i = 0; i < i1007.length; i += 4) {
    i1006.push( UnityEngine.Rect.MinMaxRect(i1007[i + 0], i1007[i + 1], i1007[i + 2], i1007[i + 3]) );
  }
  i1004.rects = i1006
  i1004.wrapU = i1005[8]
  i1004.wrapV = i1005[9]
  return i1004
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i1010 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i1011 = data
  i1010.name = i1011[0]
  i1010.index = i1011[1]
  i1010.startup = !!i1011[2]
  return i1010
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i1012 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i1013 = data
  i1012.aspect = i1013[0]
  i1012.orthographic = !!i1013[1]
  i1012.orthographicSize = i1013[2]
  i1012.backgroundColor = new pc.Color(i1013[3], i1013[4], i1013[5], i1013[6])
  i1012.nearClipPlane = i1013[7]
  i1012.farClipPlane = i1013[8]
  i1012.fieldOfView = i1013[9]
  i1012.depth = i1013[10]
  i1012.clearFlags = i1013[11]
  i1012.cullingMask = i1013[12]
  i1012.rect = i1013[13]
  request.r(i1013[14], i1013[15], 0, i1012, 'targetTexture')
  i1012.usePhysicalProperties = !!i1013[16]
  i1012.focalLength = i1013[17]
  i1012.sensorSize = new pc.Vec2( i1013[18], i1013[19] )
  i1012.lensShift = new pc.Vec2( i1013[20], i1013[21] )
  i1012.gateFit = i1013[22]
  i1012.commandBufferCount = i1013[23]
  i1012.cameraType = i1013[24]
  i1012.enabled = !!i1013[25]
  return i1012
}

Deserializers["CameraController"] = function (request, data, root) {
  var i1014 = root || request.c( 'CameraController' )
  var i1015 = data
  request.r(i1015[0], i1015[1], 0, i1014, 'cam')
  i1014.defaultPosition = new pc.Vec3( i1015[2], i1015[3], i1015[4] )
  i1014.defaultSize = i1015[5]
  i1014.defaultFOV = i1015[6]
  i1014.defaultDuration = i1015[7]
  i1014.defaultEase = i1015[8]
  return i1014
}

Deserializers["MusicSource"] = function (request, data, root) {
  var i1016 = root || request.c( 'MusicSource' )
  var i1017 = data
  request.r(i1017[0], i1017[1], 0, i1016, 'source')
  return i1016
}

Deserializers["UI_Manager"] = function (request, data, root) {
  var i1018 = root || request.c( 'UI_Manager' )
  var i1019 = data
  i1018.levelCompleted = !!i1019[0]
  i1018.isPauseActive = !!i1019[1]
  i1018.loadIndex = i1019[2]
  request.r(i1019[3], i1019[4], 0, i1018, 'removeAdsButton')
  request.r(i1019[5], i1019[6], 0, i1018, 'pauseButton')
  request.r(i1019[7], i1019[8], 0, i1018, 'Fade_Img')
  request.r(i1019[9], i1019[10], 0, i1018, 'TopBarAnim')
  request.r(i1019[11], i1019[12], 0, i1018, 'MainPanel')
  request.r(i1019[13], i1019[14], 0, i1018, 'PausePanel')
  request.r(i1019[15], i1019[16], 0, i1018, 'PausePopUp')
  request.r(i1019[17], i1019[18], 0, i1018, 'PauseCanvasGroup')
  request.r(i1019[19], i1019[20], 0, i1018, 'RateUsPanel')
  request.r(i1019[21], i1019[22], 0, i1018, 'RateUsPopUp')
  request.r(i1019[23], i1019[24], 0, i1018, 'RemoveAdsPanel')
  request.r(i1019[25], i1019[26], 0, i1018, 'RemoveAdsPopUp')
  request.r(i1019[27], i1019[28], 0, i1018, 'RemoveAdsCanvasGroup')
  var i1021 = i1019[29]
  var i1020 = []
  for(var i = 0; i < i1021.length; i += 2) {
  request.r(i1021[i + 0], i1021[i + 1], 2, i1020, '')
  }
  i1018.RemoveAdsAnims = i1020
  request.r(i1019[30], i1019[31], 0, i1018, 'CompletePanel')
  request.r(i1019[32], i1019[33], 0, i1018, 'LevelIcon')
  request.r(i1019[34], i1019[35], 0, i1018, 'CompleteParticles')
  request.r(i1019[36], i1019[37], 0, i1018, 'progressBar')
  request.r(i1019[38], i1019[39], 0, i1018, 'progressText')
  request.r(i1019[40], i1019[41], 0, i1018, 'toolIcon1')
  request.r(i1019[42], i1019[43], 0, i1018, 'toolIcon2')
  request.r(i1019[44], i1019[45], 0, i1018, 'toolIcon3')
  request.r(i1019[46], i1019[47], 0, i1018, 'toolIcon4')
  request.r(i1019[48], i1019[49], 0, i1018, 'target1')
  request.r(i1019[50], i1019[51], 0, i1018, 'target2')
  i1018.toolMoveDuration = i1019[52]
  i1018.currentIndex = i1019[53]
  var i1023 = i1019[54]
  var i1022 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Sprite')))
  for(var i = 0; i < i1023.length; i += 2) {
  request.r(i1023[i + 0], i1023[i + 1], 1, i1022, '')
  }
  i1018.allTools = i1022
  request.r(i1019[55], i1019[56], 0, i1018, 'clockProgress')
  request.r(i1019[57], i1019[58], 0, i1018, 'clockProgressFill')
  request.r(i1019[59], i1019[60], 0, i1018, 'clockAudio')
  i1018.moveDistance = i1019[61]
  i1018.animationDuration = i1019[62]
  i1018.greyBgChildName = i1019[63]
  i1018.pushOffset = i1019[64]
  return i1018
}

Deserializers["GameManagerPlayable"] = function (request, data, root) {
  var i1024 = root || request.c( 'GameManagerPlayable' )
  var i1025 = data
  request.r(i1025[0], i1025[1], 0, i1024, 'endParticles')
  request.r(i1025[2], i1025[3], 0, i1024, 'stepCompleteParticles')
  request.r(i1025[4], i1025[5], 0, i1024, 'DefaultMat')
  request.r(i1025[6], i1025[7], 0, i1024, 'BG_Music')
  request.r(i1025[8], i1025[9], 0, i1024, 'restoreEffectShader')
  request.r(i1025[10], i1025[11], 0, i1024, 'stickerEffectShader')
  i1024.isComplete = !!i1025[12]
  i1024.isPaused = !!i1025[13]
  request.r(i1025[14], i1025[15], 0, i1024, 'currentLevel')
  i1024.startLevelOnPlay = !!i1025[16]
  i1024.currentLevelNo = i1025[17]
  return i1024
}

Deserializers["AudioController"] = function (request, data, root) {
  var i1026 = root || request.c( 'AudioController' )
  var i1027 = data
  request.r(i1027[0], i1027[1], 0, i1026, 'MainMixer')
  request.r(i1027[2], i1027[3], 0, i1026, 'UiClick')
  request.r(i1027[4], i1027[5], 0, i1026, 'UiClickSource')
  var i1029 = i1027[6]
  var i1028 = []
  for(var i = 0; i < i1029.length; i += 2) {
  request.r(i1029[i + 0], i1029[i + 1], 2, i1028, '')
  }
  i1026.SfxSources = i1028
  var i1031 = i1027[7]
  var i1030 = []
  for(var i = 0; i < i1031.length; i += 2) {
  request.r(i1031[i + 0], i1031[i + 1], 2, i1030, '')
  }
  i1026.AllClips = i1030
  return i1026
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i1034 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i1035 = data
  i1034.pivot = new pc.Vec2( i1035[0], i1035[1] )
  i1034.anchorMin = new pc.Vec2( i1035[2], i1035[3] )
  i1034.anchorMax = new pc.Vec2( i1035[4], i1035[5] )
  i1034.sizeDelta = new pc.Vec2( i1035[6], i1035[7] )
  i1034.anchoredPosition3D = new pc.Vec3( i1035[8], i1035[9], i1035[10] )
  i1034.rotation = new pc.Quat(i1035[11], i1035[12], i1035[13], i1035[14])
  i1034.scale = new pc.Vec3( i1035[15], i1035[16], i1035[17] )
  return i1034
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i1036 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i1037 = data
  i1036.planeDistance = i1037[0]
  i1036.referencePixelsPerUnit = i1037[1]
  i1036.isFallbackOverlay = !!i1037[2]
  i1036.renderMode = i1037[3]
  i1036.renderOrder = i1037[4]
  i1036.sortingLayerName = i1037[5]
  i1036.sortingOrder = i1037[6]
  i1036.scaleFactor = i1037[7]
  request.r(i1037[8], i1037[9], 0, i1036, 'worldCamera')
  i1036.overrideSorting = !!i1037[10]
  i1036.pixelPerfect = !!i1037[11]
  i1036.targetDisplay = i1037[12]
  i1036.overridePixelPerfect = !!i1037[13]
  i1036.enabled = !!i1037[14]
  return i1036
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i1038 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i1039 = data
  i1038.m_UiScaleMode = i1039[0]
  i1038.m_ReferencePixelsPerUnit = i1039[1]
  i1038.m_ScaleFactor = i1039[2]
  i1038.m_ReferenceResolution = new pc.Vec2( i1039[3], i1039[4] )
  i1038.m_ScreenMatchMode = i1039[5]
  i1038.m_MatchWidthOrHeight = i1039[6]
  i1038.m_PhysicalUnit = i1039[7]
  i1038.m_FallbackScreenDPI = i1039[8]
  i1038.m_DefaultSpriteDPI = i1039[9]
  i1038.m_DynamicPixelsPerUnit = i1039[10]
  i1038.m_PresetInfoIsWorld = !!i1039[11]
  return i1038
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i1040 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i1041 = data
  i1040.m_IgnoreReversedGraphics = !!i1041[0]
  i1040.m_BlockingObjects = i1041[1]
  i1040.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i1041[2] )
  return i1040
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i1042 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i1043 = data
  i1042.cullTransparentMesh = !!i1043[0]
  return i1042
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i1044 = root || request.c( 'UnityEngine.UI.Image' )
  var i1045 = data
  request.r(i1045[0], i1045[1], 0, i1044, 'm_Sprite')
  i1044.m_Type = i1045[2]
  i1044.m_PreserveAspect = !!i1045[3]
  i1044.m_FillCenter = !!i1045[4]
  i1044.m_FillMethod = i1045[5]
  i1044.m_FillAmount = i1045[6]
  i1044.m_FillClockwise = !!i1045[7]
  i1044.m_FillOrigin = i1045[8]
  i1044.m_UseSpriteMesh = !!i1045[9]
  i1044.m_PixelsPerUnitMultiplier = i1045[10]
  request.r(i1045[11], i1045[12], 0, i1044, 'm_Material')
  i1044.m_Maskable = !!i1045[13]
  i1044.m_Color = new pc.Color(i1045[14], i1045[15], i1045[16], i1045[17])
  i1044.m_RaycastTarget = !!i1045[18]
  i1044.m_RaycastPadding = new pc.Vec4( i1045[19], i1045[20], i1045[21], i1045[22] )
  return i1044
}

Deserializers["UnityEngine.UI.Text"] = function (request, data, root) {
  var i1046 = root || request.c( 'UnityEngine.UI.Text' )
  var i1047 = data
  i1046.m_FontData = request.d('UnityEngine.UI.FontData', i1047[0], i1046.m_FontData)
  i1046.m_Text = i1047[1]
  request.r(i1047[2], i1047[3], 0, i1046, 'm_Material')
  i1046.m_Maskable = !!i1047[4]
  i1046.m_Color = new pc.Color(i1047[5], i1047[6], i1047[7], i1047[8])
  i1046.m_RaycastTarget = !!i1047[9]
  i1046.m_RaycastPadding = new pc.Vec4( i1047[10], i1047[11], i1047[12], i1047[13] )
  return i1046
}

Deserializers["UnityEngine.UI.FontData"] = function (request, data, root) {
  var i1048 = root || request.c( 'UnityEngine.UI.FontData' )
  var i1049 = data
  request.r(i1049[0], i1049[1], 0, i1048, 'm_Font')
  i1048.m_FontSize = i1049[2]
  i1048.m_FontStyle = i1049[3]
  i1048.m_BestFit = !!i1049[4]
  i1048.m_MinSize = i1049[5]
  i1048.m_MaxSize = i1049[6]
  i1048.m_Alignment = i1049[7]
  i1048.m_AlignByGeometry = !!i1049[8]
  i1048.m_RichText = !!i1049[9]
  i1048.m_HorizontalOverflow = i1049[10]
  i1048.m_VerticalOverflow = i1049[11]
  i1048.m_LineSpacing = i1049[12]
  return i1048
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i1050 = root || request.c( 'UnityEngine.UI.Button' )
  var i1051 = data
  i1050.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i1051[0], i1050.m_OnClick)
  i1050.m_Navigation = request.d('UnityEngine.UI.Navigation', i1051[1], i1050.m_Navigation)
  i1050.m_Transition = i1051[2]
  i1050.m_Colors = request.d('UnityEngine.UI.ColorBlock', i1051[3], i1050.m_Colors)
  i1050.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i1051[4], i1050.m_SpriteState)
  i1050.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i1051[5], i1050.m_AnimationTriggers)
  i1050.m_Interactable = !!i1051[6]
  request.r(i1051[7], i1051[8], 0, i1050, 'm_TargetGraphic')
  return i1050
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i1052 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i1053 = data
  i1052.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i1053[0], i1052.m_PersistentCalls)
  return i1052
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i1054 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i1055 = data
  i1054.m_Mode = i1055[0]
  i1054.m_WrapAround = !!i1055[1]
  request.r(i1055[2], i1055[3], 0, i1054, 'm_SelectOnUp')
  request.r(i1055[4], i1055[5], 0, i1054, 'm_SelectOnDown')
  request.r(i1055[6], i1055[7], 0, i1054, 'm_SelectOnLeft')
  request.r(i1055[8], i1055[9], 0, i1054, 'm_SelectOnRight')
  return i1054
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i1056 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i1057 = data
  i1056.m_NormalColor = new pc.Color(i1057[0], i1057[1], i1057[2], i1057[3])
  i1056.m_HighlightedColor = new pc.Color(i1057[4], i1057[5], i1057[6], i1057[7])
  i1056.m_PressedColor = new pc.Color(i1057[8], i1057[9], i1057[10], i1057[11])
  i1056.m_SelectedColor = new pc.Color(i1057[12], i1057[13], i1057[14], i1057[15])
  i1056.m_DisabledColor = new pc.Color(i1057[16], i1057[17], i1057[18], i1057[19])
  i1056.m_ColorMultiplier = i1057[20]
  i1056.m_FadeDuration = i1057[21]
  return i1056
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i1058 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i1059 = data
  request.r(i1059[0], i1059[1], 0, i1058, 'm_HighlightedSprite')
  request.r(i1059[2], i1059[3], 0, i1058, 'm_PressedSprite')
  request.r(i1059[4], i1059[5], 0, i1058, 'm_SelectedSprite')
  request.r(i1059[6], i1059[7], 0, i1058, 'm_DisabledSprite')
  return i1058
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i1060 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i1061 = data
  i1060.m_NormalTrigger = i1061[0]
  i1060.m_HighlightedTrigger = i1061[1]
  i1060.m_PressedTrigger = i1061[2]
  i1060.m_SelectedTrigger = i1061[3]
  i1060.m_DisabledTrigger = i1061[4]
  return i1060
}

Deserializers["PlayableHudRuntime"] = function (request, data, root) {
  var i1062 = root || request.c( 'PlayableHudRuntime' )
  var i1063 = data
  return i1062
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i1064 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i1065 = data
  request.r(i1065[0], i1065[1], 0, i1064, 'm_FirstSelected')
  i1064.m_sendNavigationEvents = !!i1065[2]
  i1064.m_DragThreshold = i1065[3]
  return i1064
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i1066 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i1067 = data
  i1066.m_HorizontalAxis = i1067[0]
  i1066.m_VerticalAxis = i1067[1]
  i1066.m_SubmitButton = i1067[2]
  i1066.m_CancelButton = i1067[3]
  i1066.m_InputActionsPerSecond = i1067[4]
  i1066.m_RepeatDelay = i1067[5]
  i1066.m_ForceModuleActive = !!i1067[6]
  i1066.m_SendPointerHoverToParent = !!i1067[7]
  return i1066
}

Deserializers["PlayableRouter"] = function (request, data, root) {
  var i1068 = root || request.c( 'PlayableRouter' )
  var i1069 = data
  var i1071 = i1069[0]
  var i1070 = []
  for(var i = 0; i < i1071.length; i += 2) {
  request.r(i1071[i + 0], i1071[i + 1], 2, i1070, '')
  }
  i1068.menuObjects = i1070
  var i1073 = i1069[1]
  var i1072 = []
  for(var i = 0; i < i1073.length; i += 2) {
  request.r(i1073[i + 0], i1073[i + 1], 2, i1072, '')
  }
  i1068.gameplayObjects = i1072
  var i1075 = i1069[2]
  var i1074 = []
  for(var i = 0; i < i1075.length; i += 1) {
    i1074.push( request.d('PlayableRouter+SubLevelSlot', i1075[i + 0]) );
  }
  i1068.subLevels = i1074
  i1068.fadeDuration = i1069[3]
  i1068.onMenuClosing = request.d('UnityEngine.Events.UnityEvent', i1069[4], i1068.onMenuClosing)
  i1068.lockedMessage = i1069[5]
  i1068.lockedTapsToCTA = i1069[6]
  return i1068
}

Deserializers["PlayableRouter+SubLevelSlot"] = function (request, data, root) {
  var i1078 = root || request.c( 'PlayableRouter+SubLevelSlot' )
  var i1079 = data
  request.r(i1079[0], i1079[1], 0, i1078, 'button')
  request.r(i1079[2], i1079[3], 0, i1078, 'level')
  return i1078
}

Deserializers["ToastManager"] = function (request, data, root) {
  var i1080 = root || request.c( 'ToastManager' )
  var i1081 = data
  request.r(i1081[0], i1081[1], 0, i1080, 'toastPanel')
  request.r(i1081[2], i1081[3], 0, i1080, 'toastPopup')
  request.r(i1081[4], i1081[5], 0, i1080, 'canvasGroup')
  request.r(i1081[6], i1081[7], 0, i1080, 'toastText')
  i1080.startY = i1081[8]
  i1080.visibleY = i1081[9]
  i1080.endY = i1081[10]
  i1080.animationTime = i1081[11]
  i1080.animationTimeUp = i1081[12]
  return i1080
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasGroup"] = function (request, data, root) {
  var i1082 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasGroup' )
  var i1083 = data
  i1082.m_Alpha = i1083[0]
  i1082.m_Interactable = !!i1083[1]
  i1082.m_BlocksRaycasts = !!i1083[2]
  i1082.m_IgnoreParentGroups = !!i1083[3]
  i1082.enabled = !!i1083[4]
  return i1082
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i1084 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i1085 = data
  i1084.ambientIntensity = i1085[0]
  i1084.reflectionIntensity = i1085[1]
  i1084.ambientMode = i1085[2]
  i1084.ambientLight = new pc.Color(i1085[3], i1085[4], i1085[5], i1085[6])
  i1084.ambientSkyColor = new pc.Color(i1085[7], i1085[8], i1085[9], i1085[10])
  i1084.ambientGroundColor = new pc.Color(i1085[11], i1085[12], i1085[13], i1085[14])
  i1084.ambientEquatorColor = new pc.Color(i1085[15], i1085[16], i1085[17], i1085[18])
  i1084.fogColor = new pc.Color(i1085[19], i1085[20], i1085[21], i1085[22])
  i1084.fogEndDistance = i1085[23]
  i1084.fogStartDistance = i1085[24]
  i1084.fogDensity = i1085[25]
  i1084.fog = !!i1085[26]
  request.r(i1085[27], i1085[28], 0, i1084, 'skybox')
  i1084.fogMode = i1085[29]
  var i1087 = i1085[30]
  var i1086 = []
  for(var i = 0; i < i1087.length; i += 1) {
    i1086.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i1087[i + 0]) );
  }
  i1084.lightmaps = i1086
  i1084.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i1085[31], i1084.lightProbes)
  i1084.lightmapsMode = i1085[32]
  i1084.mixedBakeMode = i1085[33]
  i1084.environmentLightingMode = i1085[34]
  i1084.ambientProbe = new pc.SphericalHarmonicsL2(i1085[35])
  request.r(i1085[36], i1085[37], 0, i1084, 'customReflection')
  request.r(i1085[38], i1085[39], 0, i1084, 'defaultReflection')
  i1084.defaultReflectionMode = i1085[40]
  i1084.defaultReflectionResolution = i1085[41]
  i1084.sunLightObjectId = i1085[42]
  i1084.pixelLightCount = i1085[43]
  i1084.defaultReflectionHDR = !!i1085[44]
  i1084.hasLightDataAsset = !!i1085[45]
  i1084.hasManualGenerate = !!i1085[46]
  return i1084
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i1090 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i1091 = data
  request.r(i1091[0], i1091[1], 0, i1090, 'lightmapColor')
  request.r(i1091[2], i1091[3], 0, i1090, 'lightmapDirection')
  request.r(i1091[4], i1091[5], 0, i1090, 'shadowMask')
  return i1090
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i1092 = root || new UnityEngine.LightProbes()
  var i1093 = data
  return i1092
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

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Assets.Mesh":{"name":0,"halfPrecision":1,"useSimplification":2,"useUInt32IndexFormat":3,"vertexCount":4,"aabb":5,"streams":6,"vertices":7,"subMeshes":8,"bindposes":9,"blendShapes":10},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh":{"triangles":0},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape":{"name":0,"frames":1},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystem":{"main":0,"colorBySpeed":1,"colorOverLifetime":2,"emission":3,"rotationBySpeed":4,"rotationOverLifetime":5,"shape":6,"sizeBySpeed":7,"sizeOverLifetime":8,"textureSheetAnimation":9,"velocityOverLifetime":10,"noise":11,"inheritVelocity":12,"forceOverLifetime":13,"limitVelocityOverLifetime":14,"useAutoRandomSeed":15,"randomSeed":16},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule":{"duration":0,"loop":1,"prewarm":2,"startDelay":3,"startLifetime":4,"startSpeed":5,"startSize3D":6,"startSizeX":7,"startSizeY":8,"startSizeZ":9,"startRotation3D":10,"startRotationX":11,"startRotationY":12,"startRotationZ":13,"startColor":14,"gravityModifier":15,"simulationSpace":16,"customSimulationSpace":17,"simulationSpeed":19,"useUnscaledTime":20,"scalingMode":21,"playOnAwake":22,"maxParticles":23,"emitterVelocityMode":24,"stopAction":25},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve":{"mode":0,"curveMin":1,"curveMax":2,"curveMultiplier":3,"constantMin":4,"constantMax":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient":{"mode":0,"gradientMin":1,"gradientMax":2,"colorMin":3,"colorMax":7},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient":{"mode":0,"colorKeys":1,"alphaKeys":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule":{"enabled":0,"color":1,"range":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey":{"color":0,"time":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey":{"alpha":0,"time":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule":{"enabled":0,"color":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule":{"enabled":0,"rateOverTime":1,"rateOverDistance":2,"bursts":3},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst":{"count":0,"cycleCount":1,"minCount":2,"maxCount":3,"repeatInterval":4,"time":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule":{"enabled":0,"shapeType":1,"randomDirectionAmount":2,"sphericalDirectionAmount":3,"randomPositionAmount":4,"alignToDirection":5,"radius":6,"radiusMode":7,"radiusSpread":8,"radiusSpeed":9,"radiusThickness":10,"angle":11,"length":12,"boxThickness":13,"meshShapeType":16,"mesh":17,"meshRenderer":19,"skinnedMeshRenderer":21,"useMeshMaterialIndex":23,"meshMaterialIndex":24,"useMeshColors":25,"normalOffset":26,"arc":27,"arcMode":28,"arcSpread":29,"arcSpeed":30,"donutRadius":31,"position":32,"rotation":35,"scale":38},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule":{"enabled":0,"mode":1,"animation":2,"numTilesX":3,"numTilesY":4,"useRandomRow":5,"frameOverTime":6,"startFrame":7,"cycleCount":8,"rowIndex":9,"flipU":10,"flipV":11,"spriteCount":12,"sprites":13},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"radial":4,"speedModifier":5,"space":6,"orbitalX":7,"orbitalY":8,"orbitalZ":9,"orbitalOffsetX":10,"orbitalOffsetY":11,"orbitalOffsetZ":12},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule":{"enabled":0,"separateAxes":1,"strengthX":2,"strengthY":3,"strengthZ":4,"frequency":5,"damping":6,"octaveCount":7,"octaveMultiplier":8,"octaveScale":9,"quality":10,"scrollSpeed":11,"scrollSpeedMultiplier":12,"remapEnabled":13,"remapX":14,"remapY":15,"remapZ":16,"positionAmount":17,"rotationAmount":18,"sizeAmount":19},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule":{"enabled":0,"mode":1,"curve":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"space":4,"randomized":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule":{"enabled":0,"limit":1,"limitX":2,"limitY":3,"limitZ":4,"dampen":5,"separateAxes":6,"space":7,"drag":8,"multiplyDragByParticleSize":9,"multiplyDragByParticleVelocity":10},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer":{"mesh":0,"meshCount":2,"activeVertexStreamsCount":3,"alignment":4,"renderMode":5,"sortMode":6,"lengthScale":7,"velocityScale":8,"cameraVelocityScale":9,"normalDirection":10,"sortingFudge":11,"minParticleSize":12,"maxParticleSize":13,"pivot":14,"trailMaterial":17,"applyActiveColorSpace":19,"enabled":20,"sharedMaterial":21,"sharedMaterials":23,"receiveShadows":24,"shadowCastingMode":25,"sortingLayerID":26,"sortingOrder":27,"lightmapIndex":28,"lightmapSceneIndex":29,"lightmapScaleOffset":30,"lightProbeUsage":34,"reflectionProbeUsage":35},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Components.Animator":{"animatorController":0,"avatar":2,"updateMode":4,"hasTransformHierarchy":5,"applyRootMotion":6,"humanBones":7,"enabled":8},"Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer":{"color":0,"sprite":4,"flipX":6,"flipY":7,"drawMode":8,"size":9,"tileMode":11,"adaptiveModeThreshold":12,"maskInteraction":13,"spriteSortPoint":14,"enabled":15,"sharedMaterial":16,"sharedMaterials":18,"receiveShadows":19,"shadowCastingMode":20,"sortingLayerID":21,"sortingOrder":22,"lightmapIndex":23,"lightmapSceneIndex":24,"lightmapScaleOffset":25,"lightProbeUsage":29,"reflectionProbeUsage":30},"Luna.Unity.DTO.UnityEngine.Components.TrailRenderer":{"positions":0,"positionCount":1,"time":2,"startWidth":3,"endWidth":4,"widthMultiplier":5,"autodestruct":6,"emitting":7,"numCornerVertices":8,"numCapVertices":9,"minVertexDistance":10,"colorGradient":11,"startColor":12,"endColor":16,"generateLightingData":20,"textureMode":21,"alignment":22,"widthCurve":23,"enabled":24,"sharedMaterial":25,"sharedMaterials":27,"receiveShadows":28,"shadowCastingMode":29,"sortingLayerID":30,"sortingOrder":31,"lightmapIndex":32,"lightmapSceneIndex":33,"lightmapScaleOffset":34,"lightProbeUsage":38,"reflectionProbeUsage":39},"Luna.Unity.DTO.UnityEngine.Components.LineRenderer":{"textureMode":0,"alignment":1,"widthCurve":2,"colorGradient":3,"positions":4,"positionCount":5,"widthMultiplier":6,"startWidth":7,"endWidth":8,"numCornerVertices":9,"numCapVertices":10,"useWorldSpace":11,"loop":12,"startColor":13,"endColor":17,"generateLightingData":21,"enabled":22,"sharedMaterial":23,"sharedMaterials":25,"receiveShadows":26,"shadowCastingMode":27,"sortingLayerID":28,"sortingOrder":29,"lightmapIndex":30,"lightmapSceneIndex":31,"lightmapScaleOffset":32,"lightProbeUsage":36,"reflectionProbeUsage":37},"Luna.Unity.DTO.UnityEngine.Components.SpriteMask":{"frontSortingLayerID":0,"frontSortingOrder":1,"backSortingLayerID":2,"backSortingOrder":3,"alphaCutoff":4,"sprite":5,"tileMode":7,"isCustomRangeActive":8,"spriteSortPoint":9,"enabled":10,"sharedMaterial":11,"sharedMaterials":13,"receiveShadows":14,"shadowCastingMode":15,"sortingLayerID":16,"sortingOrder":17,"lightmapIndex":18,"lightmapSceneIndex":19,"lightmapScaleOffset":20,"lightProbeUsage":24,"reflectionProbeUsage":25},"Luna.Unity.DTO.UnityEngine.Components.CircleCollider2D":{"radius":0,"enabled":1,"isTrigger":2,"usedByEffector":3,"density":4,"offset":5,"material":7},"Luna.Unity.DTO.UnityEngine.Components.PolygonCollider2D":{"usedByComposite":0,"autoTiling":1,"points":2,"enabled":3,"isTrigger":4,"usedByEffector":5,"density":6,"offset":7,"material":9},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D":{"usedByComposite":0,"autoTiling":1,"size":2,"edgeRadius":4,"enabled":5,"isTrigger":6,"usedByEffector":7,"density":8,"offset":9,"material":11},"Luna.Unity.DTO.UnityEngine.Components.AudioSource":{"clip":0,"outputAudioMixerGroup":2,"playOnAwake":4,"loop":5,"time":6,"volume":7,"pitch":8,"enabled":9},"Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D":{"bodyType":0,"material":1,"simulated":3,"useAutoMass":4,"mass":5,"drag":6,"angularDrag":7,"gravityScale":8,"collisionDetectionMode":9,"sleepMode":10,"constraints":11},"Luna.Unity.DTO.UnityEngine.Textures.Cubemap":{"name":0,"atlasId":1,"mipmapCount":2,"hdr":3,"size":4,"anisoLevel":5,"filterMode":6,"rects":7,"wrapU":8,"wrapV":9},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"aspect":0,"orthographic":1,"orthographicSize":2,"backgroundColor":3,"nearClipPlane":7,"farClipPlane":8,"fieldOfView":9,"depth":10,"clearFlags":11,"cullingMask":12,"rect":13,"targetTexture":14,"usePhysicalProperties":16,"focalLength":17,"sensorSize":18,"lensShift":20,"gateFit":22,"commandBufferCount":23,"cameraType":24,"enabled":25},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"planeDistance":0,"referencePixelsPerUnit":1,"isFallbackOverlay":2,"renderMode":3,"renderOrder":4,"sortingLayerName":5,"sortingOrder":6,"scaleFactor":7,"worldCamera":8,"overrideSorting":10,"pixelPerfect":11,"targetDisplay":12,"overridePixelPerfect":13,"enabled":14},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Components.CanvasGroup":{"m_Alpha":0,"m_Interactable":1,"m_BlocksRaycasts":2,"m_IgnoreParentGroups":3,"enabled":4},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"customReflection":36,"defaultReflection":38,"defaultReflectionMode":40,"defaultReflectionResolution":41,"sunLightObjectId":42,"pixelLightCount":43,"defaultReflectionHDR":44,"hasLightDataAsset":45,"hasManualGenerate":46},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2,"shadowMask":4},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"hasDepthOnlyPass":10,"isCreatedByShaderGraph":11,"disableBatching":12,"compiled":13},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip":{"name":0,"wrapMode":1,"isLooping":2,"length":3,"curves":4,"events":5,"halfPrecision":6,"_frameRate":7,"localBounds":8,"hasMuscleCurves":9,"clipMuscleConstant":10,"clipBindingConstant":11},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve":{"path":0,"hash":1,"componentType":2,"property":3,"keys":4,"objectReferenceKeys":5},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey":{"time":0,"value":1},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent":{"functionName":0,"floatParameter":1,"intParameter":2,"stringParameter":3,"objectReferenceParameter":4,"time":6},"Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds":{"center":0,"extends":3},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant":{"genericBindings":0,"pptrCurveMapping":1},"Luna.Unity.DTO.UnityEngine.Assets.Font":{"name":0,"ascent":1,"originalLineHeight":2,"fontSize":3,"characterInfo":4,"texture":5,"originalFontSize":7},"Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo":{"index":0,"advance":1,"bearing":2,"glyphWidth":3,"glyphHeight":4,"minX":5,"maxX":6,"minY":7,"maxY":8,"uvBottomLeftX":9,"uvBottomLeftY":10,"uvBottomRightX":11,"uvBottomRightY":12,"uvTopLeftX":13,"uvTopLeftY":14,"uvTopRightX":15,"uvTopRightY":16},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController":{"name":0,"layers":1,"parameters":2,"animationClips":3,"avatarUnsupported":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer":{"name":0,"defaultWeight":1,"blendingMode":2,"avatarMask":3,"syncedLayerIndex":4,"syncedLayerAffectsTiming":5,"syncedLayers":6,"stateMachine":7},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine":{"id":0,"name":1,"path":2,"states":3,"machines":4,"entryStateTransitions":5,"exitStateTransitions":6,"anyStateTransitions":7,"defaultStateId":8},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState":{"id":0,"name":1,"cycleOffset":2,"cycleOffsetParameter":3,"cycleOffsetParameterActive":4,"mirror":5,"mirrorParameter":6,"mirrorParameterActive":7,"motionId":8,"nameHash":9,"fullPathHash":10,"speed":11,"speedParameter":12,"speedParameterActive":13,"tag":14,"tagHash":15,"writeDefaultValues":16,"behaviours":17,"transitions":18},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition":{"fullPath":0,"canTransitionToSelf":1,"duration":2,"exitTime":3,"hasExitTime":4,"hasFixedDuration":5,"interruptionSource":6,"offset":7,"orderedInterruption":8,"destinationStateId":9,"isExit":10,"mute":11,"solo":12,"conditions":13},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition":{"destinationStateId":0,"isExit":1,"mute":2,"solo":3,"conditions":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition":{"mode":0,"parameter":1,"threshold":2},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter":{"defaultBool":0,"defaultFloat":1,"defaultInt":2,"name":3,"nameHash":4,"type":5},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableStaticBatching":9,"enableDynamicBatching":10,"usePreservativeDynamicBatching":11,"lightmapEncodingQuality":12,"desiredColorSpace":13,"allTags":14},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37},"Luna.Unity.DTO.UnityEngine.Audio.AudioMixer":{"groups":0,"snapshots":1},"Luna.Unity.DTO.UnityEngine.Audio.AudioMixerGroup":{"id":0,"childGroupIds":1,"name":2},"Luna.Unity.DTO.UnityEngine.Audio.AudioMixerSnapshot":{"id":0,"parameters":1},"Luna.Unity.DTO.UnityEngine.Audio.AudioMixerSnapshot+Parameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame":{"weight":0,"vertices":1,"normals":2,"tangents":3}}

Deserializers.requiredComponents = {"79":[80],"81":[80],"82":[80],"83":[80],"84":[80],"85":[80],"86":[87],"88":[53],"89":[90],"91":[90],"92":[90],"93":[90],"94":[90],"95":[90],"96":[90],"97":[45],"98":[45],"99":[45],"100":[45],"101":[45],"102":[45],"103":[45],"104":[45],"105":[45],"106":[45],"107":[45],"108":[45],"109":[45],"110":[53],"111":[112],"113":[114],"115":[114],"64":[58],"116":[30],"117":[9],"118":[40],"119":[9],"120":[121],"122":[121],"35":[34],"52":[40],"123":[9],"124":[13],"28":[9],"125":[58],"126":[58],"67":[64],"59":[68,58],"127":[58],"66":[64],"128":[58],"129":[58],"130":[58],"131":[58],"132":[58],"133":[58],"134":[58],"135":[58],"136":[58],"137":[68,58],"138":[58],"139":[58],"140":[58],"141":[58],"60":[68,58],"142":[58],"143":[72],"144":[72],"73":[72],"145":[72],"146":[53],"147":[53]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Texture2D","UnityEngine.Transform","UnityEngine.ParticleSystem","UnityEngine.ParticleSystemRenderer","UnityEngine.Mesh","UnityEngine.Material","UnityEngine.MonoBehaviour","Level1_Hair_Playable_Step47","UnityEngine.SpriteRenderer","OutlinePulse","UnityEngine.GameObject","UnityEngine.AudioClip","BasicDrag","BD_Progress","BD_ProgressHelper","BD_CameraFollow","UnityEngine.Sprite","DraggableBrush","UnityEngine.AudioSource","ScratchCardAsset.ScratchCardManager","PlayableCTA","PlayableFadeCoverSettings","ScratchCardAsset.ScratchCard","ScratchCardAsset.EraseProgress","UnityEngine.Animator","UnityEditor.Animations.AnimatorController","BD_AnimationHelper","UnityEngine.U2D.Animation.SpriteSkin","UnityEngine.TrailRenderer","UnityEngine.LineRenderer","StaticFixedPipe","UnityEngine.SpriteMask","UnityEngine.CircleCollider2D","DG.Tweening.DOTweenAnimation","PlayTweenOnHit","UnityEngine.PolygonCollider2D","PlaySfxOnCollision","PlayParticlesOnCollision","InteractableBones","UnityEngine.BoxCollider2D","WaypointFollower","BD_Clamp","UnityEditor.Audio.AudioMixerGroupController","BD_Action","UnityEngine.Rigidbody2D","BD_Audio","Level1_HairAnim","BD_SpriteChange","BD_TapandHold","BD_AnimatorDrag","TapandHold_Simple","SpriteButton","UnityEngine.Camera","UnityEngine.AudioListener","CameraController","MusicSource","UI_Manager","UnityEngine.RectTransform","UnityEngine.UI.Image","UnityEngine.UI.Text","GameManagerPlayable","AudioController","UnityEditor.Audio.AudioMixerController","UnityEngine.Canvas","UnityEngine.EventSystems.UIBehaviour","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEngine.CanvasRenderer","UnityEngine.Font","UnityEngine.UI.Button","PlayableHudRuntime","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","PlayableRouter","ToastManager","UnityEngine.CanvasGroup","UnityEngine.Cubemap","DG.Tweening.Core.DOTweenSettings","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.ConstantForce","UnityEngine.Rigidbody","UnityEngine.Joint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.FixedJoint","UnityEngine.CharacterJoint","UnityEngine.ConfigurableJoint","UnityEngine.CompositeCollider2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.MeshRenderer","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","RopeController","BD_Fold","BD_Sticky","Lvl3_DripAnimator","Lvl3_LipstickPicker","UnityEngine.Collider2D","Lvl3_PourFill","RadialCircleFill","TeaseTapCTA","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.Mask","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Slider","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster"]

Deserializers.unityVersion = "2022.3.62f2";

Deserializers.productName = "Perfect Makeover Fashion ASMR";

Deserializers.lunaInitializationTime = "08/20/2026 07:41:52";

Deserializers.lunaDaysRunning = "17.9";

Deserializers.lunaVersion = "7.2.0";

Deserializers.lunaSHA = "ea08d29afe2968efcb8d91d5624f033c6485cc68";

Deserializers.creativeName = "4Sept2026_Lvl1_1_Step_3to4";

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

Deserializers.runtimeAnalysisExcludedClassesCount = "1752";

Deserializers.runtimeAnalysisExcludedMethodsCount = "4303";

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

Deserializers.buildID = "de4ccd40-41ee-4f25-ae9e-e354481726d4";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[],[["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"]],[],[]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

