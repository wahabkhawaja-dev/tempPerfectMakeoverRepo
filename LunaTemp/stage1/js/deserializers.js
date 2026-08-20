var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i576 = root || request.c( 'UnityEngine.JointSpring' )
  var i577 = data
  i576.spring = i577[0]
  i576.damper = i577[1]
  i576.targetPosition = i577[2]
  return i576
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i578 = root || request.c( 'UnityEngine.JointMotor' )
  var i579 = data
  i578.m_TargetVelocity = i579[0]
  i578.m_Force = i579[1]
  i578.m_FreeSpin = i579[2]
  return i578
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i580 = root || request.c( 'UnityEngine.JointLimits' )
  var i581 = data
  i580.m_Min = i581[0]
  i580.m_Max = i581[1]
  i580.m_Bounciness = i581[2]
  i580.m_BounceMinVelocity = i581[3]
  i580.m_ContactDistance = i581[4]
  i580.minBounce = i581[5]
  i580.maxBounce = i581[6]
  return i580
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i582 = root || request.c( 'UnityEngine.JointDrive' )
  var i583 = data
  i582.m_PositionSpring = i583[0]
  i582.m_PositionDamper = i583[1]
  i582.m_MaximumForce = i583[2]
  i582.m_UseAcceleration = i583[3]
  return i582
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i584 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i585 = data
  i584.m_Spring = i585[0]
  i584.m_Damper = i585[1]
  return i584
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i586 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i587 = data
  i586.m_Limit = i587[0]
  i586.m_Bounciness = i587[1]
  i586.m_ContactDistance = i587[2]
  return i586
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i588 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i589 = data
  i588.m_ExtremumSlip = i589[0]
  i588.m_ExtremumValue = i589[1]
  i588.m_AsymptoteSlip = i589[2]
  i588.m_AsymptoteValue = i589[3]
  i588.m_Stiffness = i589[4]
  return i588
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i590 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i591 = data
  i590.m_LowerAngle = i591[0]
  i590.m_UpperAngle = i591[1]
  return i590
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i592 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i593 = data
  i592.m_MotorSpeed = i593[0]
  i592.m_MaximumMotorTorque = i593[1]
  return i592
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i594 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i595 = data
  i594.m_DampingRatio = i595[0]
  i594.m_Frequency = i595[1]
  i594.m_Angle = i595[2]
  return i594
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i596 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i597 = data
  i596.m_LowerTranslation = i597[0]
  i596.m_UpperTranslation = i597[1]
  return i596
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i598 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i599 = data
  i598.name = i599[0]
  i598.width = i599[1]
  i598.height = i599[2]
  i598.mipmapCount = i599[3]
  i598.anisoLevel = i599[4]
  i598.filterMode = i599[5]
  i598.hdr = !!i599[6]
  i598.format = i599[7]
  i598.wrapMode = i599[8]
  i598.alphaIsTransparency = !!i599[9]
  i598.alphaSource = i599[10]
  i598.graphicsFormat = i599[11]
  i598.sRGBTexture = !!i599[12]
  i598.desiredColorSpace = i599[13]
  i598.wrapU = i599[14]
  i598.wrapV = i599[15]
  return i598
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i600 = root || new pc.UnityMaterial()
  var i601 = data
  i600.name = i601[0]
  request.r(i601[1], i601[2], 0, i600, 'shader')
  i600.renderQueue = i601[3]
  i600.enableInstancing = !!i601[4]
  var i603 = i601[5]
  var i602 = []
  for(var i = 0; i < i603.length; i += 1) {
    i602.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i603[i + 0]) );
  }
  i600.floatParameters = i602
  var i605 = i601[6]
  var i604 = []
  for(var i = 0; i < i605.length; i += 1) {
    i604.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i605[i + 0]) );
  }
  i600.colorParameters = i604
  var i607 = i601[7]
  var i606 = []
  for(var i = 0; i < i607.length; i += 1) {
    i606.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i607[i + 0]) );
  }
  i600.vectorParameters = i606
  var i609 = i601[8]
  var i608 = []
  for(var i = 0; i < i609.length; i += 1) {
    i608.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i609[i + 0]) );
  }
  i600.textureParameters = i608
  var i611 = i601[9]
  var i610 = []
  for(var i = 0; i < i611.length; i += 1) {
    i610.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i611[i + 0]) );
  }
  i600.materialFlags = i610
  return i600
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i614 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i615 = data
  i614.name = i615[0]
  i614.value = i615[1]
  return i614
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i618 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i619 = data
  i618.name = i619[0]
  i618.value = new pc.Color(i619[1], i619[2], i619[3], i619[4])
  return i618
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i622 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i623 = data
  i622.name = i623[0]
  i622.value = new pc.Vec4( i623[1], i623[2], i623[3], i623[4] )
  return i622
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i626 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i627 = data
  i626.name = i627[0]
  request.r(i627[1], i627[2], 0, i626, 'value')
  return i626
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i630 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i631 = data
  i630.name = i631[0]
  i630.enabled = !!i631[1]
  return i630
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i632 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i633 = data
  i632.position = new pc.Vec3( i633[0], i633[1], i633[2] )
  i632.scale = new pc.Vec3( i633[3], i633[4], i633[5] )
  i632.rotation = new pc.Quat(i633[6], i633[7], i633[8], i633[9])
  return i632
}

Deserializers["Level2_Cloth_Playable"] = function (request, data, root) {
  var i634 = root || request.c( 'Level2_Cloth_Playable' )
  var i635 = data
  request.r(i635[0], i635[1], 0, i634, 'ClothChangeView')
  request.r(i635[2], i635[3], 0, i634, 'WashingView')
  request.r(i635[4], i635[5], 0, i634, 'DryView')
  request.r(i635[6], i635[7], 0, i634, 'WashingTools')
  request.r(i635[8], i635[9], 0, i634, 'knittingView')
  request.r(i635[10], i635[11], 0, i634, 'doorAnim')
  request.r(i635[12], i635[13], 0, i634, 'ClothDirtySink')
  request.r(i635[14], i635[15], 0, i634, 'ClothDirtySinkWet')
  request.r(i635[16], i635[17], 0, i634, 'ClothDirtySinkClean')
  request.r(i635[18], i635[19], 0, i634, 'waterBase')
  request.r(i635[20], i635[21], 0, i634, 'waterTop')
  request.r(i635[22], i635[23], 0, i634, 'waterClean')
  request.r(i635[24], i635[25], 0, i634, 'waterDirty')
  request.r(i635[26], i635[27], 0, i634, 'sinkFoamClean')
  i634.ZoomStep1 = request.d('ZoomPos', i635[28], i634.ZoomStep1)
  request.r(i635[29], i635[30], 0, i634, 'ClothHand')
  request.r(i635[31], i635[32], 0, i634, 'ToolStep1')
  request.r(i635[33], i635[34], 0, i634, 'step1_Indication')
  request.r(i635[35], i635[36], 0, i634, 'Basket_Step1')
  request.r(i635[37], i635[38], 0, i634, 'ClothinBasketStep1')
  i634.ZoomStep2 = request.d('ZoomPos', i635[39], i634.ZoomStep2)
  request.r(i635[40], i635[41], 0, i634, 'ToolStep2')
  request.r(i635[42], i635[43], 0, i634, 'Basket_Cloth')
  request.r(i635[44], i635[45], 0, i634, 'step2_Indication')
  i634.ZoomStep3 = request.d('ZoomPos', i635[46], i634.ZoomStep3)
  request.r(i635[47], i635[48], 0, i634, 'TapColStep3')
  request.r(i635[49], i635[50], 0, i634, 'step3_Indication')
  request.r(i635[51], i635[52], 0, i634, 'tapParent')
  request.r(i635[53], i635[54], 0, i634, 'tapMask')
  request.r(i635[55], i635[56], 0, i634, 'tapTopRend')
  i634.ZoomStep4 = request.d('ZoomPos', i635[57], i634.ZoomStep4)
  request.r(i635[58], i635[59], 0, i634, 'ToolStep4')
  request.r(i635[60], i635[61], 0, i634, 'soapTarget')
  i634.ZoomStep5 = request.d('ZoomPos', i635[62], i634.ZoomStep5)
  request.r(i635[63], i635[64], 0, i634, 'ToolStep5')
  i634.ZoomStep6 = request.d('ZoomPos', i635[65], i634.ZoomStep6)
  request.r(i635[66], i635[67], 0, i634, 'basketStep6')
  request.r(i635[68], i635[69], 0, i634, 'ToolStep6')
  i634.ZoomStep3a = request.d('ZoomPos', i635[70], i634.ZoomStep3a)
  request.r(i635[71], i635[72], 0, i634, 'ToolStep3a')
  request.r(i635[73], i635[74], 0, i634, 'step3aIndication')
  i634.levelName = i635[75]
  i634.levelReward = i635[76]
  request.r(i635[77], i635[78], 0, i634, 'LevelIcon')
  request.r(i635[79], i635[80], 0, i634, 'Level_BG')
  var i637 = i635[81]
  var i636 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Sprite')))
  for(var i = 0; i < i637.length; i += 2) {
  request.r(i637[i + 0], i637[i + 1], 1, i636, '')
  }
  i634.ToolIcons = i636
  var i639 = i635[82]
  var i638 = []
  for(var i = 0; i < i639.length; i += 2) {
  request.r(i639[i + 0], i639[i + 1], 2, i638, '')
  }
  i634.AllDrags = i638
  var i641 = i635[83]
  var i640 = []
  for(var i = 0; i < i641.length; i += 2) {
  request.r(i641[i + 0], i641[i + 1], 2, i640, '')
  }
  i634.AllSources = i640
  var i643 = i635[84]
  var i642 = []
  for(var i = 0; i < i643.length; i += 2) {
  request.r(i643[i + 0], i643[i + 1], 2, i642, '')
  }
  i634.AllScratches = i642
  i634.stepsDone = i635[85]
  i634.levelNo = i635[86]
  i634.partNo = i635[87]
  request.r(i635[88], i635[89], 0, i634, 'clothSfx')
  request.r(i635[90], i635[91], 0, i634, 'tapOpenSfx')
  request.r(i635[92], i635[93], 0, i634, 'waterPourSfx')
  return i634
}

Deserializers["ZoomPos"] = function (request, data, root) {
  var i644 = root || request.c( 'ZoomPos' )
  var i645 = data
  i644.CameraPos = new pc.Vec3( i645[0], i645[1], i645[2] )
  i644.CameraFOV = i645[3]
  return i644
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i654 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i655 = data
  i654.name = i655[0]
  i654.tagId = i655[1]
  i654.enabled = !!i655[2]
  i654.isStatic = !!i655[3]
  i654.layer = i655[4]
  return i654
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animator"] = function (request, data, root) {
  var i656 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animator' )
  var i657 = data
  request.r(i657[0], i657[1], 0, i656, 'animatorController')
  request.r(i657[2], i657[3], 0, i656, 'avatar')
  i656.updateMode = i657[4]
  i656.hasTransformHierarchy = !!i657[5]
  i656.applyRootMotion = !!i657[6]
  var i659 = i657[7]
  var i658 = []
  for(var i = 0; i < i659.length; i += 2) {
  request.r(i659[i + 0], i659[i + 1], 2, i658, '')
  }
  i656.humanBones = i658
  i656.enabled = !!i657[8]
  return i656
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer"] = function (request, data, root) {
  var i662 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer' )
  var i663 = data
  i662.color = new pc.Color(i663[0], i663[1], i663[2], i663[3])
  request.r(i663[4], i663[5], 0, i662, 'sprite')
  i662.flipX = !!i663[6]
  i662.flipY = !!i663[7]
  i662.drawMode = i663[8]
  i662.size = new pc.Vec2( i663[9], i663[10] )
  i662.tileMode = i663[11]
  i662.adaptiveModeThreshold = i663[12]
  i662.maskInteraction = i663[13]
  i662.spriteSortPoint = i663[14]
  i662.enabled = !!i663[15]
  request.r(i663[16], i663[17], 0, i662, 'sharedMaterial')
  var i665 = i663[18]
  var i664 = []
  for(var i = 0; i < i665.length; i += 2) {
  request.r(i665[i + 0], i665[i + 1], 2, i664, '')
  }
  i662.sharedMaterials = i664
  i662.receiveShadows = !!i663[19]
  i662.shadowCastingMode = i663[20]
  i662.sortingLayerID = i663[21]
  i662.sortingOrder = i663[22]
  i662.lightmapIndex = i663[23]
  i662.lightmapSceneIndex = i663[24]
  i662.lightmapScaleOffset = new pc.Vec4( i663[25], i663[26], i663[27], i663[28] )
  i662.lightProbeUsage = i663[29]
  i662.reflectionProbeUsage = i663[30]
  return i662
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.TrailRenderer"] = function (request, data, root) {
  var i668 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.TrailRenderer' )
  var i669 = data
  var i671 = i669[0]
  var i670 = []
  for(var i = 0; i < i671.length; i += 3) {
    i670.push( new pc.Vec3( i671[i + 0], i671[i + 1], i671[i + 2] ) );
  }
  i668.positions = i670
  i668.positionCount = i669[1]
  i668.time = i669[2]
  i668.startWidth = i669[3]
  i668.endWidth = i669[4]
  i668.widthMultiplier = i669[5]
  i668.autodestruct = !!i669[6]
  i668.emitting = !!i669[7]
  i668.numCornerVertices = i669[8]
  i668.numCapVertices = i669[9]
  i668.minVertexDistance = i669[10]
  i668.colorGradient = i669[11] ? new pc.ColorGradient(i669[11][0], i669[11][1], i669[11][2]) : null
  i668.startColor = new pc.Color(i669[12], i669[13], i669[14], i669[15])
  i668.endColor = new pc.Color(i669[16], i669[17], i669[18], i669[19])
  i668.generateLightingData = !!i669[20]
  i668.textureMode = i669[21]
  i668.alignment = i669[22]
  i668.widthCurve = new pc.AnimationCurve( { keys_flow: i669[23] } )
  i668.enabled = !!i669[24]
  request.r(i669[25], i669[26], 0, i668, 'sharedMaterial')
  var i673 = i669[27]
  var i672 = []
  for(var i = 0; i < i673.length; i += 2) {
  request.r(i673[i + 0], i673[i + 1], 2, i672, '')
  }
  i668.sharedMaterials = i672
  i668.receiveShadows = !!i669[28]
  i668.shadowCastingMode = i669[29]
  i668.sortingLayerID = i669[30]
  i668.sortingOrder = i669[31]
  i668.lightmapIndex = i669[32]
  i668.lightmapSceneIndex = i669[33]
  i668.lightmapScaleOffset = new pc.Vec4( i669[34], i669[35], i669[36], i669[37] )
  i668.lightProbeUsage = i669[38]
  i668.reflectionProbeUsage = i669[39]
  return i668
}

Deserializers["UnityEngine.U2D.Animation.SpriteSkin"] = function (request, data, root) {
  var i676 = root || request.c( 'UnityEngine.U2D.Animation.SpriteSkin' )
  var i677 = data
  request.r(i677[0], i677[1], 0, i676, 'm_RootBone')
  var i679 = i677[2]
  var i678 = []
  for(var i = 0; i < i679.length; i += 2) {
  request.r(i679[i + 0], i679[i + 1], 2, i678, '')
  }
  i676.m_BoneTransforms = i678
  i676.m_AlwaysUpdate = !!i677[3]
  i676.m_AutoRebind = !!i677[4]
  return i676
}

Deserializers["BD_AnimationHelper"] = function (request, data, root) {
  var i680 = root || request.c( 'BD_AnimationHelper' )
  var i681 = data
  i680.OnAnimationComplete = request.d('UnityEngine.Events.UnityEvent', i681[0], i680.OnAnimationComplete)
  request.r(i681[1], i681[2], 0, i680, 'sfxClip')
  return i680
}

Deserializers["UnityEngine.Events.UnityEvent"] = function (request, data, root) {
  var i682 = root || request.c( 'UnityEngine.Events.UnityEvent' )
  var i683 = data
  i682.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i683[0], i682.m_PersistentCalls)
  return i682
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i684 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i685 = data
  var i687 = i685[0]
  var i686 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i687.length; i += 1) {
    i686.add(request.d('UnityEngine.Events.PersistentCall', i687[i + 0]));
  }
  i684.m_Calls = i686
  return i684
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i690 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i691 = data
  request.r(i691[0], i691[1], 0, i690, 'm_Target')
  i690.m_TargetAssemblyTypeName = i691[2]
  i690.m_MethodName = i691[3]
  i690.m_Mode = i691[4]
  i690.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i691[5], i690.m_Arguments)
  i690.m_CallState = i691[6]
  return i690
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i692 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i693 = data
  request.r(i693[0], i693[1], 0, i692, 'm_ObjectArgument')
  i692.m_ObjectArgumentAssemblyTypeName = i693[2]
  i692.m_IntArgument = i693[3]
  i692.m_FloatArgument = i693[4]
  i692.m_StringArgument = i693[5]
  i692.m_BoolArgument = !!i693[6]
  return i692
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteMask"] = function (request, data, root) {
  var i694 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteMask' )
  var i695 = data
  i694.frontSortingLayerID = i695[0]
  i694.frontSortingOrder = i695[1]
  i694.backSortingLayerID = i695[2]
  i694.backSortingOrder = i695[3]
  i694.alphaCutoff = i695[4]
  request.r(i695[5], i695[6], 0, i694, 'sprite')
  i694.tileMode = i695[7]
  i694.isCustomRangeActive = !!i695[8]
  i694.spriteSortPoint = i695[9]
  i694.enabled = !!i695[10]
  request.r(i695[11], i695[12], 0, i694, 'sharedMaterial')
  var i697 = i695[13]
  var i696 = []
  for(var i = 0; i < i697.length; i += 2) {
  request.r(i697[i + 0], i697[i + 1], 2, i696, '')
  }
  i694.sharedMaterials = i696
  i694.receiveShadows = !!i695[14]
  i694.shadowCastingMode = i695[15]
  i694.sortingLayerID = i695[16]
  i694.sortingOrder = i695[17]
  i694.lightmapIndex = i695[18]
  i694.lightmapSceneIndex = i695[19]
  i694.lightmapScaleOffset = new pc.Vec4( i695[20], i695[21], i695[22], i695[23] )
  i694.lightProbeUsage = i695[24]
  i694.reflectionProbeUsage = i695[25]
  return i694
}

Deserializers["BasicDrag"] = function (request, data, root) {
  var i698 = root || request.c( 'BasicDrag' )
  var i699 = data
  i698.canDrag = !!i699[0]
  i698.dragByDelta = !!i699[1]
  i698.isDragging = !!i699[2]
  i698.moveWithPointer = !!i699[3]
  i698.canReturn = !!i699[4]
  i698.jumpOnReturn = !!i699[5]
  i698.returnTime = i699[6]
  i698.Tool_Offset = new pc.Vec3( i699[7], i699[8], i699[9] )
  i698.canScaleIncrease = !!i699[10]
  i698.Self_ScaleNew = new pc.Vec3( i699[11], i699[12], i699[13] )
  i698.canRotateOnPick = !!i699[14]
  i698.startRot = new pc.Vec3( i699[15], i699[16], i699[17] )
  i698.newRot = new pc.Vec3( i699[18], i699[19], i699[20] )
  var i701 = i699[21]
  var i700 = []
  for(var i = 0; i < i701.length; i += 2) {
  request.r(i701[i + 0], i701[i + 1], 2, i700, '')
  }
  i698.childSprite = i700
  request.r(i699[22], i699[23], 0, i698, 'ToolSelectClip')
  request.r(i699[24], i699[25], 0, i698, 'ToolLoopClip')
  request.r(i699[26], i699[27], 0, i698, 'thisParticles')
  i698.onDragparticle = !!i699[28]
  request.r(i699[29], i699[30], 0, i698, 'dragParticles')
  request.r(i699[31], i699[32], 0, i698, 'anim')
  i698.startPos = new pc.Vec3( i699[33], i699[34], i699[35] )
  i698.startScale = new pc.Vec3( i699[36], i699[37], i699[38] )
  i698.Vibration = !!i699[39]
  i698.isPlacedCannotMove = !!i699[40]
  i698.isObjectMovingWhileDragging = !!i699[41]
  i698.OnMouseDownEvent = request.d('System.Action', i699[42], i698.OnMouseDownEvent)
  i698.OnMouseUpEvent = request.d('System.Action', i699[43], i698.OnMouseUpEvent)
  i698.ProgStartEvent = request.d('System.Action', i699[44], i698.ProgStartEvent)
  i698.ProgEndEvent = request.d('System.Action', i699[45], i698.ProgEndEvent)
  i698.canCallMouseUpWhenGamePaused = !!i699[46]
  i698.ClampX_L = i699[47]
  i698.ClampX_H = i699[48]
  i698.ClampY_L = i699[49]
  i698.ClampY_H = i699[50]
  i698.startOrder = i699[51]
  i698.dontResetItIsInCollider = !!i699[52]
  request.r(i699[53], i699[54], 0, i698, 'thisCollider')
  request.r(i699[55], i699[56], 0, i698, 'thisSR')
  i698.OnMouseDownEventIndependentFromCanDrag = request.d('System.Action', i699[57], i698.OnMouseDownEventIndependentFromCanDrag)
  return i698
}

Deserializers["System.Action"] = function (request, data, root) {
  var i704 = root || request.c( 'System.Action' )
  var i705 = data
  return i704
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D"] = function (request, data, root) {
  var i706 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D' )
  var i707 = data
  i706.usedByComposite = !!i707[0]
  i706.autoTiling = !!i707[1]
  i706.size = new pc.Vec2( i707[2], i707[3] )
  i706.edgeRadius = i707[4]
  i706.enabled = !!i707[5]
  i706.isTrigger = !!i707[6]
  i706.usedByEffector = !!i707[7]
  i706.density = i707[8]
  i706.offset = new pc.Vec2( i707[9], i707[10] )
  request.r(i707[11], i707[12], 0, i706, 'material')
  return i706
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D"] = function (request, data, root) {
  var i708 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D' )
  var i709 = data
  i708.bodyType = i709[0]
  request.r(i709[1], i709[2], 0, i708, 'material')
  i708.simulated = !!i709[3]
  i708.useAutoMass = !!i709[4]
  i708.mass = i709[5]
  i708.drag = i709[6]
  i708.angularDrag = i709[7]
  i708.gravityScale = i709[8]
  i708.collisionDetectionMode = i709[9]
  i708.sleepMode = i709[10]
  i708.constraints = i709[11]
  return i708
}

Deserializers["PlaceItem"] = function (request, data, root) {
  var i710 = root || request.c( 'PlaceItem' )
  var i711 = data
  request.r(i711[0], i711[1], 0, i710, 'thisDrag')
  request.r(i711[2], i711[3], 0, i710, 'Target')
  request.r(i711[4], i711[5], 0, i710, 'Clip')
  i710.jumpOnPlace = !!i711[6]
  i710.jumpHeight = i711[7]
  i710.jumpDuration = i711[8]
  i710.settleDuration = i711[9]
  i710.isPlaced = !!i711[10]
  i710.isInsideCollider = !!i711[11]
  i710.OnPlaced = request.d('UnityEngine.Events.UnityEvent', i711[12], i710.OnPlaced)
  return i710
}

Deserializers["DG.Tweening.DOTweenAnimation"] = function (request, data, root) {
  var i712 = root || request.c( 'DG.Tweening.DOTweenAnimation' )
  var i713 = data
  i712.targetIsSelf = !!i713[0]
  request.r(i713[1], i713[2], 0, i712, 'targetGO')
  i712.tweenTargetIsTargetGO = !!i713[3]
  i712.delay = i713[4]
  i712.duration = i713[5]
  i712.easeType = i713[6]
  i712.easeCurve = new pc.AnimationCurve( { keys_flow: i713[7] } )
  i712.loopType = i713[8]
  i712.loops = i713[9]
  i712.id = i713[10]
  i712.isRelative = !!i713[11]
  i712.isFrom = !!i713[12]
  i712.isIndependentUpdate = !!i713[13]
  i712.autoKill = !!i713[14]
  i712.autoGenerate = !!i713[15]
  i712.isActive = !!i713[16]
  i712.isValid = !!i713[17]
  request.r(i713[18], i713[19], 0, i712, 'target')
  i712.animationType = i713[20]
  i712.targetType = i713[21]
  i712.forcedTargetType = i713[22]
  i712.autoPlay = !!i713[23]
  i712.useTargetAsV3 = !!i713[24]
  i712.endValueFloat = i713[25]
  i712.endValueV3 = new pc.Vec3( i713[26], i713[27], i713[28] )
  i712.endValueV2 = new pc.Vec2( i713[29], i713[30] )
  i712.endValueColor = new pc.Color(i713[31], i713[32], i713[33], i713[34])
  i712.endValueString = i713[35]
  i712.endValueRect = UnityEngine.Rect.MinMaxRect(i713[36], i713[37], i713[38], i713[39])
  request.r(i713[40], i713[41], 0, i712, 'endValueTransform')
  i712.optionalBool0 = !!i713[42]
  i712.optionalBool1 = !!i713[43]
  i712.optionalFloat0 = i713[44]
  i712.optionalInt0 = i713[45]
  i712.optionalRotationMode = i713[46]
  i712.optionalScrambleMode = i713[47]
  i712.optionalShakeRandomnessMode = i713[48]
  i712.optionalString = i713[49]
  i712.updateType = i713[50]
  i712.isSpeedBased = !!i713[51]
  i712.hasOnStart = !!i713[52]
  i712.hasOnPlay = !!i713[53]
  i712.hasOnUpdate = !!i713[54]
  i712.hasOnStepComplete = !!i713[55]
  i712.hasOnComplete = !!i713[56]
  i712.hasOnTweenCreated = !!i713[57]
  i712.hasOnRewind = !!i713[58]
  i712.onStart = request.d('UnityEngine.Events.UnityEvent', i713[59], i712.onStart)
  i712.onPlay = request.d('UnityEngine.Events.UnityEvent', i713[60], i712.onPlay)
  i712.onUpdate = request.d('UnityEngine.Events.UnityEvent', i713[61], i712.onUpdate)
  i712.onStepComplete = request.d('UnityEngine.Events.UnityEvent', i713[62], i712.onStepComplete)
  i712.onComplete = request.d('UnityEngine.Events.UnityEvent', i713[63], i712.onComplete)
  i712.onTweenCreated = request.d('UnityEngine.Events.UnityEvent', i713[64], i712.onTweenCreated)
  i712.onRewind = request.d('UnityEngine.Events.UnityEvent', i713[65], i712.onRewind)
  return i712
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystem"] = function (request, data, root) {
  var i714 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystem' )
  var i715 = data
  i714.main = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule', i715[0], i714.main)
  i714.colorBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule', i715[1], i714.colorBySpeed)
  i714.colorOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule', i715[2], i714.colorOverLifetime)
  i714.emission = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule', i715[3], i714.emission)
  i714.rotationBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule', i715[4], i714.rotationBySpeed)
  i714.rotationOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule', i715[5], i714.rotationOverLifetime)
  i714.shape = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule', i715[6], i714.shape)
  i714.sizeBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule', i715[7], i714.sizeBySpeed)
  i714.sizeOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule', i715[8], i714.sizeOverLifetime)
  i714.textureSheetAnimation = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule', i715[9], i714.textureSheetAnimation)
  i714.velocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule', i715[10], i714.velocityOverLifetime)
  i714.noise = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule', i715[11], i714.noise)
  i714.inheritVelocity = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule', i715[12], i714.inheritVelocity)
  i714.forceOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule', i715[13], i714.forceOverLifetime)
  i714.limitVelocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule', i715[14], i714.limitVelocityOverLifetime)
  i714.useAutoRandomSeed = !!i715[15]
  i714.randomSeed = i715[16]
  return i714
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule"] = function (request, data, root) {
  var i716 = root || new pc.ParticleSystemMain()
  var i717 = data
  i716.duration = i717[0]
  i716.loop = !!i717[1]
  i716.prewarm = !!i717[2]
  i716.startDelay = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i717[3], i716.startDelay)
  i716.startLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i717[4], i716.startLifetime)
  i716.startSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i717[5], i716.startSpeed)
  i716.startSize3D = !!i717[6]
  i716.startSizeX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i717[7], i716.startSizeX)
  i716.startSizeY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i717[8], i716.startSizeY)
  i716.startSizeZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i717[9], i716.startSizeZ)
  i716.startRotation3D = !!i717[10]
  i716.startRotationX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i717[11], i716.startRotationX)
  i716.startRotationY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i717[12], i716.startRotationY)
  i716.startRotationZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i717[13], i716.startRotationZ)
  i716.startColor = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i717[14], i716.startColor)
  i716.gravityModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i717[15], i716.gravityModifier)
  i716.simulationSpace = i717[16]
  request.r(i717[17], i717[18], 0, i716, 'customSimulationSpace')
  i716.simulationSpeed = i717[19]
  i716.useUnscaledTime = !!i717[20]
  i716.scalingMode = i717[21]
  i716.playOnAwake = !!i717[22]
  i716.maxParticles = i717[23]
  i716.emitterVelocityMode = i717[24]
  i716.stopAction = i717[25]
  return i716
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve"] = function (request, data, root) {
  var i718 = root || new pc.MinMaxCurve()
  var i719 = data
  i718.mode = i719[0]
  i718.curveMin = new pc.AnimationCurve( { keys_flow: i719[1] } )
  i718.curveMax = new pc.AnimationCurve( { keys_flow: i719[2] } )
  i718.curveMultiplier = i719[3]
  i718.constantMin = i719[4]
  i718.constantMax = i719[5]
  return i718
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient"] = function (request, data, root) {
  var i720 = root || new pc.MinMaxGradient()
  var i721 = data
  i720.mode = i721[0]
  i720.gradientMin = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i721[1], i720.gradientMin)
  i720.gradientMax = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i721[2], i720.gradientMax)
  i720.colorMin = new pc.Color(i721[3], i721[4], i721[5], i721[6])
  i720.colorMax = new pc.Color(i721[7], i721[8], i721[9], i721[10])
  return i720
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient"] = function (request, data, root) {
  var i722 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient' )
  var i723 = data
  i722.mode = i723[0]
  var i725 = i723[1]
  var i724 = []
  for(var i = 0; i < i725.length; i += 1) {
    i724.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey', i725[i + 0]) );
  }
  i722.colorKeys = i724
  var i727 = i723[2]
  var i726 = []
  for(var i = 0; i < i727.length; i += 1) {
    i726.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey', i727[i + 0]) );
  }
  i722.alphaKeys = i726
  return i722
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule"] = function (request, data, root) {
  var i728 = root || new pc.ParticleSystemColorBySpeed()
  var i729 = data
  i728.enabled = !!i729[0]
  i728.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i729[1], i728.color)
  i728.range = new pc.Vec2( i729[2], i729[3] )
  return i728
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey"] = function (request, data, root) {
  var i732 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey' )
  var i733 = data
  i732.color = new pc.Color(i733[0], i733[1], i733[2], i733[3])
  i732.time = i733[4]
  return i732
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey"] = function (request, data, root) {
  var i736 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey' )
  var i737 = data
  i736.alpha = i737[0]
  i736.time = i737[1]
  return i736
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule"] = function (request, data, root) {
  var i738 = root || new pc.ParticleSystemColorOverLifetime()
  var i739 = data
  i738.enabled = !!i739[0]
  i738.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i739[1], i738.color)
  return i738
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule"] = function (request, data, root) {
  var i740 = root || new pc.ParticleSystemEmitter()
  var i741 = data
  i740.enabled = !!i741[0]
  i740.rateOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i741[1], i740.rateOverTime)
  i740.rateOverDistance = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i741[2], i740.rateOverDistance)
  var i743 = i741[3]
  var i742 = []
  for(var i = 0; i < i743.length; i += 1) {
    i742.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst', i743[i + 0]) );
  }
  i740.bursts = i742
  return i740
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst"] = function (request, data, root) {
  var i746 = root || new pc.ParticleSystemBurst()
  var i747 = data
  i746.count = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i747[0], i746.count)
  i746.cycleCount = i747[1]
  i746.minCount = i747[2]
  i746.maxCount = i747[3]
  i746.repeatInterval = i747[4]
  i746.time = i747[5]
  return i746
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule"] = function (request, data, root) {
  var i748 = root || new pc.ParticleSystemRotationBySpeed()
  var i749 = data
  i748.enabled = !!i749[0]
  i748.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i749[1], i748.x)
  i748.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i749[2], i748.y)
  i748.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i749[3], i748.z)
  i748.separateAxes = !!i749[4]
  i748.range = new pc.Vec2( i749[5], i749[6] )
  return i748
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule"] = function (request, data, root) {
  var i750 = root || new pc.ParticleSystemRotationOverLifetime()
  var i751 = data
  i750.enabled = !!i751[0]
  i750.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i751[1], i750.x)
  i750.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i751[2], i750.y)
  i750.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i751[3], i750.z)
  i750.separateAxes = !!i751[4]
  return i750
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule"] = function (request, data, root) {
  var i752 = root || new pc.ParticleSystemShape()
  var i753 = data
  i752.enabled = !!i753[0]
  i752.shapeType = i753[1]
  i752.randomDirectionAmount = i753[2]
  i752.sphericalDirectionAmount = i753[3]
  i752.randomPositionAmount = i753[4]
  i752.alignToDirection = !!i753[5]
  i752.radius = i753[6]
  i752.radiusMode = i753[7]
  i752.radiusSpread = i753[8]
  i752.radiusSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i753[9], i752.radiusSpeed)
  i752.radiusThickness = i753[10]
  i752.angle = i753[11]
  i752.length = i753[12]
  i752.boxThickness = new pc.Vec3( i753[13], i753[14], i753[15] )
  i752.meshShapeType = i753[16]
  request.r(i753[17], i753[18], 0, i752, 'mesh')
  request.r(i753[19], i753[20], 0, i752, 'meshRenderer')
  request.r(i753[21], i753[22], 0, i752, 'skinnedMeshRenderer')
  i752.useMeshMaterialIndex = !!i753[23]
  i752.meshMaterialIndex = i753[24]
  i752.useMeshColors = !!i753[25]
  i752.normalOffset = i753[26]
  i752.arc = i753[27]
  i752.arcMode = i753[28]
  i752.arcSpread = i753[29]
  i752.arcSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i753[30], i752.arcSpeed)
  i752.donutRadius = i753[31]
  i752.position = new pc.Vec3( i753[32], i753[33], i753[34] )
  i752.rotation = new pc.Vec3( i753[35], i753[36], i753[37] )
  i752.scale = new pc.Vec3( i753[38], i753[39], i753[40] )
  return i752
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule"] = function (request, data, root) {
  var i754 = root || new pc.ParticleSystemSizeBySpeed()
  var i755 = data
  i754.enabled = !!i755[0]
  i754.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i755[1], i754.x)
  i754.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i755[2], i754.y)
  i754.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i755[3], i754.z)
  i754.separateAxes = !!i755[4]
  i754.range = new pc.Vec2( i755[5], i755[6] )
  return i754
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule"] = function (request, data, root) {
  var i756 = root || new pc.ParticleSystemSizeOverLifetime()
  var i757 = data
  i756.enabled = !!i757[0]
  i756.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i757[1], i756.x)
  i756.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i757[2], i756.y)
  i756.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i757[3], i756.z)
  i756.separateAxes = !!i757[4]
  return i756
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule"] = function (request, data, root) {
  var i758 = root || new pc.ParticleSystemTextureSheetAnimation()
  var i759 = data
  i758.enabled = !!i759[0]
  i758.mode = i759[1]
  i758.animation = i759[2]
  i758.numTilesX = i759[3]
  i758.numTilesY = i759[4]
  i758.useRandomRow = !!i759[5]
  i758.frameOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i759[6], i758.frameOverTime)
  i758.startFrame = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i759[7], i758.startFrame)
  i758.cycleCount = i759[8]
  i758.rowIndex = i759[9]
  i758.flipU = i759[10]
  i758.flipV = i759[11]
  i758.spriteCount = i759[12]
  var i761 = i759[13]
  var i760 = []
  for(var i = 0; i < i761.length; i += 2) {
  request.r(i761[i + 0], i761[i + 1], 2, i760, '')
  }
  i758.sprites = i760
  return i758
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule"] = function (request, data, root) {
  var i764 = root || new pc.ParticleSystemVelocityOverLifetime()
  var i765 = data
  i764.enabled = !!i765[0]
  i764.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i765[1], i764.x)
  i764.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i765[2], i764.y)
  i764.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i765[3], i764.z)
  i764.radial = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i765[4], i764.radial)
  i764.speedModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i765[5], i764.speedModifier)
  i764.space = i765[6]
  i764.orbitalX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i765[7], i764.orbitalX)
  i764.orbitalY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i765[8], i764.orbitalY)
  i764.orbitalZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i765[9], i764.orbitalZ)
  i764.orbitalOffsetX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i765[10], i764.orbitalOffsetX)
  i764.orbitalOffsetY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i765[11], i764.orbitalOffsetY)
  i764.orbitalOffsetZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i765[12], i764.orbitalOffsetZ)
  return i764
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule"] = function (request, data, root) {
  var i766 = root || new pc.ParticleSystemNoise()
  var i767 = data
  i766.enabled = !!i767[0]
  i766.separateAxes = !!i767[1]
  i766.strengthX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i767[2], i766.strengthX)
  i766.strengthY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i767[3], i766.strengthY)
  i766.strengthZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i767[4], i766.strengthZ)
  i766.frequency = i767[5]
  i766.damping = !!i767[6]
  i766.octaveCount = i767[7]
  i766.octaveMultiplier = i767[8]
  i766.octaveScale = i767[9]
  i766.quality = i767[10]
  i766.scrollSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i767[11], i766.scrollSpeed)
  i766.scrollSpeedMultiplier = i767[12]
  i766.remapEnabled = !!i767[13]
  i766.remapX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i767[14], i766.remapX)
  i766.remapY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i767[15], i766.remapY)
  i766.remapZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i767[16], i766.remapZ)
  i766.positionAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i767[17], i766.positionAmount)
  i766.rotationAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i767[18], i766.rotationAmount)
  i766.sizeAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i767[19], i766.sizeAmount)
  return i766
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule"] = function (request, data, root) {
  var i768 = root || new pc.ParticleSystemInheritVelocity()
  var i769 = data
  i768.enabled = !!i769[0]
  i768.mode = i769[1]
  i768.curve = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i769[2], i768.curve)
  return i768
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule"] = function (request, data, root) {
  var i770 = root || new pc.ParticleSystemForceOverLifetime()
  var i771 = data
  i770.enabled = !!i771[0]
  i770.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i771[1], i770.x)
  i770.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i771[2], i770.y)
  i770.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i771[3], i770.z)
  i770.space = i771[4]
  i770.randomized = !!i771[5]
  return i770
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule"] = function (request, data, root) {
  var i772 = root || new pc.ParticleSystemLimitVelocityOverLifetime()
  var i773 = data
  i772.enabled = !!i773[0]
  i772.limit = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i773[1], i772.limit)
  i772.limitX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i773[2], i772.limitX)
  i772.limitY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i773[3], i772.limitY)
  i772.limitZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i773[4], i772.limitZ)
  i772.dampen = i773[5]
  i772.separateAxes = !!i773[6]
  i772.space = i773[7]
  i772.drag = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i773[8], i772.drag)
  i772.multiplyDragByParticleSize = !!i773[9]
  i772.multiplyDragByParticleVelocity = !!i773[10]
  return i772
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer"] = function (request, data, root) {
  var i774 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer' )
  var i775 = data
  request.r(i775[0], i775[1], 0, i774, 'mesh')
  i774.meshCount = i775[2]
  i774.activeVertexStreamsCount = i775[3]
  i774.alignment = i775[4]
  i774.renderMode = i775[5]
  i774.sortMode = i775[6]
  i774.lengthScale = i775[7]
  i774.velocityScale = i775[8]
  i774.cameraVelocityScale = i775[9]
  i774.normalDirection = i775[10]
  i774.sortingFudge = i775[11]
  i774.minParticleSize = i775[12]
  i774.maxParticleSize = i775[13]
  i774.pivot = new pc.Vec3( i775[14], i775[15], i775[16] )
  request.r(i775[17], i775[18], 0, i774, 'trailMaterial')
  i774.applyActiveColorSpace = !!i775[19]
  i774.enabled = !!i775[20]
  request.r(i775[21], i775[22], 0, i774, 'sharedMaterial')
  var i777 = i775[23]
  var i776 = []
  for(var i = 0; i < i777.length; i += 2) {
  request.r(i777[i + 0], i777[i + 1], 2, i776, '')
  }
  i774.sharedMaterials = i776
  i774.receiveShadows = !!i775[24]
  i774.shadowCastingMode = i775[25]
  i774.sortingLayerID = i775[26]
  i774.sortingOrder = i775[27]
  i774.lightmapIndex = i775[28]
  i774.lightmapSceneIndex = i775[29]
  i774.lightmapScaleOffset = new pc.Vec4( i775[30], i775[31], i775[32], i775[33] )
  i774.lightProbeUsage = i775[34]
  i774.reflectionProbeUsage = i775[35]
  return i774
}

Deserializers["ArrayRotationByMovement"] = function (request, data, root) {
  var i778 = root || request.c( 'ArrayRotationByMovement' )
  var i779 = data
  var i781 = i779[0]
  var i780 = []
  for(var i = 0; i < i781.length; i += 2) {
  request.r(i781[i + 0], i781[i + 1], 2, i780, '')
  }
  i778.objectsToRotate = i780
  request.r(i779[1], i779[2], 0, i778, 'referenceTransform')
  i778.movingRight_Rotation = i779[3]
  i778.movingLeft_Rotation = i779[4]
  i778.rotationOffsets = i779[5]
  i778.rotationAxis = i779[6]
  i778.smoothRotation = !!i779[7]
  i778.smoothSpeed = i779[8]
  i778.movementThreshold = i779[9]
  return i778
}

Deserializers["ActionOnTap"] = function (request, data, root) {
  var i782 = root || request.c( 'ActionOnTap' )
  var i783 = data
  i782.OnTap = request.d('UnityEngine.Events.UnityEvent', i783[0], i782.OnTap)
  return i782
}

Deserializers["BD_Clamp"] = function (request, data, root) {
  var i784 = root || request.c( 'BD_Clamp' )
  var i785 = data
  i784.ClampX_L = i785[0]
  i784.ClampX_H = i785[1]
  i784.ClampY_L = i785[2]
  i784.ClampY_H = i785[3]
  return i784
}

Deserializers["BD_Action"] = function (request, data, root) {
  var i786 = root || request.c( 'BD_Action' )
  var i787 = data
  i786.OnMouseDownEvent = request.d('UnityEngine.Events.UnityEvent', i787[0], i786.OnMouseDownEvent)
  i786.OnMouseUpEvent = request.d('UnityEngine.Events.UnityEvent', i787[1], i786.OnMouseUpEvent)
  i786.setToolLayer = !!i787[2]
  request.r(i787[3], i787[4], 0, i786, 'tool_SP')
  return i786
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CircleCollider2D"] = function (request, data, root) {
  var i788 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CircleCollider2D' )
  var i789 = data
  i788.radius = i789[0]
  i788.enabled = !!i789[1]
  i788.isTrigger = !!i789[2]
  i788.usedByEffector = !!i789[3]
  i788.density = i789[4]
  i788.offset = new pc.Vec2( i789[5], i789[6] )
  request.r(i789[7], i789[8], 0, i788, 'material')
  return i788
}

Deserializers["SoapPourControler"] = function (request, data, root) {
  var i790 = root || request.c( 'SoapPourControler' )
  var i791 = data
  i790.OnProgressComplete = request.d('UnityEngine.Events.UnityEvent', i791[0], i790.OnProgressComplete)
  i790.OnStepComplete = request.d('UnityEngine.Events.UnityEvent', i791[1], i790.OnStepComplete)
  request.r(i791[2], i791[3], 0, i790, 'sfxDrop')
  i790.isInsideTarget = !!i791[4]
  i790.isPicked = !!i791[5]
  request.r(i791[6], i791[7], 0, i790, 'thisTool')
  request.r(i791[8], i791[9], 0, i790, 'targetCol')
  request.r(i791[10], i791[11], 0, i790, 'soapDropPrefab')
  request.r(i791[12], i791[13], 0, i790, 'spawnPoint')
  i790.spawnInterval = i791[14]
  i790.maxDrops = i791[15]
  request.r(i791[16], i791[17], 0, i790, 'bottleRenderer')
  request.r(i791[18], i791[19], 0, i790, 'fullBottleSprite')
  request.r(i791[20], i791[21], 0, i790, 'halfBottleSprite')
  request.r(i791[22], i791[23], 0, i790, 'emptyBottleSprite')
  request.r(i791[24], i791[25], 0, i790, 'foamRend')
  return i790
}

Deserializers["_2dxFX_Wave"] = function (request, data, root) {
  var i792 = root || request.c( '_2dxFX_Wave' )
  var i793 = data
  request.r(i793[0], i793[1], 0, i792, 'ForceMaterial')
  i792.ActiveChange = !!i793[2]
  i792._Alpha = i793[3]
  i792._OffsetX = i793[4]
  i792._OffsetY = i793[5]
  i792._DistanceX = i793[6]
  i792._DistanceY = i793[7]
  i792._WaveTimeX = i793[8]
  i792._WaveTimeY = i793[9]
  i792.AutoPlayWaveX = !!i793[10]
  i792.AutoPlaySpeedX = i793[11]
  i792.AutoPlayWaveY = !!i793[12]
  i792.AutoPlaySpeedY = i793[13]
  i792.AutoRandom = !!i793[14]
  i792.AutoRandomRange = i793[15]
  i792.ShaderChange = i793[16]
  return i792
}

Deserializers["InteractableBones"] = function (request, data, root) {
  var i794 = root || request.c( 'InteractableBones' )
  var i795 = data
  request.r(i795[0], i795[1], 0, i794, 'Tip')
  i794.MoveAmount = i795[2]
  i794.MoveSpeed = i795[3]
  i794.ShakeSpeed = i795[4]
  i794.MovementThreshold = i795[5]
  i794.MoveX = !!i795[6]
  i794.MoveY = !!i795[7]
  return i794
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i796 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i797 = data
  request.r(i797[0], i797[1], 0, i796, 'clip')
  request.r(i797[2], i797[3], 0, i796, 'outputAudioMixerGroup')
  i796.playOnAwake = !!i797[4]
  i796.loop = !!i797[5]
  i796.time = i797[6]
  i796.volume = i797[7]
  i796.pitch = i797[8]
  i796.enabled = !!i797[9]
  return i796
}

Deserializers["BD_AnimatorDrag"] = function (request, data, root) {
  var i798 = root || request.c( 'BD_AnimatorDrag' )
  var i799 = data
  request.r(i799[0], i799[1], 0, i798, 'BD')
  request.r(i799[2], i799[3], 0, i798, 'anim')
  request.r(i799[4], i799[5], 0, i798, 'Source')
  i798.Vibration = !!i799[6]
  i798.isCompletable = !!i799[7]
  i798.completionThreshold = i799[8]
  i798.OnComplete = request.d('UnityEngine.Events.UnityEvent', i799[9], i798.OnComplete)
  return i798
}

Deserializers["TapandHold_Simple"] = function (request, data, root) {
  var i800 = root || request.c( 'TapandHold_Simple' )
  var i801 = data
  request.r(i801[0], i801[1], 0, i800, 'actionSfx')
  i800.holdDuration = i801[2]
  i800.dragThreshold = i801[3]
  i800.fadeInOnHold = !!i801[4]
  i800.fadeOutOnRelease = !!i801[5]
  request.r(i801[6], i801[7], 0, i800, 'targetSprite')
  i800.onHoldComplete = request.d('UnityEngine.Events.UnityEvent', i801[8], i800.onHoldComplete)
  i800.currentProgress = i801[9]
  i800.isHolding = !!i801[10]
  i800.isCompleted = !!i801[11]
  request.r(i801[12], i801[13], 0, i800, 'thisTool')
  return i800
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh"] = function (request, data, root) {
  var i802 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh' )
  var i803 = data
  i802.name = i803[0]
  i802.halfPrecision = !!i803[1]
  i802.useSimplification = !!i803[2]
  i802.useUInt32IndexFormat = !!i803[3]
  i802.vertexCount = i803[4]
  i802.aabb = i803[5]
  var i805 = i803[6]
  var i804 = []
  for(var i = 0; i < i805.length; i += 1) {
    i804.push( !!i805[i + 0] );
  }
  i802.streams = i804
  i802.vertices = i803[7]
  var i807 = i803[8]
  var i806 = []
  for(var i = 0; i < i807.length; i += 1) {
    i806.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh', i807[i + 0]) );
  }
  i802.subMeshes = i806
  var i809 = i803[9]
  var i808 = []
  for(var i = 0; i < i809.length; i += 16) {
    i808.push( new pc.Mat4().setData(i809[i + 0], i809[i + 1], i809[i + 2], i809[i + 3],  i809[i + 4], i809[i + 5], i809[i + 6], i809[i + 7],  i809[i + 8], i809[i + 9], i809[i + 10], i809[i + 11],  i809[i + 12], i809[i + 13], i809[i + 14], i809[i + 15]) );
  }
  i802.bindposes = i808
  var i811 = i803[10]
  var i810 = []
  for(var i = 0; i < i811.length; i += 1) {
    i810.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape', i811[i + 0]) );
  }
  i802.blendShapes = i810
  return i802
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh"] = function (request, data, root) {
  var i816 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh' )
  var i817 = data
  i816.triangles = i817[0]
  return i816
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape"] = function (request, data, root) {
  var i822 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape' )
  var i823 = data
  i822.name = i823[0]
  var i825 = i823[1]
  var i824 = []
  for(var i = 0; i < i825.length; i += 1) {
    i824.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame', i825[i + 0]) );
  }
  i822.frames = i824
  return i822
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Cubemap"] = function (request, data, root) {
  var i826 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Cubemap' )
  var i827 = data
  i826.name = i827[0]
  i826.atlasId = i827[1]
  i826.mipmapCount = i827[2]
  i826.hdr = !!i827[3]
  i826.size = i827[4]
  i826.anisoLevel = i827[5]
  i826.filterMode = i827[6]
  var i829 = i827[7]
  var i828 = []
  for(var i = 0; i < i829.length; i += 4) {
    i828.push( UnityEngine.Rect.MinMaxRect(i829[i + 0], i829[i + 1], i829[i + 2], i829[i + 3]) );
  }
  i826.rects = i828
  i826.wrapU = i827[8]
  i826.wrapV = i827[9]
  return i826
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i832 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i833 = data
  i832.name = i833[0]
  i832.index = i833[1]
  i832.startup = !!i833[2]
  return i832
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i834 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i835 = data
  i834.aspect = i835[0]
  i834.orthographic = !!i835[1]
  i834.orthographicSize = i835[2]
  i834.backgroundColor = new pc.Color(i835[3], i835[4], i835[5], i835[6])
  i834.nearClipPlane = i835[7]
  i834.farClipPlane = i835[8]
  i834.fieldOfView = i835[9]
  i834.depth = i835[10]
  i834.clearFlags = i835[11]
  i834.cullingMask = i835[12]
  i834.rect = i835[13]
  request.r(i835[14], i835[15], 0, i834, 'targetTexture')
  i834.usePhysicalProperties = !!i835[16]
  i834.focalLength = i835[17]
  i834.sensorSize = new pc.Vec2( i835[18], i835[19] )
  i834.lensShift = new pc.Vec2( i835[20], i835[21] )
  i834.gateFit = i835[22]
  i834.commandBufferCount = i835[23]
  i834.cameraType = i835[24]
  i834.enabled = !!i835[25]
  return i834
}

Deserializers["CameraController"] = function (request, data, root) {
  var i836 = root || request.c( 'CameraController' )
  var i837 = data
  request.r(i837[0], i837[1], 0, i836, 'cam')
  i836.defaultPosition = new pc.Vec3( i837[2], i837[3], i837[4] )
  i836.defaultSize = i837[5]
  i836.defaultFOV = i837[6]
  i836.defaultDuration = i837[7]
  i836.defaultEase = i837[8]
  return i836
}

Deserializers["MusicSource"] = function (request, data, root) {
  var i838 = root || request.c( 'MusicSource' )
  var i839 = data
  request.r(i839[0], i839[1], 0, i838, 'source')
  return i838
}

Deserializers["UI_Manager"] = function (request, data, root) {
  var i840 = root || request.c( 'UI_Manager' )
  var i841 = data
  i840.levelCompleted = !!i841[0]
  i840.isPauseActive = !!i841[1]
  i840.loadIndex = i841[2]
  request.r(i841[3], i841[4], 0, i840, 'removeAdsButton')
  request.r(i841[5], i841[6], 0, i840, 'pauseButton')
  request.r(i841[7], i841[8], 0, i840, 'Fade_Img')
  request.r(i841[9], i841[10], 0, i840, 'TopBarAnim')
  request.r(i841[11], i841[12], 0, i840, 'MainPanel')
  request.r(i841[13], i841[14], 0, i840, 'PausePanel')
  request.r(i841[15], i841[16], 0, i840, 'PausePopUp')
  request.r(i841[17], i841[18], 0, i840, 'PauseCanvasGroup')
  request.r(i841[19], i841[20], 0, i840, 'RateUsPanel')
  request.r(i841[21], i841[22], 0, i840, 'RateUsPopUp')
  request.r(i841[23], i841[24], 0, i840, 'RemoveAdsPanel')
  request.r(i841[25], i841[26], 0, i840, 'RemoveAdsPopUp')
  request.r(i841[27], i841[28], 0, i840, 'RemoveAdsCanvasGroup')
  var i843 = i841[29]
  var i842 = []
  for(var i = 0; i < i843.length; i += 2) {
  request.r(i843[i + 0], i843[i + 1], 2, i842, '')
  }
  i840.RemoveAdsAnims = i842
  request.r(i841[30], i841[31], 0, i840, 'CompletePanel')
  request.r(i841[32], i841[33], 0, i840, 'LevelIcon')
  request.r(i841[34], i841[35], 0, i840, 'CompleteParticles')
  request.r(i841[36], i841[37], 0, i840, 'progressBar')
  request.r(i841[38], i841[39], 0, i840, 'progressText')
  request.r(i841[40], i841[41], 0, i840, 'toolIcon1')
  request.r(i841[42], i841[43], 0, i840, 'toolIcon2')
  request.r(i841[44], i841[45], 0, i840, 'toolIcon3')
  request.r(i841[46], i841[47], 0, i840, 'target1')
  request.r(i841[48], i841[49], 0, i840, 'target2')
  i840.toolMoveDuration = i841[50]
  i840.currentIndex = i841[51]
  var i845 = i841[52]
  var i844 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Sprite')))
  for(var i = 0; i < i845.length; i += 2) {
  request.r(i845[i + 0], i845[i + 1], 1, i844, '')
  }
  i840.allTools = i844
  request.r(i841[53], i841[54], 0, i840, 'clockProgress')
  request.r(i841[55], i841[56], 0, i840, 'clockProgressFill')
  request.r(i841[57], i841[58], 0, i840, 'clockAudio')
  i840.moveDistance = i841[59]
  i840.animationDuration = i841[60]
  i840.greyBgChildName = i841[61]
  i840.pushOffset = i841[62]
  return i840
}

Deserializers["GameManagerPlayable"] = function (request, data, root) {
  var i848 = root || request.c( 'GameManagerPlayable' )
  var i849 = data
  request.r(i849[0], i849[1], 0, i848, 'DefaultMat')
  request.r(i849[2], i849[3], 0, i848, 'BG_Music')
  request.r(i849[4], i849[5], 0, i848, 'restoreEffectShader')
  request.r(i849[6], i849[7], 0, i848, 'stickerEffectShader')
  i848.isComplete = !!i849[8]
  i848.isPaused = !!i849[9]
  request.r(i849[10], i849[11], 0, i848, 'currentLevel')
  return i848
}

Deserializers["AudioController"] = function (request, data, root) {
  var i850 = root || request.c( 'AudioController' )
  var i851 = data
  request.r(i851[0], i851[1], 0, i850, 'MainMixer')
  request.r(i851[2], i851[3], 0, i850, 'UiClick')
  request.r(i851[4], i851[5], 0, i850, 'UiClickSource')
  var i853 = i851[6]
  var i852 = []
  for(var i = 0; i < i853.length; i += 2) {
  request.r(i853[i + 0], i853[i + 1], 2, i852, '')
  }
  i850.SfxSources = i852
  var i855 = i851[7]
  var i854 = []
  for(var i = 0; i < i855.length; i += 2) {
  request.r(i855[i + 0], i855[i + 1], 2, i854, '')
  }
  i850.AllClips = i854
  return i850
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i858 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i859 = data
  i858.pivot = new pc.Vec2( i859[0], i859[1] )
  i858.anchorMin = new pc.Vec2( i859[2], i859[3] )
  i858.anchorMax = new pc.Vec2( i859[4], i859[5] )
  i858.sizeDelta = new pc.Vec2( i859[6], i859[7] )
  i858.anchoredPosition3D = new pc.Vec3( i859[8], i859[9], i859[10] )
  i858.rotation = new pc.Quat(i859[11], i859[12], i859[13], i859[14])
  i858.scale = new pc.Vec3( i859[15], i859[16], i859[17] )
  return i858
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i860 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i861 = data
  i860.planeDistance = i861[0]
  i860.referencePixelsPerUnit = i861[1]
  i860.isFallbackOverlay = !!i861[2]
  i860.renderMode = i861[3]
  i860.renderOrder = i861[4]
  i860.sortingLayerName = i861[5]
  i860.sortingOrder = i861[6]
  i860.scaleFactor = i861[7]
  request.r(i861[8], i861[9], 0, i860, 'worldCamera')
  i860.overrideSorting = !!i861[10]
  i860.pixelPerfect = !!i861[11]
  i860.targetDisplay = i861[12]
  i860.overridePixelPerfect = !!i861[13]
  i860.enabled = !!i861[14]
  return i860
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i862 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i863 = data
  i862.m_UiScaleMode = i863[0]
  i862.m_ReferencePixelsPerUnit = i863[1]
  i862.m_ScaleFactor = i863[2]
  i862.m_ReferenceResolution = new pc.Vec2( i863[3], i863[4] )
  i862.m_ScreenMatchMode = i863[5]
  i862.m_MatchWidthOrHeight = i863[6]
  i862.m_PhysicalUnit = i863[7]
  i862.m_FallbackScreenDPI = i863[8]
  i862.m_DefaultSpriteDPI = i863[9]
  i862.m_DynamicPixelsPerUnit = i863[10]
  i862.m_PresetInfoIsWorld = !!i863[11]
  return i862
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i864 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i865 = data
  i864.m_IgnoreReversedGraphics = !!i865[0]
  i864.m_BlockingObjects = i865[1]
  i864.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i865[2] )
  return i864
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i866 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i867 = data
  i866.cullTransparentMesh = !!i867[0]
  return i866
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i868 = root || request.c( 'UnityEngine.UI.Image' )
  var i869 = data
  request.r(i869[0], i869[1], 0, i868, 'm_Sprite')
  i868.m_Type = i869[2]
  i868.m_PreserveAspect = !!i869[3]
  i868.m_FillCenter = !!i869[4]
  i868.m_FillMethod = i869[5]
  i868.m_FillAmount = i869[6]
  i868.m_FillClockwise = !!i869[7]
  i868.m_FillOrigin = i869[8]
  i868.m_UseSpriteMesh = !!i869[9]
  i868.m_PixelsPerUnitMultiplier = i869[10]
  request.r(i869[11], i869[12], 0, i868, 'm_Material')
  i868.m_Maskable = !!i869[13]
  i868.m_Color = new pc.Color(i869[14], i869[15], i869[16], i869[17])
  i868.m_RaycastTarget = !!i869[18]
  i868.m_RaycastPadding = new pc.Vec4( i869[19], i869[20], i869[21], i869[22] )
  return i868
}

Deserializers["UnityEngine.UI.Text"] = function (request, data, root) {
  var i870 = root || request.c( 'UnityEngine.UI.Text' )
  var i871 = data
  i870.m_FontData = request.d('UnityEngine.UI.FontData', i871[0], i870.m_FontData)
  i870.m_Text = i871[1]
  request.r(i871[2], i871[3], 0, i870, 'm_Material')
  i870.m_Maskable = !!i871[4]
  i870.m_Color = new pc.Color(i871[5], i871[6], i871[7], i871[8])
  i870.m_RaycastTarget = !!i871[9]
  i870.m_RaycastPadding = new pc.Vec4( i871[10], i871[11], i871[12], i871[13] )
  return i870
}

Deserializers["UnityEngine.UI.FontData"] = function (request, data, root) {
  var i872 = root || request.c( 'UnityEngine.UI.FontData' )
  var i873 = data
  request.r(i873[0], i873[1], 0, i872, 'm_Font')
  i872.m_FontSize = i873[2]
  i872.m_FontStyle = i873[3]
  i872.m_BestFit = !!i873[4]
  i872.m_MinSize = i873[5]
  i872.m_MaxSize = i873[6]
  i872.m_Alignment = i873[7]
  i872.m_AlignByGeometry = !!i873[8]
  i872.m_RichText = !!i873[9]
  i872.m_HorizontalOverflow = i873[10]
  i872.m_VerticalOverflow = i873[11]
  i872.m_LineSpacing = i873[12]
  return i872
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i874 = root || request.c( 'UnityEngine.UI.Button' )
  var i875 = data
  i874.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i875[0], i874.m_OnClick)
  i874.m_Navigation = request.d('UnityEngine.UI.Navigation', i875[1], i874.m_Navigation)
  i874.m_Transition = i875[2]
  i874.m_Colors = request.d('UnityEngine.UI.ColorBlock', i875[3], i874.m_Colors)
  i874.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i875[4], i874.m_SpriteState)
  i874.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i875[5], i874.m_AnimationTriggers)
  i874.m_Interactable = !!i875[6]
  request.r(i875[7], i875[8], 0, i874, 'm_TargetGraphic')
  return i874
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i876 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i877 = data
  i876.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i877[0], i876.m_PersistentCalls)
  return i876
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i878 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i879 = data
  i878.m_Mode = i879[0]
  i878.m_WrapAround = !!i879[1]
  request.r(i879[2], i879[3], 0, i878, 'm_SelectOnUp')
  request.r(i879[4], i879[5], 0, i878, 'm_SelectOnDown')
  request.r(i879[6], i879[7], 0, i878, 'm_SelectOnLeft')
  request.r(i879[8], i879[9], 0, i878, 'm_SelectOnRight')
  return i878
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i880 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i881 = data
  i880.m_NormalColor = new pc.Color(i881[0], i881[1], i881[2], i881[3])
  i880.m_HighlightedColor = new pc.Color(i881[4], i881[5], i881[6], i881[7])
  i880.m_PressedColor = new pc.Color(i881[8], i881[9], i881[10], i881[11])
  i880.m_SelectedColor = new pc.Color(i881[12], i881[13], i881[14], i881[15])
  i880.m_DisabledColor = new pc.Color(i881[16], i881[17], i881[18], i881[19])
  i880.m_ColorMultiplier = i881[20]
  i880.m_FadeDuration = i881[21]
  return i880
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i882 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i883 = data
  request.r(i883[0], i883[1], 0, i882, 'm_HighlightedSprite')
  request.r(i883[2], i883[3], 0, i882, 'm_PressedSprite')
  request.r(i883[4], i883[5], 0, i882, 'm_SelectedSprite')
  request.r(i883[6], i883[7], 0, i882, 'm_DisabledSprite')
  return i882
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i884 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i885 = data
  i884.m_NormalTrigger = i885[0]
  i884.m_HighlightedTrigger = i885[1]
  i884.m_PressedTrigger = i885[2]
  i884.m_SelectedTrigger = i885[3]
  i884.m_DisabledTrigger = i885[4]
  return i884
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i886 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i887 = data
  request.r(i887[0], i887[1], 0, i886, 'm_FirstSelected')
  i886.m_sendNavigationEvents = !!i887[2]
  i886.m_DragThreshold = i887[3]
  return i886
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i888 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i889 = data
  i888.m_HorizontalAxis = i889[0]
  i888.m_VerticalAxis = i889[1]
  i888.m_SubmitButton = i889[2]
  i888.m_CancelButton = i889[3]
  i888.m_InputActionsPerSecond = i889[4]
  i888.m_RepeatDelay = i889[5]
  i888.m_ForceModuleActive = !!i889[6]
  i888.m_SendPointerHoverToParent = !!i889[7]
  return i888
}

Deserializers["PlayableHudRuntime"] = function (request, data, root) {
  var i890 = root || request.c( 'PlayableHudRuntime' )
  var i891 = data
  return i890
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i892 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i893 = data
  i892.ambientIntensity = i893[0]
  i892.reflectionIntensity = i893[1]
  i892.ambientMode = i893[2]
  i892.ambientLight = new pc.Color(i893[3], i893[4], i893[5], i893[6])
  i892.ambientSkyColor = new pc.Color(i893[7], i893[8], i893[9], i893[10])
  i892.ambientGroundColor = new pc.Color(i893[11], i893[12], i893[13], i893[14])
  i892.ambientEquatorColor = new pc.Color(i893[15], i893[16], i893[17], i893[18])
  i892.fogColor = new pc.Color(i893[19], i893[20], i893[21], i893[22])
  i892.fogEndDistance = i893[23]
  i892.fogStartDistance = i893[24]
  i892.fogDensity = i893[25]
  i892.fog = !!i893[26]
  request.r(i893[27], i893[28], 0, i892, 'skybox')
  i892.fogMode = i893[29]
  var i895 = i893[30]
  var i894 = []
  for(var i = 0; i < i895.length; i += 1) {
    i894.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i895[i + 0]) );
  }
  i892.lightmaps = i894
  i892.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i893[31], i892.lightProbes)
  i892.lightmapsMode = i893[32]
  i892.mixedBakeMode = i893[33]
  i892.environmentLightingMode = i893[34]
  i892.ambientProbe = new pc.SphericalHarmonicsL2(i893[35])
  request.r(i893[36], i893[37], 0, i892, 'customReflection')
  request.r(i893[38], i893[39], 0, i892, 'defaultReflection')
  i892.defaultReflectionMode = i893[40]
  i892.defaultReflectionResolution = i893[41]
  i892.sunLightObjectId = i893[42]
  i892.pixelLightCount = i893[43]
  i892.defaultReflectionHDR = !!i893[44]
  i892.hasLightDataAsset = !!i893[45]
  i892.hasManualGenerate = !!i893[46]
  return i892
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i898 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i899 = data
  request.r(i899[0], i899[1], 0, i898, 'lightmapColor')
  request.r(i899[2], i899[3], 0, i898, 'lightmapDirection')
  request.r(i899[4], i899[5], 0, i898, 'shadowMask')
  return i898
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i900 = root || new UnityEngine.LightProbes()
  var i901 = data
  return i900
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i906 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i907 = data
  var i909 = i907[0]
  var i908 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i909.length; i += 1) {
    i908.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i909[i + 0]));
  }
  i906.ShaderCompilationErrors = i908
  i906.name = i907[1]
  i906.guid = i907[2]
  var i911 = i907[3]
  var i910 = []
  for(var i = 0; i < i911.length; i += 1) {
    i910.push( i911[i + 0] );
  }
  i906.shaderDefinedKeywords = i910
  var i913 = i907[4]
  var i912 = []
  for(var i = 0; i < i913.length; i += 1) {
    i912.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i913[i + 0]) );
  }
  i906.passes = i912
  var i915 = i907[5]
  var i914 = []
  for(var i = 0; i < i915.length; i += 1) {
    i914.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i915[i + 0]) );
  }
  i906.usePasses = i914
  var i917 = i907[6]
  var i916 = []
  for(var i = 0; i < i917.length; i += 1) {
    i916.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i917[i + 0]) );
  }
  i906.defaultParameterValues = i916
  request.r(i907[7], i907[8], 0, i906, 'unityFallbackShader')
  i906.readDepth = !!i907[9]
  i906.hasDepthOnlyPass = !!i907[10]
  i906.isCreatedByShaderGraph = !!i907[11]
  i906.disableBatching = !!i907[12]
  i906.compiled = !!i907[13]
  return i906
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i920 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i921 = data
  i920.shaderName = i921[0]
  i920.errorMessage = i921[1]
  return i920
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i926 = root || new pc.UnityShaderPass()
  var i927 = data
  i926.id = i927[0]
  i926.subShaderIndex = i927[1]
  i926.name = i927[2]
  i926.passType = i927[3]
  i926.grabPassTextureName = i927[4]
  i926.usePass = !!i927[5]
  i926.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i927[6], i926.zTest)
  i926.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i927[7], i926.zWrite)
  i926.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i927[8], i926.culling)
  i926.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i927[9], i926.blending)
  i926.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i927[10], i926.alphaBlending)
  i926.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i927[11], i926.colorWriteMask)
  i926.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i927[12], i926.offsetUnits)
  i926.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i927[13], i926.offsetFactor)
  i926.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i927[14], i926.stencilRef)
  i926.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i927[15], i926.stencilReadMask)
  i926.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i927[16], i926.stencilWriteMask)
  i926.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i927[17], i926.stencilOp)
  i926.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i927[18], i926.stencilOpFront)
  i926.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i927[19], i926.stencilOpBack)
  var i929 = i927[20]
  var i928 = []
  for(var i = 0; i < i929.length; i += 1) {
    i928.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i929[i + 0]) );
  }
  i926.tags = i928
  var i931 = i927[21]
  var i930 = []
  for(var i = 0; i < i931.length; i += 1) {
    i930.push( i931[i + 0] );
  }
  i926.passDefinedKeywords = i930
  var i933 = i927[22]
  var i932 = []
  for(var i = 0; i < i933.length; i += 1) {
    i932.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i933[i + 0]) );
  }
  i926.passDefinedKeywordGroups = i932
  var i935 = i927[23]
  var i934 = []
  for(var i = 0; i < i935.length; i += 1) {
    i934.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i935[i + 0]) );
  }
  i926.variants = i934
  var i937 = i927[24]
  var i936 = []
  for(var i = 0; i < i937.length; i += 1) {
    i936.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i937[i + 0]) );
  }
  i926.excludedVariants = i936
  i926.hasDepthReader = !!i927[25]
  return i926
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i938 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i939 = data
  i938.val = i939[0]
  i938.name = i939[1]
  return i938
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i940 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i941 = data
  i940.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i941[0], i940.src)
  i940.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i941[1], i940.dst)
  i940.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i941[2], i940.op)
  return i940
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i942 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i943 = data
  i942.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i943[0], i942.pass)
  i942.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i943[1], i942.fail)
  i942.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i943[2], i942.zFail)
  i942.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i943[3], i942.comp)
  return i942
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i946 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i947 = data
  i946.name = i947[0]
  i946.value = i947[1]
  return i946
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i950 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i951 = data
  var i953 = i951[0]
  var i952 = []
  for(var i = 0; i < i953.length; i += 1) {
    i952.push( i953[i + 0] );
  }
  i950.keywords = i952
  i950.hasDiscard = !!i951[1]
  return i950
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i956 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i957 = data
  i956.passId = i957[0]
  i956.subShaderIndex = i957[1]
  var i959 = i957[2]
  var i958 = []
  for(var i = 0; i < i959.length; i += 1) {
    i958.push( i959[i + 0] );
  }
  i956.keywords = i958
  i956.vertexProgram = i957[3]
  i956.fragmentProgram = i957[4]
  i956.exportedForWebGl2 = !!i957[5]
  i956.readDepth = !!i957[6]
  return i956
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i962 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i963 = data
  request.r(i963[0], i963[1], 0, i962, 'shader')
  i962.pass = i963[2]
  return i962
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i966 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i967 = data
  i966.name = i967[0]
  i966.type = i967[1]
  i966.value = new pc.Vec4( i967[2], i967[3], i967[4], i967[5] )
  i966.textureValue = i967[6]
  i966.shaderPropertyFlag = i967[7]
  return i966
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i968 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i969 = data
  i968.name = i969[0]
  request.r(i969[1], i969[2], 0, i968, 'texture')
  i968.aabb = i969[3]
  i968.vertices = i969[4]
  i968.triangles = i969[5]
  i968.textureRect = UnityEngine.Rect.MinMaxRect(i969[6], i969[7], i969[8], i969[9])
  i968.packedRect = UnityEngine.Rect.MinMaxRect(i969[10], i969[11], i969[12], i969[13])
  i968.border = new pc.Vec4( i969[14], i969[15], i969[16], i969[17] )
  i968.transparency = i969[18]
  i968.bounds = i969[19]
  i968.pixelsPerUnit = i969[20]
  i968.textureWidth = i969[21]
  i968.textureHeight = i969[22]
  i968.nativeSize = new pc.Vec2( i969[23], i969[24] )
  i968.pivot = new pc.Vec2( i969[25], i969[26] )
  i968.textureRectOffset = new pc.Vec2( i969[27], i969[28] )
  return i968
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i970 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i971 = data
  i970.name = i971[0]
  return i970
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip"] = function (request, data, root) {
  var i972 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip' )
  var i973 = data
  i972.name = i973[0]
  i972.wrapMode = i973[1]
  i972.isLooping = !!i973[2]
  i972.length = i973[3]
  var i975 = i973[4]
  var i974 = []
  for(var i = 0; i < i975.length; i += 1) {
    i974.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve', i975[i + 0]) );
  }
  i972.curves = i974
  var i977 = i973[5]
  var i976 = []
  for(var i = 0; i < i977.length; i += 1) {
    i976.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent', i977[i + 0]) );
  }
  i972.events = i976
  i972.halfPrecision = !!i973[6]
  i972._frameRate = i973[7]
  i972.localBounds = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds', i973[8], i972.localBounds)
  i972.hasMuscleCurves = !!i973[9]
  var i979 = i973[10]
  var i978 = []
  for(var i = 0; i < i979.length; i += 1) {
    i978.push( i979[i + 0] );
  }
  i972.clipMuscleConstant = i978
  i972.clipBindingConstant = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant', i973[11], i972.clipBindingConstant)
  return i972
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve"] = function (request, data, root) {
  var i982 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve' )
  var i983 = data
  i982.path = i983[0]
  i982.hash = i983[1]
  i982.componentType = i983[2]
  i982.property = i983[3]
  i982.keys = i983[4]
  var i985 = i983[5]
  var i984 = []
  for(var i = 0; i < i985.length; i += 1) {
    i984.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey', i985[i + 0]) );
  }
  i982.objectReferenceKeys = i984
  return i982
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey"] = function (request, data, root) {
  var i988 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey' )
  var i989 = data
  i988.time = i989[0]
  request.r(i989[1], i989[2], 0, i988, 'value')
  return i988
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent"] = function (request, data, root) {
  var i992 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent' )
  var i993 = data
  i992.functionName = i993[0]
  i992.floatParameter = i993[1]
  i992.intParameter = i993[2]
  i992.stringParameter = i993[3]
  request.r(i993[4], i993[5], 0, i992, 'objectReferenceParameter')
  i992.time = i993[6]
  return i992
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds"] = function (request, data, root) {
  var i994 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds' )
  var i995 = data
  i994.center = new pc.Vec3( i995[0], i995[1], i995[2] )
  i994.extends = new pc.Vec3( i995[3], i995[4], i995[5] )
  return i994
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant"] = function (request, data, root) {
  var i998 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant' )
  var i999 = data
  var i1001 = i999[0]
  var i1000 = []
  for(var i = 0; i < i1001.length; i += 1) {
    i1000.push( i1001[i + 0] );
  }
  i998.genericBindings = i1000
  var i1003 = i999[1]
  var i1002 = []
  for(var i = 0; i < i1003.length; i += 1) {
    i1002.push( i1003[i + 0] );
  }
  i998.pptrCurveMapping = i1002
  return i998
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i1004 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i1005 = data
  i1004.name = i1005[0]
  i1004.ascent = i1005[1]
  i1004.originalLineHeight = i1005[2]
  i1004.fontSize = i1005[3]
  var i1007 = i1005[4]
  var i1006 = []
  for(var i = 0; i < i1007.length; i += 1) {
    i1006.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i1007[i + 0]) );
  }
  i1004.characterInfo = i1006
  request.r(i1005[5], i1005[6], 0, i1004, 'texture')
  i1004.originalFontSize = i1005[7]
  return i1004
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i1010 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i1011 = data
  i1010.index = i1011[0]
  i1010.advance = i1011[1]
  i1010.bearing = i1011[2]
  i1010.glyphWidth = i1011[3]
  i1010.glyphHeight = i1011[4]
  i1010.minX = i1011[5]
  i1010.maxX = i1011[6]
  i1010.minY = i1011[7]
  i1010.maxY = i1011[8]
  i1010.uvBottomLeftX = i1011[9]
  i1010.uvBottomLeftY = i1011[10]
  i1010.uvBottomRightX = i1011[11]
  i1010.uvBottomRightY = i1011[12]
  i1010.uvTopLeftX = i1011[13]
  i1010.uvTopLeftY = i1011[14]
  i1010.uvTopRightX = i1011[15]
  i1010.uvTopRightY = i1011[16]
  return i1010
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController"] = function (request, data, root) {
  var i1012 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController' )
  var i1013 = data
  i1012.name = i1013[0]
  var i1015 = i1013[1]
  var i1014 = []
  for(var i = 0; i < i1015.length; i += 1) {
    i1014.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer', i1015[i + 0]) );
  }
  i1012.layers = i1014
  var i1017 = i1013[2]
  var i1016 = []
  for(var i = 0; i < i1017.length; i += 1) {
    i1016.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter', i1017[i + 0]) );
  }
  i1012.parameters = i1016
  i1012.animationClips = i1013[3]
  i1012.avatarUnsupported = i1013[4]
  return i1012
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer"] = function (request, data, root) {
  var i1020 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer' )
  var i1021 = data
  i1020.name = i1021[0]
  i1020.defaultWeight = i1021[1]
  i1020.blendingMode = i1021[2]
  i1020.avatarMask = i1021[3]
  i1020.syncedLayerIndex = i1021[4]
  i1020.syncedLayerAffectsTiming = !!i1021[5]
  i1020.syncedLayers = i1021[6]
  i1020.stateMachine = request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i1021[7], i1020.stateMachine)
  return i1020
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine"] = function (request, data, root) {
  var i1022 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine' )
  var i1023 = data
  i1022.id = i1023[0]
  i1022.name = i1023[1]
  i1022.path = i1023[2]
  var i1025 = i1023[3]
  var i1024 = []
  for(var i = 0; i < i1025.length; i += 1) {
    i1024.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState', i1025[i + 0]) );
  }
  i1022.states = i1024
  var i1027 = i1023[4]
  var i1026 = []
  for(var i = 0; i < i1027.length; i += 1) {
    i1026.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i1027[i + 0]) );
  }
  i1022.machines = i1026
  var i1029 = i1023[5]
  var i1028 = []
  for(var i = 0; i < i1029.length; i += 1) {
    i1028.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i1029[i + 0]) );
  }
  i1022.entryStateTransitions = i1028
  var i1031 = i1023[6]
  var i1030 = []
  for(var i = 0; i < i1031.length; i += 1) {
    i1030.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i1031[i + 0]) );
  }
  i1022.exitStateTransitions = i1030
  var i1033 = i1023[7]
  var i1032 = []
  for(var i = 0; i < i1033.length; i += 1) {
    i1032.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i1033[i + 0]) );
  }
  i1022.anyStateTransitions = i1032
  i1022.defaultStateId = i1023[8]
  return i1022
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState"] = function (request, data, root) {
  var i1036 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState' )
  var i1037 = data
  i1036.id = i1037[0]
  i1036.name = i1037[1]
  i1036.cycleOffset = i1037[2]
  i1036.cycleOffsetParameter = i1037[3]
  i1036.cycleOffsetParameterActive = !!i1037[4]
  i1036.mirror = !!i1037[5]
  i1036.mirrorParameter = i1037[6]
  i1036.mirrorParameterActive = !!i1037[7]
  i1036.motionId = i1037[8]
  i1036.nameHash = i1037[9]
  i1036.fullPathHash = i1037[10]
  i1036.speed = i1037[11]
  i1036.speedParameter = i1037[12]
  i1036.speedParameterActive = !!i1037[13]
  i1036.tag = i1037[14]
  i1036.tagHash = i1037[15]
  i1036.writeDefaultValues = !!i1037[16]
  var i1039 = i1037[17]
  var i1038 = []
  for(var i = 0; i < i1039.length; i += 2) {
  request.r(i1039[i + 0], i1039[i + 1], 2, i1038, '')
  }
  i1036.behaviours = i1038
  var i1041 = i1037[18]
  var i1040 = []
  for(var i = 0; i < i1041.length; i += 1) {
    i1040.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i1041[i + 0]) );
  }
  i1036.transitions = i1040
  return i1036
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition"] = function (request, data, root) {
  var i1046 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition' )
  var i1047 = data
  i1046.fullPath = i1047[0]
  i1046.canTransitionToSelf = !!i1047[1]
  i1046.duration = i1047[2]
  i1046.exitTime = i1047[3]
  i1046.hasExitTime = !!i1047[4]
  i1046.hasFixedDuration = !!i1047[5]
  i1046.interruptionSource = i1047[6]
  i1046.offset = i1047[7]
  i1046.orderedInterruption = !!i1047[8]
  i1046.destinationStateId = i1047[9]
  i1046.isExit = !!i1047[10]
  i1046.mute = !!i1047[11]
  i1046.solo = !!i1047[12]
  var i1049 = i1047[13]
  var i1048 = []
  for(var i = 0; i < i1049.length; i += 1) {
    i1048.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i1049[i + 0]) );
  }
  i1046.conditions = i1048
  return i1046
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition"] = function (request, data, root) {
  var i1054 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition' )
  var i1055 = data
  i1054.destinationStateId = i1055[0]
  i1054.isExit = !!i1055[1]
  i1054.mute = !!i1055[2]
  i1054.solo = !!i1055[3]
  var i1057 = i1055[4]
  var i1056 = []
  for(var i = 0; i < i1057.length; i += 1) {
    i1056.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i1057[i + 0]) );
  }
  i1054.conditions = i1056
  return i1054
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition"] = function (request, data, root) {
  var i1060 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition' )
  var i1061 = data
  i1060.mode = i1061[0]
  i1060.parameter = i1061[1]
  i1060.threshold = i1061[2]
  return i1060
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter"] = function (request, data, root) {
  var i1064 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter' )
  var i1065 = data
  i1064.defaultBool = !!i1065[0]
  i1064.defaultFloat = i1065[1]
  i1064.defaultInt = i1065[2]
  i1064.name = i1065[3]
  i1064.nameHash = i1065[4]
  i1064.type = i1065[5]
  return i1064
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i1066 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i1067 = data
  i1066.useSafeMode = !!i1067[0]
  i1066.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i1067[1], i1066.safeModeOptions)
  i1066.timeScale = i1067[2]
  i1066.unscaledTimeScale = i1067[3]
  i1066.useSmoothDeltaTime = !!i1067[4]
  i1066.maxSmoothUnscaledTime = i1067[5]
  i1066.rewindCallbackMode = i1067[6]
  i1066.showUnityEditorReport = !!i1067[7]
  i1066.logBehaviour = i1067[8]
  i1066.drawGizmos = !!i1067[9]
  i1066.defaultRecyclable = !!i1067[10]
  i1066.defaultAutoPlay = i1067[11]
  i1066.defaultUpdateType = i1067[12]
  i1066.defaultTimeScaleIndependent = !!i1067[13]
  i1066.defaultEaseType = i1067[14]
  i1066.defaultEaseOvershootOrAmplitude = i1067[15]
  i1066.defaultEasePeriod = i1067[16]
  i1066.defaultAutoKill = !!i1067[17]
  i1066.defaultLoopType = i1067[18]
  i1066.debugMode = !!i1067[19]
  i1066.debugStoreTargetId = !!i1067[20]
  i1066.showPreviewPanel = !!i1067[21]
  i1066.storeSettingsLocation = i1067[22]
  i1066.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i1067[23], i1066.modules)
  i1066.createASMDEF = !!i1067[24]
  i1066.showPlayingTweens = !!i1067[25]
  i1066.showPausedTweens = !!i1067[26]
  return i1066
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i1068 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i1069 = data
  i1068.logBehaviour = i1069[0]
  i1068.nestedTweenFailureBehaviour = i1069[1]
  return i1068
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i1070 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i1071 = data
  i1070.showPanel = !!i1071[0]
  i1070.audioEnabled = !!i1071[1]
  i1070.physicsEnabled = !!i1071[2]
  i1070.physics2DEnabled = !!i1071[3]
  i1070.spriteEnabled = !!i1071[4]
  i1070.uiEnabled = !!i1071[5]
  i1070.textMeshProEnabled = !!i1071[6]
  i1070.tk2DEnabled = !!i1071[7]
  i1070.deAudioEnabled = !!i1071[8]
  i1070.deUnityExtendedEnabled = !!i1071[9]
  i1070.epoOutlineEnabled = !!i1071[10]
  return i1070
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i1072 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i1073 = data
  var i1075 = i1073[0]
  var i1074 = []
  for(var i = 0; i < i1075.length; i += 1) {
    i1074.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i1075[i + 0]) );
  }
  i1072.files = i1074
  i1072.componentToPrefabIds = i1073[1]
  return i1072
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i1078 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i1079 = data
  i1078.path = i1079[0]
  request.r(i1079[1], i1079[2], 0, i1078, 'unityObject')
  return i1078
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i1080 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i1081 = data
  var i1083 = i1081[0]
  var i1082 = []
  for(var i = 0; i < i1083.length; i += 1) {
    i1082.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i1083[i + 0]) );
  }
  i1080.scriptsExecutionOrder = i1082
  var i1085 = i1081[1]
  var i1084 = []
  for(var i = 0; i < i1085.length; i += 1) {
    i1084.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i1085[i + 0]) );
  }
  i1080.sortingLayers = i1084
  var i1087 = i1081[2]
  var i1086 = []
  for(var i = 0; i < i1087.length; i += 1) {
    i1086.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i1087[i + 0]) );
  }
  i1080.cullingLayers = i1086
  i1080.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i1081[3], i1080.timeSettings)
  i1080.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i1081[4], i1080.physicsSettings)
  i1080.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i1081[5], i1080.physics2DSettings)
  i1080.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1081[6], i1080.qualitySettings)
  i1080.enableRealtimeShadows = !!i1081[7]
  i1080.enableAutoInstancing = !!i1081[8]
  i1080.enableStaticBatching = !!i1081[9]
  i1080.enableDynamicBatching = !!i1081[10]
  i1080.usePreservativeDynamicBatching = !!i1081[11]
  i1080.lightmapEncodingQuality = i1081[12]
  i1080.desiredColorSpace = i1081[13]
  var i1089 = i1081[14]
  var i1088 = []
  for(var i = 0; i < i1089.length; i += 1) {
    i1088.push( i1089[i + 0] );
  }
  i1080.allTags = i1088
  return i1080
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i1092 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i1093 = data
  i1092.name = i1093[0]
  i1092.value = i1093[1]
  return i1092
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i1096 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i1097 = data
  i1096.id = i1097[0]
  i1096.name = i1097[1]
  i1096.value = i1097[2]
  return i1096
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i1100 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i1101 = data
  i1100.id = i1101[0]
  i1100.name = i1101[1]
  return i1100
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i1102 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i1103 = data
  i1102.fixedDeltaTime = i1103[0]
  i1102.maximumDeltaTime = i1103[1]
  i1102.timeScale = i1103[2]
  i1102.maximumParticleTimestep = i1103[3]
  return i1102
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i1104 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i1105 = data
  i1104.gravity = new pc.Vec3( i1105[0], i1105[1], i1105[2] )
  i1104.defaultSolverIterations = i1105[3]
  i1104.bounceThreshold = i1105[4]
  i1104.autoSyncTransforms = !!i1105[5]
  i1104.autoSimulation = !!i1105[6]
  var i1107 = i1105[7]
  var i1106 = []
  for(var i = 0; i < i1107.length; i += 1) {
    i1106.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i1107[i + 0]) );
  }
  i1104.collisionMatrix = i1106
  return i1104
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i1110 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i1111 = data
  i1110.enabled = !!i1111[0]
  i1110.layerId = i1111[1]
  i1110.otherLayerId = i1111[2]
  return i1110
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i1112 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i1113 = data
  request.r(i1113[0], i1113[1], 0, i1112, 'material')
  i1112.gravity = new pc.Vec2( i1113[2], i1113[3] )
  i1112.positionIterations = i1113[4]
  i1112.velocityIterations = i1113[5]
  i1112.velocityThreshold = i1113[6]
  i1112.maxLinearCorrection = i1113[7]
  i1112.maxAngularCorrection = i1113[8]
  i1112.maxTranslationSpeed = i1113[9]
  i1112.maxRotationSpeed = i1113[10]
  i1112.baumgarteScale = i1113[11]
  i1112.baumgarteTOIScale = i1113[12]
  i1112.timeToSleep = i1113[13]
  i1112.linearSleepTolerance = i1113[14]
  i1112.angularSleepTolerance = i1113[15]
  i1112.defaultContactOffset = i1113[16]
  i1112.autoSimulation = !!i1113[17]
  i1112.queriesHitTriggers = !!i1113[18]
  i1112.queriesStartInColliders = !!i1113[19]
  i1112.callbacksOnDisable = !!i1113[20]
  i1112.reuseCollisionCallbacks = !!i1113[21]
  i1112.autoSyncTransforms = !!i1113[22]
  var i1115 = i1113[23]
  var i1114 = []
  for(var i = 0; i < i1115.length; i += 1) {
    i1114.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i1115[i + 0]) );
  }
  i1112.collisionMatrix = i1114
  return i1112
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i1118 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i1119 = data
  i1118.enabled = !!i1119[0]
  i1118.layerId = i1119[1]
  i1118.otherLayerId = i1119[2]
  return i1118
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i1120 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i1121 = data
  var i1123 = i1121[0]
  var i1122 = []
  for(var i = 0; i < i1123.length; i += 1) {
    i1122.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1123[i + 0]) );
  }
  i1120.qualityLevels = i1122
  var i1125 = i1121[1]
  var i1124 = []
  for(var i = 0; i < i1125.length; i += 1) {
    i1124.push( i1125[i + 0] );
  }
  i1120.names = i1124
  i1120.shadows = i1121[2]
  i1120.anisotropicFiltering = i1121[3]
  i1120.antiAliasing = i1121[4]
  i1120.lodBias = i1121[5]
  i1120.shadowCascades = i1121[6]
  i1120.shadowDistance = i1121[7]
  i1120.shadowmaskMode = i1121[8]
  i1120.shadowProjection = i1121[9]
  i1120.shadowResolution = i1121[10]
  i1120.softParticles = !!i1121[11]
  i1120.softVegetation = !!i1121[12]
  i1120.activeColorSpace = i1121[13]
  i1120.desiredColorSpace = i1121[14]
  i1120.masterTextureLimit = i1121[15]
  i1120.maxQueuedFrames = i1121[16]
  i1120.particleRaycastBudget = i1121[17]
  i1120.pixelLightCount = i1121[18]
  i1120.realtimeReflectionProbes = !!i1121[19]
  i1120.shadowCascade2Split = i1121[20]
  i1120.shadowCascade4Split = new pc.Vec3( i1121[21], i1121[22], i1121[23] )
  i1120.streamingMipmapsActive = !!i1121[24]
  i1120.vSyncCount = i1121[25]
  i1120.asyncUploadBufferSize = i1121[26]
  i1120.asyncUploadTimeSlice = i1121[27]
  i1120.billboardsFaceCameraPosition = !!i1121[28]
  i1120.shadowNearPlaneOffset = i1121[29]
  i1120.streamingMipmapsMemoryBudget = i1121[30]
  i1120.maximumLODLevel = i1121[31]
  i1120.streamingMipmapsAddAllCameras = !!i1121[32]
  i1120.streamingMipmapsMaxLevelReduction = i1121[33]
  i1120.streamingMipmapsRenderersPerFrame = i1121[34]
  i1120.resolutionScalingFixedDPIFactor = i1121[35]
  i1120.streamingMipmapsMaxFileIORequests = i1121[36]
  i1120.currentQualityLevel = i1121[37]
  return i1120
}

Deserializers["Luna.Unity.DTO.UnityEngine.Audio.AudioMixer"] = function (request, data, root) {
  var i1128 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Audio.AudioMixer' )
  var i1129 = data
  var i1131 = i1129[0]
  var i1130 = []
  for(var i = 0; i < i1131.length; i += 1) {
    i1130.push( request.d('Luna.Unity.DTO.UnityEngine.Audio.AudioMixerGroup', i1131[i + 0]) );
  }
  i1128.groups = i1130
  var i1133 = i1129[1]
  var i1132 = []
  for(var i = 0; i < i1133.length; i += 1) {
    i1132.push( request.d('Luna.Unity.DTO.UnityEngine.Audio.AudioMixerSnapshot', i1133[i + 0]) );
  }
  i1128.snapshots = i1132
  return i1128
}

Deserializers["Luna.Unity.DTO.UnityEngine.Audio.AudioMixerGroup"] = function (request, data, root) {
  var i1136 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Audio.AudioMixerGroup' )
  var i1137 = data
  i1136.id = i1137[0]
  i1136.childGroupIds = i1137[1]
  i1136.name = i1137[2]
  return i1136
}

Deserializers["Luna.Unity.DTO.UnityEngine.Audio.AudioMixerSnapshot"] = function (request, data, root) {
  var i1140 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Audio.AudioMixerSnapshot' )
  var i1141 = data
  i1140.id = i1141[0]
  var i1143 = i1141[1]
  var i1142 = []
  for(var i = 0; i < i1143.length; i += 1) {
    i1142.push( request.d('Luna.Unity.DTO.UnityEngine.Audio.AudioMixerSnapshot+Parameter', i1143[i + 0]) );
  }
  i1140.parameters = i1142
  return i1140
}

Deserializers["Luna.Unity.DTO.UnityEngine.Audio.AudioMixerSnapshot+Parameter"] = function (request, data, root) {
  var i1146 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Audio.AudioMixerSnapshot+Parameter' )
  var i1147 = data
  i1146.name = i1147[0]
  i1146.value = i1147[1]
  return i1146
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame"] = function (request, data, root) {
  var i1150 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame' )
  var i1151 = data
  i1150.weight = i1151[0]
  i1150.vertices = i1151[1]
  i1150.normals = i1151[2]
  i1150.tangents = i1151[3]
  return i1150
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Components.Animator":{"animatorController":0,"avatar":2,"updateMode":4,"hasTransformHierarchy":5,"applyRootMotion":6,"humanBones":7,"enabled":8},"Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer":{"color":0,"sprite":4,"flipX":6,"flipY":7,"drawMode":8,"size":9,"tileMode":11,"adaptiveModeThreshold":12,"maskInteraction":13,"spriteSortPoint":14,"enabled":15,"sharedMaterial":16,"sharedMaterials":18,"receiveShadows":19,"shadowCastingMode":20,"sortingLayerID":21,"sortingOrder":22,"lightmapIndex":23,"lightmapSceneIndex":24,"lightmapScaleOffset":25,"lightProbeUsage":29,"reflectionProbeUsage":30},"Luna.Unity.DTO.UnityEngine.Components.TrailRenderer":{"positions":0,"positionCount":1,"time":2,"startWidth":3,"endWidth":4,"widthMultiplier":5,"autodestruct":6,"emitting":7,"numCornerVertices":8,"numCapVertices":9,"minVertexDistance":10,"colorGradient":11,"startColor":12,"endColor":16,"generateLightingData":20,"textureMode":21,"alignment":22,"widthCurve":23,"enabled":24,"sharedMaterial":25,"sharedMaterials":27,"receiveShadows":28,"shadowCastingMode":29,"sortingLayerID":30,"sortingOrder":31,"lightmapIndex":32,"lightmapSceneIndex":33,"lightmapScaleOffset":34,"lightProbeUsage":38,"reflectionProbeUsage":39},"Luna.Unity.DTO.UnityEngine.Components.SpriteMask":{"frontSortingLayerID":0,"frontSortingOrder":1,"backSortingLayerID":2,"backSortingOrder":3,"alphaCutoff":4,"sprite":5,"tileMode":7,"isCustomRangeActive":8,"spriteSortPoint":9,"enabled":10,"sharedMaterial":11,"sharedMaterials":13,"receiveShadows":14,"shadowCastingMode":15,"sortingLayerID":16,"sortingOrder":17,"lightmapIndex":18,"lightmapSceneIndex":19,"lightmapScaleOffset":20,"lightProbeUsage":24,"reflectionProbeUsage":25},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D":{"usedByComposite":0,"autoTiling":1,"size":2,"edgeRadius":4,"enabled":5,"isTrigger":6,"usedByEffector":7,"density":8,"offset":9,"material":11},"Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D":{"bodyType":0,"material":1,"simulated":3,"useAutoMass":4,"mass":5,"drag":6,"angularDrag":7,"gravityScale":8,"collisionDetectionMode":9,"sleepMode":10,"constraints":11},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystem":{"main":0,"colorBySpeed":1,"colorOverLifetime":2,"emission":3,"rotationBySpeed":4,"rotationOverLifetime":5,"shape":6,"sizeBySpeed":7,"sizeOverLifetime":8,"textureSheetAnimation":9,"velocityOverLifetime":10,"noise":11,"inheritVelocity":12,"forceOverLifetime":13,"limitVelocityOverLifetime":14,"useAutoRandomSeed":15,"randomSeed":16},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule":{"duration":0,"loop":1,"prewarm":2,"startDelay":3,"startLifetime":4,"startSpeed":5,"startSize3D":6,"startSizeX":7,"startSizeY":8,"startSizeZ":9,"startRotation3D":10,"startRotationX":11,"startRotationY":12,"startRotationZ":13,"startColor":14,"gravityModifier":15,"simulationSpace":16,"customSimulationSpace":17,"simulationSpeed":19,"useUnscaledTime":20,"scalingMode":21,"playOnAwake":22,"maxParticles":23,"emitterVelocityMode":24,"stopAction":25},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve":{"mode":0,"curveMin":1,"curveMax":2,"curveMultiplier":3,"constantMin":4,"constantMax":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient":{"mode":0,"gradientMin":1,"gradientMax":2,"colorMin":3,"colorMax":7},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient":{"mode":0,"colorKeys":1,"alphaKeys":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule":{"enabled":0,"color":1,"range":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey":{"color":0,"time":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey":{"alpha":0,"time":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule":{"enabled":0,"color":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule":{"enabled":0,"rateOverTime":1,"rateOverDistance":2,"bursts":3},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst":{"count":0,"cycleCount":1,"minCount":2,"maxCount":3,"repeatInterval":4,"time":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule":{"enabled":0,"shapeType":1,"randomDirectionAmount":2,"sphericalDirectionAmount":3,"randomPositionAmount":4,"alignToDirection":5,"radius":6,"radiusMode":7,"radiusSpread":8,"radiusSpeed":9,"radiusThickness":10,"angle":11,"length":12,"boxThickness":13,"meshShapeType":16,"mesh":17,"meshRenderer":19,"skinnedMeshRenderer":21,"useMeshMaterialIndex":23,"meshMaterialIndex":24,"useMeshColors":25,"normalOffset":26,"arc":27,"arcMode":28,"arcSpread":29,"arcSpeed":30,"donutRadius":31,"position":32,"rotation":35,"scale":38},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule":{"enabled":0,"mode":1,"animation":2,"numTilesX":3,"numTilesY":4,"useRandomRow":5,"frameOverTime":6,"startFrame":7,"cycleCount":8,"rowIndex":9,"flipU":10,"flipV":11,"spriteCount":12,"sprites":13},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"radial":4,"speedModifier":5,"space":6,"orbitalX":7,"orbitalY":8,"orbitalZ":9,"orbitalOffsetX":10,"orbitalOffsetY":11,"orbitalOffsetZ":12},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule":{"enabled":0,"separateAxes":1,"strengthX":2,"strengthY":3,"strengthZ":4,"frequency":5,"damping":6,"octaveCount":7,"octaveMultiplier":8,"octaveScale":9,"quality":10,"scrollSpeed":11,"scrollSpeedMultiplier":12,"remapEnabled":13,"remapX":14,"remapY":15,"remapZ":16,"positionAmount":17,"rotationAmount":18,"sizeAmount":19},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule":{"enabled":0,"mode":1,"curve":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"space":4,"randomized":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule":{"enabled":0,"limit":1,"limitX":2,"limitY":3,"limitZ":4,"dampen":5,"separateAxes":6,"space":7,"drag":8,"multiplyDragByParticleSize":9,"multiplyDragByParticleVelocity":10},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer":{"mesh":0,"meshCount":2,"activeVertexStreamsCount":3,"alignment":4,"renderMode":5,"sortMode":6,"lengthScale":7,"velocityScale":8,"cameraVelocityScale":9,"normalDirection":10,"sortingFudge":11,"minParticleSize":12,"maxParticleSize":13,"pivot":14,"trailMaterial":17,"applyActiveColorSpace":19,"enabled":20,"sharedMaterial":21,"sharedMaterials":23,"receiveShadows":24,"shadowCastingMode":25,"sortingLayerID":26,"sortingOrder":27,"lightmapIndex":28,"lightmapSceneIndex":29,"lightmapScaleOffset":30,"lightProbeUsage":34,"reflectionProbeUsage":35},"Luna.Unity.DTO.UnityEngine.Components.CircleCollider2D":{"radius":0,"enabled":1,"isTrigger":2,"usedByEffector":3,"density":4,"offset":5,"material":7},"Luna.Unity.DTO.UnityEngine.Components.AudioSource":{"clip":0,"outputAudioMixerGroup":2,"playOnAwake":4,"loop":5,"time":6,"volume":7,"pitch":8,"enabled":9},"Luna.Unity.DTO.UnityEngine.Assets.Mesh":{"name":0,"halfPrecision":1,"useSimplification":2,"useUInt32IndexFormat":3,"vertexCount":4,"aabb":5,"streams":6,"vertices":7,"subMeshes":8,"bindposes":9,"blendShapes":10},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh":{"triangles":0},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape":{"name":0,"frames":1},"Luna.Unity.DTO.UnityEngine.Textures.Cubemap":{"name":0,"atlasId":1,"mipmapCount":2,"hdr":3,"size":4,"anisoLevel":5,"filterMode":6,"rects":7,"wrapU":8,"wrapV":9},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"aspect":0,"orthographic":1,"orthographicSize":2,"backgroundColor":3,"nearClipPlane":7,"farClipPlane":8,"fieldOfView":9,"depth":10,"clearFlags":11,"cullingMask":12,"rect":13,"targetTexture":14,"usePhysicalProperties":16,"focalLength":17,"sensorSize":18,"lensShift":20,"gateFit":22,"commandBufferCount":23,"cameraType":24,"enabled":25},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"planeDistance":0,"referencePixelsPerUnit":1,"isFallbackOverlay":2,"renderMode":3,"renderOrder":4,"sortingLayerName":5,"sortingOrder":6,"scaleFactor":7,"worldCamera":8,"overrideSorting":10,"pixelPerfect":11,"targetDisplay":12,"overridePixelPerfect":13,"enabled":14},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"customReflection":36,"defaultReflection":38,"defaultReflectionMode":40,"defaultReflectionResolution":41,"sunLightObjectId":42,"pixelLightCount":43,"defaultReflectionHDR":44,"hasLightDataAsset":45,"hasManualGenerate":46},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2,"shadowMask":4},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"hasDepthOnlyPass":10,"isCreatedByShaderGraph":11,"disableBatching":12,"compiled":13},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip":{"name":0,"wrapMode":1,"isLooping":2,"length":3,"curves":4,"events":5,"halfPrecision":6,"_frameRate":7,"localBounds":8,"hasMuscleCurves":9,"clipMuscleConstant":10,"clipBindingConstant":11},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve":{"path":0,"hash":1,"componentType":2,"property":3,"keys":4,"objectReferenceKeys":5},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey":{"time":0,"value":1},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent":{"functionName":0,"floatParameter":1,"intParameter":2,"stringParameter":3,"objectReferenceParameter":4,"time":6},"Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds":{"center":0,"extends":3},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant":{"genericBindings":0,"pptrCurveMapping":1},"Luna.Unity.DTO.UnityEngine.Assets.Font":{"name":0,"ascent":1,"originalLineHeight":2,"fontSize":3,"characterInfo":4,"texture":5,"originalFontSize":7},"Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo":{"index":0,"advance":1,"bearing":2,"glyphWidth":3,"glyphHeight":4,"minX":5,"maxX":6,"minY":7,"maxY":8,"uvBottomLeftX":9,"uvBottomLeftY":10,"uvBottomRightX":11,"uvBottomRightY":12,"uvTopLeftX":13,"uvTopLeftY":14,"uvTopRightX":15,"uvTopRightY":16},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController":{"name":0,"layers":1,"parameters":2,"animationClips":3,"avatarUnsupported":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer":{"name":0,"defaultWeight":1,"blendingMode":2,"avatarMask":3,"syncedLayerIndex":4,"syncedLayerAffectsTiming":5,"syncedLayers":6,"stateMachine":7},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine":{"id":0,"name":1,"path":2,"states":3,"machines":4,"entryStateTransitions":5,"exitStateTransitions":6,"anyStateTransitions":7,"defaultStateId":8},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState":{"id":0,"name":1,"cycleOffset":2,"cycleOffsetParameter":3,"cycleOffsetParameterActive":4,"mirror":5,"mirrorParameter":6,"mirrorParameterActive":7,"motionId":8,"nameHash":9,"fullPathHash":10,"speed":11,"speedParameter":12,"speedParameterActive":13,"tag":14,"tagHash":15,"writeDefaultValues":16,"behaviours":17,"transitions":18},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition":{"fullPath":0,"canTransitionToSelf":1,"duration":2,"exitTime":3,"hasExitTime":4,"hasFixedDuration":5,"interruptionSource":6,"offset":7,"orderedInterruption":8,"destinationStateId":9,"isExit":10,"mute":11,"solo":12,"conditions":13},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition":{"destinationStateId":0,"isExit":1,"mute":2,"solo":3,"conditions":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition":{"mode":0,"parameter":1,"threshold":2},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter":{"defaultBool":0,"defaultFloat":1,"defaultInt":2,"name":3,"nameHash":4,"type":5},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableStaticBatching":9,"enableDynamicBatching":10,"usePreservativeDynamicBatching":11,"lightmapEncodingQuality":12,"desiredColorSpace":13,"allTags":14},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37},"Luna.Unity.DTO.UnityEngine.Audio.AudioMixer":{"groups":0,"snapshots":1},"Luna.Unity.DTO.UnityEngine.Audio.AudioMixerGroup":{"id":0,"childGroupIds":1,"name":2},"Luna.Unity.DTO.UnityEngine.Audio.AudioMixerSnapshot":{"id":0,"parameters":1},"Luna.Unity.DTO.UnityEngine.Audio.AudioMixerSnapshot+Parameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame":{"weight":0,"vertices":1,"normals":2,"tangents":3}}

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

Deserializers.buildID = "e32d965a-47d0-4a20-9155-3aba7ec01599";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[],[["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"]],[],[]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

