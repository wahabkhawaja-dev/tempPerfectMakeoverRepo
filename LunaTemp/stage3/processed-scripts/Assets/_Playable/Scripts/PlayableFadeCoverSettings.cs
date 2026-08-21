using UnityEngine;

/// <summary>
/// Inspector knob for PlayableFadeCover's reveal timing. Drop on the same GameObject as
/// PlayableCTA (the built prefab's root already has one) and tune per playable — some
/// levels need a longer hold before the fade lifts if the step's entrance tween (tool
/// sliding in, camera move, etc.) takes a while to read as "in place".
/// </summary>
public class PlayableFadeCoverSettings : MonoBehaviour
{
    [Tooltip("Seconds the screen stays fully covered after StartStepN fires, before the fade-out begins.")]
    public float revealDelay = 0.15f;

    [Tooltip("Seconds the fade-out itself takes once it starts.")]
    public float revealDuration = 0.5f;

    public static PlayableFadeCoverSettings Active { get; private set; }

    void OnEnable()
    {
        Active = this;
    }

    void OnDisable()
    {
        if (Active == this)
            Active = null;
    }
}
