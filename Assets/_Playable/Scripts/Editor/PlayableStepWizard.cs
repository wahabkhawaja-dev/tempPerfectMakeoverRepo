#if UNITY_EDITOR
using System;
using System.Collections.Generic;
using System.IO;
using UnityEditor;
using UnityEngine;

public class PlayableStepWizard : EditorWindow
{
    const string PrefSource = "Playable.Wizard.Source";
    const string PrefSteps = "Playable.Wizard.Steps";
    const string PrefFixIt = "Playable.Wizard.FixIt";
    const string PrefVariant = "Playable.Wizard.Variant";
    const string PrefAfterFixIt = "Playable.Wizard.AfterFixIt";
    const string PrefInnerSource = "Playable.Wizard.InnerSource.";
    const string PrefInnerSteps = "Playable.Wizard.InnerSteps.";

    static readonly Color FixItTint = new Color(1f, 0.65f, 0.25f);

    string[] _prefabPaths = Array.Empty<string>();
    string[] _prefabLabels = Array.Empty<string>();
    Dictionary<string, PlayableLevelFactory.FixItLink> _links = new Dictionary<string, PlayableLevelFactory.FixItLink>();
    int _sourceIndex;
    PlayableLevelFactory.ScanResult _scan;
    readonly HashSet<int> _selected = new HashSet<int>();
    readonly Dictionary<int, bool> _stepHasContent = new Dictionary<int, bool>();
    bool _placeInScene = true;
    FixItHandling _fixIt = FixItHandling.PlayInnerLevel;
    Vector2 _scroll;
    string _status = "Source level chuno, steps tick karo, Build Playable dabao.";

    string[] _innerPaths = Array.Empty<string>();
    string[] _innerLabels = Array.Empty<string>();
    int _innerIndex;
    PlayableLevelFactory.ScanResult _innerScan;
    readonly HashSet<int> _innerSelected = new HashSet<int>();
    AfterFixIt _afterFixIt = AfterFixIt.ReturnToMainLevel;

    /// <summary>What the build does with a level's Fix-It button and its inner level.</summary>
    enum FixItHandling
    {
        /// <summary>Button stays, tapping it plays the inner level (chosen steps).</summary>
        PlayInnerLevel,

        /// <summary>Button stays, tapping it fires the CTA. The playable ends there.</summary>
        EndOnFixItButton,

        /// <summary>Button, damaged art and inner level all cut — the level runs already-fixed.</summary>
        HideFixItButton
    }

    /// <summary>What happens when the last kept step of the Fix-It level completes.</summary>
    enum AfterFixIt
    {
        ReturnToMainLevel,
        EndPlayableInFixItLevel
    }

    enum CtaTiming { OnStepComplete, OnStepStart }
    CtaTiming _ctaTiming = CtaTiming.OnStepComplete;
    int _ctaStep = -1; // -1 = last selected step (default, matches original behavior)

    /// <summary>Appended to the built prefab/script name so repeated builds of different step
    /// ranges from the same source level don't overwrite each other's "{Level}_Playable" file.</summary>
    string _variant = "";

    /// <summary>
    /// Everything a build will do, worked out once from the current selection. The window's
    /// notices and RunBuild both read this, so what the window says is what gets built.
    /// </summary>
    class Plan
    {
        public List<int> Keep = new List<int>();
        public int CtaStep;
        public int TeaseStep;
        public bool HasTease;
        public bool CtaOnFixIt;
        public bool WantInner;
        public bool EndsInFixIt;
        public List<int> InnerKeep = new List<int>();
        public string Error;
    }

    [MenuItem("Playable/Step Wizard")]
    public static void Open()
    {
        var win = GetWindow<PlayableStepWizard>("Playable Steps");
        win.minSize = new Vector2(440, 520);
        win.Show();
    }

    void OnEnable()
    {
        RefreshPrefabList();
        _fixIt = (FixItHandling)EditorPrefs.GetInt(PrefFixIt, (int)FixItHandling.PlayInnerLevel);
        _afterFixIt = (AfterFixIt)EditorPrefs.GetInt(PrefAfterFixIt, (int)AfterFixIt.ReturnToMainLevel);
        _variant = EditorPrefs.GetString(PrefVariant, "");
        string saved = EditorPrefs.GetString(PrefSource, "Assets/Resources/Lvl_GP/Level3_2.prefab");
        _sourceIndex = Mathf.Max(0, Array.IndexOf(_prefabPaths, saved));
        Rescan();
        RestoreSteps();
    }

    void RefreshPrefabList()
    {
        _prefabPaths = PlayableLevelFactory.ListSourcePrefabs();
        _links = PlayableLevelFactory.ScanFixItLinks(_prefabPaths);
        _prefabLabels = new string[_prefabPaths.Length];
        for (int i = 0; i < _prefabPaths.Length; i++)
            _prefabLabels[i] = SourceLabel(_prefabPaths[i]);
    }

    /// <summary>"Level1_1   [Fix-It @ step 5 -> Level1_5]" / "Level1_5   [Fix-It level of Level1_1]".</summary>
    string SourceLabel(string path)
    {
        string label = Path.GetFileNameWithoutExtension(path);
        PlayableLevelFactory.FixItLink link;
        if (!_links.TryGetValue(path, out link))
            return label;

        if (link.FixItLevel != null)
            return label + "   [Fix-It @ step " + (link.FixStep > 0 ? link.FixStep.ToString() : "?") +
                   " -> " + Path.GetFileNameWithoutExtension(link.FixItLevel) + "]";

        return label + "   [Fix-It level of " + Path.GetFileNameWithoutExtension(link.ParentLevel) + "]";
    }

    void Rescan()
    {
        _scan = null;
        _innerScan = null;
        _stepHasContent.Clear();
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
        RefreshInnerSources();
    }

    /// <summary>
    /// The Fix-It level can be built from its Resources original or from any playable already
    /// built from it — a built copy may carry hand fixes (Luna shader / mask work) worth keeping.
    /// </summary>
    void RefreshInnerSources()
    {
        _innerPaths = Array.Empty<string>();
        _innerLabels = Array.Empty<string>();
        _innerScan = null;
        if (_scan == null || string.IsNullOrEmpty(_scan.InnerPrefabPath))
            return;

        string baseName = Path.GetFileNameWithoutExtension(_scan.InnerPrefabPath);
        var paths = new List<string> { _scan.InnerPrefabPath };
        foreach (string p in _prefabPaths)
        {
            if (p.StartsWith(PlayableLevelFactory.PlayableLevels + "/", StringComparison.OrdinalIgnoreCase) &&
                Path.GetFileNameWithoutExtension(p).StartsWith(baseName + "_Playable", StringComparison.OrdinalIgnoreCase))
                paths.Add(p);
        }

        _innerPaths = paths.ToArray();
        _innerLabels = new string[_innerPaths.Length];
        for (int i = 0; i < _innerPaths.Length; i++)
            _innerLabels[i] = Path.GetFileNameWithoutExtension(_innerPaths[i]) + (i == 0 ? "   (original)" : "   (built)");

        string saved = EditorPrefs.GetString(PrefInnerSource + _scan.PrefabPath, _scan.InnerPrefabPath);
        _innerIndex = Mathf.Max(0, Array.IndexOf(_innerPaths, saved));
        RescanInner();
    }

    void RescanInner()
    {
        _innerSelected.Clear();
        if (_innerPaths.Length == 0)
            return;

        string path = _innerPaths[_innerIndex];
        EditorPrefs.SetString(PrefInnerSource + _scan.PrefabPath, path);
        _innerScan = PlayableLevelFactory.Scan(path);
        if (!string.IsNullOrEmpty(_innerScan.Error))
            return;

        var allowed = new HashSet<int>(_innerScan.Steps);
        foreach (string part in EditorPrefs.GetString(PrefInnerSteps + path, "").Split(','))
        {
            int n;
            if (int.TryParse(part.Trim(), out n) && allowed.Contains(n))
                _innerSelected.Add(n);
        }

        if (_innerSelected.Count == 0)
            _innerSelected.UnionWith(_innerScan.Steps);
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

    void PersistInnerSteps()
    {
        if (_innerPaths.Length > 0)
            EditorPrefs.SetString(PrefInnerSteps + _innerPaths[_innerIndex], string.Join(",", _innerSelected));
    }

    bool HasFixItLevel
    {
        get { return _scan != null && _scan.FixStep > 0 && !string.IsNullOrEmpty(_scan.InnerPrefabPath); }
    }

    void OnGUI()
    {
        EditorGUILayout.LabelField("Playable Step Builder", EditorStyles.boldLabel);
        EditorGUILayout.HelpBox(
            "Original copy (_Playable/). Selected steps + next-step layers. " +
            "Fix-It button (broken shower / stove / machine) ke 3 options hain — inner level khelo " +
            "(apne chune hue steps ke saath), button pe CTA le jao, ya button hi hata do. " +
            "Baaki layers, extra scratches, extra tools DELETE. " +
            "Akhri selected step complete → LevelComplete + CTA (agla StartStep nahi). " +
            "Source list mein Resources/Lvl_GP ke original levels AND already-built _Playable " +
            "prefabs dono aate hain — [Fix-It ...] tag batata hai kaunsa level Fix-It level pe jata hai " +
            "aur kaunsa khud Fix-It level hai.",
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

        Plan plan = null;
        if (_scan != null && string.IsNullOrEmpty(_scan.Error) && _scan.Steps.Length > 0)
        {
            EditorGUILayout.Space(8);
            EditorGUILayout.LabelField("Script", _scan.ClassName);
            DrawParentNotice();
            DrawFixItHandling();

            EditorGUILayout.LabelField("Keep steps", EditorStyles.boldLabel);
            DrawStepGrid(_scan.Steps, _selected, PersistSteps, true);

            plan = MakePlan();
            DrawRangeNotices(plan);

            if (plan.Keep.Count > 0)
                EditorGUILayout.LabelField("Playable: " + FlowText(plan), EditorStyles.wordWrappedMiniLabel);

            if (_selected.Count > 0)
            {
                DrawFixItLevelSection(plan);
                DrawCtaSection(plan);
            }

            EditorGUILayout.Space(8);
            EditorGUI.BeginChangeCheck();
            _variant = EditorGUILayout.TextField(
                new GUIContent("Variant name", "Optional. Set this to build another step-range " +
                    "from the same source level without overwriting the previous one — e.g. " +
                    "'A' for steps 2-4, 'B' for steps 5-7. Leave blank to keep using the plain " +
                    "'{Level}_Playable' name (each build then overwrites the last). " +
                    "The Fix-It level built with it gets the same suffix."),
                _variant);
            if (EditorGUI.EndChangeCheck())
                EditorPrefs.SetString(PrefVariant, _variant);

            DrawOverwriteNotice(plan);
        }

        EditorGUILayout.Space(12);
        _placeInScene = EditorGUILayout.ToggleLeft("Gameplay_Playable scene mein laga do", _placeInScene);

        if (plan != null && plan.WantInner && !_placeInScene)
            EditorGUILayout.HelpBox(
                "The Fix-It hop needs both levels and the PlayableInnerLevel object in the scene. " +
                "With this off you'll have to place and wire them yourself.",
                MessageType.Warning);

        if (plan != null && !string.IsNullOrEmpty(plan.Error))
            EditorGUILayout.HelpBox(plan.Error, MessageType.Error);

        EditorGUILayout.Space(8);
        using (new EditorGUI.DisabledScope(plan == null || !string.IsNullOrEmpty(plan.Error)))
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

    /// <summary>Toggle buttons for each step; on the main level the Fix-It step is tinted and labelled.</summary>
    void DrawStepGrid(int[] steps, HashSet<int> selected, Action persist, bool markFixIt)
    {
        EditorGUILayout.BeginHorizontal();
        if (GUILayout.Button("All"))
        {
            selected.Clear();
            selected.UnionWith(steps);
            persist();
        }

        if (GUILayout.Button("None"))
        {
            selected.Clear();
            persist();
        }

        if (GUILayout.Button("1–3"))
        {
            selected.Clear();
            foreach (int s in steps)
            {
                if (s <= 3)
                    selected.Add(s);
            }

            persist();
        }

        EditorGUILayout.EndHorizontal();

        int fixStep = markFixIt && _scan != null && _scan.HasInnerLevels ? _scan.FixStep : 0;
        string fixTarget = HasFixItLevel ? Path.GetFileNameWithoutExtension(_scan.InnerPrefabPath) : "its Fix-It level";

        const int cols = 6;
        EditorGUILayout.BeginHorizontal();
        for (int i = 0; i < steps.Length; i++)
        {
            if (i > 0 && i % cols == 0)
            {
                EditorGUILayout.EndHorizontal();
                EditorGUILayout.BeginHorizontal();
            }

            int step = steps[i];
            bool isFix = step == fixStep;
            var content = isFix
                ? new GUIContent(step + " Fix-It", "Step " + step + " shows the Fix-It button → " + fixTarget + ".")
                : new GUIContent(step.ToString());

            if (isFix)
                GUI.backgroundColor = FixItTint;

            bool on = selected.Contains(step);
            bool next = GUILayout.Toggle(on, content, "Button", GUILayout.Height(28), GUILayout.MinWidth(isFix ? 70 : 40));
            GUI.backgroundColor = Color.white;

            if (next != on)
            {
                if (next)
                    selected.Add(step);
                else
                    selected.Remove(step);
                persist();
            }
        }

        EditorGUILayout.EndHorizontal();
    }

    /// <summary>The selected source is itself somebody's Fix-It level.</summary>
    void DrawParentNotice()
    {
        if (string.IsNullOrEmpty(_scan.ParentPrefabPath))
            return;

        string parent = Path.GetFileNameWithoutExtension(_scan.ParentPrefabPath);
        PlayableLevelFactory.FixItLink link;
        string step = _links.TryGetValue(_scan.ParentPrefabPath, out link) && link.FixStep > 0
            ? " (its Fix-It button is on step " + link.FixStep + ")"
            : "";

        EditorGUILayout.HelpBox(
            Path.GetFileNameWithoutExtension(_scan.PrefabPath) + " is the Fix-It level of " + parent + step + ".\n" +
            "To play it behind the Fix-It button, pick " + parent + " as Source Level and choose these steps " +
            "under 'Fix-It level' there. Built from here it is a standalone playable: its return to " +
            parent + " becomes LevelComplete + CTA.",
            MessageType.Info);
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

    void DrawFixItHandling()
    {
        if (!_scan.HasInnerLevels || !string.IsNullOrEmpty(_scan.ParentPrefabPath))
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

        if (_fixIt == FixItHandling.PlayInnerLevel && string.IsNullOrEmpty(_scan.InnerPrefabPath))
        {
            EditorGUILayout.HelpBox(
                "Inner level ka prefab detect nahi hua (script mein levelToPlay/partToPlay + LoadScene " +
                "pattern nahi mila). Fix-It button rahega par tap kuch nahi karega — " +
                "'End On Fix-It Button' use karo.",
                MessageType.Warning);
            return;
        }

        string target = HasFixItLevel ? " → Fix-It level " + Path.GetFileNameWithoutExtension(_scan.InnerPrefabPath) : "";
        EditorGUILayout.HelpBox(
            "Step " + _scan.FixStep + " has the Fix-It button" + target + ". It's marked orange below.",
            MessageType.None);
    }

    /// <summary>How the selected range meets the Fix-It step — the notices a range change should raise.</summary>
    void DrawRangeNotices(Plan plan)
    {
        if (_selected.Count == 0 || _scan.FixStep <= 0 || !_scan.HasInnerLevels ||
            _fixIt == FixItHandling.HideFixItButton || !string.IsNullOrEmpty(_scan.ParentPrefabPath))
            return;

        int fix = _scan.FixStep;
        var ordered = Sorted(_selected);
        var after = ordered.FindAll(s => s > fix);

        if (!_selected.Contains(fix))
        {
            if (ordered[ordered.Count - 1] < fix)
                EditorGUILayout.HelpBox(
                    "This range ends before Fix-It step " + fix + " — no Fix-It button in this build.",
                    MessageType.None);
            else
                EditorGUILayout.HelpBox(
                    "This range jumps over Fix-It step " + fix + " — steps " + string.Join(", ", after) +
                    " run as already fixed (no button, no Fix-It level). Tick step " + fix + " to keep it.",
                    MessageType.Warning);
            return;
        }

        if (!plan.Keep.Contains(fix))
        {
            EditorGUILayout.HelpBox(
                "The CTA ends the playable before step " + fix + " plays, so the Fix-It button never shows up.",
                MessageType.Warning);
            return;
        }

        if (plan.HasTease && plan.TeaseStep == fix)
        {
            EditorGUILayout.HelpBox(
                "Fix-It step " + fix + " is the tease step: its tool tap fires the CTA, so the Fix-It level is not built.",
                MessageType.None);
            return;
        }

        if (plan.EndsInFixIt && after.Count > 0)
            EditorGUILayout.HelpBox(
                "The playable ends inside the Fix-It level, so main-level steps " + string.Join(", ", after) +
                " after it are dropped from this build.",
                MessageType.Warning);
    }

    void DrawFixItLevelSection(Plan plan)
    {
        if (_fixIt != FixItHandling.PlayInnerLevel || !HasFixItLevel || !_selected.Contains(_scan.FixStep))
            return;

        EditorGUILayout.Space(10);
        EditorGUILayout.LabelField(
            "Fix-It level — " + Path.GetFileNameWithoutExtension(_scan.InnerPrefabPath) + " (step " + _scan.FixStep + ")",
            EditorStyles.boldLabel);

        EditorGUI.BeginChangeCheck();
        _innerIndex = EditorGUILayout.Popup(
            new GUIContent("Build from", "The Resources original, or a playable already built from it " +
                "(keeps any hand fixes made on that copy)."),
            _innerIndex, _innerLabels);
        if (EditorGUI.EndChangeCheck())
            RescanInner();

        if (_innerScan == null || !string.IsNullOrEmpty(_innerScan.Error))
        {
            EditorGUILayout.HelpBox("Fix-It level scan failed: " + (_innerScan != null ? _innerScan.Error : "no source"), MessageType.Error);
            return;
        }

        EditorGUILayout.LabelField("Keep Fix-It steps (" + _innerScan.ClassName + ")", EditorStyles.miniBoldLabel);
        DrawStepGrid(_innerScan.Steps, _innerSelected, PersistInnerSteps, false);

        EditorGUI.BeginChangeCheck();
        _afterFixIt = (AfterFixIt)EditorGUILayout.EnumPopup("After last Fix-It step", _afterFixIt);
        if (EditorGUI.EndChangeCheck())
            EditorPrefs.SetInt(PrefAfterFixIt, (int)_afterFixIt);

        if (_innerSelected.Count == 0)
            return;

        var inner = Sorted(_innerSelected);
        int lastInner = inner[inner.Count - 1];
        int fullLast = _innerScan.Steps[_innerScan.Steps.Length - 1];
        string help;

        if (_afterFixIt == AfterFixIt.ReturnToMainLevel)
        {
            help = "Fix-It step " + lastInner + " completes → back to main-level step " + _scan.FixStep +
                   ", which now plays as fixed.";
            if (lastInner < fullLast)
                help += " The Fix-It level is cut after step " + lastInner + "; the main level still counts it as fixed.";
        }
        else
        {
            help = "Fix-It step " + lastInner + " completes → LevelComplete + CTA inside the Fix-It level. " +
                   "The playable never goes back to the main level.";
        }

        if (inner[0] > 1)
            help += "\nFix-It steps before " + inner[0] + " are force-completed at its start (under the fade), same as the main level.";

        help += "\n\nBoth levels sit in the scene; the Fix-It level stays inactive (no script runs) until the " +
                "button is tapped, and is freed once it hands back.";

        EditorGUILayout.HelpBox(help, MessageType.Info);
    }

    void DrawOverwriteNotice(Plan plan)
    {
        if (plan == null || !plan.WantInner || _innerPaths.Length == 0)
            return;

        string dest = InnerDestination();
        if (File.Exists(dest))
            EditorGUILayout.HelpBox(
                "The Fix-It level builds to " + dest + " and overwrites it — including any hand edits on that file. " +
                "Pick it under 'Build from' (with a Variant name) to keep them.",
                MessageType.Warning);
    }

    /// <summary>Same naming rule as PlayableLevelFactory.Build.</summary>
    string InnerDestination()
    {
        string name = Path.GetFileNameWithoutExtension(_innerPaths[_innerIndex]);
        if (name.EndsWith("_Playable", StringComparison.OrdinalIgnoreCase))
            name = name.Substring(0, name.Length - "_Playable".Length);

        string suffix = string.IsNullOrEmpty(_variant) ? "" : "_" + System.Text.RegularExpressions.Regex.Replace(_variant, "[^A-Za-z0-9]", "");
        return PlayableLevelFactory.PlayableLevels + "/" + name + "_Playable" + suffix + ".prefab";
    }

    static List<int> Sorted(IEnumerable<int> items)
    {
        var list = new List<int>(items);
        list.Sort();
        return list;
    }

    bool StepHasContentCached(int step)
    {
        bool has;
        if (!_stepHasContent.TryGetValue(step, out has))
        {
            has = PlayableLevelFactory.StepHasContent(_prefabPaths[_sourceIndex], step);
            _stepHasContent[step] = has;
        }

        return has;
    }

    Plan MakePlan()
    {
        var plan = new Plan();
        var ordered = Sorted(_selected);
        if (ordered.Count == 0)
        {
            plan.Error = "Koi step selected nahi.";
            return plan;
        }

        int ctaStep = ordered.Contains(_ctaStep) ? _ctaStep : ordered[ordered.Count - 1];
        plan.CtaOnFixIt = EndsOnFixItButton(ordered);

        bool fixItPlays = !plan.CtaOnFixIt && _fixIt == FixItHandling.PlayInnerLevel &&
                          HasFixItLevel && ordered.Contains(_scan.FixStep);
        plan.EndsInFixIt = fixItPlays && _afterFixIt == AfterFixIt.EndPlayableInFixItLevel;

        int keepUpTo;
        if (plan.CtaOnFixIt || plan.EndsInFixIt)
        {
            // The button (or the Fix-It level behind it) owns the CTA — no tease after it.
            ctaStep = _scan.FixStep;
            keepUpTo = _scan.FixStep;
        }
        else
        {
            keepUpTo = _ctaTiming == CtaTiming.OnStepStart ? ctaStep - 1 : ctaStep;
        }

        plan.CtaStep = ctaStep;
        plan.TeaseStep = keepUpTo + 1;
        plan.HasTease = !plan.CtaOnFixIt && !plan.EndsInFixIt && StepHasContentCached(plan.TeaseStep);

        plan.Keep = ordered.FindAll(s => s <= keepUpTo);
        if (plan.HasTease && !plan.Keep.Contains(plan.TeaseStep))
        {
            plan.Keep.Add(plan.TeaseStep);
            plan.Keep.Sort();
        }

        if (plan.Keep.Count == 0)
        {
            plan.Error = "CTA Step 'On Start' ka matlab pehla selected step bhi exclude ho gaya — kam az kam 1 step chahiye pehle.";
            return plan;
        }

        plan.WantInner = fixItPlays && _scan.FixStep <= keepUpTo;
        if (!plan.WantInner)
        {
            plan.EndsInFixIt = false;
            return plan;
        }

        if (_innerScan == null || !string.IsNullOrEmpty(_innerScan.Error))
        {
            plan.Error = "Fix-It level scan failed — see the Fix-It level section.";
            return plan;
        }

        plan.InnerKeep = Sorted(_innerSelected);
        if (plan.InnerKeep.Count == 0)
        {
            plan.Error = "Select at least one Fix-It level step.";
            return plan;
        }

        if (string.Equals(InnerDestination(), _innerPaths[_innerIndex], StringComparison.OrdinalIgnoreCase))
            plan.Error = "The Fix-It level would overwrite its own source (" + _innerPaths[_innerIndex] + ") — set a Variant name.";

        return plan;
    }

    /// <summary>"3 → 4 → 5 [Fix-It → Level1_5: 1 → 2 → back to 5] → 6 → CTA"</summary>
    string FlowText(Plan plan)
    {
        var parts = new List<string>();
        string innerName = HasFixItLevel ? Path.GetFileNameWithoutExtension(_scan.InnerPrefabPath) : "";

        foreach (int s in plan.Keep)
        {
            if (plan.HasTease && s == plan.TeaseStep)
                parts.Add(s + " (tease: tool tap → CTA)");
            else if (plan.CtaOnFixIt && s == _scan.FixStep)
                parts.Add(s + " [Fix-It tap → CTA]");
            else if (plan.WantInner && s == _scan.FixStep)
                parts.Add(s + " [Fix-It → " + innerName + ": " + string.Join(" → ", plan.InnerKeep) +
                          (plan.EndsInFixIt ? " → CTA]" : " → back to " + s + "]"));
            else
                parts.Add(s.ToString());
        }

        string flow = string.Join(" → ", parts);
        if (!plan.HasTease && !plan.CtaOnFixIt && !plan.EndsInFixIt)
            flow += " → CTA";
        return flow;
    }

    void DrawCtaSection(Plan plan)
    {
        EditorGUILayout.Space(10);
        EditorGUILayout.LabelField("CTA Trigger", EditorStyles.boldLabel);

        var ordered = Sorted(_selected);
        int lastSelected = ordered[ordered.Count - 1];
        if (_ctaStep < 0 || !ordered.Contains(_ctaStep))
            _ctaStep = lastSelected;

        // The Fix-It button owns the CTA in that mode, so these two controls would only lie.
        if (plan.CtaOnFixIt)
        {
            EditorGUILayout.HelpBox(
                "CTA fires when the Fix-It button on step " + _scan.FixStep + " is tapped — set above, " +
                "under Fix-It button. Timing / CTA Step do not apply.",
                MessageType.None);
            return;
        }

        if (plan.EndsInFixIt)
        {
            EditorGUILayout.HelpBox(
                "CTA fires when the Fix-It level's last kept step completes — set under 'After last Fix-It step'. " +
                "Timing / CTA Step do not apply.",
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

        Plan plan = MakePlan();
        if (!string.IsNullOrEmpty(plan.Error))
        {
            _status = plan.Error;
            return;
        }

        // The step right after the last genuinely playable one is the "tease" step:
        // OnStepStart → ctaStep itself is the tease (nothing before it plays if it's first).
        // OnStepComplete → ctaStep plays normally, ctaStep+1 is the tease.
        // A tease step is built exactly like a normal kept step (real entrance, real tool,
        // its own Complete() falls through to LevelComplete same as any last step) — the
        // only difference is PlayableCTA gets wired to OnToolAppear, watching that step's
        // tool, so tapping it redirects to store instead of actually playing.
        var outerMode = plan.CtaOnFixIt
            ? PlayableLevelFactory.InnerMode.CtaOnFix
            : plan.WantInner
                ? PlayableLevelFactory.InnerMode.Outer
                : PlayableLevelFactory.InnerMode.Exclude;

        if (!plan.WantInner)
        {
            BuildOuter(plan, outerMode, null);
            return;
        }

        // The Fix-It level is a whole second level prefab. Build it first, with its own chosen
        // steps, then hand the built prefab to the outer build so the scene can hold both.
        PlayableLevelFactory.BuildResult innerBuild;
        EditorUtility.DisplayProgressBar("Playable", "Building Fix-It level…", 0.25f);
        try
        {
            innerBuild = PlayableLevelFactory.Build(
                _innerPaths[_innerIndex],
                plan.InnerKeep,
                false,
                plan.EndsInFixIt ? PlayableLevelFactory.InnerMode.InnerEndsPlayable : PlayableLevelFactory.InnerMode.Inner,
                null,
                _variant);
        }
        finally
        {
            EditorUtility.ClearProgressBar();
        }

        if (!innerBuild.Ok)
        {
            _status = "Inner level build fail: " + innerBuild.Error + "\n" + innerBuild.Log;
            EditorUtility.DisplayDialog("Playable", _status, "OK");
            return;
        }

        // Hand the editor a frame before building the outer level. Shrinking textures flips each
        // source texture readable and back through SaveAndReimport; running the second build in
        // this same call reads those textures while the reimport is still settling and throws
        // "texture data is not readable", which kills that build. A tick is all it needs, and it
        // keeps the texture pipeline itself untouched.
        _status = "Inner level ready: " + innerBuild.PrefabPath + " — outer level agle frame pe…";
        string innerPath = innerBuild.PrefabPath;
        EditorApplication.delayCall += delegate
        {
            BuildOuter(plan, outerMode, innerPath);
            Repaint();
        };
    }

    void BuildOuter(Plan plan, PlayableLevelFactory.InnerMode outerMode, string innerBuilt)
    {
        EditorUtility.DisplayProgressBar("Playable", "Building selected steps…", 0.6f);
        try
        {
            var built = PlayableLevelFactory.Build(
                _prefabPaths[_sourceIndex], plan.Keep, _placeInScene, outerMode, innerBuilt, _variant);

            if (built.Ok && plan.HasTease)
            {
                var teaseLog = new List<string>();
                PlayableLevelFactory.ConfigureTeaseCta(built.PrefabPath, plan.TeaseStep, teaseLog);
                built.Log += "\n" + string.Join("\n", teaseLog);
            }

            if (built.Ok)
            {
                string innerLine = string.IsNullOrEmpty(built.InnerPrefabPath)
                    ? string.Empty
                    : "\nFix-It level: " + built.InnerPrefabPath + " (steps " + string.Join(",", plan.InnerKeep) + ")";

                _status = "Ready: " + built.PrefabPath + "\nFlow: " + FlowText(plan) + innerLine + "\n" + built.Log;
                EditorUtility.DisplayDialog(
                    "Playable",
                    "Playable ban gaya.\n\n" + built.PrefabPath + "\n" + FlowText(plan) + innerLine,
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
