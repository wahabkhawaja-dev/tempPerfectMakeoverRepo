using UnityEngine;

/// <summary>
/// Luna/Bridge.NET only implements OnMouseDown/OnMouseUp/OnMouseDrag via 3D physics,
/// so they don't fire on Collider2D. Poll Input.GetMouseButtonDown/Up and use this
/// instead of relying on those Unity messages for 2D objects.
/// </summary>
public static class PointerInput
{
    public static bool IsOverCollider(Collider2D collider)
    {
        if (collider == null)
            return false;

        Vector2 mouseWorld = Camera.main.ScreenToWorldPoint(Input.mousePosition);
        RaycastHit2D hit = Physics2D.Raycast(mouseWorld, Vector2.zero);
        return hit.collider == collider;
    }
}
