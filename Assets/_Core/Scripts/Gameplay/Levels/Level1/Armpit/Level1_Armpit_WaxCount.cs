using UnityEngine;
using DG.Tweening;
using System.Collections.Generic;

public class Level1_Armpit_WaxCount : MonoBehaviour
{
    [Header("Wax Counting Settings")]
    public int waxCount = 0;
    public int waxTotal = 0;

    [Header("Target Objects")]
    public List<GameObject> targetWaxObjects = new List<GameObject>(); // Yahan saare hair/wax objects daal do

    HashSet<GameObject> triggeredObjects = new HashSet<GameObject>(); // Duplicate counting se bachne ke liye

    [Space()]
    public JarRotator rotator;

    [Space()]
    public bool vibration = false;
    public float delayInVibration = 0f;

    [Header("SFX")]
    public AudioClip[] waxDropSfx;
    void Start()
    {
        // Auto calculate total agar list mein objects hain
        if (waxTotal == 0 && targetWaxObjects.Count > 0)
        {
            waxTotal = targetWaxObjects.Count;
        }

        waxCount = 0;
    }

    private void OnTriggerEnter2D(Collider2D collision)
    {
        // Check karo ke jo object trigger hua woh hamari target list mein hai ya nahi
        if (targetWaxObjects.Contains(collision.gameObject))
        {
            // Agar pehle se count nahi hua to hi count karo (duplicate prevent)
            if (!triggeredObjects.Contains(collision.gameObject))
            {
                triggeredObjects.Add(collision.gameObject);

                waxCount++;

                float progress = (float)waxCount / waxTotal;

                UI_Manager.instance.SetProgressBar(progress);

                try
                {
                    AudioController.instance.PlayAnySfx(Random.Range(0, 3), waxDropSfx[Random.Range(0, waxDropSfx.Length)], delayInVibration);
                }
                catch 
                {
                }

                // Agar saare complete ho gaye to event call karo
                if (waxCount >= waxTotal)
                {
                    rotator.completed = true;
                    DOVirtual.DelayedCall(0.5f, () =>
                    {
                        rotator.Complete();
                        Debug.Log("✅ All Wax Done! ");
                    });

                }
            }
        }
    }

}
