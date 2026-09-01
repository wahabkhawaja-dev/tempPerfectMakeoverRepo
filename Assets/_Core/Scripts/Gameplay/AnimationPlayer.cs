using UnityEngine;

public class AnimationPlayer : MonoBehaviour
{
    [Space()]
    public Animator anim;

    [Header("Speed")]
    public float forwardSpeed = 2f; // speed multiplier
    public float reverseSpeed = 2f; // speed multiplier

    float targetSpeed = 0f;
    bool canPlay = false;

    void Start()
    {
        if (anim != null && anim.gameObject.activeInHierarchy)
        {
            anim.Play(anim.GetCurrentAnimatorStateInfo(0).fullPathHash, 0, 0f);
            anim.Update(0f);
            anim.speed = 0.001f; // Luna doesn't tick Update() at speed 0; kept ~frozen, manually scrubbed via Play()
        }
    }

    public void PlayAnim()
    {
        targetSpeed = forwardSpeed; // play forward

        canPlay = true;

        Debug.Log("PlayAnim called, targetSpeed set to " + targetSpeed);
    }

    public void ReverseAnim()
    {
        targetSpeed = -reverseSpeed; // play backward

        canPlay = true;

        Debug.Log("ReverseAnim called, targetSpeed set to " + targetSpeed);
    }

    void Update()
    {
        if (anim == null || !anim.gameObject.activeInHierarchy)
            return;

        if (!canPlay)
            return;

        AnimatorStateInfo state = anim.GetCurrentAnimatorStateInfo(0);
        float currentTime = state.normalizedTime;

        // Step animation manually
        if (targetSpeed != 0f)
        {
            float delta = targetSpeed * Time.deltaTime;
            float newTime = currentTime + delta;

            // Clamp between 0 and 1
            if (newTime >= 1f)
            {
                newTime = 1f;
                targetSpeed = 0f; // stop at end

                canPlay = false;
            }

            else if (newTime <= 0f)
            {
                newTime = 0f;
                targetSpeed = 0f; // stop at start

                canPlay = false;
            }

            anim.Play(state.fullPathHash, 0, newTime);
            anim.Update(Time.deltaTime);
        }
    }
}
