using UnityEngine;

public class MapPinScaleCompensator : MonoBehaviour
{
    Vector3 baseScale;

    void Awake()
    {
        baseScale = transform.localScale;
    }

    void LateUpdate()
    {
        MapController map = MapController.Instance;

        if (map == null)
            return;

        float factor = map.StartScale / Mathf.Max(map.CurrentScale, 0.0001f);

        transform.localScale = baseScale * factor;
    }
}
