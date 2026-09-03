using DG.Tweening;
using ScratchCardAsset;
using System.Collections;
using System.Collections.Generic;
#if UNITY_EDITOR
using UnityEditor;
#endif
using UnityEngine;

public class LevelData : MonoBehaviour
{
    [Space()]
    public string levelName = "";

    [Space()]
    public int levelReward = 5;

    [Space()]
    public Sprite LevelIcon;

    [Space()]
    public AudioClip Level_BG;

    [Space()]
    public List<Sprite> ToolIcons;

    [Space()]
    public BasicDrag[] AllDrags;
    public AudioSource[] AllSources;

    [Space()]
    public ScratchCardManager[] AllScratches;

    [Space()]
    public int stepsDone = 0;
    public int levelNo;
    public int partNo;

    WaitForSeconds wait1sec = new WaitForSeconds(1f);
    IEnumerator Setup()
    {
        for (int i = 0; i < AllScratches.Length; i++)
        {
            if (AllScratches[i].Card.Mode == ScratchCard.ScratchMode.Restore)
            {
                SpriteRenderer spriteRenderer = AllScratches[i].SpriteCard.GetComponent<SpriteRenderer>();
                Color tempCo = spriteRenderer.color;
                tempCo.a = 0;
                spriteRenderer.color = tempCo;
            }
        }

        yield return new WaitForSeconds(0.05f);

        if (Level_BG != null)
            MusicSource.instance.PlayMusic(Level_BG);

        for (int i = 0; i < AllScratches.Length; i++)
        {
            if (AllScratches[i].Card.Mode == ScratchCard.ScratchMode.Restore)
            {
                AllScratches[i].Card.FillInstantly();
                AllScratches[i].Card.Mode = ScratchCard.ScratchMode.Restore;
                AllScratches[i].InputEnabled = false;
                AllScratches[i].Card.InputEnabled = false;
            }

            else
            {
                AllScratches[i].Card.ClearInstantly();
                AllScratches[i].Card.Mode = ScratchCard.ScratchMode.Erase;
                AllScratches[i].InputEnabled = false;
                AllScratches[i].Card.InputEnabled = false;
            }
        }

        yield return wait1sec;

        for (int i = 0; i < AllScratches.Length; i++)
        {
            if (AllScratches[i].Card.Mode == ScratchCard.ScratchMode.Restore)
            {
                AllScratches[i].SpriteCard.GetComponent<SpriteRenderer>().DOKill();
                AllScratches[i].SpriteCard.GetComponent<SpriteRenderer>().DOFade(1, 0.001f);
            }
        }

        for (int i = 0; i < AllSources.Length; i++)
        {
            AllSources[i].outputAudioMixerGroup = AudioController.instance.MainMixer.FindMatchingGroups("Sfx")[0];
        }
    }

    public void LevelStart()
    {
        // CALL EVENT
        StartCoroutine(Setup());
    }

    public void LevelComplete()
    {
        // CALL EVENT

        GameManager.instance.Complete();

        if (UI_Manager.instance != null && UI_Manager.instance.CompletePanel != null)
            UI_Manager.instance.CompletePanel.SetActive(true);
    }

    public void ToolInputToggle(GameObject tool, bool toggle)
    {
        if (tool != null)
        {
            var drag = tool.GetComponent<BasicDrag>();
            if (drag != null)
            {
                drag.canDrag = toggle;
                drag.thisCollider.enabled = toggle;
                drag.enabled = toggle;

                if (!toggle)
                {
                    drag.isDragging = false;

                    // VibrationManager.instance.StopVibration();

                    if (drag.ToolLoopClip != null)
                    {
                        drag.ToolLoopClip.Pause();
                    }
                }
            }
        }
    }

    public void SetProgressBar()
    {
        UI_Manager.instance.SetProgressBar(1f);
        Invoke(nameof(SetProgressDelay), 1);

    }
    public void SetProgressDelay()
    {
        UI_Manager.instance.SetProgressBarPos();
    }

    [ContextMenu("SetAudioAndDrag")]
    public void SetAudioAndDrag()
    {
        // Clear old values
        AllSources = new AudioSource[0];
        AllDrags = new BasicDrag[0];

        // Get all in children (including inactive)
        AudioSource[] sources = GetComponentsInChildren<AudioSource>(true);
        BasicDrag[] drags = GetComponentsInChildren<BasicDrag>(true);

        // Assign
        AllSources = sources;
        AllDrags = drags;

#if UNITY_EDITOR
        // Mark dirty so Unity saves changes
        EditorUtility.SetDirty(this);
#endif

        Debug.Log($"SetAudioAndDrag Done → Sources: {AllSources.Length}, Drags: {AllDrags.Length}");
    }
}