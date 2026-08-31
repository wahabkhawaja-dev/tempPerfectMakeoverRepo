using DG.Tweening;
using System.Collections;
using UnityEngine;

public class Level3_Face_Playable : LevelData
{
    [Space()]
    [Header("----------------------------------------------------------------------------------")]
    [Space()]
    public ZoomPos MainZoom;

    [Header("----------------- EYE ----------------------")]
    [Space()]
    public GameObject OpenEyeHolder;
    public GameObject CloseEyeHolder;

    [Space()]
    public SpriteRenderer[] CloseEyeSRs;
    public Animator[] CloseEyeAnims;

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
    public Transform[] ToolStep1Targets;
    public SpriteRenderer ToolStep1BrushSR;

    [Space()]
    public AudioSource BrushRubingSource;

    [Space()]
    public GameObject Hand_1;

    [Space()]
    public ParticleSystem Particles_1;

    [Space()]
    public GameObject ObjOpen_1;
    public GameObject ObjClose_1;

    [Space()]
    public AudioClip EyeShadeKitOpenSfx;
    
    [Space()]
    public SpriteRenderer[] Layers_1;

    [Header("----------------- STEP 2 ----------------------")]
    [Space()]
    public ZoomPos ZoomStep2;

    [Space()]
    public ZoomPos ZoomStep2B;

    [Space()]
    public ZoomPos ZoomStep2C;

    [Space()]
    public GameObject Tool2Holder;

    [Space()]
    public Transform ToolStep2;

    [Space()]
    public SpriteRenderer ToolStep2SR;

    [Space()]
    public BasicDrag EyelinerDragInput_1;
    public BasicDrag EyelinerDragInput_2;

    [Space()]
    public GameObject Hand_2;

    [Space()]
    public GameObject EyelinerAnim_1;
    public GameObject EyelinerAnim_2;

    [Space()]
    public GameObject[] ObjOpen_2;
    public GameObject[] ObjClose_2;

    [Space()]
    public GameObject EyelinerOnEyeOpen;

    [Space()]
    public AudioClip EyeLinerOpenSfx;

    [Space()]
    public SpriteRenderer[] Layers_2;

    [Header("----------------- STEP 3 ----------------------")]
    [Space()]
    public ZoomPos ZoomStep3;

    [Space()]
    public BasicDrag ToolStep3;

    [Space()]
    public BD_CameraFollow ToolStep3CameraFollow;

    [Space()]
    public GameObject Hand_3;

    [Space()]
    public SpriteRenderer[] Layers_3;

    [Header("----------------- STEP 4 ----------------------")]
    [Space()]
    public ZoomPos ZoomStep4;

    [Space()]
    public GameObject Tool4Holder;
    public GameObject Tool4InnerPacket;

    [Space()]
    public BasicDrag[] LashDrags_4;
    public GameObject[] LashTargets_4;

    [Space()]
    public GameObject[] Layers_4;

    [Header("----------------- STEP 5 ----------------------")]
    [Space()]
    public ZoomPos ZoomStep5;

    [Space()]
    public ZoomPos ZoomStep5B;

    [Space()]
    public GameObject Tool5Holder;

    [Space()]
    public BasicDrag ToolStep5;

    [Space()]
    public BD_CameraFollow ToolStep5CameraFollow;

    [Space()]
    public BD_ToolRotate ToolStep5ToolRotate;

    [Space()]
    public Transform[] ToolStep5Targets;
    public SpriteRenderer ToolStep5BrushSR;

    [Space()]
    public SpriteRenderer ToolStep5BrushSR1;
    public SpriteRenderer ToolStep5BrushSR2;

    [Space()]
    public AudioSource BrushRubingSource_5;

    [Space()]
    public GameObject Hand_5;

    [Space()]
    public ParticleSystem Particles_5;

    [Space()]
    public GameObject ObjOpen_5;
    public GameObject ObjClose_5;

    [Space()]
    public AudioClip BlushKitOpenSfx;

    [Space()]
    public SpriteRenderer[] Layers_5;

    [Header("----------------- STEP 6 ----------------------")]
    [Space()]
    public ZoomPos ZoomStep6;

    [Space()]
    public BasicDrag ToolStep6;

    [Space()]
    public BD_CameraFollow ToolStep6CameraFollow;

    [Space()]
    public SpriteRenderer[] Layers_6;

    [Header("----------------- STEP 7 ----------------------")]
    [Space()]
    public ZoomPos ZoomStep7;

    [Space()]
    public BasicDrag ToolStep7;

    [Space()]
    public BD_CameraFollow ToolStep7CameraFollow;

    [Space()]
    public InteractableBones[] Bones_7;
    public GameObject Tip_7;

    IEnumerator Start()
    {
        // PLAYABLE: cover the ForceComplete step-skip so nothing visibly pops/snaps.
        PlayableFadeCover.Cover();

        base.LevelStart();

        UI_Manager.instance.InitializeTools(ToolIcons);

        CameraController.Instance.MoveCamera(MainZoom.CameraPos, MainZoom.CameraFOV, .01f);

        yield return new WaitForSeconds(0.1f);

        // STEP 1
        ToolStep1CameraFollow.enabled = false;

        // STEP 3
        ToolStep3CameraFollow.enabled = false;

        // STEP 5
        ToolStep5CameraFollow.enabled = false;

        // STEP 6
        ToolStep6CameraFollow.enabled = false;

        // STEP 7
        ToolStep7CameraFollow.enabled = false;

        // SETUP

        ResetEyes();

        

        // PLAYABLE: no save resume — same ForceComplete + StartStep as original switch.
        ForceCompleteStep4();
        StartStep5();
        PlayableFadeCover.Reveal();
        yield break;
}

    #region HELPERS

    // On resume SetProgressIconIndex() has already scrolled the carousel onto the
    // icon of the step we are about to start, so that step must not advance it again.
    bool skipIconAdvance;

    void AdvanceProgressIcon()
    {
        if (skipIconAdvance)
        {
            skipIconAdvance = false;

            return;
        }

        UI_Manager.instance.SetProgressBarPos();
    }

    #endregion

    #region EYE

    public void ResetEyes()
    {
        for (int i = 0; i < CloseEyeAnims.Length; i++)
        {
            CloseEyeAnims[i].Play(CloseEyeAnims[i].GetCurrentAnimatorStateInfo(0).fullPathHash, 0, 0f);
            CloseEyeAnims[i].Update(0f);

            CloseEyeAnims[i].enabled = false;
        }

        OpenEyeHolder.SetActive(true);

        CloseEyeHolder.SetActive(true);

        StartBlinking();
    }

    public void StartBlinking()
    {
        // Prevent starting coroutine on inactive object
        if (!gameObject.activeInHierarchy)
        {
            return;
        }

        EyesCo = StartCoroutine(BlinkingEyes());
    }

    Coroutine EyesCo;
    bool isBlinking = false;

    IEnumerator BlinkingEyes()
    {
        if (isBlinking)
            yield break;

        else
        {
            yield return new WaitForSeconds(2f);

            OpenEyeHolder.SetActive(true);

            CloseEyeHolder.SetActive(true);

            isBlinking = true;

            for (int i = 0; i < CloseEyeSRs.Length; i++)
            {
                CloseEyeSRs[i].DOKill();
            }

            for (int i = 0; i < CloseEyeAnims.Length; i++)
            {
                CloseEyeAnims[i].Play(CloseEyeAnims[i].GetCurrentAnimatorStateInfo(0).fullPathHash, 0, 0f);
                CloseEyeAnims[i].Update(0f);

                CloseEyeAnims[i].enabled = true;
            }
        }
    }

    public void OpenEye()
    {
        if (EyesCo != null)
            StopCoroutine(EyesCo);

        for (int i = 0; i < CloseEyeAnims.Length; i++)
        {
            CloseEyeAnims[i].Play(CloseEyeAnims[i].GetCurrentAnimatorStateInfo(0).fullPathHash, 0, 0f);
            CloseEyeAnims[i].Update(0f);

            CloseEyeAnims[i].enabled = false;
        }

        OpenEyeHolder.SetActive(true);

        CloseEyeHolder.SetActive(false);
    }

    public void CloseEye()
    {
        isBlinking = false;

        if (EyesCo != null)
            StopCoroutine(EyesCo);

        for (int i = 0; i < CloseEyeAnims.Length; i++)
        {
            CloseEyeAnims[i].enabled = false;
        }

        for (int i = 0; i < CloseEyeSRs.Length; i++)
        {
            CloseEyeSRs[i].DOKill();
            CloseEyeSRs[i].DOFade(1f, .2f).SetDelay(.1f);
        }

        DOVirtual.DelayedCall(.1f, () =>
        {
            OpenEyeHolder.SetActive(false);

            CloseEyeHolder.SetActive(true);
        });
    }

    #endregion

    #region STEP 1

    bool isStep1Done;

    void StartStep1()
    {
        Tool1Holder.transform.DOKill();
        Tool1Holder.transform.DOLocalMoveX(0f, .5f).SetDelay(1f).OnComplete(() =>
        {
            if (EyeShadeKitOpenSfx != null)
                AudioController.instance.PlayAnySfx(0, EyeShadeKitOpenSfx, 0f);

            ObjOpen_1.SetActive(true);
            ObjClose_1.SetActive(false);

            ToolStep1.transform.DOKill();
            ToolStep1.transform.DOLocalRotateQuaternion(ToolStep1Targets[0].transform.localRotation, 1f);
            ToolStep1.transform.DOLocalMove(ToolStep1Targets[0].transform.localPosition, 1f).OnComplete(() =>
            {
                ToolStep1.transform.DOKill();
                ToolStep1.transform.DOLocalRotateQuaternion(ToolStep1Targets[1].transform.localRotation, .25f);
                ToolStep1.transform.DOLocalMove(ToolStep1Targets[1].transform.localPosition, .25f).OnComplete(() =>
                {
                    if (BrushRubingSource != null)
                        BrushRubingSource.Play();

                    ToolStep1BrushSR.DOKill();
                    ToolStep1BrushSR.DOFade(0f, 2f);

                    Particles_1.gameObject.SetActive(true);
                    Particles_1.Play();

                    ToolStep1.transform.DOKill();
                    ToolStep1.transform.DOLocalMove(ToolStep1Targets[2].transform.localPosition, .15f).SetLoops(6, LoopType.Yoyo).OnComplete(() =>
                    {
                        ToolStep1.transform.DOKill();
                        ToolStep1.transform.DOLocalRotate(new Vector3(0, 0, 110f), .2f).SetLoops(4, LoopType.Yoyo).OnComplete(() =>
                        {
                            Particles_1.Stop();

                            if (BrushRubingSource != null)
                                BrushRubingSource.Stop();

                            try
                            {
                                ParticleSystemRenderer psRenderer = Particles_1.GetComponent<ParticleSystemRenderer>();

                                psRenderer.sortingOrder = 24;
                            }
                            catch
                            {
                            }

                            ToolStep1.transform.DOKill();
                            ToolStep1.transform.DOScale(.6f, 1.5f);
                            ToolStep1.transform.DOMove(new Vector3(0f, -1.6f, 0f), 1f).OnComplete(() =>
                            {
                                ToolInputToggle(ToolStep1.gameObject, true);

                                ToolStep1CameraFollow.enabled = true;

                                ToolStep1.OnMouseDownEvent += () =>
                                {
                                    Hand_1.SetActive(false);
                                };

                                Hand_1.SetActive(true);
                            });

                            ToolStep1ToolRotate.enabled = true;

                            DOVirtual.DelayedCall(.1f, () =>
                            {
                                ObjOpen_1.SetActive(false);
                                ObjClose_1.SetActive(true);

                                ObjClose_1.transform.DOKill();
                                ObjClose_1.transform.DOMoveX(-10f, 1f).SetDelay(.5f).SetEase(Ease.OutBack);
                            });
                        });
                    });
                });
            });
        });
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

        { PlayableFadeCover.Cover(); ForceCompleteStep4(); Invoke(nameof(StartStep5), 1.2f); PlayableFadeCover.Reveal(); }

        try
        {
            Statics.GA_CustomStringEvent(levelName + "_Step1_Comp");
        }
        catch { }
    }

    void ForceCompleteStep1()
    {
        for (int i = 0; i < Layers_1.Length; i++)
        {
            Layers_1[i].gameObject.SetActive(true);

            Layers_1[i].material = GameManager.instance.DefaultMat;
        }

        OpenEye();

        Invoke(nameof(StartBlinking), 1f);
    }

    #endregion

    #region STEP 2

    bool isStep2Done;
    bool isOnLeftSide2;

    void StartStep2()
    {
        AdvanceProgressIcon();

        Tool2Holder.transform.DOKill();
        Tool2Holder.transform.DOLocalMoveX(0f, .5f).SetDelay(1f).OnComplete(() =>
        {
            DOVirtual.DelayedCall(.25f, () =>
            {
                EyeLinerOpen_2();
            });
        });
    }

    public void EyeLinerOpen_2()
    {
        if (EyeLinerOpenSfx != null)
            AudioController.instance.PlayAnySfx(0, EyeLinerOpenSfx, 0);

        for (int i = 0; i < ObjOpen_2.Length; i++)
        {
            ObjOpen_2[i].SetActive(true);
        }

        for (int i = 0; i < ObjClose_2.Length; i++)
        {
            ObjClose_2[i].SetActive(false);
        }

        ToolStep2.transform.DOKill();
        ToolStep2.transform.DOLocalMove(new Vector3(0, 1.05f, 0f), .35f);

        DOVirtual.DelayedCall(.4f, () =>
        {
            ToolStep2.transform.DOKill();
            ToolStep2.transform.DOMove(new Vector3(0.564f, 1.038f, 0f), 1f);
            ToolStep2.transform.DOScale(0.2605f, 1f);
            ToolStep2.transform.DORotate(new Vector3(0f, 0f, -40f), 1f);

            DOVirtual.DelayedCall(1f, () =>
            {
                Hand_2.SetActive(true);

                ToolStep2.gameObject.SetActive(false);

                EyelinerAnim_1.SetActive(true);

                try
                {
                    ToolInputToggle(EyelinerDragInput_1.gameObject, true);
                }
                catch
                {
                }

                EyelinerDragInput_1.OnMouseDownEvent += Tool2_OnMouseDown;

                EyelinerDragInput_1.OnMouseUpEvent += Tool2_OnMouseUp;

                CloseEye();

                Tool2Holder.SetActive(false);
            });
        });
    }

    void Tool2_OnMouseDown()
    {
        Hand_2.SetActive(false);

        ToolStep2SR.sortingOrder = 30;
    }

    void Tool2_OnMouseUp()
    {
        if (!isOnLeftSide2)
        {
            Hand_2.SetActive(true);
        }
    }

    public void ShiftSideToLeft2()
    {
        isOnLeftSide2 = true;

        Hand_2.SetActive(false);

        EyelinerAnim_1.transform.DOKill();
        EyelinerAnim_1.transform.DOMoveX(15, 1f).OnComplete(() =>
        {
            EyelinerAnim_1.SetActive(false);
        });

        EyelinerAnim_2.SetActive(true);
        EyelinerAnim_2.transform.DOKill();
        EyelinerAnim_2.transform.DOMoveX(-15, 0.0001f);
        EyelinerAnim_2.transform.DOMoveX(0, 1f).SetDelay(0.15f).OnComplete(() =>
        {
            EyelinerAnim_2.SetActive(true);
        });
    }

    public void Step2Done()
    {
        if (isStep2Done)
            return;

        isStep2Done = true;

        ToolInputToggle(EyelinerDragInput_2.gameObject, false);

        EyelinerAnim_2.transform.DOKill();
        EyelinerAnim_2.transform.DOLocalMoveX(10, 1f).SetDelay(.25f).SetEase(Ease.InBack).OnComplete(() =>
        {
            EyelinerAnim_2.SetActive(false);
        });

        EyelinerOnEyeOpen.SetActive(true);

        StartBlinking();

        { PlayableFadeCover.Cover(); ForceCompleteStep4(); Invoke(nameof(StartStep5), 1.2f); PlayableFadeCover.Reveal(); }

        try
        {
            Statics.GA_CustomStringEvent(levelName + "_Step2_Comp");
        }
        catch { }
    }

    void ForceCompleteStep2()
    {
        ForceCompleteStep1();

        for (int i = 0; i < Layers_2.Length; i++)
        {
            Layers_2[i].gameObject.SetActive(true);

            Layers_2[i].material = GameManager.instance.DefaultMat;
        }
    }

    #endregion

    #region STEP 3

    bool isStep3Done;

    void StartStep3()
    {
        AdvanceProgressIcon();

        ToolStep3.transform.DOKill();
        ToolStep3.transform.DOLocalMoveX(0f, .5f).SetDelay(1f).OnComplete(() =>
        {
            ToolInputToggle(ToolStep3.gameObject, true);

            ToolStep3CameraFollow.enabled = true;

            ToolStep3.OnMouseDownEvent += () =>
            {
                Hand_3.SetActive(false);
            };

            Hand_3.SetActive(true);
        });

        OpenEye();
    }

    public void Step3Done()
    {
        if (isStep3Done)
            return;

        isStep3Done = true;

        ToolStep3CameraFollow.enabled = false;

        ToolInputToggle(ToolStep3.gameObject, false);

        ToolStep3.transform.DOKill();
        ToolStep3.transform.DOLocalMoveX(-10f, 1f).SetDelay(.25f).OnComplete(() =>
        {
            ToolStep3.gameObject.SetActive(false);
        });

        { PlayableFadeCover.Cover(); ForceCompleteStep4(); Invoke(nameof(StartStep5), 1f); PlayableFadeCover.Reveal(); }

        try
        {
            Statics.GA_CustomStringEvent(levelName + "_Step3_Comp");
        }
        catch { }
    }

    void ForceCompleteStep3()
    {
        ForceCompleteStep2();

        for (int i = 0; i < Layers_3.Length; i++)
        {
            Layers_3[i].gameObject.SetActive(true);

            Layers_3[i].material = GameManager.instance.DefaultMat;
        }
    }

    #endregion

    #region STEP 4

    bool isStep4Done;
    int lashDone = 0;

    void StartStep4()
    {
        AdvanceProgressIcon();

        Tool4Holder.transform.DOKill();
        Tool4Holder.transform.DOLocalMoveX(0f, .5f).SetDelay(1f).OnComplete(() =>
        {
            Tool4InnerPacket.transform.DOKill();
            Tool4InnerPacket.transform.DOLocalMoveX(7f, .5f).SetDelay(.25f).SetEase(Ease.InQuad).OnComplete(() =>
            {
                Tool4InnerPacket.SetActive(false);

                for (int i = 0; i < LashDrags_4.Length; i++)
                {
                    ToolInputToggle(LashDrags_4[i].gameObject, true);
                }

                for (int i = 0; i < LashTargets_4.Length; i++)
                {
                    LashTargets_4[i].SetActive(true);
                }

                CloseEye();
            });
        });
    }

    public void LastPlaced_4()
    {
        if (isStep4Done)
            return;

        lashDone++;

        UI_Manager.instance.SetProgressBar((float)lashDone / (float)LashDrags_4.Length);

        if (lashDone >= LashDrags_4.Length)
        {
            isStep4Done = true;

            Step4Done();
        }
    }

    void Step4Done()
    {
        Tool4Holder.transform.DOKill();
        Tool4Holder.transform.DOLocalMoveX(-10f, 1f).SetDelay(.25f).OnComplete(() =>
        {
            Tool4Holder.gameObject.SetActive(false);
        });

        StartBlinking();

        Invoke(nameof(StartStep5), 1.2f);

        try
        {
            Statics.GA_CustomStringEvent(levelName + "_Step4_Comp");
        }
        catch { }
    }

    void ForceCompleteStep4()
    {
        ForceCompleteStep3();

        for (int i = 0; i < Layers_4.Length; i++)
        {
            Layers_4[i].SetActive(true);
        }
    }

    #endregion

    #region STEP 5

    bool isStep5Done;

    void StartStep5()
    {
        AdvanceProgressIcon();

        CameraController.Instance.MoveCamera(ZoomStep5.CameraPos, ZoomStep5.CameraFOV);

        Tool5Holder.transform.DOKill();
        Tool5Holder.transform.DOLocalMoveX(0f, .5f).SetDelay(1f).OnComplete(() =>
        {
            if (BlushKitOpenSfx != null)
                AudioController.instance.PlayAnySfx(0, BlushKitOpenSfx, 0f);

            ObjOpen_5.SetActive(true);
            ObjClose_5.SetActive(false);

            ToolStep5.transform.DOKill();
            ToolStep5.transform.DOLocalRotateQuaternion(ToolStep5Targets[0].transform.localRotation, 1f);
            ToolStep5.transform.DOLocalMove(ToolStep5Targets[0].transform.localPosition, 1f).OnComplete(() =>
            {
                ToolStep5.transform.DOKill();
                ToolStep5.transform.DOLocalRotateQuaternion(ToolStep5Targets[1].transform.localRotation, .25f);
                ToolStep5.transform.DOLocalMove(ToolStep5Targets[1].transform.localPosition, .25f).OnComplete(() =>
                {
                    if (BrushRubingSource_5 != null)
                        BrushRubingSource_5.Play();

                    ToolStep5BrushSR1.gameObject.SetActive(false);
                    ToolStep5BrushSR2.gameObject.SetActive(true);

                    ToolStep5BrushSR.DOKill();
                    ToolStep5BrushSR.DOFade(1f, 1f);

                    ToolStep5BrushSR1.DOKill();
                    ToolStep5BrushSR1.DOFade(0, 2f);

                    ToolStep5BrushSR2.DOKill();
                    ToolStep5BrushSR2.DOFade(0, 2f);

                    Particles_5.gameObject.SetActive(true);
                    Particles_5.Play();

                    ToolStep5.transform.DOKill();
                    ToolStep5.transform.DOLocalMove(ToolStep5Targets[2].transform.localPosition, .15f).SetLoops(10, LoopType.Yoyo).OnComplete(() =>
                    {
                        ToolStep5BrushSR2.DOKill();
                        ToolStep5BrushSR2.DOFade(0, 1f);

                        ToolStep5.transform.DOKill();
                        ToolStep5.transform.DOLocalRotate(new Vector3(0, 0, 110f), .2f).SetLoops(4, LoopType.Yoyo).OnComplete(() =>
                        {
                            Particles_5.Stop();

                            if (BrushRubingSource_5 != null)
                                BrushRubingSource_5.Stop();

                            try
                            {
                                ParticleSystemRenderer psRenderer = Particles_5.GetComponent<ParticleSystemRenderer>();

                                psRenderer.sortingOrder = 24;
                            }
                            catch
                            {
                            }

                            CameraController.Instance.MoveCamera(ZoomStep5B.CameraPos, ZoomStep5B.CameraFOV);

                            ToolStep5.transform.DOKill();
                            ToolStep5.transform.DOScale(0.7f, 1.5f);
                            ToolStep5.transform.DOMove(new Vector3(0.4f, -1.5f, 0f), 1f).OnComplete(() =>
                            {
                                ToolInputToggle(ToolStep5.gameObject, true);

                                ToolStep5CameraFollow.enabled = true;

                                ToolStep5.OnMouseDownEvent += () =>
                                {
                                    Hand_5.SetActive(false);
                                };

                                Hand_5.SetActive(true);
                            });

                            ToolStep5ToolRotate.enabled = true;

                            DOVirtual.DelayedCall(.1f, () =>
                            {
                                ObjOpen_5.SetActive(false);
                                ObjClose_5.SetActive(true);

                                ObjClose_5.transform.DOKill();
                                ObjClose_5.transform.DOMoveX(-10f, 1f).SetDelay(.5f).SetEase(Ease.OutBack);
                            });
                        });
                    });
                });
            });
        });
    }

    public void Step5Done()
    {
        if (isStep5Done)
            return;

        isStep5Done = true;

        ToolStep5ToolRotate.enabled = false;

        ToolStep5CameraFollow.enabled = false;

        ToolInputToggle(ToolStep5.gameObject, false);

        CameraController.Instance.MoveCamera(ZoomStep5.CameraPos, ZoomStep5.CameraFOV);

        ToolStep5.transform.DOKill();
        ToolStep5.transform.DOLocalMoveX(10, 1f).SetDelay(.25f).SetEase(Ease.InBack);

        Invoke(nameof(StartStep6), 1.2f);

        try
        {
            Statics.GA_CustomStringEvent(levelName + "_Step5_Comp");
        }
        catch { }
    }

    void ForceCompleteStep5()
    {
        ForceCompleteStep4();

        for (int i = 0; i < Layers_5.Length; i++)
        {
            Layers_5[i].gameObject.SetActive(true);

            Layers_5[i].material = GameManager.instance.DefaultMat;
        }
    }

    #endregion

    #region STEP 6

    bool isStep6Done;

    void StartStep6()
    {
        AdvanceProgressIcon();

        CameraController.Instance.MoveCamera(ZoomStep6.CameraPos, ZoomStep6.CameraFOV);

        ToolStep6.transform.DOKill();
        ToolStep6.transform.DOLocalMoveX(0f, .5f).SetDelay(1f).OnComplete(() =>
        {
            ToolInputToggle(ToolStep6.gameObject, true);

            ToolStep6CameraFollow.enabled = true;
        });
    }

    public void Step6Done()
    {
        if (isStep6Done)
            return;

        isStep6Done = true;

        ToolStep6CameraFollow.enabled = false;

        ToolInputToggle(ToolStep6.gameObject, false);

        CameraController.Instance.MoveCamera(ZoomStep6.CameraPos, ZoomStep6.CameraFOV);

        ToolStep6.transform.DOKill();
        ToolStep6.transform.DOLocalMoveX(-10f, 1f).SetDelay(.25f).OnComplete(() =>
        {
            ToolStep6.gameObject.SetActive(false);
        });

        Invoke(nameof(StartStep7), 1f);

        try
        {
            Statics.GA_CustomStringEvent(levelName + "_Step6_Comp");
        }
        catch { }
    }

    void ForceCompleteStep6()
    {
        ForceCompleteStep5();

        for (int i = 0; i < Layers_6.Length; i++)
        {
            Layers_6[i].material = GameManager.instance.DefaultMat;

            Layers_6[i].gameObject.SetActive(false);
        }
    }

    #endregion

    #region STEP 7

    bool isStep7Done;

    void StartStep7()
    {
        AdvanceProgressIcon();

        CameraController.Instance.MoveCamera(ZoomStep7.CameraPos, ZoomStep7.CameraFOV);

        ToolStep7.transform.DOKill();
        ToolStep7.transform.DOLocalMoveX(0f, .5f).SetDelay(1f).OnComplete(() =>
        {
            ToolInputToggle(ToolStep7.gameObject, true);

            ToolStep7CameraFollow.enabled = true;
        });

        for (int i = 0; i < Bones_7.Length; i++)
        {
            Bones_7[i].Tip = Tip_7.transform;
        }
    }

    public void Step7Done()
    {
        if (isStep7Done)
            return;

        isStep7Done = true;

        ToolStep7CameraFollow.enabled = false;

        ToolInputToggle(ToolStep7.gameObject, false);

        CameraController.Instance.MoveCamera(MainZoom.CameraPos, MainZoom.CameraFOV);

        ToolStep7.transform.DOKill();
        ToolStep7.transform.DOLocalMoveX(-10f, 1f).SetDelay(.25f).OnComplete(() =>
        {
            ToolStep7.gameObject.SetActive(false);
        });

        Invoke(nameof(LevelComplete), 2f);

        try
        {
            Statics.GA_CustomStringEvent(levelName + "_Step7_Comp");
        }
        catch { }
    }

    #endregion
}