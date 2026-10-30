using UnityEngine;
using DG.Tweening;
using System.Collections;

public class Level3_Crown_Playable : LevelData
{
    protected override bool RevealRestoreLayersAtStart { get { return false; } }

    void Awake()
    {
        FadeLayer(SpraySR_2.gameObject, 0, 0);
        FadeLayer(Mix, 0, 0);
        FadeLayer(MixE, 0, 0);
    }
    [Space()]
    [Header("----------------------------------------------------------------------------------")]
    [Space()]
    public ZoomPos MainZoom;

    [Space()]
    public GameObject View1;
    public GameObject View2;

    [Header("----------------- STEP 1 ----------------------")]
    [Space()]
    public ZoomPos ZoomStep1;

    [Space()]
    public BasicDrag ToolStep1;

    [Space()]
    public BD_CameraFollow ToolStep1CameraFollow;

    [Space()]
    public GameObject Step1Col;

    [Space()]
    public GameObject DustSR_1;

    [Header("----------------- STEP 2 ----------------------")]
    [Space()]
    public ZoomPos ZoomStep2;

    [Space()]
    public BasicDrag ToolStep2;

    [Space()]
    public BD_CameraFollow ToolStep2CameraFollow;

    [Space()]
    public SpriteRenderer[] SRsToFadeOut_2;

    [Space()]
    public SpriteRenderer SpraySR_2;

    [Header("----------------- STEP 3 ----------------------")]
    [Space()]
    public ZoomPos ZoomStep3;

    [Space()]
    public BasicDrag ToolStep3;

    [Space()]
    public BD_CameraFollow ToolStep3CameraFollow;

    [Space()]
    public GameObject Step3Col;

    [Space()]
    public GameObject Mix;
    public GameObject MixE;

    [Tooltip("Keep the same foam renderer between mixing and the final wipe.")]
    public bool useContinuousFoamSurface;

    IEnumerator Start()
    {

        base.LevelStart();

        UI_Manager.instance.InitializeTools(ToolIcons);

        CameraController.Instance.MoveCamera(MainZoom.CameraPos, MainZoom.CameraFOV, .01f);

        yield return new WaitForSeconds(0.1f);

        // STEP 1
        Step1Col.SetActive(false);

        ToolStep1CameraFollow.enabled = false;

        // STEP 2
        ToolStep2CameraFollow.enabled = false;

        // STEP 3
        Step3Col.SetActive(false);

        FadeLayer(MixE, 0, 0);

        ToolStep3CameraFollow.enabled = false;

        

        // PLAYABLE: no save resume — same ForceComplete + StartStep as original switch.
        StartStep1();
        yield break;
}

    #region HELPERS

    public static void FadeLayer(GameObject layer, float alpha, float duration = .35f)
    {
        if (layer == null) return;
        // A future layer may start disabled. Enable it once at zero opacity
        // when its step begins; subsequent hiding uses opacity rather than toggles.
        if (alpha > 0 && !layer.activeSelf) layer.SetActive(true);
        foreach (var surface in layer.GetComponentsInChildren<SpriteRenderer>(true))
        {
            surface.DOKill();
            if (duration > 0) surface.DOFade(alpha, duration);
            else
            {
                var color = surface.color;
                color.a = alpha;
                surface.color = color;
            }
        }
    }

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

        ToolStep1.transform.DOKill();
        ToolStep1.transform.DOLocalMoveX(0f, .5f).SetDelay(1f).OnComplete(() =>
        {
            ToolInputToggle(ToolStep1.gameObject, true);

            ToolStep1CameraFollow.enabled = true;

            Step1Col.SetActive(true);
        });
    }

    public void Step1Done()
    {
        if (isStep1Done)
            return;

        isStep1Done = true;

        Step1Col.SetActive(false);

        ToolStep1CameraFollow.enabled = false;

        ToolInputToggle(ToolStep1.gameObject, false);

        CameraController.Instance.MoveCamera(ZoomStep1.CameraPos, ZoomStep1.CameraFOV);

        ToolStep1.transform.DOKill();
        ToolStep1.transform.DOLocalMoveX(-10f, 1f).SetDelay(.25f).OnComplete(() =>
        {
            ToolStep1.gameObject.SetActive(false);
        });

        Invoke(nameof(StartStep2), 1f);

        try
        {
            Statics.GA_CustomStringEvent("Lvl" + GameManager.instance.currentLevelNo
                + "_" + levelName + "_Step1_Comp");
        }
        catch { }
    }

    void ForceCompleteStep1()
    {
        FadeLayer(DustSR_1, 0);
    }

    #endregion

    #region STEP 2

    bool isStep2Done;

    void StartStep2()
    {
        AdvanceProgressIcon();
        FadeLayer(SpraySR_2.gameObject, 1);

        CameraController.Instance.MoveCamera(ZoomStep2.CameraPos, ZoomStep2.CameraFOV);

        ToolStep2.transform.DOKill();
        ToolStep2.transform.DOLocalMoveX(0.4f, .5f).SetDelay(1f).OnComplete(() =>
        {
            ToolInputToggle(ToolStep2.gameObject, true);

            ToolStep2CameraFollow.enabled = true;
        });
    }

    public void Step2Done()
    {
        if (isStep2Done)
            return;

        isStep2Done = true;

        ToolStep2CameraFollow.enabled = false;

        ToolInputToggle(ToolStep2.gameObject, false);

        CameraController.Instance.MoveCamera(ZoomStep2.CameraPos, ZoomStep2.CameraFOV);

        ToolStep2.transform.DOKill();
        ToolStep2.transform.DOLocalMoveX(-10f, 1f).SetDelay(.25f).OnComplete(() =>
        {
            ToolStep2.gameObject.SetActive(false);
        });

        DOVirtual.DelayedCall(1f, () =>
        {
            for (int i = 0; i < SRsToFadeOut_2.Length; i++)
            {
                SRsToFadeOut_2[i].DOKill();
                SRsToFadeOut_2[i].DOFade(0, 2f);
            }

        });

        Invoke(nameof(StartStep3), 1f);

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

        SpraySR_2.material = GameManager.instance.DefaultMat;

        for (int i = 0; i < SRsToFadeOut_2.Length; i++)
        {
            FadeLayer(SRsToFadeOut_2[i].gameObject, 0);
        }
    }

    #endregion

    #region STEP 3

    bool isStep3Done;

    void StartStep3()
    {
        AdvanceProgressIcon();
        FadeLayer(Mix, 1);

        CameraController.Instance.MoveCamera(ZoomStep3.CameraPos, ZoomStep3.CameraFOV);

        ToolStep3.transform.DOKill();
        ToolStep3.transform.DOLocalMoveX(0f, .5f).SetDelay(1f).OnComplete(() =>
        {
            ToolInputToggle(ToolStep3.gameObject, true);

            ToolStep3CameraFollow.enabled = true;

            Step3Col.SetActive(true);
        });
    }

    public void Step3Done()
    {
        if (isStep3Done)
            return;

        isStep3Done = true;

        Step3Col.SetActive(false);

        ToolStep3CameraFollow.enabled = false;

        ToolInputToggle(ToolStep3.gameObject, false);

        CameraController.Instance.MoveCamera(ZoomStep3.CameraPos, ZoomStep3.CameraFOV);

        ToolStep3.transform.DOKill();
        ToolStep3.transform.DOLocalMoveX(-10f, 1f).SetDelay(.25f).OnComplete(() =>
        {
            ToolStep3.gameObject.SetActive(false);
        });

        DOVirtual.DelayedCall(1f, () =>
        {
            CompleteFoamLayer();

        });

        CameraController.Instance.MoveCamera(MainZoom.CameraPos, MainZoom.CameraFOV);

        Invoke(nameof(LevelComplete), 1.5f);

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

        CompleteFoamLayer();
    }

    void CompleteFoamLayer()
    {
        if (!useContinuousFoamSurface)
        {
            FadeLayer(Mix, 0);
            FadeLayer(MixE, 1);
            return;
        }

        // Finish the remaining mask on the same renderer. Cross-fading two
        // transparent copies exposes the underlayers and shifts the crown edges.
        FadeLayer(MixE, 0, 0);
        FadeLayer(Mix, 1, 0);
        foreach (var scratch in AllScratches)
        {
            if (scratch.SpriteCard != Mix) continue;
            scratch.Card.IsScratching = false;
            scratch.Card.InputEnabled = false;
            scratch.InputEnabled = false;
            scratch.Card.ClearSmoothly(.3f);
            break;
        }
    }

    #endregion

    
}
