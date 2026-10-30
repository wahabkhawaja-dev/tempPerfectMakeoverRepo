#if UNITY_EDITOR
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;
using System.Text.RegularExpressions;
using System.Reflection;
using UnityEditor;
using UnityEngine;
using ScratchCardAsset;

/// <summary>
/// Copies an original Resources level into Assets/_Playable with only the selected steps.
/// Original prefabs/scripts are never overwritten.
/// </summary>
public static class PlayableLevelFactory
{
    public const string LevelsRoot = "Assets/Resources/Lvl_GP";
    public const string ImportedLevels = "Assets/_ImportedFromParent/Levels";
    public const string PlayableLevels = "Assets/_Playable/Levels";
    public const string PlayableScripts = "Assets/_Playable/Scripts";
    public const string LastPrefabPref = "Playable.LastBuiltPrefab";

    static string[] HideLayerFields(int lastKept)
    {
        int until = lastKept + 1;
        var fields = new List<string>();
        if (until >= 4)
        {
            fields.Add("foamLight_E");
            fields.Add("foam2_E");
        }

        if (until >= 6)
            fields.Add("wetHairs_E");
        if (until >= 7)
            fields.Add("dryHairs_E");
        return fields.ToArray();
    }

    static int ViewIndexForStep(int step)
    {
        if (step <= 3)
            return 1;
        if (step == 4)
            return 2;
        if (step == 5)
            return 3;
        if (step == 6)
            return 4;
        if (step == 7)
            return 5;
        return 6;
    }

    public class ScanResult
    {
        public string PrefabPath;
        public string ScriptPath;
        public string ClassName;
        public string SourceScriptGuid;
        public int[] Steps = Array.Empty<int>();
        public string Error;
        public bool HasInnerLevels;
        public string InnerNote;

        /// <summary>Source prefab of the Fix-It inner level this one hops into (Level{L}_{P}), if any.</summary>
        public string InnerPrefabPath;

        /// <summary>Step whose StartStepN() gates on Is...Fixed() — where the Fix-It button lives.</summary>
        public int FixStep;

        /// <summary>Set when this level IS a Fix-It level: the main level its Load...Again() hop returns to.</summary>
        public string ParentPrefabPath;
    }

    /// <summary>Script-only Fix-It relations of a level, cheap enough to compute for the whole source list.</summary>
    public class FixItLink
    {
        public string FixItLevel;
        public int FixStep;
        public string ParentLevel;
        public int ParentFixStep;
    }

    /// <summary>How a build treats the level's inner Fix-It level.</summary>
    public enum InnerMode
    {
        /// <summary>Cut it out: gates flattened to "already fixed", hop methods and objects deleted.</summary>
        Exclude,

        /// <summary>This IS the outer level: keep the Fix-It button, hop into the inner level in-scene.</summary>
        Outer,

        /// <summary>This IS the inner level: its return-hop, or its last kept step, comes back to the outer level in-scene.</summary>
        Inner,

        /// <summary>This IS the inner level and the playable ends inside it: its last kept step fires LevelComplete + CTA.</summary>
        InnerEndsPlayable,

    }

    /// <summary>The [Header] a level puts above its Fix-It gate fields ("... FIX GATE ...").</summary>
    const string GateHeaderPattern = @"\[Header\(""[^""]*FIX[^""]*""\)\]";

    /// <summary>Modes where the Fix-It button and its damaged art stay in the playable.</summary>
    static bool KeepsFixItButton(InnerMode mode)
    {
        return mode == InnerMode.Outer;
    }

    public class BuildResult
    {
        public bool Ok;
        public string PrefabPath;
        public string ScriptPath;
        public string Log;
        public string Error;

        /// <summary>Built inner Fix-It playable prefab, when the build included one.</summary>
        public string InnerPrefabPath;
    }

    /// <summary>
    /// Every local level prefab, including SP/event levels, custom importer destinations,
    /// generated playables and variants. Identify levels by their component type rather
    /// than their folder/name. Read YAML so listing levels does not load all their art.
    /// </summary>
    public static string[] ListSourcePrefabs()
    {
        var levelScripts = new HashSet<string>(StringComparer.OrdinalIgnoreCase);
        foreach (string guid in AssetDatabase.FindAssets("t:MonoScript", new[] { "Assets" }))
        {
            var script = AssetDatabase.LoadAssetAtPath<MonoScript>(AssetDatabase.GUIDToAssetPath(guid));
            Type type = script != null ? script.GetClass() : null;
            if (type != null && typeof(LevelData).IsAssignableFrom(type)) levelScripts.Add(guid);
        }
        var guids = AssetDatabase.FindAssets("t:Prefab", new[] { "Assets" });
        var paths = new List<string>();
        var cache = new Dictionary<string, bool>(StringComparer.OrdinalIgnoreCase);
        for (int i = 0; i < guids.Length; i++)
        {
            string p = AssetDatabase.GUIDToAssetPath(guids[i]);
            if (p.EndsWith(".prefab", StringComparison.OrdinalIgnoreCase) &&
                ContainsLevelScript(p, levelScripts, cache, new HashSet<string>(StringComparer.OrdinalIgnoreCase)))
                paths.Add(p);
        }

        paths.Sort(StringComparer.OrdinalIgnoreCase);
        return paths.ToArray();
    }

    static bool ContainsLevelScript(string prefabPath, HashSet<string> levelScripts,
        Dictionary<string, bool> cache, HashSet<string> visiting)
    {
        if (cache.TryGetValue(prefabPath, out bool known)) return known;
        if (!prefabPath.StartsWith("Assets/", StringComparison.OrdinalIgnoreCase) || !visiting.Add(prefabPath)) return false;
        string full = ToFull(prefabPath);
        if (!File.Exists(full)) return false;
        string yaml = File.ReadAllText(full);
        bool found = Regex.Matches(yaml, @"m_Script:\s*\{fileID:\s*11500000,\s*guid:\s*([0-9a-fA-F]{32})")
            .Cast<Match>().Any(m => levelScripts.Contains(m.Groups[1].Value));
        if (!found)
        {
            // A variant or wrapper can inherit its level component from another prefab.
            foreach (Match source in Regex.Matches(yaml, @"m_SourcePrefab:\s*\{fileID:\s*-?\d+,\s*guid:\s*([0-9a-fA-F]{32})"))
            {
                string basePath = AssetDatabase.GUIDToAssetPath(source.Groups[1].Value);
                if (ContainsLevelScript(basePath, levelScripts, cache, visiting)) { found = true; break; }
            }
        }
        visiting.Remove(prefabPath);
        cache[prefabPath] = found;
        return found;
    }

    public static ScanResult Scan(string prefabPath)
    {
        var result = new ScanResult { PrefabPath = prefabPath };
        var prefab = AssetDatabase.LoadAssetAtPath<GameObject>(prefabPath);
        if (prefab == null)
        {
            result.Error = "Prefab load nahi hua: " + prefabPath;
            return result;
        }

        var level = prefab.GetComponent<LevelData>();
        if (level == null)
            level = prefab.GetComponentInChildren<LevelData>(true);
        if (level == null)
        {
            result.Error = "LevelData component nahi mila.";
            return result;
        }

        var script = MonoScript.FromMonoBehaviour(level);
        if (script == null)
        {
            result.Error = "MonoScript nahi mila.";
            return result;
        }

        result.ScriptPath = AssetDatabase.GetAssetPath(script);
        result.ClassName = script.GetClass() != null ? script.GetClass().Name : Path.GetFileNameWithoutExtension(result.ScriptPath);
        result.SourceScriptGuid = AssetDatabase.AssetPathToGUID(result.ScriptPath);

        if (string.IsNullOrEmpty(result.ScriptPath) || !File.Exists(ToFull(result.ScriptPath)))
        {
            result.Error = "Source script missing: " + result.ScriptPath;
            return result;
        }

        string text = StripSourceComments(File.ReadAllText(ToFull(result.ScriptPath)));
        var steps = new SortedSet<int>();
        foreach (Match m in Regex.Matches(text, @"\bvoid\s+StartStep(\d+)\s*\("))
            steps.Add(int.Parse(m.Groups[1].Value));

        result.Steps = steps.ToArray();
        if (result.Steps.Length == 0)
            result.Error = "Is level mein StartStepN / STEP regions nahi mile.";

        bool hasFixGate = text.IndexOf("FixInnerLevel", StringComparison.Ordinal) >= 0;
        bool hasSceneHop = Regex.IsMatch(text, @"partToPlay\s*=") &&
                           text.IndexOf("LoadScene", StringComparison.Ordinal) >= 0;
        result.HasInnerLevels = hasFixGate || hasSceneHop;
        if (hasFixGate)
            result.InnerNote = "Fix-It inner level detect hui — playable already-fixed maane ga, hop nahi.";
        else if (hasSceneHop)
            result.InnerNote = "Return/scene hop detect hui — playable LevelComplete + CTA, dusre level pe nahi jayega.";

        string fixItLevel, parentLevel;
        FindHopTargets(text, out fixItLevel, out parentLevel);
        result.InnerPrefabPath = fixItLevel;
        result.ParentPrefabPath = parentLevel;
        result.FixStep = FindFixStep(text);

        return result;
    }

    static readonly Regex MethodDeclRx = new Regex(
        @"^    (?:public |private |protected |internal )?(?:static )?[\w.<>,\[\]]+\s+(\w+)\s*\([^;{]*\)\s*\{",
        RegexOptions.Multiline);

    /// <summary>
    /// A scene hop sets levelToPlay / partToPlay and reloads; those two numbers ARE the target's
    /// prefab name (Level{level}_{part}). Direction comes from the method: a Fix-It level goes
    /// back through Load...Again() (LoadHairLevelAgian, LoadManicureLevelAgian, ...), while a
    /// main level hops from its Fix-It button handler.
    /// </summary>
    static void FindHopTargets(string text, out string fixItLevel, out string parentLevel)
    {
        fixItLevel = null;
        parentLevel = null;

        foreach (Match m in MethodDeclRx.Matches(text))
        {
            int open = m.Index + m.Length - 1;
            int close = FindMatchingBrace(text, open);
            if (close < 0)
                continue;

            var hop = Regex.Match(
                text.Substring(open, close - open + 1),
                @"levelToPlay\s*=\s*(\d+)\s*;[\s\S]{0,400}?partToPlay\s*=\s*(\d+)\s*;[\s\S]{0,800}?LoadScene");
            if (!hop.Success)
                continue;

            string path = LevelsRoot + "/Level" + hop.Groups[1].Value + "_" + hop.Groups[2].Value + ".prefab";
            if (!File.Exists(ToFull(path)))
                continue;

            if (Regex.IsMatch(m.Groups[1].Value, @"^Load\w*(Agian|Again)$", RegexOptions.IgnoreCase))
            {
                if (parentLevel == null)
                    parentLevel = path;
            }
            else if (fixItLevel == null)
            {
                fixItLevel = path;
            }
        }
    }

    static readonly Dictionary<string, KeyValuePair<DateTime, string>> LevelScriptCache =
        new Dictionary<string, KeyValuePair<DateTime, string>>();

    /// <summary>
    /// The level script's text without loading the prefab (loading every level prefab drags in all
    /// of its textures): the prefab YAML names its scripts by GUID, and the LevelData one is the
    /// script declaring a class that derives from LevelData.
    /// </summary>
    static string ReadLevelScriptFast(string prefabPath)
    {
        string full = ToFull(prefabPath);
        if (!File.Exists(full))
            return null;

        DateTime stamp = File.GetLastWriteTimeUtc(full);
        KeyValuePair<DateTime, string> cached;
        if (LevelScriptCache.TryGetValue(prefabPath, out cached) && cached.Key == stamp)
            return cached.Value;

        string found = null;
        var seen = new HashSet<string>();
        foreach (Match m in Regex.Matches(File.ReadAllText(full), @"m_Script:\s*\{fileID:\s*11500000,\s*guid:\s*([0-9a-f]{32})"))
        {
            if (!seen.Add(m.Groups[1].Value))
                continue;

            string scriptPath = AssetDatabase.GUIDToAssetPath(m.Groups[1].Value);
            if (!scriptPath.EndsWith(".cs", StringComparison.OrdinalIgnoreCase) || !File.Exists(ToFull(scriptPath)))
                continue;

            string text = File.ReadAllText(ToFull(scriptPath));
            if (Regex.IsMatch(text, @"\bclass\s+\w+\s*:\s*LevelData\b"))
            {
                found = text;
                break;
            }
        }

        LevelScriptCache[prefabPath] = new KeyValuePair<DateTime, string>(stamp, found);
        return found;
    }

    /// <summary>Fix-It relations for every given prefab, both directions filled in. Keyed by prefab path.</summary>
    public static Dictionary<string, FixItLink> ScanFixItLinks(IList<string> prefabPaths)
    {
        var links = new Dictionary<string, FixItLink>();
        foreach (string path in prefabPaths)
        {
            string text = ReadLevelScriptFast(path);
            if (text == null)
                continue;

            string fixItLevel, parentLevel;
            FindHopTargets(text, out fixItLevel, out parentLevel);
            if (fixItLevel == null && parentLevel == null)
                continue;

            links[path] = new FixItLink
            {
                FixItLevel = fixItLevel,
                FixStep = fixItLevel != null ? FindFixStep(text) : 0,
                ParentLevel = parentLevel
            };
        }

        foreach (var pair in links)
        {
            FixItLink parent;
            if (pair.Value.ParentLevel != null && links.TryGetValue(pair.Value.ParentLevel, out parent))
                pair.Value.ParentFixStep = parent.FixStep;
        }

        return links;
    }

    /// <summary>
    /// The step that shows the Fix-It button: its StartStepN() gates on Is...Fixed(). Some levels
    /// run that gate from a helper inside the step's region instead (Level3_Manicure), so fall
    /// back to the "#region STEP N" that contains the gate.
    /// </summary>
    static int FindFixStep(string text)
    {
        foreach (Match m in Regex.Matches(
                     text,
                     @"^    (?:public |private |protected |internal )?(?:static )?void\s+StartStep(\d+)\s*\(\s*\)\s*\{",
                     RegexOptions.Multiline))
        {
            int open = m.Index + m.Length - 1;
            int close = FindMatchingBrace(text, open);
            if (close < 0)
                continue;

            if (Regex.IsMatch(text.Substring(open, close - open + 1), @"\bIs\w+Fixed\s*\("))
                return int.Parse(m.Groups[1].Value);
        }

        foreach (Match r in Regex.Matches(text, @"#region\s+STEP\s*(\d+)\b", RegexOptions.IgnoreCase))
        {
            int end = text.IndexOf("#endregion", r.Index, StringComparison.Ordinal);
            if (end < 0)
                end = text.Length;

            if (Regex.IsMatch(text.Substring(r.Index, end - r.Index), @"\bIs\w+Fixed\s*\(\s*\)"))
                return int.Parse(r.Groups[1].Value);
        }

        return 0;
    }

    public static BuildResult Build(string sourcePrefabPath, IList<int> keepSteps, bool placeInScene)
    {
        return Build(sourcePrefabPath, keepSteps, placeInScene, InnerMode.Exclude, null);
    }

    /// <summary>
    /// <paramref name="mode"/> decides what happens to the level's Fix-It inner level:
    /// cut it out (the old behaviour), or keep it and swap in-scene via PlayableInnerLevel.
    /// <paramref name="innerBuiltPrefab"/> is the already-built inner playable prefab, wired
    /// into the scene alongside this one when placeInScene is on.
    /// </summary>
    public static BuildResult Build(
        string sourcePrefabPath,
        IList<int> keepSteps,
        bool placeInScene,
        InnerMode mode,
        string innerBuiltPrefab)
    {
        return Build(sourcePrefabPath, keepSteps, placeInScene, mode, innerBuiltPrefab, null);
    }

    /// <summary>
    /// Same as above, but <paramref name="variant"/> (when non-empty) is appended to the
    /// generated script class and prefab name, so multiple step-range builds off the same
    /// source level land as separate files instead of overwriting each other's
    /// "{Level}_Playable" prefab/script.
    /// </summary>
    public static BuildResult Build(
        string sourcePrefabPath,
        IList<int> keepSteps,
        bool placeInScene,
        InnerMode mode,
        string innerBuiltPrefab,
        string variant)
    {
        var log = new List<string>();
        var result = new BuildResult();
        string destPrefab = null;
        PlayableBuildSafety.AssetBackup backup = null;

        try
        {
            if (keepSteps == null || keepSteps.Count == 0)
                throw new Exception("Kam az kam 1 step select karo.");

            var keep = new HashSet<int>(keepSteps.Where(s => s > 0));
            if (keep.Count == 0 || keepSteps.Any(s => s <= 0))
                throw new Exception("Select valid positive step numbers.");
            var ordered = keep.OrderBy(s => s).ToList();
            int first = ordered[0];
            int last = ordered[ordered.Count - 1];

            var scan = Scan(sourcePrefabPath);
            if (!string.IsNullOrEmpty(scan.Error))
                throw new Exception(scan.Error);
            if (keep.Any(s => !scan.Steps.Contains(s)))
                throw new Exception("Selected steps are not present in the source level: " + string.Join(",", keep.Except(scan.Steps)));
            if (EditorApplication.isPlayingOrWillChangePlaymode)
                throw new Exception("Build playables in Edit Mode.");
            if (!string.IsNullOrEmpty(variant) && Regex.IsMatch(variant, "[^A-Za-z0-9]"))
                throw new Exception("Variant names may contain letters and numbers only; choose a distinct name.");

            string variantSuffix = string.IsNullOrEmpty(variant) ? "" : "_" + Regex.Replace(variant, "[^A-Za-z0-9]", "");

            string playableClass = scan.ClassName.EndsWith("_Playable", StringComparison.Ordinal)
                ? scan.ClassName
                : scan.ClassName + "_Playable";
            playableClass += variantSuffix;

            string prefabName = Path.GetFileNameWithoutExtension(sourcePrefabPath);
            if (prefabName.EndsWith("_Playable", StringComparison.OrdinalIgnoreCase))
                prefabName = prefabName.Substring(0, prefabName.Length - "_Playable".Length);
            string plannedDestPrefab = PlayableLevels + "/" + prefabName + "_Playable" + variantSuffix + ".prefab";
            string plannedDestScript = PlayableScripts + "/" + playableClass + ".cs";

            // Sourcing from an already-built playable (re-slicing it into a further variation)
            // can land on the exact same class/prefab name as the source itself when no variant
            // is given — that would overwrite the very file being read from. A blank variant is
            // fine when sourcing from Resources/Lvl_GP (destination there always differs from
            // Resources), so only block the case that actually collides.
            if (string.Equals(plannedDestScript, scan.ScriptPath, StringComparison.OrdinalIgnoreCase) ||
                string.Equals(plannedDestPrefab, sourcePrefabPath, StringComparison.OrdinalIgnoreCase))
                throw new Exception(
                    "Build would overwrite its own source (" + sourcePrefabPath + "). " +
                    "Set a Variant name to build a distinct output.");

            Directory.CreateDirectory(ToFull(PlayableScripts));
            Directory.CreateDirectory(ToFull(PlayableLevels));

            string destScript = plannedDestScript;
            string sourceText = StripSourceComments(File.ReadAllText(ToFull(scan.ScriptPath)));

            // Fields declared in step headers before `first` stay in the generated script (steps
            // there aren't played, but ForceCompleteStepN() for them still runs at boot and still
            // dereferences their objects) — only fields from steps genuinely beyond `last` are
            // truly unreachable. Resolved to object PATHS against the SOURCE prefab now, while its
            // script still declares those fields — RewriteScript strips them from the generated
            // class entirely, so reflecting on the destination prefab's (already rebound) component
            // later could never find them by field name again.
            var keepScript = new HashSet<int>(keep);
            for (int s = 1; s < first; s++)
                keepScript.Add(s);
            var unusedFields = CollectUnkeptFieldNames(sourceText, keepScript);
            var unusedObjectPaths = ResolveFieldPathsOnSource(sourcePrefabPath, unusedFields);

            string playableText = RewriteScript(sourceText, scan.ClassName, playableClass, keep, first, last, mode, scan.FixStep, log);

            PlayableBuildSafety.CheckScript(playableText, playableClass);
            backup = new PlayableBuildSafety.AssetBackup(ToFull(destScript), ToFull(plannedDestPrefab));

            bool scriptChanged = !File.Exists(ToFull(destScript)) || File.ReadAllText(ToFull(destScript)) != playableText;
            File.WriteAllText(ToFull(destScript), playableText);
            AssetDatabase.ImportAsset(destScript, ImportAssetOptions.ForceUpdate | ImportAssetOptions.ForceSynchronousImport);

            string destGuid = AssetDatabase.AssetPathToGUID(destScript);
            if (string.IsNullOrEmpty(destGuid))
            {
                string meta = ToFull(destScript) + ".meta";
                destGuid = ReadGuidFromMeta(meta);
            }

            if (string.IsNullOrEmpty(destGuid))
                throw new Exception("Playable script GUID nahi mila after import.");

            destPrefab = plannedDestPrefab;

            File.Copy(ToFull(sourcePrefabPath), ToFull(destPrefab), true);
            // Keep the compiled source component while trimming. A freshly generated class
            // cannot be deserialized until Unity's next compilation/domain reload.
            AssetDatabase.ImportAsset(destPrefab, ImportAssetOptions.ForceUpdate | ImportAssetOptions.ForceSynchronousImport);
            TrimPrefab(destPrefab, ordered, mode, unusedObjectPaths, log, playableText);
            AttachCtaComponent(destPrefab, log);
            string yaml = File.ReadAllText(ToFull(destPrefab));
            int rebinds = 0;
            yaml = Regex.Replace(
                yaml,
                @"(m_Script:\s*\{fileID:\s*11500000,\s*guid:\s*)" + scan.SourceScriptGuid + @"(\s*,\s*type:\s*3\})",
                m =>
                {
                    rebinds++;
                    return m.Groups[1].Value + destGuid + m.Groups[2].Value;
                });
            File.WriteAllText(ToFull(destPrefab), yaml);
            log.Add($"Prefab script rebind {scan.ClassName} → {playableClass} (×{rebinds}).");

            AssetDatabase.ImportAsset(destPrefab, ImportAssetOptions.ForceUpdate | ImportAssetOptions.ForceSynchronousImport);

            AssetDatabase.SaveAssets();
            if (rebinds == 0)
                throw new InvalidOperationException("No source level component was rebound. Prefab variants must be unpacked before building.");

            EditorPrefs.SetString(LastPrefabPref, destPrefab);

            if (placeInScene)
                PlayableBuildSafety.QueueScene(destPrefab, innerBuiltPrefab, destScript, scriptChanged);

            result.Ok = true;
            result.PrefabPath = destPrefab;
            result.InnerPrefabPath = innerBuiltPrefab;
            result.ScriptPath = destScript;
            result.Log = string.Join("\n", log);
            Debug.Log("[Playable] Built " + destPrefab + " steps [" + string.Join(",", ordered) + "]\n" + result.Log);
            return result;
        }
        catch (Exception e)
        {
            // Restore both outputs and their GUIDs, including on rebuilds of existing creatives.
            if (backup != null) { backup.Restore(); log.Add("Restored the previous script, prefab and their GUIDs."); }

            result.Ok = false;
            result.Error = e.Message;
            result.Log = string.Join("\n", log);
            Debug.LogError("[Playable] Build failed: " + e);
            return result;
        }
    }

    internal static string RewriteScript(
        string text,
        string originalClass,
        string playableClass,
        HashSet<int> keep,
        int first,
        int last,
        InnerMode mode,
        int fixStep,
        List<string> log)
    {
        text = StripSourceComments(text);
        // Resolve Fix-It predicates before their owning step region can be removed.
        if (mode == InnerMode.Exclude)
        {
            int ignored = 0;
            text = FlattenFixedGates(text, ref ignored);
            text = Regex.Replace(text, @"(?m)^[ \t]*is\w+Fixed\s*=\s*Is\w+Fixed\s*\(\s*\)\s*;[ \t]*\r?\n", "");
            text = Regex.Replace(text, @"\bIs\w*Fixed\s*\(\s*\)(?!\s*\{)", "true");
        }
        text = Regex.Replace(
            text,
            @"\bclass\s+" + Regex.Escape(originalClass) + @"\b",
            "class " + playableClass);
        log.Add("Class → " + playableClass);

        text = RewriteStart(text, keep, first, last, mode == InnerMode.Outer ? fixStep : 0, log);
        text = FixStepChaining(text, keep, last, log);
        var hideDecls = CaptureHideFieldDecls(text, last);
        text = StripUnusedStepScript(text, keep, first, last, KeepsFixItButton(mode), log);
        text = RestoreHideFieldDecls(text, hideDecls);
        if (mode == InnerMode.Exclude)
            text = ExcludeInnerLevels(text, log);
        else
            text = KeepInnerLevels(text, mode, log);
        if (mode == InnerMode.Inner)
            text = RouteCompletionToFixItReturn(text, log);
        text = StripSaveSystem(text, log);
        text = RetireSkippedSteps(text, first, log);
        text = ApplyLunaRuntimeFixes(text, log);
        text = RedirectLoadingManagerFades(text, log);
        text = Regex.Replace(text, @"(\r?\n){3,}", "\n\n");
        ValidateStepReferences(text);
        log.Add("Keeping steps [" + string.Join(",", keep.OrderBy(s => s)) + "], layers through step " + (last + 1) + ".");
        return text;
    }

    /// <summary>
    /// Steps before the first kept one never play: Start() jumps straight to their ForceCompleteStepN() end state.
    /// Their StartStepN/StepNDone bodies are emptied so objects only they drive (that step's tool) can leave the
    /// prefab, and every "X.SetActive(false);" in a ForceComplete is null-guarded because TrimPrefab deletes objects
    /// whose only job left is to be hidden (DestroyRetiredStepObjects) — Luna ships everything a prefab references,
    /// hidden or not.
    /// </summary>
    internal static string RetireSkippedSteps(string text, int first, List<string> log)
    {
        if (first > 1)
        {
            string mask = LunaScriptSanitizer.Mask(text);
            // Every void/coroutine method with its body span. (No "out" parameters: an empty body wouldn't compile.)
            var methods = new List<(int open, int close, string name, bool isPublic, bool coroutine)>();
            foreach (Match m in Regex.Matches(mask, @"\b(?:(public|private|protected|internal)\s+)?(?:(?:override|virtual|static|new)\s+)*(void|IEnumerator)\s+(\w+)\s*\(([^()]*)\)\s*\{"))
            {
                if (m.Groups[4].Value.Contains("out ")) continue;
                int open = m.Index + m.Length - 1, close = FindMatchingBrace(mask, open);
                if (close > open) methods.Add((open, close, m.Groups[3].Value, m.Groups[1].Value == "public", m.Groups[2].Value == "IEnumerator"));
            }
            // From the raw text: Mask blanks preprocessor lines (positions are the same in both).
            var skippedRegions = Regex.Matches(text, @"#region[^\r\n]*\bSTEP\s*(\d+)[^\r\n]*[\s\S]*?#endregion", RegexOptions.IgnoreCase).Cast<Match>()
                .Where(r => int.Parse(r.Groups[1].Value) < first).ToList();
            bool StepMethod(string name, int at)
            {
                var n = Regex.Match(name, @"^(?:StartStep(\d+)[A-Za-z]?|Step(\d+)[A-Za-z]?Done)$");
                if (n.Success) return int.Parse(n.Groups[1].Success ? n.Groups[1].Value : n.Groups[2].Value) < first;
                return !name.StartsWith("ForceComplete") && skippedRegions.Any(r => at > r.Index && at < r.Index + r.Length);
            }
            // Unity calls these itself; a string Invoke("X") is invisible to the masked text.
            bool EngineOrStringCalled(string name) =>
                Regex.IsMatch(name, @"^(?:Awake|Start|Update|LateUpdate|FixedUpdate|On[A-Z]\w*|Reset|OnValidate)$") || text.Contains("\"" + name + "\"");

            var emptied = new HashSet<string>();
            bool Inside(int at) => methods.Any(b => emptied.Contains(b.name) && at > b.open && at < b.close);
            // Something that still runs (kept steps, Start, a ForceComplete) calls it: leave it alone.
            bool CalledElsewhere(string name) => Regex.Matches(mask, @"(?<![\w.])" + Regex.Escape(name) + @"\b").Cast<Match>()
                .Count(c => !Inside(c.Index)) > methods.Count(b => b.name == name);
            // Skipped steps' own methods, then (repeatedly) private helpers only emptied code called.
            for (bool changed = true; changed;)
            {
                changed = false;
                foreach (var b in methods)
                {
                    if (emptied.Contains(b.name) || EngineOrStringCalled(b.name)) continue;
                    if (!StepMethod(b.name, b.open))
                    {
                        if (b.isPublic || b.name.StartsWith("ForceComplete")) continue;
                        // Only a helper emptied code actually called: one nothing calls may be an animation event's.
                        if (!Regex.Matches(mask, @"(?<![\w.])" + Regex.Escape(b.name) + @"\b").Cast<Match>().Any(c => Inside(c.Index))) continue;
                    }
                    emptied.Add(b.name);
                    if (CalledElsewhere(b.name)) emptied.Remove(b.name);
                    else changed = true;
                }
            }
            foreach (var b in methods.Where(b => emptied.Contains(b.name)).OrderByDescending(b => b.open))
                text = text.Substring(0, b.open) + (b.coroutine ? "{ yield break; }" : "{ }") + text.Substring(b.close + 1);
            if (emptied.Count > 0)
                log.Add("Skipped steps never play: emptied " + string.Join(", ", emptied.OrderBy(n => n)) + ".");
        }

        int guarded = 0;
        string guardedText = text, guardMask = LunaScriptSanitizer.Mask(text);
        // Back to front: an edit only shifts text after it, so the mask's earlier positions stay valid.
        foreach (Match m in Regex.Matches(guardMask, @"\bvoid\s+ForceCompleteStep\w*\s*\(\s*\)\s*\{").Cast<Match>().Reverse())
        {
            int open = m.Index + m.Length - 1, close = FindMatchingBrace(guardMask, open);
            if (close <= open) continue;
            string body = guardedText.Substring(open, close - open);
            // "X.SetActive(false);" / "X.gameObject.SetActive(false);" hide X; "RestoreScratches(X);" finishes the cards
            // X's tool drives (Card.ClearInstantly) - the build removes/bakes those cards, so X can go too.
            string fixedBody = Regex.Replace(body, @"(?m)^([ \t]*)(?:(\w+)((?:\.gameObject)?\.SetActive)\s*\(\s*false\s*\)|(\w*Scratch\w*)\s*\(\s*(\w+)\s*\))\s*;",
                g =>
                {
                    guarded++;
                    if (g.Groups[2].Success) return g.Groups[1].Value + "if (" + g.Groups[2].Value + " != null) " + g.Groups[2].Value + g.Groups[3].Value + "(false);";
                    return g.Groups[1].Value + "if (" + g.Groups[5].Value + " != null) " + g.Groups[4].Value + "(" + g.Groups[5].Value + ");";
                });
            guardedText = guardedText.Substring(0, open) + fixedBody + guardedText.Substring(close);
        }
        if (guarded > 0) log.Add("ForceComplete: null-guarded " + guarded + " hide call(s) so hidden-only objects can leave the prefab.");
        return guardedText;
    }

    /// <summary>
    /// What the importer does to every imported script, for level scripts that were never imported: Luna only polls
    /// Input.GetMouseButton*, so OnMouse* handlers become polled input, plus the Luna API rewrites (FixMissingLunaApis).
    /// Nothing is stripped here - the factory has already decided what the playable keeps.
    /// </summary>
    static string ApplyLunaRuntimeFixes(string text, List<string> log)
    {
        var result = LunaScriptSanitizer.Sanitize(text, new LunaSanitizeOptions
        {
            ConvertOnMouse = true, StripCalls = false, StripMissingSingletonCalls = false, RemoveEmptyTryCatch = false,
            FixAnimatorSpeed = false, FixParticleClear = false, BlockedNamespaces = new List<string>(),
            Catalog = new CrossProjectPrefabImporter.ReflectionCatalog(),
        });
        foreach (var hit in result.RuleHits) log.Add("Luna: " + hit.Key + " x" + hit.Value);
        foreach (var warning in result.Warnings) log.Add("Luna warning: " + warning);
        return result.Text;
    }

    internal static string StripSourceComments(string text)
    {
        // Preserve strings (including verbatim strings), line numbers and character offsets.
        return Regex.Replace(text, "@\"(?:\"\"|[^\"])*\"|\"(?:\\\\.|[^\"\\\\])*\"|'(?:\\\\.|[^'\\\\])*'|//[^\\r\\n]*|/\\*[\\s\\S]*?\\*/",
            m => m.Value.StartsWith("//", StringComparison.Ordinal) || m.Value.StartsWith("/*", StringComparison.Ordinal)
                ? new string(m.Value.Select(c => c == '\r' || c == '\n' ? c : ' ').ToArray()) : m.Value);
    }

    /// <summary>
    /// The opposite of ExcludeInnerLevels: the Fix-It button (and, in Outer mode, its inner
    /// level) stay in the playable exactly as the level ships them. Only the scene reloads have
    /// to go, since a playable is a single scene — Enter() hops into the inner level, Return()
    /// comes back after its selected steps.
    /// </summary>
    static string KeepInnerLevels(string text, InnerMode mode, List<string> log)
    {
        if (KeepsFixItButton(mode))
        {
            // RemoteManager is the live game's kill-switch for inner levels and its playable
            // stub answers false ("already fixed"), which would hide the Fix-It button again.
            int gates = 0;
            text = Regex.Replace(
                text,
                @"RemoteManager\.Instance\.FixInnerLevel\s*\(\s*\)",
                m => { gates++; return "true"; });
            if (gates > 0)
                log.Add("RemoteManager.FixInnerLevel() -> true (" + gates + ") — Fix-It gate stays live.");
        }

        string call;
        if (mode == InnerMode.Outer)
            call = "PlayableInnerLevel.Enter();";
        else if (mode == InnerMode.InnerEndsPlayable)
            call = "LevelComplete();";
        else
            call = "PlayableInnerLevel.Return();";

        return RewireInnerHops(text, call, false, log);
    }

    /// <summary>
    /// A Fix-It level trimmed to fewer steps ends on LevelComplete (FixStepChaining's rewrite of
    /// the first cut step), and a source that was already built standalone had its return hop
    /// turned into LevelComplete too. Inside a Fix-It level every one of those means "done fixing",
    /// so they all go back to the main level instead of ending the playable.
    /// </summary>
    static string RouteCompletionToFixItReturn(string text, List<string> log)
    {
        int n = 0;
        text = Regex.Replace(text, @"\bnameof\s*\(\s*LevelComplete\s*\)", m => { n++; return "nameof(ReturnFromFixIt)"; });
        text = Regex.Replace(text, @"(?<![\w.])(?<!void\s)LevelComplete\s*\(\s*\)", m => { n++; return "ReturnFromFixIt()"; });

        var start = Regex.Match(text, @"^[ \t]*(?:\[[^\]\r\n]*\][ \t]*\r?\n[ \t]*)*(?:private |public |protected )?IEnumerator\s+Start\s*\(", RegexOptions.Multiline);
        if (!start.Success)
        {
            log.Add("Fix-It return: IEnumerator Start() not found — ReturnFromFixIt() not injected, script will not compile.");
            return text;
        }

        const string method =
            "    // PLAYABLE: this is a Fix-It level — finishing it hands control back to the main level.\r\n" +
            "    void ReturnFromFixIt()\r\n" +
            "    {\r\n" +
            "        PlayableInnerLevel.Return();\r\n" +
            "    }\r\n\r\n";
        text = text.Insert(start.Index, method);

        log.Add("Fix-It level: " + n + " LevelComplete call(s) → ReturnFromFixIt() (back to the main level).");
        return text;
    }

    /// <summary>
    /// Every method that reloads the scene is a Fix-It hop. Swap the reload for the in-scene
    /// swap and drop the two things that only existed to survive it: the levelToPlay /
    /// partToPlay handoff (PlayableInnerLevel names the level instead) and the loading fade
    /// (PlayableFadeCover does that, on the same image — two of them would fight).
    /// </summary>
    static string RewireInnerHops(string text, string call, bool keepPromptVisible, List<string> log)
    {
        var rx = new Regex(
            @"^    (?:public |private |protected |internal )?(?:static )?[\w.<>,\[\]]+\s+(\w+)\s*\([^;{]*\)\s*\{",
            RegexOptions.Multiline);
        var matches = rx.Matches(text);
        int n = 0;

        for (int i = matches.Count - 1; i >= 0; i--)
        {
            var m = matches[i];
            int open = m.Index + m.Length - 1;
            int close = FindMatchingBrace(text, open);
            if (close < 0)
                continue;

            string body = text.Substring(open, close - open + 1);
            if (body.IndexOf("LoadScene", StringComparison.Ordinal) < 0)
                continue;

            string next = Regex.Replace(
                body,
                @"(?:UnityEngine\.SceneManagement\.)?SceneManager\.LoadScene\s*\(\s*(?:UnityEngine\.SceneManagement\.)?SceneManager\.GetActiveScene\s*\(\s*\)\s*\.buildIndex\s*\)\s*;",
                call);
            next = Regex.Replace(
                next,
                @"(?:UnityEngine\.SceneManagement\.)?SceneManager\.LoadScene\s*\([^()]*\)\s*;",
                call);
            next = Regex.Replace(
                next,
                @"^[ \t]*SaveSystem\.Instance\.DataFields\.(?:levelToPlay|partToPlay)\s*=\s*\d+\s*;[ \t]*\r?\n",
                string.Empty,
                RegexOptions.Multiline);
            next = Regex.Replace(
                next,
                @"^[ \t]*(?:LoadingManager\.instance\.ShowFadeAnim|UI_Manager\.instance\.FadeAnim)\s*\([^;]*;[ \t]*\r?\n",
                string.Empty,
                RegexOptions.Multiline);

            if (keepPromptVisible)
                next = KeepFixItPromptOnScreen(next);

            // The delays that are left only existed to let the loading fade play before the
            // reload. PlayableFadeCover covers the swap itself, so an otherwise-empty
            // DelayedCall is just dead screen time — unwrap it (twice: they nest).
            for (int pass = 0; pass < 2; pass++)
                next = Regex.Replace(
                    next,
                    @"DOVirtual\.DelayedCall\s*\(\s*[\d.]+f?\s*,\s*\(\s*\)\s*=>\s*\{\s*" +
                    Regex.Escape(call) + @"\s*\}\s*\)\s*;",
                    call);

            if (next == body)
                continue;

            text = text.Substring(0, open) + next + text.Substring(close + 1);
            n++;
            log.Add("  - " + m.Groups[1].Value + "() scene reload -> " + call);
        }

        if (n > 0)
            log.Add("Fix-It hop KEPT — " + n + " scene reload(s) rewired to " + call +
                    (keepPromptVisible ? " (prompt stays on screen for re-taps)." : "."));
        else
            log.Add("Fix-It hop KEPT, but no scene reload left to rewire (trimmed away, or the source was already built).");

        return text;
    }

    /// <summary>
    /// Strip the prompt dismissal out of a Fix-It hop: the SetActive(false) calls and the
    /// DOTween reverse that made the prompt shrink away once tapped. With the CTA on that
    /// button the level ends there, so the prompt must stay put and take every further tap —
    /// PlayableCTA.refireOnEveryTap re-opens the store each time. The click SFX stays.
    /// </summary>
    static string KeepFixItPromptOnScreen(string body)
    {
        body = Regex.Replace(
            body,
            @"[ \t]*\w*[Ff]ix[Ii]t\w*\.(?:gameObject\.)?SetActive\s*\(\s*false\s*\)\s*;[ \t]*\r?\n?",
            string.Empty);

        // e.g. fixItPrompt.GetComponent<DOTweenAnimation>().DOPlayBackwards();
        body = Regex.Replace(
            body,
            @"[ \t]*\w*[Ff]ix[Ii]t\w*\.[^;\r\n]*\bDOPlayBackwards\s*\(\s*\)\s*;[ \t]*\r?\n?",
            string.Empty);

        // Whatever wrapper those lines were the only body of is now dead weight.
        for (int pass = 0; pass < 2; pass++)
            body = Regex.Replace(
                body,
                @"[ \t]*DOVirtual\.DelayedCall\s*\(\s*[\d.]+f?\s*,\s*\(\s*\)\s*=>\s*\{\s*\}\s*\)\s*;[ \t]*\r?\n?",
                string.Empty);

        return body;
    }

    static readonly HashSet<string> InnerExcludeKeepMethods = new HashSet<string>
    {
        "Start", "Awake", "OnEnable", "OnDisable", "OnDestroy",
        "LateUpdate", "FixedUpdate", "LevelComplete", "Complete"
    };

    static readonly string[] InnerSerializedFields =
    {
        "ShowerDamaged", "ShowerBackDMG", "ShowerFrontDMG", "ShowerInner_dirty",
        "fixItPrompt", "StoveFixItBtn", "machineDamage", "GreenBtnCol_Damaged",
        "OpenShowerIndication", "CloseShowerIndication", "ToolStep5Rev",
        "ToolStep5Placeable", "showrOpenInput", "showerFixReverseAnimDrag",
        "ShowerInner_Target"
    };

    static string ExcludeInnerLevels(string text, List<string> log)
    {
        int n = 0;

        text = FlattenFixedGates(text, ref n);

        text = Regex.Replace(
            text,
            @"((?:public |private |protected |internal )?bool\s+Is\w+Fixed\s*\(\s*\)\s*\{)([\s\S]*?)(\n    \})",
            m =>
            {
                if (m.Groups[2].Value.IndexOf("FixInnerLevel", StringComparison.Ordinal) < 0)
                    return m.Value;
                n++;
                return m.Groups[1].Value + "\r\n        return true;\r\n    }";
            });

        text = Regex.Replace(
            text,
            @"^[ \t]*is\w+Fixed\s*=\s*Is\w+Fixed\s*\(\s*\)\s*;\s*\r?\n",
            "",
            RegexOptions.Multiline);

        text = Regex.Replace(
            text,
            @"(\w+)\.SetActive\s*\(\s*!Is\w+Fixed\s*\(\s*\)\s*\)\s*;",
            "$1.SetActive(false);");

        text = Regex.Replace(
            text,
            @"if\s*\(\s*!is\w+Fixed\s*\)\s*\{[\s\S]*?return;\s*\}",
            "");
        text = Regex.Replace(
            text,
            @"if\s*\(\s*!Is\w+Fixed\s*\(\s*\)\s*\)\s*\{[\s\S]*?return;\s*\}",
            "");
        text = Regex.Replace(
            text,
            @"else if\s*\(\s*PlayerPrefs\.GetInt\(\s*""CleanShowerPlaced""[\s\S]*?return;\s*\}",
            "");

        text = RewriteInnerHopMethods(text, ref n);

        text = Regex.Replace(text, @"\r?\n    bool waitingForStep5PickAttempt\s*;", "");
        text = Regex.Replace(text, @"\r?\n    bool isShowerFixed\s*;", "");
        text = Regex.Replace(text, @"\r?\n    bool showerOpend\s*=\s*false\s*;", "");
        text = Regex.Replace(text, @"\r?\n    bool fixItPressed\s*=\s*false\s*;", "");
        text = Regex.Replace(
            text,
            @"(\[Header\(""[^""]*SHOWER FIX GATE[^""]*""\)\][\s\S]*?)(?=\bIEnumerator\s+Start\s*\()",
            "",
            RegexOptions.IgnoreCase);

        text = NullGuardInnerFields(text);

        if (n > 0)
            log.Add("Inner extra-levels excluded (FixInnerLevel / Fix-It hops): " + n + " rewrite(s).");
        return text;
    }

    static string FlattenFixedGates(string text, ref int n)
    {
        text = ReplaceFixedIfElse(text, @"if\s*\(\s*!Is\w+Fixed\s*\(\s*\)\s*\)\s*\{", true, ref n);
        text = ReplaceFixedIfElse(text, @"if\s*\(\s*Is\w+Fixed\s*\(\s*\)\s*\)\s*\{", false, ref n);
        return text;
    }

    static string ReplaceFixedIfElse(string text, string ifOpenPattern, bool keepElse, ref int n)
    {
        var rx = new Regex(ifOpenPattern);
        var matches = rx.Matches(text);
        for (int i = matches.Count - 1; i >= 0; i--)
        {
            var m = matches[i];
            int open = m.Index + m.Length - 1;
            int close = FindMatchingBrace(text, open);
            if (close < 0)
                continue;

            int j = close + 1;
            while (j < text.Length && char.IsWhiteSpace(text[j]))
                j++;

            if (j + 4 <= text.Length && text.Substring(j, 4) == "else")
            {
                int k = j + 4;
                while (k < text.Length && char.IsWhiteSpace(text[k]))
                    k++;
                if (k < text.Length && text[k] == '{')
                {
                    int elseClose = FindMatchingBrace(text, k);
                    if (elseClose < 0)
                        continue;
                    string keep = keepElse
                        ? text.Substring(k + 1, elseClose - k - 1)
                        : text.Substring(open + 1, close - open - 1);
                    text = text.Substring(0, m.Index) + keep.Trim('\r', '\n') + text.Substring(elseClose + 1);
                    n++;
                    continue;
                }
            }

            if (keepElse)
            {
                text = text.Remove(m.Index, close - m.Index + 1);
                n++;
            }
        }

        return text;
    }

    static string RewriteInnerHopMethods(string text, ref int n)
    {
        var rx = new Regex(
            @"^    (?:public |private |protected |internal )?(?:static )?[\w.<>,\[\]]+\s+(\w+)\s*\([^;{]*\)\s*\{",
            RegexOptions.Multiline);
        var matches = rx.Matches(text);
        var cuts = new List<int[]>();
        var replacements = new Dictionary<int, string>();

        for (int i = 0; i < matches.Count; i++)
        {
            var m = matches[i];
            string name = m.Groups[1].Value;
            int open = m.Index + m.Length - 1;
            int close = FindMatchingBrace(text, open);
            if (close < 0)
                continue;

            string body = text.Substring(open, close - open + 1);
            bool hop = Regex.IsMatch(body, @"partToPlay\s*=") &&
                       body.IndexOf("LoadScene", StringComparison.Ordinal) >= 0;
            bool fixIt = Regex.IsMatch(
                name,
                @"FixIt|Fixit|ShowerOpened|OnCleanShowerPlaced|OnShowerPlacedAgain|OnStep5ToolPickAttempt|GreenBtnPressedDmg|ShowShowerOpenInd|HideShowerOpenInd",
                RegexOptions.IgnoreCase);
            bool innerUpdate = name == "Update" &&
                               body.IndexOf("OnStep5ToolPickAttempt", StringComparison.Ordinal) >= 0;

            if (InnerExcludeKeepMethods.Contains(name))
                continue;

            int start = m.Index;
            while (start > 0 && text[start - 1] != '\n')
                start--;

            if (innerUpdate || fixIt)
            {
                cuts.Add(new[] { start, close + 1 });
                continue;
            }

            if (!hop)
                continue;

            if (Regex.IsMatch(name, @"^Load\w+(Agian|Again)$", RegexOptions.IgnoreCase))
            {
                string indent = "    ";
                replacements[start] = indent + "void " + name + "()\r\n" + indent + "{\r\n" +
                                      indent + "        LevelComplete();\r\n" + indent + "}\r\n";
                cuts.Add(new[] { start, close + 1 });
                continue;
            }

            cuts.Add(new[] { start, close + 1 });
        }

        for (int i = cuts.Count - 1; i >= 0; i--)
        {
            int start = cuts[i][0];
            int end = cuts[i][1];
            string insert;
            if (replacements.TryGetValue(start, out insert))
                text = text.Substring(0, start) + insert + text.Substring(end);
            else
                text = text.Remove(start, end - start);
            n++;
        }

        return text;
    }

    static string NullGuardInnerFields(string text)
    {
        for (int i = 0; i < InnerSerializedFields.Length; i++)
        {
            string field = InnerSerializedFields[i];
            text = Regex.Replace(
                text,
                @"(?<!if\s*\(\s*" + field + @"\s*!=\s*null\s*\)\s*)(" + field +
                @"\.(?:gameObject\.)?SetActive\s*\([^;]+;)",
                "if (" + field + " != null) $1");
        }

        return text;
    }

    static string RewriteStart(string text, HashSet<int> keep, int first, int last, int resumeStep, List<string> log)
    {
        var m = Regex.Match(text, @"IEnumerator\s+Start\s*\(\s*\)\s*\{");
        if (!m.Success)
        {
            log.Add("IEnumerator Start() nahi mila — Start rewrite skip.");
            return text;
        }

        int open = m.Index + m.Length - 1;
        int close = FindMatchingBrace(text, open);
        if (close < 0)
        {
            log.Add("Start() brace match fail.");
            return text;
        }

        string body = text.Substring(open + 1, close - open - 1);
        string nl = body.Contains("\r\n") ? "\r\n" : "\n";
        var keptLines = new StringBuilder();

        var switchMatch = Regex.Match(body, @"switch\s*\(\s*stepsDone\s*\)");
        string head;
        if (switchMatch.Success)
            head = body.Substring(0, switchMatch.Index);
        else
        {
            var startCall = Regex.Match(body, @"StartStep\d+\s*\(");
            head = startCall.Success ? body.Substring(0, startCall.Index) : body;
        }

        var keepScript = new HashSet<int>(keep);
        for (int s = 1; s < first; s++)
            keepScript.Add(s);
        var unkeptFields = CollectUnkeptFieldNames(text, keepScript);

        using (var reader = new StringReader(head))
        {
            string line;
            while ((line = reader.ReadLine()) != null)
            {
                if (Regex.IsMatch(line, @"stepsDone\s*=\s*SaveSystem") ||
                    Regex.IsMatch(line, @"skipIconAdvance\s*=") ||
                    Regex.IsMatch(line, @"levelNo\s*=\s*SaveSystem") ||
                    Regex.IsMatch(line, @"partNo\s*=\s*SaveSystem") ||
                    Regex.IsMatch(line, @"resuming mid-level") ||
                    Regex.IsMatch(line, @"first StartStepN must skip"))
                    continue;

                if (ShouldSkipInitLine(line, keep, first, unkeptFields) && !IsAlwaysKeepHideLine(line, last))
                    continue;

                keptLines.Append(line);
                keptLines.Append(nl);
            }
        }

        string forceCall;
        string startInvoke;
        ResolveSwitchBoot(body, text, first, out forceCall, out startInvoke);

        // ForceCompleteStepN() snaps objects straight to their end state (no tween) —
        // visible as a pop/flash if it runs on an unhidden frame. Cover the screen before
        // it runs (as the very first thing in Start(), before any yield) and only reveal
        // once the kept boot step has actually started.
        bool coverPop = !string.IsNullOrEmpty(forceCall);

        var boot = new StringBuilder();
        if (coverPop)
            boot.Append("        // PLAYABLE: cover the ForceComplete step-skip so nothing visibly pops/snaps.").Append(nl)
                .Append("        PlayableFadeCover.Cover();").Append(nl).Append(nl);

        boot.Append(keptLines);
        if (!keptLines.ToString().EndsWith(nl + nl))
            boot.Append(nl);

        // The main level is only switched off while its Fix-It level plays, never re-created, so
        // Start() does not run again on the way back. PlayableInnerLevel calls ResumeFromFixIt()
        // instead: it re-enters the Fix-It step through the very case the original switch used
        // for it — the same path the game's scene reload took, with the level now "fixed".
        string resumeMethod = null;
        if (resumeStep > 0)
        {
            string resumeForce, resumeInvoke;
            ResolveSwitchBoot(body, text, resumeStep, out resumeForce, out resumeInvoke);

            boot.Append("        // PLAYABLE: the Fix-It level hands control back through ResumeFromFixIt().").Append(nl);
            boot.Append("        PlayableInnerLevel.ResumeOuter = ResumeFromFixIt;").Append(nl).Append(nl);

            var rm = new StringBuilder();
            rm.Append("    // PLAYABLE: back from the Fix-It level — this level was only switched off, so re-enter step ")
              .Append(resumeStep).Append(" (now fixed) instead of rebooting.").Append(nl);
            rm.Append("    void ResumeFromFixIt()").Append(nl);
            rm.Append("    {").Append(nl);
            rm.Append("        PlayableFadeCover.Cover();").Append(nl);
            if (Regex.IsMatch(head, @"UI_Manager\.instance\.InitializeTools\s*\("))
            {
                // The Fix-It level's own Start() put its tool icons on the bar; put this level's back,
                // advanced to the Fix-It step the way SetProgressBar() advanced it the first time.
                int toolIndex = keep.Count(s => s < resumeStep);
                rm.Append("        UI_Manager.instance.InitializeTools(ToolIcons);").Append(nl);
                if (toolIndex > 0)
                    rm.Append("        for (int i = 0; i < ").Append(toolIndex).Append("; i++) UI_Manager.instance.SetProgressBarPos();").Append(nl);
            }
            if (!string.IsNullOrEmpty(resumeForce))
                rm.Append("        ").Append(resumeForce).Append(nl);
            rm.Append("        ").Append(resumeInvoke).Append(nl);
            rm.Append("        PlayableFadeCover.Reveal();").Append(nl);
            rm.Append("    }").Append(nl).Append(nl);
            resumeMethod = rm.ToString();

            log.Add("ResumeFromFixIt() added for Fix-It step " + resumeStep + " → " + resumeForce + " " + resumeInvoke);
        }

        boot.Append("        // PLAYABLE: no save resume — same ForceComplete + StartStep as original switch.").Append(nl);
        if (!string.IsNullOrEmpty(forceCall))
            boot.Append("        ").Append(forceCall).Append(nl);
        boot.Append("        ").Append(startInvoke).Append(nl);

        if (coverPop)
            boot.Append("        PlayableFadeCover.Reveal();").Append(nl);

        boot.Append("        yield break;").Append(nl);

        log.Add("Start() uses original switch boot → " + forceCall + " " + startInvoke + (coverPop ? " (fade-covered)" : ""));
        text = text.Substring(0, open + 1) + nl + boot + text.Substring(close);

        if (resumeMethod != null)
        {
            int lineStart = m.Index;
            while (lineStart > 0 && text[lineStart - 1] != '\n')
                lineStart--;
            text = text.Insert(lineStart, resumeMethod);
        }

        return text;
    }

    static void ResolveSwitchBoot(string startBody, string fullText, int first, out string forceCall, out string startInvoke)
    {
        forceCall = null;
        startInvoke = "Invoke(nameof(StartStep" + first + "), .5f);";

        var sw = Regex.Match(startBody, @"switch\s*\(\s*stepsDone\s*\)\s*\{");
        if (sw.Success)
        {
            int brace = FindMatchingBrace(startBody, sw.Index + sw.Length - 1);
            if (brace > sw.Index)
            {
                string switchBody = startBody.Substring(sw.Index, brace - sw.Index + 1);
                var cases = Regex.Matches(
                    switchBody,
                    @"case\s+(\d+)\s*:(.*?)(?=case\s+\d+\s*:|default\s*:|\})",
                    RegexOptions.Singleline);
                for (int i = 0; i < cases.Count; i++)
                {
                    string caseBody = cases[i].Groups[2].Value;
                    if (!Regex.IsMatch(caseBody, @"\bStartStep" + first + @"\b"))
                        continue;

                    var fc = Regex.Match(caseBody, @"ForceCompleteStep\w+\s*\(\s*\)\s*;");
                    if (fc.Success)
                        forceCall = fc.Value;

                    var inv = Regex.Match(
                        caseBody,
                        @"Invoke\s*\(\s*nameof\s*\(\s*(StartStep\d+\w*)\s*\)\s*(,\s*[^)]+)?\)\s*;");
                    if (inv.Success)
                    {
                        startInvoke = inv.Value.Trim();
                        return;
                    }

                    var direct = Regex.Match(caseBody, @"StartStep\d+\w*\s*\(\s*\)\s*;");
                    if (direct.Success)
                        startInvoke = direct.Value.Trim();
                    return;
                }
            }
        }

        if (first <= 1)
        {
            startInvoke = "StartStep1();";
            return;
        }

        if (first == 3 && Regex.IsMatch(fullText, @"\bvoid\s+ForceCompleteStep2b\s*\("))
        {
            forceCall = "ForceCompleteStep2b();";
            startInvoke = "Invoke(nameof(StartStep3), .5f);";
            return;
        }

        // No stepsDone switch to read the real boot from — either this level never had one, or
        // (building from an already-built playable) an earlier build already stripped it via
        // StripSaveSystem. ForceCompleteStep{first-1} alone is not always enough: on some levels
        // it doesn't cascade back through every earlier step (each ForceCompleteStepN only calls
        // ForceCompleteStepN-1 where the ORIGINAL author wired that chain), and a lettered bridge
        // step spliced between numbered 2 and 3 (ForceCompleteStep2b, ForceCompleteStep3a) often
        // carries the ONLY call that hides the whole earlier-phase view/parent (e.g.
        // WashingView.SetActive(false)) — without it those objects stay in their raw default
        // state and everything before the target step remains visible.
        string prev = "ForceCompleteStep" + (first - 1);
        var forceCalls = new List<string>();
        if (Regex.IsMatch(fullText, @"\bvoid\s+" + prev + @"\s*\("))
            forceCalls.Add(prev + "();");

        if (first > 3)
        {
            foreach (var bridge in new[] { "ForceCompleteStep2b", "ForceCompleteStep3a" })
                if (Regex.IsMatch(fullText, @"\bvoid\s+" + bridge + @"\s*\("))
                    forceCalls.Add(bridge + "();");
        }

        forceCall = forceCalls.Count > 0 ? string.Join(" ", forceCalls) : null;
        startInvoke = "Invoke(nameof(StartStep" + first + "), .5f);";
    }

    static bool IsAlwaysKeepHideLine(string line, int lastKept)
    {
        var fields = HideLayerFields(lastKept);
        for (int i = 0; i < fields.Length; i++)
        {
            if (line.IndexOf(fields[i], StringComparison.Ordinal) >= 0)
                return true;
        }

        return false;
    }

    static List<string> CaptureHideFieldDecls(string text, int lastKept)
    {
        var decls = new List<string>();
        var fields = HideLayerFields(lastKept);
        for (int i = 0; i < fields.Length; i++)
        {
            var m = Regex.Match(
                text,
                @"^[ \t]*public\s+GameObject\s+" + fields[i] + @"\s*;\s*$",
                RegexOptions.Multiline);
            if (m.Success)
                decls.Add(m.Value.TrimEnd('\r', '\n'));
        }

        return decls;
    }

    static string RestoreHideFieldDecls(string text, List<string> decls)
    {
        if (decls == null || decls.Count == 0)
            return text;

        var inject = new StringBuilder();
        for (int i = 0; i < decls.Count; i++)
        {
            var name = Regex.Match(decls[i], @"GameObject\s+(\w+)");
            if (name.Success && Regex.IsMatch(text, @"\bGameObject\s+" + name.Groups[1].Value + @"\b"))
                continue;
            inject.AppendLine("    " + decls[i].Trim());
        }

        if (inject.Length == 0)
            return text;

        var start = Regex.Match(text, @"\bIEnumerator\s+Start\s*\(");
        if (!start.Success)
            return text;
        return text.Insert(start.Index, inject + "\r\n    ");
    }

    static bool ShouldSkipInitLine(string line, HashSet<int> keep, int first, HashSet<string> unkeptFields)
    {
        var comment = Regex.Match(line, @"//\s*STEP\s*(\d+)");
        if (comment.Success)
        {
            int cStep = int.Parse(comment.Groups[1].Value);
            return !keep.Contains(cStep) && cStep >= first;
        }

        if (unkeptFields != null)
        {
            foreach (string field in unkeptFields)
            {
                if (!string.IsNullOrEmpty(field) && Regex.IsMatch(line, @"\b" + Regex.Escape(field) + @"\b"))
                    return true;
            }
        }

        var m = Regex.Match(line, @"(?:ToolStep|ZoomStep|Step)(\d+)");
        if (!m.Success)
            return false;

        int step = int.Parse(m.Groups[1].Value);
        if (keep.Contains(step) || step < first)
            return false;
        return true;
    }

    static HashSet<string> CollectUnkeptFieldNames(string text, HashSet<int> keepScript)
    {
        var names = new HashSet<string>();
        int maxStep = 0;
        foreach (Match m in Regex.Matches(text, @"\bStartStep(\d+)(?!\w)"))
            maxStep = Math.Max(maxStep, int.Parse(m.Groups[1].Value));
        foreach (Match m in Regex.Matches(text, @"\[Header\(""[^""]*STEP\s*(\d+)", RegexOptions.IgnoreCase))
            maxStep = Math.Max(maxStep, int.Parse(m.Groups[1].Value));

        for (int step = 1; step <= maxStep; step++)
        {
            if (keepScript.Contains(step))
                continue;
            string block = GetStepHeaderBlock(text, step);
            if (string.IsNullOrEmpty(block))
                continue;
            foreach (Match fm in Regex.Matches(
                block,
                @"(?:public|private|protected|internal)\s+(?:static\s+)?[\w.<>,\[\]?]+\s+(\w+)\s*[;=]"))
                names.Add(fm.Groups[1].Value);
        }

        string surviving = text;
        for (int step = maxStep; step >= 1; step--)
            if (!keepScript.Contains(step))
            {
                surviving = RemoveStepRegion(surviving, step);
                surviving = RemoveStepHeaderBlock(surviving, step, true);
            }
        surviving = StripRemovedHelperCalls(text, surviving, new List<string>());
        string survivingMask = LunaScriptSanitizer.Mask(surviving);
        names.RemoveWhere(name => Regex.IsMatch(survivingMask, @"\b" + Regex.Escape(name) + @"\b"));
        return names;
    }

    static HashSet<string> DeclaredMethods(string text)
    {
        return new HashSet<string>(Regex.Matches(LunaScriptSanitizer.Mask(text),
            @"\b(?:void|IEnumerator|bool|float|int|string|Vector[234]|Quaternion|Color)\s+(\w+)\s*\([^;{}]*\)\s*\{")
            .Cast<Match>().Select(m => m.Groups[1].Value), StringComparer.Ordinal);
    }

    static string StripRemovedHelperCalls(string source, string surviving, List<string> log, bool validate = false)
    {
        var removed = DeclaredMethods(source);
        removed.ExceptWith(DeclaredMethods(surviving));
        if (removed.Count == 0) return surviving;
        if (validate)
        {
            bool restored;
            do
            {
                restored = false;
                string live = LunaScriptSanitizer.Mask(surviving);
                foreach (string name in removed.ToArray())
                {
                    // Shared non-step helpers can live inside a skipped region (e.g.
                    // Manicure's PlayAnySound). Keep their implementation and dependencies.
                    if (Regex.IsMatch(name, @"\d") || !Regex.IsMatch(live, @"\b" + Regex.Escape(name) + @"\b")) continue;
                    var declaration = Regex.Match(LunaScriptSanitizer.Mask(source),
                        @"(?m)^[ \t]*(?:(?:public|private|protected|internal|static|virtual|override)\s+)*[\w.<>,\[\]]+\s+" + Regex.Escape(name) + @"\s*\([^;{}]*\)\s*\{");
                    if (!declaration.Success) continue;
                    int close = FindMatchingBrace(source, declaration.Index + declaration.Length - 1);
                    var type = Regex.Match(live, @"\bclass\s+\w+[^{}]*\{");
                    if (close < 0 || !type.Success) continue;
                    // Not shared after all when its body drives an excluded step's own state (Dress's UpdateZipLoops reads
                    // zipMoved_8 / isStep8Done): leave it out and let its standalone calls be stripped below.
                    string sourceMask = LunaScriptSanitizer.Mask(source);
                    string helperBody = sourceMask.Substring(declaration.Index, close - declaration.Index + 1);
                    string elsewhere = sourceMask.Remove(declaration.Index, close - declaration.Index + 1); // its own locals don't count
                    if (Regex.Matches(helperBody, @"\b[A-Za-z_]\w*\d\w*\b").Cast<Match>().Select(m => m.Value).Distinct()
                        .Any(id => !Regex.IsMatch(live, @"\b" + Regex.Escape(id) + @"\b") && Regex.IsMatch(elsewhere, @"\b[\w.<>,\[\]]+\s+" + Regex.Escape(id) + @"\s*[;=,(]")))
                    {
                        log.Add("Not preserving '" + name + "' from an excluded region: it drives that step's own state; its calls are stripped.");
                        continue;
                    }
                    surviving = surviving.Insert(type.Index + type.Length, "\n" + source.Substring(declaration.Index, close - declaration.Index + 1) + "\n");
                    removed.Remove(name); restored = true;
                    log.Add("Preserved shared helper from an excluded region: " + name);
                }
            } while (restored);
        }
        if (removed.Count == 0) return surviving;
        var result = LunaScriptSanitizer.Sanitize(surviving, new LunaSanitizeOptions {
            ConvertOnMouse = false, FixAnimatorSpeed = false, FixParticleClear = false,
            RemoveEmptyTryCatch = false, StripMissingSingletonCalls = false,
            StripCallPatterns = removed.Select(name => @"(?<![\w.])" + Regex.Escape(name) + @"\s*\(").ToList()
        });
        if (result.Changed) log.Add("Removed standalone calls to helpers owned by excluded steps.");
        string mask = LunaScriptSanitizer.Mask(result.Text);
        var unresolved = removed.Where(name => Regex.IsMatch(mask, @"\b" + Regex.Escape(name) + @"\b")).ToArray();
        if (validate && unresolved.Length > 0)
            throw new InvalidOperationException("Removed step helpers are still used by surviving code: " + string.Join(", ", unresolved));
        return result.Text;
    }

    static string RestoreSharedStepFields(string source, string surviving, HashSet<int> keep, int maxStep, List<string> log)
    {
        string mask = LunaScriptSanitizer.Mask(surviving);
        var declarations = new List<string>();
        for (int step = 1; step <= maxStep; step++)
        {
            if (keep.Contains(step)) continue;
            string header = GetStepHeaderBlock(source, step);
            foreach (Match field in Regex.Matches(header,
                @"(?m)^[ \t]*(?:public|private|protected|internal)\s+(?:static\s+)?[\w.<>,\[\]?]+\s+(?<name>\w+)\s*(?:=[^;]*)?;"))
                if (Regex.IsMatch(mask, @"\b" + Regex.Escape(field.Groups["name"].Value) + @"\b"))
                {
                    declarations.Add(field.Value);
                    log.Add("Preserved shared field used by surviving helpers: " + field.Groups["name"].Value);
                }
        }
        if (declarations.Count == 0) return surviving;
        var type = Regex.Match(mask, @"\bclass\s+\w+[^{}]*\{");
        if (!type.Success) throw new InvalidOperationException("Generated level class was not found while restoring shared fields.");
        return surviving.Insert(type.Index + type.Length, "\n" + string.Join("\n", declarations) + "\n");
    }

    internal static string RewriteInvokedSteps(string text, Func<int, string, string> rewrite)
    {
        string mask = LunaScriptSanitizer.Mask(text);
        var matches = Regex.Matches(mask, @"\bInvoke\s*\(").Cast<Match>().Reverse().ToList();
        var result = new StringBuilder(text);
        foreach (var match in matches)
        {
            int open = match.Index + match.Length - 1;
            int close = FindMatchingPair(mask, open, '(', ')');
            if (close < 0) continue;
            string arguments = text.Substring(open + 1, close - open - 1);
            var target = Regex.Match(arguments,
                @"^\s*(?:nameof\s*\(\s*StartStep(?<step>\d+)\s*\)|""StartStep(?<step>\d+)"")(?<delay>\s*,[\s\S]*)?\s*$");
            if (!target.Success) continue;
            int end = close + 1;
            int next = end;
            while (next < mask.Length && char.IsWhiteSpace(mask[next])) next++;
            bool statement = next < mask.Length && mask[next] == ';';
            if (statement) end = next + 1;
            string replacement = rewrite(int.Parse(target.Groups["step"].Value), target.Groups["delay"].Success ? target.Groups["delay"].Value : null);
            if (!statement && !replacement.TrimStart().StartsWith("{", StringComparison.Ordinal)) replacement = replacement.TrimEnd(';');
            result.Remove(match.Index, end - match.Index);
            result.Insert(match.Index, replacement);
        }
        return result.ToString();
    }

    internal static void ValidateStepReferences(string text)
    {
        string mask = LunaScriptSanitizer.Mask(text);
        var declared = new HashSet<string>(Regex.Matches(mask, @"\bvoid\s+(StartStep\d+\w*)\s*\(")
            .Cast<Match>().Select(m => m.Groups[1].Value), StringComparer.Ordinal);
        var missing = Regex.Matches(mask, @"\bStartStep\d+\w*\b").Cast<Match>().Select(m => m.Value)
            .Where(name => !declared.Contains(name)).Distinct().ToArray();
        if (missing.Length > 0) throw new InvalidOperationException("Generated playable references removed step methods: " + string.Join(", ", missing));
    }

    static string FixStepChaining(string text, HashSet<int> keep, int lastKept, List<string> log)
    {
        string source = text;
        text = RewriteInvokedSteps(text, (target, delay) =>
            RewriteNextCall(target, keep, lastKept, delay, true, source, log));

        text = Regex.Replace(
            text,
            @"(?<!void\s)(?<!nameof\s*\(\s*)StartStep(\d+)(?!\w)\s*\(\s*\)",
            m => RewriteNextCall(int.Parse(m.Groups[1].Value), keep, lastKept, null, false, source, log));

        // Some levels splice a lettered sub-step between two numbered ones — Level1_Hair/Shower
        // names it "2b" (between bugs=2 and shampoo=3), Level1_Cloth names the same slot "3a"
        // (between the wash machine=2 and dressing=3). Either way the plain-digit regexes above
        // never match it (StartStep(\d+)(?!\w) deliberately excludes a trailing letter), so
        // without this pass a build that cuts before step 3 leaves the call dangling — the
        // content just ends without ever reaching LevelComplete, so the CTA never fires.
        text = RewriteBridgeSubStep(text, "StartStep2b", keep, lastKept, log);
        text = RewriteBridgeSubStep(text, "StartStep3a", keep, lastKept, log);
        text = RewriteLastStepComplete(text, lastKept, log);
        text = StripUnkeptTransitions(text, keep, log);
        log.Add("Last kept step " + lastKept + " complete → LevelComplete (next StartStep nahi).");
        return text;
    }

    /// <summary>
    /// <paramref name="subStep"/> is a lettered sub-step known to sit between numbered step 2 and
    /// step 3 (e.g. "StartStep2b", "StartStep3a"). Rewires it the same way regardless of which
    /// level it belongs to: skipped entirely (→ LevelComplete) if step 3 isn't kept, left as
    /// 2 → subStep → 3 if both 2 and 3 are kept, or redirected straight to StartStep3 if only 3
    /// (not 2) survived the cut.
    /// </summary>
    static string RewriteBridgeSubStep(string text, string subStep, HashSet<int> keep, int lastKept, List<string> log)
    {
        if (!Regex.IsMatch(text, @"\b" + subStep + @"\s*\("))
            return text;

        // Last kept is before step 3: completing step 2 must not enter the bridge.
        if (lastKept < 3)
        {
            text = Regex.Replace(
                text,
                @"Invoke\s*\(\s*nameof\s*\(\s*" + subStep + @"\s*\)\s*(,\s*[^)]+)?\)\s*;",
                m => "Invoke(nameof(LevelComplete)" + (m.Groups[1].Success ? m.Groups[1].Value : ", 1f") + ");");
            text = Regex.Replace(
                text,
                @"(?<!void\s)(?<!nameof\s*\(\s*)" + subStep + @"\s*\(\s*\)\s*;",
                "LevelComplete();");
            log.Add(subStep + " skipped — last step complete → LevelComplete().");
            return text;
        }

        // If step 2 is kept and 3 is in the playable, leave 2 → subStep → 3.
        if (keep.Contains(2))
            return text;

        string forceMethod = "ForceComplete" + subStep.Substring("Start".Length);
        string replacement;
        if (keep.Contains(3))
        {
            bool hasForce = Regex.IsMatch(text, @"\bvoid\s+" + forceMethod + @"\s*\(");
            replacement = hasForce
                ? "{ PlayableFadeCover.Cover(); " + forceMethod + "(); Invoke(nameof(StartStep3), .5f); PlayableFadeCover.Reveal(); }"
                : "Invoke(nameof(StartStep3), .5f);";
            log.Add(subStep + " skipped → StartStep3" + (hasForce ? " (fade-covered)." : "."));
        }
        else
        {
            replacement = "Invoke(nameof(LevelComplete), 1f);";
            log.Add(subStep + " skipped → LevelComplete().");
        }

        text = Regex.Replace(
            text,
            @"Invoke\s*\(\s*nameof\s*\(\s*" + subStep + @"\s*\)\s*(,\s*[^)]+)?\)\s*;",
            replacement);
        text = Regex.Replace(
            text,
            @"(?<!void\s)(?<!nameof\s*\(\s*)" + subStep + @"\s*\(\s*\)\s*;",
            replacement);
        return text;
    }

    static string RewriteNextCall(int targetStep, HashSet<int> keep, int lastKept, string invokeDelay, bool isInvoke, string sourceText, List<string> log)
    {
        if (targetStep > lastKept)
        {
            log.Add("StartStep" + targetStep + " (after last kept " + lastKept + ") → LevelComplete().");
            return isInvoke
                ? "Invoke(nameof(LevelComplete)" + (invokeDelay ?? ", 1f") + ");"
                : "LevelComplete()";
        }

        if (keep.Contains(targetStep))
            return isInvoke
                ? "Invoke(nameof(StartStep" + targetStep + ")" + (invokeDelay ?? "") + ");"
                : "StartStep" + targetStep + "()";

        int next = 0;
        foreach (int s in keep.OrderBy(x => x))
        {
            if (s > targetStep)
            {
                next = s;
                break;
            }
        }

        if (next <= 0)
        {
            log.Add("StartStep" + targetStep + " → LevelComplete().");
            return isInvoke
                ? "Invoke(nameof(LevelComplete)" + (invokeDelay ?? ", 1f") + ");"
                : "LevelComplete()";
        }

        int forceStep = next - 1;
        bool hasForce = Regex.IsMatch(sourceText, @"\bvoid\s+ForceCompleteStep" + forceStep + @"\s*\(");
        string force = hasForce ? "ForceCompleteStep" + forceStep + "(); " : "";
        string cover = hasForce ? "PlayableFadeCover.Cover(); " : "";
        string reveal = hasForce ? " PlayableFadeCover.Reveal();" : "";
        log.Add("StartStep" + targetStep + " skipped → " + (hasForce ? "ForceComplete " + forceStep + " (fade-covered) then " : "") + "StartStep" + next + ".");
        if (isInvoke)
            return "{ " + cover + force + "Invoke(nameof(StartStep" + next + ")" + (invokeDelay ?? "") + ");" + reveal + " }";
        return cover + force + "StartStep" + next + "()" + (hasForce ? "; PlayableFadeCover.Reveal()" : "");
    }

    static string RewriteLastStepComplete(string text, int lastKept, List<string> log)
    {
        var names = new List<string>
        {
            "Step" + lastKept + "Complete",
            "Step" + lastKept + "Done"
        };

        int rewrites = 0;
        for (int i = 0; i < names.Count; i++)
        {
            var m = Regex.Match(text, @"(?:public |private |protected )?void\s+" + Regex.Escape(names[i]) + @"\s*\(\s*\)\s*\{");
            if (!m.Success)
                continue;

            int open = m.Index + m.Length - 1;
            int close = FindMatchingBrace(text, open);
            if (close < 0)
                continue;

            string body = text.Substring(open + 1, close - open - 1);
            string next = EndLastStepBody(body, lastKept);
            if (next == body)
                continue;

            text = text.Substring(0, open + 1) + next + text.Substring(close);
            rewrites++;
        }

        if (rewrites > 0)
            log.Add("Last step Step" + lastKept + " Complete/Done → LevelComplete, next-step fade/StartStep hata diya.");
        return text;
    }

    static string EndLastStepBody(string body, int lastKept)
    {
        string nextZoom = "ZoomStep" + (lastKept + 1);
        int idx = 0;
        while (idx < body.Length)
        {
            int start = body.IndexOf("DOVirtual.DelayedCall", idx, StringComparison.Ordinal);
            if (start < 0)
                break;
            int open = body.IndexOf('(', start);
            if (open < 0)
                break;
            int close = FindMatchingPair(body, open, '(', ')');
            if (close < 0)
                break;
            int end = close;
            if (end + 1 < body.Length && body[end + 1] == ';')
                end++;
            string call = body.Substring(start, close - start + 1);
            bool nextStep = call.IndexOf("StartStep", StringComparison.Ordinal) >= 0 ||
                            call.IndexOf("nameof(LevelComplete)", StringComparison.Ordinal) >= 0 && call.IndexOf("View", StringComparison.Ordinal) >= 0 ||
                            call.IndexOf("FadeAnim", StringComparison.Ordinal) >= 0 ||
                            call.IndexOf(nextZoom, StringComparison.Ordinal) >= 0;
            if (nextStep)
            {
                string insert = "Invoke(nameof(LevelComplete), 1f);";
                body = body.Substring(0, start) + insert + body.Substring(end + 1);
                idx = start + insert.Length;
            }
            else
            {
                idx = start + 1;
            }
        }

        body = RewriteInvokedSteps(body, (target, delay) =>
            "Invoke(nameof(LevelComplete)" + (delay ?? ", 1f") + ");");
        body = Regex.Replace(
            body,
            @"(?<!void\s)(?<!nameof\s*\(\s*)StartStep(?:\d+|2b)\s*\(\s*\)\s*;",
            "LevelComplete();");
        return body;
    }

    // LoadingManager isn't present in the Playable scene (it's only ever instantiated by
    // the full game's boot flow), so any surviving LoadingManager.instance.ShowFadeAnim
    // call NullRef's at runtime and silently kills whatever coroutine chain called it.
    // UI_Manager.FadeAnim is the equivalent that IS wired up in the Playable scene, and
    // has an identical (duration, innerDelay) signature, so it's a straight swap.
    static string RedirectLoadingManagerFades(string text, List<string> log)
    {
        string next = Regex.Replace(
            text,
            @"LoadingManager\.instance\.ShowFadeAnim\s*\(",
            "UI_Manager.instance.FadeAnim(");
        if (next != text)
            log.Add("LoadingManager.ShowFadeAnim → UI_Manager.FadeAnim (LoadingManager doesn't exist in the Playable scene).");
        return next;
    }

    static string StripSaveSystem(string text, List<string> log)
    {
        string next = Regex.Replace(
            text,
            @"^[ \t]*SaveSystem\.Instance\.DataFields\.AllLevels\[levelNo\]\.subLevels\[partNo\]\.stepsDone\s*=\s*\d+\s*;\s*\r?\n",
            string.Empty,
            RegexOptions.Multiline);
        next = Regex.Replace(
            next,
            @"^[ \t]*PersistStepsDone\s*\(\s*\d+\s*\)\s*;\s*\r?\n",
            string.Empty,
            RegexOptions.Multiline);
        next = Regex.Replace(
            next,
            @"\r?\n    void PersistStepsDone\s*\(\s*int value\s*\)\s*\{.*?\n    \}\r?\n",
            "\n",
            RegexOptions.Singleline);
        if (next != text)
            log.Add("SaveSystem / PersistStepsDone stripped — playable does not persist progress.");
        return next;
    }

    static void TrimPrefab(string prefabPath, List<int> orderedKeep, InnerMode mode, List<string> unusedObjectPaths, List<string> log, string generatedScript)
    {
        var keep = new HashSet<int>(orderedKeep);
        var root = PrefabUtility.LoadPrefabContents(prefabPath);
        try
        {
            if (PrefabUtility.IsPartOfPrefabInstance(root))
                PrefabUtility.UnpackPrefabInstance(root, PrefabUnpackMode.Completely, InteractionMode.AutomatedAction);
            var level = root.GetComponent<LevelData>();
            if (level == null)
                level = root.GetComponentInChildren<LevelData>(true);
            if (level == null) throw new InvalidOperationException("The copied prefab has no compiled source LevelData component.");
            var retainedFields = new HashSet<string>(Regex.Matches(LunaScriptSanitizer.Mask(generatedScript),
                @"(?m)^[ \t]*(?:(?:public|private|protected|internal|static|readonly)\s+)*[\w.<>,\[\]?]+\s+(\w+)\s*(?:=[^;\r\n]*)?;")
                .Cast<Match>().Select(m => m.Groups[1].Value));

            if (level != null && level.ToolIcons != null && level.ToolIcons.Count > 0)
            {
                var sliced = new List<Sprite>();
                for (int i = 0; i < orderedKeep.Count; i++)
                {
                    int idx = orderedKeep[i] - 1;
                    if (idx >= 0 && idx < level.ToolIcons.Count && level.ToolIcons[idx] != null)
                        sliced.Add(level.ToolIcons[idx]);
                }

                if (sliced.Count > 0)
                {
                    log.Add("ToolIcons " + level.ToolIcons.Count + " → " + sliced.Count + " (selected steps).");
                    level.ToolIcons = sliced;
                }
            }

            var keepObjects = new HashSet<int>(keep);
            int first = orderedKeep[0];
            int lastKept = orderedKeep[orderedKeep.Count - 1];
            for (int s = 1; s < first; s++)
                keepObjects.Add(s);

            var protectedObjects = level.GetType().GetFields(BindingFlags.Public | BindingFlags.NonPublic | BindingFlags.Instance)
                .Where(f => retainedFields.Contains(f.Name)).Select(f => ResolveFieldGameObject(f, level)).Where(go => go != null && go != root).ToList();
            int removed = DestroyUnusedStepObjects(root, keepObjects, lastKept, log, protectedObjects);
            removed += DestroyExtraLayerObjects(root, lastKept, log, protectedObjects);
            removed += DestroyFieldReferencedObjects(root, level, unusedObjectPaths, log, retainedFields);
            // Only Exclude cuts the Fix-It art. Outer needs the button itself, and the
            // inner level's own objects match the same markers — deleting there guts the level.
            if (mode == InnerMode.Exclude)
                removed += DestroyInnerLevelObjects(root, log);
            removed += DestroyUnreferencedScratchCards(root, keepObjects, log);
            removed += DestroyRetiredStepObjects(root, level, generatedScript, first, log);
            int broken = CleanupBrokenPlayableRefs(root, log);
            broken += NullDanglingReferences(root);
            FixMaskRangesForLuna(root, log);
            GiveMeshRenderersAMaterial(root, log);
            // Luna can't read texture pixels at runtime; the chalk's outline pixels are baked for it.
            foreach (var chalk in root.GetComponentsInChildren<CG_ChalkTrace>(true))
                if (chalk.BakeDrawnPixels()) log.Add("  - baked outline pixels of chalk '" + chalk.name + "' for Luna");

            if (level != null)
            {
                if (level.AllDrags != null)
                    level.AllDrags = level.AllDrags.Where(d => d != null).ToArray();
                if (level.AllSources != null)
                    level.AllSources = level.AllSources.Where(s => s != null).ToArray();
                if (level.AllScratches != null)
                    level.AllScratches = level.AllScratches.Where(s => s != null).ToArray();
                if (level.disableOnLevelComplete != null)
                    level.disableOnLevelComplete = level.disableOnLevelComplete.Where(g => g != null).ToArray();
            }

            log.Add("Unused step objects deleted: " + removed + ", broken refs cleaned: " + broken);
            PrefabUtility.SaveAsPrefabAsset(root, prefabPath);
        }
        finally
        {
            PrefabUtility.UnloadPrefabContents(root);
        }
    }

    // Every generated playable gets a PlayableCTA on its root so CTA behaviour stays
    // editable in the Inspector instead of being baked in at build time. The component
    // is fully standalone — it has no reference to any gameplay script — so nothing here
    // needs wiring up; the creative decides the trigger in the Inspector afterwards.
    static void AttachCtaComponent(string prefabPath, List<string> log)
    {
        var root = PrefabUtility.LoadPrefabContents(prefabPath);
        try
        {
            var cta = root.GetComponent<PlayableCTA>();
            if (cta == null) cta = root.AddComponent<PlayableCTA>();
            cta.trigger = PlayableCTA.Trigger.Manual;

            log.Add("PlayableCTA uses Manual trigger; completing the final selected step ends the playable. No tease step is built.");

            if (root.GetComponent<PlayableFadeCoverSettings>() == null)
                root.AddComponent<PlayableFadeCoverSettings>();

            log.Add("PlayableFadeCoverSettings attached to root — tune revealDelay/revealDuration " +
                    "in the Inspector if the ForceComplete fade-cover isn't hiding a step's entrance tween.");

            PrefabUtility.SaveAsPrefabAsset(root, prefabPath);
        }
        finally
        {
            PrefabUtility.UnloadPrefabContents(root);
        }
    }

    static string StripUnkeptTransitions(string text, HashSet<int> keep, List<string> log)
    {
        int n = 0;
        string next = Regex.Replace(
            text,
            @"UI_Manager\.instance\.FadeAnim\s*\([^)]*\)\s*;(?=[\s\S]{0,700}?PlayableInstall\.Go\(\))",
            m =>
            {
                n++;
                return "PlayableInstall.Go(); return;";
            });

        foreach (int step in Enumerable.Range(1, 20))
        {
            if (keep.Contains(step))
                continue;
            next = Regex.Replace(
                next,
                @"^[ \t]*CameraController\.Instance\.MoveCamera\(ZoomStep" + step + @"[^;]*;\s*\r?\n",
                "",
                RegexOptions.Multiline);
        }

        if (n > 0)
            log.Add("Replaced " + n + " fade-to-next-step call(s) with install.");
        return next;
    }

    static string StripUnusedStepScript(string text, HashSet<int> keep, int first, int last, bool keepFixGate, List<string> log)
    {
        string source = text;
        var keepScript = new HashSet<int>(keep);
        for (int s = 1; s < first; s++)
            keepScript.Add(s);

        int maxStep = 0;
        foreach (Match m in Regex.Matches(text, @"\bStartStep(\d+)(?!\w)"))
            maxStep = Math.Max(maxStep, int.Parse(m.Groups[1].Value));
        foreach (Match m in Regex.Matches(text, @"#region\s+[^\r\n]*\bSTEP\s*(\d+)", RegexOptions.IgnoreCase))
            maxStep = Math.Max(maxStep, int.Parse(m.Groups[1].Value));
        foreach (Match m in Regex.Matches(text, @"\[Header\(""[^""]*STEP\s*(\d+)", RegexOptions.IgnoreCase))
            maxStep = Math.Max(maxStep, int.Parse(m.Groups[1].Value));

        for (int step = maxStep; step >= 1; step--)
        {
            if (keepScript.Contains(step))
                continue;
            text = RemoveStepRegion(text, step);
            text = RemoveStepHeaderBlock(text, step, keepFixGate);
            log.Add("Script removed step " + step + " region + fields.");
        }

        text = StripRemovedHelperCalls(source, text, log, true);
        text = RestoreSharedStepFields(source, text, keepScript, maxStep, log);

        if (last <= 20)
        {
            int maxView = ViewIndexForStep(last + 1);
            for (int v = maxView + 1; v <= 6; v++)
            {
                if (Regex.Matches(LunaScriptSanitizer.Mask(text), @"\bView" + v + @"\b").Count > 1)
                    continue;
                text = Regex.Replace(
                    text,
                    @"^\s*public\s+GameObject\s+View" + v + @"\s*;\s*\r?\n",
                    string.Empty,
                    RegexOptions.Multiline);
                text = Regex.Replace(
                    text,
                    @"^[ \t]*View" + v + @"\.SetActive\s*\([^;]*;\s*\r?\n",
                    string.Empty,
                    RegexOptions.Multiline);
            }
        }

        return text;
    }

    static string RemoveStepRegion(string text, int step)
    {
        var regionRx = new Regex(
            @"#region\s+[^\r\n]*\bSTEP\s*" + step + @"(?!\d)[^\r\n]*\r?\n.*?#endregion\s*(?=\r?\n|$)",
            RegexOptions.IgnoreCase | RegexOptions.Singleline);
        return regionRx.Replace(text, string.Empty);
    }

    static string RemoveStepHeaderBlock(string text, int step, bool keepFixGate)
    {
        int start, end;
        if (!TryGetStepHeaderRange(text, step, out start, out end, keepFixGate))
            return text;
        return text.Remove(start, end - start);
    }

    static string GetStepHeaderBlock(string text, int step)
    {
        int start, end;
        if (!TryGetStepHeaderRange(text, step, out start, out end))
            return "";
        return text.Substring(start, end - start);
    }

    static bool TryGetStepHeaderRange(string text, int step, out int start, out int end)
    {
        return TryGetStepHeaderRange(text, step, out start, out end, false);
    }

    /// <summary>
    /// A step's field block runs to the next STEP header or to Start(). The Fix-It gate's own
    /// [Header] sits in that gap on some levels, so when the build keeps the Fix-It button the
    /// range has to stop there too -- otherwise the last dropped step takes the gate's fields
    /// (fixItPrompt and friends) down with it and the generated script won't compile.
    /// </summary>
    static bool TryGetStepHeaderRange(string text, int step, out int start, out int end, bool keepFixGate)
    {
        start = 0;
        end = 0;
        var startMatch = Regex.Match(
            text,
            @"(\[Space\(\)\]\s*)*\[Header\(""[^""]*STEP\s*" + step + @"(?!\d)[^""]*""\)\]");
        if (!startMatch.Success)
            return false;

        start = startMatch.Index;
        string rest = text.Substring(start + startMatch.Length);
        var next = Regex.Match(rest, @"\[Header\(""[^""]*STEP\s*(?!" + step + @"(?!\d))(\d+)");
        var startMethod = Regex.Match(rest, @"\bIEnumerator\s+Start\s*\(");

        int relEnd = rest.Length;
        if (next.Success)
            relEnd = Math.Min(relEnd, next.Index);
        if (startMethod.Success)
            relEnd = Math.Min(relEnd, startMethod.Index);

        if (keepFixGate)
        {
            var gate = Regex.Match(rest, GateHeaderPattern, RegexOptions.IgnoreCase);
            if (gate.Success)
                relEnd = Math.Min(relEnd, gate.Index);
        }

        end = start + startMatch.Length + relEnd;
        return true;
    }

    static int DestroyUnusedStepObjects(GameObject root, HashSet<int> keep, int lastKept, List<string> log, List<GameObject> protectedObjects)
    {
        var toDestroy = new List<GameObject>();
        var seen = new HashSet<int>();

        foreach (var t in root.GetComponentsInChildren<Transform>(true))
        {
            if (t == null || t.gameObject == root)
                continue;

            if (IsUnusedView(t.name, keep, lastKept) ||
                IsRemovableStepObject(t.name, keep, out _))
            {
                if (ContainsKeptStepChild(t, keep) || protectedObjects.Any(p => p != null && (p.transform == t || p.transform.IsChildOf(t))))
                    continue;
                int id = t.gameObject.GetInstanceID();
                if (!seen.Add(id))
                    continue;
                toDestroy.Add(t.gameObject);
            }
        }

        int removed = 0;
        foreach (var go in toDestroy.OrderByDescending(g => GetDepth(g.transform)))
        {
            if (go == null)
                continue;
            log.Add("  - deleted '" + go.name + "'");
            UnityEngine.Object.DestroyImmediate(go);
            removed++;
        }

        return removed;
    }

    static int DestroyExtraLayerObjects(GameObject root, int lastKept, List<string> log, List<GameObject> protectedObjects)
    {
        int until = lastKept + 1;
        var names = new List<string>();
        if (until < 4)
        {
            names.Add("foamLight_E");
            names.Add("foam2_E");
            names.Add("foamCol");
        }

        if (until < 6)
        {
            names.Add("wetHairs_E");
            names.Add("hairDryFade");
        }

        if (until < 7)
        {
            names.Add("dryHairs_E");
            names.Add("dryCombed_BG");
        }

        if (names.Count == 0)
            return 0;

        var set = new HashSet<string>(names, StringComparer.OrdinalIgnoreCase);
        var toDestroy = new List<GameObject>();
        foreach (var t in root.GetComponentsInChildren<Transform>(true))
        {
            if (t == null || t.gameObject == root)
                continue;
            if (set.Contains(t.name) && !protectedObjects.Any(p => p != null && (p.transform == t || p.transform.IsChildOf(t))))
                toDestroy.Add(t.gameObject);
        }

        int removed = 0;
        foreach (var go in toDestroy)
        {
            if (go == null)
                continue;
            log.Add("  - deleted extra layer '" + go.name + "'");
            UnityEngine.Object.DestroyImmediate(go);
            removed++;
        }

        return removed;
    }

    /// <summary>
    /// DestroyUnusedStepObjects/DestroyExtraLayerObjects only catch objects whose GameObject NAME
    /// follows a recognized numbered convention (ToolN, ViewN, Indication_N, ...) — several levels
    /// (Level1_Cloth among them: ToolStep5, ribbonFinal, handIndication5, ...) don't use any such
    /// convention at all, so those objects silently survive every build regardless of step range.
    /// This is a second, naming-independent pass: <paramref name="unusedObjectPaths"/> are
    /// transform paths (root-relative, "/"-joined) for objects whose OWN field was resolved on the
    /// SOURCE prefab back in Build() — see ResolveFieldPathsOnSource — before RewriteScript
    /// stripped those fields (and the ability to find them by name) out of the generated class.
    /// Each is destroyed here provided nothing still-referenced (a field whose step IS kept, read
    /// live off the destination's own — already trimmed — component) points at that same object or
    /// lives inside it.
    /// </summary>
    static int DestroyFieldReferencedObjects(GameObject root, LevelData level, List<string> unusedObjectPaths, List<string> log, HashSet<string> retainedFields)
    {
        if (level == null || unusedObjectPaths == null || unusedObjectPaths.Count == 0)
            return 0;

        var protectedGOs = new List<GameObject>();
        foreach (var f in level.GetType().GetFields(BindingFlags.Public | BindingFlags.NonPublic | BindingFlags.Instance))
        {
            if (!retainedFields.Contains(f.Name)) continue;
            GameObject go = ResolveFieldGameObject(f, level);
            if (go != null && go != root)
                protectedGOs.Add(go);
        }

        int removed = 0;
        var destroyed = new HashSet<int>();
        foreach (var path in unusedObjectPaths)
        {
            var t = root.transform.Find(path);
            if (t == null)
                continue;

            GameObject go = t.gameObject;
            if (!destroyed.Add(go.GetInstanceID()))
                continue;

            bool protect = protectedGOs.Any(p => p == go || (p != null && p.transform.IsChildOf(go.transform)));
            if (protect)
                continue;

            log.Add("  - deleted '" + go.name + "' (beyond kept step range)");
            UnityEngine.Object.DestroyImmediate(go);
            removed++;
        }

        return removed;
    }

    /// <summary>
    /// Resolves each field named in <paramref name="unusedFields"/> to its serialized
    /// GameObject/Component value on the SOURCE prefab's own LevelData component — called from
    /// Build() before RewriteScript runs, while the script still declares those fields — and
    /// returns each as a root-relative transform path so DestroyFieldReferencedObjects can find
    /// the equivalent object on the (separately copied) destination prefab by hierarchy position
    /// instead of by field name.
    /// </summary>
    static List<string> ResolveFieldPathsOnSource(string sourcePrefabPath, HashSet<string> unusedFields)
    {
        var paths = new List<string>();
        if (unusedFields == null || unusedFields.Count == 0)
            return paths;

        var root = PrefabUtility.LoadPrefabContents(sourcePrefabPath);
        try
        {
            var level = root.GetComponent<LevelData>();
            if (level == null)
                level = root.GetComponentInChildren<LevelData>(true);
            if (level == null)
                return paths;

            foreach (var f in level.GetType().GetFields(BindingFlags.Public | BindingFlags.NonPublic | BindingFlags.Instance))
            {
                if (!unusedFields.Contains(f.Name))
                    continue;
                GameObject go = ResolveFieldGameObject(f, level);
                if (go == null || go == root)
                    continue;
                string path = AnimationUtility.CalculateTransformPath(go.transform, root.transform);
                if (!string.IsNullOrEmpty(path))
                    paths.Add(path);
            }
        }
        finally
        {
            PrefabUtility.UnloadPrefabContents(root);
        }

        return paths;
    }

    static GameObject ResolveFieldGameObject(FieldInfo f, object instance)
    {
        object value;
        try { value = f.GetValue(instance); }
        catch { return null; }

        if (value is GameObject go)
            return go;
        if (value is Component c && c != null)
            return c.gameObject;
        return null;
    }

    /// <summary>
    /// Ported from CleanAsmrPlayables' StripClone: an object is kept intact or removed completely, never left in the
    /// prefab just switched off (Luna ships everything a prefab references, hidden or not). A level field whose only
    /// uses left in the generated script are null-guarded "X.SetActive(false)" lines (RetireSkippedSteps), or none at
    /// all, has its object deleted — unless code still uses something inside it, code walks the children of a used
    /// object around it, it is scenery visible when the playable opens, or a surviving component references it.
    /// </summary>
    static int DestroyRetiredStepObjects(GameObject root, LevelData level, string generatedScript, int first, List<string> log)
    {
        if (level == null || string.IsNullOrEmpty(generatedScript)) return 0;
        string mask = LunaScriptSanitizer.Mask(generatedScript);
        // RetireSkippedSteps' guarded ForceComplete lines: hiding X, or finishing the scratch cards of X's tool.
        const string Guarded = @"\bif \((\w+) != null\) (?:\1(?:\.gameObject)?\.SetActive\(false\)|\w*Scratch\w*\(\1\));";
        var hiddenOnly = new HashSet<string>(Regex.Matches(mask, Guarded).Cast<Match>().Select(m => m.Groups[1].Value));
        string uses = Regex.Replace(mask, Guarded, " ");
        bool Under(Transform t, Transform ancestor) => t == ancestor || t.IsChildOf(ancestor);
        string RootPath(Transform t)
        {
            var parts = new List<string>();
            for (var c = t; c != null && c != root.transform; c = c.parent) parts.Insert(0, c.name);
            return string.Join("/", parts);
        }
        List<Transform> Targets(FieldInfo f)
        {
            var list = new List<Transform>();
            void Add(object v)
            {
                if (v is GameObject go && go != null) list.Add(go.transform);
                else if (v is Component c && c != null) list.Add(c.transform);
            }
            object value = f.GetValue(level);
            if (value is System.Collections.IEnumerable items && !(value is string) && !(value is Transform)) foreach (var item in items) Add(item);
            else Add(value);
            return list.Where(t => t != root.transform && t.IsChildOf(root.transform)).Distinct().ToList();
        }

        // Fields the generated script declares; bookkeeping on LevelData itself (AllDrags, ...) is compacted, not used.
        var fields = level.GetType().GetFields(BindingFlags.Public | BindingFlags.NonPublic | BindingFlags.Instance)
            .Where(f => f.DeclaringType != typeof(LevelData) && Regex.IsMatch(mask, @"(?<![\w.])" + Regex.Escape(f.Name) + @"\s*(?:=[^;]*)?;"))
            .ToList();
        int UseCount(string name) => Regex.Matches(uses, @"(?<![\w.])" + Regex.Escape(name) + @"\b").Count - 1; // minus the declaration
        var dead = fields.Where(f => UseCount(f.Name) <= 0).ToList();
        var live = fields.Except(dead).ToList();
        var liveTargets = live.SelectMany(Targets).ToList();
        // Code that walks a used object's children (GetChild / Find / ...InChildren / childCount) needs all of them.
        var walked = live.Where(f => Regex.IsMatch(mask, @"(?<![\w.])" + Regex.Escape(f.Name) + @"\b[^;\n]*(GetChild|\.Find\s*\(|InChildren|childCount)"))
            .SelectMany(Targets).ToList();

        var roots = new Dictionary<Transform, string>();
        foreach (var f in dead)
            foreach (var t in Targets(f))
            {
                if (roots.ContainsKey(t)) continue;
                string keepReason =
                    liveTargets.FirstOrDefault(l => Under(l, t)) is Transform l1 ? "code still uses '" + RootPath(l1) + "'" :
                    walked.FirstOrDefault(w => Under(t, w)) is Transform w1 ? "code walks the children of '" + RootPath(w1) + "'" :
                    // Visible scenery at open stays; a hidden object or a tool (dragged/slid on screen by its step) goes.
                    !hiddenOnly.Contains(f.Name) && t.gameObject.activeInHierarchy && t.GetComponentInChildren<BasicDrag>(true) == null &&
                    t.GetComponentsInChildren<Renderer>(true).Any(r => !(r is ParticleSystemRenderer)) ? "visible when the playable opens" : null;
                if (keepReason != null) log.Add("  - kept '" + RootPath(t) + "' (" + f.Name + "): " + keepReason);
                else roots[t] = f.Name;
            }

        // Scratch cards driven by a skipped step's tool were finished before the playable opens: an Erase card (dirt) is
        // scratched off, so it goes; a Restore card (paint) is fully revealed, so it is baked into a plain sprite below.
        // Only steps BEFORE the start count - a later step's card is still unscratched at open.
        var finishedCards = new HashSet<ScratchCardManager>();
        foreach (var f in fields.Where(f => StepOfField(generatedScript, mask, f.Name) is int s && s < first))
            foreach (var t in Targets(f))
            {
                foreach (var progress in t.GetComponentsInChildren<BD_Progress>(true))
                    if (progress.AllScratches != null)
                        foreach (var s in progress.AllScratches)
                            if (s != null && s.ScratchManager != null) finishedCards.Add(s.ScratchManager);
                foreach (var card in t.GetComponentsInChildren<ScratchCardManager>(true)) finishedCards.Add(card);
            }
        var bakeCards = new List<ScratchCardManager>();
        foreach (var card in finishedCards)
        {
            if (card.Mode != ScratchCard.ScratchMode.Erase) { bakeCards.Add(card); continue; }
            if (liveTargets.Any(l => Under(l, card.transform))) { log.Add("  - kept finished scratch card '" + RootPath(card.transform) + "': code still uses it"); continue; }
            if (!roots.ContainsKey(card.transform)) roots[card.transform] = "scratch card already scratched off in a skipped step";
        }

        // Anything a surviving component references must survive too (fixpoint). The level component is left out:
        // its used fields are liveTargets already, and its dead fields are what is being removed.
        var refs = new List<(Transform from, Transform to, string what)>();
        foreach (var component in root.GetComponentsInChildren<Component>(true))
        {
            if (component == null || component is Transform || component == level) continue;
            var it = new SerializedObject(component).GetIterator();
            while (it.Next(true))
            {
                if (it.propertyType != SerializedPropertyType.ObjectReference) continue;
                // A scratch card's ToolTip only matters while it is scratched; it doesn't keep a removed tool alive.
                if (component is ScratchCard && it.propertyPath == "ToolTip") continue;
                var to = it.objectReferenceValue is GameObject g ? g.transform : (it.objectReferenceValue as Component)?.transform;
                if (to != null && to.IsChildOf(root.transform)) refs.Add((component.transform, to, component.GetType().Name + "." + it.propertyPath));
            }
        }
        // An object that exists only to serve removed objects (a follower aimed at a removed tool, a "Play Sfx On Col"
        // trigger for it) goes with them instead of keeping them alive: no visuals, no cards, nothing code needs, and
        // every reference it makes to a level object points at something being removed.
        var levelObjects = fields.SelectMany(Targets).ToList();
        // A satellite that something else turned out to need is never offered again (else add/block would cycle forever).
        var refusedSatellites = new HashSet<Transform>();
        bool IsSatellite(Transform s)
        {
            if (s == root.transform || refusedSatellites.Contains(s) || liveTargets.Any(l => Under(l, s) || Under(s, l)) || walked.Any(w => Under(s, w))) return false;
            if (s.GetComponentsInChildren<Renderer>(true).Any(r => !(r is ParticleSystemRenderer)) || s.GetComponentsInChildren<UnityEngine.UI.Graphic>(true).Length > 0) return false;
            if (s.GetComponentsInChildren<ScratchCardManager>(true).Length > 0) return false;
            var outgoing = refs.Where(x => Under(x.from, s) && !Under(x.to, s) && levelObjects.Any(o => Under(x.to, o) && !Under(s, o))).ToList();
            return outgoing.Count > 0 && outgoing.All(x => roots.Keys.Any(r => Under(x.to, r)));
        }
        for (bool changed = true; changed;)
        {
            changed = false;
            foreach (var (from, to, what) in refs)
            {
                if (roots.Keys.Any(r => Under(from, r))) continue;
                if (!roots.Keys.Any(r => Under(to, r))) continue;
                Transform satellite = null;
                for (var s = from; s != null && s != root.transform && IsSatellite(s); s = s.parent) satellite = s;
                if (satellite != null)
                {
                    roots[satellite] = "only serves removed '" + RootPath(to) + "'";
                    changed = true;
                    break; // roots changed under the enumeration of its keys below
                }
                foreach (var blocked in roots.Keys.Where(r => Under(to, r)).ToList())
                {
                    log.Add("  - kept '" + RootPath(blocked) + "' (" + roots[blocked] + "): " + what + " on '" + RootPath(from) + "' uses it");
                    if (roots[blocked].StartsWith("only serves")) refusedSatellites.Add(blocked);
                    roots.Remove(blocked);
                    changed = true;
                }
            }
        }

        // Finished Restore cards become plain sprites of their revealed result, when nothing that stays drives them.
        var spriteMaterial = AssetDatabase.GetBuiltinExtraResource<Material>("Sprites-Default.mat");
        foreach (var card in bakeCards)
        {
            if (card == null || roots.Keys.Any(r => Under(card.transform, r))) continue;
            var parts = new List<Transform> { card.transform };
            if (card.Card != null) parts.Add(card.Card.transform);
            if (card.Progress != null) parts.Add(card.Progress.transform);
            var user = refs.FirstOrDefault(x => parts.Any(p => Under(x.to, p)) && !parts.Any(p => Under(x.from, p)) && !roots.Keys.Any(r => Under(x.from, r)));
            var sprite = card.SpriteCard != null ? card.SpriteCard.GetComponent<SpriteRenderer>() : null;
            if (user.from != null || card.RenderType != ScratchCardManager.ScratchCardRenderType.SpriteRenderer || sprite == null || card.ScratchSurfaceSprite == null)
            {
                log.Add("  - kept finished scratch card '" + RootPath(card.transform) + "' working" + (user.from != null ? ": " + user.what + " on '" + RootPath(user.from) + "' uses it" : " (can't bake it into a sprite)"));
                continue;
            }
            sprite.sprite = card.ScratchSurfaceSprite;
            if (spriteMaterial != null) sprite.sharedMaterial = spriteMaterial;
            var color = sprite.color; color.a = 1f; sprite.color = color;
            card.SpriteCard.SetActive(true);
            if (card.Progress != null) UnityEngine.Object.DestroyImmediate(card.Progress);
            if (card.Card != null) UnityEngine.Object.DestroyImmediate(card.Card);
            log.Add("  - baked finished scratch card '" + RootPath(sprite.transform) + "' into a plain sprite");
            UnityEngine.Object.DestroyImmediate(card);
        }

        int removed = 0;
        foreach (var t in roots.Keys.Where(t => !roots.Keys.Any(o => o != t && t.IsChildOf(o))).ToList()) // top-most only
        {
            removed += t.GetComponentsInChildren<Transform>(true).Length;
            string why = roots[t].StartsWith("scratch card") || roots[t].StartsWith("only serves") ? roots[t] : roots[t] + " is only hidden or unused by the playable";
            log.Add("  - removed '" + RootPath(t) + "' (" + why + ")");
            UnityEngine.Object.DestroyImmediate(t.gameObject);
        }
        return removed;
    }

    /// <summary>The N of the "[Header(... STEP N ...)]" a field is declared under, or null.</summary>
    static int? StepOfField(string script, string mask, string field)
    {
        var decl = Regex.Match(mask, @"(?m)^[ \t]*(?:(?:public|private|protected|internal|readonly)\s+)*[\w.<>,\[\]?]+\s+" + Regex.Escape(field) + @"\s*(?:=[^;\r\n]*)?;");
        if (!decl.Success) return null;
        var header = Regex.Matches(script.Substring(0, decl.Index), @"\[Header\(""[^""]*\bSTEP\s*(\d+)", RegexOptions.IgnoreCase).Cast<Match>().LastOrDefault();
        return header != null ? int.Parse(header.Groups[1].Value) : (int?)null;
    }

    /// <summary>
    /// Luna draws a custom-range SpriteMask as two stencil passes - "open" at its back order, "close" at its front
    /// order - and a masked sprite at exactly the front order ties with the close pass and draws after it, i.e.
    /// invisible (Dress step 2's unrolling fabric). Unity counts the front order as inside the range, so moving the
    /// front up past the masked sprites shows the same set in both. Only masks with such a tie change, so it is idempotent.
    /// </summary>
    internal static int FixMaskRangesForLuna(GameObject root, List<string> log)
    {
        int fixedCount = 0;
        var masked = root.GetComponentsInChildren<SpriteRenderer>(true).Where(r => r.maskInteraction != SpriteMaskInteraction.None).ToList();
        foreach (var mask in root.GetComponentsInChildren<SpriteMask>(true))
        {
            if (!mask.isCustomRangeActive) continue;
            bool tie = masked.Any(r => r.sortingLayerID == mask.frontSortingLayerID && r.sortingOrder == mask.frontSortingOrder);
            if (!tie) continue;
            mask.frontSortingOrder += 1;
            fixedCount++;
            log?.Add("  - mask '" + mask.name + "': front order " + (mask.frontSortingOrder - 1) + " → " + mask.frontSortingOrder + " (Luna hides sprites at the front order)");
        }
        return fixedCount;
    }

    /// <summary>
    /// A MeshRenderer whose material a script builds at runtime (CG_ZipperBag's "Bag Open") is saved with none, which
    /// Luna draws with its InternalErrorShader fallback and - since nothing references Sprites-Default then - may not
    /// ship the shader the script asks for. Giving it Sprites-Default fixes both; the script still replaces it.
    /// </summary>
    internal static int GiveMeshRenderersAMaterial(GameObject root, List<string> log)
    {
        var spriteDefault = AssetDatabase.GetBuiltinExtraResource<Material>("Sprites-Default.mat");
        int count = 0;
        foreach (var mr in root.GetComponentsInChildren<MeshRenderer>(true))
        {
            if (mr.sharedMaterials.Length > 0 && mr.sharedMaterials.All(m => m != null)) continue;
            mr.sharedMaterial = spriteDefault;
            count++;
            log?.Add("  - '" + mr.name + "' had no material: Sprites-Default (Luna can't draw a renderer without one)");
        }
        return count;
    }

    /// <summary>References to destroyed objects become real nulls, so nothing in the saved prefab dangles.</summary>
    static int NullDanglingReferences(GameObject root)
    {
        int cleaned = 0;
        foreach (var component in root.GetComponentsInChildren<Component>(true))
        {
            if (component == null || component is Transform) continue;
            var so = new SerializedObject(component);
            var it = so.GetIterator();
            while (it.Next(true))
            {
                if (it.propertyType != SerializedPropertyType.ObjectReference || it.objectReferenceValue != null || it.objectReferenceInstanceIDValue == 0) continue;
                it.objectReferenceValue = null;
                cleaned++;
            }
            so.ApplyModifiedPropertiesWithoutUndo();
        }
        return cleaned;
    }

    static int DestroyInnerLevelObjects(GameObject root, List<string> log)
    {
        string[] markers =
        {
            "FixIt", "fixIt", "Fix_It", "fixItPrompt",
            "StoveFixItBtn", "machineDamage", "GreenBtnCol_Damaged",
            "Tool 4b", "ToolStep5Rev", "showerFixReverse", "showerDragDamage",
            "ShowerDamaged", "OpenShowerIndication", "CloseShowerIndication",
            "ShowerInner_dirty", "ShowerBackDMG", "ShowerFrontDMG"
        };

        var toDestroy = new List<GameObject>();
        var seen = new HashSet<int>();
        foreach (var t in root.GetComponentsInChildren<Transform>(true))
        {
            if (t == null || t.gameObject == root)
                continue;
            bool hit = false;
            for (int i = 0; i < markers.Length; i++)
            {
                if (t.name.IndexOf(markers[i], StringComparison.OrdinalIgnoreCase) >= 0)
                {
                    hit = true;
                    break;
                }
            }

            if (!hit)
                continue;
            int id = t.gameObject.GetInstanceID();
            if (!seen.Add(id))
                continue;
            toDestroy.Add(t.gameObject);
        }

        int removed = 0;
        foreach (var go in toDestroy.OrderByDescending(g => GetDepth(g.transform)))
        {
            if (go == null)
                continue;
            log.Add("  - deleted inner-level '" + go.name + "'");
            UnityEngine.Object.DestroyImmediate(go);
            removed++;
        }

        return removed;
    }

    static int DestroyUnreferencedScratchCards(GameObject root, HashSet<int> keep, List<string> log)
    {
        var used = new HashSet<int>();
        var progs = root.GetComponentsInChildren<BD_Progress>(true);
        for (int i = 0; i < progs.Length; i++)
        {
            var prog = progs[i];
            if (prog == null || prog.AllScratches == null)
                continue;
            for (int s = 0; s < prog.AllScratches.Length; s++)
            {
                var d = prog.AllScratches[s];
                if (d != null && d.ScratchManager != null)
                    used.Add(d.ScratchManager.GetInstanceID());
            }
        }

        var cards = root.GetComponentsInChildren<ScratchCardManager>(true);
        int removed = 0;
        for (int i = 0; i < cards.Length; i++)
        {
            var card = cards[i];
            if (card == null)
                continue;
            if (used.Contains(card.GetInstanceID()))
                continue;
            if (ContainsKeptStepChild(card.transform, keep))
                continue;
            log.Add("  - deleted extra scratch '" + card.gameObject.name + "'");
            UnityEngine.Object.DestroyImmediate(card.gameObject);
            removed++;
        }

        return removed;
    }

    static bool IsUnusedView(string name, HashSet<int> keep, int lastKept)
    {
        var m = Regex.Match(name, @"^View\s*(\d+)$", RegexOptions.IgnoreCase);
        if (!m.Success)
            return false;
        int view = int.Parse(m.Groups[1].Value);
        if (view <= 1)
            return false;
        int maxView = ViewIndexForStep(lastKept + 1);
        return view > maxView;
    }

    static bool IsRemovableStepObject(string name, HashSet<int> keep, out int step)
    {
        step = 0;
        if (string.IsNullOrEmpty(name))
            return false;

        var m = Regex.Match(name, @"^Tool\s*_?(\d+)", RegexOptions.IgnoreCase);
        if (!m.Success)
            m = Regex.Match(name, @"^Tool(\d+)", RegexOptions.IgnoreCase);
        if (!m.Success)
            m = Regex.Match(name, @"(?:Indications?_|HandAnim|Hand\s*Anim|HandTap|Hand_)\s*(\d+)", RegexOptions.IgnoreCase);
        if (!m.Success)
            m = Regex.Match(name, @"^Step\s*(\d+)\s*Col", RegexOptions.IgnoreCase);
        if (!m.Success)
            m = Regex.Match(name, @"^(?:Hairs|PolishHolder|NailsHolder|Kettle|Dial|WetHand)[_ ]+(\d+)\b", RegexOptions.IgnoreCase);
        if (!m.Success)
            return false;

        step = int.Parse(m.Groups[1].Value);
        return !keep.Contains(step);
    }

    static bool ContainsKeptStepChild(Transform t, HashSet<int> keep)
    {
        foreach (var c in t.GetComponentsInChildren<Transform>(true))
        {
            if (c == t)
                continue;
            var m = Regex.Match(c.name, @"^(?:ToolStep|Tool\s*_?|Tool)(\d+)", RegexOptions.IgnoreCase);
            if (m.Success && keep.Contains(int.Parse(m.Groups[1].Value)))
                return true;
        }

        return false;
    }

    static int GetDepth(Transform t)
    {
        int d = 0;
        while (t != null)
        {
            d++;
            t = t.parent;
        }

        return d;
    }

    static int CleanupBrokenPlayableRefs(GameObject root, List<string> log)
    {
        int cleaned = 0;
        var pipes = root.GetComponentsInChildren<StaticFixedPipe>(true);
        for (int i = 0; i < pipes.Length; i++)
        {
            var pipe = pipes[i];
            if (pipe == null)
                continue;
            if (pipe.toolTransform != null && pipe.lineRenderer != null)
                continue;
            log.Add("  - deleted broken pipe '" + pipe.gameObject.name + "'");
            UnityEngine.Object.DestroyImmediate(pipe.gameObject);
            cleaned++;
        }

        var progs = root.GetComponentsInChildren<BD_Progress>(true);
        for (int i = 0; i < progs.Length; i++)
        {
            var prog = progs[i];
            if (prog == null || prog.AllScratches == null)
                continue;
            int before = prog.AllScratches.Length;
            prog.AllScratches = System.Array.FindAll(
                prog.AllScratches,
                d => d != null && d.ScratchManager != null && d.ScratchManager.Card != null);
            if (prog.AllScratches.Length != before)
            {
                log.Add("  - compacted BD_Progress scratches on '" + prog.gameObject.name + "' " + before + "→" + prog.AllScratches.Length);
                cleaned++;
            }
        }

        return cleaned;
    }

    static int FindMatchingBrace(string text, int openIndex)
    {
        return FindMatchingPair(text, openIndex, '{', '}');
    }

    static int FindMatchingPair(string text, int openIndex, char openCh, char closeCh)
    {
        int depth = 0;
        bool inStr = false;
        bool inChar = false;
        bool lineComment = false;
        bool blockComment = false;

        for (int i = openIndex; i < text.Length; i++)
        {
            char c = text[i];
            char next = i + 1 < text.Length ? text[i + 1] : '\0';

            if (lineComment)
            {
                if (c == '\n')
                    lineComment = false;
                continue;
            }

            if (blockComment)
            {
                if (c == '*' && next == '/')
                {
                    blockComment = false;
                    i++;
                }
                continue;
            }

            if (inStr)
            {
                if (c == '\\')
                {
                    i++;
                    continue;
                }

                if (c == '"')
                    inStr = false;
                continue;
            }

            if (inChar)
            {
                if (c == '\\')
                {
                    i++;
                    continue;
                }

                if (c == '\'')
                    inChar = false;
                continue;
            }

            if (c == '/' && next == '/')
            {
                lineComment = true;
                i++;
                continue;
            }

            if (c == '/' && next == '*')
            {
                blockComment = true;
                i++;
                continue;
            }

            if (c == '"')
            {
                inStr = true;
                continue;
            }

            if (c == '\'')
            {
                inChar = true;
                continue;
            }

            if (c == openCh)
                depth++;
            else if (c == closeCh)
            {
                depth--;
                if (depth == 0)
                    return i;
            }
        }

        return -1;
    }

    static string ReadGuidFromMeta(string metaPath)
    {
        if (!File.Exists(metaPath))
            return null;
        foreach (var line in File.ReadLines(metaPath))
        {
            if (!line.StartsWith("guid:", StringComparison.Ordinal))
                continue;
            var m = Regex.Match(line, @"guid:\s*([a-f0-9]{32})");
            if (m.Success)
                return m.Groups[1].Value;
        }

        return null;
    }

    static string ToFull(string assetPath)
    {
        if (Path.IsPathRooted(assetPath))
            return assetPath;
        return Path.GetFullPath(Path.Combine(Directory.GetParent(Application.dataPath).FullName, assetPath));
    }
}
#endif
