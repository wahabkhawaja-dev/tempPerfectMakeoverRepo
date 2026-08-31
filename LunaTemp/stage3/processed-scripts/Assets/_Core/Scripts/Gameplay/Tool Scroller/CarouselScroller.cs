using UnityEngine;
using UnityEngine.UI;
using System.Collections;
using System.Collections.Generic;

public class CarouselScroller : MonoBehaviour
{
    public GameObject itemPrefab;
    public Vector3 leftPosition = new Vector3(-250f, 0f, 0f);
    public Vector3 centerPosition = new Vector3(0f, 0f, 0f);
    public Vector3 rightPosition = new Vector3(250f, 0f, 0f);

    public Vector3 smallScale = new Vector3(0.7f, 0.7f, 1f);
    public Vector3 largeScale = new Vector3(1.1f, 1.1f, 1.1f);

    public float animationDuration = 0.4f;

    private List<Sprite> toolSprites = new List<Sprite>();
    private GameObject[] items = new GameObject[4];
    private scroller_Item[] itemScripts = new scroller_Item[4];

    public int currentIndex = 0;
    private bool isAnimating = false;

    public GameObject CenterItemObj => items[1];

    public void InitCarousel(List<Sprite> sprites)
    {
        toolSprites = sprites;
        currentIndex = 0;

        foreach (Transform child in transform)
        {
            Destroy(child.gameObject);
        }

        for (int i = 0; i < 4; i++)
        {
            items[i] = Instantiate(itemPrefab, transform);
            itemScripts[i] = items[i].GetComponentInChildren<scroller_Item>();
            itemScripts[i].tick.SetActive(false);
        }

        SetupInitialPositions();
        UpdateAllItemData(true);
        UpdateEdgeVisibility();
    }

    private void SetupInitialPositions()
    {
        items[0].transform.localPosition = leftPosition;
        items[1].transform.localPosition = centerPosition;
        items[2].transform.localPosition = rightPosition;
        items[3].transform.localPosition = rightPosition + new Vector3(150f, 0f, 0f);

        items[0].transform.localScale = smallScale;
        items[1].transform.localScale = largeScale;
        items[2].transform.localScale = smallScale;
        items[3].transform.localScale = smallScale;

        // Background Alphas Set Karein
        SetItemAlphaState(itemScripts[0], 0, 1, 0); // Left
        SetItemAlphaState(itemScripts[1], 1, 0, 0); // Center
        SetItemAlphaState(itemScripts[2], 0, 0, 1); // Right
        SetItemAlphaState(itemScripts[3], 0, 0, 1); // Buffer

        // CanvasGroup Alphas Set Karein (Recycle hone par 0,1,2 hamesha 1 rahen)
        itemScripts[0].can_group.alpha = 1f;
        itemScripts[1].can_group.alpha = 1f;
        itemScripts[2].can_group.alpha = 1f;
        itemScripts[3].can_group.alpha = 0f; // Incoming item invisible se shuru hoga
    }

    private void SetItemAlphaState(scroller_Item item, float bgA, float fadeLA, float fadeRA)
    {
        if (item == null) return;
        SetAlpha(item.bg, bgA);
        SetAlpha(item.bg_fade_L, fadeLA);
        SetAlpha(item.bg_fade_R, fadeRA);
    }

    private void SetAlpha(Image img, float alpha)
    {
        if (img == null) return;
        Color c = img.color;
        c.a = alpha;
        img.color = c;
    }

    public void EnableCurrentTick()
    {
        if (itemScripts[1] != null && itemScripts[1].tick != null)
        {
            itemScripts[1].tick.SetActive(true);
        }
    }

    public void EnableCurrentTick1st()
    {
        if (itemScripts[0] != null && itemScripts[0].tick != null)
        {
            itemScripts[0].tick.SetActive(true);
        }
    }

    public void ScrollNext()
    {
        if (isAnimating || currentIndex >= toolSprites.Count - 1) return;
        StartCoroutine(Animate(1));
    }

    private IEnumerator Animate(int direction)
    {
        isAnimating = true;
        float time = 0f;
        Vector3 offScreenLeft = leftPosition + new Vector3(-200f, 0f, 0f);

        int incomingDataIndex = currentIndex + 2;
        SetItemData(3, incomingDataIndex, true);
        SetItemAlphaState(itemScripts[3], 0, 0, 1);

        // Incoming item starting alpha
        itemScripts[3].can_group.alpha = 0f;

        while (time < animationDuration)
        {
            time += Time.deltaTime;
            float t = Mathf.SmoothStep(0f, 1f, time / animationDuration);

            // Movement & Scale
            items[0].transform.localPosition = Vector3.Lerp(leftPosition, offScreenLeft, t);
            items[1].transform.localPosition = Vector3.Lerp(centerPosition, leftPosition, t);
            items[1].transform.localScale = Vector3.Lerp(largeScale, smallScale, t);
            items[2].transform.localPosition = Vector3.Lerp(rightPosition, centerPosition, t);
            items[2].transform.localScale = Vector3.Lerp(smallScale, largeScale, t);

            if (items[3].activeSelf)
            {
                items[3].transform.localPosition = Vector3.Lerp(rightPosition + new Vector3(150f, 0f, 0f), rightPosition, t);
                // --- CAN_GROUP FADE IN (Incoming) ---
                itemScripts[3].can_group.alpha = t;
            }

            // --- CAN_GROUP FADE OUT (Outgoing Left) ---
            itemScripts[0].can_group.alpha = 1 - (t*2);

            // --- BACKGROUNDS TRANSITIONS ---
            // Item 1: Center to Left
            SetAlpha(itemScripts[1].bg, 1 - t);
            SetAlpha(itemScripts[1].bg_fade_L, t);

            // Item 2: Right to Center
            SetAlpha(itemScripts[2].bg_fade_R, 1 - t);
            SetAlpha(itemScripts[2].bg, t);

            yield return null;
        }

        items.RotateLeft();
        itemScripts.RotateLeft();
        currentIndex++;

        SetupInitialPositions();
        UpdateAllItemData(false);
        UpdateEdgeVisibility();
        isAnimating = false;
    }

    private void UpdateAllItemData(bool resetAllTicks)
    {
        SetItemData(0, currentIndex - 1, resetAllTicks);
        SetItemData(1, currentIndex, resetAllTicks);
        SetItemData(2, currentIndex + 1, resetAllTicks);
    }

    private void SetItemData(int slotIndex, int dataIndex, bool resetTick)
    {
        if (dataIndex < 0 || dataIndex >= toolSprites.Count)
        {
            items[slotIndex].SetActive(false);
            return;
        }

        items[slotIndex].SetActive(true);
        if (itemScripts[slotIndex] != null)
        {
            itemScripts[slotIndex].icon.sprite = toolSprites[dataIndex];
            if (resetTick)
            {
                itemScripts[slotIndex].tick.SetActive(false);
            }
        }
    }

    private void UpdateEdgeVisibility()
    {
        items[0].SetActive(currentIndex > 0);
        items[2].SetActive(currentIndex < toolSprites.Count - 1);

        // Items inactive hain toh unki alpha ka masla nahi, 
        // par safe rehne ke liye SetupInitialPositions handle kar raha hai.
        items[3].SetActive(false);
    }
}
// ===== YE PART SAME FILE KE END MEIN HONA CHAHIYE =====
public static class ArrayExtensions
{
    public static void RotateLeft<T>(this T[] array)
    {
        if (array.Length <= 1) return;
        T temp = array[0];
        for (int i = 0; i < array.Length - 1; i++)
        {
            array[i] = array[i + 1];
        }
        array[array.Length - 1] = temp;
    }

    public static void RotateRight<T>(this T[] array)
    {
        if (array.Length <= 1) return;
        T temp = array[array.Length - 1];
        for (int i = array.Length - 1; i > 0; i--)
        {
            array[i] = array[i - 1];
        }
        array[0] = temp;
    }
}