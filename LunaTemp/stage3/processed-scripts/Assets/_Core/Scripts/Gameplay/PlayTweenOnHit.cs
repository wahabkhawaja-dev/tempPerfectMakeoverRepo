using DG.Tweening;
using UnityEngine;

[RequireComponent(typeof(DOTweenAnimation))]
public class PlayTweenOnHit : MonoBehaviour
{
    DOTweenAnimation anim;

    [Header("DOTWEEN COMPONENT REQUIRED")]
    [SerializeField] GameObject tipTarget;

    [Space]
    public bool isContinueous;
    public BasicDrag tool;
    public DOTweenAnimation[] animsToPlay;

    private bool isTouchingTarget = false;

    void Start()
    {
        anim = GetComponent<DOTweenAnimation>();

        if (isContinueous && tool != null)
        {
            // Mouse dabanay par play
            tool.OnMouseDownEvent += PlayAniamtions;
            // Mouse chorny par stop (Ensure karein ke BasicDrag mein ye event ho)
            tool.OnMouseUpEvent += StopAniamtions;
        }
    }

    void OnTriggerEnter2D(Collider2D collision)
    {
        if (collision.gameObject == tipTarget)
        {
            isTouchingTarget = true;

            if (!isContinueous)
            {
                anim.DORewind();
                anim.DOPlay();
            }
            else
            {
                // Agar drag karte hue andar aaye aur mouse already down hai
                PlayAniamtions();
            }
        }
    }

    void OnTriggerExit2D(Collider2D collision)
    {
        if (collision.gameObject == tipTarget)
        {
            isTouchingTarget = false;
            if (isContinueous)
            {
                StopAniamtions();
            }
        }
    }

    void PlayAniamtions()
    {
        // Animation sirf tab chaly jab tool target ke upar ho
        if (isContinueous && isTouchingTarget)
        {
            for (int i = 0; i < animsToPlay.Length; i++)
            {
                // Loop set karna zaroori hai agar continuous chahiye
                animsToPlay[i].tween.SetLoops(-1, animsToPlay[i].loopType);
                animsToPlay[i].DOPlay();
            }
        }
    }

    void StopAniamtions()
    {
        for (int i = 0; i < animsToPlay.Length; i++)
        {
            // Animation ko rewind karky pause kar dena behtar hai
            animsToPlay[i].DORewind();
            animsToPlay[i].DOPause();
        }
    }

    private void OnDisable()
    {
        if (isContinueous && tool != null)
        {
            tool.OnMouseDownEvent -= PlayAniamtions;
            tool.OnMouseUpEvent -= StopAniamtions;
        }
    }
}