using System;
using DG.Tweening;
using UnityEngine;
using ScratchCardAsset;
using System.Collections;
using UnityEngine.Events;

public class BD_Progress : MonoBehaviour
{
    [Space()]
    public ScratchData[] AllScratches;

    [Space()]
    public UnityEvent OnScratchComplete;

    [Space()]
    public bool isProgDone = false;
    public bool canCallComplete = false;

    [Space()]
    public bool CollectiveAppear = false;

    [Space()]
    public bool tipControl = false;

    [Space()]
    public bool progressControl = true;

    [HideInInspector()]
    public BasicDrag thisDrag;

    Coroutine Co;
    WaitForSeconds waitTemp = new WaitForSeconds(.2f);

    public Action CompleteEvent;
    public Action SubCompleteEvent;

    void Start()
    {
        thisDrag = GetComponent<BasicDrag>();

        thisDrag.ProgStartEvent += EnableProgress;
        thisDrag.ProgEndEvent += DisableProgress;

        thisDrag.ProgEndEvent += CallTheComplete;

        if (tipControl)
        {
            DisableToolTips();
        }
    }

    public void EnableProgress()
    {
        DOVirtual.DelayedCall(0.1f, () =>
        {
            for (int i = 0; i < AllScratches.Length; i++)
            {
                AllScratches[i].ScratchManager.InputEnabled = true;
                AllScratches[i].ScratchManager.Card.InputEnabled = true;
                AllScratches[i].ScratchManager.Card.IsScratching = true;
            }

            Co = StartCoroutine(ProgressChecking());
        });

        if (tipControl)
        {
            EnableToolTips();
        }
    }

    public void DisableProgress()
    {
        for (int i = 0; i < AllScratches.Length; i++)
        {
            AllScratches[i].ScratchManager.InputEnabled = false;
            AllScratches[i].ScratchManager.Card.InputEnabled = false;
            AllScratches[i].ScratchManager.Card.IsScratching = false;

        }

        if (Co != null)
            StopCoroutine(Co);

        if (tipControl)
        {
            DisableToolTips();
        }
    }

    void EnableToolTips()
    {
        for (int i = 0; i < AllScratches.Length; i++)
        {
            AllScratches[i].ScratchManager.Card.ToolTip.SetActive(true);
        }
    }

    void DisableToolTips()
    {
        for (int i = 0; i < AllScratches.Length; i++)
        {
            AllScratches[i].ScratchManager.Card.ToolTip.SetActive(false);
        }
    }

    IEnumerator ProgressChecking()
    {
        if (isProgDone)
        {
            yield break;
        }

        while (true)
        {
            if (CheckAllScratchProgress() && !isProgDone)
            {
                if (SubCompleteEvent != null)
                    SubCompleteEvent.Invoke();

                /* if (!thisDrag.isDragging)
                 {
                     isProgDone = true;

                     canCallComplete = true;

                     CallTheComplete();

                     UI_Manager.instance.SetProgressBar(1);
                 }

                 else*/
                {
                    isProgDone = true;

                    canCallComplete = true;

                    if (progressControl)
                        UI_Manager.instance.SetProgressBar(1);
                }

                if (CollectiveAppear)
                {
                    // Update Progress
                    for (int i = 0; i < AllScratches.Length; i++)
                    {
                        // ERASE
                        if (AllScratches[i].ScratchManager.Mode == ScratchCard.ScratchMode.Erase)
                        {
                            //  FADE ANIM
                            try
                            {
                                AllScratches[i].ScratchManager.SpriteCard.GetComponent<SpriteRenderer>().DOFade(0, 1f);

                            }
                            catch
                            {
                            }
                        }

                        // RESTORE
                        else
                        {
                            // SMOOTH APPEAR
                            AllScratches[i].ScratchManager.Card.ClearSmoothly();
                        }
                    }
                }

                break;
            }

            if (isProgDone)
            {
                break;
            }

            if (progressControl)
                UI_Manager.instance.SetProgressBar(giveCollectiveProgress());

            yield return waitTemp;
        }
    }

    public bool CheckAllScratchProgress()
    {
        // Update Progress
        for (int i = 0; i < AllScratches.Length; i++)
        {
            if (AllScratches[i].isComplete)
                continue;

            // ERASE
            if (AllScratches[i].ScratchManager.Mode == ScratchCard.ScratchMode.Erase)
            {
                if (AllScratches[i].ScratchManager.Progress.GiveProgress() >= AllScratches[i].scratchLimit)
                {
                    AllScratches[i].isComplete = true;

                    if (!CollectiveAppear)
                    {
                        //  FADE ANIM
                        try
                        {
                            AllScratches[i].ScratchManager.SpriteCard.GetComponent<SpriteRenderer>().DOFade(0, 1f);

                        }
                        catch
                        {
                        }
                    }
                }
            }

            // RESTORE
            else
            {
                if (AllScratches[i].ScratchManager.Progress.GiveProgress() <= AllScratches[i].scratchLimit)
                {
                    AllScratches[i].isComplete = true;

                    if (!CollectiveAppear)
                    {
                        AllScratches[i].ScratchManager.Card.ClearSmoothly();
                    }
                }
            }
        }

        bool status = true;

        // Check Progress
        for (int i = 0; i < AllScratches.Length; i++)
        {
            if (!AllScratches[i].isComplete)
            {
                status = false;

                break;
            }
        }

        return status;
    }

    public float giveCollectiveProgress()
    {
        float progressIs = 0f;

        // Check Progress
        for (int i = 0; i < AllScratches.Length; i++)
        {
            // ERASE
            if (AllScratches[i].ScratchManager.Mode == ScratchCard.ScratchMode.Erase)
            {
                progressIs += AllScratches[i].ScratchManager.Progress.GiveProgress();
            }

            // RESTORE
            else
            {
                progressIs += Math.Abs(1 - AllScratches[i].ScratchManager.Progress.GiveProgress());
            }
        }

        progressIs = Math.Abs(progressIs);
        progressIs = progressIs / (float)AllScratches.Length;

        return progressIs;
    }

    public float giveProgressForScratch(int index)
    {
        float progressIs = 0f;

        // ERASE
        if (AllScratches[index].ScratchManager.Mode == ScratchCard.ScratchMode.Erase)
        {
            progressIs += AllScratches[index].ScratchManager.Progress.GiveProgress();
        }

        // RESTORE
        else
        {
            progressIs += Math.Abs(1 - AllScratches[index].ScratchManager.Progress.GiveProgress());
        }

        return progressIs;
    }

    // Call Complete When Tool Is Released

    public void CallTheComplete()
    {
        if (!canCallComplete)
            return;

        DisableProgress();

        if (thisDrag.thisParticles != null)
        {
            thisDrag.thisParticles.Stop();
        }

        if (thisDrag.dragParticles != null)
        {
            thisDrag.dragParticles.Stop();

            thisDrag.dragParticles.enableEmission = false;
        }

        if (OnScratchComplete != null)
            OnScratchComplete.Invoke();

        if (thisDrag.ToolLoopClip != null)
            thisDrag.ToolLoopClip.enabled = false;
    }
}

[Serializable]
public class ScratchData
{
    [Space()]
    public ScratchCardManager ScratchManager;
    public float scratchLimit = .5f;
    public bool isComplete = false;
}