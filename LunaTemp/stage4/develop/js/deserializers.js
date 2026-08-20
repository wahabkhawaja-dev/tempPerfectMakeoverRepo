var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i7760 = root || request.c( 'UnityEngine.JointSpring' )
  var i7761 = data
  i7760.spring = i7761[0]
  i7760.damper = i7761[1]
  i7760.targetPosition = i7761[2]
  return i7760
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i7762 = root || request.c( 'UnityEngine.JointMotor' )
  var i7763 = data
  i7762.m_TargetVelocity = i7763[0]
  i7762.m_Force = i7763[1]
  i7762.m_FreeSpin = i7763[2]
  return i7762
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i7764 = root || request.c( 'UnityEngine.JointLimits' )
  var i7765 = data
  i7764.m_Min = i7765[0]
  i7764.m_Max = i7765[1]
  i7764.m_Bounciness = i7765[2]
  i7764.m_BounceMinVelocity = i7765[3]
  i7764.m_ContactDistance = i7765[4]
  i7764.minBounce = i7765[5]
  i7764.maxBounce = i7765[6]
  return i7764
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i7766 = root || request.c( 'UnityEngine.JointDrive' )
  var i7767 = data
  i7766.m_PositionSpring = i7767[0]
  i7766.m_PositionDamper = i7767[1]
  i7766.m_MaximumForce = i7767[2]
  i7766.m_UseAcceleration = i7767[3]
  return i7766
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i7768 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i7769 = data
  i7768.m_Spring = i7769[0]
  i7768.m_Damper = i7769[1]
  return i7768
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i7770 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i7771 = data
  i7770.m_Limit = i7771[0]
  i7770.m_Bounciness = i7771[1]
  i7770.m_ContactDistance = i7771[2]
  return i7770
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i7772 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i7773 = data
  i7772.m_ExtremumSlip = i7773[0]
  i7772.m_ExtremumValue = i7773[1]
  i7772.m_AsymptoteSlip = i7773[2]
  i7772.m_AsymptoteValue = i7773[3]
  i7772.m_Stiffness = i7773[4]
  return i7772
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i7774 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i7775 = data
  i7774.m_LowerAngle = i7775[0]
  i7774.m_UpperAngle = i7775[1]
  return i7774
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i7776 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i7777 = data
  i7776.m_MotorSpeed = i7777[0]
  i7776.m_MaximumMotorTorque = i7777[1]
  return i7776
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i7778 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i7779 = data
  i7778.m_DampingRatio = i7779[0]
  i7778.m_Frequency = i7779[1]
  i7778.m_Angle = i7779[2]
  return i7778
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i7780 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i7781 = data
  i7780.m_LowerTranslation = i7781[0]
  i7780.m_UpperTranslation = i7781[1]
  return i7780
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i7782 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i7783 = data
  i7782.name = i7783[0]
  i7782.width = i7783[1]
  i7782.height = i7783[2]
  i7782.mipmapCount = i7783[3]
  i7782.anisoLevel = i7783[4]
  i7782.filterMode = i7783[5]
  i7782.hdr = !!i7783[6]
  i7782.format = i7783[7]
  i7782.wrapMode = i7783[8]
  i7782.alphaIsTransparency = !!i7783[9]
  i7782.alphaSource = i7783[10]
  i7782.graphicsFormat = i7783[11]
  i7782.sRGBTexture = !!i7783[12]
  i7782.desiredColorSpace = i7783[13]
  i7782.wrapU = i7783[14]
  i7782.wrapV = i7783[15]
  return i7782
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i7784 = root || new pc.UnityMaterial()
  var i7785 = data
  i7784.name = i7785[0]
  request.r(i7785[1], i7785[2], 0, i7784, 'shader')
  i7784.renderQueue = i7785[3]
  i7784.enableInstancing = !!i7785[4]
  var i7787 = i7785[5]
  var i7786 = []
  for(var i = 0; i < i7787.length; i += 1) {
    i7786.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i7787[i + 0]) );
  }
  i7784.floatParameters = i7786
  var i7789 = i7785[6]
  var i7788 = []
  for(var i = 0; i < i7789.length; i += 1) {
    i7788.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i7789[i + 0]) );
  }
  i7784.colorParameters = i7788
  var i7791 = i7785[7]
  var i7790 = []
  for(var i = 0; i < i7791.length; i += 1) {
    i7790.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i7791[i + 0]) );
  }
  i7784.vectorParameters = i7790
  var i7793 = i7785[8]
  var i7792 = []
  for(var i = 0; i < i7793.length; i += 1) {
    i7792.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i7793[i + 0]) );
  }
  i7784.textureParameters = i7792
  var i7795 = i7785[9]
  var i7794 = []
  for(var i = 0; i < i7795.length; i += 1) {
    i7794.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i7795[i + 0]) );
  }
  i7784.materialFlags = i7794
  return i7784
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i7798 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i7799 = data
  i7798.name = i7799[0]
  i7798.value = i7799[1]
  return i7798
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i7802 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i7803 = data
  i7802.name = i7803[0]
  i7802.value = new pc.Color(i7803[1], i7803[2], i7803[3], i7803[4])
  return i7802
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i7806 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i7807 = data
  i7806.name = i7807[0]
  i7806.value = new pc.Vec4( i7807[1], i7807[2], i7807[3], i7807[4] )
  return i7806
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i7810 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i7811 = data
  i7810.name = i7811[0]
  request.r(i7811[1], i7811[2], 0, i7810, 'value')
  return i7810
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i7814 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i7815 = data
  i7814.name = i7815[0]
  i7814.enabled = !!i7815[1]
  return i7814
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i7816 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i7817 = data
  i7816.position = new pc.Vec3( i7817[0], i7817[1], i7817[2] )
  i7816.scale = new pc.Vec3( i7817[3], i7817[4], i7817[5] )
  i7816.rotation = new pc.Quat(i7817[6], i7817[7], i7817[8], i7817[9])
  return i7816
}

Deserializers["Level2_Cloth_Playable"] = function (request, data, root) {
  var i7818 = root || request.c( 'Level2_Cloth_Playable' )
  var i7819 = data
  request.r(i7819[0], i7819[1], 0, i7818, 'ClothChangeView')
  request.r(i7819[2], i7819[3], 0, i7818, 'WashingView')
  request.r(i7819[4], i7819[5], 0, i7818, 'DryView')
  request.r(i7819[6], i7819[7], 0, i7818, 'WashingTools')
  request.r(i7819[8], i7819[9], 0, i7818, 'knittingView')
  request.r(i7819[10], i7819[11], 0, i7818, 'doorAnim')
  request.r(i7819[12], i7819[13], 0, i7818, 'ClothDirtySink')
  request.r(i7819[14], i7819[15], 0, i7818, 'ClothDirtySinkWet')
  request.r(i7819[16], i7819[17], 0, i7818, 'ClothDirtySinkClean')
  request.r(i7819[18], i7819[19], 0, i7818, 'waterBase')
  request.r(i7819[20], i7819[21], 0, i7818, 'waterTop')
  request.r(i7819[22], i7819[23], 0, i7818, 'waterClean')
  request.r(i7819[24], i7819[25], 0, i7818, 'waterDirty')
  request.r(i7819[26], i7819[27], 0, i7818, 'sinkFoamClean')
  i7818.ZoomStep1 = request.d('ZoomPos', i7819[28], i7818.ZoomStep1)
  request.r(i7819[29], i7819[30], 0, i7818, 'ClothHand')
  request.r(i7819[31], i7819[32], 0, i7818, 'ToolStep1')
  request.r(i7819[33], i7819[34], 0, i7818, 'step1_Indication')
  request.r(i7819[35], i7819[36], 0, i7818, 'Basket_Step1')
  request.r(i7819[37], i7819[38], 0, i7818, 'ClothinBasketStep1')
  i7818.ZoomStep2 = request.d('ZoomPos', i7819[39], i7818.ZoomStep2)
  request.r(i7819[40], i7819[41], 0, i7818, 'ToolStep2')
  request.r(i7819[42], i7819[43], 0, i7818, 'Basket_Cloth')
  request.r(i7819[44], i7819[45], 0, i7818, 'step2_Indication')
  i7818.ZoomStep3 = request.d('ZoomPos', i7819[46], i7818.ZoomStep3)
  request.r(i7819[47], i7819[48], 0, i7818, 'TapColStep3')
  request.r(i7819[49], i7819[50], 0, i7818, 'step3_Indication')
  request.r(i7819[51], i7819[52], 0, i7818, 'tapParent')
  request.r(i7819[53], i7819[54], 0, i7818, 'tapMask')
  request.r(i7819[55], i7819[56], 0, i7818, 'tapTopRend')
  i7818.ZoomStep4 = request.d('ZoomPos', i7819[57], i7818.ZoomStep4)
  request.r(i7819[58], i7819[59], 0, i7818, 'ToolStep4')
  request.r(i7819[60], i7819[61], 0, i7818, 'soapTarget')
  i7818.ZoomStep5 = request.d('ZoomPos', i7819[62], i7818.ZoomStep5)
  request.r(i7819[63], i7819[64], 0, i7818, 'ToolStep5')
  i7818.ZoomStep6 = request.d('ZoomPos', i7819[65], i7818.ZoomStep6)
  request.r(i7819[66], i7819[67], 0, i7818, 'basketStep6')
  request.r(i7819[68], i7819[69], 0, i7818, 'ToolStep6')
  i7818.ZoomStep3a = request.d('ZoomPos', i7819[70], i7818.ZoomStep3a)
  request.r(i7819[71], i7819[72], 0, i7818, 'ToolStep3a')
  request.r(i7819[73], i7819[74], 0, i7818, 'step3aIndication')
  i7818.levelName = i7819[75]
  i7818.levelReward = i7819[76]
  request.r(i7819[77], i7819[78], 0, i7818, 'LevelIcon')
  request.r(i7819[79], i7819[80], 0, i7818, 'Level_BG')
  var i7821 = i7819[81]
  var i7820 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Sprite')))
  for(var i = 0; i < i7821.length; i += 2) {
  request.r(i7821[i + 0], i7821[i + 1], 1, i7820, '')
  }
  i7818.ToolIcons = i7820
  var i7823 = i7819[82]
  var i7822 = []
  for(var i = 0; i < i7823.length; i += 2) {
  request.r(i7823[i + 0], i7823[i + 1], 2, i7822, '')
  }
  i7818.AllDrags = i7822
  var i7825 = i7819[83]
  var i7824 = []
  for(var i = 0; i < i7825.length; i += 2) {
  request.r(i7825[i + 0], i7825[i + 1], 2, i7824, '')
  }
  i7818.AllSources = i7824
  var i7827 = i7819[84]
  var i7826 = []
  for(var i = 0; i < i7827.length; i += 2) {
  request.r(i7827[i + 0], i7827[i + 1], 2, i7826, '')
  }
  i7818.AllScratches = i7826
  i7818.stepsDone = i7819[85]
  i7818.levelNo = i7819[86]
  i7818.partNo = i7819[87]
  request.r(i7819[88], i7819[89], 0, i7818, 'clothSfx')
  request.r(i7819[90], i7819[91], 0, i7818, 'tapOpenSfx')
  request.r(i7819[92], i7819[93], 0, i7818, 'waterPourSfx')
  return i7818
}

Deserializers["ZoomPos"] = function (request, data, root) {
  var i7828 = root || request.c( 'ZoomPos' )
  var i7829 = data
  i7828.CameraPos = new pc.Vec3( i7829[0], i7829[1], i7829[2] )
  i7828.CameraFOV = i7829[3]
  return i7828
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i7838 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i7839 = data
  i7838.name = i7839[0]
  i7838.tagId = i7839[1]
  i7838.enabled = !!i7839[2]
  i7838.isStatic = !!i7839[3]
  i7838.layer = i7839[4]
  return i7838
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animator"] = function (request, data, root) {
  var i7840 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animator' )
  var i7841 = data
  request.r(i7841[0], i7841[1], 0, i7840, 'animatorController')
  request.r(i7841[2], i7841[3], 0, i7840, 'avatar')
  i7840.updateMode = i7841[4]
  i7840.hasTransformHierarchy = !!i7841[5]
  i7840.applyRootMotion = !!i7841[6]
  var i7843 = i7841[7]
  var i7842 = []
  for(var i = 0; i < i7843.length; i += 2) {
  request.r(i7843[i + 0], i7843[i + 1], 2, i7842, '')
  }
  i7840.humanBones = i7842
  i7840.enabled = !!i7841[8]
  return i7840
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer"] = function (request, data, root) {
  var i7846 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer' )
  var i7847 = data
  i7846.color = new pc.Color(i7847[0], i7847[1], i7847[2], i7847[3])
  request.r(i7847[4], i7847[5], 0, i7846, 'sprite')
  i7846.flipX = !!i7847[6]
  i7846.flipY = !!i7847[7]
  i7846.drawMode = i7847[8]
  i7846.size = new pc.Vec2( i7847[9], i7847[10] )
  i7846.tileMode = i7847[11]
  i7846.adaptiveModeThreshold = i7847[12]
  i7846.maskInteraction = i7847[13]
  i7846.spriteSortPoint = i7847[14]
  i7846.enabled = !!i7847[15]
  request.r(i7847[16], i7847[17], 0, i7846, 'sharedMaterial')
  var i7849 = i7847[18]
  var i7848 = []
  for(var i = 0; i < i7849.length; i += 2) {
  request.r(i7849[i + 0], i7849[i + 1], 2, i7848, '')
  }
  i7846.sharedMaterials = i7848
  i7846.receiveShadows = !!i7847[19]
  i7846.shadowCastingMode = i7847[20]
  i7846.sortingLayerID = i7847[21]
  i7846.sortingOrder = i7847[22]
  i7846.lightmapIndex = i7847[23]
  i7846.lightmapSceneIndex = i7847[24]
  i7846.lightmapScaleOffset = new pc.Vec4( i7847[25], i7847[26], i7847[27], i7847[28] )
  i7846.lightProbeUsage = i7847[29]
  i7846.reflectionProbeUsage = i7847[30]
  return i7846
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.TrailRenderer"] = function (request, data, root) {
  var i7852 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.TrailRenderer' )
  var i7853 = data
  var i7855 = i7853[0]
  var i7854 = []
  for(var i = 0; i < i7855.length; i += 3) {
    i7854.push( new pc.Vec3( i7855[i + 0], i7855[i + 1], i7855[i + 2] ) );
  }
  i7852.positions = i7854
  i7852.positionCount = i7853[1]
  i7852.time = i7853[2]
  i7852.startWidth = i7853[3]
  i7852.endWidth = i7853[4]
  i7852.widthMultiplier = i7853[5]
  i7852.autodestruct = !!i7853[6]
  i7852.emitting = !!i7853[7]
  i7852.numCornerVertices = i7853[8]
  i7852.numCapVertices = i7853[9]
  i7852.minVertexDistance = i7853[10]
  i7852.colorGradient = i7853[11] ? new pc.ColorGradient(i7853[11][0], i7853[11][1], i7853[11][2]) : null
  i7852.startColor = new pc.Color(i7853[12], i7853[13], i7853[14], i7853[15])
  i7852.endColor = new pc.Color(i7853[16], i7853[17], i7853[18], i7853[19])
  i7852.generateLightingData = !!i7853[20]
  i7852.textureMode = i7853[21]
  i7852.alignment = i7853[22]
  i7852.widthCurve = new pc.AnimationCurve( { keys_flow: i7853[23] } )
  i7852.enabled = !!i7853[24]
  request.r(i7853[25], i7853[26], 0, i7852, 'sharedMaterial')
  var i7857 = i7853[27]
  var i7856 = []
  for(var i = 0; i < i7857.length; i += 2) {
  request.r(i7857[i + 0], i7857[i + 1], 2, i7856, '')
  }
  i7852.sharedMaterials = i7856
  i7852.receiveShadows = !!i7853[28]
  i7852.shadowCastingMode = i7853[29]
  i7852.sortingLayerID = i7853[30]
  i7852.sortingOrder = i7853[31]
  i7852.lightmapIndex = i7853[32]
  i7852.lightmapSceneIndex = i7853[33]
  i7852.lightmapScaleOffset = new pc.Vec4( i7853[34], i7853[35], i7853[36], i7853[37] )
  i7852.lightProbeUsage = i7853[38]
  i7852.reflectionProbeUsage = i7853[39]
  return i7852
}

Deserializers["UnityEngine.U2D.Animation.SpriteSkin"] = function (request, data, root) {
  var i7860 = root || request.c( 'UnityEngine.U2D.Animation.SpriteSkin' )
  var i7861 = data
  request.r(i7861[0], i7861[1], 0, i7860, 'm_RootBone')
  var i7863 = i7861[2]
  var i7862 = []
  for(var i = 0; i < i7863.length; i += 2) {
  request.r(i7863[i + 0], i7863[i + 1], 2, i7862, '')
  }
  i7860.m_BoneTransforms = i7862
  i7860.m_AlwaysUpdate = !!i7861[3]
  i7860.m_AutoRebind = !!i7861[4]
  return i7860
}

Deserializers["BD_AnimationHelper"] = function (request, data, root) {
  var i7864 = root || request.c( 'BD_AnimationHelper' )
  var i7865 = data
  i7864.OnAnimationComplete = request.d('UnityEngine.Events.UnityEvent', i7865[0], i7864.OnAnimationComplete)
  request.r(i7865[1], i7865[2], 0, i7864, 'sfxClip')
  return i7864
}

Deserializers["UnityEngine.Events.UnityEvent"] = function (request, data, root) {
  var i7866 = root || request.c( 'UnityEngine.Events.UnityEvent' )
  var i7867 = data
  i7866.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i7867[0], i7866.m_PersistentCalls)
  return i7866
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i7868 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i7869 = data
  var i7871 = i7869[0]
  var i7870 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i7871.length; i += 1) {
    i7870.add(request.d('UnityEngine.Events.PersistentCall', i7871[i + 0]));
  }
  i7868.m_Calls = i7870
  return i7868
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i7874 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i7875 = data
  request.r(i7875[0], i7875[1], 0, i7874, 'm_Target')
  i7874.m_TargetAssemblyTypeName = i7875[2]
  i7874.m_MethodName = i7875[3]
  i7874.m_Mode = i7875[4]
  i7874.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i7875[5], i7874.m_Arguments)
  i7874.m_CallState = i7875[6]
  return i7874
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i7876 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i7877 = data
  request.r(i7877[0], i7877[1], 0, i7876, 'm_ObjectArgument')
  i7876.m_ObjectArgumentAssemblyTypeName = i7877[2]
  i7876.m_IntArgument = i7877[3]
  i7876.m_FloatArgument = i7877[4]
  i7876.m_StringArgument = i7877[5]
  i7876.m_BoolArgument = !!i7877[6]
  return i7876
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteMask"] = function (request, data, root) {
  var i7878 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteMask' )
  var i7879 = data
  i7878.frontSortingLayerID = i7879[0]
  i7878.frontSortingOrder = i7879[1]
  i7878.backSortingLayerID = i7879[2]
  i7878.backSortingOrder = i7879[3]
  i7878.alphaCutoff = i7879[4]
  request.r(i7879[5], i7879[6], 0, i7878, 'sprite')
  i7878.tileMode = i7879[7]
  i7878.isCustomRangeActive = !!i7879[8]
  i7878.spriteSortPoint = i7879[9]
  i7878.enabled = !!i7879[10]
  request.r(i7879[11], i7879[12], 0, i7878, 'sharedMaterial')
  var i7881 = i7879[13]
  var i7880 = []
  for(var i = 0; i < i7881.length; i += 2) {
  request.r(i7881[i + 0], i7881[i + 1], 2, i7880, '')
  }
  i7878.sharedMaterials = i7880
  i7878.receiveShadows = !!i7879[14]
  i7878.shadowCastingMode = i7879[15]
  i7878.sortingLayerID = i7879[16]
  i7878.sortingOrder = i7879[17]
  i7878.lightmapIndex = i7879[18]
  i7878.lightmapSceneIndex = i7879[19]
  i7878.lightmapScaleOffset = new pc.Vec4( i7879[20], i7879[21], i7879[22], i7879[23] )
  i7878.lightProbeUsage = i7879[24]
  i7878.reflectionProbeUsage = i7879[25]
  return i7878
}

Deserializers["BasicDrag"] = function (request, data, root) {
  var i7882 = root || request.c( 'BasicDrag' )
  var i7883 = data
  i7882.canDrag = !!i7883[0]
  i7882.dragByDelta = !!i7883[1]
  i7882.isDragging = !!i7883[2]
  i7882.moveWithPointer = !!i7883[3]
  i7882.canReturn = !!i7883[4]
  i7882.jumpOnReturn = !!i7883[5]
  i7882.returnTime = i7883[6]
  i7882.Tool_Offset = new pc.Vec3( i7883[7], i7883[8], i7883[9] )
  i7882.canScaleIncrease = !!i7883[10]
  i7882.Self_ScaleNew = new pc.Vec3( i7883[11], i7883[12], i7883[13] )
  i7882.canRotateOnPick = !!i7883[14]
  i7882.startRot = new pc.Vec3( i7883[15], i7883[16], i7883[17] )
  i7882.newRot = new pc.Vec3( i7883[18], i7883[19], i7883[20] )
  var i7885 = i7883[21]
  var i7884 = []
  for(var i = 0; i < i7885.length; i += 2) {
  request.r(i7885[i + 0], i7885[i + 1], 2, i7884, '')
  }
  i7882.childSprite = i7884
  request.r(i7883[22], i7883[23], 0, i7882, 'ToolSelectClip')
  request.r(i7883[24], i7883[25], 0, i7882, 'ToolLoopClip')
  request.r(i7883[26], i7883[27], 0, i7882, 'thisParticles')
  i7882.onDragparticle = !!i7883[28]
  request.r(i7883[29], i7883[30], 0, i7882, 'dragParticles')
  request.r(i7883[31], i7883[32], 0, i7882, 'anim')
  i7882.startPos = new pc.Vec3( i7883[33], i7883[34], i7883[35] )
  i7882.startScale = new pc.Vec3( i7883[36], i7883[37], i7883[38] )
  i7882.Vibration = !!i7883[39]
  i7882.isPlacedCannotMove = !!i7883[40]
  i7882.isObjectMovingWhileDragging = !!i7883[41]
  i7882.OnMouseDownEvent = request.d('System.Action', i7883[42], i7882.OnMouseDownEvent)
  i7882.OnMouseUpEvent = request.d('System.Action', i7883[43], i7882.OnMouseUpEvent)
  i7882.ProgStartEvent = request.d('System.Action', i7883[44], i7882.ProgStartEvent)
  i7882.ProgEndEvent = request.d('System.Action', i7883[45], i7882.ProgEndEvent)
  i7882.canCallMouseUpWhenGamePaused = !!i7883[46]
  i7882.ClampX_L = i7883[47]
  i7882.ClampX_H = i7883[48]
  i7882.ClampY_L = i7883[49]
  i7882.ClampY_H = i7883[50]
  i7882.startOrder = i7883[51]
  i7882.dontResetItIsInCollider = !!i7883[52]
  request.r(i7883[53], i7883[54], 0, i7882, 'thisCollider')
  request.r(i7883[55], i7883[56], 0, i7882, 'thisSR')
  i7882.OnMouseDownEventIndependentFromCanDrag = request.d('System.Action', i7883[57], i7882.OnMouseDownEventIndependentFromCanDrag)
  return i7882
}

Deserializers["System.Action"] = function (request, data, root) {
  var i7888 = root || request.c( 'System.Action' )
  var i7889 = data
  return i7888
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D"] = function (request, data, root) {
  var i7890 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D' )
  var i7891 = data
  i7890.usedByComposite = !!i7891[0]
  i7890.autoTiling = !!i7891[1]
  i7890.size = new pc.Vec2( i7891[2], i7891[3] )
  i7890.edgeRadius = i7891[4]
  i7890.enabled = !!i7891[5]
  i7890.isTrigger = !!i7891[6]
  i7890.usedByEffector = !!i7891[7]
  i7890.density = i7891[8]
  i7890.offset = new pc.Vec2( i7891[9], i7891[10] )
  request.r(i7891[11], i7891[12], 0, i7890, 'material')
  return i7890
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D"] = function (request, data, root) {
  var i7892 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D' )
  var i7893 = data
  i7892.bodyType = i7893[0]
  request.r(i7893[1], i7893[2], 0, i7892, 'material')
  i7892.simulated = !!i7893[3]
  i7892.useAutoMass = !!i7893[4]
  i7892.mass = i7893[5]
  i7892.drag = i7893[6]
  i7892.angularDrag = i7893[7]
  i7892.gravityScale = i7893[8]
  i7892.collisionDetectionMode = i7893[9]
  i7892.sleepMode = i7893[10]
  i7892.constraints = i7893[11]
  return i7892
}

Deserializers["PlaceItem"] = function (request, data, root) {
  var i7894 = root || request.c( 'PlaceItem' )
  var i7895 = data
  request.r(i7895[0], i7895[1], 0, i7894, 'thisDrag')
  request.r(i7895[2], i7895[3], 0, i7894, 'Target')
  request.r(i7895[4], i7895[5], 0, i7894, 'Clip')
  i7894.jumpOnPlace = !!i7895[6]
  i7894.jumpHeight = i7895[7]
  i7894.jumpDuration = i7895[8]
  i7894.settleDuration = i7895[9]
  i7894.isPlaced = !!i7895[10]
  i7894.isInsideCollider = !!i7895[11]
  i7894.OnPlaced = request.d('UnityEngine.Events.UnityEvent', i7895[12], i7894.OnPlaced)
  return i7894
}

Deserializers["DG.Tweening.DOTweenAnimation"] = function (request, data, root) {
  var i7896 = root || request.c( 'DG.Tweening.DOTweenAnimation' )
  var i7897 = data
  i7896.targetIsSelf = !!i7897[0]
  request.r(i7897[1], i7897[2], 0, i7896, 'targetGO')
  i7896.tweenTargetIsTargetGO = !!i7897[3]
  i7896.delay = i7897[4]
  i7896.duration = i7897[5]
  i7896.easeType = i7897[6]
  i7896.easeCurve = new pc.AnimationCurve( { keys_flow: i7897[7] } )
  i7896.loopType = i7897[8]
  i7896.loops = i7897[9]
  i7896.id = i7897[10]
  i7896.isRelative = !!i7897[11]
  i7896.isFrom = !!i7897[12]
  i7896.isIndependentUpdate = !!i7897[13]
  i7896.autoKill = !!i7897[14]
  i7896.autoGenerate = !!i7897[15]
  i7896.isActive = !!i7897[16]
  i7896.isValid = !!i7897[17]
  request.r(i7897[18], i7897[19], 0, i7896, 'target')
  i7896.animationType = i7897[20]
  i7896.targetType = i7897[21]
  i7896.forcedTargetType = i7897[22]
  i7896.autoPlay = !!i7897[23]
  i7896.useTargetAsV3 = !!i7897[24]
  i7896.endValueFloat = i7897[25]
  i7896.endValueV3 = new pc.Vec3( i7897[26], i7897[27], i7897[28] )
  i7896.endValueV2 = new pc.Vec2( i7897[29], i7897[30] )
  i7896.endValueColor = new pc.Color(i7897[31], i7897[32], i7897[33], i7897[34])
  i7896.endValueString = i7897[35]
  i7896.endValueRect = UnityEngine.Rect.MinMaxRect(i7897[36], i7897[37], i7897[38], i7897[39])
  request.r(i7897[40], i7897[41], 0, i7896, 'endValueTransform')
  i7896.optionalBool0 = !!i7897[42]
  i7896.optionalBool1 = !!i7897[43]
  i7896.optionalFloat0 = i7897[44]
  i7896.optionalInt0 = i7897[45]
  i7896.optionalRotationMode = i7897[46]
  i7896.optionalScrambleMode = i7897[47]
  i7896.optionalShakeRandomnessMode = i7897[48]
  i7896.optionalString = i7897[49]
  i7896.updateType = i7897[50]
  i7896.isSpeedBased = !!i7897[51]
  i7896.hasOnStart = !!i7897[52]
  i7896.hasOnPlay = !!i7897[53]
  i7896.hasOnUpdate = !!i7897[54]
  i7896.hasOnStepComplete = !!i7897[55]
  i7896.hasOnComplete = !!i7897[56]
  i7896.hasOnTweenCreated = !!i7897[57]
  i7896.hasOnRewind = !!i7897[58]
  i7896.onStart = request.d('UnityEngine.Events.UnityEvent', i7897[59], i7896.onStart)
  i7896.onPlay = request.d('UnityEngine.Events.UnityEvent', i7897[60], i7896.onPlay)
  i7896.onUpdate = request.d('UnityEngine.Events.UnityEvent', i7897[61], i7896.onUpdate)
  i7896.onStepComplete = request.d('UnityEngine.Events.UnityEvent', i7897[62], i7896.onStepComplete)
  i7896.onComplete = request.d('UnityEngine.Events.UnityEvent', i7897[63], i7896.onComplete)
  i7896.onTweenCreated = request.d('UnityEngine.Events.UnityEvent', i7897[64], i7896.onTweenCreated)
  i7896.onRewind = request.d('UnityEngine.Events.UnityEvent', i7897[65], i7896.onRewind)
  return i7896
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystem"] = function (request, data, root) {
  var i7898 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystem' )
  var i7899 = data
  i7898.main = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule', i7899[0], i7898.main)
  i7898.colorBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule', i7899[1], i7898.colorBySpeed)
  i7898.colorOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule', i7899[2], i7898.colorOverLifetime)
  i7898.emission = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule', i7899[3], i7898.emission)
  i7898.rotationBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule', i7899[4], i7898.rotationBySpeed)
  i7898.rotationOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule', i7899[5], i7898.rotationOverLifetime)
  i7898.shape = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule', i7899[6], i7898.shape)
  i7898.sizeBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule', i7899[7], i7898.sizeBySpeed)
  i7898.sizeOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule', i7899[8], i7898.sizeOverLifetime)
  i7898.textureSheetAnimation = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule', i7899[9], i7898.textureSheetAnimation)
  i7898.velocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule', i7899[10], i7898.velocityOverLifetime)
  i7898.noise = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule', i7899[11], i7898.noise)
  i7898.inheritVelocity = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule', i7899[12], i7898.inheritVelocity)
  i7898.forceOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule', i7899[13], i7898.forceOverLifetime)
  i7898.limitVelocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule', i7899[14], i7898.limitVelocityOverLifetime)
  i7898.useAutoRandomSeed = !!i7899[15]
  i7898.randomSeed = i7899[16]
  return i7898
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule"] = function (request, data, root) {
  var i7900 = root || new pc.ParticleSystemMain()
  var i7901 = data
  i7900.duration = i7901[0]
  i7900.loop = !!i7901[1]
  i7900.prewarm = !!i7901[2]
  i7900.startDelay = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7901[3], i7900.startDelay)
  i7900.startLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7901[4], i7900.startLifetime)
  i7900.startSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7901[5], i7900.startSpeed)
  i7900.startSize3D = !!i7901[6]
  i7900.startSizeX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7901[7], i7900.startSizeX)
  i7900.startSizeY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7901[8], i7900.startSizeY)
  i7900.startSizeZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7901[9], i7900.startSizeZ)
  i7900.startRotation3D = !!i7901[10]
  i7900.startRotationX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7901[11], i7900.startRotationX)
  i7900.startRotationY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7901[12], i7900.startRotationY)
  i7900.startRotationZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7901[13], i7900.startRotationZ)
  i7900.startColor = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i7901[14], i7900.startColor)
  i7900.gravityModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7901[15], i7900.gravityModifier)
  i7900.simulationSpace = i7901[16]
  request.r(i7901[17], i7901[18], 0, i7900, 'customSimulationSpace')
  i7900.simulationSpeed = i7901[19]
  i7900.useUnscaledTime = !!i7901[20]
  i7900.scalingMode = i7901[21]
  i7900.playOnAwake = !!i7901[22]
  i7900.maxParticles = i7901[23]
  i7900.emitterVelocityMode = i7901[24]
  i7900.stopAction = i7901[25]
  return i7900
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve"] = function (request, data, root) {
  var i7902 = root || new pc.MinMaxCurve()
  var i7903 = data
  i7902.mode = i7903[0]
  i7902.curveMin = new pc.AnimationCurve( { keys_flow: i7903[1] } )
  i7902.curveMax = new pc.AnimationCurve( { keys_flow: i7903[2] } )
  i7902.curveMultiplier = i7903[3]
  i7902.constantMin = i7903[4]
  i7902.constantMax = i7903[5]
  return i7902
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient"] = function (request, data, root) {
  var i7904 = root || new pc.MinMaxGradient()
  var i7905 = data
  i7904.mode = i7905[0]
  i7904.gradientMin = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i7905[1], i7904.gradientMin)
  i7904.gradientMax = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i7905[2], i7904.gradientMax)
  i7904.colorMin = new pc.Color(i7905[3], i7905[4], i7905[5], i7905[6])
  i7904.colorMax = new pc.Color(i7905[7], i7905[8], i7905[9], i7905[10])
  return i7904
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient"] = function (request, data, root) {
  var i7906 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient' )
  var i7907 = data
  i7906.mode = i7907[0]
  var i7909 = i7907[1]
  var i7908 = []
  for(var i = 0; i < i7909.length; i += 1) {
    i7908.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey', i7909[i + 0]) );
  }
  i7906.colorKeys = i7908
  var i7911 = i7907[2]
  var i7910 = []
  for(var i = 0; i < i7911.length; i += 1) {
    i7910.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey', i7911[i + 0]) );
  }
  i7906.alphaKeys = i7910
  return i7906
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule"] = function (request, data, root) {
  var i7912 = root || new pc.ParticleSystemColorBySpeed()
  var i7913 = data
  i7912.enabled = !!i7913[0]
  i7912.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i7913[1], i7912.color)
  i7912.range = new pc.Vec2( i7913[2], i7913[3] )
  return i7912
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey"] = function (request, data, root) {
  var i7916 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey' )
  var i7917 = data
  i7916.color = new pc.Color(i7917[0], i7917[1], i7917[2], i7917[3])
  i7916.time = i7917[4]
  return i7916
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey"] = function (request, data, root) {
  var i7920 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey' )
  var i7921 = data
  i7920.alpha = i7921[0]
  i7920.time = i7921[1]
  return i7920
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule"] = function (request, data, root) {
  var i7922 = root || new pc.ParticleSystemColorOverLifetime()
  var i7923 = data
  i7922.enabled = !!i7923[0]
  i7922.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i7923[1], i7922.color)
  return i7922
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule"] = function (request, data, root) {
  var i7924 = root || new pc.ParticleSystemEmitter()
  var i7925 = data
  i7924.enabled = !!i7925[0]
  i7924.rateOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7925[1], i7924.rateOverTime)
  i7924.rateOverDistance = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7925[2], i7924.rateOverDistance)
  var i7927 = i7925[3]
  var i7926 = []
  for(var i = 0; i < i7927.length; i += 1) {
    i7926.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst', i7927[i + 0]) );
  }
  i7924.bursts = i7926
  return i7924
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst"] = function (request, data, root) {
  var i7930 = root || new pc.ParticleSystemBurst()
  var i7931 = data
  i7930.count = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7931[0], i7930.count)
  i7930.cycleCount = i7931[1]
  i7930.minCount = i7931[2]
  i7930.maxCount = i7931[3]
  i7930.repeatInterval = i7931[4]
  i7930.time = i7931[5]
  return i7930
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule"] = function (request, data, root) {
  var i7932 = root || new pc.ParticleSystemRotationBySpeed()
  var i7933 = data
  i7932.enabled = !!i7933[0]
  i7932.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7933[1], i7932.x)
  i7932.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7933[2], i7932.y)
  i7932.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7933[3], i7932.z)
  i7932.separateAxes = !!i7933[4]
  i7932.range = new pc.Vec2( i7933[5], i7933[6] )
  return i7932
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule"] = function (request, data, root) {
  var i7934 = root || new pc.ParticleSystemRotationOverLifetime()
  var i7935 = data
  i7934.enabled = !!i7935[0]
  i7934.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7935[1], i7934.x)
  i7934.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7935[2], i7934.y)
  i7934.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7935[3], i7934.z)
  i7934.separateAxes = !!i7935[4]
  return i7934
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule"] = function (request, data, root) {
  var i7936 = root || new pc.ParticleSystemShape()
  var i7937 = data
  i7936.enabled = !!i7937[0]
  i7936.shapeType = i7937[1]
  i7936.randomDirectionAmount = i7937[2]
  i7936.sphericalDirectionAmount = i7937[3]
  i7936.randomPositionAmount = i7937[4]
  i7936.alignToDirection = !!i7937[5]
  i7936.radius = i7937[6]
  i7936.radiusMode = i7937[7]
  i7936.radiusSpread = i7937[8]
  i7936.radiusSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7937[9], i7936.radiusSpeed)
  i7936.radiusThickness = i7937[10]
  i7936.angle = i7937[11]
  i7936.length = i7937[12]
  i7936.boxThickness = new pc.Vec3( i7937[13], i7937[14], i7937[15] )
  i7936.meshShapeType = i7937[16]
  request.r(i7937[17], i7937[18], 0, i7936, 'mesh')
  request.r(i7937[19], i7937[20], 0, i7936, 'meshRenderer')
  request.r(i7937[21], i7937[22], 0, i7936, 'skinnedMeshRenderer')
  i7936.useMeshMaterialIndex = !!i7937[23]
  i7936.meshMaterialIndex = i7937[24]
  i7936.useMeshColors = !!i7937[25]
  i7936.normalOffset = i7937[26]
  i7936.arc = i7937[27]
  i7936.arcMode = i7937[28]
  i7936.arcSpread = i7937[29]
  i7936.arcSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7937[30], i7936.arcSpeed)
  i7936.donutRadius = i7937[31]
  i7936.position = new pc.Vec3( i7937[32], i7937[33], i7937[34] )
  i7936.rotation = new pc.Vec3( i7937[35], i7937[36], i7937[37] )
  i7936.scale = new pc.Vec3( i7937[38], i7937[39], i7937[40] )
  return i7936
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule"] = function (request, data, root) {
  var i7938 = root || new pc.ParticleSystemSizeBySpeed()
  var i7939 = data
  i7938.enabled = !!i7939[0]
  i7938.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7939[1], i7938.x)
  i7938.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7939[2], i7938.y)
  i7938.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7939[3], i7938.z)
  i7938.separateAxes = !!i7939[4]
  i7938.range = new pc.Vec2( i7939[5], i7939[6] )
  return i7938
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule"] = function (request, data, root) {
  var i7940 = root || new pc.ParticleSystemSizeOverLifetime()
  var i7941 = data
  i7940.enabled = !!i7941[0]
  i7940.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7941[1], i7940.x)
  i7940.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7941[2], i7940.y)
  i7940.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7941[3], i7940.z)
  i7940.separateAxes = !!i7941[4]
  return i7940
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule"] = function (request, data, root) {
  var i7942 = root || new pc.ParticleSystemTextureSheetAnimation()
  var i7943 = data
  i7942.enabled = !!i7943[0]
  i7942.mode = i7943[1]
  i7942.animation = i7943[2]
  i7942.numTilesX = i7943[3]
  i7942.numTilesY = i7943[4]
  i7942.useRandomRow = !!i7943[5]
  i7942.frameOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7943[6], i7942.frameOverTime)
  i7942.startFrame = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7943[7], i7942.startFrame)
  i7942.cycleCount = i7943[8]
  i7942.rowIndex = i7943[9]
  i7942.flipU = i7943[10]
  i7942.flipV = i7943[11]
  i7942.spriteCount = i7943[12]
  var i7945 = i7943[13]
  var i7944 = []
  for(var i = 0; i < i7945.length; i += 2) {
  request.r(i7945[i + 0], i7945[i + 1], 2, i7944, '')
  }
  i7942.sprites = i7944
  return i7942
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule"] = function (request, data, root) {
  var i7948 = root || new pc.ParticleSystemVelocityOverLifetime()
  var i7949 = data
  i7948.enabled = !!i7949[0]
  i7948.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7949[1], i7948.x)
  i7948.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7949[2], i7948.y)
  i7948.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7949[3], i7948.z)
  i7948.radial = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7949[4], i7948.radial)
  i7948.speedModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7949[5], i7948.speedModifier)
  i7948.space = i7949[6]
  i7948.orbitalX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7949[7], i7948.orbitalX)
  i7948.orbitalY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7949[8], i7948.orbitalY)
  i7948.orbitalZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7949[9], i7948.orbitalZ)
  i7948.orbitalOffsetX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7949[10], i7948.orbitalOffsetX)
  i7948.orbitalOffsetY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7949[11], i7948.orbitalOffsetY)
  i7948.orbitalOffsetZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7949[12], i7948.orbitalOffsetZ)
  return i7948
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule"] = function (request, data, root) {
  var i7950 = root || new pc.ParticleSystemNoise()
  var i7951 = data
  i7950.enabled = !!i7951[0]
  i7950.separateAxes = !!i7951[1]
  i7950.strengthX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7951[2], i7950.strengthX)
  i7950.strengthY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7951[3], i7950.strengthY)
  i7950.strengthZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7951[4], i7950.strengthZ)
  i7950.frequency = i7951[5]
  i7950.damping = !!i7951[6]
  i7950.octaveCount = i7951[7]
  i7950.octaveMultiplier = i7951[8]
  i7950.octaveScale = i7951[9]
  i7950.quality = i7951[10]
  i7950.scrollSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7951[11], i7950.scrollSpeed)
  i7950.scrollSpeedMultiplier = i7951[12]
  i7950.remapEnabled = !!i7951[13]
  i7950.remapX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7951[14], i7950.remapX)
  i7950.remapY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7951[15], i7950.remapY)
  i7950.remapZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7951[16], i7950.remapZ)
  i7950.positionAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7951[17], i7950.positionAmount)
  i7950.rotationAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7951[18], i7950.rotationAmount)
  i7950.sizeAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7951[19], i7950.sizeAmount)
  return i7950
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule"] = function (request, data, root) {
  var i7952 = root || new pc.ParticleSystemInheritVelocity()
  var i7953 = data
  i7952.enabled = !!i7953[0]
  i7952.mode = i7953[1]
  i7952.curve = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7953[2], i7952.curve)
  return i7952
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule"] = function (request, data, root) {
  var i7954 = root || new pc.ParticleSystemForceOverLifetime()
  var i7955 = data
  i7954.enabled = !!i7955[0]
  i7954.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7955[1], i7954.x)
  i7954.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7955[2], i7954.y)
  i7954.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7955[3], i7954.z)
  i7954.space = i7955[4]
  i7954.randomized = !!i7955[5]
  return i7954
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule"] = function (request, data, root) {
  var i7956 = root || new pc.ParticleSystemLimitVelocityOverLifetime()
  var i7957 = data
  i7956.enabled = !!i7957[0]
  i7956.limit = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7957[1], i7956.limit)
  i7956.limitX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7957[2], i7956.limitX)
  i7956.limitY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7957[3], i7956.limitY)
  i7956.limitZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7957[4], i7956.limitZ)
  i7956.dampen = i7957[5]
  i7956.separateAxes = !!i7957[6]
  i7956.space = i7957[7]
  i7956.drag = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7957[8], i7956.drag)
  i7956.multiplyDragByParticleSize = !!i7957[9]
  i7956.multiplyDragByParticleVelocity = !!i7957[10]
  return i7956
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer"] = function (request, data, root) {
  var i7958 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer' )
  var i7959 = data
  request.r(i7959[0], i7959[1], 0, i7958, 'mesh')
  i7958.meshCount = i7959[2]
  i7958.activeVertexStreamsCount = i7959[3]
  i7958.alignment = i7959[4]
  i7958.renderMode = i7959[5]
  i7958.sortMode = i7959[6]
  i7958.lengthScale = i7959[7]
  i7958.velocityScale = i7959[8]
  i7958.cameraVelocityScale = i7959[9]
  i7958.normalDirection = i7959[10]
  i7958.sortingFudge = i7959[11]
  i7958.minParticleSize = i7959[12]
  i7958.maxParticleSize = i7959[13]
  i7958.pivot = new pc.Vec3( i7959[14], i7959[15], i7959[16] )
  request.r(i7959[17], i7959[18], 0, i7958, 'trailMaterial')
  i7958.applyActiveColorSpace = !!i7959[19]
  i7958.enabled = !!i7959[20]
  request.r(i7959[21], i7959[22], 0, i7958, 'sharedMaterial')
  var i7961 = i7959[23]
  var i7960 = []
  for(var i = 0; i < i7961.length; i += 2) {
  request.r(i7961[i + 0], i7961[i + 1], 2, i7960, '')
  }
  i7958.sharedMaterials = i7960
  i7958.receiveShadows = !!i7959[24]
  i7958.shadowCastingMode = i7959[25]
  i7958.sortingLayerID = i7959[26]
  i7958.sortingOrder = i7959[27]
  i7958.lightmapIndex = i7959[28]
  i7958.lightmapSceneIndex = i7959[29]
  i7958.lightmapScaleOffset = new pc.Vec4( i7959[30], i7959[31], i7959[32], i7959[33] )
  i7958.lightProbeUsage = i7959[34]
  i7958.reflectionProbeUsage = i7959[35]
  return i7958
}

Deserializers["ArrayRotationByMovement"] = function (request, data, root) {
  var i7962 = root || request.c( 'ArrayRotationByMovement' )
  var i7963 = data
  var i7965 = i7963[0]
  var i7964 = []
  for(var i = 0; i < i7965.length; i += 2) {
  request.r(i7965[i + 0], i7965[i + 1], 2, i7964, '')
  }
  i7962.objectsToRotate = i7964
  request.r(i7963[1], i7963[2], 0, i7962, 'referenceTransform')
  i7962.movingRight_Rotation = i7963[3]
  i7962.movingLeft_Rotation = i7963[4]
  i7962.rotationOffsets = i7963[5]
  i7962.rotationAxis = i7963[6]
  i7962.smoothRotation = !!i7963[7]
  i7962.smoothSpeed = i7963[8]
  i7962.movementThreshold = i7963[9]
  return i7962
}

Deserializers["ActionOnTap"] = function (request, data, root) {
  var i7966 = root || request.c( 'ActionOnTap' )
  var i7967 = data
  i7966.OnTap = request.d('UnityEngine.Events.UnityEvent', i7967[0], i7966.OnTap)
  return i7966
}

Deserializers["BD_Clamp"] = function (request, data, root) {
  var i7968 = root || request.c( 'BD_Clamp' )
  var i7969 = data
  i7968.ClampX_L = i7969[0]
  i7968.ClampX_H = i7969[1]
  i7968.ClampY_L = i7969[2]
  i7968.ClampY_H = i7969[3]
  return i7968
}

Deserializers["BD_Action"] = function (request, data, root) {
  var i7970 = root || request.c( 'BD_Action' )
  var i7971 = data
  i7970.OnMouseDownEvent = request.d('UnityEngine.Events.UnityEvent', i7971[0], i7970.OnMouseDownEvent)
  i7970.OnMouseUpEvent = request.d('UnityEngine.Events.UnityEvent', i7971[1], i7970.OnMouseUpEvent)
  i7970.setToolLayer = !!i7971[2]
  request.r(i7971[3], i7971[4], 0, i7970, 'tool_SP')
  return i7970
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CircleCollider2D"] = function (request, data, root) {
  var i7972 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CircleCollider2D' )
  var i7973 = data
  i7972.radius = i7973[0]
  i7972.enabled = !!i7973[1]
  i7972.isTrigger = !!i7973[2]
  i7972.usedByEffector = !!i7973[3]
  i7972.density = i7973[4]
  i7972.offset = new pc.Vec2( i7973[5], i7973[6] )
  request.r(i7973[7], i7973[8], 0, i7972, 'material')
  return i7972
}

Deserializers["SoapPourControler"] = function (request, data, root) {
  var i7974 = root || request.c( 'SoapPourControler' )
  var i7975 = data
  i7974.OnProgressComplete = request.d('UnityEngine.Events.UnityEvent', i7975[0], i7974.OnProgressComplete)
  i7974.OnStepComplete = request.d('UnityEngine.Events.UnityEvent', i7975[1], i7974.OnStepComplete)
  request.r(i7975[2], i7975[3], 0, i7974, 'sfxDrop')
  i7974.isInsideTarget = !!i7975[4]
  i7974.isPicked = !!i7975[5]
  request.r(i7975[6], i7975[7], 0, i7974, 'thisTool')
  request.r(i7975[8], i7975[9], 0, i7974, 'targetCol')
  request.r(i7975[10], i7975[11], 0, i7974, 'soapDropPrefab')
  request.r(i7975[12], i7975[13], 0, i7974, 'spawnPoint')
  i7974.spawnInterval = i7975[14]
  i7974.maxDrops = i7975[15]
  request.r(i7975[16], i7975[17], 0, i7974, 'bottleRenderer')
  request.r(i7975[18], i7975[19], 0, i7974, 'fullBottleSprite')
  request.r(i7975[20], i7975[21], 0, i7974, 'halfBottleSprite')
  request.r(i7975[22], i7975[23], 0, i7974, 'emptyBottleSprite')
  request.r(i7975[24], i7975[25], 0, i7974, 'foamRend')
  return i7974
}

Deserializers["_2dxFX_Wave"] = function (request, data, root) {
  var i7976 = root || request.c( '_2dxFX_Wave' )
  var i7977 = data
  request.r(i7977[0], i7977[1], 0, i7976, 'ForceMaterial')
  i7976.ActiveChange = !!i7977[2]
  i7976._Alpha = i7977[3]
  i7976._OffsetX = i7977[4]
  i7976._OffsetY = i7977[5]
  i7976._DistanceX = i7977[6]
  i7976._DistanceY = i7977[7]
  i7976._WaveTimeX = i7977[8]
  i7976._WaveTimeY = i7977[9]
  i7976.AutoPlayWaveX = !!i7977[10]
  i7976.AutoPlaySpeedX = i7977[11]
  i7976.AutoPlayWaveY = !!i7977[12]
  i7976.AutoPlaySpeedY = i7977[13]
  i7976.AutoRandom = !!i7977[14]
  i7976.AutoRandomRange = i7977[15]
  i7976.ShaderChange = i7977[16]
  return i7976
}

Deserializers["InteractableBones"] = function (request, data, root) {
  var i7978 = root || request.c( 'InteractableBones' )
  var i7979 = data
  request.r(i7979[0], i7979[1], 0, i7978, 'Tip')
  i7978.MoveAmount = i7979[2]
  i7978.MoveSpeed = i7979[3]
  i7978.ShakeSpeed = i7979[4]
  i7978.MovementThreshold = i7979[5]
  i7978.MoveX = !!i7979[6]
  i7978.MoveY = !!i7979[7]
  return i7978
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i7980 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i7981 = data
  request.r(i7981[0], i7981[1], 0, i7980, 'clip')
  request.r(i7981[2], i7981[3], 0, i7980, 'outputAudioMixerGroup')
  i7980.playOnAwake = !!i7981[4]
  i7980.loop = !!i7981[5]
  i7980.time = i7981[6]
  i7980.volume = i7981[7]
  i7980.pitch = i7981[8]
  i7980.enabled = !!i7981[9]
  return i7980
}

Deserializers["BD_AnimatorDrag"] = function (request, data, root) {
  var i7982 = root || request.c( 'BD_AnimatorDrag' )
  var i7983 = data
  request.r(i7983[0], i7983[1], 0, i7982, 'BD')
  request.r(i7983[2], i7983[3], 0, i7982, 'anim')
  request.r(i7983[4], i7983[5], 0, i7982, 'Source')
  i7982.Vibration = !!i7983[6]
  i7982.isCompletable = !!i7983[7]
  i7982.completionThreshold = i7983[8]
  i7982.OnComplete = request.d('UnityEngine.Events.UnityEvent', i7983[9], i7982.OnComplete)
  return i7982
}

Deserializers["TapandHold_Simple"] = function (request, data, root) {
  var i7984 = root || request.c( 'TapandHold_Simple' )
  var i7985 = data
  request.r(i7985[0], i7985[1], 0, i7984, 'actionSfx')
  i7984.holdDuration = i7985[2]
  i7984.dragThreshold = i7985[3]
  i7984.fadeInOnHold = !!i7985[4]
  i7984.fadeOutOnRelease = !!i7985[5]
  request.r(i7985[6], i7985[7], 0, i7984, 'targetSprite')
  i7984.onHoldComplete = request.d('UnityEngine.Events.UnityEvent', i7985[8], i7984.onHoldComplete)
  i7984.currentProgress = i7985[9]
  i7984.isHolding = !!i7985[10]
  i7984.isCompleted = !!i7985[11]
  request.r(i7985[12], i7985[13], 0, i7984, 'thisTool')
  return i7984
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh"] = function (request, data, root) {
  var i7986 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh' )
  var i7987 = data
  i7986.name = i7987[0]
  i7986.halfPrecision = !!i7987[1]
  i7986.useSimplification = !!i7987[2]
  i7986.useUInt32IndexFormat = !!i7987[3]
  i7986.vertexCount = i7987[4]
  i7986.aabb = i7987[5]
  var i7989 = i7987[6]
  var i7988 = []
  for(var i = 0; i < i7989.length; i += 1) {
    i7988.push( !!i7989[i + 0] );
  }
  i7986.streams = i7988
  i7986.vertices = i7987[7]
  var i7991 = i7987[8]
  var i7990 = []
  for(var i = 0; i < i7991.length; i += 1) {
    i7990.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh', i7991[i + 0]) );
  }
  i7986.subMeshes = i7990
  var i7993 = i7987[9]
  var i7992 = []
  for(var i = 0; i < i7993.length; i += 16) {
    i7992.push( new pc.Mat4().setData(i7993[i + 0], i7993[i + 1], i7993[i + 2], i7993[i + 3],  i7993[i + 4], i7993[i + 5], i7993[i + 6], i7993[i + 7],  i7993[i + 8], i7993[i + 9], i7993[i + 10], i7993[i + 11],  i7993[i + 12], i7993[i + 13], i7993[i + 14], i7993[i + 15]) );
  }
  i7986.bindposes = i7992
  var i7995 = i7987[10]
  var i7994 = []
  for(var i = 0; i < i7995.length; i += 1) {
    i7994.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape', i7995[i + 0]) );
  }
  i7986.blendShapes = i7994
  return i7986
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh"] = function (request, data, root) {
  var i8000 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh' )
  var i8001 = data
  i8000.triangles = i8001[0]
  return i8000
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape"] = function (request, data, root) {
  var i8006 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape' )
  var i8007 = data
  i8006.name = i8007[0]
  var i8009 = i8007[1]
  var i8008 = []
  for(var i = 0; i < i8009.length; i += 1) {
    i8008.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame', i8009[i + 0]) );
  }
  i8006.frames = i8008
  return i8006
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Cubemap"] = function (request, data, root) {
  var i8010 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Cubemap' )
  var i8011 = data
  i8010.name = i8011[0]
  i8010.atlasId = i8011[1]
  i8010.mipmapCount = i8011[2]
  i8010.hdr = !!i8011[3]
  i8010.size = i8011[4]
  i8010.anisoLevel = i8011[5]
  i8010.filterMode = i8011[6]
  var i8013 = i8011[7]
  var i8012 = []
  for(var i = 0; i < i8013.length; i += 4) {
    i8012.push( UnityEngine.Rect.MinMaxRect(i8013[i + 0], i8013[i + 1], i8013[i + 2], i8013[i + 3]) );
  }
  i8010.rects = i8012
  i8010.wrapU = i8011[8]
  i8010.wrapV = i8011[9]
  return i8010
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i8016 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i8017 = data
  i8016.name = i8017[0]
  i8016.index = i8017[1]
  i8016.startup = !!i8017[2]
  return i8016
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i8018 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i8019 = data
  i8018.aspect = i8019[0]
  i8018.orthographic = !!i8019[1]
  i8018.orthographicSize = i8019[2]
  i8018.backgroundColor = new pc.Color(i8019[3], i8019[4], i8019[5], i8019[6])
  i8018.nearClipPlane = i8019[7]
  i8018.farClipPlane = i8019[8]
  i8018.fieldOfView = i8019[9]
  i8018.depth = i8019[10]
  i8018.clearFlags = i8019[11]
  i8018.cullingMask = i8019[12]
  i8018.rect = i8019[13]
  request.r(i8019[14], i8019[15], 0, i8018, 'targetTexture')
  i8018.usePhysicalProperties = !!i8019[16]
  i8018.focalLength = i8019[17]
  i8018.sensorSize = new pc.Vec2( i8019[18], i8019[19] )
  i8018.lensShift = new pc.Vec2( i8019[20], i8019[21] )
  i8018.gateFit = i8019[22]
  i8018.commandBufferCount = i8019[23]
  i8018.cameraType = i8019[24]
  i8018.enabled = !!i8019[25]
  return i8018
}

Deserializers["CameraController"] = function (request, data, root) {
  var i8020 = root || request.c( 'CameraController' )
  var i8021 = data
  request.r(i8021[0], i8021[1], 0, i8020, 'cam')
  i8020.defaultPosition = new pc.Vec3( i8021[2], i8021[3], i8021[4] )
  i8020.defaultSize = i8021[5]
  i8020.defaultFOV = i8021[6]
  i8020.defaultDuration = i8021[7]
  i8020.defaultEase = i8021[8]
  return i8020
}

Deserializers["MusicSource"] = function (request, data, root) {
  var i8022 = root || request.c( 'MusicSource' )
  var i8023 = data
  request.r(i8023[0], i8023[1], 0, i8022, 'source')
  return i8022
}

Deserializers["UI_Manager"] = function (request, data, root) {
  var i8024 = root || request.c( 'UI_Manager' )
  var i8025 = data
  i8024.levelCompleted = !!i8025[0]
  i8024.isPauseActive = !!i8025[1]
  i8024.loadIndex = i8025[2]
  request.r(i8025[3], i8025[4], 0, i8024, 'removeAdsButton')
  request.r(i8025[5], i8025[6], 0, i8024, 'pauseButton')
  request.r(i8025[7], i8025[8], 0, i8024, 'Fade_Img')
  request.r(i8025[9], i8025[10], 0, i8024, 'TopBarAnim')
  request.r(i8025[11], i8025[12], 0, i8024, 'MainPanel')
  request.r(i8025[13], i8025[14], 0, i8024, 'PausePanel')
  request.r(i8025[15], i8025[16], 0, i8024, 'PausePopUp')
  request.r(i8025[17], i8025[18], 0, i8024, 'PauseCanvasGroup')
  request.r(i8025[19], i8025[20], 0, i8024, 'RateUsPanel')
  request.r(i8025[21], i8025[22], 0, i8024, 'RateUsPopUp')
  request.r(i8025[23], i8025[24], 0, i8024, 'RemoveAdsPanel')
  request.r(i8025[25], i8025[26], 0, i8024, 'RemoveAdsPopUp')
  request.r(i8025[27], i8025[28], 0, i8024, 'RemoveAdsCanvasGroup')
  var i8027 = i8025[29]
  var i8026 = []
  for(var i = 0; i < i8027.length; i += 2) {
  request.r(i8027[i + 0], i8027[i + 1], 2, i8026, '')
  }
  i8024.RemoveAdsAnims = i8026
  request.r(i8025[30], i8025[31], 0, i8024, 'CompletePanel')
  request.r(i8025[32], i8025[33], 0, i8024, 'LevelIcon')
  request.r(i8025[34], i8025[35], 0, i8024, 'CompleteParticles')
  request.r(i8025[36], i8025[37], 0, i8024, 'progressBar')
  request.r(i8025[38], i8025[39], 0, i8024, 'progressText')
  request.r(i8025[40], i8025[41], 0, i8024, 'toolIcon1')
  request.r(i8025[42], i8025[43], 0, i8024, 'toolIcon2')
  request.r(i8025[44], i8025[45], 0, i8024, 'toolIcon3')
  request.r(i8025[46], i8025[47], 0, i8024, 'target1')
  request.r(i8025[48], i8025[49], 0, i8024, 'target2')
  i8024.toolMoveDuration = i8025[50]
  i8024.currentIndex = i8025[51]
  var i8029 = i8025[52]
  var i8028 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Sprite')))
  for(var i = 0; i < i8029.length; i += 2) {
  request.r(i8029[i + 0], i8029[i + 1], 1, i8028, '')
  }
  i8024.allTools = i8028
  request.r(i8025[53], i8025[54], 0, i8024, 'clockProgress')
  request.r(i8025[55], i8025[56], 0, i8024, 'clockProgressFill')
  request.r(i8025[57], i8025[58], 0, i8024, 'clockAudio')
  i8024.moveDistance = i8025[59]
  i8024.animationDuration = i8025[60]
  i8024.greyBgChildName = i8025[61]
  i8024.pushOffset = i8025[62]
  return i8024
}

Deserializers["GameManagerPlayable"] = function (request, data, root) {
  var i8032 = root || request.c( 'GameManagerPlayable' )
  var i8033 = data
  request.r(i8033[0], i8033[1], 0, i8032, 'DefaultMat')
  request.r(i8033[2], i8033[3], 0, i8032, 'BG_Music')
  request.r(i8033[4], i8033[5], 0, i8032, 'restoreEffectShader')
  request.r(i8033[6], i8033[7], 0, i8032, 'stickerEffectShader')
  i8032.isComplete = !!i8033[8]
  i8032.isPaused = !!i8033[9]
  request.r(i8033[10], i8033[11], 0, i8032, 'currentLevel')
  return i8032
}

Deserializers["AudioController"] = function (request, data, root) {
  var i8034 = root || request.c( 'AudioController' )
  var i8035 = data
  request.r(i8035[0], i8035[1], 0, i8034, 'MainMixer')
  request.r(i8035[2], i8035[3], 0, i8034, 'UiClick')
  request.r(i8035[4], i8035[5], 0, i8034, 'UiClickSource')
  var i8037 = i8035[6]
  var i8036 = []
  for(var i = 0; i < i8037.length; i += 2) {
  request.r(i8037[i + 0], i8037[i + 1], 2, i8036, '')
  }
  i8034.SfxSources = i8036
  var i8039 = i8035[7]
  var i8038 = []
  for(var i = 0; i < i8039.length; i += 2) {
  request.r(i8039[i + 0], i8039[i + 1], 2, i8038, '')
  }
  i8034.AllClips = i8038
  return i8034
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i8042 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i8043 = data
  i8042.pivot = new pc.Vec2( i8043[0], i8043[1] )
  i8042.anchorMin = new pc.Vec2( i8043[2], i8043[3] )
  i8042.anchorMax = new pc.Vec2( i8043[4], i8043[5] )
  i8042.sizeDelta = new pc.Vec2( i8043[6], i8043[7] )
  i8042.anchoredPosition3D = new pc.Vec3( i8043[8], i8043[9], i8043[10] )
  i8042.rotation = new pc.Quat(i8043[11], i8043[12], i8043[13], i8043[14])
  i8042.scale = new pc.Vec3( i8043[15], i8043[16], i8043[17] )
  return i8042
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i8044 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i8045 = data
  i8044.planeDistance = i8045[0]
  i8044.referencePixelsPerUnit = i8045[1]
  i8044.isFallbackOverlay = !!i8045[2]
  i8044.renderMode = i8045[3]
  i8044.renderOrder = i8045[4]
  i8044.sortingLayerName = i8045[5]
  i8044.sortingOrder = i8045[6]
  i8044.scaleFactor = i8045[7]
  request.r(i8045[8], i8045[9], 0, i8044, 'worldCamera')
  i8044.overrideSorting = !!i8045[10]
  i8044.pixelPerfect = !!i8045[11]
  i8044.targetDisplay = i8045[12]
  i8044.overridePixelPerfect = !!i8045[13]
  i8044.enabled = !!i8045[14]
  return i8044
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i8046 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i8047 = data
  i8046.m_UiScaleMode = i8047[0]
  i8046.m_ReferencePixelsPerUnit = i8047[1]
  i8046.m_ScaleFactor = i8047[2]
  i8046.m_ReferenceResolution = new pc.Vec2( i8047[3], i8047[4] )
  i8046.m_ScreenMatchMode = i8047[5]
  i8046.m_MatchWidthOrHeight = i8047[6]
  i8046.m_PhysicalUnit = i8047[7]
  i8046.m_FallbackScreenDPI = i8047[8]
  i8046.m_DefaultSpriteDPI = i8047[9]
  i8046.m_DynamicPixelsPerUnit = i8047[10]
  i8046.m_PresetInfoIsWorld = !!i8047[11]
  return i8046
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i8048 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i8049 = data
  i8048.m_IgnoreReversedGraphics = !!i8049[0]
  i8048.m_BlockingObjects = i8049[1]
  i8048.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i8049[2] )
  return i8048
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i8050 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i8051 = data
  i8050.cullTransparentMesh = !!i8051[0]
  return i8050
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i8052 = root || request.c( 'UnityEngine.UI.Image' )
  var i8053 = data
  request.r(i8053[0], i8053[1], 0, i8052, 'm_Sprite')
  i8052.m_Type = i8053[2]
  i8052.m_PreserveAspect = !!i8053[3]
  i8052.m_FillCenter = !!i8053[4]
  i8052.m_FillMethod = i8053[5]
  i8052.m_FillAmount = i8053[6]
  i8052.m_FillClockwise = !!i8053[7]
  i8052.m_FillOrigin = i8053[8]
  i8052.m_UseSpriteMesh = !!i8053[9]
  i8052.m_PixelsPerUnitMultiplier = i8053[10]
  request.r(i8053[11], i8053[12], 0, i8052, 'm_Material')
  i8052.m_Maskable = !!i8053[13]
  i8052.m_Color = new pc.Color(i8053[14], i8053[15], i8053[16], i8053[17])
  i8052.m_RaycastTarget = !!i8053[18]
  i8052.m_RaycastPadding = new pc.Vec4( i8053[19], i8053[20], i8053[21], i8053[22] )
  return i8052
}

Deserializers["UnityEngine.UI.Text"] = function (request, data, root) {
  var i8054 = root || request.c( 'UnityEngine.UI.Text' )
  var i8055 = data
  i8054.m_FontData = request.d('UnityEngine.UI.FontData', i8055[0], i8054.m_FontData)
  i8054.m_Text = i8055[1]
  request.r(i8055[2], i8055[3], 0, i8054, 'm_Material')
  i8054.m_Maskable = !!i8055[4]
  i8054.m_Color = new pc.Color(i8055[5], i8055[6], i8055[7], i8055[8])
  i8054.m_RaycastTarget = !!i8055[9]
  i8054.m_RaycastPadding = new pc.Vec4( i8055[10], i8055[11], i8055[12], i8055[13] )
  return i8054
}

Deserializers["UnityEngine.UI.FontData"] = function (request, data, root) {
  var i8056 = root || request.c( 'UnityEngine.UI.FontData' )
  var i8057 = data
  request.r(i8057[0], i8057[1], 0, i8056, 'm_Font')
  i8056.m_FontSize = i8057[2]
  i8056.m_FontStyle = i8057[3]
  i8056.m_BestFit = !!i8057[4]
  i8056.m_MinSize = i8057[5]
  i8056.m_MaxSize = i8057[6]
  i8056.m_Alignment = i8057[7]
  i8056.m_AlignByGeometry = !!i8057[8]
  i8056.m_RichText = !!i8057[9]
  i8056.m_HorizontalOverflow = i8057[10]
  i8056.m_VerticalOverflow = i8057[11]
  i8056.m_LineSpacing = i8057[12]
  return i8056
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i8058 = root || request.c( 'UnityEngine.UI.Button' )
  var i8059 = data
  i8058.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i8059[0], i8058.m_OnClick)
  i8058.m_Navigation = request.d('UnityEngine.UI.Navigation', i8059[1], i8058.m_Navigation)
  i8058.m_Transition = i8059[2]
  i8058.m_Colors = request.d('UnityEngine.UI.ColorBlock', i8059[3], i8058.m_Colors)
  i8058.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i8059[4], i8058.m_SpriteState)
  i8058.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i8059[5], i8058.m_AnimationTriggers)
  i8058.m_Interactable = !!i8059[6]
  request.r(i8059[7], i8059[8], 0, i8058, 'm_TargetGraphic')
  return i8058
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i8060 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i8061 = data
  i8060.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i8061[0], i8060.m_PersistentCalls)
  return i8060
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i8062 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i8063 = data
  i8062.m_Mode = i8063[0]
  i8062.m_WrapAround = !!i8063[1]
  request.r(i8063[2], i8063[3], 0, i8062, 'm_SelectOnUp')
  request.r(i8063[4], i8063[5], 0, i8062, 'm_SelectOnDown')
  request.r(i8063[6], i8063[7], 0, i8062, 'm_SelectOnLeft')
  request.r(i8063[8], i8063[9], 0, i8062, 'm_SelectOnRight')
  return i8062
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i8064 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i8065 = data
  i8064.m_NormalColor = new pc.Color(i8065[0], i8065[1], i8065[2], i8065[3])
  i8064.m_HighlightedColor = new pc.Color(i8065[4], i8065[5], i8065[6], i8065[7])
  i8064.m_PressedColor = new pc.Color(i8065[8], i8065[9], i8065[10], i8065[11])
  i8064.m_SelectedColor = new pc.Color(i8065[12], i8065[13], i8065[14], i8065[15])
  i8064.m_DisabledColor = new pc.Color(i8065[16], i8065[17], i8065[18], i8065[19])
  i8064.m_ColorMultiplier = i8065[20]
  i8064.m_FadeDuration = i8065[21]
  return i8064
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i8066 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i8067 = data
  request.r(i8067[0], i8067[1], 0, i8066, 'm_HighlightedSprite')
  request.r(i8067[2], i8067[3], 0, i8066, 'm_PressedSprite')
  request.r(i8067[4], i8067[5], 0, i8066, 'm_SelectedSprite')
  request.r(i8067[6], i8067[7], 0, i8066, 'm_DisabledSprite')
  return i8066
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i8068 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i8069 = data
  i8068.m_NormalTrigger = i8069[0]
  i8068.m_HighlightedTrigger = i8069[1]
  i8068.m_PressedTrigger = i8069[2]
  i8068.m_SelectedTrigger = i8069[3]
  i8068.m_DisabledTrigger = i8069[4]
  return i8068
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i8070 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i8071 = data
  request.r(i8071[0], i8071[1], 0, i8070, 'm_FirstSelected')
  i8070.m_sendNavigationEvents = !!i8071[2]
  i8070.m_DragThreshold = i8071[3]
  return i8070
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i8072 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i8073 = data
  i8072.m_HorizontalAxis = i8073[0]
  i8072.m_VerticalAxis = i8073[1]
  i8072.m_SubmitButton = i8073[2]
  i8072.m_CancelButton = i8073[3]
  i8072.m_InputActionsPerSecond = i8073[4]
  i8072.m_RepeatDelay = i8073[5]
  i8072.m_ForceModuleActive = !!i8073[6]
  i8072.m_SendPointerHoverToParent = !!i8073[7]
  return i8072
}

Deserializers["PlayableHudRuntime"] = function (request, data, root) {
  var i8074 = root || request.c( 'PlayableHudRuntime' )
  var i8075 = data
  return i8074
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i8076 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i8077 = data
  i8076.ambientIntensity = i8077[0]
  i8076.reflectionIntensity = i8077[1]
  i8076.ambientMode = i8077[2]
  i8076.ambientLight = new pc.Color(i8077[3], i8077[4], i8077[5], i8077[6])
  i8076.ambientSkyColor = new pc.Color(i8077[7], i8077[8], i8077[9], i8077[10])
  i8076.ambientGroundColor = new pc.Color(i8077[11], i8077[12], i8077[13], i8077[14])
  i8076.ambientEquatorColor = new pc.Color(i8077[15], i8077[16], i8077[17], i8077[18])
  i8076.fogColor = new pc.Color(i8077[19], i8077[20], i8077[21], i8077[22])
  i8076.fogEndDistance = i8077[23]
  i8076.fogStartDistance = i8077[24]
  i8076.fogDensity = i8077[25]
  i8076.fog = !!i8077[26]
  request.r(i8077[27], i8077[28], 0, i8076, 'skybox')
  i8076.fogMode = i8077[29]
  var i8079 = i8077[30]
  var i8078 = []
  for(var i = 0; i < i8079.length; i += 1) {
    i8078.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i8079[i + 0]) );
  }
  i8076.lightmaps = i8078
  i8076.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i8077[31], i8076.lightProbes)
  i8076.lightmapsMode = i8077[32]
  i8076.mixedBakeMode = i8077[33]
  i8076.environmentLightingMode = i8077[34]
  i8076.ambientProbe = new pc.SphericalHarmonicsL2(i8077[35])
  request.r(i8077[36], i8077[37], 0, i8076, 'customReflection')
  request.r(i8077[38], i8077[39], 0, i8076, 'defaultReflection')
  i8076.defaultReflectionMode = i8077[40]
  i8076.defaultReflectionResolution = i8077[41]
  i8076.sunLightObjectId = i8077[42]
  i8076.pixelLightCount = i8077[43]
  i8076.defaultReflectionHDR = !!i8077[44]
  i8076.hasLightDataAsset = !!i8077[45]
  i8076.hasManualGenerate = !!i8077[46]
  return i8076
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i8082 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i8083 = data
  request.r(i8083[0], i8083[1], 0, i8082, 'lightmapColor')
  request.r(i8083[2], i8083[3], 0, i8082, 'lightmapDirection')
  request.r(i8083[4], i8083[5], 0, i8082, 'shadowMask')
  return i8082
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i8084 = root || new UnityEngine.LightProbes()
  var i8085 = data
  return i8084
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i8090 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i8091 = data
  var i8093 = i8091[0]
  var i8092 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i8093.length; i += 1) {
    i8092.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i8093[i + 0]));
  }
  i8090.ShaderCompilationErrors = i8092
  i8090.name = i8091[1]
  i8090.guid = i8091[2]
  var i8095 = i8091[3]
  var i8094 = []
  for(var i = 0; i < i8095.length; i += 1) {
    i8094.push( i8095[i + 0] );
  }
  i8090.shaderDefinedKeywords = i8094
  var i8097 = i8091[4]
  var i8096 = []
  for(var i = 0; i < i8097.length; i += 1) {
    i8096.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i8097[i + 0]) );
  }
  i8090.passes = i8096
  var i8099 = i8091[5]
  var i8098 = []
  for(var i = 0; i < i8099.length; i += 1) {
    i8098.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i8099[i + 0]) );
  }
  i8090.usePasses = i8098
  var i8101 = i8091[6]
  var i8100 = []
  for(var i = 0; i < i8101.length; i += 1) {
    i8100.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i8101[i + 0]) );
  }
  i8090.defaultParameterValues = i8100
  request.r(i8091[7], i8091[8], 0, i8090, 'unityFallbackShader')
  i8090.readDepth = !!i8091[9]
  i8090.hasDepthOnlyPass = !!i8091[10]
  i8090.isCreatedByShaderGraph = !!i8091[11]
  i8090.disableBatching = !!i8091[12]
  i8090.compiled = !!i8091[13]
  return i8090
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i8104 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i8105 = data
  i8104.shaderName = i8105[0]
  i8104.errorMessage = i8105[1]
  return i8104
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i8110 = root || new pc.UnityShaderPass()
  var i8111 = data
  i8110.id = i8111[0]
  i8110.subShaderIndex = i8111[1]
  i8110.name = i8111[2]
  i8110.passType = i8111[3]
  i8110.grabPassTextureName = i8111[4]
  i8110.usePass = !!i8111[5]
  i8110.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i8111[6], i8110.zTest)
  i8110.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i8111[7], i8110.zWrite)
  i8110.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i8111[8], i8110.culling)
  i8110.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i8111[9], i8110.blending)
  i8110.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i8111[10], i8110.alphaBlending)
  i8110.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i8111[11], i8110.colorWriteMask)
  i8110.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i8111[12], i8110.offsetUnits)
  i8110.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i8111[13], i8110.offsetFactor)
  i8110.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i8111[14], i8110.stencilRef)
  i8110.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i8111[15], i8110.stencilReadMask)
  i8110.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i8111[16], i8110.stencilWriteMask)
  i8110.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i8111[17], i8110.stencilOp)
  i8110.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i8111[18], i8110.stencilOpFront)
  i8110.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i8111[19], i8110.stencilOpBack)
  var i8113 = i8111[20]
  var i8112 = []
  for(var i = 0; i < i8113.length; i += 1) {
    i8112.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i8113[i + 0]) );
  }
  i8110.tags = i8112
  var i8115 = i8111[21]
  var i8114 = []
  for(var i = 0; i < i8115.length; i += 1) {
    i8114.push( i8115[i + 0] );
  }
  i8110.passDefinedKeywords = i8114
  var i8117 = i8111[22]
  var i8116 = []
  for(var i = 0; i < i8117.length; i += 1) {
    i8116.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i8117[i + 0]) );
  }
  i8110.passDefinedKeywordGroups = i8116
  var i8119 = i8111[23]
  var i8118 = []
  for(var i = 0; i < i8119.length; i += 1) {
    i8118.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i8119[i + 0]) );
  }
  i8110.variants = i8118
  var i8121 = i8111[24]
  var i8120 = []
  for(var i = 0; i < i8121.length; i += 1) {
    i8120.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i8121[i + 0]) );
  }
  i8110.excludedVariants = i8120
  i8110.hasDepthReader = !!i8111[25]
  return i8110
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i8122 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i8123 = data
  i8122.val = i8123[0]
  i8122.name = i8123[1]
  return i8122
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i8124 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i8125 = data
  i8124.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i8125[0], i8124.src)
  i8124.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i8125[1], i8124.dst)
  i8124.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i8125[2], i8124.op)
  return i8124
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i8126 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i8127 = data
  i8126.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i8127[0], i8126.pass)
  i8126.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i8127[1], i8126.fail)
  i8126.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i8127[2], i8126.zFail)
  i8126.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i8127[3], i8126.comp)
  return i8126
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i8130 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i8131 = data
  i8130.name = i8131[0]
  i8130.value = i8131[1]
  return i8130
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i8134 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i8135 = data
  var i8137 = i8135[0]
  var i8136 = []
  for(var i = 0; i < i8137.length; i += 1) {
    i8136.push( i8137[i + 0] );
  }
  i8134.keywords = i8136
  i8134.hasDiscard = !!i8135[1]
  return i8134
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i8140 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i8141 = data
  i8140.passId = i8141[0]
  i8140.subShaderIndex = i8141[1]
  var i8143 = i8141[2]
  var i8142 = []
  for(var i = 0; i < i8143.length; i += 1) {
    i8142.push( i8143[i + 0] );
  }
  i8140.keywords = i8142
  i8140.vertexProgram = i8141[3]
  i8140.fragmentProgram = i8141[4]
  i8140.exportedForWebGl2 = !!i8141[5]
  i8140.readDepth = !!i8141[6]
  return i8140
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i8146 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i8147 = data
  request.r(i8147[0], i8147[1], 0, i8146, 'shader')
  i8146.pass = i8147[2]
  return i8146
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i8150 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i8151 = data
  i8150.name = i8151[0]
  i8150.type = i8151[1]
  i8150.value = new pc.Vec4( i8151[2], i8151[3], i8151[4], i8151[5] )
  i8150.textureValue = i8151[6]
  i8150.shaderPropertyFlag = i8151[7]
  return i8150
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i8152 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i8153 = data
  i8152.name = i8153[0]
  request.r(i8153[1], i8153[2], 0, i8152, 'texture')
  i8152.aabb = i8153[3]
  i8152.vertices = i8153[4]
  i8152.triangles = i8153[5]
  i8152.textureRect = UnityEngine.Rect.MinMaxRect(i8153[6], i8153[7], i8153[8], i8153[9])
  i8152.packedRect = UnityEngine.Rect.MinMaxRect(i8153[10], i8153[11], i8153[12], i8153[13])
  i8152.border = new pc.Vec4( i8153[14], i8153[15], i8153[16], i8153[17] )
  i8152.transparency = i8153[18]
  i8152.bounds = i8153[19]
  i8152.pixelsPerUnit = i8153[20]
  i8152.textureWidth = i8153[21]
  i8152.textureHeight = i8153[22]
  i8152.nativeSize = new pc.Vec2( i8153[23], i8153[24] )
  i8152.pivot = new pc.Vec2( i8153[25], i8153[26] )
  i8152.textureRectOffset = new pc.Vec2( i8153[27], i8153[28] )
  return i8152
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i8154 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i8155 = data
  i8154.name = i8155[0]
  return i8154
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip"] = function (request, data, root) {
  var i8156 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip' )
  var i8157 = data
  i8156.name = i8157[0]
  i8156.wrapMode = i8157[1]
  i8156.isLooping = !!i8157[2]
  i8156.length = i8157[3]
  var i8159 = i8157[4]
  var i8158 = []
  for(var i = 0; i < i8159.length; i += 1) {
    i8158.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve', i8159[i + 0]) );
  }
  i8156.curves = i8158
  var i8161 = i8157[5]
  var i8160 = []
  for(var i = 0; i < i8161.length; i += 1) {
    i8160.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent', i8161[i + 0]) );
  }
  i8156.events = i8160
  i8156.halfPrecision = !!i8157[6]
  i8156._frameRate = i8157[7]
  i8156.localBounds = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds', i8157[8], i8156.localBounds)
  i8156.hasMuscleCurves = !!i8157[9]
  var i8163 = i8157[10]
  var i8162 = []
  for(var i = 0; i < i8163.length; i += 1) {
    i8162.push( i8163[i + 0] );
  }
  i8156.clipMuscleConstant = i8162
  i8156.clipBindingConstant = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant', i8157[11], i8156.clipBindingConstant)
  return i8156
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve"] = function (request, data, root) {
  var i8166 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve' )
  var i8167 = data
  i8166.path = i8167[0]
  i8166.hash = i8167[1]
  i8166.componentType = i8167[2]
  i8166.property = i8167[3]
  i8166.keys = i8167[4]
  var i8169 = i8167[5]
  var i8168 = []
  for(var i = 0; i < i8169.length; i += 1) {
    i8168.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey', i8169[i + 0]) );
  }
  i8166.objectReferenceKeys = i8168
  return i8166
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey"] = function (request, data, root) {
  var i8172 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey' )
  var i8173 = data
  i8172.time = i8173[0]
  request.r(i8173[1], i8173[2], 0, i8172, 'value')
  return i8172
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent"] = function (request, data, root) {
  var i8176 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent' )
  var i8177 = data
  i8176.functionName = i8177[0]
  i8176.floatParameter = i8177[1]
  i8176.intParameter = i8177[2]
  i8176.stringParameter = i8177[3]
  request.r(i8177[4], i8177[5], 0, i8176, 'objectReferenceParameter')
  i8176.time = i8177[6]
  return i8176
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds"] = function (request, data, root) {
  var i8178 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds' )
  var i8179 = data
  i8178.center = new pc.Vec3( i8179[0], i8179[1], i8179[2] )
  i8178.extends = new pc.Vec3( i8179[3], i8179[4], i8179[5] )
  return i8178
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant"] = function (request, data, root) {
  var i8182 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant' )
  var i8183 = data
  var i8185 = i8183[0]
  var i8184 = []
  for(var i = 0; i < i8185.length; i += 1) {
    i8184.push( i8185[i + 0] );
  }
  i8182.genericBindings = i8184
  var i8187 = i8183[1]
  var i8186 = []
  for(var i = 0; i < i8187.length; i += 1) {
    i8186.push( i8187[i + 0] );
  }
  i8182.pptrCurveMapping = i8186
  return i8182
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i8188 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i8189 = data
  i8188.name = i8189[0]
  i8188.ascent = i8189[1]
  i8188.originalLineHeight = i8189[2]
  i8188.fontSize = i8189[3]
  var i8191 = i8189[4]
  var i8190 = []
  for(var i = 0; i < i8191.length; i += 1) {
    i8190.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i8191[i + 0]) );
  }
  i8188.characterInfo = i8190
  request.r(i8189[5], i8189[6], 0, i8188, 'texture')
  i8188.originalFontSize = i8189[7]
  return i8188
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i8194 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i8195 = data
  i8194.index = i8195[0]
  i8194.advance = i8195[1]
  i8194.bearing = i8195[2]
  i8194.glyphWidth = i8195[3]
  i8194.glyphHeight = i8195[4]
  i8194.minX = i8195[5]
  i8194.maxX = i8195[6]
  i8194.minY = i8195[7]
  i8194.maxY = i8195[8]
  i8194.uvBottomLeftX = i8195[9]
  i8194.uvBottomLeftY = i8195[10]
  i8194.uvBottomRightX = i8195[11]
  i8194.uvBottomRightY = i8195[12]
  i8194.uvTopLeftX = i8195[13]
  i8194.uvTopLeftY = i8195[14]
  i8194.uvTopRightX = i8195[15]
  i8194.uvTopRightY = i8195[16]
  return i8194
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController"] = function (request, data, root) {
  var i8196 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController' )
  var i8197 = data
  i8196.name = i8197[0]
  var i8199 = i8197[1]
  var i8198 = []
  for(var i = 0; i < i8199.length; i += 1) {
    i8198.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer', i8199[i + 0]) );
  }
  i8196.layers = i8198
  var i8201 = i8197[2]
  var i8200 = []
  for(var i = 0; i < i8201.length; i += 1) {
    i8200.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter', i8201[i + 0]) );
  }
  i8196.parameters = i8200
  i8196.animationClips = i8197[3]
  i8196.avatarUnsupported = i8197[4]
  return i8196
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer"] = function (request, data, root) {
  var i8204 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer' )
  var i8205 = data
  i8204.name = i8205[0]
  i8204.defaultWeight = i8205[1]
  i8204.blendingMode = i8205[2]
  i8204.avatarMask = i8205[3]
  i8204.syncedLayerIndex = i8205[4]
  i8204.syncedLayerAffectsTiming = !!i8205[5]
  i8204.syncedLayers = i8205[6]
  i8204.stateMachine = request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i8205[7], i8204.stateMachine)
  return i8204
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine"] = function (request, data, root) {
  var i8206 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine' )
  var i8207 = data
  i8206.id = i8207[0]
  i8206.name = i8207[1]
  i8206.path = i8207[2]
  var i8209 = i8207[3]
  var i8208 = []
  for(var i = 0; i < i8209.length; i += 1) {
    i8208.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState', i8209[i + 0]) );
  }
  i8206.states = i8208
  var i8211 = i8207[4]
  var i8210 = []
  for(var i = 0; i < i8211.length; i += 1) {
    i8210.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i8211[i + 0]) );
  }
  i8206.machines = i8210
  var i8213 = i8207[5]
  var i8212 = []
  for(var i = 0; i < i8213.length; i += 1) {
    i8212.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i8213[i + 0]) );
  }
  i8206.entryStateTransitions = i8212
  var i8215 = i8207[6]
  var i8214 = []
  for(var i = 0; i < i8215.length; i += 1) {
    i8214.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i8215[i + 0]) );
  }
  i8206.exitStateTransitions = i8214
  var i8217 = i8207[7]
  var i8216 = []
  for(var i = 0; i < i8217.length; i += 1) {
    i8216.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i8217[i + 0]) );
  }
  i8206.anyStateTransitions = i8216
  i8206.defaultStateId = i8207[8]
  return i8206
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState"] = function (request, data, root) {
  var i8220 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState' )
  var i8221 = data
  i8220.id = i8221[0]
  i8220.name = i8221[1]
  i8220.cycleOffset = i8221[2]
  i8220.cycleOffsetParameter = i8221[3]
  i8220.cycleOffsetParameterActive = !!i8221[4]
  i8220.mirror = !!i8221[5]
  i8220.mirrorParameter = i8221[6]
  i8220.mirrorParameterActive = !!i8221[7]
  i8220.motionId = i8221[8]
  i8220.nameHash = i8221[9]
  i8220.fullPathHash = i8221[10]
  i8220.speed = i8221[11]
  i8220.speedParameter = i8221[12]
  i8220.speedParameterActive = !!i8221[13]
  i8220.tag = i8221[14]
  i8220.tagHash = i8221[15]
  i8220.writeDefaultValues = !!i8221[16]
  var i8223 = i8221[17]
  var i8222 = []
  for(var i = 0; i < i8223.length; i += 2) {
  request.r(i8223[i + 0], i8223[i + 1], 2, i8222, '')
  }
  i8220.behaviours = i8222
  var i8225 = i8221[18]
  var i8224 = []
  for(var i = 0; i < i8225.length; i += 1) {
    i8224.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i8225[i + 0]) );
  }
  i8220.transitions = i8224
  return i8220
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition"] = function (request, data, root) {
  var i8230 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition' )
  var i8231 = data
  i8230.fullPath = i8231[0]
  i8230.canTransitionToSelf = !!i8231[1]
  i8230.duration = i8231[2]
  i8230.exitTime = i8231[3]
  i8230.hasExitTime = !!i8231[4]
  i8230.hasFixedDuration = !!i8231[5]
  i8230.interruptionSource = i8231[6]
  i8230.offset = i8231[7]
  i8230.orderedInterruption = !!i8231[8]
  i8230.destinationStateId = i8231[9]
  i8230.isExit = !!i8231[10]
  i8230.mute = !!i8231[11]
  i8230.solo = !!i8231[12]
  var i8233 = i8231[13]
  var i8232 = []
  for(var i = 0; i < i8233.length; i += 1) {
    i8232.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i8233[i + 0]) );
  }
  i8230.conditions = i8232
  return i8230
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition"] = function (request, data, root) {
  var i8238 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition' )
  var i8239 = data
  i8238.destinationStateId = i8239[0]
  i8238.isExit = !!i8239[1]
  i8238.mute = !!i8239[2]
  i8238.solo = !!i8239[3]
  var i8241 = i8239[4]
  var i8240 = []
  for(var i = 0; i < i8241.length; i += 1) {
    i8240.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i8241[i + 0]) );
  }
  i8238.conditions = i8240
  return i8238
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition"] = function (request, data, root) {
  var i8244 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition' )
  var i8245 = data
  i8244.mode = i8245[0]
  i8244.parameter = i8245[1]
  i8244.threshold = i8245[2]
  return i8244
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter"] = function (request, data, root) {
  var i8248 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter' )
  var i8249 = data
  i8248.defaultBool = !!i8249[0]
  i8248.defaultFloat = i8249[1]
  i8248.defaultInt = i8249[2]
  i8248.name = i8249[3]
  i8248.nameHash = i8249[4]
  i8248.type = i8249[5]
  return i8248
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i8250 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i8251 = data
  i8250.useSafeMode = !!i8251[0]
  i8250.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i8251[1], i8250.safeModeOptions)
  i8250.timeScale = i8251[2]
  i8250.unscaledTimeScale = i8251[3]
  i8250.useSmoothDeltaTime = !!i8251[4]
  i8250.maxSmoothUnscaledTime = i8251[5]
  i8250.rewindCallbackMode = i8251[6]
  i8250.showUnityEditorReport = !!i8251[7]
  i8250.logBehaviour = i8251[8]
  i8250.drawGizmos = !!i8251[9]
  i8250.defaultRecyclable = !!i8251[10]
  i8250.defaultAutoPlay = i8251[11]
  i8250.defaultUpdateType = i8251[12]
  i8250.defaultTimeScaleIndependent = !!i8251[13]
  i8250.defaultEaseType = i8251[14]
  i8250.defaultEaseOvershootOrAmplitude = i8251[15]
  i8250.defaultEasePeriod = i8251[16]
  i8250.defaultAutoKill = !!i8251[17]
  i8250.defaultLoopType = i8251[18]
  i8250.debugMode = !!i8251[19]
  i8250.debugStoreTargetId = !!i8251[20]
  i8250.showPreviewPanel = !!i8251[21]
  i8250.storeSettingsLocation = i8251[22]
  i8250.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i8251[23], i8250.modules)
  i8250.createASMDEF = !!i8251[24]
  i8250.showPlayingTweens = !!i8251[25]
  i8250.showPausedTweens = !!i8251[26]
  return i8250
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i8252 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i8253 = data
  i8252.logBehaviour = i8253[0]
  i8252.nestedTweenFailureBehaviour = i8253[1]
  return i8252
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i8254 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i8255 = data
  i8254.showPanel = !!i8255[0]
  i8254.audioEnabled = !!i8255[1]
  i8254.physicsEnabled = !!i8255[2]
  i8254.physics2DEnabled = !!i8255[3]
  i8254.spriteEnabled = !!i8255[4]
  i8254.uiEnabled = !!i8255[5]
  i8254.textMeshProEnabled = !!i8255[6]
  i8254.tk2DEnabled = !!i8255[7]
  i8254.deAudioEnabled = !!i8255[8]
  i8254.deUnityExtendedEnabled = !!i8255[9]
  i8254.epoOutlineEnabled = !!i8255[10]
  return i8254
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i8256 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i8257 = data
  var i8259 = i8257[0]
  var i8258 = []
  for(var i = 0; i < i8259.length; i += 1) {
    i8258.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i8259[i + 0]) );
  }
  i8256.files = i8258
  i8256.componentToPrefabIds = i8257[1]
  return i8256
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i8262 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i8263 = data
  i8262.path = i8263[0]
  request.r(i8263[1], i8263[2], 0, i8262, 'unityObject')
  return i8262
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i8264 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i8265 = data
  var i8267 = i8265[0]
  var i8266 = []
  for(var i = 0; i < i8267.length; i += 1) {
    i8266.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i8267[i + 0]) );
  }
  i8264.scriptsExecutionOrder = i8266
  var i8269 = i8265[1]
  var i8268 = []
  for(var i = 0; i < i8269.length; i += 1) {
    i8268.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i8269[i + 0]) );
  }
  i8264.sortingLayers = i8268
  var i8271 = i8265[2]
  var i8270 = []
  for(var i = 0; i < i8271.length; i += 1) {
    i8270.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i8271[i + 0]) );
  }
  i8264.cullingLayers = i8270
  i8264.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i8265[3], i8264.timeSettings)
  i8264.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i8265[4], i8264.physicsSettings)
  i8264.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i8265[5], i8264.physics2DSettings)
  i8264.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i8265[6], i8264.qualitySettings)
  i8264.enableRealtimeShadows = !!i8265[7]
  i8264.enableAutoInstancing = !!i8265[8]
  i8264.enableStaticBatching = !!i8265[9]
  i8264.enableDynamicBatching = !!i8265[10]
  i8264.usePreservativeDynamicBatching = !!i8265[11]
  i8264.lightmapEncodingQuality = i8265[12]
  i8264.desiredColorSpace = i8265[13]
  var i8273 = i8265[14]
  var i8272 = []
  for(var i = 0; i < i8273.length; i += 1) {
    i8272.push( i8273[i + 0] );
  }
  i8264.allTags = i8272
  return i8264
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i8276 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i8277 = data
  i8276.name = i8277[0]
  i8276.value = i8277[1]
  return i8276
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i8280 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i8281 = data
  i8280.id = i8281[0]
  i8280.name = i8281[1]
  i8280.value = i8281[2]
  return i8280
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i8284 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i8285 = data
  i8284.id = i8285[0]
  i8284.name = i8285[1]
  return i8284
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i8286 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i8287 = data
  i8286.fixedDeltaTime = i8287[0]
  i8286.maximumDeltaTime = i8287[1]
  i8286.timeScale = i8287[2]
  i8286.maximumParticleTimestep = i8287[3]
  return i8286
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i8288 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i8289 = data
  i8288.gravity = new pc.Vec3( i8289[0], i8289[1], i8289[2] )
  i8288.defaultSolverIterations = i8289[3]
  i8288.bounceThreshold = i8289[4]
  i8288.autoSyncTransforms = !!i8289[5]
  i8288.autoSimulation = !!i8289[6]
  var i8291 = i8289[7]
  var i8290 = []
  for(var i = 0; i < i8291.length; i += 1) {
    i8290.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i8291[i + 0]) );
  }
  i8288.collisionMatrix = i8290
  return i8288
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i8294 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i8295 = data
  i8294.enabled = !!i8295[0]
  i8294.layerId = i8295[1]
  i8294.otherLayerId = i8295[2]
  return i8294
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i8296 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i8297 = data
  request.r(i8297[0], i8297[1], 0, i8296, 'material')
  i8296.gravity = new pc.Vec2( i8297[2], i8297[3] )
  i8296.positionIterations = i8297[4]
  i8296.velocityIterations = i8297[5]
  i8296.velocityThreshold = i8297[6]
  i8296.maxLinearCorrection = i8297[7]
  i8296.maxAngularCorrection = i8297[8]
  i8296.maxTranslationSpeed = i8297[9]
  i8296.maxRotationSpeed = i8297[10]
  i8296.baumgarteScale = i8297[11]
  i8296.baumgarteTOIScale = i8297[12]
  i8296.timeToSleep = i8297[13]
  i8296.linearSleepTolerance = i8297[14]
  i8296.angularSleepTolerance = i8297[15]
  i8296.defaultContactOffset = i8297[16]
  i8296.autoSimulation = !!i8297[17]
  i8296.queriesHitTriggers = !!i8297[18]
  i8296.queriesStartInColliders = !!i8297[19]
  i8296.callbacksOnDisable = !!i8297[20]
  i8296.reuseCollisionCallbacks = !!i8297[21]
  i8296.autoSyncTransforms = !!i8297[22]
  var i8299 = i8297[23]
  var i8298 = []
  for(var i = 0; i < i8299.length; i += 1) {
    i8298.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i8299[i + 0]) );
  }
  i8296.collisionMatrix = i8298
  return i8296
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i8302 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i8303 = data
  i8302.enabled = !!i8303[0]
  i8302.layerId = i8303[1]
  i8302.otherLayerId = i8303[2]
  return i8302
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i8304 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i8305 = data
  var i8307 = i8305[0]
  var i8306 = []
  for(var i = 0; i < i8307.length; i += 1) {
    i8306.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i8307[i + 0]) );
  }
  i8304.qualityLevels = i8306
  var i8309 = i8305[1]
  var i8308 = []
  for(var i = 0; i < i8309.length; i += 1) {
    i8308.push( i8309[i + 0] );
  }
  i8304.names = i8308
  i8304.shadows = i8305[2]
  i8304.anisotropicFiltering = i8305[3]
  i8304.antiAliasing = i8305[4]
  i8304.lodBias = i8305[5]
  i8304.shadowCascades = i8305[6]
  i8304.shadowDistance = i8305[7]
  i8304.shadowmaskMode = i8305[8]
  i8304.shadowProjection = i8305[9]
  i8304.shadowResolution = i8305[10]
  i8304.softParticles = !!i8305[11]
  i8304.softVegetation = !!i8305[12]
  i8304.activeColorSpace = i8305[13]
  i8304.desiredColorSpace = i8305[14]
  i8304.masterTextureLimit = i8305[15]
  i8304.maxQueuedFrames = i8305[16]
  i8304.particleRaycastBudget = i8305[17]
  i8304.pixelLightCount = i8305[18]
  i8304.realtimeReflectionProbes = !!i8305[19]
  i8304.shadowCascade2Split = i8305[20]
  i8304.shadowCascade4Split = new pc.Vec3( i8305[21], i8305[22], i8305[23] )
  i8304.streamingMipmapsActive = !!i8305[24]
  i8304.vSyncCount = i8305[25]
  i8304.asyncUploadBufferSize = i8305[26]
  i8304.asyncUploadTimeSlice = i8305[27]
  i8304.billboardsFaceCameraPosition = !!i8305[28]
  i8304.shadowNearPlaneOffset = i8305[29]
  i8304.streamingMipmapsMemoryBudget = i8305[30]
  i8304.maximumLODLevel = i8305[31]
  i8304.streamingMipmapsAddAllCameras = !!i8305[32]
  i8304.streamingMipmapsMaxLevelReduction = i8305[33]
  i8304.streamingMipmapsRenderersPerFrame = i8305[34]
  i8304.resolutionScalingFixedDPIFactor = i8305[35]
  i8304.streamingMipmapsMaxFileIORequests = i8305[36]
  i8304.currentQualityLevel = i8305[37]
  return i8304
}

Deserializers["Luna.Unity.DTO.UnityEngine.Audio.AudioMixer"] = function (request, data, root) {
  var i8312 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Audio.AudioMixer' )
  var i8313 = data
  var i8315 = i8313[0]
  var i8314 = []
  for(var i = 0; i < i8315.length; i += 1) {
    i8314.push( request.d('Luna.Unity.DTO.UnityEngine.Audio.AudioMixerGroup', i8315[i + 0]) );
  }
  i8312.groups = i8314
  var i8317 = i8313[1]
  var i8316 = []
  for(var i = 0; i < i8317.length; i += 1) {
    i8316.push( request.d('Luna.Unity.DTO.UnityEngine.Audio.AudioMixerSnapshot', i8317[i + 0]) );
  }
  i8312.snapshots = i8316
  return i8312
}

Deserializers["Luna.Unity.DTO.UnityEngine.Audio.AudioMixerGroup"] = function (request, data, root) {
  var i8320 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Audio.AudioMixerGroup' )
  var i8321 = data
  i8320.id = i8321[0]
  i8320.childGroupIds = i8321[1]
  i8320.name = i8321[2]
  return i8320
}

Deserializers["Luna.Unity.DTO.UnityEngine.Audio.AudioMixerSnapshot"] = function (request, data, root) {
  var i8324 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Audio.AudioMixerSnapshot' )
  var i8325 = data
  i8324.id = i8325[0]
  var i8327 = i8325[1]
  var i8326 = []
  for(var i = 0; i < i8327.length; i += 1) {
    i8326.push( request.d('Luna.Unity.DTO.UnityEngine.Audio.AudioMixerSnapshot+Parameter', i8327[i + 0]) );
  }
  i8324.parameters = i8326
  return i8324
}

Deserializers["Luna.Unity.DTO.UnityEngine.Audio.AudioMixerSnapshot+Parameter"] = function (request, data, root) {
  var i8330 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Audio.AudioMixerSnapshot+Parameter' )
  var i8331 = data
  i8330.name = i8331[0]
  i8330.value = i8331[1]
  return i8330
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame"] = function (request, data, root) {
  var i8334 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame' )
  var i8335 = data
  i8334.weight = i8335[0]
  i8334.vertices = i8335[1]
  i8334.normals = i8335[2]
  i8334.tangents = i8335[3]
  return i8334
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Components.Animator":{"animatorController":0,"avatar":2,"updateMode":4,"hasTransformHierarchy":5,"applyRootMotion":6,"humanBones":7,"enabled":8},"Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer":{"color":0,"sprite":4,"flipX":6,"flipY":7,"drawMode":8,"size":9,"tileMode":11,"adaptiveModeThreshold":12,"maskInteraction":13,"spriteSortPoint":14,"enabled":15,"sharedMaterial":16,"sharedMaterials":18,"receiveShadows":19,"shadowCastingMode":20,"sortingLayerID":21,"sortingOrder":22,"lightmapIndex":23,"lightmapSceneIndex":24,"lightmapScaleOffset":25,"lightProbeUsage":29,"reflectionProbeUsage":30},"Luna.Unity.DTO.UnityEngine.Components.TrailRenderer":{"positions":0,"positionCount":1,"time":2,"startWidth":3,"endWidth":4,"widthMultiplier":5,"autodestruct":6,"emitting":7,"numCornerVertices":8,"numCapVertices":9,"minVertexDistance":10,"colorGradient":11,"startColor":12,"endColor":16,"generateLightingData":20,"textureMode":21,"alignment":22,"widthCurve":23,"enabled":24,"sharedMaterial":25,"sharedMaterials":27,"receiveShadows":28,"shadowCastingMode":29,"sortingLayerID":30,"sortingOrder":31,"lightmapIndex":32,"lightmapSceneIndex":33,"lightmapScaleOffset":34,"lightProbeUsage":38,"reflectionProbeUsage":39},"Luna.Unity.DTO.UnityEngine.Components.SpriteMask":{"frontSortingLayerID":0,"frontSortingOrder":1,"backSortingLayerID":2,"backSortingOrder":3,"alphaCutoff":4,"sprite":5,"tileMode":7,"isCustomRangeActive":8,"spriteSortPoint":9,"enabled":10,"sharedMaterial":11,"sharedMaterials":13,"receiveShadows":14,"shadowCastingMode":15,"sortingLayerID":16,"sortingOrder":17,"lightmapIndex":18,"lightmapSceneIndex":19,"lightmapScaleOffset":20,"lightProbeUsage":24,"reflectionProbeUsage":25},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D":{"usedByComposite":0,"autoTiling":1,"size":2,"edgeRadius":4,"enabled":5,"isTrigger":6,"usedByEffector":7,"density":8,"offset":9,"material":11},"Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D":{"bodyType":0,"material":1,"simulated":3,"useAutoMass":4,"mass":5,"drag":6,"angularDrag":7,"gravityScale":8,"collisionDetectionMode":9,"sleepMode":10,"constraints":11},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystem":{"main":0,"colorBySpeed":1,"colorOverLifetime":2,"emission":3,"rotationBySpeed":4,"rotationOverLifetime":5,"shape":6,"sizeBySpeed":7,"sizeOverLifetime":8,"textureSheetAnimation":9,"velocityOverLifetime":10,"noise":11,"inheritVelocity":12,"forceOverLifetime":13,"limitVelocityOverLifetime":14,"useAutoRandomSeed":15,"randomSeed":16},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule":{"duration":0,"loop":1,"prewarm":2,"startDelay":3,"startLifetime":4,"startSpeed":5,"startSize3D":6,"startSizeX":7,"startSizeY":8,"startSizeZ":9,"startRotation3D":10,"startRotationX":11,"startRotationY":12,"startRotationZ":13,"startColor":14,"gravityModifier":15,"simulationSpace":16,"customSimulationSpace":17,"simulationSpeed":19,"useUnscaledTime":20,"scalingMode":21,"playOnAwake":22,"maxParticles":23,"emitterVelocityMode":24,"stopAction":25},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve":{"mode":0,"curveMin":1,"curveMax":2,"curveMultiplier":3,"constantMin":4,"constantMax":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient":{"mode":0,"gradientMin":1,"gradientMax":2,"colorMin":3,"colorMax":7},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient":{"mode":0,"colorKeys":1,"alphaKeys":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule":{"enabled":0,"color":1,"range":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey":{"color":0,"time":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey":{"alpha":0,"time":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule":{"enabled":0,"color":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule":{"enabled":0,"rateOverTime":1,"rateOverDistance":2,"bursts":3},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst":{"count":0,"cycleCount":1,"minCount":2,"maxCount":3,"repeatInterval":4,"time":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule":{"enabled":0,"shapeType":1,"randomDirectionAmount":2,"sphericalDirectionAmount":3,"randomPositionAmount":4,"alignToDirection":5,"radius":6,"radiusMode":7,"radiusSpread":8,"radiusSpeed":9,"radiusThickness":10,"angle":11,"length":12,"boxThickness":13,"meshShapeType":16,"mesh":17,"meshRenderer":19,"skinnedMeshRenderer":21,"useMeshMaterialIndex":23,"meshMaterialIndex":24,"useMeshColors":25,"normalOffset":26,"arc":27,"arcMode":28,"arcSpread":29,"arcSpeed":30,"donutRadius":31,"position":32,"rotation":35,"scale":38},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule":{"enabled":0,"mode":1,"animation":2,"numTilesX":3,"numTilesY":4,"useRandomRow":5,"frameOverTime":6,"startFrame":7,"cycleCount":8,"rowIndex":9,"flipU":10,"flipV":11,"spriteCount":12,"sprites":13},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"radial":4,"speedModifier":5,"space":6,"orbitalX":7,"orbitalY":8,"orbitalZ":9,"orbitalOffsetX":10,"orbitalOffsetY":11,"orbitalOffsetZ":12},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule":{"enabled":0,"separateAxes":1,"strengthX":2,"strengthY":3,"strengthZ":4,"frequency":5,"damping":6,"octaveCount":7,"octaveMultiplier":8,"octaveScale":9,"quality":10,"scrollSpeed":11,"scrollSpeedMultiplier":12,"remapEnabled":13,"remapX":14,"remapY":15,"remapZ":16,"positionAmount":17,"rotationAmount":18,"sizeAmount":19},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule":{"enabled":0,"mode":1,"curve":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"space":4,"randomized":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule":{"enabled":0,"limit":1,"limitX":2,"limitY":3,"limitZ":4,"dampen":5,"separateAxes":6,"space":7,"drag":8,"multiplyDragByParticleSize":9,"multiplyDragByParticleVelocity":10},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer":{"mesh":0,"meshCount":2,"activeVertexStreamsCount":3,"alignment":4,"renderMode":5,"sortMode":6,"lengthScale":7,"velocityScale":8,"cameraVelocityScale":9,"normalDirection":10,"sortingFudge":11,"minParticleSize":12,"maxParticleSize":13,"pivot":14,"trailMaterial":17,"applyActiveColorSpace":19,"enabled":20,"sharedMaterial":21,"sharedMaterials":23,"receiveShadows":24,"shadowCastingMode":25,"sortingLayerID":26,"sortingOrder":27,"lightmapIndex":28,"lightmapSceneIndex":29,"lightmapScaleOffset":30,"lightProbeUsage":34,"reflectionProbeUsage":35},"Luna.Unity.DTO.UnityEngine.Components.CircleCollider2D":{"radius":0,"enabled":1,"isTrigger":2,"usedByEffector":3,"density":4,"offset":5,"material":7},"Luna.Unity.DTO.UnityEngine.Components.AudioSource":{"clip":0,"outputAudioMixerGroup":2,"playOnAwake":4,"loop":5,"time":6,"volume":7,"pitch":8,"enabled":9},"Luna.Unity.DTO.UnityEngine.Components.LineRenderer":{"textureMode":0,"alignment":1,"widthCurve":2,"colorGradient":3,"positions":4,"positionCount":5,"widthMultiplier":6,"startWidth":7,"endWidth":8,"numCornerVertices":9,"numCapVertices":10,"useWorldSpace":11,"loop":12,"startColor":13,"endColor":17,"generateLightingData":21,"enabled":22,"sharedMaterial":23,"sharedMaterials":25,"receiveShadows":26,"shadowCastingMode":27,"sortingLayerID":28,"sortingOrder":29,"lightmapIndex":30,"lightmapSceneIndex":31,"lightmapScaleOffset":32,"lightProbeUsage":36,"reflectionProbeUsage":37},"Luna.Unity.DTO.UnityEngine.Assets.Mesh":{"name":0,"halfPrecision":1,"useSimplification":2,"useUInt32IndexFormat":3,"vertexCount":4,"aabb":5,"streams":6,"vertices":7,"subMeshes":8,"bindposes":9,"blendShapes":10},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh":{"triangles":0},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape":{"name":0,"frames":1},"Luna.Unity.DTO.UnityEngine.Textures.Cubemap":{"name":0,"atlasId":1,"mipmapCount":2,"hdr":3,"size":4,"anisoLevel":5,"filterMode":6,"rects":7,"wrapU":8,"wrapV":9},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"aspect":0,"orthographic":1,"orthographicSize":2,"backgroundColor":3,"nearClipPlane":7,"farClipPlane":8,"fieldOfView":9,"depth":10,"clearFlags":11,"cullingMask":12,"rect":13,"targetTexture":14,"usePhysicalProperties":16,"focalLength":17,"sensorSize":18,"lensShift":20,"gateFit":22,"commandBufferCount":23,"cameraType":24,"enabled":25},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"planeDistance":0,"referencePixelsPerUnit":1,"isFallbackOverlay":2,"renderMode":3,"renderOrder":4,"sortingLayerName":5,"sortingOrder":6,"scaleFactor":7,"worldCamera":8,"overrideSorting":10,"pixelPerfect":11,"targetDisplay":12,"overridePixelPerfect":13,"enabled":14},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"customReflection":36,"defaultReflection":38,"defaultReflectionMode":40,"defaultReflectionResolution":41,"sunLightObjectId":42,"pixelLightCount":43,"defaultReflectionHDR":44,"hasLightDataAsset":45,"hasManualGenerate":46},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2,"shadowMask":4},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"hasDepthOnlyPass":10,"isCreatedByShaderGraph":11,"disableBatching":12,"compiled":13},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip":{"name":0,"wrapMode":1,"isLooping":2,"length":3,"curves":4,"events":5,"halfPrecision":6,"_frameRate":7,"localBounds":8,"hasMuscleCurves":9,"clipMuscleConstant":10,"clipBindingConstant":11},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve":{"path":0,"hash":1,"componentType":2,"property":3,"keys":4,"objectReferenceKeys":5},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey":{"time":0,"value":1},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent":{"functionName":0,"floatParameter":1,"intParameter":2,"stringParameter":3,"objectReferenceParameter":4,"time":6},"Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds":{"center":0,"extends":3},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant":{"genericBindings":0,"pptrCurveMapping":1},"Luna.Unity.DTO.UnityEngine.Assets.Font":{"name":0,"ascent":1,"originalLineHeight":2,"fontSize":3,"characterInfo":4,"texture":5,"originalFontSize":7},"Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo":{"index":0,"advance":1,"bearing":2,"glyphWidth":3,"glyphHeight":4,"minX":5,"maxX":6,"minY":7,"maxY":8,"uvBottomLeftX":9,"uvBottomLeftY":10,"uvBottomRightX":11,"uvBottomRightY":12,"uvTopLeftX":13,"uvTopLeftY":14,"uvTopRightX":15,"uvTopRightY":16},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController":{"name":0,"layers":1,"parameters":2,"animationClips":3,"avatarUnsupported":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer":{"name":0,"defaultWeight":1,"blendingMode":2,"avatarMask":3,"syncedLayerIndex":4,"syncedLayerAffectsTiming":5,"syncedLayers":6,"stateMachine":7},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine":{"id":0,"name":1,"path":2,"states":3,"machines":4,"entryStateTransitions":5,"exitStateTransitions":6,"anyStateTransitions":7,"defaultStateId":8},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState":{"id":0,"name":1,"cycleOffset":2,"cycleOffsetParameter":3,"cycleOffsetParameterActive":4,"mirror":5,"mirrorParameter":6,"mirrorParameterActive":7,"motionId":8,"nameHash":9,"fullPathHash":10,"speed":11,"speedParameter":12,"speedParameterActive":13,"tag":14,"tagHash":15,"writeDefaultValues":16,"behaviours":17,"transitions":18},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition":{"fullPath":0,"canTransitionToSelf":1,"duration":2,"exitTime":3,"hasExitTime":4,"hasFixedDuration":5,"interruptionSource":6,"offset":7,"orderedInterruption":8,"destinationStateId":9,"isExit":10,"mute":11,"solo":12,"conditions":13},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition":{"destinationStateId":0,"isExit":1,"mute":2,"solo":3,"conditions":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition":{"mode":0,"parameter":1,"threshold":2},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter":{"defaultBool":0,"defaultFloat":1,"defaultInt":2,"name":3,"nameHash":4,"type":5},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableStaticBatching":9,"enableDynamicBatching":10,"usePreservativeDynamicBatching":11,"lightmapEncodingQuality":12,"desiredColorSpace":13,"allTags":14},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37},"Luna.Unity.DTO.UnityEngine.Audio.AudioMixer":{"groups":0,"snapshots":1},"Luna.Unity.DTO.UnityEngine.Audio.AudioMixerGroup":{"id":0,"childGroupIds":1,"name":2},"Luna.Unity.DTO.UnityEngine.Audio.AudioMixerSnapshot":{"id":0,"parameters":1},"Luna.Unity.DTO.UnityEngine.Audio.AudioMixerSnapshot+Parameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame":{"weight":0,"vertices":1,"normals":2,"tangents":3}}

Deserializers.requiredComponents = {"59":[60],"61":[60],"62":[60],"63":[60],"64":[60],"65":[60],"66":[67],"68":[35],"69":[70],"71":[70],"72":[70],"73":[70],"74":[70],"75":[70],"76":[70],"77":[18],"78":[18],"79":[18],"80":[18],"81":[18],"82":[18],"83":[18],"84":[18],"85":[18],"86":[18],"87":[18],"88":[18],"89":[18],"90":[35],"91":[92],"93":[94],"95":[94],"47":[40],"96":[97],"98":[6],"99":[8],"100":[6],"101":[102],"103":[102],"104":[21],"105":[8],"106":[6],"15":[6],"107":[40],"108":[40],"50":[47],"41":[51,40],"109":[40],"49":[47],"110":[40],"111":[40],"112":[40],"113":[40],"114":[40],"115":[40],"116":[40],"117":[40],"118":[40],"119":[51,40],"120":[40],"121":[40],"122":[40],"123":[40],"42":[51,40],"124":[40],"125":[54],"126":[54],"55":[54],"127":[54],"128":[35],"129":[35]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Transform","UnityEngine.MonoBehaviour","Level2_Cloth_Playable","UnityEngine.GameObject","UnityEngine.Animator","UnityEngine.SpriteRenderer","BasicDrag","UnityEngine.BoxCollider2D","UnityEngine.AudioClip","UnityEngine.Sprite","UnityEngine.AudioSource","UnityEditor.Animations.AnimatorController","UnityEngine.Material","UnityEngine.TrailRenderer","UnityEngine.U2D.Animation.SpriteSkin","BD_AnimationHelper","UnityEngine.SpriteMask","UnityEngine.Rigidbody2D","PlaceItem","UnityEngine.ParticleSystem","DG.Tweening.DOTweenAnimation","UnityEngine.ParticleSystemRenderer","ArrayRotationByMovement","ActionOnTap","BD_Clamp","BD_Action","UnityEngine.CircleCollider2D","SoapPourControler","_2dxFX_Wave","InteractableBones","UnityEditor.Audio.AudioMixerGroupController","BD_AnimatorDrag","TapandHold_Simple","UnityEngine.Texture2D","UnityEngine.Camera","UnityEngine.AudioListener","CameraController","MusicSource","UI_Manager","UnityEngine.RectTransform","UnityEngine.UI.Image","UnityEngine.UI.Text","GameManagerPlayable","AudioController","UnityEditor.Audio.AudioMixerController","UnityEngine.Mesh","UnityEngine.Canvas","UnityEngine.EventSystems.UIBehaviour","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEngine.CanvasRenderer","UnityEngine.Font","UnityEngine.UI.Button","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","PlayableHudRuntime","UnityEngine.Cubemap","DG.Tweening.Core.DOTweenSettings","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.ConstantForce","UnityEngine.Rigidbody","UnityEngine.Joint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.FixedJoint","UnityEngine.CharacterJoint","UnityEngine.ConfigurableJoint","UnityEngine.CompositeCollider2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.MeshRenderer","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","RopeController","UnityEngine.LineRenderer","BD_Fold","BD_Sticky","Lvl3_DripAnimator","Lvl3_LipstickPicker","UnityEngine.Collider2D","Lvl3_PourFill","PlayTweenOnHit","SpriteButton","RadialCircleFill","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.Mask","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Slider","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster"]

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

Deserializers.isRuntimeAnalysisEnabledForCode = "True";

Deserializers.runtimeAnalysisExcludedClassesCount = "1751";

Deserializers.runtimeAnalysisExcludedMethodsCount = "4114";

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

Deserializers.buildID = "1b403ac4-107b-4ceb-a7bd-8c34b6912eff";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[],[["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"]],[],[]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

