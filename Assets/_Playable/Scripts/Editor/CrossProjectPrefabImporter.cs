#if UNITY_EDITOR
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Reflection;
using System.Text;
using System.Text.RegularExpressions;
using UnityEditor;
using UnityEngine;

/// <summary>
/// Brings levels from the parent (full game) project into this playable project, adapted so they just work
/// in Luna:
///  - Batch: pick any number of parent levels; their combined dependency closure is imported once.
///  - References: every asset is copied WITH its .meta (GUIDs preserved). Script GUIDs are remapped when this
///    project already has the same class under another GUID; components whose script can't exist here are
///    removed; references that can't resolve are nulled — nothing arrives "Missing".
///  - Code: scripts are sanitized for Luna (analytics/haptics stripped, OnMouse* polled, animator speed 0,
///    ParticleSystem.Clear(bool)); helper classes referenced only by name are pulled in; SDK/monetization
///    code is blocked; outdated local level scripts are flagged for replacement; the Tools stub is synced.
///  - Repair: finds broken references anywhere in this project (e.g. animator controllers stripped by a
///    playable build) and restores them from the parent.
///  - Safety: existing local assets/scripts are never overwritten unless ticked; everything overwritten is
///    backed up and "Undo Last Import" restores it.
/// Pure logic lives in LunaScriptSanitizer / LunaScriptPlanner / LunaYamlPatcher.
/// </summary>
public partial class CrossProjectPrefabImporter : EditorWindow
{
    private const string Pref = "PerfectMakeover.CrossProjectPrefabImporter.";

    private static readonly HashSet<string> TextScannableExtensions = new HashSet<string>(StringComparer.OrdinalIgnoreCase)
    {
        ".prefab", ".unity", ".mat", ".controller", ".overrideController", ".anim", ".asset",
        ".physicMaterial", ".physicsMaterial2D", ".guiskin", ".mask", ".playable", ".signal",
        ".shadervariants", ".terrainlayer", ".spriteatlas", ".renderTexture", ".lighting",
        ".cubemap", ".preset", ".brush", ".mixer", ".fontsettings", ".flare", ".shadergraph", ".shadersubgraph"
    };

    /// <summary>Shader includes are referenced by relative file name, not GUID.</summary>
    private static readonly HashSet<string> ShaderIncludeExtensions = new HashSet<string>(StringComparer.OrdinalIgnoreCase)
    {
        ".shader", ".cginc", ".hlsl", ".hlslinc", ".glslinc", ".compute"
    };

    // ─────────────────────────────────────────────────────────────────────
    // Settings (persisted)
    // ─────────────────────────────────────────────────────────────────────

    private string sourceProjectRoot;
    private string destRoot;
    private string levelDest;
    private bool renameResources;
    private bool nullUnresolved;
    private bool overwriteExisting;
    private bool cleanUnrepairable;
    private bool stripCalls, convertOnMouse, fixAnimatorSpeed, fixParticleClear, stripMissingMembers, autoReplaceLevels;
    private string blockedFoldersText;
    private string repairScope;

    private enum Tab { ImportLevels, RepairProject }
    private Tab tab;

    private sealed class LevelEntry
    {
        public string Rel, Group, Name;
        public bool Selected, ExistsHere;
        public int SortKey;
    }

    private List<LevelEntry> levels;
    private string levelFilter = "";
    private readonly List<string> extraPrefabs = new List<string>();
    private readonly HashSet<string> replaceChoices = new HashSet<string>(StringComparer.OrdinalIgnoreCase);
    private readonly HashSet<string> declinedReplacements = new HashSet<string>(StringComparer.OrdinalIgnoreCase);

    private Plan plan;
    private Vector2 levelScroll;
    private bool showSettings, showAssets, showScripts = true, showWarnings = true, showLocal = true, showInfo;

    [MenuItem("Playable/Cross-Project Prefab Importer")]
    [MenuItem("Tools/Luna Playables/Cross-Project Prefab Importer")]
    public static void ShowWindow() => GetWindow<CrossProjectPrefabImporter>("Level Importer").minSize = new Vector2(460, 520);

    private void OnEnable()
    {
        sourceProjectRoot = EditorPrefs.GetString(Pref + "SourceProjectRoot", "");
        if (string.IsNullOrEmpty(sourceProjectRoot) && Directory.Exists(@"D:\UNITY\PROJECTS\FashionMakeoverAnd\Assets"))
            sourceProjectRoot = @"D:\UNITY\PROJECTS\FashionMakeoverAnd";
        destRoot = EditorPrefs.GetString(Pref + "DestRoot", "Assets/_ImportedFromParent");
        levelDest = EditorPrefs.GetString(Pref + "LevelDest", PlayableLevelFactory.ImportedLevels);
        renameResources = EditorPrefs.GetBool(Pref + "RenameResources", true);
        nullUnresolved = EditorPrefs.GetBool(Pref + "NullUnresolved", false);
        overwriteExisting = EditorPrefs.GetBool(Pref + "OverwriteExisting", false);
        cleanUnrepairable = EditorPrefs.GetBool(Pref + "CleanUnrepairable", false);
        stripCalls = EditorPrefs.GetBool(Pref + "StripCalls", true);
        convertOnMouse = EditorPrefs.GetBool(Pref + "ConvertOnMouse", true);
        fixAnimatorSpeed = EditorPrefs.GetBool(Pref + "FixAnimatorSpeed", true);
        fixParticleClear = EditorPrefs.GetBool(Pref + "FixParticleClear", true);
        stripMissingMembers = EditorPrefs.GetBool(Pref + "StripMissingMembers", true);
        autoReplaceLevels = EditorPrefs.GetBool(Pref + "AutoReplaceLevels", true);
        blockedFoldersText = EditorPrefs.GetString(Pref + "BlockedFolders", string.Join("\n", LunaScriptPlanner.DefaultBlockedFolders));
        repairScope = EditorPrefs.GetString(Pref + "RepairScope", "Assets");
        RestoreLastImportReport();
    }

    private DateTime lastResultTime;

    private void RestoreLastImportReport()
    {
        var result = PrefabImportTransaction.ReadLastResult();
        if (result == null) return;
        lastImportSummary = result.message;
        lastImportLog = result.logDir;
        lastImportedLevels.Clear();
        lastImportedLevels.AddRange(result.levelPaths.Where(p => File.Exists(Path.Combine(ProjectRoot, p))));
        lastResultTime = File.GetLastWriteTimeUtc(PrefabImportTransaction.ResultPath);
    }

    private void OnInspectorUpdate()
    {
        if (File.Exists(PrefabImportTransaction.ResultPath) && File.GetLastWriteTimeUtc(PrefabImportTransaction.ResultPath) != lastResultTime)
        {
            RestoreLastImportReport();
            Repaint();
        }
    }

    private void SaveSettings()
    {
        EditorPrefs.SetString(Pref + "SourceProjectRoot", sourceProjectRoot ?? "");
        EditorPrefs.SetString(Pref + "DestRoot", destRoot);
        EditorPrefs.SetString(Pref + "LevelDest", levelDest);
        EditorPrefs.SetBool(Pref + "RenameResources", renameResources);
        EditorPrefs.SetBool(Pref + "NullUnresolved", nullUnresolved);
        EditorPrefs.SetBool(Pref + "OverwriteExisting", overwriteExisting);
        EditorPrefs.SetBool(Pref + "CleanUnrepairable", cleanUnrepairable);
        EditorPrefs.SetBool(Pref + "StripCalls", stripCalls);
        EditorPrefs.SetBool(Pref + "ConvertOnMouse", convertOnMouse);
        EditorPrefs.SetBool(Pref + "FixAnimatorSpeed", fixAnimatorSpeed);
        EditorPrefs.SetBool(Pref + "FixParticleClear", fixParticleClear);
        EditorPrefs.SetBool(Pref + "StripMissingMembers", stripMissingMembers);
        EditorPrefs.SetBool(Pref + "AutoReplaceLevels", autoReplaceLevels);
        EditorPrefs.SetString(Pref + "BlockedFolders", blockedFoldersText);
        EditorPrefs.SetString(Pref + "RepairScope", repairScope);
    }

    private static string ProjectRoot => Directory.GetParent(Application.dataPath).FullName;
    private bool SourceValid => !string.IsNullOrEmpty(sourceProjectRoot)
        && Directory.Exists(Path.Combine(sourceProjectRoot, "Assets"))
        && !string.Equals(Path.GetFullPath(sourceProjectRoot).TrimEnd('\\', '/'),
            Path.GetFullPath(ProjectRoot).TrimEnd('\\', '/'), StringComparison.OrdinalIgnoreCase);

    // ─────────────────────────────────────────────────────────────────────
    // UI
    // ─────────────────────────────────────────────────────────────────────

    private const int MaxRowsPerSection = 250;
    private Vector2 mainScroll;
    private string reportFilter = "";
    private readonly List<string> lastImportedLevels = new List<string>();
    private string lastImportLog, lastImportSummary;

    private void OnGUI()
    {
        LunaEditorUI.Header("Cross-Project Level Importer", "Bring parent-project levels in, adapted for Luna, with dependency validation.");

        DrawSourceProject();
        if (!SourceValid) return;

        EditorGUILayout.Space(2);
        var newTab = (Tab)GUILayout.Toolbar((int)tab,
            new[] { new GUIContent("Import Levels", "Pick parent levels and import them with every dependency."),
                    new GUIContent("Repair This Project", "Find broken references here and restore them from the parent.") },
            GUILayout.Height(24));
        if (newTab != tab) { tab = newTab; plan = null; }

        int stage = plan == null ? (tab == Tab.ImportLevels && !HasSelection ? 0 : 1) : 2;
        EditorGUILayout.Space(2);
        LunaEditorUI.Stepper(stage, tab == Tab.ImportLevels ? "Pick levels" : "Choose folder", "Scan", "Review & import");

        mainScroll = EditorGUILayout.BeginScrollView(mainScroll);
        if (lastImportSummary != null) DrawLastImport();
        if (tab == Tab.ImportLevels) DrawLevelPicker();
        else DrawRepairPanel();
        DrawSettings();
        if (plan != null) DrawReport();
        EditorGUILayout.EndScrollView();

        DrawFooter();
    }

    private bool HasSelection => (levels != null && levels.Any(l => l.Selected)) || extraPrefabs.Count > 0;

    private void DrawSourceProject()
    {
        LunaEditorUI.BeginCard();
        EditorGUILayout.BeginHorizontal();
        EditorGUI.BeginChangeCheck();
        sourceProjectRoot = EditorGUILayout.TextField(new GUIContent("Parent Project", "Root folder of the full game project (the one containing Assets)."), sourceProjectRoot);
        if (EditorGUI.EndChangeCheck()) { levels = null; plan = null; SaveSettings(); }
        if (GUILayout.Button("Browse…", GUILayout.Width(70))) BrowseSourceProject();
        if (SourceValid) LunaEditorUI.Badge("found", LunaEditorUI.Good);
        else LunaEditorUI.Badge("not found", LunaEditorUI.Bad);
        EditorGUILayout.EndHorizontal();
        if (!SourceValid)
            EditorGUILayout.HelpBox("Pick the ROOT folder of the parent project (the one containing its Assets folder).", MessageType.Warning);
        LunaEditorUI.EndCard();
    }

    private void DrawLastImport()
    {
        LunaEditorUI.BeginCard("Last import");
        GUILayout.Label(lastImportSummary, LunaEditorUI.Hint);
        EditorGUILayout.BeginHorizontal();
        if (lastImportLog != null && GUILayout.Button("Open Log Folder", EditorStyles.miniButton, GUILayout.Width(110)))
            EditorUtility.RevealInFinder(lastImportLog);
        if (lastImportedLevels.Count > 0 && GUILayout.Button(new GUIContent("Show in Project", "Pings the imported level prefabs (selecting them would keep them loaded, and Luna exports loaded prefabs)."), EditorStyles.miniButton, GUILayout.Width(110)))
            EditorGUIUtility.PingObject(AssetDatabase.LoadAssetAtPath<GameObject>(lastImportedLevels[0]));
        GUILayout.FlexibleSpace();
        if (GUILayout.Button("×", EditorStyles.miniButton, GUILayout.Width(20))) { lastImportSummary = null; lastImportedLevels.Clear(); }
        EditorGUILayout.EndHorizontal();
        foreach (var level in lastImportedLevels)
        {
            EditorGUILayout.BeginHorizontal();
            GUILayout.Label(Path.GetFileNameWithoutExtension(level), GUILayout.Width(160));
            if (GUILayout.Button(new GUIContent("Make Playable →", "Open the Playable Creator with this level."), EditorStyles.miniButton, GUILayout.Width(110)))
                PlayableStepWizard.OpenWithSource(level);
            GUILayout.FlexibleSpace();
            EditorGUILayout.EndHorizontal();
        }
        LunaEditorUI.EndCard();
    }

    private void DrawLevelPicker()
    {
        if (levels == null) DiscoverLevels();

        int selected = levels.Count(l => l.Selected);
        LunaEditorUI.BeginCard($"Levels in parent project  ({levels.Count})");

        EditorGUILayout.BeginHorizontal();
        levelFilter = LunaEditorUI.SearchField(levelFilter);
        if (GUILayout.Button(new GUIContent("All", "Select every level shown"), EditorStyles.miniButtonLeft, GUILayout.Width(34)))
            SetSelection(VisibleLevels(), _ => true);
        if (GUILayout.Button(new GUIContent("None", "Clear the shown levels"), EditorStyles.miniButtonMid, GUILayout.Width(40)))
            SetSelection(VisibleLevels(), _ => false);
        if (GUILayout.Button(new GUIContent("New only", "Select the shown levels that aren't in this project yet"), EditorStyles.miniButtonMid, GUILayout.Width(62)))
            SetSelection(VisibleLevels(), l => !l.ExistsHere);
        if (GUILayout.Button(new GUIContent("↻", "Rescan the parent project for levels"), EditorStyles.miniButtonRight, GUILayout.Width(24)))
            DiscoverLevels();
        EditorGUILayout.EndHorizontal();

        var visible = VisibleLevels().ToList();
        var all = SelectAllToggle(visible.Count(l => l.Selected), visible.Count);
        if (all.HasValue) SetSelection(visible, _ => all.Value);
        float height = Mathf.Clamp(visible.Count * 19f + visible.Select(l => l.Group).Distinct().Count() * 18f, 40f, 240f);
        levelScroll = EditorGUILayout.BeginScrollView(levelScroll, EditorStyles.helpBox, GUILayout.Height(height));
        string group = null;
        foreach (var l in visible)
        {
            if (l.Group != group)
            {
                // Folder header doubles as "select this whole folder" (a dash when only some of its levels are ticked).
                group = l.Group;
                var inGroup = visible.Where(x => x.Group == group).ToList();
                int ticked = inGroup.Count(x => x.Selected);
                EditorGUI.showMixedValue = ticked > 0 && ticked < inGroup.Count;
                EditorGUI.BeginChangeCheck();
                bool folderOn = EditorGUILayout.ToggleLeft($"{group}  ({ticked}/{inGroup.Count})", ticked == inGroup.Count, EditorStyles.miniBoldLabel);
                EditorGUI.showMixedValue = false;
                if (EditorGUI.EndChangeCheck()) SetSelection(inGroup, _ => folderOn);
            }
            EditorGUILayout.BeginHorizontal();
            GUILayout.Space(14);
            bool sel = EditorGUILayout.ToggleLeft(l.Name, l.Selected, l.Selected ? EditorStyles.boldLabel : EditorStyles.label);
            if (sel != l.Selected) { l.Selected = sel; plan = null; }
            GUILayout.FlexibleSpace();
            if (l.ExistsHere) LunaEditorUI.Badge("in project", LunaEditorUI.Muted, 64);
            else LunaEditorUI.Badge("new", LunaEditorUI.Info, 64);
            EditorGUILayout.EndHorizontal();
        }
        if (visible.Count == 0) GUILayout.Label("No level matches the filter.", EditorStyles.centeredGreyMiniLabel);
        EditorGUILayout.EndScrollView();

        EditorGUILayout.BeginHorizontal();
        GUILayout.Label($"{selected} selected" + (extraPrefabs.Count > 0 ? $"  +  {extraPrefabs.Count} other prefab(s)" : ""), EditorStyles.miniBoldLabel);
        GUILayout.FlexibleSpace();
        if (GUILayout.Button(new GUIContent("+ Other Prefab…", "Import any other prefab from the parent project with its dependencies."), EditorStyles.miniButton, GUILayout.Width(110)))
            BrowseExtraPrefab();
        EditorGUILayout.EndHorizontal();
        for (int i = 0; i < extraPrefabs.Count; i++)
        {
            EditorGUILayout.BeginHorizontal();
            GUILayout.Label("   " + extraPrefabs[i], EditorStyles.miniLabel);
            if (GUILayout.Button("×", EditorStyles.miniButton, GUILayout.Width(20))) { extraPrefabs.RemoveAt(i); plan = null; break; }
            EditorGUILayout.EndHorizontal();
        }
        GUILayout.Label($"Level prefabs go to {levelDest}; their dependencies are mirrored under {destRoot}.", LunaEditorUI.Hint);
        LunaEditorUI.EndCard();
    }

    /// <summary>"Select all (n/total)" checkbox; a dash when only some are ticked. Returns the new value when clicked, otherwise null.</summary>
    private static bool? SelectAllToggle(int ticked, int total)
    {
        if (total == 0) return null;
        EditorGUI.showMixedValue = ticked > 0 && ticked < total;
        EditorGUI.BeginChangeCheck();
        bool value = EditorGUILayout.ToggleLeft($"Select all ({ticked}/{total})", ticked == total, EditorStyles.miniBoldLabel);
        EditorGUI.showMixedValue = false;
        return EditorGUI.EndChangeCheck() ? value : (bool?)null;
    }

    private void SetSelection(IEnumerable<LevelEntry> entries, Func<LevelEntry, bool> selected)
    {
        foreach (var l in entries) l.Selected = selected(l);
        plan = null;
    }

    private IEnumerable<LevelEntry> VisibleLevels() =>
        levels.Where(l => string.IsNullOrEmpty(levelFilter) || l.Name.IndexOf(levelFilter, StringComparison.OrdinalIgnoreCase) >= 0
                                                          || l.Group.IndexOf(levelFilter, StringComparison.OrdinalIgnoreCase) >= 0);

    private void DrawRepairPanel()
    {
        LunaEditorUI.BeginCard("Repair broken references",
            "Scans this project's prefabs, scenes, controllers, materials and animations for references that no longer resolve " +
            "(e.g. assets a playable build stripped) and restores them from the parent project with their dependencies. " +
            "Anything that can't be restored is cleaned so nothing shows as Missing.");
        EditorGUILayout.BeginHorizontal();
        EditorGUI.BeginChangeCheck();
        repairScope = EditorGUILayout.TextField("Scan Folder", repairScope);
        if (GUILayout.Button("…", GUILayout.Width(24)))
        {
            string picked = EditorUtility.OpenFolderPanel("Folder to scan", Path.Combine(ProjectRoot, repairScope ?? "Assets"), "");
            if (!string.IsNullOrEmpty(picked) && Path.GetFullPath(picked).StartsWith(Path.GetFullPath(Application.dataPath), StringComparison.OrdinalIgnoreCase))
                repairScope = ToRelative(ProjectRoot, picked);
        }
        if (EditorGUI.EndChangeCheck()) { SaveSettings(); plan = null; }
        EditorGUILayout.EndHorizontal();
        LunaEditorUI.EndCard();
    }

    private void DrawSettings()
    {
        showSettings = LunaEditorUI.BeginFoldoutCard(showSettings, "Settings", overwriteExisting ? "overwrite ON" : null, LunaEditorUI.Warn);
        if (showSettings)
        {
            EditorGUI.BeginChangeCheck();

            GUILayout.Label("Destination", EditorStyles.miniBoldLabel);
            destRoot = EditorGUILayout.TextField(new GUIContent("Dependencies Root", "Where new dependencies are mirrored (parent folder structure kept)."), destRoot);
            levelDest = EditorGUILayout.TextField(new GUIContent("Level Prefabs Folder", "Selected level prefabs go here directly."), levelDest);
            renameResources = EditorGUILayout.ToggleLeft(new GUIContent("Rename 'Resources' folders to '_Resources'", "Everything under a Resources folder ships in the build."), renameResources);

            EditorGUILayout.Space(4);
            GUILayout.Label("Safety", EditorStyles.miniBoldLabel);
            overwriteExisting = EditorGUILayout.ToggleLeft(new GUIContent("Overwrite assets that changed in the parent", "Off: assets already here are kept (local Luna fixes survive); tick items individually in the review."), overwriteExisting);
            nullUnresolved = EditorGUILayout.ToggleLeft(new GUIContent("Set unresolvable references to None", "References to assets that exist in neither project become None instead of Missing."), nullUnresolved);
            cleanUnrepairable = EditorGUILayout.ToggleLeft(new GUIContent("Repair: clean references that can't be restored", "Strip missing-script components and null references that can't be restored."), cleanUnrepairable);

            EditorGUILayout.Space(4);
            GUILayout.Label("Script adaptation for Luna", EditorStyles.miniBoldLabel);
            stripCalls = EditorGUILayout.ToggleLeft("Strip analytics / haptics calls", stripCalls);
            convertOnMouse = EditorGUILayout.ToggleLeft("OnMouse* → polled input", convertOnMouse);
            fixAnimatorSpeed = EditorGUILayout.ToggleLeft("Animator speed 0 → 0.0001", fixAnimatorSpeed);
            fixParticleClear = EditorGUILayout.ToggleLeft("ParticleSystem.Clear(bool) → Clear()", fixParticleClear);
            stripMissingMembers = EditorGUILayout.ToggleLeft(new GUIContent("Strip calls to members this project doesn't have", "Standalone calls like UI_Manager.instance.X() where this project's UI_Manager has no X."), stripMissingMembers);
            autoReplaceLevels = EditorGUILayout.ToggleLeft(new GUIContent("Recommend replacing outdated level scripts", "If imported code needs members a local level script lacks, pre-tick replacing it with the sanitized parent version."), autoReplaceLevels);

            EditorGUILayout.Space(4);
            EditorGUILayout.BeginHorizontal();
            GUILayout.Label("Blocked folders (SDK / monetization, one per line)", EditorStyles.miniBoldLabel);
            GUILayout.FlexibleSpace();
            if (GUILayout.Button("Reset", EditorStyles.miniButton, GUILayout.Width(50))) blockedFoldersText = string.Join("\n", LunaScriptPlanner.DefaultBlockedFolders);
            EditorGUILayout.EndHorizontal();
            blockedFoldersText = EditorGUILayout.TextArea(blockedFoldersText, GUILayout.MinHeight(60));

            if (EditorGUI.EndChangeCheck()) { SaveSettings(); plan = null; }
        }
        LunaEditorUI.EndCard();
    }

    private static Color StateColor(State s)
    {
        switch (s)
        {
            case State.New: return LunaEditorUI.Info;
            case State.Update: return LunaEditorUI.Warn;
            case State.Patch: return LunaEditorUI.Good;
            case State.Conflict: return LunaEditorUI.Bad;
            case State.Remapped: return LunaEditorUI.Purple;
            case State.Blocked: return LunaEditorUI.Bad;
            default: return LunaEditorUI.Muted;
        }
    }

    private static string StateTag(Item item)
    {
        switch (item.State)
        {
            case State.New: return "NEW";
            case State.Update: return item.IsScript ? "REPLACE" : "CHANGED";
            case State.Patch: return "FIX";
            case State.Conflict: return "CONFLICT";
            case State.Remapped: return "REMAPPED";
            case State.Blocked: return "BLOCKED";
            case State.Kept: return "KEPT";
            default: return "OK";
        }
    }

    private bool MatchesFilter(Item i) =>
        string.IsNullOrEmpty(reportFilter) || (i.Dest ?? "").IndexOf(reportFilter, StringComparison.OrdinalIgnoreCase) >= 0;

    /// <summary>Badge + path + notes. Returns the toggle value when <paramref name="toggle"/> is set.</summary>
    private bool DrawItemRow(Item item, bool toggle, bool value)
    {
        EditorGUILayout.BeginHorizontal();
        if (toggle) value = EditorGUILayout.Toggle(value, GUILayout.Width(16));
        LunaEditorUI.Badge(StateTag(item), StateColor(item.State), 70);
        string hits = item.Script?.Sanitized != null && item.Script.Sanitized.RuleHits.Count > 0
            ? "   <color=#8a8a8a>" + string.Join(", ", item.Script.Sanitized.RuleHits.Select(h => $"{h.Key} ×{h.Value}")) + "</color>"
            : "";
        string note = string.IsNullOrEmpty(item.Note) ? "" : $"   <color=#8a8a8a>— {item.Note}</color>";
        GUILayout.Label(new GUIContent(item.Dest + note + hits, item.Dest), LunaEditorUI.RowLabel, GUILayout.MinWidth(80));
        return value;
    }

    private void EndItemRow() => EditorGUILayout.EndHorizontal();

    private void DrawReport()
    {
        var p = plan;
        var warnings = p.Items.Where(i => i.Script?.Sanitized != null && i.Script.Sanitized.Warnings.Count > 0 && i.WillWrite).ToList();
        int warnCount = warnings.Sum(w => w.Script.Sanitized.Warnings.Count) + p.Errors.Count;

        LunaEditorUI.BeginCard("Review");
        EditorGUILayout.BeginHorizontal();
        LunaEditorUI.Badge($"{p.Items.Count(i => i.WillWrite)} to write", LunaEditorUI.Accent);
        LunaEditorUI.Badge($"{p.Items.Count(i => i.State == State.New)} new", LunaEditorUI.Info);
        LunaEditorUI.Badge($"{p.Items.Count(i => i.WillWrite && i.State == State.Update)} replaced", LunaEditorUI.Warn);
        LunaEditorUI.Badge($"{p.Items.Count(i => i.WillWrite && i.State == State.Patch)} fixes", LunaEditorUI.Good);
        LunaEditorUI.Badge($"{p.Items.Count(i => i.State == State.Blocked)} blocked", p.Items.Any(i => i.State == State.Blocked) ? LunaEditorUI.Bad : LunaEditorUI.Muted);
        LunaEditorUI.Badge($"{warnCount} warnings", warnCount > 0 ? LunaEditorUI.Warn : LunaEditorUI.Muted);
        GUILayout.FlexibleSpace();
        EditorGUILayout.EndHorizontal();
        EditorGUILayout.Space(2);
        GUILayout.Label(p.Summary(), LunaEditorUI.Hint);
        reportFilter = LunaEditorUI.SearchField(reportFilter);
        LunaEditorUI.EndCard();

        if (warnCount > 0)
        {
            showWarnings = LunaEditorUI.BeginFoldoutCard(showWarnings, "Needs attention", warnCount.ToString(), LunaEditorUI.Warn);
            if (showWarnings)
            {
                foreach (var e in p.Errors) EditorGUILayout.HelpBox(e, MessageType.Error);
                foreach (var w in warnings.Where(MatchesFilter))
                    EditorGUILayout.HelpBox(Path.GetFileName(w.Dest) + "\n" + string.Join("\n", w.Script.Sanitized.Warnings), MessageType.Warning);
            }
            LunaEditorUI.EndCard();
        }

        var allScripts = p.Items.Where(i => i.IsScript).ToList();
        // Shared framework scripts (UI_Manager, BasicDrag...) carry this project's Luna fixes: listed as a count, never offered for replacement.
        var scripts = allScripts.Where(i => i.State != State.Kept || IsLevelFolder(i.SourceRel)).ToList();
        int keptShared = allScripts.Count - scripts.Count;
        showScripts = LunaEditorUI.BeginFoldoutCard(showScripts, "Scripts", allScripts.Count.ToString(), LunaEditorUI.Info);
        if (showScripts)
        {
            if (keptShared > 0) GUILayout.Label($"{keptShared} shared/framework script(s) already here are kept as-is.", LunaEditorUI.Hint);
            var choices = scripts.Where(i => i.State == State.Update).Where(MatchesFilter).ToList();
            var allScriptsOn = SelectAllToggle(choices.Count(i => i.Enabled), choices.Count);
            if (allScriptsOn.HasValue)
            {
                foreach (var item in choices)
                {
                    item.Enabled = allScriptsOn.Value;
                    if (allScriptsOn.Value) { replaceChoices.Add(item.SourceRel); declinedReplacements.Remove(item.SourceRel); }
                    else { replaceChoices.Remove(item.SourceRel); declinedReplacements.Add(item.SourceRel); }
                }
                EditorApplication.delayCall += Scan;
            }
            foreach (var item in scripts.Where(MatchesFilter).OrderBy(i => i.State).ThenBy(i => i.Dest).Take(MaxRowsPerSection))
            {
                bool isChoice = item.State == State.Update;
                bool on = DrawItemRow(item, isChoice, item.Enabled);
                if (isChoice && on != item.Enabled)
                {
                    item.Enabled = on;
                    if (on) { replaceChoices.Add(item.SourceRel); declinedReplacements.Remove(item.SourceRel); }
                    else { replaceChoices.Remove(item.SourceRel); declinedReplacements.Add(item.SourceRel); }
                    // Other scripts' member checks depend on whether this type is replaced — re-plan.
                    EditorApplication.delayCall += Scan;
                }
                if (item.State == State.Kept && GUILayout.Button(new GUIContent("Replace", "Replace the local script with the sanitized parent version."), EditorStyles.miniButton, GUILayout.Width(58)))
                {
                    replaceChoices.Add(item.SourceRel);
                    declinedReplacements.Remove(item.SourceRel);
                    EditorApplication.delayCall += Scan;
                }
                if (item.Content != null && GUILayout.Button(new GUIContent("Diff", "Open the parent and sanitized versions side by side."), EditorStyles.miniButton, GUILayout.Width(36))) Preview(item);
                EndItemRow();
            }
            DrawOverflow(scripts.Count(MatchesFilter));
        }
        LunaEditorUI.EndCard();

        var local = p.Items.Where(i => i.State == State.Patch).ToList();
        if (local.Count > 0)
        {
            showLocal = LunaEditorUI.BeginFoldoutCard(showLocal, "Fixes to files already in this project", local.Count.ToString(), LunaEditorUI.Good);
            if (showLocal)
            {
                var shownLocal = local.Where(MatchesFilter).ToList();
                var allLocalOn = SelectAllToggle(shownLocal.Count(i => i.Enabled), shownLocal.Count);
                if (allLocalOn.HasValue) foreach (var item in shownLocal) item.Enabled = allLocalOn.Value;
            }
            if (showLocal)
                foreach (var item in local.Where(MatchesFilter).Take(MaxRowsPerSection))
                {
                    item.Enabled = DrawItemRow(item, true, item.Enabled);
                    EndItemRow();
                    foreach (var c in item.Changes.Take(6)) GUILayout.Label("            " + c, EditorStyles.miniLabel);
                    if (item.Changes.Count > 6) GUILayout.Label($"            … {item.Changes.Count - 6} more", EditorStyles.miniLabel);
                }
            LunaEditorUI.EndCard();
        }

        var assets = p.Items.Where(i => !i.IsScript && i.State != State.Patch).ToList();
        var shownAssets = assets.Where(a => a.State != State.UpToDate).Where(MatchesFilter).OrderBy(i => i.State).ThenBy(i => i.Dest).ToList();
        showAssets = LunaEditorUI.BeginFoldoutCard(showAssets, "Assets",
            $"{assets.Count(a => a.State == State.New)} new · {assets.Count(a => a.State == State.Update)} changed · {assets.Count(a => a.State == State.UpToDate)} up to date · {assets.Count(a => a.State == State.Conflict)} conflict",
            LunaEditorUI.Muted);
        if (showAssets)
        {
            if (assets.Any(a => a.State == State.Update))
            {
                EditorGUILayout.BeginHorizontal();
                if (GUILayout.Button("Tick all changed", EditorStyles.miniButtonLeft, GUILayout.Width(110))) foreach (var a in assets.Where(a => a.State == State.Update)) a.Enabled = true;
                if (GUILayout.Button("Untick all changed", EditorStyles.miniButtonRight, GUILayout.Width(120))) foreach (var a in assets.Where(a => a.State == State.Update)) a.Enabled = false;
                GUILayout.FlexibleSpace();
                EditorGUILayout.EndHorizontal();
            }
            var assetChoices = shownAssets.Where(a => a.State == State.Update).ToList();
            var allAssetsOn = SelectAllToggle(assetChoices.Count(a => a.Enabled), assetChoices.Count);
            if (allAssetsOn.HasValue) foreach (var a in assetChoices) a.Enabled = allAssetsOn.Value;
            foreach (var item in shownAssets.Take(MaxRowsPerSection))
            {
                bool choice = item.State == State.Update;
                bool on = DrawItemRow(item, choice, item.Enabled);
                if (choice) item.Enabled = on;
                if (item.State != State.New && GUILayout.Button(new GUIContent("Ping", "Show the existing asset in the Project window."), EditorStyles.miniButton, GUILayout.Width(36)))
                    EditorGUIUtility.PingObject(AssetDatabase.LoadMainAssetAtPath(item.Dest));
                EndItemRow();
                foreach (var c in item.Changes.Take(3)) GUILayout.Label("            " + c, EditorStyles.miniLabel);
            }
            DrawOverflow(shownAssets.Count);
        }
        LunaEditorUI.EndCard();

        if (p.Info.Count > 0)
        {
            showInfo = LunaEditorUI.BeginFoldoutCard(showInfo, "Details", p.Info.Count.ToString());
            if (showInfo) foreach (var line in p.Info.Take(MaxRowsPerSection)) GUILayout.Label(line, LunaEditorUI.Hint);
            LunaEditorUI.EndCard();
        }
    }

    private void DrawOverflow(int total)
    {
        if (total > MaxRowsPerSection)
            GUILayout.Label($"… {total - MaxRowsPerSection} more — type in the filter above to narrow the list.", EditorStyles.centeredGreyMiniLabel);
    }

    private void DrawFooter()
    {
        LunaEditorUI.Separator();
        EditorGUILayout.Space(4);
        EditorGUILayout.BeginHorizontal();

        bool canScan = tab == Tab.RepairProject || HasSelection;
        string scanLabel = tab == Tab.ImportLevels ? (plan == null ? "Scan Selected Levels" : "Rescan") : (plan == null ? "Scan For Broken References" : "Rescan");
        if (LunaEditorUI.BigButton(scanLabel, plan == null ? LunaEditorUI.Accent : Color.white, 34, canScan,
                tab == Tab.ImportLevels ? "Analyse the selected levels. Nothing is written yet." : "Find broken references. Nothing is written yet."))
            EditorApplication.delayCall += Scan;

        int count = plan?.Items.Count(i => i.WillWrite) ?? 0;
        if (LunaEditorUI.BigButton(count > 0 ? $"IMPORT  ({count} files)" : "IMPORT", LunaEditorUI.Good, 34, plan != null && count > 0 && plan.Errors.Count == 0,
                "Write the reviewed files. Everything overwritten is backed up."))
            EditorApplication.delayCall += Import;

        EditorGUILayout.EndHorizontal();

        EditorGUILayout.BeginHorizontal();
        GUILayout.FlexibleSpace();
        if (GUILayout.Button(new GUIContent("Undo Last Import", "Deletes the files the last import created and restores the ones it overwrote."), EditorStyles.miniButton, GUILayout.Width(120)))
            EditorApplication.delayCall += UndoLastImport;
        EditorGUILayout.EndHorizontal();
        EditorGUILayout.Space(2);
    }

    // ─────────────────────────────────────────────────────────────────────
    // Browsing / discovery
    // ─────────────────────────────────────────────────────────────────────

    private void BrowseSourceProject()
    {
        string picked = EditorUtility.OpenFolderPanel("Select parent project root (folder containing its Assets folder)", sourceProjectRoot ?? "", "");
        if (string.IsNullOrEmpty(picked)) return;
        if (!Directory.Exists(Path.Combine(picked, "Assets")))
        {
            EditorUtility.DisplayDialog("Not a Unity project", $"'{picked}' has no 'Assets' folder - pick the project's root folder.", "OK");
            return;
        }
        sourceProjectRoot = picked;
        levels = null; plan = null; extraPrefabs.Clear();
        SaveSettings();
    }

    private void BrowseExtraPrefab()
    {
        string picked = EditorUtility.OpenFilePanel("Select prefab to import", Path.Combine(sourceProjectRoot, "Assets"), "prefab");
        if (string.IsNullOrEmpty(picked)) return;
        string root = Path.GetFullPath(sourceProjectRoot).TrimEnd('\\', '/');
        string full = Path.GetFullPath(picked);
        if (!full.StartsWith(root + Path.DirectorySeparatorChar, StringComparison.OrdinalIgnoreCase))
        {
            EditorUtility.DisplayDialog("Outside parent project", "Pick a prefab under the parent project's Assets folder.", "OK");
            return;
        }
        string rel = ToRelative(root, full);
        if (!extraPrefabs.Contains(rel)) extraPrefabs.Add(rel);
        plan = null;
    }

    private void DiscoverLevels()
    {
        var previous = levels?.Where(l => l.Selected).Select(l => l.Rel).ToHashSet(StringComparer.OrdinalIgnoreCase) ?? new HashSet<string>();
        levels = new List<LevelEntry>();
        string root = Path.GetFullPath(sourceProjectRoot);
        foreach (var file in Directory.EnumerateFiles(Path.Combine(root, "Assets"), "*.prefab", SearchOption.AllDirectories))
        {
            string name = Path.GetFileNameWithoutExtension(file);
            string rel = ToRelative(root, file);
            // Bundled event/special levels use Event1_1 and SP_1, not a "Level" prefix.
            if (!IsDiscoveredLevel(rel)) continue;
            string group = Path.GetDirectoryName(rel).Replace('\\', '/');
            string guid = ReadMetaGuid(file + ".meta");
            var digits = Regex.Match(name, @"\d+");
            levels.Add(new LevelEntry
            {
                Rel = rel, Group = group, Name = name,
                Selected = previous.Contains(rel),
                ExistsHere = guid != null && GuidExistsHere(guid, new Dictionary<string, bool>()),
                SortKey = digits.Success ? int.Parse(digits.Value) : int.MaxValue,
            });
        }
        levels = levels.OrderBy(l => l.Group).ThenBy(l => l.SortKey).ThenBy(l => l.Name).ToList();
    }

    internal static bool IsDiscoveredLevel(string rel)
    {
        string path = rel.Replace('\\', '/');
        if (!path.EndsWith(".prefab", StringComparison.OrdinalIgnoreCase)) return false;
        return path.Split('/').Any(segment => segment.Equals("BundledLevels", StringComparison.OrdinalIgnoreCase))
            || Path.GetFileNameWithoutExtension(path).IndexOf("Level", StringComparison.OrdinalIgnoreCase) >= 0;
    }

    // ─────────────────────────────────────────────────────────────────────
    // Plan model
    // ─────────────────────────────────────────────────────────────────────

    private enum State { New, Update, Patch, Conflict, Remapped, Blocked, Kept, UpToDate }

    private sealed class Item
    {
        public string SourceRel;      // parent-relative (null for fixes to local files)
        public string Dest;           // this-project-relative
        public string Guid;
        public State State;
        public bool Enabled = true;
        public bool IsScript;
        public bool CopyMeta = true;
        public bool IsLevelSeed;
        public string Note;
        public string Content;        // text to write; null = copy source bytes
        public string MetaContent;
        public bool WriteBom;
        public LunaScriptPlanner.ScriptPlan Script;
        public readonly List<string> Changes = new List<string>();

        public bool WillWrite =>
            (State == State.New) || ((State == State.Update || State == State.Patch) && Enabled);

        public string Label()
        {
            string tag = State switch
            {
                State.New => "[NEW]",
                State.Update => IsScript ? "[REPLACE]" : "[CHANGED]",
                State.Patch => "[FIX]",
                State.Conflict => "[CONFLICT]",
                State.Remapped => "[REMAPPED]",
                State.Blocked => "[BLOCKED]",
                State.Kept => "[KEPT]",
                _ => "[OK]"
            };
            string hits = Script?.Sanitized != null && Script.Sanitized.RuleHits.Count > 0
                ? "  {" + string.Join(", ", Script.Sanitized.RuleHits.Select(h => $"{h.Key} x{h.Value}")) + "}"
                : "";
            return $"{tag} {Dest}{(string.IsNullOrEmpty(Note) ? "" : "  - " + Note)}{hits}";
        }
    }

    private sealed class Plan
    {
        public string Label;
        public readonly Dictionary<string, string> InputHashes = new Dictionary<string, string>(StringComparer.OrdinalIgnoreCase);
        public readonly Dictionary<string, string> Remap = new Dictionary<string, string>(StringComparer.OrdinalIgnoreCase);
        public readonly List<Item> Items = new List<Item>();
        public readonly List<string> Info = new List<string>();
        public readonly List<string> Errors = new List<string>();

        public string Summary()
        {
            int write = Items.Count(i => i.WillWrite);
            return $"{Items.Count} file(s) analysed - {write} to write " +
                   $"({Items.Count(i => i.State == State.New)} new, {Items.Count(i => i.WillWrite && i.State == State.Update)} replaced, " +
                   $"{Items.Count(i => i.WillWrite && i.State == State.Patch)} fixed), {Items.Count(i => i.State == State.Blocked)} blocked";
        }
    }

    // ─────────────────────────────────────────────────────────────────────
    // Scan
    // ─────────────────────────────────────────────────────────────────────

    private void Scan()
    {
        try
        {
            if (!SourceValid) throw new InvalidOperationException("Choose a different Unity source project.");
            destRoot = NormalizeAssetsPath(destRoot, "Assets/_ImportedFromParent");
            levelDest = NormalizeAssetsPath(levelDest, PlayableLevelFactory.ImportedLevels);
            SaveSettings();
            EditorUtility.DisplayProgressBar("Cross-Project Importer", "Indexing parent project...", 0.05f);
            var index = BuildGuidIndex(sourceProjectRoot, out var allSourceScripts);
            var existsCache = new Dictionary<string, bool>();

            var seeds = new List<string>();
            var levelSeeds = new HashSet<string>(StringComparer.OrdinalIgnoreCase);
            var localBroken = new Dictionary<string, HashSet<string>>(StringComparer.OrdinalIgnoreCase); // local file -> broken guids

            if (tab == Tab.ImportLevels)
            {
                foreach (var l in (levels ?? new List<LevelEntry>()).Where(l => l.Selected)) { seeds.Add(l.Rel); levelSeeds.Add(l.Rel); }
                seeds.AddRange(extraPrefabs);
                levelSeeds.UnionWith(extraPrefabs);
            }
            else
            {
                EditorUtility.DisplayProgressBar("Cross-Project Importer", "Scanning this project for broken references...", 0.15f);
                FindBrokenLocalReferences(NormalizeAssetsPath(repairScope, "Assets"), existsCache, localBroken);
                foreach (var guid in localBroken.Values.SelectMany(g => g).Distinct())
                    if (index.TryGetValue(guid, out var rel) && !seeds.Contains(rel)) seeds.Add(rel);
            }

            EditorUtility.DisplayProgressBar("Cross-Project Importer", "Walking dependencies...", 0.3f);
            plan = BuildPlan(index, allSourceScripts, seeds, levelSeeds, localBroken, existsCache);
            plan.Label = tab == Tab.ImportLevels
                ? (levelSeeds.Count == 1 ? Path.GetFileNameWithoutExtension(levelSeeds.First()) : $"{seeds.Count}_prefabs")
                : "repair";
        }
        catch (Exception e)
        {
            Debug.LogException(e);
            EditorUtility.DisplayDialog("Scan failed", e.Message, "OK");
            plan = null;
        }
        finally
        {
            EditorUtility.ClearProgressBar();
        }
        Repaint();
    }

    private Plan BuildPlan(Dictionary<string, string> index, List<string> allSourceScripts, List<string> seeds, HashSet<string> levelSeeds,
        Dictionary<string, HashSet<string>> localBroken, Dictionary<string, bool> existsCache)
    {
        var p = new Plan();
        var visited = WalkClosure(index, seeds, p, existsCache);
        var catalog = new ReflectionCatalog();
        var classToGuid = BuildLocalComponentScriptMap();
        var blockedFolders = blockedFoldersText.Split('\n').Select(s => s.Trim()).Where(s => s.Length > 0).ToList();

        // ── Scripts: classify, then plan (sanitize / code deps / block) ──
        var remap = p.Remap;
        var blockedGuids = new HashSet<string>(StringComparer.OrdinalIgnoreCase);
        var newScripts = new List<string>();
        var keptScripts = new List<string>();
        foreach (var rel in visited.Where(IsScriptPath))
        {
            string guid = ReadMetaGuid(Path.Combine(sourceProjectRoot, rel) + ".meta");
            if (guid == null) continue;
            string cls = Path.GetFileNameWithoutExtension(rel);
            string localClass = cls.StartsWith("CG_", StringComparison.Ordinal) && catalog.IsKnownType(cls.Substring(3))
                ? cls.Substring(3) : cls;

            if (GuidExistsHere(guid, existsCache)) { keptScripts.Add(rel); continue; }

            if (classToGuid.TryGetValue(localClass, out var localGuid))
            {
                remap[guid] = localGuid;
                p.Items.Add(new Item { SourceRel = rel, Dest = AssetDatabase.GUIDToAssetPath(localGuid), Guid = guid, IsScript = true, State = State.Remapped, Note = "same class already here - references pointed at the local script" });
            }
            else if (catalog.IsKnownType(localClass))
            {
                blockedGuids.Add(guid);
                p.Items.Add(new Item { SourceRel = rel, Dest = MirrorPath(rel), Guid = guid, IsScript = true, State = State.Blocked, Note = $"'{cls}' exists here only as a stub/non-component - its components are removed" });
            }
            else newScripts.Add(rel);
        }

        var planner = LunaScriptPlanner.Plan(new LunaScriptPlanner.Input
        {
            SourceProjectRoot = sourceProjectRoot,
            TransformSource = text => AdaptMakeoverTypes(text, catalog),
            AllSourceScripts = allSourceScripts,
            NewScripts = newScripts,
            ReplaceScripts = keptScripts.Where(replaceChoices.Contains).ToList(),
            NeverReplace = declinedReplacements,
            AutoReplaceOutdatedLevelScripts = autoReplaceLevels,
            SourceScriptExistsHere = rel =>
            {
                string g = ReadMetaGuid(Path.Combine(sourceProjectRoot, rel) + ".meta");
                string cls = Path.GetFileNameWithoutExtension(rel);
                return (g != null && GuidExistsHere(g, existsCache)) || catalog.IsKnownType(cls)
                    || (cls.StartsWith("CG_", StringComparison.Ordinal) && catalog.IsKnownType(cls.Substring(3)));
            },
            BlockedFolders = blockedFolders,
            SanitizeOptions = new LunaSanitizeOptions
            {
                StripCalls = stripCalls,
                ConvertOnMouse = convertOnMouse,
                FixAnimatorSpeed = fixAnimatorSpeed,
                FixParticleClear = fixParticleClear,
                StripMissingSingletonCalls = stripMissingMembers,
                Catalog = catalog,
            },
        });

        // Helpers discovered by C# name can have .meta/default-reference dependencies too.
        // Re-run closure with them as seeds until no additional script is discovered.
        var extraScripts = planner.Scripts.Keys.Except(visited, StringComparer.OrdinalIgnoreCase).ToList();
        if (extraScripts.Count > 0)
            return BuildPlan(index, allSourceScripts, seeds.Concat(extraScripts).Distinct(StringComparer.OrdinalIgnoreCase).ToList(),
                levelSeeds, localBroken, existsCache);

        foreach (var sp in planner.Scripts.Values)
        {
            string srcFull = Path.Combine(sourceProjectRoot, sp.SourceRel);
            string guid = ReadMetaGuid(srcFull + ".meta");
            if (guid == null) continue;

            if (sp.Outcome == LunaScriptPlanner.Outcome.Block)
            {
                blockedGuids.Add(guid);
                p.Items.Add(new Item { SourceRel = sp.SourceRel, Dest = MirrorPath(sp.SourceRel), Guid = guid, IsScript = true, State = State.Blocked, Note = sp.BlockReason, Script = sp });
                continue;
            }

            var item = new Item
            {
                SourceRel = sp.SourceRel, Guid = guid, IsScript = true, Script = sp,
                Content = sp.Sanitized.Text, WriteBom = HasBom(srcFull),
            };
            if (sp.ExistsHere)
            {
                item.Dest = AssetDatabase.GUIDToAssetPath(guid);
                item.State = State.Update;
                item.CopyMeta = false;
                item.Enabled = replaceChoices.Contains(sp.SourceRel) || sp.ReplaceRecommended;
                item.Note = sp.ReplaceRecommended ? "RECOMMENDED: imported code needs members this local copy doesn't have" : "replace local copy with sanitized parent version";
            }
            else
            {
                item.Dest = MirrorPath(sp.SourceRel);
                item.State = DestConflict(item.Dest, guid, out string reason) ? State.Conflict : State.New;
                item.Enabled = false;
                item.Note = item.State == State.Conflict ? reason : sp.IsCodeDependency ? "helper class used by name" : null;
            }
            p.Items.Add(item);
        }
        foreach (var rel in keptScripts.Where(r => !planner.Scripts.ContainsKey(r)))
        {
            string guid = ReadMetaGuid(Path.Combine(sourceProjectRoot, rel) + ".meta");
            p.Items.Add(new Item { SourceRel = rel, Dest = AssetDatabase.GUIDToAssetPath(guid), Guid = guid, IsScript = true, State = State.Kept, Note = "already here - local version kept" });
        }
        if (planner.UnavailableTypes.Count > 0)
            p.Info.Add("Types only available in blocked code (standalone calls stripped): " + string.Join(", ", planner.UnavailableTypes));

        // ── Non-script assets ──
        var assetItems = new List<Item>();
        var claimedDests = new HashSet<string>(StringComparer.OrdinalIgnoreCase);
        foreach (var rel in visited.Where(r => !IsScriptPath(r)))
        {
            string srcFull = Path.Combine(sourceProjectRoot, rel);
            string guid = ReadMetaGuid(srcFull + ".meta");
            if (guid == null) continue;

            var item = new Item { SourceRel = rel, Guid = guid, IsLevelSeed = levelSeeds.Contains(rel) };
            string existing = GuidExistsHere(guid, existsCache) ? AssetDatabase.GUIDToAssetPath(guid) : null;
            // Luna ships each GUID separately, so a second copy of the same clip doubles its size in the build.
            if (existing == null && LocalAudioTwin(srcFull) is string twin)
            {
                remap[guid] = AssetDatabase.AssetPathToGUID(twin);
                p.Items.Add(new Item { SourceRel = rel, Dest = twin, Guid = guid, State = State.Remapped, Note = "identical audio already here - references pointed at it" });
                continue;
            }
            item.Dest = existing ?? (item.IsLevelSeed ? LevelDestPath(rel, guid, claimedDests) : MirrorPath(rel));
            claimedDests.Add(item.Dest);
            // Conflicts are known up front so references to an asset that won't be copied get nulled, not left Missing.
            if (!File.Exists(Path.Combine(ProjectRoot, item.Dest))) item.State = State.New;
            else if (DestConflict(item.Dest, guid, out string reason)) { item.State = State.Conflict; item.Note = reason; item.Enabled = false; }
            else item.State = State.UpToDate; // refined below once content is known
            assetItems.Add(item);
        }
        p.Items.AddRange(assetItems);

        // Everything that will resolve after import.
        var willExist = new HashSet<string>(StringComparer.OrdinalIgnoreCase);
        foreach (var i in p.Items)
            if (i.Guid != null && (i.State != State.Blocked && i.State != State.Conflict)) willExist.Add(i.Guid);
        bool Resolves(string g) => LunaYamlPatcher.IsBuiltinGuid(g) || willExist.Contains(g) || remap.ContainsKey(g) || GuidExistsHere(g, existsCache);
        bool ScriptUsable(string g) => !blockedGuids.Contains(g) && Resolves(g);
        var sourceDestinations = p.Items.Where(i => i.SourceRel != null && i.State != State.Blocked)
            .GroupBy(i => i.SourceRel, StringComparer.OrdinalIgnoreCase).ToDictionary(g => g.Key, g => g.First().Dest, StringComparer.OrdinalIgnoreCase);

        foreach (var item in assetItems)
        {
            string srcFull = Path.Combine(sourceProjectRoot, item.SourceRel);
            string destFull = Path.Combine(ProjectRoot, item.Dest);
            string ext = Path.GetExtension(item.SourceRel);

            if (TextScannableExtensions.Contains(ext))
            {
                string text = SafeReadText(srcFull);
                if (text != null && LunaYamlPatcher.IsYaml(text))
                {
                    text = LunaYamlPatcher.RemapGuids(text, remap, out int remapped);
                    text = Regex.Replace(text, @"(?m)^(\s*(?:m_TargetAssemblyTypeName|m_ObjectArgumentAssemblyTypeName|m_EditorClassIdentifier):[^\r\n]*)",
                        m => AdaptMakeoverTypes(m.Value, catalog));
                    if (remapped > 0) item.Changes.Add($"{remapped} script reference(s) remapped to local scripts");
                    if (ext.Equals(".prefab", StringComparison.OrdinalIgnoreCase) || ext.Equals(".unity", StringComparison.OrdinalIgnoreCase))
                    {
                        var removed = new List<string>();
                        text = LunaYamlPatcher.StripUnusableComponents(text, ScriptUsable, removed);
                        item.Changes.AddRange(removed.Select(r => "removed " + r));
                    }
                    if (nullUnresolved)
                    {
                        var nulled = new List<string>();
                        text = LunaYamlPatcher.NullUnresolvedReferences(text, Resolves, nulled);
                        item.Changes.AddRange(nulled.Select(n => "nulled " + n));
                    }
                    item.Content = text;
                }
            }
            else if (ShaderIncludeExtensions.Contains(ext))
            {
                string text = SafeReadText(srcFull);
                if (text != null)
                    item.Content = Regex.Replace(text, "(#\\s*include(?:_with_pragmas)?\\s+\")([^\"]+)(\")", m =>
                    {
                        string include = m.Groups[2].Value.Replace('\\', '/');
                        string relative = include.StartsWith("Assets/", StringComparison.OrdinalIgnoreCase) ? include
                            : Path.GetDirectoryName(item.SourceRel).Replace('\\', '/') + "/" + include;
                        string candidate = Path.GetFullPath(Path.Combine(sourceProjectRoot, relative));
                        if (!candidate.StartsWith(Path.GetFullPath(sourceProjectRoot) + Path.DirectorySeparatorChar, StringComparison.OrdinalIgnoreCase)) return m.Value;
                        string rel = ToRelative(sourceProjectRoot, candidate);
                        return sourceDestinations.TryGetValue(rel, out string target) ? m.Groups[1].Value + target + m.Groups[3].Value : m.Value;
                    });
            }

            if (item.State == State.UpToDate)
            {
                bool same = item.Content != null ? SafeReadText(destFull) == item.Content : FilesIdentical(srcFull, destFull);
                item.State = same ? State.UpToDate : State.Update;
                item.Enabled = overwriteExisting;
                if (!same) item.Note = item.IsLevelSeed ? "level already here - tick to overwrite with parent version" : "differs from parent (local changes kept unless ticked)";
                item.CopyMeta = true;
            }
            if (item.IsLevelSeed && item.State == State.New) item.Note = "level prefab";
        }

        // ── Tools enum stub ──
        var stub = BuildToolsStubSync(allSourceScripts);
        if (stub != null) p.Items.Add(stub);

        // ── Repair: clean local files whose references can't be restored ──
        var alreadyWritten = new HashSet<string>(p.Items.Where(i => i.WillWrite).Select(i => i.Dest), StringComparer.OrdinalIgnoreCase);
        foreach (var kv in localBroken)
        {
            if (alreadyWritten.Contains(kv.Key)) continue;
            if (!kv.Value.Any(g => !Resolves(g) || blockedGuids.Contains(g))) continue;
            string full = Path.Combine(ProjectRoot, kv.Key);
            string text = SafeReadText(full);
            if (text == null) continue;
            var changes = new List<string>();
            string patched = text;
            string ext = Path.GetExtension(kv.Key);
            if (ext.Equals(".prefab", StringComparison.OrdinalIgnoreCase) || ext.Equals(".unity", StringComparison.OrdinalIgnoreCase))
            {
                var removed = new List<string>();
                patched = LunaYamlPatcher.StripUnusableComponents(patched, ScriptUsable, removed);
                changes.AddRange(removed.Select(r => "remove " + r));
            }
            var nulled = new List<string>();
            patched = LunaYamlPatcher.NullUnresolvedReferences(patched, Resolves, nulled);
            changes.AddRange(nulled.Select(n => "null " + n));
            if (patched == text) continue;
            var fix = new Item { Dest = kv.Key, State = State.Patch, Content = patched, CopyMeta = false, Enabled = cleanUnrepairable, Note = "references that can't be restored from the parent" };
            fix.Changes.AddRange(changes);
            p.Items.Add(fix);
        }
        if (tab == Tab.RepairProject)
        {
            int broken = localBroken.Values.SelectMany(g => g).Distinct().Count();
            p.Info.Insert(0, $"{localBroken.Count} local file(s) with {broken} broken reference(s); {seeds.Count} restorable from the parent.");
        }

        foreach (var item in p.Items.Where(i => i.SourceRel != null && i.CopyMeta))
        {
            string meta = SafeReadText(Path.Combine(sourceProjectRoot, item.SourceRel) + ".meta");
            if (meta == null) { p.Errors.Add("Missing .meta: " + item.SourceRel); continue; }
            item.MetaContent = LunaYamlPatcher.RemapGuids(meta, remap, out _);
            item.MetaContent = Regex.Replace(item.MetaContent, @"(?m)^(\s*assetBundle(?:Name|Variant):)[^\r\n]*", "$1 ");
        }
        foreach (var item in p.Items)
        {
            if (item.SourceRel != null)
            {
                string source = Path.Combine(sourceProjectRoot, item.SourceRel);
                p.InputHashes[source] = FileHash(source);
                p.InputHashes[source + ".meta"] = FileHash(source + ".meta");
            }
            if (item.Dest != null)
            {
                string target = Path.Combine(ProjectRoot, item.Dest);
                p.InputHashes[target] = FileHash(target);
                p.InputHashes[target + ".meta"] = FileHash(target + ".meta");
            }
        }
        return p;
    }

    internal static string AdaptMakeoverTypes(string text, ILunaTypeCatalog catalog)
    {
        string mask = LunaScriptSanitizer.Mask(text);
        var result = new StringBuilder(text);
        foreach (Match match in Regex.Matches(mask, @"\bCG_([A-Za-z_]\w*)\b").Cast<Match>().Reverse())
            if (catalog.IsKnownType(match.Groups[1].Value))
            {
                result.Remove(match.Index, match.Length);
                result.Insert(match.Index, match.Groups[1].Value);
            }
        string adapted = result.ToString();
        if (catalog.IsKnownType("SaveSystem") && !catalog.HasMember("SaveSystem", "GetLevel") && catalog.HasMember("SaveSystem", "DataFields"))
        {
            // This playable's save system is an in-memory array; the parent's GetLevel accessor
            // returns the same per-level record (including the event's level index).
            mask = LunaScriptSanitizer.Mask(adapted);
            result = new StringBuilder(adapted);
            foreach (Match match in Regex.Matches(mask, @"\bSaveSystem\s*\.\s*Instance\s*\.\s*GetLevel\s*\(\s*([^()]+?)\s*\)").Cast<Match>().Reverse())
            {
                string index = adapted.Substring(match.Groups[1].Index, match.Groups[1].Length);
                result.Remove(match.Index, match.Length);
                result.Insert(match.Index, "SaveSystem.Instance.DataFields.AllLevels[" + index + "]");
            }
            adapted = result.ToString();
        }
        return adapted;
    }

    private static string FileHash(string path)
    {
        if (!File.Exists(path)) return null;
        using (var sha = System.Security.Cryptography.SHA256.Create())
        using (var stream = File.OpenRead(path))
            return Convert.ToBase64String(sha.ComputeHash(stream));
    }

    private List<string> WalkClosure(Dictionary<string, string> index, List<string> seeds, Plan p, Dictionary<string, bool> existsCache)
    {
        var visited = new List<string>();
        var seen = new HashSet<string>(StringComparer.OrdinalIgnoreCase);
        var queue = new Queue<string>();
        foreach (var s in seeds) if (seen.Add(s)) queue.Enqueue(s);
        var reportedUnresolved = new HashSet<string>();

        while (queue.Count > 0)
        {
            string rel = queue.Dequeue();
            string full = Path.Combine(sourceProjectRoot, rel);
            if (!File.Exists(full)) { p.Errors.Add("Missing source dependency: " + rel); continue; }
            visited.Add(rel);

            string meta = SafeReadText(full + ".meta");
            if (ReadMetaGuid(full + ".meta") == null)
                p.Errors.Add("Missing or invalid source .meta: " + rel);
            var dependencies = LunaYamlPatcher.ReferencedGuids(meta ?? "");
            dependencies.Remove(ReadMetaGuid(full + ".meta") ?? "");
            string ext = Path.GetExtension(rel);
            bool yaml = TextScannableExtensions.Contains(ext);
            bool shader = ShaderIncludeExtensions.Contains(ext);
            string text = (yaml || shader) ? SafeReadText(full) : null;
            if ((yaml || shader) && text == null) p.Errors.Add("Cannot read dependency: " + rel);
            if (yaml && text != null)
            {
                if (!LunaYamlPatcher.IsYaml(text)) p.Errors.Add("Not text-serialized, dependencies not scanned: " + rel);
                else dependencies.UnionWith(LunaYamlPatcher.ReferencedGuids(text));
            }
            if (shader && text != null)
            {
                string dir = Path.GetDirectoryName(rel).Replace('\\', '/');
                foreach (Match m in Regex.Matches(text, "#\\s*include(?:_with_pragmas)?\\s+[\"<]([^\">]+)[\">]"))
                {
                    string include = m.Groups[1].Value.Replace('\\', '/');
                    string candidate = Path.GetFullPath(Path.Combine(sourceProjectRoot,
                        include.StartsWith("Assets/", StringComparison.OrdinalIgnoreCase) ? include : dir + "/" + include));
                    if (!File.Exists(candidate)) continue; // Unity/package built-in includes are not source Assets.
                    string incRel = ToRelative(sourceProjectRoot, candidate);
                    if (!incRel.StartsWith("Assets/", StringComparison.OrdinalIgnoreCase))
                    {
                        if (!File.Exists(Path.Combine(ProjectRoot, incRel))) p.Errors.Add("Shader include is outside Assets: " + incRel);
                        continue;
                    }
                    if (seen.Add(incRel)) queue.Enqueue(incRel);
                }
            }

            foreach (var guid in dependencies)
            {
                if (index.TryGetValue(guid, out string dep))
                {
                    if (seen.Add(dep)) queue.Enqueue(dep);
                }
                else if (!GuidExistsHere(guid, existsCache) && reportedUnresolved.Add(guid))
                {
                    p.Info.Add($"Unresolved in both projects (nulled if enabled): guid {guid} referenced by {rel}");
                }
            }
        }
        return visited;
    }

    private void FindBrokenLocalReferences(string scope, Dictionary<string, bool> existsCache, Dictionary<string, HashSet<string>> result)
    {
        string root = Path.Combine(ProjectRoot, scope);
        if (!Directory.Exists(root)) return;
        foreach (var file in Directory.EnumerateFiles(root, "*", SearchOption.AllDirectories))
        {
            if (!TextScannableExtensions.Contains(Path.GetExtension(file))) continue;
            string rel = ToRelative(ProjectRoot, file);
            if (rel.Split('/').Any(seg => seg.StartsWith(".", StringComparison.Ordinal))) continue;
            string text = SafeReadText(file);
            if (text == null || !LunaYamlPatcher.IsYaml(text)) continue;
            foreach (var guid in LunaYamlPatcher.ReferencedGuids(text))
            {
                if (GuidExistsHere(guid, existsCache)) continue;
                if (!result.TryGetValue(rel, out var set)) result[rel] = set = new HashSet<string>(StringComparer.OrdinalIgnoreCase);
                set.Add(guid);
            }
        }
    }

    /// <summary>Appends Tools enum values the parent has but PlayableStubs.cs doesn't (value-exact, so serialized tools keep their meaning).</summary>
    private Item BuildToolsStubSync(List<string> allSourceScripts)
    {
        string stubPath = AssetDatabase.FindAssets("PlayableStubs t:MonoScript")
            .Select(AssetDatabase.GUIDToAssetPath).FirstOrDefault(pth => pth.EndsWith("/PlayableStubs.cs", StringComparison.Ordinal));
        if (stubPath == null) return null;

        string parentFile = allSourceScripts.Where(r => r.EndsWith("/UI_Manager.cs", StringComparison.OrdinalIgnoreCase))
            .Concat(allSourceScripts)
            .FirstOrDefault(r => Regex.IsMatch(SafeReadText(Path.Combine(sourceProjectRoot, r)) ?? "", @"\benum\s+Tools\b"));
        if (parentFile == null) return null;

        var parentMembers = ParseEnum(SafeReadText(Path.Combine(sourceProjectRoot, parentFile)), "Tools");
        string stubFull = Path.Combine(ProjectRoot, stubPath);
        string stubText = SafeReadText(stubFull);
        var localMembers = ParseEnum(stubText, "Tools");
        if (parentMembers == null || localMembers == null) return null;

        var missing = parentMembers.Where(pm => !localMembers.Any(lm => lm.Key == pm.Key)).ToList();
        if (missing.Count == 0) return null;

        string mask = LunaScriptSanitizer.Mask(stubText);
        var m = Regex.Match(mask, @"\benum\s+Tools\s*\{");
        int close = mask.IndexOf('}', m.Index + m.Length);
        string nl = stubText.Contains("\r\n") ? "\r\n" : "\n";
        var insert = new StringBuilder();
        foreach (var kv in missing) insert.Append("    ").Append(kv.Key).Append(kv.Value != null ? " = " + kv.Value : "").Append(",").Append(nl);
        int lineStart = stubText.LastIndexOf('\n', close - 1) + 1;
        string patched = stubText.Insert(lineStart, insert.ToString());
        int lastCode = lineStart - 1;
        while (lastCode > 0 && char.IsWhiteSpace(mask[lastCode])) lastCode--;
        if (mask[lastCode] != ',' && mask[lastCode] != '{') patched = patched.Insert(lastCode + 1, ",");

        var item = new Item { Dest = stubPath, State = State.Patch, Content = patched, CopyMeta = false, Note = $"Tools stub: add {missing.Count} value(s) the parent defines" };
        item.Changes.Add(string.Join(", ", missing.Select(kv => kv.Key)));
        return item;
    }

    private static List<KeyValuePair<string, string>> ParseEnum(string text, string name)
    {
        if (text == null) return null;
        string mask = LunaScriptSanitizer.Mask(text);
        var m = Regex.Match(mask, @"\benum\s+" + name + @"\s*\{([^}]*)\}");
        if (!m.Success) return null;
        return m.Groups[1].Value.Split(',')
            .Select(e => e.Trim()).Where(e => e.Length > 0)
            .Select(e =>
            {
                var parts = e.Split('=');
                return new KeyValuePair<string, string>(parts[0].Trim(), parts.Length > 1 ? parts[1].Trim() : null);
            }).ToList();
    }

    // ─────────────────────────────────────────────────────────────────────
    // Import / Undo
    // ─────────────────────────────────────────────────────────────────────

    private List<string> ValidatePlan(Plan candidate)
    {
        var errors = new List<string>(candidate.Errors);
        foreach (var input in candidate.InputHashes)
            if (FileHash(input.Key) != input.Value) errors.Add("File changed since scan; rescan: " + input.Key);
        if (!SourceValid) errors.Add("Choose a source project different from this project.");
        if (EditorApplication.isPlayingOrWillChangePlaymode || EditorApplication.isCompiling || EditorUtility.scriptCompilationFailed)
            errors.Add("Exit Play Mode and resolve compilation errors before importing.");
        var writes = candidate.Items.Where(i => i.WillWrite).ToList();
        var available = new HashSet<string>(writes.Where(i => i.Guid != null).Select(i => i.Guid), StringComparer.OrdinalIgnoreCase);
        var cache = new Dictionary<string, bool>();
        foreach (var group in writes.GroupBy(i => i.Dest, StringComparer.OrdinalIgnoreCase).Where(g => g.Count() > 1))
            errors.Add("Multiple assets target " + group.Key);
        foreach (var item in writes)
        {
            try
            {
                string normalized = NormalizeAssetsPath(item.Dest, "Assets");
                if (!normalized.StartsWith("Assets/", StringComparison.OrdinalIgnoreCase))
                    throw new InvalidOperationException("Cannot write the Assets root.");
                if (item.Guid != null)
                {
                    string existing = AssetDatabase.GUIDToAssetPath(item.Guid);
                    if (GuidExistsHere(item.Guid, cache) && !existing.Equals(item.Dest, StringComparison.OrdinalIgnoreCase))
                        errors.Add(item.Dest + ": GUID already belongs to " + existing + ". Rescan.");
                }
                if (item.Guid != null && DestConflict(normalized, item.Guid, out var reason))
                    errors.Add(item.Dest + ": " + reason + ". Use another destination folder.");
                if (item.SourceRel != null)
                {
                    string source = Path.GetFullPath(Path.Combine(sourceProjectRoot, item.SourceRel));
                    string assets = Path.GetFullPath(Path.Combine(sourceProjectRoot, "Assets")) + Path.DirectorySeparatorChar;
                    if (!source.StartsWith(assets, StringComparison.OrdinalIgnoreCase) || !File.Exists(source))
                        errors.Add("Missing source asset or path outside source Assets: " + item.SourceRel);
                    if (item.CopyMeta && ReadMetaGuid(source + ".meta") != item.Guid)
                        errors.Add("Source GUID changed since scan: " + item.SourceRel + ". Rescan.");
                }
                if (item.Script?.Sanitized != null)
                    errors.AddRange(item.Script.Sanitized.Warnings
                        .Where(w => !w.Contains("so the call was stripped") && !w.Contains("parent's copy in this file was dropped"))
                        .Select(w => item.Dest + ": " + w));
                string content = item.Content ?? (item.SourceRel != null && TextScannableExtensions.Contains(Path.GetExtension(item.SourceRel))
                    ? SafeReadText(Path.Combine(sourceProjectRoot, item.SourceRel)) : null);
                foreach (string guid in LunaYamlPatcher.ReferencedGuids((content ?? "") + "\n" + (item.MetaContent ?? "")))
                    if (!available.Contains(guid) && !GuidExistsHere(guid, cache))
                        errors.Add(item.Dest + ": unresolved dependency " + guid + ". Rescan or include the dependency.");
            }
            catch (Exception e) { errors.Add(item.Dest + ": " + e.Message); }
        }
        return errors.Distinct().ToList();
    }

    private void Import()
    {
        if (plan == null) return;
        var problems = ValidatePlan(plan);
        if (problems.Count > 0)
        {
            EditorUtility.DisplayDialog("Import blocked", string.Join("\n", problems.Take(30)), "OK");
            return;
        }
        var toWrite = plan.Items.Where(i => i.WillWrite).ToList();
        if (toWrite.Count == 0) return;

        int warnings = toWrite.Where(i => i.Script?.Sanitized != null).Sum(i => i.Script.Sanitized.Warnings.Count);
        string msg =
            $"{toWrite.Count(i => i.State == State.New)} new file(s)\n" +
            $"{toWrite.Count(i => i.State == State.Update && i.IsScript)} local script(s) replaced with sanitized parent versions\n" +
            $"{toWrite.Count(i => i.State == State.Update && !i.IsScript)} changed asset(s) overwritten\n" +
            $"{toWrite.Count(i => i.State == State.Conflict)} path conflict(s) forced\n" +
            $"{toWrite.Count(i => i.State == State.Patch)} fix(es) to files already here\n" +
            (warnings > 0 ? $"\n{warnings} script warning(s) - see 'Needs attention'.\n" : "") +
            "\nEverything overwritten is backed up; 'Undo Last Import' restores it.\n\nProceed?";
        if (!EditorUtility.DisplayDialog("Import", msg, "Import", "Cancel")) return;

        string logDir;
        try { logDir = WritePlan(plan); }
        catch (Exception e)
        {
            Debug.LogException(e);
            EditorUtility.DisplayDialog("Import failed", "The import was rolled back.\n" + e.Message, "OK");
            return;
        }

        var levelAssets = toWrite.Where(i => i.IsLevelSeed).Select(i => AssetDatabase.LoadAssetAtPath<GameObject>(i.Dest)).Where(g => g != null).ToArray();
        // Ping, don't select: a selected prefab asset stays loaded, and Luna exports loaded prefabs.
        if (levelAssets.Length > 0) EditorGUIUtility.PingObject(levelAssets[0]);
        EditorApplication.delayCall += () => EditorUtility.UnloadUnusedAssetsImmediate();
        lastImportedLevels.Clear();
        lastImportedLevels.AddRange(levelAssets.Select(AssetDatabase.GetAssetPath));
        lastImportLog = logDir;

        string summary = $"Wrote {toWrite.Count} file(s). Log: {ToRelative(ProjectRoot, logDir)}" +
                         "\n\nCompilation and serialized-reference validation will finish after Unity refreshes. Failures roll back automatically; see the Console and log folder." +
                         (warnings > 0 ? $"\n\n{warnings} script warning(s) - see report.txt." : "");
        Debug.Log("[CrossProjectPrefabImporter] " + summary.Replace("\n\n", " "));
        lastImportSummary = summary.Replace("\n\n", "\n");
        EditorUtility.DisplayDialog("Import complete", summary, "OK");
        plan = null;
        levels = null;
    }

    private string WritePlan(Plan candidate)
    {
        var problems = ValidatePlan(candidate);
        if (problems.Count > 0) throw new InvalidOperationException(string.Join("\n", problems));
        var toWrite = candidate.Items.Where(i => i.WillWrite).ToList();
        string stamp = DateTime.Now.ToString("yyyyMMdd_HHmmss");
        string logDir = Path.Combine(ProjectRoot, "Library", "PrefabImporter", $"{stamp}_{Sanitize(candidate.Label)}_{System.Guid.NewGuid():N}");
        Directory.CreateDirectory(logDir);
        PrefabImportTransaction.Begin(logDir, toWrite.Select(i => i.Dest), toWrite.Where(i => i.IsLevelSeed).Select(i => i.Dest));
        var manifest = new List<string>();
        var report = new List<string>();

        try
        {
            AssetDatabase.StartAssetEditing();
            try
            {
                int n = 0;
                foreach (var item in toWrite)
                {
                    EditorUtility.DisplayProgressBar("Importing", item.Dest, (float)n++ / toWrite.Count);
                    string destFull = Path.Combine(ProjectRoot, item.Dest);
                    Directory.CreateDirectory(Path.GetDirectoryName(destFull));

                    manifest.Add((File.Exists(destFull) ? "BAK\t" : "NEW\t") + item.Dest);

                    if (item.Content != null) File.WriteAllText(destFull, item.Content, new UTF8Encoding(item.WriteBom));
                    else File.Copy(Path.Combine(sourceProjectRoot, item.SourceRel), destFull, true);

                    if (item.CopyMeta && item.SourceRel != null)
                    {
                        // GUIDs are kept, AssetBundle assignments are not: Luna exports every AssetBundle and its
                        // dependencies, so a source level tagged "level_35" would put the whole level in every build.
                        string meta = item.MetaContent;
                        meta = Regex.Replace(meta, @"(?m)^(\s*assetBundle(?:Name|Variant):)[^\r\n]*", "$1 ");
                        File.WriteAllText(destFull + ".meta", meta);
                    }

                    report.Add($"{item.Label()}");
                    foreach (var c in item.Changes) report.Add("    " + c);
                    if (item.Script?.Sanitized != null) foreach (var w in item.Script.Sanitized.Warnings) report.Add("    WARNING " + w);
                }
            }
            finally
            {
                AssetDatabase.StopAssetEditing();
                EditorUtility.ClearProgressBar();
                File.WriteAllLines(Path.Combine(logDir, "manifest.txt"), manifest);
                File.WriteAllLines(Path.Combine(logDir, "report.txt"), report.Concat(new[] { "", "Info:" }).Concat(candidate.Info));
            }

            PrefabImportTransaction.FinishWriting(logDir);
            AssetDatabase.Refresh(ImportAssetOptions.ForceUpdate);
        }
        catch
        {
            PrefabImportTransaction.Rollback(logDir);
            throw;
        }
        return logDir;
    }

    private void UndoLastImport()
    {
        string logsRoot = Path.Combine(ProjectRoot, "Library", "PrefabImporter");
        var last = Directory.Exists(logsRoot)
            ? new DirectoryInfo(logsRoot).GetDirectories().Where(d => File.Exists(Path.Combine(d.FullName, "manifest.txt"))).OrderByDescending(d => d.Name).FirstOrDefault()
            : null;
        if (last == null)
        {
            EditorUtility.DisplayDialog("Undo Last Import", "No undoable import found.", "OK");
            return;
        }

        var lines = File.ReadAllLines(Path.Combine(last.FullName, "manifest.txt")).Select(l => l.Split('\t')).Where(l => l.Length == 2).ToList();
        if (!EditorUtility.DisplayDialog("Undo Last Import",
                $"Undo '{last.Name}'?\n\n{lines.Count(l => l[0] == "NEW")} new file(s) will be deleted\n{lines.Count(l => l[0] == "BAK")} overwritten file(s) will be restored from backup",
                "Undo", "Cancel"))
            return;

        PrefabImportTransaction.Rollback(last.FullName);
        Debug.Log($"[CrossProjectPrefabImporter] Undid import '{last.Name}'.");
        lastImportSummary = null;
        lastImportedLevels.Clear();
        plan = null;
        levels = null;
    }

    private static void RemoveEmptyFolders(string dir)
    {
        string assets = Path.GetFullPath(Application.dataPath);
        while (!string.IsNullOrEmpty(dir) && Path.GetFullPath(dir).StartsWith(assets + Path.DirectorySeparatorChar, StringComparison.OrdinalIgnoreCase) && Directory.Exists(dir) && !Directory.EnumerateFileSystemEntries(dir).Any())
        {
            Directory.Delete(dir);
            if (File.Exists(dir + ".meta")) File.Delete(dir + ".meta");
            dir = Path.GetDirectoryName(dir);
        }
    }

    private void Preview(Item item)
    {
        string dir = Path.Combine(ProjectRoot, "Temp", "LunaImporterPreview");
        Directory.CreateDirectory(dir);
        string name = Path.GetFileName(item.Dest);
        if (item.SourceRel != null && File.Exists(Path.Combine(sourceProjectRoot, item.SourceRel)))
            File.Copy(Path.Combine(sourceProjectRoot, item.SourceRel), Path.Combine(dir, "parent_" + name), true);
        string path = Path.Combine(dir, "sanitized_" + name);
        File.WriteAllText(path, item.Content);
        EditorUtility.OpenWithDefaultApp(path);
    }

    // ─────────────────────────────────────────────────────────────────────
    // Helpers
    // ─────────────────────────────────────────────────────────────────────

    // "**/X/" entries of unity.assets.excludes in Luna's config.json (Editor stays: editor code is meant to drop).
    private static readonly HashSet<string> LunaExcludedFolders = new HashSet<string>(StringComparer.OrdinalIgnoreCase)
    {
        "FacebookSDK", "AdMobPlugin", "InMobiAds", "AudienceNetwork", "YandexMobileAds", "Fyber", "FairBid",
        "AppsFlyer", "IronSource", "Vungle", "NiceVibrations", "GameAnalytics", "UnityAds", "UnityPurchasing",
    };

    private string MirrorPath(string sourceRel)
    {
        var segments = sourceRel.Substring("Assets/".Length).Split('/');
        if (renameResources)
            for (int i = 0; i < segments.Length - 1; i++)
                if (segments[i] == "Resources") segments[i] = "_Resources";
        // Luna's config.json excludes these folder names from the build outright - code mirrored under one
        // (e.g. NiceVibrations' HapticTypes enum) silently vanishes and everything using it fails to compile.
        for (int i = 0; i < segments.Length - 1; i++)
            if (LunaExcludedFolders.Contains(segments[i])) segments[i] = "_" + segments[i];
        return destRoot.TrimEnd('/') + "/" + string.Join("/", segments);
    }

    /// <summary><paramref name="claimed"/> holds destinations already taken by earlier items in this
    /// same plan - every theme ships its own "ThemeLevel1.prefab", and those aren't on disk yet.</summary>
    private string LevelDestPath(string sourceRel, string guid, HashSet<string> claimed)
    {
        bool Taken(string dest) => claimed.Contains(dest) || DestConflict(dest, guid, out _);
        string name = Path.GetFileName(sourceRel);
        string direct = levelDest.TrimEnd('/') + "/" + name;
        if (!Taken(direct)) return direct;
        string parentFolder = Path.GetFileName(Path.GetDirectoryName(sourceRel));
        string grouped = levelDest.TrimEnd('/') + "/" + parentFolder + "/" + name;
        return Taken(grouped) ? MirrorPath(sourceRel) : grouped;
    }

    /// <summary>True when the destination path already holds a DIFFERENT asset.</summary>
    private static bool DestConflict(string destRel, string guid, out string reason)
    {
        reason = null;
        string full = Path.Combine(ProjectRoot, destRel);
        if (!File.Exists(full)) return false;
        string destGuid = ReadMetaGuid(full + ".meta");
        if (destGuid == null || string.Equals(destGuid, guid, StringComparison.OrdinalIgnoreCase)) return false;
        reason = $"path already holds a different asset (guid {destGuid})";
        return true;
    }

    private static bool GuidExistsHere(string guid, Dictionary<string, bool> cache)
    {
        if (cache.TryGetValue(guid, out bool known)) return known;
        string path = AssetDatabase.GUIDToAssetPath(guid);
        bool exists = !string.IsNullOrEmpty(path) &&
                      (!path.StartsWith("Assets/", StringComparison.Ordinal) || File.Exists(Path.Combine(ProjectRoot, path)) || Directory.Exists(Path.Combine(ProjectRoot, path)));
        cache[guid] = exists;
        return exists;
    }

    /// <summary>Local MonoBehaviour/ScriptableObject class name -> script GUID (only scripts Unity can bind as components).</summary>
    private static Dictionary<string, string> BuildLocalComponentScriptMap()
    {
        var map = new Dictionary<string, string>(StringComparer.Ordinal);
        foreach (var guid in AssetDatabase.FindAssets("t:MonoScript", new[] { "Assets" }))
        {
            string path = AssetDatabase.GUIDToAssetPath(guid);
            var script = AssetDatabase.LoadAssetAtPath<MonoScript>(path);
            var cls = script != null ? script.GetClass() : null;
            if (cls == null || !(typeof(MonoBehaviour).IsAssignableFrom(cls) || typeof(ScriptableObject).IsAssignableFrom(cls))) continue;
            map[cls.Name] = guid;
        }
        return map;
    }

    private static Dictionary<string, string> BuildGuidIndex(string root, out List<string> scripts)
    {
        var index = new Dictionary<string, string>(StringComparer.OrdinalIgnoreCase);
        scripts = new List<string>();
        string full = Path.GetFullPath(root);
        foreach (var meta in Directory.EnumerateFiles(Path.Combine(full, "Assets"), "*.meta", SearchOption.AllDirectories))
        {
            string guid = ReadMetaGuid(meta);
            if (guid == null) continue;
            string rel = ToRelative(full, meta.Substring(0, meta.Length - 5));
            if (index.TryGetValue(guid, out var duplicate))
                throw new InvalidOperationException("Duplicate source GUID: " + guid + " in " + duplicate + " and " + rel);
            index[guid.ToLowerInvariant()] = rel;
            if (IsScriptPath(rel) && File.Exists(meta.Substring(0, meta.Length - 5))) scripts.Add(rel);
        }
        return index;
    }

    private static bool IsScriptPath(string rel) => rel.EndsWith(".cs", StringComparison.OrdinalIgnoreCase);

    /// <summary>Scripts inside a per-level folder (Gameplay/Levels/Level 19/...) — not LevelData.cs and friends one level up.</summary>
    private static bool IsLevelFolder(string rel) => rel != null && Regex.IsMatch(rel, @"/Gameplay/Levels/[^/]+/", RegexOptions.IgnoreCase);

    private static string ReadMetaGuid(string metaPath)
    {
        if (!File.Exists(metaPath)) return null;
        foreach (var line in File.ReadLines(metaPath).Take(6))
        {
            var m = Regex.Match(line, @"^\s*guid:\s*([0-9a-fA-F]{32})\s*$");
            if (m.Success) return m.Groups[1].Value.ToLowerInvariant();
        }
        return null;
    }

    private static string SafeReadText(string path)
    {
        try { return File.Exists(path) ? File.ReadAllText(path) : null; } catch { return null; }
    }

    private static bool HasBom(string path)
    {
        try
        {
            using var fs = File.OpenRead(path);
            return fs.Length >= 3 && fs.ReadByte() == 0xEF && fs.ReadByte() == 0xBB && fs.ReadByte() == 0xBF;
        }
        catch { return false; }
    }

    private static readonly HashSet<string> AudioExtensions = new HashSet<string>(StringComparer.OrdinalIgnoreCase) { ".wav", ".mp3", ".ogg", ".aif", ".aiff" };

    /// <summary>A local audio file byte-identical to <paramref name="sourceFull"/>, or null. Audio only: a clip is always
    /// sub-asset 8300000, while a texture's sprites depend on its own .meta, so a twin texture could break references.</summary>
    private static string LocalAudioTwin(string sourceFull)
    {
        if (!AudioExtensions.Contains(Path.GetExtension(sourceFull)) || !File.Exists(sourceFull)) return null;
        long size = new FileInfo(sourceFull).Length;
        return Directory.EnumerateFiles(Application.dataPath, "*" + Path.GetExtension(sourceFull), SearchOption.AllDirectories)
            .Where(f => new FileInfo(f).Length == size && FilesIdentical(sourceFull, f))
            .Select(f => ToRelative(ProjectRoot, f)).FirstOrDefault();
    }

    private static bool FilesIdentical(string a, string b)
    {
        var fa = new FileInfo(a); var fb = new FileInfo(b);
        if (fa.Length != fb.Length) return false;
        using var sa = File.OpenRead(a);
        using var sb = File.OpenRead(b);
        var bufA = new byte[81920]; var bufB = new byte[81920];
        int read;
        while ((read = sa.Read(bufA, 0, bufA.Length)) > 0)
        {
            if (sb.Read(bufB, 0, read) != read) return false;
            for (int i = 0; i < read; i++) if (bufA[i] != bufB[i]) return false;
        }
        return true;
    }

    private static string ToRelative(string root, string full)
    {
        string a = Path.GetFullPath(root).TrimEnd('\\', '/');
        string resolved = Path.GetFullPath(full);
        if (!resolved.StartsWith(a + Path.DirectorySeparatorChar, StringComparison.OrdinalIgnoreCase))
            throw new InvalidOperationException("Path is outside the expected root: " + full);
        return resolved.Substring(a.Length + 1).Replace('\\', '/');
    }

    private static string NormalizeAssetsPath(string raw, string fallback)
    {
        string r = string.IsNullOrWhiteSpace(raw) ? fallback : raw.Trim().Replace('\\', '/').TrimEnd('/');
        if (Path.IsPathRooted(r)) throw new InvalidOperationException("Use a project-relative Assets path.");
        if (!r.Equals("Assets", StringComparison.OrdinalIgnoreCase) && !r.StartsWith("Assets/", StringComparison.OrdinalIgnoreCase))
            r = "Assets/" + r;
        string full = Path.GetFullPath(Path.Combine(ProjectRoot, r));
        string assets = Path.GetFullPath(Application.dataPath).TrimEnd('\\', '/');
        if (!full.Equals(assets, StringComparison.OrdinalIgnoreCase) &&
            !full.StartsWith(assets + Path.DirectorySeparatorChar, StringComparison.OrdinalIgnoreCase))
            throw new InvalidOperationException("Destination must stay inside this project's Assets folder.");
        return ToRelative(ProjectRoot, full);
    }

    private static string Sanitize(string s) => Regex.Replace(s ?? "import", @"[^\w\-]+", "_");

    /// <summary>Answers type/member questions from this project's compiled game code.</summary>
    internal sealed class ReflectionCatalog : ILunaTypeCatalog
    {
        private readonly Dictionary<string, Type> types = new Dictionary<string, Type>(StringComparer.Ordinal);
        private const BindingFlags All = BindingFlags.Public | BindingFlags.NonPublic | BindingFlags.Instance | BindingFlags.Static | BindingFlags.DeclaredOnly;

        public ReflectionCatalog()
        {
            foreach (var asm in AppDomain.CurrentDomain.GetAssemblies())
            {
                string name = asm.GetName().Name;
                if (name != "Assembly-CSharp" && name != "Assembly-CSharp-firstpass") continue;
                Type[] ts;
                try { ts = asm.GetTypes(); }
                catch (ReflectionTypeLoadException e) { ts = e.Types.Where(t => t != null).ToArray(); }
                foreach (var t in ts)
                {
                    if (t.IsNested || t.Name.IndexOf('<') >= 0) continue;
                    string n = t.Name;
                    int tick = n.IndexOf('`');
                    if (tick >= 0) n = n.Substring(0, tick);
                    types[n] = types.ContainsKey(n) ? null : t;
                }
            }
        }

        public bool IsKnownType(string typeName) => types.TryGetValue(typeName, out var t) && t != null;

        public bool HasMember(string typeName, string memberName)
        {
            if (!types.TryGetValue(typeName, out var t) || t == null) return false;
            for (var cur = t; cur != null; cur = cur.BaseType)
                if (cur.GetMember(memberName, All).Length > 0) return true;
            return false;
        }

        public bool TypeHasUpdate(string typeName)
        {
            if (!types.TryGetValue(typeName, out var t) || t == null) return true;
            for (var cur = t; cur != null && cur != typeof(MonoBehaviour); cur = cur.BaseType)
                if (cur.GetMethod("Update", All, null, Type.EmptyTypes, null) != null) return true;
            return false;
        }
    }
}
#endif
