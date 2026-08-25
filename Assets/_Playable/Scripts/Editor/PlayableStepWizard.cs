#if UNITY_EDITOR
using System;
using System.Collections.Generic;
using UnityEditor;
using UnityEngine;

public class PlayableStepWizard : EditorWindow
{
    const string PrefSource = "Playable.Wizard.Source";
    const string PrefSteps = "Playable.Wizard.Steps";

    string[] _prefabPaths = Array.Empty<string>();
    string[] _prefabLabels = Array.Empty<string>();
    int _sourceIndex;
    PlayableLevelFactory.ScanResult _scan;
    readonly HashSet<int> _selected = new HashSet<int>();
    bool _placeInScene = true;
    Vector2 _scroll;
    string _status = "Source level chuno, steps tick karo, Build Playable dabao.";

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
            "Inner Fix-It / extra sub-levels (broken shower, stove, machine) editor khud detect karke exclude karta hai. " +
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
            if (_scan.HasInnerLevels && !string.IsNullOrEmpty(_scan.InnerNote))
                EditorGUILayout.HelpBox(_scan.InnerNote, MessageType.Warning);
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

    void DrawCtaSection(List<int> ordered)
    {
        EditorGUILayout.Space(10);
        EditorGUILayout.LabelField("CTA Trigger", EditorStyles.boldLabel);

        int lastSelected = ordered[ordered.Count - 1];
        if (_ctaStep < 0 || !ordered.Contains(_ctaStep))
            _ctaStep = lastSelected;

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
        int keepUpTo = _ctaTiming == CtaTiming.OnStepStart ? ctaStep - 1 : ctaStep;
        int teaseStep = keepUpTo + 1;
        bool hasTease = PlayableLevelFactory.StepHasContent(_prefabPaths[_sourceIndex], teaseStep);

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

        EditorUtility.DisplayProgressBar("Playable", "Building selected steps…", 0.4f);
        try
        {
            var built = PlayableLevelFactory.Build(_prefabPaths[_sourceIndex], keep, _placeInScene);
            if (built.Ok && hasTease)
            {
                var teaseLog = new List<string>();
                PlayableLevelFactory.ConfigureTeaseCta(built.PrefabPath, teaseStep, teaseLog);
                built.Log += "\n" + string.Join("\n", teaseLog);
            }

            if (built.Ok)
            {
                _status = "Ready: " + built.PrefabPath + "\nSteps " + string.Join(",", keep) +
                          "\n" + built.Log;
                EditorUtility.DisplayDialog(
                    "Playable",
                    "Playable ban gaya.\n\n" + built.PrefabPath + "\nSteps: " + string.Join(" → ", keep),
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
