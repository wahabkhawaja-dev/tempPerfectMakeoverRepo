using System.Collections;
using UnityEngine;
using UnityEngine.Events;

public class AcidPourController : MonoBehaviour
{
    [Header("Tool")]
    [SerializeField] private BasicDrag thisTool;

    [Header("Pour Stream (shown only once the bottle finishes rotating on pick)")]
    [SerializeField] private SpriteRenderer acidPourVisual;
    [SerializeField] private ParticleSystem acidPourParticles;
    [SerializeField] private float showDelay = 0.25f; // matches BasicDrag's canRotateOnPick tween duration

    [Header("Jar Fill")]
    [SerializeField] private Transform waterInJar;

    [SerializeField] private float pourDuration = 3f;

    [Header("Events")]
    [SerializeField] private UnityEvent onPourComplete;

    private float waterDefaultY;
    private float currentProgress = 0f;
    private bool isCompleted = false;
    private bool isFillComplete = false;

    private Coroutine showRoutine;
    private Coroutine fillRoutine;

    private void Awake()
    {
        if (thisTool != null)
        {
            thisTool.OnMouseDownEvent += OnPicked;
            thisTool.OnMouseUpEvent += OnReleased;
        }
    }

    private void OnDisable()
    {
        if (thisTool != null)
        {
            thisTool.OnMouseDownEvent -= OnPicked;
            thisTool.OnMouseUpEvent -= OnReleased;
        }
    }

    private void Start()
    {
        if (waterInJar != null)
            waterDefaultY = waterInJar.localPosition.y;

        if (acidPourVisual != null)
            acidPourVisual.enabled = false;

        acidPourParticles.Stop();
    }

    private void OnPicked()
    {
        if (isCompleted)
            return;

        if (showRoutine != null)
            StopCoroutine(showRoutine);

        showRoutine = StartCoroutine(ShowAfterRotate());
    }

    private IEnumerator ShowAfterRotate()
    {
        yield return new WaitForSeconds(showDelay);

        if (acidPourVisual != null)
            acidPourVisual.enabled = true;

        acidPourParticles.Play();

        if (fillRoutine != null)
            StopCoroutine(fillRoutine);

        fillRoutine = StartCoroutine(FillRoutine());
    }

    private void OnReleased()
    {
        acidPourParticles.Stop();

        if (showRoutine != null)
        {
            StopCoroutine(showRoutine);
            showRoutine = null;
        }

        if (fillRoutine != null)
        {
            StopCoroutine(fillRoutine);
            fillRoutine = null;
        }

        // Only finish the step once the fill is full AND the tool has been let go
        if (isFillComplete)
        {
            CompletePour();
            return;
        }

        if (acidPourVisual != null)
            acidPourVisual.enabled = false;

       
    }

    private IEnumerator FillRoutine()
    {
        float timer = currentProgress * pourDuration;

        while (timer < pourDuration)
        {
            timer += Time.deltaTime;
            currentProgress = Mathf.Clamp01(timer / pourDuration);

            UpdateWaterVisual();
            UI_Manager.instance.SetProgressBar(currentProgress);

            if (currentProgress >= 1f)
            {
                isFillComplete = true;
                yield break;
            }

            yield return null;
        }

        currentProgress = 1f;
        UpdateWaterVisual();
        isFillComplete = true;
    }

    private void UpdateWaterVisual()
    {
        if (waterInJar == null)
            return;

        Vector3 p = waterInJar.localPosition;
        p.y = Mathf.Lerp(waterDefaultY, 0f, currentProgress);
        waterInJar.localPosition = p;
    }

    private void CompletePour()
    {
        isCompleted = true;

        if (acidPourVisual != null)
            acidPourVisual.enabled = false;

        acidPourParticles.Stop();

        onPourComplete?.Invoke();
    }
}
