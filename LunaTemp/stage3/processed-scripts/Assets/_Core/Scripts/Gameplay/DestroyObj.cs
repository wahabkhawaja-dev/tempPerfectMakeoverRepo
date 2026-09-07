using UnityEngine;
using System.Collections;

public class DestroyObj : MonoBehaviour
{
    [Space()]
    public float destroyDelay = 0f;

    IEnumerator Start()
    {
        yield return new WaitForSeconds(destroyDelay);

        Destroy(this.gameObject);
    }
}
