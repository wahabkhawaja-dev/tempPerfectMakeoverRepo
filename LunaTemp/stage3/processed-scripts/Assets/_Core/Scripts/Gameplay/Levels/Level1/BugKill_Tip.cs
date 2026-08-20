using DG.Tweening;
using UnityEngine;
using UnityEngine.Events;

public class BugKill_Tip : MonoBehaviour
{
    public GameObject[] targets;

    [Space()]
    public bool waypointFollower;
    [Space(5)]
    public float fallSpeed = 1f;

    [Space(5)]
    public int totalTargets;
    public int killCount;

    [Space(5)]
    public AudioClip bugKillSfx;


    [Space(5)]
    public UnityEvent OnComplete;

    bool completed;


    // Start is called before the first frame update
    void Start()
    {
        totalTargets = targets.Length;
    }

    private void OnTriggerEnter2D(Collider2D collision)
    {
        if (completed)
        {
            return;
        }

        foreach (GameObject target in targets)
        {
            if (target != null && collision.gameObject == target)
            {
                if (waypointFollower)
                {
                    WaypointFollower waypointFollower = target.GetComponent<WaypointFollower>();
                    waypointFollower.canMove = false;
                }

                OutlinePulse pulse;

                target.TryGetComponent<OutlinePulse>(out pulse);

                if (pulse)
                {
                    pulse.DisableAnim();
                }

                if (bugKillSfx)
                    AudioController.instance.PlayAnySfx(0, bugKillSfx, 0);

                target.transform.DOKill();
                target.transform.DOMoveY(-20f, fallSpeed);
                target.GetComponent<Collider2D>().enabled = false;
                killCount++;

                float progress = (float)killCount / totalTargets;
                UI_Manager.instance.SetProgressBar(progress);

                if (killCount >= totalTargets)
                {
                    completed = true;
                    OnComplete?.Invoke();
                }

                break;
            }
        }
    }
}
