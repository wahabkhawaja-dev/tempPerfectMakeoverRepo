using UnityEngine;
using System;
using System.Collections;

public class Level3_Crown_Playable : LevelData
{
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

        MixE.SetActive(false);

        ToolStep3CameraFollow.enabled = false;



        // PLAYABLE: no save resume — same ForceComplete + StartStep as original switch.
        StartStep1();
        yield break;
}

    #region TWEEN-FREE HELPERS

    // Diagnostic replacement for DOTween on this script only: same visual behavior
    // (slide-in/out with delay + OnComplete, delayed calls, sprite fade-out) via plain coroutines.

    Coroutine toolStep1MoveCo, toolStep2MoveCo, toolStep3MoveCo;
    Coroutine fadeOut2Co;

    IEnumerator MoveLocalX(Transform t, float targetX, float duration, float delay, Action onComplete)
    {
        if (delay > 0f)
            yield return new WaitForSeconds(delay);

        float startX = t.localPosition.x;
        float elapsed = 0f;

        while (elapsed < duration)
        {
            elapsed += Time.deltaTime;

            float x = Mathf.Lerp(startX, targetX, Mathf.Clamp01(elapsed / duration));

            t.localPosition = new Vector3(x, t.localPosition.y, t.localPosition.z);

            yield return null;
        }

        t.localPosition = new Vector3(targetX, t.localPosition.y, t.localPosition.z);

        onComplete?.Invoke();
    }

    IEnumerator FadeOutSprites(SpriteRenderer[] srs, float duration)
    {
        float elapsed = 0f;
        float[] startAlphas = new float[srs.Length];

        for (int i = 0; i < srs.Length; i++)
            startAlphas[i] = srs[i].color.a;

        while (elapsed < duration)
        {
            elapsed += Time.deltaTime;

            float t = Mathf.Clamp01(elapsed / duration);

            for (int i = 0; i < srs.Length; i++)
            {
                Color c = srs[i].color;
                c.a = Mathf.Lerp(startAlphas[i], 0f, t);
                srs[i].color = c;
            }

            yield return null;
        }

        for (int i = 0; i < srs.Length; i++)
        {
            Color c = srs[i].color;
            c.a = 0f;
            srs[i].color = c;
        }
    }

    IEnumerator DelayedAction(float delay, Action action)
    {
        yield return new WaitForSeconds(delay);

        action?.Invoke();
    }

    #endregion

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

        if (toolStep1MoveCo != null)
            StopCoroutine(toolStep1MoveCo);

        toolStep1MoveCo = StartCoroutine(MoveLocalX(ToolStep1.transform, 0f, .5f, 1f, () =>
        {
            ToolInputToggle(ToolStep1.gameObject, true);

            ToolStep1CameraFollow.enabled = true;

            Step1Col.SetActive(true);
        }));
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

        if (toolStep1MoveCo != null)
            StopCoroutine(toolStep1MoveCo);

        toolStep1MoveCo = StartCoroutine(MoveLocalX(ToolStep1.transform, -10f, 1f, .25f, () =>
        {
            ToolStep1.gameObject.SetActive(false);
        }));

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
        DustSR_1.SetActive(false);
    }

    #endregion

    #region STEP 2

    bool isStep2Done;

    void StartStep2()
    {
        AdvanceProgressIcon();

        CameraController.Instance.MoveCamera(ZoomStep2.CameraPos, ZoomStep2.CameraFOV);

        if (toolStep2MoveCo != null)
            StopCoroutine(toolStep2MoveCo);

        toolStep2MoveCo = StartCoroutine(MoveLocalX(ToolStep2.transform, 0.4f, .5f, 1f, () =>
        {
            ToolInputToggle(ToolStep2.gameObject, true);

            ToolStep2CameraFollow.enabled = true;
        }));
    }

    public void Step2Done()
    {
        if (isStep2Done)
            return;

        isStep2Done = true;

        ToolStep2CameraFollow.enabled = false;

        ToolInputToggle(ToolStep2.gameObject, false);

        CameraController.Instance.MoveCamera(ZoomStep2.CameraPos, ZoomStep2.CameraFOV);

        if (toolStep2MoveCo != null)
            StopCoroutine(toolStep2MoveCo);

        toolStep2MoveCo = StartCoroutine(MoveLocalX(ToolStep2.transform, -10f, 1f, .25f, () =>
        {
            ToolStep2.gameObject.SetActive(false);
        }));

        if (fadeOut2Co != null)
            StopCoroutine(fadeOut2Co);

        fadeOut2Co = StartCoroutine(DelayedAction(1f, () =>
        {
            fadeOut2Co = StartCoroutine(FadeOutSprites(SRsToFadeOut_2, 2f));
        }));

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
            SRsToFadeOut_2[i].gameObject.SetActive(false);
        }
    }

    #endregion

    #region STEP 3

    bool isStep3Done;

    void StartStep3()
    {
        AdvanceProgressIcon();

        CameraController.Instance.MoveCamera(ZoomStep3.CameraPos, ZoomStep3.CameraFOV);

        if (toolStep3MoveCo != null)
            StopCoroutine(toolStep3MoveCo);

        toolStep3MoveCo = StartCoroutine(MoveLocalX(ToolStep3.transform, 0f, .5f, 1f, () =>
        {
            ToolInputToggle(ToolStep3.gameObject, true);

            ToolStep3CameraFollow.enabled = true;

            Step3Col.SetActive(true);
        }));
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

        if (toolStep3MoveCo != null)
            StopCoroutine(toolStep3MoveCo);

        toolStep3MoveCo = StartCoroutine(MoveLocalX(ToolStep3.transform, -10f, 1f, .25f, () =>
        {
            ToolStep3.gameObject.SetActive(false);
        }));

        StartCoroutine(DelayedAction(1f, () =>
        {
            Mix.SetActive(false);
            MixE.SetActive(true);
        }));

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

        Mix.SetActive(false);

        MixE.SetActive(true);
    }

    #endregion


}
