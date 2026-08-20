using UnityEngine;
using System.Collections.Generic;

public class BoneSwing : MonoBehaviour
{
    [Header("Bones")]
    public List<Transform> bones = new List<Transform>();

    [Header("Swing Settings")]
    public float swingAmplitude = 15f;   // Max angle
    public float swingSpeed = 1.5f;      // Speed of swinging
    public float boneDelay = 0.15f;      // Delay per bone (wave effect)

    [Header("Random Offset")]
    public bool useRandomOffset = true;
    private float randomOffset;

    [Header("Return Settings")]
    public float returnSpeed = 5f;       // How fast it stabilizes

    private List<Quaternion> initialRotations = new List<Quaternion>();

    void Awake()
    {
        // Auto-fill bones if empty
        if (bones.Count == 0)
        {
            foreach (Transform t in GetComponentsInChildren<Transform>())
            {
                if (t != transform)
                    bones.Add(t);
            }
        }

        // Store initial rotations
        initialRotations.Clear();
        foreach (var bone in bones)
        {
            initialRotations.Add(bone.localRotation);
        }

        // Random phase offset
        randomOffset = useRandomOffset ? Random.Range(0f, 100f) : 0f;
    }

    void Update()
    {
        float time = Time.time * swingSpeed + randomOffset;

        for (int i = 0; i < bones.Count; i++)
        {
            if (bones[i] == null) continue;

            // Wave effect along chain
            float phase = time - (i * boneDelay);

            float angle = Mathf.Sin(phase) * swingAmplitude;

            Quaternion targetRot = initialRotations[i] * Quaternion.Euler(0, 0, angle);

            // Smooth return + swing blend
            bones[i].localRotation = Quaternion.Slerp(
                bones[i].localRotation,
                targetRot,
                Time.deltaTime * returnSpeed
            );
        }
    }
}
