using UnityEngine;
using UnityEngine.UI;

public class PageFoldController : MonoBehaviour
{
    [Header("Animation Settings")]
    public float duration = 2.0f; // Kitne seconds mein poster khulega
    public float delay = 0.5f;    // Shuru hone se pehle ka wait time

    [Header("Shader Values")]
    public float startProgress = -1.0f; // Poster chupa hua
    public float endProgress = 1.5f;    // Poster poora khula hua

    private Material posterMaterial;
    private float elapsedTime = 0f;
    private bool isAnimating = false;

    void Start()
    {
        // Image component se material nikalna
        Image img = GetComponent<Image>();
        if (img != null)
        {
            // ".material" use karne se original file kharab nahi hoti, 
            // balkay aik instance ban jata hai
            posterMaterial = img.material;

            // Shuru mein poster ko hide kar dena
            posterMaterial.SetFloat("_FoldProgress", startProgress);

            // Animation start karen
            StartAnimation();
        }
        else
        {
            Debug.LogError("Poster Image component nahi mila!");
        }
    }

    public void StartAnimation()
    {
        elapsedTime = 0f;
        isAnimating = true;
    }

    void Update()
    {
        if (isAnimating && posterMaterial != null)
        {
            if (elapsedTime < duration)
            {
                elapsedTime += Time.deltaTime;

                // 0 se 1 ke darmiyan percentage nikalna
                float lerpPct = elapsedTime / duration;

                // Progress value calculate karna (Smoothly -1 se 1.5 tak)
                float currentProgress = Mathf.Lerp(startProgress, endProgress, lerpPct);

                // Shader ki property update karna
                posterMaterial.SetFloat("_FoldProgress", currentProgress);
            }
            else
            {
                // Animation mukammal ho gayi
                posterMaterial.SetFloat("_FoldProgress", endProgress);
                isAnimating = false;
            }
        }
    }

    // Reset karne ke liye function (Optional)
    public void ResetPoster()
    {
        isAnimating = false;
        elapsedTime = 0f;
        posterMaterial.SetFloat("_FoldProgress", startProgress);
    }
}
