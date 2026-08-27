using UnityEngine.UI;
using System;
using UnityEngine;
using DG.Tweening;
using UnityEngine.UI;
using System.Collections;

public class Messages_Controller : MonoBehaviour
{
    [Header("UI Reference")]
    public Text messageText;
    public Text CharNameText;
    public Image CharImg;
    public Transform pivotBox;
    public GameObject nextBtn;
    public GameObject canvasMain;

    [Header("Settings")]
    public float displayDuration = 2.0f;
    public float typingSpeed = 0.03f; // Seconds per character

    private Coroutine typingCoroutine;


    [Header("Aniamtor")]
    public Animator chatBoxAnim;
    public Animator skipBtnAnim;

    public Action OnSkipPressed;
    public Action OnNextPresed;

    void Start()
    {
        // Initial state: hide the box and clear text
        if (messageText != null) messageText.text = "";
     
        pivotBox.gameObject.SetActive(false);
    }

    public void ShowMessage(string message, string CharName, Sprite avatar)
    {
        // 1. Stop any typing or scaling currently in progress
        if (typingCoroutine != null) StopCoroutine(typingCoroutine);
        pivotBox.DOKill();

        // 2. Setup initial state
        pivotBox.gameObject.SetActive(true);
        CharNameText.text = CharName;
        CharImg.sprite = avatar;
        messageText.text = ""; // Start empty every time

        // 3. Animate the box appearing

        typingCoroutine = StartCoroutine(TypeText(message));
    }

    IEnumerator TypeText(string fullMessage)
    {
        messageText.text = ""; // Ensure it's clear

        // Loop through each character
        foreach (char letter in fullMessage.ToCharArray())
        {
            messageText.text += letter;
            yield return new WaitForSeconds(typingSpeed);
        }

        typingCoroutine = null;

       
        nextBtn.SetActive(true);
    }

    public void HideMessage()
    {
        if (typingCoroutine != null) StopCoroutine(typingCoroutine);

        pivotBox.gameObject.SetActive(false);
        messageText.text = "";

        nextBtn.SetActive(false);

    }

    bool skipPressed = false;
    bool skipCompleted = false;
    public void OnSkip() 
    {
        if (skipCompleted)
            return; 


        if(!skipPressed)
        {
            skipPressed = true;
            skipBtnAnim.enabled = true;
            return;
        }

        skipCompleted = true;
        OnSkipPressed?.Invoke();
    }

    public void OnNextMsg() 
    {
        OnNextPresed?.Invoke();
        nextBtn.SetActive(false);
    }
}