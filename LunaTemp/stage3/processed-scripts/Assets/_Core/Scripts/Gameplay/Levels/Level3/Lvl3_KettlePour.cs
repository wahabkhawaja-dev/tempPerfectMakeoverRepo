using UnityEngine;
using DG.Tweening;
using UnityEngine.Events;

public class Lvl3_KettlePour : MonoBehaviour
{
    [Space()]
    [Header("----------------- KETTLE ----------------------")]
    [Space()]
    public Transform Body;

    [Space()]
    public Transform BodyTarget;

    [Space()]
    public float PourRotZ = -49.2f;

    [Space()]
    public float RotateTime = .5f;

    [Header("----------------- POUR ----------------------")]
    [Space()]
    public GameObject Waterfall;

    [Space()]
    public ParticleSystem Shower;

    [Space()]
    public float FillTime = 4f;

    [Header("----------------- TRAY WATER ----------------------")]
    [Space()]
    public SpriteRenderer TrayWater;

    [Space()]
    public float WaterTargetScale = .4f;

    [Header("----------------- FLOWERS ----------------------")]
    [Space()]
    public Transform[] Flowers;

    [Space()]
    [Range(0f, 1f)]
    public float FlowersAtFill = .5f;

    [Header("----------------- PARTICLES ----------------------")]
    [Space()]
    public ParticleSystem SteamParticles;

    [Space()]
    [Range(0f, 1f)]
    public float ParticlesAtFill = .2f;

    [Header("----------------- COMPLETE ----------------------")]
    [Space()]
    public UnityEvent OnComplete;

    [Space()]
    [Space()]
    public float fillAmount = 0f;

    [Space()]
    public GameObject Indication;

    bool particleStarted;
    bool isHolding;
    bool isPouring;
    bool isDone;
    bool flowersFloating;

    float startRotZ;

    SpriteRenderer waterfallSR;
    Collider2D thisCollider;

    void Awake()
    {
        if (Body != null)
            startRotZ = SignedZ(Body.localEulerAngles.z);

        if (Waterfall != null)
            waterfallSR = Waterfall.GetComponent<SpriteRenderer>();

        thisCollider = GetComponent<Collider2D>();
    }

    void Start()
    {
        if (Waterfall != null)
            Waterfall.SetActive(false);

        // tray water starts empty
        if (TrayWater != null)
        {
            Color tempCo = TrayWater.color;
            tempCo.a = 0f;
            TrayWater.color = tempCo;

            TrayWater.transform.localScale = Vector3.zero;
        }
    }

    void Update()
    {
        if (Input.GetMouseButtonDown(0))
        {
            if (PointerInput.IsOverCollider(thisCollider))
                MouseDownPressed();
        }

        // finger lifted, whether still over the collider or not
        if (isHolding && !Input.GetMouseButton(0))
            MouseUpPressed();

        if (!isPouring || isDone)
            return;

        fillAmount = Mathf.Clamp01(fillAmount + Time.deltaTime / FillTime);

        ApplyFill();

        if (!flowersFloating && fillAmount >= FlowersAtFill)
            StartFlowerFloat();

        if (fillAmount >= ParticlesAtFill && !particleStarted)
        {
            particleStarted = true;

            SteamParticles.Play();
        }

        if (fillAmount >= 1f)
            Complete();

        else
            UI_Manager.instance.SetProgressBar(fillAmount);
    }

    #region INPUT

    void MouseDownPressed()
    {
        if (isDone)
            return;

        if (GameManager.instance.isOverUI())
            return;

        if (GameManager.instance.isPaused)
            return;

        isHolding = true;

        StartPour();
    }

    void MouseUpPressed()
    {
        if (!isHolding)
            return;

        isHolding = false;

        StopPour();
    }

    #endregion

    #region POUR

    void StartPour()
    {
        float target = BodyTarget != null ? SignedZ(BodyTarget.localEulerAngles.z) : PourRotZ;

        Body.DOKill();
        Body.DOLocalRotate(new Vector3(0f, 0f, target), RotateTime).SetEase(Ease.InOutSine).OnComplete(() =>
        {
            if (!isHolding || isDone)
                return;

            BeginStream();
        });

        

        if (Indication != null)
            Indication.SetActive(false);
    }

    void StopPour()
    {
        EndStream();

        if (isDone)
            return;

        Body.DOKill();
        Body.DOLocalRotate(new Vector3(0f, 0f, startRotZ), RotateTime).SetEase(Ease.InOutSine);
    }

    void BeginStream()
    {
        isPouring = true;

        if (Waterfall != null)
            Waterfall.SetActive(true);

        if (waterfallSR != null)
            waterfallSR.enabled = true;

        if (Shower != null)
            Shower.Play();
    }

    void EndStream()
    {
        isPouring = false;

        // cut the stream instantly, let the splash finish on its own
        if (waterfallSR != null)
            waterfallSR.enabled = false;

        if (Shower != null)
            Shower.Stop(true, ParticleSystemStopBehavior.StopEmitting);

        DOVirtual.DelayedCall(1f, () =>
        {
            if (!isPouring && Waterfall != null)
                Waterfall.SetActive(false);
        });
    }

    #endregion

    #region TRAY

    void ApplyFill()
    {
        if (TrayWater == null)
            return;

        Color tempCo = TrayWater.color;
        tempCo.a = fillAmount;
        TrayWater.color = tempCo;

        TrayWater.transform.localScale = Vector3.one * (WaterTargetScale * fillAmount);
    }

    void StartFlowerFloat()
    {
        flowersFloating = true;

        for (int i = 0; i < Flowers.Length; i++)
        {
            Transform flower = Flowers[i];

            if (flower == null)
                continue;

            Vector3 basePos = flower.localPosition;

            float dur = Random.Range(1.3f, 2.4f);
            float delay = Random.Range(0f, .8f);

            float offX = Random.Range(.06f, .18f) * (Random.value < .5f ? -1f : 1f);
            float offY = Random.Range(.05f, .14f) * (Random.value < .5f ? -1f : 1f);
            float rotZ = Random.Range(6f, 16f) * (Random.value < .5f ? -1f : 1f);

            flower.DOKill();

            flower.DOLocalMove(basePos + new Vector3(offX, offY, 0f), dur)
                  .SetEase(Ease.InOutSine)
                  .SetLoops(-1, LoopType.Yoyo)
                  .SetDelay(delay);

            flower.DOLocalRotate(new Vector3(0f, 0f, rotZ), dur * 1.35f)
                  .SetEase(Ease.InOutSine)
                  .SetLoops(-1, LoopType.Yoyo)
                  .SetDelay(delay * .5f);
        }
    }

    #endregion

    #region COMPLETE

    void Complete()
    {
        if (isDone)
            return;

        isDone = true;

        isHolding = false;

        EndStream();

        Body.DOKill();
        Body.DOLocalRotate(new Vector3(0f, 0f, startRotZ), RotateTime).SetEase(Ease.InOutSine);

        UI_Manager.instance.SetProgressBar(1f);

        if (OnComplete != null)
            OnComplete.Invoke();
    }

    #endregion

    #region HELPERS

    float SignedZ(float z)
    {
        if (z > 180f)
            z -= 360f;

        return z;
    }

    #endregion
}
