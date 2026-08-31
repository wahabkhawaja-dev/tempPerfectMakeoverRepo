using UnityEngine;

public class ClickParticleEffect : MonoBehaviour
{
    [Header("Particle Settings")]
    public ParticleSystem clickParticle;

    private Camera mainCam;

    void Start()
    {
        mainCam = Camera.main;

        if (clickParticle == null)
        {
            Debug.LogError("ClickParticleEffect: Please assign the ParticleSystem reference!");
        }
        else
        {
            clickParticle.Stop(true, ParticleSystemStopBehavior.StopEmittingAndClear);
        }
    }

    void Update()
    {
        // Mouse click
        if (Input.GetMouseButtonDown(0))
        {
            PlayParticleAtMouse();
        }
    }

    private void PlayParticleAtMouse()
    {
        PlayParticleAtPosition(Input.mousePosition);
    }

    private void PlayParticleAtPosition(Vector3 screenPosition)
    {
        if (clickParticle == null || mainCam == null) return;

        // Convert screen position to world position
        Vector3 worldPos = mainCam.ScreenToWorldPoint(screenPosition);

        // Adjust Z position based on camera type
        if (mainCam.orthographic)
        {
            worldPos.z = 0f;    
        }
        else
        {
            worldPos.z = mainCam.nearClipPlane + 0.5f; // For 3D cameras
        }

        clickParticle.transform.position = worldPos;
        clickParticle.Stop(true, ParticleSystemStopBehavior.StopEmittingAndClear);
        // Play the particle effect
        clickParticle.Play();

        if(AudioController.instance)
            AudioController.instance.PlayUiClickSfx();

            
    }
}
