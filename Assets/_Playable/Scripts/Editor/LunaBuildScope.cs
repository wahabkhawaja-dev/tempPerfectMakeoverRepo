using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Reflection;
using System.Text;
using System.Text.RegularExpressions;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;
using UnityEditor;
using UnityEditor.SceneManagement;
using UnityEngine;
using UnityEngine.SceneManagement;

// Keeps Luna's "Scripts" size to what the Luna scene needs (ported from CleanAsmrPlayables' LunaSourcePrefabExcluder).
// Luna compiles every non-excluded C# file into the playable, and the other levels' and other playables' scripts are
// most of it. Every script nothing the scene needs references gets a unity.scripts.excludes rule in luna.json:
// kept = scene components + luna.json includes' scripts, then every script declaring a type a kept script mentions.
// luna.json is parsed and re-serialized (never string-patched) and only written when valid and changed.
[InitializeOnLoad]
public static class LunaBuildScope
{
    private static string Root => Directory.GetParent(Application.dataPath).FullName;
    private static string ConfigPath => Path.Combine(Root, "luna.json");
    private static int retries;

    // Never pruned: Luna/TMP plumbing, native plugins, and third-party code (DOTween calls DOTweenModuleUtils by
    // reflection, which a type-name scan can't see).
    private static readonly string[] Unprunable = { "/Editor/", "/Plugins/", "/TextMesh Pro/", "/Luna/", "/Third Party/" };

    static LunaBuildScope()
    {
        EditorApplication.delayCall += () => Sync(false);
        EditorApplication.update += Enforce;
        EditorSceneManager.sceneSaved += scene => { if (IsLunaScene(scene.path)) Sync(false); };
        EditorSceneManager.sceneOpened += (scene, mode) => { if (IsLunaScene(scene.path)) EditorApplication.delayCall += () => Sync(false); };
    }

    [MenuItem("Playable/Luna/Sync Build Scope")]
    public static void SyncFromMenu() => Sync(true);

    [MenuItem("Playable/Luna/Reset Luna Cache")]
    public static void ResetFromMenu()
    {
        if (LunaBuildRunning()) { Debug.LogWarning("[Luna Cache] A Luna build is running - reset it once it finishes."); return; }
        ResetLunaCache("requested from the menu");
    }

    [MenuItem("Playable/Luna/Build && Estimate Size")]
    public static void EstimateFromMenu() =>
        LunaSizeEstimate.Run((msg, ok) => { if (ok) Debug.Log("[Luna Size] " + msg); else Debug.LogWarning("[Luna Size] " + msg); });

    /// <summary>Updates luna.json. Returns the exclude rules it manages (null when nothing could be computed).</summary>
    public static List<string> Sync(bool log)
    {
        if (EditorApplication.isPlayingOrWillChangePlaymode || !File.Exists(ConfigPath)) return null;
        // Writing luna.json mid-build collides with Luna's own reads (Win32 error 1224); sync once it's done.
        if (LunaBuildRunning()) { RetryLater(log); return null; }
        string original = File.ReadAllText(ConfigPath);
        JObject config;
        try { config = JObject.Parse(original); }
        catch (Exception e) { Debug.LogError("[Luna Build Scope] luna.json is not valid JSON, nothing changed: " + e.Message); return null; }

        var scriptExcludes = Array(config, "unity", "scripts", "excludes");
        if (scriptExcludes == null) { Debug.LogWarning("[Luna Build Scope] luna.json has no unity.scripts.excludes."); return null; }

        var rules = UnusedScriptRules(config, out string reason);
        if (rules == null)
        {
            if (log) Debug.LogWarning("[Luna Build Scope] Scripts not changed: " + reason);
            return null;
        }
        // Managed rules are the ones naming a real Assets path; Luna's own ("**/Editor/", "Stubs/...") never do.
        foreach (var token in scriptExcludes.Where(t => IsManagedRule(t.ToString())).ToList()) token.Remove();
        foreach (var rule in rules) scriptExcludes.Add(rule);

        string updated = Serialize(config, original);
        if (updated != original)
        {
            JObject.Parse(updated); // never write something Luna can't read
            try { File.WriteAllText(ConfigPath, updated, new UTF8Encoding(false)); }
            catch (IOException e)
            {
                // Something briefly maps luna.json (Luna reading it, an antivirus scan): Win32 error 1224. Try again shortly.
                if (retries++ < 30) RetryLater(log);
                else Debug.LogWarning("[Luna Build Scope] Could not write luna.json: " + e.Message);
                return rules;
            }
            retries = 0;
        }
        desired = scriptExcludes.Select(t => t.ToString()).ToList();
        bool pushed = PushToLunaEditor(desired);
        if (log || updated != original || pushed)
            Debug.Log($"[Luna Build Scope] luna.json {(updated != original ? "updated" : "already current")}: {rules.Count} unused script path(s) excluded from Luna's Scripts" +
                      (pushed ? "; Luna's in-memory scope refreshed." : "."));
        return rules;
    }

    private static double retryAt;

    /// <summary>Re-runs Sync about 2 s from now (one pending retry at a time).</summary>
    private static void RetryLater(bool log)
    {
        if (retryAt > 0) return;
        retryAt = EditorApplication.timeSinceStartup + 2;
        void Tick()
        {
            if (EditorApplication.timeSinceStartup < retryAt) return;
            EditorApplication.update -= Tick;
            retryAt = 0;
            Sync(log);
        }
        EditorApplication.update += Tick;
    }

    /// <summary>True while Luna's build pipeline (its bundled node.exe) is running.</summary>
    public static bool LunaBuildRunning()
    {
        string lunaNode = LunaNodePath();
        if (lunaNode == null) return false;
        foreach (var p in System.Diagnostics.Process.GetProcessesByName("node"))
        {
            try { if (string.Equals(p.MainModule?.FileName, lunaNode, StringComparison.OrdinalIgnoreCase)) return true; }
            catch { } // another user's / elevated process
            finally { p.Dispose(); }
        }
        return false;
    }

    private static string lunaNodePath;

    // <Luna>/scripts/Editor/EditorScripts.dll -> <Luna>/tools/node/win64/node.exe
    private static string LunaNodePath()
    {
        if (lunaNodePath != null) return lunaNodePath.Length > 0 ? lunaNodePath : null;
        var asm = AppDomain.CurrentDomain.GetAssemblies().FirstOrDefault(a => a.GetName().Name == "EditorScripts");
        string dll = asm != null && !asm.IsDynamic ? asm.Location : null;
        string path = string.IsNullOrEmpty(dll) ? null
            : Path.GetFullPath(Path.Combine(Path.GetDirectoryName(dll), "..", "..", "tools", "node", "win64", "node.exe"));
        lunaNodePath = path != null && File.Exists(path) ? path : "";
        return lunaNodePath.Length > 0 ? lunaNodePath : null;
    }

    private static bool IsManagedRule(string rule)
    {
        if (!rule.StartsWith("**/", StringComparison.Ordinal) || rule.Length <= 3) return false;
        string path = Path.Combine(Application.dataPath, rule.Substring(3).TrimEnd('/'));
        return File.Exists(path) || Directory.Exists(path);
    }

    /// <summary>
    /// "**/"-form exclude rules for every prunable script nothing the Luna scenes need references; a folder whose
    /// scripts are all unused gets one rule. Luna's exporter drops exclude entries starting with "Assets/" when it
    /// rewrites luna.json; the "**/" form means the same path and survives.
    /// </summary>
    public static List<string> UnusedScriptRules(JObject config, out string reason)
    {
        reason = null;
        var scenes = Array(config, "unity", "scenes")?.Select(t => t.ToString()).ToArray() ?? new string[0];
        if (scenes.Length == 0) { reason = "luna.json lists no scenes"; return null; }

        var files = AssetDatabase.FindAssets("t:MonoScript", new[] { "Assets" }).Select(AssetDatabase.GUIDToAssetPath)
            .Where(p => p.EndsWith(".cs", StringComparison.OrdinalIgnoreCase) && !p.Contains("/Editor/")).Distinct().ToList();

        var tokens = new Dictionary<string, HashSet<string>>();
        var declares = new Dictionary<string, List<string>>();
        var kept = new HashSet<string>(files.Where(f => Unprunable.Any(f.Contains)));
        foreach (var f in files)
        {
            string mask;
            try { mask = LunaScriptSanitizer.Mask(File.ReadAllText(f)); } catch { kept.Add(f); continue; }
            tokens[f] = new HashSet<string>(Regex.Matches(mask, @"[A-Za-z_]\w*").Cast<Match>().Select(m => m.Value));
            // Used without ever naming their type: extension methods (DOTween modules) and self-starting code.
            if (Regex.IsMatch(mask, @"\(\s*this\s+[\w.<>\[\]]+\s+\w+") || mask.Contains("RuntimeInitializeOnLoadMethod")) kept.Add(f);
            // Every declared type at any depth. Counting too many only keeps a file; missing one breaks Luna's compile.
            foreach (Match m in Regex.Matches(mask, @"\b(?:class|struct|enum|interface)\s+([A-Za-z_]\w*)|\bdelegate\s+[\w<>\[\],\s]+?\s+([A-Za-z_]\w*)\s*[<(]"))
            {
                string type = m.Groups[1].Success ? m.Groups[1].Value : m.Groups[2].Value;
                foreach (var name in type.EndsWith("Attribute") ? new[] { type, type.Substring(0, type.Length - 9) } : new[] { type })
                {
                    if (!declares.TryGetValue(name, out var list)) declares[name] = list = new List<string>();
                    list.Add(f);
                }
            }
        }

        foreach (var scenePath in scenes)
        {
            var scene = SceneManager.GetSceneByPath(scenePath);
            if (scene.IsValid() && scene.isLoaded)
            {
                // The open (possibly unsaved) scene is what Luna will build.
                foreach (var b in scene.GetRootGameObjects().SelectMany(g => g.GetComponentsInChildren<MonoBehaviour>(true)))
                    if (b != null && MonoScript.FromMonoBehaviour(b) is MonoScript script) kept.Add(AssetDatabase.GetAssetPath(script));
                kept.UnionWith(AssetDatabase.GetDependencies(scenePath, true).Where(p => p.EndsWith(".cs")));
            }
            else if (File.Exists(Path.Combine(Root, scenePath)))
                kept.UnionWith(AssetDatabase.GetDependencies(scenePath, true).Where(p => p.EndsWith(".cs")));
        }
        foreach (var include in Array(config, "unity", "assets", "includes")?.Select(t => t.ToString()) ?? Enumerable.Empty<string>())
            if (File.Exists(Path.Combine(Root, include)))
                kept.UnionWith(AssetDatabase.GetDependencies(include, true).Where(p => p.EndsWith(".cs")));

        var queue = new Queue<string>(kept);
        while (queue.Count > 0)
        {
            if (!tokens.TryGetValue(queue.Dequeue(), out var used)) continue;
            foreach (var type in used)
                if (declares.TryGetValue(type, out var owners))
                    foreach (var owner in owners)
                        if (kept.Add(owner)) queue.Enqueue(owner);
        }

        // A folder holding any kept script stays; an unused script is excluded through its highest all-unused folder.
        var busy = new HashSet<string>(StringComparer.OrdinalIgnoreCase);
        foreach (var f in files.Where(kept.Contains))
            for (string d = Path.GetDirectoryName(f).Replace('\\', '/'); d.Length > "Assets".Length; d = Path.GetDirectoryName(d).Replace('\\', '/'))
                busy.Add(d);
        var rules = new SortedSet<string>(StringComparer.OrdinalIgnoreCase);
        foreach (var f in files.Where(f => !kept.Contains(f)))
        {
            string target = f;
            for (string d = Path.GetDirectoryName(f).Replace('\\', '/'); d.Length > "Assets".Length && !busy.Contains(d); d = Path.GetDirectoryName(d).Replace('\\', '/'))
                target = d + "/";
            rules.Add("**/" + target.Substring("Assets/".Length));
        }
        return rules.ToList();
    }

    // ── Luna's in-memory settings ──
    // Luna builds from the settings it holds in memory and writes them back over luna.json, so a scope fixed only on
    // disk comes back stale. Its plugin is obfuscated, so the live settings object is found by shape: a static whose
    // .unity.scripts.excludes is a List<string>; the plugin also keeps a two-entry defaults object of the same type.

    private static List<string> desired;
    private static double nextEnforce;
    private static FieldInfo liveField;

    private static object LiveLunaData()
    {
        var cached = liveField?.GetValue(null);
        if (ScriptExcludes(cached)?.Count > 2) return cached;

        const BindingFlags S = BindingFlags.Static | BindingFlags.Public | BindingFlags.NonPublic;
        object best = null;
        int bestCount = -1;
        foreach (var asm in AppDomain.CurrentDomain.GetAssemblies().Where(a => a.GetName().Name == "EditorScripts"))
        {
            Type[] types;
            try { types = asm.GetTypes(); }
            catch (ReflectionTypeLoadException e) { types = e.Types.Where(t => t != null).ToArray(); }
            foreach (var type in types.Where(t => !t.ContainsGenericParameters))
                foreach (var field in type.GetFields(S))
                {
                    object value;
                    try { value = field.GetValue(null); } catch { continue; }
                    var list = ScriptExcludes(value);
                    if (list != null && list.Count > bestCount) { best = value; bestCount = list.Count; liveField = field; }
                }
        }
        return best;
    }

    private static List<string> ScriptExcludes(object lunaData)
    {
        const BindingFlags I = BindingFlags.Instance | BindingFlags.Public | BindingFlags.NonPublic;
        var unity = lunaData?.GetType().GetField("unity", I)?.GetValue(lunaData);
        var scripts = unity?.GetType().GetField("scripts", I)?.GetValue(unity);
        return scripts?.GetType().GetField("excludes", I)?.GetValue(scripts) as List<string>;
    }

    private static bool PushToLunaEditor(List<string> want)
    {
        try
        {
            var list = ScriptExcludes(LiveLunaData());
            if (list == null || list.Count <= 2 || list.SequenceEqual(want)) return false; // only the defaults object found
            list.Clear();
            list.AddRange(want);
            return true;
        }
        catch (Exception e)
        {
            Debug.LogWarning("[Luna Build Scope] Could not refresh Luna's in-memory scope; run Playable/Luna/Sync Build Scope before building. " + e.Message);
            return false;
        }
    }

    private static bool buildWasRunning;

    /// <summary>Once a second: heal a build that just failed on stale cache, and put back a scope Luna reset.</summary>
    private static void Enforce()
    {
        if (EditorApplication.timeSinceStartup < nextEnforce || EditorApplication.isPlayingOrWillChangePlaymode) return;
        nextEnforce = EditorApplication.timeSinceStartup + 1;
        bool running = LunaBuildRunning();
        if (buildWasRunning && !running) AfterBuild();
        buildWasRunning = running;
        if (running || desired == null) return; // the running build already read its settings
        if (PushToLunaEditor(desired)) Debug.Log("[Luna Build Scope] Luna's settings had drifted from the synced scope; restored them.");
    }

    // ── Stale Luna cache ──
    // A build that dies part-way leaves LunaTemp/stage1-3 and luna-cache.json (plus the plugin's in-memory copy of it)
    // out of step, and every later build trips on the leftovers: "EPERM ... unlink stage2/js/rootPaths.json",
    // "EBUSY ... rmdir stage2/js", "UNKNOWN ... open .buildID", "Please make sure to have assets at first stage", or
    // "Failed to compress sound" for a clip that is fine. Deleting those outputs and reloading the plugin heals it;
    // Luna regenerates them on the next build.
    private static readonly Regex StaleCacheErrors = new Regex(
        @"Error: (?:EPERM|EBUSY|ENOENT|UNKNOWN)\b[^\r\n]*LunaTemp|make sure to have assets at first stage|Sound Compression Failed", RegexOptions.Compiled);

    private static void AfterBuild()
    {
        string log;
        try
        {
            using (var reader = new StreamReader(new FileStream(Path.Combine(Root, "LunaTemp", "luna.log"), FileMode.Open, FileAccess.Read, FileShare.ReadWrite)))
                log = reader.ReadToEnd();
        }
        catch { return; }
        var m = StaleCacheErrors.Match(log);
        if (!m.Success) return;
        // stage4 is Luna's packaged output. A lock there is held inside the Unity process itself (seen on
        // stage4/develop/engine/unity/bin/bridge.js after a preview); clearing caches can't release it, a restart does.
        if (m.Value.Contains(@"\stage4\") || m.Value.Contains("/stage4/"))
        {
            Debug.LogError("[Luna Cache] The build failed because Unity itself still holds a file of the previous build open:\n" + m.Value +
                           "\nSave your work and restart Unity, then build again. (Clearing the cache can't release it.)");
            return;
        }
        ResetLunaCache("the last build failed with: " + m.Value);
    }

    public static void ResetLunaCache(string why)
    {
        string temp = Path.Combine(Root, "LunaTemp");
        var failed = new List<string>();
        foreach (var name in new[] { "stage1", "stage2", "stage3", "luna-cache.json" })
        {
            string path = Path.Combine(temp, name);
            try
            {
                if (Directory.Exists(path)) Directory.Delete(path, true);
                else if (File.Exists(path)) File.Delete(path);
            }
            catch (Exception e) { failed.Add(name + " (" + e.Message + ")"); }
        }
        if (failed.Count > 0)
        {
            Debug.LogError("[Luna Cache] Could not clear " + string.Join(", ", failed) + ". Close whatever has LunaTemp open, then run Playable/Luna/Reset Luna Cache.");
            return;
        }
        Debug.LogWarning("[Luna Cache] Reset LunaTemp (stage1-3, luna-cache.json) because " + why + ". Build again; the next build re-processes every asset.");
        // The plugin keeps luna-cache.json in memory; only a reload makes it forget the deleted outputs.
        EditorUtility.RequestScriptReload();
    }

    // ── helpers ──

    private static JArray Array(JObject root, params string[] path)
    {
        JToken cur = root;
        foreach (var p in path) cur = cur?[p];
        return cur as JArray;
    }

    private static string Serialize(JObject config, string original)
    {
        var sb = new StringBuilder();
        using (var sw = new StringWriter(sb))
        using (var writer = new JsonTextWriter(sw) { Formatting = Formatting.Indented, Indentation = 4, IndentChar = ' ' })
            config.WriteTo(writer);
        string newline = original.Contains("\r\n") ? "\r\n" : "\n";
        string text = sb.ToString().Replace("\r\n", "\n").Replace("\n", newline);
        return original.EndsWith("\n") ? text + newline : text;
    }

    private static bool IsLunaScene(string path)
    {
        if (string.IsNullOrEmpty(path) || !File.Exists(ConfigPath)) return false;
        try { return Array(JObject.Parse(File.ReadAllText(ConfigPath)), "unity", "scenes")?.Any(t => t.ToString() == path) == true; }
        catch { return false; }
    }
}

/// <summary>
/// Saves the Luna scene, syncs the build scope and runs Playworks Plugin's own "Build &amp; Estimate size", then reports
/// Luna's total against the 4 MB target. Luna's estimate button is internal, so it is found by reflection.
/// </summary>
public static class LunaSizeEstimate
{
    public const double TargetBytes = 4 * 1024 * 1024;
    private static string Root => Directory.GetParent(Application.dataPath).FullName;
    private static string StatsPath => Path.Combine(Root, "LunaTemp", "stage3", "stats.json");
    private static string LogPath => Path.Combine(Root, "LunaTemp", "luna.log");

#pragma warning disable 0649
    [Serializable] private class Totals { public double total, scripts, other; }
#pragma warning restore 0649

    public static bool Running { get; private set; }

    /// <summary>Starts an estimate; <paramref name="done"/> gets (message, under target). False when it can't start.</summary>
    public static bool Run(Action<string, bool> done)
    {
        if (Running) return false;
        if (EditorApplication.isPlayingOrWillChangePlaymode) { done("Exit Play mode to estimate the Luna size.", false); return false; }
        // Two pipelines share LunaTemp and delete each other's files (EPERM on unlink).
        if (LunaBuildScope.LunaBuildRunning()) { done("A Luna build is already running - wait for it to finish.", false); return false; }
        var estimate = FindEstimateMethod();
        if (estimate == null) { done("Playworks Plugin's estimate wasn't found - press 'Build & Estimate size' in the Playworks Plugin window.", false); return false; }

        // Luna asks to save modified scenes in a modal dialog; save the scene it builds first.
        for (int i = 0; i < SceneManager.sceneCount; i++)
        {
            var scene = SceneManager.GetSceneAt(i);
            if (scene.isDirty && !string.IsNullOrEmpty(scene.path)) EditorSceneManager.SaveScene(scene);
        }
        LunaBuildScope.Sync(false);

        DateTime before = File.Exists(StatsPath) ? File.GetLastWriteTime(StatsPath) : DateTime.MinValue;
        double giveUp = EditorApplication.timeSinceStartup + 20 * 60, settle = 0;
        Running = true;
        try { estimate.Invoke(null, null); }
        catch (Exception e) { Running = false; done("Luna estimate failed to start: " + (e.InnerException ?? e).Message, false); return false; }

        bool sawBuild = false;
        double nextCheck = 0;
        void Poll()
        {
            if (!(File.Exists(StatsPath) && File.GetLastWriteTime(StatsPath) > before))
            {
                if (EditorApplication.timeSinceStartup < nextCheck) return;
                nextCheck = EditorApplication.timeSinceStartup + 2;
                bool running = LunaBuildScope.LunaBuildRunning();
                sawBuild |= running;
                // Luna's process ended without new stats: the build failed (LunaBuildScope heals a stale cache).
                bool failed = sawBuild && !running;
                if (!failed && EditorApplication.timeSinceStartup < giveUp) return;
                Stop();
                done("Luna build failed - see LunaTemp/luna.log or Playworks Plugin's log.", false);
                return;
            }
            // luna.log gets the full totals (Scripts/Other) a moment after stats.json.
            if (settle == 0) settle = EditorApplication.timeSinceStartup + 90;
            bool logReady = File.Exists(LogPath) && File.GetLastWriteTime(LogPath) >= File.GetLastWriteTime(StatsPath) && ReadTotals() != null;
            if (!logReady && EditorApplication.timeSinceStartup < settle) return;
            Stop();
            var t = ReadTotals();
            if (t == null || t.total <= 0) { done("Luna estimate finished, but its totals weren't found in LunaTemp/luna.log.", true); return; }
            bool ok = t.total < TargetBytes;
            done($"Luna estimate: {t.total / 1048576d:F2} MB (scripts {t.scripts / 1048576d:F2} MB, assets {(t.total - t.scripts - t.other) / 1048576d:F2} MB) - " +
                 (ok ? "under the 4 MB target." : "OVER the 4 MB target."), ok);
        }
        void Stop() { EditorApplication.update -= Poll; Running = false; }
        EditorApplication.update += Poll;
        return true;
    }

    private static Totals ReadTotals()
    {
        try
        {
            using (var reader = new StreamReader(new FileStream(LogPath, FileMode.Open, FileAccess.Read, FileShare.ReadWrite)))
                for (string line; (line = reader.ReadLine()) != null;)
                    if (line.StartsWith("{\"types\"")) return JsonUtility.FromJson<Totals>(line);
        }
        catch { }
        return null;
    }

    private static MethodInfo FindEstimateMethod()
    {
        const BindingFlags F = BindingFlags.Static | BindingFlags.NonPublic | BindingFlags.Public;
        foreach (var asm in AppDomain.CurrentDomain.GetAssemblies().Where(a => a.GetName().Name == "EditorScripts"))
        {
            Type[] types;
            try { types = asm.GetTypes(); }
            catch (ReflectionTypeLoadException e) { types = e.Types.Where(t => t != null).ToArray(); }
            foreach (var t in types)
                if (t.GetFields(F).Any(f => f.FieldType.Name == "Stats"))
                {
                    var m = t.GetMethod("​", F, null, Type.EmptyTypes, null); // the obfuscated "Build & Estimate size"
                    if (m != null) return m;
                }
        }
        return null;
    }
}
