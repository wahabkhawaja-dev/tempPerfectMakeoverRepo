using UnityEngine;

public class BD_Animator : MonoBehaviour
{
    [Space()]
    public BasicDrag BD;

    [Space()]
    public Animator anim;

    [Header("Reverse Settings")]
    public float reverseSpeed = 1f; // speed multiplier

    private float targetSpeed = 0f;

    void Start()
    {
        BD.OnMouseDownEvent += PlayAnim;
        BD.OnMouseUpEvent += ReverseAnim;

        if (anim != null)
        {
            anim.Play(anim.GetCurrentAnimatorStateInfo(0).fullPathHash, 0, 0f);
            anim.Update(0f);
            anim.speed = 0.001f; // Luna doesn't tick Update() at speed 0; kept ~frozen, manually scrubbed via Play()
        }
    }

    void PlayAnim()
    {
        targetSpeed = 1f; // play forward
    }

    void ReverseAnim()
    {
        targetSpeed = -reverseSpeed; // play backward
    }

    void Update()
    {
        if (anim == null) return;

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
            }
            else if (newTime <= 0f)
            {
                newTime = 0f;
                targetSpeed = 0f; // stop at start
            }

            anim.Play(state.fullPathHash, 0, newTime);
            anim.Update(Time.deltaTime);
        }
    }
}
