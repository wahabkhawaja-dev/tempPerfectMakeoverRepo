#if UNITY_EDITOR
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text.RegularExpressions;
using UnityEditor;
using UnityEditor.Compilation;
using UnityEngine;

// The journal is outside Assets so backup prefabs cannot be discovered/exported by Luna.
// It also survives the domain reload caused by importing new scripts.
[InitializeOnLoad]
internal static class PrefabImportTransaction
{
    [Serializable] internal sealed class Entry
    {
        public string path;
        public bool existed, metaExisted;
    }
    [Serializable] internal sealed class Journal
    {
        public List<Entry> entries = new List<Entry>();
        public List<string> levelPaths = new List<string>();
        public bool writing = true;
    }

    [Serializable] internal sealed class Result
    {
        public string logDir, message;
        public List<string> levelPaths = new List<string>();
    }

    static string Root => Directory.GetParent(Application.dataPath).FullName;
    static string Pending => Path.Combine(Root, "Library/PrefabImporter/pending.txt");
    internal static string ResultPath => Path.Combine(Root, "Library/PrefabImporter/last_result.json");
    static double nextValidationPoll;

    internal static Result ReadLastResult() => File.Exists(ResultPath)
        ? JsonUtility.FromJson<Result>(File.ReadAllText(ResultPath)) : null;

    static void SaveResult(string logDir, string message, IEnumerable<string> levels)
    {
        Directory.CreateDirectory(Path.GetDirectoryName(ResultPath));
        File.WriteAllText(ResultPath, JsonUtility.ToJson(new Result {
            logDir = logDir, message = message, levelPaths = levels.ToList()
        }, true));
    }

    static PrefabImportTransaction()
    {
        CompilationPipeline.assemblyCompilationFinished += (assembly, messages) =>
        {
            if (!File.Exists(Pending)) return;
            var errors = messages.Where(m => m.type == CompilerMessageType.Error).Select(m => m.message).ToArray();
            if (errors.Length > 0)
                File.AppendAllLines(Path.Combine(File.ReadAllText(Pending), "compilation_errors.txt"), errors);
        };
        CompilationPipeline.compilationFinished += _ => EditorApplication.delayCall += CompleteIfReady;
        EditorApplication.delayCall += CompleteIfReady;
        EditorApplication.update += PollPendingValidation;
    }

    static void PollPendingValidation()
    {
        // A refresh/domain reload can consume a delayCall. Keep an independent, throttled
        // update hook so an unfocused editor still completes a pending transaction.
        if (EditorApplication.timeSinceStartup < nextValidationPoll) return;
        nextValidationPoll = EditorApplication.timeSinceStartup + 1;
        if (File.Exists(Pending)) CompleteIfReady();
    }

    internal static string AssetPath(string path)
    {
        string full = Path.GetFullPath(Path.Combine(Root, path));
        if (!full.StartsWith(Path.GetFullPath(Application.dataPath) + Path.DirectorySeparatorChar, StringComparison.OrdinalIgnoreCase))
            throw new InvalidOperationException("Import/undo path is outside Assets: " + path);
        return full;
    }

    internal static void Begin(string logDir, IEnumerable<string> paths, IEnumerable<string> levels = null)
    {
        if (File.Exists(Pending)) throw new InvalidOperationException("The preceding import is still being validated.");
        var journal = new Journal();
        journal.levelPaths.AddRange(levels ?? Enumerable.Empty<string>());
        Directory.CreateDirectory(logDir);
        foreach (string path in paths.Distinct(StringComparer.OrdinalIgnoreCase))
        {
            string full = AssetPath(path);
            var entry = new Entry { path = path, existed = File.Exists(full), metaExisted = File.Exists(full + ".meta") };
            string backup = Path.Combine(logDir, "backup", path);
            Directory.CreateDirectory(Path.GetDirectoryName(backup));
            if (entry.existed) File.Copy(full, backup, true);
            if (entry.metaExisted) File.Copy(full + ".meta", backup + ".meta", true);
            journal.entries.Add(entry);
        }
        File.WriteAllText(Path.Combine(logDir, "transaction.json"), JsonUtility.ToJson(journal, true));
        Directory.CreateDirectory(Path.GetDirectoryName(Pending));
        File.WriteAllText(Pending, logDir);
        SaveResult(logDir, "Import is writing files. Compilation and reference validation are pending.", journal.levelPaths);
    }

    internal static void FinishWriting(string logDir)
    {
        var journal = Read(logDir);
        journal.writing = false;
        File.WriteAllText(Path.Combine(logDir, "transaction.json"), JsonUtility.ToJson(journal, true));
        EditorApplication.delayCall += CompleteIfReady;
    }

    static Journal Read(string logDir) => JsonUtility.FromJson<Journal>(File.ReadAllText(Path.Combine(logDir, "transaction.json")));

    internal static void Rollback(string logDir)
    {
        var journal = Read(logDir);
        // Validate every path before restoring or deleting anything.
        foreach (var entry in journal.entries) AssetPath(entry.path);
        AssetDatabase.StartAssetEditing();
        try
        {
            foreach (var entry in journal.entries)
            {
                string full = AssetPath(entry.path);
                string backup = Path.Combine(logDir, "backup", entry.path);
                if (entry.existed) File.Copy(backup, full, true);
                else if (File.Exists(full)) File.Delete(full);
                if (entry.metaExisted) File.Copy(backup + ".meta", full + ".meta", true);
                else if (File.Exists(full + ".meta")) File.Delete(full + ".meta");
                string dir = Path.GetDirectoryName(full);
                while (dir.StartsWith(Path.GetFullPath(Application.dataPath) + Path.DirectorySeparatorChar, StringComparison.OrdinalIgnoreCase)
                    && Directory.Exists(dir) && !Directory.EnumerateFileSystemEntries(dir).Any())
                {
                    Directory.Delete(dir);
                    if (File.Exists(dir + ".meta")) File.Delete(dir + ".meta");
                    dir = Path.GetDirectoryName(dir);
                }
            }
            File.WriteAllText(Path.Combine(logDir, "rolled_back.txt"), "Restored original assets and metadata.");
            if (File.Exists(Path.Combine(logDir, "manifest.txt")))
                File.Move(Path.Combine(logDir, "manifest.txt"), Path.Combine(logDir, "manifest.undone.txt"));
            if (File.Exists(Pending) && File.ReadAllText(Pending) == logDir) File.Delete(Pending);
            SaveResult(logDir, "Import undone or rolled back. Original files and metadata were restored.", Enumerable.Empty<string>());
        }
        finally { AssetDatabase.StopAssetEditing(); }
        AssetDatabase.Refresh(ImportAssetOptions.ForceUpdate);
    }

    static void CompleteIfReady()
    {
        if (!File.Exists(Pending)) return;
        if (EditorApplication.isCompiling || EditorApplication.isUpdating)
        {
            EditorApplication.delayCall += CompleteIfReady;
            return;
        }
        string logDir = File.ReadAllText(Pending);
        try
        {
            var journal = Read(logDir);
            var errors = new List<string>();
            if (journal.writing) errors.Add("Import was interrupted before all files were written.");
            if (EditorUtility.scriptCompilationFailed || File.Exists(Path.Combine(logDir, "compilation_errors.txt")))
                errors.Add("Imported scripts did not compile. See the Unity Console and compilation_errors.txt.");
            if (errors.Count == 0)
                foreach (var entry in journal.entries) ValidateAsset(entry.path, errors);
            if (errors.Count > 0)
            {
                File.WriteAllLines(Path.Combine(logDir, "validation_errors.txt"), errors);
                Rollback(logDir);
                SaveResult(logDir, "Import rolled back:\n" + string.Join("\n", errors.Take(20)) + "\nFull details: " + Path.Combine(logDir, "validation_errors.txt"), Enumerable.Empty<string>());
                Debug.LogError("[Prefab Importer] Import rolled back: " + string.Join("\n", errors.Take(20)));
                return;
            }
            File.WriteAllText(Path.Combine(logDir, "validated.txt"), "Compilation and serialized asset references passed validation.");
            File.Delete(Pending);
            SaveResult(logDir, "Import complete. Compilation and serialized references passed validation.", journal.levelPaths);
            Debug.Log("[Prefab Importer] Import validated: compilation and serialized references passed. " + logDir);
        }
        catch (Exception e)
        {
            // Preserve the journal if validation/rollback itself fails, so recovery remains possible.
            Debug.LogException(e);
            SaveResult(logDir, "Import validation could not finish: " + e.Message + "\nRecovery journal: " + logDir, Enumerable.Empty<string>());
        }
    }

    internal static void ValidateAsset(string path, List<string> errors)
    {
        string full = AssetPath(path);
        foreach (string text in new[] { File.ReadAllText(full + ".meta"), ReadSerializedText(full) })
            foreach (string guid in LunaYamlPatcher.ReferencedGuids(text))
                if (string.IsNullOrEmpty(AssetDatabase.GUIDToAssetPath(guid))) errors.Add(path + ": missing GUID " + guid);
        if (path.EndsWith(".cs", StringComparison.OrdinalIgnoreCase)) return;
        var assets = AssetDatabase.LoadAllAssetsAtPath(path);
        if (path.EndsWith(".prefab", StringComparison.OrdinalIgnoreCase) && assets.All(a => !(a is GameObject)))
            errors.Add(path + ": prefab failed to load.");
        foreach (var asset in assets)
        {
            if (asset == null) continue;
            if (asset is Shader shader && ShaderUtil.ShaderHasError(shader))
                errors.Add(path + ": imported shader has compiler errors.");
            if (asset is GameObject root)
            {
                foreach (var transform in root.GetComponentsInChildren<Transform>(true))
                {
                    if (GameObjectUtility.GetMonoBehavioursWithMissingScriptCount(transform.gameObject) > 0)
                        errors.Add(path + ": missing script on " + transform.name);
                    foreach (var component in transform.GetComponents<Component>())
                        if (component != null) ValidateReferences(component, path, errors);
                }
            }
            else ValidateReferences(asset, path, errors);
        }
    }

    static string ReadSerializedText(string full)
    {
        using (var reader = new StreamReader(full))
        {
            char[] prefix = new char[5];
            if (reader.Read(prefix, 0, prefix.Length) != 5 || new string(prefix) != "%YAML") return "";
        }
        return File.ReadAllText(full);
    }

    static void ValidateReferences(UnityEngine.Object obj, string path, List<string> errors)
    {
        var serialized = new SerializedObject(obj);
        var prop = serialized.GetIterator();
        while (prop.Next(true))
            if (prop.propertyType == SerializedPropertyType.ObjectReference && prop.objectReferenceValue == null
                && prop.objectReferenceInstanceIDValue != 0 && !IsPrefabOverrideHistory(obj, prop.propertyPath))
                errors.Add(path + ": " + obj.name + "." + prop.propertyPath + " has a missing object/sub-asset reference.");
        serialized.Dispose();
    }

    internal static bool IsPrefabOverrideHistory(UnityEngine.Object obj, string propertyPath)
    {
        // LoadAllAssetsAtPath exposes native PrefabInstance records as plain UnityEngine.Object.
        // Removed-object records and obsolete override targets are historical authoring data;
        // Unity legitimately retains them after their source object has been removed. Validate
        // the effective hierarchy/components, rather than rejecting this historical bookkeeping.
        // Keep checking every live component reference and the instance's m_SourcePrefab binding.
        return obj != null && obj.GetType() == typeof(UnityEngine.Object) &&
            Regex.IsMatch(propertyPath, @"^m_Modification\.(?:m_Modifications\.Array\.data\[\d+\]\.target|m_Removed(?:GameObjects|Components)\.Array\.data\[\d+\])$");
    }
}
#endif
