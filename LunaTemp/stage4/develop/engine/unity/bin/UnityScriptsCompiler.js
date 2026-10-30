if ( TRACE ) { TRACE( JSON.parse( '["ActionOnTap#init","ActionOnTap#Awake","ActionOnTap#Update","ActionOnTap#Tap","ArrayExtensions#RotateLeft","ArrayExtensions#RotateRight","AudioController#Awake","AudioController#Start","AudioController#SetupThings","AudioController#PlaySfx","AudioController#PlayAnySfx","AudioController#PlayUiClickSfx","AudioController#PlayBtnClickSfx","AudioController#PlayBtnClickSfxGameplay","BasicDrag#init","BasicDrag#Start","BasicDrag#OnEnable","BasicDrag#OnDisable","BasicDrag#Update","BasicDrag#Exec","BasicDrag#MouseDownPressed","BasicDrag#MouseUpPressed","BasicDrag#OnDragStart","BasicDrag#OnDragStart_Delta","BasicDrag#HandleDragging","BasicDrag#OnDragEnd","BasicDrag#IncreaseSR","BasicDrag#DecreaseSR","BasicDrag#ResetState","BasicDrag#OffestReset","BasicDrag#StopTheDrag","BasicDrag#HasSwipedDown","BasicDrag#isOverUI","BD_AnimationHelper#init","BD_AnimationHelper#TriggerOnComplete","BD_AnimationHelper#PlaySfx","BD_AnimatorDrag#init","BD_AnimatorDrag#Start","BD_AnimatorDrag#PlayAnim","BD_AnimatorDrag#StopAnim","BD_AnimatorDrag#Update","BD_CameraFollow#init","BD_CameraFollow#Start","BD_CameraFollow#Update","BD_CameraFollow#DisableFollow","BD_Clamp#init","BD_Clamp#OnEnable","BD_Clamp#AssignVals","BD_Progress#init","BD_Progress#Start","BD_Progress#EnableProgress","BD_Progress#DisableProgress","BD_Progress#EnableToolTips","BD_Progress#DisableToolTips","BD_Progress#ProgressChecking","BD_Progress#CheckAllScratchProgress","BD_Progress#giveCollectiveProgress","BD_Progress#giveProgressForScratch","BD_Progress#CallTheComplete","BD_ProgressHelper#init","BD_ProgressHelper#Start","BD_ProgressHelper#EnableProgress","BD_ProgressHelper#DisableProgress","BD_ProgressHelper#ProgressChecking","BD_SpriteChange#init","BD_SpriteChange#Start","BD_SpriteChange#ToolPicked","BD_SpriteChange#ToolReleased","BD_ToolRotate#init","BD_ToolRotate#Start","BD_ToolRotate#Update","CameraController#init","CameraController#Awake","CameraController#SetCameraInstant","CameraController#MoveCamera","CameraController#ResetCameraInstant","CameraController#ResetCameraTween","CameraController#KillTweens","CameraController#KillPositionTweens","CameraController#Camera_Shake","CarouselScroller#CenterItemObj#get","CarouselScroller#init","CarouselScroller#InitCarousel","CarouselScroller#SetupInitialPositions","CarouselScroller#SetItemAlphaState","CarouselScroller#SetAlpha","CarouselScroller#EnableCurrentTick","CarouselScroller#EnableCurrentTick1st","CarouselScroller#ScrollNext","CarouselScroller#Animate","CarouselScroller#UpdateAllItemData","CarouselScroller#SetItemData","CarouselScroller#UpdateEdgeVisibility","DestroyObj#init","DestroyObj#Start","DG.Tweening.DOTweenAnimation#Dispatch_OnReset","DG.Tweening.DOTweenAnimation#TypeToDOTargetType","DG.Tweening.DOTweenAnimation#init","DG.Tweening.DOTweenAnimation#Awake","DG.Tweening.DOTweenAnimation#Start","DG.Tweening.DOTweenAnimation#Reset","DG.Tweening.DOTweenAnimation#OnDestroy","DG.Tweening.DOTweenAnimation#RewindThenRecreateTween","DG.Tweening.DOTweenAnimation#RewindThenRecreateTweenAndPlay","DG.Tweening.DOTweenAnimation#RecreateTween","DG.Tweening.DOTweenAnimation#RecreateTweenAndPlay","DG.Tweening.DOTweenAnimation#CreateTween","DG.Tweening.DOTweenAnimation#GetTweens","DG.Tweening.DOTweenAnimation#SetAnimationTarget","DG.Tweening.DOTweenAnimation#DOPlay","DG.Tweening.DOTweenAnimation#DOPlayBackwards","DG.Tweening.DOTweenAnimation#DOPlayForward","DG.Tweening.DOTweenAnimation#DOPause","DG.Tweening.DOTweenAnimation#DOTogglePause","DG.Tweening.DOTweenAnimation#DORewind","DG.Tweening.DOTweenAnimation#DORestart","DG.Tweening.DOTweenAnimation#DORestart$1","DG.Tweening.DOTweenAnimation#DOComplete","DG.Tweening.DOTweenAnimation#DOKill","DG.Tweening.DOTweenAnimation#DOPlayById","DG.Tweening.DOTweenAnimation#DOPlayAllById","DG.Tweening.DOTweenAnimation#DOPauseAllById","DG.Tweening.DOTweenAnimation#DOPlayBackwardsById","DG.Tweening.DOTweenAnimation#DOPlayBackwardsAllById","DG.Tweening.DOTweenAnimation#DOPlayForwardById","DG.Tweening.DOTweenAnimation#DOPlayForwardAllById","DG.Tweening.DOTweenAnimation#DOPlayNext","DG.Tweening.DOTweenAnimation#DORewindAndPlayNext","DG.Tweening.DOTweenAnimation#DORewindAllById","DG.Tweening.DOTweenAnimation#DORestartById","DG.Tweening.DOTweenAnimation#DORestartAllById","DG.Tweening.DOTweenAnimation#DOKillById","DG.Tweening.DOTweenAnimation#DOKillAllById","DG.Tweening.DOTweenAnimation#CreateEditorPreview","DG.Tweening.DOTweenAnimation#GetTweenGO","DG.Tweening.DOTweenAnimation#GetTweenTarget","DG.Tweening.DOTweenAnimation#ReEvaluateRelativeTween","DG.Tweening.DOTweenAnimationExtensions#IsSameOrSubclassOf","DG.Tweening.DOTweenCYInstruction.WaitForCompletion#keepWaiting#get","DG.Tweening.DOTweenCYInstruction.WaitForCompletion#ctor","DG.Tweening.DOTweenCYInstruction.WaitForElapsedLoops#keepWaiting#get","DG.Tweening.DOTweenCYInstruction.WaitForElapsedLoops#ctor","DG.Tweening.DOTweenCYInstruction.WaitForKill#keepWaiting#get","DG.Tweening.DOTweenCYInstruction.WaitForKill#ctor","DG.Tweening.DOTweenCYInstruction.WaitForPosition#keepWaiting#get","DG.Tweening.DOTweenCYInstruction.WaitForPosition#ctor","DG.Tweening.DOTweenCYInstruction.WaitForRewind#keepWaiting#get","DG.Tweening.DOTweenCYInstruction.WaitForRewind#ctor","DG.Tweening.DOTweenCYInstruction.WaitForStart#keepWaiting#get","DG.Tweening.DOTweenCYInstruction.WaitForStart#ctor","DG.Tweening.DOTweenModuleAudio#DOFade","DG.Tweening.DOTweenModuleAudio#DOPitch","DG.Tweening.DOTweenModuleAudio#DOSetFloat","DG.Tweening.DOTweenModuleAudio#DOComplete","DG.Tweening.DOTweenModuleAudio#DOKill","DG.Tweening.DOTweenModuleAudio#DOFlip","DG.Tweening.DOTweenModuleAudio#DOGoto","DG.Tweening.DOTweenModuleAudio#DOPause","DG.Tweening.DOTweenModuleAudio#DOPlay","DG.Tweening.DOTweenModuleAudio#DOPlayBackwards","DG.Tweening.DOTweenModuleAudio#DOPlayForward","DG.Tweening.DOTweenModuleAudio#DORestart","DG.Tweening.DOTweenModuleAudio#DORewind","DG.Tweening.DOTweenModuleAudio#DOSmoothRewind","DG.Tweening.DOTweenModuleAudio#DOTogglePause","DG.Tweening.DOTweenModulePhysics2D#DOMove","DG.Tweening.DOTweenModulePhysics2D#DOMoveX","DG.Tweening.DOTweenModulePhysics2D#DOMoveY","DG.Tweening.DOTweenModulePhysics2D#DORotate","DG.Tweening.DOTweenModulePhysics2D#DOJump","DG.Tweening.DOTweenModulePhysics2D#DOPath","DG.Tweening.DOTweenModulePhysics2D#DOPath$1","DG.Tweening.DOTweenModulePhysics2D#DOLocalPath","DG.Tweening.DOTweenModulePhysics2D#DOLocalPath$1","DG.Tweening.DOTweenModuleSprite#DOColor","DG.Tweening.DOTweenModuleSprite#DOFade","DG.Tweening.DOTweenModuleSprite#DOGradientColor","DG.Tweening.DOTweenModuleSprite#DOBlendableColor","DG.Tweening.DOTweenModuleUI#DOFade","DG.Tweening.DOTweenModuleUI#DOFade$1","DG.Tweening.DOTweenModuleUI#DOFade$2","DG.Tweening.DOTweenModuleUI#DOFade$3","DG.Tweening.DOTweenModuleUI#DOFade$4","DG.Tweening.DOTweenModuleUI#DOColor","DG.Tweening.DOTweenModuleUI#DOColor$1","DG.Tweening.DOTweenModuleUI#DOColor$2","DG.Tweening.DOTweenModuleUI#DOColor$3","DG.Tweening.DOTweenModuleUI#DOFillAmount","DG.Tweening.DOTweenModuleUI#DOGradientColor","DG.Tweening.DOTweenModuleUI#DOFlexibleSize","DG.Tweening.DOTweenModuleUI#DOMinSize","DG.Tweening.DOTweenModuleUI#DOPreferredSize","DG.Tweening.DOTweenModuleUI#DOScale","DG.Tweening.DOTweenModuleUI#DOAnchorPos","DG.Tweening.DOTweenModuleUI#DOAnchorPosX","DG.Tweening.DOTweenModuleUI#DOAnchorPosY","DG.Tweening.DOTweenModuleUI#DOAnchorPos3D","DG.Tweening.DOTweenModuleUI#DOAnchorPos3DX","DG.Tweening.DOTweenModuleUI#DOAnchorPos3DY","DG.Tweening.DOTweenModuleUI#DOAnchorPos3DZ","DG.Tweening.DOTweenModuleUI#DOAnchorMax","DG.Tweening.DOTweenModuleUI#DOAnchorMin","DG.Tweening.DOTweenModuleUI#DOPivot","DG.Tweening.DOTweenModuleUI#DOPivotX","DG.Tweening.DOTweenModuleUI#DOPivotY","DG.Tweening.DOTweenModuleUI#DOSizeDelta","DG.Tweening.DOTweenModuleUI#DOPunchAnchorPos","DG.Tweening.DOTweenModuleUI#DOShakeAnchorPos","DG.Tweening.DOTweenModuleUI#DOShakeAnchorPos$1","DG.Tweening.DOTweenModuleUI#DOJumpAnchorPos","DG.Tweening.DOTweenModuleUI#DONormalizedPos","DG.Tweening.DOTweenModuleUI#DOHorizontalNormalizedPos","DG.Tweening.DOTweenModuleUI#DOVerticalNormalizedPos","DG.Tweening.DOTweenModuleUI#DOValue","DG.Tweening.DOTweenModuleUI#DOCounter","DG.Tweening.DOTweenModuleUI#DOText","DG.Tweening.DOTweenModuleUI#DOBlendableColor","DG.Tweening.DOTweenModuleUI#DOBlendableColor$1","DG.Tweening.DOTweenModuleUI#DOBlendableColor$2","DG.Tweening.DOTweenModuleUI#DOShapeCircle","DG.Tweening.DOTweenModuleUI.Utils#SwitchToRectTransform","DG.Tweening.DOTweenModuleUnityVersion#DOGradientColor","DG.Tweening.DOTweenModuleUnityVersion#DOGradientColor$1","DG.Tweening.DOTweenModuleUnityVersion#WaitForCompletion","DG.Tweening.DOTweenModuleUnityVersion#WaitForRewind","DG.Tweening.DOTweenModuleUnityVersion#WaitForKill","DG.Tweening.DOTweenModuleUnityVersion#WaitForElapsedLoops","DG.Tweening.DOTweenModuleUnityVersion#WaitForPosition","DG.Tweening.DOTweenModuleUnityVersion#WaitForStart","DG.Tweening.DOTweenModuleUnityVersion#DOOffset","DG.Tweening.DOTweenModuleUnityVersion#DOTiling","DG.Tweening.DOTweenModuleUtils#Init","DG.Tweening.DOTweenModuleUtils#Preserver","DG.Tweening.DOTweenModuleUtils.Physics#SetOrientationOnPath","DG.Tweening.DOTweenModuleUtils.Physics#HasRigidbody2D","DG.Tweening.DOTweenModuleUtils.Physics#HasRigidbody","DG.Tweening.DOTweenModuleUtils.Physics#CreateDOTweenPathTween","DG.Tweening.DOTweenProShortcuts#ctor","DG.Tweening.DOTweenProShortcuts#DOSpiral","GameManager#TryParseLevelName","GameManager#init","GameManager#Awake","GameManager#Start","GameManager#EnsureSaveSystem","GameManager#EnsureLoadingManager","GameManager#BindSceneLevel","GameManager#BindLevel","GameManager#ApplySaveForSceneLevel","GameManager#LoadLevel","GameManager#Complete","GameManager#Next","GameManager#Home","GameManager#Continue","GameManager#Restart","GameManager#ReloadActiveScene","GameManager#checkForDrag","GameManager#MuteLevelAudio","GameManager#UnMuteLevelAudio","GameManager#StopAllDrags","GameManager#isOverUI","GameManager#RecordLevelStartEvent","GameManager#RecordLevelCompleteEvent","HalloweenCrownRinse#init","HalloweenCrownRinse#Begin","HalloweenCrownRinse#Enter","HalloweenCrownRinse#LateUpdate","HalloweenCrownRinse#SprayAt","HalloweenCrownRinse#Finish","HalloweenToolRigFit#init","HalloweenToolRigFit#OnEnable","HalloweenToolRigFit#LateUpdate","HalloweenToolRigFit#ApplyFit","LevelData#init","LevelData#TryStartStep","LevelData#Setup","LevelData#LevelStart","LevelData#LevelComplete","LevelData#ToolInputToggle","LevelData#SetProgressBar","LevelData#SetProgressDelay","LevelData#SetAudioAndDrag","LevelSaveData#init","LoadingManager#init","LoadingManager#Awake","LoadingManager#ShowLoading","LoadingManager#ExecuteLoading","LoadingManager#UpdateProgressText","LoadingManager#ShowFadeAnim","MusicSource#Start","MusicSource#PlayMusic","MusicSource#PlayMusicSmooth","PlayableCTA#HasScratchStarted","PlayableCTA#IsCardScratched","PlayableCTA#FireNow","PlayableCTA#OpenStoreOnly","PlayableCTA#OpenStoreStatic","PlayableCTA#init","PlayableCTA#OnEnable","PlayableCTA#OnDisable","PlayableCTA#Update","PlayableCTA#FireCTA","PlayableCTA#FireFromTrigger","PlayableCTA#Fire","PlayableCTA#ShowEndCard","PlayableCTA#OpenStore","PlayableFadeCoverSettings#init","PlayableFadeCoverSettings#OnEnable","PlayableFadeCoverSettings#OnDisable","PlayableHudRuntime#Awake","PlayableHudRuntime#OnPlayClicked","PlayableInstall#Go","PlayParticlesOnCollision#init","PlayParticlesOnCollision#OnTriggerEnter2D","PlaySfxOnCollision#init","PlaySfxOnCollision#Awake","PlaySfxOnCollision#OnTriggerEnter2D","PlaySfxOnCollision#OnTriggerExit2D","PlaySfxOnCollision#Update","PlaySfxOnCollision#HandlePlay","PlaySfxOnCollision#HandleStop","PlaySfxOnCollision#PlayAudio","PlaySfxOnCollision#StopAudio","PlaySfxOnCollision#OnFadeOutComplete","PlaySfxOnCollision#DisableSfx","PlaySfxOnCollision#OnDestroy","PointerInput#IsOverCollider","SaveDataFields#init","SaveSystem#init","SaveSystem#init","SaveSystem#Awake","SaveSystem#EnsureReady","SaveSystem#EnsureAllLevelsExist","SaveSystem#EnsureSubLevels","ScratchCardAsset.Core.Data.Triangle#init","ScratchCardAsset.Core.Data.Triangle#ctor","ScratchCardAsset.Core.Data.Triangle#GetUV","ScratchCardAsset.Core.ScratchCardInput#init","ScratchCardAsset.Core.ScratchCardInput#init","ScratchCardAsset.Core.ScratchCardInput#ctor","ScratchCardAsset.Core.ScratchCardInput#Update","ScratchCardAsset.Core.ScratchCardInput#TryScratch","ScratchCardAsset.Core.ScratchCardInput#Scratch","ScratchCardAsset.Core.ScratchCardInput#ScratchAtPoint","ScratchCardAsset.Core.ScratchCardRenderer#init","ScratchCardAsset.Core.ScratchCardRenderer#init","ScratchCardAsset.Core.ScratchCardRenderer#ctor","ScratchCardAsset.Core.ScratchCardRenderer#Release","ScratchCardAsset.Core.ScratchCardRenderer#CreateRenderTexture","ScratchCardAsset.Core.ScratchCardRenderer#IsInBounds","ScratchCardAsset.Core.ScratchCardRenderer#Filling","ScratchCardAsset.Core.ScratchCardRenderer#FillingLine","ScratchCardAsset.Core.ScratchCardRenderer#ScratchHoleAddition","ScratchCardAsset.Core.ScratchCardRenderer#ScratchHoleAddition$1","ScratchCardAsset.Core.ScratchCardRenderer#ScratchLineAddition","ScratchCardAsset.Core.ScratchCardRenderer#ScratchLineAddition$1","ScratchCardAsset.Core.ScratchCardRenderer#FillRenderTextureWithColor","ScratchCardAsset.Core.ScratchCardRenderer#SetImageSize","ScratchCardAsset.EraseProgress#init","ScratchCardAsset.EraseProgress#Start","ScratchCardAsset.EraseProgress#OnDestroy","ScratchCardAsset.EraseProgress#Update","ScratchCardAsset.EraseProgress#Init","ScratchCardAsset.EraseProgress#GiveProgress","ScratchCardAsset.EraseProgress#CalcProgress","ScratchCardAsset.EraseProgress#GetProgress","ScratchCardAsset.EraseProgress#UpdateProgress","ScratchCardAsset.EraseProgress#ResetProgress","ScratchCardAsset.ScratchCard#init","ScratchCardAsset.ScratchCard#Mode#get","ScratchCardAsset.ScratchCard#Mode#set","ScratchCardAsset.ScratchCard#IsScratched#get","ScratchCardAsset.ScratchCard#IsScratched#set","ScratchCardAsset.ScratchCard#init","ScratchCardAsset.ScratchCard#Start","ScratchCardAsset.ScratchCard#SetStart","ScratchCardAsset.ScratchCard#OnDestroy","ScratchCardAsset.ScratchCard#Update","ScratchCardAsset.ScratchCard#NormalizeThePositionToRotation","ScratchCardAsset.ScratchCard#Init","ScratchCardAsset.ScratchCard#GetScratchBounds","ScratchCardAsset.ScratchCard#InitVariables","ScratchCardAsset.ScratchCard#InitTriangle","ScratchCardAsset.ScratchCard#OnScratchStart","ScratchCardAsset.ScratchCard#OnScratchHole","ScratchCardAsset.ScratchCard#OnScratchLine","ScratchCardAsset.ScratchCard#GetScratchPosition","ScratchCardAsset.ScratchCard#GetCardInput","ScratchCardAsset.ScratchCard#StopColorCoroutine","ScratchCardAsset.ScratchCard#FillInstantly","ScratchCardAsset.ScratchCard#ClearInstantly","ScratchCardAsset.ScratchCard#Clearcurrent","ScratchCardAsset.ScratchCard#Clear","ScratchCardAsset.ScratchCard#ResetRenderTexture","ScratchCardAsset.ScratchCard#GetScratchTexture","ScratchCardAsset.ScratchCard#SetScratchTexture","ScratchCardAsset.ScratchCard#GetCardrenderer","ScratchCardAsset.ScratchCard#ClearSmoothly","ScratchCardAsset.ScratchCard#ClearSmoothlyRoutine","ScratchCardAsset.ScratchCardManager#init","ScratchCardAsset.ScratchCardManager#Awake","ScratchCardAsset.ScratchCardManager#SetEraseTexture","ScratchCardAsset.ScratchCardManager#ResetScratchCard","ScratchCardAsset.ScratchCardManager#GetProgress","ScratchCardAsset.Tools.MeshGenerator#GenerateQuad","ScratchData#init","Statics#GA_LevelStartEvent","Statics#GA_LevelCompleteEvent","Statics#GA_CustomStringEvent","ToastManager#init","ToastManager#Awake","ToastManager#SendToast","ToastManager#HideToast","UI_Manager#init","UI_Manager#init","UI_Manager#Awake","UI_Manager#Update","UI_Manager#MoveButtonsOut","UI_Manager#MoveButtonsIn","UI_Manager#isOverUI","UI_Manager#InitializeTools","UI_Manager#SetProgressIconIndex","UI_Manager#SetProgressBarPos","UI_Manager#SetProgressBar","UI_Manager#SetProgressBarInstant","UI_Manager#SetupToolIconReferences","UI_Manager#FindIconImage","UI_Manager#FindGreyImage","UI_Manager#SetGreyInstant","UI_Manager#FadeGrey","UI_Manager#FindChildObject","UI_Manager#SetToolIcon","UI_Manager#HideToolIcon","UI_Manager#ShowToolIcon","UI_Manager#ShowTool4Instant","UI_Manager#ShowTool4Animated","UI_Manager#HideTool4","UI_Manager#ShowToolTick","UI_Manager#PauseState","UI_Manager#RemoveAdsState","UI_Manager#RateUsState","UI_Manager#ShowCompleteParticles","UI_Manager#Complete","UI_Manager#FadeAnim","UI_Manager#ShowClockProgress","UI_Manager#ShowClockProgress$1","UI_Manager#HideClockProgress","ZoomPos#init","GameManagerPlayable#PlayStepComplete","GameManagerPlayable#PlayParticles","GameManagerPlayable#OnEnable","GameManagerPlayable#Complete","GameManagerPlayable#LunaDirect","Level3_Crown_Playable#Start","Level3_Crown_Playable#AdvanceProgressIcon","Level3_Crown_Playable#StartStep1","Level3_Crown_Playable#Step1Done","Level3_Crown_Playable#ForceCompleteStep1","Level3_Crown_Playable#StartStep2","Level3_Crown_Playable#Step2Done","Level3_Crown_Playable#ForceCompleteStep2","Level3_Crown_Playable#StartStep3","Level3_Crown_Playable#Step3Done","Level3_Crown_Playable#ForceCompleteStep3","HalloweenCrownGameManager#Complete"]' ) ); }
/**
 * @version 1.0.9799.32187
 * @copyright anton
 * @compiler Bridge.NET 17.9.42-luna
 */
Bridge.assembly("UnityScriptsCompiler", function ($asm, globals) {
    "use strict";

    /*ActionOnTap start.*/
    Bridge.define("ActionOnTap", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            OnTap: null,
            OnTapExtra: null,
            isDone: false,
            extraCalled: false,
            myCollider: null
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "ActionOnTap#init", this ); }

                this.extraCalled = false;
            }
        },
        methods: {
            /*ActionOnTap.Awake start.*/
            Awake: function () {
if ( TRACE ) { TRACE( "ActionOnTap#Awake", this ); }

                this.myCollider = this.GetComponent(UnityEngine.Collider2D);
            },
            /*ActionOnTap.Awake end.*/

            /*ActionOnTap.Update start.*/
            Update: function () {
if ( TRACE ) { TRACE( "ActionOnTap#Update", this ); }

                // Luna/Bridge.NET never delivers OnMouseDown for a Collider2D, so poll instead.
                if (UnityEngine.Input.GetMouseButtonDown(0) && PointerInput.IsOverCollider(this.myCollider)) {
                    this.Tap();
                }
            },
            /*ActionOnTap.Update end.*/

            /*ActionOnTap.Tap start.*/
            Tap: function () {
if ( TRACE ) { TRACE( "ActionOnTap#Tap", this ); }

                if (GameManager.instance.isOverUI()) {
                    return;
                }

                if (GameManager.instance.isPaused) {
                    return;
                }

                if (this.isDone) {
                    if (this.extraCalled) {
                        return;
                    }

                    this.extraCalled = true;

                    if (!Bridge.staticEquals(this.OnTapExtra, null)) {
                        this.OnTapExtra();
                    }

                    DG.Tweening.DOVirtual.DelayedCall(0.5, Bridge.fn.bind(this, function () {
                        this.extraCalled = false;
                    }));

                    return;
                }

                this.isDone = true;

                if (this.OnTap != null) {
                    this.OnTap.Invoke();
                }

                // VibrationManager.instance.MediumImpact();
            },
            /*ActionOnTap.Tap end.*/


        }
    });
    /*ActionOnTap end.*/

    /*ArrayExtensions start.*/
    Bridge.define("ArrayExtensions", {
        statics: {
            methods: {
                /*ArrayExtensions.RotateLeft:static start.*/
                RotateLeft: function (T, array) {
if ( TRACE ) { TRACE( "ArrayExtensions#RotateLeft", this ); }

                    if (array.length <= 1) {
                        return;
                    }
                    var temp = Bridge.rValue(array[0]);
                    for (var i = 0; i < ((array.length - 1) | 0); i = (i + 1) | 0) {
                        array[i] = Bridge.rValue(array[((i + 1) | 0)]);
                    }
                    array[((array.length - 1) | 0)] = Bridge.rValue(temp);
                },
                /*ArrayExtensions.RotateLeft:static end.*/

                /*ArrayExtensions.RotateRight:static start.*/
                RotateRight: function (T, array) {
if ( TRACE ) { TRACE( "ArrayExtensions#RotateRight", this ); }

                    if (array.length <= 1) {
                        return;
                    }
                    var temp = Bridge.rValue(array[((array.length - 1) | 0)]);
                    for (var i = (array.length - 1) | 0; i > 0; i = (i - 1) | 0) {
                        array[i] = Bridge.rValue(array[((i - 1) | 0)]);
                    }
                    array[0] = Bridge.rValue(temp);
                },
                /*ArrayExtensions.RotateRight:static end.*/


            }
        }
    });
    /*ArrayExtensions end.*/

    /*AudioController start.*/
    Bridge.define("AudioController", {
        inherits: [UnityEngine.MonoBehaviour],
        statics: {
            fields: {
                instance: null
            }
        },
        fields: {
            MainMixer: null,
            UiClick: null,
            UiClickSource: null,
            SfxSources: null,
            AllClips: null
        },
        methods: {
            /*AudioController.Awake start.*/
            Awake: function () {
if ( TRACE ) { TRACE( "AudioController#Awake", this ); }

                AudioController.instance = this;
            },
            /*AudioController.Awake end.*/

            /*AudioController.Start start.*/
            Start: function () {
if ( TRACE ) { TRACE( "AudioController#Start", this ); }

                this.SetupThings();
            },
            /*AudioController.Start end.*/

            /*AudioController.SetupThings start.*/
            SetupThings: function () {
if ( TRACE ) { TRACE( "AudioController#SetupThings", this ); }

                var musicVolume = UnityEngine.PlayerPrefs.GetFloat("MusicVolume", 0.0);
                this.MainMixer.SetFloat("music", musicVolume);

                var sfxVolume = UnityEngine.PlayerPrefs.GetFloat("SfxVolume", 0.0);
                this.MainMixer.SetFloat("sfx", sfxVolume);
            },
            /*AudioController.SetupThings end.*/

            /*AudioController.PlaySfx start.*/
            PlaySfx: function (sfxSourceIndex, clipIndex, delay) {
if ( TRACE ) { TRACE( "AudioController#PlaySfx", this ); }

                var Exec = null;
                Exec = Bridge.fn.bind(this, function () {
                    var $step = 0,
                        $jumpFromFinally,
                        $returnValue,
                        $async_e;

                    var $enumerator = new Bridge.GeneratorEnumerator(Bridge.fn.bind(this, function () {
                        try {
                            for (;;) {
                                switch ($step) {
                                    case 0: {
                                        $enumerator.current = new UnityEngine.WaitForSeconds(delay);
                                            $step = 1;
                                            return true;
                                    }
                                    case 1: {
                                        this.SfxSources[sfxSourceIndex].PlayOneShot(this.AllClips[clipIndex]);

                                    }
                                    default: {
                                        return false;
                                    }
                                }
                            }
                        } catch($async_e1) {
                            $async_e = System.Exception.create($async_e1);
                            throw $async_e;
                        }
                    }));
                    return $enumerator;
                });
                this.StartCoroutine$1(Exec());


            },
            /*AudioController.PlaySfx end.*/

            /*AudioController.PlayAnySfx start.*/
            PlayAnySfx: function (sfxSourceIndex, anyClip, delay) {
if ( TRACE ) { TRACE( "AudioController#PlayAnySfx", this ); }

                var Exec = null;
                Exec = Bridge.fn.bind(this, function () {
                    var $step = 0,
                        $jumpFromFinally,
                        $returnValue,
                        $async_e;

                    var $enumerator = new Bridge.GeneratorEnumerator(Bridge.fn.bind(this, function () {
                        try {
                            for (;;) {
                                switch ($step) {
                                    case 0: {
                                        $enumerator.current = new UnityEngine.WaitForSeconds(delay);
                                            $step = 1;
                                            return true;
                                    }
                                    case 1: {
                                        this.SfxSources[sfxSourceIndex].PlayOneShot(anyClip);

                                    }
                                    default: {
                                        return false;
                                    }
                                }
                            }
                        } catch($async_e1) {
                            $async_e = System.Exception.create($async_e1);
                            throw $async_e;
                        }
                    }));
                    return $enumerator;
                });
                this.StartCoroutine$1(Exec());


            },
            /*AudioController.PlayAnySfx end.*/

            /*AudioController.PlayUiClickSfx start.*/
            PlayUiClickSfx: function () {
if ( TRACE ) { TRACE( "AudioController#PlayUiClickSfx", this ); }

                this.UiClickSource.PlayOneShot(this.UiClick);
            },
            /*AudioController.PlayUiClickSfx end.*/

            /*AudioController.PlayBtnClickSfx start.*/
            PlayBtnClickSfx: function () {
if ( TRACE ) { TRACE( "AudioController#PlayBtnClickSfx", this ); }

                this.PlaySfx(2, 0, 0);
            },
            /*AudioController.PlayBtnClickSfx end.*/

            /*AudioController.PlayBtnClickSfxGameplay start.*/
            PlayBtnClickSfxGameplay: function () {
if ( TRACE ) { TRACE( "AudioController#PlayBtnClickSfxGameplay", this ); }

                this.PlaySfx(0, 4, 0);
            },
            /*AudioController.PlayBtnClickSfxGameplay end.*/


        }
    });
    /*AudioController end.*/

    /*BasicDrag start.*/
    Bridge.define("BasicDrag", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            canDrag: false,
            dragByDelta: false,
            isDragging: false,
            moveWithPointer: false,
            canReturn: false,
            jumpOnReturn: false,
            returnTime: 0,
            Tool_Offset: null,
            canScaleIncrease: false,
            Self_ScaleNew: null,
            canRotateOnPick: false,
            startRot: null,
            newRot: null,
            childSprite: null,
            ToolSelectClip: null,
            ToolLoopClip: null,
            thisParticles: null,
            onDragparticle: false,
            dragParticles: null,
            anim: null,
            startPos: null,
            startScale: null,
            Vibration: false,
            isPlacedCannotMove: false,
            isObjectMovingWhileDragging: false,
            OnMouseDownEvent: null,
            OnMouseUpEvent: null,
            ProgStartEvent: null,
            ProgEndEvent: null,
            offset: null,
            previousPosition: null,
            cachedMousePosition: null,
            lastMouseWorldPosition: null,
            thisCamera: null,
            dragThreshold: 0,
            saveStartTransform: false,
            canCallMouseUpWhenGamePaused: false,
            ClampX_L: 0,
            ClampX_H: 0,
            ClampY_L: 0,
            ClampY_H: 0,
            startOrder: 0,
            dontResetItIsInCollider: false,
            thisCollider: null,
            thisSR: null,
            OnMouseDownEventIndependentFromCanDrag: null,
            waitTemp: null,
            dragStartPosition: null,
            swipeThreshold: 0,
            co: null,
            isMouseDownPressed: false,
            tempPos: null
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "BasicDrag#init", this ); }

                this.Tool_Offset = new UnityEngine.Vector3();
                this.Self_ScaleNew = new UnityEngine.Vector3();
                this.startRot = new UnityEngine.Vector3();
                this.newRot = new UnityEngine.Vector3();
                this.startPos = new UnityEngine.Vector3();
                this.startScale = new UnityEngine.Vector3();
                this.offset = new UnityEngine.Vector3();
                this.previousPosition = new UnityEngine.Vector3();
                this.cachedMousePosition = new UnityEngine.Vector3();
                this.lastMouseWorldPosition = new UnityEngine.Vector3();
                this.dragStartPosition = new UnityEngine.Vector3();
                this.tempPos = new UnityEngine.Vector3();
                this.canDrag = true;
                this.dragByDelta = false;
                this.isDragging = false;
                this.canReturn = true;
                this.jumpOnReturn = false;
                this.returnTime = 0.2;
                this.Tool_Offset = pc.Vec3.ZERO.clone();
                this.canScaleIncrease = false;
                this.Self_ScaleNew = pc.Vec3.ZERO.clone();
                this.canRotateOnPick = false;
                this.startRot = pc.Vec3.ZERO.clone();
                this.newRot = pc.Vec3.ZERO.clone();
                this.Vibration = false;
                this.isPlacedCannotMove = false;
                this.isObjectMovingWhileDragging = false;
                this.dragThreshold = 0.02;
                this.saveStartTransform = false;
                this.canCallMouseUpWhenGamePaused = true;
                this.ClampX_L = -2.5;
                this.ClampX_H = 2.5;
                this.ClampY_L = -4.0;
                this.ClampY_H = 4.0;
                this.startOrder = 0;
                this.dontResetItIsInCollider = false;
                this.waitTemp = new UnityEngine.WaitForSeconds(0.1);
                this.swipeThreshold = 0.5;
                this.isMouseDownPressed = false;
            }
        },
        methods: {
            /*BasicDrag.Start start.*/
            Start: function () {
if ( TRACE ) { TRACE( "BasicDrag#Start", this ); }

                this.thisCamera = UnityEngine.Camera.main;

                this.isPlacedCannotMove = false;

                this.ResetState();

                this.thisCollider = this.GetComponent(UnityEngine.Collider2D);

                try {
                    this.thisSR = this.GetComponent(UnityEngine.SpriteRenderer);


                    this.startOrder = this.thisSR.sortingOrder;
                } catch ($e1) {
                    $e1 = System.Exception.create($e1);
                }

                this.startRot = this.transform.eulerAngles.$clone();

                if (UnityEngine.Component.op_Inequality(this.anim, null)) {
                    this.anim.Play$1(this.anim.GetCurrentAnimatorStateInfo(0).fullPathHash, 0, 0.0);

                    // Force animator to update this frame
                    this.anim.Update(0.0);
                    this.anim.enabled = false;
                }
            },
            /*BasicDrag.Start end.*/

            /*BasicDrag.OnEnable start.*/
            OnEnable: function () {
if ( TRACE ) { TRACE( "BasicDrag#OnEnable", this ); }

                this.co = this.StartCoroutine$1(this.Exec());
            },
            /*BasicDrag.OnEnable end.*/

            /*BasicDrag.OnDisable start.*/
            OnDisable: function () {
if ( TRACE ) { TRACE( "BasicDrag#OnDisable", this ); }

                if (this.co != null) {
                    this.StopCoroutine$2(this.co);
                }
            },
            /*BasicDrag.OnDisable end.*/

            /*BasicDrag.Update start.*/
            Update: function () {
if ( TRACE ) { TRACE( "BasicDrag#Update", this ); }

                //if (GameManager.instance.isPaused)
                //    return;

                if (this.isPlacedCannotMove || !this.canDrag) {
                    return;
                }

                // Handle dragByDelta mode without collider
                if (this.dragByDelta) {
                    if (UnityEngine.Input.GetMouseButtonDown(0)) {
                        if (this.isOverUI()) {
                            return;
                        }

                        var mouseWorld = this.thisCamera.ScreenToWorldPoint(UnityEngine.Input.mousePosition);

                        //

                        if (UnityEngine.Component.op_Inequality(this.thisParticles, null)) {
                            this.thisParticles.Play();
                        }

                        if (this.moveWithPointer) {
                            this.previousPosition = this.transform.position.$clone();
                        }

                        this.OnDragStart_Delta();


                    } else if (UnityEngine.Input.GetMouseButtonUp(0) && this.isDragging) {
                        if (UnityEngine.Component.op_Inequality(this.thisParticles, null)) {
                            this.thisParticles.Stop();
                        }



                        this.OnDragEnd();
                    }
                } else {
                    if (UnityEngine.Input.GetMouseButtonDown(0)) {
                        if (PointerInput.IsOverCollider(this.thisCollider)) {
                            this.MouseDownPressed();
                        }
                    }

                    if (UnityEngine.Input.GetMouseButtonUp(0)) {
                        if (this.isMouseDownPressed) {
                            this.MouseUpPressed();
                        }
                    }
                }

                if (this.isDragging) {
                    this.HandleDragging();

                    if (UnityEngine.Component.op_Inequality(this.anim, null)) {
                        this.anim.enabled = true;
                    }
                } else {
                    this.isObjectMovingWhileDragging = false;

                    if (UnityEngine.Component.op_Inequality(this.anim, null)) {
                        this.anim.Play$1(this.anim.GetCurrentAnimatorStateInfo(0).fullPathHash, 0, 0.0);

                        // Force animator to update this frame
                        this.anim.Update(0.0);
                        this.anim.enabled = false;
                    }
                }

                if ((this.transform.position.x > 100 || this.transform.position.y > 100) || (this.transform.position.x < -100 || this.transform.position.y < -100)) {
                    this.transform.position = this.startPos.$clone();
                }
            },
            /*BasicDrag.Update end.*/

            /*BasicDrag.Exec start.*/
            Exec: function () {
if ( TRACE ) { TRACE( "BasicDrag#Exec", this ); }

                var $step = 0,
                    $jumpFromFinally,
                    $returnValue,
                    distTemp,
                    $async_e;

                var $enumerator = new Bridge.GeneratorEnumerator(Bridge.fn.bind(this, function () {
                    try {
                        for (;;) {
                            switch ($step) {
                                case 0: {
                                    this.previousPosition = this.transform.position.$clone();
                                    $step = 1;
                                    continue;
                                }
                                case 1: {
                                    if ( true ) {
                                            $step = 2;
                                            continue;
                                        } 
                                        $step = 4;
                                        continue;
                                }
                                case 2: {
                                    if (this.isDragging) {
                                            distTemp = pc.Vec3.distance( this.transform.position, this.previousPosition );

                                            this.isObjectMovingWhileDragging = distTemp > this.dragThreshold;
                                        } else {
                                            this.isObjectMovingWhileDragging = false;
                                        }

                                        if (UnityEngine.Component.op_Inequality(this.dragParticles, null)) {
                                            if (this.onDragparticle) {
                                                this.dragParticles.enableEmission = this.isObjectMovingWhileDragging;
                                            } else {
                                                this.dragParticles.enableEmission = this.isDragging;
                                            }
                                        }

                                        this.previousPosition = this.transform.position.$clone();

                                        $enumerator.current = this.waitTemp;
                                        $step = 3;
                                        return true;
                                }
                                case 3: {
                                    
                                        $step = 1;
                                        continue;
                                }
                                case 4: {

                                }
                                default: {
                                    return false;
                                }
                            }
                        }
                    } catch($async_e1) {
                        $async_e = System.Exception.create($async_e1);
                        throw $async_e;
                    }
                }));
                return $enumerator;
            },
            /*BasicDrag.Exec end.*/

            /*BasicDrag.MouseDownPressed start.*/
            MouseDownPressed: function () {
if ( TRACE ) { TRACE( "BasicDrag#MouseDownPressed", this ); }

                if (this.isOverUI()) {
                    return;
                }

                if (this.dragByDelta) {
                    return;
                }

                if (GameManager.instance.isPaused) {
                    return;
                }

                if (this.isPlacedCannotMove) {
                    return;
                }

                if (!this.canDrag) {
                    !Bridge.staticEquals(this.OnMouseDownEventIndependentFromCanDrag, null) ? this.OnMouseDownEventIndependentFromCanDrag() : null;

                    return;
                }

                this.isMouseDownPressed = true;

                this.OnDragStart();

                !Bridge.staticEquals(this.ProgStartEvent, null) ? this.ProgStartEvent() : null;
                !Bridge.staticEquals(this.OnMouseDownEvent, null) ? this.OnMouseDownEvent() : null;

                if (this.ToolSelectClip != null) {
                    AudioController.instance.PlayAnySfx(0, this.ToolSelectClip, 0.0);
                }

                if (UnityEngine.Component.op_Inequality(this.ToolLoopClip, null)) {
                    this.ToolLoopClip.Play();
                }

                if (UnityEngine.Component.op_Inequality(this.thisParticles, null)) {
                    this.thisParticles.Play();
                }




            },
            /*BasicDrag.MouseDownPressed end.*/

            /*BasicDrag.MouseUpPressed start.*/
            MouseUpPressed: function () {
if ( TRACE ) { TRACE( "BasicDrag#MouseUpPressed", this ); }

                this.isMouseDownPressed = false;

                if (this.dragByDelta) {
                    return;
                }

                if (GameManager.instance.isPaused) {
                    return;
                }

                if (this.isPlacedCannotMove || !this.canDrag) {
                    return;
                }

                this.OnDragEnd();

                !Bridge.staticEquals(this.ProgEndEvent, null) ? this.ProgEndEvent() : null;

                !Bridge.staticEquals(this.OnMouseUpEvent, null) ? this.OnMouseUpEvent() : null;

                if (UnityEngine.Component.op_Inequality(this.thisParticles, null)) {
                    this.thisParticles.Stop();
                }

                if (UnityEngine.Component.op_Inequality(this.ToolLoopClip, null)) {
                    this.ToolLoopClip.Pause();
                }
            },
            /*BasicDrag.MouseUpPressed end.*/

            /*BasicDrag.OnDragStart start.*/
            OnDragStart: function () {
if ( TRACE ) { TRACE( "BasicDrag#OnDragStart", this ); }

                if (!this.saveStartTransform) {
                    this.startPos = this.transform.position.$clone();
                    this.startScale = this.transform.localScale.$clone();
                    this.saveStartTransform = true;
                }

                this.IncreaseSR();
                this.ResetState();
                this.isDragging = true;

                this.cachedMousePosition = this.thisCamera.ScreenToWorldPoint(UnityEngine.Input.mousePosition);
                this.offset = this.transform.position.$clone().sub( this.cachedMousePosition );

                DG.Tweening.ShortcutExtensions.DOKill(this.transform);

                if (this.canScaleIncrease) {
                    DG.Tweening.ShortcutExtensions.DOScale$1(this.transform, this.Self_ScaleNew.$clone(), 0.25);
                }

                if (this.canRotateOnPick) {
                    DG.Tweening.ShortcutExtensions.DOLocalRotate(this.transform, this.newRot.$clone(), 0.25);
                }

                this.dragStartPosition = this.transform.position.$clone();
            },
            /*BasicDrag.OnDragStart end.*/

            /*BasicDrag.OnDragStart_Delta start.*/
            OnDragStart_Delta: function () {
if ( TRACE ) { TRACE( "BasicDrag#OnDragStart_Delta", this ); }

                if (!this.saveStartTransform) {
                    this.startPos = this.transform.position.$clone();
                    this.startScale = this.transform.localScale.$clone();
                    this.saveStartTransform = true;
                }

                this.IncreaseSR();

                this.ResetState();

                this.isDragging = true;

                this.lastMouseWorldPosition = this.thisCamera.ScreenToWorldPoint(UnityEngine.Input.mousePosition);

                if (this.moveWithPointer) {
                    var mouseWorld = this.lastMouseWorldPosition.$clone();
                    this.transform.position = new pc.Vec3( mouseWorld.x + this.Tool_Offset.x, mouseWorld.y + this.Tool_Offset.y, this.startPos.z );
                }


                DG.Tweening.ShortcutExtensions.DOKill(this.transform);

                if (this.canScaleIncrease) {
                    DG.Tweening.ShortcutExtensions.DOScale$1(this.transform, this.Self_ScaleNew.$clone(), 0.25);
                }

                if (this.canRotateOnPick) {
                    DG.Tweening.ShortcutExtensions.DOLocalRotate(this.transform, this.newRot.$clone(), 0.25);
                }

                !Bridge.staticEquals(this.ProgStartEvent, null) ? this.ProgStartEvent() : null;

                !Bridge.staticEquals(this.OnMouseDownEvent, null) ? this.OnMouseDownEvent() : null;

                if (this.ToolSelectClip != null) {
                    AudioController.instance.PlayAnySfx(0, this.ToolSelectClip, 0.0);
                }

                if (UnityEngine.Component.op_Inequality(this.ToolLoopClip, null)) {
                    this.ToolLoopClip.Play();
                }
            },
            /*BasicDrag.OnDragStart_Delta end.*/

            /*BasicDrag.HandleDragging start.*/
            HandleDragging: function () {
if ( TRACE ) { TRACE( "BasicDrag#HandleDragging", this ); }

                var mouseWorld = this.thisCamera.ScreenToWorldPoint(UnityEngine.Input.mousePosition);

                if (this.dragByDelta) {
                    if (this.moveWithPointer) {
                        // Move directly with pointer position
                        var targetPosition = mouseWorld.$clone().add( this.Tool_Offset );
                        // Vector3 targetPosition = mouseWorld;

                        var ClampX = Math.max(this.ClampX_L, Math.min(targetPosition.x, this.ClampX_H));
                        var ClampY = Math.max(this.ClampY_L, Math.min(targetPosition.y, this.ClampY_H));
                        this.tempPos.x = ClampX;
                        this.tempPos.y = ClampY;
                        this.tempPos.z = this.startPos.z;


                        this.transform.position = this.tempPos.$clone();

                        /* if (moveWithPointer)
                        {
                            if (Input.GetMouseButtonDown(0))
                                previousPosition = transform.position;
                        }*/
                    } else {
                        // Existing delta-based movement
                        var delta = mouseWorld.$clone().sub( this.lastMouseWorldPosition );
                        var newPos = this.transform.position.$clone().add( delta );

                        var ClampX1 = Math.max(this.ClampX_L, Math.min(newPos.x, this.ClampX_H));
                        var ClampY1 = Math.max(this.ClampY_L, Math.min(newPos.y, this.ClampY_H));
                        this.tempPos.x = ClampX1;
                        this.tempPos.y = ClampY1;
                        this.tempPos.z = this.startPos.z;


                        this.transform.position = this.tempPos.$clone();

                        this.lastMouseWorldPosition = mouseWorld.$clone();
                    }
                } else {
                    // Original non-delta dragging with lerp
                    var targetPosition1 = mouseWorld.$clone().add( this.offset ).add( this.Tool_Offset );

                    var ClampX2 = Math.max(this.ClampX_L, Math.min(targetPosition1.x, this.ClampX_H));
                    var ClampY2 = Math.max(this.ClampY_L, Math.min(targetPosition1.y, this.ClampY_H));

                    this.tempPos.x = ClampX2;
                    this.tempPos.y = ClampY2;
                    this.tempPos.z = this.startPos.z;

                    targetPosition1 = this.tempPos.$clone();

                    this.transform.position = new pc.Vec3().lerp( this.transform.position, targetPosition1, UnityEngine.Time.deltaTime * 20.0 );
                }
            },
            /*BasicDrag.HandleDragging end.*/

            /*BasicDrag.OnDragEnd start.*/
            OnDragEnd: function (overrideVal) {
if ( TRACE ) { TRACE( "BasicDrag#OnDragEnd", this ); }

                if (overrideVal === void 0) { overrideVal = false; }
                DG.Tweening.ShortcutExtensions.DOKill(this.transform);

                if (this.canScaleIncrease) {
                    DG.Tweening.ShortcutExtensions.DOScale$1(this.transform, this.startScale.$clone(), 0.25);
                }

                if (this.canRotateOnPick) {
                    DG.Tweening.ShortcutExtensions.DOLocalRotate(this.transform, this.startRot.$clone(), 0.25);
                }

                this.ResetState();

                if (overrideVal) {
                    if (this.jumpOnReturn) {
                        // Create a small jump effect before reaching startPos
                        var jumpPeak = this.startPos.$clone().add( pc.Vec3.UP.clone().clone().scale( 0.75 ) ); // Adjust height as needed
                        DG.Tweening.TweenSettingsExtensions.OnComplete(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,UnityEngine.Vector3,DG.Tweening.Plugins.Options.VectorOptions), DG.Tweening.TweenSettingsExtensions.SetEase$2(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,UnityEngine.Vector3,DG.Tweening.Plugins.Options.VectorOptions), DG.Tweening.ShortcutExtensions.DOMove(this.transform, jumpPeak.$clone(), this.returnTime * 0.45), DG.Tweening.Ease.Linear), Bridge.fn.bind(this, function () {
                            DG.Tweening.TweenSettingsExtensions.OnComplete(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,UnityEngine.Vector3,DG.Tweening.Plugins.Options.VectorOptions), DG.Tweening.TweenSettingsExtensions.SetEase$2(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,UnityEngine.Vector3,DG.Tweening.Plugins.Options.VectorOptions), DG.Tweening.ShortcutExtensions.DOMove(this.transform, this.startPos.$clone(), this.returnTime * 0.55), DG.Tweening.Ease.Linear), function () { });
                            this.DecreaseSR();
                        }));
                    } else {
                        DG.Tweening.TweenSettingsExtensions.OnComplete(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,UnityEngine.Vector3,DG.Tweening.Plugins.Options.VectorOptions), DG.Tweening.ShortcutExtensions.DOMove(this.transform, this.startPos.$clone(), this.returnTime), Bridge.fn.bind(this, function () {
                            this.DecreaseSR();
                        }));
                    }
                } else if (this.canReturn && !this.dragByDelta) {
                    if (this.jumpOnReturn) {
                        // Create a small jump effect before reaching startPos
                        var jumpPeak1 = this.startPos.$clone().add( pc.Vec3.UP.clone().clone().scale( 0.75 ) ); // Adjust height as needed
                        DG.Tweening.TweenSettingsExtensions.OnComplete(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,UnityEngine.Vector3,DG.Tweening.Plugins.Options.VectorOptions), DG.Tweening.TweenSettingsExtensions.SetEase$2(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,UnityEngine.Vector3,DG.Tweening.Plugins.Options.VectorOptions), DG.Tweening.ShortcutExtensions.DOMove(this.transform, jumpPeak1.$clone(), this.returnTime * 0.45), DG.Tweening.Ease.Linear), Bridge.fn.bind(this, function () {
                            DG.Tweening.TweenSettingsExtensions.OnComplete(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,UnityEngine.Vector3,DG.Tweening.Plugins.Options.VectorOptions), DG.Tweening.TweenSettingsExtensions.SetEase$2(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,UnityEngine.Vector3,DG.Tweening.Plugins.Options.VectorOptions), DG.Tweening.ShortcutExtensions.DOMove(this.transform, this.startPos.$clone(), this.returnTime * 0.55), DG.Tweening.Ease.Linear), function () { });
                            this.DecreaseSR();
                        }));
                    } else {
                        DG.Tweening.TweenSettingsExtensions.OnComplete(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,UnityEngine.Vector3,DG.Tweening.Plugins.Options.VectorOptions), DG.Tweening.ShortcutExtensions.DOMove(this.transform, this.startPos.$clone(), this.returnTime), Bridge.fn.bind(this, function () {
                            this.DecreaseSR();
                        }));
                    }
                } else {
                    this.DecreaseSR();
                }

                if (!this.dragByDelta) {
                    this.OffestReset();
                }

                !Bridge.staticEquals(this.ProgEndEvent, null) ? this.ProgEndEvent() : null;

                !Bridge.staticEquals(this.OnMouseUpEvent, null) ? this.OnMouseUpEvent() : null;

                if (UnityEngine.Component.op_Inequality(this.ToolLoopClip, null)) {
                    this.ToolLoopClip.Pause();
                }
            },
            /*BasicDrag.OnDragEnd end.*/

            /*BasicDrag.IncreaseSR start.*/
            IncreaseSR: function () {
if ( TRACE ) { TRACE( "BasicDrag#IncreaseSR", this ); }

                if (UnityEngine.Component.op_Inequality(this.thisSR, null)) {
                    this.thisSR.sortingOrder = 500;
                }

                if (this.childSprite.length > 0) {
                    for (var i = 0; i < this.childSprite.length; i = (i + 1) | 0) {
                        this.childSprite[i].sortingOrder = (((501 + i) | 0));
                    }
                }
            },
            /*BasicDrag.IncreaseSR end.*/

            /*BasicDrag.DecreaseSR start.*/
            DecreaseSR: function () {
if ( TRACE ) { TRACE( "BasicDrag#DecreaseSR", this ); }

                if (UnityEngine.Component.op_Inequality(this.thisSR, null)) {
                    this.thisSR.sortingOrder = this.startOrder;
                }

                if (this.childSprite.length > 0) {
                    for (var i = 0; i < this.childSprite.length; i = (i + 1) | 0) {
                        this.childSprite[i].sortingOrder = (this.startOrder + 1) | 0;
                    }
                }
            },
            /*BasicDrag.DecreaseSR end.*/

            /*BasicDrag.ResetState start.*/
            ResetState: function () {
if ( TRACE ) { TRACE( "BasicDrag#ResetState", this ); }

                this.isDragging = false;
                this.offset = pc.Vec3.ZERO.clone();
                this.cachedMousePosition = pc.Vec3.ZERO.clone();
            },
            /*BasicDrag.ResetState end.*/

            /*BasicDrag.OffestReset start.*/
            OffestReset: function () {
if ( TRACE ) { TRACE( "BasicDrag#OffestReset", this ); }

                if (!pc.Vec3.equals( this.Tool_Offset, pc.Vec3.ZERO.clone() )) {
                    this.cachedMousePosition = this.thisCamera.ScreenToWorldPoint(UnityEngine.Input.mousePosition);
                    this.cachedMousePosition = new pc.Vec3( this.transform.position.x, this.cachedMousePosition.y, this.startPos.z );
                    var targetPosition = new UnityEngine.Vector3();

                    if (!this.dontResetItIsInCollider) {
                        targetPosition = this.cachedMousePosition.$clone().sub( this.offset ).sub( this.Tool_Offset );

                        var ClampX = Math.max(this.ClampX_L, Math.min(targetPosition.x, this.ClampX_H));
                        var ClampY = Math.max(this.ClampY_L, Math.min(targetPosition.y, this.ClampY_H));
                        targetPosition = new pc.Vec3( ClampX, ClampY, this.startPos.z );

                        this.transform.position = new pc.Vec3().lerp( this.transform.position, targetPosition, UnityEngine.Time.deltaTime * 20.0 );
                    }
                }
            },
            /*BasicDrag.OffestReset end.*/

            /*BasicDrag.StopTheDrag start.*/
            StopTheDrag: function () {
if ( TRACE ) { TRACE( "BasicDrag#StopTheDrag", this ); }

                this.isDragging = false;

                if (UnityEngine.Component.op_Inequality(this.thisParticles, null)) {
                    this.thisParticles.Stop();
                }



                this.OnDragEnd();
            },
            /*BasicDrag.StopTheDrag end.*/

            /*BasicDrag.HasSwipedDown start.*/
            HasSwipedDown: function () {
if ( TRACE ) { TRACE( "BasicDrag#HasSwipedDown", this ); }

                if (!this.isDragging) {
                    return false;
                }

                var deltaY = this.transform.position.y - this.dragStartPosition.y;

                // Swipe is downward if delta is negative and exceeds threshold
                return deltaY < -this.swipeThreshold;
            },
            /*BasicDrag.HasSwipedDown end.*/

            /*BasicDrag.isOverUI start.*/
            isOverUI: function () {
if ( TRACE ) { TRACE( "BasicDrag#isOverUI", this ); }

                // Ignore drag if pointer is over any UI element
                if (UnityEngine.MonoBehaviour.op_Inequality(UnityEngine.EventSystems.EventSystem.current, null) && UnityEngine.EventSystems.EventSystem.current.IsPointerOverGameObject()) {
                    return true;
                }

                if (UnityEngine.MonoBehaviour.op_Inequality(UnityEngine.EventSystems.EventSystem.current, null) && UnityEngine.Input.touchCount > 0) {
                    if (UnityEngine.EventSystems.EventSystem.current.IsPointerOverGameObject$1(UnityEngine.Input.GetTouch(0).fingerId)) {
                        return true;
                    }
                }

                return false;
            },
            /*BasicDrag.isOverUI end.*/


        }
    });
    /*BasicDrag end.*/

    /*BD_AnimationHelper start.*/
    Bridge.define("BD_AnimationHelper", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            OnAnimationComplete: null,
            sfxClip: null,
            progress: 0
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "BD_AnimationHelper#init", this ); }

                this.progress = 0;
            }
        },
        methods: {
            /*BD_AnimationHelper.TriggerOnComplete start.*/
            TriggerOnComplete: function () {
if ( TRACE ) { TRACE( "BD_AnimationHelper#TriggerOnComplete", this ); }

                if (this.OnAnimationComplete != null) {
                    this.OnAnimationComplete != null ? this.OnAnimationComplete.Invoke() : null;
                    UnityEngine.Debug.Log$1("Animation Event Triggered: OnAnimationComplete");
                }
            },
            /*BD_AnimationHelper.TriggerOnComplete end.*/

            /*BD_AnimationHelper.PlaySfx start.*/
            PlaySfx: function () {
if ( TRACE ) { TRACE( "BD_AnimationHelper#PlaySfx", this ); }



                if (UnityEngine.Object.op_Implicit(this.sfxClip) && UnityEngine.Object.op_Implicit(AudioController.instance)) {
                    AudioController.instance.PlayAnySfx(0, this.sfxClip, 0.0);
                }

                this.progress += 0.2;
                UI_Manager.instance.SetProgressBar(this.progress);
            },
            /*BD_AnimationHelper.PlaySfx end.*/


        }
    });
    /*BD_AnimationHelper end.*/

    /*BD_AnimatorDrag start.*/
    Bridge.define("BD_AnimatorDrag", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            BD: null,
            anim: null,
            Source: null,
            Vibration: false,
            isCompletable: false,
            completionThreshold: 0,
            OnComplete: null,
            isPlaying: false,
            hasCompleted: false
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "BD_AnimatorDrag#init", this ); }

                this.isCompletable = false;
                this.completionThreshold = 0.98;
                this.isPlaying = false;
                this.hasCompleted = false;
            }
        },
        methods: {
            /*BD_AnimatorDrag.Start start.*/
            Start: function () {
if ( TRACE ) { TRACE( "BD_AnimatorDrag#Start", this ); }

                if (UnityEngine.Component.op_Inequality(this.anim, null)) {
                    this.anim.enabled = false;
                }
            },
            /*BD_AnimatorDrag.Start end.*/

            /*BD_AnimatorDrag.PlayAnim start.*/
            PlayAnim: function () {
if ( TRACE ) { TRACE( "BD_AnimatorDrag#PlayAnim", this ); }

                if (this.isPlaying) {
                    return;
                }

                this.isPlaying = true;
                this.hasCompleted = false;

                if (UnityEngine.Component.op_Inequality(this.anim, null)) {
                    this.anim.enabled = true;
                }

                if (UnityEngine.Component.op_Inequality(this.Source, null)) {
                    this.Source.Play();
                }


            },
            /*BD_AnimatorDrag.PlayAnim end.*/

            /*BD_AnimatorDrag.StopAnim start.*/
            StopAnim: function () {
if ( TRACE ) { TRACE( "BD_AnimatorDrag#StopAnim", this ); }

                if (!this.isPlaying) {
                    return;
                }

                this.isPlaying = false;
                this.hasCompleted = false;

                if (UnityEngine.Component.op_Inequality(this.anim, null)) {
                    this.anim.enabled = false;
                }

                if (UnityEngine.Component.op_Inequality(this.Source, null)) {
                    this.Source.Pause();
                }


            },
            /*BD_AnimatorDrag.StopAnim end.*/

            /*BD_AnimatorDrag.Update start.*/
            Update: function () {
if ( TRACE ) { TRACE( "BD_AnimatorDrag#Update", this ); }

                if (UnityEngine.Component.op_Equality(this.anim, null) || UnityEngine.MonoBehaviour.op_Equality(this.BD, null)) {
                    return;
                }

                if (this.BD.isDragging) {
                    if (this.BD.isObjectMovingWhileDragging) {
                        this.PlayAnim();
                    } else {
                        this.StopAnim();
                    }
                } else {
                    this.StopAnim();
                }

                if (this.isCompletable && this.isPlaying && !this.hasCompleted) {
                    var state = this.anim.GetCurrentAnimatorStateInfo(0);

                    if (state.normalizedTime >= this.completionThreshold) {
                        this.hasCompleted = true;

                        this.StopAnim();

                        UI_Manager.instance.SetProgressBar(1.0);

                        if (UnityEngine.Component.op_Inequality(this.Source, null)) {
                            this.Source.Stop();

                            this.Source.enabled = false;
                        }

                        this.OnComplete != null ? this.OnComplete.Invoke() : null;
                    } else {
                        UI_Manager.instance.SetProgressBar(state.normalizedTime);
                    }
                }
            },
            /*BD_AnimatorDrag.Update end.*/


        }
    });
    /*BD_AnimatorDrag end.*/

    /*BD_CameraFollow start.*/
    Bridge.define("BD_CameraFollow", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            Tool: null,
            Pivot: null,
            FOV: 0,
            Y_L: 0,
            Y_H: 0,
            X_L: 0,
            X_R: 0,
            startDelay: 0,
            duration: 0,
            tempPos: null,
            canStart: false,
            wasDragging: false
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "BD_CameraFollow#init", this ); }

                this.tempPos = new UnityEngine.Vector3();
                this.FOV = 5.0;
                this.Y_L = 0.0;
                this.Y_H = 0.0;
                this.X_L = 0.0;
                this.X_R = 0.0;
                this.startDelay = 0.0;
                this.duration = 1.0;
                this.canStart = false;
            }
        },
        methods: {
            /*BD_CameraFollow.Start start.*/
            Start: function () {
if ( TRACE ) { TRACE( "BD_CameraFollow#Start", this ); }

                var $step = 0,
                    $jumpFromFinally,
                    $returnValue,
                    $async_e;

                var $enumerator = new Bridge.GeneratorEnumerator(Bridge.fn.bind(this, function () {
                    try {
                        for (;;) {
                            switch ($step) {
                                case 0: {
                                    if (UnityEngine.Component.op_Equality(this.Pivot, null)) {
                                            this.Pivot = this.transform;
                                        }

                                        $enumerator.current = new UnityEngine.WaitForSeconds(this.startDelay);
                                        $step = 1;
                                        return true;
                                }
                                case 1: {
                                    this.canStart = true;

                                }
                                default: {
                                    return false;
                                }
                            }
                        }
                    } catch($async_e1) {
                        $async_e = System.Exception.create($async_e1);
                        throw $async_e;
                    }
                }));
                return $enumerator;
            },
            /*BD_CameraFollow.Start end.*/

            /*BD_CameraFollow.Update start.*/
            Update: function () {
if ( TRACE ) { TRACE( "BD_CameraFollow#Update", this ); }

                if (!this.canStart) {
                    return;
                }

                if (UnityEngine.MonoBehaviour.op_Equality(this.Tool, null)) {
                    return;
                }

                if (this.Tool.isObjectMovingWhileDragging) {
                    this.tempPos = this.Pivot.transform.position.$clone();
                    this.tempPos.x = Math.max(this.X_L, Math.min(this.tempPos.x, this.X_R));
                    this.tempPos.y = Math.max(this.Y_L, Math.min(this.tempPos.y, this.Y_H));
                    this.tempPos.z = -10;

                    CameraController.Instance.MoveCamera(this.tempPos, this.FOV, this.duration, DG.Tweening.Ease.Linear);
                }

                // Only kill on the frame the finger lifts. Doing it every idle frame also
                // cancelled the camera's return tween when a step completed on release.
                if (this.wasDragging && !this.Tool.isDragging) {
                    CameraController.Instance.KillPositionTweens();
                }

                this.wasDragging = this.Tool.isDragging;

            },
            /*BD_CameraFollow.Update end.*/

            /*BD_CameraFollow.DisableFollow start.*/
            DisableFollow: function () {
if ( TRACE ) { TRACE( "BD_CameraFollow#DisableFollow", this ); }

                this.canStart = false;

                this.enabled = false;
            },
            /*BD_CameraFollow.DisableFollow end.*/


        }
    });
    /*BD_CameraFollow end.*/

    /*BD_Clamp start.*/
    Bridge.define("BD_Clamp", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            ClampX_L: 0,
            ClampX_H: 0,
            ClampY_L: 0,
            ClampY_H: 0,
            BD: null
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "BD_Clamp#init", this ); }

                this.ClampX_L = -2.5;
                this.ClampX_H = 2.5;
                this.ClampY_L = -4.0;
                this.ClampY_H = 4.0;
            }
        },
        methods: {
            /*BD_Clamp.OnEnable start.*/
            OnEnable: function () {
if ( TRACE ) { TRACE( "BD_Clamp#OnEnable", this ); }

                this.StartCoroutine$1(this.AssignVals());
            },
            /*BD_Clamp.OnEnable end.*/

            /*BD_Clamp.AssignVals start.*/
            AssignVals: function () {
if ( TRACE ) { TRACE( "BD_Clamp#AssignVals", this ); }

                var $step = 0,
                    $jumpFromFinally,
                    $returnValue,
                    $async_e;

                var $enumerator = new Bridge.GeneratorEnumerator(Bridge.fn.bind(this, function () {
                    try {
                        for (;;) {
                            switch ($step) {
                                case 0: {
                                    $enumerator.current = new UnityEngine.WaitForSeconds(0.1);
                                        $step = 1;
                                        return true;
                                }
                                case 1: {
                                    this.BD = this.gameObject.GetComponent(BasicDrag);
                                        this.BD.ClampX_L = this.ClampX_L;
                                        this.BD.ClampX_H = this.ClampX_H;
                                        this.BD.ClampY_L = this.ClampY_L;
                                        this.BD.ClampY_H = this.ClampY_H;

                                }
                                default: {
                                    return false;
                                }
                            }
                        }
                    } catch($async_e1) {
                        $async_e = System.Exception.create($async_e1);
                        throw $async_e;
                    }
                }));
                return $enumerator;
            },
            /*BD_Clamp.AssignVals end.*/


        }
    });
    /*BD_Clamp end.*/

    /*BD_Progress start.*/
    Bridge.define("BD_Progress", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            AllScratches: null,
            OnScratchComplete: null,
            isProgDone: false,
            canCallComplete: false,
            CollectiveAppear: false,
            tipControl: false,
            progressControl: false,
            thisDrag: null,
            Co: null,
            waitTemp: null,
            CompleteEvent: null,
            SubCompleteEvent: null
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "BD_Progress#init", this ); }

                this.isProgDone = false;
                this.canCallComplete = false;
                this.CollectiveAppear = false;
                this.tipControl = false;
                this.progressControl = true;
                this.waitTemp = new UnityEngine.WaitForSeconds(0.2);
            }
        },
        methods: {
            /*BD_Progress.Start start.*/
            Start: function () {
if ( TRACE ) { TRACE( "BD_Progress#Start", this ); }

                this.thisDrag = this.GetComponent(BasicDrag);

                this.thisDrag.ProgStartEvent = Bridge.fn.combine(this.thisDrag.ProgStartEvent, Bridge.fn.cacheBind(this, this.EnableProgress));
                this.thisDrag.ProgEndEvent = Bridge.fn.combine(this.thisDrag.ProgEndEvent, Bridge.fn.cacheBind(this, this.DisableProgress));

                this.thisDrag.ProgEndEvent = Bridge.fn.combine(this.thisDrag.ProgEndEvent, Bridge.fn.cacheBind(this, this.CallTheComplete));

                if (this.tipControl) {
                    this.DisableToolTips();
                }
            },
            /*BD_Progress.Start end.*/

            /*BD_Progress.EnableProgress start.*/
            EnableProgress: function () {
if ( TRACE ) { TRACE( "BD_Progress#EnableProgress", this ); }

                DG.Tweening.DOVirtual.DelayedCall(0.1, Bridge.fn.bind(this, function () {
                    for (var i = 0; i < this.AllScratches.length; i = (i + 1) | 0) {
                        this.AllScratches[i].ScratchManager.InputEnabled = true;
                        this.AllScratches[i].ScratchManager.Card.InputEnabled = true;
                        this.AllScratches[i].ScratchManager.Card.IsScratching = true;
                    }

                    this.Co = this.StartCoroutine$1(this.ProgressChecking());
                }));

                if (this.tipControl) {
                    this.EnableToolTips();
                }
            },
            /*BD_Progress.EnableProgress end.*/

            /*BD_Progress.DisableProgress start.*/
            DisableProgress: function () {
if ( TRACE ) { TRACE( "BD_Progress#DisableProgress", this ); }

                for (var i = 0; i < this.AllScratches.length; i = (i + 1) | 0) {
                    this.AllScratches[i].ScratchManager.InputEnabled = false;
                    this.AllScratches[i].ScratchManager.Card.InputEnabled = false;
                    this.AllScratches[i].ScratchManager.Card.IsScratching = false;

                }

                if (this.Co != null) {
                    this.StopCoroutine$2(this.Co);
                }

                if (this.tipControl) {
                    this.DisableToolTips();
                }
            },
            /*BD_Progress.DisableProgress end.*/

            /*BD_Progress.EnableToolTips start.*/
            EnableToolTips: function () {
if ( TRACE ) { TRACE( "BD_Progress#EnableToolTips", this ); }

                for (var i = 0; i < this.AllScratches.length; i = (i + 1) | 0) {
                    this.AllScratches[i].ScratchManager.Card.ToolTip.SetActive(true);
                }
            },
            /*BD_Progress.EnableToolTips end.*/

            /*BD_Progress.DisableToolTips start.*/
            DisableToolTips: function () {
if ( TRACE ) { TRACE( "BD_Progress#DisableToolTips", this ); }

                for (var i = 0; i < this.AllScratches.length; i = (i + 1) | 0) {
                    this.AllScratches[i].ScratchManager.Card.ToolTip.SetActive(false);
                }
            },
            /*BD_Progress.DisableToolTips end.*/

            /*BD_Progress.ProgressChecking start.*/
            ProgressChecking: function () {
if ( TRACE ) { TRACE( "BD_Progress#ProgressChecking", this ); }

                var $step = 0,
                    $jumpFromFinally,
                    $returnValue,
                    $e1,
                    $async_e;

                var $enumerator = new Bridge.GeneratorEnumerator(Bridge.fn.bind(this, function () {
                    try {
                        for (;;) {
                            switch ($step) {
                                case 0: {
                                    if (this.isProgDone) {
                                            $step = 1;
                                            continue;
                                        } 
                                        $step = 2;
                                        continue;
                                }
                                case 1: {
                                    return false;
                                }
                                case 2: {
                                    if ( true ) {
                                            $step = 3;
                                            continue;
                                        } 
                                        $step = 5;
                                        continue;
                                }
                                case 3: {
                                    if (this.CheckAllScratchProgress() && !this.isProgDone) {
                                            if (!Bridge.staticEquals(this.SubCompleteEvent, null)) {
                                                this.SubCompleteEvent();
                                            }

                                            /* if (!thisDrag.isDragging)
                                            {
                                                isProgDone = true;

                                                canCallComplete = true;

                                                CallTheComplete();

                                                UI_Manager.instance.SetProgressBar(1);
                                            }

                                            else*/
                                            this.isProgDone = true;

                                            this.canCallComplete = true;

                                            if (this.progressControl) {
                                                UI_Manager.instance.SetProgressBar(1);
                                            }

                                            if (this.CollectiveAppear) {
                                                // Update Progress
                                                for (var i = 0; i < this.AllScratches.length; i = (i + 1) | 0) {
                                                    // ERASE
                                                    if (this.AllScratches[i].ScratchManager.Mode === ScratchCardAsset.ScratchCard.ScratchMode.Erase) {
                                                        //  FADE ANIM
                                                        try {
                                                            DG.Tweening.DOTweenModuleSprite.DOFade(this.AllScratches[i].ScratchManager.SpriteCard.GetComponent(UnityEngine.SpriteRenderer), 0, 1.0);

                                                        } catch ($e1) {
                                                            $e1 = System.Exception.create($e1);
                                                        }
                                                    } else {
                                                        // SMOOTH APPEAR
                                                        this.AllScratches[i].ScratchManager.Card.ClearSmoothly();
                                                    }
                                                }
                                            }

                                            $step = 5;
                                            continue;
                                        }

                                        if (this.isProgDone) {
                                            $step = 5;
                                            continue;
                                        }

                                        if (this.progressControl) {
                                            UI_Manager.instance.SetProgressBar(this.giveCollectiveProgress());
                                        }

                                        $enumerator.current = this.waitTemp;
                                        $step = 4;
                                        return true;
                                }
                                case 4: {
                                    
                                        $step = 2;
                                        continue;
                                }
                                case 5: {

                                }
                                default: {
                                    return false;
                                }
                            }
                        }
                    } catch($async_e1) {
                        $async_e = System.Exception.create($async_e1);
                        throw $async_e;
                    }
                }));
                return $enumerator;
            },
            /*BD_Progress.ProgressChecking end.*/

            /*BD_Progress.CheckAllScratchProgress start.*/
            CheckAllScratchProgress: function () {
if ( TRACE ) { TRACE( "BD_Progress#CheckAllScratchProgress", this ); }

                // Update Progress
                for (var i = 0; i < this.AllScratches.length; i = (i + 1) | 0) {
                    if (this.AllScratches[i].isComplete) {
                        continue;
                    }

                    // ERASE
                    if (this.AllScratches[i].ScratchManager.Mode === ScratchCardAsset.ScratchCard.ScratchMode.Erase) {
                        if (this.AllScratches[i].ScratchManager.Progress.GiveProgress() >= this.AllScratches[i].scratchLimit) {
                            this.AllScratches[i].isComplete = true;

                            if (!this.CollectiveAppear) {
                                //  FADE ANIM
                                try {
                                    DG.Tweening.DOTweenModuleSprite.DOFade(this.AllScratches[i].ScratchManager.SpriteCard.GetComponent(UnityEngine.SpriteRenderer), 0, 1.0);

                                } catch ($e1) {
                                    $e1 = System.Exception.create($e1);
                                }
                            }
                        }
                    } else {
                        if (this.AllScratches[i].ScratchManager.Progress.GiveProgress() <= this.AllScratches[i].scratchLimit) {
                            this.AllScratches[i].isComplete = true;

                            if (!this.CollectiveAppear) {
                                this.AllScratches[i].ScratchManager.Card.ClearSmoothly();
                            }
                        }
                    }
                }

                var status = true;

                // Check Progress
                for (var i1 = 0; i1 < this.AllScratches.length; i1 = (i1 + 1) | 0) {
                    if (!this.AllScratches[i1].isComplete) {
                        status = false;

                        break;
                    }
                }

                return status;
            },
            /*BD_Progress.CheckAllScratchProgress end.*/

            /*BD_Progress.giveCollectiveProgress start.*/
            giveCollectiveProgress: function () {
if ( TRACE ) { TRACE( "BD_Progress#giveCollectiveProgress", this ); }

                var progressIs = 0.0;

                // Check Progress
                for (var i = 0; i < this.AllScratches.length; i = (i + 1) | 0) {
                    // ERASE
                    if (this.AllScratches[i].ScratchManager.Mode === ScratchCardAsset.ScratchCard.ScratchMode.Erase) {
                        progressIs += this.AllScratches[i].ScratchManager.Progress.GiveProgress();
                    } else {
                        progressIs += Math.abs(1 - this.AllScratches[i].ScratchManager.Progress.GiveProgress());
                    }
                }

                progressIs = Math.abs(progressIs);
                progressIs = progressIs / this.AllScratches.length;

                return progressIs;
            },
            /*BD_Progress.giveCollectiveProgress end.*/

            /*BD_Progress.giveProgressForScratch start.*/
            giveProgressForScratch: function (index) {
if ( TRACE ) { TRACE( "BD_Progress#giveProgressForScratch", this ); }

                var progressIs = 0.0;

                // ERASE
                if (this.AllScratches[index].ScratchManager.Mode === ScratchCardAsset.ScratchCard.ScratchMode.Erase) {
                    progressIs += this.AllScratches[index].ScratchManager.Progress.GiveProgress();
                } else {
                    progressIs += Math.abs(1 - this.AllScratches[index].ScratchManager.Progress.GiveProgress());
                }

                return progressIs;
            },
            /*BD_Progress.giveProgressForScratch end.*/

            /*BD_Progress.CallTheComplete start.*/
            CallTheComplete: function () {
if ( TRACE ) { TRACE( "BD_Progress#CallTheComplete", this ); }

                if (!this.canCallComplete) {
                    return;
                }

                this.DisableProgress();

                if (UnityEngine.Component.op_Inequality(this.thisDrag.thisParticles, null)) {
                    this.thisDrag.thisParticles.Stop();
                }

                if (UnityEngine.Component.op_Inequality(this.thisDrag.dragParticles, null)) {
                    this.thisDrag.dragParticles.Stop();

                    this.thisDrag.dragParticles.enableEmission = false;
                }

                if (this.OnScratchComplete != null) {
                    this.OnScratchComplete.Invoke();
                }

                if (UnityEngine.Component.op_Inequality(this.thisDrag.ToolLoopClip, null)) {
                    this.thisDrag.ToolLoopClip.enabled = false;
                }
            },
            /*BD_Progress.CallTheComplete end.*/


        }
    });
    /*BD_Progress end.*/

    /*BD_ProgressHelper start.*/
    Bridge.define("BD_ProgressHelper", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            BD_Progress: null,
            fadeSprite: null,
            fadeIn: false,
            Co: null,
            waitTemp: null
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "BD_ProgressHelper#init", this ); }

                this.waitTemp = new UnityEngine.WaitForSeconds(0.2);
            }
        },
        methods: {
            /*BD_ProgressHelper.Start start.*/
            Start: function () {
if ( TRACE ) { TRACE( "BD_ProgressHelper#Start", this ); }

                var $step = 0,
                    $jumpFromFinally,
                    $returnValue,
                    $async_e;

                var $enumerator = new Bridge.GeneratorEnumerator(Bridge.fn.bind(this, function () {
                    try {
                        for (;;) {
                            switch ($step) {
                                case 0: {
                                    $enumerator.current = new UnityEngine.WaitForSeconds(0.05);
                                        $step = 1;
                                        return true;
                                }
                                case 1: {
                                    this.BD_Progress.thisDrag.ProgStartEvent = Bridge.fn.combine(this.BD_Progress.thisDrag.ProgStartEvent, Bridge.fn.cacheBind(this, this.EnableProgress));
                                        this.BD_Progress.thisDrag.ProgEndEvent = Bridge.fn.combine(this.BD_Progress.thisDrag.ProgEndEvent, Bridge.fn.cacheBind(this, this.DisableProgress));

                                }
                                default: {
                                    return false;
                                }
                            }
                        }
                    } catch($async_e1) {
                        $async_e = System.Exception.create($async_e1);
                        throw $async_e;
                    }
                }));
                return $enumerator;
            },
            /*BD_ProgressHelper.Start end.*/

            /*BD_ProgressHelper.EnableProgress start.*/
            EnableProgress: function () {
if ( TRACE ) { TRACE( "BD_ProgressHelper#EnableProgress", this ); }

                this.Co = this.StartCoroutine$1(this.ProgressChecking());
            },
            /*BD_ProgressHelper.EnableProgress end.*/

            /*BD_ProgressHelper.DisableProgress start.*/
            DisableProgress: function () {
if ( TRACE ) { TRACE( "BD_ProgressHelper#DisableProgress", this ); }

                if (this.Co != null) {
                    this.StopCoroutine$2(this.Co);
                }
            },
            /*BD_ProgressHelper.DisableProgress end.*/

            /*BD_ProgressHelper.ProgressChecking start.*/
            ProgressChecking: function () {
if ( TRACE ) { TRACE( "BD_ProgressHelper#ProgressChecking", this ); }

                var $step = 0,
                    $jumpFromFinally,
                    $returnValue,
                    progressIs,
                    $async_e;

                var $enumerator = new Bridge.GeneratorEnumerator(Bridge.fn.bind(this, function () {
                    try {
                        for (;;) {
                            switch ($step) {
                                case 0: {
                                    if (this.BD_Progress.isProgDone) {
                                            $step = 1;
                                            continue;
                                        } 
                                        $step = 2;
                                        continue;
                                }
                                case 1: {
                                    return false;
                                }
                                case 2: {
                                    if ( !this.BD_Progress.isProgDone ) {
                                            $step = 3;
                                            continue;
                                        } 
                                        $step = 5;
                                        continue;
                                }
                                case 3: {
                                    progressIs = this.BD_Progress.giveCollectiveProgress();

                                        if (UnityEngine.Component.op_Inequality(this.fadeSprite, null)) {
                                            if (this.fadeIn) {
                                                DG.Tweening.DOTweenModuleSprite.DOFade(this.fadeSprite, progressIs, 1.0);
                                            } else {
                                                DG.Tweening.DOTweenModuleSprite.DOFade(this.fadeSprite, 1.0 - progressIs, 1.0);
                                            }
                                        }

                                        $enumerator.current = this.waitTemp;
                                        $step = 4;
                                        return true;
                                }
                                case 4: {
                                    
                                        $step = 2;
                                        continue;
                                }
                                case 5: {

                                }
                                default: {
                                    return false;
                                }
                            }
                        }
                    } catch($async_e1) {
                        $async_e = System.Exception.create($async_e1);
                        throw $async_e;
                    }
                }));
                return $enumerator;
            },
            /*BD_ProgressHelper.ProgressChecking end.*/


        }
    });
    /*BD_ProgressHelper end.*/

    /*BD_SpriteChange start.*/
    Bridge.define("BD_SpriteChange", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            BD: null,
            SR: null,
            Default: null,
            Picked: null,
            resetOnRelease: false
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "BD_SpriteChange#init", this ); }

                this.resetOnRelease = true;
            }
        },
        methods: {
            /*BD_SpriteChange.Start start.*/
            Start: function () {
if ( TRACE ) { TRACE( "BD_SpriteChange#Start", this ); }

                var $step = 0,
                    $jumpFromFinally,
                    $returnValue,
                    $async_e;

                var $enumerator = new Bridge.GeneratorEnumerator(Bridge.fn.bind(this, function () {
                    try {
                        for (;;) {
                            switch ($step) {
                                case 0: {
                                    $enumerator.current = new UnityEngine.WaitForSeconds(0.1);
                                        $step = 1;
                                        return true;
                                }
                                case 1: {
                                    this.BD.OnMouseDownEvent = Bridge.fn.combine(this.BD.OnMouseDownEvent, Bridge.fn.cacheBind(this, this.ToolPicked));

                                        if (this.resetOnRelease) {
                                            this.BD.OnMouseUpEvent = Bridge.fn.combine(this.BD.OnMouseUpEvent, Bridge.fn.cacheBind(this, this.ToolReleased));
                                        }

                                        this.ToolReleased();

                                }
                                default: {
                                    return false;
                                }
                            }
                        }
                    } catch($async_e1) {
                        $async_e = System.Exception.create($async_e1);
                        throw $async_e;
                    }
                }));
                return $enumerator;
            },
            /*BD_SpriteChange.Start end.*/

            /*BD_SpriteChange.ToolPicked start.*/
            ToolPicked: function () {
if ( TRACE ) { TRACE( "BD_SpriteChange#ToolPicked", this ); }

                this.SR.sprite = this.Picked;
            },
            /*BD_SpriteChange.ToolPicked end.*/

            /*BD_SpriteChange.ToolReleased start.*/
            ToolReleased: function () {
if ( TRACE ) { TRACE( "BD_SpriteChange#ToolReleased", this ); }

                this.SR.sprite = this.Default;
            },
            /*BD_SpriteChange.ToolReleased end.*/


        }
    });
    /*BD_SpriteChange end.*/

    /*BD_ToolRotate start.*/
    Bridge.define("BD_ToolRotate", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            startDelay: 0,
            Tool: null,
            Clamp: null,
            Pivot: null,
            MinAngle: null,
            MaxAngle: null,
            rotationSpeed: 0,
            canStart: false,
            targetT: 0,
            currentT: 0
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "BD_ToolRotate#init", this ); }

                this.MinAngle = new UnityEngine.Vector3();
                this.MaxAngle = new UnityEngine.Vector3();
                this.startDelay = 0.0;
                this.rotationSpeed = 20.0;
                this.canStart = false;
                this.targetT = 0.0;
                this.currentT = 0.0;
            }
        },
        methods: {
            /*BD_ToolRotate.Start start.*/
            Start: function () {
if ( TRACE ) { TRACE( "BD_ToolRotate#Start", this ); }

                var $step = 0,
                    $jumpFromFinally,
                    $returnValue,
                    x,
                    normalized,
                    $async_e;

                var $enumerator = new Bridge.GeneratorEnumerator(Bridge.fn.bind(this, function () {
                    try {
                        for (;;) {
                            switch ($step) {
                                case 0: {
                                    if (UnityEngine.Component.op_Equality(this.Pivot, null)) {
                                            this.Pivot = this.transform;
                                        }

                                        if (UnityEngine.MonoBehaviour.op_Equality(this.Clamp, null)) {
                                            this.Clamp = UnityEngine.MonoBehaviour.op_Inequality(this.Tool, null) ? this.Tool.GetComponent(BD_Clamp) : null;
                                        }

                                        // Initialize rotation state BEFORE enabling updates
                                        if (UnityEngine.MonoBehaviour.op_Inequality(this.Tool, null) && UnityEngine.MonoBehaviour.op_Inequality(this.Clamp, null)) {
                                            x = this.Tool.transform.localPosition.x;
                                            normalized = pc.math.inverseLerp(this.Clamp.ClampX_L, this.Clamp.ClampX_H, x);

                                            this.currentT = normalized;
                                            this.targetT = normalized;

                                            this.Pivot.localEulerAngles = new pc.Vec3().lerp( this.MinAngle, this.MaxAngle, this.currentT );
                                        }

                                        $enumerator.current = new UnityEngine.WaitForSeconds(this.startDelay);
                                        $step = 1;
                                        return true;
                                }
                                case 1: {
                                    this.canStart = true;

                                }
                                default: {
                                    return false;
                                }
                            }
                        }
                    } catch($async_e1) {
                        $async_e = System.Exception.create($async_e1);
                        throw $async_e;
                    }
                }));
                return $enumerator;
            },
            /*BD_ToolRotate.Start end.*/

            /*BD_ToolRotate.Update start.*/
            Update: function () {
if ( TRACE ) { TRACE( "BD_ToolRotate#Update", this ); }

                if (!this.canStart || UnityEngine.MonoBehaviour.op_Equality(this.Tool, null) || UnityEngine.MonoBehaviour.op_Equality(this.Clamp, null)) {
                    return;
                }

                // Normalize Tool X position between 0 and 1
                var x = this.Tool.transform.localPosition.x;
                var normalized = pc.math.inverseLerp(this.Clamp.ClampX_L, this.Clamp.ClampX_H, x);

                this.targetT = normalized;

                // Smoothly interpolate for natural motion
                this.currentT = pc.math.lerp(this.currentT, this.targetT, UnityEngine.Time.deltaTime * this.rotationSpeed);

                // Apply rotation
                this.Pivot.localEulerAngles = new pc.Vec3().lerp( this.MinAngle, this.MaxAngle, this.currentT );
            },
            /*BD_ToolRotate.Update end.*/


        }
    });
    /*BD_ToolRotate end.*/

    /*CameraController start.*/
    Bridge.define("CameraController", {
        inherits: [UnityEngine.MonoBehaviour],
        statics: {
            fields: {
                Instance: null
            }
        },
        fields: {
            cam: null,
            defaultPosition: null,
            defaultSize: 0,
            defaultFOV: 0,
            defaultDuration: 0,
            defaultEase: 0,
            positionTween: null,
            sizeTween: null
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "CameraController#init", this ); }

                this.defaultPosition = new UnityEngine.Vector3();
                this.defaultPosition = new pc.Vec3( 0, 0, -10 );
                this.defaultSize = 5.0;
                this.defaultFOV = 60.0;
                this.defaultDuration = 1.0;
                this.defaultEase = DG.Tweening.Ease.Linear;
            }
        },
        methods: {
            /*CameraController.Awake start.*/
            Awake: function () {
if ( TRACE ) { TRACE( "CameraController#Awake", this ); }

                if (UnityEngine.MonoBehaviour.op_Equality(CameraController.Instance, null)) {
                    CameraController.Instance = this;
                }

                this.cam = UnityEngine.Camera.main;

                this.ResetCameraInstant();
            },
            /*CameraController.Awake end.*/

            /*CameraController.SetCameraInstant start.*/
            SetCameraInstant: function (newPosition, sizeOrFov) {
if ( TRACE ) { TRACE( "CameraController#SetCameraInstant", this ); }

                this.KillTweens();
                this.cam.transform.position = newPosition.$clone();

                if (this.cam.orthographic) {
                    this.cam.orthographicSize = sizeOrFov;
                } else {
                    this.cam.fieldOfView = sizeOrFov;
                }
            },
            /*CameraController.SetCameraInstant end.*/

            /*CameraController.MoveCamera start.*/
            MoveCamera: function (targetPosition, targetSizeOrFov, duration, ease) {
if ( TRACE ) { TRACE( "CameraController#MoveCamera", this ); }

                var $t;
                if (duration === void 0) { duration = -1.0; }
                if (ease === void 0) { ease = null; }
                this.KillTweens();
                DG.Tweening.ShortcutExtensions.DOKill(this.cam.transform);

                duration = (duration <= 0) ? this.defaultDuration : duration;
                var tweenEase = ($t = ease, $t != null ? $t : this.defaultEase);

                this.positionTween = DG.Tweening.TweenSettingsExtensions.SetEase$2(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,UnityEngine.Vector3,DG.Tweening.Plugins.Options.VectorOptions), DG.Tweening.ShortcutExtensions.DOMove(this.cam.transform, targetPosition.$clone(), duration), tweenEase);

                if (this.cam.orthographic) {
                    this.sizeTween = DG.Tweening.TweenSettingsExtensions.SetEase$2(DG.Tweening.Core.TweenerCore$3(System.Single,System.Single,DG.Tweening.Plugins.Options.FloatOptions), DG.Tweening.DOTween.To$4(Bridge.fn.bind(this, function () {
                        return this.cam.orthographicSize;
                    }), Bridge.fn.bind(this, function (x) {
                        this.cam.orthographicSize = x;
                    }), targetSizeOrFov, duration), tweenEase);
                } else {
                    this.sizeTween = DG.Tweening.TweenSettingsExtensions.SetEase$2(DG.Tweening.Core.TweenerCore$3(System.Single,System.Single,DG.Tweening.Plugins.Options.FloatOptions), DG.Tweening.DOTween.To$4(Bridge.fn.bind(this, function () {
                        return this.cam.fieldOfView;
                    }), Bridge.fn.bind(this, function (x) {
                        this.cam.fieldOfView = x;
                    }), targetSizeOrFov, duration), tweenEase);
                }
            },
            /*CameraController.MoveCamera end.*/

            /*CameraController.ResetCameraInstant start.*/
            ResetCameraInstant: function () {
if ( TRACE ) { TRACE( "CameraController#ResetCameraInstant", this ); }

                this.SetCameraInstant(this.defaultPosition, this.cam.orthographic ? this.defaultSize : this.defaultFOV);
            },
            /*CameraController.ResetCameraInstant end.*/

            /*CameraController.ResetCameraTween start.*/
            ResetCameraTween: function (duration) {
if ( TRACE ) { TRACE( "CameraController#ResetCameraTween", this ); }

                if (duration === void 0) { duration = -1.0; }
                this.MoveCamera(this.defaultPosition, this.cam.orthographic ? this.defaultSize : this.defaultFOV, duration);
            },
            /*CameraController.ResetCameraTween end.*/

            /*CameraController.KillTweens start.*/
            KillTweens: function () {
if ( TRACE ) { TRACE( "CameraController#KillTweens", this ); }

                this.positionTween != null ? DG.Tweening.TweenExtensions.Kill(this.positionTween) : null;
                this.sizeTween != null ? DG.Tweening.TweenExtensions.Kill(this.sizeTween) : null;
            },
            /*CameraController.KillTweens end.*/

            /*CameraController.KillPositionTweens start.*/
            KillPositionTweens: function () {
if ( TRACE ) { TRACE( "CameraController#KillPositionTweens", this ); }

                this.positionTween != null ? DG.Tweening.TweenExtensions.Kill(this.positionTween) : null;
            },
            /*CameraController.KillPositionTweens end.*/

            /*CameraController.Camera_Shake start.*/
            Camera_Shake: function () {
if ( TRACE ) { TRACE( "CameraController#Camera_Shake", this ); }

                DG.Tweening.ShortcutExtensions.DOKill(this.transform);
                DG.Tweening.ShortcutExtensions.DOShakePosition$2(this.transform, 0.4, 0.05, 10, 10);
            },
            /*CameraController.Camera_Shake end.*/


        }
    });
    /*CameraController end.*/

    /*CarouselScroller start.*/
    Bridge.define("CarouselScroller", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            itemPrefab: null,
            leftPosition: null,
            centerPosition: null,
            rightPosition: null,
            smallScale: null,
            largeScale: null,
            animationDuration: 0,
            toolSprites: null,
            items: null,
            itemScripts: null,
            currentIndex: 0,
            isAnimating: false
        },
        props: {
            CenterItemObj: {
                get: function () {
if ( TRACE ) { TRACE( "CarouselScroller#CenterItemObj#get", this ); }

                    return this.items[1];
                }
            }
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "CarouselScroller#init", this ); }

                this.leftPosition = new UnityEngine.Vector3();
                this.centerPosition = new UnityEngine.Vector3();
                this.rightPosition = new UnityEngine.Vector3();
                this.smallScale = new UnityEngine.Vector3();
                this.largeScale = new UnityEngine.Vector3();
                this.leftPosition = new pc.Vec3( -250.0, 0.0, 0.0 );
                this.centerPosition = new pc.Vec3( 0.0, 0.0, 0.0 );
                this.rightPosition = new pc.Vec3( 250.0, 0.0, 0.0 );
                this.smallScale = new pc.Vec3( 0.7, 0.7, 1.0 );
                this.largeScale = new pc.Vec3( 1.1, 1.1, 1.1 );
                this.animationDuration = 0.4;
                this.toolSprites = new (System.Collections.Generic.List$1(UnityEngine.Sprite)).ctor();
                this.items = System.Array.init(4, null, UnityEngine.GameObject);
                this.itemScripts = System.Array.init(4, null, scroller_Item);
                this.currentIndex = 0;
                this.isAnimating = false;
            }
        },
        methods: {
            /*CarouselScroller.InitCarousel start.*/
            InitCarousel: function (sprites) {
if ( TRACE ) { TRACE( "CarouselScroller#InitCarousel", this ); }

                var $t;
                this.toolSprites = sprites;
                this.currentIndex = 0;

                $t = Bridge.getEnumerator(this.transform);
                try {
                    while ($t.moveNext()) {
                        var child = Bridge.cast($t.Current, UnityEngine.Transform);
                        UnityEngine.MonoBehaviour.Destroy(child.gameObject);
                    }
                } finally {
                    if (Bridge.is($t, System.IDisposable)) {
                        $t.System$IDisposable$Dispose();
                    }
                }

                for (var i = 0; i < 4; i = (i + 1) | 0) {
                    this.items[i] = UnityEngine.Object.Instantiate(UnityEngine.GameObject, this.itemPrefab, this.transform);
                    this.itemScripts[i] = this.items[i].GetComponentInChildren(scroller_Item);
                    this.itemScripts[i].tick.SetActive(false);
                }

                this.SetupInitialPositions();
                this.UpdateAllItemData(true);
                this.UpdateEdgeVisibility();
            },
            /*CarouselScroller.InitCarousel end.*/

            /*CarouselScroller.SetupInitialPositions start.*/
            SetupInitialPositions: function () {
if ( TRACE ) { TRACE( "CarouselScroller#SetupInitialPositions", this ); }

                this.items[0].transform.localPosition = this.leftPosition.$clone();
                this.items[1].transform.localPosition = this.centerPosition.$clone();
                this.items[2].transform.localPosition = this.rightPosition.$clone();
                this.items[3].transform.localPosition = this.rightPosition.$clone().add( new pc.Vec3( 150.0, 0.0, 0.0 ) );

                this.items[0].transform.localScale = this.smallScale.$clone();
                this.items[1].transform.localScale = this.largeScale.$clone();
                this.items[2].transform.localScale = this.smallScale.$clone();
                this.items[3].transform.localScale = this.smallScale.$clone();

                // Background Alphas Set Karein
                this.SetItemAlphaState(this.itemScripts[0], 0, 1, 0); // Left
                this.SetItemAlphaState(this.itemScripts[1], 1, 0, 0); // Center
                this.SetItemAlphaState(this.itemScripts[2], 0, 0, 1); // Right
                this.SetItemAlphaState(this.itemScripts[3], 0, 0, 1); // Buffer

                // CanvasGroup Alphas Set Karein (Recycle hone par 0,1,2 hamesha 1 rahen)
                this.itemScripts[0].can_group.alpha = 1.0;
                this.itemScripts[1].can_group.alpha = 1.0;
                this.itemScripts[2].can_group.alpha = 1.0;
                this.itemScripts[3].can_group.alpha = 0.0; // Incoming item invisible se shuru hoga
            },
            /*CarouselScroller.SetupInitialPositions end.*/

            /*CarouselScroller.SetItemAlphaState start.*/
            SetItemAlphaState: function (item, bgA, fadeLA, fadeRA) {
if ( TRACE ) { TRACE( "CarouselScroller#SetItemAlphaState", this ); }

                if (UnityEngine.MonoBehaviour.op_Equality(item, null)) {
                    return;
                }
                this.SetAlpha(item.bg, bgA);
                this.SetAlpha(item.bg_fade_L, fadeLA);
                this.SetAlpha(item.bg_fade_R, fadeRA);
            },
            /*CarouselScroller.SetItemAlphaState end.*/

            /*CarouselScroller.SetAlpha start.*/
            SetAlpha: function (img, alpha) {
if ( TRACE ) { TRACE( "CarouselScroller#SetAlpha", this ); }

                if (UnityEngine.MonoBehaviour.op_Equality(img, null)) {
                    return;
                }
                var c = img.color.$clone();
                c.a = alpha;
                img.color = c.$clone();
            },
            /*CarouselScroller.SetAlpha end.*/

            /*CarouselScroller.EnableCurrentTick start.*/
            EnableCurrentTick: function () {
if ( TRACE ) { TRACE( "CarouselScroller#EnableCurrentTick", this ); }

                if (UnityEngine.MonoBehaviour.op_Inequality(this.itemScripts[1], null) && UnityEngine.GameObject.op_Inequality(this.itemScripts[1].tick, null)) {
                    this.itemScripts[1].tick.SetActive(true);
                }
            },
            /*CarouselScroller.EnableCurrentTick end.*/

            /*CarouselScroller.EnableCurrentTick1st start.*/
            EnableCurrentTick1st: function () {
if ( TRACE ) { TRACE( "CarouselScroller#EnableCurrentTick1st", this ); }

                if (UnityEngine.MonoBehaviour.op_Inequality(this.itemScripts[0], null) && UnityEngine.GameObject.op_Inequality(this.itemScripts[0].tick, null)) {
                    this.itemScripts[0].tick.SetActive(true);
                }
            },
            /*CarouselScroller.EnableCurrentTick1st end.*/

            /*CarouselScroller.ScrollNext start.*/
            ScrollNext: function () {
if ( TRACE ) { TRACE( "CarouselScroller#ScrollNext", this ); }

                if (this.isAnimating || this.currentIndex >= ((this.toolSprites.Count - 1) | 0)) {
                    return;
                }
                this.StartCoroutine$1(this.Animate(1));
            },
            /*CarouselScroller.ScrollNext end.*/

            /*CarouselScroller.Animate start.*/
            Animate: function (direction) {
if ( TRACE ) { TRACE( "CarouselScroller#Animate", this ); }

                var $step = 0,
                    $jumpFromFinally,
                    $returnValue,
                    time,
                    offScreenLeft,
                    incomingDataIndex,
                    t,
                    $async_e;

                var $enumerator = new Bridge.GeneratorEnumerator(Bridge.fn.bind(this, function () {
                    try {
                        for (;;) {
                            switch ($step) {
                                case 0: {
                                    this.isAnimating = true;
                                        time = 0.0;
                                        offScreenLeft = this.leftPosition.$clone().add( new pc.Vec3( -200.0, 0.0, 0.0 ) );

                                        incomingDataIndex = (this.currentIndex + 2) | 0;
                                        this.SetItemData(3, incomingDataIndex, true);
                                        this.SetItemAlphaState(this.itemScripts[3], 0, 0, 1);

                                        // Incoming item starting alpha
                                        this.itemScripts[3].can_group.alpha = 0.0;
                                    $step = 1;
                                    continue;
                                }
                                case 1: {
                                    if ( time < this.animationDuration ) {
                                            $step = 2;
                                            continue;
                                        } 
                                        $step = 4;
                                        continue;
                                }
                                case 2: {
                                    time += UnityEngine.Time.deltaTime;
                                        t = pc.math.smoothstep(0.0, 1.0, time / this.animationDuration);

                                        // Movement & Scale
                                        this.items[0].transform.localPosition = new pc.Vec3().lerp( this.leftPosition, offScreenLeft, t );
                                        this.items[1].transform.localPosition = new pc.Vec3().lerp( this.centerPosition, this.leftPosition, t );
                                        this.items[1].transform.localScale = new pc.Vec3().lerp( this.largeScale, this.smallScale, t );
                                        this.items[2].transform.localPosition = new pc.Vec3().lerp( this.rightPosition, this.centerPosition, t );
                                        this.items[2].transform.localScale = new pc.Vec3().lerp( this.smallScale, this.largeScale, t );

                                        if (this.items[3].activeSelf) {
                                            this.items[3].transform.localPosition = new pc.Vec3().lerp( this.rightPosition.$clone().add( new pc.Vec3( 150.0, 0.0, 0.0 ) ), this.rightPosition, t );
                                            // --- CAN_GROUP FADE IN (Incoming) ---
                                            this.itemScripts[3].can_group.alpha = t;
                                        }

                                        // --- CAN_GROUP FADE OUT (Outgoing Left) ---
                                        this.itemScripts[0].can_group.alpha = 1 - (t * 2);

                                        // --- BACKGROUNDS TRANSITIONS ---
                                        // Item 1: Center to Left
                                        this.SetAlpha(this.itemScripts[1].bg, 1 - t);
                                        this.SetAlpha(this.itemScripts[1].bg_fade_L, t);

                                        // Item 2: Right to Center
                                        this.SetAlpha(this.itemScripts[2].bg_fade_R, 1 - t);
                                        this.SetAlpha(this.itemScripts[2].bg, t);

                                        $enumerator.current = null;
                                        $step = 3;
                                        return true;
                                }
                                case 3: {
                                    
                                        $step = 1;
                                        continue;
                                }
                                case 4: {
                                    ArrayExtensions.RotateLeft(UnityEngine.GameObject, this.items);
                                        ArrayExtensions.RotateLeft(scroller_Item, this.itemScripts);
                                        this.currentIndex = (this.currentIndex + 1) | 0;

                                        this.SetupInitialPositions();
                                        this.UpdateAllItemData(false);
                                        this.UpdateEdgeVisibility();
                                        this.isAnimating = false;

                                }
                                default: {
                                    return false;
                                }
                            }
                        }
                    } catch($async_e1) {
                        $async_e = System.Exception.create($async_e1);
                        throw $async_e;
                    }
                }));
                return $enumerator;
            },
            /*CarouselScroller.Animate end.*/

            /*CarouselScroller.UpdateAllItemData start.*/
            UpdateAllItemData: function (resetAllTicks) {
if ( TRACE ) { TRACE( "CarouselScroller#UpdateAllItemData", this ); }

                this.SetItemData(0, ((this.currentIndex - 1) | 0), resetAllTicks);
                this.SetItemData(1, this.currentIndex, resetAllTicks);
                this.SetItemData(2, ((this.currentIndex + 1) | 0), resetAllTicks);
            },
            /*CarouselScroller.UpdateAllItemData end.*/

            /*CarouselScroller.SetItemData start.*/
            SetItemData: function (slotIndex, dataIndex, resetTick) {
if ( TRACE ) { TRACE( "CarouselScroller#SetItemData", this ); }

                if (dataIndex < 0 || dataIndex >= this.toolSprites.Count) {
                    this.items[slotIndex].SetActive(false);
                    return;
                }

                this.items[slotIndex].SetActive(true);
                if (UnityEngine.MonoBehaviour.op_Inequality(this.itemScripts[slotIndex], null)) {
                    this.itemScripts[slotIndex].icon.sprite = this.toolSprites.getItem(dataIndex);
                    if (resetTick) {
                        this.itemScripts[slotIndex].tick.SetActive(false);
                    }
                }
            },
            /*CarouselScroller.SetItemData end.*/

            /*CarouselScroller.UpdateEdgeVisibility start.*/
            UpdateEdgeVisibility: function () {
if ( TRACE ) { TRACE( "CarouselScroller#UpdateEdgeVisibility", this ); }

                this.items[0].SetActive(this.currentIndex > 0);
                this.items[2].SetActive(this.currentIndex < ((this.toolSprites.Count - 1) | 0));

                // Items inactive hain toh unki alpha ka masla nahi, 
                // par safe rehne ke liye SetupInitialPositions handle kar raha hai.
                this.items[3].SetActive(false);
            },
            /*CarouselScroller.UpdateEdgeVisibility end.*/


        }
    });
    /*CarouselScroller end.*/

    /*DestroyObj start.*/
    Bridge.define("DestroyObj", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            destroyDelay: 0
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "DestroyObj#init", this ); }

                this.destroyDelay = 0.0;
            }
        },
        methods: {
            /*DestroyObj.Start start.*/
            Start: function () {
if ( TRACE ) { TRACE( "DestroyObj#Start", this ); }

                var $step = 0,
                    $jumpFromFinally,
                    $returnValue,
                    $async_e;

                var $enumerator = new Bridge.GeneratorEnumerator(Bridge.fn.bind(this, function () {
                    try {
                        for (;;) {
                            switch ($step) {
                                case 0: {
                                    $enumerator.current = new UnityEngine.WaitForSeconds(this.destroyDelay);
                                        $step = 1;
                                        return true;
                                }
                                case 1: {
                                    UnityEngine.MonoBehaviour.Destroy(this.gameObject);

                                }
                                default: {
                                    return false;
                                }
                            }
                        }
                    } catch($async_e1) {
                        $async_e = System.Exception.create($async_e1);
                        throw $async_e;
                    }
                }));
                return $enumerator;
            },
            /*DestroyObj.Start end.*/


        }
    });
    /*DestroyObj end.*/
    /** @namespace System */

    /**
     * @memberof System
     * @callback System.Action
     * @param   {DG.Tweening.DOTweenAnimation}    arg
     * @return  {void}
     */


    /*DG.Tweening.DOTweenAnimation start.*/
    /** @namespace DG.Tweening */

    /**
     * Attach this to a GameObject to create a tween
     *
     * @public
     * @class DG.Tweening.DOTweenAnimation
     * @augments DG.Tweening.Core.ABSAnimationComponent
     */
    Bridge.define("DG.Tweening.DOTweenAnimation", {
        inherits: [DG.Tweening.Core.ABSAnimationComponent],
        statics: {
            events: {
                /**
                 * Used internally by the editor
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenAnimation
                 * @memberof DG.Tweening.DOTweenAnimation
                 * @function addOnReset
                 * @param   {System.Action}    value
                 * @return  {void}
                 */
                /**
                 * Used internally by the editor
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenAnimation
                 * @memberof DG.Tweening.DOTweenAnimation
                 * @function removeOnReset
                 * @param   {System.Action}    value
                 * @return  {void}
                 */
                OnReset: null
            },
            methods: {
                /*DG.Tweening.DOTweenAnimation.Dispatch_OnReset:static start.*/
                Dispatch_OnReset: function (anim) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenAnimation#Dispatch_OnReset", this ); }

                    if (!Bridge.staticEquals(DG.Tweening.DOTweenAnimation.OnReset, null)) {
                        DG.Tweening.DOTweenAnimation.OnReset(anim);
                    }
                },
                /*DG.Tweening.DOTweenAnimation.Dispatch_OnReset:static end.*/

                /*DG.Tweening.DOTweenAnimation.TypeToDOTargetType:static start.*/
                TypeToDOTargetType: function (t) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenAnimation#TypeToDOTargetType", this ); }

                    var str = Bridge.getTypeName(t);
                    var dotIndex = str.lastIndexOf(".");
                    if (dotIndex !== -1) {
                        str = str.substr(((dotIndex + 1) | 0));
                    }
                    if (System.String.indexOf(str, "Renderer") !== -1 && (!Bridge.referenceEquals(str, "SpriteRenderer"))) {
                        str = "Renderer";
                    }
                    //#if true // PHYSICS_MARKER
                    //            if (str == "Rigidbody") str = "Transform";
                    //#endif
                    //#if true // PHYSICS2D_MARKER
                    //            if (str == "Rigidbody2D") str = "Transform";
                    //#endif
                    //            if (str == "RectTransform") str = "Transform";
                    if (Bridge.referenceEquals(str, "RawImage") || Bridge.referenceEquals(str, "Graphic")) {
                        str = "Image";
                    } // RawImages/Graphics are managed like Images for DOTweenAnimation (color and fade use Graphic target anyway)
                    return System.Nullable.getValue(Bridge.cast(Bridge.unbox(System.Enum.parse(DG.Tweening.DOTweenAnimation.TargetType, str), DG.Tweening.DOTweenAnimation.TargetType), System.Int32));
                },
                /*DG.Tweening.DOTweenAnimation.TypeToDOTargetType:static end.*/


            }
        },
        fields: {
            targetIsSelf: false,
            targetGO: null,
            tweenTargetIsTargetGO: false,
            delay: 0,
            duration: 0,
            easeType: 0,
            easeCurve: null,
            loopType: 0,
            loops: 0,
            id: null,
            isRelative: false,
            isFrom: false,
            isIndependentUpdate: false,
            autoKill: false,
            autoGenerate: false,
            isActive: false,
            isValid: false,
            target: null,
            animationType: 0,
            targetType: 0,
            forcedTargetType: 0,
            autoPlay: false,
            useTargetAsV3: false,
            endValueFloat: 0,
            endValueV3: null,
            endValueV2: null,
            endValueColor: null,
            endValueString: null,
            endValueRect: null,
            endValueTransform: null,
            optionalBool0: false,
            optionalBool1: false,
            optionalFloat0: 0,
            optionalInt0: 0,
            optionalRotationMode: 0,
            optionalScrambleMode: 0,
            optionalShakeRandomnessMode: 0,
            optionalString: null,
            _tweenAutoGenerationCalled: false,
            _playCount: 0
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenAnimation#init", this ); }

                this.endValueV3 = new UnityEngine.Vector3();
                this.endValueV2 = new UnityEngine.Vector2();
                this.endValueColor = new UnityEngine.Color();
                this.endValueRect = new UnityEngine.Rect();
                this.targetIsSelf = true;
                this.tweenTargetIsTargetGO = true;
                this.duration = 1;
                this.easeType = DG.Tweening.Ease.Linear;
                this.easeCurve = new pc.AnimationCurve({keyframes: [ new pc.Keyframe(0, 0, 0, 0), new pc.Keyframe(1, 1, 0, 0) ]});
                this.loopType = DG.Tweening.LoopType.Restart;
                this.loops = 1;
                this.id = "";
                this.isIndependentUpdate = false;
                this.autoKill = true;
                this.autoGenerate = true;
                this.isActive = true;
                this.autoPlay = true;
                this.endValueColor = new pc.Color( 1, 1, 1, 1 );
                this.endValueString = "";
                this.endValueRect = new UnityEngine.Rect.$ctor1(0, 0, 0, 0);
                this.optionalRotationMode = DG.Tweening.RotateMode.Fast;
                this.optionalScrambleMode = DG.Tweening.ScrambleMode.None;
                this.optionalShakeRandomnessMode = DG.Tweening.ShakeRandomnessMode.Full;
                this._playCount = -1;
            }
        },
        methods: {
            /*DG.Tweening.DOTweenAnimation.Awake start.*/
            Awake: function () {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenAnimation#Awake", this ); }

                if (!this.isActive || !this.autoGenerate) {
                    return;
                }

                if (this.animationType !== DG.Tweening.DOTweenAnimation.AnimationType.Move || !this.useTargetAsV3) {
                    // Don't create tweens if we're using a RectTransform as a Move target,
                    // because that will work only inside Start
                    this.CreateTween(false, this.autoPlay);
                    this._tweenAutoGenerationCalled = true;
                }
            },
            /*DG.Tweening.DOTweenAnimation.Awake end.*/

            /*DG.Tweening.DOTweenAnimation.Start start.*/
            Start: function () {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenAnimation#Start", this ); }

                if (this._tweenAutoGenerationCalled || !this.isActive || !this.autoGenerate) {
                    return;
                }

                this.CreateTween(false, this.autoPlay);
                this._tweenAutoGenerationCalled = true;
            },
            /*DG.Tweening.DOTweenAnimation.Start end.*/

            /*DG.Tweening.DOTweenAnimation.Reset start.*/
            Reset: function () {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenAnimation#Reset", this ); }

                DG.Tweening.DOTweenAnimation.Dispatch_OnReset(this);
            },
            /*DG.Tweening.DOTweenAnimation.Reset end.*/

            /*DG.Tweening.DOTweenAnimation.OnDestroy start.*/
            OnDestroy: function () {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenAnimation#OnDestroy", this ); }

                if (this.tween != null && this.tween.active) {
                    DG.Tweening.TweenExtensions.Kill(this.tween);
                }
                this.tween = null;
            },
            /*DG.Tweening.DOTweenAnimation.OnDestroy end.*/

            /*DG.Tweening.DOTweenAnimation.RewindThenRecreateTween start.*/
            /**
             * Creates/recreates the tween without playing it, but first rewinding and killing the existing one if present.
             *
             * @instance
             * @public
             * @this DG.Tweening.DOTweenAnimation
             * @memberof DG.Tweening.DOTweenAnimation
             * @return  {void}
             */
            RewindThenRecreateTween: function () {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenAnimation#RewindThenRecreateTween", this ); }

                if (this.tween != null && this.tween.active) {
                    DG.Tweening.TweenExtensions.Rewind(this.tween);
                }
                this.CreateTween(true, false);
            },
            /*DG.Tweening.DOTweenAnimation.RewindThenRecreateTween end.*/

            /*DG.Tweening.DOTweenAnimation.RewindThenRecreateTweenAndPlay start.*/
            /**
             * Creates/recreates the tween and plays it, first rewinding and killing the existing one if present.
             *
             * @instance
             * @public
             * @this DG.Tweening.DOTweenAnimation
             * @memberof DG.Tweening.DOTweenAnimation
             * @return  {void}
             */
            RewindThenRecreateTweenAndPlay: function () {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenAnimation#RewindThenRecreateTweenAndPlay", this ); }

                if (this.tween != null && this.tween.active) {
                    DG.Tweening.TweenExtensions.Rewind(this.tween);
                }
                this.CreateTween(true, true);
            },
            /*DG.Tweening.DOTweenAnimation.RewindThenRecreateTweenAndPlay end.*/

            /*DG.Tweening.DOTweenAnimation.RecreateTween start.*/
            /**
             * Creates/recreates the tween from its target's current value without playing it, but first killing the existing one if present.
             *
             * @instance
             * @public
             * @this DG.Tweening.DOTweenAnimation
             * @memberof DG.Tweening.DOTweenAnimation
             * @return  {void}
             */
            RecreateTween: function () {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenAnimation#RecreateTween", this ); }

                this.CreateTween(true, false);
            },
            /*DG.Tweening.DOTweenAnimation.RecreateTween end.*/

            /*DG.Tweening.DOTweenAnimation.RecreateTweenAndPlay start.*/
            /**
             * Creates/recreates the tween from its target's current value and plays it, first killing the existing one if present.
             *
             * @instance
             * @public
             * @this DG.Tweening.DOTweenAnimation
             * @memberof DG.Tweening.DOTweenAnimation
             * @return  {void}
             */
            RecreateTweenAndPlay: function () {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenAnimation#RecreateTweenAndPlay", this ); }

                this.CreateTween(true, true);
            },
            /*DG.Tweening.DOTweenAnimation.RecreateTweenAndPlay end.*/

            /*DG.Tweening.DOTweenAnimation.CreateTween start.*/
            /**
             * Creates the tween manually (called automatically if AutoGenerate is set in the Inspector)
             from its target's current value.
             *
             * @instance
             * @public
             * @this DG.Tweening.DOTweenAnimation
             * @memberof DG.Tweening.DOTweenAnimation
             * @param   {boolean}    regenerateIfExists    If TRUE and an existing tween was already created (and not killed), kills it and recreates it with the current
             parameters. Otherwise, if a tween already exists, does nothing.
             * @param   {boolean}    andPlay               If TRUE also plays the tween, otherwise only creates it
             * @return  {void}
             */
            CreateTween: function (regenerateIfExists, andPlay) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenAnimation#CreateTween", this ); }

                if (regenerateIfExists === void 0) { regenerateIfExists = false; }
                if (andPlay === void 0) { andPlay = true; }
                if (!this.isValid) {
                    if (regenerateIfExists) { // Called manually: warn users
                        UnityEngine.Debug.LogWarning$1(System.String.format("{0} :: This DOTweenAnimation isn't valid and its tween won't be created", [this.gameObject.name]), this.gameObject);
                    }
                    return;
                }
                if (this.tween != null) {
                    if (this.tween.active) {
                        if (regenerateIfExists) {
                            DG.Tweening.TweenExtensions.Kill(this.tween);
                        } else {
                            return;
                        }
                    }
                    this.tween = null;
                }

                //            if (target == null) {
                //                Debug.LogWarning(string.Format("{0} :: This DOTweenAnimation's target is NULL, because the animation was created with a DOTween Pro version older than 0.9.255. To fix this, exit Play mode then simply select this object, and it will update automatically", this.gameObject.name), this.gameObject);
                //                return;
                //            }

                var tweenGO = this.GetTweenGO();
                if (UnityEngine.Component.op_Equality(this.target, null) || UnityEngine.GameObject.op_Equality(tweenGO, null)) {
                    if (this.targetIsSelf && UnityEngine.Component.op_Equality(this.target, null)) {
                        // Old error caused during upgrade from DOTween Pro 0.9.255
                        UnityEngine.Debug.LogWarning$1(System.String.format("{0} :: This DOTweenAnimation's target is NULL, because the animation was created with a DOTween Pro version older than 0.9.255. To fix this, exit Play mode then simply select this object, and it will update automatically", [this.gameObject.name]), this.gameObject);
                    } else {
                        // Missing non-self target
                        UnityEngine.Debug.LogWarning$1(System.String.format("{0} :: This DOTweenAnimation's target/GameObject is unset: the tween will not be created.", [this.gameObject.name]), this.gameObject);
                    }
                    return;
                }

                if (this.forcedTargetType !== DG.Tweening.DOTweenAnimation.TargetType.Unset) {
                    this.targetType = this.forcedTargetType;
                }
                if (this.targetType === DG.Tweening.DOTweenAnimation.TargetType.Unset) {
                    // Legacy DOTweenAnimation (made with a version older than 0.9.450) without stored targetType > assign it now
                    this.targetType = DG.Tweening.DOTweenAnimation.TypeToDOTargetType(Bridge.getType(this.target));
                }

                switch (this.animationType) {
                    case DG.Tweening.DOTweenAnimation.AnimationType.None: 
                        break;
                    case DG.Tweening.DOTweenAnimation.AnimationType.Move: 
                        if (this.useTargetAsV3) {
                            this.isRelative = false;
                            if (UnityEngine.Component.op_Equality(this.endValueTransform, null)) {
                                UnityEngine.Debug.LogWarning$1(System.String.format("{0} :: This tween's TO target is NULL, a Vector3 of (0,0,0) will be used instead", [this.gameObject.name]), this.gameObject);
                                this.endValueV3 = pc.Vec3.ZERO.clone();
                            } else {
                                if (this.targetType === DG.Tweening.DOTweenAnimation.TargetType.RectTransform) {
                                    var endValueT = Bridge.as(this.endValueTransform, UnityEngine.RectTransform);
                                    if (UnityEngine.Component.op_Equality(endValueT, null)) {
                                        UnityEngine.Debug.LogWarning$1(System.String.format("{0} :: This tween's TO target should be a RectTransform, a Vector3 of (0,0,0) will be used instead", [this.gameObject.name]), this.gameObject);
                                        this.endValueV3 = pc.Vec3.ZERO.clone();
                                    } else {
                                        var rTarget = Bridge.as(this.target, UnityEngine.RectTransform);
                                        if (UnityEngine.Component.op_Equality(rTarget, null)) {
                                            UnityEngine.Debug.LogWarning$1(System.String.format("{0} :: This tween's target and TO target are not of the same type. Please reassign the values", [this.gameObject.name]), this.gameObject);
                                        } else {
                                            // Problem: doesn't work inside Awake (ararargh!)
                                            this.endValueV3 = UnityEngine.Vector3.FromVector2(DG.Tweening.DOTweenModuleUI.Utils.SwitchToRectTransform(endValueT, rTarget));
                                        }
                                    }
                                } else {
                                    this.endValueV3 = this.endValueTransform.position.$clone();
                                }
                            }
                        }
                        switch (this.targetType) {
                            case DG.Tweening.DOTweenAnimation.TargetType.Transform: 
                                this.tween = DG.Tweening.ShortcutExtensions.DOMove(Bridge.cast(this.target, UnityEngine.Transform), this.endValueV3.$clone(), this.duration, this.optionalBool0);
                                break;
                            case DG.Tweening.DOTweenAnimation.TargetType.RectTransform: 
                                this.tween = DG.Tweening.DOTweenModuleUI.DOAnchorPos3D(Bridge.cast(this.target, UnityEngine.RectTransform), this.endValueV3.$clone(), this.duration, this.optionalBool0);
                                break;
                            case DG.Tweening.DOTweenAnimation.TargetType.Rigidbody: 
                                this.tween = DG.Tweening.ShortcutExtensions.DOMove(Bridge.cast(this.target, UnityEngine.Transform), this.endValueV3.$clone(), this.duration, this.optionalBool0);
                                break;
                            case DG.Tweening.DOTweenAnimation.TargetType.Rigidbody2D: 
                                this.tween = DG.Tweening.DOTweenModulePhysics2D.DOMove(Bridge.cast(this.target, UnityEngine.Rigidbody2D), UnityEngine.Vector2.FromVector3(this.endValueV3.$clone()), this.duration, this.optionalBool0);
                                break;
                        }
                        break;
                    case DG.Tweening.DOTweenAnimation.AnimationType.LocalMove: 
                        this.tween = DG.Tweening.ShortcutExtensions.DOLocalMove(tweenGO.transform, this.endValueV3.$clone(), this.duration, this.optionalBool0);
                        break;
                    case DG.Tweening.DOTweenAnimation.AnimationType.Rotate: 
                        switch (this.targetType) {
                            case DG.Tweening.DOTweenAnimation.TargetType.Transform: 
                                this.tween = DG.Tweening.ShortcutExtensions.DORotate(Bridge.cast(this.target, UnityEngine.Transform), this.endValueV3.$clone(), this.duration, this.optionalRotationMode);
                                break;
                            case DG.Tweening.DOTweenAnimation.TargetType.Rigidbody: 
                                this.tween = DG.Tweening.ShortcutExtensions.DORotate(Bridge.cast(this.target, UnityEngine.Transform), this.endValueV3.$clone(), this.duration, this.optionalRotationMode);
                                break;
                            case DG.Tweening.DOTweenAnimation.TargetType.Rigidbody2D: 
                                this.tween = DG.Tweening.DOTweenModulePhysics2D.DORotate(Bridge.cast(this.target, UnityEngine.Rigidbody2D), this.endValueFloat, this.duration);
                                break;
                        }
                        break;
                    case DG.Tweening.DOTweenAnimation.AnimationType.LocalRotate: 
                        this.tween = DG.Tweening.ShortcutExtensions.DOLocalRotate(tweenGO.transform, this.endValueV3.$clone(), this.duration, this.optionalRotationMode);
                        break;
                    case DG.Tweening.DOTweenAnimation.AnimationType.Scale: 
                        switch (this.targetType) {
                            default: 
                                this.tween = DG.Tweening.ShortcutExtensions.DOScale$1(tweenGO.transform, this.optionalBool0 ? new pc.Vec3( this.endValueFloat, this.endValueFloat, this.endValueFloat ) : this.endValueV3.$clone(), this.duration);
                                break;
                        }
                        break;
                    case DG.Tweening.DOTweenAnimation.AnimationType.UIWidthHeight: 
                        this.tween = DG.Tweening.DOTweenModuleUI.DOSizeDelta(Bridge.cast(this.target, UnityEngine.RectTransform), this.optionalBool0 ? new pc.Vec2( this.endValueFloat, this.endValueFloat ) : this.endValueV2.$clone(), this.duration);
                        break;
                    case DG.Tweening.DOTweenAnimation.AnimationType.Color: 
                        this.isRelative = false;
                        switch (this.targetType) {
                            case DG.Tweening.DOTweenAnimation.TargetType.Renderer: 
                                this.tween = DG.Tweening.ShortcutExtensions.DOColor$3(Bridge.cast(this.target, UnityEngine.Renderer).material, this.endValueColor.$clone(), this.duration);
                                break;
                            case DG.Tweening.DOTweenAnimation.TargetType.Light: 
                                this.tween = DG.Tweening.ShortcutExtensions.DOColor$1(Bridge.cast(this.target, UnityEngine.Light), this.endValueColor.$clone(), this.duration);
                                break;
                            case DG.Tweening.DOTweenAnimation.TargetType.SpriteRenderer: 
                                this.tween = DG.Tweening.DOTweenModuleSprite.DOColor(Bridge.cast(this.target, UnityEngine.SpriteRenderer), this.endValueColor.$clone(), this.duration);
                                break;
                            case DG.Tweening.DOTweenAnimation.TargetType.Image: 
                                this.tween = DG.Tweening.DOTweenModuleUI.DOColor(Bridge.cast(this.target, UnityEngine.UI.Graphic), this.endValueColor.$clone(), this.duration);
                                break;
                            case DG.Tweening.DOTweenAnimation.TargetType.Text: 
                                this.tween = DG.Tweening.DOTweenModuleUI.DOColor$3(Bridge.cast(this.target, UnityEngine.UI.Text), this.endValueColor.$clone(), this.duration);
                                break;
                        }
                        break;
                    case DG.Tweening.DOTweenAnimation.AnimationType.Fade: 
                        this.isRelative = false;
                        switch (this.targetType) {
                            case DG.Tweening.DOTweenAnimation.TargetType.Renderer: 
                                this.tween = DG.Tweening.ShortcutExtensions.DOFade$1(Bridge.cast(this.target, UnityEngine.Renderer).material, this.endValueFloat, this.duration);
                                break;
                            case DG.Tweening.DOTweenAnimation.TargetType.Light: 
                                this.tween = DG.Tweening.ShortcutExtensions.DOIntensity(Bridge.cast(this.target, UnityEngine.Light), this.endValueFloat, this.duration);
                                break;
                            case DG.Tweening.DOTweenAnimation.TargetType.SpriteRenderer: 
                                this.tween = DG.Tweening.DOTweenModuleSprite.DOFade(Bridge.cast(this.target, UnityEngine.SpriteRenderer), this.endValueFloat, this.duration);
                                break;
                            case DG.Tweening.DOTweenAnimation.TargetType.Image: 
                                this.tween = DG.Tweening.DOTweenModuleUI.DOFade$1(Bridge.cast(this.target, UnityEngine.UI.Graphic), this.endValueFloat, this.duration);
                                break;
                            case DG.Tweening.DOTweenAnimation.TargetType.Text: 
                                this.tween = DG.Tweening.DOTweenModuleUI.DOFade$4(Bridge.cast(this.target, UnityEngine.UI.Text), this.endValueFloat, this.duration);
                                break;
                            case DG.Tweening.DOTweenAnimation.TargetType.CanvasGroup: 
                                this.tween = DG.Tweening.DOTweenModuleUI.DOFade(Bridge.cast(this.target, UnityEngine.CanvasGroup), this.endValueFloat, this.duration);
                                break;
                        }
                        break;
                    case DG.Tweening.DOTweenAnimation.AnimationType.Text: 
                        switch (this.targetType) {
                            case DG.Tweening.DOTweenAnimation.TargetType.Text: 
                                this.tween = DG.Tweening.DOTweenModuleUI.DOText(Bridge.cast(this.target, UnityEngine.UI.Text), this.endValueString, this.duration, this.optionalBool0, this.optionalScrambleMode, this.optionalString);
                                break;
                        }
                        break;
                    case DG.Tweening.DOTweenAnimation.AnimationType.PunchPosition: 
                        switch (this.targetType) {
                            case DG.Tweening.DOTweenAnimation.TargetType.Transform: 
                                this.tween = DG.Tweening.ShortcutExtensions.DOPunchPosition(Bridge.cast(this.target, UnityEngine.Transform), this.endValueV3.$clone(), this.duration, this.optionalInt0, this.optionalFloat0, this.optionalBool0);
                                break;
                            case DG.Tweening.DOTweenAnimation.TargetType.RectTransform: 
                                this.tween = DG.Tweening.DOTweenModuleUI.DOPunchAnchorPos(Bridge.cast(this.target, UnityEngine.RectTransform), UnityEngine.Vector2.FromVector3(this.endValueV3.$clone()), this.duration, this.optionalInt0, this.optionalFloat0, this.optionalBool0);
                                break;
                        }
                        break;
                    case DG.Tweening.DOTweenAnimation.AnimationType.PunchScale: 
                        this.tween = DG.Tweening.ShortcutExtensions.DOPunchScale(tweenGO.transform, this.endValueV3.$clone(), this.duration, this.optionalInt0, this.optionalFloat0);
                        break;
                    case DG.Tweening.DOTweenAnimation.AnimationType.PunchRotation: 
                        this.tween = DG.Tweening.ShortcutExtensions.DOPunchRotation(tweenGO.transform, this.endValueV3.$clone(), this.duration, this.optionalInt0, this.optionalFloat0);
                        break;
                    case DG.Tweening.DOTweenAnimation.AnimationType.ShakePosition: 
                        switch (this.targetType) {
                            case DG.Tweening.DOTweenAnimation.TargetType.Transform: 
                                this.tween = DG.Tweening.ShortcutExtensions.DOShakePosition$3(Bridge.cast(this.target, UnityEngine.Transform), this.duration, this.endValueV3.$clone(), this.optionalInt0, this.optionalFloat0, this.optionalBool0, this.optionalBool1, this.optionalShakeRandomnessMode);
                                break;
                            case DG.Tweening.DOTweenAnimation.TargetType.RectTransform: 
                                this.tween = DG.Tweening.DOTweenModuleUI.DOShakeAnchorPos$1(Bridge.cast(this.target, UnityEngine.RectTransform), this.duration, UnityEngine.Vector2.FromVector3(this.endValueV3.$clone()), this.optionalInt0, this.optionalFloat0, this.optionalBool0, this.optionalBool1, this.optionalShakeRandomnessMode);
                                break;
                        }
                        break;
                    case DG.Tweening.DOTweenAnimation.AnimationType.ShakeScale: 
                        this.tween = DG.Tweening.ShortcutExtensions.DOShakeScale$1(tweenGO.transform, this.duration, this.endValueV3.$clone(), this.optionalInt0, this.optionalFloat0, this.optionalBool1, this.optionalShakeRandomnessMode);
                        break;
                    case DG.Tweening.DOTweenAnimation.AnimationType.ShakeRotation: 
                        this.tween = DG.Tweening.ShortcutExtensions.DOShakeRotation$3(tweenGO.transform, this.duration, this.endValueV3.$clone(), this.optionalInt0, this.optionalFloat0, this.optionalBool1, this.optionalShakeRandomnessMode);
                        break;
                    case DG.Tweening.DOTweenAnimation.AnimationType.CameraAspect: 
                        this.tween = DG.Tweening.ShortcutExtensions.DOAspect(Bridge.cast(this.target, UnityEngine.Camera), this.endValueFloat, this.duration);
                        break;
                    case DG.Tweening.DOTweenAnimation.AnimationType.CameraBackgroundColor: 
                        this.tween = DG.Tweening.ShortcutExtensions.DOColor(Bridge.cast(this.target, UnityEngine.Camera), this.endValueColor.$clone(), this.duration);
                        break;
                    case DG.Tweening.DOTweenAnimation.AnimationType.CameraFieldOfView: 
                        this.tween = DG.Tweening.ShortcutExtensions.DOFieldOfView(Bridge.cast(this.target, UnityEngine.Camera), this.endValueFloat, this.duration);
                        break;
                    case DG.Tweening.DOTweenAnimation.AnimationType.CameraOrthoSize: 
                        this.tween = DG.Tweening.ShortcutExtensions.DOOrthoSize(Bridge.cast(this.target, UnityEngine.Camera), this.endValueFloat, this.duration);
                        break;
                    case DG.Tweening.DOTweenAnimation.AnimationType.CameraPixelRect: 
                        this.tween = DG.Tweening.ShortcutExtensions.DOPixelRect(Bridge.cast(this.target, UnityEngine.Camera), this.endValueRect.$clone(), this.duration);
                        break;
                    case DG.Tweening.DOTweenAnimation.AnimationType.CameraRect: 
                        this.tween = DG.Tweening.ShortcutExtensions.DORect(Bridge.cast(this.target, UnityEngine.Camera), this.endValueRect.$clone(), this.duration);
                        break;
                }

                if (this.tween == null) {
                    return;
                }

                // Created

                if (this.isFrom) {
                    DG.Tweening.TweenSettingsExtensions.From$1(DG.Tweening.Tweener, Bridge.cast(this.tween, DG.Tweening.Tweener), this.isRelative);
                } else {
                    DG.Tweening.TweenSettingsExtensions.SetRelative$1(DG.Tweening.Tween, this.tween, this.isRelative);
                }
                var setTarget = this.GetTweenTarget();
                DG.Tweening.TweenSettingsExtensions.OnKill(DG.Tweening.Tween, DG.Tweening.TweenSettingsExtensions.SetAutoKill$1(DG.Tweening.Tween, DG.Tweening.TweenSettingsExtensions.SetLoops$1(DG.Tweening.Tween, DG.Tweening.TweenSettingsExtensions.SetDelay(DG.Tweening.Tween, DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tween, this.tween, setTarget), this.delay), this.loops, this.loopType), this.autoKill), Bridge.fn.bind(this, function () {
                    this.tween = null;
                }));
                if (this.isSpeedBased) {
                    DG.Tweening.TweenSettingsExtensions.SetSpeedBased(DG.Tweening.Tween, this.tween);
                }
                if (this.easeType === DG.Tweening.Ease.INTERNAL_Custom) {
                    DG.Tweening.TweenSettingsExtensions.SetEase(DG.Tweening.Tween, this.tween, this.easeCurve);
                } else {
                    DG.Tweening.TweenSettingsExtensions.SetEase$2(DG.Tweening.Tween, this.tween, this.easeType);
                }
                if (!System.String.isNullOrEmpty(this.id)) {
                    DG.Tweening.TweenSettingsExtensions.SetId$2(DG.Tweening.Tween, this.tween, this.id);
                }
                DG.Tweening.TweenSettingsExtensions.SetUpdate(DG.Tweening.Tween, this.tween, this.isIndependentUpdate);

                if (this.hasOnStart) {
                    if (this.onStart != null) {
                        DG.Tweening.TweenSettingsExtensions.OnStart(DG.Tweening.Tween, this.tween, Bridge.fn.cacheBind(this.onStart, this.onStart.Invoke));
                    }
                } else {
                    this.onStart = null;
                }
                if (this.hasOnPlay) {
                    if (this.onPlay != null) {
                        DG.Tweening.TweenSettingsExtensions.OnPlay(DG.Tweening.Tween, this.tween, Bridge.fn.cacheBind(this.onPlay, this.onPlay.Invoke));
                    }
                } else {
                    this.onPlay = null;
                }
                if (this.hasOnUpdate) {
                    if (this.onUpdate != null) {
                        DG.Tweening.TweenSettingsExtensions.OnUpdate(DG.Tweening.Tween, this.tween, Bridge.fn.cacheBind(this.onUpdate, this.onUpdate.Invoke));
                    }
                } else {
                    this.onUpdate = null;
                }
                if (this.hasOnStepComplete) {
                    if (this.onStepComplete != null) {
                        DG.Tweening.TweenSettingsExtensions.OnStepComplete(DG.Tweening.Tween, this.tween, Bridge.fn.cacheBind(this.onStepComplete, this.onStepComplete.Invoke));
                    }
                } else {
                    this.onStepComplete = null;
                }
                if (this.hasOnComplete) {
                    if (this.onComplete != null) {
                        DG.Tweening.TweenSettingsExtensions.OnComplete(DG.Tweening.Tween, this.tween, Bridge.fn.cacheBind(this.onComplete, this.onComplete.Invoke));
                    }
                } else {
                    this.onComplete = null;
                }
                if (this.hasOnRewind) {
                    if (this.onRewind != null) {
                        DG.Tweening.TweenSettingsExtensions.OnRewind(DG.Tweening.Tween, this.tween, Bridge.fn.cacheBind(this.onRewind, this.onRewind.Invoke));
                    }
                } else {
                    this.onRewind = null;
                }

                if (andPlay) {
                    DG.Tweening.TweenExtensions.Play(DG.Tweening.Tween, this.tween);
                } else {
                    DG.Tweening.TweenExtensions.Pause(DG.Tweening.Tween, this.tween);
                }

                if (this.hasOnTweenCreated && this.onTweenCreated != null) {
                    this.onTweenCreated.Invoke();
                }
            },
            /*DG.Tweening.DOTweenAnimation.CreateTween end.*/

            /*DG.Tweening.DOTweenAnimation.GetTweens start.*/
            /**
             * Returns the tweens (if generated and not killed) created by all DOTweenAnimations on this gameObject,
             in the same order as they appear in the Inspector (top to bottom).<p />
             Note that a tween is generated inside the Awake call (except RectTransform tweens which are generated inside Start),
             so this method won't return them before that
             *
             * @instance
             * @public
             * @this DG.Tweening.DOTweenAnimation
             * @memberof DG.Tweening.DOTweenAnimation
             * @return  {System.Collections.Generic.List$1}
             */
            GetTweens: function () {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenAnimation#GetTweens", this ); }

                var $t;
                var result = new (System.Collections.Generic.List$1(DG.Tweening.Tween)).ctor();
                var anims = this.GetComponents(DG.Tweening.DOTweenAnimation);
                $t = Bridge.getEnumerator(anims);
                try {
                    while ($t.moveNext()) {
                        var anim = $t.Current;
                        if (anim.tween != null && anim.tween.active) {
                            result.add(anim.tween);
                        }
                    }
                } finally {
                    if (Bridge.is($t, System.IDisposable)) {
                        $t.System$IDisposable$Dispose();
                    }
                }
                return result;
            },
            /*DG.Tweening.DOTweenAnimation.GetTweens end.*/

            /*DG.Tweening.DOTweenAnimation.SetAnimationTarget start.*/
            /**
             * Sets the animation target (which must be of the same type of the one set in the Inspector).
             This is useful if you want to change it BEFORE this {@link }
             creates a tween, while after that it won't have any effect.<p />
             Consider that a {@link } creates its tween inside its Awake (except for special tweens),
             so you will need to sure your code runs before this object's Awake (via ScriptExecutionOrder or enabling/disabling methods)
             *
             * @instance
             * @public
             * @this DG.Tweening.DOTweenAnimation
             * @memberof DG.Tweening.DOTweenAnimation
             * @param   {UnityEngine.Component}    tweenTarget                                   New target for the animation (must be of the same type of the previous one)
             * @param   {boolean}                  useTweenTargetGameObjectForGroupOperations    If TRUE also uses tweenTarget's gameObject when settings the target-ID of the tween
             (which is used with DOPlay/DORestart/etc to apply the same operation on all tweens that have the same target-id).<p />
             You should usually leave this to TRUE if you change the target.
             * @return  {void}
             */
            SetAnimationTarget: function (tweenTarget, useTweenTargetGameObjectForGroupOperations) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenAnimation#SetAnimationTarget", this ); }

                if (useTweenTargetGameObjectForGroupOperations === void 0) { useTweenTargetGameObjectForGroupOperations = true; }
                var newTargetType = DG.Tweening.DOTweenAnimation.TypeToDOTargetType(Bridge.getType(this.target));
                if (newTargetType !== this.targetType) {
                    UnityEngine.Debug.LogError$2("DOTweenAnimation \u25ba SetAnimationTarget: the new target is of a different type from the one set in the Inspector");
                    return;
                }
                this.target = tweenTarget;
                this.targetGO = this.target.gameObject;
                this.tweenTargetIsTargetGO = useTweenTargetGameObjectForGroupOperations;
            },
            /*DG.Tweening.DOTweenAnimation.SetAnimationTarget end.*/

            /*DG.Tweening.DOTweenAnimation.DOPlay start.*/
            /**
             * Plays all tweens whose target-id is the same as the one set by this animation
             *
             * @instance
             * @public
             * @override
             * @this DG.Tweening.DOTweenAnimation
             * @memberof DG.Tweening.DOTweenAnimation
             * @return  {void}
             */
            DOPlay: function () {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenAnimation#DOPlay", this ); }

                DG.Tweening.DOTween.Play(this.GetTweenTarget());
            },
            /*DG.Tweening.DOTweenAnimation.DOPlay end.*/

            /*DG.Tweening.DOTweenAnimation.DOPlayBackwards start.*/
            /**
             * Plays backwards all tweens whose target-id is the same as the one set by this animation
             *
             * @instance
             * @public
             * @override
             * @this DG.Tweening.DOTweenAnimation
             * @memberof DG.Tweening.DOTweenAnimation
             * @return  {void}
             */
            DOPlayBackwards: function () {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenAnimation#DOPlayBackwards", this ); }

                DG.Tweening.DOTween.PlayBackwards(this.GetTweenTarget());
            },
            /*DG.Tweening.DOTweenAnimation.DOPlayBackwards end.*/

            /*DG.Tweening.DOTweenAnimation.DOPlayForward start.*/
            /**
             * Plays foward all tweens whose target-id is the same as the one set by this animation
             *
             * @instance
             * @public
             * @override
             * @this DG.Tweening.DOTweenAnimation
             * @memberof DG.Tweening.DOTweenAnimation
             * @return  {void}
             */
            DOPlayForward: function () {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenAnimation#DOPlayForward", this ); }

                DG.Tweening.DOTween.PlayForward(this.GetTweenTarget());
            },
            /*DG.Tweening.DOTweenAnimation.DOPlayForward end.*/

            /*DG.Tweening.DOTweenAnimation.DOPause start.*/
            /**
             * Pauses all tweens whose target-id is the same as the one set by this animation
             *
             * @instance
             * @public
             * @override
             * @this DG.Tweening.DOTweenAnimation
             * @memberof DG.Tweening.DOTweenAnimation
             * @return  {void}
             */
            DOPause: function () {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenAnimation#DOPause", this ); }

                DG.Tweening.DOTween.Pause(this.GetTweenTarget());
            },
            /*DG.Tweening.DOTweenAnimation.DOPause end.*/

            /*DG.Tweening.DOTweenAnimation.DOTogglePause start.*/
            /**
             * Pauses/unpauses (depending on the current state) all tweens whose target-id is the same as the one set by this animation
             *
             * @instance
             * @public
             * @override
             * @this DG.Tweening.DOTweenAnimation
             * @memberof DG.Tweening.DOTweenAnimation
             * @return  {void}
             */
            DOTogglePause: function () {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenAnimation#DOTogglePause", this ); }

                DG.Tweening.DOTween.TogglePause(this.GetTweenTarget());
            },
            /*DG.Tweening.DOTweenAnimation.DOTogglePause end.*/

            /*DG.Tweening.DOTweenAnimation.DORewind start.*/
            /**
             * Rewinds all tweens created by this animation in the correct order
             *
             * @instance
             * @public
             * @override
             * @this DG.Tweening.DOTweenAnimation
             * @memberof DG.Tweening.DOTweenAnimation
             * @return  {void}
             */
            DORewind: function () {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenAnimation#DORewind", this ); }

                this._playCount = -1;
                // Rewind using Components order (in case there are multiple animations on the same property)
                var anims = this.gameObject.GetComponents(DG.Tweening.DOTweenAnimation);
                for (var i = (anims.length - 1) | 0; i > -1; i = (i - 1) | 0) {
                    var t = anims[i].tween;
                    if (t != null && DG.Tweening.TweenExtensions.IsInitialized(t)) {
                        DG.Tweening.TweenExtensions.Rewind(anims[i].tween);
                    }
                }
                // DOTween.Rewind(GetTweenTarget());
            },
            /*DG.Tweening.DOTweenAnimation.DORewind end.*/

            /*DG.Tweening.DOTweenAnimation.DORestart start.*/
            /**
             * Restarts all tweens whose target-id is the same as the one set by this animation
             *
             * @instance
             * @public
             * @override
             * @this DG.Tweening.DOTweenAnimation
             * @memberof DG.Tweening.DOTweenAnimation
             * @return  {void}
             */
            DORestart: function () {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenAnimation#DORestart", this ); }

                this.DORestart$1(false);
            },
            /*DG.Tweening.DOTweenAnimation.DORestart end.*/

            /*DG.Tweening.DOTweenAnimation.DORestart$1 start.*/
            /**
             * Restarts all tweens whose target-id is the same as the one set by this animation
             *
             * @instance
             * @public
             * @override
             * @this DG.Tweening.DOTweenAnimation
             * @memberof DG.Tweening.DOTweenAnimation
             * @param   {boolean}    fromHere    If TRUE, re-evaluates the tween's start and end values from its current position.
             Set it to TRUE when spawning the same DOTweenAnimation in different positions (like when using a pooling system)
             * @return  {void}
             */
            DORestart$1: function (fromHere) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenAnimation#DORestart$1", this ); }

                this._playCount = -1;
                if (this.tween == null) {
                    if (DG.Tweening.Core.Debugger.logPriority > 1) {
                        DG.Tweening.Core.Debugger.LogNullTween(this.tween);
                    }
                    return;
                }
                if (fromHere && this.isRelative) {
                    this.ReEvaluateRelativeTween();
                }
                DG.Tweening.DOTween.Restart(this.GetTweenTarget());
            },
            /*DG.Tweening.DOTweenAnimation.DORestart$1 end.*/

            /*DG.Tweening.DOTweenAnimation.DOComplete start.*/
            /**
             * Completes all tweens whose target-id is the same as the one set by this animation
             *
             * @instance
             * @public
             * @override
             * @this DG.Tweening.DOTweenAnimation
             * @memberof DG.Tweening.DOTweenAnimation
             * @return  {void}
             */
            DOComplete: function () {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenAnimation#DOComplete", this ); }

                DG.Tweening.DOTween.Complete(this.GetTweenTarget());
            },
            /*DG.Tweening.DOTweenAnimation.DOComplete end.*/

            /*DG.Tweening.DOTweenAnimation.DOKill start.*/
            /**
             * Kills all tweens whose target-id is the same as the one set by this animation
             *
             * @instance
             * @public
             * @override
             * @this DG.Tweening.DOTweenAnimation
             * @memberof DG.Tweening.DOTweenAnimation
             * @return  {void}
             */
            DOKill: function () {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenAnimation#DOKill", this ); }

                DG.Tweening.DOTween.Kill(this.GetTweenTarget());
                this.tween = null;
            },
            /*DG.Tweening.DOTweenAnimation.DOKill end.*/

            /*DG.Tweening.DOTweenAnimation.DOPlayById start.*/
            /**
             * Plays all tweens with the given ID and whose target-id is the same as the one set by this animation
             *
             * @instance
             * @public
             * @this DG.Tweening.DOTweenAnimation
             * @memberof DG.Tweening.DOTweenAnimation
             * @param   {string}    id
             * @return  {void}
             */
            DOPlayById: function (id) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenAnimation#DOPlayById", this ); }

                DG.Tweening.DOTween.Play$1(this.GetTweenTarget(), id);
            },
            /*DG.Tweening.DOTweenAnimation.DOPlayById end.*/

            /*DG.Tweening.DOTweenAnimation.DOPlayAllById start.*/
            /**
             * Plays all tweens with the given ID (regardless of their target gameObject)
             *
             * @instance
             * @public
             * @this DG.Tweening.DOTweenAnimation
             * @memberof DG.Tweening.DOTweenAnimation
             * @param   {string}    id
             * @return  {void}
             */
            DOPlayAllById: function (id) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenAnimation#DOPlayAllById", this ); }

                DG.Tweening.DOTween.Play(id);
            },
            /*DG.Tweening.DOTweenAnimation.DOPlayAllById end.*/

            /*DG.Tweening.DOTweenAnimation.DOPauseAllById start.*/
            /**
             * Pauses all tweens that with the given ID (regardless of their target gameObject)
             *
             * @instance
             * @public
             * @this DG.Tweening.DOTweenAnimation
             * @memberof DG.Tweening.DOTweenAnimation
             * @param   {string}    id
             * @return  {void}
             */
            DOPauseAllById: function (id) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenAnimation#DOPauseAllById", this ); }

                DG.Tweening.DOTween.Pause(id);
            },
            /*DG.Tweening.DOTweenAnimation.DOPauseAllById end.*/

            /*DG.Tweening.DOTweenAnimation.DOPlayBackwardsById start.*/
            /**
             * Plays backwards all tweens with the given ID and whose target-id is the same as the one set by this animation
             *
             * @instance
             * @public
             * @this DG.Tweening.DOTweenAnimation
             * @memberof DG.Tweening.DOTweenAnimation
             * @param   {string}    id
             * @return  {void}
             */
            DOPlayBackwardsById: function (id) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenAnimation#DOPlayBackwardsById", this ); }

                DG.Tweening.DOTween.PlayBackwards$1(this.GetTweenTarget(), id);
            },
            /*DG.Tweening.DOTweenAnimation.DOPlayBackwardsById end.*/

            /*DG.Tweening.DOTweenAnimation.DOPlayBackwardsAllById start.*/
            /**
             * Plays backwards all tweens with the given ID (regardless of their target gameObject)
             *
             * @instance
             * @public
             * @this DG.Tweening.DOTweenAnimation
             * @memberof DG.Tweening.DOTweenAnimation
             * @param   {string}    id
             * @return  {void}
             */
            DOPlayBackwardsAllById: function (id) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenAnimation#DOPlayBackwardsAllById", this ); }

                DG.Tweening.DOTween.PlayBackwards(id);
            },
            /*DG.Tweening.DOTweenAnimation.DOPlayBackwardsAllById end.*/

            /*DG.Tweening.DOTweenAnimation.DOPlayForwardById start.*/
            /**
             * Plays forward all tweens with the given ID and whose target-id is the same as the one set by this animation
             *
             * @instance
             * @public
             * @this DG.Tweening.DOTweenAnimation
             * @memberof DG.Tweening.DOTweenAnimation
             * @param   {string}    id
             * @return  {void}
             */
            DOPlayForwardById: function (id) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenAnimation#DOPlayForwardById", this ); }

                DG.Tweening.DOTween.PlayForward$1(this.GetTweenTarget(), id);
            },
            /*DG.Tweening.DOTweenAnimation.DOPlayForwardById end.*/

            /*DG.Tweening.DOTweenAnimation.DOPlayForwardAllById start.*/
            /**
             * Plays forward all tweens with the given ID (regardless of their target gameObject)
             *
             * @instance
             * @public
             * @this DG.Tweening.DOTweenAnimation
             * @memberof DG.Tweening.DOTweenAnimation
             * @param   {string}    id
             * @return  {void}
             */
            DOPlayForwardAllById: function (id) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenAnimation#DOPlayForwardAllById", this ); }

                DG.Tweening.DOTween.PlayForward(id);
            },
            /*DG.Tweening.DOTweenAnimation.DOPlayForwardAllById end.*/

            /*DG.Tweening.DOTweenAnimation.DOPlayNext start.*/
            /**
             * Plays the next animation on this animation's gameObject (if any)
             *
             * @instance
             * @public
             * @this DG.Tweening.DOTweenAnimation
             * @memberof DG.Tweening.DOTweenAnimation
             * @return  {void}
             */
            DOPlayNext: function () {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenAnimation#DOPlayNext", this ); }

                var anims = this.GetComponents(DG.Tweening.DOTweenAnimation);
                while (this._playCount < ((anims.length - 1) | 0)) {
                    this._playCount = (this._playCount + 1) | 0;
                    var anim = anims[this._playCount];
                    if (UnityEngine.MonoBehaviour.op_Inequality(anim, null) && anim.tween != null && anim.tween.active && !DG.Tweening.TweenExtensions.IsPlaying(anim.tween) && !DG.Tweening.TweenExtensions.IsComplete(anim.tween)) {
                        DG.Tweening.TweenExtensions.Play(DG.Tweening.Tween, anim.tween);
                        break;
                    }
                }
            },
            /*DG.Tweening.DOTweenAnimation.DOPlayNext end.*/

            /*DG.Tweening.DOTweenAnimation.DORewindAndPlayNext start.*/
            /**
             * Rewinds all tweens with the given ID and whose target-id is the same as the one set by this animation,
             then plays the next animation on this animation's gameObject (if any)
             *
             * @instance
             * @public
             * @this DG.Tweening.DOTweenAnimation
             * @memberof DG.Tweening.DOTweenAnimation
             * @return  {void}
             */
            DORewindAndPlayNext: function () {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenAnimation#DORewindAndPlayNext", this ); }

                this._playCount = -1;
                DG.Tweening.DOTween.Rewind(this.GetTweenTarget());
                this.DOPlayNext();
            },
            /*DG.Tweening.DOTweenAnimation.DORewindAndPlayNext end.*/

            /*DG.Tweening.DOTweenAnimation.DORewindAllById start.*/
            /**
             * Rewinds all tweens with the given ID (regardless of their target gameObject)
             *
             * @instance
             * @public
             * @this DG.Tweening.DOTweenAnimation
             * @memberof DG.Tweening.DOTweenAnimation
             * @param   {string}    id
             * @return  {void}
             */
            DORewindAllById: function (id) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenAnimation#DORewindAllById", this ); }

                this._playCount = -1;
                DG.Tweening.DOTween.Rewind(id);
            },
            /*DG.Tweening.DOTweenAnimation.DORewindAllById end.*/

            /*DG.Tweening.DOTweenAnimation.DORestartById start.*/
            /**
             * Restarts all tweens with the given ID and whose target-id is the same as the one set by this animation
             *
             * @instance
             * @public
             * @this DG.Tweening.DOTweenAnimation
             * @memberof DG.Tweening.DOTweenAnimation
             * @param   {string}    id
             * @return  {void}
             */
            DORestartById: function (id) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenAnimation#DORestartById", this ); }

                this._playCount = -1;
                DG.Tweening.DOTween.Restart$1(this.GetTweenTarget(), id);
            },
            /*DG.Tweening.DOTweenAnimation.DORestartById end.*/

            /*DG.Tweening.DOTweenAnimation.DORestartAllById start.*/
            /**
             * Restarts all tweens with the given ID (regardless of their target gameObject)
             *
             * @instance
             * @public
             * @this DG.Tweening.DOTweenAnimation
             * @memberof DG.Tweening.DOTweenAnimation
             * @param   {string}    id
             * @return  {void}
             */
            DORestartAllById: function (id) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenAnimation#DORestartAllById", this ); }

                this._playCount = -1;
                DG.Tweening.DOTween.Restart(id);
            },
            /*DG.Tweening.DOTweenAnimation.DORestartAllById end.*/

            /*DG.Tweening.DOTweenAnimation.DOKillById start.*/
            /**
             * Kills all tweens with the given ID and whose target-id is the same as the one set by this animation
             *
             * @instance
             * @public
             * @this DG.Tweening.DOTweenAnimation
             * @memberof DG.Tweening.DOTweenAnimation
             * @param   {string}    id
             * @return  {void}
             */
            DOKillById: function (id) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenAnimation#DOKillById", this ); }

                DG.Tweening.DOTween.Kill$1(this.GetTweenTarget(), id);
            },
            /*DG.Tweening.DOTweenAnimation.DOKillById end.*/

            /*DG.Tweening.DOTweenAnimation.DOKillAllById start.*/
            /**
             * Kills all tweens with the given ID (regardless of their target gameObject)
             *
             * @instance
             * @public
             * @this DG.Tweening.DOTweenAnimation
             * @memberof DG.Tweening.DOTweenAnimation
             * @param   {string}    id
             * @return  {void}
             */
            DOKillAllById: function (id) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenAnimation#DOKillAllById", this ); }

                DG.Tweening.DOTween.Kill(id);
            },
            /*DG.Tweening.DOTweenAnimation.DOKillAllById end.*/

            /*DG.Tweening.DOTweenAnimation.CreateEditorPreview start.*/
            /**
             * Previews the tween in the editor. Only for DOTween internal usage: don't use otherwise.
             *
             * @instance
             * @public
             * @this DG.Tweening.DOTweenAnimation
             * @memberof DG.Tweening.DOTweenAnimation
             * @return  {DG.Tweening.Tween}
             */
            CreateEditorPreview: function () {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenAnimation#CreateEditorPreview", this ); }

                if (UnityEngine.Application.isPlaying) {
                    return null;
                }

                // CHANGE: first param switched to TRUE otherwise changing an animation and replaying in editor would still play old one
                this.CreateTween(true, this.autoPlay);
                return this.tween;
            },
            /*DG.Tweening.DOTweenAnimation.CreateEditorPreview end.*/

            /*DG.Tweening.DOTweenAnimation.GetTweenGO start.*/
            /**
             * Returns the gameObject whose target component should be animated
             *
             * @instance
             * @private
             * @this DG.Tweening.DOTweenAnimation
             * @memberof DG.Tweening.DOTweenAnimation
             * @return  {UnityEngine.GameObject}
             */
            GetTweenGO: function () {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenAnimation#GetTweenGO", this ); }

                return this.targetIsSelf ? this.gameObject : this.targetGO;
            },
            /*DG.Tweening.DOTweenAnimation.GetTweenGO end.*/

            /*DG.Tweening.DOTweenAnimation.GetTweenTarget start.*/
            /**
             * Returns the GameObject which should be used/retrieved for SetTarget
             *
             * @instance
             * @private
             * @this DG.Tweening.DOTweenAnimation
             * @memberof DG.Tweening.DOTweenAnimation
             * @return  {UnityEngine.GameObject}
             */
            GetTweenTarget: function () {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenAnimation#GetTweenTarget", this ); }

                return this.targetIsSelf || !this.tweenTargetIsTargetGO ? this.gameObject : this.targetGO;
            },
            /*DG.Tweening.DOTweenAnimation.GetTweenTarget end.*/

            /*DG.Tweening.DOTweenAnimation.ReEvaluateRelativeTween start.*/
            ReEvaluateRelativeTween: function () {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenAnimation#ReEvaluateRelativeTween", this ); }

                var tweenGO = this.GetTweenGO();
                if (UnityEngine.GameObject.op_Equality(tweenGO, null)) {
                    UnityEngine.Debug.LogWarning$1(System.String.format("{0} :: This DOTweenAnimation's target/GameObject is unset: the tween will not be created.", [this.gameObject.name]), this.gameObject);
                    return;
                }
                if (this.animationType === DG.Tweening.DOTweenAnimation.AnimationType.Move) {
                    Bridge.cast(this.tween, DG.Tweening.Tweener).ChangeEndValue(tweenGO.transform.position.$clone().add( this.endValueV3 ).$clone(), true);
                } else if (this.animationType === DG.Tweening.DOTweenAnimation.AnimationType.LocalMove) {
                    Bridge.cast(this.tween, DG.Tweening.Tweener).ChangeEndValue(tweenGO.transform.localPosition.$clone().add( this.endValueV3 ).$clone(), true);
                }
            },
            /*DG.Tweening.DOTweenAnimation.ReEvaluateRelativeTween end.*/


        },
        overloads: {
            "DORestart(bool)": "DORestart$1"
        }
    });
    /*DG.Tweening.DOTweenAnimation end.*/

    /*DG.Tweening.DOTweenAnimation+AnimationType start.*/
    Bridge.define("DG.Tweening.DOTweenAnimation.AnimationType", {
        $kind: 1006,
        statics: {
            fields: {
                None: 0,
                Move: 1,
                LocalMove: 2,
                Rotate: 3,
                LocalRotate: 4,
                Scale: 5,
                Color: 6,
                Fade: 7,
                Text: 8,
                PunchPosition: 9,
                PunchRotation: 10,
                PunchScale: 11,
                ShakePosition: 12,
                ShakeRotation: 13,
                ShakeScale: 14,
                CameraAspect: 15,
                CameraBackgroundColor: 16,
                CameraFieldOfView: 17,
                CameraOrthoSize: 18,
                CameraPixelRect: 19,
                CameraRect: 20,
                UIWidthHeight: 21
            }
        }
    });
    /*DG.Tweening.DOTweenAnimation+AnimationType end.*/

    /*DG.Tweening.DOTweenAnimation+TargetType start.*/
    Bridge.define("DG.Tweening.DOTweenAnimation.TargetType", {
        $kind: 1006,
        statics: {
            fields: {
                Unset: 0,
                Camera: 1,
                CanvasGroup: 2,
                Image: 3,
                Light: 4,
                RectTransform: 5,
                Renderer: 6,
                SpriteRenderer: 7,
                Rigidbody: 8,
                Rigidbody2D: 9,
                Text: 10,
                Transform: 11,
                tk2dBaseSprite: 12,
                tk2dTextMesh: 13,
                TextMeshPro: 14,
                TextMeshProUGUI: 15
            }
        }
    });
    /*DG.Tweening.DOTweenAnimation+TargetType end.*/

    /*DG.Tweening.DOTweenAnimationExtensions start.*/
    Bridge.define("DG.Tweening.DOTweenAnimationExtensions", {
        statics: {
            methods: {
                /*DG.Tweening.DOTweenAnimationExtensions.IsSameOrSubclassOf:static start.*/
                IsSameOrSubclassOf: function (T, t) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenAnimationExtensions#IsSameOrSubclassOf", this ); }

                    return Bridge.is(t, T);
                },
                /*DG.Tweening.DOTweenAnimationExtensions.IsSameOrSubclassOf:static end.*/


            }
        }
    });
    /*DG.Tweening.DOTweenAnimationExtensions end.*/

    /*DG.Tweening.DOTweenCYInstruction start.*/
    Bridge.define("DG.Tweening.DOTweenCYInstruction");
    /*DG.Tweening.DOTweenCYInstruction end.*/

    /*DG.Tweening.DOTweenCYInstruction+WaitForCompletion start.*/
    Bridge.define("DG.Tweening.DOTweenCYInstruction.WaitForCompletion", {
        inherits: [UnityEngine.CustomYieldInstruction],
        $kind: 1002,
        fields: {
            t: null
        },
        props: {
            keepWaiting: {
                get: function () {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenCYInstruction.WaitForCompletion#keepWaiting#get", this ); }

                    return this.t.active && !DG.Tweening.TweenExtensions.IsComplete(this.t);
                }
            }
        },
        ctors: {
            ctor: function (tween) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenCYInstruction.WaitForCompletion#ctor", this ); }

                this.$initialize();
                UnityEngine.CustomYieldInstruction.ctor.call(this);
                this.t = tween;
            }
        }
    });
    /*DG.Tweening.DOTweenCYInstruction+WaitForCompletion end.*/

    /*DG.Tweening.DOTweenCYInstruction+WaitForElapsedLoops start.*/
    Bridge.define("DG.Tweening.DOTweenCYInstruction.WaitForElapsedLoops", {
        inherits: [UnityEngine.CustomYieldInstruction],
        $kind: 1002,
        fields: {
            t: null,
            elapsedLoops: 0
        },
        props: {
            keepWaiting: {
                get: function () {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenCYInstruction.WaitForElapsedLoops#keepWaiting#get", this ); }

                    return this.t.active && DG.Tweening.TweenExtensions.CompletedLoops(this.t) < this.elapsedLoops;
                }
            }
        },
        ctors: {
            ctor: function (tween, elapsedLoops) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenCYInstruction.WaitForElapsedLoops#ctor", this ); }

                this.$initialize();
                UnityEngine.CustomYieldInstruction.ctor.call(this);
                this.t = tween;
                this.elapsedLoops = elapsedLoops;
            }
        }
    });
    /*DG.Tweening.DOTweenCYInstruction+WaitForElapsedLoops end.*/

    /*DG.Tweening.DOTweenCYInstruction+WaitForKill start.*/
    Bridge.define("DG.Tweening.DOTweenCYInstruction.WaitForKill", {
        inherits: [UnityEngine.CustomYieldInstruction],
        $kind: 1002,
        fields: {
            t: null
        },
        props: {
            keepWaiting: {
                get: function () {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenCYInstruction.WaitForKill#keepWaiting#get", this ); }

                    return this.t.active;
                }
            }
        },
        ctors: {
            ctor: function (tween) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenCYInstruction.WaitForKill#ctor", this ); }

                this.$initialize();
                UnityEngine.CustomYieldInstruction.ctor.call(this);
                this.t = tween;
            }
        }
    });
    /*DG.Tweening.DOTweenCYInstruction+WaitForKill end.*/

    /*DG.Tweening.DOTweenCYInstruction+WaitForPosition start.*/
    Bridge.define("DG.Tweening.DOTweenCYInstruction.WaitForPosition", {
        inherits: [UnityEngine.CustomYieldInstruction],
        $kind: 1002,
        fields: {
            t: null,
            position: 0
        },
        props: {
            keepWaiting: {
                get: function () {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenCYInstruction.WaitForPosition#keepWaiting#get", this ); }

                    return this.t.active && this.t.position * (((DG.Tweening.TweenExtensions.CompletedLoops(this.t) + 1) | 0)) < this.position;
                }
            }
        },
        ctors: {
            ctor: function (tween, position) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenCYInstruction.WaitForPosition#ctor", this ); }

                this.$initialize();
                UnityEngine.CustomYieldInstruction.ctor.call(this);
                this.t = tween;
                this.position = position;
            }
        }
    });
    /*DG.Tweening.DOTweenCYInstruction+WaitForPosition end.*/

    /*DG.Tweening.DOTweenCYInstruction+WaitForRewind start.*/
    Bridge.define("DG.Tweening.DOTweenCYInstruction.WaitForRewind", {
        inherits: [UnityEngine.CustomYieldInstruction],
        $kind: 1002,
        fields: {
            t: null
        },
        props: {
            keepWaiting: {
                get: function () {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenCYInstruction.WaitForRewind#keepWaiting#get", this ); }

                    return this.t.active && (!this.t.playedOnce || this.t.position * (((DG.Tweening.TweenExtensions.CompletedLoops(this.t) + 1) | 0)) > 0);
                }
            }
        },
        ctors: {
            ctor: function (tween) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenCYInstruction.WaitForRewind#ctor", this ); }

                this.$initialize();
                UnityEngine.CustomYieldInstruction.ctor.call(this);
                this.t = tween;
            }
        }
    });
    /*DG.Tweening.DOTweenCYInstruction+WaitForRewind end.*/

    /*DG.Tweening.DOTweenCYInstruction+WaitForStart start.*/
    Bridge.define("DG.Tweening.DOTweenCYInstruction.WaitForStart", {
        inherits: [UnityEngine.CustomYieldInstruction],
        $kind: 1002,
        fields: {
            t: null
        },
        props: {
            keepWaiting: {
                get: function () {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenCYInstruction.WaitForStart#keepWaiting#get", this ); }

                    return this.t.active && !this.t.playedOnce;
                }
            }
        },
        ctors: {
            ctor: function (tween) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenCYInstruction.WaitForStart#ctor", this ); }

                this.$initialize();
                UnityEngine.CustomYieldInstruction.ctor.call(this);
                this.t = tween;
            }
        }
    });
    /*DG.Tweening.DOTweenCYInstruction+WaitForStart end.*/

    /*DG.Tweening.DOTweenModuleAudio start.*/
    Bridge.define("DG.Tweening.DOTweenModuleAudio", {
        statics: {
            methods: {
                /*DG.Tweening.DOTweenModuleAudio.DOFade:static start.*/
                /**
                 * Tweens an AudioSource's volume to the given value.
                 Also stores the AudioSource as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleAudio
                 * @memberof DG.Tweening.DOTweenModuleAudio
                 * @param   {UnityEngine.AudioSource}           target      
                 * @param   {number}                            endValue    The end value to reach (0 to 1)
                 * @param   {number}                            duration    The duration of the tween
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOFade: function (target, endValue, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleAudio#DOFade", this ); }

                    if (endValue < 0) {
                        endValue = 0;
                    } else {
                        if (endValue > 1) {
                            endValue = 1;
                        }
                    }
                    var t = DG.Tweening.DOTween.To$4(function () {
                        return target.volume;
                    }, function (x) {
                        target.volume = x;
                    }, endValue, duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(System.Single,System.Single,DG.Tweening.Plugins.Options.FloatOptions), t, target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleAudio.DOFade:static end.*/

                /*DG.Tweening.DOTweenModuleAudio.DOPitch:static start.*/
                /**
                 * Tweens an AudioSource's pitch to the given value.
                 Also stores the AudioSource as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleAudio
                 * @memberof DG.Tweening.DOTweenModuleAudio
                 * @param   {UnityEngine.AudioSource}           target      
                 * @param   {number}                            endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOPitch: function (target, endValue, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleAudio#DOPitch", this ); }

                    var t = DG.Tweening.DOTween.To$4(function () {
                        return target.pitch;
                    }, function (x) {
                        target.pitch = x;
                    }, endValue, duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(System.Single,System.Single,DG.Tweening.Plugins.Options.FloatOptions), t, target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleAudio.DOPitch:static end.*/

                /*DG.Tweening.DOTweenModuleAudio.DOSetFloat:static start.*/
                /**
                 * Tweens an AudioMixer's exposed float to the given value.
                 Also stores the AudioMixer as the tween's target so it can be used for filtered operations.
                 Note that you need to manually expose a float in an AudioMixerGroup in order to be able to tween it from an AudioMixer.
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleAudio
                 * @memberof DG.Tweening.DOTweenModuleAudio
                 * @param   {UnityEngine.Audio.AudioMixer}      target       
                 * @param   {string}                            floatName    Name given to the exposed float to set
                 * @param   {number}                            endValue     The end value to reach
                 * @param   {number}                            duration     The duration of the tween
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOSetFloat: function (target, floatName, endValue, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleAudio#DOSetFloat", this ); }

                    var t = DG.Tweening.DOTween.To$4(function () {
                        var currVal = { };
                        target.GetFloat(floatName, currVal);
                        return currVal.v;
                    }, function (x) {
                        target.SetFloat(floatName, x);
                    }, endValue, duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(System.Single,System.Single,DG.Tweening.Plugins.Options.FloatOptions), t, target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleAudio.DOSetFloat:static end.*/

                /*DG.Tweening.DOTweenModuleAudio.DOComplete:static start.*/
                /**
                 * Completes all tweens that have this target as a reference
                 (meaning tweens that were started from this target, or that had this target added as an Id)
                 and returns the total number of tweens completed
                 (meaning the tweens that don't have infinite loops and were not already complete)
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleAudio
                 * @memberof DG.Tweening.DOTweenModuleAudio
                 * @param   {UnityEngine.Audio.AudioMixer}    target           
                 * @param   {boolean}                         withCallbacks    For Sequences only: if TRUE also internal Sequence callbacks will be fired,
                 otherwise they will be ignored
                 * @return  {number}
                 */
                DOComplete: function (target, withCallbacks) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleAudio#DOComplete", this ); }

                    if (withCallbacks === void 0) { withCallbacks = false; }
                    return DG.Tweening.DOTween.Complete(target, withCallbacks);
                },
                /*DG.Tweening.DOTweenModuleAudio.DOComplete:static end.*/

                /*DG.Tweening.DOTweenModuleAudio.DOKill:static start.*/
                /**
                 * Kills all tweens that have this target as a reference
                 (meaning tweens that were started from this target, or that had this target added as an Id)
                 and returns the total number of tweens killed.
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleAudio
                 * @memberof DG.Tweening.DOTweenModuleAudio
                 * @param   {UnityEngine.Audio.AudioMixer}    target      
                 * @param   {boolean}                         complete    If TRUE completes the tween before killing it
                 * @return  {number}
                 */
                DOKill: function (target, complete) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleAudio#DOKill", this ); }

                    if (complete === void 0) { complete = false; }
                    return DG.Tweening.DOTween.Kill(target, complete);
                },
                /*DG.Tweening.DOTweenModuleAudio.DOKill:static end.*/

                /*DG.Tweening.DOTweenModuleAudio.DOFlip:static start.*/
                /**
                 * Flips the direction (backwards if it was going forward or viceversa) of all tweens that have this target as a reference
                 (meaning tweens that were started from this target, or that had this target added as an Id)
                 and returns the total number of tweens flipped.
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleAudio
                 * @memberof DG.Tweening.DOTweenModuleAudio
                 * @param   {UnityEngine.Audio.AudioMixer}    target
                 * @return  {number}
                 */
                DOFlip: function (target) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleAudio#DOFlip", this ); }

                    return DG.Tweening.DOTween.Flip(target);
                },
                /*DG.Tweening.DOTweenModuleAudio.DOFlip:static end.*/

                /*DG.Tweening.DOTweenModuleAudio.DOGoto:static start.*/
                /**
                 * Sends to the given position all tweens that have this target as a reference
                 (meaning tweens that were started from this target, or that had this target added as an Id)
                 and returns the total number of tweens involved.
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleAudio
                 * @memberof DG.Tweening.DOTweenModuleAudio
                 * @param   {UnityEngine.Audio.AudioMixer}    target     
                 * @param   {number}                          to         Time position to reach
                 (if higher than the whole tween duration the tween will simply reach its end)
                 * @param   {boolean}                         andPlay    If TRUE will play the tween after reaching the given position, otherwise it will pause it
                 * @return  {number}
                 */
                DOGoto: function (target, to, andPlay) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleAudio#DOGoto", this ); }

                    if (andPlay === void 0) { andPlay = false; }
                    return DG.Tweening.DOTween.Goto(target, to, andPlay);
                },
                /*DG.Tweening.DOTweenModuleAudio.DOGoto:static end.*/

                /*DG.Tweening.DOTweenModuleAudio.DOPause:static start.*/
                /**
                 * Pauses all tweens that have this target as a reference
                 (meaning tweens that were started from this target, or that had this target added as an Id)
                 and returns the total number of tweens paused.
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleAudio
                 * @memberof DG.Tweening.DOTweenModuleAudio
                 * @param   {UnityEngine.Audio.AudioMixer}    target
                 * @return  {number}
                 */
                DOPause: function (target) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleAudio#DOPause", this ); }

                    return DG.Tweening.DOTween.Pause(target);
                },
                /*DG.Tweening.DOTweenModuleAudio.DOPause:static end.*/

                /*DG.Tweening.DOTweenModuleAudio.DOPlay:static start.*/
                /**
                 * Plays all tweens that have this target as a reference
                 (meaning tweens that were started from this target, or that had this target added as an Id)
                 and returns the total number of tweens played.
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleAudio
                 * @memberof DG.Tweening.DOTweenModuleAudio
                 * @param   {UnityEngine.Audio.AudioMixer}    target
                 * @return  {number}
                 */
                DOPlay: function (target) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleAudio#DOPlay", this ); }

                    return DG.Tweening.DOTween.Play(target);
                },
                /*DG.Tweening.DOTweenModuleAudio.DOPlay:static end.*/

                /*DG.Tweening.DOTweenModuleAudio.DOPlayBackwards:static start.*/
                /**
                 * Plays backwards all tweens that have this target as a reference
                 (meaning tweens that were started from this target, or that had this target added as an Id)
                 and returns the total number of tweens played.
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleAudio
                 * @memberof DG.Tweening.DOTweenModuleAudio
                 * @param   {UnityEngine.Audio.AudioMixer}    target
                 * @return  {number}
                 */
                DOPlayBackwards: function (target) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleAudio#DOPlayBackwards", this ); }

                    return DG.Tweening.DOTween.PlayBackwards(target);
                },
                /*DG.Tweening.DOTweenModuleAudio.DOPlayBackwards:static end.*/

                /*DG.Tweening.DOTweenModuleAudio.DOPlayForward:static start.*/
                /**
                 * Plays forward all tweens that have this target as a reference
                 (meaning tweens that were started from this target, or that had this target added as an Id)
                 and returns the total number of tweens played.
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleAudio
                 * @memberof DG.Tweening.DOTweenModuleAudio
                 * @param   {UnityEngine.Audio.AudioMixer}    target
                 * @return  {number}
                 */
                DOPlayForward: function (target) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleAudio#DOPlayForward", this ); }

                    return DG.Tweening.DOTween.PlayForward(target);
                },
                /*DG.Tweening.DOTweenModuleAudio.DOPlayForward:static end.*/

                /*DG.Tweening.DOTweenModuleAudio.DORestart:static start.*/
                /**
                 * Restarts all tweens that have this target as a reference
                 (meaning tweens that were started from this target, or that had this target added as an Id)
                 and returns the total number of tweens restarted.
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleAudio
                 * @memberof DG.Tweening.DOTweenModuleAudio
                 * @param   {UnityEngine.Audio.AudioMixer}    target
                 * @return  {number}
                 */
                DORestart: function (target) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleAudio#DORestart", this ); }

                    return DG.Tweening.DOTween.Restart(target);
                },
                /*DG.Tweening.DOTweenModuleAudio.DORestart:static end.*/

                /*DG.Tweening.DOTweenModuleAudio.DORewind:static start.*/
                /**
                 * Rewinds all tweens that have this target as a reference
                 (meaning tweens that were started from this target, or that had this target added as an Id)
                 and returns the total number of tweens rewinded.
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleAudio
                 * @memberof DG.Tweening.DOTweenModuleAudio
                 * @param   {UnityEngine.Audio.AudioMixer}    target
                 * @return  {number}
                 */
                DORewind: function (target) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleAudio#DORewind", this ); }

                    return DG.Tweening.DOTween.Rewind(target);
                },
                /*DG.Tweening.DOTweenModuleAudio.DORewind:static end.*/

                /*DG.Tweening.DOTweenModuleAudio.DOSmoothRewind:static start.*/
                /**
                 * Smoothly rewinds all tweens that have this target as a reference
                 (meaning tweens that were started from this target, or that had this target added as an Id)
                 and returns the total number of tweens rewinded.
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleAudio
                 * @memberof DG.Tweening.DOTweenModuleAudio
                 * @param   {UnityEngine.Audio.AudioMixer}    target
                 * @return  {number}
                 */
                DOSmoothRewind: function (target) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleAudio#DOSmoothRewind", this ); }

                    return DG.Tweening.DOTween.SmoothRewind(target);
                },
                /*DG.Tweening.DOTweenModuleAudio.DOSmoothRewind:static end.*/

                /*DG.Tweening.DOTweenModuleAudio.DOTogglePause:static start.*/
                /**
                 * Toggles the paused state (plays if it was paused, pauses if it was playing) of all tweens that have this target as a reference
                 (meaning tweens that were started from this target, or that had this target added as an Id)
                 and returns the total number of tweens involved.
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleAudio
                 * @memberof DG.Tweening.DOTweenModuleAudio
                 * @param   {UnityEngine.Audio.AudioMixer}    target
                 * @return  {number}
                 */
                DOTogglePause: function (target) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleAudio#DOTogglePause", this ); }

                    return DG.Tweening.DOTween.TogglePause(target);
                },
                /*DG.Tweening.DOTweenModuleAudio.DOTogglePause:static end.*/


            }
        }
    });
    /*DG.Tweening.DOTweenModuleAudio end.*/

    /*DG.Tweening.DOTweenModulePhysics2D start.*/
    Bridge.define("DG.Tweening.DOTweenModulePhysics2D", {
        statics: {
            methods: {
                /*DG.Tweening.DOTweenModulePhysics2D.DOMove:static start.*/
                /**
                 * Tweens a Rigidbody2D's position to the given value.
                 Also stores the Rigidbody2D as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModulePhysics2D
                 * @memberof DG.Tweening.DOTweenModulePhysics2D
                 * @param   {UnityEngine.Rigidbody2D}           target      
                 * @param   {UnityEngine.Vector2}               endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @param   {boolean}                           snapping    If TRUE the tween will smoothly snap all values to integers
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOMove: function (target, endValue, duration, snapping) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModulePhysics2D#DOMove", this ); }

                    if (snapping === void 0) { snapping = false; }
                    var t = DG.Tweening.DOTween.To$11(function () {
                        return target.position;
                    }, Bridge.fn.cacheBind(target, target.MovePosition), endValue.$clone(), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$9(t, snapping), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModulePhysics2D.DOMove:static end.*/

                /*DG.Tweening.DOTweenModulePhysics2D.DOMoveX:static start.*/
                /**
                 * Tweens a Rigidbody2D's X position to the given value.
                 Also stores the Rigidbody2D as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModulePhysics2D
                 * @memberof DG.Tweening.DOTweenModulePhysics2D
                 * @param   {UnityEngine.Rigidbody2D}           target      
                 * @param   {number}                            endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @param   {boolean}                           snapping    If TRUE the tween will smoothly snap all values to integers
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOMoveX: function (target, endValue, duration, snapping) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModulePhysics2D#DOMoveX", this ); }

                    if (snapping === void 0) { snapping = false; }
                    var t = DG.Tweening.DOTween.To$11(function () {
                        return target.position;
                    }, Bridge.fn.cacheBind(target, target.MovePosition), new pc.Vec2( endValue, 0 ), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$8(t, DG.Tweening.AxisConstraint.X, snapping), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModulePhysics2D.DOMoveX:static end.*/

                /*DG.Tweening.DOTweenModulePhysics2D.DOMoveY:static start.*/
                /**
                 * Tweens a Rigidbody2D's Y position to the given value.
                 Also stores the Rigidbody2D as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModulePhysics2D
                 * @memberof DG.Tweening.DOTweenModulePhysics2D
                 * @param   {UnityEngine.Rigidbody2D}           target      
                 * @param   {number}                            endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @param   {boolean}                           snapping    If TRUE the tween will smoothly snap all values to integers
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOMoveY: function (target, endValue, duration, snapping) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModulePhysics2D#DOMoveY", this ); }

                    if (snapping === void 0) { snapping = false; }
                    var t = DG.Tweening.DOTween.To$11(function () {
                        return target.position;
                    }, Bridge.fn.cacheBind(target, target.MovePosition), new pc.Vec2( 0, endValue ), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$8(t, DG.Tweening.AxisConstraint.Y, snapping), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModulePhysics2D.DOMoveY:static end.*/

                /*DG.Tweening.DOTweenModulePhysics2D.DORotate:static start.*/
                /**
                 * Tweens a Rigidbody2D's rotation to the given value.
                 Also stores the Rigidbody2D as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModulePhysics2D
                 * @memberof DG.Tweening.DOTweenModulePhysics2D
                 * @param   {UnityEngine.Rigidbody2D}           target      
                 * @param   {number}                            endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DORotate: function (target, endValue, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModulePhysics2D#DORotate", this ); }

                    var t = DG.Tweening.DOTween.To$4(function () {
                        return target.rotation;
                    }, Bridge.fn.cacheBind(target, target.MoveRotation), endValue, duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(System.Single,System.Single,DG.Tweening.Plugins.Options.FloatOptions), t, target);
                    return t;
                },
                /*DG.Tweening.DOTweenModulePhysics2D.DORotate:static end.*/

                /*DG.Tweening.DOTweenModulePhysics2D.DOJump:static start.*/
                /**
                 * Tweens a Rigidbody2D's position to the given value, while also applying a jump effect along the Y axis.
                 Returns a Sequence instead of a Tweener.
                 Also stores the Rigidbody2D as the tween's target so it can be used for filtered operations.
                 <p>IMPORTANT: a rigidbody2D can't be animated in a jump arc using MovePosition, so the tween will directly set the position</p>
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModulePhysics2D
                 * @memberof DG.Tweening.DOTweenModulePhysics2D
                 * @param   {UnityEngine.Rigidbody2D}    target       
                 * @param   {UnityEngine.Vector2}        endValue     The end value to reach
                 * @param   {number}                     jumpPower    Power of the jump (the max height of the jump is represented by this plus the final Y offset)
                 * @param   {number}                     numJumps     Total number of jumps
                 * @param   {number}                     duration     The duration of the tween
                 * @param   {boolean}                    snapping     If TRUE the tween will smoothly snap all values to integers
                 * @return  {DG.Tweening.Sequence}
                 */
                DOJump: function (target, endValue, jumpPower, numJumps, duration, snapping) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModulePhysics2D#DOJump", this ); }

                    if (snapping === void 0) { snapping = false; }
                    if (numJumps < 1) {
                        numJumps = 1;
                    }
                    var startPosY = 0;
                    var offsetY = -1;
                    var offsetYSet = false;
                    var s = DG.Tweening.DOTween.Sequence();
                    var yTween = DG.Tweening.TweenSettingsExtensions.OnStart(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetLoops$1(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetRelative(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetEase$2(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$8(DG.Tweening.DOTween.To$11(function () {
                        return target.position;
                    }, function (x) {
                        target.position = x.$clone();
                    }, new pc.Vec2( 0, jumpPower ), duration / (Bridge.Int.mul(numJumps, 2))), DG.Tweening.AxisConstraint.Y, snapping), DG.Tweening.Ease.OutQuad)), Bridge.Int.mul(numJumps, 2), DG.Tweening.LoopType.Yoyo), function () {
                        startPosY = target.position.y;
                    });
                    DG.Tweening.TweenSettingsExtensions.SetEase$2(DG.Tweening.Sequence, DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Sequence, DG.Tweening.TweenSettingsExtensions.Join(DG.Tweening.TweenSettingsExtensions.Append(s, DG.Tweening.TweenSettingsExtensions.SetEase$2(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$8(DG.Tweening.DOTween.To$11(function () {
                        return target.position;
                    }, function (x) {
                        target.position = x.$clone();
                    }, new pc.Vec2( endValue.x, 0 ), duration), DG.Tweening.AxisConstraint.X, snapping), DG.Tweening.Ease.Linear)), yTween), target), DG.Tweening.DOTween.defaultEaseType);
                    DG.Tweening.TweenSettingsExtensions.OnUpdate(DG.Tweening.Tween, yTween, function () {
                        if (!offsetYSet) {
                            offsetYSet = true;
                            offsetY = s.isRelative ? endValue.y : endValue.y - startPosY;
                        }
                        var pos = UnityEngine.Vector3.FromVector2(target.position.$clone());
                        pos.y += DG.Tweening.DOVirtual.EasedValue(0, offsetY, DG.Tweening.TweenExtensions.ElapsedPercentage(yTween), DG.Tweening.Ease.OutQuad);
                        target.MovePosition$1(pos);
                    });
                    return s;
                },
                /*DG.Tweening.DOTweenModulePhysics2D.DOJump:static end.*/

                /*DG.Tweening.DOTweenModulePhysics2D.DOPath:static start.*/
                /**
                 * Tweens a Rigidbody2D's position through the given path waypoints, using the chosen path algorithm.
                 Also stores the Rigidbody2D as the tween's target so it can be used for filtered operations.
                 <p>NOTE: to tween a Rigidbody2D correctly it should be set to kinematic at least while being tweened.</p><p>BEWARE: doesn't work on Windows Phone store (waiting for Unity to fix their own bug).
                 If you plan to publish there you should use a regular transform.DOPath.</p>
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModulePhysics2D
                 * @memberof DG.Tweening.DOTweenModulePhysics2D
                 * @param   {UnityEngine.Rigidbody2D}           target        
                 * @param   {Array.<UnityEngine.Vector2>}       path          The waypoints to go through
                 * @param   {number}                            duration      The duration of the tween
                 * @param   {DG.Tweening.PathType}              pathType      The type of path: Linear (straight path), CatmullRom (curved CatmullRom path) or CubicBezier (curved with control points)
                 * @param   {DG.Tweening.PathMode}              pathMode      The path mode: 3D, side-scroller 2D, top-down 2D
                 * @param   {number}                            resolution    The resolution of the path (useless in case of Linear paths): higher resolutions make for more detailed curved paths but are more expensive.
                 Defaults to 10, but a value of 5 is usually enough if you don't have dramatic long curves between waypoints
                 * @param   {?UnityEngine.Color}                gizmoColor    The color of the path (shown when gizmos are active in the Play panel and the tween is running)
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOPath: function (target, path, duration, pathType, pathMode, resolution, gizmoColor) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModulePhysics2D#DOPath", this ); }

                    if (pathType === void 0) { pathType = 0; }
                    if (pathMode === void 0) { pathMode = 1; }
                    if (resolution === void 0) { resolution = 10; }
                    if (gizmoColor === void 0) { gizmoColor = null; }
                    if (resolution < 1) {
                        resolution = 1;
                    }
                    var len = path.length;
                    var path3D = System.Array.init(len, function (){
                        return new UnityEngine.Vector3();
                    }, UnityEngine.Vector3);
                    for (var i = 0; i < len; i = (i + 1) | 0) {
                        path3D[i] = UnityEngine.Vector3.FromVector2(path[i].$clone());
                    }
                    var t = DG.Tweening.TweenSettingsExtensions.SetUpdate$1(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,DG.Tweening.Plugins.Core.PathCore.Path,DG.Tweening.Plugins.Options.PathOptions), DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,DG.Tweening.Plugins.Core.PathCore.Path,DG.Tweening.Plugins.Options.PathOptions), DG.Tweening.DOTween.To(UnityEngine.Vector3, DG.Tweening.Plugins.Core.PathCore.Path, DG.Tweening.Plugins.Options.PathOptions, DG.Tweening.Plugins.PathPlugin.Get(), function () {
                        return UnityEngine.Vector3.FromVector2(target.position);
                    }, function (x) {
                        target.MovePosition$1(x);
                    }, new DG.Tweening.Plugins.Core.PathCore.Path.$ctor1(pathType, path3D, resolution, System.Nullable.lift1("$clone", gizmoColor)), duration), target), DG.Tweening.UpdateType.Fixed);

                    t.plugOptions.isRigidbody2D = true;
                    t.plugOptions.mode = pathMode;
                    return t;
                },
                /*DG.Tweening.DOTweenModulePhysics2D.DOPath:static end.*/

                /*DG.Tweening.DOTweenModulePhysics2D.DOPath$1:static start.*/
                DOPath$1: function (target, path, duration, pathMode) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModulePhysics2D#DOPath$1", this ); }

                    if (pathMode === void 0) { pathMode = 1; }
                    var t = DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,DG.Tweening.Plugins.Core.PathCore.Path,DG.Tweening.Plugins.Options.PathOptions), DG.Tweening.DOTween.To(UnityEngine.Vector3, DG.Tweening.Plugins.Core.PathCore.Path, DG.Tweening.Plugins.Options.PathOptions, DG.Tweening.Plugins.PathPlugin.Get(), function () {
                        return UnityEngine.Vector3.FromVector2(target.position);
                    }, function (x) {
                        target.MovePosition$1(x);
                    }, path, duration), target);

                    t.plugOptions.isRigidbody2D = true;
                    t.plugOptions.mode = pathMode;
                    return t;
                },
                /*DG.Tweening.DOTweenModulePhysics2D.DOPath$1:static end.*/

                /*DG.Tweening.DOTweenModulePhysics2D.DOLocalPath:static start.*/
                /**
                 * Tweens a Rigidbody2D's localPosition through the given path waypoints, using the chosen path algorithm.
                 Also stores the Rigidbody2D as the tween's target so it can be used for filtered operations
                 <p>NOTE: to tween a Rigidbody2D correctly it should be set to kinematic at least while being tweened.</p><p>BEWARE: doesn't work on Windows Phone store (waiting for Unity to fix their own bug).
                 If you plan to publish there you should use a regular transform.DOLocalPath.</p>
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModulePhysics2D
                 * @memberof DG.Tweening.DOTweenModulePhysics2D
                 * @param   {UnityEngine.Rigidbody2D}           target        
                 * @param   {Array.<UnityEngine.Vector2>}       path          The waypoint to go through
                 * @param   {number}                            duration      The duration of the tween
                 * @param   {DG.Tweening.PathType}              pathType      The type of path: Linear (straight path), CatmullRom (curved CatmullRom path) or CubicBezier (curved with control points)
                 * @param   {DG.Tweening.PathMode}              pathMode      The path mode: 3D, side-scroller 2D, top-down 2D
                 * @param   {number}                            resolution    The resolution of the path: higher resolutions make for more detailed curved paths but are more expensive.
                 Defaults to 10, but a value of 5 is usually enough if you don't have dramatic long curves between waypoints
                 * @param   {?UnityEngine.Color}                gizmoColor    The color of the path (shown when gizmos are active in the Play panel and the tween is running)
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOLocalPath: function (target, path, duration, pathType, pathMode, resolution, gizmoColor) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModulePhysics2D#DOLocalPath", this ); }

                    if (pathType === void 0) { pathType = 0; }
                    if (pathMode === void 0) { pathMode = 1; }
                    if (resolution === void 0) { resolution = 10; }
                    if (gizmoColor === void 0) { gizmoColor = null; }
                    if (resolution < 1) {
                        resolution = 1;
                    }
                    var len = path.length;
                    var path3D = System.Array.init(len, function (){
                        return new UnityEngine.Vector3();
                    }, UnityEngine.Vector3);
                    for (var i = 0; i < len; i = (i + 1) | 0) {
                        path3D[i] = UnityEngine.Vector3.FromVector2(path[i].$clone());
                    }
                    var trans = target.transform;
                    var t = DG.Tweening.TweenSettingsExtensions.SetUpdate$1(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,DG.Tweening.Plugins.Core.PathCore.Path,DG.Tweening.Plugins.Options.PathOptions), DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,DG.Tweening.Plugins.Core.PathCore.Path,DG.Tweening.Plugins.Options.PathOptions), DG.Tweening.DOTween.To(UnityEngine.Vector3, DG.Tweening.Plugins.Core.PathCore.Path, DG.Tweening.Plugins.Options.PathOptions, DG.Tweening.Plugins.PathPlugin.Get(), function () {
                        return trans.localPosition;
                    }, function (x) {
                        target.MovePosition$1(UnityEngine.Component.op_Equality(trans.parent, null) ? x.$clone() : trans.parent.TransformPoint$1(x));
                    }, new DG.Tweening.Plugins.Core.PathCore.Path.$ctor1(pathType, path3D, resolution, System.Nullable.lift1("$clone", gizmoColor)), duration), target), DG.Tweening.UpdateType.Fixed);

                    t.plugOptions.isRigidbody2D = true;
                    t.plugOptions.mode = pathMode;
                    t.plugOptions.useLocalPosition = true;
                    return t;
                },
                /*DG.Tweening.DOTweenModulePhysics2D.DOLocalPath:static end.*/

                /*DG.Tweening.DOTweenModulePhysics2D.DOLocalPath$1:static start.*/
                DOLocalPath$1: function (target, path, duration, pathMode) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModulePhysics2D#DOLocalPath$1", this ); }

                    if (pathMode === void 0) { pathMode = 1; }
                    var trans = target.transform;
                    var t = DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,DG.Tweening.Plugins.Core.PathCore.Path,DG.Tweening.Plugins.Options.PathOptions), DG.Tweening.DOTween.To(UnityEngine.Vector3, DG.Tweening.Plugins.Core.PathCore.Path, DG.Tweening.Plugins.Options.PathOptions, DG.Tweening.Plugins.PathPlugin.Get(), function () {
                        return trans.localPosition;
                    }, function (x) {
                        target.MovePosition$1(UnityEngine.Component.op_Equality(trans.parent, null) ? x.$clone() : trans.parent.TransformPoint$1(x));
                    }, path, duration), target);

                    t.plugOptions.isRigidbody2D = true;
                    t.plugOptions.mode = pathMode;
                    t.plugOptions.useLocalPosition = true;
                    return t;
                },
                /*DG.Tweening.DOTweenModulePhysics2D.DOLocalPath$1:static end.*/


            }
        }
    });
    /*DG.Tweening.DOTweenModulePhysics2D end.*/

    /*DG.Tweening.DOTweenModuleSprite start.*/
    Bridge.define("DG.Tweening.DOTweenModuleSprite", {
        statics: {
            methods: {
                /*DG.Tweening.DOTweenModuleSprite.DOColor:static start.*/
                /**
                 * Tweens a SpriteRenderer's color to the given value.
                 Also stores the spriteRenderer as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleSprite
                 * @memberof DG.Tweening.DOTweenModuleSprite
                 * @param   {UnityEngine.SpriteRenderer}        target      
                 * @param   {UnityEngine.Color}                 endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOColor: function (target, endValue, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleSprite#DOColor", this ); }

                    var t = DG.Tweening.DOTween.To$8(function () {
                        return target.color;
                    }, function (x) {
                        target.color = x.$clone();
                    }, endValue.$clone(), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions), t, target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleSprite.DOColor:static end.*/

                /*DG.Tweening.DOTweenModuleSprite.DOFade:static start.*/
                /**
                 * Tweens a Material's alpha color to the given value.
                 Also stores the spriteRenderer as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleSprite
                 * @memberof DG.Tweening.DOTweenModuleSprite
                 * @param   {UnityEngine.SpriteRenderer}        target      
                 * @param   {number}                            endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOFade: function (target, endValue, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleSprite#DOFade", this ); }

                    var t = DG.Tweening.DOTween.ToAlpha(function () {
                        return target.color;
                    }, function (x) {
                        target.color = x.$clone();
                    }, endValue, duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions), t, target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleSprite.DOFade:static end.*/

                /*DG.Tweening.DOTweenModuleSprite.DOGradientColor:static start.*/
                /**
                 * Tweens a SpriteRenderer's color using the given gradient
                 (NOTE 1: only uses the colors of the gradient, not the alphas - NOTE 2: creates a Sequence, not a Tweener).
                 Also stores the image as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleSprite
                 * @memberof DG.Tweening.DOTweenModuleSprite
                 * @param   {UnityEngine.SpriteRenderer}    target      
                 * @param   {pc.ColorGradient}              gradient    The gradient to use
                 * @param   {number}                        duration    The duration of the tween
                 * @return  {DG.Tweening.Sequence}
                 */
                DOGradientColor: function (target, gradient, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleSprite#DOGradientColor", this ); }

                    var s = DG.Tweening.DOTween.Sequence();
                    var colors = gradient.colorKeys;
                    var len = colors.length;
                    for (var i = 0; i < len; i = (i + 1) | 0) {
                        var c = colors[i];
                        if (i === 0 && c.time <= 0) {
                            target.color = c.color.$clone();
                            continue;
                        }
                        var colorDuration = i === ((len - 1) | 0) ? duration - DG.Tweening.TweenExtensions.Duration(s, false) : duration * (i === 0 ? c.time : c.time - colors[((i - 1) | 0)].time);
                        DG.Tweening.TweenSettingsExtensions.Append(s, DG.Tweening.TweenSettingsExtensions.SetEase$2(DG.Tweening.Core.TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions), DG.Tweening.DOTweenModuleSprite.DOColor(target, c.color.$clone(), colorDuration), DG.Tweening.Ease.Linear));
                    }
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Sequence, s, target);
                    return s;
                },
                /*DG.Tweening.DOTweenModuleSprite.DOGradientColor:static end.*/

                /*DG.Tweening.DOTweenModuleSprite.DOBlendableColor:static start.*/
                /**
                 * Tweens a SpriteRenderer's color to the given value,
                 in a way that allows other DOBlendableColor tweens to work together on the same target,
                 instead than fight each other as multiple DOColor would do.
                 Also stores the SpriteRenderer as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleSprite
                 * @memberof DG.Tweening.DOTweenModuleSprite
                 * @param   {UnityEngine.SpriteRenderer}    target      
                 * @param   {UnityEngine.Color}             endValue    The value to tween to
                 * @param   {number}                        duration    The duration of the tween
                 * @return  {DG.Tweening.Tweener}
                 */
                DOBlendableColor: function (target, endValue, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleSprite#DOBlendableColor", this ); }

                    var $t;
                    endValue = ($t = target.color, new pc.Color( endValue.r - $t.r, endValue.g - $t.g, endValue.b - $t.b, endValue.a - $t.a ));
                    var to = new pc.Color( 0, 0, 0, 0 );
                    return DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions), DG.Tweening.Core.Extensions.Blendable(UnityEngine.Color, UnityEngine.Color, DG.Tweening.Plugins.Options.ColorOptions, DG.Tweening.DOTween.To$8(function () {
                        return to;
                    }, function (x) {
                        var $t1;
                        var diff = new pc.Color( x.r - to.r, x.g - to.g, x.b - to.b, x.a - to.a );
                        to = x.$clone();
                        target.color = ($t1 = target.color.$clone(), new pc.Color( $t1.r + diff.$clone().r, $t1.g + diff.$clone().g, $t1.b + diff.$clone().b, $t1.a + diff.$clone().a ));
                    }, endValue.$clone(), duration)), target);
                },
                /*DG.Tweening.DOTweenModuleSprite.DOBlendableColor:static end.*/


            }
        }
    });
    /*DG.Tweening.DOTweenModuleSprite end.*/

    /*DG.Tweening.DOTweenModuleUI start.*/
    Bridge.define("DG.Tweening.DOTweenModuleUI", {
        statics: {
            methods: {
                /*DG.Tweening.DOTweenModuleUI.DOFade:static start.*/
                /**
                 * Tweens a CanvasGroup's alpha color to the given value.
                 Also stores the canvasGroup as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.CanvasGroup}           target      
                 * @param   {number}                            endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOFade: function (target, endValue, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOFade", this ); }

                    var t = DG.Tweening.DOTween.To$4(function () {
                        return target.alpha;
                    }, function (x) {
                        target.alpha = x;
                    }, endValue, duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(System.Single,System.Single,DG.Tweening.Plugins.Options.FloatOptions), t, target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOFade:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOFade$1:static start.*/
                /**
                 * Tweens an Graphic's alpha color to the given value.
                 Also stores the image as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.UI.Graphic}            target      
                 * @param   {number}                            endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOFade$1: function (target, endValue, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOFade$1", this ); }

                    var t = DG.Tweening.DOTween.ToAlpha(function () {
                        return target.color;
                    }, function (x) {
                        target.color = x.$clone();
                    }, endValue, duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions), t, target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOFade$1:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOFade$2:static start.*/
                /**
                 * Tweens an Image's alpha color to the given value.
                 Also stores the image as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.UI.Image}              target      
                 * @param   {number}                            endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOFade$2: function (target, endValue, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOFade$2", this ); }

                    var t = DG.Tweening.DOTween.ToAlpha(function () {
                        return target.color;
                    }, function (x) {
                        target.color = x.$clone();
                    }, endValue, duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions), t, target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOFade$2:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOFade$3:static start.*/
                /**
                 * Tweens a Outline's effectColor alpha to the given value.
                 Also stores the Outline as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.UI.Outline}            target      
                 * @param   {number}                            endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOFade$3: function (target, endValue, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOFade$3", this ); }

                    var t = DG.Tweening.DOTween.ToAlpha(function () {
                        return target.effectColor;
                    }, function (x) {
                        target.effectColor = x.$clone();
                    }, endValue, duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions), t, target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOFade$3:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOFade$4:static start.*/
                /**
                 * Tweens a Text's alpha color to the given value.
                 Also stores the Text as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.UI.Text}               target      
                 * @param   {number}                            endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOFade$4: function (target, endValue, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOFade$4", this ); }

                    var t = DG.Tweening.DOTween.ToAlpha(function () {
                        return target.color;
                    }, function (x) {
                        target.color = x.$clone();
                    }, endValue, duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions), t, target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOFade$4:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOColor:static start.*/
                /**
                 * Tweens an Graphic's color to the given value.
                 Also stores the image as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.UI.Graphic}            target      
                 * @param   {UnityEngine.Color}                 endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOColor: function (target, endValue, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOColor", this ); }

                    var t = DG.Tweening.DOTween.To$8(function () {
                        return target.color;
                    }, function (x) {
                        target.color = x.$clone();
                    }, endValue.$clone(), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions), t, target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOColor:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOColor$1:static start.*/
                /**
                 * Tweens an Image's color to the given value.
                 Also stores the image as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.UI.Image}              target      
                 * @param   {UnityEngine.Color}                 endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOColor$1: function (target, endValue, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOColor$1", this ); }

                    var t = DG.Tweening.DOTween.To$8(function () {
                        return target.color;
                    }, function (x) {
                        target.color = x.$clone();
                    }, endValue.$clone(), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions), t, target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOColor$1:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOColor$2:static start.*/
                /**
                 * Tweens a Outline's effectColor to the given value.
                 Also stores the Outline as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.UI.Outline}            target      
                 * @param   {UnityEngine.Color}                 endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOColor$2: function (target, endValue, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOColor$2", this ); }

                    var t = DG.Tweening.DOTween.To$8(function () {
                        return target.effectColor;
                    }, function (x) {
                        target.effectColor = x.$clone();
                    }, endValue.$clone(), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions), t, target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOColor$2:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOColor$3:static start.*/
                /**
                 * Tweens a Text's color to the given value.
                 Also stores the Text as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.UI.Text}               target      
                 * @param   {UnityEngine.Color}                 endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOColor$3: function (target, endValue, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOColor$3", this ); }

                    var t = DG.Tweening.DOTween.To$8(function () {
                        return target.color;
                    }, function (x) {
                        target.color = x.$clone();
                    }, endValue.$clone(), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions), t, target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOColor$3:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOFillAmount:static start.*/
                /**
                 * Tweens an Image's fillAmount to the given value.
                 Also stores the image as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.UI.Image}              target      
                 * @param   {number}                            endValue    The end value to reach (0 to 1)
                 * @param   {number}                            duration    The duration of the tween
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOFillAmount: function (target, endValue, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOFillAmount", this ); }

                    if (endValue > 1) {
                        endValue = 1;
                    } else {
                        if (endValue < 0) {
                            endValue = 0;
                        }
                    }
                    var t = DG.Tweening.DOTween.To$4(function () {
                        return target.fillAmount;
                    }, function (x) {
                        target.fillAmount = x;
                    }, endValue, duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(System.Single,System.Single,DG.Tweening.Plugins.Options.FloatOptions), t, target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOFillAmount:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOGradientColor:static start.*/
                /**
                 * Tweens an Image's colors using the given gradient
                 (NOTE 1: only uses the colors of the gradient, not the alphas - NOTE 2: creates a Sequence, not a Tweener).
                 Also stores the image as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.UI.Image}    target      
                 * @param   {pc.ColorGradient}        gradient    The gradient to use
                 * @param   {number}                  duration    The duration of the tween
                 * @return  {DG.Tweening.Sequence}
                 */
                DOGradientColor: function (target, gradient, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOGradientColor", this ); }

                    var s = DG.Tweening.DOTween.Sequence();
                    var colors = gradient.colorKeys;
                    var len = colors.length;
                    for (var i = 0; i < len; i = (i + 1) | 0) {
                        var c = colors[i];
                        if (i === 0 && c.time <= 0) {
                            target.color = c.color.$clone();
                            continue;
                        }
                        var colorDuration = i === ((len - 1) | 0) ? duration - DG.Tweening.TweenExtensions.Duration(s, false) : duration * (i === 0 ? c.time : c.time - colors[((i - 1) | 0)].time);
                        DG.Tweening.TweenSettingsExtensions.Append(s, DG.Tweening.TweenSettingsExtensions.SetEase$2(DG.Tweening.Core.TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions), DG.Tweening.DOTweenModuleUI.DOColor$1(target, c.color.$clone(), colorDuration), DG.Tweening.Ease.Linear));
                    }
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Sequence, s, target);
                    return s;
                },
                /*DG.Tweening.DOTweenModuleUI.DOGradientColor:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOFlexibleSize:static start.*/
                /**
                 * Tweens an LayoutElement's flexibleWidth/Height to the given value.
                 Also stores the LayoutElement as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.UI.LayoutElement}      target      
                 * @param   {UnityEngine.Vector2}               endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @param   {boolean}                           snapping    If TRUE the tween will smoothly snap all values to integers
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOFlexibleSize: function (target, endValue, duration, snapping) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOFlexibleSize", this ); }

                    if (snapping === void 0) { snapping = false; }
                    var t = DG.Tweening.DOTween.To$11(function () {
                        return new pc.Vec2( target.flexibleWidth, target.flexibleHeight );
                    }, function (x) {
                        target.flexibleWidth = x.x;
                        target.flexibleHeight = x.y;
                    }, endValue.$clone(), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$9(t, snapping), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOFlexibleSize:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOMinSize:static start.*/
                /**
                 * Tweens an LayoutElement's minWidth/Height to the given value.
                 Also stores the LayoutElement as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.UI.LayoutElement}      target      
                 * @param   {UnityEngine.Vector2}               endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @param   {boolean}                           snapping    If TRUE the tween will smoothly snap all values to integers
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOMinSize: function (target, endValue, duration, snapping) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOMinSize", this ); }

                    if (snapping === void 0) { snapping = false; }
                    var t = DG.Tweening.DOTween.To$11(function () {
                        return new pc.Vec2( target.minWidth, target.minHeight );
                    }, function (x) {
                        target.minWidth = x.x;
                        target.minHeight = x.y;
                    }, endValue.$clone(), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$9(t, snapping), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOMinSize:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOPreferredSize:static start.*/
                /**
                 * Tweens an LayoutElement's preferredWidth/Height to the given value.
                 Also stores the LayoutElement as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.UI.LayoutElement}      target      
                 * @param   {UnityEngine.Vector2}               endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @param   {boolean}                           snapping    If TRUE the tween will smoothly snap all values to integers
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOPreferredSize: function (target, endValue, duration, snapping) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOPreferredSize", this ); }

                    if (snapping === void 0) { snapping = false; }
                    var t = DG.Tweening.DOTween.To$11(function () {
                        return new pc.Vec2( target.preferredWidth, target.preferredHeight );
                    }, function (x) {
                        target.preferredWidth = x.x;
                        target.preferredHeight = x.y;
                    }, endValue.$clone(), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$9(t, snapping), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOPreferredSize:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOScale:static start.*/
                /**
                 * Tweens a Outline's effectDistance to the given value.
                 Also stores the Outline as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.UI.Outline}            target      
                 * @param   {UnityEngine.Vector2}               endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOScale: function (target, endValue, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOScale", this ); }

                    var t = DG.Tweening.DOTween.To$11(function () {
                        return target.effectDistance;
                    }, function (x) {
                        target.effectDistance = x.$clone();
                    }, endValue.$clone(), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.Options.VectorOptions), t, target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOScale:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOAnchorPos:static start.*/
                /**
                 * Tweens a RectTransform's anchoredPosition to the given value.
                 Also stores the RectTransform as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.RectTransform}         target      
                 * @param   {UnityEngine.Vector2}               endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @param   {boolean}                           snapping    If TRUE the tween will smoothly snap all values to integers
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOAnchorPos: function (target, endValue, duration, snapping) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOAnchorPos", this ); }

                    if (snapping === void 0) { snapping = false; }
                    var t = DG.Tweening.DOTween.To$11(function () {
                        return target.anchoredPosition;
                    }, function (x) {
                        target.anchoredPosition = x.$clone();
                    }, endValue.$clone(), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$9(t, snapping), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOAnchorPos:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOAnchorPosX:static start.*/
                /**
                 * Tweens a RectTransform's anchoredPosition X to the given value.
                 Also stores the RectTransform as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.RectTransform}         target      
                 * @param   {number}                            endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @param   {boolean}                           snapping    If TRUE the tween will smoothly snap all values to integers
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOAnchorPosX: function (target, endValue, duration, snapping) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOAnchorPosX", this ); }

                    if (snapping === void 0) { snapping = false; }
                    var t = DG.Tweening.DOTween.To$11(function () {
                        return target.anchoredPosition;
                    }, function (x) {
                        target.anchoredPosition = x.$clone();
                    }, new pc.Vec2( endValue, 0 ), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$8(t, DG.Tweening.AxisConstraint.X, snapping), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOAnchorPosX:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOAnchorPosY:static start.*/
                /**
                 * Tweens a RectTransform's anchoredPosition Y to the given value.
                 Also stores the RectTransform as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.RectTransform}         target      
                 * @param   {number}                            endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @param   {boolean}                           snapping    If TRUE the tween will smoothly snap all values to integers
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOAnchorPosY: function (target, endValue, duration, snapping) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOAnchorPosY", this ); }

                    if (snapping === void 0) { snapping = false; }
                    var t = DG.Tweening.DOTween.To$11(function () {
                        return target.anchoredPosition;
                    }, function (x) {
                        target.anchoredPosition = x.$clone();
                    }, new pc.Vec2( 0, endValue ), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$8(t, DG.Tweening.AxisConstraint.Y, snapping), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOAnchorPosY:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOAnchorPos3D:static start.*/
                /**
                 * Tweens a RectTransform's anchoredPosition3D to the given value.
                 Also stores the RectTransform as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.RectTransform}         target      
                 * @param   {UnityEngine.Vector3}               endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @param   {boolean}                           snapping    If TRUE the tween will smoothly snap all values to integers
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOAnchorPos3D: function (target, endValue, duration, snapping) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOAnchorPos3D", this ); }

                    if (snapping === void 0) { snapping = false; }
                    var t = DG.Tweening.DOTween.To$12(function () {
                        return target.anchoredPosition3D;
                    }, function (x) {
                        target.anchoredPosition3D = x.$clone();
                    }, endValue.$clone(), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$13(t, snapping), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOAnchorPos3D:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOAnchorPos3DX:static start.*/
                /**
                 * Tweens a RectTransform's anchoredPosition3D X to the given value.
                 Also stores the RectTransform as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.RectTransform}         target      
                 * @param   {number}                            endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @param   {boolean}                           snapping    If TRUE the tween will smoothly snap all values to integers
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOAnchorPos3DX: function (target, endValue, duration, snapping) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOAnchorPos3DX", this ); }

                    if (snapping === void 0) { snapping = false; }
                    var t = DG.Tweening.DOTween.To$12(function () {
                        return target.anchoredPosition3D;
                    }, function (x) {
                        target.anchoredPosition3D = x.$clone();
                    }, new pc.Vec3( endValue, 0, 0 ), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$12(t, DG.Tweening.AxisConstraint.X, snapping), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOAnchorPos3DX:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOAnchorPos3DY:static start.*/
                /**
                 * Tweens a RectTransform's anchoredPosition3D Y to the given value.
                 Also stores the RectTransform as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.RectTransform}         target      
                 * @param   {number}                            endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @param   {boolean}                           snapping    If TRUE the tween will smoothly snap all values to integers
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOAnchorPos3DY: function (target, endValue, duration, snapping) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOAnchorPos3DY", this ); }

                    if (snapping === void 0) { snapping = false; }
                    var t = DG.Tweening.DOTween.To$12(function () {
                        return target.anchoredPosition3D;
                    }, function (x) {
                        target.anchoredPosition3D = x.$clone();
                    }, new pc.Vec3( 0, endValue, 0 ), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$12(t, DG.Tweening.AxisConstraint.Y, snapping), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOAnchorPos3DY:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOAnchorPos3DZ:static start.*/
                /**
                 * Tweens a RectTransform's anchoredPosition3D Z to the given value.
                 Also stores the RectTransform as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.RectTransform}         target      
                 * @param   {number}                            endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @param   {boolean}                           snapping    If TRUE the tween will smoothly snap all values to integers
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOAnchorPos3DZ: function (target, endValue, duration, snapping) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOAnchorPos3DZ", this ); }

                    if (snapping === void 0) { snapping = false; }
                    var t = DG.Tweening.DOTween.To$12(function () {
                        return target.anchoredPosition3D;
                    }, function (x) {
                        target.anchoredPosition3D = x.$clone();
                    }, new pc.Vec3( 0, 0, endValue ), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$12(t, DG.Tweening.AxisConstraint.Z, snapping), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOAnchorPos3DZ:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOAnchorMax:static start.*/
                /**
                 * Tweens a RectTransform's anchorMax to the given value.
                 Also stores the RectTransform as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.RectTransform}         target      
                 * @param   {UnityEngine.Vector2}               endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @param   {boolean}                           snapping    If TRUE the tween will smoothly snap all values to integers
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOAnchorMax: function (target, endValue, duration, snapping) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOAnchorMax", this ); }

                    if (snapping === void 0) { snapping = false; }
                    var t = DG.Tweening.DOTween.To$11(function () {
                        return target.anchorMax;
                    }, function (x) {
                        target.anchorMax = x.$clone();
                    }, endValue.$clone(), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$9(t, snapping), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOAnchorMax:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOAnchorMin:static start.*/
                /**
                 * Tweens a RectTransform's anchorMin to the given value.
                 Also stores the RectTransform as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.RectTransform}         target      
                 * @param   {UnityEngine.Vector2}               endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @param   {boolean}                           snapping    If TRUE the tween will smoothly snap all values to integers
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOAnchorMin: function (target, endValue, duration, snapping) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOAnchorMin", this ); }

                    if (snapping === void 0) { snapping = false; }
                    var t = DG.Tweening.DOTween.To$11(function () {
                        return target.anchorMin;
                    }, function (x) {
                        target.anchorMin = x.$clone();
                    }, endValue.$clone(), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$9(t, snapping), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOAnchorMin:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOPivot:static start.*/
                /**
                 * Tweens a RectTransform's pivot to the given value.
                 Also stores the RectTransform as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.RectTransform}         target      
                 * @param   {UnityEngine.Vector2}               endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOPivot: function (target, endValue, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOPivot", this ); }

                    var t = DG.Tweening.DOTween.To$11(function () {
                        return target.pivot;
                    }, function (x) {
                        target.pivot = x.$clone();
                    }, endValue.$clone(), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.Options.VectorOptions), t, target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOPivot:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOPivotX:static start.*/
                /**
                 * Tweens a RectTransform's pivot X to the given value.
                 Also stores the RectTransform as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.RectTransform}         target      
                 * @param   {number}                            endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOPivotX: function (target, endValue, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOPivotX", this ); }

                    var t = DG.Tweening.DOTween.To$11(function () {
                        return target.pivot;
                    }, function (x) {
                        target.pivot = x.$clone();
                    }, new pc.Vec2( endValue, 0 ), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$8(t, DG.Tweening.AxisConstraint.X), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOPivotX:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOPivotY:static start.*/
                /**
                 * Tweens a RectTransform's pivot Y to the given value.
                 Also stores the RectTransform as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.RectTransform}         target      
                 * @param   {number}                            endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOPivotY: function (target, endValue, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOPivotY", this ); }

                    var t = DG.Tweening.DOTween.To$11(function () {
                        return target.pivot;
                    }, function (x) {
                        target.pivot = x.$clone();
                    }, new pc.Vec2( 0, endValue ), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$8(t, DG.Tweening.AxisConstraint.Y), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOPivotY:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOSizeDelta:static start.*/
                /**
                 * Tweens a RectTransform's sizeDelta to the given value.
                 Also stores the RectTransform as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.RectTransform}         target      
                 * @param   {UnityEngine.Vector2}               endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @param   {boolean}                           snapping    If TRUE the tween will smoothly snap all values to integers
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOSizeDelta: function (target, endValue, duration, snapping) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOSizeDelta", this ); }

                    if (snapping === void 0) { snapping = false; }
                    var t = DG.Tweening.DOTween.To$11(function () {
                        return target.sizeDelta;
                    }, function (x) {
                        target.sizeDelta = x.$clone();
                    }, endValue.$clone(), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$9(t, snapping), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOSizeDelta:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOPunchAnchorPos:static start.*/
                /**
                 * Punches a RectTransform's anchoredPosition towards the given direction and then back to the starting one
                 as if it was connected to the starting position via an elastic.
                 Also stores the RectTransform as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.RectTransform}    target        
                 * @param   {UnityEngine.Vector2}          punch         The direction and strength of the punch (added to the RectTransform's current position)
                 * @param   {number}                       duration      The duration of the tween
                 * @param   {number}                       vibrato       Indicates how much will the punch vibrate
                 * @param   {number}                       elasticity    Represents how much (0 to 1) the vector will go beyond the starting position when bouncing backwards.
                 1 creates a full oscillation between the punch direction and the opposite direction,
                 while 0 oscillates only between the punch and the start position
                 * @param   {boolean}                      snapping      If TRUE the tween will smoothly snap all values to integers
                 * @return  {DG.Tweening.Tweener}
                 */
                DOPunchAnchorPos: function (target, punch, duration, vibrato, elasticity, snapping) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOPunchAnchorPos", this ); }

                    if (vibrato === void 0) { vibrato = 10; }
                    if (elasticity === void 0) { elasticity = 1.0; }
                    if (snapping === void 0) { snapping = false; }
                    return DG.Tweening.TweenSettingsExtensions.SetOptions$11(DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,System.Array.type(UnityEngine.Vector3),DG.Tweening.Plugins.Options.Vector3ArrayOptions), DG.Tweening.DOTween.Punch(function () {
                        return UnityEngine.Vector3.FromVector2(target.anchoredPosition);
                    }, function (x) {
                        target.anchoredPosition = UnityEngine.Vector2.FromVector3(x.$clone());
                    }, UnityEngine.Vector3.FromVector2(punch.$clone()), duration, vibrato, elasticity), target), snapping);
                },
                /*DG.Tweening.DOTweenModuleUI.DOPunchAnchorPos:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOShakeAnchorPos:static start.*/
                /**
                 * Shakes a RectTransform's anchoredPosition with the given values.
                 Also stores the RectTransform as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.RectTransform}          target            
                 * @param   {number}                             duration          The duration of the tween
                 * @param   {number}                             strength          The shake strength
                 * @param   {number}                             vibrato           Indicates how much will the shake vibrate
                 * @param   {number}                             randomness        Indicates how much the shake will be random (0 to 180 - values higher than 90 kind of suck, so beware). 
                 Setting it to 0 will shake along a single direction.
                 * @param   {boolean}                            snapping          If TRUE the tween will smoothly snap all values to integers
                 * @param   {boolean}                            fadeOut           If TRUE the shake will automatically fadeOut smoothly within the tween's duration, otherwise it will not
                 * @param   {DG.Tweening.ShakeRandomnessMode}    randomnessMode    Randomness mode
                 * @return  {DG.Tweening.Tweener}
                 */
                DOShakeAnchorPos: function (target, duration, strength, vibrato, randomness, snapping, fadeOut, randomnessMode) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOShakeAnchorPos", this ); }

                    if (strength === void 0) { strength = 100.0; }
                    if (vibrato === void 0) { vibrato = 10; }
                    if (randomness === void 0) { randomness = 90.0; }
                    if (snapping === void 0) { snapping = false; }
                    if (fadeOut === void 0) { fadeOut = true; }
                    if (randomnessMode === void 0) { randomnessMode = 0; }
                    return DG.Tweening.TweenSettingsExtensions.SetOptions$11(DG.Tweening.Core.Extensions.SetSpecialStartupMode(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,System.Array.type(UnityEngine.Vector3),DG.Tweening.Plugins.Options.Vector3ArrayOptions), DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,System.Array.type(UnityEngine.Vector3),DG.Tweening.Plugins.Options.Vector3ArrayOptions), DG.Tweening.DOTween.Shake(function () {
                        return UnityEngine.Vector3.FromVector2(target.anchoredPosition);
                    }, function (x) {
                        target.anchoredPosition = UnityEngine.Vector2.FromVector3(x.$clone());
                    }, duration, strength, vibrato, randomness, true, fadeOut, randomnessMode), target), DG.Tweening.Core.Enums.SpecialStartupMode.SetShake), snapping);
                },
                /*DG.Tweening.DOTweenModuleUI.DOShakeAnchorPos:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOShakeAnchorPos$1:static start.*/
                /**
                 * Shakes a RectTransform's anchoredPosition with the given values.
                 Also stores the RectTransform as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.RectTransform}          target            
                 * @param   {number}                             duration          The duration of the tween
                 * @param   {UnityEngine.Vector2}                strength          The shake strength on each axis
                 * @param   {number}                             vibrato           Indicates how much will the shake vibrate
                 * @param   {number}                             randomness        Indicates how much the shake will be random (0 to 180 - values higher than 90 kind of suck, so beware). 
                 Setting it to 0 will shake along a single direction.
                 * @param   {boolean}                            snapping          If TRUE the tween will smoothly snap all values to integers
                 * @param   {boolean}                            fadeOut           If TRUE the shake will automatically fadeOut smoothly within the tween's duration, otherwise it will not
                 * @param   {DG.Tweening.ShakeRandomnessMode}    randomnessMode    Randomness mode
                 * @return  {DG.Tweening.Tweener}
                 */
                DOShakeAnchorPos$1: function (target, duration, strength, vibrato, randomness, snapping, fadeOut, randomnessMode) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOShakeAnchorPos$1", this ); }

                    if (vibrato === void 0) { vibrato = 10; }
                    if (randomness === void 0) { randomness = 90.0; }
                    if (snapping === void 0) { snapping = false; }
                    if (fadeOut === void 0) { fadeOut = true; }
                    if (randomnessMode === void 0) { randomnessMode = 0; }
                    return DG.Tweening.TweenSettingsExtensions.SetOptions$11(DG.Tweening.Core.Extensions.SetSpecialStartupMode(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,System.Array.type(UnityEngine.Vector3),DG.Tweening.Plugins.Options.Vector3ArrayOptions), DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,System.Array.type(UnityEngine.Vector3),DG.Tweening.Plugins.Options.Vector3ArrayOptions), DG.Tweening.DOTween.Shake$1(function () {
                        return UnityEngine.Vector3.FromVector2(target.anchoredPosition);
                    }, function (x) {
                        target.anchoredPosition = UnityEngine.Vector2.FromVector3(x.$clone());
                    }, duration, UnityEngine.Vector3.FromVector2(strength.$clone()), vibrato, randomness, fadeOut, randomnessMode), target), DG.Tweening.Core.Enums.SpecialStartupMode.SetShake), snapping);
                },
                /*DG.Tweening.DOTweenModuleUI.DOShakeAnchorPos$1:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOJumpAnchorPos:static start.*/
                /**
                 * Tweens a RectTransform's anchoredPosition to the given value, while also applying a jump effect along the Y axis.
                 Returns a Sequence instead of a Tweener.
                 Also stores the RectTransform as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.RectTransform}    target       
                 * @param   {UnityEngine.Vector2}          endValue     The end value to reach
                 * @param   {number}                       jumpPower    Power of the jump (the max height of the jump is represented by this plus the final Y offset)
                 * @param   {number}                       numJumps     Total number of jumps
                 * @param   {number}                       duration     The duration of the tween
                 * @param   {boolean}                      snapping     If TRUE the tween will smoothly snap all values to integers
                 * @return  {DG.Tweening.Sequence}
                 */
                DOJumpAnchorPos: function (target, endValue, jumpPower, numJumps, duration, snapping) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOJumpAnchorPos", this ); }

                    if (snapping === void 0) { snapping = false; }
                    if (numJumps < 1) {
                        numJumps = 1;
                    }
                    var startPosY = 0;
                    var offsetY = -1;
                    var offsetYSet = false;

                    // Separate Y Tween so we can elaborate elapsedPercentage on that insted of on the Sequence
                    // (in case users add a delay or other elements to the Sequence)
                    var s = DG.Tweening.DOTween.Sequence();
                    var yTween = DG.Tweening.TweenSettingsExtensions.OnStart(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetLoops$1(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetRelative(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetEase$2(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$8(DG.Tweening.DOTween.To$11(function () {
                        return target.anchoredPosition;
                    }, function (x) {
                        target.anchoredPosition = x.$clone();
                    }, new pc.Vec2( 0, jumpPower ), duration / (Bridge.Int.mul(numJumps, 2))), DG.Tweening.AxisConstraint.Y, snapping), DG.Tweening.Ease.OutQuad)), Bridge.Int.mul(numJumps, 2), DG.Tweening.LoopType.Yoyo), function () {
                        startPosY = target.anchoredPosition.y;
                    });
                    DG.Tweening.TweenSettingsExtensions.SetEase$2(DG.Tweening.Sequence, DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Sequence, DG.Tweening.TweenSettingsExtensions.Join(DG.Tweening.TweenSettingsExtensions.Append(s, DG.Tweening.TweenSettingsExtensions.SetEase$2(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$8(DG.Tweening.DOTween.To$11(function () {
                        return target.anchoredPosition;
                    }, function (x) {
                        target.anchoredPosition = x.$clone();
                    }, new pc.Vec2( endValue.x, 0 ), duration), DG.Tweening.AxisConstraint.X, snapping), DG.Tweening.Ease.Linear)), yTween), target), DG.Tweening.DOTween.defaultEaseType);
                    DG.Tweening.TweenSettingsExtensions.OnUpdate(DG.Tweening.Sequence, s, function () {
                        if (!offsetYSet) {
                            offsetYSet = true;
                            offsetY = s.isRelative ? endValue.y : endValue.y - startPosY;
                        }
                        var pos = target.anchoredPosition.$clone();
                        pos.y += DG.Tweening.DOVirtual.EasedValue(0, offsetY, DG.Tweening.TweenExtensions.ElapsedDirectionalPercentage(s), DG.Tweening.Ease.OutQuad);
                        target.anchoredPosition = pos.$clone();
                    });
                    return s;
                },
                /*DG.Tweening.DOTweenModuleUI.DOJumpAnchorPos:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DONormalizedPos:static start.*/
                /**
                 * Tweens a ScrollRect's horizontal/verticalNormalizedPosition to the given value.
                 Also stores the ScrollRect as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.UI.ScrollRect}    target      
                 * @param   {UnityEngine.Vector2}          endValue    The end value to reach
                 * @param   {number}                       duration    The duration of the tween
                 * @param   {boolean}                      snapping    If TRUE the tween will smoothly snap all values to integers
                 * @return  {DG.Tweening.Tweener}
                 */
                DONormalizedPos: function (target, endValue, duration, snapping) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DONormalizedPos", this ); }

                    if (snapping === void 0) { snapping = false; }
                    return DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$9(DG.Tweening.DOTween.To$11(function () {
                        return new pc.Vec2( target.horizontalNormalizedPosition, target.verticalNormalizedPosition );
                    }, function (x) {
                        target.horizontalNormalizedPosition = x.x;
                        target.verticalNormalizedPosition = x.y;
                    }, endValue.$clone(), duration), snapping), target);
                },
                /*DG.Tweening.DOTweenModuleUI.DONormalizedPos:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOHorizontalNormalizedPos:static start.*/
                /**
                 * Tweens a ScrollRect's horizontalNormalizedPosition to the given value.
                 Also stores the ScrollRect as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.UI.ScrollRect}    target      
                 * @param   {number}                       endValue    The end value to reach
                 * @param   {number}                       duration    The duration of the tween
                 * @param   {boolean}                      snapping    If TRUE the tween will smoothly snap all values to integers
                 * @return  {DG.Tweening.Tweener}
                 */
                DOHorizontalNormalizedPos: function (target, endValue, duration, snapping) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOHorizontalNormalizedPos", this ); }

                    if (snapping === void 0) { snapping = false; }
                    return DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$2(DG.Tweening.DOTween.To$4(function () {
                        return target.horizontalNormalizedPosition;
                    }, function (x) {
                        target.horizontalNormalizedPosition = x;
                    }, endValue, duration), snapping), target);
                },
                /*DG.Tweening.DOTweenModuleUI.DOHorizontalNormalizedPos:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOVerticalNormalizedPos:static start.*/
                /**
                 * Tweens a ScrollRect's verticalNormalizedPosition to the given value.
                 Also stores the ScrollRect as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.UI.ScrollRect}    target      
                 * @param   {number}                       endValue    The end value to reach
                 * @param   {number}                       duration    The duration of the tween
                 * @param   {boolean}                      snapping    If TRUE the tween will smoothly snap all values to integers
                 * @return  {DG.Tweening.Tweener}
                 */
                DOVerticalNormalizedPos: function (target, endValue, duration, snapping) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOVerticalNormalizedPos", this ); }

                    if (snapping === void 0) { snapping = false; }
                    return DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$2(DG.Tweening.DOTween.To$4(function () {
                        return target.verticalNormalizedPosition;
                    }, function (x) {
                        target.verticalNormalizedPosition = x;
                    }, endValue, duration), snapping), target);
                },
                /*DG.Tweening.DOTweenModuleUI.DOVerticalNormalizedPos:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOValue:static start.*/
                /**
                 * Tweens a Slider's value to the given value.
                 Also stores the Slider as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.UI.Slider}             target      
                 * @param   {number}                            endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @param   {boolean}                           snapping    If TRUE the tween will smoothly snap all values to integers
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOValue: function (target, endValue, duration, snapping) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOValue", this ); }

                    if (snapping === void 0) { snapping = false; }
                    var t = DG.Tweening.DOTween.To$4(function () {
                        return target.value;
                    }, function (x) {
                        target.value = x;
                    }, endValue, duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$2(t, snapping), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOValue:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOCounter:static start.*/
                /**
                 * Tweens a Text's text from one integer to another, with options for thousands separators
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.UI.Text}                 target                   
                 * @param   {number}                              fromValue                The value to start from
                 * @param   {number}                              endValue                 The end value to reach
                 * @param   {number}                              duration                 The duration of the tween
                 * @param   {boolean}                             addThousandsSeparator    If TRUE (default) also adds thousands separators
                 * @param   {System.Globalization.CultureInfo}    culture                  The {@link } to use (InvariantCulture if NULL)
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOCounter: function (target, fromValue, endValue, duration, addThousandsSeparator, culture) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOCounter", this ); }

                    if (addThousandsSeparator === void 0) { addThousandsSeparator = true; }
                    if (culture === void 0) { culture = null; }
                    var v = fromValue;
                    var cInfo = !addThousandsSeparator ? null : culture || System.Globalization.CultureInfo.invariantCulture;
                    var t = DG.Tweening.DOTween.To$2(function () {
                        return v;
                    }, function (x) {
                        v = x;
                        target.text = addThousandsSeparator ? System.Int32.format(v, "N0", cInfo) : Bridge.toString(v);
                    }, endValue, duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(System.Int32,System.Int32,DG.Tweening.Plugins.Options.NoOptions), t, target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOCounter:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOText:static start.*/
                /**
                 * Tweens a Text's text to the given value.
                 Also stores the Text as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.UI.Text}               target             
                 * @param   {string}                            endValue           The end string to tween to
                 * @param   {number}                            duration           The duration of the tween
                 * @param   {boolean}                           richTextEnabled    If TRUE (default), rich text will be interpreted correctly while animated,
                 otherwise all tags will be considered as normal text
                 * @param   {DG.Tweening.ScrambleMode}          scrambleMode       The type of scramble mode to use, if any
                 * @param   {string}                            scrambleChars      A string containing the characters to use for scrambling.
                 Use as many characters as possible (minimum 10) because DOTween uses a fast scramble mode which gives better results with more characters.
                 Leave it to NULL (default) to use default ones
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOText: function (target, endValue, duration, richTextEnabled, scrambleMode, scrambleChars) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOText", this ); }

                    if (richTextEnabled === void 0) { richTextEnabled = true; }
                    if (scrambleMode === void 0) { scrambleMode = 0; }
                    if (scrambleChars === void 0) { scrambleChars = null; }
                    if (endValue == null) {
                        if (DG.Tweening.Core.Debugger.logPriority > 0) {
                            DG.Tweening.Core.Debugger.LogWarning("You can't pass a NULL string to DOText: an empty string will be used instead to avoid errors");
                        }
                        endValue = "";
                    }
                    var t = DG.Tweening.DOTween.To$5(function () {
                        return target.text;
                    }, function (x) {
                        target.text = x;
                    }, endValue, duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$3(t, richTextEnabled, scrambleMode, scrambleChars), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOText:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOBlendableColor:static start.*/
                /**
                 * Tweens a Graphic's color to the given value,
                 in a way that allows other DOBlendableColor tweens to work together on the same target,
                 instead than fight each other as multiple DOColor would do.
                 Also stores the Graphic as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.UI.Graphic}    target      
                 * @param   {UnityEngine.Color}         endValue    The value to tween to
                 * @param   {number}                    duration    The duration of the tween
                 * @return  {DG.Tweening.Tweener}
                 */
                DOBlendableColor: function (target, endValue, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOBlendableColor", this ); }

                    var $t;
                    endValue = ($t = target.color, new pc.Color( endValue.r - $t.r, endValue.g - $t.g, endValue.b - $t.b, endValue.a - $t.a ));
                    var to = new pc.Color( 0, 0, 0, 0 );
                    return DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions), DG.Tweening.Core.Extensions.Blendable(UnityEngine.Color, UnityEngine.Color, DG.Tweening.Plugins.Options.ColorOptions, DG.Tweening.DOTween.To$8(function () {
                        return to;
                    }, function (x) {
                        var $t1;
                        var diff = new pc.Color( x.r - to.r, x.g - to.g, x.b - to.b, x.a - to.a );
                        to = x.$clone();
                        target.color = ($t1 = target.color.$clone(), new pc.Color( $t1.r + diff.$clone().r, $t1.g + diff.$clone().g, $t1.b + diff.$clone().b, $t1.a + diff.$clone().a ));
                    }, endValue.$clone(), duration)), target);
                },
                /*DG.Tweening.DOTweenModuleUI.DOBlendableColor:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOBlendableColor$1:static start.*/
                /**
                 * Tweens a Image's color to the given value,
                 in a way that allows other DOBlendableColor tweens to work together on the same target,
                 instead than fight each other as multiple DOColor would do.
                 Also stores the Image as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.UI.Image}    target      
                 * @param   {UnityEngine.Color}       endValue    The value to tween to
                 * @param   {number}                  duration    The duration of the tween
                 * @return  {DG.Tweening.Tweener}
                 */
                DOBlendableColor$1: function (target, endValue, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOBlendableColor$1", this ); }

                    var $t;
                    endValue = ($t = target.color, new pc.Color( endValue.r - $t.r, endValue.g - $t.g, endValue.b - $t.b, endValue.a - $t.a ));
                    var to = new pc.Color( 0, 0, 0, 0 );
                    return DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions), DG.Tweening.Core.Extensions.Blendable(UnityEngine.Color, UnityEngine.Color, DG.Tweening.Plugins.Options.ColorOptions, DG.Tweening.DOTween.To$8(function () {
                        return to;
                    }, function (x) {
                        var $t1;
                        var diff = new pc.Color( x.r - to.r, x.g - to.g, x.b - to.b, x.a - to.a );
                        to = x.$clone();
                        target.color = ($t1 = target.color.$clone(), new pc.Color( $t1.r + diff.$clone().r, $t1.g + diff.$clone().g, $t1.b + diff.$clone().b, $t1.a + diff.$clone().a ));
                    }, endValue.$clone(), duration)), target);
                },
                /*DG.Tweening.DOTweenModuleUI.DOBlendableColor$1:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOBlendableColor$2:static start.*/
                /**
                 * Tweens a Text's color BY the given value,
                 in a way that allows other DOBlendableColor tweens to work together on the same target,
                 instead than fight each other as multiple DOColor would do.
                 Also stores the Text as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.UI.Text}    target      
                 * @param   {UnityEngine.Color}      endValue    The value to tween to
                 * @param   {number}                 duration    The duration of the tween
                 * @return  {DG.Tweening.Tweener}
                 */
                DOBlendableColor$2: function (target, endValue, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOBlendableColor$2", this ); }

                    var $t;
                    endValue = ($t = target.color, new pc.Color( endValue.r - $t.r, endValue.g - $t.g, endValue.b - $t.b, endValue.a - $t.a ));
                    var to = new pc.Color( 0, 0, 0, 0 );
                    return DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions), DG.Tweening.Core.Extensions.Blendable(UnityEngine.Color, UnityEngine.Color, DG.Tweening.Plugins.Options.ColorOptions, DG.Tweening.DOTween.To$8(function () {
                        return to;
                    }, function (x) {
                        var $t1;
                        var diff = new pc.Color( x.r - to.r, x.g - to.g, x.b - to.b, x.a - to.a );
                        to = x.$clone();
                        target.color = ($t1 = target.color.$clone(), new pc.Color( $t1.r + diff.$clone().r, $t1.g + diff.$clone().g, $t1.b + diff.$clone().b, $t1.a + diff.$clone().a ));
                    }, endValue.$clone(), duration)), target);
                },
                /*DG.Tweening.DOTweenModuleUI.DOBlendableColor$2:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOShapeCircle:static start.*/
                /**
                 * Tweens a RectTransform's anchoredPosition so that it draws a circle around the given center.
                 Also stores the RectTransform as the tween's target so it can be used for filtered operations.<p />
                 IMPORTANT: SetFrom(value) requires a {@link } instead of a float, where the X property represents the "from degrees value"
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.RectTransform}         target             
                 * @param   {UnityEngine.Vector2}               center             Circle-center/pivot around which to rotate (in UI anchoredPosition coordinates)
                 * @param   {number}                            endValueDegrees    The end value degrees to reach (to rotate counter-clockwise pass a negative value)
                 * @param   {number}                            duration           The duration of the tween
                 * @param   {boolean}                           relativeCenter     If TRUE the {@link } coordinates will be considered as relative to the target's current anchoredPosition
                 * @param   {boolean}                           snapping           If TRUE the tween will smoothly snap all values to integers
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOShapeCircle: function (target, center, endValueDegrees, duration, relativeCenter, snapping) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOShapeCircle", this ); }

                    if (relativeCenter === void 0) { relativeCenter = false; }
                    if (snapping === void 0) { snapping = false; }
                    var t = DG.Tweening.DOTween.To(UnityEngine.Vector2, UnityEngine.Vector2, DG.Tweening.Plugins.CircleOptions, DG.Tweening.Plugins.CirclePlugin.Get(), function () {
                        return target.anchoredPosition;
                    }, function (x) {
                        target.anchoredPosition = x.$clone();
                    }, center.$clone(), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$7(t, endValueDegrees, relativeCenter, snapping), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOShapeCircle:static end.*/


            }
        }
    });
    /*DG.Tweening.DOTweenModuleUI end.*/

    /*DG.Tweening.DOTweenModuleUI+Utils start.*/
    Bridge.define("DG.Tweening.DOTweenModuleUI.Utils", {
        $kind: 1002,
        statics: {
            methods: {
                /*DG.Tweening.DOTweenModuleUI+Utils.SwitchToRectTransform:static start.*/
                /**
                 * Converts the anchoredPosition of the first RectTransform to the second RectTransform,
                 taking into consideration offset, anchors and pivot, and returns the new anchoredPosition
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI.Utils
                 * @memberof DG.Tweening.DOTweenModuleUI.Utils
                 * @param   {UnityEngine.RectTransform}    from    
                 * @param   {UnityEngine.RectTransform}    to
                 * @return  {UnityEngine.Vector2}
                 */
                SwitchToRectTransform: function (from, to) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI.Utils#SwitchToRectTransform", this ); }

                    var localPoint = { v : new UnityEngine.Vector2() };
                    var fromPivotDerivedOffset = new pc.Vec2( from.rect.width * 0.5 + from.rect.xMin, from.rect.height * 0.5 + from.rect.yMin );
                    var screenP = UnityEngine.RectTransformUtility.WorldToScreenPoint(null, from.position);
                    screenP = screenP.$clone().add( fromPivotDerivedOffset.$clone() );
                    UnityEngine.RectTransformUtility.ScreenPointToLocalPointInRectangle(to, screenP, null, localPoint);
                    var pivotDerivedOffset = new pc.Vec2( to.rect.width * 0.5 + to.rect.xMin, to.rect.height * 0.5 + to.rect.yMin );
                    return to.anchoredPosition.$clone().add( localPoint.v ).sub( pivotDerivedOffset );
                },
                /*DG.Tweening.DOTweenModuleUI+Utils.SwitchToRectTransform:static end.*/


            }
        }
    });
    /*DG.Tweening.DOTweenModuleUI+Utils end.*/

    /*DG.Tweening.DOTweenModuleUnityVersion start.*/
    /**
     * Shortcuts/functions that are not strictly related to specific Modules
     but are available only on some Unity versions
     *
     * @static
     * @abstract
     * @public
     * @class DG.Tweening.DOTweenModuleUnityVersion
     */
    Bridge.define("DG.Tweening.DOTweenModuleUnityVersion", {
        statics: {
            methods: {
                /*DG.Tweening.DOTweenModuleUnityVersion.DOGradientColor:static start.*/
                /**
                 * Tweens a Material's color using the given gradient
                 (NOTE 1: only uses the colors of the gradient, not the alphas - NOTE 2: creates a Sequence, not a Tweener).
                 Also stores the image as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUnityVersion
                 * @memberof DG.Tweening.DOTweenModuleUnityVersion
                 * @param   {UnityEngine.Material}    target      
                 * @param   {pc.ColorGradient}        gradient    The gradient to use
                 * @param   {number}                  duration    The duration of the tween
                 * @return  {DG.Tweening.Sequence}
                 */
                DOGradientColor: function (target, gradient, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUnityVersion#DOGradientColor", this ); }

                    var s = DG.Tweening.DOTween.Sequence();
                    var colors = gradient.colorKeys;
                    var len = colors.length;
                    for (var i = 0; i < len; i = (i + 1) | 0) {
                        var c = colors[i];
                        if (i === 0 && c.time <= 0) {
                            target.color = c.color.$clone();
                            continue;
                        }
                        var colorDuration = i === ((len - 1) | 0) ? duration - DG.Tweening.TweenExtensions.Duration(s, false) : duration * (i === 0 ? c.time : c.time - colors[((i - 1) | 0)].time);
                        DG.Tweening.TweenSettingsExtensions.Append(s, DG.Tweening.TweenSettingsExtensions.SetEase$2(DG.Tweening.Core.TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions), DG.Tweening.ShortcutExtensions.DOColor$3(target, c.color.$clone(), colorDuration), DG.Tweening.Ease.Linear));
                    }
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Sequence, s, target);
                    return s;
                },
                /*DG.Tweening.DOTweenModuleUnityVersion.DOGradientColor:static end.*/

                /*DG.Tweening.DOTweenModuleUnityVersion.DOGradientColor$1:static start.*/
                /**
                 * Tweens a Material's named color property using the given gradient
                 (NOTE 1: only uses the colors of the gradient, not the alphas - NOTE 2: creates a Sequence, not a Tweener).
                 Also stores the image as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUnityVersion
                 * @memberof DG.Tweening.DOTweenModuleUnityVersion
                 * @param   {UnityEngine.Material}    target      
                 * @param   {pc.ColorGradient}        gradient    The gradient to use
                 * @param   {string}                  property    The name of the material property to tween (like _Tint or _SpecColor)
                 * @param   {number}                  duration    The duration of the tween
                 * @return  {DG.Tweening.Sequence}
                 */
                DOGradientColor$1: function (target, gradient, property, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUnityVersion#DOGradientColor$1", this ); }

                    var s = DG.Tweening.DOTween.Sequence();
                    var colors = gradient.colorKeys;
                    var len = colors.length;
                    for (var i = 0; i < len; i = (i + 1) | 0) {
                        var c = colors[i];
                        if (i === 0 && c.time <= 0) {
                            target.SetColor$1(property, c.color);
                            continue;
                        }
                        var colorDuration = i === ((len - 1) | 0) ? duration - DG.Tweening.TweenExtensions.Duration(s, false) : duration * (i === 0 ? c.time : c.time - colors[((i - 1) | 0)].time);
                        DG.Tweening.TweenSettingsExtensions.Append(s, DG.Tweening.TweenSettingsExtensions.SetEase$2(DG.Tweening.Core.TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions), DG.Tweening.ShortcutExtensions.DOColor$4(target, c.color.$clone(), property, colorDuration), DG.Tweening.Ease.Linear));
                    }
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Sequence, s, target);
                    return s;
                },
                /*DG.Tweening.DOTweenModuleUnityVersion.DOGradientColor$1:static end.*/

                /*DG.Tweening.DOTweenModuleUnityVersion.WaitForCompletion:static start.*/
                /**
                 * Returns a {@link } that waits until the tween is killed or complete.
                 It can be used inside a coroutine as a yield.
                 <p>Example usage:</p><pre><code>yield return myTween.WaitForCompletion(true);</code></pre>
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUnityVersion
                 * @memberof DG.Tweening.DOTweenModuleUnityVersion
                 * @param   {DG.Tweening.Tween}                     t                               
                 * @param   {boolean}                               returnCustomYieldInstruction
                 * @return  {UnityEngine.CustomYieldInstruction}
                 */
                WaitForCompletion: function (t, returnCustomYieldInstruction) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUnityVersion#WaitForCompletion", this ); }

                    if (!t.active) {
                        if (DG.Tweening.Core.Debugger.logPriority > 0) {
                            DG.Tweening.Core.Debugger.LogInvalidTween(t);
                        }
                        return null;
                    }
                    return new DG.Tweening.DOTweenCYInstruction.WaitForCompletion(t);
                },
                /*DG.Tweening.DOTweenModuleUnityVersion.WaitForCompletion:static end.*/

                /*DG.Tweening.DOTweenModuleUnityVersion.WaitForRewind:static start.*/
                /**
                 * Returns a {@link } that waits until the tween is killed or rewinded.
                 It can be used inside a coroutine as a yield.
                 <p>Example usage:</p><pre><code>yield return myTween.WaitForRewind();</code></pre>
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUnityVersion
                 * @memberof DG.Tweening.DOTweenModuleUnityVersion
                 * @param   {DG.Tweening.Tween}                     t                               
                 * @param   {boolean}                               returnCustomYieldInstruction
                 * @return  {UnityEngine.CustomYieldInstruction}
                 */
                WaitForRewind: function (t, returnCustomYieldInstruction) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUnityVersion#WaitForRewind", this ); }

                    if (!t.active) {
                        if (DG.Tweening.Core.Debugger.logPriority > 0) {
                            DG.Tweening.Core.Debugger.LogInvalidTween(t);
                        }
                        return null;
                    }
                    return new DG.Tweening.DOTweenCYInstruction.WaitForRewind(t);
                },
                /*DG.Tweening.DOTweenModuleUnityVersion.WaitForRewind:static end.*/

                /*DG.Tweening.DOTweenModuleUnityVersion.WaitForKill:static start.*/
                /**
                 * Returns a {@link } that waits until the tween is killed.
                 It can be used inside a coroutine as a yield.
                 <p>Example usage:</p><pre><code>yield return myTween.WaitForKill();</code></pre>
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUnityVersion
                 * @memberof DG.Tweening.DOTweenModuleUnityVersion
                 * @param   {DG.Tweening.Tween}                     t                               
                 * @param   {boolean}                               returnCustomYieldInstruction
                 * @return  {UnityEngine.CustomYieldInstruction}
                 */
                WaitForKill: function (t, returnCustomYieldInstruction) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUnityVersion#WaitForKill", this ); }

                    if (!t.active) {
                        if (DG.Tweening.Core.Debugger.logPriority > 0) {
                            DG.Tweening.Core.Debugger.LogInvalidTween(t);
                        }
                        return null;
                    }
                    return new DG.Tweening.DOTweenCYInstruction.WaitForKill(t);
                },
                /*DG.Tweening.DOTweenModuleUnityVersion.WaitForKill:static end.*/

                /*DG.Tweening.DOTweenModuleUnityVersion.WaitForElapsedLoops:static start.*/
                /**
                 * Returns a {@link } that waits until the tween is killed or has gone through the given amount of loops.
                 It can be used inside a coroutine as a yield.
                 <p>Example usage:</p><pre><code>yield return myTween.WaitForElapsedLoops(2);</code></pre>
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUnityVersion
                 * @memberof DG.Tweening.DOTweenModuleUnityVersion
                 * @param   {DG.Tweening.Tween}                     t                               
                 * @param   {number}                                elapsedLoops                    Elapsed loops to wait for
                 * @param   {boolean}                               returnCustomYieldInstruction
                 * @return  {UnityEngine.CustomYieldInstruction}
                 */
                WaitForElapsedLoops: function (t, elapsedLoops, returnCustomYieldInstruction) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUnityVersion#WaitForElapsedLoops", this ); }

                    if (!t.active) {
                        if (DG.Tweening.Core.Debugger.logPriority > 0) {
                            DG.Tweening.Core.Debugger.LogInvalidTween(t);
                        }
                        return null;
                    }
                    return new DG.Tweening.DOTweenCYInstruction.WaitForElapsedLoops(t, elapsedLoops);
                },
                /*DG.Tweening.DOTweenModuleUnityVersion.WaitForElapsedLoops:static end.*/

                /*DG.Tweening.DOTweenModuleUnityVersion.WaitForPosition:static start.*/
                /**
                 * Returns a {@link } that waits until the tween is killed
                 or has reached the given time position (loops included, delays excluded).
                 It can be used inside a coroutine as a yield.
                 <p>Example usage:</p><pre><code>yield return myTween.WaitForPosition(2.5f);</code></pre>
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUnityVersion
                 * @memberof DG.Tweening.DOTweenModuleUnityVersion
                 * @param   {DG.Tweening.Tween}                     t                               
                 * @param   {number}                                position                        Position (loops included, delays excluded) to wait for
                 * @param   {boolean}                               returnCustomYieldInstruction
                 * @return  {UnityEngine.CustomYieldInstruction}
                 */
                WaitForPosition: function (t, position, returnCustomYieldInstruction) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUnityVersion#WaitForPosition", this ); }

                    if (!t.active) {
                        if (DG.Tweening.Core.Debugger.logPriority > 0) {
                            DG.Tweening.Core.Debugger.LogInvalidTween(t);
                        }
                        return null;
                    }
                    return new DG.Tweening.DOTweenCYInstruction.WaitForPosition(t, position);
                },
                /*DG.Tweening.DOTweenModuleUnityVersion.WaitForPosition:static end.*/

                /*DG.Tweening.DOTweenModuleUnityVersion.WaitForStart:static start.*/
                /**
                 * Returns a {@link } that waits until the tween is killed or started
                 (meaning when the tween is set in a playing state the first time, after any eventual delay).
                 It can be used inside a coroutine as a yield.
                 <p>Example usage:</p><pre><code>yield return myTween.WaitForStart();</code></pre>
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUnityVersion
                 * @memberof DG.Tweening.DOTweenModuleUnityVersion
                 * @param   {DG.Tweening.Tween}                     t                               
                 * @param   {boolean}                               returnCustomYieldInstruction
                 * @return  {UnityEngine.CustomYieldInstruction}
                 */
                WaitForStart: function (t, returnCustomYieldInstruction) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUnityVersion#WaitForStart", this ); }

                    if (!t.active) {
                        if (DG.Tweening.Core.Debugger.logPriority > 0) {
                            DG.Tweening.Core.Debugger.LogInvalidTween(t);
                        }
                        return null;
                    }
                    return new DG.Tweening.DOTweenCYInstruction.WaitForStart(t);
                },
                /*DG.Tweening.DOTweenModuleUnityVersion.WaitForStart:static end.*/

                /*DG.Tweening.DOTweenModuleUnityVersion.DOOffset:static start.*/
                /**
                 * Tweens a Material's named texture offset property with the given ID to the given value.
                 Also stores the material as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUnityVersion
                 * @memberof DG.Tweening.DOTweenModuleUnityVersion
                 * @param   {UnityEngine.Material}              target        
                 * @param   {UnityEngine.Vector2}               endValue      The end value to reach
                 * @param   {number}                            propertyID    The ID of the material property to tween (also called nameID in Unity's manual)
                 * @param   {number}                            duration      The duration of the tween
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOOffset: function (target, endValue, propertyID, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUnityVersion#DOOffset", this ); }

                    if (!target.HasProperty(propertyID)) {
                        if (DG.Tweening.Core.Debugger.logPriority > 0) {
                            DG.Tweening.Core.Debugger.LogMissingMaterialProperty(propertyID);
                        }
                        return null;
                    }
                    var t = DG.Tweening.DOTween.To$11(function () {
                        return target.GetTextureOffset(propertyID);
                    }, function (x) {
                        target.SetTextureOffset(propertyID, x);
                    }, endValue.$clone(), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.Options.VectorOptions), t, target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUnityVersion.DOOffset:static end.*/

                /*DG.Tweening.DOTweenModuleUnityVersion.DOTiling:static start.*/
                /**
                 * Tweens a Material's named texture scale property with the given ID to the given value.
                 Also stores the material as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUnityVersion
                 * @memberof DG.Tweening.DOTweenModuleUnityVersion
                 * @param   {UnityEngine.Material}              target        
                 * @param   {UnityEngine.Vector2}               endValue      The end value to reach
                 * @param   {number}                            propertyID    The ID of the material property to tween (also called nameID in Unity's manual)
                 * @param   {number}                            duration      The duration of the tween
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOTiling: function (target, endValue, propertyID, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUnityVersion#DOTiling", this ); }

                    if (!target.HasProperty(propertyID)) {
                        if (DG.Tweening.Core.Debugger.logPriority > 0) {
                            DG.Tweening.Core.Debugger.LogMissingMaterialProperty(propertyID);
                        }
                        return null;
                    }
                    var t = DG.Tweening.DOTween.To$11(function () {
                        return target.GetTextureScale(propertyID);
                    }, function (x) {
                        target.SetTextureScale(propertyID, x);
                    }, endValue.$clone(), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.Options.VectorOptions), t, target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUnityVersion.DOTiling:static end.*/


            }
        }
    });
    /*DG.Tweening.DOTweenModuleUnityVersion end.*/

    /*DG.Tweening.DOTweenModuleUtils start.*/
    /**
     * Utility functions that deal with available Modules.
     Modules defines:
     - DOTAUDIO
     - DOTPHYSICS
     - DOTPHYSICS2D
     - DOTSPRITE
     - DOTUI
     Extra defines set and used for implementation of external assets:
     - DOTWEEN_TMP ► TextMesh Pro
     - DOTWEEN_TK2D ► 2D Toolkit
     *
     * @static
     * @abstract
     * @public
     * @class DG.Tweening.DOTweenModuleUtils
     */
    Bridge.define("DG.Tweening.DOTweenModuleUtils", {
        statics: {
            fields: {
                _initialized: false
            },
            methods: {
                /*DG.Tweening.DOTweenModuleUtils.Init:static start.*/
                /**
                 * Called via Reflection by DOTweenComponent on Awake
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUtils
                 * @memberof DG.Tweening.DOTweenModuleUtils
                 * @return  {void}
                 */
                Init: function () {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUtils#Init", this ); }

                    if (DG.Tweening.DOTweenModuleUtils._initialized) {
                        return;
                    }

                    DG.Tweening.DOTweenModuleUtils._initialized = true;
                    DG.Tweening.Core.DOTweenExternalCommand.addSetOrientationOnPath(DG.Tweening.DOTweenModuleUtils.Physics.SetOrientationOnPath);

                },
                /*DG.Tweening.DOTweenModuleUtils.Init:static end.*/

                /*DG.Tweening.DOTweenModuleUtils.Preserver:static start.*/
                Preserver: function () {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUtils#Preserver", this ); }

                    var loadedAssemblies = System.AppDomain.getAssemblies();
                    var mi = Bridge.Reflection.getMembers(UnityEngine.MonoBehaviour, 8, 284, "Stub");
                },
                /*DG.Tweening.DOTweenModuleUtils.Preserver:static end.*/


            }
        }
    });
    /*DG.Tweening.DOTweenModuleUtils end.*/

    /*DG.Tweening.DOTweenModuleUtils+Physics start.*/
    Bridge.define("DG.Tweening.DOTweenModuleUtils.Physics", {
        $kind: 1002,
        statics: {
            methods: {
                /*DG.Tweening.DOTweenModuleUtils+Physics.SetOrientationOnPath:static start.*/
                SetOrientationOnPath: function (options, t, newRot, trans) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUtils.Physics#SetOrientationOnPath", this ); }

                    trans.rotation = newRot.$clone();
                },
                /*DG.Tweening.DOTweenModuleUtils+Physics.SetOrientationOnPath:static end.*/

                /*DG.Tweening.DOTweenModuleUtils+Physics.HasRigidbody2D:static start.*/
                HasRigidbody2D: function (target) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUtils.Physics#HasRigidbody2D", this ); }

                    return UnityEngine.Component.op_Inequality(target.GetComponent(UnityEngine.Rigidbody2D), null);
                },
                /*DG.Tweening.DOTweenModuleUtils+Physics.HasRigidbody2D:static end.*/

                /*DG.Tweening.DOTweenModuleUtils+Physics.HasRigidbody:static start.*/
                HasRigidbody: function (target) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUtils.Physics#HasRigidbody", this ); }

                    return false;
                },
                /*DG.Tweening.DOTweenModuleUtils+Physics.HasRigidbody:static end.*/

                /*DG.Tweening.DOTweenModuleUtils+Physics.CreateDOTweenPathTween:static start.*/
                CreateDOTweenPathTween: function (target, tweenRigidbody, isLocal, path, duration, pathMode) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUtils.Physics#CreateDOTweenPathTween", this ); }

                    var t = null;
                    var rBodyFoundAndTweened = false;
                    if (!rBodyFoundAndTweened && tweenRigidbody) {
                        var rBody2D = target.GetComponent(UnityEngine.Rigidbody2D);
                        if (UnityEngine.Component.op_Inequality(rBody2D, null)) {
                            rBodyFoundAndTweened = true;
                            t = isLocal ? DG.Tweening.DOTweenModulePhysics2D.DOLocalPath$1(rBody2D, path, duration, pathMode) : DG.Tweening.DOTweenModulePhysics2D.DOPath$1(rBody2D, path, duration, pathMode);
                        }
                    }
                    if (!rBodyFoundAndTweened) {
                        t = isLocal ? DG.Tweening.ShortcutExtensions.DOLocalPath(target.transform, path, duration, pathMode) : DG.Tweening.ShortcutExtensions.DOPath(target.transform, path, duration, pathMode);
                    }
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUtils+Physics.CreateDOTweenPathTween:static end.*/


            }
        }
    });
    /*DG.Tweening.DOTweenModuleUtils+Physics end.*/

    /*DG.Tweening.DOTweenProShortcuts start.*/
    Bridge.define("DG.Tweening.DOTweenProShortcuts", {
        statics: {
            ctors: {
                ctor: function () {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenProShortcuts#ctor", this ); }

                    // Create stub instances of custom plugins, in order to allow IL2CPP to understand they must be included in the build
                    var stub = new DG.Tweening.Plugins.SpiralPlugin();
                }
            },
            methods: {
                /*DG.Tweening.DOTweenProShortcuts.DOSpiral:static start.*/
                /**
                 * Tweens a Transform's localPosition in a spiral shape.
                 Also stores the transform as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenProShortcuts
                 * @memberof DG.Tweening.DOTweenProShortcuts
                 * @param   {UnityEngine.Transform}     target       
                 * @param   {number}                    duration     The duration of the tween
                 * @param   {?UnityEngine.Vector3}      axis         The axis around which the spiral will rotate
                 * @param   {DG.Tweening.SpiralMode}    mode         The type of spiral movement
                 * @param   {number}                    speed        Speed of the rotations
                 * @param   {number}                    frequency    Frequency of the rotation. Lower values lead to wider spirals
                 * @param   {number}                    depth        Indicates how much the tween should move along the spiral's axis
                 * @param   {boolean}                   snapping     If TRUE the tween will smoothly snap all values to integers
                 * @return  {DG.Tweening.Tweener}
                 */
                DOSpiral: function (target, duration, axis, mode, speed, frequency, depth, snapping) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenProShortcuts#DOSpiral", this ); }

                    if (axis === void 0) { axis = null; }
                    if (mode === void 0) { mode = 0; }
                    if (speed === void 0) { speed = 1.0; }
                    if (frequency === void 0) { frequency = 10.0; }
                    if (depth === void 0) { depth = 0.0; }
                    if (snapping === void 0) { snapping = false; }
                    if (UnityEngine.Mathf.Approximately(speed, 0)) {
                        speed = 1;
                    }
                    if (pc.Vec3.equals( axis, null ) || pc.Vec3.equals( axis, pc.Vec3.ZERO.clone() )) {
                        axis = new pc.Vec3( 0, 0, 1 );
                    }

                    var t = DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,UnityEngine.Vector3,DG.Tweening.Plugins.SpiralOptions), DG.Tweening.DOTween.To(UnityEngine.Vector3, UnityEngine.Vector3, DG.Tweening.Plugins.SpiralOptions, DG.Tweening.Plugins.SpiralPlugin.Get(), function () {
                        return target.localPosition;
                    }, function (x) {
                        target.localPosition = x.$clone();
                    }, System.Nullable.getValue(axis), duration), target);

                    t.plugOptions.mode = mode;
                    t.plugOptions.speed = speed;
                    t.plugOptions.frequency = frequency;
                    t.plugOptions.depth = depth;
                    t.plugOptions.snapping = snapping;
                    return t;
                },
                /*DG.Tweening.DOTweenProShortcuts.DOSpiral:static end.*/


            }
        }
    });
    /*DG.Tweening.DOTweenProShortcuts end.*/

    /*GameManager start.*/
    Bridge.define("GameManager", {
        inherits: [UnityEngine.MonoBehaviour],
        statics: {
            fields: {
                instance: null
            },
            methods: {
                /*GameManager.TryParseLevelName:static start.*/
                TryParseLevelName: function (objectName, levelNo, partNo) {
if ( TRACE ) { TRACE( "GameManager#TryParseLevelName", this ); }

                    levelNo.v = 1;
                    partNo.v = 1;

                    if (System.String.isNullOrEmpty(objectName)) {
                        return false;
                    }

                    var n = System.String.replaceAll(objectName, "(Clone)", "").trim();
                    var prefix = "Level";
                    var start = System.String.indexOf(n, prefix);
                    if (start < 0) {
                        return false;
                    }

                    var i = (start + prefix.length) | 0;
                    var levelStart = i;
                    while (i < n.length && System.Char.isDigit(n.charCodeAt(i))) {
                        i = (i + 1) | 0;
                    }

                    if (i === levelStart || i >= n.length || n.charCodeAt(i) !== 95) {
                        return false;
                    }

                    var parsedLevel = { };
                    if (!System.Int32.tryParse(n.substr(levelStart, ((i - levelStart) | 0)), parsedLevel)) {
                        return false;
                    }

                    i = (i + 1) | 0;
                    var partStart = i;
                    while (i < n.length && System.Char.isDigit(n.charCodeAt(i))) {
                        i = (i + 1) | 0;
                    }

                    var parsedPart = { };
                    if (i === partStart || !System.Int32.tryParse(n.substr(partStart, ((i - partStart) | 0)), parsedPart)) {
                        return false;
                    }

                    levelNo.v = parsedLevel.v;
                    partNo.v = parsedPart.v;
                    return true;
                },
                /*GameManager.TryParseLevelName:static end.*/


            }
        },
        fields: {
            DefaultMat: null,
            BG_Music: null,
            restoreEffectShader: null,
            stickerEffectShader: null,
            isComplete: false,
            isPaused: false,
            currentLevel: null,
            startLevelOnPlay: false,
            Temp: null,
            levelEndTime: 0,
            levelStartTime: 0,
            currentLevelNo: 0,
            timerCo: null
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "GameManager#init", this ); }

                this.isComplete = false;
                this.isPaused = false;
                this.startLevelOnPlay = true;
                this.currentLevelNo = 0;
            }
        },
        methods: {
            /*GameManager.Awake start.*/
            Awake: function () {
if ( TRACE ) { TRACE( "GameManager#Awake", this ); }

                GameManager.instance = this;
                this.EnsureSaveSystem();
                this.EnsureLoadingManager();
                this.BindSceneLevel();
            },
            /*GameManager.Awake end.*/

            /*GameManager.Start start.*/
            Start: function () {
if ( TRACE ) { TRACE( "GameManager#Start", this ); }

                var $step = 0,
                    $jumpFromFinally,
                    $returnValue,
                    $async_e;

                var $enumerator = new Bridge.GeneratorEnumerator(Bridge.fn.bind(this, function () {
                    try {
                        for (;;) {
                            switch ($step) {
                                case 0: {
                                    if (this.startLevelOnPlay) {
                                            this.LoadLevel();
                                        }

                                        if (this.BG_Music != null && UnityEngine.MonoBehaviour.op_Inequality(MusicSource.instance, null)) {
                                            MusicSource.instance.PlayMusic(this.BG_Music);
                                        }

                                        $enumerator.current = null;
                                        $step = 1;
                                        return true;
                                }
                                case 1: {

                                }
                                default: {
                                    return false;
                                }
                            }
                        }
                    } catch($async_e1) {
                        $async_e = System.Exception.create($async_e1);
                        throw $async_e;
                    }
                }));
                return $enumerator;
            },
            /*GameManager.Start end.*/

            /*GameManager.EnsureSaveSystem start.*/
            EnsureSaveSystem: function () {
if ( TRACE ) { TRACE( "GameManager#EnsureSaveSystem", this ); }

                if (UnityEngine.MonoBehaviour.op_Inequality(SaveSystem.Instance, null)) {
                    SaveSystem.Instance.EnsureReady();
                    return;
                }

                var existing = UnityEngine.Object.FindObjectOfType(SaveSystem);
                if (UnityEngine.MonoBehaviour.op_Equality(existing, null)) {
                    var go = new UnityEngine.GameObject.$ctor2("SaveSystem");
                    existing = go.AddComponent(SaveSystem);
                }

                existing.EnsureReady();
            },
            /*GameManager.EnsureSaveSystem end.*/

            /*GameManager.EnsureLoadingManager start.*/
            EnsureLoadingManager: function () {
if ( TRACE ) { TRACE( "GameManager#EnsureLoadingManager", this ); }

                if (UnityEngine.MonoBehaviour.op_Inequality(LoadingManager.instance, null)) {
                    return;
                }

                var existing = UnityEngine.Object.FindObjectOfType(LoadingManager);
                if (UnityEngine.MonoBehaviour.op_Inequality(existing, null)) {
                    return;
                }

                var go = new UnityEngine.GameObject.$ctor2("Loading Manager");
                var created = go.AddComponent(LoadingManager);

                var ui = UnityEngine.Object.FindObjectOfType(UI_Manager);
                if (UnityEngine.MonoBehaviour.op_Inequality(ui, null)) {
                    created.Fade_Img = ui.Fade_Img;
                }
            },
            /*GameManager.EnsureLoadingManager end.*/

            /*GameManager.BindSceneLevel start.*/
            BindSceneLevel: function () {
if ( TRACE ) { TRACE( "GameManager#BindSceneLevel", this ); }

                if (UnityEngine.MonoBehaviour.op_Equality(this.currentLevel, null)) {
                    this.currentLevel = UnityEngine.Object.FindObjectOfType(LevelData);
                }

                if (UnityEngine.MonoBehaviour.op_Equality(this.currentLevel, null)) {
                    return;
                }

                this.Temp = this.currentLevel;
                this.ApplySaveForSceneLevel(this.currentLevel);
            },
            /*GameManager.BindSceneLevel end.*/

            /*GameManager.BindLevel start.*/
            /**
             * Binds a level that already sits in the scene (typically inactive) and primes its
             state. Call this BEFORE activating the level object — the level's own Start() reads
             levelToPlay / partToPlay / stepsDone the moment it wakes up.
             *
             * @instance
             * @public
             * @this GameManager
             * @memberof GameManager
             * @param   {LevelData}    level
             * @return  {void}
             */
            BindLevel: function (level) {
if ( TRACE ) { TRACE( "GameManager#BindLevel", this ); }

                if (UnityEngine.MonoBehaviour.op_Equality(level, null)) {
                    return;
                }

                this.currentLevel = level;
                this.Temp = level;

                this.ApplySaveForSceneLevel(level);

                this.currentLevelNo = UnityEngine.MonoBehaviour.op_Inequality(SaveSystem.Instance, null) ? SaveSystem.Instance.DataFields.levelToPlay : 1;
                this.levelStartTime = UnityEngine.Time.time;

                this.RecordLevelStartEvent(this.currentLevelNo);
            },
            /*GameManager.BindLevel end.*/

            /*GameManager.ApplySaveForSceneLevel start.*/
            ApplySaveForSceneLevel: function (level) {
if ( TRACE ) { TRACE( "GameManager#ApplySaveForSceneLevel", this ); }

                if (UnityEngine.MonoBehaviour.op_Equality(SaveSystem.Instance, null) || UnityEngine.MonoBehaviour.op_Equality(level, null)) {
                    return;
                }

                var levelNo = { v : 1 };
                var partNo = { v : 1 };
                GameManager.TryParseLevelName(level.gameObject.name, levelNo, partNo);

                var data = SaveSystem.Instance.DataFields;
                data.levelToPlay = levelNo.v;
                data.partToPlay = partNo.v;

                var levelIndex = (levelNo.v - 1) | 0;
                var partIndex = (partNo.v - 1) | 0;

                if (data.AllLevels == null || levelIndex < 0 || levelIndex >= data.AllLevels.length) {
                    return;
                }

                var subs = data.AllLevels[levelIndex].subLevels;
                if (subs == null || partIndex < 0 || partIndex >= subs.length) {
                    return;
                }

                // Scene playable always starts this dragged level from step 0.
                subs[partIndex].stepsDone = 0;
            },
            /*GameManager.ApplySaveForSceneLevel end.*/

            /*GameManager.LoadLevel start.*/
            LoadLevel: function () {
if ( TRACE ) { TRACE( "GameManager#LoadLevel", this ); }

                if (UnityEngine.MonoBehaviour.op_Equality(this.currentLevel, null)) {
                    this.BindSceneLevel();
                }

                if (UnityEngine.MonoBehaviour.op_Inequality(this.currentLevel, null)) {
                    this.Temp = this.currentLevel;
                    this.currentLevelNo = UnityEngine.MonoBehaviour.op_Inequality(SaveSystem.Instance, null) ? SaveSystem.Instance.DataFields.levelToPlay : 1;
                    this.levelStartTime = UnityEngine.Time.time;
                    this.RecordLevelStartEvent(this.currentLevelNo);
                    UnityEngine.Debug.Log$1("Gameplay using scene level: " + (this.currentLevel.gameObject.name || ""));
                    return;
                }

                if (UnityEngine.MonoBehaviour.op_Equality(SaveSystem.Instance, null)) {
                    UnityEngine.Debug.LogError$2("SaveSystem missing \u2014 drag a Level prefab into Gameplay, or add SaveSystem.");
                    return;
                }

                if (SaveSystem.Instance.DataFields.levelToPlay > SaveSystem.Instance.DataFields.AllLevels.length) {
                    SaveSystem.Instance.DataFields.levelToPlay = 1;
                }

                if (SaveSystem.Instance.DataFields.partToPlay < 1) {
                    SaveSystem.Instance.DataFields.partToPlay = 1;
                }

                this.levelStartTime = UnityEngine.Time.time;
                this.currentLevelNo = SaveSystem.Instance.DataFields.levelToPlay;

                var levelToLoad = this.currentLevelNo;
                var subLevelToLoad = SaveSystem.Instance.DataFields.partToPlay;

                this.Temp = UnityEngine.Resources.Load(LevelData, "Lvl_GP/Level" + levelToLoad + "_" + subLevelToLoad);

                if (UnityEngine.MonoBehaviour.op_Inequality(this.Temp, null)) {
                    this.Temp = UnityEngine.Object.Instantiate(LevelData, this.Temp);
                    this.currentLevel = this.Temp;
                    this.RecordLevelStartEvent(this.currentLevelNo);
                } else {
                    UnityEngine.Debug.LogError$2(System.String.format("Level {0}_{1} load karne mein nakami! Drag the prefab into Gameplay.", Bridge.box(levelToLoad, System.Int32), Bridge.box(subLevelToLoad, System.Int32)));
                }
            },
            /*GameManager.LoadLevel end.*/

            /*GameManager.Complete start.*/
            Complete: function () {
if ( TRACE ) { TRACE( "GameManager#Complete", this ); }

                var $t, $t1;
                if (this.timerCo != null) {
                    this.StopCoroutine$2(this.timerCo);
                }

                var currentLevel = SaveSystem.Instance.DataFields.levelToPlay;
                var subLevel = SaveSystem.Instance.DataFields.partToPlay;

                SaveSystem.Instance.DataFields.comingFromGP = true;
                SaveSystem.Instance.DataFields.levelPartDone = subLevel;

                ($t = ($t1 = SaveSystem.Instance.DataFields.AllLevels)[((currentLevel - 1) | 0)].subLevels)[((subLevel - 1) | 0)].isCompleted = true;

                this.isPaused = true;

                this.isComplete = true;

                this.StopAllDrags();

                this.MuteLevelAudio();

                this.RecordLevelCompleteEvent();

                UI_Manager.instance.ShowCompleteParticles();

                UI_Manager.instance.Complete(2.0);
            },
            /*GameManager.Complete end.*/

            /*GameManager.Next start.*/
            Next: function () {
if ( TRACE ) { TRACE( "GameManager#Next", this ); }

                this.ReloadActiveScene();
            },
            /*GameManager.Next end.*/

            /*GameManager.Home start.*/
            Home: function (number) {
if ( TRACE ) { TRACE( "GameManager#Home", this ); }

                this.ReloadActiveScene();
            },
            /*GameManager.Home end.*/

            /*GameManager.Continue start.*/
            Continue: function () {
if ( TRACE ) { TRACE( "GameManager#Continue", this ); }

                this.ReloadActiveScene();
            },
            /*GameManager.Continue end.*/

            /*GameManager.Restart start.*/
            Restart: function (number) {
if ( TRACE ) { TRACE( "GameManager#Restart", this ); }

                this.ReloadActiveScene();
            },
            /*GameManager.Restart end.*/

            /*GameManager.ReloadActiveScene start.*/
            ReloadActiveScene: function () {
if ( TRACE ) { TRACE( "GameManager#ReloadActiveScene", this ); }

                var Exec = null;

                Exec = Bridge.fn.bind(this, function () {
                    var $step = 0,
                        $jumpFromFinally,
                        $returnValue,
                        wait,
                        $async_e;

                    var $enumerator = new Bridge.GeneratorEnumerator(Bridge.fn.bind(this, function () {
                        try {
                            for (;;) {
                                switch ($step) {
                                    case 0: {
                                        if (UnityEngine.MonoBehaviour.op_Inequality(LoadingManager.instance, null)) {
                                                LoadingManager.instance.ShowLoading();
                                            }
                                            if (UnityEngine.MonoBehaviour.op_Inequality(this.Temp, null)) {
                                                this.Temp.gameObject.SetActive(false);
                                            }
                                            wait = 0.25;
                                            if (UnityEngine.MonoBehaviour.op_Inequality(LoadingManager.instance, null)) {
                                                wait = UnityEngine.Mathf.Max(0.25, LoadingManager.instance.animTime - 1.0);
                                            }
                                            $enumerator.current = new UnityEngine.WaitForSeconds(wait);
                                            $step = 1;
                                            return true;
                                    }
                                    case 1: {
                                        UnityEngine.SceneManagement.SceneManager.LoadScene(UnityEngine.SceneManagement.SceneManager.GetActiveScene().index);

                                    }
                                    default: {
                                        return false;
                                    }
                                }
                            }
                        } catch($async_e1) {
                            $async_e = System.Exception.create($async_e1);
                            throw $async_e;
                        }
                    }));
                    return $enumerator;
                });

                this.StartCoroutine$1(Exec());
            },
            /*GameManager.ReloadActiveScene end.*/

            /*GameManager.checkForDrag start.*/
            checkForDrag: function () {
if ( TRACE ) { TRACE( "GameManager#checkForDrag", this ); }

                try {
                    var allDrags = this.Temp.AllDrags;

                    for (var i = 0; i < allDrags.length; i = (i + 1) | 0) {
                        if (allDrags[i].isDragging && allDrags[i].gameObject.activeSelf && allDrags[i].canDrag) {
                            return true;
                        }
                    }
                } catch ($e1) {
                    $e1 = System.Exception.create($e1);
                }

                return false;
            },
            /*GameManager.checkForDrag end.*/

            /*GameManager.MuteLevelAudio start.*/
            MuteLevelAudio: function () {
if ( TRACE ) { TRACE( "GameManager#MuteLevelAudio", this ); }

                try {
                    var allSources = this.Temp.AllSources;

                    for (var i = 0; i < allSources.length; i = (i + 1) | 0) {
                        allSources[i].mute = true;
                    }
                } catch ($e1) {
                    $e1 = System.Exception.create($e1);
                }
            },
            /*GameManager.MuteLevelAudio end.*/

            /*GameManager.UnMuteLevelAudio start.*/
            UnMuteLevelAudio: function () {
if ( TRACE ) { TRACE( "GameManager#UnMuteLevelAudio", this ); }


                try {
                    var allSources = this.Temp.AllSources;

                    for (var i = 0; i < allSources.length; i = (i + 1) | 0) {
                        allSources[i].mute = false;
                    }
                } catch ($e1) {
                    $e1 = System.Exception.create($e1);
                }
            },
            /*GameManager.UnMuteLevelAudio end.*/

            /*GameManager.StopAllDrags start.*/
            StopAllDrags: function () {
if ( TRACE ) { TRACE( "GameManager#StopAllDrags", this ); }

                try {
                    var allDrags = this.Temp.AllDrags;

                    for (var i = 0; i < allDrags.length; i = (i + 1) | 0) {
                        if (allDrags[i].isDragging) {
                            allDrags[i].StopTheDrag();
                        }
                    }
                } catch ($e1) {
                    $e1 = System.Exception.create($e1);
                }

                try {
                    var allSources = this.Temp.AllSources;

                    for (var i1 = 0; i1 < allSources.length; i1 = (i1 + 1) | 0) {
                        allSources[i1].Stop();
                    }
                } catch ($e2) {
                    $e2 = System.Exception.create($e2);
                }
            },
            /*GameManager.StopAllDrags end.*/

            /*GameManager.isOverUI start.*/
            isOverUI: function () {
if ( TRACE ) { TRACE( "GameManager#isOverUI", this ); }

                // Ignore drag if pointer is over any UI element
                if (UnityEngine.MonoBehaviour.op_Inequality(UnityEngine.EventSystems.EventSystem.current, null) && UnityEngine.EventSystems.EventSystem.current.IsPointerOverGameObject()) {
                    return true;
                }

                if (UnityEngine.MonoBehaviour.op_Inequality(UnityEngine.EventSystems.EventSystem.current, null) && UnityEngine.Input.touchCount > 0) {
                    if (UnityEngine.EventSystems.EventSystem.current.IsPointerOverGameObject$1(UnityEngine.Input.GetTouch(0).fingerId)) {
                        return true;
                    }
                }

                return false;
            },
            /*GameManager.isOverUI end.*/

            /*GameManager.RecordLevelStartEvent start.*/
            RecordLevelStartEvent: function (levelIs) {
if ( TRACE ) { TRACE( "GameManager#RecordLevelStartEvent", this ); }
 },
            /*GameManager.RecordLevelStartEvent end.*/

            /*GameManager.RecordLevelCompleteEvent start.*/
            RecordLevelCompleteEvent: function () {
if ( TRACE ) { TRACE( "GameManager#RecordLevelCompleteEvent", this ); }

                this.levelEndTime = UnityEngine.Time.time;
            },
            /*GameManager.RecordLevelCompleteEvent end.*/


        }
    });
    /*GameManager end.*/

    /*HalloweenCrownRinse start.*/
    /**
     * Water removes the spread shampoo locally; the earlier three steps stay unchanged.
     *
     * @public
     * @class HalloweenCrownRinse
     * @augments UnityEngine.MonoBehaviour
     */
    Bridge.define("HalloweenCrownRinse", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            level: null,
            waterTool: null,
            impactTip: null,
            waterEffects: null,
            foamSurface: null,
            cleanCrown: null,
            priorLayers: null,
            dockPosition: null,
            finishThreshold: 0,
            Begun: false,
            Finished: false,
            RinseProgress: 0,
            ready: false,
            finishing: false,
            nextProgress: 0
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "HalloweenCrownRinse#init", this ); }

                this.dockPosition = new UnityEngine.Vector3();
                this.dockPosition = new pc.Vec3( 1.7, -0.55, -2 );
                this.finishThreshold = 0.94;
            }
        },
        methods: {
            /*HalloweenCrownRinse.Begin start.*/
            Begin: function () {
if ( TRACE ) { TRACE( "HalloweenCrownRinse#Begin", this ); }

                if (this.Begun) {
                    return;
                }
                this.Begun = true;
                this.StartCoroutine$1(this.Enter());
            },
            /*HalloweenCrownRinse.Begin end.*/

            /*HalloweenCrownRinse.Enter start.*/
            Enter: function () {
if ( TRACE ) { TRACE( "HalloweenCrownRinse#Enter", this ); }

                var $step = 0,
                    $jumpFromFinally,
                    $returnValue,
                    $t,
                    effect,
                    $t1,
                    layer,
                    $async_e;

                var $enumerator = new Bridge.GeneratorEnumerator(Bridge.fn.bind(this, function () {
                    try {
                        for (;;) {
                            switch ($step) {
                                case 0: {
                                    UI_Manager.instance.SetProgressBarPos();
                                        CameraController.Instance.MoveCamera(this.level.MainZoom.CameraPos, this.level.MainZoom.CameraFOV);
                                        this.cleanCrown.gameObject.SetActive(true);
                                        this.cleanCrown.color = new pc.Color( 1, 1, 1, 1 );
                                        this.foamSurface.gameObject.SetActive(true);
                                        this.waterTool.gameObject.SetActive(true);
                                        this.waterTool.canDrag = false;
                                        this.waterTool.thisCollider = this.waterTool.GetComponent(UnityEngine.Collider2D);
                                        this.waterTool.thisCollider.enabled = false;
                                        $t = Bridge.getEnumerator(this.waterEffects);
                                        try {
                                            while ($t.moveNext()) {
                                                effect = $t.Current;
                                                if (UnityEngine.Component.op_Inequality(effect, null)) {
                                                    effect.Stop$2(true, UnityEngine.ParticleSystemStopBehavior.StopEmittingAndClear);
                                                }
                                            }
                                        } finally {
                                            if (Bridge.is($t, System.IDisposable)) {
                                                $t.System$IDisposable$Dispose();
                                            }
                                        }
                                        $enumerator.current = null;
                                        $step = 1;
                                        return true;
                                }
                                case 1: {
                                    $enumerator.current = null;
                                        $step = 2;
                                        return true;
                                }
                                case 2: {
                                    this.foamSurface.Card.ClearInstantly();
                                        this.foamSurface.Progress.ResetProgress();
                                        this.foamSurface.Card.InputEnabled = false;
                                        this.foamSurface.Card.IsScratching = false;
                                        $t1 = Bridge.getEnumerator(this.priorLayers);
                                        try {
                                            while ($t1.moveNext()) {
                                                layer = $t1.Current;
                                                if (UnityEngine.GameObject.op_Inequality(layer, null)) {
                                                    layer.SetActive(false);
                                                }
                                            }
                                        } finally {
                                            if (Bridge.is($t1, System.IDisposable)) {
                                                $t1.System$IDisposable$Dispose();
                                            }
                                        }
                                        DG.Tweening.ShortcutExtensions.DOKill(this.waterTool.transform);
                                        DG.Tweening.TweenSettingsExtensions.OnComplete(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,UnityEngine.Vector3,DG.Tweening.Plugins.Options.VectorOptions), DG.Tweening.ShortcutExtensions.DOMove(this.waterTool.transform, this.dockPosition.$clone(), 0.55), Bridge.fn.bind(this, function () {
                                            this.waterTool.startPos = this.dockPosition.$clone();
                                            this.waterTool.startScale = this.waterTool.transform.localScale.$clone();
                                            this.waterTool.canDrag = true;
                                            this.waterTool.thisCollider.enabled = true;
                                            this.ready = true;
                                        }));

                                }
                                default: {
                                    return false;
                                }
                            }
                        }
                    } catch($async_e1) {
                        $async_e = System.Exception.create($async_e1);
                        throw $async_e;
                    }
                }));
                return $enumerator;
            },
            /*HalloweenCrownRinse.Enter end.*/

            /*HalloweenCrownRinse.LateUpdate start.*/
            LateUpdate: function () {
if ( TRACE ) { TRACE( "HalloweenCrownRinse#LateUpdate", this ); }

                var $t;
                if (!this.ready || this.Finished || this.finishing) {
                    return;
                }
                var spraying = this.waterTool.isDragging;
                $t = Bridge.getEnumerator(this.waterEffects);
                try {
                    while ($t.moveNext()) {
                        var effect = $t.Current;
                        if (UnityEngine.Component.op_Equality(effect, null)) {
                            continue;
                        }
                        if (spraying && !effect.isPlaying) {
                            effect.Play();
                        } else {
                            if (!spraying && effect.isPlaying) {
                                effect.Stop$2(true, UnityEngine.ParticleSystemStopBehavior.StopEmitting);
                            }
                        }
                    }
                } finally {
                    if (Bridge.is($t, System.IDisposable)) {
                        $t.System$IDisposable$Dispose();
                    }
                }
                if (spraying) {
                    this.SprayAt(this.impactTip.position);
                }
                if (UnityEngine.Time.time < this.nextProgress) {
                    return;
                }
                this.nextProgress = UnityEngine.Time.time + 0.12;
                this.RinseProgress = Math.max(0, Math.min(1, this.foamSurface.Progress.GiveProgress()));
                UI_Manager.instance.SetProgressBar(this.RinseProgress);
                if (this.RinseProgress >= this.finishThreshold) {
                    this.StartCoroutine$1(this.Finish());
                }
            },
            /*HalloweenCrownRinse.LateUpdate end.*/

            /*HalloweenCrownRinse.SprayAt start.*/
            SprayAt: function (worldPoint) {
if ( TRACE ) { TRACE( "HalloweenCrownRinse#SprayAt", this ); }

                if (!this.ready || this.finishing || this.Finished || !this.waterTool.isDragging || this.foamSurface.Card.cardInput == null) {
                    return;
                }
                var bounds = this.cleanCrown.bounds;
                if (worldPoint.x < bounds.min.x || worldPoint.x > bounds.max.x || worldPoint.y < bounds.min.y || worldPoint.y > bounds.max.y) {
                    return;
                }
                this.foamSurface.Card.cardInput.ScratchAtPoint(UnityEngine.Vector2.FromVector3(worldPoint));
            },
            /*HalloweenCrownRinse.SprayAt end.*/

            /*HalloweenCrownRinse.Finish start.*/
            Finish: function () {
if ( TRACE ) { TRACE( "HalloweenCrownRinse#Finish", this ); }

                var $step = 0,
                    $jumpFromFinally,
                    $returnValue,
                    $t,
                    effect,
                    $async_e;

                var $enumerator = new Bridge.GeneratorEnumerator(Bridge.fn.bind(this, function () {
                    try {
                        for (;;) {
                            switch ($step) {
                                case 0: {
                                    this.finishing = true;
                                        this.ready = false;
                                        this.waterTool.isDragging = false;
                                        this.waterTool.canDrag = false;
                                        this.waterTool.thisCollider.enabled = false;
                                        $t = Bridge.getEnumerator(this.waterEffects);
                                        try {
                                            while ($t.moveNext()) {
                                                effect = $t.Current;
                                                if (UnityEngine.Component.op_Inequality(effect, null)) {
                                                    effect.Stop$2(true, UnityEngine.ParticleSystemStopBehavior.StopEmitting);
                                                }
                                            }
                                        } finally {
                                            if (Bridge.is($t, System.IDisposable)) {
                                                $t.System$IDisposable$Dispose();
                                            }
                                        }
                                        DG.Tweening.DOTweenModuleSprite.DOFade(this.foamSurface.SpriteCard.GetComponent(UnityEngine.SpriteRenderer), 0, 0.4);
                                        DG.Tweening.TweenSettingsExtensions.OnComplete(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,UnityEngine.Vector3,DG.Tweening.Plugins.Options.VectorOptions), DG.Tweening.ShortcutExtensions.DOMoveX(this.waterTool.transform, 8, 0.55), Bridge.fn.bind(this, function () {
                                            this.waterTool.gameObject.SetActive(false);
                                        }));
                                        UI_Manager.instance.SetProgressBar(1);
                                        $enumerator.current = new UnityEngine.WaitForSeconds(0.6);
                                        $step = 1;
                                        return true;
                                }
                                case 1: {
                                    this.foamSurface.gameObject.SetActive(false);
                                        CameraController.Instance.MoveCamera(this.level.MainZoom.CameraPos, this.level.MainZoom.CameraFOV);
                                        $enumerator.current = new UnityEngine.WaitForSeconds(0.7);
                                        $step = 2;
                                        return true;
                                }
                                case 2: {
                                    this.Finished = true;
                                        GameManager.instance.Complete();

                                }
                                default: {
                                    return false;
                                }
                            }
                        }
                    } catch($async_e1) {
                        $async_e = System.Exception.create($async_e1);
                        throw $async_e;
                    }
                }));
                return $enumerator;
            },
            /*HalloweenCrownRinse.Finish end.*/


        }
    });
    /*HalloweenCrownRinse end.*/

    /*HalloweenToolRigFit start.*/
    /**
     * Fits only a tool's new skinning root; gameplay transforms and colliders stay authored.
     *
     * @public
     * @class HalloweenToolRigFit
     * @augments UnityEngine.MonoBehaviour
     */
    Bridge.define("HalloweenToolRigFit", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            skinRoot: null,
            authoredSize: null,
            authoredCenter: null,
            surface: null,
            fittedSprite: null
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "HalloweenToolRigFit#init", this ); }

                this.authoredSize = new UnityEngine.Vector2();
                this.authoredCenter = new UnityEngine.Vector2();
            }
        },
        methods: {
            /*HalloweenToolRigFit.OnEnable start.*/
            OnEnable: function () {
if ( TRACE ) { TRACE( "HalloweenToolRigFit#OnEnable", this ); }

                this.ApplyFit();
            },
            /*HalloweenToolRigFit.OnEnable end.*/

            /*HalloweenToolRigFit.LateUpdate start.*/
            LateUpdate: function () {
if ( TRACE ) { TRACE( "HalloweenToolRigFit#LateUpdate", this ); }

                if (UnityEngine.Component.op_Equality(this.surface, null)) {
                    this.surface = this.GetComponent(UnityEngine.SpriteRenderer);
                }
                if (UnityEngine.Component.op_Inequality(this.surface, null) && !Bridge.referenceEquals(this.surface.sprite, this.fittedSprite)) {
                    this.ApplyFit();
                }
            },
            /*HalloweenToolRigFit.LateUpdate end.*/

            /*HalloweenToolRigFit.ApplyFit start.*/
            ApplyFit: function () {
if ( TRACE ) { TRACE( "HalloweenToolRigFit#ApplyFit", this ); }

                var $t;
                if (UnityEngine.Component.op_Equality(this.surface, null)) {
                    this.surface = this.GetComponent(UnityEngine.SpriteRenderer);
                }
                if (UnityEngine.Component.op_Equality(this.skinRoot, null) || UnityEngine.Component.op_Equality(this.surface, null) || this.surface.sprite == null) {
                    return;
                }
                // Sprite.bounds includes transparent canvas even when the imported mesh is tight.
                var vertices = this.surface.sprite.vertices;
                if (vertices.length === 0) {
                    return;
                }
                var bounds = new pc.BoundingBox( UnityEngine.Vector3.FromVector2(vertices[0].$clone()), pc.Vec3.ZERO.clone().scale( 0.5 ) );
                $t = Bridge.getEnumerator(vertices);
                try {
                    while ($t.moveNext()) {
                        var vertex = $t.Current.$clone();
                        bounds.expandToPoint( UnityEngine.Vector3.FromVector2(vertex.$clone()) );
                    }
                } finally {
                    if (Bridge.is($t, System.IDisposable)) {
                        $t.System$IDisposable$Dispose();
                    }
                }
                if (bounds.halfExtents.$clone().scale( 2 ).x <= 0 || bounds.halfExtents.$clone().scale( 2 ).y <= 0) {
                    return;
                }
                // Parent tools carry nonuniform legacy scaling. Cancel it so the artwork
                // retains its proportions in world space instead of becoming a thin strip.
                var worldScale = this.transform.lossyScale.$clone();
                var height = UnityEngine.Mathf.Min(3.0, this.authoredSize.y * Math.abs(worldScale.y));
                var uniform = height / bounds.halfExtents.$clone().scale( 2 ).y;
                var scale = new pc.Vec3( uniform / UnityEngine.Mathf.Max(0.0001, Math.abs(worldScale.x)), uniform / UnityEngine.Mathf.Max(0.0001, Math.abs(worldScale.y)), 1 );
                this.skinRoot.localScale = scale.$clone();
                this.skinRoot.localPosition = new pc.Vec3( this.authoredCenter.x - bounds.center.x * scale.x, this.authoredCenter.y - bounds.center.y * scale.y, 0 );
                this.fittedSprite = this.surface.sprite;
            },
            /*HalloweenToolRigFit.ApplyFit end.*/


        }
    });
    /*HalloweenToolRigFit end.*/

    /*IAmAnEmptyScriptJustToMakeCodelessProjectsCompileProperty start.*/
    Bridge.define("IAmAnEmptyScriptJustToMakeCodelessProjectsCompileProperty", {
        inherits: [UnityEngine.MonoBehaviour]
    });
    /*IAmAnEmptyScriptJustToMakeCodelessProjectsCompileProperty end.*/

    /*LevelData start.*/
    Bridge.define("LevelData", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            levelName: null,
            levelReward: 0,
            LevelIcon: null,
            Level_BG: null,
            ToolIcons: null,
            AllDrags: null,
            AllSources: null,
            AllScratches: null,
            stepsDone: 0,
            levelNo: 0,
            partNo: 0,
            disableOnLevelComplete: null,
            wait1sec: null
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "LevelData#init", this ); }

                this.levelName = "";
                this.levelReward = 5;
                this.stepsDone = 0;
                this.wait1sec = new UnityEngine.WaitForSeconds(1.0);
            }
        },
        methods: {
            /*LevelData.TryStartStep start.*/
            TryStartStep: function (stepStartAction, stepNumber) {
if ( TRACE ) { TRACE( "LevelData#TryStartStep", this ); }

                return true;
            },
            /*LevelData.TryStartStep end.*/

            /*LevelData.Setup start.*/
            Setup: function () {
if ( TRACE ) { TRACE( "LevelData#Setup", this ); }

                var $step = 0,
                    $jumpFromFinally,
                    $returnValue,
                    spriteRenderer,
                    tempCo,
                    $t,
                    $async_e;

                var $enumerator = new Bridge.GeneratorEnumerator(Bridge.fn.bind(this, function () {
                    try {
                        for (;;) {
                            switch ($step) {
                                case 0: {
                                    for (var i = 0; i < this.AllScratches.length; i = (i + 1) | 0) {
                                            if (this.AllScratches[i].Card.Mode === ScratchCardAsset.ScratchCard.ScratchMode.Restore) {
                                                spriteRenderer = this.AllScratches[i].SpriteCard.GetComponent(UnityEngine.SpriteRenderer);
                                                tempCo = spriteRenderer.color.$clone();
                                                tempCo.a = 0;
                                                spriteRenderer.color = tempCo.$clone();
                                            }
                                        }

                                        $enumerator.current = new UnityEngine.WaitForSeconds(0.05);
                                        $step = 1;
                                        return true;
                                }
                                case 1: {
                                    if (this.Level_BG != null) {
                                            MusicSource.instance.PlayMusic(this.Level_BG);
                                        }

                                        for (var i1 = 0; i1 < this.AllScratches.length; i1 = (i1 + 1) | 0) {
                                            if (this.AllScratches[i1].Card.Mode === ScratchCardAsset.ScratchCard.ScratchMode.Restore) {
                                                this.AllScratches[i1].Card.FillInstantly();
                                                this.AllScratches[i1].Card.Mode = ScratchCardAsset.ScratchCard.ScratchMode.Restore;
                                                this.AllScratches[i1].InputEnabled = false;
                                                this.AllScratches[i1].Card.InputEnabled = false;
                                            } else {
                                                this.AllScratches[i1].Card.ClearInstantly();
                                                this.AllScratches[i1].Card.Mode = ScratchCardAsset.ScratchCard.ScratchMode.Erase;
                                                this.AllScratches[i1].InputEnabled = false;
                                                this.AllScratches[i1].Card.InputEnabled = false;
                                            }
                                        }

                                        $enumerator.current = this.wait1sec;
                                        $step = 2;
                                        return true;
                                }
                                case 2: {
                                    for (var i2 = 0; i2 < this.AllScratches.length; i2 = (i2 + 1) | 0) {
                                            if (this.AllScratches[i2].Card.Mode === ScratchCardAsset.ScratchCard.ScratchMode.Restore) {
                                                DG.Tweening.ShortcutExtensions.DOKill(this.AllScratches[i2].SpriteCard.GetComponent(UnityEngine.SpriteRenderer));
                                                DG.Tweening.DOTweenModuleSprite.DOFade(this.AllScratches[i2].SpriteCard.GetComponent(UnityEngine.SpriteRenderer), 1, 0.001);
                                            }
                                        }

                                        for (var i3 = 0; i3 < this.AllSources.length; i3 = (i3 + 1) | 0) {
                                            this.AllSources[i3].outputAudioMixerGroup = ($t = AudioController.instance.MainMixer.FindMatchingGroups("Sfx"))[0];
                                        }

                                }
                                default: {
                                    return false;
                                }
                            }
                        }
                    } catch($async_e1) {
                        $async_e = System.Exception.create($async_e1);
                        throw $async_e;
                    }
                }));
                return $enumerator;
            },
            /*LevelData.Setup end.*/

            /*LevelData.LevelStart start.*/
            LevelStart: function () {
if ( TRACE ) { TRACE( "LevelData#LevelStart", this ); }

                // CALL EVENT
                this.StartCoroutine$1(this.Setup());
            },
            /*LevelData.LevelStart end.*/

            /*LevelData.LevelComplete start.*/
            LevelComplete: function () {
if ( TRACE ) { TRACE( "LevelData#LevelComplete", this ); }

                // CALL EVENT

                GameManager.instance.Complete();

                // After the panel is up, so nothing here can be an ancestor that hides it.
                if (this.disableOnLevelComplete != null) {
                    for (var i = 0; i < this.disableOnLevelComplete.length; i = (i + 1) | 0) {
                        if (UnityEngine.GameObject.op_Inequality(this.disableOnLevelComplete[i], null)) {
                            this.disableOnLevelComplete[i].SetActive(false);
                        }
                    }
                }
            },
            /*LevelData.LevelComplete end.*/

            /*LevelData.ToolInputToggle start.*/
            ToolInputToggle: function (tool, toggle) {
if ( TRACE ) { TRACE( "LevelData#ToolInputToggle", this ); }

                if (UnityEngine.GameObject.op_Inequality(tool, null)) {
                    var drag = tool.GetComponent(BasicDrag);
                    if (UnityEngine.MonoBehaviour.op_Inequality(drag, null)) {
                        drag.canDrag = toggle;
                        drag.thisCollider.enabled = toggle;
                        drag.enabled = toggle;

                        if (!toggle) {
                            drag.isDragging = false;

                            // VibrationManager.instance.StopVibration();

                            if (UnityEngine.Component.op_Inequality(drag.ToolLoopClip, null)) {
                                drag.ToolLoopClip.Pause();
                            }
                        }
                    }
                }
            },
            /*LevelData.ToolInputToggle end.*/

            /*LevelData.SetProgressBar start.*/
            SetProgressBar: function () {
if ( TRACE ) { TRACE( "LevelData#SetProgressBar", this ); }

                UI_Manager.instance.SetProgressBar(1.0);
                this.Invoke("SetProgressDelay", 1);

            },
            /*LevelData.SetProgressBar end.*/

            /*LevelData.SetProgressDelay start.*/
            SetProgressDelay: function () {
if ( TRACE ) { TRACE( "LevelData#SetProgressDelay", this ); }

                UI_Manager.instance.SetProgressBarPos();
            },
            /*LevelData.SetProgressDelay end.*/

            /*LevelData.SetAudioAndDrag start.*/
            SetAudioAndDrag: function () {
if ( TRACE ) { TRACE( "LevelData#SetAudioAndDrag", this ); }

                // Clear old values
                this.AllSources = System.Array.init(0, null, UnityEngine.AudioSource);
                this.AllDrags = System.Array.init(0, null, BasicDrag);

                // Get all in children (including inactive)
                var sources = this.GetComponentsInChildren$1(UnityEngine.AudioSource, true);
                var drags = this.GetComponentsInChildren$1(BasicDrag, true);

                // Assign
                this.AllSources = sources;
                this.AllDrags = drags;


                UnityEngine.Debug.Log$1(System.String.format("SetAudioAndDrag Done \u2192 Sources: {0}, Drags: {1}", Bridge.box(this.AllSources.length, System.Int32), Bridge.box(this.AllDrags.length, System.Int32)));
            },
            /*LevelData.SetAudioAndDrag end.*/


        }
    });
    /*LevelData end.*/

    /*LevelSaveData start.*/
    Bridge.define("LevelSaveData", {
        fields: {
            subLevels: null,
            Completed: false
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "LevelSaveData#init", this ); }

                this.Completed = false;
            }
        }
    });
    /*LevelSaveData end.*/

    /*LoadingManager start.*/
    Bridge.define("LoadingManager", {
        inherits: [UnityEngine.MonoBehaviour],
        statics: {
            fields: {
                instance: null
            }
        },
        fields: {
            animTime: 0,
            Canvas_Loading: null,
            progressSlider: null,
            progressTxt: null,
            Fade_Img: null
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "LoadingManager#init", this ); }

                this.animTime = 5.0;
            }
        },
        methods: {
            /*LoadingManager.Awake start.*/
            Awake: function () {
if ( TRACE ) { TRACE( "LoadingManager#Awake", this ); }

                if (UnityEngine.MonoBehaviour.op_Equality(LoadingManager.instance, null)) {
                    LoadingManager.instance = this;

                    UnityEngine.Object.DontDestroyOnLoad(this.gameObject);
                } else {
                    UnityEngine.MonoBehaviour.Destroy(this.gameObject);
                }

                if (UnityEngine.GameObject.op_Inequality(this.Canvas_Loading, null)) {
                    this.Canvas_Loading.SetActive(false);
                }
            },
            /*LoadingManager.Awake end.*/

            /*LoadingManager.ShowLoading start.*/
            ShowLoading: function () {
if ( TRACE ) { TRACE( "LoadingManager#ShowLoading", this ); }

                if (UnityEngine.GameObject.op_Equality(this.Canvas_Loading, null)) {
                    return;
                }

                this.Canvas_Loading.SetActive(true);

                if (UnityEngine.MonoBehaviour.op_Inequality(this.progressSlider, null)) {
                    this.progressSlider.value = 0;
                }

                this.StartCoroutine$1(this.ExecuteLoading());

                this.StartCoroutine$1(this.UpdateProgressText());
            },
            /*LoadingManager.ShowLoading end.*/

            /*LoadingManager.ExecuteLoading start.*/
            ExecuteLoading: function () {
if ( TRACE ) { TRACE( "LoadingManager#ExecuteLoading", this ); }

                var $step = 0,
                    $jumpFromFinally,
                    $returnValue,
                    $async_e;

                var $enumerator = new Bridge.GeneratorEnumerator(Bridge.fn.bind(this, function () {
                    try {
                        for (;;) {
                            switch ($step) {
                                case 0: {
                                    if (UnityEngine.MonoBehaviour.op_Inequality(this.progressSlider, null)) {
                                            DG.Tweening.TweenSettingsExtensions.SetEase$2(DG.Tweening.Core.TweenerCore$3(System.Single,System.Single,DG.Tweening.Plugins.Options.FloatOptions), DG.Tweening.DOTweenModuleUI.DOValue(this.progressSlider, 1, this.animTime), DG.Tweening.Ease.Linear);
                                        }

                                        $enumerator.current = new UnityEngine.WaitForSeconds(this.animTime);
                                        $step = 1;
                                        return true;
                                }
                                case 1: {
                                    this.Canvas_Loading.SetActive(false);

                                }
                                default: {
                                    return false;
                                }
                            }
                        }
                    } catch($async_e1) {
                        $async_e = System.Exception.create($async_e1);
                        throw $async_e;
                    }
                }));
                return $enumerator;
            },
            /*LoadingManager.ExecuteLoading end.*/

            /*LoadingManager.UpdateProgressText start.*/
            UpdateProgressText: function () {
if ( TRACE ) { TRACE( "LoadingManager#UpdateProgressText", this ); }

                var $step = 0,
                    $jumpFromFinally,
                    $returnValue,
                    wait,
                    percentage,
                    $async_e;

                var $enumerator = new Bridge.GeneratorEnumerator(Bridge.fn.bind(this, function () {
                    try {
                        for (;;) {
                            switch ($step) {
                                case 0: {
                                    wait = new UnityEngine.WaitForSeconds(0.1); // Reduced update frequency
                                    $step = 1;
                                    continue;
                                }
                                case 1: {
                                    if ( UnityEngine.GameObject.op_Inequality(this.Canvas_Loading, null) && this.Canvas_Loading.activeSelf ) {
                                            $step = 2;
                                            continue;
                                        } 
                                        $step = 4;
                                        continue;
                                }
                                case 2: {
                                    if (UnityEngine.MonoBehaviour.op_Inequality(this.progressSlider, null) && UnityEngine.MonoBehaviour.op_Inequality(this.progressTxt, null)) {
                                            percentage = Math.round(this.progressSlider.value * 100);
                                            this.progressTxt.text = System.String.format("{0}%", [Bridge.box(percentage, System.Int32)]);
                                        }
                                        $enumerator.current = wait;
                                        $step = 3;
                                        return true;
                                }
                                case 3: {
                                    
                                        $step = 1;
                                        continue;
                                }
                                case 4: {

                                }
                                default: {
                                    return false;
                                }
                            }
                        }
                    } catch($async_e1) {
                        $async_e = System.Exception.create($async_e1);
                        throw $async_e;
                    }
                }));
                return $enumerator;
            },
            /*LoadingManager.UpdateProgressText end.*/

            /*LoadingManager.ShowFadeAnim start.*/
            ShowFadeAnim: function (duration, innerDuration) {
if ( TRACE ) { TRACE( "LoadingManager#ShowFadeAnim", this ); }

                if (UnityEngine.MonoBehaviour.op_Equality(this.Fade_Img, null)) {
                    return;
                }

                this.Fade_Img.gameObject.SetActive(true);
                DG.Tweening.ShortcutExtensions.DOKill(this.Fade_Img);
                DG.Tweening.DOTweenModuleUI.DOFade$2(this.Fade_Img, 0, 0.001);
                DG.Tweening.TweenSettingsExtensions.OnComplete(DG.Tweening.Core.TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions), DG.Tweening.DOTweenModuleUI.DOFade$2(this.Fade_Img, 1, duration), Bridge.fn.bind(this, function () {
                    DG.Tweening.TweenSettingsExtensions.OnComplete(DG.Tweening.Core.TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions), DG.Tweening.TweenSettingsExtensions.SetDelay(DG.Tweening.Core.TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions), DG.Tweening.DOTweenModuleUI.DOFade$2(this.Fade_Img, 0.0, duration), innerDuration), Bridge.fn.bind(this, function () {
                        this.Fade_Img.gameObject.SetActive(false);
                    }));
                }));
            },
            /*LoadingManager.ShowFadeAnim end.*/


        }
    });
    /*LoadingManager end.*/

    /*MusicSource start.*/
    Bridge.define("MusicSource", {
        inherits: [UnityEngine.MonoBehaviour],
        statics: {
            fields: {
                instance: null
            }
        },
        fields: {
            source: null
        },
        methods: {
            /*MusicSource.Start start.*/
            Start: function () {
if ( TRACE ) { TRACE( "MusicSource#Start", this ); }

                if (UnityEngine.MonoBehaviour.op_Equality(MusicSource.instance, null)) {
                    MusicSource.instance = this;

                    UnityEngine.Object.DontDestroyOnLoad(this.gameObject);
                } else {
                    UnityEngine.MonoBehaviour.Destroy(this.gameObject);
                }
            },
            /*MusicSource.Start end.*/

            /*MusicSource.PlayMusic start.*/
            PlayMusic: function (musicClip, volume) {
if ( TRACE ) { TRACE( "MusicSource#PlayMusic", this ); }

                if (volume === void 0) { volume = 0.5; }
                this.source.clip = musicClip;
                this.source.volume = volume;
                this.source.Play();
            },
            /*MusicSource.PlayMusic end.*/

            /*MusicSource.PlayMusicSmooth start.*/
            PlayMusicSmooth: function (musicClip, volume) {
if ( TRACE ) { TRACE( "MusicSource#PlayMusicSmooth", this ); }

                if (volume === void 0) { volume = 0.5; }
                DG.Tweening.TweenSettingsExtensions.OnComplete(DG.Tweening.Core.TweenerCore$3(System.Single,System.Single,DG.Tweening.Plugins.Options.FloatOptions), DG.Tweening.DOTweenModuleAudio.DOFade(this.source, 0, 1.0), Bridge.fn.bind(this, function () {
                    this.source.clip = musicClip;
                    this.source.volume = volume;
                    this.source.Play();
                    DG.Tweening.DOTweenModuleAudio.DOFade(this.source, volume, 1.0);
                }));

            },
            /*MusicSource.PlayMusicSmooth end.*/


        }
    });
    /*MusicSource end.*/

    /*PlayableCTA start.*/
    /**
     * Standalone CTA controller for a generated playable.
     Deliberately has near-zero dependencies on gameplay code — no LevelData, no tool/
     controller scripts. It only knows how to open the store. That means it can be dropped
     on any GameObject, in any scene, in any playable, and it will work. (GameManager is
     touched only to block input on fire, with no per-level gameplay dependency.)
     Three ways to fire it, use whichever suits the creative:
       1. Inspector triggers below (after N seconds / after N taps / immediately).
       2. FireCTA() — public and no-arg, so it appears in the dropdown of ANY UnityEvent
          (a step's OnComplete, a Button onClick, a trigger, an animation event). This is
          how you fire mid-step: wire it wherever that moment happens.
       3. PlayableCTA.FireNow() — static, callable from any script with no reference.
     *
     * @public
     * @class PlayableCTA
     * @augments UnityEngine.MonoBehaviour
     */
    Bridge.define("PlayableCTA", {
        inherits: [UnityEngine.MonoBehaviour],
        statics: {
            fields: {
                active: null
            },
            methods: {
                /*PlayableCTA.HasScratchStarted:static start.*/
                /**
                 * Trigger = AfterProgress reads BD_Progress.giveProgressForScratch/giveCollectiveProgress,
                 which for a Restore-mode card computes Math.Abs(1 - GiveProgress()) — and an untouched
                 card's progress texture reads back as its "complete" value (0 for Restore, per
                 EraseProgress.CalcProgress) before a single stroke has been drawn, since nothing has ever
                 rendered to it yet. That makes a fresh scene load read as 100% progress and fire the CTA
                 before the player can touch anything. ScratchCard.IsScratched only flips true once real
                 scratching begins, so gate on it — collective progress needs every counted card started,
                 a single index just needs that one.
                 *
                 * @static
                 * @private
                 * @this PlayableCTA
                 * @memberof PlayableCTA
                 * @param   {BD_Progress}    progress    
                 * @param   {number}         index
                 * @return  {boolean}
                 */
                HasScratchStarted: function (progress, index) {
if ( TRACE ) { TRACE( "PlayableCTA#HasScratchStarted", this ); }

                    if (progress.AllScratches == null || progress.AllScratches.length === 0) {
                        return false;
                    }

                    if (index >= 0) {
                        if (index >= progress.AllScratches.length) {
                            return false;
                        }
                        return PlayableCTA.IsCardScratched(progress.AllScratches[index]);
                    }

                    for (var i = 0; i < progress.AllScratches.length; i = (i + 1) | 0) {
                        if (!PlayableCTA.IsCardScratched(progress.AllScratches[i])) {
                            return false;
                        }
                    }

                    return true;
                },
                /*PlayableCTA.HasScratchStarted:static end.*/

                /*PlayableCTA.IsCardScratched:static start.*/
                IsCardScratched: function (sd) {
if ( TRACE ) { TRACE( "PlayableCTA#IsCardScratched", this ); }

                    return sd != null && UnityEngine.MonoBehaviour.op_Inequality(sd.ScratchManager, null) && UnityEngine.MonoBehaviour.op_Inequality(sd.ScratchManager.Card, null) && sd.ScratchManager.Card.IsScratched;
                },
                /*PlayableCTA.IsCardScratched:static end.*/

                /*PlayableCTA.FireNow:static start.*/
                /**
                 * Fires the CTA from anywhere, without needing a reference to this component.
                 *
                 * @static
                 * @public
                 * @this PlayableCTA
                 * @memberof PlayableCTA
                 * @return  {void}
                 */
                FireNow: function () {
if ( TRACE ) { TRACE( "PlayableCTA#FireNow", this ); }

                    if (UnityEngine.MonoBehaviour.op_Inequality(PlayableCTA.active, null)) {
                        PlayableCTA.active.FireCTA();
                    } else {
                        PlayableCTA.OpenStoreStatic(true);
                    }
                },
                /*PlayableCTA.FireNow:static end.*/

                /*PlayableCTA.OpenStoreOnly:static start.*/
                /**
                 * Opens the store and nothing else — no end card, no input block, no HasFired change, no
                 re-fire cooldown. For CTA taps that are NOT the end of the playable: a tease tool that
                 should redirect to store on every tap while gameplay continues normally afterwards. Use
                 FireCTA()/FireNow() when the playable is actually finishing.
                 *
                 * @static
                 * @public
                 * @this PlayableCTA
                 * @memberof PlayableCTA
                 * @return  {void}
                 */
                OpenStoreOnly: function () {
if ( TRACE ) { TRACE( "PlayableCTA#OpenStoreOnly", this ); }

                    PlayableCTA.OpenStoreStatic(true);
                },
                /*PlayableCTA.OpenStoreOnly:static end.*/

                /*PlayableCTA.OpenStoreStatic:static start.*/
                OpenStoreStatic: function (log) {
if ( TRACE ) { TRACE( "PlayableCTA#OpenStoreStatic", this ); }

                    if (log) {
                        UnityEngine.Debug.Log$1("[PlayableCTA] CTA fired \u2014 opening store.");
                    }

                    try {
                        Luna.Unity.Playable.InstallFullGame();
                        Luna.Unity.LifeCycle.GameEnded();
                    } catch (e) {
                        e = System.Exception.create(e);
                        UnityEngine.Debug.Log$1("[PlayableCTA] Install CTA (editor/no-Luna is ok): " + (e.Message || ""));
                    }
                },
                /*PlayableCTA.OpenStoreStatic:static end.*/


            }
        },
        fields: {
            trigger: 0,
            afterSeconds: 0,
            afterTaps: 0,
            scratchProgress: null,
            scratchIndex: 0,
            progressThreshold: 0,
            blockInputOnFire: false,
            refireOnEveryTap: false,
            refireDelay: 0,
            showEndCard: false,
            endCard: null,
            thingsToDisableOnEndCard: null,
            endCardDelay: 0,
            showEndCardOnProgressTrigger: false,
            onCtaFired: null,
            logWhenFired: false,
            /**
             * True once the CTA has fired at least once.
             *
             * @instance
             * @public
             * @memberof PlayableCTA
             * @function HasFired
             * @type boolean
             */
            HasFired: false,
            enabledAt: 0,
            tapCount: 0,
            lastFireTime: 0
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "PlayableCTA#init", this ); }

                this.trigger = PlayableCTA.Trigger.Manual;
                this.afterSeconds = 15.0;
                this.afterTaps = 3;
                this.scratchIndex = -1;
                this.progressThreshold = 1.0;
                this.blockInputOnFire = true;
                this.refireOnEveryTap = true;
                this.refireDelay = 0.015;
                this.endCardDelay = 0.0;
                this.logWhenFired = true;
                this.lastFireTime = -999.0;
            }
        },
        methods: {
            /*PlayableCTA.OnEnable start.*/
            OnEnable: function () {
if ( TRACE ) { TRACE( "PlayableCTA#OnEnable", this ); }

                // Serialized legacy tool-tease value 5 now behaves as Manual.
                if (this.trigger === 5) {
                    this.trigger = PlayableCTA.Trigger.Manual;
                }
                PlayableCTA.active = this;
                this.enabledAt = UnityEngine.Time.unscaledTime;

                if (this.trigger === PlayableCTA.Trigger.Immediately) {
                    this.FireFromTrigger();
                }
            },
            /*PlayableCTA.OnEnable end.*/

            /*PlayableCTA.OnDisable start.*/
            OnDisable: function () {
if ( TRACE ) { TRACE( "PlayableCTA#OnDisable", this ); }

                // Without this, a level's CTA that was ever briefly active keeps `active` pointing at
                // it even while hidden — so a locked-button tap (PlayableCTA.FireNow() while no level
                // is playing) would wrongly fire THIS component instead of falling back to the static
                // open-store path, setting HasFired early and making every later gameplay tap re-fire.
                if (UnityEngine.MonoBehaviour.op_Equality(PlayableCTA.active, this)) {
                    PlayableCTA.active = null;
                }
            },
            /*PlayableCTA.OnDisable end.*/

            /*PlayableCTA.Update start.*/
            Update: function () {
if ( TRACE ) { TRACE( "PlayableCTA#Update", this ); }

                var tapped = UnityEngine.Input.GetMouseButtonDown(0);

                if (!this.HasFired) {
                    if (this.trigger === PlayableCTA.Trigger.AfterSeconds && UnityEngine.Time.unscaledTime - this.enabledAt >= this.afterSeconds) {
                        this.FireFromTrigger();
                        return;
                    }

                    if (this.trigger === PlayableCTA.Trigger.AfterTaps && tapped) {
                        this.tapCount = (this.tapCount + 1) | 0;
                        if (this.tapCount >= this.afterTaps) {
                            this.FireFromTrigger();
                        }
                    }

                    if (this.trigger === PlayableCTA.Trigger.AfterProgress && UnityEngine.MonoBehaviour.op_Inequality(this.scratchProgress, null) && PlayableCTA.HasScratchStarted(this.scratchProgress, this.scratchIndex)) {
                        var progressIs = this.scratchIndex >= 0 ? this.scratchProgress.giveProgressForScratch(this.scratchIndex) : this.scratchProgress.giveCollectiveProgress();

                        if (progressIs >= this.progressThreshold) {
                            this.FireFromTrigger();
                        }
                    }

                    return;
                }

                if (this.refireOnEveryTap && tapped && UnityEngine.Time.unscaledTime - this.lastFireTime >= this.refireDelay) {
                    this.OpenStore();
                }
            },
            /*PlayableCTA.Update end.*/

            /*PlayableCTA.FireCTA start.*/
            /**
             * Fires the CTA. Public and no-arg on purpose — wire this into any UnityEvent in the
             Inspector to trigger the CTA at exactly the moment you want, including mid-step.
             *
             * @instance
             * @public
             * @this PlayableCTA
             * @memberof PlayableCTA
             * @return  {void}
             */
            FireCTA: function () {
if ( TRACE ) { TRACE( "PlayableCTA#FireCTA", this ); }

                // Explicit fire (level complete, a UnityEvent, FireNow) — this IS the celebration
                // moment, so the end card always shows. The trigger-based suppression below only
                // exists for the mid-gameplay triggers firing themselves.
                this.Fire(true);
            },
            /*PlayableCTA.FireCTA end.*/

            /*PlayableCTA.FireFromTrigger start.*/
            /**
             * Legacy optional component triggers remain available outside the builder.
             Generated playables use Manual and fire explicitly on final-step completion.
             *
             * @instance
             * @private
             * @this PlayableCTA
             * @memberof PlayableCTA
             * @return  {void}
             */
            FireFromTrigger: function () {
if ( TRACE ) { TRACE( "PlayableCTA#FireFromTrigger", this ); }

                var showCardThisFire = this.trigger !== PlayableCTA.Trigger.AfterProgress || this.showEndCardOnProgressTrigger;

                this.Fire(showCardThisFire);
            },
            /*PlayableCTA.FireFromTrigger end.*/

            /*PlayableCTA.Fire start.*/
            Fire: function (showCardThisFire) {
if ( TRACE ) { TRACE( "PlayableCTA#Fire", this ); }

                if (!this.HasFired) {
                    this.HasFired = true;


                    // Freeze gameplay input (including any drag in progress) the instant the CTA
                    // fires, so the tap that opens the store can't also be read as a drag/scratch.
                    if (this.blockInputOnFire) {
                        try {
                            if (UnityEngine.MonoBehaviour.op_Inequality(GameManager.instance, null)) {
                                GameManager.instance.isPaused = true;
                                GameManager.instance.StopAllDrags();
                            }
                        } catch (e) {
                            e = System.Exception.create(e);
                            UnityEngine.Debug.Log$1("[PlayableCTA] Input block skipped (no GameManager, ok standalone): " + (e.Message || ""));
                        }
                    }

                    if (showCardThisFire && this.showEndCard) {
                        if (this.endCardDelay > 0.0) {
                            DG.Tweening.DOVirtual.DelayedCall(this.endCardDelay, Bridge.fn.cacheBind(this, this.ShowEndCard));
                        } else {
                            this.ShowEndCard();
                        }
                    }

                    if (this.onCtaFired != null) {
                        this.onCtaFired.Invoke();
                    }
                }

                this.OpenStore();
            },
            /*PlayableCTA.Fire end.*/

            /*PlayableCTA.ShowEndCard start.*/
            /**
             * Activates endCard and switches off thingsToDisableOnEndCard together, so a
             delayed card (endCardDelay) hides the HUD at the same moment it appears, not on fire.
             *
             * @instance
             * @private
             * @this PlayableCTA
             * @memberof PlayableCTA
             * @return  {void}
             */
            ShowEndCard: function () {
if ( TRACE ) { TRACE( "PlayableCTA#ShowEndCard", this ); }

                if (UnityEngine.GameObject.op_Inequality(this.endCard, null)) {
                    this.endCard.SetActive(true);
                }

                if (this.thingsToDisableOnEndCard != null) {
                    for (var i = 0; i < this.thingsToDisableOnEndCard.length; i = (i + 1) | 0) {
                        if (UnityEngine.GameObject.op_Inequality(this.thingsToDisableOnEndCard[i], null)) {
                            this.thingsToDisableOnEndCard[i].SetActive(false);
                        }
                    }
                }
            },
            /*PlayableCTA.ShowEndCard end.*/

            /*PlayableCTA.OpenStore start.*/
            OpenStore: function () {
if ( TRACE ) { TRACE( "PlayableCTA#OpenStore", this ); }

                this.lastFireTime = UnityEngine.Time.unscaledTime;
                PlayableCTA.OpenStoreStatic(this.logWhenFired);
            },
            /*PlayableCTA.OpenStore end.*/


        }
    });
    /*PlayableCTA end.*/

    /*PlayableCTA+Trigger start.*/
    Bridge.define("PlayableCTA.Trigger", {
        $kind: 1006,
        statics: {
            fields: {
                /**
                 * Never fires by itself. Wire FireCTA() into a UnityEvent.
                 *
                 * @static
                 * @public
                 * @memberof number
                 * @constant
                 * @default 0
                 * @type number
                 */
                Manual: 0,
                /**
                 * Fires N seconds after this object becomes active.
                 *
                 * @static
                 * @public
                 * @memberof number
                 * @constant
                 * @default 1
                 * @type number
                 */
                AfterSeconds: 1,
                /**
                 * Fires after the player has tapped N times anywhere.
                 *
                 * @static
                 * @public
                 * @memberof number
                 * @constant
                 * @default 2
                 * @type number
                 */
                AfterTaps: 2,
                /**
                 * Fires as soon as this object becomes active.
                 *
                 * @static
                 * @public
                 * @memberof number
                 * @constant
                 * @default 3
                 * @type number
                 */
                Immediately: 3,
                /**
                 * Fires once scratchProgress's collective erase/restore progress reaches
                 progressThreshold. Works for either ScratchMode — BD_Progress already normalizes
                 erase and restore into the same 0..1 "how done is it" value.
                 *
                 * @static
                 * @public
                 * @memberof number
                 * @constant
                 * @default 4
                 * @type number
                 */
                AfterProgress: 4
            }
        }
    });
    /*PlayableCTA+Trigger end.*/

    /*PlayableFadeCoverSettings start.*/
    /**
     * Inspector knob for PlayableFadeCover's reveal timing. Drop on the same GameObject as
     PlayableCTA (the built prefab's root already has one) and tune per playable — some
     levels need a longer hold before the fade lifts if the step's entrance tween (tool
     sliding in, camera move, etc.) takes a while to read as "in place".
     *
     * @public
     * @class PlayableFadeCoverSettings
     * @augments UnityEngine.MonoBehaviour
     */
    Bridge.define("PlayableFadeCoverSettings", {
        inherits: [UnityEngine.MonoBehaviour],
        statics: {
            fields: {
                Active: null
            }
        },
        fields: {
            revealDelay: 0,
            revealDuration: 0
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "PlayableFadeCoverSettings#init", this ); }

                this.revealDelay = 0.15;
                this.revealDuration = 0.5;
            }
        },
        methods: {
            /*PlayableFadeCoverSettings.OnEnable start.*/
            OnEnable: function () {
if ( TRACE ) { TRACE( "PlayableFadeCoverSettings#OnEnable", this ); }

                PlayableFadeCoverSettings.Active = this;
            },
            /*PlayableFadeCoverSettings.OnEnable end.*/

            /*PlayableFadeCoverSettings.OnDisable start.*/
            OnDisable: function () {
if ( TRACE ) { TRACE( "PlayableFadeCoverSettings#OnDisable", this ); }

                if (UnityEngine.MonoBehaviour.op_Equality(PlayableFadeCoverSettings.Active, this)) {
                    PlayableFadeCoverSettings.Active = null;
                }
            },
            /*PlayableFadeCoverSettings.OnDisable end.*/


        }
    });
    /*PlayableFadeCoverSettings end.*/

    /*PlayableHudRuntime start.*/
    /**
     * Wires the scene PLAY button to store CTA. Does not create or move HUD.
     *
     * @public
     * @class PlayableHudRuntime
     * @augments UnityEngine.MonoBehaviour
     */
    Bridge.define("PlayableHudRuntime", {
        inherits: [UnityEngine.MonoBehaviour],
        statics: {
            fields: {
                Instance: null
            }
        },
        methods: {
            /*PlayableHudRuntime.Awake start.*/
            Awake: function () {
if ( TRACE ) { TRACE( "PlayableHudRuntime#Awake", this ); }

                PlayableHudRuntime.Instance = this;
                var buttons = this.GetComponentsInChildren$1(UnityEngine.UI.Button, true);
                for (var i = 0; i < buttons.length; i = (i + 1) | 0) {
                    buttons[i].onClick.AddListener(Bridge.fn.cacheBind(this, this.OnPlayClicked));
                }
            },
            /*PlayableHudRuntime.Awake end.*/

            /*PlayableHudRuntime.OnPlayClicked start.*/
            OnPlayClicked: function () {
if ( TRACE ) { TRACE( "PlayableHudRuntime#OnPlayClicked", this ); }

                PlayableInstall.Go();
            },
            /*PlayableHudRuntime.OnPlayClicked end.*/


        }
    });
    /*PlayableHudRuntime end.*/

    /*PlayableInstall start.*/
    /**
     * Playworks CTA. Literal Luna calls are required for Playworks health check.
     *
     * @static
     * @abstract
     * @public
     * @class PlayableInstall
     */
    Bridge.define("PlayableInstall", {
        statics: {
            methods: {
                /*PlayableInstall.Go:static start.*/
                Go: function () {
if ( TRACE ) { TRACE( "PlayableInstall#Go", this ); }

                    UnityEngine.Debug.Log$1("[Playable] CTA called");
                    try {
                        Luna.Unity.Playable.InstallFullGame();
                        Luna.Unity.LifeCycle.GameEnded();
                    } catch (e) {
                        e = System.Exception.create(e);
                        UnityEngine.Debug.Log$1("[Playable] Install CTA (editor/no-Luna is ok): " + (e.Message || ""));
                    }
                },
                /*PlayableInstall.Go:static end.*/


            }
        }
    });
    /*PlayableInstall end.*/

    /*PlayParticlesOnCollision start.*/
    Bridge.define("PlayParticlesOnCollision", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            Target: null,
            ParticlePrefab: null,
            destroyIt: false,
            stayAtPlace: false,
            disableOnCollision: false,
            isDone: false,
            OnCollisionEvent: null
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "PlayParticlesOnCollision#init", this ); }

                this.destroyIt = true;
                this.stayAtPlace = false;
                this.disableOnCollision = false;
                this.isDone = false;
            }
        },
        methods: {
            /*PlayParticlesOnCollision.OnTriggerEnter2D start.*/
            OnTriggerEnter2D: function (collision) {
if ( TRACE ) { TRACE( "PlayParticlesOnCollision#OnTriggerEnter2D", this ); }

                if (this.isDone) {
                    return;
                }

                if (UnityEngine.GameObject.op_Equality(this.Target, null)) {
                    return;
                }

                if (UnityEngine.GameObject.op_Equality(this.ParticlePrefab, null)) {
                    return;
                }

                if (UnityEngine.Component.op_Inequality(collision, null)) {
                    if (UnityEngine.GameObject.op_Equality(collision.gameObject, this.Target.gameObject)) {
                        this.isDone = true;




                        this.OnCollisionEvent != null ? this.OnCollisionEvent.Invoke() : null;

                        var temp = UnityEngine.Object.Instantiate(UnityEngine.GameObject, this.ParticlePrefab);

                        if (!this.stayAtPlace) {
                            temp.transform.position = this.Target.transform.position.$clone();
                        } else {
                            temp.transform.SetParent(this.transform);

                            temp.transform.localPosition = pc.Vec3.ZERO.clone();
                        }

                        if (this.destroyIt) {
                            this.Destroy(temp, 2.0);
                        }

                        if (this.disableOnCollision) {
                            this.gameObject.SetActive(false);
                        }


                    }
                }
            },
            /*PlayParticlesOnCollision.OnTriggerEnter2D end.*/


        }
    });
    /*PlayParticlesOnCollision end.*/

    /*PlaySfxOnCollision start.*/
    Bridge.define("PlaySfxOnCollision", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            Tip: null,
            Mode: 0,
            DragInput: null,
            Source: null,
            startVol: 0,
            targetVol: 0,
            duration: 0,
            Particles: null,
            isDone: false,
            isInArea: false,
            isPlaying: false,
            _fadeTween: null,
            _tipTransform: null
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "PlaySfxOnCollision#init", this ); }

                this.Mode = SfxPlayType.OnEnter;
                this.startVol = 0.0;
                this.targetVol = 1.0;
                this.duration = 0.3;
                this.isDone = false;
                this.isInArea = false;
                this.isPlaying = false;
            }
        },
        methods: {
            /*PlaySfxOnCollision.Awake start.*/
            Awake: function () {
if ( TRACE ) { TRACE( "PlaySfxOnCollision#Awake", this ); }

                if (UnityEngine.GameObject.op_Inequality(this.Tip, null)) {
                    this._tipTransform = this.Tip.transform;
                }

                if (UnityEngine.MonoBehaviour.op_Inequality(this.DragInput, null)) {
                    this.DragInput.OnMouseUpEvent = Bridge.fn.combine(this.DragInput.OnMouseUpEvent, Bridge.fn.cacheBind(this, this.HandleStop));
                }
            },
            /*PlaySfxOnCollision.Awake end.*/

            /*PlaySfxOnCollision.OnTriggerEnter2D start.*/
            OnTriggerEnter2D: function (collision) {
if ( TRACE ) { TRACE( "PlaySfxOnCollision#OnTriggerEnter2D", this ); }

                if (this.isDone || UnityEngine.Component.op_Equality(collision, null)) {
                    return;
                }

                // OPTIMIZATION: Compare transforms directly (faster than gameObject comparison)
                if (UnityEngine.Component.op_Equality(collision.transform, this._tipTransform)) {
                    if (this.Mode === SfxPlayType.OnEnter) {
                        this.HandlePlay();
                    }

                    this.isInArea = true;
                }
            },
            /*PlaySfxOnCollision.OnTriggerEnter2D end.*/

            /*PlaySfxOnCollision.OnTriggerExit2D start.*/
            OnTriggerExit2D: function (collision) {
if ( TRACE ) { TRACE( "PlaySfxOnCollision#OnTriggerExit2D", this ); }

                if (this.isDone || UnityEngine.Component.op_Equality(collision, null)) {
                    return;
                }

                if (UnityEngine.Component.op_Equality(collision.transform, this._tipTransform)) {
                    if (this.Mode === SfxPlayType.OnEnter) {
                        DG.Tweening.DOVirtual.DelayedCall(0.35, Bridge.fn.bind(this, function () {
                            if (!this.isInArea) {
                                this.HandleStop();
                            }
                        }));
                    }

                    this.isInArea = false;
                }
            },
            /*PlaySfxOnCollision.OnTriggerExit2D end.*/

            /*PlaySfxOnCollision.Update start.*/
            Update: function () {
if ( TRACE ) { TRACE( "PlaySfxOnCollision#Update", this ); }

                if (this.Mode === SfxPlayType.OnDrag) {
                    var isMoving = UnityEngine.MonoBehaviour.op_Inequality(this.DragInput, null) && this.DragInput.isObjectMovingWhileDragging;

                    if (this.isInArea && !this.isPlaying && isMoving) {
                        this.isPlaying = true;

                        this.HandlePlay();
                    } else if ((!this.isInArea || !isMoving) && this.isPlaying) {
                        this.isPlaying = false;
                        this.HandleStop();
                    }
                }
            },
            /*PlaySfxOnCollision.Update end.*/

            /*PlaySfxOnCollision.HandlePlay start.*/
            HandlePlay: function () {
if ( TRACE ) { TRACE( "PlaySfxOnCollision#HandlePlay", this ); }

                if (UnityEngine.Component.op_Inequality(this.Source, null)) {
                    this.PlayAudio();
                }
                if (UnityEngine.Component.op_Inequality(this.Particles, null)) {
                    this.Particles.Play();
                }
            },
            /*PlaySfxOnCollision.HandlePlay end.*/

            /*PlaySfxOnCollision.HandleStop start.*/
            HandleStop: function () {
if ( TRACE ) { TRACE( "PlaySfxOnCollision#HandleStop", this ); }

                if (UnityEngine.Component.op_Inequality(this.Source, null)) {
                    this.StopAudio();
                }
                if (UnityEngine.Component.op_Inequality(this.Particles, null)) {
                    this.Particles.Stop();
                }
            },
            /*PlaySfxOnCollision.HandleStop end.*/

            /*PlaySfxOnCollision.PlayAudio start.*/
            PlayAudio: function () {
if ( TRACE ) { TRACE( "PlaySfxOnCollision#PlayAudio", this ); }

                this._fadeTween != null ? DG.Tweening.TweenExtensions.Kill(this._fadeTween) : null; // Kill specific tween instead of searching globally

                if (!this.Source.isPlaying) {
                    this.Source.Play();
                }
                this._fadeTween = DG.Tweening.TweenSettingsExtensions.SetUpdate(DG.Tweening.Core.TweenerCore$3(System.Single,System.Single,DG.Tweening.Plugins.Options.FloatOptions), DG.Tweening.DOTweenModuleAudio.DOFade(this.Source, this.targetVol, this.duration), true);
            },
            /*PlaySfxOnCollision.PlayAudio end.*/

            /*PlaySfxOnCollision.StopAudio start.*/
            StopAudio: function () {
if ( TRACE ) { TRACE( "PlaySfxOnCollision#StopAudio", this ); }

                this._fadeTween != null ? DG.Tweening.TweenExtensions.Kill(this._fadeTween) : null;

                // OPTIMIZATION: Removed Lambda () => { } to stop GC allocations
                // Instead of OnComplete, we use a simple fade and let the Stop logic handle it
                this._fadeTween = DG.Tweening.TweenSettingsExtensions.OnComplete(DG.Tweening.Core.TweenerCore$3(System.Single,System.Single,DG.Tweening.Plugins.Options.FloatOptions), DG.Tweening.DOTweenModuleAudio.DOFade(this.Source, this.startVol, this.duration), Bridge.fn.cacheBind(this, this.OnFadeOutComplete));
            },
            /*PlaySfxOnCollision.StopAudio end.*/

            /*PlaySfxOnCollision.OnFadeOutComplete start.*/
            OnFadeOutComplete: function () {
if ( TRACE ) { TRACE( "PlaySfxOnCollision#OnFadeOutComplete", this ); }

                if (this.Source.volume <= this.startVol + 0.01) {
                    this.Source.Stop();
                }
            },
            /*PlaySfxOnCollision.OnFadeOutComplete end.*/

            /*PlaySfxOnCollision.DisableSfx start.*/
            DisableSfx: function () {
if ( TRACE ) { TRACE( "PlaySfxOnCollision#DisableSfx", this ); }

                this.isDone = true;
                this.HandleStop();
                this.isInArea = false;
            },
            /*PlaySfxOnCollision.DisableSfx end.*/

            /*PlaySfxOnCollision.OnDestroy start.*/
            OnDestroy: function () {
if ( TRACE ) { TRACE( "PlaySfxOnCollision#OnDestroy", this ); }

                this._fadeTween != null ? DG.Tweening.TweenExtensions.Kill(this._fadeTween) : null;

                if (UnityEngine.MonoBehaviour.op_Inequality(this.DragInput, null)) {
                    this.DragInput.OnMouseUpEvent = Bridge.fn.remove(this.DragInput.OnMouseUpEvent, Bridge.fn.cacheBind(this, this.HandleStop));
                }
            },
            /*PlaySfxOnCollision.OnDestroy end.*/


        }
    });
    /*PlaySfxOnCollision end.*/

    /*PointerInput start.*/
    /**
     * Luna/Bridge.NET only implements OnMouseDown/OnMouseUp/OnMouseDrag via 3D physics,
     so they don't fire on Collider2D. Poll Input.GetMouseButtonDown/Up and use this
     instead of relying on those Unity messages for 2D objects.
     *
     * @static
     * @abstract
     * @public
     * @class PointerInput
     */
    Bridge.define("PointerInput", {
        statics: {
            methods: {
                /*PointerInput.IsOverCollider:static start.*/
                IsOverCollider: function (collider) {
if ( TRACE ) { TRACE( "PointerInput#IsOverCollider", this ); }

                    if (UnityEngine.Component.op_Equality(collider, null)) {
                        return false;
                    }

                    var mouseWorld = UnityEngine.Vector2.FromVector3(UnityEngine.Camera.main.ScreenToWorldPoint(UnityEngine.Input.mousePosition));
                    var hit = UnityEngine.Physics2D.Raycast$2(mouseWorld, pc.Vec2.ZERO.clone());
                    return UnityEngine.Component.op_Equality(hit.collider, collider);
                },
                /*PointerInput.IsOverCollider:static end.*/


            }
        }
    });
    /*PointerInput end.*/

    /*SaveDataFields start.*/
    Bridge.define("SaveDataFields", {
        fields: {
            totalCoins: 0,
            levelToPlay: 0,
            partToPlay: 0,
            AllLevels: null,
            comingFromGP: false,
            levelPartDone: 0,
            IAP_Removeads: false,
            sessionCount: 0,
            mapUnlocked: false,
            mapTutorial: false,
            NextlevelToStart: 0
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "SaveDataFields#init", this ); }

                this.levelToPlay = 0;
                this.partToPlay = 0;
                this.comingFromGP = false;
                this.levelPartDone = 0;
                this.IAP_Removeads = false;
                this.mapUnlocked = false;
                this.mapTutorial = false;
                this.NextlevelToStart = 0;
            }
        }
    });
    /*SaveDataFields end.*/

    /*SaveSystem start.*/
    /**
     * Playable build: in-memory only. No JSON, no File I/O, no persistentDataPath — a playable
     is always a fresh session, so there is nothing to persist and Bridge.NET/WebGL cannot do
     file I/O reliably anyway.
     The DataFields API is kept intact so every existing level script keeps compiling and
     behaving the same; the values simply live for the lifetime of the page.
     *
     * @public
     * @class SaveSystem
     * @augments UnityEngine.MonoBehaviour
     */
    Bridge.define("SaveSystem", {
        inherits: [UnityEngine.MonoBehaviour],
        statics: {
            fields: {
                MinSubLevels: 0,
                Instance: null
            },
            ctors: {
                init: function () {
if ( TRACE ) { TRACE( "SaveSystem#init", this ); }

                    this.MinSubLevels = 8;
                }
            }
        },
        fields: {
            TotalLevels: 0,
            DataFields: null,
            iAPShown: false
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "SaveSystem#init", this ); }

                this.TotalLevels = 11;
                this.iAPShown = false;
            }
        },
        methods: {
            /*SaveSystem.Awake start.*/
            Awake: function () {
if ( TRACE ) { TRACE( "SaveSystem#Awake", this ); }

                if (UnityEngine.MonoBehaviour.op_Inequality(SaveSystem.Instance, null) && UnityEngine.MonoBehaviour.op_Inequality(SaveSystem.Instance, this)) {
                    UnityEngine.MonoBehaviour.Destroy(this.gameObject);
                    return;
                }

                SaveSystem.Instance = this;
                this.EnsureReady();
            },
            /*SaveSystem.Awake end.*/

            /*SaveSystem.EnsureReady start.*/
            EnsureReady: function () {
if ( TRACE ) { TRACE( "SaveSystem#EnsureReady", this ); }

                if (UnityEngine.MonoBehaviour.op_Equality(SaveSystem.Instance, null)) {
                    SaveSystem.Instance = this;
                }

                if (this.DataFields == null) {
                    this.DataFields = new SaveDataFields();
                }

                this.EnsureAllLevelsExist();

                if (this.DataFields.levelToPlay < 1) {
                    this.DataFields.levelToPlay = 1;
                }

                if (this.DataFields.partToPlay < 1) {
                    this.DataFields.partToPlay = 1;
                }
            },
            /*SaveSystem.EnsureReady end.*/

            /*SaveSystem.EnsureAllLevelsExist start.*/
            EnsureAllLevelsExist: function () {
if ( TRACE ) { TRACE( "SaveSystem#EnsureAllLevelsExist", this ); }

                var $t, $t1;
                if (this.DataFields.AllLevels == null || this.DataFields.AllLevels.length < this.TotalLevels) {
                    var neu = System.Array.init(this.TotalLevels, null, LevelSaveData);

                    var oldLen = this.DataFields.AllLevels != null ? this.DataFields.AllLevels.length : 0;

                    for (var i = 0; i < this.TotalLevels; i = (i + 1) | 0) {
                        neu[i] = i < oldLen && ($t = this.DataFields.AllLevels)[i] != null ? ($t1 = this.DataFields.AllLevels)[i] : new LevelSaveData();
                    }

                    this.DataFields.AllLevels = neu;
                }

                this.EnsureSubLevels();
            },
            /*SaveSystem.EnsureAllLevelsExist end.*/

            /*SaveSystem.EnsureSubLevels start.*/
            EnsureSubLevels: function () {
if ( TRACE ) { TRACE( "SaveSystem#EnsureSubLevels", this ); }

                var $t, $t1, $t2, $t3;
                for (var i = 0; i < this.DataFields.AllLevels.length; i = (i + 1) | 0) {
                    if (($t = this.DataFields.AllLevels)[i] == null) {
                        ($t1 = this.DataFields.AllLevels)[i] = new LevelSaveData();
                    }

                    var subs = ($t2 = this.DataFields.AllLevels)[i].subLevels;
                    var oldLen = subs != null ? subs.length : 0;
                    if (oldLen >= SaveSystem.MinSubLevels) {
                        continue;
                    }

                    var neu = System.Array.init(SaveSystem.MinSubLevels, null, SubLevelData);
                    for (var j = 0; j < SaveSystem.MinSubLevels; j = (j + 1) | 0) {
                        neu[j] = subs != null && j < oldLen && subs[j] != null ? subs[j] : new SubLevelData();
                    }

                    ($t3 = this.DataFields.AllLevels)[i].subLevels = neu;
                }
            },
            /*SaveSystem.EnsureSubLevels end.*/


        }
    });
    /*SaveSystem end.*/

    /*ScratchCardAsset.Core.Data.Triangle start.*/
    Bridge.define("ScratchCardAsset.Core.Data.Triangle", {
        fields: {
            v0: null,
            v1: null,
            v2: null,
            uv0: null,
            uv1: null,
            uv2: null
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "ScratchCardAsset.Core.Data.Triangle#init", this ); }

                this.v0 = new UnityEngine.Vector3();
                this.v1 = new UnityEngine.Vector3();
                this.v2 = new UnityEngine.Vector3();
                this.uv0 = new UnityEngine.Vector2();
                this.uv1 = new UnityEngine.Vector2();
                this.uv2 = new UnityEngine.Vector2();
            },
            ctor: function (vertex0, vertex1, vertex2, uv0, uv1, uv2) {
if ( TRACE ) { TRACE( "ScratchCardAsset.Core.Data.Triangle#ctor", this ); }

                this.$initialize();
                this.v0 = vertex0.$clone();
                this.v1 = vertex1.$clone();
                this.v2 = vertex2.$clone();
                this.uv0 = uv0.$clone();
                this.uv1 = uv1.$clone();
                this.uv2 = uv2.$clone();
            }
        },
        methods: {
            /*ScratchCardAsset.Core.Data.Triangle.GetUV start.*/
            GetUV: function (point) {
if ( TRACE ) { TRACE( "ScratchCardAsset.Core.Data.Triangle#GetUV", this ); }

                var $t, $t1, $t2;
                var distance0 = this.v0.$clone().sub( point );
                var distance1 = this.v1.$clone().sub( point );
                var distance2 = this.v2.$clone().sub( point );
                //calculate the areas
                var va = new pc.Vec3().cross( this.v0.$clone().sub( this.v1 ), this.v0.$clone().sub( this.v2 ) );
                var va1 = new pc.Vec3().cross( distance1, distance2 );
                var va2 = new pc.Vec3().cross( distance2, distance0 );
                var va3 = new pc.Vec3().cross( distance0, distance1 );
                var area = va.length();
                //calculate barycentric with sign
                var a1 = va1.length() / area * ($t = va.dot( va1 ), ($t === 0 ? 1 : Math.sign($t)));
                var a2 = va2.length() / area * ($t1 = va.dot( va2 ), ($t1 === 0 ? 1 : Math.sign($t1)));
                var a3 = va3.length() / area * ($t2 = va.dot( va3 ), ($t2 === 0 ? 1 : Math.sign($t2)));
                var uv = this.uv0.$clone().scale( a1 ).add( this.uv1.$clone().scale( a2 ) ).add( this.uv2.$clone().scale( a3 ) );
                return uv.$clone();
            },
            /*ScratchCardAsset.Core.Data.Triangle.GetUV end.*/


        }
    });
    /*ScratchCardAsset.Core.Data.Triangle end.*/

    /*ScratchCardAsset.Core.ScratchCardInput start.*/
    Bridge.define("ScratchCardAsset.Core.ScratchCardInput", {
        statics: {
            fields: {
                MaxTouchCount: 0
            },
            ctors: {
                init: function () {
if ( TRACE ) { TRACE( "ScratchCardAsset.Core.ScratchCardInput#init", this ); }

                    this.MaxTouchCount = 10;
                }
            }
        },
        fields: {
            scratchCard: null,
            eraseStartPositions: null,
            eraseEndPositions: null,
            erasePosition: null,
            isStartPosition: false,
            defPos: null
        },
        events: {
            OnScratch: null,
            OnScratchStart: null,
            OnScratchLine: null,
            OnScratchHole: null
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "ScratchCardAsset.Core.ScratchCardInput#init", this ); }

                this.eraseStartPositions = new UnityEngine.Vector2();
                this.eraseEndPositions = new UnityEngine.Vector2();
                this.erasePosition = new UnityEngine.Vector2();
                this.defPos = new UnityEngine.Vector2();
                this.defPos = new pc.Vec2( 1000, 0 );
            },
            ctor: function (card) {
if ( TRACE ) { TRACE( "ScratchCardAsset.Core.ScratchCardInput#ctor", this ); }

                this.$initialize();
                this.scratchCard = card;
                this.isStartPosition = true;
            }
        },
        methods: {
            /*ScratchCardAsset.Core.ScratchCardInput.Update start.*/
            Update: function () {
if ( TRACE ) { TRACE( "ScratchCardAsset.Core.ScratchCardInput#Update", this ); }

                if (UnityEngine.Input.GetMouseButtonDown(0)) {
                    this.eraseStartPositions = this.defPos.$clone();
                    this.eraseEndPositions = this.defPos.$clone();

                    this.scratchCard.IsScratching = false;

                    this.isStartPosition = true;
                }

                if (UnityEngine.Input.GetMouseButton(0)) {
                    this.TryScratch(UnityEngine.Vector2.FromVector3(UnityEngine.Input.mousePosition));
                }

                if (UnityEngine.Input.GetMouseButtonUp(0)) {
                    this.scratchCard.IsScratching = false;

                    this.eraseStartPositions = this.defPos.$clone();
                    this.eraseEndPositions = this.defPos.$clone();
                }
            },
            /*ScratchCardAsset.Core.ScratchCardInput.Update end.*/

            /*ScratchCardAsset.Core.ScratchCardInput.TryScratch start.*/
            TryScratch: function (position) {
if ( TRACE ) { TRACE( "ScratchCardAsset.Core.ScratchCardInput#TryScratch", this ); }

                try {
                    if (!Bridge.staticEquals(this.OnScratch, null)) {
                        this.erasePosition = this.OnScratch(position.$clone());
                    }

                    if (this.isStartPosition) {
                        this.eraseStartPositions = this.erasePosition.$clone();
                        this.eraseEndPositions = this.eraseStartPositions.$clone();
                        this.isStartPosition = false;
                    } else {
                        this.eraseStartPositions = this.eraseEndPositions.$clone();
                        this.eraseEndPositions = this.erasePosition.$clone();
                    }

                    if (!this.scratchCard.IsScratching) {
                        //eraseEndPositions = eraseStartPositions;
                        //scratchCard.IsScratching = true;
                    }
                } catch ($e1) {
                    $e1 = System.Exception.create($e1);

                }
            },
            /*ScratchCardAsset.Core.ScratchCardInput.TryScratch end.*/

            /*ScratchCardAsset.Core.ScratchCardInput.Scratch start.*/
            Scratch: function () {
if ( TRACE ) { TRACE( "ScratchCardAsset.Core.ScratchCardInput#Scratch", this ); }

                if (!Bridge.staticEquals(this.OnScratchStart, null)) {
                    this.OnScratchStart();
                }

                if (pc.Vec2.equals( this.eraseStartPositions, this.eraseEndPositions )) {
                    if (!Bridge.staticEquals(this.OnScratchHole, null)) {
                        this.OnScratchHole(this.erasePosition.$clone());
                    }
                } else {
                    if (!Bridge.staticEquals(this.OnScratchLine, null)) {
                        this.OnScratchLine(this.eraseStartPositions.$clone(), this.eraseEndPositions.$clone());
                    }
                }
            },
            /*ScratchCardAsset.Core.ScratchCardInput.Scratch end.*/

            /*ScratchCardAsset.Core.ScratchCardInput.ScratchAtPoint start.*/
            ScratchAtPoint: function (pos) {
if ( TRACE ) { TRACE( "ScratchCardAsset.Core.ScratchCardInput#ScratchAtPoint", this ); }

                if (!Bridge.staticEquals(this.OnScratch, null)) {
                    this.OnScratchHole(this.OnScratch(pos.$clone()));
                }
            },
            /*ScratchCardAsset.Core.ScratchCardInput.ScratchAtPoint end.*/


        }
    });
    /*ScratchCardAsset.Core.ScratchCardInput end.*/

    /*ScratchCardAsset.Core.ScratchCardRenderer start.*/
    Bridge.define("ScratchCardAsset.Core.ScratchCardRenderer", {
        statics: {
            fields: {
                MaskTexProperty: null,
                MainTexProperty: null,
                SourceTexProperty: null
            },
            ctors: {
                init: function () {
if ( TRACE ) { TRACE( "ScratchCardAsset.Core.ScratchCardRenderer#init", this ); }

                    this.MaskTexProperty = "_MaskTex";
                    this.MainTexProperty = "_MainTex";
                    this.SourceTexProperty = "_SourceTex";
                }
            }
        },
        fields: {
            IsScratched: false,
            useChangingHole: false,
            scratchCard: null,
            meshHole: null,
            meshLine: null,
            commandBuffer: null,
            rti: null,
            localBounds: null,
            imageSize: null,
            wait: null,
            white: null,
            positions: null,
            colors: null,
            indices: null,
            uv: null
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "ScratchCardAsset.Core.ScratchCardRenderer#init", this ); }

                this.localBounds = new UnityEngine.Bounds();
                this.imageSize = new UnityEngine.Vector2();
                this.white = new UnityEngine.Color();
                this.wait = new UnityEngine.WaitForSeconds(0.02);
                this.white = new pc.Color( 1, 1, 1, 1 );
                this.positions = new (System.Collections.Generic.List$1(UnityEngine.Vector3)).$ctor2(512);
                this.colors = new (System.Collections.Generic.List$1(UnityEngine.Color)).$ctor2(512);
                this.indices = new (System.Collections.Generic.List$1(System.Int32)).$ctor2(768);
                this.uv = new (System.Collections.Generic.List$1(UnityEngine.Vector2)).$ctor2(512);
            },
            ctor: function (card) {
if ( TRACE ) { TRACE( "ScratchCardAsset.Core.ScratchCardRenderer#ctor", this ); }

                var $t;
                this.$initialize();
                this.scratchCard = card;
                this.localBounds = new pc.BoundingBox( UnityEngine.Vector3.FromVector2(pc.Vec2.ONE.clone().scale( 1.0 / ( 2.0 ) )), UnityEngine.Vector3.FromVector2(pc.Vec2.ONE.clone()).scale( 0.5 ) );
                this.commandBuffer = ($t = new UnityEngine.Rendering.CommandBuffer(), $t.name = "ScratchCardRenderer", $t);
                this.meshHole = ScratchCardAsset.Tools.MeshGenerator.GenerateQuad(pc.Vec3.ZERO.clone(), UnityEngine.Vector3.FromVector2(pc.Vec2.ZERO.clone()));
            }
        },
        methods: {
            /*ScratchCardAsset.Core.ScratchCardRenderer.Release start.*/
            Release: function () {
if ( TRACE ) { TRACE( "ScratchCardAsset.Core.ScratchCardRenderer#Release", this ); }

                if (this.commandBuffer != null) {
                    this.commandBuffer.Release();
                }
                if (this.meshHole != null) {
                    UnityEngine.Object.Destroy(this.meshHole);
                }
                if (this.meshLine != null) {
                    UnityEngine.Object.Destroy(this.meshLine);
                }
            },
            /*ScratchCardAsset.Core.ScratchCardRenderer.Release end.*/

            /*ScratchCardAsset.Core.ScratchCardRenderer.CreateRenderTexture start.*/
            CreateRenderTexture: function () {
if ( TRACE ) { TRACE( "ScratchCardAsset.Core.ScratchCardRenderer#CreateRenderTexture", this ); }

                try {

                    var renderTextureSize = new pc.Vec2( this.imageSize.x / this.scratchCard.RenderTextureQuality, this.imageSize.y / this.scratchCard.RenderTextureQuality );
                    this.scratchCard.RenderTexture = new UnityEngine.RenderTexture.$ctor5(Bridge.Int.clip32(renderTextureSize.x), Bridge.Int.clip32(renderTextureSize.y), 0, UnityEngine.RenderTextureFormat.ARGB32);
                    this.scratchCard.ScratchSurface.SetTexture$1(ScratchCardAsset.Core.ScratchCardRenderer.MaskTexProperty, this.scratchCard.RenderTexture);
                    this.scratchCard.Progress.SetTexture$1(ScratchCardAsset.Core.ScratchCardRenderer.MainTexProperty, this.scratchCard.RenderTexture);
                    if (this.scratchCard.Progress.HasProperty$1(ScratchCardAsset.Core.ScratchCardRenderer.SourceTexProperty)) {
                        this.scratchCard.Progress.SetTexture$1(ScratchCardAsset.Core.ScratchCardRenderer.SourceTexProperty, this.scratchCard.ScratchSurface.mainTexture);
                    }
                    this.rti = new UnityEngine.Rendering.RenderTargetIdentifier.$ctor3(this.scratchCard.RenderTexture);

                } catch ($e1) {
                    $e1 = System.Exception.create($e1);
                }
            },
            /*ScratchCardAsset.Core.ScratchCardRenderer.CreateRenderTexture end.*/

            /*ScratchCardAsset.Core.ScratchCardRenderer.IsInBounds start.*/
            IsInBounds: function (rect) {
if ( TRACE ) { TRACE( "ScratchCardAsset.Core.ScratchCardRenderer#IsInBounds", this ); }

                var upperLeft = new pc.Vec2( rect.min.x, rect.max.y );
                var upperRight = rect.max.$clone();
                var bottomLeft = rect.min.$clone();
                var bottomRight = new pc.Vec2( rect.max.x, rect.min.y );
                return this.localBounds.containsPoint( UnityEngine.Vector3.FromVector2(upperLeft.$clone()) ) || this.localBounds.containsPoint( UnityEngine.Vector3.FromVector2(upperRight.$clone()) ) || this.localBounds.containsPoint( UnityEngine.Vector3.FromVector2(bottomLeft.$clone()) ) || this.localBounds.containsPoint( UnityEngine.Vector3.FromVector2(bottomRight.$clone()) );
            },
            /*ScratchCardAsset.Core.ScratchCardRenderer.IsInBounds end.*/

            /*ScratchCardAsset.Core.ScratchCardRenderer.Filling start.*/
            Filling: function (position) {
if ( TRACE ) { TRACE( "ScratchCardAsset.Core.ScratchCardRenderer#Filling", this ); }

                var $step = 0,
                    $jumpFromFinally,
                    $returnValue,
                    $async_e;

                var $enumerator = new Bridge.GeneratorEnumerator(Bridge.fn.bind(this, function () {
                    try {
                        for (;;) {
                            switch ($step) {
                                case 0: {
                                    this.ScratchHoleAddition(position, 1.0);

                                        $enumerator.current = null;
                                        $step = 1;
                                        return true;
                                }
                                case 1: {

                                }
                                default: {
                                    return false;
                                }
                            }
                        }
                    } catch($async_e1) {
                        $async_e = System.Exception.create($async_e1);
                        throw $async_e;
                    }
                }));
                return $enumerator;
            },
            /*ScratchCardAsset.Core.ScratchCardRenderer.Filling end.*/

            /*ScratchCardAsset.Core.ScratchCardRenderer.FillingLine start.*/
            FillingLine: function (startPosition, endPosition) {
if ( TRACE ) { TRACE( "ScratchCardAsset.Core.ScratchCardRenderer#FillingLine", this ); }

                var $step = 0,
                    $jumpFromFinally,
                    $returnValue,
                    $async_e;

                var $enumerator = new Bridge.GeneratorEnumerator(Bridge.fn.bind(this, function () {
                    try {
                        for (;;) {
                            switch ($step) {
                                case 0: {
                                    $enumerator.current = null;
                                        $step = 1;
                                        return true;
                                }
                                case 1: {
                                    this.ScratchLineAddition(startPosition, endPosition, 1.0);

                                        if (this.scratchCard.canSpreadMask) {
                                            $step = 2;
                                            continue;
                                        } 
                                        $step = 10;
                                        continue;
                                }
                                case 2: {
                                    $enumerator.current = this.wait;
                                        $step = 3;
                                        return true;
                                }
                                case 3: {
                                    this.ScratchLineAddition(startPosition, endPosition, 1.015);

                                        $enumerator.current = this.wait;
                                        $step = 4;
                                        return true;
                                }
                                case 4: {
                                    this.ScratchLineAddition(startPosition, endPosition, 1.03);

                                        $enumerator.current = this.wait;
                                        $step = 5;
                                        return true;
                                }
                                case 5: {
                                    this.ScratchLineAddition(startPosition, endPosition, 1.045);

                                        $enumerator.current = this.wait;
                                        $step = 6;
                                        return true;
                                }
                                case 6: {
                                    this.ScratchLineAddition(startPosition, endPosition, 1.06);

                                        $enumerator.current = this.wait;
                                        $step = 7;
                                        return true;
                                }
                                case 7: {
                                    this.ScratchLineAddition(startPosition, endPosition, 1.075);

                                        $enumerator.current = this.wait;
                                        $step = 8;
                                        return true;
                                }
                                case 8: {
                                    this.ScratchLineAddition(startPosition, endPosition, 1.09);

                                        $enumerator.current = this.wait;
                                        $step = 9;
                                        return true;
                                }
                                case 9: {
                                    this.ScratchLineAddition(startPosition, endPosition, 1.1);
                                    $step = 10;
                                    continue;
                                }
                                case 10: {

                                }
                                default: {
                                    return false;
                                }
                            }
                        }
                    } catch($async_e1) {
                        $async_e = System.Exception.create($async_e1);
                        throw $async_e;
                    }
                }));
                return $enumerator;
            },
            /*ScratchCardAsset.Core.ScratchCardRenderer.FillingLine end.*/

            /*ScratchCardAsset.Core.ScratchCardRenderer.ScratchHoleAddition start.*/
            ScratchHoleAddition: function (position, multiplier) {
if ( TRACE ) { TRACE( "ScratchCardAsset.Core.ScratchCardRenderer#ScratchHoleAddition", this ); }

                if (this.scratchCard.canRotateTip) {
                    this.ScratchHoleAddition$1(position, multiplier, this.scratchCard.ToolTip.transform.eulerAngles.z);

                    return;
                } else {
                    try {
                        var positionRect = new UnityEngine.Rect.$ctor1((position.x - 0.5 * this.scratchCard.Eraser.mainTexture.width * this.scratchCard.BrushScale.x * multiplier) / this.imageSize.x, (position.y - 0.5 * this.scratchCard.Eraser.mainTexture.height * this.scratchCard.BrushScale.y * multiplier) / this.imageSize.y, this.scratchCard.Eraser.mainTexture.width * this.scratchCard.BrushScale.x * multiplier / this.imageSize.x, this.scratchCard.Eraser.mainTexture.height * this.scratchCard.BrushScale.y * multiplier / this.imageSize.y);

                        if (this.IsInBounds(positionRect)) {
                            this.meshHole.vertices = System.Array.init([new pc.Vec3( positionRect.xMin, positionRect.yMax, 0 ), new pc.Vec3( positionRect.xMax, positionRect.yMax, 0 ), new pc.Vec3( positionRect.xMax, positionRect.yMin, 0 ), new pc.Vec3( positionRect.xMin, positionRect.yMin, 0 )], UnityEngine.Vector3);
                            UnityEngine.GL.LoadOrtho();
                            this.commandBuffer.Clear();
                            this.commandBuffer.SetRenderTarget(this.rti);
                            this.commandBuffer.DrawMesh(this.meshHole, pc.Mat4.IDENTITY.clone(), this.scratchCard.Eraser);
                            UnityEngine.Graphics.ExecuteCommandBuffer(this.commandBuffer);
                            this.IsScratched = true;
                        }
                    } catch ($e1) {
                        $e1 = System.Exception.create($e1);
                    }
                }
            },
            /*ScratchCardAsset.Core.ScratchCardRenderer.ScratchHoleAddition end.*/

            /*ScratchCardAsset.Core.ScratchCardRenderer.ScratchHoleAddition$1 start.*/
            ScratchHoleAddition$1: function (position, multiplier, rotation) {
if ( TRACE ) { TRACE( "ScratchCardAsset.Core.ScratchCardRenderer#ScratchHoleAddition$1", this ); }

                if (rotation === void 0) { rotation = 0.0; }
                try {
                    var positionRect = new UnityEngine.Rect.$ctor1((position.x - 0.5 * this.scratchCard.Eraser.mainTexture.width * this.scratchCard.BrushScale.x * multiplier) / this.imageSize.x, (position.y - 0.5 * this.scratchCard.Eraser.mainTexture.height * this.scratchCard.BrushScale.y * multiplier) / this.imageSize.y, this.scratchCard.Eraser.mainTexture.width * this.scratchCard.BrushScale.x * multiplier / this.imageSize.x, this.scratchCard.Eraser.mainTexture.height * this.scratchCard.BrushScale.y * multiplier / this.imageSize.y);

                    if (this.IsInBounds(positionRect)) {
                        // Define the vertices for the quad (centered at origin)
                        var quadVertices = System.Array.init([new pc.Vec3( -positionRect.width * 0.5, positionRect.height * 0.5, 0 ), new pc.Vec3( positionRect.width * 0.5, positionRect.height * 0.5, 0 ), new pc.Vec3( positionRect.width * 0.5, -positionRect.height * 0.5, 0 ), new pc.Vec3( -positionRect.width * 0.5, -positionRect.height * 0.5, 0 )], UnityEngine.Vector3);

                        // Define UVs (standard quad UVs)
                        var uvs = System.Array.init([new pc.Vec2( 0, 1 ), new pc.Vec2( 1, 1 ), new pc.Vec2( 1, 0 ), new pc.Vec2( 0, 0 )], UnityEngine.Vector2);

                        // Create transformation matrix
                        var center = new pc.Vec3( positionRect.center.x, positionRect.center.y, 0 );
                        var matrix = new pc.Mat4().setTRS( center, new pc.Quat().setFromEulerAngles_Unity( 0, 0, rotation ), new pc.Vec3( 1, 1, 1 ) );

                        // Transform vertices to world space
                        var transformedVertices = System.Array.init(quadVertices.length, function (){
                            return new UnityEngine.Vector3();
                        }, UnityEngine.Vector3);
                        for (var i = 0; i < quadVertices.length; i = (i + 1) | 0) {
                            transformedVertices[i] = matrix.transformPoint( quadVertices[i] );
                        }

                        // Set up the mesh
                        this.meshHole.vertices = transformedVertices;
                        this.meshHole.uv = uvs;
                        this.meshHole.triangles = System.Array.init([0, 1, 2, 0, 2, 3], System.Int32);

                        UnityEngine.GL.LoadOrtho();
                        this.commandBuffer.Clear();
                        this.commandBuffer.SetRenderTarget(this.rti);
                        this.commandBuffer.DrawMesh(this.meshHole, pc.Mat4.IDENTITY.clone(), this.scratchCard.Eraser);
                        UnityEngine.Graphics.ExecuteCommandBuffer(this.commandBuffer);
                        this.IsScratched = true;
                    }
                } catch ($e1) {
                    $e1 = System.Exception.create($e1);
                }
            },
            /*ScratchCardAsset.Core.ScratchCardRenderer.ScratchHoleAddition$1 end.*/

            /*ScratchCardAsset.Core.ScratchCardRenderer.ScratchLineAddition start.*/
            ScratchLineAddition: function (startPosition, endPosition, multiplier) {
if ( TRACE ) { TRACE( "ScratchCardAsset.Core.ScratchCardRenderer#ScratchLineAddition", this ); }

                if (this.scratchCard.canRotateTip) {
                    this.ScratchLineAddition$1(startPosition, endPosition, multiplier, this.scratchCard.ToolTip.transform.eulerAngles.z);

                    return;
                } else {
                    try {
                        var holesCount = (Bridge.Int.div(Bridge.Int.clip32(startPosition.$clone().sub( endPosition ).length()), this.scratchCard.RenderTextureQuality)) | 0;
                        var count = 0;
                        for (var i = 0; i < holesCount; i = (i + 1) | 0) {
                            var holePosition = startPosition.$clone().add( (endPosition.$clone().sub( startPosition )).scale( 1.0 / ( holesCount ) ).scale( i ) );
                            var positionRect = new UnityEngine.Rect.$ctor1((holePosition.x - 0.5 * this.scratchCard.Eraser.mainTexture.width * this.scratchCard.BrushScale.x * multiplier) / this.imageSize.x, (holePosition.y - 0.5 * this.scratchCard.Eraser.mainTexture.height * this.scratchCard.BrushScale.y * multiplier) / this.imageSize.y, this.scratchCard.Eraser.mainTexture.width * this.scratchCard.BrushScale.x * multiplier / this.imageSize.x, this.scratchCard.Eraser.mainTexture.height * this.scratchCard.BrushScale.y * multiplier / this.imageSize.y);

                            if (this.IsInBounds(positionRect)) {
                                this.positions.add(new pc.Vec3( positionRect.xMin, positionRect.yMax, 0 ));
                                this.positions.add(new pc.Vec3( positionRect.xMax, positionRect.yMax, 0 ));
                                this.positions.add(new pc.Vec3( positionRect.xMax, positionRect.yMin, 0 ));
                                this.positions.add(new pc.Vec3( positionRect.xMin, positionRect.yMin, 0 ));

                                this.colors.add(this.white.$clone());
                                this.colors.add(this.white.$clone());
                                this.colors.add(this.white.$clone());
                                this.colors.add(this.white.$clone());

                                this.uv.add(pc.Vec2.UP.clone());
                                this.uv.add(pc.Vec2.ONE.clone());
                                this.uv.add(pc.Vec2.RIGHT.clone());
                                this.uv.add(pc.Vec2.ZERO.clone());

                                this.indices.add(((0 + Bridge.Int.mul(count, 4)) | 0));
                                this.indices.add(((1 + Bridge.Int.mul(count, 4)) | 0));
                                this.indices.add(((2 + Bridge.Int.mul(count, 4)) | 0));
                                this.indices.add(((2 + Bridge.Int.mul(count, 4)) | 0));
                                this.indices.add(((3 + Bridge.Int.mul(count, 4)) | 0));
                                this.indices.add(((0 + Bridge.Int.mul(count, 4)) | 0));

                                count = (count + 1) | 0;
                            }
                        }

                        if (this.positions.Count > 0) {
                            if (this.meshLine != null) {
                                this.meshLine.Clear(); // Luna/Bridge.NET does not implement Mesh.Clear(bool); the mesh is fully reassigned below anyway
                            } else {
                                this.meshLine = new UnityEngine.Mesh.ctor();
                            }
                            this.meshLine.vertices = this.positions.ToArray();
                            this.meshLine.uv = this.uv.ToArray();
                            this.meshLine.triangles = this.indices.ToArray();
                            this.meshLine.colors = this.colors.ToArray();
                            UnityEngine.GL.LoadOrtho();
                            this.commandBuffer.Clear();
                            this.commandBuffer.SetRenderTarget(this.rti);
                            this.commandBuffer.DrawMesh(this.meshLine, pc.Mat4.IDENTITY.clone(), this.scratchCard.Eraser);
                            UnityEngine.Graphics.ExecuteCommandBuffer(this.commandBuffer);
                            this.IsScratched = true;

                            this.positions.clear();
                            this.colors.clear();
                            this.indices.clear();
                            this.uv.clear();
                        }
                    } catch ($e1) {
                        $e1 = System.Exception.create($e1);

                    }
                }
            },
            /*ScratchCardAsset.Core.ScratchCardRenderer.ScratchLineAddition end.*/

            /*ScratchCardAsset.Core.ScratchCardRenderer.ScratchLineAddition$1 start.*/
            ScratchLineAddition$1: function (startPosition, endPosition, multiplier, rotation) {
if ( TRACE ) { TRACE( "ScratchCardAsset.Core.ScratchCardRenderer#ScratchLineAddition$1", this ); }

                if (rotation === void 0) { rotation = 0.0; }
                try {
                    var holesCount = Bridge.Int.clip32(startPosition.$clone().sub( endPosition ).length() / this.scratchCard.RenderTextureQuality);
                    var count = 0;

                    for (var i = 0; i < holesCount; i = (i + 1) | 0) {
                        var holePosition = startPosition.$clone().add( (endPosition.$clone().sub( startPosition )).scale( 1.0 / ( holesCount ) ).scale( i ) );
                        var positionRect = new UnityEngine.Rect.$ctor1((holePosition.x - 0.5 * this.scratchCard.Eraser.mainTexture.width * this.scratchCard.BrushScale.x * multiplier) / this.imageSize.x, (holePosition.y - 0.5 * this.scratchCard.Eraser.mainTexture.height * this.scratchCard.BrushScale.y * multiplier) / this.imageSize.y, this.scratchCard.Eraser.mainTexture.width * this.scratchCard.BrushScale.x * multiplier / this.imageSize.x, this.scratchCard.Eraser.mainTexture.height * this.scratchCard.BrushScale.y * multiplier / this.imageSize.y);

                        if (this.IsInBounds(positionRect)) {
                            // Define the vertices for the quad (centered at origin)
                            var quadVertices = System.Array.init([new pc.Vec3( -positionRect.width * 0.5, positionRect.height * 0.5, 0 ), new pc.Vec3( positionRect.width * 0.5, positionRect.height * 0.5, 0 ), new pc.Vec3( positionRect.width * 0.5, -positionRect.height * 0.5, 0 ), new pc.Vec3( -positionRect.width * 0.5, -positionRect.height * 0.5, 0 )], UnityEngine.Vector3);

                            // Define UVs (standard quad UVs)
                            var quadUvs = System.Array.init([new pc.Vec2( 0, 1 ), new pc.Vec2( 1, 1 ), new pc.Vec2( 1, 0 ), new pc.Vec2( 0, 0 )], UnityEngine.Vector2);

                            // Create transformation matrix for this quad
                            var center = new pc.Vec3( positionRect.center.x, positionRect.center.y, 0 );
                            var matrix = new pc.Mat4().setTRS( center, new pc.Quat().setFromEulerAngles_Unity( 0, 0, rotation ), new pc.Vec3( 1, 1, 1 ) );

                            // Transform vertices to world space
                            for (var j = 0; j < quadVertices.length; j = (j + 1) | 0) {
                                this.positions.add(matrix.transformPoint( quadVertices[j] ));
                                this.colors.add(this.white.$clone());
                                this.uv.add(quadUvs[j].$clone());
                            }

                            // Add triangle indices for this quad
                            this.indices.add(((0 + Bridge.Int.mul(count, 4)) | 0));
                            this.indices.add(((1 + Bridge.Int.mul(count, 4)) | 0));
                            this.indices.add(((2 + Bridge.Int.mul(count, 4)) | 0));
                            this.indices.add(((2 + Bridge.Int.mul(count, 4)) | 0));
                            this.indices.add(((3 + Bridge.Int.mul(count, 4)) | 0));
                            this.indices.add(((0 + Bridge.Int.mul(count, 4)) | 0));

                            count = (count + 1) | 0;
                        }
                    }

                    if (this.positions.Count > 0) {
                        if (this.meshLine != null) {
                            this.meshLine.Clear(); // Luna/Bridge.NET does not implement Mesh.Clear(bool); the mesh is fully reassigned below anyway
                        } else {
                            this.meshLine = new UnityEngine.Mesh.ctor();
                        }
                        this.meshLine.vertices = this.positions.ToArray();
                        this.meshLine.uv = this.uv.ToArray();
                        this.meshLine.triangles = this.indices.ToArray();
                        this.meshLine.colors = this.colors.ToArray();

                        UnityEngine.GL.LoadOrtho();
                        this.commandBuffer.Clear();
                        this.commandBuffer.SetRenderTarget(this.rti);
                        this.commandBuffer.DrawMesh(this.meshLine, pc.Mat4.IDENTITY.clone(), this.scratchCard.Eraser);
                        UnityEngine.Graphics.ExecuteCommandBuffer(this.commandBuffer);
                        this.IsScratched = true;

                        this.positions.clear();
                        this.colors.clear();
                        this.indices.clear();
                        this.uv.clear();
                    }
                } catch ($e1) {
                    $e1 = System.Exception.create($e1);
                }
            },
            /*ScratchCardAsset.Core.ScratchCardRenderer.ScratchLineAddition$1 end.*/

            /*ScratchCardAsset.Core.ScratchCardRenderer.FillRenderTextureWithColor start.*/
            FillRenderTextureWithColor: function (color) {
if ( TRACE ) { TRACE( "ScratchCardAsset.Core.ScratchCardRenderer#FillRenderTextureWithColor", this ); }

                this.commandBuffer.SetRenderTarget(this.rti);
                this.commandBuffer.ClearRenderTarget(false, true, color);
                UnityEngine.Graphics.ExecuteCommandBuffer(this.commandBuffer);
            },
            /*ScratchCardAsset.Core.ScratchCardRenderer.FillRenderTextureWithColor end.*/

            /*ScratchCardAsset.Core.ScratchCardRenderer.SetImageSize start.*/
            SetImageSize: function (size) {
if ( TRACE ) { TRACE( "ScratchCardAsset.Core.ScratchCardRenderer#SetImageSize", this ); }

                this.imageSize = size.$clone();
            },
            /*ScratchCardAsset.Core.ScratchCardRenderer.SetImageSize end.*/


        },
        overloads: {
            "ScratchHoleAddition(Vector2, float, float)": "ScratchHoleAddition$1",
            "ScratchLineAddition(Vector2, Vector2, float, float)": "ScratchLineAddition$1"
        }
    });
    /*ScratchCardAsset.Core.ScratchCardRenderer end.*/

    /*ScratchCardAsset.EraseProgress start.*/
    Bridge.define("ScratchCardAsset.EraseProgress", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            Card: null,
            scratchMode: 0,
            percentRenderTexture: null,
            rti: null,
            commandBuffer: null,
            mesh: null,
            progressTexture: null,
            readRect: null,
            currentProgress: 0,
            isCompleted: false
        },
        events: {
            OnProgress: null,
            OnCompleted: null
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "ScratchCardAsset.EraseProgress#init", this ); }

                this.readRect = new UnityEngine.Rect();
            }
        },
        methods: {
            /*ScratchCardAsset.EraseProgress.Start start.*/
            Start: function () {
if ( TRACE ) { TRACE( "ScratchCardAsset.EraseProgress#Start", this ); }

                this.Init();
            },
            /*ScratchCardAsset.EraseProgress.Start end.*/

            /*ScratchCardAsset.EraseProgress.OnDestroy start.*/
            OnDestroy: function () {
if ( TRACE ) { TRACE( "ScratchCardAsset.EraseProgress#OnDestroy", this ); }

                if (this.percentRenderTexture != null) {
                    this.percentRenderTexture.Release();
                    UnityEngine.Object.Destroy(this.percentRenderTexture);
                }
                if (this.mesh != null) {
                    UnityEngine.Object.Destroy(this.mesh);
                }
                if (this.commandBuffer != null) {
                    this.commandBuffer.Release();
                }
                if (this.progressTexture != null) {
                    UnityEngine.Object.Destroy(this.progressTexture);
                }
            },
            /*ScratchCardAsset.EraseProgress.OnDestroy end.*/

            /*ScratchCardAsset.EraseProgress.Update start.*/
            Update: function () {
if ( TRACE ) { TRACE( "ScratchCardAsset.EraseProgress#Update", this ); }

                if (this.Card.Mode !== this.scratchMode) {
                    this.scratchMode = this.Card.Mode;
                    this.ResetProgress();
                }

                if (this.Card.IsScratched && !this.isCompleted) {
                    this.UpdateProgress();
                }
            },
            /*ScratchCardAsset.EraseProgress.Update end.*/

            /*ScratchCardAsset.EraseProgress.Init start.*/
            Init: function () {
if ( TRACE ) { TRACE( "ScratchCardAsset.EraseProgress#Init", this ); }

                var $t;
                this.scratchMode = this.Card.Mode;
                this.commandBuffer = ($t = new UnityEngine.Rendering.CommandBuffer(), $t.name = "EraseProgress", $t);
                this.percentRenderTexture = new UnityEngine.RenderTexture.$ctor5(1, 1, 0, UnityEngine.RenderTextureFormat.ARGB32);
                this.rti = new UnityEngine.Rendering.RenderTargetIdentifier.$ctor3(this.percentRenderTexture);
                this.mesh = ScratchCardAsset.Tools.MeshGenerator.GenerateQuad(new pc.Vec3( 1, 1, 1 ), pc.Vec3.ZERO.clone());

                // Persistent 1x1 texture
                this.progressTexture = new UnityEngine.Texture2D.$ctor12(1, 1, UnityEngine.TextureFormat.ARGB32, false, true);
                this.readRect = new UnityEngine.Rect.$ctor1(0, 0, 1, 1);
            },
            /*ScratchCardAsset.EraseProgress.Init end.*/

            /*ScratchCardAsset.EraseProgress.GiveProgress start.*/
            GiveProgress: function () {
if ( TRACE ) { TRACE( "ScratchCardAsset.EraseProgress#GiveProgress", this ); }

                UnityEngine.GL.LoadOrtho();
                this.commandBuffer.Clear();
                this.commandBuffer.SetRenderTarget(this.rti);
                this.commandBuffer.ClearRenderTarget(false, true, new pc.Color( 0, 0, 0, 0 ));
                this.commandBuffer.DrawMesh(this.mesh, pc.Mat4.IDENTITY.clone(), this.Card.Progress);
                UnityEngine.Graphics.ExecuteCommandBuffer(this.commandBuffer);

                var prevRT = UnityEngine.RenderTexture.active;
                UnityEngine.RenderTexture.active = this.percentRenderTexture;
                this.progressTexture.ReadPixels(this.readRect, 0, 0, false);
                this.progressTexture.Apply$1(false);
                UnityEngine.RenderTexture.active = prevRT;

                var red = this.progressTexture.GetPixel(0, 0).r;
                this.currentProgress = red;
                !Bridge.staticEquals(this.OnProgress, null) ? this.OnProgress(red) : null;
                return this.currentProgress;
            },
            /*ScratchCardAsset.EraseProgress.GiveProgress end.*/

            /*ScratchCardAsset.EraseProgress.CalcProgress start.*/
            CalcProgress: function () {
if ( TRACE ) { TRACE( "ScratchCardAsset.EraseProgress#CalcProgress", this ); }

                if (!this.isCompleted) {
                    var prevRT = UnityEngine.RenderTexture.active;
                    UnityEngine.RenderTexture.active = this.percentRenderTexture;
                    this.progressTexture.ReadPixels(this.readRect, 0, 0, false);
                    this.progressTexture.Apply$1(false);
                    UnityEngine.RenderTexture.active = prevRT;

                    var red = this.progressTexture.GetPixel(0, 0).r;
                    this.currentProgress = red;
                    !Bridge.staticEquals(this.OnProgress, null) ? this.OnProgress(red) : null;

                    var completeValue = this.Card.Mode === ScratchCardAsset.ScratchCard.ScratchMode.Erase ? 1.0 : 0.0;
                    if (UnityEngine.Mathf.Approximately(red, completeValue)) {
                        !Bridge.staticEquals(this.OnCompleted, null) ? this.OnCompleted(red) : null;
                        this.isCompleted = true;
                    }
                }
            },
            /*ScratchCardAsset.EraseProgress.CalcProgress end.*/

            /*ScratchCardAsset.EraseProgress.GetProgress start.*/
            GetProgress: function () {
if ( TRACE ) { TRACE( "ScratchCardAsset.EraseProgress#GetProgress", this ); }

                return this.currentProgress;
            },
            /*ScratchCardAsset.EraseProgress.GetProgress end.*/

            /*ScratchCardAsset.EraseProgress.UpdateProgress start.*/
            UpdateProgress: function () {
if ( TRACE ) { TRACE( "ScratchCardAsset.EraseProgress#UpdateProgress", this ); }

                UnityEngine.GL.LoadOrtho();
                this.commandBuffer.Clear();
                this.commandBuffer.SetRenderTarget(this.rti);
                this.commandBuffer.ClearRenderTarget(false, true, new pc.Color( 0, 0, 0, 0 ));
                this.commandBuffer.DrawMesh(this.mesh, pc.Mat4.IDENTITY.clone(), this.Card.Progress);
                UnityEngine.Graphics.ExecuteCommandBuffer(this.commandBuffer);

                this.CalcProgress();
            },
            /*ScratchCardAsset.EraseProgress.UpdateProgress end.*/

            /*ScratchCardAsset.EraseProgress.ResetProgress start.*/
            ResetProgress: function () {
if ( TRACE ) { TRACE( "ScratchCardAsset.EraseProgress#ResetProgress", this ); }

                this.isCompleted = false;
            },
            /*ScratchCardAsset.EraseProgress.ResetProgress end.*/


        }
    });
    /*ScratchCardAsset.EraseProgress end.*/

    /*ScratchCardAsset.ScratchCard start.*/
    Bridge.define("ScratchCardAsset.ScratchCard", {
        inherits: [UnityEngine.MonoBehaviour],
        statics: {
            fields: {
                BlendOpShaderParam: null,
                SourceTexProperty: null
            },
            ctors: {
                init: function () {
if ( TRACE ) { TRACE( "ScratchCardAsset.ScratchCard#init", this ); }

                    this.BlendOpShaderParam = "_BlendOpValue";
                    this.SourceTexProperty = "_SourceTex";
                }
            }
        },
        fields: {
            MainCamera: null,
            Surface: null,
            RenderTextureQuality: 0,
            Eraser: null,
            Progress: null,
            ScratchSurface: null,
            RenderTexture: null,
            BrushScale: null,
            ToolTip: null,
            InputEnabled: false,
            IsScratching: false,
            useChangingScale: false,
            useGivenBrushScale: false,
            _mode: 0,
            canSpreadMask: false,
            shouldPaintHoles: false,
            canRotateTip: false,
            cardRenderer: null,
            cardInput: null,
            triangle: null,
            surfaceSpriteRenderer: null,
            surfaceMeshFilter: null,
            surfaceRenderer: null,
            surfaceRectTransform: null,
            boundsSize: null,
            imageSize: null,
            isCanvasOverlay: false,
            isFirstFrame: false,
            lastFrameId: 0,
            firstScale: null,
            maxScale: null
        },
        props: {
            Mode: {
                get: function () {
if ( TRACE ) { TRACE( "ScratchCardAsset.ScratchCard#Mode#get", this ); }

                    return this._mode;
                },
                set: function (value) {
if ( TRACE ) { TRACE( "ScratchCardAsset.ScratchCard#Mode#set", this ); }

                    this._mode = value;
                    if (this.Eraser != null) {
                        var blendOp = this._mode === ScratchCardAsset.ScratchCard.ScratchMode.Erase ? UnityEngine.Rendering.BlendOp.Add : UnityEngine.Rendering.BlendOp.ReverseSubtract;
                        this.Eraser.SetInt$1(ScratchCardAsset.ScratchCard.BlendOpShaderParam, blendOp);
                    }
                }
            },
            IsScratched: {
                get: function () {
if ( TRACE ) { TRACE( "ScratchCardAsset.ScratchCard#IsScratched#get", this ); }

                    if (this.cardRenderer != null) {
                        return this.cardRenderer.IsScratched;
                    }

                    return false;
                },
                set: function (value) {
if ( TRACE ) { TRACE( "ScratchCardAsset.ScratchCard#IsScratched#set", this ); }

                    this.cardRenderer.IsScratched = value;
                }
            }
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "ScratchCardAsset.ScratchCard#init", this ); }

                this.BrushScale = new UnityEngine.Vector2();
                this.boundsSize = new UnityEngine.Vector2();
                this.imageSize = new UnityEngine.Vector2();
                this.firstScale = new UnityEngine.Vector2();
                this.maxScale = new UnityEngine.Vector2();
                this.RenderTextureQuality = ScratchCardAsset.ScratchCard.Quality.High;
                this.BrushScale = pc.Vec2.ONE.clone();
                this.InputEnabled = true;
                this._mode = ScratchCardAsset.ScratchCard.ScratchMode.Erase;
                this.canSpreadMask = true;
                this.shouldPaintHoles = false;
                this.canRotateTip = false;
                this.isFirstFrame = true;
                this.maxScale = new pc.Vec2( 1.5, 1.5 );
            }
        },
        methods: {
            /*ScratchCardAsset.ScratchCard.Start start.*/
            Start: function () {
if ( TRACE ) { TRACE( "ScratchCardAsset.ScratchCard#Start", this ); }

                this.Init();
                this.FillInstantly();
                this.firstScale = this.BrushScale.$clone();
            },
            /*ScratchCardAsset.ScratchCard.Start end.*/

            /*ScratchCardAsset.ScratchCard.SetStart start.*/
            SetStart: function () {
if ( TRACE ) { TRACE( "ScratchCardAsset.ScratchCard#SetStart", this ); }

                this.Init();
                this.FillInstantly();
                this.firstScale = this.BrushScale.$clone();
            },
            /*ScratchCardAsset.ScratchCard.SetStart end.*/

            /*ScratchCardAsset.ScratchCard.OnDestroy start.*/
            OnDestroy: function () {
if ( TRACE ) { TRACE( "ScratchCardAsset.ScratchCard#OnDestroy", this ); }

                try {
                    if (this.RenderTexture != null && this.RenderTexture.IsCreated()) {
                        this.RenderTexture.Release();
                        UnityEngine.Object.Destroy(this.RenderTexture);
                    }

                    this.cardRenderer.Release();
                } catch ($e1) {
                    $e1 = System.Exception.create($e1);
                }
            },
            /*ScratchCardAsset.ScratchCard.OnDestroy end.*/

            /*ScratchCardAsset.ScratchCard.Update start.*/
            Update: function () {
if ( TRACE ) { TRACE( "ScratchCardAsset.ScratchCard#Update", this ); }

                try {
                    if (this.lastFrameId === UnityEngine.Time.frameCount) {
                        return;
                    }

                    if (this.isFirstFrame) {
                        if (this.cardRenderer == null) {
                            this.cardRenderer = new ScratchCardAsset.Core.ScratchCardRenderer(this);
                            this.cardRenderer.SetImageSize(this.imageSize);
                            this.cardRenderer.CreateRenderTexture();
                            return;
                        }

                        this.cardRenderer.FillRenderTextureWithColor(new pc.Color( 0, 0, 0, 0 ));

                        this.isFirstFrame = false;
                    }

                    this.cardInput.Update();

                    if (this.IsScratching) {
                        if (this.shouldPaintHoles) {
                            this.ToolTip.transform.position = this.NormalizeThePositionToRotation(this.ToolTip.transform.rotation);

                            this.cardInput.ScratchAtPoint(UnityEngine.Vector2.FromVector3(this.ToolTip.transform.position));
                        } else {
                            this.cardInput.Scratch();
                        }

                    } else {
                        this.cardRenderer.IsScratched = false;
                    }

                    this.lastFrameId = UnityEngine.Time.frameCount;
                } catch ($e1) {
                    $e1 = System.Exception.create($e1);
                }
            },
            /*ScratchCardAsset.ScratchCard.Update end.*/

            /*ScratchCardAsset.ScratchCard.NormalizeThePositionToRotation start.*/
            NormalizeThePositionToRotation: function (rotation) {
if ( TRACE ) { TRACE( "ScratchCardAsset.ScratchCard#NormalizeThePositionToRotation", this ); }

                var newPos = pc.Vec3.ZERO.clone();

                return newPos.$clone();
            },
            /*ScratchCardAsset.ScratchCard.NormalizeThePositionToRotation end.*/

            /*ScratchCardAsset.ScratchCard.Init start.*/
            Init: function () {
if ( TRACE ) { TRACE( "ScratchCardAsset.ScratchCard#Init", this ); }

                this.GetScratchBounds();
                this.InitVariables();
                this.InitTriangle();
            },
            /*ScratchCardAsset.ScratchCard.Init end.*/

            /*ScratchCardAsset.ScratchCard.GetScratchBounds start.*/
            /**
             * Saves scratch card renderer component bounds
             *
             * @instance
             * @private
             * @this ScratchCardAsset.ScratchCard
             * @memberof ScratchCardAsset.ScratchCard
             * @return  {void}
             */
            GetScratchBounds: function () {
if ( TRACE ) { TRACE( "ScratchCardAsset.ScratchCard#GetScratchBounds", this ); }

                var $t, $t1;
                this.surfaceRenderer = this.Surface.GetComponent(UnityEngine.Renderer);
                if (UnityEngine.Component.op_Inequality(this.surfaceRenderer, null)) {
                    var sourceTexture = this.surfaceRenderer.sharedMaterial.mainTexture;
                    this.imageSize = new pc.Vec2( sourceTexture.width, sourceTexture.height );
                    this.surfaceMeshFilter = this.Surface.GetComponent(UnityEngine.MeshFilter);
                    if (UnityEngine.Component.op_Inequality(this.surfaceMeshFilter, null)) {
                        this.boundsSize = UnityEngine.Vector2.FromVector3(UnityEngine.Component.op_Inequality(this.surfaceMeshFilter, null) && !this.MainCamera.orthographic ? this.surfaceMeshFilter.sharedMesh.bounds.halfExtents.$clone().scale( 2 ).$clone() : this.surfaceRenderer.bounds.halfExtents.$clone().scale( 2 ).$clone());
                    } else {
                        this.surfaceSpriteRenderer = this.Surface.GetComponent(UnityEngine.SpriteRenderer);
                        this.boundsSize = UnityEngine.Vector2.FromVector3(UnityEngine.Component.op_Inequality(this.surfaceSpriteRenderer, null) && !this.MainCamera.orthographic ? this.surfaceSpriteRenderer.sprite.bounds.halfExtents.$clone().scale( 2 ).$clone() : this.surfaceRenderer.bounds.halfExtents.$clone().scale( 2 ).$clone());
                    }
                } else {
                    this.surfaceRectTransform = this.Surface.GetComponent(UnityEngine.RectTransform);
                    if (UnityEngine.Component.op_Inequality(this.surfaceRectTransform, null)) {
                        var canvas = this.Surface.GetComponentInParent(UnityEngine.Canvas);
                        if (UnityEngine.Component.op_Inequality(canvas, null)) {
                            this.isCanvasOverlay = canvas.renderMode === UnityEngine.RenderMode.ScreenSpaceOverlay;
                        }
                        var rect = this.surfaceRectTransform.rect.$clone();
                        this.imageSize = new pc.Vec2( rect.width, rect.height );
                        this.boundsSize = this.MainCamera.orthographic || this.isCanvasOverlay ? ($t = rect.size, $t1 = UnityEngine.Vector2.FromVector3(this.surfaceRectTransform.lossyScale), new pc.Vec2( $t.x * $t1.x, $t.y * $t1.y )) : this.imageSize.$clone();
                    } else {
                        UnityEngine.Debug.LogError$2("Can't find Renderer or RectTransform Component!");
                    }
                }
            },
            /*ScratchCardAsset.ScratchCard.GetScratchBounds end.*/

            /*ScratchCardAsset.ScratchCard.InitVariables start.*/
            InitVariables: function () {
if ( TRACE ) { TRACE( "ScratchCardAsset.ScratchCard#InitVariables", this ); }

                this.cardInput = new ScratchCardAsset.Core.ScratchCardInput(this);
                this.cardInput.removeOnScratchStart(Bridge.fn.cacheBind(this, this.OnScratchStart));
                this.cardInput.addOnScratchStart(Bridge.fn.cacheBind(this, this.OnScratchStart));
                this.cardInput.removeOnScratchHole(Bridge.fn.cacheBind(this, this.OnScratchHole));
                this.cardInput.addOnScratchHole(Bridge.fn.cacheBind(this, this.OnScratchHole));
                this.cardInput.removeOnScratchLine(Bridge.fn.cacheBind(this, this.OnScratchLine));
                this.cardInput.addOnScratchLine(Bridge.fn.cacheBind(this, this.OnScratchLine));
                this.cardInput.removeOnScratch(Bridge.fn.cacheBind(this, this.GetScratchPosition));
                this.cardInput.addOnScratch(Bridge.fn.cacheBind(this, this.GetScratchPosition));
                if (this.cardRenderer != null) {
                    this.cardRenderer.Release();
                }

                this.cardRenderer = new ScratchCardAsset.Core.ScratchCardRenderer(this);
                this.cardRenderer.SetImageSize(this.imageSize);
                this.cardRenderer.CreateRenderTexture();
            },
            /*ScratchCardAsset.ScratchCard.InitVariables end.*/

            /*ScratchCardAsset.ScratchCard.InitTriangle start.*/
            InitTriangle: function () {
if ( TRACE ) { TRACE( "ScratchCardAsset.ScratchCard#InitTriangle", this ); }

                //bottom left
                var position0 = new pc.Vec3( -this.boundsSize.x / 2.0, -this.boundsSize.y / 2.0, 0 );
                var uv0 = pc.Vec2.ZERO.clone();
                //upper left
                var position1 = new pc.Vec3( -this.boundsSize.x / 2.0, this.boundsSize.y / 2.0, 0 );
                var uv1 = pc.Vec2.UP.clone();
                //upper right
                var position2 = new pc.Vec3( this.boundsSize.x / 2.0, this.boundsSize.y / 2.0, 0 );
                var uv2 = pc.Vec2.ONE.clone();
                this.triangle = new ScratchCardAsset.Core.Data.Triangle(position0.$clone(), position1.$clone(), position2.$clone(), uv0.$clone(), uv1.$clone(), uv2.$clone());
            },
            /*ScratchCardAsset.ScratchCard.InitTriangle end.*/

            /*ScratchCardAsset.ScratchCard.OnScratchStart start.*/
            OnScratchStart: function () {
if ( TRACE ) { TRACE( "ScratchCardAsset.ScratchCard#OnScratchStart", this ); }

                this.cardRenderer.IsScratched = false;
            },
            /*ScratchCardAsset.ScratchCard.OnScratchStart end.*/

            /*ScratchCardAsset.ScratchCard.OnScratchHole start.*/
            OnScratchHole: function (position) {
if ( TRACE ) { TRACE( "ScratchCardAsset.ScratchCard#OnScratchHole", this ); }

                //  StartCoroutine(cardRenderer.Filling(position));
                this.cardRenderer.ScratchHoleAddition(position, 1.0);
            },
            /*ScratchCardAsset.ScratchCard.OnScratchHole end.*/

            /*ScratchCardAsset.ScratchCard.OnScratchLine start.*/
            OnScratchLine: function (start, end) {
if ( TRACE ) { TRACE( "ScratchCardAsset.ScratchCard#OnScratchLine", this ); }

                if (this.canSpreadMask) {
                    this.StartCoroutine$1(this.cardRenderer.FillingLine(start, end));
                } else {
                    this.cardRenderer.ScratchLineAddition(start, end, 1.0);
                }

            },
            /*ScratchCardAsset.ScratchCard.OnScratchLine end.*/

            /*ScratchCardAsset.ScratchCard.GetScratchPosition start.*/
            GetScratchPosition: function (position) {
if ( TRACE ) { TRACE( "ScratchCardAsset.ScratchCard#GetScratchPosition", this ); }

                var $t, $t1;
                var scratchPosition = pc.Vec2.ZERO.clone();

                if (this.MainCamera.orthographic || this.isCanvasOverlay) {
                    var clickPosition = this.ToolTip.transform.position.$clone();
                    var lossyScale = this.Surface.lossyScale.$clone();
                    var clickLocalPosition = ($t = UnityEngine.Vector2.FromVector3(this.Surface.InverseTransformPoint(clickPosition)), new pc.Vec2( $t.x * UnityEngine.Vector2.FromVector3(lossyScale).x, $t.y * UnityEngine.Vector2.FromVector3(lossyScale).y )).add( this.boundsSize.$clone().scale( 1.0 / ( 2.0 ) ) );
                    var pixelsPerInch = new pc.Vec2( this.imageSize.x / this.boundsSize.x / lossyScale.x, this.imageSize.y / this.boundsSize.y / lossyScale.y );
                    scratchPosition = ($t1 = new pc.Vec2( clickLocalPosition.x * UnityEngine.Vector2.FromVector3(lossyScale).x, clickLocalPosition.y * UnityEngine.Vector2.FromVector3(lossyScale).y ), new pc.Vec2( $t1.x * pixelsPerInch.x, $t1.y * pixelsPerInch.y ));
                } else {
                    var plane = new UnityEngine.Plane.$ctor2(this.Surface.forward, this.Surface.position);
                    var ray = this.MainCamera.ScreenPointToRay(this.ToolTip.transform.position);
                    var enter = { };

                    if (plane.Raycast(ray, enter)) {
                        var point = ray.GetPoint(enter.v);
                        var pointLocal = this.Surface.InverseTransformPoint(point);
                        var uv = this.triangle.GetUV(pointLocal);
                        scratchPosition = new pc.Vec2( uv.x * this.imageSize.x, uv.y * this.imageSize.y );
                    }
                }

                return scratchPosition.$clone();
            },
            /*ScratchCardAsset.ScratchCard.GetScratchPosition end.*/

            /*ScratchCardAsset.ScratchCard.GetCardInput start.*/
            GetCardInput: function () {
if ( TRACE ) { TRACE( "ScratchCardAsset.ScratchCard#GetCardInput", this ); }

                return this.cardInput;
            },
            /*ScratchCardAsset.ScratchCard.GetCardInput end.*/

            /*ScratchCardAsset.ScratchCard.StopColorCoroutine start.*/
            StopColorCoroutine: function () {
if ( TRACE ) { TRACE( "ScratchCardAsset.ScratchCard#StopColorCoroutine", this ); }

                this.StopCoroutine(this.cardRenderer.FillingLine(pc.Vec2.ZERO.clone(), pc.Vec2.ZERO.clone()));

                this.StopCoroutine(this.cardRenderer.Filling(pc.Vec2.ZERO.clone()));
            },
            /*ScratchCardAsset.ScratchCard.StopColorCoroutine end.*/

            /*ScratchCardAsset.ScratchCard.FillInstantly start.*/
            /**
             * Fills RenderTexture with white color (100% scratched surface)
             *
             * @instance
             * @public
             * @this ScratchCardAsset.ScratchCard
             * @memberof ScratchCardAsset.ScratchCard
             * @return  {void}
             */
            FillInstantly: function () {
if ( TRACE ) { TRACE( "ScratchCardAsset.ScratchCard#FillInstantly", this ); }

                this.cardRenderer.FillRenderTextureWithColor(new pc.Color( 1, 1, 1, 1 ));
                this.IsScratched = true;
            },
            /*ScratchCardAsset.ScratchCard.FillInstantly end.*/

            /*ScratchCardAsset.ScratchCard.ClearInstantly start.*/
            /**
             * Fills RenderTexture with clear color (0% scratched surface)
             *
             * @instance
             * @public
             * @this ScratchCardAsset.ScratchCard
             * @memberof ScratchCardAsset.ScratchCard
             * @return  {void}
             */
            ClearInstantly: function () {
if ( TRACE ) { TRACE( "ScratchCardAsset.ScratchCard#ClearInstantly", this ); }

                this.cardRenderer.FillRenderTextureWithColor(new pc.Color( 0, 0, 0, 0 ));
                this.IsScratched = true;
            },
            /*ScratchCardAsset.ScratchCard.ClearInstantly end.*/

            /*ScratchCardAsset.ScratchCard.Clearcurrent start.*/
            Clearcurrent: function () {
if ( TRACE ) { TRACE( "ScratchCardAsset.ScratchCard#Clearcurrent", this ); }

                this.cardRenderer.FillRenderTextureWithColor(new pc.Color( 1, 1, 1, 1 ));
                this.IsScratched = true;
            },
            /*ScratchCardAsset.ScratchCard.Clearcurrent end.*/

            /*ScratchCardAsset.ScratchCard.Clear start.*/
            /**
             * Clears scratched surface in next frame
             *
             * @instance
             * @public
             * @this ScratchCardAsset.ScratchCard
             * @memberof ScratchCardAsset.ScratchCard
             * @return  {void}
             */
            Clear: function () {
if ( TRACE ) { TRACE( "ScratchCardAsset.ScratchCard#Clear", this ); }

                this.isFirstFrame = true;
                this.IsScratched = true;
            },
            /*ScratchCardAsset.ScratchCard.Clear end.*/

            /*ScratchCardAsset.ScratchCard.ResetRenderTexture start.*/
            /**
             * Recreates RenderTexture and clears it in next frame
             *
             * @instance
             * @public
             * @this ScratchCardAsset.ScratchCard
             * @memberof ScratchCardAsset.ScratchCard
             * @return  {void}
             */
            ResetRenderTexture: function () {
if ( TRACE ) { TRACE( "ScratchCardAsset.ScratchCard#ResetRenderTexture", this ); }

                this.cardRenderer.CreateRenderTexture();
                this.isFirstFrame = true;
                this.IsScratched = true;
            },
            /*ScratchCardAsset.ScratchCard.ResetRenderTexture end.*/

            /*ScratchCardAsset.ScratchCard.GetScratchTexture start.*/
            /**
             * Returns scratch texture
             *
             * @instance
             * @public
             * @this ScratchCardAsset.ScratchCard
             * @memberof ScratchCardAsset.ScratchCard
             * @return  {UnityEngine.Texture2D}
             */
            GetScratchTexture: function () {
if ( TRACE ) { TRACE( "ScratchCardAsset.ScratchCard#GetScratchTexture", this ); }

                var previousRenderTexture = UnityEngine.RenderTexture.active;
                var texture2D = new UnityEngine.Texture2D.$ctor11(this.RenderTexture.width, this.RenderTexture.height, UnityEngine.TextureFormat.ARGB32, false);
                UnityEngine.RenderTexture.active = this.RenderTexture;
                texture2D.ReadPixels(new UnityEngine.Rect.$ctor1(0, 0, texture2D.width, texture2D.height), 0, 0, false);
                texture2D.Apply();
                UnityEngine.RenderTexture.active = previousRenderTexture;
                return texture2D;
            },
            /*ScratchCardAsset.ScratchCard.GetScratchTexture end.*/

            /*ScratchCardAsset.ScratchCard.SetScratchTexture start.*/
            /**
             * Set new ScratchTexture
             *
             * @instance
             * @public
             * @this ScratchCardAsset.ScratchCard
             * @memberof ScratchCardAsset.ScratchCard
             * @param   {UnityEngine.Texture2D}    texture
             * @return  {void}
             */
            SetScratchTexture: function (texture) {
if ( TRACE ) { TRACE( "ScratchCardAsset.ScratchCard#SetScratchTexture", this ); }

                this.Init();
                this.ClearInstantly();
                UnityEngine.Graphics.Blit(texture, this.RenderTexture);
                if (this.Progress.HasProperty$1(ScratchCardAsset.ScratchCard.SourceTexProperty)) {
                    this.Progress.SetTexture$1(ScratchCardAsset.ScratchCard.SourceTexProperty, texture);
                }
                this.ScratchSurface.mainTexture = texture;
                this.IsScratched = true;
            },
            /*ScratchCardAsset.ScratchCard.SetScratchTexture end.*/

            /*ScratchCardAsset.ScratchCard.GetCardrenderer start.*/
            GetCardrenderer: function () {
if ( TRACE ) { TRACE( "ScratchCardAsset.ScratchCard#GetCardrenderer", this ); }

                return this.cardRenderer;
            },
            /*ScratchCardAsset.ScratchCard.GetCardrenderer end.*/

            /*ScratchCardAsset.ScratchCard.ClearSmoothly start.*/
            ClearSmoothly: function (duration) {
if ( TRACE ) { TRACE( "ScratchCardAsset.ScratchCard#ClearSmoothly", this ); }

                if (duration === void 0) { duration = 0.5; }
                this.StartCoroutine$1(this.ClearSmoothlyRoutine(duration));
            },
            /*ScratchCardAsset.ScratchCard.ClearSmoothly end.*/

            /*ScratchCardAsset.ScratchCard.ClearSmoothlyRoutine start.*/
            ClearSmoothlyRoutine: function (duration) {
if ( TRACE ) { TRACE( "ScratchCardAsset.ScratchCard#ClearSmoothlyRoutine", this ); }

                var $step = 0,
                    $jumpFromFinally,
                    $returnValue,
                    elapsedTime,
                    startTexture,
                    tempRT,
                    fadeMat,
                    t,
                    $async_e;

                var $enumerator = new Bridge.GeneratorEnumerator(Bridge.fn.bind(this, function () {
                    try {
                        for (;;) {
                            switch ($step) {
                                case 0: {
                                    if (this.cardRenderer == null || this.RenderTexture == null) {
                                            $step = 1;
                                            continue;
                                        } 
                                        $step = 2;
                                        continue;
                                }
                                case 1: {
                                    UnityEngine.Debug.LogWarning$1("Cannot clear smoothly: cardRenderer or RenderTexture is null.");
                                        return false;
                                    $step = 2;
                                    continue;
                                }
                                case 2: {
                                    elapsedTime = 0.0;
                                        startTexture = this.GetScratchTexture();
                                        tempRT = new UnityEngine.RenderTexture.$ctor5(this.RenderTexture.width, this.RenderTexture.height, 0, UnityEngine.RenderTextureFormat.ARGB32);
                                        fadeMat = new UnityEngine.Material.$ctor2(GameManager.instance.restoreEffectShader);
                                    $step = 3;
                                    continue;
                                }
                                case 3: {
                                    if ( elapsedTime < duration ) {
                                            $step = 4;
                                            continue;
                                        } 
                                        $step = 6;
                                        continue;
                                }
                                case 4: {
                                    elapsedTime += UnityEngine.Time.deltaTime;
                                        t = Math.max(0, Math.min(1, elapsedTime / duration));

                                        fadeMat.SetFloat$1("_Fade", t);
                                        UnityEngine.Graphics.Blit(startTexture, tempRT, fadeMat);
                                        UnityEngine.Graphics.Blit(tempRT, this.RenderTexture);

                                        $enumerator.current = null;
                                        $step = 5;
                                        return true;
                                }
                                case 5: {
                                    
                                        $step = 3;
                                        continue;
                                }
                                case 6: {
                                    // Final precision clear (won’t jerk because texture is already transparent)
                                        this.cardRenderer.FillRenderTextureWithColor(new pc.Color( 0, 0, 0, 0 ));
                                        this.IsScratched = true;

                                }
                                default: {
                                    return false;
                                }
                            }
                        }
                    } catch($async_e1) {
                        $async_e = System.Exception.create($async_e1);
                        throw $async_e;
                    }
                }));
                return $enumerator;
            },
            /*ScratchCardAsset.ScratchCard.ClearSmoothlyRoutine end.*/


        }
    });
    /*ScratchCardAsset.ScratchCard end.*/

    /*ScratchCardAsset.ScratchCard+Quality start.*/
    Bridge.define("ScratchCardAsset.ScratchCard.Quality", {
        $kind: 1006,
        statics: {
            fields: {
                Low: 4,
                Medium: 2,
                High: 1
            }
        }
    });
    /*ScratchCardAsset.ScratchCard+Quality end.*/

    /*ScratchCardAsset.ScratchCard+ScratchMode start.*/
    Bridge.define("ScratchCardAsset.ScratchCard.ScratchMode", {
        $kind: 1006,
        statics: {
            fields: {
                Erase: 0,
                Restore: 1
            }
        }
    });
    /*ScratchCardAsset.ScratchCard+ScratchMode end.*/

    /*ScratchCardAsset.ScratchCardManager start.*/
    Bridge.define("ScratchCardAsset.ScratchCardManager", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            MainCamera: null,
            RenderType: 0,
            ScratchSurfaceSprite: null,
            ScratchSurfaceSpriteHasAlpha: false,
            MaskProgressCutOffValue: 0,
            EraseTexture: null,
            EraseTextureScale: null,
            InputEnabled: false,
            Card: null,
            Mode: 0,
            Progress: null,
            MeshCard: null,
            SpriteCard: null,
            ImageCard: null,
            MaskShader: null,
            BrushShader: null,
            MaskProgressShader: null,
            MaskProgressCutOffShader: null,
            eraserMaterial: null
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "ScratchCardAsset.ScratchCardManager#init", this ); }

                this.EraseTextureScale = new UnityEngine.Vector2();
                this.MaskProgressCutOffValue = 0.33;
                this.EraseTextureScale = pc.Vec2.ONE.clone();
                this.InputEnabled = true;
            }
        },
        methods: {
            /*ScratchCardAsset.ScratchCardManager.Awake start.*/
            Awake: function () {
if ( TRACE ) { TRACE( "ScratchCardAsset.ScratchCardManager#Awake", this ); }

                var $t;
                if (UnityEngine.MonoBehaviour.op_Equality(this.Card, null)) {
                    UnityEngine.Debug.LogError$2("ScratchCard is null!");
                    return;
                }

                if (UnityEngine.Component.op_Equality(this.Card.MainCamera, null)) {
                    this.Card.MainCamera = UnityEngine.Component.op_Inequality(this.MainCamera, null) ? this.MainCamera : UnityEngine.Camera.main;
                }

                var scratchSurfaceMaterial = null;
                if (this.Card.ScratchSurface == null) {
                    scratchSurfaceMaterial = ($t = new UnityEngine.Material.$ctor2(this.MaskShader), $t.mainTexture = this.ScratchSurfaceSprite.texture, $t);
                    this.Card.ScratchSurface = scratchSurfaceMaterial;
                    scratchSurfaceMaterial.renderQueue = 3000; // Set render queue to Transparent
                }

                if (this.Card.Eraser == null) {
                    this.eraserMaterial = ($t = new UnityEngine.Material.$ctor2(this.BrushShader), $t.mainTexture = this.EraseTexture, $t);
                    this.Card.Eraser = this.eraserMaterial;
                }

                this.Card.BrushScale = this.EraseTextureScale.$clone();
                this.Card.Mode = this.Mode;

                if (this.Card.Progress == null) {
                    var shader = this.ScratchSurfaceSpriteHasAlpha ? this.MaskProgressCutOffShader : this.MaskProgressShader;
                    var progressMaterial = new UnityEngine.Material.$ctor2(shader);
                    this.Card.Progress = progressMaterial;
                }

                if (this.RenderType === ScratchCardAsset.ScratchCardManager.ScratchCardRenderType.MeshRenderer) {
                    this.MeshCard.SetActive(true);
                    if (UnityEngine.GameObject.op_Inequality(this.SpriteCard, null)) {
                        this.SpriteCard.SetActive(false);
                    }

                    if (UnityEngine.GameObject.op_Inequality(this.ImageCard, null)) {
                        this.ImageCard.SetActive(false);
                    }

                    this.Card.Surface = this.MeshCard.transform;

                    var rendererComponent = this.MeshCard.GetComponent(UnityEngine.Renderer);
                    if (UnityEngine.Component.op_Inequality(rendererComponent, null)) {
                        rendererComponent.material = scratchSurfaceMaterial;
                    } else {
                        UnityEngine.Debug.LogError$2("Can't find Renderer component on " + (this.MeshCard.name || "") + " GameObject!");
                    }
                } else if (this.RenderType === ScratchCardAsset.ScratchCardManager.ScratchCardRenderType.SpriteRenderer) {
                    if (UnityEngine.GameObject.op_Inequality(this.MeshCard, null)) {
                        this.MeshCard.SetActive(false);
                    }

                    this.SpriteCard.SetActive(true);
                    if (UnityEngine.GameObject.op_Inequality(this.ImageCard, null)) {
                        this.ImageCard.SetActive(false);
                    }

                    this.Card.Surface = this.SpriteCard.transform;
                    var sprite = this.SpriteCard.GetComponent(UnityEngine.SpriteRenderer);
                    if (UnityEngine.Component.op_Inequality(sprite, null)) {
                        sprite.sprite = this.ScratchSurfaceSprite;
                        sprite.material = scratchSurfaceMaterial;
                    } else {
                        UnityEngine.Debug.LogError$2("Can't find SpriteRenderer component on " + (this.SpriteCard.name || "") + " GameObject!");
                    }
                } else if (this.RenderType === ScratchCardAsset.ScratchCardManager.ScratchCardRenderType.CanvasRenderer) {
                    if (UnityEngine.GameObject.op_Inequality(this.MeshCard, null)) {
                        this.MeshCard.SetActive(false);
                    }

                    if (UnityEngine.GameObject.op_Inequality(this.SpriteCard, null)) {
                        this.SpriteCard.SetActive(false);
                    }

                    this.ImageCard.SetActive(true);
                    this.Card.Surface = this.ImageCard.transform;
                    var image = this.ImageCard.GetComponent(UnityEngine.UI.Image);
                    if (UnityEngine.MonoBehaviour.op_Inequality(image, null)) {
                        image.sprite = this.ScratchSurfaceSprite;
                        image.material = scratchSurfaceMaterial;
                    } else {
                        UnityEngine.Debug.LogError$2("Can't find Image component on " + (this.ImageCard.name || "") + " GameObject!");
                    }
                }
            },
            /*ScratchCardAsset.ScratchCardManager.Awake end.*/

            /*ScratchCardAsset.ScratchCardManager.SetEraseTexture start.*/
            SetEraseTexture: function (texture) {
if ( TRACE ) { TRACE( "ScratchCardAsset.ScratchCardManager#SetEraseTexture", this ); }

                this.eraserMaterial.mainTexture = texture;
            },
            /*ScratchCardAsset.ScratchCardManager.SetEraseTexture end.*/

            /*ScratchCardAsset.ScratchCardManager.ResetScratchCard start.*/
            ResetScratchCard: function () {
if ( TRACE ) { TRACE( "ScratchCardAsset.ScratchCardManager#ResetScratchCard", this ); }

                this.Card.ResetRenderTexture();
            },
            /*ScratchCardAsset.ScratchCardManager.ResetScratchCard end.*/

            /*ScratchCardAsset.ScratchCardManager.GetProgress start.*/
            GetProgress: function () {
if ( TRACE ) { TRACE( "ScratchCardAsset.ScratchCardManager#GetProgress", this ); }

                if (this.Card.Progress == null) {
                    var shader = this.ScratchSurfaceSpriteHasAlpha ? this.MaskProgressCutOffShader : this.MaskProgressShader;
                    var progressMaterial = new UnityEngine.Material.$ctor2(shader);
                    this.Card.Progress = progressMaterial;
                }
            },
            /*ScratchCardAsset.ScratchCardManager.GetProgress end.*/


        }
    });
    /*ScratchCardAsset.ScratchCardManager end.*/

    /*ScratchCardAsset.ScratchCardManager+ScratchCardRenderType start.*/
    Bridge.define("ScratchCardAsset.ScratchCardManager.ScratchCardRenderType", {
        $kind: 1006,
        statics: {
            fields: {
                MeshRenderer: 0,
                SpriteRenderer: 1,
                CanvasRenderer: 2
            }
        }
    });
    /*ScratchCardAsset.ScratchCardManager+ScratchCardRenderType end.*/

    /*ScratchCardAsset.Tools.MeshGenerator start.*/
    Bridge.define("ScratchCardAsset.Tools.MeshGenerator", {
        statics: {
            methods: {
                /*ScratchCardAsset.Tools.MeshGenerator.GenerateQuad:static start.*/
                GenerateQuad: function (size, offset) {
if ( TRACE ) { TRACE( "ScratchCardAsset.Tools.MeshGenerator#GenerateQuad", this ); }

                    var $t;
                    var mesh = ($t = new UnityEngine.Mesh.ctor(), $t.vertices = System.Array.init([new pc.Vec3( 0.0, 1.0 * size.y, 0.0 ).sub( offset ), new pc.Vec3( 1.0 * size.x, 1.0 * size.y, 0 ).sub( offset ), new pc.Vec3( 1.0 * size.x, 0.0, 0.0 ).sub( offset ), new pc.Vec3( 0.0, 0.0, 0.0 ).sub( offset )], UnityEngine.Vector3), $t.uv = System.Array.init([new pc.Vec2( 0.0, 1.0 ), new pc.Vec2( 1.0, 1.0 ), new pc.Vec2( 1.0, 0.0 ), new pc.Vec2( 0.0, 0.0 )], UnityEngine.Vector2), $t.triangles = System.Array.init([0, 1, 2, 2, 3, 0], System.Int32), $t.colors = System.Array.init([new pc.Color( 1, 1, 1, 1 ), new pc.Color( 1, 1, 1, 1 ), new pc.Color( 1, 1, 1, 1 ), new pc.Color( 1, 1, 1, 1 )], UnityEngine.Color), $t);
                    return mesh;
                },
                /*ScratchCardAsset.Tools.MeshGenerator.GenerateQuad:static end.*/


            }
        }
    });
    /*ScratchCardAsset.Tools.MeshGenerator end.*/

    /*ScratchData start.*/
    Bridge.define("ScratchData", {
        fields: {
            ScratchManager: null,
            scratchLimit: 0,
            isComplete: false
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "ScratchData#init", this ); }

                this.scratchLimit = 0.5;
                this.isComplete = false;
            }
        }
    });
    /*ScratchData end.*/

    /*scroller_Item start.*/
    Bridge.define("scroller_Item", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            icon: null,
            bg: null,
            bg_fade_L: null,
            bg_fade_R: null,
            tick: null,
            can_group: null
        }
    });
    /*scroller_Item end.*/

    /*SfxPlayType start.*/
    Bridge.define("SfxPlayType", {
        $kind: 6,
        statics: {
            fields: {
                OnEnter: 0,
                OnDrag: 1
            }
        }
    });
    /*SfxPlayType end.*/

    /*Statics start.*/
    Bridge.define("Statics", {
        statics: {
            methods: {
                /*Statics.GA_LevelStartEvent:static start.*/
                GA_LevelStartEvent: function (eventName) {
if ( TRACE ) { TRACE( "Statics#GA_LevelStartEvent", this ); }
 },
                /*Statics.GA_LevelStartEvent:static end.*/

                /*Statics.GA_LevelCompleteEvent:static start.*/
                GA_LevelCompleteEvent: function (eventName) {
if ( TRACE ) { TRACE( "Statics#GA_LevelCompleteEvent", this ); }
 },
                /*Statics.GA_LevelCompleteEvent:static end.*/

                /*Statics.GA_CustomStringEvent:static start.*/
                GA_CustomStringEvent: function (eventName) {
if ( TRACE ) { TRACE( "Statics#GA_CustomStringEvent", this ); }
 },
                /*Statics.GA_CustomStringEvent:static end.*/


            }
        }
    });
    /*Statics end.*/

    /*SubLevelData start.*/
    Bridge.define("SubLevelData", {
        fields: {
            subLevelName: null,
            isCompleted: false,
            isLocked: false,
            stepsDone: 0
        }
    });
    /*SubLevelData end.*/

    /*ToastManager start.*/
    /**
     * Slide-up toast message. Uses legacy uGUI Text, not TextMeshPro — TMPro is not available
     in this project's Luna/Playworks build.
     *
     * @public
     * @class ToastManager
     * @augments UnityEngine.MonoBehaviour
     */
    Bridge.define("ToastManager", {
        inherits: [UnityEngine.MonoBehaviour],
        statics: {
            fields: {
                instance: null
            }
        },
        fields: {
            toastPanel: null,
            toastPopup: null,
            canvasGroup: null,
            toastText: null,
            startY: 0,
            visibleY: 0,
            endY: 0,
            animationTime: 0,
            animationTimeUp: 0
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "ToastManager#init", this ); }

                this.startY = -500.0;
                this.visibleY = 350.0;
                this.endY = 700.0;
                this.animationTime = 0.3;
                this.animationTimeUp = 0.3;
            }
        },
        methods: {
            /*ToastManager.Awake start.*/
            Awake: function () {
if ( TRACE ) { TRACE( "ToastManager#Awake", this ); }

                if (UnityEngine.MonoBehaviour.op_Equality(ToastManager.instance, null)) {
                    ToastManager.instance = this;
                } else {
                    UnityEngine.MonoBehaviour.Destroy(this.gameObject);
                    return;
                }

                if (UnityEngine.GameObject.op_Equality(this.toastPanel, null) || UnityEngine.MonoBehaviour.op_Equality(this.toastText, null)) {
                    UnityEngine.Debug.LogWarning$1("Toast Panel or Text not assigned.");
                    return;
                }

                this.toastPanel.SetActive(false);
                this.canvasGroup.alpha = 0.0;
                this.toastPopup.anchoredPosition = new pc.Vec2( this.toastPopup.anchoredPosition.x, this.startY );
            },
            /*ToastManager.Awake end.*/

            /*ToastManager.SendToast start.*/
            SendToast: function (message, duration) {
if ( TRACE ) { TRACE( "ToastManager#SendToast", this ); }

                if (duration === void 0) { duration = 1.0; }
                if (UnityEngine.GameObject.op_Equality(this.toastPanel, null) || UnityEngine.MonoBehaviour.op_Equality(this.toastText, null)) {
                    UnityEngine.Debug.LogWarning$1("Cannot show toast: UI elements not assigned.");
                    return;
                }

                this.CancelInvoke$1("HideToast");

                DG.Tweening.ShortcutExtensions.DOKill(this.canvasGroup);
                DG.Tweening.ShortcutExtensions.DOKill(this.toastPopup);

                this.toastText.text = message;

                this.toastPanel.SetActive(true);

                // Reset starting state
                this.canvasGroup.alpha = 0.0;
                this.toastPopup.anchoredPosition = new pc.Vec2( this.toastPopup.anchoredPosition.x, this.startY );
                DG.Tweening.TweenSettingsExtensions.SetEase$2(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.Options.VectorOptions), DG.Tweening.DOTweenModuleUI.DOAnchorPosY(this.toastPopup, this.visibleY, this.animationTime), DG.Tweening.Ease.OutBack);

                DG.Tweening.DOTweenModuleUI.DOFade(this.canvasGroup, 1.0, this.animationTime);

                this.Invoke("HideToast", duration);
            },
            /*ToastManager.SendToast end.*/

            /*ToastManager.HideToast start.*/
            HideToast: function () {
if ( TRACE ) { TRACE( "ToastManager#HideToast", this ); }

                DG.Tweening.ShortcutExtensions.DOKill(this.canvasGroup);
                DG.Tweening.ShortcutExtensions.DOKill(this.toastPopup);
                DG.Tweening.TweenSettingsExtensions.SetEase$2(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.Options.VectorOptions), DG.Tweening.DOTweenModuleUI.DOAnchorPosY(this.toastPopup, this.endY, this.animationTimeUp), DG.Tweening.Ease.Linear);
                DG.Tweening.TweenSettingsExtensions.OnComplete(DG.Tweening.Core.TweenerCore$3(System.Single,System.Single,DG.Tweening.Plugins.Options.FloatOptions), DG.Tweening.DOTweenModuleUI.DOFade(this.canvasGroup, 0.0, this.animationTimeUp), Bridge.fn.bind(this, function () {
                    this.toastPanel.SetActive(false);

                    // Reset for next toast
                    this.toastPopup.anchoredPosition = new pc.Vec2( this.toastPopup.anchoredPosition.x, this.startY );
                }));
            },
            /*ToastManager.HideToast end.*/


        }
    });
    /*ToastManager end.*/

    /*UI_Manager start.*/
    Bridge.define("UI_Manager", {
        inherits: [UnityEngine.MonoBehaviour],
        statics: {
            fields: {
                HOLD_DURATION: 0,
                instance: null
            },
            ctors: {
                init: function () {
if ( TRACE ) { TRACE( "UI_Manager#init", this ); }

                    this.HOLD_DURATION = 0.55;
                }
            }
        },
        fields: {
            levelCompleted: false,
            isPauseActive: false,
            loadIndex: 0,
            removeAdsButton: null,
            pauseButton: null,
            removeAdsButtonStartPos: null,
            pauseButtonStartPos: null,
            moveDistance: 0,
            animationDuration: 0,
            isTouching: false,
            Fade_Img: null,
            TopBarAnim: null,
            MainPanel: null,
            PausePanel: null,
            PausePopUp: null,
            PauseCanvasGroup: null,
            RateUsPanel: null,
            RateUsPopUp: null,
            RemoveAdsPanel: null,
            RemoveAdsPopUp: null,
            RemoveAdsCanvasGroup: null,
            RemoveAdsAnims: null,
            CompletePanel: null,
            LevelIcon: null,
            CompleteParticles: null,
            progressBar: null,
            progressText: null,
            toolIcon1: null,
            toolIcon2: null,
            toolIcon3: null,
            toolIcon4: null,
            target1: null,
            target2: null,
            toolMoveDuration: 0,
            tool1Icon: null,
            tool2Icon: null,
            tool3Icon: null,
            tool1Bg: null,
            tool2Bg: null,
            tool3Bg: null,
            greyBgChildName: null,
            tool1BgGrey: null,
            tool2BgGrey: null,
            tool3BgGrey: null,
            tool1Tick: null,
            tool2Tick: null,
            tool3Tick: null,
            nextToolIndex: 0,
            showTick: false,
            currentIndex: 0,
            allTools: null,
            clockProgress: null,
            clockProgressFill: null,
            clockAudio: null,
            m_LastPressTime: 0,
            m_PressDelay: 0,
            holdTimer: 0,
            pushOffset: 0
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "UI_Manager#init", this ); }

                this.removeAdsButtonStartPos = new UnityEngine.Vector2();
                this.pauseButtonStartPos = new UnityEngine.Vector2();
                this.levelCompleted = false;
                this.isPauseActive = false;
                this.moveDistance = 200.0;
                this.animationDuration = 0.3;
                this.isTouching = false;
                this.toolMoveDuration = 0.35;
                this.greyBgChildName = "Bg Grey";
                this.nextToolIndex = 0;
                this.showTick = false;
                this.currentIndex = 0;
                this.allTools = new (System.Collections.Generic.List$1(UnityEngine.Sprite)).ctor();
                this.m_PressDelay = 1.0;
                this.holdTimer = 0.0;
                this.pushOffset = 150.0;
            }
        },
        methods: {
            /*UI_Manager.Awake start.*/
            Awake: function () {
if ( TRACE ) { TRACE( "UI_Manager#Awake", this ); }

                UI_Manager.instance = this;

                if (UnityEngine.Component.op_Inequality(this.pauseButton, null)) {
                    this.pauseButtonStartPos = this.pauseButton.anchoredPosition.$clone();
                }

                if (UnityEngine.Component.op_Inequality(this.removeAdsButton, null)) {
                    this.removeAdsButtonStartPos = this.removeAdsButton.anchoredPosition.$clone();
                }

            },
            /*UI_Manager.Awake end.*/

            /*UI_Manager.Update start.*/
            Update: function () {
if ( TRACE ) { TRACE( "UI_Manager#Update", this ); }

                if (UnityEngine.MonoBehaviour.op_Equality(GameManager.instance, null) || GameManager.instance.isComplete) {
                    return;
                }

                if (UnityEngine.Input.GetMouseButton(0)) {
                    if (!this.isOverUI()) {
                        this.holdTimer += UnityEngine.Time.deltaTime;

                        if (this.holdTimer >= UI_Manager.HOLD_DURATION && !this.isTouching) {
                            this.isTouching = true;

                            this.MoveButtonsOut();
                        }
                    }
                } else if (UnityEngine.Input.GetMouseButtonUp(0)) {
                    if (this.isTouching) {
                        this.isTouching = false;

                        this.MoveButtonsIn();
                    }

                    this.holdTimer = 0.0;
                }
            },
            /*UI_Manager.Update end.*/

            /*UI_Manager.MoveButtonsOut start.*/
            MoveButtonsOut: function () {
if ( TRACE ) { TRACE( "UI_Manager#MoveButtonsOut", this ); }

                // Animate buttons to move up out of screen
                if (UnityEngine.Component.op_Inequality(this.pauseButton, null)) {
                    DG.Tweening.ShortcutExtensions.DOKill(this.pauseButton);
                    DG.Tweening.TweenSettingsExtensions.SetEase$2(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.Options.VectorOptions), DG.Tweening.DOTweenModuleUI.DOAnchorPosX(this.pauseButton, this.pauseButtonStartPos.x + this.moveDistance, this.animationDuration), DG.Tweening.Ease.OutQuad);
                }

                if (UnityEngine.Component.op_Inequality(this.removeAdsButton, null)) {
                    DG.Tweening.ShortcutExtensions.DOKill(this.removeAdsButton);
                    DG.Tweening.TweenSettingsExtensions.SetEase$2(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.Options.VectorOptions), DG.Tweening.DOTweenModuleUI.DOAnchorPosX(this.removeAdsButton, this.removeAdsButtonStartPos.x - this.moveDistance, this.animationDuration), DG.Tweening.Ease.OutQuad);
                }
            },
            /*UI_Manager.MoveButtonsOut end.*/

            /*UI_Manager.MoveButtonsIn start.*/
            MoveButtonsIn: function () {
if ( TRACE ) { TRACE( "UI_Manager#MoveButtonsIn", this ); }

                // Animate buttons to return to original position
                if (UnityEngine.Component.op_Inequality(this.pauseButton, null)) {
                    DG.Tweening.ShortcutExtensions.DOKill(this.pauseButton);
                    DG.Tweening.TweenSettingsExtensions.SetEase$2(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.Options.VectorOptions), DG.Tweening.DOTweenModuleUI.DOAnchorPosX(this.pauseButton, this.pauseButtonStartPos.x, this.animationDuration), DG.Tweening.Ease.InQuad);
                }

                if (UnityEngine.Component.op_Inequality(this.removeAdsButton, null)) {
                    DG.Tweening.ShortcutExtensions.DOKill(this.removeAdsButton);
                    DG.Tweening.TweenSettingsExtensions.SetEase$2(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.Options.VectorOptions), DG.Tweening.DOTweenModuleUI.DOAnchorPosX(this.removeAdsButton, this.removeAdsButtonStartPos.x, this.animationDuration), DG.Tweening.Ease.InQuad);
                }
            },
            /*UI_Manager.MoveButtonsIn end.*/

            /*UI_Manager.isOverUI start.*/
            isOverUI: function () {
if ( TRACE ) { TRACE( "UI_Manager#isOverUI", this ); }

                // Ignore drag if pointer is over any UI element
                if (UnityEngine.MonoBehaviour.op_Inequality(UnityEngine.EventSystems.EventSystem.current, null) && UnityEngine.EventSystems.EventSystem.current.IsPointerOverGameObject()) {
                    return true;
                }

                if (UnityEngine.MonoBehaviour.op_Inequality(UnityEngine.EventSystems.EventSystem.current, null) && UnityEngine.Input.touchCount > 0) {
                    if (UnityEngine.EventSystems.EventSystem.current.IsPointerOverGameObject$1(UnityEngine.Input.GetTouch(0).fingerId)) {
                        return true;
                    }
                }

                return false;
            },
            /*UI_Manager.isOverUI end.*/

            /*UI_Manager.InitializeTools start.*/
            InitializeTools: function (toolIcons) {
if ( TRACE ) { TRACE( "UI_Manager#InitializeTools", this ); }

                this.SetProgressBarInstant(0.0);

                this.showTick = false;

                this.allTools = toolIcons;
                this.currentIndex = 0;
                this.nextToolIndex = 0;

                this.SetupToolIconReferences();

                var tool1Rect = UnityEngine.GameObject.op_Inequality(this.toolIcon1, null) ? this.toolIcon1.GetComponent(UnityEngine.RectTransform) : null;
                var tool2Rect = UnityEngine.GameObject.op_Inequality(this.toolIcon2, null) ? this.toolIcon2.GetComponent(UnityEngine.RectTransform) : null;
                var tool3Rect = UnityEngine.GameObject.op_Inequality(this.toolIcon3, null) ? this.toolIcon3.GetComponent(UnityEngine.RectTransform) : null;

                if (UnityEngine.Component.op_Inequality(tool1Rect, null)) {
                    DG.Tweening.ShortcutExtensions.DOKill(tool1Rect);
                    tool1Rect.anchoredPosition = this.target1.anchoredPosition.$clone();
                    tool1Rect.localScale = this.target1.localScale.$clone();
                }

                if (UnityEngine.Component.op_Inequality(tool2Rect, null)) {
                    DG.Tweening.ShortcutExtensions.DOKill(tool2Rect);
                    tool2Rect.anchoredPosition = this.target2.anchoredPosition.$clone();
                    tool2Rect.localScale = this.target2.localScale.$clone();
                }

                if (UnityEngine.Component.op_Inequality(tool3Rect, null)) {
                    DG.Tweening.ShortcutExtensions.DOKill(tool3Rect);
                    tool3Rect.anchoredPosition = this.target2.anchoredPosition.$clone();
                    tool3Rect.localScale = this.target2.localScale.$clone();
                }

                // First tool
                if (this.allTools != null && this.allTools.Count > 0) {
                    this.SetToolIcon(this.toolIcon1, this.tool1Icon, this.tool1Bg, this.tool1Tick, this.allTools.getItem(0));

                    // Current tool -> blue
                    this.SetGreyInstant(this.tool1BgGrey, 0.0);

                    this.nextToolIndex = 1;
                } else {
                    this.HideToolIcon(this.toolIcon1, this.tool1Bg, this.tool1Tick);
                }

                // Second tool
                if (this.allTools != null && this.allTools.Count > 1) {
                    this.SetToolIcon(this.toolIcon2, this.tool2Icon, this.tool2Bg, this.tool2Tick, this.allTools.getItem(1));

                    // Next tool -> grey
                    this.SetGreyInstant(this.tool2BgGrey, 1.0);

                    this.nextToolIndex = 2;

                    // There is a real next tool, so the last-tool placeholder stays hidden
                    this.HideTool4();
                } else {
                    this.HideToolIcon(this.toolIcon2, this.tool2Bg, this.tool2Tick);

                    // Only tool in the level: it's already the last one, fill the empty slot
                    this.ShowTool4Instant();
                }

                // Third icon is the future/reusable slot
                this.HideToolIcon(this.toolIcon3, this.tool3Bg, this.tool3Tick);

                // Primed grey so it is already grey when it slides into the next slot
                this.SetGreyInstant(this.tool3BgGrey, 1.0);

                DG.Tweening.DOTweenModuleUI.DOFillAmount(this.progressBar, 0, 0);
                this.progressText.text = "0%";
            },
            /*UI_Manager.InitializeTools end.*/

            /*UI_Manager.SetProgressIconIndex start.*/
            SetProgressIconIndex: function (stepIndex) {
if ( TRACE ) { TRACE( "UI_Manager#SetProgressIconIndex", this ); }

                this.showTick = false;

                this.currentIndex = stepIndex;

                this.SetupToolIconReferences();

                if (this.allTools == null || this.allTools.Count === 0) {
                    return;
                }

                var firstIndex = this.currentIndex;

                if (firstIndex < 0) {
                    firstIndex = 0;
                }

                if (firstIndex >= this.allTools.Count) {
                    firstIndex = (this.allTools.Count - 1) | 0;
                }

                // Tool 1 = current
                if (firstIndex < this.allTools.Count) {
                    this.SetToolIcon(this.toolIcon1, this.tool1Icon, this.tool1Bg, this.tool1Tick, this.allTools.getItem(firstIndex));

                    // Current tool -> blue
                    this.SetGreyInstant(this.tool1BgGrey, 0.0);
                }

                // Tool 2 = next
                var secondIndex = (firstIndex + 1) | 0;

                if (secondIndex < this.allTools.Count) {
                    this.SetToolIcon(this.toolIcon2, this.tool2Icon, this.tool2Bg, this.tool2Tick, this.allTools.getItem(secondIndex));

                    // Next tool -> grey
                    this.SetGreyInstant(this.tool2BgGrey, 1.0);

                    // There is a real next tool, so the last-tool placeholder stays hidden
                    this.HideTool4();
                } else {
                    this.HideToolIcon(this.toolIcon2, this.tool2Bg, this.tool2Tick);

                    // Current tool is the last one: fill the empty slot
                    this.ShowTool4Instant();
                }

                // Tool 3 starts hidden
                this.HideToolIcon(this.toolIcon3, this.tool3Bg, this.tool3Tick);

                // Primed grey so it is already grey when it slides into the next slot
                this.SetGreyInstant(this.tool3BgGrey, 1.0);

                var tool1Rect = UnityEngine.GameObject.op_Inequality(this.toolIcon1, null) ? this.toolIcon1.GetComponent(UnityEngine.RectTransform) : null;
                var tool2Rect = UnityEngine.GameObject.op_Inequality(this.toolIcon2, null) ? this.toolIcon2.GetComponent(UnityEngine.RectTransform) : null;
                var tool3Rect = UnityEngine.GameObject.op_Inequality(this.toolIcon3, null) ? this.toolIcon3.GetComponent(UnityEngine.RectTransform) : null;

                if (UnityEngine.Component.op_Inequality(tool1Rect, null)) {
                    DG.Tweening.ShortcutExtensions.DOKill(tool1Rect);
                    tool1Rect.anchoredPosition = this.target1.anchoredPosition.$clone();
                    tool1Rect.localScale = this.target1.localScale.$clone();
                }

                if (UnityEngine.Component.op_Inequality(tool2Rect, null)) {
                    DG.Tweening.ShortcutExtensions.DOKill(tool2Rect);
                    tool2Rect.anchoredPosition = this.target2.anchoredPosition.$clone();
                    tool2Rect.localScale = this.target2.localScale.$clone();
                }

                if (UnityEngine.Component.op_Inequality(tool3Rect, null)) {
                    DG.Tweening.ShortcutExtensions.DOKill(tool3Rect);
                    tool3Rect.anchoredPosition = this.target2.anchoredPosition.$clone();
                    tool3Rect.localScale = this.target2.localScale.$clone();
                }

                this.nextToolIndex = (secondIndex + 1) | 0;

                DG.Tweening.DOTweenModuleUI.DOFillAmount(this.progressBar, 0, this.toolMoveDuration);
                this.progressText.text = "0%";
            },
            /*UI_Manager.SetProgressIconIndex end.*/

            /*UI_Manager.SetProgressBarPos start.*/
            SetProgressBarPos: function () {
if ( TRACE ) { TRACE( "UI_Manager#SetProgressBarPos", this ); }

                this.showTick = false;

                if (this.allTools == null || this.allTools.Count === 0) {
                    return;
                }

                this.SetupToolIconReferences();

                this.currentIndex = (this.currentIndex + 1) | 0;

                // No more tools available — this IS the level's finished state (last tool ticked,
                // toolIcon4/star showing as "next"), so tool1 and toolIcon4 stay put and visible;
                // only the genuinely unused tool2/tool3 slots clear.
                if (this.currentIndex >= this.allTools.Count) {
                    this.currentIndex = (this.allTools.Count - 1) | 0;

                    this.HideToolIcon(this.toolIcon2, this.tool2Bg, this.tool2Tick);
                    this.HideToolIcon(this.toolIcon3, this.tool3Bg, this.tool3Tick);

                    this.SetGreyInstant(this.tool2BgGrey, 1.0);
                    this.SetGreyInstant(this.tool3BgGrey, 1.0);

                    return;
                }

                // =========================================================
                // SAVE CURRENT OBJECT REFERENCES
                // =========================================================

                var oldTool1 = this.toolIcon1;
                var oldTool2 = this.toolIcon2;
                var oldTool3 = this.toolIcon3;

                var oldIcon1 = this.tool1Icon;
                var oldIcon2 = this.tool2Icon;
                var oldIcon3 = this.tool3Icon;

                var oldBg1 = this.tool1Bg;
                var oldBg2 = this.tool2Bg;
                var oldBg3 = this.tool3Bg;

                var oldTick1 = this.tool1Tick;
                var oldTick2 = this.tool2Tick;
                var oldTick3 = this.tool3Tick;

                var oldGrey1 = this.tool1BgGrey;
                var oldGrey2 = this.tool2BgGrey;
                var oldGrey3 = this.tool3BgGrey;

                var oldTool1Rect = UnityEngine.GameObject.op_Inequality(oldTool1, null) ? oldTool1.GetComponent(UnityEngine.RectTransform) : null;
                var oldTool2Rect = UnityEngine.GameObject.op_Inequality(oldTool2, null) ? oldTool2.GetComponent(UnityEngine.RectTransform) : null;
                var oldTool3Rect = UnityEngine.GameObject.op_Inequality(oldTool3, null) ? oldTool3.GetComponent(UnityEngine.RectTransform) : null;

                // Kill all ongoing tweens
                if (UnityEngine.Component.op_Inequality(oldTool1Rect, null)) {
                    DG.Tweening.ShortcutExtensions.DOKill(oldTool1Rect);
                }
                if (UnityEngine.Component.op_Inequality(oldTool2Rect, null)) {
                    DG.Tweening.ShortcutExtensions.DOKill(oldTool2Rect);
                }
                if (UnityEngine.Component.op_Inequality(oldTool3Rect, null)) {
                    DG.Tweening.ShortcutExtensions.DOKill(oldTool3Rect);
                }

                // =========================================================
                // STEP 1: TOOL 2 (NEXT) MOVES TO TARGET 1 (CURRENT)
                // =========================================================

                if (UnityEngine.Component.op_Inequality(oldTool2Rect, null)) {
                    oldTool2Rect.anchoredPosition = this.target2.anchoredPosition.$clone();
                    oldTool2Rect.localScale = this.target2.localScale.$clone();
                }

                this.ShowToolIcon(oldTool2, oldBg2, oldTick2);

                var oldCanvas2 = oldTool2.GetComponent(UnityEngine.CanvasGroup);
                if (UnityEngine.MonoBehaviour.op_Equality(oldCanvas2, null)) {
                    oldCanvas2 = oldTool2.AddComponent(UnityEngine.CanvasGroup);
                }
                DG.Tweening.ShortcutExtensions.DOKill(oldCanvas2);
                oldCanvas2.alpha = 1.0;

                if (UnityEngine.Component.op_Inequality(oldTool2Rect, null)) {
                    DG.Tweening.TweenSettingsExtensions.SetEase$2(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.Options.VectorOptions), DG.Tweening.DOTweenModuleUI.DOAnchorPos(oldTool2Rect, this.target1.anchoredPosition.$clone(), this.toolMoveDuration), DG.Tweening.Ease.InQuad);
                    DG.Tweening.TweenSettingsExtensions.SetEase$2(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,UnityEngine.Vector3,DG.Tweening.Plugins.Options.VectorOptions), DG.Tweening.ShortcutExtensions.DOScale$1(oldTool2Rect, this.target1.localScale.$clone(), this.toolMoveDuration), DG.Tweening.Ease.InQuad);
                }

                // Becoming the current tool: fade the grey away to reveal the blue
                this.FadeGrey(oldGrey2, 0.0, this.toolMoveDuration);

                // =========================================================
                // STEP 2: TOOL 3 (FUTURE) SLIDES INTO TARGET 2 & FADES IN
                // =========================================================

                var incomingToolIndex = (this.currentIndex + 1) | 0;

                if (incomingToolIndex < this.allTools.Count) {
                    this.SetToolIcon(oldTool3, oldIcon3, oldBg3, oldTick3, this.allTools.getItem(incomingToolIndex));

                    // Taking the next slot: it arrives already grey
                    this.SetGreyInstant(oldGrey3, 1.0);

                    if (UnityEngine.Component.op_Inequality(oldTool3Rect, null)) {
                        DG.Tweening.ShortcutExtensions.DOKill(oldTool3Rect);

                        // Offset it to the right of target 2 for the sliding approach
                        var slideInStartPos = this.target2.anchoredPosition.$clone().add( new pc.Vec2( this.pushOffset, 0.0 ) );
                        oldTool3Rect.anchoredPosition = slideInStartPos.$clone();

                        // Reset scale in case this object was previously shrunken as Tool 1
                        oldTool3Rect.localScale = this.target2.localScale.$clone();
                        DG.Tweening.TweenSettingsExtensions.SetEase$2(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.Options.VectorOptions), DG.Tweening.DOTweenModuleUI.DOAnchorPos(oldTool3Rect, this.target2.anchoredPosition.$clone(), this.toolMoveDuration), DG.Tweening.Ease.OutCubic);
                    }

                    this.ShowToolIcon(oldTool3, oldBg3, oldTick3);

                    var oldCanvas3 = oldTool3.GetComponent(UnityEngine.CanvasGroup);
                    if (UnityEngine.MonoBehaviour.op_Equality(oldCanvas3, null)) {
                        oldCanvas3 = oldTool3.AddComponent(UnityEngine.CanvasGroup);
                    }

                    DG.Tweening.ShortcutExtensions.DOKill(oldCanvas3);
                    oldCanvas3.alpha = 0.0;
                    DG.Tweening.TweenSettingsExtensions.SetEase$2(DG.Tweening.Core.TweenerCore$3(System.Single,System.Single,DG.Tweening.Plugins.Options.FloatOptions), DG.Tweening.DOTweenModuleUI.DOFade(oldCanvas3, 1.0, this.toolMoveDuration), DG.Tweening.Ease.OutCubic);

                    // There is a real next tool, so the last-tool placeholder stays hidden
                    this.HideTool4();
                } else {
                    this.HideToolIcon(oldTool3, oldBg3, oldTick3);

                    // The tool sliding into "current" is the last one: bring in the
                    // star placeholder the same way a real next tool would arrive
                    this.ShowTool4Animated();
                }

                // =========================================================
                // STEP 3: IMPACT! PUSH, FADE, AND SCALE DOWN TOOL 1
                // =========================================================

                var impactDelay = this.toolMoveDuration * 0.9;
                var pushDuration = this.toolMoveDuration * 0.75;

                DG.Tweening.DOVirtual.DelayedCall(impactDelay, Bridge.fn.bind(this, function () {
                    if (UnityEngine.Component.op_Inequality(oldTool1Rect, null)) {
                        // Push Tool 1 further to the left
                        var pushedPosition = this.target1.anchoredPosition.$clone().add( new pc.Vec2( -this.pushOffset, 0.0 ) );
                        DG.Tweening.TweenSettingsExtensions.SetEase$2(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.Options.VectorOptions), DG.Tweening.DOTweenModuleUI.DOAnchorPos(oldTool1Rect, pushedPosition.$clone(), pushDuration), DG.Tweening.Ease.OutCubic);
                        DG.Tweening.TweenSettingsExtensions.SetEase$2(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,UnityEngine.Vector3,DG.Tweening.Plugins.Options.VectorOptions), DG.Tweening.ShortcutExtensions.DOScale$1(oldTool1Rect, this.target1.localScale.$clone().clone().scale( 0.5 ), pushDuration), DG.Tweening.Ease.OutCubic);
                    }

                    var oldCanvas1 = oldTool1.GetComponent(UnityEngine.CanvasGroup);
                    if (UnityEngine.MonoBehaviour.op_Equality(oldCanvas1, null)) {
                        oldCanvas1 = oldTool1.AddComponent(UnityEngine.CanvasGroup);
                    }

                    DG.Tweening.ShortcutExtensions.DOKill(oldCanvas1);
                    DG.Tweening.TweenSettingsExtensions.OnComplete(DG.Tweening.Core.TweenerCore$3(System.Single,System.Single,DG.Tweening.Plugins.Options.FloatOptions), DG.Tweening.TweenSettingsExtensions.SetEase$2(DG.Tweening.Core.TweenerCore$3(System.Single,System.Single,DG.Tweening.Plugins.Options.FloatOptions), DG.Tweening.DOTweenModuleUI.DOFade(oldCanvas1, 0.0, pushDuration), DG.Tweening.Ease.OutQuad), Bridge.fn.bind(this, function () {
                        // Clean up Tool 1 after it gets shoved off and faded
                        this.HideToolIcon(oldTool1, oldBg1, oldTick1);

                        // Re-prime its grey: this object is now the hidden/future slot
                        this.SetGreyInstant(oldGrey1, 1.0);
                    }));
                }));

                // =========================================================
                // ROTATE VIRTUAL POINTERS FOR THE 3 REUSABLE OBJECTS
                // =========================================================

                this.toolIcon1 = oldTool2;
                this.toolIcon2 = oldTool3;
                this.toolIcon3 = oldTool1;

                this.tool1Icon = oldIcon2;
                this.tool2Icon = oldIcon3;
                this.tool3Icon = oldIcon1;

                this.tool1Bg = oldBg2;
                this.tool2Bg = oldBg3;
                this.tool3Bg = oldBg1;

                this.tool1Tick = oldTick2;
                this.tool2Tick = oldTick3;
                this.tool3Tick = oldTick1;

                this.tool1BgGrey = oldGrey2;
                this.tool2BgGrey = oldGrey3;
                this.tool3BgGrey = oldGrey1;

                this.nextToolIndex = (this.currentIndex + 2) | 0;
                DG.Tweening.TweenSettingsExtensions.SetEase$2(DG.Tweening.Core.TweenerCore$3(System.Single,System.Single,DG.Tweening.Plugins.Options.FloatOptions), DG.Tweening.DOTweenModuleUI.DOFillAmount(this.progressBar, 0, this.toolMoveDuration + 0.05), DG.Tweening.Ease.InOutQuad);
                this.progressText.text = "0%";
            },
            /*UI_Manager.SetProgressBarPos end.*/

            /*UI_Manager.SetProgressBar start.*/
            SetProgressBar: function (progress, duration) {
if ( TRACE ) { TRACE( "UI_Manager#SetProgressBar", this ); }

                if (duration === void 0) { duration = 0.25; }
                if (UnityEngine.MonoBehaviour.op_Inequality(this.progressBar, null)) {
                    var clamped = Math.max(0, Math.min(1, progress));

                    DG.Tweening.DOTweenModuleUI.DOFillAmount(this.progressBar, clamped, duration);

                    var prog = Bridge.Int.clip32(clamped * 100);
                    this.progressText.text = prog + "%";
                }

                if (progress >= 1.0 && !this.showTick) {
                    this.showTick = true;

                    this.progressText.text = "100%";

                    DG.Tweening.DOTweenModuleUI.DOFillAmount(this.progressBar, 1.0, duration);

                    DG.Tweening.DOVirtual.DelayedCall(duration, Bridge.fn.bind(this, function () {
                        this.ShowToolTick(this.currentIndex);

                        AudioController.instance.PlaySfx(3, 3, 0.0);
                    }));
                }
            },
            /*UI_Manager.SetProgressBar end.*/

            /*UI_Manager.SetProgressBarInstant start.*/
            SetProgressBarInstant: function (progress) {
if ( TRACE ) { TRACE( "UI_Manager#SetProgressBarInstant", this ); }

                if (UnityEngine.MonoBehaviour.op_Inequality(this.progressBar, null)) {
                    var clamped = Math.max(0, Math.min(1, progress));

                    DG.Tweening.DOTweenModuleUI.DOFillAmount(this.progressBar, clamped, 0.01);
                }
            },
            /*UI_Manager.SetProgressBarInstant end.*/

            /*UI_Manager.SetupToolIconReferences start.*/
            SetupToolIconReferences: function () {
if ( TRACE ) { TRACE( "UI_Manager#SetupToolIconReferences", this ); }

                if (UnityEngine.GameObject.op_Inequality(this.toolIcon1, null)) {
                    this.tool1Icon = this.FindIconImage(this.toolIcon1);
                    this.tool1Bg = this.FindChildObject(this.toolIcon1, "Bg");
                    this.tool1Tick = this.FindChildObject(this.toolIcon1, "Tick");
                    this.tool1BgGrey = this.FindGreyImage(this.toolIcon1);
                }

                if (UnityEngine.GameObject.op_Inequality(this.toolIcon2, null)) {
                    this.tool2Icon = this.FindIconImage(this.toolIcon2);
                    this.tool2Bg = this.FindChildObject(this.toolIcon2, "Bg");
                    this.tool2Tick = this.FindChildObject(this.toolIcon2, "Tick");
                    this.tool2BgGrey = this.FindGreyImage(this.toolIcon2);
                }

                if (UnityEngine.GameObject.op_Inequality(this.toolIcon3, null)) {
                    this.tool3Icon = this.FindIconImage(this.toolIcon3);
                    this.tool3Bg = this.FindChildObject(this.toolIcon3, "Bg");
                    this.tool3Tick = this.FindChildObject(this.toolIcon3, "Tick");
                    this.tool3BgGrey = this.FindGreyImage(this.toolIcon3);
                }
            },
            /*UI_Manager.SetupToolIconReferences end.*/

            /*UI_Manager.FindIconImage start.*/
            FindIconImage: function (toolObject) {
if ( TRACE ) { TRACE( "UI_Manager#FindIconImage", this ); }

                if (UnityEngine.GameObject.op_Equality(toolObject, null)) {
                    return null;
                }

                var iconTransform = toolObject.transform.Find("Icon");

                if (UnityEngine.Component.op_Inequality(iconTransform, null)) {
                    var image = iconTransform.GetComponent(UnityEngine.UI.Image);

                    if (UnityEngine.MonoBehaviour.op_Inequality(image, null)) {
                        return image;
                    }
                }

                var images = toolObject.GetComponentsInChildren(UnityEngine.UI.Image, true);

                for (var i = 0; i < images.length; i = (i + 1) | 0) {
                    if (Bridge.referenceEquals(images[i].gameObject.name, "Icon")) {
                        return images[i];
                    }
                }

                return null;
            },
            /*UI_Manager.FindIconImage end.*/

            /*UI_Manager.FindGreyImage start.*/
            FindGreyImage: function (toolObject) {
if ( TRACE ) { TRACE( "UI_Manager#FindGreyImage", this ); }

                var grey = this.FindChildObject(toolObject, this.greyBgChildName);

                if (UnityEngine.GameObject.op_Equality(grey, null)) {
                    return null;
                }

                return grey.GetComponent(UnityEngine.UI.Image);
            },
            /*UI_Manager.FindGreyImage end.*/

            /*UI_Manager.SetGreyInstant start.*/
            SetGreyInstant: function (grey, alpha) {
if ( TRACE ) { TRACE( "UI_Manager#SetGreyInstant", this ); }

                if (UnityEngine.MonoBehaviour.op_Equality(grey, null)) {
                    return;
                }

                DG.Tweening.ShortcutExtensions.DOKill(grey);

                grey.gameObject.SetActive(true);

                var color = grey.color.$clone();
                color.a = alpha;
                grey.color = color.$clone();
            },
            /*UI_Manager.SetGreyInstant end.*/

            /*UI_Manager.FadeGrey start.*/
            FadeGrey: function (grey, toAlpha, duration) {
if ( TRACE ) { TRACE( "UI_Manager#FadeGrey", this ); }

                if (UnityEngine.MonoBehaviour.op_Equality(grey, null)) {
                    return;
                }

                DG.Tweening.ShortcutExtensions.DOKill(grey);

                grey.gameObject.SetActive(true);
                DG.Tweening.TweenSettingsExtensions.SetEase$2(DG.Tweening.Core.TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions), DG.Tweening.DOTweenModuleUI.DOFade$2(grey, toAlpha, duration), DG.Tweening.Ease.OutQuad);
            },
            /*UI_Manager.FadeGrey end.*/

            /*UI_Manager.FindChildObject start.*/
            FindChildObject: function (parent, childName) {
if ( TRACE ) { TRACE( "UI_Manager#FindChildObject", this ); }

                if (UnityEngine.GameObject.op_Equality(parent, null)) {
                    return null;
                }

                var child = parent.transform.Find(childName);

                if (UnityEngine.Component.op_Inequality(child, null)) {
                    return child.gameObject;
                }

                var children = parent.GetComponentsInChildren(UnityEngine.Transform, true);

                for (var i = 0; i < children.length; i = (i + 1) | 0) {
                    if (Bridge.referenceEquals(children[i].gameObject.name, childName)) {
                        return children[i].gameObject;
                    }
                }

                return null;
            },
            /*UI_Manager.FindChildObject end.*/

            /*UI_Manager.SetToolIcon start.*/
            SetToolIcon: function (toolObject, iconImage, bg, tick, sprite) {
if ( TRACE ) { TRACE( "UI_Manager#SetToolIcon", this ); }

                if (UnityEngine.GameObject.op_Equality(toolObject, null)) {
                    return;
                }

                if (UnityEngine.MonoBehaviour.op_Inequality(iconImage, null)) {
                    iconImage.sprite = sprite;
                }

                if (UnityEngine.GameObject.op_Inequality(bg, null)) {
                    bg.SetActive(true);
                }

                if (UnityEngine.MonoBehaviour.op_Inequality(iconImage, null)) {
                    iconImage.gameObject.SetActive(true);
                }

                if (UnityEngine.GameObject.op_Inequality(tick, null)) {
                    tick.SetActive(false);
                }

                toolObject.SetActive(true);

                var canvas = toolObject.GetComponent(UnityEngine.CanvasGroup);

                if (UnityEngine.MonoBehaviour.op_Inequality(canvas, null)) {
                    canvas.alpha = 1.0;
                }
            },
            /*UI_Manager.SetToolIcon end.*/

            /*UI_Manager.HideToolIcon start.*/
            HideToolIcon: function (toolObject, bg, tick) {
if ( TRACE ) { TRACE( "UI_Manager#HideToolIcon", this ); }

                if (UnityEngine.GameObject.op_Equality(toolObject, null)) {
                    return;
                }

                if (UnityEngine.GameObject.op_Inequality(bg, null)) {
                    bg.SetActive(false);
                }

                if (UnityEngine.GameObject.op_Inequality(tick, null)) {
                    tick.SetActive(false);
                }

                var icon = this.FindIconImage(toolObject);

                if (UnityEngine.MonoBehaviour.op_Inequality(icon, null)) {
                    icon.gameObject.SetActive(false);
                }

                var canvas = toolObject.GetComponent(UnityEngine.CanvasGroup);

                if (UnityEngine.MonoBehaviour.op_Inequality(canvas, null)) {
                    canvas.alpha = 0.0;
                }

                toolObject.SetActive(false);
            },
            /*UI_Manager.HideToolIcon end.*/

            /*UI_Manager.ShowToolIcon start.*/
            ShowToolIcon: function (toolObject, bg, tick) {
if ( TRACE ) { TRACE( "UI_Manager#ShowToolIcon", this ); }

                if (UnityEngine.GameObject.op_Equality(toolObject, null)) {
                    return;
                }

                toolObject.SetActive(true);

                if (UnityEngine.GameObject.op_Inequality(bg, null)) {
                    bg.SetActive(true);
                }

                var icon = this.FindIconImage(toolObject);

                if (UnityEngine.MonoBehaviour.op_Inequality(icon, null)) {
                    icon.gameObject.SetActive(true);
                }

                if (UnityEngine.GameObject.op_Inequality(tick, null)) {
                    tick.SetActive(false);
                }
            },
            /*UI_Manager.ShowToolIcon end.*/

            /*UI_Manager.ShowTool4Instant start.*/
            ShowTool4Instant: function () {
if ( TRACE ) { TRACE( "UI_Manager#ShowTool4Instant", this ); }

                if (UnityEngine.GameObject.op_Equality(this.toolIcon4, null)) {
                    return;
                }

                var rect = this.toolIcon4.GetComponent(UnityEngine.RectTransform);

                if (UnityEngine.Component.op_Inequality(rect, null)) {
                    DG.Tweening.ShortcutExtensions.DOKill(rect);
                    rect.anchoredPosition = this.target2.anchoredPosition.$clone();
                }

                var canvas = this.toolIcon4.GetComponent(UnityEngine.CanvasGroup);
                if (UnityEngine.MonoBehaviour.op_Equality(canvas, null)) {
                    canvas = this.toolIcon4.AddComponent(UnityEngine.CanvasGroup);
                }

                DG.Tweening.ShortcutExtensions.DOKill(canvas);
                canvas.alpha = 1.0;

                this.toolIcon4.SetActive(true);
            },
            /*UI_Manager.ShowTool4Instant end.*/

            /*UI_Manager.ShowTool4Animated start.*/
            ShowTool4Animated: function () {
if ( TRACE ) { TRACE( "UI_Manager#ShowTool4Animated", this ); }

                if (UnityEngine.GameObject.op_Equality(this.toolIcon4, null)) {
                    return;
                }

                this.toolIcon4.SetActive(true);

                var rect = this.toolIcon4.GetComponent(UnityEngine.RectTransform);

                if (UnityEngine.Component.op_Inequality(rect, null)) {
                    DG.Tweening.ShortcutExtensions.DOKill(rect);

                    // Same slide-in approach as a real incoming next tool
                    var slideInStartPos = this.target2.anchoredPosition.$clone().add( new pc.Vec2( this.pushOffset, 0.0 ) );
                    rect.anchoredPosition = slideInStartPos.$clone();
                    DG.Tweening.TweenSettingsExtensions.SetEase$2(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.Options.VectorOptions), DG.Tweening.DOTweenModuleUI.DOAnchorPos(rect, this.target2.anchoredPosition.$clone(), this.toolMoveDuration), DG.Tweening.Ease.OutCubic);
                }

                var canvas = this.toolIcon4.GetComponent(UnityEngine.CanvasGroup);
                if (UnityEngine.MonoBehaviour.op_Equality(canvas, null)) {
                    canvas = this.toolIcon4.AddComponent(UnityEngine.CanvasGroup);
                }

                DG.Tweening.ShortcutExtensions.DOKill(canvas);
                canvas.alpha = 0.0;
                DG.Tweening.TweenSettingsExtensions.SetEase$2(DG.Tweening.Core.TweenerCore$3(System.Single,System.Single,DG.Tweening.Plugins.Options.FloatOptions), DG.Tweening.DOTweenModuleUI.DOFade(canvas, 1.0, this.toolMoveDuration), DG.Tweening.Ease.OutCubic);
            },
            /*UI_Manager.ShowTool4Animated end.*/

            /*UI_Manager.HideTool4 start.*/
            HideTool4: function () {
if ( TRACE ) { TRACE( "UI_Manager#HideTool4", this ); }

                if (UnityEngine.GameObject.op_Equality(this.toolIcon4, null)) {
                    return;
                }

                var rect = this.toolIcon4.GetComponent(UnityEngine.RectTransform);
                if (UnityEngine.Component.op_Inequality(rect, null)) {
                    DG.Tweening.ShortcutExtensions.DOKill(rect);
                }

                var canvas = this.toolIcon4.GetComponent(UnityEngine.CanvasGroup);
                if (UnityEngine.MonoBehaviour.op_Inequality(canvas, null)) {
                    DG.Tweening.ShortcutExtensions.DOKill(canvas);
                }

                this.toolIcon4.SetActive(false);
            },
            /*UI_Manager.HideTool4 end.*/

            /*UI_Manager.ShowToolTick start.*/
            ShowToolTick: function (index) {
if ( TRACE ) { TRACE( "UI_Manager#ShowToolTick", this ); }

                // The completed tool is ALWAYS the tool currently
                // occupying the LEFT / target1 position.

                if (UnityEngine.GameObject.op_Inequality(this.tool1Tick, null)) {
                    this.tool1Tick.SetActive(true);
                }
            },
            /*UI_Manager.ShowToolTick end.*/

            /*UI_Manager.PauseState start.*/
            PauseState: function (state) {
if ( TRACE ) { TRACE( "UI_Manager#PauseState", this ); }

                if (GameManager.instance.checkForDrag()) {
                    return;
                }


                if (this.m_LastPressTime + this.m_PressDelay > UnityEngine.Time.unscaledTime) {
                    return;
                }

                this.m_LastPressTime = UnityEngine.Time.unscaledTime;

                this.isPauseActive = state;

                if (state) {
                    this.PauseCanvasGroup.alpha = 0.0;

                    this.TopBarAnim.DOPlayBackwards();

                    DG.Tweening.DOVirtual.DelayedCall(0.2, Bridge.fn.bind(this, function () {
                        DG.Tweening.ShortcutExtensions.DOKill(this.PauseCanvasGroup);
                        DG.Tweening.DOTweenModuleUI.DOFade(this.PauseCanvasGroup, 1.0, 0.25);

                        this.PausePanel.SetActive(true);

                        DG.Tweening.ShortcutExtensions.DOKill(this.PausePopUp.transform);
                        this.PausePopUp.transform.localScale = new pc.Vec3( 0.8, 0.8, 0.8 );
                        DG.Tweening.TweenSettingsExtensions.SetEase$2(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,UnityEngine.Vector3,DG.Tweening.Plugins.Options.VectorOptions), DG.Tweening.ShortcutExtensions.DOScale(this.PausePopUp.transform, 1.0, 0.25), DG.Tweening.Ease.OutBack);

                        GameManager.instance.isPaused = true;

                        GameManager.instance.MuteLevelAudio();
                    }));
                } else {
                    DG.Tweening.ShortcutExtensions.DOKill(this.PauseCanvasGroup);
                    DG.Tweening.TweenSettingsExtensions.SetDelay(DG.Tweening.Core.TweenerCore$3(System.Single,System.Single,DG.Tweening.Plugins.Options.FloatOptions), DG.Tweening.DOTweenModuleUI.DOFade(this.PauseCanvasGroup, 0.0, 0.15), 0.25);

                    DG.Tweening.ShortcutExtensions.DOKill(this.PausePopUp.transform);
                    this.PausePopUp.transform.localScale = new pc.Vec3( 1.0, 1.0, 1.0 );
                    DG.Tweening.TweenSettingsExtensions.OnComplete(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,UnityEngine.Vector3,DG.Tweening.Plugins.Options.VectorOptions), DG.Tweening.TweenSettingsExtensions.SetEase$2(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,UnityEngine.Vector3,DG.Tweening.Plugins.Options.VectorOptions), DG.Tweening.ShortcutExtensions.DOScale(this.PausePopUp.transform, 0.8, 0.35), DG.Tweening.Ease.InBack), Bridge.fn.bind(this, function () {
                        GameManager.instance.UnMuteLevelAudio();

                        GameManager.instance.isPaused = false;

                        this.PausePanel.SetActive(false);

                        this.TopBarAnim.DORestart();
                    }));
                }
            },
            /*UI_Manager.PauseState end.*/

            /*UI_Manager.RemoveAdsState start.*/
            RemoveAdsState: function (state) {
if ( TRACE ) { TRACE( "UI_Manager#RemoveAdsState", this ); }

                return;
            },
            /*UI_Manager.RemoveAdsState end.*/

            /*UI_Manager.RateUsState start.*/
            RateUsState: function (state) {
if ( TRACE ) { TRACE( "UI_Manager#RateUsState", this ); }

                if (this.m_LastPressTime + this.m_PressDelay > UnityEngine.Time.unscaledTime) {
                    return;
                }

                this.m_LastPressTime = UnityEngine.Time.unscaledTime;

                if (state) {
                    this.TopBarAnim.DOPlayBackwards();

                    DG.Tweening.DOVirtual.DelayedCall(0.2, Bridge.fn.bind(this, function () {
                        this.RateUsPanel.SetActive(true);

                        DG.Tweening.ShortcutExtensions.DOKill(this.RateUsPopUp.transform);
                        this.RateUsPopUp.transform.localScale = pc.Vec3.ZERO.clone();
                        DG.Tweening.TweenSettingsExtensions.SetEase$2(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,UnityEngine.Vector3,DG.Tweening.Plugins.Options.VectorOptions), DG.Tweening.ShortcutExtensions.DOScale(this.RateUsPopUp.transform, 1.0, 0.5), DG.Tweening.Ease.OutBack);

                        GameManager.instance.isPaused = true;

                        GameManager.instance.MuteLevelAudio();
                    }));
                } else {
                    DG.Tweening.ShortcutExtensions.DOKill(this.RateUsPopUp.transform);
                    this.RateUsPopUp.transform.localScale = new pc.Vec3( 1.0, 1.0, 1.0 );
                    DG.Tweening.TweenSettingsExtensions.OnComplete(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,UnityEngine.Vector3,DG.Tweening.Plugins.Options.VectorOptions), DG.Tweening.TweenSettingsExtensions.SetEase$2(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,UnityEngine.Vector3,DG.Tweening.Plugins.Options.VectorOptions), DG.Tweening.ShortcutExtensions.DOScale(this.RateUsPopUp.transform, 0, 0.5), DG.Tweening.Ease.InBack), Bridge.fn.bind(this, function () {
                        GameManager.instance.UnMuteLevelAudio();

                        GameManager.instance.isPaused = false;

                        this.RateUsPanel.SetActive(false);

                        this.TopBarAnim.DORestart();
                    }));
                }
            },
            /*UI_Manager.RateUsState end.*/

            /*UI_Manager.ShowCompleteParticles start.*/
            ShowCompleteParticles: function () {
if ( TRACE ) { TRACE( "UI_Manager#ShowCompleteParticles", this ); }

                if (UnityEngine.MonoBehaviour.op_Inequality(AudioController.instance, null)) {
                    AudioController.instance.PlaySfx(0, 0, 0);
                }

                if (UnityEngine.GameObject.op_Inequality(this.CompleteParticles, null)) {
                    this.CompleteParticles.SetActive(true);
                }
            },
            /*UI_Manager.ShowCompleteParticles end.*/

            /*UI_Manager.Complete start.*/
            Complete: function (duration) {
if ( TRACE ) { TRACE( "UI_Manager#Complete", this ); }

                if (duration === void 0) { duration = 2.0; }
                this.levelCompleted = true;

                if (UnityEngine.GameObject.op_Inequality(this.MainPanel, null)) {
                    this.MainPanel.SetActive(false);
                }

                if (UnityEngine.GameObject.op_Inequality(this.CompleteParticles, null)) {
                    this.CompleteParticles.SetActive(true);
                }

                DG.Tweening.DOVirtual.DelayedCall(duration, Bridge.fn.bind(this, function () {
                    if (UnityEngine.GameObject.op_Inequality(this.CompletePanel, null)) {
                        this.CompletePanel.SetActive(true);
                    }
                }));

                if (UnityEngine.MonoBehaviour.op_Inequality(this.LevelIcon, null) && UnityEngine.MonoBehaviour.op_Inequality(GameManager.instance, null) && UnityEngine.MonoBehaviour.op_Inequality(GameManager.instance.currentLevel, null)) {
                    this.LevelIcon.sprite = GameManager.instance.currentLevel.LevelIcon;
                }
            },
            /*UI_Manager.Complete end.*/

            /*UI_Manager.FadeAnim start.*/
            FadeAnim: function (duration, innerDelay) {
if ( TRACE ) { TRACE( "UI_Manager#FadeAnim", this ); }

                this.Fade_Img.gameObject.SetActive(true);

                DG.Tweening.ShortcutExtensions.DOKill(this.Fade_Img);
                DG.Tweening.DOTweenModuleUI.DOFade$2(this.Fade_Img, 0, 0.001);
                DG.Tweening.TweenSettingsExtensions.OnComplete(DG.Tweening.Core.TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions), DG.Tweening.TweenSettingsExtensions.SetDelay(DG.Tweening.Core.TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions), DG.Tweening.TweenSettingsExtensions.SetEase$2(DG.Tweening.Core.TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions), DG.Tweening.DOTweenModuleUI.DOFade$2(this.Fade_Img, 1, duration), DG.Tweening.Ease.Linear), 0.01), Bridge.fn.bind(this, function () {
                    DG.Tweening.ShortcutExtensions.DOKill(this.Fade_Img);
                    DG.Tweening.TweenSettingsExtensions.OnComplete(DG.Tweening.Core.TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions), DG.Tweening.TweenSettingsExtensions.SetDelay(DG.Tweening.Core.TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions), DG.Tweening.TweenSettingsExtensions.SetEase$2(DG.Tweening.Core.TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions), DG.Tweening.DOTweenModuleUI.DOFade$2(this.Fade_Img, 0, duration), DG.Tweening.Ease.Linear), innerDelay), Bridge.fn.bind(this, function () {
                        this.Fade_Img.gameObject.SetActive(false);
                    }));
                }));
            },
            /*UI_Manager.FadeAnim end.*/

            /*UI_Manager.ShowClockProgress start.*/
            ShowClockProgress: function (duration) {
if ( TRACE ) { TRACE( "UI_Manager#ShowClockProgress", this ); }

                this.ShowClockProgress$1(duration, 0.0);
            },
            /*UI_Manager.ShowClockProgress end.*/

            /*UI_Manager.ShowClockProgress$1 start.*/
            ShowClockProgress$1: function (duration, startFill) {
if ( TRACE ) { TRACE( "UI_Manager#ShowClockProgress$1", this ); }

                if (UnityEngine.MonoBehaviour.op_Inequality(this.clockProgressFill, null)) {
                    DG.Tweening.ShortcutExtensions.DOKill(this.clockProgressFill);
                    this.clockProgressFill.fillAmount = Math.max(0, Math.min(1, startFill));
                }

                if (UnityEngine.Component.op_Inequality(this.clockAudio, null)) {
                    this.clockAudio.Play();
                }

                if (UnityEngine.GameObject.op_Inequality(this.clockProgress, null)) {
                    this.clockProgress.SetActive(true);
                }

                var remaining = UnityEngine.Mathf.Max(0.01, duration);

                if (UnityEngine.MonoBehaviour.op_Inequality(this.clockProgressFill, null)) {
                    DG.Tweening.TweenSettingsExtensions.OnComplete(DG.Tweening.Core.TweenerCore$3(System.Single,System.Single,DG.Tweening.Plugins.Options.FloatOptions), DG.Tweening.DOTweenModuleUI.DOFillAmount(this.clockProgressFill, 1, remaining), Bridge.fn.cacheBind(this, this.HideClockProgress));
                }
            },
            /*UI_Manager.ShowClockProgress$1 end.*/

            /*UI_Manager.HideClockProgress start.*/
            HideClockProgress: function () {
if ( TRACE ) { TRACE( "UI_Manager#HideClockProgress", this ); }

                if (UnityEngine.MonoBehaviour.op_Inequality(this.clockProgressFill, null)) {
                    DG.Tweening.ShortcutExtensions.DOKill(this.clockProgressFill);
                    this.clockProgressFill.fillAmount = 0;
                }

                if (UnityEngine.Component.op_Inequality(this.clockAudio, null)) {
                    this.clockAudio.Stop();
                }

                if (UnityEngine.GameObject.op_Inequality(this.clockProgress, null)) {
                    this.clockProgress.SetActive(false);
                }
            },
            /*UI_Manager.HideClockProgress end.*/


        },
        overloads: {
            "ShowClockProgress(float, float)": "ShowClockProgress$1"
        }
    });
    /*UI_Manager end.*/

    /*ZoomPos start.*/
    Bridge.define("ZoomPos", {
        fields: {
            CameraPos: null,
            CameraFOV: 0
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "ZoomPos#init", this ); }

                this.CameraPos = new UnityEngine.Vector3();
                this.CameraPos = new pc.Vec3( 0, 0, -10.0 );
                this.CameraFOV = 4.2;
            }
        }
    });
    /*ZoomPos end.*/

    /*GameManagerPlayable start.*/
    /**
     * Playable-scene copy of gameplay manager. Original GameManager.cs is unchanged.
     Complete / last step → routes into PlayableCTA instead of the full-game complete UI, so
     wizard-built and manually-triggered CTAs both go through the same component (end card,
     input-block toggle, tap-to-refire all live there — see PlayableCTA.cs).
     Particles live here instead, because they're tied to actual gameplay progress, not to
     however the CTA happened to fire:
       - endParticles play on Complete() — genuine level completion, once.
       - stepCompleteParticles play via PlayStepComplete(), called from each step's own
         StepNComplete()/StepNDone() method in the level script (repeats every step).
     *
     * @public
     * @class GameManagerPlayable
     * @augments GameManager
     */
    Bridge.define("GameManagerPlayable", {
        inherits: [GameManager],
        statics: {
            fields: {
                active: null
            },
            methods: {
                /*GameManagerPlayable.PlayStepComplete:static start.*/
                /**
                 * Call from a step's own StepNComplete()/StepNDone() method to play the
                 confetti-cannon burst for that step. Safe to call even without a GameManagerPlayable
                 in the scene.
                 *
                 * @static
                 * @public
                 * @this GameManagerPlayable
                 * @memberof GameManagerPlayable
                 * @return  {void}
                 */
                PlayStepComplete: function () {
if ( TRACE ) { TRACE( "GameManagerPlayable#PlayStepComplete", this ); }

                    if (UnityEngine.MonoBehaviour.op_Inequality(GameManagerPlayable.active, null)) {
                        GameManagerPlayable.PlayParticles(GameManagerPlayable.active.stepCompleteParticles);
                    }
                },
                /*GameManagerPlayable.PlayStepComplete:static end.*/

                /*GameManagerPlayable.PlayParticles:static start.*/
                PlayParticles: function (particles) {
if ( TRACE ) { TRACE( "GameManagerPlayable#PlayParticles", this ); }

                    if (UnityEngine.Component.op_Equality(particles, null)) {
                        return;
                    }

                    if (!particles.gameObject.activeSelf) {
                        particles.gameObject.SetActive(true);
                    }

                    particles.Play();
                },
                /*GameManagerPlayable.PlayParticles:static end.*/


            }
        },
        fields: {
            endParticles: null,
            stepCompleteParticles: null
        },
        methods: {
            /*GameManagerPlayable.OnEnable start.*/
            OnEnable: function () {
if ( TRACE ) { TRACE( "GameManagerPlayable#OnEnable", this ); }

                GameManagerPlayable.active = this;
            },
            /*GameManagerPlayable.OnEnable end.*/

            /*GameManagerPlayable.Complete start.*/
            Complete: function () {
if ( TRACE ) { TRACE( "GameManagerPlayable#Complete", this ); }

                if (this.isComplete) {
                    return;
                }

                if (this.timerCo != null) {
                    this.StopCoroutine$2(this.timerCo);
                }

                this.isPaused = true;
                this.isComplete = true;

                GameManagerPlayable.PlayParticles(this.endParticles);

                this.MuteLevelAudio();

                this.LunaDirect();
            },
            /*GameManagerPlayable.Complete end.*/

            /*GameManagerPlayable.LunaDirect start.*/
            LunaDirect: function () {
if ( TRACE ) { TRACE( "GameManagerPlayable#LunaDirect", this ); }

                PlayableCTA.FireNow();
            },
            /*GameManagerPlayable.LunaDirect end.*/


        }
    });
    /*GameManagerPlayable end.*/

    /*Level3_Crown_Playable start.*/
    Bridge.define("Level3_Crown_Playable", {
        inherits: [LevelData],
        fields: {
            MainZoom: null,
            View1: null,
            View2: null,
            ZoomStep1: null,
            ToolStep1: null,
            ToolStep1CameraFollow: null,
            Step1Col: null,
            DustSR_1: null,
            ZoomStep2: null,
            ToolStep2: null,
            ToolStep2CameraFollow: null,
            SRsToFadeOut_2: null,
            SpraySR_2: null,
            ZoomStep3: null,
            ToolStep3: null,
            ToolStep3CameraFollow: null,
            Step3Col: null,
            Mix: null,
            MixE: null,
            skipIconAdvance: false,
            isStep1Done: false,
            isStep2Done: false,
            isStep3Done: false
        },
        methods: {
            /*Level3_Crown_Playable.Start start.*/
            Start: function () {
if ( TRACE ) { TRACE( "Level3_Crown_Playable#Start", this ); }

                var $step = 0,
                    $jumpFromFinally,
                    $returnValue,
                    $async_e;

                var $enumerator = new Bridge.GeneratorEnumerator(Bridge.fn.bind(this, function () {
                    try {
                        for (;;) {
                            switch ($step) {
                                case 0: {
                                    this.LevelStart();

                                        UI_Manager.instance.InitializeTools(this.ToolIcons);

                                        CameraController.Instance.MoveCamera(this.MainZoom.CameraPos, this.MainZoom.CameraFOV, 0.01);

                                        $enumerator.current = new UnityEngine.WaitForSeconds(0.1);
                                        $step = 1;
                                        return true;
                                }
                                case 1: {
                                    // STEP 1
                                        this.Step1Col.SetActive(false);

                                        this.ToolStep1CameraFollow.enabled = false;

                                        // STEP 2
                                        this.ToolStep2CameraFollow.enabled = false;

                                        // STEP 3
                                        this.Step3Col.SetActive(false);

                                        this.MixE.SetActive(false);

                                        this.ToolStep3CameraFollow.enabled = false;



                                        // PLAYABLE: no save resume — same ForceComplete + StartStep as original switch.
                                        this.StartStep1();
                                        return false;

                                }
                                default: {
                                    return false;
                                }
                            }
                        }
                    } catch($async_e1) {
                        $async_e = System.Exception.create($async_e1);
                        throw $async_e;
                    }
                }));
                return $enumerator;
            },
            /*Level3_Crown_Playable.Start end.*/

            /*Level3_Crown_Playable.AdvanceProgressIcon start.*/
            AdvanceProgressIcon: function () {
if ( TRACE ) { TRACE( "Level3_Crown_Playable#AdvanceProgressIcon", this ); }

                if (this.skipIconAdvance) {
                    this.skipIconAdvance = false;

                    return;
                }

                UI_Manager.instance.SetProgressBarPos();
            },
            /*Level3_Crown_Playable.AdvanceProgressIcon end.*/

            /*Level3_Crown_Playable.StartStep1 start.*/
            StartStep1: function () {
if ( TRACE ) { TRACE( "Level3_Crown_Playable#StartStep1", this ); }

                CameraController.Instance.MoveCamera(this.ZoomStep1.CameraPos, this.ZoomStep1.CameraFOV);

                DG.Tweening.ShortcutExtensions.DOKill(this.ToolStep1.transform);
                DG.Tweening.TweenSettingsExtensions.OnComplete(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,UnityEngine.Vector3,DG.Tweening.Plugins.Options.VectorOptions), DG.Tweening.TweenSettingsExtensions.SetDelay(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,UnityEngine.Vector3,DG.Tweening.Plugins.Options.VectorOptions), DG.Tweening.ShortcutExtensions.DOLocalMoveX(this.ToolStep1.transform, 0.0, 0.5), 1.0), Bridge.fn.bind(this, function () {
                    this.ToolInputToggle(this.ToolStep1.gameObject, true);

                    this.ToolStep1CameraFollow.enabled = true;

                    this.Step1Col.SetActive(true);
                }));
            },
            /*Level3_Crown_Playable.StartStep1 end.*/

            /*Level3_Crown_Playable.Step1Done start.*/
            Step1Done: function () {
if ( TRACE ) { TRACE( "Level3_Crown_Playable#Step1Done", this ); }

                if (this.isStep1Done) {
                    return;
                }

                this.isStep1Done = true;

                this.Step1Col.SetActive(false);

                this.ToolStep1CameraFollow.enabled = false;

                this.ToolInputToggle(this.ToolStep1.gameObject, false);

                CameraController.Instance.MoveCamera(this.ZoomStep1.CameraPos, this.ZoomStep1.CameraFOV);

                DG.Tweening.ShortcutExtensions.DOKill(this.ToolStep1.transform);
                DG.Tweening.TweenSettingsExtensions.OnComplete(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,UnityEngine.Vector3,DG.Tweening.Plugins.Options.VectorOptions), DG.Tweening.TweenSettingsExtensions.SetDelay(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,UnityEngine.Vector3,DG.Tweening.Plugins.Options.VectorOptions), DG.Tweening.ShortcutExtensions.DOLocalMoveX(this.ToolStep1.transform, -10.0, 1.0), 0.25), Bridge.fn.bind(this, function () {
                    this.ToolStep1.gameObject.SetActive(false);
                }));

                this.Invoke("StartStep2", 1.0);

                try {
                    Statics.GA_CustomStringEvent("Lvl" + GameManager.instance.currentLevelNo + "_" + (this.levelName || "") + "_Step1_Comp");
                } catch ($e1) {
                    $e1 = System.Exception.create($e1);
                }
            },
            /*Level3_Crown_Playable.Step1Done end.*/

            /*Level3_Crown_Playable.ForceCompleteStep1 start.*/
            ForceCompleteStep1: function () {
if ( TRACE ) { TRACE( "Level3_Crown_Playable#ForceCompleteStep1", this ); }

                this.DustSR_1.SetActive(false);
            },
            /*Level3_Crown_Playable.ForceCompleteStep1 end.*/

            /*Level3_Crown_Playable.StartStep2 start.*/
            StartStep2: function () {
if ( TRACE ) { TRACE( "Level3_Crown_Playable#StartStep2", this ); }

                this.AdvanceProgressIcon();

                CameraController.Instance.MoveCamera(this.ZoomStep2.CameraPos, this.ZoomStep2.CameraFOV);

                DG.Tweening.ShortcutExtensions.DOKill(this.ToolStep2.transform);
                DG.Tweening.TweenSettingsExtensions.OnComplete(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,UnityEngine.Vector3,DG.Tweening.Plugins.Options.VectorOptions), DG.Tweening.TweenSettingsExtensions.SetDelay(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,UnityEngine.Vector3,DG.Tweening.Plugins.Options.VectorOptions), DG.Tweening.ShortcutExtensions.DOLocalMoveX(this.ToolStep2.transform, 0.4, 0.5), 1.0), Bridge.fn.bind(this, function () {
                    this.ToolInputToggle(this.ToolStep2.gameObject, true);

                    this.ToolStep2CameraFollow.enabled = true;
                }));
            },
            /*Level3_Crown_Playable.StartStep2 end.*/

            /*Level3_Crown_Playable.Step2Done start.*/
            Step2Done: function () {
if ( TRACE ) { TRACE( "Level3_Crown_Playable#Step2Done", this ); }

                if (this.isStep2Done) {
                    return;
                }

                this.isStep2Done = true;

                this.ToolStep2CameraFollow.enabled = false;

                this.ToolInputToggle(this.ToolStep2.gameObject, false);

                CameraController.Instance.MoveCamera(this.ZoomStep2.CameraPos, this.ZoomStep2.CameraFOV);

                DG.Tweening.ShortcutExtensions.DOKill(this.ToolStep2.transform);
                DG.Tweening.TweenSettingsExtensions.OnComplete(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,UnityEngine.Vector3,DG.Tweening.Plugins.Options.VectorOptions), DG.Tweening.TweenSettingsExtensions.SetDelay(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,UnityEngine.Vector3,DG.Tweening.Plugins.Options.VectorOptions), DG.Tweening.ShortcutExtensions.DOLocalMoveX(this.ToolStep2.transform, -10.0, 1.0), 0.25), Bridge.fn.bind(this, function () {
                    this.ToolStep2.gameObject.SetActive(false);
                }));

                DG.Tweening.DOVirtual.DelayedCall(1.0, Bridge.fn.bind(this, function () {
                    for (var i = 0; i < this.SRsToFadeOut_2.length; i = (i + 1) | 0) {
                        DG.Tweening.ShortcutExtensions.DOKill(this.SRsToFadeOut_2[i]);
                        DG.Tweening.DOTweenModuleSprite.DOFade(this.SRsToFadeOut_2[i], 0, 2.0);
                    }

                }));

                this.Invoke("StartStep3", 1.0);

                try {
                    Statics.GA_CustomStringEvent("Lvl" + GameManager.instance.currentLevelNo + "_" + (this.levelName || "") + "_Step2_Comp");
                } catch ($e1) {
                    $e1 = System.Exception.create($e1);
                }
            },
            /*Level3_Crown_Playable.Step2Done end.*/

            /*Level3_Crown_Playable.ForceCompleteStep2 start.*/
            ForceCompleteStep2: function () {
if ( TRACE ) { TRACE( "Level3_Crown_Playable#ForceCompleteStep2", this ); }

                this.ForceCompleteStep1();

                this.SpraySR_2.material = GameManager.instance.DefaultMat;

                for (var i = 0; i < this.SRsToFadeOut_2.length; i = (i + 1) | 0) {
                    this.SRsToFadeOut_2[i].gameObject.SetActive(false);
                }
            },
            /*Level3_Crown_Playable.ForceCompleteStep2 end.*/

            /*Level3_Crown_Playable.StartStep3 start.*/
            StartStep3: function () {
if ( TRACE ) { TRACE( "Level3_Crown_Playable#StartStep3", this ); }

                this.AdvanceProgressIcon();

                CameraController.Instance.MoveCamera(this.ZoomStep3.CameraPos, this.ZoomStep3.CameraFOV);

                DG.Tweening.ShortcutExtensions.DOKill(this.ToolStep3.transform);
                DG.Tweening.TweenSettingsExtensions.OnComplete(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,UnityEngine.Vector3,DG.Tweening.Plugins.Options.VectorOptions), DG.Tweening.TweenSettingsExtensions.SetDelay(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,UnityEngine.Vector3,DG.Tweening.Plugins.Options.VectorOptions), DG.Tweening.ShortcutExtensions.DOLocalMoveX(this.ToolStep3.transform, 0.0, 0.5), 1.0), Bridge.fn.bind(this, function () {
                    this.ToolInputToggle(this.ToolStep3.gameObject, true);

                    this.ToolStep3CameraFollow.enabled = true;

                    this.Step3Col.SetActive(true);
                }));
            },
            /*Level3_Crown_Playable.StartStep3 end.*/

            /*Level3_Crown_Playable.Step3Done start.*/
            Step3Done: function () {
if ( TRACE ) { TRACE( "Level3_Crown_Playable#Step3Done", this ); }

                if (this.isStep3Done) {
                    return;
                }

                this.isStep3Done = true;

                this.Step3Col.SetActive(false);

                this.ToolStep3CameraFollow.enabled = false;

                this.ToolInputToggle(this.ToolStep3.gameObject, false);

                CameraController.Instance.MoveCamera(this.ZoomStep3.CameraPos, this.ZoomStep3.CameraFOV);

                DG.Tweening.ShortcutExtensions.DOKill(this.ToolStep3.transform);
                DG.Tweening.TweenSettingsExtensions.OnComplete(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,UnityEngine.Vector3,DG.Tweening.Plugins.Options.VectorOptions), DG.Tweening.TweenSettingsExtensions.SetDelay(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,UnityEngine.Vector3,DG.Tweening.Plugins.Options.VectorOptions), DG.Tweening.ShortcutExtensions.DOLocalMoveX(this.ToolStep3.transform, -10.0, 1.0), 0.25), Bridge.fn.bind(this, function () {
                    this.ToolStep3.gameObject.SetActive(false);
                }));

                DG.Tweening.DOVirtual.DelayedCall(1.0, Bridge.fn.bind(this, function () {
                    this.Mix.SetActive(false);
                    this.MixE.SetActive(true);

                }));

                CameraController.Instance.MoveCamera(this.MainZoom.CameraPos, this.MainZoom.CameraFOV);

                this.Invoke("LevelComplete", 1.5);

                try {
                    Statics.GA_CustomStringEvent("Lvl" + GameManager.instance.currentLevelNo + "_" + (this.levelName || "") + "_Step3_Comp");
                } catch ($e1) {
                    $e1 = System.Exception.create($e1);
                }
            },
            /*Level3_Crown_Playable.Step3Done end.*/

            /*Level3_Crown_Playable.ForceCompleteStep3 start.*/
            ForceCompleteStep3: function () {
if ( TRACE ) { TRACE( "Level3_Crown_Playable#ForceCompleteStep3", this ); }

                this.ForceCompleteStep2();

                this.Mix.SetActive(false);

                this.MixE.SetActive(true);
            },
            /*Level3_Crown_Playable.ForceCompleteStep3 end.*/


        }
    });
    /*Level3_Crown_Playable end.*/

    /*HalloweenCrownGameManager start.*/
    /**
     * Extends the existing three-step creative with its final water rinse.
     *
     * @public
     * @class HalloweenCrownGameManager
     * @augments GameManagerPlayable
     */
    Bridge.define("HalloweenCrownGameManager", {
        inherits: [GameManagerPlayable],
        fields: {
            rinse: null
        },
        methods: {
            /*HalloweenCrownGameManager.Complete start.*/
            Complete: function () {
if ( TRACE ) { TRACE( "HalloweenCrownGameManager#Complete", this ); }

                if (UnityEngine.MonoBehaviour.op_Inequality(this.rinse, null) && !this.rinse.Finished) {
                    this.rinse.Begin();
                    return;
                }
                GameManagerPlayable.prototype.Complete.call(this);
            },
            /*HalloweenCrownGameManager.Complete end.*/


        }
    });
    /*HalloweenCrownGameManager end.*/

    if ( MODULE_reflection ) {
    var $m = Bridge.setMetadata,
        $n = ["System","UnityEngine","UnityEngine.Audio","UnityEngine.Events","System.Collections","ScratchCardAsset","DG.Tweening","System.Collections.Generic","UnityEngine.UI","DG.Tweening.Core","DG.Tweening.Plugins.Core.PathCore","System.Globalization","DG.Tweening.Plugins.Options","UnityEngine.Rendering","ScratchCardAsset.Core","ScratchCardAsset.Core.Data"];

    /*AudioController start.*/
    $m("AudioController", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"Awake","t":8,"sn":"Awake","rt":$n[0].Void},{"a":2,"n":"PlayAnySfx","t":8,"pi":[{"n":"sfxSourceIndex","pt":$n[0].Int32,"ps":0},{"n":"anyClip","pt":$n[1].AudioClip,"ps":1},{"n":"delay","pt":$n[0].Single,"ps":2}],"sn":"PlayAnySfx","rt":$n[0].Void,"p":[$n[0].Int32,$n[1].AudioClip,$n[0].Single]},{"a":2,"n":"PlayBtnClickSfx","t":8,"sn":"PlayBtnClickSfx","rt":$n[0].Void},{"a":2,"n":"PlayBtnClickSfxGameplay","t":8,"sn":"PlayBtnClickSfxGameplay","rt":$n[0].Void},{"a":2,"n":"PlaySfx","t":8,"pi":[{"n":"sfxSourceIndex","pt":$n[0].Int32,"ps":0},{"n":"clipIndex","pt":$n[0].Int32,"ps":1},{"n":"delay","pt":$n[0].Single,"ps":2}],"sn":"PlaySfx","rt":$n[0].Void,"p":[$n[0].Int32,$n[0].Int32,$n[0].Single]},{"a":2,"n":"PlayUiClickSfx","t":8,"sn":"PlayUiClickSfx","rt":$n[0].Void},{"a":2,"n":"SetupThings","t":8,"sn":"SetupThings","rt":$n[0].Void},{"a":1,"n":"Start","t":8,"sn":"Start","rt":$n[0].Void},{"a":2,"n":"AllClips","t":4,"rt":System.Array.type(UnityEngine.AudioClip),"sn":"AllClips"},{"at":[new UnityEngine.SpaceAttribute.ctor()],"a":2,"n":"MainMixer","t":4,"rt":$n[2].AudioMixer,"sn":"MainMixer"},{"at":[new UnityEngine.SpaceAttribute.ctor(),new UnityEngine.SpaceAttribute.ctor()],"a":2,"n":"SfxSources","t":4,"rt":System.Array.type(UnityEngine.AudioSource),"sn":"SfxSources"},{"at":[new UnityEngine.SpaceAttribute.ctor(),new UnityEngine.SpaceAttribute.ctor()],"a":2,"n":"UiClick","t":4,"rt":$n[1].AudioClip,"sn":"UiClick"},{"a":2,"n":"UiClickSource","t":4,"rt":$n[1].AudioSource,"sn":"UiClickSource"},{"a":2,"n":"instance","is":true,"t":4,"rt":AudioController,"sn":"instance"}]}; }, $n);
    /*AudioController end.*/

    /*MusicSource start.*/
    $m("MusicSource", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"PlayMusic","t":8,"pi":[{"n":"musicClip","pt":$n[1].AudioClip,"ps":0},{"n":"volume","dv":0.5,"o":true,"pt":$n[0].Single,"ps":1}],"sn":"PlayMusic","rt":$n[0].Void,"p":[$n[1].AudioClip,$n[0].Single]},{"a":2,"n":"PlayMusicSmooth","t":8,"pi":[{"n":"musicClip","pt":$n[1].AudioClip,"ps":0},{"n":"volume","dv":0.5,"o":true,"pt":$n[0].Single,"ps":1}],"sn":"PlayMusicSmooth","rt":$n[0].Void,"p":[$n[1].AudioClip,$n[0].Single]},{"a":1,"n":"Start","t":8,"sn":"Start","rt":$n[0].Void},{"a":2,"n":"instance","is":true,"t":4,"rt":MusicSource,"sn":"instance"},{"at":[new UnityEngine.SpaceAttribute.ctor()],"a":2,"n":"source","t":4,"rt":$n[1].AudioSource,"sn":"source"}]}; }, $n);
    /*MusicSource end.*/

    /*SaveSystem start.*/
    $m("SaveSystem", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"Awake","t":8,"sn":"Awake","rt":$n[0].Void},{"a":1,"n":"EnsureAllLevelsExist","t":8,"sn":"EnsureAllLevelsExist","rt":$n[0].Void},{"a":2,"n":"EnsureReady","t":8,"sn":"EnsureReady","rt":$n[0].Void},{"a":1,"n":"EnsureSubLevels","t":8,"sn":"EnsureSubLevels","rt":$n[0].Void},{"at":[new UnityEngine.SpaceAttribute.ctor()],"a":2,"n":"DataFields","t":4,"rt":SaveDataFields,"sn":"DataFields"},{"a":2,"n":"Instance","is":true,"t":4,"rt":SaveSystem,"sn":"Instance"},{"a":1,"n":"MinSubLevels","is":true,"t":4,"rt":$n[0].Int32,"sn":"MinSubLevels","box":function ($v) { return Bridge.box($v, System.Int32);}},{"at":[new UnityEngine.SpaceAttribute.ctor()],"a":2,"n":"TotalLevels","t":4,"rt":$n[0].Int32,"sn":"TotalLevels","box":function ($v) { return Bridge.box($v, System.Int32);}},{"at":[new UnityEngine.SpaceAttribute.ctor()],"a":2,"n":"iAPShown","t":4,"rt":$n[0].Boolean,"sn":"iAPShown","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}}]}; }, $n);
    /*SaveSystem end.*/

    /*SaveDataFields start.*/
    $m("SaveDataFields", function () { return {"att":1056769,"a":2,"at":[new System.SerializableAttribute()],"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"at":[new UnityEngine.SpaceAttribute.ctor(),new UnityEngine.SpaceAttribute.ctor()],"a":2,"n":"AllLevels","t":4,"rt":System.Array.type(LevelSaveData),"sn":"AllLevels"},{"at":[new UnityEngine.SpaceAttribute.ctor(),new UnityEngine.SpaceAttribute.ctor()],"a":2,"n":"IAP_Removeads","t":4,"rt":$n[0].Boolean,"sn":"IAP_Removeads","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"at":[new UnityEngine.SpaceAttribute.ctor()],"a":2,"n":"NextlevelToStart","t":4,"rt":$n[0].Int32,"sn":"NextlevelToStart","box":function ($v) { return Bridge.box($v, System.Int32);}},{"at":[new UnityEngine.SpaceAttribute.ctor(),new UnityEngine.SpaceAttribute.ctor()],"a":2,"n":"comingFromGP","t":4,"rt":$n[0].Boolean,"sn":"comingFromGP","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"levelPartDone","t":4,"rt":$n[0].Int32,"sn":"levelPartDone","box":function ($v) { return Bridge.box($v, System.Int32);}},{"at":[new UnityEngine.HeaderAttribute("----------------------------  Levels Data  -----------------------------"),new UnityEngine.SpaceAttribute.ctor()],"a":2,"n":"levelToPlay","t":4,"rt":$n[0].Int32,"sn":"levelToPlay","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"mapTutorial","t":4,"rt":$n[0].Boolean,"sn":"mapTutorial","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"at":[new UnityEngine.SpaceAttribute.ctor(),new UnityEngine.SpaceAttribute.ctor()],"a":2,"n":"mapUnlocked","t":4,"rt":$n[0].Boolean,"sn":"mapUnlocked","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"partToPlay","t":4,"rt":$n[0].Int32,"sn":"partToPlay","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"sessionCount","t":4,"rt":$n[0].Int32,"sn":"sessionCount","box":function ($v) { return Bridge.box($v, System.Int32);}},{"at":[new UnityEngine.HeaderAttribute("----------------------------  Coins  -----------------------------"),new UnityEngine.SpaceAttribute.ctor()],"a":2,"n":"totalCoins","t":4,"rt":$n[0].Int32,"sn":"totalCoins","box":function ($v) { return Bridge.box($v, System.Int32);}}]}; }, $n);
    /*SaveDataFields end.*/

    /*SubLevelData start.*/
    $m("SubLevelData", function () { return {"att":1056769,"a":2,"at":[new System.SerializableAttribute()],"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"isCompleted","t":4,"rt":$n[0].Boolean,"sn":"isCompleted","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"isLocked","t":4,"rt":$n[0].Boolean,"sn":"isLocked","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"at":[new UnityEngine.SpaceAttribute.ctor()],"a":2,"n":"stepsDone","t":4,"rt":$n[0].Int32,"sn":"stepsDone","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"subLevelName","t":4,"rt":$n[0].String,"sn":"subLevelName"}]}; }, $n);
    /*SubLevelData end.*/

    /*LevelSaveData start.*/
    $m("LevelSaveData", function () { return {"att":1056769,"a":2,"at":[new System.SerializableAttribute()],"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"at":[new UnityEngine.SpaceAttribute.ctor()],"a":2,"n":"Completed","t":4,"rt":$n[0].Boolean,"sn":"Completed","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"at":[new UnityEngine.SpaceAttribute.ctor()],"a":2,"n":"subLevels","t":4,"rt":System.Array.type(SubLevelData),"sn":"subLevels"}]}; }, $n);
    /*LevelSaveData end.*/

    /*ActionOnTap start.*/
    $m("ActionOnTap", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"Awake","t":8,"sn":"Awake","rt":$n[0].Void},{"a":2,"n":"Tap","t":8,"sn":"Tap","rt":$n[0].Void},{"a":1,"n":"Update","t":8,"sn":"Update","rt":$n[0].Void},{"at":[new UnityEngine.SpaceAttribute.ctor()],"a":2,"n":"OnTap","t":4,"rt":$n[3].UnityEvent,"sn":"OnTap"},{"at":[new UnityEngine.SpaceAttribute.ctor()],"a":2,"n":"OnTapExtra","t":4,"rt":Function,"sn":"OnTapExtra"},{"a":1,"n":"extraCalled","t":4,"rt":$n[0].Boolean,"sn":"extraCalled","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":1,"n":"isDone","t":4,"rt":$n[0].Boolean,"sn":"isDone","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":1,"n":"myCollider","t":4,"rt":$n[1].Collider2D,"sn":"myCollider"}]}; }, $n);
    /*ActionOnTap end.*/

    /*BD_AnimationHelper start.*/
    $m("BD_AnimationHelper", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"PlaySfx","t":8,"sn":"PlaySfx","rt":$n[0].Void},{"a":2,"n":"TriggerOnComplete","t":8,"sn":"TriggerOnComplete","rt":$n[0].Void},{"at":[new UnityEngine.HeaderAttribute("Events")],"a":2,"n":"OnAnimationComplete","t":4,"rt":$n[3].UnityEvent,"sn":"OnAnimationComplete"},{"a":1,"n":"progress","t":4,"rt":$n[0].Single,"sn":"progress","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SpaceAttribute.ctor()],"a":2,"n":"sfxClip","t":4,"rt":$n[1].AudioClip,"sn":"sfxClip"}]}; }, $n);
    /*BD_AnimationHelper end.*/

    /*BasicDrag start.*/
    $m("BasicDrag", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"DecreaseSR","t":8,"sn":"DecreaseSR","rt":$n[0].Void},{"a":1,"n":"Exec","t":8,"sn":"Exec","rt":$n[4].IEnumerator},{"a":1,"n":"HandleDragging","t":8,"sn":"HandleDragging","rt":$n[0].Void},{"a":2,"n":"HasSwipedDown","t":8,"sn":"HasSwipedDown","rt":$n[0].Boolean,"box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":1,"n":"IncreaseSR","t":8,"sn":"IncreaseSR","rt":$n[0].Void},{"a":1,"n":"MouseDownPressed","t":8,"sn":"MouseDownPressed","rt":$n[0].Void},{"a":1,"n":"MouseUpPressed","t":8,"sn":"MouseUpPressed","rt":$n[0].Void},{"a":1,"n":"OffestReset","t":8,"sn":"OffestReset","rt":$n[0].Void},{"a":1,"n":"OnDisable","t":8,"sn":"OnDisable","rt":$n[0].Void},{"a":2,"n":"OnDragEnd","t":8,"pi":[{"n":"overrideVal","dv":false,"o":true,"pt":$n[0].Boolean,"ps":0}],"sn":"OnDragEnd","rt":$n[0].Void,"p":[$n[0].Boolean]},{"a":1,"n":"OnDragStart","t":8,"sn":"OnDragStart","rt":$n[0].Void},{"a":1,"n":"OnDragStart_Delta","t":8,"sn":"OnDragStart_Delta","rt":$n[0].Void},{"a":1,"n":"OnEnable","t":8,"sn":"OnEnable","rt":$n[0].Void},{"a":1,"n":"ResetState","t":8,"sn":"ResetState","rt":$n[0].Void},{"a":1,"n":"Start","t":8,"sn":"Start","rt":$n[0].Void},{"a":2,"n":"StopTheDrag","t":8,"sn":"StopTheDrag","rt":$n[0].Void},{"a":1,"n":"Update","t":8,"sn":"Update","rt":$n[0].Void},{"a":2,"n":"isOverUI","t":8,"sn":"isOverUI","rt":$n[0].Boolean,"box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"at":[new UnityEngine.HideInInspector()],"a":2,"n":"ClampX_H","t":4,"rt":$n[0].Single,"sn":"ClampX_H","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.HideInInspector()],"a":2,"n":"ClampX_L","t":4,"rt":$n[0].Single,"sn":"ClampX_L","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.HideInInspector()],"a":2,"n":"ClampY_H","t":4,"rt":$n[0].Single,"sn":"ClampY_H","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.HideInInspector()],"a":2,"n":"ClampY_L","t":4,"rt":$n[0].Single,"sn":"ClampY_L","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SpaceAttribute.ctor()],"a":2,"n":"OnMouseDownEvent","t":4,"rt":Function,"sn":"OnMouseDownEvent"},{"at":[new UnityEngine.SpaceAttribute.ctor()],"a":2,"n":"OnMouseDownEventIndependentFromCanDrag","t":4,"rt":Function,"sn":"OnMouseDownEventIndependentFromCanDrag"},{"a":2,"n":"OnMouseUpEvent","t":4,"rt":Function,"sn":"OnMouseUpEvent"},{"a":2,"n":"ProgEndEvent","t":4,"rt":Function,"sn":"ProgEndEvent"},{"at":[new UnityEngine.SpaceAttribute.ctor()],"a":2,"n":"ProgStartEvent","t":4,"rt":Function,"sn":"ProgStartEvent"},{"a":2,"n":"Self_ScaleNew","t":4,"rt":$n[1].Vector3,"sn":"Self_ScaleNew"},{"a":2,"n":"ToolLoopClip","t":4,"rt":$n[1].AudioSource,"sn":"ToolLoopClip"},{"at":[new UnityEngine.SpaceAttribute.ctor()],"a":2,"n":"ToolSelectClip","t":4,"rt":$n[1].AudioClip,"sn":"ToolSelectClip"},{"a":2,"n":"Tool_Offset","t":4,"rt":$n[1].Vector3,"sn":"Tool_Offset"},{"at":[new UnityEngine.SpaceAttribute.ctor()],"a":2,"n":"Vibration","t":4,"rt":$n[0].Boolean,"sn":"Vibration","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"at":[new UnityEngine.SpaceAttribute.ctor()],"a":2,"n":"anim","t":4,"rt":$n[1].Animator,"sn":"anim"},{"a":1,"n":"cachedMousePosition","t":4,"rt":$n[1].Vector3,"sn":"cachedMousePosition"},{"at":[new UnityEngine.HideInInspector()],"a":2,"n":"canCallMouseUpWhenGamePaused","t":4,"rt":$n[0].Boolean,"sn":"canCallMouseUpWhenGamePaused","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"at":[new UnityEngine.SpaceAttribute.ctor()],"a":2,"n":"canDrag","t":4,"rt":$n[0].Boolean,"sn":"canDrag","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"at":[new UnityEngine.SpaceAttribute.ctor()],"a":2,"n":"canReturn","t":4,"rt":$n[0].Boolean,"sn":"canReturn","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"at":[new UnityEngine.SpaceAttribute.ctor()],"a":2,"n":"canRotateOnPick","t":4,"rt":$n[0].Boolean,"sn":"canRotateOnPick","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"at":[new UnityEngine.SpaceAttribute.ctor()],"a":2,"n":"canScaleIncrease","t":4,"rt":$n[0].Boolean,"sn":"canScaleIncrease","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"at":[new UnityEngine.SpaceAttribute.ctor()],"a":2,"n":"childSprite","t":4,"rt":System.Array.type(UnityEngine.SpriteRenderer),"sn":"childSprite"},{"a":1,"n":"co","t":4,"rt":$n[1].Coroutine,"sn":"co"},{"at":[new UnityEngine.HideInInspector()],"a":2,"n":"dontResetItIsInCollider","t":4,"rt":$n[0].Boolean,"sn":"dontResetItIsInCollider","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"at":[new UnityEngine.SpaceAttribute.ctor()],"a":2,"n":"dragByDelta","t":4,"rt":$n[0].Boolean,"sn":"dragByDelta","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"dragParticles","t":4,"rt":$n[1].ParticleSystem,"sn":"dragParticles"},{"a":1,"n":"dragStartPosition","t":4,"rt":$n[1].Vector3,"sn":"dragStartPosition"},{"a":1,"n":"dragThreshold","t":4,"rt":$n[0].Single,"sn":"dragThreshold","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SpaceAttribute.ctor()],"a":2,"n":"isDragging","t":4,"rt":$n[0].Boolean,"sn":"isDragging","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":1,"n":"isMouseDownPressed","t":4,"rt":$n[0].Boolean,"sn":"isMouseDownPressed","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"isObjectMovingWhileDragging","t":4,"rt":$n[0].Boolean,"sn":"isObjectMovingWhileDragging","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"at":[new UnityEngine.SpaceAttribute.ctor()],"a":2,"n":"isPlacedCannotMove","t":4,"rt":$n[0].Boolean,"sn":"isPlacedCannotMove","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"jumpOnReturn","t":4,"rt":$n[0].Boolean,"sn":"jumpOnReturn","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":1,"n":"lastMouseWorldPosition","t":4,"rt":$n[1].Vector3,"sn":"lastMouseWorldPosition"},{"at":[new UnityEngine.SpaceAttribute.ctor()],"a":2,"n":"moveWithPointer","t":4,"rt":$n[0].Boolean,"sn":"moveWithPointer","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"newRot","t":4,"rt":$n[1].Vector3,"sn":"newRot"},{"a":1,"n":"offset","t":4,"rt":$n[1].Vector3,"sn":"offset"},{"at":[new UnityEngine.SpaceAttribute.ctor()],"a":2,"n":"onDragparticle","t":4,"rt":$n[0].Boolean,"sn":"onDragparticle","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":1,"n":"previousPosition","t":4,"rt":$n[1].Vector3,"sn":"previousPosition"},{"a":2,"n":"returnTime","t":4,"rt":$n[0].Single,"sn":"returnTime","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"saveStartTransform","t":4,"rt":$n[0].Boolean,"sn":"saveStartTransform","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"at":[new UnityEngine.HideInInspector()],"a":2,"n":"startOrder","t":4,"rt":$n[0].Int32,"sn":"startOrder","box":function ($v) { return Bridge.box($v, System.Int32);}},{"at":[new UnityEngine.SpaceAttribute.ctor()],"a":2,"n":"startPos","t":4,"rt":$n[1].Vector3,"sn":"startPos"},{"a":2,"n":"startRot","t":4,"rt":$n[1].Vector3,"sn":"startRot"},{"a":2,"n":"startScale","t":4,"rt":$n[1].Vector3,"sn":"startScale"},{"a":1,"n":"swipeThreshold","t":4,"rt":$n[0].Single,"sn":"swipeThreshold","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"tempPos","t":4,"rt":$n[1].Vector3,"sn":"tempPos"},{"a":1,"n":"thisCamera","t":4,"rt":$n[1].Camera,"sn":"thisCamera"},{"at":[new UnityEngine.HideInInspector()],"a":2,"n":"thisCollider","t":4,"rt":$n[1].Collider2D,"sn":"thisCollider"},{"at":[new UnityEngine.SpaceAttribute.ctor()],"a":2,"n":"thisParticles","t":4,"rt":$n[1].ParticleSystem,"sn":"thisParticles"},{"at":[new UnityEngine.HideInInspector()],"a":2,"n":"thisSR","t":4,"rt":$n[1].SpriteRenderer,"sn":"thisSR"},{"a":1,"n":"waitTemp","t":4,"rt":$n[1].WaitForSeconds,"sn":"waitTemp"}]}; }, $n);
    /*BasicDrag end.*/

    /*BD_AnimatorDrag start.*/
    $m("BD_AnimatorDrag", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"PlayAnim","t":8,"sn":"PlayAnim","rt":$n[0].Void},{"a":1,"n":"Start","t":8,"sn":"Start","rt":$n[0].Void},{"a":1,"n":"StopAnim","t":8,"sn":"StopAnim","rt":$n[0].Void},{"a":1,"n":"Update","t":8,"sn":"Update","rt":$n[0].Void},{"at":[new UnityEngine.SpaceAttribute.ctor()],"a":2,"n":"BD","t":4,"rt":BasicDrag,"sn":"BD"},{"a":2,"n":"OnComplete","t":4,"rt":$n[3].UnityEvent,"sn":"OnComplete"},{"at":[new UnityEngine.SpaceAttribute.ctor()],"a":2,"n":"Source","t":4,"rt":$n[1].AudioSource,"sn":"Source"},{"at":[new UnityEngine.SpaceAttribute.ctor()],"a":2,"n":"Vibration","t":4,"rt":$n[0].Boolean,"sn":"Vibration","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"at":[new UnityEngine.SpaceAttribute.ctor()],"a":2,"n":"anim","t":4,"rt":$n[1].Animator,"sn":"anim"},{"at":[new UnityEngine.RangeAttribute(0.0, 1.0)],"a":2,"n":"completionThreshold","t":4,"rt":$n[0].Single,"sn":"completionThreshold","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"hasCompleted","t":4,"rt":$n[0].Boolean,"sn":"hasCompleted","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"at":[new UnityEngine.SpaceAttribute.ctor()],"a":2,"n":"isCompletable","t":4,"rt":$n[0].Boolean,"sn":"isCompletable","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":1,"n":"isPlaying","t":4,"rt":$n[0].Boolean,"sn":"isPlaying","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}}]}; }, $n);
    /*BD_AnimatorDrag end.*/

    /*BD_CameraFollow start.*/
    $m("BD_CameraFollow", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"DisableFollow","t":8,"sn":"DisableFollow","rt":$n[0].Void},{"a":1,"n":"Start","t":8,"sn":"Start","rt":$n[4].IEnumerator},{"a":1,"n":"Update","t":8,"sn":"Update","rt":$n[0].Void},{"at":[new UnityEngine.SpaceAttribute.ctor()],"a":2,"n":"FOV","t":4,"rt":$n[0].Single,"sn":"FOV","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SpaceAttribute.ctor()],"a":2,"n":"Pivot","t":4,"rt":$n[1].Transform,"sn":"Pivot"},{"at":[new UnityEngine.SpaceAttribute.ctor()],"a":2,"n":"Tool","t":4,"rt":BasicDrag,"sn":"Tool"},{"at":[new UnityEngine.SpaceAttribute.ctor()],"a":2,"n":"X_L","t":4,"rt":$n[0].Single,"sn":"X_L","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"X_R","t":4,"rt":$n[0].Single,"sn":"X_R","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"Y_H","t":4,"rt":$n[0].Single,"sn":"Y_H","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SpaceAttribute.ctor(),new UnityEngine.HeaderAttribute("AXIS CONTROLS"),new UnityEngine.SpaceAttribute.ctor()],"a":2,"n":"Y_L","t":4,"rt":$n[0].Single,"sn":"Y_L","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"canStart","t":4,"rt":$n[0].Boolean,"sn":"canStart","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"at":[new UnityEngine.SpaceAttribute.ctor()],"a":2,"n":"duration","t":4,"rt":$n[0].Single,"sn":"duration","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SpaceAttribute.ctor()],"a":2,"n":"startDelay","t":4,"rt":$n[0].Single,"sn":"startDelay","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"tempPos","t":4,"rt":$n[1].Vector3,"sn":"tempPos"},{"a":1,"n":"wasDragging","t":4,"rt":$n[0].Boolean,"sn":"wasDragging","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}}]}; }, $n);
    /*BD_CameraFollow end.*/

    /*BD_Clamp start.*/
    $m("BD_Clamp", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"AssignVals","t":8,"sn":"AssignVals","rt":$n[4].IEnumerator},{"a":1,"n":"OnEnable","t":8,"sn":"OnEnable","rt":$n[0].Void},{"a":1,"n":"BD","t":4,"rt":BasicDrag,"sn":"BD"},{"a":2,"n":"ClampX_H","t":4,"rt":$n[0].Single,"sn":"ClampX_H","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SpaceAttribute.ctor()],"a":2,"n":"ClampX_L","t":4,"rt":$n[0].Single,"sn":"ClampX_L","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"ClampY_H","t":4,"rt":$n[0].Single,"sn":"ClampY_H","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SpaceAttribute.ctor()],"a":2,"n":"ClampY_L","t":4,"rt":$n[0].Single,"sn":"ClampY_L","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}}]}; }, $n);
    /*BD_Clamp end.*/

    /*BD_Progress start.*/
    $m("BD_Progress", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"CallTheComplete","t":8,"sn":"CallTheComplete","rt":$n[0].Void},{"a":2,"n":"CheckAllScratchProgress","t":8,"sn":"CheckAllScratchProgress","rt":$n[0].Boolean,"box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"DisableProgress","t":8,"sn":"DisableProgress","rt":$n[0].Void},{"a":1,"n":"DisableToolTips","t":8,"sn":"DisableToolTips","rt":$n[0].Void},{"a":2,"n":"EnableProgress","t":8,"sn":"EnableProgress","rt":$n[0].Void},{"a":1,"n":"EnableToolTips","t":8,"sn":"EnableToolTips","rt":$n[0].Void},{"a":1,"n":"ProgressChecking","t":8,"sn":"ProgressChecking","rt":$n[4].IEnumerator},{"a":1,"n":"Start","t":8,"sn":"Start","rt":$n[0].Void},{"a":2,"n":"giveCollectiveProgress","t":8,"sn":"giveCollectiveProgress","rt":$n[0].Single,"box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"giveProgressForScratch","t":8,"pi":[{"n":"index","pt":$n[0].Int32,"ps":0}],"sn":"giveProgressForScratch","rt":$n[0].Single,"p":[$n[0].Int32],"box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SpaceAttribute.ctor()],"a":2,"n":"AllScratches","t":4,"rt":System.Array.type(ScratchData),"sn":"AllScratches"},{"a":1,"n":"Co","t":4,"rt":$n[1].Coroutine,"sn":"Co"},{"at":[new UnityEngine.SpaceAttribute.ctor()],"a":2,"n":"CollectiveAppear","t":4,"rt":$n[0].Boolean,"sn":"CollectiveAppear","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"CompleteEvent","t":4,"rt":Function,"sn":"CompleteEvent"},{"at":[new UnityEngine.SpaceAttribute.ctor()],"a":2,"n":"OnScratchComplete","t":4,"rt":$n[3].UnityEvent,"sn":"OnScratchComplete"},{"a":2,"n":"SubCompleteEvent","t":4,"rt":Function,"sn":"SubCompleteEvent"},{"a":2,"n":"canCallComplete","t":4,"rt":$n[0].Boolean,"sn":"canCallComplete","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"at":[new UnityEngine.SpaceAttribute.ctor()],"a":2,"n":"isProgDone","t":4,"rt":$n[0].Boolean,"sn":"isProgDone","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"at":[new UnityEngine.SpaceAttribute.ctor()],"a":2,"n":"progressControl","t":4,"rt":$n[0].Boolean,"sn":"progressControl","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"at":[new UnityEngine.HideInInspector()],"a":2,"n":"thisDrag","t":4,"rt":BasicDrag,"sn":"thisDrag"},{"at":[new UnityEngine.SpaceAttribute.ctor()],"a":2,"n":"tipControl","t":4,"rt":$n[0].Boolean,"sn":"tipControl","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":1,"n":"waitTemp","t":4,"rt":$n[1].WaitForSeconds,"sn":"waitTemp"}]}; }, $n);
    /*BD_Progress end.*/

    /*ScratchData start.*/
    $m("ScratchData", function () { return {"att":1056769,"a":2,"at":[new System.SerializableAttribute()],"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"at":[new UnityEngine.SpaceAttribute.ctor()],"a":2,"n":"ScratchManager","t":4,"rt":$n[5].ScratchCardManager,"sn":"ScratchManager"},{"a":2,"n":"isComplete","t":4,"rt":$n[0].Boolean,"sn":"isComplete","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"scratchLimit","t":4,"rt":$n[0].Single,"sn":"scratchLimit","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}}]}; }, $n);
    /*ScratchData end.*/

    /*BD_ProgressHelper start.*/
    $m("BD_ProgressHelper", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"DisableProgress","t":8,"sn":"DisableProgress","rt":$n[0].Void},{"a":1,"n":"EnableProgress","t":8,"sn":"EnableProgress","rt":$n[0].Void},{"a":1,"n":"ProgressChecking","t":8,"sn":"ProgressChecking","rt":$n[4].IEnumerator},{"a":1,"n":"Start","t":8,"sn":"Start","rt":$n[4].IEnumerator},{"at":[new UnityEngine.SpaceAttribute.ctor()],"a":2,"n":"BD_Progress","t":4,"rt":BD_Progress,"sn":"BD_Progress"},{"a":1,"n":"Co","t":4,"rt":$n[1].Coroutine,"sn":"Co"},{"a":2,"n":"fadeIn","t":4,"rt":$n[0].Boolean,"sn":"fadeIn","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"at":[new UnityEngine.SpaceAttribute.ctor()],"a":2,"n":"fadeSprite","t":4,"rt":$n[1].SpriteRenderer,"sn":"fadeSprite"},{"a":1,"n":"waitTemp","t":4,"rt":$n[1].WaitForSeconds,"sn":"waitTemp"}]}; }, $n);
    /*BD_ProgressHelper end.*/

    /*BD_SpriteChange start.*/
    $m("BD_SpriteChange", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"Start","t":8,"sn":"Start","rt":$n[4].IEnumerator},{"a":2,"n":"ToolPicked","t":8,"sn":"ToolPicked","rt":$n[0].Void},{"a":2,"n":"ToolReleased","t":8,"sn":"ToolReleased","rt":$n[0].Void},{"at":[new UnityEngine.SpaceAttribute.ctor()],"a":2,"n":"BD","t":4,"rt":BasicDrag,"sn":"BD"},{"a":2,"n":"Default","t":4,"rt":$n[1].Sprite,"sn":"Default"},{"a":2,"n":"Picked","t":4,"rt":$n[1].Sprite,"sn":"Picked"},{"at":[new UnityEngine.SpaceAttribute.ctor()],"a":2,"n":"SR","t":4,"rt":$n[1].SpriteRenderer,"sn":"SR"},{"a":2,"n":"resetOnRelease","t":4,"rt":$n[0].Boolean,"sn":"resetOnRelease","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}}]}; }, $n);
    /*BD_SpriteChange end.*/

    /*BD_ToolRotate start.*/
    $m("BD_ToolRotate", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"Start","t":8,"sn":"Start","rt":$n[4].IEnumerator},{"a":1,"n":"Update","t":8,"sn":"Update","rt":$n[0].Void},{"at":[new UnityEngine.SpaceAttribute.ctor()],"a":2,"n":"Clamp","t":4,"rt":BD_Clamp,"sn":"Clamp"},{"a":2,"n":"MaxAngle","t":4,"rt":$n[1].Vector3,"sn":"MaxAngle"},{"at":[new UnityEngine.SpaceAttribute.ctor(),new UnityEngine.HeaderAttribute("AXIS CONTROLS"),new UnityEngine.SpaceAttribute.ctor()],"a":2,"n":"MinAngle","t":4,"rt":$n[1].Vector3,"sn":"MinAngle"},{"at":[new UnityEngine.SpaceAttribute.ctor()],"a":2,"n":"Pivot","t":4,"rt":$n[1].Transform,"sn":"Pivot"},{"at":[new UnityEngine.SpaceAttribute.ctor()],"a":2,"n":"Tool","t":4,"rt":BasicDrag,"sn":"Tool"},{"a":1,"n":"canStart","t":4,"rt":$n[0].Boolean,"sn":"canStart","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":1,"n":"currentT","t":4,"rt":$n[0].Single,"sn":"currentT","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SpaceAttribute.ctor(),new UnityEngine.TooltipAttribute("How quickly the pivot follows tool movement")],"a":2,"n":"rotationSpeed","t":4,"rt":$n[0].Single,"sn":"rotationSpeed","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SpaceAttribute.ctor()],"a":2,"n":"startDelay","t":4,"rt":$n[0].Single,"sn":"startDelay","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"targetT","t":4,"rt":$n[0].Single,"sn":"targetT","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}}]}; }, $n);
    /*BD_ToolRotate end.*/

    /*CameraController start.*/
    $m("CameraController", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"Awake","t":8,"sn":"Awake","rt":$n[0].Void},{"a":2,"n":"Camera_Shake","t":8,"sn":"Camera_Shake","rt":$n[0].Void},{"a":2,"n":"KillPositionTweens","t":8,"sn":"KillPositionTweens","rt":$n[0].Void},{"a":1,"n":"KillTweens","t":8,"sn":"KillTweens","rt":$n[0].Void},{"a":2,"n":"MoveCamera","t":8,"pi":[{"n":"targetPosition","pt":$n[1].Vector3,"ps":0},{"n":"targetSizeOrFov","pt":$n[0].Single,"ps":1},{"n":"duration","dv":-1.0,"o":true,"pt":$n[0].Single,"ps":2},{"n":"ease","dv":null,"o":true,"pt":$n[0].Nullable$1(DG.Tweening.Ease),"ps":3}],"sn":"MoveCamera","rt":$n[0].Void,"p":[$n[1].Vector3,$n[0].Single,$n[0].Single,$n[0].Nullable$1(DG.Tweening.Ease)]},{"a":2,"n":"ResetCameraInstant","t":8,"sn":"ResetCameraInstant","rt":$n[0].Void},{"a":2,"n":"ResetCameraTween","t":8,"pi":[{"n":"duration","dv":-1.0,"o":true,"pt":$n[0].Single,"ps":0}],"sn":"ResetCameraTween","rt":$n[0].Void,"p":[$n[0].Single]},{"a":2,"n":"SetCameraInstant","t":8,"pi":[{"n":"newPosition","pt":$n[1].Vector3,"ps":0},{"n":"sizeOrFov","pt":$n[0].Single,"ps":1}],"sn":"SetCameraInstant","rt":$n[0].Void,"p":[$n[1].Vector3,$n[0].Single]},{"a":2,"n":"Instance","is":true,"t":4,"rt":CameraController,"sn":"Instance"},{"a":2,"n":"cam","t":4,"rt":$n[1].Camera,"sn":"cam"},{"at":[new UnityEngine.HeaderAttribute("Tween Settings"),new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"defaultDuration","t":4,"rt":$n[0].Single,"sn":"defaultDuration","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"defaultEase","t":4,"rt":$n[6].Ease,"sn":"defaultEase","box":function ($v) { return Bridge.box($v, DG.Tweening.Ease, System.Enum.toStringFn(DG.Tweening.Ease));}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"defaultFOV","t":4,"rt":$n[0].Single,"sn":"defaultFOV","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.HeaderAttribute("Default Settings"),new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"defaultPosition","t":4,"rt":$n[1].Vector3,"sn":"defaultPosition"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"defaultSize","t":4,"rt":$n[0].Single,"sn":"defaultSize","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"positionTween","t":4,"rt":$n[6].Tweener,"sn":"positionTween"},{"a":1,"n":"sizeTween","t":4,"rt":$n[6].Tweener,"sn":"sizeTween"}]}; }, $n);
    /*CameraController end.*/

    /*ZoomPos start.*/
    $m("ZoomPos", function () { return {"att":1056769,"a":2,"at":[new System.SerializableAttribute()],"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"CameraFOV","t":4,"rt":$n[0].Single,"sn":"CameraFOV","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"CameraPos","t":4,"rt":$n[1].Vector3,"sn":"CameraPos"}]}; }, $n);
    /*ZoomPos end.*/

    /*DestroyObj start.*/
    $m("DestroyObj", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"Start","t":8,"sn":"Start","rt":$n[4].IEnumerator},{"at":[new UnityEngine.SpaceAttribute.ctor()],"a":2,"n":"destroyDelay","t":4,"rt":$n[0].Single,"sn":"destroyDelay","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}}]}; }, $n);
    /*DestroyObj end.*/

    /*GameManager start.*/
    $m("GameManager", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"ApplySaveForSceneLevel","t":8,"pi":[{"n":"level","pt":LevelData,"ps":0}],"sn":"ApplySaveForSceneLevel","rt":$n[0].Void,"p":[LevelData]},{"a":1,"n":"Awake","t":8,"sn":"Awake","rt":$n[0].Void},{"a":2,"n":"BindLevel","t":8,"pi":[{"n":"level","pt":LevelData,"ps":0}],"sn":"BindLevel","rt":$n[0].Void,"p":[LevelData]},{"a":1,"n":"BindSceneLevel","t":8,"sn":"BindSceneLevel","rt":$n[0].Void},{"v":true,"a":2,"n":"Complete","t":8,"sn":"Complete","rt":$n[0].Void},{"a":2,"n":"Continue","t":8,"sn":"Continue","rt":$n[0].Void},{"a":1,"n":"EnsureLoadingManager","t":8,"sn":"EnsureLoadingManager","rt":$n[0].Void},{"a":1,"n":"EnsureSaveSystem","t":8,"sn":"EnsureSaveSystem","rt":$n[0].Void},{"a":2,"n":"Home","t":8,"pi":[{"n":"number","pt":$n[0].Int32,"ps":0}],"sn":"Home","rt":$n[0].Void,"p":[$n[0].Int32]},{"a":1,"n":"LoadLevel","t":8,"sn":"LoadLevel","rt":$n[0].Void},{"a":2,"n":"MuteLevelAudio","t":8,"sn":"MuteLevelAudio","rt":$n[0].Void},{"a":2,"n":"Next","t":8,"sn":"Next","rt":$n[0].Void},{"a":2,"n":"RecordLevelCompleteEvent","t":8,"sn":"RecordLevelCompleteEvent","rt":$n[0].Void},{"a":1,"n":"RecordLevelStartEvent","t":8,"pi":[{"n":"levelIs","pt":$n[0].Int32,"ps":0}],"sn":"RecordLevelStartEvent","rt":$n[0].Void,"p":[$n[0].Int32]},{"a":1,"n":"ReloadActiveScene","t":8,"sn":"ReloadActiveScene","rt":$n[0].Void},{"a":2,"n":"Restart","t":8,"pi":[{"n":"number","pt":$n[0].Int32,"ps":0}],"sn":"Restart","rt":$n[0].Void,"p":[$n[0].Int32]},{"a":1,"n":"Start","t":8,"sn":"Start","rt":$n[4].IEnumerator},{"a":2,"n":"StopAllDrags","t":8,"sn":"StopAllDrags","rt":$n[0].Void},{"a":1,"n":"TryParseLevelName","is":true,"t":8,"pi":[{"n":"objectName","pt":$n[0].String,"ps":0},{"n":"levelNo","out":true,"pt":$n[0].Int32,"ps":1},{"n":"partNo","out":true,"pt":$n[0].Int32,"ps":2}],"sn":"TryParseLevelName","rt":$n[0].Boolean,"p":[$n[0].String,$n[0].Int32,$n[0].Int32],"box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"UnMuteLevelAudio","t":8,"sn":"UnMuteLevelAudio","rt":$n[0].Void},{"a":2,"n":"checkForDrag","t":8,"sn":"checkForDrag","rt":$n[0].Boolean,"box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"isOverUI","t":8,"sn":"isOverUI","rt":$n[0].Boolean,"box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"at":[new UnityEngine.SpaceAttribute.ctor()],"a":2,"n":"BG_Music","t":4,"rt":$n[1].AudioClip,"sn":"BG_Music"},{"at":[new UnityEngine.SpaceAttribute.ctor()],"a":2,"n":"DefaultMat","t":4,"rt":$n[1].Material,"sn":"DefaultMat"},{"a":1,"n":"Temp","t":4,"rt":LevelData,"sn":"Temp"},{"at":[new UnityEngine.SpaceAttribute.ctor()],"a":2,"n":"currentLevel","t":4,"rt":LevelData,"sn":"currentLevel"},{"a":2,"n":"currentLevelNo","t":4,"rt":$n[0].Int32,"sn":"currentLevelNo","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"instance","is":true,"t":4,"rt":GameManager,"sn":"instance"},{"at":[new UnityEngine.SpaceAttribute.ctor()],"a":2,"n":"isComplete","t":4,"rt":$n[0].Boolean,"sn":"isComplete","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"isPaused","t":4,"rt":$n[0].Boolean,"sn":"isPaused","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":1,"n":"levelEndTime","t":4,"rt":$n[0].Single,"sn":"levelEndTime","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"levelStartTime","t":4,"rt":$n[0].Single,"sn":"levelStartTime","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SpaceAttribute.ctor()],"a":2,"n":"restoreEffectShader","t":4,"rt":$n[1].Shader,"sn":"restoreEffectShader"},{"at":[new UnityEngine.TooltipAttribute("OFF for menu-driven playables: the level is activated later by PlayableRouter instead of being loaded at Start. Leave ON for scenes that hold a single level.")],"a":2,"n":"startLevelOnPlay","t":4,"rt":$n[0].Boolean,"sn":"startLevelOnPlay","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"stickerEffectShader","t":4,"rt":$n[1].Shader,"sn":"stickerEffectShader"},{"a":2,"n":"timerCo","t":4,"rt":$n[1].Coroutine,"sn":"timerCo"}]}; }, $n);
    /*GameManager end.*/

    /*LevelData start.*/
    $m("LevelData", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"LevelComplete","t":8,"sn":"LevelComplete","rt":$n[0].Void},{"a":2,"n":"LevelStart","t":8,"sn":"LevelStart","rt":$n[0].Void},{"at":[new UnityEngine.ContextMenu.ctor("SetAudioAndDrag")],"a":2,"n":"SetAudioAndDrag","t":8,"sn":"SetAudioAndDrag","rt":$n[0].Void},{"a":2,"n":"SetProgressBar","t":8,"sn":"SetProgressBar","rt":$n[0].Void},{"a":2,"n":"SetProgressDelay","t":8,"sn":"SetProgressDelay","rt":$n[0].Void},{"a":1,"n":"Setup","t":8,"sn":"Setup","rt":$n[4].IEnumerator},{"a":2,"n":"ToolInputToggle","t":8,"pi":[{"n":"tool","pt":$n[1].GameObject,"ps":0},{"n":"toggle","pt":$n[0].Boolean,"ps":1}],"sn":"ToolInputToggle","rt":$n[0].Void,"p":[$n[1].GameObject,$n[0].Boolean]},{"a":3,"n":"TryStartStep","t":8,"pi":[{"n":"stepStartAction","pt":Function,"ps":0},{"n":"stepNumber","pt":$n[0].Int32,"ps":1}],"sn":"TryStartStep","rt":$n[0].Boolean,"p":[Function,$n[0].Int32],"box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"at":[new UnityEngine.SpaceAttribute.ctor()],"a":2,"n":"AllDrags","t":4,"rt":System.Array.type(BasicDrag),"sn":"AllDrags"},{"at":[new UnityEngine.SpaceAttribute.ctor()],"a":2,"n":"AllScratches","t":4,"rt":System.Array.type(ScratchCardAsset.ScratchCardManager),"sn":"AllScratches"},{"a":2,"n":"AllSources","t":4,"rt":System.Array.type(UnityEngine.AudioSource),"sn":"AllSources"},{"at":[new UnityEngine.SpaceAttribute.ctor()],"a":2,"n":"LevelIcon","t":4,"rt":$n[1].Sprite,"sn":"LevelIcon"},{"at":[new UnityEngine.SpaceAttribute.ctor()],"a":2,"n":"Level_BG","t":4,"rt":$n[1].AudioClip,"sn":"Level_BG"},{"at":[new UnityEngine.SpaceAttribute.ctor()],"a":2,"n":"ToolIcons","t":4,"rt":$n[7].List$1(UnityEngine.Sprite),"sn":"ToolIcons"},{"at":[new UnityEngine.SpaceAttribute.ctor(),new UnityEngine.TooltipAttribute("Switched OFF once the end card is shown: HUD, tool bar, gameplay overlays \u2014 anything that should not sit on top of or behind it.\n\nDo NOT list a parent of CompletePanel itself \u2014 the panel is switched on first, but disabling something above it in the hierarchy would hide it again.")],"a":2,"n":"disableOnLevelComplete","t":4,"rt":System.Array.type(UnityEngine.GameObject),"sn":"disableOnLevelComplete"},{"at":[new UnityEngine.SpaceAttribute.ctor()],"a":2,"n":"levelName","t":4,"rt":$n[0].String,"sn":"levelName"},{"a":2,"n":"levelNo","t":4,"rt":$n[0].Int32,"sn":"levelNo","box":function ($v) { return Bridge.box($v, System.Int32);}},{"at":[new UnityEngine.SpaceAttribute.ctor()],"a":2,"n":"levelReward","t":4,"rt":$n[0].Int32,"sn":"levelReward","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"partNo","t":4,"rt":$n[0].Int32,"sn":"partNo","box":function ($v) { return Bridge.box($v, System.Int32);}},{"at":[new UnityEngine.SpaceAttribute.ctor()],"a":2,"n":"stepsDone","t":4,"rt":$n[0].Int32,"sn":"stepsDone","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":1,"n":"wait1sec","t":4,"rt":$n[1].WaitForSeconds,"sn":"wait1sec"}]}; }, $n);
    /*LevelData end.*/

    /*PlayParticlesOnCollision start.*/
    $m("PlayParticlesOnCollision", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"OnTriggerEnter2D","t":8,"pi":[{"n":"collision","pt":$n[1].Collider2D,"ps":0}],"sn":"OnTriggerEnter2D","rt":$n[0].Void,"p":[$n[1].Collider2D]},{"a":2,"n":"OnCollisionEvent","t":4,"rt":$n[3].UnityEvent,"sn":"OnCollisionEvent"},{"at":[new UnityEngine.SpaceAttribute.ctor()],"a":2,"n":"ParticlePrefab","t":4,"rt":$n[1].GameObject,"sn":"ParticlePrefab"},{"at":[new UnityEngine.SpaceAttribute.ctor()],"a":2,"n":"Target","t":4,"rt":$n[1].GameObject,"sn":"Target"},{"at":[new UnityEngine.SpaceAttribute.ctor()],"a":2,"n":"destroyIt","t":4,"rt":$n[0].Boolean,"sn":"destroyIt","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"at":[new UnityEngine.SpaceAttribute.ctor()],"a":2,"n":"disableOnCollision","t":4,"rt":$n[0].Boolean,"sn":"disableOnCollision","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":1,"n":"isDone","t":4,"rt":$n[0].Boolean,"sn":"isDone","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"at":[new UnityEngine.SpaceAttribute.ctor()],"a":2,"n":"stayAtPlace","t":4,"rt":$n[0].Boolean,"sn":"stayAtPlace","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}}]}; }, $n);
    /*PlayParticlesOnCollision end.*/

    /*PlaySfxOnCollision start.*/
    $m("PlaySfxOnCollision", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"Awake","t":8,"sn":"Awake","rt":$n[0].Void},{"a":2,"n":"DisableSfx","t":8,"sn":"DisableSfx","rt":$n[0].Void},{"a":1,"n":"HandlePlay","t":8,"sn":"HandlePlay","rt":$n[0].Void},{"a":1,"n":"HandleStop","t":8,"sn":"HandleStop","rt":$n[0].Void},{"a":1,"n":"OnDestroy","t":8,"sn":"OnDestroy","rt":$n[0].Void},{"a":1,"n":"OnFadeOutComplete","t":8,"sn":"OnFadeOutComplete","rt":$n[0].Void},{"a":1,"n":"OnTriggerEnter2D","t":8,"pi":[{"n":"collision","pt":$n[1].Collider2D,"ps":0}],"sn":"OnTriggerEnter2D","rt":$n[0].Void,"p":[$n[1].Collider2D]},{"a":1,"n":"OnTriggerExit2D","t":8,"pi":[{"n":"collision","pt":$n[1].Collider2D,"ps":0}],"sn":"OnTriggerExit2D","rt":$n[0].Void,"p":[$n[1].Collider2D]},{"a":1,"n":"PlayAudio","t":8,"sn":"PlayAudio","rt":$n[0].Void},{"a":1,"n":"StopAudio","t":8,"sn":"StopAudio","rt":$n[0].Void},{"a":1,"n":"Update","t":8,"sn":"Update","rt":$n[0].Void},{"a":2,"n":"DragInput","t":4,"rt":BasicDrag,"sn":"DragInput"},{"at":[new UnityEngine.SpaceAttribute.ctor()],"a":2,"n":"Mode","t":4,"rt":SfxPlayType,"sn":"Mode","box":function ($v) { return Bridge.box($v, SfxPlayType, System.Enum.toStringFn(SfxPlayType));}},{"at":[new UnityEngine.SpaceAttribute.ctor()],"a":2,"n":"Particles","t":4,"rt":$n[1].ParticleSystem,"sn":"Particles"},{"at":[new UnityEngine.SpaceAttribute.ctor()],"a":2,"n":"Source","t":4,"rt":$n[1].AudioSource,"sn":"Source"},{"at":[new UnityEngine.SpaceAttribute.ctor()],"a":2,"n":"Tip","t":4,"rt":$n[1].GameObject,"sn":"Tip"},{"a":1,"n":"_fadeTween","t":4,"rt":$n[6].Tween,"sn":"_fadeTween"},{"a":1,"n":"_tipTransform","t":4,"rt":$n[1].Transform,"sn":"_tipTransform"},{"a":2,"n":"duration","t":4,"rt":$n[0].Single,"sn":"duration","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SpaceAttribute.ctor()],"a":2,"n":"isDone","t":4,"rt":$n[0].Boolean,"sn":"isDone","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"isInArea","t":4,"rt":$n[0].Boolean,"sn":"isInArea","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"isPlaying","t":4,"rt":$n[0].Boolean,"sn":"isPlaying","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"startVol","t":4,"rt":$n[0].Single,"sn":"startVol","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"targetVol","t":4,"rt":$n[0].Single,"sn":"targetVol","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}}]}; }, $n);
    /*PlaySfxOnCollision end.*/

    /*SfxPlayType start.*/
    $m("SfxPlayType", function () { return {"att":8449,"a":2,"at":[new System.SerializableAttribute()],"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"OnDrag","is":true,"t":4,"rt":SfxPlayType,"sn":"OnDrag","box":function ($v) { return Bridge.box($v, SfxPlayType, System.Enum.toStringFn(SfxPlayType));}},{"a":2,"n":"OnEnter","is":true,"t":4,"rt":SfxPlayType,"sn":"OnEnter","box":function ($v) { return Bridge.box($v, SfxPlayType, System.Enum.toStringFn(SfxPlayType));}}]}; }, $n);
    /*SfxPlayType end.*/

    /*CarouselScroller start.*/
    $m("CarouselScroller", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"Animate","t":8,"pi":[{"n":"direction","pt":$n[0].Int32,"ps":0}],"sn":"Animate","rt":$n[4].IEnumerator,"p":[$n[0].Int32]},{"a":2,"n":"EnableCurrentTick","t":8,"sn":"EnableCurrentTick","rt":$n[0].Void},{"a":2,"n":"EnableCurrentTick1st","t":8,"sn":"EnableCurrentTick1st","rt":$n[0].Void},{"a":2,"n":"InitCarousel","t":8,"pi":[{"n":"sprites","pt":$n[7].List$1(UnityEngine.Sprite),"ps":0}],"sn":"InitCarousel","rt":$n[0].Void,"p":[$n[7].List$1(UnityEngine.Sprite)]},{"a":2,"n":"ScrollNext","t":8,"sn":"ScrollNext","rt":$n[0].Void},{"a":1,"n":"SetAlpha","t":8,"pi":[{"n":"img","pt":$n[8].Image,"ps":0},{"n":"alpha","pt":$n[0].Single,"ps":1}],"sn":"SetAlpha","rt":$n[0].Void,"p":[$n[8].Image,$n[0].Single]},{"a":1,"n":"SetItemAlphaState","t":8,"pi":[{"n":"item","pt":scroller_Item,"ps":0},{"n":"bgA","pt":$n[0].Single,"ps":1},{"n":"fadeLA","pt":$n[0].Single,"ps":2},{"n":"fadeRA","pt":$n[0].Single,"ps":3}],"sn":"SetItemAlphaState","rt":$n[0].Void,"p":[scroller_Item,$n[0].Single,$n[0].Single,$n[0].Single]},{"a":1,"n":"SetItemData","t":8,"pi":[{"n":"slotIndex","pt":$n[0].Int32,"ps":0},{"n":"dataIndex","pt":$n[0].Int32,"ps":1},{"n":"resetTick","pt":$n[0].Boolean,"ps":2}],"sn":"SetItemData","rt":$n[0].Void,"p":[$n[0].Int32,$n[0].Int32,$n[0].Boolean]},{"a":1,"n":"SetupInitialPositions","t":8,"sn":"SetupInitialPositions","rt":$n[0].Void},{"a":1,"n":"UpdateAllItemData","t":8,"pi":[{"n":"resetAllTicks","pt":$n[0].Boolean,"ps":0}],"sn":"UpdateAllItemData","rt":$n[0].Void,"p":[$n[0].Boolean]},{"a":1,"n":"UpdateEdgeVisibility","t":8,"sn":"UpdateEdgeVisibility","rt":$n[0].Void},{"a":2,"n":"CenterItemObj","t":16,"rt":$n[1].GameObject,"g":{"a":2,"n":"get_CenterItemObj","t":8,"rt":$n[1].GameObject,"fg":"CenterItemObj"},"fn":"CenterItemObj"},{"a":2,"n":"animationDuration","t":4,"rt":$n[0].Single,"sn":"animationDuration","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"centerPosition","t":4,"rt":$n[1].Vector3,"sn":"centerPosition"},{"a":2,"n":"currentIndex","t":4,"rt":$n[0].Int32,"sn":"currentIndex","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":1,"n":"isAnimating","t":4,"rt":$n[0].Boolean,"sn":"isAnimating","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"itemPrefab","t":4,"rt":$n[1].GameObject,"sn":"itemPrefab"},{"a":1,"n":"itemScripts","t":4,"rt":System.Array.type(scroller_Item),"sn":"itemScripts"},{"a":1,"n":"items","t":4,"rt":System.Array.type(UnityEngine.GameObject),"sn":"items"},{"a":2,"n":"largeScale","t":4,"rt":$n[1].Vector3,"sn":"largeScale"},{"a":2,"n":"leftPosition","t":4,"rt":$n[1].Vector3,"sn":"leftPosition"},{"a":2,"n":"rightPosition","t":4,"rt":$n[1].Vector3,"sn":"rightPosition"},{"a":2,"n":"smallScale","t":4,"rt":$n[1].Vector3,"sn":"smallScale"},{"a":1,"n":"toolSprites","t":4,"rt":$n[7].List$1(UnityEngine.Sprite),"sn":"toolSprites"}]}; }, $n);
    /*CarouselScroller end.*/

    /*ArrayExtensions start.*/
    $m("ArrayExtensions", function () { return {"att":1048961,"a":2,"s":true,"m":[{"a":2,"n":"RotateLeft","is":true,"t":8,"pi":[{"n":"array","pt":System.Array.type(System.Object),"ps":0}],"tpc":1,"tprm":["T"],"sn":"RotateLeft","rt":$n[0].Void,"p":[System.Array.type(System.Object)]},{"a":2,"n":"RotateRight","is":true,"t":8,"pi":[{"n":"array","pt":System.Array.type(System.Object),"ps":0}],"tpc":1,"tprm":["T"],"sn":"RotateRight","rt":$n[0].Void,"p":[System.Array.type(System.Object)]}]}; }, $n);
    /*ArrayExtensions end.*/

    /*scroller_Item start.*/
    $m("scroller_Item", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"bg","t":4,"rt":$n[8].Image,"sn":"bg"},{"a":2,"n":"bg_fade_L","t":4,"rt":$n[8].Image,"sn":"bg_fade_L"},{"a":2,"n":"bg_fade_R","t":4,"rt":$n[8].Image,"sn":"bg_fade_R"},{"a":2,"n":"can_group","t":4,"rt":$n[1].CanvasGroup,"sn":"can_group"},{"a":2,"n":"icon","t":4,"rt":$n[8].Image,"sn":"icon"},{"a":2,"n":"tick","t":4,"rt":$n[1].GameObject,"sn":"tick"}]}; }, $n);
    /*scroller_Item end.*/

    /*LoadingManager start.*/
    $m("LoadingManager", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"Awake","t":8,"sn":"Awake","rt":$n[0].Void},{"a":1,"n":"ExecuteLoading","t":8,"sn":"ExecuteLoading","rt":$n[4].IEnumerator},{"a":2,"n":"ShowFadeAnim","t":8,"pi":[{"n":"duration","pt":$n[0].Single,"ps":0},{"n":"innerDuration","pt":$n[0].Single,"ps":1}],"sn":"ShowFadeAnim","rt":$n[0].Void,"p":[$n[0].Single,$n[0].Single]},{"a":2,"n":"ShowLoading","t":8,"sn":"ShowLoading","rt":$n[0].Void},{"a":1,"n":"UpdateProgressText","t":8,"sn":"UpdateProgressText","rt":$n[4].IEnumerator},{"at":[new UnityEngine.SpaceAttribute.ctor()],"a":2,"n":"Canvas_Loading","t":4,"rt":$n[1].GameObject,"sn":"Canvas_Loading"},{"at":[new UnityEngine.SpaceAttribute.ctor()],"a":2,"n":"Fade_Img","t":4,"rt":$n[8].Image,"sn":"Fade_Img"},{"at":[new UnityEngine.HeaderAttribute("Loading Animation"),new UnityEngine.SpaceAttribute.ctor()],"a":2,"n":"animTime","t":4,"rt":$n[0].Single,"sn":"animTime","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"instance","is":true,"t":4,"rt":LoadingManager,"sn":"instance"},{"a":2,"n":"progressSlider","t":4,"rt":$n[8].Slider,"sn":"progressSlider"},{"a":2,"n":"progressTxt","t":4,"rt":$n[8].Text,"sn":"progressTxt"}]}; }, $n);
    /*LoadingManager end.*/

    /*PointerInput start.*/
    $m("PointerInput", function () { return {"att":1048961,"a":2,"s":true,"m":[{"a":2,"n":"IsOverCollider","is":true,"t":8,"pi":[{"n":"collider","pt":$n[1].Collider2D,"ps":0}],"sn":"IsOverCollider","rt":$n[0].Boolean,"p":[$n[1].Collider2D],"box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}}]}; }, $n);
    /*PointerInput end.*/

    /*Statics start.*/
    $m("Statics", function () { return {"att":1048961,"a":2,"s":true,"m":[{"a":2,"n":"GA_CustomStringEvent","is":true,"t":8,"pi":[{"n":"eventName","pt":$n[0].String,"ps":0}],"sn":"GA_CustomStringEvent","rt":$n[0].Void,"p":[$n[0].String]},{"a":2,"n":"GA_LevelCompleteEvent","is":true,"t":8,"pi":[{"n":"eventName","pt":$n[0].String,"ps":0}],"sn":"GA_LevelCompleteEvent","rt":$n[0].Void,"p":[$n[0].String]},{"a":2,"n":"GA_LevelStartEvent","is":true,"t":8,"pi":[{"n":"eventName","pt":$n[0].String,"ps":0}],"sn":"GA_LevelStartEvent","rt":$n[0].Void,"p":[$n[0].String]}]}; }, $n);
    /*Statics end.*/

    /*ToastManager start.*/
    $m("ToastManager", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"Awake","t":8,"sn":"Awake","rt":$n[0].Void},{"a":1,"n":"HideToast","t":8,"sn":"HideToast","rt":$n[0].Void},{"a":2,"n":"SendToast","t":8,"pi":[{"n":"message","pt":$n[0].String,"ps":0},{"n":"duration","dv":1.0,"o":true,"pt":$n[0].Single,"ps":1}],"sn":"SendToast","rt":$n[0].Void,"p":[$n[0].String,$n[0].Single]},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"animationTime","t":4,"rt":$n[0].Single,"sn":"animationTime","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"animationTimeUp","t":4,"rt":$n[0].Single,"sn":"animationTimeUp","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"canvasGroup","t":4,"rt":$n[1].CanvasGroup,"sn":"canvasGroup"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"endY","t":4,"rt":$n[0].Single,"sn":"endY","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"instance","is":true,"t":4,"rt":ToastManager,"sn":"instance"},{"at":[new UnityEngine.HeaderAttribute("Animation"),new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"startY","t":4,"rt":$n[0].Single,"sn":"startY","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"toastPanel","t":4,"rt":$n[1].GameObject,"sn":"toastPanel"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"toastPopup","t":4,"rt":$n[1].RectTransform,"sn":"toastPopup"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"toastText","t":4,"rt":$n[8].Text,"sn":"toastText"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"visibleY","t":4,"rt":$n[0].Single,"sn":"visibleY","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}}]}; }, $n);
    /*ToastManager end.*/

    /*UI_Manager start.*/
    $m("UI_Manager", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"Awake","t":8,"sn":"Awake","rt":$n[0].Void},{"a":2,"n":"Complete","t":8,"pi":[{"n":"duration","dv":2.0,"o":true,"pt":$n[0].Single,"ps":0}],"sn":"Complete","rt":$n[0].Void,"p":[$n[0].Single]},{"a":2,"n":"FadeAnim","t":8,"pi":[{"n":"duration","pt":$n[0].Single,"ps":0},{"n":"innerDelay","pt":$n[0].Single,"ps":1}],"sn":"FadeAnim","rt":$n[0].Void,"p":[$n[0].Single,$n[0].Single]},{"a":1,"n":"FadeGrey","t":8,"pi":[{"n":"grey","pt":$n[8].Image,"ps":0},{"n":"toAlpha","pt":$n[0].Single,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2}],"sn":"FadeGrey","rt":$n[0].Void,"p":[$n[8].Image,$n[0].Single,$n[0].Single]},{"a":1,"n":"FindChildObject","t":8,"pi":[{"n":"parent","pt":$n[1].GameObject,"ps":0},{"n":"childName","pt":$n[0].String,"ps":1}],"sn":"FindChildObject","rt":$n[1].GameObject,"p":[$n[1].GameObject,$n[0].String]},{"a":1,"n":"FindGreyImage","t":8,"pi":[{"n":"toolObject","pt":$n[1].GameObject,"ps":0}],"sn":"FindGreyImage","rt":$n[8].Image,"p":[$n[1].GameObject]},{"a":1,"n":"FindIconImage","t":8,"pi":[{"n":"toolObject","pt":$n[1].GameObject,"ps":0}],"sn":"FindIconImage","rt":$n[8].Image,"p":[$n[1].GameObject]},{"a":2,"n":"HideClockProgress","t":8,"sn":"HideClockProgress","rt":$n[0].Void},{"a":1,"n":"HideTool4","t":8,"sn":"HideTool4","rt":$n[0].Void},{"a":1,"n":"HideToolIcon","t":8,"pi":[{"n":"toolObject","pt":$n[1].GameObject,"ps":0},{"n":"bg","pt":$n[1].GameObject,"ps":1},{"n":"tick","pt":$n[1].GameObject,"ps":2}],"sn":"HideToolIcon","rt":$n[0].Void,"p":[$n[1].GameObject,$n[1].GameObject,$n[1].GameObject]},{"a":2,"n":"InitializeTools","t":8,"pi":[{"n":"toolIcons","pt":$n[7].List$1(UnityEngine.Sprite),"ps":0}],"sn":"InitializeTools","rt":$n[0].Void,"p":[$n[7].List$1(UnityEngine.Sprite)]},{"a":1,"n":"MoveButtonsIn","t":8,"sn":"MoveButtonsIn","rt":$n[0].Void},{"a":1,"n":"MoveButtonsOut","t":8,"sn":"MoveButtonsOut","rt":$n[0].Void},{"a":2,"n":"PauseState","t":8,"pi":[{"n":"state","pt":$n[0].Boolean,"ps":0}],"sn":"PauseState","rt":$n[0].Void,"p":[$n[0].Boolean]},{"a":2,"n":"RateUsState","t":8,"pi":[{"n":"state","pt":$n[0].Boolean,"ps":0}],"sn":"RateUsState","rt":$n[0].Void,"p":[$n[0].Boolean]},{"a":2,"n":"RemoveAdsState","t":8,"pi":[{"n":"state","pt":$n[0].Boolean,"ps":0}],"sn":"RemoveAdsState","rt":$n[0].Void,"p":[$n[0].Boolean]},{"a":1,"n":"SetGreyInstant","t":8,"pi":[{"n":"grey","pt":$n[8].Image,"ps":0},{"n":"alpha","pt":$n[0].Single,"ps":1}],"sn":"SetGreyInstant","rt":$n[0].Void,"p":[$n[8].Image,$n[0].Single]},{"a":2,"n":"SetProgressBar","t":8,"pi":[{"n":"progress","pt":$n[0].Single,"ps":0},{"n":"duration","dv":0.25,"o":true,"pt":$n[0].Single,"ps":1}],"sn":"SetProgressBar","rt":$n[0].Void,"p":[$n[0].Single,$n[0].Single]},{"a":1,"n":"SetProgressBarInstant","t":8,"pi":[{"n":"progress","pt":$n[0].Single,"ps":0}],"sn":"SetProgressBarInstant","rt":$n[0].Void,"p":[$n[0].Single]},{"a":2,"n":"SetProgressBarPos","t":8,"sn":"SetProgressBarPos","rt":$n[0].Void},{"a":2,"n":"SetProgressIconIndex","t":8,"pi":[{"n":"stepIndex","pt":$n[0].Int32,"ps":0}],"sn":"SetProgressIconIndex","rt":$n[0].Void,"p":[$n[0].Int32]},{"a":1,"n":"SetToolIcon","t":8,"pi":[{"n":"toolObject","pt":$n[1].GameObject,"ps":0},{"n":"iconImage","pt":$n[8].Image,"ps":1},{"n":"bg","pt":$n[1].GameObject,"ps":2},{"n":"tick","pt":$n[1].GameObject,"ps":3},{"n":"sprite","pt":$n[1].Sprite,"ps":4}],"sn":"SetToolIcon","rt":$n[0].Void,"p":[$n[1].GameObject,$n[8].Image,$n[1].GameObject,$n[1].GameObject,$n[1].Sprite]},{"a":1,"n":"SetupToolIconReferences","t":8,"sn":"SetupToolIconReferences","rt":$n[0].Void},{"a":2,"n":"ShowClockProgress","t":8,"pi":[{"n":"duration","pt":$n[0].Single,"ps":0}],"sn":"ShowClockProgress","rt":$n[0].Void,"p":[$n[0].Single]},{"a":2,"n":"ShowClockProgress","t":8,"pi":[{"n":"duration","pt":$n[0].Single,"ps":0},{"n":"startFill","pt":$n[0].Single,"ps":1}],"sn":"ShowClockProgress$1","rt":$n[0].Void,"p":[$n[0].Single,$n[0].Single]},{"a":2,"n":"ShowCompleteParticles","t":8,"sn":"ShowCompleteParticles","rt":$n[0].Void},{"a":1,"n":"ShowTool4Animated","t":8,"sn":"ShowTool4Animated","rt":$n[0].Void},{"a":1,"n":"ShowTool4Instant","t":8,"sn":"ShowTool4Instant","rt":$n[0].Void},{"a":1,"n":"ShowToolIcon","t":8,"pi":[{"n":"toolObject","pt":$n[1].GameObject,"ps":0},{"n":"bg","pt":$n[1].GameObject,"ps":1},{"n":"tick","pt":$n[1].GameObject,"ps":2}],"sn":"ShowToolIcon","rt":$n[0].Void,"p":[$n[1].GameObject,$n[1].GameObject,$n[1].GameObject]},{"a":1,"n":"ShowToolTick","t":8,"pi":[{"n":"index","pt":$n[0].Int32,"ps":0}],"sn":"ShowToolTick","rt":$n[0].Void,"p":[$n[0].Int32]},{"a":1,"n":"Update","t":8,"sn":"Update","rt":$n[0].Void},{"a":2,"n":"isOverUI","t":8,"sn":"isOverUI","rt":$n[0].Boolean,"box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"at":[new UnityEngine.SpaceAttribute.ctor()],"a":2,"n":"CompletePanel","t":4,"rt":$n[1].GameObject,"sn":"CompletePanel"},{"a":2,"n":"CompleteParticles","t":4,"rt":$n[1].GameObject,"sn":"CompleteParticles"},{"at":[new UnityEngine.HeaderAttribute("---------------------- PANELs ----------------------"),new UnityEngine.SpaceAttribute.ctor()],"a":2,"n":"Fade_Img","t":4,"rt":$n[8].Image,"sn":"Fade_Img"},{"a":1,"n":"HOLD_DURATION","is":true,"t":4,"rt":$n[0].Single,"sn":"HOLD_DURATION","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"LevelIcon","t":4,"rt":$n[8].Image,"sn":"LevelIcon"},{"at":[new UnityEngine.SpaceAttribute.ctor()],"a":2,"n":"MainPanel","t":4,"rt":$n[1].GameObject,"sn":"MainPanel"},{"a":2,"n":"PauseCanvasGroup","t":4,"rt":$n[1].CanvasGroup,"sn":"PauseCanvasGroup"},{"at":[new UnityEngine.SpaceAttribute.ctor()],"a":2,"n":"PausePanel","t":4,"rt":$n[1].GameObject,"sn":"PausePanel"},{"a":2,"n":"PausePopUp","t":4,"rt":$n[1].GameObject,"sn":"PausePopUp"},{"at":[new UnityEngine.SpaceAttribute.ctor()],"a":2,"n":"RateUsPanel","t":4,"rt":$n[1].GameObject,"sn":"RateUsPanel"},{"a":2,"n":"RateUsPopUp","t":4,"rt":$n[1].GameObject,"sn":"RateUsPopUp"},{"a":2,"n":"RemoveAdsAnims","t":4,"rt":System.Array.type(DG.Tweening.DOTweenAnimation),"sn":"RemoveAdsAnims"},{"a":2,"n":"RemoveAdsCanvasGroup","t":4,"rt":$n[1].CanvasGroup,"sn":"RemoveAdsCanvasGroup"},{"at":[new UnityEngine.SpaceAttribute.ctor()],"a":2,"n":"RemoveAdsPanel","t":4,"rt":$n[1].GameObject,"sn":"RemoveAdsPanel"},{"a":2,"n":"RemoveAdsPopUp","t":4,"rt":$n[1].GameObject,"sn":"RemoveAdsPopUp"},{"at":[new UnityEngine.SpaceAttribute.ctor()],"a":2,"n":"TopBarAnim","t":4,"rt":$n[6].DOTweenAnimation,"sn":"TopBarAnim"},{"at":[new UnityEngine.SpaceAttribute.ctor()],"a":2,"n":"allTools","t":4,"rt":$n[7].List$1(UnityEngine.Sprite),"sn":"allTools"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"animationDuration","t":4,"rt":$n[0].Single,"sn":"animationDuration","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"clockAudio","t":4,"rt":$n[1].AudioSource,"sn":"clockAudio"},{"at":[new UnityEngine.HeaderAttribute("---------------------- CLOCK ----------------------"),new UnityEngine.SpaceAttribute.ctor()],"a":2,"n":"clockProgress","t":4,"rt":$n[1].GameObject,"sn":"clockProgress"},{"a":2,"n":"clockProgressFill","t":4,"rt":$n[8].Image,"sn":"clockProgressFill"},{"at":[new UnityEngine.SpaceAttribute.ctor()],"a":2,"n":"currentIndex","t":4,"rt":$n[0].Int32,"sn":"currentIndex","box":function ($v) { return Bridge.box($v, System.Int32);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"greyBgChildName","t":4,"rt":$n[0].String,"sn":"greyBgChildName"},{"a":1,"n":"holdTimer","t":4,"rt":$n[0].Single,"sn":"holdTimer","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"instance","is":true,"t":4,"rt":UI_Manager,"sn":"instance"},{"a":2,"n":"isPauseActive","t":4,"rt":$n[0].Boolean,"sn":"isPauseActive","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":1,"n":"isTouching","t":4,"rt":$n[0].Boolean,"sn":"isTouching","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"at":[new UnityEngine.SpaceAttribute.ctor()],"a":2,"n":"levelCompleted","t":4,"rt":$n[0].Boolean,"sn":"levelCompleted","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"at":[new UnityEngine.SpaceAttribute.ctor()],"a":2,"n":"loadIndex","t":4,"rt":$n[0].Int32,"sn":"loadIndex","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":1,"n":"m_LastPressTime","t":4,"rt":$n[0].Single,"sn":"m_LastPressTime","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"m_PressDelay","t":4,"rt":$n[0].Single,"sn":"m_PressDelay","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"moveDistance","t":4,"rt":$n[0].Single,"sn":"moveDistance","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"nextToolIndex","t":4,"rt":$n[0].Int32,"sn":"nextToolIndex","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"pauseButton","t":4,"rt":$n[1].RectTransform,"sn":"pauseButton"},{"a":1,"n":"pauseButtonStartPos","t":4,"rt":$n[1].Vector2,"sn":"pauseButtonStartPos"},{"at":[new UnityEngine.SpaceAttribute.ctor(),new UnityEngine.HeaderAttribute("-------------------------------- TOP BAR ---------------------------------------"),new UnityEngine.SpaceAttribute.ctor()],"a":2,"n":"progressBar","t":4,"rt":$n[8].Image,"sn":"progressBar"},{"a":2,"n":"progressText","t":4,"rt":$n[8].Text,"sn":"progressText"},{"at":[new UnityEngine.HeaderAttribute("Tool Bar Animation Settings"),new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"pushOffset","t":4,"rt":$n[0].Single,"sn":"pushOffset","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SpaceAttribute.ctor(),new UnityEngine.HeaderAttribute("-------------------------------- UI BTNs ---------------------------------------"),new UnityEngine.SpaceAttribute.ctor(),new UnityEngine.SpaceAttribute.ctor()],"a":2,"n":"removeAdsButton","t":4,"rt":$n[1].RectTransform,"sn":"removeAdsButton"},{"a":1,"n":"removeAdsButtonStartPos","t":4,"rt":$n[1].Vector2,"sn":"removeAdsButtonStartPos"},{"a":1,"n":"showTick","t":4,"rt":$n[0].Boolean,"sn":"showTick","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"at":[new UnityEngine.HeaderAttribute("Tool Bar Targets")],"a":2,"n":"target1","t":4,"rt":$n[1].RectTransform,"sn":"target1"},{"a":2,"n":"target2","t":4,"rt":$n[1].RectTransform,"sn":"target2"},{"a":1,"n":"tool1Bg","t":4,"rt":$n[1].GameObject,"sn":"tool1Bg"},{"a":1,"n":"tool1BgGrey","t":4,"rt":$n[8].Image,"sn":"tool1BgGrey"},{"a":1,"n":"tool1Icon","t":4,"rt":$n[8].Image,"sn":"tool1Icon"},{"a":1,"n":"tool1Tick","t":4,"rt":$n[1].GameObject,"sn":"tool1Tick"},{"a":1,"n":"tool2Bg","t":4,"rt":$n[1].GameObject,"sn":"tool2Bg"},{"a":1,"n":"tool2BgGrey","t":4,"rt":$n[8].Image,"sn":"tool2BgGrey"},{"a":1,"n":"tool2Icon","t":4,"rt":$n[8].Image,"sn":"tool2Icon"},{"a":1,"n":"tool2Tick","t":4,"rt":$n[1].GameObject,"sn":"tool2Tick"},{"a":1,"n":"tool3Bg","t":4,"rt":$n[1].GameObject,"sn":"tool3Bg"},{"a":1,"n":"tool3BgGrey","t":4,"rt":$n[8].Image,"sn":"tool3BgGrey"},{"a":1,"n":"tool3Icon","t":4,"rt":$n[8].Image,"sn":"tool3Icon"},{"a":1,"n":"tool3Tick","t":4,"rt":$n[1].GameObject,"sn":"tool3Tick"},{"at":[new UnityEngine.HeaderAttribute("Tool Bar Icons")],"a":2,"n":"toolIcon1","t":4,"rt":$n[1].GameObject,"sn":"toolIcon1"},{"a":2,"n":"toolIcon2","t":4,"rt":$n[1].GameObject,"sn":"toolIcon2"},{"a":2,"n":"toolIcon3","t":4,"rt":$n[1].GameObject,"sn":"toolIcon3"},{"at":[new UnityEngine.TooltipAttribute("Last-tool placeholder (the star). Fills the empty 'next' slot once there is no real next tool left. It always lives at target2 and is never recycled as tool1/2/3, so only its position and alpha ever animate.")],"a":2,"n":"toolIcon4","t":4,"rt":$n[1].GameObject,"sn":"toolIcon4"},{"at":[new UnityEngine.HeaderAttribute("Tool Bar Animation")],"a":2,"n":"toolMoveDuration","t":4,"rt":$n[0].Single,"sn":"toolMoveDuration","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}}]}; }, $n);
    /*UI_Manager end.*/

    /*HalloweenCrownGameManager start.*/
    $m("HalloweenCrownGameManager", function () { return {"att":1048833,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"ov":true,"a":2,"n":"Complete","t":8,"sn":"Complete","rt":$n[0].Void},{"a":2,"n":"rinse","t":4,"rt":HalloweenCrownRinse,"sn":"rinse"}]}; }, $n);
    /*HalloweenCrownGameManager end.*/

    /*HalloweenCrownRinse start.*/
    $m("HalloweenCrownRinse", function () { return {"att":1048833,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"Begin","t":8,"sn":"Begin","rt":$n[0].Void},{"a":1,"n":"Enter","t":8,"sn":"Enter","rt":$n[4].IEnumerator},{"a":1,"n":"Finish","t":8,"sn":"Finish","rt":$n[4].IEnumerator},{"a":1,"n":"LateUpdate","t":8,"sn":"LateUpdate","rt":$n[0].Void},{"a":2,"n":"SprayAt","t":8,"pi":[{"n":"worldPoint","pt":$n[1].Vector3,"ps":0}],"sn":"SprayAt","rt":$n[0].Void,"p":[$n[1].Vector3]},{"a":2,"n":"Begun","t":16,"rt":$n[0].Boolean,"g":{"a":2,"n":"get_Begun","t":8,"rt":$n[0].Boolean,"fg":"Begun","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},"s":{"a":1,"n":"set_Begun","t":8,"p":[$n[0].Boolean],"rt":$n[0].Void,"fs":"Begun"},"fn":"Begun"},{"a":2,"n":"Finished","t":16,"rt":$n[0].Boolean,"g":{"a":2,"n":"get_Finished","t":8,"rt":$n[0].Boolean,"fg":"Finished","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},"s":{"a":1,"n":"set_Finished","t":8,"p":[$n[0].Boolean],"rt":$n[0].Void,"fs":"Finished"},"fn":"Finished"},{"a":2,"n":"RinseProgress","t":16,"rt":$n[0].Single,"g":{"a":2,"n":"get_RinseProgress","t":8,"rt":$n[0].Single,"fg":"RinseProgress","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},"s":{"a":1,"n":"set_RinseProgress","t":8,"p":[$n[0].Single],"rt":$n[0].Void,"fs":"RinseProgress"},"fn":"RinseProgress"},{"a":2,"n":"cleanCrown","t":4,"rt":$n[1].SpriteRenderer,"sn":"cleanCrown"},{"a":2,"n":"dockPosition","t":4,"rt":$n[1].Vector3,"sn":"dockPosition"},{"at":[new UnityEngine.RangeAttribute(0.7, 1.0)],"a":2,"n":"finishThreshold","t":4,"rt":$n[0].Single,"sn":"finishThreshold","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"finishing","t":4,"rt":$n[0].Boolean,"sn":"finishing","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"foamSurface","t":4,"rt":$n[5].ScratchCardManager,"sn":"foamSurface"},{"a":2,"n":"impactTip","t":4,"rt":$n[1].Transform,"sn":"impactTip"},{"a":2,"n":"level","t":4,"rt":Level3_Crown_Playable,"sn":"level"},{"a":1,"n":"nextProgress","t":4,"rt":$n[0].Single,"sn":"nextProgress","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"priorLayers","t":4,"rt":System.Array.type(UnityEngine.GameObject),"sn":"priorLayers"},{"a":1,"n":"ready","t":4,"rt":$n[0].Boolean,"sn":"ready","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"waterEffects","t":4,"rt":System.Array.type(UnityEngine.ParticleSystem),"sn":"waterEffects"},{"a":2,"n":"waterTool","t":4,"rt":BasicDrag,"sn":"waterTool"},{"a":1,"backing":true,"n":"<Begun>k__BackingField","t":4,"rt":$n[0].Boolean,"sn":"Begun","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":1,"backing":true,"n":"<Finished>k__BackingField","t":4,"rt":$n[0].Boolean,"sn":"Finished","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":1,"backing":true,"n":"<RinseProgress>k__BackingField","t":4,"rt":$n[0].Single,"sn":"RinseProgress","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}}]}; }, $n);
    /*HalloweenCrownRinse end.*/

    /*HalloweenToolRigFit start.*/
    $m("HalloweenToolRigFit", function () { return {"att":1048833,"a":2,"at":[new UnityEngine.DefaultExecutionOrder(-10000),new UnityEngine.DisallowMultipleComponent(),new UnityEngine.RequireComponent.ctor(UnityEngine.SpriteRenderer)],"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"ApplyFit","t":8,"sn":"ApplyFit","rt":$n[0].Void},{"a":1,"n":"LateUpdate","t":8,"sn":"LateUpdate","rt":$n[0].Void},{"a":1,"n":"OnEnable","t":8,"sn":"OnEnable","rt":$n[0].Void},{"a":2,"n":"authoredCenter","t":4,"rt":$n[1].Vector2,"sn":"authoredCenter"},{"a":2,"n":"authoredSize","t":4,"rt":$n[1].Vector2,"sn":"authoredSize"},{"a":1,"n":"fittedSprite","t":4,"rt":$n[1].Sprite,"sn":"fittedSprite"},{"a":2,"n":"skinRoot","t":4,"rt":$n[1].Transform,"sn":"skinRoot"},{"a":1,"n":"surface","t":4,"rt":$n[1].SpriteRenderer,"sn":"surface"}]}; }, $n);
    /*HalloweenToolRigFit end.*/

    /*GameManagerPlayable start.*/
    $m("GameManagerPlayable", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"ov":true,"a":2,"n":"Complete","t":8,"sn":"Complete","rt":$n[0].Void},{"a":2,"n":"LunaDirect","t":8,"sn":"LunaDirect","rt":$n[0].Void},{"a":1,"n":"OnEnable","t":8,"sn":"OnEnable","rt":$n[0].Void},{"a":1,"n":"PlayParticles","is":true,"t":8,"pi":[{"n":"particles","pt":$n[1].ParticleSystem,"ps":0}],"sn":"PlayParticles","rt":$n[0].Void,"p":[$n[1].ParticleSystem]},{"a":2,"n":"PlayStepComplete","is":true,"t":8,"sn":"PlayStepComplete","rt":$n[0].Void},{"a":1,"n":"active","is":true,"t":4,"rt":GameManagerPlayable,"sn":"active"},{"at":[new UnityEngine.TooltipAttribute("Plays once, when the level genuinely completes. Set its own Looping module on to have it play continuously.")],"a":2,"n":"endParticles","t":4,"rt":$n[1].ParticleSystem,"sn":"endParticles"},{"at":[new UnityEngine.TooltipAttribute("One-shot burst (confetti cannon, etc). Play it by calling PlayStepComplete() from each step's own StepNComplete()/StepNDone() method.")],"a":2,"n":"stepCompleteParticles","t":4,"rt":$n[1].ParticleSystem,"sn":"stepCompleteParticles"}]}; }, $n);
    /*GameManagerPlayable end.*/

    /*Level3_Crown_Playable start.*/
    $m("Level3_Crown_Playable", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"AdvanceProgressIcon","t":8,"sn":"AdvanceProgressIcon","rt":$n[0].Void},{"a":1,"n":"ForceCompleteStep1","t":8,"sn":"ForceCompleteStep1","rt":$n[0].Void},{"a":1,"n":"ForceCompleteStep2","t":8,"sn":"ForceCompleteStep2","rt":$n[0].Void},{"a":1,"n":"ForceCompleteStep3","t":8,"sn":"ForceCompleteStep3","rt":$n[0].Void},{"a":1,"n":"Start","t":8,"sn":"Start","rt":$n[4].IEnumerator},{"a":1,"n":"StartStep1","t":8,"sn":"StartStep1","rt":$n[0].Void},{"a":1,"n":"StartStep2","t":8,"sn":"StartStep2","rt":$n[0].Void},{"a":1,"n":"StartStep3","t":8,"sn":"StartStep3","rt":$n[0].Void},{"a":2,"n":"Step1Done","t":8,"sn":"Step1Done","rt":$n[0].Void},{"a":2,"n":"Step2Done","t":8,"sn":"Step2Done","rt":$n[0].Void},{"a":2,"n":"Step3Done","t":8,"sn":"Step3Done","rt":$n[0].Void},{"at":[new UnityEngine.SpaceAttribute.ctor()],"a":2,"n":"DustSR_1","t":4,"rt":$n[1].GameObject,"sn":"DustSR_1"},{"at":[new UnityEngine.SpaceAttribute.ctor(),new UnityEngine.HeaderAttribute("----------------------------------------------------------------------------------"),new UnityEngine.SpaceAttribute.ctor()],"a":2,"n":"MainZoom","t":4,"rt":ZoomPos,"sn":"MainZoom"},{"at":[new UnityEngine.SpaceAttribute.ctor()],"a":2,"n":"Mix","t":4,"rt":$n[1].GameObject,"sn":"Mix"},{"a":2,"n":"MixE","t":4,"rt":$n[1].GameObject,"sn":"MixE"},{"at":[new UnityEngine.SpaceAttribute.ctor()],"a":2,"n":"SRsToFadeOut_2","t":4,"rt":System.Array.type(UnityEngine.SpriteRenderer),"sn":"SRsToFadeOut_2"},{"at":[new UnityEngine.SpaceAttribute.ctor()],"a":2,"n":"SpraySR_2","t":4,"rt":$n[1].SpriteRenderer,"sn":"SpraySR_2"},{"at":[new UnityEngine.SpaceAttribute.ctor()],"a":2,"n":"Step1Col","t":4,"rt":$n[1].GameObject,"sn":"Step1Col"},{"at":[new UnityEngine.SpaceAttribute.ctor()],"a":2,"n":"Step3Col","t":4,"rt":$n[1].GameObject,"sn":"Step3Col"},{"at":[new UnityEngine.SpaceAttribute.ctor()],"a":2,"n":"ToolStep1","t":4,"rt":BasicDrag,"sn":"ToolStep1"},{"at":[new UnityEngine.SpaceAttribute.ctor()],"a":2,"n":"ToolStep1CameraFollow","t":4,"rt":BD_CameraFollow,"sn":"ToolStep1CameraFollow"},{"at":[new UnityEngine.SpaceAttribute.ctor()],"a":2,"n":"ToolStep2","t":4,"rt":BasicDrag,"sn":"ToolStep2"},{"at":[new UnityEngine.SpaceAttribute.ctor()],"a":2,"n":"ToolStep2CameraFollow","t":4,"rt":BD_CameraFollow,"sn":"ToolStep2CameraFollow"},{"at":[new UnityEngine.SpaceAttribute.ctor()],"a":2,"n":"ToolStep3","t":4,"rt":BasicDrag,"sn":"ToolStep3"},{"at":[new UnityEngine.SpaceAttribute.ctor()],"a":2,"n":"ToolStep3CameraFollow","t":4,"rt":BD_CameraFollow,"sn":"ToolStep3CameraFollow"},{"at":[new UnityEngine.SpaceAttribute.ctor()],"a":2,"n":"View1","t":4,"rt":$n[1].GameObject,"sn":"View1"},{"a":2,"n":"View2","t":4,"rt":$n[1].GameObject,"sn":"View2"},{"at":[new UnityEngine.HeaderAttribute("----------------- STEP 1 ----------------------"),new UnityEngine.SpaceAttribute.ctor()],"a":2,"n":"ZoomStep1","t":4,"rt":ZoomPos,"sn":"ZoomStep1"},{"at":[new UnityEngine.HeaderAttribute("----------------- STEP 2 ----------------------"),new UnityEngine.SpaceAttribute.ctor()],"a":2,"n":"ZoomStep2","t":4,"rt":ZoomPos,"sn":"ZoomStep2"},{"at":[new UnityEngine.HeaderAttribute("----------------- STEP 3 ----------------------"),new UnityEngine.SpaceAttribute.ctor()],"a":2,"n":"ZoomStep3","t":4,"rt":ZoomPos,"sn":"ZoomStep3"},{"a":1,"n":"isStep1Done","t":4,"rt":$n[0].Boolean,"sn":"isStep1Done","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":1,"n":"isStep2Done","t":4,"rt":$n[0].Boolean,"sn":"isStep2Done","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":1,"n":"isStep3Done","t":4,"rt":$n[0].Boolean,"sn":"isStep3Done","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":1,"n":"skipIconAdvance","t":4,"rt":$n[0].Boolean,"sn":"skipIconAdvance","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}}]}; }, $n);
    /*Level3_Crown_Playable end.*/

    /*PlayableCTA start.*/
    $m("PlayableCTA", function () { return {"nested":[PlayableCTA.Trigger],"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"Fire","t":8,"pi":[{"n":"showCardThisFire","pt":$n[0].Boolean,"ps":0}],"sn":"Fire","rt":$n[0].Void,"p":[$n[0].Boolean]},{"a":2,"n":"FireCTA","t":8,"sn":"FireCTA","rt":$n[0].Void},{"a":1,"n":"FireFromTrigger","t":8,"sn":"FireFromTrigger","rt":$n[0].Void},{"a":2,"n":"FireNow","is":true,"t":8,"sn":"FireNow","rt":$n[0].Void},{"a":1,"n":"HasScratchStarted","is":true,"t":8,"pi":[{"n":"progress","pt":BD_Progress,"ps":0},{"n":"index","pt":$n[0].Int32,"ps":1}],"sn":"HasScratchStarted","rt":$n[0].Boolean,"p":[BD_Progress,$n[0].Int32],"box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":1,"n":"IsCardScratched","is":true,"t":8,"pi":[{"n":"sd","pt":ScratchData,"ps":0}],"sn":"IsCardScratched","rt":$n[0].Boolean,"p":[ScratchData],"box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":1,"n":"OnDisable","t":8,"sn":"OnDisable","rt":$n[0].Void},{"a":1,"n":"OnEnable","t":8,"sn":"OnEnable","rt":$n[0].Void},{"a":1,"n":"OpenStore","t":8,"sn":"OpenStore","rt":$n[0].Void},{"a":2,"n":"OpenStoreOnly","is":true,"t":8,"sn":"OpenStoreOnly","rt":$n[0].Void},{"a":1,"n":"OpenStoreStatic","is":true,"t":8,"pi":[{"n":"log","pt":$n[0].Boolean,"ps":0}],"sn":"OpenStoreStatic","rt":$n[0].Void,"p":[$n[0].Boolean]},{"a":1,"n":"ShowEndCard","t":8,"sn":"ShowEndCard","rt":$n[0].Void},{"a":1,"n":"Update","t":8,"sn":"Update","rt":$n[0].Void},{"a":2,"n":"HasFired","t":16,"rt":$n[0].Boolean,"g":{"a":2,"n":"get_HasFired","t":8,"rt":$n[0].Boolean,"fg":"HasFired","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},"s":{"a":1,"n":"set_HasFired","t":8,"p":[$n[0].Boolean],"rt":$n[0].Void,"fs":"HasFired"},"fn":"HasFired"},{"a":1,"n":"active","is":true,"t":4,"rt":PlayableCTA,"sn":"active"},{"at":[new UnityEngine.TooltipAttribute("Trigger = AfterSeconds: seconds until the CTA fires.")],"a":2,"n":"afterSeconds","t":4,"rt":$n[0].Single,"sn":"afterSeconds","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.TooltipAttribute("Trigger = AfterTaps: how many taps anywhere before the CTA fires.")],"a":2,"n":"afterTaps","t":4,"rt":$n[0].Int32,"sn":"afterTaps","box":function ($v) { return Bridge.box($v, System.Int32);}},{"at":[new UnityEngine.HeaderAttribute("After it has fired"),new UnityEngine.TooltipAttribute("Stop all drags and pause GameManager the instant the CTA fires, so it can't also be read as a drag. Off = gameplay keeps running under the CTA (soft/banner CTA).")],"a":2,"n":"blockInputOnFire","t":4,"rt":$n[0].Boolean,"sn":"blockInputOnFire","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":1,"n":"enabledAt","t":4,"rt":$n[0].Single,"sn":"enabledAt","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.TooltipAttribute("End-card canvas/root, activated when the CTA fires.")],"a":2,"n":"endCard","t":4,"rt":$n[1].GameObject,"sn":"endCard"},{"at":[new UnityEngine.TooltipAttribute("Seconds between the CTA firing and the end card actually appearing \u2014 gives GameManagerPlayable's endParticles a moment to play before the card covers them. 0 = instant (old behaviour). Everything else (input block, onCtaFired, the store call) still happens immediately; only the end card's own appearance is delayed.")],"a":2,"n":"endCardDelay","t":4,"rt":$n[0].Single,"sn":"endCardDelay","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"lastFireTime","t":4,"rt":$n[0].Single,"sn":"lastFireTime","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.TooltipAttribute("Logs to the console every time the CTA fires. Handy while wiring things up.")],"a":2,"n":"logWhenFired","t":4,"rt":$n[0].Boolean,"sn":"logWhenFired","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"at":[new UnityEngine.HeaderAttribute("Extras"),new UnityEngine.TooltipAttribute("Runs once, the first time the CTA fires (hide HUD, ...).")],"a":2,"n":"onCtaFired","t":4,"rt":$n[3].UnityEvent,"sn":"onCtaFired"},{"at":[new UnityEngine.TooltipAttribute("Trigger = AfterProgress: 0..1 progress that fires the CTA once reached.")],"a":2,"n":"progressThreshold","t":4,"rt":$n[0].Single,"sn":"progressThreshold","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.TooltipAttribute("Minimum gap between re-fires, so one physical tap can't fire twice across frames.")],"a":2,"n":"refireDelay","t":4,"rt":$n[0].Single,"sn":"refireDelay","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.TooltipAttribute("Every further tap re-opens the store page. Standard playable end-card behaviour.")],"a":2,"n":"refireOnEveryTap","t":4,"rt":$n[0].Boolean,"sn":"refireOnEveryTap","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"at":[new UnityEngine.TooltipAttribute("Trigger = AfterProgress: index into scratchProgress.AllScratches to track. -1 = collective progress of all of them.")],"a":2,"n":"scratchIndex","t":4,"rt":$n[0].Int32,"sn":"scratchIndex","box":function ($v) { return Bridge.box($v, System.Int32);}},{"at":[new UnityEngine.TooltipAttribute("Trigger = AfterProgress: the scratch card (erase or restore) whose progress to watch.")],"a":2,"n":"scratchProgress","t":4,"rt":BD_Progress,"sn":"scratchProgress"},{"at":[new UnityEngine.HeaderAttribute("End card (optional)"),new UnityEngine.TooltipAttribute("Show endCard when the CTA fires.")],"a":2,"n":"showEndCard","t":4,"rt":$n[0].Boolean,"sn":"showEndCard","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"at":[new UnityEngine.TooltipAttribute("If trigger = AfterProgress, show the end card too (normally reserved for genuine level completion, not mid-scratch progress).")],"a":2,"n":"showEndCardOnProgressTrigger","t":4,"rt":$n[0].Boolean,"sn":"showEndCardOnProgressTrigger","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":1,"n":"tapCount","t":4,"rt":$n[0].Int32,"sn":"tapCount","box":function ($v) { return Bridge.box($v, System.Int32);}},{"at":[new UnityEngine.TooltipAttribute("Switched OFF at the same moment the end card appears (HUD, tool bar, ...) \u2014 the playable never runs UI_Manager.Complete(), so nothing else does this.")],"a":2,"n":"thingsToDisableOnEndCard","t":4,"rt":System.Array.type(UnityEngine.GameObject),"sn":"thingsToDisableOnEndCard"},{"at":[new UnityEngine.HeaderAttribute("When should the CTA fire?")],"a":2,"n":"trigger","t":4,"rt":PlayableCTA.Trigger,"sn":"trigger","box":function ($v) { return Bridge.box($v, PlayableCTA.Trigger, System.Enum.toStringFn(PlayableCTA.Trigger));}},{"a":1,"backing":true,"n":"<HasFired>k__BackingField","t":4,"rt":$n[0].Boolean,"sn":"HasFired","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}}]}; }, $n);
    /*PlayableCTA end.*/

    /*PlayableCTA+Trigger start.*/
    $m("PlayableCTA.Trigger", function () { return {"td":PlayableCTA,"att":258,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"AfterProgress","is":true,"t":4,"rt":PlayableCTA.Trigger,"sn":"AfterProgress","box":function ($v) { return Bridge.box($v, PlayableCTA.Trigger, System.Enum.toStringFn(PlayableCTA.Trigger));}},{"a":2,"n":"AfterSeconds","is":true,"t":4,"rt":PlayableCTA.Trigger,"sn":"AfterSeconds","box":function ($v) { return Bridge.box($v, PlayableCTA.Trigger, System.Enum.toStringFn(PlayableCTA.Trigger));}},{"a":2,"n":"AfterTaps","is":true,"t":4,"rt":PlayableCTA.Trigger,"sn":"AfterTaps","box":function ($v) { return Bridge.box($v, PlayableCTA.Trigger, System.Enum.toStringFn(PlayableCTA.Trigger));}},{"a":2,"n":"Immediately","is":true,"t":4,"rt":PlayableCTA.Trigger,"sn":"Immediately","box":function ($v) { return Bridge.box($v, PlayableCTA.Trigger, System.Enum.toStringFn(PlayableCTA.Trigger));}},{"a":2,"n":"Manual","is":true,"t":4,"rt":PlayableCTA.Trigger,"sn":"Manual","box":function ($v) { return Bridge.box($v, PlayableCTA.Trigger, System.Enum.toStringFn(PlayableCTA.Trigger));}}]}; }, $n);
    /*PlayableCTA+Trigger end.*/

    /*PlayableFadeCoverSettings start.*/
    $m("PlayableFadeCoverSettings", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"OnDisable","t":8,"sn":"OnDisable","rt":$n[0].Void},{"a":1,"n":"OnEnable","t":8,"sn":"OnEnable","rt":$n[0].Void},{"a":2,"n":"Active","is":true,"t":16,"rt":PlayableFadeCoverSettings,"g":{"a":2,"n":"get_Active","t":8,"rt":PlayableFadeCoverSettings,"fg":"Active","is":true},"s":{"a":1,"n":"set_Active","t":8,"p":[PlayableFadeCoverSettings],"rt":$n[0].Void,"fs":"Active","is":true},"fn":"Active"},{"at":[new UnityEngine.TooltipAttribute("Seconds the screen stays fully covered after StartStepN fires, before the fade-out begins.")],"a":2,"n":"revealDelay","t":4,"rt":$n[0].Single,"sn":"revealDelay","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.TooltipAttribute("Seconds the fade-out itself takes once it starts.")],"a":2,"n":"revealDuration","t":4,"rt":$n[0].Single,"sn":"revealDuration","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"backing":true,"n":"<Active>k__BackingField","is":true,"t":4,"rt":PlayableFadeCoverSettings,"sn":"Active"}]}; }, $n);
    /*PlayableFadeCoverSettings end.*/

    /*PlayableHudRuntime start.*/
    $m("PlayableHudRuntime", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"Awake","t":8,"sn":"Awake","rt":$n[0].Void},{"a":1,"n":"OnPlayClicked","t":8,"sn":"OnPlayClicked","rt":$n[0].Void},{"a":2,"n":"Instance","is":true,"t":16,"rt":PlayableHudRuntime,"g":{"a":2,"n":"get_Instance","t":8,"rt":PlayableHudRuntime,"fg":"Instance","is":true},"s":{"a":1,"n":"set_Instance","t":8,"p":[PlayableHudRuntime],"rt":$n[0].Void,"fs":"Instance","is":true},"fn":"Instance"},{"a":1,"backing":true,"n":"<Instance>k__BackingField","is":true,"t":4,"rt":PlayableHudRuntime,"sn":"Instance"}]}; }, $n);
    /*PlayableHudRuntime end.*/

    /*PlayableInstall start.*/
    $m("PlayableInstall", function () { return {"att":1048961,"a":2,"s":true,"m":[{"a":2,"n":"Go","is":true,"t":8,"sn":"Go","rt":$n[0].Void}]}; }, $n);
    /*PlayableInstall end.*/

    /*IAmAnEmptyScriptJustToMakeCodelessProjectsCompileProperty start.*/
    $m("IAmAnEmptyScriptJustToMakeCodelessProjectsCompileProperty", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"}]}; }, $n);
    /*IAmAnEmptyScriptJustToMakeCodelessProjectsCompileProperty end.*/

    /*DG.Tweening.DOTweenModuleAudio start.*/
    $m("DG.Tweening.DOTweenModuleAudio", function () { return {"att":1048961,"a":2,"s":true,"m":[{"a":2,"n":"DOComplete","is":true,"t":8,"pi":[{"n":"target","pt":$n[2].AudioMixer,"ps":0},{"n":"withCallbacks","dv":false,"o":true,"pt":$n[0].Boolean,"ps":1}],"sn":"DOComplete","rt":$n[0].Int32,"p":[$n[2].AudioMixer,$n[0].Boolean],"box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"DOFade","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].AudioSource,"ps":0},{"n":"endValue","pt":$n[0].Single,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2}],"sn":"DOFade","rt":$n[9].TweenerCore$3(System.Single,System.Single,DG.Tweening.Plugins.Options.FloatOptions),"p":[$n[1].AudioSource,$n[0].Single,$n[0].Single]},{"a":2,"n":"DOFlip","is":true,"t":8,"pi":[{"n":"target","pt":$n[2].AudioMixer,"ps":0}],"sn":"DOFlip","rt":$n[0].Int32,"p":[$n[2].AudioMixer],"box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"DOGoto","is":true,"t":8,"pi":[{"n":"target","pt":$n[2].AudioMixer,"ps":0},{"n":"to","pt":$n[0].Single,"ps":1},{"n":"andPlay","dv":false,"o":true,"pt":$n[0].Boolean,"ps":2}],"sn":"DOGoto","rt":$n[0].Int32,"p":[$n[2].AudioMixer,$n[0].Single,$n[0].Boolean],"box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"DOKill","is":true,"t":8,"pi":[{"n":"target","pt":$n[2].AudioMixer,"ps":0},{"n":"complete","dv":false,"o":true,"pt":$n[0].Boolean,"ps":1}],"sn":"DOKill","rt":$n[0].Int32,"p":[$n[2].AudioMixer,$n[0].Boolean],"box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"DOPause","is":true,"t":8,"pi":[{"n":"target","pt":$n[2].AudioMixer,"ps":0}],"sn":"DOPause","rt":$n[0].Int32,"p":[$n[2].AudioMixer],"box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"DOPitch","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].AudioSource,"ps":0},{"n":"endValue","pt":$n[0].Single,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2}],"sn":"DOPitch","rt":$n[9].TweenerCore$3(System.Single,System.Single,DG.Tweening.Plugins.Options.FloatOptions),"p":[$n[1].AudioSource,$n[0].Single,$n[0].Single]},{"a":2,"n":"DOPlay","is":true,"t":8,"pi":[{"n":"target","pt":$n[2].AudioMixer,"ps":0}],"sn":"DOPlay","rt":$n[0].Int32,"p":[$n[2].AudioMixer],"box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"DOPlayBackwards","is":true,"t":8,"pi":[{"n":"target","pt":$n[2].AudioMixer,"ps":0}],"sn":"DOPlayBackwards","rt":$n[0].Int32,"p":[$n[2].AudioMixer],"box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"DOPlayForward","is":true,"t":8,"pi":[{"n":"target","pt":$n[2].AudioMixer,"ps":0}],"sn":"DOPlayForward","rt":$n[0].Int32,"p":[$n[2].AudioMixer],"box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"DORestart","is":true,"t":8,"pi":[{"n":"target","pt":$n[2].AudioMixer,"ps":0}],"sn":"DORestart","rt":$n[0].Int32,"p":[$n[2].AudioMixer],"box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"DORewind","is":true,"t":8,"pi":[{"n":"target","pt":$n[2].AudioMixer,"ps":0}],"sn":"DORewind","rt":$n[0].Int32,"p":[$n[2].AudioMixer],"box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"DOSetFloat","is":true,"t":8,"pi":[{"n":"target","pt":$n[2].AudioMixer,"ps":0},{"n":"floatName","pt":$n[0].String,"ps":1},{"n":"endValue","pt":$n[0].Single,"ps":2},{"n":"duration","pt":$n[0].Single,"ps":3}],"sn":"DOSetFloat","rt":$n[9].TweenerCore$3(System.Single,System.Single,DG.Tweening.Plugins.Options.FloatOptions),"p":[$n[2].AudioMixer,$n[0].String,$n[0].Single,$n[0].Single]},{"a":2,"n":"DOSmoothRewind","is":true,"t":8,"pi":[{"n":"target","pt":$n[2].AudioMixer,"ps":0}],"sn":"DOSmoothRewind","rt":$n[0].Int32,"p":[$n[2].AudioMixer],"box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"DOTogglePause","is":true,"t":8,"pi":[{"n":"target","pt":$n[2].AudioMixer,"ps":0}],"sn":"DOTogglePause","rt":$n[0].Int32,"p":[$n[2].AudioMixer],"box":function ($v) { return Bridge.box($v, System.Int32);}}]}; }, $n);
    /*DG.Tweening.DOTweenModuleAudio end.*/

    /*DG.Tweening.DOTweenModulePhysics2D start.*/
    $m("DG.Tweening.DOTweenModulePhysics2D", function () { return {"att":1048961,"a":2,"s":true,"m":[{"a":2,"n":"DOJump","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].Rigidbody2D,"ps":0},{"n":"endValue","pt":$n[1].Vector2,"ps":1},{"n":"jumpPower","pt":$n[0].Single,"ps":2},{"n":"numJumps","pt":$n[0].Int32,"ps":3},{"n":"duration","pt":$n[0].Single,"ps":4},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":5}],"sn":"DOJump","rt":$n[6].Sequence,"p":[$n[1].Rigidbody2D,$n[1].Vector2,$n[0].Single,$n[0].Int32,$n[0].Single,$n[0].Boolean]},{"a":4,"n":"DOLocalPath","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].Rigidbody2D,"ps":0},{"n":"path","pt":$n[10].Path,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"pathMode","dv":1,"o":true,"pt":$n[6].PathMode,"ps":3}],"sn":"DOLocalPath$1","rt":$n[9].TweenerCore$3(UnityEngine.Vector3,DG.Tweening.Plugins.Core.PathCore.Path,DG.Tweening.Plugins.Options.PathOptions),"p":[$n[1].Rigidbody2D,$n[10].Path,$n[0].Single,$n[6].PathMode]},{"a":2,"n":"DOLocalPath","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].Rigidbody2D,"ps":0},{"n":"path","pt":System.Array.type(UnityEngine.Vector2),"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"pathType","dv":0,"o":true,"pt":$n[6].PathType,"ps":3},{"n":"pathMode","dv":1,"o":true,"pt":$n[6].PathMode,"ps":4},{"n":"resolution","dv":10,"o":true,"pt":$n[0].Int32,"ps":5},{"n":"gizmoColor","dv":null,"o":true,"pt":$n[0].Nullable$1(UnityEngine.Color),"ps":6}],"sn":"DOLocalPath","rt":$n[9].TweenerCore$3(UnityEngine.Vector3,DG.Tweening.Plugins.Core.PathCore.Path,DG.Tweening.Plugins.Options.PathOptions),"p":[$n[1].Rigidbody2D,System.Array.type(UnityEngine.Vector2),$n[0].Single,$n[6].PathType,$n[6].PathMode,$n[0].Int32,$n[0].Nullable$1(UnityEngine.Color)]},{"a":2,"n":"DOMove","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].Rigidbody2D,"ps":0},{"n":"endValue","pt":$n[1].Vector2,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":3}],"sn":"DOMove","rt":$n[9].TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[1].Rigidbody2D,$n[1].Vector2,$n[0].Single,$n[0].Boolean]},{"a":2,"n":"DOMoveX","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].Rigidbody2D,"ps":0},{"n":"endValue","pt":$n[0].Single,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":3}],"sn":"DOMoveX","rt":$n[9].TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[1].Rigidbody2D,$n[0].Single,$n[0].Single,$n[0].Boolean]},{"a":2,"n":"DOMoveY","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].Rigidbody2D,"ps":0},{"n":"endValue","pt":$n[0].Single,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":3}],"sn":"DOMoveY","rt":$n[9].TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[1].Rigidbody2D,$n[0].Single,$n[0].Single,$n[0].Boolean]},{"a":4,"n":"DOPath","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].Rigidbody2D,"ps":0},{"n":"path","pt":$n[10].Path,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"pathMode","dv":1,"o":true,"pt":$n[6].PathMode,"ps":3}],"sn":"DOPath$1","rt":$n[9].TweenerCore$3(UnityEngine.Vector3,DG.Tweening.Plugins.Core.PathCore.Path,DG.Tweening.Plugins.Options.PathOptions),"p":[$n[1].Rigidbody2D,$n[10].Path,$n[0].Single,$n[6].PathMode]},{"a":2,"n":"DOPath","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].Rigidbody2D,"ps":0},{"n":"path","pt":System.Array.type(UnityEngine.Vector2),"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"pathType","dv":0,"o":true,"pt":$n[6].PathType,"ps":3},{"n":"pathMode","dv":1,"o":true,"pt":$n[6].PathMode,"ps":4},{"n":"resolution","dv":10,"o":true,"pt":$n[0].Int32,"ps":5},{"n":"gizmoColor","dv":null,"o":true,"pt":$n[0].Nullable$1(UnityEngine.Color),"ps":6}],"sn":"DOPath","rt":$n[9].TweenerCore$3(UnityEngine.Vector3,DG.Tweening.Plugins.Core.PathCore.Path,DG.Tweening.Plugins.Options.PathOptions),"p":[$n[1].Rigidbody2D,System.Array.type(UnityEngine.Vector2),$n[0].Single,$n[6].PathType,$n[6].PathMode,$n[0].Int32,$n[0].Nullable$1(UnityEngine.Color)]},{"a":2,"n":"DORotate","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].Rigidbody2D,"ps":0},{"n":"endValue","pt":$n[0].Single,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2}],"sn":"DORotate","rt":$n[9].TweenerCore$3(System.Single,System.Single,DG.Tweening.Plugins.Options.FloatOptions),"p":[$n[1].Rigidbody2D,$n[0].Single,$n[0].Single]}]}; }, $n);
    /*DG.Tweening.DOTweenModulePhysics2D end.*/

    /*DG.Tweening.DOTweenModuleSprite start.*/
    $m("DG.Tweening.DOTweenModuleSprite", function () { return {"att":1048961,"a":2,"s":true,"m":[{"a":2,"n":"DOBlendableColor","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].SpriteRenderer,"ps":0},{"n":"endValue","pt":$n[1].Color,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2}],"sn":"DOBlendableColor","rt":$n[6].Tweener,"p":[$n[1].SpriteRenderer,$n[1].Color,$n[0].Single]},{"a":2,"n":"DOColor","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].SpriteRenderer,"ps":0},{"n":"endValue","pt":$n[1].Color,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2}],"sn":"DOColor","rt":$n[9].TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions),"p":[$n[1].SpriteRenderer,$n[1].Color,$n[0].Single]},{"a":2,"n":"DOFade","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].SpriteRenderer,"ps":0},{"n":"endValue","pt":$n[0].Single,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2}],"sn":"DOFade","rt":$n[9].TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions),"p":[$n[1].SpriteRenderer,$n[0].Single,$n[0].Single]},{"a":2,"n":"DOGradientColor","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].SpriteRenderer,"ps":0},{"n":"gradient","pt":pc.ColorGradient,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2}],"sn":"DOGradientColor","rt":$n[6].Sequence,"p":[$n[1].SpriteRenderer,pc.ColorGradient,$n[0].Single]}]}; }, $n);
    /*DG.Tweening.DOTweenModuleSprite end.*/

    /*DG.Tweening.DOTweenModuleUI start.*/
    $m("DG.Tweening.DOTweenModuleUI", function () { return {"nested":[$n[6].DOTweenModuleUI.Utils],"att":1048961,"a":2,"s":true,"m":[{"a":2,"n":"DOAnchorMax","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].RectTransform,"ps":0},{"n":"endValue","pt":$n[1].Vector2,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":3}],"sn":"DOAnchorMax","rt":$n[9].TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[1].RectTransform,$n[1].Vector2,$n[0].Single,$n[0].Boolean]},{"a":2,"n":"DOAnchorMin","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].RectTransform,"ps":0},{"n":"endValue","pt":$n[1].Vector2,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":3}],"sn":"DOAnchorMin","rt":$n[9].TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[1].RectTransform,$n[1].Vector2,$n[0].Single,$n[0].Boolean]},{"a":2,"n":"DOAnchorPos","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].RectTransform,"ps":0},{"n":"endValue","pt":$n[1].Vector2,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":3}],"sn":"DOAnchorPos","rt":$n[9].TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[1].RectTransform,$n[1].Vector2,$n[0].Single,$n[0].Boolean]},{"a":2,"n":"DOAnchorPos3D","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].RectTransform,"ps":0},{"n":"endValue","pt":$n[1].Vector3,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":3}],"sn":"DOAnchorPos3D","rt":$n[9].TweenerCore$3(UnityEngine.Vector3,UnityEngine.Vector3,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[1].RectTransform,$n[1].Vector3,$n[0].Single,$n[0].Boolean]},{"a":2,"n":"DOAnchorPos3DX","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].RectTransform,"ps":0},{"n":"endValue","pt":$n[0].Single,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":3}],"sn":"DOAnchorPos3DX","rt":$n[9].TweenerCore$3(UnityEngine.Vector3,UnityEngine.Vector3,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[1].RectTransform,$n[0].Single,$n[0].Single,$n[0].Boolean]},{"a":2,"n":"DOAnchorPos3DY","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].RectTransform,"ps":0},{"n":"endValue","pt":$n[0].Single,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":3}],"sn":"DOAnchorPos3DY","rt":$n[9].TweenerCore$3(UnityEngine.Vector3,UnityEngine.Vector3,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[1].RectTransform,$n[0].Single,$n[0].Single,$n[0].Boolean]},{"a":2,"n":"DOAnchorPos3DZ","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].RectTransform,"ps":0},{"n":"endValue","pt":$n[0].Single,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":3}],"sn":"DOAnchorPos3DZ","rt":$n[9].TweenerCore$3(UnityEngine.Vector3,UnityEngine.Vector3,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[1].RectTransform,$n[0].Single,$n[0].Single,$n[0].Boolean]},{"a":2,"n":"DOAnchorPosX","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].RectTransform,"ps":0},{"n":"endValue","pt":$n[0].Single,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":3}],"sn":"DOAnchorPosX","rt":$n[9].TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[1].RectTransform,$n[0].Single,$n[0].Single,$n[0].Boolean]},{"a":2,"n":"DOAnchorPosY","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].RectTransform,"ps":0},{"n":"endValue","pt":$n[0].Single,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":3}],"sn":"DOAnchorPosY","rt":$n[9].TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[1].RectTransform,$n[0].Single,$n[0].Single,$n[0].Boolean]},{"a":2,"n":"DOBlendableColor","is":true,"t":8,"pi":[{"n":"target","pt":$n[8].Graphic,"ps":0},{"n":"endValue","pt":$n[1].Color,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2}],"sn":"DOBlendableColor","rt":$n[6].Tweener,"p":[$n[8].Graphic,$n[1].Color,$n[0].Single]},{"a":2,"n":"DOBlendableColor","is":true,"t":8,"pi":[{"n":"target","pt":$n[8].Image,"ps":0},{"n":"endValue","pt":$n[1].Color,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2}],"sn":"DOBlendableColor$1","rt":$n[6].Tweener,"p":[$n[8].Image,$n[1].Color,$n[0].Single]},{"a":2,"n":"DOBlendableColor","is":true,"t":8,"pi":[{"n":"target","pt":$n[8].Text,"ps":0},{"n":"endValue","pt":$n[1].Color,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2}],"sn":"DOBlendableColor$2","rt":$n[6].Tweener,"p":[$n[8].Text,$n[1].Color,$n[0].Single]},{"a":2,"n":"DOColor","is":true,"t":8,"pi":[{"n":"target","pt":$n[8].Graphic,"ps":0},{"n":"endValue","pt":$n[1].Color,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2}],"sn":"DOColor","rt":$n[9].TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions),"p":[$n[8].Graphic,$n[1].Color,$n[0].Single]},{"a":2,"n":"DOColor","is":true,"t":8,"pi":[{"n":"target","pt":$n[8].Image,"ps":0},{"n":"endValue","pt":$n[1].Color,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2}],"sn":"DOColor$1","rt":$n[9].TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions),"p":[$n[8].Image,$n[1].Color,$n[0].Single]},{"a":2,"n":"DOColor","is":true,"t":8,"pi":[{"n":"target","pt":$n[8].Outline,"ps":0},{"n":"endValue","pt":$n[1].Color,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2}],"sn":"DOColor$2","rt":$n[9].TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions),"p":[$n[8].Outline,$n[1].Color,$n[0].Single]},{"a":2,"n":"DOColor","is":true,"t":8,"pi":[{"n":"target","pt":$n[8].Text,"ps":0},{"n":"endValue","pt":$n[1].Color,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2}],"sn":"DOColor$3","rt":$n[9].TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions),"p":[$n[8].Text,$n[1].Color,$n[0].Single]},{"a":2,"n":"DOCounter","is":true,"t":8,"pi":[{"n":"target","pt":$n[8].Text,"ps":0},{"n":"fromValue","pt":$n[0].Int32,"ps":1},{"n":"endValue","pt":$n[0].Int32,"ps":2},{"n":"duration","pt":$n[0].Single,"ps":3},{"n":"addThousandsSeparator","dv":true,"o":true,"pt":$n[0].Boolean,"ps":4},{"n":"culture","dv":null,"o":true,"pt":$n[11].CultureInfo,"ps":5}],"sn":"DOCounter","rt":$n[9].TweenerCore$3(System.Int32,System.Int32,DG.Tweening.Plugins.Options.NoOptions),"p":[$n[8].Text,$n[0].Int32,$n[0].Int32,$n[0].Single,$n[0].Boolean,$n[11].CultureInfo]},{"a":2,"n":"DOFade","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].CanvasGroup,"ps":0},{"n":"endValue","pt":$n[0].Single,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2}],"sn":"DOFade","rt":$n[9].TweenerCore$3(System.Single,System.Single,DG.Tweening.Plugins.Options.FloatOptions),"p":[$n[1].CanvasGroup,$n[0].Single,$n[0].Single]},{"a":2,"n":"DOFade","is":true,"t":8,"pi":[{"n":"target","pt":$n[8].Graphic,"ps":0},{"n":"endValue","pt":$n[0].Single,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2}],"sn":"DOFade$1","rt":$n[9].TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions),"p":[$n[8].Graphic,$n[0].Single,$n[0].Single]},{"a":2,"n":"DOFade","is":true,"t":8,"pi":[{"n":"target","pt":$n[8].Image,"ps":0},{"n":"endValue","pt":$n[0].Single,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2}],"sn":"DOFade$2","rt":$n[9].TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions),"p":[$n[8].Image,$n[0].Single,$n[0].Single]},{"a":2,"n":"DOFade","is":true,"t":8,"pi":[{"n":"target","pt":$n[8].Outline,"ps":0},{"n":"endValue","pt":$n[0].Single,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2}],"sn":"DOFade$3","rt":$n[9].TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions),"p":[$n[8].Outline,$n[0].Single,$n[0].Single]},{"a":2,"n":"DOFade","is":true,"t":8,"pi":[{"n":"target","pt":$n[8].Text,"ps":0},{"n":"endValue","pt":$n[0].Single,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2}],"sn":"DOFade$4","rt":$n[9].TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions),"p":[$n[8].Text,$n[0].Single,$n[0].Single]},{"a":2,"n":"DOFillAmount","is":true,"t":8,"pi":[{"n":"target","pt":$n[8].Image,"ps":0},{"n":"endValue","pt":$n[0].Single,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2}],"sn":"DOFillAmount","rt":$n[9].TweenerCore$3(System.Single,System.Single,DG.Tweening.Plugins.Options.FloatOptions),"p":[$n[8].Image,$n[0].Single,$n[0].Single]},{"a":2,"n":"DOFlexibleSize","is":true,"t":8,"pi":[{"n":"target","pt":$n[8].LayoutElement,"ps":0},{"n":"endValue","pt":$n[1].Vector2,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":3}],"sn":"DOFlexibleSize","rt":$n[9].TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[8].LayoutElement,$n[1].Vector2,$n[0].Single,$n[0].Boolean]},{"a":2,"n":"DOGradientColor","is":true,"t":8,"pi":[{"n":"target","pt":$n[8].Image,"ps":0},{"n":"gradient","pt":pc.ColorGradient,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2}],"sn":"DOGradientColor","rt":$n[6].Sequence,"p":[$n[8].Image,pc.ColorGradient,$n[0].Single]},{"a":2,"n":"DOHorizontalNormalizedPos","is":true,"t":8,"pi":[{"n":"target","pt":$n[8].ScrollRect,"ps":0},{"n":"endValue","pt":$n[0].Single,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":3}],"sn":"DOHorizontalNormalizedPos","rt":$n[6].Tweener,"p":[$n[8].ScrollRect,$n[0].Single,$n[0].Single,$n[0].Boolean]},{"a":2,"n":"DOJumpAnchorPos","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].RectTransform,"ps":0},{"n":"endValue","pt":$n[1].Vector2,"ps":1},{"n":"jumpPower","pt":$n[0].Single,"ps":2},{"n":"numJumps","pt":$n[0].Int32,"ps":3},{"n":"duration","pt":$n[0].Single,"ps":4},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":5}],"sn":"DOJumpAnchorPos","rt":$n[6].Sequence,"p":[$n[1].RectTransform,$n[1].Vector2,$n[0].Single,$n[0].Int32,$n[0].Single,$n[0].Boolean]},{"a":2,"n":"DOMinSize","is":true,"t":8,"pi":[{"n":"target","pt":$n[8].LayoutElement,"ps":0},{"n":"endValue","pt":$n[1].Vector2,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":3}],"sn":"DOMinSize","rt":$n[9].TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[8].LayoutElement,$n[1].Vector2,$n[0].Single,$n[0].Boolean]},{"a":2,"n":"DONormalizedPos","is":true,"t":8,"pi":[{"n":"target","pt":$n[8].ScrollRect,"ps":0},{"n":"endValue","pt":$n[1].Vector2,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":3}],"sn":"DONormalizedPos","rt":$n[6].Tweener,"p":[$n[8].ScrollRect,$n[1].Vector2,$n[0].Single,$n[0].Boolean]},{"a":2,"n":"DOPivot","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].RectTransform,"ps":0},{"n":"endValue","pt":$n[1].Vector2,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2}],"sn":"DOPivot","rt":$n[9].TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[1].RectTransform,$n[1].Vector2,$n[0].Single]},{"a":2,"n":"DOPivotX","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].RectTransform,"ps":0},{"n":"endValue","pt":$n[0].Single,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2}],"sn":"DOPivotX","rt":$n[9].TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[1].RectTransform,$n[0].Single,$n[0].Single]},{"a":2,"n":"DOPivotY","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].RectTransform,"ps":0},{"n":"endValue","pt":$n[0].Single,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2}],"sn":"DOPivotY","rt":$n[9].TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[1].RectTransform,$n[0].Single,$n[0].Single]},{"a":2,"n":"DOPreferredSize","is":true,"t":8,"pi":[{"n":"target","pt":$n[8].LayoutElement,"ps":0},{"n":"endValue","pt":$n[1].Vector2,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":3}],"sn":"DOPreferredSize","rt":$n[9].TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[8].LayoutElement,$n[1].Vector2,$n[0].Single,$n[0].Boolean]},{"a":2,"n":"DOPunchAnchorPos","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].RectTransform,"ps":0},{"n":"punch","pt":$n[1].Vector2,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"vibrato","dv":10,"o":true,"pt":$n[0].Int32,"ps":3},{"n":"elasticity","dv":1.0,"o":true,"pt":$n[0].Single,"ps":4},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":5}],"sn":"DOPunchAnchorPos","rt":$n[6].Tweener,"p":[$n[1].RectTransform,$n[1].Vector2,$n[0].Single,$n[0].Int32,$n[0].Single,$n[0].Boolean]},{"a":2,"n":"DOScale","is":true,"t":8,"pi":[{"n":"target","pt":$n[8].Outline,"ps":0},{"n":"endValue","pt":$n[1].Vector2,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2}],"sn":"DOScale","rt":$n[9].TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[8].Outline,$n[1].Vector2,$n[0].Single]},{"a":2,"n":"DOShakeAnchorPos","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].RectTransform,"ps":0},{"n":"duration","pt":$n[0].Single,"ps":1},{"n":"strength","dv":100.0,"o":true,"pt":$n[0].Single,"ps":2},{"n":"vibrato","dv":10,"o":true,"pt":$n[0].Int32,"ps":3},{"n":"randomness","dv":90.0,"o":true,"pt":$n[0].Single,"ps":4},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":5},{"n":"fadeOut","dv":true,"o":true,"pt":$n[0].Boolean,"ps":6},{"n":"randomnessMode","dv":0,"o":true,"pt":$n[6].ShakeRandomnessMode,"ps":7}],"sn":"DOShakeAnchorPos","rt":$n[6].Tweener,"p":[$n[1].RectTransform,$n[0].Single,$n[0].Single,$n[0].Int32,$n[0].Single,$n[0].Boolean,$n[0].Boolean,$n[6].ShakeRandomnessMode]},{"a":2,"n":"DOShakeAnchorPos","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].RectTransform,"ps":0},{"n":"duration","pt":$n[0].Single,"ps":1},{"n":"strength","pt":$n[1].Vector2,"ps":2},{"n":"vibrato","dv":10,"o":true,"pt":$n[0].Int32,"ps":3},{"n":"randomness","dv":90.0,"o":true,"pt":$n[0].Single,"ps":4},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":5},{"n":"fadeOut","dv":true,"o":true,"pt":$n[0].Boolean,"ps":6},{"n":"randomnessMode","dv":0,"o":true,"pt":$n[6].ShakeRandomnessMode,"ps":7}],"sn":"DOShakeAnchorPos$1","rt":$n[6].Tweener,"p":[$n[1].RectTransform,$n[0].Single,$n[1].Vector2,$n[0].Int32,$n[0].Single,$n[0].Boolean,$n[0].Boolean,$n[6].ShakeRandomnessMode]},{"a":2,"n":"DOShapeCircle","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].RectTransform,"ps":0},{"n":"center","pt":$n[1].Vector2,"ps":1},{"n":"endValueDegrees","pt":$n[0].Single,"ps":2},{"n":"duration","pt":$n[0].Single,"ps":3},{"n":"relativeCenter","dv":false,"o":true,"pt":$n[0].Boolean,"ps":4},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":5}],"sn":"DOShapeCircle","rt":$n[9].TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.CircleOptions),"p":[$n[1].RectTransform,$n[1].Vector2,$n[0].Single,$n[0].Single,$n[0].Boolean,$n[0].Boolean]},{"a":2,"n":"DOSizeDelta","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].RectTransform,"ps":0},{"n":"endValue","pt":$n[1].Vector2,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":3}],"sn":"DOSizeDelta","rt":$n[9].TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[1].RectTransform,$n[1].Vector2,$n[0].Single,$n[0].Boolean]},{"a":2,"n":"DOText","is":true,"t":8,"pi":[{"n":"target","pt":$n[8].Text,"ps":0},{"n":"endValue","pt":$n[0].String,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"richTextEnabled","dv":true,"o":true,"pt":$n[0].Boolean,"ps":3},{"n":"scrambleMode","dv":0,"o":true,"pt":$n[6].ScrambleMode,"ps":4},{"n":"scrambleChars","dv":null,"o":true,"pt":$n[0].String,"ps":5}],"sn":"DOText","rt":$n[9].TweenerCore$3(System.String,System.String,DG.Tweening.Plugins.Options.StringOptions),"p":[$n[8].Text,$n[0].String,$n[0].Single,$n[0].Boolean,$n[6].ScrambleMode,$n[0].String]},{"a":2,"n":"DOValue","is":true,"t":8,"pi":[{"n":"target","pt":$n[8].Slider,"ps":0},{"n":"endValue","pt":$n[0].Single,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":3}],"sn":"DOValue","rt":$n[9].TweenerCore$3(System.Single,System.Single,DG.Tweening.Plugins.Options.FloatOptions),"p":[$n[8].Slider,$n[0].Single,$n[0].Single,$n[0].Boolean]},{"a":2,"n":"DOVerticalNormalizedPos","is":true,"t":8,"pi":[{"n":"target","pt":$n[8].ScrollRect,"ps":0},{"n":"endValue","pt":$n[0].Single,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":3}],"sn":"DOVerticalNormalizedPos","rt":$n[6].Tweener,"p":[$n[8].ScrollRect,$n[0].Single,$n[0].Single,$n[0].Boolean]}]}; }, $n);
    /*DG.Tweening.DOTweenModuleUI end.*/

    /*DG.Tweening.DOTweenModuleUI+Utils start.*/
    $m("DG.Tweening.DOTweenModuleUI.Utils", function () { return {"td":$n[6].DOTweenModuleUI,"att":1048962,"a":2,"s":true,"m":[{"a":2,"n":"SwitchToRectTransform","is":true,"t":8,"pi":[{"n":"from","pt":$n[1].RectTransform,"ps":0},{"n":"to","pt":$n[1].RectTransform,"ps":1}],"sn":"SwitchToRectTransform","rt":$n[1].Vector2,"p":[$n[1].RectTransform,$n[1].RectTransform]}]}; }, $n);
    /*DG.Tweening.DOTweenModuleUI+Utils end.*/

    /*DG.Tweening.DOTweenModuleUnityVersion start.*/
    $m("DG.Tweening.DOTweenModuleUnityVersion", function () { return {"att":1048961,"a":2,"s":true,"m":[{"a":2,"n":"DOGradientColor","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].Material,"ps":0},{"n":"gradient","pt":pc.ColorGradient,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2}],"sn":"DOGradientColor","rt":$n[6].Sequence,"p":[$n[1].Material,pc.ColorGradient,$n[0].Single]},{"a":2,"n":"DOGradientColor","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].Material,"ps":0},{"n":"gradient","pt":pc.ColorGradient,"ps":1},{"n":"property","pt":$n[0].String,"ps":2},{"n":"duration","pt":$n[0].Single,"ps":3}],"sn":"DOGradientColor$1","rt":$n[6].Sequence,"p":[$n[1].Material,pc.ColorGradient,$n[0].String,$n[0].Single]},{"a":2,"n":"DOOffset","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].Material,"ps":0},{"n":"endValue","pt":$n[1].Vector2,"ps":1},{"n":"propertyID","pt":$n[0].Int32,"ps":2},{"n":"duration","pt":$n[0].Single,"ps":3}],"sn":"DOOffset","rt":$n[9].TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[1].Material,$n[1].Vector2,$n[0].Int32,$n[0].Single]},{"a":2,"n":"DOTiling","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].Material,"ps":0},{"n":"endValue","pt":$n[1].Vector2,"ps":1},{"n":"propertyID","pt":$n[0].Int32,"ps":2},{"n":"duration","pt":$n[0].Single,"ps":3}],"sn":"DOTiling","rt":$n[9].TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[1].Material,$n[1].Vector2,$n[0].Int32,$n[0].Single]},{"a":2,"n":"WaitForCompletion","is":true,"t":8,"pi":[{"n":"t","pt":$n[6].Tween,"ps":0},{"n":"returnCustomYieldInstruction","pt":$n[0].Boolean,"ps":1}],"sn":"WaitForCompletion","rt":$n[1].CustomYieldInstruction,"p":[$n[6].Tween,$n[0].Boolean]},{"a":2,"n":"WaitForElapsedLoops","is":true,"t":8,"pi":[{"n":"t","pt":$n[6].Tween,"ps":0},{"n":"elapsedLoops","pt":$n[0].Int32,"ps":1},{"n":"returnCustomYieldInstruction","pt":$n[0].Boolean,"ps":2}],"sn":"WaitForElapsedLoops","rt":$n[1].CustomYieldInstruction,"p":[$n[6].Tween,$n[0].Int32,$n[0].Boolean]},{"a":2,"n":"WaitForKill","is":true,"t":8,"pi":[{"n":"t","pt":$n[6].Tween,"ps":0},{"n":"returnCustomYieldInstruction","pt":$n[0].Boolean,"ps":1}],"sn":"WaitForKill","rt":$n[1].CustomYieldInstruction,"p":[$n[6].Tween,$n[0].Boolean]},{"a":2,"n":"WaitForPosition","is":true,"t":8,"pi":[{"n":"t","pt":$n[6].Tween,"ps":0},{"n":"position","pt":$n[0].Single,"ps":1},{"n":"returnCustomYieldInstruction","pt":$n[0].Boolean,"ps":2}],"sn":"WaitForPosition","rt":$n[1].CustomYieldInstruction,"p":[$n[6].Tween,$n[0].Single,$n[0].Boolean]},{"a":2,"n":"WaitForRewind","is":true,"t":8,"pi":[{"n":"t","pt":$n[6].Tween,"ps":0},{"n":"returnCustomYieldInstruction","pt":$n[0].Boolean,"ps":1}],"sn":"WaitForRewind","rt":$n[1].CustomYieldInstruction,"p":[$n[6].Tween,$n[0].Boolean]},{"a":2,"n":"WaitForStart","is":true,"t":8,"pi":[{"n":"t","pt":$n[6].Tween,"ps":0},{"n":"returnCustomYieldInstruction","pt":$n[0].Boolean,"ps":1}],"sn":"WaitForStart","rt":$n[1].CustomYieldInstruction,"p":[$n[6].Tween,$n[0].Boolean]}]}; }, $n);
    /*DG.Tweening.DOTweenModuleUnityVersion end.*/

    /*DG.Tweening.DOTweenCYInstruction start.*/
    $m("DG.Tweening.DOTweenCYInstruction", function () { return {"nested":[$n[6].DOTweenCYInstruction.WaitForCompletion,$n[6].DOTweenCYInstruction.WaitForRewind,$n[6].DOTweenCYInstruction.WaitForKill,$n[6].DOTweenCYInstruction.WaitForElapsedLoops,$n[6].DOTweenCYInstruction.WaitForPosition,$n[6].DOTweenCYInstruction.WaitForStart],"att":1048961,"a":2,"s":true}; }, $n);
    /*DG.Tweening.DOTweenCYInstruction end.*/

    /*DG.Tweening.DOTweenCYInstruction+WaitForCompletion start.*/
    $m("DG.Tweening.DOTweenCYInstruction.WaitForCompletion", function () { return {"td":$n[6].DOTweenCYInstruction,"att":1048578,"a":2,"m":[{"a":2,"n":".ctor","t":1,"p":[$n[6].Tween],"pi":[{"n":"tween","pt":$n[6].Tween,"ps":0}],"sn":"ctor"},{"ov":true,"a":2,"n":"keepWaiting","t":16,"rt":$n[0].Boolean,"g":{"ov":true,"a":2,"n":"get_keepWaiting","t":8,"rt":$n[0].Boolean,"fg":"keepWaiting","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},"fn":"keepWaiting"},{"a":1,"n":"t","t":4,"rt":$n[6].Tween,"sn":"t","ro":true}]}; }, $n);
    /*DG.Tweening.DOTweenCYInstruction+WaitForCompletion end.*/

    /*DG.Tweening.DOTweenCYInstruction+WaitForRewind start.*/
    $m("DG.Tweening.DOTweenCYInstruction.WaitForRewind", function () { return {"td":$n[6].DOTweenCYInstruction,"att":1048578,"a":2,"m":[{"a":2,"n":".ctor","t":1,"p":[$n[6].Tween],"pi":[{"n":"tween","pt":$n[6].Tween,"ps":0}],"sn":"ctor"},{"ov":true,"a":2,"n":"keepWaiting","t":16,"rt":$n[0].Boolean,"g":{"ov":true,"a":2,"n":"get_keepWaiting","t":8,"rt":$n[0].Boolean,"fg":"keepWaiting","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},"fn":"keepWaiting"},{"a":1,"n":"t","t":4,"rt":$n[6].Tween,"sn":"t","ro":true}]}; }, $n);
    /*DG.Tweening.DOTweenCYInstruction+WaitForRewind end.*/

    /*DG.Tweening.DOTweenCYInstruction+WaitForKill start.*/
    $m("DG.Tweening.DOTweenCYInstruction.WaitForKill", function () { return {"td":$n[6].DOTweenCYInstruction,"att":1048578,"a":2,"m":[{"a":2,"n":".ctor","t":1,"p":[$n[6].Tween],"pi":[{"n":"tween","pt":$n[6].Tween,"ps":0}],"sn":"ctor"},{"ov":true,"a":2,"n":"keepWaiting","t":16,"rt":$n[0].Boolean,"g":{"ov":true,"a":2,"n":"get_keepWaiting","t":8,"rt":$n[0].Boolean,"fg":"keepWaiting","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},"fn":"keepWaiting"},{"a":1,"n":"t","t":4,"rt":$n[6].Tween,"sn":"t","ro":true}]}; }, $n);
    /*DG.Tweening.DOTweenCYInstruction+WaitForKill end.*/

    /*DG.Tweening.DOTweenCYInstruction+WaitForElapsedLoops start.*/
    $m("DG.Tweening.DOTweenCYInstruction.WaitForElapsedLoops", function () { return {"td":$n[6].DOTweenCYInstruction,"att":1048578,"a":2,"m":[{"a":2,"n":".ctor","t":1,"p":[$n[6].Tween,$n[0].Int32],"pi":[{"n":"tween","pt":$n[6].Tween,"ps":0},{"n":"elapsedLoops","pt":$n[0].Int32,"ps":1}],"sn":"ctor"},{"ov":true,"a":2,"n":"keepWaiting","t":16,"rt":$n[0].Boolean,"g":{"ov":true,"a":2,"n":"get_keepWaiting","t":8,"rt":$n[0].Boolean,"fg":"keepWaiting","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},"fn":"keepWaiting"},{"a":1,"n":"elapsedLoops","t":4,"rt":$n[0].Int32,"sn":"elapsedLoops","ro":true,"box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":1,"n":"t","t":4,"rt":$n[6].Tween,"sn":"t","ro":true}]}; }, $n);
    /*DG.Tweening.DOTweenCYInstruction+WaitForElapsedLoops end.*/

    /*DG.Tweening.DOTweenCYInstruction+WaitForPosition start.*/
    $m("DG.Tweening.DOTweenCYInstruction.WaitForPosition", function () { return {"td":$n[6].DOTweenCYInstruction,"att":1048578,"a":2,"m":[{"a":2,"n":".ctor","t":1,"p":[$n[6].Tween,$n[0].Single],"pi":[{"n":"tween","pt":$n[6].Tween,"ps":0},{"n":"position","pt":$n[0].Single,"ps":1}],"sn":"ctor"},{"ov":true,"a":2,"n":"keepWaiting","t":16,"rt":$n[0].Boolean,"g":{"ov":true,"a":2,"n":"get_keepWaiting","t":8,"rt":$n[0].Boolean,"fg":"keepWaiting","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},"fn":"keepWaiting"},{"a":1,"n":"position","t":4,"rt":$n[0].Single,"sn":"position","ro":true,"box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"t","t":4,"rt":$n[6].Tween,"sn":"t","ro":true}]}; }, $n);
    /*DG.Tweening.DOTweenCYInstruction+WaitForPosition end.*/

    /*DG.Tweening.DOTweenCYInstruction+WaitForStart start.*/
    $m("DG.Tweening.DOTweenCYInstruction.WaitForStart", function () { return {"td":$n[6].DOTweenCYInstruction,"att":1048578,"a":2,"m":[{"a":2,"n":".ctor","t":1,"p":[$n[6].Tween],"pi":[{"n":"tween","pt":$n[6].Tween,"ps":0}],"sn":"ctor"},{"ov":true,"a":2,"n":"keepWaiting","t":16,"rt":$n[0].Boolean,"g":{"ov":true,"a":2,"n":"get_keepWaiting","t":8,"rt":$n[0].Boolean,"fg":"keepWaiting","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},"fn":"keepWaiting"},{"a":1,"n":"t","t":4,"rt":$n[6].Tween,"sn":"t","ro":true}]}; }, $n);
    /*DG.Tweening.DOTweenCYInstruction+WaitForStart end.*/

    /*DG.Tweening.DOTweenModuleUtils start.*/
    $m("DG.Tweening.DOTweenModuleUtils", function () { return {"nested":[$n[6].DOTweenModuleUtils.Physics],"att":1048961,"a":2,"s":true,"m":[{"at":[new UnityEngine.Scripting.PreserveAttribute()],"a":2,"n":"Init","is":true,"t":8,"sn":"Init","rt":$n[0].Void},{"at":[new UnityEngine.Scripting.PreserveAttribute()],"a":1,"n":"Preserver","is":true,"t":8,"sn":"Preserver","rt":$n[0].Void},{"a":1,"n":"_initialized","is":true,"t":4,"rt":$n[0].Boolean,"sn":"_initialized","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}}]}; }, $n);
    /*DG.Tweening.DOTweenModuleUtils end.*/

    /*DG.Tweening.DOTweenModuleUtils+Physics start.*/
    $m("DG.Tweening.DOTweenModuleUtils.Physics", function () { return {"td":$n[6].DOTweenModuleUtils,"att":1048962,"a":2,"s":true,"m":[{"at":[new UnityEngine.Scripting.PreserveAttribute()],"a":2,"n":"CreateDOTweenPathTween","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].MonoBehaviour,"ps":0},{"n":"tweenRigidbody","pt":$n[0].Boolean,"ps":1},{"n":"isLocal","pt":$n[0].Boolean,"ps":2},{"n":"path","pt":$n[10].Path,"ps":3},{"n":"duration","pt":$n[0].Single,"ps":4},{"n":"pathMode","pt":$n[6].PathMode,"ps":5}],"sn":"CreateDOTweenPathTween","rt":$n[9].TweenerCore$3(UnityEngine.Vector3,DG.Tweening.Plugins.Core.PathCore.Path,DG.Tweening.Plugins.Options.PathOptions),"p":[$n[1].MonoBehaviour,$n[0].Boolean,$n[0].Boolean,$n[10].Path,$n[0].Single,$n[6].PathMode]},{"at":[new UnityEngine.Scripting.PreserveAttribute()],"a":2,"n":"HasRigidbody","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].Component,"ps":0}],"sn":"HasRigidbody","rt":$n[0].Boolean,"p":[$n[1].Component],"box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"HasRigidbody2D","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].Component,"ps":0}],"sn":"HasRigidbody2D","rt":$n[0].Boolean,"p":[$n[1].Component],"box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"SetOrientationOnPath","is":true,"t":8,"pi":[{"n":"options","pt":$n[12].PathOptions,"ps":0},{"n":"t","pt":$n[6].Tween,"ps":1},{"n":"newRot","pt":$n[1].Quaternion,"ps":2},{"n":"trans","pt":$n[1].Transform,"ps":3}],"sn":"SetOrientationOnPath","rt":$n[0].Void,"p":[$n[12].PathOptions,$n[6].Tween,$n[1].Quaternion,$n[1].Transform]}]}; }, $n);
    /*DG.Tweening.DOTweenModuleUtils+Physics end.*/

    /*DG.Tweening.DOTweenAnimation start.*/
    $m("DG.Tweening.DOTweenAnimation", function () { return {"nested":[$n[6].DOTweenAnimation.AnimationType,$n[6].DOTweenAnimation.TargetType],"att":1048577,"a":2,"at":[new UnityEngine.AddComponentMenu.ctor("DOTween/DOTween Animation")],"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"Awake","t":8,"sn":"Awake","rt":$n[0].Void},{"a":2,"n":"CreateEditorPreview","t":8,"sn":"CreateEditorPreview","rt":$n[6].Tween},{"a":2,"n":"CreateTween","t":8,"pi":[{"n":"regenerateIfExists","dv":false,"o":true,"pt":$n[0].Boolean,"ps":0},{"n":"andPlay","dv":true,"o":true,"pt":$n[0].Boolean,"ps":1}],"sn":"CreateTween","rt":$n[0].Void,"p":[$n[0].Boolean,$n[0].Boolean]},{"ov":true,"a":2,"n":"DOComplete","t":8,"sn":"DOComplete","rt":$n[0].Void},{"ov":true,"a":2,"n":"DOKill","t":8,"sn":"DOKill","rt":$n[0].Void},{"a":2,"n":"DOKillAllById","t":8,"pi":[{"n":"id","pt":$n[0].String,"ps":0}],"sn":"DOKillAllById","rt":$n[0].Void,"p":[$n[0].String]},{"a":2,"n":"DOKillById","t":8,"pi":[{"n":"id","pt":$n[0].String,"ps":0}],"sn":"DOKillById","rt":$n[0].Void,"p":[$n[0].String]},{"ov":true,"a":2,"n":"DOPause","t":8,"sn":"DOPause","rt":$n[0].Void},{"a":2,"n":"DOPauseAllById","t":8,"pi":[{"n":"id","pt":$n[0].String,"ps":0}],"sn":"DOPauseAllById","rt":$n[0].Void,"p":[$n[0].String]},{"ov":true,"a":2,"n":"DOPlay","t":8,"sn":"DOPlay","rt":$n[0].Void},{"a":2,"n":"DOPlayAllById","t":8,"pi":[{"n":"id","pt":$n[0].String,"ps":0}],"sn":"DOPlayAllById","rt":$n[0].Void,"p":[$n[0].String]},{"ov":true,"a":2,"n":"DOPlayBackwards","t":8,"sn":"DOPlayBackwards","rt":$n[0].Void},{"a":2,"n":"DOPlayBackwardsAllById","t":8,"pi":[{"n":"id","pt":$n[0].String,"ps":0}],"sn":"DOPlayBackwardsAllById","rt":$n[0].Void,"p":[$n[0].String]},{"a":2,"n":"DOPlayBackwardsById","t":8,"pi":[{"n":"id","pt":$n[0].String,"ps":0}],"sn":"DOPlayBackwardsById","rt":$n[0].Void,"p":[$n[0].String]},{"a":2,"n":"DOPlayById","t":8,"pi":[{"n":"id","pt":$n[0].String,"ps":0}],"sn":"DOPlayById","rt":$n[0].Void,"p":[$n[0].String]},{"ov":true,"a":2,"n":"DOPlayForward","t":8,"sn":"DOPlayForward","rt":$n[0].Void},{"a":2,"n":"DOPlayForwardAllById","t":8,"pi":[{"n":"id","pt":$n[0].String,"ps":0}],"sn":"DOPlayForwardAllById","rt":$n[0].Void,"p":[$n[0].String]},{"a":2,"n":"DOPlayForwardById","t":8,"pi":[{"n":"id","pt":$n[0].String,"ps":0}],"sn":"DOPlayForwardById","rt":$n[0].Void,"p":[$n[0].String]},{"a":2,"n":"DOPlayNext","t":8,"sn":"DOPlayNext","rt":$n[0].Void},{"ov":true,"a":2,"n":"DORestart","t":8,"sn":"DORestart","rt":$n[0].Void},{"ov":true,"a":2,"n":"DORestart","t":8,"pi":[{"n":"fromHere","pt":$n[0].Boolean,"ps":0}],"sn":"DORestart$1","rt":$n[0].Void,"p":[$n[0].Boolean]},{"a":2,"n":"DORestartAllById","t":8,"pi":[{"n":"id","pt":$n[0].String,"ps":0}],"sn":"DORestartAllById","rt":$n[0].Void,"p":[$n[0].String]},{"a":2,"n":"DORestartById","t":8,"pi":[{"n":"id","pt":$n[0].String,"ps":0}],"sn":"DORestartById","rt":$n[0].Void,"p":[$n[0].String]},{"ov":true,"a":2,"n":"DORewind","t":8,"sn":"DORewind","rt":$n[0].Void},{"a":2,"n":"DORewindAllById","t":8,"pi":[{"n":"id","pt":$n[0].String,"ps":0}],"sn":"DORewindAllById","rt":$n[0].Void,"p":[$n[0].String]},{"a":2,"n":"DORewindAndPlayNext","t":8,"sn":"DORewindAndPlayNext","rt":$n[0].Void},{"ov":true,"a":2,"n":"DOTogglePause","t":8,"sn":"DOTogglePause","rt":$n[0].Void},{"a":1,"n":"Dispatch_OnReset","is":true,"t":8,"pi":[{"n":"anim","pt":$n[6].DOTweenAnimation,"ps":0}],"sn":"Dispatch_OnReset","rt":$n[0].Void,"p":[$n[6].DOTweenAnimation]},{"a":1,"n":"GetTweenGO","t":8,"sn":"GetTweenGO","rt":$n[1].GameObject},{"a":1,"n":"GetTweenTarget","t":8,"sn":"GetTweenTarget","rt":$n[1].GameObject},{"a":2,"n":"GetTweens","t":8,"sn":"GetTweens","rt":$n[7].List$1(DG.Tweening.Tween)},{"a":1,"n":"OnDestroy","t":8,"sn":"OnDestroy","rt":$n[0].Void},{"a":1,"n":"ReEvaluateRelativeTween","t":8,"sn":"ReEvaluateRelativeTween","rt":$n[0].Void},{"a":2,"n":"RecreateTween","t":8,"sn":"RecreateTween","rt":$n[0].Void},{"a":2,"n":"RecreateTweenAndPlay","t":8,"sn":"RecreateTweenAndPlay","rt":$n[0].Void},{"a":1,"n":"Reset","t":8,"sn":"Reset","rt":$n[0].Void},{"a":2,"n":"RewindThenRecreateTween","t":8,"sn":"RewindThenRecreateTween","rt":$n[0].Void},{"a":2,"n":"RewindThenRecreateTweenAndPlay","t":8,"sn":"RewindThenRecreateTweenAndPlay","rt":$n[0].Void},{"a":2,"n":"SetAnimationTarget","t":8,"pi":[{"n":"tweenTarget","pt":$n[1].Component,"ps":0},{"n":"useTweenTargetGameObjectForGroupOperations","dv":true,"o":true,"pt":$n[0].Boolean,"ps":1}],"sn":"SetAnimationTarget","rt":$n[0].Void,"p":[$n[1].Component,$n[0].Boolean]},{"a":1,"n":"Start","t":8,"sn":"Start","rt":$n[0].Void},{"a":2,"n":"TypeToDOTargetType","is":true,"t":8,"pi":[{"n":"t","pt":$n[0].Type,"ps":0}],"sn":"TypeToDOTargetType","rt":$n[6].DOTweenAnimation.TargetType,"p":[$n[0].Type],"box":function ($v) { return Bridge.box($v, DG.Tweening.DOTweenAnimation.TargetType, System.Enum.toStringFn(DG.Tweening.DOTweenAnimation.TargetType));}},{"a":1,"n":"_playCount","t":4,"rt":$n[0].Int32,"sn":"_playCount","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":1,"n":"_tweenAutoGenerationCalled","t":4,"rt":$n[0].Boolean,"sn":"_tweenAutoGenerationCalled","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"animationType","t":4,"rt":$n[6].DOTweenAnimation.AnimationType,"sn":"animationType","box":function ($v) { return Bridge.box($v, DG.Tweening.DOTweenAnimation.AnimationType, System.Enum.toStringFn(DG.Tweening.DOTweenAnimation.AnimationType));}},{"a":2,"n":"autoGenerate","t":4,"rt":$n[0].Boolean,"sn":"autoGenerate","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"autoKill","t":4,"rt":$n[0].Boolean,"sn":"autoKill","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"autoPlay","t":4,"rt":$n[0].Boolean,"sn":"autoPlay","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"delay","t":4,"rt":$n[0].Single,"sn":"delay","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"duration","t":4,"rt":$n[0].Single,"sn":"duration","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"easeCurve","t":4,"rt":pc.AnimationCurve,"sn":"easeCurve"},{"a":2,"n":"easeType","t":4,"rt":$n[6].Ease,"sn":"easeType","box":function ($v) { return Bridge.box($v, DG.Tweening.Ease, System.Enum.toStringFn(DG.Tweening.Ease));}},{"a":2,"n":"endValueColor","t":4,"rt":$n[1].Color,"sn":"endValueColor"},{"a":2,"n":"endValueFloat","t":4,"rt":$n[0].Single,"sn":"endValueFloat","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"endValueRect","t":4,"rt":$n[1].Rect,"sn":"endValueRect"},{"a":2,"n":"endValueString","t":4,"rt":$n[0].String,"sn":"endValueString"},{"a":2,"n":"endValueTransform","t":4,"rt":$n[1].Transform,"sn":"endValueTransform"},{"a":2,"n":"endValueV2","t":4,"rt":$n[1].Vector2,"sn":"endValueV2"},{"a":2,"n":"endValueV3","t":4,"rt":$n[1].Vector3,"sn":"endValueV3"},{"a":2,"n":"forcedTargetType","t":4,"rt":$n[6].DOTweenAnimation.TargetType,"sn":"forcedTargetType","box":function ($v) { return Bridge.box($v, DG.Tweening.DOTweenAnimation.TargetType, System.Enum.toStringFn(DG.Tweening.DOTweenAnimation.TargetType));}},{"a":2,"n":"id","t":4,"rt":$n[0].String,"sn":"id"},{"a":2,"n":"isActive","t":4,"rt":$n[0].Boolean,"sn":"isActive","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"isFrom","t":4,"rt":$n[0].Boolean,"sn":"isFrom","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"isIndependentUpdate","t":4,"rt":$n[0].Boolean,"sn":"isIndependentUpdate","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"isRelative","t":4,"rt":$n[0].Boolean,"sn":"isRelative","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"isValid","t":4,"rt":$n[0].Boolean,"sn":"isValid","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"loopType","t":4,"rt":$n[6].LoopType,"sn":"loopType","box":function ($v) { return Bridge.box($v, DG.Tweening.LoopType, System.Enum.toStringFn(DG.Tweening.LoopType));}},{"a":2,"n":"loops","t":4,"rt":$n[0].Int32,"sn":"loops","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"optionalBool0","t":4,"rt":$n[0].Boolean,"sn":"optionalBool0","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"optionalBool1","t":4,"rt":$n[0].Boolean,"sn":"optionalBool1","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"optionalFloat0","t":4,"rt":$n[0].Single,"sn":"optionalFloat0","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"optionalInt0","t":4,"rt":$n[0].Int32,"sn":"optionalInt0","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"optionalRotationMode","t":4,"rt":$n[6].RotateMode,"sn":"optionalRotationMode","box":function ($v) { return Bridge.box($v, DG.Tweening.RotateMode, System.Enum.toStringFn(DG.Tweening.RotateMode));}},{"a":2,"n":"optionalScrambleMode","t":4,"rt":$n[6].ScrambleMode,"sn":"optionalScrambleMode","box":function ($v) { return Bridge.box($v, DG.Tweening.ScrambleMode, System.Enum.toStringFn(DG.Tweening.ScrambleMode));}},{"a":2,"n":"optionalShakeRandomnessMode","t":4,"rt":$n[6].ShakeRandomnessMode,"sn":"optionalShakeRandomnessMode","box":function ($v) { return Bridge.box($v, DG.Tweening.ShakeRandomnessMode, System.Enum.toStringFn(DG.Tweening.ShakeRandomnessMode));}},{"a":2,"n":"optionalString","t":4,"rt":$n[0].String,"sn":"optionalString"},{"a":2,"n":"target","t":4,"rt":$n[1].Component,"sn":"target"},{"a":2,"n":"targetGO","t":4,"rt":$n[1].GameObject,"sn":"targetGO"},{"a":2,"n":"targetIsSelf","t":4,"rt":$n[0].Boolean,"sn":"targetIsSelf","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"targetType","t":4,"rt":$n[6].DOTweenAnimation.TargetType,"sn":"targetType","box":function ($v) { return Bridge.box($v, DG.Tweening.DOTweenAnimation.TargetType, System.Enum.toStringFn(DG.Tweening.DOTweenAnimation.TargetType));}},{"a":2,"n":"tweenTargetIsTargetGO","t":4,"rt":$n[0].Boolean,"sn":"tweenTargetIsTargetGO","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"useTargetAsV3","t":4,"rt":$n[0].Boolean,"sn":"useTargetAsV3","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"OnReset","is":true,"t":2,"ad":{"a":2,"n":"add_OnReset","is":true,"t":8,"pi":[{"n":"value","pt":Function,"ps":0}],"sn":"addOnReset","rt":$n[0].Void,"p":[Function]},"r":{"a":2,"n":"remove_OnReset","is":true,"t":8,"pi":[{"n":"value","pt":Function,"ps":0}],"sn":"removeOnReset","rt":$n[0].Void,"p":[Function]}}]}; }, $n);
    /*DG.Tweening.DOTweenAnimation end.*/

    /*DG.Tweening.DOTweenAnimation+AnimationType start.*/
    $m("DG.Tweening.DOTweenAnimation.AnimationType", function () { return {"td":$n[6].DOTweenAnimation,"att":258,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"CameraAspect","is":true,"t":4,"rt":$n[6].DOTweenAnimation.AnimationType,"sn":"CameraAspect","box":function ($v) { return Bridge.box($v, DG.Tweening.DOTweenAnimation.AnimationType, System.Enum.toStringFn(DG.Tweening.DOTweenAnimation.AnimationType));}},{"a":2,"n":"CameraBackgroundColor","is":true,"t":4,"rt":$n[6].DOTweenAnimation.AnimationType,"sn":"CameraBackgroundColor","box":function ($v) { return Bridge.box($v, DG.Tweening.DOTweenAnimation.AnimationType, System.Enum.toStringFn(DG.Tweening.DOTweenAnimation.AnimationType));}},{"a":2,"n":"CameraFieldOfView","is":true,"t":4,"rt":$n[6].DOTweenAnimation.AnimationType,"sn":"CameraFieldOfView","box":function ($v) { return Bridge.box($v, DG.Tweening.DOTweenAnimation.AnimationType, System.Enum.toStringFn(DG.Tweening.DOTweenAnimation.AnimationType));}},{"a":2,"n":"CameraOrthoSize","is":true,"t":4,"rt":$n[6].DOTweenAnimation.AnimationType,"sn":"CameraOrthoSize","box":function ($v) { return Bridge.box($v, DG.Tweening.DOTweenAnimation.AnimationType, System.Enum.toStringFn(DG.Tweening.DOTweenAnimation.AnimationType));}},{"a":2,"n":"CameraPixelRect","is":true,"t":4,"rt":$n[6].DOTweenAnimation.AnimationType,"sn":"CameraPixelRect","box":function ($v) { return Bridge.box($v, DG.Tweening.DOTweenAnimation.AnimationType, System.Enum.toStringFn(DG.Tweening.DOTweenAnimation.AnimationType));}},{"a":2,"n":"CameraRect","is":true,"t":4,"rt":$n[6].DOTweenAnimation.AnimationType,"sn":"CameraRect","box":function ($v) { return Bridge.box($v, DG.Tweening.DOTweenAnimation.AnimationType, System.Enum.toStringFn(DG.Tweening.DOTweenAnimation.AnimationType));}},{"a":2,"n":"Color","is":true,"t":4,"rt":$n[6].DOTweenAnimation.AnimationType,"sn":"Color","box":function ($v) { return Bridge.box($v, DG.Tweening.DOTweenAnimation.AnimationType, System.Enum.toStringFn(DG.Tweening.DOTweenAnimation.AnimationType));}},{"a":2,"n":"Fade","is":true,"t":4,"rt":$n[6].DOTweenAnimation.AnimationType,"sn":"Fade","box":function ($v) { return Bridge.box($v, DG.Tweening.DOTweenAnimation.AnimationType, System.Enum.toStringFn(DG.Tweening.DOTweenAnimation.AnimationType));}},{"a":2,"n":"LocalMove","is":true,"t":4,"rt":$n[6].DOTweenAnimation.AnimationType,"sn":"LocalMove","box":function ($v) { return Bridge.box($v, DG.Tweening.DOTweenAnimation.AnimationType, System.Enum.toStringFn(DG.Tweening.DOTweenAnimation.AnimationType));}},{"a":2,"n":"LocalRotate","is":true,"t":4,"rt":$n[6].DOTweenAnimation.AnimationType,"sn":"LocalRotate","box":function ($v) { return Bridge.box($v, DG.Tweening.DOTweenAnimation.AnimationType, System.Enum.toStringFn(DG.Tweening.DOTweenAnimation.AnimationType));}},{"a":2,"n":"Move","is":true,"t":4,"rt":$n[6].DOTweenAnimation.AnimationType,"sn":"Move","box":function ($v) { return Bridge.box($v, DG.Tweening.DOTweenAnimation.AnimationType, System.Enum.toStringFn(DG.Tweening.DOTweenAnimation.AnimationType));}},{"a":2,"n":"None","is":true,"t":4,"rt":$n[6].DOTweenAnimation.AnimationType,"sn":"None","box":function ($v) { return Bridge.box($v, DG.Tweening.DOTweenAnimation.AnimationType, System.Enum.toStringFn(DG.Tweening.DOTweenAnimation.AnimationType));}},{"a":2,"n":"PunchPosition","is":true,"t":4,"rt":$n[6].DOTweenAnimation.AnimationType,"sn":"PunchPosition","box":function ($v) { return Bridge.box($v, DG.Tweening.DOTweenAnimation.AnimationType, System.Enum.toStringFn(DG.Tweening.DOTweenAnimation.AnimationType));}},{"a":2,"n":"PunchRotation","is":true,"t":4,"rt":$n[6].DOTweenAnimation.AnimationType,"sn":"PunchRotation","box":function ($v) { return Bridge.box($v, DG.Tweening.DOTweenAnimation.AnimationType, System.Enum.toStringFn(DG.Tweening.DOTweenAnimation.AnimationType));}},{"a":2,"n":"PunchScale","is":true,"t":4,"rt":$n[6].DOTweenAnimation.AnimationType,"sn":"PunchScale","box":function ($v) { return Bridge.box($v, DG.Tweening.DOTweenAnimation.AnimationType, System.Enum.toStringFn(DG.Tweening.DOTweenAnimation.AnimationType));}},{"a":2,"n":"Rotate","is":true,"t":4,"rt":$n[6].DOTweenAnimation.AnimationType,"sn":"Rotate","box":function ($v) { return Bridge.box($v, DG.Tweening.DOTweenAnimation.AnimationType, System.Enum.toStringFn(DG.Tweening.DOTweenAnimation.AnimationType));}},{"a":2,"n":"Scale","is":true,"t":4,"rt":$n[6].DOTweenAnimation.AnimationType,"sn":"Scale","box":function ($v) { return Bridge.box($v, DG.Tweening.DOTweenAnimation.AnimationType, System.Enum.toStringFn(DG.Tweening.DOTweenAnimation.AnimationType));}},{"a":2,"n":"ShakePosition","is":true,"t":4,"rt":$n[6].DOTweenAnimation.AnimationType,"sn":"ShakePosition","box":function ($v) { return Bridge.box($v, DG.Tweening.DOTweenAnimation.AnimationType, System.Enum.toStringFn(DG.Tweening.DOTweenAnimation.AnimationType));}},{"a":2,"n":"ShakeRotation","is":true,"t":4,"rt":$n[6].DOTweenAnimation.AnimationType,"sn":"ShakeRotation","box":function ($v) { return Bridge.box($v, DG.Tweening.DOTweenAnimation.AnimationType, System.Enum.toStringFn(DG.Tweening.DOTweenAnimation.AnimationType));}},{"a":2,"n":"ShakeScale","is":true,"t":4,"rt":$n[6].DOTweenAnimation.AnimationType,"sn":"ShakeScale","box":function ($v) { return Bridge.box($v, DG.Tweening.DOTweenAnimation.AnimationType, System.Enum.toStringFn(DG.Tweening.DOTweenAnimation.AnimationType));}},{"a":2,"n":"Text","is":true,"t":4,"rt":$n[6].DOTweenAnimation.AnimationType,"sn":"Text","box":function ($v) { return Bridge.box($v, DG.Tweening.DOTweenAnimation.AnimationType, System.Enum.toStringFn(DG.Tweening.DOTweenAnimation.AnimationType));}},{"a":2,"n":"UIWidthHeight","is":true,"t":4,"rt":$n[6].DOTweenAnimation.AnimationType,"sn":"UIWidthHeight","box":function ($v) { return Bridge.box($v, DG.Tweening.DOTweenAnimation.AnimationType, System.Enum.toStringFn(DG.Tweening.DOTweenAnimation.AnimationType));}}]}; }, $n);
    /*DG.Tweening.DOTweenAnimation+AnimationType end.*/

    /*DG.Tweening.DOTweenAnimation+TargetType start.*/
    $m("DG.Tweening.DOTweenAnimation.TargetType", function () { return {"td":$n[6].DOTweenAnimation,"att":258,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"Camera","is":true,"t":4,"rt":$n[6].DOTweenAnimation.TargetType,"sn":"Camera","box":function ($v) { return Bridge.box($v, DG.Tweening.DOTweenAnimation.TargetType, System.Enum.toStringFn(DG.Tweening.DOTweenAnimation.TargetType));}},{"a":2,"n":"CanvasGroup","is":true,"t":4,"rt":$n[6].DOTweenAnimation.TargetType,"sn":"CanvasGroup","box":function ($v) { return Bridge.box($v, DG.Tweening.DOTweenAnimation.TargetType, System.Enum.toStringFn(DG.Tweening.DOTweenAnimation.TargetType));}},{"a":2,"n":"Image","is":true,"t":4,"rt":$n[6].DOTweenAnimation.TargetType,"sn":"Image","box":function ($v) { return Bridge.box($v, DG.Tweening.DOTweenAnimation.TargetType, System.Enum.toStringFn(DG.Tweening.DOTweenAnimation.TargetType));}},{"a":2,"n":"Light","is":true,"t":4,"rt":$n[6].DOTweenAnimation.TargetType,"sn":"Light","box":function ($v) { return Bridge.box($v, DG.Tweening.DOTweenAnimation.TargetType, System.Enum.toStringFn(DG.Tweening.DOTweenAnimation.TargetType));}},{"a":2,"n":"RectTransform","is":true,"t":4,"rt":$n[6].DOTweenAnimation.TargetType,"sn":"RectTransform","box":function ($v) { return Bridge.box($v, DG.Tweening.DOTweenAnimation.TargetType, System.Enum.toStringFn(DG.Tweening.DOTweenAnimation.TargetType));}},{"a":2,"n":"Renderer","is":true,"t":4,"rt":$n[6].DOTweenAnimation.TargetType,"sn":"Renderer","box":function ($v) { return Bridge.box($v, DG.Tweening.DOTweenAnimation.TargetType, System.Enum.toStringFn(DG.Tweening.DOTweenAnimation.TargetType));}},{"a":2,"n":"Rigidbody","is":true,"t":4,"rt":$n[6].DOTweenAnimation.TargetType,"sn":"Rigidbody","box":function ($v) { return Bridge.box($v, DG.Tweening.DOTweenAnimation.TargetType, System.Enum.toStringFn(DG.Tweening.DOTweenAnimation.TargetType));}},{"a":2,"n":"Rigidbody2D","is":true,"t":4,"rt":$n[6].DOTweenAnimation.TargetType,"sn":"Rigidbody2D","box":function ($v) { return Bridge.box($v, DG.Tweening.DOTweenAnimation.TargetType, System.Enum.toStringFn(DG.Tweening.DOTweenAnimation.TargetType));}},{"a":2,"n":"SpriteRenderer","is":true,"t":4,"rt":$n[6].DOTweenAnimation.TargetType,"sn":"SpriteRenderer","box":function ($v) { return Bridge.box($v, DG.Tweening.DOTweenAnimation.TargetType, System.Enum.toStringFn(DG.Tweening.DOTweenAnimation.TargetType));}},{"a":2,"n":"Text","is":true,"t":4,"rt":$n[6].DOTweenAnimation.TargetType,"sn":"Text","box":function ($v) { return Bridge.box($v, DG.Tweening.DOTweenAnimation.TargetType, System.Enum.toStringFn(DG.Tweening.DOTweenAnimation.TargetType));}},{"a":2,"n":"TextMeshPro","is":true,"t":4,"rt":$n[6].DOTweenAnimation.TargetType,"sn":"TextMeshPro","box":function ($v) { return Bridge.box($v, DG.Tweening.DOTweenAnimation.TargetType, System.Enum.toStringFn(DG.Tweening.DOTweenAnimation.TargetType));}},{"a":2,"n":"TextMeshProUGUI","is":true,"t":4,"rt":$n[6].DOTweenAnimation.TargetType,"sn":"TextMeshProUGUI","box":function ($v) { return Bridge.box($v, DG.Tweening.DOTweenAnimation.TargetType, System.Enum.toStringFn(DG.Tweening.DOTweenAnimation.TargetType));}},{"a":2,"n":"Transform","is":true,"t":4,"rt":$n[6].DOTweenAnimation.TargetType,"sn":"Transform","box":function ($v) { return Bridge.box($v, DG.Tweening.DOTweenAnimation.TargetType, System.Enum.toStringFn(DG.Tweening.DOTweenAnimation.TargetType));}},{"a":2,"n":"Unset","is":true,"t":4,"rt":$n[6].DOTweenAnimation.TargetType,"sn":"Unset","box":function ($v) { return Bridge.box($v, DG.Tweening.DOTweenAnimation.TargetType, System.Enum.toStringFn(DG.Tweening.DOTweenAnimation.TargetType));}},{"a":2,"n":"tk2dBaseSprite","is":true,"t":4,"rt":$n[6].DOTweenAnimation.TargetType,"sn":"tk2dBaseSprite","box":function ($v) { return Bridge.box($v, DG.Tweening.DOTweenAnimation.TargetType, System.Enum.toStringFn(DG.Tweening.DOTweenAnimation.TargetType));}},{"a":2,"n":"tk2dTextMesh","is":true,"t":4,"rt":$n[6].DOTweenAnimation.TargetType,"sn":"tk2dTextMesh","box":function ($v) { return Bridge.box($v, DG.Tweening.DOTweenAnimation.TargetType, System.Enum.toStringFn(DG.Tweening.DOTweenAnimation.TargetType));}}]}; }, $n);
    /*DG.Tweening.DOTweenAnimation+TargetType end.*/

    /*DG.Tweening.DOTweenAnimationExtensions start.*/
    $m("DG.Tweening.DOTweenAnimationExtensions", function () { return {"att":1048961,"a":2,"s":true,"m":[{"a":2,"n":"IsSameOrSubclassOf","is":true,"t":8,"pi":[{"n":"t","pt":$n[1].Component,"ps":0}],"tpc":1,"tprm":["T"],"sn":"IsSameOrSubclassOf","rt":$n[0].Boolean,"p":[$n[1].Component],"box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}}]}; }, $n);
    /*DG.Tweening.DOTweenAnimationExtensions end.*/

    /*DG.Tweening.DOTweenProShortcuts start.*/
    $m("DG.Tweening.DOTweenProShortcuts", function () { return {"att":385,"a":2,"s":true,"m":[{"n":".cctor","t":1,"sn":"ctor","sm":true},{"a":2,"n":"DOSpiral","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].Transform,"ps":0},{"n":"duration","pt":$n[0].Single,"ps":1},{"n":"axis","dv":null,"o":true,"pt":$n[0].Nullable$1(UnityEngine.Vector3),"ps":2},{"n":"mode","dv":0,"o":true,"pt":$n[6].SpiralMode,"ps":3},{"n":"speed","dv":1.0,"o":true,"pt":$n[0].Single,"ps":4},{"n":"frequency","dv":10.0,"o":true,"pt":$n[0].Single,"ps":5},{"n":"depth","dv":0.0,"o":true,"pt":$n[0].Single,"ps":6},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":7}],"sn":"DOSpiral","rt":$n[6].Tweener,"p":[$n[1].Transform,$n[0].Single,$n[0].Nullable$1(UnityEngine.Vector3),$n[6].SpiralMode,$n[0].Single,$n[0].Single,$n[0].Single,$n[0].Boolean]}]}; }, $n);
    /*DG.Tweening.DOTweenProShortcuts end.*/

    /*ScratchCardAsset.EraseProgress start.*/
    $m("ScratchCardAsset.EraseProgress", function () { return {"nested":[Function],"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"CalcProgress","t":8,"sn":"CalcProgress","rt":$n[0].Void},{"a":2,"n":"GetProgress","t":8,"sn":"GetProgress","rt":$n[0].Single,"box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"GiveProgress","t":8,"sn":"GiveProgress","rt":$n[0].Single,"box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"Init","t":8,"sn":"Init","rt":$n[0].Void},{"a":1,"n":"OnDestroy","t":8,"sn":"OnDestroy","rt":$n[0].Void},{"a":2,"n":"ResetProgress","t":8,"sn":"ResetProgress","rt":$n[0].Void},{"a":1,"n":"Start","t":8,"sn":"Start","rt":$n[0].Void},{"a":1,"n":"Update","t":8,"sn":"Update","rt":$n[0].Void},{"a":2,"n":"UpdateProgress","t":8,"sn":"UpdateProgress","rt":$n[0].Void},{"a":2,"n":"Card","t":4,"rt":$n[5].ScratchCard,"sn":"Card"},{"a":1,"n":"commandBuffer","t":4,"rt":$n[13].CommandBuffer,"sn":"commandBuffer"},{"a":2,"n":"currentProgress","t":4,"rt":$n[0].Single,"sn":"currentProgress","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"isCompleted","t":4,"rt":$n[0].Boolean,"sn":"isCompleted","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":1,"n":"mesh","t":4,"rt":$n[1].Mesh,"sn":"mesh"},{"a":1,"n":"percentRenderTexture","t":4,"rt":$n[1].RenderTexture,"sn":"percentRenderTexture"},{"a":1,"n":"progressTexture","t":4,"rt":$n[1].Texture2D,"sn":"progressTexture"},{"a":1,"n":"readRect","t":4,"rt":$n[1].Rect,"sn":"readRect"},{"a":1,"n":"rti","t":4,"rt":$n[13].RenderTargetIdentifier,"sn":"rti"},{"a":1,"n":"scratchMode","t":4,"rt":$n[5].ScratchCard.ScratchMode,"sn":"scratchMode","box":function ($v) { return Bridge.box($v, ScratchCardAsset.ScratchCard.ScratchMode, System.Enum.toStringFn(ScratchCardAsset.ScratchCard.ScratchMode));}},{"a":2,"n":"OnCompleted","t":2,"ad":{"a":2,"n":"add_OnCompleted","t":8,"pi":[{"n":"value","pt":Function,"ps":0}],"sn":"addOnCompleted","rt":$n[0].Void,"p":[Function]},"r":{"a":2,"n":"remove_OnCompleted","t":8,"pi":[{"n":"value","pt":Function,"ps":0}],"sn":"removeOnCompleted","rt":$n[0].Void,"p":[Function]}},{"a":2,"n":"OnProgress","t":2,"ad":{"a":2,"n":"add_OnProgress","t":8,"pi":[{"n":"value","pt":Function,"ps":0}],"sn":"addOnProgress","rt":$n[0].Void,"p":[Function]},"r":{"a":2,"n":"remove_OnProgress","t":8,"pi":[{"n":"value","pt":Function,"ps":0}],"sn":"removeOnProgress","rt":$n[0].Void,"p":[Function]}}]}; }, $n);
    /*ScratchCardAsset.EraseProgress end.*/

    /*ScratchCardAsset.ScratchCard start.*/
    $m("ScratchCardAsset.ScratchCard", function () { return {"nested":[$n[5].ScratchCard.Quality,$n[5].ScratchCard.ScratchMode],"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"Clear","t":8,"sn":"Clear","rt":$n[0].Void},{"a":2,"n":"ClearInstantly","t":8,"sn":"ClearInstantly","rt":$n[0].Void},{"a":2,"n":"ClearSmoothly","t":8,"pi":[{"n":"duration","dv":0.5,"o":true,"pt":$n[0].Single,"ps":0}],"sn":"ClearSmoothly","rt":$n[0].Void,"p":[$n[0].Single]},{"a":2,"n":"ClearSmoothlyRoutine","t":8,"pi":[{"n":"duration","pt":$n[0].Single,"ps":0}],"sn":"ClearSmoothlyRoutine","rt":$n[4].IEnumerator,"p":[$n[0].Single]},{"a":2,"n":"Clearcurrent","t":8,"sn":"Clearcurrent","rt":$n[0].Void},{"a":2,"n":"FillInstantly","t":8,"sn":"FillInstantly","rt":$n[0].Void},{"a":2,"n":"GetCardInput","t":8,"sn":"GetCardInput","rt":$n[14].ScratchCardInput},{"a":2,"n":"GetCardrenderer","t":8,"sn":"GetCardrenderer","rt":$n[14].ScratchCardRenderer},{"a":1,"n":"GetScratchBounds","t":8,"sn":"GetScratchBounds","rt":$n[0].Void},{"a":1,"n":"GetScratchPosition","t":8,"pi":[{"n":"position","pt":$n[1].Vector2,"ps":0}],"sn":"GetScratchPosition","rt":$n[1].Vector2,"p":[$n[1].Vector2]},{"a":2,"n":"GetScratchTexture","t":8,"sn":"GetScratchTexture","rt":$n[1].Texture2D},{"a":1,"n":"Init","t":8,"sn":"Init","rt":$n[0].Void},{"a":1,"n":"InitTriangle","t":8,"sn":"InitTriangle","rt":$n[0].Void},{"a":1,"n":"InitVariables","t":8,"sn":"InitVariables","rt":$n[0].Void},{"a":1,"n":"NormalizeThePositionToRotation","t":8,"pi":[{"n":"rotation","pt":$n[1].Quaternion,"ps":0}],"sn":"NormalizeThePositionToRotation","rt":$n[1].Vector3,"p":[$n[1].Quaternion]},{"a":1,"n":"OnDestroy","t":8,"sn":"OnDestroy","rt":$n[0].Void},{"a":1,"n":"OnScratchHole","t":8,"pi":[{"n":"position","pt":$n[1].Vector2,"ps":0}],"sn":"OnScratchHole","rt":$n[0].Void,"p":[$n[1].Vector2]},{"a":1,"n":"OnScratchLine","t":8,"pi":[{"n":"start","pt":$n[1].Vector2,"ps":0},{"n":"end","pt":$n[1].Vector2,"ps":1}],"sn":"OnScratchLine","rt":$n[0].Void,"p":[$n[1].Vector2,$n[1].Vector2]},{"a":1,"n":"OnScratchStart","t":8,"sn":"OnScratchStart","rt":$n[0].Void},{"a":2,"n":"ResetRenderTexture","t":8,"sn":"ResetRenderTexture","rt":$n[0].Void},{"a":2,"n":"SetScratchTexture","t":8,"pi":[{"n":"texture","pt":$n[1].Texture2D,"ps":0}],"sn":"SetScratchTexture","rt":$n[0].Void,"p":[$n[1].Texture2D]},{"a":2,"n":"SetStart","t":8,"sn":"SetStart","rt":$n[0].Void},{"a":1,"n":"Start","t":8,"sn":"Start","rt":$n[0].Void},{"a":2,"n":"StopColorCoroutine","t":8,"sn":"StopColorCoroutine","rt":$n[0].Void},{"a":1,"n":"Update","t":8,"sn":"Update","rt":$n[0].Void},{"a":2,"n":"IsScratched","t":16,"rt":$n[0].Boolean,"g":{"a":2,"n":"get_IsScratched","t":8,"rt":$n[0].Boolean,"fg":"IsScratched","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},"s":{"a":1,"n":"set_IsScratched","t":8,"p":[$n[0].Boolean],"rt":$n[0].Void,"fs":"IsScratched"},"fn":"IsScratched"},{"a":2,"n":"Mode","t":16,"rt":$n[5].ScratchCard.ScratchMode,"g":{"a":2,"n":"get_Mode","t":8,"rt":$n[5].ScratchCard.ScratchMode,"fg":"Mode","box":function ($v) { return Bridge.box($v, ScratchCardAsset.ScratchCard.ScratchMode, System.Enum.toStringFn(ScratchCardAsset.ScratchCard.ScratchMode));}},"s":{"a":2,"n":"set_Mode","t":8,"p":[$n[5].ScratchCard.ScratchMode],"rt":$n[0].Void,"fs":"Mode"},"fn":"Mode"},{"a":1,"n":"BlendOpShaderParam","is":true,"t":4,"rt":$n[0].String,"sn":"BlendOpShaderParam"},{"a":2,"n":"BrushScale","t":4,"rt":$n[1].Vector2,"sn":"BrushScale"},{"a":2,"n":"Eraser","t":4,"rt":$n[1].Material,"sn":"Eraser"},{"a":2,"n":"InputEnabled","t":4,"rt":$n[0].Boolean,"sn":"InputEnabled","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"IsScratching","t":4,"rt":$n[0].Boolean,"sn":"IsScratching","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"MainCamera","t":4,"rt":$n[1].Camera,"sn":"MainCamera"},{"a":2,"n":"Progress","t":4,"rt":$n[1].Material,"sn":"Progress"},{"a":2,"n":"RenderTexture","t":4,"rt":$n[1].RenderTexture,"sn":"RenderTexture"},{"a":2,"n":"RenderTextureQuality","t":4,"rt":$n[5].ScratchCard.Quality,"sn":"RenderTextureQuality","box":function ($v) { return Bridge.box($v, ScratchCardAsset.ScratchCard.Quality, System.Enum.toStringFn(ScratchCardAsset.ScratchCard.Quality));}},{"a":2,"n":"ScratchSurface","t":4,"rt":$n[1].Material,"sn":"ScratchSurface"},{"a":1,"n":"SourceTexProperty","is":true,"t":4,"rt":$n[0].String,"sn":"SourceTexProperty"},{"a":2,"n":"Surface","t":4,"rt":$n[1].Transform,"sn":"Surface"},{"a":2,"n":"ToolTip","t":4,"rt":$n[1].GameObject,"sn":"ToolTip"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_mode","t":4,"rt":$n[5].ScratchCard.ScratchMode,"sn":"_mode","box":function ($v) { return Bridge.box($v, ScratchCardAsset.ScratchCard.ScratchMode, System.Enum.toStringFn(ScratchCardAsset.ScratchCard.ScratchMode));}},{"a":1,"n":"boundsSize","t":4,"rt":$n[1].Vector2,"sn":"boundsSize"},{"at":[new UnityEngine.SpaceAttribute.ctor(),new UnityEngine.SpaceAttribute.ctor()],"a":2,"n":"canRotateTip","t":4,"rt":$n[0].Boolean,"sn":"canRotateTip","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"at":[new UnityEngine.SpaceAttribute.ctor(),new UnityEngine.SpaceAttribute.ctor()],"a":2,"n":"canSpreadMask","t":4,"rt":$n[0].Boolean,"sn":"canSpreadMask","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"cardInput","t":4,"rt":$n[14].ScratchCardInput,"sn":"cardInput"},{"a":1,"n":"cardRenderer","t":4,"rt":$n[14].ScratchCardRenderer,"sn":"cardRenderer"},{"a":1,"n":"firstScale","t":4,"rt":$n[1].Vector2,"sn":"firstScale"},{"a":1,"n":"imageSize","t":4,"rt":$n[1].Vector2,"sn":"imageSize"},{"a":1,"n":"isCanvasOverlay","t":4,"rt":$n[0].Boolean,"sn":"isCanvasOverlay","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":1,"n":"isFirstFrame","t":4,"rt":$n[0].Boolean,"sn":"isFirstFrame","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":1,"n":"lastFrameId","t":4,"rt":$n[0].Int32,"sn":"lastFrameId","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":1,"n":"maxScale","t":4,"rt":$n[1].Vector2,"sn":"maxScale"},{"at":[new UnityEngine.SpaceAttribute.ctor(),new UnityEngine.SpaceAttribute.ctor()],"a":2,"n":"shouldPaintHoles","t":4,"rt":$n[0].Boolean,"sn":"shouldPaintHoles","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":1,"n":"surfaceMeshFilter","t":4,"rt":$n[1].MeshFilter,"sn":"surfaceMeshFilter"},{"a":1,"n":"surfaceRectTransform","t":4,"rt":$n[1].RectTransform,"sn":"surfaceRectTransform"},{"a":1,"n":"surfaceRenderer","t":4,"rt":$n[1].Renderer,"sn":"surfaceRenderer"},{"a":1,"n":"surfaceSpriteRenderer","t":4,"rt":$n[1].SpriteRenderer,"sn":"surfaceSpriteRenderer"},{"a":1,"n":"triangle","t":4,"rt":$n[15].Triangle,"sn":"triangle"},{"a":2,"n":"useChangingScale","t":4,"rt":$n[0].Boolean,"sn":"useChangingScale","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"useGivenBrushScale","t":4,"rt":$n[0].Boolean,"sn":"useGivenBrushScale","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}}]}; }, $n);
    /*ScratchCardAsset.ScratchCard end.*/

    /*ScratchCardAsset.ScratchCard+Quality start.*/
    $m("ScratchCardAsset.ScratchCard.Quality", function () { return {"td":$n[5].ScratchCard,"att":258,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"High","is":true,"t":4,"rt":$n[5].ScratchCard.Quality,"sn":"High","box":function ($v) { return Bridge.box($v, ScratchCardAsset.ScratchCard.Quality, System.Enum.toStringFn(ScratchCardAsset.ScratchCard.Quality));}},{"a":2,"n":"Low","is":true,"t":4,"rt":$n[5].ScratchCard.Quality,"sn":"Low","box":function ($v) { return Bridge.box($v, ScratchCardAsset.ScratchCard.Quality, System.Enum.toStringFn(ScratchCardAsset.ScratchCard.Quality));}},{"a":2,"n":"Medium","is":true,"t":4,"rt":$n[5].ScratchCard.Quality,"sn":"Medium","box":function ($v) { return Bridge.box($v, ScratchCardAsset.ScratchCard.Quality, System.Enum.toStringFn(ScratchCardAsset.ScratchCard.Quality));}}]}; }, $n);
    /*ScratchCardAsset.ScratchCard+Quality end.*/

    /*ScratchCardAsset.ScratchCard+ScratchMode start.*/
    $m("ScratchCardAsset.ScratchCard.ScratchMode", function () { return {"td":$n[5].ScratchCard,"att":258,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"Erase","is":true,"t":4,"rt":$n[5].ScratchCard.ScratchMode,"sn":"Erase","box":function ($v) { return Bridge.box($v, ScratchCardAsset.ScratchCard.ScratchMode, System.Enum.toStringFn(ScratchCardAsset.ScratchCard.ScratchMode));}},{"a":2,"n":"Restore","is":true,"t":4,"rt":$n[5].ScratchCard.ScratchMode,"sn":"Restore","box":function ($v) { return Bridge.box($v, ScratchCardAsset.ScratchCard.ScratchMode, System.Enum.toStringFn(ScratchCardAsset.ScratchCard.ScratchMode));}}]}; }, $n);
    /*ScratchCardAsset.ScratchCard+ScratchMode end.*/

    /*ScratchCardAsset.ScratchCardManager start.*/
    $m("ScratchCardAsset.ScratchCardManager", function () { return {"nested":[$n[5].ScratchCardManager.ScratchCardRenderType],"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"Awake","t":8,"sn":"Awake","rt":$n[0].Void},{"a":2,"n":"GetProgress","t":8,"sn":"GetProgress","rt":$n[0].Void},{"a":2,"n":"ResetScratchCard","t":8,"sn":"ResetScratchCard","rt":$n[0].Void},{"a":2,"n":"SetEraseTexture","t":8,"pi":[{"n":"texture","pt":$n[1].Texture,"ps":0}],"sn":"SetEraseTexture","rt":$n[0].Void,"p":[$n[1].Texture]},{"a":2,"n":"BrushShader","t":4,"rt":$n[1].Shader,"sn":"BrushShader"},{"a":2,"n":"Card","t":4,"rt":$n[5].ScratchCard,"sn":"Card"},{"a":2,"n":"EraseTexture","t":4,"rt":$n[1].Texture,"sn":"EraseTexture"},{"a":2,"n":"EraseTextureScale","t":4,"rt":$n[1].Vector2,"sn":"EraseTextureScale"},{"a":2,"n":"ImageCard","t":4,"rt":$n[1].GameObject,"sn":"ImageCard"},{"a":2,"n":"InputEnabled","t":4,"rt":$n[0].Boolean,"sn":"InputEnabled","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"MainCamera","t":4,"rt":$n[1].Camera,"sn":"MainCamera"},{"a":2,"n":"MaskProgressCutOffShader","t":4,"rt":$n[1].Shader,"sn":"MaskProgressCutOffShader"},{"a":2,"n":"MaskProgressCutOffValue","t":4,"rt":$n[0].Single,"sn":"MaskProgressCutOffValue","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"MaskProgressShader","t":4,"rt":$n[1].Shader,"sn":"MaskProgressShader"},{"a":2,"n":"MaskShader","t":4,"rt":$n[1].Shader,"sn":"MaskShader"},{"a":2,"n":"MeshCard","t":4,"rt":$n[1].GameObject,"sn":"MeshCard"},{"a":2,"n":"Mode","t":4,"rt":$n[5].ScratchCard.ScratchMode,"sn":"Mode","box":function ($v) { return Bridge.box($v, ScratchCardAsset.ScratchCard.ScratchMode, System.Enum.toStringFn(ScratchCardAsset.ScratchCard.ScratchMode));}},{"a":2,"n":"Progress","t":4,"rt":$n[5].EraseProgress,"sn":"Progress"},{"a":2,"n":"RenderType","t":4,"rt":$n[5].ScratchCardManager.ScratchCardRenderType,"sn":"RenderType","box":function ($v) { return Bridge.box($v, ScratchCardAsset.ScratchCardManager.ScratchCardRenderType, System.Enum.toStringFn(ScratchCardAsset.ScratchCardManager.ScratchCardRenderType));}},{"a":2,"n":"ScratchSurfaceSprite","t":4,"rt":$n[1].Sprite,"sn":"ScratchSurfaceSprite"},{"a":2,"n":"ScratchSurfaceSpriteHasAlpha","t":4,"rt":$n[0].Boolean,"sn":"ScratchSurfaceSpriteHasAlpha","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"SpriteCard","t":4,"rt":$n[1].GameObject,"sn":"SpriteCard"},{"a":1,"n":"eraserMaterial","t":4,"rt":$n[1].Material,"sn":"eraserMaterial"}]}; }, $n);
    /*ScratchCardAsset.ScratchCardManager end.*/

    /*ScratchCardAsset.ScratchCardManager+ScratchCardRenderType start.*/
    $m("ScratchCardAsset.ScratchCardManager.ScratchCardRenderType", function () { return {"td":$n[5].ScratchCardManager,"att":258,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"CanvasRenderer","is":true,"t":4,"rt":$n[5].ScratchCardManager.ScratchCardRenderType,"sn":"CanvasRenderer","box":function ($v) { return Bridge.box($v, ScratchCardAsset.ScratchCardManager.ScratchCardRenderType, System.Enum.toStringFn(ScratchCardAsset.ScratchCardManager.ScratchCardRenderType));}},{"a":2,"n":"MeshRenderer","is":true,"t":4,"rt":$n[5].ScratchCardManager.ScratchCardRenderType,"sn":"MeshRenderer","box":function ($v) { return Bridge.box($v, ScratchCardAsset.ScratchCardManager.ScratchCardRenderType, System.Enum.toStringFn(ScratchCardAsset.ScratchCardManager.ScratchCardRenderType));}},{"a":2,"n":"SpriteRenderer","is":true,"t":4,"rt":$n[5].ScratchCardManager.ScratchCardRenderType,"sn":"SpriteRenderer","box":function ($v) { return Bridge.box($v, ScratchCardAsset.ScratchCardManager.ScratchCardRenderType, System.Enum.toStringFn(ScratchCardAsset.ScratchCardManager.ScratchCardRenderType));}}]}; }, $n);
    /*ScratchCardAsset.ScratchCardManager+ScratchCardRenderType end.*/

    /*ScratchCardAsset.Tools.MeshGenerator start.*/
    $m("ScratchCardAsset.Tools.MeshGenerator", function () { return {"att":1048961,"a":2,"s":true,"m":[{"a":2,"n":"GenerateQuad","is":true,"t":8,"pi":[{"n":"size","pt":$n[1].Vector3,"ps":0},{"n":"offset","pt":$n[1].Vector3,"ps":1}],"sn":"GenerateQuad","rt":$n[1].Mesh,"p":[$n[1].Vector3,$n[1].Vector3]}]}; }, $n);
    /*ScratchCardAsset.Tools.MeshGenerator end.*/

    /*ScratchCardAsset.Core.ScratchCardInput start.*/
    $m("ScratchCardAsset.Core.ScratchCardInput", function () { return {"nested":[Function,Function,Function,Function],"att":1048577,"a":2,"m":[{"a":2,"n":".ctor","t":1,"p":[$n[5].ScratchCard],"pi":[{"n":"card","pt":$n[5].ScratchCard,"ps":0}],"sn":"ctor"},{"a":2,"n":"Scratch","t":8,"sn":"Scratch","rt":$n[0].Void},{"a":2,"n":"ScratchAtPoint","t":8,"pi":[{"n":"pos","pt":$n[1].Vector2,"ps":0}],"sn":"ScratchAtPoint","rt":$n[0].Void,"p":[$n[1].Vector2]},{"a":1,"n":"TryScratch","t":8,"pi":[{"n":"position","pt":$n[1].Vector2,"ps":0}],"sn":"TryScratch","rt":$n[0].Void,"p":[$n[1].Vector2]},{"a":2,"n":"Update","t":8,"sn":"Update","rt":$n[0].Void},{"a":1,"n":"MaxTouchCount","is":true,"t":4,"rt":$n[0].Int32,"sn":"MaxTouchCount","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":1,"n":"defPos","t":4,"rt":$n[1].Vector2,"sn":"defPos"},{"a":1,"n":"eraseEndPositions","t":4,"rt":$n[1].Vector2,"sn":"eraseEndPositions"},{"a":1,"n":"erasePosition","t":4,"rt":$n[1].Vector2,"sn":"erasePosition"},{"a":1,"n":"eraseStartPositions","t":4,"rt":$n[1].Vector2,"sn":"eraseStartPositions"},{"a":1,"n":"isStartPosition","t":4,"rt":$n[0].Boolean,"sn":"isStartPosition","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":1,"n":"scratchCard","t":4,"rt":$n[5].ScratchCard,"sn":"scratchCard"},{"a":2,"n":"OnScratch","t":2,"ad":{"a":2,"n":"add_OnScratch","t":8,"pi":[{"n":"value","pt":Function,"ps":0}],"sn":"addOnScratch","rt":$n[0].Void,"p":[Function]},"r":{"a":2,"n":"remove_OnScratch","t":8,"pi":[{"n":"value","pt":Function,"ps":0}],"sn":"removeOnScratch","rt":$n[0].Void,"p":[Function]}},{"a":2,"n":"OnScratchHole","t":2,"ad":{"a":2,"n":"add_OnScratchHole","t":8,"pi":[{"n":"value","pt":Function,"ps":0}],"sn":"addOnScratchHole","rt":$n[0].Void,"p":[Function]},"r":{"a":2,"n":"remove_OnScratchHole","t":8,"pi":[{"n":"value","pt":Function,"ps":0}],"sn":"removeOnScratchHole","rt":$n[0].Void,"p":[Function]}},{"a":2,"n":"OnScratchLine","t":2,"ad":{"a":2,"n":"add_OnScratchLine","t":8,"pi":[{"n":"value","pt":Function,"ps":0}],"sn":"addOnScratchLine","rt":$n[0].Void,"p":[Function]},"r":{"a":2,"n":"remove_OnScratchLine","t":8,"pi":[{"n":"value","pt":Function,"ps":0}],"sn":"removeOnScratchLine","rt":$n[0].Void,"p":[Function]}},{"a":2,"n":"OnScratchStart","t":2,"ad":{"a":2,"n":"add_OnScratchStart","t":8,"pi":[{"n":"value","pt":Function,"ps":0}],"sn":"addOnScratchStart","rt":$n[0].Void,"p":[Function]},"r":{"a":2,"n":"remove_OnScratchStart","t":8,"pi":[{"n":"value","pt":Function,"ps":0}],"sn":"removeOnScratchStart","rt":$n[0].Void,"p":[Function]}}]}; }, $n);
    /*ScratchCardAsset.Core.ScratchCardInput end.*/

    /*ScratchCardAsset.Core.ScratchCardRenderer start.*/
    $m("ScratchCardAsset.Core.ScratchCardRenderer", function () { return {"att":1048577,"a":2,"m":[{"a":2,"n":".ctor","t":1,"p":[$n[5].ScratchCard],"pi":[{"n":"card","pt":$n[5].ScratchCard,"ps":0}],"sn":"ctor"},{"a":2,"n":"CreateRenderTexture","t":8,"sn":"CreateRenderTexture","rt":$n[0].Void},{"a":2,"n":"FillRenderTextureWithColor","t":8,"pi":[{"n":"color","pt":$n[1].Color,"ps":0}],"sn":"FillRenderTextureWithColor","rt":$n[0].Void,"p":[$n[1].Color]},{"a":2,"n":"Filling","t":8,"pi":[{"n":"position","pt":$n[1].Vector2,"ps":0}],"sn":"Filling","rt":$n[4].IEnumerator,"p":[$n[1].Vector2]},{"a":2,"n":"FillingLine","t":8,"pi":[{"n":"startPosition","pt":$n[1].Vector2,"ps":0},{"n":"endPosition","pt":$n[1].Vector2,"ps":1}],"sn":"FillingLine","rt":$n[4].IEnumerator,"p":[$n[1].Vector2,$n[1].Vector2]},{"a":1,"n":"IsInBounds","t":8,"pi":[{"n":"rect","pt":$n[1].Rect,"ps":0}],"sn":"IsInBounds","rt":$n[0].Boolean,"p":[$n[1].Rect],"box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"Release","t":8,"sn":"Release","rt":$n[0].Void},{"a":2,"n":"ScratchHoleAddition","t":8,"pi":[{"n":"position","pt":$n[1].Vector2,"ps":0},{"n":"multiplier","pt":$n[0].Single,"ps":1}],"sn":"ScratchHoleAddition","rt":$n[0].Void,"p":[$n[1].Vector2,$n[0].Single]},{"a":1,"n":"ScratchHoleAddition","t":8,"pi":[{"n":"position","pt":$n[1].Vector2,"ps":0},{"n":"multiplier","pt":$n[0].Single,"ps":1},{"n":"rotation","dv":0.0,"o":true,"pt":$n[0].Single,"ps":2}],"sn":"ScratchHoleAddition$1","rt":$n[0].Void,"p":[$n[1].Vector2,$n[0].Single,$n[0].Single]},{"a":2,"n":"ScratchLineAddition","t":8,"pi":[{"n":"startPosition","pt":$n[1].Vector2,"ps":0},{"n":"endPosition","pt":$n[1].Vector2,"ps":1},{"n":"multiplier","pt":$n[0].Single,"ps":2}],"sn":"ScratchLineAddition","rt":$n[0].Void,"p":[$n[1].Vector2,$n[1].Vector2,$n[0].Single]},{"a":2,"n":"ScratchLineAddition","t":8,"pi":[{"n":"startPosition","pt":$n[1].Vector2,"ps":0},{"n":"endPosition","pt":$n[1].Vector2,"ps":1},{"n":"multiplier","pt":$n[0].Single,"ps":2},{"n":"rotation","dv":0.0,"o":true,"pt":$n[0].Single,"ps":3}],"sn":"ScratchLineAddition$1","rt":$n[0].Void,"p":[$n[1].Vector2,$n[1].Vector2,$n[0].Single,$n[0].Single]},{"a":2,"n":"SetImageSize","t":8,"pi":[{"n":"size","pt":$n[1].Vector2,"ps":0}],"sn":"SetImageSize","rt":$n[0].Void,"p":[$n[1].Vector2]},{"a":2,"n":"IsScratched","t":4,"rt":$n[0].Boolean,"sn":"IsScratched","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":1,"n":"MainTexProperty","is":true,"t":4,"rt":$n[0].String,"sn":"MainTexProperty"},{"a":1,"n":"MaskTexProperty","is":true,"t":4,"rt":$n[0].String,"sn":"MaskTexProperty"},{"a":1,"n":"SourceTexProperty","is":true,"t":4,"rt":$n[0].String,"sn":"SourceTexProperty"},{"a":1,"n":"colors","t":4,"rt":$n[7].List$1(UnityEngine.Color),"sn":"colors"},{"a":1,"n":"commandBuffer","t":4,"rt":$n[13].CommandBuffer,"sn":"commandBuffer"},{"a":1,"n":"imageSize","t":4,"rt":$n[1].Vector2,"sn":"imageSize"},{"a":1,"n":"indices","t":4,"rt":$n[7].List$1(System.Int32),"sn":"indices"},{"a":1,"n":"localBounds","t":4,"rt":$n[1].Bounds,"sn":"localBounds"},{"a":1,"n":"meshHole","t":4,"rt":$n[1].Mesh,"sn":"meshHole"},{"a":1,"n":"meshLine","t":4,"rt":$n[1].Mesh,"sn":"meshLine"},{"a":1,"n":"positions","t":4,"rt":$n[7].List$1(UnityEngine.Vector3),"sn":"positions"},{"a":1,"n":"rti","t":4,"rt":$n[13].RenderTargetIdentifier,"sn":"rti"},{"a":1,"n":"scratchCard","t":4,"rt":$n[5].ScratchCard,"sn":"scratchCard"},{"a":2,"n":"useChangingHole","t":4,"rt":$n[0].Boolean,"sn":"useChangingHole","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":1,"n":"uv","t":4,"rt":$n[7].List$1(UnityEngine.Vector2),"sn":"uv"},{"a":1,"n":"wait","t":4,"rt":$n[1].WaitForSeconds,"sn":"wait"},{"a":1,"n":"white","t":4,"rt":$n[1].Color,"sn":"white"}]}; }, $n);
    /*ScratchCardAsset.Core.ScratchCardRenderer end.*/

    /*ScratchCardAsset.Core.Data.Triangle start.*/
    $m("ScratchCardAsset.Core.Data.Triangle", function () { return {"att":1048577,"a":2,"m":[{"a":2,"n":".ctor","t":1,"p":[$n[1].Vector3,$n[1].Vector3,$n[1].Vector3,$n[1].Vector2,$n[1].Vector2,$n[1].Vector2],"pi":[{"n":"vertex0","pt":$n[1].Vector3,"ps":0},{"n":"vertex1","pt":$n[1].Vector3,"ps":1},{"n":"vertex2","pt":$n[1].Vector3,"ps":2},{"n":"uv0","pt":$n[1].Vector2,"ps":3},{"n":"uv1","pt":$n[1].Vector2,"ps":4},{"n":"uv2","pt":$n[1].Vector2,"ps":5}],"sn":"ctor"},{"a":2,"n":"GetUV","t":8,"pi":[{"n":"point","pt":$n[1].Vector3,"ps":0}],"sn":"GetUV","rt":$n[1].Vector2,"p":[$n[1].Vector3]},{"a":1,"n":"uv0","t":4,"rt":$n[1].Vector2,"sn":"uv0","ro":true},{"a":1,"n":"uv1","t":4,"rt":$n[1].Vector2,"sn":"uv1","ro":true},{"a":1,"n":"uv2","t":4,"rt":$n[1].Vector2,"sn":"uv2","ro":true},{"a":1,"n":"v0","t":4,"rt":$n[1].Vector3,"sn":"v0","ro":true},{"a":1,"n":"v1","t":4,"rt":$n[1].Vector3,"sn":"v1","ro":true},{"a":1,"n":"v2","t":4,"rt":$n[1].Vector3,"sn":"v2","ro":true}]}; }, $n);
    /*ScratchCardAsset.Core.Data.Triangle end.*/

    }});
