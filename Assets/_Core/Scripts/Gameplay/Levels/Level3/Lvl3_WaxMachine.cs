using DG.Tweening;
using System.Collections;
using System.Collections.Generic;
using UnityEditor;
using UnityEngine;

public class Lvl3_WaxMachine : LevelData
{


    [Space()]
    [Header("----------------------------------------------------------------------------------")]
    [Space()]
    public ZoomPos MainZoom;

    [Space()]
    public GameObject View1;
    public GameObject View2;
    public GameObject View3;


    [Header("----------------- STEP 1 ----------------------")]
    [Space()]
    public ZoomPos ZoomStep1;

    [Space()]
    public BasicDrag ToolStep1;
    public List<OutlinePulse> OutlinePulseStep1;


    [Header("----------------- STEP 2 ----------------------")]
    [Space()]
    public ZoomPos ZoomStep2;

    [Space()]
    public BasicDrag ToolStep2;


    public ParticleSystem dustParticles;
    [Space()]
    public OutlinePulse outCoverPluse;
    [Space()]
    public GameObject screwsParent;

    [Space()]
    public AudioClip WhooshSfx;
    public AudioClip CoverRotateSfx;


    [Header("----------------- STEP 3 ----------------------")]
    [Space()]
    public ZoomPos ZoomStep3;

    [Space()]
    public BasicDrag ToolStep3;
    public BD_CameraFollow step3CameraFollow;



    [Header("----------------- STEP 3A ----------------------")]
    [Space()]
    public ZoomPos ZoomStep3A;

    [Space()]
    public ActionOnTap ToolStep3A;
    public GameObject particles3A;
    public GameObject indicationStep3A;

    public OutlinePulse outlineStep3A;


    [Header("----------------- STEP 4 ----------------------")]
    [Space()]
    public ZoomPos ZoomStep4;
    public GameObject indication;
    [Space()]
    public BasicDrag ToolStep4;

    [Space()]
    public OutlinePulse OutlinePulseStep4;
    public ParticleSystem step4Particle;
    public AudioClip solideringSound;
    public ParticleSystem smokeParticle;
    public GameObject waxSoap;
    public GameObject rode;
    public BD_CameraFollow step4CameraFollow;




    [Header("----------------- STEP 5 ----------------------")]
    [Space()]
    public ZoomPos ZoomStep5;
    [Space()]
    public GameObject detectStep5;

    [Space()]
    public BasicDrag ToolStep5;
    public GameObject Tool5Container;
    public GameObject Indication_5;

    public GameObject TopCoverStep5;

    [Header("----------------- STEP 6 ----------------------")]
    [Space()]
    public ZoomPos ZoomStep6;

    public GameObject screwContainer;
    [Space()]
    public BasicDrag ToolStep6;


    [Header("----------------- STEP 7 ----------------------")]
    [Space()]
    public ZoomPos ZoomStep7;

    public SpriteRenderer blackObject;

    [Space()]
    public BasicDrag ToolStep7;

    public GameObject downViewWax;
    public AudioClip onsound;
    public GameObject[] upSideViewWax;
    public BD_CameraFollow step7CameraFollow;


    IEnumerator Start()
    {
        base.LevelStart();

        UI_Manager.instance.InitializeTools(ToolIcons);

        CameraController.Instance.MoveCamera(MainZoom.CameraPos, MainZoom.CameraFOV, .05f);

        levelNo = SaveSystem.Instance.DataFields.levelToPlay - 1;
        partNo = SaveSystem.Instance.DataFields.partToPlay - 1;

        stepsDone = SaveSystem.Instance.DataFields.AllLevels[levelNo].subLevels[partNo].stepsDone;

        // resuming mid-level: the icon is positioned by SetProgressIconIndex below,
        // so the first StartStepN must skip its own advance
        skipIconAdvance = stepsDone > 0;

        yield return new WaitForSeconds(0.5f);

        switch (stepsDone)
        {
            // STARTING STEP 1
            case 0:
                StartStep1();
                break;

            case 1:
                UI_Manager.instance.SetProgressIconIndex(stepsDone);

                ForceCompleteStep1();

                StartStep2();
                break;

            case 2:
                UI_Manager.instance.SetProgressIconIndex(stepsDone);

                ForceCompleteStep2();

                StartStep3();
                break;

            case 3:
                UI_Manager.instance.SetProgressIconIndex(stepsDone);

                ForceCompleteStep3();

                StartStep4();
                break;

            case 4:
                UI_Manager.instance.SetProgressIconIndex(stepsDone);

                ForceCompleteStep4();

                StartStep5();
                break;

            case 5:
                UI_Manager.instance.SetProgressIconIndex(stepsDone);

                ForceCompleteStep5();

                StartStep6();
                break;

            case 6:
                UI_Manager.instance.SetProgressIconIndex(stepsDone);

                ForceCompleteStep6();

                StartStep7();
                break;
        }

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


    #region STEP 1

    bool isStep1Done;

    void StartStep1()
    {
        CameraController.Instance.MoveCamera(ZoomStep1.CameraPos, ZoomStep1.CameraFOV);
       
        for (int i = 0; i < OutlinePulseStep1.Count; i++)
        {
            OutlinePulseStep1[i].EnableAnim();
        }

        ToolStep1.transform.DOKill();
        ToolStep1.transform.DOLocalMoveX(0.563f, .5f).SetDelay(1f).OnComplete(() =>
        {
            ToolInputToggle(ToolStep1.gameObject, true);
        });
    }

    int screw_removed = 0;
    int totalScrews = 1;
    public void ScrewRemoved()
    {
        if (isStep1Done)
            return;

        if (screw_removed >= totalScrews - 1)
        {
            Step1Done();
            UI_Manager.instance.SetProgressBar(1);
            CameraController.Instance.MoveCamera(ZoomStep2.CameraPos, ZoomStep2.CameraFOV);
            ToolStep2.transform.DORotate(new Vector3(0, 0, -5.5f), 0.25f).SetEase(Ease.OutBack);
            ToolStep2.transform.DOLocalMoveX(1.08f, 0.25f).SetEase(Ease.OutBack);
            //  dustParticles.Play();

            AudioController.instance.PlayAnySfx(3, CoverRotateSfx, 0f);

            return;
        }

        screw_removed++;

        UI_Manager.instance.SetProgressBar((float)screw_removed / (float)totalScrews);

        ToolStep1.gameObject.SetActive(true);

        DOVirtual.DelayedCall(0.1f, () =>
        {
            if (!isStep1Done)
            {
                ToolStep1.enabled = true;
                ToolStep1.thisCollider.enabled = true;
                ToolStep1.canDrag = true;
            }
        });
    }

    public void Step1Done()
    {
        if (isStep1Done)
            return;

        isStep1Done = true;
        ToolStep1.canDrag = false;
        ToolStep1.isDragging = false;
        ToolStep1.enabled = false;
        if (ToolStep1.thisCollider != null)
            ToolStep1.thisCollider.enabled = false;
        ToolInputToggle(ToolStep1.gameObject, false);

        CameraController.Instance.MoveCamera(ZoomStep1.CameraPos, ZoomStep1.CameraFOV);

        ToolStep1.transform.DOKill();
        ToolStep1.transform.DOLocalMoveX(-10f, 1f).OnComplete(() =>
        {
            ToolStep1.gameObject.SetActive(false);
        });

        Invoke(nameof(StartStep2), 1f);

        stepsDone = 1;

        SaveSystem.Instance.DataFields.AllLevels[levelNo].subLevels[partNo].stepsDone = 1;

        try
        {
            Statics.GA_CustomStringEvent(levelName + "_Step1_Comp");
        }
        catch { }
    }

    void ForceCompleteStep1()
    {
        isStep1Done = true;

        for (int i = 0; i < OutlinePulseStep1.Count; i++)
        {
            OutlinePulseStep1[i].DisableAnim();
        }

        ToolStep1.gameObject.SetActive(false);
        screwsParent.SetActive(false);
    }

    #endregion
    #region Step2

    bool isStep2Done = false;

    void StartStep2()
    {
        CameraController.Instance.MoveCamera(ZoomStep2.CameraPos, ZoomStep2.CameraFOV);

        AdvanceProgressIcon();

        outCoverPluse.EnableAnim();

        ToolStep2.OnMouseDownEvent += PlayDustParticles;
        ToolStep2.OnMouseUpEvent += Step2Done;

        ToolStep2.enabled = true;
        ToolStep2.canDrag = true;
        //ToolStep2.thisCollider.enabled = true;
    }

    bool dustPar_played;

    public void PlayDustParticles()
    {
        if (dustPar_played)
            return;

        dustPar_played = true;

        dustParticles.Play();

        ToolStep2.OnMouseDownEvent -= PlayDustParticles;
    }

    public void Step2Done()
    {
        if (isStep2Done)
            return;

        ToolStep2.OnMouseUpEvent -= Step2Done;
        UI_Manager.instance.SetProgressBar(1);
        ToolStep2.isDragging = false;
        ToolStep2.canDrag = false;
        ToolStep2.thisCollider.enabled = false;
        ToolStep2.enabled = false;

        outCoverPluse.DisableAnim();

        isStep2Done = true;

        ToolStep2.transform.DOKill();
        ToolStep2.transform.DOMoveX(8, .5f).SetDelay(.1f).SetEase(Ease.InBack).OnComplete(() =>
        {
            ToolStep2.gameObject.SetActive(false);
        });


        CameraController.Instance.MoveCamera(ZoomStep2.CameraPos, ZoomStep2.CameraFOV);

        Invoke(nameof(StartStep3), 1.2f);

        AudioController.instance.PlayAnySfx(0, WhooshSfx, 0f);

        stepsDone = 2;

        SaveSystem.Instance.DataFields.AllLevels[levelNo].subLevels[partNo].stepsDone = 2;

        try
        {
            Statics.GA_CustomStringEvent(levelName + "_Step2_Comp");
        }
        catch { }
    }

    void ForceCompleteStep2()
    {
        ForceCompleteStep1();

        isStep2Done = true;
        dustPar_played = true;

        outCoverPluse.DisableAnim();

        ToolStep2.gameObject.SetActive(false);
    }

    #endregion



    #region Step3

    bool isStep3Done = false;

    void StartStep3()
    {
        AdvanceProgressIcon();
        CameraController.Instance.MoveCamera(ZoomStep3.CameraPos, ZoomStep3.CameraFOV);

        ToolStep3.transform.DOKill();
        ToolStep3.transform.DOLocalMoveX(0, .5f).SetDelay(.5f).OnComplete(() =>
        {
            step3CameraFollow.enabled = true;
            ToolInputToggle(ToolStep3.gameObject, true);
        });
    }

    public void Step3Done()
    {
        if (isStep3Done)
            return;

        step3CameraFollow.enabled = false;

        ToolInputToggle(ToolStep3.gameObject, false);

        ToolStep3.transform.DOKill();
        ToolStep3.transform.DOLocalMoveX(10f, .5f).OnComplete(() =>
        {
            ToolStep3.gameObject.SetActive(false);
        });

        UI_Manager.instance.SetProgressBar(1);
        CameraController.Instance.MoveCamera(ZoomStep3.CameraPos, ZoomStep3.CameraFOV);
        Invoke(nameof(StartStep3A), 2f);

/*        DOVirtual.DelayedCall(1f, () =>
        {
            UI_Manager.instance.FadeAnim(1f, 1f);

            DOVirtual.DelayedCall(1.1f, () =>
            {
                CameraController.Instance.MoveCamera(ZoomStep4.CameraPos, ZoomStep4.CameraFOV, .1f);

                View1.SetActive(false);

                View2.SetActive(true);

               
            });
        });
*/
        AudioController.instance.PlayAnySfx(0, WhooshSfx, 0f);

        stepsDone = 3;

        SaveSystem.Instance.DataFields.AllLevels[levelNo].subLevels[partNo].stepsDone = 3;

        try
        {
            Statics.GA_CustomStringEvent(levelName + "_Step3_Comp");
        }
        catch { }
    }

    void ForceCompleteStep3()
    {
        ForceCompleteStep2();

        isStep3Done = true;

        step3CameraFollow.enabled = false;

        ToolStep3.gameObject.SetActive(false);

        View1.SetActive(false);

        View2.SetActive(true);
    }

    #endregion


    #region Step3A

    bool isStep3ADone = false;

    void StartStep3A()
    {
        CameraController.Instance.MoveCamera(ZoomStep3A.CameraPos, ZoomStep3A.CameraFOV);

        AdvanceProgressIcon();


        indicationStep3A.SetActive(true);
        outlineStep3A.EnableAnim();
        particles3A.SetActive(true);
        ToolStep3A.enabled = true;
        ToolStep3A.GetComponent<Collider2D>().enabled = true;
     //   ToolInputToggle(ToolStep3A.gameObject, true);

        //ToolStep2.thisCollider.enabled = true;
    }



    public void Step3ADone()
    {
        if (isStep3ADone)
            return;

        UI_Manager.instance.SetProgressBar(1);
            UI_Manager.instance.FadeAnim(1f, 1f);
            DOVirtual.DelayedCall(1.1f, () =>
            {
                CameraController.Instance.MoveCamera(ZoomStep4.CameraPos, ZoomStep4.CameraFOV, .1f);

                View1.SetActive(false);

                View2.SetActive(true);

                Invoke(nameof(StartStep4), 1.2f);
            });
 

  //      AudioController.instance.PlayAnySfx(0, WhooshSfx, 0f);

        stepsDone = 3;

        SaveSystem.Instance.DataFields.AllLevels[levelNo].subLevels[partNo].stepsDone = 3;

        try
        {
            Statics.GA_CustomStringEvent(levelName + "_Step3_Comp");
        }
        catch { }
    }

    void ForceCompleteStep3A()
    {
        ForceCompleteStep2();

        isStep3ADone = true;
     

     //   outCoverPluse.DisableAnim();

        ToolStep3A.gameObject.SetActive(false);
    }

    #endregion


    #region Step4

    bool isStep4Done = false;

    void StartStep4()
    {
        AdvanceProgressIcon();
        ToolStep4.transform.DOKill();
        CameraController.Instance.MoveCamera(ZoomStep4.CameraPos, ZoomStep4.CameraFOV, .1f);
        waxSoap.transform.DOLocalMoveX(-0.74f, .5f).SetDelay(.5f).OnComplete(() =>
        {
            ToolStep4.transform.DOLocalMoveX(0f, .5f).SetDelay(.5f).OnComplete(() =>
            {
                ToolStep4.transform.DOLocalRotate(new Vector3(0, 0, -10f), .2f).OnComplete(() =>
                {
                //    PointIndicationToWax();
                 //   indication.SetActive(true);
                    step4CameraFollow.enabled = true;
                    ToolInputToggle(ToolStep4.gameObject, true);

                    ToolStep4.OnMouseDownEvent += HideStep4Indication;
                });
            });

        });

    }


    void PointIndicationToWax()
    {
        if (indication == null || waxSoap == null || ToolStep4 == null)
            return;

        Vector3 from = ToolStep4.transform.position;
        Vector3 to = waxSoap.transform.position;
        Vector3 mid = (from + to) * 0.5f;
        mid.z = indication.transform.position.z;
        indication.transform.position = mid;

        Vector3 dir = to - from;
        float angle = Mathf.Atan2(dir.y, dir.x) * Mathf.Rad2Deg;
        indication.transform.rotation = Quaternion.Euler(0f, 0f, angle);
    }

    void HideStep4Indication()
    {
        if (indication != null)
            indication.SetActive(false);
    }

    public void OnWaxDipped()
    {
        if (isStep4Done || waxSoap == null)
            return;

     //   HideStep4Indication();

        if (step4Particle != null)
            step4Particle.Play();

        if (smokeParticle != null)
            smokeParticle.Play();

        if (solideringSound != null && AudioController.instance != null)
            AudioController.instance.PlayAnySfx(3, solideringSound, 0f);

        waxSoap.transform.DOKill();
        waxSoap.transform.DOPunchScale(new Vector3(0.03f, 0.03f, 0f), 0.4f, 8, 0.5f);

        DOVirtual.DelayedCall(1.6f, () =>
        {
            if (isStep4Done || waxSoap == null)
                return;

            if (step4Particle != null)
                step4Particle.Stop(true, ParticleSystemStopBehavior.StopEmitting);

            if (smokeParticle != null)
                smokeParticle.Stop(true, ParticleSystemStopBehavior.StopEmitting);

            waxSoap.transform.DOKill();
            waxSoap.transform.DOLocalMoveX(-10f, 0.85f).SetEase(Ease.InBack);
        });
    }

    public void Step4Done()
    {
        if (isStep4Done)
            return;
        DOVirtual.DelayedCall(.5f, () =>
        {

            CameraController.Instance.MoveCamera(ZoomStep4.CameraPos, ZoomStep4.CameraFOV, 1f);
        });
        UI_Manager.instance.SetProgressBar(1);
        rode.transform.DOLocalMoveX(-10, .5f).SetDelay(.5f);
        step4CameraFollow.enabled = false;
        ToolStep4.transform.DOKill();
        ToolStep4.transform.DOLocalMoveX(10f, .5f).OnComplete(() =>
        {
            ToolStep4.gameObject.SetActive(false);
        });


        DOVirtual.DelayedCall(2f, () =>
        {
            UI_Manager.instance.FadeAnim(1f, 1.5f);

            DOVirtual.DelayedCall(1.1f, () =>
            {
                CameraController.Instance.MoveCamera(ZoomStep4.CameraPos, ZoomStep4.CameraFOV, .1f);

                View2.SetActive(false);

                View3.SetActive(true);

                Invoke(nameof(StartStep5), 1.2f);
            });
        });


        stepsDone = 4;

        SaveSystem.Instance.DataFields.AllLevels[levelNo].subLevels[partNo].stepsDone = 4;

        try
        {
            Statics.GA_CustomStringEvent(levelName + "_Step4_Comp");
        }
        catch { }

    }

    void ForceCompleteStep4()
    {
        ForceCompleteStep3();

        isStep4Done = true;

        step4CameraFollow.enabled = false;

        ToolStep4.gameObject.SetActive(false);

        waxSoap.transform.DOKill();
        waxSoap.transform.localPosition = new Vector3(-10f, waxSoap.transform.localPosition.y, waxSoap.transform.localPosition.z);

        rode.transform.DOKill();
        rode.transform.localPosition = new Vector3(-10f, rode.transform.localPosition.y, rode.transform.localPosition.z);

        View2.SetActive(false);

        View3.SetActive(true);
    }

    #endregion


    #region STEP 5

    bool isStep5Done = false;

    void StartStep5()
    {
        AdvanceProgressIcon();
        detectStep5.SetActive(true);
        CameraController.Instance.MoveCamera(ZoomStep5.CameraPos, ZoomStep5.CameraFOV);

        ToolStep5.transform.DOKill();
        ToolStep5.transform.DOLocalMoveX(-0.03f, .5f).SetDelay(1f).OnComplete(() =>
        {
            Tool5Container.SetActive(true);

            ToolInputToggle(ToolStep5.gameObject, true);

            Indication_5.SetActive(true);

            ToolStep5.OnMouseDownEvent += () => Indication_5.SetActive(false);

            ToolStep5.OnMouseUpEvent += () =>
            {
                if (ToolStep5.dontResetItIsInCollider)
                    return;

                Indication_5.SetActive(true);
            };
        });
    }

    public void Step5Done()
    {
        if (isStep5Done)
            return;
        isStep5Done = true;
        CameraController.Instance.MoveCamera(MainZoom.CameraPos, MainZoom.CameraFOV);
        UI_Manager.instance.SetProgressBar(1f, .5f);
        detectStep5.SetActive(false);
        Invoke(nameof(StartStep6), 1f);

        stepsDone = 5;

        SaveSystem.Instance.DataFields.AllLevels[levelNo].subLevels[partNo].stepsDone = 5;

        try
        {
            Statics.GA_CustomStringEvent(levelName + "_Step5_Comp");
        }
        catch { }
    }

    void ForceCompleteStep5()
    {
        ForceCompleteStep4();

        isStep5Done = true;

        detectStep5.SetActive(false);

        TopCoverStep5.SetActive(true);
    }

    #endregion


    #region STEP 6

    bool isStep6Done;

    void StartStep6()
    {
        AdvanceProgressIcon();
        CameraController.Instance.MoveCamera(ZoomStep6.CameraPos, ZoomStep6.CameraFOV);
        screwContainer.SetActive(true);
        ToolStep6.transform.DOKill();
        DOVirtual.DelayedCall(.5f, () =>
        {
            ToolStep6.transform.DOLocalMoveX(0.563f, .5f).SetDelay(1f).OnComplete(() =>
            {
                ToolInputToggle(ToolStep6.gameObject, true);
            });
        });

    }

    int screw_removedStep6 = 0;
    int totalScrewsStep6 = 1;
    public void ScrewRemovedStep6()
    {
        if (isStep6Done)
            return;

        if (screw_removedStep6 >= totalScrewsStep6 - 1)
        {
            Step6Done();
            UI_Manager.instance.SetProgressBar(1);
            //  dustParticles.Play();

            //     AudioController.instance.PlayAnySfx(3, CoverRotateSfx, 0f);

            return;
        }

        screw_removedStep6++;

        UI_Manager.instance.SetProgressBar((float)screw_removedStep6 / (float)totalScrewsStep6);

        ToolStep6.gameObject.SetActive(true);

        DOVirtual.DelayedCall(0.1f, () =>
        {
            if (!isStep6Done)
            {
                ToolStep6.enabled = true;
                ToolStep6.thisCollider.enabled = true;
                ToolStep6.canDrag = true;
            }
        });
    }

    public void Step6Done()
    {
        if (isStep6Done)
            return;

        isStep6Done = true;
        ToolStep6.canDrag = false;
        ToolStep6.isDragging = false;
        ToolStep6.enabled = false;
        if (ToolStep6.thisCollider != null)
            ToolStep6.thisCollider.enabled = false;
        ToolInputToggle(ToolStep6.gameObject, false);

        CameraController.Instance.MoveCamera(ZoomStep6.CameraPos, ZoomStep6.CameraFOV);

        ToolStep6.transform.DOKill();
        ToolStep6.transform.DOLocalMoveX(-10f, 1f).OnComplete(() =>
        {
            ToolStep6.gameObject.SetActive(false);
        });


        DOVirtual.DelayedCall(1f, () =>
        {
            UI_Manager.instance.FadeAnim(1f, 1f);

            DOVirtual.DelayedCall(1.1f, () =>
            {
                CameraController.Instance.MoveCamera(ZoomStep6.CameraPos, ZoomStep6.CameraFOV, .1f);

                downViewWax.SetActive(false);
                for (int i = 0; i < upSideViewWax.Length; i++)
                    upSideViewWax[i].SetActive(true);

                Invoke(nameof(StartStep7), 1.2f);
            });
        });

        stepsDone = 6;

        SaveSystem.Instance.DataFields.AllLevels[levelNo].subLevels[partNo].stepsDone = 6;

        try
        {
            Statics.GA_CustomStringEvent(levelName + "_Step6_Comp");
        }
        catch { }
    }

    void ForceCompleteStep6()
    {
        ForceCompleteStep5();

        isStep6Done = true;

        ToolStep6.gameObject.SetActive(false);

        downViewWax.SetActive(false);

        for (int i = 0; i < upSideViewWax.Length; i++)
        {
            upSideViewWax[i].SetActive(true);
        }
    }

    #endregion


    #region STEP 7

    bool isStep7Done;

    void StartStep7()
    {
        AdvanceProgressIcon();
        CameraController.Instance.MoveCamera(ZoomStep7.CameraPos, ZoomStep7.CameraFOV);
        screwContainer.SetActive(true);
        ToolStep7.transform.DOKill();
        ToolStep7.transform.DOLocalMoveX(0f, .5f).SetDelay(1f).OnComplete(() =>
        {
            ToolInputToggle(ToolStep7.gameObject, true);
        });
    }



    public void Step7Done()
    {
        if (isStep7Done)
            return;
        isStep7Done = true;
        ToolStep7.canDrag = false;
        ToolStep7.isDragging = false;
        ToolStep7.enabled = false;
        if (ToolStep7.thisCollider != null)
            ToolStep7.thisCollider.enabled = false;
        ToolInputToggle(ToolStep7.gameObject, false);
        CameraController.Instance.MoveCamera(ZoomStep7.CameraPos, ZoomStep7.CameraFOV);

        ToolStep7.transform.DOKill();
        ToolStep7.transform.DOLocalMoveX(-10f, 1f).OnComplete(() =>
        {
            ToolStep7.gameObject.SetActive(false);
        });
        DOVirtual.DelayedCall(1f, () =>
        {
            AudioController.instance.PlayAnySfx(3, onsound, 0f);
            blackObject.DOFade(0f, 1f);
            blackObject.gameObject.SetActive(false);


            stepsDone = 0;

            SaveSystem.Instance.DataFields.AllLevels[levelNo].subLevels[partNo].isCompleted = true;
            SaveSystem.Instance.DataFields.AllLevels[levelNo].subLevels[partNo].stepsDone = 0;

            Invoke(nameof(LoadWaxLevelAgian), 1f);

            try
            {
                Statics.GA_CustomStringEvent(levelName + "_Step7_Comp");
            }
            catch { }

        });
    }
    void LoadWaxLevelAgian()
    {
        SaveSystem.Instance.DataFields.levelToPlay = 1;
        SaveSystem.Instance.DataFields.partToPlay = 4;

        LoadingManager.instance.ShowFadeAnim(0.5f, 1f);
        DOVirtual.DelayedCall(1f, () =>
        {
            UnityEngine.SceneManagement.SceneManager.LoadScene(
                UnityEngine.SceneManagement.SceneManager.GetActiveScene().buildIndex);
        });
    }
    #endregion
}
