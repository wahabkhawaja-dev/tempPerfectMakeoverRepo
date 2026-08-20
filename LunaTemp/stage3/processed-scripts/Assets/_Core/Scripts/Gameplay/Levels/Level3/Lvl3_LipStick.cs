using DG.Tweening;
using System;
using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class Lvl3_LipStick : LevelData
{

    [Space()]
    [Header("----------------------------------------------------------------------------------")]
    [Space()]
    public ZoomPos MainZoom;

    public GameObject View1;
    public GameObject View2;
    public GameObject View3;

    [Header("----------------- STEP 1 ----------------------")]
    [Space()]
    public ZoomPos ZoomStep1;
    [Space()]
    public Transform Spoon;
    [Space()]
    public BasicDrag ToolStep1;
    public BD_CameraFollow ToolStep1CameraFollow;
    [Space()]
    public GameObject handIndicationStep1;
    public List<OutlinePulse> OutlinePulseStep1;


    [Header("----------------- STEP 2 ----------------------")]
    [Space()]
    public ZoomPos ZoomStep2;

    public SpriteRenderer BurningSpoonSR;
    [Space()]
    public BasicDrag ToolStep2;
    [Space()]
    public BD_CameraFollow step2CameraFollow;
    public GameObject handIndicationStep2;


    [Header("----------------- STEP 3 ----------------------")]
    [Space()]
    public ZoomPos ZoomStep3;

    [Space()]
    public BasicDrag ToolStep3;
    [Space()]
    // public BD_CameraFollow step2CameraFollow;
    public GameObject handIndicationStep3;
    public GameObject maskStep4;
    public GameObject TopCover;



    [Header("----------------- STEP 4 ----------------------")]
    [Space()]
    public ZoomPos ZoomStep4;

    [Space()]
    public BasicDrag ToolStep4;
    [Space()]
    // public BD_CameraFollow step2CameraFollow;
    public GameObject handIndicationStep4;
    public BoxCollider2D pourCollider;
    public OutlinePulse OutlinePulseStep4;



    [Header("----------------- STEP 5 ----------------------")]
   
     [Space()]
    public ZoomPos ZoomStep5;

    public GameObject fire;
    [Space()]
    public BasicDrag ToolStep5;
    [Space()]
     public BD_CameraFollow step5CameraFollow;
    public GameObject handIndicationStep5;

    public OutlinePulse OutlinePulseStep5;

    IEnumerator Start()
    {
        base.LevelStart();

        UI_Manager.instance.InitializeTools(ToolIcons);

        CameraController.Instance.MoveCamera(MainZoom.CameraPos, MainZoom.CameraFOV, .01f);

        yield return new WaitForSeconds(0.1f);

        // STEP 1
        /*        Step1Col.SetActive(false);

                ToolStep1CameraFollow.enabled = false;

                // STEP 2
                ToolStep2CameraFollow.enabled = false;

                // STEP 3
                Step3Col.SetActive(false);

                MixE.SetActive(false);

                ToolStep3CameraFollow.enabled = false;

                // STEP 4
                CleanSR_4.DOKill();
                CleanSR_4.DOFade(0, .1f);

                Step4Col.SetActive(false);

                ToolStep4CameraFollow.enabled = false;

                // STEP 6
                Step6Col.SetActive(false);

                ToolStep6CameraFollow.enabled = false;

                // STEP 7
                ToolStep7CameraFollow.enabled = false;*/

        yield return new WaitForSeconds(.5f);

        levelNo = SaveSystem.Instance.DataFields.levelToPlay - 1;
        partNo = SaveSystem.Instance.DataFields.partToPlay - 1;

        stepsDone = SaveSystem.Instance.DataFields.AllLevels[levelNo].subLevels[partNo].stepsDone;

        switch (stepsDone)
        {
            // STARTING STEP 1
            case 0:
                DOVirtual.DelayedCall(.5f, () =>
                {
                    StartStep1();
                });
                break;
        }

    }


    #region STEP 1

    bool isStep1Done = false;

    void StartStep1()
    {
        CameraController.Instance.MoveCamera(ZoomStep1.CameraPos, ZoomStep1.CameraFOV);
   

        Spoon.transform.DOKill();

        // OutBack, not InBack - InBack pulls away first and arrives at full speed, which
        // is the jerk. InBack belongs on the exits in Step1Done.
        Spoon.transform.DOMoveX(0.85f, .5f).SetEase(Ease.OutBack);

        // Pieces are dragged by hand for now - keep the picker tool off-screen.
        ToolInputToggle(ToolStep1.gameObject, false);

        if (handIndicationStep1 != null)
            handIndicationStep1.SetActive(true);

    }


  public  void Step1Done()
    {
        if (isStep1Done)
            return;

        isStep1Done = true;

        ToolInputToggle(ToolStep1.gameObject, false);

        Spoon.transform.DOKill();
        Spoon.transform.DOMoveX(8f, .5f).SetEase(Ease.InBack);

        DOVirtual.DelayedCall(1f, () =>
        {
            View1.transform.DOMoveX(10, 1f).OnComplete(() => {


                CameraController.Instance.MoveCamera(ZoomStep1.CameraPos, ZoomStep1.CameraFOV, .1f);

                View2.transform.DOLocalMoveX(0.45f,.5f).OnComplete(() => {


               
                Invoke(nameof(StartStep5), 1.2f);
            }); });
    /*        UI_Manager.instance.FadeAnim(1f, 1f);

            DOVirtual.DelayedCall(1.1f, () =>
            {
                CameraController.Instance.MoveCamera(ZoomStep1.CameraPos, ZoomStep1.CameraFOV, .1f);

                View1.SetActive(false);

                View2.SetActive(true);

            });*/
        });
        // Invoke(nameof(StartStep2), 1.2f);

        try
        {
            Statics.GA_CustomStringEvent(levelName + "_Step1_Comp");
        }
        catch { }
    }

    #endregion

    #region STEP 2

    bool isStep2Done = false;

    void StartStep2()
    {
        UI_Manager.instance.SetProgressBarPos();
    
        CameraController.Instance.MoveCamera(ZoomStep2.CameraPos, ZoomStep2.CameraFOV);

        // The spoon is already in place in the prefab, it just comes on.
        ToolStep2.gameObject.SetActive(true);
        DOVirtual.DelayedCall(.5f, () =>
        {
          

        ToolInputToggle(ToolStep2.gameObject, false);
        ToolStep2.transform.DOLocalMoveX(0.598f, .5f).SetDelay(.5f).OnComplete(() =>
        {

        handIndicationStep2.SetActive(true);

          step2CameraFollow.enabled = true;

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
        CameraController.Instance.MoveCamera(ZoomStep2.CameraPos, ZoomStep2.CameraFOV);
     
        ToolStep2.transform.DOKill();
        ToolStep2.transform.DOMoveX(-8, .5f).SetDelay(.1f).SetEase(Ease.InBack).OnComplete(() => { ToolStep2.gameObject.SetActive(false); }); ;
        DOVirtual.DelayedCall(1f, () =>
        {
            UI_Manager.instance.FadeAnim(1f, 1f);

            DOVirtual.DelayedCall(1.1f, () =>
            {
                CameraController.Instance.MoveCamera(ZoomStep2.CameraPos, ZoomStep2.CameraFOV, .1f);

                View2.SetActive(false);

                View3.SetActive(true);

                Invoke(nameof(StartStep3), 1.2f);
            });
        });
  

        try
        {
            Statics.GA_CustomStringEvent(levelName + "_Step2_Comp");
        }
        catch { }
    }

    #endregion
    // 3.79
    #region STEP 3

    bool isStep3Done = false;

    void StartStep3()
    {
        UI_Manager.instance.SetProgressBarPos();

        CameraController.Instance.MoveCamera(ZoomStep3.CameraPos, ZoomStep3.CameraFOV);

        // The spoon is already in place in the prefab, it just comes on.
        ToolStep3.gameObject.SetActive(true);

        ToolInputToggle(ToolStep3.gameObject, false);
        ToolStep3.transform.DOLocalMoveX(0.58f, .5f).SetDelay(.5f).OnComplete(() =>
        {
      
          //  handIndicationStep3.SetActive(true);


            ToolInputToggle(ToolStep3.gameObject, true);
        });


    }


    public void Step3Done()
    {
        if (isStep3Done)
            return;

        isStep3Done = true;

        ToolInputToggle(ToolStep3.gameObject, false);
        CameraController.Instance.MoveCamera(ZoomStep3.CameraPos, ZoomStep3.CameraFOV);

        ToolStep3.transform.DOKill();
        ToolStep3.transform.DOMoveX(-8, .5f).SetDelay(.1f).SetEase(Ease.InBack).OnComplete(() => { ToolStep3.gameObject.SetActive(false); }); ;
        DOVirtual.DelayedCall(0f, () =>
        {
            TopCover.transform.DOKill();
 /*           TopCover.transform.DOLocalMoveY(5.57f, .5f).OnComplete(() => {


                TopCover.transform.DOMoveX(-8, .5f).SetDelay(.1f).SetEase(Ease.InBack);
            });
            */
            
  

         Invoke(nameof(StartStep4), 1.2f);

        try
        {
            Statics.GA_CustomStringEvent(levelName + "_Step3_Comp");
        }
        catch { }

        });
    }

    #endregion



    #region STEP 4

    bool isStep4Done = false;

    void StartStep4()
    {

        CameraController.Instance.MoveCamera(ZoomStep4.CameraPos, ZoomStep4.CameraFOV);

        DOVirtual.DelayedCall(1f, () =>
        {
            pourCollider.enabled = false;
            ToolInputToggle(ToolStep4.gameObject, true);

            OutlinePulseStep4.EnableAnim();

            handIndicationStep4.SetActive(true);

            ToolStep4.OnMouseDownEvent += () =>
            {
                OutlinePulseStep4.DisableAnim();

                if (handIndicationStep4.activeInHierarchy)
                    handIndicationStep4.SetActive(false);
            };

            ToolStep4.OnMouseUpEvent += () =>
            {
                Step4Done();

                SpriteRenderer sr = ToolStep4.thisSR != null
                    ? ToolStep4.thisSR
                    : ToolStep4.GetComponent<SpriteRenderer>();

                if (sr != null)
                    sr.sortingOrder += 20;
            };

        });
    }

    public void Step4Done()
    {
        if (isStep4Done)
            return;

        isStep4Done = true;

        UI_Manager.instance.SetProgressBar(1);

            

        // OnDragEnd already started a 0.2s return (OutQuad = fast start, slow end).
        // Kill that before anything else or it is the motion the player sees.
        ToolStep4.canReturn = false;
        ToolStep4.canDrag = false;
        ToolStep4.transform.DOKill();

        ToolInputToggle(ToolStep4.gameObject, false);

        CameraController.Instance.MoveCamera(ZoomStep4.CameraPos, ZoomStep4.CameraFOV);

        SpriteRenderer sr = ToolStep4.thisSR;
        if (sr == null)
            sr = ToolStep4.GetComponent<SpriteRenderer>();

        float startY = ToolStep4.transform.localPosition.y;
        float endY = 6.57f;
        int flipsDone = 0;

        ToolStep4.transform.DOLocalMoveY(endY, 0.5f).SetEase(Ease.OutCubic)
            .OnUpdate(() =>
            {
                if (sr == null)
                    return;

                float u = Mathf.InverseLerp(startY, endY, ToolStep4.transform.localPosition.y);
                int should = u >= 0.66f ? 2 : (u >= 0.33f ? 1 : 0);

                while (flipsDone < should)
                {
                    flipsDone++;
                    sr.flipX = !sr.flipX;
                }
            })
            .OnComplete(() =>
            {
                ToolStep4.transform.DOMoveX(-8f, 0.45f).SetEase(Ease.InBack).OnComplete(() =>
                {
                    ToolStep4.gameObject.SetActive(false);
                });
            });

        Invoke(nameof(LevelComplete), 2.2f);

        try
        {
            Statics.GA_CustomStringEvent(levelName + "_Step4_Comp");
        }
        catch { }
    }

    #endregion


    #region STEP 5

    bool isStep5Done = false;

    void StartStep5()
    {
        UI_Manager.instance.SetProgressBarPos();

        CameraController.Instance.MoveCamera(ZoomStep5.CameraPos, ZoomStep5.CameraFOV);
       // handIndicationStep5.SetActive(true);
        ToolStep5.gameObject.SetActive(true);
        DOVirtual.DelayedCall(.5f, () =>
        {
            ToolInputToggle(ToolStep5.gameObject, false);
            ToolStep5.transform.DOLocalMoveX(0.598f, .5f).SetDelay(.5f).OnComplete(() =>
            {
               step5CameraFollow.enabled = true;
                ToolInputToggle(ToolStep5.gameObject, true);
            });
        });
    }


    public void Step5Done()
    {
        if (isStep5Done)
            return;

        isStep5Done = true;

/*        if (handIndicationStep5 != null)
            handIndicationStep5.SetActive(false);*/

        ToolInputToggle(ToolStep5.gameObject, false);

        if (step5CameraFollow != null)
            step5CameraFollow.DisableFollow();
        else
        {
            var follow = ToolStep5.GetComponent<BD_CameraFollow>();
            if (follow != null)
                follow.DisableFollow();
        }

        CameraController.Instance.MoveCamera(ZoomStep5.CameraPos, ZoomStep5.CameraFOV);

        ToolStep5.transform.DOKill();
        ToolStep5.transform.DOMoveX(15f, .5f).SetDelay(.1f).SetEase(Ease.InBack).OnComplete(() => { ToolStep5.gameObject.SetActive(false); });

        Invoke(nameof(StartStep2), 1.2f);




        try
        {
            Statics.GA_CustomStringEvent(levelName + "_Step2_Comp");
        }
        catch { }
    }

    #endregion
}
