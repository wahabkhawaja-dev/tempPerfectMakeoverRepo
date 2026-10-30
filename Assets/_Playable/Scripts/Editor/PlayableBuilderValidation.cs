#if UNITY_EDITOR
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Reflection;
using System.Text.RegularExpressions;
using UnityEditor;
using UnityEngine;

public static class PlayableBuilderValidation
{
    static IEnumerator<Action> catalog;

    [MenuItem("Playable/Validate All Source Step Ranges")]
    public static void StartCatalogChecks()
    {
        if (catalog != null) throw new InvalidOperationException("A catalog validation is already running.");
        if (EditorApplication.isPlayingOrWillChangePlaymode || EditorApplication.isCompiling)
            throw new InvalidOperationException("Run validation in Edit Mode after compilation.");
        catalog = CatalogChecks().GetEnumerator();
        EditorApplication.update += AdvanceCatalog;
    }

    static void AdvanceCatalog()
    {
        try
        {
            if (EditorApplication.isCompiling || EditorApplication.isPlayingOrWillChangePlaymode)
                throw new InvalidOperationException("Catalog validation stopped because the editor state changed. Run it again in Edit Mode.");
            if (catalog.MoveNext()) { catalog.Current(); return; }
        }
        catch (Exception e) { Debug.LogError("[Playable Catalog Validation] " + e); }
        catalog.Dispose(); catalog = null;
        EditorApplication.update -= AdvanceCatalog;
    }

    static IEnumerable<Action> CatalogChecks()
    {
        string directory = Path.GetFullPath("Library/PlayableCatalogValidation/" + DateTime.UtcNow.ToString("yyyyMMdd_HHmmss"));
        Directory.CreateDirectory(directory);
        var files = new List<string>(); var manifest = new List<string>(); var seen = new HashSet<string>();
        foreach (string path in PlayableLevelFactory.ListSourcePrefabs().Where(p => !p.StartsWith(PlayableLevelFactory.PlayableLevels + "/", StringComparison.OrdinalIgnoreCase)))
        {
            var scan = PlayableLevelFactory.Scan(path);
            if (!string.IsNullOrEmpty(scan.Error)) throw new InvalidOperationException(path + ": " + scan.Error);
            if (!seen.Add(scan.ScriptPath)) continue;
            string source = File.ReadAllText(scan.ScriptPath);
            var selections = new List<HashSet<int>>();
            foreach (int first in scan.Steps)
            foreach (int last in scan.Steps.Where(s => s >= first))
                selections.Add(new HashSet<int>(scan.Steps.Where(s => s >= first && s <= last)));
            if (scan.Steps.Length > 2) selections.Add(new HashSet<int>(scan.Steps.Where((s, i) => i % 2 == 0)));
            foreach (var selection in selections)
            {
                var keep = selection;
                yield return () => GenerateCatalogSource(source, scan, keep, PlayableLevelFactory.InnerMode.Exclude, directory, files, manifest);
            }
            if (scan.HasInnerLevels)
            foreach (var selectedMode in new[] { PlayableLevelFactory.InnerMode.Outer, PlayableLevelFactory.InnerMode.Inner, PlayableLevelFactory.InnerMode.InnerEndsPlayable })
            {
                var mode = selectedMode;
                yield return () => GenerateCatalogSource(source, scan, new HashSet<int>(scan.Steps), mode, directory, files, manifest);
            }
        }
        yield return () => {
            File.WriteAllLines(Path.Combine(directory, "sources.txt"), files);
            File.WriteAllLines(Path.Combine(directory, "manifest.txt"), manifest);
            PlayableBuildSafety.CheckSources(files, directory);
            File.WriteAllText(Path.Combine(directory, "passed.txt"), "Compiled " + files.Count + " generated ranges and modes.");
            Debug.Log("[Playable Catalog Validation] Compiled " + files.Count + " ranges/modes with zero errors. " + directory);
        };
    }

    static void GenerateCatalogSource(string source, PlayableLevelFactory.ScanResult scan, HashSet<int> keep,
        PlayableLevelFactory.InnerMode mode, string directory, List<string> files, List<string> manifest)
    {
        string name = "PlayableCatalogCheck" + files.Count;
        string label = scan.PrefabPath + " steps=" + string.Join(",", keep.OrderBy(s => s)) + " mode=" + mode;
        string text;
        try { text = PlayableLevelFactory.RewriteScript(source, scan.ClassName, name, keep, keep.Min(), keep.Max(), mode, scan.FixStep, new List<string>()); }
        catch (Exception e) { throw new InvalidOperationException(label + ": " + e.Message, e); }
        string path = Path.Combine(directory, name + ".cs");
        File.WriteAllText(path, text); files.Add(path);
        manifest.Add(name + ": " + label);
        File.AppendAllText(Path.Combine(directory, "manifest.txt"), name + ": " + label + Environment.NewLine);
    }

    [MenuItem("Playable/Validate Step-Complete Builder")]
    public static void RunRegressionChecks()
    {
        var passed = new List<string>();
        Action<bool, string> check = (condition, name) =>
        {
            if (!condition) throw new InvalidOperationException("Builder regression failed: " + name);
            passed.Add(name);
        };
        Func<int, string, string> finish = (step, delay) => "Invoke(nameof(LevelComplete)" + delay + ");";
        string nested = "Invoke(nameof(StartStep8), AfterShowcase(Mathf.Max(1.2f, ReturnDuration)));";
        check(PlayableLevelFactory.RewriteInvokedSteps(nested, finish) ==
            "Invoke(nameof(LevelComplete), AfterShowcase(Mathf.Max(1.2f, ReturnDuration)));", "balanced nested Invoke delay is preserved");
        check(PlayableLevelFactory.RewriteInvokedSteps("Invoke(\"StartStep8\", AfterShowcase(1.2f));", finish) ==
            "Invoke(nameof(LevelComplete), AfterShowcase(1.2f));", "string-based Invoke is rewired");
        check(PlayableLevelFactory.RewriteInvokedSteps("DOVirtual.DelayedCall(1f, () => Invoke(nameof(StartStep8), Delay(2f)));", finish) ==
            "DOVirtual.DelayedCall(1f, () => Invoke(nameof(LevelComplete), Delay(2f)));", "Invoke in a void callback keeps valid delimiters");
        string comments = "// Invoke(nameof(StartStep8), Delay(2f));\nstring note = \"Invoke(nameof(StartStep8), Delay(2f));\";";
        check(PlayableLevelFactory.RewriteInvokedSteps(comments, finish) == comments, "comments and strings are not rewritten");
        bool rejected = false;
        try { PlayableLevelFactory.ValidateStepReferences("void Step6Done() { Invoke(nameof(StartStep8), Delay(2f)); }"); }
        catch (InvalidOperationException) { rejected = true; }
        check(rejected, "dangling step references are rejected before generated files are written");
        string commentFixture = "string url = \"https://example.test/*literal*/\"; /* StartStep99(); } */\n// StartStep98();\nvoid StartStep1() {}";
        string stripped = PlayableLevelFactory.StripSourceComments(commentFixture);
        check(stripped.Length == commentFixture.Length && stripped.Contains("https://example.test/*literal*/") &&
            !stripped.Contains("StartStep99") && !stripped.Contains("StartStep98"), "comment stripping preserves string literals and source offsets");
        string untouchedScript = "Library/PlayableBuilderValidation/BackupFixture.cs";
        Directory.CreateDirectory(Path.GetDirectoryName(untouchedScript));
        File.WriteAllText(untouchedScript, "original");
        File.WriteAllText(untouchedScript + ".meta", "original-guid");
        var backup = new PlayableBuildSafety.AssetBackup(untouchedScript);
        File.WriteAllText(untouchedScript, "broken replacement");
        File.WriteAllText(untouchedScript + ".meta", "changed-guid");
        backup.Restore();
        check(File.ReadAllText(untouchedScript) == "original" && File.ReadAllText(untouchedScript + ".meta") == "original-guid",
            "failed rebuild restores the existing script and GUID");

        string sourcePath = "Assets/_ImportedFromParent/Levels/Event1_3.prefab";
        var scan = PlayableLevelFactory.Scan(sourcePath);
        if (!string.IsNullOrEmpty(scan.Error)) throw new InvalidOperationException(scan.Error);
        string source = File.ReadAllText(scan.ScriptPath);
        var rewrite = typeof(PlayableLevelFactory).GetMethod("RewriteScript", BindingFlags.NonPublic | BindingFlags.Static);
        string directory = Path.GetFullPath("Library/PlayableBuilderValidation");
        Directory.CreateDirectory(directory);
        var compileSources = new List<string>();
        foreach (int first in scan.Steps)
        foreach (int last in scan.Steps.Where(step => step >= first))
        {
            var keep = new HashSet<int>(scan.Steps.Where(step => step >= first && step <= last));
            string className = "BuilderRegressionCasket" + first + "to" + last;
            string generated = (string)rewrite.Invoke(null, new object[] {
                source, scan.ClassName, className, keep, first, last, PlayableLevelFactory.InnerMode.Exclude, scan.FixStep, new List<string>()
            });
            PlayableLevelFactory.ValidateStepReferences(generated);
            string mask = LunaScriptSanitizer.Mask(generated);
            check(!Regex.Matches(mask, @"\bvoid\s+StartStep(\d+)\s*\(").Cast<Match>().Any(m => int.Parse(m.Groups[1].Value) > last),
                "range " + first + "–" + last + " contains no extra step or tease method");
            string path = Path.Combine(directory, className + ".cs");
            File.WriteAllText(path, generated);
            compileSources.Add(path);
        }
        File.WriteAllLines(Path.Combine(directory, "compile_sources.txt"), compileSources);
        File.WriteAllLines(Path.Combine(directory, "results.txt"), passed);
        Debug.Log("[Playable Builder Validation] Passed " + passed.Count + " checks; generated " + compileSources.Count + " Casket step ranges for compilation. " + directory);
    }
}
#endif
