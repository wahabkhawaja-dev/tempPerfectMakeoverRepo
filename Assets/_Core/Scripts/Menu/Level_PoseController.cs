using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class Level_PoseController : MonoBehaviour
{

    public GameObject[] itemToShow;
    public GameObject[] itemToHide;
    [Space()]
    public int stepTarget = 2;  //check for steps completeion if equals to this int then items show will appear and itemshide will disappear

    SubLevelData[] subLevels;
    // Start is called before the first frame update
    void Start()
    {
        int currentLevelIdx = SaveSystem.Instance.DataFields.levelToPlay - 1;

        subLevels = SaveSystem.Instance.DataFields.AllLevels[currentLevelIdx].subLevels;

        ApplyPose();
    }

    void ApplyPose()
    {
        // any sub-levels count towards the target, not specific ones
        int completedCount = 0;

        for (int i = 0; i < subLevels.Length; i++)
        {
            if (subLevels[i].isCompleted)
                completedCount++;
        }

        bool reached = completedCount >= stepTarget;

        foreach (GameObject obj in itemToShow)
        {
            if (obj != null)
                obj.SetActive(reached);
        }

        foreach (GameObject obj in itemToHide)
        {
            if (obj != null)
                obj.SetActive(!reached);
        }
    }
}
