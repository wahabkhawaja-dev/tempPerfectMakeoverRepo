#if UNITY_EDITOR
using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.IO;
using System.Linq;
using UnityEditor;
using UnityEditor.Compilation;

/// <summary>Compile generated code outside Assets before touching working playable assets.</summary>
[InitializeOnLoad]
public static class PlayableBuildSafety
{
    const string PendingScene = "Playable.PendingSceneBuild";
    const string WaitingForReload = "Playable.PendingSceneBuild.WaitingForReload";
    [Serializable] class SceneRequest { public string prefab; public string inner; public string script; }

    static PlayableBuildSafety()
    {
        // A queued request survives the domain reload that installs its generated class.
        SessionState.SetBool(WaitingForReload, false);
        EditorApplication.update += FinishScene;
    }

    public static void CheckScript(string text, string className)
    {
        string directory = Path.GetFullPath("Library/PlayableBuildPreflight/" + Guid.NewGuid().ToString("N"));
        Directory.CreateDirectory(directory);
        string source = Path.Combine(directory, className + ".cs");
        File.WriteAllText(source, text);
        CheckSources(new[] { source }, directory);
    }

    public static void CheckSources(IEnumerable<string> sources, string directory)
    {
        directory = Path.GetFullPath(directory);
        Directory.CreateDirectory(directory);
        string runtime = Path.Combine(EditorApplication.applicationContentsPath, "NetCoreRuntime", "dotnet.exe");
        string compiler = Path.Combine(EditorApplication.applicationContentsPath, "DotNetSdkRoslyn", "csc.dll");
        if (!File.Exists(runtime) || !File.Exists(compiler))
            throw new InvalidOperationException("Unity's bundled C# compiler is missing. Generated files were not changed.");
        var assembly = CompilationPipeline.GetAssemblies().First(a => a.name == "Assembly-CSharp");
        var references = assembly.allReferences.Concat(new[] { Path.GetFullPath(assembly.outputPath) })
            .Where(File.Exists).Distinct().ToArray();
        var args = new List<string> { "-target:library", "-nologo", "-warn:0", "-nostdlib+",
            "-out:\"" + Path.Combine(directory, "Preflight.dll") + "\"",
            "-define:" + string.Join(";", assembly.defines) };
        args.AddRange(references.Select(p => "-r:\"" + Path.GetFullPath(p) + "\""));
        args.AddRange(sources.Select(source => "\"" + Path.GetFullPath(source) + "\""));
        string response = Path.Combine(directory, "compile.rsp");
        File.WriteAllLines(response, args);
        var start = new ProcessStartInfo(runtime, "\"" + compiler + "\" @\"" + response + "\"") {
            UseShellExecute = false, CreateNoWindow = true, RedirectStandardOutput = true, RedirectStandardError = true
        };
        using (var process = Process.Start(start))
        {
            var output = process.StandardOutput.ReadToEndAsync();
            var error = process.StandardError.ReadToEndAsync();
            if (!process.WaitForExit(60000)) { process.Kill(); throw new InvalidOperationException("Generated script compilation timed out; existing assets were preserved."); }
            string diagnostics = output.GetAwaiter().GetResult() + error.GetAwaiter().GetResult();
            File.WriteAllText(Path.Combine(directory, "diagnostics.txt"), diagnostics);
            if (process.ExitCode != 0) throw new InvalidOperationException("Generated script failed compilation; existing assets were preserved.\n" + diagnostics);
        }
    }

    public static void QueueScene(string prefab, string inner, string script, bool scriptChanged)
    {
        SessionState.SetString(PendingScene, UnityEngine.JsonUtility.ToJson(new SceneRequest { prefab = prefab, inner = inner, script = script }));
        SessionState.SetBool(WaitingForReload, scriptChanged);
    }

    static void FinishScene()
    {
        if (EditorApplication.isCompiling || EditorApplication.isUpdating || EditorApplication.isPlayingOrWillChangePlaymode) return;
        string json = SessionState.GetString(PendingScene, "");
        if (string.IsNullOrEmpty(json)) return;
        if (SessionState.GetBool(WaitingForReload, false)) return;
        var request = UnityEngine.JsonUtility.FromJson<SceneRequest>(json);
        var script = AssetDatabase.LoadAssetAtPath<MonoScript>(request.script);
        if (script == null || script.GetClass() == null) return;
        if (!string.IsNullOrEmpty(request.inner))
        {
            var inner = AssetDatabase.LoadAssetAtPath<UnityEngine.GameObject>(request.inner);
            if (inner == null || inner.GetComponentInChildren<LevelData>(true) == null) return;
        }
        SessionState.EraseString(PendingScene);
        try { PlayableEditorMenu.SwapSceneLevel(request.prefab, request.inner); }
        catch (Exception e) { UnityEngine.Debug.LogError("[Playable] Built assets are ready, but scene placement failed: " + e); }
    }

    public sealed class AssetBackup
    {
        readonly Dictionary<string, byte[]> files = new Dictionary<string, byte[]>();
        public AssetBackup(params string[] paths)
        {
            foreach (string path in paths)
            foreach (string file in new[] { path, path + ".meta" })
                files[file] = File.Exists(file) ? File.ReadAllBytes(file) : null;
        }
        public void Restore()
        {
            foreach (var item in files)
                if (item.Value != null) File.WriteAllBytes(item.Key, item.Value);
                else if (File.Exists(item.Key)) File.Delete(item.Key);
            AssetDatabase.Refresh();
        }
    }
}
#endif
