var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i8558 = root || request.c( 'UnityEngine.JointSpring' )
  var i8559 = data
  i8558.spring = i8559[0]
  i8558.damper = i8559[1]
  i8558.targetPosition = i8559[2]
  return i8558
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i8560 = root || request.c( 'UnityEngine.JointMotor' )
  var i8561 = data
  i8560.m_TargetVelocity = i8561[0]
  i8560.m_Force = i8561[1]
  i8560.m_FreeSpin = i8561[2]
  return i8560
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i8562 = root || request.c( 'UnityEngine.JointLimits' )
  var i8563 = data
  i8562.m_Min = i8563[0]
  i8562.m_Max = i8563[1]
  i8562.m_Bounciness = i8563[2]
  i8562.m_BounceMinVelocity = i8563[3]
  i8562.m_ContactDistance = i8563[4]
  i8562.minBounce = i8563[5]
  i8562.maxBounce = i8563[6]
  return i8562
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i8564 = root || request.c( 'UnityEngine.JointDrive' )
  var i8565 = data
  i8564.m_PositionSpring = i8565[0]
  i8564.m_PositionDamper = i8565[1]
  i8564.m_MaximumForce = i8565[2]
  i8564.m_UseAcceleration = i8565[3]
  return i8564
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i8566 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i8567 = data
  i8566.m_Spring = i8567[0]
  i8566.m_Damper = i8567[1]
  return i8566
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i8568 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i8569 = data
  i8568.m_Limit = i8569[0]
  i8568.m_Bounciness = i8569[1]
  i8568.m_ContactDistance = i8569[2]
  return i8568
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i8570 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i8571 = data
  i8570.m_ExtremumSlip = i8571[0]
  i8570.m_ExtremumValue = i8571[1]
  i8570.m_AsymptoteSlip = i8571[2]
  i8570.m_AsymptoteValue = i8571[3]
  i8570.m_Stiffness = i8571[4]
  return i8570
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i8572 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i8573 = data
  i8572.m_LowerAngle = i8573[0]
  i8572.m_UpperAngle = i8573[1]
  return i8572
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i8574 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i8575 = data
  i8574.m_MotorSpeed = i8575[0]
  i8574.m_MaximumMotorTorque = i8575[1]
  return i8574
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i8576 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i8577 = data
  i8576.m_DampingRatio = i8577[0]
  i8576.m_Frequency = i8577[1]
  i8576.m_Angle = i8577[2]
  return i8576
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i8578 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i8579 = data
  i8578.m_LowerTranslation = i8579[0]
  i8578.m_UpperTranslation = i8579[1]
  return i8578
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i8580 = root || new pc.UnityMaterial()
  var i8581 = data
  i8580.name = i8581[0]
  request.r(i8581[1], i8581[2], 0, i8580, 'shader')
  i8580.renderQueue = i8581[3]
  i8580.enableInstancing = !!i8581[4]
  var i8583 = i8581[5]
  var i8582 = []
  for(var i = 0; i < i8583.length; i += 1) {
    i8582.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i8583[i + 0]) );
  }
  i8580.floatParameters = i8582
  var i8585 = i8581[6]
  var i8584 = []
  for(var i = 0; i < i8585.length; i += 1) {
    i8584.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i8585[i + 0]) );
  }
  i8580.colorParameters = i8584
  var i8587 = i8581[7]
  var i8586 = []
  for(var i = 0; i < i8587.length; i += 1) {
    i8586.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i8587[i + 0]) );
  }
  i8580.vectorParameters = i8586
  var i8589 = i8581[8]
  var i8588 = []
  for(var i = 0; i < i8589.length; i += 1) {
    i8588.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i8589[i + 0]) );
  }
  i8580.textureParameters = i8588
  var i8591 = i8581[9]
  var i8590 = []
  for(var i = 0; i < i8591.length; i += 1) {
    i8590.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i8591[i + 0]) );
  }
  i8580.materialFlags = i8590
  return i8580
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i8594 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i8595 = data
  i8594.name = i8595[0]
  i8594.value = i8595[1]
  return i8594
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i8598 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i8599 = data
  i8598.name = i8599[0]
  i8598.value = new pc.Color(i8599[1], i8599[2], i8599[3], i8599[4])
  return i8598
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i8602 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i8603 = data
  i8602.name = i8603[0]
  i8602.value = new pc.Vec4( i8603[1], i8603[2], i8603[3], i8603[4] )
  return i8602
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i8606 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i8607 = data
  i8606.name = i8607[0]
  request.r(i8607[1], i8607[2], 0, i8606, 'value')
  return i8606
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i8610 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i8611 = data
  i8610.name = i8611[0]
  i8610.enabled = !!i8611[1]
  return i8610
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i8612 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i8613 = data
  i8612.name = i8613[0]
  i8612.width = i8613[1]
  i8612.height = i8613[2]
  i8612.mipmapCount = i8613[3]
  i8612.anisoLevel = i8613[4]
  i8612.filterMode = i8613[5]
  i8612.hdr = !!i8613[6]
  i8612.format = i8613[7]
  i8612.wrapMode = i8613[8]
  i8612.alphaIsTransparency = !!i8613[9]
  i8612.alphaSource = i8613[10]
  i8612.graphicsFormat = i8613[11]
  i8612.sRGBTexture = !!i8613[12]
  i8612.desiredColorSpace = i8613[13]
  i8612.wrapU = i8613[14]
  i8612.wrapV = i8613[15]
  return i8612
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh"] = function (request, data, root) {
  var i8614 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh' )
  var i8615 = data
  i8614.name = i8615[0]
  i8614.halfPrecision = !!i8615[1]
  i8614.useSimplification = !!i8615[2]
  i8614.useUInt32IndexFormat = !!i8615[3]
  i8614.vertexCount = i8615[4]
  i8614.aabb = i8615[5]
  var i8617 = i8615[6]
  var i8616 = []
  for(var i = 0; i < i8617.length; i += 1) {
    i8616.push( !!i8617[i + 0] );
  }
  i8614.streams = i8616
  i8614.vertices = i8615[7]
  var i8619 = i8615[8]
  var i8618 = []
  for(var i = 0; i < i8619.length; i += 1) {
    i8618.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh', i8619[i + 0]) );
  }
  i8614.subMeshes = i8618
  var i8621 = i8615[9]
  var i8620 = []
  for(var i = 0; i < i8621.length; i += 16) {
    i8620.push( new pc.Mat4().setData(i8621[i + 0], i8621[i + 1], i8621[i + 2], i8621[i + 3],  i8621[i + 4], i8621[i + 5], i8621[i + 6], i8621[i + 7],  i8621[i + 8], i8621[i + 9], i8621[i + 10], i8621[i + 11],  i8621[i + 12], i8621[i + 13], i8621[i + 14], i8621[i + 15]) );
  }
  i8614.bindposes = i8620
  var i8623 = i8615[10]
  var i8622 = []
  for(var i = 0; i < i8623.length; i += 1) {
    i8622.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape', i8623[i + 0]) );
  }
  i8614.blendShapes = i8622
  return i8614
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh"] = function (request, data, root) {
  var i8628 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh' )
  var i8629 = data
  i8628.triangles = i8629[0]
  return i8628
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape"] = function (request, data, root) {
  var i8634 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape' )
  var i8635 = data
  i8634.name = i8635[0]
  var i8637 = i8635[1]
  var i8636 = []
  for(var i = 0; i < i8637.length; i += 1) {
    i8636.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame', i8637[i + 0]) );
  }
  i8634.frames = i8636
  return i8634
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i8638 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i8639 = data
  i8638.position = new pc.Vec3( i8639[0], i8639[1], i8639[2] )
  i8638.scale = new pc.Vec3( i8639[3], i8639[4], i8639[5] )
  i8638.rotation = new pc.Quat(i8639[6], i8639[7], i8639[8], i8639[9])
  return i8638
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystem"] = function (request, data, root) {
  var i8640 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystem' )
  var i8641 = data
  i8640.main = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule', i8641[0], i8640.main)
  i8640.colorBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule', i8641[1], i8640.colorBySpeed)
  i8640.colorOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule', i8641[2], i8640.colorOverLifetime)
  i8640.emission = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule', i8641[3], i8640.emission)
  i8640.rotationBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule', i8641[4], i8640.rotationBySpeed)
  i8640.rotationOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule', i8641[5], i8640.rotationOverLifetime)
  i8640.shape = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule', i8641[6], i8640.shape)
  i8640.sizeBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule', i8641[7], i8640.sizeBySpeed)
  i8640.sizeOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule', i8641[8], i8640.sizeOverLifetime)
  i8640.textureSheetAnimation = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule', i8641[9], i8640.textureSheetAnimation)
  i8640.velocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule', i8641[10], i8640.velocityOverLifetime)
  i8640.noise = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule', i8641[11], i8640.noise)
  i8640.inheritVelocity = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule', i8641[12], i8640.inheritVelocity)
  i8640.forceOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule', i8641[13], i8640.forceOverLifetime)
  i8640.limitVelocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule', i8641[14], i8640.limitVelocityOverLifetime)
  i8640.useAutoRandomSeed = !!i8641[15]
  i8640.randomSeed = i8641[16]
  return i8640
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule"] = function (request, data, root) {
  var i8642 = root || new pc.ParticleSystemMain()
  var i8643 = data
  i8642.duration = i8643[0]
  i8642.loop = !!i8643[1]
  i8642.prewarm = !!i8643[2]
  i8642.startDelay = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i8643[3], i8642.startDelay)
  i8642.startLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i8643[4], i8642.startLifetime)
  i8642.startSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i8643[5], i8642.startSpeed)
  i8642.startSize3D = !!i8643[6]
  i8642.startSizeX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i8643[7], i8642.startSizeX)
  i8642.startSizeY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i8643[8], i8642.startSizeY)
  i8642.startSizeZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i8643[9], i8642.startSizeZ)
  i8642.startRotation3D = !!i8643[10]
  i8642.startRotationX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i8643[11], i8642.startRotationX)
  i8642.startRotationY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i8643[12], i8642.startRotationY)
  i8642.startRotationZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i8643[13], i8642.startRotationZ)
  i8642.startColor = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i8643[14], i8642.startColor)
  i8642.gravityModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i8643[15], i8642.gravityModifier)
  i8642.simulationSpace = i8643[16]
  request.r(i8643[17], i8643[18], 0, i8642, 'customSimulationSpace')
  i8642.simulationSpeed = i8643[19]
  i8642.useUnscaledTime = !!i8643[20]
  i8642.scalingMode = i8643[21]
  i8642.playOnAwake = !!i8643[22]
  i8642.maxParticles = i8643[23]
  i8642.emitterVelocityMode = i8643[24]
  i8642.stopAction = i8643[25]
  return i8642
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve"] = function (request, data, root) {
  var i8644 = root || new pc.MinMaxCurve()
  var i8645 = data
  i8644.mode = i8645[0]
  i8644.curveMin = new pc.AnimationCurve( { keys_flow: i8645[1] } )
  i8644.curveMax = new pc.AnimationCurve( { keys_flow: i8645[2] } )
  i8644.curveMultiplier = i8645[3]
  i8644.constantMin = i8645[4]
  i8644.constantMax = i8645[5]
  return i8644
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient"] = function (request, data, root) {
  var i8646 = root || new pc.MinMaxGradient()
  var i8647 = data
  i8646.mode = i8647[0]
  i8646.gradientMin = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i8647[1], i8646.gradientMin)
  i8646.gradientMax = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i8647[2], i8646.gradientMax)
  i8646.colorMin = new pc.Color(i8647[3], i8647[4], i8647[5], i8647[6])
  i8646.colorMax = new pc.Color(i8647[7], i8647[8], i8647[9], i8647[10])
  return i8646
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient"] = function (request, data, root) {
  var i8648 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient' )
  var i8649 = data
  i8648.mode = i8649[0]
  var i8651 = i8649[1]
  var i8650 = []
  for(var i = 0; i < i8651.length; i += 1) {
    i8650.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey', i8651[i + 0]) );
  }
  i8648.colorKeys = i8650
  var i8653 = i8649[2]
  var i8652 = []
  for(var i = 0; i < i8653.length; i += 1) {
    i8652.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey', i8653[i + 0]) );
  }
  i8648.alphaKeys = i8652
  return i8648
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule"] = function (request, data, root) {
  var i8654 = root || new pc.ParticleSystemColorBySpeed()
  var i8655 = data
  i8654.enabled = !!i8655[0]
  i8654.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i8655[1], i8654.color)
  i8654.range = new pc.Vec2( i8655[2], i8655[3] )
  return i8654
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey"] = function (request, data, root) {
  var i8658 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey' )
  var i8659 = data
  i8658.color = new pc.Color(i8659[0], i8659[1], i8659[2], i8659[3])
  i8658.time = i8659[4]
  return i8658
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey"] = function (request, data, root) {
  var i8662 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey' )
  var i8663 = data
  i8662.alpha = i8663[0]
  i8662.time = i8663[1]
  return i8662
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule"] = function (request, data, root) {
  var i8664 = root || new pc.ParticleSystemColorOverLifetime()
  var i8665 = data
  i8664.enabled = !!i8665[0]
  i8664.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i8665[1], i8664.color)
  return i8664
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule"] = function (request, data, root) {
  var i8666 = root || new pc.ParticleSystemEmitter()
  var i8667 = data
  i8666.enabled = !!i8667[0]
  i8666.rateOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i8667[1], i8666.rateOverTime)
  i8666.rateOverDistance = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i8667[2], i8666.rateOverDistance)
  var i8669 = i8667[3]
  var i8668 = []
  for(var i = 0; i < i8669.length; i += 1) {
    i8668.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst', i8669[i + 0]) );
  }
  i8666.bursts = i8668
  return i8666
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst"] = function (request, data, root) {
  var i8672 = root || new pc.ParticleSystemBurst()
  var i8673 = data
  i8672.count = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i8673[0], i8672.count)
  i8672.cycleCount = i8673[1]
  i8672.minCount = i8673[2]
  i8672.maxCount = i8673[3]
  i8672.repeatInterval = i8673[4]
  i8672.time = i8673[5]
  return i8672
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule"] = function (request, data, root) {
  var i8674 = root || new pc.ParticleSystemRotationBySpeed()
  var i8675 = data
  i8674.enabled = !!i8675[0]
  i8674.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i8675[1], i8674.x)
  i8674.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i8675[2], i8674.y)
  i8674.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i8675[3], i8674.z)
  i8674.separateAxes = !!i8675[4]
  i8674.range = new pc.Vec2( i8675[5], i8675[6] )
  return i8674
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule"] = function (request, data, root) {
  var i8676 = root || new pc.ParticleSystemRotationOverLifetime()
  var i8677 = data
  i8676.enabled = !!i8677[0]
  i8676.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i8677[1], i8676.x)
  i8676.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i8677[2], i8676.y)
  i8676.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i8677[3], i8676.z)
  i8676.separateAxes = !!i8677[4]
  return i8676
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule"] = function (request, data, root) {
  var i8678 = root || new pc.ParticleSystemShape()
  var i8679 = data
  i8678.enabled = !!i8679[0]
  i8678.shapeType = i8679[1]
  i8678.randomDirectionAmount = i8679[2]
  i8678.sphericalDirectionAmount = i8679[3]
  i8678.randomPositionAmount = i8679[4]
  i8678.alignToDirection = !!i8679[5]
  i8678.radius = i8679[6]
  i8678.radiusMode = i8679[7]
  i8678.radiusSpread = i8679[8]
  i8678.radiusSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i8679[9], i8678.radiusSpeed)
  i8678.radiusThickness = i8679[10]
  i8678.angle = i8679[11]
  i8678.length = i8679[12]
  i8678.boxThickness = new pc.Vec3( i8679[13], i8679[14], i8679[15] )
  i8678.meshShapeType = i8679[16]
  request.r(i8679[17], i8679[18], 0, i8678, 'mesh')
  request.r(i8679[19], i8679[20], 0, i8678, 'meshRenderer')
  request.r(i8679[21], i8679[22], 0, i8678, 'skinnedMeshRenderer')
  i8678.useMeshMaterialIndex = !!i8679[23]
  i8678.meshMaterialIndex = i8679[24]
  i8678.useMeshColors = !!i8679[25]
  i8678.normalOffset = i8679[26]
  i8678.arc = i8679[27]
  i8678.arcMode = i8679[28]
  i8678.arcSpread = i8679[29]
  i8678.arcSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i8679[30], i8678.arcSpeed)
  i8678.donutRadius = i8679[31]
  i8678.position = new pc.Vec3( i8679[32], i8679[33], i8679[34] )
  i8678.rotation = new pc.Vec3( i8679[35], i8679[36], i8679[37] )
  i8678.scale = new pc.Vec3( i8679[38], i8679[39], i8679[40] )
  return i8678
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule"] = function (request, data, root) {
  var i8680 = root || new pc.ParticleSystemSizeBySpeed()
  var i8681 = data
  i8680.enabled = !!i8681[0]
  i8680.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i8681[1], i8680.x)
  i8680.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i8681[2], i8680.y)
  i8680.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i8681[3], i8680.z)
  i8680.separateAxes = !!i8681[4]
  i8680.range = new pc.Vec2( i8681[5], i8681[6] )
  return i8680
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule"] = function (request, data, root) {
  var i8682 = root || new pc.ParticleSystemSizeOverLifetime()
  var i8683 = data
  i8682.enabled = !!i8683[0]
  i8682.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i8683[1], i8682.x)
  i8682.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i8683[2], i8682.y)
  i8682.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i8683[3], i8682.z)
  i8682.separateAxes = !!i8683[4]
  return i8682
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule"] = function (request, data, root) {
  var i8684 = root || new pc.ParticleSystemTextureSheetAnimation()
  var i8685 = data
  i8684.enabled = !!i8685[0]
  i8684.mode = i8685[1]
  i8684.animation = i8685[2]
  i8684.numTilesX = i8685[3]
  i8684.numTilesY = i8685[4]
  i8684.useRandomRow = !!i8685[5]
  i8684.frameOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i8685[6], i8684.frameOverTime)
  i8684.startFrame = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i8685[7], i8684.startFrame)
  i8684.cycleCount = i8685[8]
  i8684.rowIndex = i8685[9]
  i8684.flipU = i8685[10]
  i8684.flipV = i8685[11]
  i8684.spriteCount = i8685[12]
  var i8687 = i8685[13]
  var i8686 = []
  for(var i = 0; i < i8687.length; i += 2) {
  request.r(i8687[i + 0], i8687[i + 1], 2, i8686, '')
  }
  i8684.sprites = i8686
  return i8684
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule"] = function (request, data, root) {
  var i8690 = root || new pc.ParticleSystemVelocityOverLifetime()
  var i8691 = data
  i8690.enabled = !!i8691[0]
  i8690.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i8691[1], i8690.x)
  i8690.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i8691[2], i8690.y)
  i8690.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i8691[3], i8690.z)
  i8690.radial = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i8691[4], i8690.radial)
  i8690.speedModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i8691[5], i8690.speedModifier)
  i8690.space = i8691[6]
  i8690.orbitalX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i8691[7], i8690.orbitalX)
  i8690.orbitalY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i8691[8], i8690.orbitalY)
  i8690.orbitalZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i8691[9], i8690.orbitalZ)
  i8690.orbitalOffsetX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i8691[10], i8690.orbitalOffsetX)
  i8690.orbitalOffsetY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i8691[11], i8690.orbitalOffsetY)
  i8690.orbitalOffsetZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i8691[12], i8690.orbitalOffsetZ)
  return i8690
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule"] = function (request, data, root) {
  var i8692 = root || new pc.ParticleSystemNoise()
  var i8693 = data
  i8692.enabled = !!i8693[0]
  i8692.separateAxes = !!i8693[1]
  i8692.strengthX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i8693[2], i8692.strengthX)
  i8692.strengthY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i8693[3], i8692.strengthY)
  i8692.strengthZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i8693[4], i8692.strengthZ)
  i8692.frequency = i8693[5]
  i8692.damping = !!i8693[6]
  i8692.octaveCount = i8693[7]
  i8692.octaveMultiplier = i8693[8]
  i8692.octaveScale = i8693[9]
  i8692.quality = i8693[10]
  i8692.scrollSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i8693[11], i8692.scrollSpeed)
  i8692.scrollSpeedMultiplier = i8693[12]
  i8692.remapEnabled = !!i8693[13]
  i8692.remapX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i8693[14], i8692.remapX)
  i8692.remapY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i8693[15], i8692.remapY)
  i8692.remapZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i8693[16], i8692.remapZ)
  i8692.positionAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i8693[17], i8692.positionAmount)
  i8692.rotationAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i8693[18], i8692.rotationAmount)
  i8692.sizeAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i8693[19], i8692.sizeAmount)
  return i8692
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule"] = function (request, data, root) {
  var i8694 = root || new pc.ParticleSystemInheritVelocity()
  var i8695 = data
  i8694.enabled = !!i8695[0]
  i8694.mode = i8695[1]
  i8694.curve = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i8695[2], i8694.curve)
  return i8694
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule"] = function (request, data, root) {
  var i8696 = root || new pc.ParticleSystemForceOverLifetime()
  var i8697 = data
  i8696.enabled = !!i8697[0]
  i8696.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i8697[1], i8696.x)
  i8696.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i8697[2], i8696.y)
  i8696.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i8697[3], i8696.z)
  i8696.space = i8697[4]
  i8696.randomized = !!i8697[5]
  return i8696
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule"] = function (request, data, root) {
  var i8698 = root || new pc.ParticleSystemLimitVelocityOverLifetime()
  var i8699 = data
  i8698.enabled = !!i8699[0]
  i8698.limit = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i8699[1], i8698.limit)
  i8698.limitX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i8699[2], i8698.limitX)
  i8698.limitY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i8699[3], i8698.limitY)
  i8698.limitZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i8699[4], i8698.limitZ)
  i8698.dampen = i8699[5]
  i8698.separateAxes = !!i8699[6]
  i8698.space = i8699[7]
  i8698.drag = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i8699[8], i8698.drag)
  i8698.multiplyDragByParticleSize = !!i8699[9]
  i8698.multiplyDragByParticleVelocity = !!i8699[10]
  return i8698
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer"] = function (request, data, root) {
  var i8700 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer' )
  var i8701 = data
  request.r(i8701[0], i8701[1], 0, i8700, 'mesh')
  i8700.meshCount = i8701[2]
  i8700.activeVertexStreamsCount = i8701[3]
  i8700.alignment = i8701[4]
  i8700.renderMode = i8701[5]
  i8700.sortMode = i8701[6]
  i8700.lengthScale = i8701[7]
  i8700.velocityScale = i8701[8]
  i8700.cameraVelocityScale = i8701[9]
  i8700.normalDirection = i8701[10]
  i8700.sortingFudge = i8701[11]
  i8700.minParticleSize = i8701[12]
  i8700.maxParticleSize = i8701[13]
  i8700.pivot = new pc.Vec3( i8701[14], i8701[15], i8701[16] )
  request.r(i8701[17], i8701[18], 0, i8700, 'trailMaterial')
  i8700.applyActiveColorSpace = !!i8701[19]
  i8700.enabled = !!i8701[20]
  request.r(i8701[21], i8701[22], 0, i8700, 'sharedMaterial')
  var i8703 = i8701[23]
  var i8702 = []
  for(var i = 0; i < i8703.length; i += 2) {
  request.r(i8703[i + 0], i8703[i + 1], 2, i8702, '')
  }
  i8700.sharedMaterials = i8702
  i8700.receiveShadows = !!i8701[24]
  i8700.shadowCastingMode = i8701[25]
  i8700.sortingLayerID = i8701[26]
  i8700.sortingOrder = i8701[27]
  i8700.lightmapIndex = i8701[28]
  i8700.lightmapSceneIndex = i8701[29]
  i8700.lightmapScaleOffset = new pc.Vec4( i8701[30], i8701[31], i8701[32], i8701[33] )
  i8700.lightProbeUsage = i8701[34]
  i8700.reflectionProbeUsage = i8701[35]
  return i8700
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i8706 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i8707 = data
  i8706.name = i8707[0]
  i8706.tagId = i8707[1]
  i8706.enabled = !!i8707[2]
  i8706.isStatic = !!i8707[3]
  i8706.layer = i8707[4]
  return i8706
}

Deserializers["Level1_Hair_Playable"] = function (request, data, root) {
  var i8708 = root || request.c( 'Level1_Hair_Playable' )
  var i8709 = data
  request.r(i8709[0], i8709[1], 0, i8708, 'wetCloth')
  request.r(i8709[2], i8709[3], 0, i8708, 'waterDripingParticle')
  i8708.ZoomStep1 = request.d('ZoomPos', i8709[4], i8708.ZoomStep1)
  var i8711 = i8709[5]
  var i8710 = []
  for(var i = 0; i < i8711.length; i += 2) {
  request.r(i8711[i + 0], i8711[i + 1], 2, i8710, '')
  }
  i8708.AllTrash = i8710
  var i8713 = i8709[6]
  var i8712 = []
  for(var i = 0; i < i8713.length; i += 2) {
  request.r(i8713[i + 0], i8713[i + 1], 2, i8712, '')
  }
  i8708.AllTrashOutlines = i8712
  i8708.trashDone = !!i8709[7]
  i8708.trashThrown = i8709[8]
  i8708.trashTotal = i8709[9]
  request.r(i8709[10], i8709[11], 0, i8708, 'bd_Sticky')
  i8708.ZoomStep2 = request.d('ZoomPos', i8709[12], i8708.ZoomStep2)
  request.r(i8709[13], i8709[14], 0, i8708, 'ToolStep2')
  request.r(i8709[15], i8709[16], 0, i8708, 'camFollowStep2')
  var i8715 = i8709[17]
  var i8714 = []
  for(var i = 0; i < i8715.length; i += 2) {
  request.r(i8715[i + 0], i8715[i + 1], 2, i8714, '')
  }
  i8708.AllBugOutlines = i8714
  i8708.ZoomStep2b = request.d('ZoomPos', i8709[18], i8708.ZoomStep2b)
  request.r(i8709[19], i8709[20], 0, i8708, 'ToolStep2b')
  request.r(i8709[21], i8709[22], 0, i8708, 'camFollowStep2b')
  request.r(i8709[23], i8709[24], 0, i8708, 'dustColStep2')
  request.r(i8709[25], i8709[26], 0, i8708, 'handIndicationShower')
  request.r(i8709[27], i8709[28], 0, i8708, 'hairDirtyStatic')
  request.r(i8709[29], i8709[30], 0, i8708, 'hairDirtyWetStatic')
  request.r(i8709[31], i8709[32], 0, i8708, 'dryHairAnim')
  i8708.ZoomStep3 = request.d('ZoomPos', i8709[33], i8708.ZoomStep3)
  request.r(i8709[34], i8709[35], 0, i8708, 'ShampooInHand')
  request.r(i8709[36], i8709[37], 0, i8708, 'ShampooOnHand')
  request.r(i8709[38], i8709[39], 0, i8708, 'ShampooInHandCap')
  request.r(i8709[40], i8709[41], 0, i8708, 'ToolStep3')
  request.r(i8709[42], i8709[43], 0, i8708, 'shampooPatch')
  request.r(i8709[44], i8709[45], 0, i8708, 'handSpriteRend')
  request.r(i8709[46], i8709[47], 0, i8708, 'bottleDefault')
  request.r(i8709[48], i8709[49], 0, i8708, 'bottlePressed')
  request.r(i8709[50], i8709[51], 0, i8708, 'shampooDropping')
  request.r(i8709[52], i8709[53], 0, i8708, 'bottleOpenSfx')
  request.r(i8709[54], i8709[55], 0, i8708, 'bottleSqueezSfx')
  request.r(i8709[56], i8709[57], 0, i8708, 'bottlePourSfx')
  request.r(i8709[58], i8709[59], 0, i8708, 'handIndicationShampoo')
  i8708.ZoomStep4 = request.d('ZoomPos', i8709[60], i8708.ZoomStep4)
  request.r(i8709[61], i8709[62], 0, i8708, 'ToolStep4')
  request.r(i8709[63], i8709[64], 0, i8708, 'camFollowStep4')
  request.r(i8709[65], i8709[66], 0, i8708, 'foamLight_E')
  request.r(i8709[67], i8709[68], 0, i8708, 'foam2_E')
  request.r(i8709[69], i8709[70], 0, i8708, 'foamCol')
  request.r(i8709[71], i8709[72], 0, i8708, 'handIndicationHands')
  request.r(i8709[73], i8709[74], 0, i8708, 'progressStep4')
  i8708.ZoomStep5a = request.d('ZoomPos', i8709[75], i8708.ZoomStep5a)
  i8708.ZoomStep5b = request.d('ZoomPos', i8709[76], i8708.ZoomStep5b)
  request.r(i8709[77], i8709[78], 0, i8708, 'ShowerDamaged')
  request.r(i8709[79], i8709[80], 0, i8708, 'ShowerBackDMG')
  request.r(i8709[81], i8709[82], 0, i8708, 'ShowerInner_dirty')
  request.r(i8709[83], i8709[84], 0, i8708, 'ShowerInner_Target')
  request.r(i8709[85], i8709[86], 0, i8708, 'ShowerFrontDMG')
  request.r(i8709[87], i8709[88], 0, i8708, 'OpenShowerIndication')
  request.r(i8709[89], i8709[90], 0, i8708, 'CloseShowerIndication')
  request.r(i8709[91], i8709[92], 0, i8708, 'showrOpenInput')
  request.r(i8709[93], i8709[94], 0, i8708, 'showerDisk')
  request.r(i8709[95], i8709[96], 0, i8708, 'showerFixReverseAnimDrag')
  request.r(i8709[97], i8709[98], 0, i8708, 'showerDragDamage')
  request.r(i8709[99], i8709[100], 0, i8708, 'ToolStep5Rev')
  i8708.ZoomStep5 = request.d('ZoomPos', i8709[101], i8708.ZoomStep5)
  request.r(i8709[102], i8709[103], 0, i8708, 'ToolStep5')
  request.r(i8709[104], i8709[105], 0, i8708, 'ToolStep5Placeable')
  request.r(i8709[106], i8709[107], 0, i8708, 'toolStep5Progress')
  request.r(i8709[108], i8709[109], 0, i8708, 'toolStep5ProgressHelp')
  request.r(i8709[110], i8709[111], 0, i8708, 'camFollowStep5')
  request.r(i8709[112], i8709[113], 0, i8708, 'showerRender')
  request.r(i8709[114], i8709[115], 0, i8708, 'showerDirty')
  request.r(i8709[116], i8709[117], 0, i8708, 'showerClean')
  request.r(i8709[118], i8709[119], 0, i8708, 'waterShotParticle')
  request.r(i8709[120], i8709[121], 0, i8708, 'showerProblemClip')
  request.r(i8709[122], i8709[123], 0, i8708, 'wetHairs_E')
  i8708.levelName = i8709[124]
  i8708.levelReward = i8709[125]
  request.r(i8709[126], i8709[127], 0, i8708, 'LevelIcon')
  request.r(i8709[128], i8709[129], 0, i8708, 'Level_BG')
  var i8717 = i8709[130]
  var i8716 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Sprite')))
  for(var i = 0; i < i8717.length; i += 2) {
  request.r(i8717[i + 0], i8717[i + 1], 1, i8716, '')
  }
  i8708.ToolIcons = i8716
  var i8719 = i8709[131]
  var i8718 = []
  for(var i = 0; i < i8719.length; i += 2) {
  request.r(i8719[i + 0], i8719[i + 1], 2, i8718, '')
  }
  i8708.AllDrags = i8718
  var i8721 = i8709[132]
  var i8720 = []
  for(var i = 0; i < i8721.length; i += 2) {
  request.r(i8721[i + 0], i8721[i + 1], 2, i8720, '')
  }
  i8708.AllSources = i8720
  var i8723 = i8709[133]
  var i8722 = []
  for(var i = 0; i < i8723.length; i += 2) {
  request.r(i8723[i + 0], i8723[i + 1], 2, i8722, '')
  }
  i8708.AllScratches = i8722
  i8708.stepsDone = i8709[134]
  i8708.levelNo = i8709[135]
  i8708.partNo = i8709[136]
  request.r(i8709[137], i8709[138], 0, i8708, 'bubbleGum')
  return i8708
}

Deserializers["ZoomPos"] = function (request, data, root) {
  var i8724 = root || request.c( 'ZoomPos' )
  var i8725 = data
  i8724.CameraPos = new pc.Vec3( i8725[0], i8725[1], i8725[2] )
  i8724.CameraFOV = i8725[3]
  return i8724
}

Deserializers["PlayableCTA"] = function (request, data, root) {
  var i8736 = root || request.c( 'PlayableCTA' )
  var i8737 = data
  i8736.trigger = i8737[0]
  i8736.afterSeconds = i8737[1]
  i8736.afterTaps = i8737[2]
  request.r(i8737[3], i8737[4], 0, i8736, 'scratchProgress')
  i8736.scratchIndex = i8737[5]
  i8736.progressThreshold = i8737[6]
  request.r(i8737[7], i8737[8], 0, i8736, 'watchedTool')
  i8736.blockInputOnFire = !!i8737[9]
  i8736.refireOnEveryTap = !!i8737[10]
  i8736.refireDelay = i8737[11]
  i8736.showEndCard = !!i8737[12]
  request.r(i8737[13], i8737[14], 0, i8736, 'endCard')
  request.r(i8737[15], i8737[16], 0, i8736, 'endParticles')
  i8736.playEndParticlesOnProgressTrigger = !!i8737[17]
  request.r(i8737[18], i8737[19], 0, i8736, 'stepCompleteParticles')
  i8736.onCtaFired = request.d('UnityEngine.Events.UnityEvent', i8737[20], i8736.onCtaFired)
  i8736.logWhenFired = !!i8737[21]
  return i8736
}

Deserializers["UnityEngine.Events.UnityEvent"] = function (request, data, root) {
  var i8738 = root || request.c( 'UnityEngine.Events.UnityEvent' )
  var i8739 = data
  i8738.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i8739[0], i8738.m_PersistentCalls)
  return i8738
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i8740 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i8741 = data
  var i8743 = i8741[0]
  var i8742 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i8743.length; i += 1) {
    i8742.add(request.d('UnityEngine.Events.PersistentCall', i8743[i + 0]));
  }
  i8740.m_Calls = i8742
  return i8740
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i8746 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i8747 = data
  request.r(i8747[0], i8747[1], 0, i8746, 'm_Target')
  i8746.m_TargetAssemblyTypeName = i8747[2]
  i8746.m_MethodName = i8747[3]
  i8746.m_Mode = i8747[4]
  i8746.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i8747[5], i8746.m_Arguments)
  i8746.m_CallState = i8747[6]
  return i8746
}

Deserializers["PlayableFadeCoverSettings"] = function (request, data, root) {
  var i8748 = root || request.c( 'PlayableFadeCoverSettings' )
  var i8749 = data
  i8748.revealDelay = i8749[0]
  i8748.revealDuration = i8749[1]
  return i8748
}

Deserializers["ScratchCardAsset.ScratchCardManager"] = function (request, data, root) {
  var i8750 = root || request.c( 'ScratchCardAsset.ScratchCardManager' )
  var i8751 = data
  request.r(i8751[0], i8751[1], 0, i8750, 'MainCamera')
  i8750.RenderType = i8751[2]
  request.r(i8751[3], i8751[4], 0, i8750, 'ScratchSurfaceSprite')
  i8750.ScratchSurfaceSpriteHasAlpha = !!i8751[5]
  i8750.MaskProgressCutOffValue = i8751[6]
  request.r(i8751[7], i8751[8], 0, i8750, 'EraseTexture')
  i8750.EraseTextureScale = new pc.Vec2( i8751[9], i8751[10] )
  i8750.InputEnabled = !!i8751[11]
  request.r(i8751[12], i8751[13], 0, i8750, 'Card')
  i8750.Mode = i8751[14]
  request.r(i8751[15], i8751[16], 0, i8750, 'Progress')
  request.r(i8751[17], i8751[18], 0, i8750, 'MeshCard')
  request.r(i8751[19], i8751[20], 0, i8750, 'SpriteCard')
  request.r(i8751[21], i8751[22], 0, i8750, 'ImageCard')
  request.r(i8751[23], i8751[24], 0, i8750, 'MaskShader')
  request.r(i8751[25], i8751[26], 0, i8750, 'BrushShader')
  request.r(i8751[27], i8751[28], 0, i8750, 'MaskProgressShader')
  request.r(i8751[29], i8751[30], 0, i8750, 'MaskProgressCutOffShader')
  return i8750
}

Deserializers["ScratchCardAsset.ScratchCard"] = function (request, data, root) {
  var i8752 = root || request.c( 'ScratchCardAsset.ScratchCard' )
  var i8753 = data
  request.r(i8753[0], i8753[1], 0, i8752, 'MainCamera')
  request.r(i8753[2], i8753[3], 0, i8752, 'Surface')
  i8752.RenderTextureQuality = i8753[4]
  request.r(i8753[5], i8753[6], 0, i8752, 'Eraser')
  request.r(i8753[7], i8753[8], 0, i8752, 'Progress')
  request.r(i8753[9], i8753[10], 0, i8752, 'ScratchSurface')
  request.r(i8753[11], i8753[12], 0, i8752, 'RenderTexture')
  i8752.BrushScale = new pc.Vec2( i8753[13], i8753[14] )
  request.r(i8753[15], i8753[16], 0, i8752, 'ToolTip')
  i8752.InputEnabled = !!i8753[17]
  i8752.IsScratching = !!i8753[18]
  i8752.useChangingScale = !!i8753[19]
  i8752.useGivenBrushScale = !!i8753[20]
  i8752.canSpreadMask = !!i8753[21]
  i8752.shouldPaintHoles = !!i8753[22]
  i8752.canRotateTip = !!i8753[23]
  i8752._mode = i8753[24]
  return i8752
}

Deserializers["ScratchCardAsset.EraseProgress"] = function (request, data, root) {
  var i8754 = root || request.c( 'ScratchCardAsset.EraseProgress' )
  var i8755 = data
  request.r(i8755[0], i8755[1], 0, i8754, 'Card')
  i8754.currentProgress = i8755[2]
  return i8754
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animator"] = function (request, data, root) {
  var i8756 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animator' )
  var i8757 = data
  request.r(i8757[0], i8757[1], 0, i8756, 'animatorController')
  request.r(i8757[2], i8757[3], 0, i8756, 'avatar')
  i8756.updateMode = i8757[4]
  i8756.hasTransformHierarchy = !!i8757[5]
  i8756.applyRootMotion = !!i8757[6]
  var i8759 = i8757[7]
  var i8758 = []
  for(var i = 0; i < i8759.length; i += 2) {
  request.r(i8759[i + 0], i8759[i + 1], 2, i8758, '')
  }
  i8756.humanBones = i8758
  i8756.enabled = !!i8757[8]
  return i8756
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer"] = function (request, data, root) {
  var i8762 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer' )
  var i8763 = data
  i8762.color = new pc.Color(i8763[0], i8763[1], i8763[2], i8763[3])
  request.r(i8763[4], i8763[5], 0, i8762, 'sprite')
  i8762.flipX = !!i8763[6]
  i8762.flipY = !!i8763[7]
  i8762.drawMode = i8763[8]
  i8762.size = new pc.Vec2( i8763[9], i8763[10] )
  i8762.tileMode = i8763[11]
  i8762.adaptiveModeThreshold = i8763[12]
  i8762.maskInteraction = i8763[13]
  i8762.spriteSortPoint = i8763[14]
  i8762.enabled = !!i8763[15]
  request.r(i8763[16], i8763[17], 0, i8762, 'sharedMaterial')
  var i8765 = i8763[18]
  var i8764 = []
  for(var i = 0; i < i8765.length; i += 2) {
  request.r(i8765[i + 0], i8765[i + 1], 2, i8764, '')
  }
  i8762.sharedMaterials = i8764
  i8762.receiveShadows = !!i8763[19]
  i8762.shadowCastingMode = i8763[20]
  i8762.sortingLayerID = i8763[21]
  i8762.sortingOrder = i8763[22]
  i8762.lightmapIndex = i8763[23]
  i8762.lightmapSceneIndex = i8763[24]
  i8762.lightmapScaleOffset = new pc.Vec4( i8763[25], i8763[26], i8763[27], i8763[28] )
  i8762.lightProbeUsage = i8763[29]
  i8762.reflectionProbeUsage = i8763[30]
  return i8762
}

Deserializers["UnityEngine.U2D.Animation.SpriteSkin"] = function (request, data, root) {
  var i8766 = root || request.c( 'UnityEngine.U2D.Animation.SpriteSkin' )
  var i8767 = data
  request.r(i8767[0], i8767[1], 0, i8766, 'm_RootBone')
  var i8769 = i8767[2]
  var i8768 = []
  for(var i = 0; i < i8769.length; i += 2) {
  request.r(i8769[i + 0], i8769[i + 1], 2, i8768, '')
  }
  i8766.m_BoneTransforms = i8768
  i8766.m_AlwaysUpdate = !!i8767[3]
  i8766.m_AutoRebind = !!i8767[4]
  return i8766
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.TrailRenderer"] = function (request, data, root) {
  var i8770 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.TrailRenderer' )
  var i8771 = data
  var i8773 = i8771[0]
  var i8772 = []
  for(var i = 0; i < i8773.length; i += 3) {
    i8772.push( new pc.Vec3( i8773[i + 0], i8773[i + 1], i8773[i + 2] ) );
  }
  i8770.positions = i8772
  i8770.positionCount = i8771[1]
  i8770.time = i8771[2]
  i8770.startWidth = i8771[3]
  i8770.endWidth = i8771[4]
  i8770.widthMultiplier = i8771[5]
  i8770.autodestruct = !!i8771[6]
  i8770.emitting = !!i8771[7]
  i8770.numCornerVertices = i8771[8]
  i8770.numCapVertices = i8771[9]
  i8770.minVertexDistance = i8771[10]
  i8770.colorGradient = i8771[11] ? new pc.ColorGradient(i8771[11][0], i8771[11][1], i8771[11][2]) : null
  i8770.startColor = new pc.Color(i8771[12], i8771[13], i8771[14], i8771[15])
  i8770.endColor = new pc.Color(i8771[16], i8771[17], i8771[18], i8771[19])
  i8770.generateLightingData = !!i8771[20]
  i8770.textureMode = i8771[21]
  i8770.alignment = i8771[22]
  i8770.widthCurve = new pc.AnimationCurve( { keys_flow: i8771[23] } )
  i8770.enabled = !!i8771[24]
  request.r(i8771[25], i8771[26], 0, i8770, 'sharedMaterial')
  var i8775 = i8771[27]
  var i8774 = []
  for(var i = 0; i < i8775.length; i += 2) {
  request.r(i8775[i + 0], i8775[i + 1], 2, i8774, '')
  }
  i8770.sharedMaterials = i8774
  i8770.receiveShadows = !!i8771[28]
  i8770.shadowCastingMode = i8771[29]
  i8770.sortingLayerID = i8771[30]
  i8770.sortingOrder = i8771[31]
  i8770.lightmapIndex = i8771[32]
  i8770.lightmapSceneIndex = i8771[33]
  i8770.lightmapScaleOffset = new pc.Vec4( i8771[34], i8771[35], i8771[36], i8771[37] )
  i8770.lightProbeUsage = i8771[38]
  i8770.reflectionProbeUsage = i8771[39]
  return i8770
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.LineRenderer"] = function (request, data, root) {
  var i8778 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.LineRenderer' )
  var i8779 = data
  i8778.textureMode = i8779[0]
  i8778.alignment = i8779[1]
  i8778.widthCurve = new pc.AnimationCurve( { keys_flow: i8779[2] } )
  i8778.colorGradient = i8779[3] ? new pc.ColorGradient(i8779[3][0], i8779[3][1], i8779[3][2]) : null
  var i8781 = i8779[4]
  var i8780 = []
  for(var i = 0; i < i8781.length; i += 3) {
    i8780.push( new pc.Vec3( i8781[i + 0], i8781[i + 1], i8781[i + 2] ) );
  }
  i8778.positions = i8780
  i8778.positionCount = i8779[5]
  i8778.widthMultiplier = i8779[6]
  i8778.startWidth = i8779[7]
  i8778.endWidth = i8779[8]
  i8778.numCornerVertices = i8779[9]
  i8778.numCapVertices = i8779[10]
  i8778.useWorldSpace = !!i8779[11]
  i8778.loop = !!i8779[12]
  i8778.startColor = new pc.Color(i8779[13], i8779[14], i8779[15], i8779[16])
  i8778.endColor = new pc.Color(i8779[17], i8779[18], i8779[19], i8779[20])
  i8778.generateLightingData = !!i8779[21]
  i8778.enabled = !!i8779[22]
  request.r(i8779[23], i8779[24], 0, i8778, 'sharedMaterial')
  var i8783 = i8779[25]
  var i8782 = []
  for(var i = 0; i < i8783.length; i += 2) {
  request.r(i8783[i + 0], i8783[i + 1], 2, i8782, '')
  }
  i8778.sharedMaterials = i8782
  i8778.receiveShadows = !!i8779[26]
  i8778.shadowCastingMode = i8779[27]
  i8778.sortingLayerID = i8779[28]
  i8778.sortingOrder = i8779[29]
  i8778.lightmapIndex = i8779[30]
  i8778.lightmapSceneIndex = i8779[31]
  i8778.lightmapScaleOffset = new pc.Vec4( i8779[32], i8779[33], i8779[34], i8779[35] )
  i8778.lightProbeUsage = i8779[36]
  i8778.reflectionProbeUsage = i8779[37]
  return i8778
}

Deserializers["StaticFixedPipe"] = function (request, data, root) {
  var i8784 = root || request.c( 'StaticFixedPipe' )
  var i8785 = data
  request.r(i8785[0], i8785[1], 0, i8784, 'lineRenderer')
  request.r(i8785[2], i8785[3], 0, i8784, 'toolTransform')
  request.r(i8785[4], i8785[5], 0, i8784, 'toolDirectionPoint')
  request.r(i8785[6], i8785[7], 0, i8784, 'fixedEndPoint')
  i8784.segmentCount = i8785[8]
  i8784.totalLength = i8785[9]
  i8784.constraintIterations = i8785[10]
  i8784.gravity = new pc.Vec3( i8785[11], i8785[12], i8785[13] )
  i8784.pipeWidth = i8785[14]
  return i8784
}

Deserializers["DG.Tweening.DOTweenAnimation"] = function (request, data, root) {
  var i8786 = root || request.c( 'DG.Tweening.DOTweenAnimation' )
  var i8787 = data
  i8786.targetIsSelf = !!i8787[0]
  request.r(i8787[1], i8787[2], 0, i8786, 'targetGO')
  i8786.tweenTargetIsTargetGO = !!i8787[3]
  i8786.delay = i8787[4]
  i8786.duration = i8787[5]
  i8786.easeType = i8787[6]
  i8786.easeCurve = new pc.AnimationCurve( { keys_flow: i8787[7] } )
  i8786.loopType = i8787[8]
  i8786.loops = i8787[9]
  i8786.id = i8787[10]
  i8786.isRelative = !!i8787[11]
  i8786.isFrom = !!i8787[12]
  i8786.isIndependentUpdate = !!i8787[13]
  i8786.autoKill = !!i8787[14]
  i8786.autoGenerate = !!i8787[15]
  i8786.isActive = !!i8787[16]
  i8786.isValid = !!i8787[17]
  request.r(i8787[18], i8787[19], 0, i8786, 'target')
  i8786.animationType = i8787[20]
  i8786.targetType = i8787[21]
  i8786.forcedTargetType = i8787[22]
  i8786.autoPlay = !!i8787[23]
  i8786.useTargetAsV3 = !!i8787[24]
  i8786.endValueFloat = i8787[25]
  i8786.endValueV3 = new pc.Vec3( i8787[26], i8787[27], i8787[28] )
  i8786.endValueV2 = new pc.Vec2( i8787[29], i8787[30] )
  i8786.endValueColor = new pc.Color(i8787[31], i8787[32], i8787[33], i8787[34])
  i8786.endValueString = i8787[35]
  i8786.endValueRect = UnityEngine.Rect.MinMaxRect(i8787[36], i8787[37], i8787[38], i8787[39])
  request.r(i8787[40], i8787[41], 0, i8786, 'endValueTransform')
  i8786.optionalBool0 = !!i8787[42]
  i8786.optionalBool1 = !!i8787[43]
  i8786.optionalFloat0 = i8787[44]
  i8786.optionalInt0 = i8787[45]
  i8786.optionalRotationMode = i8787[46]
  i8786.optionalScrambleMode = i8787[47]
  i8786.optionalShakeRandomnessMode = i8787[48]
  i8786.optionalString = i8787[49]
  i8786.updateType = i8787[50]
  i8786.isSpeedBased = !!i8787[51]
  i8786.hasOnStart = !!i8787[52]
  i8786.hasOnPlay = !!i8787[53]
  i8786.hasOnUpdate = !!i8787[54]
  i8786.hasOnStepComplete = !!i8787[55]
  i8786.hasOnComplete = !!i8787[56]
  i8786.hasOnTweenCreated = !!i8787[57]
  i8786.hasOnRewind = !!i8787[58]
  i8786.onStart = request.d('UnityEngine.Events.UnityEvent', i8787[59], i8786.onStart)
  i8786.onPlay = request.d('UnityEngine.Events.UnityEvent', i8787[60], i8786.onPlay)
  i8786.onUpdate = request.d('UnityEngine.Events.UnityEvent', i8787[61], i8786.onUpdate)
  i8786.onStepComplete = request.d('UnityEngine.Events.UnityEvent', i8787[62], i8786.onStepComplete)
  i8786.onComplete = request.d('UnityEngine.Events.UnityEvent', i8787[63], i8786.onComplete)
  i8786.onTweenCreated = request.d('UnityEngine.Events.UnityEvent', i8787[64], i8786.onTweenCreated)
  i8786.onRewind = request.d('UnityEngine.Events.UnityEvent', i8787[65], i8786.onRewind)
  return i8786
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D"] = function (request, data, root) {
  var i8788 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D' )
  var i8789 = data
  i8788.usedByComposite = !!i8789[0]
  i8788.autoTiling = !!i8789[1]
  i8788.size = new pc.Vec2( i8789[2], i8789[3] )
  i8788.edgeRadius = i8789[4]
  i8788.enabled = !!i8789[5]
  i8788.isTrigger = !!i8789[6]
  i8788.usedByEffector = !!i8789[7]
  i8788.density = i8789[8]
  i8788.offset = new pc.Vec2( i8789[9], i8789[10] )
  request.r(i8789[11], i8789[12], 0, i8788, 'material')
  return i8788
}

Deserializers["BasicDrag"] = function (request, data, root) {
  var i8790 = root || request.c( 'BasicDrag' )
  var i8791 = data
  i8790.canDrag = !!i8791[0]
  i8790.dragByDelta = !!i8791[1]
  i8790.isDragging = !!i8791[2]
  i8790.moveWithPointer = !!i8791[3]
  i8790.canReturn = !!i8791[4]
  i8790.jumpOnReturn = !!i8791[5]
  i8790.returnTime = i8791[6]
  i8790.Tool_Offset = new pc.Vec3( i8791[7], i8791[8], i8791[9] )
  i8790.canScaleIncrease = !!i8791[10]
  i8790.Self_ScaleNew = new pc.Vec3( i8791[11], i8791[12], i8791[13] )
  i8790.canRotateOnPick = !!i8791[14]
  i8790.startRot = new pc.Vec3( i8791[15], i8791[16], i8791[17] )
  i8790.newRot = new pc.Vec3( i8791[18], i8791[19], i8791[20] )
  var i8793 = i8791[21]
  var i8792 = []
  for(var i = 0; i < i8793.length; i += 2) {
  request.r(i8793[i + 0], i8793[i + 1], 2, i8792, '')
  }
  i8790.childSprite = i8792
  request.r(i8791[22], i8791[23], 0, i8790, 'ToolSelectClip')
  request.r(i8791[24], i8791[25], 0, i8790, 'ToolLoopClip')
  request.r(i8791[26], i8791[27], 0, i8790, 'thisParticles')
  i8790.onDragparticle = !!i8791[28]
  request.r(i8791[29], i8791[30], 0, i8790, 'dragParticles')
  request.r(i8791[31], i8791[32], 0, i8790, 'anim')
  i8790.startPos = new pc.Vec3( i8791[33], i8791[34], i8791[35] )
  i8790.startScale = new pc.Vec3( i8791[36], i8791[37], i8791[38] )
  i8790.Vibration = !!i8791[39]
  i8790.isPlacedCannotMove = !!i8791[40]
  i8790.isObjectMovingWhileDragging = !!i8791[41]
  i8790.OnMouseDownEvent = request.d('System.Action', i8791[42], i8790.OnMouseDownEvent)
  i8790.OnMouseUpEvent = request.d('System.Action', i8791[43], i8790.OnMouseUpEvent)
  i8790.ProgStartEvent = request.d('System.Action', i8791[44], i8790.ProgStartEvent)
  i8790.ProgEndEvent = request.d('System.Action', i8791[45], i8790.ProgEndEvent)
  i8790.canCallMouseUpWhenGamePaused = !!i8791[46]
  i8790.ClampX_L = i8791[47]
  i8790.ClampX_H = i8791[48]
  i8790.ClampY_L = i8791[49]
  i8790.ClampY_H = i8791[50]
  i8790.startOrder = i8791[51]
  i8790.dontResetItIsInCollider = !!i8791[52]
  request.r(i8791[53], i8791[54], 0, i8790, 'thisCollider')
  request.r(i8791[55], i8791[56], 0, i8790, 'thisSR')
  i8790.OnMouseDownEventIndependentFromCanDrag = request.d('System.Action', i8791[57], i8790.OnMouseDownEventIndependentFromCanDrag)
  return i8790
}

Deserializers["System.Action"] = function (request, data, root) {
  var i8796 = root || request.c( 'System.Action' )
  var i8797 = data
  return i8796
}

Deserializers["BD_Clamp"] = function (request, data, root) {
  var i8798 = root || request.c( 'BD_Clamp' )
  var i8799 = data
  i8798.ClampX_L = i8799[0]
  i8798.ClampX_H = i8799[1]
  i8798.ClampY_L = i8799[2]
  i8798.ClampY_H = i8799[3]
  return i8798
}

Deserializers["OutlinePulse"] = function (request, data, root) {
  var i8800 = root || request.c( 'OutlinePulse' )
  var i8801 = data
  i8800.smallThickness = i8801[0]
  i8800.largeThickness = i8801[1]
  i8800.transitionSpeed = i8801[2]
  i8800.animationSpeed = i8801[3]
  i8800.isThickOutline = !!i8801[4]
  i8800.animate = !!i8801[5]
  i8800.hideSpriteOnly = !!i8801[6]
  return i8800
}

Deserializers["BD_ItemPick"] = function (request, data, root) {
  var i8802 = root || request.c( 'BD_ItemPick' )
  var i8803 = data
  request.r(i8803[0], i8803[1], 0, i8802, 'Tool')
  request.r(i8803[2], i8803[3], 0, i8802, 'Outline')
  request.r(i8803[4], i8803[5], 0, i8802, 'itemRend')
  request.r(i8803[6], i8803[7], 0, i8802, 'pick_sp')
  i8802.OnTap = request.d('UnityEngine.Events.UnityEvent', i8803[8], i8802.OnTap)
  i8802.OnComplete = request.d('UnityEngine.Events.UnityEvent', i8803[9], i8802.OnComplete)
  request.r(i8803[10], i8803[11], 0, i8802, 'Clip')
  i8802.minDragDistance = i8803[12]
  i8802.isTaped = !!i8803[13]
  return i8802
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i8804 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i8805 = data
  request.r(i8805[0], i8805[1], 0, i8804, 'm_ObjectArgument')
  i8804.m_ObjectArgumentAssemblyTypeName = i8805[2]
  i8804.m_IntArgument = i8805[3]
  i8804.m_FloatArgument = i8805[4]
  i8804.m_StringArgument = i8805[5]
  i8804.m_BoolArgument = !!i8805[6]
  return i8804
}

Deserializers["BD_Sticky"] = function (request, data, root) {
  var i8806 = root || request.c( 'BD_Sticky' )
  var i8807 = data
  request.r(i8807[0], i8807[1], 0, i8806, 'anim')
  i8806.isVerticlePull = !!i8807[2]
  request.r(i8807[3], i8807[4], 0, i8806, 'pickSfx')
  request.r(i8807[5], i8807[6], 0, i8806, 'pulledClip')
  request.r(i8807[7], i8807[8], 0, i8806, 'pullSource')
  i8806.OnComplete = request.d('UnityEngine.Events.UnityEvent', i8807[9], i8806.OnComplete)
  i8806.changeLayerPick = !!i8807[10]
  request.r(i8807[11], i8807[12], 0, i8806, 'sp_rendr')
  i8806.def_layerNo = i8807[13]
  i8806.tar_LayerNo = i8807[14]
  i8806.direction = i8807[15]
  i8806.dragThreshold = i8807[16]
  i8806.pullDistanceToFree = i8807[17]
  i8806.returnSpeed = i8807[18]
  i8806.resistance = i8807[19]
  var i8809 = i8807[20]
  var i8808 = []
  for(var i = 0; i < i8809.length; i += 2) {
  request.r(i8809[i + 0], i8809[i + 1], 2, i8808, '')
  }
  i8806.StartBones = i8808
  var i8811 = i8807[21]
  var i8810 = []
  for(var i = 0; i < i8811.length; i += 2) {
  request.r(i8811[i + 0], i8811[i + 1], 2, i8810, '')
  }
  i8806.EndBones = i8810
  request.r(i8807[22], i8807[23], 0, i8806, 'BonePivot')
  return i8806
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i8812 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i8813 = data
  request.r(i8813[0], i8813[1], 0, i8812, 'clip')
  request.r(i8813[2], i8813[3], 0, i8812, 'outputAudioMixerGroup')
  i8812.playOnAwake = !!i8813[4]
  i8812.loop = !!i8813[5]
  i8812.time = i8813[6]
  i8812.volume = i8813[7]
  i8812.pitch = i8813[8]
  i8812.enabled = !!i8813[9]
  return i8812
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CircleCollider2D"] = function (request, data, root) {
  var i8814 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CircleCollider2D' )
  var i8815 = data
  i8814.radius = i8815[0]
  i8814.enabled = !!i8815[1]
  i8814.isTrigger = !!i8815[2]
  i8814.usedByEffector = !!i8815[3]
  i8814.density = i8815[4]
  i8814.offset = new pc.Vec2( i8815[5], i8815[6] )
  request.r(i8815[7], i8815[8], 0, i8814, 'material')
  return i8814
}

Deserializers["PlayParticlesOnCollision"] = function (request, data, root) {
  var i8816 = root || request.c( 'PlayParticlesOnCollision' )
  var i8817 = data
  request.r(i8817[0], i8817[1], 0, i8816, 'Target')
  request.r(i8817[2], i8817[3], 0, i8816, 'ParticlePrefab')
  i8816.destroyIt = !!i8817[4]
  i8816.stayAtPlace = !!i8817[5]
  i8816.disableOnCollision = !!i8817[6]
  i8816.OnCollisionEvent = request.d('UnityEngine.Events.UnityEvent', i8817[7], i8816.OnCollisionEvent)
  return i8816
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteMask"] = function (request, data, root) {
  var i8818 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteMask' )
  var i8819 = data
  i8818.frontSortingLayerID = i8819[0]
  i8818.frontSortingOrder = i8819[1]
  i8818.backSortingLayerID = i8819[2]
  i8818.backSortingOrder = i8819[3]
  i8818.alphaCutoff = i8819[4]
  request.r(i8819[5], i8819[6], 0, i8818, 'sprite')
  i8818.tileMode = i8819[7]
  i8818.isCustomRangeActive = !!i8819[8]
  i8818.spriteSortPoint = i8819[9]
  i8818.enabled = !!i8819[10]
  request.r(i8819[11], i8819[12], 0, i8818, 'sharedMaterial')
  var i8821 = i8819[13]
  var i8820 = []
  for(var i = 0; i < i8821.length; i += 2) {
  request.r(i8821[i + 0], i8821[i + 1], 2, i8820, '')
  }
  i8818.sharedMaterials = i8820
  i8818.receiveShadows = !!i8819[14]
  i8818.shadowCastingMode = i8819[15]
  i8818.sortingLayerID = i8819[16]
  i8818.sortingOrder = i8819[17]
  i8818.lightmapIndex = i8819[18]
  i8818.lightmapSceneIndex = i8819[19]
  i8818.lightmapScaleOffset = new pc.Vec4( i8819[20], i8819[21], i8819[22], i8819[23] )
  i8818.lightProbeUsage = i8819[24]
  i8818.reflectionProbeUsage = i8819[25]
  return i8818
}

Deserializers["PlayTweenOnHit"] = function (request, data, root) {
  var i8822 = root || request.c( 'PlayTweenOnHit' )
  var i8823 = data
  i8822.isContinueous = !!i8823[0]
  request.r(i8823[1], i8823[2], 0, i8822, 'tool')
  var i8825 = i8823[3]
  var i8824 = []
  for(var i = 0; i < i8825.length; i += 2) {
  request.r(i8825[i + 0], i8825[i + 1], 2, i8824, '')
  }
  i8822.animsToPlay = i8824
  request.r(i8823[4], i8823[5], 0, i8822, 'tipTarget')
  return i8822
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.PolygonCollider2D"] = function (request, data, root) {
  var i8828 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.PolygonCollider2D' )
  var i8829 = data
  i8828.usedByComposite = !!i8829[0]
  i8828.autoTiling = !!i8829[1]
  var i8831 = i8829[2]
  var i8830 = []
  for(var i = 0; i < i8831.length; i += 1) {
  var i8833 = i8831[i + 0]
  var i8832 = []
  for(var i = 0; i < i8833.length; i += 2) {
    i8832.push( new pc.Vec2( i8833[i + 0], i8833[i + 1] ) );
  }
    i8830.push( i8832 );
  }
  i8828.points = i8830
  i8828.enabled = !!i8829[3]
  i8828.isTrigger = !!i8829[4]
  i8828.usedByEffector = !!i8829[5]
  i8828.density = i8829[6]
  i8828.offset = new pc.Vec2( i8829[7], i8829[8] )
  request.r(i8829[9], i8829[10], 0, i8828, 'material')
  return i8828
}

Deserializers["PlaySfxOnCollision"] = function (request, data, root) {
  var i8840 = root || request.c( 'PlaySfxOnCollision' )
  var i8841 = data
  request.r(i8841[0], i8841[1], 0, i8840, 'Tip')
  i8840.Mode = i8841[2]
  request.r(i8841[3], i8841[4], 0, i8840, 'DragInput')
  request.r(i8841[5], i8841[6], 0, i8840, 'Source')
  i8840.startVol = i8841[7]
  i8840.targetVol = i8841[8]
  i8840.duration = i8841[9]
  request.r(i8841[10], i8841[11], 0, i8840, 'Particles')
  i8840.isDone = !!i8841[12]
  i8840.isInArea = !!i8841[13]
  i8840.isPlaying = !!i8841[14]
  return i8840
}

Deserializers["InteractableBones"] = function (request, data, root) {
  var i8842 = root || request.c( 'InteractableBones' )
  var i8843 = data
  request.r(i8843[0], i8843[1], 0, i8842, 'Tip')
  i8842.MoveAmount = i8843[2]
  i8842.MoveSpeed = i8843[3]
  i8842.ShakeSpeed = i8843[4]
  i8842.MovementThreshold = i8843[5]
  i8842.MoveX = !!i8843[6]
  i8842.MoveY = !!i8843[7]
  return i8842
}

Deserializers["WaypointFollower"] = function (request, data, root) {
  var i8844 = root || request.c( 'WaypointFollower' )
  var i8845 = data
  var i8847 = i8845[0]
  var i8846 = []
  for(var i = 0; i < i8847.length; i += 2) {
  request.r(i8847[i + 0], i8847[i + 1], 2, i8846, '')
  }
  i8844.waypoints = i8846
  i8844.speed = i8845[1]
  i8844.rotationSpeed = i8845[2]
  i8844.loop = !!i8845[3]
  i8844.reverse = !!i8845[4]
  i8844.canMove = !!i8845[5]
  request.r(i8845[6], i8845[7], 0, i8844, 'movingSfx')
  return i8844
}

Deserializers["BD_Action"] = function (request, data, root) {
  var i8848 = root || request.c( 'BD_Action' )
  var i8849 = data
  i8848.OnMouseDownEvent = request.d('UnityEngine.Events.UnityEvent', i8849[0], i8848.OnMouseDownEvent)
  i8848.OnMouseUpEvent = request.d('UnityEngine.Events.UnityEvent', i8849[1], i8848.OnMouseUpEvent)
  i8848.setToolLayer = !!i8849[2]
  request.r(i8849[3], i8849[4], 0, i8848, 'tool_SP')
  return i8848
}

Deserializers["BD_CameraFollow"] = function (request, data, root) {
  var i8850 = root || request.c( 'BD_CameraFollow' )
  var i8851 = data
  request.r(i8851[0], i8851[1], 0, i8850, 'Tool')
  request.r(i8851[2], i8851[3], 0, i8850, 'Pivot')
  i8850.FOV = i8851[4]
  i8850.Y_L = i8851[5]
  i8850.Y_H = i8851[6]
  i8850.X_L = i8851[7]
  i8850.X_R = i8851[8]
  i8850.startDelay = i8851[9]
  i8850.duration = i8851[10]
  return i8850
}

Deserializers["BD_ToolRotate"] = function (request, data, root) {
  var i8852 = root || request.c( 'BD_ToolRotate' )
  var i8853 = data
  i8852.startDelay = i8853[0]
  request.r(i8853[1], i8853[2], 0, i8852, 'Tool')
  request.r(i8853[3], i8853[4], 0, i8852, 'Clamp')
  request.r(i8853[5], i8853[6], 0, i8852, 'Pivot')
  i8852.MinAngle = new pc.Vec3( i8853[7], i8853[8], i8853[9] )
  i8852.MaxAngle = new pc.Vec3( i8853[10], i8853[11], i8853[12] )
  i8852.rotationSpeed = i8853[13]
  return i8852
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D"] = function (request, data, root) {
  var i8854 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D' )
  var i8855 = data
  i8854.bodyType = i8855[0]
  request.r(i8855[1], i8855[2], 0, i8854, 'material')
  i8854.simulated = !!i8855[3]
  i8854.useAutoMass = !!i8855[4]
  i8854.mass = i8855[5]
  i8854.drag = i8855[6]
  i8854.angularDrag = i8855[7]
  i8854.gravityScale = i8855[8]
  i8854.collisionDetectionMode = i8855[9]
  i8854.sleepMode = i8855[10]
  i8854.constraints = i8855[11]
  return i8854
}

Deserializers["BugKill_Tip"] = function (request, data, root) {
  var i8856 = root || request.c( 'BugKill_Tip' )
  var i8857 = data
  var i8859 = i8857[0]
  var i8858 = []
  for(var i = 0; i < i8859.length; i += 2) {
  request.r(i8859[i + 0], i8859[i + 1], 2, i8858, '')
  }
  i8856.targets = i8858
  i8856.waypointFollower = !!i8857[1]
  i8856.fallSpeed = i8857[2]
  i8856.totalTargets = i8857[3]
  i8856.killCount = i8857[4]
  request.r(i8857[5], i8857[6], 0, i8856, 'bugKillSfx')
  i8856.OnComplete = request.d('UnityEngine.Events.UnityEvent', i8857[7], i8856.OnComplete)
  return i8856
}

Deserializers["BD_Progress"] = function (request, data, root) {
  var i8862 = root || request.c( 'BD_Progress' )
  var i8863 = data
  var i8865 = i8863[0]
  var i8864 = []
  for(var i = 0; i < i8865.length; i += 1) {
    i8864.push( request.d('ScratchData', i8865[i + 0]) );
  }
  i8862.AllScratches = i8864
  i8862.OnScratchComplete = request.d('UnityEngine.Events.UnityEvent', i8863[1], i8862.OnScratchComplete)
  i8862.isProgDone = !!i8863[2]
  i8862.canCallComplete = !!i8863[3]
  i8862.CollectiveAppear = !!i8863[4]
  i8862.tipControl = !!i8863[5]
  i8862.progressControl = !!i8863[6]
  request.r(i8863[7], i8863[8], 0, i8862, 'thisDrag')
  i8862.CompleteEvent = request.d('System.Action', i8863[9], i8862.CompleteEvent)
  i8862.SubCompleteEvent = request.d('System.Action', i8863[10], i8862.SubCompleteEvent)
  return i8862
}

Deserializers["ScratchData"] = function (request, data, root) {
  var i8868 = root || request.c( 'ScratchData' )
  var i8869 = data
  request.r(i8869[0], i8869[1], 0, i8868, 'ScratchManager')
  i8868.scratchLimit = i8869[2]
  i8868.isComplete = !!i8869[3]
  return i8868
}

Deserializers["BD_ProgressHelper"] = function (request, data, root) {
  var i8870 = root || request.c( 'BD_ProgressHelper' )
  var i8871 = data
  request.r(i8871[0], i8871[1], 0, i8870, 'BD_Progress')
  request.r(i8871[2], i8871[3], 0, i8870, 'fadeSprite')
  i8870.fadeIn = !!i8871[4]
  return i8870
}

Deserializers["ActionOnTap"] = function (request, data, root) {
  var i8872 = root || request.c( 'ActionOnTap' )
  var i8873 = data
  i8872.OnTap = request.d('UnityEngine.Events.UnityEvent', i8873[0], i8872.OnTap)
  return i8872
}

Deserializers["BD_SpriteChange"] = function (request, data, root) {
  var i8874 = root || request.c( 'BD_SpriteChange' )
  var i8875 = data
  request.r(i8875[0], i8875[1], 0, i8874, 'BD')
  request.r(i8875[2], i8875[3], 0, i8874, 'SR')
  request.r(i8875[4], i8875[5], 0, i8874, 'Default')
  request.r(i8875[6], i8875[7], 0, i8874, 'Picked')
  i8874.resetOnRelease = !!i8875[8]
  return i8874
}

Deserializers["BD_AnimatorDrag"] = function (request, data, root) {
  var i8876 = root || request.c( 'BD_AnimatorDrag' )
  var i8877 = data
  request.r(i8877[0], i8877[1], 0, i8876, 'BD')
  request.r(i8877[2], i8877[3], 0, i8876, 'anim')
  request.r(i8877[4], i8877[5], 0, i8876, 'Source')
  i8876.Vibration = !!i8877[6]
  i8876.isCompletable = !!i8877[7]
  i8876.completionThreshold = i8877[8]
  i8876.OnComplete = request.d('UnityEngine.Events.UnityEvent', i8877[9], i8876.OnComplete)
  return i8876
}

Deserializers["PlaceItem"] = function (request, data, root) {
  var i8878 = root || request.c( 'PlaceItem' )
  var i8879 = data
  request.r(i8879[0], i8879[1], 0, i8878, 'thisDrag')
  request.r(i8879[2], i8879[3], 0, i8878, 'Target')
  request.r(i8879[4], i8879[5], 0, i8878, 'Clip')
  i8878.jumpOnPlace = !!i8879[6]
  i8878.jumpHeight = i8879[7]
  i8878.jumpDuration = i8879[8]
  i8878.settleDuration = i8879[9]
  i8878.isPlaced = !!i8879[10]
  i8878.isInsideCollider = !!i8879[11]
  i8878.OnPlaced = request.d('UnityEngine.Events.UnityEvent', i8879[12], i8878.OnPlaced)
  return i8878
}

Deserializers["BD_Audio"] = function (request, data, root) {
  var i8880 = root || request.c( 'BD_Audio' )
  var i8881 = data
  request.r(i8881[0], i8881[1], 0, i8880, 'BD')
  request.r(i8881[2], i8881[3], 0, i8880, 'Source')
  i8880.shouldRestart = !!i8881[4]
  i8880.startVol = i8881[5]
  i8880.targetVol = i8881[6]
  i8880.duration = i8881[7]
  i8880.startDelay = i8881[8]
  return i8880
}

Deserializers["Level1_HairAnim"] = function (request, data, root) {
  var i8882 = root || request.c( 'Level1_HairAnim' )
  var i8883 = data
  i8882.holdDuration = i8883[0]
  request.r(i8883[1], i8883[2], 0, i8882, 'targetSprite')
  i8882.onHoldComplete = request.d('UnityEngine.Events.UnityEvent', i8883[3], i8882.onHoldComplete)
  i8882.isHolding = !!i8883[4]
  request.r(i8883[5], i8883[6], 0, i8882, 'targetObj')
  request.r(i8883[7], i8883[8], 0, i8882, 'thisTool')
  request.r(i8883[9], i8883[10], 0, i8882, 'thisToolTip')
  var i8885 = i8883[11]
  var i8884 = []
  for(var i = 0; i < i8885.length; i += 2) {
  request.r(i8885[i + 0], i8885[i + 1], 2, i8884, '')
  }
  i8882.hairsAnim = i8884
  var i8887 = i8883[12]
  var i8886 = []
  for(var i = 0; i < i8887.length; i += 2) {
  request.r(i8887[i + 0], i8887[i + 1], 2, i8886, '')
  }
  i8882.hairsRend = i8886
  i8882.hairsRendFadeThreshold = i8883[13]
  request.r(i8883[14], i8883[15], 0, i8882, 'wetHairRend')
  request.r(i8883[16], i8883[17], 0, i8882, 'dryHairRend')
  request.r(i8883[18], i8883[19], 0, i8882, 'dryHairRendBack')
  i8882.hairAnimStopDuration = i8883[20]
  i8882.hairAnimResumeDuration = i8883[21]
  return i8882
}

Deserializers["SpriteButton"] = function (request, data, root) {
  var i8888 = root || request.c( 'SpriteButton' )
  var i8889 = data
  i8888.onClick = request.d('UnityEngine.Events.UnityEvent', i8889[0], i8888.onClick)
  request.r(i8889[1], i8889[2], 0, i8888, 'spriteRenderer')
  request.r(i8889[3], i8889[4], 0, i8888, 'normalSprite')
  request.r(i8889[5], i8889[6], 0, i8888, 'hoverSprite')
  request.r(i8889[7], i8889[8], 0, i8888, 'pressedSprite')
  i8888.hoverScale = i8889[9]
  i8888.pressScale = i8889[10]
  i8888.animationDuration = i8889[11]
  return i8888
}

Deserializers["DestroyObj"] = function (request, data, root) {
  var i8890 = root || request.c( 'DestroyObj' )
  var i8891 = data
  i8890.destroyDelay = i8891[0]
  return i8890
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Cubemap"] = function (request, data, root) {
  var i8892 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Cubemap' )
  var i8893 = data
  i8892.name = i8893[0]
  i8892.atlasId = i8893[1]
  i8892.mipmapCount = i8893[2]
  i8892.hdr = !!i8893[3]
  i8892.size = i8893[4]
  i8892.anisoLevel = i8893[5]
  i8892.filterMode = i8893[6]
  var i8895 = i8893[7]
  var i8894 = []
  for(var i = 0; i < i8895.length; i += 4) {
    i8894.push( UnityEngine.Rect.MinMaxRect(i8895[i + 0], i8895[i + 1], i8895[i + 2], i8895[i + 3]) );
  }
  i8892.rects = i8894
  i8892.wrapU = i8893[8]
  i8892.wrapV = i8893[9]
  return i8892
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i8898 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i8899 = data
  i8898.name = i8899[0]
  i8898.index = i8899[1]
  i8898.startup = !!i8899[2]
  return i8898
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i8900 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i8901 = data
  i8900.aspect = i8901[0]
  i8900.orthographic = !!i8901[1]
  i8900.orthographicSize = i8901[2]
  i8900.backgroundColor = new pc.Color(i8901[3], i8901[4], i8901[5], i8901[6])
  i8900.nearClipPlane = i8901[7]
  i8900.farClipPlane = i8901[8]
  i8900.fieldOfView = i8901[9]
  i8900.depth = i8901[10]
  i8900.clearFlags = i8901[11]
  i8900.cullingMask = i8901[12]
  i8900.rect = i8901[13]
  request.r(i8901[14], i8901[15], 0, i8900, 'targetTexture')
  i8900.usePhysicalProperties = !!i8901[16]
  i8900.focalLength = i8901[17]
  i8900.sensorSize = new pc.Vec2( i8901[18], i8901[19] )
  i8900.lensShift = new pc.Vec2( i8901[20], i8901[21] )
  i8900.gateFit = i8901[22]
  i8900.commandBufferCount = i8901[23]
  i8900.cameraType = i8901[24]
  i8900.enabled = !!i8901[25]
  return i8900
}

Deserializers["CameraController"] = function (request, data, root) {
  var i8902 = root || request.c( 'CameraController' )
  var i8903 = data
  request.r(i8903[0], i8903[1], 0, i8902, 'cam')
  i8902.defaultPosition = new pc.Vec3( i8903[2], i8903[3], i8903[4] )
  i8902.defaultSize = i8903[5]
  i8902.defaultFOV = i8903[6]
  i8902.defaultDuration = i8903[7]
  i8902.defaultEase = i8903[8]
  return i8902
}

Deserializers["MusicSource"] = function (request, data, root) {
  var i8904 = root || request.c( 'MusicSource' )
  var i8905 = data
  request.r(i8905[0], i8905[1], 0, i8904, 'source')
  return i8904
}

Deserializers["UI_Manager"] = function (request, data, root) {
  var i8906 = root || request.c( 'UI_Manager' )
  var i8907 = data
  i8906.levelCompleted = !!i8907[0]
  i8906.isPauseActive = !!i8907[1]
  i8906.loadIndex = i8907[2]
  request.r(i8907[3], i8907[4], 0, i8906, 'removeAdsButton')
  request.r(i8907[5], i8907[6], 0, i8906, 'pauseButton')
  request.r(i8907[7], i8907[8], 0, i8906, 'Fade_Img')
  request.r(i8907[9], i8907[10], 0, i8906, 'TopBarAnim')
  request.r(i8907[11], i8907[12], 0, i8906, 'MainPanel')
  request.r(i8907[13], i8907[14], 0, i8906, 'PausePanel')
  request.r(i8907[15], i8907[16], 0, i8906, 'PausePopUp')
  request.r(i8907[17], i8907[18], 0, i8906, 'PauseCanvasGroup')
  request.r(i8907[19], i8907[20], 0, i8906, 'RateUsPanel')
  request.r(i8907[21], i8907[22], 0, i8906, 'RateUsPopUp')
  request.r(i8907[23], i8907[24], 0, i8906, 'RemoveAdsPanel')
  request.r(i8907[25], i8907[26], 0, i8906, 'RemoveAdsPopUp')
  request.r(i8907[27], i8907[28], 0, i8906, 'RemoveAdsCanvasGroup')
  var i8909 = i8907[29]
  var i8908 = []
  for(var i = 0; i < i8909.length; i += 2) {
  request.r(i8909[i + 0], i8909[i + 1], 2, i8908, '')
  }
  i8906.RemoveAdsAnims = i8908
  request.r(i8907[30], i8907[31], 0, i8906, 'CompletePanel')
  request.r(i8907[32], i8907[33], 0, i8906, 'LevelIcon')
  request.r(i8907[34], i8907[35], 0, i8906, 'CompleteParticles')
  request.r(i8907[36], i8907[37], 0, i8906, 'progressBar')
  request.r(i8907[38], i8907[39], 0, i8906, 'progressText')
  request.r(i8907[40], i8907[41], 0, i8906, 'toolIcon1')
  request.r(i8907[42], i8907[43], 0, i8906, 'toolIcon2')
  request.r(i8907[44], i8907[45], 0, i8906, 'toolIcon3')
  request.r(i8907[46], i8907[47], 0, i8906, 'target1')
  request.r(i8907[48], i8907[49], 0, i8906, 'target2')
  i8906.toolMoveDuration = i8907[50]
  i8906.currentIndex = i8907[51]
  var i8911 = i8907[52]
  var i8910 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Sprite')))
  for(var i = 0; i < i8911.length; i += 2) {
  request.r(i8911[i + 0], i8911[i + 1], 1, i8910, '')
  }
  i8906.allTools = i8910
  request.r(i8907[53], i8907[54], 0, i8906, 'clockProgress')
  request.r(i8907[55], i8907[56], 0, i8906, 'clockProgressFill')
  request.r(i8907[57], i8907[58], 0, i8906, 'clockAudio')
  i8906.moveDistance = i8907[59]
  i8906.animationDuration = i8907[60]
  i8906.greyBgChildName = i8907[61]
  i8906.pushOffset = i8907[62]
  return i8906
}

Deserializers["GameManagerPlayable"] = function (request, data, root) {
  var i8912 = root || request.c( 'GameManagerPlayable' )
  var i8913 = data
  request.r(i8913[0], i8913[1], 0, i8912, 'DefaultMat')
  request.r(i8913[2], i8913[3], 0, i8912, 'BG_Music')
  request.r(i8913[4], i8913[5], 0, i8912, 'restoreEffectShader')
  request.r(i8913[6], i8913[7], 0, i8912, 'stickerEffectShader')
  i8912.isComplete = !!i8913[8]
  i8912.isPaused = !!i8913[9]
  request.r(i8913[10], i8913[11], 0, i8912, 'currentLevel')
  return i8912
}

Deserializers["AudioController"] = function (request, data, root) {
  var i8914 = root || request.c( 'AudioController' )
  var i8915 = data
  request.r(i8915[0], i8915[1], 0, i8914, 'MainMixer')
  request.r(i8915[2], i8915[3], 0, i8914, 'UiClick')
  request.r(i8915[4], i8915[5], 0, i8914, 'UiClickSource')
  var i8917 = i8915[6]
  var i8916 = []
  for(var i = 0; i < i8917.length; i += 2) {
  request.r(i8917[i + 0], i8917[i + 1], 2, i8916, '')
  }
  i8914.SfxSources = i8916
  var i8919 = i8915[7]
  var i8918 = []
  for(var i = 0; i < i8919.length; i += 2) {
  request.r(i8919[i + 0], i8919[i + 1], 2, i8918, '')
  }
  i8914.AllClips = i8918
  return i8914
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i8922 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i8923 = data
  i8922.pivot = new pc.Vec2( i8923[0], i8923[1] )
  i8922.anchorMin = new pc.Vec2( i8923[2], i8923[3] )
  i8922.anchorMax = new pc.Vec2( i8923[4], i8923[5] )
  i8922.sizeDelta = new pc.Vec2( i8923[6], i8923[7] )
  i8922.anchoredPosition3D = new pc.Vec3( i8923[8], i8923[9], i8923[10] )
  i8922.rotation = new pc.Quat(i8923[11], i8923[12], i8923[13], i8923[14])
  i8922.scale = new pc.Vec3( i8923[15], i8923[16], i8923[17] )
  return i8922
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i8924 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i8925 = data
  i8924.planeDistance = i8925[0]
  i8924.referencePixelsPerUnit = i8925[1]
  i8924.isFallbackOverlay = !!i8925[2]
  i8924.renderMode = i8925[3]
  i8924.renderOrder = i8925[4]
  i8924.sortingLayerName = i8925[5]
  i8924.sortingOrder = i8925[6]
  i8924.scaleFactor = i8925[7]
  request.r(i8925[8], i8925[9], 0, i8924, 'worldCamera')
  i8924.overrideSorting = !!i8925[10]
  i8924.pixelPerfect = !!i8925[11]
  i8924.targetDisplay = i8925[12]
  i8924.overridePixelPerfect = !!i8925[13]
  i8924.enabled = !!i8925[14]
  return i8924
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i8926 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i8927 = data
  i8926.m_UiScaleMode = i8927[0]
  i8926.m_ReferencePixelsPerUnit = i8927[1]
  i8926.m_ScaleFactor = i8927[2]
  i8926.m_ReferenceResolution = new pc.Vec2( i8927[3], i8927[4] )
  i8926.m_ScreenMatchMode = i8927[5]
  i8926.m_MatchWidthOrHeight = i8927[6]
  i8926.m_PhysicalUnit = i8927[7]
  i8926.m_FallbackScreenDPI = i8927[8]
  i8926.m_DefaultSpriteDPI = i8927[9]
  i8926.m_DynamicPixelsPerUnit = i8927[10]
  i8926.m_PresetInfoIsWorld = !!i8927[11]
  return i8926
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i8928 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i8929 = data
  i8928.m_IgnoreReversedGraphics = !!i8929[0]
  i8928.m_BlockingObjects = i8929[1]
  i8928.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i8929[2] )
  return i8928
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i8930 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i8931 = data
  i8930.cullTransparentMesh = !!i8931[0]
  return i8930
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i8932 = root || request.c( 'UnityEngine.UI.Image' )
  var i8933 = data
  request.r(i8933[0], i8933[1], 0, i8932, 'm_Sprite')
  i8932.m_Type = i8933[2]
  i8932.m_PreserveAspect = !!i8933[3]
  i8932.m_FillCenter = !!i8933[4]
  i8932.m_FillMethod = i8933[5]
  i8932.m_FillAmount = i8933[6]
  i8932.m_FillClockwise = !!i8933[7]
  i8932.m_FillOrigin = i8933[8]
  i8932.m_UseSpriteMesh = !!i8933[9]
  i8932.m_PixelsPerUnitMultiplier = i8933[10]
  request.r(i8933[11], i8933[12], 0, i8932, 'm_Material')
  i8932.m_Maskable = !!i8933[13]
  i8932.m_Color = new pc.Color(i8933[14], i8933[15], i8933[16], i8933[17])
  i8932.m_RaycastTarget = !!i8933[18]
  i8932.m_RaycastPadding = new pc.Vec4( i8933[19], i8933[20], i8933[21], i8933[22] )
  return i8932
}

Deserializers["UnityEngine.UI.Text"] = function (request, data, root) {
  var i8934 = root || request.c( 'UnityEngine.UI.Text' )
  var i8935 = data
  i8934.m_FontData = request.d('UnityEngine.UI.FontData', i8935[0], i8934.m_FontData)
  i8934.m_Text = i8935[1]
  request.r(i8935[2], i8935[3], 0, i8934, 'm_Material')
  i8934.m_Maskable = !!i8935[4]
  i8934.m_Color = new pc.Color(i8935[5], i8935[6], i8935[7], i8935[8])
  i8934.m_RaycastTarget = !!i8935[9]
  i8934.m_RaycastPadding = new pc.Vec4( i8935[10], i8935[11], i8935[12], i8935[13] )
  return i8934
}

Deserializers["UnityEngine.UI.FontData"] = function (request, data, root) {
  var i8936 = root || request.c( 'UnityEngine.UI.FontData' )
  var i8937 = data
  request.r(i8937[0], i8937[1], 0, i8936, 'm_Font')
  i8936.m_FontSize = i8937[2]
  i8936.m_FontStyle = i8937[3]
  i8936.m_BestFit = !!i8937[4]
  i8936.m_MinSize = i8937[5]
  i8936.m_MaxSize = i8937[6]
  i8936.m_Alignment = i8937[7]
  i8936.m_AlignByGeometry = !!i8937[8]
  i8936.m_RichText = !!i8937[9]
  i8936.m_HorizontalOverflow = i8937[10]
  i8936.m_VerticalOverflow = i8937[11]
  i8936.m_LineSpacing = i8937[12]
  return i8936
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i8938 = root || request.c( 'UnityEngine.UI.Button' )
  var i8939 = data
  i8938.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i8939[0], i8938.m_OnClick)
  i8938.m_Navigation = request.d('UnityEngine.UI.Navigation', i8939[1], i8938.m_Navigation)
  i8938.m_Transition = i8939[2]
  i8938.m_Colors = request.d('UnityEngine.UI.ColorBlock', i8939[3], i8938.m_Colors)
  i8938.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i8939[4], i8938.m_SpriteState)
  i8938.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i8939[5], i8938.m_AnimationTriggers)
  i8938.m_Interactable = !!i8939[6]
  request.r(i8939[7], i8939[8], 0, i8938, 'm_TargetGraphic')
  return i8938
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i8940 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i8941 = data
  i8940.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i8941[0], i8940.m_PersistentCalls)
  return i8940
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i8942 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i8943 = data
  i8942.m_Mode = i8943[0]
  i8942.m_WrapAround = !!i8943[1]
  request.r(i8943[2], i8943[3], 0, i8942, 'm_SelectOnUp')
  request.r(i8943[4], i8943[5], 0, i8942, 'm_SelectOnDown')
  request.r(i8943[6], i8943[7], 0, i8942, 'm_SelectOnLeft')
  request.r(i8943[8], i8943[9], 0, i8942, 'm_SelectOnRight')
  return i8942
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i8944 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i8945 = data
  i8944.m_NormalColor = new pc.Color(i8945[0], i8945[1], i8945[2], i8945[3])
  i8944.m_HighlightedColor = new pc.Color(i8945[4], i8945[5], i8945[6], i8945[7])
  i8944.m_PressedColor = new pc.Color(i8945[8], i8945[9], i8945[10], i8945[11])
  i8944.m_SelectedColor = new pc.Color(i8945[12], i8945[13], i8945[14], i8945[15])
  i8944.m_DisabledColor = new pc.Color(i8945[16], i8945[17], i8945[18], i8945[19])
  i8944.m_ColorMultiplier = i8945[20]
  i8944.m_FadeDuration = i8945[21]
  return i8944
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i8946 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i8947 = data
  request.r(i8947[0], i8947[1], 0, i8946, 'm_HighlightedSprite')
  request.r(i8947[2], i8947[3], 0, i8946, 'm_PressedSprite')
  request.r(i8947[4], i8947[5], 0, i8946, 'm_SelectedSprite')
  request.r(i8947[6], i8947[7], 0, i8946, 'm_DisabledSprite')
  return i8946
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i8948 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i8949 = data
  i8948.m_NormalTrigger = i8949[0]
  i8948.m_HighlightedTrigger = i8949[1]
  i8948.m_PressedTrigger = i8949[2]
  i8948.m_SelectedTrigger = i8949[3]
  i8948.m_DisabledTrigger = i8949[4]
  return i8948
}

Deserializers["PlayableHudRuntime"] = function (request, data, root) {
  var i8950 = root || request.c( 'PlayableHudRuntime' )
  var i8951 = data
  return i8950
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i8952 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i8953 = data
  request.r(i8953[0], i8953[1], 0, i8952, 'm_FirstSelected')
  i8952.m_sendNavigationEvents = !!i8953[2]
  i8952.m_DragThreshold = i8953[3]
  return i8952
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i8954 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i8955 = data
  i8954.m_HorizontalAxis = i8955[0]
  i8954.m_VerticalAxis = i8955[1]
  i8954.m_SubmitButton = i8955[2]
  i8954.m_CancelButton = i8955[3]
  i8954.m_InputActionsPerSecond = i8955[4]
  i8954.m_RepeatDelay = i8955[5]
  i8954.m_ForceModuleActive = !!i8955[6]
  i8954.m_SendPointerHoverToParent = !!i8955[7]
  return i8954
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i8956 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i8957 = data
  i8956.ambientIntensity = i8957[0]
  i8956.reflectionIntensity = i8957[1]
  i8956.ambientMode = i8957[2]
  i8956.ambientLight = new pc.Color(i8957[3], i8957[4], i8957[5], i8957[6])
  i8956.ambientSkyColor = new pc.Color(i8957[7], i8957[8], i8957[9], i8957[10])
  i8956.ambientGroundColor = new pc.Color(i8957[11], i8957[12], i8957[13], i8957[14])
  i8956.ambientEquatorColor = new pc.Color(i8957[15], i8957[16], i8957[17], i8957[18])
  i8956.fogColor = new pc.Color(i8957[19], i8957[20], i8957[21], i8957[22])
  i8956.fogEndDistance = i8957[23]
  i8956.fogStartDistance = i8957[24]
  i8956.fogDensity = i8957[25]
  i8956.fog = !!i8957[26]
  request.r(i8957[27], i8957[28], 0, i8956, 'skybox')
  i8956.fogMode = i8957[29]
  var i8959 = i8957[30]
  var i8958 = []
  for(var i = 0; i < i8959.length; i += 1) {
    i8958.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i8959[i + 0]) );
  }
  i8956.lightmaps = i8958
  i8956.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i8957[31], i8956.lightProbes)
  i8956.lightmapsMode = i8957[32]
  i8956.mixedBakeMode = i8957[33]
  i8956.environmentLightingMode = i8957[34]
  i8956.ambientProbe = new pc.SphericalHarmonicsL2(i8957[35])
  request.r(i8957[36], i8957[37], 0, i8956, 'customReflection')
  request.r(i8957[38], i8957[39], 0, i8956, 'defaultReflection')
  i8956.defaultReflectionMode = i8957[40]
  i8956.defaultReflectionResolution = i8957[41]
  i8956.sunLightObjectId = i8957[42]
  i8956.pixelLightCount = i8957[43]
  i8956.defaultReflectionHDR = !!i8957[44]
  i8956.hasLightDataAsset = !!i8957[45]
  i8956.hasManualGenerate = !!i8957[46]
  return i8956
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i8962 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i8963 = data
  request.r(i8963[0], i8963[1], 0, i8962, 'lightmapColor')
  request.r(i8963[2], i8963[3], 0, i8962, 'lightmapDirection')
  request.r(i8963[4], i8963[5], 0, i8962, 'shadowMask')
  return i8962
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i8964 = root || new UnityEngine.LightProbes()
  var i8965 = data
  return i8964
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i8970 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i8971 = data
  var i8973 = i8971[0]
  var i8972 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i8973.length; i += 1) {
    i8972.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i8973[i + 0]));
  }
  i8970.ShaderCompilationErrors = i8972
  i8970.name = i8971[1]
  i8970.guid = i8971[2]
  var i8975 = i8971[3]
  var i8974 = []
  for(var i = 0; i < i8975.length; i += 1) {
    i8974.push( i8975[i + 0] );
  }
  i8970.shaderDefinedKeywords = i8974
  var i8977 = i8971[4]
  var i8976 = []
  for(var i = 0; i < i8977.length; i += 1) {
    i8976.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i8977[i + 0]) );
  }
  i8970.passes = i8976
  var i8979 = i8971[5]
  var i8978 = []
  for(var i = 0; i < i8979.length; i += 1) {
    i8978.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i8979[i + 0]) );
  }
  i8970.usePasses = i8978
  var i8981 = i8971[6]
  var i8980 = []
  for(var i = 0; i < i8981.length; i += 1) {
    i8980.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i8981[i + 0]) );
  }
  i8970.defaultParameterValues = i8980
  request.r(i8971[7], i8971[8], 0, i8970, 'unityFallbackShader')
  i8970.readDepth = !!i8971[9]
  i8970.hasDepthOnlyPass = !!i8971[10]
  i8970.isCreatedByShaderGraph = !!i8971[11]
  i8970.disableBatching = !!i8971[12]
  i8970.compiled = !!i8971[13]
  return i8970
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i8984 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i8985 = data
  i8984.shaderName = i8985[0]
  i8984.errorMessage = i8985[1]
  return i8984
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i8990 = root || new pc.UnityShaderPass()
  var i8991 = data
  i8990.id = i8991[0]
  i8990.subShaderIndex = i8991[1]
  i8990.name = i8991[2]
  i8990.passType = i8991[3]
  i8990.grabPassTextureName = i8991[4]
  i8990.usePass = !!i8991[5]
  i8990.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i8991[6], i8990.zTest)
  i8990.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i8991[7], i8990.zWrite)
  i8990.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i8991[8], i8990.culling)
  i8990.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i8991[9], i8990.blending)
  i8990.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i8991[10], i8990.alphaBlending)
  i8990.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i8991[11], i8990.colorWriteMask)
  i8990.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i8991[12], i8990.offsetUnits)
  i8990.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i8991[13], i8990.offsetFactor)
  i8990.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i8991[14], i8990.stencilRef)
  i8990.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i8991[15], i8990.stencilReadMask)
  i8990.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i8991[16], i8990.stencilWriteMask)
  i8990.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i8991[17], i8990.stencilOp)
  i8990.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i8991[18], i8990.stencilOpFront)
  i8990.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i8991[19], i8990.stencilOpBack)
  var i8993 = i8991[20]
  var i8992 = []
  for(var i = 0; i < i8993.length; i += 1) {
    i8992.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i8993[i + 0]) );
  }
  i8990.tags = i8992
  var i8995 = i8991[21]
  var i8994 = []
  for(var i = 0; i < i8995.length; i += 1) {
    i8994.push( i8995[i + 0] );
  }
  i8990.passDefinedKeywords = i8994
  var i8997 = i8991[22]
  var i8996 = []
  for(var i = 0; i < i8997.length; i += 1) {
    i8996.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i8997[i + 0]) );
  }
  i8990.passDefinedKeywordGroups = i8996
  var i8999 = i8991[23]
  var i8998 = []
  for(var i = 0; i < i8999.length; i += 1) {
    i8998.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i8999[i + 0]) );
  }
  i8990.variants = i8998
  var i9001 = i8991[24]
  var i9000 = []
  for(var i = 0; i < i9001.length; i += 1) {
    i9000.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i9001[i + 0]) );
  }
  i8990.excludedVariants = i9000
  i8990.hasDepthReader = !!i8991[25]
  return i8990
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i9002 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i9003 = data
  i9002.val = i9003[0]
  i9002.name = i9003[1]
  return i9002
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i9004 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i9005 = data
  i9004.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i9005[0], i9004.src)
  i9004.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i9005[1], i9004.dst)
  i9004.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i9005[2], i9004.op)
  return i9004
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i9006 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i9007 = data
  i9006.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i9007[0], i9006.pass)
  i9006.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i9007[1], i9006.fail)
  i9006.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i9007[2], i9006.zFail)
  i9006.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i9007[3], i9006.comp)
  return i9006
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i9010 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i9011 = data
  i9010.name = i9011[0]
  i9010.value = i9011[1]
  return i9010
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i9014 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i9015 = data
  var i9017 = i9015[0]
  var i9016 = []
  for(var i = 0; i < i9017.length; i += 1) {
    i9016.push( i9017[i + 0] );
  }
  i9014.keywords = i9016
  i9014.hasDiscard = !!i9015[1]
  return i9014
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i9020 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i9021 = data
  i9020.passId = i9021[0]
  i9020.subShaderIndex = i9021[1]
  var i9023 = i9021[2]
  var i9022 = []
  for(var i = 0; i < i9023.length; i += 1) {
    i9022.push( i9023[i + 0] );
  }
  i9020.keywords = i9022
  i9020.vertexProgram = i9021[3]
  i9020.fragmentProgram = i9021[4]
  i9020.exportedForWebGl2 = !!i9021[5]
  i9020.readDepth = !!i9021[6]
  return i9020
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i9026 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i9027 = data
  request.r(i9027[0], i9027[1], 0, i9026, 'shader')
  i9026.pass = i9027[2]
  return i9026
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i9030 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i9031 = data
  i9030.name = i9031[0]
  i9030.type = i9031[1]
  i9030.value = new pc.Vec4( i9031[2], i9031[3], i9031[4], i9031[5] )
  i9030.textureValue = i9031[6]
  i9030.shaderPropertyFlag = i9031[7]
  return i9030
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i9032 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i9033 = data
  i9032.name = i9033[0]
  request.r(i9033[1], i9033[2], 0, i9032, 'texture')
  i9032.aabb = i9033[3]
  i9032.vertices = i9033[4]
  i9032.triangles = i9033[5]
  i9032.textureRect = UnityEngine.Rect.MinMaxRect(i9033[6], i9033[7], i9033[8], i9033[9])
  i9032.packedRect = UnityEngine.Rect.MinMaxRect(i9033[10], i9033[11], i9033[12], i9033[13])
  i9032.border = new pc.Vec4( i9033[14], i9033[15], i9033[16], i9033[17] )
  i9032.transparency = i9033[18]
  i9032.bounds = i9033[19]
  i9032.pixelsPerUnit = i9033[20]
  i9032.textureWidth = i9033[21]
  i9032.textureHeight = i9033[22]
  i9032.nativeSize = new pc.Vec2( i9033[23], i9033[24] )
  i9032.pivot = new pc.Vec2( i9033[25], i9033[26] )
  i9032.textureRectOffset = new pc.Vec2( i9033[27], i9033[28] )
  return i9032
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i9034 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i9035 = data
  i9034.name = i9035[0]
  return i9034
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip"] = function (request, data, root) {
  var i9036 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip' )
  var i9037 = data
  i9036.name = i9037[0]
  i9036.wrapMode = i9037[1]
  i9036.isLooping = !!i9037[2]
  i9036.length = i9037[3]
  var i9039 = i9037[4]
  var i9038 = []
  for(var i = 0; i < i9039.length; i += 1) {
    i9038.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve', i9039[i + 0]) );
  }
  i9036.curves = i9038
  var i9041 = i9037[5]
  var i9040 = []
  for(var i = 0; i < i9041.length; i += 1) {
    i9040.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent', i9041[i + 0]) );
  }
  i9036.events = i9040
  i9036.halfPrecision = !!i9037[6]
  i9036._frameRate = i9037[7]
  i9036.localBounds = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds', i9037[8], i9036.localBounds)
  i9036.hasMuscleCurves = !!i9037[9]
  var i9043 = i9037[10]
  var i9042 = []
  for(var i = 0; i < i9043.length; i += 1) {
    i9042.push( i9043[i + 0] );
  }
  i9036.clipMuscleConstant = i9042
  i9036.clipBindingConstant = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant', i9037[11], i9036.clipBindingConstant)
  return i9036
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve"] = function (request, data, root) {
  var i9046 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve' )
  var i9047 = data
  i9046.path = i9047[0]
  i9046.hash = i9047[1]
  i9046.componentType = i9047[2]
  i9046.property = i9047[3]
  i9046.keys = i9047[4]
  var i9049 = i9047[5]
  var i9048 = []
  for(var i = 0; i < i9049.length; i += 1) {
    i9048.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey', i9049[i + 0]) );
  }
  i9046.objectReferenceKeys = i9048
  return i9046
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey"] = function (request, data, root) {
  var i9052 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey' )
  var i9053 = data
  i9052.time = i9053[0]
  request.r(i9053[1], i9053[2], 0, i9052, 'value')
  return i9052
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent"] = function (request, data, root) {
  var i9056 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent' )
  var i9057 = data
  i9056.functionName = i9057[0]
  i9056.floatParameter = i9057[1]
  i9056.intParameter = i9057[2]
  i9056.stringParameter = i9057[3]
  request.r(i9057[4], i9057[5], 0, i9056, 'objectReferenceParameter')
  i9056.time = i9057[6]
  return i9056
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds"] = function (request, data, root) {
  var i9058 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds' )
  var i9059 = data
  i9058.center = new pc.Vec3( i9059[0], i9059[1], i9059[2] )
  i9058.extends = new pc.Vec3( i9059[3], i9059[4], i9059[5] )
  return i9058
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant"] = function (request, data, root) {
  var i9062 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant' )
  var i9063 = data
  var i9065 = i9063[0]
  var i9064 = []
  for(var i = 0; i < i9065.length; i += 1) {
    i9064.push( i9065[i + 0] );
  }
  i9062.genericBindings = i9064
  var i9067 = i9063[1]
  var i9066 = []
  for(var i = 0; i < i9067.length; i += 1) {
    i9066.push( i9067[i + 0] );
  }
  i9062.pptrCurveMapping = i9066
  return i9062
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i9068 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i9069 = data
  i9068.name = i9069[0]
  i9068.ascent = i9069[1]
  i9068.originalLineHeight = i9069[2]
  i9068.fontSize = i9069[3]
  var i9071 = i9069[4]
  var i9070 = []
  for(var i = 0; i < i9071.length; i += 1) {
    i9070.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i9071[i + 0]) );
  }
  i9068.characterInfo = i9070
  request.r(i9069[5], i9069[6], 0, i9068, 'texture')
  i9068.originalFontSize = i9069[7]
  return i9068
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i9074 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i9075 = data
  i9074.index = i9075[0]
  i9074.advance = i9075[1]
  i9074.bearing = i9075[2]
  i9074.glyphWidth = i9075[3]
  i9074.glyphHeight = i9075[4]
  i9074.minX = i9075[5]
  i9074.maxX = i9075[6]
  i9074.minY = i9075[7]
  i9074.maxY = i9075[8]
  i9074.uvBottomLeftX = i9075[9]
  i9074.uvBottomLeftY = i9075[10]
  i9074.uvBottomRightX = i9075[11]
  i9074.uvBottomRightY = i9075[12]
  i9074.uvTopLeftX = i9075[13]
  i9074.uvTopLeftY = i9075[14]
  i9074.uvTopRightX = i9075[15]
  i9074.uvTopRightY = i9075[16]
  return i9074
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController"] = function (request, data, root) {
  var i9076 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController' )
  var i9077 = data
  i9076.name = i9077[0]
  var i9079 = i9077[1]
  var i9078 = []
  for(var i = 0; i < i9079.length; i += 1) {
    i9078.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer', i9079[i + 0]) );
  }
  i9076.layers = i9078
  var i9081 = i9077[2]
  var i9080 = []
  for(var i = 0; i < i9081.length; i += 1) {
    i9080.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter', i9081[i + 0]) );
  }
  i9076.parameters = i9080
  i9076.animationClips = i9077[3]
  i9076.avatarUnsupported = i9077[4]
  return i9076
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer"] = function (request, data, root) {
  var i9084 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer' )
  var i9085 = data
  i9084.name = i9085[0]
  i9084.defaultWeight = i9085[1]
  i9084.blendingMode = i9085[2]
  i9084.avatarMask = i9085[3]
  i9084.syncedLayerIndex = i9085[4]
  i9084.syncedLayerAffectsTiming = !!i9085[5]
  i9084.syncedLayers = i9085[6]
  i9084.stateMachine = request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i9085[7], i9084.stateMachine)
  return i9084
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine"] = function (request, data, root) {
  var i9086 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine' )
  var i9087 = data
  i9086.id = i9087[0]
  i9086.name = i9087[1]
  i9086.path = i9087[2]
  var i9089 = i9087[3]
  var i9088 = []
  for(var i = 0; i < i9089.length; i += 1) {
    i9088.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState', i9089[i + 0]) );
  }
  i9086.states = i9088
  var i9091 = i9087[4]
  var i9090 = []
  for(var i = 0; i < i9091.length; i += 1) {
    i9090.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i9091[i + 0]) );
  }
  i9086.machines = i9090
  var i9093 = i9087[5]
  var i9092 = []
  for(var i = 0; i < i9093.length; i += 1) {
    i9092.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i9093[i + 0]) );
  }
  i9086.entryStateTransitions = i9092
  var i9095 = i9087[6]
  var i9094 = []
  for(var i = 0; i < i9095.length; i += 1) {
    i9094.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i9095[i + 0]) );
  }
  i9086.exitStateTransitions = i9094
  var i9097 = i9087[7]
  var i9096 = []
  for(var i = 0; i < i9097.length; i += 1) {
    i9096.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i9097[i + 0]) );
  }
  i9086.anyStateTransitions = i9096
  i9086.defaultStateId = i9087[8]
  return i9086
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState"] = function (request, data, root) {
  var i9100 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState' )
  var i9101 = data
  i9100.id = i9101[0]
  i9100.name = i9101[1]
  i9100.cycleOffset = i9101[2]
  i9100.cycleOffsetParameter = i9101[3]
  i9100.cycleOffsetParameterActive = !!i9101[4]
  i9100.mirror = !!i9101[5]
  i9100.mirrorParameter = i9101[6]
  i9100.mirrorParameterActive = !!i9101[7]
  i9100.motionId = i9101[8]
  i9100.nameHash = i9101[9]
  i9100.fullPathHash = i9101[10]
  i9100.speed = i9101[11]
  i9100.speedParameter = i9101[12]
  i9100.speedParameterActive = !!i9101[13]
  i9100.tag = i9101[14]
  i9100.tagHash = i9101[15]
  i9100.writeDefaultValues = !!i9101[16]
  var i9103 = i9101[17]
  var i9102 = []
  for(var i = 0; i < i9103.length; i += 2) {
  request.r(i9103[i + 0], i9103[i + 1], 2, i9102, '')
  }
  i9100.behaviours = i9102
  var i9105 = i9101[18]
  var i9104 = []
  for(var i = 0; i < i9105.length; i += 1) {
    i9104.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i9105[i + 0]) );
  }
  i9100.transitions = i9104
  return i9100
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition"] = function (request, data, root) {
  var i9110 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition' )
  var i9111 = data
  i9110.fullPath = i9111[0]
  i9110.canTransitionToSelf = !!i9111[1]
  i9110.duration = i9111[2]
  i9110.exitTime = i9111[3]
  i9110.hasExitTime = !!i9111[4]
  i9110.hasFixedDuration = !!i9111[5]
  i9110.interruptionSource = i9111[6]
  i9110.offset = i9111[7]
  i9110.orderedInterruption = !!i9111[8]
  i9110.destinationStateId = i9111[9]
  i9110.isExit = !!i9111[10]
  i9110.mute = !!i9111[11]
  i9110.solo = !!i9111[12]
  var i9113 = i9111[13]
  var i9112 = []
  for(var i = 0; i < i9113.length; i += 1) {
    i9112.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i9113[i + 0]) );
  }
  i9110.conditions = i9112
  return i9110
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition"] = function (request, data, root) {
  var i9118 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition' )
  var i9119 = data
  i9118.destinationStateId = i9119[0]
  i9118.isExit = !!i9119[1]
  i9118.mute = !!i9119[2]
  i9118.solo = !!i9119[3]
  var i9121 = i9119[4]
  var i9120 = []
  for(var i = 0; i < i9121.length; i += 1) {
    i9120.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i9121[i + 0]) );
  }
  i9118.conditions = i9120
  return i9118
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition"] = function (request, data, root) {
  var i9124 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition' )
  var i9125 = data
  i9124.mode = i9125[0]
  i9124.parameter = i9125[1]
  i9124.threshold = i9125[2]
  return i9124
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter"] = function (request, data, root) {
  var i9128 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter' )
  var i9129 = data
  i9128.defaultBool = !!i9129[0]
  i9128.defaultFloat = i9129[1]
  i9128.defaultInt = i9129[2]
  i9128.name = i9129[3]
  i9128.nameHash = i9129[4]
  i9128.type = i9129[5]
  return i9128
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i9130 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i9131 = data
  i9130.useSafeMode = !!i9131[0]
  i9130.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i9131[1], i9130.safeModeOptions)
  i9130.timeScale = i9131[2]
  i9130.unscaledTimeScale = i9131[3]
  i9130.useSmoothDeltaTime = !!i9131[4]
  i9130.maxSmoothUnscaledTime = i9131[5]
  i9130.rewindCallbackMode = i9131[6]
  i9130.showUnityEditorReport = !!i9131[7]
  i9130.logBehaviour = i9131[8]
  i9130.drawGizmos = !!i9131[9]
  i9130.defaultRecyclable = !!i9131[10]
  i9130.defaultAutoPlay = i9131[11]
  i9130.defaultUpdateType = i9131[12]
  i9130.defaultTimeScaleIndependent = !!i9131[13]
  i9130.defaultEaseType = i9131[14]
  i9130.defaultEaseOvershootOrAmplitude = i9131[15]
  i9130.defaultEasePeriod = i9131[16]
  i9130.defaultAutoKill = !!i9131[17]
  i9130.defaultLoopType = i9131[18]
  i9130.debugMode = !!i9131[19]
  i9130.debugStoreTargetId = !!i9131[20]
  i9130.showPreviewPanel = !!i9131[21]
  i9130.storeSettingsLocation = i9131[22]
  i9130.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i9131[23], i9130.modules)
  i9130.createASMDEF = !!i9131[24]
  i9130.showPlayingTweens = !!i9131[25]
  i9130.showPausedTweens = !!i9131[26]
  return i9130
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i9132 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i9133 = data
  i9132.logBehaviour = i9133[0]
  i9132.nestedTweenFailureBehaviour = i9133[1]
  return i9132
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i9134 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i9135 = data
  i9134.showPanel = !!i9135[0]
  i9134.audioEnabled = !!i9135[1]
  i9134.physicsEnabled = !!i9135[2]
  i9134.physics2DEnabled = !!i9135[3]
  i9134.spriteEnabled = !!i9135[4]
  i9134.uiEnabled = !!i9135[5]
  i9134.textMeshProEnabled = !!i9135[6]
  i9134.tk2DEnabled = !!i9135[7]
  i9134.deAudioEnabled = !!i9135[8]
  i9134.deUnityExtendedEnabled = !!i9135[9]
  i9134.epoOutlineEnabled = !!i9135[10]
  return i9134
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i9136 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i9137 = data
  var i9139 = i9137[0]
  var i9138 = []
  for(var i = 0; i < i9139.length; i += 1) {
    i9138.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i9139[i + 0]) );
  }
  i9136.files = i9138
  i9136.componentToPrefabIds = i9137[1]
  return i9136
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i9142 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i9143 = data
  i9142.path = i9143[0]
  request.r(i9143[1], i9143[2], 0, i9142, 'unityObject')
  return i9142
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i9144 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i9145 = data
  var i9147 = i9145[0]
  var i9146 = []
  for(var i = 0; i < i9147.length; i += 1) {
    i9146.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i9147[i + 0]) );
  }
  i9144.scriptsExecutionOrder = i9146
  var i9149 = i9145[1]
  var i9148 = []
  for(var i = 0; i < i9149.length; i += 1) {
    i9148.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i9149[i + 0]) );
  }
  i9144.sortingLayers = i9148
  var i9151 = i9145[2]
  var i9150 = []
  for(var i = 0; i < i9151.length; i += 1) {
    i9150.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i9151[i + 0]) );
  }
  i9144.cullingLayers = i9150
  i9144.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i9145[3], i9144.timeSettings)
  i9144.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i9145[4], i9144.physicsSettings)
  i9144.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i9145[5], i9144.physics2DSettings)
  i9144.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i9145[6], i9144.qualitySettings)
  i9144.enableRealtimeShadows = !!i9145[7]
  i9144.enableAutoInstancing = !!i9145[8]
  i9144.enableStaticBatching = !!i9145[9]
  i9144.enableDynamicBatching = !!i9145[10]
  i9144.usePreservativeDynamicBatching = !!i9145[11]
  i9144.lightmapEncodingQuality = i9145[12]
  i9144.desiredColorSpace = i9145[13]
  var i9153 = i9145[14]
  var i9152 = []
  for(var i = 0; i < i9153.length; i += 1) {
    i9152.push( i9153[i + 0] );
  }
  i9144.allTags = i9152
  return i9144
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i9156 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i9157 = data
  i9156.name = i9157[0]
  i9156.value = i9157[1]
  return i9156
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i9160 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i9161 = data
  i9160.id = i9161[0]
  i9160.name = i9161[1]
  i9160.value = i9161[2]
  return i9160
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i9164 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i9165 = data
  i9164.id = i9165[0]
  i9164.name = i9165[1]
  return i9164
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i9166 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i9167 = data
  i9166.fixedDeltaTime = i9167[0]
  i9166.maximumDeltaTime = i9167[1]
  i9166.timeScale = i9167[2]
  i9166.maximumParticleTimestep = i9167[3]
  return i9166
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i9168 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i9169 = data
  i9168.gravity = new pc.Vec3( i9169[0], i9169[1], i9169[2] )
  i9168.defaultSolverIterations = i9169[3]
  i9168.bounceThreshold = i9169[4]
  i9168.autoSyncTransforms = !!i9169[5]
  i9168.autoSimulation = !!i9169[6]
  var i9171 = i9169[7]
  var i9170 = []
  for(var i = 0; i < i9171.length; i += 1) {
    i9170.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i9171[i + 0]) );
  }
  i9168.collisionMatrix = i9170
  return i9168
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i9174 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i9175 = data
  i9174.enabled = !!i9175[0]
  i9174.layerId = i9175[1]
  i9174.otherLayerId = i9175[2]
  return i9174
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i9176 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i9177 = data
  request.r(i9177[0], i9177[1], 0, i9176, 'material')
  i9176.gravity = new pc.Vec2( i9177[2], i9177[3] )
  i9176.positionIterations = i9177[4]
  i9176.velocityIterations = i9177[5]
  i9176.velocityThreshold = i9177[6]
  i9176.maxLinearCorrection = i9177[7]
  i9176.maxAngularCorrection = i9177[8]
  i9176.maxTranslationSpeed = i9177[9]
  i9176.maxRotationSpeed = i9177[10]
  i9176.baumgarteScale = i9177[11]
  i9176.baumgarteTOIScale = i9177[12]
  i9176.timeToSleep = i9177[13]
  i9176.linearSleepTolerance = i9177[14]
  i9176.angularSleepTolerance = i9177[15]
  i9176.defaultContactOffset = i9177[16]
  i9176.autoSimulation = !!i9177[17]
  i9176.queriesHitTriggers = !!i9177[18]
  i9176.queriesStartInColliders = !!i9177[19]
  i9176.callbacksOnDisable = !!i9177[20]
  i9176.reuseCollisionCallbacks = !!i9177[21]
  i9176.autoSyncTransforms = !!i9177[22]
  var i9179 = i9177[23]
  var i9178 = []
  for(var i = 0; i < i9179.length; i += 1) {
    i9178.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i9179[i + 0]) );
  }
  i9176.collisionMatrix = i9178
  return i9176
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i9182 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i9183 = data
  i9182.enabled = !!i9183[0]
  i9182.layerId = i9183[1]
  i9182.otherLayerId = i9183[2]
  return i9182
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i9184 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i9185 = data
  var i9187 = i9185[0]
  var i9186 = []
  for(var i = 0; i < i9187.length; i += 1) {
    i9186.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i9187[i + 0]) );
  }
  i9184.qualityLevels = i9186
  var i9189 = i9185[1]
  var i9188 = []
  for(var i = 0; i < i9189.length; i += 1) {
    i9188.push( i9189[i + 0] );
  }
  i9184.names = i9188
  i9184.shadows = i9185[2]
  i9184.anisotropicFiltering = i9185[3]
  i9184.antiAliasing = i9185[4]
  i9184.lodBias = i9185[5]
  i9184.shadowCascades = i9185[6]
  i9184.shadowDistance = i9185[7]
  i9184.shadowmaskMode = i9185[8]
  i9184.shadowProjection = i9185[9]
  i9184.shadowResolution = i9185[10]
  i9184.softParticles = !!i9185[11]
  i9184.softVegetation = !!i9185[12]
  i9184.activeColorSpace = i9185[13]
  i9184.desiredColorSpace = i9185[14]
  i9184.masterTextureLimit = i9185[15]
  i9184.maxQueuedFrames = i9185[16]
  i9184.particleRaycastBudget = i9185[17]
  i9184.pixelLightCount = i9185[18]
  i9184.realtimeReflectionProbes = !!i9185[19]
  i9184.shadowCascade2Split = i9185[20]
  i9184.shadowCascade4Split = new pc.Vec3( i9185[21], i9185[22], i9185[23] )
  i9184.streamingMipmapsActive = !!i9185[24]
  i9184.vSyncCount = i9185[25]
  i9184.asyncUploadBufferSize = i9185[26]
  i9184.asyncUploadTimeSlice = i9185[27]
  i9184.billboardsFaceCameraPosition = !!i9185[28]
  i9184.shadowNearPlaneOffset = i9185[29]
  i9184.streamingMipmapsMemoryBudget = i9185[30]
  i9184.maximumLODLevel = i9185[31]
  i9184.streamingMipmapsAddAllCameras = !!i9185[32]
  i9184.streamingMipmapsMaxLevelReduction = i9185[33]
  i9184.streamingMipmapsRenderersPerFrame = i9185[34]
  i9184.resolutionScalingFixedDPIFactor = i9185[35]
  i9184.streamingMipmapsMaxFileIORequests = i9185[36]
  i9184.currentQualityLevel = i9185[37]
  return i9184
}

Deserializers["Luna.Unity.DTO.UnityEngine.Audio.AudioMixer"] = function (request, data, root) {
  var i9192 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Audio.AudioMixer' )
  var i9193 = data
  var i9195 = i9193[0]
  var i9194 = []
  for(var i = 0; i < i9195.length; i += 1) {
    i9194.push( request.d('Luna.Unity.DTO.UnityEngine.Audio.AudioMixerGroup', i9195[i + 0]) );
  }
  i9192.groups = i9194
  var i9197 = i9193[1]
  var i9196 = []
  for(var i = 0; i < i9197.length; i += 1) {
    i9196.push( request.d('Luna.Unity.DTO.UnityEngine.Audio.AudioMixerSnapshot', i9197[i + 0]) );
  }
  i9192.snapshots = i9196
  return i9192
}

Deserializers["Luna.Unity.DTO.UnityEngine.Audio.AudioMixerGroup"] = function (request, data, root) {
  var i9200 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Audio.AudioMixerGroup' )
  var i9201 = data
  i9200.id = i9201[0]
  i9200.childGroupIds = i9201[1]
  i9200.name = i9201[2]
  return i9200
}

Deserializers["Luna.Unity.DTO.UnityEngine.Audio.AudioMixerSnapshot"] = function (request, data, root) {
  var i9204 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Audio.AudioMixerSnapshot' )
  var i9205 = data
  i9204.id = i9205[0]
  var i9207 = i9205[1]
  var i9206 = []
  for(var i = 0; i < i9207.length; i += 1) {
    i9206.push( request.d('Luna.Unity.DTO.UnityEngine.Audio.AudioMixerSnapshot+Parameter', i9207[i + 0]) );
  }
  i9204.parameters = i9206
  return i9204
}

Deserializers["Luna.Unity.DTO.UnityEngine.Audio.AudioMixerSnapshot+Parameter"] = function (request, data, root) {
  var i9210 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Audio.AudioMixerSnapshot+Parameter' )
  var i9211 = data
  i9210.name = i9211[0]
  i9210.value = i9211[1]
  return i9210
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame"] = function (request, data, root) {
  var i9214 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame' )
  var i9215 = data
  i9214.weight = i9215[0]
  i9214.vertices = i9215[1]
  i9214.normals = i9215[2]
  i9214.tangents = i9215[3]
  return i9214
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Assets.Mesh":{"name":0,"halfPrecision":1,"useSimplification":2,"useUInt32IndexFormat":3,"vertexCount":4,"aabb":5,"streams":6,"vertices":7,"subMeshes":8,"bindposes":9,"blendShapes":10},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh":{"triangles":0},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape":{"name":0,"frames":1},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystem":{"main":0,"colorBySpeed":1,"colorOverLifetime":2,"emission":3,"rotationBySpeed":4,"rotationOverLifetime":5,"shape":6,"sizeBySpeed":7,"sizeOverLifetime":8,"textureSheetAnimation":9,"velocityOverLifetime":10,"noise":11,"inheritVelocity":12,"forceOverLifetime":13,"limitVelocityOverLifetime":14,"useAutoRandomSeed":15,"randomSeed":16},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule":{"duration":0,"loop":1,"prewarm":2,"startDelay":3,"startLifetime":4,"startSpeed":5,"startSize3D":6,"startSizeX":7,"startSizeY":8,"startSizeZ":9,"startRotation3D":10,"startRotationX":11,"startRotationY":12,"startRotationZ":13,"startColor":14,"gravityModifier":15,"simulationSpace":16,"customSimulationSpace":17,"simulationSpeed":19,"useUnscaledTime":20,"scalingMode":21,"playOnAwake":22,"maxParticles":23,"emitterVelocityMode":24,"stopAction":25},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve":{"mode":0,"curveMin":1,"curveMax":2,"curveMultiplier":3,"constantMin":4,"constantMax":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient":{"mode":0,"gradientMin":1,"gradientMax":2,"colorMin":3,"colorMax":7},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient":{"mode":0,"colorKeys":1,"alphaKeys":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule":{"enabled":0,"color":1,"range":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey":{"color":0,"time":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey":{"alpha":0,"time":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule":{"enabled":0,"color":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule":{"enabled":0,"rateOverTime":1,"rateOverDistance":2,"bursts":3},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst":{"count":0,"cycleCount":1,"minCount":2,"maxCount":3,"repeatInterval":4,"time":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule":{"enabled":0,"shapeType":1,"randomDirectionAmount":2,"sphericalDirectionAmount":3,"randomPositionAmount":4,"alignToDirection":5,"radius":6,"radiusMode":7,"radiusSpread":8,"radiusSpeed":9,"radiusThickness":10,"angle":11,"length":12,"boxThickness":13,"meshShapeType":16,"mesh":17,"meshRenderer":19,"skinnedMeshRenderer":21,"useMeshMaterialIndex":23,"meshMaterialIndex":24,"useMeshColors":25,"normalOffset":26,"arc":27,"arcMode":28,"arcSpread":29,"arcSpeed":30,"donutRadius":31,"position":32,"rotation":35,"scale":38},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule":{"enabled":0,"mode":1,"animation":2,"numTilesX":3,"numTilesY":4,"useRandomRow":5,"frameOverTime":6,"startFrame":7,"cycleCount":8,"rowIndex":9,"flipU":10,"flipV":11,"spriteCount":12,"sprites":13},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"radial":4,"speedModifier":5,"space":6,"orbitalX":7,"orbitalY":8,"orbitalZ":9,"orbitalOffsetX":10,"orbitalOffsetY":11,"orbitalOffsetZ":12},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule":{"enabled":0,"separateAxes":1,"strengthX":2,"strengthY":3,"strengthZ":4,"frequency":5,"damping":6,"octaveCount":7,"octaveMultiplier":8,"octaveScale":9,"quality":10,"scrollSpeed":11,"scrollSpeedMultiplier":12,"remapEnabled":13,"remapX":14,"remapY":15,"remapZ":16,"positionAmount":17,"rotationAmount":18,"sizeAmount":19},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule":{"enabled":0,"mode":1,"curve":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"space":4,"randomized":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule":{"enabled":0,"limit":1,"limitX":2,"limitY":3,"limitZ":4,"dampen":5,"separateAxes":6,"space":7,"drag":8,"multiplyDragByParticleSize":9,"multiplyDragByParticleVelocity":10},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer":{"mesh":0,"meshCount":2,"activeVertexStreamsCount":3,"alignment":4,"renderMode":5,"sortMode":6,"lengthScale":7,"velocityScale":8,"cameraVelocityScale":9,"normalDirection":10,"sortingFudge":11,"minParticleSize":12,"maxParticleSize":13,"pivot":14,"trailMaterial":17,"applyActiveColorSpace":19,"enabled":20,"sharedMaterial":21,"sharedMaterials":23,"receiveShadows":24,"shadowCastingMode":25,"sortingLayerID":26,"sortingOrder":27,"lightmapIndex":28,"lightmapSceneIndex":29,"lightmapScaleOffset":30,"lightProbeUsage":34,"reflectionProbeUsage":35},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Components.Animator":{"animatorController":0,"avatar":2,"updateMode":4,"hasTransformHierarchy":5,"applyRootMotion":6,"humanBones":7,"enabled":8},"Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer":{"color":0,"sprite":4,"flipX":6,"flipY":7,"drawMode":8,"size":9,"tileMode":11,"adaptiveModeThreshold":12,"maskInteraction":13,"spriteSortPoint":14,"enabled":15,"sharedMaterial":16,"sharedMaterials":18,"receiveShadows":19,"shadowCastingMode":20,"sortingLayerID":21,"sortingOrder":22,"lightmapIndex":23,"lightmapSceneIndex":24,"lightmapScaleOffset":25,"lightProbeUsage":29,"reflectionProbeUsage":30},"Luna.Unity.DTO.UnityEngine.Components.TrailRenderer":{"positions":0,"positionCount":1,"time":2,"startWidth":3,"endWidth":4,"widthMultiplier":5,"autodestruct":6,"emitting":7,"numCornerVertices":8,"numCapVertices":9,"minVertexDistance":10,"colorGradient":11,"startColor":12,"endColor":16,"generateLightingData":20,"textureMode":21,"alignment":22,"widthCurve":23,"enabled":24,"sharedMaterial":25,"sharedMaterials":27,"receiveShadows":28,"shadowCastingMode":29,"sortingLayerID":30,"sortingOrder":31,"lightmapIndex":32,"lightmapSceneIndex":33,"lightmapScaleOffset":34,"lightProbeUsage":38,"reflectionProbeUsage":39},"Luna.Unity.DTO.UnityEngine.Components.LineRenderer":{"textureMode":0,"alignment":1,"widthCurve":2,"colorGradient":3,"positions":4,"positionCount":5,"widthMultiplier":6,"startWidth":7,"endWidth":8,"numCornerVertices":9,"numCapVertices":10,"useWorldSpace":11,"loop":12,"startColor":13,"endColor":17,"generateLightingData":21,"enabled":22,"sharedMaterial":23,"sharedMaterials":25,"receiveShadows":26,"shadowCastingMode":27,"sortingLayerID":28,"sortingOrder":29,"lightmapIndex":30,"lightmapSceneIndex":31,"lightmapScaleOffset":32,"lightProbeUsage":36,"reflectionProbeUsage":37},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D":{"usedByComposite":0,"autoTiling":1,"size":2,"edgeRadius":4,"enabled":5,"isTrigger":6,"usedByEffector":7,"density":8,"offset":9,"material":11},"Luna.Unity.DTO.UnityEngine.Components.AudioSource":{"clip":0,"outputAudioMixerGroup":2,"playOnAwake":4,"loop":5,"time":6,"volume":7,"pitch":8,"enabled":9},"Luna.Unity.DTO.UnityEngine.Components.CircleCollider2D":{"radius":0,"enabled":1,"isTrigger":2,"usedByEffector":3,"density":4,"offset":5,"material":7},"Luna.Unity.DTO.UnityEngine.Components.SpriteMask":{"frontSortingLayerID":0,"frontSortingOrder":1,"backSortingLayerID":2,"backSortingOrder":3,"alphaCutoff":4,"sprite":5,"tileMode":7,"isCustomRangeActive":8,"spriteSortPoint":9,"enabled":10,"sharedMaterial":11,"sharedMaterials":13,"receiveShadows":14,"shadowCastingMode":15,"sortingLayerID":16,"sortingOrder":17,"lightmapIndex":18,"lightmapSceneIndex":19,"lightmapScaleOffset":20,"lightProbeUsage":24,"reflectionProbeUsage":25},"Luna.Unity.DTO.UnityEngine.Components.PolygonCollider2D":{"usedByComposite":0,"autoTiling":1,"points":2,"enabled":3,"isTrigger":4,"usedByEffector":5,"density":6,"offset":7,"material":9},"Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D":{"bodyType":0,"material":1,"simulated":3,"useAutoMass":4,"mass":5,"drag":6,"angularDrag":7,"gravityScale":8,"collisionDetectionMode":9,"sleepMode":10,"constraints":11},"Luna.Unity.DTO.UnityEngine.Textures.Cubemap":{"name":0,"atlasId":1,"mipmapCount":2,"hdr":3,"size":4,"anisoLevel":5,"filterMode":6,"rects":7,"wrapU":8,"wrapV":9},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"aspect":0,"orthographic":1,"orthographicSize":2,"backgroundColor":3,"nearClipPlane":7,"farClipPlane":8,"fieldOfView":9,"depth":10,"clearFlags":11,"cullingMask":12,"rect":13,"targetTexture":14,"usePhysicalProperties":16,"focalLength":17,"sensorSize":18,"lensShift":20,"gateFit":22,"commandBufferCount":23,"cameraType":24,"enabled":25},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"planeDistance":0,"referencePixelsPerUnit":1,"isFallbackOverlay":2,"renderMode":3,"renderOrder":4,"sortingLayerName":5,"sortingOrder":6,"scaleFactor":7,"worldCamera":8,"overrideSorting":10,"pixelPerfect":11,"targetDisplay":12,"overridePixelPerfect":13,"enabled":14},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"customReflection":36,"defaultReflection":38,"defaultReflectionMode":40,"defaultReflectionResolution":41,"sunLightObjectId":42,"pixelLightCount":43,"defaultReflectionHDR":44,"hasLightDataAsset":45,"hasManualGenerate":46},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2,"shadowMask":4},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"hasDepthOnlyPass":10,"isCreatedByShaderGraph":11,"disableBatching":12,"compiled":13},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip":{"name":0,"wrapMode":1,"isLooping":2,"length":3,"curves":4,"events":5,"halfPrecision":6,"_frameRate":7,"localBounds":8,"hasMuscleCurves":9,"clipMuscleConstant":10,"clipBindingConstant":11},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve":{"path":0,"hash":1,"componentType":2,"property":3,"keys":4,"objectReferenceKeys":5},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey":{"time":0,"value":1},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent":{"functionName":0,"floatParameter":1,"intParameter":2,"stringParameter":3,"objectReferenceParameter":4,"time":6},"Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds":{"center":0,"extends":3},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant":{"genericBindings":0,"pptrCurveMapping":1},"Luna.Unity.DTO.UnityEngine.Assets.Font":{"name":0,"ascent":1,"originalLineHeight":2,"fontSize":3,"characterInfo":4,"texture":5,"originalFontSize":7},"Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo":{"index":0,"advance":1,"bearing":2,"glyphWidth":3,"glyphHeight":4,"minX":5,"maxX":6,"minY":7,"maxY":8,"uvBottomLeftX":9,"uvBottomLeftY":10,"uvBottomRightX":11,"uvBottomRightY":12,"uvTopLeftX":13,"uvTopLeftY":14,"uvTopRightX":15,"uvTopRightY":16},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController":{"name":0,"layers":1,"parameters":2,"animationClips":3,"avatarUnsupported":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer":{"name":0,"defaultWeight":1,"blendingMode":2,"avatarMask":3,"syncedLayerIndex":4,"syncedLayerAffectsTiming":5,"syncedLayers":6,"stateMachine":7},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine":{"id":0,"name":1,"path":2,"states":3,"machines":4,"entryStateTransitions":5,"exitStateTransitions":6,"anyStateTransitions":7,"defaultStateId":8},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState":{"id":0,"name":1,"cycleOffset":2,"cycleOffsetParameter":3,"cycleOffsetParameterActive":4,"mirror":5,"mirrorParameter":6,"mirrorParameterActive":7,"motionId":8,"nameHash":9,"fullPathHash":10,"speed":11,"speedParameter":12,"speedParameterActive":13,"tag":14,"tagHash":15,"writeDefaultValues":16,"behaviours":17,"transitions":18},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition":{"fullPath":0,"canTransitionToSelf":1,"duration":2,"exitTime":3,"hasExitTime":4,"hasFixedDuration":5,"interruptionSource":6,"offset":7,"orderedInterruption":8,"destinationStateId":9,"isExit":10,"mute":11,"solo":12,"conditions":13},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition":{"destinationStateId":0,"isExit":1,"mute":2,"solo":3,"conditions":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition":{"mode":0,"parameter":1,"threshold":2},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter":{"defaultBool":0,"defaultFloat":1,"defaultInt":2,"name":3,"nameHash":4,"type":5},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableStaticBatching":9,"enableDynamicBatching":10,"usePreservativeDynamicBatching":11,"lightmapEncodingQuality":12,"desiredColorSpace":13,"allTags":14},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37},"Luna.Unity.DTO.UnityEngine.Audio.AudioMixer":{"groups":0,"snapshots":1},"Luna.Unity.DTO.UnityEngine.Audio.AudioMixerGroup":{"id":0,"childGroupIds":1,"name":2},"Luna.Unity.DTO.UnityEngine.Audio.AudioMixerSnapshot":{"id":0,"parameters":1},"Luna.Unity.DTO.UnityEngine.Audio.AudioMixerSnapshot+Parameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame":{"weight":0,"vertices":1,"normals":2,"tangents":3}}

Deserializers.requiredComponents = {"79":[80],"81":[80],"82":[80],"83":[80],"84":[80],"85":[80],"86":[87],"88":[56],"89":[90],"91":[90],"92":[90],"93":[90],"94":[90],"95":[90],"96":[90],"97":[46],"98":[46],"99":[46],"100":[46],"101":[46],"102":[46],"103":[46],"104":[46],"105":[46],"106":[46],"107":[46],"108":[46],"109":[46],"110":[56],"111":[112],"113":[114],"115":[114],"67":[61],"116":[29],"117":[9],"34":[31],"118":[9],"119":[120],"121":[120],"38":[14],"54":[31],"122":[9],"27":[9],"123":[61],"124":[61],"70":[67],"62":[71,61],"125":[61],"69":[67],"126":[61],"127":[61],"128":[61],"129":[61],"130":[61],"131":[61],"132":[61],"133":[61],"134":[61],"135":[71,61],"136":[61],"137":[61],"138":[61],"139":[61],"63":[71,61],"140":[61],"141":[75],"142":[75],"76":[75],"143":[75],"144":[56],"145":[56]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Texture2D","UnityEngine.Transform","UnityEngine.ParticleSystem","UnityEngine.ParticleSystemRenderer","UnityEngine.Mesh","UnityEngine.Material","UnityEngine.MonoBehaviour","Level1_Hair_Playable","UnityEngine.SpriteRenderer","BasicDrag","OutlinePulse","UnityEngine.GameObject","BD_CameraFollow","DG.Tweening.DOTweenAnimation","UnityEngine.Sprite","UnityEngine.AudioClip","BD_Progress","BD_ProgressHelper","UnityEngine.AudioSource","ScratchCardAsset.ScratchCardManager","PlayableCTA","PlayableFadeCoverSettings","ScratchCardAsset.ScratchCard","ScratchCardAsset.EraseProgress","UnityEngine.Animator","UnityEditor.Animations.AnimatorController","UnityEngine.U2D.Animation.SpriteSkin","UnityEngine.TrailRenderer","UnityEngine.LineRenderer","StaticFixedPipe","UnityEngine.BoxCollider2D","BD_Clamp","BD_ItemPick","BD_Sticky","UnityEngine.CircleCollider2D","PlayParticlesOnCollision","UnityEngine.SpriteMask","PlayTweenOnHit","UnityEngine.PolygonCollider2D","PlaySfxOnCollision","InteractableBones","WaypointFollower","UnityEditor.Audio.AudioMixerGroupController","BD_Action","BD_ToolRotate","UnityEngine.Rigidbody2D","BugKill_Tip","ActionOnTap","BD_SpriteChange","BD_AnimatorDrag","PlaceItem","BD_Audio","Level1_HairAnim","SpriteButton","DestroyObj","UnityEngine.Camera","UnityEngine.AudioListener","CameraController","MusicSource","UI_Manager","UnityEngine.RectTransform","UnityEngine.UI.Image","UnityEngine.UI.Text","GameManagerPlayable","AudioController","UnityEditor.Audio.AudioMixerController","UnityEngine.Canvas","UnityEngine.EventSystems.UIBehaviour","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEngine.CanvasRenderer","UnityEngine.Font","UnityEngine.UI.Button","PlayableHudRuntime","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","UnityEngine.Cubemap","DG.Tweening.Core.DOTweenSettings","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.ConstantForce","UnityEngine.Rigidbody","UnityEngine.Joint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.FixedJoint","UnityEngine.CharacterJoint","UnityEngine.ConfigurableJoint","UnityEngine.CompositeCollider2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.MeshRenderer","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","RopeController","BD_Fold","Lvl3_DripAnimator","Lvl3_LipstickPicker","UnityEngine.Collider2D","Lvl3_PourFill","RadialCircleFill","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.Mask","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Slider","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster"]

Deserializers.unityVersion = "2022.3.62f2";

Deserializers.productName = "Perfect Makeover Fashion ASMR";

Deserializers.lunaInitializationTime = "08/20/2026 07:41:52";

Deserializers.lunaDaysRunning = "5.0";

Deserializers.lunaVersion = "7.2.0";

Deserializers.lunaSHA = "ea08d29afe2968efcb8d91d5624f033c6485cc68";

Deserializers.creativeName = "25Aug2026_Lvl_1_1_Step3to5";

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

Deserializers.buildID = "bc17c639-3c74-45ab-b350-3cafc73f30fc";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[],[["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"]],[],[]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

