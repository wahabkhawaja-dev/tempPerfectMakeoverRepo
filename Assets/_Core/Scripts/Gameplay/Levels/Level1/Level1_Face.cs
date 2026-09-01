using System;
using UnityEngine;
using DG.Tweening;
using System.Collections;
using ScratchCardAsset;

public class Level1_Face : LevelData, IEyeFace
{
    [Space()]
    [Header("----------------------------------------------------------------------------------")]
    [Space()]
    public ZoomPos MainZoom;

    [Space()]
    public GameObject ToolHolder;

    [Space()]
    public GameObject Tray;

    [Space()]
    public InteractableBones[] FaceBones;

    [Space()]
    public GameObject CurrentEye;
    public SpriteRenderer[] EyeSRs;
    public Animator[] EyeAnims;

    [Space()]
    public DOTweenAnimation[] BreathingAnim;

    [Space()]
    public AudioSource brushRubingAudio;
    public AudioSource brushRubingAudio2;

    [Header("----------------- STEP 1 ----------------------")]
    [Space()]
    public ZoomPos ZoomStep1;

    [Space()]
    public ZoomPos ZoomStep1B;

    [Space()]
    public GameObject Tool1Holder;

    [Space()]
    public BasicDrag ToolStep1;

    [Space()]
    public BD_CameraFollow ToolStep1CameraFollow;

    [Space()]
    public BD_ToolRotate ToolStep1ToolRotate;

    [Space()]
    public GameObject Holder1;
    public GameObject Holder2;

    [Space()]
    public Transform Wipe;
    public Transform WipeStart;
    public Transform WipeTarget;

    [Space()]
    public Animator BottleAnimator;
    public SpriteRenderer RemoverBodySR;
    public Sprite RemoverBodySprite1;
    public Sprite RemoverBodySprite2;

    [Space()]
    public GameObject HandAnim1;

    [Space()]
    public GameObject Tap1;

    [Space()]
    public Transform DropOnWipe_1;
    public SpriteRenderer SpreadOnWipe_1;

    [Space()]
    public SpriteRenderer Makeup_1;
    public SpriteRenderer Eyes_1;
    [Space()]
    public AudioClip makeupRemoverSfx;

    [Header("----------------- STEP 2 ----------------------")]
    [Space()]
    public ZoomPos ZoomStep2;

    [Space()]
    public ZoomPos ZoomStep2B;

    [Space()]
    public GameObject Tool2Holder;

    [Space()]
    public Animator CapAnimator_2;

    [Space()]
    public DraggableObject ToolStep2;
    [Space()]
    public DO_CameraFollow camFollowStep2;

    [Space()]
    public GameObject[] ToolStep2Indications;

    [Space()]
    public GameObject[] Primers2;
    [Space()]
    public AudioClip primerOpenSfx;

    [Header("----------------- STEP 3 ----------------------")]
    [Space()]
    public ZoomPos ZoomStep3;

    [Space()]
    public GameObject Tip3;

    [Space()]
    public BasicDrag ToolStep3;

    [Space()]
    public BD_CameraFollow ToolStep3CameraFollow;

    [Space()]
    public GameObject HandAnim3;

    [Space()]
    public SpriteRenderer[] Primers_3;

    [Space()]
    public SpriteRenderer PrimerSpread;
    public SpriteRenderer PrimerAbsorb;

    [Header("----------------- STEP 4 ----------------------")]
    [Space()]
    public ZoomPos ZoomStep4;

    [Space()]
    public ZoomPos ZoomStep4B;

    [Space()]
    public GameObject Tool4Holder;

    [Space()]
    public Animator CapAnimator_4;

    [Space()]
    public DraggableObject ToolStep4;
    [Space()]
    public DO_CameraFollow camFollowStep4;


    [Space()]
    public GameObject ToolStep4Shadow;

    [Space()]
    public GameObject[] ToolStep4Indications;

    [Space()]
    public GameObject[] Bases_4;

    [Space()]
    public AudioClip baseOpenSfx;

    [Header("----------------- STEP 5 ----------------------")]
    [Space()]
    public ZoomPos ZoomStep5;

    [Space()]
    public GameObject Tool5Holder;

    [Space()]
    public GameObject Tip5;

    [Space()]
    public BasicDrag ToolStep5;

    [Space()]
    public BD_CameraFollow ToolStep5CameraFollow;

    [Space()]
    public BD_ToolRotate ToolStep5ToolRotate;

    [Space()]
    public GameObject Tool5Simple;
    public GameObject Tool5Picked;

    [Space()]
    public SpriteRenderer[] SRsToFade_5;

    [Space()]
    public SpriteRenderer BaseSpread_5;

    [Header("----------------- STEP 6 ----------------------")]
    [Space()]
    public ZoomPos ZoomStep6;

    [Space()]
    public ZoomPos ZoomStep6B;

    [Space()]
    public GameObject Tap6;

    [Space()]
    public GameObject Tool6Holder;

    [Space()]
    public BasicDrag ToolStep6;

    [Space()]
    public Transform[] ToolStep6Targets;
    public SpriteRenderer ToolStep6BrushSR;

    [Space()]
    public BD_CameraFollow ToolStep6CameraFollow;

    [Space()]
    public BD_ToolRotate ToolStep6ToolRotate;

    [Space()]
    public GameObject HandAnim6;

    [Space()]
    public ParticleSystem Particles_6;

    [Space()]
    public GameObject ObjOpen_6;
    public GameObject ObjClose_6;

    [Space()]
    public GameObject EyeShade_6;
    public GameObject[] ObjOnHold_6;

    [Space()]
    public SpriteRenderer EyeColor_6;
    public SpriteRenderer EyeShadeForOpen_6;

    [Space()]
    public AudioClip EyeShadeOpenSfx;

    [Header("----------------- STEP 7 ----------------------")]
    [Space()]
    public ZoomPos ZoomStep7;

    [Space()]
    public ZoomPos ZoomStep7B;

    [Space()]
    public ZoomPos ZoomStep7C;

    [Space()]
    public GameObject Tool7Holder;

    [Space()]
    public GameObject Tap7;

    [Space()]
    public Transform ToolStep7;
    public BasicDrag ToolStep7Actual;
    public BasicDrag ToolStep7Actualb;
    public ScratchCard step7ScratchCard;
    public GameObject step7ScratchTip;
    public GameObject step7Indication;
    [Space()]
    public GameObject step7AnimObj;
    [Space()]
    public GameObject step7AnimObj2;
    [Space()]
    public BD_CameraFollow ToolStep7CameraFollow;

    [Space()]
    public BD_ToolRotate ToolStep7ToolRotate;

    [Space()]
    public BD_Progress ToolStep7Progress;

    [Space()]
    public SpriteRenderer ToolStep7SR;

    [Space()]
    public GameObject[] ObjOpen_7;
    public GameObject[] ObjClose_7;

    [Space()]
    public InteractableBones[] EyeBones;
    public GameObject Tip7;

    [Space()]
    public GameObject[] ObjOnHold_7;

    [Space()]
    public SpriteRenderer EyeLine_7;
    public SpriteRenderer EyeLineForOpen_7;

    [Space()]
    //  public GameObject EyeLinerIndication;
    //   public GameObject EyeLinerIndication_R;

    [Space()]
    public AudioClip EyeLinerOpenSfx;


    [Header("----------------- STEP 8 ----------------------")]
    [Space()]
    public ZoomPos ZoomStep8;

    [Space()]
    public ZoomPos ZoomStep8B;

    [Space()]
    public ZoomPos ZoomStep8C;

    [Space()]
    public GameObject Tool8Holder;

    [Space()]
    public GameObject Tap8;

    [Space()]
    public GameObject EyeLashParent_8;

    [Space()]
    public BasicDrag ToolStep8;

    [Space()]
    public BD_CameraFollow ToolStep8CameraFollow;

    [Space()]
    public BD_ToolRotate ToolStep8ToolRotate;

    [Space()]
    public BD_Progress ToolStep8Progress;

    [Space()]
    public SpriteRenderer ToolStep8SR;
    public SpriteRenderer ToolStep8SR2;

    [Space()]
    public GameObject[] ObjOpen_8;
    public GameObject[] ObjClose_8;

    [Space()]
    public SpriteRenderer EyeLashes_8;
    [Space()]
    public GameObject mascaraEyeClose;

    [Space()]
    public GameObject mascaraIndication;
    public GameObject mascaraIndication_R;

    [Space()]
    public AudioClip mascaraOpenSfx;

    [Header("----------------- STEP 9 ----------------------")]
    [Space()]
    public ZoomPos ZoomStep9;

    [Space()]
    public ZoomPos ZoomStep9B;

    [Space()]
    public ZoomPos ZoomStep9C;

    [Space()]
    public GameObject Tool9Holder;

    [Space()]
    public GameObject Tap9;

    [Space()]
    public BasicDrag ToolStep9;

    [Space()]
    public SpriteRenderer ToolStep9SR;
    public Sprite ToolStep9Sprite;

    [Space()]
    public BD_CameraFollow ToolStep9CameraFollow;

    [Space()]
    public BD_ToolRotate ToolStep9ToolRotate;

    [Space()]
    public BD_Progress ToolStep9Progress;

    [Space()]
    public Animator ToolStep9CapAnimator;

    [Space()]
    public InteractableBones[] EyeBrowBones;
    public GameObject Tip9;

    [Space()]
    public GameObject[] ObjOnHold_9;

    [Space()]
    public SpriteRenderer EyeBrow_9;
    [Space()]
    public GameObject EyeBrowIndication;
    public GameObject EyeBrowIndication_R;

    [Space()]
    public AudioClip eyeBrowOpenSfx;

    [Header("----------------- STEP 10 ----------------------")]
    [Space()]
    public ZoomPos ZoomStep10;

    [Space()]
    public ZoomPos ZoomStep10B;

    [Space()]
    public GameObject Tool10Holder;

    [Space()]
    public GameObject Tap10;

    [Space()]
    public BasicDrag ToolStep10;

    [Space()]
    public BD_CameraFollow ToolStep10CameraFollow;

    [Space()]
    public BD_ToolRotate ToolStep10ToolRotate;

    [Space()]
    public GameObject HandAnim10;

    [Space()]
    public GameObject[] ToolStep10Tips;

    [Space()]
    public ParticleSystem Particles_10;

    [Space()]
    public Transform[] ToolStep10Targets;
    public SpriteRenderer ToolStep10BrushSR;

    [Space()]
    public GameObject ObjOpen_10;
    public GameObject ObjClose_10;

    [Space()]
    public InteractableBones[] BlushBones;
    public GameObject Tip10;

    [Space()]
    public SpriteRenderer Blush_10;

    [Space()]
    public AudioClip BlushOpenSfx;

    [Header("----------------- STEP 11 ----------------------")]
    [Space()]
    public ZoomPos ZoomStep11;

    [Space()]
    public ZoomPos ZoomStep11B;

    [Space()]
    public GameObject Tool11Holder;

    [Space()]
    public GameObject Tap11;

    [Space()]
    public BasicDrag ToolStep11;

    [Space()]
    public Animator ToolStep11Animator;

    [Space()]
    public BD_CameraFollow ToolStep11CameraFollow;

    [Space()]
    public BD_ToolRotate ToolStep11ToolRotate;

    [Space()]
    public GameObject HandAnim11;

    [Space()]
    public Animator ToolStep11CapAnimator;

    [Space()]
    public GameObject ToolStep11Shadow;

    [Space()]
    public InteractableBones[] LipstickBones;
    public GameObject Tip11;

    [Space()]
    public GameObject LipClose;

    [Space()]
    public AudioClip lipstickOpenSfx;
    public AudioClip lipstickOpenSfx2;

    [Space()]
    public AudioClip lipstickMmmSfx;

    IEnumerator Start()
    {
        base.LevelStart();

        UI_Manager.instance.InitializeTools(ToolIcons);

        yield return new WaitForSeconds(0.1f);

        // STEP 1
        Tool1Holder.SetActive(false);

        ToolStep1CameraFollow.enabled = false;

        // STEP 2
        Tool2Holder.SetActive(false);

        // STEP 4
        Tool4Holder.SetActive(false);

        // STEP 5
        Tool5Holder.SetActive(false);

        ToolStep5CameraFollow.enabled = false;

        // STEP 6
        Tool6Holder.SetActive(false);

        ToolStep6CameraFollow.enabled = false;

        // STEP 7
        Tool7Holder.SetActive(false);

        ToolStep7CameraFollow.enabled = false;

        // STEP 8
        Tool8Holder.SetActive(false);

        ToolStep8CameraFollow.enabled = false;

        // STEP 9
        Tool9Holder.SetActive(false);

        ToolStep9CameraFollow.enabled = false;

        // STEP 10
        Tool10Holder.SetActive(false);

        ToolStep10CameraFollow.enabled = false;

        // STEP 11
        Tool11Holder.SetActive(false);

        ToolStep11CameraFollow.enabled = false;

        ResetEyes();

        levelNo = SaveSystem.Instance.DataFields.levelToPlay - 1;
        partNo = SaveSystem.Instance.DataFields.partToPlay - 1;

        stepsDone = SaveSystem.Instance.DataFields.AllLevels[levelNo].subLevels[partNo].stepsDone;

        switch (stepsDone)
        {
            // STARTING STEP 1
            case 0:
                // STEP START EVENT
                try
                {
                    Statics.GA_CustomStringEvent("Lvl" + GameManager.instance.currentLevelNo
                        + "_" + levelName + "_Step1_Start");
                }
                catch { }

                DOVirtual.DelayedCall(1f, () =>
                {
                    StartStep1();
                });

                break;

            // STARTING STEP 2
            case 1:
                UI_Manager.instance.SetProgressIconIndex(stepsDone);

                ForceCompleteStep1();

                DOVirtual.DelayedCall(.5f, () =>
                {
                    StartStep2();
                });
                break;

            // STARTING STEP 3
            case 2:
                UI_Manager.instance.SetProgressIconIndex(stepsDone);

                ForceCompleteStep2();

                DOVirtual.DelayedCall(.5f, () =>
                {
                    StartStep3();
                });
                break;

            // STARTING STEP 4
            case 3:
                UI_Manager.instance.SetProgressIconIndex(stepsDone);

                ForceCompleteStep3();

                DOVirtual.DelayedCall(.5f, () =>
                {
                    StartStep4();
                });
                break;

            // STARTING STEP 5
            case 4:
                UI_Manager.instance.SetProgressIconIndex(stepsDone);

                ForceCompleteStep4();

                DOVirtual.DelayedCall(.5f, () =>
                {
                    StartStep5();
                });
                break;

            // STARTING STEP 6
            case 5:
                UI_Manager.instance.SetProgressIconIndex(stepsDone);

                ForceCompleteStep5();

                DOVirtual.DelayedCall(.5f, () =>
                {
                    StartStep6();
                });
                break;

            // STARTING STEP 7
            case 6:
                UI_Manager.instance.SetProgressIconIndex(stepsDone);

                ForceCompleteStep6();

                DOVirtual.DelayedCall(.5f, () =>
                {
                    StartStep7();
                });
                break;

            // STARTING STEP 8
            case 7:
                UI_Manager.instance.SetProgressIconIndex(stepsDone);

                ForceCompleteStep7();

                DOVirtual.DelayedCall(.5f, () =>
                {
                    StartStep8();
                });
                break;

            // STARTING STEP 9
            case 8:
                UI_Manager.instance.SetProgressIconIndex(stepsDone);

                ForceCompleteStep8();

                DOVirtual.DelayedCall(.5f, () =>
                {
                    StartStep9();
                });
                break;

            // STARTING STEP 10
            case 9:
                UI_Manager.instance.SetProgressIconIndex(stepsDone);

                ForceCompleteStep9();

                DOVirtual.DelayedCall(.5f, () =>
                {
                    StartStep10();
                });
                break;

            // STARTING STEP 11
            case 10:
                UI_Manager.instance.SetProgressIconIndex(stepsDone);

                ForceCompleteStep10();

                DOVirtual.DelayedCall(.5f, () =>
                {
                    StartStep11();
                });
                break;
        }
    }

    void MoveInTray()
    {
        Tray.transform.DOKill();
        Tray.transform.DOLocalMoveX(0, 1f).SetEase(Ease.OutQuad);
    }

    void MoveOutTray(Transform UnlockToolFromGrip)
    {
        Tray.transform.DOKill();
        Tray.transform.DOLocalMoveX(10f, 1f).SetEase(Ease.InQuad);

        UnlockToolFromGrip.transform.SetParent(ToolHolder.transform);
    }

    #region EYE

    public void ResetEyes()
    {
        for (int i = 0; i < EyeSRs.Length; i++)
        {
            EyeSRs[i].gameObject.SetActive(false);
        }

        for (int i = 0; i < EyeAnims.Length; i++)
        {
            EyeAnims[i].Play(EyeAnims[i].GetCurrentAnimatorStateInfo(0).fullPathHash, 0, 0f);
            EyeAnims[i].Update(0f);

            EyeAnims[i].enabled = true;
        }

        DisableEyeBlink();
    }

    public void SetEyeBlink(int index, bool status = true)
    {
        EyeSRs[index].gameObject.SetActive(status);
    }

    public void EnableEyeBlink()
    {
        CurrentEye.SetActive(true);
    }

    public void DisableEyeBlink()
    {
        CurrentEye.SetActive(false);
    }

    public void OpenEye()
    {
        // Prevent starting coroutine on inactive object
        if (!gameObject.activeInHierarchy)
        {
            return;
        }

        wantOpen = true;

        // One opener at a time. Every trigger exit / mouse-up used to start another, but
        // EyesCo only ever held the newest, so CloseEye could not stop the older ones and
        // one of them would force the eyes open ~2s after they were deliberately closed.
        if (EyesCo != null)
            StopCoroutine(EyesCo);

        EyesCo = StartCoroutine(OpeningEyes());
    }

    Action HelperActionOpen;

    Coroutine EyesCo;
    bool isOpen = false;
    bool wantOpen = false;

    IEnumerator OpeningEyes()
    {
        if (isOpen)
            yield break;

        else
        {
            yield return new WaitForSeconds(2f);

            // A CloseEye during the wait wins - the tool is back on the eye.
            if (!wantOpen)
                yield break;

            isOpen = true;

            for (int i = 0; i < EyeSRs.Length; i++)
            {
                EyeSRs[i].DOKill();
            }

            for (int i = 0; i < EyeAnims.Length; i++)
            {
                EyeAnims[i].Play(EyeAnims[i].GetCurrentAnimatorStateInfo(0).fullPathHash, 0, 0f);
                EyeAnims[i].Update(0f);

                EyeAnims[i].enabled = true;
            }

            if (HelperActionOpen != null)
            {
                HelperActionOpen.Invoke();
            }
        }
    }

    Action HelperActionClose;

    public void CloseEye()
    {
        isOpen = false;
        wantOpen = false;

        if (EyesCo != null)
        {
            StopCoroutine(EyesCo);
            EyesCo = null;
        }

        for (int i = 0; i < EyeAnims.Length; i++)
        {
            EyeAnims[i].enabled = false;
        }

        for (int i = 0; i < EyeSRs.Length; i++)
        {
            EyeSRs[i].DOKill();
            EyeSRs[i].DOFade(1f, .2f).SetDelay(.1f);
        }

        DOVirtual.DelayedCall(.1f, () =>
        {
            if (HelperActionClose != null)
            {
                HelperActionClose.Invoke();
            }
        });
    }

    #endregion

    #region STEP 1

    bool isStep1Done;
    int tapsDone = 0;

    void StartStep1()
    {
        MoveInTray();

        DOVirtual.DelayedCall(1.2f, () =>
        {
            CameraController.Instance.MoveCamera(ZoomStep1.CameraPos, ZoomStep1.CameraFOV);

            Wipe.DOKill();
            Wipe.DOMove(WipeTarget.position, 1f).OnComplete(() =>
            {
                Tap1.SetActive(true);
            });
        });

        Tool1Holder.SetActive(true);

        SetEyeBlink(0);
        SetEyeBlink(1);

        EnableEyeBlink();
    }

    public void BottleTap()
    {
        BottleAnimator.enabled = true;
        BottleAnimator.Play("Drop", 0, 0f);

        if (tapsDone == 0)
        {
            tapsDone++;

            if (makeupRemoverSfx != null)
                AudioController.instance.PlayAnySfx(0, makeupRemoverSfx, 0f);

            DOVirtual.DelayedCall(0.5f, () =>
            {
                DropOnWipe_1.DOKill();
                DropOnWipe_1.DOScale(1f, 1f);


                RemoverBodySR.sprite = RemoverBodySprite1;
            });

            Tap1.SetActive(false);

            Invoke(nameof(BottleTap), 0.7f);
        }

        else
        {
            if (makeupRemoverSfx != null)
                AudioController.instance.PlayAnySfx(0, makeupRemoverSfx, 0f);

            DOVirtual.DelayedCall(0.5f, () =>
            {
                DropOnWipe_1.DOKill();
                DropOnWipe_1.DOScale(1.5f, 1f);

                SpreadOnWipe_1.DOKill();
                SpreadOnWipe_1.DOFade(1f, 1f);

                Invoke(nameof(Drop1Done), 1f);

                RemoverBodySR.sprite = RemoverBodySprite2;
            });


        }
    }

    void Drop1Done()
    {
        Wipe.DOKill();
        Wipe.DOLocalMove(new Vector3(-0.15f, 6.75f, 0f), 1f).OnComplete(() =>
        {
            ToolInputToggle(ToolStep1.gameObject, true);

            ToolStep1CameraFollow.enabled = true;

            ToolStep1ToolRotate.enabled = true;

            ToolStep1.OnMouseDownEvent += () =>
            {
                Holder1.SetActive(false);
                Holder2.SetActive(true);

                HandAnim1.SetActive(false);

                //CloseEye();
            };

            ToolStep1.OnMouseUpEvent += () =>
            {
                //OpenEye();
            };

            HandAnim1.SetActive(true);

            MoveOutTray(ToolStep1.transform);
        });

        CameraController.Instance.MoveCamera(ZoomStep1B.CameraPos, ZoomStep1B.CameraFOV);
    }

    public void Step1Done()
    {
        if (isStep1Done)
            return;

        isStep1Done = true;

        ToolStep1ToolRotate.enabled = false;

        ToolStep1CameraFollow.enabled = false;

        ToolInputToggle(ToolStep1.gameObject, false);

        ToolStep1.transform.DOKill();
        ToolStep1.transform.DOLocalMoveX(10, 1f).SetDelay(.25f).SetEase(Ease.InBack);

        OpenEye();

        DOVirtual.DelayedCall(.5f, () =>
        {
            CameraController.Instance.MoveCamera(ZoomStep2.CameraPos, ZoomStep2.CameraFOV);

            Invoke(nameof(StartStep2), 1f);

            SaveSystem.Instance.DataFields.AllLevels[levelNo].subLevels[partNo].stepsDone = 1;

            SetProgressBar();
        });

        try
        {
            Statics.GA_CustomStringEvent("Lvl" + GameManager.instance.currentLevelNo
                + "_" + levelName + "_Step1_Comp");
        }
        catch { }
    }

    void ForceCompleteStep1()
    {
        Makeup_1.enabled = false;

        Eyes_1.enabled = false;

        SetEyeBlink(0);
        SetEyeBlink(1);

        EnableEyeBlink();
    }

    #endregion

    #region STEP 2

    bool isStep2Done;

    void StartStep2()
    {
        CameraController.Instance.MoveCamera(ZoomStep2.CameraPos, ZoomStep2.CameraFOV);

        MoveInTray();

        Tool1Holder.SetActive(false);
        Tool2Holder.SetActive(true);

        SetEyeBlink(0, false);

        Invoke(nameof(CapRemoved_2), 1f);
    }

    public void CapRemoved_2()
    {
        CapAnimator_2.enabled = true;

        if (primerOpenSfx != null)
            AudioController.instance.PlayAnySfx(0, primerOpenSfx, 0f);

        DOVirtual.DelayedCall(0.5f, () =>
        {
            CameraController.Instance.MoveCamera(ZoomStep2B.CameraPos, ZoomStep2B.CameraFOV);

            ToolStep2.transform.DOKill();
            ToolStep2.transform.DOLocalRotate(new Vector3(0, 0, 305.81f), 1f);
            ToolStep2.transform.DOMove(new Vector3(0, 0, 0f), 1f);

            DOVirtual.DelayedCall(1f, () =>
            {
                ToolStep2.enabled = true;
                camFollowStep2.enabled = true;

                for (int i = 0; i < ToolStep2Indications.Length; i++)
                {
                    ToolStep2Indications[i].SetActive(true);
                }

                MoveOutTray(ToolStep2.transform);
            });
        });
    }

    public void Step2Done()
    {
        if (isStep2Done)
            return;

        isStep2Done = true;

        ToolStep2.enabled = false;
        camFollowStep2.enabled = false;

        ToolStep2.transform.DOKill();
        ToolStep2.transform.DOLocalMoveX(10, 1f).SetDelay(1f).SetEase(Ease.InBack);

        OpenEye();

        DOVirtual.DelayedCall(.5f, () =>
        {
            CameraController.Instance.MoveCamera(ZoomStep3.CameraPos, ZoomStep3.CameraFOV);

            Invoke(nameof(StartStep3), 1f);

            SaveSystem.Instance.DataFields.AllLevels[levelNo].subLevels[partNo].stepsDone = 2;

            SetProgressBar();
        });

        try
        {
            Statics.GA_CustomStringEvent("Lvl" + GameManager.instance.currentLevelNo
                + "_" + levelName + "_Step2_Comp");
        }
        catch { }
    }

    void ForceCompleteStep2()
    {
        ForceCompleteStep1();

        for (int i = 0; i < Primers2.Length; i++)
        {
            Primers2[i].SetActive(true);
        }
    }

    #endregion

    #region STEP 3

    bool isStep3Done;

    void StartStep3()
    {
        CameraController.Instance.MoveCamera(ZoomStep3.CameraPos, ZoomStep3.CameraFOV);

        ToolStep3.transform.DOKill();
        ToolStep3.transform.DOLocalMoveY(0f, .5f).SetDelay(.5f).OnComplete(() =>
        {
            ToolInputToggle(ToolStep3.gameObject, true);

            ToolStep3CameraFollow.enabled = true;

            ToolStep3.OnMouseDownEvent += () =>
            {
                HandAnim3.SetActive(false);
            };

            HandAnim3.SetActive(true);
        });

        Tool2Holder.SetActive(false);

        for (int i = 0; i < FaceBones.Length; i++)
        {
            FaceBones[i].UpdateTip(Tip3);
        }
    }

    public void Step3Done()
    {
        if (isStep3Done)
            return;

        isStep3Done = true;

        ToolStep3CameraFollow.enabled = false;

        ToolInputToggle(ToolStep3.gameObject, false);

        ToolStep3.transform.DOKill();
        ToolStep3.transform.DOLocalMoveY(-10f, 1.5f).SetDelay(.25f).OnComplete(() =>
        {
            ToolStep3.gameObject.SetActive(false);
        });

        for (int i = 0; i < Primers_3.Length; i++)
        {
            Primers_3[i].DOKill();
            Primers_3[i].DOFade(0, 1f).SetDelay(1f);
        }

        PrimerAbsorb.DOKill();
        PrimerAbsorb.DOFade(1f, 1f);

        CameraController.Instance.MoveCamera(ZoomStep4.CameraPos, ZoomStep4.CameraFOV);

        OpenEye();

        DOVirtual.DelayedCall(2f, () =>
        {
            Invoke(nameof(StartStep4), 0.25f);

            SaveSystem.Instance.DataFields.AllLevels[levelNo].subLevels[partNo].stepsDone = 3;

            SetProgressBar();
        });

        try
        {
            Statics.GA_CustomStringEvent("Lvl" + GameManager.instance.currentLevelNo
                + "_" + levelName + "_Step3_Comp");
        }
        catch { }
    }

    void ForceCompleteStep3()
    {
        ForceCompleteStep2();

        for (int i = 0; i < Primers2.Length; i++)
        {
            Primers2[i].SetActive(false);
        }

        PrimerSpread.DOKill();
        PrimerSpread.DOFade(0f, .01f);
        PrimerSpread.gameObject.SetActive(false);

        PrimerAbsorb.DOKill();
        PrimerAbsorb.DOFade(1f, .01f);
    }

    #endregion

    #region STEP 4

    bool isStep4Done;

    void StartStep4()
    {
        CameraController.Instance.MoveCamera(ZoomStep4.CameraPos, ZoomStep4.CameraFOV);

        MoveInTray();

        Tool2Holder.SetActive(false);
        Tool4Holder.SetActive(true);

        Invoke(nameof(CapRemoved_4), 1f);
    }

    public void CapRemoved_4()
    {
        CapAnimator_4.enabled = true;

        if (baseOpenSfx != null)
            AudioController.instance.PlayAnySfx(0, baseOpenSfx, 0f);

        DOVirtual.DelayedCall(0.5f, () =>
        {
            CameraController.Instance.MoveCamera(ZoomStep4B.CameraPos, ZoomStep4B.CameraFOV);

            ToolStep4.transform.DOKill();
            ToolStep4.transform.DOLocalMove(new Vector3(-1.3f, 6f, 0f), 1f);

            ToolStep4Shadow.SetActive(false);

            DOVirtual.DelayedCall(1f, () =>
            {
                ToolStep4.enabled = true;
                camFollowStep4.enabled = true;

                for (int i = 0; i < ToolStep4Indications.Length; i++)
                {
                    ToolStep4Indications[i].SetActive(true);
                }

                MoveOutTray(ToolStep4.transform);
            });

        });
    }

    public void Step4Done()
    {
        if (isStep4Done)
            return;

        isStep4Done = true;

        ToolStep4.enabled = false;
        camFollowStep4.enabled = false;

        ToolInputToggle(ToolStep4.gameObject, false);

        ToolStep4.transform.DOKill();
        ToolStep4.transform.DOLocalMoveX(10, 1f).SetDelay(1f).SetEase(Ease.InBack);

        OpenEye();

        DOVirtual.DelayedCall(.5f, () =>
        {
            CameraController.Instance.MoveCamera(ZoomStep5.CameraPos, ZoomStep5.CameraFOV);

            ToolStep4Shadow.SetActive(true);

            Invoke(nameof(StartStep5), 1f);

            SaveSystem.Instance.DataFields.AllLevels[levelNo].subLevels[partNo].stepsDone = 4;

            SetProgressBar();
        });

        try
        {
            Statics.GA_CustomStringEvent("Lvl" + GameManager.instance.currentLevelNo
                + "_" + levelName + "_Step4_Comp");
        }
        catch { }
    }

    void ForceCompleteStep4()
    {
        ForceCompleteStep3();

        for (int i = 0; i < Bases_4.Length; i++)
        {
            Bases_4[i].SetActive(true);
        }
    }

    #endregion

    #region STEP 5

    bool isStep5Done;

    void StartStep5()
    {
        CameraController.Instance.MoveCamera(ZoomStep5.CameraPos, ZoomStep5.CameraFOV);

        ToolStep5.transform.DOKill();
        ToolStep5.transform.DOMove(new Vector3(0, 0f, 0f), 1f).OnComplete(() =>
        {
            ToolInputToggle(ToolStep5.gameObject, true);

            ToolStep5CameraFollow.enabled = true;

            ToolStep5.transform.SetParent(ToolHolder.transform);

            ToolStep5ToolRotate.enabled = true;
        });

        Tool5Simple.SetActive(false);
        Tool5Picked.SetActive(true);

        for (int i = 0; i < FaceBones.Length; i++)
        {
            FaceBones[i].UpdateTip(Tip5);
        }

        Tool4Holder.SetActive(false);
        Tool5Holder.SetActive(true);
    }

    public void Step5Done()
    {
        if (isStep5Done)
            return;

        isStep5Done = true;

        ToolStep5ToolRotate.enabled = false;

        ToolStep5CameraFollow.enabled = false;

        ToolInputToggle(ToolStep5.gameObject, false);

        ToolStep5.transform.DOKill();
        ToolStep5.transform.DOLocalMoveX(10, 1f).SetDelay(.25f).SetEase(Ease.InBack);

        DOVirtual.DelayedCall(.5f, () =>
        {
            CameraController.Instance.MoveCamera(ZoomStep6.CameraPos, ZoomStep6.CameraFOV);

            Invoke(nameof(StartStep6), 1f);

            SaveSystem.Instance.DataFields.AllLevels[levelNo].subLevels[partNo].stepsDone = 5;

            SetProgressBar();
        });

        for (int i = 0; i < SRsToFade_5.Length; i++)
        {
            SRsToFade_5[i].DOKill();
            SRsToFade_5[i].DOFade(0, 1f).SetDelay(1f);
        }

        DOVirtual.DelayedCall(.5f, () =>
        {
            Tool5Simple.SetActive(true);
            Tool5Picked.SetActive(false);
        });

        OpenEye();

        try
        {
            Statics.GA_CustomStringEvent("Lvl" + GameManager.instance.currentLevelNo
                + "_" + levelName + "_Step5_Comp");
        }
        catch { }
    }

    void ForceCompleteStep5()
    {
        ForceCompleteStep4();

        for (int i = 0; i < Bases_4.Length; i++)
        {
            Bases_4[i].SetActive(false);
        }

        BaseSpread_5.material = GameManager.instance.DefaultMat;
    }

    #endregion

    #region STEP 6

    bool isStep6Done;

    void StartStep6()
    {
        CameraController.Instance.MoveCamera(ZoomStep6.CameraPos, ZoomStep6.CameraFOV);

        MoveInTray();

        Tool5Holder.SetActive(false);
        Tool6Holder.SetActive(true);

        Invoke(nameof(EyeShadeOpen_6), 1f);
    }

    public void EyeShadeOpen_6()
    {
        if (EyeShadeOpenSfx != null)
            AudioController.instance.PlayAnySfx(0, EyeShadeOpenSfx, 0f);

        ObjOpen_6.SetActive(true);
        ObjClose_6.SetActive(false);

        HandAnim6.SetActive(true);

        ToolStep6.transform.DOKill();
        ToolStep6.transform.DOLocalRotateQuaternion(ToolStep6Targets[0].transform.localRotation, 1f);
        ToolStep6.transform.DOLocalMove(ToolStep6Targets[0].transform.localPosition, 1f).OnComplete(() =>
        {
            ToolStep6.transform.DOKill();
            ToolStep6.transform.DOLocalRotateQuaternion(ToolStep6Targets[1].transform.localRotation, .25f);
            ToolStep6.transform.DOLocalMove(ToolStep6Targets[1].transform.localPosition, .25f).OnComplete(() =>
            {

                if (brushRubingAudio != null)
                    brushRubingAudio.Play();

                ToolStep6BrushSR.DOKill();
                ToolStep6BrushSR.DOFade(0f, 2f);

                Particles_6.gameObject.SetActive(true);
                Particles_6.Play();

                ToolStep6.transform.DOKill();
                ToolStep6.transform.DOLocalMove(ToolStep6Targets[2].transform.localPosition, .15f).SetLoops(6, LoopType.Yoyo).OnComplete(() =>
                {
                    ToolStep6.transform.DOKill();
                    ToolStep6.transform.DOLocalRotate(new Vector3(0, 0, 110f), .2f).SetLoops(4, LoopType.Yoyo).OnComplete(() =>
                    {
                        Particles_6.Stop();

                        if (brushRubingAudio != null)
                            brushRubingAudio.Stop();

                        try
                        {
                            ParticleSystemRenderer psRenderer = Particles_6.GetComponent<ParticleSystemRenderer>();

                            psRenderer.sortingOrder = 24;
                        }
                        catch
                        {
                        }

                        CameraController.Instance.MoveCamera(ZoomStep6B.CameraPos, ZoomStep6B.CameraFOV);

                        ToolStep6.transform.DOKill();
                        ToolStep6.transform.DOMove(new Vector3(0f, 0.05f, 0f), 1f);

                        DOVirtual.DelayedCall(1f, () =>
                        {
                            ObjOpen_6.SetActive(false);
                            ObjClose_6.SetActive(true);

                            ToolInputToggle(ToolStep6.gameObject, true);

                            ToolStep6CameraFollow.enabled = true;

                            ToolStep6.OnMouseDownEvent += () =>
                            {
                                HandAnim6.SetActive(false);
                            };

                            HelperActionClose = () =>
                            {
                                for (int i = 0; i < ObjOnHold_6.Length; i++)
                                {
                                    ObjOnHold_6[i].SetActive(true);
                                }

                                EyeShade_6.SetActive(false);

                            };

                            HelperActionOpen = () =>
                            {
                                for (int i = 0; i < ObjOnHold_6.Length; i++)
                                {
                                    ObjOnHold_6[i].SetActive(false);
                                }

                                EyeShade_6.SetActive(true);
                            };

                            MoveOutTray(ToolStep6.transform);


                        });

                        ToolStep6ToolRotate.enabled = true;
                    });
                });
            });
        });
    }

    public void Step6Done()
    {
        if (isStep6Done)
            return;

        isStep6Done = true;

        ToolStep6ToolRotate.enabled = false;

        ToolStep6CameraFollow.enabled = false;

        ToolInputToggle(ToolStep6.gameObject, false);

        ToolStep6.transform.DOKill();
        ToolStep6.transform.DOLocalMoveX(10, 1f).SetDelay(.25f).SetEase(Ease.InBack);

        DOVirtual.DelayedCall(.5f, () =>
        {
            CameraController.Instance.MoveCamera(ZoomStep7.CameraPos, ZoomStep7.CameraFOV);

            Invoke(nameof(StartStep7), 1f);

            SaveSystem.Instance.DataFields.AllLevels[levelNo].subLevels[partNo].stepsDone = 6;

            SetProgressBar();
        });

        OpenEye();

        try
        {
            Statics.GA_CustomStringEvent("Lvl" + GameManager.instance.currentLevelNo
                + "_" + levelName + "_Step6_Comp");
        }
        catch { }
    }

    void ForceCompleteStep6()
    {
        ForceCompleteStep5();

        EyeColor_6.material = GameManager.instance.DefaultMat;

        EyeShadeForOpen_6.material = GameManager.instance.DefaultMat;

        EyeColor_6.gameObject.SetActive(false);

        HelperActionClose = () =>
        {
            for (int i = 0; i < ObjOnHold_6.Length; i++)
            {
                ObjOnHold_6[i].SetActive(true);
            }

            EyeShade_6.SetActive(false);

        };

        HelperActionOpen = () =>
        {
            for (int i = 0; i < ObjOnHold_6.Length; i++)
            {
                ObjOnHold_6[i].SetActive(false);
            }

            EyeShade_6.SetActive(true);
        };
    }

    #endregion

    #region STEP 7

    bool isStep7Done;
    bool isOnLeftStep7 = false;

    void StartStep7()
    {
        CameraController.Instance.MoveCamera(ZoomStep7.CameraPos, ZoomStep7.CameraFOV);

        MoveInTray();

        Tool6Holder.SetActive(false);

        Tool7Holder.SetActive(true);

        Invoke(nameof(EyeLinerOpen_7), 1f);
    }

    public void EyeLinerOpen_7()
    {
        if (EyeLinerOpenSfx != null)
            AudioController.instance.PlayAnySfx(0, EyeLinerOpenSfx, 0);

        for (int i = 0; i < ObjOpen_7.Length; i++)
        {
            ObjOpen_7[i].SetActive(true);
        }

        for (int i = 0; i < ObjClose_7.Length; i++)
        {
            ObjClose_7[i].SetActive(false);
        }

        ToolStep7.transform.DOKill();
        ToolStep7.transform.DOLocalMove(new Vector3(0, 3.57f, 0f), .35f);

        DOVirtual.DelayedCall(.4f, () =>
        {
            CameraController.Instance.MoveCamera(ZoomStep7B.CameraPos, ZoomStep7B.CameraFOV, 1.2f);

            ToolStep7.transform.DOKill();
            ToolStep7.transform.DOMove(new Vector3(0.393f, 1.927f, 0f), 1f);
            ToolStep7.transform.DOScale(new Vector3(0.65f, 0.65f, 0.65f), 1f);
            ToolStep7.transform.DORotate(new Vector3(0f, 0f, -40f), 1f);

            DOVirtual.DelayedCall(1f, () =>
            {

                step7Indication.SetActive(true);

                ToolStep7.gameObject.SetActive(false);
                step7AnimObj.SetActive(true);

                DisableBreathAnim();

                try
                {
                    ToolInputToggle(ToolStep7Actual.gameObject, true);
                }
                catch
                {
                }

                ToolStep7Actual.OnMouseDownEvent += Tool7_OnMouseDown;

                ToolStep7Actual.OnMouseUpEvent += Tool7_OnMouseUp;

                HelperActionClose = () =>
                      {
                          for (int i = 0; i < ObjOnHold_6.Length; i++)
                          {
                              ObjOnHold_6[i].SetActive(true);
                          }

                          for (int i = 0; i < ObjOnHold_7.Length; i++)
                          {
                              ObjOnHold_7[i].SetActive(true);
                          }

                          EyeShade_6.SetActive(false);
                      };

                HelperActionOpen = () =>
                  {
                      for (int i = 0; i < ObjOnHold_6.Length; i++)
                      {
                          ObjOnHold_6[i].SetActive(false);
                      }

                      for (int i = 0; i < ObjOnHold_7.Length; i++)
                      {
                          ObjOnHold_7[i].SetActive(false);
                      }

                      EyeShade_6.SetActive(true);
                  };

                MoveOutTray(ToolStep7.transform);
            });
        });

        for (int i = 0; i < EyeBones.Length; i++)
        {
            EyeBones[i].UpdateTip(Tip7);
        }
    }

    Coroutine progressCheckCoroutine;
    WaitForSeconds waitp1 = new WaitForSeconds(0.2f);

    void Tool7_OnMouseDown()
    {
        step7Indication.SetActive(false);

        ToolStep7ToolRotate.enabled = true;

        ToolStep7SR.sortingOrder = 30;
    }

    void Tool7_OnMouseUp()
    {
        if (!isStep7Done)
        {
            step7Indication.SetActive(true);
        }
    }

    public void ShiftSideToLeft7()
    {
        step7ScratchCard.ToolTip = step7ScratchTip;

        step7AnimObj.transform.DOKill();
        step7AnimObj.transform.DOMoveX(15, 1f).OnComplete(() =>
        {
            step7AnimObj.SetActive(false);

            step7Indication.SetActive(false);
        });

        CameraController.Instance.MoveCamera(ZoomStep7C.CameraPos, ZoomStep7C.CameraFOV);

        step7AnimObj2.SetActive(true);
        step7AnimObj2.transform.DOKill();
        step7AnimObj2.transform.DOMoveX(-15, 0.0001f);
        step7AnimObj2.transform.DOMoveX(0, 1f).SetDelay(0.15f).OnComplete(() =>
        {
            step7AnimObj2.SetActive(true);
        });


        isOnLeftStep7 = true;
    }

    public void Step7Done()
    {
        if (isStep7Done)
            return;

        isStep7Done = true;

        ToolStep7CameraFollow.enabled = false;

        ToolInputToggle(ToolStep7Actualb.gameObject, false);

        step7AnimObj2.transform.DOKill();
        step7AnimObj2.transform.DOLocalMoveX(10, 1f).SetDelay(.25f).SetEase(Ease.InBack).OnComplete(() =>
        {
            step7AnimObj2.SetActive(false);
        });

        DOVirtual.DelayedCall(.5f, () =>
        {
            CameraController.Instance.MoveCamera(ZoomStep8.CameraPos, ZoomStep8.CameraFOV, 1.2f);

            EnableBreathAnim();

            DOVirtual.DelayedCall(0.5f, () =>
            {
                for (int i = 0; i < ObjOpen_7.Length; i++)
                {
                    ObjOpen_7[i].SetActive(false);
                }

                for (int i = 0; i < ObjClose_7.Length; i++)
                {
                    ObjClose_7[i].SetActive(true);
                }

                StartStep8();
            });

            SaveSystem.Instance.DataFields.AllLevels[levelNo].subLevels[partNo].stepsDone = 7;

            SetProgressBar();
        });

        OpenEye();

        try
        {
            Statics.GA_CustomStringEvent("Lvl" + GameManager.instance.currentLevelNo
                + "_" + levelName + "_Step7_Comp");
        }
        catch { }

        ToolStep7Actual.OnMouseDownEvent -= Tool7_OnMouseDown;

        ToolStep7Actual.OnMouseUpEvent -= Tool7_OnMouseUp;
    }

    void ForceCompleteStep7()
    {
        ForceCompleteStep6();

        EyeLine_7.material = GameManager.instance.DefaultMat;

        HelperActionClose = () =>
        {
            for (int i = 0; i < ObjOnHold_6.Length; i++)
            {
                ObjOnHold_6[i].SetActive(true);
            }

            for (int i = 0; i < ObjOnHold_7.Length; i++)
            {
                ObjOnHold_7[i].SetActive(true);
            }

            EyeShade_6.SetActive(false);

            EyeLine_7.enabled = true;
        };

        HelperActionOpen = () =>
        {
            for (int i = 0; i < ObjOnHold_6.Length; i++)
            {
                ObjOnHold_6[i].SetActive(false);
            }

            for (int i = 0; i < ObjOnHold_7.Length; i++)
            {
                ObjOnHold_7[i].SetActive(false);
            }

            EyeShade_6.SetActive(true);

            EyeLine_7.enabled = false;
        };

        for (int i = 0; i < ObjOpen_7.Length; i++)
        {
            ObjOpen_7[i].SetActive(false);
        }

        for (int i = 0; i < ObjClose_7.Length; i++)
        {
            ObjClose_7[i].SetActive(true);
        }

        EyeLine_7.enabled = false;

        EyeLineForOpen_7.DOKill();
        EyeLineForOpen_7.DOFade(1f, .01f);

    }

    #endregion

    #region STEP 8

    bool isStep8Done;
    bool isOnLeftStep8 = false;

    void StartStep8()
    {
        CameraController.Instance.MoveCamera(ZoomStep8.CameraPos, ZoomStep8.CameraFOV, 1.2f);

        MoveInTray();

        Tool7Holder.SetActive(false);
        Tool8Holder.SetActive(true);

        Invoke(nameof(MascaraOpen_8), 1f);
    }

    public void MascaraOpen_8()
    {
        if (mascaraOpenSfx != null)
            AudioController.instance.PlayAnySfx(0, mascaraOpenSfx, 0);

        for (int i = 0; i < ObjOpen_8.Length; i++)
        {
            ObjOpen_8[i].SetActive(true);
        }

        for (int i = 0; i < ObjClose_8.Length; i++)
        {
            ObjClose_8[i].SetActive(false);
        }


        CurrentEye.SetActive(false);
        EyeLashParent_8.SetActive(true);

        ToolStep8.transform.DOKill();
        ToolStep8.transform.DOLocalMove(new Vector3(ToolStep8.transform.localPosition.x, 6f, 0f), .35f).SetDelay(0.2f);

        DOVirtual.DelayedCall(.4f, () =>
        {
            CameraController.Instance.MoveCamera(ZoomStep8B.CameraPos, ZoomStep8B.CameraFOV, 1.2f);

            DisableBreathAnim();

            mascaraIndication.SetActive(true);

            // Start continuous checking if not already running
            if (progressCheckCoroutine == null)
            {
                progressCheckCoroutine = StartCoroutine(CheckMascaraProgress());
            }

            ToolStep8.transform.DOKill();

            ToolStep8.transform.DOMove(new Vector3(0.954f, 1.4f, 0f), 1f);

            // ToolStep8.transform.DOMove(new Vector3(0.4f, 1.07f, 0f), 1f);
            ToolStep8.transform.DOScale(new Vector3(0.65f, 0.65f, 0.65f), 1.15f);
            ToolStep8.transform.DORotate(new Vector3(0f, 0f, -118.695f), 1f);


            ToolStep8.OnMouseDownEvent += () =>
            {
                ToolStep8ToolRotate.enabled = true;

                ToolStep8.OnMouseDownEvent -= () =>
                {
                    ToolStep8ToolRotate.enabled = true;
                };
            };


            DOVirtual.DelayedCall(1.2f, () =>
            {
                ToolInputToggle(ToolStep8.gameObject, true);

                ToolStep8CameraFollow.enabled = true;

                ToolStep8.OnMouseDownEvent += Tool8_OnMouseDown;

                ToolStep8.OnMouseUpEvent += Tool8_OnMouseUp;

                DisableEyeBlink();

                EyeLashParent_8.SetActive(true);

                MoveOutTray(ToolStep8.transform);
            });
        });
    }

    void Tool8_OnMouseDown()
    {
        ToolStep8SR.sortingOrder = 31;
        ToolStep8SR2.sortingOrder = 30;

        mascaraIndication_R.SetActive(false);

        if (isOnLeftStep8)
            mascaraIndication.SetActive(false);

        ToolStep8ToolRotate.enabled = true;
    }

    void Tool8_OnMouseUp()
    {
        if (!isOnLeftStep8)
            mascaraIndication_R.SetActive(true);

        if (!isStep8Done)
            mascaraIndication.SetActive(true);
    }

    IEnumerator CheckMascaraProgress()
    {
        while (!isOnLeftStep8 && !isStep8Done)
        {
            if (ToolStep8Progress.AllScratches[0].ScratchManager.Progress.GiveProgress() <= .55f)
            {
                ShiftSideToLeft_8();
                mascaraIndication_R.SetActive(false);

                // Optional: Stop checking once condition is met
                progressCheckCoroutine = null;
                yield break;
            }

            yield return waitp1;  // Check every 0.1 seconds
        }

        progressCheckCoroutine = null;
    }

    void ShiftSideToLeft_8()
    {
        isOnLeftStep8 = true;

        ToolStep8ToolRotate.enabled = false;

        ToolStep8CameraFollow.enabled = false;

        DOVirtual.DelayedCall(0.4f, () =>
        {
            ToolStep8ToolRotate.MinAngle = new Vector3(0, 0, 316f);
            ToolStep8ToolRotate.MaxAngle = new Vector3(0, 0, 250f);

            DOVirtual.DelayedCall(1f, () =>
            {
                ToolStep8CameraFollow.X_L = -0.3f;
                ToolStep8CameraFollow.X_R = 0.1f;

                ToolStep8CameraFollow.enabled = true;

                ToolStep8.OnMouseDownEvent += () =>
                {
                    mascaraIndication.SetActive(false);
                };

                ToolInputToggle(ToolStep8.gameObject, true);
            });

            BD_Clamp clampTemp = ToolStep8.transform.GetComponent<BD_Clamp>();

            clampTemp.ClampX_L = -1f;
            clampTemp.ClampX_H = 1f;

            clampTemp.enabled = false;
            clampTemp.enabled = true;
        });

    }

    public void Step8Done()
    {
        if (isStep8Done)
            return;

        isStep8Done = true;

        ToolStep8ToolRotate.enabled = false;

        ToolStep8CameraFollow.enabled = false;

        mascaraIndication.SetActive(false);

        ToolStep8.OnMouseDownEvent -= () =>
        {
            ToolStep8ToolRotate.enabled = true;
        };

        ToolInputToggle(ToolStep8.gameObject, false);

        ToolStep8.transform.DOKill();
        ToolStep8.transform.DOLocalMoveX(10, 1f).SetDelay(.25f).SetEase(Ease.InBack);

        DOVirtual.DelayedCall(.5f, () =>
        {
            CameraController.Instance.MoveCamera(ZoomStep8.CameraPos, ZoomStep8.CameraFOV, 1.2f);

            EnableBreathAnim();

            DOVirtual.DelayedCall(0.5f, () =>
            {
                for (int i = 0; i < ObjOpen_8.Length; i++)
                {
                    ObjOpen_8[i].SetActive(false);
                }

                for (int i = 0; i < ObjClose_8.Length; i++)
                {
                    ObjClose_8[i].SetActive(true);
                }

                DOVirtual.DelayedCall(.5f, () =>
                {
                    Invoke(nameof(StartStep9), 1f);

                    SaveSystem.Instance.DataFields.AllLevels[levelNo].subLevels[partNo].stepsDone = 8;

                    SetProgressBar();
                });
            });
        });

        OpenEye();

        try
        {
            Statics.GA_CustomStringEvent("Lvl" + GameManager.instance.currentLevelNo
                + "_" + levelName + "_Step8_Comp");
        }
        catch { }

        ToolStep8.OnMouseDownEvent -= Tool8_OnMouseDown;

        ToolStep8.OnMouseUpEvent -= Tool8_OnMouseUp;
    }

    void ForceCompleteStep8()
    {
        ForceCompleteStep7();

        HelperActionClose = () =>
        {
            for (int i = 0; i < ObjOnHold_6.Length; i++)
            {
                ObjOnHold_6[i].SetActive(true);
            }

            for (int i = 0; i < ObjOnHold_7.Length; i++)
            {
                ObjOnHold_7[i].SetActive(true);
            }

            for (int i = 0; i < ObjOnHold_9.Length; i++)
            {
                ObjOnHold_9[i].SetActive(false);
            }

            EyeShade_6.SetActive(false);
        };

        HelperActionOpen = () =>
        {
            for (int i = 0; i < ObjOnHold_6.Length; i++)
            {
                ObjOnHold_6[i].SetActive(false);
            }

            for (int i = 0; i < ObjOnHold_7.Length; i++)
            {
                ObjOnHold_7[i].SetActive(false);
            }

            for (int i = 0; i < ObjOnHold_9.Length; i++)
            {
                ObjOnHold_9[i].SetActive(true);
            }

            EyeShade_6.SetActive(true);
        };

        EyeLashes_8.material = GameManager.instance.DefaultMat;
    }

    #endregion

    #region STEP 9

    bool isStep9Done;
    bool isOnLeftStep9 = false;

    void StartStep9()
    {
        CameraController.Instance.MoveCamera(ZoomStep9.CameraPos, ZoomStep9.CameraFOV, 1.2f);

        MoveInTray();

        Tool8Holder.SetActive(false);
        Tool9Holder.SetActive(true);

        EnableEyeBlink();

        EyeLashParent_8.SetActive(false);

        for (int i = 0; i < ObjOnHold_9.Length; i++)
        {
            ObjOnHold_9[i].SetActive(true);
        }

        HelperActionClose = () =>
        {
            for (int i = 0; i < ObjOnHold_6.Length; i++)
            {
                ObjOnHold_6[i].SetActive(true);
            }

            for (int i = 0; i < ObjOnHold_7.Length; i++)
            {
                ObjOnHold_7[i].SetActive(true);
            }

            for (int i = 0; i < ObjOnHold_9.Length; i++)
            {
                ObjOnHold_9[i].SetActive(false);
            }

            EyeShade_6.SetActive(false);
        };

        HelperActionOpen = () =>
        {
            for (int i = 0; i < ObjOnHold_6.Length; i++)
            {
                ObjOnHold_6[i].SetActive(false);
            }

            for (int i = 0; i < ObjOnHold_7.Length; i++)
            {
                ObjOnHold_7[i].SetActive(false);
            }

            for (int i = 0; i < ObjOnHold_9.Length; i++)
            {
                ObjOnHold_9[i].SetActive(true);
            }

            EyeShade_6.SetActive(true);
        };

        Invoke(nameof(EyeBrowOpen_9), 1f);

    }

    public void EyeBrowOpen_9()
    {
        if (eyeBrowOpenSfx != null)
            AudioController.instance.PlayAnySfx(0, eyeBrowOpenSfx, 0);

        ToolStep9CapAnimator.enabled = true;

        DOVirtual.DelayedCall(.4f, () =>
        {
            CameraController.Instance.MoveCamera(ZoomStep9B.CameraPos, ZoomStep9B.CameraFOV, 1.2f);

            DisableBreathAnim();

            mascaraEyeClose.SetActive(true);

            ToolStep9SR.sprite = ToolStep9Sprite;

            ToolStep9.transform.DOKill();
            /// ToolStep9.transform.DOMove(new Vector3(0.55f, 1.155f, 0f), 1f);
            ToolStep9.transform.DOMove(new Vector3(1f, 1.658f, 0f), 1f);
            ToolStep9.transform.DOScale(new Vector3(0.88f, 0.88f, 0.88f), 1.15f);
            // ToolStep9.transform.DORotate(new Vector3(0, 0, 53.615f), 1.15f);
            ToolStep9.transform.DORotate(new Vector3(0, 0, 29.536f), 1.15f);

            // Start continuous checking if not already running
            if (progressCheckCoroutine == null)
            {
                progressCheckCoroutine = StartCoroutine(CheckEyebrowProgress());
            }



            DOVirtual.DelayedCall(1.2f, () =>
            {
                ToolInputToggle(ToolStep9.gameObject, true);

                ToolStep9CameraFollow.enabled = true;

                EyeBrowIndication.SetActive(true);

                ToolStep9.OnMouseDownEvent += Tool9_OnMouseDown;

                ToolStep9.OnMouseUpEvent += Tool9_OnMouseUp;

                HelperActionClose = () =>
                {
                    for (int i = 0; i < ObjOnHold_6.Length; i++)
                    {
                        ObjOnHold_6[i].SetActive(true);
                    }

                    for (int i = 0; i < ObjOnHold_7.Length; i++)
                    {
                        ObjOnHold_7[i].SetActive(true);
                    }

                    for (int i = 0; i < ObjOnHold_9.Length; i++)
                    {
                        ObjOnHold_9[i].SetActive(false);
                    }

                    EyeShade_6.SetActive(false);
                };

                HelperActionOpen = () =>
                {
                    for (int i = 0; i < ObjOnHold_6.Length; i++)
                    {
                        ObjOnHold_6[i].SetActive(false);
                    }

                    for (int i = 0; i < ObjOnHold_7.Length; i++)
                    {
                        ObjOnHold_7[i].SetActive(false);
                    }

                    for (int i = 0; i < ObjOnHold_9.Length; i++)
                    {
                        ObjOnHold_9[i].SetActive(true);
                    }

                    EyeShade_6.SetActive(true);
                };

                MoveOutTray(ToolStep9.transform);
            });
        });

        for (int i = 0; i < EyeBrowBones.Length; i++)
        {
            EyeBrowBones[i].UpdateTip(Tip9);
        }
    }

    void Tool9_OnMouseDown()
    {
        ToolStep9ToolRotate.enabled = true;
        EyeBrowIndication_R.SetActive(false);

        if (isStep9Done)
            EyeBrowIndication.SetActive(false);
    }

    void Tool9_OnMouseUp()
    {
        if (!isOnLeftStep9)
            EyeBrowIndication_R.SetActive(true);

        if (!isStep9Done)
            EyeBrowIndication.SetActive(true);
    }

    IEnumerator CheckEyebrowProgress()
    {
        while (!isOnLeftStep9 && !isStep9Done)
        {
            if (ToolStep9Progress.AllScratches[0].ScratchManager.Progress.GiveProgress() <= .51f)
            {
                ShiftSideToLeft_9();

                EyeBrowIndication_R.SetActive(false);

                // Optional: Stop checking once condition is met
                progressCheckCoroutine = null;

                yield break;
            }

            yield return waitp1;  // Check every 0.1 seconds
        }

        progressCheckCoroutine = null;
    }

    void ShiftSideToLeft_9()
    {
        isOnLeftStep9 = true;

        ToolStep9ToolRotate.enabled = false;

        ToolStep9CameraFollow.enabled = false;

        DOVirtual.DelayedCall(0.4f, () =>
        {
            ToolStep9ToolRotate.MinAngle = new Vector3(0, 0, 40f);
            ToolStep9ToolRotate.MaxAngle = new Vector3(0, 0, 0f);

            DOVirtual.DelayedCall(1f, () =>
            {
                ToolStep9CameraFollow.X_L = -0.65f;
                ToolStep9CameraFollow.X_R = 0.45f;

                ToolStep9CameraFollow.enabled = true;

                ToolStep9.OnMouseDownEvent += () =>
                {
                    EyeBrowIndication.SetActive(false);
                };

                ToolInputToggle(ToolStep9.gameObject, true);
            });

            BD_Clamp clampTemp = ToolStep9.transform.GetComponent<BD_Clamp>();

            clampTemp.ClampX_L = -.35f;
            clampTemp.ClampX_H = 1f;

            clampTemp.enabled = false;
            clampTemp.enabled = true;
        });
    }

    public void Step9Done()
    {
        if (isStep9Done)
            return;

        isStep9Done = true;

        ToolStep9ToolRotate.enabled = false;

        ToolStep9CameraFollow.enabled = false;

        EyeBrowIndication.SetActive(false);

        ToolStep9.OnMouseDownEvent -= () =>
        {
            ToolStep9ToolRotate.enabled = true;
        };

        ToolInputToggle(ToolStep9.gameObject, false);

        ToolStep9.transform.DOKill();
        ToolStep9.transform.DOLocalMoveX(10, 1f).SetDelay(.25f).SetEase(Ease.InBack);

        DOVirtual.DelayedCall(.5f, () =>
        {
            CameraController.Instance.MoveCamera(ZoomStep9.CameraPos, ZoomStep9.CameraFOV, 1.2f);

            EnableBreathAnim();

            Invoke(nameof(StartStep10), .1f);

            SaveSystem.Instance.DataFields.AllLevels[levelNo].subLevels[partNo].stepsDone = 9;

            SetProgressBar();
        });

        OpenEye();

        try
        {
            Statics.GA_CustomStringEvent("Lvl" + GameManager.instance.currentLevelNo
                + "_" + levelName + "_Step9_Comp");
        }
        catch { }

        ToolStep9.OnMouseDownEvent -= Tool9_OnMouseDown;

        ToolStep9.OnMouseUpEvent -= Tool9_OnMouseUp;
    }

    void ForceCompleteStep9()
    {
        ForceCompleteStep8();

        EyeBrow_9.material = GameManager.instance.DefaultMat;

        HelperActionClose = () =>
        {
            for (int i = 0; i < ObjOnHold_6.Length; i++)
            {
                ObjOnHold_6[i].SetActive(true);
            }

            for (int i = 0; i < ObjOnHold_7.Length; i++)
            {
                ObjOnHold_7[i].SetActive(true);
            }

            for (int i = 0; i < ObjOnHold_9.Length; i++)
            {
                ObjOnHold_9[i].SetActive(false);
            }

            EyeShade_6.SetActive(false);

            EyeLine_7.enabled = true;
        };

        HelperActionOpen = () =>
        {
            for (int i = 0; i < ObjOnHold_6.Length; i++)
            {
                ObjOnHold_6[i].SetActive(false);
            }

            for (int i = 0; i < ObjOnHold_7.Length; i++)
            {
                ObjOnHold_7[i].SetActive(false);
            }

            for (int i = 0; i < ObjOnHold_9.Length; i++)
            {
                ObjOnHold_9[i].SetActive(true);
            }

            EyeShade_6.SetActive(true);

            EyeLine_7.enabled = false;
        };

    }

    #endregion

    #region STEP 10

    bool isStep10Done;

    void StartStep10()
    {
        CameraController.Instance.MoveCamera(ZoomStep10.CameraPos, ZoomStep10.CameraFOV, 1.25f);

        MoveInTray();

        Tool9Holder.SetActive(false);
        Tool10Holder.SetActive(true);

        Invoke(nameof(BlushOpen_10), 1f);
    }

    public void BlushOpen_10()
    {
        if (BlushOpenSfx != null)
            AudioController.instance.PlayAnySfx(0, BlushOpenSfx, 0);

        ObjOpen_10.SetActive(true);
        ObjClose_10.SetActive(false);

        ToolStep10.transform.DOKill();
        ToolStep10.transform.DOLocalRotateQuaternion(ToolStep10Targets[0].transform.localRotation, .75f);
        ToolStep10.transform.DOLocalMove(ToolStep10Targets[0].transform.localPosition, .75f).OnComplete(() =>
        {
            ToolStep10.transform.DOKill();
            ToolStep10.transform.DOLocalRotateQuaternion(ToolStep10Targets[1].transform.localRotation, .35f);
            ToolStep10.transform.DOLocalMove(ToolStep10Targets[1].transform.localPosition, .35f).OnComplete(() =>
            {

                if (brushRubingAudio2 != null)
                    brushRubingAudio2.Play();

                ToolStep10Tips[0].SetActive(false);
                ToolStep10Tips[1].SetActive(true);
                ToolStep10Tips[2].SetActive(false);

                ToolStep10BrushSR.DOKill();
                ToolStep10BrushSR.DOFade(1f, 2f);

                Particles_10.gameObject.SetActive(true);
                Particles_10.Play();

                ToolStep10.transform.DOKill();
                ToolStep10.transform.DOLocalMove(ToolStep10Targets[2].transform.localPosition, .175f).SetLoops(8, LoopType.Yoyo).OnComplete(() =>
                {
                    ToolStep10.transform.DOKill();
                    ToolStep10.transform.DOLocalRotate(new Vector3(0, 0, 90f), .125f).SetLoops(4, LoopType.Yoyo).OnComplete(() =>
                    {
                        ToolStep10Tips[0].SetActive(false);
                        ToolStep10Tips[1].SetActive(false);
                        ToolStep10Tips[2].SetActive(true);

                        Particles_10.Stop();

                        try
                        {
                            ParticleSystemRenderer psRenderer = Particles_10.GetComponent<ParticleSystemRenderer>();

                            psRenderer.sortingOrder = 25;
                        }
                        catch
                        {
                        }

                        CameraController.Instance.MoveCamera(ZoomStep10B.CameraPos, ZoomStep10B.CameraFOV, 1.25f);

                        ToolStep10.transform.DOKill();
                        ToolStep10.transform.DOMove(new Vector3(0.2f, 0.25f, 0f), 1f);

                        ToolStep10ToolRotate.enabled = true;

                        DOVirtual.DelayedCall(1.2f, () =>
                        {
                            if (brushRubingAudio2 != null)
                                brushRubingAudio2.Stop();

                            ObjOpen_10.SetActive(false);
                            ObjClose_10.SetActive(true);

                            ToolStep10CameraFollow.enabled = true;

                            ToolInputToggle(ToolStep10.gameObject, true);

                            ToolStep10.OnMouseDownEvent += () =>
                            {
                                HandAnim10.SetActive(false);
                            };

                            HelperActionClose = () =>
                            {
                                for (int i = 0; i < ObjOnHold_6.Length; i++)
                                {
                                    ObjOnHold_6[i].SetActive(true);
                                }

                                for (int i = 0; i < ObjOnHold_7.Length; i++)
                                {
                                    ObjOnHold_7[i].SetActive(true);
                                }

                                for (int i = 0; i < ObjOnHold_9.Length; i++)
                                {
                                    ObjOnHold_9[i].SetActive(false);
                                }

                                EyeShade_6.SetActive(false);

                                EyeLine_7.enabled = true;
                            };

                            HelperActionOpen = () =>
                            {
                                for (int i = 0; i < ObjOnHold_6.Length; i++)
                                {
                                    ObjOnHold_6[i].SetActive(false);
                                }

                                for (int i = 0; i < ObjOnHold_7.Length; i++)
                                {
                                    ObjOnHold_7[i].SetActive(false);
                                }

                                for (int i = 0; i < ObjOnHold_9.Length; i++)
                                {
                                    ObjOnHold_9[i].SetActive(true);
                                }

                                EyeShade_6.SetActive(true);

                                EyeLine_7.enabled = false;
                            };

                            MoveOutTray(ToolStep10.transform);

                            HandAnim10.SetActive(true);
                        });
                    });
                });

            });
        });

        for (int i = 0; i < BlushBones.Length; i++)
        {
            BlushBones[i].UpdateTip(Tip10);
        }
    }

    public void Step10Done()
    {
        if (isStep10Done)
            return;

        isStep10Done = true;

        ToolStep10ToolRotate.enabled = false;

        ToolStep10CameraFollow.enabled = false;

        ToolInputToggle(ToolStep10.gameObject, false);

        ToolStep10.transform.DOKill();
        ToolStep10.transform.DOLocalMoveX(10, 1f).SetDelay(.25f).SetEase(Ease.InBack);

        DOVirtual.DelayedCall(.5f, () =>
        {
            CameraController.Instance.MoveCamera(ZoomStep11.CameraPos, ZoomStep11.CameraFOV, 1.25f);

            Invoke(nameof(StartStep11), 1f);

            SaveSystem.Instance.DataFields.AllLevels[levelNo].subLevels[partNo].stepsDone = 10;

            SetProgressBar();
        });

        OpenEye();

        try
        {
            Statics.GA_CustomStringEvent("Lvl" + GameManager.instance.currentLevelNo
                + "_" + levelName + "_Step10_Comp");
        }
        catch { }
    }

    void ForceCompleteStep10()
    {
        ForceCompleteStep9();

        Blush_10.material = GameManager.instance.DefaultMat;

        HelperActionClose = () =>
        {
            for (int i = 0; i < ObjOnHold_6.Length; i++)
            {
                ObjOnHold_6[i].SetActive(true);
            }

            for (int i = 0; i < ObjOnHold_7.Length; i++)
            {
                ObjOnHold_7[i].SetActive(true);
            }

            for (int i = 0; i < ObjOnHold_9.Length; i++)
            {
                ObjOnHold_9[i].SetActive(false);
            }

            EyeShade_6.SetActive(false);

            EyeLine_7.enabled = true;
        };

        HelperActionOpen = () =>
        {
            for (int i = 0; i < ObjOnHold_6.Length; i++)
            {
                ObjOnHold_6[i].SetActive(false);
            }

            for (int i = 0; i < ObjOnHold_7.Length; i++)
            {
                ObjOnHold_7[i].SetActive(false);
            }

            for (int i = 0; i < ObjOnHold_9.Length; i++)
            {
                ObjOnHold_9[i].SetActive(true);
            }

            EyeShade_6.SetActive(true);

            EyeLine_7.enabled = false;
        };
    }

    #endregion

    #region STEP 11

    bool isStep11Done;
    bool animDone11 = false;

    void StartStep11()
    {
        CameraController.Instance.MoveCamera(ZoomStep11.CameraPos, ZoomStep11.CameraFOV, 1.25f);

        MoveInTray();

        Tool10Holder.SetActive(false);
        Tool11Holder.SetActive(true);

        Invoke(nameof(LipstickOpen_11), 1f);
    }

    public void LipstickOpen_11()
    {
        if (lipstickOpenSfx != null)
            AudioController.instance.PlayAnySfx(3, lipstickOpenSfx, 0);

        DOVirtual.DelayedCall(0.5f, () =>
        {
            CameraController.Instance.MoveCamera(ZoomStep11B.CameraPos, ZoomStep11B.CameraFOV);

            ToolStep11.transform.DOKill();
            ToolStep11.transform.DOMove(new Vector3(-0.04f, -0.25f, 0f), 1f);

            DOVirtual.DelayedCall(1f, () =>
            {
                ToolInputToggle(ToolStep11.gameObject, true);

                ToolStep11CameraFollow.enabled = true;

                ToolStep11.OnMouseDownEvent += Tool11_OnMouseDown;
                ToolStep11.OnMouseUpEvent += Tool11_OnMouseUp;

                MoveOutTray(ToolStep11.transform);

                HandAnim11.SetActive(true);
            });
        });

        ToolStep11CapAnimator.enabled = true;

        for (int i = 0; i < LipstickBones.Length; i++)
        {
            LipstickBones[i].UpdateTip(Tip11);
        }
    }

    void Tool11_OnMouseDown()
    {
        HandAnim11.SetActive(false);

        ToolStep11ToolRotate.enabled = true;

        if (animDone11)
            return;

        animDone11 = true;

        ToolStep11Shadow.SetActive(false);

        ToolStep11Animator.enabled = true;

        if (lipstickOpenSfx2 != null)
            AudioController.instance.PlayAnySfx(2, lipstickOpenSfx2, 0);
    }

    void Tool11_OnMouseUp()
    {
        if (!isStep11Done)
            HandAnim11.SetActive(true);
    }

    public void Step11Done()
    {
        if (isStep11Done)
            return;

        isStep11Done = true;

        ToolStep11ToolRotate.enabled = false;

        ToolStep11CameraFollow.enabled = false;

        ToolStep11.OnMouseDownEvent -= () =>
        {
            ToolStep11ToolRotate.enabled = true;
        };

        ToolInputToggle(ToolStep11.gameObject, false);

        ToolStep11.transform.DOKill();
        ToolStep11.transform.DOLocalMoveX(10, 1f).SetDelay(.25f).SetEase(Ease.InBack);

        DOVirtual.DelayedCall(.5f, () =>
        {
            CameraController.Instance.MoveCamera(MainZoom.CameraPos, MainZoom.CameraFOV, 1.5f);

            DOVirtual.DelayedCall(0.5f, () =>
            {
                ToolStep11Shadow.SetActive(true);

                DOVirtual.DelayedCall(0.5f, () =>
                {
                    LipClose.SetActive(true);

                    if (lipstickMmmSfx != null)
                        AudioController.instance.PlayAnySfx(1, lipstickMmmSfx, 0.25f);

                    ToolStep11Shadow.SetActive(true);

                    CameraController.Instance.MoveCamera(MainZoom.CameraPos, MainZoom.CameraFOV);

                    Invoke(nameof(LevelComplete), 2f);

                    SaveSystem.Instance.DataFields.AllLevels[levelNo].subLevels[partNo].stepsDone = 0;

                    UI_Manager.instance.SetProgressBar(1f);
                });
            });
        });

        try
        {
            Statics.GA_CustomStringEvent("Lvl" + GameManager.instance.currentLevelNo
                + "_" + levelName + "_Step11_Comp");
        }
        catch { }
    }

    #endregion

    void OnDisable()
    {
        if (EyesCo != null)
            StopCoroutine(EyesCo);
    }

    void EnableBreathAnim()
    {
        foreach (DOTweenAnimation anim in BreathingAnim)
        {
            anim.DORestart();
        }
    }

    void DisableBreathAnim()
    {
        foreach (DOTweenAnimation anim in BreathingAnim)
        {
            anim.DOPause();
        }
    }
}
