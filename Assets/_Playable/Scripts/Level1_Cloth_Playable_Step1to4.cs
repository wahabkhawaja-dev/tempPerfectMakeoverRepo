using DG.Tweening;
using UnityEngine;
using System.Collections;
using UnityEngine.UI;

public class Level1_Cloth_Playable_Step1to4 : LevelData
{
    [Space()]
    [Header("----------------------------------------------------------------------------------")]

    [Space()]
    [Header("Views")]
    public GameObject WashingView;
    public GameObject WashingTools;

    [Space()]
    public GameObject DressingView;
    public GameObject DressingTools;

    [Header("----------------- STEP 1 ----------------------")]
    [Space()]
    [Header("STEP 1")]
    [Space()]
    public ZoomPos ZoomStep1;

    [Space()]
    public BasicDrag ToolStep1;
    public GameObject Basket_Cloth;

    [Space()]
    public SpriteRenderer clothInside;
    public SpriteRenderer clothRound;

    [Space()]
    public GameObject machineDoor;
    public GameObject machineGlass;

    [Space()]
    [SerializeField] AudioClip clothSfx;
    [SerializeField] AudioClip doorCloseSfx;

    [Header("----------------- STEP 2 ----------------------")]
    [Space()]
    [Header("STEP 2")]
    [Space()]
    public ZoomPos ZoomStep2;
    public ZoomPos ZoomStep2b;

    [Space()]
    public BasicDrag ToolStep2;
    [Space()]
    public BD_CameraFollow ToolStep2CamFollow;

    [Space()]
    public GameObject drawerObj;

    [Space()]
    public GameObject surfObj;

    [Space()]
    public Transform surfPackTop;

    [Space()]
    public GameObject handStep2;

    [Space()]
    public Level1_SurfController surfController;

    [Space()]
    public SpriteRenderer clothsInside;
    public SpriteRenderer clothsInsideGlass;
    public SpriteRenderer clothsStaticClean;
    public SpriteRenderer wetCloths;
    public SpriteRenderer clothCleanInside;
    public SpriteRenderer clothCleanInsideAnim;
    public SpriteRenderer waterWave;
    public BasicDrag clothCleanInside2;
    public BD_CameraFollow clothCleanInside2Cam;

    [Space()]
    public GameObject clothBasketTarget;   // drop target inside the basket for the clean cloth
    public GameObject clothBasketTarget2;   // drop target inside the basket for the clean cloth

    [Space()]
    public ParticleSystem waterSplash_Vfx;

    [Space()]
    public Text countDownTimerText;
    public float countDown = 5f;

    [Space()]
    public Collider2D machineTimer;
    public RotaryTimerKnob machineTimerRotater;
    public GameObject machineTimerIndication;

    [Space()]
    public AudioClip darazOpenSfx;
    public AudioClip darazCloseSfx;
    public AudioClip doorOpenSfx;
    public AudioClip machineStartSfx;
    public AudioClip machineFinishSfx;
    public AudioClip waterDrainSfx;

    IEnumerator Start()
    {
        base.LevelStart();

        UI_Manager.instance.InitializeTools(ToolIcons);

        yield return new WaitForSeconds(0.1f);

        StartStep1();
        yield break;
    }

    #region Step 1 

    bool step1Complete;

    void StartStep1()
    {
        CameraController.Instance.MoveCamera(ZoomStep1.CameraPos, ZoomStep1.CameraFOV, 1.2f, Ease.InOutSine);

        ToolStep1.transform.DOKill();
        ToolStep1.transform.DOLocalMoveX(0, .5f).SetDelay(1f).OnComplete(() =>
        {
            ToolStep1.startPos = ToolStep1.transform.position;

            ToolStep1.OnMouseDownEvent += OnClothPicked;
            ToolStep1.OnMouseUpEvent += OnClothReleased;

            DOVirtual.DelayedCall(0.2f, () =>
            {
                ToolInputToggle(ToolStep1.gameObject, true);
            });
        });

        Basket_Cloth.transform.DOKill();
        Basket_Cloth.transform.DOLocalMoveX(0, .5f).SetDelay(1f);
    }

    void OnClothPicked()
    {
        clothInside.gameObject.SetActive(false);
        clothRound.gameObject.SetActive(true);
        clothRound.sortingOrder = 100;
        clothInside.sortingOrder = 100;
    }

    void OnClothReleased()
    {
        DOVirtual.DelayedCall(0.5f, () =>
        {
            clothInside.sortingOrder = 26;
            clothRound.sortingOrder = 26;
            clothInside.gameObject.SetActive(true);
            clothRound.gameObject.SetActive(false);
        });
    }

    public void Step1Complete()
    {
        if (step1Complete)
            return;

        stepsDone = 1;
        step1Complete = true;

        ToolInputToggle(ToolStep1.gameObject, false);
        PlayClothPlacedSfx();

        ToolStep1.transform.DOKill();
        ToolStep1.transform.DOLocalMoveX(-15f, .5f).SetEase(Ease.InBack).OnComplete(() =>
        {
            ToolStep1.gameObject.SetActive(false);
            Basket_Cloth.gameObject.SetActive(false);

            clothsInside.gameObject.SetActive(false);
            clothsInsideGlass.gameObject.SetActive(true);

            if (doorCloseSfx != null)
                AudioController.instance.PlayAnySfx(0, doorCloseSfx, 0);

            machineDoor.SetActive(false);
            machineGlass.SetActive(true);

            clothsStaticClean.DOKill();
            clothsStaticClean.DOFade(1f, 1.2f).SetEase(Ease.InOutSine);

            clothsInsideGlass.DOKill();
            clothsInsideGlass.DOFade(0f, 1.0f).SetEase(Ease.InOutSine);

            waterWave.DOKill();
            waterWave.DOFade(1f, 1.2f).SetEase(Ease.InOutSine);

            waterWave.transform.DOKill();
            waterWave.transform.DOLocalMoveY(-0.3754f, 1.2f).SetEase(Ease.OutQuad);
        });

        Basket_Cloth.transform.DOKill();
        Basket_Cloth.transform.DOLocalMoveX(-15f, 0.8f).SetEase(Ease.InQuad);

        // Fill and tick step 1 on progress bar
        UI_Manager.instance.SetProgressBar(1f);

        // Smoothly glide into skipping surf step and focusing on the timer knob
        DOVirtual.DelayedCall(1.0f, () =>
        {
            SkipSurfStep();
        });

        try
        {
            Statics.GA_CustomStringEvent("Lvl" + GameManager.instance.currentLevelNo
                + "_" + levelName + "_Step1_Comp");
        }
        catch { }
    }

    void PlayClothPlacedSfx()
    {
        AudioController.instance.PlayAnySfx(0, clothSfx, 0f);
    }

    void ForceCompleteStep1()
    {
        ToolStep1.gameObject.SetActive(false);
        Basket_Cloth.gameObject.SetActive(false);

        clothsInside.gameObject.SetActive(false);
        clothsInsideGlass.gameObject.SetActive(true);

        machineDoor.SetActive(false);
        machineGlass.SetActive(true);

        clothsStaticClean.DOKill();
        clothsStaticClean.DOFade(1, 0f);

        clothsInsideGlass.DOKill();
        clothsInsideGlass.DOFade(0f, 0f);

        waterWave.DOKill();
        waterWave.DOFade(1, 0f);

        waterWave.transform.DOKill();
        waterWave.transform.DOLocalMoveY(-0.3754f, 0);
    }

    #endregion

    #region Step 2 

    bool step2Complete;

    void StartStep2()
    {
        Vector3 targetPos = (ZoomStep2 != null && ZoomStep2.CameraPos != Vector3.zero) 
            ? ZoomStep2.CameraPos 
            : new Vector3(0f, 0.9f, -10f);
        float targetFov = (ZoomStep2 != null && ZoomStep2.CameraFOV > 0) 
            ? ZoomStep2.CameraFOV 
            : 3.5f;

        CameraController.Instance.MoveCamera(targetPos, targetFov, 1.2f, Ease.InOutSine);

        ToolStep2.transform.DOKill();
        ToolStep2.transform.DOLocalMoveX(-0.751f, .5f).SetDelay(.5f).OnComplete(() =>
        {
            handStep2.SetActive(true);
        });
    }

    // PLAYABLE: the surf/detergent step is skipped.
    // Seamlessly transitions the toolbar and glides camera to focus on the timer knob.
    void SkipSurfStep()
    {
        step2Complete = true;

        handStep2.SetActive(false);
        if (surfPackTop != null) surfPackTop.gameObject.SetActive(false);
        if (surfController != null) surfController.enabled = false;
        if (ToolStep2CamFollow != null) ToolStep2CamFollow.enabled = false;
        ToolInputToggle(ToolStep2.gameObject, false);
        ToolStep2.gameObject.SetActive(false);
        if (drawerObj != null) drawerObj.SetActive(false);
        if (surfObj != null) surfObj.SetActive(false);

        // Advance UI tool carousel past skipped surf tool directly to timer knob
        UI_Manager.instance.SetProgressIconIndex(UI_Manager.instance.currentIndex + 2);
        UI_Manager.instance.SetProgressBar(0f);

        // Smoothly glide camera to the timer knob (ZoomStep2)
        Vector3 targetPos = (ZoomStep2 != null && ZoomStep2.CameraPos != Vector3.zero) 
            ? ZoomStep2.CameraPos 
            : new Vector3(0f, 0.9f, -10f);
        float targetFov = (ZoomStep2 != null && ZoomStep2.CameraFOV > 0) 
            ? ZoomStep2.CameraFOV 
            : 3.5f;

        CameraController.Instance.MoveCamera(targetPos, targetFov, 1.2f, Ease.InOutSine);

        // Once the camera arrives at the knob, activate the timer knob and indication
        DOVirtual.DelayedCall(1.2f, () =>
        {
            machineTimer.enabled = true;
            machineTimerRotater.enabled = true;
            machineTimerRotater.canDrag = true;
            machineTimerIndication.SetActive(true);
        });
    }

    public void PackOpend()
    {
        CameraController.Instance.MoveCamera(ZoomStep2b.CameraPos, ZoomStep2b.CameraFOV, 1.2f, Ease.InOutSine);

        surfPackTop.DOKill();
        surfPackTop.DOLocalMoveX(15f, 1f).OnComplete(() => surfPackTop.gameObject.SetActive(false));

        DOVirtual.DelayedCall(0.5f, () =>
        {
            if (darazOpenSfx != null)
                AudioController.instance.PlayAnySfx(0, darazOpenSfx, 0);

            drawerObj.SetActive(true);
            surfObj.SetActive(true);
            surfController.enabled = true;
            ToolInputToggle(ToolStep2.gameObject, true);
            ToolStep2CamFollow.enabled = true;
        });
    }

    public void Step2Complete()
    {
        if (step2Complete)
            return;

        step2Complete = true;

        ToolInputToggle(ToolStep2.gameObject, false);
        ToolStep2CamFollow.enabled = false;
        ToolStep2.anim.speed = 0.001f;

        ToolStep2.transform.DOKill();
        ToolStep2.transform.DORotate(Vector3.zero, 0.2f);
        ToolStep2.transform.DOLocalMoveX(-15f, 1f).SetDelay(0.21f).SetEase(Ease.InBack).OnComplete(() =>
        {
            ToolStep2.gameObject.SetActive(false);

            if (darazCloseSfx != null)
                AudioController.instance.PlayAnySfx(0, darazCloseSfx, 0);

            drawerObj.SetActive(false);
            surfObj.SetActive(false);

            Vector3 knobCamPos = (ZoomStep2 != null && ZoomStep2.CameraPos != Vector3.zero) 
                ? ZoomStep2.CameraPos 
                : new Vector3(0f, 0.9f, -10f);
            float knobCamFov = (ZoomStep2 != null && ZoomStep2.CameraFOV > 0) 
                ? ZoomStep2.CameraFOV 
                : 3.5f;

            CameraController.Instance.MoveCamera(knobCamPos, knobCamFov, 1.2f, Ease.InOutSine);

            DOVirtual.DelayedCall(1.2f, () =>
            {
                machineTimer.enabled = true;
                machineTimerRotater.enabled = true;
                machineTimerRotater.canDrag = true;
                machineTimerIndication.SetActive(true);
            });
        });

        UI_Manager.instance.SetProgressBar(1f);
        DOVirtual.DelayedCall(1f, () =>
        {
            UI_Manager.instance.SetProgressBarPos();
        });

        try
        {
            Statics.GA_CustomStringEvent("Lvl" + GameManager.instance.currentLevelNo
                + "_" + levelName + "_Step2_Comp");
        }
        catch { }
    }

    public void StartMachine()
    {
        machineTimerIndication.SetActive(false);
        machineTimer.enabled = false;
        machineTimerRotater.enabled = false;
        machineTimerRotater.canDrag = false;

        wetCloths.gameObject.SetActive(true);
        wetCloths.DOKill();
        wetCloths.DOFade(.75f, 2f);

        clothsStaticClean.DOKill();
        clothsStaticClean.DOFade(0, 2f);

        waterWave.DOKill();
        waterWave.DOFade(0, 2f);

        // Smoothly glide camera back to the washing machine view (ZoomStep1)
        DOVirtual.DelayedCall(0.2f, () =>
        {
            CameraController.Instance.MoveCamera(ZoomStep1.CameraPos, ZoomStep1.CameraFOV, 1.2f, Ease.InOutSine);
        });

        DOVirtual.DelayedCall(0.8f, () =>
        {
            waterSplash_Vfx.gameObject.SetActive(true);
            waterSplash_Vfx.Play();

            if (machineStartSfx != null)
                AudioController.instance.PlayAnySfx(0, machineStartSfx, 0);
        });

        countDownTimerText.text = "05";
        StartCoroutine(StartCountDown());

        DOVirtual.DelayedCall(6.5f, () =>
        {
            waterSplash_Vfx.Stop();
        });

        wetCloths.transform.DORotate(new Vector3(0, 0, 3000), 5f, RotateMode.FastBeyond360)
            .SetRelative(true)
            .SetEase(Ease.Linear).SetDelay(0.5f)
            .OnComplete(() =>
            {
                if (machineFinishSfx != null)
                    AudioController.instance.PlayAnySfx(0, machineFinishSfx, 0);

                wetCloths.transform.DORotate(new Vector3(0, 0, 600), 3.2f, RotateMode.FastBeyond360)
                    .SetRelative(true)
                    .SetEase(Ease.OutCubic);   // Smooth slow stop

                clothCleanInside.DOKill();
                clothCleanInside.DOFade(1, 1.5f).SetDelay(2f);

                clothCleanInsideAnim.DOKill();
                clothCleanInsideAnim.DOFade(1, 1.5f).SetDelay(2f).OnComplete(() =>
                {
                    if (waterDrainSfx != null)
                        AudioController.instance.PlayAnySfx(0, waterDrainSfx, 0);

                    clothCleanInsideAnim.transform.DOKill();
                    clothCleanInsideAnim.transform.DOLocalMoveY(-2, 2f).OnComplete(() =>
                    {
                        OpenDoor();

                        UI_Manager.instance.SetProgressBar(1f);
                        DOVirtual.DelayedCall(1f, () =>
                        {
                            UI_Manager.instance.SetProgressBarPos();
                        });
                    });
                });

                wetCloths.DOKill();
                wetCloths.DOFade(0, 1.3f).SetDelay(2.2f);

                try
                {
                    Statics.GA_CustomStringEvent("Lvl" + GameManager.instance.currentLevelNo
                        + "_" + levelName + "_Step3_Comp");
                }
                catch { }
            });
    }

    void ForceCompleteStep2()
    {
        ForceCompleteStep1();

        drawerObj.SetActive(false);
        surfObj.SetActive(false);

        machineTimer.enabled = true;
        machineTimerIndication.SetActive(true);
        machineTimerRotater.enabled = true;
        machineTimerRotater.canDrag = true;

        Vector3 targetPos = (ZoomStep2 != null && ZoomStep2.CameraPos != Vector3.zero) 
            ? ZoomStep2.CameraPos 
            : new Vector3(0f, 0.9f, -10f);
        float targetFov = (ZoomStep2 != null && ZoomStep2.CameraFOV > 0) 
            ? ZoomStep2.CameraFOV 
            : 3.5f;

        CameraController.Instance.MoveCamera(targetPos, targetFov, 0.01f);
    }

    void ForceCompleteStep3()
    {
        machineTimerRotater.enabled = false;
        machineTimerRotater.canDrag = false;
        ToolStep2.gameObject.SetActive(false);

        machineDoor.SetActive(false);
        machineGlass.SetActive(true);

        clothCleanInside.DOKill();
        clothCleanInside.DOFade(1, 0f);

        clothCleanInsideAnim.DOKill();
        clothCleanInsideAnim.DOFade(1, 0f).OnComplete(() =>
        {
            clothCleanInsideAnim.transform.DOKill();
            clothCleanInsideAnim.transform.DOLocalMoveY(-2, 0).OnComplete(() =>
            {
                OpenDoor();
            });
        });

        wetCloths.DOKill();
        wetCloths.DOFade(0, 0);
    }

    bool doorOpened;

    public void OpenDoor()
    {
        if (doorOpened)
            return;

        AudioController.instance.PlayAnySfx(0, doorOpenSfx, 0f);

        doorOpened = true;
        machineDoor.SetActive(true);
        machineGlass.SetActive(false);
        clothCleanInside.gameObject.SetActive(false);
        clothCleanInside2.gameObject.SetActive(true);

        // Smoothly move camera down to frame the open machine drum and clean basket
        Vector3 targetPos = new Vector3(-0.15f, -0.9f, -10f);
        float targetFov = 3.8f;
        CameraController.Instance.MoveCamera(targetPos, targetFov, 1.2f, Ease.InOutSine);

        Basket_Cloth.SetActive(true);

        Basket_Cloth.transform.DOKill();
        Basket_Cloth.transform.DOLocalMoveX(0f, .6f).SetEase(Ease.OutQuad).SetDelay(.3f).OnComplete(() =>
        {
            clothBasketTarget2.SetActive(true);

            clothCleanInside2.OnMouseDownEvent += OnCleanClothPicked;

            ToolInputToggle(clothCleanInside2.gameObject, true);

            // Align camera follow to the exact same values so touching the cloth never jerks the camera
            if (clothCleanInside2Cam != null)
            {
                clothCleanInside2Cam.FOV = targetFov;
                clothCleanInside2Cam.X_L = targetPos.x;
                clothCleanInside2Cam.X_R = targetPos.x;
                clothCleanInside2Cam.Y_L = targetPos.y;
                clothCleanInside2Cam.Y_H = targetPos.y;
                clothCleanInside2Cam.enabled = false; // Keep follow disabled; camera is already perfectly framed
            }

            clothCleanInside2.GetComponent<SpriteRenderer>().sortingOrder = 26;
            clothCleanInside2.startOrder = 26;
        });
    }

    // Lift it above everything while dragging, same idea as OnClothPicked in step 1.
    void OnCleanClothPicked()
    {
        clothCleanInside2.GetComponent<SpriteRenderer>().sortingOrder = 100;
    }

    // Called by the clean cloth's PlaceItem OnPlaced once it's dropped into the basket.
    public void CallStep3()
    {
        clothBasketTarget2.SetActive(true);

        if (clothCleanInside2Cam != null)
            clothCleanInside2Cam.enabled = false;

        clothCleanInside2.OnMouseDownEvent -= OnCleanClothPicked;

        // sits between Bin_Back (25) and Bin_Front (27) so it reads as inside the basket
        clothCleanInside2.transform.DOKill();
        clothCleanInside2.transform.DOScale(0.395f, 0.3f).SetEase(Ease.OutBack);

        clothCleanInside2.GetComponent<SpriteRenderer>().sortingOrder = 26;

        UI_Manager.instance.SetProgressBar(1f);
        DOVirtual.DelayedCall(1f, () =>
        {
            UI_Manager.instance.SetProgressBarPos();
        });


       

        Invoke(nameof(LevelComplete), .5f);

        CameraController.Instance.MoveCamera(ZoomStep1.CameraPos, ZoomStep1.CameraFOV, 1.2f, Ease.InOutSine);

        try
        {
            Statics.GA_CustomStringEvent("Lvl" + GameManager.instance.currentLevelNo
                + "_" + levelName + "_Step4_Comp");
        }
        catch { }
    }

    IEnumerator StartCountDown()
    {
        float initialTime = countDown;

        while (countDown > 0)
        {
            countDownTimerText.text = countDown.ToString("00");

            float progress = 1f - (countDown / initialTime);
            UI_Manager.instance.SetProgressBar(progress);

            yield return new WaitForSeconds(1f);

            if (AudioController.instance)
                AudioController.instance.PlaySfx(0, 2, 0);

            countDown--;
        }

        countDownTimerText.text = "00";
        UI_Manager.instance.SetProgressBar(1);
        Debug.Log("Countdown Finished!");
    }

    #endregion
}