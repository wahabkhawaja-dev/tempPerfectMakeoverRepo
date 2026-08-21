var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i596 = root || request.c( 'UnityEngine.JointSpring' )
  var i597 = data
  i596.spring = i597[0]
  i596.damper = i597[1]
  i596.targetPosition = i597[2]
  return i596
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i598 = root || request.c( 'UnityEngine.JointMotor' )
  var i599 = data
  i598.m_TargetVelocity = i599[0]
  i598.m_Force = i599[1]
  i598.m_FreeSpin = i599[2]
  return i598
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i600 = root || request.c( 'UnityEngine.JointLimits' )
  var i601 = data
  i600.m_Min = i601[0]
  i600.m_Max = i601[1]
  i600.m_Bounciness = i601[2]
  i600.m_BounceMinVelocity = i601[3]
  i600.m_ContactDistance = i601[4]
  i600.minBounce = i601[5]
  i600.maxBounce = i601[6]
  return i600
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i602 = root || request.c( 'UnityEngine.JointDrive' )
  var i603 = data
  i602.m_PositionSpring = i603[0]
  i602.m_PositionDamper = i603[1]
  i602.m_MaximumForce = i603[2]
  i602.m_UseAcceleration = i603[3]
  return i602
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i604 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i605 = data
  i604.m_Spring = i605[0]
  i604.m_Damper = i605[1]
  return i604
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i606 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i607 = data
  i606.m_Limit = i607[0]
  i606.m_Bounciness = i607[1]
  i606.m_ContactDistance = i607[2]
  return i606
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i608 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i609 = data
  i608.m_ExtremumSlip = i609[0]
  i608.m_ExtremumValue = i609[1]
  i608.m_AsymptoteSlip = i609[2]
  i608.m_AsymptoteValue = i609[3]
  i608.m_Stiffness = i609[4]
  return i608
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i610 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i611 = data
  i610.m_LowerAngle = i611[0]
  i610.m_UpperAngle = i611[1]
  return i610
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i612 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i613 = data
  i612.m_MotorSpeed = i613[0]
  i612.m_MaximumMotorTorque = i613[1]
  return i612
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i614 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i615 = data
  i614.m_DampingRatio = i615[0]
  i614.m_Frequency = i615[1]
  i614.m_Angle = i615[2]
  return i614
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i616 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i617 = data
  i616.m_LowerTranslation = i617[0]
  i616.m_UpperTranslation = i617[1]
  return i616
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i618 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i619 = data
  i618.name = i619[0]
  i618.width = i619[1]
  i618.height = i619[2]
  i618.mipmapCount = i619[3]
  i618.anisoLevel = i619[4]
  i618.filterMode = i619[5]
  i618.hdr = !!i619[6]
  i618.format = i619[7]
  i618.wrapMode = i619[8]
  i618.alphaIsTransparency = !!i619[9]
  i618.alphaSource = i619[10]
  i618.graphicsFormat = i619[11]
  i618.sRGBTexture = !!i619[12]
  i618.desiredColorSpace = i619[13]
  i618.wrapU = i619[14]
  i618.wrapV = i619[15]
  return i618
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i620 = root || new pc.UnityMaterial()
  var i621 = data
  i620.name = i621[0]
  request.r(i621[1], i621[2], 0, i620, 'shader')
  i620.renderQueue = i621[3]
  i620.enableInstancing = !!i621[4]
  var i623 = i621[5]
  var i622 = []
  for(var i = 0; i < i623.length; i += 1) {
    i622.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i623[i + 0]) );
  }
  i620.floatParameters = i622
  var i625 = i621[6]
  var i624 = []
  for(var i = 0; i < i625.length; i += 1) {
    i624.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i625[i + 0]) );
  }
  i620.colorParameters = i624
  var i627 = i621[7]
  var i626 = []
  for(var i = 0; i < i627.length; i += 1) {
    i626.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i627[i + 0]) );
  }
  i620.vectorParameters = i626
  var i629 = i621[8]
  var i628 = []
  for(var i = 0; i < i629.length; i += 1) {
    i628.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i629[i + 0]) );
  }
  i620.textureParameters = i628
  var i631 = i621[9]
  var i630 = []
  for(var i = 0; i < i631.length; i += 1) {
    i630.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i631[i + 0]) );
  }
  i620.materialFlags = i630
  return i620
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i634 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i635 = data
  i634.name = i635[0]
  i634.value = i635[1]
  return i634
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i638 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i639 = data
  i638.name = i639[0]
  i638.value = new pc.Color(i639[1], i639[2], i639[3], i639[4])
  return i638
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i642 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i643 = data
  i642.name = i643[0]
  i642.value = new pc.Vec4( i643[1], i643[2], i643[3], i643[4] )
  return i642
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i646 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i647 = data
  i646.name = i647[0]
  request.r(i647[1], i647[2], 0, i646, 'value')
  return i646
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i650 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i651 = data
  i650.name = i651[0]
  i650.enabled = !!i651[1]
  return i650
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh"] = function (request, data, root) {
  var i652 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh' )
  var i653 = data
  i652.name = i653[0]
  i652.halfPrecision = !!i653[1]
  i652.useSimplification = !!i653[2]
  i652.useUInt32IndexFormat = !!i653[3]
  i652.vertexCount = i653[4]
  i652.aabb = i653[5]
  var i655 = i653[6]
  var i654 = []
  for(var i = 0; i < i655.length; i += 1) {
    i654.push( !!i655[i + 0] );
  }
  i652.streams = i654
  i652.vertices = i653[7]
  var i657 = i653[8]
  var i656 = []
  for(var i = 0; i < i657.length; i += 1) {
    i656.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh', i657[i + 0]) );
  }
  i652.subMeshes = i656
  var i659 = i653[9]
  var i658 = []
  for(var i = 0; i < i659.length; i += 16) {
    i658.push( new pc.Mat4().setData(i659[i + 0], i659[i + 1], i659[i + 2], i659[i + 3],  i659[i + 4], i659[i + 5], i659[i + 6], i659[i + 7],  i659[i + 8], i659[i + 9], i659[i + 10], i659[i + 11],  i659[i + 12], i659[i + 13], i659[i + 14], i659[i + 15]) );
  }
  i652.bindposes = i658
  var i661 = i653[10]
  var i660 = []
  for(var i = 0; i < i661.length; i += 1) {
    i660.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape', i661[i + 0]) );
  }
  i652.blendShapes = i660
  return i652
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh"] = function (request, data, root) {
  var i666 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh' )
  var i667 = data
  i666.triangles = i667[0]
  return i666
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape"] = function (request, data, root) {
  var i672 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape' )
  var i673 = data
  i672.name = i673[0]
  var i675 = i673[1]
  var i674 = []
  for(var i = 0; i < i675.length; i += 1) {
    i674.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame', i675[i + 0]) );
  }
  i672.frames = i674
  return i672
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i676 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i677 = data
  i676.position = new pc.Vec3( i677[0], i677[1], i677[2] )
  i676.scale = new pc.Vec3( i677[3], i677[4], i677[5] )
  i676.rotation = new pc.Quat(i677[6], i677[7], i677[8], i677[9])
  return i676
}

Deserializers["Level2_Shoe_Playable"] = function (request, data, root) {
  var i678 = root || request.c( 'Level2_Shoe_Playable' )
  var i679 = data
  i678.MainZoom = request.d('ZoomPos', i679[0], i678.MainZoom)
  i678.ZoomStep1 = request.d('ZoomPos', i679[1], i678.ZoomStep1)
  request.r(i679[2], i679[3], 0, i678, 'ToolStep1')
  request.r(i679[4], i679[5], 0, i678, 'ToolStep1CameraFollow')
  request.r(i679[6], i679[7], 0, i678, 'Step1Col')
  var i681 = i679[8]
  var i680 = []
  for(var i = 0; i < i681.length; i += 2) {
  request.r(i681[i + 0], i681[i + 1], 2, i680, '')
  }
  i678.LayersToFade_1 = i680
  request.r(i679[9], i679[10], 0, i678, 'LayersToFade_Updated')
  request.r(i679[11], i679[12], 0, i678, 'MudLayer_1')
  i678.ZoomStep2 = request.d('ZoomPos', i679[13], i678.ZoomStep2)
  request.r(i679[14], i679[15], 0, i678, 'ToolStep2')
  request.r(i679[16], i679[17], 0, i678, 'ToolStep2CameraFollow')
  request.r(i679[18], i679[19], 0, i678, 'Step2Col')
  var i683 = i679[20]
  var i682 = []
  for(var i = 0; i < i683.length; i += 2) {
  request.r(i683[i + 0], i683[i + 1], 2, i682, '')
  }
  i678.LayersToFade_2 = i682
  request.r(i679[21], i679[22], 0, i678, 'WetMud_2')
  i678.ZoomStep3 = request.d('ZoomPos', i679[23], i678.ZoomStep3)
  request.r(i679[24], i679[25], 0, i678, 'ToolStep3')
  request.r(i679[26], i679[27], 0, i678, 'ToolStep3CameraFollow')
  var i685 = i679[28]
  var i684 = []
  for(var i = 0; i < i685.length; i += 2) {
  request.r(i685[i + 0], i685[i + 1], 2, i684, '')
  }
  i678.LayersToFade_3 = i684
  request.r(i679[29], i679[30], 0, i678, 'Foam_3')
  i678.ZoomStep4 = request.d('ZoomPos', i679[31], i678.ZoomStep4)
  request.r(i679[32], i679[33], 0, i678, 'ToolStep4')
  request.r(i679[34], i679[35], 0, i678, 'ToolStep4CameraFollow')
  request.r(i679[36], i679[37], 0, i678, 'Step4Col')
  var i687 = i679[38]
  var i686 = []
  for(var i = 0; i < i687.length; i += 2) {
  request.r(i687[i + 0], i687[i + 1], 2, i686, '')
  }
  i678.LayersToFade_4 = i686
  request.r(i679[39], i679[40], 0, i678, 'dry')
  request.r(i679[41], i679[42], 0, i678, 'mixeE')
  request.r(i679[43], i679[44], 0, i678, 'mix')
  request.r(i679[45], i679[46], 0, i678, 'Mix_4')
  i678.ZoomStep5 = request.d('ZoomPos', i679[47], i678.ZoomStep5)
  request.r(i679[48], i679[49], 0, i678, 'ToolStep5')
  request.r(i679[50], i679[51], 0, i678, 'ToolStep5CameraFollow')
  var i689 = i679[52]
  var i688 = []
  for(var i = 0; i < i689.length; i += 2) {
  request.r(i689[i + 0], i689[i + 1], 2, i688, '')
  }
  i678.LayersToFade_5 = i688
  request.r(i679[53], i679[54], 0, i678, 'WetLayer')
  request.r(i679[55], i679[56], 0, i678, 'DryLayer')
  i678.levelName = i679[57]
  i678.levelReward = i679[58]
  request.r(i679[59], i679[60], 0, i678, 'LevelIcon')
  request.r(i679[61], i679[62], 0, i678, 'Level_BG')
  var i691 = i679[63]
  var i690 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Sprite')))
  for(var i = 0; i < i691.length; i += 2) {
  request.r(i691[i + 0], i691[i + 1], 1, i690, '')
  }
  i678.ToolIcons = i690
  var i693 = i679[64]
  var i692 = []
  for(var i = 0; i < i693.length; i += 2) {
  request.r(i693[i + 0], i693[i + 1], 2, i692, '')
  }
  i678.AllDrags = i692
  var i695 = i679[65]
  var i694 = []
  for(var i = 0; i < i695.length; i += 2) {
  request.r(i695[i + 0], i695[i + 1], 2, i694, '')
  }
  i678.AllSources = i694
  var i697 = i679[66]
  var i696 = []
  for(var i = 0; i < i697.length; i += 2) {
  request.r(i697[i + 0], i697[i + 1], 2, i696, '')
  }
  i678.AllScratches = i696
  i678.stepsDone = i679[67]
  i678.levelNo = i679[68]
  i678.partNo = i679[69]
  return i678
}

Deserializers["ZoomPos"] = function (request, data, root) {
  var i698 = root || request.c( 'ZoomPos' )
  var i699 = data
  i698.CameraPos = new pc.Vec3( i699[0], i699[1], i699[2] )
  i698.CameraFOV = i699[3]
  return i698
}

Deserializers["PlayableCTA"] = function (request, data, root) {
  var i710 = root || request.c( 'PlayableCTA' )
  var i711 = data
  i710.trigger = i711[0]
  i710.afterSeconds = i711[1]
  i710.afterTaps = i711[2]
  i710.refireOnEveryTap = !!i711[3]
  i710.refireDelay = i711[4]
  i710.onCtaFired = request.d('UnityEngine.Events.UnityEvent', i711[5], i710.onCtaFired)
  i710.logWhenFired = !!i711[6]
  return i710
}

Deserializers["UnityEngine.Events.UnityEvent"] = function (request, data, root) {
  var i712 = root || request.c( 'UnityEngine.Events.UnityEvent' )
  var i713 = data
  i712.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i713[0], i712.m_PersistentCalls)
  return i712
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i714 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i715 = data
  var i717 = i715[0]
  var i716 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i717.length; i += 1) {
    i716.add(request.d('UnityEngine.Events.PersistentCall', i717[i + 0]));
  }
  i714.m_Calls = i716
  return i714
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i720 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i721 = data
  request.r(i721[0], i721[1], 0, i720, 'm_Target')
  i720.m_TargetAssemblyTypeName = i721[2]
  i720.m_MethodName = i721[3]
  i720.m_Mode = i721[4]
  i720.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i721[5], i720.m_Arguments)
  i720.m_CallState = i721[6]
  return i720
}

Deserializers["ScratchCardAsset.ScratchCardManager"] = function (request, data, root) {
  var i722 = root || request.c( 'ScratchCardAsset.ScratchCardManager' )
  var i723 = data
  request.r(i723[0], i723[1], 0, i722, 'MainCamera')
  i722.RenderType = i723[2]
  request.r(i723[3], i723[4], 0, i722, 'ScratchSurfaceSprite')
  i722.ScratchSurfaceSpriteHasAlpha = !!i723[5]
  i722.MaskProgressCutOffValue = i723[6]
  request.r(i723[7], i723[8], 0, i722, 'EraseTexture')
  i722.EraseTextureScale = new pc.Vec2( i723[9], i723[10] )
  i722.InputEnabled = !!i723[11]
  request.r(i723[12], i723[13], 0, i722, 'Card')
  i722.Mode = i723[14]
  request.r(i723[15], i723[16], 0, i722, 'Progress')
  request.r(i723[17], i723[18], 0, i722, 'MeshCard')
  request.r(i723[19], i723[20], 0, i722, 'SpriteCard')
  request.r(i723[21], i723[22], 0, i722, 'ImageCard')
  request.r(i723[23], i723[24], 0, i722, 'MaskShader')
  request.r(i723[25], i723[26], 0, i722, 'BrushShader')
  request.r(i723[27], i723[28], 0, i722, 'MaskProgressShader')
  request.r(i723[29], i723[30], 0, i722, 'MaskProgressCutOffShader')
  return i722
}

Deserializers["ScratchCardAsset.ScratchCard"] = function (request, data, root) {
  var i724 = root || request.c( 'ScratchCardAsset.ScratchCard' )
  var i725 = data
  request.r(i725[0], i725[1], 0, i724, 'MainCamera')
  request.r(i725[2], i725[3], 0, i724, 'Surface')
  i724.RenderTextureQuality = i725[4]
  request.r(i725[5], i725[6], 0, i724, 'Eraser')
  request.r(i725[7], i725[8], 0, i724, 'Progress')
  request.r(i725[9], i725[10], 0, i724, 'ScratchSurface')
  request.r(i725[11], i725[12], 0, i724, 'RenderTexture')
  i724.BrushScale = new pc.Vec2( i725[13], i725[14] )
  request.r(i725[15], i725[16], 0, i724, 'ToolTip')
  i724.InputEnabled = !!i725[17]
  i724.IsScratching = !!i725[18]
  i724.useChangingScale = !!i725[19]
  i724.useGivenBrushScale = !!i725[20]
  i724.canSpreadMask = !!i725[21]
  i724.shouldPaintHoles = !!i725[22]
  i724.canRotateTip = !!i725[23]
  i724._mode = i725[24]
  return i724
}

Deserializers["ScratchCardAsset.EraseProgress"] = function (request, data, root) {
  var i726 = root || request.c( 'ScratchCardAsset.EraseProgress' )
  var i727 = data
  request.r(i727[0], i727[1], 0, i726, 'Card')
  i726.currentProgress = i727[2]
  return i726
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i728 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i729 = data
  i728.name = i729[0]
  i728.tagId = i729[1]
  i728.enabled = !!i729[2]
  i728.isStatic = !!i729[3]
  i728.layer = i729[4]
  return i728
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer"] = function (request, data, root) {
  var i730 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer' )
  var i731 = data
  i730.color = new pc.Color(i731[0], i731[1], i731[2], i731[3])
  request.r(i731[4], i731[5], 0, i730, 'sprite')
  i730.flipX = !!i731[6]
  i730.flipY = !!i731[7]
  i730.drawMode = i731[8]
  i730.size = new pc.Vec2( i731[9], i731[10] )
  i730.tileMode = i731[11]
  i730.adaptiveModeThreshold = i731[12]
  i730.maskInteraction = i731[13]
  i730.spriteSortPoint = i731[14]
  i730.enabled = !!i731[15]
  request.r(i731[16], i731[17], 0, i730, 'sharedMaterial')
  var i733 = i731[18]
  var i732 = []
  for(var i = 0; i < i733.length; i += 2) {
  request.r(i733[i + 0], i733[i + 1], 2, i732, '')
  }
  i730.sharedMaterials = i732
  i730.receiveShadows = !!i731[19]
  i730.shadowCastingMode = i731[20]
  i730.sortingLayerID = i731[21]
  i730.sortingOrder = i731[22]
  i730.lightmapIndex = i731[23]
  i730.lightmapSceneIndex = i731[24]
  i730.lightmapScaleOffset = new pc.Vec4( i731[25], i731[26], i731[27], i731[28] )
  i730.lightProbeUsage = i731[29]
  i730.reflectionProbeUsage = i731[30]
  return i730
}

Deserializers["PlayParticlesOnCollision"] = function (request, data, root) {
  var i736 = root || request.c( 'PlayParticlesOnCollision' )
  var i737 = data
  request.r(i737[0], i737[1], 0, i736, 'Target')
  request.r(i737[2], i737[3], 0, i736, 'ParticlePrefab')
  i736.destroyIt = !!i737[4]
  i736.stayAtPlace = !!i737[5]
  i736.disableOnCollision = !!i737[6]
  i736.OnCollisionEvent = request.d('UnityEngine.Events.UnityEvent', i737[7], i736.OnCollisionEvent)
  return i736
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CircleCollider2D"] = function (request, data, root) {
  var i738 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CircleCollider2D' )
  var i739 = data
  i738.radius = i739[0]
  i738.enabled = !!i739[1]
  i738.isTrigger = !!i739[2]
  i738.usedByEffector = !!i739[3]
  i738.density = i739[4]
  i738.offset = new pc.Vec2( i739[5], i739[6] )
  request.r(i739[7], i739[8], 0, i738, 'material')
  return i738
}

Deserializers["PlaySfxOnCollision"] = function (request, data, root) {
  var i740 = root || request.c( 'PlaySfxOnCollision' )
  var i741 = data
  request.r(i741[0], i741[1], 0, i740, 'Tip')
  i740.Mode = i741[2]
  request.r(i741[3], i741[4], 0, i740, 'DragInput')
  request.r(i741[5], i741[6], 0, i740, 'Source')
  i740.startVol = i741[7]
  i740.targetVol = i741[8]
  i740.duration = i741[9]
  request.r(i741[10], i741[11], 0, i740, 'Particles')
  i740.isDone = !!i741[12]
  i740.isInArea = !!i741[13]
  i740.isPlaying = !!i741[14]
  return i740
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i742 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i743 = data
  request.r(i743[0], i743[1], 0, i742, 'clip')
  request.r(i743[2], i743[3], 0, i742, 'outputAudioMixerGroup')
  i742.playOnAwake = !!i743[4]
  i742.loop = !!i743[5]
  i742.time = i743[6]
  i742.volume = i743[7]
  i742.pitch = i743[8]
  i742.enabled = !!i743[9]
  return i742
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.PolygonCollider2D"] = function (request, data, root) {
  var i744 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.PolygonCollider2D' )
  var i745 = data
  i744.usedByComposite = !!i745[0]
  i744.autoTiling = !!i745[1]
  var i747 = i745[2]
  var i746 = []
  for(var i = 0; i < i747.length; i += 1) {
  var i749 = i747[i + 0]
  var i748 = []
  for(var i = 0; i < i749.length; i += 2) {
    i748.push( new pc.Vec2( i749[i + 0], i749[i + 1] ) );
  }
    i746.push( i748 );
  }
  i744.points = i746
  i744.enabled = !!i745[3]
  i744.isTrigger = !!i745[4]
  i744.usedByEffector = !!i745[5]
  i744.density = i745[6]
  i744.offset = new pc.Vec2( i745[7], i745[8] )
  request.r(i745[9], i745[10], 0, i744, 'material')
  return i744
}

Deserializers["BasicDrag"] = function (request, data, root) {
  var i756 = root || request.c( 'BasicDrag' )
  var i757 = data
  i756.canDrag = !!i757[0]
  i756.dragByDelta = !!i757[1]
  i756.isDragging = !!i757[2]
  i756.moveWithPointer = !!i757[3]
  i756.canReturn = !!i757[4]
  i756.jumpOnReturn = !!i757[5]
  i756.returnTime = i757[6]
  i756.Tool_Offset = new pc.Vec3( i757[7], i757[8], i757[9] )
  i756.canScaleIncrease = !!i757[10]
  i756.Self_ScaleNew = new pc.Vec3( i757[11], i757[12], i757[13] )
  i756.canRotateOnPick = !!i757[14]
  i756.startRot = new pc.Vec3( i757[15], i757[16], i757[17] )
  i756.newRot = new pc.Vec3( i757[18], i757[19], i757[20] )
  var i759 = i757[21]
  var i758 = []
  for(var i = 0; i < i759.length; i += 2) {
  request.r(i759[i + 0], i759[i + 1], 2, i758, '')
  }
  i756.childSprite = i758
  request.r(i757[22], i757[23], 0, i756, 'ToolSelectClip')
  request.r(i757[24], i757[25], 0, i756, 'ToolLoopClip')
  request.r(i757[26], i757[27], 0, i756, 'thisParticles')
  i756.onDragparticle = !!i757[28]
  request.r(i757[29], i757[30], 0, i756, 'dragParticles')
  request.r(i757[31], i757[32], 0, i756, 'anim')
  i756.startPos = new pc.Vec3( i757[33], i757[34], i757[35] )
  i756.startScale = new pc.Vec3( i757[36], i757[37], i757[38] )
  i756.Vibration = !!i757[39]
  i756.isPlacedCannotMove = !!i757[40]
  i756.isObjectMovingWhileDragging = !!i757[41]
  i756.OnMouseDownEvent = request.d('System.Action', i757[42], i756.OnMouseDownEvent)
  i756.OnMouseUpEvent = request.d('System.Action', i757[43], i756.OnMouseUpEvent)
  i756.ProgStartEvent = request.d('System.Action', i757[44], i756.ProgStartEvent)
  i756.ProgEndEvent = request.d('System.Action', i757[45], i756.ProgEndEvent)
  i756.canCallMouseUpWhenGamePaused = !!i757[46]
  i756.ClampX_L = i757[47]
  i756.ClampX_H = i757[48]
  i756.ClampY_L = i757[49]
  i756.ClampY_H = i757[50]
  i756.startOrder = i757[51]
  i756.dontResetItIsInCollider = !!i757[52]
  request.r(i757[53], i757[54], 0, i756, 'thisCollider')
  request.r(i757[55], i757[56], 0, i756, 'thisSR')
  i756.OnMouseDownEventIndependentFromCanDrag = request.d('System.Action', i757[57], i756.OnMouseDownEventIndependentFromCanDrag)
  return i756
}

Deserializers["System.Action"] = function (request, data, root) {
  var i760 = root || request.c( 'System.Action' )
  var i761 = data
  return i760
}

Deserializers["BD_Progress"] = function (request, data, root) {
  var i762 = root || request.c( 'BD_Progress' )
  var i763 = data
  var i765 = i763[0]
  var i764 = []
  for(var i = 0; i < i765.length; i += 1) {
    i764.push( request.d('ScratchData', i765[i + 0]) );
  }
  i762.AllScratches = i764
  i762.OnScratchComplete = request.d('UnityEngine.Events.UnityEvent', i763[1], i762.OnScratchComplete)
  i762.isProgDone = !!i763[2]
  i762.canCallComplete = !!i763[3]
  i762.CollectiveAppear = !!i763[4]
  i762.tipControl = !!i763[5]
  i762.progressControl = !!i763[6]
  request.r(i763[7], i763[8], 0, i762, 'thisDrag')
  i762.CompleteEvent = request.d('System.Action', i763[9], i762.CompleteEvent)
  i762.SubCompleteEvent = request.d('System.Action', i763[10], i762.SubCompleteEvent)
  return i762
}

Deserializers["ScratchData"] = function (request, data, root) {
  var i768 = root || request.c( 'ScratchData' )
  var i769 = data
  request.r(i769[0], i769[1], 0, i768, 'ScratchManager')
  i768.scratchLimit = i769[2]
  i768.isComplete = !!i769[3]
  return i768
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i770 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i771 = data
  request.r(i771[0], i771[1], 0, i770, 'm_ObjectArgument')
  i770.m_ObjectArgumentAssemblyTypeName = i771[2]
  i770.m_IntArgument = i771[3]
  i770.m_FloatArgument = i771[4]
  i770.m_StringArgument = i771[5]
  i770.m_BoolArgument = !!i771[6]
  return i770
}

Deserializers["BD_Clamp"] = function (request, data, root) {
  var i772 = root || request.c( 'BD_Clamp' )
  var i773 = data
  i772.ClampX_L = i773[0]
  i772.ClampX_H = i773[1]
  i772.ClampY_L = i773[2]
  i772.ClampY_H = i773[3]
  return i772
}

Deserializers["BD_ToolRotate"] = function (request, data, root) {
  var i774 = root || request.c( 'BD_ToolRotate' )
  var i775 = data
  i774.startDelay = i775[0]
  request.r(i775[1], i775[2], 0, i774, 'Tool')
  request.r(i775[3], i775[4], 0, i774, 'Clamp')
  request.r(i775[5], i775[6], 0, i774, 'Pivot')
  i774.MinAngle = new pc.Vec3( i775[7], i775[8], i775[9] )
  i774.MaxAngle = new pc.Vec3( i775[10], i775[11], i775[12] )
  i774.rotationSpeed = i775[13]
  return i774
}

Deserializers["BD_CameraFollow"] = function (request, data, root) {
  var i776 = root || request.c( 'BD_CameraFollow' )
  var i777 = data
  request.r(i777[0], i777[1], 0, i776, 'Tool')
  request.r(i777[2], i777[3], 0, i776, 'Pivot')
  i776.FOV = i777[4]
  i776.Y_L = i777[5]
  i776.Y_H = i777[6]
  i776.X_L = i777[7]
  i776.X_R = i777[8]
  i776.startDelay = i777[9]
  i776.duration = i777[10]
  return i776
}

Deserializers["BD_Audio"] = function (request, data, root) {
  var i778 = root || request.c( 'BD_Audio' )
  var i779 = data
  request.r(i779[0], i779[1], 0, i778, 'BD')
  request.r(i779[2], i779[3], 0, i778, 'Source')
  i778.shouldRestart = !!i779[4]
  i778.startVol = i779[5]
  i778.targetVol = i779[6]
  i778.duration = i779[7]
  i778.startDelay = i779[8]
  return i778
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D"] = function (request, data, root) {
  var i780 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D' )
  var i781 = data
  i780.usedByComposite = !!i781[0]
  i780.autoTiling = !!i781[1]
  i780.size = new pc.Vec2( i781[2], i781[3] )
  i780.edgeRadius = i781[4]
  i780.enabled = !!i781[5]
  i780.isTrigger = !!i781[6]
  i780.usedByEffector = !!i781[7]
  i780.density = i781[8]
  i780.offset = new pc.Vec2( i781[9], i781[10] )
  request.r(i781[11], i781[12], 0, i780, 'material')
  return i780
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animator"] = function (request, data, root) {
  var i782 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animator' )
  var i783 = data
  request.r(i783[0], i783[1], 0, i782, 'animatorController')
  request.r(i783[2], i783[3], 0, i782, 'avatar')
  i782.updateMode = i783[4]
  i782.hasTransformHierarchy = !!i783[5]
  i782.applyRootMotion = !!i783[6]
  var i785 = i783[7]
  var i784 = []
  for(var i = 0; i < i785.length; i += 2) {
  request.r(i785[i + 0], i785[i + 1], 2, i784, '')
  }
  i782.humanBones = i784
  i782.enabled = !!i783[8]
  return i782
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystem"] = function (request, data, root) {
  var i788 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystem' )
  var i789 = data
  i788.main = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule', i789[0], i788.main)
  i788.colorBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule', i789[1], i788.colorBySpeed)
  i788.colorOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule', i789[2], i788.colorOverLifetime)
  i788.emission = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule', i789[3], i788.emission)
  i788.rotationBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule', i789[4], i788.rotationBySpeed)
  i788.rotationOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule', i789[5], i788.rotationOverLifetime)
  i788.shape = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule', i789[6], i788.shape)
  i788.sizeBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule', i789[7], i788.sizeBySpeed)
  i788.sizeOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule', i789[8], i788.sizeOverLifetime)
  i788.textureSheetAnimation = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule', i789[9], i788.textureSheetAnimation)
  i788.velocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule', i789[10], i788.velocityOverLifetime)
  i788.noise = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule', i789[11], i788.noise)
  i788.inheritVelocity = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule', i789[12], i788.inheritVelocity)
  i788.forceOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule', i789[13], i788.forceOverLifetime)
  i788.limitVelocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule', i789[14], i788.limitVelocityOverLifetime)
  i788.useAutoRandomSeed = !!i789[15]
  i788.randomSeed = i789[16]
  return i788
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule"] = function (request, data, root) {
  var i790 = root || new pc.ParticleSystemMain()
  var i791 = data
  i790.duration = i791[0]
  i790.loop = !!i791[1]
  i790.prewarm = !!i791[2]
  i790.startDelay = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i791[3], i790.startDelay)
  i790.startLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i791[4], i790.startLifetime)
  i790.startSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i791[5], i790.startSpeed)
  i790.startSize3D = !!i791[6]
  i790.startSizeX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i791[7], i790.startSizeX)
  i790.startSizeY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i791[8], i790.startSizeY)
  i790.startSizeZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i791[9], i790.startSizeZ)
  i790.startRotation3D = !!i791[10]
  i790.startRotationX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i791[11], i790.startRotationX)
  i790.startRotationY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i791[12], i790.startRotationY)
  i790.startRotationZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i791[13], i790.startRotationZ)
  i790.startColor = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i791[14], i790.startColor)
  i790.gravityModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i791[15], i790.gravityModifier)
  i790.simulationSpace = i791[16]
  request.r(i791[17], i791[18], 0, i790, 'customSimulationSpace')
  i790.simulationSpeed = i791[19]
  i790.useUnscaledTime = !!i791[20]
  i790.scalingMode = i791[21]
  i790.playOnAwake = !!i791[22]
  i790.maxParticles = i791[23]
  i790.emitterVelocityMode = i791[24]
  i790.stopAction = i791[25]
  return i790
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve"] = function (request, data, root) {
  var i792 = root || new pc.MinMaxCurve()
  var i793 = data
  i792.mode = i793[0]
  i792.curveMin = new pc.AnimationCurve( { keys_flow: i793[1] } )
  i792.curveMax = new pc.AnimationCurve( { keys_flow: i793[2] } )
  i792.curveMultiplier = i793[3]
  i792.constantMin = i793[4]
  i792.constantMax = i793[5]
  return i792
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient"] = function (request, data, root) {
  var i794 = root || new pc.MinMaxGradient()
  var i795 = data
  i794.mode = i795[0]
  i794.gradientMin = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i795[1], i794.gradientMin)
  i794.gradientMax = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i795[2], i794.gradientMax)
  i794.colorMin = new pc.Color(i795[3], i795[4], i795[5], i795[6])
  i794.colorMax = new pc.Color(i795[7], i795[8], i795[9], i795[10])
  return i794
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient"] = function (request, data, root) {
  var i796 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient' )
  var i797 = data
  i796.mode = i797[0]
  var i799 = i797[1]
  var i798 = []
  for(var i = 0; i < i799.length; i += 1) {
    i798.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey', i799[i + 0]) );
  }
  i796.colorKeys = i798
  var i801 = i797[2]
  var i800 = []
  for(var i = 0; i < i801.length; i += 1) {
    i800.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey', i801[i + 0]) );
  }
  i796.alphaKeys = i800
  return i796
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule"] = function (request, data, root) {
  var i802 = root || new pc.ParticleSystemColorBySpeed()
  var i803 = data
  i802.enabled = !!i803[0]
  i802.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i803[1], i802.color)
  i802.range = new pc.Vec2( i803[2], i803[3] )
  return i802
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey"] = function (request, data, root) {
  var i806 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey' )
  var i807 = data
  i806.color = new pc.Color(i807[0], i807[1], i807[2], i807[3])
  i806.time = i807[4]
  return i806
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey"] = function (request, data, root) {
  var i810 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey' )
  var i811 = data
  i810.alpha = i811[0]
  i810.time = i811[1]
  return i810
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule"] = function (request, data, root) {
  var i812 = root || new pc.ParticleSystemColorOverLifetime()
  var i813 = data
  i812.enabled = !!i813[0]
  i812.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i813[1], i812.color)
  return i812
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule"] = function (request, data, root) {
  var i814 = root || new pc.ParticleSystemEmitter()
  var i815 = data
  i814.enabled = !!i815[0]
  i814.rateOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i815[1], i814.rateOverTime)
  i814.rateOverDistance = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i815[2], i814.rateOverDistance)
  var i817 = i815[3]
  var i816 = []
  for(var i = 0; i < i817.length; i += 1) {
    i816.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst', i817[i + 0]) );
  }
  i814.bursts = i816
  return i814
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst"] = function (request, data, root) {
  var i820 = root || new pc.ParticleSystemBurst()
  var i821 = data
  i820.count = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i821[0], i820.count)
  i820.cycleCount = i821[1]
  i820.minCount = i821[2]
  i820.maxCount = i821[3]
  i820.repeatInterval = i821[4]
  i820.time = i821[5]
  return i820
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule"] = function (request, data, root) {
  var i822 = root || new pc.ParticleSystemRotationBySpeed()
  var i823 = data
  i822.enabled = !!i823[0]
  i822.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i823[1], i822.x)
  i822.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i823[2], i822.y)
  i822.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i823[3], i822.z)
  i822.separateAxes = !!i823[4]
  i822.range = new pc.Vec2( i823[5], i823[6] )
  return i822
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule"] = function (request, data, root) {
  var i824 = root || new pc.ParticleSystemRotationOverLifetime()
  var i825 = data
  i824.enabled = !!i825[0]
  i824.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i825[1], i824.x)
  i824.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i825[2], i824.y)
  i824.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i825[3], i824.z)
  i824.separateAxes = !!i825[4]
  return i824
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule"] = function (request, data, root) {
  var i826 = root || new pc.ParticleSystemShape()
  var i827 = data
  i826.enabled = !!i827[0]
  i826.shapeType = i827[1]
  i826.randomDirectionAmount = i827[2]
  i826.sphericalDirectionAmount = i827[3]
  i826.randomPositionAmount = i827[4]
  i826.alignToDirection = !!i827[5]
  i826.radius = i827[6]
  i826.radiusMode = i827[7]
  i826.radiusSpread = i827[8]
  i826.radiusSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i827[9], i826.radiusSpeed)
  i826.radiusThickness = i827[10]
  i826.angle = i827[11]
  i826.length = i827[12]
  i826.boxThickness = new pc.Vec3( i827[13], i827[14], i827[15] )
  i826.meshShapeType = i827[16]
  request.r(i827[17], i827[18], 0, i826, 'mesh')
  request.r(i827[19], i827[20], 0, i826, 'meshRenderer')
  request.r(i827[21], i827[22], 0, i826, 'skinnedMeshRenderer')
  i826.useMeshMaterialIndex = !!i827[23]
  i826.meshMaterialIndex = i827[24]
  i826.useMeshColors = !!i827[25]
  i826.normalOffset = i827[26]
  i826.arc = i827[27]
  i826.arcMode = i827[28]
  i826.arcSpread = i827[29]
  i826.arcSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i827[30], i826.arcSpeed)
  i826.donutRadius = i827[31]
  i826.position = new pc.Vec3( i827[32], i827[33], i827[34] )
  i826.rotation = new pc.Vec3( i827[35], i827[36], i827[37] )
  i826.scale = new pc.Vec3( i827[38], i827[39], i827[40] )
  return i826
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule"] = function (request, data, root) {
  var i828 = root || new pc.ParticleSystemSizeBySpeed()
  var i829 = data
  i828.enabled = !!i829[0]
  i828.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i829[1], i828.x)
  i828.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i829[2], i828.y)
  i828.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i829[3], i828.z)
  i828.separateAxes = !!i829[4]
  i828.range = new pc.Vec2( i829[5], i829[6] )
  return i828
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule"] = function (request, data, root) {
  var i830 = root || new pc.ParticleSystemSizeOverLifetime()
  var i831 = data
  i830.enabled = !!i831[0]
  i830.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i831[1], i830.x)
  i830.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i831[2], i830.y)
  i830.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i831[3], i830.z)
  i830.separateAxes = !!i831[4]
  return i830
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule"] = function (request, data, root) {
  var i832 = root || new pc.ParticleSystemTextureSheetAnimation()
  var i833 = data
  i832.enabled = !!i833[0]
  i832.mode = i833[1]
  i832.animation = i833[2]
  i832.numTilesX = i833[3]
  i832.numTilesY = i833[4]
  i832.useRandomRow = !!i833[5]
  i832.frameOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i833[6], i832.frameOverTime)
  i832.startFrame = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i833[7], i832.startFrame)
  i832.cycleCount = i833[8]
  i832.rowIndex = i833[9]
  i832.flipU = i833[10]
  i832.flipV = i833[11]
  i832.spriteCount = i833[12]
  var i835 = i833[13]
  var i834 = []
  for(var i = 0; i < i835.length; i += 2) {
  request.r(i835[i + 0], i835[i + 1], 2, i834, '')
  }
  i832.sprites = i834
  return i832
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule"] = function (request, data, root) {
  var i838 = root || new pc.ParticleSystemVelocityOverLifetime()
  var i839 = data
  i838.enabled = !!i839[0]
  i838.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i839[1], i838.x)
  i838.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i839[2], i838.y)
  i838.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i839[3], i838.z)
  i838.radial = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i839[4], i838.radial)
  i838.speedModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i839[5], i838.speedModifier)
  i838.space = i839[6]
  i838.orbitalX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i839[7], i838.orbitalX)
  i838.orbitalY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i839[8], i838.orbitalY)
  i838.orbitalZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i839[9], i838.orbitalZ)
  i838.orbitalOffsetX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i839[10], i838.orbitalOffsetX)
  i838.orbitalOffsetY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i839[11], i838.orbitalOffsetY)
  i838.orbitalOffsetZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i839[12], i838.orbitalOffsetZ)
  return i838
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule"] = function (request, data, root) {
  var i840 = root || new pc.ParticleSystemNoise()
  var i841 = data
  i840.enabled = !!i841[0]
  i840.separateAxes = !!i841[1]
  i840.strengthX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i841[2], i840.strengthX)
  i840.strengthY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i841[3], i840.strengthY)
  i840.strengthZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i841[4], i840.strengthZ)
  i840.frequency = i841[5]
  i840.damping = !!i841[6]
  i840.octaveCount = i841[7]
  i840.octaveMultiplier = i841[8]
  i840.octaveScale = i841[9]
  i840.quality = i841[10]
  i840.scrollSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i841[11], i840.scrollSpeed)
  i840.scrollSpeedMultiplier = i841[12]
  i840.remapEnabled = !!i841[13]
  i840.remapX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i841[14], i840.remapX)
  i840.remapY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i841[15], i840.remapY)
  i840.remapZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i841[16], i840.remapZ)
  i840.positionAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i841[17], i840.positionAmount)
  i840.rotationAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i841[18], i840.rotationAmount)
  i840.sizeAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i841[19], i840.sizeAmount)
  return i840
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule"] = function (request, data, root) {
  var i842 = root || new pc.ParticleSystemInheritVelocity()
  var i843 = data
  i842.enabled = !!i843[0]
  i842.mode = i843[1]
  i842.curve = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i843[2], i842.curve)
  return i842
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule"] = function (request, data, root) {
  var i844 = root || new pc.ParticleSystemForceOverLifetime()
  var i845 = data
  i844.enabled = !!i845[0]
  i844.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i845[1], i844.x)
  i844.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i845[2], i844.y)
  i844.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i845[3], i844.z)
  i844.space = i845[4]
  i844.randomized = !!i845[5]
  return i844
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule"] = function (request, data, root) {
  var i846 = root || new pc.ParticleSystemLimitVelocityOverLifetime()
  var i847 = data
  i846.enabled = !!i847[0]
  i846.limit = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i847[1], i846.limit)
  i846.limitX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i847[2], i846.limitX)
  i846.limitY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i847[3], i846.limitY)
  i846.limitZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i847[4], i846.limitZ)
  i846.dampen = i847[5]
  i846.separateAxes = !!i847[6]
  i846.space = i847[7]
  i846.drag = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i847[8], i846.drag)
  i846.multiplyDragByParticleSize = !!i847[9]
  i846.multiplyDragByParticleVelocity = !!i847[10]
  return i846
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer"] = function (request, data, root) {
  var i848 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer' )
  var i849 = data
  request.r(i849[0], i849[1], 0, i848, 'mesh')
  i848.meshCount = i849[2]
  i848.activeVertexStreamsCount = i849[3]
  i848.alignment = i849[4]
  i848.renderMode = i849[5]
  i848.sortMode = i849[6]
  i848.lengthScale = i849[7]
  i848.velocityScale = i849[8]
  i848.cameraVelocityScale = i849[9]
  i848.normalDirection = i849[10]
  i848.sortingFudge = i849[11]
  i848.minParticleSize = i849[12]
  i848.maxParticleSize = i849[13]
  i848.pivot = new pc.Vec3( i849[14], i849[15], i849[16] )
  request.r(i849[17], i849[18], 0, i848, 'trailMaterial')
  i848.applyActiveColorSpace = !!i849[19]
  i848.enabled = !!i849[20]
  request.r(i849[21], i849[22], 0, i848, 'sharedMaterial')
  var i851 = i849[23]
  var i850 = []
  for(var i = 0; i < i851.length; i += 2) {
  request.r(i851[i + 0], i851[i + 1], 2, i850, '')
  }
  i848.sharedMaterials = i850
  i848.receiveShadows = !!i849[24]
  i848.shadowCastingMode = i849[25]
  i848.sortingLayerID = i849[26]
  i848.sortingOrder = i849[27]
  i848.lightmapIndex = i849[28]
  i848.lightmapSceneIndex = i849[29]
  i848.lightmapScaleOffset = new pc.Vec4( i849[30], i849[31], i849[32], i849[33] )
  i848.lightProbeUsage = i849[34]
  i848.reflectionProbeUsage = i849[35]
  return i848
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D"] = function (request, data, root) {
  var i852 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D' )
  var i853 = data
  i852.bodyType = i853[0]
  request.r(i853[1], i853[2], 0, i852, 'material')
  i852.simulated = !!i853[3]
  i852.useAutoMass = !!i853[4]
  i852.mass = i853[5]
  i852.drag = i853[6]
  i852.angularDrag = i853[7]
  i852.gravityScale = i853[8]
  i852.collisionDetectionMode = i853[9]
  i852.sleepMode = i853[10]
  i852.constraints = i853[11]
  return i852
}

Deserializers["UnityEngine.U2D.Animation.SpriteSkin"] = function (request, data, root) {
  var i854 = root || request.c( 'UnityEngine.U2D.Animation.SpriteSkin' )
  var i855 = data
  request.r(i855[0], i855[1], 0, i854, 'm_RootBone')
  var i857 = i855[2]
  var i856 = []
  for(var i = 0; i < i857.length; i += 2) {
  request.r(i857[i + 0], i857[i + 1], 2, i856, '')
  }
  i854.m_BoneTransforms = i856
  i854.m_AlwaysUpdate = !!i855[3]
  i854.m_AutoRebind = !!i855[4]
  return i854
}

Deserializers["BD_SpriteChange"] = function (request, data, root) {
  var i858 = root || request.c( 'BD_SpriteChange' )
  var i859 = data
  request.r(i859[0], i859[1], 0, i858, 'BD')
  request.r(i859[2], i859[3], 0, i858, 'SR')
  request.r(i859[4], i859[5], 0, i858, 'Default')
  request.r(i859[6], i859[7], 0, i858, 'Picked')
  i858.resetOnRelease = !!i859[8]
  return i858
}

Deserializers["InteractableBones"] = function (request, data, root) {
  var i860 = root || request.c( 'InteractableBones' )
  var i861 = data
  request.r(i861[0], i861[1], 0, i860, 'Tip')
  i860.MoveAmount = i861[2]
  i860.MoveSpeed = i861[3]
  i860.ShakeSpeed = i861[4]
  i860.MovementThreshold = i861[5]
  i860.MoveX = !!i861[6]
  i860.MoveY = !!i861[7]
  return i860
}

Deserializers["ActionOnTap"] = function (request, data, root) {
  var i862 = root || request.c( 'ActionOnTap' )
  var i863 = data
  i862.OnTap = request.d('UnityEngine.Events.UnityEvent', i863[0], i862.OnTap)
  return i862
}

Deserializers["DG.Tweening.DOTweenAnimation"] = function (request, data, root) {
  var i864 = root || request.c( 'DG.Tweening.DOTweenAnimation' )
  var i865 = data
  i864.targetIsSelf = !!i865[0]
  request.r(i865[1], i865[2], 0, i864, 'targetGO')
  i864.tweenTargetIsTargetGO = !!i865[3]
  i864.delay = i865[4]
  i864.duration = i865[5]
  i864.easeType = i865[6]
  i864.easeCurve = new pc.AnimationCurve( { keys_flow: i865[7] } )
  i864.loopType = i865[8]
  i864.loops = i865[9]
  i864.id = i865[10]
  i864.isRelative = !!i865[11]
  i864.isFrom = !!i865[12]
  i864.isIndependentUpdate = !!i865[13]
  i864.autoKill = !!i865[14]
  i864.autoGenerate = !!i865[15]
  i864.isActive = !!i865[16]
  i864.isValid = !!i865[17]
  request.r(i865[18], i865[19], 0, i864, 'target')
  i864.animationType = i865[20]
  i864.targetType = i865[21]
  i864.forcedTargetType = i865[22]
  i864.autoPlay = !!i865[23]
  i864.useTargetAsV3 = !!i865[24]
  i864.endValueFloat = i865[25]
  i864.endValueV3 = new pc.Vec3( i865[26], i865[27], i865[28] )
  i864.endValueV2 = new pc.Vec2( i865[29], i865[30] )
  i864.endValueColor = new pc.Color(i865[31], i865[32], i865[33], i865[34])
  i864.endValueString = i865[35]
  i864.endValueRect = UnityEngine.Rect.MinMaxRect(i865[36], i865[37], i865[38], i865[39])
  request.r(i865[40], i865[41], 0, i864, 'endValueTransform')
  i864.optionalBool0 = !!i865[42]
  i864.optionalBool1 = !!i865[43]
  i864.optionalFloat0 = i865[44]
  i864.optionalInt0 = i865[45]
  i864.optionalRotationMode = i865[46]
  i864.optionalScrambleMode = i865[47]
  i864.optionalShakeRandomnessMode = i865[48]
  i864.optionalString = i865[49]
  i864.updateType = i865[50]
  i864.isSpeedBased = !!i865[51]
  i864.hasOnStart = !!i865[52]
  i864.hasOnPlay = !!i865[53]
  i864.hasOnUpdate = !!i865[54]
  i864.hasOnStepComplete = !!i865[55]
  i864.hasOnComplete = !!i865[56]
  i864.hasOnTweenCreated = !!i865[57]
  i864.hasOnRewind = !!i865[58]
  i864.onStart = request.d('UnityEngine.Events.UnityEvent', i865[59], i864.onStart)
  i864.onPlay = request.d('UnityEngine.Events.UnityEvent', i865[60], i864.onPlay)
  i864.onUpdate = request.d('UnityEngine.Events.UnityEvent', i865[61], i864.onUpdate)
  i864.onStepComplete = request.d('UnityEngine.Events.UnityEvent', i865[62], i864.onStepComplete)
  i864.onComplete = request.d('UnityEngine.Events.UnityEvent', i865[63], i864.onComplete)
  i864.onTweenCreated = request.d('UnityEngine.Events.UnityEvent', i865[64], i864.onTweenCreated)
  i864.onRewind = request.d('UnityEngine.Events.UnityEvent', i865[65], i864.onRewind)
  return i864
}

Deserializers["DestroyObj"] = function (request, data, root) {
  var i866 = root || request.c( 'DestroyObj' )
  var i867 = data
  i866.destroyDelay = i867[0]
  return i866
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Cubemap"] = function (request, data, root) {
  var i868 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Cubemap' )
  var i869 = data
  i868.name = i869[0]
  i868.atlasId = i869[1]
  i868.mipmapCount = i869[2]
  i868.hdr = !!i869[3]
  i868.size = i869[4]
  i868.anisoLevel = i869[5]
  i868.filterMode = i869[6]
  var i871 = i869[7]
  var i870 = []
  for(var i = 0; i < i871.length; i += 4) {
    i870.push( UnityEngine.Rect.MinMaxRect(i871[i + 0], i871[i + 1], i871[i + 2], i871[i + 3]) );
  }
  i868.rects = i870
  i868.wrapU = i869[8]
  i868.wrapV = i869[9]
  return i868
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i874 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i875 = data
  i874.name = i875[0]
  i874.index = i875[1]
  i874.startup = !!i875[2]
  return i874
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i876 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i877 = data
  i876.aspect = i877[0]
  i876.orthographic = !!i877[1]
  i876.orthographicSize = i877[2]
  i876.backgroundColor = new pc.Color(i877[3], i877[4], i877[5], i877[6])
  i876.nearClipPlane = i877[7]
  i876.farClipPlane = i877[8]
  i876.fieldOfView = i877[9]
  i876.depth = i877[10]
  i876.clearFlags = i877[11]
  i876.cullingMask = i877[12]
  i876.rect = i877[13]
  request.r(i877[14], i877[15], 0, i876, 'targetTexture')
  i876.usePhysicalProperties = !!i877[16]
  i876.focalLength = i877[17]
  i876.sensorSize = new pc.Vec2( i877[18], i877[19] )
  i876.lensShift = new pc.Vec2( i877[20], i877[21] )
  i876.gateFit = i877[22]
  i876.commandBufferCount = i877[23]
  i876.cameraType = i877[24]
  i876.enabled = !!i877[25]
  return i876
}

Deserializers["CameraController"] = function (request, data, root) {
  var i878 = root || request.c( 'CameraController' )
  var i879 = data
  request.r(i879[0], i879[1], 0, i878, 'cam')
  i878.defaultPosition = new pc.Vec3( i879[2], i879[3], i879[4] )
  i878.defaultSize = i879[5]
  i878.defaultFOV = i879[6]
  i878.defaultDuration = i879[7]
  i878.defaultEase = i879[8]
  return i878
}

Deserializers["MusicSource"] = function (request, data, root) {
  var i880 = root || request.c( 'MusicSource' )
  var i881 = data
  request.r(i881[0], i881[1], 0, i880, 'source')
  return i880
}

Deserializers["UI_Manager"] = function (request, data, root) {
  var i882 = root || request.c( 'UI_Manager' )
  var i883 = data
  i882.levelCompleted = !!i883[0]
  i882.isPauseActive = !!i883[1]
  i882.loadIndex = i883[2]
  request.r(i883[3], i883[4], 0, i882, 'removeAdsButton')
  request.r(i883[5], i883[6], 0, i882, 'pauseButton')
  request.r(i883[7], i883[8], 0, i882, 'Fade_Img')
  request.r(i883[9], i883[10], 0, i882, 'TopBarAnim')
  request.r(i883[11], i883[12], 0, i882, 'MainPanel')
  request.r(i883[13], i883[14], 0, i882, 'PausePanel')
  request.r(i883[15], i883[16], 0, i882, 'PausePopUp')
  request.r(i883[17], i883[18], 0, i882, 'PauseCanvasGroup')
  request.r(i883[19], i883[20], 0, i882, 'RateUsPanel')
  request.r(i883[21], i883[22], 0, i882, 'RateUsPopUp')
  request.r(i883[23], i883[24], 0, i882, 'RemoveAdsPanel')
  request.r(i883[25], i883[26], 0, i882, 'RemoveAdsPopUp')
  request.r(i883[27], i883[28], 0, i882, 'RemoveAdsCanvasGroup')
  var i885 = i883[29]
  var i884 = []
  for(var i = 0; i < i885.length; i += 2) {
  request.r(i885[i + 0], i885[i + 1], 2, i884, '')
  }
  i882.RemoveAdsAnims = i884
  request.r(i883[30], i883[31], 0, i882, 'CompletePanel')
  request.r(i883[32], i883[33], 0, i882, 'LevelIcon')
  request.r(i883[34], i883[35], 0, i882, 'CompleteParticles')
  request.r(i883[36], i883[37], 0, i882, 'progressBar')
  request.r(i883[38], i883[39], 0, i882, 'progressText')
  request.r(i883[40], i883[41], 0, i882, 'toolIcon1')
  request.r(i883[42], i883[43], 0, i882, 'toolIcon2')
  request.r(i883[44], i883[45], 0, i882, 'toolIcon3')
  request.r(i883[46], i883[47], 0, i882, 'target1')
  request.r(i883[48], i883[49], 0, i882, 'target2')
  i882.toolMoveDuration = i883[50]
  i882.currentIndex = i883[51]
  var i887 = i883[52]
  var i886 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Sprite')))
  for(var i = 0; i < i887.length; i += 2) {
  request.r(i887[i + 0], i887[i + 1], 1, i886, '')
  }
  i882.allTools = i886
  request.r(i883[53], i883[54], 0, i882, 'clockProgress')
  request.r(i883[55], i883[56], 0, i882, 'clockProgressFill')
  request.r(i883[57], i883[58], 0, i882, 'clockAudio')
  i882.moveDistance = i883[59]
  i882.animationDuration = i883[60]
  i882.greyBgChildName = i883[61]
  i882.pushOffset = i883[62]
  return i882
}

Deserializers["GameManagerPlayable"] = function (request, data, root) {
  var i890 = root || request.c( 'GameManagerPlayable' )
  var i891 = data
  request.r(i891[0], i891[1], 0, i890, 'DefaultMat')
  request.r(i891[2], i891[3], 0, i890, 'BG_Music')
  request.r(i891[4], i891[5], 0, i890, 'restoreEffectShader')
  request.r(i891[6], i891[7], 0, i890, 'stickerEffectShader')
  i890.isComplete = !!i891[8]
  i890.isPaused = !!i891[9]
  request.r(i891[10], i891[11], 0, i890, 'currentLevel')
  return i890
}

Deserializers["AudioController"] = function (request, data, root) {
  var i892 = root || request.c( 'AudioController' )
  var i893 = data
  request.r(i893[0], i893[1], 0, i892, 'MainMixer')
  request.r(i893[2], i893[3], 0, i892, 'UiClick')
  request.r(i893[4], i893[5], 0, i892, 'UiClickSource')
  var i895 = i893[6]
  var i894 = []
  for(var i = 0; i < i895.length; i += 2) {
  request.r(i895[i + 0], i895[i + 1], 2, i894, '')
  }
  i892.SfxSources = i894
  var i897 = i893[7]
  var i896 = []
  for(var i = 0; i < i897.length; i += 2) {
  request.r(i897[i + 0], i897[i + 1], 2, i896, '')
  }
  i892.AllClips = i896
  return i892
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i900 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i901 = data
  i900.pivot = new pc.Vec2( i901[0], i901[1] )
  i900.anchorMin = new pc.Vec2( i901[2], i901[3] )
  i900.anchorMax = new pc.Vec2( i901[4], i901[5] )
  i900.sizeDelta = new pc.Vec2( i901[6], i901[7] )
  i900.anchoredPosition3D = new pc.Vec3( i901[8], i901[9], i901[10] )
  i900.rotation = new pc.Quat(i901[11], i901[12], i901[13], i901[14])
  i900.scale = new pc.Vec3( i901[15], i901[16], i901[17] )
  return i900
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i902 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i903 = data
  i902.planeDistance = i903[0]
  i902.referencePixelsPerUnit = i903[1]
  i902.isFallbackOverlay = !!i903[2]
  i902.renderMode = i903[3]
  i902.renderOrder = i903[4]
  i902.sortingLayerName = i903[5]
  i902.sortingOrder = i903[6]
  i902.scaleFactor = i903[7]
  request.r(i903[8], i903[9], 0, i902, 'worldCamera')
  i902.overrideSorting = !!i903[10]
  i902.pixelPerfect = !!i903[11]
  i902.targetDisplay = i903[12]
  i902.overridePixelPerfect = !!i903[13]
  i902.enabled = !!i903[14]
  return i902
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i904 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i905 = data
  i904.m_UiScaleMode = i905[0]
  i904.m_ReferencePixelsPerUnit = i905[1]
  i904.m_ScaleFactor = i905[2]
  i904.m_ReferenceResolution = new pc.Vec2( i905[3], i905[4] )
  i904.m_ScreenMatchMode = i905[5]
  i904.m_MatchWidthOrHeight = i905[6]
  i904.m_PhysicalUnit = i905[7]
  i904.m_FallbackScreenDPI = i905[8]
  i904.m_DefaultSpriteDPI = i905[9]
  i904.m_DynamicPixelsPerUnit = i905[10]
  i904.m_PresetInfoIsWorld = !!i905[11]
  return i904
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i906 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i907 = data
  i906.m_IgnoreReversedGraphics = !!i907[0]
  i906.m_BlockingObjects = i907[1]
  i906.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i907[2] )
  return i906
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i908 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i909 = data
  i908.cullTransparentMesh = !!i909[0]
  return i908
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i910 = root || request.c( 'UnityEngine.UI.Image' )
  var i911 = data
  request.r(i911[0], i911[1], 0, i910, 'm_Sprite')
  i910.m_Type = i911[2]
  i910.m_PreserveAspect = !!i911[3]
  i910.m_FillCenter = !!i911[4]
  i910.m_FillMethod = i911[5]
  i910.m_FillAmount = i911[6]
  i910.m_FillClockwise = !!i911[7]
  i910.m_FillOrigin = i911[8]
  i910.m_UseSpriteMesh = !!i911[9]
  i910.m_PixelsPerUnitMultiplier = i911[10]
  request.r(i911[11], i911[12], 0, i910, 'm_Material')
  i910.m_Maskable = !!i911[13]
  i910.m_Color = new pc.Color(i911[14], i911[15], i911[16], i911[17])
  i910.m_RaycastTarget = !!i911[18]
  i910.m_RaycastPadding = new pc.Vec4( i911[19], i911[20], i911[21], i911[22] )
  return i910
}

Deserializers["UnityEngine.UI.Text"] = function (request, data, root) {
  var i912 = root || request.c( 'UnityEngine.UI.Text' )
  var i913 = data
  i912.m_FontData = request.d('UnityEngine.UI.FontData', i913[0], i912.m_FontData)
  i912.m_Text = i913[1]
  request.r(i913[2], i913[3], 0, i912, 'm_Material')
  i912.m_Maskable = !!i913[4]
  i912.m_Color = new pc.Color(i913[5], i913[6], i913[7], i913[8])
  i912.m_RaycastTarget = !!i913[9]
  i912.m_RaycastPadding = new pc.Vec4( i913[10], i913[11], i913[12], i913[13] )
  return i912
}

Deserializers["UnityEngine.UI.FontData"] = function (request, data, root) {
  var i914 = root || request.c( 'UnityEngine.UI.FontData' )
  var i915 = data
  request.r(i915[0], i915[1], 0, i914, 'm_Font')
  i914.m_FontSize = i915[2]
  i914.m_FontStyle = i915[3]
  i914.m_BestFit = !!i915[4]
  i914.m_MinSize = i915[5]
  i914.m_MaxSize = i915[6]
  i914.m_Alignment = i915[7]
  i914.m_AlignByGeometry = !!i915[8]
  i914.m_RichText = !!i915[9]
  i914.m_HorizontalOverflow = i915[10]
  i914.m_VerticalOverflow = i915[11]
  i914.m_LineSpacing = i915[12]
  return i914
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i916 = root || request.c( 'UnityEngine.UI.Button' )
  var i917 = data
  i916.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i917[0], i916.m_OnClick)
  i916.m_Navigation = request.d('UnityEngine.UI.Navigation', i917[1], i916.m_Navigation)
  i916.m_Transition = i917[2]
  i916.m_Colors = request.d('UnityEngine.UI.ColorBlock', i917[3], i916.m_Colors)
  i916.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i917[4], i916.m_SpriteState)
  i916.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i917[5], i916.m_AnimationTriggers)
  i916.m_Interactable = !!i917[6]
  request.r(i917[7], i917[8], 0, i916, 'm_TargetGraphic')
  return i916
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i918 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i919 = data
  i918.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i919[0], i918.m_PersistentCalls)
  return i918
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i920 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i921 = data
  i920.m_Mode = i921[0]
  i920.m_WrapAround = !!i921[1]
  request.r(i921[2], i921[3], 0, i920, 'm_SelectOnUp')
  request.r(i921[4], i921[5], 0, i920, 'm_SelectOnDown')
  request.r(i921[6], i921[7], 0, i920, 'm_SelectOnLeft')
  request.r(i921[8], i921[9], 0, i920, 'm_SelectOnRight')
  return i920
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i922 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i923 = data
  i922.m_NormalColor = new pc.Color(i923[0], i923[1], i923[2], i923[3])
  i922.m_HighlightedColor = new pc.Color(i923[4], i923[5], i923[6], i923[7])
  i922.m_PressedColor = new pc.Color(i923[8], i923[9], i923[10], i923[11])
  i922.m_SelectedColor = new pc.Color(i923[12], i923[13], i923[14], i923[15])
  i922.m_DisabledColor = new pc.Color(i923[16], i923[17], i923[18], i923[19])
  i922.m_ColorMultiplier = i923[20]
  i922.m_FadeDuration = i923[21]
  return i922
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i924 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i925 = data
  request.r(i925[0], i925[1], 0, i924, 'm_HighlightedSprite')
  request.r(i925[2], i925[3], 0, i924, 'm_PressedSprite')
  request.r(i925[4], i925[5], 0, i924, 'm_SelectedSprite')
  request.r(i925[6], i925[7], 0, i924, 'm_DisabledSprite')
  return i924
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i926 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i927 = data
  i926.m_NormalTrigger = i927[0]
  i926.m_HighlightedTrigger = i927[1]
  i926.m_PressedTrigger = i927[2]
  i926.m_SelectedTrigger = i927[3]
  i926.m_DisabledTrigger = i927[4]
  return i926
}

Deserializers["PlayableHudRuntime"] = function (request, data, root) {
  var i928 = root || request.c( 'PlayableHudRuntime' )
  var i929 = data
  return i928
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i930 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i931 = data
  i930.ambientIntensity = i931[0]
  i930.reflectionIntensity = i931[1]
  i930.ambientMode = i931[2]
  i930.ambientLight = new pc.Color(i931[3], i931[4], i931[5], i931[6])
  i930.ambientSkyColor = new pc.Color(i931[7], i931[8], i931[9], i931[10])
  i930.ambientGroundColor = new pc.Color(i931[11], i931[12], i931[13], i931[14])
  i930.ambientEquatorColor = new pc.Color(i931[15], i931[16], i931[17], i931[18])
  i930.fogColor = new pc.Color(i931[19], i931[20], i931[21], i931[22])
  i930.fogEndDistance = i931[23]
  i930.fogStartDistance = i931[24]
  i930.fogDensity = i931[25]
  i930.fog = !!i931[26]
  request.r(i931[27], i931[28], 0, i930, 'skybox')
  i930.fogMode = i931[29]
  var i933 = i931[30]
  var i932 = []
  for(var i = 0; i < i933.length; i += 1) {
    i932.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i933[i + 0]) );
  }
  i930.lightmaps = i932
  i930.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i931[31], i930.lightProbes)
  i930.lightmapsMode = i931[32]
  i930.mixedBakeMode = i931[33]
  i930.environmentLightingMode = i931[34]
  i930.ambientProbe = new pc.SphericalHarmonicsL2(i931[35])
  request.r(i931[36], i931[37], 0, i930, 'customReflection')
  request.r(i931[38], i931[39], 0, i930, 'defaultReflection')
  i930.defaultReflectionMode = i931[40]
  i930.defaultReflectionResolution = i931[41]
  i930.sunLightObjectId = i931[42]
  i930.pixelLightCount = i931[43]
  i930.defaultReflectionHDR = !!i931[44]
  i930.hasLightDataAsset = !!i931[45]
  i930.hasManualGenerate = !!i931[46]
  return i930
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i936 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i937 = data
  request.r(i937[0], i937[1], 0, i936, 'lightmapColor')
  request.r(i937[2], i937[3], 0, i936, 'lightmapDirection')
  request.r(i937[4], i937[5], 0, i936, 'shadowMask')
  return i936
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i938 = root || new UnityEngine.LightProbes()
  var i939 = data
  return i938
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i946 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i947 = data
  var i949 = i947[0]
  var i948 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i949.length; i += 1) {
    i948.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i949[i + 0]));
  }
  i946.ShaderCompilationErrors = i948
  i946.name = i947[1]
  i946.guid = i947[2]
  var i951 = i947[3]
  var i950 = []
  for(var i = 0; i < i951.length; i += 1) {
    i950.push( i951[i + 0] );
  }
  i946.shaderDefinedKeywords = i950
  var i953 = i947[4]
  var i952 = []
  for(var i = 0; i < i953.length; i += 1) {
    i952.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i953[i + 0]) );
  }
  i946.passes = i952
  var i955 = i947[5]
  var i954 = []
  for(var i = 0; i < i955.length; i += 1) {
    i954.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i955[i + 0]) );
  }
  i946.usePasses = i954
  var i957 = i947[6]
  var i956 = []
  for(var i = 0; i < i957.length; i += 1) {
    i956.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i957[i + 0]) );
  }
  i946.defaultParameterValues = i956
  request.r(i947[7], i947[8], 0, i946, 'unityFallbackShader')
  i946.readDepth = !!i947[9]
  i946.hasDepthOnlyPass = !!i947[10]
  i946.isCreatedByShaderGraph = !!i947[11]
  i946.disableBatching = !!i947[12]
  i946.compiled = !!i947[13]
  return i946
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i960 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i961 = data
  i960.shaderName = i961[0]
  i960.errorMessage = i961[1]
  return i960
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i966 = root || new pc.UnityShaderPass()
  var i967 = data
  i966.id = i967[0]
  i966.subShaderIndex = i967[1]
  i966.name = i967[2]
  i966.passType = i967[3]
  i966.grabPassTextureName = i967[4]
  i966.usePass = !!i967[5]
  i966.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i967[6], i966.zTest)
  i966.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i967[7], i966.zWrite)
  i966.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i967[8], i966.culling)
  i966.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i967[9], i966.blending)
  i966.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i967[10], i966.alphaBlending)
  i966.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i967[11], i966.colorWriteMask)
  i966.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i967[12], i966.offsetUnits)
  i966.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i967[13], i966.offsetFactor)
  i966.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i967[14], i966.stencilRef)
  i966.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i967[15], i966.stencilReadMask)
  i966.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i967[16], i966.stencilWriteMask)
  i966.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i967[17], i966.stencilOp)
  i966.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i967[18], i966.stencilOpFront)
  i966.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i967[19], i966.stencilOpBack)
  var i969 = i967[20]
  var i968 = []
  for(var i = 0; i < i969.length; i += 1) {
    i968.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i969[i + 0]) );
  }
  i966.tags = i968
  var i971 = i967[21]
  var i970 = []
  for(var i = 0; i < i971.length; i += 1) {
    i970.push( i971[i + 0] );
  }
  i966.passDefinedKeywords = i970
  var i973 = i967[22]
  var i972 = []
  for(var i = 0; i < i973.length; i += 1) {
    i972.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i973[i + 0]) );
  }
  i966.passDefinedKeywordGroups = i972
  var i975 = i967[23]
  var i974 = []
  for(var i = 0; i < i975.length; i += 1) {
    i974.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i975[i + 0]) );
  }
  i966.variants = i974
  var i977 = i967[24]
  var i976 = []
  for(var i = 0; i < i977.length; i += 1) {
    i976.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i977[i + 0]) );
  }
  i966.excludedVariants = i976
  i966.hasDepthReader = !!i967[25]
  return i966
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i978 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i979 = data
  i978.val = i979[0]
  i978.name = i979[1]
  return i978
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i980 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i981 = data
  i980.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i981[0], i980.src)
  i980.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i981[1], i980.dst)
  i980.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i981[2], i980.op)
  return i980
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i982 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i983 = data
  i982.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i983[0], i982.pass)
  i982.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i983[1], i982.fail)
  i982.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i983[2], i982.zFail)
  i982.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i983[3], i982.comp)
  return i982
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i986 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i987 = data
  i986.name = i987[0]
  i986.value = i987[1]
  return i986
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i990 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i991 = data
  var i993 = i991[0]
  var i992 = []
  for(var i = 0; i < i993.length; i += 1) {
    i992.push( i993[i + 0] );
  }
  i990.keywords = i992
  i990.hasDiscard = !!i991[1]
  return i990
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i996 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i997 = data
  i996.passId = i997[0]
  i996.subShaderIndex = i997[1]
  var i999 = i997[2]
  var i998 = []
  for(var i = 0; i < i999.length; i += 1) {
    i998.push( i999[i + 0] );
  }
  i996.keywords = i998
  i996.vertexProgram = i997[3]
  i996.fragmentProgram = i997[4]
  i996.exportedForWebGl2 = !!i997[5]
  i996.readDepth = !!i997[6]
  return i996
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i1002 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i1003 = data
  request.r(i1003[0], i1003[1], 0, i1002, 'shader')
  i1002.pass = i1003[2]
  return i1002
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i1006 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i1007 = data
  i1006.name = i1007[0]
  i1006.type = i1007[1]
  i1006.value = new pc.Vec4( i1007[2], i1007[3], i1007[4], i1007[5] )
  i1006.textureValue = i1007[6]
  i1006.shaderPropertyFlag = i1007[7]
  return i1006
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i1008 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i1009 = data
  i1008.name = i1009[0]
  request.r(i1009[1], i1009[2], 0, i1008, 'texture')
  i1008.aabb = i1009[3]
  i1008.vertices = i1009[4]
  i1008.triangles = i1009[5]
  i1008.textureRect = UnityEngine.Rect.MinMaxRect(i1009[6], i1009[7], i1009[8], i1009[9])
  i1008.packedRect = UnityEngine.Rect.MinMaxRect(i1009[10], i1009[11], i1009[12], i1009[13])
  i1008.border = new pc.Vec4( i1009[14], i1009[15], i1009[16], i1009[17] )
  i1008.transparency = i1009[18]
  i1008.bounds = i1009[19]
  i1008.pixelsPerUnit = i1009[20]
  i1008.textureWidth = i1009[21]
  i1008.textureHeight = i1009[22]
  i1008.nativeSize = new pc.Vec2( i1009[23], i1009[24] )
  i1008.pivot = new pc.Vec2( i1009[25], i1009[26] )
  i1008.textureRectOffset = new pc.Vec2( i1009[27], i1009[28] )
  return i1008
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i1010 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i1011 = data
  i1010.name = i1011[0]
  return i1010
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip"] = function (request, data, root) {
  var i1012 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip' )
  var i1013 = data
  i1012.name = i1013[0]
  i1012.wrapMode = i1013[1]
  i1012.isLooping = !!i1013[2]
  i1012.length = i1013[3]
  var i1015 = i1013[4]
  var i1014 = []
  for(var i = 0; i < i1015.length; i += 1) {
    i1014.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve', i1015[i + 0]) );
  }
  i1012.curves = i1014
  var i1017 = i1013[5]
  var i1016 = []
  for(var i = 0; i < i1017.length; i += 1) {
    i1016.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent', i1017[i + 0]) );
  }
  i1012.events = i1016
  i1012.halfPrecision = !!i1013[6]
  i1012._frameRate = i1013[7]
  i1012.localBounds = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds', i1013[8], i1012.localBounds)
  i1012.hasMuscleCurves = !!i1013[9]
  var i1019 = i1013[10]
  var i1018 = []
  for(var i = 0; i < i1019.length; i += 1) {
    i1018.push( i1019[i + 0] );
  }
  i1012.clipMuscleConstant = i1018
  i1012.clipBindingConstant = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant', i1013[11], i1012.clipBindingConstant)
  return i1012
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve"] = function (request, data, root) {
  var i1022 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve' )
  var i1023 = data
  i1022.path = i1023[0]
  i1022.hash = i1023[1]
  i1022.componentType = i1023[2]
  i1022.property = i1023[3]
  i1022.keys = i1023[4]
  var i1025 = i1023[5]
  var i1024 = []
  for(var i = 0; i < i1025.length; i += 1) {
    i1024.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey', i1025[i + 0]) );
  }
  i1022.objectReferenceKeys = i1024
  return i1022
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey"] = function (request, data, root) {
  var i1028 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey' )
  var i1029 = data
  i1028.time = i1029[0]
  request.r(i1029[1], i1029[2], 0, i1028, 'value')
  return i1028
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent"] = function (request, data, root) {
  var i1032 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent' )
  var i1033 = data
  i1032.functionName = i1033[0]
  i1032.floatParameter = i1033[1]
  i1032.intParameter = i1033[2]
  i1032.stringParameter = i1033[3]
  request.r(i1033[4], i1033[5], 0, i1032, 'objectReferenceParameter')
  i1032.time = i1033[6]
  return i1032
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds"] = function (request, data, root) {
  var i1034 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds' )
  var i1035 = data
  i1034.center = new pc.Vec3( i1035[0], i1035[1], i1035[2] )
  i1034.extends = new pc.Vec3( i1035[3], i1035[4], i1035[5] )
  return i1034
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant"] = function (request, data, root) {
  var i1038 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant' )
  var i1039 = data
  var i1041 = i1039[0]
  var i1040 = []
  for(var i = 0; i < i1041.length; i += 1) {
    i1040.push( i1041[i + 0] );
  }
  i1038.genericBindings = i1040
  var i1043 = i1039[1]
  var i1042 = []
  for(var i = 0; i < i1043.length; i += 1) {
    i1042.push( i1043[i + 0] );
  }
  i1038.pptrCurveMapping = i1042
  return i1038
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i1044 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i1045 = data
  i1044.name = i1045[0]
  i1044.ascent = i1045[1]
  i1044.originalLineHeight = i1045[2]
  i1044.fontSize = i1045[3]
  var i1047 = i1045[4]
  var i1046 = []
  for(var i = 0; i < i1047.length; i += 1) {
    i1046.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i1047[i + 0]) );
  }
  i1044.characterInfo = i1046
  request.r(i1045[5], i1045[6], 0, i1044, 'texture')
  i1044.originalFontSize = i1045[7]
  return i1044
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i1050 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i1051 = data
  i1050.index = i1051[0]
  i1050.advance = i1051[1]
  i1050.bearing = i1051[2]
  i1050.glyphWidth = i1051[3]
  i1050.glyphHeight = i1051[4]
  i1050.minX = i1051[5]
  i1050.maxX = i1051[6]
  i1050.minY = i1051[7]
  i1050.maxY = i1051[8]
  i1050.uvBottomLeftX = i1051[9]
  i1050.uvBottomLeftY = i1051[10]
  i1050.uvBottomRightX = i1051[11]
  i1050.uvBottomRightY = i1051[12]
  i1050.uvTopLeftX = i1051[13]
  i1050.uvTopLeftY = i1051[14]
  i1050.uvTopRightX = i1051[15]
  i1050.uvTopRightY = i1051[16]
  return i1050
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController"] = function (request, data, root) {
  var i1052 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController' )
  var i1053 = data
  i1052.name = i1053[0]
  var i1055 = i1053[1]
  var i1054 = []
  for(var i = 0; i < i1055.length; i += 1) {
    i1054.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer', i1055[i + 0]) );
  }
  i1052.layers = i1054
  var i1057 = i1053[2]
  var i1056 = []
  for(var i = 0; i < i1057.length; i += 1) {
    i1056.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter', i1057[i + 0]) );
  }
  i1052.parameters = i1056
  i1052.animationClips = i1053[3]
  i1052.avatarUnsupported = i1053[4]
  return i1052
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer"] = function (request, data, root) {
  var i1060 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer' )
  var i1061 = data
  i1060.name = i1061[0]
  i1060.defaultWeight = i1061[1]
  i1060.blendingMode = i1061[2]
  i1060.avatarMask = i1061[3]
  i1060.syncedLayerIndex = i1061[4]
  i1060.syncedLayerAffectsTiming = !!i1061[5]
  i1060.syncedLayers = i1061[6]
  i1060.stateMachine = request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i1061[7], i1060.stateMachine)
  return i1060
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine"] = function (request, data, root) {
  var i1062 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine' )
  var i1063 = data
  i1062.id = i1063[0]
  i1062.name = i1063[1]
  i1062.path = i1063[2]
  var i1065 = i1063[3]
  var i1064 = []
  for(var i = 0; i < i1065.length; i += 1) {
    i1064.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState', i1065[i + 0]) );
  }
  i1062.states = i1064
  var i1067 = i1063[4]
  var i1066 = []
  for(var i = 0; i < i1067.length; i += 1) {
    i1066.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i1067[i + 0]) );
  }
  i1062.machines = i1066
  var i1069 = i1063[5]
  var i1068 = []
  for(var i = 0; i < i1069.length; i += 1) {
    i1068.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i1069[i + 0]) );
  }
  i1062.entryStateTransitions = i1068
  var i1071 = i1063[6]
  var i1070 = []
  for(var i = 0; i < i1071.length; i += 1) {
    i1070.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i1071[i + 0]) );
  }
  i1062.exitStateTransitions = i1070
  var i1073 = i1063[7]
  var i1072 = []
  for(var i = 0; i < i1073.length; i += 1) {
    i1072.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i1073[i + 0]) );
  }
  i1062.anyStateTransitions = i1072
  i1062.defaultStateId = i1063[8]
  return i1062
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState"] = function (request, data, root) {
  var i1076 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState' )
  var i1077 = data
  i1076.id = i1077[0]
  i1076.name = i1077[1]
  i1076.cycleOffset = i1077[2]
  i1076.cycleOffsetParameter = i1077[3]
  i1076.cycleOffsetParameterActive = !!i1077[4]
  i1076.mirror = !!i1077[5]
  i1076.mirrorParameter = i1077[6]
  i1076.mirrorParameterActive = !!i1077[7]
  i1076.motionId = i1077[8]
  i1076.nameHash = i1077[9]
  i1076.fullPathHash = i1077[10]
  i1076.speed = i1077[11]
  i1076.speedParameter = i1077[12]
  i1076.speedParameterActive = !!i1077[13]
  i1076.tag = i1077[14]
  i1076.tagHash = i1077[15]
  i1076.writeDefaultValues = !!i1077[16]
  var i1079 = i1077[17]
  var i1078 = []
  for(var i = 0; i < i1079.length; i += 2) {
  request.r(i1079[i + 0], i1079[i + 1], 2, i1078, '')
  }
  i1076.behaviours = i1078
  var i1081 = i1077[18]
  var i1080 = []
  for(var i = 0; i < i1081.length; i += 1) {
    i1080.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i1081[i + 0]) );
  }
  i1076.transitions = i1080
  return i1076
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition"] = function (request, data, root) {
  var i1086 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition' )
  var i1087 = data
  i1086.fullPath = i1087[0]
  i1086.canTransitionToSelf = !!i1087[1]
  i1086.duration = i1087[2]
  i1086.exitTime = i1087[3]
  i1086.hasExitTime = !!i1087[4]
  i1086.hasFixedDuration = !!i1087[5]
  i1086.interruptionSource = i1087[6]
  i1086.offset = i1087[7]
  i1086.orderedInterruption = !!i1087[8]
  i1086.destinationStateId = i1087[9]
  i1086.isExit = !!i1087[10]
  i1086.mute = !!i1087[11]
  i1086.solo = !!i1087[12]
  var i1089 = i1087[13]
  var i1088 = []
  for(var i = 0; i < i1089.length; i += 1) {
    i1088.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i1089[i + 0]) );
  }
  i1086.conditions = i1088
  return i1086
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition"] = function (request, data, root) {
  var i1094 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition' )
  var i1095 = data
  i1094.destinationStateId = i1095[0]
  i1094.isExit = !!i1095[1]
  i1094.mute = !!i1095[2]
  i1094.solo = !!i1095[3]
  var i1097 = i1095[4]
  var i1096 = []
  for(var i = 0; i < i1097.length; i += 1) {
    i1096.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i1097[i + 0]) );
  }
  i1094.conditions = i1096
  return i1094
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition"] = function (request, data, root) {
  var i1100 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition' )
  var i1101 = data
  i1100.mode = i1101[0]
  i1100.parameter = i1101[1]
  i1100.threshold = i1101[2]
  return i1100
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter"] = function (request, data, root) {
  var i1104 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter' )
  var i1105 = data
  i1104.defaultBool = !!i1105[0]
  i1104.defaultFloat = i1105[1]
  i1104.defaultInt = i1105[2]
  i1104.name = i1105[3]
  i1104.nameHash = i1105[4]
  i1104.type = i1105[5]
  return i1104
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i1106 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i1107 = data
  i1106.useSafeMode = !!i1107[0]
  i1106.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i1107[1], i1106.safeModeOptions)
  i1106.timeScale = i1107[2]
  i1106.unscaledTimeScale = i1107[3]
  i1106.useSmoothDeltaTime = !!i1107[4]
  i1106.maxSmoothUnscaledTime = i1107[5]
  i1106.rewindCallbackMode = i1107[6]
  i1106.showUnityEditorReport = !!i1107[7]
  i1106.logBehaviour = i1107[8]
  i1106.drawGizmos = !!i1107[9]
  i1106.defaultRecyclable = !!i1107[10]
  i1106.defaultAutoPlay = i1107[11]
  i1106.defaultUpdateType = i1107[12]
  i1106.defaultTimeScaleIndependent = !!i1107[13]
  i1106.defaultEaseType = i1107[14]
  i1106.defaultEaseOvershootOrAmplitude = i1107[15]
  i1106.defaultEasePeriod = i1107[16]
  i1106.defaultAutoKill = !!i1107[17]
  i1106.defaultLoopType = i1107[18]
  i1106.debugMode = !!i1107[19]
  i1106.debugStoreTargetId = !!i1107[20]
  i1106.showPreviewPanel = !!i1107[21]
  i1106.storeSettingsLocation = i1107[22]
  i1106.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i1107[23], i1106.modules)
  i1106.createASMDEF = !!i1107[24]
  i1106.showPlayingTweens = !!i1107[25]
  i1106.showPausedTweens = !!i1107[26]
  return i1106
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i1108 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i1109 = data
  i1108.logBehaviour = i1109[0]
  i1108.nestedTweenFailureBehaviour = i1109[1]
  return i1108
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i1110 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i1111 = data
  i1110.showPanel = !!i1111[0]
  i1110.audioEnabled = !!i1111[1]
  i1110.physicsEnabled = !!i1111[2]
  i1110.physics2DEnabled = !!i1111[3]
  i1110.spriteEnabled = !!i1111[4]
  i1110.uiEnabled = !!i1111[5]
  i1110.textMeshProEnabled = !!i1111[6]
  i1110.tk2DEnabled = !!i1111[7]
  i1110.deAudioEnabled = !!i1111[8]
  i1110.deUnityExtendedEnabled = !!i1111[9]
  i1110.epoOutlineEnabled = !!i1111[10]
  return i1110
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i1112 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i1113 = data
  var i1115 = i1113[0]
  var i1114 = []
  for(var i = 0; i < i1115.length; i += 1) {
    i1114.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i1115[i + 0]) );
  }
  i1112.files = i1114
  i1112.componentToPrefabIds = i1113[1]
  return i1112
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i1118 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i1119 = data
  i1118.path = i1119[0]
  request.r(i1119[1], i1119[2], 0, i1118, 'unityObject')
  return i1118
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i1120 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i1121 = data
  var i1123 = i1121[0]
  var i1122 = []
  for(var i = 0; i < i1123.length; i += 1) {
    i1122.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i1123[i + 0]) );
  }
  i1120.scriptsExecutionOrder = i1122
  var i1125 = i1121[1]
  var i1124 = []
  for(var i = 0; i < i1125.length; i += 1) {
    i1124.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i1125[i + 0]) );
  }
  i1120.sortingLayers = i1124
  var i1127 = i1121[2]
  var i1126 = []
  for(var i = 0; i < i1127.length; i += 1) {
    i1126.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i1127[i + 0]) );
  }
  i1120.cullingLayers = i1126
  i1120.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i1121[3], i1120.timeSettings)
  i1120.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i1121[4], i1120.physicsSettings)
  i1120.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i1121[5], i1120.physics2DSettings)
  i1120.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1121[6], i1120.qualitySettings)
  i1120.enableRealtimeShadows = !!i1121[7]
  i1120.enableAutoInstancing = !!i1121[8]
  i1120.enableStaticBatching = !!i1121[9]
  i1120.enableDynamicBatching = !!i1121[10]
  i1120.usePreservativeDynamicBatching = !!i1121[11]
  i1120.lightmapEncodingQuality = i1121[12]
  i1120.desiredColorSpace = i1121[13]
  var i1129 = i1121[14]
  var i1128 = []
  for(var i = 0; i < i1129.length; i += 1) {
    i1128.push( i1129[i + 0] );
  }
  i1120.allTags = i1128
  return i1120
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i1132 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i1133 = data
  i1132.name = i1133[0]
  i1132.value = i1133[1]
  return i1132
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i1136 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i1137 = data
  i1136.id = i1137[0]
  i1136.name = i1137[1]
  i1136.value = i1137[2]
  return i1136
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i1140 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i1141 = data
  i1140.id = i1141[0]
  i1140.name = i1141[1]
  return i1140
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i1142 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i1143 = data
  i1142.fixedDeltaTime = i1143[0]
  i1142.maximumDeltaTime = i1143[1]
  i1142.timeScale = i1143[2]
  i1142.maximumParticleTimestep = i1143[3]
  return i1142
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i1144 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i1145 = data
  i1144.gravity = new pc.Vec3( i1145[0], i1145[1], i1145[2] )
  i1144.defaultSolverIterations = i1145[3]
  i1144.bounceThreshold = i1145[4]
  i1144.autoSyncTransforms = !!i1145[5]
  i1144.autoSimulation = !!i1145[6]
  var i1147 = i1145[7]
  var i1146 = []
  for(var i = 0; i < i1147.length; i += 1) {
    i1146.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i1147[i + 0]) );
  }
  i1144.collisionMatrix = i1146
  return i1144
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i1150 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i1151 = data
  i1150.enabled = !!i1151[0]
  i1150.layerId = i1151[1]
  i1150.otherLayerId = i1151[2]
  return i1150
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i1152 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i1153 = data
  request.r(i1153[0], i1153[1], 0, i1152, 'material')
  i1152.gravity = new pc.Vec2( i1153[2], i1153[3] )
  i1152.positionIterations = i1153[4]
  i1152.velocityIterations = i1153[5]
  i1152.velocityThreshold = i1153[6]
  i1152.maxLinearCorrection = i1153[7]
  i1152.maxAngularCorrection = i1153[8]
  i1152.maxTranslationSpeed = i1153[9]
  i1152.maxRotationSpeed = i1153[10]
  i1152.baumgarteScale = i1153[11]
  i1152.baumgarteTOIScale = i1153[12]
  i1152.timeToSleep = i1153[13]
  i1152.linearSleepTolerance = i1153[14]
  i1152.angularSleepTolerance = i1153[15]
  i1152.defaultContactOffset = i1153[16]
  i1152.autoSimulation = !!i1153[17]
  i1152.queriesHitTriggers = !!i1153[18]
  i1152.queriesStartInColliders = !!i1153[19]
  i1152.callbacksOnDisable = !!i1153[20]
  i1152.reuseCollisionCallbacks = !!i1153[21]
  i1152.autoSyncTransforms = !!i1153[22]
  var i1155 = i1153[23]
  var i1154 = []
  for(var i = 0; i < i1155.length; i += 1) {
    i1154.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i1155[i + 0]) );
  }
  i1152.collisionMatrix = i1154
  return i1152
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i1158 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i1159 = data
  i1158.enabled = !!i1159[0]
  i1158.layerId = i1159[1]
  i1158.otherLayerId = i1159[2]
  return i1158
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i1160 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i1161 = data
  var i1163 = i1161[0]
  var i1162 = []
  for(var i = 0; i < i1163.length; i += 1) {
    i1162.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1163[i + 0]) );
  }
  i1160.qualityLevels = i1162
  var i1165 = i1161[1]
  var i1164 = []
  for(var i = 0; i < i1165.length; i += 1) {
    i1164.push( i1165[i + 0] );
  }
  i1160.names = i1164
  i1160.shadows = i1161[2]
  i1160.anisotropicFiltering = i1161[3]
  i1160.antiAliasing = i1161[4]
  i1160.lodBias = i1161[5]
  i1160.shadowCascades = i1161[6]
  i1160.shadowDistance = i1161[7]
  i1160.shadowmaskMode = i1161[8]
  i1160.shadowProjection = i1161[9]
  i1160.shadowResolution = i1161[10]
  i1160.softParticles = !!i1161[11]
  i1160.softVegetation = !!i1161[12]
  i1160.activeColorSpace = i1161[13]
  i1160.desiredColorSpace = i1161[14]
  i1160.masterTextureLimit = i1161[15]
  i1160.maxQueuedFrames = i1161[16]
  i1160.particleRaycastBudget = i1161[17]
  i1160.pixelLightCount = i1161[18]
  i1160.realtimeReflectionProbes = !!i1161[19]
  i1160.shadowCascade2Split = i1161[20]
  i1160.shadowCascade4Split = new pc.Vec3( i1161[21], i1161[22], i1161[23] )
  i1160.streamingMipmapsActive = !!i1161[24]
  i1160.vSyncCount = i1161[25]
  i1160.asyncUploadBufferSize = i1161[26]
  i1160.asyncUploadTimeSlice = i1161[27]
  i1160.billboardsFaceCameraPosition = !!i1161[28]
  i1160.shadowNearPlaneOffset = i1161[29]
  i1160.streamingMipmapsMemoryBudget = i1161[30]
  i1160.maximumLODLevel = i1161[31]
  i1160.streamingMipmapsAddAllCameras = !!i1161[32]
  i1160.streamingMipmapsMaxLevelReduction = i1161[33]
  i1160.streamingMipmapsRenderersPerFrame = i1161[34]
  i1160.resolutionScalingFixedDPIFactor = i1161[35]
  i1160.streamingMipmapsMaxFileIORequests = i1161[36]
  i1160.currentQualityLevel = i1161[37]
  return i1160
}

Deserializers["Luna.Unity.DTO.UnityEngine.Audio.AudioMixer"] = function (request, data, root) {
  var i1168 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Audio.AudioMixer' )
  var i1169 = data
  var i1171 = i1169[0]
  var i1170 = []
  for(var i = 0; i < i1171.length; i += 1) {
    i1170.push( request.d('Luna.Unity.DTO.UnityEngine.Audio.AudioMixerGroup', i1171[i + 0]) );
  }
  i1168.groups = i1170
  var i1173 = i1169[1]
  var i1172 = []
  for(var i = 0; i < i1173.length; i += 1) {
    i1172.push( request.d('Luna.Unity.DTO.UnityEngine.Audio.AudioMixerSnapshot', i1173[i + 0]) );
  }
  i1168.snapshots = i1172
  return i1168
}

Deserializers["Luna.Unity.DTO.UnityEngine.Audio.AudioMixerGroup"] = function (request, data, root) {
  var i1176 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Audio.AudioMixerGroup' )
  var i1177 = data
  i1176.id = i1177[0]
  i1176.childGroupIds = i1177[1]
  i1176.name = i1177[2]
  return i1176
}

Deserializers["Luna.Unity.DTO.UnityEngine.Audio.AudioMixerSnapshot"] = function (request, data, root) {
  var i1180 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Audio.AudioMixerSnapshot' )
  var i1181 = data
  i1180.id = i1181[0]
  var i1183 = i1181[1]
  var i1182 = []
  for(var i = 0; i < i1183.length; i += 1) {
    i1182.push( request.d('Luna.Unity.DTO.UnityEngine.Audio.AudioMixerSnapshot+Parameter', i1183[i + 0]) );
  }
  i1180.parameters = i1182
  return i1180
}

Deserializers["Luna.Unity.DTO.UnityEngine.Audio.AudioMixerSnapshot+Parameter"] = function (request, data, root) {
  var i1186 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Audio.AudioMixerSnapshot+Parameter' )
  var i1187 = data
  i1186.name = i1187[0]
  i1186.value = i1187[1]
  return i1186
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame"] = function (request, data, root) {
  var i1190 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame' )
  var i1191 = data
  i1190.weight = i1191[0]
  i1190.vertices = i1191[1]
  i1190.normals = i1191[2]
  i1190.tangents = i1191[3]
  return i1190
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Assets.Mesh":{"name":0,"halfPrecision":1,"useSimplification":2,"useUInt32IndexFormat":3,"vertexCount":4,"aabb":5,"streams":6,"vertices":7,"subMeshes":8,"bindposes":9,"blendShapes":10},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh":{"triangles":0},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape":{"name":0,"frames":1},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer":{"color":0,"sprite":4,"flipX":6,"flipY":7,"drawMode":8,"size":9,"tileMode":11,"adaptiveModeThreshold":12,"maskInteraction":13,"spriteSortPoint":14,"enabled":15,"sharedMaterial":16,"sharedMaterials":18,"receiveShadows":19,"shadowCastingMode":20,"sortingLayerID":21,"sortingOrder":22,"lightmapIndex":23,"lightmapSceneIndex":24,"lightmapScaleOffset":25,"lightProbeUsage":29,"reflectionProbeUsage":30},"Luna.Unity.DTO.UnityEngine.Components.CircleCollider2D":{"radius":0,"enabled":1,"isTrigger":2,"usedByEffector":3,"density":4,"offset":5,"material":7},"Luna.Unity.DTO.UnityEngine.Components.AudioSource":{"clip":0,"outputAudioMixerGroup":2,"playOnAwake":4,"loop":5,"time":6,"volume":7,"pitch":8,"enabled":9},"Luna.Unity.DTO.UnityEngine.Components.PolygonCollider2D":{"usedByComposite":0,"autoTiling":1,"points":2,"enabled":3,"isTrigger":4,"usedByEffector":5,"density":6,"offset":7,"material":9},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D":{"usedByComposite":0,"autoTiling":1,"size":2,"edgeRadius":4,"enabled":5,"isTrigger":6,"usedByEffector":7,"density":8,"offset":9,"material":11},"Luna.Unity.DTO.UnityEngine.Components.Animator":{"animatorController":0,"avatar":2,"updateMode":4,"hasTransformHierarchy":5,"applyRootMotion":6,"humanBones":7,"enabled":8},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystem":{"main":0,"colorBySpeed":1,"colorOverLifetime":2,"emission":3,"rotationBySpeed":4,"rotationOverLifetime":5,"shape":6,"sizeBySpeed":7,"sizeOverLifetime":8,"textureSheetAnimation":9,"velocityOverLifetime":10,"noise":11,"inheritVelocity":12,"forceOverLifetime":13,"limitVelocityOverLifetime":14,"useAutoRandomSeed":15,"randomSeed":16},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule":{"duration":0,"loop":1,"prewarm":2,"startDelay":3,"startLifetime":4,"startSpeed":5,"startSize3D":6,"startSizeX":7,"startSizeY":8,"startSizeZ":9,"startRotation3D":10,"startRotationX":11,"startRotationY":12,"startRotationZ":13,"startColor":14,"gravityModifier":15,"simulationSpace":16,"customSimulationSpace":17,"simulationSpeed":19,"useUnscaledTime":20,"scalingMode":21,"playOnAwake":22,"maxParticles":23,"emitterVelocityMode":24,"stopAction":25},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve":{"mode":0,"curveMin":1,"curveMax":2,"curveMultiplier":3,"constantMin":4,"constantMax":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient":{"mode":0,"gradientMin":1,"gradientMax":2,"colorMin":3,"colorMax":7},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient":{"mode":0,"colorKeys":1,"alphaKeys":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule":{"enabled":0,"color":1,"range":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey":{"color":0,"time":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey":{"alpha":0,"time":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule":{"enabled":0,"color":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule":{"enabled":0,"rateOverTime":1,"rateOverDistance":2,"bursts":3},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst":{"count":0,"cycleCount":1,"minCount":2,"maxCount":3,"repeatInterval":4,"time":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule":{"enabled":0,"shapeType":1,"randomDirectionAmount":2,"sphericalDirectionAmount":3,"randomPositionAmount":4,"alignToDirection":5,"radius":6,"radiusMode":7,"radiusSpread":8,"radiusSpeed":9,"radiusThickness":10,"angle":11,"length":12,"boxThickness":13,"meshShapeType":16,"mesh":17,"meshRenderer":19,"skinnedMeshRenderer":21,"useMeshMaterialIndex":23,"meshMaterialIndex":24,"useMeshColors":25,"normalOffset":26,"arc":27,"arcMode":28,"arcSpread":29,"arcSpeed":30,"donutRadius":31,"position":32,"rotation":35,"scale":38},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule":{"enabled":0,"mode":1,"animation":2,"numTilesX":3,"numTilesY":4,"useRandomRow":5,"frameOverTime":6,"startFrame":7,"cycleCount":8,"rowIndex":9,"flipU":10,"flipV":11,"spriteCount":12,"sprites":13},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"radial":4,"speedModifier":5,"space":6,"orbitalX":7,"orbitalY":8,"orbitalZ":9,"orbitalOffsetX":10,"orbitalOffsetY":11,"orbitalOffsetZ":12},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule":{"enabled":0,"separateAxes":1,"strengthX":2,"strengthY":3,"strengthZ":4,"frequency":5,"damping":6,"octaveCount":7,"octaveMultiplier":8,"octaveScale":9,"quality":10,"scrollSpeed":11,"scrollSpeedMultiplier":12,"remapEnabled":13,"remapX":14,"remapY":15,"remapZ":16,"positionAmount":17,"rotationAmount":18,"sizeAmount":19},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule":{"enabled":0,"mode":1,"curve":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"space":4,"randomized":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule":{"enabled":0,"limit":1,"limitX":2,"limitY":3,"limitZ":4,"dampen":5,"separateAxes":6,"space":7,"drag":8,"multiplyDragByParticleSize":9,"multiplyDragByParticleVelocity":10},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer":{"mesh":0,"meshCount":2,"activeVertexStreamsCount":3,"alignment":4,"renderMode":5,"sortMode":6,"lengthScale":7,"velocityScale":8,"cameraVelocityScale":9,"normalDirection":10,"sortingFudge":11,"minParticleSize":12,"maxParticleSize":13,"pivot":14,"trailMaterial":17,"applyActiveColorSpace":19,"enabled":20,"sharedMaterial":21,"sharedMaterials":23,"receiveShadows":24,"shadowCastingMode":25,"sortingLayerID":26,"sortingOrder":27,"lightmapIndex":28,"lightmapSceneIndex":29,"lightmapScaleOffset":30,"lightProbeUsage":34,"reflectionProbeUsage":35},"Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D":{"bodyType":0,"material":1,"simulated":3,"useAutoMass":4,"mass":5,"drag":6,"angularDrag":7,"gravityScale":8,"collisionDetectionMode":9,"sleepMode":10,"constraints":11},"Luna.Unity.DTO.UnityEngine.Textures.Cubemap":{"name":0,"atlasId":1,"mipmapCount":2,"hdr":3,"size":4,"anisoLevel":5,"filterMode":6,"rects":7,"wrapU":8,"wrapV":9},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"aspect":0,"orthographic":1,"orthographicSize":2,"backgroundColor":3,"nearClipPlane":7,"farClipPlane":8,"fieldOfView":9,"depth":10,"clearFlags":11,"cullingMask":12,"rect":13,"targetTexture":14,"usePhysicalProperties":16,"focalLength":17,"sensorSize":18,"lensShift":20,"gateFit":22,"commandBufferCount":23,"cameraType":24,"enabled":25},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"planeDistance":0,"referencePixelsPerUnit":1,"isFallbackOverlay":2,"renderMode":3,"renderOrder":4,"sortingLayerName":5,"sortingOrder":6,"scaleFactor":7,"worldCamera":8,"overrideSorting":10,"pixelPerfect":11,"targetDisplay":12,"overridePixelPerfect":13,"enabled":14},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"customReflection":36,"defaultReflection":38,"defaultReflectionMode":40,"defaultReflectionResolution":41,"sunLightObjectId":42,"pixelLightCount":43,"defaultReflectionHDR":44,"hasLightDataAsset":45,"hasManualGenerate":46},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2,"shadowMask":4},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"hasDepthOnlyPass":10,"isCreatedByShaderGraph":11,"disableBatching":12,"compiled":13},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip":{"name":0,"wrapMode":1,"isLooping":2,"length":3,"curves":4,"events":5,"halfPrecision":6,"_frameRate":7,"localBounds":8,"hasMuscleCurves":9,"clipMuscleConstant":10,"clipBindingConstant":11},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve":{"path":0,"hash":1,"componentType":2,"property":3,"keys":4,"objectReferenceKeys":5},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey":{"time":0,"value":1},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent":{"functionName":0,"floatParameter":1,"intParameter":2,"stringParameter":3,"objectReferenceParameter":4,"time":6},"Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds":{"center":0,"extends":3},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant":{"genericBindings":0,"pptrCurveMapping":1},"Luna.Unity.DTO.UnityEngine.Assets.Font":{"name":0,"ascent":1,"originalLineHeight":2,"fontSize":3,"characterInfo":4,"texture":5,"originalFontSize":7},"Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo":{"index":0,"advance":1,"bearing":2,"glyphWidth":3,"glyphHeight":4,"minX":5,"maxX":6,"minY":7,"maxY":8,"uvBottomLeftX":9,"uvBottomLeftY":10,"uvBottomRightX":11,"uvBottomRightY":12,"uvTopLeftX":13,"uvTopLeftY":14,"uvTopRightX":15,"uvTopRightY":16},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController":{"name":0,"layers":1,"parameters":2,"animationClips":3,"avatarUnsupported":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer":{"name":0,"defaultWeight":1,"blendingMode":2,"avatarMask":3,"syncedLayerIndex":4,"syncedLayerAffectsTiming":5,"syncedLayers":6,"stateMachine":7},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine":{"id":0,"name":1,"path":2,"states":3,"machines":4,"entryStateTransitions":5,"exitStateTransitions":6,"anyStateTransitions":7,"defaultStateId":8},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState":{"id":0,"name":1,"cycleOffset":2,"cycleOffsetParameter":3,"cycleOffsetParameterActive":4,"mirror":5,"mirrorParameter":6,"mirrorParameterActive":7,"motionId":8,"nameHash":9,"fullPathHash":10,"speed":11,"speedParameter":12,"speedParameterActive":13,"tag":14,"tagHash":15,"writeDefaultValues":16,"behaviours":17,"transitions":18},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition":{"fullPath":0,"canTransitionToSelf":1,"duration":2,"exitTime":3,"hasExitTime":4,"hasFixedDuration":5,"interruptionSource":6,"offset":7,"orderedInterruption":8,"destinationStateId":9,"isExit":10,"mute":11,"solo":12,"conditions":13},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition":{"destinationStateId":0,"isExit":1,"mute":2,"solo":3,"conditions":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition":{"mode":0,"parameter":1,"threshold":2},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter":{"defaultBool":0,"defaultFloat":1,"defaultInt":2,"name":3,"nameHash":4,"type":5},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableStaticBatching":9,"enableDynamicBatching":10,"usePreservativeDynamicBatching":11,"lightmapEncodingQuality":12,"desiredColorSpace":13,"allTags":14},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37},"Luna.Unity.DTO.UnityEngine.Audio.AudioMixer":{"groups":0,"snapshots":1},"Luna.Unity.DTO.UnityEngine.Audio.AudioMixerGroup":{"id":0,"childGroupIds":1,"name":2},"Luna.Unity.DTO.UnityEngine.Audio.AudioMixerSnapshot":{"id":0,"parameters":1},"Luna.Unity.DTO.UnityEngine.Audio.AudioMixerSnapshot+Parameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame":{"weight":0,"vertices":1,"normals":2,"tangents":3}}

Deserializers.requiredComponents = {"60":[61],"62":[61],"63":[61],"64":[61],"65":[61],"66":[61],"67":[68],"69":[38],"70":[71],"72":[71],"73":[71],"74":[71],"75":[71],"76":[71],"77":[71],"78":[31],"79":[31],"80":[31],"81":[31],"82":[31],"83":[31],"84":[31],"85":[31],"86":[31],"87":[31],"88":[31],"89":[31],"90":[31],"91":[38],"92":[93],"94":[95],"96":[95],"50":[43],"97":[98],"99":[8],"100":[24],"101":[8],"102":[103],"104":[103],"105":[36],"106":[24],"107":[8],"32":[8],"108":[43],"109":[43],"53":[50],"44":[54,43],"110":[43],"52":[50],"111":[43],"112":[43],"113":[43],"114":[43],"115":[43],"116":[43],"117":[43],"118":[43],"119":[43],"120":[54,43],"121":[43],"122":[43],"123":[43],"124":[43],"45":[54,43],"125":[43],"126":[127],"128":[127],"129":[127],"130":[127],"131":[38],"132":[38]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Texture2D","UnityEngine.Transform","UnityEngine.MonoBehaviour","Level2_Shoe_Playable","BasicDrag","BD_CameraFollow","UnityEngine.GameObject","UnityEngine.SpriteRenderer","UnityEngine.Sprite","UnityEngine.AudioClip","UnityEngine.AudioSource","ScratchCardAsset.ScratchCardManager","PlayableCTA","ScratchCardAsset.ScratchCard","ScratchCardAsset.EraseProgress","UnityEngine.Material","PlayParticlesOnCollision","UnityEngine.CircleCollider2D","PlaySfxOnCollision","UnityEditor.Audio.AudioMixerGroupController","UnityEngine.PolygonCollider2D","UnityEngine.ParticleSystem","UnityEngine.Animator","UnityEngine.BoxCollider2D","BD_Progress","BD_Clamp","BD_ToolRotate","BD_Audio","UnityEditor.Animations.AnimatorController","UnityEngine.ParticleSystemRenderer","UnityEngine.Rigidbody2D","UnityEngine.U2D.Animation.SpriteSkin","BD_SpriteChange","InteractableBones","ActionOnTap","DG.Tweening.DOTweenAnimation","DestroyObj","UnityEngine.Camera","UnityEngine.AudioListener","CameraController","MusicSource","UI_Manager","UnityEngine.RectTransform","UnityEngine.UI.Image","UnityEngine.UI.Text","GameManagerPlayable","AudioController","UnityEditor.Audio.AudioMixerController","UnityEngine.Mesh","UnityEngine.Canvas","UnityEngine.EventSystems.UIBehaviour","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEngine.CanvasRenderer","UnityEngine.Font","UnityEngine.UI.Button","PlayableHudRuntime","UnityEngine.Cubemap","DG.Tweening.Core.DOTweenSettings","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.ConstantForce","UnityEngine.Rigidbody","UnityEngine.Joint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.FixedJoint","UnityEngine.CharacterJoint","UnityEngine.ConfigurableJoint","UnityEngine.CompositeCollider2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.MeshRenderer","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","RopeController","UnityEngine.LineRenderer","BD_Fold","BD_Sticky","Lvl3_DripAnimator","Lvl3_LipstickPicker","UnityEngine.Collider2D","Lvl3_PourFill","PlayTweenOnHit","SpriteButton","RadialCircleFill","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.Mask","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Slider","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.StandaloneInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster"]

Deserializers.unityVersion = "2022.3.62f2";

Deserializers.productName = "Perfect Makeover Fashion ASMR";

Deserializers.lunaInitializationTime = "08/20/2026 07:41:52";

Deserializers.lunaDaysRunning = "0.2";

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

Deserializers.buildID = "b41cb907-a62d-4ede-919f-579f5d9746b1";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[],[["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"]],[],[]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

