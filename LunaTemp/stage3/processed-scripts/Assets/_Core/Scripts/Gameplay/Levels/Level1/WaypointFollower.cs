using UnityEngine;

public class WaypointFollower : MonoBehaviour
{
    [Header("Waypoints")]
    [Tooltip("Array of waypoints to follow in order")]
    public Transform[] waypoints;

    [Header("Movement Settings")]
    [Tooltip("Movement speed of the object")]
    public float speed = 2f;

    [Tooltip("How fast the object rotates on Z-axis (higher = faster rotation)")]
    public float rotationSpeed = 8f;

    [Tooltip("If true, after last waypoint it will go back to first (Circular Loop)")]
    public bool loop = true;

    [Tooltip("If true AND loop is true → Back & Forth patrol (4→3→2→1→0→1→2...)")]
    public bool reverse = false;   // ← Naya bool add kiya

    private int currentIndex = 0;
    private bool movingForward = true;   // Sirf reverse mode ke liye use hoga

    public bool canMove = false;
    public AudioSource movingSfx;

    private void Update()
    {
        if (waypoints == null || waypoints.Length == 0 || !canMove)
            return;

        MoveAlongWaypoints();
    }

    private void MoveAlongWaypoints()
    {
        Transform target = waypoints[currentIndex];
        if (target == null) return;

        // Move towards current waypoint
        transform.position = Vector3.MoveTowards(transform.position, target.position, speed * Time.deltaTime);

        // === 2D ROTATION ON Z-AXIS ONLY ===
        Vector3 direction = target.position - transform.position;

        if (direction.sqrMagnitude > 0.001f)
        {
            float targetAngle = Mathf.Atan2(direction.y, direction.x) * Mathf.Rad2Deg;
            Quaternion targetRotation = Quaternion.Euler(0f, 0f, targetAngle);
            transform.rotation = Quaternion.Slerp(transform.rotation, targetRotation, rotationSpeed * Time.deltaTime);
        }

        // Check if reached waypoint
        if (Vector3.Distance(transform.position, target.position) < 0.02f)
        {
            // === NEXT WAYPOINT LOGIC ===
            if (movingForward)
            {
                currentIndex++;
            }
            else
            {
                currentIndex--;
            }

            // Circular Loop (normal)
            if (currentIndex >= waypoints.Length)
            {
                if (loop && reverse)
                {
                    movingForward = false;
                    currentIndex = waypoints.Length - 2;   // reverse direction
                }
                else if (loop)
                {
                    currentIndex = 0;                      // last → directly first
                }
                else
                {
                    canMove = false;
                    if (movingSfx != null) movingSfx.Stop();
                    enabled = false;
                    return;
                }
            }
            else if (currentIndex < 0)
            {
                if (loop && reverse)
                {
                    movingForward = true;
                    currentIndex = 1;                      // reverse direction
                }
                else
                {
                    canMove = false;
                    if (movingSfx != null) movingSfx.Stop();
                    enabled = false;
                    return;
                }
            }
        }
    }

    public void MoveItem(bool toggle)
    {
        canMove = toggle;
        if (toggle)
        {
            if (movingSfx != null) movingSfx.Play();
        }
        else
        {
            if (movingSfx != null) movingSfx.Stop();
        }
    }

    // === GIZMOS ===
    private void OnDrawGizmos()
    {
        if (waypoints == null || waypoints.Length == 0) return;

        Gizmos.color = Color.cyan;
        for (int i = 0; i < waypoints.Length; i++)
        {
            if (waypoints[i] == null) continue;
            Gizmos.DrawSphere(waypoints[i].position, 0.05f);

            if (i < waypoints.Length - 1 && waypoints[i + 1] != null)
            {
                Gizmos.DrawLine(waypoints[i].position, waypoints[i + 1].position);
            }
        }

        if (loop && waypoints.Length > 1 && waypoints[waypoints.Length - 1] != null && waypoints[0] != null)
        {
            Gizmos.color = Color.yellow;
            Gizmos.DrawLine(waypoints[waypoints.Length - 1].position, waypoints[0].position);
        }
    }
}