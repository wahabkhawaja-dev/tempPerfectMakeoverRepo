using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class DoubleScratch_Controller : MonoBehaviour
{
    public BD_Progress firstScratch;
    public BD_Progress secondScratch;
    // Start is called before the first frame update
    void Start()
    {
        firstScratch.SubCompleteEvent += () =>
        {
            secondScratch.enabled = true;
            secondScratch.EnableProgress();

            firstScratch.enabled = false;
        };
    }

    
}
