var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i3444 = root || request.c( 'UnityEngine.JointSpring' )
  var i3445 = data
  i3444.spring = i3445[0]
  i3444.damper = i3445[1]
  i3444.targetPosition = i3445[2]
  return i3444
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i3446 = root || request.c( 'UnityEngine.JointMotor' )
  var i3447 = data
  i3446.m_TargetVelocity = i3447[0]
  i3446.m_Force = i3447[1]
  i3446.m_FreeSpin = i3447[2]
  return i3446
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i3448 = root || request.c( 'UnityEngine.JointLimits' )
  var i3449 = data
  i3448.m_Min = i3449[0]
  i3448.m_Max = i3449[1]
  i3448.m_Bounciness = i3449[2]
  i3448.m_BounceMinVelocity = i3449[3]
  i3448.m_ContactDistance = i3449[4]
  i3448.minBounce = i3449[5]
  i3448.maxBounce = i3449[6]
  return i3448
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i3450 = root || request.c( 'UnityEngine.JointDrive' )
  var i3451 = data
  i3450.m_PositionSpring = i3451[0]
  i3450.m_PositionDamper = i3451[1]
  i3450.m_MaximumForce = i3451[2]
  i3450.m_UseAcceleration = i3451[3]
  return i3450
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i3452 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i3453 = data
  i3452.m_Spring = i3453[0]
  i3452.m_Damper = i3453[1]
  return i3452
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i3454 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i3455 = data
  i3454.m_Limit = i3455[0]
  i3454.m_Bounciness = i3455[1]
  i3454.m_ContactDistance = i3455[2]
  return i3454
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i3456 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i3457 = data
  i3456.m_ExtremumSlip = i3457[0]
  i3456.m_ExtremumValue = i3457[1]
  i3456.m_AsymptoteSlip = i3457[2]
  i3456.m_AsymptoteValue = i3457[3]
  i3456.m_Stiffness = i3457[4]
  return i3456
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i3458 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i3459 = data
  i3458.m_LowerAngle = i3459[0]
  i3458.m_UpperAngle = i3459[1]
  return i3458
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i3460 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i3461 = data
  i3460.m_MotorSpeed = i3461[0]
  i3460.m_MaximumMotorTorque = i3461[1]
  return i3460
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i3462 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i3463 = data
  i3462.m_DampingRatio = i3463[0]
  i3462.m_Frequency = i3463[1]
  i3462.m_Angle = i3463[2]
  return i3462
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i3464 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i3465 = data
  i3464.m_LowerTranslation = i3465[0]
  i3464.m_UpperTranslation = i3465[1]
  return i3464
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i3466 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i3467 = data
  i3466.name = i3467[0]
  i3466.width = i3467[1]
  i3466.height = i3467[2]
  i3466.mipmapCount = i3467[3]
  i3466.anisoLevel = i3467[4]
  i3466.filterMode = i3467[5]
  i3466.hdr = !!i3467[6]
  i3466.format = i3467[7]
  i3466.wrapMode = i3467[8]
  i3466.alphaIsTransparency = !!i3467[9]
  i3466.alphaSource = i3467[10]
  i3466.graphicsFormat = i3467[11]
  i3466.sRGBTexture = !!i3467[12]
  i3466.desiredColorSpace = i3467[13]
  i3466.wrapU = i3467[14]
  i3466.wrapV = i3467[15]
  return i3466
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i3468 = root || new pc.UnityMaterial()
  var i3469 = data
  i3468.name = i3469[0]
  request.r(i3469[1], i3469[2], 0, i3468, 'shader')
  i3468.renderQueue = i3469[3]
  i3468.enableInstancing = !!i3469[4]
  var i3471 = i3469[5]
  var i3470 = []
  for(var i = 0; i < i3471.length; i += 1) {
    i3470.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i3471[i + 0]) );
  }
  i3468.floatParameters = i3470
  var i3473 = i3469[6]
  var i3472 = []
  for(var i = 0; i < i3473.length; i += 1) {
    i3472.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i3473[i + 0]) );
  }
  i3468.colorParameters = i3472
  var i3475 = i3469[7]
  var i3474 = []
  for(var i = 0; i < i3475.length; i += 1) {
    i3474.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i3475[i + 0]) );
  }
  i3468.vectorParameters = i3474
  var i3477 = i3469[8]
  var i3476 = []
  for(var i = 0; i < i3477.length; i += 1) {
    i3476.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i3477[i + 0]) );
  }
  i3468.textureParameters = i3476
  var i3479 = i3469[9]
  var i3478 = []
  for(var i = 0; i < i3479.length; i += 1) {
    i3478.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i3479[i + 0]) );
  }
  i3468.materialFlags = i3478
  return i3468
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i3482 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i3483 = data
  i3482.name = i3483[0]
  i3482.value = i3483[1]
  return i3482
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i3486 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i3487 = data
  i3486.name = i3487[0]
  i3486.value = new pc.Color(i3487[1], i3487[2], i3487[3], i3487[4])
  return i3486
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i3490 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i3491 = data
  i3490.name = i3491[0]
  i3490.value = new pc.Vec4( i3491[1], i3491[2], i3491[3], i3491[4] )
  return i3490
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i3494 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i3495 = data
  i3494.name = i3495[0]
  request.r(i3495[1], i3495[2], 0, i3494, 'value')
  return i3494
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i3498 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i3499 = data
  i3498.name = i3499[0]
  i3498.enabled = !!i3499[1]
  return i3498
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i3500 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i3501 = data
  i3500.position = new pc.Vec3( i3501[0], i3501[1], i3501[2] )
  i3500.scale = new pc.Vec3( i3501[3], i3501[4], i3501[5] )
  i3500.rotation = new pc.Quat(i3501[6], i3501[7], i3501[8], i3501[9])
  return i3500
}

Deserializers["Level1_Hair_Playable"] = function (request, data, root) {
  var i3502 = root || request.c( 'Level1_Hair_Playable' )
  var i3503 = data
  request.r(i3503[0], i3503[1], 0, i3502, 'wetCloth')
  request.r(i3503[2], i3503[3], 0, i3502, 'waterDripingParticle')
  i3502.ZoomStep1 = request.d('ZoomPos', i3503[4], i3502.ZoomStep1)
  var i3505 = i3503[5]
  var i3504 = []
  for(var i = 0; i < i3505.length; i += 2) {
  request.r(i3505[i + 0], i3505[i + 1], 2, i3504, '')
  }
  i3502.AllTrash = i3504
  var i3507 = i3503[6]
  var i3506 = []
  for(var i = 0; i < i3507.length; i += 2) {
  request.r(i3507[i + 0], i3507[i + 1], 2, i3506, '')
  }
  i3502.AllTrashOutlines = i3506
  i3502.trashDone = !!i3503[7]
  i3502.trashThrown = i3503[8]
  i3502.trashTotal = i3503[9]
  request.r(i3503[10], i3503[11], 0, i3502, 'bd_Sticky')
  i3502.ZoomStep2 = request.d('ZoomPos', i3503[12], i3502.ZoomStep2)
  request.r(i3503[13], i3503[14], 0, i3502, 'ToolStep2')
  request.r(i3503[15], i3503[16], 0, i3502, 'camFollowStep2')
  var i3509 = i3503[17]
  var i3508 = []
  for(var i = 0; i < i3509.length; i += 2) {
  request.r(i3509[i + 0], i3509[i + 1], 2, i3508, '')
  }
  i3502.AllBugOutlines = i3508
  i3502.ZoomStep2b = request.d('ZoomPos', i3503[18], i3502.ZoomStep2b)
  request.r(i3503[19], i3503[20], 0, i3502, 'ToolStep2b')
  request.r(i3503[21], i3503[22], 0, i3502, 'camFollowStep2b')
  request.r(i3503[23], i3503[24], 0, i3502, 'dustColStep2')
  request.r(i3503[25], i3503[26], 0, i3502, 'handIndicationShower')
  request.r(i3503[27], i3503[28], 0, i3502, 'hairDirtyStatic')
  request.r(i3503[29], i3503[30], 0, i3502, 'hairDirtyWetStatic')
  request.r(i3503[31], i3503[32], 0, i3502, 'dryHairAnim')
  i3502.ZoomStep3 = request.d('ZoomPos', i3503[33], i3502.ZoomStep3)
  request.r(i3503[34], i3503[35], 0, i3502, 'ShampooInHand')
  request.r(i3503[36], i3503[37], 0, i3502, 'ShampooOnHand')
  request.r(i3503[38], i3503[39], 0, i3502, 'ShampooInHandCap')
  request.r(i3503[40], i3503[41], 0, i3502, 'ToolStep3')
  request.r(i3503[42], i3503[43], 0, i3502, 'shampooPatch')
  request.r(i3503[44], i3503[45], 0, i3502, 'handSpriteRend')
  request.r(i3503[46], i3503[47], 0, i3502, 'bottleDefault')
  request.r(i3503[48], i3503[49], 0, i3502, 'bottlePressed')
  request.r(i3503[50], i3503[51], 0, i3502, 'shampooDropping')
  request.r(i3503[52], i3503[53], 0, i3502, 'bottleOpenSfx')
  request.r(i3503[54], i3503[55], 0, i3502, 'bottleSqueezSfx')
  request.r(i3503[56], i3503[57], 0, i3502, 'bottlePourSfx')
  i3502.ZoomStep4 = request.d('ZoomPos', i3503[58], i3502.ZoomStep4)
  request.r(i3503[59], i3503[60], 0, i3502, 'ToolStep4')
  request.r(i3503[61], i3503[62], 0, i3502, 'camFollowStep4')
  request.r(i3503[63], i3503[64], 0, i3502, 'foamLight_E')
  request.r(i3503[65], i3503[66], 0, i3502, 'foam2_E')
  request.r(i3503[67], i3503[68], 0, i3502, 'foamCol')
  request.r(i3503[69], i3503[70], 0, i3502, 'handIndicationHands')
  request.r(i3503[71], i3503[72], 0, i3502, 'progressStep4')
  i3502.ZoomStep5a = request.d('ZoomPos', i3503[73], i3502.ZoomStep5a)
  i3502.ZoomStep5b = request.d('ZoomPos', i3503[74], i3502.ZoomStep5b)
  request.r(i3503[75], i3503[76], 0, i3502, 'ShowerDamaged')
  request.r(i3503[77], i3503[78], 0, i3502, 'ShowerBackDMG')
  request.r(i3503[79], i3503[80], 0, i3502, 'ShowerInner_dirty')
  request.r(i3503[81], i3503[82], 0, i3502, 'ShowerInner_Target')
  request.r(i3503[83], i3503[84], 0, i3502, 'ShowerFrontDMG')
  request.r(i3503[85], i3503[86], 0, i3502, 'OpenShowerIndication')
  request.r(i3503[87], i3503[88], 0, i3502, 'CloseShowerIndication')
  request.r(i3503[89], i3503[90], 0, i3502, 'showrOpenInput')
  request.r(i3503[91], i3503[92], 0, i3502, 'showerDisk')
  request.r(i3503[93], i3503[94], 0, i3502, 'showerFixReverseAnimDrag')
  request.r(i3503[95], i3503[96], 0, i3502, 'showerDragDamage')
  request.r(i3503[97], i3503[98], 0, i3502, 'ToolStep5Rev')
  i3502.ZoomStep5 = request.d('ZoomPos', i3503[99], i3502.ZoomStep5)
  request.r(i3503[100], i3503[101], 0, i3502, 'ToolStep5')
  request.r(i3503[102], i3503[103], 0, i3502, 'ToolStep5Placeable')
  request.r(i3503[104], i3503[105], 0, i3502, 'toolStep5Progress')
  request.r(i3503[106], i3503[107], 0, i3502, 'toolStep5ProgressHelp')
  request.r(i3503[108], i3503[109], 0, i3502, 'camFollowStep5')
  request.r(i3503[110], i3503[111], 0, i3502, 'showerRender')
  request.r(i3503[112], i3503[113], 0, i3502, 'showerDirty')
  request.r(i3503[114], i3503[115], 0, i3502, 'showerClean')
  request.r(i3503[116], i3503[117], 0, i3502, 'waterShotParticle')
  request.r(i3503[118], i3503[119], 0, i3502, 'showerProblemClip')
  request.r(i3503[120], i3503[121], 0, i3502, 'wetHairs_E')
  i3502.levelName = i3503[122]
  i3502.levelReward = i3503[123]
  request.r(i3503[124], i3503[125], 0, i3502, 'LevelIcon')
  request.r(i3503[126], i3503[127], 0, i3502, 'Level_BG')
  var i3511 = i3503[128]
  var i3510 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Sprite')))
  for(var i = 0; i < i3511.length; i += 2) {
  request.r(i3511[i + 0], i3511[i + 1], 1, i3510, '')
  }
  i3502.ToolIcons = i3510
  var i3513 = i3503[129]
  var i3512 = []
  for(var i = 0; i < i3513.length; i += 2) {
  request.r(i3513[i + 0], i3513[i + 1], 2, i3512, '')
  }
  i3502.AllDrags = i3512
  var i3515 = i3503[130]
  var i3514 = []
  for(var i = 0; i < i3515.length; i += 2) {
  request.r(i3515[i + 0], i3515[i + 1], 2, i3514, '')
  }
  i3502.AllSources = i3514
  var i3517 = i3503[131]
  var i3516 = []
  for(var i = 0; i < i3517.length; i += 2) {
  request.r(i3517[i + 0], i3517[i + 1], 2, i3516, '')
  }
  i3502.AllScratches = i3516
  i3502.stepsDone = i3503[132]
  i3502.levelNo = i3503[133]
  i3502.partNo = i3503[134]
  request.r(i3503[135], i3503[136], 0, i3502, 'bubbleGum')
  return i3502
}

Deserializers["ZoomPos"] = function (request, data, root) {
  var i3518 = root || request.c( 'ZoomPos' )
  var i3519 = data
  i3518.CameraPos = new pc.Vec3( i3519[0], i3519[1], i3519[2] )
  i3518.CameraFOV = i3519[3]
  return i3518
}

Deserializers["PlayableCTA"] = function (request, data, root) {
  var i3530 = root || request.c( 'PlayableCTA' )
  var i3531 = data
  i3530.trigger = i3531[0]
  i3530.afterSeconds = i3531[1]
  i3530.afterTaps = i3531[2]
  i3530.refireOnEveryTap = !!i3531[3]
  i3530.refireDelay = i3531[4]
  i3530.onCtaFired = request.d('UnityEngine.Events.UnityEvent', i3531[5], i3530.onCtaFired)
  i3530.logWhenFired = !!i3531[6]
  return i3530
}

Deserializers["UnityEngine.Events.UnityEvent"] = function (request, data, root) {
  var i3532 = root || request.c( 'UnityEngine.Events.UnityEvent' )
  var i3533 = data
  i3532.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i3533[0], i3532.m_PersistentCalls)
  return i3532
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i3534 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i3535 = data
  var i3537 = i3535[0]
  var i3536 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i3537.length; i += 1) {
    i3536.add(request.d('UnityEngine.Events.PersistentCall', i3537[i + 0]));
  }
  i3534.m_Calls = i3536
  return i3534
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i3540 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i3541 = data
  request.r(i3541[0], i3541[1], 0, i3540, 'm_Target')
  i3540.m_TargetAssemblyTypeName = i3541[2]
  i3540.m_MethodName = i3541[3]
  i3540.m_Mode = i3541[4]
  i3540.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i3541[5], i3540.m_Arguments)
  i3540.m_CallState = i3541[6]
  return i3540
}

Deserializers["PlayableFadeCoverSettings"] = function (request, data, root) {
  var i3542 = root || request.c( 'PlayableFadeCoverSettings' )
  var i3543 = data
  i3542.revealDelay = i3543[0]
  i3542.revealDuration = i3543[1]
  return i3542
}

Deserializers["ScratchCardAsset.ScratchCardManager"] = function (request, data, root) {
  var i3544 = root || request.c( 'ScratchCardAsset.ScratchCardManager' )
  var i3545 = data
  request.r(i3545[0], i3545[1], 0, i3544, 'MainCamera')
  i3544.RenderType = i3545[2]
  request.r(i3545[3], i3545[4], 0, i3544, 'ScratchSurfaceSprite')
  i3544.ScratchSurfaceSpriteHasAlpha = !!i3545[5]
  i3544.MaskProgressCutOffValue = i3545[6]
  request.r(i3545[7], i3545[8], 0, i3544, 'EraseTexture')
  i3544.EraseTextureScale = new pc.Vec2( i3545[9], i3545[10] )
  i3544.InputEnabled = !!i3545[11]
  request.r(i3545[12], i3545[13], 0, i3544, 'Card')
  i3544.Mode = i3545[14]
  request.r(i3545[15], i3545[16], 0, i3544, 'Progress')
  request.r(i3545[17], i3545[18], 0, i3544, 'MeshCard')
  request.r(i3545[19], i3545[20], 0, i3544, 'SpriteCard')
  request.r(i3545[21], i3545[22], 0, i3544, 'ImageCard')
  request.r(i3545[23], i3545[24], 0, i3544, 'MaskShader')
  request.r(i3545[25], i3545[26], 0, i3544, 'BrushShader')
  request.r(i3545[27], i3545[28], 0, i3544, 'MaskProgressShader')
  request.r(i3545[29], i3545[30], 0, i3544, 'MaskProgressCutOffShader')
  return i3544
}

Deserializers["ScratchCardAsset.ScratchCard"] = function (request, data, root) {
  var i3546 = root || request.c( 'ScratchCardAsset.ScratchCard' )
  var i3547 = data
  request.r(i3547[0], i3547[1], 0, i3546, 'MainCamera')
  request.r(i3547[2], i3547[3], 0, i3546, 'Surface')
  i3546.RenderTextureQuality = i3547[4]
  request.r(i3547[5], i3547[6], 0, i3546, 'Eraser')
  request.r(i3547[7], i3547[8], 0, i3546, 'Progress')
  request.r(i3547[9], i3547[10], 0, i3546, 'ScratchSurface')
  request.r(i3547[11], i3547[12], 0, i3546, 'RenderTexture')
  i3546.BrushScale = new pc.Vec2( i3547[13], i3547[14] )
  request.r(i3547[15], i3547[16], 0, i3546, 'ToolTip')
  i3546.InputEnabled = !!i3547[17]
  i3546.IsScratching = !!i3547[18]
  i3546.useChangingScale = !!i3547[19]
  i3546.useGivenBrushScale = !!i3547[20]
  i3546.canSpreadMask = !!i3547[21]
  i3546.shouldPaintHoles = !!i3547[22]
  i3546.canRotateTip = !!i3547[23]
  i3546._mode = i3547[24]
  return i3546
}

Deserializers["ScratchCardAsset.EraseProgress"] = function (request, data, root) {
  var i3548 = root || request.c( 'ScratchCardAsset.EraseProgress' )
  var i3549 = data
  request.r(i3549[0], i3549[1], 0, i3548, 'Card')
  i3548.currentProgress = i3549[2]
  return i3548
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i3550 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i3551 = data
  i3550.name = i3551[0]
  i3550.tagId = i3551[1]
  i3550.enabled = !!i3551[2]
  i3550.isStatic = !!i3551[3]
  i3550.layer = i3551[4]
  return i3550
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animator"] = function (request, data, root) {
  var i3552 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animator' )
  var i3553 = data
  request.r(i3553[0], i3553[1], 0, i3552, 'animatorController')
  request.r(i3553[2], i3553[3], 0, i3552, 'avatar')
  i3552.updateMode = i3553[4]
  i3552.hasTransformHierarchy = !!i3553[5]
  i3552.applyRootMotion = !!i3553[6]
  var i3555 = i3553[7]
  var i3554 = []
  for(var i = 0; i < i3555.length; i += 2) {
  request.r(i3555[i + 0], i3555[i + 1], 2, i3554, '')
  }
  i3552.humanBones = i3554
  i3552.enabled = !!i3553[8]
  return i3552
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer"] = function (request, data, root) {
  var i3558 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer' )
  var i3559 = data
  i3558.color = new pc.Color(i3559[0], i3559[1], i3559[2], i3559[3])
  request.r(i3559[4], i3559[5], 0, i3558, 'sprite')
  i3558.flipX = !!i3559[6]
  i3558.flipY = !!i3559[7]
  i3558.drawMode = i3559[8]
  i3558.size = new pc.Vec2( i3559[9], i3559[10] )
  i3558.tileMode = i3559[11]
  i3558.adaptiveModeThreshold = i3559[12]
  i3558.maskInteraction = i3559[13]
  i3558.spriteSortPoint = i3559[14]
  i3558.enabled = !!i3559[15]
  request.r(i3559[16], i3559[17], 0, i3558, 'sharedMaterial')
  var i3561 = i3559[18]
  var i3560 = []
  for(var i = 0; i < i3561.length; i += 2) {
  request.r(i3561[i + 0], i3561[i + 1], 2, i3560, '')
  }
  i3558.sharedMaterials = i3560
  i3558.receiveShadows = !!i3559[19]
  i3558.shadowCastingMode = i3559[20]
  i3558.sortingLayerID = i3559[21]
  i3558.sortingOrder = i3559[22]
  i3558.lightmapIndex = i3559[23]
  i3558.lightmapSceneIndex = i3559[24]
  i3558.lightmapScaleOffset = new pc.Vec4( i3559[25], i3559[26], i3559[27], i3559[28] )
  i3558.lightProbeUsage = i3559[29]
  i3558.reflectionProbeUsage = i3559[30]
  return i3558
}

Deserializers["UnityEngine.U2D.Animation.SpriteSkin"] = function (request, data, root) {
  var i3564 = root || request.c( 'UnityEngine.U2D.Animation.SpriteSkin' )
  var i3565 = data
  request.r(i3565[0], i3565[1], 0, i3564, 'm_RootBone')
  var i3567 = i3565[2]
  var i3566 = []
  for(var i = 0; i < i3567.length; i += 2) {
  request.r(i3567[i + 0], i3567[i + 1], 2, i3566, '')
  }
  i3564.m_BoneTransforms = i3566
  i3564.m_AlwaysUpdate = !!i3565[3]
  i3564.m_AutoRebind = !!i3565[4]
  return i3564
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.TrailRenderer"] = function (request, data, root) {
  var i3568 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.TrailRenderer' )
  var i3569 = data
  var i3571 = i3569[0]
  var i3570 = []
  for(var i = 0; i < i3571.length; i += 3) {
    i3570.push( new pc.Vec3( i3571[i + 0], i3571[i + 1], i3571[i + 2] ) );
  }
  i3568.positions = i3570
  i3568.positionCount = i3569[1]
  i3568.time = i3569[2]
  i3568.startWidth = i3569[3]
  i3568.endWidth = i3569[4]
  i3568.widthMultiplier = i3569[5]
  i3568.autodestruct = !!i3569[6]
  i3568.emitting = !!i3569[7]
  i3568.numCornerVertices = i3569[8]
  i3568.numCapVertices = i3569[9]
  i3568.minVertexDistance = i3569[10]
  i3568.colorGradient = i3569[11] ? new pc.ColorGradient(i3569[11][0], i3569[11][1], i3569[11][2]) : null
  i3568.startColor = new pc.Color(i3569[12], i3569[13], i3569[14], i3569[15])
  i3568.endColor = new pc.Color(i3569[16], i3569[17], i3569[18], i3569[19])
  i3568.generateLightingData = !!i3569[20]
  i3568.textureMode = i3569[21]
  i3568.alignment = i3569[22]
  i3568.widthCurve = new pc.AnimationCurve( { keys_flow: i3569[23] } )
  i3568.enabled = !!i3569[24]
  request.r(i3569[25], i3569[26], 0, i3568, 'sharedMaterial')
  var i3573 = i3569[27]
  var i3572 = []
  for(var i = 0; i < i3573.length; i += 2) {
  request.r(i3573[i + 0], i3573[i + 1], 2, i3572, '')
  }
  i3568.sharedMaterials = i3572
  i3568.receiveShadows = !!i3569[28]
  i3568.shadowCastingMode = i3569[29]
  i3568.sortingLayerID = i3569[30]
  i3568.sortingOrder = i3569[31]
  i3568.lightmapIndex = i3569[32]
  i3568.lightmapSceneIndex = i3569[33]
  i3568.lightmapScaleOffset = new pc.Vec4( i3569[34], i3569[35], i3569[36], i3569[37] )
  i3568.lightProbeUsage = i3569[38]
  i3568.reflectionProbeUsage = i3569[39]
  return i3568
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.LineRenderer"] = function (request, data, root) {
  var i3576 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.LineRenderer' )
  var i3577 = data
  i3576.textureMode = i3577[0]
  i3576.alignment = i3577[1]
  i3576.widthCurve = new pc.AnimationCurve( { keys_flow: i3577[2] } )
  i3576.colorGradient = i3577[3] ? new pc.ColorGradient(i3577[3][0], i3577[3][1], i3577[3][2]) : null
  var i3579 = i3577[4]
  var i3578 = []
  for(var i = 0; i < i3579.length; i += 3) {
    i3578.push( new pc.Vec3( i3579[i + 0], i3579[i + 1], i3579[i + 2] ) );
  }
  i3576.positions = i3578
  i3576.positionCount = i3577[5]
  i3576.widthMultiplier = i3577[6]
  i3576.startWidth = i3577[7]
  i3576.endWidth = i3577[8]
  i3576.numCornerVertices = i3577[9]
  i3576.numCapVertices = i3577[10]
  i3576.useWorldSpace = !!i3577[11]
  i3576.loop = !!i3577[12]
  i3576.startColor = new pc.Color(i3577[13], i3577[14], i3577[15], i3577[16])
  i3576.endColor = new pc.Color(i3577[17], i3577[18], i3577[19], i3577[20])
  i3576.generateLightingData = !!i3577[21]
  i3576.enabled = !!i3577[22]
  request.r(i3577[23], i3577[24], 0, i3576, 'sharedMaterial')
  var i3581 = i3577[25]
  var i3580 = []
  for(var i = 0; i < i3581.length; i += 2) {
  request.r(i3581[i + 0], i3581[i + 1], 2, i3580, '')
  }
  i3576.sharedMaterials = i3580
  i3576.receiveShadows = !!i3577[26]
  i3576.shadowCastingMode = i3577[27]
  i3576.sortingLayerID = i3577[28]
  i3576.sortingOrder = i3577[29]
  i3576.lightmapIndex = i3577[30]
  i3576.lightmapSceneIndex = i3577[31]
  i3576.lightmapScaleOffset = new pc.Vec4( i3577[32], i3577[33], i3577[34], i3577[35] )
  i3576.lightProbeUsage = i3577[36]
  i3576.reflectionProbeUsage = i3577[37]
  return i3576
}

Deserializers["StaticFixedPipe"] = function (request, data, root) {
  var i3582 = root || request.c( 'StaticFixedPipe' )
  var i3583 = data
  request.r(i3583[0], i3583[1], 0, i3582, 'lineRenderer')
  request.r(i3583[2], i3583[3], 0, i3582, 'toolTransform')
  request.r(i3583[4], i3583[5], 0, i3582, 'toolDirectionPoint')
  request.r(i3583[6], i3583[7], 0, i3582, 'fixedEndPoint')
  i3582.segmentCount = i3583[8]
  i3582.totalLength = i3583[9]
  i3582.constraintIterations = i3583[10]
  i3582.gravity = new pc.Vec3( i3583[11], i3583[12], i3583[13] )
  i3582.pipeWidth = i3583[14]
  return i3582
}

Deserializers["DG.Tweening.DOTweenAnimation"] = function (request, data, root) {
  var i3584 = root || request.c( 'DG.Tweening.DOTweenAnimation' )
  var i3585 = data
  i3584.targetIsSelf = !!i3585[0]
  request.r(i3585[1], i3585[2], 0, i3584, 'targetGO')
  i3584.tweenTargetIsTargetGO = !!i3585[3]
  i3584.delay = i3585[4]
  i3584.duration = i3585[5]
  i3584.easeType = i3585[6]
  i3584.easeCurve = new pc.AnimationCurve( { keys_flow: i3585[7] } )
  i3584.loopType = i3585[8]
  i3584.loops = i3585[9]
  i3584.id = i3585[10]
  i3584.isRelative = !!i3585[11]
  i3584.isFrom = !!i3585[12]
  i3584.isIndependentUpdate = !!i3585[13]
  i3584.autoKill = !!i3585[14]
  i3584.autoGenerate = !!i3585[15]
  i3584.isActive = !!i3585[16]
  i3584.isValid = !!i3585[17]
  request.r(i3585[18], i3585[19], 0, i3584, 'target')
  i3584.animationType = i3585[20]
  i3584.targetType = i3585[21]
  i3584.forcedTargetType = i3585[22]
  i3584.autoPlay = !!i3585[23]
  i3584.useTargetAsV3 = !!i3585[24]
  i3584.endValueFloat = i3585[25]
  i3584.endValueV3 = new pc.Vec3( i3585[26], i3585[27], i3585[28] )
  i3584.endValueV2 = new pc.Vec2( i3585[29], i3585[30] )
  i3584.endValueColor = new pc.Color(i3585[31], i3585[32], i3585[33], i3585[34])
  i3584.endValueString = i3585[35]
  i3584.endValueRect = UnityEngine.Rect.MinMaxRect(i3585[36], i3585[37], i3585[38], i3585[39])
  request.r(i3585[40], i3585[41], 0, i3584, 'endValueTransform')
  i3584.optionalBool0 = !!i3585[42]
  i3584.optionalBool1 = !!i3585[43]
  i3584.optionalFloat0 = i3585[44]
  i3584.optionalInt0 = i3585[45]
  i3584.optionalRotationMode = i3585[46]
  i3584.optionalScrambleMode = i3585[47]
  i3584.optionalShakeRandomnessMode = i3585[48]
  i3584.optionalString = i3585[49]
  i3584.updateType = i3585[50]
  i3584.isSpeedBased = !!i3585[51]
  i3584.hasOnStart = !!i3585[52]
  i3584.hasOnPlay = !!i3585[53]
  i3584.hasOnUpdate = !!i3585[54]
  i3584.hasOnStepComplete = !!i3585[55]
  i3584.hasOnComplete = !!i3585[56]
  i3584.hasOnTweenCreated = !!i3585[57]
  i3584.hasOnRewind = !!i3585[58]
  i3584.onStart = request.d('UnityEngine.Events.UnityEvent', i3585[59], i3584.onStart)
  i3584.onPlay = request.d('UnityEngine.Events.UnityEvent', i3585[60], i3584.onPlay)
  i3584.onUpdate = request.d('UnityEngine.Events.UnityEvent', i3585[61], i3584.onUpdate)
  i3584.onStepComplete = request.d('UnityEngine.Events.UnityEvent', i3585[62], i3584.onStepComplete)
  i3584.onComplete = request.d('UnityEngine.Events.UnityEvent', i3585[63], i3584.onComplete)
  i3584.onTweenCreated = request.d('UnityEngine.Events.UnityEvent', i3585[64], i3584.onTweenCreated)
  i3584.onRewind = request.d('UnityEngine.Events.UnityEvent', i3585[65], i3584.onRewind)
  return i3584
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D"] = function (request, data, root) {
  var i3586 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D' )
  var i3587 = data
  i3586.usedByComposite = !!i3587[0]
  i3586.autoTiling = !!i3587[1]
  i3586.size = new pc.Vec2( i3587[2], i3587[3] )
  i3586.edgeRadius = i3587[4]
  i3586.enabled = !!i3587[5]
  i3586.isTrigger = !!i3587[6]
  i3586.usedByEffector = !!i3587[7]
  i3586.density = i3587[8]
  i3586.offset = new pc.Vec2( i3587[9], i3587[10] )
  request.r(i3587[11], i3587[12], 0, i3586, 'material')
  return i3586
}

Deserializers["BasicDrag"] = function (request, data, root) {
  var i3588 = root || request.c( 'BasicDrag' )
  var i3589 = data
  i3588.canDrag = !!i3589[0]
  i3588.dragByDelta = !!i3589[1]
  i3588.isDragging = !!i3589[2]
  i3588.moveWithPointer = !!i3589[3]
  i3588.canReturn = !!i3589[4]
  i3588.jumpOnReturn = !!i3589[5]
  i3588.returnTime = i3589[6]
  i3588.Tool_Offset = new pc.Vec3( i3589[7], i3589[8], i3589[9] )
  i3588.canScaleIncrease = !!i3589[10]
  i3588.Self_ScaleNew = new pc.Vec3( i3589[11], i3589[12], i3589[13] )
  i3588.canRotateOnPick = !!i3589[14]
  i3588.startRot = new pc.Vec3( i3589[15], i3589[16], i3589[17] )
  i3588.newRot = new pc.Vec3( i3589[18], i3589[19], i3589[20] )
  var i3591 = i3589[21]
  var i3590 = []
  for(var i = 0; i < i3591.length; i += 2) {
  request.r(i3591[i + 0], i3591[i + 1], 2, i3590, '')
  }
  i3588.childSprite = i3590
  request.r(i3589[22], i3589[23], 0, i3588, 'ToolSelectClip')
  request.r(i3589[24], i3589[25], 0, i3588, 'ToolLoopClip')
  request.r(i3589[26], i3589[27], 0, i3588, 'thisParticles')
  i3588.onDragparticle = !!i3589[28]
  request.r(i3589[29], i3589[30], 0, i3588, 'dragParticles')
  request.r(i3589[31], i3589[32], 0, i3588, 'anim')
  i3588.startPos = new pc.Vec3( i3589[33], i3589[34], i3589[35] )
  i3588.startScale = new pc.Vec3( i3589[36], i3589[37], i3589[38] )
  i3588.Vibration = !!i3589[39]
  i3588.isPlacedCannotMove = !!i3589[40]
  i3588.isObjectMovingWhileDragging = !!i3589[41]
  i3588.OnMouseDownEvent = request.d('System.Action', i3589[42], i3588.OnMouseDownEvent)
  i3588.OnMouseUpEvent = request.d('System.Action', i3589[43], i3588.OnMouseUpEvent)
  i3588.ProgStartEvent = request.d('System.Action', i3589[44], i3588.ProgStartEvent)
  i3588.ProgEndEvent = request.d('System.Action', i3589[45], i3588.ProgEndEvent)
  i3588.canCallMouseUpWhenGamePaused = !!i3589[46]
  i3588.ClampX_L = i3589[47]
  i3588.ClampX_H = i3589[48]
  i3588.ClampY_L = i3589[49]
  i3588.ClampY_H = i3589[50]
  i3588.startOrder = i3589[51]
  i3588.dontResetItIsInCollider = !!i3589[52]
  request.r(i3589[53], i3589[54], 0, i3588, 'thisCollider')
  request.r(i3589[55], i3589[56], 0, i3588, 'thisSR')
  i3588.OnMouseDownEventIndependentFromCanDrag = request.d('System.Action', i3589[57], i3588.OnMouseDownEventIndependentFromCanDrag)
  return i3588
}

Deserializers["System.Action"] = function (request, data, root) {
  var i3594 = root || request.c( 'System.Action' )
  var i3595 = data
  return i3594
}

Deserializers["BD_Clamp"] = function (request, data, root) {
  var i3596 = root || request.c( 'BD_Clamp' )
  var i3597 = data
  i3596.ClampX_L = i3597[0]
  i3596.ClampX_H = i3597[1]
  i3596.ClampY_L = i3597[2]
  i3596.ClampY_H = i3597[3]
  return i3596
}

Deserializers["OutlinePulse"] = function (request, data, root) {
  var i3598 = root || request.c( 'OutlinePulse' )
  var i3599 = data
  i3598.smallThickness = i3599[0]
  i3598.largeThickness = i3599[1]
  i3598.transitionSpeed = i3599[2]
  i3598.animationSpeed = i3599[3]
  i3598.isThickOutline = !!i3599[4]
  i3598.animate = !!i3599[5]
  i3598.hideSpriteOnly = !!i3599[6]
  return i3598
}

Deserializers["BD_ItemPick"] = function (request, data, root) {
  var i3600 = root || request.c( 'BD_ItemPick' )
  var i3601 = data
  request.r(i3601[0], i3601[1], 0, i3600, 'Tool')
  request.r(i3601[2], i3601[3], 0, i3600, 'Outline')
  request.r(i3601[4], i3601[5], 0, i3600, 'itemRend')
  request.r(i3601[6], i3601[7], 0, i3600, 'pick_sp')
  i3600.OnTap = request.d('UnityEngine.Events.UnityEvent', i3601[8], i3600.OnTap)
  i3600.OnComplete = request.d('UnityEngine.Events.UnityEvent', i3601[9], i3600.OnComplete)
  request.r(i3601[10], i3601[11], 0, i3600, 'Clip')
  i3600.minDragDistance = i3601[12]
  i3600.isTaped = !!i3601[13]
  return i3600
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i3602 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i3603 = data
  request.r(i3603[0], i3603[1], 0, i3602, 'm_ObjectArgument')
  i3602.m_ObjectArgumentAssemblyTypeName = i3603[2]
  i3602.m_IntArgument = i3603[3]
  i3602.m_FloatArgument = i3603[4]
  i3602.m_StringArgument = i3603[5]
  i3602.m_BoolArgument = !!i3603[6]
  return i3602
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystem"] = function (request, data, root) {
  var i3604 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystem' )
  var i3605 = data
  i3604.main = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule', i3605[0], i3604.main)
  i3604.colorBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule', i3605[1], i3604.colorBySpeed)
  i3604.colorOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule', i3605[2], i3604.colorOverLifetime)
  i3604.emission = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule', i3605[3], i3604.emission)
  i3604.rotationBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule', i3605[4], i3604.rotationBySpeed)
  i3604.rotationOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule', i3605[5], i3604.rotationOverLifetime)
  i3604.shape = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule', i3605[6], i3604.shape)
  i3604.sizeBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule', i3605[7], i3604.sizeBySpeed)
  i3604.sizeOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule', i3605[8], i3604.sizeOverLifetime)
  i3604.textureSheetAnimation = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule', i3605[9], i3604.textureSheetAnimation)
  i3604.velocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule', i3605[10], i3604.velocityOverLifetime)
  i3604.noise = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule', i3605[11], i3604.noise)
  i3604.inheritVelocity = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule', i3605[12], i3604.inheritVelocity)
  i3604.forceOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule', i3605[13], i3604.forceOverLifetime)
  i3604.limitVelocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule', i3605[14], i3604.limitVelocityOverLifetime)
  i3604.useAutoRandomSeed = !!i3605[15]
  i3604.randomSeed = i3605[16]
  return i3604
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule"] = function (request, data, root) {
  var i3606 = root || new pc.ParticleSystemMain()
  var i3607 = data
  i3606.duration = i3607[0]
  i3606.loop = !!i3607[1]
  i3606.prewarm = !!i3607[2]
  i3606.startDelay = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3607[3], i3606.startDelay)
  i3606.startLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3607[4], i3606.startLifetime)
  i3606.startSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3607[5], i3606.startSpeed)
  i3606.startSize3D = !!i3607[6]
  i3606.startSizeX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3607[7], i3606.startSizeX)
  i3606.startSizeY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3607[8], i3606.startSizeY)
  i3606.startSizeZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3607[9], i3606.startSizeZ)
  i3606.startRotation3D = !!i3607[10]
  i3606.startRotationX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3607[11], i3606.startRotationX)
  i3606.startRotationY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3607[12], i3606.startRotationY)
  i3606.startRotationZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3607[13], i3606.startRotationZ)
  i3606.startColor = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i3607[14], i3606.startColor)
  i3606.gravityModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3607[15], i3606.gravityModifier)
  i3606.simulationSpace = i3607[16]
  request.r(i3607[17], i3607[18], 0, i3606, 'customSimulationSpace')
  i3606.simulationSpeed = i3607[19]
  i3606.useUnscaledTime = !!i3607[20]
  i3606.scalingMode = i3607[21]
  i3606.playOnAwake = !!i3607[22]
  i3606.maxParticles = i3607[23]
  i3606.emitterVelocityMode = i3607[24]
  i3606.stopAction = i3607[25]
  return i3606
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve"] = function (request, data, root) {
  var i3608 = root || new pc.MinMaxCurve()
  var i3609 = data
  i3608.mode = i3609[0]
  i3608.curveMin = new pc.AnimationCurve( { keys_flow: i3609[1] } )
  i3608.curveMax = new pc.AnimationCurve( { keys_flow: i3609[2] } )
  i3608.curveMultiplier = i3609[3]
  i3608.constantMin = i3609[4]
  i3608.constantMax = i3609[5]
  return i3608
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient"] = function (request, data, root) {
  var i3610 = root || new pc.MinMaxGradient()
  var i3611 = data
  i3610.mode = i3611[0]
  i3610.gradientMin = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i3611[1], i3610.gradientMin)
  i3610.gradientMax = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i3611[2], i3610.gradientMax)
  i3610.colorMin = new pc.Color(i3611[3], i3611[4], i3611[5], i3611[6])
  i3610.colorMax = new pc.Color(i3611[7], i3611[8], i3611[9], i3611[10])
  return i3610
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient"] = function (request, data, root) {
  var i3612 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient' )
  var i3613 = data
  i3612.mode = i3613[0]
  var i3615 = i3613[1]
  var i3614 = []
  for(var i = 0; i < i3615.length; i += 1) {
    i3614.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey', i3615[i + 0]) );
  }
  i3612.colorKeys = i3614
  var i3617 = i3613[2]
  var i3616 = []
  for(var i = 0; i < i3617.length; i += 1) {
    i3616.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey', i3617[i + 0]) );
  }
  i3612.alphaKeys = i3616
  return i3612
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule"] = function (request, data, root) {
  var i3618 = root || new pc.ParticleSystemColorBySpeed()
  var i3619 = data
  i3618.enabled = !!i3619[0]
  i3618.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i3619[1], i3618.color)
  i3618.range = new pc.Vec2( i3619[2], i3619[3] )
  return i3618
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey"] = function (request, data, root) {
  var i3622 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey' )
  var i3623 = data
  i3622.color = new pc.Color(i3623[0], i3623[1], i3623[2], i3623[3])
  i3622.time = i3623[4]
  return i3622
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey"] = function (request, data, root) {
  var i3626 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey' )
  var i3627 = data
  i3626.alpha = i3627[0]
  i3626.time = i3627[1]
  return i3626
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule"] = function (request, data, root) {
  var i3628 = root || new pc.ParticleSystemColorOverLifetime()
  var i3629 = data
  i3628.enabled = !!i3629[0]
  i3628.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i3629[1], i3628.color)
  return i3628
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule"] = function (request, data, root) {
  var i3630 = root || new pc.ParticleSystemEmitter()
  var i3631 = data
  i3630.enabled = !!i3631[0]
  i3630.rateOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3631[1], i3630.rateOverTime)
  i3630.rateOverDistance = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3631[2], i3630.rateOverDistance)
  var i3633 = i3631[3]
  var i3632 = []
  for(var i = 0; i < i3633.length; i += 1) {
    i3632.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst', i3633[i + 0]) );
  }
  i3630.bursts = i3632
  return i3630
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst"] = function (request, data, root) {
  var i3636 = root || new pc.ParticleSystemBurst()
  var i3637 = data
  i3636.count = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3637[0], i3636.count)
  i3636.cycleCount = i3637[1]
  i3636.minCount = i3637[2]
  i3636.maxCount = i3637[3]
  i3636.repeatInterval = i3637[4]
  i3636.time = i3637[5]
  return i3636
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule"] = function (request, data, root) {
  var i3638 = root || new pc.ParticleSystemRotationBySpeed()
  var i3639 = data
  i3638.enabled = !!i3639[0]
  i3638.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3639[1], i3638.x)
  i3638.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3639[2], i3638.y)
  i3638.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3639[3], i3638.z)
  i3638.separateAxes = !!i3639[4]
  i3638.range = new pc.Vec2( i3639[5], i3639[6] )
  return i3638
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule"] = function (request, data, root) {
  var i3640 = root || new pc.ParticleSystemRotationOverLifetime()
  var i3641 = data
  i3640.enabled = !!i3641[0]
  i3640.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3641[1], i3640.x)
  i3640.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3641[2], i3640.y)
  i3640.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3641[3], i3640.z)
  i3640.separateAxes = !!i3641[4]
  return i3640
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule"] = function (request, data, root) {
  var i3642 = root || new pc.ParticleSystemShape()
  var i3643 = data
  i3642.enabled = !!i3643[0]
  i3642.shapeType = i3643[1]
  i3642.randomDirectionAmount = i3643[2]
  i3642.sphericalDirectionAmount = i3643[3]
  i3642.randomPositionAmount = i3643[4]
  i3642.alignToDirection = !!i3643[5]
  i3642.radius = i3643[6]
  i3642.radiusMode = i3643[7]
  i3642.radiusSpread = i3643[8]
  i3642.radiusSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3643[9], i3642.radiusSpeed)
  i3642.radiusThickness = i3643[10]
  i3642.angle = i3643[11]
  i3642.length = i3643[12]
  i3642.boxThickness = new pc.Vec3( i3643[13], i3643[14], i3643[15] )
  i3642.meshShapeType = i3643[16]
  request.r(i3643[17], i3643[18], 0, i3642, 'mesh')
  request.r(i3643[19], i3643[20], 0, i3642, 'meshRenderer')
  request.r(i3643[21], i3643[22], 0, i3642, 'skinnedMeshRenderer')
  i3642.useMeshMaterialIndex = !!i3643[23]
  i3642.meshMaterialIndex = i3643[24]
  i3642.useMeshColors = !!i3643[25]
  i3642.normalOffset = i3643[26]
  i3642.arc = i3643[27]
  i3642.arcMode = i3643[28]
  i3642.arcSpread = i3643[29]
  i3642.arcSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3643[30], i3642.arcSpeed)
  i3642.donutRadius = i3643[31]
  i3642.position = new pc.Vec3( i3643[32], i3643[33], i3643[34] )
  i3642.rotation = new pc.Vec3( i3643[35], i3643[36], i3643[37] )
  i3642.scale = new pc.Vec3( i3643[38], i3643[39], i3643[40] )
  return i3642
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule"] = function (request, data, root) {
  var i3644 = root || new pc.ParticleSystemSizeBySpeed()
  var i3645 = data
  i3644.enabled = !!i3645[0]
  i3644.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3645[1], i3644.x)
  i3644.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3645[2], i3644.y)
  i3644.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3645[3], i3644.z)
  i3644.separateAxes = !!i3645[4]
  i3644.range = new pc.Vec2( i3645[5], i3645[6] )
  return i3644
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule"] = function (request, data, root) {
  var i3646 = root || new pc.ParticleSystemSizeOverLifetime()
  var i3647 = data
  i3646.enabled = !!i3647[0]
  i3646.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3647[1], i3646.x)
  i3646.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3647[2], i3646.y)
  i3646.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3647[3], i3646.z)
  i3646.separateAxes = !!i3647[4]
  return i3646
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule"] = function (request, data, root) {
  var i3648 = root || new pc.ParticleSystemTextureSheetAnimation()
  var i3649 = data
  i3648.enabled = !!i3649[0]
  i3648.mode = i3649[1]
  i3648.animation = i3649[2]
  i3648.numTilesX = i3649[3]
  i3648.numTilesY = i3649[4]
  i3648.useRandomRow = !!i3649[5]
  i3648.frameOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3649[6], i3648.frameOverTime)
  i3648.startFrame = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3649[7], i3648.startFrame)
  i3648.cycleCount = i3649[8]
  i3648.rowIndex = i3649[9]
  i3648.flipU = i3649[10]
  i3648.flipV = i3649[11]
  i3648.spriteCount = i3649[12]
  var i3651 = i3649[13]
  var i3650 = []
  for(var i = 0; i < i3651.length; i += 2) {
  request.r(i3651[i + 0], i3651[i + 1], 2, i3650, '')
  }
  i3648.sprites = i3650
  return i3648
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule"] = function (request, data, root) {
  var i3654 = root || new pc.ParticleSystemVelocityOverLifetime()
  var i3655 = data
  i3654.enabled = !!i3655[0]
  i3654.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3655[1], i3654.x)
  i3654.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3655[2], i3654.y)
  i3654.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3655[3], i3654.z)
  i3654.radial = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3655[4], i3654.radial)
  i3654.speedModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3655[5], i3654.speedModifier)
  i3654.space = i3655[6]
  i3654.orbitalX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3655[7], i3654.orbitalX)
  i3654.orbitalY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3655[8], i3654.orbitalY)
  i3654.orbitalZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3655[9], i3654.orbitalZ)
  i3654.orbitalOffsetX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3655[10], i3654.orbitalOffsetX)
  i3654.orbitalOffsetY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3655[11], i3654.orbitalOffsetY)
  i3654.orbitalOffsetZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3655[12], i3654.orbitalOffsetZ)
  return i3654
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule"] = function (request, data, root) {
  var i3656 = root || new pc.ParticleSystemNoise()
  var i3657 = data
  i3656.enabled = !!i3657[0]
  i3656.separateAxes = !!i3657[1]
  i3656.strengthX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3657[2], i3656.strengthX)
  i3656.strengthY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3657[3], i3656.strengthY)
  i3656.strengthZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3657[4], i3656.strengthZ)
  i3656.frequency = i3657[5]
  i3656.damping = !!i3657[6]
  i3656.octaveCount = i3657[7]
  i3656.octaveMultiplier = i3657[8]
  i3656.octaveScale = i3657[9]
  i3656.quality = i3657[10]
  i3656.scrollSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3657[11], i3656.scrollSpeed)
  i3656.scrollSpeedMultiplier = i3657[12]
  i3656.remapEnabled = !!i3657[13]
  i3656.remapX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3657[14], i3656.remapX)
  i3656.remapY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3657[15], i3656.remapY)
  i3656.remapZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3657[16], i3656.remapZ)
  i3656.positionAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3657[17], i3656.positionAmount)
  i3656.rotationAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3657[18], i3656.rotationAmount)
  i3656.sizeAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3657[19], i3656.sizeAmount)
  return i3656
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule"] = function (request, data, root) {
  var i3658 = root || new pc.ParticleSystemInheritVelocity()
  var i3659 = data
  i3658.enabled = !!i3659[0]
  i3658.mode = i3659[1]
  i3658.curve = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3659[2], i3658.curve)
  return i3658
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule"] = function (request, data, root) {
  var i3660 = root || new pc.ParticleSystemForceOverLifetime()
  var i3661 = data
  i3660.enabled = !!i3661[0]
  i3660.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3661[1], i3660.x)
  i3660.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3661[2], i3660.y)
  i3660.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3661[3], i3660.z)
  i3660.space = i3661[4]
  i3660.randomized = !!i3661[5]
  return i3660
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule"] = function (request, data, root) {
  var i3662 = root || new pc.ParticleSystemLimitVelocityOverLifetime()
  var i3663 = data
  i3662.enabled = !!i3663[0]
  i3662.limit = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3663[1], i3662.limit)
  i3662.limitX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3663[2], i3662.limitX)
  i3662.limitY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3663[3], i3662.limitY)
  i3662.limitZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3663[4], i3662.limitZ)
  i3662.dampen = i3663[5]
  i3662.separateAxes = !!i3663[6]
  i3662.space = i3663[7]
  i3662.drag = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3663[8], i3662.drag)
  i3662.multiplyDragByParticleSize = !!i3663[9]
  i3662.multiplyDragByParticleVelocity = !!i3663[10]
  return i3662
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer"] = function (request, data, root) {
  var i3664 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer' )
  var i3665 = data
  request.r(i3665[0], i3665[1], 0, i3664, 'mesh')
  i3664.meshCount = i3665[2]
  i3664.activeVertexStreamsCount = i3665[3]
  i3664.alignment = i3665[4]
  i3664.renderMode = i3665[5]
  i3664.sortMode = i3665[6]
  i3664.lengthScale = i3665[7]
  i3664.velocityScale = i3665[8]
  i3664.cameraVelocityScale = i3665[9]
  i3664.normalDirection = i3665[10]
  i3664.sortingFudge = i3665[11]
  i3664.minParticleSize = i3665[12]
  i3664.maxParticleSize = i3665[13]
  i3664.pivot = new pc.Vec3( i3665[14], i3665[15], i3665[16] )
  request.r(i3665[17], i3665[18], 0, i3664, 'trailMaterial')
  i3664.applyActiveColorSpace = !!i3665[19]
  i3664.enabled = !!i3665[20]
  request.r(i3665[21], i3665[22], 0, i3664, 'sharedMaterial')
  var i3667 = i3665[23]
  var i3666 = []
  for(var i = 0; i < i3667.length; i += 2) {
  request.r(i3667[i + 0], i3667[i + 1], 2, i3666, '')
  }
  i3664.sharedMaterials = i3666
  i3664.receiveShadows = !!i3665[24]
  i3664.shadowCastingMode = i3665[25]
  i3664.sortingLayerID = i3665[26]
  i3664.sortingOrder = i3665[27]
  i3664.lightmapIndex = i3665[28]
  i3664.lightmapSceneIndex = i3665[29]
  i3664.lightmapScaleOffset = new pc.Vec4( i3665[30], i3665[31], i3665[32], i3665[33] )
  i3664.lightProbeUsage = i3665[34]
  i3664.reflectionProbeUsage = i3665[35]
  return i3664
}

Deserializers["BD_Sticky"] = function (request, data, root) {
  var i3668 = root || request.c( 'BD_Sticky' )
  var i3669 = data
  request.r(i3669[0], i3669[1], 0, i3668, 'anim')
  i3668.isVerticlePull = !!i3669[2]
  request.r(i3669[3], i3669[4], 0, i3668, 'pickSfx')
  request.r(i3669[5], i3669[6], 0, i3668, 'pulledClip')
  request.r(i3669[7], i3669[8], 0, i3668, 'pullSource')
  i3668.OnComplete = request.d('UnityEngine.Events.UnityEvent', i3669[9], i3668.OnComplete)
  i3668.changeLayerPick = !!i3669[10]
  request.r(i3669[11], i3669[12], 0, i3668, 'sp_rendr')
  i3668.def_layerNo = i3669[13]
  i3668.tar_LayerNo = i3669[14]
  i3668.direction = i3669[15]
  i3668.dragThreshold = i3669[16]
  i3668.pullDistanceToFree = i3669[17]
  i3668.returnSpeed = i3669[18]
  i3668.resistance = i3669[19]
  var i3671 = i3669[20]
  var i3670 = []
  for(var i = 0; i < i3671.length; i += 2) {
  request.r(i3671[i + 0], i3671[i + 1], 2, i3670, '')
  }
  i3668.StartBones = i3670
  var i3673 = i3669[21]
  var i3672 = []
  for(var i = 0; i < i3673.length; i += 2) {
  request.r(i3673[i + 0], i3673[i + 1], 2, i3672, '')
  }
  i3668.EndBones = i3672
  request.r(i3669[22], i3669[23], 0, i3668, 'BonePivot')
  return i3668
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i3674 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i3675 = data
  request.r(i3675[0], i3675[1], 0, i3674, 'clip')
  request.r(i3675[2], i3675[3], 0, i3674, 'outputAudioMixerGroup')
  i3674.playOnAwake = !!i3675[4]
  i3674.loop = !!i3675[5]
  i3674.time = i3675[6]
  i3674.volume = i3675[7]
  i3674.pitch = i3675[8]
  i3674.enabled = !!i3675[9]
  return i3674
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CircleCollider2D"] = function (request, data, root) {
  var i3676 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CircleCollider2D' )
  var i3677 = data
  i3676.radius = i3677[0]
  i3676.enabled = !!i3677[1]
  i3676.isTrigger = !!i3677[2]
  i3676.usedByEffector = !!i3677[3]
  i3676.density = i3677[4]
  i3676.offset = new pc.Vec2( i3677[5], i3677[6] )
  request.r(i3677[7], i3677[8], 0, i3676, 'material')
  return i3676
}

Deserializers["PlayParticlesOnCollision"] = function (request, data, root) {
  var i3678 = root || request.c( 'PlayParticlesOnCollision' )
  var i3679 = data
  request.r(i3679[0], i3679[1], 0, i3678, 'Target')
  request.r(i3679[2], i3679[3], 0, i3678, 'ParticlePrefab')
  i3678.destroyIt = !!i3679[4]
  i3678.stayAtPlace = !!i3679[5]
  i3678.disableOnCollision = !!i3679[6]
  i3678.OnCollisionEvent = request.d('UnityEngine.Events.UnityEvent', i3679[7], i3678.OnCollisionEvent)
  return i3678
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteMask"] = function (request, data, root) {
  var i3680 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteMask' )
  var i3681 = data
  i3680.frontSortingLayerID = i3681[0]
  i3680.frontSortingOrder = i3681[1]
  i3680.backSortingLayerID = i3681[2]
  i3680.backSortingOrder = i3681[3]
  i3680.alphaCutoff = i3681[4]
  request.r(i3681[5], i3681[6], 0, i3680, 'sprite')
  i3680.tileMode = i3681[7]
  i3680.isCustomRangeActive = !!i3681[8]
  i3680.spriteSortPoint = i3681[9]
  i3680.enabled = !!i3681[10]
  request.r(i3681[11], i3681[12], 0, i3680, 'sharedMaterial')
  var i3683 = i3681[13]
  var i3682 = []
  for(var i = 0; i < i3683.length; i += 2) {
  request.r(i3683[i + 0], i3683[i + 1], 2, i3682, '')
  }
  i3680.sharedMaterials = i3682
  i3680.receiveShadows = !!i3681[14]
  i3680.shadowCastingMode = i3681[15]
  i3680.sortingLayerID = i3681[16]
  i3680.sortingOrder = i3681[17]
  i3680.lightmapIndex = i3681[18]
  i3680.lightmapSceneIndex = i3681[19]
  i3680.lightmapScaleOffset = new pc.Vec4( i3681[20], i3681[21], i3681[22], i3681[23] )
  i3680.lightProbeUsage = i3681[24]
  i3680.reflectionProbeUsage = i3681[25]
  return i3680
}

Deserializers["PlayTweenOnHit"] = function (request, data, root) {
  var i3684 = root || request.c( 'PlayTweenOnHit' )
  var i3685 = data
  i3684.isContinueous = !!i3685[0]
  request.r(i3685[1], i3685[2], 0, i3684, 'tool')
  var i3687 = i3685[3]
  var i3686 = []
  for(var i = 0; i < i3687.length; i += 2) {
  request.r(i3687[i + 0], i3687[i + 1], 2, i3686, '')
  }
  i3684.animsToPlay = i3686
  request.r(i3685[4], i3685[5], 0, i3684, 'tipTarget')
  return i3684
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.PolygonCollider2D"] = function (request, data, root) {
  var i3690 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.PolygonCollider2D' )
  var i3691 = data
  i3690.usedByComposite = !!i3691[0]
  i3690.autoTiling = !!i3691[1]
  var i3693 = i3691[2]
  var i3692 = []
  for(var i = 0; i < i3693.length; i += 1) {
  var i3695 = i3693[i + 0]
  var i3694 = []
  for(var i = 0; i < i3695.length; i += 2) {
    i3694.push( new pc.Vec2( i3695[i + 0], i3695[i + 1] ) );
  }
    i3692.push( i3694 );
  }
  i3690.points = i3692
  i3690.enabled = !!i3691[3]
  i3690.isTrigger = !!i3691[4]
  i3690.usedByEffector = !!i3691[5]
  i3690.density = i3691[6]
  i3690.offset = new pc.Vec2( i3691[7], i3691[8] )
  request.r(i3691[9], i3691[10], 0, i3690, 'material')
  return i3690
}

Deserializers["PlaySfxOnCollision"] = function (request, data, root) {
  var i3702 = root || request.c( 'PlaySfxOnCollision' )
  var i3703 = data
  request.r(i3703[0], i3703[1], 0, i3702, 'Tip')
  i3702.Mode = i3703[2]
  request.r(i3703[3], i3703[4], 0, i3702, 'DragInput')
  request.r(i3703[5], i3703[6], 0, i3702, 'Source')
  i3702.startVol = i3703[7]
  i3702.targetVol = i3703[8]
  i3702.duration = i3703[9]
  request.r(i3703[10], i3703[11], 0, i3702, 'Particles')
  i3702.isDone = !!i3703[12]
  i3702.isInArea = !!i3703[13]
  i3702.isPlaying = !!i3703[14]
  return i3702
}

Deserializers["InteractableBones"] = function (request, data, root) {
  var i3704 = root || request.c( 'InteractableBones' )
  var i3705 = data
  request.r(i3705[0], i3705[1], 0, i3704, 'Tip')
  i3704.MoveAmount = i3705[2]
  i3704.MoveSpeed = i3705[3]
  i3704.ShakeSpeed = i3705[4]
  i3704.MovementThreshold = i3705[5]
  i3704.MoveX = !!i3705[6]
  i3704.MoveY = !!i3705[7]
  return i3704
}

Deserializers["WaypointFollower"] = function (request, data, root) {
  var i3706 = root || request.c( 'WaypointFollower' )
  var i3707 = data
  var i3709 = i3707[0]
  var i3708 = []
  for(var i = 0; i < i3709.length; i += 2) {
  request.r(i3709[i + 0], i3709[i + 1], 2, i3708, '')
  }
  i3706.waypoints = i3708
  i3706.speed = i3707[1]
  i3706.rotationSpeed = i3707[2]
  i3706.loop = !!i3707[3]
  i3706.reverse = !!i3707[4]
  i3706.canMove = !!i3707[5]
  request.r(i3707[6], i3707[7], 0, i3706, 'movingSfx')
  return i3706
}

Deserializers["BD_Action"] = function (request, data, root) {
  var i3710 = root || request.c( 'BD_Action' )
  var i3711 = data
  i3710.OnMouseDownEvent = request.d('UnityEngine.Events.UnityEvent', i3711[0], i3710.OnMouseDownEvent)
  i3710.OnMouseUpEvent = request.d('UnityEngine.Events.UnityEvent', i3711[1], i3710.OnMouseUpEvent)
  i3710.setToolLayer = !!i3711[2]
  request.r(i3711[3], i3711[4], 0, i3710, 'tool_SP')
  return i3710
}

Deserializers["BD_CameraFollow"] = function (request, data, root) {
  var i3712 = root || request.c( 'BD_CameraFollow' )
  var i3713 = data
  request.r(i3713[0], i3713[1], 0, i3712, 'Tool')
  request.r(i3713[2], i3713[3], 0, i3712, 'Pivot')
  i3712.FOV = i3713[4]
  i3712.Y_L = i3713[5]
  i3712.Y_H = i3713[6]
  i3712.X_L = i3713[7]
  i3712.X_R = i3713[8]
  i3712.startDelay = i3713[9]
  i3712.duration = i3713[10]
  return i3712
}

Deserializers["BD_ToolRotate"] = function (request, data, root) {
  var i3714 = root || request.c( 'BD_ToolRotate' )
  var i3715 = data
  i3714.startDelay = i3715[0]
  request.r(i3715[1], i3715[2], 0, i3714, 'Tool')
  request.r(i3715[3], i3715[4], 0, i3714, 'Clamp')
  request.r(i3715[5], i3715[6], 0, i3714, 'Pivot')
  i3714.MinAngle = new pc.Vec3( i3715[7], i3715[8], i3715[9] )
  i3714.MaxAngle = new pc.Vec3( i3715[10], i3715[11], i3715[12] )
  i3714.rotationSpeed = i3715[13]
  return i3714
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D"] = function (request, data, root) {
  var i3716 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D' )
  var i3717 = data
  i3716.bodyType = i3717[0]
  request.r(i3717[1], i3717[2], 0, i3716, 'material')
  i3716.simulated = !!i3717[3]
  i3716.useAutoMass = !!i3717[4]
  i3716.mass = i3717[5]
  i3716.drag = i3717[6]
  i3716.angularDrag = i3717[7]
  i3716.gravityScale = i3717[8]
  i3716.collisionDetectionMode = i3717[9]
  i3716.sleepMode = i3717[10]
  i3716.constraints = i3717[11]
  return i3716
}

Deserializers["BugKill_Tip"] = function (request, data, root) {
  var i3718 = root || request.c( 'BugKill_Tip' )
  var i3719 = data
  var i3721 = i3719[0]
  var i3720 = []
  for(var i = 0; i < i3721.length; i += 2) {
  request.r(i3721[i + 0], i3721[i + 1], 2, i3720, '')
  }
  i3718.targets = i3720
  i3718.waypointFollower = !!i3719[1]
  i3718.fallSpeed = i3719[2]
  i3718.totalTargets = i3719[3]
  i3718.killCount = i3719[4]
  request.r(i3719[5], i3719[6], 0, i3718, 'bugKillSfx')
  i3718.OnComplete = request.d('UnityEngine.Events.UnityEvent', i3719[7], i3718.OnComplete)
  return i3718
}

Deserializers["BD_Progress"] = function (request, data, root) {
  var i3724 = root || request.c( 'BD_Progress' )
  var i3725 = data
  var i3727 = i3725[0]
  var i3726 = []
  for(var i = 0; i < i3727.length; i += 1) {
    i3726.push( request.d('ScratchData', i3727[i + 0]) );
  }
  i3724.AllScratches = i3726
  i3724.OnScratchComplete = request.d('UnityEngine.Events.UnityEvent', i3725[1], i3724.OnScratchComplete)
  i3724.isProgDone = !!i3725[2]
  i3724.canCallComplete = !!i3725[3]
  i3724.CollectiveAppear = !!i3725[4]
  i3724.tipControl = !!i3725[5]
  i3724.progressControl = !!i3725[6]
  request.r(i3725[7], i3725[8], 0, i3724, 'thisDrag')
  i3724.CompleteEvent = request.d('System.Action', i3725[9], i3724.CompleteEvent)
  i3724.SubCompleteEvent = request.d('System.Action', i3725[10], i3724.SubCompleteEvent)
  return i3724
}

Deserializers["ScratchData"] = function (request, data, root) {
  var i3730 = root || request.c( 'ScratchData' )
  var i3731 = data
  request.r(i3731[0], i3731[1], 0, i3730, 'ScratchManager')
  i3730.scratchLimit = i3731[2]
  i3730.isComplete = !!i3731[3]
  return i3730
}

Deserializers["BD_ProgressHelper"] = function (request, data, root) {
  var i3732 = root || request.c( 'BD_ProgressHelper' )
  var i3733 = data
  request.r(i3733[0], i3733[1], 0, i3732, 'BD_Progress')
  request.r(i3733[2], i3733[3], 0, i3732, 'fadeSprite')
  i3732.fadeIn = !!i3733[4]
  return i3732
}

Deserializers["ActionOnTap"] = function (request, data, root) {
  var i3734 = root || request.c( 'ActionOnTap' )
  var i3735 = data
  i3734.OnTap = request.d('UnityEngine.Events.UnityEvent', i3735[0], i3734.OnTap)
  return i3734
}

Deserializers["_2dxFX_Wave"] = function (request, data, root) {
  var i3736 = root || request.c( '_2dxFX_Wave' )
  var i3737 = data
  request.r(i3737[0], i3737[1], 0, i3736, 'ForceMaterial')
  i3736.ActiveChange = !!i3737[2]
  i3736._Alpha = i3737[3]
  i3736._OffsetX = i3737[4]
  i3736._OffsetY = i3737[5]
  i3736._DistanceX = i3737[6]
  i3736._DistanceY = i3737[7]
  i3736._WaveTimeX = i3737[8]
  i3736._WaveTimeY = i3737[9]
  i3736.AutoPlayWaveX = !!i3737[10]
  i3736.AutoPlaySpeedX = i3737[11]
  i3736.AutoPlayWaveY = !!i3737[12]
  i3736.AutoPlaySpeedY = i3737[13]
  i3736.AutoRandom = !!i3737[14]
  i3736.AutoRandomRange = i3737[15]
  i3736.ShaderChange = i3737[16]
  return i3736
}

Deserializers["BD_SpriteChange"] = function (request, data, root) {
  var i3738 = root || request.c( 'BD_SpriteChange' )
  var i3739 = data
  request.r(i3739[0], i3739[1], 0, i3738, 'BD')
  request.r(i3739[2], i3739[3], 0, i3738, 'SR')
  request.r(i3739[4], i3739[5], 0, i3738, 'Default')
  request.r(i3739[6], i3739[7], 0, i3738, 'Picked')
  i3738.resetOnRelease = !!i3739[8]
  return i3738
}

Deserializers["BD_AnimatorDrag"] = function (request, data, root) {
  var i3740 = root || request.c( 'BD_AnimatorDrag' )
  var i3741 = data
  request.r(i3741[0], i3741[1], 0, i3740, 'BD')
  request.r(i3741[2], i3741[3], 0, i3740, 'anim')
  request.r(i3741[4], i3741[5], 0, i3740, 'Source')
  i3740.Vibration = !!i3741[6]
  i3740.isCompletable = !!i3741[7]
  i3740.completionThreshold = i3741[8]
  i3740.OnComplete = request.d('UnityEngine.Events.UnityEvent', i3741[9], i3740.OnComplete)
  return i3740
}

Deserializers["PlaceItem"] = function (request, data, root) {
  var i3742 = root || request.c( 'PlaceItem' )
  var i3743 = data
  request.r(i3743[0], i3743[1], 0, i3742, 'thisDrag')
  request.r(i3743[2], i3743[3], 0, i3742, 'Target')
  request.r(i3743[4], i3743[5], 0, i3742, 'Clip')
  i3742.jumpOnPlace = !!i3743[6]
  i3742.jumpHeight = i3743[7]
  i3742.jumpDuration = i3743[8]
  i3742.settleDuration = i3743[9]
  i3742.isPlaced = !!i3743[10]
  i3742.isInsideCollider = !!i3743[11]
  i3742.OnPlaced = request.d('UnityEngine.Events.UnityEvent', i3743[12], i3742.OnPlaced)
  return i3742
}

Deserializers["BD_Audio"] = function (request, data, root) {
  var i3744 = root || request.c( 'BD_Audio' )
  var i3745 = data
  request.r(i3745[0], i3745[1], 0, i3744, 'BD')
  request.r(i3745[2], i3745[3], 0, i3744, 'Source')
  i3744.shouldRestart = !!i3745[4]
  i3744.startVol = i3745[5]
  i3744.targetVol = i3745[6]
  i3744.duration = i3745[7]
  i3744.startDelay = i3745[8]
  return i3744
}

Deserializers["Level1_HairAnim"] = function (request, data, root) {
  var i3746 = root || request.c( 'Level1_HairAnim' )
  var i3747 = data
  i3746.holdDuration = i3747[0]
  request.r(i3747[1], i3747[2], 0, i3746, 'targetSprite')
  i3746.onHoldComplete = request.d('UnityEngine.Events.UnityEvent', i3747[3], i3746.onHoldComplete)
  i3746.isHolding = !!i3747[4]
  request.r(i3747[5], i3747[6], 0, i3746, 'targetObj')
  request.r(i3747[7], i3747[8], 0, i3746, 'thisTool')
  request.r(i3747[9], i3747[10], 0, i3746, 'thisToolTip')
  var i3749 = i3747[11]
  var i3748 = []
  for(var i = 0; i < i3749.length; i += 2) {
  request.r(i3749[i + 0], i3749[i + 1], 2, i3748, '')
  }
  i3746.hairsAnim = i3748
  var i3751 = i3747[12]
  var i3750 = []
  for(var i = 0; i < i3751.length; i += 2) {
  request.r(i3751[i + 0], i3751[i + 1], 2, i3750, '')
  }
  i3746.hairsRend = i3750
  i3746.hairsRendFadeThreshold = i3747[13]
  request.r(i3747[14], i3747[15], 0, i3746, 'wetHairRend')
  request.r(i3747[16], i3747[17], 0, i3746, 'dryHairRend')
  request.r(i3747[18], i3747[19], 0, i3746, 'dryHairRendBack')
  i3746.hairAnimStopDuration = i3747[20]
  i3746.hairAnimResumeDuration = i3747[21]
  return i3746
}

Deserializers["SpriteButton"] = function (request, data, root) {
  var i3752 = root || request.c( 'SpriteButton' )
  var i3753 = data
  i3752.onClick = request.d('UnityEngine.Events.UnityEvent', i3753[0], i3752.onClick)
  request.r(i3753[1], i3753[2], 0, i3752, 'spriteRenderer')
  request.r(i3753[3], i3753[4], 0, i3752, 'normalSprite')
  request.r(i3753[5], i3753[6], 0, i3752, 'hoverSprite')
  request.r(i3753[7], i3753[8], 0, i3752, 'pressedSprite')
  i3752.hoverScale = i3753[9]
  i3752.pressScale = i3753[10]
  i3752.animationDuration = i3753[11]
  return i3752
}

Deserializers["DestroyObj"] = function (request, data, root) {
  var i3754 = root || request.c( 'DestroyObj' )
  var i3755 = data
  i3754.destroyDelay = i3755[0]
  return i3754
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh"] = function (request, data, root) {
  var i3756 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh' )
  var i3757 = data
  i3756.name = i3757[0]
  i3756.halfPrecision = !!i3757[1]
  i3756.useSimplification = !!i3757[2]
  i3756.useUInt32IndexFormat = !!i3757[3]
  i3756.vertexCount = i3757[4]
  i3756.aabb = i3757[5]
  var i3759 = i3757[6]
  var i3758 = []
  for(var i = 0; i < i3759.length; i += 1) {
    i3758.push( !!i3759[i + 0] );
  }
  i3756.streams = i3758
  i3756.vertices = i3757[7]
  var i3761 = i3757[8]
  var i3760 = []
  for(var i = 0; i < i3761.length; i += 1) {
    i3760.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh', i3761[i + 0]) );
  }
  i3756.subMeshes = i3760
  var i3763 = i3757[9]
  var i3762 = []
  for(var i = 0; i < i3763.length; i += 16) {
    i3762.push( new pc.Mat4().setData(i3763[i + 0], i3763[i + 1], i3763[i + 2], i3763[i + 3],  i3763[i + 4], i3763[i + 5], i3763[i + 6], i3763[i + 7],  i3763[i + 8], i3763[i + 9], i3763[i + 10], i3763[i + 11],  i3763[i + 12], i3763[i + 13], i3763[i + 14], i3763[i + 15]) );
  }
  i3756.bindposes = i3762
  var i3765 = i3757[10]
  var i3764 = []
  for(var i = 0; i < i3765.length; i += 1) {
    i3764.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape', i3765[i + 0]) );
  }
  i3756.blendShapes = i3764
  return i3756
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh"] = function (request, data, root) {
  var i3770 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh' )
  var i3771 = data
  i3770.triangles = i3771[0]
  return i3770
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape"] = function (request, data, root) {
  var i3776 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape' )
  var i3777 = data
  i3776.name = i3777[0]
  var i3779 = i3777[1]
  var i3778 = []
  for(var i = 0; i < i3779.length; i += 1) {
    i3778.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame', i3779[i + 0]) );
  }
  i3776.frames = i3778
  return i3776
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Cubemap"] = function (request, data, root) {
  var i3780 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Cubemap' )
  var i3781 = data
  i3780.name = i3781[0]
  i3780.atlasId = i3781[1]
  i3780.mipmapCount = i3781[2]
  i3780.hdr = !!i3781[3]
  i3780.size = i3781[4]
  i3780.anisoLevel = i3781[5]
  i3780.filterMode = i3781[6]
  var i3783 = i3781[7]
  var i3782 = []
  for(var i = 0; i < i3783.length; i += 4) {
    i3782.push( UnityEngine.Rect.MinMaxRect(i3783[i + 0], i3783[i + 1], i3783[i + 2], i3783[i + 3]) );
  }
  i3780.rects = i3782
  i3780.wrapU = i3781[8]
  i3780.wrapV = i3781[9]
  return i3780
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i3786 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i3787 = data
  i3786.name = i3787[0]
  i3786.index = i3787[1]
  i3786.startup = !!i3787[2]
  return i3786
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i3788 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i3789 = data
  i3788.aspect = i3789[0]
  i3788.orthographic = !!i3789[1]
  i3788.orthographicSize = i3789[2]
  i3788.backgroundColor = new pc.Color(i3789[3], i3789[4], i3789[5], i3789[6])
  i3788.nearClipPlane = i3789[7]
  i3788.farClipPlane = i3789[8]
  i3788.fieldOfView = i3789[9]
  i3788.depth = i3789[10]
  i3788.clearFlags = i3789[11]
  i3788.cullingMask = i3789[12]
  i3788.rect = i3789[13]
  request.r(i3789[14], i3789[15], 0, i3788, 'targetTexture')
  i3788.usePhysicalProperties = !!i3789[16]
  i3788.focalLength = i3789[17]
  i3788.sensorSize = new pc.Vec2( i3789[18], i3789[19] )
  i3788.lensShift = new pc.Vec2( i3789[20], i3789[21] )
  i3788.gateFit = i3789[22]
  i3788.commandBufferCount = i3789[23]
  i3788.cameraType = i3789[24]
  i3788.enabled = !!i3789[25]
  return i3788
}

Deserializers["CameraController"] = function (request, data, root) {
  var i3790 = root || request.c( 'CameraController' )
  var i3791 = data
  request.r(i3791[0], i3791[1], 0, i3790, 'cam')
  i3790.defaultPosition = new pc.Vec3( i3791[2], i3791[3], i3791[4] )
  i3790.defaultSize = i3791[5]
  i3790.defaultFOV = i3791[6]
  i3790.defaultDuration = i3791[7]
  i3790.defaultEase = i3791[8]
  return i3790
}

Deserializers["MusicSource"] = function (request, data, root) {
  var i3792 = root || request.c( 'MusicSource' )
  var i3793 = data
  request.r(i3793[0], i3793[1], 0, i3792, 'source')
  return i3792
}

Deserializers["UI_Manager"] = function (request, data, root) {
  var i3794 = root || request.c( 'UI_Manager' )
  var i3795 = data
  i3794.levelCompleted = !!i3795[0]
  i3794.isPauseActive = !!i3795[1]
  i3794.loadIndex = i3795[2]
  request.r(i3795[3], i3795[4], 0, i3794, 'removeAdsButton')
  request.r(i3795[5], i3795[6], 0, i3794, 'pauseButton')
  request.r(i3795[7], i3795[8], 0, i3794, 'Fade_Img')
  request.r(i3795[9], i3795[10], 0, i3794, 'TopBarAnim')
  request.r(i3795[11], i3795[12], 0, i3794, 'MainPanel')
  request.r(i3795[13], i3795[14], 0, i3794, 'PausePanel')
  request.r(i3795[15], i3795[16], 0, i3794, 'PausePopUp')
  request.r(i3795[17], i3795[18], 0, i3794, 'PauseCanvasGroup')
  request.r(i3795[19], i3795[20], 0, i3794, 'RateUsPanel')
  request.r(i3795[21], i3795[22], 0, i3794, 'RateUsPopUp')
  request.r(i3795[23], i3795[24], 0, i3794, 'RemoveAdsPanel')
  request.r(i3795[25], i3795[26], 0, i3794, 'RemoveAdsPopUp')
  request.r(i3795[27], i3795[28], 0, i3794, 'RemoveAdsCanvasGroup')
  var i3797 = i3795[29]
  var i3796 = []
  for(var i = 0; i < i3797.length; i += 2) {
  request.r(i3797[i + 0], i3797[i + 1], 2, i3796, '')
  }
  i3794.RemoveAdsAnims = i3796
  request.r(i3795[30], i3795[31], 0, i3794, 'CompletePanel')
  request.r(i3795[32], i3795[33], 0, i3794, 'LevelIcon')
  request.r(i3795[34], i3795[35], 0, i3794, 'CompleteParticles')
  request.r(i3795[36], i3795[37], 0, i3794, 'progressBar')
  request.r(i3795[38], i3795[39], 0, i3794, 'progressText')
  request.r(i3795[40], i3795[41], 0, i3794, 'toolIcon1')
  request.r(i3795[42], i3795[43], 0, i3794, 'toolIcon2')
  request.r(i3795[44], i3795[45], 0, i3794, 'toolIcon3')
  request.r(i3795[46], i3795[47], 0, i3794, 'target1')
  request.r(i3795[48], i3795[49], 0, i3794, 'target2')
  i3794.toolMoveDuration = i3795[50]
  i3794.currentIndex = i3795[51]
  var i3799 = i3795[52]
  var i3798 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Sprite')))
  for(var i = 0; i < i3799.length; i += 2) {
  request.r(i3799[i + 0], i3799[i + 1], 1, i3798, '')
  }
  i3794.allTools = i3798
  request.r(i3795[53], i3795[54], 0, i3794, 'clockProgress')
  request.r(i3795[55], i3795[56], 0, i3794, 'clockProgressFill')
  request.r(i3795[57], i3795[58], 0, i3794, 'clockAudio')
  i3794.moveDistance = i3795[59]
  i3794.animationDuration = i3795[60]
  i3794.greyBgChildName = i3795[61]
  i3794.pushOffset = i3795[62]
  return i3794
}

Deserializers["GameManagerPlayable"] = function (request, data, root) {
  var i3800 = root || request.c( 'GameManagerPlayable' )
  var i3801 = data
  request.r(i3801[0], i3801[1], 0, i3800, 'DefaultMat')
  request.r(i3801[2], i3801[3], 0, i3800, 'BG_Music')
  request.r(i3801[4], i3801[5], 0, i3800, 'restoreEffectShader')
  request.r(i3801[6], i3801[7], 0, i3800, 'stickerEffectShader')
  i3800.isComplete = !!i3801[8]
  i3800.isPaused = !!i3801[9]
  request.r(i3801[10], i3801[11], 0, i3800, 'currentLevel')
  return i3800
}

Deserializers["AudioController"] = function (request, data, root) {
  var i3802 = root || request.c( 'AudioController' )
  var i3803 = data
  request.r(i3803[0], i3803[1], 0, i3802, 'MainMixer')
  request.r(i3803[2], i3803[3], 0, i3802, 'UiClick')
  request.r(i3803[4], i3803[5], 0, i3802, 'UiClickSource')
  var i3805 = i3803[6]
  var i3804 = []
  for(var i = 0; i < i3805.length; i += 2) {
  request.r(i3805[i + 0], i3805[i + 1], 2, i3804, '')
  }
  i3802.SfxSources = i3804
  var i3807 = i3803[7]
  var i3806 = []
  for(var i = 0; i < i3807.length; i += 2) {
  request.r(i3807[i + 0], i3807[i + 1], 2, i3806, '')
  }
  i3802.AllClips = i3806
  return i3802
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i3810 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i3811 = data
  i3810.pivot = new pc.Vec2( i3811[0], i3811[1] )
  i3810.anchorMin = new pc.Vec2( i3811[2], i3811[3] )
  i3810.anchorMax = new pc.Vec2( i3811[4], i3811[5] )
  i3810.sizeDelta = new pc.Vec2( i3811[6], i3811[7] )
  i3810.anchoredPosition3D = new pc.Vec3( i3811[8], i3811[9], i3811[10] )
  i3810.rotation = new pc.Quat(i3811[11], i3811[12], i3811[13], i3811[14])
  i3810.scale = new pc.Vec3( i3811[15], i3811[16], i3811[17] )
  return i3810
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i3812 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i3813 = data
  i3812.planeDistance = i3813[0]
  i3812.referencePixelsPerUnit = i3813[1]
  i3812.isFallbackOverlay = !!i3813[2]
  i3812.renderMode = i3813[3]
  i3812.renderOrder = i3813[4]
  i3812.sortingLayerName = i3813[5]
  i3812.sortingOrder = i3813[6]
  i3812.scaleFactor = i3813[7]
  request.r(i3813[8], i3813[9], 0, i3812, 'worldCamera')
  i3812.overrideSorting = !!i3813[10]
  i3812.pixelPerfect = !!i3813[11]
  i3812.targetDisplay = i3813[12]
  i3812.overridePixelPerfect = !!i3813[13]
  i3812.enabled = !!i3813[14]
  return i3812
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i3814 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i3815 = data
  i3814.m_UiScaleMode = i3815[0]
  i3814.m_ReferencePixelsPerUnit = i3815[1]
  i3814.m_ScaleFactor = i3815[2]
  i3814.m_ReferenceResolution = new pc.Vec2( i3815[3], i3815[4] )
  i3814.m_ScreenMatchMode = i3815[5]
  i3814.m_MatchWidthOrHeight = i3815[6]
  i3814.m_PhysicalUnit = i3815[7]
  i3814.m_FallbackScreenDPI = i3815[8]
  i3814.m_DefaultSpriteDPI = i3815[9]
  i3814.m_DynamicPixelsPerUnit = i3815[10]
  i3814.m_PresetInfoIsWorld = !!i3815[11]
  return i3814
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i3816 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i3817 = data
  i3816.m_IgnoreReversedGraphics = !!i3817[0]
  i3816.m_BlockingObjects = i3817[1]
  i3816.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i3817[2] )
  return i3816
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i3818 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i3819 = data
  i3818.cullTransparentMesh = !!i3819[0]
  return i3818
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i3820 = root || request.c( 'UnityEngine.UI.Image' )
  var i3821 = data
  request.r(i3821[0], i3821[1], 0, i3820, 'm_Sprite')
  i3820.m_Type = i3821[2]
  i3820.m_PreserveAspect = !!i3821[3]
  i3820.m_FillCenter = !!i3821[4]
  i3820.m_FillMethod = i3821[5]
  i3820.m_FillAmount = i3821[6]
  i3820.m_FillClockwise = !!i3821[7]
  i3820.m_FillOrigin = i3821[8]
  i3820.m_UseSpriteMesh = !!i3821[9]
  i3820.m_PixelsPerUnitMultiplier = i3821[10]
  request.r(i3821[11], i3821[12], 0, i3820, 'm_Material')
  i3820.m_Maskable = !!i3821[13]
  i3820.m_Color = new pc.Color(i3821[14], i3821[15], i3821[16], i3821[17])
  i3820.m_RaycastTarget = !!i3821[18]
  i3820.m_RaycastPadding = new pc.Vec4( i3821[19], i3821[20], i3821[21], i3821[22] )
  return i3820
}

Deserializers["UnityEngine.UI.Text"] = function (request, data, root) {
  var i3822 = root || request.c( 'UnityEngine.UI.Text' )
  var i3823 = data
  i3822.m_FontData = request.d('UnityEngine.UI.FontData', i3823[0], i3822.m_FontData)
  i3822.m_Text = i3823[1]
  request.r(i3823[2], i3823[3], 0, i3822, 'm_Material')
  i3822.m_Maskable = !!i3823[4]
  i3822.m_Color = new pc.Color(i3823[5], i3823[6], i3823[7], i3823[8])
  i3822.m_RaycastTarget = !!i3823[9]
  i3822.m_RaycastPadding = new pc.Vec4( i3823[10], i3823[11], i3823[12], i3823[13] )
  return i3822
}

Deserializers["UnityEngine.UI.FontData"] = function (request, data, root) {
  var i3824 = root || request.c( 'UnityEngine.UI.FontData' )
  var i3825 = data
  request.r(i3825[0], i3825[1], 0, i3824, 'm_Font')
  i3824.m_FontSize = i3825[2]
  i3824.m_FontStyle = i3825[3]
  i3824.m_BestFit = !!i3825[4]
  i3824.m_MinSize = i3825[5]
  i3824.m_MaxSize = i3825[6]
  i3824.m_Alignment = i3825[7]
  i3824.m_AlignByGeometry = !!i3825[8]
  i3824.m_RichText = !!i3825[9]
  i3824.m_HorizontalOverflow = i3825[10]
  i3824.m_VerticalOverflow = i3825[11]
  i3824.m_LineSpacing = i3825[12]
  return i3824
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i3826 = root || request.c( 'UnityEngine.UI.Button' )
  var i3827 = data
  i3826.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i3827[0], i3826.m_OnClick)
  i3826.m_Navigation = request.d('UnityEngine.UI.Navigation', i3827[1], i3826.m_Navigation)
  i3826.m_Transition = i3827[2]
  i3826.m_Colors = request.d('UnityEngine.UI.ColorBlock', i3827[3], i3826.m_Colors)
  i3826.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i3827[4], i3826.m_SpriteState)
  i3826.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i3827[5], i3826.m_AnimationTriggers)
  i3826.m_Interactable = !!i3827[6]
  request.r(i3827[7], i3827[8], 0, i3826, 'm_TargetGraphic')
  return i3826
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i3828 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i3829 = data
  i3828.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i3829[0], i3828.m_PersistentCalls)
  return i3828
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i3830 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i3831 = data
  i3830.m_Mode = i3831[0]
  i3830.m_WrapAround = !!i3831[1]
  request.r(i3831[2], i3831[3], 0, i3830, 'm_SelectOnUp')
  request.r(i3831[4], i3831[5], 0, i3830, 'm_SelectOnDown')
  request.r(i3831[6], i3831[7], 0, i3830, 'm_SelectOnLeft')
  request.r(i3831[8], i3831[9], 0, i3830, 'm_SelectOnRight')
  return i3830
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i3832 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i3833 = data
  i3832.m_NormalColor = new pc.Color(i3833[0], i3833[1], i3833[2], i3833[3])
  i3832.m_HighlightedColor = new pc.Color(i3833[4], i3833[5], i3833[6], i3833[7])
  i3832.m_PressedColor = new pc.Color(i3833[8], i3833[9], i3833[10], i3833[11])
  i3832.m_SelectedColor = new pc.Color(i3833[12], i3833[13], i3833[14], i3833[15])
  i3832.m_DisabledColor = new pc.Color(i3833[16], i3833[17], i3833[18], i3833[19])
  i3832.m_ColorMultiplier = i3833[20]
  i3832.m_FadeDuration = i3833[21]
  return i3832
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i3834 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i3835 = data
  request.r(i3835[0], i3835[1], 0, i3834, 'm_HighlightedSprite')
  request.r(i3835[2], i3835[3], 0, i3834, 'm_PressedSprite')
  request.r(i3835[4], i3835[5], 0, i3834, 'm_SelectedSprite')
  request.r(i3835[6], i3835[7], 0, i3834, 'm_DisabledSprite')
  return i3834
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i3836 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i3837 = data
  i3836.m_NormalTrigger = i3837[0]
  i3836.m_HighlightedTrigger = i3837[1]
  i3836.m_PressedTrigger = i3837[2]
  i3836.m_SelectedTrigger = i3837[3]
  i3836.m_DisabledTrigger = i3837[4]
  return i3836
}

Deserializers["PlayableHudRuntime"] = function (request, data, root) {
  var i3838 = root || request.c( 'PlayableHudRuntime' )
  var i3839 = data
  return i3838
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i3840 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i3841 = data
  request.r(i3841[0], i3841[1], 0, i3840, 'm_FirstSelected')
  i3840.m_sendNavigationEvents = !!i3841[2]
  i3840.m_DragThreshold = i3841[3]
  return i3840
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i3842 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i3843 = data
  i3842.m_HorizontalAxis = i3843[0]
  i3842.m_VerticalAxis = i3843[1]
  i3842.m_SubmitButton = i3843[2]
  i3842.m_CancelButton = i3843[3]
  i3842.m_InputActionsPerSecond = i3843[4]
  i3842.m_RepeatDelay = i3843[5]
  i3842.m_ForceModuleActive = !!i3843[6]
  i3842.m_SendPointerHoverToParent = !!i3843[7]
  return i3842
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i3844 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i3845 = data
  i3844.ambientIntensity = i3845[0]
  i3844.reflectionIntensity = i3845[1]
  i3844.ambientMode = i3845[2]
  i3844.ambientLight = new pc.Color(i3845[3], i3845[4], i3845[5], i3845[6])
  i3844.ambientSkyColor = new pc.Color(i3845[7], i3845[8], i3845[9], i3845[10])
  i3844.ambientGroundColor = new pc.Color(i3845[11], i3845[12], i3845[13], i3845[14])
  i3844.ambientEquatorColor = new pc.Color(i3845[15], i3845[16], i3845[17], i3845[18])
  i3844.fogColor = new pc.Color(i3845[19], i3845[20], i3845[21], i3845[22])
  i3844.fogEndDistance = i3845[23]
  i3844.fogStartDistance = i3845[24]
  i3844.fogDensity = i3845[25]
  i3844.fog = !!i3845[26]
  request.r(i3845[27], i3845[28], 0, i3844, 'skybox')
  i3844.fogMode = i3845[29]
  var i3847 = i3845[30]
  var i3846 = []
  for(var i = 0; i < i3847.length; i += 1) {
    i3846.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i3847[i + 0]) );
  }
  i3844.lightmaps = i3846
  i3844.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i3845[31], i3844.lightProbes)
  i3844.lightmapsMode = i3845[32]
  i3844.mixedBakeMode = i3845[33]
  i3844.environmentLightingMode = i3845[34]
  i3844.ambientProbe = new pc.SphericalHarmonicsL2(i3845[35])
  request.r(i3845[36], i3845[37], 0, i3844, 'customReflection')
  request.r(i3845[38], i3845[39], 0, i3844, 'defaultReflection')
  i3844.defaultReflectionMode = i3845[40]
  i3844.defaultReflectionResolution = i3845[41]
  i3844.sunLightObjectId = i3845[42]
  i3844.pixelLightCount = i3845[43]
  i3844.defaultReflectionHDR = !!i3845[44]
  i3844.hasLightDataAsset = !!i3845[45]
  i3844.hasManualGenerate = !!i3845[46]
  return i3844
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i3850 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i3851 = data
  request.r(i3851[0], i3851[1], 0, i3850, 'lightmapColor')
  request.r(i3851[2], i3851[3], 0, i3850, 'lightmapDirection')
  request.r(i3851[4], i3851[5], 0, i3850, 'shadowMask')
  return i3850
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i3852 = root || new UnityEngine.LightProbes()
  var i3853 = data
  return i3852
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i3858 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i3859 = data
  var i3861 = i3859[0]
  var i3860 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i3861.length; i += 1) {
    i3860.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i3861[i + 0]));
  }
  i3858.ShaderCompilationErrors = i3860
  i3858.name = i3859[1]
  i3858.guid = i3859[2]
  var i3863 = i3859[3]
  var i3862 = []
  for(var i = 0; i < i3863.length; i += 1) {
    i3862.push( i3863[i + 0] );
  }
  i3858.shaderDefinedKeywords = i3862
  var i3865 = i3859[4]
  var i3864 = []
  for(var i = 0; i < i3865.length; i += 1) {
    i3864.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i3865[i + 0]) );
  }
  i3858.passes = i3864
  var i3867 = i3859[5]
  var i3866 = []
  for(var i = 0; i < i3867.length; i += 1) {
    i3866.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i3867[i + 0]) );
  }
  i3858.usePasses = i3866
  var i3869 = i3859[6]
  var i3868 = []
  for(var i = 0; i < i3869.length; i += 1) {
    i3868.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i3869[i + 0]) );
  }
  i3858.defaultParameterValues = i3868
  request.r(i3859[7], i3859[8], 0, i3858, 'unityFallbackShader')
  i3858.readDepth = !!i3859[9]
  i3858.hasDepthOnlyPass = !!i3859[10]
  i3858.isCreatedByShaderGraph = !!i3859[11]
  i3858.disableBatching = !!i3859[12]
  i3858.compiled = !!i3859[13]
  return i3858
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i3872 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i3873 = data
  i3872.shaderName = i3873[0]
  i3872.errorMessage = i3873[1]
  return i3872
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i3878 = root || new pc.UnityShaderPass()
  var i3879 = data
  i3878.id = i3879[0]
  i3878.subShaderIndex = i3879[1]
  i3878.name = i3879[2]
  i3878.passType = i3879[3]
  i3878.grabPassTextureName = i3879[4]
  i3878.usePass = !!i3879[5]
  i3878.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3879[6], i3878.zTest)
  i3878.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3879[7], i3878.zWrite)
  i3878.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3879[8], i3878.culling)
  i3878.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i3879[9], i3878.blending)
  i3878.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i3879[10], i3878.alphaBlending)
  i3878.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3879[11], i3878.colorWriteMask)
  i3878.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3879[12], i3878.offsetUnits)
  i3878.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3879[13], i3878.offsetFactor)
  i3878.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3879[14], i3878.stencilRef)
  i3878.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3879[15], i3878.stencilReadMask)
  i3878.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3879[16], i3878.stencilWriteMask)
  i3878.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i3879[17], i3878.stencilOp)
  i3878.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i3879[18], i3878.stencilOpFront)
  i3878.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i3879[19], i3878.stencilOpBack)
  var i3881 = i3879[20]
  var i3880 = []
  for(var i = 0; i < i3881.length; i += 1) {
    i3880.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i3881[i + 0]) );
  }
  i3878.tags = i3880
  var i3883 = i3879[21]
  var i3882 = []
  for(var i = 0; i < i3883.length; i += 1) {
    i3882.push( i3883[i + 0] );
  }
  i3878.passDefinedKeywords = i3882
  var i3885 = i3879[22]
  var i3884 = []
  for(var i = 0; i < i3885.length; i += 1) {
    i3884.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i3885[i + 0]) );
  }
  i3878.passDefinedKeywordGroups = i3884
  var i3887 = i3879[23]
  var i3886 = []
  for(var i = 0; i < i3887.length; i += 1) {
    i3886.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i3887[i + 0]) );
  }
  i3878.variants = i3886
  var i3889 = i3879[24]
  var i3888 = []
  for(var i = 0; i < i3889.length; i += 1) {
    i3888.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i3889[i + 0]) );
  }
  i3878.excludedVariants = i3888
  i3878.hasDepthReader = !!i3879[25]
  return i3878
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i3890 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i3891 = data
  i3890.val = i3891[0]
  i3890.name = i3891[1]
  return i3890
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i3892 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i3893 = data
  i3892.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3893[0], i3892.src)
  i3892.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3893[1], i3892.dst)
  i3892.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3893[2], i3892.op)
  return i3892
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i3894 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i3895 = data
  i3894.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3895[0], i3894.pass)
  i3894.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3895[1], i3894.fail)
  i3894.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3895[2], i3894.zFail)
  i3894.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3895[3], i3894.comp)
  return i3894
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i3898 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i3899 = data
  i3898.name = i3899[0]
  i3898.value = i3899[1]
  return i3898
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i3902 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i3903 = data
  var i3905 = i3903[0]
  var i3904 = []
  for(var i = 0; i < i3905.length; i += 1) {
    i3904.push( i3905[i + 0] );
  }
  i3902.keywords = i3904
  i3902.hasDiscard = !!i3903[1]
  return i3902
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i3908 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i3909 = data
  i3908.passId = i3909[0]
  i3908.subShaderIndex = i3909[1]
  var i3911 = i3909[2]
  var i3910 = []
  for(var i = 0; i < i3911.length; i += 1) {
    i3910.push( i3911[i + 0] );
  }
  i3908.keywords = i3910
  i3908.vertexProgram = i3909[3]
  i3908.fragmentProgram = i3909[4]
  i3908.exportedForWebGl2 = !!i3909[5]
  i3908.readDepth = !!i3909[6]
  return i3908
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i3914 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i3915 = data
  request.r(i3915[0], i3915[1], 0, i3914, 'shader')
  i3914.pass = i3915[2]
  return i3914
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i3918 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i3919 = data
  i3918.name = i3919[0]
  i3918.type = i3919[1]
  i3918.value = new pc.Vec4( i3919[2], i3919[3], i3919[4], i3919[5] )
  i3918.textureValue = i3919[6]
  i3918.shaderPropertyFlag = i3919[7]
  return i3918
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i3920 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i3921 = data
  i3920.name = i3921[0]
  request.r(i3921[1], i3921[2], 0, i3920, 'texture')
  i3920.aabb = i3921[3]
  i3920.vertices = i3921[4]
  i3920.triangles = i3921[5]
  i3920.textureRect = UnityEngine.Rect.MinMaxRect(i3921[6], i3921[7], i3921[8], i3921[9])
  i3920.packedRect = UnityEngine.Rect.MinMaxRect(i3921[10], i3921[11], i3921[12], i3921[13])
  i3920.border = new pc.Vec4( i3921[14], i3921[15], i3921[16], i3921[17] )
  i3920.transparency = i3921[18]
  i3920.bounds = i3921[19]
  i3920.pixelsPerUnit = i3921[20]
  i3920.textureWidth = i3921[21]
  i3920.textureHeight = i3921[22]
  i3920.nativeSize = new pc.Vec2( i3921[23], i3921[24] )
  i3920.pivot = new pc.Vec2( i3921[25], i3921[26] )
  i3920.textureRectOffset = new pc.Vec2( i3921[27], i3921[28] )
  return i3920
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i3922 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i3923 = data
  i3922.name = i3923[0]
  return i3922
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip"] = function (request, data, root) {
  var i3924 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip' )
  var i3925 = data
  i3924.name = i3925[0]
  i3924.wrapMode = i3925[1]
  i3924.isLooping = !!i3925[2]
  i3924.length = i3925[3]
  var i3927 = i3925[4]
  var i3926 = []
  for(var i = 0; i < i3927.length; i += 1) {
    i3926.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve', i3927[i + 0]) );
  }
  i3924.curves = i3926
  var i3929 = i3925[5]
  var i3928 = []
  for(var i = 0; i < i3929.length; i += 1) {
    i3928.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent', i3929[i + 0]) );
  }
  i3924.events = i3928
  i3924.halfPrecision = !!i3925[6]
  i3924._frameRate = i3925[7]
  i3924.localBounds = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds', i3925[8], i3924.localBounds)
  i3924.hasMuscleCurves = !!i3925[9]
  var i3931 = i3925[10]
  var i3930 = []
  for(var i = 0; i < i3931.length; i += 1) {
    i3930.push( i3931[i + 0] );
  }
  i3924.clipMuscleConstant = i3930
  i3924.clipBindingConstant = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant', i3925[11], i3924.clipBindingConstant)
  return i3924
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve"] = function (request, data, root) {
  var i3934 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve' )
  var i3935 = data
  i3934.path = i3935[0]
  i3934.hash = i3935[1]
  i3934.componentType = i3935[2]
  i3934.property = i3935[3]
  i3934.keys = i3935[4]
  var i3937 = i3935[5]
  var i3936 = []
  for(var i = 0; i < i3937.length; i += 1) {
    i3936.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey', i3937[i + 0]) );
  }
  i3934.objectReferenceKeys = i3936
  return i3934
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey"] = function (request, data, root) {
  var i3940 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey' )
  var i3941 = data
  i3940.time = i3941[0]
  request.r(i3941[1], i3941[2], 0, i3940, 'value')
  return i3940
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent"] = function (request, data, root) {
  var i3944 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent' )
  var i3945 = data
  i3944.functionName = i3945[0]
  i3944.floatParameter = i3945[1]
  i3944.intParameter = i3945[2]
  i3944.stringParameter = i3945[3]
  request.r(i3945[4], i3945[5], 0, i3944, 'objectReferenceParameter')
  i3944.time = i3945[6]
  return i3944
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds"] = function (request, data, root) {
  var i3946 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds' )
  var i3947 = data
  i3946.center = new pc.Vec3( i3947[0], i3947[1], i3947[2] )
  i3946.extends = new pc.Vec3( i3947[3], i3947[4], i3947[5] )
  return i3946
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant"] = function (request, data, root) {
  var i3950 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant' )
  var i3951 = data
  var i3953 = i3951[0]
  var i3952 = []
  for(var i = 0; i < i3953.length; i += 1) {
    i3952.push( i3953[i + 0] );
  }
  i3950.genericBindings = i3952
  var i3955 = i3951[1]
  var i3954 = []
  for(var i = 0; i < i3955.length; i += 1) {
    i3954.push( i3955[i + 0] );
  }
  i3950.pptrCurveMapping = i3954
  return i3950
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i3956 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i3957 = data
  i3956.name = i3957[0]
  i3956.ascent = i3957[1]
  i3956.originalLineHeight = i3957[2]
  i3956.fontSize = i3957[3]
  var i3959 = i3957[4]
  var i3958 = []
  for(var i = 0; i < i3959.length; i += 1) {
    i3958.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i3959[i + 0]) );
  }
  i3956.characterInfo = i3958
  request.r(i3957[5], i3957[6], 0, i3956, 'texture')
  i3956.originalFontSize = i3957[7]
  return i3956
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i3962 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i3963 = data
  i3962.index = i3963[0]
  i3962.advance = i3963[1]
  i3962.bearing = i3963[2]
  i3962.glyphWidth = i3963[3]
  i3962.glyphHeight = i3963[4]
  i3962.minX = i3963[5]
  i3962.maxX = i3963[6]
  i3962.minY = i3963[7]
  i3962.maxY = i3963[8]
  i3962.uvBottomLeftX = i3963[9]
  i3962.uvBottomLeftY = i3963[10]
  i3962.uvBottomRightX = i3963[11]
  i3962.uvBottomRightY = i3963[12]
  i3962.uvTopLeftX = i3963[13]
  i3962.uvTopLeftY = i3963[14]
  i3962.uvTopRightX = i3963[15]
  i3962.uvTopRightY = i3963[16]
  return i3962
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController"] = function (request, data, root) {
  var i3964 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController' )
  var i3965 = data
  i3964.name = i3965[0]
  var i3967 = i3965[1]
  var i3966 = []
  for(var i = 0; i < i3967.length; i += 1) {
    i3966.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer', i3967[i + 0]) );
  }
  i3964.layers = i3966
  var i3969 = i3965[2]
  var i3968 = []
  for(var i = 0; i < i3969.length; i += 1) {
    i3968.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter', i3969[i + 0]) );
  }
  i3964.parameters = i3968
  i3964.animationClips = i3965[3]
  i3964.avatarUnsupported = i3965[4]
  return i3964
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer"] = function (request, data, root) {
  var i3972 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer' )
  var i3973 = data
  i3972.name = i3973[0]
  i3972.defaultWeight = i3973[1]
  i3972.blendingMode = i3973[2]
  i3972.avatarMask = i3973[3]
  i3972.syncedLayerIndex = i3973[4]
  i3972.syncedLayerAffectsTiming = !!i3973[5]
  i3972.syncedLayers = i3973[6]
  i3972.stateMachine = request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i3973[7], i3972.stateMachine)
  return i3972
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine"] = function (request, data, root) {
  var i3974 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine' )
  var i3975 = data
  i3974.id = i3975[0]
  i3974.name = i3975[1]
  i3974.path = i3975[2]
  var i3977 = i3975[3]
  var i3976 = []
  for(var i = 0; i < i3977.length; i += 1) {
    i3976.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState', i3977[i + 0]) );
  }
  i3974.states = i3976
  var i3979 = i3975[4]
  var i3978 = []
  for(var i = 0; i < i3979.length; i += 1) {
    i3978.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i3979[i + 0]) );
  }
  i3974.machines = i3978
  var i3981 = i3975[5]
  var i3980 = []
  for(var i = 0; i < i3981.length; i += 1) {
    i3980.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i3981[i + 0]) );
  }
  i3974.entryStateTransitions = i3980
  var i3983 = i3975[6]
  var i3982 = []
  for(var i = 0; i < i3983.length; i += 1) {
    i3982.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i3983[i + 0]) );
  }
  i3974.exitStateTransitions = i3982
  var i3985 = i3975[7]
  var i3984 = []
  for(var i = 0; i < i3985.length; i += 1) {
    i3984.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i3985[i + 0]) );
  }
  i3974.anyStateTransitions = i3984
  i3974.defaultStateId = i3975[8]
  return i3974
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState"] = function (request, data, root) {
  var i3988 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState' )
  var i3989 = data
  i3988.id = i3989[0]
  i3988.name = i3989[1]
  i3988.cycleOffset = i3989[2]
  i3988.cycleOffsetParameter = i3989[3]
  i3988.cycleOffsetParameterActive = !!i3989[4]
  i3988.mirror = !!i3989[5]
  i3988.mirrorParameter = i3989[6]
  i3988.mirrorParameterActive = !!i3989[7]
  i3988.motionId = i3989[8]
  i3988.nameHash = i3989[9]
  i3988.fullPathHash = i3989[10]
  i3988.speed = i3989[11]
  i3988.speedParameter = i3989[12]
  i3988.speedParameterActive = !!i3989[13]
  i3988.tag = i3989[14]
  i3988.tagHash = i3989[15]
  i3988.writeDefaultValues = !!i3989[16]
  var i3991 = i3989[17]
  var i3990 = []
  for(var i = 0; i < i3991.length; i += 2) {
  request.r(i3991[i + 0], i3991[i + 1], 2, i3990, '')
  }
  i3988.behaviours = i3990
  var i3993 = i3989[18]
  var i3992 = []
  for(var i = 0; i < i3993.length; i += 1) {
    i3992.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i3993[i + 0]) );
  }
  i3988.transitions = i3992
  return i3988
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition"] = function (request, data, root) {
  var i3998 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition' )
  var i3999 = data
  i3998.fullPath = i3999[0]
  i3998.canTransitionToSelf = !!i3999[1]
  i3998.duration = i3999[2]
  i3998.exitTime = i3999[3]
  i3998.hasExitTime = !!i3999[4]
  i3998.hasFixedDuration = !!i3999[5]
  i3998.interruptionSource = i3999[6]
  i3998.offset = i3999[7]
  i3998.orderedInterruption = !!i3999[8]
  i3998.destinationStateId = i3999[9]
  i3998.isExit = !!i3999[10]
  i3998.mute = !!i3999[11]
  i3998.solo = !!i3999[12]
  var i4001 = i3999[13]
  var i4000 = []
  for(var i = 0; i < i4001.length; i += 1) {
    i4000.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i4001[i + 0]) );
  }
  i3998.conditions = i4000
  return i3998
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition"] = function (request, data, root) {
  var i4006 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition' )
  var i4007 = data
  i4006.destinationStateId = i4007[0]
  i4006.isExit = !!i4007[1]
  i4006.mute = !!i4007[2]
  i4006.solo = !!i4007[3]
  var i4009 = i4007[4]
  var i4008 = []
  for(var i = 0; i < i4009.length; i += 1) {
    i4008.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i4009[i + 0]) );
  }
  i4006.conditions = i4008
  return i4006
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition"] = function (request, data, root) {
  var i4012 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition' )
  var i4013 = data
  i4012.mode = i4013[0]
  i4012.parameter = i4013[1]
  i4012.threshold = i4013[2]
  return i4012
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter"] = function (request, data, root) {
  var i4016 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter' )
  var i4017 = data
  i4016.defaultBool = !!i4017[0]
  i4016.defaultFloat = i4017[1]
  i4016.defaultInt = i4017[2]
  i4016.name = i4017[3]
  i4016.nameHash = i4017[4]
  i4016.type = i4017[5]
  return i4016
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i4018 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i4019 = data
  i4018.useSafeMode = !!i4019[0]
  i4018.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i4019[1], i4018.safeModeOptions)
  i4018.timeScale = i4019[2]
  i4018.unscaledTimeScale = i4019[3]
  i4018.useSmoothDeltaTime = !!i4019[4]
  i4018.maxSmoothUnscaledTime = i4019[5]
  i4018.rewindCallbackMode = i4019[6]
  i4018.showUnityEditorReport = !!i4019[7]
  i4018.logBehaviour = i4019[8]
  i4018.drawGizmos = !!i4019[9]
  i4018.defaultRecyclable = !!i4019[10]
  i4018.defaultAutoPlay = i4019[11]
  i4018.defaultUpdateType = i4019[12]
  i4018.defaultTimeScaleIndependent = !!i4019[13]
  i4018.defaultEaseType = i4019[14]
  i4018.defaultEaseOvershootOrAmplitude = i4019[15]
  i4018.defaultEasePeriod = i4019[16]
  i4018.defaultAutoKill = !!i4019[17]
  i4018.defaultLoopType = i4019[18]
  i4018.debugMode = !!i4019[19]
  i4018.debugStoreTargetId = !!i4019[20]
  i4018.showPreviewPanel = !!i4019[21]
  i4018.storeSettingsLocation = i4019[22]
  i4018.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i4019[23], i4018.modules)
  i4018.createASMDEF = !!i4019[24]
  i4018.showPlayingTweens = !!i4019[25]
  i4018.showPausedTweens = !!i4019[26]
  return i4018
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i4020 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i4021 = data
  i4020.logBehaviour = i4021[0]
  i4020.nestedTweenFailureBehaviour = i4021[1]
  return i4020
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i4022 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i4023 = data
  i4022.showPanel = !!i4023[0]
  i4022.audioEnabled = !!i4023[1]
  i4022.physicsEnabled = !!i4023[2]
  i4022.physics2DEnabled = !!i4023[3]
  i4022.spriteEnabled = !!i4023[4]
  i4022.uiEnabled = !!i4023[5]
  i4022.textMeshProEnabled = !!i4023[6]
  i4022.tk2DEnabled = !!i4023[7]
  i4022.deAudioEnabled = !!i4023[8]
  i4022.deUnityExtendedEnabled = !!i4023[9]
  i4022.epoOutlineEnabled = !!i4023[10]
  return i4022
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i4024 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i4025 = data
  var i4027 = i4025[0]
  var i4026 = []
  for(var i = 0; i < i4027.length; i += 1) {
    i4026.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i4027[i + 0]) );
  }
  i4024.files = i4026
  i4024.componentToPrefabIds = i4025[1]
  return i4024
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i4030 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i4031 = data
  i4030.path = i4031[0]
  request.r(i4031[1], i4031[2], 0, i4030, 'unityObject')
  return i4030
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i4032 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i4033 = data
  var i4035 = i4033[0]
  var i4034 = []
  for(var i = 0; i < i4035.length; i += 1) {
    i4034.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i4035[i + 0]) );
  }
  i4032.scriptsExecutionOrder = i4034
  var i4037 = i4033[1]
  var i4036 = []
  for(var i = 0; i < i4037.length; i += 1) {
    i4036.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i4037[i + 0]) );
  }
  i4032.sortingLayers = i4036
  var i4039 = i4033[2]
  var i4038 = []
  for(var i = 0; i < i4039.length; i += 1) {
    i4038.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i4039[i + 0]) );
  }
  i4032.cullingLayers = i4038
  i4032.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i4033[3], i4032.timeSettings)
  i4032.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i4033[4], i4032.physicsSettings)
  i4032.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i4033[5], i4032.physics2DSettings)
  i4032.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i4033[6], i4032.qualitySettings)
  i4032.enableRealtimeShadows = !!i4033[7]
  i4032.enableAutoInstancing = !!i4033[8]
  i4032.enableStaticBatching = !!i4033[9]
  i4032.enableDynamicBatching = !!i4033[10]
  i4032.usePreservativeDynamicBatching = !!i4033[11]
  i4032.lightmapEncodingQuality = i4033[12]
  i4032.desiredColorSpace = i4033[13]
  var i4041 = i4033[14]
  var i4040 = []
  for(var i = 0; i < i4041.length; i += 1) {
    i4040.push( i4041[i + 0] );
  }
  i4032.allTags = i4040
  return i4032
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i4044 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i4045 = data
  i4044.name = i4045[0]
  i4044.value = i4045[1]
  return i4044
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i4048 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i4049 = data
  i4048.id = i4049[0]
  i4048.name = i4049[1]
  i4048.value = i4049[2]
  return i4048
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i4052 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i4053 = data
  i4052.id = i4053[0]
  i4052.name = i4053[1]
  return i4052
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i4054 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i4055 = data
  i4054.fixedDeltaTime = i4055[0]
  i4054.maximumDeltaTime = i4055[1]
  i4054.timeScale = i4055[2]
  i4054.maximumParticleTimestep = i4055[3]
  return i4054
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i4056 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i4057 = data
  i4056.gravity = new pc.Vec3( i4057[0], i4057[1], i4057[2] )
  i4056.defaultSolverIterations = i4057[3]
  i4056.bounceThreshold = i4057[4]
  i4056.autoSyncTransforms = !!i4057[5]
  i4056.autoSimulation = !!i4057[6]
  var i4059 = i4057[7]
  var i4058 = []
  for(var i = 0; i < i4059.length; i += 1) {
    i4058.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i4059[i + 0]) );
  }
  i4056.collisionMatrix = i4058
  return i4056
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i4062 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i4063 = data
  i4062.enabled = !!i4063[0]
  i4062.layerId = i4063[1]
  i4062.otherLayerId = i4063[2]
  return i4062
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i4064 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i4065 = data
  request.r(i4065[0], i4065[1], 0, i4064, 'material')
  i4064.gravity = new pc.Vec2( i4065[2], i4065[3] )
  i4064.positionIterations = i4065[4]
  i4064.velocityIterations = i4065[5]
  i4064.velocityThreshold = i4065[6]
  i4064.maxLinearCorrection = i4065[7]
  i4064.maxAngularCorrection = i4065[8]
  i4064.maxTranslationSpeed = i4065[9]
  i4064.maxRotationSpeed = i4065[10]
  i4064.baumgarteScale = i4065[11]
  i4064.baumgarteTOIScale = i4065[12]
  i4064.timeToSleep = i4065[13]
  i4064.linearSleepTolerance = i4065[14]
  i4064.angularSleepTolerance = i4065[15]
  i4064.defaultContactOffset = i4065[16]
  i4064.autoSimulation = !!i4065[17]
  i4064.queriesHitTriggers = !!i4065[18]
  i4064.queriesStartInColliders = !!i4065[19]
  i4064.callbacksOnDisable = !!i4065[20]
  i4064.reuseCollisionCallbacks = !!i4065[21]
  i4064.autoSyncTransforms = !!i4065[22]
  var i4067 = i4065[23]
  var i4066 = []
  for(var i = 0; i < i4067.length; i += 1) {
    i4066.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i4067[i + 0]) );
  }
  i4064.collisionMatrix = i4066
  return i4064
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i4070 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i4071 = data
  i4070.enabled = !!i4071[0]
  i4070.layerId = i4071[1]
  i4070.otherLayerId = i4071[2]
  return i4070
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i4072 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i4073 = data
  var i4075 = i4073[0]
  var i4074 = []
  for(var i = 0; i < i4075.length; i += 1) {
    i4074.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i4075[i + 0]) );
  }
  i4072.qualityLevels = i4074
  var i4077 = i4073[1]
  var i4076 = []
  for(var i = 0; i < i4077.length; i += 1) {
    i4076.push( i4077[i + 0] );
  }
  i4072.names = i4076
  i4072.shadows = i4073[2]
  i4072.anisotropicFiltering = i4073[3]
  i4072.antiAliasing = i4073[4]
  i4072.lodBias = i4073[5]
  i4072.shadowCascades = i4073[6]
  i4072.shadowDistance = i4073[7]
  i4072.shadowmaskMode = i4073[8]
  i4072.shadowProjection = i4073[9]
  i4072.shadowResolution = i4073[10]
  i4072.softParticles = !!i4073[11]
  i4072.softVegetation = !!i4073[12]
  i4072.activeColorSpace = i4073[13]
  i4072.desiredColorSpace = i4073[14]
  i4072.masterTextureLimit = i4073[15]
  i4072.maxQueuedFrames = i4073[16]
  i4072.particleRaycastBudget = i4073[17]
  i4072.pixelLightCount = i4073[18]
  i4072.realtimeReflectionProbes = !!i4073[19]
  i4072.shadowCascade2Split = i4073[20]
  i4072.shadowCascade4Split = new pc.Vec3( i4073[21], i4073[22], i4073[23] )
  i4072.streamingMipmapsActive = !!i4073[24]
  i4072.vSyncCount = i4073[25]
  i4072.asyncUploadBufferSize = i4073[26]
  i4072.asyncUploadTimeSlice = i4073[27]
  i4072.billboardsFaceCameraPosition = !!i4073[28]
  i4072.shadowNearPlaneOffset = i4073[29]
  i4072.streamingMipmapsMemoryBudget = i4073[30]
  i4072.maximumLODLevel = i4073[31]
  i4072.streamingMipmapsAddAllCameras = !!i4073[32]
  i4072.streamingMipmapsMaxLevelReduction = i4073[33]
  i4072.streamingMipmapsRenderersPerFrame = i4073[34]
  i4072.resolutionScalingFixedDPIFactor = i4073[35]
  i4072.streamingMipmapsMaxFileIORequests = i4073[36]
  i4072.currentQualityLevel = i4073[37]
  return i4072
}

Deserializers["Luna.Unity.DTO.UnityEngine.Audio.AudioMixer"] = function (request, data, root) {
  var i4080 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Audio.AudioMixer' )
  var i4081 = data
  var i4083 = i4081[0]
  var i4082 = []
  for(var i = 0; i < i4083.length; i += 1) {
    i4082.push( request.d('Luna.Unity.DTO.UnityEngine.Audio.AudioMixerGroup', i4083[i + 0]) );
  }
  i4080.groups = i4082
  var i4085 = i4081[1]
  var i4084 = []
  for(var i = 0; i < i4085.length; i += 1) {
    i4084.push( request.d('Luna.Unity.DTO.UnityEngine.Audio.AudioMixerSnapshot', i4085[i + 0]) );
  }
  i4080.snapshots = i4084
  return i4080
}

Deserializers["Luna.Unity.DTO.UnityEngine.Audio.AudioMixerGroup"] = function (request, data, root) {
  var i4088 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Audio.AudioMixerGroup' )
  var i4089 = data
  i4088.id = i4089[0]
  i4088.childGroupIds = i4089[1]
  i4088.name = i4089[2]
  return i4088
}

Deserializers["Luna.Unity.DTO.UnityEngine.Audio.AudioMixerSnapshot"] = function (request, data, root) {
  var i4092 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Audio.AudioMixerSnapshot' )
  var i4093 = data
  i4092.id = i4093[0]
  var i4095 = i4093[1]
  var i4094 = []
  for(var i = 0; i < i4095.length; i += 1) {
    i4094.push( request.d('Luna.Unity.DTO.UnityEngine.Audio.AudioMixerSnapshot+Parameter', i4095[i + 0]) );
  }
  i4092.parameters = i4094
  return i4092
}

Deserializers["Luna.Unity.DTO.UnityEngine.Audio.AudioMixerSnapshot+Parameter"] = function (request, data, root) {
  var i4098 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Audio.AudioMixerSnapshot+Parameter' )
  var i4099 = data
  i4098.name = i4099[0]
  i4098.value = i4099[1]
  return i4098
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame"] = function (request, data, root) {
  var i4102 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame' )
  var i4103 = data
  i4102.weight = i4103[0]
  i4102.vertices = i4103[1]
  i4102.normals = i4103[2]
  i4102.tangents = i4103[3]
  return i4102
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Components.Animator":{"animatorController":0,"avatar":2,"updateMode":4,"hasTransformHierarchy":5,"applyRootMotion":6,"humanBones":7,"enabled":8},"Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer":{"color":0,"sprite":4,"flipX":6,"flipY":7,"drawMode":8,"size":9,"tileMode":11,"adaptiveModeThreshold":12,"maskInteraction":13,"spriteSortPoint":14,"enabled":15,"sharedMaterial":16,"sharedMaterials":18,"receiveShadows":19,"shadowCastingMode":20,"sortingLayerID":21,"sortingOrder":22,"lightmapIndex":23,"lightmapSceneIndex":24,"lightmapScaleOffset":25,"lightProbeUsage":29,"reflectionProbeUsage":30},"Luna.Unity.DTO.UnityEngine.Components.TrailRenderer":{"positions":0,"positionCount":1,"time":2,"startWidth":3,"endWidth":4,"widthMultiplier":5,"autodestruct":6,"emitting":7,"numCornerVertices":8,"numCapVertices":9,"minVertexDistance":10,"colorGradient":11,"startColor":12,"endColor":16,"generateLightingData":20,"textureMode":21,"alignment":22,"widthCurve":23,"enabled":24,"sharedMaterial":25,"sharedMaterials":27,"receiveShadows":28,"shadowCastingMode":29,"sortingLayerID":30,"sortingOrder":31,"lightmapIndex":32,"lightmapSceneIndex":33,"lightmapScaleOffset":34,"lightProbeUsage":38,"reflectionProbeUsage":39},"Luna.Unity.DTO.UnityEngine.Components.LineRenderer":{"textureMode":0,"alignment":1,"widthCurve":2,"colorGradient":3,"positions":4,"positionCount":5,"widthMultiplier":6,"startWidth":7,"endWidth":8,"numCornerVertices":9,"numCapVertices":10,"useWorldSpace":11,"loop":12,"startColor":13,"endColor":17,"generateLightingData":21,"enabled":22,"sharedMaterial":23,"sharedMaterials":25,"receiveShadows":26,"shadowCastingMode":27,"sortingLayerID":28,"sortingOrder":29,"lightmapIndex":30,"lightmapSceneIndex":31,"lightmapScaleOffset":32,"lightProbeUsage":36,"reflectionProbeUsage":37},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D":{"usedByComposite":0,"autoTiling":1,"size":2,"edgeRadius":4,"enabled":5,"isTrigger":6,"usedByEffector":7,"density":8,"offset":9,"material":11},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystem":{"main":0,"colorBySpeed":1,"colorOverLifetime":2,"emission":3,"rotationBySpeed":4,"rotationOverLifetime":5,"shape":6,"sizeBySpeed":7,"sizeOverLifetime":8,"textureSheetAnimation":9,"velocityOverLifetime":10,"noise":11,"inheritVelocity":12,"forceOverLifetime":13,"limitVelocityOverLifetime":14,"useAutoRandomSeed":15,"randomSeed":16},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule":{"duration":0,"loop":1,"prewarm":2,"startDelay":3,"startLifetime":4,"startSpeed":5,"startSize3D":6,"startSizeX":7,"startSizeY":8,"startSizeZ":9,"startRotation3D":10,"startRotationX":11,"startRotationY":12,"startRotationZ":13,"startColor":14,"gravityModifier":15,"simulationSpace":16,"customSimulationSpace":17,"simulationSpeed":19,"useUnscaledTime":20,"scalingMode":21,"playOnAwake":22,"maxParticles":23,"emitterVelocityMode":24,"stopAction":25},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve":{"mode":0,"curveMin":1,"curveMax":2,"curveMultiplier":3,"constantMin":4,"constantMax":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient":{"mode":0,"gradientMin":1,"gradientMax":2,"colorMin":3,"colorMax":7},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient":{"mode":0,"colorKeys":1,"alphaKeys":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule":{"enabled":0,"color":1,"range":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey":{"color":0,"time":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey":{"alpha":0,"time":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule":{"enabled":0,"color":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule":{"enabled":0,"rateOverTime":1,"rateOverDistance":2,"bursts":3},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst":{"count":0,"cycleCount":1,"minCount":2,"maxCount":3,"repeatInterval":4,"time":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule":{"enabled":0,"shapeType":1,"randomDirectionAmount":2,"sphericalDirectionAmount":3,"randomPositionAmount":4,"alignToDirection":5,"radius":6,"radiusMode":7,"radiusSpread":8,"radiusSpeed":9,"radiusThickness":10,"angle":11,"length":12,"boxThickness":13,"meshShapeType":16,"mesh":17,"meshRenderer":19,"skinnedMeshRenderer":21,"useMeshMaterialIndex":23,"meshMaterialIndex":24,"useMeshColors":25,"normalOffset":26,"arc":27,"arcMode":28,"arcSpread":29,"arcSpeed":30,"donutRadius":31,"position":32,"rotation":35,"scale":38},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule":{"enabled":0,"mode":1,"animation":2,"numTilesX":3,"numTilesY":4,"useRandomRow":5,"frameOverTime":6,"startFrame":7,"cycleCount":8,"rowIndex":9,"flipU":10,"flipV":11,"spriteCount":12,"sprites":13},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"radial":4,"speedModifier":5,"space":6,"orbitalX":7,"orbitalY":8,"orbitalZ":9,"orbitalOffsetX":10,"orbitalOffsetY":11,"orbitalOffsetZ":12},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule":{"enabled":0,"separateAxes":1,"strengthX":2,"strengthY":3,"strengthZ":4,"frequency":5,"damping":6,"octaveCount":7,"octaveMultiplier":8,"octaveScale":9,"quality":10,"scrollSpeed":11,"scrollSpeedMultiplier":12,"remapEnabled":13,"remapX":14,"remapY":15,"remapZ":16,"positionAmount":17,"rotationAmount":18,"sizeAmount":19},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule":{"enabled":0,"mode":1,"curve":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"space":4,"randomized":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule":{"enabled":0,"limit":1,"limitX":2,"limitY":3,"limitZ":4,"dampen":5,"separateAxes":6,"space":7,"drag":8,"multiplyDragByParticleSize":9,"multiplyDragByParticleVelocity":10},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer":{"mesh":0,"meshCount":2,"activeVertexStreamsCount":3,"alignment":4,"renderMode":5,"sortMode":6,"lengthScale":7,"velocityScale":8,"cameraVelocityScale":9,"normalDirection":10,"sortingFudge":11,"minParticleSize":12,"maxParticleSize":13,"pivot":14,"trailMaterial":17,"applyActiveColorSpace":19,"enabled":20,"sharedMaterial":21,"sharedMaterials":23,"receiveShadows":24,"shadowCastingMode":25,"sortingLayerID":26,"sortingOrder":27,"lightmapIndex":28,"lightmapSceneIndex":29,"lightmapScaleOffset":30,"lightProbeUsage":34,"reflectionProbeUsage":35},"Luna.Unity.DTO.UnityEngine.Components.AudioSource":{"clip":0,"outputAudioMixerGroup":2,"playOnAwake":4,"loop":5,"time":6,"volume":7,"pitch":8,"enabled":9},"Luna.Unity.DTO.UnityEngine.Components.CircleCollider2D":{"radius":0,"enabled":1,"isTrigger":2,"usedByEffector":3,"density":4,"offset":5,"material":7},"Luna.Unity.DTO.UnityEngine.Components.SpriteMask":{"frontSortingLayerID":0,"frontSortingOrder":1,"backSortingLayerID":2,"backSortingOrder":3,"alphaCutoff":4,"sprite":5,"tileMode":7,"isCustomRangeActive":8,"spriteSortPoint":9,"enabled":10,"sharedMaterial":11,"sharedMaterials":13,"receiveShadows":14,"shadowCastingMode":15,"sortingLayerID":16,"sortingOrder":17,"lightmapIndex":18,"lightmapSceneIndex":19,"lightmapScaleOffset":20,"lightProbeUsage":24,"reflectionProbeUsage":25},"Luna.Unity.DTO.UnityEngine.Components.PolygonCollider2D":{"usedByComposite":0,"autoTiling":1,"points":2,"enabled":3,"isTrigger":4,"usedByEffector":5,"density":6,"offset":7,"material":9},"Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D":{"bodyType":0,"material":1,"simulated":3,"useAutoMass":4,"mass":5,"drag":6,"angularDrag":7,"gravityScale":8,"collisionDetectionMode":9,"sleepMode":10,"constraints":11},"Luna.Unity.DTO.UnityEngine.Assets.Mesh":{"name":0,"halfPrecision":1,"useSimplification":2,"useUInt32IndexFormat":3,"vertexCount":4,"aabb":5,"streams":6,"vertices":7,"subMeshes":8,"bindposes":9,"blendShapes":10},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh":{"triangles":0},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape":{"name":0,"frames":1},"Luna.Unity.DTO.UnityEngine.Textures.Cubemap":{"name":0,"atlasId":1,"mipmapCount":2,"hdr":3,"size":4,"anisoLevel":5,"filterMode":6,"rects":7,"wrapU":8,"wrapV":9},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"aspect":0,"orthographic":1,"orthographicSize":2,"backgroundColor":3,"nearClipPlane":7,"farClipPlane":8,"fieldOfView":9,"depth":10,"clearFlags":11,"cullingMask":12,"rect":13,"targetTexture":14,"usePhysicalProperties":16,"focalLength":17,"sensorSize":18,"lensShift":20,"gateFit":22,"commandBufferCount":23,"cameraType":24,"enabled":25},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"planeDistance":0,"referencePixelsPerUnit":1,"isFallbackOverlay":2,"renderMode":3,"renderOrder":4,"sortingLayerName":5,"sortingOrder":6,"scaleFactor":7,"worldCamera":8,"overrideSorting":10,"pixelPerfect":11,"targetDisplay":12,"overridePixelPerfect":13,"enabled":14},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"customReflection":36,"defaultReflection":38,"defaultReflectionMode":40,"defaultReflectionResolution":41,"sunLightObjectId":42,"pixelLightCount":43,"defaultReflectionHDR":44,"hasLightDataAsset":45,"hasManualGenerate":46},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2,"shadowMask":4},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"hasDepthOnlyPass":10,"isCreatedByShaderGraph":11,"disableBatching":12,"compiled":13},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip":{"name":0,"wrapMode":1,"isLooping":2,"length":3,"curves":4,"events":5,"halfPrecision":6,"_frameRate":7,"localBounds":8,"hasMuscleCurves":9,"clipMuscleConstant":10,"clipBindingConstant":11},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve":{"path":0,"hash":1,"componentType":2,"property":3,"keys":4,"objectReferenceKeys":5},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey":{"time":0,"value":1},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent":{"functionName":0,"floatParameter":1,"intParameter":2,"stringParameter":3,"objectReferenceParameter":4,"time":6},"Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds":{"center":0,"extends":3},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant":{"genericBindings":0,"pptrCurveMapping":1},"Luna.Unity.DTO.UnityEngine.Assets.Font":{"name":0,"ascent":1,"originalLineHeight":2,"fontSize":3,"characterInfo":4,"texture":5,"originalFontSize":7},"Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo":{"index":0,"advance":1,"bearing":2,"glyphWidth":3,"glyphHeight":4,"minX":5,"maxX":6,"minY":7,"maxY":8,"uvBottomLeftX":9,"uvBottomLeftY":10,"uvBottomRightX":11,"uvBottomRightY":12,"uvTopLeftX":13,"uvTopLeftY":14,"uvTopRightX":15,"uvTopRightY":16},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController":{"name":0,"layers":1,"parameters":2,"animationClips":3,"avatarUnsupported":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer":{"name":0,"defaultWeight":1,"blendingMode":2,"avatarMask":3,"syncedLayerIndex":4,"syncedLayerAffectsTiming":5,"syncedLayers":6,"stateMachine":7},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine":{"id":0,"name":1,"path":2,"states":3,"machines":4,"entryStateTransitions":5,"exitStateTransitions":6,"anyStateTransitions":7,"defaultStateId":8},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState":{"id":0,"name":1,"cycleOffset":2,"cycleOffsetParameter":3,"cycleOffsetParameterActive":4,"mirror":5,"mirrorParameter":6,"mirrorParameterActive":7,"motionId":8,"nameHash":9,"fullPathHash":10,"speed":11,"speedParameter":12,"speedParameterActive":13,"tag":14,"tagHash":15,"writeDefaultValues":16,"behaviours":17,"transitions":18},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition":{"fullPath":0,"canTransitionToSelf":1,"duration":2,"exitTime":3,"hasExitTime":4,"hasFixedDuration":5,"interruptionSource":6,"offset":7,"orderedInterruption":8,"destinationStateId":9,"isExit":10,"mute":11,"solo":12,"conditions":13},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition":{"destinationStateId":0,"isExit":1,"mute":2,"solo":3,"conditions":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition":{"mode":0,"parameter":1,"threshold":2},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter":{"defaultBool":0,"defaultFloat":1,"defaultInt":2,"name":3,"nameHash":4,"type":5},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableStaticBatching":9,"enableDynamicBatching":10,"usePreservativeDynamicBatching":11,"lightmapEncodingQuality":12,"desiredColorSpace":13,"allTags":14},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37},"Luna.Unity.DTO.UnityEngine.Audio.AudioMixer":{"groups":0,"snapshots":1},"Luna.Unity.DTO.UnityEngine.Audio.AudioMixerGroup":{"id":0,"childGroupIds":1,"name":2},"Luna.Unity.DTO.UnityEngine.Audio.AudioMixerSnapshot":{"id":0,"parameters":1},"Luna.Unity.DTO.UnityEngine.Audio.AudioMixerSnapshot+Parameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame":{"weight":0,"vertices":1,"normals":2,"tangents":3}}

Deserializers.requiredComponents = {"80":[81],"82":[81],"83":[81],"84":[81],"85":[81],"86":[81],"87":[88],"89":[56],"90":[91],"92":[91],"93":[91],"94":[91],"95":[91],"96":[91],"97":[91],"98":[45],"99":[45],"100":[45],"101":[45],"102":[45],"103":[45],"104":[45],"105":[45],"106":[45],"107":[45],"108":[45],"109":[45],"110":[45],"111":[56],"112":[113],"114":[115],"116":[115],"68":[61],"117":[27],"118":[4],"33":[29],"119":[4],"120":[121],"122":[121],"37":[10],"54":[29],"123":[4],"25":[4],"124":[61],"125":[61],"71":[68],"62":[72,61],"126":[61],"70":[68],"127":[61],"128":[61],"129":[61],"130":[61],"131":[61],"132":[61],"133":[61],"134":[61],"135":[61],"136":[72,61],"137":[61],"138":[61],"139":[61],"140":[61],"63":[72,61],"141":[61],"142":[76],"143":[76],"77":[76],"144":[76],"145":[56],"146":[56]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Transform","UnityEngine.MonoBehaviour","Level1_Hair_Playable","UnityEngine.SpriteRenderer","UnityEngine.ParticleSystem","BasicDrag","OutlinePulse","UnityEngine.GameObject","BD_CameraFollow","DG.Tweening.DOTweenAnimation","UnityEngine.Sprite","UnityEngine.AudioClip","BD_Progress","BD_ProgressHelper","UnityEngine.AudioSource","ScratchCardAsset.ScratchCardManager","PlayableCTA","PlayableFadeCoverSettings","UnityEngine.Texture2D","ScratchCardAsset.ScratchCard","ScratchCardAsset.EraseProgress","UnityEngine.Animator","UnityEditor.Animations.AnimatorController","UnityEngine.Material","UnityEngine.U2D.Animation.SpriteSkin","UnityEngine.TrailRenderer","UnityEngine.LineRenderer","StaticFixedPipe","UnityEngine.BoxCollider2D","BD_Clamp","BD_ItemPick","UnityEngine.ParticleSystemRenderer","BD_Sticky","UnityEngine.CircleCollider2D","PlayParticlesOnCollision","UnityEngine.SpriteMask","PlayTweenOnHit","UnityEngine.PolygonCollider2D","PlaySfxOnCollision","InteractableBones","WaypointFollower","UnityEditor.Audio.AudioMixerGroupController","BD_Action","BD_ToolRotate","UnityEngine.Rigidbody2D","BugKill_Tip","ActionOnTap","_2dxFX_Wave","BD_SpriteChange","BD_AnimatorDrag","PlaceItem","BD_Audio","Level1_HairAnim","SpriteButton","DestroyObj","UnityEngine.Camera","UnityEngine.AudioListener","CameraController","MusicSource","UI_Manager","UnityEngine.RectTransform","UnityEngine.UI.Image","UnityEngine.UI.Text","GameManagerPlayable","AudioController","UnityEditor.Audio.AudioMixerController","UnityEngine.Mesh","UnityEngine.Canvas","UnityEngine.EventSystems.UIBehaviour","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEngine.CanvasRenderer","UnityEngine.Font","UnityEngine.UI.Button","PlayableHudRuntime","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","UnityEngine.Cubemap","DG.Tweening.Core.DOTweenSettings","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.ConstantForce","UnityEngine.Rigidbody","UnityEngine.Joint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.FixedJoint","UnityEngine.CharacterJoint","UnityEngine.ConfigurableJoint","UnityEngine.CompositeCollider2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.MeshRenderer","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","RopeController","BD_Fold","Lvl3_DripAnimator","Lvl3_LipstickPicker","UnityEngine.Collider2D","Lvl3_PourFill","RadialCircleFill","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.Mask","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Slider","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster"]

Deserializers.unityVersion = "2022.3.62f2";

Deserializers.productName = "Perfect Makeover Fashion ASMR";

Deserializers.lunaInitializationTime = "08/20/2026 07:41:52";

Deserializers.lunaDaysRunning = "1.1";

Deserializers.lunaVersion = "7.2.0";

Deserializers.lunaSHA = "ea08d29afe2968efcb8d91d5624f033c6485cc68";

Deserializers.creativeName = "";

Deserializers.lunaAppID = "0";

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

Deserializers.runtimeAnalysisExcludedClassesCount = "1715";

Deserializers.runtimeAnalysisExcludedMethodsCount = "4418";

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

Deserializers.buildID = "acfcaeb0-eff3-4076-89e8-af83fa10f9db";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[],[["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"]],[],[]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

