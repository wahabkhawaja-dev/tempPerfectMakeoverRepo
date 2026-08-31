using System.Collections;
using UnityEngine;

public class BD_Clamp_Dynamic : MonoBehaviour
{
    [Space()]
    BasicDrag BD;

    [Header("Zoom In")]
    [Space()]
    public float ClampX_L_Min = -2.5f;
    public float ClampX_H_Min = 2.5f;

    [Header("Zoom Out")]
    [Space()]
    public float ClampX_L_Max = -2.5f;
    public float ClampX_H_Max = 2.5f;

    [Space()]
    public float ClampY_L = -4f;
    public float ClampY_H = 4f;

    IEnumerator Start()
    {
        yield return new WaitForSeconds(.1f);

        BD = this.gameObject.GetComponent<BasicDrag>();
    }

    void Update()
    {
        if (BD == null)
            return;

        if (BD.isDragging)
        {
            float t = Mathf.InverseLerp(ClampY_L, ClampY_H, this.transform.position.y);
            t = Mathf.Clamp01(t);
            t = 1f - t; 

            BD.ClampX_L = Mathf.Lerp(ClampX_L_Min, ClampX_L_Max, t);
            BD.ClampX_H = Mathf.Lerp(ClampX_H_Min, ClampX_H_Max, t);

            BD.ClampY_L = ClampY_L;
            BD.ClampY_H = ClampY_H;
        }

    }
}
