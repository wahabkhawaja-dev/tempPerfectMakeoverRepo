var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i4830 = root || request.c( 'UnityEngine.JointSpring' )
  var i4831 = data
  i4830.spring = i4831[0]
  i4830.damper = i4831[1]
  i4830.targetPosition = i4831[2]
  return i4830
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i4832 = root || request.c( 'UnityEngine.JointMotor' )
  var i4833 = data
  i4832.m_TargetVelocity = i4833[0]
  i4832.m_Force = i4833[1]
  i4832.m_FreeSpin = i4833[2]
  return i4832
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i4834 = root || request.c( 'UnityEngine.JointLimits' )
  var i4835 = data
  i4834.m_Min = i4835[0]
  i4834.m_Max = i4835[1]
  i4834.m_Bounciness = i4835[2]
  i4834.m_BounceMinVelocity = i4835[3]
  i4834.m_ContactDistance = i4835[4]
  i4834.minBounce = i4835[5]
  i4834.maxBounce = i4835[6]
  return i4834
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i4836 = root || request.c( 'UnityEngine.JointDrive' )
  var i4837 = data
  i4836.m_PositionSpring = i4837[0]
  i4836.m_PositionDamper = i4837[1]
  i4836.m_MaximumForce = i4837[2]
  i4836.m_UseAcceleration = i4837[3]
  return i4836
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i4838 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i4839 = data
  i4838.m_Spring = i4839[0]
  i4838.m_Damper = i4839[1]
  return i4838
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i4840 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i4841 = data
  i4840.m_Limit = i4841[0]
  i4840.m_Bounciness = i4841[1]
  i4840.m_ContactDistance = i4841[2]
  return i4840
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i4842 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i4843 = data
  i4842.m_ExtremumSlip = i4843[0]
  i4842.m_ExtremumValue = i4843[1]
  i4842.m_AsymptoteSlip = i4843[2]
  i4842.m_AsymptoteValue = i4843[3]
  i4842.m_Stiffness = i4843[4]
  return i4842
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i4844 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i4845 = data
  i4844.m_LowerAngle = i4845[0]
  i4844.m_UpperAngle = i4845[1]
  return i4844
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i4846 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i4847 = data
  i4846.m_MotorSpeed = i4847[0]
  i4846.m_MaximumMotorTorque = i4847[1]
  return i4846
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i4848 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i4849 = data
  i4848.m_DampingRatio = i4849[0]
  i4848.m_Frequency = i4849[1]
  i4848.m_Angle = i4849[2]
  return i4848
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i4850 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i4851 = data
  i4850.m_LowerTranslation = i4851[0]
  i4850.m_UpperTranslation = i4851[1]
  return i4850
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i4852 = root || new pc.UnityMaterial()
  var i4853 = data
  i4852.name = i4853[0]
  request.r(i4853[1], i4853[2], 0, i4852, 'shader')
  i4852.renderQueue = i4853[3]
  i4852.enableInstancing = !!i4853[4]
  var i4855 = i4853[5]
  var i4854 = []
  for(var i = 0; i < i4855.length; i += 1) {
    i4854.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i4855[i + 0]) );
  }
  i4852.floatParameters = i4854
  var i4857 = i4853[6]
  var i4856 = []
  for(var i = 0; i < i4857.length; i += 1) {
    i4856.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i4857[i + 0]) );
  }
  i4852.colorParameters = i4856
  var i4859 = i4853[7]
  var i4858 = []
  for(var i = 0; i < i4859.length; i += 1) {
    i4858.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i4859[i + 0]) );
  }
  i4852.vectorParameters = i4858
  var i4861 = i4853[8]
  var i4860 = []
  for(var i = 0; i < i4861.length; i += 1) {
    i4860.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i4861[i + 0]) );
  }
  i4852.textureParameters = i4860
  var i4863 = i4853[9]
  var i4862 = []
  for(var i = 0; i < i4863.length; i += 1) {
    i4862.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i4863[i + 0]) );
  }
  i4852.materialFlags = i4862
  return i4852
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i4866 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i4867 = data
  i4866.name = i4867[0]
  i4866.value = i4867[1]
  return i4866
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i4870 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i4871 = data
  i4870.name = i4871[0]
  i4870.value = new pc.Color(i4871[1], i4871[2], i4871[3], i4871[4])
  return i4870
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i4874 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i4875 = data
  i4874.name = i4875[0]
  i4874.value = new pc.Vec4( i4875[1], i4875[2], i4875[3], i4875[4] )
  return i4874
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i4878 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i4879 = data
  i4878.name = i4879[0]
  request.r(i4879[1], i4879[2], 0, i4878, 'value')
  return i4878
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i4882 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i4883 = data
  i4882.name = i4883[0]
  i4882.enabled = !!i4883[1]
  return i4882
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i4884 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i4885 = data
  i4884.name = i4885[0]
  i4884.width = i4885[1]
  i4884.height = i4885[2]
  i4884.mipmapCount = i4885[3]
  i4884.anisoLevel = i4885[4]
  i4884.filterMode = i4885[5]
  i4884.hdr = !!i4885[6]
  i4884.format = i4885[7]
  i4884.wrapMode = i4885[8]
  i4884.alphaIsTransparency = !!i4885[9]
  i4884.alphaSource = i4885[10]
  i4884.graphicsFormat = i4885[11]
  i4884.sRGBTexture = !!i4885[12]
  i4884.desiredColorSpace = i4885[13]
  i4884.wrapU = i4885[14]
  i4884.wrapV = i4885[15]
  return i4884
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh"] = function (request, data, root) {
  var i4886 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh' )
  var i4887 = data
  i4886.name = i4887[0]
  i4886.halfPrecision = !!i4887[1]
  i4886.useSimplification = !!i4887[2]
  i4886.useUInt32IndexFormat = !!i4887[3]
  i4886.vertexCount = i4887[4]
  i4886.aabb = i4887[5]
  var i4889 = i4887[6]
  var i4888 = []
  for(var i = 0; i < i4889.length; i += 1) {
    i4888.push( !!i4889[i + 0] );
  }
  i4886.streams = i4888
  i4886.vertices = i4887[7]
  var i4891 = i4887[8]
  var i4890 = []
  for(var i = 0; i < i4891.length; i += 1) {
    i4890.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh', i4891[i + 0]) );
  }
  i4886.subMeshes = i4890
  var i4893 = i4887[9]
  var i4892 = []
  for(var i = 0; i < i4893.length; i += 16) {
    i4892.push( new pc.Mat4().setData(i4893[i + 0], i4893[i + 1], i4893[i + 2], i4893[i + 3],  i4893[i + 4], i4893[i + 5], i4893[i + 6], i4893[i + 7],  i4893[i + 8], i4893[i + 9], i4893[i + 10], i4893[i + 11],  i4893[i + 12], i4893[i + 13], i4893[i + 14], i4893[i + 15]) );
  }
  i4886.bindposes = i4892
  var i4895 = i4887[10]
  var i4894 = []
  for(var i = 0; i < i4895.length; i += 1) {
    i4894.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape', i4895[i + 0]) );
  }
  i4886.blendShapes = i4894
  return i4886
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh"] = function (request, data, root) {
  var i4900 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh' )
  var i4901 = data
  i4900.triangles = i4901[0]
  return i4900
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape"] = function (request, data, root) {
  var i4906 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape' )
  var i4907 = data
  i4906.name = i4907[0]
  var i4909 = i4907[1]
  var i4908 = []
  for(var i = 0; i < i4909.length; i += 1) {
    i4908.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame', i4909[i + 0]) );
  }
  i4906.frames = i4908
  return i4906
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i4910 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i4911 = data
  i4910.position = new pc.Vec3( i4911[0], i4911[1], i4911[2] )
  i4910.scale = new pc.Vec3( i4911[3], i4911[4], i4911[5] )
  i4910.rotation = new pc.Quat(i4911[6], i4911[7], i4911[8], i4911[9])
  return i4910
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystem"] = function (request, data, root) {
  var i4912 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystem' )
  var i4913 = data
  i4912.main = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule', i4913[0], i4912.main)
  i4912.colorBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule', i4913[1], i4912.colorBySpeed)
  i4912.colorOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule', i4913[2], i4912.colorOverLifetime)
  i4912.emission = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule', i4913[3], i4912.emission)
  i4912.rotationBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule', i4913[4], i4912.rotationBySpeed)
  i4912.rotationOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule', i4913[5], i4912.rotationOverLifetime)
  i4912.shape = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule', i4913[6], i4912.shape)
  i4912.sizeBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule', i4913[7], i4912.sizeBySpeed)
  i4912.sizeOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule', i4913[8], i4912.sizeOverLifetime)
  i4912.textureSheetAnimation = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule', i4913[9], i4912.textureSheetAnimation)
  i4912.velocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule', i4913[10], i4912.velocityOverLifetime)
  i4912.noise = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule', i4913[11], i4912.noise)
  i4912.inheritVelocity = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule', i4913[12], i4912.inheritVelocity)
  i4912.forceOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule', i4913[13], i4912.forceOverLifetime)
  i4912.limitVelocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule', i4913[14], i4912.limitVelocityOverLifetime)
  i4912.useAutoRandomSeed = !!i4913[15]
  i4912.randomSeed = i4913[16]
  return i4912
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule"] = function (request, data, root) {
  var i4914 = root || new pc.ParticleSystemMain()
  var i4915 = data
  i4914.duration = i4915[0]
  i4914.loop = !!i4915[1]
  i4914.prewarm = !!i4915[2]
  i4914.startDelay = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4915[3], i4914.startDelay)
  i4914.startLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4915[4], i4914.startLifetime)
  i4914.startSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4915[5], i4914.startSpeed)
  i4914.startSize3D = !!i4915[6]
  i4914.startSizeX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4915[7], i4914.startSizeX)
  i4914.startSizeY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4915[8], i4914.startSizeY)
  i4914.startSizeZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4915[9], i4914.startSizeZ)
  i4914.startRotation3D = !!i4915[10]
  i4914.startRotationX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4915[11], i4914.startRotationX)
  i4914.startRotationY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4915[12], i4914.startRotationY)
  i4914.startRotationZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4915[13], i4914.startRotationZ)
  i4914.startColor = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i4915[14], i4914.startColor)
  i4914.gravityModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4915[15], i4914.gravityModifier)
  i4914.simulationSpace = i4915[16]
  request.r(i4915[17], i4915[18], 0, i4914, 'customSimulationSpace')
  i4914.simulationSpeed = i4915[19]
  i4914.useUnscaledTime = !!i4915[20]
  i4914.scalingMode = i4915[21]
  i4914.playOnAwake = !!i4915[22]
  i4914.maxParticles = i4915[23]
  i4914.emitterVelocityMode = i4915[24]
  i4914.stopAction = i4915[25]
  return i4914
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve"] = function (request, data, root) {
  var i4916 = root || new pc.MinMaxCurve()
  var i4917 = data
  i4916.mode = i4917[0]
  i4916.curveMin = new pc.AnimationCurve( { keys_flow: i4917[1] } )
  i4916.curveMax = new pc.AnimationCurve( { keys_flow: i4917[2] } )
  i4916.curveMultiplier = i4917[3]
  i4916.constantMin = i4917[4]
  i4916.constantMax = i4917[5]
  return i4916
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient"] = function (request, data, root) {
  var i4918 = root || new pc.MinMaxGradient()
  var i4919 = data
  i4918.mode = i4919[0]
  i4918.gradientMin = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i4919[1], i4918.gradientMin)
  i4918.gradientMax = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i4919[2], i4918.gradientMax)
  i4918.colorMin = new pc.Color(i4919[3], i4919[4], i4919[5], i4919[6])
  i4918.colorMax = new pc.Color(i4919[7], i4919[8], i4919[9], i4919[10])
  return i4918
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient"] = function (request, data, root) {
  var i4920 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient' )
  var i4921 = data
  i4920.mode = i4921[0]
  var i4923 = i4921[1]
  var i4922 = []
  for(var i = 0; i < i4923.length; i += 1) {
    i4922.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey', i4923[i + 0]) );
  }
  i4920.colorKeys = i4922
  var i4925 = i4921[2]
  var i4924 = []
  for(var i = 0; i < i4925.length; i += 1) {
    i4924.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey', i4925[i + 0]) );
  }
  i4920.alphaKeys = i4924
  return i4920
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule"] = function (request, data, root) {
  var i4926 = root || new pc.ParticleSystemColorBySpeed()
  var i4927 = data
  i4926.enabled = !!i4927[0]
  i4926.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i4927[1], i4926.color)
  i4926.range = new pc.Vec2( i4927[2], i4927[3] )
  return i4926
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey"] = function (request, data, root) {
  var i4930 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey' )
  var i4931 = data
  i4930.color = new pc.Color(i4931[0], i4931[1], i4931[2], i4931[3])
  i4930.time = i4931[4]
  return i4930
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey"] = function (request, data, root) {
  var i4934 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey' )
  var i4935 = data
  i4934.alpha = i4935[0]
  i4934.time = i4935[1]
  return i4934
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule"] = function (request, data, root) {
  var i4936 = root || new pc.ParticleSystemColorOverLifetime()
  var i4937 = data
  i4936.enabled = !!i4937[0]
  i4936.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i4937[1], i4936.color)
  return i4936
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule"] = function (request, data, root) {
  var i4938 = root || new pc.ParticleSystemEmitter()
  var i4939 = data
  i4938.enabled = !!i4939[0]
  i4938.rateOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4939[1], i4938.rateOverTime)
  i4938.rateOverDistance = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4939[2], i4938.rateOverDistance)
  var i4941 = i4939[3]
  var i4940 = []
  for(var i = 0; i < i4941.length; i += 1) {
    i4940.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst', i4941[i + 0]) );
  }
  i4938.bursts = i4940
  return i4938
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst"] = function (request, data, root) {
  var i4944 = root || new pc.ParticleSystemBurst()
  var i4945 = data
  i4944.count = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4945[0], i4944.count)
  i4944.cycleCount = i4945[1]
  i4944.minCount = i4945[2]
  i4944.maxCount = i4945[3]
  i4944.repeatInterval = i4945[4]
  i4944.time = i4945[5]
  return i4944
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule"] = function (request, data, root) {
  var i4946 = root || new pc.ParticleSystemRotationBySpeed()
  var i4947 = data
  i4946.enabled = !!i4947[0]
  i4946.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4947[1], i4946.x)
  i4946.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4947[2], i4946.y)
  i4946.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4947[3], i4946.z)
  i4946.separateAxes = !!i4947[4]
  i4946.range = new pc.Vec2( i4947[5], i4947[6] )
  return i4946
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule"] = function (request, data, root) {
  var i4948 = root || new pc.ParticleSystemRotationOverLifetime()
  var i4949 = data
  i4948.enabled = !!i4949[0]
  i4948.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4949[1], i4948.x)
  i4948.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4949[2], i4948.y)
  i4948.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4949[3], i4948.z)
  i4948.separateAxes = !!i4949[4]
  return i4948
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule"] = function (request, data, root) {
  var i4950 = root || new pc.ParticleSystemShape()
  var i4951 = data
  i4950.enabled = !!i4951[0]
  i4950.shapeType = i4951[1]
  i4950.randomDirectionAmount = i4951[2]
  i4950.sphericalDirectionAmount = i4951[3]
  i4950.randomPositionAmount = i4951[4]
  i4950.alignToDirection = !!i4951[5]
  i4950.radius = i4951[6]
  i4950.radiusMode = i4951[7]
  i4950.radiusSpread = i4951[8]
  i4950.radiusSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4951[9], i4950.radiusSpeed)
  i4950.radiusThickness = i4951[10]
  i4950.angle = i4951[11]
  i4950.length = i4951[12]
  i4950.boxThickness = new pc.Vec3( i4951[13], i4951[14], i4951[15] )
  i4950.meshShapeType = i4951[16]
  request.r(i4951[17], i4951[18], 0, i4950, 'mesh')
  request.r(i4951[19], i4951[20], 0, i4950, 'meshRenderer')
  request.r(i4951[21], i4951[22], 0, i4950, 'skinnedMeshRenderer')
  i4950.useMeshMaterialIndex = !!i4951[23]
  i4950.meshMaterialIndex = i4951[24]
  i4950.useMeshColors = !!i4951[25]
  i4950.normalOffset = i4951[26]
  i4950.arc = i4951[27]
  i4950.arcMode = i4951[28]
  i4950.arcSpread = i4951[29]
  i4950.arcSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4951[30], i4950.arcSpeed)
  i4950.donutRadius = i4951[31]
  i4950.position = new pc.Vec3( i4951[32], i4951[33], i4951[34] )
  i4950.rotation = new pc.Vec3( i4951[35], i4951[36], i4951[37] )
  i4950.scale = new pc.Vec3( i4951[38], i4951[39], i4951[40] )
  return i4950
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule"] = function (request, data, root) {
  var i4952 = root || new pc.ParticleSystemSizeBySpeed()
  var i4953 = data
  i4952.enabled = !!i4953[0]
  i4952.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4953[1], i4952.x)
  i4952.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4953[2], i4952.y)
  i4952.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4953[3], i4952.z)
  i4952.separateAxes = !!i4953[4]
  i4952.range = new pc.Vec2( i4953[5], i4953[6] )
  return i4952
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule"] = function (request, data, root) {
  var i4954 = root || new pc.ParticleSystemSizeOverLifetime()
  var i4955 = data
  i4954.enabled = !!i4955[0]
  i4954.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4955[1], i4954.x)
  i4954.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4955[2], i4954.y)
  i4954.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4955[3], i4954.z)
  i4954.separateAxes = !!i4955[4]
  return i4954
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule"] = function (request, data, root) {
  var i4956 = root || new pc.ParticleSystemTextureSheetAnimation()
  var i4957 = data
  i4956.enabled = !!i4957[0]
  i4956.mode = i4957[1]
  i4956.animation = i4957[2]
  i4956.numTilesX = i4957[3]
  i4956.numTilesY = i4957[4]
  i4956.useRandomRow = !!i4957[5]
  i4956.frameOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4957[6], i4956.frameOverTime)
  i4956.startFrame = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4957[7], i4956.startFrame)
  i4956.cycleCount = i4957[8]
  i4956.rowIndex = i4957[9]
  i4956.flipU = i4957[10]
  i4956.flipV = i4957[11]
  i4956.spriteCount = i4957[12]
  var i4959 = i4957[13]
  var i4958 = []
  for(var i = 0; i < i4959.length; i += 2) {
  request.r(i4959[i + 0], i4959[i + 1], 2, i4958, '')
  }
  i4956.sprites = i4958
  return i4956
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule"] = function (request, data, root) {
  var i4962 = root || new pc.ParticleSystemVelocityOverLifetime()
  var i4963 = data
  i4962.enabled = !!i4963[0]
  i4962.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4963[1], i4962.x)
  i4962.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4963[2], i4962.y)
  i4962.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4963[3], i4962.z)
  i4962.radial = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4963[4], i4962.radial)
  i4962.speedModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4963[5], i4962.speedModifier)
  i4962.space = i4963[6]
  i4962.orbitalX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4963[7], i4962.orbitalX)
  i4962.orbitalY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4963[8], i4962.orbitalY)
  i4962.orbitalZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4963[9], i4962.orbitalZ)
  i4962.orbitalOffsetX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4963[10], i4962.orbitalOffsetX)
  i4962.orbitalOffsetY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4963[11], i4962.orbitalOffsetY)
  i4962.orbitalOffsetZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4963[12], i4962.orbitalOffsetZ)
  return i4962
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule"] = function (request, data, root) {
  var i4964 = root || new pc.ParticleSystemNoise()
  var i4965 = data
  i4964.enabled = !!i4965[0]
  i4964.separateAxes = !!i4965[1]
  i4964.strengthX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4965[2], i4964.strengthX)
  i4964.strengthY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4965[3], i4964.strengthY)
  i4964.strengthZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4965[4], i4964.strengthZ)
  i4964.frequency = i4965[5]
  i4964.damping = !!i4965[6]
  i4964.octaveCount = i4965[7]
  i4964.octaveMultiplier = i4965[8]
  i4964.octaveScale = i4965[9]
  i4964.quality = i4965[10]
  i4964.scrollSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4965[11], i4964.scrollSpeed)
  i4964.scrollSpeedMultiplier = i4965[12]
  i4964.remapEnabled = !!i4965[13]
  i4964.remapX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4965[14], i4964.remapX)
  i4964.remapY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4965[15], i4964.remapY)
  i4964.remapZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4965[16], i4964.remapZ)
  i4964.positionAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4965[17], i4964.positionAmount)
  i4964.rotationAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4965[18], i4964.rotationAmount)
  i4964.sizeAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4965[19], i4964.sizeAmount)
  return i4964
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule"] = function (request, data, root) {
  var i4966 = root || new pc.ParticleSystemInheritVelocity()
  var i4967 = data
  i4966.enabled = !!i4967[0]
  i4966.mode = i4967[1]
  i4966.curve = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4967[2], i4966.curve)
  return i4966
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule"] = function (request, data, root) {
  var i4968 = root || new pc.ParticleSystemForceOverLifetime()
  var i4969 = data
  i4968.enabled = !!i4969[0]
  i4968.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4969[1], i4968.x)
  i4968.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4969[2], i4968.y)
  i4968.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4969[3], i4968.z)
  i4968.space = i4969[4]
  i4968.randomized = !!i4969[5]
  return i4968
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule"] = function (request, data, root) {
  var i4970 = root || new pc.ParticleSystemLimitVelocityOverLifetime()
  var i4971 = data
  i4970.enabled = !!i4971[0]
  i4970.limit = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4971[1], i4970.limit)
  i4970.limitX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4971[2], i4970.limitX)
  i4970.limitY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4971[3], i4970.limitY)
  i4970.limitZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4971[4], i4970.limitZ)
  i4970.dampen = i4971[5]
  i4970.separateAxes = !!i4971[6]
  i4970.space = i4971[7]
  i4970.drag = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4971[8], i4970.drag)
  i4970.multiplyDragByParticleSize = !!i4971[9]
  i4970.multiplyDragByParticleVelocity = !!i4971[10]
  return i4970
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer"] = function (request, data, root) {
  var i4972 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer' )
  var i4973 = data
  request.r(i4973[0], i4973[1], 0, i4972, 'mesh')
  i4972.meshCount = i4973[2]
  i4972.activeVertexStreamsCount = i4973[3]
  i4972.alignment = i4973[4]
  i4972.renderMode = i4973[5]
  i4972.sortMode = i4973[6]
  i4972.lengthScale = i4973[7]
  i4972.velocityScale = i4973[8]
  i4972.cameraVelocityScale = i4973[9]
  i4972.normalDirection = i4973[10]
  i4972.sortingFudge = i4973[11]
  i4972.minParticleSize = i4973[12]
  i4972.maxParticleSize = i4973[13]
  i4972.pivot = new pc.Vec3( i4973[14], i4973[15], i4973[16] )
  request.r(i4973[17], i4973[18], 0, i4972, 'trailMaterial')
  i4972.applyActiveColorSpace = !!i4973[19]
  i4972.enabled = !!i4973[20]
  request.r(i4973[21], i4973[22], 0, i4972, 'sharedMaterial')
  var i4975 = i4973[23]
  var i4974 = []
  for(var i = 0; i < i4975.length; i += 2) {
  request.r(i4975[i + 0], i4975[i + 1], 2, i4974, '')
  }
  i4972.sharedMaterials = i4974
  i4972.receiveShadows = !!i4973[24]
  i4972.shadowCastingMode = i4973[25]
  i4972.sortingLayerID = i4973[26]
  i4972.sortingOrder = i4973[27]
  i4972.lightmapIndex = i4973[28]
  i4972.lightmapSceneIndex = i4973[29]
  i4972.lightmapScaleOffset = new pc.Vec4( i4973[30], i4973[31], i4973[32], i4973[33] )
  i4972.lightProbeUsage = i4973[34]
  i4972.reflectionProbeUsage = i4973[35]
  return i4972
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i4978 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i4979 = data
  i4978.name = i4979[0]
  i4978.tagId = i4979[1]
  i4978.enabled = !!i4979[2]
  i4978.isStatic = !!i4979[3]
  i4978.layer = i4979[4]
  return i4978
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i4980 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i4981 = data
  i4980.pivot = new pc.Vec2( i4981[0], i4981[1] )
  i4980.anchorMin = new pc.Vec2( i4981[2], i4981[3] )
  i4980.anchorMax = new pc.Vec2( i4981[4], i4981[5] )
  i4980.sizeDelta = new pc.Vec2( i4981[6], i4981[7] )
  i4980.anchoredPosition3D = new pc.Vec3( i4981[8], i4981[9], i4981[10] )
  i4980.rotation = new pc.Quat(i4981[11], i4981[12], i4981[13], i4981[14])
  i4980.scale = new pc.Vec3( i4981[15], i4981[16], i4981[17] )
  return i4980
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i4982 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i4983 = data
  i4982.planeDistance = i4983[0]
  i4982.referencePixelsPerUnit = i4983[1]
  i4982.isFallbackOverlay = !!i4983[2]
  i4982.renderMode = i4983[3]
  i4982.renderOrder = i4983[4]
  i4982.sortingLayerName = i4983[5]
  i4982.sortingOrder = i4983[6]
  i4982.scaleFactor = i4983[7]
  request.r(i4983[8], i4983[9], 0, i4982, 'worldCamera')
  i4982.overrideSorting = !!i4983[10]
  i4982.pixelPerfect = !!i4983[11]
  i4982.targetDisplay = i4983[12]
  i4982.overridePixelPerfect = !!i4983[13]
  i4982.enabled = !!i4983[14]
  return i4982
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i4984 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i4985 = data
  i4984.m_UiScaleMode = i4985[0]
  i4984.m_ReferencePixelsPerUnit = i4985[1]
  i4984.m_ScaleFactor = i4985[2]
  i4984.m_ReferenceResolution = new pc.Vec2( i4985[3], i4985[4] )
  i4984.m_ScreenMatchMode = i4985[5]
  i4984.m_MatchWidthOrHeight = i4985[6]
  i4984.m_PhysicalUnit = i4985[7]
  i4984.m_FallbackScreenDPI = i4985[8]
  i4984.m_DefaultSpriteDPI = i4985[9]
  i4984.m_DynamicPixelsPerUnit = i4985[10]
  i4984.m_PresetInfoIsWorld = !!i4985[11]
  return i4984
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i4986 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i4987 = data
  i4986.m_IgnoreReversedGraphics = !!i4987[0]
  i4986.m_BlockingObjects = i4987[1]
  i4986.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i4987[2] )
  return i4986
}

Deserializers["DG.Tweening.DOTweenAnimation"] = function (request, data, root) {
  var i4988 = root || request.c( 'DG.Tweening.DOTweenAnimation' )
  var i4989 = data
  i4988.targetIsSelf = !!i4989[0]
  request.r(i4989[1], i4989[2], 0, i4988, 'targetGO')
  i4988.tweenTargetIsTargetGO = !!i4989[3]
  i4988.delay = i4989[4]
  i4988.duration = i4989[5]
  i4988.easeType = i4989[6]
  i4988.easeCurve = new pc.AnimationCurve( { keys_flow: i4989[7] } )
  i4988.loopType = i4989[8]
  i4988.loops = i4989[9]
  i4988.id = i4989[10]
  i4988.isRelative = !!i4989[11]
  i4988.isFrom = !!i4989[12]
  i4988.isIndependentUpdate = !!i4989[13]
  i4988.autoKill = !!i4989[14]
  i4988.autoGenerate = !!i4989[15]
  i4988.isActive = !!i4989[16]
  i4988.isValid = !!i4989[17]
  request.r(i4989[18], i4989[19], 0, i4988, 'target')
  i4988.animationType = i4989[20]
  i4988.targetType = i4989[21]
  i4988.forcedTargetType = i4989[22]
  i4988.autoPlay = !!i4989[23]
  i4988.useTargetAsV3 = !!i4989[24]
  i4988.endValueFloat = i4989[25]
  i4988.endValueV3 = new pc.Vec3( i4989[26], i4989[27], i4989[28] )
  i4988.endValueV2 = new pc.Vec2( i4989[29], i4989[30] )
  i4988.endValueColor = new pc.Color(i4989[31], i4989[32], i4989[33], i4989[34])
  i4988.endValueString = i4989[35]
  i4988.endValueRect = UnityEngine.Rect.MinMaxRect(i4989[36], i4989[37], i4989[38], i4989[39])
  request.r(i4989[40], i4989[41], 0, i4988, 'endValueTransform')
  i4988.optionalBool0 = !!i4989[42]
  i4988.optionalBool1 = !!i4989[43]
  i4988.optionalFloat0 = i4989[44]
  i4988.optionalInt0 = i4989[45]
  i4988.optionalRotationMode = i4989[46]
  i4988.optionalScrambleMode = i4989[47]
  i4988.optionalShakeRandomnessMode = i4989[48]
  i4988.optionalString = i4989[49]
  i4988.updateType = i4989[50]
  i4988.isSpeedBased = !!i4989[51]
  i4988.hasOnStart = !!i4989[52]
  i4988.hasOnPlay = !!i4989[53]
  i4988.hasOnUpdate = !!i4989[54]
  i4988.hasOnStepComplete = !!i4989[55]
  i4988.hasOnComplete = !!i4989[56]
  i4988.hasOnTweenCreated = !!i4989[57]
  i4988.hasOnRewind = !!i4989[58]
  i4988.onStart = request.d('UnityEngine.Events.UnityEvent', i4989[59], i4988.onStart)
  i4988.onPlay = request.d('UnityEngine.Events.UnityEvent', i4989[60], i4988.onPlay)
  i4988.onUpdate = request.d('UnityEngine.Events.UnityEvent', i4989[61], i4988.onUpdate)
  i4988.onStepComplete = request.d('UnityEngine.Events.UnityEvent', i4989[62], i4988.onStepComplete)
  i4988.onComplete = request.d('UnityEngine.Events.UnityEvent', i4989[63], i4988.onComplete)
  i4988.onTweenCreated = request.d('UnityEngine.Events.UnityEvent', i4989[64], i4988.onTweenCreated)
  i4988.onRewind = request.d('UnityEngine.Events.UnityEvent', i4989[65], i4988.onRewind)
  return i4988
}

Deserializers["UnityEngine.Events.UnityEvent"] = function (request, data, root) {
  var i4990 = root || request.c( 'UnityEngine.Events.UnityEvent' )
  var i4991 = data
  i4990.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i4991[0], i4990.m_PersistentCalls)
  return i4990
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i4992 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i4993 = data
  var i4995 = i4993[0]
  var i4994 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i4995.length; i += 1) {
    i4994.add(request.d('UnityEngine.Events.PersistentCall', i4995[i + 0]));
  }
  i4992.m_Calls = i4994
  return i4992
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i4998 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i4999 = data
  request.r(i4999[0], i4999[1], 0, i4998, 'm_Target')
  i4998.m_TargetAssemblyTypeName = i4999[2]
  i4998.m_MethodName = i4999[3]
  i4998.m_Mode = i4999[4]
  i4998.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i4999[5], i4998.m_Arguments)
  i4998.m_CallState = i4999[6]
  return i4998
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i5000 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i5001 = data
  i5000.cullTransparentMesh = !!i5001[0]
  return i5000
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i5002 = root || request.c( 'UnityEngine.UI.Image' )
  var i5003 = data
  request.r(i5003[0], i5003[1], 0, i5002, 'm_Sprite')
  i5002.m_Type = i5003[2]
  i5002.m_PreserveAspect = !!i5003[3]
  i5002.m_FillCenter = !!i5003[4]
  i5002.m_FillMethod = i5003[5]
  i5002.m_FillAmount = i5003[6]
  i5002.m_FillClockwise = !!i5003[7]
  i5002.m_FillOrigin = i5003[8]
  i5002.m_UseSpriteMesh = !!i5003[9]
  i5002.m_PixelsPerUnitMultiplier = i5003[10]
  request.r(i5003[11], i5003[12], 0, i5002, 'm_Material')
  i5002.m_Maskable = !!i5003[13]
  i5002.m_Color = new pc.Color(i5003[14], i5003[15], i5003[16], i5003[17])
  i5002.m_RaycastTarget = !!i5003[18]
  i5002.m_RaycastPadding = new pc.Vec4( i5003[19], i5003[20], i5003[21], i5003[22] )
  return i5002
}

Deserializers["UnityEngine.UI.Text"] = function (request, data, root) {
  var i5004 = root || request.c( 'UnityEngine.UI.Text' )
  var i5005 = data
  i5004.m_FontData = request.d('UnityEngine.UI.FontData', i5005[0], i5004.m_FontData)
  i5004.m_Text = i5005[1]
  request.r(i5005[2], i5005[3], 0, i5004, 'm_Material')
  i5004.m_Maskable = !!i5005[4]
  i5004.m_Color = new pc.Color(i5005[5], i5005[6], i5005[7], i5005[8])
  i5004.m_RaycastTarget = !!i5005[9]
  i5004.m_RaycastPadding = new pc.Vec4( i5005[10], i5005[11], i5005[12], i5005[13] )
  return i5004
}

Deserializers["UnityEngine.UI.FontData"] = function (request, data, root) {
  var i5006 = root || request.c( 'UnityEngine.UI.FontData' )
  var i5007 = data
  request.r(i5007[0], i5007[1], 0, i5006, 'm_Font')
  i5006.m_FontSize = i5007[2]
  i5006.m_FontStyle = i5007[3]
  i5006.m_BestFit = !!i5007[4]
  i5006.m_MinSize = i5007[5]
  i5006.m_MaxSize = i5007[6]
  i5006.m_Alignment = i5007[7]
  i5006.m_AlignByGeometry = !!i5007[8]
  i5006.m_RichText = !!i5007[9]
  i5006.m_HorizontalOverflow = i5007[10]
  i5006.m_VerticalOverflow = i5007[11]
  i5006.m_LineSpacing = i5007[12]
  return i5006
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i5008 = root || request.c( 'UnityEngine.UI.Button' )
  var i5009 = data
  i5008.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i5009[0], i5008.m_OnClick)
  i5008.m_Navigation = request.d('UnityEngine.UI.Navigation', i5009[1], i5008.m_Navigation)
  i5008.m_Transition = i5009[2]
  i5008.m_Colors = request.d('UnityEngine.UI.ColorBlock', i5009[3], i5008.m_Colors)
  i5008.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i5009[4], i5008.m_SpriteState)
  i5008.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i5009[5], i5008.m_AnimationTriggers)
  i5008.m_Interactable = !!i5009[6]
  request.r(i5009[7], i5009[8], 0, i5008, 'm_TargetGraphic')
  return i5008
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i5010 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i5011 = data
  i5010.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i5011[0], i5010.m_PersistentCalls)
  return i5010
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i5012 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i5013 = data
  request.r(i5013[0], i5013[1], 0, i5012, 'm_ObjectArgument')
  i5012.m_ObjectArgumentAssemblyTypeName = i5013[2]
  i5012.m_IntArgument = i5013[3]
  i5012.m_FloatArgument = i5013[4]
  i5012.m_StringArgument = i5013[5]
  i5012.m_BoolArgument = !!i5013[6]
  return i5012
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i5014 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i5015 = data
  i5014.m_Mode = i5015[0]
  i5014.m_WrapAround = !!i5015[1]
  request.r(i5015[2], i5015[3], 0, i5014, 'm_SelectOnUp')
  request.r(i5015[4], i5015[5], 0, i5014, 'm_SelectOnDown')
  request.r(i5015[6], i5015[7], 0, i5014, 'm_SelectOnLeft')
  request.r(i5015[8], i5015[9], 0, i5014, 'm_SelectOnRight')
  return i5014
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i5016 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i5017 = data
  i5016.m_NormalColor = new pc.Color(i5017[0], i5017[1], i5017[2], i5017[3])
  i5016.m_HighlightedColor = new pc.Color(i5017[4], i5017[5], i5017[6], i5017[7])
  i5016.m_PressedColor = new pc.Color(i5017[8], i5017[9], i5017[10], i5017[11])
  i5016.m_SelectedColor = new pc.Color(i5017[12], i5017[13], i5017[14], i5017[15])
  i5016.m_DisabledColor = new pc.Color(i5017[16], i5017[17], i5017[18], i5017[19])
  i5016.m_ColorMultiplier = i5017[20]
  i5016.m_FadeDuration = i5017[21]
  return i5016
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i5018 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i5019 = data
  request.r(i5019[0], i5019[1], 0, i5018, 'm_HighlightedSprite')
  request.r(i5019[2], i5019[3], 0, i5018, 'm_PressedSprite')
  request.r(i5019[4], i5019[5], 0, i5018, 'm_SelectedSprite')
  request.r(i5019[6], i5019[7], 0, i5018, 'm_DisabledSprite')
  return i5018
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i5020 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i5021 = data
  i5020.m_NormalTrigger = i5021[0]
  i5020.m_HighlightedTrigger = i5021[1]
  i5020.m_PressedTrigger = i5021[2]
  i5020.m_SelectedTrigger = i5021[3]
  i5020.m_DisabledTrigger = i5021[4]
  return i5020
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animator"] = function (request, data, root) {
  var i5022 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animator' )
  var i5023 = data
  request.r(i5023[0], i5023[1], 0, i5022, 'animatorController')
  request.r(i5023[2], i5023[3], 0, i5022, 'avatar')
  i5022.updateMode = i5023[4]
  i5022.hasTransformHierarchy = !!i5023[5]
  i5022.applyRootMotion = !!i5023[6]
  var i5025 = i5023[7]
  var i5024 = []
  for(var i = 0; i < i5025.length; i += 2) {
  request.r(i5025[i + 0], i5025[i + 1], 2, i5024, '')
  }
  i5022.humanBones = i5024
  i5022.enabled = !!i5023[8]
  return i5022
}

Deserializers["Level1_Cloth_Playable"] = function (request, data, root) {
  var i5028 = root || request.c( 'Level1_Cloth_Playable' )
  var i5029 = data
  request.r(i5029[0], i5029[1], 0, i5028, 'WashingView')
  request.r(i5029[2], i5029[3], 0, i5028, 'WashingTools')
  request.r(i5029[4], i5029[5], 0, i5028, 'DressingView')
  request.r(i5029[6], i5029[7], 0, i5028, 'DressingTools')
  i5028.ZoomStep1 = request.d('ZoomPos', i5029[8], i5028.ZoomStep1)
  request.r(i5029[9], i5029[10], 0, i5028, 'ToolStep1')
  request.r(i5029[11], i5029[12], 0, i5028, 'Basket_Cloth')
  request.r(i5029[13], i5029[14], 0, i5028, 'clothInside')
  request.r(i5029[15], i5029[16], 0, i5028, 'clothRound')
  request.r(i5029[17], i5029[18], 0, i5028, 'machineDoor')
  request.r(i5029[19], i5029[20], 0, i5028, 'machineGlass')
  i5028.ZoomStep2 = request.d('ZoomPos', i5029[21], i5028.ZoomStep2)
  i5028.ZoomStep2b = request.d('ZoomPos', i5029[22], i5028.ZoomStep2b)
  request.r(i5029[23], i5029[24], 0, i5028, 'ToolStep2')
  request.r(i5029[25], i5029[26], 0, i5028, 'ToolStep2CamFollow')
  request.r(i5029[27], i5029[28], 0, i5028, 'drawerObj')
  request.r(i5029[29], i5029[30], 0, i5028, 'surfObj')
  request.r(i5029[31], i5029[32], 0, i5028, 'surfPackTop')
  request.r(i5029[33], i5029[34], 0, i5028, 'handStep2')
  request.r(i5029[35], i5029[36], 0, i5028, 'surfController')
  request.r(i5029[37], i5029[38], 0, i5028, 'clothsInside')
  request.r(i5029[39], i5029[40], 0, i5028, 'clothsInsideGlass')
  request.r(i5029[41], i5029[42], 0, i5028, 'clothsStaticClean')
  request.r(i5029[43], i5029[44], 0, i5028, 'wetCloths')
  request.r(i5029[45], i5029[46], 0, i5028, 'clothCleanInside')
  request.r(i5029[47], i5029[48], 0, i5028, 'clothCleanInsideAnim')
  request.r(i5029[49], i5029[50], 0, i5028, 'waterWave')
  request.r(i5029[51], i5029[52], 0, i5028, 'clothCleanInside2')
  request.r(i5029[53], i5029[54], 0, i5028, 'clothCleanInside2Cam')
  request.r(i5029[55], i5029[56], 0, i5028, 'clothBasketTarget')
  request.r(i5029[57], i5029[58], 0, i5028, 'clothBasketTarget2')
  request.r(i5029[59], i5029[60], 0, i5028, 'waterSplash_Vfx')
  request.r(i5029[61], i5029[62], 0, i5028, 'countDownTimerText')
  i5028.countDown = i5029[63]
  request.r(i5029[64], i5029[65], 0, i5028, 'machineTimer')
  request.r(i5029[66], i5029[67], 0, i5028, 'machineTimerRotater')
  request.r(i5029[68], i5029[69], 0, i5028, 'machineTimerIndication')
  request.r(i5029[70], i5029[71], 0, i5028, 'darazOpenSfx')
  request.r(i5029[72], i5029[73], 0, i5028, 'darazCloseSfx')
  request.r(i5029[74], i5029[75], 0, i5028, 'doorOpenSfx')
  request.r(i5029[76], i5029[77], 0, i5028, 'machineStartSfx')
  request.r(i5029[78], i5029[79], 0, i5028, 'machineFinishSfx')
  request.r(i5029[80], i5029[81], 0, i5028, 'waterDrainSfx')
  i5028.ZoomStep3a = request.d('ZoomPos', i5029[82], i5028.ZoomStep3a)
  request.r(i5029[83], i5029[84], 0, i5028, 'ToolStep3a')
  request.r(i5029[85], i5029[86], 0, i5028, 'ToolStep3aRend')
  request.r(i5029[87], i5029[88], 0, i5028, 'dressingBasket')
  request.r(i5029[89], i5029[90], 0, i5028, 'dummyFullParent')
  request.r(i5029[91], i5029[92], 0, i5028, 'DressParent')
  i5028.ZoomStep3 = request.d('ZoomPos', i5029[93], i5028.ZoomStep3)
  request.r(i5029[94], i5029[95], 0, i5028, 'ToolStep3')
  request.r(i5029[96], i5029[97], 0, i5028, 'tornPatch')
  request.r(i5029[98], i5029[99], 0, i5028, 'patchCompleted')
  request.r(i5029[100], i5029[101], 0, i5028, 'patchOutline')
  i5028.ZoomStep4 = request.d('ZoomPos', i5029[102], i5028.ZoomStep4)
  request.r(i5029[103], i5029[104], 0, i5028, 'ToolStep4')
  request.r(i5029[105], i5029[106], 0, i5028, 'camFollowStep4')
  request.r(i5029[107], i5029[108], 0, i5028, 'SteamerBottom')
  i5028.ZoomStep5 = request.d('ZoomPos', i5029[109], i5028.ZoomStep5)
  request.r(i5029[110], i5029[111], 0, i5028, 'ToolStep5')
  request.r(i5029[112], i5029[113], 0, i5028, 'ribbonFinalTarget')
  request.r(i5029[114], i5029[115], 0, i5028, 'ribbonFinal')
  request.r(i5029[116], i5029[117], 0, i5028, 'handIndication5')
  i5028.levelName = i5029[118]
  i5028.levelReward = i5029[119]
  request.r(i5029[120], i5029[121], 0, i5028, 'LevelIcon')
  request.r(i5029[122], i5029[123], 0, i5028, 'Level_BG')
  var i5031 = i5029[124]
  var i5030 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Sprite')))
  for(var i = 0; i < i5031.length; i += 2) {
  request.r(i5031[i + 0], i5031[i + 1], 1, i5030, '')
  }
  i5028.ToolIcons = i5030
  var i5033 = i5029[125]
  var i5032 = []
  for(var i = 0; i < i5033.length; i += 2) {
  request.r(i5033[i + 0], i5033[i + 1], 2, i5032, '')
  }
  i5028.AllDrags = i5032
  var i5035 = i5029[126]
  var i5034 = []
  for(var i = 0; i < i5035.length; i += 2) {
  request.r(i5035[i + 0], i5035[i + 1], 2, i5034, '')
  }
  i5028.AllSources = i5034
  var i5037 = i5029[127]
  var i5036 = []
  for(var i = 0; i < i5037.length; i += 2) {
  request.r(i5037[i + 0], i5037[i + 1], 2, i5036, '')
  }
  i5028.AllScratches = i5036
  i5028.stepsDone = i5029[128]
  i5028.levelNo = i5029[129]
  i5028.partNo = i5029[130]
  request.r(i5029[131], i5029[132], 0, i5028, 'clothSfx')
  request.r(i5029[133], i5029[134], 0, i5028, 'doorCloseSfx')
  return i5028
}

Deserializers["ZoomPos"] = function (request, data, root) {
  var i5038 = root || request.c( 'ZoomPos' )
  var i5039 = data
  i5038.CameraPos = new pc.Vec3( i5039[0], i5039[1], i5039[2] )
  i5038.CameraFOV = i5039[3]
  return i5038
}

Deserializers["PlayableCTA"] = function (request, data, root) {
  var i5048 = root || request.c( 'PlayableCTA' )
  var i5049 = data
  i5048.trigger = i5049[0]
  i5048.afterSeconds = i5049[1]
  i5048.afterTaps = i5049[2]
  request.r(i5049[3], i5049[4], 0, i5048, 'scratchProgress')
  i5048.scratchIndex = i5049[5]
  i5048.progressThreshold = i5049[6]
  request.r(i5049[7], i5049[8], 0, i5048, 'watchedTool')
  i5048.blockInputOnFire = !!i5049[9]
  i5048.refireOnEveryTap = !!i5049[10]
  i5048.refireDelay = i5049[11]
  i5048.showEndCard = !!i5049[12]
  request.r(i5049[13], i5049[14], 0, i5048, 'endCard')
  i5048.showEndCardOnProgressTrigger = !!i5049[15]
  i5048.showEndCardOnToolAppearTrigger = !!i5049[16]
  i5048.onCtaFired = request.d('UnityEngine.Events.UnityEvent', i5049[17], i5048.onCtaFired)
  i5048.logWhenFired = !!i5049[18]
  return i5048
}

Deserializers["ScratchCardAsset.ScratchCardManager"] = function (request, data, root) {
  var i5050 = root || request.c( 'ScratchCardAsset.ScratchCardManager' )
  var i5051 = data
  request.r(i5051[0], i5051[1], 0, i5050, 'MainCamera')
  i5050.RenderType = i5051[2]
  request.r(i5051[3], i5051[4], 0, i5050, 'ScratchSurfaceSprite')
  i5050.ScratchSurfaceSpriteHasAlpha = !!i5051[5]
  i5050.MaskProgressCutOffValue = i5051[6]
  request.r(i5051[7], i5051[8], 0, i5050, 'EraseTexture')
  i5050.EraseTextureScale = new pc.Vec2( i5051[9], i5051[10] )
  i5050.InputEnabled = !!i5051[11]
  request.r(i5051[12], i5051[13], 0, i5050, 'Card')
  i5050.Mode = i5051[14]
  request.r(i5051[15], i5051[16], 0, i5050, 'Progress')
  request.r(i5051[17], i5051[18], 0, i5050, 'MeshCard')
  request.r(i5051[19], i5051[20], 0, i5050, 'SpriteCard')
  request.r(i5051[21], i5051[22], 0, i5050, 'ImageCard')
  request.r(i5051[23], i5051[24], 0, i5050, 'MaskShader')
  request.r(i5051[25], i5051[26], 0, i5050, 'BrushShader')
  request.r(i5051[27], i5051[28], 0, i5050, 'MaskProgressShader')
  request.r(i5051[29], i5051[30], 0, i5050, 'MaskProgressCutOffShader')
  return i5050
}

Deserializers["ScratchCardAsset.ScratchCard"] = function (request, data, root) {
  var i5052 = root || request.c( 'ScratchCardAsset.ScratchCard' )
  var i5053 = data
  request.r(i5053[0], i5053[1], 0, i5052, 'MainCamera')
  request.r(i5053[2], i5053[3], 0, i5052, 'Surface')
  i5052.RenderTextureQuality = i5053[4]
  request.r(i5053[5], i5053[6], 0, i5052, 'Eraser')
  request.r(i5053[7], i5053[8], 0, i5052, 'Progress')
  request.r(i5053[9], i5053[10], 0, i5052, 'ScratchSurface')
  request.r(i5053[11], i5053[12], 0, i5052, 'RenderTexture')
  i5052.BrushScale = new pc.Vec2( i5053[13], i5053[14] )
  request.r(i5053[15], i5053[16], 0, i5052, 'ToolTip')
  i5052.InputEnabled = !!i5053[17]
  i5052.IsScratching = !!i5053[18]
  i5052.useChangingScale = !!i5053[19]
  i5052.useGivenBrushScale = !!i5053[20]
  i5052.canSpreadMask = !!i5053[21]
  i5052.shouldPaintHoles = !!i5053[22]
  i5052.canRotateTip = !!i5053[23]
  i5052._mode = i5053[24]
  return i5052
}

Deserializers["ScratchCardAsset.EraseProgress"] = function (request, data, root) {
  var i5054 = root || request.c( 'ScratchCardAsset.EraseProgress' )
  var i5055 = data
  request.r(i5055[0], i5055[1], 0, i5054, 'Card')
  i5054.currentProgress = i5055[2]
  return i5054
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.LineRenderer"] = function (request, data, root) {
  var i5056 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.LineRenderer' )
  var i5057 = data
  i5056.textureMode = i5057[0]
  i5056.alignment = i5057[1]
  i5056.widthCurve = new pc.AnimationCurve( { keys_flow: i5057[2] } )
  i5056.colorGradient = i5057[3] ? new pc.ColorGradient(i5057[3][0], i5057[3][1], i5057[3][2]) : null
  var i5059 = i5057[4]
  var i5058 = []
  for(var i = 0; i < i5059.length; i += 3) {
    i5058.push( new pc.Vec3( i5059[i + 0], i5059[i + 1], i5059[i + 2] ) );
  }
  i5056.positions = i5058
  i5056.positionCount = i5057[5]
  i5056.widthMultiplier = i5057[6]
  i5056.startWidth = i5057[7]
  i5056.endWidth = i5057[8]
  i5056.numCornerVertices = i5057[9]
  i5056.numCapVertices = i5057[10]
  i5056.useWorldSpace = !!i5057[11]
  i5056.loop = !!i5057[12]
  i5056.startColor = new pc.Color(i5057[13], i5057[14], i5057[15], i5057[16])
  i5056.endColor = new pc.Color(i5057[17], i5057[18], i5057[19], i5057[20])
  i5056.generateLightingData = !!i5057[21]
  i5056.enabled = !!i5057[22]
  request.r(i5057[23], i5057[24], 0, i5056, 'sharedMaterial')
  var i5061 = i5057[25]
  var i5060 = []
  for(var i = 0; i < i5061.length; i += 2) {
  request.r(i5061[i + 0], i5061[i + 1], 2, i5060, '')
  }
  i5056.sharedMaterials = i5060
  i5056.receiveShadows = !!i5057[26]
  i5056.shadowCastingMode = i5057[27]
  i5056.sortingLayerID = i5057[28]
  i5056.sortingOrder = i5057[29]
  i5056.lightmapIndex = i5057[30]
  i5056.lightmapSceneIndex = i5057[31]
  i5056.lightmapScaleOffset = new pc.Vec4( i5057[32], i5057[33], i5057[34], i5057[35] )
  i5056.lightProbeUsage = i5057[36]
  i5056.reflectionProbeUsage = i5057[37]
  return i5056
}

Deserializers["TextureOffsetScroller"] = function (request, data, root) {
  var i5064 = root || request.c( 'TextureOffsetScroller' )
  var i5065 = data
  i5064.scrollSpeed = new pc.Vec2( i5065[0], i5065[1] )
  i5064.smoothStart = !!i5065[2]
  i5064.smoothDuration = i5065[3]
  i5064.textureName = i5065[4]
  i5064.useSharedMaterial = !!i5065[5]
  return i5064
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer"] = function (request, data, root) {
  var i5066 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer' )
  var i5067 = data
  i5066.color = new pc.Color(i5067[0], i5067[1], i5067[2], i5067[3])
  request.r(i5067[4], i5067[5], 0, i5066, 'sprite')
  i5066.flipX = !!i5067[6]
  i5066.flipY = !!i5067[7]
  i5066.drawMode = i5067[8]
  i5066.size = new pc.Vec2( i5067[9], i5067[10] )
  i5066.tileMode = i5067[11]
  i5066.adaptiveModeThreshold = i5067[12]
  i5066.maskInteraction = i5067[13]
  i5066.spriteSortPoint = i5067[14]
  i5066.enabled = !!i5067[15]
  request.r(i5067[16], i5067[17], 0, i5066, 'sharedMaterial')
  var i5069 = i5067[18]
  var i5068 = []
  for(var i = 0; i < i5069.length; i += 2) {
  request.r(i5069[i + 0], i5069[i + 1], 2, i5068, '')
  }
  i5066.sharedMaterials = i5068
  i5066.receiveShadows = !!i5067[19]
  i5066.shadowCastingMode = i5067[20]
  i5066.sortingLayerID = i5067[21]
  i5066.sortingOrder = i5067[22]
  i5066.lightmapIndex = i5067[23]
  i5066.lightmapSceneIndex = i5067[24]
  i5066.lightmapScaleOffset = new pc.Vec4( i5067[25], i5067[26], i5067[27], i5067[28] )
  i5066.lightProbeUsage = i5067[29]
  i5066.reflectionProbeUsage = i5067[30]
  return i5066
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.TrailRenderer"] = function (request, data, root) {
  var i5070 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.TrailRenderer' )
  var i5071 = data
  var i5073 = i5071[0]
  var i5072 = []
  for(var i = 0; i < i5073.length; i += 3) {
    i5072.push( new pc.Vec3( i5073[i + 0], i5073[i + 1], i5073[i + 2] ) );
  }
  i5070.positions = i5072
  i5070.positionCount = i5071[1]
  i5070.time = i5071[2]
  i5070.startWidth = i5071[3]
  i5070.endWidth = i5071[4]
  i5070.widthMultiplier = i5071[5]
  i5070.autodestruct = !!i5071[6]
  i5070.emitting = !!i5071[7]
  i5070.numCornerVertices = i5071[8]
  i5070.numCapVertices = i5071[9]
  i5070.minVertexDistance = i5071[10]
  i5070.colorGradient = i5071[11] ? new pc.ColorGradient(i5071[11][0], i5071[11][1], i5071[11][2]) : null
  i5070.startColor = new pc.Color(i5071[12], i5071[13], i5071[14], i5071[15])
  i5070.endColor = new pc.Color(i5071[16], i5071[17], i5071[18], i5071[19])
  i5070.generateLightingData = !!i5071[20]
  i5070.textureMode = i5071[21]
  i5070.alignment = i5071[22]
  i5070.widthCurve = new pc.AnimationCurve( { keys_flow: i5071[23] } )
  i5070.enabled = !!i5071[24]
  request.r(i5071[25], i5071[26], 0, i5070, 'sharedMaterial')
  var i5075 = i5071[27]
  var i5074 = []
  for(var i = 0; i < i5075.length; i += 2) {
  request.r(i5075[i + 0], i5075[i + 1], 2, i5074, '')
  }
  i5070.sharedMaterials = i5074
  i5070.receiveShadows = !!i5071[28]
  i5070.shadowCastingMode = i5071[29]
  i5070.sortingLayerID = i5071[30]
  i5070.sortingOrder = i5071[31]
  i5070.lightmapIndex = i5071[32]
  i5070.lightmapSceneIndex = i5071[33]
  i5070.lightmapScaleOffset = new pc.Vec4( i5071[34], i5071[35], i5071[36], i5071[37] )
  i5070.lightProbeUsage = i5071[38]
  i5070.reflectionProbeUsage = i5071[39]
  return i5070
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D"] = function (request, data, root) {
  var i5076 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D' )
  var i5077 = data
  i5076.usedByComposite = !!i5077[0]
  i5076.autoTiling = !!i5077[1]
  i5076.size = new pc.Vec2( i5077[2], i5077[3] )
  i5076.edgeRadius = i5077[4]
  i5076.enabled = !!i5077[5]
  i5076.isTrigger = !!i5077[6]
  i5076.usedByEffector = !!i5077[7]
  i5076.density = i5077[8]
  i5076.offset = new pc.Vec2( i5077[9], i5077[10] )
  request.r(i5077[11], i5077[12], 0, i5076, 'material')
  return i5076
}

Deserializers["RotaryTimerKnob"] = function (request, data, root) {
  var i5078 = root || request.c( 'RotaryTimerKnob' )
  var i5079 = data
  i5078.canDrag = !!i5079[0]
  i5078.numSteps = i5079[1]
  i5078.onlyClockwise = !!i5079[2]
  request.r(i5079[3], i5079[4], 0, i5078, 'clickSound')
  i5078.enableVibration = !!i5079[5]
  request.r(i5079[6], i5079[7], 0, i5078, 'stepText')
  i5078.OnComplete = request.d('UnityEngine.Events.UnityEvent', i5079[8], i5078.OnComplete)
  request.r(i5079[9], i5079[10], 0, i5078, 'handIndication')
  return i5078
}

Deserializers["UnityEngine.U2D.Animation.SpriteSkin"] = function (request, data, root) {
  var i5080 = root || request.c( 'UnityEngine.U2D.Animation.SpriteSkin' )
  var i5081 = data
  request.r(i5081[0], i5081[1], 0, i5080, 'm_RootBone')
  var i5083 = i5081[2]
  var i5082 = []
  for(var i = 0; i < i5083.length; i += 2) {
  request.r(i5083[i + 0], i5083[i + 1], 2, i5082, '')
  }
  i5080.m_BoneTransforms = i5082
  i5080.m_AlwaysUpdate = !!i5081[3]
  i5080.m_AutoRebind = !!i5081[4]
  return i5080
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteMask"] = function (request, data, root) {
  var i5084 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteMask' )
  var i5085 = data
  i5084.frontSortingLayerID = i5085[0]
  i5084.frontSortingOrder = i5085[1]
  i5084.backSortingLayerID = i5085[2]
  i5084.backSortingOrder = i5085[3]
  i5084.alphaCutoff = i5085[4]
  request.r(i5085[5], i5085[6], 0, i5084, 'sprite')
  i5084.tileMode = i5085[7]
  i5084.isCustomRangeActive = !!i5085[8]
  i5084.spriteSortPoint = i5085[9]
  i5084.enabled = !!i5085[10]
  request.r(i5085[11], i5085[12], 0, i5084, 'sharedMaterial')
  var i5087 = i5085[13]
  var i5086 = []
  for(var i = 0; i < i5087.length; i += 2) {
  request.r(i5087[i + 0], i5087[i + 1], 2, i5086, '')
  }
  i5084.sharedMaterials = i5086
  i5084.receiveShadows = !!i5085[14]
  i5084.shadowCastingMode = i5085[15]
  i5084.sortingLayerID = i5085[16]
  i5084.sortingOrder = i5085[17]
  i5084.lightmapIndex = i5085[18]
  i5084.lightmapSceneIndex = i5085[19]
  i5084.lightmapScaleOffset = new pc.Vec4( i5085[20], i5085[21], i5085[22], i5085[23] )
  i5084.lightProbeUsage = i5085[24]
  i5084.reflectionProbeUsage = i5085[25]
  return i5084
}

Deserializers["BasicDrag"] = function (request, data, root) {
  var i5088 = root || request.c( 'BasicDrag' )
  var i5089 = data
  i5088.canDrag = !!i5089[0]
  i5088.dragByDelta = !!i5089[1]
  i5088.isDragging = !!i5089[2]
  i5088.moveWithPointer = !!i5089[3]
  i5088.canReturn = !!i5089[4]
  i5088.jumpOnReturn = !!i5089[5]
  i5088.returnTime = i5089[6]
  i5088.Tool_Offset = new pc.Vec3( i5089[7], i5089[8], i5089[9] )
  i5088.canScaleIncrease = !!i5089[10]
  i5088.Self_ScaleNew = new pc.Vec3( i5089[11], i5089[12], i5089[13] )
  i5088.canRotateOnPick = !!i5089[14]
  i5088.startRot = new pc.Vec3( i5089[15], i5089[16], i5089[17] )
  i5088.newRot = new pc.Vec3( i5089[18], i5089[19], i5089[20] )
  var i5091 = i5089[21]
  var i5090 = []
  for(var i = 0; i < i5091.length; i += 2) {
  request.r(i5091[i + 0], i5091[i + 1], 2, i5090, '')
  }
  i5088.childSprite = i5090
  request.r(i5089[22], i5089[23], 0, i5088, 'ToolSelectClip')
  request.r(i5089[24], i5089[25], 0, i5088, 'ToolLoopClip')
  request.r(i5089[26], i5089[27], 0, i5088, 'thisParticles')
  i5088.onDragparticle = !!i5089[28]
  request.r(i5089[29], i5089[30], 0, i5088, 'dragParticles')
  request.r(i5089[31], i5089[32], 0, i5088, 'anim')
  i5088.startPos = new pc.Vec3( i5089[33], i5089[34], i5089[35] )
  i5088.startScale = new pc.Vec3( i5089[36], i5089[37], i5089[38] )
  i5088.Vibration = !!i5089[39]
  i5088.isPlacedCannotMove = !!i5089[40]
  i5088.isObjectMovingWhileDragging = !!i5089[41]
  i5088.OnMouseDownEvent = request.d('System.Action', i5089[42], i5088.OnMouseDownEvent)
  i5088.OnMouseUpEvent = request.d('System.Action', i5089[43], i5088.OnMouseUpEvent)
  i5088.ProgStartEvent = request.d('System.Action', i5089[44], i5088.ProgStartEvent)
  i5088.ProgEndEvent = request.d('System.Action', i5089[45], i5088.ProgEndEvent)
  i5088.canCallMouseUpWhenGamePaused = !!i5089[46]
  i5088.ClampX_L = i5089[47]
  i5088.ClampX_H = i5089[48]
  i5088.ClampY_L = i5089[49]
  i5088.ClampY_H = i5089[50]
  i5088.startOrder = i5089[51]
  i5088.dontResetItIsInCollider = !!i5089[52]
  request.r(i5089[53], i5089[54], 0, i5088, 'thisCollider')
  request.r(i5089[55], i5089[56], 0, i5088, 'thisSR')
  i5088.OnMouseDownEventIndependentFromCanDrag = request.d('System.Action', i5089[57], i5088.OnMouseDownEventIndependentFromCanDrag)
  return i5088
}

Deserializers["System.Action"] = function (request, data, root) {
  var i5094 = root || request.c( 'System.Action' )
  var i5095 = data
  return i5094
}

Deserializers["BD_Clamp"] = function (request, data, root) {
  var i5096 = root || request.c( 'BD_Clamp' )
  var i5097 = data
  i5096.ClampX_L = i5097[0]
  i5096.ClampX_H = i5097[1]
  i5096.ClampY_L = i5097[2]
  i5096.ClampY_H = i5097[3]
  return i5096
}

Deserializers["BD_CameraFollow"] = function (request, data, root) {
  var i5098 = root || request.c( 'BD_CameraFollow' )
  var i5099 = data
  request.r(i5099[0], i5099[1], 0, i5098, 'Tool')
  request.r(i5099[2], i5099[3], 0, i5098, 'Pivot')
  i5098.FOV = i5099[4]
  i5098.Y_L = i5099[5]
  i5098.Y_H = i5099[6]
  i5098.X_L = i5099[7]
  i5098.X_R = i5099[8]
  i5098.startDelay = i5099[9]
  i5098.duration = i5099[10]
  return i5098
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D"] = function (request, data, root) {
  var i5100 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D' )
  var i5101 = data
  i5100.bodyType = i5101[0]
  request.r(i5101[1], i5101[2], 0, i5100, 'material')
  i5100.simulated = !!i5101[3]
  i5100.useAutoMass = !!i5101[4]
  i5100.mass = i5101[5]
  i5100.drag = i5101[6]
  i5100.angularDrag = i5101[7]
  i5100.gravityScale = i5101[8]
  i5100.collisionDetectionMode = i5101[9]
  i5100.sleepMode = i5101[10]
  i5100.constraints = i5101[11]
  return i5100
}

Deserializers["PlaceItem"] = function (request, data, root) {
  var i5102 = root || request.c( 'PlaceItem' )
  var i5103 = data
  request.r(i5103[0], i5103[1], 0, i5102, 'thisDrag')
  request.r(i5103[2], i5103[3], 0, i5102, 'Target')
  request.r(i5103[4], i5103[5], 0, i5102, 'Clip')
  i5102.jumpOnPlace = !!i5103[6]
  i5102.jumpHeight = i5103[7]
  i5102.jumpDuration = i5103[8]
  i5102.settleDuration = i5103[9]
  i5102.isPlaced = !!i5103[10]
  i5102.isInsideCollider = !!i5103[11]
  i5102.changeScaleOnPlace = !!i5103[12]
  request.r(i5103[13], i5103[14], 0, i5102, 'item')
  i5102.newScaleOnPlace = new pc.Vec3( i5103[15], i5103[16], i5103[17] )
  i5102.OnPlaced = request.d('UnityEngine.Events.UnityEvent', i5103[18], i5102.OnPlaced)
  return i5102
}

Deserializers["ActionOnTap"] = function (request, data, root) {
  var i5104 = root || request.c( 'ActionOnTap' )
  var i5105 = data
  i5104.OnTap = request.d('UnityEngine.Events.UnityEvent', i5105[0], i5104.OnTap)
  i5104.OnTapExtra = request.d('System.Action', i5105[1], i5104.OnTapExtra)
  return i5104
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CircleCollider2D"] = function (request, data, root) {
  var i5106 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CircleCollider2D' )
  var i5107 = data
  i5106.radius = i5107[0]
  i5106.enabled = !!i5107[1]
  i5106.isTrigger = !!i5107[2]
  i5106.usedByEffector = !!i5107[3]
  i5106.density = i5107[4]
  i5106.offset = new pc.Vec2( i5107[5], i5107[6] )
  request.r(i5107[7], i5107[8], 0, i5106, 'material')
  return i5106
}

Deserializers["PlayParticlesOnCollision"] = function (request, data, root) {
  var i5108 = root || request.c( 'PlayParticlesOnCollision' )
  var i5109 = data
  request.r(i5109[0], i5109[1], 0, i5108, 'Target')
  request.r(i5109[2], i5109[3], 0, i5108, 'ParticlePrefab')
  i5108.destroyIt = !!i5109[4]
  i5108.stayAtPlace = !!i5109[5]
  i5108.disableOnCollision = !!i5109[6]
  i5108.OnCollisionEvent = request.d('UnityEngine.Events.UnityEvent', i5109[7], i5108.OnCollisionEvent)
  return i5108
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.PolygonCollider2D"] = function (request, data, root) {
  var i5110 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.PolygonCollider2D' )
  var i5111 = data
  i5110.usedByComposite = !!i5111[0]
  i5110.autoTiling = !!i5111[1]
  var i5113 = i5111[2]
  var i5112 = []
  for(var i = 0; i < i5113.length; i += 1) {
  var i5115 = i5113[i + 0]
  var i5114 = []
  for(var i = 0; i < i5115.length; i += 2) {
    i5114.push( new pc.Vec2( i5115[i + 0], i5115[i + 1] ) );
  }
    i5112.push( i5114 );
  }
  i5110.points = i5112
  i5110.enabled = !!i5111[3]
  i5110.isTrigger = !!i5111[4]
  i5110.usedByEffector = !!i5111[5]
  i5110.density = i5111[6]
  i5110.offset = new pc.Vec2( i5111[7], i5111[8] )
  request.r(i5111[9], i5111[10], 0, i5110, 'material')
  return i5110
}

Deserializers["PlaySfxOnCollision"] = function (request, data, root) {
  var i5122 = root || request.c( 'PlaySfxOnCollision' )
  var i5123 = data
  request.r(i5123[0], i5123[1], 0, i5122, 'Tip')
  i5122.Mode = i5123[2]
  request.r(i5123[3], i5123[4], 0, i5122, 'DragInput')
  request.r(i5123[5], i5123[6], 0, i5122, 'Source')
  i5122.startVol = i5123[7]
  i5122.targetVol = i5123[8]
  i5122.duration = i5123[9]
  request.r(i5123[10], i5123[11], 0, i5122, 'Particles')
  i5122.isDone = !!i5123[12]
  i5122.isInArea = !!i5123[13]
  i5122.isPlaying = !!i5123[14]
  return i5122
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i5124 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i5125 = data
  request.r(i5125[0], i5125[1], 0, i5124, 'clip')
  request.r(i5125[2], i5125[3], 0, i5124, 'outputAudioMixerGroup')
  i5124.playOnAwake = !!i5125[4]
  i5124.loop = !!i5125[5]
  i5124.time = i5125[6]
  i5124.volume = i5125[7]
  i5124.pitch = i5125[8]
  i5124.enabled = !!i5125[9]
  return i5124
}

Deserializers["SewingCol"] = function (request, data, root) {
  var i5126 = root || request.c( 'SewingCol' )
  var i5127 = data
  request.r(i5127[0], i5127[1], 0, i5126, 'targetTip')
  var i5129 = i5127[2]
  var i5128 = []
  for(var i = 0; i < i5129.length; i += 2) {
  request.r(i5129[i + 0], i5129[i + 1], 2, i5128, '')
  }
  i5126.Anim_Items = i5128
  i5126.isDone = !!i5127[3]
  request.r(i5127[4], i5127[5], 0, i5126, 'sfx')
  return i5126
}

Deserializers["OutlinePulse"] = function (request, data, root) {
  var i5132 = root || request.c( 'OutlinePulse' )
  var i5133 = data
  i5132.smallThickness = i5133[0]
  i5132.largeThickness = i5133[1]
  i5132.transitionSpeed = i5133[2]
  i5132.animationSpeed = i5133[3]
  i5132.isThickOutline = !!i5133[4]
  i5132.animate = !!i5133[5]
  i5132.hideSpriteOnly = !!i5133[6]
  return i5132
}

Deserializers["BD_Action"] = function (request, data, root) {
  var i5134 = root || request.c( 'BD_Action' )
  var i5135 = data
  i5134.OnMouseDownEvent = request.d('UnityEngine.Events.UnityEvent', i5135[0], i5134.OnMouseDownEvent)
  i5134.OnMouseUpEvent = request.d('UnityEngine.Events.UnityEvent', i5135[1], i5134.OnMouseUpEvent)
  i5134.setToolLayer = !!i5135[2]
  request.r(i5135[3], i5135[4], 0, i5134, 'tool_SP')
  return i5134
}

Deserializers["Level1_SurfController"] = function (request, data, root) {
  var i5136 = root || request.c( 'Level1_SurfController' )
  var i5137 = data
  i5136.target_rotZ = i5137[0]
  i5136.rotationDuration = i5137[1]
  i5136.rotationEase = i5137[2]
  request.r(i5137[3], i5137[4], 0, i5136, 'maskItem')
  i5136.maskTarget_posY = i5137[5]
  i5136.maskMoveDuration = i5137[6]
  i5136.requiredHoldTime = i5137[7]
  i5136.minRotationForProgress = i5137[8]
  request.r(i5137[9], i5137[10], 0, i5136, 'tipCollider')
  request.r(i5137[11], i5137[12], 0, i5136, 'targetZoneCollider')
  request.r(i5137[13], i5137[14], 0, i5136, 'surf_Particles')
  request.r(i5137[15], i5137[16], 0, i5136, 'surf_SubEmitter')
  request.r(i5137[17], i5137[18], 0, i5136, 'Indication')
  i5136.OnComplete = request.d('UnityEngine.Events.UnityEvent', i5137[19], i5136.OnComplete)
  i5136.currentHoldProgress = i5137[20]
  return i5136
}

Deserializers["BD_Fold"] = function (request, data, root) {
  var i5138 = root || request.c( 'BD_Fold' )
  var i5139 = data
  i5138.canDrag = !!i5139[0]
  i5138.canFoldBottomLeft = !!i5139[1]
  i5138.canFoldBottomRight = !!i5139[2]
  i5138.canFoldTopLeft = !!i5139[3]
  i5138.canFoldTopRight = !!i5139[4]
  request.r(i5139[5], i5139[6], 0, i5138, 'Indication')
  request.r(i5139[7], i5139[8], 0, i5138, 'backSideSprite')
  i5138.maxSideOffset = i5139[9]
  i5138.foldBackDuration = i5139[10]
  i5138.instantFoldAmount = i5139[11]
  i5138.useSmoothRelease = !!i5139[12]
  i5138.completionLimit = i5139[13]
  i5138.afterCompletionTravelTo = i5139[14]
  i5138.OnComplete = request.d('UnityEngine.Events.UnityEvent', i5139[15], i5138.OnComplete)
  i5138.currentProgress = i5139[16]
  i5138.innerShadowStrength = i5139[17]
  request.r(i5139[18], i5139[19], 0, i5138, 'dragAudioSource')
  request.r(i5139[20], i5139[21], 0, i5138, 'dragStartClip')
  request.r(i5139[22], i5139[23], 0, i5138, 'completionClip')
  i5138.audioFadeSpeed = i5139[24]
  i5138.audioMoveThreshold = i5139[25]
  i5138.hapticInterval = i5139[26]
  return i5138
}

Deserializers["BD_Progress"] = function (request, data, root) {
  var i5140 = root || request.c( 'BD_Progress' )
  var i5141 = data
  var i5143 = i5141[0]
  var i5142 = []
  for(var i = 0; i < i5143.length; i += 1) {
    i5142.push( request.d('ScratchData', i5143[i + 0]) );
  }
  i5140.AllScratches = i5142
  i5140.OnScratchComplete = request.d('UnityEngine.Events.UnityEvent', i5141[1], i5140.OnScratchComplete)
  i5140.isProgDone = !!i5141[2]
  i5140.canCallComplete = !!i5141[3]
  i5140.CollectiveAppear = !!i5141[4]
  i5140.tipControl = !!i5141[5]
  i5140.progressControl = !!i5141[6]
  request.r(i5141[7], i5141[8], 0, i5140, 'thisDrag')
  i5140.CompleteEvent = request.d('System.Action', i5141[9], i5140.CompleteEvent)
  i5140.SubCompleteEvent = request.d('System.Action', i5141[10], i5140.SubCompleteEvent)
  return i5140
}

Deserializers["ScratchData"] = function (request, data, root) {
  var i5146 = root || request.c( 'ScratchData' )
  var i5147 = data
  request.r(i5147[0], i5147[1], 0, i5146, 'ScratchManager')
  i5146.scratchLimit = i5147[2]
  i5146.isComplete = !!i5147[3]
  return i5146
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshFilter"] = function (request, data, root) {
  var i5148 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshFilter' )
  var i5149 = data
  request.r(i5149[0], i5149[1], 0, i5148, 'sharedMesh')
  return i5148
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshRenderer"] = function (request, data, root) {
  var i5150 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshRenderer' )
  var i5151 = data
  request.r(i5151[0], i5151[1], 0, i5150, 'additionalVertexStreams')
  i5150.enabled = !!i5151[2]
  request.r(i5151[3], i5151[4], 0, i5150, 'sharedMaterial')
  var i5153 = i5151[5]
  var i5152 = []
  for(var i = 0; i < i5153.length; i += 2) {
  request.r(i5153[i + 0], i5153[i + 1], 2, i5152, '')
  }
  i5150.sharedMaterials = i5152
  i5150.receiveShadows = !!i5151[6]
  i5150.shadowCastingMode = i5151[7]
  i5150.sortingLayerID = i5151[8]
  i5150.sortingOrder = i5151[9]
  i5150.lightmapIndex = i5151[10]
  i5150.lightmapSceneIndex = i5151[11]
  i5150.lightmapScaleOffset = new pc.Vec4( i5151[12], i5151[13], i5151[14], i5151[15] )
  i5150.lightProbeUsage = i5151[16]
  i5150.reflectionProbeUsage = i5151[17]
  return i5150
}

Deserializers["StaticFixedPipe"] = function (request, data, root) {
  var i5154 = root || request.c( 'StaticFixedPipe' )
  var i5155 = data
  request.r(i5155[0], i5155[1], 0, i5154, 'meshRenderer')
  request.r(i5155[2], i5155[3], 0, i5154, 'toolTransform')
  request.r(i5155[4], i5155[5], 0, i5154, 'toolDirectionPoint')
  request.r(i5155[6], i5155[7], 0, i5154, 'fixedEndPoint')
  i5154.segmentCount = i5155[8]
  i5154.totalLength = i5155[9]
  i5154.constraintIterations = i5155[10]
  i5154.gravity = new pc.Vec3( i5155[11], i5155[12], i5155[13] )
  i5154.pipeWidth = i5155[14]
  return i5154
}

Deserializers["BD_SpriteChange"] = function (request, data, root) {
  var i5156 = root || request.c( 'BD_SpriteChange' )
  var i5157 = data
  request.r(i5157[0], i5157[1], 0, i5156, 'BD')
  request.r(i5157[2], i5157[3], 0, i5156, 'SR')
  request.r(i5157[4], i5157[5], 0, i5156, 'Default')
  request.r(i5157[6], i5157[7], 0, i5156, 'Picked')
  i5156.resetOnRelease = !!i5157[8]
  return i5156
}

Deserializers["MenuLevel"] = function (request, data, root) {
  var i5158 = root || request.c( 'MenuLevel' )
  var i5159 = data
  request.r(i5159[0], i5159[1], 0, i5158, 'menuLevelBtnUpdate')
  var i5161 = i5159[2]
  var i5160 = []
  for(var i = 0; i < i5161.length; i += 1) {
    i5160.push( request.d('MenuLevelData', i5161[i + 0]) );
  }
  i5158.AllSteps = i5160
  request.r(i5159[3], i5159[4], 0, i5158, 'buttonparent')
  var i5163 = i5159[5]
  var i5162 = []
  for(var i = 0; i < i5163.length; i += 2) {
  request.r(i5163[i + 0], i5163[i + 1], 2, i5162, '')
  }
  i5158.BtnsDotweenAnims = i5162
  var i5165 = i5159[6]
  var i5164 = []
  for(var i = 0; i < i5165.length; i += 2) {
  request.r(i5165[i + 0], i5165[i + 1], 2, i5164, '')
  }
  i5158.BtnsCols = i5164
  request.r(i5159[7], i5159[8], 0, i5158, 'mainGameView')
  request.r(i5159[9], i5159[10], 0, i5158, 'Storyboard')
  request.r(i5159[11], i5159[12], 0, i5158, 'BgMusic')
  request.r(i5159[13], i5159[14], 0, i5158, 'BgStoryMusic')
  request.r(i5159[15], i5159[16], 0, i5158, 'Hand_Tut1')
  request.r(i5159[17], i5159[18], 0, i5158, 'Button_Hand')
  var i5167 = i5159[19]
  var i5166 = []
  for(var i = 0; i < i5167.length; i += 2) {
  request.r(i5167[i + 0], i5167[i + 1], 2, i5166, '')
  }
  i5158.itemEnable_Onstart = i5166
  var i5169 = i5159[20]
  var i5168 = []
  for(var i = 0; i < i5169.length; i += 2) {
  request.r(i5169[i + 0], i5169[i + 1], 2, i5168, '')
  }
  i5158.itemDisable_Onstart = i5168
  var i5171 = i5159[21]
  var i5170 = []
  for(var i = 0; i < i5171.length; i += 2) {
  request.r(i5171[i + 0], i5171[i + 1], 2, i5170, '')
  }
  i5158.itemEnable_Oncomplete = i5170
  var i5173 = i5159[22]
  var i5172 = []
  for(var i = 0; i < i5173.length; i += 2) {
  request.r(i5173[i + 0], i5173[i + 1], 2, i5172, '')
  }
  i5158.itemDisable_Oncomplete = i5172
  i5158.levelKey = i5159[23]
  i5158.revealDirtyHoldTime = i5159[24]
  return i5158
}

Deserializers["MenuLevelData"] = function (request, data, root) {
  var i5176 = root || request.c( 'MenuLevelData' )
  var i5177 = data
  i5176.Name = i5177[0]
  request.r(i5177[1], i5177[2], 0, i5176, 'UiBtn')
  request.r(i5177[3], i5177[4], 0, i5176, 'TickBtn')
  request.r(i5177[5], i5177[6], 0, i5176, 'ExclamationIcon')
  var i5179 = i5177[7]
  var i5178 = []
  for(var i = 0; i < i5179.length; i += 2) {
  request.r(i5179[i + 0], i5179[i + 1], 2, i5178, '')
  }
  i5176.Item_Dirty = i5178
  var i5181 = i5177[8]
  var i5180 = []
  for(var i = 0; i < i5181.length; i += 2) {
  request.r(i5181[i + 0], i5181[i + 1], 2, i5180, '')
  }
  i5176.Item_Clean = i5180
  request.r(i5177[9], i5177[10], 0, i5176, 'CompleteParticle')
  return i5176
}

Deserializers["IntroLevelAnim"] = function (request, data, root) {
  var i5186 = root || request.c( 'IntroLevelAnim' )
  var i5187 = data
  request.r(i5187[0], i5187[1], 0, i5186, 'menuLevel')
  i5186.lvlkey = i5187[2]
  request.r(i5187[3], i5187[4], 0, i5186, 'DressChangeObj')
  request.r(i5187[5], i5187[6], 0, i5186, 'DressChangeClip')
  return i5186
}

Deserializers["Level_PoseController"] = function (request, data, root) {
  var i5188 = root || request.c( 'Level_PoseController' )
  var i5189 = data
  var i5191 = i5189[0]
  var i5190 = []
  for(var i = 0; i < i5191.length; i += 2) {
  request.r(i5191[i + 0], i5191[i + 1], 2, i5190, '')
  }
  i5188.itemToShow = i5190
  var i5193 = i5189[1]
  var i5192 = []
  for(var i = 0; i < i5193.length; i += 2) {
  request.r(i5193[i + 0], i5193[i + 1], 2, i5192, '')
  }
  i5188.itemToHide = i5192
  i5188.stepTarget = i5189[2]
  return i5188
}

Deserializers["BD_AnimationHelper"] = function (request, data, root) {
  var i5194 = root || request.c( 'BD_AnimationHelper' )
  var i5195 = data
  i5194.OnAnimationComplete = request.d('UnityEngine.Events.UnityEvent', i5195[0], i5194.OnAnimationComplete)
  request.r(i5195[1], i5195[2], 0, i5194, 'sfxClip')
  i5194.progBar = !!i5195[3]
  return i5194
}

Deserializers["SpriteButton"] = function (request, data, root) {
  var i5196 = root || request.c( 'SpriteButton' )
  var i5197 = data
  i5196.isLocked = !!i5197[0]
  i5196.lockMsg = i5197[1]
  i5196.onClick = request.d('UnityEngine.Events.UnityEvent', i5197[2], i5196.onClick)
  i5196.onLockedClick = request.d('UnityEngine.Events.UnityEvent', i5197[3], i5196.onLockedClick)
  i5196.isLevelBtnSfx = !!i5197[4]
  request.r(i5197[5], i5197[6], 0, i5196, 'pivot')
  i5196.reductionChange = i5197[7]
  i5196.animationDuration = i5197[8]
  return i5196
}

Deserializers["DressChangeIntro"] = function (request, data, root) {
  var i5198 = root || request.c( 'DressChangeIntro' )
  var i5199 = data
  request.r(i5199[0], i5199[1], 0, i5198, 'menuLevel')
  request.r(i5199[2], i5199[3], 0, i5198, 'curtainMoveable')
  request.r(i5199[4], i5199[5], 0, i5198, 'curtainStatic')
  i5198.staticCurtainOnly = !!i5199[6]
  i5198.curtainFadeInDuration = i5199[7]
  i5198.curtainFadeInDelay = i5199[8]
  i5198.slideInOffsetX = i5199[9]
  i5198.slideInDuration = i5199[10]
  i5198.slideInEase = i5199[11]
  i5198.startDelay = i5199[12]
  request.r(i5199[13], i5199[14], 0, i5198, 'handSmall')
  request.r(i5199[15], i5199[16], 0, i5198, 'bone_3')
  i5198.handSmallBackwardAmount = i5199[17]
  i5198.bone3BackwardAmount = i5199[18]
  i5198.handPeekDuration = i5199[19]
  i5198.handPeekEase = i5199[20]
  request.r(i5199[21], i5199[22], 0, i5198, 'armCloth')
  i5198.armClothDelay = i5199[23]
  i5198.armClothDuration = i5199[24]
  i5198.armClothEase = i5199[25]
  request.r(i5199[26], i5199[27], 0, i5198, 'basket')
  i5198.basketOffsetX = i5199[28]
  i5198.basketSlideDelay = i5199[29]
  i5198.basketSlideDuration = i5199[30]
  i5198.basketSlideEase = i5199[31]
  request.r(i5199[32], i5199[33], 0, i5198, 'cloth')
  request.r(i5199[34], i5199[35], 0, i5198, 'clothRenderer')
  request.r(i5199[36], i5199[37], 0, i5198, 'clothPickedSprite')
  request.r(i5199[38], i5199[39], 0, i5198, 'clothBasketSprite')
  request.r(i5199[40], i5199[41], 0, i5198, 'handIndication')
  request.r(i5199[42], i5199[43], 0, i5198, 'basketDropTarget')
  i5198.dropRadius = i5199[44]
  i5198.dropJumpHeight = i5199[45]
  i5198.dropJumpDuration = i5199[46]
  i5198.dropSinkDuration = i5199[47]
  i5198.clothPickedSortingOrder = i5199[48]
  request.r(i5199[49], i5199[50], 0, i5198, 'ToolPlaceClip')
  i5198.OnIntroComplete = request.d('UnityEngine.Events.UnityEvent', i5199[51], i5198.OnIntroComplete)
  return i5198
}

Deserializers["MenuDraggable"] = function (request, data, root) {
  var i5200 = root || request.c( 'MenuDraggable' )
  var i5201 = data
  i5200.canDrag = !!i5201[0]
  i5200.returnToStartPosition = !!i5201[1]
  i5200.returnDuration = i5201[2]
  i5200.returnEase = i5201[3]
  i5200.ClampX_L = i5201[4]
  i5200.ClampX_H = i5201[5]
  i5200.ClampY_L = i5201[6]
  i5200.ClampY_H = i5201[7]
  request.r(i5201[8], i5201[9], 0, i5200, 'ToolTapClip')
  i5200.isPlaced = !!i5201[10]
  i5200.OnPicked = request.d('System.Action', i5201[11], i5200.OnPicked)
  i5200.OnReleased = request.d('System.Action', i5201[12], i5200.OnReleased)
  return i5200
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Cubemap"] = function (request, data, root) {
  var i5202 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Cubemap' )
  var i5203 = data
  i5202.name = i5203[0]
  i5202.atlasId = i5203[1]
  i5202.mipmapCount = i5203[2]
  i5202.hdr = !!i5203[3]
  i5202.size = i5203[4]
  i5202.anisoLevel = i5203[5]
  i5202.filterMode = i5203[6]
  var i5205 = i5203[7]
  var i5204 = []
  for(var i = 0; i < i5205.length; i += 4) {
    i5204.push( UnityEngine.Rect.MinMaxRect(i5205[i + 0], i5205[i + 1], i5205[i + 2], i5205[i + 3]) );
  }
  i5202.rects = i5204
  i5202.wrapU = i5203[8]
  i5202.wrapV = i5203[9]
  return i5202
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i5208 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i5209 = data
  i5208.name = i5209[0]
  i5208.index = i5209[1]
  i5208.startup = !!i5209[2]
  return i5208
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i5210 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i5211 = data
  i5210.aspect = i5211[0]
  i5210.orthographic = !!i5211[1]
  i5210.orthographicSize = i5211[2]
  i5210.backgroundColor = new pc.Color(i5211[3], i5211[4], i5211[5], i5211[6])
  i5210.nearClipPlane = i5211[7]
  i5210.farClipPlane = i5211[8]
  i5210.fieldOfView = i5211[9]
  i5210.depth = i5211[10]
  i5210.clearFlags = i5211[11]
  i5210.cullingMask = i5211[12]
  i5210.rect = i5211[13]
  request.r(i5211[14], i5211[15], 0, i5210, 'targetTexture')
  i5210.usePhysicalProperties = !!i5211[16]
  i5210.focalLength = i5211[17]
  i5210.sensorSize = new pc.Vec2( i5211[18], i5211[19] )
  i5210.lensShift = new pc.Vec2( i5211[20], i5211[21] )
  i5210.gateFit = i5211[22]
  i5210.commandBufferCount = i5211[23]
  i5210.cameraType = i5211[24]
  i5210.enabled = !!i5211[25]
  return i5210
}

Deserializers["CameraController"] = function (request, data, root) {
  var i5212 = root || request.c( 'CameraController' )
  var i5213 = data
  request.r(i5213[0], i5213[1], 0, i5212, 'cam')
  i5212.defaultPosition = new pc.Vec3( i5213[2], i5213[3], i5213[4] )
  i5212.defaultSize = i5213[5]
  i5212.defaultFOV = i5213[6]
  i5212.defaultDuration = i5213[7]
  i5212.defaultEase = i5213[8]
  return i5212
}

Deserializers["MusicSource"] = function (request, data, root) {
  var i5214 = root || request.c( 'MusicSource' )
  var i5215 = data
  request.r(i5215[0], i5215[1], 0, i5214, 'source')
  return i5214
}

Deserializers["UI_Manager"] = function (request, data, root) {
  var i5216 = root || request.c( 'UI_Manager' )
  var i5217 = data
  i5216.levelCompleted = !!i5217[0]
  i5216.isPauseActive = !!i5217[1]
  i5216.loadIndex = i5217[2]
  request.r(i5217[3], i5217[4], 0, i5216, 'removeAdsButton')
  request.r(i5217[5], i5217[6], 0, i5216, 'pauseButton')
  request.r(i5217[7], i5217[8], 0, i5216, 'Fade_Img')
  request.r(i5217[9], i5217[10], 0, i5216, 'TopBarAnim')
  request.r(i5217[11], i5217[12], 0, i5216, 'MainPanel')
  request.r(i5217[13], i5217[14], 0, i5216, 'PausePanel')
  request.r(i5217[15], i5217[16], 0, i5216, 'PausePopUp')
  request.r(i5217[17], i5217[18], 0, i5216, 'PauseCanvasGroup')
  request.r(i5217[19], i5217[20], 0, i5216, 'RateUsPanel')
  request.r(i5217[21], i5217[22], 0, i5216, 'RateUsPopUp')
  request.r(i5217[23], i5217[24], 0, i5216, 'RemoveAdsPanel')
  request.r(i5217[25], i5217[26], 0, i5216, 'RemoveAdsPopUp')
  request.r(i5217[27], i5217[28], 0, i5216, 'RemoveAdsCanvasGroup')
  var i5219 = i5217[29]
  var i5218 = []
  for(var i = 0; i < i5219.length; i += 2) {
  request.r(i5219[i + 0], i5219[i + 1], 2, i5218, '')
  }
  i5216.RemoveAdsAnims = i5218
  var i5221 = i5217[30]
  var i5220 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.GameObject')))
  for(var i = 0; i < i5221.length; i += 2) {
  request.r(i5221[i + 0], i5221[i + 1], 1, i5220, '')
  }
  i5216.thingsToDisableWhenCompletePanel = i5220
  request.r(i5217[31], i5217[32], 0, i5216, 'CompletePanel')
  request.r(i5217[33], i5217[34], 0, i5216, 'LevelIcon')
  request.r(i5217[35], i5217[36], 0, i5216, 'CompleteParticles')
  request.r(i5217[37], i5217[38], 0, i5216, 'progressBar')
  request.r(i5217[39], i5217[40], 0, i5216, 'progressText')
  request.r(i5217[41], i5217[42], 0, i5216, 'toolIcon1')
  request.r(i5217[43], i5217[44], 0, i5216, 'toolIcon2')
  request.r(i5217[45], i5217[46], 0, i5216, 'toolIcon3')
  request.r(i5217[47], i5217[48], 0, i5216, 'target1')
  request.r(i5217[49], i5217[50], 0, i5216, 'target2')
  i5216.toolMoveDuration = i5217[51]
  i5216.currentIndex = i5217[52]
  var i5223 = i5217[53]
  var i5222 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Sprite')))
  for(var i = 0; i < i5223.length; i += 2) {
  request.r(i5223[i + 0], i5223[i + 1], 1, i5222, '')
  }
  i5216.allTools = i5222
  request.r(i5217[54], i5217[55], 0, i5216, 'clockProgress')
  request.r(i5217[56], i5217[57], 0, i5216, 'clockProgressFill')
  request.r(i5217[58], i5217[59], 0, i5216, 'clockAudio')
  i5216.moveDistance = i5217[60]
  i5216.animationDuration = i5217[61]
  i5216.greyBgChildName = i5217[62]
  i5216.pushOffset = i5217[63]
  return i5216
}

Deserializers["GameManagerPlayable"] = function (request, data, root) {
  var i5226 = root || request.c( 'GameManagerPlayable' )
  var i5227 = data
  request.r(i5227[0], i5227[1], 0, i5226, 'endParticles')
  request.r(i5227[2], i5227[3], 0, i5226, 'stepCompleteParticles')
  request.r(i5227[4], i5227[5], 0, i5226, 'DefaultMat')
  request.r(i5227[6], i5227[7], 0, i5226, 'BG_Music')
  request.r(i5227[8], i5227[9], 0, i5226, 'restoreEffectShader')
  request.r(i5227[10], i5227[11], 0, i5226, 'stickerEffectShader')
  i5226.isComplete = !!i5227[12]
  i5226.isPaused = !!i5227[13]
  request.r(i5227[14], i5227[15], 0, i5226, 'currentLevel')
  i5226.startLevelOnPlay = !!i5227[16]
  i5226.currentLevelNo = i5227[17]
  return i5226
}

Deserializers["AudioController"] = function (request, data, root) {
  var i5228 = root || request.c( 'AudioController' )
  var i5229 = data
  request.r(i5229[0], i5229[1], 0, i5228, 'MainMixer')
  request.r(i5229[2], i5229[3], 0, i5228, 'UiClick')
  request.r(i5229[4], i5229[5], 0, i5228, 'UiClickSource')
  var i5231 = i5229[6]
  var i5230 = []
  for(var i = 0; i < i5231.length; i += 2) {
  request.r(i5231[i + 0], i5231[i + 1], 2, i5230, '')
  }
  i5228.SfxSources = i5230
  var i5233 = i5229[7]
  var i5232 = []
  for(var i = 0; i < i5233.length; i += 2) {
  request.r(i5233[i + 0], i5233[i + 1], 2, i5232, '')
  }
  i5228.AllClips = i5232
  return i5228
}

Deserializers["PlayableHudRuntime"] = function (request, data, root) {
  var i5236 = root || request.c( 'PlayableHudRuntime' )
  var i5237 = data
  return i5236
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i5238 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i5239 = data
  request.r(i5239[0], i5239[1], 0, i5238, 'm_FirstSelected')
  i5238.m_sendNavigationEvents = !!i5239[2]
  i5238.m_DragThreshold = i5239[3]
  return i5238
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i5240 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i5241 = data
  i5240.m_HorizontalAxis = i5241[0]
  i5240.m_VerticalAxis = i5241[1]
  i5240.m_SubmitButton = i5241[2]
  i5240.m_CancelButton = i5241[3]
  i5240.m_InputActionsPerSecond = i5241[4]
  i5240.m_RepeatDelay = i5241[5]
  i5240.m_ForceModuleActive = !!i5241[6]
  i5240.m_SendPointerHoverToParent = !!i5241[7]
  return i5240
}

Deserializers["PlayableRouter"] = function (request, data, root) {
  var i5242 = root || request.c( 'PlayableRouter' )
  var i5243 = data
  var i5245 = i5243[0]
  var i5244 = []
  for(var i = 0; i < i5245.length; i += 2) {
  request.r(i5245[i + 0], i5245[i + 1], 2, i5244, '')
  }
  i5242.menuObjects = i5244
  var i5247 = i5243[1]
  var i5246 = []
  for(var i = 0; i < i5247.length; i += 2) {
  request.r(i5247[i + 0], i5247[i + 1], 2, i5246, '')
  }
  i5242.gameplayObjects = i5246
  var i5249 = i5243[2]
  var i5248 = []
  for(var i = 0; i < i5249.length; i += 1) {
    i5248.push( request.d('PlayableRouter+SubLevelSlot', i5249[i + 0]) );
  }
  i5242.subLevels = i5248
  i5242.fadeDuration = i5243[3]
  i5242.onIntroStart = request.d('UnityEngine.Events.UnityEvent', i5243[4], i5242.onIntroStart)
  var i5251 = i5243[5]
  var i5250 = []
  for(var i = 0; i < i5251.length; i += 2) {
  request.r(i5251[i + 0], i5251[i + 1], 2, i5250, '')
  }
  i5242.hideDuringIntro = i5250
  i5242.lockedMessage = i5243[6]
  i5242.lockedTapsToCTA = i5243[7]
  return i5242
}

Deserializers["PlayableRouter+SubLevelSlot"] = function (request, data, root) {
  var i5254 = root || request.c( 'PlayableRouter+SubLevelSlot' )
  var i5255 = data
  request.r(i5255[0], i5255[1], 0, i5254, 'button')
  request.r(i5255[2], i5255[3], 0, i5254, 'level')
  request.r(i5255[4], i5255[5], 0, i5254, 'intro')
  return i5254
}

Deserializers["ToastManager"] = function (request, data, root) {
  var i5256 = root || request.c( 'ToastManager' )
  var i5257 = data
  request.r(i5257[0], i5257[1], 0, i5256, 'toastPanel')
  request.r(i5257[2], i5257[3], 0, i5256, 'toastPopup')
  request.r(i5257[4], i5257[5], 0, i5256, 'canvasGroup')
  request.r(i5257[6], i5257[7], 0, i5256, 'toastText')
  i5256.startY = i5257[8]
  i5256.visibleY = i5257[9]
  i5256.endY = i5257[10]
  i5256.animationTime = i5257[11]
  i5256.animationTimeUp = i5257[12]
  return i5256
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasGroup"] = function (request, data, root) {
  var i5258 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasGroup' )
  var i5259 = data
  i5258.m_Alpha = i5259[0]
  i5258.m_Interactable = !!i5259[1]
  i5258.m_BlocksRaycasts = !!i5259[2]
  i5258.m_IgnoreParentGroups = !!i5259[3]
  i5258.enabled = !!i5259[4]
  return i5258
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i5260 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i5261 = data
  i5260.ambientIntensity = i5261[0]
  i5260.reflectionIntensity = i5261[1]
  i5260.ambientMode = i5261[2]
  i5260.ambientLight = new pc.Color(i5261[3], i5261[4], i5261[5], i5261[6])
  i5260.ambientSkyColor = new pc.Color(i5261[7], i5261[8], i5261[9], i5261[10])
  i5260.ambientGroundColor = new pc.Color(i5261[11], i5261[12], i5261[13], i5261[14])
  i5260.ambientEquatorColor = new pc.Color(i5261[15], i5261[16], i5261[17], i5261[18])
  i5260.fogColor = new pc.Color(i5261[19], i5261[20], i5261[21], i5261[22])
  i5260.fogEndDistance = i5261[23]
  i5260.fogStartDistance = i5261[24]
  i5260.fogDensity = i5261[25]
  i5260.fog = !!i5261[26]
  request.r(i5261[27], i5261[28], 0, i5260, 'skybox')
  i5260.fogMode = i5261[29]
  var i5263 = i5261[30]
  var i5262 = []
  for(var i = 0; i < i5263.length; i += 1) {
    i5262.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i5263[i + 0]) );
  }
  i5260.lightmaps = i5262
  i5260.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i5261[31], i5260.lightProbes)
  i5260.lightmapsMode = i5261[32]
  i5260.mixedBakeMode = i5261[33]
  i5260.environmentLightingMode = i5261[34]
  i5260.ambientProbe = new pc.SphericalHarmonicsL2(i5261[35])
  request.r(i5261[36], i5261[37], 0, i5260, 'customReflection')
  request.r(i5261[38], i5261[39], 0, i5260, 'defaultReflection')
  i5260.defaultReflectionMode = i5261[40]
  i5260.defaultReflectionResolution = i5261[41]
  i5260.sunLightObjectId = i5261[42]
  i5260.pixelLightCount = i5261[43]
  i5260.defaultReflectionHDR = !!i5261[44]
  i5260.hasLightDataAsset = !!i5261[45]
  i5260.hasManualGenerate = !!i5261[46]
  return i5260
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i5266 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i5267 = data
  request.r(i5267[0], i5267[1], 0, i5266, 'lightmapColor')
  request.r(i5267[2], i5267[3], 0, i5266, 'lightmapDirection')
  request.r(i5267[4], i5267[5], 0, i5266, 'shadowMask')
  return i5266
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i5268 = root || new UnityEngine.LightProbes()
  var i5269 = data
  return i5268
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i5274 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i5275 = data
  var i5277 = i5275[0]
  var i5276 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i5277.length; i += 1) {
    i5276.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i5277[i + 0]));
  }
  i5274.ShaderCompilationErrors = i5276
  i5274.name = i5275[1]
  i5274.guid = i5275[2]
  var i5279 = i5275[3]
  var i5278 = []
  for(var i = 0; i < i5279.length; i += 1) {
    i5278.push( i5279[i + 0] );
  }
  i5274.shaderDefinedKeywords = i5278
  var i5281 = i5275[4]
  var i5280 = []
  for(var i = 0; i < i5281.length; i += 1) {
    i5280.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i5281[i + 0]) );
  }
  i5274.passes = i5280
  var i5283 = i5275[5]
  var i5282 = []
  for(var i = 0; i < i5283.length; i += 1) {
    i5282.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i5283[i + 0]) );
  }
  i5274.usePasses = i5282
  var i5285 = i5275[6]
  var i5284 = []
  for(var i = 0; i < i5285.length; i += 1) {
    i5284.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i5285[i + 0]) );
  }
  i5274.defaultParameterValues = i5284
  request.r(i5275[7], i5275[8], 0, i5274, 'unityFallbackShader')
  i5274.readDepth = !!i5275[9]
  i5274.hasDepthOnlyPass = !!i5275[10]
  i5274.isCreatedByShaderGraph = !!i5275[11]
  i5274.disableBatching = !!i5275[12]
  i5274.compiled = !!i5275[13]
  return i5274
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i5288 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i5289 = data
  i5288.shaderName = i5289[0]
  i5288.errorMessage = i5289[1]
  return i5288
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i5294 = root || new pc.UnityShaderPass()
  var i5295 = data
  i5294.id = i5295[0]
  i5294.subShaderIndex = i5295[1]
  i5294.name = i5295[2]
  i5294.passType = i5295[3]
  i5294.grabPassTextureName = i5295[4]
  i5294.usePass = !!i5295[5]
  i5294.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i5295[6], i5294.zTest)
  i5294.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i5295[7], i5294.zWrite)
  i5294.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i5295[8], i5294.culling)
  i5294.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i5295[9], i5294.blending)
  i5294.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i5295[10], i5294.alphaBlending)
  i5294.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i5295[11], i5294.colorWriteMask)
  i5294.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i5295[12], i5294.offsetUnits)
  i5294.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i5295[13], i5294.offsetFactor)
  i5294.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i5295[14], i5294.stencilRef)
  i5294.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i5295[15], i5294.stencilReadMask)
  i5294.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i5295[16], i5294.stencilWriteMask)
  i5294.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i5295[17], i5294.stencilOp)
  i5294.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i5295[18], i5294.stencilOpFront)
  i5294.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i5295[19], i5294.stencilOpBack)
  var i5297 = i5295[20]
  var i5296 = []
  for(var i = 0; i < i5297.length; i += 1) {
    i5296.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i5297[i + 0]) );
  }
  i5294.tags = i5296
  var i5299 = i5295[21]
  var i5298 = []
  for(var i = 0; i < i5299.length; i += 1) {
    i5298.push( i5299[i + 0] );
  }
  i5294.passDefinedKeywords = i5298
  var i5301 = i5295[22]
  var i5300 = []
  for(var i = 0; i < i5301.length; i += 1) {
    i5300.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i5301[i + 0]) );
  }
  i5294.passDefinedKeywordGroups = i5300
  var i5303 = i5295[23]
  var i5302 = []
  for(var i = 0; i < i5303.length; i += 1) {
    i5302.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i5303[i + 0]) );
  }
  i5294.variants = i5302
  var i5305 = i5295[24]
  var i5304 = []
  for(var i = 0; i < i5305.length; i += 1) {
    i5304.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i5305[i + 0]) );
  }
  i5294.excludedVariants = i5304
  i5294.hasDepthReader = !!i5295[25]
  return i5294
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i5306 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i5307 = data
  i5306.val = i5307[0]
  i5306.name = i5307[1]
  return i5306
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i5308 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i5309 = data
  i5308.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i5309[0], i5308.src)
  i5308.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i5309[1], i5308.dst)
  i5308.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i5309[2], i5308.op)
  return i5308
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i5310 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i5311 = data
  i5310.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i5311[0], i5310.pass)
  i5310.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i5311[1], i5310.fail)
  i5310.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i5311[2], i5310.zFail)
  i5310.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i5311[3], i5310.comp)
  return i5310
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i5314 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i5315 = data
  i5314.name = i5315[0]
  i5314.value = i5315[1]
  return i5314
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i5318 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i5319 = data
  var i5321 = i5319[0]
  var i5320 = []
  for(var i = 0; i < i5321.length; i += 1) {
    i5320.push( i5321[i + 0] );
  }
  i5318.keywords = i5320
  i5318.hasDiscard = !!i5319[1]
  return i5318
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i5324 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i5325 = data
  i5324.passId = i5325[0]
  i5324.subShaderIndex = i5325[1]
  var i5327 = i5325[2]
  var i5326 = []
  for(var i = 0; i < i5327.length; i += 1) {
    i5326.push( i5327[i + 0] );
  }
  i5324.keywords = i5326
  i5324.vertexProgram = i5325[3]
  i5324.fragmentProgram = i5325[4]
  i5324.exportedForWebGl2 = !!i5325[5]
  i5324.readDepth = !!i5325[6]
  return i5324
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i5330 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i5331 = data
  request.r(i5331[0], i5331[1], 0, i5330, 'shader')
  i5330.pass = i5331[2]
  return i5330
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i5334 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i5335 = data
  i5334.name = i5335[0]
  i5334.type = i5335[1]
  i5334.value = new pc.Vec4( i5335[2], i5335[3], i5335[4], i5335[5] )
  i5334.textureValue = i5335[6]
  i5334.shaderPropertyFlag = i5335[7]
  return i5334
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i5336 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i5337 = data
  i5336.name = i5337[0]
  request.r(i5337[1], i5337[2], 0, i5336, 'texture')
  i5336.aabb = i5337[3]
  i5336.vertices = i5337[4]
  i5336.triangles = i5337[5]
  i5336.textureRect = UnityEngine.Rect.MinMaxRect(i5337[6], i5337[7], i5337[8], i5337[9])
  i5336.packedRect = UnityEngine.Rect.MinMaxRect(i5337[10], i5337[11], i5337[12], i5337[13])
  i5336.border = new pc.Vec4( i5337[14], i5337[15], i5337[16], i5337[17] )
  i5336.transparency = i5337[18]
  i5336.bounds = i5337[19]
  i5336.pixelsPerUnit = i5337[20]
  i5336.textureWidth = i5337[21]
  i5336.textureHeight = i5337[22]
  i5336.nativeSize = new pc.Vec2( i5337[23], i5337[24] )
  i5336.pivot = new pc.Vec2( i5337[25], i5337[26] )
  i5336.textureRectOffset = new pc.Vec2( i5337[27], i5337[28] )
  return i5336
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i5338 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i5339 = data
  i5338.name = i5339[0]
  return i5338
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip"] = function (request, data, root) {
  var i5340 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip' )
  var i5341 = data
  i5340.name = i5341[0]
  i5340.wrapMode = i5341[1]
  i5340.isLooping = !!i5341[2]
  i5340.length = i5341[3]
  var i5343 = i5341[4]
  var i5342 = []
  for(var i = 0; i < i5343.length; i += 1) {
    i5342.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve', i5343[i + 0]) );
  }
  i5340.curves = i5342
  var i5345 = i5341[5]
  var i5344 = []
  for(var i = 0; i < i5345.length; i += 1) {
    i5344.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent', i5345[i + 0]) );
  }
  i5340.events = i5344
  i5340.halfPrecision = !!i5341[6]
  i5340._frameRate = i5341[7]
  i5340.localBounds = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds', i5341[8], i5340.localBounds)
  i5340.hasMuscleCurves = !!i5341[9]
  var i5347 = i5341[10]
  var i5346 = []
  for(var i = 0; i < i5347.length; i += 1) {
    i5346.push( i5347[i + 0] );
  }
  i5340.clipMuscleConstant = i5346
  i5340.clipBindingConstant = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant', i5341[11], i5340.clipBindingConstant)
  return i5340
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve"] = function (request, data, root) {
  var i5350 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve' )
  var i5351 = data
  i5350.path = i5351[0]
  i5350.hash = i5351[1]
  i5350.componentType = i5351[2]
  i5350.property = i5351[3]
  i5350.keys = i5351[4]
  var i5353 = i5351[5]
  var i5352 = []
  for(var i = 0; i < i5353.length; i += 1) {
    i5352.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey', i5353[i + 0]) );
  }
  i5350.objectReferenceKeys = i5352
  return i5350
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey"] = function (request, data, root) {
  var i5356 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey' )
  var i5357 = data
  i5356.time = i5357[0]
  request.r(i5357[1], i5357[2], 0, i5356, 'value')
  return i5356
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent"] = function (request, data, root) {
  var i5360 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent' )
  var i5361 = data
  i5360.functionName = i5361[0]
  i5360.floatParameter = i5361[1]
  i5360.intParameter = i5361[2]
  i5360.stringParameter = i5361[3]
  request.r(i5361[4], i5361[5], 0, i5360, 'objectReferenceParameter')
  i5360.time = i5361[6]
  return i5360
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds"] = function (request, data, root) {
  var i5362 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds' )
  var i5363 = data
  i5362.center = new pc.Vec3( i5363[0], i5363[1], i5363[2] )
  i5362.extends = new pc.Vec3( i5363[3], i5363[4], i5363[5] )
  return i5362
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant"] = function (request, data, root) {
  var i5366 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant' )
  var i5367 = data
  var i5369 = i5367[0]
  var i5368 = []
  for(var i = 0; i < i5369.length; i += 1) {
    i5368.push( i5369[i + 0] );
  }
  i5366.genericBindings = i5368
  var i5371 = i5367[1]
  var i5370 = []
  for(var i = 0; i < i5371.length; i += 1) {
    i5370.push( i5371[i + 0] );
  }
  i5366.pptrCurveMapping = i5370
  return i5366
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i5372 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i5373 = data
  i5372.name = i5373[0]
  i5372.ascent = i5373[1]
  i5372.originalLineHeight = i5373[2]
  i5372.fontSize = i5373[3]
  var i5375 = i5373[4]
  var i5374 = []
  for(var i = 0; i < i5375.length; i += 1) {
    i5374.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i5375[i + 0]) );
  }
  i5372.characterInfo = i5374
  request.r(i5373[5], i5373[6], 0, i5372, 'texture')
  i5372.originalFontSize = i5373[7]
  return i5372
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i5378 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i5379 = data
  i5378.index = i5379[0]
  i5378.advance = i5379[1]
  i5378.bearing = i5379[2]
  i5378.glyphWidth = i5379[3]
  i5378.glyphHeight = i5379[4]
  i5378.minX = i5379[5]
  i5378.maxX = i5379[6]
  i5378.minY = i5379[7]
  i5378.maxY = i5379[8]
  i5378.uvBottomLeftX = i5379[9]
  i5378.uvBottomLeftY = i5379[10]
  i5378.uvBottomRightX = i5379[11]
  i5378.uvBottomRightY = i5379[12]
  i5378.uvTopLeftX = i5379[13]
  i5378.uvTopLeftY = i5379[14]
  i5378.uvTopRightX = i5379[15]
  i5378.uvTopRightY = i5379[16]
  return i5378
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController"] = function (request, data, root) {
  var i5380 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController' )
  var i5381 = data
  i5380.name = i5381[0]
  var i5383 = i5381[1]
  var i5382 = []
  for(var i = 0; i < i5383.length; i += 1) {
    i5382.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer', i5383[i + 0]) );
  }
  i5380.layers = i5382
  var i5385 = i5381[2]
  var i5384 = []
  for(var i = 0; i < i5385.length; i += 1) {
    i5384.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter', i5385[i + 0]) );
  }
  i5380.parameters = i5384
  i5380.animationClips = i5381[3]
  i5380.avatarUnsupported = i5381[4]
  return i5380
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer"] = function (request, data, root) {
  var i5388 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer' )
  var i5389 = data
  i5388.name = i5389[0]
  i5388.defaultWeight = i5389[1]
  i5388.blendingMode = i5389[2]
  i5388.avatarMask = i5389[3]
  i5388.syncedLayerIndex = i5389[4]
  i5388.syncedLayerAffectsTiming = !!i5389[5]
  i5388.syncedLayers = i5389[6]
  i5388.stateMachine = request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i5389[7], i5388.stateMachine)
  return i5388
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine"] = function (request, data, root) {
  var i5390 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine' )
  var i5391 = data
  i5390.id = i5391[0]
  i5390.name = i5391[1]
  i5390.path = i5391[2]
  var i5393 = i5391[3]
  var i5392 = []
  for(var i = 0; i < i5393.length; i += 1) {
    i5392.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState', i5393[i + 0]) );
  }
  i5390.states = i5392
  var i5395 = i5391[4]
  var i5394 = []
  for(var i = 0; i < i5395.length; i += 1) {
    i5394.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i5395[i + 0]) );
  }
  i5390.machines = i5394
  var i5397 = i5391[5]
  var i5396 = []
  for(var i = 0; i < i5397.length; i += 1) {
    i5396.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i5397[i + 0]) );
  }
  i5390.entryStateTransitions = i5396
  var i5399 = i5391[6]
  var i5398 = []
  for(var i = 0; i < i5399.length; i += 1) {
    i5398.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i5399[i + 0]) );
  }
  i5390.exitStateTransitions = i5398
  var i5401 = i5391[7]
  var i5400 = []
  for(var i = 0; i < i5401.length; i += 1) {
    i5400.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i5401[i + 0]) );
  }
  i5390.anyStateTransitions = i5400
  i5390.defaultStateId = i5391[8]
  return i5390
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState"] = function (request, data, root) {
  var i5404 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState' )
  var i5405 = data
  i5404.id = i5405[0]
  i5404.name = i5405[1]
  i5404.cycleOffset = i5405[2]
  i5404.cycleOffsetParameter = i5405[3]
  i5404.cycleOffsetParameterActive = !!i5405[4]
  i5404.mirror = !!i5405[5]
  i5404.mirrorParameter = i5405[6]
  i5404.mirrorParameterActive = !!i5405[7]
  i5404.motionId = i5405[8]
  i5404.nameHash = i5405[9]
  i5404.fullPathHash = i5405[10]
  i5404.speed = i5405[11]
  i5404.speedParameter = i5405[12]
  i5404.speedParameterActive = !!i5405[13]
  i5404.tag = i5405[14]
  i5404.tagHash = i5405[15]
  i5404.writeDefaultValues = !!i5405[16]
  var i5407 = i5405[17]
  var i5406 = []
  for(var i = 0; i < i5407.length; i += 2) {
  request.r(i5407[i + 0], i5407[i + 1], 2, i5406, '')
  }
  i5404.behaviours = i5406
  var i5409 = i5405[18]
  var i5408 = []
  for(var i = 0; i < i5409.length; i += 1) {
    i5408.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i5409[i + 0]) );
  }
  i5404.transitions = i5408
  return i5404
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition"] = function (request, data, root) {
  var i5414 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition' )
  var i5415 = data
  i5414.fullPath = i5415[0]
  i5414.canTransitionToSelf = !!i5415[1]
  i5414.duration = i5415[2]
  i5414.exitTime = i5415[3]
  i5414.hasExitTime = !!i5415[4]
  i5414.hasFixedDuration = !!i5415[5]
  i5414.interruptionSource = i5415[6]
  i5414.offset = i5415[7]
  i5414.orderedInterruption = !!i5415[8]
  i5414.destinationStateId = i5415[9]
  i5414.isExit = !!i5415[10]
  i5414.mute = !!i5415[11]
  i5414.solo = !!i5415[12]
  var i5417 = i5415[13]
  var i5416 = []
  for(var i = 0; i < i5417.length; i += 1) {
    i5416.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i5417[i + 0]) );
  }
  i5414.conditions = i5416
  return i5414
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition"] = function (request, data, root) {
  var i5422 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition' )
  var i5423 = data
  i5422.destinationStateId = i5423[0]
  i5422.isExit = !!i5423[1]
  i5422.mute = !!i5423[2]
  i5422.solo = !!i5423[3]
  var i5425 = i5423[4]
  var i5424 = []
  for(var i = 0; i < i5425.length; i += 1) {
    i5424.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i5425[i + 0]) );
  }
  i5422.conditions = i5424
  return i5422
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition"] = function (request, data, root) {
  var i5428 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition' )
  var i5429 = data
  i5428.mode = i5429[0]
  i5428.parameter = i5429[1]
  i5428.threshold = i5429[2]
  return i5428
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter"] = function (request, data, root) {
  var i5432 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter' )
  var i5433 = data
  i5432.defaultBool = !!i5433[0]
  i5432.defaultFloat = i5433[1]
  i5432.defaultInt = i5433[2]
  i5432.name = i5433[3]
  i5432.nameHash = i5433[4]
  i5432.type = i5433[5]
  return i5432
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i5434 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i5435 = data
  i5434.useSafeMode = !!i5435[0]
  i5434.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i5435[1], i5434.safeModeOptions)
  i5434.timeScale = i5435[2]
  i5434.unscaledTimeScale = i5435[3]
  i5434.useSmoothDeltaTime = !!i5435[4]
  i5434.maxSmoothUnscaledTime = i5435[5]
  i5434.rewindCallbackMode = i5435[6]
  i5434.showUnityEditorReport = !!i5435[7]
  i5434.logBehaviour = i5435[8]
  i5434.drawGizmos = !!i5435[9]
  i5434.defaultRecyclable = !!i5435[10]
  i5434.defaultAutoPlay = i5435[11]
  i5434.defaultUpdateType = i5435[12]
  i5434.defaultTimeScaleIndependent = !!i5435[13]
  i5434.defaultEaseType = i5435[14]
  i5434.defaultEaseOvershootOrAmplitude = i5435[15]
  i5434.defaultEasePeriod = i5435[16]
  i5434.defaultAutoKill = !!i5435[17]
  i5434.defaultLoopType = i5435[18]
  i5434.debugMode = !!i5435[19]
  i5434.debugStoreTargetId = !!i5435[20]
  i5434.showPreviewPanel = !!i5435[21]
  i5434.storeSettingsLocation = i5435[22]
  i5434.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i5435[23], i5434.modules)
  i5434.createASMDEF = !!i5435[24]
  i5434.showPlayingTweens = !!i5435[25]
  i5434.showPausedTweens = !!i5435[26]
  return i5434
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i5436 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i5437 = data
  i5436.logBehaviour = i5437[0]
  i5436.nestedTweenFailureBehaviour = i5437[1]
  return i5436
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i5438 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i5439 = data
  i5438.showPanel = !!i5439[0]
  i5438.audioEnabled = !!i5439[1]
  i5438.physicsEnabled = !!i5439[2]
  i5438.physics2DEnabled = !!i5439[3]
  i5438.spriteEnabled = !!i5439[4]
  i5438.uiEnabled = !!i5439[5]
  i5438.textMeshProEnabled = !!i5439[6]
  i5438.tk2DEnabled = !!i5439[7]
  i5438.deAudioEnabled = !!i5439[8]
  i5438.deUnityExtendedEnabled = !!i5439[9]
  i5438.epoOutlineEnabled = !!i5439[10]
  return i5438
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i5440 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i5441 = data
  var i5443 = i5441[0]
  var i5442 = []
  for(var i = 0; i < i5443.length; i += 1) {
    i5442.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i5443[i + 0]) );
  }
  i5440.files = i5442
  i5440.componentToPrefabIds = i5441[1]
  return i5440
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i5446 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i5447 = data
  i5446.path = i5447[0]
  request.r(i5447[1], i5447[2], 0, i5446, 'unityObject')
  return i5446
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i5448 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i5449 = data
  var i5451 = i5449[0]
  var i5450 = []
  for(var i = 0; i < i5451.length; i += 1) {
    i5450.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i5451[i + 0]) );
  }
  i5448.scriptsExecutionOrder = i5450
  var i5453 = i5449[1]
  var i5452 = []
  for(var i = 0; i < i5453.length; i += 1) {
    i5452.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i5453[i + 0]) );
  }
  i5448.sortingLayers = i5452
  var i5455 = i5449[2]
  var i5454 = []
  for(var i = 0; i < i5455.length; i += 1) {
    i5454.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i5455[i + 0]) );
  }
  i5448.cullingLayers = i5454
  i5448.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i5449[3], i5448.timeSettings)
  i5448.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i5449[4], i5448.physicsSettings)
  i5448.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i5449[5], i5448.physics2DSettings)
  i5448.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i5449[6], i5448.qualitySettings)
  i5448.enableRealtimeShadows = !!i5449[7]
  i5448.enableAutoInstancing = !!i5449[8]
  i5448.enableStaticBatching = !!i5449[9]
  i5448.enableDynamicBatching = !!i5449[10]
  i5448.usePreservativeDynamicBatching = !!i5449[11]
  i5448.lightmapEncodingQuality = i5449[12]
  i5448.desiredColorSpace = i5449[13]
  var i5457 = i5449[14]
  var i5456 = []
  for(var i = 0; i < i5457.length; i += 1) {
    i5456.push( i5457[i + 0] );
  }
  i5448.allTags = i5456
  return i5448
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i5460 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i5461 = data
  i5460.name = i5461[0]
  i5460.value = i5461[1]
  return i5460
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i5464 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i5465 = data
  i5464.id = i5465[0]
  i5464.name = i5465[1]
  i5464.value = i5465[2]
  return i5464
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i5468 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i5469 = data
  i5468.id = i5469[0]
  i5468.name = i5469[1]
  return i5468
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i5470 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i5471 = data
  i5470.fixedDeltaTime = i5471[0]
  i5470.maximumDeltaTime = i5471[1]
  i5470.timeScale = i5471[2]
  i5470.maximumParticleTimestep = i5471[3]
  return i5470
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i5472 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i5473 = data
  i5472.gravity = new pc.Vec3( i5473[0], i5473[1], i5473[2] )
  i5472.defaultSolverIterations = i5473[3]
  i5472.bounceThreshold = i5473[4]
  i5472.autoSyncTransforms = !!i5473[5]
  i5472.autoSimulation = !!i5473[6]
  var i5475 = i5473[7]
  var i5474 = []
  for(var i = 0; i < i5475.length; i += 1) {
    i5474.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i5475[i + 0]) );
  }
  i5472.collisionMatrix = i5474
  return i5472
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i5478 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i5479 = data
  i5478.enabled = !!i5479[0]
  i5478.layerId = i5479[1]
  i5478.otherLayerId = i5479[2]
  return i5478
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i5480 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i5481 = data
  request.r(i5481[0], i5481[1], 0, i5480, 'material')
  i5480.gravity = new pc.Vec2( i5481[2], i5481[3] )
  i5480.positionIterations = i5481[4]
  i5480.velocityIterations = i5481[5]
  i5480.velocityThreshold = i5481[6]
  i5480.maxLinearCorrection = i5481[7]
  i5480.maxAngularCorrection = i5481[8]
  i5480.maxTranslationSpeed = i5481[9]
  i5480.maxRotationSpeed = i5481[10]
  i5480.baumgarteScale = i5481[11]
  i5480.baumgarteTOIScale = i5481[12]
  i5480.timeToSleep = i5481[13]
  i5480.linearSleepTolerance = i5481[14]
  i5480.angularSleepTolerance = i5481[15]
  i5480.defaultContactOffset = i5481[16]
  i5480.autoSimulation = !!i5481[17]
  i5480.queriesHitTriggers = !!i5481[18]
  i5480.queriesStartInColliders = !!i5481[19]
  i5480.callbacksOnDisable = !!i5481[20]
  i5480.reuseCollisionCallbacks = !!i5481[21]
  i5480.autoSyncTransforms = !!i5481[22]
  var i5483 = i5481[23]
  var i5482 = []
  for(var i = 0; i < i5483.length; i += 1) {
    i5482.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i5483[i + 0]) );
  }
  i5480.collisionMatrix = i5482
  return i5480
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i5486 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i5487 = data
  i5486.enabled = !!i5487[0]
  i5486.layerId = i5487[1]
  i5486.otherLayerId = i5487[2]
  return i5486
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i5488 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i5489 = data
  var i5491 = i5489[0]
  var i5490 = []
  for(var i = 0; i < i5491.length; i += 1) {
    i5490.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i5491[i + 0]) );
  }
  i5488.qualityLevels = i5490
  var i5493 = i5489[1]
  var i5492 = []
  for(var i = 0; i < i5493.length; i += 1) {
    i5492.push( i5493[i + 0] );
  }
  i5488.names = i5492
  i5488.shadows = i5489[2]
  i5488.anisotropicFiltering = i5489[3]
  i5488.antiAliasing = i5489[4]
  i5488.lodBias = i5489[5]
  i5488.shadowCascades = i5489[6]
  i5488.shadowDistance = i5489[7]
  i5488.shadowmaskMode = i5489[8]
  i5488.shadowProjection = i5489[9]
  i5488.shadowResolution = i5489[10]
  i5488.softParticles = !!i5489[11]
  i5488.softVegetation = !!i5489[12]
  i5488.activeColorSpace = i5489[13]
  i5488.desiredColorSpace = i5489[14]
  i5488.masterTextureLimit = i5489[15]
  i5488.maxQueuedFrames = i5489[16]
  i5488.particleRaycastBudget = i5489[17]
  i5488.pixelLightCount = i5489[18]
  i5488.realtimeReflectionProbes = !!i5489[19]
  i5488.shadowCascade2Split = i5489[20]
  i5488.shadowCascade4Split = new pc.Vec3( i5489[21], i5489[22], i5489[23] )
  i5488.streamingMipmapsActive = !!i5489[24]
  i5488.vSyncCount = i5489[25]
  i5488.asyncUploadBufferSize = i5489[26]
  i5488.asyncUploadTimeSlice = i5489[27]
  i5488.billboardsFaceCameraPosition = !!i5489[28]
  i5488.shadowNearPlaneOffset = i5489[29]
  i5488.streamingMipmapsMemoryBudget = i5489[30]
  i5488.maximumLODLevel = i5489[31]
  i5488.streamingMipmapsAddAllCameras = !!i5489[32]
  i5488.streamingMipmapsMaxLevelReduction = i5489[33]
  i5488.streamingMipmapsRenderersPerFrame = i5489[34]
  i5488.resolutionScalingFixedDPIFactor = i5489[35]
  i5488.streamingMipmapsMaxFileIORequests = i5489[36]
  i5488.currentQualityLevel = i5489[37]
  return i5488
}

Deserializers["Luna.Unity.DTO.UnityEngine.Audio.AudioMixer"] = function (request, data, root) {
  var i5496 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Audio.AudioMixer' )
  var i5497 = data
  var i5499 = i5497[0]
  var i5498 = []
  for(var i = 0; i < i5499.length; i += 1) {
    i5498.push( request.d('Luna.Unity.DTO.UnityEngine.Audio.AudioMixerGroup', i5499[i + 0]) );
  }
  i5496.groups = i5498
  var i5501 = i5497[1]
  var i5500 = []
  for(var i = 0; i < i5501.length; i += 1) {
    i5500.push( request.d('Luna.Unity.DTO.UnityEngine.Audio.AudioMixerSnapshot', i5501[i + 0]) );
  }
  i5496.snapshots = i5500
  return i5496
}

Deserializers["Luna.Unity.DTO.UnityEngine.Audio.AudioMixerGroup"] = function (request, data, root) {
  var i5504 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Audio.AudioMixerGroup' )
  var i5505 = data
  i5504.id = i5505[0]
  i5504.childGroupIds = i5505[1]
  i5504.name = i5505[2]
  return i5504
}

Deserializers["Luna.Unity.DTO.UnityEngine.Audio.AudioMixerSnapshot"] = function (request, data, root) {
  var i5508 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Audio.AudioMixerSnapshot' )
  var i5509 = data
  i5508.id = i5509[0]
  var i5511 = i5509[1]
  var i5510 = []
  for(var i = 0; i < i5511.length; i += 1) {
    i5510.push( request.d('Luna.Unity.DTO.UnityEngine.Audio.AudioMixerSnapshot+Parameter', i5511[i + 0]) );
  }
  i5508.parameters = i5510
  return i5508
}

Deserializers["Luna.Unity.DTO.UnityEngine.Audio.AudioMixerSnapshot+Parameter"] = function (request, data, root) {
  var i5514 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Audio.AudioMixerSnapshot+Parameter' )
  var i5515 = data
  i5514.name = i5515[0]
  i5514.value = i5515[1]
  return i5514
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame"] = function (request, data, root) {
  var i5518 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame' )
  var i5519 = data
  i5518.weight = i5519[0]
  i5518.vertices = i5519[1]
  i5518.normals = i5519[2]
  i5518.tangents = i5519[3]
  return i5518
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

Deserializers.creativeName = "2Sept2026_CompleteLevel_1_2_v2_Final";

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

Deserializers.runtimeAnalysisExcludedClassesCount = "1731";

Deserializers.runtimeAnalysisExcludedMethodsCount = "4374";

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

Deserializers.buildID = "947ab34f-abd7-4b99-b3d1-14b094307cc7";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[],[["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"]],[],[]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

