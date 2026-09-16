var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i6874 = root || request.c( 'UnityEngine.JointSpring' )
  var i6875 = data
  i6874.spring = i6875[0]
  i6874.damper = i6875[1]
  i6874.targetPosition = i6875[2]
  return i6874
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i6876 = root || request.c( 'UnityEngine.JointMotor' )
  var i6877 = data
  i6876.m_TargetVelocity = i6877[0]
  i6876.m_Force = i6877[1]
  i6876.m_FreeSpin = i6877[2]
  return i6876
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i6878 = root || request.c( 'UnityEngine.JointLimits' )
  var i6879 = data
  i6878.m_Min = i6879[0]
  i6878.m_Max = i6879[1]
  i6878.m_Bounciness = i6879[2]
  i6878.m_BounceMinVelocity = i6879[3]
  i6878.m_ContactDistance = i6879[4]
  i6878.minBounce = i6879[5]
  i6878.maxBounce = i6879[6]
  return i6878
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i6880 = root || request.c( 'UnityEngine.JointDrive' )
  var i6881 = data
  i6880.m_PositionSpring = i6881[0]
  i6880.m_PositionDamper = i6881[1]
  i6880.m_MaximumForce = i6881[2]
  i6880.m_UseAcceleration = i6881[3]
  return i6880
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i6882 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i6883 = data
  i6882.m_Spring = i6883[0]
  i6882.m_Damper = i6883[1]
  return i6882
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i6884 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i6885 = data
  i6884.m_Limit = i6885[0]
  i6884.m_Bounciness = i6885[1]
  i6884.m_ContactDistance = i6885[2]
  return i6884
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i6886 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i6887 = data
  i6886.m_ExtremumSlip = i6887[0]
  i6886.m_ExtremumValue = i6887[1]
  i6886.m_AsymptoteSlip = i6887[2]
  i6886.m_AsymptoteValue = i6887[3]
  i6886.m_Stiffness = i6887[4]
  return i6886
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i6888 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i6889 = data
  i6888.m_LowerAngle = i6889[0]
  i6888.m_UpperAngle = i6889[1]
  return i6888
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i6890 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i6891 = data
  i6890.m_MotorSpeed = i6891[0]
  i6890.m_MaximumMotorTorque = i6891[1]
  return i6890
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i6892 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i6893 = data
  i6892.m_DampingRatio = i6893[0]
  i6892.m_Frequency = i6893[1]
  i6892.m_Angle = i6893[2]
  return i6892
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i6894 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i6895 = data
  i6894.m_LowerTranslation = i6895[0]
  i6894.m_UpperTranslation = i6895[1]
  return i6894
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i6896 = root || new pc.UnityMaterial()
  var i6897 = data
  i6896.name = i6897[0]
  request.r(i6897[1], i6897[2], 0, i6896, 'shader')
  i6896.renderQueue = i6897[3]
  i6896.enableInstancing = !!i6897[4]
  var i6899 = i6897[5]
  var i6898 = []
  for(var i = 0; i < i6899.length; i += 1) {
    i6898.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i6899[i + 0]) );
  }
  i6896.floatParameters = i6898
  var i6901 = i6897[6]
  var i6900 = []
  for(var i = 0; i < i6901.length; i += 1) {
    i6900.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i6901[i + 0]) );
  }
  i6896.colorParameters = i6900
  var i6903 = i6897[7]
  var i6902 = []
  for(var i = 0; i < i6903.length; i += 1) {
    i6902.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i6903[i + 0]) );
  }
  i6896.vectorParameters = i6902
  var i6905 = i6897[8]
  var i6904 = []
  for(var i = 0; i < i6905.length; i += 1) {
    i6904.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i6905[i + 0]) );
  }
  i6896.textureParameters = i6904
  var i6907 = i6897[9]
  var i6906 = []
  for(var i = 0; i < i6907.length; i += 1) {
    i6906.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i6907[i + 0]) );
  }
  i6896.materialFlags = i6906
  return i6896
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i6910 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i6911 = data
  i6910.name = i6911[0]
  i6910.value = i6911[1]
  return i6910
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i6914 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i6915 = data
  i6914.name = i6915[0]
  i6914.value = new pc.Color(i6915[1], i6915[2], i6915[3], i6915[4])
  return i6914
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i6918 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i6919 = data
  i6918.name = i6919[0]
  i6918.value = new pc.Vec4( i6919[1], i6919[2], i6919[3], i6919[4] )
  return i6918
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i6922 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i6923 = data
  i6922.name = i6923[0]
  request.r(i6923[1], i6923[2], 0, i6922, 'value')
  return i6922
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i6926 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i6927 = data
  i6926.name = i6927[0]
  i6926.enabled = !!i6927[1]
  return i6926
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i6928 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i6929 = data
  i6928.name = i6929[0]
  i6928.width = i6929[1]
  i6928.height = i6929[2]
  i6928.mipmapCount = i6929[3]
  i6928.anisoLevel = i6929[4]
  i6928.filterMode = i6929[5]
  i6928.hdr = !!i6929[6]
  i6928.format = i6929[7]
  i6928.wrapMode = i6929[8]
  i6928.alphaIsTransparency = !!i6929[9]
  i6928.alphaSource = i6929[10]
  i6928.graphicsFormat = i6929[11]
  i6928.sRGBTexture = !!i6929[12]
  i6928.desiredColorSpace = i6929[13]
  i6928.wrapU = i6929[14]
  i6928.wrapV = i6929[15]
  return i6928
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh"] = function (request, data, root) {
  var i6930 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh' )
  var i6931 = data
  i6930.name = i6931[0]
  i6930.halfPrecision = !!i6931[1]
  i6930.useSimplification = !!i6931[2]
  i6930.useUInt32IndexFormat = !!i6931[3]
  i6930.vertexCount = i6931[4]
  i6930.aabb = i6931[5]
  var i6933 = i6931[6]
  var i6932 = []
  for(var i = 0; i < i6933.length; i += 1) {
    i6932.push( !!i6933[i + 0] );
  }
  i6930.streams = i6932
  i6930.vertices = i6931[7]
  var i6935 = i6931[8]
  var i6934 = []
  for(var i = 0; i < i6935.length; i += 1) {
    i6934.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh', i6935[i + 0]) );
  }
  i6930.subMeshes = i6934
  var i6937 = i6931[9]
  var i6936 = []
  for(var i = 0; i < i6937.length; i += 16) {
    i6936.push( new pc.Mat4().setData(i6937[i + 0], i6937[i + 1], i6937[i + 2], i6937[i + 3],  i6937[i + 4], i6937[i + 5], i6937[i + 6], i6937[i + 7],  i6937[i + 8], i6937[i + 9], i6937[i + 10], i6937[i + 11],  i6937[i + 12], i6937[i + 13], i6937[i + 14], i6937[i + 15]) );
  }
  i6930.bindposes = i6936
  var i6939 = i6931[10]
  var i6938 = []
  for(var i = 0; i < i6939.length; i += 1) {
    i6938.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape', i6939[i + 0]) );
  }
  i6930.blendShapes = i6938
  return i6930
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh"] = function (request, data, root) {
  var i6944 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh' )
  var i6945 = data
  i6944.triangles = i6945[0]
  return i6944
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape"] = function (request, data, root) {
  var i6950 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape' )
  var i6951 = data
  i6950.name = i6951[0]
  var i6953 = i6951[1]
  var i6952 = []
  for(var i = 0; i < i6953.length; i += 1) {
    i6952.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame', i6953[i + 0]) );
  }
  i6950.frames = i6952
  return i6950
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i6954 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i6955 = data
  i6954.position = new pc.Vec3( i6955[0], i6955[1], i6955[2] )
  i6954.scale = new pc.Vec3( i6955[3], i6955[4], i6955[5] )
  i6954.rotation = new pc.Quat(i6955[6], i6955[7], i6955[8], i6955[9])
  return i6954
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystem"] = function (request, data, root) {
  var i6956 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystem' )
  var i6957 = data
  i6956.main = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule', i6957[0], i6956.main)
  i6956.colorBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule', i6957[1], i6956.colorBySpeed)
  i6956.colorOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule', i6957[2], i6956.colorOverLifetime)
  i6956.emission = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule', i6957[3], i6956.emission)
  i6956.rotationBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule', i6957[4], i6956.rotationBySpeed)
  i6956.rotationOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule', i6957[5], i6956.rotationOverLifetime)
  i6956.shape = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule', i6957[6], i6956.shape)
  i6956.sizeBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule', i6957[7], i6956.sizeBySpeed)
  i6956.sizeOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule', i6957[8], i6956.sizeOverLifetime)
  i6956.textureSheetAnimation = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule', i6957[9], i6956.textureSheetAnimation)
  i6956.velocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule', i6957[10], i6956.velocityOverLifetime)
  i6956.noise = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule', i6957[11], i6956.noise)
  i6956.inheritVelocity = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule', i6957[12], i6956.inheritVelocity)
  i6956.forceOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule', i6957[13], i6956.forceOverLifetime)
  i6956.limitVelocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule', i6957[14], i6956.limitVelocityOverLifetime)
  i6956.useAutoRandomSeed = !!i6957[15]
  i6956.randomSeed = i6957[16]
  return i6956
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule"] = function (request, data, root) {
  var i6958 = root || new pc.ParticleSystemMain()
  var i6959 = data
  i6958.duration = i6959[0]
  i6958.loop = !!i6959[1]
  i6958.prewarm = !!i6959[2]
  i6958.startDelay = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6959[3], i6958.startDelay)
  i6958.startLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6959[4], i6958.startLifetime)
  i6958.startSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6959[5], i6958.startSpeed)
  i6958.startSize3D = !!i6959[6]
  i6958.startSizeX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6959[7], i6958.startSizeX)
  i6958.startSizeY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6959[8], i6958.startSizeY)
  i6958.startSizeZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6959[9], i6958.startSizeZ)
  i6958.startRotation3D = !!i6959[10]
  i6958.startRotationX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6959[11], i6958.startRotationX)
  i6958.startRotationY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6959[12], i6958.startRotationY)
  i6958.startRotationZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6959[13], i6958.startRotationZ)
  i6958.startColor = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i6959[14], i6958.startColor)
  i6958.gravityModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6959[15], i6958.gravityModifier)
  i6958.simulationSpace = i6959[16]
  request.r(i6959[17], i6959[18], 0, i6958, 'customSimulationSpace')
  i6958.simulationSpeed = i6959[19]
  i6958.useUnscaledTime = !!i6959[20]
  i6958.scalingMode = i6959[21]
  i6958.playOnAwake = !!i6959[22]
  i6958.maxParticles = i6959[23]
  i6958.emitterVelocityMode = i6959[24]
  i6958.stopAction = i6959[25]
  return i6958
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve"] = function (request, data, root) {
  var i6960 = root || new pc.MinMaxCurve()
  var i6961 = data
  i6960.mode = i6961[0]
  i6960.curveMin = new pc.AnimationCurve( { keys_flow: i6961[1] } )
  i6960.curveMax = new pc.AnimationCurve( { keys_flow: i6961[2] } )
  i6960.curveMultiplier = i6961[3]
  i6960.constantMin = i6961[4]
  i6960.constantMax = i6961[5]
  return i6960
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient"] = function (request, data, root) {
  var i6962 = root || new pc.MinMaxGradient()
  var i6963 = data
  i6962.mode = i6963[0]
  i6962.gradientMin = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i6963[1], i6962.gradientMin)
  i6962.gradientMax = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i6963[2], i6962.gradientMax)
  i6962.colorMin = new pc.Color(i6963[3], i6963[4], i6963[5], i6963[6])
  i6962.colorMax = new pc.Color(i6963[7], i6963[8], i6963[9], i6963[10])
  return i6962
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient"] = function (request, data, root) {
  var i6964 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient' )
  var i6965 = data
  i6964.mode = i6965[0]
  var i6967 = i6965[1]
  var i6966 = []
  for(var i = 0; i < i6967.length; i += 1) {
    i6966.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey', i6967[i + 0]) );
  }
  i6964.colorKeys = i6966
  var i6969 = i6965[2]
  var i6968 = []
  for(var i = 0; i < i6969.length; i += 1) {
    i6968.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey', i6969[i + 0]) );
  }
  i6964.alphaKeys = i6968
  return i6964
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule"] = function (request, data, root) {
  var i6970 = root || new pc.ParticleSystemColorBySpeed()
  var i6971 = data
  i6970.enabled = !!i6971[0]
  i6970.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i6971[1], i6970.color)
  i6970.range = new pc.Vec2( i6971[2], i6971[3] )
  return i6970
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey"] = function (request, data, root) {
  var i6974 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey' )
  var i6975 = data
  i6974.color = new pc.Color(i6975[0], i6975[1], i6975[2], i6975[3])
  i6974.time = i6975[4]
  return i6974
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey"] = function (request, data, root) {
  var i6978 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey' )
  var i6979 = data
  i6978.alpha = i6979[0]
  i6978.time = i6979[1]
  return i6978
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule"] = function (request, data, root) {
  var i6980 = root || new pc.ParticleSystemColorOverLifetime()
  var i6981 = data
  i6980.enabled = !!i6981[0]
  i6980.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i6981[1], i6980.color)
  return i6980
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule"] = function (request, data, root) {
  var i6982 = root || new pc.ParticleSystemEmitter()
  var i6983 = data
  i6982.enabled = !!i6983[0]
  i6982.rateOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6983[1], i6982.rateOverTime)
  i6982.rateOverDistance = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6983[2], i6982.rateOverDistance)
  var i6985 = i6983[3]
  var i6984 = []
  for(var i = 0; i < i6985.length; i += 1) {
    i6984.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst', i6985[i + 0]) );
  }
  i6982.bursts = i6984
  return i6982
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst"] = function (request, data, root) {
  var i6988 = root || new pc.ParticleSystemBurst()
  var i6989 = data
  i6988.count = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6989[0], i6988.count)
  i6988.cycleCount = i6989[1]
  i6988.minCount = i6989[2]
  i6988.maxCount = i6989[3]
  i6988.repeatInterval = i6989[4]
  i6988.time = i6989[5]
  return i6988
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule"] = function (request, data, root) {
  var i6990 = root || new pc.ParticleSystemRotationBySpeed()
  var i6991 = data
  i6990.enabled = !!i6991[0]
  i6990.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6991[1], i6990.x)
  i6990.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6991[2], i6990.y)
  i6990.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6991[3], i6990.z)
  i6990.separateAxes = !!i6991[4]
  i6990.range = new pc.Vec2( i6991[5], i6991[6] )
  return i6990
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule"] = function (request, data, root) {
  var i6992 = root || new pc.ParticleSystemRotationOverLifetime()
  var i6993 = data
  i6992.enabled = !!i6993[0]
  i6992.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6993[1], i6992.x)
  i6992.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6993[2], i6992.y)
  i6992.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6993[3], i6992.z)
  i6992.separateAxes = !!i6993[4]
  return i6992
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule"] = function (request, data, root) {
  var i6994 = root || new pc.ParticleSystemShape()
  var i6995 = data
  i6994.enabled = !!i6995[0]
  i6994.shapeType = i6995[1]
  i6994.randomDirectionAmount = i6995[2]
  i6994.sphericalDirectionAmount = i6995[3]
  i6994.randomPositionAmount = i6995[4]
  i6994.alignToDirection = !!i6995[5]
  i6994.radius = i6995[6]
  i6994.radiusMode = i6995[7]
  i6994.radiusSpread = i6995[8]
  i6994.radiusSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6995[9], i6994.radiusSpeed)
  i6994.radiusThickness = i6995[10]
  i6994.angle = i6995[11]
  i6994.length = i6995[12]
  i6994.boxThickness = new pc.Vec3( i6995[13], i6995[14], i6995[15] )
  i6994.meshShapeType = i6995[16]
  request.r(i6995[17], i6995[18], 0, i6994, 'mesh')
  request.r(i6995[19], i6995[20], 0, i6994, 'meshRenderer')
  request.r(i6995[21], i6995[22], 0, i6994, 'skinnedMeshRenderer')
  i6994.useMeshMaterialIndex = !!i6995[23]
  i6994.meshMaterialIndex = i6995[24]
  i6994.useMeshColors = !!i6995[25]
  i6994.normalOffset = i6995[26]
  i6994.arc = i6995[27]
  i6994.arcMode = i6995[28]
  i6994.arcSpread = i6995[29]
  i6994.arcSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6995[30], i6994.arcSpeed)
  i6994.donutRadius = i6995[31]
  i6994.position = new pc.Vec3( i6995[32], i6995[33], i6995[34] )
  i6994.rotation = new pc.Vec3( i6995[35], i6995[36], i6995[37] )
  i6994.scale = new pc.Vec3( i6995[38], i6995[39], i6995[40] )
  return i6994
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule"] = function (request, data, root) {
  var i6996 = root || new pc.ParticleSystemSizeBySpeed()
  var i6997 = data
  i6996.enabled = !!i6997[0]
  i6996.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6997[1], i6996.x)
  i6996.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6997[2], i6996.y)
  i6996.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6997[3], i6996.z)
  i6996.separateAxes = !!i6997[4]
  i6996.range = new pc.Vec2( i6997[5], i6997[6] )
  return i6996
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule"] = function (request, data, root) {
  var i6998 = root || new pc.ParticleSystemSizeOverLifetime()
  var i6999 = data
  i6998.enabled = !!i6999[0]
  i6998.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6999[1], i6998.x)
  i6998.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6999[2], i6998.y)
  i6998.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6999[3], i6998.z)
  i6998.separateAxes = !!i6999[4]
  return i6998
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule"] = function (request, data, root) {
  var i7000 = root || new pc.ParticleSystemTextureSheetAnimation()
  var i7001 = data
  i7000.enabled = !!i7001[0]
  i7000.mode = i7001[1]
  i7000.animation = i7001[2]
  i7000.numTilesX = i7001[3]
  i7000.numTilesY = i7001[4]
  i7000.useRandomRow = !!i7001[5]
  i7000.frameOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7001[6], i7000.frameOverTime)
  i7000.startFrame = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7001[7], i7000.startFrame)
  i7000.cycleCount = i7001[8]
  i7000.rowIndex = i7001[9]
  i7000.flipU = i7001[10]
  i7000.flipV = i7001[11]
  i7000.spriteCount = i7001[12]
  var i7003 = i7001[13]
  var i7002 = []
  for(var i = 0; i < i7003.length; i += 2) {
  request.r(i7003[i + 0], i7003[i + 1], 2, i7002, '')
  }
  i7000.sprites = i7002
  return i7000
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule"] = function (request, data, root) {
  var i7006 = root || new pc.ParticleSystemVelocityOverLifetime()
  var i7007 = data
  i7006.enabled = !!i7007[0]
  i7006.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7007[1], i7006.x)
  i7006.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7007[2], i7006.y)
  i7006.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7007[3], i7006.z)
  i7006.radial = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7007[4], i7006.radial)
  i7006.speedModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7007[5], i7006.speedModifier)
  i7006.space = i7007[6]
  i7006.orbitalX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7007[7], i7006.orbitalX)
  i7006.orbitalY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7007[8], i7006.orbitalY)
  i7006.orbitalZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7007[9], i7006.orbitalZ)
  i7006.orbitalOffsetX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7007[10], i7006.orbitalOffsetX)
  i7006.orbitalOffsetY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7007[11], i7006.orbitalOffsetY)
  i7006.orbitalOffsetZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7007[12], i7006.orbitalOffsetZ)
  return i7006
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule"] = function (request, data, root) {
  var i7008 = root || new pc.ParticleSystemNoise()
  var i7009 = data
  i7008.enabled = !!i7009[0]
  i7008.separateAxes = !!i7009[1]
  i7008.strengthX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7009[2], i7008.strengthX)
  i7008.strengthY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7009[3], i7008.strengthY)
  i7008.strengthZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7009[4], i7008.strengthZ)
  i7008.frequency = i7009[5]
  i7008.damping = !!i7009[6]
  i7008.octaveCount = i7009[7]
  i7008.octaveMultiplier = i7009[8]
  i7008.octaveScale = i7009[9]
  i7008.quality = i7009[10]
  i7008.scrollSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7009[11], i7008.scrollSpeed)
  i7008.scrollSpeedMultiplier = i7009[12]
  i7008.remapEnabled = !!i7009[13]
  i7008.remapX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7009[14], i7008.remapX)
  i7008.remapY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7009[15], i7008.remapY)
  i7008.remapZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7009[16], i7008.remapZ)
  i7008.positionAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7009[17], i7008.positionAmount)
  i7008.rotationAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7009[18], i7008.rotationAmount)
  i7008.sizeAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7009[19], i7008.sizeAmount)
  return i7008
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule"] = function (request, data, root) {
  var i7010 = root || new pc.ParticleSystemInheritVelocity()
  var i7011 = data
  i7010.enabled = !!i7011[0]
  i7010.mode = i7011[1]
  i7010.curve = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7011[2], i7010.curve)
  return i7010
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule"] = function (request, data, root) {
  var i7012 = root || new pc.ParticleSystemForceOverLifetime()
  var i7013 = data
  i7012.enabled = !!i7013[0]
  i7012.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7013[1], i7012.x)
  i7012.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7013[2], i7012.y)
  i7012.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7013[3], i7012.z)
  i7012.space = i7013[4]
  i7012.randomized = !!i7013[5]
  return i7012
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule"] = function (request, data, root) {
  var i7014 = root || new pc.ParticleSystemLimitVelocityOverLifetime()
  var i7015 = data
  i7014.enabled = !!i7015[0]
  i7014.limit = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7015[1], i7014.limit)
  i7014.limitX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7015[2], i7014.limitX)
  i7014.limitY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7015[3], i7014.limitY)
  i7014.limitZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7015[4], i7014.limitZ)
  i7014.dampen = i7015[5]
  i7014.separateAxes = !!i7015[6]
  i7014.space = i7015[7]
  i7014.drag = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7015[8], i7014.drag)
  i7014.multiplyDragByParticleSize = !!i7015[9]
  i7014.multiplyDragByParticleVelocity = !!i7015[10]
  return i7014
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer"] = function (request, data, root) {
  var i7016 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer' )
  var i7017 = data
  request.r(i7017[0], i7017[1], 0, i7016, 'mesh')
  i7016.meshCount = i7017[2]
  i7016.activeVertexStreamsCount = i7017[3]
  i7016.alignment = i7017[4]
  i7016.renderMode = i7017[5]
  i7016.sortMode = i7017[6]
  i7016.lengthScale = i7017[7]
  i7016.velocityScale = i7017[8]
  i7016.cameraVelocityScale = i7017[9]
  i7016.normalDirection = i7017[10]
  i7016.sortingFudge = i7017[11]
  i7016.minParticleSize = i7017[12]
  i7016.maxParticleSize = i7017[13]
  i7016.pivot = new pc.Vec3( i7017[14], i7017[15], i7017[16] )
  request.r(i7017[17], i7017[18], 0, i7016, 'trailMaterial')
  i7016.applyActiveColorSpace = !!i7017[19]
  i7016.enabled = !!i7017[20]
  request.r(i7017[21], i7017[22], 0, i7016, 'sharedMaterial')
  var i7019 = i7017[23]
  var i7018 = []
  for(var i = 0; i < i7019.length; i += 2) {
  request.r(i7019[i + 0], i7019[i + 1], 2, i7018, '')
  }
  i7016.sharedMaterials = i7018
  i7016.receiveShadows = !!i7017[24]
  i7016.shadowCastingMode = i7017[25]
  i7016.sortingLayerID = i7017[26]
  i7016.sortingOrder = i7017[27]
  i7016.lightmapIndex = i7017[28]
  i7016.lightmapSceneIndex = i7017[29]
  i7016.lightmapScaleOffset = new pc.Vec4( i7017[30], i7017[31], i7017[32], i7017[33] )
  i7016.lightProbeUsage = i7017[34]
  i7016.reflectionProbeUsage = i7017[35]
  return i7016
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i7022 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i7023 = data
  i7022.name = i7023[0]
  i7022.tagId = i7023[1]
  i7022.enabled = !!i7023[2]
  i7022.isStatic = !!i7023[3]
  i7022.layer = i7023[4]
  return i7022
}

Deserializers["Level3_Crown_Playable_NewTest"] = function (request, data, root) {
  var i7024 = root || request.c( 'Level3_Crown_Playable_NewTest' )
  var i7025 = data
  i7024.MainZoom = request.d('ZoomPos', i7025[0], i7024.MainZoom)
  request.r(i7025[1], i7025[2], 0, i7024, 'View1')
  request.r(i7025[3], i7025[4], 0, i7024, 'View2')
  i7024.ZoomStep1 = request.d('ZoomPos', i7025[5], i7024.ZoomStep1)
  request.r(i7025[6], i7025[7], 0, i7024, 'ToolStep1')
  request.r(i7025[8], i7025[9], 0, i7024, 'ToolStep1CameraFollow')
  request.r(i7025[10], i7025[11], 0, i7024, 'Step1Col')
  request.r(i7025[12], i7025[13], 0, i7024, 'DustSR_1')
  i7024.ZoomStep2 = request.d('ZoomPos', i7025[14], i7024.ZoomStep2)
  request.r(i7025[15], i7025[16], 0, i7024, 'ToolStep2')
  request.r(i7025[17], i7025[18], 0, i7024, 'ToolStep2CameraFollow')
  var i7027 = i7025[19]
  var i7026 = []
  for(var i = 0; i < i7027.length; i += 2) {
  request.r(i7027[i + 0], i7027[i + 1], 2, i7026, '')
  }
  i7024.SRsToFadeOut_2 = i7026
  request.r(i7025[20], i7025[21], 0, i7024, 'SpraySR_2')
  i7024.ZoomStep3 = request.d('ZoomPos', i7025[22], i7024.ZoomStep3)
  request.r(i7025[23], i7025[24], 0, i7024, 'ToolStep3')
  request.r(i7025[25], i7025[26], 0, i7024, 'ToolStep3CameraFollow')
  request.r(i7025[27], i7025[28], 0, i7024, 'Step3Col')
  request.r(i7025[29], i7025[30], 0, i7024, 'Mix')
  request.r(i7025[31], i7025[32], 0, i7024, 'MixE')
  i7024.levelName = i7025[33]
  i7024.levelReward = i7025[34]
  request.r(i7025[35], i7025[36], 0, i7024, 'LevelIcon')
  request.r(i7025[37], i7025[38], 0, i7024, 'Level_BG')
  var i7029 = i7025[39]
  var i7028 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Sprite')))
  for(var i = 0; i < i7029.length; i += 2) {
  request.r(i7029[i + 0], i7029[i + 1], 1, i7028, '')
  }
  i7024.ToolIcons = i7028
  var i7031 = i7025[40]
  var i7030 = []
  for(var i = 0; i < i7031.length; i += 2) {
  request.r(i7031[i + 0], i7031[i + 1], 2, i7030, '')
  }
  i7024.AllDrags = i7030
  var i7033 = i7025[41]
  var i7032 = []
  for(var i = 0; i < i7033.length; i += 2) {
  request.r(i7033[i + 0], i7033[i + 1], 2, i7032, '')
  }
  i7024.AllSources = i7032
  var i7035 = i7025[42]
  var i7034 = []
  for(var i = 0; i < i7035.length; i += 2) {
  request.r(i7035[i + 0], i7035[i + 1], 2, i7034, '')
  }
  i7024.AllScratches = i7034
  i7024.stepsDone = i7025[43]
  i7024.levelNo = i7025[44]
  i7024.partNo = i7025[45]
  var i7037 = i7025[46]
  var i7036 = []
  for(var i = 0; i < i7037.length; i += 2) {
  request.r(i7037[i + 0], i7037[i + 1], 2, i7036, '')
  }
  i7024.disableOnLevelComplete = i7036
  return i7024
}

Deserializers["ZoomPos"] = function (request, data, root) {
  var i7038 = root || request.c( 'ZoomPos' )
  var i7039 = data
  i7038.CameraPos = new pc.Vec3( i7039[0], i7039[1], i7039[2] )
  i7038.CameraFOV = i7039[3]
  return i7038
}

Deserializers["PlayableCTA"] = function (request, data, root) {
  var i7052 = root || request.c( 'PlayableCTA' )
  var i7053 = data
  i7052.trigger = i7053[0]
  i7052.afterSeconds = i7053[1]
  i7052.afterTaps = i7053[2]
  request.r(i7053[3], i7053[4], 0, i7052, 'scratchProgress')
  i7052.scratchIndex = i7053[5]
  i7052.progressThreshold = i7053[6]
  request.r(i7053[7], i7053[8], 0, i7052, 'watchedTool')
  i7052.blockInputOnFire = !!i7053[9]
  i7052.refireOnEveryTap = !!i7053[10]
  i7052.refireDelay = i7053[11]
  i7052.showEndCard = !!i7053[12]
  request.r(i7053[13], i7053[14], 0, i7052, 'endCard')
  var i7055 = i7053[15]
  var i7054 = []
  for(var i = 0; i < i7055.length; i += 2) {
  request.r(i7055[i + 0], i7055[i + 1], 2, i7054, '')
  }
  i7052.thingsToDisableOnEndCard = i7054
  i7052.endCardDelay = i7053[16]
  i7052.showEndCardOnProgressTrigger = !!i7053[17]
  i7052.showEndCardOnToolAppearTrigger = !!i7053[18]
  i7052.onCtaFired = request.d('UnityEngine.Events.UnityEvent', i7053[19], i7052.onCtaFired)
  i7052.logWhenFired = !!i7053[20]
  return i7052
}

Deserializers["UnityEngine.Events.UnityEvent"] = function (request, data, root) {
  var i7056 = root || request.c( 'UnityEngine.Events.UnityEvent' )
  var i7057 = data
  i7056.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i7057[0], i7056.m_PersistentCalls)
  return i7056
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i7058 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i7059 = data
  var i7061 = i7059[0]
  var i7060 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i7061.length; i += 1) {
    i7060.add(request.d('UnityEngine.Events.PersistentCall', i7061[i + 0]));
  }
  i7058.m_Calls = i7060
  return i7058
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i7064 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i7065 = data
  request.r(i7065[0], i7065[1], 0, i7064, 'm_Target')
  i7064.m_TargetAssemblyTypeName = i7065[2]
  i7064.m_MethodName = i7065[3]
  i7064.m_Mode = i7065[4]
  i7064.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i7065[5], i7064.m_Arguments)
  i7064.m_CallState = i7065[6]
  return i7064
}

Deserializers["ScratchCardAsset.ScratchCardManager"] = function (request, data, root) {
  var i7066 = root || request.c( 'ScratchCardAsset.ScratchCardManager' )
  var i7067 = data
  request.r(i7067[0], i7067[1], 0, i7066, 'MainCamera')
  i7066.RenderType = i7067[2]
  request.r(i7067[3], i7067[4], 0, i7066, 'ScratchSurfaceSprite')
  i7066.ScratchSurfaceSpriteHasAlpha = !!i7067[5]
  i7066.MaskProgressCutOffValue = i7067[6]
  request.r(i7067[7], i7067[8], 0, i7066, 'EraseTexture')
  i7066.EraseTextureScale = new pc.Vec2( i7067[9], i7067[10] )
  i7066.InputEnabled = !!i7067[11]
  request.r(i7067[12], i7067[13], 0, i7066, 'Card')
  i7066.Mode = i7067[14]
  request.r(i7067[15], i7067[16], 0, i7066, 'Progress')
  request.r(i7067[17], i7067[18], 0, i7066, 'MeshCard')
  request.r(i7067[19], i7067[20], 0, i7066, 'SpriteCard')
  request.r(i7067[21], i7067[22], 0, i7066, 'ImageCard')
  request.r(i7067[23], i7067[24], 0, i7066, 'MaskShader')
  request.r(i7067[25], i7067[26], 0, i7066, 'BrushShader')
  request.r(i7067[27], i7067[28], 0, i7066, 'MaskProgressShader')
  request.r(i7067[29], i7067[30], 0, i7066, 'MaskProgressCutOffShader')
  return i7066
}

Deserializers["ScratchCardAsset.ScratchCard"] = function (request, data, root) {
  var i7068 = root || request.c( 'ScratchCardAsset.ScratchCard' )
  var i7069 = data
  request.r(i7069[0], i7069[1], 0, i7068, 'MainCamera')
  request.r(i7069[2], i7069[3], 0, i7068, 'Surface')
  i7068.RenderTextureQuality = i7069[4]
  request.r(i7069[5], i7069[6], 0, i7068, 'Eraser')
  request.r(i7069[7], i7069[8], 0, i7068, 'Progress')
  request.r(i7069[9], i7069[10], 0, i7068, 'ScratchSurface')
  request.r(i7069[11], i7069[12], 0, i7068, 'RenderTexture')
  i7068.BrushScale = new pc.Vec2( i7069[13], i7069[14] )
  request.r(i7069[15], i7069[16], 0, i7068, 'ToolTip')
  i7068.InputEnabled = !!i7069[17]
  i7068.IsScratching = !!i7069[18]
  i7068.useChangingScale = !!i7069[19]
  i7068.useGivenBrushScale = !!i7069[20]
  i7068.canSpreadMask = !!i7069[21]
  i7068.shouldPaintHoles = !!i7069[22]
  i7068.canRotateTip = !!i7069[23]
  i7068._mode = i7069[24]
  return i7068
}

Deserializers["ScratchCardAsset.EraseProgress"] = function (request, data, root) {
  var i7070 = root || request.c( 'ScratchCardAsset.EraseProgress' )
  var i7071 = data
  request.r(i7071[0], i7071[1], 0, i7070, 'Card')
  i7070.currentProgress = i7071[2]
  return i7070
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer"] = function (request, data, root) {
  var i7072 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer' )
  var i7073 = data
  i7072.color = new pc.Color(i7073[0], i7073[1], i7073[2], i7073[3])
  request.r(i7073[4], i7073[5], 0, i7072, 'sprite')
  i7072.flipX = !!i7073[6]
  i7072.flipY = !!i7073[7]
  i7072.drawMode = i7073[8]
  i7072.size = new pc.Vec2( i7073[9], i7073[10] )
  i7072.tileMode = i7073[11]
  i7072.adaptiveModeThreshold = i7073[12]
  i7072.maskInteraction = i7073[13]
  i7072.spriteSortPoint = i7073[14]
  i7072.enabled = !!i7073[15]
  request.r(i7073[16], i7073[17], 0, i7072, 'sharedMaterial')
  var i7075 = i7073[18]
  var i7074 = []
  for(var i = 0; i < i7075.length; i += 2) {
  request.r(i7075[i + 0], i7075[i + 1], 2, i7074, '')
  }
  i7072.sharedMaterials = i7074
  i7072.receiveShadows = !!i7073[19]
  i7072.shadowCastingMode = i7073[20]
  i7072.sortingLayerID = i7073[21]
  i7072.sortingOrder = i7073[22]
  i7072.lightmapIndex = i7073[23]
  i7072.lightmapSceneIndex = i7073[24]
  i7072.lightmapScaleOffset = new pc.Vec4( i7073[25], i7073[26], i7073[27], i7073[28] )
  i7072.lightProbeUsage = i7073[29]
  i7072.reflectionProbeUsage = i7073[30]
  return i7072
}

Deserializers["PlayParticlesOnCollision"] = function (request, data, root) {
  var i7076 = root || request.c( 'PlayParticlesOnCollision' )
  var i7077 = data
  request.r(i7077[0], i7077[1], 0, i7076, 'Target')
  request.r(i7077[2], i7077[3], 0, i7076, 'ParticlePrefab')
  i7076.destroyIt = !!i7077[4]
  i7076.stayAtPlace = !!i7077[5]
  i7076.disableOnCollision = !!i7077[6]
  i7076.OnCollisionEvent = request.d('UnityEngine.Events.UnityEvent', i7077[7], i7076.OnCollisionEvent)
  return i7076
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CircleCollider2D"] = function (request, data, root) {
  var i7078 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CircleCollider2D' )
  var i7079 = data
  i7078.radius = i7079[0]
  i7078.enabled = !!i7079[1]
  i7078.isTrigger = !!i7079[2]
  i7078.usedByEffector = !!i7079[3]
  i7078.density = i7079[4]
  i7078.offset = new pc.Vec2( i7079[5], i7079[6] )
  request.r(i7079[7], i7079[8], 0, i7078, 'material')
  return i7078
}

Deserializers["PlaySfxOnCollision"] = function (request, data, root) {
  var i7080 = root || request.c( 'PlaySfxOnCollision' )
  var i7081 = data
  request.r(i7081[0], i7081[1], 0, i7080, 'Tip')
  i7080.Mode = i7081[2]
  request.r(i7081[3], i7081[4], 0, i7080, 'DragInput')
  request.r(i7081[5], i7081[6], 0, i7080, 'Source')
  i7080.startVol = i7081[7]
  i7080.targetVol = i7081[8]
  i7080.duration = i7081[9]
  request.r(i7081[10], i7081[11], 0, i7080, 'Particles')
  i7080.isDone = !!i7081[12]
  i7080.isInArea = !!i7081[13]
  i7080.isPlaying = !!i7081[14]
  return i7080
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i7082 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i7083 = data
  request.r(i7083[0], i7083[1], 0, i7082, 'clip')
  request.r(i7083[2], i7083[3], 0, i7082, 'outputAudioMixerGroup')
  i7082.playOnAwake = !!i7083[4]
  i7082.loop = !!i7083[5]
  i7082.time = i7083[6]
  i7082.volume = i7083[7]
  i7082.pitch = i7083[8]
  i7082.enabled = !!i7083[9]
  return i7082
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.PolygonCollider2D"] = function (request, data, root) {
  var i7084 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.PolygonCollider2D' )
  var i7085 = data
  i7084.usedByComposite = !!i7085[0]
  i7084.autoTiling = !!i7085[1]
  var i7087 = i7085[2]
  var i7086 = []
  for(var i = 0; i < i7087.length; i += 1) {
  var i7089 = i7087[i + 0]
  var i7088 = []
  for(var i = 0; i < i7089.length; i += 2) {
    i7088.push( new pc.Vec2( i7089[i + 0], i7089[i + 1] ) );
  }
    i7086.push( i7088 );
  }
  i7084.points = i7086
  i7084.enabled = !!i7085[3]
  i7084.isTrigger = !!i7085[4]
  i7084.usedByEffector = !!i7085[5]
  i7084.density = i7085[6]
  i7084.offset = new pc.Vec2( i7085[7], i7085[8] )
  request.r(i7085[9], i7085[10], 0, i7084, 'material')
  return i7084
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D"] = function (request, data, root) {
  var i7096 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D' )
  var i7097 = data
  i7096.usedByComposite = !!i7097[0]
  i7096.autoTiling = !!i7097[1]
  i7096.size = new pc.Vec2( i7097[2], i7097[3] )
  i7096.edgeRadius = i7097[4]
  i7096.enabled = !!i7097[5]
  i7096.isTrigger = !!i7097[6]
  i7096.usedByEffector = !!i7097[7]
  i7096.density = i7097[8]
  i7096.offset = new pc.Vec2( i7097[9], i7097[10] )
  request.r(i7097[11], i7097[12], 0, i7096, 'material')
  return i7096
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animator"] = function (request, data, root) {
  var i7098 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animator' )
  var i7099 = data
  request.r(i7099[0], i7099[1], 0, i7098, 'animatorController')
  request.r(i7099[2], i7099[3], 0, i7098, 'avatar')
  i7098.updateMode = i7099[4]
  i7098.hasTransformHierarchy = !!i7099[5]
  i7098.applyRootMotion = !!i7099[6]
  var i7101 = i7099[7]
  var i7100 = []
  for(var i = 0; i < i7101.length; i += 2) {
  request.r(i7101[i + 0], i7101[i + 1], 2, i7100, '')
  }
  i7098.humanBones = i7100
  i7098.enabled = !!i7099[8]
  return i7098
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteMask"] = function (request, data, root) {
  var i7104 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteMask' )
  var i7105 = data
  i7104.frontSortingLayerID = i7105[0]
  i7104.frontSortingOrder = i7105[1]
  i7104.backSortingLayerID = i7105[2]
  i7104.backSortingOrder = i7105[3]
  i7104.alphaCutoff = i7105[4]
  request.r(i7105[5], i7105[6], 0, i7104, 'sprite')
  i7104.tileMode = i7105[7]
  i7104.isCustomRangeActive = !!i7105[8]
  i7104.spriteSortPoint = i7105[9]
  i7104.enabled = !!i7105[10]
  request.r(i7105[11], i7105[12], 0, i7104, 'sharedMaterial')
  var i7107 = i7105[13]
  var i7106 = []
  for(var i = 0; i < i7107.length; i += 2) {
  request.r(i7107[i + 0], i7107[i + 1], 2, i7106, '')
  }
  i7104.sharedMaterials = i7106
  i7104.receiveShadows = !!i7105[14]
  i7104.shadowCastingMode = i7105[15]
  i7104.sortingLayerID = i7105[16]
  i7104.sortingOrder = i7105[17]
  i7104.lightmapIndex = i7105[18]
  i7104.lightmapSceneIndex = i7105[19]
  i7104.lightmapScaleOffset = new pc.Vec4( i7105[20], i7105[21], i7105[22], i7105[23] )
  i7104.lightProbeUsage = i7105[24]
  i7104.reflectionProbeUsage = i7105[25]
  return i7104
}

Deserializers["UnityEngine.U2D.Animation.SpriteSkin"] = function (request, data, root) {
  var i7108 = root || request.c( 'UnityEngine.U2D.Animation.SpriteSkin' )
  var i7109 = data
  request.r(i7109[0], i7109[1], 0, i7108, 'm_RootBone')
  var i7111 = i7109[2]
  var i7110 = []
  for(var i = 0; i < i7111.length; i += 2) {
  request.r(i7111[i + 0], i7111[i + 1], 2, i7110, '')
  }
  i7108.m_BoneTransforms = i7110
  i7108.m_AlwaysUpdate = !!i7109[3]
  i7108.m_AutoRebind = !!i7109[4]
  return i7108
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.TrailRenderer"] = function (request, data, root) {
  var i7112 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.TrailRenderer' )
  var i7113 = data
  var i7115 = i7113[0]
  var i7114 = []
  for(var i = 0; i < i7115.length; i += 3) {
    i7114.push( new pc.Vec3( i7115[i + 0], i7115[i + 1], i7115[i + 2] ) );
  }
  i7112.positions = i7114
  i7112.positionCount = i7113[1]
  i7112.time = i7113[2]
  i7112.startWidth = i7113[3]
  i7112.endWidth = i7113[4]
  i7112.widthMultiplier = i7113[5]
  i7112.autodestruct = !!i7113[6]
  i7112.emitting = !!i7113[7]
  i7112.numCornerVertices = i7113[8]
  i7112.numCapVertices = i7113[9]
  i7112.minVertexDistance = i7113[10]
  i7112.colorGradient = i7113[11] ? new pc.ColorGradient(i7113[11][0], i7113[11][1], i7113[11][2]) : null
  i7112.startColor = new pc.Color(i7113[12], i7113[13], i7113[14], i7113[15])
  i7112.endColor = new pc.Color(i7113[16], i7113[17], i7113[18], i7113[19])
  i7112.generateLightingData = !!i7113[20]
  i7112.textureMode = i7113[21]
  i7112.alignment = i7113[22]
  i7112.widthCurve = new pc.AnimationCurve( { keys_flow: i7113[23] } )
  i7112.enabled = !!i7113[24]
  request.r(i7113[25], i7113[26], 0, i7112, 'sharedMaterial')
  var i7117 = i7113[27]
  var i7116 = []
  for(var i = 0; i < i7117.length; i += 2) {
  request.r(i7117[i + 0], i7117[i + 1], 2, i7116, '')
  }
  i7112.sharedMaterials = i7116
  i7112.receiveShadows = !!i7113[28]
  i7112.shadowCastingMode = i7113[29]
  i7112.sortingLayerID = i7113[30]
  i7112.sortingOrder = i7113[31]
  i7112.lightmapIndex = i7113[32]
  i7112.lightmapSceneIndex = i7113[33]
  i7112.lightmapScaleOffset = new pc.Vec4( i7113[34], i7113[35], i7113[36], i7113[37] )
  i7112.lightProbeUsage = i7113[38]
  i7112.reflectionProbeUsage = i7113[39]
  return i7112
}

Deserializers["BasicDrag"] = function (request, data, root) {
  var i7120 = root || request.c( 'BasicDrag' )
  var i7121 = data
  i7120.canDrag = !!i7121[0]
  i7120.dragByDelta = !!i7121[1]
  i7120.isDragging = !!i7121[2]
  i7120.moveWithPointer = !!i7121[3]
  i7120.canReturn = !!i7121[4]
  i7120.jumpOnReturn = !!i7121[5]
  i7120.returnTime = i7121[6]
  i7120.Tool_Offset = new pc.Vec3( i7121[7], i7121[8], i7121[9] )
  i7120.canScaleIncrease = !!i7121[10]
  i7120.Self_ScaleNew = new pc.Vec3( i7121[11], i7121[12], i7121[13] )
  i7120.canRotateOnPick = !!i7121[14]
  i7120.startRot = new pc.Vec3( i7121[15], i7121[16], i7121[17] )
  i7120.newRot = new pc.Vec3( i7121[18], i7121[19], i7121[20] )
  var i7123 = i7121[21]
  var i7122 = []
  for(var i = 0; i < i7123.length; i += 2) {
  request.r(i7123[i + 0], i7123[i + 1], 2, i7122, '')
  }
  i7120.childSprite = i7122
  request.r(i7121[22], i7121[23], 0, i7120, 'ToolSelectClip')
  request.r(i7121[24], i7121[25], 0, i7120, 'ToolLoopClip')
  request.r(i7121[26], i7121[27], 0, i7120, 'thisParticles')
  i7120.onDragparticle = !!i7121[28]
  request.r(i7121[29], i7121[30], 0, i7120, 'dragParticles')
  request.r(i7121[31], i7121[32], 0, i7120, 'anim')
  i7120.startPos = new pc.Vec3( i7121[33], i7121[34], i7121[35] )
  i7120.startScale = new pc.Vec3( i7121[36], i7121[37], i7121[38] )
  i7120.Vibration = !!i7121[39]
  i7120.isPlacedCannotMove = !!i7121[40]
  i7120.isObjectMovingWhileDragging = !!i7121[41]
  i7120.OnMouseDownEvent = request.d('System.Action', i7121[42], i7120.OnMouseDownEvent)
  i7120.OnMouseUpEvent = request.d('System.Action', i7121[43], i7120.OnMouseUpEvent)
  i7120.ProgStartEvent = request.d('System.Action', i7121[44], i7120.ProgStartEvent)
  i7120.ProgEndEvent = request.d('System.Action', i7121[45], i7120.ProgEndEvent)
  i7120.canCallMouseUpWhenGamePaused = !!i7121[46]
  i7120.ClampX_L = i7121[47]
  i7120.ClampX_H = i7121[48]
  i7120.ClampY_L = i7121[49]
  i7120.ClampY_H = i7121[50]
  i7120.startOrder = i7121[51]
  i7120.dontResetItIsInCollider = !!i7121[52]
  request.r(i7121[53], i7121[54], 0, i7120, 'thisCollider')
  request.r(i7121[55], i7121[56], 0, i7120, 'thisSR')
  i7120.OnMouseDownEventIndependentFromCanDrag = request.d('System.Action', i7121[57], i7120.OnMouseDownEventIndependentFromCanDrag)
  return i7120
}

Deserializers["System.Action"] = function (request, data, root) {
  var i7124 = root || request.c( 'System.Action' )
  var i7125 = data
  return i7124
}

Deserializers["BD_Progress"] = function (request, data, root) {
  var i7126 = root || request.c( 'BD_Progress' )
  var i7127 = data
  var i7129 = i7127[0]
  var i7128 = []
  for(var i = 0; i < i7129.length; i += 1) {
    i7128.push( request.d('ScratchData', i7129[i + 0]) );
  }
  i7126.AllScratches = i7128
  i7126.OnScratchComplete = request.d('UnityEngine.Events.UnityEvent', i7127[1], i7126.OnScratchComplete)
  i7126.isProgDone = !!i7127[2]
  i7126.canCallComplete = !!i7127[3]
  i7126.CollectiveAppear = !!i7127[4]
  i7126.tipControl = !!i7127[5]
  i7126.progressControl = !!i7127[6]
  request.r(i7127[7], i7127[8], 0, i7126, 'thisDrag')
  i7126.CompleteEvent = request.d('System.Action', i7127[9], i7126.CompleteEvent)
  i7126.SubCompleteEvent = request.d('System.Action', i7127[10], i7126.SubCompleteEvent)
  return i7126
}

Deserializers["ScratchData"] = function (request, data, root) {
  var i7132 = root || request.c( 'ScratchData' )
  var i7133 = data
  request.r(i7133[0], i7133[1], 0, i7132, 'ScratchManager')
  i7132.scratchLimit = i7133[2]
  i7132.isComplete = !!i7133[3]
  return i7132
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i7134 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i7135 = data
  request.r(i7135[0], i7135[1], 0, i7134, 'm_ObjectArgument')
  i7134.m_ObjectArgumentAssemblyTypeName = i7135[2]
  i7134.m_IntArgument = i7135[3]
  i7134.m_FloatArgument = i7135[4]
  i7134.m_StringArgument = i7135[5]
  i7134.m_BoolArgument = !!i7135[6]
  return i7134
}

Deserializers["BD_Clamp"] = function (request, data, root) {
  var i7136 = root || request.c( 'BD_Clamp' )
  var i7137 = data
  i7136.ClampX_L = i7137[0]
  i7136.ClampX_H = i7137[1]
  i7136.ClampY_L = i7137[2]
  i7136.ClampY_H = i7137[3]
  return i7136
}

Deserializers["BD_ToolRotate"] = function (request, data, root) {
  var i7138 = root || request.c( 'BD_ToolRotate' )
  var i7139 = data
  i7138.startDelay = i7139[0]
  request.r(i7139[1], i7139[2], 0, i7138, 'Tool')
  request.r(i7139[3], i7139[4], 0, i7138, 'Clamp')
  request.r(i7139[5], i7139[6], 0, i7138, 'Pivot')
  i7138.MinAngle = new pc.Vec3( i7139[7], i7139[8], i7139[9] )
  i7138.MaxAngle = new pc.Vec3( i7139[10], i7139[11], i7139[12] )
  i7138.rotationSpeed = i7139[13]
  return i7138
}

Deserializers["BD_CameraFollow"] = function (request, data, root) {
  var i7140 = root || request.c( 'BD_CameraFollow' )
  var i7141 = data
  request.r(i7141[0], i7141[1], 0, i7140, 'Tool')
  request.r(i7141[2], i7141[3], 0, i7140, 'Pivot')
  i7140.FOV = i7141[4]
  i7140.Y_L = i7141[5]
  i7140.Y_H = i7141[6]
  i7140.X_L = i7141[7]
  i7140.X_R = i7141[8]
  i7140.startDelay = i7141[9]
  i7140.duration = i7141[10]
  return i7140
}

Deserializers["BD_AnimatorDrag"] = function (request, data, root) {
  var i7142 = root || request.c( 'BD_AnimatorDrag' )
  var i7143 = data
  request.r(i7143[0], i7143[1], 0, i7142, 'BD')
  request.r(i7143[2], i7143[3], 0, i7142, 'anim')
  request.r(i7143[4], i7143[5], 0, i7142, 'Source')
  i7142.Vibration = !!i7143[6]
  i7142.isCompletable = !!i7143[7]
  i7142.completionThreshold = i7143[8]
  i7142.OnComplete = request.d('UnityEngine.Events.UnityEvent', i7143[9], i7142.OnComplete)
  return i7142
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D"] = function (request, data, root) {
  var i7144 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D' )
  var i7145 = data
  i7144.bodyType = i7145[0]
  request.r(i7145[1], i7145[2], 0, i7144, 'material')
  i7144.simulated = !!i7145[3]
  i7144.useAutoMass = !!i7145[4]
  i7144.mass = i7145[5]
  i7144.drag = i7145[6]
  i7144.angularDrag = i7145[7]
  i7144.gravityScale = i7145[8]
  i7144.collisionDetectionMode = i7145[9]
  i7144.sleepMode = i7145[10]
  i7144.constraints = i7145[11]
  return i7144
}

Deserializers["BD_SpriteChange"] = function (request, data, root) {
  var i7146 = root || request.c( 'BD_SpriteChange' )
  var i7147 = data
  request.r(i7147[0], i7147[1], 0, i7146, 'BD')
  request.r(i7147[2], i7147[3], 0, i7146, 'SR')
  request.r(i7147[4], i7147[5], 0, i7146, 'Default')
  request.r(i7147[6], i7147[7], 0, i7146, 'Picked')
  i7146.resetOnRelease = !!i7147[8]
  return i7146
}

Deserializers["BD_ProgressHelper"] = function (request, data, root) {
  var i7148 = root || request.c( 'BD_ProgressHelper' )
  var i7149 = data
  request.r(i7149[0], i7149[1], 0, i7148, 'BD_Progress')
  request.r(i7149[2], i7149[3], 0, i7148, 'fadeSprite')
  i7148.fadeIn = !!i7149[4]
  return i7148
}

Deserializers["DestroyObj"] = function (request, data, root) {
  var i7150 = root || request.c( 'DestroyObj' )
  var i7151 = data
  i7150.destroyDelay = i7151[0]
  return i7150
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Cubemap"] = function (request, data, root) {
  var i7152 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Cubemap' )
  var i7153 = data
  i7152.name = i7153[0]
  i7152.atlasId = i7153[1]
  i7152.mipmapCount = i7153[2]
  i7152.hdr = !!i7153[3]
  i7152.size = i7153[4]
  i7152.anisoLevel = i7153[5]
  i7152.filterMode = i7153[6]
  var i7155 = i7153[7]
  var i7154 = []
  for(var i = 0; i < i7155.length; i += 4) {
    i7154.push( UnityEngine.Rect.MinMaxRect(i7155[i + 0], i7155[i + 1], i7155[i + 2], i7155[i + 3]) );
  }
  i7152.rects = i7154
  i7152.wrapU = i7153[8]
  i7152.wrapV = i7153[9]
  return i7152
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i7158 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i7159 = data
  i7158.name = i7159[0]
  i7158.index = i7159[1]
  i7158.startup = !!i7159[2]
  return i7158
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i7160 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i7161 = data
  i7160.aspect = i7161[0]
  i7160.orthographic = !!i7161[1]
  i7160.orthographicSize = i7161[2]
  i7160.backgroundColor = new pc.Color(i7161[3], i7161[4], i7161[5], i7161[6])
  i7160.nearClipPlane = i7161[7]
  i7160.farClipPlane = i7161[8]
  i7160.fieldOfView = i7161[9]
  i7160.depth = i7161[10]
  i7160.clearFlags = i7161[11]
  i7160.cullingMask = i7161[12]
  i7160.rect = i7161[13]
  request.r(i7161[14], i7161[15], 0, i7160, 'targetTexture')
  i7160.usePhysicalProperties = !!i7161[16]
  i7160.focalLength = i7161[17]
  i7160.sensorSize = new pc.Vec2( i7161[18], i7161[19] )
  i7160.lensShift = new pc.Vec2( i7161[20], i7161[21] )
  i7160.gateFit = i7161[22]
  i7160.commandBufferCount = i7161[23]
  i7160.cameraType = i7161[24]
  i7160.enabled = !!i7161[25]
  return i7160
}

Deserializers["CameraController"] = function (request, data, root) {
  var i7162 = root || request.c( 'CameraController' )
  var i7163 = data
  request.r(i7163[0], i7163[1], 0, i7162, 'cam')
  i7162.defaultPosition = new pc.Vec3( i7163[2], i7163[3], i7163[4] )
  i7162.defaultSize = i7163[5]
  i7162.defaultFOV = i7163[6]
  i7162.defaultDuration = i7163[7]
  i7162.defaultEase = i7163[8]
  return i7162
}

Deserializers["MusicSource"] = function (request, data, root) {
  var i7164 = root || request.c( 'MusicSource' )
  var i7165 = data
  request.r(i7165[0], i7165[1], 0, i7164, 'source')
  return i7164
}

Deserializers["UI_Manager"] = function (request, data, root) {
  var i7166 = root || request.c( 'UI_Manager' )
  var i7167 = data
  i7166.levelCompleted = !!i7167[0]
  i7166.isPauseActive = !!i7167[1]
  i7166.loadIndex = i7167[2]
  request.r(i7167[3], i7167[4], 0, i7166, 'removeAdsButton')
  request.r(i7167[5], i7167[6], 0, i7166, 'pauseButton')
  request.r(i7167[7], i7167[8], 0, i7166, 'Fade_Img')
  request.r(i7167[9], i7167[10], 0, i7166, 'TopBarAnim')
  request.r(i7167[11], i7167[12], 0, i7166, 'MainPanel')
  request.r(i7167[13], i7167[14], 0, i7166, 'PausePanel')
  request.r(i7167[15], i7167[16], 0, i7166, 'PausePopUp')
  request.r(i7167[17], i7167[18], 0, i7166, 'PauseCanvasGroup')
  request.r(i7167[19], i7167[20], 0, i7166, 'RateUsPanel')
  request.r(i7167[21], i7167[22], 0, i7166, 'RateUsPopUp')
  request.r(i7167[23], i7167[24], 0, i7166, 'RemoveAdsPanel')
  request.r(i7167[25], i7167[26], 0, i7166, 'RemoveAdsPopUp')
  request.r(i7167[27], i7167[28], 0, i7166, 'RemoveAdsCanvasGroup')
  var i7169 = i7167[29]
  var i7168 = []
  for(var i = 0; i < i7169.length; i += 2) {
  request.r(i7169[i + 0], i7169[i + 1], 2, i7168, '')
  }
  i7166.RemoveAdsAnims = i7168
  request.r(i7167[30], i7167[31], 0, i7166, 'CompletePanel')
  request.r(i7167[32], i7167[33], 0, i7166, 'LevelIcon')
  request.r(i7167[34], i7167[35], 0, i7166, 'CompleteParticles')
  request.r(i7167[36], i7167[37], 0, i7166, 'progressBar')
  request.r(i7167[38], i7167[39], 0, i7166, 'progressText')
  request.r(i7167[40], i7167[41], 0, i7166, 'toolIcon1')
  request.r(i7167[42], i7167[43], 0, i7166, 'toolIcon2')
  request.r(i7167[44], i7167[45], 0, i7166, 'toolIcon3')
  request.r(i7167[46], i7167[47], 0, i7166, 'toolIcon4')
  request.r(i7167[48], i7167[49], 0, i7166, 'target1')
  request.r(i7167[50], i7167[51], 0, i7166, 'target2')
  i7166.toolMoveDuration = i7167[52]
  i7166.currentIndex = i7167[53]
  var i7171 = i7167[54]
  var i7170 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Sprite')))
  for(var i = 0; i < i7171.length; i += 2) {
  request.r(i7171[i + 0], i7171[i + 1], 1, i7170, '')
  }
  i7166.allTools = i7170
  request.r(i7167[55], i7167[56], 0, i7166, 'clockProgress')
  request.r(i7167[57], i7167[58], 0, i7166, 'clockProgressFill')
  request.r(i7167[59], i7167[60], 0, i7166, 'clockAudio')
  i7166.moveDistance = i7167[61]
  i7166.animationDuration = i7167[62]
  i7166.greyBgChildName = i7167[63]
  i7166.pushOffset = i7167[64]
  return i7166
}

Deserializers["GameManagerPlayable"] = function (request, data, root) {
  var i7174 = root || request.c( 'GameManagerPlayable' )
  var i7175 = data
  request.r(i7175[0], i7175[1], 0, i7174, 'endParticles')
  request.r(i7175[2], i7175[3], 0, i7174, 'stepCompleteParticles')
  request.r(i7175[4], i7175[5], 0, i7174, 'DefaultMat')
  request.r(i7175[6], i7175[7], 0, i7174, 'BG_Music')
  request.r(i7175[8], i7175[9], 0, i7174, 'restoreEffectShader')
  request.r(i7175[10], i7175[11], 0, i7174, 'stickerEffectShader')
  i7174.isComplete = !!i7175[12]
  i7174.isPaused = !!i7175[13]
  request.r(i7175[14], i7175[15], 0, i7174, 'currentLevel')
  i7174.startLevelOnPlay = !!i7175[16]
  i7174.currentLevelNo = i7175[17]
  return i7174
}

Deserializers["AudioController"] = function (request, data, root) {
  var i7176 = root || request.c( 'AudioController' )
  var i7177 = data
  request.r(i7177[0], i7177[1], 0, i7176, 'MainMixer')
  request.r(i7177[2], i7177[3], 0, i7176, 'UiClick')
  request.r(i7177[4], i7177[5], 0, i7176, 'UiClickSource')
  var i7179 = i7177[6]
  var i7178 = []
  for(var i = 0; i < i7179.length; i += 2) {
  request.r(i7179[i + 0], i7179[i + 1], 2, i7178, '')
  }
  i7176.SfxSources = i7178
  var i7181 = i7177[7]
  var i7180 = []
  for(var i = 0; i < i7181.length; i += 2) {
  request.r(i7181[i + 0], i7181[i + 1], 2, i7180, '')
  }
  i7176.AllClips = i7180
  return i7176
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i7184 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i7185 = data
  i7184.pivot = new pc.Vec2( i7185[0], i7185[1] )
  i7184.anchorMin = new pc.Vec2( i7185[2], i7185[3] )
  i7184.anchorMax = new pc.Vec2( i7185[4], i7185[5] )
  i7184.sizeDelta = new pc.Vec2( i7185[6], i7185[7] )
  i7184.anchoredPosition3D = new pc.Vec3( i7185[8], i7185[9], i7185[10] )
  i7184.rotation = new pc.Quat(i7185[11], i7185[12], i7185[13], i7185[14])
  i7184.scale = new pc.Vec3( i7185[15], i7185[16], i7185[17] )
  return i7184
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i7186 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i7187 = data
  i7186.planeDistance = i7187[0]
  i7186.referencePixelsPerUnit = i7187[1]
  i7186.isFallbackOverlay = !!i7187[2]
  i7186.renderMode = i7187[3]
  i7186.renderOrder = i7187[4]
  i7186.sortingLayerName = i7187[5]
  i7186.sortingOrder = i7187[6]
  i7186.scaleFactor = i7187[7]
  request.r(i7187[8], i7187[9], 0, i7186, 'worldCamera')
  i7186.overrideSorting = !!i7187[10]
  i7186.pixelPerfect = !!i7187[11]
  i7186.targetDisplay = i7187[12]
  i7186.overridePixelPerfect = !!i7187[13]
  i7186.enabled = !!i7187[14]
  return i7186
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i7188 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i7189 = data
  i7188.m_UiScaleMode = i7189[0]
  i7188.m_ReferencePixelsPerUnit = i7189[1]
  i7188.m_ScaleFactor = i7189[2]
  i7188.m_ReferenceResolution = new pc.Vec2( i7189[3], i7189[4] )
  i7188.m_ScreenMatchMode = i7189[5]
  i7188.m_MatchWidthOrHeight = i7189[6]
  i7188.m_PhysicalUnit = i7189[7]
  i7188.m_FallbackScreenDPI = i7189[8]
  i7188.m_DefaultSpriteDPI = i7189[9]
  i7188.m_DynamicPixelsPerUnit = i7189[10]
  i7188.m_PresetInfoIsWorld = !!i7189[11]
  return i7188
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i7190 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i7191 = data
  i7190.m_IgnoreReversedGraphics = !!i7191[0]
  i7190.m_BlockingObjects = i7191[1]
  i7190.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i7191[2] )
  return i7190
}

Deserializers["DG.Tweening.DOTweenAnimation"] = function (request, data, root) {
  var i7192 = root || request.c( 'DG.Tweening.DOTweenAnimation' )
  var i7193 = data
  i7192.targetIsSelf = !!i7193[0]
  request.r(i7193[1], i7193[2], 0, i7192, 'targetGO')
  i7192.tweenTargetIsTargetGO = !!i7193[3]
  i7192.delay = i7193[4]
  i7192.duration = i7193[5]
  i7192.easeType = i7193[6]
  i7192.easeCurve = new pc.AnimationCurve( { keys_flow: i7193[7] } )
  i7192.loopType = i7193[8]
  i7192.loops = i7193[9]
  i7192.id = i7193[10]
  i7192.isRelative = !!i7193[11]
  i7192.isFrom = !!i7193[12]
  i7192.isIndependentUpdate = !!i7193[13]
  i7192.autoKill = !!i7193[14]
  i7192.autoGenerate = !!i7193[15]
  i7192.isActive = !!i7193[16]
  i7192.isValid = !!i7193[17]
  request.r(i7193[18], i7193[19], 0, i7192, 'target')
  i7192.animationType = i7193[20]
  i7192.targetType = i7193[21]
  i7192.forcedTargetType = i7193[22]
  i7192.autoPlay = !!i7193[23]
  i7192.useTargetAsV3 = !!i7193[24]
  i7192.endValueFloat = i7193[25]
  i7192.endValueV3 = new pc.Vec3( i7193[26], i7193[27], i7193[28] )
  i7192.endValueV2 = new pc.Vec2( i7193[29], i7193[30] )
  i7192.endValueColor = new pc.Color(i7193[31], i7193[32], i7193[33], i7193[34])
  i7192.endValueString = i7193[35]
  i7192.endValueRect = UnityEngine.Rect.MinMaxRect(i7193[36], i7193[37], i7193[38], i7193[39])
  request.r(i7193[40], i7193[41], 0, i7192, 'endValueTransform')
  i7192.optionalBool0 = !!i7193[42]
  i7192.optionalBool1 = !!i7193[43]
  i7192.optionalFloat0 = i7193[44]
  i7192.optionalInt0 = i7193[45]
  i7192.optionalRotationMode = i7193[46]
  i7192.optionalScrambleMode = i7193[47]
  i7192.optionalShakeRandomnessMode = i7193[48]
  i7192.optionalString = i7193[49]
  i7192.updateType = i7193[50]
  i7192.isSpeedBased = !!i7193[51]
  i7192.hasOnStart = !!i7193[52]
  i7192.hasOnPlay = !!i7193[53]
  i7192.hasOnUpdate = !!i7193[54]
  i7192.hasOnStepComplete = !!i7193[55]
  i7192.hasOnComplete = !!i7193[56]
  i7192.hasOnTweenCreated = !!i7193[57]
  i7192.hasOnRewind = !!i7193[58]
  i7192.onStart = request.d('UnityEngine.Events.UnityEvent', i7193[59], i7192.onStart)
  i7192.onPlay = request.d('UnityEngine.Events.UnityEvent', i7193[60], i7192.onPlay)
  i7192.onUpdate = request.d('UnityEngine.Events.UnityEvent', i7193[61], i7192.onUpdate)
  i7192.onStepComplete = request.d('UnityEngine.Events.UnityEvent', i7193[62], i7192.onStepComplete)
  i7192.onComplete = request.d('UnityEngine.Events.UnityEvent', i7193[63], i7192.onComplete)
  i7192.onTweenCreated = request.d('UnityEngine.Events.UnityEvent', i7193[64], i7192.onTweenCreated)
  i7192.onRewind = request.d('UnityEngine.Events.UnityEvent', i7193[65], i7192.onRewind)
  return i7192
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i7194 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i7195 = data
  i7194.cullTransparentMesh = !!i7195[0]
  return i7194
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i7196 = root || request.c( 'UnityEngine.UI.Image' )
  var i7197 = data
  request.r(i7197[0], i7197[1], 0, i7196, 'm_Sprite')
  i7196.m_Type = i7197[2]
  i7196.m_PreserveAspect = !!i7197[3]
  i7196.m_FillCenter = !!i7197[4]
  i7196.m_FillMethod = i7197[5]
  i7196.m_FillAmount = i7197[6]
  i7196.m_FillClockwise = !!i7197[7]
  i7196.m_FillOrigin = i7197[8]
  i7196.m_UseSpriteMesh = !!i7197[9]
  i7196.m_PixelsPerUnitMultiplier = i7197[10]
  request.r(i7197[11], i7197[12], 0, i7196, 'm_Material')
  i7196.m_Maskable = !!i7197[13]
  i7196.m_Color = new pc.Color(i7197[14], i7197[15], i7197[16], i7197[17])
  i7196.m_RaycastTarget = !!i7197[18]
  i7196.m_RaycastPadding = new pc.Vec4( i7197[19], i7197[20], i7197[21], i7197[22] )
  return i7196
}

Deserializers["UnityEngine.UI.Text"] = function (request, data, root) {
  var i7198 = root || request.c( 'UnityEngine.UI.Text' )
  var i7199 = data
  i7198.m_FontData = request.d('UnityEngine.UI.FontData', i7199[0], i7198.m_FontData)
  i7198.m_Text = i7199[1]
  request.r(i7199[2], i7199[3], 0, i7198, 'm_Material')
  i7198.m_Maskable = !!i7199[4]
  i7198.m_Color = new pc.Color(i7199[5], i7199[6], i7199[7], i7199[8])
  i7198.m_RaycastTarget = !!i7199[9]
  i7198.m_RaycastPadding = new pc.Vec4( i7199[10], i7199[11], i7199[12], i7199[13] )
  return i7198
}

Deserializers["UnityEngine.UI.FontData"] = function (request, data, root) {
  var i7200 = root || request.c( 'UnityEngine.UI.FontData' )
  var i7201 = data
  request.r(i7201[0], i7201[1], 0, i7200, 'm_Font')
  i7200.m_FontSize = i7201[2]
  i7200.m_FontStyle = i7201[3]
  i7200.m_BestFit = !!i7201[4]
  i7200.m_MinSize = i7201[5]
  i7200.m_MaxSize = i7201[6]
  i7200.m_Alignment = i7201[7]
  i7200.m_AlignByGeometry = !!i7201[8]
  i7200.m_RichText = !!i7201[9]
  i7200.m_HorizontalOverflow = i7201[10]
  i7200.m_VerticalOverflow = i7201[11]
  i7200.m_LineSpacing = i7201[12]
  return i7200
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i7202 = root || request.c( 'UnityEngine.UI.Button' )
  var i7203 = data
  i7202.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i7203[0], i7202.m_OnClick)
  i7202.m_Navigation = request.d('UnityEngine.UI.Navigation', i7203[1], i7202.m_Navigation)
  i7202.m_Transition = i7203[2]
  i7202.m_Colors = request.d('UnityEngine.UI.ColorBlock', i7203[3], i7202.m_Colors)
  i7202.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i7203[4], i7202.m_SpriteState)
  i7202.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i7203[5], i7202.m_AnimationTriggers)
  i7202.m_Interactable = !!i7203[6]
  request.r(i7203[7], i7203[8], 0, i7202, 'm_TargetGraphic')
  return i7202
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i7204 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i7205 = data
  i7204.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i7205[0], i7204.m_PersistentCalls)
  return i7204
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i7206 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i7207 = data
  i7206.m_Mode = i7207[0]
  i7206.m_WrapAround = !!i7207[1]
  request.r(i7207[2], i7207[3], 0, i7206, 'm_SelectOnUp')
  request.r(i7207[4], i7207[5], 0, i7206, 'm_SelectOnDown')
  request.r(i7207[6], i7207[7], 0, i7206, 'm_SelectOnLeft')
  request.r(i7207[8], i7207[9], 0, i7206, 'm_SelectOnRight')
  return i7206
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i7208 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i7209 = data
  i7208.m_NormalColor = new pc.Color(i7209[0], i7209[1], i7209[2], i7209[3])
  i7208.m_HighlightedColor = new pc.Color(i7209[4], i7209[5], i7209[6], i7209[7])
  i7208.m_PressedColor = new pc.Color(i7209[8], i7209[9], i7209[10], i7209[11])
  i7208.m_SelectedColor = new pc.Color(i7209[12], i7209[13], i7209[14], i7209[15])
  i7208.m_DisabledColor = new pc.Color(i7209[16], i7209[17], i7209[18], i7209[19])
  i7208.m_ColorMultiplier = i7209[20]
  i7208.m_FadeDuration = i7209[21]
  return i7208
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i7210 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i7211 = data
  request.r(i7211[0], i7211[1], 0, i7210, 'm_HighlightedSprite')
  request.r(i7211[2], i7211[3], 0, i7210, 'm_PressedSprite')
  request.r(i7211[4], i7211[5], 0, i7210, 'm_SelectedSprite')
  request.r(i7211[6], i7211[7], 0, i7210, 'm_DisabledSprite')
  return i7210
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i7212 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i7213 = data
  i7212.m_NormalTrigger = i7213[0]
  i7212.m_HighlightedTrigger = i7213[1]
  i7212.m_PressedTrigger = i7213[2]
  i7212.m_SelectedTrigger = i7213[3]
  i7212.m_DisabledTrigger = i7213[4]
  return i7212
}

Deserializers["PlayableHudRuntime"] = function (request, data, root) {
  var i7214 = root || request.c( 'PlayableHudRuntime' )
  var i7215 = data
  return i7214
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i7216 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i7217 = data
  request.r(i7217[0], i7217[1], 0, i7216, 'm_FirstSelected')
  i7216.m_sendNavigationEvents = !!i7217[2]
  i7216.m_DragThreshold = i7217[3]
  return i7216
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i7218 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i7219 = data
  i7218.m_HorizontalAxis = i7219[0]
  i7218.m_VerticalAxis = i7219[1]
  i7218.m_SubmitButton = i7219[2]
  i7218.m_CancelButton = i7219[3]
  i7218.m_InputActionsPerSecond = i7219[4]
  i7218.m_RepeatDelay = i7219[5]
  i7218.m_ForceModuleActive = !!i7219[6]
  i7218.m_SendPointerHoverToParent = !!i7219[7]
  return i7218
}

Deserializers["PlayableRouter"] = function (request, data, root) {
  var i7220 = root || request.c( 'PlayableRouter' )
  var i7221 = data
  var i7223 = i7221[0]
  var i7222 = []
  for(var i = 0; i < i7223.length; i += 2) {
  request.r(i7223[i + 0], i7223[i + 1], 2, i7222, '')
  }
  i7220.menuObjects = i7222
  var i7225 = i7221[1]
  var i7224 = []
  for(var i = 0; i < i7225.length; i += 2) {
  request.r(i7225[i + 0], i7225[i + 1], 2, i7224, '')
  }
  i7220.gameplayObjects = i7224
  var i7227 = i7221[2]
  var i7226 = []
  for(var i = 0; i < i7227.length; i += 1) {
    i7226.push( request.d('PlayableRouter+SubLevelSlot', i7227[i + 0]) );
  }
  i7220.subLevels = i7226
  i7220.fadeDuration = i7221[3]
  i7220.onMenuClosing = request.d('UnityEngine.Events.UnityEvent', i7221[4], i7220.onMenuClosing)
  i7220.lockedMessage = i7221[5]
  i7220.lockedTapsToCTA = i7221[6]
  return i7220
}

Deserializers["PlayableRouter+SubLevelSlot"] = function (request, data, root) {
  var i7230 = root || request.c( 'PlayableRouter+SubLevelSlot' )
  var i7231 = data
  request.r(i7231[0], i7231[1], 0, i7230, 'button')
  request.r(i7231[2], i7231[3], 0, i7230, 'level')
  return i7230
}

Deserializers["ToastManager"] = function (request, data, root) {
  var i7232 = root || request.c( 'ToastManager' )
  var i7233 = data
  request.r(i7233[0], i7233[1], 0, i7232, 'toastPanel')
  request.r(i7233[2], i7233[3], 0, i7232, 'toastPopup')
  request.r(i7233[4], i7233[5], 0, i7232, 'canvasGroup')
  request.r(i7233[6], i7233[7], 0, i7232, 'toastText')
  i7232.startY = i7233[8]
  i7232.visibleY = i7233[9]
  i7232.endY = i7233[10]
  i7232.animationTime = i7233[11]
  i7232.animationTimeUp = i7233[12]
  return i7232
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasGroup"] = function (request, data, root) {
  var i7234 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasGroup' )
  var i7235 = data
  i7234.m_Alpha = i7235[0]
  i7234.m_Interactable = !!i7235[1]
  i7234.m_BlocksRaycasts = !!i7235[2]
  i7234.m_IgnoreParentGroups = !!i7235[3]
  i7234.enabled = !!i7235[4]
  return i7234
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i7236 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i7237 = data
  i7236.ambientIntensity = i7237[0]
  i7236.reflectionIntensity = i7237[1]
  i7236.ambientMode = i7237[2]
  i7236.ambientLight = new pc.Color(i7237[3], i7237[4], i7237[5], i7237[6])
  i7236.ambientSkyColor = new pc.Color(i7237[7], i7237[8], i7237[9], i7237[10])
  i7236.ambientGroundColor = new pc.Color(i7237[11], i7237[12], i7237[13], i7237[14])
  i7236.ambientEquatorColor = new pc.Color(i7237[15], i7237[16], i7237[17], i7237[18])
  i7236.fogColor = new pc.Color(i7237[19], i7237[20], i7237[21], i7237[22])
  i7236.fogEndDistance = i7237[23]
  i7236.fogStartDistance = i7237[24]
  i7236.fogDensity = i7237[25]
  i7236.fog = !!i7237[26]
  request.r(i7237[27], i7237[28], 0, i7236, 'skybox')
  i7236.fogMode = i7237[29]
  var i7239 = i7237[30]
  var i7238 = []
  for(var i = 0; i < i7239.length; i += 1) {
    i7238.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i7239[i + 0]) );
  }
  i7236.lightmaps = i7238
  i7236.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i7237[31], i7236.lightProbes)
  i7236.lightmapsMode = i7237[32]
  i7236.mixedBakeMode = i7237[33]
  i7236.environmentLightingMode = i7237[34]
  i7236.ambientProbe = new pc.SphericalHarmonicsL2(i7237[35])
  request.r(i7237[36], i7237[37], 0, i7236, 'customReflection')
  request.r(i7237[38], i7237[39], 0, i7236, 'defaultReflection')
  i7236.defaultReflectionMode = i7237[40]
  i7236.defaultReflectionResolution = i7237[41]
  i7236.sunLightObjectId = i7237[42]
  i7236.pixelLightCount = i7237[43]
  i7236.defaultReflectionHDR = !!i7237[44]
  i7236.hasLightDataAsset = !!i7237[45]
  i7236.hasManualGenerate = !!i7237[46]
  return i7236
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i7242 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i7243 = data
  request.r(i7243[0], i7243[1], 0, i7242, 'lightmapColor')
  request.r(i7243[2], i7243[3], 0, i7242, 'lightmapDirection')
  request.r(i7243[4], i7243[5], 0, i7242, 'shadowMask')
  return i7242
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i7244 = root || new UnityEngine.LightProbes()
  var i7245 = data
  return i7244
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i7250 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i7251 = data
  var i7253 = i7251[0]
  var i7252 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i7253.length; i += 1) {
    i7252.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i7253[i + 0]));
  }
  i7250.ShaderCompilationErrors = i7252
  i7250.name = i7251[1]
  i7250.guid = i7251[2]
  var i7255 = i7251[3]
  var i7254 = []
  for(var i = 0; i < i7255.length; i += 1) {
    i7254.push( i7255[i + 0] );
  }
  i7250.shaderDefinedKeywords = i7254
  var i7257 = i7251[4]
  var i7256 = []
  for(var i = 0; i < i7257.length; i += 1) {
    i7256.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i7257[i + 0]) );
  }
  i7250.passes = i7256
  var i7259 = i7251[5]
  var i7258 = []
  for(var i = 0; i < i7259.length; i += 1) {
    i7258.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i7259[i + 0]) );
  }
  i7250.usePasses = i7258
  var i7261 = i7251[6]
  var i7260 = []
  for(var i = 0; i < i7261.length; i += 1) {
    i7260.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i7261[i + 0]) );
  }
  i7250.defaultParameterValues = i7260
  request.r(i7251[7], i7251[8], 0, i7250, 'unityFallbackShader')
  i7250.readDepth = !!i7251[9]
  i7250.hasDepthOnlyPass = !!i7251[10]
  i7250.isCreatedByShaderGraph = !!i7251[11]
  i7250.disableBatching = !!i7251[12]
  i7250.compiled = !!i7251[13]
  return i7250
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i7264 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i7265 = data
  i7264.shaderName = i7265[0]
  i7264.errorMessage = i7265[1]
  return i7264
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i7270 = root || new pc.UnityShaderPass()
  var i7271 = data
  i7270.id = i7271[0]
  i7270.subShaderIndex = i7271[1]
  i7270.name = i7271[2]
  i7270.passType = i7271[3]
  i7270.grabPassTextureName = i7271[4]
  i7270.usePass = !!i7271[5]
  i7270.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i7271[6], i7270.zTest)
  i7270.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i7271[7], i7270.zWrite)
  i7270.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i7271[8], i7270.culling)
  i7270.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i7271[9], i7270.blending)
  i7270.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i7271[10], i7270.alphaBlending)
  i7270.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i7271[11], i7270.colorWriteMask)
  i7270.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i7271[12], i7270.offsetUnits)
  i7270.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i7271[13], i7270.offsetFactor)
  i7270.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i7271[14], i7270.stencilRef)
  i7270.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i7271[15], i7270.stencilReadMask)
  i7270.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i7271[16], i7270.stencilWriteMask)
  i7270.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i7271[17], i7270.stencilOp)
  i7270.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i7271[18], i7270.stencilOpFront)
  i7270.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i7271[19], i7270.stencilOpBack)
  var i7273 = i7271[20]
  var i7272 = []
  for(var i = 0; i < i7273.length; i += 1) {
    i7272.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i7273[i + 0]) );
  }
  i7270.tags = i7272
  var i7275 = i7271[21]
  var i7274 = []
  for(var i = 0; i < i7275.length; i += 1) {
    i7274.push( i7275[i + 0] );
  }
  i7270.passDefinedKeywords = i7274
  var i7277 = i7271[22]
  var i7276 = []
  for(var i = 0; i < i7277.length; i += 1) {
    i7276.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i7277[i + 0]) );
  }
  i7270.passDefinedKeywordGroups = i7276
  var i7279 = i7271[23]
  var i7278 = []
  for(var i = 0; i < i7279.length; i += 1) {
    i7278.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i7279[i + 0]) );
  }
  i7270.variants = i7278
  var i7281 = i7271[24]
  var i7280 = []
  for(var i = 0; i < i7281.length; i += 1) {
    i7280.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i7281[i + 0]) );
  }
  i7270.excludedVariants = i7280
  i7270.hasDepthReader = !!i7271[25]
  return i7270
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i7282 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i7283 = data
  i7282.val = i7283[0]
  i7282.name = i7283[1]
  return i7282
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i7284 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i7285 = data
  i7284.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i7285[0], i7284.src)
  i7284.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i7285[1], i7284.dst)
  i7284.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i7285[2], i7284.op)
  return i7284
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i7286 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i7287 = data
  i7286.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i7287[0], i7286.pass)
  i7286.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i7287[1], i7286.fail)
  i7286.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i7287[2], i7286.zFail)
  i7286.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i7287[3], i7286.comp)
  return i7286
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i7290 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i7291 = data
  i7290.name = i7291[0]
  i7290.value = i7291[1]
  return i7290
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i7294 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i7295 = data
  var i7297 = i7295[0]
  var i7296 = []
  for(var i = 0; i < i7297.length; i += 1) {
    i7296.push( i7297[i + 0] );
  }
  i7294.keywords = i7296
  i7294.hasDiscard = !!i7295[1]
  return i7294
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i7300 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i7301 = data
  i7300.passId = i7301[0]
  i7300.subShaderIndex = i7301[1]
  var i7303 = i7301[2]
  var i7302 = []
  for(var i = 0; i < i7303.length; i += 1) {
    i7302.push( i7303[i + 0] );
  }
  i7300.keywords = i7302
  i7300.vertexProgram = i7301[3]
  i7300.fragmentProgram = i7301[4]
  i7300.exportedForWebGl2 = !!i7301[5]
  i7300.readDepth = !!i7301[6]
  return i7300
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i7306 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i7307 = data
  request.r(i7307[0], i7307[1], 0, i7306, 'shader')
  i7306.pass = i7307[2]
  return i7306
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i7310 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i7311 = data
  i7310.name = i7311[0]
  i7310.type = i7311[1]
  i7310.value = new pc.Vec4( i7311[2], i7311[3], i7311[4], i7311[5] )
  i7310.textureValue = i7311[6]
  i7310.shaderPropertyFlag = i7311[7]
  return i7310
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i7312 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i7313 = data
  i7312.name = i7313[0]
  request.r(i7313[1], i7313[2], 0, i7312, 'texture')
  i7312.aabb = i7313[3]
  i7312.vertices = i7313[4]
  i7312.triangles = i7313[5]
  i7312.textureRect = UnityEngine.Rect.MinMaxRect(i7313[6], i7313[7], i7313[8], i7313[9])
  i7312.packedRect = UnityEngine.Rect.MinMaxRect(i7313[10], i7313[11], i7313[12], i7313[13])
  i7312.border = new pc.Vec4( i7313[14], i7313[15], i7313[16], i7313[17] )
  i7312.transparency = i7313[18]
  i7312.bounds = i7313[19]
  i7312.pixelsPerUnit = i7313[20]
  i7312.textureWidth = i7313[21]
  i7312.textureHeight = i7313[22]
  i7312.nativeSize = new pc.Vec2( i7313[23], i7313[24] )
  i7312.pivot = new pc.Vec2( i7313[25], i7313[26] )
  i7312.textureRectOffset = new pc.Vec2( i7313[27], i7313[28] )
  return i7312
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i7314 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i7315 = data
  i7314.name = i7315[0]
  return i7314
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip"] = function (request, data, root) {
  var i7316 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip' )
  var i7317 = data
  i7316.name = i7317[0]
  i7316.wrapMode = i7317[1]
  i7316.isLooping = !!i7317[2]
  i7316.length = i7317[3]
  var i7319 = i7317[4]
  var i7318 = []
  for(var i = 0; i < i7319.length; i += 1) {
    i7318.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve', i7319[i + 0]) );
  }
  i7316.curves = i7318
  var i7321 = i7317[5]
  var i7320 = []
  for(var i = 0; i < i7321.length; i += 1) {
    i7320.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent', i7321[i + 0]) );
  }
  i7316.events = i7320
  i7316.halfPrecision = !!i7317[6]
  i7316._frameRate = i7317[7]
  i7316.localBounds = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds', i7317[8], i7316.localBounds)
  i7316.hasMuscleCurves = !!i7317[9]
  var i7323 = i7317[10]
  var i7322 = []
  for(var i = 0; i < i7323.length; i += 1) {
    i7322.push( i7323[i + 0] );
  }
  i7316.clipMuscleConstant = i7322
  i7316.clipBindingConstant = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant', i7317[11], i7316.clipBindingConstant)
  return i7316
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve"] = function (request, data, root) {
  var i7326 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve' )
  var i7327 = data
  i7326.path = i7327[0]
  i7326.hash = i7327[1]
  i7326.componentType = i7327[2]
  i7326.property = i7327[3]
  i7326.keys = i7327[4]
  var i7329 = i7327[5]
  var i7328 = []
  for(var i = 0; i < i7329.length; i += 1) {
    i7328.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey', i7329[i + 0]) );
  }
  i7326.objectReferenceKeys = i7328
  return i7326
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey"] = function (request, data, root) {
  var i7332 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey' )
  var i7333 = data
  i7332.time = i7333[0]
  request.r(i7333[1], i7333[2], 0, i7332, 'value')
  return i7332
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent"] = function (request, data, root) {
  var i7336 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent' )
  var i7337 = data
  i7336.functionName = i7337[0]
  i7336.floatParameter = i7337[1]
  i7336.intParameter = i7337[2]
  i7336.stringParameter = i7337[3]
  request.r(i7337[4], i7337[5], 0, i7336, 'objectReferenceParameter')
  i7336.time = i7337[6]
  return i7336
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds"] = function (request, data, root) {
  var i7338 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds' )
  var i7339 = data
  i7338.center = new pc.Vec3( i7339[0], i7339[1], i7339[2] )
  i7338.extends = new pc.Vec3( i7339[3], i7339[4], i7339[5] )
  return i7338
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant"] = function (request, data, root) {
  var i7342 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant' )
  var i7343 = data
  var i7345 = i7343[0]
  var i7344 = []
  for(var i = 0; i < i7345.length; i += 1) {
    i7344.push( i7345[i + 0] );
  }
  i7342.genericBindings = i7344
  var i7347 = i7343[1]
  var i7346 = []
  for(var i = 0; i < i7347.length; i += 1) {
    i7346.push( i7347[i + 0] );
  }
  i7342.pptrCurveMapping = i7346
  return i7342
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i7348 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i7349 = data
  i7348.name = i7349[0]
  i7348.ascent = i7349[1]
  i7348.originalLineHeight = i7349[2]
  i7348.fontSize = i7349[3]
  var i7351 = i7349[4]
  var i7350 = []
  for(var i = 0; i < i7351.length; i += 1) {
    i7350.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i7351[i + 0]) );
  }
  i7348.characterInfo = i7350
  request.r(i7349[5], i7349[6], 0, i7348, 'texture')
  i7348.originalFontSize = i7349[7]
  return i7348
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i7354 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i7355 = data
  i7354.index = i7355[0]
  i7354.advance = i7355[1]
  i7354.bearing = i7355[2]
  i7354.glyphWidth = i7355[3]
  i7354.glyphHeight = i7355[4]
  i7354.minX = i7355[5]
  i7354.maxX = i7355[6]
  i7354.minY = i7355[7]
  i7354.maxY = i7355[8]
  i7354.uvBottomLeftX = i7355[9]
  i7354.uvBottomLeftY = i7355[10]
  i7354.uvBottomRightX = i7355[11]
  i7354.uvBottomRightY = i7355[12]
  i7354.uvTopLeftX = i7355[13]
  i7354.uvTopLeftY = i7355[14]
  i7354.uvTopRightX = i7355[15]
  i7354.uvTopRightY = i7355[16]
  return i7354
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController"] = function (request, data, root) {
  var i7356 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController' )
  var i7357 = data
  i7356.name = i7357[0]
  var i7359 = i7357[1]
  var i7358 = []
  for(var i = 0; i < i7359.length; i += 1) {
    i7358.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer', i7359[i + 0]) );
  }
  i7356.layers = i7358
  var i7361 = i7357[2]
  var i7360 = []
  for(var i = 0; i < i7361.length; i += 1) {
    i7360.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter', i7361[i + 0]) );
  }
  i7356.parameters = i7360
  i7356.animationClips = i7357[3]
  i7356.avatarUnsupported = i7357[4]
  return i7356
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer"] = function (request, data, root) {
  var i7364 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer' )
  var i7365 = data
  i7364.name = i7365[0]
  i7364.defaultWeight = i7365[1]
  i7364.blendingMode = i7365[2]
  i7364.avatarMask = i7365[3]
  i7364.syncedLayerIndex = i7365[4]
  i7364.syncedLayerAffectsTiming = !!i7365[5]
  i7364.syncedLayers = i7365[6]
  i7364.stateMachine = request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i7365[7], i7364.stateMachine)
  return i7364
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine"] = function (request, data, root) {
  var i7366 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine' )
  var i7367 = data
  i7366.id = i7367[0]
  i7366.name = i7367[1]
  i7366.path = i7367[2]
  var i7369 = i7367[3]
  var i7368 = []
  for(var i = 0; i < i7369.length; i += 1) {
    i7368.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState', i7369[i + 0]) );
  }
  i7366.states = i7368
  var i7371 = i7367[4]
  var i7370 = []
  for(var i = 0; i < i7371.length; i += 1) {
    i7370.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i7371[i + 0]) );
  }
  i7366.machines = i7370
  var i7373 = i7367[5]
  var i7372 = []
  for(var i = 0; i < i7373.length; i += 1) {
    i7372.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i7373[i + 0]) );
  }
  i7366.entryStateTransitions = i7372
  var i7375 = i7367[6]
  var i7374 = []
  for(var i = 0; i < i7375.length; i += 1) {
    i7374.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i7375[i + 0]) );
  }
  i7366.exitStateTransitions = i7374
  var i7377 = i7367[7]
  var i7376 = []
  for(var i = 0; i < i7377.length; i += 1) {
    i7376.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i7377[i + 0]) );
  }
  i7366.anyStateTransitions = i7376
  i7366.defaultStateId = i7367[8]
  return i7366
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState"] = function (request, data, root) {
  var i7380 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState' )
  var i7381 = data
  i7380.id = i7381[0]
  i7380.name = i7381[1]
  i7380.cycleOffset = i7381[2]
  i7380.cycleOffsetParameter = i7381[3]
  i7380.cycleOffsetParameterActive = !!i7381[4]
  i7380.mirror = !!i7381[5]
  i7380.mirrorParameter = i7381[6]
  i7380.mirrorParameterActive = !!i7381[7]
  i7380.motionId = i7381[8]
  i7380.nameHash = i7381[9]
  i7380.fullPathHash = i7381[10]
  i7380.speed = i7381[11]
  i7380.speedParameter = i7381[12]
  i7380.speedParameterActive = !!i7381[13]
  i7380.tag = i7381[14]
  i7380.tagHash = i7381[15]
  i7380.writeDefaultValues = !!i7381[16]
  var i7383 = i7381[17]
  var i7382 = []
  for(var i = 0; i < i7383.length; i += 2) {
  request.r(i7383[i + 0], i7383[i + 1], 2, i7382, '')
  }
  i7380.behaviours = i7382
  var i7385 = i7381[18]
  var i7384 = []
  for(var i = 0; i < i7385.length; i += 1) {
    i7384.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i7385[i + 0]) );
  }
  i7380.transitions = i7384
  return i7380
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition"] = function (request, data, root) {
  var i7390 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition' )
  var i7391 = data
  i7390.fullPath = i7391[0]
  i7390.canTransitionToSelf = !!i7391[1]
  i7390.duration = i7391[2]
  i7390.exitTime = i7391[3]
  i7390.hasExitTime = !!i7391[4]
  i7390.hasFixedDuration = !!i7391[5]
  i7390.interruptionSource = i7391[6]
  i7390.offset = i7391[7]
  i7390.orderedInterruption = !!i7391[8]
  i7390.destinationStateId = i7391[9]
  i7390.isExit = !!i7391[10]
  i7390.mute = !!i7391[11]
  i7390.solo = !!i7391[12]
  var i7393 = i7391[13]
  var i7392 = []
  for(var i = 0; i < i7393.length; i += 1) {
    i7392.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i7393[i + 0]) );
  }
  i7390.conditions = i7392
  return i7390
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition"] = function (request, data, root) {
  var i7398 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition' )
  var i7399 = data
  i7398.destinationStateId = i7399[0]
  i7398.isExit = !!i7399[1]
  i7398.mute = !!i7399[2]
  i7398.solo = !!i7399[3]
  var i7401 = i7399[4]
  var i7400 = []
  for(var i = 0; i < i7401.length; i += 1) {
    i7400.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i7401[i + 0]) );
  }
  i7398.conditions = i7400
  return i7398
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition"] = function (request, data, root) {
  var i7404 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition' )
  var i7405 = data
  i7404.mode = i7405[0]
  i7404.parameter = i7405[1]
  i7404.threshold = i7405[2]
  return i7404
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter"] = function (request, data, root) {
  var i7408 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter' )
  var i7409 = data
  i7408.defaultBool = !!i7409[0]
  i7408.defaultFloat = i7409[1]
  i7408.defaultInt = i7409[2]
  i7408.name = i7409[3]
  i7408.nameHash = i7409[4]
  i7408.type = i7409[5]
  return i7408
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i7410 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i7411 = data
  i7410.useSafeMode = !!i7411[0]
  i7410.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i7411[1], i7410.safeModeOptions)
  i7410.timeScale = i7411[2]
  i7410.unscaledTimeScale = i7411[3]
  i7410.useSmoothDeltaTime = !!i7411[4]
  i7410.maxSmoothUnscaledTime = i7411[5]
  i7410.rewindCallbackMode = i7411[6]
  i7410.showUnityEditorReport = !!i7411[7]
  i7410.logBehaviour = i7411[8]
  i7410.drawGizmos = !!i7411[9]
  i7410.defaultRecyclable = !!i7411[10]
  i7410.defaultAutoPlay = i7411[11]
  i7410.defaultUpdateType = i7411[12]
  i7410.defaultTimeScaleIndependent = !!i7411[13]
  i7410.defaultEaseType = i7411[14]
  i7410.defaultEaseOvershootOrAmplitude = i7411[15]
  i7410.defaultEasePeriod = i7411[16]
  i7410.defaultAutoKill = !!i7411[17]
  i7410.defaultLoopType = i7411[18]
  i7410.debugMode = !!i7411[19]
  i7410.debugStoreTargetId = !!i7411[20]
  i7410.showPreviewPanel = !!i7411[21]
  i7410.storeSettingsLocation = i7411[22]
  i7410.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i7411[23], i7410.modules)
  i7410.createASMDEF = !!i7411[24]
  i7410.showPlayingTweens = !!i7411[25]
  i7410.showPausedTweens = !!i7411[26]
  return i7410
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i7412 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i7413 = data
  i7412.logBehaviour = i7413[0]
  i7412.nestedTweenFailureBehaviour = i7413[1]
  return i7412
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i7414 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i7415 = data
  i7414.showPanel = !!i7415[0]
  i7414.audioEnabled = !!i7415[1]
  i7414.physicsEnabled = !!i7415[2]
  i7414.physics2DEnabled = !!i7415[3]
  i7414.spriteEnabled = !!i7415[4]
  i7414.uiEnabled = !!i7415[5]
  i7414.textMeshProEnabled = !!i7415[6]
  i7414.tk2DEnabled = !!i7415[7]
  i7414.deAudioEnabled = !!i7415[8]
  i7414.deUnityExtendedEnabled = !!i7415[9]
  i7414.epoOutlineEnabled = !!i7415[10]
  return i7414
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i7416 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i7417 = data
  var i7419 = i7417[0]
  var i7418 = []
  for(var i = 0; i < i7419.length; i += 1) {
    i7418.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i7419[i + 0]) );
  }
  i7416.files = i7418
  i7416.componentToPrefabIds = i7417[1]
  return i7416
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i7422 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i7423 = data
  i7422.path = i7423[0]
  request.r(i7423[1], i7423[2], 0, i7422, 'unityObject')
  return i7422
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i7424 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i7425 = data
  var i7427 = i7425[0]
  var i7426 = []
  for(var i = 0; i < i7427.length; i += 1) {
    i7426.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i7427[i + 0]) );
  }
  i7424.scriptsExecutionOrder = i7426
  var i7429 = i7425[1]
  var i7428 = []
  for(var i = 0; i < i7429.length; i += 1) {
    i7428.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i7429[i + 0]) );
  }
  i7424.sortingLayers = i7428
  var i7431 = i7425[2]
  var i7430 = []
  for(var i = 0; i < i7431.length; i += 1) {
    i7430.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i7431[i + 0]) );
  }
  i7424.cullingLayers = i7430
  i7424.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i7425[3], i7424.timeSettings)
  i7424.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i7425[4], i7424.physicsSettings)
  i7424.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i7425[5], i7424.physics2DSettings)
  i7424.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i7425[6], i7424.qualitySettings)
  i7424.enableRealtimeShadows = !!i7425[7]
  i7424.enableAutoInstancing = !!i7425[8]
  i7424.enableStaticBatching = !!i7425[9]
  i7424.enableDynamicBatching = !!i7425[10]
  i7424.usePreservativeDynamicBatching = !!i7425[11]
  i7424.lightmapEncodingQuality = i7425[12]
  i7424.desiredColorSpace = i7425[13]
  var i7433 = i7425[14]
  var i7432 = []
  for(var i = 0; i < i7433.length; i += 1) {
    i7432.push( i7433[i + 0] );
  }
  i7424.allTags = i7432
  return i7424
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i7436 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i7437 = data
  i7436.name = i7437[0]
  i7436.value = i7437[1]
  return i7436
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i7440 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i7441 = data
  i7440.id = i7441[0]
  i7440.name = i7441[1]
  i7440.value = i7441[2]
  return i7440
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i7444 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i7445 = data
  i7444.id = i7445[0]
  i7444.name = i7445[1]
  return i7444
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i7446 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i7447 = data
  i7446.fixedDeltaTime = i7447[0]
  i7446.maximumDeltaTime = i7447[1]
  i7446.timeScale = i7447[2]
  i7446.maximumParticleTimestep = i7447[3]
  return i7446
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i7448 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i7449 = data
  i7448.gravity = new pc.Vec3( i7449[0], i7449[1], i7449[2] )
  i7448.defaultSolverIterations = i7449[3]
  i7448.bounceThreshold = i7449[4]
  i7448.autoSyncTransforms = !!i7449[5]
  i7448.autoSimulation = !!i7449[6]
  var i7451 = i7449[7]
  var i7450 = []
  for(var i = 0; i < i7451.length; i += 1) {
    i7450.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i7451[i + 0]) );
  }
  i7448.collisionMatrix = i7450
  return i7448
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i7454 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i7455 = data
  i7454.enabled = !!i7455[0]
  i7454.layerId = i7455[1]
  i7454.otherLayerId = i7455[2]
  return i7454
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i7456 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i7457 = data
  request.r(i7457[0], i7457[1], 0, i7456, 'material')
  i7456.gravity = new pc.Vec2( i7457[2], i7457[3] )
  i7456.positionIterations = i7457[4]
  i7456.velocityIterations = i7457[5]
  i7456.velocityThreshold = i7457[6]
  i7456.maxLinearCorrection = i7457[7]
  i7456.maxAngularCorrection = i7457[8]
  i7456.maxTranslationSpeed = i7457[9]
  i7456.maxRotationSpeed = i7457[10]
  i7456.baumgarteScale = i7457[11]
  i7456.baumgarteTOIScale = i7457[12]
  i7456.timeToSleep = i7457[13]
  i7456.linearSleepTolerance = i7457[14]
  i7456.angularSleepTolerance = i7457[15]
  i7456.defaultContactOffset = i7457[16]
  i7456.autoSimulation = !!i7457[17]
  i7456.queriesHitTriggers = !!i7457[18]
  i7456.queriesStartInColliders = !!i7457[19]
  i7456.callbacksOnDisable = !!i7457[20]
  i7456.reuseCollisionCallbacks = !!i7457[21]
  i7456.autoSyncTransforms = !!i7457[22]
  var i7459 = i7457[23]
  var i7458 = []
  for(var i = 0; i < i7459.length; i += 1) {
    i7458.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i7459[i + 0]) );
  }
  i7456.collisionMatrix = i7458
  return i7456
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i7462 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i7463 = data
  i7462.enabled = !!i7463[0]
  i7462.layerId = i7463[1]
  i7462.otherLayerId = i7463[2]
  return i7462
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i7464 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i7465 = data
  var i7467 = i7465[0]
  var i7466 = []
  for(var i = 0; i < i7467.length; i += 1) {
    i7466.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i7467[i + 0]) );
  }
  i7464.qualityLevels = i7466
  var i7469 = i7465[1]
  var i7468 = []
  for(var i = 0; i < i7469.length; i += 1) {
    i7468.push( i7469[i + 0] );
  }
  i7464.names = i7468
  i7464.shadows = i7465[2]
  i7464.anisotropicFiltering = i7465[3]
  i7464.antiAliasing = i7465[4]
  i7464.lodBias = i7465[5]
  i7464.shadowCascades = i7465[6]
  i7464.shadowDistance = i7465[7]
  i7464.shadowmaskMode = i7465[8]
  i7464.shadowProjection = i7465[9]
  i7464.shadowResolution = i7465[10]
  i7464.softParticles = !!i7465[11]
  i7464.softVegetation = !!i7465[12]
  i7464.activeColorSpace = i7465[13]
  i7464.desiredColorSpace = i7465[14]
  i7464.masterTextureLimit = i7465[15]
  i7464.maxQueuedFrames = i7465[16]
  i7464.particleRaycastBudget = i7465[17]
  i7464.pixelLightCount = i7465[18]
  i7464.realtimeReflectionProbes = !!i7465[19]
  i7464.shadowCascade2Split = i7465[20]
  i7464.shadowCascade4Split = new pc.Vec3( i7465[21], i7465[22], i7465[23] )
  i7464.streamingMipmapsActive = !!i7465[24]
  i7464.vSyncCount = i7465[25]
  i7464.asyncUploadBufferSize = i7465[26]
  i7464.asyncUploadTimeSlice = i7465[27]
  i7464.billboardsFaceCameraPosition = !!i7465[28]
  i7464.shadowNearPlaneOffset = i7465[29]
  i7464.streamingMipmapsMemoryBudget = i7465[30]
  i7464.maximumLODLevel = i7465[31]
  i7464.streamingMipmapsAddAllCameras = !!i7465[32]
  i7464.streamingMipmapsMaxLevelReduction = i7465[33]
  i7464.streamingMipmapsRenderersPerFrame = i7465[34]
  i7464.resolutionScalingFixedDPIFactor = i7465[35]
  i7464.streamingMipmapsMaxFileIORequests = i7465[36]
  i7464.currentQualityLevel = i7465[37]
  return i7464
}

Deserializers["Luna.Unity.DTO.UnityEngine.Audio.AudioMixer"] = function (request, data, root) {
  var i7472 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Audio.AudioMixer' )
  var i7473 = data
  var i7475 = i7473[0]
  var i7474 = []
  for(var i = 0; i < i7475.length; i += 1) {
    i7474.push( request.d('Luna.Unity.DTO.UnityEngine.Audio.AudioMixerGroup', i7475[i + 0]) );
  }
  i7472.groups = i7474
  var i7477 = i7473[1]
  var i7476 = []
  for(var i = 0; i < i7477.length; i += 1) {
    i7476.push( request.d('Luna.Unity.DTO.UnityEngine.Audio.AudioMixerSnapshot', i7477[i + 0]) );
  }
  i7472.snapshots = i7476
  return i7472
}

Deserializers["Luna.Unity.DTO.UnityEngine.Audio.AudioMixerGroup"] = function (request, data, root) {
  var i7480 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Audio.AudioMixerGroup' )
  var i7481 = data
  i7480.id = i7481[0]
  i7480.childGroupIds = i7481[1]
  i7480.name = i7481[2]
  return i7480
}

Deserializers["Luna.Unity.DTO.UnityEngine.Audio.AudioMixerSnapshot"] = function (request, data, root) {
  var i7484 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Audio.AudioMixerSnapshot' )
  var i7485 = data
  i7484.id = i7485[0]
  var i7487 = i7485[1]
  var i7486 = []
  for(var i = 0; i < i7487.length; i += 1) {
    i7486.push( request.d('Luna.Unity.DTO.UnityEngine.Audio.AudioMixerSnapshot+Parameter', i7487[i + 0]) );
  }
  i7484.parameters = i7486
  return i7484
}

Deserializers["Luna.Unity.DTO.UnityEngine.Audio.AudioMixerSnapshot+Parameter"] = function (request, data, root) {
  var i7490 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Audio.AudioMixerSnapshot+Parameter' )
  var i7491 = data
  i7490.name = i7491[0]
  i7490.value = i7491[1]
  return i7490
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame"] = function (request, data, root) {
  var i7494 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame' )
  var i7495 = data
  i7494.weight = i7495[0]
  i7494.vertices = i7495[1]
  i7494.normals = i7495[2]
  i7494.tangents = i7495[3]
  return i7494
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Assets.Mesh":{"name":0,"halfPrecision":1,"useSimplification":2,"useUInt32IndexFormat":3,"vertexCount":4,"aabb":5,"streams":6,"vertices":7,"subMeshes":8,"bindposes":9,"blendShapes":10},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh":{"triangles":0},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape":{"name":0,"frames":1},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystem":{"main":0,"colorBySpeed":1,"colorOverLifetime":2,"emission":3,"rotationBySpeed":4,"rotationOverLifetime":5,"shape":6,"sizeBySpeed":7,"sizeOverLifetime":8,"textureSheetAnimation":9,"velocityOverLifetime":10,"noise":11,"inheritVelocity":12,"forceOverLifetime":13,"limitVelocityOverLifetime":14,"useAutoRandomSeed":15,"randomSeed":16},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule":{"duration":0,"loop":1,"prewarm":2,"startDelay":3,"startLifetime":4,"startSpeed":5,"startSize3D":6,"startSizeX":7,"startSizeY":8,"startSizeZ":9,"startRotation3D":10,"startRotationX":11,"startRotationY":12,"startRotationZ":13,"startColor":14,"gravityModifier":15,"simulationSpace":16,"customSimulationSpace":17,"simulationSpeed":19,"useUnscaledTime":20,"scalingMode":21,"playOnAwake":22,"maxParticles":23,"emitterVelocityMode":24,"stopAction":25},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve":{"mode":0,"curveMin":1,"curveMax":2,"curveMultiplier":3,"constantMin":4,"constantMax":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient":{"mode":0,"gradientMin":1,"gradientMax":2,"colorMin":3,"colorMax":7},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient":{"mode":0,"colorKeys":1,"alphaKeys":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule":{"enabled":0,"color":1,"range":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey":{"color":0,"time":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey":{"alpha":0,"time":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule":{"enabled":0,"color":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule":{"enabled":0,"rateOverTime":1,"rateOverDistance":2,"bursts":3},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst":{"count":0,"cycleCount":1,"minCount":2,"maxCount":3,"repeatInterval":4,"time":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule":{"enabled":0,"shapeType":1,"randomDirectionAmount":2,"sphericalDirectionAmount":3,"randomPositionAmount":4,"alignToDirection":5,"radius":6,"radiusMode":7,"radiusSpread":8,"radiusSpeed":9,"radiusThickness":10,"angle":11,"length":12,"boxThickness":13,"meshShapeType":16,"mesh":17,"meshRenderer":19,"skinnedMeshRenderer":21,"useMeshMaterialIndex":23,"meshMaterialIndex":24,"useMeshColors":25,"normalOffset":26,"arc":27,"arcMode":28,"arcSpread":29,"arcSpeed":30,"donutRadius":31,"position":32,"rotation":35,"scale":38},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule":{"enabled":0,"mode":1,"animation":2,"numTilesX":3,"numTilesY":4,"useRandomRow":5,"frameOverTime":6,"startFrame":7,"cycleCount":8,"rowIndex":9,"flipU":10,"flipV":11,"spriteCount":12,"sprites":13},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"radial":4,"speedModifier":5,"space":6,"orbitalX":7,"orbitalY":8,"orbitalZ":9,"orbitalOffsetX":10,"orbitalOffsetY":11,"orbitalOffsetZ":12},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule":{"enabled":0,"separateAxes":1,"strengthX":2,"strengthY":3,"strengthZ":4,"frequency":5,"damping":6,"octaveCount":7,"octaveMultiplier":8,"octaveScale":9,"quality":10,"scrollSpeed":11,"scrollSpeedMultiplier":12,"remapEnabled":13,"remapX":14,"remapY":15,"remapZ":16,"positionAmount":17,"rotationAmount":18,"sizeAmount":19},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule":{"enabled":0,"mode":1,"curve":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"space":4,"randomized":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule":{"enabled":0,"limit":1,"limitX":2,"limitY":3,"limitZ":4,"dampen":5,"separateAxes":6,"space":7,"drag":8,"multiplyDragByParticleSize":9,"multiplyDragByParticleVelocity":10},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer":{"mesh":0,"meshCount":2,"activeVertexStreamsCount":3,"alignment":4,"renderMode":5,"sortMode":6,"lengthScale":7,"velocityScale":8,"cameraVelocityScale":9,"normalDirection":10,"sortingFudge":11,"minParticleSize":12,"maxParticleSize":13,"pivot":14,"trailMaterial":17,"applyActiveColorSpace":19,"enabled":20,"sharedMaterial":21,"sharedMaterials":23,"receiveShadows":24,"shadowCastingMode":25,"sortingLayerID":26,"sortingOrder":27,"lightmapIndex":28,"lightmapSceneIndex":29,"lightmapScaleOffset":30,"lightProbeUsage":34,"reflectionProbeUsage":35},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer":{"color":0,"sprite":4,"flipX":6,"flipY":7,"drawMode":8,"size":9,"tileMode":11,"adaptiveModeThreshold":12,"maskInteraction":13,"spriteSortPoint":14,"enabled":15,"sharedMaterial":16,"sharedMaterials":18,"receiveShadows":19,"shadowCastingMode":20,"sortingLayerID":21,"sortingOrder":22,"lightmapIndex":23,"lightmapSceneIndex":24,"lightmapScaleOffset":25,"lightProbeUsage":29,"reflectionProbeUsage":30},"Luna.Unity.DTO.UnityEngine.Components.CircleCollider2D":{"radius":0,"enabled":1,"isTrigger":2,"usedByEffector":3,"density":4,"offset":5,"material":7},"Luna.Unity.DTO.UnityEngine.Components.AudioSource":{"clip":0,"outputAudioMixerGroup":2,"playOnAwake":4,"loop":5,"time":6,"volume":7,"pitch":8,"enabled":9},"Luna.Unity.DTO.UnityEngine.Components.PolygonCollider2D":{"usedByComposite":0,"autoTiling":1,"points":2,"enabled":3,"isTrigger":4,"usedByEffector":5,"density":6,"offset":7,"material":9},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D":{"usedByComposite":0,"autoTiling":1,"size":2,"edgeRadius":4,"enabled":5,"isTrigger":6,"usedByEffector":7,"density":8,"offset":9,"material":11},"Luna.Unity.DTO.UnityEngine.Components.Animator":{"animatorController":0,"avatar":2,"updateMode":4,"hasTransformHierarchy":5,"applyRootMotion":6,"humanBones":7,"enabled":8},"Luna.Unity.DTO.UnityEngine.Components.SpriteMask":{"frontSortingLayerID":0,"frontSortingOrder":1,"backSortingLayerID":2,"backSortingOrder":3,"alphaCutoff":4,"sprite":5,"tileMode":7,"isCustomRangeActive":8,"spriteSortPoint":9,"enabled":10,"sharedMaterial":11,"sharedMaterials":13,"receiveShadows":14,"shadowCastingMode":15,"sortingLayerID":16,"sortingOrder":17,"lightmapIndex":18,"lightmapSceneIndex":19,"lightmapScaleOffset":20,"lightProbeUsage":24,"reflectionProbeUsage":25},"Luna.Unity.DTO.UnityEngine.Components.TrailRenderer":{"positions":0,"positionCount":1,"time":2,"startWidth":3,"endWidth":4,"widthMultiplier":5,"autodestruct":6,"emitting":7,"numCornerVertices":8,"numCapVertices":9,"minVertexDistance":10,"colorGradient":11,"startColor":12,"endColor":16,"generateLightingData":20,"textureMode":21,"alignment":22,"widthCurve":23,"enabled":24,"sharedMaterial":25,"sharedMaterials":27,"receiveShadows":28,"shadowCastingMode":29,"sortingLayerID":30,"sortingOrder":31,"lightmapIndex":32,"lightmapSceneIndex":33,"lightmapScaleOffset":34,"lightProbeUsage":38,"reflectionProbeUsage":39},"Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D":{"bodyType":0,"material":1,"simulated":3,"useAutoMass":4,"mass":5,"drag":6,"angularDrag":7,"gravityScale":8,"collisionDetectionMode":9,"sleepMode":10,"constraints":11},"Luna.Unity.DTO.UnityEngine.Textures.Cubemap":{"name":0,"atlasId":1,"mipmapCount":2,"hdr":3,"size":4,"anisoLevel":5,"filterMode":6,"rects":7,"wrapU":8,"wrapV":9},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"aspect":0,"orthographic":1,"orthographicSize":2,"backgroundColor":3,"nearClipPlane":7,"farClipPlane":8,"fieldOfView":9,"depth":10,"clearFlags":11,"cullingMask":12,"rect":13,"targetTexture":14,"usePhysicalProperties":16,"focalLength":17,"sensorSize":18,"lensShift":20,"gateFit":22,"commandBufferCount":23,"cameraType":24,"enabled":25},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"planeDistance":0,"referencePixelsPerUnit":1,"isFallbackOverlay":2,"renderMode":3,"renderOrder":4,"sortingLayerName":5,"sortingOrder":6,"scaleFactor":7,"worldCamera":8,"overrideSorting":10,"pixelPerfect":11,"targetDisplay":12,"overridePixelPerfect":13,"enabled":14},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Components.CanvasGroup":{"m_Alpha":0,"m_Interactable":1,"m_BlocksRaycasts":2,"m_IgnoreParentGroups":3,"enabled":4},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"customReflection":36,"defaultReflection":38,"defaultReflectionMode":40,"defaultReflectionResolution":41,"sunLightObjectId":42,"pixelLightCount":43,"defaultReflectionHDR":44,"hasLightDataAsset":45,"hasManualGenerate":46},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2,"shadowMask":4},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"hasDepthOnlyPass":10,"isCreatedByShaderGraph":11,"disableBatching":12,"compiled":13},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip":{"name":0,"wrapMode":1,"isLooping":2,"length":3,"curves":4,"events":5,"halfPrecision":6,"_frameRate":7,"localBounds":8,"hasMuscleCurves":9,"clipMuscleConstant":10,"clipBindingConstant":11},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve":{"path":0,"hash":1,"componentType":2,"property":3,"keys":4,"objectReferenceKeys":5},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey":{"time":0,"value":1},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent":{"functionName":0,"floatParameter":1,"intParameter":2,"stringParameter":3,"objectReferenceParameter":4,"time":6},"Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds":{"center":0,"extends":3},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant":{"genericBindings":0,"pptrCurveMapping":1},"Luna.Unity.DTO.UnityEngine.Assets.Font":{"name":0,"ascent":1,"originalLineHeight":2,"fontSize":3,"characterInfo":4,"texture":5,"originalFontSize":7},"Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo":{"index":0,"advance":1,"bearing":2,"glyphWidth":3,"glyphHeight":4,"minX":5,"maxX":6,"minY":7,"maxY":8,"uvBottomLeftX":9,"uvBottomLeftY":10,"uvBottomRightX":11,"uvBottomRightY":12,"uvTopLeftX":13,"uvTopLeftY":14,"uvTopRightX":15,"uvTopRightY":16},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController":{"name":0,"layers":1,"parameters":2,"animationClips":3,"avatarUnsupported":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer":{"name":0,"defaultWeight":1,"blendingMode":2,"avatarMask":3,"syncedLayerIndex":4,"syncedLayerAffectsTiming":5,"syncedLayers":6,"stateMachine":7},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine":{"id":0,"name":1,"path":2,"states":3,"machines":4,"entryStateTransitions":5,"exitStateTransitions":6,"anyStateTransitions":7,"defaultStateId":8},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState":{"id":0,"name":1,"cycleOffset":2,"cycleOffsetParameter":3,"cycleOffsetParameterActive":4,"mirror":5,"mirrorParameter":6,"mirrorParameterActive":7,"motionId":8,"nameHash":9,"fullPathHash":10,"speed":11,"speedParameter":12,"speedParameterActive":13,"tag":14,"tagHash":15,"writeDefaultValues":16,"behaviours":17,"transitions":18},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition":{"fullPath":0,"canTransitionToSelf":1,"duration":2,"exitTime":3,"hasExitTime":4,"hasFixedDuration":5,"interruptionSource":6,"offset":7,"orderedInterruption":8,"destinationStateId":9,"isExit":10,"mute":11,"solo":12,"conditions":13},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition":{"destinationStateId":0,"isExit":1,"mute":2,"solo":3,"conditions":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition":{"mode":0,"parameter":1,"threshold":2},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter":{"defaultBool":0,"defaultFloat":1,"defaultInt":2,"name":3,"nameHash":4,"type":5},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableStaticBatching":9,"enableDynamicBatching":10,"usePreservativeDynamicBatching":11,"lightmapEncodingQuality":12,"desiredColorSpace":13,"allTags":14},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37},"Luna.Unity.DTO.UnityEngine.Audio.AudioMixer":{"groups":0,"snapshots":1},"Luna.Unity.DTO.UnityEngine.Audio.AudioMixerGroup":{"id":0,"childGroupIds":1,"name":2},"Luna.Unity.DTO.UnityEngine.Audio.AudioMixerSnapshot":{"id":0,"parameters":1},"Luna.Unity.DTO.UnityEngine.Audio.AudioMixerSnapshot+Parameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame":{"weight":0,"vertices":1,"normals":2,"tangents":3}}

Deserializers.requiredComponents = {"66":[67],"68":[67],"69":[67],"70":[67],"71":[67],"72":[67],"73":[74],"75":[39],"76":[77],"78":[77],"79":[77],"80":[77],"81":[77],"82":[77],"83":[77],"84":[35],"85":[35],"86":[35],"87":[35],"88":[35],"89":[35],"90":[35],"91":[35],"92":[35],"93":[35],"94":[35],"95":[35],"96":[35],"97":[39],"98":[99],"100":[101],"102":[101],"51":[44],"103":[104],"105":[12],"106":[25],"107":[12],"108":[109],"110":[109],"111":[46],"112":[25],"113":[12],"114":[10],"29":[12],"115":[44],"116":[44],"54":[51],"45":[55,44],"117":[44],"53":[51],"118":[44],"119":[44],"120":[44],"121":[44],"122":[44],"123":[44],"124":[44],"125":[44],"126":[44],"127":[55,44],"128":[44],"129":[44],"130":[44],"131":[44],"47":[55,44],"132":[44],"133":[59],"134":[59],"60":[59],"135":[59],"136":[39],"137":[39]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Texture2D","UnityEngine.Transform","UnityEngine.ParticleSystem","UnityEngine.ParticleSystemRenderer","UnityEngine.Mesh","UnityEngine.Material","UnityEngine.MonoBehaviour","Level3_Crown_Playable_NewTest","UnityEngine.GameObject","BasicDrag","BD_CameraFollow","UnityEngine.SpriteRenderer","UnityEngine.Sprite","UnityEngine.AudioClip","UnityEngine.AudioSource","ScratchCardAsset.ScratchCardManager","PlayableCTA","ScratchCardAsset.ScratchCard","ScratchCardAsset.EraseProgress","PlayParticlesOnCollision","UnityEngine.CircleCollider2D","PlaySfxOnCollision","UnityEditor.Audio.AudioMixerGroupController","UnityEngine.PolygonCollider2D","UnityEngine.BoxCollider2D","UnityEngine.Animator","UnityEditor.Animations.AnimatorController","UnityEngine.SpriteMask","UnityEngine.U2D.Animation.SpriteSkin","UnityEngine.TrailRenderer","BD_Progress","BD_Clamp","BD_ToolRotate","BD_AnimatorDrag","UnityEngine.Rigidbody2D","BD_SpriteChange","BD_ProgressHelper","DestroyObj","UnityEngine.Camera","UnityEngine.AudioListener","CameraController","MusicSource","UI_Manager","UnityEngine.RectTransform","UnityEngine.UI.Image","DG.Tweening.DOTweenAnimation","UnityEngine.UI.Text","GameManagerPlayable","AudioController","UnityEditor.Audio.AudioMixerController","UnityEngine.Canvas","UnityEngine.EventSystems.UIBehaviour","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEngine.CanvasRenderer","UnityEngine.Font","UnityEngine.UI.Button","PlayableHudRuntime","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","PlayableRouter","ToastManager","UnityEngine.CanvasGroup","UnityEngine.Cubemap","DG.Tweening.Core.DOTweenSettings","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.ConstantForce","UnityEngine.Rigidbody","UnityEngine.Joint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.FixedJoint","UnityEngine.CharacterJoint","UnityEngine.ConfigurableJoint","UnityEngine.CompositeCollider2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.MeshRenderer","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","RopeController","UnityEngine.LineRenderer","BD_Fold","BD_Sticky","Lvl3_DripAnimator","Lvl3_LipstickPicker","UnityEngine.Collider2D","Lvl3_PourFill","PlayTweenOnHit","SpriteButton","RadialCircleFill","TeaseTapCTA","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.Mask","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Slider","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster"]

Deserializers.unityVersion = "2022.3.62f2";

Deserializers.productName = "Perfect Makeover Fashion ASMR";

Deserializers.lunaInitializationTime = "08/20/2026 07:41:52";

Deserializers.lunaDaysRunning = "27.1";

Deserializers.lunaVersion = "7.2.0";

Deserializers.lunaSHA = "ea08d29afe2968efcb8d91d5624f033c6485cc68";

Deserializers.creativeName = "16Sept2026_Level_3_1_Step_1to3_v5";

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

Deserializers.runtimeAnalysisExcludedClassesCount = "1696";

Deserializers.runtimeAnalysisExcludedMethodsCount = "3876";

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

Deserializers.buildID = "dc03189a-f177-498e-8962-a476b4cd4008";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[],[["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"]],[],[]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

