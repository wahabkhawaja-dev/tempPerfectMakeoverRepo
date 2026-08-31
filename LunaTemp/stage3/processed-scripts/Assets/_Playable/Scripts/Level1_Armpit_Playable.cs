using UnityEngine;
using DG.Tweening;
using System.Collections;

public class Level1_Armpit_Playable : LevelData
{
    [Space()]
    [Header("----------------------------------------------------------------------------------")]
    [Space()]
    public ZoomPos MainZoom;

    [Space()]
    [Space()]
    public GameObject view1;
    public GameObject view2;

    [Space()]
    public GameObject hairArmpit;

    [Header("----------------- STEP 1 ----------------------")]
    [Space()]
    public ZoomPos ZoomStep1;

    [Space()]
    public BasicDrag ToolStep1;

    [Space()]
    public BD_CameraFollow ToolStep1CameraFollow;

    [Header("SFX")]
    public AudioClip eraserSfx;

    [Header("----------------- STEP 2 ----------------------")]
    [Space()]
    public ZoomPos ZoomStep2;

    [Space()]
    public Transform ToolStep2Parent;

    [Space()]
    public Transform BeansParent;

    [Header("----------------- STEP 3 ----------------------")]
    [Space()]
    public ZoomPos ZoomStep3;

    [Space()]
    public GameObject JarHandIndication;
    public Transform GreenBtnCol_Damaged;
    public Transform GreenBtnCol_Fixed;
    [Space()]
    public ActionOnTap HandTap1_3;
    [Space()]
    public GameObject GreenBtn;
    public GameObject GreenBtnIndication;
    public GameObject machineDamage;
    public GameObject machineBlackImg;
    public ParticleSystem blackSmokeVfx;
    public AudioClip fixItErrorSfx;

    [Space()]
    public SpriteRenderer boilingWax;

    [Space()]
    public GameObject boilingParticle;

    [Space()]
    public SpriteRenderer[] AllBeans;

    [Header("SFX")]
    public AudioClip machineBtnSfx;
    public AudioSource boilingSfx;

    [Header("----------------- Machine FIX GATE ----------------------")]
    [Space()]
    public GameObject fixItPrompt;
    public GameObject fixItPromptHand;

    IEnumerator Start()
    {

        base.LevelStart();

        UI_Manager.instance.InitializeTools(ToolIcons);

        yield return new WaitForSeconds(0.1f);

        machineDamage.SetActive(!IsMachineFixed());

        

        // PLAYABLE: back from the inner Fix-It level — boot straight into that step.
        if (PlayableInnerLevel.Resuming)
        {
            PlayableInnerLevel.Resuming = false;
            PlayableFadeCover.Cover();
            ForceCompleteStep2();
            StartStep3();
            PlayableFadeCover.Reveal();
            yield break;
        }

        // PLAYABLE: no save resume — same ForceComplete + StartStep as original switch.
        StartStep1();
        yield break;
}

    #region STEP 1

    bool isStep1Done = false;

    void StartStep1()
    {
        CameraController.Instance.MoveCamera(ZoomStep1.CameraPos, ZoomStep1.CameraFOV);

        ToolStep1.transform.DOKill();
        ToolStep1.transform.DOLocalMoveX(-1.35f, .5f).SetDelay(1f).OnComplete(() =>
        {
            ToolInputToggle(ToolStep1.gameObject, true);
            ToolStep1CameraFollow.enabled = true;
        });
    }

    float m_LastEraserTime;
    float m_EraserCallDelay = 0.45f;

    public void PlayEraserSfx()
    {
        if (m_LastEraserTime + m_EraserCallDelay > Time.unscaledTime)
            return;

        m_LastEraserTime = Time.unscaledTime;

        if (AudioController.instance)
            AudioController.instance.PlayAnySfx(0, eraserSfx, 0);

        // if (VibrationManager.instance)
            // VibrationManager.instance.MediumImpact();
    }

    public void Step1Complete()
    {
        if (isStep1Done)
            return;

        isStep1Done = true;

        ToolInputToggle(ToolStep1.gameObject, false);

        ToolStep1.transform.DOLocalMoveX(-15f, .5f).OnComplete(() =>
        {
            ToolStep1.gameObject.SetActive(false);
            ToolStep1CameraFollow.enabled = false;
        });

        DOVirtual.DelayedCall(1f, () =>
        {
            UI_Manager.instance.FadeAnim(1, 1);

            Invoke(nameof(StartStep2), 1f);
        });

        SetProgressBar();

        try
        {
            Statics.GA_CustomStringEvent("Lvl" + GameManager.instance.currentLevelNo
                + "_" + levelName + "_Step1_Comp");
        }
        catch { }
    }

    void ForceCompleteStep1()
    {
        hairArmpit.SetActive(false);
    }

    #endregion

    #region STEP 2

    bool isStep2Done = false;

    void StartStep2()
    {
        view1.SetActive(false);
        view2.SetActive(true);

        ToolStep2Parent.gameObject.SetActive(true);

        CameraController.Instance.MoveCamera(ZoomStep2.CameraPos, ZoomStep2.CameraFOV);

        ToolStep2Parent.transform.DOKill();
        ToolStep2Parent.transform.DOLocalMoveX(0f, 1f).SetDelay(.5f).OnComplete(() =>
        {
            BeansParent.parent = null;

            JarHandIndication.SetActive(true);
        });
    }

    public void Step2Complete()
    {
        if (isStep2Done)
            return;

        isStep2Done = true;

        ToolStep2Parent.transform.DOLocalMoveX(-15f, 1f).SetDelay(.5f).OnComplete(() =>
        {
            ToolStep2Parent.gameObject.SetActive(false);
        });

        Invoke(nameof(StartStep3), 1f);

        SetProgressBar();

        try
        {
            Statics.GA_CustomStringEvent("Lvl" + GameManager.instance.currentLevelNo
                + "_" + levelName + "_Step2_Comp");
        }
        catch { }
    }

    void ForceCompleteStep2()
    {
        view1.SetActive(false);
        view2.SetActive(true);

        BeansParent.parent = null;
        BeansParent.gameObject.SetActive(false);

        DOVirtual.DelayedCall(0.5f, () =>
        {
            BeansParent.gameObject.SetActive(true);
            BeansParent.transform.position = Vector3.zero;
            BeansParent.transform.DOLocalMoveY(0.5f, 0.01f);
        });

        hairArmpit.SetActive(false);
    }

    #endregion

    #region STEP 3

    bool isStep3Done = false;

    void StartStep3()
    {
        CameraController.Instance.MoveCamera(ZoomStep3.CameraPos, ZoomStep3.CameraFOV);

        if (IsMachineFixed())
        {
            GreenBtnCol_Fixed.gameObject.SetActive(true);
            GreenBtnCol_Damaged.gameObject.SetActive(false);
        }

        else
        {
            GreenBtnCol_Fixed.gameObject.SetActive(false);
            GreenBtnCol_Damaged.gameObject.SetActive(true);
        }

        GreenBtnIndication.SetActive(true);
    }

    bool IsMachineFixed()
    {
        bool remoteStatus = true;
        bool isCompleted = SaveSystem.Instance.DataFields.AllLevels[0].subLevels[5].isCompleted;

        if (!remoteStatus)
        {
            SaveSystem.Instance.DataFields.AllLevels[0].subLevels[5].isCompleted = true;

            return true;
        }

        return isCompleted;
    }

    public void GreenBtnPressedDmg()
    {

        HandTap1_3.OnTapExtra += () =>
        {
            blackSmokeVfx.Play();

            AudioController.instance.PlayAnySfx(0, fixItErrorSfx, 0);

            machineDamage.transform.parent.DOKill();

            // Little shake for 2D object
            machineDamage.transform.parent.DOShakePosition(
                duration: 0.35f,
                strength: new Vector3(0.025f, 0.025f, 0f),  // only X/Y
                vibrato: 8,
                randomness: 70,
                snapping: false,
                fadeOut: true
            );
        };

        GreenBtnIndication.SetActive(false);
        fixItPrompt.SetActive(true);
        fixItPromptHand.SetActive(true);

        blackSmokeVfx.Play();

        AudioController.instance.PlayAnySfx(0, fixItErrorSfx, 0);

        machineDamage.transform.parent.DOKill();

        // Little shake for 2D object
        machineDamage.transform.parent.DOShakePosition(
               duration: 0.35f,
               strength: new Vector3(0.025f, 0.025f, 0f),  // only X/Y
               vibrato: 8,
               randomness: 70,
               snapping: false,
               fadeOut: true
           );
    }

    public void OnFixitPressed()
    {
        fixItPromptHand.SetActive(false);

        PlayableInnerLevel.Enter();

        fixItPrompt.GetComponent<DOTweenAnimation>().DOPlayBackwards();
        DOVirtual.DelayedCall(0.51f, () =>
        {
            fixItPrompt.SetActive(false);
        });

        AudioController.instance.PlayUiClickSfx();
    }

    public void GreenBtnPressed()
    {
        // if (VibrationManager.instance)
            // VibrationManager.instance.MediumImpact();

        if (AudioController.instance)
            AudioController.instance.PlayAnySfx(0, machineBtnSfx, 0);

        GreenBtn.SetActive(true);

        SpriteRenderer sp = machineBlackImg.GetComponent<SpriteRenderer>();

        sp.DOKill();
        sp.DOFade(0, 1f);

        GreenBtnIndication.SetActive(false);

        boilingWax.DOKill();

        boilingWax.DOFade(1, 2f).OnComplete(() =>
        {
            boilingParticle.SetActive(true);
        });

        for (int i = 0; i < AllBeans.Length; i++)
        {
            AllBeans[i].DOKill();
            AllBeans[i].DOFade(0, 3f).SetDelay(1f);
        }

        UI_Manager.instance.ShowClockProgress(3);
        StartCoroutine(timerRoutine());

        if (boilingSfx != null)
            boilingSfx.Play();

        boilingWax.transform.DOLocalMoveY(0f, 3f).OnComplete(() =>
        {
            Step3Complete();

        });
    }

    WaitForSeconds wait1sec = new WaitForSeconds(1);

    IEnumerator timerRoutine()
    {
        UI_Manager.instance.SetProgressBar(0.333f);

        yield return wait1sec;

        UI_Manager.instance.SetProgressBar(0.666f);
    }

    public void Step3Complete()
    {
        if (isStep3Done)
            return;

        isStep3Done = true;

        Invoke(nameof(LevelComplete), 1f);

        SetProgressBar();

        try
        {
            Statics.GA_CustomStringEvent("Lvl" + GameManager.instance.currentLevelNo
                + "_" + levelName + "_Step3_Comp");
        }
        catch { }
    }

    void ForceCompleteStep3()
    {
        view1.SetActive(false);
        view2.SetActive(true);

        GreenBtn.SetActive(true);

        boilingWax.DOFade(1, 0.1f);
        boilingParticle.SetActive(true);

        if (boilingSfx != null)
            boilingSfx.Play();

        hairArmpit.SetActive(false);

        boilingWax.transform.DOLocalMoveY(0f, 0.01f);

        machineBlackImg.SetActive(false);
    }

    #endregion

    
}