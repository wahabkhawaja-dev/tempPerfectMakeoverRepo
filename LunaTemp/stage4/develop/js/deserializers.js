var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i600 = root || request.c( 'UnityEngine.JointSpring' )
  var i601 = data
  i600.spring = i601[0]
  i600.damper = i601[1]
  i600.targetPosition = i601[2]
  return i600
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i602 = root || request.c( 'UnityEngine.JointMotor' )
  var i603 = data
  i602.m_TargetVelocity = i603[0]
  i602.m_Force = i603[1]
  i602.m_FreeSpin = i603[2]
  return i602
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i604 = root || request.c( 'UnityEngine.JointLimits' )
  var i605 = data
  i604.m_Min = i605[0]
  i604.m_Max = i605[1]
  i604.m_Bounciness = i605[2]
  i604.m_BounceMinVelocity = i605[3]
  i604.m_ContactDistance = i605[4]
  i604.minBounce = i605[5]
  i604.maxBounce = i605[6]
  return i604
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i606 = root || request.c( 'UnityEngine.JointDrive' )
  var i607 = data
  i606.m_PositionSpring = i607[0]
  i606.m_PositionDamper = i607[1]
  i606.m_MaximumForce = i607[2]
  i606.m_UseAcceleration = i607[3]
  return i606
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i608 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i609 = data
  i608.m_Spring = i609[0]
  i608.m_Damper = i609[1]
  return i608
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i610 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i611 = data
  i610.m_Limit = i611[0]
  i610.m_Bounciness = i611[1]
  i610.m_ContactDistance = i611[2]
  return i610
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i612 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i613 = data
  i612.m_ExtremumSlip = i613[0]
  i612.m_ExtremumValue = i613[1]
  i612.m_AsymptoteSlip = i613[2]
  i612.m_AsymptoteValue = i613[3]
  i612.m_Stiffness = i613[4]
  return i612
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i614 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i615 = data
  i614.m_LowerAngle = i615[0]
  i614.m_UpperAngle = i615[1]
  return i614
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i616 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i617 = data
  i616.m_MotorSpeed = i617[0]
  i616.m_MaximumMotorTorque = i617[1]
  return i616
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i618 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i619 = data
  i618.m_DampingRatio = i619[0]
  i618.m_Frequency = i619[1]
  i618.m_Angle = i619[2]
  return i618
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i620 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i621 = data
  i620.m_LowerTranslation = i621[0]
  i620.m_UpperTranslation = i621[1]
  return i620
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i622 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i623 = data
  i622.name = i623[0]
  i622.width = i623[1]
  i622.height = i623[2]
  i622.mipmapCount = i623[3]
  i622.anisoLevel = i623[4]
  i622.filterMode = i623[5]
  i622.hdr = !!i623[6]
  i622.format = i623[7]
  i622.wrapMode = i623[8]
  i622.alphaIsTransparency = !!i623[9]
  i622.alphaSource = i623[10]
  i622.graphicsFormat = i623[11]
  i622.sRGBTexture = !!i623[12]
  i622.desiredColorSpace = i623[13]
  i622.wrapU = i623[14]
  i622.wrapV = i623[15]
  return i622
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i624 = root || new pc.UnityMaterial()
  var i625 = data
  i624.name = i625[0]
  request.r(i625[1], i625[2], 0, i624, 'shader')
  i624.renderQueue = i625[3]
  i624.enableInstancing = !!i625[4]
  var i627 = i625[5]
  var i626 = []
  for(var i = 0; i < i627.length; i += 1) {
    i626.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i627[i + 0]) );
  }
  i624.floatParameters = i626
  var i629 = i625[6]
  var i628 = []
  for(var i = 0; i < i629.length; i += 1) {
    i628.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i629[i + 0]) );
  }
  i624.colorParameters = i628
  var i631 = i625[7]
  var i630 = []
  for(var i = 0; i < i631.length; i += 1) {
    i630.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i631[i + 0]) );
  }
  i624.vectorParameters = i630
  var i633 = i625[8]
  var i632 = []
  for(var i = 0; i < i633.length; i += 1) {
    i632.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i633[i + 0]) );
  }
  i624.textureParameters = i632
  var i635 = i625[9]
  var i634 = []
  for(var i = 0; i < i635.length; i += 1) {
    i634.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i635[i + 0]) );
  }
  i624.materialFlags = i634
  return i624
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i638 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i639 = data
  i638.name = i639[0]
  i638.value = i639[1]
  return i638
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i642 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i643 = data
  i642.name = i643[0]
  i642.value = new pc.Color(i643[1], i643[2], i643[3], i643[4])
  return i642
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i646 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i647 = data
  i646.name = i647[0]
  i646.value = new pc.Vec4( i647[1], i647[2], i647[3], i647[4] )
  return i646
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i650 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i651 = data
  i650.name = i651[0]
  request.r(i651[1], i651[2], 0, i650, 'value')
  return i650
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i654 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i655 = data
  i654.name = i655[0]
  i654.enabled = !!i655[1]
  return i654
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh"] = function (request, data, root) {
  var i656 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh' )
  var i657 = data
  i656.name = i657[0]
  i656.halfPrecision = !!i657[1]
  i656.useSimplification = !!i657[2]
  i656.useUInt32IndexFormat = !!i657[3]
  i656.vertexCount = i657[4]
  i656.aabb = i657[5]
  var i659 = i657[6]
  var i658 = []
  for(var i = 0; i < i659.length; i += 1) {
    i658.push( !!i659[i + 0] );
  }
  i656.streams = i658
  i656.vertices = i657[7]
  var i661 = i657[8]
  var i660 = []
  for(var i = 0; i < i661.length; i += 1) {
    i660.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh', i661[i + 0]) );
  }
  i656.subMeshes = i660
  var i663 = i657[9]
  var i662 = []
  for(var i = 0; i < i663.length; i += 16) {
    i662.push( new pc.Mat4().setData(i663[i + 0], i663[i + 1], i663[i + 2], i663[i + 3],  i663[i + 4], i663[i + 5], i663[i + 6], i663[i + 7],  i663[i + 8], i663[i + 9], i663[i + 10], i663[i + 11],  i663[i + 12], i663[i + 13], i663[i + 14], i663[i + 15]) );
  }
  i656.bindposes = i662
  var i665 = i657[10]
  var i664 = []
  for(var i = 0; i < i665.length; i += 1) {
    i664.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape', i665[i + 0]) );
  }
  i656.blendShapes = i664
  return i656
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh"] = function (request, data, root) {
  var i670 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh' )
  var i671 = data
  i670.triangles = i671[0]
  return i670
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape"] = function (request, data, root) {
  var i676 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape' )
  var i677 = data
  i676.name = i677[0]
  var i679 = i677[1]
  var i678 = []
  for(var i = 0; i < i679.length; i += 1) {
    i678.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame', i679[i + 0]) );
  }
  i676.frames = i678
  return i676
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i680 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i681 = data
  i680.position = new pc.Vec3( i681[0], i681[1], i681[2] )
  i680.scale = new pc.Vec3( i681[3], i681[4], i681[5] )
  i680.rotation = new pc.Quat(i681[6], i681[7], i681[8], i681[9])
  return i680
}

Deserializers["Level2_Shoe_Playable"] = function (request, data, root) {
  var i682 = root || request.c( 'Level2_Shoe_Playable' )
  var i683 = data
  i682.MainZoom = request.d('ZoomPos', i683[0], i682.MainZoom)
  i682.ZoomStep1 = request.d('ZoomPos', i683[1], i682.ZoomStep1)
  request.r(i683[2], i683[3], 0, i682, 'ToolStep1')
  request.r(i683[4], i683[5], 0, i682, 'ToolStep1CameraFollow')
  request.r(i683[6], i683[7], 0, i682, 'Step1Col')
  var i685 = i683[8]
  var i684 = []
  for(var i = 0; i < i685.length; i += 2) {
  request.r(i685[i + 0], i685[i + 1], 2, i684, '')
  }
  i682.LayersToFade_1 = i684
  request.r(i683[9], i683[10], 0, i682, 'LayersToFade_Updated')
  request.r(i683[11], i683[12], 0, i682, 'MudLayer_1')
  i682.ZoomStep2 = request.d('ZoomPos', i683[13], i682.ZoomStep2)
  request.r(i683[14], i683[15], 0, i682, 'ToolStep2')
  request.r(i683[16], i683[17], 0, i682, 'ToolStep2CameraFollow')
  request.r(i683[18], i683[19], 0, i682, 'Step2Col')
  var i687 = i683[20]
  var i686 = []
  for(var i = 0; i < i687.length; i += 2) {
  request.r(i687[i + 0], i687[i + 1], 2, i686, '')
  }
  i682.LayersToFade_2 = i686
  request.r(i683[21], i683[22], 0, i682, 'WetMud_2')
  i682.ZoomStep3 = request.d('ZoomPos', i683[23], i682.ZoomStep3)
  request.r(i683[24], i683[25], 0, i682, 'ToolStep3')
  request.r(i683[26], i683[27], 0, i682, 'ToolStep3CameraFollow')
  var i689 = i683[28]
  var i688 = []
  for(var i = 0; i < i689.length; i += 2) {
  request.r(i689[i + 0], i689[i + 1], 2, i688, '')
  }
  i682.LayersToFade_3 = i688
  request.r(i683[29], i683[30], 0, i682, 'Foam_3')
  i682.ZoomStep4 = request.d('ZoomPos', i683[31], i682.ZoomStep4)
  request.r(i683[32], i683[33], 0, i682, 'ToolStep4')
  request.r(i683[34], i683[35], 0, i682, 'ToolStep4CameraFollow')
  request.r(i683[36], i683[37], 0, i682, 'Step4Col')
  var i691 = i683[38]
  var i690 = []
  for(var i = 0; i < i691.length; i += 2) {
  request.r(i691[i + 0], i691[i + 1], 2, i690, '')
  }
  i682.LayersToFade_4 = i690
  request.r(i683[39], i683[40], 0, i682, 'dry')
  request.r(i683[41], i683[42], 0, i682, 'mixeE')
  request.r(i683[43], i683[44], 0, i682, 'mix')
  request.r(i683[45], i683[46], 0, i682, 'Mix_4')
  i682.ZoomStep5 = request.d('ZoomPos', i683[47], i682.ZoomStep5)
  request.r(i683[48], i683[49], 0, i682, 'ToolStep5')
  request.r(i683[50], i683[51], 0, i682, 'ToolStep5CameraFollow')
  var i693 = i683[52]
  var i692 = []
  for(var i = 0; i < i693.length; i += 2) {
  request.r(i693[i + 0], i693[i + 1], 2, i692, '')
  }
  i682.LayersToFade_5 = i692
  request.r(i683[53], i683[54], 0, i682, 'WetLayer')
  request.r(i683[55], i683[56], 0, i682, 'DryLayer')
  i682.levelName = i683[57]
  i682.levelReward = i683[58]
  request.r(i683[59], i683[60], 0, i682, 'LevelIcon')
  request.r(i683[61], i683[62], 0, i682, 'Level_BG')
  var i695 = i683[63]
  var i694 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Sprite')))
  for(var i = 0; i < i695.length; i += 2) {
  request.r(i695[i + 0], i695[i + 1], 1, i694, '')
  }
  i682.ToolIcons = i694
  var i697 = i683[64]
  var i696 = []
  for(var i = 0; i < i697.length; i += 2) {
  request.r(i697[i + 0], i697[i + 1], 2, i696, '')
  }
  i682.AllDrags = i696
  var i699 = i683[65]
  var i698 = []
  for(var i = 0; i < i699.length; i += 2) {
  request.r(i699[i + 0], i699[i + 1], 2, i698, '')
  }
  i682.AllSources = i698
  var i701 = i683[66]
  var i700 = []
  for(var i = 0; i < i701.length; i += 2) {
  request.r(i701[i + 0], i701[i + 1], 2, i700, '')
  }
  i682.AllScratches = i700
  i682.stepsDone = i683[67]
  i682.levelNo = i683[68]
  i682.partNo = i683[69]
  return i682
}

Deserializers["ZoomPos"] = function (request, data, root) {
  var i702 = root || request.c( 'ZoomPos' )
  var i703 = data
  i702.CameraPos = new pc.Vec3( i703[0], i703[1], i703[2] )
  i702.CameraFOV = i703[3]
  return i702
}

Deserializers["PlayableCTA"] = function (request, data, root) {
  var i714 = root || request.c( 'PlayableCTA' )
  var i715 = data
  i714.trigger = i715[0]
  i714.afterSeconds = i715[1]
  i714.afterTaps = i715[2]
  i714.refireOnEveryTap = !!i715[3]
  i714.refireDelay = i715[4]
  i714.onCtaFired = request.d('UnityEngine.Events.UnityEvent', i715[5], i714.onCtaFired)
  i714.logWhenFired = !!i715[6]
  return i714
}

Deserializers["UnityEngine.Events.UnityEvent"] = function (request, data, root) {
  var i716 = root || request.c( 'UnityEngine.Events.UnityEvent' )
  var i717 = data
  i716.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i717[0], i716.m_PersistentCalls)
  return i716
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i718 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i719 = data
  var i721 = i719[0]
  var i720 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i721.length; i += 1) {
    i720.add(request.d('UnityEngine.Events.PersistentCall', i721[i + 0]));
  }
  i718.m_Calls = i720
  return i718
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i724 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i725 = data
  request.r(i725[0], i725[1], 0, i724, 'm_Target')
  i724.m_TargetAssemblyTypeName = i725[2]
  i724.m_MethodName = i725[3]
  i724.m_Mode = i725[4]
  i724.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i725[5], i724.m_Arguments)
  i724.m_CallState = i725[6]
  return i724
}

Deserializers["ScratchCardAsset.ScratchCardManager"] = function (request, data, root) {
  var i726 = root || request.c( 'ScratchCardAsset.ScratchCardManager' )
  var i727 = data
  request.r(i727[0], i727[1], 0, i726, 'MainCamera')
  i726.RenderType = i727[2]
  request.r(i727[3], i727[4], 0, i726, 'ScratchSurfaceSprite')
  i726.ScratchSurfaceSpriteHasAlpha = !!i727[5]
  i726.MaskProgressCutOffValue = i727[6]
  request.r(i727[7], i727[8], 0, i726, 'EraseTexture')
  i726.EraseTextureScale = new pc.Vec2( i727[9], i727[10] )
  i726.InputEnabled = !!i727[11]
  request.r(i727[12], i727[13], 0, i726, 'Card')
  i726.Mode = i727[14]
  request.r(i727[15], i727[16], 0, i726, 'Progress')
  request.r(i727[17], i727[18], 0, i726, 'MeshCard')
  request.r(i727[19], i727[20], 0, i726, 'SpriteCard')
  request.r(i727[21], i727[22], 0, i726, 'ImageCard')
  request.r(i727[23], i727[24], 0, i726, 'MaskShader')
  request.r(i727[25], i727[26], 0, i726, 'BrushShader')
  request.r(i727[27], i727[28], 0, i726, 'MaskProgressShader')
  request.r(i727[29], i727[30], 0, i726, 'MaskProgressCutOffShader')
  return i726
}

Deserializers["ScratchCardAsset.ScratchCard"] = function (request, data, root) {
  var i728 = root || request.c( 'ScratchCardAsset.ScratchCard' )
  var i729 = data
  request.r(i729[0], i729[1], 0, i728, 'MainCamera')
  request.r(i729[2], i729[3], 0, i728, 'Surface')
  i728.RenderTextureQuality = i729[4]
  request.r(i729[5], i729[6], 0, i728, 'Eraser')
  request.r(i729[7], i729[8], 0, i728, 'Progress')
  request.r(i729[9], i729[10], 0, i728, 'ScratchSurface')
  request.r(i729[11], i729[12], 0, i728, 'RenderTexture')
  i728.BrushScale = new pc.Vec2( i729[13], i729[14] )
  request.r(i729[15], i729[16], 0, i728, 'ToolTip')
  i728.InputEnabled = !!i729[17]
  i728.IsScratching = !!i729[18]
  i728.useChangingScale = !!i729[19]
  i728.useGivenBrushScale = !!i729[20]
  i728.canSpreadMask = !!i729[21]
  i728.shouldPaintHoles = !!i729[22]
  i728.canRotateTip = !!i729[23]
  i728._mode = i729[24]
  return i728
}

Deserializers["ScratchCardAsset.EraseProgress"] = function (request, data, root) {
  var i730 = root || request.c( 'ScratchCardAsset.EraseProgress' )
  var i731 = data
  request.r(i731[0], i731[1], 0, i730, 'Card')
  i730.currentProgress = i731[2]
  return i730
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i732 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i733 = data
  i732.name = i733[0]
  i732.tagId = i733[1]
  i732.enabled = !!i733[2]
  i732.isStatic = !!i733[3]
  i732.layer = i733[4]
  return i732
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer"] = function (request, data, root) {
  var i734 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer' )
  var i735 = data
  i734.color = new pc.Color(i735[0], i735[1], i735[2], i735[3])
  request.r(i735[4], i735[5], 0, i734, 'sprite')
  i734.flipX = !!i735[6]
  i734.flipY = !!i735[7]
  i734.drawMode = i735[8]
  i734.size = new pc.Vec2( i735[9], i735[10] )
  i734.tileMode = i735[11]
  i734.adaptiveModeThreshold = i735[12]
  i734.maskInteraction = i735[13]
  i734.spriteSortPoint = i735[14]
  i734.enabled = !!i735[15]
  request.r(i735[16], i735[17], 0, i734, 'sharedMaterial')
  var i737 = i735[18]
  var i736 = []
  for(var i = 0; i < i737.length; i += 2) {
  request.r(i737[i + 0], i737[i + 1], 2, i736, '')
  }
  i734.sharedMaterials = i736
  i734.receiveShadows = !!i735[19]
  i734.shadowCastingMode = i735[20]
  i734.sortingLayerID = i735[21]
  i734.sortingOrder = i735[22]
  i734.lightmapIndex = i735[23]
  i734.lightmapSceneIndex = i735[24]
  i734.lightmapScaleOffset = new pc.Vec4( i735[25], i735[26], i735[27], i735[28] )
  i734.lightProbeUsage = i735[29]
  i734.reflectionProbeUsage = i735[30]
  return i734
}

Deserializers["PlayParticlesOnCollision"] = function (request, data, root) {
  var i740 = root || request.c( 'PlayParticlesOnCollision' )
  var i741 = data
  request.r(i741[0], i741[1], 0, i740, 'Target')
  request.r(i741[2], i741[3], 0, i740, 'ParticlePrefab')
  i740.destroyIt = !!i741[4]
  i740.stayAtPlace = !!i741[5]
  i740.disableOnCollision = !!i741[6]
  i740.OnCollisionEvent = request.d('UnityEngine.Events.UnityEvent', i741[7], i740.OnCollisionEvent)
  return i740
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CircleCollider2D"] = function (request, data, root) {
  var i742 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CircleCollider2D' )
  var i743 = data
  i742.radius = i743[0]
  i742.enabled = !!i743[1]
  i742.isTrigger = !!i743[2]
  i742.usedByEffector = !!i743[3]
  i742.density = i743[4]
  i742.offset = new pc.Vec2( i743[5], i743[6] )
  request.r(i743[7], i743[8], 0, i742, 'material')
  return i742
}

Deserializers["PlaySfxOnCollision"] = function (request, data, root) {
  var i744 = root || request.c( 'PlaySfxOnCollision' )
  var i745 = data
  request.r(i745[0], i745[1], 0, i744, 'Tip')
  i744.Mode = i745[2]
  request.r(i745[3], i745[4], 0, i744, 'DragInput')
  request.r(i745[5], i745[6], 0, i744, 'Source')
  i744.startVol = i745[7]
  i744.targetVol = i745[8]
  i744.duration = i745[9]
  request.r(i745[10], i745[11], 0, i744, 'Particles')
  i744.isDone = !!i745[12]
  i744.isInArea = !!i745[13]
  i744.isPlaying = !!i745[14]
  return i744
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i746 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i747 = data
  request.r(i747[0], i747[1], 0, i746, 'clip')
  request.r(i747[2], i747[3], 0, i746, 'outputAudioMixerGroup')
  i746.playOnAwake = !!i747[4]
  i746.loop = !!i747[5]
  i746.time = i747[6]
  i746.volume = i747[7]
  i746.pitch = i747[8]
  i746.enabled = !!i747[9]
  return i746
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.PolygonCollider2D"] = function (request, data, root) {
  var i748 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.PolygonCollider2D' )
  var i749 = data
  i748.usedByComposite = !!i749[0]
  i748.autoTiling = !!i749[1]
  var i751 = i749[2]
  var i750 = []
  for(var i = 0; i < i751.length; i += 1) {
  var i753 = i751[i + 0]
  var i752 = []
  for(var i = 0; i < i753.length; i += 2) {
    i752.push( new pc.Vec2( i753[i + 0], i753[i + 1] ) );
  }
    i750.push( i752 );
  }
  i748.points = i750
  i748.enabled = !!i749[3]
  i748.isTrigger = !!i749[4]
  i748.usedByEffector = !!i749[5]
  i748.density = i749[6]
  i748.offset = new pc.Vec2( i749[7], i749[8] )
  request.r(i749[9], i749[10], 0, i748, 'material')
  return i748
}

Deserializers["BasicDrag"] = function (request, data, root) {
  var i760 = root || request.c( 'BasicDrag' )
  var i761 = data
  i760.canDrag = !!i761[0]
  i760.dragByDelta = !!i761[1]
  i760.isDragging = !!i761[2]
  i760.moveWithPointer = !!i761[3]
  i760.canReturn = !!i761[4]
  i760.jumpOnReturn = !!i761[5]
  i760.returnTime = i761[6]
  i760.Tool_Offset = new pc.Vec3( i761[7], i761[8], i761[9] )
  i760.canScaleIncrease = !!i761[10]
  i760.Self_ScaleNew = new pc.Vec3( i761[11], i761[12], i761[13] )
  i760.canRotateOnPick = !!i761[14]
  i760.startRot = new pc.Vec3( i761[15], i761[16], i761[17] )
  i760.newRot = new pc.Vec3( i761[18], i761[19], i761[20] )
  var i763 = i761[21]
  var i762 = []
  for(var i = 0; i < i763.length; i += 2) {
  request.r(i763[i + 0], i763[i + 1], 2, i762, '')
  }
  i760.childSprite = i762
  request.r(i761[22], i761[23], 0, i760, 'ToolSelectClip')
  request.r(i761[24], i761[25], 0, i760, 'ToolLoopClip')
  request.r(i761[26], i761[27], 0, i760, 'thisParticles')
  i760.onDragparticle = !!i761[28]
  request.r(i761[29], i761[30], 0, i760, 'dragParticles')
  request.r(i761[31], i761[32], 0, i760, 'anim')
  i760.startPos = new pc.Vec3( i761[33], i761[34], i761[35] )
  i760.startScale = new pc.Vec3( i761[36], i761[37], i761[38] )
  i760.Vibration = !!i761[39]
  i760.isPlacedCannotMove = !!i761[40]
  i760.isObjectMovingWhileDragging = !!i761[41]
  i760.OnMouseDownEvent = request.d('System.Action', i761[42], i760.OnMouseDownEvent)
  i760.OnMouseUpEvent = request.d('System.Action', i761[43], i760.OnMouseUpEvent)
  i760.ProgStartEvent = request.d('System.Action', i761[44], i760.ProgStartEvent)
  i760.ProgEndEvent = request.d('System.Action', i761[45], i760.ProgEndEvent)
  i760.canCallMouseUpWhenGamePaused = !!i761[46]
  i760.ClampX_L = i761[47]
  i760.ClampX_H = i761[48]
  i760.ClampY_L = i761[49]
  i760.ClampY_H = i761[50]
  i760.startOrder = i761[51]
  i760.dontResetItIsInCollider = !!i761[52]
  request.r(i761[53], i761[54], 0, i760, 'thisCollider')
  request.r(i761[55], i761[56], 0, i760, 'thisSR')
  i760.OnMouseDownEventIndependentFromCanDrag = request.d('System.Action', i761[57], i760.OnMouseDownEventIndependentFromCanDrag)
  return i760
}

Deserializers["System.Action"] = function (request, data, root) {
  var i764 = root || request.c( 'System.Action' )
  var i765 = data
  return i764
}

Deserializers["BD_Progress"] = function (request, data, root) {
  var i766 = root || request.c( 'BD_Progress' )
  var i767 = data
  var i769 = i767[0]
  var i768 = []
  for(var i = 0; i < i769.length; i += 1) {
    i768.push( request.d('ScratchData', i769[i + 0]) );
  }
  i766.AllScratches = i768
  i766.OnScratchComplete = request.d('UnityEngine.Events.UnityEvent', i767[1], i766.OnScratchComplete)
  i766.isProgDone = !!i767[2]
  i766.canCallComplete = !!i767[3]
  i766.CollectiveAppear = !!i767[4]
  i766.tipControl = !!i767[5]
  i766.progressControl = !!i767[6]
  request.r(i767[7], i767[8], 0, i766, 'thisDrag')
  i766.CompleteEvent = request.d('System.Action', i767[9], i766.CompleteEvent)
  i766.SubCompleteEvent = request.d('System.Action', i767[10], i766.SubCompleteEvent)
  return i766
}

Deserializers["ScratchData"] = function (request, data, root) {
  var i772 = root || request.c( 'ScratchData' )
  var i773 = data
  request.r(i773[0], i773[1], 0, i772, 'ScratchManager')
  i772.scratchLimit = i773[2]
  i772.isComplete = !!i773[3]
  return i772
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i774 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i775 = data
  request.r(i775[0], i775[1], 0, i774, 'm_ObjectArgument')
  i774.m_ObjectArgumentAssemblyTypeName = i775[2]
  i774.m_IntArgument = i775[3]
  i774.m_FloatArgument = i775[4]
  i774.m_StringArgument = i775[5]
  i774.m_BoolArgument = !!i775[6]
  return i774
}

Deserializers["BD_Clamp"] = function (request, data, root) {
  var i776 = root || request.c( 'BD_Clamp' )
  var i777 = data
  i776.ClampX_L = i777[0]
  i776.ClampX_H = i777[1]
  i776.ClampY_L = i777[2]
  i776.ClampY_H = i777[3]
  return i776
}

Deserializers["BD_ToolRotate"] = function (request, data, root) {
  var i778 = root || request.c( 'BD_ToolRotate' )
  var i779 = data
  i778.startDelay = i779[0]
  request.r(i779[1], i779[2], 0, i778, 'Tool')
  request.r(i779[3], i779[4], 0, i778, 'Clamp')
  request.r(i779[5], i779[6], 0, i778, 'Pivot')
  i778.MinAngle = new pc.Vec3( i779[7], i779[8], i779[9] )
  i778.MaxAngle = new pc.Vec3( i779[10], i779[11], i779[12] )
  i778.rotationSpeed = i779[13]
  return i778
}

Deserializers["BD_CameraFollow"] = function (request, data, root) {
  var i780 = root || request.c( 'BD_CameraFollow' )
  var i781 = data
  request.r(i781[0], i781[1], 0, i780, 'Tool')
  request.r(i781[2], i781[3], 0, i780, 'Pivot')
  i780.FOV = i781[4]
  i780.Y_L = i781[5]
  i780.Y_H = i781[6]
  i780.X_L = i781[7]
  i780.X_R = i781[8]
  i780.startDelay = i781[9]
  i780.duration = i781[10]
  return i780
}

Deserializers["BD_Audio"] = function (request, data, root) {
  var i782 = root || request.c( 'BD_Audio' )
  var i783 = data
  request.r(i783[0], i783[1], 0, i782, 'BD')
  request.r(i783[2], i783[3], 0, i782, 'Source')
  i782.shouldRestart = !!i783[4]
  i782.startVol = i783[5]
  i782.targetVol = i783[6]
  i782.duration = i783[7]
  i782.startDelay = i783[8]
  return i782
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D"] = function (request, data, root) {
  var i784 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D' )
  var i785 = data
  i784.usedByComposite = !!i785[0]
  i784.autoTiling = !!i785[1]
  i784.size = new pc.Vec2( i785[2], i785[3] )
  i784.edgeRadius = i785[4]
  i784.enabled = !!i785[5]
  i784.isTrigger = !!i785[6]
  i784.usedByEffector = !!i785[7]
  i784.density = i785[8]
  i784.offset = new pc.Vec2( i785[9], i785[10] )
  request.r(i785[11], i785[12], 0, i784, 'material')
  return i784
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animator"] = function (request, data, root) {
  var i786 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animator' )
  var i787 = data
  request.r(i787[0], i787[1], 0, i786, 'animatorController')
  request.r(i787[2], i787[3], 0, i786, 'avatar')
  i786.updateMode = i787[4]
  i786.hasTransformHierarchy = !!i787[5]
  i786.applyRootMotion = !!i787[6]
  var i789 = i787[7]
  var i788 = []
  for(var i = 0; i < i789.length; i += 2) {
  request.r(i789[i + 0], i789[i + 1], 2, i788, '')
  }
  i786.humanBones = i788
  i786.enabled = !!i787[8]
  return i786
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystem"] = function (request, data, root) {
  var i792 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystem' )
  var i793 = data
  i792.main = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule', i793[0], i792.main)
  i792.colorBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule', i793[1], i792.colorBySpeed)
  i792.colorOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule', i793[2], i792.colorOverLifetime)
  i792.emission = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule', i793[3], i792.emission)
  i792.rotationBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule', i793[4], i792.rotationBySpeed)
  i792.rotationOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule', i793[5], i792.rotationOverLifetime)
  i792.shape = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule', i793[6], i792.shape)
  i792.sizeBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule', i793[7], i792.sizeBySpeed)
  i792.sizeOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule', i793[8], i792.sizeOverLifetime)
  i792.textureSheetAnimation = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule', i793[9], i792.textureSheetAnimation)
  i792.velocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule', i793[10], i792.velocityOverLifetime)
  i792.noise = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule', i793[11], i792.noise)
  i792.inheritVelocity = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule', i793[12], i792.inheritVelocity)
  i792.forceOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule', i793[13], i792.forceOverLifetime)
  i792.limitVelocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule', i793[14], i792.limitVelocityOverLifetime)
  i792.useAutoRandomSeed = !!i793[15]
  i792.randomSeed = i793[16]
  return i792
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule"] = function (request, data, root) {
  var i794 = root || new pc.ParticleSystemMain()
  var i795 = data
  i794.duration = i795[0]
  i794.loop = !!i795[1]
  i794.prewarm = !!i795[2]
  i794.startDelay = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i795[3], i794.startDelay)
  i794.startLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i795[4], i794.startLifetime)
  i794.startSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i795[5], i794.startSpeed)
  i794.startSize3D = !!i795[6]
  i794.startSizeX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i795[7], i794.startSizeX)
  i794.startSizeY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i795[8], i794.startSizeY)
  i794.startSizeZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i795[9], i794.startSizeZ)
  i794.startRotation3D = !!i795[10]
  i794.startRotationX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i795[11], i794.startRotationX)
  i794.startRotationY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i795[12], i794.startRotationY)
  i794.startRotationZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i795[13], i794.startRotationZ)
  i794.startColor = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i795[14], i794.startColor)
  i794.gravityModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i795[15], i794.gravityModifier)
  i794.simulationSpace = i795[16]
  request.r(i795[17], i795[18], 0, i794, 'customSimulationSpace')
  i794.simulationSpeed = i795[19]
  i794.useUnscaledTime = !!i795[20]
  i794.scalingMode = i795[21]
  i794.playOnAwake = !!i795[22]
  i794.maxParticles = i795[23]
  i794.emitterVelocityMode = i795[24]
  i794.stopAction = i795[25]
  return i794
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve"] = function (request, data, root) {
  var i796 = root || new pc.MinMaxCurve()
  var i797 = data
  i796.mode = i797[0]
  i796.curveMin = new pc.AnimationCurve( { keys_flow: i797[1] } )
  i796.curveMax = new pc.AnimationCurve( { keys_flow: i797[2] } )
  i796.curveMultiplier = i797[3]
  i796.constantMin = i797[4]
  i796.constantMax = i797[5]
  return i796
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient"] = function (request, data, root) {
  var i798 = root || new pc.MinMaxGradient()
  var i799 = data
  i798.mode = i799[0]
  i798.gradientMin = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i799[1], i798.gradientMin)
  i798.gradientMax = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i799[2], i798.gradientMax)
  i798.colorMin = new pc.Color(i799[3], i799[4], i799[5], i799[6])
  i798.colorMax = new pc.Color(i799[7], i799[8], i799[9], i799[10])
  return i798
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient"] = function (request, data, root) {
  var i800 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient' )
  var i801 = data
  i800.mode = i801[0]
  var i803 = i801[1]
  var i802 = []
  for(var i = 0; i < i803.length; i += 1) {
    i802.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey', i803[i + 0]) );
  }
  i800.colorKeys = i802
  var i805 = i801[2]
  var i804 = []
  for(var i = 0; i < i805.length; i += 1) {
    i804.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey', i805[i + 0]) );
  }
  i800.alphaKeys = i804
  return i800
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule"] = function (request, data, root) {
  var i806 = root || new pc.ParticleSystemColorBySpeed()
  var i807 = data
  i806.enabled = !!i807[0]
  i806.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i807[1], i806.color)
  i806.range = new pc.Vec2( i807[2], i807[3] )
  return i806
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey"] = function (request, data, root) {
  var i810 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey' )
  var i811 = data
  i810.color = new pc.Color(i811[0], i811[1], i811[2], i811[3])
  i810.time = i811[4]
  return i810
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey"] = function (request, data, root) {
  var i814 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey' )
  var i815 = data
  i814.alpha = i815[0]
  i814.time = i815[1]
  return i814
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule"] = function (request, data, root) {
  var i816 = root || new pc.ParticleSystemColorOverLifetime()
  var i817 = data
  i816.enabled = !!i817[0]
  i816.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i817[1], i816.color)
  return i816
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule"] = function (request, data, root) {
  var i818 = root || new pc.ParticleSystemEmitter()
  var i819 = data
  i818.enabled = !!i819[0]
  i818.rateOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i819[1], i818.rateOverTime)
  i818.rateOverDistance = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i819[2], i818.rateOverDistance)
  var i821 = i819[3]
  var i820 = []
  for(var i = 0; i < i821.length; i += 1) {
    i820.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst', i821[i + 0]) );
  }
  i818.bursts = i820
  return i818
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst"] = function (request, data, root) {
  var i824 = root || new pc.ParticleSystemBurst()
  var i825 = data
  i824.count = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i825[0], i824.count)
  i824.cycleCount = i825[1]
  i824.minCount = i825[2]
  i824.maxCount = i825[3]
  i824.repeatInterval = i825[4]
  i824.time = i825[5]
  return i824
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule"] = function (request, data, root) {
  var i826 = root || new pc.ParticleSystemRotationBySpeed()
  var i827 = data
  i826.enabled = !!i827[0]
  i826.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i827[1], i826.x)
  i826.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i827[2], i826.y)
  i826.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i827[3], i826.z)
  i826.separateAxes = !!i827[4]
  i826.range = new pc.Vec2( i827[5], i827[6] )
  return i826
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule"] = function (request, data, root) {
  var i828 = root || new pc.ParticleSystemRotationOverLifetime()
  var i829 = data
  i828.enabled = !!i829[0]
  i828.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i829[1], i828.x)
  i828.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i829[2], i828.y)
  i828.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i829[3], i828.z)
  i828.separateAxes = !!i829[4]
  return i828
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule"] = function (request, data, root) {
  var i830 = root || new pc.ParticleSystemShape()
  var i831 = data
  i830.enabled = !!i831[0]
  i830.shapeType = i831[1]
  i830.randomDirectionAmount = i831[2]
  i830.sphericalDirectionAmount = i831[3]
  i830.randomPositionAmount = i831[4]
  i830.alignToDirection = !!i831[5]
  i830.radius = i831[6]
  i830.radiusMode = i831[7]
  i830.radiusSpread = i831[8]
  i830.radiusSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i831[9], i830.radiusSpeed)
  i830.radiusThickness = i831[10]
  i830.angle = i831[11]
  i830.length = i831[12]
  i830.boxThickness = new pc.Vec3( i831[13], i831[14], i831[15] )
  i830.meshShapeType = i831[16]
  request.r(i831[17], i831[18], 0, i830, 'mesh')
  request.r(i831[19], i831[20], 0, i830, 'meshRenderer')
  request.r(i831[21], i831[22], 0, i830, 'skinnedMeshRenderer')
  i830.useMeshMaterialIndex = !!i831[23]
  i830.meshMaterialIndex = i831[24]
  i830.useMeshColors = !!i831[25]
  i830.normalOffset = i831[26]
  i830.arc = i831[27]
  i830.arcMode = i831[28]
  i830.arcSpread = i831[29]
  i830.arcSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i831[30], i830.arcSpeed)
  i830.donutRadius = i831[31]
  i830.position = new pc.Vec3( i831[32], i831[33], i831[34] )
  i830.rotation = new pc.Vec3( i831[35], i831[36], i831[37] )
  i830.scale = new pc.Vec3( i831[38], i831[39], i831[40] )
  return i830
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule"] = function (request, data, root) {
  var i832 = root || new pc.ParticleSystemSizeBySpeed()
  var i833 = data
  i832.enabled = !!i833[0]
  i832.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i833[1], i832.x)
  i832.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i833[2], i832.y)
  i832.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i833[3], i832.z)
  i832.separateAxes = !!i833[4]
  i832.range = new pc.Vec2( i833[5], i833[6] )
  return i832
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule"] = function (request, data, root) {
  var i834 = root || new pc.ParticleSystemSizeOverLifetime()
  var i835 = data
  i834.enabled = !!i835[0]
  i834.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i835[1], i834.x)
  i834.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i835[2], i834.y)
  i834.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i835[3], i834.z)
  i834.separateAxes = !!i835[4]
  return i834
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule"] = function (request, data, root) {
  var i836 = root || new pc.ParticleSystemTextureSheetAnimation()
  var i837 = data
  i836.enabled = !!i837[0]
  i836.mode = i837[1]
  i836.animation = i837[2]
  i836.numTilesX = i837[3]
  i836.numTilesY = i837[4]
  i836.useRandomRow = !!i837[5]
  i836.frameOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i837[6], i836.frameOverTime)
  i836.startFrame = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i837[7], i836.startFrame)
  i836.cycleCount = i837[8]
  i836.rowIndex = i837[9]
  i836.flipU = i837[10]
  i836.flipV = i837[11]
  i836.spriteCount = i837[12]
  var i839 = i837[13]
  var i838 = []
  for(var i = 0; i < i839.length; i += 2) {
  request.r(i839[i + 0], i839[i + 1], 2, i838, '')
  }
  i836.sprites = i838
  return i836
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule"] = function (request, data, root) {
  var i842 = root || new pc.ParticleSystemVelocityOverLifetime()
  var i843 = data
  i842.enabled = !!i843[0]
  i842.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i843[1], i842.x)
  i842.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i843[2], i842.y)
  i842.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i843[3], i842.z)
  i842.radial = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i843[4], i842.radial)
  i842.speedModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i843[5], i842.speedModifier)
  i842.space = i843[6]
  i842.orbitalX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i843[7], i842.orbitalX)
  i842.orbitalY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i843[8], i842.orbitalY)
  i842.orbitalZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i843[9], i842.orbitalZ)
  i842.orbitalOffsetX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i843[10], i842.orbitalOffsetX)
  i842.orbitalOffsetY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i843[11], i842.orbitalOffsetY)
  i842.orbitalOffsetZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i843[12], i842.orbitalOffsetZ)
  return i842
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule"] = function (request, data, root) {
  var i844 = root || new pc.ParticleSystemNoise()
  var i845 = data
  i844.enabled = !!i845[0]
  i844.separateAxes = !!i845[1]
  i844.strengthX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i845[2], i844.strengthX)
  i844.strengthY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i845[3], i844.strengthY)
  i844.strengthZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i845[4], i844.strengthZ)
  i844.frequency = i845[5]
  i844.damping = !!i845[6]
  i844.octaveCount = i845[7]
  i844.octaveMultiplier = i845[8]
  i844.octaveScale = i845[9]
  i844.quality = i845[10]
  i844.scrollSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i845[11], i844.scrollSpeed)
  i844.scrollSpeedMultiplier = i845[12]
  i844.remapEnabled = !!i845[13]
  i844.remapX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i845[14], i844.remapX)
  i844.remapY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i845[15], i844.remapY)
  i844.remapZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i845[16], i844.remapZ)
  i844.positionAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i845[17], i844.positionAmount)
  i844.rotationAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i845[18], i844.rotationAmount)
  i844.sizeAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i845[19], i844.sizeAmount)
  return i844
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule"] = function (request, data, root) {
  var i846 = root || new pc.ParticleSystemInheritVelocity()
  var i847 = data
  i846.enabled = !!i847[0]
  i846.mode = i847[1]
  i846.curve = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i847[2], i846.curve)
  return i846
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule"] = function (request, data, root) {
  var i848 = root || new pc.ParticleSystemForceOverLifetime()
  var i849 = data
  i848.enabled = !!i849[0]
  i848.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i849[1], i848.x)
  i848.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i849[2], i848.y)
  i848.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i849[3], i848.z)
  i848.space = i849[4]
  i848.randomized = !!i849[5]
  return i848
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule"] = function (request, data, root) {
  var i850 = root || new pc.ParticleSystemLimitVelocityOverLifetime()
  var i851 = data
  i850.enabled = !!i851[0]
  i850.limit = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i851[1], i850.limit)
  i850.limitX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i851[2], i850.limitX)
  i850.limitY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i851[3], i850.limitY)
  i850.limitZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i851[4], i850.limitZ)
  i850.dampen = i851[5]
  i850.separateAxes = !!i851[6]
  i850.space = i851[7]
  i850.drag = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i851[8], i850.drag)
  i850.multiplyDragByParticleSize = !!i851[9]
  i850.multiplyDragByParticleVelocity = !!i851[10]
  return i850
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer"] = function (request, data, root) {
  var i852 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer' )
  var i853 = data
  request.r(i853[0], i853[1], 0, i852, 'mesh')
  i852.meshCount = i853[2]
  i852.activeVertexStreamsCount = i853[3]
  i852.alignment = i853[4]
  i852.renderMode = i853[5]
  i852.sortMode = i853[6]
  i852.lengthScale = i853[7]
  i852.velocityScale = i853[8]
  i852.cameraVelocityScale = i853[9]
  i852.normalDirection = i853[10]
  i852.sortingFudge = i853[11]
  i852.minParticleSize = i853[12]
  i852.maxParticleSize = i853[13]
  i852.pivot = new pc.Vec3( i853[14], i853[15], i853[16] )
  request.r(i853[17], i853[18], 0, i852, 'trailMaterial')
  i852.applyActiveColorSpace = !!i853[19]
  i852.enabled = !!i853[20]
  request.r(i853[21], i853[22], 0, i852, 'sharedMaterial')
  var i855 = i853[23]
  var i854 = []
  for(var i = 0; i < i855.length; i += 2) {
  request.r(i855[i + 0], i855[i + 1], 2, i854, '')
  }
  i852.sharedMaterials = i854
  i852.receiveShadows = !!i853[24]
  i852.shadowCastingMode = i853[25]
  i852.sortingLayerID = i853[26]
  i852.sortingOrder = i853[27]
  i852.lightmapIndex = i853[28]
  i852.lightmapSceneIndex = i853[29]
  i852.lightmapScaleOffset = new pc.Vec4( i853[30], i853[31], i853[32], i853[33] )
  i852.lightProbeUsage = i853[34]
  i852.reflectionProbeUsage = i853[35]
  return i852
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D"] = function (request, data, root) {
  var i856 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D' )
  var i857 = data
  i856.bodyType = i857[0]
  request.r(i857[1], i857[2], 0, i856, 'material')
  i856.simulated = !!i857[3]
  i856.useAutoMass = !!i857[4]
  i856.mass = i857[5]
  i856.drag = i857[6]
  i856.angularDrag = i857[7]
  i856.gravityScale = i857[8]
  i856.collisionDetectionMode = i857[9]
  i856.sleepMode = i857[10]
  i856.constraints = i857[11]
  return i856
}

Deserializers["UnityEngine.U2D.Animation.SpriteSkin"] = function (request, data, root) {
  var i858 = root || request.c( 'UnityEngine.U2D.Animation.SpriteSkin' )
  var i859 = data
  request.r(i859[0], i859[1], 0, i858, 'm_RootBone')
  var i861 = i859[2]
  var i860 = []
  for(var i = 0; i < i861.length; i += 2) {
  request.r(i861[i + 0], i861[i + 1], 2, i860, '')
  }
  i858.m_BoneTransforms = i860
  i858.m_AlwaysUpdate = !!i859[3]
  i858.m_AutoRebind = !!i859[4]
  return i858
}

Deserializers["BD_SpriteChange"] = function (request, data, root) {
  var i862 = root || request.c( 'BD_SpriteChange' )
  var i863 = data
  request.r(i863[0], i863[1], 0, i862, 'BD')
  request.r(i863[2], i863[3], 0, i862, 'SR')
  request.r(i863[4], i863[5], 0, i862, 'Default')
  request.r(i863[6], i863[7], 0, i862, 'Picked')
  i862.resetOnRelease = !!i863[8]
  return i862
}

Deserializers["InteractableBones"] = function (request, data, root) {
  var i864 = root || request.c( 'InteractableBones' )
  var i865 = data
  request.r(i865[0], i865[1], 0, i864, 'Tip')
  i864.MoveAmount = i865[2]
  i864.MoveSpeed = i865[3]
  i864.ShakeSpeed = i865[4]
  i864.MovementThreshold = i865[5]
  i864.MoveX = !!i865[6]
  i864.MoveY = !!i865[7]
  return i864
}

Deserializers["ActionOnTap"] = function (request, data, root) {
  var i866 = root || request.c( 'ActionOnTap' )
  var i867 = data
  i866.OnTap = request.d('UnityEngine.Events.UnityEvent', i867[0], i866.OnTap)
  return i866
}

Deserializers["DG.Tweening.DOTweenAnimation"] = function (request, data, root) {
  var i868 = root || request.c( 'DG.Tweening.DOTweenAnimation' )
  var i869 = data
  i868.targetIsSelf = !!i869[0]
  request.r(i869[1], i869[2], 0, i868, 'targetGO')
  i868.tweenTargetIsTargetGO = !!i869[3]
  i868.delay = i869[4]
  i868.duration = i869[5]
  i868.easeType = i869[6]
  i868.easeCurve = new pc.AnimationCurve( { keys_flow: i869[7] } )
  i868.loopType = i869[8]
  i868.loops = i869[9]
  i868.id = i869[10]
  i868.isRelative = !!i869[11]
  i868.isFrom = !!i869[12]
  i868.isIndependentUpdate = !!i869[13]
  i868.autoKill = !!i869[14]
  i868.autoGenerate = !!i869[15]
  i868.isActive = !!i869[16]
  i868.isValid = !!i869[17]
  request.r(i869[18], i869[19], 0, i868, 'target')
  i868.animationType = i869[20]
  i868.targetType = i869[21]
  i868.forcedTargetType = i869[22]
  i868.autoPlay = !!i869[23]
  i868.useTargetAsV3 = !!i869[24]
  i868.endValueFloat = i869[25]
  i868.endValueV3 = new pc.Vec3( i869[26], i869[27], i869[28] )
  i868.endValueV2 = new pc.Vec2( i869[29], i869[30] )
  i868.endValueColor = new pc.Color(i869[31], i869[32], i869[33], i869[34])
  i868.endValueString = i869[35]
  i868.endValueRect = UnityEngine.Rect.MinMaxRect(i869[36], i869[37], i869[38], i869[39])
  request.r(i869[40], i869[41], 0, i868, 'endValueTransform')
  i868.optionalBool0 = !!i869[42]
  i868.optionalBool1 = !!i869[43]
  i868.optionalFloat0 = i869[44]
  i868.optionalInt0 = i869[45]
  i868.optionalRotationMode = i869[46]
  i868.optionalScrambleMode = i869[47]
  i868.optionalShakeRandomnessMode = i869[48]
  i868.optionalString = i869[49]
  i868.updateType = i869[50]
  i868.isSpeedBased = !!i869[51]
  i868.hasOnStart = !!i869[52]
  i868.hasOnPlay = !!i869[53]
  i868.hasOnUpdate = !!i869[54]
  i868.hasOnStepComplete = !!i869[55]
  i868.hasOnComplete = !!i869[56]
  i868.hasOnTweenCreated = !!i869[57]
  i868.hasOnRewind = !!i869[58]
  i868.onStart = request.d('UnityEngine.Events.UnityEvent', i869[59], i868.onStart)
  i868.onPlay = request.d('UnityEngine.Events.UnityEvent', i869[60], i868.onPlay)
  i868.onUpdate = request.d('UnityEngine.Events.UnityEvent', i869[61], i868.onUpdate)
  i868.onStepComplete = request.d('UnityEngine.Events.UnityEvent', i869[62], i868.onStepComplete)
  i868.onComplete = request.d('UnityEngine.Events.UnityEvent', i869[63], i868.onComplete)
  i868.onTweenCreated = request.d('UnityEngine.Events.UnityEvent', i869[64], i868.onTweenCreated)
  i868.onRewind = request.d('UnityEngine.Events.UnityEvent', i869[65], i868.onRewind)
  return i868
}

Deserializers["DestroyObj"] = function (request, data, root) {
  var i870 = root || request.c( 'DestroyObj' )
  var i871 = data
  i870.destroyDelay = i871[0]
  return i870
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Cubemap"] = function (request, data, root) {
  var i872 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Cubemap' )
  var i873 = data
  i872.name = i873[0]
  i872.atlasId = i873[1]
  i872.mipmapCount = i873[2]
  i872.hdr = !!i873[3]
  i872.size = i873[4]
  i872.anisoLevel = i873[5]
  i872.filterMode = i873[6]
  var i875 = i873[7]
  var i874 = []
  for(var i = 0; i < i875.length; i += 4) {
    i874.push( UnityEngine.Rect.MinMaxRect(i875[i + 0], i875[i + 1], i875[i + 2], i875[i + 3]) );
  }
  i872.rects = i874
  i872.wrapU = i873[8]
  i872.wrapV = i873[9]
  return i872
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i878 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i879 = data
  i878.name = i879[0]
  i878.index = i879[1]
  i878.startup = !!i879[2]
  return i878
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i880 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i881 = data
  i880.aspect = i881[0]
  i880.orthographic = !!i881[1]
  i880.orthographicSize = i881[2]
  i880.backgroundColor = new pc.Color(i881[3], i881[4], i881[5], i881[6])
  i880.nearClipPlane = i881[7]
  i880.farClipPlane = i881[8]
  i880.fieldOfView = i881[9]
  i880.depth = i881[10]
  i880.clearFlags = i881[11]
  i880.cullingMask = i881[12]
  i880.rect = i881[13]
  request.r(i881[14], i881[15], 0, i880, 'targetTexture')
  i880.usePhysicalProperties = !!i881[16]
  i880.focalLength = i881[17]
  i880.sensorSize = new pc.Vec2( i881[18], i881[19] )
  i880.lensShift = new pc.Vec2( i881[20], i881[21] )
  i880.gateFit = i881[22]
  i880.commandBufferCount = i881[23]
  i880.cameraType = i881[24]
  i880.enabled = !!i881[25]
  return i880
}

Deserializers["CameraController"] = function (request, data, root) {
  var i882 = root || request.c( 'CameraController' )
  var i883 = data
  request.r(i883[0], i883[1], 0, i882, 'cam')
  i882.defaultPosition = new pc.Vec3( i883[2], i883[3], i883[4] )
  i882.defaultSize = i883[5]
  i882.defaultFOV = i883[6]
  i882.defaultDuration = i883[7]
  i882.defaultEase = i883[8]
  return i882
}

Deserializers["MusicSource"] = function (request, data, root) {
  var i884 = root || request.c( 'MusicSource' )
  var i885 = data
  request.r(i885[0], i885[1], 0, i884, 'source')
  return i884
}

Deserializers["UI_Manager"] = function (request, data, root) {
  var i886 = root || request.c( 'UI_Manager' )
  var i887 = data
  i886.levelCompleted = !!i887[0]
  i886.isPauseActive = !!i887[1]
  i886.loadIndex = i887[2]
  request.r(i887[3], i887[4], 0, i886, 'removeAdsButton')
  request.r(i887[5], i887[6], 0, i886, 'pauseButton')
  request.r(i887[7], i887[8], 0, i886, 'Fade_Img')
  request.r(i887[9], i887[10], 0, i886, 'TopBarAnim')
  request.r(i887[11], i887[12], 0, i886, 'MainPanel')
  request.r(i887[13], i887[14], 0, i886, 'PausePanel')
  request.r(i887[15], i887[16], 0, i886, 'PausePopUp')
  request.r(i887[17], i887[18], 0, i886, 'PauseCanvasGroup')
  request.r(i887[19], i887[20], 0, i886, 'RateUsPanel')
  request.r(i887[21], i887[22], 0, i886, 'RateUsPopUp')
  request.r(i887[23], i887[24], 0, i886, 'RemoveAdsPanel')
  request.r(i887[25], i887[26], 0, i886, 'RemoveAdsPopUp')
  request.r(i887[27], i887[28], 0, i886, 'RemoveAdsCanvasGroup')
  var i889 = i887[29]
  var i888 = []
  for(var i = 0; i < i889.length; i += 2) {
  request.r(i889[i + 0], i889[i + 1], 2, i888, '')
  }
  i886.RemoveAdsAnims = i888
  request.r(i887[30], i887[31], 0, i886, 'CompletePanel')
  request.r(i887[32], i887[33], 0, i886, 'LevelIcon')
  request.r(i887[34], i887[35], 0, i886, 'CompleteParticles')
  request.r(i887[36], i887[37], 0, i886, 'progressBar')
  request.r(i887[38], i887[39], 0, i886, 'progressText')
  request.r(i887[40], i887[41], 0, i886, 'toolIcon1')
  request.r(i887[42], i887[43], 0, i886, 'toolIcon2')
  request.r(i887[44], i887[45], 0, i886, 'toolIcon3')
  request.r(i887[46], i887[47], 0, i886, 'target1')
  request.r(i887[48], i887[49], 0, i886, 'target2')
  i886.toolMoveDuration = i887[50]
  i886.currentIndex = i887[51]
  var i891 = i887[52]
  var i890 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Sprite')))
  for(var i = 0; i < i891.length; i += 2) {
  request.r(i891[i + 0], i891[i + 1], 1, i890, '')
  }
  i886.allTools = i890
  request.r(i887[53], i887[54], 0, i886, 'clockProgress')
  request.r(i887[55], i887[56], 0, i886, 'clockProgressFill')
  request.r(i887[57], i887[58], 0, i886, 'clockAudio')
  i886.moveDistance = i887[59]
  i886.animationDuration = i887[60]
  i886.greyBgChildName = i887[61]
  i886.pushOffset = i887[62]
  return i886
}

Deserializers["GameManagerPlayable"] = function (request, data, root) {
  var i894 = root || request.c( 'GameManagerPlayable' )
  var i895 = data
  request.r(i895[0], i895[1], 0, i894, 'DefaultMat')
  request.r(i895[2], i895[3], 0, i894, 'BG_Music')
  request.r(i895[4], i895[5], 0, i894, 'restoreEffectShader')
  request.r(i895[6], i895[7], 0, i894, 'stickerEffectShader')
  i894.isComplete = !!i895[8]
  i894.isPaused = !!i895[9]
  request.r(i895[10], i895[11], 0, i894, 'currentLevel')
  return i894
}

Deserializers["AudioController"] = function (request, data, root) {
  var i896 = root || request.c( 'AudioController' )
  var i897 = data
  request.r(i897[0], i897[1], 0, i896, 'MainMixer')
  request.r(i897[2], i897[3], 0, i896, 'UiClick')
  request.r(i897[4], i897[5], 0, i896, 'UiClickSource')
  var i899 = i897[6]
  var i898 = []
  for(var i = 0; i < i899.length; i += 2) {
  request.r(i899[i + 0], i899[i + 1], 2, i898, '')
  }
  i896.SfxSources = i898
  var i901 = i897[7]
  var i900 = []
  for(var i = 0; i < i901.length; i += 2) {
  request.r(i901[i + 0], i901[i + 1], 2, i900, '')
  }
  i896.AllClips = i900
  return i896
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i904 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i905 = data
  i904.pivot = new pc.Vec2( i905[0], i905[1] )
  i904.anchorMin = new pc.Vec2( i905[2], i905[3] )
  i904.anchorMax = new pc.Vec2( i905[4], i905[5] )
  i904.sizeDelta = new pc.Vec2( i905[6], i905[7] )
  i904.anchoredPosition3D = new pc.Vec3( i905[8], i905[9], i905[10] )
  i904.rotation = new pc.Quat(i905[11], i905[12], i905[13], i905[14])
  i904.scale = new pc.Vec3( i905[15], i905[16], i905[17] )
  return i904
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i906 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i907 = data
  i906.planeDistance = i907[0]
  i906.referencePixelsPerUnit = i907[1]
  i906.isFallbackOverlay = !!i907[2]
  i906.renderMode = i907[3]
  i906.renderOrder = i907[4]
  i906.sortingLayerName = i907[5]
  i906.sortingOrder = i907[6]
  i906.scaleFactor = i907[7]
  request.r(i907[8], i907[9], 0, i906, 'worldCamera')
  i906.overrideSorting = !!i907[10]
  i906.pixelPerfect = !!i907[11]
  i906.targetDisplay = i907[12]
  i906.overridePixelPerfect = !!i907[13]
  i906.enabled = !!i907[14]
  return i906
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i908 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i909 = data
  i908.m_UiScaleMode = i909[0]
  i908.m_ReferencePixelsPerUnit = i909[1]
  i908.m_ScaleFactor = i909[2]
  i908.m_ReferenceResolution = new pc.Vec2( i909[3], i909[4] )
  i908.m_ScreenMatchMode = i909[5]
  i908.m_MatchWidthOrHeight = i909[6]
  i908.m_PhysicalUnit = i909[7]
  i908.m_FallbackScreenDPI = i909[8]
  i908.m_DefaultSpriteDPI = i909[9]
  i908.m_DynamicPixelsPerUnit = i909[10]
  i908.m_PresetInfoIsWorld = !!i909[11]
  return i908
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i910 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i911 = data
  i910.m_IgnoreReversedGraphics = !!i911[0]
  i910.m_BlockingObjects = i911[1]
  i910.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i911[2] )
  return i910
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i912 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i913 = data
  i912.cullTransparentMesh = !!i913[0]
  return i912
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i914 = root || request.c( 'UnityEngine.UI.Image' )
  var i915 = data
  request.r(i915[0], i915[1], 0, i914, 'm_Sprite')
  i914.m_Type = i915[2]
  i914.m_PreserveAspect = !!i915[3]
  i914.m_FillCenter = !!i915[4]
  i914.m_FillMethod = i915[5]
  i914.m_FillAmount = i915[6]
  i914.m_FillClockwise = !!i915[7]
  i914.m_FillOrigin = i915[8]
  i914.m_UseSpriteMesh = !!i915[9]
  i914.m_PixelsPerUnitMultiplier = i915[10]
  request.r(i915[11], i915[12], 0, i914, 'm_Material')
  i914.m_Maskable = !!i915[13]
  i914.m_Color = new pc.Color(i915[14], i915[15], i915[16], i915[17])
  i914.m_RaycastTarget = !!i915[18]
  i914.m_RaycastPadding = new pc.Vec4( i915[19], i915[20], i915[21], i915[22] )
  return i914
}

Deserializers["UnityEngine.UI.Text"] = function (request, data, root) {
  var i916 = root || request.c( 'UnityEngine.UI.Text' )
  var i917 = data
  i916.m_FontData = request.d('UnityEngine.UI.FontData', i917[0], i916.m_FontData)
  i916.m_Text = i917[1]
  request.r(i917[2], i917[3], 0, i916, 'm_Material')
  i916.m_Maskable = !!i917[4]
  i916.m_Color = new pc.Color(i917[5], i917[6], i917[7], i917[8])
  i916.m_RaycastTarget = !!i917[9]
  i916.m_RaycastPadding = new pc.Vec4( i917[10], i917[11], i917[12], i917[13] )
  return i916
}

Deserializers["UnityEngine.UI.FontData"] = function (request, data, root) {
  var i918 = root || request.c( 'UnityEngine.UI.FontData' )
  var i919 = data
  request.r(i919[0], i919[1], 0, i918, 'm_Font')
  i918.m_FontSize = i919[2]
  i918.m_FontStyle = i919[3]
  i918.m_BestFit = !!i919[4]
  i918.m_MinSize = i919[5]
  i918.m_MaxSize = i919[6]
  i918.m_Alignment = i919[7]
  i918.m_AlignByGeometry = !!i919[8]
  i918.m_RichText = !!i919[9]
  i918.m_HorizontalOverflow = i919[10]
  i918.m_VerticalOverflow = i919[11]
  i918.m_LineSpacing = i919[12]
  return i918
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i920 = root || request.c( 'UnityEngine.UI.Button' )
  var i921 = data
  i920.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i921[0], i920.m_OnClick)
  i920.m_Navigation = request.d('UnityEngine.UI.Navigation', i921[1], i920.m_Navigation)
  i920.m_Transition = i921[2]
  i920.m_Colors = request.d('UnityEngine.UI.ColorBlock', i921[3], i920.m_Colors)
  i920.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i921[4], i920.m_SpriteState)
  i920.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i921[5], i920.m_AnimationTriggers)
  i920.m_Interactable = !!i921[6]
  request.r(i921[7], i921[8], 0, i920, 'm_TargetGraphic')
  return i920
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i922 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i923 = data
  i922.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i923[0], i922.m_PersistentCalls)
  return i922
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i924 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i925 = data
  i924.m_Mode = i925[0]
  i924.m_WrapAround = !!i925[1]
  request.r(i925[2], i925[3], 0, i924, 'm_SelectOnUp')
  request.r(i925[4], i925[5], 0, i924, 'm_SelectOnDown')
  request.r(i925[6], i925[7], 0, i924, 'm_SelectOnLeft')
  request.r(i925[8], i925[9], 0, i924, 'm_SelectOnRight')
  return i924
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i926 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i927 = data
  i926.m_NormalColor = new pc.Color(i927[0], i927[1], i927[2], i927[3])
  i926.m_HighlightedColor = new pc.Color(i927[4], i927[5], i927[6], i927[7])
  i926.m_PressedColor = new pc.Color(i927[8], i927[9], i927[10], i927[11])
  i926.m_SelectedColor = new pc.Color(i927[12], i927[13], i927[14], i927[15])
  i926.m_DisabledColor = new pc.Color(i927[16], i927[17], i927[18], i927[19])
  i926.m_ColorMultiplier = i927[20]
  i926.m_FadeDuration = i927[21]
  return i926
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i928 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i929 = data
  request.r(i929[0], i929[1], 0, i928, 'm_HighlightedSprite')
  request.r(i929[2], i929[3], 0, i928, 'm_PressedSprite')
  request.r(i929[4], i929[5], 0, i928, 'm_SelectedSprite')
  request.r(i929[6], i929[7], 0, i928, 'm_DisabledSprite')
  return i928
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i930 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i931 = data
  i930.m_NormalTrigger = i931[0]
  i930.m_HighlightedTrigger = i931[1]
  i930.m_PressedTrigger = i931[2]
  i930.m_SelectedTrigger = i931[3]
  i930.m_DisabledTrigger = i931[4]
  return i930
}

Deserializers["PlayableHudRuntime"] = function (request, data, root) {
  var i932 = root || request.c( 'PlayableHudRuntime' )
  var i933 = data
  return i932
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i934 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i935 = data
  request.r(i935[0], i935[1], 0, i934, 'm_FirstSelected')
  i934.m_sendNavigationEvents = !!i935[2]
  i934.m_DragThreshold = i935[3]
  return i934
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i936 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i937 = data
  i936.m_HorizontalAxis = i937[0]
  i936.m_VerticalAxis = i937[1]
  i936.m_SubmitButton = i937[2]
  i936.m_CancelButton = i937[3]
  i936.m_InputActionsPerSecond = i937[4]
  i936.m_RepeatDelay = i937[5]
  i936.m_ForceModuleActive = !!i937[6]
  i936.m_SendPointerHoverToParent = !!i937[7]
  return i936
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i938 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i939 = data
  i938.ambientIntensity = i939[0]
  i938.reflectionIntensity = i939[1]
  i938.ambientMode = i939[2]
  i938.ambientLight = new pc.Color(i939[3], i939[4], i939[5], i939[6])
  i938.ambientSkyColor = new pc.Color(i939[7], i939[8], i939[9], i939[10])
  i938.ambientGroundColor = new pc.Color(i939[11], i939[12], i939[13], i939[14])
  i938.ambientEquatorColor = new pc.Color(i939[15], i939[16], i939[17], i939[18])
  i938.fogColor = new pc.Color(i939[19], i939[20], i939[21], i939[22])
  i938.fogEndDistance = i939[23]
  i938.fogStartDistance = i939[24]
  i938.fogDensity = i939[25]
  i938.fog = !!i939[26]
  request.r(i939[27], i939[28], 0, i938, 'skybox')
  i938.fogMode = i939[29]
  var i941 = i939[30]
  var i940 = []
  for(var i = 0; i < i941.length; i += 1) {
    i940.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i941[i + 0]) );
  }
  i938.lightmaps = i940
  i938.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i939[31], i938.lightProbes)
  i938.lightmapsMode = i939[32]
  i938.mixedBakeMode = i939[33]
  i938.environmentLightingMode = i939[34]
  i938.ambientProbe = new pc.SphericalHarmonicsL2(i939[35])
  request.r(i939[36], i939[37], 0, i938, 'customReflection')
  request.r(i939[38], i939[39], 0, i938, 'defaultReflection')
  i938.defaultReflectionMode = i939[40]
  i938.defaultReflectionResolution = i939[41]
  i938.sunLightObjectId = i939[42]
  i938.pixelLightCount = i939[43]
  i938.defaultReflectionHDR = !!i939[44]
  i938.hasLightDataAsset = !!i939[45]
  i938.hasManualGenerate = !!i939[46]
  return i938
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i944 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i945 = data
  request.r(i945[0], i945[1], 0, i944, 'lightmapColor')
  request.r(i945[2], i945[3], 0, i944, 'lightmapDirection')
  request.r(i945[4], i945[5], 0, i944, 'shadowMask')
  return i944
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i946 = root || new UnityEngine.LightProbes()
  var i947 = data
  return i946
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i954 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i955 = data
  var i957 = i955[0]
  var i956 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i957.length; i += 1) {
    i956.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i957[i + 0]));
  }
  i954.ShaderCompilationErrors = i956
  i954.name = i955[1]
  i954.guid = i955[2]
  var i959 = i955[3]
  var i958 = []
  for(var i = 0; i < i959.length; i += 1) {
    i958.push( i959[i + 0] );
  }
  i954.shaderDefinedKeywords = i958
  var i961 = i955[4]
  var i960 = []
  for(var i = 0; i < i961.length; i += 1) {
    i960.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i961[i + 0]) );
  }
  i954.passes = i960
  var i963 = i955[5]
  var i962 = []
  for(var i = 0; i < i963.length; i += 1) {
    i962.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i963[i + 0]) );
  }
  i954.usePasses = i962
  var i965 = i955[6]
  var i964 = []
  for(var i = 0; i < i965.length; i += 1) {
    i964.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i965[i + 0]) );
  }
  i954.defaultParameterValues = i964
  request.r(i955[7], i955[8], 0, i954, 'unityFallbackShader')
  i954.readDepth = !!i955[9]
  i954.hasDepthOnlyPass = !!i955[10]
  i954.isCreatedByShaderGraph = !!i955[11]
  i954.disableBatching = !!i955[12]
  i954.compiled = !!i955[13]
  return i954
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i968 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i969 = data
  i968.shaderName = i969[0]
  i968.errorMessage = i969[1]
  return i968
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i974 = root || new pc.UnityShaderPass()
  var i975 = data
  i974.id = i975[0]
  i974.subShaderIndex = i975[1]
  i974.name = i975[2]
  i974.passType = i975[3]
  i974.grabPassTextureName = i975[4]
  i974.usePass = !!i975[5]
  i974.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i975[6], i974.zTest)
  i974.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i975[7], i974.zWrite)
  i974.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i975[8], i974.culling)
  i974.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i975[9], i974.blending)
  i974.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i975[10], i974.alphaBlending)
  i974.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i975[11], i974.colorWriteMask)
  i974.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i975[12], i974.offsetUnits)
  i974.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i975[13], i974.offsetFactor)
  i974.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i975[14], i974.stencilRef)
  i974.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i975[15], i974.stencilReadMask)
  i974.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i975[16], i974.stencilWriteMask)
  i974.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i975[17], i974.stencilOp)
  i974.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i975[18], i974.stencilOpFront)
  i974.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i975[19], i974.stencilOpBack)
  var i977 = i975[20]
  var i976 = []
  for(var i = 0; i < i977.length; i += 1) {
    i976.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i977[i + 0]) );
  }
  i974.tags = i976
  var i979 = i975[21]
  var i978 = []
  for(var i = 0; i < i979.length; i += 1) {
    i978.push( i979[i + 0] );
  }
  i974.passDefinedKeywords = i978
  var i981 = i975[22]
  var i980 = []
  for(var i = 0; i < i981.length; i += 1) {
    i980.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i981[i + 0]) );
  }
  i974.passDefinedKeywordGroups = i980
  var i983 = i975[23]
  var i982 = []
  for(var i = 0; i < i983.length; i += 1) {
    i982.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i983[i + 0]) );
  }
  i974.variants = i982
  var i985 = i975[24]
  var i984 = []
  for(var i = 0; i < i985.length; i += 1) {
    i984.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i985[i + 0]) );
  }
  i974.excludedVariants = i984
  i974.hasDepthReader = !!i975[25]
  return i974
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i986 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i987 = data
  i986.val = i987[0]
  i986.name = i987[1]
  return i986
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i988 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i989 = data
  i988.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i989[0], i988.src)
  i988.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i989[1], i988.dst)
  i988.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i989[2], i988.op)
  return i988
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i990 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i991 = data
  i990.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i991[0], i990.pass)
  i990.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i991[1], i990.fail)
  i990.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i991[2], i990.zFail)
  i990.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i991[3], i990.comp)
  return i990
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i994 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i995 = data
  i994.name = i995[0]
  i994.value = i995[1]
  return i994
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i998 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i999 = data
  var i1001 = i999[0]
  var i1000 = []
  for(var i = 0; i < i1001.length; i += 1) {
    i1000.push( i1001[i + 0] );
  }
  i998.keywords = i1000
  i998.hasDiscard = !!i999[1]
  return i998
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i1004 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i1005 = data
  i1004.passId = i1005[0]
  i1004.subShaderIndex = i1005[1]
  var i1007 = i1005[2]
  var i1006 = []
  for(var i = 0; i < i1007.length; i += 1) {
    i1006.push( i1007[i + 0] );
  }
  i1004.keywords = i1006
  i1004.vertexProgram = i1005[3]
  i1004.fragmentProgram = i1005[4]
  i1004.exportedForWebGl2 = !!i1005[5]
  i1004.readDepth = !!i1005[6]
  return i1004
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i1010 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i1011 = data
  request.r(i1011[0], i1011[1], 0, i1010, 'shader')
  i1010.pass = i1011[2]
  return i1010
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i1014 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i1015 = data
  i1014.name = i1015[0]
  i1014.type = i1015[1]
  i1014.value = new pc.Vec4( i1015[2], i1015[3], i1015[4], i1015[5] )
  i1014.textureValue = i1015[6]
  i1014.shaderPropertyFlag = i1015[7]
  return i1014
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i1016 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i1017 = data
  i1016.name = i1017[0]
  request.r(i1017[1], i1017[2], 0, i1016, 'texture')
  i1016.aabb = i1017[3]
  i1016.vertices = i1017[4]
  i1016.triangles = i1017[5]
  i1016.textureRect = UnityEngine.Rect.MinMaxRect(i1017[6], i1017[7], i1017[8], i1017[9])
  i1016.packedRect = UnityEngine.Rect.MinMaxRect(i1017[10], i1017[11], i1017[12], i1017[13])
  i1016.border = new pc.Vec4( i1017[14], i1017[15], i1017[16], i1017[17] )
  i1016.transparency = i1017[18]
  i1016.bounds = i1017[19]
  i1016.pixelsPerUnit = i1017[20]
  i1016.textureWidth = i1017[21]
  i1016.textureHeight = i1017[22]
  i1016.nativeSize = new pc.Vec2( i1017[23], i1017[24] )
  i1016.pivot = new pc.Vec2( i1017[25], i1017[26] )
  i1016.textureRectOffset = new pc.Vec2( i1017[27], i1017[28] )
  return i1016
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i1018 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i1019 = data
  i1018.name = i1019[0]
  return i1018
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip"] = function (request, data, root) {
  var i1020 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip' )
  var i1021 = data
  i1020.name = i1021[0]
  i1020.wrapMode = i1021[1]
  i1020.isLooping = !!i1021[2]
  i1020.length = i1021[3]
  var i1023 = i1021[4]
  var i1022 = []
  for(var i = 0; i < i1023.length; i += 1) {
    i1022.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve', i1023[i + 0]) );
  }
  i1020.curves = i1022
  var i1025 = i1021[5]
  var i1024 = []
  for(var i = 0; i < i1025.length; i += 1) {
    i1024.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent', i1025[i + 0]) );
  }
  i1020.events = i1024
  i1020.halfPrecision = !!i1021[6]
  i1020._frameRate = i1021[7]
  i1020.localBounds = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds', i1021[8], i1020.localBounds)
  i1020.hasMuscleCurves = !!i1021[9]
  var i1027 = i1021[10]
  var i1026 = []
  for(var i = 0; i < i1027.length; i += 1) {
    i1026.push( i1027[i + 0] );
  }
  i1020.clipMuscleConstant = i1026
  i1020.clipBindingConstant = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant', i1021[11], i1020.clipBindingConstant)
  return i1020
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve"] = function (request, data, root) {
  var i1030 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve' )
  var i1031 = data
  i1030.path = i1031[0]
  i1030.hash = i1031[1]
  i1030.componentType = i1031[2]
  i1030.property = i1031[3]
  i1030.keys = i1031[4]
  var i1033 = i1031[5]
  var i1032 = []
  for(var i = 0; i < i1033.length; i += 1) {
    i1032.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey', i1033[i + 0]) );
  }
  i1030.objectReferenceKeys = i1032
  return i1030
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey"] = function (request, data, root) {
  var i1036 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey' )
  var i1037 = data
  i1036.time = i1037[0]
  request.r(i1037[1], i1037[2], 0, i1036, 'value')
  return i1036
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent"] = function (request, data, root) {
  var i1040 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent' )
  var i1041 = data
  i1040.functionName = i1041[0]
  i1040.floatParameter = i1041[1]
  i1040.intParameter = i1041[2]
  i1040.stringParameter = i1041[3]
  request.r(i1041[4], i1041[5], 0, i1040, 'objectReferenceParameter')
  i1040.time = i1041[6]
  return i1040
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds"] = function (request, data, root) {
  var i1042 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds' )
  var i1043 = data
  i1042.center = new pc.Vec3( i1043[0], i1043[1], i1043[2] )
  i1042.extends = new pc.Vec3( i1043[3], i1043[4], i1043[5] )
  return i1042
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant"] = function (request, data, root) {
  var i1046 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant' )
  var i1047 = data
  var i1049 = i1047[0]
  var i1048 = []
  for(var i = 0; i < i1049.length; i += 1) {
    i1048.push( i1049[i + 0] );
  }
  i1046.genericBindings = i1048
  var i1051 = i1047[1]
  var i1050 = []
  for(var i = 0; i < i1051.length; i += 1) {
    i1050.push( i1051[i + 0] );
  }
  i1046.pptrCurveMapping = i1050
  return i1046
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i1052 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i1053 = data
  i1052.name = i1053[0]
  i1052.ascent = i1053[1]
  i1052.originalLineHeight = i1053[2]
  i1052.fontSize = i1053[3]
  var i1055 = i1053[4]
  var i1054 = []
  for(var i = 0; i < i1055.length; i += 1) {
    i1054.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i1055[i + 0]) );
  }
  i1052.characterInfo = i1054
  request.r(i1053[5], i1053[6], 0, i1052, 'texture')
  i1052.originalFontSize = i1053[7]
  return i1052
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i1058 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i1059 = data
  i1058.index = i1059[0]
  i1058.advance = i1059[1]
  i1058.bearing = i1059[2]
  i1058.glyphWidth = i1059[3]
  i1058.glyphHeight = i1059[4]
  i1058.minX = i1059[5]
  i1058.maxX = i1059[6]
  i1058.minY = i1059[7]
  i1058.maxY = i1059[8]
  i1058.uvBottomLeftX = i1059[9]
  i1058.uvBottomLeftY = i1059[10]
  i1058.uvBottomRightX = i1059[11]
  i1058.uvBottomRightY = i1059[12]
  i1058.uvTopLeftX = i1059[13]
  i1058.uvTopLeftY = i1059[14]
  i1058.uvTopRightX = i1059[15]
  i1058.uvTopRightY = i1059[16]
  return i1058
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController"] = function (request, data, root) {
  var i1060 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController' )
  var i1061 = data
  i1060.name = i1061[0]
  var i1063 = i1061[1]
  var i1062 = []
  for(var i = 0; i < i1063.length; i += 1) {
    i1062.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer', i1063[i + 0]) );
  }
  i1060.layers = i1062
  var i1065 = i1061[2]
  var i1064 = []
  for(var i = 0; i < i1065.length; i += 1) {
    i1064.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter', i1065[i + 0]) );
  }
  i1060.parameters = i1064
  i1060.animationClips = i1061[3]
  i1060.avatarUnsupported = i1061[4]
  return i1060
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer"] = function (request, data, root) {
  var i1068 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer' )
  var i1069 = data
  i1068.name = i1069[0]
  i1068.defaultWeight = i1069[1]
  i1068.blendingMode = i1069[2]
  i1068.avatarMask = i1069[3]
  i1068.syncedLayerIndex = i1069[4]
  i1068.syncedLayerAffectsTiming = !!i1069[5]
  i1068.syncedLayers = i1069[6]
  i1068.stateMachine = request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i1069[7], i1068.stateMachine)
  return i1068
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine"] = function (request, data, root) {
  var i1070 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine' )
  var i1071 = data
  i1070.id = i1071[0]
  i1070.name = i1071[1]
  i1070.path = i1071[2]
  var i1073 = i1071[3]
  var i1072 = []
  for(var i = 0; i < i1073.length; i += 1) {
    i1072.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState', i1073[i + 0]) );
  }
  i1070.states = i1072
  var i1075 = i1071[4]
  var i1074 = []
  for(var i = 0; i < i1075.length; i += 1) {
    i1074.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i1075[i + 0]) );
  }
  i1070.machines = i1074
  var i1077 = i1071[5]
  var i1076 = []
  for(var i = 0; i < i1077.length; i += 1) {
    i1076.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i1077[i + 0]) );
  }
  i1070.entryStateTransitions = i1076
  var i1079 = i1071[6]
  var i1078 = []
  for(var i = 0; i < i1079.length; i += 1) {
    i1078.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i1079[i + 0]) );
  }
  i1070.exitStateTransitions = i1078
  var i1081 = i1071[7]
  var i1080 = []
  for(var i = 0; i < i1081.length; i += 1) {
    i1080.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i1081[i + 0]) );
  }
  i1070.anyStateTransitions = i1080
  i1070.defaultStateId = i1071[8]
  return i1070
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState"] = function (request, data, root) {
  var i1084 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState' )
  var i1085 = data
  i1084.id = i1085[0]
  i1084.name = i1085[1]
  i1084.cycleOffset = i1085[2]
  i1084.cycleOffsetParameter = i1085[3]
  i1084.cycleOffsetParameterActive = !!i1085[4]
  i1084.mirror = !!i1085[5]
  i1084.mirrorParameter = i1085[6]
  i1084.mirrorParameterActive = !!i1085[7]
  i1084.motionId = i1085[8]
  i1084.nameHash = i1085[9]
  i1084.fullPathHash = i1085[10]
  i1084.speed = i1085[11]
  i1084.speedParameter = i1085[12]
  i1084.speedParameterActive = !!i1085[13]
  i1084.tag = i1085[14]
  i1084.tagHash = i1085[15]
  i1084.writeDefaultValues = !!i1085[16]
  var i1087 = i1085[17]
  var i1086 = []
  for(var i = 0; i < i1087.length; i += 2) {
  request.r(i1087[i + 0], i1087[i + 1], 2, i1086, '')
  }
  i1084.behaviours = i1086
  var i1089 = i1085[18]
  var i1088 = []
  for(var i = 0; i < i1089.length; i += 1) {
    i1088.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i1089[i + 0]) );
  }
  i1084.transitions = i1088
  return i1084
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition"] = function (request, data, root) {
  var i1094 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition' )
  var i1095 = data
  i1094.fullPath = i1095[0]
  i1094.canTransitionToSelf = !!i1095[1]
  i1094.duration = i1095[2]
  i1094.exitTime = i1095[3]
  i1094.hasExitTime = !!i1095[4]
  i1094.hasFixedDuration = !!i1095[5]
  i1094.interruptionSource = i1095[6]
  i1094.offset = i1095[7]
  i1094.orderedInterruption = !!i1095[8]
  i1094.destinationStateId = i1095[9]
  i1094.isExit = !!i1095[10]
  i1094.mute = !!i1095[11]
  i1094.solo = !!i1095[12]
  var i1097 = i1095[13]
  var i1096 = []
  for(var i = 0; i < i1097.length; i += 1) {
    i1096.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i1097[i + 0]) );
  }
  i1094.conditions = i1096
  return i1094
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition"] = function (request, data, root) {
  var i1102 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition' )
  var i1103 = data
  i1102.destinationStateId = i1103[0]
  i1102.isExit = !!i1103[1]
  i1102.mute = !!i1103[2]
  i1102.solo = !!i1103[3]
  var i1105 = i1103[4]
  var i1104 = []
  for(var i = 0; i < i1105.length; i += 1) {
    i1104.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i1105[i + 0]) );
  }
  i1102.conditions = i1104
  return i1102
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition"] = function (request, data, root) {
  var i1108 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition' )
  var i1109 = data
  i1108.mode = i1109[0]
  i1108.parameter = i1109[1]
  i1108.threshold = i1109[2]
  return i1108
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter"] = function (request, data, root) {
  var i1112 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter' )
  var i1113 = data
  i1112.defaultBool = !!i1113[0]
  i1112.defaultFloat = i1113[1]
  i1112.defaultInt = i1113[2]
  i1112.name = i1113[3]
  i1112.nameHash = i1113[4]
  i1112.type = i1113[5]
  return i1112
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i1114 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i1115 = data
  i1114.useSafeMode = !!i1115[0]
  i1114.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i1115[1], i1114.safeModeOptions)
  i1114.timeScale = i1115[2]
  i1114.unscaledTimeScale = i1115[3]
  i1114.useSmoothDeltaTime = !!i1115[4]
  i1114.maxSmoothUnscaledTime = i1115[5]
  i1114.rewindCallbackMode = i1115[6]
  i1114.showUnityEditorReport = !!i1115[7]
  i1114.logBehaviour = i1115[8]
  i1114.drawGizmos = !!i1115[9]
  i1114.defaultRecyclable = !!i1115[10]
  i1114.defaultAutoPlay = i1115[11]
  i1114.defaultUpdateType = i1115[12]
  i1114.defaultTimeScaleIndependent = !!i1115[13]
  i1114.defaultEaseType = i1115[14]
  i1114.defaultEaseOvershootOrAmplitude = i1115[15]
  i1114.defaultEasePeriod = i1115[16]
  i1114.defaultAutoKill = !!i1115[17]
  i1114.defaultLoopType = i1115[18]
  i1114.debugMode = !!i1115[19]
  i1114.debugStoreTargetId = !!i1115[20]
  i1114.showPreviewPanel = !!i1115[21]
  i1114.storeSettingsLocation = i1115[22]
  i1114.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i1115[23], i1114.modules)
  i1114.createASMDEF = !!i1115[24]
  i1114.showPlayingTweens = !!i1115[25]
  i1114.showPausedTweens = !!i1115[26]
  return i1114
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i1116 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i1117 = data
  i1116.logBehaviour = i1117[0]
  i1116.nestedTweenFailureBehaviour = i1117[1]
  return i1116
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i1118 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i1119 = data
  i1118.showPanel = !!i1119[0]
  i1118.audioEnabled = !!i1119[1]
  i1118.physicsEnabled = !!i1119[2]
  i1118.physics2DEnabled = !!i1119[3]
  i1118.spriteEnabled = !!i1119[4]
  i1118.uiEnabled = !!i1119[5]
  i1118.textMeshProEnabled = !!i1119[6]
  i1118.tk2DEnabled = !!i1119[7]
  i1118.deAudioEnabled = !!i1119[8]
  i1118.deUnityExtendedEnabled = !!i1119[9]
  i1118.epoOutlineEnabled = !!i1119[10]
  return i1118
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i1120 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i1121 = data
  var i1123 = i1121[0]
  var i1122 = []
  for(var i = 0; i < i1123.length; i += 1) {
    i1122.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i1123[i + 0]) );
  }
  i1120.files = i1122
  i1120.componentToPrefabIds = i1121[1]
  return i1120
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i1126 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i1127 = data
  i1126.path = i1127[0]
  request.r(i1127[1], i1127[2], 0, i1126, 'unityObject')
  return i1126
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i1128 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i1129 = data
  var i1131 = i1129[0]
  var i1130 = []
  for(var i = 0; i < i1131.length; i += 1) {
    i1130.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i1131[i + 0]) );
  }
  i1128.scriptsExecutionOrder = i1130
  var i1133 = i1129[1]
  var i1132 = []
  for(var i = 0; i < i1133.length; i += 1) {
    i1132.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i1133[i + 0]) );
  }
  i1128.sortingLayers = i1132
  var i1135 = i1129[2]
  var i1134 = []
  for(var i = 0; i < i1135.length; i += 1) {
    i1134.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i1135[i + 0]) );
  }
  i1128.cullingLayers = i1134
  i1128.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i1129[3], i1128.timeSettings)
  i1128.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i1129[4], i1128.physicsSettings)
  i1128.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i1129[5], i1128.physics2DSettings)
  i1128.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1129[6], i1128.qualitySettings)
  i1128.enableRealtimeShadows = !!i1129[7]
  i1128.enableAutoInstancing = !!i1129[8]
  i1128.enableStaticBatching = !!i1129[9]
  i1128.enableDynamicBatching = !!i1129[10]
  i1128.usePreservativeDynamicBatching = !!i1129[11]
  i1128.lightmapEncodingQuality = i1129[12]
  i1128.desiredColorSpace = i1129[13]
  var i1137 = i1129[14]
  var i1136 = []
  for(var i = 0; i < i1137.length; i += 1) {
    i1136.push( i1137[i + 0] );
  }
  i1128.allTags = i1136
  return i1128
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i1140 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i1141 = data
  i1140.name = i1141[0]
  i1140.value = i1141[1]
  return i1140
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i1144 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i1145 = data
  i1144.id = i1145[0]
  i1144.name = i1145[1]
  i1144.value = i1145[2]
  return i1144
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i1148 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i1149 = data
  i1148.id = i1149[0]
  i1148.name = i1149[1]
  return i1148
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i1150 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i1151 = data
  i1150.fixedDeltaTime = i1151[0]
  i1150.maximumDeltaTime = i1151[1]
  i1150.timeScale = i1151[2]
  i1150.maximumParticleTimestep = i1151[3]
  return i1150
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i1152 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i1153 = data
  i1152.gravity = new pc.Vec3( i1153[0], i1153[1], i1153[2] )
  i1152.defaultSolverIterations = i1153[3]
  i1152.bounceThreshold = i1153[4]
  i1152.autoSyncTransforms = !!i1153[5]
  i1152.autoSimulation = !!i1153[6]
  var i1155 = i1153[7]
  var i1154 = []
  for(var i = 0; i < i1155.length; i += 1) {
    i1154.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i1155[i + 0]) );
  }
  i1152.collisionMatrix = i1154
  return i1152
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i1158 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i1159 = data
  i1158.enabled = !!i1159[0]
  i1158.layerId = i1159[1]
  i1158.otherLayerId = i1159[2]
  return i1158
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i1160 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i1161 = data
  request.r(i1161[0], i1161[1], 0, i1160, 'material')
  i1160.gravity = new pc.Vec2( i1161[2], i1161[3] )
  i1160.positionIterations = i1161[4]
  i1160.velocityIterations = i1161[5]
  i1160.velocityThreshold = i1161[6]
  i1160.maxLinearCorrection = i1161[7]
  i1160.maxAngularCorrection = i1161[8]
  i1160.maxTranslationSpeed = i1161[9]
  i1160.maxRotationSpeed = i1161[10]
  i1160.baumgarteScale = i1161[11]
  i1160.baumgarteTOIScale = i1161[12]
  i1160.timeToSleep = i1161[13]
  i1160.linearSleepTolerance = i1161[14]
  i1160.angularSleepTolerance = i1161[15]
  i1160.defaultContactOffset = i1161[16]
  i1160.autoSimulation = !!i1161[17]
  i1160.queriesHitTriggers = !!i1161[18]
  i1160.queriesStartInColliders = !!i1161[19]
  i1160.callbacksOnDisable = !!i1161[20]
  i1160.reuseCollisionCallbacks = !!i1161[21]
  i1160.autoSyncTransforms = !!i1161[22]
  var i1163 = i1161[23]
  var i1162 = []
  for(var i = 0; i < i1163.length; i += 1) {
    i1162.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i1163[i + 0]) );
  }
  i1160.collisionMatrix = i1162
  return i1160
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i1166 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i1167 = data
  i1166.enabled = !!i1167[0]
  i1166.layerId = i1167[1]
  i1166.otherLayerId = i1167[2]
  return i1166
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i1168 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i1169 = data
  var i1171 = i1169[0]
  var i1170 = []
  for(var i = 0; i < i1171.length; i += 1) {
    i1170.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1171[i + 0]) );
  }
  i1168.qualityLevels = i1170
  var i1173 = i1169[1]
  var i1172 = []
  for(var i = 0; i < i1173.length; i += 1) {
    i1172.push( i1173[i + 0] );
  }
  i1168.names = i1172
  i1168.shadows = i1169[2]
  i1168.anisotropicFiltering = i1169[3]
  i1168.antiAliasing = i1169[4]
  i1168.lodBias = i1169[5]
  i1168.shadowCascades = i1169[6]
  i1168.shadowDistance = i1169[7]
  i1168.shadowmaskMode = i1169[8]
  i1168.shadowProjection = i1169[9]
  i1168.shadowResolution = i1169[10]
  i1168.softParticles = !!i1169[11]
  i1168.softVegetation = !!i1169[12]
  i1168.activeColorSpace = i1169[13]
  i1168.desiredColorSpace = i1169[14]
  i1168.masterTextureLimit = i1169[15]
  i1168.maxQueuedFrames = i1169[16]
  i1168.particleRaycastBudget = i1169[17]
  i1168.pixelLightCount = i1169[18]
  i1168.realtimeReflectionProbes = !!i1169[19]
  i1168.shadowCascade2Split = i1169[20]
  i1168.shadowCascade4Split = new pc.Vec3( i1169[21], i1169[22], i1169[23] )
  i1168.streamingMipmapsActive = !!i1169[24]
  i1168.vSyncCount = i1169[25]
  i1168.asyncUploadBufferSize = i1169[26]
  i1168.asyncUploadTimeSlice = i1169[27]
  i1168.billboardsFaceCameraPosition = !!i1169[28]
  i1168.shadowNearPlaneOffset = i1169[29]
  i1168.streamingMipmapsMemoryBudget = i1169[30]
  i1168.maximumLODLevel = i1169[31]
  i1168.streamingMipmapsAddAllCameras = !!i1169[32]
  i1168.streamingMipmapsMaxLevelReduction = i1169[33]
  i1168.streamingMipmapsRenderersPerFrame = i1169[34]
  i1168.resolutionScalingFixedDPIFactor = i1169[35]
  i1168.streamingMipmapsMaxFileIORequests = i1169[36]
  i1168.currentQualityLevel = i1169[37]
  return i1168
}

Deserializers["Luna.Unity.DTO.UnityEngine.Audio.AudioMixer"] = function (request, data, root) {
  var i1176 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Audio.AudioMixer' )
  var i1177 = data
  var i1179 = i1177[0]
  var i1178 = []
  for(var i = 0; i < i1179.length; i += 1) {
    i1178.push( request.d('Luna.Unity.DTO.UnityEngine.Audio.AudioMixerGroup', i1179[i + 0]) );
  }
  i1176.groups = i1178
  var i1181 = i1177[1]
  var i1180 = []
  for(var i = 0; i < i1181.length; i += 1) {
    i1180.push( request.d('Luna.Unity.DTO.UnityEngine.Audio.AudioMixerSnapshot', i1181[i + 0]) );
  }
  i1176.snapshots = i1180
  return i1176
}

Deserializers["Luna.Unity.DTO.UnityEngine.Audio.AudioMixerGroup"] = function (request, data, root) {
  var i1184 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Audio.AudioMixerGroup' )
  var i1185 = data
  i1184.id = i1185[0]
  i1184.childGroupIds = i1185[1]
  i1184.name = i1185[2]
  return i1184
}

Deserializers["Luna.Unity.DTO.UnityEngine.Audio.AudioMixerSnapshot"] = function (request, data, root) {
  var i1188 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Audio.AudioMixerSnapshot' )
  var i1189 = data
  i1188.id = i1189[0]
  var i1191 = i1189[1]
  var i1190 = []
  for(var i = 0; i < i1191.length; i += 1) {
    i1190.push( request.d('Luna.Unity.DTO.UnityEngine.Audio.AudioMixerSnapshot+Parameter', i1191[i + 0]) );
  }
  i1188.parameters = i1190
  return i1188
}

Deserializers["Luna.Unity.DTO.UnityEngine.Audio.AudioMixerSnapshot+Parameter"] = function (request, data, root) {
  var i1194 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Audio.AudioMixerSnapshot+Parameter' )
  var i1195 = data
  i1194.name = i1195[0]
  i1194.value = i1195[1]
  return i1194
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame"] = function (request, data, root) {
  var i1198 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame' )
  var i1199 = data
  i1198.weight = i1199[0]
  i1198.vertices = i1199[1]
  i1198.normals = i1199[2]
  i1198.tangents = i1199[3]
  return i1198
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Assets.Mesh":{"name":0,"halfPrecision":1,"useSimplification":2,"useUInt32IndexFormat":3,"vertexCount":4,"aabb":5,"streams":6,"vertices":7,"subMeshes":8,"bindposes":9,"blendShapes":10},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh":{"triangles":0},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape":{"name":0,"frames":1},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer":{"color":0,"sprite":4,"flipX":6,"flipY":7,"drawMode":8,"size":9,"tileMode":11,"adaptiveModeThreshold":12,"maskInteraction":13,"spriteSortPoint":14,"enabled":15,"sharedMaterial":16,"sharedMaterials":18,"receiveShadows":19,"shadowCastingMode":20,"sortingLayerID":21,"sortingOrder":22,"lightmapIndex":23,"lightmapSceneIndex":24,"lightmapScaleOffset":25,"lightProbeUsage":29,"reflectionProbeUsage":30},"Luna.Unity.DTO.UnityEngine.Components.CircleCollider2D":{"radius":0,"enabled":1,"isTrigger":2,"usedByEffector":3,"density":4,"offset":5,"material":7},"Luna.Unity.DTO.UnityEngine.Components.AudioSource":{"clip":0,"outputAudioMixerGroup":2,"playOnAwake":4,"loop":5,"time":6,"volume":7,"pitch":8,"enabled":9},"Luna.Unity.DTO.UnityEngine.Components.PolygonCollider2D":{"usedByComposite":0,"autoTiling":1,"points":2,"enabled":3,"isTrigger":4,"usedByEffector":5,"density":6,"offset":7,"material":9},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D":{"usedByComposite":0,"autoTiling":1,"size":2,"edgeRadius":4,"enabled":5,"isTrigger":6,"usedByEffector":7,"density":8,"offset":9,"material":11},"Luna.Unity.DTO.UnityEngine.Components.Animator":{"animatorController":0,"avatar":2,"updateMode":4,"hasTransformHierarchy":5,"applyRootMotion":6,"humanBones":7,"enabled":8},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystem":{"main":0,"colorBySpeed":1,"colorOverLifetime":2,"emission":3,"rotationBySpeed":4,"rotationOverLifetime":5,"shape":6,"sizeBySpeed":7,"sizeOverLifetime":8,"textureSheetAnimation":9,"velocityOverLifetime":10,"noise":11,"inheritVelocity":12,"forceOverLifetime":13,"limitVelocityOverLifetime":14,"useAutoRandomSeed":15,"randomSeed":16},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule":{"duration":0,"loop":1,"prewarm":2,"startDelay":3,"startLifetime":4,"startSpeed":5,"startSize3D":6,"startSizeX":7,"startSizeY":8,"startSizeZ":9,"startRotation3D":10,"startRotationX":11,"startRotationY":12,"startRotationZ":13,"startColor":14,"gravityModifier":15,"simulationSpace":16,"customSimulationSpace":17,"simulationSpeed":19,"useUnscaledTime":20,"scalingMode":21,"playOnAwake":22,"maxParticles":23,"emitterVelocityMode":24,"stopAction":25},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve":{"mode":0,"curveMin":1,"curveMax":2,"curveMultiplier":3,"constantMin":4,"constantMax":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient":{"mode":0,"gradientMin":1,"gradientMax":2,"colorMin":3,"colorMax":7},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient":{"mode":0,"colorKeys":1,"alphaKeys":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule":{"enabled":0,"color":1,"range":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey":{"color":0,"time":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey":{"alpha":0,"time":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule":{"enabled":0,"color":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule":{"enabled":0,"rateOverTime":1,"rateOverDistance":2,"bursts":3},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst":{"count":0,"cycleCount":1,"minCount":2,"maxCount":3,"repeatInterval":4,"time":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule":{"enabled":0,"shapeType":1,"randomDirectionAmount":2,"sphericalDirectionAmount":3,"randomPositionAmount":4,"alignToDirection":5,"radius":6,"radiusMode":7,"radiusSpread":8,"radiusSpeed":9,"radiusThickness":10,"angle":11,"length":12,"boxThickness":13,"meshShapeType":16,"mesh":17,"meshRenderer":19,"skinnedMeshRenderer":21,"useMeshMaterialIndex":23,"meshMaterialIndex":24,"useMeshColors":25,"normalOffset":26,"arc":27,"arcMode":28,"arcSpread":29,"arcSpeed":30,"donutRadius":31,"position":32,"rotation":35,"scale":38},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule":{"enabled":0,"mode":1,"animation":2,"numTilesX":3,"numTilesY":4,"useRandomRow":5,"frameOverTime":6,"startFrame":7,"cycleCount":8,"rowIndex":9,"flipU":10,"flipV":11,"spriteCount":12,"sprites":13},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"radial":4,"speedModifier":5,"space":6,"orbitalX":7,"orbitalY":8,"orbitalZ":9,"orbitalOffsetX":10,"orbitalOffsetY":11,"orbitalOffsetZ":12},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule":{"enabled":0,"separateAxes":1,"strengthX":2,"strengthY":3,"strengthZ":4,"frequency":5,"damping":6,"octaveCount":7,"octaveMultiplier":8,"octaveScale":9,"quality":10,"scrollSpeed":11,"scrollSpeedMultiplier":12,"remapEnabled":13,"remapX":14,"remapY":15,"remapZ":16,"positionAmount":17,"rotationAmount":18,"sizeAmount":19},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule":{"enabled":0,"mode":1,"curve":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"space":4,"randomized":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule":{"enabled":0,"limit":1,"limitX":2,"limitY":3,"limitZ":4,"dampen":5,"separateAxes":6,"space":7,"drag":8,"multiplyDragByParticleSize":9,"multiplyDragByParticleVelocity":10},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer":{"mesh":0,"meshCount":2,"activeVertexStreamsCount":3,"alignment":4,"renderMode":5,"sortMode":6,"lengthScale":7,"velocityScale":8,"cameraVelocityScale":9,"normalDirection":10,"sortingFudge":11,"minParticleSize":12,"maxParticleSize":13,"pivot":14,"trailMaterial":17,"applyActiveColorSpace":19,"enabled":20,"sharedMaterial":21,"sharedMaterials":23,"receiveShadows":24,"shadowCastingMode":25,"sortingLayerID":26,"sortingOrder":27,"lightmapIndex":28,"lightmapSceneIndex":29,"lightmapScaleOffset":30,"lightProbeUsage":34,"reflectionProbeUsage":35},"Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D":{"bodyType":0,"material":1,"simulated":3,"useAutoMass":4,"mass":5,"drag":6,"angularDrag":7,"gravityScale":8,"collisionDetectionMode":9,"sleepMode":10,"constraints":11},"Luna.Unity.DTO.UnityEngine.Textures.Cubemap":{"name":0,"atlasId":1,"mipmapCount":2,"hdr":3,"size":4,"anisoLevel":5,"filterMode":6,"rects":7,"wrapU":8,"wrapV":9},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"aspect":0,"orthographic":1,"orthographicSize":2,"backgroundColor":3,"nearClipPlane":7,"farClipPlane":8,"fieldOfView":9,"depth":10,"clearFlags":11,"cullingMask":12,"rect":13,"targetTexture":14,"usePhysicalProperties":16,"focalLength":17,"sensorSize":18,"lensShift":20,"gateFit":22,"commandBufferCount":23,"cameraType":24,"enabled":25},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"planeDistance":0,"referencePixelsPerUnit":1,"isFallbackOverlay":2,"renderMode":3,"renderOrder":4,"sortingLayerName":5,"sortingOrder":6,"scaleFactor":7,"worldCamera":8,"overrideSorting":10,"pixelPerfect":11,"targetDisplay":12,"overridePixelPerfect":13,"enabled":14},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"customReflection":36,"defaultReflection":38,"defaultReflectionMode":40,"defaultReflectionResolution":41,"sunLightObjectId":42,"pixelLightCount":43,"defaultReflectionHDR":44,"hasLightDataAsset":45,"hasManualGenerate":46},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2,"shadowMask":4},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"hasDepthOnlyPass":10,"isCreatedByShaderGraph":11,"disableBatching":12,"compiled":13},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip":{"name":0,"wrapMode":1,"isLooping":2,"length":3,"curves":4,"events":5,"halfPrecision":6,"_frameRate":7,"localBounds":8,"hasMuscleCurves":9,"clipMuscleConstant":10,"clipBindingConstant":11},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve":{"path":0,"hash":1,"componentType":2,"property":3,"keys":4,"objectReferenceKeys":5},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey":{"time":0,"value":1},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent":{"functionName":0,"floatParameter":1,"intParameter":2,"stringParameter":3,"objectReferenceParameter":4,"time":6},"Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds":{"center":0,"extends":3},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant":{"genericBindings":0,"pptrCurveMapping":1},"Luna.Unity.DTO.UnityEngine.Assets.Font":{"name":0,"ascent":1,"originalLineHeight":2,"fontSize":3,"characterInfo":4,"texture":5,"originalFontSize":7},"Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo":{"index":0,"advance":1,"bearing":2,"glyphWidth":3,"glyphHeight":4,"minX":5,"maxX":6,"minY":7,"maxY":8,"uvBottomLeftX":9,"uvBottomLeftY":10,"uvBottomRightX":11,"uvBottomRightY":12,"uvTopLeftX":13,"uvTopLeftY":14,"uvTopRightX":15,"uvTopRightY":16},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController":{"name":0,"layers":1,"parameters":2,"animationClips":3,"avatarUnsupported":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer":{"name":0,"defaultWeight":1,"blendingMode":2,"avatarMask":3,"syncedLayerIndex":4,"syncedLayerAffectsTiming":5,"syncedLayers":6,"stateMachine":7},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine":{"id":0,"name":1,"path":2,"states":3,"machines":4,"entryStateTransitions":5,"exitStateTransitions":6,"anyStateTransitions":7,"defaultStateId":8},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState":{"id":0,"name":1,"cycleOffset":2,"cycleOffsetParameter":3,"cycleOffsetParameterActive":4,"mirror":5,"mirrorParameter":6,"mirrorParameterActive":7,"motionId":8,"nameHash":9,"fullPathHash":10,"speed":11,"speedParameter":12,"speedParameterActive":13,"tag":14,"tagHash":15,"writeDefaultValues":16,"behaviours":17,"transitions":18},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition":{"fullPath":0,"canTransitionToSelf":1,"duration":2,"exitTime":3,"hasExitTime":4,"hasFixedDuration":5,"interruptionSource":6,"offset":7,"orderedInterruption":8,"destinationStateId":9,"isExit":10,"mute":11,"solo":12,"conditions":13},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition":{"destinationStateId":0,"isExit":1,"mute":2,"solo":3,"conditions":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition":{"mode":0,"parameter":1,"threshold":2},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter":{"defaultBool":0,"defaultFloat":1,"defaultInt":2,"name":3,"nameHash":4,"type":5},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableStaticBatching":9,"enableDynamicBatching":10,"usePreservativeDynamicBatching":11,"lightmapEncodingQuality":12,"desiredColorSpace":13,"allTags":14},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37},"Luna.Unity.DTO.UnityEngine.Audio.AudioMixer":{"groups":0,"snapshots":1},"Luna.Unity.DTO.UnityEngine.Audio.AudioMixerGroup":{"id":0,"childGroupIds":1,"name":2},"Luna.Unity.DTO.UnityEngine.Audio.AudioMixerSnapshot":{"id":0,"parameters":1},"Luna.Unity.DTO.UnityEngine.Audio.AudioMixerSnapshot+Parameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame":{"weight":0,"vertices":1,"normals":2,"tangents":3}}

Deserializers.requiredComponents = {"62":[63],"64":[63],"65":[63],"66":[63],"67":[63],"68":[63],"69":[70],"71":[38],"72":[73],"74":[73],"75":[73],"76":[73],"77":[73],"78":[73],"79":[73],"80":[31],"81":[31],"82":[31],"83":[31],"84":[31],"85":[31],"86":[31],"87":[31],"88":[31],"89":[31],"90":[31],"91":[31],"92":[31],"93":[38],"94":[95],"96":[97],"98":[97],"50":[43],"99":[100],"101":[8],"102":[24],"103":[8],"104":[105],"106":[105],"107":[36],"108":[24],"109":[8],"32":[8],"110":[43],"111":[43],"53":[50],"44":[54,43],"112":[43],"52":[50],"113":[43],"114":[43],"115":[43],"116":[43],"117":[43],"118":[43],"119":[43],"120":[43],"121":[43],"122":[54,43],"123":[43],"124":[43],"125":[43],"126":[43],"45":[54,43],"127":[43],"128":[58],"129":[58],"59":[58],"130":[58],"131":[38],"132":[38]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Texture2D","UnityEngine.Transform","UnityEngine.MonoBehaviour","Level2_Shoe_Playable","BasicDrag","BD_CameraFollow","UnityEngine.GameObject","UnityEngine.SpriteRenderer","UnityEngine.Sprite","UnityEngine.AudioClip","UnityEngine.AudioSource","ScratchCardAsset.ScratchCardManager","PlayableCTA","ScratchCardAsset.ScratchCard","ScratchCardAsset.EraseProgress","UnityEngine.Material","PlayParticlesOnCollision","UnityEngine.CircleCollider2D","PlaySfxOnCollision","UnityEditor.Audio.AudioMixerGroupController","UnityEngine.PolygonCollider2D","UnityEngine.ParticleSystem","UnityEngine.Animator","UnityEngine.BoxCollider2D","BD_Progress","BD_Clamp","BD_ToolRotate","BD_Audio","UnityEditor.Animations.AnimatorController","UnityEngine.ParticleSystemRenderer","UnityEngine.Rigidbody2D","UnityEngine.U2D.Animation.SpriteSkin","BD_SpriteChange","InteractableBones","ActionOnTap","DG.Tweening.DOTweenAnimation","DestroyObj","UnityEngine.Camera","UnityEngine.AudioListener","CameraController","MusicSource","UI_Manager","UnityEngine.RectTransform","UnityEngine.UI.Image","UnityEngine.UI.Text","GameManagerPlayable","AudioController","UnityEditor.Audio.AudioMixerController","UnityEngine.Mesh","UnityEngine.Canvas","UnityEngine.EventSystems.UIBehaviour","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEngine.CanvasRenderer","UnityEngine.Font","UnityEngine.UI.Button","PlayableHudRuntime","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","UnityEngine.Cubemap","DG.Tweening.Core.DOTweenSettings","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.ConstantForce","UnityEngine.Rigidbody","UnityEngine.Joint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.FixedJoint","UnityEngine.CharacterJoint","UnityEngine.ConfigurableJoint","UnityEngine.CompositeCollider2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.MeshRenderer","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","RopeController","UnityEngine.LineRenderer","BD_Fold","BD_Sticky","Lvl3_DripAnimator","Lvl3_LipstickPicker","UnityEngine.Collider2D","Lvl3_PourFill","PlayTweenOnHit","SpriteButton","RadialCircleFill","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.Mask","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Slider","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster"]

Deserializers.unityVersion = "2022.3.62f2";

Deserializers.productName = "Perfect Makeover Fashion ASMR";

Deserializers.lunaInitializationTime = "08/20/2026 07:41:52";

Deserializers.lunaDaysRunning = "0.9";

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

Deserializers.buildID = "4d5ba96a-8f16-49ae-b76a-14ef92247220";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[],[["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"]],[],[]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

