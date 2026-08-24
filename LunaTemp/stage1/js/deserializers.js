var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i13850 = root || request.c( 'UnityEngine.JointSpring' )
  var i13851 = data
  i13850.spring = i13851[0]
  i13850.damper = i13851[1]
  i13850.targetPosition = i13851[2]
  return i13850
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i13852 = root || request.c( 'UnityEngine.JointMotor' )
  var i13853 = data
  i13852.m_TargetVelocity = i13853[0]
  i13852.m_Force = i13853[1]
  i13852.m_FreeSpin = i13853[2]
  return i13852
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i13854 = root || request.c( 'UnityEngine.JointLimits' )
  var i13855 = data
  i13854.m_Min = i13855[0]
  i13854.m_Max = i13855[1]
  i13854.m_Bounciness = i13855[2]
  i13854.m_BounceMinVelocity = i13855[3]
  i13854.m_ContactDistance = i13855[4]
  i13854.minBounce = i13855[5]
  i13854.maxBounce = i13855[6]
  return i13854
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i13856 = root || request.c( 'UnityEngine.JointDrive' )
  var i13857 = data
  i13856.m_PositionSpring = i13857[0]
  i13856.m_PositionDamper = i13857[1]
  i13856.m_MaximumForce = i13857[2]
  i13856.m_UseAcceleration = i13857[3]
  return i13856
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i13858 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i13859 = data
  i13858.m_Spring = i13859[0]
  i13858.m_Damper = i13859[1]
  return i13858
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i13860 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i13861 = data
  i13860.m_Limit = i13861[0]
  i13860.m_Bounciness = i13861[1]
  i13860.m_ContactDistance = i13861[2]
  return i13860
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i13862 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i13863 = data
  i13862.m_ExtremumSlip = i13863[0]
  i13862.m_ExtremumValue = i13863[1]
  i13862.m_AsymptoteSlip = i13863[2]
  i13862.m_AsymptoteValue = i13863[3]
  i13862.m_Stiffness = i13863[4]
  return i13862
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i13864 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i13865 = data
  i13864.m_LowerAngle = i13865[0]
  i13864.m_UpperAngle = i13865[1]
  return i13864
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i13866 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i13867 = data
  i13866.m_MotorSpeed = i13867[0]
  i13866.m_MaximumMotorTorque = i13867[1]
  return i13866
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i13868 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i13869 = data
  i13868.m_DampingRatio = i13869[0]
  i13868.m_Frequency = i13869[1]
  i13868.m_Angle = i13869[2]
  return i13868
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i13870 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i13871 = data
  i13870.m_LowerTranslation = i13871[0]
  i13870.m_UpperTranslation = i13871[1]
  return i13870
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i13872 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i13873 = data
  i13872.name = i13873[0]
  i13872.width = i13873[1]
  i13872.height = i13873[2]
  i13872.mipmapCount = i13873[3]
  i13872.anisoLevel = i13873[4]
  i13872.filterMode = i13873[5]
  i13872.hdr = !!i13873[6]
  i13872.format = i13873[7]
  i13872.wrapMode = i13873[8]
  i13872.alphaIsTransparency = !!i13873[9]
  i13872.alphaSource = i13873[10]
  i13872.graphicsFormat = i13873[11]
  i13872.sRGBTexture = !!i13873[12]
  i13872.desiredColorSpace = i13873[13]
  i13872.wrapU = i13873[14]
  i13872.wrapV = i13873[15]
  return i13872
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i13874 = root || new pc.UnityMaterial()
  var i13875 = data
  i13874.name = i13875[0]
  request.r(i13875[1], i13875[2], 0, i13874, 'shader')
  i13874.renderQueue = i13875[3]
  i13874.enableInstancing = !!i13875[4]
  var i13877 = i13875[5]
  var i13876 = []
  for(var i = 0; i < i13877.length; i += 1) {
    i13876.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i13877[i + 0]) );
  }
  i13874.floatParameters = i13876
  var i13879 = i13875[6]
  var i13878 = []
  for(var i = 0; i < i13879.length; i += 1) {
    i13878.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i13879[i + 0]) );
  }
  i13874.colorParameters = i13878
  var i13881 = i13875[7]
  var i13880 = []
  for(var i = 0; i < i13881.length; i += 1) {
    i13880.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i13881[i + 0]) );
  }
  i13874.vectorParameters = i13880
  var i13883 = i13875[8]
  var i13882 = []
  for(var i = 0; i < i13883.length; i += 1) {
    i13882.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i13883[i + 0]) );
  }
  i13874.textureParameters = i13882
  var i13885 = i13875[9]
  var i13884 = []
  for(var i = 0; i < i13885.length; i += 1) {
    i13884.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i13885[i + 0]) );
  }
  i13874.materialFlags = i13884
  return i13874
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i13888 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i13889 = data
  i13888.name = i13889[0]
  i13888.value = i13889[1]
  return i13888
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i13892 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i13893 = data
  i13892.name = i13893[0]
  i13892.value = new pc.Color(i13893[1], i13893[2], i13893[3], i13893[4])
  return i13892
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i13896 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i13897 = data
  i13896.name = i13897[0]
  i13896.value = new pc.Vec4( i13897[1], i13897[2], i13897[3], i13897[4] )
  return i13896
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i13900 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i13901 = data
  i13900.name = i13901[0]
  request.r(i13901[1], i13901[2], 0, i13900, 'value')
  return i13900
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i13904 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i13905 = data
  i13904.name = i13905[0]
  i13904.enabled = !!i13905[1]
  return i13904
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i13906 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i13907 = data
  i13906.position = new pc.Vec3( i13907[0], i13907[1], i13907[2] )
  i13906.scale = new pc.Vec3( i13907[3], i13907[4], i13907[5] )
  i13906.rotation = new pc.Quat(i13907[6], i13907[7], i13907[8], i13907[9])
  return i13906
}

Deserializers["Level1_Hair_Playable"] = function (request, data, root) {
  var i13908 = root || request.c( 'Level1_Hair_Playable' )
  var i13909 = data
  request.r(i13909[0], i13909[1], 0, i13908, 'wetCloth')
  request.r(i13909[2], i13909[3], 0, i13908, 'waterDripingParticle')
  i13908.ZoomStep1 = request.d('ZoomPos', i13909[4], i13908.ZoomStep1)
  var i13911 = i13909[5]
  var i13910 = []
  for(var i = 0; i < i13911.length; i += 2) {
  request.r(i13911[i + 0], i13911[i + 1], 2, i13910, '')
  }
  i13908.AllTrash = i13910
  var i13913 = i13909[6]
  var i13912 = []
  for(var i = 0; i < i13913.length; i += 2) {
  request.r(i13913[i + 0], i13913[i + 1], 2, i13912, '')
  }
  i13908.AllTrashOutlines = i13912
  i13908.trashDone = !!i13909[7]
  i13908.trashThrown = i13909[8]
  i13908.trashTotal = i13909[9]
  request.r(i13909[10], i13909[11], 0, i13908, 'bd_Sticky')
  i13908.ZoomStep2 = request.d('ZoomPos', i13909[12], i13908.ZoomStep2)
  request.r(i13909[13], i13909[14], 0, i13908, 'ToolStep2')
  request.r(i13909[15], i13909[16], 0, i13908, 'camFollowStep2')
  var i13915 = i13909[17]
  var i13914 = []
  for(var i = 0; i < i13915.length; i += 2) {
  request.r(i13915[i + 0], i13915[i + 1], 2, i13914, '')
  }
  i13908.AllBugOutlines = i13914
  i13908.ZoomStep2b = request.d('ZoomPos', i13909[18], i13908.ZoomStep2b)
  request.r(i13909[19], i13909[20], 0, i13908, 'ToolStep2b')
  request.r(i13909[21], i13909[22], 0, i13908, 'camFollowStep2b')
  request.r(i13909[23], i13909[24], 0, i13908, 'dustColStep2')
  request.r(i13909[25], i13909[26], 0, i13908, 'handIndicationShower')
  request.r(i13909[27], i13909[28], 0, i13908, 'hairDirtyStatic')
  request.r(i13909[29], i13909[30], 0, i13908, 'hairDirtyWetStatic')
  request.r(i13909[31], i13909[32], 0, i13908, 'dryHairAnim')
  i13908.ZoomStep3 = request.d('ZoomPos', i13909[33], i13908.ZoomStep3)
  request.r(i13909[34], i13909[35], 0, i13908, 'ShampooInHand')
  request.r(i13909[36], i13909[37], 0, i13908, 'ShampooOnHand')
  request.r(i13909[38], i13909[39], 0, i13908, 'ShampooInHandCap')
  request.r(i13909[40], i13909[41], 0, i13908, 'ToolStep3')
  request.r(i13909[42], i13909[43], 0, i13908, 'shampooPatch')
  request.r(i13909[44], i13909[45], 0, i13908, 'handSpriteRend')
  request.r(i13909[46], i13909[47], 0, i13908, 'bottleDefault')
  request.r(i13909[48], i13909[49], 0, i13908, 'bottlePressed')
  request.r(i13909[50], i13909[51], 0, i13908, 'shampooDropping')
  request.r(i13909[52], i13909[53], 0, i13908, 'bottleOpenSfx')
  request.r(i13909[54], i13909[55], 0, i13908, 'bottleSqueezSfx')
  request.r(i13909[56], i13909[57], 0, i13908, 'bottlePourSfx')
  i13908.ZoomStep4 = request.d('ZoomPos', i13909[58], i13908.ZoomStep4)
  request.r(i13909[59], i13909[60], 0, i13908, 'ToolStep4')
  request.r(i13909[61], i13909[62], 0, i13908, 'camFollowStep4')
  request.r(i13909[63], i13909[64], 0, i13908, 'foamLight_E')
  request.r(i13909[65], i13909[66], 0, i13908, 'foam2_E')
  request.r(i13909[67], i13909[68], 0, i13908, 'foamCol')
  request.r(i13909[69], i13909[70], 0, i13908, 'handIndicationHands')
  request.r(i13909[71], i13909[72], 0, i13908, 'progressStep4')
  i13908.ZoomStep5a = request.d('ZoomPos', i13909[73], i13908.ZoomStep5a)
  i13908.ZoomStep5b = request.d('ZoomPos', i13909[74], i13908.ZoomStep5b)
  request.r(i13909[75], i13909[76], 0, i13908, 'ShowerDamaged')
  request.r(i13909[77], i13909[78], 0, i13908, 'ShowerBackDMG')
  request.r(i13909[79], i13909[80], 0, i13908, 'ShowerInner_dirty')
  request.r(i13909[81], i13909[82], 0, i13908, 'ShowerInner_Target')
  request.r(i13909[83], i13909[84], 0, i13908, 'ShowerFrontDMG')
  request.r(i13909[85], i13909[86], 0, i13908, 'OpenShowerIndication')
  request.r(i13909[87], i13909[88], 0, i13908, 'CloseShowerIndication')
  request.r(i13909[89], i13909[90], 0, i13908, 'showrOpenInput')
  request.r(i13909[91], i13909[92], 0, i13908, 'showerDisk')
  request.r(i13909[93], i13909[94], 0, i13908, 'showerFixReverseAnimDrag')
  request.r(i13909[95], i13909[96], 0, i13908, 'showerDragDamage')
  request.r(i13909[97], i13909[98], 0, i13908, 'ToolStep5Rev')
  i13908.ZoomStep5 = request.d('ZoomPos', i13909[99], i13908.ZoomStep5)
  request.r(i13909[100], i13909[101], 0, i13908, 'ToolStep5')
  request.r(i13909[102], i13909[103], 0, i13908, 'ToolStep5Placeable')
  request.r(i13909[104], i13909[105], 0, i13908, 'toolStep5Progress')
  request.r(i13909[106], i13909[107], 0, i13908, 'toolStep5ProgressHelp')
  request.r(i13909[108], i13909[109], 0, i13908, 'camFollowStep5')
  request.r(i13909[110], i13909[111], 0, i13908, 'showerRender')
  request.r(i13909[112], i13909[113], 0, i13908, 'showerDirty')
  request.r(i13909[114], i13909[115], 0, i13908, 'showerClean')
  request.r(i13909[116], i13909[117], 0, i13908, 'waterShotParticle')
  request.r(i13909[118], i13909[119], 0, i13908, 'showerProblemClip')
  request.r(i13909[120], i13909[121], 0, i13908, 'wetHairs_E')
  i13908.levelName = i13909[122]
  i13908.levelReward = i13909[123]
  request.r(i13909[124], i13909[125], 0, i13908, 'LevelIcon')
  request.r(i13909[126], i13909[127], 0, i13908, 'Level_BG')
  var i13917 = i13909[128]
  var i13916 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Sprite')))
  for(var i = 0; i < i13917.length; i += 2) {
  request.r(i13917[i + 0], i13917[i + 1], 1, i13916, '')
  }
  i13908.ToolIcons = i13916
  var i13919 = i13909[129]
  var i13918 = []
  for(var i = 0; i < i13919.length; i += 2) {
  request.r(i13919[i + 0], i13919[i + 1], 2, i13918, '')
  }
  i13908.AllDrags = i13918
  var i13921 = i13909[130]
  var i13920 = []
  for(var i = 0; i < i13921.length; i += 2) {
  request.r(i13921[i + 0], i13921[i + 1], 2, i13920, '')
  }
  i13908.AllSources = i13920
  var i13923 = i13909[131]
  var i13922 = []
  for(var i = 0; i < i13923.length; i += 2) {
  request.r(i13923[i + 0], i13923[i + 1], 2, i13922, '')
  }
  i13908.AllScratches = i13922
  i13908.stepsDone = i13909[132]
  i13908.levelNo = i13909[133]
  i13908.partNo = i13909[134]
  request.r(i13909[135], i13909[136], 0, i13908, 'bubbleGum')
  return i13908
}

Deserializers["ZoomPos"] = function (request, data, root) {
  var i13924 = root || request.c( 'ZoomPos' )
  var i13925 = data
  i13924.CameraPos = new pc.Vec3( i13925[0], i13925[1], i13925[2] )
  i13924.CameraFOV = i13925[3]
  return i13924
}

Deserializers["PlayableCTA"] = function (request, data, root) {
  var i13936 = root || request.c( 'PlayableCTA' )
  var i13937 = data
  i13936.trigger = i13937[0]
  i13936.afterSeconds = i13937[1]
  i13936.afterTaps = i13937[2]
  request.r(i13937[3], i13937[4], 0, i13936, 'scratchProgress')
  i13936.scratchIndex = i13937[5]
  i13936.progressThreshold = i13937[6]
  i13936.refireOnEveryTap = !!i13937[7]
  i13936.refireDelay = i13937[8]
  i13936.onCtaFired = request.d('UnityEngine.Events.UnityEvent', i13937[9], i13936.onCtaFired)
  i13936.logWhenFired = !!i13937[10]
  return i13936
}

Deserializers["UnityEngine.Events.UnityEvent"] = function (request, data, root) {
  var i13938 = root || request.c( 'UnityEngine.Events.UnityEvent' )
  var i13939 = data
  i13938.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i13939[0], i13938.m_PersistentCalls)
  return i13938
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i13940 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i13941 = data
  var i13943 = i13941[0]
  var i13942 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i13943.length; i += 1) {
    i13942.add(request.d('UnityEngine.Events.PersistentCall', i13943[i + 0]));
  }
  i13940.m_Calls = i13942
  return i13940
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i13946 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i13947 = data
  request.r(i13947[0], i13947[1], 0, i13946, 'm_Target')
  i13946.m_TargetAssemblyTypeName = i13947[2]
  i13946.m_MethodName = i13947[3]
  i13946.m_Mode = i13947[4]
  i13946.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i13947[5], i13946.m_Arguments)
  i13946.m_CallState = i13947[6]
  return i13946
}

Deserializers["PlayableFadeCoverSettings"] = function (request, data, root) {
  var i13948 = root || request.c( 'PlayableFadeCoverSettings' )
  var i13949 = data
  i13948.revealDelay = i13949[0]
  i13948.revealDuration = i13949[1]
  return i13948
}

Deserializers["ScratchCardAsset.ScratchCardManager"] = function (request, data, root) {
  var i13950 = root || request.c( 'ScratchCardAsset.ScratchCardManager' )
  var i13951 = data
  request.r(i13951[0], i13951[1], 0, i13950, 'MainCamera')
  i13950.RenderType = i13951[2]
  request.r(i13951[3], i13951[4], 0, i13950, 'ScratchSurfaceSprite')
  i13950.ScratchSurfaceSpriteHasAlpha = !!i13951[5]
  i13950.MaskProgressCutOffValue = i13951[6]
  request.r(i13951[7], i13951[8], 0, i13950, 'EraseTexture')
  i13950.EraseTextureScale = new pc.Vec2( i13951[9], i13951[10] )
  i13950.InputEnabled = !!i13951[11]
  request.r(i13951[12], i13951[13], 0, i13950, 'Card')
  i13950.Mode = i13951[14]
  request.r(i13951[15], i13951[16], 0, i13950, 'Progress')
  request.r(i13951[17], i13951[18], 0, i13950, 'MeshCard')
  request.r(i13951[19], i13951[20], 0, i13950, 'SpriteCard')
  request.r(i13951[21], i13951[22], 0, i13950, 'ImageCard')
  request.r(i13951[23], i13951[24], 0, i13950, 'MaskShader')
  request.r(i13951[25], i13951[26], 0, i13950, 'BrushShader')
  request.r(i13951[27], i13951[28], 0, i13950, 'MaskProgressShader')
  request.r(i13951[29], i13951[30], 0, i13950, 'MaskProgressCutOffShader')
  return i13950
}

Deserializers["ScratchCardAsset.ScratchCard"] = function (request, data, root) {
  var i13952 = root || request.c( 'ScratchCardAsset.ScratchCard' )
  var i13953 = data
  request.r(i13953[0], i13953[1], 0, i13952, 'MainCamera')
  request.r(i13953[2], i13953[3], 0, i13952, 'Surface')
  i13952.RenderTextureQuality = i13953[4]
  request.r(i13953[5], i13953[6], 0, i13952, 'Eraser')
  request.r(i13953[7], i13953[8], 0, i13952, 'Progress')
  request.r(i13953[9], i13953[10], 0, i13952, 'ScratchSurface')
  request.r(i13953[11], i13953[12], 0, i13952, 'RenderTexture')
  i13952.BrushScale = new pc.Vec2( i13953[13], i13953[14] )
  request.r(i13953[15], i13953[16], 0, i13952, 'ToolTip')
  i13952.InputEnabled = !!i13953[17]
  i13952.IsScratching = !!i13953[18]
  i13952.useChangingScale = !!i13953[19]
  i13952.useGivenBrushScale = !!i13953[20]
  i13952.canSpreadMask = !!i13953[21]
  i13952.shouldPaintHoles = !!i13953[22]
  i13952.canRotateTip = !!i13953[23]
  i13952._mode = i13953[24]
  return i13952
}

Deserializers["ScratchCardAsset.EraseProgress"] = function (request, data, root) {
  var i13954 = root || request.c( 'ScratchCardAsset.EraseProgress' )
  var i13955 = data
  request.r(i13955[0], i13955[1], 0, i13954, 'Card')
  i13954.currentProgress = i13955[2]
  return i13954
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i13956 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i13957 = data
  i13956.name = i13957[0]
  i13956.tagId = i13957[1]
  i13956.enabled = !!i13957[2]
  i13956.isStatic = !!i13957[3]
  i13956.layer = i13957[4]
  return i13956
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animator"] = function (request, data, root) {
  var i13958 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animator' )
  var i13959 = data
  request.r(i13959[0], i13959[1], 0, i13958, 'animatorController')
  request.r(i13959[2], i13959[3], 0, i13958, 'avatar')
  i13958.updateMode = i13959[4]
  i13958.hasTransformHierarchy = !!i13959[5]
  i13958.applyRootMotion = !!i13959[6]
  var i13961 = i13959[7]
  var i13960 = []
  for(var i = 0; i < i13961.length; i += 2) {
  request.r(i13961[i + 0], i13961[i + 1], 2, i13960, '')
  }
  i13958.humanBones = i13960
  i13958.enabled = !!i13959[8]
  return i13958
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer"] = function (request, data, root) {
  var i13964 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer' )
  var i13965 = data
  i13964.color = new pc.Color(i13965[0], i13965[1], i13965[2], i13965[3])
  request.r(i13965[4], i13965[5], 0, i13964, 'sprite')
  i13964.flipX = !!i13965[6]
  i13964.flipY = !!i13965[7]
  i13964.drawMode = i13965[8]
  i13964.size = new pc.Vec2( i13965[9], i13965[10] )
  i13964.tileMode = i13965[11]
  i13964.adaptiveModeThreshold = i13965[12]
  i13964.maskInteraction = i13965[13]
  i13964.spriteSortPoint = i13965[14]
  i13964.enabled = !!i13965[15]
  request.r(i13965[16], i13965[17], 0, i13964, 'sharedMaterial')
  var i13967 = i13965[18]
  var i13966 = []
  for(var i = 0; i < i13967.length; i += 2) {
  request.r(i13967[i + 0], i13967[i + 1], 2, i13966, '')
  }
  i13964.sharedMaterials = i13966
  i13964.receiveShadows = !!i13965[19]
  i13964.shadowCastingMode = i13965[20]
  i13964.sortingLayerID = i13965[21]
  i13964.sortingOrder = i13965[22]
  i13964.lightmapIndex = i13965[23]
  i13964.lightmapSceneIndex = i13965[24]
  i13964.lightmapScaleOffset = new pc.Vec4( i13965[25], i13965[26], i13965[27], i13965[28] )
  i13964.lightProbeUsage = i13965[29]
  i13964.reflectionProbeUsage = i13965[30]
  return i13964
}

Deserializers["UnityEngine.U2D.Animation.SpriteSkin"] = function (request, data, root) {
  var i13970 = root || request.c( 'UnityEngine.U2D.Animation.SpriteSkin' )
  var i13971 = data
  request.r(i13971[0], i13971[1], 0, i13970, 'm_RootBone')
  var i13973 = i13971[2]
  var i13972 = []
  for(var i = 0; i < i13973.length; i += 2) {
  request.r(i13973[i + 0], i13973[i + 1], 2, i13972, '')
  }
  i13970.m_BoneTransforms = i13972
  i13970.m_AlwaysUpdate = !!i13971[3]
  i13970.m_AutoRebind = !!i13971[4]
  return i13970
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.TrailRenderer"] = function (request, data, root) {
  var i13974 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.TrailRenderer' )
  var i13975 = data
  var i13977 = i13975[0]
  var i13976 = []
  for(var i = 0; i < i13977.length; i += 3) {
    i13976.push( new pc.Vec3( i13977[i + 0], i13977[i + 1], i13977[i + 2] ) );
  }
  i13974.positions = i13976
  i13974.positionCount = i13975[1]
  i13974.time = i13975[2]
  i13974.startWidth = i13975[3]
  i13974.endWidth = i13975[4]
  i13974.widthMultiplier = i13975[5]
  i13974.autodestruct = !!i13975[6]
  i13974.emitting = !!i13975[7]
  i13974.numCornerVertices = i13975[8]
  i13974.numCapVertices = i13975[9]
  i13974.minVertexDistance = i13975[10]
  i13974.colorGradient = i13975[11] ? new pc.ColorGradient(i13975[11][0], i13975[11][1], i13975[11][2]) : null
  i13974.startColor = new pc.Color(i13975[12], i13975[13], i13975[14], i13975[15])
  i13974.endColor = new pc.Color(i13975[16], i13975[17], i13975[18], i13975[19])
  i13974.generateLightingData = !!i13975[20]
  i13974.textureMode = i13975[21]
  i13974.alignment = i13975[22]
  i13974.widthCurve = new pc.AnimationCurve( { keys_flow: i13975[23] } )
  i13974.enabled = !!i13975[24]
  request.r(i13975[25], i13975[26], 0, i13974, 'sharedMaterial')
  var i13979 = i13975[27]
  var i13978 = []
  for(var i = 0; i < i13979.length; i += 2) {
  request.r(i13979[i + 0], i13979[i + 1], 2, i13978, '')
  }
  i13974.sharedMaterials = i13978
  i13974.receiveShadows = !!i13975[28]
  i13974.shadowCastingMode = i13975[29]
  i13974.sortingLayerID = i13975[30]
  i13974.sortingOrder = i13975[31]
  i13974.lightmapIndex = i13975[32]
  i13974.lightmapSceneIndex = i13975[33]
  i13974.lightmapScaleOffset = new pc.Vec4( i13975[34], i13975[35], i13975[36], i13975[37] )
  i13974.lightProbeUsage = i13975[38]
  i13974.reflectionProbeUsage = i13975[39]
  return i13974
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.LineRenderer"] = function (request, data, root) {
  var i13982 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.LineRenderer' )
  var i13983 = data
  i13982.textureMode = i13983[0]
  i13982.alignment = i13983[1]
  i13982.widthCurve = new pc.AnimationCurve( { keys_flow: i13983[2] } )
  i13982.colorGradient = i13983[3] ? new pc.ColorGradient(i13983[3][0], i13983[3][1], i13983[3][2]) : null
  var i13985 = i13983[4]
  var i13984 = []
  for(var i = 0; i < i13985.length; i += 3) {
    i13984.push( new pc.Vec3( i13985[i + 0], i13985[i + 1], i13985[i + 2] ) );
  }
  i13982.positions = i13984
  i13982.positionCount = i13983[5]
  i13982.widthMultiplier = i13983[6]
  i13982.startWidth = i13983[7]
  i13982.endWidth = i13983[8]
  i13982.numCornerVertices = i13983[9]
  i13982.numCapVertices = i13983[10]
  i13982.useWorldSpace = !!i13983[11]
  i13982.loop = !!i13983[12]
  i13982.startColor = new pc.Color(i13983[13], i13983[14], i13983[15], i13983[16])
  i13982.endColor = new pc.Color(i13983[17], i13983[18], i13983[19], i13983[20])
  i13982.generateLightingData = !!i13983[21]
  i13982.enabled = !!i13983[22]
  request.r(i13983[23], i13983[24], 0, i13982, 'sharedMaterial')
  var i13987 = i13983[25]
  var i13986 = []
  for(var i = 0; i < i13987.length; i += 2) {
  request.r(i13987[i + 0], i13987[i + 1], 2, i13986, '')
  }
  i13982.sharedMaterials = i13986
  i13982.receiveShadows = !!i13983[26]
  i13982.shadowCastingMode = i13983[27]
  i13982.sortingLayerID = i13983[28]
  i13982.sortingOrder = i13983[29]
  i13982.lightmapIndex = i13983[30]
  i13982.lightmapSceneIndex = i13983[31]
  i13982.lightmapScaleOffset = new pc.Vec4( i13983[32], i13983[33], i13983[34], i13983[35] )
  i13982.lightProbeUsage = i13983[36]
  i13982.reflectionProbeUsage = i13983[37]
  return i13982
}

Deserializers["StaticFixedPipe"] = function (request, data, root) {
  var i13988 = root || request.c( 'StaticFixedPipe' )
  var i13989 = data
  request.r(i13989[0], i13989[1], 0, i13988, 'lineRenderer')
  request.r(i13989[2], i13989[3], 0, i13988, 'toolTransform')
  request.r(i13989[4], i13989[5], 0, i13988, 'toolDirectionPoint')
  request.r(i13989[6], i13989[7], 0, i13988, 'fixedEndPoint')
  i13988.segmentCount = i13989[8]
  i13988.totalLength = i13989[9]
  i13988.constraintIterations = i13989[10]
  i13988.gravity = new pc.Vec3( i13989[11], i13989[12], i13989[13] )
  i13988.pipeWidth = i13989[14]
  return i13988
}

Deserializers["DG.Tweening.DOTweenAnimation"] = function (request, data, root) {
  var i13990 = root || request.c( 'DG.Tweening.DOTweenAnimation' )
  var i13991 = data
  i13990.targetIsSelf = !!i13991[0]
  request.r(i13991[1], i13991[2], 0, i13990, 'targetGO')
  i13990.tweenTargetIsTargetGO = !!i13991[3]
  i13990.delay = i13991[4]
  i13990.duration = i13991[5]
  i13990.easeType = i13991[6]
  i13990.easeCurve = new pc.AnimationCurve( { keys_flow: i13991[7] } )
  i13990.loopType = i13991[8]
  i13990.loops = i13991[9]
  i13990.id = i13991[10]
  i13990.isRelative = !!i13991[11]
  i13990.isFrom = !!i13991[12]
  i13990.isIndependentUpdate = !!i13991[13]
  i13990.autoKill = !!i13991[14]
  i13990.autoGenerate = !!i13991[15]
  i13990.isActive = !!i13991[16]
  i13990.isValid = !!i13991[17]
  request.r(i13991[18], i13991[19], 0, i13990, 'target')
  i13990.animationType = i13991[20]
  i13990.targetType = i13991[21]
  i13990.forcedTargetType = i13991[22]
  i13990.autoPlay = !!i13991[23]
  i13990.useTargetAsV3 = !!i13991[24]
  i13990.endValueFloat = i13991[25]
  i13990.endValueV3 = new pc.Vec3( i13991[26], i13991[27], i13991[28] )
  i13990.endValueV2 = new pc.Vec2( i13991[29], i13991[30] )
  i13990.endValueColor = new pc.Color(i13991[31], i13991[32], i13991[33], i13991[34])
  i13990.endValueString = i13991[35]
  i13990.endValueRect = UnityEngine.Rect.MinMaxRect(i13991[36], i13991[37], i13991[38], i13991[39])
  request.r(i13991[40], i13991[41], 0, i13990, 'endValueTransform')
  i13990.optionalBool0 = !!i13991[42]
  i13990.optionalBool1 = !!i13991[43]
  i13990.optionalFloat0 = i13991[44]
  i13990.optionalInt0 = i13991[45]
  i13990.optionalRotationMode = i13991[46]
  i13990.optionalScrambleMode = i13991[47]
  i13990.optionalShakeRandomnessMode = i13991[48]
  i13990.optionalString = i13991[49]
  i13990.updateType = i13991[50]
  i13990.isSpeedBased = !!i13991[51]
  i13990.hasOnStart = !!i13991[52]
  i13990.hasOnPlay = !!i13991[53]
  i13990.hasOnUpdate = !!i13991[54]
  i13990.hasOnStepComplete = !!i13991[55]
  i13990.hasOnComplete = !!i13991[56]
  i13990.hasOnTweenCreated = !!i13991[57]
  i13990.hasOnRewind = !!i13991[58]
  i13990.onStart = request.d('UnityEngine.Events.UnityEvent', i13991[59], i13990.onStart)
  i13990.onPlay = request.d('UnityEngine.Events.UnityEvent', i13991[60], i13990.onPlay)
  i13990.onUpdate = request.d('UnityEngine.Events.UnityEvent', i13991[61], i13990.onUpdate)
  i13990.onStepComplete = request.d('UnityEngine.Events.UnityEvent', i13991[62], i13990.onStepComplete)
  i13990.onComplete = request.d('UnityEngine.Events.UnityEvent', i13991[63], i13990.onComplete)
  i13990.onTweenCreated = request.d('UnityEngine.Events.UnityEvent', i13991[64], i13990.onTweenCreated)
  i13990.onRewind = request.d('UnityEngine.Events.UnityEvent', i13991[65], i13990.onRewind)
  return i13990
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D"] = function (request, data, root) {
  var i13992 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D' )
  var i13993 = data
  i13992.usedByComposite = !!i13993[0]
  i13992.autoTiling = !!i13993[1]
  i13992.size = new pc.Vec2( i13993[2], i13993[3] )
  i13992.edgeRadius = i13993[4]
  i13992.enabled = !!i13993[5]
  i13992.isTrigger = !!i13993[6]
  i13992.usedByEffector = !!i13993[7]
  i13992.density = i13993[8]
  i13992.offset = new pc.Vec2( i13993[9], i13993[10] )
  request.r(i13993[11], i13993[12], 0, i13992, 'material')
  return i13992
}

Deserializers["BasicDrag"] = function (request, data, root) {
  var i13994 = root || request.c( 'BasicDrag' )
  var i13995 = data
  i13994.canDrag = !!i13995[0]
  i13994.dragByDelta = !!i13995[1]
  i13994.isDragging = !!i13995[2]
  i13994.moveWithPointer = !!i13995[3]
  i13994.canReturn = !!i13995[4]
  i13994.jumpOnReturn = !!i13995[5]
  i13994.returnTime = i13995[6]
  i13994.Tool_Offset = new pc.Vec3( i13995[7], i13995[8], i13995[9] )
  i13994.canScaleIncrease = !!i13995[10]
  i13994.Self_ScaleNew = new pc.Vec3( i13995[11], i13995[12], i13995[13] )
  i13994.canRotateOnPick = !!i13995[14]
  i13994.startRot = new pc.Vec3( i13995[15], i13995[16], i13995[17] )
  i13994.newRot = new pc.Vec3( i13995[18], i13995[19], i13995[20] )
  var i13997 = i13995[21]
  var i13996 = []
  for(var i = 0; i < i13997.length; i += 2) {
  request.r(i13997[i + 0], i13997[i + 1], 2, i13996, '')
  }
  i13994.childSprite = i13996
  request.r(i13995[22], i13995[23], 0, i13994, 'ToolSelectClip')
  request.r(i13995[24], i13995[25], 0, i13994, 'ToolLoopClip')
  request.r(i13995[26], i13995[27], 0, i13994, 'thisParticles')
  i13994.onDragparticle = !!i13995[28]
  request.r(i13995[29], i13995[30], 0, i13994, 'dragParticles')
  request.r(i13995[31], i13995[32], 0, i13994, 'anim')
  i13994.startPos = new pc.Vec3( i13995[33], i13995[34], i13995[35] )
  i13994.startScale = new pc.Vec3( i13995[36], i13995[37], i13995[38] )
  i13994.Vibration = !!i13995[39]
  i13994.isPlacedCannotMove = !!i13995[40]
  i13994.isObjectMovingWhileDragging = !!i13995[41]
  i13994.OnMouseDownEvent = request.d('System.Action', i13995[42], i13994.OnMouseDownEvent)
  i13994.OnMouseUpEvent = request.d('System.Action', i13995[43], i13994.OnMouseUpEvent)
  i13994.ProgStartEvent = request.d('System.Action', i13995[44], i13994.ProgStartEvent)
  i13994.ProgEndEvent = request.d('System.Action', i13995[45], i13994.ProgEndEvent)
  i13994.canCallMouseUpWhenGamePaused = !!i13995[46]
  i13994.ClampX_L = i13995[47]
  i13994.ClampX_H = i13995[48]
  i13994.ClampY_L = i13995[49]
  i13994.ClampY_H = i13995[50]
  i13994.startOrder = i13995[51]
  i13994.dontResetItIsInCollider = !!i13995[52]
  request.r(i13995[53], i13995[54], 0, i13994, 'thisCollider')
  request.r(i13995[55], i13995[56], 0, i13994, 'thisSR')
  i13994.OnMouseDownEventIndependentFromCanDrag = request.d('System.Action', i13995[57], i13994.OnMouseDownEventIndependentFromCanDrag)
  return i13994
}

Deserializers["System.Action"] = function (request, data, root) {
  var i14000 = root || request.c( 'System.Action' )
  var i14001 = data
  return i14000
}

Deserializers["BD_Clamp"] = function (request, data, root) {
  var i14002 = root || request.c( 'BD_Clamp' )
  var i14003 = data
  i14002.ClampX_L = i14003[0]
  i14002.ClampX_H = i14003[1]
  i14002.ClampY_L = i14003[2]
  i14002.ClampY_H = i14003[3]
  return i14002
}

Deserializers["OutlinePulse"] = function (request, data, root) {
  var i14004 = root || request.c( 'OutlinePulse' )
  var i14005 = data
  i14004.smallThickness = i14005[0]
  i14004.largeThickness = i14005[1]
  i14004.transitionSpeed = i14005[2]
  i14004.animationSpeed = i14005[3]
  i14004.isThickOutline = !!i14005[4]
  i14004.animate = !!i14005[5]
  i14004.hideSpriteOnly = !!i14005[6]
  return i14004
}

Deserializers["BD_ItemPick"] = function (request, data, root) {
  var i14006 = root || request.c( 'BD_ItemPick' )
  var i14007 = data
  request.r(i14007[0], i14007[1], 0, i14006, 'Tool')
  request.r(i14007[2], i14007[3], 0, i14006, 'Outline')
  request.r(i14007[4], i14007[5], 0, i14006, 'itemRend')
  request.r(i14007[6], i14007[7], 0, i14006, 'pick_sp')
  i14006.OnTap = request.d('UnityEngine.Events.UnityEvent', i14007[8], i14006.OnTap)
  i14006.OnComplete = request.d('UnityEngine.Events.UnityEvent', i14007[9], i14006.OnComplete)
  request.r(i14007[10], i14007[11], 0, i14006, 'Clip')
  i14006.minDragDistance = i14007[12]
  i14006.isTaped = !!i14007[13]
  return i14006
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i14008 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i14009 = data
  request.r(i14009[0], i14009[1], 0, i14008, 'm_ObjectArgument')
  i14008.m_ObjectArgumentAssemblyTypeName = i14009[2]
  i14008.m_IntArgument = i14009[3]
  i14008.m_FloatArgument = i14009[4]
  i14008.m_StringArgument = i14009[5]
  i14008.m_BoolArgument = !!i14009[6]
  return i14008
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystem"] = function (request, data, root) {
  var i14010 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystem' )
  var i14011 = data
  i14010.main = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule', i14011[0], i14010.main)
  i14010.colorBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule', i14011[1], i14010.colorBySpeed)
  i14010.colorOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule', i14011[2], i14010.colorOverLifetime)
  i14010.emission = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule', i14011[3], i14010.emission)
  i14010.rotationBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule', i14011[4], i14010.rotationBySpeed)
  i14010.rotationOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule', i14011[5], i14010.rotationOverLifetime)
  i14010.shape = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule', i14011[6], i14010.shape)
  i14010.sizeBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule', i14011[7], i14010.sizeBySpeed)
  i14010.sizeOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule', i14011[8], i14010.sizeOverLifetime)
  i14010.textureSheetAnimation = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule', i14011[9], i14010.textureSheetAnimation)
  i14010.velocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule', i14011[10], i14010.velocityOverLifetime)
  i14010.noise = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule', i14011[11], i14010.noise)
  i14010.inheritVelocity = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule', i14011[12], i14010.inheritVelocity)
  i14010.forceOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule', i14011[13], i14010.forceOverLifetime)
  i14010.limitVelocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule', i14011[14], i14010.limitVelocityOverLifetime)
  i14010.useAutoRandomSeed = !!i14011[15]
  i14010.randomSeed = i14011[16]
  return i14010
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule"] = function (request, data, root) {
  var i14012 = root || new pc.ParticleSystemMain()
  var i14013 = data
  i14012.duration = i14013[0]
  i14012.loop = !!i14013[1]
  i14012.prewarm = !!i14013[2]
  i14012.startDelay = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i14013[3], i14012.startDelay)
  i14012.startLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i14013[4], i14012.startLifetime)
  i14012.startSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i14013[5], i14012.startSpeed)
  i14012.startSize3D = !!i14013[6]
  i14012.startSizeX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i14013[7], i14012.startSizeX)
  i14012.startSizeY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i14013[8], i14012.startSizeY)
  i14012.startSizeZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i14013[9], i14012.startSizeZ)
  i14012.startRotation3D = !!i14013[10]
  i14012.startRotationX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i14013[11], i14012.startRotationX)
  i14012.startRotationY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i14013[12], i14012.startRotationY)
  i14012.startRotationZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i14013[13], i14012.startRotationZ)
  i14012.startColor = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i14013[14], i14012.startColor)
  i14012.gravityModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i14013[15], i14012.gravityModifier)
  i14012.simulationSpace = i14013[16]
  request.r(i14013[17], i14013[18], 0, i14012, 'customSimulationSpace')
  i14012.simulationSpeed = i14013[19]
  i14012.useUnscaledTime = !!i14013[20]
  i14012.scalingMode = i14013[21]
  i14012.playOnAwake = !!i14013[22]
  i14012.maxParticles = i14013[23]
  i14012.emitterVelocityMode = i14013[24]
  i14012.stopAction = i14013[25]
  return i14012
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve"] = function (request, data, root) {
  var i14014 = root || new pc.MinMaxCurve()
  var i14015 = data
  i14014.mode = i14015[0]
  i14014.curveMin = new pc.AnimationCurve( { keys_flow: i14015[1] } )
  i14014.curveMax = new pc.AnimationCurve( { keys_flow: i14015[2] } )
  i14014.curveMultiplier = i14015[3]
  i14014.constantMin = i14015[4]
  i14014.constantMax = i14015[5]
  return i14014
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient"] = function (request, data, root) {
  var i14016 = root || new pc.MinMaxGradient()
  var i14017 = data
  i14016.mode = i14017[0]
  i14016.gradientMin = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i14017[1], i14016.gradientMin)
  i14016.gradientMax = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i14017[2], i14016.gradientMax)
  i14016.colorMin = new pc.Color(i14017[3], i14017[4], i14017[5], i14017[6])
  i14016.colorMax = new pc.Color(i14017[7], i14017[8], i14017[9], i14017[10])
  return i14016
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient"] = function (request, data, root) {
  var i14018 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient' )
  var i14019 = data
  i14018.mode = i14019[0]
  var i14021 = i14019[1]
  var i14020 = []
  for(var i = 0; i < i14021.length; i += 1) {
    i14020.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey', i14021[i + 0]) );
  }
  i14018.colorKeys = i14020
  var i14023 = i14019[2]
  var i14022 = []
  for(var i = 0; i < i14023.length; i += 1) {
    i14022.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey', i14023[i + 0]) );
  }
  i14018.alphaKeys = i14022
  return i14018
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule"] = function (request, data, root) {
  var i14024 = root || new pc.ParticleSystemColorBySpeed()
  var i14025 = data
  i14024.enabled = !!i14025[0]
  i14024.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i14025[1], i14024.color)
  i14024.range = new pc.Vec2( i14025[2], i14025[3] )
  return i14024
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey"] = function (request, data, root) {
  var i14028 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey' )
  var i14029 = data
  i14028.color = new pc.Color(i14029[0], i14029[1], i14029[2], i14029[3])
  i14028.time = i14029[4]
  return i14028
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey"] = function (request, data, root) {
  var i14032 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey' )
  var i14033 = data
  i14032.alpha = i14033[0]
  i14032.time = i14033[1]
  return i14032
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule"] = function (request, data, root) {
  var i14034 = root || new pc.ParticleSystemColorOverLifetime()
  var i14035 = data
  i14034.enabled = !!i14035[0]
  i14034.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i14035[1], i14034.color)
  return i14034
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule"] = function (request, data, root) {
  var i14036 = root || new pc.ParticleSystemEmitter()
  var i14037 = data
  i14036.enabled = !!i14037[0]
  i14036.rateOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i14037[1], i14036.rateOverTime)
  i14036.rateOverDistance = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i14037[2], i14036.rateOverDistance)
  var i14039 = i14037[3]
  var i14038 = []
  for(var i = 0; i < i14039.length; i += 1) {
    i14038.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst', i14039[i + 0]) );
  }
  i14036.bursts = i14038
  return i14036
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst"] = function (request, data, root) {
  var i14042 = root || new pc.ParticleSystemBurst()
  var i14043 = data
  i14042.count = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i14043[0], i14042.count)
  i14042.cycleCount = i14043[1]
  i14042.minCount = i14043[2]
  i14042.maxCount = i14043[3]
  i14042.repeatInterval = i14043[4]
  i14042.time = i14043[5]
  return i14042
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule"] = function (request, data, root) {
  var i14044 = root || new pc.ParticleSystemRotationBySpeed()
  var i14045 = data
  i14044.enabled = !!i14045[0]
  i14044.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i14045[1], i14044.x)
  i14044.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i14045[2], i14044.y)
  i14044.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i14045[3], i14044.z)
  i14044.separateAxes = !!i14045[4]
  i14044.range = new pc.Vec2( i14045[5], i14045[6] )
  return i14044
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule"] = function (request, data, root) {
  var i14046 = root || new pc.ParticleSystemRotationOverLifetime()
  var i14047 = data
  i14046.enabled = !!i14047[0]
  i14046.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i14047[1], i14046.x)
  i14046.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i14047[2], i14046.y)
  i14046.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i14047[3], i14046.z)
  i14046.separateAxes = !!i14047[4]
  return i14046
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule"] = function (request, data, root) {
  var i14048 = root || new pc.ParticleSystemShape()
  var i14049 = data
  i14048.enabled = !!i14049[0]
  i14048.shapeType = i14049[1]
  i14048.randomDirectionAmount = i14049[2]
  i14048.sphericalDirectionAmount = i14049[3]
  i14048.randomPositionAmount = i14049[4]
  i14048.alignToDirection = !!i14049[5]
  i14048.radius = i14049[6]
  i14048.radiusMode = i14049[7]
  i14048.radiusSpread = i14049[8]
  i14048.radiusSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i14049[9], i14048.radiusSpeed)
  i14048.radiusThickness = i14049[10]
  i14048.angle = i14049[11]
  i14048.length = i14049[12]
  i14048.boxThickness = new pc.Vec3( i14049[13], i14049[14], i14049[15] )
  i14048.meshShapeType = i14049[16]
  request.r(i14049[17], i14049[18], 0, i14048, 'mesh')
  request.r(i14049[19], i14049[20], 0, i14048, 'meshRenderer')
  request.r(i14049[21], i14049[22], 0, i14048, 'skinnedMeshRenderer')
  i14048.useMeshMaterialIndex = !!i14049[23]
  i14048.meshMaterialIndex = i14049[24]
  i14048.useMeshColors = !!i14049[25]
  i14048.normalOffset = i14049[26]
  i14048.arc = i14049[27]
  i14048.arcMode = i14049[28]
  i14048.arcSpread = i14049[29]
  i14048.arcSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i14049[30], i14048.arcSpeed)
  i14048.donutRadius = i14049[31]
  i14048.position = new pc.Vec3( i14049[32], i14049[33], i14049[34] )
  i14048.rotation = new pc.Vec3( i14049[35], i14049[36], i14049[37] )
  i14048.scale = new pc.Vec3( i14049[38], i14049[39], i14049[40] )
  return i14048
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule"] = function (request, data, root) {
  var i14050 = root || new pc.ParticleSystemSizeBySpeed()
  var i14051 = data
  i14050.enabled = !!i14051[0]
  i14050.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i14051[1], i14050.x)
  i14050.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i14051[2], i14050.y)
  i14050.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i14051[3], i14050.z)
  i14050.separateAxes = !!i14051[4]
  i14050.range = new pc.Vec2( i14051[5], i14051[6] )
  return i14050
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule"] = function (request, data, root) {
  var i14052 = root || new pc.ParticleSystemSizeOverLifetime()
  var i14053 = data
  i14052.enabled = !!i14053[0]
  i14052.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i14053[1], i14052.x)
  i14052.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i14053[2], i14052.y)
  i14052.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i14053[3], i14052.z)
  i14052.separateAxes = !!i14053[4]
  return i14052
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule"] = function (request, data, root) {
  var i14054 = root || new pc.ParticleSystemTextureSheetAnimation()
  var i14055 = data
  i14054.enabled = !!i14055[0]
  i14054.mode = i14055[1]
  i14054.animation = i14055[2]
  i14054.numTilesX = i14055[3]
  i14054.numTilesY = i14055[4]
  i14054.useRandomRow = !!i14055[5]
  i14054.frameOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i14055[6], i14054.frameOverTime)
  i14054.startFrame = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i14055[7], i14054.startFrame)
  i14054.cycleCount = i14055[8]
  i14054.rowIndex = i14055[9]
  i14054.flipU = i14055[10]
  i14054.flipV = i14055[11]
  i14054.spriteCount = i14055[12]
  var i14057 = i14055[13]
  var i14056 = []
  for(var i = 0; i < i14057.length; i += 2) {
  request.r(i14057[i + 0], i14057[i + 1], 2, i14056, '')
  }
  i14054.sprites = i14056
  return i14054
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule"] = function (request, data, root) {
  var i14060 = root || new pc.ParticleSystemVelocityOverLifetime()
  var i14061 = data
  i14060.enabled = !!i14061[0]
  i14060.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i14061[1], i14060.x)
  i14060.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i14061[2], i14060.y)
  i14060.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i14061[3], i14060.z)
  i14060.radial = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i14061[4], i14060.radial)
  i14060.speedModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i14061[5], i14060.speedModifier)
  i14060.space = i14061[6]
  i14060.orbitalX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i14061[7], i14060.orbitalX)
  i14060.orbitalY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i14061[8], i14060.orbitalY)
  i14060.orbitalZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i14061[9], i14060.orbitalZ)
  i14060.orbitalOffsetX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i14061[10], i14060.orbitalOffsetX)
  i14060.orbitalOffsetY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i14061[11], i14060.orbitalOffsetY)
  i14060.orbitalOffsetZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i14061[12], i14060.orbitalOffsetZ)
  return i14060
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule"] = function (request, data, root) {
  var i14062 = root || new pc.ParticleSystemNoise()
  var i14063 = data
  i14062.enabled = !!i14063[0]
  i14062.separateAxes = !!i14063[1]
  i14062.strengthX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i14063[2], i14062.strengthX)
  i14062.strengthY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i14063[3], i14062.strengthY)
  i14062.strengthZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i14063[4], i14062.strengthZ)
  i14062.frequency = i14063[5]
  i14062.damping = !!i14063[6]
  i14062.octaveCount = i14063[7]
  i14062.octaveMultiplier = i14063[8]
  i14062.octaveScale = i14063[9]
  i14062.quality = i14063[10]
  i14062.scrollSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i14063[11], i14062.scrollSpeed)
  i14062.scrollSpeedMultiplier = i14063[12]
  i14062.remapEnabled = !!i14063[13]
  i14062.remapX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i14063[14], i14062.remapX)
  i14062.remapY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i14063[15], i14062.remapY)
  i14062.remapZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i14063[16], i14062.remapZ)
  i14062.positionAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i14063[17], i14062.positionAmount)
  i14062.rotationAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i14063[18], i14062.rotationAmount)
  i14062.sizeAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i14063[19], i14062.sizeAmount)
  return i14062
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule"] = function (request, data, root) {
  var i14064 = root || new pc.ParticleSystemInheritVelocity()
  var i14065 = data
  i14064.enabled = !!i14065[0]
  i14064.mode = i14065[1]
  i14064.curve = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i14065[2], i14064.curve)
  return i14064
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule"] = function (request, data, root) {
  var i14066 = root || new pc.ParticleSystemForceOverLifetime()
  var i14067 = data
  i14066.enabled = !!i14067[0]
  i14066.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i14067[1], i14066.x)
  i14066.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i14067[2], i14066.y)
  i14066.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i14067[3], i14066.z)
  i14066.space = i14067[4]
  i14066.randomized = !!i14067[5]
  return i14066
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule"] = function (request, data, root) {
  var i14068 = root || new pc.ParticleSystemLimitVelocityOverLifetime()
  var i14069 = data
  i14068.enabled = !!i14069[0]
  i14068.limit = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i14069[1], i14068.limit)
  i14068.limitX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i14069[2], i14068.limitX)
  i14068.limitY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i14069[3], i14068.limitY)
  i14068.limitZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i14069[4], i14068.limitZ)
  i14068.dampen = i14069[5]
  i14068.separateAxes = !!i14069[6]
  i14068.space = i14069[7]
  i14068.drag = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i14069[8], i14068.drag)
  i14068.multiplyDragByParticleSize = !!i14069[9]
  i14068.multiplyDragByParticleVelocity = !!i14069[10]
  return i14068
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer"] = function (request, data, root) {
  var i14070 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer' )
  var i14071 = data
  request.r(i14071[0], i14071[1], 0, i14070, 'mesh')
  i14070.meshCount = i14071[2]
  i14070.activeVertexStreamsCount = i14071[3]
  i14070.alignment = i14071[4]
  i14070.renderMode = i14071[5]
  i14070.sortMode = i14071[6]
  i14070.lengthScale = i14071[7]
  i14070.velocityScale = i14071[8]
  i14070.cameraVelocityScale = i14071[9]
  i14070.normalDirection = i14071[10]
  i14070.sortingFudge = i14071[11]
  i14070.minParticleSize = i14071[12]
  i14070.maxParticleSize = i14071[13]
  i14070.pivot = new pc.Vec3( i14071[14], i14071[15], i14071[16] )
  request.r(i14071[17], i14071[18], 0, i14070, 'trailMaterial')
  i14070.applyActiveColorSpace = !!i14071[19]
  i14070.enabled = !!i14071[20]
  request.r(i14071[21], i14071[22], 0, i14070, 'sharedMaterial')
  var i14073 = i14071[23]
  var i14072 = []
  for(var i = 0; i < i14073.length; i += 2) {
  request.r(i14073[i + 0], i14073[i + 1], 2, i14072, '')
  }
  i14070.sharedMaterials = i14072
  i14070.receiveShadows = !!i14071[24]
  i14070.shadowCastingMode = i14071[25]
  i14070.sortingLayerID = i14071[26]
  i14070.sortingOrder = i14071[27]
  i14070.lightmapIndex = i14071[28]
  i14070.lightmapSceneIndex = i14071[29]
  i14070.lightmapScaleOffset = new pc.Vec4( i14071[30], i14071[31], i14071[32], i14071[33] )
  i14070.lightProbeUsage = i14071[34]
  i14070.reflectionProbeUsage = i14071[35]
  return i14070
}

Deserializers["BD_Sticky"] = function (request, data, root) {
  var i14074 = root || request.c( 'BD_Sticky' )
  var i14075 = data
  request.r(i14075[0], i14075[1], 0, i14074, 'anim')
  i14074.isVerticlePull = !!i14075[2]
  request.r(i14075[3], i14075[4], 0, i14074, 'pickSfx')
  request.r(i14075[5], i14075[6], 0, i14074, 'pulledClip')
  request.r(i14075[7], i14075[8], 0, i14074, 'pullSource')
  i14074.OnComplete = request.d('UnityEngine.Events.UnityEvent', i14075[9], i14074.OnComplete)
  i14074.changeLayerPick = !!i14075[10]
  request.r(i14075[11], i14075[12], 0, i14074, 'sp_rendr')
  i14074.def_layerNo = i14075[13]
  i14074.tar_LayerNo = i14075[14]
  i14074.direction = i14075[15]
  i14074.dragThreshold = i14075[16]
  i14074.pullDistanceToFree = i14075[17]
  i14074.returnSpeed = i14075[18]
  i14074.resistance = i14075[19]
  var i14077 = i14075[20]
  var i14076 = []
  for(var i = 0; i < i14077.length; i += 2) {
  request.r(i14077[i + 0], i14077[i + 1], 2, i14076, '')
  }
  i14074.StartBones = i14076
  var i14079 = i14075[21]
  var i14078 = []
  for(var i = 0; i < i14079.length; i += 2) {
  request.r(i14079[i + 0], i14079[i + 1], 2, i14078, '')
  }
  i14074.EndBones = i14078
  request.r(i14075[22], i14075[23], 0, i14074, 'BonePivot')
  return i14074
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i14080 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i14081 = data
  request.r(i14081[0], i14081[1], 0, i14080, 'clip')
  request.r(i14081[2], i14081[3], 0, i14080, 'outputAudioMixerGroup')
  i14080.playOnAwake = !!i14081[4]
  i14080.loop = !!i14081[5]
  i14080.time = i14081[6]
  i14080.volume = i14081[7]
  i14080.pitch = i14081[8]
  i14080.enabled = !!i14081[9]
  return i14080
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CircleCollider2D"] = function (request, data, root) {
  var i14082 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CircleCollider2D' )
  var i14083 = data
  i14082.radius = i14083[0]
  i14082.enabled = !!i14083[1]
  i14082.isTrigger = !!i14083[2]
  i14082.usedByEffector = !!i14083[3]
  i14082.density = i14083[4]
  i14082.offset = new pc.Vec2( i14083[5], i14083[6] )
  request.r(i14083[7], i14083[8], 0, i14082, 'material')
  return i14082
}

Deserializers["PlayParticlesOnCollision"] = function (request, data, root) {
  var i14084 = root || request.c( 'PlayParticlesOnCollision' )
  var i14085 = data
  request.r(i14085[0], i14085[1], 0, i14084, 'Target')
  request.r(i14085[2], i14085[3], 0, i14084, 'ParticlePrefab')
  i14084.destroyIt = !!i14085[4]
  i14084.stayAtPlace = !!i14085[5]
  i14084.disableOnCollision = !!i14085[6]
  i14084.OnCollisionEvent = request.d('UnityEngine.Events.UnityEvent', i14085[7], i14084.OnCollisionEvent)
  return i14084
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteMask"] = function (request, data, root) {
  var i14086 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteMask' )
  var i14087 = data
  i14086.frontSortingLayerID = i14087[0]
  i14086.frontSortingOrder = i14087[1]
  i14086.backSortingLayerID = i14087[2]
  i14086.backSortingOrder = i14087[3]
  i14086.alphaCutoff = i14087[4]
  request.r(i14087[5], i14087[6], 0, i14086, 'sprite')
  i14086.tileMode = i14087[7]
  i14086.isCustomRangeActive = !!i14087[8]
  i14086.spriteSortPoint = i14087[9]
  i14086.enabled = !!i14087[10]
  request.r(i14087[11], i14087[12], 0, i14086, 'sharedMaterial')
  var i14089 = i14087[13]
  var i14088 = []
  for(var i = 0; i < i14089.length; i += 2) {
  request.r(i14089[i + 0], i14089[i + 1], 2, i14088, '')
  }
  i14086.sharedMaterials = i14088
  i14086.receiveShadows = !!i14087[14]
  i14086.shadowCastingMode = i14087[15]
  i14086.sortingLayerID = i14087[16]
  i14086.sortingOrder = i14087[17]
  i14086.lightmapIndex = i14087[18]
  i14086.lightmapSceneIndex = i14087[19]
  i14086.lightmapScaleOffset = new pc.Vec4( i14087[20], i14087[21], i14087[22], i14087[23] )
  i14086.lightProbeUsage = i14087[24]
  i14086.reflectionProbeUsage = i14087[25]
  return i14086
}

Deserializers["PlayTweenOnHit"] = function (request, data, root) {
  var i14090 = root || request.c( 'PlayTweenOnHit' )
  var i14091 = data
  i14090.isContinueous = !!i14091[0]
  request.r(i14091[1], i14091[2], 0, i14090, 'tool')
  var i14093 = i14091[3]
  var i14092 = []
  for(var i = 0; i < i14093.length; i += 2) {
  request.r(i14093[i + 0], i14093[i + 1], 2, i14092, '')
  }
  i14090.animsToPlay = i14092
  request.r(i14091[4], i14091[5], 0, i14090, 'tipTarget')
  return i14090
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.PolygonCollider2D"] = function (request, data, root) {
  var i14096 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.PolygonCollider2D' )
  var i14097 = data
  i14096.usedByComposite = !!i14097[0]
  i14096.autoTiling = !!i14097[1]
  var i14099 = i14097[2]
  var i14098 = []
  for(var i = 0; i < i14099.length; i += 1) {
  var i14101 = i14099[i + 0]
  var i14100 = []
  for(var i = 0; i < i14101.length; i += 2) {
    i14100.push( new pc.Vec2( i14101[i + 0], i14101[i + 1] ) );
  }
    i14098.push( i14100 );
  }
  i14096.points = i14098
  i14096.enabled = !!i14097[3]
  i14096.isTrigger = !!i14097[4]
  i14096.usedByEffector = !!i14097[5]
  i14096.density = i14097[6]
  i14096.offset = new pc.Vec2( i14097[7], i14097[8] )
  request.r(i14097[9], i14097[10], 0, i14096, 'material')
  return i14096
}

Deserializers["PlaySfxOnCollision"] = function (request, data, root) {
  var i14108 = root || request.c( 'PlaySfxOnCollision' )
  var i14109 = data
  request.r(i14109[0], i14109[1], 0, i14108, 'Tip')
  i14108.Mode = i14109[2]
  request.r(i14109[3], i14109[4], 0, i14108, 'DragInput')
  request.r(i14109[5], i14109[6], 0, i14108, 'Source')
  i14108.startVol = i14109[7]
  i14108.targetVol = i14109[8]
  i14108.duration = i14109[9]
  request.r(i14109[10], i14109[11], 0, i14108, 'Particles')
  i14108.isDone = !!i14109[12]
  i14108.isInArea = !!i14109[13]
  i14108.isPlaying = !!i14109[14]
  return i14108
}

Deserializers["InteractableBones"] = function (request, data, root) {
  var i14110 = root || request.c( 'InteractableBones' )
  var i14111 = data
  request.r(i14111[0], i14111[1], 0, i14110, 'Tip')
  i14110.MoveAmount = i14111[2]
  i14110.MoveSpeed = i14111[3]
  i14110.ShakeSpeed = i14111[4]
  i14110.MovementThreshold = i14111[5]
  i14110.MoveX = !!i14111[6]
  i14110.MoveY = !!i14111[7]
  return i14110
}

Deserializers["WaypointFollower"] = function (request, data, root) {
  var i14112 = root || request.c( 'WaypointFollower' )
  var i14113 = data
  var i14115 = i14113[0]
  var i14114 = []
  for(var i = 0; i < i14115.length; i += 2) {
  request.r(i14115[i + 0], i14115[i + 1], 2, i14114, '')
  }
  i14112.waypoints = i14114
  i14112.speed = i14113[1]
  i14112.rotationSpeed = i14113[2]
  i14112.loop = !!i14113[3]
  i14112.reverse = !!i14113[4]
  i14112.canMove = !!i14113[5]
  request.r(i14113[6], i14113[7], 0, i14112, 'movingSfx')
  return i14112
}

Deserializers["BD_Action"] = function (request, data, root) {
  var i14116 = root || request.c( 'BD_Action' )
  var i14117 = data
  i14116.OnMouseDownEvent = request.d('UnityEngine.Events.UnityEvent', i14117[0], i14116.OnMouseDownEvent)
  i14116.OnMouseUpEvent = request.d('UnityEngine.Events.UnityEvent', i14117[1], i14116.OnMouseUpEvent)
  i14116.setToolLayer = !!i14117[2]
  request.r(i14117[3], i14117[4], 0, i14116, 'tool_SP')
  return i14116
}

Deserializers["BD_CameraFollow"] = function (request, data, root) {
  var i14118 = root || request.c( 'BD_CameraFollow' )
  var i14119 = data
  request.r(i14119[0], i14119[1], 0, i14118, 'Tool')
  request.r(i14119[2], i14119[3], 0, i14118, 'Pivot')
  i14118.FOV = i14119[4]
  i14118.Y_L = i14119[5]
  i14118.Y_H = i14119[6]
  i14118.X_L = i14119[7]
  i14118.X_R = i14119[8]
  i14118.startDelay = i14119[9]
  i14118.duration = i14119[10]
  return i14118
}

Deserializers["BD_ToolRotate"] = function (request, data, root) {
  var i14120 = root || request.c( 'BD_ToolRotate' )
  var i14121 = data
  i14120.startDelay = i14121[0]
  request.r(i14121[1], i14121[2], 0, i14120, 'Tool')
  request.r(i14121[3], i14121[4], 0, i14120, 'Clamp')
  request.r(i14121[5], i14121[6], 0, i14120, 'Pivot')
  i14120.MinAngle = new pc.Vec3( i14121[7], i14121[8], i14121[9] )
  i14120.MaxAngle = new pc.Vec3( i14121[10], i14121[11], i14121[12] )
  i14120.rotationSpeed = i14121[13]
  return i14120
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D"] = function (request, data, root) {
  var i14122 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D' )
  var i14123 = data
  i14122.bodyType = i14123[0]
  request.r(i14123[1], i14123[2], 0, i14122, 'material')
  i14122.simulated = !!i14123[3]
  i14122.useAutoMass = !!i14123[4]
  i14122.mass = i14123[5]
  i14122.drag = i14123[6]
  i14122.angularDrag = i14123[7]
  i14122.gravityScale = i14123[8]
  i14122.collisionDetectionMode = i14123[9]
  i14122.sleepMode = i14123[10]
  i14122.constraints = i14123[11]
  return i14122
}

Deserializers["BugKill_Tip"] = function (request, data, root) {
  var i14124 = root || request.c( 'BugKill_Tip' )
  var i14125 = data
  var i14127 = i14125[0]
  var i14126 = []
  for(var i = 0; i < i14127.length; i += 2) {
  request.r(i14127[i + 0], i14127[i + 1], 2, i14126, '')
  }
  i14124.targets = i14126
  i14124.waypointFollower = !!i14125[1]
  i14124.fallSpeed = i14125[2]
  i14124.totalTargets = i14125[3]
  i14124.killCount = i14125[4]
  request.r(i14125[5], i14125[6], 0, i14124, 'bugKillSfx')
  i14124.OnComplete = request.d('UnityEngine.Events.UnityEvent', i14125[7], i14124.OnComplete)
  return i14124
}

Deserializers["BD_Progress"] = function (request, data, root) {
  var i14130 = root || request.c( 'BD_Progress' )
  var i14131 = data
  var i14133 = i14131[0]
  var i14132 = []
  for(var i = 0; i < i14133.length; i += 1) {
    i14132.push( request.d('ScratchData', i14133[i + 0]) );
  }
  i14130.AllScratches = i14132
  i14130.OnScratchComplete = request.d('UnityEngine.Events.UnityEvent', i14131[1], i14130.OnScratchComplete)
  i14130.isProgDone = !!i14131[2]
  i14130.canCallComplete = !!i14131[3]
  i14130.CollectiveAppear = !!i14131[4]
  i14130.tipControl = !!i14131[5]
  i14130.progressControl = !!i14131[6]
  request.r(i14131[7], i14131[8], 0, i14130, 'thisDrag')
  i14130.CompleteEvent = request.d('System.Action', i14131[9], i14130.CompleteEvent)
  i14130.SubCompleteEvent = request.d('System.Action', i14131[10], i14130.SubCompleteEvent)
  return i14130
}

Deserializers["ScratchData"] = function (request, data, root) {
  var i14136 = root || request.c( 'ScratchData' )
  var i14137 = data
  request.r(i14137[0], i14137[1], 0, i14136, 'ScratchManager')
  i14136.scratchLimit = i14137[2]
  i14136.isComplete = !!i14137[3]
  return i14136
}

Deserializers["BD_ProgressHelper"] = function (request, data, root) {
  var i14138 = root || request.c( 'BD_ProgressHelper' )
  var i14139 = data
  request.r(i14139[0], i14139[1], 0, i14138, 'BD_Progress')
  request.r(i14139[2], i14139[3], 0, i14138, 'fadeSprite')
  i14138.fadeIn = !!i14139[4]
  return i14138
}

Deserializers["ActionOnTap"] = function (request, data, root) {
  var i14140 = root || request.c( 'ActionOnTap' )
  var i14141 = data
  i14140.OnTap = request.d('UnityEngine.Events.UnityEvent', i14141[0], i14140.OnTap)
  return i14140
}

Deserializers["BD_SpriteChange"] = function (request, data, root) {
  var i14142 = root || request.c( 'BD_SpriteChange' )
  var i14143 = data
  request.r(i14143[0], i14143[1], 0, i14142, 'BD')
  request.r(i14143[2], i14143[3], 0, i14142, 'SR')
  request.r(i14143[4], i14143[5], 0, i14142, 'Default')
  request.r(i14143[6], i14143[7], 0, i14142, 'Picked')
  i14142.resetOnRelease = !!i14143[8]
  return i14142
}

Deserializers["BD_AnimatorDrag"] = function (request, data, root) {
  var i14144 = root || request.c( 'BD_AnimatorDrag' )
  var i14145 = data
  request.r(i14145[0], i14145[1], 0, i14144, 'BD')
  request.r(i14145[2], i14145[3], 0, i14144, 'anim')
  request.r(i14145[4], i14145[5], 0, i14144, 'Source')
  i14144.Vibration = !!i14145[6]
  i14144.isCompletable = !!i14145[7]
  i14144.completionThreshold = i14145[8]
  i14144.OnComplete = request.d('UnityEngine.Events.UnityEvent', i14145[9], i14144.OnComplete)
  return i14144
}

Deserializers["PlaceItem"] = function (request, data, root) {
  var i14146 = root || request.c( 'PlaceItem' )
  var i14147 = data
  request.r(i14147[0], i14147[1], 0, i14146, 'thisDrag')
  request.r(i14147[2], i14147[3], 0, i14146, 'Target')
  request.r(i14147[4], i14147[5], 0, i14146, 'Clip')
  i14146.jumpOnPlace = !!i14147[6]
  i14146.jumpHeight = i14147[7]
  i14146.jumpDuration = i14147[8]
  i14146.settleDuration = i14147[9]
  i14146.isPlaced = !!i14147[10]
  i14146.isInsideCollider = !!i14147[11]
  i14146.OnPlaced = request.d('UnityEngine.Events.UnityEvent', i14147[12], i14146.OnPlaced)
  return i14146
}

Deserializers["BD_Audio"] = function (request, data, root) {
  var i14148 = root || request.c( 'BD_Audio' )
  var i14149 = data
  request.r(i14149[0], i14149[1], 0, i14148, 'BD')
  request.r(i14149[2], i14149[3], 0, i14148, 'Source')
  i14148.shouldRestart = !!i14149[4]
  i14148.startVol = i14149[5]
  i14148.targetVol = i14149[6]
  i14148.duration = i14149[7]
  i14148.startDelay = i14149[8]
  return i14148
}

Deserializers["Level1_HairAnim"] = function (request, data, root) {
  var i14150 = root || request.c( 'Level1_HairAnim' )
  var i14151 = data
  i14150.holdDuration = i14151[0]
  request.r(i14151[1], i14151[2], 0, i14150, 'targetSprite')
  i14150.onHoldComplete = request.d('UnityEngine.Events.UnityEvent', i14151[3], i14150.onHoldComplete)
  i14150.isHolding = !!i14151[4]
  request.r(i14151[5], i14151[6], 0, i14150, 'targetObj')
  request.r(i14151[7], i14151[8], 0, i14150, 'thisTool')
  request.r(i14151[9], i14151[10], 0, i14150, 'thisToolTip')
  var i14153 = i14151[11]
  var i14152 = []
  for(var i = 0; i < i14153.length; i += 2) {
  request.r(i14153[i + 0], i14153[i + 1], 2, i14152, '')
  }
  i14150.hairsAnim = i14152
  var i14155 = i14151[12]
  var i14154 = []
  for(var i = 0; i < i14155.length; i += 2) {
  request.r(i14155[i + 0], i14155[i + 1], 2, i14154, '')
  }
  i14150.hairsRend = i14154
  i14150.hairsRendFadeThreshold = i14151[13]
  request.r(i14151[14], i14151[15], 0, i14150, 'wetHairRend')
  request.r(i14151[16], i14151[17], 0, i14150, 'dryHairRend')
  request.r(i14151[18], i14151[19], 0, i14150, 'dryHairRendBack')
  i14150.hairAnimStopDuration = i14151[20]
  i14150.hairAnimResumeDuration = i14151[21]
  return i14150
}

Deserializers["SpriteButton"] = function (request, data, root) {
  var i14156 = root || request.c( 'SpriteButton' )
  var i14157 = data
  i14156.onClick = request.d('UnityEngine.Events.UnityEvent', i14157[0], i14156.onClick)
  request.r(i14157[1], i14157[2], 0, i14156, 'spriteRenderer')
  request.r(i14157[3], i14157[4], 0, i14156, 'normalSprite')
  request.r(i14157[5], i14157[6], 0, i14156, 'hoverSprite')
  request.r(i14157[7], i14157[8], 0, i14156, 'pressedSprite')
  i14156.hoverScale = i14157[9]
  i14156.pressScale = i14157[10]
  i14156.animationDuration = i14157[11]
  return i14156
}

Deserializers["DestroyObj"] = function (request, data, root) {
  var i14158 = root || request.c( 'DestroyObj' )
  var i14159 = data
  i14158.destroyDelay = i14159[0]
  return i14158
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh"] = function (request, data, root) {
  var i14160 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh' )
  var i14161 = data
  i14160.name = i14161[0]
  i14160.halfPrecision = !!i14161[1]
  i14160.useSimplification = !!i14161[2]
  i14160.useUInt32IndexFormat = !!i14161[3]
  i14160.vertexCount = i14161[4]
  i14160.aabb = i14161[5]
  var i14163 = i14161[6]
  var i14162 = []
  for(var i = 0; i < i14163.length; i += 1) {
    i14162.push( !!i14163[i + 0] );
  }
  i14160.streams = i14162
  i14160.vertices = i14161[7]
  var i14165 = i14161[8]
  var i14164 = []
  for(var i = 0; i < i14165.length; i += 1) {
    i14164.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh', i14165[i + 0]) );
  }
  i14160.subMeshes = i14164
  var i14167 = i14161[9]
  var i14166 = []
  for(var i = 0; i < i14167.length; i += 16) {
    i14166.push( new pc.Mat4().setData(i14167[i + 0], i14167[i + 1], i14167[i + 2], i14167[i + 3],  i14167[i + 4], i14167[i + 5], i14167[i + 6], i14167[i + 7],  i14167[i + 8], i14167[i + 9], i14167[i + 10], i14167[i + 11],  i14167[i + 12], i14167[i + 13], i14167[i + 14], i14167[i + 15]) );
  }
  i14160.bindposes = i14166
  var i14169 = i14161[10]
  var i14168 = []
  for(var i = 0; i < i14169.length; i += 1) {
    i14168.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape', i14169[i + 0]) );
  }
  i14160.blendShapes = i14168
  return i14160
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh"] = function (request, data, root) {
  var i14174 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh' )
  var i14175 = data
  i14174.triangles = i14175[0]
  return i14174
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape"] = function (request, data, root) {
  var i14180 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape' )
  var i14181 = data
  i14180.name = i14181[0]
  var i14183 = i14181[1]
  var i14182 = []
  for(var i = 0; i < i14183.length; i += 1) {
    i14182.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame', i14183[i + 0]) );
  }
  i14180.frames = i14182
  return i14180
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Cubemap"] = function (request, data, root) {
  var i14184 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Cubemap' )
  var i14185 = data
  i14184.name = i14185[0]
  i14184.atlasId = i14185[1]
  i14184.mipmapCount = i14185[2]
  i14184.hdr = !!i14185[3]
  i14184.size = i14185[4]
  i14184.anisoLevel = i14185[5]
  i14184.filterMode = i14185[6]
  var i14187 = i14185[7]
  var i14186 = []
  for(var i = 0; i < i14187.length; i += 4) {
    i14186.push( UnityEngine.Rect.MinMaxRect(i14187[i + 0], i14187[i + 1], i14187[i + 2], i14187[i + 3]) );
  }
  i14184.rects = i14186
  i14184.wrapU = i14185[8]
  i14184.wrapV = i14185[9]
  return i14184
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i14190 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i14191 = data
  i14190.name = i14191[0]
  i14190.index = i14191[1]
  i14190.startup = !!i14191[2]
  return i14190
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i14192 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i14193 = data
  i14192.aspect = i14193[0]
  i14192.orthographic = !!i14193[1]
  i14192.orthographicSize = i14193[2]
  i14192.backgroundColor = new pc.Color(i14193[3], i14193[4], i14193[5], i14193[6])
  i14192.nearClipPlane = i14193[7]
  i14192.farClipPlane = i14193[8]
  i14192.fieldOfView = i14193[9]
  i14192.depth = i14193[10]
  i14192.clearFlags = i14193[11]
  i14192.cullingMask = i14193[12]
  i14192.rect = i14193[13]
  request.r(i14193[14], i14193[15], 0, i14192, 'targetTexture')
  i14192.usePhysicalProperties = !!i14193[16]
  i14192.focalLength = i14193[17]
  i14192.sensorSize = new pc.Vec2( i14193[18], i14193[19] )
  i14192.lensShift = new pc.Vec2( i14193[20], i14193[21] )
  i14192.gateFit = i14193[22]
  i14192.commandBufferCount = i14193[23]
  i14192.cameraType = i14193[24]
  i14192.enabled = !!i14193[25]
  return i14192
}

Deserializers["CameraController"] = function (request, data, root) {
  var i14194 = root || request.c( 'CameraController' )
  var i14195 = data
  request.r(i14195[0], i14195[1], 0, i14194, 'cam')
  i14194.defaultPosition = new pc.Vec3( i14195[2], i14195[3], i14195[4] )
  i14194.defaultSize = i14195[5]
  i14194.defaultFOV = i14195[6]
  i14194.defaultDuration = i14195[7]
  i14194.defaultEase = i14195[8]
  return i14194
}

Deserializers["MusicSource"] = function (request, data, root) {
  var i14196 = root || request.c( 'MusicSource' )
  var i14197 = data
  request.r(i14197[0], i14197[1], 0, i14196, 'source')
  return i14196
}

Deserializers["UI_Manager"] = function (request, data, root) {
  var i14198 = root || request.c( 'UI_Manager' )
  var i14199 = data
  i14198.levelCompleted = !!i14199[0]
  i14198.isPauseActive = !!i14199[1]
  i14198.loadIndex = i14199[2]
  request.r(i14199[3], i14199[4], 0, i14198, 'removeAdsButton')
  request.r(i14199[5], i14199[6], 0, i14198, 'pauseButton')
  request.r(i14199[7], i14199[8], 0, i14198, 'Fade_Img')
  request.r(i14199[9], i14199[10], 0, i14198, 'TopBarAnim')
  request.r(i14199[11], i14199[12], 0, i14198, 'MainPanel')
  request.r(i14199[13], i14199[14], 0, i14198, 'PausePanel')
  request.r(i14199[15], i14199[16], 0, i14198, 'PausePopUp')
  request.r(i14199[17], i14199[18], 0, i14198, 'PauseCanvasGroup')
  request.r(i14199[19], i14199[20], 0, i14198, 'RateUsPanel')
  request.r(i14199[21], i14199[22], 0, i14198, 'RateUsPopUp')
  request.r(i14199[23], i14199[24], 0, i14198, 'RemoveAdsPanel')
  request.r(i14199[25], i14199[26], 0, i14198, 'RemoveAdsPopUp')
  request.r(i14199[27], i14199[28], 0, i14198, 'RemoveAdsCanvasGroup')
  var i14201 = i14199[29]
  var i14200 = []
  for(var i = 0; i < i14201.length; i += 2) {
  request.r(i14201[i + 0], i14201[i + 1], 2, i14200, '')
  }
  i14198.RemoveAdsAnims = i14200
  request.r(i14199[30], i14199[31], 0, i14198, 'CompletePanel')
  request.r(i14199[32], i14199[33], 0, i14198, 'LevelIcon')
  request.r(i14199[34], i14199[35], 0, i14198, 'CompleteParticles')
  request.r(i14199[36], i14199[37], 0, i14198, 'progressBar')
  request.r(i14199[38], i14199[39], 0, i14198, 'progressText')
  request.r(i14199[40], i14199[41], 0, i14198, 'toolIcon1')
  request.r(i14199[42], i14199[43], 0, i14198, 'toolIcon2')
  request.r(i14199[44], i14199[45], 0, i14198, 'toolIcon3')
  request.r(i14199[46], i14199[47], 0, i14198, 'target1')
  request.r(i14199[48], i14199[49], 0, i14198, 'target2')
  i14198.toolMoveDuration = i14199[50]
  i14198.currentIndex = i14199[51]
  var i14203 = i14199[52]
  var i14202 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Sprite')))
  for(var i = 0; i < i14203.length; i += 2) {
  request.r(i14203[i + 0], i14203[i + 1], 1, i14202, '')
  }
  i14198.allTools = i14202
  request.r(i14199[53], i14199[54], 0, i14198, 'clockProgress')
  request.r(i14199[55], i14199[56], 0, i14198, 'clockProgressFill')
  request.r(i14199[57], i14199[58], 0, i14198, 'clockAudio')
  i14198.moveDistance = i14199[59]
  i14198.animationDuration = i14199[60]
  i14198.greyBgChildName = i14199[61]
  i14198.pushOffset = i14199[62]
  return i14198
}

Deserializers["GameManagerPlayable"] = function (request, data, root) {
  var i14204 = root || request.c( 'GameManagerPlayable' )
  var i14205 = data
  request.r(i14205[0], i14205[1], 0, i14204, 'DefaultMat')
  request.r(i14205[2], i14205[3], 0, i14204, 'BG_Music')
  request.r(i14205[4], i14205[5], 0, i14204, 'restoreEffectShader')
  request.r(i14205[6], i14205[7], 0, i14204, 'stickerEffectShader')
  i14204.isComplete = !!i14205[8]
  i14204.isPaused = !!i14205[9]
  request.r(i14205[10], i14205[11], 0, i14204, 'currentLevel')
  return i14204
}

Deserializers["AudioController"] = function (request, data, root) {
  var i14206 = root || request.c( 'AudioController' )
  var i14207 = data
  request.r(i14207[0], i14207[1], 0, i14206, 'MainMixer')
  request.r(i14207[2], i14207[3], 0, i14206, 'UiClick')
  request.r(i14207[4], i14207[5], 0, i14206, 'UiClickSource')
  var i14209 = i14207[6]
  var i14208 = []
  for(var i = 0; i < i14209.length; i += 2) {
  request.r(i14209[i + 0], i14209[i + 1], 2, i14208, '')
  }
  i14206.SfxSources = i14208
  var i14211 = i14207[7]
  var i14210 = []
  for(var i = 0; i < i14211.length; i += 2) {
  request.r(i14211[i + 0], i14211[i + 1], 2, i14210, '')
  }
  i14206.AllClips = i14210
  return i14206
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i14214 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i14215 = data
  i14214.pivot = new pc.Vec2( i14215[0], i14215[1] )
  i14214.anchorMin = new pc.Vec2( i14215[2], i14215[3] )
  i14214.anchorMax = new pc.Vec2( i14215[4], i14215[5] )
  i14214.sizeDelta = new pc.Vec2( i14215[6], i14215[7] )
  i14214.anchoredPosition3D = new pc.Vec3( i14215[8], i14215[9], i14215[10] )
  i14214.rotation = new pc.Quat(i14215[11], i14215[12], i14215[13], i14215[14])
  i14214.scale = new pc.Vec3( i14215[15], i14215[16], i14215[17] )
  return i14214
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i14216 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i14217 = data
  i14216.planeDistance = i14217[0]
  i14216.referencePixelsPerUnit = i14217[1]
  i14216.isFallbackOverlay = !!i14217[2]
  i14216.renderMode = i14217[3]
  i14216.renderOrder = i14217[4]
  i14216.sortingLayerName = i14217[5]
  i14216.sortingOrder = i14217[6]
  i14216.scaleFactor = i14217[7]
  request.r(i14217[8], i14217[9], 0, i14216, 'worldCamera')
  i14216.overrideSorting = !!i14217[10]
  i14216.pixelPerfect = !!i14217[11]
  i14216.targetDisplay = i14217[12]
  i14216.overridePixelPerfect = !!i14217[13]
  i14216.enabled = !!i14217[14]
  return i14216
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i14218 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i14219 = data
  i14218.m_UiScaleMode = i14219[0]
  i14218.m_ReferencePixelsPerUnit = i14219[1]
  i14218.m_ScaleFactor = i14219[2]
  i14218.m_ReferenceResolution = new pc.Vec2( i14219[3], i14219[4] )
  i14218.m_ScreenMatchMode = i14219[5]
  i14218.m_MatchWidthOrHeight = i14219[6]
  i14218.m_PhysicalUnit = i14219[7]
  i14218.m_FallbackScreenDPI = i14219[8]
  i14218.m_DefaultSpriteDPI = i14219[9]
  i14218.m_DynamicPixelsPerUnit = i14219[10]
  i14218.m_PresetInfoIsWorld = !!i14219[11]
  return i14218
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i14220 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i14221 = data
  i14220.m_IgnoreReversedGraphics = !!i14221[0]
  i14220.m_BlockingObjects = i14221[1]
  i14220.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i14221[2] )
  return i14220
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i14222 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i14223 = data
  i14222.cullTransparentMesh = !!i14223[0]
  return i14222
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i14224 = root || request.c( 'UnityEngine.UI.Image' )
  var i14225 = data
  request.r(i14225[0], i14225[1], 0, i14224, 'm_Sprite')
  i14224.m_Type = i14225[2]
  i14224.m_PreserveAspect = !!i14225[3]
  i14224.m_FillCenter = !!i14225[4]
  i14224.m_FillMethod = i14225[5]
  i14224.m_FillAmount = i14225[6]
  i14224.m_FillClockwise = !!i14225[7]
  i14224.m_FillOrigin = i14225[8]
  i14224.m_UseSpriteMesh = !!i14225[9]
  i14224.m_PixelsPerUnitMultiplier = i14225[10]
  request.r(i14225[11], i14225[12], 0, i14224, 'm_Material')
  i14224.m_Maskable = !!i14225[13]
  i14224.m_Color = new pc.Color(i14225[14], i14225[15], i14225[16], i14225[17])
  i14224.m_RaycastTarget = !!i14225[18]
  i14224.m_RaycastPadding = new pc.Vec4( i14225[19], i14225[20], i14225[21], i14225[22] )
  return i14224
}

Deserializers["UnityEngine.UI.Text"] = function (request, data, root) {
  var i14226 = root || request.c( 'UnityEngine.UI.Text' )
  var i14227 = data
  i14226.m_FontData = request.d('UnityEngine.UI.FontData', i14227[0], i14226.m_FontData)
  i14226.m_Text = i14227[1]
  request.r(i14227[2], i14227[3], 0, i14226, 'm_Material')
  i14226.m_Maskable = !!i14227[4]
  i14226.m_Color = new pc.Color(i14227[5], i14227[6], i14227[7], i14227[8])
  i14226.m_RaycastTarget = !!i14227[9]
  i14226.m_RaycastPadding = new pc.Vec4( i14227[10], i14227[11], i14227[12], i14227[13] )
  return i14226
}

Deserializers["UnityEngine.UI.FontData"] = function (request, data, root) {
  var i14228 = root || request.c( 'UnityEngine.UI.FontData' )
  var i14229 = data
  request.r(i14229[0], i14229[1], 0, i14228, 'm_Font')
  i14228.m_FontSize = i14229[2]
  i14228.m_FontStyle = i14229[3]
  i14228.m_BestFit = !!i14229[4]
  i14228.m_MinSize = i14229[5]
  i14228.m_MaxSize = i14229[6]
  i14228.m_Alignment = i14229[7]
  i14228.m_AlignByGeometry = !!i14229[8]
  i14228.m_RichText = !!i14229[9]
  i14228.m_HorizontalOverflow = i14229[10]
  i14228.m_VerticalOverflow = i14229[11]
  i14228.m_LineSpacing = i14229[12]
  return i14228
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i14230 = root || request.c( 'UnityEngine.UI.Button' )
  var i14231 = data
  i14230.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i14231[0], i14230.m_OnClick)
  i14230.m_Navigation = request.d('UnityEngine.UI.Navigation', i14231[1], i14230.m_Navigation)
  i14230.m_Transition = i14231[2]
  i14230.m_Colors = request.d('UnityEngine.UI.ColorBlock', i14231[3], i14230.m_Colors)
  i14230.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i14231[4], i14230.m_SpriteState)
  i14230.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i14231[5], i14230.m_AnimationTriggers)
  i14230.m_Interactable = !!i14231[6]
  request.r(i14231[7], i14231[8], 0, i14230, 'm_TargetGraphic')
  return i14230
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i14232 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i14233 = data
  i14232.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i14233[0], i14232.m_PersistentCalls)
  return i14232
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i14234 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i14235 = data
  i14234.m_Mode = i14235[0]
  i14234.m_WrapAround = !!i14235[1]
  request.r(i14235[2], i14235[3], 0, i14234, 'm_SelectOnUp')
  request.r(i14235[4], i14235[5], 0, i14234, 'm_SelectOnDown')
  request.r(i14235[6], i14235[7], 0, i14234, 'm_SelectOnLeft')
  request.r(i14235[8], i14235[9], 0, i14234, 'm_SelectOnRight')
  return i14234
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i14236 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i14237 = data
  i14236.m_NormalColor = new pc.Color(i14237[0], i14237[1], i14237[2], i14237[3])
  i14236.m_HighlightedColor = new pc.Color(i14237[4], i14237[5], i14237[6], i14237[7])
  i14236.m_PressedColor = new pc.Color(i14237[8], i14237[9], i14237[10], i14237[11])
  i14236.m_SelectedColor = new pc.Color(i14237[12], i14237[13], i14237[14], i14237[15])
  i14236.m_DisabledColor = new pc.Color(i14237[16], i14237[17], i14237[18], i14237[19])
  i14236.m_ColorMultiplier = i14237[20]
  i14236.m_FadeDuration = i14237[21]
  return i14236
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i14238 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i14239 = data
  request.r(i14239[0], i14239[1], 0, i14238, 'm_HighlightedSprite')
  request.r(i14239[2], i14239[3], 0, i14238, 'm_PressedSprite')
  request.r(i14239[4], i14239[5], 0, i14238, 'm_SelectedSprite')
  request.r(i14239[6], i14239[7], 0, i14238, 'm_DisabledSprite')
  return i14238
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i14240 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i14241 = data
  i14240.m_NormalTrigger = i14241[0]
  i14240.m_HighlightedTrigger = i14241[1]
  i14240.m_PressedTrigger = i14241[2]
  i14240.m_SelectedTrigger = i14241[3]
  i14240.m_DisabledTrigger = i14241[4]
  return i14240
}

Deserializers["PlayableHudRuntime"] = function (request, data, root) {
  var i14242 = root || request.c( 'PlayableHudRuntime' )
  var i14243 = data
  return i14242
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i14244 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i14245 = data
  request.r(i14245[0], i14245[1], 0, i14244, 'm_FirstSelected')
  i14244.m_sendNavigationEvents = !!i14245[2]
  i14244.m_DragThreshold = i14245[3]
  return i14244
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i14246 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i14247 = data
  i14246.m_HorizontalAxis = i14247[0]
  i14246.m_VerticalAxis = i14247[1]
  i14246.m_SubmitButton = i14247[2]
  i14246.m_CancelButton = i14247[3]
  i14246.m_InputActionsPerSecond = i14247[4]
  i14246.m_RepeatDelay = i14247[5]
  i14246.m_ForceModuleActive = !!i14247[6]
  i14246.m_SendPointerHoverToParent = !!i14247[7]
  return i14246
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i14248 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i14249 = data
  i14248.ambientIntensity = i14249[0]
  i14248.reflectionIntensity = i14249[1]
  i14248.ambientMode = i14249[2]
  i14248.ambientLight = new pc.Color(i14249[3], i14249[4], i14249[5], i14249[6])
  i14248.ambientSkyColor = new pc.Color(i14249[7], i14249[8], i14249[9], i14249[10])
  i14248.ambientGroundColor = new pc.Color(i14249[11], i14249[12], i14249[13], i14249[14])
  i14248.ambientEquatorColor = new pc.Color(i14249[15], i14249[16], i14249[17], i14249[18])
  i14248.fogColor = new pc.Color(i14249[19], i14249[20], i14249[21], i14249[22])
  i14248.fogEndDistance = i14249[23]
  i14248.fogStartDistance = i14249[24]
  i14248.fogDensity = i14249[25]
  i14248.fog = !!i14249[26]
  request.r(i14249[27], i14249[28], 0, i14248, 'skybox')
  i14248.fogMode = i14249[29]
  var i14251 = i14249[30]
  var i14250 = []
  for(var i = 0; i < i14251.length; i += 1) {
    i14250.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i14251[i + 0]) );
  }
  i14248.lightmaps = i14250
  i14248.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i14249[31], i14248.lightProbes)
  i14248.lightmapsMode = i14249[32]
  i14248.mixedBakeMode = i14249[33]
  i14248.environmentLightingMode = i14249[34]
  i14248.ambientProbe = new pc.SphericalHarmonicsL2(i14249[35])
  request.r(i14249[36], i14249[37], 0, i14248, 'customReflection')
  request.r(i14249[38], i14249[39], 0, i14248, 'defaultReflection')
  i14248.defaultReflectionMode = i14249[40]
  i14248.defaultReflectionResolution = i14249[41]
  i14248.sunLightObjectId = i14249[42]
  i14248.pixelLightCount = i14249[43]
  i14248.defaultReflectionHDR = !!i14249[44]
  i14248.hasLightDataAsset = !!i14249[45]
  i14248.hasManualGenerate = !!i14249[46]
  return i14248
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i14254 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i14255 = data
  request.r(i14255[0], i14255[1], 0, i14254, 'lightmapColor')
  request.r(i14255[2], i14255[3], 0, i14254, 'lightmapDirection')
  request.r(i14255[4], i14255[5], 0, i14254, 'shadowMask')
  return i14254
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i14256 = root || new UnityEngine.LightProbes()
  var i14257 = data
  return i14256
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i14262 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i14263 = data
  var i14265 = i14263[0]
  var i14264 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i14265.length; i += 1) {
    i14264.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i14265[i + 0]));
  }
  i14262.ShaderCompilationErrors = i14264
  i14262.name = i14263[1]
  i14262.guid = i14263[2]
  var i14267 = i14263[3]
  var i14266 = []
  for(var i = 0; i < i14267.length; i += 1) {
    i14266.push( i14267[i + 0] );
  }
  i14262.shaderDefinedKeywords = i14266
  var i14269 = i14263[4]
  var i14268 = []
  for(var i = 0; i < i14269.length; i += 1) {
    i14268.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i14269[i + 0]) );
  }
  i14262.passes = i14268
  var i14271 = i14263[5]
  var i14270 = []
  for(var i = 0; i < i14271.length; i += 1) {
    i14270.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i14271[i + 0]) );
  }
  i14262.usePasses = i14270
  var i14273 = i14263[6]
  var i14272 = []
  for(var i = 0; i < i14273.length; i += 1) {
    i14272.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i14273[i + 0]) );
  }
  i14262.defaultParameterValues = i14272
  request.r(i14263[7], i14263[8], 0, i14262, 'unityFallbackShader')
  i14262.readDepth = !!i14263[9]
  i14262.hasDepthOnlyPass = !!i14263[10]
  i14262.isCreatedByShaderGraph = !!i14263[11]
  i14262.disableBatching = !!i14263[12]
  i14262.compiled = !!i14263[13]
  return i14262
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i14276 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i14277 = data
  i14276.shaderName = i14277[0]
  i14276.errorMessage = i14277[1]
  return i14276
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i14282 = root || new pc.UnityShaderPass()
  var i14283 = data
  i14282.id = i14283[0]
  i14282.subShaderIndex = i14283[1]
  i14282.name = i14283[2]
  i14282.passType = i14283[3]
  i14282.grabPassTextureName = i14283[4]
  i14282.usePass = !!i14283[5]
  i14282.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i14283[6], i14282.zTest)
  i14282.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i14283[7], i14282.zWrite)
  i14282.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i14283[8], i14282.culling)
  i14282.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i14283[9], i14282.blending)
  i14282.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i14283[10], i14282.alphaBlending)
  i14282.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i14283[11], i14282.colorWriteMask)
  i14282.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i14283[12], i14282.offsetUnits)
  i14282.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i14283[13], i14282.offsetFactor)
  i14282.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i14283[14], i14282.stencilRef)
  i14282.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i14283[15], i14282.stencilReadMask)
  i14282.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i14283[16], i14282.stencilWriteMask)
  i14282.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i14283[17], i14282.stencilOp)
  i14282.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i14283[18], i14282.stencilOpFront)
  i14282.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i14283[19], i14282.stencilOpBack)
  var i14285 = i14283[20]
  var i14284 = []
  for(var i = 0; i < i14285.length; i += 1) {
    i14284.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i14285[i + 0]) );
  }
  i14282.tags = i14284
  var i14287 = i14283[21]
  var i14286 = []
  for(var i = 0; i < i14287.length; i += 1) {
    i14286.push( i14287[i + 0] );
  }
  i14282.passDefinedKeywords = i14286
  var i14289 = i14283[22]
  var i14288 = []
  for(var i = 0; i < i14289.length; i += 1) {
    i14288.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i14289[i + 0]) );
  }
  i14282.passDefinedKeywordGroups = i14288
  var i14291 = i14283[23]
  var i14290 = []
  for(var i = 0; i < i14291.length; i += 1) {
    i14290.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i14291[i + 0]) );
  }
  i14282.variants = i14290
  var i14293 = i14283[24]
  var i14292 = []
  for(var i = 0; i < i14293.length; i += 1) {
    i14292.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i14293[i + 0]) );
  }
  i14282.excludedVariants = i14292
  i14282.hasDepthReader = !!i14283[25]
  return i14282
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i14294 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i14295 = data
  i14294.val = i14295[0]
  i14294.name = i14295[1]
  return i14294
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i14296 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i14297 = data
  i14296.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i14297[0], i14296.src)
  i14296.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i14297[1], i14296.dst)
  i14296.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i14297[2], i14296.op)
  return i14296
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i14298 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i14299 = data
  i14298.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i14299[0], i14298.pass)
  i14298.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i14299[1], i14298.fail)
  i14298.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i14299[2], i14298.zFail)
  i14298.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i14299[3], i14298.comp)
  return i14298
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i14302 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i14303 = data
  i14302.name = i14303[0]
  i14302.value = i14303[1]
  return i14302
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i14306 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i14307 = data
  var i14309 = i14307[0]
  var i14308 = []
  for(var i = 0; i < i14309.length; i += 1) {
    i14308.push( i14309[i + 0] );
  }
  i14306.keywords = i14308
  i14306.hasDiscard = !!i14307[1]
  return i14306
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i14312 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i14313 = data
  i14312.passId = i14313[0]
  i14312.subShaderIndex = i14313[1]
  var i14315 = i14313[2]
  var i14314 = []
  for(var i = 0; i < i14315.length; i += 1) {
    i14314.push( i14315[i + 0] );
  }
  i14312.keywords = i14314
  i14312.vertexProgram = i14313[3]
  i14312.fragmentProgram = i14313[4]
  i14312.exportedForWebGl2 = !!i14313[5]
  i14312.readDepth = !!i14313[6]
  return i14312
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i14318 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i14319 = data
  request.r(i14319[0], i14319[1], 0, i14318, 'shader')
  i14318.pass = i14319[2]
  return i14318
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i14322 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i14323 = data
  i14322.name = i14323[0]
  i14322.type = i14323[1]
  i14322.value = new pc.Vec4( i14323[2], i14323[3], i14323[4], i14323[5] )
  i14322.textureValue = i14323[6]
  i14322.shaderPropertyFlag = i14323[7]
  return i14322
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i14324 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i14325 = data
  i14324.name = i14325[0]
  request.r(i14325[1], i14325[2], 0, i14324, 'texture')
  i14324.aabb = i14325[3]
  i14324.vertices = i14325[4]
  i14324.triangles = i14325[5]
  i14324.textureRect = UnityEngine.Rect.MinMaxRect(i14325[6], i14325[7], i14325[8], i14325[9])
  i14324.packedRect = UnityEngine.Rect.MinMaxRect(i14325[10], i14325[11], i14325[12], i14325[13])
  i14324.border = new pc.Vec4( i14325[14], i14325[15], i14325[16], i14325[17] )
  i14324.transparency = i14325[18]
  i14324.bounds = i14325[19]
  i14324.pixelsPerUnit = i14325[20]
  i14324.textureWidth = i14325[21]
  i14324.textureHeight = i14325[22]
  i14324.nativeSize = new pc.Vec2( i14325[23], i14325[24] )
  i14324.pivot = new pc.Vec2( i14325[25], i14325[26] )
  i14324.textureRectOffset = new pc.Vec2( i14325[27], i14325[28] )
  return i14324
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i14326 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i14327 = data
  i14326.name = i14327[0]
  return i14326
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip"] = function (request, data, root) {
  var i14328 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip' )
  var i14329 = data
  i14328.name = i14329[0]
  i14328.wrapMode = i14329[1]
  i14328.isLooping = !!i14329[2]
  i14328.length = i14329[3]
  var i14331 = i14329[4]
  var i14330 = []
  for(var i = 0; i < i14331.length; i += 1) {
    i14330.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve', i14331[i + 0]) );
  }
  i14328.curves = i14330
  var i14333 = i14329[5]
  var i14332 = []
  for(var i = 0; i < i14333.length; i += 1) {
    i14332.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent', i14333[i + 0]) );
  }
  i14328.events = i14332
  i14328.halfPrecision = !!i14329[6]
  i14328._frameRate = i14329[7]
  i14328.localBounds = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds', i14329[8], i14328.localBounds)
  i14328.hasMuscleCurves = !!i14329[9]
  var i14335 = i14329[10]
  var i14334 = []
  for(var i = 0; i < i14335.length; i += 1) {
    i14334.push( i14335[i + 0] );
  }
  i14328.clipMuscleConstant = i14334
  i14328.clipBindingConstant = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant', i14329[11], i14328.clipBindingConstant)
  return i14328
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve"] = function (request, data, root) {
  var i14338 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve' )
  var i14339 = data
  i14338.path = i14339[0]
  i14338.hash = i14339[1]
  i14338.componentType = i14339[2]
  i14338.property = i14339[3]
  i14338.keys = i14339[4]
  var i14341 = i14339[5]
  var i14340 = []
  for(var i = 0; i < i14341.length; i += 1) {
    i14340.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey', i14341[i + 0]) );
  }
  i14338.objectReferenceKeys = i14340
  return i14338
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey"] = function (request, data, root) {
  var i14344 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey' )
  var i14345 = data
  i14344.time = i14345[0]
  request.r(i14345[1], i14345[2], 0, i14344, 'value')
  return i14344
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent"] = function (request, data, root) {
  var i14348 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent' )
  var i14349 = data
  i14348.functionName = i14349[0]
  i14348.floatParameter = i14349[1]
  i14348.intParameter = i14349[2]
  i14348.stringParameter = i14349[3]
  request.r(i14349[4], i14349[5], 0, i14348, 'objectReferenceParameter')
  i14348.time = i14349[6]
  return i14348
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds"] = function (request, data, root) {
  var i14350 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds' )
  var i14351 = data
  i14350.center = new pc.Vec3( i14351[0], i14351[1], i14351[2] )
  i14350.extends = new pc.Vec3( i14351[3], i14351[4], i14351[5] )
  return i14350
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant"] = function (request, data, root) {
  var i14354 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant' )
  var i14355 = data
  var i14357 = i14355[0]
  var i14356 = []
  for(var i = 0; i < i14357.length; i += 1) {
    i14356.push( i14357[i + 0] );
  }
  i14354.genericBindings = i14356
  var i14359 = i14355[1]
  var i14358 = []
  for(var i = 0; i < i14359.length; i += 1) {
    i14358.push( i14359[i + 0] );
  }
  i14354.pptrCurveMapping = i14358
  return i14354
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i14360 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i14361 = data
  i14360.name = i14361[0]
  i14360.ascent = i14361[1]
  i14360.originalLineHeight = i14361[2]
  i14360.fontSize = i14361[3]
  var i14363 = i14361[4]
  var i14362 = []
  for(var i = 0; i < i14363.length; i += 1) {
    i14362.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i14363[i + 0]) );
  }
  i14360.characterInfo = i14362
  request.r(i14361[5], i14361[6], 0, i14360, 'texture')
  i14360.originalFontSize = i14361[7]
  return i14360
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i14366 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i14367 = data
  i14366.index = i14367[0]
  i14366.advance = i14367[1]
  i14366.bearing = i14367[2]
  i14366.glyphWidth = i14367[3]
  i14366.glyphHeight = i14367[4]
  i14366.minX = i14367[5]
  i14366.maxX = i14367[6]
  i14366.minY = i14367[7]
  i14366.maxY = i14367[8]
  i14366.uvBottomLeftX = i14367[9]
  i14366.uvBottomLeftY = i14367[10]
  i14366.uvBottomRightX = i14367[11]
  i14366.uvBottomRightY = i14367[12]
  i14366.uvTopLeftX = i14367[13]
  i14366.uvTopLeftY = i14367[14]
  i14366.uvTopRightX = i14367[15]
  i14366.uvTopRightY = i14367[16]
  return i14366
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController"] = function (request, data, root) {
  var i14368 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController' )
  var i14369 = data
  i14368.name = i14369[0]
  var i14371 = i14369[1]
  var i14370 = []
  for(var i = 0; i < i14371.length; i += 1) {
    i14370.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer', i14371[i + 0]) );
  }
  i14368.layers = i14370
  var i14373 = i14369[2]
  var i14372 = []
  for(var i = 0; i < i14373.length; i += 1) {
    i14372.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter', i14373[i + 0]) );
  }
  i14368.parameters = i14372
  i14368.animationClips = i14369[3]
  i14368.avatarUnsupported = i14369[4]
  return i14368
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer"] = function (request, data, root) {
  var i14376 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer' )
  var i14377 = data
  i14376.name = i14377[0]
  i14376.defaultWeight = i14377[1]
  i14376.blendingMode = i14377[2]
  i14376.avatarMask = i14377[3]
  i14376.syncedLayerIndex = i14377[4]
  i14376.syncedLayerAffectsTiming = !!i14377[5]
  i14376.syncedLayers = i14377[6]
  i14376.stateMachine = request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i14377[7], i14376.stateMachine)
  return i14376
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine"] = function (request, data, root) {
  var i14378 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine' )
  var i14379 = data
  i14378.id = i14379[0]
  i14378.name = i14379[1]
  i14378.path = i14379[2]
  var i14381 = i14379[3]
  var i14380 = []
  for(var i = 0; i < i14381.length; i += 1) {
    i14380.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState', i14381[i + 0]) );
  }
  i14378.states = i14380
  var i14383 = i14379[4]
  var i14382 = []
  for(var i = 0; i < i14383.length; i += 1) {
    i14382.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i14383[i + 0]) );
  }
  i14378.machines = i14382
  var i14385 = i14379[5]
  var i14384 = []
  for(var i = 0; i < i14385.length; i += 1) {
    i14384.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i14385[i + 0]) );
  }
  i14378.entryStateTransitions = i14384
  var i14387 = i14379[6]
  var i14386 = []
  for(var i = 0; i < i14387.length; i += 1) {
    i14386.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i14387[i + 0]) );
  }
  i14378.exitStateTransitions = i14386
  var i14389 = i14379[7]
  var i14388 = []
  for(var i = 0; i < i14389.length; i += 1) {
    i14388.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i14389[i + 0]) );
  }
  i14378.anyStateTransitions = i14388
  i14378.defaultStateId = i14379[8]
  return i14378
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState"] = function (request, data, root) {
  var i14392 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState' )
  var i14393 = data
  i14392.id = i14393[0]
  i14392.name = i14393[1]
  i14392.cycleOffset = i14393[2]
  i14392.cycleOffsetParameter = i14393[3]
  i14392.cycleOffsetParameterActive = !!i14393[4]
  i14392.mirror = !!i14393[5]
  i14392.mirrorParameter = i14393[6]
  i14392.mirrorParameterActive = !!i14393[7]
  i14392.motionId = i14393[8]
  i14392.nameHash = i14393[9]
  i14392.fullPathHash = i14393[10]
  i14392.speed = i14393[11]
  i14392.speedParameter = i14393[12]
  i14392.speedParameterActive = !!i14393[13]
  i14392.tag = i14393[14]
  i14392.tagHash = i14393[15]
  i14392.writeDefaultValues = !!i14393[16]
  var i14395 = i14393[17]
  var i14394 = []
  for(var i = 0; i < i14395.length; i += 2) {
  request.r(i14395[i + 0], i14395[i + 1], 2, i14394, '')
  }
  i14392.behaviours = i14394
  var i14397 = i14393[18]
  var i14396 = []
  for(var i = 0; i < i14397.length; i += 1) {
    i14396.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i14397[i + 0]) );
  }
  i14392.transitions = i14396
  return i14392
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition"] = function (request, data, root) {
  var i14402 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition' )
  var i14403 = data
  i14402.fullPath = i14403[0]
  i14402.canTransitionToSelf = !!i14403[1]
  i14402.duration = i14403[2]
  i14402.exitTime = i14403[3]
  i14402.hasExitTime = !!i14403[4]
  i14402.hasFixedDuration = !!i14403[5]
  i14402.interruptionSource = i14403[6]
  i14402.offset = i14403[7]
  i14402.orderedInterruption = !!i14403[8]
  i14402.destinationStateId = i14403[9]
  i14402.isExit = !!i14403[10]
  i14402.mute = !!i14403[11]
  i14402.solo = !!i14403[12]
  var i14405 = i14403[13]
  var i14404 = []
  for(var i = 0; i < i14405.length; i += 1) {
    i14404.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i14405[i + 0]) );
  }
  i14402.conditions = i14404
  return i14402
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition"] = function (request, data, root) {
  var i14410 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition' )
  var i14411 = data
  i14410.destinationStateId = i14411[0]
  i14410.isExit = !!i14411[1]
  i14410.mute = !!i14411[2]
  i14410.solo = !!i14411[3]
  var i14413 = i14411[4]
  var i14412 = []
  for(var i = 0; i < i14413.length; i += 1) {
    i14412.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i14413[i + 0]) );
  }
  i14410.conditions = i14412
  return i14410
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition"] = function (request, data, root) {
  var i14416 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition' )
  var i14417 = data
  i14416.mode = i14417[0]
  i14416.parameter = i14417[1]
  i14416.threshold = i14417[2]
  return i14416
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter"] = function (request, data, root) {
  var i14420 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter' )
  var i14421 = data
  i14420.defaultBool = !!i14421[0]
  i14420.defaultFloat = i14421[1]
  i14420.defaultInt = i14421[2]
  i14420.name = i14421[3]
  i14420.nameHash = i14421[4]
  i14420.type = i14421[5]
  return i14420
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i14422 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i14423 = data
  i14422.useSafeMode = !!i14423[0]
  i14422.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i14423[1], i14422.safeModeOptions)
  i14422.timeScale = i14423[2]
  i14422.unscaledTimeScale = i14423[3]
  i14422.useSmoothDeltaTime = !!i14423[4]
  i14422.maxSmoothUnscaledTime = i14423[5]
  i14422.rewindCallbackMode = i14423[6]
  i14422.showUnityEditorReport = !!i14423[7]
  i14422.logBehaviour = i14423[8]
  i14422.drawGizmos = !!i14423[9]
  i14422.defaultRecyclable = !!i14423[10]
  i14422.defaultAutoPlay = i14423[11]
  i14422.defaultUpdateType = i14423[12]
  i14422.defaultTimeScaleIndependent = !!i14423[13]
  i14422.defaultEaseType = i14423[14]
  i14422.defaultEaseOvershootOrAmplitude = i14423[15]
  i14422.defaultEasePeriod = i14423[16]
  i14422.defaultAutoKill = !!i14423[17]
  i14422.defaultLoopType = i14423[18]
  i14422.debugMode = !!i14423[19]
  i14422.debugStoreTargetId = !!i14423[20]
  i14422.showPreviewPanel = !!i14423[21]
  i14422.storeSettingsLocation = i14423[22]
  i14422.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i14423[23], i14422.modules)
  i14422.createASMDEF = !!i14423[24]
  i14422.showPlayingTweens = !!i14423[25]
  i14422.showPausedTweens = !!i14423[26]
  return i14422
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i14424 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i14425 = data
  i14424.logBehaviour = i14425[0]
  i14424.nestedTweenFailureBehaviour = i14425[1]
  return i14424
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i14426 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i14427 = data
  i14426.showPanel = !!i14427[0]
  i14426.audioEnabled = !!i14427[1]
  i14426.physicsEnabled = !!i14427[2]
  i14426.physics2DEnabled = !!i14427[3]
  i14426.spriteEnabled = !!i14427[4]
  i14426.uiEnabled = !!i14427[5]
  i14426.textMeshProEnabled = !!i14427[6]
  i14426.tk2DEnabled = !!i14427[7]
  i14426.deAudioEnabled = !!i14427[8]
  i14426.deUnityExtendedEnabled = !!i14427[9]
  i14426.epoOutlineEnabled = !!i14427[10]
  return i14426
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i14428 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i14429 = data
  var i14431 = i14429[0]
  var i14430 = []
  for(var i = 0; i < i14431.length; i += 1) {
    i14430.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i14431[i + 0]) );
  }
  i14428.files = i14430
  i14428.componentToPrefabIds = i14429[1]
  return i14428
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i14434 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i14435 = data
  i14434.path = i14435[0]
  request.r(i14435[1], i14435[2], 0, i14434, 'unityObject')
  return i14434
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i14436 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i14437 = data
  var i14439 = i14437[0]
  var i14438 = []
  for(var i = 0; i < i14439.length; i += 1) {
    i14438.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i14439[i + 0]) );
  }
  i14436.scriptsExecutionOrder = i14438
  var i14441 = i14437[1]
  var i14440 = []
  for(var i = 0; i < i14441.length; i += 1) {
    i14440.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i14441[i + 0]) );
  }
  i14436.sortingLayers = i14440
  var i14443 = i14437[2]
  var i14442 = []
  for(var i = 0; i < i14443.length; i += 1) {
    i14442.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i14443[i + 0]) );
  }
  i14436.cullingLayers = i14442
  i14436.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i14437[3], i14436.timeSettings)
  i14436.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i14437[4], i14436.physicsSettings)
  i14436.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i14437[5], i14436.physics2DSettings)
  i14436.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i14437[6], i14436.qualitySettings)
  i14436.enableRealtimeShadows = !!i14437[7]
  i14436.enableAutoInstancing = !!i14437[8]
  i14436.enableStaticBatching = !!i14437[9]
  i14436.enableDynamicBatching = !!i14437[10]
  i14436.usePreservativeDynamicBatching = !!i14437[11]
  i14436.lightmapEncodingQuality = i14437[12]
  i14436.desiredColorSpace = i14437[13]
  var i14445 = i14437[14]
  var i14444 = []
  for(var i = 0; i < i14445.length; i += 1) {
    i14444.push( i14445[i + 0] );
  }
  i14436.allTags = i14444
  return i14436
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i14448 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i14449 = data
  i14448.name = i14449[0]
  i14448.value = i14449[1]
  return i14448
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i14452 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i14453 = data
  i14452.id = i14453[0]
  i14452.name = i14453[1]
  i14452.value = i14453[2]
  return i14452
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i14456 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i14457 = data
  i14456.id = i14457[0]
  i14456.name = i14457[1]
  return i14456
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i14458 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i14459 = data
  i14458.fixedDeltaTime = i14459[0]
  i14458.maximumDeltaTime = i14459[1]
  i14458.timeScale = i14459[2]
  i14458.maximumParticleTimestep = i14459[3]
  return i14458
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i14460 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i14461 = data
  i14460.gravity = new pc.Vec3( i14461[0], i14461[1], i14461[2] )
  i14460.defaultSolverIterations = i14461[3]
  i14460.bounceThreshold = i14461[4]
  i14460.autoSyncTransforms = !!i14461[5]
  i14460.autoSimulation = !!i14461[6]
  var i14463 = i14461[7]
  var i14462 = []
  for(var i = 0; i < i14463.length; i += 1) {
    i14462.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i14463[i + 0]) );
  }
  i14460.collisionMatrix = i14462
  return i14460
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i14466 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i14467 = data
  i14466.enabled = !!i14467[0]
  i14466.layerId = i14467[1]
  i14466.otherLayerId = i14467[2]
  return i14466
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i14468 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i14469 = data
  request.r(i14469[0], i14469[1], 0, i14468, 'material')
  i14468.gravity = new pc.Vec2( i14469[2], i14469[3] )
  i14468.positionIterations = i14469[4]
  i14468.velocityIterations = i14469[5]
  i14468.velocityThreshold = i14469[6]
  i14468.maxLinearCorrection = i14469[7]
  i14468.maxAngularCorrection = i14469[8]
  i14468.maxTranslationSpeed = i14469[9]
  i14468.maxRotationSpeed = i14469[10]
  i14468.baumgarteScale = i14469[11]
  i14468.baumgarteTOIScale = i14469[12]
  i14468.timeToSleep = i14469[13]
  i14468.linearSleepTolerance = i14469[14]
  i14468.angularSleepTolerance = i14469[15]
  i14468.defaultContactOffset = i14469[16]
  i14468.autoSimulation = !!i14469[17]
  i14468.queriesHitTriggers = !!i14469[18]
  i14468.queriesStartInColliders = !!i14469[19]
  i14468.callbacksOnDisable = !!i14469[20]
  i14468.reuseCollisionCallbacks = !!i14469[21]
  i14468.autoSyncTransforms = !!i14469[22]
  var i14471 = i14469[23]
  var i14470 = []
  for(var i = 0; i < i14471.length; i += 1) {
    i14470.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i14471[i + 0]) );
  }
  i14468.collisionMatrix = i14470
  return i14468
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i14474 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i14475 = data
  i14474.enabled = !!i14475[0]
  i14474.layerId = i14475[1]
  i14474.otherLayerId = i14475[2]
  return i14474
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i14476 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i14477 = data
  var i14479 = i14477[0]
  var i14478 = []
  for(var i = 0; i < i14479.length; i += 1) {
    i14478.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i14479[i + 0]) );
  }
  i14476.qualityLevels = i14478
  var i14481 = i14477[1]
  var i14480 = []
  for(var i = 0; i < i14481.length; i += 1) {
    i14480.push( i14481[i + 0] );
  }
  i14476.names = i14480
  i14476.shadows = i14477[2]
  i14476.anisotropicFiltering = i14477[3]
  i14476.antiAliasing = i14477[4]
  i14476.lodBias = i14477[5]
  i14476.shadowCascades = i14477[6]
  i14476.shadowDistance = i14477[7]
  i14476.shadowmaskMode = i14477[8]
  i14476.shadowProjection = i14477[9]
  i14476.shadowResolution = i14477[10]
  i14476.softParticles = !!i14477[11]
  i14476.softVegetation = !!i14477[12]
  i14476.activeColorSpace = i14477[13]
  i14476.desiredColorSpace = i14477[14]
  i14476.masterTextureLimit = i14477[15]
  i14476.maxQueuedFrames = i14477[16]
  i14476.particleRaycastBudget = i14477[17]
  i14476.pixelLightCount = i14477[18]
  i14476.realtimeReflectionProbes = !!i14477[19]
  i14476.shadowCascade2Split = i14477[20]
  i14476.shadowCascade4Split = new pc.Vec3( i14477[21], i14477[22], i14477[23] )
  i14476.streamingMipmapsActive = !!i14477[24]
  i14476.vSyncCount = i14477[25]
  i14476.asyncUploadBufferSize = i14477[26]
  i14476.asyncUploadTimeSlice = i14477[27]
  i14476.billboardsFaceCameraPosition = !!i14477[28]
  i14476.shadowNearPlaneOffset = i14477[29]
  i14476.streamingMipmapsMemoryBudget = i14477[30]
  i14476.maximumLODLevel = i14477[31]
  i14476.streamingMipmapsAddAllCameras = !!i14477[32]
  i14476.streamingMipmapsMaxLevelReduction = i14477[33]
  i14476.streamingMipmapsRenderersPerFrame = i14477[34]
  i14476.resolutionScalingFixedDPIFactor = i14477[35]
  i14476.streamingMipmapsMaxFileIORequests = i14477[36]
  i14476.currentQualityLevel = i14477[37]
  return i14476
}

Deserializers["Luna.Unity.DTO.UnityEngine.Audio.AudioMixer"] = function (request, data, root) {
  var i14484 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Audio.AudioMixer' )
  var i14485 = data
  var i14487 = i14485[0]
  var i14486 = []
  for(var i = 0; i < i14487.length; i += 1) {
    i14486.push( request.d('Luna.Unity.DTO.UnityEngine.Audio.AudioMixerGroup', i14487[i + 0]) );
  }
  i14484.groups = i14486
  var i14489 = i14485[1]
  var i14488 = []
  for(var i = 0; i < i14489.length; i += 1) {
    i14488.push( request.d('Luna.Unity.DTO.UnityEngine.Audio.AudioMixerSnapshot', i14489[i + 0]) );
  }
  i14484.snapshots = i14488
  return i14484
}

Deserializers["Luna.Unity.DTO.UnityEngine.Audio.AudioMixerGroup"] = function (request, data, root) {
  var i14492 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Audio.AudioMixerGroup' )
  var i14493 = data
  i14492.id = i14493[0]
  i14492.childGroupIds = i14493[1]
  i14492.name = i14493[2]
  return i14492
}

Deserializers["Luna.Unity.DTO.UnityEngine.Audio.AudioMixerSnapshot"] = function (request, data, root) {
  var i14496 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Audio.AudioMixerSnapshot' )
  var i14497 = data
  i14496.id = i14497[0]
  var i14499 = i14497[1]
  var i14498 = []
  for(var i = 0; i < i14499.length; i += 1) {
    i14498.push( request.d('Luna.Unity.DTO.UnityEngine.Audio.AudioMixerSnapshot+Parameter', i14499[i + 0]) );
  }
  i14496.parameters = i14498
  return i14496
}

Deserializers["Luna.Unity.DTO.UnityEngine.Audio.AudioMixerSnapshot+Parameter"] = function (request, data, root) {
  var i14502 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Audio.AudioMixerSnapshot+Parameter' )
  var i14503 = data
  i14502.name = i14503[0]
  i14502.value = i14503[1]
  return i14502
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame"] = function (request, data, root) {
  var i14506 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame' )
  var i14507 = data
  i14506.weight = i14507[0]
  i14506.vertices = i14507[1]
  i14506.normals = i14507[2]
  i14506.tangents = i14507[3]
  return i14506
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Components.Animator":{"animatorController":0,"avatar":2,"updateMode":4,"hasTransformHierarchy":5,"applyRootMotion":6,"humanBones":7,"enabled":8},"Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer":{"color":0,"sprite":4,"flipX":6,"flipY":7,"drawMode":8,"size":9,"tileMode":11,"adaptiveModeThreshold":12,"maskInteraction":13,"spriteSortPoint":14,"enabled":15,"sharedMaterial":16,"sharedMaterials":18,"receiveShadows":19,"shadowCastingMode":20,"sortingLayerID":21,"sortingOrder":22,"lightmapIndex":23,"lightmapSceneIndex":24,"lightmapScaleOffset":25,"lightProbeUsage":29,"reflectionProbeUsage":30},"Luna.Unity.DTO.UnityEngine.Components.TrailRenderer":{"positions":0,"positionCount":1,"time":2,"startWidth":3,"endWidth":4,"widthMultiplier":5,"autodestruct":6,"emitting":7,"numCornerVertices":8,"numCapVertices":9,"minVertexDistance":10,"colorGradient":11,"startColor":12,"endColor":16,"generateLightingData":20,"textureMode":21,"alignment":22,"widthCurve":23,"enabled":24,"sharedMaterial":25,"sharedMaterials":27,"receiveShadows":28,"shadowCastingMode":29,"sortingLayerID":30,"sortingOrder":31,"lightmapIndex":32,"lightmapSceneIndex":33,"lightmapScaleOffset":34,"lightProbeUsage":38,"reflectionProbeUsage":39},"Luna.Unity.DTO.UnityEngine.Components.LineRenderer":{"textureMode":0,"alignment":1,"widthCurve":2,"colorGradient":3,"positions":4,"positionCount":5,"widthMultiplier":6,"startWidth":7,"endWidth":8,"numCornerVertices":9,"numCapVertices":10,"useWorldSpace":11,"loop":12,"startColor":13,"endColor":17,"generateLightingData":21,"enabled":22,"sharedMaterial":23,"sharedMaterials":25,"receiveShadows":26,"shadowCastingMode":27,"sortingLayerID":28,"sortingOrder":29,"lightmapIndex":30,"lightmapSceneIndex":31,"lightmapScaleOffset":32,"lightProbeUsage":36,"reflectionProbeUsage":37},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D":{"usedByComposite":0,"autoTiling":1,"size":2,"edgeRadius":4,"enabled":5,"isTrigger":6,"usedByEffector":7,"density":8,"offset":9,"material":11},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystem":{"main":0,"colorBySpeed":1,"colorOverLifetime":2,"emission":3,"rotationBySpeed":4,"rotationOverLifetime":5,"shape":6,"sizeBySpeed":7,"sizeOverLifetime":8,"textureSheetAnimation":9,"velocityOverLifetime":10,"noise":11,"inheritVelocity":12,"forceOverLifetime":13,"limitVelocityOverLifetime":14,"useAutoRandomSeed":15,"randomSeed":16},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule":{"duration":0,"loop":1,"prewarm":2,"startDelay":3,"startLifetime":4,"startSpeed":5,"startSize3D":6,"startSizeX":7,"startSizeY":8,"startSizeZ":9,"startRotation3D":10,"startRotationX":11,"startRotationY":12,"startRotationZ":13,"startColor":14,"gravityModifier":15,"simulationSpace":16,"customSimulationSpace":17,"simulationSpeed":19,"useUnscaledTime":20,"scalingMode":21,"playOnAwake":22,"maxParticles":23,"emitterVelocityMode":24,"stopAction":25},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve":{"mode":0,"curveMin":1,"curveMax":2,"curveMultiplier":3,"constantMin":4,"constantMax":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient":{"mode":0,"gradientMin":1,"gradientMax":2,"colorMin":3,"colorMax":7},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient":{"mode":0,"colorKeys":1,"alphaKeys":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule":{"enabled":0,"color":1,"range":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey":{"color":0,"time":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey":{"alpha":0,"time":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule":{"enabled":0,"color":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule":{"enabled":0,"rateOverTime":1,"rateOverDistance":2,"bursts":3},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst":{"count":0,"cycleCount":1,"minCount":2,"maxCount":3,"repeatInterval":4,"time":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule":{"enabled":0,"shapeType":1,"randomDirectionAmount":2,"sphericalDirectionAmount":3,"randomPositionAmount":4,"alignToDirection":5,"radius":6,"radiusMode":7,"radiusSpread":8,"radiusSpeed":9,"radiusThickness":10,"angle":11,"length":12,"boxThickness":13,"meshShapeType":16,"mesh":17,"meshRenderer":19,"skinnedMeshRenderer":21,"useMeshMaterialIndex":23,"meshMaterialIndex":24,"useMeshColors":25,"normalOffset":26,"arc":27,"arcMode":28,"arcSpread":29,"arcSpeed":30,"donutRadius":31,"position":32,"rotation":35,"scale":38},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule":{"enabled":0,"mode":1,"animation":2,"numTilesX":3,"numTilesY":4,"useRandomRow":5,"frameOverTime":6,"startFrame":7,"cycleCount":8,"rowIndex":9,"flipU":10,"flipV":11,"spriteCount":12,"sprites":13},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"radial":4,"speedModifier":5,"space":6,"orbitalX":7,"orbitalY":8,"orbitalZ":9,"orbitalOffsetX":10,"orbitalOffsetY":11,"orbitalOffsetZ":12},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule":{"enabled":0,"separateAxes":1,"strengthX":2,"strengthY":3,"strengthZ":4,"frequency":5,"damping":6,"octaveCount":7,"octaveMultiplier":8,"octaveScale":9,"quality":10,"scrollSpeed":11,"scrollSpeedMultiplier":12,"remapEnabled":13,"remapX":14,"remapY":15,"remapZ":16,"positionAmount":17,"rotationAmount":18,"sizeAmount":19},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule":{"enabled":0,"mode":1,"curve":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"space":4,"randomized":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule":{"enabled":0,"limit":1,"limitX":2,"limitY":3,"limitZ":4,"dampen":5,"separateAxes":6,"space":7,"drag":8,"multiplyDragByParticleSize":9,"multiplyDragByParticleVelocity":10},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer":{"mesh":0,"meshCount":2,"activeVertexStreamsCount":3,"alignment":4,"renderMode":5,"sortMode":6,"lengthScale":7,"velocityScale":8,"cameraVelocityScale":9,"normalDirection":10,"sortingFudge":11,"minParticleSize":12,"maxParticleSize":13,"pivot":14,"trailMaterial":17,"applyActiveColorSpace":19,"enabled":20,"sharedMaterial":21,"sharedMaterials":23,"receiveShadows":24,"shadowCastingMode":25,"sortingLayerID":26,"sortingOrder":27,"lightmapIndex":28,"lightmapSceneIndex":29,"lightmapScaleOffset":30,"lightProbeUsage":34,"reflectionProbeUsage":35},"Luna.Unity.DTO.UnityEngine.Components.AudioSource":{"clip":0,"outputAudioMixerGroup":2,"playOnAwake":4,"loop":5,"time":6,"volume":7,"pitch":8,"enabled":9},"Luna.Unity.DTO.UnityEngine.Components.CircleCollider2D":{"radius":0,"enabled":1,"isTrigger":2,"usedByEffector":3,"density":4,"offset":5,"material":7},"Luna.Unity.DTO.UnityEngine.Components.SpriteMask":{"frontSortingLayerID":0,"frontSortingOrder":1,"backSortingLayerID":2,"backSortingOrder":3,"alphaCutoff":4,"sprite":5,"tileMode":7,"isCustomRangeActive":8,"spriteSortPoint":9,"enabled":10,"sharedMaterial":11,"sharedMaterials":13,"receiveShadows":14,"shadowCastingMode":15,"sortingLayerID":16,"sortingOrder":17,"lightmapIndex":18,"lightmapSceneIndex":19,"lightmapScaleOffset":20,"lightProbeUsage":24,"reflectionProbeUsage":25},"Luna.Unity.DTO.UnityEngine.Components.PolygonCollider2D":{"usedByComposite":0,"autoTiling":1,"points":2,"enabled":3,"isTrigger":4,"usedByEffector":5,"density":6,"offset":7,"material":9},"Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D":{"bodyType":0,"material":1,"simulated":3,"useAutoMass":4,"mass":5,"drag":6,"angularDrag":7,"gravityScale":8,"collisionDetectionMode":9,"sleepMode":10,"constraints":11},"Luna.Unity.DTO.UnityEngine.Assets.Mesh":{"name":0,"halfPrecision":1,"useSimplification":2,"useUInt32IndexFormat":3,"vertexCount":4,"aabb":5,"streams":6,"vertices":7,"subMeshes":8,"bindposes":9,"blendShapes":10},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh":{"triangles":0},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape":{"name":0,"frames":1},"Luna.Unity.DTO.UnityEngine.Textures.Cubemap":{"name":0,"atlasId":1,"mipmapCount":2,"hdr":3,"size":4,"anisoLevel":5,"filterMode":6,"rects":7,"wrapU":8,"wrapV":9},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"aspect":0,"orthographic":1,"orthographicSize":2,"backgroundColor":3,"nearClipPlane":7,"farClipPlane":8,"fieldOfView":9,"depth":10,"clearFlags":11,"cullingMask":12,"rect":13,"targetTexture":14,"usePhysicalProperties":16,"focalLength":17,"sensorSize":18,"lensShift":20,"gateFit":22,"commandBufferCount":23,"cameraType":24,"enabled":25},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"planeDistance":0,"referencePixelsPerUnit":1,"isFallbackOverlay":2,"renderMode":3,"renderOrder":4,"sortingLayerName":5,"sortingOrder":6,"scaleFactor":7,"worldCamera":8,"overrideSorting":10,"pixelPerfect":11,"targetDisplay":12,"overridePixelPerfect":13,"enabled":14},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"customReflection":36,"defaultReflection":38,"defaultReflectionMode":40,"defaultReflectionResolution":41,"sunLightObjectId":42,"pixelLightCount":43,"defaultReflectionHDR":44,"hasLightDataAsset":45,"hasManualGenerate":46},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2,"shadowMask":4},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"hasDepthOnlyPass":10,"isCreatedByShaderGraph":11,"disableBatching":12,"compiled":13},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip":{"name":0,"wrapMode":1,"isLooping":2,"length":3,"curves":4,"events":5,"halfPrecision":6,"_frameRate":7,"localBounds":8,"hasMuscleCurves":9,"clipMuscleConstant":10,"clipBindingConstant":11},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve":{"path":0,"hash":1,"componentType":2,"property":3,"keys":4,"objectReferenceKeys":5},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey":{"time":0,"value":1},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent":{"functionName":0,"floatParameter":1,"intParameter":2,"stringParameter":3,"objectReferenceParameter":4,"time":6},"Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds":{"center":0,"extends":3},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant":{"genericBindings":0,"pptrCurveMapping":1},"Luna.Unity.DTO.UnityEngine.Assets.Font":{"name":0,"ascent":1,"originalLineHeight":2,"fontSize":3,"characterInfo":4,"texture":5,"originalFontSize":7},"Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo":{"index":0,"advance":1,"bearing":2,"glyphWidth":3,"glyphHeight":4,"minX":5,"maxX":6,"minY":7,"maxY":8,"uvBottomLeftX":9,"uvBottomLeftY":10,"uvBottomRightX":11,"uvBottomRightY":12,"uvTopLeftX":13,"uvTopLeftY":14,"uvTopRightX":15,"uvTopRightY":16},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController":{"name":0,"layers":1,"parameters":2,"animationClips":3,"avatarUnsupported":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer":{"name":0,"defaultWeight":1,"blendingMode":2,"avatarMask":3,"syncedLayerIndex":4,"syncedLayerAffectsTiming":5,"syncedLayers":6,"stateMachine":7},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine":{"id":0,"name":1,"path":2,"states":3,"machines":4,"entryStateTransitions":5,"exitStateTransitions":6,"anyStateTransitions":7,"defaultStateId":8},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState":{"id":0,"name":1,"cycleOffset":2,"cycleOffsetParameter":3,"cycleOffsetParameterActive":4,"mirror":5,"mirrorParameter":6,"mirrorParameterActive":7,"motionId":8,"nameHash":9,"fullPathHash":10,"speed":11,"speedParameter":12,"speedParameterActive":13,"tag":14,"tagHash":15,"writeDefaultValues":16,"behaviours":17,"transitions":18},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition":{"fullPath":0,"canTransitionToSelf":1,"duration":2,"exitTime":3,"hasExitTime":4,"hasFixedDuration":5,"interruptionSource":6,"offset":7,"orderedInterruption":8,"destinationStateId":9,"isExit":10,"mute":11,"solo":12,"conditions":13},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition":{"destinationStateId":0,"isExit":1,"mute":2,"solo":3,"conditions":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition":{"mode":0,"parameter":1,"threshold":2},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter":{"defaultBool":0,"defaultFloat":1,"defaultInt":2,"name":3,"nameHash":4,"type":5},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableStaticBatching":9,"enableDynamicBatching":10,"usePreservativeDynamicBatching":11,"lightmapEncodingQuality":12,"desiredColorSpace":13,"allTags":14},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37},"Luna.Unity.DTO.UnityEngine.Audio.AudioMixer":{"groups":0,"snapshots":1},"Luna.Unity.DTO.UnityEngine.Audio.AudioMixerGroup":{"id":0,"childGroupIds":1,"name":2},"Luna.Unity.DTO.UnityEngine.Audio.AudioMixerSnapshot":{"id":0,"parameters":1},"Luna.Unity.DTO.UnityEngine.Audio.AudioMixerSnapshot+Parameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame":{"weight":0,"vertices":1,"normals":2,"tangents":3}}

Deserializers.requiredComponents = {"79":[80],"81":[80],"82":[80],"83":[80],"84":[80],"85":[80],"86":[87],"88":[55],"89":[90],"91":[90],"92":[90],"93":[90],"94":[90],"95":[90],"96":[90],"97":[45],"98":[45],"99":[45],"100":[45],"101":[45],"102":[45],"103":[45],"104":[45],"105":[45],"106":[45],"107":[45],"108":[45],"109":[45],"110":[55],"111":[112],"113":[114],"115":[114],"67":[60],"116":[27],"117":[4],"33":[29],"118":[4],"119":[120],"121":[120],"37":[10],"53":[29],"122":[4],"25":[4],"123":[60],"124":[60],"70":[67],"61":[71,60],"125":[60],"69":[67],"126":[60],"127":[60],"128":[60],"129":[60],"130":[60],"131":[60],"132":[60],"133":[60],"134":[60],"135":[71,60],"136":[60],"137":[60],"138":[60],"139":[60],"62":[71,60],"140":[60],"141":[75],"142":[75],"76":[75],"143":[75],"144":[55],"145":[55]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Transform","UnityEngine.MonoBehaviour","Level1_Hair_Playable","UnityEngine.SpriteRenderer","UnityEngine.ParticleSystem","BasicDrag","OutlinePulse","UnityEngine.GameObject","BD_CameraFollow","DG.Tweening.DOTweenAnimation","UnityEngine.Sprite","UnityEngine.AudioClip","BD_Progress","BD_ProgressHelper","UnityEngine.AudioSource","ScratchCardAsset.ScratchCardManager","PlayableCTA","PlayableFadeCoverSettings","UnityEngine.Texture2D","ScratchCardAsset.ScratchCard","ScratchCardAsset.EraseProgress","UnityEngine.Animator","UnityEditor.Animations.AnimatorController","UnityEngine.Material","UnityEngine.U2D.Animation.SpriteSkin","UnityEngine.TrailRenderer","UnityEngine.LineRenderer","StaticFixedPipe","UnityEngine.BoxCollider2D","BD_Clamp","BD_ItemPick","UnityEngine.ParticleSystemRenderer","BD_Sticky","UnityEngine.CircleCollider2D","PlayParticlesOnCollision","UnityEngine.SpriteMask","PlayTweenOnHit","UnityEngine.PolygonCollider2D","PlaySfxOnCollision","InteractableBones","WaypointFollower","UnityEditor.Audio.AudioMixerGroupController","BD_Action","BD_ToolRotate","UnityEngine.Rigidbody2D","BugKill_Tip","ActionOnTap","BD_SpriteChange","BD_AnimatorDrag","PlaceItem","BD_Audio","Level1_HairAnim","SpriteButton","DestroyObj","UnityEngine.Camera","UnityEngine.AudioListener","CameraController","MusicSource","UI_Manager","UnityEngine.RectTransform","UnityEngine.UI.Image","UnityEngine.UI.Text","GameManagerPlayable","AudioController","UnityEditor.Audio.AudioMixerController","UnityEngine.Mesh","UnityEngine.Canvas","UnityEngine.EventSystems.UIBehaviour","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEngine.CanvasRenderer","UnityEngine.Font","UnityEngine.UI.Button","PlayableHudRuntime","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","UnityEngine.Cubemap","DG.Tweening.Core.DOTweenSettings","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.ConstantForce","UnityEngine.Rigidbody","UnityEngine.Joint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.FixedJoint","UnityEngine.CharacterJoint","UnityEngine.ConfigurableJoint","UnityEngine.CompositeCollider2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.MeshRenderer","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","RopeController","BD_Fold","Lvl3_DripAnimator","Lvl3_LipstickPicker","UnityEngine.Collider2D","Lvl3_PourFill","RadialCircleFill","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.Mask","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Slider","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster"]

Deserializers.unityVersion = "2022.3.62f2";

Deserializers.productName = "Perfect Makeover Fashion ASMR";

Deserializers.lunaInitializationTime = "08/20/2026 07:41:52";

Deserializers.lunaDaysRunning = "4.3";

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

Deserializers.runtimeAnalysisExcludedClassesCount = "1703";

Deserializers.runtimeAnalysisExcludedMethodsCount = "4372";

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

Deserializers.buildID = "41de5140-1f4b-4f9a-bf05-89b52f68064c";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[],[["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"]],[],[]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

