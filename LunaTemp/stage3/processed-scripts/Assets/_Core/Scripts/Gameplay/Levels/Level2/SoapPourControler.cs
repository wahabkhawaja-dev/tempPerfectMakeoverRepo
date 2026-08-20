using DG.Tweening;
using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.Events;

public class SoapPourControler : MonoBehaviour
{
    [Header("Tool Settings")]
    [SerializeField] private BasicDrag thisTool;
    [SerializeField] private Collider2D targetCol;

    [Header("Drop Settings")]
    [SerializeField] private GameObject soapDropPrefab;
    [SerializeField] private Transform spawnPoint;
    [SerializeField] private float spawnInterval = 0.3f;
    [SerializeField] private int maxDrops = 3;

    [Header("Bottle Visuals")]
    [SerializeField] private SpriteRenderer bottleRenderer;
    [SerializeField] private Sprite fullBottleSprite;
    [SerializeField] private Sprite halfBottleSprite;
    [SerializeField] private Sprite emptyBottleSprite;

    [SerializeField] private SpriteRenderer foamRend;

    [Header("Events")]
    public UnityEvent OnProgressComplete;
    public UnityEvent OnStepComplete;

    [Header("Audio")]
    public AudioClip sfxDrop;

    private Coroutine pourCoroutine;
    public bool isInsideTarget = false;
    public bool isPicked = false; // Mouse hold track karne ke liye
    private int currentDropsCount = 0;

    private bool isProgressDone = false;
    private bool isStepDone = false;

    private void Awake()
    {
        if (thisTool != null)
        {
            thisTool.OnMouseDownEvent += OnPicked;
            thisTool.OnMouseUpEvent += OnReleased;
        }
    }

    private void Start()
    {
        UpdateBottleVisual();
        // Foam ko shuru mein invisible rakhne ke liye (agar zarurat ho)
        // foamRend.color = new Color(foamRend.color.r, foamRend.color.g, foamRend.color.b, 0f);
    }

    private void OnDisable()
    {
        if (thisTool != null)
        {
            thisTool.OnMouseDownEvent -= OnPicked;
            thisTool.OnMouseUpEvent -= OnReleased;
        }
    }

    private void OnTriggerEnter2D(Collider2D other)
    {
        if (other == targetCol)
        {
            isInsideTarget = true;
            // Agar pehle se pick kia hua hai aur enter hua to pouring shuru
            TryStartPouring();
        }
    }

    private void OnTriggerExit2D(Collider2D other)
    {
        if (other == targetCol)
        {
            isInsideTarget = false;
            StopPouring();
        }
    }

    private void OnPicked()
    {
        isPicked = true;
        // Agar pehle se collider ke andar hai aur pick kia to pouring shuru
        TryStartPouring();
    }

    private void OnReleased()
    {
        isPicked = false;
        StopPouring();

        // Step Complete logic: Drops khatam aur bottle chorr di
        if (currentDropsCount >= maxDrops && !isStepDone)
        {
            isStepDone = true;
            OnStepComplete?.Invoke();
            Debug.Log("Step Complete: All poured and released.");
        }
    }

    private void TryStartPouring()
    {
        // Condition: Inside target AND mouse held AND drops remaining
        if (isInsideTarget && isPicked && currentDropsCount < maxDrops)
        {
            if (pourCoroutine == null)
            {
                pourCoroutine = StartCoroutine(PourSoapRoutine());
            }
        }
    }

    IEnumerator PourSoapRoutine()
    {
        // Jab tak dono conditions true hain tab tak chaly
        while (isInsideTarget && isPicked && currentDropsCount < maxDrops)
        {
            Instantiate(soapDropPrefab, spawnPoint.position, Quaternion.identity);

            currentDropsCount++;
            UpdateBottleVisual();

            // Progress Bar update
            float progress = (float)currentDropsCount / maxDrops;
            if (UI_Manager.instance != null)
            {
                UI_Manager.instance.SetProgressBar(progress);
            }

            // Progress Complete logic
            if (currentDropsCount >= maxDrops && !isProgressDone)
            {
                isProgressDone = true;
                OnProgressComplete?.Invoke();
                Debug.Log("Progress Complete: 3 drops done.");
            }

            {
                
            }
            if (sfxDrop != null) 
            {
                if (AudioController.instance)
                    AudioController.instance.PlayAnySfx(0, sfxDrop, 0);
            }

            yield return new WaitForSeconds(spawnInterval);
        }

        pourCoroutine = null;
    }

    private void UpdateBottleVisual()
    {
        if (bottleRenderer == null) return;

        if (currentDropsCount == 0)
        {
            bottleRenderer.sprite = fullBottleSprite;
        }
        else if (currentDropsCount > 0 && currentDropsCount < maxDrops)
        {
            bottleRenderer.sprite = halfBottleSprite;
            // Foam thora sa zahir hoga
            foamRend.DOFade(0.25f, 2f);
        }
        else if (currentDropsCount >= maxDrops)
        {
            bottleRenderer.sprite = emptyBottleSprite;
            // Foam mukammal zahir hoga
            foamRend.DOFade(1f, 3f);
        }
    }

    private void StopPouring()
    {
        if (pourCoroutine != null)
        {
            StopCoroutine(pourCoroutine);
            pourCoroutine = null;
        }
    }
}
