using UnityEngine;
using DG.Tweening;
using System.Collections;

public class Level3_Manicure_Playable : LevelData
{
    [Space()]
    [Header("----------------------------------------------------------------------------------")]
    [Space()]
    public ZoomPos MainZoom;

    [Space()]
    public InteractableBones[] AllBones;

    [Space()]
    public GameObject View1;
    public GameObject View2;
    [Header("----------------- STEP 1 ----------------------")]
    [Space()]
    public ZoomPos ZoomStep1;

    [Space()]
    public BasicDrag ToolStep1;

    [Space()]
    public GameObject ToolStep1Tip;

    [Space()]
    public BD_CameraFollow ToolStep1CameraFollow;

    [Space()]
    public GameObject Step1Col;

    [Space()]
    public GameObject Hairs_1;

    [Header("----------------- STEP 2 ----------------------")]
    [Space()]
    public ZoomPos ZoomStep2;

    [Space()]
    public ZoomPos ZoomStep2B;

    [Space()]
    public GameObject Tool2Holder;
    public GameObject Tool2HolderInner;

    [Space()]
    public BasicDrag ToolStep2;

    [Space()]
    public GameObject ToolStep2Tip;

    [Space()]
    public BD_CameraFollow ToolStep2CameraFollow;

    [Space()]
    public BD_ToolRotate ToolStep2ToolRotate;

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
    public GameObject Tap_2;

    [Space()]
    public Transform DropOnWipe_2;
    public SpriteRenderer SpreadOnWipe_2;

    [Space()]
    public GameObject PolishHolder_2;

    [Space()]
    public AudioClip makeupRemoverSfx;

    [Header("----------------- STEP 3 ----------------------")]
    [Space()]
    public ZoomPos ZoomStep3;

    [Space()]
    public BasicDrag ToolStep3;

    [Space()]
    public BD_CameraFollow ToolStep3CameraFollow;

    [Space()]
    public GameObject[] Indications_3;

    [Space()]
    public GameObject NailsHolder_3;

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

        ToolStep2ToolRotate.enabled = false;

        // STEP 3
        ToolStep3CameraFollow.enabled = false;

        

        // PLAYABLE: no save resume — same ForceComplete + StartStep as original switch.
        StartStep1();
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

    public void UpdateHandBonesTip(GameObject TipIs)
    {
        for (int i = 0; i < AllBones.Length; i++)
        {
            try
            {
                AllBones[i].Tip = TipIs.transform;
            }
            catch
            {
            }
        }
    }

    #endregion

    #region STEP 1

    bool isStep1Done;

    void StartStep1()
    {
        CameraController.Instance.MoveCamera(ZoomStep1.CameraPos, ZoomStep1.CameraFOV);

        ToolStep1.transform.DOKill();
        ToolStep1.transform.DOLocalMoveX(1f, .5f).SetDelay(1f).OnComplete(() =>
        {
            ToolInputToggle(ToolStep1.gameObject, true);

            ToolStep1CameraFollow.enabled = true;

            Step1Col.SetActive(true);
        });

        UpdateHandBonesTip(ToolStep1Tip);
    }

    public void Step1Done()
    {
        if (isStep1Done)
            return;

        isStep1Done = true;

        Step1Col.SetActive(false);

        ToolStep1CameraFollow.enabled = false;

        ToolInputToggle(ToolStep1.gameObject, false);

        CameraController.Instance.MoveCamera(ZoomStep2.CameraPos, ZoomStep1.CameraFOV);

        ToolStep1.transform.DOKill();
        ToolStep1.transform.DOLocalMoveY(-10f, 1f).SetDelay(.25f).OnComplete(() =>
        {
            ToolStep1.gameObject.SetActive(false);
        });

        Invoke(nameof(StartStep2), 1.2f);

        try
        {
            Statics.GA_CustomStringEvent(levelName + "_Step1_Comp");
        }
        catch { }
    }

    void ForceCompleteStep1()
    {
        Hairs_1.SetActive(false);
    }

    #endregion

    #region STEP 2

    bool isStep2Done;

    int tapsDone = 0;

    void StartStep2()
    {
        AdvanceProgressIcon();

        CameraController.Instance.MoveCamera(ZoomStep2.CameraPos, ZoomStep2.CameraFOV);

        Tool2Holder.SetActive(true);
        Tool2Holder.transform.DOKill();
        Tool2Holder.transform.DOLocalMoveX(0f, .5f).SetDelay(1f).OnComplete(() =>
        {
            Wipe.DOKill();
            Wipe.DOMove(WipeTarget.position, 1f).OnComplete(() =>
            {
                Tap_2.SetActive(true);
            });
        });

        UpdateHandBonesTip(ToolStep2Tip);
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
                DropOnWipe_2.DOKill();
                DropOnWipe_2.DOScale(1f, 1f);

                RemoverBodySR.sprite = RemoverBodySprite1;
            });

            Tap_2.SetActive(false);

            Invoke(nameof(BottleTap), 0.7f);
        }

        else
        {
            if (makeupRemoverSfx != null)
                AudioController.instance.PlayAnySfx(0, makeupRemoverSfx, 0f);

            DOVirtual.DelayedCall(0.5f, () =>
            {
                DropOnWipe_2.DOKill();
                DropOnWipe_2.DOScale(1.5f, 1f);

                SpreadOnWipe_2.DOKill();
                SpreadOnWipe_2.DOFade(1f, 1f);

                Invoke(nameof(Drop2Done), 1f);

                RemoverBodySR.sprite = RemoverBodySprite2;
            });
        }
    }

    void Drop2Done()
    {
        Wipe.DOKill();
        Wipe.DOLocalMove(new Vector3(2.05f, 1.78f, 0f), 1f).SetDelay(.5f).OnComplete(() =>
        {
            ToolInputToggle(ToolStep2.gameObject, true);

            ToolStep2CameraFollow.enabled = true;

            ToolStep2.OnMouseDownEvent += () =>
            {
                Holder1.SetActive(false);
                Holder2.SetActive(true);

                ToolStep2ToolRotate.enabled = true;
            };
        });

        Tool2HolderInner.transform.DOKill();
        Tool2HolderInner.transform.DOLocalMoveX(-10, 1f);

        CameraController.Instance.MoveCamera(ZoomStep2B.CameraPos, ZoomStep2B.CameraFOV);
    }

    public void Step2Done()
    {
        if (isStep2Done)
            return;

        isStep2Done = true;

        ToolStep2ToolRotate.enabled = false;

        ToolStep2CameraFollow.enabled = false;

        ToolInputToggle(ToolStep2.gameObject, false);

        ToolStep2.transform.DOKill();
        ToolStep2.transform.DOLocalMoveX(10, 1f).SetDelay(.25f).SetEase(Ease.InBack);

        CameraController.Instance.MoveCamera(ZoomStep2.CameraPos, ZoomStep2.CameraFOV);

        Invoke(nameof(StartStep3), 1.2f);

        try
        {
            Statics.GA_CustomStringEvent(levelName + "_Step2_Comp");
        }
        catch { }
    }

    void ForceCompleteStep2()
    {
        ForceCompleteStep1();

        PolishHolder_2.SetActive(false);
    }

    #endregion

    #region STEP 3

    bool isStep3Done;

    void StartStep3()
    {
        AdvanceProgressIcon();

        CameraController.Instance.MoveCamera(ZoomStep3.CameraPos, ZoomStep3.CameraFOV);

        ToolStep3.transform.DOKill();
        ToolStep3.transform.DOLocalMoveX(0.65f, .5f).SetDelay(1f).OnComplete(() =>
        {
            ToolInputToggle(ToolStep3.gameObject, true);

            ToolStep3CameraFollow.enabled = true;

            for (int i = 0; i < Indications_3.Length; i++)
            {
                Indications_3[i].SetActive(true);
            }
        });
    }

    public void Step3Done()
    {
        if (isStep3Done)
            return;

        isStep3Done = true;

        for (int i = 0; i < Indications_3.Length; i++)
        {
            Indications_3[i].SetActive(false);
        }

        if (ToolStep3CameraFollow != null)
            ToolStep3CameraFollow.enabled = false;

        ToolInputToggle(ToolStep3.gameObject, false);

        CameraController.Instance.MoveCamera(new Vector3(0, ZoomStep3.CameraPos.y, ZoomStep3.CameraPos.z), ZoomStep3.CameraFOV);

        ToolStep3.transform.DOKill();
        ToolStep3.transform.DOLocalMoveY(-10f, 1f).SetDelay(.25f).OnComplete(() =>
        {
            ToolStep3.gameObject.SetActive(false);
        });

        Invoke(nameof(LevelComplete), 1f);

        try
        {
            Statics.GA_CustomStringEvent(levelName + "_Step3_Comp");
        }
        catch { }
    }

    void ForceCompleteStep3()
    {
        ForceCompleteStep2();

        View1.SetActive(false);

        View2.SetActive(true);

        NailsHolder_3.SetActive(false);
    }

    #endregion

    
}