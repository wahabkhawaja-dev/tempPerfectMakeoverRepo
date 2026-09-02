var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i7590 = root || request.c( 'UnityEngine.JointSpring' )
  var i7591 = data
  i7590.spring = i7591[0]
  i7590.damper = i7591[1]
  i7590.targetPosition = i7591[2]
  return i7590
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i7592 = root || request.c( 'UnityEngine.JointMotor' )
  var i7593 = data
  i7592.m_TargetVelocity = i7593[0]
  i7592.m_Force = i7593[1]
  i7592.m_FreeSpin = i7593[2]
  return i7592
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i7594 = root || request.c( 'UnityEngine.JointLimits' )
  var i7595 = data
  i7594.m_Min = i7595[0]
  i7594.m_Max = i7595[1]
  i7594.m_Bounciness = i7595[2]
  i7594.m_BounceMinVelocity = i7595[3]
  i7594.m_ContactDistance = i7595[4]
  i7594.minBounce = i7595[5]
  i7594.maxBounce = i7595[6]
  return i7594
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i7596 = root || request.c( 'UnityEngine.JointDrive' )
  var i7597 = data
  i7596.m_PositionSpring = i7597[0]
  i7596.m_PositionDamper = i7597[1]
  i7596.m_MaximumForce = i7597[2]
  i7596.m_UseAcceleration = i7597[3]
  return i7596
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i7598 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i7599 = data
  i7598.m_Spring = i7599[0]
  i7598.m_Damper = i7599[1]
  return i7598
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i7600 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i7601 = data
  i7600.m_Limit = i7601[0]
  i7600.m_Bounciness = i7601[1]
  i7600.m_ContactDistance = i7601[2]
  return i7600
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i7602 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i7603 = data
  i7602.m_ExtremumSlip = i7603[0]
  i7602.m_ExtremumValue = i7603[1]
  i7602.m_AsymptoteSlip = i7603[2]
  i7602.m_AsymptoteValue = i7603[3]
  i7602.m_Stiffness = i7603[4]
  return i7602
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i7604 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i7605 = data
  i7604.m_LowerAngle = i7605[0]
  i7604.m_UpperAngle = i7605[1]
  return i7604
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i7606 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i7607 = data
  i7606.m_MotorSpeed = i7607[0]
  i7606.m_MaximumMotorTorque = i7607[1]
  return i7606
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i7608 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i7609 = data
  i7608.m_DampingRatio = i7609[0]
  i7608.m_Frequency = i7609[1]
  i7608.m_Angle = i7609[2]
  return i7608
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i7610 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i7611 = data
  i7610.m_LowerTranslation = i7611[0]
  i7610.m_UpperTranslation = i7611[1]
  return i7610
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i7612 = root || new pc.UnityMaterial()
  var i7613 = data
  i7612.name = i7613[0]
  request.r(i7613[1], i7613[2], 0, i7612, 'shader')
  i7612.renderQueue = i7613[3]
  i7612.enableInstancing = !!i7613[4]
  var i7615 = i7613[5]
  var i7614 = []
  for(var i = 0; i < i7615.length; i += 1) {
    i7614.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i7615[i + 0]) );
  }
  i7612.floatParameters = i7614
  var i7617 = i7613[6]
  var i7616 = []
  for(var i = 0; i < i7617.length; i += 1) {
    i7616.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i7617[i + 0]) );
  }
  i7612.colorParameters = i7616
  var i7619 = i7613[7]
  var i7618 = []
  for(var i = 0; i < i7619.length; i += 1) {
    i7618.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i7619[i + 0]) );
  }
  i7612.vectorParameters = i7618
  var i7621 = i7613[8]
  var i7620 = []
  for(var i = 0; i < i7621.length; i += 1) {
    i7620.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i7621[i + 0]) );
  }
  i7612.textureParameters = i7620
  var i7623 = i7613[9]
  var i7622 = []
  for(var i = 0; i < i7623.length; i += 1) {
    i7622.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i7623[i + 0]) );
  }
  i7612.materialFlags = i7622
  return i7612
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i7626 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i7627 = data
  i7626.name = i7627[0]
  i7626.value = i7627[1]
  return i7626
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i7630 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i7631 = data
  i7630.name = i7631[0]
  i7630.value = new pc.Color(i7631[1], i7631[2], i7631[3], i7631[4])
  return i7630
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i7634 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i7635 = data
  i7634.name = i7635[0]
  i7634.value = new pc.Vec4( i7635[1], i7635[2], i7635[3], i7635[4] )
  return i7634
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i7638 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i7639 = data
  i7638.name = i7639[0]
  request.r(i7639[1], i7639[2], 0, i7638, 'value')
  return i7638
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i7642 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i7643 = data
  i7642.name = i7643[0]
  i7642.enabled = !!i7643[1]
  return i7642
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i7644 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i7645 = data
  i7644.name = i7645[0]
  i7644.width = i7645[1]
  i7644.height = i7645[2]
  i7644.mipmapCount = i7645[3]
  i7644.anisoLevel = i7645[4]
  i7644.filterMode = i7645[5]
  i7644.hdr = !!i7645[6]
  i7644.format = i7645[7]
  i7644.wrapMode = i7645[8]
  i7644.alphaIsTransparency = !!i7645[9]
  i7644.alphaSource = i7645[10]
  i7644.graphicsFormat = i7645[11]
  i7644.sRGBTexture = !!i7645[12]
  i7644.desiredColorSpace = i7645[13]
  i7644.wrapU = i7645[14]
  i7644.wrapV = i7645[15]
  return i7644
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh"] = function (request, data, root) {
  var i7646 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh' )
  var i7647 = data
  i7646.name = i7647[0]
  i7646.halfPrecision = !!i7647[1]
  i7646.useSimplification = !!i7647[2]
  i7646.useUInt32IndexFormat = !!i7647[3]
  i7646.vertexCount = i7647[4]
  i7646.aabb = i7647[5]
  var i7649 = i7647[6]
  var i7648 = []
  for(var i = 0; i < i7649.length; i += 1) {
    i7648.push( !!i7649[i + 0] );
  }
  i7646.streams = i7648
  i7646.vertices = i7647[7]
  var i7651 = i7647[8]
  var i7650 = []
  for(var i = 0; i < i7651.length; i += 1) {
    i7650.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh', i7651[i + 0]) );
  }
  i7646.subMeshes = i7650
  var i7653 = i7647[9]
  var i7652 = []
  for(var i = 0; i < i7653.length; i += 16) {
    i7652.push( new pc.Mat4().setData(i7653[i + 0], i7653[i + 1], i7653[i + 2], i7653[i + 3],  i7653[i + 4], i7653[i + 5], i7653[i + 6], i7653[i + 7],  i7653[i + 8], i7653[i + 9], i7653[i + 10], i7653[i + 11],  i7653[i + 12], i7653[i + 13], i7653[i + 14], i7653[i + 15]) );
  }
  i7646.bindposes = i7652
  var i7655 = i7647[10]
  var i7654 = []
  for(var i = 0; i < i7655.length; i += 1) {
    i7654.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape', i7655[i + 0]) );
  }
  i7646.blendShapes = i7654
  return i7646
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh"] = function (request, data, root) {
  var i7660 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh' )
  var i7661 = data
  i7660.triangles = i7661[0]
  return i7660
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape"] = function (request, data, root) {
  var i7666 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape' )
  var i7667 = data
  i7666.name = i7667[0]
  var i7669 = i7667[1]
  var i7668 = []
  for(var i = 0; i < i7669.length; i += 1) {
    i7668.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame', i7669[i + 0]) );
  }
  i7666.frames = i7668
  return i7666
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i7670 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i7671 = data
  i7670.position = new pc.Vec3( i7671[0], i7671[1], i7671[2] )
  i7670.scale = new pc.Vec3( i7671[3], i7671[4], i7671[5] )
  i7670.rotation = new pc.Quat(i7671[6], i7671[7], i7671[8], i7671[9])
  return i7670
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystem"] = function (request, data, root) {
  var i7672 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystem' )
  var i7673 = data
  i7672.main = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule', i7673[0], i7672.main)
  i7672.colorBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule', i7673[1], i7672.colorBySpeed)
  i7672.colorOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule', i7673[2], i7672.colorOverLifetime)
  i7672.emission = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule', i7673[3], i7672.emission)
  i7672.rotationBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule', i7673[4], i7672.rotationBySpeed)
  i7672.rotationOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule', i7673[5], i7672.rotationOverLifetime)
  i7672.shape = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule', i7673[6], i7672.shape)
  i7672.sizeBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule', i7673[7], i7672.sizeBySpeed)
  i7672.sizeOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule', i7673[8], i7672.sizeOverLifetime)
  i7672.textureSheetAnimation = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule', i7673[9], i7672.textureSheetAnimation)
  i7672.velocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule', i7673[10], i7672.velocityOverLifetime)
  i7672.noise = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule', i7673[11], i7672.noise)
  i7672.inheritVelocity = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule', i7673[12], i7672.inheritVelocity)
  i7672.forceOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule', i7673[13], i7672.forceOverLifetime)
  i7672.limitVelocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule', i7673[14], i7672.limitVelocityOverLifetime)
  i7672.useAutoRandomSeed = !!i7673[15]
  i7672.randomSeed = i7673[16]
  return i7672
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule"] = function (request, data, root) {
  var i7674 = root || new pc.ParticleSystemMain()
  var i7675 = data
  i7674.duration = i7675[0]
  i7674.loop = !!i7675[1]
  i7674.prewarm = !!i7675[2]
  i7674.startDelay = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7675[3], i7674.startDelay)
  i7674.startLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7675[4], i7674.startLifetime)
  i7674.startSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7675[5], i7674.startSpeed)
  i7674.startSize3D = !!i7675[6]
  i7674.startSizeX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7675[7], i7674.startSizeX)
  i7674.startSizeY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7675[8], i7674.startSizeY)
  i7674.startSizeZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7675[9], i7674.startSizeZ)
  i7674.startRotation3D = !!i7675[10]
  i7674.startRotationX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7675[11], i7674.startRotationX)
  i7674.startRotationY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7675[12], i7674.startRotationY)
  i7674.startRotationZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7675[13], i7674.startRotationZ)
  i7674.startColor = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i7675[14], i7674.startColor)
  i7674.gravityModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7675[15], i7674.gravityModifier)
  i7674.simulationSpace = i7675[16]
  request.r(i7675[17], i7675[18], 0, i7674, 'customSimulationSpace')
  i7674.simulationSpeed = i7675[19]
  i7674.useUnscaledTime = !!i7675[20]
  i7674.scalingMode = i7675[21]
  i7674.playOnAwake = !!i7675[22]
  i7674.maxParticles = i7675[23]
  i7674.emitterVelocityMode = i7675[24]
  i7674.stopAction = i7675[25]
  return i7674
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve"] = function (request, data, root) {
  var i7676 = root || new pc.MinMaxCurve()
  var i7677 = data
  i7676.mode = i7677[0]
  i7676.curveMin = new pc.AnimationCurve( { keys_flow: i7677[1] } )
  i7676.curveMax = new pc.AnimationCurve( { keys_flow: i7677[2] } )
  i7676.curveMultiplier = i7677[3]
  i7676.constantMin = i7677[4]
  i7676.constantMax = i7677[5]
  return i7676
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient"] = function (request, data, root) {
  var i7678 = root || new pc.MinMaxGradient()
  var i7679 = data
  i7678.mode = i7679[0]
  i7678.gradientMin = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i7679[1], i7678.gradientMin)
  i7678.gradientMax = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i7679[2], i7678.gradientMax)
  i7678.colorMin = new pc.Color(i7679[3], i7679[4], i7679[5], i7679[6])
  i7678.colorMax = new pc.Color(i7679[7], i7679[8], i7679[9], i7679[10])
  return i7678
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient"] = function (request, data, root) {
  var i7680 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient' )
  var i7681 = data
  i7680.mode = i7681[0]
  var i7683 = i7681[1]
  var i7682 = []
  for(var i = 0; i < i7683.length; i += 1) {
    i7682.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey', i7683[i + 0]) );
  }
  i7680.colorKeys = i7682
  var i7685 = i7681[2]
  var i7684 = []
  for(var i = 0; i < i7685.length; i += 1) {
    i7684.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey', i7685[i + 0]) );
  }
  i7680.alphaKeys = i7684
  return i7680
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule"] = function (request, data, root) {
  var i7686 = root || new pc.ParticleSystemColorBySpeed()
  var i7687 = data
  i7686.enabled = !!i7687[0]
  i7686.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i7687[1], i7686.color)
  i7686.range = new pc.Vec2( i7687[2], i7687[3] )
  return i7686
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey"] = function (request, data, root) {
  var i7690 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey' )
  var i7691 = data
  i7690.color = new pc.Color(i7691[0], i7691[1], i7691[2], i7691[3])
  i7690.time = i7691[4]
  return i7690
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey"] = function (request, data, root) {
  var i7694 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey' )
  var i7695 = data
  i7694.alpha = i7695[0]
  i7694.time = i7695[1]
  return i7694
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule"] = function (request, data, root) {
  var i7696 = root || new pc.ParticleSystemColorOverLifetime()
  var i7697 = data
  i7696.enabled = !!i7697[0]
  i7696.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i7697[1], i7696.color)
  return i7696
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule"] = function (request, data, root) {
  var i7698 = root || new pc.ParticleSystemEmitter()
  var i7699 = data
  i7698.enabled = !!i7699[0]
  i7698.rateOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7699[1], i7698.rateOverTime)
  i7698.rateOverDistance = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7699[2], i7698.rateOverDistance)
  var i7701 = i7699[3]
  var i7700 = []
  for(var i = 0; i < i7701.length; i += 1) {
    i7700.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst', i7701[i + 0]) );
  }
  i7698.bursts = i7700
  return i7698
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst"] = function (request, data, root) {
  var i7704 = root || new pc.ParticleSystemBurst()
  var i7705 = data
  i7704.count = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7705[0], i7704.count)
  i7704.cycleCount = i7705[1]
  i7704.minCount = i7705[2]
  i7704.maxCount = i7705[3]
  i7704.repeatInterval = i7705[4]
  i7704.time = i7705[5]
  return i7704
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule"] = function (request, data, root) {
  var i7706 = root || new pc.ParticleSystemRotationBySpeed()
  var i7707 = data
  i7706.enabled = !!i7707[0]
  i7706.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7707[1], i7706.x)
  i7706.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7707[2], i7706.y)
  i7706.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7707[3], i7706.z)
  i7706.separateAxes = !!i7707[4]
  i7706.range = new pc.Vec2( i7707[5], i7707[6] )
  return i7706
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule"] = function (request, data, root) {
  var i7708 = root || new pc.ParticleSystemRotationOverLifetime()
  var i7709 = data
  i7708.enabled = !!i7709[0]
  i7708.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7709[1], i7708.x)
  i7708.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7709[2], i7708.y)
  i7708.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7709[3], i7708.z)
  i7708.separateAxes = !!i7709[4]
  return i7708
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule"] = function (request, data, root) {
  var i7710 = root || new pc.ParticleSystemShape()
  var i7711 = data
  i7710.enabled = !!i7711[0]
  i7710.shapeType = i7711[1]
  i7710.randomDirectionAmount = i7711[2]
  i7710.sphericalDirectionAmount = i7711[3]
  i7710.randomPositionAmount = i7711[4]
  i7710.alignToDirection = !!i7711[5]
  i7710.radius = i7711[6]
  i7710.radiusMode = i7711[7]
  i7710.radiusSpread = i7711[8]
  i7710.radiusSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7711[9], i7710.radiusSpeed)
  i7710.radiusThickness = i7711[10]
  i7710.angle = i7711[11]
  i7710.length = i7711[12]
  i7710.boxThickness = new pc.Vec3( i7711[13], i7711[14], i7711[15] )
  i7710.meshShapeType = i7711[16]
  request.r(i7711[17], i7711[18], 0, i7710, 'mesh')
  request.r(i7711[19], i7711[20], 0, i7710, 'meshRenderer')
  request.r(i7711[21], i7711[22], 0, i7710, 'skinnedMeshRenderer')
  i7710.useMeshMaterialIndex = !!i7711[23]
  i7710.meshMaterialIndex = i7711[24]
  i7710.useMeshColors = !!i7711[25]
  i7710.normalOffset = i7711[26]
  i7710.arc = i7711[27]
  i7710.arcMode = i7711[28]
  i7710.arcSpread = i7711[29]
  i7710.arcSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7711[30], i7710.arcSpeed)
  i7710.donutRadius = i7711[31]
  i7710.position = new pc.Vec3( i7711[32], i7711[33], i7711[34] )
  i7710.rotation = new pc.Vec3( i7711[35], i7711[36], i7711[37] )
  i7710.scale = new pc.Vec3( i7711[38], i7711[39], i7711[40] )
  return i7710
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule"] = function (request, data, root) {
  var i7712 = root || new pc.ParticleSystemSizeBySpeed()
  var i7713 = data
  i7712.enabled = !!i7713[0]
  i7712.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7713[1], i7712.x)
  i7712.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7713[2], i7712.y)
  i7712.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7713[3], i7712.z)
  i7712.separateAxes = !!i7713[4]
  i7712.range = new pc.Vec2( i7713[5], i7713[6] )
  return i7712
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule"] = function (request, data, root) {
  var i7714 = root || new pc.ParticleSystemSizeOverLifetime()
  var i7715 = data
  i7714.enabled = !!i7715[0]
  i7714.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7715[1], i7714.x)
  i7714.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7715[2], i7714.y)
  i7714.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7715[3], i7714.z)
  i7714.separateAxes = !!i7715[4]
  return i7714
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule"] = function (request, data, root) {
  var i7716 = root || new pc.ParticleSystemTextureSheetAnimation()
  var i7717 = data
  i7716.enabled = !!i7717[0]
  i7716.mode = i7717[1]
  i7716.animation = i7717[2]
  i7716.numTilesX = i7717[3]
  i7716.numTilesY = i7717[4]
  i7716.useRandomRow = !!i7717[5]
  i7716.frameOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7717[6], i7716.frameOverTime)
  i7716.startFrame = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7717[7], i7716.startFrame)
  i7716.cycleCount = i7717[8]
  i7716.rowIndex = i7717[9]
  i7716.flipU = i7717[10]
  i7716.flipV = i7717[11]
  i7716.spriteCount = i7717[12]
  var i7719 = i7717[13]
  var i7718 = []
  for(var i = 0; i < i7719.length; i += 2) {
  request.r(i7719[i + 0], i7719[i + 1], 2, i7718, '')
  }
  i7716.sprites = i7718
  return i7716
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule"] = function (request, data, root) {
  var i7722 = root || new pc.ParticleSystemVelocityOverLifetime()
  var i7723 = data
  i7722.enabled = !!i7723[0]
  i7722.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7723[1], i7722.x)
  i7722.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7723[2], i7722.y)
  i7722.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7723[3], i7722.z)
  i7722.radial = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7723[4], i7722.radial)
  i7722.speedModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7723[5], i7722.speedModifier)
  i7722.space = i7723[6]
  i7722.orbitalX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7723[7], i7722.orbitalX)
  i7722.orbitalY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7723[8], i7722.orbitalY)
  i7722.orbitalZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7723[9], i7722.orbitalZ)
  i7722.orbitalOffsetX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7723[10], i7722.orbitalOffsetX)
  i7722.orbitalOffsetY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7723[11], i7722.orbitalOffsetY)
  i7722.orbitalOffsetZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7723[12], i7722.orbitalOffsetZ)
  return i7722
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule"] = function (request, data, root) {
  var i7724 = root || new pc.ParticleSystemNoise()
  var i7725 = data
  i7724.enabled = !!i7725[0]
  i7724.separateAxes = !!i7725[1]
  i7724.strengthX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7725[2], i7724.strengthX)
  i7724.strengthY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7725[3], i7724.strengthY)
  i7724.strengthZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7725[4], i7724.strengthZ)
  i7724.frequency = i7725[5]
  i7724.damping = !!i7725[6]
  i7724.octaveCount = i7725[7]
  i7724.octaveMultiplier = i7725[8]
  i7724.octaveScale = i7725[9]
  i7724.quality = i7725[10]
  i7724.scrollSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7725[11], i7724.scrollSpeed)
  i7724.scrollSpeedMultiplier = i7725[12]
  i7724.remapEnabled = !!i7725[13]
  i7724.remapX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7725[14], i7724.remapX)
  i7724.remapY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7725[15], i7724.remapY)
  i7724.remapZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7725[16], i7724.remapZ)
  i7724.positionAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7725[17], i7724.positionAmount)
  i7724.rotationAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7725[18], i7724.rotationAmount)
  i7724.sizeAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7725[19], i7724.sizeAmount)
  return i7724
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule"] = function (request, data, root) {
  var i7726 = root || new pc.ParticleSystemInheritVelocity()
  var i7727 = data
  i7726.enabled = !!i7727[0]
  i7726.mode = i7727[1]
  i7726.curve = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7727[2], i7726.curve)
  return i7726
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule"] = function (request, data, root) {
  var i7728 = root || new pc.ParticleSystemForceOverLifetime()
  var i7729 = data
  i7728.enabled = !!i7729[0]
  i7728.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7729[1], i7728.x)
  i7728.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7729[2], i7728.y)
  i7728.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7729[3], i7728.z)
  i7728.space = i7729[4]
  i7728.randomized = !!i7729[5]
  return i7728
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule"] = function (request, data, root) {
  var i7730 = root || new pc.ParticleSystemLimitVelocityOverLifetime()
  var i7731 = data
  i7730.enabled = !!i7731[0]
  i7730.limit = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7731[1], i7730.limit)
  i7730.limitX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7731[2], i7730.limitX)
  i7730.limitY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7731[3], i7730.limitY)
  i7730.limitZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7731[4], i7730.limitZ)
  i7730.dampen = i7731[5]
  i7730.separateAxes = !!i7731[6]
  i7730.space = i7731[7]
  i7730.drag = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7731[8], i7730.drag)
  i7730.multiplyDragByParticleSize = !!i7731[9]
  i7730.multiplyDragByParticleVelocity = !!i7731[10]
  return i7730
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer"] = function (request, data, root) {
  var i7732 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer' )
  var i7733 = data
  request.r(i7733[0], i7733[1], 0, i7732, 'mesh')
  i7732.meshCount = i7733[2]
  i7732.activeVertexStreamsCount = i7733[3]
  i7732.alignment = i7733[4]
  i7732.renderMode = i7733[5]
  i7732.sortMode = i7733[6]
  i7732.lengthScale = i7733[7]
  i7732.velocityScale = i7733[8]
  i7732.cameraVelocityScale = i7733[9]
  i7732.normalDirection = i7733[10]
  i7732.sortingFudge = i7733[11]
  i7732.minParticleSize = i7733[12]
  i7732.maxParticleSize = i7733[13]
  i7732.pivot = new pc.Vec3( i7733[14], i7733[15], i7733[16] )
  request.r(i7733[17], i7733[18], 0, i7732, 'trailMaterial')
  i7732.applyActiveColorSpace = !!i7733[19]
  i7732.enabled = !!i7733[20]
  request.r(i7733[21], i7733[22], 0, i7732, 'sharedMaterial')
  var i7735 = i7733[23]
  var i7734 = []
  for(var i = 0; i < i7735.length; i += 2) {
  request.r(i7735[i + 0], i7735[i + 1], 2, i7734, '')
  }
  i7732.sharedMaterials = i7734
  i7732.receiveShadows = !!i7733[24]
  i7732.shadowCastingMode = i7733[25]
  i7732.sortingLayerID = i7733[26]
  i7732.sortingOrder = i7733[27]
  i7732.lightmapIndex = i7733[28]
  i7732.lightmapSceneIndex = i7733[29]
  i7732.lightmapScaleOffset = new pc.Vec4( i7733[30], i7733[31], i7733[32], i7733[33] )
  i7732.lightProbeUsage = i7733[34]
  i7732.reflectionProbeUsage = i7733[35]
  return i7732
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i7738 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i7739 = data
  i7738.name = i7739[0]
  i7738.tagId = i7739[1]
  i7738.enabled = !!i7739[2]
  i7738.isStatic = !!i7739[3]
  i7738.layer = i7739[4]
  return i7738
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i7740 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i7741 = data
  i7740.pivot = new pc.Vec2( i7741[0], i7741[1] )
  i7740.anchorMin = new pc.Vec2( i7741[2], i7741[3] )
  i7740.anchorMax = new pc.Vec2( i7741[4], i7741[5] )
  i7740.sizeDelta = new pc.Vec2( i7741[6], i7741[7] )
  i7740.anchoredPosition3D = new pc.Vec3( i7741[8], i7741[9], i7741[10] )
  i7740.rotation = new pc.Quat(i7741[11], i7741[12], i7741[13], i7741[14])
  i7740.scale = new pc.Vec3( i7741[15], i7741[16], i7741[17] )
  return i7740
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i7742 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i7743 = data
  i7742.planeDistance = i7743[0]
  i7742.referencePixelsPerUnit = i7743[1]
  i7742.isFallbackOverlay = !!i7743[2]
  i7742.renderMode = i7743[3]
  i7742.renderOrder = i7743[4]
  i7742.sortingLayerName = i7743[5]
  i7742.sortingOrder = i7743[6]
  i7742.scaleFactor = i7743[7]
  request.r(i7743[8], i7743[9], 0, i7742, 'worldCamera')
  i7742.overrideSorting = !!i7743[10]
  i7742.pixelPerfect = !!i7743[11]
  i7742.targetDisplay = i7743[12]
  i7742.overridePixelPerfect = !!i7743[13]
  i7742.enabled = !!i7743[14]
  return i7742
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i7744 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i7745 = data
  i7744.m_UiScaleMode = i7745[0]
  i7744.m_ReferencePixelsPerUnit = i7745[1]
  i7744.m_ScaleFactor = i7745[2]
  i7744.m_ReferenceResolution = new pc.Vec2( i7745[3], i7745[4] )
  i7744.m_ScreenMatchMode = i7745[5]
  i7744.m_MatchWidthOrHeight = i7745[6]
  i7744.m_PhysicalUnit = i7745[7]
  i7744.m_FallbackScreenDPI = i7745[8]
  i7744.m_DefaultSpriteDPI = i7745[9]
  i7744.m_DynamicPixelsPerUnit = i7745[10]
  i7744.m_PresetInfoIsWorld = !!i7745[11]
  return i7744
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i7746 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i7747 = data
  i7746.m_IgnoreReversedGraphics = !!i7747[0]
  i7746.m_BlockingObjects = i7747[1]
  i7746.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i7747[2] )
  return i7746
}

Deserializers["DG.Tweening.DOTweenAnimation"] = function (request, data, root) {
  var i7748 = root || request.c( 'DG.Tweening.DOTweenAnimation' )
  var i7749 = data
  i7748.targetIsSelf = !!i7749[0]
  request.r(i7749[1], i7749[2], 0, i7748, 'targetGO')
  i7748.tweenTargetIsTargetGO = !!i7749[3]
  i7748.delay = i7749[4]
  i7748.duration = i7749[5]
  i7748.easeType = i7749[6]
  i7748.easeCurve = new pc.AnimationCurve( { keys_flow: i7749[7] } )
  i7748.loopType = i7749[8]
  i7748.loops = i7749[9]
  i7748.id = i7749[10]
  i7748.isRelative = !!i7749[11]
  i7748.isFrom = !!i7749[12]
  i7748.isIndependentUpdate = !!i7749[13]
  i7748.autoKill = !!i7749[14]
  i7748.autoGenerate = !!i7749[15]
  i7748.isActive = !!i7749[16]
  i7748.isValid = !!i7749[17]
  request.r(i7749[18], i7749[19], 0, i7748, 'target')
  i7748.animationType = i7749[20]
  i7748.targetType = i7749[21]
  i7748.forcedTargetType = i7749[22]
  i7748.autoPlay = !!i7749[23]
  i7748.useTargetAsV3 = !!i7749[24]
  i7748.endValueFloat = i7749[25]
  i7748.endValueV3 = new pc.Vec3( i7749[26], i7749[27], i7749[28] )
  i7748.endValueV2 = new pc.Vec2( i7749[29], i7749[30] )
  i7748.endValueColor = new pc.Color(i7749[31], i7749[32], i7749[33], i7749[34])
  i7748.endValueString = i7749[35]
  i7748.endValueRect = UnityEngine.Rect.MinMaxRect(i7749[36], i7749[37], i7749[38], i7749[39])
  request.r(i7749[40], i7749[41], 0, i7748, 'endValueTransform')
  i7748.optionalBool0 = !!i7749[42]
  i7748.optionalBool1 = !!i7749[43]
  i7748.optionalFloat0 = i7749[44]
  i7748.optionalInt0 = i7749[45]
  i7748.optionalRotationMode = i7749[46]
  i7748.optionalScrambleMode = i7749[47]
  i7748.optionalShakeRandomnessMode = i7749[48]
  i7748.optionalString = i7749[49]
  i7748.updateType = i7749[50]
  i7748.isSpeedBased = !!i7749[51]
  i7748.hasOnStart = !!i7749[52]
  i7748.hasOnPlay = !!i7749[53]
  i7748.hasOnUpdate = !!i7749[54]
  i7748.hasOnStepComplete = !!i7749[55]
  i7748.hasOnComplete = !!i7749[56]
  i7748.hasOnTweenCreated = !!i7749[57]
  i7748.hasOnRewind = !!i7749[58]
  i7748.onStart = request.d('UnityEngine.Events.UnityEvent', i7749[59], i7748.onStart)
  i7748.onPlay = request.d('UnityEngine.Events.UnityEvent', i7749[60], i7748.onPlay)
  i7748.onUpdate = request.d('UnityEngine.Events.UnityEvent', i7749[61], i7748.onUpdate)
  i7748.onStepComplete = request.d('UnityEngine.Events.UnityEvent', i7749[62], i7748.onStepComplete)
  i7748.onComplete = request.d('UnityEngine.Events.UnityEvent', i7749[63], i7748.onComplete)
  i7748.onTweenCreated = request.d('UnityEngine.Events.UnityEvent', i7749[64], i7748.onTweenCreated)
  i7748.onRewind = request.d('UnityEngine.Events.UnityEvent', i7749[65], i7748.onRewind)
  return i7748
}

Deserializers["UnityEngine.Events.UnityEvent"] = function (request, data, root) {
  var i7750 = root || request.c( 'UnityEngine.Events.UnityEvent' )
  var i7751 = data
  i7750.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i7751[0], i7750.m_PersistentCalls)
  return i7750
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i7752 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i7753 = data
  var i7755 = i7753[0]
  var i7754 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i7755.length; i += 1) {
    i7754.add(request.d('UnityEngine.Events.PersistentCall', i7755[i + 0]));
  }
  i7752.m_Calls = i7754
  return i7752
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i7758 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i7759 = data
  request.r(i7759[0], i7759[1], 0, i7758, 'm_Target')
  i7758.m_TargetAssemblyTypeName = i7759[2]
  i7758.m_MethodName = i7759[3]
  i7758.m_Mode = i7759[4]
  i7758.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i7759[5], i7758.m_Arguments)
  i7758.m_CallState = i7759[6]
  return i7758
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i7760 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i7761 = data
  i7760.cullTransparentMesh = !!i7761[0]
  return i7760
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i7762 = root || request.c( 'UnityEngine.UI.Image' )
  var i7763 = data
  request.r(i7763[0], i7763[1], 0, i7762, 'm_Sprite')
  i7762.m_Type = i7763[2]
  i7762.m_PreserveAspect = !!i7763[3]
  i7762.m_FillCenter = !!i7763[4]
  i7762.m_FillMethod = i7763[5]
  i7762.m_FillAmount = i7763[6]
  i7762.m_FillClockwise = !!i7763[7]
  i7762.m_FillOrigin = i7763[8]
  i7762.m_UseSpriteMesh = !!i7763[9]
  i7762.m_PixelsPerUnitMultiplier = i7763[10]
  request.r(i7763[11], i7763[12], 0, i7762, 'm_Material')
  i7762.m_Maskable = !!i7763[13]
  i7762.m_Color = new pc.Color(i7763[14], i7763[15], i7763[16], i7763[17])
  i7762.m_RaycastTarget = !!i7763[18]
  i7762.m_RaycastPadding = new pc.Vec4( i7763[19], i7763[20], i7763[21], i7763[22] )
  return i7762
}

Deserializers["UnityEngine.UI.Text"] = function (request, data, root) {
  var i7764 = root || request.c( 'UnityEngine.UI.Text' )
  var i7765 = data
  i7764.m_FontData = request.d('UnityEngine.UI.FontData', i7765[0], i7764.m_FontData)
  i7764.m_Text = i7765[1]
  request.r(i7765[2], i7765[3], 0, i7764, 'm_Material')
  i7764.m_Maskable = !!i7765[4]
  i7764.m_Color = new pc.Color(i7765[5], i7765[6], i7765[7], i7765[8])
  i7764.m_RaycastTarget = !!i7765[9]
  i7764.m_RaycastPadding = new pc.Vec4( i7765[10], i7765[11], i7765[12], i7765[13] )
  return i7764
}

Deserializers["UnityEngine.UI.FontData"] = function (request, data, root) {
  var i7766 = root || request.c( 'UnityEngine.UI.FontData' )
  var i7767 = data
  request.r(i7767[0], i7767[1], 0, i7766, 'm_Font')
  i7766.m_FontSize = i7767[2]
  i7766.m_FontStyle = i7767[3]
  i7766.m_BestFit = !!i7767[4]
  i7766.m_MinSize = i7767[5]
  i7766.m_MaxSize = i7767[6]
  i7766.m_Alignment = i7767[7]
  i7766.m_AlignByGeometry = !!i7767[8]
  i7766.m_RichText = !!i7767[9]
  i7766.m_HorizontalOverflow = i7767[10]
  i7766.m_VerticalOverflow = i7767[11]
  i7766.m_LineSpacing = i7767[12]
  return i7766
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i7768 = root || request.c( 'UnityEngine.UI.Button' )
  var i7769 = data
  i7768.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i7769[0], i7768.m_OnClick)
  i7768.m_Navigation = request.d('UnityEngine.UI.Navigation', i7769[1], i7768.m_Navigation)
  i7768.m_Transition = i7769[2]
  i7768.m_Colors = request.d('UnityEngine.UI.ColorBlock', i7769[3], i7768.m_Colors)
  i7768.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i7769[4], i7768.m_SpriteState)
  i7768.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i7769[5], i7768.m_AnimationTriggers)
  i7768.m_Interactable = !!i7769[6]
  request.r(i7769[7], i7769[8], 0, i7768, 'm_TargetGraphic')
  return i7768
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i7770 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i7771 = data
  i7770.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i7771[0], i7770.m_PersistentCalls)
  return i7770
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i7772 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i7773 = data
  request.r(i7773[0], i7773[1], 0, i7772, 'm_ObjectArgument')
  i7772.m_ObjectArgumentAssemblyTypeName = i7773[2]
  i7772.m_IntArgument = i7773[3]
  i7772.m_FloatArgument = i7773[4]
  i7772.m_StringArgument = i7773[5]
  i7772.m_BoolArgument = !!i7773[6]
  return i7772
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i7774 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i7775 = data
  i7774.m_Mode = i7775[0]
  i7774.m_WrapAround = !!i7775[1]
  request.r(i7775[2], i7775[3], 0, i7774, 'm_SelectOnUp')
  request.r(i7775[4], i7775[5], 0, i7774, 'm_SelectOnDown')
  request.r(i7775[6], i7775[7], 0, i7774, 'm_SelectOnLeft')
  request.r(i7775[8], i7775[9], 0, i7774, 'm_SelectOnRight')
  return i7774
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i7776 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i7777 = data
  i7776.m_NormalColor = new pc.Color(i7777[0], i7777[1], i7777[2], i7777[3])
  i7776.m_HighlightedColor = new pc.Color(i7777[4], i7777[5], i7777[6], i7777[7])
  i7776.m_PressedColor = new pc.Color(i7777[8], i7777[9], i7777[10], i7777[11])
  i7776.m_SelectedColor = new pc.Color(i7777[12], i7777[13], i7777[14], i7777[15])
  i7776.m_DisabledColor = new pc.Color(i7777[16], i7777[17], i7777[18], i7777[19])
  i7776.m_ColorMultiplier = i7777[20]
  i7776.m_FadeDuration = i7777[21]
  return i7776
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i7778 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i7779 = data
  request.r(i7779[0], i7779[1], 0, i7778, 'm_HighlightedSprite')
  request.r(i7779[2], i7779[3], 0, i7778, 'm_PressedSprite')
  request.r(i7779[4], i7779[5], 0, i7778, 'm_SelectedSprite')
  request.r(i7779[6], i7779[7], 0, i7778, 'm_DisabledSprite')
  return i7778
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i7780 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i7781 = data
  i7780.m_NormalTrigger = i7781[0]
  i7780.m_HighlightedTrigger = i7781[1]
  i7780.m_PressedTrigger = i7781[2]
  i7780.m_SelectedTrigger = i7781[3]
  i7780.m_DisabledTrigger = i7781[4]
  return i7780
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animator"] = function (request, data, root) {
  var i7782 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animator' )
  var i7783 = data
  request.r(i7783[0], i7783[1], 0, i7782, 'animatorController')
  request.r(i7783[2], i7783[3], 0, i7782, 'avatar')
  i7782.updateMode = i7783[4]
  i7782.hasTransformHierarchy = !!i7783[5]
  i7782.applyRootMotion = !!i7783[6]
  var i7785 = i7783[7]
  var i7784 = []
  for(var i = 0; i < i7785.length; i += 2) {
  request.r(i7785[i + 0], i7785[i + 1], 2, i7784, '')
  }
  i7782.humanBones = i7784
  i7782.enabled = !!i7783[8]
  return i7782
}

Deserializers["Level1_Cloth_Playable"] = function (request, data, root) {
  var i7788 = root || request.c( 'Level1_Cloth_Playable' )
  var i7789 = data
  request.r(i7789[0], i7789[1], 0, i7788, 'WashingView')
  request.r(i7789[2], i7789[3], 0, i7788, 'WashingTools')
  request.r(i7789[4], i7789[5], 0, i7788, 'DressingView')
  request.r(i7789[6], i7789[7], 0, i7788, 'DressingTools')
  i7788.ZoomStep1 = request.d('ZoomPos', i7789[8], i7788.ZoomStep1)
  request.r(i7789[9], i7789[10], 0, i7788, 'ToolStep1')
  request.r(i7789[11], i7789[12], 0, i7788, 'Basket_Cloth')
  request.r(i7789[13], i7789[14], 0, i7788, 'clothInside')
  request.r(i7789[15], i7789[16], 0, i7788, 'clothRound')
  request.r(i7789[17], i7789[18], 0, i7788, 'machineDoor')
  request.r(i7789[19], i7789[20], 0, i7788, 'machineGlass')
  i7788.ZoomStep2 = request.d('ZoomPos', i7789[21], i7788.ZoomStep2)
  i7788.ZoomStep2b = request.d('ZoomPos', i7789[22], i7788.ZoomStep2b)
  request.r(i7789[23], i7789[24], 0, i7788, 'ToolStep2')
  request.r(i7789[25], i7789[26], 0, i7788, 'ToolStep2CamFollow')
  request.r(i7789[27], i7789[28], 0, i7788, 'drawerObj')
  request.r(i7789[29], i7789[30], 0, i7788, 'surfObj')
  request.r(i7789[31], i7789[32], 0, i7788, 'surfPackTop')
  request.r(i7789[33], i7789[34], 0, i7788, 'handStep2')
  request.r(i7789[35], i7789[36], 0, i7788, 'surfController')
  request.r(i7789[37], i7789[38], 0, i7788, 'clothsInside')
  request.r(i7789[39], i7789[40], 0, i7788, 'clothsInsideGlass')
  request.r(i7789[41], i7789[42], 0, i7788, 'clothsStaticClean')
  request.r(i7789[43], i7789[44], 0, i7788, 'wetCloths')
  request.r(i7789[45], i7789[46], 0, i7788, 'clothCleanInside')
  request.r(i7789[47], i7789[48], 0, i7788, 'clothCleanInsideAnim')
  request.r(i7789[49], i7789[50], 0, i7788, 'waterWave')
  request.r(i7789[51], i7789[52], 0, i7788, 'clothCleanInside2')
  request.r(i7789[53], i7789[54], 0, i7788, 'clothCleanInside2Cam')
  request.r(i7789[55], i7789[56], 0, i7788, 'clothBasketTarget')
  request.r(i7789[57], i7789[58], 0, i7788, 'clothBasketTarget2')
  request.r(i7789[59], i7789[60], 0, i7788, 'waterSplash_Vfx')
  request.r(i7789[61], i7789[62], 0, i7788, 'countDownTimerText')
  i7788.countDown = i7789[63]
  request.r(i7789[64], i7789[65], 0, i7788, 'machineTimer')
  request.r(i7789[66], i7789[67], 0, i7788, 'machineTimerRotater')
  request.r(i7789[68], i7789[69], 0, i7788, 'machineTimerIndication')
  request.r(i7789[70], i7789[71], 0, i7788, 'darazOpenSfx')
  request.r(i7789[72], i7789[73], 0, i7788, 'darazCloseSfx')
  request.r(i7789[74], i7789[75], 0, i7788, 'doorOpenSfx')
  request.r(i7789[76], i7789[77], 0, i7788, 'machineStartSfx')
  request.r(i7789[78], i7789[79], 0, i7788, 'machineFinishSfx')
  request.r(i7789[80], i7789[81], 0, i7788, 'waterDrainSfx')
  i7788.ZoomStep3a = request.d('ZoomPos', i7789[82], i7788.ZoomStep3a)
  request.r(i7789[83], i7789[84], 0, i7788, 'ToolStep3a')
  request.r(i7789[85], i7789[86], 0, i7788, 'ToolStep3aRend')
  request.r(i7789[87], i7789[88], 0, i7788, 'dressingBasket')
  request.r(i7789[89], i7789[90], 0, i7788, 'dummyFullParent')
  request.r(i7789[91], i7789[92], 0, i7788, 'DressParent')
  i7788.ZoomStep3 = request.d('ZoomPos', i7789[93], i7788.ZoomStep3)
  request.r(i7789[94], i7789[95], 0, i7788, 'ToolStep3')
  request.r(i7789[96], i7789[97], 0, i7788, 'tornPatch')
  request.r(i7789[98], i7789[99], 0, i7788, 'patchCompleted')
  request.r(i7789[100], i7789[101], 0, i7788, 'patchOutline')
  i7788.ZoomStep4 = request.d('ZoomPos', i7789[102], i7788.ZoomStep4)
  request.r(i7789[103], i7789[104], 0, i7788, 'ToolStep4')
  request.r(i7789[105], i7789[106], 0, i7788, 'camFollowStep4')
  request.r(i7789[107], i7789[108], 0, i7788, 'SteamerBottom')
  i7788.ZoomStep5 = request.d('ZoomPos', i7789[109], i7788.ZoomStep5)
  request.r(i7789[110], i7789[111], 0, i7788, 'ToolStep5')
  request.r(i7789[112], i7789[113], 0, i7788, 'ribbonFinalTarget')
  request.r(i7789[114], i7789[115], 0, i7788, 'ribbonFinal')
  request.r(i7789[116], i7789[117], 0, i7788, 'handIndication5')
  i7788.levelName = i7789[118]
  i7788.levelReward = i7789[119]
  request.r(i7789[120], i7789[121], 0, i7788, 'LevelIcon')
  request.r(i7789[122], i7789[123], 0, i7788, 'Level_BG')
  var i7791 = i7789[124]
  var i7790 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Sprite')))
  for(var i = 0; i < i7791.length; i += 2) {
  request.r(i7791[i + 0], i7791[i + 1], 1, i7790, '')
  }
  i7788.ToolIcons = i7790
  var i7793 = i7789[125]
  var i7792 = []
  for(var i = 0; i < i7793.length; i += 2) {
  request.r(i7793[i + 0], i7793[i + 1], 2, i7792, '')
  }
  i7788.AllDrags = i7792
  var i7795 = i7789[126]
  var i7794 = []
  for(var i = 0; i < i7795.length; i += 2) {
  request.r(i7795[i + 0], i7795[i + 1], 2, i7794, '')
  }
  i7788.AllSources = i7794
  var i7797 = i7789[127]
  var i7796 = []
  for(var i = 0; i < i7797.length; i += 2) {
  request.r(i7797[i + 0], i7797[i + 1], 2, i7796, '')
  }
  i7788.AllScratches = i7796
  i7788.stepsDone = i7789[128]
  i7788.levelNo = i7789[129]
  i7788.partNo = i7789[130]
  request.r(i7789[131], i7789[132], 0, i7788, 'clothSfx')
  request.r(i7789[133], i7789[134], 0, i7788, 'doorCloseSfx')
  return i7788
}

Deserializers["ZoomPos"] = function (request, data, root) {
  var i7798 = root || request.c( 'ZoomPos' )
  var i7799 = data
  i7798.CameraPos = new pc.Vec3( i7799[0], i7799[1], i7799[2] )
  i7798.CameraFOV = i7799[3]
  return i7798
}

Deserializers["PlayableCTA"] = function (request, data, root) {
  var i7808 = root || request.c( 'PlayableCTA' )
  var i7809 = data
  i7808.trigger = i7809[0]
  i7808.afterSeconds = i7809[1]
  i7808.afterTaps = i7809[2]
  request.r(i7809[3], i7809[4], 0, i7808, 'scratchProgress')
  i7808.scratchIndex = i7809[5]
  i7808.progressThreshold = i7809[6]
  request.r(i7809[7], i7809[8], 0, i7808, 'watchedTool')
  i7808.blockInputOnFire = !!i7809[9]
  i7808.refireOnEveryTap = !!i7809[10]
  i7808.refireDelay = i7809[11]
  i7808.showEndCard = !!i7809[12]
  request.r(i7809[13], i7809[14], 0, i7808, 'endCard')
  i7808.showEndCardOnProgressTrigger = !!i7809[15]
  i7808.showEndCardOnToolAppearTrigger = !!i7809[16]
  i7808.onCtaFired = request.d('UnityEngine.Events.UnityEvent', i7809[17], i7808.onCtaFired)
  i7808.logWhenFired = !!i7809[18]
  return i7808
}

Deserializers["ScratchCardAsset.ScratchCardManager"] = function (request, data, root) {
  var i7810 = root || request.c( 'ScratchCardAsset.ScratchCardManager' )
  var i7811 = data
  request.r(i7811[0], i7811[1], 0, i7810, 'MainCamera')
  i7810.RenderType = i7811[2]
  request.r(i7811[3], i7811[4], 0, i7810, 'ScratchSurfaceSprite')
  i7810.ScratchSurfaceSpriteHasAlpha = !!i7811[5]
  i7810.MaskProgressCutOffValue = i7811[6]
  request.r(i7811[7], i7811[8], 0, i7810, 'EraseTexture')
  i7810.EraseTextureScale = new pc.Vec2( i7811[9], i7811[10] )
  i7810.InputEnabled = !!i7811[11]
  request.r(i7811[12], i7811[13], 0, i7810, 'Card')
  i7810.Mode = i7811[14]
  request.r(i7811[15], i7811[16], 0, i7810, 'Progress')
  request.r(i7811[17], i7811[18], 0, i7810, 'MeshCard')
  request.r(i7811[19], i7811[20], 0, i7810, 'SpriteCard')
  request.r(i7811[21], i7811[22], 0, i7810, 'ImageCard')
  request.r(i7811[23], i7811[24], 0, i7810, 'MaskShader')
  request.r(i7811[25], i7811[26], 0, i7810, 'BrushShader')
  request.r(i7811[27], i7811[28], 0, i7810, 'MaskProgressShader')
  request.r(i7811[29], i7811[30], 0, i7810, 'MaskProgressCutOffShader')
  return i7810
}

Deserializers["ScratchCardAsset.ScratchCard"] = function (request, data, root) {
  var i7812 = root || request.c( 'ScratchCardAsset.ScratchCard' )
  var i7813 = data
  request.r(i7813[0], i7813[1], 0, i7812, 'MainCamera')
  request.r(i7813[2], i7813[3], 0, i7812, 'Surface')
  i7812.RenderTextureQuality = i7813[4]
  request.r(i7813[5], i7813[6], 0, i7812, 'Eraser')
  request.r(i7813[7], i7813[8], 0, i7812, 'Progress')
  request.r(i7813[9], i7813[10], 0, i7812, 'ScratchSurface')
  request.r(i7813[11], i7813[12], 0, i7812, 'RenderTexture')
  i7812.BrushScale = new pc.Vec2( i7813[13], i7813[14] )
  request.r(i7813[15], i7813[16], 0, i7812, 'ToolTip')
  i7812.InputEnabled = !!i7813[17]
  i7812.IsScratching = !!i7813[18]
  i7812.useChangingScale = !!i7813[19]
  i7812.useGivenBrushScale = !!i7813[20]
  i7812.canSpreadMask = !!i7813[21]
  i7812.shouldPaintHoles = !!i7813[22]
  i7812.canRotateTip = !!i7813[23]
  i7812._mode = i7813[24]
  return i7812
}

Deserializers["ScratchCardAsset.EraseProgress"] = function (request, data, root) {
  var i7814 = root || request.c( 'ScratchCardAsset.EraseProgress' )
  var i7815 = data
  request.r(i7815[0], i7815[1], 0, i7814, 'Card')
  i7814.currentProgress = i7815[2]
  return i7814
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.LineRenderer"] = function (request, data, root) {
  var i7816 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.LineRenderer' )
  var i7817 = data
  i7816.textureMode = i7817[0]
  i7816.alignment = i7817[1]
  i7816.widthCurve = new pc.AnimationCurve( { keys_flow: i7817[2] } )
  i7816.colorGradient = i7817[3] ? new pc.ColorGradient(i7817[3][0], i7817[3][1], i7817[3][2]) : null
  var i7819 = i7817[4]
  var i7818 = []
  for(var i = 0; i < i7819.length; i += 3) {
    i7818.push( new pc.Vec3( i7819[i + 0], i7819[i + 1], i7819[i + 2] ) );
  }
  i7816.positions = i7818
  i7816.positionCount = i7817[5]
  i7816.widthMultiplier = i7817[6]
  i7816.startWidth = i7817[7]
  i7816.endWidth = i7817[8]
  i7816.numCornerVertices = i7817[9]
  i7816.numCapVertices = i7817[10]
  i7816.useWorldSpace = !!i7817[11]
  i7816.loop = !!i7817[12]
  i7816.startColor = new pc.Color(i7817[13], i7817[14], i7817[15], i7817[16])
  i7816.endColor = new pc.Color(i7817[17], i7817[18], i7817[19], i7817[20])
  i7816.generateLightingData = !!i7817[21]
  i7816.enabled = !!i7817[22]
  request.r(i7817[23], i7817[24], 0, i7816, 'sharedMaterial')
  var i7821 = i7817[25]
  var i7820 = []
  for(var i = 0; i < i7821.length; i += 2) {
  request.r(i7821[i + 0], i7821[i + 1], 2, i7820, '')
  }
  i7816.sharedMaterials = i7820
  i7816.receiveShadows = !!i7817[26]
  i7816.shadowCastingMode = i7817[27]
  i7816.sortingLayerID = i7817[28]
  i7816.sortingOrder = i7817[29]
  i7816.lightmapIndex = i7817[30]
  i7816.lightmapSceneIndex = i7817[31]
  i7816.lightmapScaleOffset = new pc.Vec4( i7817[32], i7817[33], i7817[34], i7817[35] )
  i7816.lightProbeUsage = i7817[36]
  i7816.reflectionProbeUsage = i7817[37]
  return i7816
}

Deserializers["TextureOffsetScroller"] = function (request, data, root) {
  var i7824 = root || request.c( 'TextureOffsetScroller' )
  var i7825 = data
  i7824.scrollSpeed = new pc.Vec2( i7825[0], i7825[1] )
  i7824.smoothStart = !!i7825[2]
  i7824.smoothDuration = i7825[3]
  i7824.textureName = i7825[4]
  i7824.useSharedMaterial = !!i7825[5]
  return i7824
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer"] = function (request, data, root) {
  var i7826 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer' )
  var i7827 = data
  i7826.color = new pc.Color(i7827[0], i7827[1], i7827[2], i7827[3])
  request.r(i7827[4], i7827[5], 0, i7826, 'sprite')
  i7826.flipX = !!i7827[6]
  i7826.flipY = !!i7827[7]
  i7826.drawMode = i7827[8]
  i7826.size = new pc.Vec2( i7827[9], i7827[10] )
  i7826.tileMode = i7827[11]
  i7826.adaptiveModeThreshold = i7827[12]
  i7826.maskInteraction = i7827[13]
  i7826.spriteSortPoint = i7827[14]
  i7826.enabled = !!i7827[15]
  request.r(i7827[16], i7827[17], 0, i7826, 'sharedMaterial')
  var i7829 = i7827[18]
  var i7828 = []
  for(var i = 0; i < i7829.length; i += 2) {
  request.r(i7829[i + 0], i7829[i + 1], 2, i7828, '')
  }
  i7826.sharedMaterials = i7828
  i7826.receiveShadows = !!i7827[19]
  i7826.shadowCastingMode = i7827[20]
  i7826.sortingLayerID = i7827[21]
  i7826.sortingOrder = i7827[22]
  i7826.lightmapIndex = i7827[23]
  i7826.lightmapSceneIndex = i7827[24]
  i7826.lightmapScaleOffset = new pc.Vec4( i7827[25], i7827[26], i7827[27], i7827[28] )
  i7826.lightProbeUsage = i7827[29]
  i7826.reflectionProbeUsage = i7827[30]
  return i7826
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.TrailRenderer"] = function (request, data, root) {
  var i7830 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.TrailRenderer' )
  var i7831 = data
  var i7833 = i7831[0]
  var i7832 = []
  for(var i = 0; i < i7833.length; i += 3) {
    i7832.push( new pc.Vec3( i7833[i + 0], i7833[i + 1], i7833[i + 2] ) );
  }
  i7830.positions = i7832
  i7830.positionCount = i7831[1]
  i7830.time = i7831[2]
  i7830.startWidth = i7831[3]
  i7830.endWidth = i7831[4]
  i7830.widthMultiplier = i7831[5]
  i7830.autodestruct = !!i7831[6]
  i7830.emitting = !!i7831[7]
  i7830.numCornerVertices = i7831[8]
  i7830.numCapVertices = i7831[9]
  i7830.minVertexDistance = i7831[10]
  i7830.colorGradient = i7831[11] ? new pc.ColorGradient(i7831[11][0], i7831[11][1], i7831[11][2]) : null
  i7830.startColor = new pc.Color(i7831[12], i7831[13], i7831[14], i7831[15])
  i7830.endColor = new pc.Color(i7831[16], i7831[17], i7831[18], i7831[19])
  i7830.generateLightingData = !!i7831[20]
  i7830.textureMode = i7831[21]
  i7830.alignment = i7831[22]
  i7830.widthCurve = new pc.AnimationCurve( { keys_flow: i7831[23] } )
  i7830.enabled = !!i7831[24]
  request.r(i7831[25], i7831[26], 0, i7830, 'sharedMaterial')
  var i7835 = i7831[27]
  var i7834 = []
  for(var i = 0; i < i7835.length; i += 2) {
  request.r(i7835[i + 0], i7835[i + 1], 2, i7834, '')
  }
  i7830.sharedMaterials = i7834
  i7830.receiveShadows = !!i7831[28]
  i7830.shadowCastingMode = i7831[29]
  i7830.sortingLayerID = i7831[30]
  i7830.sortingOrder = i7831[31]
  i7830.lightmapIndex = i7831[32]
  i7830.lightmapSceneIndex = i7831[33]
  i7830.lightmapScaleOffset = new pc.Vec4( i7831[34], i7831[35], i7831[36], i7831[37] )
  i7830.lightProbeUsage = i7831[38]
  i7830.reflectionProbeUsage = i7831[39]
  return i7830
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D"] = function (request, data, root) {
  var i7836 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D' )
  var i7837 = data
  i7836.usedByComposite = !!i7837[0]
  i7836.autoTiling = !!i7837[1]
  i7836.size = new pc.Vec2( i7837[2], i7837[3] )
  i7836.edgeRadius = i7837[4]
  i7836.enabled = !!i7837[5]
  i7836.isTrigger = !!i7837[6]
  i7836.usedByEffector = !!i7837[7]
  i7836.density = i7837[8]
  i7836.offset = new pc.Vec2( i7837[9], i7837[10] )
  request.r(i7837[11], i7837[12], 0, i7836, 'material')
  return i7836
}

Deserializers["RotaryTimerKnob"] = function (request, data, root) {
  var i7838 = root || request.c( 'RotaryTimerKnob' )
  var i7839 = data
  i7838.canDrag = !!i7839[0]
  i7838.numSteps = i7839[1]
  i7838.onlyClockwise = !!i7839[2]
  request.r(i7839[3], i7839[4], 0, i7838, 'clickSound')
  i7838.enableVibration = !!i7839[5]
  request.r(i7839[6], i7839[7], 0, i7838, 'stepText')
  i7838.OnComplete = request.d('UnityEngine.Events.UnityEvent', i7839[8], i7838.OnComplete)
  request.r(i7839[9], i7839[10], 0, i7838, 'handIndication')
  return i7838
}

Deserializers["UnityEngine.U2D.Animation.SpriteSkin"] = function (request, data, root) {
  var i7840 = root || request.c( 'UnityEngine.U2D.Animation.SpriteSkin' )
  var i7841 = data
  request.r(i7841[0], i7841[1], 0, i7840, 'm_RootBone')
  var i7843 = i7841[2]
  var i7842 = []
  for(var i = 0; i < i7843.length; i += 2) {
  request.r(i7843[i + 0], i7843[i + 1], 2, i7842, '')
  }
  i7840.m_BoneTransforms = i7842
  i7840.m_AlwaysUpdate = !!i7841[3]
  i7840.m_AutoRebind = !!i7841[4]
  return i7840
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteMask"] = function (request, data, root) {
  var i7844 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteMask' )
  var i7845 = data
  i7844.frontSortingLayerID = i7845[0]
  i7844.frontSortingOrder = i7845[1]
  i7844.backSortingLayerID = i7845[2]
  i7844.backSortingOrder = i7845[3]
  i7844.alphaCutoff = i7845[4]
  request.r(i7845[5], i7845[6], 0, i7844, 'sprite')
  i7844.tileMode = i7845[7]
  i7844.isCustomRangeActive = !!i7845[8]
  i7844.spriteSortPoint = i7845[9]
  i7844.enabled = !!i7845[10]
  request.r(i7845[11], i7845[12], 0, i7844, 'sharedMaterial')
  var i7847 = i7845[13]
  var i7846 = []
  for(var i = 0; i < i7847.length; i += 2) {
  request.r(i7847[i + 0], i7847[i + 1], 2, i7846, '')
  }
  i7844.sharedMaterials = i7846
  i7844.receiveShadows = !!i7845[14]
  i7844.shadowCastingMode = i7845[15]
  i7844.sortingLayerID = i7845[16]
  i7844.sortingOrder = i7845[17]
  i7844.lightmapIndex = i7845[18]
  i7844.lightmapSceneIndex = i7845[19]
  i7844.lightmapScaleOffset = new pc.Vec4( i7845[20], i7845[21], i7845[22], i7845[23] )
  i7844.lightProbeUsage = i7845[24]
  i7844.reflectionProbeUsage = i7845[25]
  return i7844
}

Deserializers["BasicDrag"] = function (request, data, root) {
  var i7848 = root || request.c( 'BasicDrag' )
  var i7849 = data
  i7848.canDrag = !!i7849[0]
  i7848.dragByDelta = !!i7849[1]
  i7848.isDragging = !!i7849[2]
  i7848.moveWithPointer = !!i7849[3]
  i7848.canReturn = !!i7849[4]
  i7848.jumpOnReturn = !!i7849[5]
  i7848.returnTime = i7849[6]
  i7848.Tool_Offset = new pc.Vec3( i7849[7], i7849[8], i7849[9] )
  i7848.canScaleIncrease = !!i7849[10]
  i7848.Self_ScaleNew = new pc.Vec3( i7849[11], i7849[12], i7849[13] )
  i7848.canRotateOnPick = !!i7849[14]
  i7848.startRot = new pc.Vec3( i7849[15], i7849[16], i7849[17] )
  i7848.newRot = new pc.Vec3( i7849[18], i7849[19], i7849[20] )
  var i7851 = i7849[21]
  var i7850 = []
  for(var i = 0; i < i7851.length; i += 2) {
  request.r(i7851[i + 0], i7851[i + 1], 2, i7850, '')
  }
  i7848.childSprite = i7850
  request.r(i7849[22], i7849[23], 0, i7848, 'ToolSelectClip')
  request.r(i7849[24], i7849[25], 0, i7848, 'ToolLoopClip')
  request.r(i7849[26], i7849[27], 0, i7848, 'thisParticles')
  i7848.onDragparticle = !!i7849[28]
  request.r(i7849[29], i7849[30], 0, i7848, 'dragParticles')
  request.r(i7849[31], i7849[32], 0, i7848, 'anim')
  i7848.startPos = new pc.Vec3( i7849[33], i7849[34], i7849[35] )
  i7848.startScale = new pc.Vec3( i7849[36], i7849[37], i7849[38] )
  i7848.Vibration = !!i7849[39]
  i7848.isPlacedCannotMove = !!i7849[40]
  i7848.isObjectMovingWhileDragging = !!i7849[41]
  i7848.OnMouseDownEvent = request.d('System.Action', i7849[42], i7848.OnMouseDownEvent)
  i7848.OnMouseUpEvent = request.d('System.Action', i7849[43], i7848.OnMouseUpEvent)
  i7848.ProgStartEvent = request.d('System.Action', i7849[44], i7848.ProgStartEvent)
  i7848.ProgEndEvent = request.d('System.Action', i7849[45], i7848.ProgEndEvent)
  i7848.canCallMouseUpWhenGamePaused = !!i7849[46]
  i7848.ClampX_L = i7849[47]
  i7848.ClampX_H = i7849[48]
  i7848.ClampY_L = i7849[49]
  i7848.ClampY_H = i7849[50]
  i7848.startOrder = i7849[51]
  i7848.dontResetItIsInCollider = !!i7849[52]
  request.r(i7849[53], i7849[54], 0, i7848, 'thisCollider')
  request.r(i7849[55], i7849[56], 0, i7848, 'thisSR')
  i7848.OnMouseDownEventIndependentFromCanDrag = request.d('System.Action', i7849[57], i7848.OnMouseDownEventIndependentFromCanDrag)
  return i7848
}

Deserializers["System.Action"] = function (request, data, root) {
  var i7854 = root || request.c( 'System.Action' )
  var i7855 = data
  return i7854
}

Deserializers["BD_Clamp"] = function (request, data, root) {
  var i7856 = root || request.c( 'BD_Clamp' )
  var i7857 = data
  i7856.ClampX_L = i7857[0]
  i7856.ClampX_H = i7857[1]
  i7856.ClampY_L = i7857[2]
  i7856.ClampY_H = i7857[3]
  return i7856
}

Deserializers["BD_CameraFollow"] = function (request, data, root) {
  var i7858 = root || request.c( 'BD_CameraFollow' )
  var i7859 = data
  request.r(i7859[0], i7859[1], 0, i7858, 'Tool')
  request.r(i7859[2], i7859[3], 0, i7858, 'Pivot')
  i7858.FOV = i7859[4]
  i7858.Y_L = i7859[5]
  i7858.Y_H = i7859[6]
  i7858.X_L = i7859[7]
  i7858.X_R = i7859[8]
  i7858.startDelay = i7859[9]
  i7858.duration = i7859[10]
  return i7858
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D"] = function (request, data, root) {
  var i7860 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D' )
  var i7861 = data
  i7860.bodyType = i7861[0]
  request.r(i7861[1], i7861[2], 0, i7860, 'material')
  i7860.simulated = !!i7861[3]
  i7860.useAutoMass = !!i7861[4]
  i7860.mass = i7861[5]
  i7860.drag = i7861[6]
  i7860.angularDrag = i7861[7]
  i7860.gravityScale = i7861[8]
  i7860.collisionDetectionMode = i7861[9]
  i7860.sleepMode = i7861[10]
  i7860.constraints = i7861[11]
  return i7860
}

Deserializers["PlaceItem"] = function (request, data, root) {
  var i7862 = root || request.c( 'PlaceItem' )
  var i7863 = data
  request.r(i7863[0], i7863[1], 0, i7862, 'thisDrag')
  request.r(i7863[2], i7863[3], 0, i7862, 'Target')
  request.r(i7863[4], i7863[5], 0, i7862, 'Clip')
  i7862.jumpOnPlace = !!i7863[6]
  i7862.jumpHeight = i7863[7]
  i7862.jumpDuration = i7863[8]
  i7862.settleDuration = i7863[9]
  i7862.isPlaced = !!i7863[10]
  i7862.isInsideCollider = !!i7863[11]
  i7862.changeScaleOnPlace = !!i7863[12]
  request.r(i7863[13], i7863[14], 0, i7862, 'item')
  i7862.newScaleOnPlace = new pc.Vec3( i7863[15], i7863[16], i7863[17] )
  i7862.OnPlaced = request.d('UnityEngine.Events.UnityEvent', i7863[18], i7862.OnPlaced)
  return i7862
}

Deserializers["ActionOnTap"] = function (request, data, root) {
  var i7864 = root || request.c( 'ActionOnTap' )
  var i7865 = data
  i7864.OnTap = request.d('UnityEngine.Events.UnityEvent', i7865[0], i7864.OnTap)
  i7864.OnTapExtra = request.d('System.Action', i7865[1], i7864.OnTapExtra)
  return i7864
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CircleCollider2D"] = function (request, data, root) {
  var i7866 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CircleCollider2D' )
  var i7867 = data
  i7866.radius = i7867[0]
  i7866.enabled = !!i7867[1]
  i7866.isTrigger = !!i7867[2]
  i7866.usedByEffector = !!i7867[3]
  i7866.density = i7867[4]
  i7866.offset = new pc.Vec2( i7867[5], i7867[6] )
  request.r(i7867[7], i7867[8], 0, i7866, 'material')
  return i7866
}

Deserializers["PlayParticlesOnCollision"] = function (request, data, root) {
  var i7868 = root || request.c( 'PlayParticlesOnCollision' )
  var i7869 = data
  request.r(i7869[0], i7869[1], 0, i7868, 'Target')
  request.r(i7869[2], i7869[3], 0, i7868, 'ParticlePrefab')
  i7868.destroyIt = !!i7869[4]
  i7868.stayAtPlace = !!i7869[5]
  i7868.disableOnCollision = !!i7869[6]
  i7868.OnCollisionEvent = request.d('UnityEngine.Events.UnityEvent', i7869[7], i7868.OnCollisionEvent)
  return i7868
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.PolygonCollider2D"] = function (request, data, root) {
  var i7870 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.PolygonCollider2D' )
  var i7871 = data
  i7870.usedByComposite = !!i7871[0]
  i7870.autoTiling = !!i7871[1]
  var i7873 = i7871[2]
  var i7872 = []
  for(var i = 0; i < i7873.length; i += 1) {
  var i7875 = i7873[i + 0]
  var i7874 = []
  for(var i = 0; i < i7875.length; i += 2) {
    i7874.push( new pc.Vec2( i7875[i + 0], i7875[i + 1] ) );
  }
    i7872.push( i7874 );
  }
  i7870.points = i7872
  i7870.enabled = !!i7871[3]
  i7870.isTrigger = !!i7871[4]
  i7870.usedByEffector = !!i7871[5]
  i7870.density = i7871[6]
  i7870.offset = new pc.Vec2( i7871[7], i7871[8] )
  request.r(i7871[9], i7871[10], 0, i7870, 'material')
  return i7870
}

Deserializers["PlaySfxOnCollision"] = function (request, data, root) {
  var i7882 = root || request.c( 'PlaySfxOnCollision' )
  var i7883 = data
  request.r(i7883[0], i7883[1], 0, i7882, 'Tip')
  i7882.Mode = i7883[2]
  request.r(i7883[3], i7883[4], 0, i7882, 'DragInput')
  request.r(i7883[5], i7883[6], 0, i7882, 'Source')
  i7882.startVol = i7883[7]
  i7882.targetVol = i7883[8]
  i7882.duration = i7883[9]
  request.r(i7883[10], i7883[11], 0, i7882, 'Particles')
  i7882.isDone = !!i7883[12]
  i7882.isInArea = !!i7883[13]
  i7882.isPlaying = !!i7883[14]
  return i7882
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i7884 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i7885 = data
  request.r(i7885[0], i7885[1], 0, i7884, 'clip')
  request.r(i7885[2], i7885[3], 0, i7884, 'outputAudioMixerGroup')
  i7884.playOnAwake = !!i7885[4]
  i7884.loop = !!i7885[5]
  i7884.time = i7885[6]
  i7884.volume = i7885[7]
  i7884.pitch = i7885[8]
  i7884.enabled = !!i7885[9]
  return i7884
}

Deserializers["SewingCol"] = function (request, data, root) {
  var i7886 = root || request.c( 'SewingCol' )
  var i7887 = data
  request.r(i7887[0], i7887[1], 0, i7886, 'targetTip')
  var i7889 = i7887[2]
  var i7888 = []
  for(var i = 0; i < i7889.length; i += 2) {
  request.r(i7889[i + 0], i7889[i + 1], 2, i7888, '')
  }
  i7886.Anim_Items = i7888
  i7886.isDone = !!i7887[3]
  request.r(i7887[4], i7887[5], 0, i7886, 'sfx')
  return i7886
}

Deserializers["OutlinePulse"] = function (request, data, root) {
  var i7892 = root || request.c( 'OutlinePulse' )
  var i7893 = data
  i7892.smallThickness = i7893[0]
  i7892.largeThickness = i7893[1]
  i7892.transitionSpeed = i7893[2]
  i7892.animationSpeed = i7893[3]
  i7892.isThickOutline = !!i7893[4]
  i7892.animate = !!i7893[5]
  i7892.hideSpriteOnly = !!i7893[6]
  return i7892
}

Deserializers["BD_Action"] = function (request, data, root) {
  var i7894 = root || request.c( 'BD_Action' )
  var i7895 = data
  i7894.OnMouseDownEvent = request.d('UnityEngine.Events.UnityEvent', i7895[0], i7894.OnMouseDownEvent)
  i7894.OnMouseUpEvent = request.d('UnityEngine.Events.UnityEvent', i7895[1], i7894.OnMouseUpEvent)
  i7894.setToolLayer = !!i7895[2]
  request.r(i7895[3], i7895[4], 0, i7894, 'tool_SP')
  return i7894
}

Deserializers["Level1_SurfController"] = function (request, data, root) {
  var i7896 = root || request.c( 'Level1_SurfController' )
  var i7897 = data
  i7896.target_rotZ = i7897[0]
  i7896.rotationDuration = i7897[1]
  i7896.rotationEase = i7897[2]
  request.r(i7897[3], i7897[4], 0, i7896, 'maskItem')
  i7896.maskTarget_posY = i7897[5]
  i7896.maskMoveDuration = i7897[6]
  i7896.requiredHoldTime = i7897[7]
  i7896.minRotationForProgress = i7897[8]
  request.r(i7897[9], i7897[10], 0, i7896, 'tipCollider')
  request.r(i7897[11], i7897[12], 0, i7896, 'targetZoneCollider')
  request.r(i7897[13], i7897[14], 0, i7896, 'surf_Particles')
  request.r(i7897[15], i7897[16], 0, i7896, 'surf_SubEmitter')
  request.r(i7897[17], i7897[18], 0, i7896, 'Indication')
  i7896.OnComplete = request.d('UnityEngine.Events.UnityEvent', i7897[19], i7896.OnComplete)
  i7896.currentHoldProgress = i7897[20]
  return i7896
}

Deserializers["BD_Fold"] = function (request, data, root) {
  var i7898 = root || request.c( 'BD_Fold' )
  var i7899 = data
  i7898.canDrag = !!i7899[0]
  i7898.canFoldBottomLeft = !!i7899[1]
  i7898.canFoldBottomRight = !!i7899[2]
  i7898.canFoldTopLeft = !!i7899[3]
  i7898.canFoldTopRight = !!i7899[4]
  request.r(i7899[5], i7899[6], 0, i7898, 'Indication')
  request.r(i7899[7], i7899[8], 0, i7898, 'backSideSprite')
  i7898.maxSideOffset = i7899[9]
  i7898.foldBackDuration = i7899[10]
  i7898.instantFoldAmount = i7899[11]
  i7898.useSmoothRelease = !!i7899[12]
  i7898.completionLimit = i7899[13]
  i7898.afterCompletionTravelTo = i7899[14]
  i7898.OnComplete = request.d('UnityEngine.Events.UnityEvent', i7899[15], i7898.OnComplete)
  i7898.currentProgress = i7899[16]
  i7898.innerShadowStrength = i7899[17]
  request.r(i7899[18], i7899[19], 0, i7898, 'dragAudioSource')
  request.r(i7899[20], i7899[21], 0, i7898, 'dragStartClip')
  request.r(i7899[22], i7899[23], 0, i7898, 'completionClip')
  i7898.audioFadeSpeed = i7899[24]
  i7898.audioMoveThreshold = i7899[25]
  i7898.hapticInterval = i7899[26]
  return i7898
}

Deserializers["BD_Progress"] = function (request, data, root) {
  var i7900 = root || request.c( 'BD_Progress' )
  var i7901 = data
  var i7903 = i7901[0]
  var i7902 = []
  for(var i = 0; i < i7903.length; i += 1) {
    i7902.push( request.d('ScratchData', i7903[i + 0]) );
  }
  i7900.AllScratches = i7902
  i7900.OnScratchComplete = request.d('UnityEngine.Events.UnityEvent', i7901[1], i7900.OnScratchComplete)
  i7900.isProgDone = !!i7901[2]
  i7900.canCallComplete = !!i7901[3]
  i7900.CollectiveAppear = !!i7901[4]
  i7900.tipControl = !!i7901[5]
  i7900.progressControl = !!i7901[6]
  request.r(i7901[7], i7901[8], 0, i7900, 'thisDrag')
  i7900.CompleteEvent = request.d('System.Action', i7901[9], i7900.CompleteEvent)
  i7900.SubCompleteEvent = request.d('System.Action', i7901[10], i7900.SubCompleteEvent)
  return i7900
}

Deserializers["ScratchData"] = function (request, data, root) {
  var i7906 = root || request.c( 'ScratchData' )
  var i7907 = data
  request.r(i7907[0], i7907[1], 0, i7906, 'ScratchManager')
  i7906.scratchLimit = i7907[2]
  i7906.isComplete = !!i7907[3]
  return i7906
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshFilter"] = function (request, data, root) {
  var i7908 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshFilter' )
  var i7909 = data
  request.r(i7909[0], i7909[1], 0, i7908, 'sharedMesh')
  return i7908
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshRenderer"] = function (request, data, root) {
  var i7910 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshRenderer' )
  var i7911 = data
  request.r(i7911[0], i7911[1], 0, i7910, 'additionalVertexStreams')
  i7910.enabled = !!i7911[2]
  request.r(i7911[3], i7911[4], 0, i7910, 'sharedMaterial')
  var i7913 = i7911[5]
  var i7912 = []
  for(var i = 0; i < i7913.length; i += 2) {
  request.r(i7913[i + 0], i7913[i + 1], 2, i7912, '')
  }
  i7910.sharedMaterials = i7912
  i7910.receiveShadows = !!i7911[6]
  i7910.shadowCastingMode = i7911[7]
  i7910.sortingLayerID = i7911[8]
  i7910.sortingOrder = i7911[9]
  i7910.lightmapIndex = i7911[10]
  i7910.lightmapSceneIndex = i7911[11]
  i7910.lightmapScaleOffset = new pc.Vec4( i7911[12], i7911[13], i7911[14], i7911[15] )
  i7910.lightProbeUsage = i7911[16]
  i7910.reflectionProbeUsage = i7911[17]
  return i7910
}

Deserializers["StaticFixedPipe"] = function (request, data, root) {
  var i7914 = root || request.c( 'StaticFixedPipe' )
  var i7915 = data
  request.r(i7915[0], i7915[1], 0, i7914, 'meshRenderer')
  request.r(i7915[2], i7915[3], 0, i7914, 'toolTransform')
  request.r(i7915[4], i7915[5], 0, i7914, 'toolDirectionPoint')
  request.r(i7915[6], i7915[7], 0, i7914, 'fixedEndPoint')
  i7914.segmentCount = i7915[8]
  i7914.totalLength = i7915[9]
  i7914.constraintIterations = i7915[10]
  i7914.gravity = new pc.Vec3( i7915[11], i7915[12], i7915[13] )
  i7914.pipeWidth = i7915[14]
  return i7914
}

Deserializers["BD_SpriteChange"] = function (request, data, root) {
  var i7916 = root || request.c( 'BD_SpriteChange' )
  var i7917 = data
  request.r(i7917[0], i7917[1], 0, i7916, 'BD')
  request.r(i7917[2], i7917[3], 0, i7916, 'SR')
  request.r(i7917[4], i7917[5], 0, i7916, 'Default')
  request.r(i7917[6], i7917[7], 0, i7916, 'Picked')
  i7916.resetOnRelease = !!i7917[8]
  return i7916
}

Deserializers["MenuLevel"] = function (request, data, root) {
  var i7918 = root || request.c( 'MenuLevel' )
  var i7919 = data
  request.r(i7919[0], i7919[1], 0, i7918, 'menuLevelBtnUpdate')
  var i7921 = i7919[2]
  var i7920 = []
  for(var i = 0; i < i7921.length; i += 1) {
    i7920.push( request.d('MenuLevelData', i7921[i + 0]) );
  }
  i7918.AllSteps = i7920
  request.r(i7919[3], i7919[4], 0, i7918, 'buttonparent')
  var i7923 = i7919[5]
  var i7922 = []
  for(var i = 0; i < i7923.length; i += 2) {
  request.r(i7923[i + 0], i7923[i + 1], 2, i7922, '')
  }
  i7918.BtnsDotweenAnims = i7922
  var i7925 = i7919[6]
  var i7924 = []
  for(var i = 0; i < i7925.length; i += 2) {
  request.r(i7925[i + 0], i7925[i + 1], 2, i7924, '')
  }
  i7918.BtnsCols = i7924
  request.r(i7919[7], i7919[8], 0, i7918, 'mainGameView')
  request.r(i7919[9], i7919[10], 0, i7918, 'Storyboard')
  request.r(i7919[11], i7919[12], 0, i7918, 'BgMusic')
  request.r(i7919[13], i7919[14], 0, i7918, 'BgStoryMusic')
  request.r(i7919[15], i7919[16], 0, i7918, 'Hand_Tut1')
  request.r(i7919[17], i7919[18], 0, i7918, 'Button_Hand')
  var i7927 = i7919[19]
  var i7926 = []
  for(var i = 0; i < i7927.length; i += 2) {
  request.r(i7927[i + 0], i7927[i + 1], 2, i7926, '')
  }
  i7918.itemEnable_Onstart = i7926
  var i7929 = i7919[20]
  var i7928 = []
  for(var i = 0; i < i7929.length; i += 2) {
  request.r(i7929[i + 0], i7929[i + 1], 2, i7928, '')
  }
  i7918.itemDisable_Onstart = i7928
  var i7931 = i7919[21]
  var i7930 = []
  for(var i = 0; i < i7931.length; i += 2) {
  request.r(i7931[i + 0], i7931[i + 1], 2, i7930, '')
  }
  i7918.itemEnable_Oncomplete = i7930
  var i7933 = i7919[22]
  var i7932 = []
  for(var i = 0; i < i7933.length; i += 2) {
  request.r(i7933[i + 0], i7933[i + 1], 2, i7932, '')
  }
  i7918.itemDisable_Oncomplete = i7932
  i7918.levelKey = i7919[23]
  i7918.revealDirtyHoldTime = i7919[24]
  return i7918
}

Deserializers["MenuLevelData"] = function (request, data, root) {
  var i7936 = root || request.c( 'MenuLevelData' )
  var i7937 = data
  i7936.Name = i7937[0]
  request.r(i7937[1], i7937[2], 0, i7936, 'UiBtn')
  request.r(i7937[3], i7937[4], 0, i7936, 'TickBtn')
  request.r(i7937[5], i7937[6], 0, i7936, 'ExclamationIcon')
  var i7939 = i7937[7]
  var i7938 = []
  for(var i = 0; i < i7939.length; i += 2) {
  request.r(i7939[i + 0], i7939[i + 1], 2, i7938, '')
  }
  i7936.Item_Dirty = i7938
  var i7941 = i7937[8]
  var i7940 = []
  for(var i = 0; i < i7941.length; i += 2) {
  request.r(i7941[i + 0], i7941[i + 1], 2, i7940, '')
  }
  i7936.Item_Clean = i7940
  request.r(i7937[9], i7937[10], 0, i7936, 'CompleteParticle')
  return i7936
}

Deserializers["IntroLevelAnim"] = function (request, data, root) {
  var i7946 = root || request.c( 'IntroLevelAnim' )
  var i7947 = data
  request.r(i7947[0], i7947[1], 0, i7946, 'menuLevel')
  i7946.lvlkey = i7947[2]
  request.r(i7947[3], i7947[4], 0, i7946, 'DressChangeObj')
  request.r(i7947[5], i7947[6], 0, i7946, 'DressChangeClip')
  return i7946
}

Deserializers["Level_PoseController"] = function (request, data, root) {
  var i7948 = root || request.c( 'Level_PoseController' )
  var i7949 = data
  var i7951 = i7949[0]
  var i7950 = []
  for(var i = 0; i < i7951.length; i += 2) {
  request.r(i7951[i + 0], i7951[i + 1], 2, i7950, '')
  }
  i7948.itemToShow = i7950
  var i7953 = i7949[1]
  var i7952 = []
  for(var i = 0; i < i7953.length; i += 2) {
  request.r(i7953[i + 0], i7953[i + 1], 2, i7952, '')
  }
  i7948.itemToHide = i7952
  i7948.stepTarget = i7949[2]
  return i7948
}

Deserializers["BD_AnimationHelper"] = function (request, data, root) {
  var i7954 = root || request.c( 'BD_AnimationHelper' )
  var i7955 = data
  i7954.OnAnimationComplete = request.d('UnityEngine.Events.UnityEvent', i7955[0], i7954.OnAnimationComplete)
  request.r(i7955[1], i7955[2], 0, i7954, 'sfxClip')
  i7954.progBar = !!i7955[3]
  return i7954
}

Deserializers["SpriteButton"] = function (request, data, root) {
  var i7956 = root || request.c( 'SpriteButton' )
  var i7957 = data
  i7956.isLocked = !!i7957[0]
  i7956.lockMsg = i7957[1]
  i7956.onClick = request.d('UnityEngine.Events.UnityEvent', i7957[2], i7956.onClick)
  i7956.onLockedClick = request.d('UnityEngine.Events.UnityEvent', i7957[3], i7956.onLockedClick)
  i7956.isLevelBtnSfx = !!i7957[4]
  request.r(i7957[5], i7957[6], 0, i7956, 'pivot')
  i7956.reductionChange = i7957[7]
  i7956.animationDuration = i7957[8]
  return i7956
}

Deserializers["DressChangeIntro"] = function (request, data, root) {
  var i7958 = root || request.c( 'DressChangeIntro' )
  var i7959 = data
  request.r(i7959[0], i7959[1], 0, i7958, 'menuLevel')
  request.r(i7959[2], i7959[3], 0, i7958, 'curtainMoveable')
  request.r(i7959[4], i7959[5], 0, i7958, 'curtainStatic')
  i7958.staticCurtainOnly = !!i7959[6]
  i7958.curtainFadeInDuration = i7959[7]
  i7958.curtainFadeInDelay = i7959[8]
  i7958.slideInOffsetX = i7959[9]
  i7958.slideInDuration = i7959[10]
  i7958.slideInEase = i7959[11]
  i7958.startDelay = i7959[12]
  request.r(i7959[13], i7959[14], 0, i7958, 'handSmall')
  request.r(i7959[15], i7959[16], 0, i7958, 'bone_3')
  i7958.handSmallBackwardAmount = i7959[17]
  i7958.bone3BackwardAmount = i7959[18]
  i7958.handPeekDuration = i7959[19]
  i7958.handPeekEase = i7959[20]
  request.r(i7959[21], i7959[22], 0, i7958, 'armCloth')
  i7958.armClothDelay = i7959[23]
  i7958.armClothDuration = i7959[24]
  i7958.armClothEase = i7959[25]
  request.r(i7959[26], i7959[27], 0, i7958, 'basket')
  i7958.basketOffsetX = i7959[28]
  i7958.basketSlideDelay = i7959[29]
  i7958.basketSlideDuration = i7959[30]
  i7958.basketSlideEase = i7959[31]
  request.r(i7959[32], i7959[33], 0, i7958, 'cloth')
  request.r(i7959[34], i7959[35], 0, i7958, 'clothRenderer')
  request.r(i7959[36], i7959[37], 0, i7958, 'clothPickedSprite')
  request.r(i7959[38], i7959[39], 0, i7958, 'clothBasketSprite')
  request.r(i7959[40], i7959[41], 0, i7958, 'handIndication')
  request.r(i7959[42], i7959[43], 0, i7958, 'basketDropTarget')
  i7958.dropRadius = i7959[44]
  i7958.dropJumpHeight = i7959[45]
  i7958.dropJumpDuration = i7959[46]
  i7958.dropSinkDuration = i7959[47]
  i7958.clothPickedSortingOrder = i7959[48]
  request.r(i7959[49], i7959[50], 0, i7958, 'ToolPlaceClip')
  i7958.OnIntroComplete = request.d('UnityEngine.Events.UnityEvent', i7959[51], i7958.OnIntroComplete)
  return i7958
}

Deserializers["MenuDraggable"] = function (request, data, root) {
  var i7960 = root || request.c( 'MenuDraggable' )
  var i7961 = data
  i7960.canDrag = !!i7961[0]
  i7960.returnToStartPosition = !!i7961[1]
  i7960.returnDuration = i7961[2]
  i7960.returnEase = i7961[3]
  i7960.ClampX_L = i7961[4]
  i7960.ClampX_H = i7961[5]
  i7960.ClampY_L = i7961[6]
  i7960.ClampY_H = i7961[7]
  request.r(i7961[8], i7961[9], 0, i7960, 'ToolTapClip')
  i7960.isPlaced = !!i7961[10]
  i7960.OnPicked = request.d('System.Action', i7961[11], i7960.OnPicked)
  i7960.OnReleased = request.d('System.Action', i7961[12], i7960.OnReleased)
  return i7960
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Cubemap"] = function (request, data, root) {
  var i7962 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Cubemap' )
  var i7963 = data
  i7962.name = i7963[0]
  i7962.atlasId = i7963[1]
  i7962.mipmapCount = i7963[2]
  i7962.hdr = !!i7963[3]
  i7962.size = i7963[4]
  i7962.anisoLevel = i7963[5]
  i7962.filterMode = i7963[6]
  var i7965 = i7963[7]
  var i7964 = []
  for(var i = 0; i < i7965.length; i += 4) {
    i7964.push( UnityEngine.Rect.MinMaxRect(i7965[i + 0], i7965[i + 1], i7965[i + 2], i7965[i + 3]) );
  }
  i7962.rects = i7964
  i7962.wrapU = i7963[8]
  i7962.wrapV = i7963[9]
  return i7962
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i7968 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i7969 = data
  i7968.name = i7969[0]
  i7968.index = i7969[1]
  i7968.startup = !!i7969[2]
  return i7968
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i7970 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i7971 = data
  i7970.aspect = i7971[0]
  i7970.orthographic = !!i7971[1]
  i7970.orthographicSize = i7971[2]
  i7970.backgroundColor = new pc.Color(i7971[3], i7971[4], i7971[5], i7971[6])
  i7970.nearClipPlane = i7971[7]
  i7970.farClipPlane = i7971[8]
  i7970.fieldOfView = i7971[9]
  i7970.depth = i7971[10]
  i7970.clearFlags = i7971[11]
  i7970.cullingMask = i7971[12]
  i7970.rect = i7971[13]
  request.r(i7971[14], i7971[15], 0, i7970, 'targetTexture')
  i7970.usePhysicalProperties = !!i7971[16]
  i7970.focalLength = i7971[17]
  i7970.sensorSize = new pc.Vec2( i7971[18], i7971[19] )
  i7970.lensShift = new pc.Vec2( i7971[20], i7971[21] )
  i7970.gateFit = i7971[22]
  i7970.commandBufferCount = i7971[23]
  i7970.cameraType = i7971[24]
  i7970.enabled = !!i7971[25]
  return i7970
}

Deserializers["CameraController"] = function (request, data, root) {
  var i7972 = root || request.c( 'CameraController' )
  var i7973 = data
  request.r(i7973[0], i7973[1], 0, i7972, 'cam')
  i7972.defaultPosition = new pc.Vec3( i7973[2], i7973[3], i7973[4] )
  i7972.defaultSize = i7973[5]
  i7972.defaultFOV = i7973[6]
  i7972.defaultDuration = i7973[7]
  i7972.defaultEase = i7973[8]
  return i7972
}

Deserializers["MusicSource"] = function (request, data, root) {
  var i7974 = root || request.c( 'MusicSource' )
  var i7975 = data
  request.r(i7975[0], i7975[1], 0, i7974, 'source')
  return i7974
}

Deserializers["UI_Manager"] = function (request, data, root) {
  var i7976 = root || request.c( 'UI_Manager' )
  var i7977 = data
  i7976.levelCompleted = !!i7977[0]
  i7976.isPauseActive = !!i7977[1]
  i7976.loadIndex = i7977[2]
  request.r(i7977[3], i7977[4], 0, i7976, 'removeAdsButton')
  request.r(i7977[5], i7977[6], 0, i7976, 'pauseButton')
  request.r(i7977[7], i7977[8], 0, i7976, 'Fade_Img')
  request.r(i7977[9], i7977[10], 0, i7976, 'TopBarAnim')
  request.r(i7977[11], i7977[12], 0, i7976, 'MainPanel')
  request.r(i7977[13], i7977[14], 0, i7976, 'PausePanel')
  request.r(i7977[15], i7977[16], 0, i7976, 'PausePopUp')
  request.r(i7977[17], i7977[18], 0, i7976, 'PauseCanvasGroup')
  request.r(i7977[19], i7977[20], 0, i7976, 'RateUsPanel')
  request.r(i7977[21], i7977[22], 0, i7976, 'RateUsPopUp')
  request.r(i7977[23], i7977[24], 0, i7976, 'RemoveAdsPanel')
  request.r(i7977[25], i7977[26], 0, i7976, 'RemoveAdsPopUp')
  request.r(i7977[27], i7977[28], 0, i7976, 'RemoveAdsCanvasGroup')
  var i7979 = i7977[29]
  var i7978 = []
  for(var i = 0; i < i7979.length; i += 2) {
  request.r(i7979[i + 0], i7979[i + 1], 2, i7978, '')
  }
  i7976.RemoveAdsAnims = i7978
  var i7981 = i7977[30]
  var i7980 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.GameObject')))
  for(var i = 0; i < i7981.length; i += 2) {
  request.r(i7981[i + 0], i7981[i + 1], 1, i7980, '')
  }
  i7976.thingsToDisableWhenCompletePanel = i7980
  request.r(i7977[31], i7977[32], 0, i7976, 'CompletePanel')
  request.r(i7977[33], i7977[34], 0, i7976, 'LevelIcon')
  request.r(i7977[35], i7977[36], 0, i7976, 'CompleteParticles')
  request.r(i7977[37], i7977[38], 0, i7976, 'progressBar')
  request.r(i7977[39], i7977[40], 0, i7976, 'progressText')
  request.r(i7977[41], i7977[42], 0, i7976, 'toolIcon1')
  request.r(i7977[43], i7977[44], 0, i7976, 'toolIcon2')
  request.r(i7977[45], i7977[46], 0, i7976, 'toolIcon3')
  request.r(i7977[47], i7977[48], 0, i7976, 'target1')
  request.r(i7977[49], i7977[50], 0, i7976, 'target2')
  i7976.toolMoveDuration = i7977[51]
  i7976.currentIndex = i7977[52]
  var i7983 = i7977[53]
  var i7982 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Sprite')))
  for(var i = 0; i < i7983.length; i += 2) {
  request.r(i7983[i + 0], i7983[i + 1], 1, i7982, '')
  }
  i7976.allTools = i7982
  request.r(i7977[54], i7977[55], 0, i7976, 'clockProgress')
  request.r(i7977[56], i7977[57], 0, i7976, 'clockProgressFill')
  request.r(i7977[58], i7977[59], 0, i7976, 'clockAudio')
  i7976.moveDistance = i7977[60]
  i7976.animationDuration = i7977[61]
  i7976.greyBgChildName = i7977[62]
  i7976.pushOffset = i7977[63]
  return i7976
}

Deserializers["GameManagerPlayable"] = function (request, data, root) {
  var i7986 = root || request.c( 'GameManagerPlayable' )
  var i7987 = data
  request.r(i7987[0], i7987[1], 0, i7986, 'endParticles')
  request.r(i7987[2], i7987[3], 0, i7986, 'stepCompleteParticles')
  request.r(i7987[4], i7987[5], 0, i7986, 'DefaultMat')
  request.r(i7987[6], i7987[7], 0, i7986, 'BG_Music')
  request.r(i7987[8], i7987[9], 0, i7986, 'restoreEffectShader')
  request.r(i7987[10], i7987[11], 0, i7986, 'stickerEffectShader')
  i7986.isComplete = !!i7987[12]
  i7986.isPaused = !!i7987[13]
  request.r(i7987[14], i7987[15], 0, i7986, 'currentLevel')
  i7986.startLevelOnPlay = !!i7987[16]
  i7986.currentLevelNo = i7987[17]
  return i7986
}

Deserializers["AudioController"] = function (request, data, root) {
  var i7988 = root || request.c( 'AudioController' )
  var i7989 = data
  request.r(i7989[0], i7989[1], 0, i7988, 'MainMixer')
  request.r(i7989[2], i7989[3], 0, i7988, 'UiClick')
  request.r(i7989[4], i7989[5], 0, i7988, 'UiClickSource')
  var i7991 = i7989[6]
  var i7990 = []
  for(var i = 0; i < i7991.length; i += 2) {
  request.r(i7991[i + 0], i7991[i + 1], 2, i7990, '')
  }
  i7988.SfxSources = i7990
  var i7993 = i7989[7]
  var i7992 = []
  for(var i = 0; i < i7993.length; i += 2) {
  request.r(i7993[i + 0], i7993[i + 1], 2, i7992, '')
  }
  i7988.AllClips = i7992
  return i7988
}

Deserializers["PlayableHudRuntime"] = function (request, data, root) {
  var i7996 = root || request.c( 'PlayableHudRuntime' )
  var i7997 = data
  return i7996
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i7998 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i7999 = data
  request.r(i7999[0], i7999[1], 0, i7998, 'm_FirstSelected')
  i7998.m_sendNavigationEvents = !!i7999[2]
  i7998.m_DragThreshold = i7999[3]
  return i7998
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i8000 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i8001 = data
  i8000.m_HorizontalAxis = i8001[0]
  i8000.m_VerticalAxis = i8001[1]
  i8000.m_SubmitButton = i8001[2]
  i8000.m_CancelButton = i8001[3]
  i8000.m_InputActionsPerSecond = i8001[4]
  i8000.m_RepeatDelay = i8001[5]
  i8000.m_ForceModuleActive = !!i8001[6]
  i8000.m_SendPointerHoverToParent = !!i8001[7]
  return i8000
}

Deserializers["PlayableRouter"] = function (request, data, root) {
  var i8002 = root || request.c( 'PlayableRouter' )
  var i8003 = data
  var i8005 = i8003[0]
  var i8004 = []
  for(var i = 0; i < i8005.length; i += 2) {
  request.r(i8005[i + 0], i8005[i + 1], 2, i8004, '')
  }
  i8002.menuObjects = i8004
  var i8007 = i8003[1]
  var i8006 = []
  for(var i = 0; i < i8007.length; i += 2) {
  request.r(i8007[i + 0], i8007[i + 1], 2, i8006, '')
  }
  i8002.gameplayObjects = i8006
  var i8009 = i8003[2]
  var i8008 = []
  for(var i = 0; i < i8009.length; i += 1) {
    i8008.push( request.d('PlayableRouter+SubLevelSlot', i8009[i + 0]) );
  }
  i8002.subLevels = i8008
  i8002.fadeDuration = i8003[3]
  i8002.onIntroStart = request.d('UnityEngine.Events.UnityEvent', i8003[4], i8002.onIntroStart)
  var i8011 = i8003[5]
  var i8010 = []
  for(var i = 0; i < i8011.length; i += 2) {
  request.r(i8011[i + 0], i8011[i + 1], 2, i8010, '')
  }
  i8002.hideDuringIntro = i8010
  i8002.lockedMessage = i8003[6]
  i8002.lockedTapsToCTA = i8003[7]
  return i8002
}

Deserializers["PlayableRouter+SubLevelSlot"] = function (request, data, root) {
  var i8014 = root || request.c( 'PlayableRouter+SubLevelSlot' )
  var i8015 = data
  request.r(i8015[0], i8015[1], 0, i8014, 'button')
  request.r(i8015[2], i8015[3], 0, i8014, 'level')
  request.r(i8015[4], i8015[5], 0, i8014, 'intro')
  return i8014
}

Deserializers["ToastManager"] = function (request, data, root) {
  var i8016 = root || request.c( 'ToastManager' )
  var i8017 = data
  request.r(i8017[0], i8017[1], 0, i8016, 'toastPanel')
  request.r(i8017[2], i8017[3], 0, i8016, 'toastPopup')
  request.r(i8017[4], i8017[5], 0, i8016, 'canvasGroup')
  request.r(i8017[6], i8017[7], 0, i8016, 'toastText')
  i8016.startY = i8017[8]
  i8016.visibleY = i8017[9]
  i8016.endY = i8017[10]
  i8016.animationTime = i8017[11]
  i8016.animationTimeUp = i8017[12]
  return i8016
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasGroup"] = function (request, data, root) {
  var i8018 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasGroup' )
  var i8019 = data
  i8018.m_Alpha = i8019[0]
  i8018.m_Interactable = !!i8019[1]
  i8018.m_BlocksRaycasts = !!i8019[2]
  i8018.m_IgnoreParentGroups = !!i8019[3]
  i8018.enabled = !!i8019[4]
  return i8018
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i8020 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i8021 = data
  i8020.ambientIntensity = i8021[0]
  i8020.reflectionIntensity = i8021[1]
  i8020.ambientMode = i8021[2]
  i8020.ambientLight = new pc.Color(i8021[3], i8021[4], i8021[5], i8021[6])
  i8020.ambientSkyColor = new pc.Color(i8021[7], i8021[8], i8021[9], i8021[10])
  i8020.ambientGroundColor = new pc.Color(i8021[11], i8021[12], i8021[13], i8021[14])
  i8020.ambientEquatorColor = new pc.Color(i8021[15], i8021[16], i8021[17], i8021[18])
  i8020.fogColor = new pc.Color(i8021[19], i8021[20], i8021[21], i8021[22])
  i8020.fogEndDistance = i8021[23]
  i8020.fogStartDistance = i8021[24]
  i8020.fogDensity = i8021[25]
  i8020.fog = !!i8021[26]
  request.r(i8021[27], i8021[28], 0, i8020, 'skybox')
  i8020.fogMode = i8021[29]
  var i8023 = i8021[30]
  var i8022 = []
  for(var i = 0; i < i8023.length; i += 1) {
    i8022.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i8023[i + 0]) );
  }
  i8020.lightmaps = i8022
  i8020.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i8021[31], i8020.lightProbes)
  i8020.lightmapsMode = i8021[32]
  i8020.mixedBakeMode = i8021[33]
  i8020.environmentLightingMode = i8021[34]
  i8020.ambientProbe = new pc.SphericalHarmonicsL2(i8021[35])
  request.r(i8021[36], i8021[37], 0, i8020, 'customReflection')
  request.r(i8021[38], i8021[39], 0, i8020, 'defaultReflection')
  i8020.defaultReflectionMode = i8021[40]
  i8020.defaultReflectionResolution = i8021[41]
  i8020.sunLightObjectId = i8021[42]
  i8020.pixelLightCount = i8021[43]
  i8020.defaultReflectionHDR = !!i8021[44]
  i8020.hasLightDataAsset = !!i8021[45]
  i8020.hasManualGenerate = !!i8021[46]
  return i8020
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i8026 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i8027 = data
  request.r(i8027[0], i8027[1], 0, i8026, 'lightmapColor')
  request.r(i8027[2], i8027[3], 0, i8026, 'lightmapDirection')
  request.r(i8027[4], i8027[5], 0, i8026, 'shadowMask')
  return i8026
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i8028 = root || new UnityEngine.LightProbes()
  var i8029 = data
  return i8028
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i8034 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i8035 = data
  var i8037 = i8035[0]
  var i8036 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i8037.length; i += 1) {
    i8036.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i8037[i + 0]));
  }
  i8034.ShaderCompilationErrors = i8036
  i8034.name = i8035[1]
  i8034.guid = i8035[2]
  var i8039 = i8035[3]
  var i8038 = []
  for(var i = 0; i < i8039.length; i += 1) {
    i8038.push( i8039[i + 0] );
  }
  i8034.shaderDefinedKeywords = i8038
  var i8041 = i8035[4]
  var i8040 = []
  for(var i = 0; i < i8041.length; i += 1) {
    i8040.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i8041[i + 0]) );
  }
  i8034.passes = i8040
  var i8043 = i8035[5]
  var i8042 = []
  for(var i = 0; i < i8043.length; i += 1) {
    i8042.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i8043[i + 0]) );
  }
  i8034.usePasses = i8042
  var i8045 = i8035[6]
  var i8044 = []
  for(var i = 0; i < i8045.length; i += 1) {
    i8044.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i8045[i + 0]) );
  }
  i8034.defaultParameterValues = i8044
  request.r(i8035[7], i8035[8], 0, i8034, 'unityFallbackShader')
  i8034.readDepth = !!i8035[9]
  i8034.hasDepthOnlyPass = !!i8035[10]
  i8034.isCreatedByShaderGraph = !!i8035[11]
  i8034.disableBatching = !!i8035[12]
  i8034.compiled = !!i8035[13]
  return i8034
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i8048 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i8049 = data
  i8048.shaderName = i8049[0]
  i8048.errorMessage = i8049[1]
  return i8048
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i8054 = root || new pc.UnityShaderPass()
  var i8055 = data
  i8054.id = i8055[0]
  i8054.subShaderIndex = i8055[1]
  i8054.name = i8055[2]
  i8054.passType = i8055[3]
  i8054.grabPassTextureName = i8055[4]
  i8054.usePass = !!i8055[5]
  i8054.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i8055[6], i8054.zTest)
  i8054.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i8055[7], i8054.zWrite)
  i8054.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i8055[8], i8054.culling)
  i8054.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i8055[9], i8054.blending)
  i8054.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i8055[10], i8054.alphaBlending)
  i8054.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i8055[11], i8054.colorWriteMask)
  i8054.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i8055[12], i8054.offsetUnits)
  i8054.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i8055[13], i8054.offsetFactor)
  i8054.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i8055[14], i8054.stencilRef)
  i8054.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i8055[15], i8054.stencilReadMask)
  i8054.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i8055[16], i8054.stencilWriteMask)
  i8054.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i8055[17], i8054.stencilOp)
  i8054.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i8055[18], i8054.stencilOpFront)
  i8054.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i8055[19], i8054.stencilOpBack)
  var i8057 = i8055[20]
  var i8056 = []
  for(var i = 0; i < i8057.length; i += 1) {
    i8056.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i8057[i + 0]) );
  }
  i8054.tags = i8056
  var i8059 = i8055[21]
  var i8058 = []
  for(var i = 0; i < i8059.length; i += 1) {
    i8058.push( i8059[i + 0] );
  }
  i8054.passDefinedKeywords = i8058
  var i8061 = i8055[22]
  var i8060 = []
  for(var i = 0; i < i8061.length; i += 1) {
    i8060.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i8061[i + 0]) );
  }
  i8054.passDefinedKeywordGroups = i8060
  var i8063 = i8055[23]
  var i8062 = []
  for(var i = 0; i < i8063.length; i += 1) {
    i8062.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i8063[i + 0]) );
  }
  i8054.variants = i8062
  var i8065 = i8055[24]
  var i8064 = []
  for(var i = 0; i < i8065.length; i += 1) {
    i8064.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i8065[i + 0]) );
  }
  i8054.excludedVariants = i8064
  i8054.hasDepthReader = !!i8055[25]
  return i8054
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i8066 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i8067 = data
  i8066.val = i8067[0]
  i8066.name = i8067[1]
  return i8066
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i8068 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i8069 = data
  i8068.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i8069[0], i8068.src)
  i8068.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i8069[1], i8068.dst)
  i8068.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i8069[2], i8068.op)
  return i8068
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i8070 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i8071 = data
  i8070.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i8071[0], i8070.pass)
  i8070.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i8071[1], i8070.fail)
  i8070.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i8071[2], i8070.zFail)
  i8070.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i8071[3], i8070.comp)
  return i8070
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i8074 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i8075 = data
  i8074.name = i8075[0]
  i8074.value = i8075[1]
  return i8074
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i8078 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i8079 = data
  var i8081 = i8079[0]
  var i8080 = []
  for(var i = 0; i < i8081.length; i += 1) {
    i8080.push( i8081[i + 0] );
  }
  i8078.keywords = i8080
  i8078.hasDiscard = !!i8079[1]
  return i8078
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i8084 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i8085 = data
  i8084.passId = i8085[0]
  i8084.subShaderIndex = i8085[1]
  var i8087 = i8085[2]
  var i8086 = []
  for(var i = 0; i < i8087.length; i += 1) {
    i8086.push( i8087[i + 0] );
  }
  i8084.keywords = i8086
  i8084.vertexProgram = i8085[3]
  i8084.fragmentProgram = i8085[4]
  i8084.exportedForWebGl2 = !!i8085[5]
  i8084.readDepth = !!i8085[6]
  return i8084
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i8090 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i8091 = data
  request.r(i8091[0], i8091[1], 0, i8090, 'shader')
  i8090.pass = i8091[2]
  return i8090
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i8094 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i8095 = data
  i8094.name = i8095[0]
  i8094.type = i8095[1]
  i8094.value = new pc.Vec4( i8095[2], i8095[3], i8095[4], i8095[5] )
  i8094.textureValue = i8095[6]
  i8094.shaderPropertyFlag = i8095[7]
  return i8094
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i8096 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i8097 = data
  i8096.name = i8097[0]
  request.r(i8097[1], i8097[2], 0, i8096, 'texture')
  i8096.aabb = i8097[3]
  i8096.vertices = i8097[4]
  i8096.triangles = i8097[5]
  i8096.textureRect = UnityEngine.Rect.MinMaxRect(i8097[6], i8097[7], i8097[8], i8097[9])
  i8096.packedRect = UnityEngine.Rect.MinMaxRect(i8097[10], i8097[11], i8097[12], i8097[13])
  i8096.border = new pc.Vec4( i8097[14], i8097[15], i8097[16], i8097[17] )
  i8096.transparency = i8097[18]
  i8096.bounds = i8097[19]
  i8096.pixelsPerUnit = i8097[20]
  i8096.textureWidth = i8097[21]
  i8096.textureHeight = i8097[22]
  i8096.nativeSize = new pc.Vec2( i8097[23], i8097[24] )
  i8096.pivot = new pc.Vec2( i8097[25], i8097[26] )
  i8096.textureRectOffset = new pc.Vec2( i8097[27], i8097[28] )
  return i8096
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i8098 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i8099 = data
  i8098.name = i8099[0]
  return i8098
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip"] = function (request, data, root) {
  var i8100 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip' )
  var i8101 = data
  i8100.name = i8101[0]
  i8100.wrapMode = i8101[1]
  i8100.isLooping = !!i8101[2]
  i8100.length = i8101[3]
  var i8103 = i8101[4]
  var i8102 = []
  for(var i = 0; i < i8103.length; i += 1) {
    i8102.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve', i8103[i + 0]) );
  }
  i8100.curves = i8102
  var i8105 = i8101[5]
  var i8104 = []
  for(var i = 0; i < i8105.length; i += 1) {
    i8104.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent', i8105[i + 0]) );
  }
  i8100.events = i8104
  i8100.halfPrecision = !!i8101[6]
  i8100._frameRate = i8101[7]
  i8100.localBounds = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds', i8101[8], i8100.localBounds)
  i8100.hasMuscleCurves = !!i8101[9]
  var i8107 = i8101[10]
  var i8106 = []
  for(var i = 0; i < i8107.length; i += 1) {
    i8106.push( i8107[i + 0] );
  }
  i8100.clipMuscleConstant = i8106
  i8100.clipBindingConstant = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant', i8101[11], i8100.clipBindingConstant)
  return i8100
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve"] = function (request, data, root) {
  var i8110 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve' )
  var i8111 = data
  i8110.path = i8111[0]
  i8110.hash = i8111[1]
  i8110.componentType = i8111[2]
  i8110.property = i8111[3]
  i8110.keys = i8111[4]
  var i8113 = i8111[5]
  var i8112 = []
  for(var i = 0; i < i8113.length; i += 1) {
    i8112.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey', i8113[i + 0]) );
  }
  i8110.objectReferenceKeys = i8112
  return i8110
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey"] = function (request, data, root) {
  var i8116 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey' )
  var i8117 = data
  i8116.time = i8117[0]
  request.r(i8117[1], i8117[2], 0, i8116, 'value')
  return i8116
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent"] = function (request, data, root) {
  var i8120 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent' )
  var i8121 = data
  i8120.functionName = i8121[0]
  i8120.floatParameter = i8121[1]
  i8120.intParameter = i8121[2]
  i8120.stringParameter = i8121[3]
  request.r(i8121[4], i8121[5], 0, i8120, 'objectReferenceParameter')
  i8120.time = i8121[6]
  return i8120
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds"] = function (request, data, root) {
  var i8122 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds' )
  var i8123 = data
  i8122.center = new pc.Vec3( i8123[0], i8123[1], i8123[2] )
  i8122.extends = new pc.Vec3( i8123[3], i8123[4], i8123[5] )
  return i8122
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant"] = function (request, data, root) {
  var i8126 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant' )
  var i8127 = data
  var i8129 = i8127[0]
  var i8128 = []
  for(var i = 0; i < i8129.length; i += 1) {
    i8128.push( i8129[i + 0] );
  }
  i8126.genericBindings = i8128
  var i8131 = i8127[1]
  var i8130 = []
  for(var i = 0; i < i8131.length; i += 1) {
    i8130.push( i8131[i + 0] );
  }
  i8126.pptrCurveMapping = i8130
  return i8126
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i8132 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i8133 = data
  i8132.name = i8133[0]
  i8132.ascent = i8133[1]
  i8132.originalLineHeight = i8133[2]
  i8132.fontSize = i8133[3]
  var i8135 = i8133[4]
  var i8134 = []
  for(var i = 0; i < i8135.length; i += 1) {
    i8134.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i8135[i + 0]) );
  }
  i8132.characterInfo = i8134
  request.r(i8133[5], i8133[6], 0, i8132, 'texture')
  i8132.originalFontSize = i8133[7]
  return i8132
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i8138 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i8139 = data
  i8138.index = i8139[0]
  i8138.advance = i8139[1]
  i8138.bearing = i8139[2]
  i8138.glyphWidth = i8139[3]
  i8138.glyphHeight = i8139[4]
  i8138.minX = i8139[5]
  i8138.maxX = i8139[6]
  i8138.minY = i8139[7]
  i8138.maxY = i8139[8]
  i8138.uvBottomLeftX = i8139[9]
  i8138.uvBottomLeftY = i8139[10]
  i8138.uvBottomRightX = i8139[11]
  i8138.uvBottomRightY = i8139[12]
  i8138.uvTopLeftX = i8139[13]
  i8138.uvTopLeftY = i8139[14]
  i8138.uvTopRightX = i8139[15]
  i8138.uvTopRightY = i8139[16]
  return i8138
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController"] = function (request, data, root) {
  var i8140 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController' )
  var i8141 = data
  i8140.name = i8141[0]
  var i8143 = i8141[1]
  var i8142 = []
  for(var i = 0; i < i8143.length; i += 1) {
    i8142.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer', i8143[i + 0]) );
  }
  i8140.layers = i8142
  var i8145 = i8141[2]
  var i8144 = []
  for(var i = 0; i < i8145.length; i += 1) {
    i8144.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter', i8145[i + 0]) );
  }
  i8140.parameters = i8144
  i8140.animationClips = i8141[3]
  i8140.avatarUnsupported = i8141[4]
  return i8140
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer"] = function (request, data, root) {
  var i8148 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer' )
  var i8149 = data
  i8148.name = i8149[0]
  i8148.defaultWeight = i8149[1]
  i8148.blendingMode = i8149[2]
  i8148.avatarMask = i8149[3]
  i8148.syncedLayerIndex = i8149[4]
  i8148.syncedLayerAffectsTiming = !!i8149[5]
  i8148.syncedLayers = i8149[6]
  i8148.stateMachine = request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i8149[7], i8148.stateMachine)
  return i8148
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine"] = function (request, data, root) {
  var i8150 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine' )
  var i8151 = data
  i8150.id = i8151[0]
  i8150.name = i8151[1]
  i8150.path = i8151[2]
  var i8153 = i8151[3]
  var i8152 = []
  for(var i = 0; i < i8153.length; i += 1) {
    i8152.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState', i8153[i + 0]) );
  }
  i8150.states = i8152
  var i8155 = i8151[4]
  var i8154 = []
  for(var i = 0; i < i8155.length; i += 1) {
    i8154.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i8155[i + 0]) );
  }
  i8150.machines = i8154
  var i8157 = i8151[5]
  var i8156 = []
  for(var i = 0; i < i8157.length; i += 1) {
    i8156.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i8157[i + 0]) );
  }
  i8150.entryStateTransitions = i8156
  var i8159 = i8151[6]
  var i8158 = []
  for(var i = 0; i < i8159.length; i += 1) {
    i8158.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i8159[i + 0]) );
  }
  i8150.exitStateTransitions = i8158
  var i8161 = i8151[7]
  var i8160 = []
  for(var i = 0; i < i8161.length; i += 1) {
    i8160.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i8161[i + 0]) );
  }
  i8150.anyStateTransitions = i8160
  i8150.defaultStateId = i8151[8]
  return i8150
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState"] = function (request, data, root) {
  var i8164 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState' )
  var i8165 = data
  i8164.id = i8165[0]
  i8164.name = i8165[1]
  i8164.cycleOffset = i8165[2]
  i8164.cycleOffsetParameter = i8165[3]
  i8164.cycleOffsetParameterActive = !!i8165[4]
  i8164.mirror = !!i8165[5]
  i8164.mirrorParameter = i8165[6]
  i8164.mirrorParameterActive = !!i8165[7]
  i8164.motionId = i8165[8]
  i8164.nameHash = i8165[9]
  i8164.fullPathHash = i8165[10]
  i8164.speed = i8165[11]
  i8164.speedParameter = i8165[12]
  i8164.speedParameterActive = !!i8165[13]
  i8164.tag = i8165[14]
  i8164.tagHash = i8165[15]
  i8164.writeDefaultValues = !!i8165[16]
  var i8167 = i8165[17]
  var i8166 = []
  for(var i = 0; i < i8167.length; i += 2) {
  request.r(i8167[i + 0], i8167[i + 1], 2, i8166, '')
  }
  i8164.behaviours = i8166
  var i8169 = i8165[18]
  var i8168 = []
  for(var i = 0; i < i8169.length; i += 1) {
    i8168.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i8169[i + 0]) );
  }
  i8164.transitions = i8168
  return i8164
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition"] = function (request, data, root) {
  var i8174 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition' )
  var i8175 = data
  i8174.fullPath = i8175[0]
  i8174.canTransitionToSelf = !!i8175[1]
  i8174.duration = i8175[2]
  i8174.exitTime = i8175[3]
  i8174.hasExitTime = !!i8175[4]
  i8174.hasFixedDuration = !!i8175[5]
  i8174.interruptionSource = i8175[6]
  i8174.offset = i8175[7]
  i8174.orderedInterruption = !!i8175[8]
  i8174.destinationStateId = i8175[9]
  i8174.isExit = !!i8175[10]
  i8174.mute = !!i8175[11]
  i8174.solo = !!i8175[12]
  var i8177 = i8175[13]
  var i8176 = []
  for(var i = 0; i < i8177.length; i += 1) {
    i8176.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i8177[i + 0]) );
  }
  i8174.conditions = i8176
  return i8174
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition"] = function (request, data, root) {
  var i8182 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition' )
  var i8183 = data
  i8182.destinationStateId = i8183[0]
  i8182.isExit = !!i8183[1]
  i8182.mute = !!i8183[2]
  i8182.solo = !!i8183[3]
  var i8185 = i8183[4]
  var i8184 = []
  for(var i = 0; i < i8185.length; i += 1) {
    i8184.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i8185[i + 0]) );
  }
  i8182.conditions = i8184
  return i8182
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition"] = function (request, data, root) {
  var i8188 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition' )
  var i8189 = data
  i8188.mode = i8189[0]
  i8188.parameter = i8189[1]
  i8188.threshold = i8189[2]
  return i8188
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter"] = function (request, data, root) {
  var i8192 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter' )
  var i8193 = data
  i8192.defaultBool = !!i8193[0]
  i8192.defaultFloat = i8193[1]
  i8192.defaultInt = i8193[2]
  i8192.name = i8193[3]
  i8192.nameHash = i8193[4]
  i8192.type = i8193[5]
  return i8192
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i8194 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i8195 = data
  i8194.useSafeMode = !!i8195[0]
  i8194.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i8195[1], i8194.safeModeOptions)
  i8194.timeScale = i8195[2]
  i8194.unscaledTimeScale = i8195[3]
  i8194.useSmoothDeltaTime = !!i8195[4]
  i8194.maxSmoothUnscaledTime = i8195[5]
  i8194.rewindCallbackMode = i8195[6]
  i8194.showUnityEditorReport = !!i8195[7]
  i8194.logBehaviour = i8195[8]
  i8194.drawGizmos = !!i8195[9]
  i8194.defaultRecyclable = !!i8195[10]
  i8194.defaultAutoPlay = i8195[11]
  i8194.defaultUpdateType = i8195[12]
  i8194.defaultTimeScaleIndependent = !!i8195[13]
  i8194.defaultEaseType = i8195[14]
  i8194.defaultEaseOvershootOrAmplitude = i8195[15]
  i8194.defaultEasePeriod = i8195[16]
  i8194.defaultAutoKill = !!i8195[17]
  i8194.defaultLoopType = i8195[18]
  i8194.debugMode = !!i8195[19]
  i8194.debugStoreTargetId = !!i8195[20]
  i8194.showPreviewPanel = !!i8195[21]
  i8194.storeSettingsLocation = i8195[22]
  i8194.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i8195[23], i8194.modules)
  i8194.createASMDEF = !!i8195[24]
  i8194.showPlayingTweens = !!i8195[25]
  i8194.showPausedTweens = !!i8195[26]
  return i8194
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i8196 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i8197 = data
  i8196.logBehaviour = i8197[0]
  i8196.nestedTweenFailureBehaviour = i8197[1]
  return i8196
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i8198 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i8199 = data
  i8198.showPanel = !!i8199[0]
  i8198.audioEnabled = !!i8199[1]
  i8198.physicsEnabled = !!i8199[2]
  i8198.physics2DEnabled = !!i8199[3]
  i8198.spriteEnabled = !!i8199[4]
  i8198.uiEnabled = !!i8199[5]
  i8198.textMeshProEnabled = !!i8199[6]
  i8198.tk2DEnabled = !!i8199[7]
  i8198.deAudioEnabled = !!i8199[8]
  i8198.deUnityExtendedEnabled = !!i8199[9]
  i8198.epoOutlineEnabled = !!i8199[10]
  return i8198
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i8200 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i8201 = data
  var i8203 = i8201[0]
  var i8202 = []
  for(var i = 0; i < i8203.length; i += 1) {
    i8202.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i8203[i + 0]) );
  }
  i8200.files = i8202
  i8200.componentToPrefabIds = i8201[1]
  return i8200
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i8206 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i8207 = data
  i8206.path = i8207[0]
  request.r(i8207[1], i8207[2], 0, i8206, 'unityObject')
  return i8206
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i8208 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i8209 = data
  var i8211 = i8209[0]
  var i8210 = []
  for(var i = 0; i < i8211.length; i += 1) {
    i8210.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i8211[i + 0]) );
  }
  i8208.scriptsExecutionOrder = i8210
  var i8213 = i8209[1]
  var i8212 = []
  for(var i = 0; i < i8213.length; i += 1) {
    i8212.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i8213[i + 0]) );
  }
  i8208.sortingLayers = i8212
  var i8215 = i8209[2]
  var i8214 = []
  for(var i = 0; i < i8215.length; i += 1) {
    i8214.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i8215[i + 0]) );
  }
  i8208.cullingLayers = i8214
  i8208.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i8209[3], i8208.timeSettings)
  i8208.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i8209[4], i8208.physicsSettings)
  i8208.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i8209[5], i8208.physics2DSettings)
  i8208.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i8209[6], i8208.qualitySettings)
  i8208.enableRealtimeShadows = !!i8209[7]
  i8208.enableAutoInstancing = !!i8209[8]
  i8208.enableStaticBatching = !!i8209[9]
  i8208.enableDynamicBatching = !!i8209[10]
  i8208.usePreservativeDynamicBatching = !!i8209[11]
  i8208.lightmapEncodingQuality = i8209[12]
  i8208.desiredColorSpace = i8209[13]
  var i8217 = i8209[14]
  var i8216 = []
  for(var i = 0; i < i8217.length; i += 1) {
    i8216.push( i8217[i + 0] );
  }
  i8208.allTags = i8216
  return i8208
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i8220 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i8221 = data
  i8220.name = i8221[0]
  i8220.value = i8221[1]
  return i8220
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i8224 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i8225 = data
  i8224.id = i8225[0]
  i8224.name = i8225[1]
  i8224.value = i8225[2]
  return i8224
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i8228 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i8229 = data
  i8228.id = i8229[0]
  i8228.name = i8229[1]
  return i8228
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i8230 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i8231 = data
  i8230.fixedDeltaTime = i8231[0]
  i8230.maximumDeltaTime = i8231[1]
  i8230.timeScale = i8231[2]
  i8230.maximumParticleTimestep = i8231[3]
  return i8230
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i8232 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i8233 = data
  i8232.gravity = new pc.Vec3( i8233[0], i8233[1], i8233[2] )
  i8232.defaultSolverIterations = i8233[3]
  i8232.bounceThreshold = i8233[4]
  i8232.autoSyncTransforms = !!i8233[5]
  i8232.autoSimulation = !!i8233[6]
  var i8235 = i8233[7]
  var i8234 = []
  for(var i = 0; i < i8235.length; i += 1) {
    i8234.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i8235[i + 0]) );
  }
  i8232.collisionMatrix = i8234
  return i8232
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i8238 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i8239 = data
  i8238.enabled = !!i8239[0]
  i8238.layerId = i8239[1]
  i8238.otherLayerId = i8239[2]
  return i8238
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i8240 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i8241 = data
  request.r(i8241[0], i8241[1], 0, i8240, 'material')
  i8240.gravity = new pc.Vec2( i8241[2], i8241[3] )
  i8240.positionIterations = i8241[4]
  i8240.velocityIterations = i8241[5]
  i8240.velocityThreshold = i8241[6]
  i8240.maxLinearCorrection = i8241[7]
  i8240.maxAngularCorrection = i8241[8]
  i8240.maxTranslationSpeed = i8241[9]
  i8240.maxRotationSpeed = i8241[10]
  i8240.baumgarteScale = i8241[11]
  i8240.baumgarteTOIScale = i8241[12]
  i8240.timeToSleep = i8241[13]
  i8240.linearSleepTolerance = i8241[14]
  i8240.angularSleepTolerance = i8241[15]
  i8240.defaultContactOffset = i8241[16]
  i8240.autoSimulation = !!i8241[17]
  i8240.queriesHitTriggers = !!i8241[18]
  i8240.queriesStartInColliders = !!i8241[19]
  i8240.callbacksOnDisable = !!i8241[20]
  i8240.reuseCollisionCallbacks = !!i8241[21]
  i8240.autoSyncTransforms = !!i8241[22]
  var i8243 = i8241[23]
  var i8242 = []
  for(var i = 0; i < i8243.length; i += 1) {
    i8242.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i8243[i + 0]) );
  }
  i8240.collisionMatrix = i8242
  return i8240
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i8246 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i8247 = data
  i8246.enabled = !!i8247[0]
  i8246.layerId = i8247[1]
  i8246.otherLayerId = i8247[2]
  return i8246
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i8248 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i8249 = data
  var i8251 = i8249[0]
  var i8250 = []
  for(var i = 0; i < i8251.length; i += 1) {
    i8250.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i8251[i + 0]) );
  }
  i8248.qualityLevels = i8250
  var i8253 = i8249[1]
  var i8252 = []
  for(var i = 0; i < i8253.length; i += 1) {
    i8252.push( i8253[i + 0] );
  }
  i8248.names = i8252
  i8248.shadows = i8249[2]
  i8248.anisotropicFiltering = i8249[3]
  i8248.antiAliasing = i8249[4]
  i8248.lodBias = i8249[5]
  i8248.shadowCascades = i8249[6]
  i8248.shadowDistance = i8249[7]
  i8248.shadowmaskMode = i8249[8]
  i8248.shadowProjection = i8249[9]
  i8248.shadowResolution = i8249[10]
  i8248.softParticles = !!i8249[11]
  i8248.softVegetation = !!i8249[12]
  i8248.activeColorSpace = i8249[13]
  i8248.desiredColorSpace = i8249[14]
  i8248.masterTextureLimit = i8249[15]
  i8248.maxQueuedFrames = i8249[16]
  i8248.particleRaycastBudget = i8249[17]
  i8248.pixelLightCount = i8249[18]
  i8248.realtimeReflectionProbes = !!i8249[19]
  i8248.shadowCascade2Split = i8249[20]
  i8248.shadowCascade4Split = new pc.Vec3( i8249[21], i8249[22], i8249[23] )
  i8248.streamingMipmapsActive = !!i8249[24]
  i8248.vSyncCount = i8249[25]
  i8248.asyncUploadBufferSize = i8249[26]
  i8248.asyncUploadTimeSlice = i8249[27]
  i8248.billboardsFaceCameraPosition = !!i8249[28]
  i8248.shadowNearPlaneOffset = i8249[29]
  i8248.streamingMipmapsMemoryBudget = i8249[30]
  i8248.maximumLODLevel = i8249[31]
  i8248.streamingMipmapsAddAllCameras = !!i8249[32]
  i8248.streamingMipmapsMaxLevelReduction = i8249[33]
  i8248.streamingMipmapsRenderersPerFrame = i8249[34]
  i8248.resolutionScalingFixedDPIFactor = i8249[35]
  i8248.streamingMipmapsMaxFileIORequests = i8249[36]
  i8248.currentQualityLevel = i8249[37]
  return i8248
}

Deserializers["Luna.Unity.DTO.UnityEngine.Audio.AudioMixer"] = function (request, data, root) {
  var i8256 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Audio.AudioMixer' )
  var i8257 = data
  var i8259 = i8257[0]
  var i8258 = []
  for(var i = 0; i < i8259.length; i += 1) {
    i8258.push( request.d('Luna.Unity.DTO.UnityEngine.Audio.AudioMixerGroup', i8259[i + 0]) );
  }
  i8256.groups = i8258
  var i8261 = i8257[1]
  var i8260 = []
  for(var i = 0; i < i8261.length; i += 1) {
    i8260.push( request.d('Luna.Unity.DTO.UnityEngine.Audio.AudioMixerSnapshot', i8261[i + 0]) );
  }
  i8256.snapshots = i8260
  return i8256
}

Deserializers["Luna.Unity.DTO.UnityEngine.Audio.AudioMixerGroup"] = function (request, data, root) {
  var i8264 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Audio.AudioMixerGroup' )
  var i8265 = data
  i8264.id = i8265[0]
  i8264.childGroupIds = i8265[1]
  i8264.name = i8265[2]
  return i8264
}

Deserializers["Luna.Unity.DTO.UnityEngine.Audio.AudioMixerSnapshot"] = function (request, data, root) {
  var i8268 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Audio.AudioMixerSnapshot' )
  var i8269 = data
  i8268.id = i8269[0]
  var i8271 = i8269[1]
  var i8270 = []
  for(var i = 0; i < i8271.length; i += 1) {
    i8270.push( request.d('Luna.Unity.DTO.UnityEngine.Audio.AudioMixerSnapshot+Parameter', i8271[i + 0]) );
  }
  i8268.parameters = i8270
  return i8268
}

Deserializers["Luna.Unity.DTO.UnityEngine.Audio.AudioMixerSnapshot+Parameter"] = function (request, data, root) {
  var i8274 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Audio.AudioMixerSnapshot+Parameter' )
  var i8275 = data
  i8274.name = i8275[0]
  i8274.value = i8275[1]
  return i8274
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame"] = function (request, data, root) {
  var i8278 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame' )
  var i8279 = data
  i8278.weight = i8279[0]
  i8278.vertices = i8279[1]
  i8278.normals = i8279[2]
  i8278.tangents = i8279[3]
  return i8278
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Assets.Mesh":{"name":0,"halfPrecision":1,"useSimplification":2,"useUInt32IndexFormat":3,"vertexCount":4,"aabb":5,"streams":6,"vertices":7,"subMeshes":8,"bindposes":9,"blendShapes":10},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh":{"triangles":0},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape":{"name":0,"frames":1},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystem":{"main":0,"colorBySpeed":1,"colorOverLifetime":2,"emission":3,"rotationBySpeed":4,"rotationOverLifetime":5,"shape":6,"sizeBySpeed":7,"sizeOverLifetime":8,"textureSheetAnimation":9,"velocityOverLifetime":10,"noise":11,"inheritVelocity":12,"forceOverLifetime":13,"limitVelocityOverLifetime":14,"useAutoRandomSeed":15,"randomSeed":16},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule":{"duration":0,"loop":1,"prewarm":2,"startDelay":3,"startLifetime":4,"startSpeed":5,"startSize3D":6,"startSizeX":7,"startSizeY":8,"startSizeZ":9,"startRotation3D":10,"startRotationX":11,"startRotationY":12,"startRotationZ":13,"startColor":14,"gravityModifier":15,"simulationSpace":16,"customSimulationSpace":17,"simulationSpeed":19,"useUnscaledTime":20,"scalingMode":21,"playOnAwake":22,"maxParticles":23,"emitterVelocityMode":24,"stopAction":25},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve":{"mode":0,"curveMin":1,"curveMax":2,"curveMultiplier":3,"constantMin":4,"constantMax":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient":{"mode":0,"gradientMin":1,"gradientMax":2,"colorMin":3,"colorMax":7},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient":{"mode":0,"colorKeys":1,"alphaKeys":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule":{"enabled":0,"color":1,"range":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey":{"color":0,"time":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey":{"alpha":0,"time":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule":{"enabled":0,"color":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule":{"enabled":0,"rateOverTime":1,"rateOverDistance":2,"bursts":3},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst":{"count":0,"cycleCount":1,"minCount":2,"maxCount":3,"repeatInterval":4,"time":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule":{"enabled":0,"shapeType":1,"randomDirectionAmount":2,"sphericalDirectionAmount":3,"randomPositionAmount":4,"alignToDirection":5,"radius":6,"radiusMode":7,"radiusSpread":8,"radiusSpeed":9,"radiusThickness":10,"angle":11,"length":12,"boxThickness":13,"meshShapeType":16,"mesh":17,"meshRenderer":19,"skinnedMeshRenderer":21,"useMeshMaterialIndex":23,"meshMaterialIndex":24,"useMeshColors":25,"normalOffset":26,"arc":27,"arcMode":28,"arcSpread":29,"arcSpeed":30,"donutRadius":31,"position":32,"rotation":35,"scale":38},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule":{"enabled":0,"mode":1,"animation":2,"numTilesX":3,"numTilesY":4,"useRandomRow":5,"frameOverTime":6,"startFrame":7,"cycleCount":8,"rowIndex":9,"flipU":10,"flipV":11,"spriteCount":12,"sprites":13},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"radial":4,"speedModifier":5,"space":6,"orbitalX":7,"orbitalY":8,"orbitalZ":9,"orbitalOffsetX":10,"orbitalOffsetY":11,"orbitalOffsetZ":12},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule":{"enabled":0,"separateAxes":1,"strengthX":2,"strengthY":3,"strengthZ":4,"frequency":5,"damping":6,"octaveCount":7,"octaveMultiplier":8,"octaveScale":9,"quality":10,"scrollSpeed":11,"scrollSpeedMultiplier":12,"remapEnabled":13,"remapX":14,"remapY":15,"remapZ":16,"positionAmount":17,"rotationAmount":18,"sizeAmount":19},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule":{"enabled":0,"mode":1,"curve":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"space":4,"randomized":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule":{"enabled":0,"limit":1,"limitX":2,"limitY":3,"limitZ":4,"dampen":5,"separateAxes":6,"space":7,"drag":8,"multiplyDragByParticleSize":9,"multiplyDragByParticleVelocity":10},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer":{"mesh":0,"meshCount":2,"activeVertexStreamsCount":3,"alignment":4,"renderMode":5,"sortMode":6,"lengthScale":7,"velocityScale":8,"cameraVelocityScale":9,"normalDirection":10,"sortingFudge":11,"minParticleSize":12,"maxParticleSize":13,"pivot":14,"trailMaterial":17,"applyActiveColorSpace":19,"enabled":20,"sharedMaterial":21,"sharedMaterials":23,"receiveShadows":24,"shadowCastingMode":25,"sortingLayerID":26,"sortingOrder":27,"lightmapIndex":28,"lightmapSceneIndex":29,"lightmapScaleOffset":30,"lightProbeUsage":34,"reflectionProbeUsage":35},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"planeDistance":0,"referencePixelsPerUnit":1,"isFallbackOverlay":2,"renderMode":3,"renderOrder":4,"sortingLayerName":5,"sortingOrder":6,"scaleFactor":7,"worldCamera":8,"overrideSorting":10,"pixelPerfect":11,"targetDisplay":12,"overridePixelPerfect":13,"enabled":14},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Components.Animator":{"animatorController":0,"avatar":2,"updateMode":4,"hasTransformHierarchy":5,"applyRootMotion":6,"humanBones":7,"enabled":8},"Luna.Unity.DTO.UnityEngine.Components.LineRenderer":{"textureMode":0,"alignment":1,"widthCurve":2,"colorGradient":3,"positions":4,"positionCount":5,"widthMultiplier":6,"startWidth":7,"endWidth":8,"numCornerVertices":9,"numCapVertices":10,"useWorldSpace":11,"loop":12,"startColor":13,"endColor":17,"generateLightingData":21,"enabled":22,"sharedMaterial":23,"sharedMaterials":25,"receiveShadows":26,"shadowCastingMode":27,"sortingLayerID":28,"sortingOrder":29,"lightmapIndex":30,"lightmapSceneIndex":31,"lightmapScaleOffset":32,"lightProbeUsage":36,"reflectionProbeUsage":37},"Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer":{"color":0,"sprite":4,"flipX":6,"flipY":7,"drawMode":8,"size":9,"tileMode":11,"adaptiveModeThreshold":12,"maskInteraction":13,"spriteSortPoint":14,"enabled":15,"sharedMaterial":16,"sharedMaterials":18,"receiveShadows":19,"shadowCastingMode":20,"sortingLayerID":21,"sortingOrder":22,"lightmapIndex":23,"lightmapSceneIndex":24,"lightmapScaleOffset":25,"lightProbeUsage":29,"reflectionProbeUsage":30},"Luna.Unity.DTO.UnityEngine.Components.TrailRenderer":{"positions":0,"positionCount":1,"time":2,"startWidth":3,"endWidth":4,"widthMultiplier":5,"autodestruct":6,"emitting":7,"numCornerVertices":8,"numCapVertices":9,"minVertexDistance":10,"colorGradient":11,"startColor":12,"endColor":16,"generateLightingData":20,"textureMode":21,"alignment":22,"widthCurve":23,"enabled":24,"sharedMaterial":25,"sharedMaterials":27,"receiveShadows":28,"shadowCastingMode":29,"sortingLayerID":30,"sortingOrder":31,"lightmapIndex":32,"lightmapSceneIndex":33,"lightmapScaleOffset":34,"lightProbeUsage":38,"reflectionProbeUsage":39},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D":{"usedByComposite":0,"autoTiling":1,"size":2,"edgeRadius":4,"enabled":5,"isTrigger":6,"usedByEffector":7,"density":8,"offset":9,"material":11},"Luna.Unity.DTO.UnityEngine.Components.SpriteMask":{"frontSortingLayerID":0,"frontSortingOrder":1,"backSortingLayerID":2,"backSortingOrder":3,"alphaCutoff":4,"sprite":5,"tileMode":7,"isCustomRangeActive":8,"spriteSortPoint":9,"enabled":10,"sharedMaterial":11,"sharedMaterials":13,"receiveShadows":14,"shadowCastingMode":15,"sortingLayerID":16,"sortingOrder":17,"lightmapIndex":18,"lightmapSceneIndex":19,"lightmapScaleOffset":20,"lightProbeUsage":24,"reflectionProbeUsage":25},"Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D":{"bodyType":0,"material":1,"simulated":3,"useAutoMass":4,"mass":5,"drag":6,"angularDrag":7,"gravityScale":8,"collisionDetectionMode":9,"sleepMode":10,"constraints":11},"Luna.Unity.DTO.UnityEngine.Components.CircleCollider2D":{"radius":0,"enabled":1,"isTrigger":2,"usedByEffector":3,"density":4,"offset":5,"material":7},"Luna.Unity.DTO.UnityEngine.Components.PolygonCollider2D":{"usedByComposite":0,"autoTiling":1,"points":2,"enabled":3,"isTrigger":4,"usedByEffector":5,"density":6,"offset":7,"material":9},"Luna.Unity.DTO.UnityEngine.Components.AudioSource":{"clip":0,"outputAudioMixerGroup":2,"playOnAwake":4,"loop":5,"time":6,"volume":7,"pitch":8,"enabled":9},"Luna.Unity.DTO.UnityEngine.Components.MeshFilter":{"sharedMesh":0},"Luna.Unity.DTO.UnityEngine.Components.MeshRenderer":{"additionalVertexStreams":0,"enabled":2,"sharedMaterial":3,"sharedMaterials":5,"receiveShadows":6,"shadowCastingMode":7,"sortingLayerID":8,"sortingOrder":9,"lightmapIndex":10,"lightmapSceneIndex":11,"lightmapScaleOffset":12,"lightProbeUsage":16,"reflectionProbeUsage":17},"Luna.Unity.DTO.UnityEngine.Textures.Cubemap":{"name":0,"atlasId":1,"mipmapCount":2,"hdr":3,"size":4,"anisoLevel":5,"filterMode":6,"rects":7,"wrapU":8,"wrapV":9},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"aspect":0,"orthographic":1,"orthographicSize":2,"backgroundColor":3,"nearClipPlane":7,"farClipPlane":8,"fieldOfView":9,"depth":10,"clearFlags":11,"cullingMask":12,"rect":13,"targetTexture":14,"usePhysicalProperties":16,"focalLength":17,"sensorSize":18,"lensShift":20,"gateFit":22,"commandBufferCount":23,"cameraType":24,"enabled":25},"Luna.Unity.DTO.UnityEngine.Components.CanvasGroup":{"m_Alpha":0,"m_Interactable":1,"m_BlocksRaycasts":2,"m_IgnoreParentGroups":3,"enabled":4},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"customReflection":36,"defaultReflection":38,"defaultReflectionMode":40,"defaultReflectionResolution":41,"sunLightObjectId":42,"pixelLightCount":43,"defaultReflectionHDR":44,"hasLightDataAsset":45,"hasManualGenerate":46},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2,"shadowMask":4},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"hasDepthOnlyPass":10,"isCreatedByShaderGraph":11,"disableBatching":12,"compiled":13},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip":{"name":0,"wrapMode":1,"isLooping":2,"length":3,"curves":4,"events":5,"halfPrecision":6,"_frameRate":7,"localBounds":8,"hasMuscleCurves":9,"clipMuscleConstant":10,"clipBindingConstant":11},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve":{"path":0,"hash":1,"componentType":2,"property":3,"keys":4,"objectReferenceKeys":5},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey":{"time":0,"value":1},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent":{"functionName":0,"floatParameter":1,"intParameter":2,"stringParameter":3,"objectReferenceParameter":4,"time":6},"Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds":{"center":0,"extends":3},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant":{"genericBindings":0,"pptrCurveMapping":1},"Luna.Unity.DTO.UnityEngine.Assets.Font":{"name":0,"ascent":1,"originalLineHeight":2,"fontSize":3,"characterInfo":4,"texture":5,"originalFontSize":7},"Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo":{"index":0,"advance":1,"bearing":2,"glyphWidth":3,"glyphHeight":4,"minX":5,"maxX":6,"minY":7,"maxY":8,"uvBottomLeftX":9,"uvBottomLeftY":10,"uvBottomRightX":11,"uvBottomRightY":12,"uvTopLeftX":13,"uvTopLeftY":14,"uvTopRightX":15,"uvTopRightY":16},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController":{"name":0,"layers":1,"parameters":2,"animationClips":3,"avatarUnsupported":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer":{"name":0,"defaultWeight":1,"blendingMode":2,"avatarMask":3,"syncedLayerIndex":4,"syncedLayerAffectsTiming":5,"syncedLayers":6,"stateMachine":7},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine":{"id":0,"name":1,"path":2,"states":3,"machines":4,"entryStateTransitions":5,"exitStateTransitions":6,"anyStateTransitions":7,"defaultStateId":8},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState":{"id":0,"name":1,"cycleOffset":2,"cycleOffsetParameter":3,"cycleOffsetParameterActive":4,"mirror":5,"mirrorParameter":6,"mirrorParameterActive":7,"motionId":8,"nameHash":9,"fullPathHash":10,"speed":11,"speedParameter":12,"speedParameterActive":13,"tag":14,"tagHash":15,"writeDefaultValues":16,"behaviours":17,"transitions":18},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition":{"fullPath":0,"canTransitionToSelf":1,"duration":2,"exitTime":3,"hasExitTime":4,"hasFixedDuration":5,"interruptionSource":6,"offset":7,"orderedInterruption":8,"destinationStateId":9,"isExit":10,"mute":11,"solo":12,"conditions":13},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition":{"destinationStateId":0,"isExit":1,"mute":2,"solo":3,"conditions":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition":{"mode":0,"parameter":1,"threshold":2},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter":{"defaultBool":0,"defaultFloat":1,"defaultInt":2,"name":3,"nameHash":4,"type":5},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableStaticBatching":9,"enableDynamicBatching":10,"usePreservativeDynamicBatching":11,"lightmapEncodingQuality":12,"desiredColorSpace":13,"allTags":14},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37},"Luna.Unity.DTO.UnityEngine.Audio.AudioMixer":{"groups":0,"snapshots":1},"Luna.Unity.DTO.UnityEngine.Audio.AudioMixerGroup":{"id":0,"childGroupIds":1,"name":2},"Luna.Unity.DTO.UnityEngine.Audio.AudioMixerSnapshot":{"id":0,"parameters":1},"Luna.Unity.DTO.UnityEngine.Audio.AudioMixerSnapshot+Parameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame":{"weight":0,"vertices":1,"normals":2,"tangents":3}}

Deserializers.requiredComponents = {"82":[83],"84":[83],"85":[83],"86":[83],"87":[83],"88":[83],"89":[90],"91":[9],"92":[93],"94":[93],"95":[93],"96":[93],"97":[93],"98":[93],"99":[93],"100":[43],"101":[43],"102":[43],"103":[43],"104":[43],"105":[43],"106":[43],"107":[43],"108":[43],"109":[43],"110":[43],"111":[43],"112":[43],"113":[9],"114":[57],"115":[116],"117":[116],"8":[7],"118":[37],"54":[27],"119":[30],"120":[27],"121":[122],"123":[122],"124":[14],"64":[30],"125":[27],"40":[27],"126":[7],"127":[7],"12":[8],"16":[15,7],"128":[7],"11":[8],"129":[7],"130":[7],"131":[7],"132":[7],"133":[7],"134":[7],"135":[7],"136":[7],"137":[7],"138":[15,7],"139":[7],"140":[7],"141":[7],"142":[7],"18":[15,7],"143":[7],"144":[76],"145":[76],"77":[76],"146":[76],"147":[9],"148":[9]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Texture2D","UnityEngine.Transform","UnityEngine.ParticleSystem","UnityEngine.ParticleSystemRenderer","UnityEngine.Mesh","UnityEngine.Material","UnityEngine.RectTransform","UnityEngine.Canvas","UnityEngine.Camera","UnityEngine.EventSystems.UIBehaviour","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEngine.MonoBehaviour","DG.Tweening.DOTweenAnimation","UnityEngine.CanvasRenderer","UnityEngine.UI.Image","UnityEngine.Sprite","UnityEngine.UI.Text","UnityEngine.Font","UnityEngine.UI.Button","UnityEngine.Animator","UnityEditor.Animations.AnimatorController","PlayableCTA","Level1_Cloth_Playable","UnityEngine.GameObject","BasicDrag","UnityEngine.SpriteRenderer","BD_CameraFollow","Level1_SurfController","UnityEngine.BoxCollider2D","RotaryTimerKnob","UnityEngine.AudioClip","UnityEngine.AudioSource","ScratchCardAsset.ScratchCardManager","ScratchCardAsset.ScratchCard","ScratchCardAsset.EraseProgress","UnityEngine.LineRenderer","TextureOffsetScroller","UnityEngine.TrailRenderer","UnityEngine.U2D.Animation.SpriteSkin","UnityEngine.SpriteMask","BD_Clamp","UnityEngine.Rigidbody2D","PlaceItem","ActionOnTap","UnityEngine.CircleCollider2D","PlayParticlesOnCollision","UnityEngine.PolygonCollider2D","PlaySfxOnCollision","UnityEditor.Audio.AudioMixerGroupController","SewingCol","OutlinePulse","BD_Action","BD_Fold","BD_Progress","UnityEngine.MeshFilter","UnityEngine.MeshRenderer","StaticFixedPipe","BD_SpriteChange","MenuLevel","IntroLevelAnim","Level_PoseController","BD_AnimationHelper","SpriteButton","PlayableRouter","DressChangeIntro","MenuDraggable","UnityEngine.AudioListener","CameraController","MusicSource","UI_Manager","GameManagerPlayable","AudioController","UnityEditor.Audio.AudioMixerController","PlayableHudRuntime","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","ToastManager","UnityEngine.CanvasGroup","UnityEngine.Cubemap","DG.Tweening.Core.DOTweenSettings","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.ConstantForce","UnityEngine.Rigidbody","UnityEngine.Joint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.FixedJoint","UnityEngine.CharacterJoint","UnityEngine.ConfigurableJoint","UnityEngine.CompositeCollider2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","RopeController","BD_Sticky","Lvl3_DripAnimator","Lvl3_LipstickPicker","UnityEngine.Collider2D","Lvl3_PourFill","PlayTweenOnHit","RadialCircleFill","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.Mask","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Slider","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster"]

Deserializers.unityVersion = "2022.3.62f2";

Deserializers.productName = "Perfect Makeover Fashion ASMR";

Deserializers.lunaInitializationTime = "08/20/2026 07:41:52";

Deserializers.lunaDaysRunning = "13.2";

Deserializers.lunaVersion = "7.2.0";

Deserializers.lunaSHA = "ea08d29afe2968efcb8d91d5624f033c6485cc68";

Deserializers.creativeName = "2Sept2026_CompleteLevel_1_2_v4_Final";

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

Deserializers.runtimeAnalysisExcludedClassesCount = "1728";

Deserializers.runtimeAnalysisExcludedMethodsCount = "4370";

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

Deserializers.buildID = "3033f199-5433-4bd7-b491-9d0f5710bf6d";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[],[["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"]],[],[]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

