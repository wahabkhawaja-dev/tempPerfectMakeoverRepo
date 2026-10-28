using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Text.RegularExpressions;

// Text-level fixes for Force-Text Unity YAML (prefabs, scenes, controllers, materials...) so an
// imported asset never carries a reference that can't resolve in this project. No Unity
// dependency so it can be tested outside the editor.
public static class LunaYamlPatcher
{
    public static readonly Regex GuidRef = new Regex(@"guid:\s*([0-9a-fA-F]{32})", RegexOptions.Compiled);
    private static readonly Regex FullRef = new Regex(@"\{fileID:\s*(-?\d+),\s*guid:\s*([0-9a-fA-F]{32}),\s*type:\s*(\d+)\}", RegexOptions.Compiled);
    private static readonly Regex DocHeader = new Regex(@"^--- !u!(\d+) &(-?\d+)( stripped)?[ \t]*\r?$", RegexOptions.Multiline | RegexOptions.Compiled);

    /// <summary>Keys whose references must never be nulled: nested-prefab plumbing and script bindings
    /// (a nulled m_Script is itself a "missing script"; components are removed instead).</summary>
    private static readonly string[] ProtectedKeys =
        { "m_SourcePrefab:", "m_Script:", "m_CorrespondingSourceObject:", "m_PrefabInstance:", "m_PrefabAsset:", "m_ParentPrefab:", "m_PrefabParentObject:", "- target:", "target:" };

    /// <summary>Unity's built-in resources (default sprite material, UI sprites, fonts...) use GUIDs starting with sixteen zeros.</summary>
    public static bool IsBuiltinGuid(string guid) =>
        guid.StartsWith("0000000000000000", StringComparison.Ordinal);

    public static bool IsYaml(string text) => text.TrimStart().StartsWith("%YAML", StringComparison.Ordinal);

    public static HashSet<string> ReferencedGuids(string yaml)
    {
        var set = new HashSet<string>(StringComparer.OrdinalIgnoreCase);
        // Audio mixer parameter IDs and sprite bone GUIDs identify local records, not assets.
        // Only a PPtr (fileID + guid + type) expresses an external asset dependency.
        foreach (Match m in FullRef.Matches(yaml))
            if (!IsBuiltinGuid(m.Groups[2].Value)) set.Add(m.Groups[2].Value.ToLowerInvariant());
        return set;
    }

    /// <summary>Rewrites guid references (e.g. a parent script GUID → the same class' GUID in this project).</summary>
    public static string RemapGuids(string yaml, IDictionary<string, string> map, out int count)
    {
        int c = 0;
        string result = yaml;
        if (map != null && map.Count > 0)
        {
            result = FullRef.Replace(yaml, m =>
            {
                if (!map.TryGetValue(m.Groups[2].Value.ToLowerInvariant(), out string to)) return m.Value;
                c++;
                return GuidRef.Replace(m.Value, "guid: " + to);
            });
        }
        count = c;
        return result;
    }

    /// <summary>
    /// Removes MonoBehaviour components (prefabs/scenes only) whose script GUID is not usable here, together
    /// with the owning GameObject's component entry, and nulls any local reference to them. Leaves
    /// "stripped" nested-prefab placeholders alone — the nested prefab asset is patched on its own.
    /// </summary>
    public static string StripUnusableComponents(string yaml, Func<string, bool> isScriptUsable, List<string> removedLog)
    {
        var headers = DocHeader.Matches(yaml).Cast<Match>().ToList();
        if (headers.Count == 0) return yaml;

        var removedIds = new HashSet<string>();
        var ownerOf = new Dictionary<string, string>();
        var removeRanges = new List<(int start, int end)>();

        for (int i = 0; i < headers.Count; i++)
        {
            var h = headers[i];
            if (h.Groups[1].Value != "114" || h.Groups[3].Success) continue;
            int start = h.Index;
            int end = i + 1 < headers.Count ? headers[i + 1].Index : yaml.Length;
            string doc = yaml.Substring(start, end - start);

            var script = Regex.Match(doc, @"^\s*m_Script:\s*\{fileID:\s*(-?\d+),\s*guid:\s*([0-9a-fA-F]{32})", RegexOptions.Multiline);
            if (!script.Success) continue;
            var owner = Regex.Match(doc, @"^\s*m_GameObject:\s*\{fileID:\s*(-?\d+)\}", RegexOptions.Multiline);
            if (!owner.Success || owner.Groups[1].Value == "0") continue; // not a component (e.g. ScriptableObject) — never delete

            string guid = script.Groups[2].Value.ToLowerInvariant();
            if (IsBuiltinGuid(guid) || isScriptUsable(guid)) continue;

            string id = h.Groups[2].Value;
            removedIds.Add(id);
            ownerOf[id] = owner.Groups[1].Value;
            removeRanges.Add((start, end));
            removedLog?.Add($"component &{id} (script guid {guid}) on GameObject &{owner.Groups[1].Value}");
        }
        if (removedIds.Count == 0) return yaml;

        var sb = new StringBuilder(yaml);
        foreach (var r in removeRanges.OrderByDescending(r => r.start)) sb.Remove(r.start, r.end - r.start);
        string result = sb.ToString();

        foreach (var id in removedIds)
        {
            result = Regex.Replace(result, @"^[ \t]*- component: \{fileID: " + Regex.Escape(id) + @"\}[ \t]*\r?\n", "", RegexOptions.Multiline);
            result = Regex.Replace(result, @"\{fileID: " + Regex.Escape(id) + @"\}", "{fileID: 0}");
        }
        return result;
    }

    /// <summary>Replaces references to assets that can't resolve here with {fileID: 0} so nothing shows as "Missing".</summary>
    public static string NullUnresolvedReferences(string yaml, Func<string, bool> isResolvable, List<string> nulledLog)
    {
        var lines = yaml.Split('\n');
        bool changed = false;
        for (int i = 0; i < lines.Length; i++)
        {
            string line = lines[i];
            if (line.IndexOf("guid:", StringComparison.Ordinal) < 0) continue;
            string trimmed = line.TrimStart();
            if (ProtectedKeys.Any(k => trimmed.StartsWith(k, StringComparison.Ordinal))) continue;

            string replaced = FullRef.Replace(line, m =>
            {
                string guid = m.Groups[2].Value.ToLowerInvariant();
                if (IsBuiltinGuid(guid) || isResolvable(guid)) return m.Value;
                nulledLog?.Add($"{trimmed.Split(':')[0]} -> guid {guid}");
                return "{fileID: 0}";
            });
            if (!ReferenceEquals(replaced, line) && replaced != line) { lines[i] = replaced; changed = true; }
        }
        return changed ? string.Join("\n", lines) : yaml;
    }
}
