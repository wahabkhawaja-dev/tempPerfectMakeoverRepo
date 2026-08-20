using UnityEngine;
using DG.Tweening;
using UnityEngine.Events;

public class Lvl3_InsectKill : MonoBehaviour
{
    [Space()]
    public GameObject[] targets;

    [Space()]
    public float fallSpeed = 1f;

    [Space()]
    public int totalTargets;
    public int killCount;

    [Space()]
    public AudioClip bugKillSfx;

    [Space()]
    public UnityEvent OnComplete;

    bool completed;


    void Start()
    {
        totalTargets = targets != null ? targets.Length : 0;

        if (totalTargets == 0)
        {
            completed = true;
            OnComplete?.Invoke();
        }
    }


    void OnTriggerEnter2D(Collider2D collision)
    {
        if (completed)
        {
            return;
        }

        for (int i = 0; i < targets.Length; i++)
        {
            GameObject target = targets[i];

            if (target == null)
            {
                continue;
            }

            // Check if the collider belongs to this target
            if (collision.gameObject == target ||
                collision.transform.IsChildOf(target.transform))
            {
                KillTarget(target);
                break;
            }
        }
    }


    void KillTarget(GameObject target)
    {
        // Prevent the same target from being killed twice
        Collider2D[] colliders = target.GetComponentsInChildren<Collider2D>();

        foreach (Collider2D col in colliders)
        {
            col.enabled = false;
        }


        // Disable outline
        try
        {
            SpriteRenderer pulse = null;

            if (target.transform.childCount > 0)
            {
                target.transform
                    .GetChild(0)
                    .TryGetComponent<SpriteRenderer>(out pulse);
            }

            if (pulse != null)
            {
                pulse.material = GameManager.instance.DefaultMat;

                pulse.DOKill();
                pulse.DOFade(0, 1f).SetDelay(1f);
            }
        }
        catch
        {
        }

        // STOP DOTWEEN PATH
        try
        {
            DOTweenPath path = target.GetComponent<DOTweenPath>();

            if (path != null)
            {
                // Kill the tween created by DOTweenPath
                path.DOKill();

                // Also kill any tweens on the target transform
                target.transform.DOKill();

                // Disable the path component
                path.enabled = false;
            }
        }
        catch
        {
            // Fallback: make absolutely sure no tween remains
            target.transform.DOKill();
        }


        // Kill SFX
        if (bugKillSfx != null && AudioController.instance != null)
        {
            AudioController.instance.PlayAnySfx(0, bugKillSfx, 0);
        }


        // Kill any existing tweens on the insect
        target.transform.DOKill();


        // Create kill animation
        Sequence killSequence = DOTween.Sequence();

        Vector3 startPosition = target.transform.localPosition;

        // Jump upward
        killSequence.Append(
            target.transform
                .DOLocalMoveY(startPosition.y + 1f, fallSpeed * 0.3f)
                .SetEase(Ease.OutQuad)
        );

        // Fall downward
        killSequence.Append(
            target.transform
                .DOLocalMove(
                    new Vector3(
                        startPosition.x,
                        -10f,
                        startPosition.z
                    ),
                    fallSpeed * 0.7f
                )
                .SetEase(Ease.InQuad)
        );


        // Update count immediately
        killCount++;

        float progress = totalTargets > 0
            ? (float)killCount / totalTargets
            : 1f;

        if (UI_Manager.instance != null)
        {
            UI_Manager.instance.SetProgressBar(progress);
        }


        // Complete
        if (killCount >= totalTargets)
        {
            completed = true;

            OnComplete?.Invoke();
        }
    }
}
