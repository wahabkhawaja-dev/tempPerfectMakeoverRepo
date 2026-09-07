using UnityEngine;

public class Drop : MonoBehaviour
{
    private Vector2 targetPos;
    private bool isMoving = false;
    private float speed = 8f;

    public void MoveToTarget([Bridge.Ref] Vector2 target, float force)
    {
        targetPos = target;
        isMoving = true;
        speed = force;

        // Thoda upward force de sakte ho realistic feel ke liye
        Rigidbody2D rb = GetComponent<Rigidbody2D>();
        if (rb != null)
        {
            rb.velocity = new Vector2(0, force * 0.6f);
        }
    }

    void Update()
    {
        if (isMoving)
        {
            transform.position = Vector2.MoveTowards(
                transform.position,
                targetPos,
                speed * Time.deltaTime
            );

            if (Vector2.Distance(transform.position, targetPos) < 0.1f)
            {
                transform.position = targetPos;
                isMoving = false;
                // Yahan animation ya destroy kar sakte ho
                Destroy(gameObject, 1f); // 1 second baad destroy
            }
        }
    }
}