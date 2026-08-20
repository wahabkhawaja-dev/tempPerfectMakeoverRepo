using UnityEngine;
using UnityEngine.Events;

/// <summary>
/// Goes on the lighter tip fire. Only the visible tip flame can light the candle,
/// not the lighter body. The candle itself is moved in by the level (View2).
/// </summary>
public class Lvl3_IgniteCandle : MonoBehaviour
{
    [Tooltip("The candle flame to light.")]
    public Lvl3_CandleFlame candle;

    [Tooltip("The visible lighter flame (CandleLightSoftRed). Ignite is measured from here.")]
    public Transform flamePoint;

    [Tooltip("How close the tip flame must get to the candle fire, in world units.")]
    public float reach = 0.28f;

    [Tooltip("How long the tip flame must stay on the wick before it catches.")]
    public float holdDuration = 1.2f;

    [Tooltip("A one-frame miss does not dump the hold.")]
    public float holdGrace = 0.15f;

    [Tooltip("Click when the lighter is pressed.")]
    public AudioClip clickClip;

    [Tooltip("Soft gas hiss while the tip flame is on.")]
    public AudioClip flameLoopClip;

    public UnityEvent OnIgnited;

    bool litStarted;
    bool completed;
    float hold;
    float offWickTime;
    BasicDrag drag;
    AudioSource flameLoop;

    void Awake()
    {
        drag = GetComponentInParent<BasicDrag>();
        flameLoop = GetComponent<AudioSource>();
        if (flameLoop == null)
            flameLoop = gameObject.AddComponent<AudioSource>();

        flameLoop.playOnAwake = false;
        flameLoop.loop = true;
        flameLoop.spatialBlend = 0f;

        if (flamePoint == null)
        {
            Transform child = transform.Find("CandleLightSoftRed");
            if (child != null)
                flamePoint = child;
        }
    }

    void OnEnable()
    {
        hold = 0f;
        offWickTime = 0f;

        if (drag != null)
            drag.OnMouseUpEvent += OnReleased;

        if (clickClip != null && AudioController.instance != null)
            AudioController.instance.PlayAnySfx(0, clickClip, 0f);

        if (flameLoopClip != null && flameLoop != null)
        {
            flameLoop.clip = flameLoopClip;
            flameLoop.volume = 0.55f;
            flameLoop.Play();
        }
    }

    void OnDisable()
    {
        hold = 0f;

        if (drag != null)
            drag.OnMouseUpEvent -= OnReleased;

        if (flameLoop != null && flameLoop.isPlaying)
            flameLoop.Stop();

        OnReleased();
    }

    void LateUpdate()
    {
        if (completed || litStarted || candle == null || candle.IsLit)
            return;

        Vector2 tip = flamePoint != null ? (Vector2)flamePoint.position : (Vector2)transform.position;
        Vector2 wick = candle.transform.position;
        bool onWick = Vector2.Distance(tip, wick) <= reach;

        if (!onWick)
        {
            offWickTime += Time.deltaTime;
            if (offWickTime >= holdGrace)
                hold = 0f;
            return;
        }

        offWickTime = 0f;
        hold += Time.deltaTime;

        if (hold < holdDuration)
            return;

        litStarted = true;
        hold = 0f;
        candle.Light();

        if (UI_Manager.instance != null)
            UI_Manager.instance.SetProgressBar(1);
    }

    void OnReleased()
    {
        if (completed)
            return;

        if (candle == null || !candle.IsLit)
            return;

        completed = true;
        OnIgnited?.Invoke();
    }
}
