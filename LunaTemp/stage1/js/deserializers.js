var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i2920 = root || request.c( 'UnityEngine.JointSpring' )
  var i2921 = data
  i2920.spring = i2921[0]
  i2920.damper = i2921[1]
  i2920.targetPosition = i2921[2]
  return i2920
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i2922 = root || request.c( 'UnityEngine.JointMotor' )
  var i2923 = data
  i2922.m_TargetVelocity = i2923[0]
  i2922.m_Force = i2923[1]
  i2922.m_FreeSpin = i2923[2]
  return i2922
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i2924 = root || request.c( 'UnityEngine.JointLimits' )
  var i2925 = data
  i2924.m_Min = i2925[0]
  i2924.m_Max = i2925[1]
  i2924.m_Bounciness = i2925[2]
  i2924.m_BounceMinVelocity = i2925[3]
  i2924.m_ContactDistance = i2925[4]
  i2924.minBounce = i2925[5]
  i2924.maxBounce = i2925[6]
  return i2924
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i2926 = root || request.c( 'UnityEngine.JointDrive' )
  var i2927 = data
  i2926.m_PositionSpring = i2927[0]
  i2926.m_PositionDamper = i2927[1]
  i2926.m_MaximumForce = i2927[2]
  i2926.m_UseAcceleration = i2927[3]
  return i2926
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i2928 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i2929 = data
  i2928.m_Spring = i2929[0]
  i2928.m_Damper = i2929[1]
  return i2928
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i2930 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i2931 = data
  i2930.m_Limit = i2931[0]
  i2930.m_Bounciness = i2931[1]
  i2930.m_ContactDistance = i2931[2]
  return i2930
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i2932 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i2933 = data
  i2932.m_ExtremumSlip = i2933[0]
  i2932.m_ExtremumValue = i2933[1]
  i2932.m_AsymptoteSlip = i2933[2]
  i2932.m_AsymptoteValue = i2933[3]
  i2932.m_Stiffness = i2933[4]
  return i2932
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i2934 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i2935 = data
  i2934.m_LowerAngle = i2935[0]
  i2934.m_UpperAngle = i2935[1]
  return i2934
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i2936 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i2937 = data
  i2936.m_MotorSpeed = i2937[0]
  i2936.m_MaximumMotorTorque = i2937[1]
  return i2936
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i2938 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i2939 = data
  i2938.m_DampingRatio = i2939[0]
  i2938.m_Frequency = i2939[1]
  i2938.m_Angle = i2939[2]
  return i2938
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i2940 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i2941 = data
  i2940.m_LowerTranslation = i2941[0]
  i2940.m_UpperTranslation = i2941[1]
  return i2940
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i2942 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i2943 = data
  i2942.name = i2943[0]
  i2942.width = i2943[1]
  i2942.height = i2943[2]
  i2942.mipmapCount = i2943[3]
  i2942.anisoLevel = i2943[4]
  i2942.filterMode = i2943[5]
  i2942.hdr = !!i2943[6]
  i2942.format = i2943[7]
  i2942.wrapMode = i2943[8]
  i2942.alphaIsTransparency = !!i2943[9]
  i2942.alphaSource = i2943[10]
  i2942.graphicsFormat = i2943[11]
  i2942.sRGBTexture = !!i2943[12]
  i2942.desiredColorSpace = i2943[13]
  i2942.wrapU = i2943[14]
  i2942.wrapV = i2943[15]
  return i2942
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i2944 = root || new pc.UnityMaterial()
  var i2945 = data
  i2944.name = i2945[0]
  request.r(i2945[1], i2945[2], 0, i2944, 'shader')
  i2944.renderQueue = i2945[3]
  i2944.enableInstancing = !!i2945[4]
  var i2947 = i2945[5]
  var i2946 = []
  for(var i = 0; i < i2947.length; i += 1) {
    i2946.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i2947[i + 0]) );
  }
  i2944.floatParameters = i2946
  var i2949 = i2945[6]
  var i2948 = []
  for(var i = 0; i < i2949.length; i += 1) {
    i2948.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i2949[i + 0]) );
  }
  i2944.colorParameters = i2948
  var i2951 = i2945[7]
  var i2950 = []
  for(var i = 0; i < i2951.length; i += 1) {
    i2950.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i2951[i + 0]) );
  }
  i2944.vectorParameters = i2950
  var i2953 = i2945[8]
  var i2952 = []
  for(var i = 0; i < i2953.length; i += 1) {
    i2952.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i2953[i + 0]) );
  }
  i2944.textureParameters = i2952
  var i2955 = i2945[9]
  var i2954 = []
  for(var i = 0; i < i2955.length; i += 1) {
    i2954.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i2955[i + 0]) );
  }
  i2944.materialFlags = i2954
  return i2944
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i2958 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i2959 = data
  i2958.name = i2959[0]
  i2958.value = i2959[1]
  return i2958
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i2962 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i2963 = data
  i2962.name = i2963[0]
  i2962.value = new pc.Color(i2963[1], i2963[2], i2963[3], i2963[4])
  return i2962
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i2966 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i2967 = data
  i2966.name = i2967[0]
  i2966.value = new pc.Vec4( i2967[1], i2967[2], i2967[3], i2967[4] )
  return i2966
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i2970 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i2971 = data
  i2970.name = i2971[0]
  request.r(i2971[1], i2971[2], 0, i2970, 'value')
  return i2970
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i2974 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i2975 = data
  i2974.name = i2975[0]
  i2974.enabled = !!i2975[1]
  return i2974
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i2976 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i2977 = data
  i2976.position = new pc.Vec3( i2977[0], i2977[1], i2977[2] )
  i2976.scale = new pc.Vec3( i2977[3], i2977[4], i2977[5] )
  i2976.rotation = new pc.Quat(i2977[6], i2977[7], i2977[8], i2977[9])
  return i2976
}

Deserializers["Level2_Cloth_Playable"] = function (request, data, root) {
  var i2978 = root || request.c( 'Level2_Cloth_Playable' )
  var i2979 = data
  request.r(i2979[0], i2979[1], 0, i2978, 'ClothChangeView')
  request.r(i2979[2], i2979[3], 0, i2978, 'WashingView')
  request.r(i2979[4], i2979[5], 0, i2978, 'DryView')
  request.r(i2979[6], i2979[7], 0, i2978, 'WashingTools')
  request.r(i2979[8], i2979[9], 0, i2978, 'knittingView')
  request.r(i2979[10], i2979[11], 0, i2978, 'doorAnim')
  request.r(i2979[12], i2979[13], 0, i2978, 'ClothDirtySink')
  request.r(i2979[14], i2979[15], 0, i2978, 'ClothDirtySinkWet')
  request.r(i2979[16], i2979[17], 0, i2978, 'ClothDirtySinkClean')
  request.r(i2979[18], i2979[19], 0, i2978, 'waterBase')
  request.r(i2979[20], i2979[21], 0, i2978, 'waterTop')
  request.r(i2979[22], i2979[23], 0, i2978, 'waterClean')
  request.r(i2979[24], i2979[25], 0, i2978, 'waterDirty')
  request.r(i2979[26], i2979[27], 0, i2978, 'sinkFoamClean')
  i2978.ZoomStep1 = request.d('ZoomPos', i2979[28], i2978.ZoomStep1)
  request.r(i2979[29], i2979[30], 0, i2978, 'ClothHand')
  request.r(i2979[31], i2979[32], 0, i2978, 'ToolStep1')
  request.r(i2979[33], i2979[34], 0, i2978, 'step1_Indication')
  request.r(i2979[35], i2979[36], 0, i2978, 'Basket_Step1')
  request.r(i2979[37], i2979[38], 0, i2978, 'ClothinBasketStep1')
  i2978.ZoomStep2 = request.d('ZoomPos', i2979[39], i2978.ZoomStep2)
  request.r(i2979[40], i2979[41], 0, i2978, 'ToolStep2')
  request.r(i2979[42], i2979[43], 0, i2978, 'Basket_Cloth')
  request.r(i2979[44], i2979[45], 0, i2978, 'step2_Indication')
  i2978.ZoomStep3 = request.d('ZoomPos', i2979[46], i2978.ZoomStep3)
  request.r(i2979[47], i2979[48], 0, i2978, 'TapColStep3')
  request.r(i2979[49], i2979[50], 0, i2978, 'step3_Indication')
  request.r(i2979[51], i2979[52], 0, i2978, 'tapParent')
  request.r(i2979[53], i2979[54], 0, i2978, 'tapMask')
  request.r(i2979[55], i2979[56], 0, i2978, 'tapTopRend')
  i2978.ZoomStep4 = request.d('ZoomPos', i2979[57], i2978.ZoomStep4)
  request.r(i2979[58], i2979[59], 0, i2978, 'ToolStep4')
  request.r(i2979[60], i2979[61], 0, i2978, 'soapTarget')
  i2978.ZoomStep5 = request.d('ZoomPos', i2979[62], i2978.ZoomStep5)
  request.r(i2979[63], i2979[64], 0, i2978, 'ToolStep5')
  i2978.ZoomStep6 = request.d('ZoomPos', i2979[65], i2978.ZoomStep6)
  request.r(i2979[66], i2979[67], 0, i2978, 'basketStep6')
  request.r(i2979[68], i2979[69], 0, i2978, 'ToolStep6')
  i2978.ZoomStep3a = request.d('ZoomPos', i2979[70], i2978.ZoomStep3a)
  request.r(i2979[71], i2979[72], 0, i2978, 'ToolStep3a')
  request.r(i2979[73], i2979[74], 0, i2978, 'step3aIndication')
  i2978.levelName = i2979[75]
  i2978.levelReward = i2979[76]
  request.r(i2979[77], i2979[78], 0, i2978, 'LevelIcon')
  request.r(i2979[79], i2979[80], 0, i2978, 'Level_BG')
  var i2981 = i2979[81]
  var i2980 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Sprite')))
  for(var i = 0; i < i2981.length; i += 2) {
  request.r(i2981[i + 0], i2981[i + 1], 1, i2980, '')
  }
  i2978.ToolIcons = i2980
  var i2983 = i2979[82]
  var i2982 = []
  for(var i = 0; i < i2983.length; i += 2) {
  request.r(i2983[i + 0], i2983[i + 1], 2, i2982, '')
  }
  i2978.AllDrags = i2982
  var i2985 = i2979[83]
  var i2984 = []
  for(var i = 0; i < i2985.length; i += 2) {
  request.r(i2985[i + 0], i2985[i + 1], 2, i2984, '')
  }
  i2978.AllSources = i2984
  var i2987 = i2979[84]
  var i2986 = []
  for(var i = 0; i < i2987.length; i += 2) {
  request.r(i2987[i + 0], i2987[i + 1], 2, i2986, '')
  }
  i2978.AllScratches = i2986
  i2978.stepsDone = i2979[85]
  i2978.levelNo = i2979[86]
  i2978.partNo = i2979[87]
  request.r(i2979[88], i2979[89], 0, i2978, 'clothSfx')
  request.r(i2979[90], i2979[91], 0, i2978, 'tapOpenSfx')
  request.r(i2979[92], i2979[93], 0, i2978, 'waterPourSfx')
  return i2978
}

Deserializers["ZoomPos"] = function (request, data, root) {
  var i2988 = root || request.c( 'ZoomPos' )
  var i2989 = data
  i2988.CameraPos = new pc.Vec3( i2989[0], i2989[1], i2989[2] )
  i2988.CameraFOV = i2989[3]
  return i2988
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i2998 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i2999 = data
  i2998.name = i2999[0]
  i2998.tagId = i2999[1]
  i2998.enabled = !!i2999[2]
  i2998.isStatic = !!i2999[3]
  i2998.layer = i2999[4]
  return i2998
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animator"] = function (request, data, root) {
  var i3000 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animator' )
  var i3001 = data
  request.r(i3001[0], i3001[1], 0, i3000, 'animatorController')
  request.r(i3001[2], i3001[3], 0, i3000, 'avatar')
  i3000.updateMode = i3001[4]
  i3000.hasTransformHierarchy = !!i3001[5]
  i3000.applyRootMotion = !!i3001[6]
  var i3003 = i3001[7]
  var i3002 = []
  for(var i = 0; i < i3003.length; i += 2) {
  request.r(i3003[i + 0], i3003[i + 1], 2, i3002, '')
  }
  i3000.humanBones = i3002
  i3000.enabled = !!i3001[8]
  return i3000
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer"] = function (request, data, root) {
  var i3006 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer' )
  var i3007 = data
  i3006.color = new pc.Color(i3007[0], i3007[1], i3007[2], i3007[3])
  request.r(i3007[4], i3007[5], 0, i3006, 'sprite')
  i3006.flipX = !!i3007[6]
  i3006.flipY = !!i3007[7]
  i3006.drawMode = i3007[8]
  i3006.size = new pc.Vec2( i3007[9], i3007[10] )
  i3006.tileMode = i3007[11]
  i3006.adaptiveModeThreshold = i3007[12]
  i3006.maskInteraction = i3007[13]
  i3006.spriteSortPoint = i3007[14]
  i3006.enabled = !!i3007[15]
  request.r(i3007[16], i3007[17], 0, i3006, 'sharedMaterial')
  var i3009 = i3007[18]
  var i3008 = []
  for(var i = 0; i < i3009.length; i += 2) {
  request.r(i3009[i + 0], i3009[i + 1], 2, i3008, '')
  }
  i3006.sharedMaterials = i3008
  i3006.receiveShadows = !!i3007[19]
  i3006.shadowCastingMode = i3007[20]
  i3006.sortingLayerID = i3007[21]
  i3006.sortingOrder = i3007[22]
  i3006.lightmapIndex = i3007[23]
  i3006.lightmapSceneIndex = i3007[24]
  i3006.lightmapScaleOffset = new pc.Vec4( i3007[25], i3007[26], i3007[27], i3007[28] )
  i3006.lightProbeUsage = i3007[29]
  i3006.reflectionProbeUsage = i3007[30]
  return i3006
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.TrailRenderer"] = function (request, data, root) {
  var i3012 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.TrailRenderer' )
  var i3013 = data
  var i3015 = i3013[0]
  var i3014 = []
  for(var i = 0; i < i3015.length; i += 3) {
    i3014.push( new pc.Vec3( i3015[i + 0], i3015[i + 1], i3015[i + 2] ) );
  }
  i3012.positions = i3014
  i3012.positionCount = i3013[1]
  i3012.time = i3013[2]
  i3012.startWidth = i3013[3]
  i3012.endWidth = i3013[4]
  i3012.widthMultiplier = i3013[5]
  i3012.autodestruct = !!i3013[6]
  i3012.emitting = !!i3013[7]
  i3012.numCornerVertices = i3013[8]
  i3012.numCapVertices = i3013[9]
  i3012.minVertexDistance = i3013[10]
  i3012.colorGradient = i3013[11] ? new pc.ColorGradient(i3013[11][0], i3013[11][1], i3013[11][2]) : null
  i3012.startColor = new pc.Color(i3013[12], i3013[13], i3013[14], i3013[15])
  i3012.endColor = new pc.Color(i3013[16], i3013[17], i3013[18], i3013[19])
  i3012.generateLightingData = !!i3013[20]
  i3012.textureMode = i3013[21]
  i3012.alignment = i3013[22]
  i3012.widthCurve = new pc.AnimationCurve( { keys_flow: i3013[23] } )
  i3012.enabled = !!i3013[24]
  request.r(i3013[25], i3013[26], 0, i3012, 'sharedMaterial')
  var i3017 = i3013[27]
  var i3016 = []
  for(var i = 0; i < i3017.length; i += 2) {
  request.r(i3017[i + 0], i3017[i + 1], 2, i3016, '')
  }
  i3012.sharedMaterials = i3016
  i3012.receiveShadows = !!i3013[28]
  i3012.shadowCastingMode = i3013[29]
  i3012.sortingLayerID = i3013[30]
  i3012.sortingOrder = i3013[31]
  i3012.lightmapIndex = i3013[32]
  i3012.lightmapSceneIndex = i3013[33]
  i3012.lightmapScaleOffset = new pc.Vec4( i3013[34], i3013[35], i3013[36], i3013[37] )
  i3012.lightProbeUsage = i3013[38]
  i3012.reflectionProbeUsage = i3013[39]
  return i3012
}

Deserializers["UnityEngine.U2D.Animation.SpriteSkin"] = function (request, data, root) {
  var i3020 = root || request.c( 'UnityEngine.U2D.Animation.SpriteSkin' )
  var i3021 = data
  request.r(i3021[0], i3021[1], 0, i3020, 'm_RootBone')
  var i3023 = i3021[2]
  var i3022 = []
  for(var i = 0; i < i3023.length; i += 2) {
  request.r(i3023[i + 0], i3023[i + 1], 2, i3022, '')
  }
  i3020.m_BoneTransforms = i3022
  i3020.m_AlwaysUpdate = !!i3021[3]
  i3020.m_AutoRebind = !!i3021[4]
  return i3020
}

Deserializers["BD_AnimationHelper"] = function (request, data, root) {
  var i3024 = root || request.c( 'BD_AnimationHelper' )
  var i3025 = data
  i3024.OnAnimationComplete = request.d('UnityEngine.Events.UnityEvent', i3025[0], i3024.OnAnimationComplete)
  request.r(i3025[1], i3025[2], 0, i3024, 'sfxClip')
  return i3024
}

Deserializers["UnityEngine.Events.UnityEvent"] = function (request, data, root) {
  var i3026 = root || request.c( 'UnityEngine.Events.UnityEvent' )
  var i3027 = data
  i3026.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i3027[0], i3026.m_PersistentCalls)
  return i3026
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i3028 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i3029 = data
  var i3031 = i3029[0]
  var i3030 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i3031.length; i += 1) {
    i3030.add(request.d('UnityEngine.Events.PersistentCall', i3031[i + 0]));
  }
  i3028.m_Calls = i3030
  return i3028
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i3034 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i3035 = data
  request.r(i3035[0], i3035[1], 0, i3034, 'm_Target')
  i3034.m_TargetAssemblyTypeName = i3035[2]
  i3034.m_MethodName = i3035[3]
  i3034.m_Mode = i3035[4]
  i3034.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i3035[5], i3034.m_Arguments)
  i3034.m_CallState = i3035[6]
  return i3034
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i3036 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i3037 = data
  request.r(i3037[0], i3037[1], 0, i3036, 'm_ObjectArgument')
  i3036.m_ObjectArgumentAssemblyTypeName = i3037[2]
  i3036.m_IntArgument = i3037[3]
  i3036.m_FloatArgument = i3037[4]
  i3036.m_StringArgument = i3037[5]
  i3036.m_BoolArgument = !!i3037[6]
  return i3036
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteMask"] = function (request, data, root) {
  var i3038 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteMask' )
  var i3039 = data
  i3038.frontSortingLayerID = i3039[0]
  i3038.frontSortingOrder = i3039[1]
  i3038.backSortingLayerID = i3039[2]
  i3038.backSortingOrder = i3039[3]
  i3038.alphaCutoff = i3039[4]
  request.r(i3039[5], i3039[6], 0, i3038, 'sprite')
  i3038.tileMode = i3039[7]
  i3038.isCustomRangeActive = !!i3039[8]
  i3038.spriteSortPoint = i3039[9]
  i3038.enabled = !!i3039[10]
  request.r(i3039[11], i3039[12], 0, i3038, 'sharedMaterial')
  var i3041 = i3039[13]
  var i3040 = []
  for(var i = 0; i < i3041.length; i += 2) {
  request.r(i3041[i + 0], i3041[i + 1], 2, i3040, '')
  }
  i3038.sharedMaterials = i3040
  i3038.receiveShadows = !!i3039[14]
  i3038.shadowCastingMode = i3039[15]
  i3038.sortingLayerID = i3039[16]
  i3038.sortingOrder = i3039[17]
  i3038.lightmapIndex = i3039[18]
  i3038.lightmapSceneIndex = i3039[19]
  i3038.lightmapScaleOffset = new pc.Vec4( i3039[20], i3039[21], i3039[22], i3039[23] )
  i3038.lightProbeUsage = i3039[24]
  i3038.reflectionProbeUsage = i3039[25]
  return i3038
}

Deserializers["BasicDrag"] = function (request, data, root) {
  var i3042 = root || request.c( 'BasicDrag' )
  var i3043 = data
  i3042.canDrag = !!i3043[0]
  i3042.dragByDelta = !!i3043[1]
  i3042.isDragging = !!i3043[2]
  i3042.moveWithPointer = !!i3043[3]
  i3042.canReturn = !!i3043[4]
  i3042.jumpOnReturn = !!i3043[5]
  i3042.returnTime = i3043[6]
  i3042.Tool_Offset = new pc.Vec3( i3043[7], i3043[8], i3043[9] )
  i3042.canScaleIncrease = !!i3043[10]
  i3042.Self_ScaleNew = new pc.Vec3( i3043[11], i3043[12], i3043[13] )
  i3042.canRotateOnPick = !!i3043[14]
  i3042.startRot = new pc.Vec3( i3043[15], i3043[16], i3043[17] )
  i3042.newRot = new pc.Vec3( i3043[18], i3043[19], i3043[20] )
  var i3045 = i3043[21]
  var i3044 = []
  for(var i = 0; i < i3045.length; i += 2) {
  request.r(i3045[i + 0], i3045[i + 1], 2, i3044, '')
  }
  i3042.childSprite = i3044
  request.r(i3043[22], i3043[23], 0, i3042, 'ToolSelectClip')
  request.r(i3043[24], i3043[25], 0, i3042, 'ToolLoopClip')
  request.r(i3043[26], i3043[27], 0, i3042, 'thisParticles')
  i3042.onDragparticle = !!i3043[28]
  request.r(i3043[29], i3043[30], 0, i3042, 'dragParticles')
  request.r(i3043[31], i3043[32], 0, i3042, 'anim')
  i3042.startPos = new pc.Vec3( i3043[33], i3043[34], i3043[35] )
  i3042.startScale = new pc.Vec3( i3043[36], i3043[37], i3043[38] )
  i3042.Vibration = !!i3043[39]
  i3042.isPlacedCannotMove = !!i3043[40]
  i3042.isObjectMovingWhileDragging = !!i3043[41]
  i3042.OnMouseDownEvent = request.d('System.Action', i3043[42], i3042.OnMouseDownEvent)
  i3042.OnMouseUpEvent = request.d('System.Action', i3043[43], i3042.OnMouseUpEvent)
  i3042.ProgStartEvent = request.d('System.Action', i3043[44], i3042.ProgStartEvent)
  i3042.ProgEndEvent = request.d('System.Action', i3043[45], i3042.ProgEndEvent)
  i3042.canCallMouseUpWhenGamePaused = !!i3043[46]
  i3042.ClampX_L = i3043[47]
  i3042.ClampX_H = i3043[48]
  i3042.ClampY_L = i3043[49]
  i3042.ClampY_H = i3043[50]
  i3042.startOrder = i3043[51]
  i3042.dontResetItIsInCollider = !!i3043[52]
  request.r(i3043[53], i3043[54], 0, i3042, 'thisCollider')
  request.r(i3043[55], i3043[56], 0, i3042, 'thisSR')
  i3042.OnMouseDownEventIndependentFromCanDrag = request.d('System.Action', i3043[57], i3042.OnMouseDownEventIndependentFromCanDrag)
  return i3042
}

Deserializers["System.Action"] = function (request, data, root) {
  var i3048 = root || request.c( 'System.Action' )
  var i3049 = data
  return i3048
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D"] = function (request, data, root) {
  var i3050 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D' )
  var i3051 = data
  i3050.usedByComposite = !!i3051[0]
  i3050.autoTiling = !!i3051[1]
  i3050.size = new pc.Vec2( i3051[2], i3051[3] )
  i3050.edgeRadius = i3051[4]
  i3050.enabled = !!i3051[5]
  i3050.isTrigger = !!i3051[6]
  i3050.usedByEffector = !!i3051[7]
  i3050.density = i3051[8]
  i3050.offset = new pc.Vec2( i3051[9], i3051[10] )
  request.r(i3051[11], i3051[12], 0, i3050, 'material')
  return i3050
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D"] = function (request, data, root) {
  var i3052 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D' )
  var i3053 = data
  i3052.bodyType = i3053[0]
  request.r(i3053[1], i3053[2], 0, i3052, 'material')
  i3052.simulated = !!i3053[3]
  i3052.useAutoMass = !!i3053[4]
  i3052.mass = i3053[5]
  i3052.drag = i3053[6]
  i3052.angularDrag = i3053[7]
  i3052.gravityScale = i3053[8]
  i3052.collisionDetectionMode = i3053[9]
  i3052.sleepMode = i3053[10]
  i3052.constraints = i3053[11]
  return i3052
}

Deserializers["PlaceItem"] = function (request, data, root) {
  var i3054 = root || request.c( 'PlaceItem' )
  var i3055 = data
  request.r(i3055[0], i3055[1], 0, i3054, 'thisDrag')
  request.r(i3055[2], i3055[3], 0, i3054, 'Target')
  request.r(i3055[4], i3055[5], 0, i3054, 'Clip')
  i3054.jumpOnPlace = !!i3055[6]
  i3054.jumpHeight = i3055[7]
  i3054.jumpDuration = i3055[8]
  i3054.settleDuration = i3055[9]
  i3054.isPlaced = !!i3055[10]
  i3054.isInsideCollider = !!i3055[11]
  i3054.OnPlaced = request.d('UnityEngine.Events.UnityEvent', i3055[12], i3054.OnPlaced)
  return i3054
}

Deserializers["DG.Tweening.DOTweenAnimation"] = function (request, data, root) {
  var i3056 = root || request.c( 'DG.Tweening.DOTweenAnimation' )
  var i3057 = data
  i3056.targetIsSelf = !!i3057[0]
  request.r(i3057[1], i3057[2], 0, i3056, 'targetGO')
  i3056.tweenTargetIsTargetGO = !!i3057[3]
  i3056.delay = i3057[4]
  i3056.duration = i3057[5]
  i3056.easeType = i3057[6]
  i3056.easeCurve = new pc.AnimationCurve( { keys_flow: i3057[7] } )
  i3056.loopType = i3057[8]
  i3056.loops = i3057[9]
  i3056.id = i3057[10]
  i3056.isRelative = !!i3057[11]
  i3056.isFrom = !!i3057[12]
  i3056.isIndependentUpdate = !!i3057[13]
  i3056.autoKill = !!i3057[14]
  i3056.autoGenerate = !!i3057[15]
  i3056.isActive = !!i3057[16]
  i3056.isValid = !!i3057[17]
  request.r(i3057[18], i3057[19], 0, i3056, 'target')
  i3056.animationType = i3057[20]
  i3056.targetType = i3057[21]
  i3056.forcedTargetType = i3057[22]
  i3056.autoPlay = !!i3057[23]
  i3056.useTargetAsV3 = !!i3057[24]
  i3056.endValueFloat = i3057[25]
  i3056.endValueV3 = new pc.Vec3( i3057[26], i3057[27], i3057[28] )
  i3056.endValueV2 = new pc.Vec2( i3057[29], i3057[30] )
  i3056.endValueColor = new pc.Color(i3057[31], i3057[32], i3057[33], i3057[34])
  i3056.endValueString = i3057[35]
  i3056.endValueRect = UnityEngine.Rect.MinMaxRect(i3057[36], i3057[37], i3057[38], i3057[39])
  request.r(i3057[40], i3057[41], 0, i3056, 'endValueTransform')
  i3056.optionalBool0 = !!i3057[42]
  i3056.optionalBool1 = !!i3057[43]
  i3056.optionalFloat0 = i3057[44]
  i3056.optionalInt0 = i3057[45]
  i3056.optionalRotationMode = i3057[46]
  i3056.optionalScrambleMode = i3057[47]
  i3056.optionalShakeRandomnessMode = i3057[48]
  i3056.optionalString = i3057[49]
  i3056.updateType = i3057[50]
  i3056.isSpeedBased = !!i3057[51]
  i3056.hasOnStart = !!i3057[52]
  i3056.hasOnPlay = !!i3057[53]
  i3056.hasOnUpdate = !!i3057[54]
  i3056.hasOnStepComplete = !!i3057[55]
  i3056.hasOnComplete = !!i3057[56]
  i3056.hasOnTweenCreated = !!i3057[57]
  i3056.hasOnRewind = !!i3057[58]
  i3056.onStart = request.d('UnityEngine.Events.UnityEvent', i3057[59], i3056.onStart)
  i3056.onPlay = request.d('UnityEngine.Events.UnityEvent', i3057[60], i3056.onPlay)
  i3056.onUpdate = request.d('UnityEngine.Events.UnityEvent', i3057[61], i3056.onUpdate)
  i3056.onStepComplete = request.d('UnityEngine.Events.UnityEvent', i3057[62], i3056.onStepComplete)
  i3056.onComplete = request.d('UnityEngine.Events.UnityEvent', i3057[63], i3056.onComplete)
  i3056.onTweenCreated = request.d('UnityEngine.Events.UnityEvent', i3057[64], i3056.onTweenCreated)
  i3056.onRewind = request.d('UnityEngine.Events.UnityEvent', i3057[65], i3056.onRewind)
  return i3056
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystem"] = function (request, data, root) {
  var i3058 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystem' )
  var i3059 = data
  i3058.main = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule', i3059[0], i3058.main)
  i3058.colorBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule', i3059[1], i3058.colorBySpeed)
  i3058.colorOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule', i3059[2], i3058.colorOverLifetime)
  i3058.emission = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule', i3059[3], i3058.emission)
  i3058.rotationBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule', i3059[4], i3058.rotationBySpeed)
  i3058.rotationOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule', i3059[5], i3058.rotationOverLifetime)
  i3058.shape = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule', i3059[6], i3058.shape)
  i3058.sizeBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule', i3059[7], i3058.sizeBySpeed)
  i3058.sizeOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule', i3059[8], i3058.sizeOverLifetime)
  i3058.textureSheetAnimation = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule', i3059[9], i3058.textureSheetAnimation)
  i3058.velocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule', i3059[10], i3058.velocityOverLifetime)
  i3058.noise = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule', i3059[11], i3058.noise)
  i3058.inheritVelocity = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule', i3059[12], i3058.inheritVelocity)
  i3058.forceOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule', i3059[13], i3058.forceOverLifetime)
  i3058.limitVelocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule', i3059[14], i3058.limitVelocityOverLifetime)
  i3058.useAutoRandomSeed = !!i3059[15]
  i3058.randomSeed = i3059[16]
  return i3058
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule"] = function (request, data, root) {
  var i3060 = root || new pc.ParticleSystemMain()
  var i3061 = data
  i3060.duration = i3061[0]
  i3060.loop = !!i3061[1]
  i3060.prewarm = !!i3061[2]
  i3060.startDelay = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3061[3], i3060.startDelay)
  i3060.startLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3061[4], i3060.startLifetime)
  i3060.startSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3061[5], i3060.startSpeed)
  i3060.startSize3D = !!i3061[6]
  i3060.startSizeX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3061[7], i3060.startSizeX)
  i3060.startSizeY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3061[8], i3060.startSizeY)
  i3060.startSizeZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3061[9], i3060.startSizeZ)
  i3060.startRotation3D = !!i3061[10]
  i3060.startRotationX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3061[11], i3060.startRotationX)
  i3060.startRotationY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3061[12], i3060.startRotationY)
  i3060.startRotationZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3061[13], i3060.startRotationZ)
  i3060.startColor = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i3061[14], i3060.startColor)
  i3060.gravityModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3061[15], i3060.gravityModifier)
  i3060.simulationSpace = i3061[16]
  request.r(i3061[17], i3061[18], 0, i3060, 'customSimulationSpace')
  i3060.simulationSpeed = i3061[19]
  i3060.useUnscaledTime = !!i3061[20]
  i3060.scalingMode = i3061[21]
  i3060.playOnAwake = !!i3061[22]
  i3060.maxParticles = i3061[23]
  i3060.emitterVelocityMode = i3061[24]
  i3060.stopAction = i3061[25]
  return i3060
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve"] = function (request, data, root) {
  var i3062 = root || new pc.MinMaxCurve()
  var i3063 = data
  i3062.mode = i3063[0]
  i3062.curveMin = new pc.AnimationCurve( { keys_flow: i3063[1] } )
  i3062.curveMax = new pc.AnimationCurve( { keys_flow: i3063[2] } )
  i3062.curveMultiplier = i3063[3]
  i3062.constantMin = i3063[4]
  i3062.constantMax = i3063[5]
  return i3062
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient"] = function (request, data, root) {
  var i3064 = root || new pc.MinMaxGradient()
  var i3065 = data
  i3064.mode = i3065[0]
  i3064.gradientMin = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i3065[1], i3064.gradientMin)
  i3064.gradientMax = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i3065[2], i3064.gradientMax)
  i3064.colorMin = new pc.Color(i3065[3], i3065[4], i3065[5], i3065[6])
  i3064.colorMax = new pc.Color(i3065[7], i3065[8], i3065[9], i3065[10])
  return i3064
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient"] = function (request, data, root) {
  var i3066 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient' )
  var i3067 = data
  i3066.mode = i3067[0]
  var i3069 = i3067[1]
  var i3068 = []
  for(var i = 0; i < i3069.length; i += 1) {
    i3068.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey', i3069[i + 0]) );
  }
  i3066.colorKeys = i3068
  var i3071 = i3067[2]
  var i3070 = []
  for(var i = 0; i < i3071.length; i += 1) {
    i3070.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey', i3071[i + 0]) );
  }
  i3066.alphaKeys = i3070
  return i3066
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule"] = function (request, data, root) {
  var i3072 = root || new pc.ParticleSystemColorBySpeed()
  var i3073 = data
  i3072.enabled = !!i3073[0]
  i3072.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i3073[1], i3072.color)
  i3072.range = new pc.Vec2( i3073[2], i3073[3] )
  return i3072
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey"] = function (request, data, root) {
  var i3076 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey' )
  var i3077 = data
  i3076.color = new pc.Color(i3077[0], i3077[1], i3077[2], i3077[3])
  i3076.time = i3077[4]
  return i3076
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey"] = function (request, data, root) {
  var i3080 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey' )
  var i3081 = data
  i3080.alpha = i3081[0]
  i3080.time = i3081[1]
  return i3080
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule"] = function (request, data, root) {
  var i3082 = root || new pc.ParticleSystemColorOverLifetime()
  var i3083 = data
  i3082.enabled = !!i3083[0]
  i3082.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i3083[1], i3082.color)
  return i3082
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule"] = function (request, data, root) {
  var i3084 = root || new pc.ParticleSystemEmitter()
  var i3085 = data
  i3084.enabled = !!i3085[0]
  i3084.rateOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3085[1], i3084.rateOverTime)
  i3084.rateOverDistance = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3085[2], i3084.rateOverDistance)
  var i3087 = i3085[3]
  var i3086 = []
  for(var i = 0; i < i3087.length; i += 1) {
    i3086.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst', i3087[i + 0]) );
  }
  i3084.bursts = i3086
  return i3084
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst"] = function (request, data, root) {
  var i3090 = root || new pc.ParticleSystemBurst()
  var i3091 = data
  i3090.count = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3091[0], i3090.count)
  i3090.cycleCount = i3091[1]
  i3090.minCount = i3091[2]
  i3090.maxCount = i3091[3]
  i3090.repeatInterval = i3091[4]
  i3090.time = i3091[5]
  return i3090
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule"] = function (request, data, root) {
  var i3092 = root || new pc.ParticleSystemRotationBySpeed()
  var i3093 = data
  i3092.enabled = !!i3093[0]
  i3092.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3093[1], i3092.x)
  i3092.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3093[2], i3092.y)
  i3092.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3093[3], i3092.z)
  i3092.separateAxes = !!i3093[4]
  i3092.range = new pc.Vec2( i3093[5], i3093[6] )
  return i3092
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule"] = function (request, data, root) {
  var i3094 = root || new pc.ParticleSystemRotationOverLifetime()
  var i3095 = data
  i3094.enabled = !!i3095[0]
  i3094.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3095[1], i3094.x)
  i3094.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3095[2], i3094.y)
  i3094.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3095[3], i3094.z)
  i3094.separateAxes = !!i3095[4]
  return i3094
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule"] = function (request, data, root) {
  var i3096 = root || new pc.ParticleSystemShape()
  var i3097 = data
  i3096.enabled = !!i3097[0]
  i3096.shapeType = i3097[1]
  i3096.randomDirectionAmount = i3097[2]
  i3096.sphericalDirectionAmount = i3097[3]
  i3096.randomPositionAmount = i3097[4]
  i3096.alignToDirection = !!i3097[5]
  i3096.radius = i3097[6]
  i3096.radiusMode = i3097[7]
  i3096.radiusSpread = i3097[8]
  i3096.radiusSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3097[9], i3096.radiusSpeed)
  i3096.radiusThickness = i3097[10]
  i3096.angle = i3097[11]
  i3096.length = i3097[12]
  i3096.boxThickness = new pc.Vec3( i3097[13], i3097[14], i3097[15] )
  i3096.meshShapeType = i3097[16]
  request.r(i3097[17], i3097[18], 0, i3096, 'mesh')
  request.r(i3097[19], i3097[20], 0, i3096, 'meshRenderer')
  request.r(i3097[21], i3097[22], 0, i3096, 'skinnedMeshRenderer')
  i3096.useMeshMaterialIndex = !!i3097[23]
  i3096.meshMaterialIndex = i3097[24]
  i3096.useMeshColors = !!i3097[25]
  i3096.normalOffset = i3097[26]
  i3096.arc = i3097[27]
  i3096.arcMode = i3097[28]
  i3096.arcSpread = i3097[29]
  i3096.arcSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3097[30], i3096.arcSpeed)
  i3096.donutRadius = i3097[31]
  i3096.position = new pc.Vec3( i3097[32], i3097[33], i3097[34] )
  i3096.rotation = new pc.Vec3( i3097[35], i3097[36], i3097[37] )
  i3096.scale = new pc.Vec3( i3097[38], i3097[39], i3097[40] )
  return i3096
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule"] = function (request, data, root) {
  var i3098 = root || new pc.ParticleSystemSizeBySpeed()
  var i3099 = data
  i3098.enabled = !!i3099[0]
  i3098.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3099[1], i3098.x)
  i3098.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3099[2], i3098.y)
  i3098.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3099[3], i3098.z)
  i3098.separateAxes = !!i3099[4]
  i3098.range = new pc.Vec2( i3099[5], i3099[6] )
  return i3098
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule"] = function (request, data, root) {
  var i3100 = root || new pc.ParticleSystemSizeOverLifetime()
  var i3101 = data
  i3100.enabled = !!i3101[0]
  i3100.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3101[1], i3100.x)
  i3100.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3101[2], i3100.y)
  i3100.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3101[3], i3100.z)
  i3100.separateAxes = !!i3101[4]
  return i3100
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule"] = function (request, data, root) {
  var i3102 = root || new pc.ParticleSystemTextureSheetAnimation()
  var i3103 = data
  i3102.enabled = !!i3103[0]
  i3102.mode = i3103[1]
  i3102.animation = i3103[2]
  i3102.numTilesX = i3103[3]
  i3102.numTilesY = i3103[4]
  i3102.useRandomRow = !!i3103[5]
  i3102.frameOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3103[6], i3102.frameOverTime)
  i3102.startFrame = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3103[7], i3102.startFrame)
  i3102.cycleCount = i3103[8]
  i3102.rowIndex = i3103[9]
  i3102.flipU = i3103[10]
  i3102.flipV = i3103[11]
  i3102.spriteCount = i3103[12]
  var i3105 = i3103[13]
  var i3104 = []
  for(var i = 0; i < i3105.length; i += 2) {
  request.r(i3105[i + 0], i3105[i + 1], 2, i3104, '')
  }
  i3102.sprites = i3104
  return i3102
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule"] = function (request, data, root) {
  var i3108 = root || new pc.ParticleSystemVelocityOverLifetime()
  var i3109 = data
  i3108.enabled = !!i3109[0]
  i3108.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3109[1], i3108.x)
  i3108.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3109[2], i3108.y)
  i3108.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3109[3], i3108.z)
  i3108.radial = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3109[4], i3108.radial)
  i3108.speedModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3109[5], i3108.speedModifier)
  i3108.space = i3109[6]
  i3108.orbitalX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3109[7], i3108.orbitalX)
  i3108.orbitalY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3109[8], i3108.orbitalY)
  i3108.orbitalZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3109[9], i3108.orbitalZ)
  i3108.orbitalOffsetX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3109[10], i3108.orbitalOffsetX)
  i3108.orbitalOffsetY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3109[11], i3108.orbitalOffsetY)
  i3108.orbitalOffsetZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3109[12], i3108.orbitalOffsetZ)
  return i3108
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule"] = function (request, data, root) {
  var i3110 = root || new pc.ParticleSystemNoise()
  var i3111 = data
  i3110.enabled = !!i3111[0]
  i3110.separateAxes = !!i3111[1]
  i3110.strengthX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3111[2], i3110.strengthX)
  i3110.strengthY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3111[3], i3110.strengthY)
  i3110.strengthZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3111[4], i3110.strengthZ)
  i3110.frequency = i3111[5]
  i3110.damping = !!i3111[6]
  i3110.octaveCount = i3111[7]
  i3110.octaveMultiplier = i3111[8]
  i3110.octaveScale = i3111[9]
  i3110.quality = i3111[10]
  i3110.scrollSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3111[11], i3110.scrollSpeed)
  i3110.scrollSpeedMultiplier = i3111[12]
  i3110.remapEnabled = !!i3111[13]
  i3110.remapX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3111[14], i3110.remapX)
  i3110.remapY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3111[15], i3110.remapY)
  i3110.remapZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3111[16], i3110.remapZ)
  i3110.positionAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3111[17], i3110.positionAmount)
  i3110.rotationAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3111[18], i3110.rotationAmount)
  i3110.sizeAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3111[19], i3110.sizeAmount)
  return i3110
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule"] = function (request, data, root) {
  var i3112 = root || new pc.ParticleSystemInheritVelocity()
  var i3113 = data
  i3112.enabled = !!i3113[0]
  i3112.mode = i3113[1]
  i3112.curve = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3113[2], i3112.curve)
  return i3112
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule"] = function (request, data, root) {
  var i3114 = root || new pc.ParticleSystemForceOverLifetime()
  var i3115 = data
  i3114.enabled = !!i3115[0]
  i3114.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3115[1], i3114.x)
  i3114.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3115[2], i3114.y)
  i3114.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3115[3], i3114.z)
  i3114.space = i3115[4]
  i3114.randomized = !!i3115[5]
  return i3114
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule"] = function (request, data, root) {
  var i3116 = root || new pc.ParticleSystemLimitVelocityOverLifetime()
  var i3117 = data
  i3116.enabled = !!i3117[0]
  i3116.limit = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3117[1], i3116.limit)
  i3116.limitX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3117[2], i3116.limitX)
  i3116.limitY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3117[3], i3116.limitY)
  i3116.limitZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3117[4], i3116.limitZ)
  i3116.dampen = i3117[5]
  i3116.separateAxes = !!i3117[6]
  i3116.space = i3117[7]
  i3116.drag = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3117[8], i3116.drag)
  i3116.multiplyDragByParticleSize = !!i3117[9]
  i3116.multiplyDragByParticleVelocity = !!i3117[10]
  return i3116
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer"] = function (request, data, root) {
  var i3118 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer' )
  var i3119 = data
  request.r(i3119[0], i3119[1], 0, i3118, 'mesh')
  i3118.meshCount = i3119[2]
  i3118.activeVertexStreamsCount = i3119[3]
  i3118.alignment = i3119[4]
  i3118.renderMode = i3119[5]
  i3118.sortMode = i3119[6]
  i3118.lengthScale = i3119[7]
  i3118.velocityScale = i3119[8]
  i3118.cameraVelocityScale = i3119[9]
  i3118.normalDirection = i3119[10]
  i3118.sortingFudge = i3119[11]
  i3118.minParticleSize = i3119[12]
  i3118.maxParticleSize = i3119[13]
  i3118.pivot = new pc.Vec3( i3119[14], i3119[15], i3119[16] )
  request.r(i3119[17], i3119[18], 0, i3118, 'trailMaterial')
  i3118.applyActiveColorSpace = !!i3119[19]
  i3118.enabled = !!i3119[20]
  request.r(i3119[21], i3119[22], 0, i3118, 'sharedMaterial')
  var i3121 = i3119[23]
  var i3120 = []
  for(var i = 0; i < i3121.length; i += 2) {
  request.r(i3121[i + 0], i3121[i + 1], 2, i3120, '')
  }
  i3118.sharedMaterials = i3120
  i3118.receiveShadows = !!i3119[24]
  i3118.shadowCastingMode = i3119[25]
  i3118.sortingLayerID = i3119[26]
  i3118.sortingOrder = i3119[27]
  i3118.lightmapIndex = i3119[28]
  i3118.lightmapSceneIndex = i3119[29]
  i3118.lightmapScaleOffset = new pc.Vec4( i3119[30], i3119[31], i3119[32], i3119[33] )
  i3118.lightProbeUsage = i3119[34]
  i3118.reflectionProbeUsage = i3119[35]
  return i3118
}

Deserializers["ArrayRotationByMovement"] = function (request, data, root) {
  var i3122 = root || request.c( 'ArrayRotationByMovement' )
  var i3123 = data
  var i3125 = i3123[0]
  var i3124 = []
  for(var i = 0; i < i3125.length; i += 2) {
  request.r(i3125[i + 0], i3125[i + 1], 2, i3124, '')
  }
  i3122.objectsToRotate = i3124
  request.r(i3123[1], i3123[2], 0, i3122, 'referenceTransform')
  i3122.movingRight_Rotation = i3123[3]
  i3122.movingLeft_Rotation = i3123[4]
  i3122.rotationOffsets = i3123[5]
  i3122.rotationAxis = i3123[6]
  i3122.smoothRotation = !!i3123[7]
  i3122.smoothSpeed = i3123[8]
  i3122.movementThreshold = i3123[9]
  return i3122
}

Deserializers["ActionOnTap"] = function (request, data, root) {
  var i3126 = root || request.c( 'ActionOnTap' )
  var i3127 = data
  i3126.OnTap = request.d('UnityEngine.Events.UnityEvent', i3127[0], i3126.OnTap)
  return i3126
}

Deserializers["BD_Clamp"] = function (request, data, root) {
  var i3128 = root || request.c( 'BD_Clamp' )
  var i3129 = data
  i3128.ClampX_L = i3129[0]
  i3128.ClampX_H = i3129[1]
  i3128.ClampY_L = i3129[2]
  i3128.ClampY_H = i3129[3]
  return i3128
}

Deserializers["BD_Action"] = function (request, data, root) {
  var i3130 = root || request.c( 'BD_Action' )
  var i3131 = data
  i3130.OnMouseDownEvent = request.d('UnityEngine.Events.UnityEvent', i3131[0], i3130.OnMouseDownEvent)
  i3130.OnMouseUpEvent = request.d('UnityEngine.Events.UnityEvent', i3131[1], i3130.OnMouseUpEvent)
  i3130.setToolLayer = !!i3131[2]
  request.r(i3131[3], i3131[4], 0, i3130, 'tool_SP')
  return i3130
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CircleCollider2D"] = function (request, data, root) {
  var i3132 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CircleCollider2D' )
  var i3133 = data
  i3132.radius = i3133[0]
  i3132.enabled = !!i3133[1]
  i3132.isTrigger = !!i3133[2]
  i3132.usedByEffector = !!i3133[3]
  i3132.density = i3133[4]
  i3132.offset = new pc.Vec2( i3133[5], i3133[6] )
  request.r(i3133[7], i3133[8], 0, i3132, 'material')
  return i3132
}

Deserializers["SoapPourControler"] = function (request, data, root) {
  var i3134 = root || request.c( 'SoapPourControler' )
  var i3135 = data
  i3134.OnProgressComplete = request.d('UnityEngine.Events.UnityEvent', i3135[0], i3134.OnProgressComplete)
  i3134.OnStepComplete = request.d('UnityEngine.Events.UnityEvent', i3135[1], i3134.OnStepComplete)
  request.r(i3135[2], i3135[3], 0, i3134, 'sfxDrop')
  i3134.isInsideTarget = !!i3135[4]
  i3134.isPicked = !!i3135[5]
  request.r(i3135[6], i3135[7], 0, i3134, 'thisTool')
  request.r(i3135[8], i3135[9], 0, i3134, 'targetCol')
  request.r(i3135[10], i3135[11], 0, i3134, 'soapDropPrefab')
  request.r(i3135[12], i3135[13], 0, i3134, 'spawnPoint')
  i3134.spawnInterval = i3135[14]
  i3134.maxDrops = i3135[15]
  request.r(i3135[16], i3135[17], 0, i3134, 'bottleRenderer')
  request.r(i3135[18], i3135[19], 0, i3134, 'fullBottleSprite')
  request.r(i3135[20], i3135[21], 0, i3134, 'halfBottleSprite')
  request.r(i3135[22], i3135[23], 0, i3134, 'emptyBottleSprite')
  request.r(i3135[24], i3135[25], 0, i3134, 'foamRend')
  return i3134
}

Deserializers["_2dxFX_Wave"] = function (request, data, root) {
  var i3136 = root || request.c( '_2dxFX_Wave' )
  var i3137 = data
  request.r(i3137[0], i3137[1], 0, i3136, 'ForceMaterial')
  i3136.ActiveChange = !!i3137[2]
  i3136._Alpha = i3137[3]
  i3136._OffsetX = i3137[4]
  i3136._OffsetY = i3137[5]
  i3136._DistanceX = i3137[6]
  i3136._DistanceY = i3137[7]
  i3136._WaveTimeX = i3137[8]
  i3136._WaveTimeY = i3137[9]
  i3136.AutoPlayWaveX = !!i3137[10]
  i3136.AutoPlaySpeedX = i3137[11]
  i3136.AutoPlayWaveY = !!i3137[12]
  i3136.AutoPlaySpeedY = i3137[13]
  i3136.AutoRandom = !!i3137[14]
  i3136.AutoRandomRange = i3137[15]
  i3136.ShaderChange = i3137[16]
  return i3136
}

Deserializers["InteractableBones"] = function (request, data, root) {
  var i3138 = root || request.c( 'InteractableBones' )
  var i3139 = data
  request.r(i3139[0], i3139[1], 0, i3138, 'Tip')
  i3138.MoveAmount = i3139[2]
  i3138.MoveSpeed = i3139[3]
  i3138.ShakeSpeed = i3139[4]
  i3138.MovementThreshold = i3139[5]
  i3138.MoveX = !!i3139[6]
  i3138.MoveY = !!i3139[7]
  return i3138
}

Deserializers["BD_AnimatorDrag"] = function (request, data, root) {
  var i3140 = root || request.c( 'BD_AnimatorDrag' )
  var i3141 = data
  request.r(i3141[0], i3141[1], 0, i3140, 'BD')
  request.r(i3141[2], i3141[3], 0, i3140, 'anim')
  request.r(i3141[4], i3141[5], 0, i3140, 'Source')
  i3140.Vibration = !!i3141[6]
  i3140.isCompletable = !!i3141[7]
  i3140.completionThreshold = i3141[8]
  i3140.OnComplete = request.d('UnityEngine.Events.UnityEvent', i3141[9], i3140.OnComplete)
  return i3140
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i3142 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i3143 = data
  request.r(i3143[0], i3143[1], 0, i3142, 'clip')
  request.r(i3143[2], i3143[3], 0, i3142, 'outputAudioMixerGroup')
  i3142.playOnAwake = !!i3143[4]
  i3142.loop = !!i3143[5]
  i3142.time = i3143[6]
  i3142.volume = i3143[7]
  i3142.pitch = i3143[8]
  i3142.enabled = !!i3143[9]
  return i3142
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.LineRenderer"] = function (request, data, root) {
  var i3144 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.LineRenderer' )
  var i3145 = data
  i3144.textureMode = i3145[0]
  i3144.alignment = i3145[1]
  i3144.widthCurve = new pc.AnimationCurve( { keys_flow: i3145[2] } )
  i3144.colorGradient = i3145[3] ? new pc.ColorGradient(i3145[3][0], i3145[3][1], i3145[3][2]) : null
  var i3147 = i3145[4]
  var i3146 = []
  for(var i = 0; i < i3147.length; i += 3) {
    i3146.push( new pc.Vec3( i3147[i + 0], i3147[i + 1], i3147[i + 2] ) );
  }
  i3144.positions = i3146
  i3144.positionCount = i3145[5]
  i3144.widthMultiplier = i3145[6]
  i3144.startWidth = i3145[7]
  i3144.endWidth = i3145[8]
  i3144.numCornerVertices = i3145[9]
  i3144.numCapVertices = i3145[10]
  i3144.useWorldSpace = !!i3145[11]
  i3144.loop = !!i3145[12]
  i3144.startColor = new pc.Color(i3145[13], i3145[14], i3145[15], i3145[16])
  i3144.endColor = new pc.Color(i3145[17], i3145[18], i3145[19], i3145[20])
  i3144.generateLightingData = !!i3145[21]
  i3144.enabled = !!i3145[22]
  request.r(i3145[23], i3145[24], 0, i3144, 'sharedMaterial')
  var i3149 = i3145[25]
  var i3148 = []
  for(var i = 0; i < i3149.length; i += 2) {
  request.r(i3149[i + 0], i3149[i + 1], 2, i3148, '')
  }
  i3144.sharedMaterials = i3148
  i3144.receiveShadows = !!i3145[26]
  i3144.shadowCastingMode = i3145[27]
  i3144.sortingLayerID = i3145[28]
  i3144.sortingOrder = i3145[29]
  i3144.lightmapIndex = i3145[30]
  i3144.lightmapSceneIndex = i3145[31]
  i3144.lightmapScaleOffset = new pc.Vec4( i3145[32], i3145[33], i3145[34], i3145[35] )
  i3144.lightProbeUsage = i3145[36]
  i3144.reflectionProbeUsage = i3145[37]
  return i3144
}

Deserializers["RopeController"] = function (request, data, root) {
  var i3150 = root || request.c( 'RopeController' )
  var i3151 = data
  request.r(i3151[0], i3151[1], 0, i3150, 'pointA')
  request.r(i3151[2], i3151[3], 0, i3150, 'pointB')
  i3150.segmentCount = i3151[4]
  i3150.ropeLength = i3151[5]
  i3150.gravity = i3151[6]
  i3150.constraintIterations = i3151[7]
  i3150.ropeWidth = i3151[8]
  return i3150
}

Deserializers["TapandHold_Simple"] = function (request, data, root) {
  var i3152 = root || request.c( 'TapandHold_Simple' )
  var i3153 = data
  request.r(i3153[0], i3153[1], 0, i3152, 'actionSfx')
  i3152.holdDuration = i3153[2]
  i3152.dragThreshold = i3153[3]
  i3152.fadeInOnHold = !!i3153[4]
  i3152.fadeOutOnRelease = !!i3153[5]
  request.r(i3153[6], i3153[7], 0, i3152, 'targetSprite')
  i3152.onHoldComplete = request.d('UnityEngine.Events.UnityEvent', i3153[8], i3152.onHoldComplete)
  i3152.currentProgress = i3153[9]
  i3152.isHolding = !!i3153[10]
  i3152.isCompleted = !!i3153[11]
  request.r(i3153[12], i3153[13], 0, i3152, 'thisTool')
  return i3152
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh"] = function (request, data, root) {
  var i3154 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh' )
  var i3155 = data
  i3154.name = i3155[0]
  i3154.halfPrecision = !!i3155[1]
  i3154.useSimplification = !!i3155[2]
  i3154.useUInt32IndexFormat = !!i3155[3]
  i3154.vertexCount = i3155[4]
  i3154.aabb = i3155[5]
  var i3157 = i3155[6]
  var i3156 = []
  for(var i = 0; i < i3157.length; i += 1) {
    i3156.push( !!i3157[i + 0] );
  }
  i3154.streams = i3156
  i3154.vertices = i3155[7]
  var i3159 = i3155[8]
  var i3158 = []
  for(var i = 0; i < i3159.length; i += 1) {
    i3158.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh', i3159[i + 0]) );
  }
  i3154.subMeshes = i3158
  var i3161 = i3155[9]
  var i3160 = []
  for(var i = 0; i < i3161.length; i += 16) {
    i3160.push( new pc.Mat4().setData(i3161[i + 0], i3161[i + 1], i3161[i + 2], i3161[i + 3],  i3161[i + 4], i3161[i + 5], i3161[i + 6], i3161[i + 7],  i3161[i + 8], i3161[i + 9], i3161[i + 10], i3161[i + 11],  i3161[i + 12], i3161[i + 13], i3161[i + 14], i3161[i + 15]) );
  }
  i3154.bindposes = i3160
  var i3163 = i3155[10]
  var i3162 = []
  for(var i = 0; i < i3163.length; i += 1) {
    i3162.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape', i3163[i + 0]) );
  }
  i3154.blendShapes = i3162
  return i3154
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh"] = function (request, data, root) {
  var i3168 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh' )
  var i3169 = data
  i3168.triangles = i3169[0]
  return i3168
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape"] = function (request, data, root) {
  var i3174 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape' )
  var i3175 = data
  i3174.name = i3175[0]
  var i3177 = i3175[1]
  var i3176 = []
  for(var i = 0; i < i3177.length; i += 1) {
    i3176.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame', i3177[i + 0]) );
  }
  i3174.frames = i3176
  return i3174
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Cubemap"] = function (request, data, root) {
  var i3178 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Cubemap' )
  var i3179 = data
  i3178.name = i3179[0]
  i3178.atlasId = i3179[1]
  i3178.mipmapCount = i3179[2]
  i3178.hdr = !!i3179[3]
  i3178.size = i3179[4]
  i3178.anisoLevel = i3179[5]
  i3178.filterMode = i3179[6]
  var i3181 = i3179[7]
  var i3180 = []
  for(var i = 0; i < i3181.length; i += 4) {
    i3180.push( UnityEngine.Rect.MinMaxRect(i3181[i + 0], i3181[i + 1], i3181[i + 2], i3181[i + 3]) );
  }
  i3178.rects = i3180
  i3178.wrapU = i3179[8]
  i3178.wrapV = i3179[9]
  return i3178
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i3184 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i3185 = data
  i3184.name = i3185[0]
  i3184.index = i3185[1]
  i3184.startup = !!i3185[2]
  return i3184
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i3186 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i3187 = data
  i3186.aspect = i3187[0]
  i3186.orthographic = !!i3187[1]
  i3186.orthographicSize = i3187[2]
  i3186.backgroundColor = new pc.Color(i3187[3], i3187[4], i3187[5], i3187[6])
  i3186.nearClipPlane = i3187[7]
  i3186.farClipPlane = i3187[8]
  i3186.fieldOfView = i3187[9]
  i3186.depth = i3187[10]
  i3186.clearFlags = i3187[11]
  i3186.cullingMask = i3187[12]
  i3186.rect = i3187[13]
  request.r(i3187[14], i3187[15], 0, i3186, 'targetTexture')
  i3186.usePhysicalProperties = !!i3187[16]
  i3186.focalLength = i3187[17]
  i3186.sensorSize = new pc.Vec2( i3187[18], i3187[19] )
  i3186.lensShift = new pc.Vec2( i3187[20], i3187[21] )
  i3186.gateFit = i3187[22]
  i3186.commandBufferCount = i3187[23]
  i3186.cameraType = i3187[24]
  i3186.enabled = !!i3187[25]
  return i3186
}

Deserializers["CameraController"] = function (request, data, root) {
  var i3188 = root || request.c( 'CameraController' )
  var i3189 = data
  request.r(i3189[0], i3189[1], 0, i3188, 'cam')
  i3188.defaultPosition = new pc.Vec3( i3189[2], i3189[3], i3189[4] )
  i3188.defaultSize = i3189[5]
  i3188.defaultFOV = i3189[6]
  i3188.defaultDuration = i3189[7]
  i3188.defaultEase = i3189[8]
  return i3188
}

Deserializers["MusicSource"] = function (request, data, root) {
  var i3190 = root || request.c( 'MusicSource' )
  var i3191 = data
  request.r(i3191[0], i3191[1], 0, i3190, 'source')
  return i3190
}

Deserializers["UI_Manager"] = function (request, data, root) {
  var i3192 = root || request.c( 'UI_Manager' )
  var i3193 = data
  i3192.levelCompleted = !!i3193[0]
  i3192.isPauseActive = !!i3193[1]
  i3192.loadIndex = i3193[2]
  request.r(i3193[3], i3193[4], 0, i3192, 'removeAdsButton')
  request.r(i3193[5], i3193[6], 0, i3192, 'pauseButton')
  request.r(i3193[7], i3193[8], 0, i3192, 'Fade_Img')
  request.r(i3193[9], i3193[10], 0, i3192, 'TopBarAnim')
  request.r(i3193[11], i3193[12], 0, i3192, 'MainPanel')
  request.r(i3193[13], i3193[14], 0, i3192, 'PausePanel')
  request.r(i3193[15], i3193[16], 0, i3192, 'PausePopUp')
  request.r(i3193[17], i3193[18], 0, i3192, 'PauseCanvasGroup')
  request.r(i3193[19], i3193[20], 0, i3192, 'RateUsPanel')
  request.r(i3193[21], i3193[22], 0, i3192, 'RateUsPopUp')
  request.r(i3193[23], i3193[24], 0, i3192, 'RemoveAdsPanel')
  request.r(i3193[25], i3193[26], 0, i3192, 'RemoveAdsPopUp')
  request.r(i3193[27], i3193[28], 0, i3192, 'RemoveAdsCanvasGroup')
  var i3195 = i3193[29]
  var i3194 = []
  for(var i = 0; i < i3195.length; i += 2) {
  request.r(i3195[i + 0], i3195[i + 1], 2, i3194, '')
  }
  i3192.RemoveAdsAnims = i3194
  request.r(i3193[30], i3193[31], 0, i3192, 'CompletePanel')
  request.r(i3193[32], i3193[33], 0, i3192, 'LevelIcon')
  request.r(i3193[34], i3193[35], 0, i3192, 'CompleteParticles')
  request.r(i3193[36], i3193[37], 0, i3192, 'progressBar')
  request.r(i3193[38], i3193[39], 0, i3192, 'progressText')
  request.r(i3193[40], i3193[41], 0, i3192, 'toolIcon1')
  request.r(i3193[42], i3193[43], 0, i3192, 'toolIcon2')
  request.r(i3193[44], i3193[45], 0, i3192, 'toolIcon3')
  request.r(i3193[46], i3193[47], 0, i3192, 'target1')
  request.r(i3193[48], i3193[49], 0, i3192, 'target2')
  i3192.toolMoveDuration = i3193[50]
  i3192.currentIndex = i3193[51]
  var i3197 = i3193[52]
  var i3196 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Sprite')))
  for(var i = 0; i < i3197.length; i += 2) {
  request.r(i3197[i + 0], i3197[i + 1], 1, i3196, '')
  }
  i3192.allTools = i3196
  request.r(i3193[53], i3193[54], 0, i3192, 'clockProgress')
  request.r(i3193[55], i3193[56], 0, i3192, 'clockProgressFill')
  request.r(i3193[57], i3193[58], 0, i3192, 'clockAudio')
  i3192.moveDistance = i3193[59]
  i3192.animationDuration = i3193[60]
  i3192.greyBgChildName = i3193[61]
  i3192.pushOffset = i3193[62]
  return i3192
}

Deserializers["GameManagerPlayable"] = function (request, data, root) {
  var i3200 = root || request.c( 'GameManagerPlayable' )
  var i3201 = data
  request.r(i3201[0], i3201[1], 0, i3200, 'DefaultMat')
  request.r(i3201[2], i3201[3], 0, i3200, 'BG_Music')
  request.r(i3201[4], i3201[5], 0, i3200, 'restoreEffectShader')
  request.r(i3201[6], i3201[7], 0, i3200, 'stickerEffectShader')
  i3200.isComplete = !!i3201[8]
  i3200.isPaused = !!i3201[9]
  request.r(i3201[10], i3201[11], 0, i3200, 'currentLevel')
  return i3200
}

Deserializers["AudioController"] = function (request, data, root) {
  var i3202 = root || request.c( 'AudioController' )
  var i3203 = data
  request.r(i3203[0], i3203[1], 0, i3202, 'MainMixer')
  request.r(i3203[2], i3203[3], 0, i3202, 'UiClick')
  request.r(i3203[4], i3203[5], 0, i3202, 'UiClickSource')
  var i3205 = i3203[6]
  var i3204 = []
  for(var i = 0; i < i3205.length; i += 2) {
  request.r(i3205[i + 0], i3205[i + 1], 2, i3204, '')
  }
  i3202.SfxSources = i3204
  var i3207 = i3203[7]
  var i3206 = []
  for(var i = 0; i < i3207.length; i += 2) {
  request.r(i3207[i + 0], i3207[i + 1], 2, i3206, '')
  }
  i3202.AllClips = i3206
  return i3202
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i3210 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i3211 = data
  i3210.pivot = new pc.Vec2( i3211[0], i3211[1] )
  i3210.anchorMin = new pc.Vec2( i3211[2], i3211[3] )
  i3210.anchorMax = new pc.Vec2( i3211[4], i3211[5] )
  i3210.sizeDelta = new pc.Vec2( i3211[6], i3211[7] )
  i3210.anchoredPosition3D = new pc.Vec3( i3211[8], i3211[9], i3211[10] )
  i3210.rotation = new pc.Quat(i3211[11], i3211[12], i3211[13], i3211[14])
  i3210.scale = new pc.Vec3( i3211[15], i3211[16], i3211[17] )
  return i3210
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i3212 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i3213 = data
  i3212.planeDistance = i3213[0]
  i3212.referencePixelsPerUnit = i3213[1]
  i3212.isFallbackOverlay = !!i3213[2]
  i3212.renderMode = i3213[3]
  i3212.renderOrder = i3213[4]
  i3212.sortingLayerName = i3213[5]
  i3212.sortingOrder = i3213[6]
  i3212.scaleFactor = i3213[7]
  request.r(i3213[8], i3213[9], 0, i3212, 'worldCamera')
  i3212.overrideSorting = !!i3213[10]
  i3212.pixelPerfect = !!i3213[11]
  i3212.targetDisplay = i3213[12]
  i3212.overridePixelPerfect = !!i3213[13]
  i3212.enabled = !!i3213[14]
  return i3212
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i3214 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i3215 = data
  i3214.m_UiScaleMode = i3215[0]
  i3214.m_ReferencePixelsPerUnit = i3215[1]
  i3214.m_ScaleFactor = i3215[2]
  i3214.m_ReferenceResolution = new pc.Vec2( i3215[3], i3215[4] )
  i3214.m_ScreenMatchMode = i3215[5]
  i3214.m_MatchWidthOrHeight = i3215[6]
  i3214.m_PhysicalUnit = i3215[7]
  i3214.m_FallbackScreenDPI = i3215[8]
  i3214.m_DefaultSpriteDPI = i3215[9]
  i3214.m_DynamicPixelsPerUnit = i3215[10]
  i3214.m_PresetInfoIsWorld = !!i3215[11]
  return i3214
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i3216 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i3217 = data
  i3216.m_IgnoreReversedGraphics = !!i3217[0]
  i3216.m_BlockingObjects = i3217[1]
  i3216.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i3217[2] )
  return i3216
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i3218 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i3219 = data
  i3218.cullTransparentMesh = !!i3219[0]
  return i3218
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i3220 = root || request.c( 'UnityEngine.UI.Image' )
  var i3221 = data
  request.r(i3221[0], i3221[1], 0, i3220, 'm_Sprite')
  i3220.m_Type = i3221[2]
  i3220.m_PreserveAspect = !!i3221[3]
  i3220.m_FillCenter = !!i3221[4]
  i3220.m_FillMethod = i3221[5]
  i3220.m_FillAmount = i3221[6]
  i3220.m_FillClockwise = !!i3221[7]
  i3220.m_FillOrigin = i3221[8]
  i3220.m_UseSpriteMesh = !!i3221[9]
  i3220.m_PixelsPerUnitMultiplier = i3221[10]
  request.r(i3221[11], i3221[12], 0, i3220, 'm_Material')
  i3220.m_Maskable = !!i3221[13]
  i3220.m_Color = new pc.Color(i3221[14], i3221[15], i3221[16], i3221[17])
  i3220.m_RaycastTarget = !!i3221[18]
  i3220.m_RaycastPadding = new pc.Vec4( i3221[19], i3221[20], i3221[21], i3221[22] )
  return i3220
}

Deserializers["UnityEngine.UI.Text"] = function (request, data, root) {
  var i3222 = root || request.c( 'UnityEngine.UI.Text' )
  var i3223 = data
  i3222.m_FontData = request.d('UnityEngine.UI.FontData', i3223[0], i3222.m_FontData)
  i3222.m_Text = i3223[1]
  request.r(i3223[2], i3223[3], 0, i3222, 'm_Material')
  i3222.m_Maskable = !!i3223[4]
  i3222.m_Color = new pc.Color(i3223[5], i3223[6], i3223[7], i3223[8])
  i3222.m_RaycastTarget = !!i3223[9]
  i3222.m_RaycastPadding = new pc.Vec4( i3223[10], i3223[11], i3223[12], i3223[13] )
  return i3222
}

Deserializers["UnityEngine.UI.FontData"] = function (request, data, root) {
  var i3224 = root || request.c( 'UnityEngine.UI.FontData' )
  var i3225 = data
  request.r(i3225[0], i3225[1], 0, i3224, 'm_Font')
  i3224.m_FontSize = i3225[2]
  i3224.m_FontStyle = i3225[3]
  i3224.m_BestFit = !!i3225[4]
  i3224.m_MinSize = i3225[5]
  i3224.m_MaxSize = i3225[6]
  i3224.m_Alignment = i3225[7]
  i3224.m_AlignByGeometry = !!i3225[8]
  i3224.m_RichText = !!i3225[9]
  i3224.m_HorizontalOverflow = i3225[10]
  i3224.m_VerticalOverflow = i3225[11]
  i3224.m_LineSpacing = i3225[12]
  return i3224
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i3226 = root || request.c( 'UnityEngine.UI.Button' )
  var i3227 = data
  i3226.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i3227[0], i3226.m_OnClick)
  i3226.m_Navigation = request.d('UnityEngine.UI.Navigation', i3227[1], i3226.m_Navigation)
  i3226.m_Transition = i3227[2]
  i3226.m_Colors = request.d('UnityEngine.UI.ColorBlock', i3227[3], i3226.m_Colors)
  i3226.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i3227[4], i3226.m_SpriteState)
  i3226.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i3227[5], i3226.m_AnimationTriggers)
  i3226.m_Interactable = !!i3227[6]
  request.r(i3227[7], i3227[8], 0, i3226, 'm_TargetGraphic')
  return i3226
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i3228 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i3229 = data
  i3228.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i3229[0], i3228.m_PersistentCalls)
  return i3228
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i3230 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i3231 = data
  i3230.m_Mode = i3231[0]
  i3230.m_WrapAround = !!i3231[1]
  request.r(i3231[2], i3231[3], 0, i3230, 'm_SelectOnUp')
  request.r(i3231[4], i3231[5], 0, i3230, 'm_SelectOnDown')
  request.r(i3231[6], i3231[7], 0, i3230, 'm_SelectOnLeft')
  request.r(i3231[8], i3231[9], 0, i3230, 'm_SelectOnRight')
  return i3230
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i3232 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i3233 = data
  i3232.m_NormalColor = new pc.Color(i3233[0], i3233[1], i3233[2], i3233[3])
  i3232.m_HighlightedColor = new pc.Color(i3233[4], i3233[5], i3233[6], i3233[7])
  i3232.m_PressedColor = new pc.Color(i3233[8], i3233[9], i3233[10], i3233[11])
  i3232.m_SelectedColor = new pc.Color(i3233[12], i3233[13], i3233[14], i3233[15])
  i3232.m_DisabledColor = new pc.Color(i3233[16], i3233[17], i3233[18], i3233[19])
  i3232.m_ColorMultiplier = i3233[20]
  i3232.m_FadeDuration = i3233[21]
  return i3232
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i3234 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i3235 = data
  request.r(i3235[0], i3235[1], 0, i3234, 'm_HighlightedSprite')
  request.r(i3235[2], i3235[3], 0, i3234, 'm_PressedSprite')
  request.r(i3235[4], i3235[5], 0, i3234, 'm_SelectedSprite')
  request.r(i3235[6], i3235[7], 0, i3234, 'm_DisabledSprite')
  return i3234
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i3236 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i3237 = data
  i3236.m_NormalTrigger = i3237[0]
  i3236.m_HighlightedTrigger = i3237[1]
  i3236.m_PressedTrigger = i3237[2]
  i3236.m_SelectedTrigger = i3237[3]
  i3236.m_DisabledTrigger = i3237[4]
  return i3236
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i3238 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i3239 = data
  request.r(i3239[0], i3239[1], 0, i3238, 'm_FirstSelected')
  i3238.m_sendNavigationEvents = !!i3239[2]
  i3238.m_DragThreshold = i3239[3]
  return i3238
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i3240 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i3241 = data
  i3240.m_HorizontalAxis = i3241[0]
  i3240.m_VerticalAxis = i3241[1]
  i3240.m_SubmitButton = i3241[2]
  i3240.m_CancelButton = i3241[3]
  i3240.m_InputActionsPerSecond = i3241[4]
  i3240.m_RepeatDelay = i3241[5]
  i3240.m_ForceModuleActive = !!i3241[6]
  i3240.m_SendPointerHoverToParent = !!i3241[7]
  return i3240
}

Deserializers["PlayableHudRuntime"] = function (request, data, root) {
  var i3242 = root || request.c( 'PlayableHudRuntime' )
  var i3243 = data
  return i3242
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i3244 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i3245 = data
  i3244.ambientIntensity = i3245[0]
  i3244.reflectionIntensity = i3245[1]
  i3244.ambientMode = i3245[2]
  i3244.ambientLight = new pc.Color(i3245[3], i3245[4], i3245[5], i3245[6])
  i3244.ambientSkyColor = new pc.Color(i3245[7], i3245[8], i3245[9], i3245[10])
  i3244.ambientGroundColor = new pc.Color(i3245[11], i3245[12], i3245[13], i3245[14])
  i3244.ambientEquatorColor = new pc.Color(i3245[15], i3245[16], i3245[17], i3245[18])
  i3244.fogColor = new pc.Color(i3245[19], i3245[20], i3245[21], i3245[22])
  i3244.fogEndDistance = i3245[23]
  i3244.fogStartDistance = i3245[24]
  i3244.fogDensity = i3245[25]
  i3244.fog = !!i3245[26]
  request.r(i3245[27], i3245[28], 0, i3244, 'skybox')
  i3244.fogMode = i3245[29]
  var i3247 = i3245[30]
  var i3246 = []
  for(var i = 0; i < i3247.length; i += 1) {
    i3246.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i3247[i + 0]) );
  }
  i3244.lightmaps = i3246
  i3244.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i3245[31], i3244.lightProbes)
  i3244.lightmapsMode = i3245[32]
  i3244.mixedBakeMode = i3245[33]
  i3244.environmentLightingMode = i3245[34]
  i3244.ambientProbe = new pc.SphericalHarmonicsL2(i3245[35])
  request.r(i3245[36], i3245[37], 0, i3244, 'customReflection')
  request.r(i3245[38], i3245[39], 0, i3244, 'defaultReflection')
  i3244.defaultReflectionMode = i3245[40]
  i3244.defaultReflectionResolution = i3245[41]
  i3244.sunLightObjectId = i3245[42]
  i3244.pixelLightCount = i3245[43]
  i3244.defaultReflectionHDR = !!i3245[44]
  i3244.hasLightDataAsset = !!i3245[45]
  i3244.hasManualGenerate = !!i3245[46]
  return i3244
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i3250 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i3251 = data
  request.r(i3251[0], i3251[1], 0, i3250, 'lightmapColor')
  request.r(i3251[2], i3251[3], 0, i3250, 'lightmapDirection')
  request.r(i3251[4], i3251[5], 0, i3250, 'shadowMask')
  return i3250
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i3252 = root || new UnityEngine.LightProbes()
  var i3253 = data
  return i3252
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i3258 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i3259 = data
  var i3261 = i3259[0]
  var i3260 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i3261.length; i += 1) {
    i3260.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i3261[i + 0]));
  }
  i3258.ShaderCompilationErrors = i3260
  i3258.name = i3259[1]
  i3258.guid = i3259[2]
  var i3263 = i3259[3]
  var i3262 = []
  for(var i = 0; i < i3263.length; i += 1) {
    i3262.push( i3263[i + 0] );
  }
  i3258.shaderDefinedKeywords = i3262
  var i3265 = i3259[4]
  var i3264 = []
  for(var i = 0; i < i3265.length; i += 1) {
    i3264.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i3265[i + 0]) );
  }
  i3258.passes = i3264
  var i3267 = i3259[5]
  var i3266 = []
  for(var i = 0; i < i3267.length; i += 1) {
    i3266.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i3267[i + 0]) );
  }
  i3258.usePasses = i3266
  var i3269 = i3259[6]
  var i3268 = []
  for(var i = 0; i < i3269.length; i += 1) {
    i3268.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i3269[i + 0]) );
  }
  i3258.defaultParameterValues = i3268
  request.r(i3259[7], i3259[8], 0, i3258, 'unityFallbackShader')
  i3258.readDepth = !!i3259[9]
  i3258.hasDepthOnlyPass = !!i3259[10]
  i3258.isCreatedByShaderGraph = !!i3259[11]
  i3258.disableBatching = !!i3259[12]
  i3258.compiled = !!i3259[13]
  return i3258
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i3272 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i3273 = data
  i3272.shaderName = i3273[0]
  i3272.errorMessage = i3273[1]
  return i3272
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i3278 = root || new pc.UnityShaderPass()
  var i3279 = data
  i3278.id = i3279[0]
  i3278.subShaderIndex = i3279[1]
  i3278.name = i3279[2]
  i3278.passType = i3279[3]
  i3278.grabPassTextureName = i3279[4]
  i3278.usePass = !!i3279[5]
  i3278.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3279[6], i3278.zTest)
  i3278.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3279[7], i3278.zWrite)
  i3278.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3279[8], i3278.culling)
  i3278.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i3279[9], i3278.blending)
  i3278.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i3279[10], i3278.alphaBlending)
  i3278.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3279[11], i3278.colorWriteMask)
  i3278.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3279[12], i3278.offsetUnits)
  i3278.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3279[13], i3278.offsetFactor)
  i3278.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3279[14], i3278.stencilRef)
  i3278.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3279[15], i3278.stencilReadMask)
  i3278.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3279[16], i3278.stencilWriteMask)
  i3278.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i3279[17], i3278.stencilOp)
  i3278.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i3279[18], i3278.stencilOpFront)
  i3278.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i3279[19], i3278.stencilOpBack)
  var i3281 = i3279[20]
  var i3280 = []
  for(var i = 0; i < i3281.length; i += 1) {
    i3280.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i3281[i + 0]) );
  }
  i3278.tags = i3280
  var i3283 = i3279[21]
  var i3282 = []
  for(var i = 0; i < i3283.length; i += 1) {
    i3282.push( i3283[i + 0] );
  }
  i3278.passDefinedKeywords = i3282
  var i3285 = i3279[22]
  var i3284 = []
  for(var i = 0; i < i3285.length; i += 1) {
    i3284.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i3285[i + 0]) );
  }
  i3278.passDefinedKeywordGroups = i3284
  var i3287 = i3279[23]
  var i3286 = []
  for(var i = 0; i < i3287.length; i += 1) {
    i3286.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i3287[i + 0]) );
  }
  i3278.variants = i3286
  var i3289 = i3279[24]
  var i3288 = []
  for(var i = 0; i < i3289.length; i += 1) {
    i3288.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i3289[i + 0]) );
  }
  i3278.excludedVariants = i3288
  i3278.hasDepthReader = !!i3279[25]
  return i3278
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i3290 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i3291 = data
  i3290.val = i3291[0]
  i3290.name = i3291[1]
  return i3290
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i3292 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i3293 = data
  i3292.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3293[0], i3292.src)
  i3292.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3293[1], i3292.dst)
  i3292.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3293[2], i3292.op)
  return i3292
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i3294 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i3295 = data
  i3294.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3295[0], i3294.pass)
  i3294.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3295[1], i3294.fail)
  i3294.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3295[2], i3294.zFail)
  i3294.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3295[3], i3294.comp)
  return i3294
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i3298 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i3299 = data
  i3298.name = i3299[0]
  i3298.value = i3299[1]
  return i3298
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i3302 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i3303 = data
  var i3305 = i3303[0]
  var i3304 = []
  for(var i = 0; i < i3305.length; i += 1) {
    i3304.push( i3305[i + 0] );
  }
  i3302.keywords = i3304
  i3302.hasDiscard = !!i3303[1]
  return i3302
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i3308 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i3309 = data
  i3308.passId = i3309[0]
  i3308.subShaderIndex = i3309[1]
  var i3311 = i3309[2]
  var i3310 = []
  for(var i = 0; i < i3311.length; i += 1) {
    i3310.push( i3311[i + 0] );
  }
  i3308.keywords = i3310
  i3308.vertexProgram = i3309[3]
  i3308.fragmentProgram = i3309[4]
  i3308.exportedForWebGl2 = !!i3309[5]
  i3308.readDepth = !!i3309[6]
  return i3308
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i3314 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i3315 = data
  request.r(i3315[0], i3315[1], 0, i3314, 'shader')
  i3314.pass = i3315[2]
  return i3314
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i3318 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i3319 = data
  i3318.name = i3319[0]
  i3318.type = i3319[1]
  i3318.value = new pc.Vec4( i3319[2], i3319[3], i3319[4], i3319[5] )
  i3318.textureValue = i3319[6]
  i3318.shaderPropertyFlag = i3319[7]
  return i3318
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i3320 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i3321 = data
  i3320.name = i3321[0]
  request.r(i3321[1], i3321[2], 0, i3320, 'texture')
  i3320.aabb = i3321[3]
  i3320.vertices = i3321[4]
  i3320.triangles = i3321[5]
  i3320.textureRect = UnityEngine.Rect.MinMaxRect(i3321[6], i3321[7], i3321[8], i3321[9])
  i3320.packedRect = UnityEngine.Rect.MinMaxRect(i3321[10], i3321[11], i3321[12], i3321[13])
  i3320.border = new pc.Vec4( i3321[14], i3321[15], i3321[16], i3321[17] )
  i3320.transparency = i3321[18]
  i3320.bounds = i3321[19]
  i3320.pixelsPerUnit = i3321[20]
  i3320.textureWidth = i3321[21]
  i3320.textureHeight = i3321[22]
  i3320.nativeSize = new pc.Vec2( i3321[23], i3321[24] )
  i3320.pivot = new pc.Vec2( i3321[25], i3321[26] )
  i3320.textureRectOffset = new pc.Vec2( i3321[27], i3321[28] )
  return i3320
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i3322 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i3323 = data
  i3322.name = i3323[0]
  return i3322
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip"] = function (request, data, root) {
  var i3324 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip' )
  var i3325 = data
  i3324.name = i3325[0]
  i3324.wrapMode = i3325[1]
  i3324.isLooping = !!i3325[2]
  i3324.length = i3325[3]
  var i3327 = i3325[4]
  var i3326 = []
  for(var i = 0; i < i3327.length; i += 1) {
    i3326.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve', i3327[i + 0]) );
  }
  i3324.curves = i3326
  var i3329 = i3325[5]
  var i3328 = []
  for(var i = 0; i < i3329.length; i += 1) {
    i3328.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent', i3329[i + 0]) );
  }
  i3324.events = i3328
  i3324.halfPrecision = !!i3325[6]
  i3324._frameRate = i3325[7]
  i3324.localBounds = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds', i3325[8], i3324.localBounds)
  i3324.hasMuscleCurves = !!i3325[9]
  var i3331 = i3325[10]
  var i3330 = []
  for(var i = 0; i < i3331.length; i += 1) {
    i3330.push( i3331[i + 0] );
  }
  i3324.clipMuscleConstant = i3330
  i3324.clipBindingConstant = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant', i3325[11], i3324.clipBindingConstant)
  return i3324
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve"] = function (request, data, root) {
  var i3334 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve' )
  var i3335 = data
  i3334.path = i3335[0]
  i3334.hash = i3335[1]
  i3334.componentType = i3335[2]
  i3334.property = i3335[3]
  i3334.keys = i3335[4]
  var i3337 = i3335[5]
  var i3336 = []
  for(var i = 0; i < i3337.length; i += 1) {
    i3336.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey', i3337[i + 0]) );
  }
  i3334.objectReferenceKeys = i3336
  return i3334
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey"] = function (request, data, root) {
  var i3340 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey' )
  var i3341 = data
  i3340.time = i3341[0]
  request.r(i3341[1], i3341[2], 0, i3340, 'value')
  return i3340
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent"] = function (request, data, root) {
  var i3344 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent' )
  var i3345 = data
  i3344.functionName = i3345[0]
  i3344.floatParameter = i3345[1]
  i3344.intParameter = i3345[2]
  i3344.stringParameter = i3345[3]
  request.r(i3345[4], i3345[5], 0, i3344, 'objectReferenceParameter')
  i3344.time = i3345[6]
  return i3344
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds"] = function (request, data, root) {
  var i3346 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds' )
  var i3347 = data
  i3346.center = new pc.Vec3( i3347[0], i3347[1], i3347[2] )
  i3346.extends = new pc.Vec3( i3347[3], i3347[4], i3347[5] )
  return i3346
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant"] = function (request, data, root) {
  var i3350 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant' )
  var i3351 = data
  var i3353 = i3351[0]
  var i3352 = []
  for(var i = 0; i < i3353.length; i += 1) {
    i3352.push( i3353[i + 0] );
  }
  i3350.genericBindings = i3352
  var i3355 = i3351[1]
  var i3354 = []
  for(var i = 0; i < i3355.length; i += 1) {
    i3354.push( i3355[i + 0] );
  }
  i3350.pptrCurveMapping = i3354
  return i3350
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i3356 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i3357 = data
  i3356.name = i3357[0]
  i3356.ascent = i3357[1]
  i3356.originalLineHeight = i3357[2]
  i3356.fontSize = i3357[3]
  var i3359 = i3357[4]
  var i3358 = []
  for(var i = 0; i < i3359.length; i += 1) {
    i3358.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i3359[i + 0]) );
  }
  i3356.characterInfo = i3358
  request.r(i3357[5], i3357[6], 0, i3356, 'texture')
  i3356.originalFontSize = i3357[7]
  return i3356
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i3362 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i3363 = data
  i3362.index = i3363[0]
  i3362.advance = i3363[1]
  i3362.bearing = i3363[2]
  i3362.glyphWidth = i3363[3]
  i3362.glyphHeight = i3363[4]
  i3362.minX = i3363[5]
  i3362.maxX = i3363[6]
  i3362.minY = i3363[7]
  i3362.maxY = i3363[8]
  i3362.uvBottomLeftX = i3363[9]
  i3362.uvBottomLeftY = i3363[10]
  i3362.uvBottomRightX = i3363[11]
  i3362.uvBottomRightY = i3363[12]
  i3362.uvTopLeftX = i3363[13]
  i3362.uvTopLeftY = i3363[14]
  i3362.uvTopRightX = i3363[15]
  i3362.uvTopRightY = i3363[16]
  return i3362
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController"] = function (request, data, root) {
  var i3364 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController' )
  var i3365 = data
  i3364.name = i3365[0]
  var i3367 = i3365[1]
  var i3366 = []
  for(var i = 0; i < i3367.length; i += 1) {
    i3366.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer', i3367[i + 0]) );
  }
  i3364.layers = i3366
  var i3369 = i3365[2]
  var i3368 = []
  for(var i = 0; i < i3369.length; i += 1) {
    i3368.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter', i3369[i + 0]) );
  }
  i3364.parameters = i3368
  i3364.animationClips = i3365[3]
  i3364.avatarUnsupported = i3365[4]
  return i3364
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer"] = function (request, data, root) {
  var i3372 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer' )
  var i3373 = data
  i3372.name = i3373[0]
  i3372.defaultWeight = i3373[1]
  i3372.blendingMode = i3373[2]
  i3372.avatarMask = i3373[3]
  i3372.syncedLayerIndex = i3373[4]
  i3372.syncedLayerAffectsTiming = !!i3373[5]
  i3372.syncedLayers = i3373[6]
  i3372.stateMachine = request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i3373[7], i3372.stateMachine)
  return i3372
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine"] = function (request, data, root) {
  var i3374 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine' )
  var i3375 = data
  i3374.id = i3375[0]
  i3374.name = i3375[1]
  i3374.path = i3375[2]
  var i3377 = i3375[3]
  var i3376 = []
  for(var i = 0; i < i3377.length; i += 1) {
    i3376.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState', i3377[i + 0]) );
  }
  i3374.states = i3376
  var i3379 = i3375[4]
  var i3378 = []
  for(var i = 0; i < i3379.length; i += 1) {
    i3378.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i3379[i + 0]) );
  }
  i3374.machines = i3378
  var i3381 = i3375[5]
  var i3380 = []
  for(var i = 0; i < i3381.length; i += 1) {
    i3380.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i3381[i + 0]) );
  }
  i3374.entryStateTransitions = i3380
  var i3383 = i3375[6]
  var i3382 = []
  for(var i = 0; i < i3383.length; i += 1) {
    i3382.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i3383[i + 0]) );
  }
  i3374.exitStateTransitions = i3382
  var i3385 = i3375[7]
  var i3384 = []
  for(var i = 0; i < i3385.length; i += 1) {
    i3384.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i3385[i + 0]) );
  }
  i3374.anyStateTransitions = i3384
  i3374.defaultStateId = i3375[8]
  return i3374
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState"] = function (request, data, root) {
  var i3388 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState' )
  var i3389 = data
  i3388.id = i3389[0]
  i3388.name = i3389[1]
  i3388.cycleOffset = i3389[2]
  i3388.cycleOffsetParameter = i3389[3]
  i3388.cycleOffsetParameterActive = !!i3389[4]
  i3388.mirror = !!i3389[5]
  i3388.mirrorParameter = i3389[6]
  i3388.mirrorParameterActive = !!i3389[7]
  i3388.motionId = i3389[8]
  i3388.nameHash = i3389[9]
  i3388.fullPathHash = i3389[10]
  i3388.speed = i3389[11]
  i3388.speedParameter = i3389[12]
  i3388.speedParameterActive = !!i3389[13]
  i3388.tag = i3389[14]
  i3388.tagHash = i3389[15]
  i3388.writeDefaultValues = !!i3389[16]
  var i3391 = i3389[17]
  var i3390 = []
  for(var i = 0; i < i3391.length; i += 2) {
  request.r(i3391[i + 0], i3391[i + 1], 2, i3390, '')
  }
  i3388.behaviours = i3390
  var i3393 = i3389[18]
  var i3392 = []
  for(var i = 0; i < i3393.length; i += 1) {
    i3392.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i3393[i + 0]) );
  }
  i3388.transitions = i3392
  return i3388
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition"] = function (request, data, root) {
  var i3398 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition' )
  var i3399 = data
  i3398.fullPath = i3399[0]
  i3398.canTransitionToSelf = !!i3399[1]
  i3398.duration = i3399[2]
  i3398.exitTime = i3399[3]
  i3398.hasExitTime = !!i3399[4]
  i3398.hasFixedDuration = !!i3399[5]
  i3398.interruptionSource = i3399[6]
  i3398.offset = i3399[7]
  i3398.orderedInterruption = !!i3399[8]
  i3398.destinationStateId = i3399[9]
  i3398.isExit = !!i3399[10]
  i3398.mute = !!i3399[11]
  i3398.solo = !!i3399[12]
  var i3401 = i3399[13]
  var i3400 = []
  for(var i = 0; i < i3401.length; i += 1) {
    i3400.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i3401[i + 0]) );
  }
  i3398.conditions = i3400
  return i3398
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition"] = function (request, data, root) {
  var i3406 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition' )
  var i3407 = data
  i3406.destinationStateId = i3407[0]
  i3406.isExit = !!i3407[1]
  i3406.mute = !!i3407[2]
  i3406.solo = !!i3407[3]
  var i3409 = i3407[4]
  var i3408 = []
  for(var i = 0; i < i3409.length; i += 1) {
    i3408.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i3409[i + 0]) );
  }
  i3406.conditions = i3408
  return i3406
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition"] = function (request, data, root) {
  var i3412 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition' )
  var i3413 = data
  i3412.mode = i3413[0]
  i3412.parameter = i3413[1]
  i3412.threshold = i3413[2]
  return i3412
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter"] = function (request, data, root) {
  var i3416 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter' )
  var i3417 = data
  i3416.defaultBool = !!i3417[0]
  i3416.defaultFloat = i3417[1]
  i3416.defaultInt = i3417[2]
  i3416.name = i3417[3]
  i3416.nameHash = i3417[4]
  i3416.type = i3417[5]
  return i3416
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i3418 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i3419 = data
  i3418.useSafeMode = !!i3419[0]
  i3418.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i3419[1], i3418.safeModeOptions)
  i3418.timeScale = i3419[2]
  i3418.unscaledTimeScale = i3419[3]
  i3418.useSmoothDeltaTime = !!i3419[4]
  i3418.maxSmoothUnscaledTime = i3419[5]
  i3418.rewindCallbackMode = i3419[6]
  i3418.showUnityEditorReport = !!i3419[7]
  i3418.logBehaviour = i3419[8]
  i3418.drawGizmos = !!i3419[9]
  i3418.defaultRecyclable = !!i3419[10]
  i3418.defaultAutoPlay = i3419[11]
  i3418.defaultUpdateType = i3419[12]
  i3418.defaultTimeScaleIndependent = !!i3419[13]
  i3418.defaultEaseType = i3419[14]
  i3418.defaultEaseOvershootOrAmplitude = i3419[15]
  i3418.defaultEasePeriod = i3419[16]
  i3418.defaultAutoKill = !!i3419[17]
  i3418.defaultLoopType = i3419[18]
  i3418.debugMode = !!i3419[19]
  i3418.debugStoreTargetId = !!i3419[20]
  i3418.showPreviewPanel = !!i3419[21]
  i3418.storeSettingsLocation = i3419[22]
  i3418.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i3419[23], i3418.modules)
  i3418.createASMDEF = !!i3419[24]
  i3418.showPlayingTweens = !!i3419[25]
  i3418.showPausedTweens = !!i3419[26]
  return i3418
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i3420 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i3421 = data
  i3420.logBehaviour = i3421[0]
  i3420.nestedTweenFailureBehaviour = i3421[1]
  return i3420
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i3422 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i3423 = data
  i3422.showPanel = !!i3423[0]
  i3422.audioEnabled = !!i3423[1]
  i3422.physicsEnabled = !!i3423[2]
  i3422.physics2DEnabled = !!i3423[3]
  i3422.spriteEnabled = !!i3423[4]
  i3422.uiEnabled = !!i3423[5]
  i3422.textMeshProEnabled = !!i3423[6]
  i3422.tk2DEnabled = !!i3423[7]
  i3422.deAudioEnabled = !!i3423[8]
  i3422.deUnityExtendedEnabled = !!i3423[9]
  i3422.epoOutlineEnabled = !!i3423[10]
  return i3422
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i3424 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i3425 = data
  var i3427 = i3425[0]
  var i3426 = []
  for(var i = 0; i < i3427.length; i += 1) {
    i3426.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i3427[i + 0]) );
  }
  i3424.files = i3426
  i3424.componentToPrefabIds = i3425[1]
  return i3424
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i3430 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i3431 = data
  i3430.path = i3431[0]
  request.r(i3431[1], i3431[2], 0, i3430, 'unityObject')
  return i3430
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i3432 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i3433 = data
  var i3435 = i3433[0]
  var i3434 = []
  for(var i = 0; i < i3435.length; i += 1) {
    i3434.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i3435[i + 0]) );
  }
  i3432.scriptsExecutionOrder = i3434
  var i3437 = i3433[1]
  var i3436 = []
  for(var i = 0; i < i3437.length; i += 1) {
    i3436.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i3437[i + 0]) );
  }
  i3432.sortingLayers = i3436
  var i3439 = i3433[2]
  var i3438 = []
  for(var i = 0; i < i3439.length; i += 1) {
    i3438.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i3439[i + 0]) );
  }
  i3432.cullingLayers = i3438
  i3432.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i3433[3], i3432.timeSettings)
  i3432.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i3433[4], i3432.physicsSettings)
  i3432.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i3433[5], i3432.physics2DSettings)
  i3432.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i3433[6], i3432.qualitySettings)
  i3432.enableRealtimeShadows = !!i3433[7]
  i3432.enableAutoInstancing = !!i3433[8]
  i3432.enableStaticBatching = !!i3433[9]
  i3432.enableDynamicBatching = !!i3433[10]
  i3432.usePreservativeDynamicBatching = !!i3433[11]
  i3432.lightmapEncodingQuality = i3433[12]
  i3432.desiredColorSpace = i3433[13]
  var i3441 = i3433[14]
  var i3440 = []
  for(var i = 0; i < i3441.length; i += 1) {
    i3440.push( i3441[i + 0] );
  }
  i3432.allTags = i3440
  return i3432
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i3444 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i3445 = data
  i3444.name = i3445[0]
  i3444.value = i3445[1]
  return i3444
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i3448 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i3449 = data
  i3448.id = i3449[0]
  i3448.name = i3449[1]
  i3448.value = i3449[2]
  return i3448
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i3452 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i3453 = data
  i3452.id = i3453[0]
  i3452.name = i3453[1]
  return i3452
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i3454 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i3455 = data
  i3454.fixedDeltaTime = i3455[0]
  i3454.maximumDeltaTime = i3455[1]
  i3454.timeScale = i3455[2]
  i3454.maximumParticleTimestep = i3455[3]
  return i3454
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i3456 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i3457 = data
  i3456.gravity = new pc.Vec3( i3457[0], i3457[1], i3457[2] )
  i3456.defaultSolverIterations = i3457[3]
  i3456.bounceThreshold = i3457[4]
  i3456.autoSyncTransforms = !!i3457[5]
  i3456.autoSimulation = !!i3457[6]
  var i3459 = i3457[7]
  var i3458 = []
  for(var i = 0; i < i3459.length; i += 1) {
    i3458.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i3459[i + 0]) );
  }
  i3456.collisionMatrix = i3458
  return i3456
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i3462 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i3463 = data
  i3462.enabled = !!i3463[0]
  i3462.layerId = i3463[1]
  i3462.otherLayerId = i3463[2]
  return i3462
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i3464 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i3465 = data
  request.r(i3465[0], i3465[1], 0, i3464, 'material')
  i3464.gravity = new pc.Vec2( i3465[2], i3465[3] )
  i3464.positionIterations = i3465[4]
  i3464.velocityIterations = i3465[5]
  i3464.velocityThreshold = i3465[6]
  i3464.maxLinearCorrection = i3465[7]
  i3464.maxAngularCorrection = i3465[8]
  i3464.maxTranslationSpeed = i3465[9]
  i3464.maxRotationSpeed = i3465[10]
  i3464.baumgarteScale = i3465[11]
  i3464.baumgarteTOIScale = i3465[12]
  i3464.timeToSleep = i3465[13]
  i3464.linearSleepTolerance = i3465[14]
  i3464.angularSleepTolerance = i3465[15]
  i3464.defaultContactOffset = i3465[16]
  i3464.autoSimulation = !!i3465[17]
  i3464.queriesHitTriggers = !!i3465[18]
  i3464.queriesStartInColliders = !!i3465[19]
  i3464.callbacksOnDisable = !!i3465[20]
  i3464.reuseCollisionCallbacks = !!i3465[21]
  i3464.autoSyncTransforms = !!i3465[22]
  var i3467 = i3465[23]
  var i3466 = []
  for(var i = 0; i < i3467.length; i += 1) {
    i3466.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i3467[i + 0]) );
  }
  i3464.collisionMatrix = i3466
  return i3464
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i3470 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i3471 = data
  i3470.enabled = !!i3471[0]
  i3470.layerId = i3471[1]
  i3470.otherLayerId = i3471[2]
  return i3470
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i3472 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i3473 = data
  var i3475 = i3473[0]
  var i3474 = []
  for(var i = 0; i < i3475.length; i += 1) {
    i3474.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i3475[i + 0]) );
  }
  i3472.qualityLevels = i3474
  var i3477 = i3473[1]
  var i3476 = []
  for(var i = 0; i < i3477.length; i += 1) {
    i3476.push( i3477[i + 0] );
  }
  i3472.names = i3476
  i3472.shadows = i3473[2]
  i3472.anisotropicFiltering = i3473[3]
  i3472.antiAliasing = i3473[4]
  i3472.lodBias = i3473[5]
  i3472.shadowCascades = i3473[6]
  i3472.shadowDistance = i3473[7]
  i3472.shadowmaskMode = i3473[8]
  i3472.shadowProjection = i3473[9]
  i3472.shadowResolution = i3473[10]
  i3472.softParticles = !!i3473[11]
  i3472.softVegetation = !!i3473[12]
  i3472.activeColorSpace = i3473[13]
  i3472.desiredColorSpace = i3473[14]
  i3472.masterTextureLimit = i3473[15]
  i3472.maxQueuedFrames = i3473[16]
  i3472.particleRaycastBudget = i3473[17]
  i3472.pixelLightCount = i3473[18]
  i3472.realtimeReflectionProbes = !!i3473[19]
  i3472.shadowCascade2Split = i3473[20]
  i3472.shadowCascade4Split = new pc.Vec3( i3473[21], i3473[22], i3473[23] )
  i3472.streamingMipmapsActive = !!i3473[24]
  i3472.vSyncCount = i3473[25]
  i3472.asyncUploadBufferSize = i3473[26]
  i3472.asyncUploadTimeSlice = i3473[27]
  i3472.billboardsFaceCameraPosition = !!i3473[28]
  i3472.shadowNearPlaneOffset = i3473[29]
  i3472.streamingMipmapsMemoryBudget = i3473[30]
  i3472.maximumLODLevel = i3473[31]
  i3472.streamingMipmapsAddAllCameras = !!i3473[32]
  i3472.streamingMipmapsMaxLevelReduction = i3473[33]
  i3472.streamingMipmapsRenderersPerFrame = i3473[34]
  i3472.resolutionScalingFixedDPIFactor = i3473[35]
  i3472.streamingMipmapsMaxFileIORequests = i3473[36]
  i3472.currentQualityLevel = i3473[37]
  return i3472
}

Deserializers["Luna.Unity.DTO.UnityEngine.Audio.AudioMixer"] = function (request, data, root) {
  var i3480 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Audio.AudioMixer' )
  var i3481 = data
  var i3483 = i3481[0]
  var i3482 = []
  for(var i = 0; i < i3483.length; i += 1) {
    i3482.push( request.d('Luna.Unity.DTO.UnityEngine.Audio.AudioMixerGroup', i3483[i + 0]) );
  }
  i3480.groups = i3482
  var i3485 = i3481[1]
  var i3484 = []
  for(var i = 0; i < i3485.length; i += 1) {
    i3484.push( request.d('Luna.Unity.DTO.UnityEngine.Audio.AudioMixerSnapshot', i3485[i + 0]) );
  }
  i3480.snapshots = i3484
  return i3480
}

Deserializers["Luna.Unity.DTO.UnityEngine.Audio.AudioMixerGroup"] = function (request, data, root) {
  var i3488 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Audio.AudioMixerGroup' )
  var i3489 = data
  i3488.id = i3489[0]
  i3488.childGroupIds = i3489[1]
  i3488.name = i3489[2]
  return i3488
}

Deserializers["Luna.Unity.DTO.UnityEngine.Audio.AudioMixerSnapshot"] = function (request, data, root) {
  var i3492 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Audio.AudioMixerSnapshot' )
  var i3493 = data
  i3492.id = i3493[0]
  var i3495 = i3493[1]
  var i3494 = []
  for(var i = 0; i < i3495.length; i += 1) {
    i3494.push( request.d('Luna.Unity.DTO.UnityEngine.Audio.AudioMixerSnapshot+Parameter', i3495[i + 0]) );
  }
  i3492.parameters = i3494
  return i3492
}

Deserializers["Luna.Unity.DTO.UnityEngine.Audio.AudioMixerSnapshot+Parameter"] = function (request, data, root) {
  var i3498 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Audio.AudioMixerSnapshot+Parameter' )
  var i3499 = data
  i3498.name = i3499[0]
  i3498.value = i3499[1]
  return i3498
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame"] = function (request, data, root) {
  var i3502 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame' )
  var i3503 = data
  i3502.weight = i3503[0]
  i3502.vertices = i3503[1]
  i3502.normals = i3503[2]
  i3502.tangents = i3503[3]
  return i3502
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Components.Animator":{"animatorController":0,"avatar":2,"updateMode":4,"hasTransformHierarchy":5,"applyRootMotion":6,"humanBones":7,"enabled":8},"Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer":{"color":0,"sprite":4,"flipX":6,"flipY":7,"drawMode":8,"size":9,"tileMode":11,"adaptiveModeThreshold":12,"maskInteraction":13,"spriteSortPoint":14,"enabled":15,"sharedMaterial":16,"sharedMaterials":18,"receiveShadows":19,"shadowCastingMode":20,"sortingLayerID":21,"sortingOrder":22,"lightmapIndex":23,"lightmapSceneIndex":24,"lightmapScaleOffset":25,"lightProbeUsage":29,"reflectionProbeUsage":30},"Luna.Unity.DTO.UnityEngine.Components.TrailRenderer":{"positions":0,"positionCount":1,"time":2,"startWidth":3,"endWidth":4,"widthMultiplier":5,"autodestruct":6,"emitting":7,"numCornerVertices":8,"numCapVertices":9,"minVertexDistance":10,"colorGradient":11,"startColor":12,"endColor":16,"generateLightingData":20,"textureMode":21,"alignment":22,"widthCurve":23,"enabled":24,"sharedMaterial":25,"sharedMaterials":27,"receiveShadows":28,"shadowCastingMode":29,"sortingLayerID":30,"sortingOrder":31,"lightmapIndex":32,"lightmapSceneIndex":33,"lightmapScaleOffset":34,"lightProbeUsage":38,"reflectionProbeUsage":39},"Luna.Unity.DTO.UnityEngine.Components.SpriteMask":{"frontSortingLayerID":0,"frontSortingOrder":1,"backSortingLayerID":2,"backSortingOrder":3,"alphaCutoff":4,"sprite":5,"tileMode":7,"isCustomRangeActive":8,"spriteSortPoint":9,"enabled":10,"sharedMaterial":11,"sharedMaterials":13,"receiveShadows":14,"shadowCastingMode":15,"sortingLayerID":16,"sortingOrder":17,"lightmapIndex":18,"lightmapSceneIndex":19,"lightmapScaleOffset":20,"lightProbeUsage":24,"reflectionProbeUsage":25},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D":{"usedByComposite":0,"autoTiling":1,"size":2,"edgeRadius":4,"enabled":5,"isTrigger":6,"usedByEffector":7,"density":8,"offset":9,"material":11},"Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D":{"bodyType":0,"material":1,"simulated":3,"useAutoMass":4,"mass":5,"drag":6,"angularDrag":7,"gravityScale":8,"collisionDetectionMode":9,"sleepMode":10,"constraints":11},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystem":{"main":0,"colorBySpeed":1,"colorOverLifetime":2,"emission":3,"rotationBySpeed":4,"rotationOverLifetime":5,"shape":6,"sizeBySpeed":7,"sizeOverLifetime":8,"textureSheetAnimation":9,"velocityOverLifetime":10,"noise":11,"inheritVelocity":12,"forceOverLifetime":13,"limitVelocityOverLifetime":14,"useAutoRandomSeed":15,"randomSeed":16},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule":{"duration":0,"loop":1,"prewarm":2,"startDelay":3,"startLifetime":4,"startSpeed":5,"startSize3D":6,"startSizeX":7,"startSizeY":8,"startSizeZ":9,"startRotation3D":10,"startRotationX":11,"startRotationY":12,"startRotationZ":13,"startColor":14,"gravityModifier":15,"simulationSpace":16,"customSimulationSpace":17,"simulationSpeed":19,"useUnscaledTime":20,"scalingMode":21,"playOnAwake":22,"maxParticles":23,"emitterVelocityMode":24,"stopAction":25},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve":{"mode":0,"curveMin":1,"curveMax":2,"curveMultiplier":3,"constantMin":4,"constantMax":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient":{"mode":0,"gradientMin":1,"gradientMax":2,"colorMin":3,"colorMax":7},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient":{"mode":0,"colorKeys":1,"alphaKeys":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule":{"enabled":0,"color":1,"range":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey":{"color":0,"time":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey":{"alpha":0,"time":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule":{"enabled":0,"color":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule":{"enabled":0,"rateOverTime":1,"rateOverDistance":2,"bursts":3},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst":{"count":0,"cycleCount":1,"minCount":2,"maxCount":3,"repeatInterval":4,"time":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule":{"enabled":0,"shapeType":1,"randomDirectionAmount":2,"sphericalDirectionAmount":3,"randomPositionAmount":4,"alignToDirection":5,"radius":6,"radiusMode":7,"radiusSpread":8,"radiusSpeed":9,"radiusThickness":10,"angle":11,"length":12,"boxThickness":13,"meshShapeType":16,"mesh":17,"meshRenderer":19,"skinnedMeshRenderer":21,"useMeshMaterialIndex":23,"meshMaterialIndex":24,"useMeshColors":25,"normalOffset":26,"arc":27,"arcMode":28,"arcSpread":29,"arcSpeed":30,"donutRadius":31,"position":32,"rotation":35,"scale":38},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule":{"enabled":0,"mode":1,"animation":2,"numTilesX":3,"numTilesY":4,"useRandomRow":5,"frameOverTime":6,"startFrame":7,"cycleCount":8,"rowIndex":9,"flipU":10,"flipV":11,"spriteCount":12,"sprites":13},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"radial":4,"speedModifier":5,"space":6,"orbitalX":7,"orbitalY":8,"orbitalZ":9,"orbitalOffsetX":10,"orbitalOffsetY":11,"orbitalOffsetZ":12},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule":{"enabled":0,"separateAxes":1,"strengthX":2,"strengthY":3,"strengthZ":4,"frequency":5,"damping":6,"octaveCount":7,"octaveMultiplier":8,"octaveScale":9,"quality":10,"scrollSpeed":11,"scrollSpeedMultiplier":12,"remapEnabled":13,"remapX":14,"remapY":15,"remapZ":16,"positionAmount":17,"rotationAmount":18,"sizeAmount":19},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule":{"enabled":0,"mode":1,"curve":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"space":4,"randomized":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule":{"enabled":0,"limit":1,"limitX":2,"limitY":3,"limitZ":4,"dampen":5,"separateAxes":6,"space":7,"drag":8,"multiplyDragByParticleSize":9,"multiplyDragByParticleVelocity":10},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer":{"mesh":0,"meshCount":2,"activeVertexStreamsCount":3,"alignment":4,"renderMode":5,"sortMode":6,"lengthScale":7,"velocityScale":8,"cameraVelocityScale":9,"normalDirection":10,"sortingFudge":11,"minParticleSize":12,"maxParticleSize":13,"pivot":14,"trailMaterial":17,"applyActiveColorSpace":19,"enabled":20,"sharedMaterial":21,"sharedMaterials":23,"receiveShadows":24,"shadowCastingMode":25,"sortingLayerID":26,"sortingOrder":27,"lightmapIndex":28,"lightmapSceneIndex":29,"lightmapScaleOffset":30,"lightProbeUsage":34,"reflectionProbeUsage":35},"Luna.Unity.DTO.UnityEngine.Components.CircleCollider2D":{"radius":0,"enabled":1,"isTrigger":2,"usedByEffector":3,"density":4,"offset":5,"material":7},"Luna.Unity.DTO.UnityEngine.Components.AudioSource":{"clip":0,"outputAudioMixerGroup":2,"playOnAwake":4,"loop":5,"time":6,"volume":7,"pitch":8,"enabled":9},"Luna.Unity.DTO.UnityEngine.Components.LineRenderer":{"textureMode":0,"alignment":1,"widthCurve":2,"colorGradient":3,"positions":4,"positionCount":5,"widthMultiplier":6,"startWidth":7,"endWidth":8,"numCornerVertices":9,"numCapVertices":10,"useWorldSpace":11,"loop":12,"startColor":13,"endColor":17,"generateLightingData":21,"enabled":22,"sharedMaterial":23,"sharedMaterials":25,"receiveShadows":26,"shadowCastingMode":27,"sortingLayerID":28,"sortingOrder":29,"lightmapIndex":30,"lightmapSceneIndex":31,"lightmapScaleOffset":32,"lightProbeUsage":36,"reflectionProbeUsage":37},"Luna.Unity.DTO.UnityEngine.Assets.Mesh":{"name":0,"halfPrecision":1,"useSimplification":2,"useUInt32IndexFormat":3,"vertexCount":4,"aabb":5,"streams":6,"vertices":7,"subMeshes":8,"bindposes":9,"blendShapes":10},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh":{"triangles":0},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape":{"name":0,"frames":1},"Luna.Unity.DTO.UnityEngine.Textures.Cubemap":{"name":0,"atlasId":1,"mipmapCount":2,"hdr":3,"size":4,"anisoLevel":5,"filterMode":6,"rects":7,"wrapU":8,"wrapV":9},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"aspect":0,"orthographic":1,"orthographicSize":2,"backgroundColor":3,"nearClipPlane":7,"farClipPlane":8,"fieldOfView":9,"depth":10,"clearFlags":11,"cullingMask":12,"rect":13,"targetTexture":14,"usePhysicalProperties":16,"focalLength":17,"sensorSize":18,"lensShift":20,"gateFit":22,"commandBufferCount":23,"cameraType":24,"enabled":25},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"planeDistance":0,"referencePixelsPerUnit":1,"isFallbackOverlay":2,"renderMode":3,"renderOrder":4,"sortingLayerName":5,"sortingOrder":6,"scaleFactor":7,"worldCamera":8,"overrideSorting":10,"pixelPerfect":11,"targetDisplay":12,"overridePixelPerfect":13,"enabled":14},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"customReflection":36,"defaultReflection":38,"defaultReflectionMode":40,"defaultReflectionResolution":41,"sunLightObjectId":42,"pixelLightCount":43,"defaultReflectionHDR":44,"hasLightDataAsset":45,"hasManualGenerate":46},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2,"shadowMask":4},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"hasDepthOnlyPass":10,"isCreatedByShaderGraph":11,"disableBatching":12,"compiled":13},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip":{"name":0,"wrapMode":1,"isLooping":2,"length":3,"curves":4,"events":5,"halfPrecision":6,"_frameRate":7,"localBounds":8,"hasMuscleCurves":9,"clipMuscleConstant":10,"clipBindingConstant":11},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve":{"path":0,"hash":1,"componentType":2,"property":3,"keys":4,"objectReferenceKeys":5},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey":{"time":0,"value":1},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent":{"functionName":0,"floatParameter":1,"intParameter":2,"stringParameter":3,"objectReferenceParameter":4,"time":6},"Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds":{"center":0,"extends":3},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant":{"genericBindings":0,"pptrCurveMapping":1},"Luna.Unity.DTO.UnityEngine.Assets.Font":{"name":0,"ascent":1,"originalLineHeight":2,"fontSize":3,"characterInfo":4,"texture":5,"originalFontSize":7},"Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo":{"index":0,"advance":1,"bearing":2,"glyphWidth":3,"glyphHeight":4,"minX":5,"maxX":6,"minY":7,"maxY":8,"uvBottomLeftX":9,"uvBottomLeftY":10,"uvBottomRightX":11,"uvBottomRightY":12,"uvTopLeftX":13,"uvTopLeftY":14,"uvTopRightX":15,"uvTopRightY":16},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController":{"name":0,"layers":1,"parameters":2,"animationClips":3,"avatarUnsupported":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer":{"name":0,"defaultWeight":1,"blendingMode":2,"avatarMask":3,"syncedLayerIndex":4,"syncedLayerAffectsTiming":5,"syncedLayers":6,"stateMachine":7},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine":{"id":0,"name":1,"path":2,"states":3,"machines":4,"entryStateTransitions":5,"exitStateTransitions":6,"anyStateTransitions":7,"defaultStateId":8},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState":{"id":0,"name":1,"cycleOffset":2,"cycleOffsetParameter":3,"cycleOffsetParameterActive":4,"mirror":5,"mirrorParameter":6,"mirrorParameterActive":7,"motionId":8,"nameHash":9,"fullPathHash":10,"speed":11,"speedParameter":12,"speedParameterActive":13,"tag":14,"tagHash":15,"writeDefaultValues":16,"behaviours":17,"transitions":18},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition":{"fullPath":0,"canTransitionToSelf":1,"duration":2,"exitTime":3,"hasExitTime":4,"hasFixedDuration":5,"interruptionSource":6,"offset":7,"orderedInterruption":8,"destinationStateId":9,"isExit":10,"mute":11,"solo":12,"conditions":13},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition":{"destinationStateId":0,"isExit":1,"mute":2,"solo":3,"conditions":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition":{"mode":0,"parameter":1,"threshold":2},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter":{"defaultBool":0,"defaultFloat":1,"defaultInt":2,"name":3,"nameHash":4,"type":5},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableStaticBatching":9,"enableDynamicBatching":10,"usePreservativeDynamicBatching":11,"lightmapEncodingQuality":12,"desiredColorSpace":13,"allTags":14},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37},"Luna.Unity.DTO.UnityEngine.Audio.AudioMixer":{"groups":0,"snapshots":1},"Luna.Unity.DTO.UnityEngine.Audio.AudioMixerGroup":{"id":0,"childGroupIds":1,"name":2},"Luna.Unity.DTO.UnityEngine.Audio.AudioMixerSnapshot":{"id":0,"parameters":1},"Luna.Unity.DTO.UnityEngine.Audio.AudioMixerSnapshot+Parameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame":{"weight":0,"vertices":1,"normals":2,"tangents":3}}

Deserializers.requiredComponents = {"61":[62],"63":[62],"64":[62],"65":[62],"66":[62],"67":[62],"68":[69],"70":[37],"71":[72],"73":[72],"74":[72],"75":[72],"76":[72],"77":[72],"78":[72],"79":[18],"80":[18],"81":[18],"82":[18],"83":[18],"84":[18],"85":[18],"86":[18],"87":[18],"88":[18],"89":[18],"90":[18],"91":[18],"92":[37],"93":[94],"95":[96],"97":[96],"49":[42],"34":[33],"98":[6],"99":[8],"100":[6],"101":[102],"103":[102],"104":[21],"105":[8],"106":[6],"15":[6],"107":[42],"108":[42],"52":[49],"43":[53,42],"109":[42],"51":[49],"110":[42],"111":[42],"112":[42],"113":[42],"114":[42],"115":[42],"116":[42],"117":[42],"118":[42],"119":[53,42],"120":[42],"121":[42],"122":[42],"123":[42],"44":[53,42],"124":[42],"125":[56],"126":[56],"57":[56],"127":[56],"128":[37],"129":[37]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Transform","UnityEngine.MonoBehaviour","Level2_Cloth_Playable","UnityEngine.GameObject","UnityEngine.Animator","UnityEngine.SpriteRenderer","BasicDrag","UnityEngine.BoxCollider2D","UnityEngine.AudioClip","UnityEngine.Sprite","UnityEngine.AudioSource","UnityEditor.Animations.AnimatorController","UnityEngine.Material","UnityEngine.TrailRenderer","UnityEngine.U2D.Animation.SpriteSkin","BD_AnimationHelper","UnityEngine.SpriteMask","UnityEngine.Rigidbody2D","PlaceItem","UnityEngine.ParticleSystem","DG.Tweening.DOTweenAnimation","UnityEngine.ParticleSystemRenderer","ArrayRotationByMovement","ActionOnTap","BD_Clamp","BD_Action","UnityEngine.CircleCollider2D","SoapPourControler","_2dxFX_Wave","InteractableBones","BD_AnimatorDrag","UnityEditor.Audio.AudioMixerGroupController","UnityEngine.LineRenderer","RopeController","TapandHold_Simple","UnityEngine.Texture2D","UnityEngine.Camera","UnityEngine.AudioListener","CameraController","MusicSource","UI_Manager","UnityEngine.RectTransform","UnityEngine.UI.Image","UnityEngine.UI.Text","GameManagerPlayable","AudioController","UnityEditor.Audio.AudioMixerController","UnityEngine.Mesh","UnityEngine.Canvas","UnityEngine.EventSystems.UIBehaviour","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEngine.CanvasRenderer","UnityEngine.Font","UnityEngine.UI.Button","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","PlayableHudRuntime","UnityEngine.Cubemap","DG.Tweening.Core.DOTweenSettings","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.ConstantForce","UnityEngine.Rigidbody","UnityEngine.Joint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.FixedJoint","UnityEngine.CharacterJoint","UnityEngine.ConfigurableJoint","UnityEngine.CompositeCollider2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.MeshRenderer","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","BD_Fold","BD_Sticky","Lvl3_DripAnimator","Lvl3_LipstickPicker","UnityEngine.Collider2D","Lvl3_PourFill","PlayTweenOnHit","SpriteButton","RadialCircleFill","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.Mask","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Slider","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster"]

Deserializers.unityVersion = "2022.3.62f2";

Deserializers.productName = "Perfect Makeover Fashion ASMR";

Deserializers.lunaInitializationTime = "08/20/2026 07:41:52";

Deserializers.lunaDaysRunning = "0.1";

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

Deserializers.runtimeAnalysisExcludedClassesCount = "1753";

Deserializers.runtimeAnalysisExcludedMethodsCount = "4165";

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

Deserializers.buildID = "426c753a-aa55-4080-bb87-4c24018c7a80";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[],[["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"]],[],[]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

