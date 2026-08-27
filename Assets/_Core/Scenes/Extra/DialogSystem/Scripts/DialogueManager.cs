using DG.Tweening;
using System.Collections;
using System.Collections.Generic;
using UnityEngine.UI;
using UnityEngine;
using UnityEngine.UI;

[System.Serializable]
public enum ChatSide { Left, Right }

[System.Serializable]
public class DialogueEntry
{
    public string characterName;
    public GameObject avatarPrefab; // Ab yahan wo emotion wala GameObject/Prefab aayega
    [TextArea(3, 10)]
    public string message;
    public ChatSide side;
}

public class DialogueManager : MonoBehaviour
{
    [Header("Prefabs")]
    public GameObject leftBubblePrefab;  // Left side wala prefab
    public GameObject rightBubblePrefab; // Right side wala prefab

    [Header("UI References")]
    public Transform contentTransform;
    public ScrollRect scrollRect;
    public Text tapToContinue;

    [Header("Dialogue Data")]
    public List<DialogueEntry> dialogues;


    private int currentIndex = 0;

    [SerializeField] bool isCompleted;

    float m_LastPressTime;
    float m_PressDelay = 1f;

    void Start()
    {
       // ShowNextDialogue();
    }

    void Update()
    {
        if (isCompleted)
            return;


        if (Input.GetMouseButtonDown(0))
        {

            if (m_LastPressTime + m_PressDelay > Time.unscaledTime)
                return;

            m_LastPressTime = Time.unscaledTime;
            ShowNextDialogue();

        }
    }

    public void ShowNextDialogue()
    {
        if (currentIndex < dialogues.Count)
        {
            DialogueEntry currentEntry = dialogues[currentIndex];
            GameObject prefabToSpawn;

            // Check karna ke kaunsa prefab use karna hai
            if (currentEntry.side == ChatSide.Left)
                prefabToSpawn = leftBubblePrefab;
            else
                prefabToSpawn = rightBubblePrefab;

            // Spawn karna
            GameObject newBubble = Instantiate(prefabToSpawn, contentTransform);

            // Data set karna
            ChatBubbleUI bubbleUI = newBubble.GetComponent<ChatBubbleUI>();
            bubbleUI.Setup(currentEntry);

            currentIndex++;
            StartCoroutine(ScrollToBottom());



            if (currentIndex == dialogues.Count)
            {
                isCompleted = true;
                tapToContinue.gameObject.SetActive(false);
            }
            else
            {
                ShowTapToContinue();
            }
        }
        else 
        {
            Debug.LogError("Setup Dialogs Frist");
        }
    }

    void ShowTapToContinue()
    {
        tapToContinue.gameObject.SetActive(false);
        DOVirtual.DelayedCall(1f, () =>
        {
            tapToContinue.gameObject.SetActive(true);
        });
    }

    IEnumerator ScrollToBottom()
    {
        yield return new WaitForEndOfFrame();
        // Canvas.ForceUpdateCanvases(); // Kabhi kabhi iski zaroorat parti hai layout update ke liye
        // scrollRect.verticalNormalizedPosition = 0f;
        scrollRect.DOVerticalNormalizedPos(0f, 0.2f);
    }

}
