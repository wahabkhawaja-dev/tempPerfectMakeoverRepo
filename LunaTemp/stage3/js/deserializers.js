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
  request.r(i823[17], i823[18], 0, i822, 'Button_Hand')
  var i831 = i823[19]
  var i830 = []
  for(var i = 0; i < i831.length; i += 2) {
  request.r(i831[i + 0], i831[i + 1], 2, i830, '')
  }
  i822.itemEnable_Onstart = i830
  var i833 = i823[20]
  var i832 = []
  for(var i = 0; i < i833.length; i += 2) {
  request.r(i833[i + 0], i833[i + 1], 2, i832, '')
  }
  i822.itemDisable_Onstart = i832
  var i835 = i823[21]
  var i834 = []
  for(var i = 0; i < i835.length; i += 2) {
  request.r(i835[i + 0], i835[i + 1], 2, i834, '')
  }
  i822.itemEnable_Oncomplete = i834
  var i837 = i823[22]
  var i836 = []
  for(var i = 0; i < i837.length; i += 2) {
  request.r(i837[i + 0], i837[i + 1], 2, i836, '')
  }
  i822.itemDisable_Oncomplete = i836
  i822.levelKey = i823[23]
  i822.revealDirtyHoldTime = i823[24]
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

Deserializers["IntroLevelAnim"] = function (request, data, root) {
  var i852 = root || request.c( 'IntroLevelAnim' )
  var i853 = data
  request.r(i853[0], i853[1], 0, i852, 'menuLevel')
  i852.lvlkey = i853[2]
  request.r(i853[3], i853[4], 0, i852, 'DressChangeObj')
  request.r(i853[5], i853[6], 0, i852, 'DressChangeClip')
  return i852
}

Deserializers["Level_PoseController"] = function (request, data, root) {
  var i854 = root || request.c( 'Level_PoseController' )
  var i855 = data
  var i857 = i855[0]
  var i856 = []
  for(var i = 0; i < i857.length; i += 2) {
  request.r(i857[i + 0], i857[i + 1], 2, i856, '')
  }
  i854.itemToShow = i856
  var i859 = i855[1]
  var i858 = []
  for(var i = 0; i < i859.length; i += 2) {
  request.r(i859[i + 0], i859[i + 1], 2, i858, '')
  }
  i854.itemToHide = i858
  i854.stepTarget = i855[2]
  return i854
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

Deserializers["UnityEngine.U2D.Animation.SpriteSkin"] = function (request, data, root) {
  var i870 = root || request.c( 'UnityEngine.U2D.Animation.SpriteSkin' )
  var i871 = data
  request.r(i871[0], i871[1], 0, i870, 'm_RootBone')
  var i873 = i871[2]
  var i872 = []
  for(var i = 0; i < i873.length; i += 2) {
  request.r(i873[i + 0], i873[i + 1], 2, i872, '')
  }
  i870.m_BoneTransforms = i872
  i870.m_AlwaysUpdate = !!i871[3]
  i870.m_AutoRebind = !!i871[4]
  return i870
}

Deserializers["DG.Tweening.DOTweenAnimation"] = function (request, data, root) {
  var i874 = root || request.c( 'DG.Tweening.DOTweenAnimation' )
  var i875 = data
  i874.targetIsSelf = !!i875[0]
  request.r(i875[1], i875[2], 0, i874, 'targetGO')
  i874.tweenTargetIsTargetGO = !!i875[3]
  i874.delay = i875[4]
  i874.duration = i875[5]
  i874.easeType = i875[6]
  i874.easeCurve = new pc.AnimationCurve( { keys_flow: i875[7] } )
  i874.loopType = i875[8]
  i874.loops = i875[9]
  i874.id = i875[10]
  i874.isRelative = !!i875[11]
  i874.isFrom = !!i875[12]
  i874.isIndependentUpdate = !!i875[13]
  i874.autoKill = !!i875[14]
  i874.autoGenerate = !!i875[15]
  i874.isActive = !!i875[16]
  i874.isValid = !!i875[17]
  request.r(i875[18], i875[19], 0, i874, 'target')
  i874.animationType = i875[20]
  i874.targetType = i875[21]
  i874.forcedTargetType = i875[22]
  i874.autoPlay = !!i875[23]
  i874.useTargetAsV3 = !!i875[24]
  i874.endValueFloat = i875[25]
  i874.endValueV3 = new pc.Vec3( i875[26], i875[27], i875[28] )
  i874.endValueV2 = new pc.Vec2( i875[29], i875[30] )
  i874.endValueColor = new pc.Color(i875[31], i875[32], i875[33], i875[34])
  i874.endValueString = i875[35]
  i874.endValueRect = UnityEngine.Rect.MinMaxRect(i875[36], i875[37], i875[38], i875[39])
  request.r(i875[40], i875[41], 0, i874, 'endValueTransform')
  i874.optionalBool0 = !!i875[42]
  i874.optionalBool1 = !!i875[43]
  i874.optionalFloat0 = i875[44]
  i874.optionalInt0 = i875[45]
  i874.optionalRotationMode = i875[46]
  i874.optionalScrambleMode = i875[47]
  i874.optionalShakeRandomnessMode = i875[48]
  i874.optionalString = i875[49]
  i874.updateType = i875[50]
  i874.isSpeedBased = !!i875[51]
  i874.hasOnStart = !!i875[52]
  i874.hasOnPlay = !!i875[53]
  i874.hasOnUpdate = !!i875[54]
  i874.hasOnStepComplete = !!i875[55]
  i874.hasOnComplete = !!i875[56]
  i874.hasOnTweenCreated = !!i875[57]
  i874.hasOnRewind = !!i875[58]
  i874.onStart = request.d('UnityEngine.Events.UnityEvent', i875[59], i874.onStart)
  i874.onPlay = request.d('UnityEngine.Events.UnityEvent', i875[60], i874.onPlay)
  i874.onUpdate = request.d('UnityEngine.Events.UnityEvent', i875[61], i874.onUpdate)
  i874.onStepComplete = request.d('UnityEngine.Events.UnityEvent', i875[62], i874.onStepComplete)
  i874.onComplete = request.d('UnityEngine.Events.UnityEvent', i875[63], i874.onComplete)
  i874.onTweenCreated = request.d('UnityEngine.Events.UnityEvent', i875[64], i874.onTweenCreated)
  i874.onRewind = request.d('UnityEngine.Events.UnityEvent', i875[65], i874.onRewind)
  return i874
}

Deserializers["UnityEngine.Events.UnityEvent"] = function (request, data, root) {
  var i876 = root || request.c( 'UnityEngine.Events.UnityEvent' )
  var i877 = data
  i876.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i877[0], i876.m_PersistentCalls)
  return i876
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i878 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i879 = data
  var i881 = i879[0]
  var i880 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i881.length; i += 1) {
    i880.add(request.d('UnityEngine.Events.PersistentCall', i881[i + 0]));
  }
  i878.m_Calls = i880
  return i878
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i884 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i885 = data
  request.r(i885[0], i885[1], 0, i884, 'm_Target')
  i884.m_TargetAssemblyTypeName = i885[2]
  i884.m_MethodName = i885[3]
  i884.m_Mode = i885[4]
  i884.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i885[5], i884.m_Arguments)
  i884.m_CallState = i885[6]
  return i884
}

Deserializers["BD_AnimationHelper"] = function (request, data, root) {
  var i886 = root || request.c( 'BD_AnimationHelper' )
  var i887 = data
  i886.OnAnimationComplete = request.d('UnityEngine.Events.UnityEvent', i887[0], i886.OnAnimationComplete)
  request.r(i887[1], i887[2], 0, i886, 'sfxClip')
  return i886
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i888 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i889 = data
  request.r(i889[0], i889[1], 0, i888, 'm_ObjectArgument')
  i888.m_ObjectArgumentAssemblyTypeName = i889[2]
  i888.m_IntArgument = i889[3]
  i888.m_FloatArgument = i889[4]
  i888.m_StringArgument = i889[5]
  i888.m_BoolArgument = !!i889[6]
  return i888
}

Deserializers["SpriteButton"] = function (request, data, root) {
  var i890 = root || request.c( 'SpriteButton' )
  var i891 = data
  i890.isLocked = !!i891[0]
  i890.lockMsg = i891[1]
  i890.onClick = request.d('UnityEngine.Events.UnityEvent', i891[2], i890.onClick)
  i890.onLockedClick = request.d('UnityEngine.Events.UnityEvent', i891[3], i890.onLockedClick)
  i890.isLevelBtnSfx = !!i891[4]
  request.r(i891[5], i891[6], 0, i890, 'pivot')
  i890.reductionChange = i891[7]
  i890.animationDuration = i891[8]
  return i890
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D"] = function (request, data, root) {
  var i892 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D' )
  var i893 = data
  i892.usedByComposite = !!i893[0]
  i892.autoTiling = !!i893[1]
  i892.size = new pc.Vec2( i893[2], i893[3] )
  i892.edgeRadius = i893[4]
  i892.enabled = !!i893[5]
  i892.isTrigger = !!i893[6]
  i892.usedByEffector = !!i893[7]
  i892.density = i893[8]
  i892.offset = new pc.Vec2( i893[9], i893[10] )
  request.r(i893[11], i893[12], 0, i892, 'material')
  return i892
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.TrailRenderer"] = function (request, data, root) {
  var i894 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.TrailRenderer' )
  var i895 = data
  var i897 = i895[0]
  var i896 = []
  for(var i = 0; i < i897.length; i += 3) {
    i896.push( new pc.Vec3( i897[i + 0], i897[i + 1], i897[i + 2] ) );
  }
  i894.positions = i896
  i894.positionCount = i895[1]
  i894.time = i895[2]
  i894.startWidth = i895[3]
  i894.endWidth = i895[4]
  i894.widthMultiplier = i895[5]
  i894.autodestruct = !!i895[6]
  i894.emitting = !!i895[7]
  i894.numCornerVertices = i895[8]
  i894.numCapVertices = i895[9]
  i894.minVertexDistance = i895[10]
  i894.colorGradient = i895[11] ? new pc.ColorGradient(i895[11][0], i895[11][1], i895[11][2]) : null
  i894.startColor = new pc.Color(i895[12], i895[13], i895[14], i895[15])
  i894.endColor = new pc.Color(i895[16], i895[17], i895[18], i895[19])
  i894.generateLightingData = !!i895[20]
  i894.textureMode = i895[21]
  i894.alignment = i895[22]
  i894.widthCurve = new pc.AnimationCurve( { keys_flow: i895[23] } )
  i894.enabled = !!i895[24]
  request.r(i895[25], i895[26], 0, i894, 'sharedMaterial')
  var i899 = i895[27]
  var i898 = []
  for(var i = 0; i < i899.length; i += 2) {
  request.r(i899[i + 0], i899[i + 1], 2, i898, '')
  }
  i894.sharedMaterials = i898
  i894.receiveShadows = !!i895[28]
  i894.shadowCastingMode = i895[29]
  i894.sortingLayerID = i895[30]
  i894.sortingOrder = i895[31]
  i894.lightmapIndex = i895[32]
  i894.lightmapSceneIndex = i895[33]
  i894.lightmapScaleOffset = new pc.Vec4( i895[34], i895[35], i895[36], i895[37] )
  i894.lightProbeUsage = i895[38]
  i894.reflectionProbeUsage = i895[39]
  return i894
}

Deserializers["Level1_Cloth_Playable"] = function (request, data, root) {
  var i902 = root || request.c( 'Level1_Cloth_Playable' )
  var i903 = data
  request.r(i903[0], i903[1], 0, i902, 'WashingView')
  request.r(i903[2], i903[3], 0, i902, 'WashingTools')
  request.r(i903[4], i903[5], 0, i902, 'DressingView')
  request.r(i903[6], i903[7], 0, i902, 'DressingTools')
  i902.ZoomStep1 = request.d('ZoomPos', i903[8], i902.ZoomStep1)
  request.r(i903[9], i903[10], 0, i902, 'ToolStep1')
  request.r(i903[11], i903[12], 0, i902, 'Basket_Cloth')
  request.r(i903[13], i903[14], 0, i902, 'clothInside')
  request.r(i903[15], i903[16], 0, i902, 'clothRound')
  request.r(i903[17], i903[18], 0, i902, 'machineDoor')
  request.r(i903[19], i903[20], 0, i902, 'machineGlass')
  i902.ZoomStep2 = request.d('ZoomPos', i903[21], i902.ZoomStep2)
  i902.ZoomStep2b = request.d('ZoomPos', i903[22], i902.ZoomStep2b)
  request.r(i903[23], i903[24], 0, i902, 'ToolStep2')
  request.r(i903[25], i903[26], 0, i902, 'ToolStep2CamFollow')
  request.r(i903[27], i903[28], 0, i902, 'drawerObj')
  request.r(i903[29], i903[30], 0, i902, 'surfObj')
  request.r(i903[31], i903[32], 0, i902, 'surfPackTop')
  request.r(i903[33], i903[34], 0, i902, 'handStep2')
  request.r(i903[35], i903[36], 0, i902, 'surfController')
  request.r(i903[37], i903[38], 0, i902, 'clothsInside')
  request.r(i903[39], i903[40], 0, i902, 'clothsInsideGlass')
  request.r(i903[41], i903[42], 0, i902, 'clothsStaticClean')
  request.r(i903[43], i903[44], 0, i902, 'wetCloths')
  request.r(i903[45], i903[46], 0, i902, 'clothCleanInside')
  request.r(i903[47], i903[48], 0, i902, 'clothCleanInsideAnim')
  request.r(i903[49], i903[50], 0, i902, 'waterWave')
  request.r(i903[51], i903[52], 0, i902, 'clothCleanInside2')
  request.r(i903[53], i903[54], 0, i902, 'clothCleanInside2Cam')
  request.r(i903[55], i903[56], 0, i902, 'clothBasketTarget')
  request.r(i903[57], i903[58], 0, i902, 'clothBasketTarget2')
  request.r(i903[59], i903[60], 0, i902, 'waterSplash_Vfx')
  request.r(i903[61], i903[62], 0, i902, 'countDownTimerText')
  i902.countDown = i903[63]
  request.r(i903[64], i903[65], 0, i902, 'machineTimer')
  request.r(i903[66], i903[67], 0, i902, 'machineTimerRotater')
  request.r(i903[68], i903[69], 0, i902, 'machineTimerIndication')
  request.r(i903[70], i903[71], 0, i902, 'darazOpenSfx')
  request.r(i903[72], i903[73], 0, i902, 'darazCloseSfx')
  request.r(i903[74], i903[75], 0, i902, 'doorOpenSfx')
  request.r(i903[76], i903[77], 0, i902, 'machineStartSfx')
  request.r(i903[78], i903[79], 0, i902, 'machineFinishSfx')
  request.r(i903[80], i903[81], 0, i902, 'waterDrainSfx')
  i902.ZoomStep3a = request.d('ZoomPos', i903[82], i902.ZoomStep3a)
  request.r(i903[83], i903[84], 0, i902, 'ToolStep3a')
  request.r(i903[85], i903[86], 0, i902, 'ToolStep3aRend')
  request.r(i903[87], i903[88], 0, i902, 'dressingBasket')
  request.r(i903[89], i903[90], 0, i902, 'dummyFullParent')
  request.r(i903[91], i903[92], 0, i902, 'DressParent')
  i902.ZoomStep3 = request.d('ZoomPos', i903[93], i902.ZoomStep3)
  request.r(i903[94], i903[95], 0, i902, 'ToolStep3')
  request.r(i903[96], i903[97], 0, i902, 'tornPatch')
  request.r(i903[98], i903[99], 0, i902, 'patchCompleted')
  request.r(i903[100], i903[101], 0, i902, 'patchOutline')
  i902.ZoomStep4 = request.d('ZoomPos', i903[102], i902.ZoomStep4)
  request.r(i903[103], i903[104], 0, i902, 'ToolStep4')
  request.r(i903[105], i903[106], 0, i902, 'camFollowStep4')
  request.r(i903[107], i903[108], 0, i902, 'SteamerBottom')
  i902.ZoomStep5 = request.d('ZoomPos', i903[109], i902.ZoomStep5)
  request.r(i903[110], i903[111], 0, i902, 'ToolStep5')
  request.r(i903[112], i903[113], 0, i902, 'ribbonFinalTarget')
  request.r(i903[114], i903[115], 0, i902, 'ribbonFinal')
  request.r(i903[116], i903[117], 0, i902, 'handIndication5')
  i902.levelName = i903[118]
  i902.levelReward = i903[119]
  request.r(i903[120], i903[121], 0, i902, 'LevelIcon')
  request.r(i903[122], i903[123], 0, i902, 'Level_BG')
  var i905 = i903[124]
  var i904 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Sprite')))
  for(var i = 0; i < i905.length; i += 2) {
  request.r(i905[i + 0], i905[i + 1], 1, i904, '')
  }
  i902.ToolIcons = i904
  var i907 = i903[125]
  var i906 = []
  for(var i = 0; i < i907.length; i += 2) {
  request.r(i907[i + 0], i907[i + 1], 2, i906, '')
  }
  i902.AllDrags = i906
  var i909 = i903[126]
  var i908 = []
  for(var i = 0; i < i909.length; i += 2) {
  request.r(i909[i + 0], i909[i + 1], 2, i908, '')
  }
  i902.AllSources = i908
  var i911 = i903[127]
  var i910 = []
  for(var i = 0; i < i911.length; i += 2) {
  request.r(i911[i + 0], i911[i + 1], 2, i910, '')
  }
  i902.AllScratches = i910
  i902.stepsDone = i903[128]
  i902.levelNo = i903[129]
  i902.partNo = i903[130]
  request.r(i903[131], i903[132], 0, i902, 'clothSfx')
  request.r(i903[133], i903[134], 0, i902, 'doorCloseSfx')
  return i902
}

Deserializers["ZoomPos"] = function (request, data, root) {
  var i912 = root || request.c( 'ZoomPos' )
  var i913 = data
  i912.CameraPos = new pc.Vec3( i913[0], i913[1], i913[2] )
  i912.CameraFOV = i913[3]
  return i912
}

Deserializers["ScratchCardAsset.ScratchCardManager"] = function (request, data, root) {
  var i922 = root || request.c( 'ScratchCardAsset.ScratchCardManager' )
  var i923 = data
  request.r(i923[0], i923[1], 0, i922, 'MainCamera')
  i922.RenderType = i923[2]
  request.r(i923[3], i923[4], 0, i922, 'ScratchSurfaceSprite')
  i922.ScratchSurfaceSpriteHasAlpha = !!i923[5]
  i922.MaskProgressCutOffValue = i923[6]
  request.r(i923[7], i923[8], 0, i922, 'EraseTexture')
  i922.EraseTextureScale = new pc.Vec2( i923[9], i923[10] )
  i922.InputEnabled = !!i923[11]
  request.r(i923[12], i923[13], 0, i922, 'Card')
  i922.Mode = i923[14]
  request.r(i923[15], i923[16], 0, i922, 'Progress')
  request.r(i923[17], i923[18], 0, i922, 'MeshCard')
  request.r(i923[19], i923[20], 0, i922, 'SpriteCard')
  request.r(i923[21], i923[22], 0, i922, 'ImageCard')
  request.r(i923[23], i923[24], 0, i922, 'MaskShader')
  request.r(i923[25], i923[26], 0, i922, 'BrushShader')
  request.r(i923[27], i923[28], 0, i922, 'MaskProgressShader')
  request.r(i923[29], i923[30], 0, i922, 'MaskProgressCutOffShader')
  return i922
}

Deserializers["ScratchCardAsset.ScratchCard"] = function (request, data, root) {
  var i924 = root || request.c( 'ScratchCardAsset.ScratchCard' )
  var i925 = data
  request.r(i925[0], i925[1], 0, i924, 'MainCamera')
  request.r(i925[2], i925[3], 0, i924, 'Surface')
  i924.RenderTextureQuality = i925[4]
  request.r(i925[5], i925[6], 0, i924, 'Eraser')
  request.r(i925[7], i925[8], 0, i924, 'Progress')
  request.r(i925[9], i925[10], 0, i924, 'ScratchSurface')
  request.r(i925[11], i925[12], 0, i924, 'RenderTexture')
  i924.BrushScale = new pc.Vec2( i925[13], i925[14] )
  request.r(i925[15], i925[16], 0, i924, 'ToolTip')
  i924.InputEnabled = !!i925[17]
  i924.IsScratching = !!i925[18]
  i924.useChangingScale = !!i925[19]
  i924.useGivenBrushScale = !!i925[20]
  i924.canSpreadMask = !!i925[21]
  i924.shouldPaintHoles = !!i925[22]
  i924.canRotateTip = !!i925[23]
  i924._mode = i925[24]
  return i924
}

Deserializers["ScratchCardAsset.EraseProgress"] = function (request, data, root) {
  var i926 = root || request.c( 'ScratchCardAsset.EraseProgress' )
  var i927 = data
  request.r(i927[0], i927[1], 0, i926, 'Card')
  i926.currentProgress = i927[2]
  return i926
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.LineRenderer"] = function (request, data, root) {
  var i928 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.LineRenderer' )
  var i929 = data
  i928.textureMode = i929[0]
  i928.alignment = i929[1]
  i928.widthCurve = new pc.AnimationCurve( { keys_flow: i929[2] } )
  i928.colorGradient = i929[3] ? new pc.ColorGradient(i929[3][0], i929[3][1], i929[3][2]) : null
  var i931 = i929[4]
  var i930 = []
  for(var i = 0; i < i931.length; i += 3) {
    i930.push( new pc.Vec3( i931[i + 0], i931[i + 1], i931[i + 2] ) );
  }
  i928.positions = i930
  i928.positionCount = i929[5]
  i928.widthMultiplier = i929[6]
  i928.startWidth = i929[7]
  i928.endWidth = i929[8]
  i928.numCornerVertices = i929[9]
  i928.numCapVertices = i929[10]
  i928.useWorldSpace = !!i929[11]
  i928.loop = !!i929[12]
  i928.startColor = new pc.Color(i929[13], i929[14], i929[15], i929[16])
  i928.endColor = new pc.Color(i929[17], i929[18], i929[19], i929[20])
  i928.generateLightingData = !!i929[21]
  i928.enabled = !!i929[22]
  request.r(i929[23], i929[24], 0, i928, 'sharedMaterial')
  var i933 = i929[25]
  var i932 = []
  for(var i = 0; i < i933.length; i += 2) {
  request.r(i933[i + 0], i933[i + 1], 2, i932, '')
  }
  i928.sharedMaterials = i932
  i928.receiveShadows = !!i929[26]
  i928.shadowCastingMode = i929[27]
  i928.sortingLayerID = i929[28]
  i928.sortingOrder = i929[29]
  i928.lightmapIndex = i929[30]
  i928.lightmapSceneIndex = i929[31]
  i928.lightmapScaleOffset = new pc.Vec4( i929[32], i929[33], i929[34], i929[35] )
  i928.lightProbeUsage = i929[36]
  i928.reflectionProbeUsage = i929[37]
  return i928
}

Deserializers["TextureOffsetScroller"] = function (request, data, root) {
  var i934 = root || request.c( 'TextureOffsetScroller' )
  var i935 = data
  i934.scrollSpeed = new pc.Vec2( i935[0], i935[1] )
  i934.smoothStart = !!i935[2]
  i934.smoothDuration = i935[3]
  i934.textureName = i935[4]
  i934.useSharedMaterial = !!i935[5]
  return i934
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i936 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i937 = data
  i936.pivot = new pc.Vec2( i937[0], i937[1] )
  i936.anchorMin = new pc.Vec2( i937[2], i937[3] )
  i936.anchorMax = new pc.Vec2( i937[4], i937[5] )
  i936.sizeDelta = new pc.Vec2( i937[6], i937[7] )
  i936.anchoredPosition3D = new pc.Vec3( i937[8], i937[9], i937[10] )
  i936.rotation = new pc.Quat(i937[11], i937[12], i937[13], i937[14])
  i936.scale = new pc.Vec3( i937[15], i937[16], i937[17] )
  return i936
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i938 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i939 = data
  i938.planeDistance = i939[0]
  i938.referencePixelsPerUnit = i939[1]
  i938.isFallbackOverlay = !!i939[2]
  i938.renderMode = i939[3]
  i938.renderOrder = i939[4]
  i938.sortingLayerName = i939[5]
  i938.sortingOrder = i939[6]
  i938.scaleFactor = i939[7]
  request.r(i939[8], i939[9], 0, i938, 'worldCamera')
  i938.overrideSorting = !!i939[10]
  i938.pixelPerfect = !!i939[11]
  i938.targetDisplay = i939[12]
  i938.overridePixelPerfect = !!i939[13]
  i938.enabled = !!i939[14]
  return i938
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i940 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i941 = data
  i940.m_UiScaleMode = i941[0]
  i940.m_ReferencePixelsPerUnit = i941[1]
  i940.m_ScaleFactor = i941[2]
  i940.m_ReferenceResolution = new pc.Vec2( i941[3], i941[4] )
  i940.m_ScreenMatchMode = i941[5]
  i940.m_MatchWidthOrHeight = i941[6]
  i940.m_PhysicalUnit = i941[7]
  i940.m_FallbackScreenDPI = i941[8]
  i940.m_DefaultSpriteDPI = i941[9]
  i940.m_DynamicPixelsPerUnit = i941[10]
  i940.m_PresetInfoIsWorld = !!i941[11]
  return i940
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i942 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i943 = data
  i942.m_IgnoreReversedGraphics = !!i943[0]
  i942.m_BlockingObjects = i943[1]
  i942.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i943[2] )
  return i942
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i944 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i945 = data
  i944.cullTransparentMesh = !!i945[0]
  return i944
}

Deserializers["UnityEngine.UI.Text"] = function (request, data, root) {
  var i946 = root || request.c( 'UnityEngine.UI.Text' )
  var i947 = data
  i946.m_FontData = request.d('UnityEngine.UI.FontData', i947[0], i946.m_FontData)
  i946.m_Text = i947[1]
  request.r(i947[2], i947[3], 0, i946, 'm_Material')
  i946.m_Maskable = !!i947[4]
  i946.m_Color = new pc.Color(i947[5], i947[6], i947[7], i947[8])
  i946.m_RaycastTarget = !!i947[9]
  i946.m_RaycastPadding = new pc.Vec4( i947[10], i947[11], i947[12], i947[13] )
  return i946
}

Deserializers["UnityEngine.UI.FontData"] = function (request, data, root) {
  var i948 = root || request.c( 'UnityEngine.UI.FontData' )
  var i949 = data
  request.r(i949[0], i949[1], 0, i948, 'm_Font')
  i948.m_FontSize = i949[2]
  i948.m_FontStyle = i949[3]
  i948.m_BestFit = !!i949[4]
  i948.m_MinSize = i949[5]
  i948.m_MaxSize = i949[6]
  i948.m_Alignment = i949[7]
  i948.m_AlignByGeometry = !!i949[8]
  i948.m_RichText = !!i949[9]
  i948.m_HorizontalOverflow = i949[10]
  i948.m_VerticalOverflow = i949[11]
  i948.m_LineSpacing = i949[12]
  return i948
}

Deserializers["RotaryTimerKnob"] = function (request, data, root) {
  var i950 = root || request.c( 'RotaryTimerKnob' )
  var i951 = data
  i950.canDrag = !!i951[0]
  i950.numSteps = i951[1]
  i950.onlyClockwise = !!i951[2]
  request.r(i951[3], i951[4], 0, i950, 'clickSound')
  i950.enableVibration = !!i951[5]
  request.r(i951[6], i951[7], 0, i950, 'stepText')
  i950.OnComplete = request.d('UnityEngine.Events.UnityEvent', i951[8], i950.OnComplete)
  request.r(i951[9], i951[10], 0, i950, 'handIndication')
  return i950
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteMask"] = function (request, data, root) {
  var i952 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteMask' )
  var i953 = data
  i952.frontSortingLayerID = i953[0]
  i952.frontSortingOrder = i953[1]
  i952.backSortingLayerID = i953[2]
  i952.backSortingOrder = i953[3]
  i952.alphaCutoff = i953[4]
  request.r(i953[5], i953[6], 0, i952, 'sprite')
  i952.tileMode = i953[7]
  i952.isCustomRangeActive = !!i953[8]
  i952.spriteSortPoint = i953[9]
  i952.enabled = !!i953[10]
  request.r(i953[11], i953[12], 0, i952, 'sharedMaterial')
  var i955 = i953[13]
  var i954 = []
  for(var i = 0; i < i955.length; i += 2) {
  request.r(i955[i + 0], i955[i + 1], 2, i954, '')
  }
  i952.sharedMaterials = i954
  i952.receiveShadows = !!i953[14]
  i952.shadowCastingMode = i953[15]
  i952.sortingLayerID = i953[16]
  i952.sortingOrder = i953[17]
  i952.lightmapIndex = i953[18]
  i952.lightmapSceneIndex = i953[19]
  i952.lightmapScaleOffset = new pc.Vec4( i953[20], i953[21], i953[22], i953[23] )
  i952.lightProbeUsage = i953[24]
  i952.reflectionProbeUsage = i953[25]
  return i952
}

Deserializers["BasicDrag"] = function (request, data, root) {
  var i956 = root || request.c( 'BasicDrag' )
  var i957 = data
  i956.canDrag = !!i957[0]
  i956.dragByDelta = !!i957[1]
  i956.isDragging = !!i957[2]
  i956.moveWithPointer = !!i957[3]
  i956.canReturn = !!i957[4]
  i956.jumpOnReturn = !!i957[5]
  i956.returnTime = i957[6]
  i956.Tool_Offset = new pc.Vec3( i957[7], i957[8], i957[9] )
  i956.canScaleIncrease = !!i957[10]
  i956.Self_ScaleNew = new pc.Vec3( i957[11], i957[12], i957[13] )
  i956.canRotateOnPick = !!i957[14]
  i956.startRot = new pc.Vec3( i957[15], i957[16], i957[17] )
  i956.newRot = new pc.Vec3( i957[18], i957[19], i957[20] )
  var i959 = i957[21]
  var i958 = []
  for(var i = 0; i < i959.length; i += 2) {
  request.r(i959[i + 0], i959[i + 1], 2, i958, '')
  }
  i956.childSprite = i958
  request.r(i957[22], i957[23], 0, i956, 'ToolSelectClip')
  request.r(i957[24], i957[25], 0, i956, 'ToolLoopClip')
  request.r(i957[26], i957[27], 0, i956, 'thisParticles')
  i956.onDragparticle = !!i957[28]
  request.r(i957[29], i957[30], 0, i956, 'dragParticles')
  request.r(i957[31], i957[32], 0, i956, 'anim')
  i956.startPos = new pc.Vec3( i957[33], i957[34], i957[35] )
  i956.startScale = new pc.Vec3( i957[36], i957[37], i957[38] )
  i956.Vibration = !!i957[39]
  i956.isPlacedCannotMove = !!i957[40]
  i956.isObjectMovingWhileDragging = !!i957[41]
  i956.OnMouseDownEvent = request.d('System.Action', i957[42], i956.OnMouseDownEvent)
  i956.OnMouseUpEvent = request.d('System.Action', i957[43], i956.OnMouseUpEvent)
  i956.ProgStartEvent = request.d('System.Action', i957[44], i956.ProgStartEvent)
  i956.ProgEndEvent = request.d('System.Action', i957[45], i956.ProgEndEvent)
  i956.canCallMouseUpWhenGamePaused = !!i957[46]
  i956.ClampX_L = i957[47]
  i956.ClampX_H = i957[48]
  i956.ClampY_L = i957[49]
  i956.ClampY_H = i957[50]
  i956.startOrder = i957[51]
  i956.dontResetItIsInCollider = !!i957[52]
  request.r(i957[53], i957[54], 0, i956, 'thisCollider')
  request.r(i957[55], i957[56], 0, i956, 'thisSR')
  i956.OnMouseDownEventIndependentFromCanDrag = request.d('System.Action', i957[57], i956.OnMouseDownEventIndependentFromCanDrag)
  return i956
}

Deserializers["System.Action"] = function (request, data, root) {
  var i962 = root || request.c( 'System.Action' )
  var i963 = data
  return i962
}

Deserializers["BD_Clamp"] = function (request, data, root) {
  var i964 = root || request.c( 'BD_Clamp' )
  var i965 = data
  i964.ClampX_L = i965[0]
  i964.ClampX_H = i965[1]
  i964.ClampY_L = i965[2]
  i964.ClampY_H = i965[3]
  return i964
}

Deserializers["BD_CameraFollow"] = function (request, data, root) {
  var i966 = root || request.c( 'BD_CameraFollow' )
  var i967 = data
  request.r(i967[0], i967[1], 0, i966, 'Tool')
  request.r(i967[2], i967[3], 0, i966, 'Pivot')
  i966.FOV = i967[4]
  i966.Y_L = i967[5]
  i966.Y_H = i967[6]
  i966.X_L = i967[7]
  i966.X_R = i967[8]
  i966.startDelay = i967[9]
  i966.duration = i967[10]
  return i966
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D"] = function (request, data, root) {
  var i968 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D' )
  var i969 = data
  i968.bodyType = i969[0]
  request.r(i969[1], i969[2], 0, i968, 'material')
  i968.simulated = !!i969[3]
  i968.useAutoMass = !!i969[4]
  i968.mass = i969[5]
  i968.drag = i969[6]
  i968.angularDrag = i969[7]
  i968.gravityScale = i969[8]
  i968.collisionDetectionMode = i969[9]
  i968.sleepMode = i969[10]
  i968.constraints = i969[11]
  return i968
}

Deserializers["PlaceItem"] = function (request, data, root) {
  var i970 = root || request.c( 'PlaceItem' )
  var i971 = data
  request.r(i971[0], i971[1], 0, i970, 'thisDrag')
  request.r(i971[2], i971[3], 0, i970, 'Target')
  request.r(i971[4], i971[5], 0, i970, 'Clip')
  i970.jumpOnPlace = !!i971[6]
  i970.jumpHeight = i971[7]
  i970.jumpDuration = i971[8]
  i970.settleDuration = i971[9]
  i970.isPlaced = !!i971[10]
  i970.isInsideCollider = !!i971[11]
  i970.changeScaleOnPlace = !!i971[12]
  request.r(i971[13], i971[14], 0, i970, 'item')
  i970.newScaleOnPlace = new pc.Vec3( i971[15], i971[16], i971[17] )
  i970.OnPlaced = request.d('UnityEngine.Events.UnityEvent', i971[18], i970.OnPlaced)
  return i970
}

Deserializers["ActionOnTap"] = function (request, data, root) {
  var i972 = root || request.c( 'ActionOnTap' )
  var i973 = data
  i972.OnTap = request.d('UnityEngine.Events.UnityEvent', i973[0], i972.OnTap)
  i972.OnTapExtra = request.d('System.Action', i973[1], i972.OnTapExtra)
  return i972
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CircleCollider2D"] = function (request, data, root) {
  var i974 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CircleCollider2D' )
  var i975 = data
  i974.radius = i975[0]
  i974.enabled = !!i975[1]
  i974.isTrigger = !!i975[2]
  i974.usedByEffector = !!i975[3]
  i974.density = i975[4]
  i974.offset = new pc.Vec2( i975[5], i975[6] )
  request.r(i975[7], i975[8], 0, i974, 'material')
  return i974
}

Deserializers["PlayParticlesOnCollision"] = function (request, data, root) {
  var i976 = root || request.c( 'PlayParticlesOnCollision' )
  var i977 = data
  request.r(i977[0], i977[1], 0, i976, 'Target')
  request.r(i977[2], i977[3], 0, i976, 'ParticlePrefab')
  i976.destroyIt = !!i977[4]
  i976.stayAtPlace = !!i977[5]
  i976.disableOnCollision = !!i977[6]
  i976.OnCollisionEvent = request.d('UnityEngine.Events.UnityEvent', i977[7], i976.OnCollisionEvent)
  return i976
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.PolygonCollider2D"] = function (request, data, root) {
  var i978 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.PolygonCollider2D' )
  var i979 = data
  i978.usedByComposite = !!i979[0]
  i978.autoTiling = !!i979[1]
  var i981 = i979[2]
  var i980 = []
  for(var i = 0; i < i981.length; i += 1) {
  var i983 = i981[i + 0]
  var i982 = []
  for(var i = 0; i < i983.length; i += 2) {
    i982.push( new pc.Vec2( i983[i + 0], i983[i + 1] ) );
  }
    i980.push( i982 );
  }
  i978.points = i980
  i978.enabled = !!i979[3]
  i978.isTrigger = !!i979[4]
  i978.usedByEffector = !!i979[5]
  i978.density = i979[6]
  i978.offset = new pc.Vec2( i979[7], i979[8] )
  request.r(i979[9], i979[10], 0, i978, 'material')
  return i978
}

Deserializers["PlaySfxOnCollision"] = function (request, data, root) {
  var i990 = root || request.c( 'PlaySfxOnCollision' )
  var i991 = data
  request.r(i991[0], i991[1], 0, i990, 'Tip')
  i990.Mode = i991[2]
  request.r(i991[3], i991[4], 0, i990, 'DragInput')
  request.r(i991[5], i991[6], 0, i990, 'Source')
  i990.startVol = i991[7]
  i990.targetVol = i991[8]
  i990.duration = i991[9]
  request.r(i991[10], i991[11], 0, i990, 'Particles')
  i990.isDone = !!i991[12]
  i990.isInArea = !!i991[13]
  i990.isPlaying = !!i991[14]
  return i990
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i992 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i993 = data
  request.r(i993[0], i993[1], 0, i992, 'clip')
  request.r(i993[2], i993[3], 0, i992, 'outputAudioMixerGroup')
  i992.playOnAwake = !!i993[4]
  i992.loop = !!i993[5]
  i992.time = i993[6]
  i992.volume = i993[7]
  i992.pitch = i993[8]
  i992.enabled = !!i993[9]
  return i992
}

Deserializers["SewingCol"] = function (request, data, root) {
  var i994 = root || request.c( 'SewingCol' )
  var i995 = data
  request.r(i995[0], i995[1], 0, i994, 'targetTip')
  var i997 = i995[2]
  var i996 = []
  for(var i = 0; i < i997.length; i += 2) {
  request.r(i997[i + 0], i997[i + 1], 2, i996, '')
  }
  i994.Anim_Items = i996
  i994.isDone = !!i995[3]
  request.r(i995[4], i995[5], 0, i994, 'sfx')
  return i994
}

Deserializers["OutlinePulse"] = function (request, data, root) {
  var i998 = root || request.c( 'OutlinePulse' )
  var i999 = data
  i998.smallThickness = i999[0]
  i998.largeThickness = i999[1]
  i998.transitionSpeed = i999[2]
  i998.animationSpeed = i999[3]
  i998.isThickOutline = !!i999[4]
  i998.animate = !!i999[5]
  i998.hideSpriteOnly = !!i999[6]
  return i998
}

Deserializers["BD_Action"] = function (request, data, root) {
  var i1000 = root || request.c( 'BD_Action' )
  var i1001 = data
  i1000.OnMouseDownEvent = request.d('UnityEngine.Events.UnityEvent', i1001[0], i1000.OnMouseDownEvent)
  i1000.OnMouseUpEvent = request.d('UnityEngine.Events.UnityEvent', i1001[1], i1000.OnMouseUpEvent)
  i1000.setToolLayer = !!i1001[2]
  request.r(i1001[3], i1001[4], 0, i1000, 'tool_SP')
  return i1000
}

Deserializers["Level1_SurfController"] = function (request, data, root) {
  var i1002 = root || request.c( 'Level1_SurfController' )
  var i1003 = data
  i1002.target_rotZ = i1003[0]
  i1002.rotationDuration = i1003[1]
  i1002.rotationEase = i1003[2]
  request.r(i1003[3], i1003[4], 0, i1002, 'maskItem')
  i1002.maskTarget_posY = i1003[5]
  i1002.maskMoveDuration = i1003[6]
  i1002.requiredHoldTime = i1003[7]
  i1002.minRotationForProgress = i1003[8]
  request.r(i1003[9], i1003[10], 0, i1002, 'tipCollider')
  request.r(i1003[11], i1003[12], 0, i1002, 'targetZoneCollider')
  request.r(i1003[13], i1003[14], 0, i1002, 'surf_Particles')
  request.r(i1003[15], i1003[16], 0, i1002, 'surf_SubEmitter')
  request.r(i1003[17], i1003[18], 0, i1002, 'Indication')
  i1002.OnComplete = request.d('UnityEngine.Events.UnityEvent', i1003[19], i1002.OnComplete)
  i1002.currentHoldProgress = i1003[20]
  return i1002
}

Deserializers["BD_Fold"] = function (request, data, root) {
  var i1004 = root || request.c( 'BD_Fold' )
  var i1005 = data
  i1004.canDrag = !!i1005[0]
  i1004.canFoldBottomLeft = !!i1005[1]
  i1004.canFoldBottomRight = !!i1005[2]
  i1004.canFoldTopLeft = !!i1005[3]
  i1004.canFoldTopRight = !!i1005[4]
  request.r(i1005[5], i1005[6], 0, i1004, 'Indication')
  request.r(i1005[7], i1005[8], 0, i1004, 'backSideSprite')
  i1004.maxSideOffset = i1005[9]
  i1004.foldBackDuration = i1005[10]
  i1004.instantFoldAmount = i1005[11]
  i1004.useSmoothRelease = !!i1005[12]
  i1004.completionLimit = i1005[13]
  i1004.afterCompletionTravelTo = i1005[14]
  i1004.OnComplete = request.d('UnityEngine.Events.UnityEvent', i1005[15], i1004.OnComplete)
  i1004.currentProgress = i1005[16]
  i1004.innerShadowStrength = i1005[17]
  request.r(i1005[18], i1005[19], 0, i1004, 'dragAudioSource')
  request.r(i1005[20], i1005[21], 0, i1004, 'dragStartClip')
  request.r(i1005[22], i1005[23], 0, i1004, 'completionClip')
  i1004.audioFadeSpeed = i1005[24]
  i1004.audioMoveThreshold = i1005[25]
  i1004.hapticInterval = i1005[26]
  return i1004
}

Deserializers["BD_Progress"] = function (request, data, root) {
  var i1006 = root || request.c( 'BD_Progress' )
  var i1007 = data
  var i1009 = i1007[0]
  var i1008 = []
  for(var i = 0; i < i1009.length; i += 1) {
    i1008.push( request.d('ScratchData', i1009[i + 0]) );
  }
  i1006.AllScratches = i1008
  i1006.OnScratchComplete = request.d('UnityEngine.Events.UnityEvent', i1007[1], i1006.OnScratchComplete)
  i1006.isProgDone = !!i1007[2]
  i1006.canCallComplete = !!i1007[3]
  i1006.CollectiveAppear = !!i1007[4]
  i1006.tipControl = !!i1007[5]
  i1006.progressControl = !!i1007[6]
  request.r(i1007[7], i1007[8], 0, i1006, 'thisDrag')
  i1006.CompleteEvent = request.d('System.Action', i1007[9], i1006.CompleteEvent)
  i1006.SubCompleteEvent = request.d('System.Action', i1007[10], i1006.SubCompleteEvent)
  return i1006
}

Deserializers["ScratchData"] = function (request, data, root) {
  var i1012 = root || request.c( 'ScratchData' )
  var i1013 = data
  request.r(i1013[0], i1013[1], 0, i1012, 'ScratchManager')
  i1012.scratchLimit = i1013[2]
  i1012.isComplete = !!i1013[3]
  return i1012
}

Deserializers["StaticFixedPipe"] = function (request, data, root) {
  var i1014 = root || request.c( 'StaticFixedPipe' )
  var i1015 = data
  request.r(i1015[0], i1015[1], 0, i1014, 'lineRenderer')
  request.r(i1015[2], i1015[3], 0, i1014, 'toolTransform')
  request.r(i1015[4], i1015[5], 0, i1014, 'toolDirectionPoint')
  request.r(i1015[6], i1015[7], 0, i1014, 'fixedEndPoint')
  i1014.segmentCount = i1015[8]
  i1014.totalLength = i1015[9]
  i1014.constraintIterations = i1015[10]
  i1014.gravity = new pc.Vec3( i1015[11], i1015[12], i1015[13] )
  i1014.pipeWidth = i1015[14]
  return i1014
}

Deserializers["BD_SpriteChange"] = function (request, data, root) {
  var i1016 = root || request.c( 'BD_SpriteChange' )
  var i1017 = data
  request.r(i1017[0], i1017[1], 0, i1016, 'BD')
  request.r(i1017[2], i1017[3], 0, i1016, 'SR')
  request.r(i1017[4], i1017[5], 0, i1016, 'Default')
  request.r(i1017[6], i1017[7], 0, i1016, 'Picked')
  i1016.resetOnRelease = !!i1017[8]
  return i1016
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Cubemap"] = function (request, data, root) {
  var i1018 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Cubemap' )
  var i1019 = data
  i1018.name = i1019[0]
  i1018.atlasId = i1019[1]
  i1018.mipmapCount = i1019[2]
  i1018.hdr = !!i1019[3]
  i1018.size = i1019[4]
  i1018.anisoLevel = i1019[5]
  i1018.filterMode = i1019[6]
  var i1021 = i1019[7]
  var i1020 = []
  for(var i = 0; i < i1021.length; i += 4) {
    i1020.push( UnityEngine.Rect.MinMaxRect(i1021[i + 0], i1021[i + 1], i1021[i + 2], i1021[i + 3]) );
  }
  i1018.rects = i1020
  i1018.wrapU = i1019[8]
  i1018.wrapV = i1019[9]
  return i1018
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i1024 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i1025 = data
  i1024.name = i1025[0]
  i1024.index = i1025[1]
  i1024.startup = !!i1025[2]
  return i1024
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i1026 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i1027 = data
  i1026.aspect = i1027[0]
  i1026.orthographic = !!i1027[1]
  i1026.orthographicSize = i1027[2]
  i1026.backgroundColor = new pc.Color(i1027[3], i1027[4], i1027[5], i1027[6])
  i1026.nearClipPlane = i1027[7]
  i1026.farClipPlane = i1027[8]
  i1026.fieldOfView = i1027[9]
  i1026.depth = i1027[10]
  i1026.clearFlags = i1027[11]
  i1026.cullingMask = i1027[12]
  i1026.rect = i1027[13]
  request.r(i1027[14], i1027[15], 0, i1026, 'targetTexture')
  i1026.usePhysicalProperties = !!i1027[16]
  i1026.focalLength = i1027[17]
  i1026.sensorSize = new pc.Vec2( i1027[18], i1027[19] )
  i1026.lensShift = new pc.Vec2( i1027[20], i1027[21] )
  i1026.gateFit = i1027[22]
  i1026.commandBufferCount = i1027[23]
  i1026.cameraType = i1027[24]
  i1026.enabled = !!i1027[25]
  return i1026
}

Deserializers["CameraController"] = function (request, data, root) {
  var i1028 = root || request.c( 'CameraController' )
  var i1029 = data
  request.r(i1029[0], i1029[1], 0, i1028, 'cam')
  i1028.defaultPosition = new pc.Vec3( i1029[2], i1029[3], i1029[4] )
  i1028.defaultSize = i1029[5]
  i1028.defaultFOV = i1029[6]
  i1028.defaultDuration = i1029[7]
  i1028.defaultEase = i1029[8]
  return i1028
}

Deserializers["MusicSource"] = function (request, data, root) {
  var i1030 = root || request.c( 'MusicSource' )
  var i1031 = data
  request.r(i1031[0], i1031[1], 0, i1030, 'source')
  return i1030
}

Deserializers["UI_Manager"] = function (request, data, root) {
  var i1032 = root || request.c( 'UI_Manager' )
  var i1033 = data
  i1032.levelCompleted = !!i1033[0]
  i1032.isPauseActive = !!i1033[1]
  i1032.loadIndex = i1033[2]
  request.r(i1033[3], i1033[4], 0, i1032, 'removeAdsButton')
  request.r(i1033[5], i1033[6], 0, i1032, 'pauseButton')
  request.r(i1033[7], i1033[8], 0, i1032, 'Fade_Img')
  request.r(i1033[9], i1033[10], 0, i1032, 'TopBarAnim')
  request.r(i1033[11], i1033[12], 0, i1032, 'MainPanel')
  request.r(i1033[13], i1033[14], 0, i1032, 'PausePanel')
  request.r(i1033[15], i1033[16], 0, i1032, 'PausePopUp')
  request.r(i1033[17], i1033[18], 0, i1032, 'PauseCanvasGroup')
  request.r(i1033[19], i1033[20], 0, i1032, 'RateUsPanel')
  request.r(i1033[21], i1033[22], 0, i1032, 'RateUsPopUp')
  request.r(i1033[23], i1033[24], 0, i1032, 'RemoveAdsPanel')
  request.r(i1033[25], i1033[26], 0, i1032, 'RemoveAdsPopUp')
  request.r(i1033[27], i1033[28], 0, i1032, 'RemoveAdsCanvasGroup')
  var i1035 = i1033[29]
  var i1034 = []
  for(var i = 0; i < i1035.length; i += 2) {
  request.r(i1035[i + 0], i1035[i + 1], 2, i1034, '')
  }
  i1032.RemoveAdsAnims = i1034
  request.r(i1033[30], i1033[31], 0, i1032, 'CompletePanel')
  request.r(i1033[32], i1033[33], 0, i1032, 'LevelIcon')
  request.r(i1033[34], i1033[35], 0, i1032, 'CompleteParticles')
  request.r(i1033[36], i1033[37], 0, i1032, 'progressBar')
  request.r(i1033[38], i1033[39], 0, i1032, 'progressText')
  request.r(i1033[40], i1033[41], 0, i1032, 'toolIcon1')
  request.r(i1033[42], i1033[43], 0, i1032, 'toolIcon2')
  request.r(i1033[44], i1033[45], 0, i1032, 'toolIcon3')
  request.r(i1033[46], i1033[47], 0, i1032, 'target1')
  request.r(i1033[48], i1033[49], 0, i1032, 'target2')
  i1032.toolMoveDuration = i1033[50]
  i1032.currentIndex = i1033[51]
  var i1037 = i1033[52]
  var i1036 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Sprite')))
  for(var i = 0; i < i1037.length; i += 2) {
  request.r(i1037[i + 0], i1037[i + 1], 1, i1036, '')
  }
  i1032.allTools = i1036
  request.r(i1033[53], i1033[54], 0, i1032, 'clockProgress')
  request.r(i1033[55], i1033[56], 0, i1032, 'clockProgressFill')
  request.r(i1033[57], i1033[58], 0, i1032, 'clockAudio')
  i1032.moveDistance = i1033[59]
  i1032.animationDuration = i1033[60]
  i1032.greyBgChildName = i1033[61]
  i1032.pushOffset = i1033[62]
  return i1032
}

Deserializers["GameManagerPlayable"] = function (request, data, root) {
  var i1038 = root || request.c( 'GameManagerPlayable' )
  var i1039 = data
  request.r(i1039[0], i1039[1], 0, i1038, 'endParticles')
  request.r(i1039[2], i1039[3], 0, i1038, 'stepCompleteParticles')
  request.r(i1039[4], i1039[5], 0, i1038, 'DefaultMat')
  request.r(i1039[6], i1039[7], 0, i1038, 'BG_Music')
  request.r(i1039[8], i1039[9], 0, i1038, 'restoreEffectShader')
  request.r(i1039[10], i1039[11], 0, i1038, 'stickerEffectShader')
  i1038.isComplete = !!i1039[12]
  i1038.isPaused = !!i1039[13]
  request.r(i1039[14], i1039[15], 0, i1038, 'currentLevel')
  i1038.startLevelOnPlay = !!i1039[16]
  i1038.currentLevelNo = i1039[17]
  return i1038
}

Deserializers["AudioController"] = function (request, data, root) {
  var i1040 = root || request.c( 'AudioController' )
  var i1041 = data
  request.r(i1041[0], i1041[1], 0, i1040, 'MainMixer')
  request.r(i1041[2], i1041[3], 0, i1040, 'UiClick')
  request.r(i1041[4], i1041[5], 0, i1040, 'UiClickSource')
  var i1043 = i1041[6]
  var i1042 = []
  for(var i = 0; i < i1043.length; i += 2) {
  request.r(i1043[i + 0], i1043[i + 1], 2, i1042, '')
  }
  i1040.SfxSources = i1042
  var i1045 = i1041[7]
  var i1044 = []
  for(var i = 0; i < i1045.length; i += 2) {
  request.r(i1045[i + 0], i1045[i + 1], 2, i1044, '')
  }
  i1040.AllClips = i1044
  return i1040
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i1048 = root || request.c( 'UnityEngine.UI.Image' )
  var i1049 = data
  request.r(i1049[0], i1049[1], 0, i1048, 'm_Sprite')
  i1048.m_Type = i1049[2]
  i1048.m_PreserveAspect = !!i1049[3]
  i1048.m_FillCenter = !!i1049[4]
  i1048.m_FillMethod = i1049[5]
  i1048.m_FillAmount = i1049[6]
  i1048.m_FillClockwise = !!i1049[7]
  i1048.m_FillOrigin = i1049[8]
  i1048.m_UseSpriteMesh = !!i1049[9]
  i1048.m_PixelsPerUnitMultiplier = i1049[10]
  request.r(i1049[11], i1049[12], 0, i1048, 'm_Material')
  i1048.m_Maskable = !!i1049[13]
  i1048.m_Color = new pc.Color(i1049[14], i1049[15], i1049[16], i1049[17])
  i1048.m_RaycastTarget = !!i1049[18]
  i1048.m_RaycastPadding = new pc.Vec4( i1049[19], i1049[20], i1049[21], i1049[22] )
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
  i1068.lockedMessage = i1069[4]
  i1068.lockedTapsToCTA = i1069[5]
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

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Assets.Mesh":{"name":0,"halfPrecision":1,"useSimplification":2,"useUInt32IndexFormat":3,"vertexCount":4,"aabb":5,"streams":6,"vertices":7,"subMeshes":8,"bindposes":9,"blendShapes":10},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh":{"triangles":0},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape":{"name":0,"frames":1},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystem":{"main":0,"colorBySpeed":1,"colorOverLifetime":2,"emission":3,"rotationBySpeed":4,"rotationOverLifetime":5,"shape":6,"sizeBySpeed":7,"sizeOverLifetime":8,"textureSheetAnimation":9,"velocityOverLifetime":10,"noise":11,"inheritVelocity":12,"forceOverLifetime":13,"limitVelocityOverLifetime":14,"useAutoRandomSeed":15,"randomSeed":16},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule":{"duration":0,"loop":1,"prewarm":2,"startDelay":3,"startLifetime":4,"startSpeed":5,"startSize3D":6,"startSizeX":7,"startSizeY":8,"startSizeZ":9,"startRotation3D":10,"startRotationX":11,"startRotationY":12,"startRotationZ":13,"startColor":14,"gravityModifier":15,"simulationSpace":16,"customSimulationSpace":17,"simulationSpeed":19,"useUnscaledTime":20,"scalingMode":21,"playOnAwake":22,"maxParticles":23,"emitterVelocityMode":24,"stopAction":25},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve":{"mode":0,"curveMin":1,"curveMax":2,"curveMultiplier":3,"constantMin":4,"constantMax":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient":{"mode":0,"gradientMin":1,"gradientMax":2,"colorMin":3,"colorMax":7},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient":{"mode":0,"colorKeys":1,"alphaKeys":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule":{"enabled":0,"color":1,"range":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey":{"color":0,"time":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey":{"alpha":0,"time":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule":{"enabled":0,"color":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule":{"enabled":0,"rateOverTime":1,"rateOverDistance":2,"bursts":3},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst":{"count":0,"cycleCount":1,"minCount":2,"maxCount":3,"repeatInterval":4,"time":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule":{"enabled":0,"shapeType":1,"randomDirectionAmount":2,"sphericalDirectionAmount":3,"randomPositionAmount":4,"alignToDirection":5,"radius":6,"radiusMode":7,"radiusSpread":8,"radiusSpeed":9,"radiusThickness":10,"angle":11,"length":12,"boxThickness":13,"meshShapeType":16,"mesh":17,"meshRenderer":19,"skinnedMeshRenderer":21,"useMeshMaterialIndex":23,"meshMaterialIndex":24,"useMeshColors":25,"normalOffset":26,"arc":27,"arcMode":28,"arcSpread":29,"arcSpeed":30,"donutRadius":31,"position":32,"rotation":35,"scale":38},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule":{"enabled":0,"mode":1,"animation":2,"numTilesX":3,"numTilesY":4,"useRandomRow":5,"frameOverTime":6,"startFrame":7,"cycleCount":8,"rowIndex":9,"flipU":10,"flipV":11,"spriteCount":12,"sprites":13},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"radial":4,"speedModifier":5,"space":6,"orbitalX":7,"orbitalY":8,"orbitalZ":9,"orbitalOffsetX":10,"orbitalOffsetY":11,"orbitalOffsetZ":12},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule":{"enabled":0,"separateAxes":1,"strengthX":2,"strengthY":3,"strengthZ":4,"frequency":5,"damping":6,"octaveCount":7,"octaveMultiplier":8,"octaveScale":9,"quality":10,"scrollSpeed":11,"scrollSpeedMultiplier":12,"remapEnabled":13,"remapX":14,"remapY":15,"remapZ":16,"positionAmount":17,"rotationAmount":18,"sizeAmount":19},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule":{"enabled":0,"mode":1,"curve":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"space":4,"randomized":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule":{"enabled":0,"limit":1,"limitX":2,"limitY":3,"limitZ":4,"dampen":5,"separateAxes":6,"space":7,"drag":8,"multiplyDragByParticleSize":9,"multiplyDragByParticleVelocity":10},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer":{"mesh":0,"meshCount":2,"activeVertexStreamsCount":3,"alignment":4,"renderMode":5,"sortMode":6,"lengthScale":7,"velocityScale":8,"cameraVelocityScale":9,"normalDirection":10,"sortingFudge":11,"minParticleSize":12,"maxParticleSize":13,"pivot":14,"trailMaterial":17,"applyActiveColorSpace":19,"enabled":20,"sharedMaterial":21,"sharedMaterials":23,"receiveShadows":24,"shadowCastingMode":25,"sortingLayerID":26,"sortingOrder":27,"lightmapIndex":28,"lightmapSceneIndex":29,"lightmapScaleOffset":30,"lightProbeUsage":34,"reflectionProbeUsage":35},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer":{"color":0,"sprite":4,"flipX":6,"flipY":7,"drawMode":8,"size":9,"tileMode":11,"adaptiveModeThreshold":12,"maskInteraction":13,"spriteSortPoint":14,"enabled":15,"sharedMaterial":16,"sharedMaterials":18,"receiveShadows":19,"shadowCastingMode":20,"sortingLayerID":21,"sortingOrder":22,"lightmapIndex":23,"lightmapSceneIndex":24,"lightmapScaleOffset":25,"lightProbeUsage":29,"reflectionProbeUsage":30},"Luna.Unity.DTO.UnityEngine.Components.Animator":{"animatorController":0,"avatar":2,"updateMode":4,"hasTransformHierarchy":5,"applyRootMotion":6,"humanBones":7,"enabled":8},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D":{"usedByComposite":0,"autoTiling":1,"size":2,"edgeRadius":4,"enabled":5,"isTrigger":6,"usedByEffector":7,"density":8,"offset":9,"material":11},"Luna.Unity.DTO.UnityEngine.Components.TrailRenderer":{"positions":0,"positionCount":1,"time":2,"startWidth":3,"endWidth":4,"widthMultiplier":5,"autodestruct":6,"emitting":7,"numCornerVertices":8,"numCapVertices":9,"minVertexDistance":10,"colorGradient":11,"startColor":12,"endColor":16,"generateLightingData":20,"textureMode":21,"alignment":22,"widthCurve":23,"enabled":24,"sharedMaterial":25,"sharedMaterials":27,"receiveShadows":28,"shadowCastingMode":29,"sortingLayerID":30,"sortingOrder":31,"lightmapIndex":32,"lightmapSceneIndex":33,"lightmapScaleOffset":34,"lightProbeUsage":38,"reflectionProbeUsage":39},"Luna.Unity.DTO.UnityEngine.Components.LineRenderer":{"textureMode":0,"alignment":1,"widthCurve":2,"colorGradient":3,"positions":4,"positionCount":5,"widthMultiplier":6,"startWidth":7,"endWidth":8,"numCornerVertices":9,"numCapVertices":10,"useWorldSpace":11,"loop":12,"startColor":13,"endColor":17,"generateLightingData":21,"enabled":22,"sharedMaterial":23,"sharedMaterials":25,"receiveShadows":26,"shadowCastingMode":27,"sortingLayerID":28,"sortingOrder":29,"lightmapIndex":30,"lightmapSceneIndex":31,"lightmapScaleOffset":32,"lightProbeUsage":36,"reflectionProbeUsage":37},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"planeDistance":0,"referencePixelsPerUnit":1,"isFallbackOverlay":2,"renderMode":3,"renderOrder":4,"sortingLayerName":5,"sortingOrder":6,"scaleFactor":7,"worldCamera":8,"overrideSorting":10,"pixelPerfect":11,"targetDisplay":12,"overridePixelPerfect":13,"enabled":14},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Components.SpriteMask":{"frontSortingLayerID":0,"frontSortingOrder":1,"backSortingLayerID":2,"backSortingOrder":3,"alphaCutoff":4,"sprite":5,"tileMode":7,"isCustomRangeActive":8,"spriteSortPoint":9,"enabled":10,"sharedMaterial":11,"sharedMaterials":13,"receiveShadows":14,"shadowCastingMode":15,"sortingLayerID":16,"sortingOrder":17,"lightmapIndex":18,"lightmapSceneIndex":19,"lightmapScaleOffset":20,"lightProbeUsage":24,"reflectionProbeUsage":25},"Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D":{"bodyType":0,"material":1,"simulated":3,"useAutoMass":4,"mass":5,"drag":6,"angularDrag":7,"gravityScale":8,"collisionDetectionMode":9,"sleepMode":10,"constraints":11},"Luna.Unity.DTO.UnityEngine.Components.CircleCollider2D":{"radius":0,"enabled":1,"isTrigger":2,"usedByEffector":3,"density":4,"offset":5,"material":7},"Luna.Unity.DTO.UnityEngine.Components.PolygonCollider2D":{"usedByComposite":0,"autoTiling":1,"points":2,"enabled":3,"isTrigger":4,"usedByEffector":5,"density":6,"offset":7,"material":9},"Luna.Unity.DTO.UnityEngine.Components.AudioSource":{"clip":0,"outputAudioMixerGroup":2,"playOnAwake":4,"loop":5,"time":6,"volume":7,"pitch":8,"enabled":9},"Luna.Unity.DTO.UnityEngine.Textures.Cubemap":{"name":0,"atlasId":1,"mipmapCount":2,"hdr":3,"size":4,"anisoLevel":5,"filterMode":6,"rects":7,"wrapU":8,"wrapV":9},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"aspect":0,"orthographic":1,"orthographicSize":2,"backgroundColor":3,"nearClipPlane":7,"farClipPlane":8,"fieldOfView":9,"depth":10,"clearFlags":11,"cullingMask":12,"rect":13,"targetTexture":14,"usePhysicalProperties":16,"focalLength":17,"sensorSize":18,"lensShift":20,"gateFit":22,"commandBufferCount":23,"cameraType":24,"enabled":25},"Luna.Unity.DTO.UnityEngine.Components.CanvasGroup":{"m_Alpha":0,"m_Interactable":1,"m_BlocksRaycasts":2,"m_IgnoreParentGroups":3,"enabled":4},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"customReflection":36,"defaultReflection":38,"defaultReflectionMode":40,"defaultReflectionResolution":41,"sunLightObjectId":42,"pixelLightCount":43,"defaultReflectionHDR":44,"hasLightDataAsset":45,"hasManualGenerate":46},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2,"shadowMask":4},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"hasDepthOnlyPass":10,"isCreatedByShaderGraph":11,"disableBatching":12,"compiled":13},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip":{"name":0,"wrapMode":1,"isLooping":2,"length":3,"curves":4,"events":5,"halfPrecision":6,"_frameRate":7,"localBounds":8,"hasMuscleCurves":9,"clipMuscleConstant":10,"clipBindingConstant":11},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve":{"path":0,"hash":1,"componentType":2,"property":3,"keys":4,"objectReferenceKeys":5},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey":{"time":0,"value":1},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent":{"functionName":0,"floatParameter":1,"intParameter":2,"stringParameter":3,"objectReferenceParameter":4,"time":6},"Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds":{"center":0,"extends":3},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant":{"genericBindings":0,"pptrCurveMapping":1},"Luna.Unity.DTO.UnityEngine.Assets.Font":{"name":0,"ascent":1,"originalLineHeight":2,"fontSize":3,"characterInfo":4,"texture":5,"originalFontSize":7},"Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo":{"index":0,"advance":1,"bearing":2,"glyphWidth":3,"glyphHeight":4,"minX":5,"maxX":6,"minY":7,"maxY":8,"uvBottomLeftX":9,"uvBottomLeftY":10,"uvBottomRightX":11,"uvBottomRightY":12,"uvTopLeftX":13,"uvTopLeftY":14,"uvTopRightX":15,"uvTopRightY":16},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController":{"name":0,"layers":1,"parameters":2,"animationClips":3,"avatarUnsupported":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer":{"name":0,"defaultWeight":1,"blendingMode":2,"avatarMask":3,"syncedLayerIndex":4,"syncedLayerAffectsTiming":5,"syncedLayers":6,"stateMachine":7},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine":{"id":0,"name":1,"path":2,"states":3,"machines":4,"entryStateTransitions":5,"exitStateTransitions":6,"anyStateTransitions":7,"defaultStateId":8},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState":{"id":0,"name":1,"cycleOffset":2,"cycleOffsetParameter":3,"cycleOffsetParameterActive":4,"mirror":5,"mirrorParameter":6,"mirrorParameterActive":7,"motionId":8,"nameHash":9,"fullPathHash":10,"speed":11,"speedParameter":12,"speedParameterActive":13,"tag":14,"tagHash":15,"writeDefaultValues":16,"behaviours":17,"transitions":18},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition":{"fullPath":0,"canTransitionToSelf":1,"duration":2,"exitTime":3,"hasExitTime":4,"hasFixedDuration":5,"interruptionSource":6,"offset":7,"orderedInterruption":8,"destinationStateId":9,"isExit":10,"mute":11,"solo":12,"conditions":13},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition":{"destinationStateId":0,"isExit":1,"mute":2,"solo":3,"conditions":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition":{"mode":0,"parameter":1,"threshold":2},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter":{"defaultBool":0,"defaultFloat":1,"defaultInt":2,"name":3,"nameHash":4,"type":5},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableStaticBatching":9,"enableDynamicBatching":10,"usePreservativeDynamicBatching":11,"lightmapEncodingQuality":12,"desiredColorSpace":13,"allTags":14},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37},"Luna.Unity.DTO.UnityEngine.Audio.AudioMixer":{"groups":0,"snapshots":1},"Luna.Unity.DTO.UnityEngine.Audio.AudioMixerGroup":{"id":0,"childGroupIds":1,"name":2},"Luna.Unity.DTO.UnityEngine.Audio.AudioMixerSnapshot":{"id":0,"parameters":1},"Luna.Unity.DTO.UnityEngine.Audio.AudioMixerSnapshot+Parameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame":{"weight":0,"vertices":1,"normals":2,"tangents":3}}

Deserializers.requiredComponents = {"77":[78],"79":[78],"80":[78],"81":[78],"82":[78],"83":[78],"84":[85],"86":[38],"87":[88],"89":[88],"90":[88],"91":[88],"92":[88],"93":[88],"94":[88],"95":[46],"96":[46],"97":[46],"98":[46],"99":[46],"100":[46],"101":[46],"102":[46],"103":[46],"104":[46],"105":[46],"106":[46],"107":[46],"108":[38],"109":[110],"111":[112],"113":[112],"37":[36],"114":[34],"57":[15],"115":[11],"116":[15],"117":[118],"119":[118],"120":[10],"21":[11],"121":[15],"19":[15],"122":[36],"123":[36],"41":[37],"65":[42,36],"124":[36],"40":[37],"125":[36],"126":[36],"127":[36],"128":[36],"129":[36],"130":[36],"131":[36],"132":[36],"133":[36],"134":[42,36],"135":[36],"136":[36],"137":[36],"138":[36],"28":[42,36],"139":[36],"140":[71],"141":[71],"72":[71],"142":[71],"143":[38],"144":[38]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Texture2D","UnityEngine.Transform","UnityEngine.ParticleSystem","UnityEngine.ParticleSystemRenderer","UnityEngine.Mesh","UnityEngine.Material","UnityEngine.MonoBehaviour","MenuLevel","UnityEngine.GameObject","DG.Tweening.DOTweenAnimation","UnityEngine.BoxCollider2D","UnityEngine.AudioClip","IntroLevelAnim","Level_PoseController","UnityEngine.SpriteRenderer","UnityEngine.Sprite","UnityEngine.Animator","UnityEditor.Animations.AnimatorController","UnityEngine.U2D.Animation.SpriteSkin","BD_AnimationHelper","SpriteButton","PlayableRouter","UnityEngine.TrailRenderer","Level1_Cloth_Playable","BasicDrag","BD_CameraFollow","Level1_SurfController","UnityEngine.UI.Text","RotaryTimerKnob","UnityEngine.AudioSource","ScratchCardAsset.ScratchCardManager","ScratchCardAsset.ScratchCard","ScratchCardAsset.EraseProgress","UnityEngine.LineRenderer","TextureOffsetScroller","UnityEngine.RectTransform","UnityEngine.Canvas","UnityEngine.Camera","UnityEngine.EventSystems.UIBehaviour","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEngine.CanvasRenderer","UnityEngine.Font","UnityEngine.SpriteMask","BD_Clamp","UnityEngine.Rigidbody2D","PlaceItem","ActionOnTap","UnityEngine.CircleCollider2D","PlayParticlesOnCollision","UnityEngine.PolygonCollider2D","PlaySfxOnCollision","UnityEditor.Audio.AudioMixerGroupController","SewingCol","OutlinePulse","BD_Action","BD_Fold","BD_Progress","StaticFixedPipe","BD_SpriteChange","UnityEngine.AudioListener","CameraController","MusicSource","UI_Manager","UnityEngine.UI.Image","GameManagerPlayable","AudioController","UnityEditor.Audio.AudioMixerController","UnityEngine.UI.Button","PlayableHudRuntime","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","ToastManager","UnityEngine.CanvasGroup","UnityEngine.Cubemap","DG.Tweening.Core.DOTweenSettings","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.ConstantForce","UnityEngine.Rigidbody","UnityEngine.Joint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.FixedJoint","UnityEngine.CharacterJoint","UnityEngine.ConfigurableJoint","UnityEngine.CompositeCollider2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.MeshRenderer","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","RopeController","BD_Sticky","Lvl3_DripAnimator","Lvl3_LipstickPicker","UnityEngine.Collider2D","Lvl3_PourFill","PlayTweenOnHit","RadialCircleFill","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.Mask","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Slider","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster"]

Deserializers.unityVersion = "2022.3.62f2";

Deserializers.productName = "Perfect Makeover Fashion ASMR";

Deserializers.lunaInitializationTime = "08/20/2026 07:41:52";

Deserializers.lunaDaysRunning = "12.0";

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

Deserializers.buildID = "01a4fa3f-7c7d-4f90-98a3-224eff23122d";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[],[["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"]],[],[]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

