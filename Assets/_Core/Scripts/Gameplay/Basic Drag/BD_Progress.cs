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

    // The 0.1s delayed start below outlives a tap shorter than 0.1s: DisableProgress() runs
    // first (stopping nothing), then the delayed call starts a coroutine no one will ever
    // stop. Each leak keeps writing to the ONE shared progress bar every 0.2s forever, so
    // several of them fight over it — the bar jitters, and a finished tool keeps overwriting
    // the next tool's reset. Hold the tween so Disable can cancel a start that hasn't fired.
    Tween pendingStart;

    // Only the most recently started tracker may drive the shared bar. Belt-and-braces against
    // any other leak path (e.g. ToolInputToggle(false) disables BasicDrag without ever firing
    // ProgEndEvent, so DisableProgress never runs for that tool).
    static BD_Progress barOwner;

    // Scratch-texture readback can read back a frame late (worse on WebGL/Luna than in the
    // editor), so giveCollectiveProgress() occasionally reports a value slightly lower than the
    // one already shown — the progress bar visibly "dangles" backward. It can only ever go up
    // while actually scratching, so clamp what reaches the UI to the highest value seen so far.
    float maxProgressSeen = 0f;

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
        if (pendingStart != null)
            pendingStart.Kill();

        pendingStart = DOVirtual.DelayedCall(0.1f, () =>
        {
            pendingStart = null;

            for (int i = 0; i < AllScratches.Length; i++)
            {
                AllScratches[i].ScratchManager.InputEnabled = true;
                AllScratches[i].ScratchManager.Card.InputEnabled = true;
                AllScratches[i].ScratchManager.Card.IsScratching = true;
            }

            if (Co != null)
                StopCoroutine(Co);

            barOwner = this;

            Co = StartCoroutine(ProgressChecking());
        });

        if (tipControl)
        {
            EnableToolTips();
        }
    }

    public void DisableProgress()
    {
        // Cancel a start that is still waiting out its 0.1s delay, or it will fire after this
        // and leave a tracker running that nothing stops.
        if (pendingStart != null)
        {
            pendingStart.Kill();
            pendingStart = null;
        }

        for (int i = 0; i < AllScratches.Length; i++)
        {
            AllScratches[i].ScratchManager.InputEnabled = false;
            AllScratches[i].ScratchManager.Card.InputEnabled = false;
            AllScratches[i].ScratchManager.Card.IsScratching = false;

        }

        if (Co != null)
        {
            StopCoroutine(Co);
            Co = null;
        }

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

        maxProgressSeen = 0f;

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

                    // Only the tool that currently owns the bar may slam it to 100%, or a stale
                    // tracker completing late would do it over the next step's fresh bar.
                    if (progressControl && barOwner == this)
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

            // Someone else took the bar, or this tool was switched off mid-step
            // (ToolInputToggle disables BasicDrag without firing ProgEndEvent) — stop writing
            // rather than keep overwriting whatever the current step put there.
            if (barOwner != this || thisDrag == null || !thisDrag.enabled || !thisDrag.canDrag)
                yield break;

            if (progressControl)
            {
                maxProgressSeen = Mathf.Max(maxProgressSeen, giveCollectiveProgress());
                UI_Manager.instance.SetProgressBar(maxProgressSeen);
            }

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