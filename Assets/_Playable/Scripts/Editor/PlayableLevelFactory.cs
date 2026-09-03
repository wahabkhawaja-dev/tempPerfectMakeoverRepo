#if UNITY_EDITOR
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;
using System.Text.RegularExpressions;
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
    }

    /// <summary>How a build treats the level's inner Fix-It level.</summary>
    public enum InnerMode
    {
        /// <summary>Cut it out: gates flattened to "already fixed", hop methods and objects deleted.</summary>
        Exclude,

        /// <summary>This IS the outer level: keep the Fix-It button, hop into the inner level in-scene.</summary>
        Outer,

        /// <summary>This IS the inner level: its return-hop comes back to the outer level in-scene.</summary>
        Inner,

        /// <summary>
        /// Keep the Fix-It button exactly as the level ships it, but tapping it fires the store
        /// CTA instead of entering the inner level — so the inner level itself is never built.
        /// </summary>
        CtaOnFix
    }

    /// <summary>The [Header] a level puts above its Fix-It gate fields ("... FIX GATE ...").</summary>
    const string GateHeaderPattern = @"\[Header\(""[^""]*FIX[^""]*""\)\]";

    /// <summary>Modes where the Fix-It button and its damaged art stay in the playable.</summary>
    static bool KeepsFixItButton(InnerMode mode)
    {
        return mode == InnerMode.Outer || mode == InnerMode.CtaOnFix;
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

        /// <summary>Inspector fields the playable will dereference but nothing is assigned to.</summary>
        public List<string> UnassignedFields = new List<string>();
    }

    /// <summary>
    /// Original Resources levels, plus every playable already built into Assets/_Playable/Levels
    /// — so a full-step playable can itself be picked as the source for a further, smaller
    /// variation (Scan() only needs a LevelData + its script, which a built playable still has).
    /// </summary>
    public static string[] ListSourcePrefabs()
    {
        var guids = AssetDatabase.FindAssets("t:Prefab", new[] { LevelsRoot, PlayableLevels });
        var paths = new List<string>();
        for (int i = 0; i < guids.Length; i++)
        {
            string p = AssetDatabase.GUIDToAssetPath(guids[i]);
            if (p.EndsWith(".prefab", StringComparison.OrdinalIgnoreCase))
                paths.Add(p);
        }

        paths.Sort(StringComparer.OrdinalIgnoreCase);
        return paths.ToArray();
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

        string text = File.ReadAllText(ToFull(result.ScriptPath));
        var steps = new SortedSet<int>();
        foreach (Match m in Regex.Matches(text, @"\bStartStep(\d+)(?!\w)"))
            steps.Add(int.Parse(m.Groups[1].Value));
        foreach (Match m in Regex.Matches(text, @"#region\s+[^\r\n]*\bSTEP\s*(\d+)\b", RegexOptions.IgnoreCase))
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

        result.InnerPrefabPath = FindInnerPrefabPath(text);
        result.FixStep = FindFixStep(text);

        return result;
    }

    /// <summary>
    /// The Fix-It hop sets levelToPlay / partToPlay and reloads the scene; those two numbers
    /// ARE the inner level's prefab name (Level{level}_{part}), so the wizard never has to ask.
    /// </summary>
    static string FindInnerPrefabPath(string text)
    {
        var m = Regex.Match(
            text,
            @"levelToPlay\s*=\s*(\d+)\s*;[\s\S]{0,400}?partToPlay\s*=\s*(\d+)\s*;[\s\S]{0,800}?LoadScene");
        if (!m.Success)
            return null;

        string path = LevelsRoot + "/Level" + m.Groups[1].Value + "_" + m.Groups[2].Value + ".prefab";
        return File.Exists(ToFull(path)) ? path : null;
    }

    /// <summary>The step that shows the Fix-It button: its StartStepN() gates on Is...Fixed().</summary>
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

        try
        {
            if (keepSteps == null || keepSteps.Count == 0)
                throw new Exception("Kam az kam 1 step select karo.");

            var keep = new HashSet<int>(keepSteps.Where(s => s > 0));
            var ordered = keep.OrderBy(s => s).ToList();
            int first = ordered[0];
            int last = ordered[ordered.Count - 1];

            var scan = Scan(sourcePrefabPath);
            if (!string.IsNullOrEmpty(scan.Error))
                throw new Exception(scan.Error);

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
            string sourceText = File.ReadAllText(ToFull(scan.ScriptPath));
            string playableText = RewriteScript(sourceText, scan.ClassName, playableClass, keep, first, last, mode, scan.FixStep, log);

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

            TrimPrefab(destPrefab, ordered, mode, log);
            AssetDatabase.SaveAssets();

            AttachCtaComponent(destPrefab, log);

            result.UnassignedFields = FindUnassignedFields(destPrefab, playableText);
            if (result.UnassignedFields.Count > 0)
            {
                log.Add("UNASSIGNED (will NullReference when their step runs): " +
                        string.Join(", ", result.UnassignedFields.ToArray()) +
                        " — assign these on " + Path.GetFileName(sourcePrefabPath) + ", they are empty in the source level.");
            }

            EditorPrefs.SetString(LastPrefabPref, destPrefab);

            if (placeInScene)
                PlayableEditorMenu.SwapSceneLevel(destPrefab, innerBuiltPrefab);

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
            // A build that dies partway leaves the WORST possible artifact: the generated script
            // is already written and the copied prefab already rebound to it, but TrimPrefab threw
            // before saving, so that prefab is still the untrimmed original. Playing it looks like
            // a broken level — steps stall, tools take no input — rather than a failed build.
            // Delete it: a missing prefab is an obvious failure, a poisoned one is not.
            if (!string.IsNullOrEmpty(destPrefab) && File.Exists(ToFull(destPrefab)))
            {
                AssetDatabase.DeleteAsset(destPrefab);
                log.Add("Half-built prefab deleted: " + destPrefab);
            }

            result.Ok = false;
            result.Error = e.Message;
            result.Log = string.Join("\n", log);
            Debug.LogError("[Playable] Build failed: " + e);
            return result;
        }
    }

    static string RewriteScript(
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
        text = StripSaveSystem(text, log);
        text = RedirectLoadingManagerFades(text, log);
        text = Regex.Replace(text, @"(\r?\n){3,}", "\n\n");
        log.Add("Keeping steps [" + string.Join(",", keep.OrderBy(s => s)) + "], layers through step " + (last + 1) + ".");
        return text;
    }

    /// <summary>
    /// The opposite of ExcludeInnerLevels: the Fix-It button (and, in Outer mode, its inner
    /// level) stay in the playable exactly as the level ships them. Only the scene reloads have
    /// to go, since a playable is a single scene — Enter() hops into the inner level, Return()
    /// comes back, and CtaOnFix sends the tap to the store instead.
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
        if (mode == InnerMode.CtaOnFix)
            call = "PlayableCTA.FireNow();";
        else if (mode == InnerMode.Outer)
            call = "PlayableInnerLevel.Enter();";
        else
            call = "PlayableInnerLevel.Return();";

        // CtaOnFix ends the playable on the button, so the button has to stay on screen for
        // every further tap. Anything in the hop that dismissed the prompt has to go with the hop.
        return RewireInnerHops(text, call, mode == InnerMode.CtaOnFix, log);
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
            log.Add("Fix-It button KEPT — " + n + " hop(s) rewired to " + call +
                    (keepPromptVisible ? " (prompt stays on screen for re-taps)." : "."));
        else
            log.Add("Fix-It button KEPT, but no scene-reload hop found to rewire — check the level script.");

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

        // Coming back from the inner Fix-It level there is no stepsDone to resume from (the
        // scene never reloaded), so PlayableInnerLevel.Resuming stands in for it: boot the
        // Fix-It step through the very same case the original switch used for it.
        string resumeForce = null;
        string resumeInvoke = null;
        if (resumeStep > 0 && resumeStep != first)
            ResolveSwitchBoot(body, text, resumeStep, out resumeForce, out resumeInvoke);

        if (resumeInvoke != null)
        {
            boot.Append("        // PLAYABLE: back from the inner Fix-It level — boot straight into that step.").Append(nl);
            boot.Append("        if (PlayableInnerLevel.Resuming)").Append(nl);
            boot.Append("        {").Append(nl);
            boot.Append("            PlayableInnerLevel.Resuming = false;").Append(nl);
            // PlayableInnerLevel already faded to black for the swap; re-assert it so the
            // ForceComplete snap stays hidden, and own the reveal from here.
            boot.Append("            PlayableFadeCover.Cover();").Append(nl);
            if (!string.IsNullOrEmpty(resumeForce))
                boot.Append("            ").Append(resumeForce).Append(nl);
            boot.Append("            ").Append(resumeInvoke).Append(nl);
            boot.Append("            PlayableFadeCover.Reveal();").Append(nl);
            boot.Append("            yield break;").Append(nl);
            boot.Append("        }").Append(nl).Append(nl);
            log.Add("Start() resume branch added for Fix-It step " + resumeStep + " → " + resumeForce + " " + resumeInvoke);
        }

        boot.Append("        // PLAYABLE: no save resume — same ForceComplete + StartStep as original switch.").Append(nl);
        if (!string.IsNullOrEmpty(forceCall))
            boot.Append("        ").Append(forceCall).Append(nl);
        boot.Append("        ").Append(startInvoke).Append(nl);

        if (coverPop)
            boot.Append("        PlayableFadeCover.Reveal();").Append(nl);

        boot.Append("        yield break;").Append(nl);

        log.Add("Start() uses original switch boot → " + forceCall + " " + startInvoke + (coverPop ? " (fade-covered)" : ""));
        return text.Substring(0, open + 1) + nl + boot + text.Substring(close);
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
                        @"Invoke\s*\(\s*nameof\s*\(\s*(StartStep\w+)\s*\)\s*(,\s*[^)]+)?\)\s*;");
                    if (inv.Success)
                    {
                        startInvoke = inv.Value.Trim();
                        return;
                    }

                    var direct = Regex.Match(caseBody, @"StartStep\w+\s*\(\s*\)\s*;");
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

        string prev = "ForceCompleteStep" + (first - 1);
        if (Regex.IsMatch(fullText, @"\bvoid\s+" + prev + @"\s*\("))
            forceCall = prev + "();";
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

        return names;
    }

    static string FixStepChaining(string text, HashSet<int> keep, int lastKept, List<string> log)
    {
        string source = text;
        text = Regex.Replace(
            text,
            @"Invoke\s*\(\s*nameof\s*\(\s*StartStep(\d+)\s*\)\s*(,\s*[^)]+)?\)\s*;",
            m => RewriteNextCall(int.Parse(m.Groups[1].Value), keep, lastKept, m.Groups[2].Success ? m.Groups[2].Value : null, true, source, log));

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

        body = Regex.Replace(
            body,
            @"Invoke\s*\(\s*nameof\s*\(\s*StartStep(?:\d+|2b)\s*\)\s*(,\s*[^)]+)?\)\s*;",
            m => "Invoke(nameof(LevelComplete)" + (m.Groups[1].Success ? m.Groups[1].Value : ", 1f") + ");");
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

    static void TrimPrefab(string prefabPath, List<int> orderedKeep, InnerMode mode, List<string> log)
    {
        var keep = new HashSet<int>(orderedKeep);
        var root = PrefabUtility.LoadPrefabContents(prefabPath);
        try
        {
            var level = root.GetComponent<LevelData>();
            if (level == null)
                level = root.GetComponentInChildren<LevelData>(true);

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

            int removed = DestroyUnusedStepObjects(root, keepObjects, lastKept, log);
            removed += DestroyExtraLayerObjects(root, lastKept, log);
            // Only Exclude cuts the Fix-It art. Outer/CtaOnFix need the button itself, and the
            // inner level's own objects match the same markers — deleting there guts the level.
            if (mode == InnerMode.Exclude)
                removed += DestroyInnerLevelObjects(root, log);
            removed += DestroyUnreferencedScratchCards(root, keepObjects, log);
            int broken = CleanupBrokenPlayableRefs(root, log);

            if (level != null)
            {
                if (level.AllDrags != null)
                    level.AllDrags = level.AllDrags.Where(d => d != null).ToArray();
                if (level.AllSources != null)
                    level.AllSources = level.AllSources.Where(s => s != null).ToArray();
                if (level.AllScratches != null)
                    level.AllScratches = level.AllScratches.Where(s => s != null).ToArray();
            }

            string levelName = Path.GetFileNameWithoutExtension(prefabPath);
            if (levelName.EndsWith("_Playable", StringComparison.OrdinalIgnoreCase))
                levelName = levelName.Substring(0, levelName.Length - "_Playable".Length);
            if (levelName.StartsWith("Level", StringComparison.OrdinalIgnoreCase))
                levelName = levelName.Substring("Level".Length);
            string halvedFolderName = levelName + " steps " + first + " to " + lastKept;

            int shrunk = ShrinkOversizedTextures(root, halvedFolderName, log);
            log.Add("Unused step objects deleted: " + removed + ", broken refs cleaned: " + broken + ", sprites re-pointed to halved textures: " + shrunk);
            PrefabUtility.SaveAsPrefabAsset(root, prefabPath);
        }
        finally
        {
            PrefabUtility.UnloadPrefabContents(root);
        }
    }

    /// <summary>
    /// Inspector fields the built playable will dereference but that nothing is assigned to.
    ///
    /// These are almost always missing in the SOURCE level (the wizard copies references, it does
    /// not invent them), so they blow up as a NullReferenceException the moment that step runs —
    /// deep inside a DOTween callback, with a stack trace pointing at generated code. Far cheaper
    /// to name them at build time. Only fields the kept script actually touches are reported, and
    /// only where the code does not already null-check them, so an unused leftover stays quiet.
    /// </summary>
    static List<string> FindUnassignedFields(string prefabPath, string scriptText)
    {
        var missing = new List<string>();
        var root = PrefabUtility.LoadPrefabContents(prefabPath);
        try
        {
            var level = root.GetComponent<LevelData>();
            if (level == null)
                level = root.GetComponentInChildren<LevelData>(true);
            if (level == null)
                return missing;

            var so = new SerializedObject(level);
            var it = so.GetIterator();
            while (it.NextVisible(true))
            {
                if (it.propertyType != SerializedPropertyType.ObjectReference)
                    continue;

                // Top-level fields only — array elements are reported by their parent field.
                string field = it.propertyPath;
                if (field.IndexOf('.') >= 0)
                    continue;

                if (it.objectReferenceValue != null)
                    continue;

                // A non-zero instance id with a null value is a BROKEN reference: it was wired
                // once and the target has since been deleted. That is worse than empty — it
                // throws MissingReferenceException instead of NullReference, and a null-check in
                // the level code does NOT save it, because Unity's fake-null only covers the
                // destroyed-object case at the property, not the dangling fileID.
                bool broken = it.objectReferenceInstanceIDValue != 0;

                string escaped = Regex.Escape(field);

                // Not touched by the code that survived the trim: harmless, stay quiet.
                if (!Regex.IsMatch(scriptText, @"(?<![\w.])" + escaped + @"\s*\."))
                    continue;

                // Already guarded somewhere: the level expects it to be optional. A broken
                // reference is still reported — the guard will not catch it.
                if (!broken &&
                    (Regex.IsMatch(scriptText, @"(?<![\w.])" + escaped + @"\s*(?:!=|==)\s*null") ||
                     Regex.IsMatch(scriptText, @"(?<![\w.])" + escaped + @"\s*\?\.")))
                    continue;

                missing.Add(broken
                    ? field + " (BROKEN reference — its object was deleted from the level)"
                    : field + " (empty)");
            }
        }
        finally
        {
            PrefabUtility.UnloadPrefabContents(root);
        }

        return missing;
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
            if (root.GetComponent<PlayableCTA>() == null)
                root.AddComponent<PlayableCTA>();

            log.Add("PlayableCTA attached to root (Trigger = Manual by default). " +
                    "Set a Trigger in the Inspector, or wire PlayableCTA.FireCTA() into any " +
                    "UnityEvent — that's how you fire the CTA mid-step.");

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

    /// <summary>True if the source script declares a [Header("STEP n")] block at all —
    /// used by the Step Wizard to tell whether a "tease step" beyond the last real step
    /// actually exists before trying to build one.</summary>
    public static bool StepHasContent(string sourcePrefabPath, int step)
    {
        var scan = Scan(sourcePrefabPath);
        if (!string.IsNullOrEmpty(scan.Error))
            return false;
        string text = File.ReadAllText(ToFull(scan.ScriptPath));
        return Regex.IsMatch(text, @"\[Header\(""[^""]*STEP\s*" + step + @"(?!\d)[^""]*""\)\]");
    }

    /// <summary>
    /// Wires the built prefab's PlayableCTA to OnToolAppear, watching teaseStep's own tool.
    /// teaseStep was built as a normal kept step (real entrance, real tool) by the caller —
    /// this just arms the CTA to intercept the first tap on it instead of leaving Trigger on
    /// the AttachCtaComponent default of Manual.
    /// </summary>
    public static void ConfigureTeaseCta(string prefabPath, int teaseStep, List<string> log)
    {
        var root = PrefabUtility.LoadPrefabContents(prefabPath);
        try
        {
            var level = root.GetComponent<LevelData>() ?? root.GetComponentInChildren<LevelData>(true);
            var cta = root.GetComponent<PlayableCTA>();
            if (level == null || cta == null)
            {
                log.Add("Tease step " + teaseStep + ": LevelData/PlayableCTA not found on root — left as Manual.");
                return;
            }

            var toolField = level.GetType().GetField("ToolStep" + teaseStep);
            object val = toolField != null ? toolField.GetValue(level) : null;
            GameObject tool = val as GameObject ?? (val as Component)?.gameObject;
            if (tool == null)
            {
                log.Add("Tease step " + teaseStep + ": ToolStep" + teaseStep + " not found/unassigned — CTA left as Manual, wire watchedTool by hand.");
                return;
            }

            cta.trigger = PlayableCTA.Trigger.OnToolAppear;
            cta.watchedTool = tool;
            log.Add("PlayableCTA → OnToolAppear watching '" + tool.name + "' (step " + teaseStep +
                    "). Step " + teaseStep + " plays as a tease — tapping its tool redirects to store.");

            PrefabUtility.SaveAsPrefabAsset(root, prefabPath);
        }
        finally
        {
            PrefabUtility.UnloadPrefabContents(root);
        }
    }

    const int TextureShrinkThreshold = 512;
    static readonly Dictionary<string, string> HalvedTextureCache = new Dictionary<string, string>();
    static readonly Dictionary<string, float> HalvedTextureShrinkFactor = new Dictionary<string, float>();

    // Luna's own maxWidth/maxHeight texture rule does not actually resize source PNGs
    // (verified: LunaTemp stage2 output keeps full source dimensions), so oversized
    // backgrounds/props ship at full resolution regardless of that config. This makes a
    // private, per-playable half-resolution copy of every sprite still in use above the
    // threshold, repoints the renderer to it, and scales up the renderer's own GameObject
    // to compensate (pixels-per-unit stays the same as the source, so the smaller texture
    // would otherwise render visibly smaller — the transform is what restores the original
    // on-screen size).
    //
    // Scaling a node up cascades to descendants in TWO ways, and both must be cancelled
    // or the result looks "zoomed"/scattered: a descendant inherits the parent's extra
    // scale (renders too big) AND its localPosition is multiplied by that scale (drifts
    // away from where it was anchored). An earlier version of this only cancelled the
    // scale, which is why sizes measured correct while the art was visibly wrong.
    //
    // Fix: snapshot every affected transform's ORIGINAL localPosition/localScale, then for
    // each one compute Anc = product of the shrink factors of its pending ancestors, and
    //     localPosition.xy = origLocalPosition.xy / Anc
    //     localScale.xy    = origLocalScale.xy * (own factor, or 1) / Anc
    // Everything derives from originals, so nothing compounds and order doesn't matter.
    // Verified: world position AND rendered bounds both match the source prefab exactly.
    //
    // Original source assets are never touched, so nothing else in the project (full
    // game, other playables) is affected.
    static int ShrinkOversizedTextures(GameObject root, string halvedFolderName, List<string> log)
    {
        var factorByTransform = new Dictionary<Transform, float>();

        var srs = root.GetComponentsInChildren<SpriteRenderer>(true);
        for (int i = 0; i < srs.Length; i++)
        {
            var sr = srs[i];
            if (sr == null || sr.sprite == null)
                continue;
            string newPath = GetOrCreateHalvedSprite(sr.sprite, halvedFolderName, log);
            if (string.IsNullOrEmpty(newPath))
                continue;
            var newSprite = AssetDatabase.LoadAssetAtPath<Sprite>(newPath);
            if (newSprite == null)
            {
                // Never skip quietly: skipping means this playable ships the full-size texture,
                // which is the exact defect the halving exists to prevent and is invisible until
                // someone notices the build is huge. Fail the build and say which one.
                throw new Exception(
                    "Halved sprite could not be loaded, playable would keep the full-size texture: " + newPath);
            }

            float factor;
            if (HalvedTextureShrinkFactor.TryGetValue(newPath, out factor))
                factorByTransform[sr.transform] = factor;

            sr.sprite = newSprite;
        }

        var masks = root.GetComponentsInChildren<SpriteMask>(true);
        for (int i = 0; i < masks.Length; i++)
        {
            var mask = masks[i];
            if (mask == null || mask.sprite == null)
                continue;
            string newPath = GetOrCreateHalvedSprite(mask.sprite, halvedFolderName, log);
            if (string.IsNullOrEmpty(newPath))
                continue;
            var newSprite = AssetDatabase.LoadAssetAtPath<Sprite>(newPath);
            if (newSprite == null)
            {
                // Never skip quietly: skipping means this playable ships the full-size texture,
                // which is the exact defect the halving exists to prevent and is invisible until
                // someone notices the build is huge. Fail the build and say which one.
                throw new Exception(
                    "Halved sprite could not be loaded, playable would keep the full-size texture: " + newPath);
            }

            float factor;
            if (HalvedTextureShrinkFactor.TryGetValue(newPath, out factor))
                factorByTransform[mask.transform] = factor;

            mask.sprite = newSprite;
        }

        if (factorByTransform.Count == 0)
            return 0;

        // A pending node needs its own correction AND its whole subtree needs the
        // inherited scale/position cancelled — nothing outside those subtrees is touched.
        var toFix = new HashSet<Transform>();
        foreach (var t in factorByTransform.Keys)
        {
            toFix.Add(t);
            CollectSubtree(t, toFix);
        }

        var origPos = new Dictionary<Transform, Vector3>();
        var origScale = new Dictionary<Transform, Vector3>();
        foreach (var t in toFix)
        {
            origPos[t] = t.localPosition;
            origScale[t] = t.localScale;
        }

        int changed = 0;
        foreach (var t in toFix)
        {
            // Divide by the PARENT's own factor only — not the product of all ancestors.
            // Every node ends up with its world scale either restored to original (not
            // pending) or grown by exactly its own factor (pending), so the extra scale
            // never accumulates down the chain; only a direct parent that actually grew
            // needs cancelling. Using the ancestor product here shrank deep hierarchies
            // (screw → cover → machine) to a fraction of their size.
            float parentFactor = 1f;
            if (t.parent != null)
            {
                float pf;
                if (factorByTransform.TryGetValue(t.parent, out pf))
                    parentFactor = pf;
            }

            float own;
            bool isPending = factorByTransform.TryGetValue(t, out own);
            if (!isPending)
                own = 1f;

            Vector3 p = origPos[t];
            Vector3 s = origScale[t];

            // X/Y only — Z is untouched, so Z position/scale stay exactly as authored.
            t.localPosition = new Vector3(p.x / parentFactor, p.y / parentFactor, p.z);
            t.localScale = new Vector3(s.x * own / parentFactor, s.y * own / parentFactor, s.z);

            if (isPending)
                changed++;
        }

        return changed;
    }

    static void CollectSubtree(Transform t, HashSet<Transform> into)
    {
        foreach (Transform child in t)
        {
            if (into.Add(child))
                CollectSubtree(child, into);
        }
    }

    static string GetOrCreateHalvedSprite(Sprite sprite, string halvedFolderName, List<string> log)
    {
        var srcTex = sprite.texture;
        if (srcTex == null)
            return null;

        // Use the SPRITE's own rect, not the texture's full dimensions — a texture can be
        // a Multiple-mode sprite sheet where the sprite actually in use is just one small
        // sub-rect of a much larger shared sheet (verified: happens in this project).
        // Treating the whole sheet as "the sprite" would both mis-judge whether shrinking
        // is even needed and corrupt the crop when it is.
        int rectW = Mathf.RoundToInt(sprite.rect.width);
        int rectH = Mathf.RoundToInt(sprite.rect.height);
        if (rectW <= TextureShrinkThreshold && rectH <= TextureShrinkThreshold)
            return null;

        string srcPath = AssetDatabase.GetAssetPath(srcTex);
        if (string.IsNullOrEmpty(srcPath))
            return null;

        // Keyed by sprite identity AND destination playable folder, not just the texture
        // path — a sprite sheet can have several distinct sub-sprites in use (each needs
        // its own cropped copy), and different playables built in the same Editor session
        // must not reuse each other's per-playable copies.
        string cacheKey = halvedFolderName + "::" + srcPath + "::" + sprite.name;

        string cached;
        if (HalvedTextureCache.TryGetValue(cacheKey, out cached))
        {
            // A cached path is only trustworthy while that file still exists. The cache is static,
            // so it outlives the assets: delete the generated prefab and its HalvedTextures folder
            // (or let a failed build leave half of one behind) and every later build in the same
            // editor session got handed a path to a file that is gone — LoadAssetAtPath then
            // returned null and the caller silently kept the FULL-SIZE sprite. Re-create instead.
            if (string.IsNullOrEmpty(cached) || AssetDatabase.LoadAssetAtPath<Sprite>(cached) != null)
                return cached;

            HalvedTextureCache.Remove(cacheKey);
        }

        string destPath = CreateHalvedTexture(srcPath, sprite, halvedFolderName, log);
        HalvedTextureCache[cacheKey] = destPath; // cache null too, so we don't retry a failed asset every call
        return destPath;
    }

    /// <summary>
    /// The crop's pixels, read by decoding the image file ourselves.
    ///
    /// The old route flipped the source texture's importer to readable, SaveAndReimport'd, and
    /// called GetPixels. That is unreliable in THIS project: something (Luna, going by the
    /// LunaTemp/luna-cache.json lock errors) intermittently holds source .meta files open, the
    /// meta write fails, isReadable never actually applies, and GetPixels throws "texture data is
    /// either not readable, corrupted or does not exist" — killing the build inside TrimPrefab
    /// before the prefab is saved. Decoding the file needs no importer, no reimport and no .meta
    /// write, so no lock can break it.
    ///
    /// The file is usually LARGER than the imported texture (maxTextureSize downscales it — e.g.
    /// girl_.png is 1126x1553 on disk and imports at 742x1024). The sprite's rect is in imported
    /// space, so resample to the imported size first; then the rect lines up exactly.
    /// </summary>
    static Color[] ReadSourcePixels(
        string srcPath, Texture2D srcTex, TextureImporter importer, int x, int y, int w, int h)
    {
        Texture2D decoded = null;
        Texture2D scaled = null;
        try
        {
            string full = ToFull(srcPath);
            if (srcTex != null && srcTex.width > 0 && srcTex.height > 0 && File.Exists(full))
            {
                decoded = new Texture2D(2, 2, TextureFormat.RGBA32, false);
                if (decoded.LoadImage(File.ReadAllBytes(full)))
                {
                    Texture2D source = decoded;
                    if (decoded.width != srcTex.width || decoded.height != srcTex.height)
                    {
                        scaled = ResampleTexture(decoded, srcTex.width, srcTex.height);
                        source = scaled;
                    }

                    return source.GetPixels(x, y, w, h);
                }
            }
        }
        catch (Exception)
        {
            // fall through to the importer route
        }
        finally
        {
            if (decoded != null)
                UnityEngine.Object.DestroyImmediate(decoded);
            if (scaled != null)
                UnityEngine.Object.DestroyImmediate(scaled);
        }

        return ReadSourcePixelsViaImporter(srcPath, importer, x, y, w, h);
    }

    /// <summary>Bilinear resample through a RenderTexture — the same path the halving itself uses.</summary>
    static Texture2D ResampleTexture(Texture2D source, int width, int height)
    {
        var rt = RenderTexture.GetTemporary(width, height, 0, RenderTextureFormat.ARGB32);
        rt.filterMode = FilterMode.Bilinear;

        var prevActive = RenderTexture.active;
        Graphics.Blit(source, rt);
        RenderTexture.active = rt;

        var result = new Texture2D(width, height, TextureFormat.RGBA32, false);
        result.ReadPixels(new Rect(0, 0, width, height), 0, 0);
        result.Apply();

        RenderTexture.active = prevActive;
        RenderTexture.ReleaseTemporary(rt);

        return result;
    }

    /// <summary>Original route, kept for anything ImageConversion cannot decode (.psd, .tga).</summary>
    static Color[] ReadSourcePixelsViaImporter(
        string srcPath, TextureImporter importer, int x, int y, int w, int h)
    {
        if (importer == null)
            throw new Exception("No TextureImporter to read pixels from: " + srcPath);

        bool wasReadable = importer.isReadable;
        if (!wasReadable)
        {
            importer.isReadable = true;
            importer.SaveAndReimport();
        }

        try
        {
            Texture2D tex = AssetDatabase.LoadAssetAtPath<Texture2D>(srcPath);
            if (tex == null)
                throw new Exception("Texture could not be loaded for shrinking: " + srcPath);

            return tex.GetPixels(x, y, w, h);
        }
        finally
        {
            if (!wasReadable)
            {
                importer.isReadable = false;
                importer.SaveAndReimport();
            }
        }
    }


    static string CreateHalvedTexture(string srcPath, Sprite sprite, string halvedFolderName, List<string> log)
    {
        var importer = AssetImporter.GetAtPath(srcPath) as TextureImporter;
        if (importer == null)
            return null;

        int cropX = Mathf.RoundToInt(sprite.rect.x);
        int cropY = Mathf.RoundToInt(sprite.rect.y);
        int origW = Mathf.RoundToInt(sprite.rect.width);
        int origH = Mathf.RoundToInt(sprite.rect.height);
        int newW = origW;
        int newH = origH;
        while (newW > TextureShrinkThreshold || newH > TextureShrinkThreshold)
        {
            newW = Mathf.Max(1, newW / 2);
            newH = Mathf.Max(1, newH / 2);
        }

        if (newW == origW && newH == origH)
            return null;

        TextureImporterSettings srcSettings = new TextureImporterSettings();
        importer.ReadTextureSettings(srcSettings);

        // Read PPU/pivot/border off the actual placed Sprite instance, not the texture's
        // on-disk importer default — they can (and here, do) diverge, e.g. a per-sprite
        // override that was never re-baked into the importer's default. The importer is
        // only trusted for settings that aren't visible on the Sprite object itself.
        float originalPPU = sprite.pixelsPerUnit;
        Vector2 originalPivot = new Vector2(sprite.pivot.x / sprite.rect.width, sprite.pivot.y / sprite.rect.height);
        int originalAlignment = srcSettings.spriteAlignment;
        Vector4 originalBorder = sprite.border;
        FilterMode originalFilterMode = importer.filterMode;
        TextureWrapMode originalWrapMode = importer.wrapMode;
        SpriteMeshType originalMeshType = srcSettings.spriteMeshType;

        Color[] srcPixels = ReadSourcePixels(srcPath, sprite.texture, importer, cropX, cropY, origW, origH);

        byte[] png;
        Texture2D cropped = null;
        try
        {

            // Crop to just the sprite's own rect first — resizing the full sheet and
            // reusing SpriteImportMode.Single on it would render the *entire* sheet as
            // one sprite, discarding the crop this specific sub-sprite actually uses.
            cropped = new Texture2D(origW, origH, TextureFormat.RGBA32, false);
            cropped.SetPixels(srcPixels);
            cropped.Apply();

            var rt = RenderTexture.GetTemporary(newW, newH, 0, RenderTextureFormat.ARGB32);
            rt.filterMode = FilterMode.Bilinear;
            var prevActive = RenderTexture.active;
            Graphics.Blit(cropped, rt);
            RenderTexture.active = rt;

            var resized = new Texture2D(newW, newH, TextureFormat.RGBA32, false);
            resized.ReadPixels(new Rect(0, 0, newW, newH), 0, 0);
            resized.Apply();

            RenderTexture.active = prevActive;
            RenderTexture.ReleaseTemporary(rt);

            png = resized.EncodeToPNG();
            UnityEngine.Object.DestroyImmediate(resized);
        }
        finally
        {
            if (cropped != null)
                UnityEngine.Object.DestroyImmediate(cropped);
        }

        string destDir = "Assets/_Playable/HalvedTextures/" + halvedFolderName;
        Directory.CreateDirectory(ToFull(destDir));

        // Named after the sprite, not the sheet — a Multiple-mode sheet can contribute
        // several distinct cropped sub-sprites, each needs its own file.
        string sourceIdentity = srcPath + "::" + sprite.name;
        string baseName = sprite.name;
        string destPath = destDir + "/" + baseName + ".png";
        int suffix = 1;
        while (File.Exists(ToFull(destPath)) && !PathsRefToSameSource(destPath, sourceIdentity))
        {
            destPath = destDir + "/" + baseName + "_" + suffix + ".png";
            suffix++;
        }

        File.WriteAllBytes(ToFull(destPath), png);
        AssetDatabase.ImportAsset(destPath, ImportAssetOptions.ForceUpdate | ImportAssetOptions.ForceSynchronousImport);

        float shrinkFactor = (float)origW / newW;

        var newImporter = AssetImporter.GetAtPath(destPath) as TextureImporter;
        if (newImporter != null)
        {
            newImporter.textureType = TextureImporterType.Sprite;
            newImporter.spriteImportMode = SpriteImportMode.Single;
            // PPU unchanged on purpose: the caller compensates by scaling up the
            // renderer's transform instead, so the sprite must render at its natural
            // (now smaller) size at PPU parity with the source, not be pre-corrected here.
            newImporter.spritePixelsPerUnit = originalPPU;
            newImporter.spritePivot = originalPivot;
            newImporter.spriteBorder = originalBorder / shrinkFactor;
            newImporter.filterMode = originalFilterMode;
            newImporter.wrapMode = originalWrapMode;
            newImporter.alphaIsTransparency = true;
            newImporter.mipmapEnabled = false;

            TextureImporterSettings newSettings = new TextureImporterSettings();
            newImporter.ReadTextureSettings(newSettings);
            newSettings.spriteAlignment = originalAlignment;
            newSettings.spriteMeshType = originalMeshType;
            newImporter.SetTextureSettings(newSettings);

            newImporter.SaveAndReimport();
        }

        HalvedTextureShrinkFactor[destPath] = shrinkFactor;

        log.Add("  - halved sprite '" + sprite.name + "' (from " + Path.GetFileName(srcPath) + ") " + origW + "x" + origH + " -> " + newW + "x" + newH +
                " (x" + shrinkFactor.ToString("0.##") + ", PPU unchanged, consuming renderers scaled up to compensate)");

        return destPath;
    }

    // Metadata sidecar tracks which source a cached halved copy came from, so a name
    // collision between two different textures with the same filename doesn't reuse
    // the wrong one on a later regeneration pass.
    static bool PathsRefToSameSource(string destPath, string srcPath)
    {
        string sidecar = ToFull(destPath) + ".src";
        if (File.Exists(sidecar))
            return File.ReadAllText(sidecar).Trim() == srcPath;

        File.WriteAllText(sidecar, srcPath);
        return true;
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

        if (last <= 20)
        {
            int maxView = ViewIndexForStep(last + 1);
            for (int v = maxView + 1; v <= 6; v++)
            {
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

    static int DestroyUnusedStepObjects(GameObject root, HashSet<int> keep, int lastKept, List<string> log)
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
                if (ContainsKeptStepChild(t, keep))
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

    static int DestroyExtraLayerObjects(GameObject root, int lastKept, List<string> log)
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
            if (set.Contains(t.name))
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
            if (pipe.toolTransform != null && pipe.meshRenderer != null)
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
