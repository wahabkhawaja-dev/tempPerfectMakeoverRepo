using UnityEngine;

public class EnableScriptOnDistance : MonoBehaviour
{
    [Header("Target")]
    public Transform target;
    public float activationDistance = 3f;

    [Header("BD_Clamp Reference")]
    [Tooltip("The BD_Clamp component whose values will be changed")]
    public BD_Clamp bdClamp;

    [Header("New Clamp Values")]
    public float newClampX_L = -1.5f;
    public float newClampX_H = 1.5f;
    public float newClampY_L = -2f;
    public float newClampY_H = 2f;

    [Header("Options")]
    public bool onlyOnce = true;          // Change values only the first time
    public bool forceReassign = true;     // Force BasicDrag to update immediately

    private bool hasChanged = false;

    void Update()
    {
        if (hasChanged && onlyOnce) return;
        if (target == null || bdClamp == null) return;

        float distance = Vector2.Distance(transform.position, target.position);

        if (distance <= activationDistance)
        {
            // Change the clamp values
            bdClamp.ClampX_L = newClampX_L;
            bdClamp.ClampX_H = newClampX_H;
            bdClamp.ClampY_L = newClampY_L;
            bdClamp.ClampY_H = newClampY_H;

            // Optional: force BasicDrag to pick up the new values right away
            if (forceReassign)
            {
                BasicDrag bd = bdClamp.GetComponent<BasicDrag>();
                if (bd != null)
                {
                    bd.ClampX_L = newClampX_L;
                    bd.ClampX_H = newClampX_H;
                    bd.ClampY_L = newClampY_L;
                    bd.ClampY_H = newClampY_H;
                }
            }

            hasChanged = true;
            Debug.Log("BD_Clamp values updated!");
        }
    }

    // Draws the activation range in the Scene view
    void OnDrawGizmosSelected()
    {
        Gizmos.color = Color.cyan;
        Gizmos.DrawWireSphere(transform.position, activationDistance);
    }
}