using UnityEngine;
using DG.Tweening;
using System.Collections;

public class Level1_Shower_Playable : LevelData
{
    [Space()]
    [Header("----------------------------------------------------------------------------------")]
    [Space()]
    public ZoomPos MainZoom;

    [Space()]
    public GameObject view1;
    public GameObject view2;

    [Space()]
    [Header("----------------- STEP 1 ----------------------")]
    [Space()]
    public ZoomPos ZoomStep1;

    [Space()]
    public BasicDrag ToolStep1;
    [Space()]
    public BD_CameraFollow ToolStep1CameraFollow;

    [Space()]
    [Header("Jar Drop")]
    public SpriteRenderer jarRenderer;
    public Transform insideJarPosition;
    public float jarJumpHeight = 0.5f;
    public float jarJumpDuration = 0.2f;
    public float jarDropDuration = 0.3f;

    [Space()]
    public AudioClip ShowerDropClip;

    [Space()]
    [Header("----------------- STEP 2 ----------------------")]
    [Space()]
    public ZoomPos ZoomStep2;

    [Space()]
    public BasicDrag ToolStep2;
    public Animator ToolStep2_CapAnim;
    [Space()]
    public SpriteRenderer[] cleanAcid;
    public SpriteRenderer[] dirtyAcid;
    public ParticleSystem boilingParticles;

    public SpriteRenderer showerBeforeAcid;
    public SpriteRenderer showerAfterAcid;

    [Space()]
    public AudioClip CapOpenClip;
    public AudioClip ShowerOutClip;
    public AudioSource BoilingSource;

    [Header("----------------- STEP 3 ----------------------")]
    [Space()]
    [Header("STEP 3")]
    [Space()]
    public ZoomPos ZoomStep3;

    [Space()]
    public BasicDrag ToolStep3;

    [Space()]
    public BD_CameraFollow camFollowStep3;
    public GameObject wrinkleLayer;

    [Header("----------------- STEP 4 ----------------------")]
    [Space()]
    [Header("STEP 3")]
    [Space()]
    public ZoomPos ZoomStep4;

    [Space()]
    public BasicDrag ToolStep4;

    [Space()]
    public BD_CameraFollow camFollowStep4;

    [Space()]
    public ParticleSystem starsParticles;

    // Start is called before the first frame update
    IEnumerator Start()
    {

        base.LevelStart();

        CameraController.Instance.SetCameraInstant(ZoomStep1.CameraPos, ZoomStep1.CameraFOV);

        UI_Manager.instance.InitializeTools(ToolIcons);

        yield return new WaitForSeconds(0.1f);

        

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
        ToolStep1.transform.DOLocalMoveX(0f, 1f).OnComplete(() =>
        {
            ToolInputToggle(ToolStep1.gameObject, true);

            ToolStep1CameraFollow.enabled = true;
        });
    }

    public void MoveInsideJar()
    {

        ToolStep1CameraFollow.enabled = false;
        // Stop input first so BasicDrag can't fight the placement animation
        ToolInputToggle(ToolStep1.gameObject, false);

        SpriteRenderer toolRenderer = ToolStep1.GetComponentInChildren<SpriteRenderer>();

        Transform toolTransform = ToolStep1.transform;
        toolTransform.DOKill();

        Vector3 jumpPos = toolTransform.position + Vector3.up * jarJumpHeight;

        Sequence dropSeq = DOTween.Sequence();
        dropSeq.Append(toolTransform.DOMove(jumpPos, jarJumpDuration).SetEase(Ease.OutQuad));
        dropSeq.AppendCallback(() =>
        {
            // Send it behind the jar glass right as it starts going down into it
            if (toolRenderer != null)
                toolRenderer.sortingOrder = 1;
        });

        dropSeq.Append(toolTransform.DOMove(insideJarPosition.position, jarDropDuration).SetEase(Ease.InQuad));
        dropSeq.OnComplete(() =>
        {
            Step1Done();
        });

        AudioController.instance.PlayAnySfx(3, ShowerDropClip, 0f);
    }

    public void Step1Done()
    {
        if (isStep1Done)
            return;

        isStep1Done = true;

        ToolInputToggle(ToolStep1.gameObject, false);

        CameraController.Instance.MoveCamera(ZoomStep1.CameraPos, ZoomStep1.CameraFOV);

        SetProgressBar();

        try
        {
            Statics.GA_CustomStringEvent("Lvl" + GameManager.instance.currentLevelNo
                + "_" + levelName + "_Step1_Comp");
        }
        catch { }

        DOVirtual.DelayedCall(0.5f, () =>
        {
            StartStep2();
        });
    }

    void ForceCompleteStep1()
    {
        if (isStep1Done)
            return;

        view1.SetActive(true);

        isStep1Done = true;

        ToolStep1.transform.position = insideJarPosition.position;

        SpriteRenderer toolRenderer = ToolStep1.GetComponentInChildren<SpriteRenderer>();
        if (toolRenderer != null)
            toolRenderer.sortingOrder = 1;

        ToolInputToggle(ToolStep1.gameObject, false);
    }

    #endregion

    #region STEP 2

    bool isStep2Done = false;

    void StartStep2()
    {
        CameraController.Instance.MoveCamera(ZoomStep2.CameraPos, ZoomStep2.CameraFOV);

        ToolStep2.transform.DOKill();
        ToolStep2.transform.DOLocalMoveX(1.18f, 1f).OnComplete(() =>
        {
            AudioController.instance.PlayAnySfx(1, CapOpenClip, 0.05f);

            ToolStep2_CapAnim.enabled = true;

            DOVirtual.DelayedCall(0.65f, () =>
            {
                ToolInputToggle(ToolStep2.gameObject, true);

            });
        });
    }

    public void Step2Done()
    {
        if (isStep2Done)
            return;

        isStep2Done = true;

        ToolInputToggle(ToolStep2.gameObject, false);

        ToolStep2.transform.DOKill();
        ToolStep2.transform.DOMoveX(10f, 1f).SetDelay(.5f).OnComplete(() =>
        {
            ToolStep2.gameObject.SetActive(false);
        });

        ToolStep2.transform.DORotate(Vector3.zero, 0.5f).SetDelay(.25f);

        CameraController.Instance.MoveCamera(ZoomStep2.CameraPos, ZoomStep2.CameraFOV);

        Invoke(nameof(StartBoiling), 1f);

        try
        {
            Statics.GA_CustomStringEvent("Lvl" + GameManager.instance.currentLevelNo
                + "_" + levelName + "_Step2_Comp");
        }
        catch { }
    }

    void ForceCompleteStep2()
    {
        if (isStep2Done)
            return;

        isStep2Done = true;
        ToolStep2.gameObject.SetActive(false);

        foreach (SpriteRenderer sp in cleanAcid)
        {
            Color c = sp.color;
            c.a = 0f;
            sp.color = c;
        }

        foreach (SpriteRenderer sp in dirtyAcid)
        {
            Color c = sp.color;
            c.a = 0.6f;
            sp.color = c;
        }

        showerBeforeAcid.gameObject.SetActive(false);

        showerAfterAcid.gameObject.SetActive(true);
        Color afterColor = showerAfterAcid.color;
        afterColor.a = 1f;
        showerAfterAcid.color = afterColor;

        Vector3 afterPos = showerAfterAcid.transform.localPosition;
        afterPos.y = 1.8f;
        showerAfterAcid.transform.localPosition = afterPos;

        view1.SetActive(false);
        view2.SetActive(true);
    }

    void StartBoiling()
    {
        UI_Manager.instance.ShowClockProgress(3.5f);

        foreach (SpriteRenderer sp in cleanAcid)
        {
            sp.DOKill();
            sp.DOFade(0, 5f);
        }
        foreach (SpriteRenderer sp in dirtyAcid)
        {
            sp.DOKill();
            sp.DOFade(0.6f, 3f).OnComplete(() =>
            {
                showerAfterAcid.gameObject.SetActive(true);
                showerAfterAcid.DOKill();
                showerAfterAcid.DOFade(0, 0.0001f);
                showerAfterAcid.DOFade(1, 1f).SetDelay(0.1f);

                showerBeforeAcid.DOKill();
                showerBeforeAcid.DOFade(0, 1f).SetDelay(0.1f).OnComplete(() =>
                {
                    showerBeforeAcid.gameObject.SetActive(false);

                    AudioController.instance.PlayAnySfx(2, ShowerOutClip, 0.25f);

                    showerAfterAcid.transform.DOKill();
                    showerAfterAcid.transform.DOLocalMoveY(1.8f, 1f).SetDelay(0.25f).OnComplete(() =>
                    {
                        SetProgressBar();

                        DOVirtual.DelayedCall(1f, () =>
                        {
                            BoilingSource.DOKill();
                            BoilingSource.DOFade(0f, 1f).SetDelay(.3f);

                            UI_Manager.instance.FadeAnim(0.5f, 0.7f);

                            DOVirtual.DelayedCall(1f, () =>
                            {
                                view1.SetActive(false);
                                view2.SetActive(true);

                                Invoke(nameof(StartStep3), 0.55f);
                            });
                        });

                    });

                });

            });
        }

        boilingParticles.Play();

        BoilingSource.gameObject.SetActive(true);
    }

    #endregion

    #region Step 3 

    bool step3Complete;

    void StartStep3()
    {
        ToolStep3.transform.DOKill();
        ToolStep3.transform.DOLocalMoveX(0f, .5f).SetDelay(.5f).OnComplete(() =>
        {
            ToolInputToggle(ToolStep3.gameObject, true);

            camFollowStep3.enabled = true;

            CameraController.Instance.MoveCamera(ZoomStep3.CameraPos, ZoomStep3.CameraFOV);
        });

    }

    public void Step3Done()
    {
        if (step3Complete)
            return;

        step3Complete = true;

        camFollowStep3.enabled = false;

        ToolInputToggle(ToolStep3.gameObject, false);

        ToolStep3.transform.DOKill();
        ToolStep3.transform.DOLocalMoveX(-15f, .5f).OnComplete(() =>
        {
            ToolStep3.gameObject.SetActive(false);
        });

        Invoke(nameof(StartStep4), 0.5f);

        SetProgressBar();

        CameraController.Instance.ResetCameraTween();

        try
        {
            Statics.GA_CustomStringEvent("Lvl" + GameManager.instance.currentLevelNo
                + "_" + levelName + "_Step3_Comp");
        }
        catch { }
    }

    void ForceCompleteStep3()
    {
        if (step3Complete)
            return;

        step3Complete = true;

        camFollowStep3.enabled = false;

        ToolStep3.gameObject.SetActive(false);

        wrinkleLayer.SetActive(false);
    }

    #endregion

    #region Step 4 

    bool step4Complete;

    void StartStep4()
    {
        ToolStep4.transform.DOKill();
        ToolStep4.transform.DOLocalMoveX(0f, .5f).SetDelay(.5f).OnComplete(() =>
        {
            ToolInputToggle(ToolStep4.gameObject, true);

            camFollowStep4.enabled = true;

            CameraController.Instance.MoveCamera(ZoomStep4.CameraPos, ZoomStep3.CameraFOV);
        });
    }

    public void Step4Done()
    {
        if (step4Complete)
            return;

        step4Complete = true;

        camFollowStep4.enabled = false;

        ToolInputToggle(ToolStep4.gameObject, false);

        ToolStep4.transform.DOKill();
        ToolStep4.transform.DOLocalMoveX(-15f, .5f).OnComplete(() =>
        {
            ToolStep4.gameObject.SetActive(false);
        });

        starsParticles.Play();

        SaveSystem.Instance.DataFields.AllLevels[levelNo].subLevels[partNo].isCompleted = true;

        CameraController.Instance.ResetCameraTween();

        UI_Manager.instance.SetProgressBar(1f);

        Invoke(nameof(LoadHairLevelAgian), 1f);

        try
        {
            Statics.GA_CustomStringEvent("Lvl" + GameManager.instance.currentLevelNo
                + "_" + levelName + "_Step4_Comp");
        }
        catch { }

        GameManager.instance.RecordLevelCompleteEvent();
    }

    void LoadHairLevelAgian()
    {

        UI_Manager.instance.TopBarAnim.DOPlayBackwards();

        PlayableInnerLevel.Return();
    }

    #endregion
}
