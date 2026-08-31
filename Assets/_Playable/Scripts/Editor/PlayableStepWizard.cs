#if UNITY_EDITOR
using System;
using System.Collections.Generic;
using UnityEditor;
using UnityEngine;

public class PlayableStepWizard : EditorWindow
{
    const string PrefSource = "Playable.Wizard.Source";
    const string PrefSteps = "Playable.Wizard.Steps";
    const string PrefFixIt = "Playable.Wizard.FixIt";

    string[] _prefabPaths = Array.Empty<string>();
    string[] _prefabLabels = Array.Empty<string>();
    int _sourceIndex;
    PlayableLevelFactory.ScanResult _scan;
    readonly HashSet<int> _selected = new HashSet<int>();
    bool _placeInScene = true;
    FixItHandling _fixIt = FixItHandling.PlayInnerLevel;
    Vector2 _scroll;
    string _status = "Source level chuno, steps tick karo, Build Playable dabao.";

    /// <summary>What the build does with a level's Fix-It button and its inner level.</summary>
    enum FixItHandling
    {
        /// <summary>Button stays, tapping it plays the inner level and comes back.</summary>
        PlayInnerLevel,

        /// <summary>Button stays, tapping it fires the CTA. The playable ends there.</summary>
        EndOnFixItButton,

        /// <summary>Button, damaged art and inner level all cut — the level runs already-fixed.</summary>
        HideFixItButton
    }

    enum CtaTiming { OnStepComplete, OnStepStart }
    CtaTiming _ctaTiming = CtaTiming.OnStepComplete;
    int _ctaStep = -1; // -1 = last selected step (default, matches original behavior)

    [MenuItem("Playable/Step Wizard")]
    public static void Open()
    {
        var win = GetWindow<PlayableStepWizard>("Playable Steps");
        win.minSize = new Vector2(420, 480);
        win.Show();
    }

    void OnEnable()
    {
        RefreshPrefabList();
        _fixIt = (FixItHandling)EditorPrefs.GetInt(PrefFixIt, (int)FixItHandling.PlayInnerLevel);
        string saved = EditorPrefs.GetString(PrefSource, "Assets/Resources/Lvl_GP/Level3_2.prefab");
        _sourceIndex = Mathf.Max(0, Array.IndexOf(_prefabPaths, saved));
        Rescan();
        RestoreSteps();
    }

    void RefreshPrefabList()
    {
        _prefabPaths = PlayableLevelFactory.ListSourcePrefabs();
        _prefabLabels = new string[_prefabPaths.Length];
        for (int i = 0; i < _prefabPaths.Length; i++)
            _prefabLabels[i] = System.IO.Path.GetFileNameWithoutExtension(_prefabPaths[i]);
    }

    void Rescan()
    {
        _scan = null;
        if (_prefabPaths.Length == 0)
        {
            _status = "Resources/Lvl_GP mein koi level prefab nahi.";
            return;
        }

        _sourceIndex = Mathf.Clamp(_sourceIndex, 0, _prefabPaths.Length - 1);
        _scan = PlayableLevelFactory.Scan(_prefabPaths[_sourceIndex]);
        EditorPrefs.SetString(PrefSource, _prefabPaths[_sourceIndex]);

        if (!string.IsNullOrEmpty(_scan.Error))
        {
            _status = _scan.Error;
            _selected.Clear();
            return;
        }

        _status = _scan.ClassName + " — " + _scan.Steps.Length + " steps. Tick wohi jo playable mein chahiye.";
    }

    void RestoreSteps()
    {
        _selected.Clear();
        if (_scan == null || _scan.Steps == null || _scan.Steps.Length == 0)
            return;

        string saved = EditorPrefs.GetString(PrefSteps, "");
        var allowed = new HashSet<int>(_scan.Steps);
        if (!string.IsNullOrEmpty(saved))
        {
            foreach (var part in saved.Split(','))
            {
                int n;
                if (int.TryParse(part.Trim(), out n) && allowed.Contains(n))
                    _selected.Add(n);
            }
        }

        if (_selected.Count == 0)
        {
            foreach (int s in _scan.Steps)
            {
                if (s <= 3)
                    _selected.Add(s);
            }

            if (_selected.Count == 0)
            {
                foreach (int s in _scan.Steps)
                    _selected.Add(s);
            }
        }
    }

    void PersistSteps()
    {
        EditorPrefs.SetString(PrefSteps, string.Join(",", _selected));
    }

    void OnGUI()
    {
        EditorGUILayout.LabelField("Playable Step Builder", EditorStyles.boldLabel);
        EditorGUILayout.HelpBox(
            "Original copy (_Playable/). Selected steps + next-step layers. " +
            "Fix-It button (broken shower / stove / machine) ke 3 options hain — inner level khelo, " +
            "button pe CTA le jao, ya button hi hata do. " +
            "Baaki layers, extra scratches, extra tools DELETE. " +
            "Akhri selected step complete → LevelComplete + CTA (agla StartStep nahi).",
            MessageType.Info);

        _scroll = EditorGUILayout.BeginScrollView(_scroll);

        EditorGUI.BeginChangeCheck();
        _sourceIndex = EditorGUILayout.Popup("Source Level", _sourceIndex, _prefabLabels);
        if (EditorGUI.EndChangeCheck())
        {
            Rescan();
            RestoreSteps();
        }

        EditorGUILayout.BeginHorizontal();
        if (GUILayout.Button("Refresh List", GUILayout.Width(110)))
        {
            RefreshPrefabList();
            Rescan();
            RestoreSteps();
        }

        if (GUILayout.Button("Rescan Steps", GUILayout.Width(110)))
        {
            Rescan();
            RestoreSteps();
        }

        EditorGUILayout.EndHorizontal();

        if (_scan != null && string.IsNullOrEmpty(_scan.Error) && _scan.Steps.Length > 0)
        {
            EditorGUILayout.Space(8);
            EditorGUILayout.LabelField("Script", _scan.ClassName);
            DrawInnerSection();
            EditorGUILayout.LabelField("Keep steps", EditorStyles.boldLabel);

            EditorGUILayout.BeginHorizontal();
            if (GUILayout.Button("All"))
            {
                _selected.Clear();
                foreach (int s in _scan.Steps)
                    _selected.Add(s);
                PersistSteps();
            }

            if (GUILayout.Button("None"))
            {
                _selected.Clear();
                PersistSteps();
            }

            if (GUILayout.Button("1–3"))
            {
                _selected.Clear();
                foreach (int s in _scan.Steps)
                {
                    if (s <= 3)
                        _selected.Add(s);
                }

                PersistSteps();
            }

            EditorGUILayout.EndHorizontal();

            const int cols = 6;
            int drawn = 0;
            EditorGUILayout.BeginHorizontal();
            for (int i = 0; i < _scan.Steps.Length; i++)
            {
                if (drawn > 0 && drawn % cols == 0)
                {
                    EditorGUILayout.EndHorizontal();
                    EditorGUILayout.BeginHorizontal();
                }

                int step = _scan.Steps[i];
                bool on = _selected.Contains(step);
                bool next = GUILayout.Toggle(on, step.ToString(), "Button", GUILayout.Height(28), GUILayout.MinWidth(40));
                if (next != on)
                {
                    if (next)
                        _selected.Add(step);
                    else
                        _selected.Remove(step);
                    PersistSteps();
                }

                drawn++;
            }

            EditorGUILayout.EndHorizontal();

            var ordered = new List<int>(_selected);
            ordered.Sort();
            EditorGUILayout.LabelField(
                ordered.Count == 0 ? "Koi step selected nahi." : "Playable: " + string.Join(" → ", ordered),
                EditorStyles.miniLabel);

            if (ordered.Count > 0)
                DrawCtaSection(ordered);
        }

        EditorGUILayout.Space(12);
        _placeInScene = EditorGUILayout.ToggleLeft("Gameplay_Playable scene mein laga do", _placeInScene);

        EditorGUILayout.Space(8);
        using (new EditorGUI.DisabledScope(_scan == null || !string.IsNullOrEmpty(_scan.Error) || _selected.Count == 0))
        {
            GUI.backgroundColor = new Color(0.45f, 0.85f, 0.5f);
            if (GUILayout.Button("Build Playable", GUILayout.Height(40)))
                RunBuild();
            GUI.backgroundColor = Color.white;
        }

        EditorGUILayout.EndScrollView();
        EditorGUILayout.Space(4);
        EditorGUILayout.HelpBox(_status, MessageType.None);
    }

    /// <summary>
    /// True when the build should keep the Fix-It button and end the playable on it. Needs the
    /// gate's step to actually be in the build, otherwise the button never shows up to be tapped.
    /// </summary>
    bool EndsOnFixItButton(List<int> ordered)
    {
        return _fixIt == FixItHandling.EndOnFixItButton &&
               _scan != null && _scan.HasInnerLevels && _scan.FixStep > 0 &&
               ordered.Contains(_scan.FixStep);
    }

    void DrawInnerSection()
    {
        if (!_scan.HasInnerLevels)
            return;

        EditorGUI.BeginChangeCheck();
        _fixIt = (FixItHandling)EditorGUILayout.EnumPopup("Fix-It button", _fixIt);
        if (EditorGUI.EndChangeCheck())
            EditorPrefs.SetInt(PrefFixIt, (int)_fixIt);

        if (_fixIt == FixItHandling.HideFixItButton)
        {
            EditorGUILayout.HelpBox(
                "Fix-It button, damaged art aur inner level sab cut — level 'already fixed' chalega. " +
                _scan.InnerNote,
                MessageType.Warning);
            return;
        }

        if (_scan.FixStep <= 0)
        {
            EditorGUILayout.HelpBox(
                "Fix-It gate mila lekin wo kis step pe hai detect nahi hua — button rakhne ke liye " +
                "step number chahiye. Build 'Hide Fix-It Button' ki tarah chalega.",
                MessageType.Warning);
            return;
        }

        if (!_selected.Contains(_scan.FixStep))
        {
            EditorGUILayout.HelpBox(
                "Fix-It step " + _scan.FixStep + " pe hai lekin wo step selected nahi — button playable " +
                "mein aayega hi nahi. Step " + _scan.FixStep + " tick karo.",
                MessageType.Warning);
            return;
        }

        if (_fixIt == FixItHandling.EndOnFixItButton)
        {
            EditorGUILayout.HelpBox(
                "Step " + _scan.FixStep + " pe toota hua machine, Fix-It prompt, sab waise ka waisa rahega. " +
                "Fix-It tap → CTA (store). Inner level build nahi hoga, CTA Timing/Step ignore honge.",
                MessageType.Info);
            return;
        }

        if (string.IsNullOrEmpty(_scan.InnerPrefabPath))
        {
            EditorGUILayout.HelpBox(
                "Inner level ka prefab detect nahi hua (script mein levelToPlay/partToPlay + LoadScene " +
                "pattern nahi mila). Fix-It button rahega par tap kuch nahi karega — " +
                "'End On Fix-It Button' use karo.",
                MessageType.Warning);
            return;
        }

        EditorGUILayout.HelpBox(
            "Fix-It tap → " + System.IO.Path.GetFileNameWithoutExtension(_scan.InnerPrefabPath) +
            " (saare steps), complete hone pe wapas step " + _scan.FixStep + " pe — " +
            "scene reload ki jagah in-scene swap. Dono prefabs RAM mein rehte hain.",
            MessageType.Info);
    }

    void DrawCtaSection(List<int> ordered)
    {
        EditorGUILayout.Space(10);
        EditorGUILayout.LabelField("CTA Trigger", EditorStyles.boldLabel);

        int lastSelected = ordered[ordered.Count - 1];
        if (_ctaStep < 0 || !ordered.Contains(_ctaStep))
            _ctaStep = lastSelected;

        // The Fix-It button owns the CTA in that mode, so these two controls would only lie.
        if (EndsOnFixItButton(ordered))
        {
            EditorGUILayout.HelpBox(
                "CTA fires when the Fix-It button on step " + _scan.FixStep + " is tapped — set above, " +
                "under Fix-It button. Timing / CTA Step do not apply.",
                MessageType.None);
            return;
        }

        _ctaTiming = (CtaTiming)EditorGUILayout.EnumPopup("Timing", _ctaTiming);

        int ctaStepIndex = Mathf.Max(0, ordered.IndexOf(_ctaStep));
        var stepLabels = ordered.ConvertAll(s => s.ToString()).ToArray();
        ctaStepIndex = EditorGUILayout.Popup("CTA Step", ctaStepIndex, stepLabels);
        _ctaStep = ordered[Mathf.Clamp(ctaStepIndex, 0, ordered.Count - 1)];

        string help;
        if (_ctaTiming == CtaTiming.OnStepStart)
        {
            help = "CTA fires the instant step " + _ctaStep + " would begin — it never actually plays. " +
                   (_ctaStep == ordered[0]
                       ? "This is the first selected step, so the CTA fires immediately."
                       : "Steps before it in your selection still play normally.");
        }
        else
        {
            help = "CTA fires when step " + _ctaStep + " completes (default: last selected step).";
        }

        help += "\n\nFor any other moment — mid-step, on a timer, after N taps — use the " +
                "PlayableCTA component added to the built prefab's root: set its Trigger, or wire " +
                "PlayableCTA.FireCTA() into whichever UnityEvent marks that moment.";

        EditorGUILayout.HelpBox(help, MessageType.None);
    }

    void RunBuild()
    {
        if (_prefabPaths.Length == 0)
            return;

        var ordered = new List<int>(_selected);
        ordered.Sort();
        if (ordered.Count == 0)
            return;

        int ctaStep = ordered.Contains(_ctaStep) ? _ctaStep : ordered[ordered.Count - 1];

        // The step right after the last genuinely playable one is the "tease" step:
        // OnStepStart → ctaStep itself is the tease (nothing before it plays if it's first).
        // OnStepComplete → ctaStep plays normally, ctaStep+1 is the tease.
        // A tease step is built exactly like a normal kept step (real entrance, real tool,
        // its own Complete() falls through to LevelComplete same as any last step) — the
        // only difference is PlayableCTA gets wired to OnToolAppear, watching that step's
        // tool, so tapping it redirects to store instead of actually playing.
        bool ctaOnFixIt = EndsOnFixItButton(ordered);

        // CTA on the Fix-It button: the Fix-It step is the last thing that plays, and there is
        // no tease step after it — the button IS the tease.
        if (ctaOnFixIt)
            ctaStep = _scan.FixStep;

        int keepUpTo = _ctaTiming == CtaTiming.OnStepStart ? ctaStep - 1 : ctaStep;
        int teaseStep = keepUpTo + 1;
        bool hasTease = !ctaOnFixIt &&
                        PlayableLevelFactory.StepHasContent(_prefabPaths[_sourceIndex], teaseStep);

        var keep = ordered.FindAll(s => s <= keepUpTo);
        if (hasTease && !keep.Contains(teaseStep))
        {
            keep.Add(teaseStep);
            keep.Sort();
        }

        if (keep.Count == 0)
        {
            _status = "CTA Step 'On Start' ka matlab pehla selected step bhi exclude ho gaya — kam az kam 1 step chahiye pehle.";
            return;
        }

        // The Fix-It inner level is a whole second level prefab. Build it first (all of its
        // steps — it's a short sub-level and trimming it would leave the fix half-done), then
        // hand the built prefab to the outer build so the scene can hold both.
        bool wantInner = !ctaOnFixIt && _fixIt == FixItHandling.PlayInnerLevel &&
                         _scan.HasInnerLevels && _scan.FixStep > 0 &&
                         !string.IsNullOrEmpty(_scan.InnerPrefabPath) && keep.Contains(_scan.FixStep);
        var outerMode = ctaOnFixIt
            ? PlayableLevelFactory.InnerMode.CtaOnFix
            : wantInner
                ? PlayableLevelFactory.InnerMode.Outer
                : PlayableLevelFactory.InnerMode.Exclude;

        EditorUtility.DisplayProgressBar("Playable", "Building selected steps…", 0.4f);
        try
        {
            string innerBuilt = null;
            if (wantInner)
            {
                var innerScan = PlayableLevelFactory.Scan(_scan.InnerPrefabPath);
                if (!string.IsNullOrEmpty(innerScan.Error))
                {
                    _status = "Inner level scan fail: " + innerScan.Error;
                    EditorUtility.DisplayDialog("Playable", _status, "OK");
                    return;
                }

                var innerBuild = PlayableLevelFactory.Build(
                    _scan.InnerPrefabPath,
                    innerScan.Steps,
                    false,
                    PlayableLevelFactory.InnerMode.Inner,
                    null);

                if (!innerBuild.Ok)
                {
                    _status = "Inner level build fail: " + innerBuild.Error + "\n" + innerBuild.Log;
                    EditorUtility.DisplayDialog("Playable", _status, "OK");
                    return;
                }

                innerBuilt = innerBuild.PrefabPath;
            }

            var built = PlayableLevelFactory.Build(
                _prefabPaths[_sourceIndex], keep, _placeInScene, outerMode, innerBuilt);
            if (built.Ok && hasTease)
            {
                var teaseLog = new List<string>();
                PlayableLevelFactory.ConfigureTeaseCta(built.PrefabPath, teaseStep, teaseLog);
                built.Log += "\n" + string.Join("\n", teaseLog);
            }

            if (built.Ok)
            {
                string innerLine = string.IsNullOrEmpty(built.InnerPrefabPath)
                    ? string.Empty
                    : "\nFix-It inner level: " + built.InnerPrefabPath;

                _status = "Ready: " + built.PrefabPath + "\nSteps " + string.Join(",", keep) +
                          innerLine + "\n" + built.Log;
                EditorUtility.DisplayDialog(
                    "Playable",
                    "Playable ban gaya.\n\n" + built.PrefabPath + "\nSteps: " + string.Join(" → ", keep) + innerLine,
                    "OK");
            }
            else
            {
                _status = "Fail: " + built.Error + "\n" + built.Log;
                EditorUtility.DisplayDialog("Playable", built.Error, "OK");
            }
        }
        finally
        {
            EditorUtility.ClearProgressBar();
        }
    }
}
#endif
