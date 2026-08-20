using UnityEngine;
using System.Collections;

public class BD_Clamp : MonoBehaviour
{
    [Space()]
    public float ClampX_L = -2.5f;
    public float ClampX_H = 2.5f;

    [Space()]
    public float ClampY_L = -4f;
    public float ClampY_H = 4f;

    BasicDrag BD;

    void OnEnable()
    {
        StartCoroutine(AssignVals());
    }

    IEnumerator AssignVals()
    {
        yield return new WaitForSeconds(.1f);

        BD = this.gameObject.GetComponent<BasicDrag>();
        BD.ClampX_L = ClampX_L;
        BD.ClampX_H = ClampX_H;
        BD.ClampY_L = ClampY_L;
        BD.ClampY_H = ClampY_H;
    }
}
