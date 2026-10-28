using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text.RegularExpressions;

// Decides, for every parent script an import touches, whether it is copied (sanitized), pulled in as a
// code-only dependency, or blocked — and makes that decision stable across the whole batch. No Unity
// dependency so it can be exercised outside the editor.
//
// Prefab GUID walking only finds scripts attached as components. Level scripts also use helper classes
// by NAME (no GUID anywhere), so this resolves code dependencies too: a referenced parent type that
// doesn't exist here pulls its declaring script into the import; if that script is SDK/monetization
// code (blocked), standalone calls into it are stripped and anything still depending on it is blocked
// (level scripts are never blocked — they're reported instead, since blocking would drop the level).
public static class LunaScriptPlanner
{
    public static readonly string[] DefaultBlockedFolders =
    {
        "Assets/AdsScripts", "Assets/Adjust", "Assets/Appmetrica", "Assets/Firebase", "Assets/GameAnalytics",
        "Assets/GoogleMobileAds", "Assets/MaxSdk", "Assets/Parse", "Assets/ExternalDependencyManager",
        "Assets/GeneratedLocalRepo", "Assets/Plugins/Android", "Assets/Plugins/iOS",
        "Assets/_CORE/Scripts/Coins", "Assets/_CORE/Scripts/Shop", "Assets/_CORE/Scripts/Timer",
        "Assets/_CORE/Scripts/Notification", "Assets/_CORE/Scripts/Data Saving",
        "Assets/_CORE/Scripts/Play Assest Dilevry", "Assets/_CORE/Scripts/ApplicationConfig",
        "Assets/_CORE/Third Party/NiceVibrations",
    };

    /// <summary>Identifiers that mark a script as ads/IAP code — no playable use, blocked outright.</summary>
    private static readonly Regex MonetizationIdentifiers = new Regex(
        @"\b(?:MaxSdk\w*|IronSource\w*|Appodeal\w*|AdRequest|RewardedAd|InterstitialAd|BannerView|AppOpenAd|IAPButton|IStoreListener|CodelessIAPStoreListener)\b",
        RegexOptions.Compiled);

    private static readonly string[] MonetizationNamespaces = { "GoogleMobileAds", "UnityEngine.Purchasing", "UnityEngine.Advertisements" };

    public enum Outcome { Import, Block }

    public sealed class ScriptPlan
    {
        public string SourceRel;
        public bool ExistsHere;          // same GUID already in this project (kept unless Replace is chosen)
        public bool IsCodeDependency;    // pulled in by name, not by any prefab GUID
        public bool ReplaceRecommended;  // an existing-here level script that imported code needs newer members from
        public bool IsLevelScript;
        public Outcome Outcome = Outcome.Import;
        public string BlockReason;
        public string SourceText;
        public LunaSanitizeResult Sanitized;
        public HashSet<string> DeclaredTypes = new HashSet<string>(StringComparer.Ordinal);
    }

    public sealed class Input
    {
        public string SourceProjectRoot;
        /// <summary>Every .cs under the source Assets folder (source-relative), used to find where a type lives.</summary>
        public IList<string> AllSourceScripts;
        /// <summary>Scripts reached through prefab GUIDs that don't exist here.</summary>
        public IList<string> NewScripts;
        /// <summary>Existing-here scripts the user chose to replace with the sanitized parent version.</summary>
        public IList<string> ReplaceScripts = new List<string>();
        /// <summary>Scripts whose GUID or class already exists here — never pulled in as code dependencies.</summary>
        public Func<string, bool> SourceScriptExistsHere;
        public IList<string> BlockedFolders = DefaultBlockedFolders;
        public LunaSanitizeOptions SanitizeOptions;
        // The parent Makeover project prefixes shared types with CG_; adapt only verified local matches.
        public Func<string, string> TransformSource;
        /// <summary>Pull in (as replacements) existing level scripts whose members imported code needs.</summary>
        public bool AutoReplaceOutdatedLevelScripts = true;
        /// <summary>Scripts the user explicitly opted out of replacing — never auto-recommended.</summary>
        public ICollection<string> NeverReplace = new List<string>();
    }

    /// <summary>Hides types that are being replaced, so member checks don't compare against their outdated local version.</summary>
    private sealed class ExcludingCatalog : ILunaTypeCatalog
    {
        private readonly ILunaTypeCatalog inner;
        private readonly HashSet<string> excluded;
        public ExcludingCatalog(ILunaTypeCatalog inner, HashSet<string> excluded) { this.inner = inner; this.excluded = excluded; }
        public bool IsKnownType(string t) => inner != null && !excluded.Contains(t) && inner.IsKnownType(t);
        public bool HasMember(string t, string m) => inner != null && inner.HasMember(t, m);
        public bool TypeHasUpdate(string t) => inner != null && inner.TypeHasUpdate(t);
    }

    public sealed class Result
    {
        public readonly Dictionary<string, ScriptPlan> Scripts = new Dictionary<string, ScriptPlan>(StringComparer.OrdinalIgnoreCase);
        public readonly HashSet<string> UnavailableTypes = new HashSet<string>(StringComparer.Ordinal);
    }

    public static Result Plan(Input input)
    {
        var result = new Result();
        var replacedTypes = new HashSet<string>(StringComparer.Ordinal);
        var catalog = new ExcludingCatalog(input.SanitizeOptions.Catalog, replacedTypes);
        var textCache = new Dictionary<string, string>(StringComparer.OrdinalIgnoreCase);
        string Read(string rel)
        {
            if (!textCache.TryGetValue(rel, out var t))
            {
                try
                {
                    t = File.ReadAllText(Path.Combine(input.SourceProjectRoot, rel));
                    if (input.TransformSource != null) t = input.TransformSource(t);
                }
                catch { t = ""; }
                textCache[rel] = t;
            }
            return t;
        }

        // Where each top-level parent type is declared.
        var typeHome = new Dictionary<string, List<string>>(StringComparer.Ordinal);
        foreach (var rel in input.AllSourceScripts)
            foreach (var type in TopLevelTypes(LunaScriptSanitizer.Mask(Read(rel))))
            {
                if (!typeHome.TryGetValue(type, out var list)) typeHome[type] = list = new List<string>();
                list.Add(rel);
            }

        ScriptPlan Add(string rel, bool existsHere, bool codeDep)
        {
            if (result.Scripts.TryGetValue(rel, out var existing)) return existing;
            string text = Read(rel);
            string mask = LunaScriptSanitizer.Mask(text);
            var plan = new ScriptPlan
            {
                SourceRel = rel,
                ExistsHere = existsHere,
                IsCodeDependency = codeDep,
                SourceText = text,
                IsLevelScript = Regex.IsMatch(mask, @"\bclass\s+\w+\s*:\s*LevelData\b"),
            };
            plan.DeclaredTypes.UnionWith(TopLevelTypes(mask));
            plan.BlockReason = MonetizationReason(rel, mask, input.BlockedFolders);
            if (plan.BlockReason != null) plan.Outcome = Outcome.Block;
            if (existsHere) replacedTypes.UnionWith(plan.DeclaredTypes);
            result.Scripts[rel] = plan;
            return plan;
        }

        foreach (var rel in input.NewScripts) Add(rel, false, false);
        foreach (var rel in input.ReplaceScripts) Add(rel, true, false);

        for (int round = 0; round < 8; round++)
        {
            ResolveToFixpoint(input, result, catalog, typeHome, Read, Add);
            if (!input.AutoReplaceOutdatedLevelScripts) break;

            // Imported code calls members the local copy of a level script doesn't have yet → that local
            // copy is older than the parent's; recommend replacing it with the sanitized parent version.
            bool added = false;
            var needs = result.Scripts.Values
                .Where(p => p.Outcome == Outcome.Import && p.Sanitized != null)
                .SelectMany(p => p.Sanitized.MissingMembers.Select(mm => mm.Key))
                .Distinct().ToList();
            foreach (var type in needs)
            {
                if (!typeHome.TryGetValue(type, out var homes)) continue;
                foreach (var home in homes)
                {
                    if (result.Scripts.ContainsKey(home) || !input.SourceScriptExistsHere(home) || input.NeverReplace.Contains(home)) continue;
                    if (!Regex.IsMatch(LunaScriptSanitizer.Mask(Read(home)), @"\bclass\s+" + Regex.Escape(type) + @"\s*:\s*LevelData\b")) continue;
                    Add(home, true, false).ReplaceRecommended = true;
                    added = true;
                }
            }
            if (!added) break;
        }
        return result;
    }

    private static void ResolveToFixpoint(Input input, Result result, ILunaTypeCatalog catalog,
        Dictionary<string, List<string>> typeHome, Func<string, string> Read, Func<string, bool, bool, ScriptPlan> Add)
    {
        for (int pass = 0; pass < 12; pass++)
        {
            bool changed = false;

            var importedTypes = new HashSet<string>(result.Scripts.Values.Where(p => p.Outcome == Outcome.Import).SelectMany(p => p.DeclaredTypes), StringComparer.Ordinal);
            bool KnownHere(string type) => importedTypes.Contains(type) || catalog.IsKnownType(type);

            // Types referenced by imported code that nothing will provide after import.
            result.UnavailableTypes.Clear();

            foreach (var plan in result.Scripts.Values.Where(p => p.Outcome == Outcome.Import).ToList())
            {
                // Resolve code dependencies after removing disabled SDK/haptic calls. Otherwise
                // a removed Haptic() call drags the entire native vibration SDK into the plan.
                var preliminaryOptions = Clone(input.SanitizeOptions);
                preliminaryOptions.Catalog = catalog;
                preliminaryOptions.UnavailableTypes = null;
                string mask = LunaScriptSanitizer.Mask(LunaScriptSanitizer.Sanitize(plan.SourceText, preliminaryOptions).Text);
                foreach (var type in ReferencedTypes(mask))
                {
                    if (plan.DeclaredTypes.Contains(type) || KnownHere(type) || !typeHome.TryGetValue(type, out var homes)) continue;

                    var candidate = homes.FirstOrDefault(h =>
                        !result.Scripts.ContainsKey(h) && !input.SourceScriptExistsHere(h) &&
                        MonetizationReason(h, LunaScriptSanitizer.Mask(Read(h)), input.BlockedFolders) == null);
                    if (candidate != null)
                    {
                        Add(candidate, false, true);
                        changed = true;
                    }
                    else
                    {
                        result.UnavailableTypes.Add(type);
                    }
                }
            }
            if (changed) continue; // re-evaluate with the newly added dependencies

            // Sanitize with the final unavailable set: standalone statements into missing types are stripped.
            foreach (var plan in result.Scripts.Values.Where(p => p.Outcome == Outcome.Import))
            {
                var opts = Clone(input.SanitizeOptions);
                opts.Catalog = catalog;
                opts.UnavailableTypes = result.UnavailableTypes;
                foreach (var type in result.UnavailableTypes)
                    opts.StripCallPatterns.Add(@"(?<![\.\w])" + Regex.Escape(type) + @"\s*\.");
                plan.Sanitized = LunaScriptSanitizer.Sanitize(plan.SourceText, opts);

                // A secondary type this project already defines would be a duplicate-definition compile error.
                if (!plan.ExistsHere)
                {
                    foreach (var dup in plan.DeclaredTypes.Where(catalog.IsKnownType).ToList())
                    {
                        plan.Sanitized.Text = LunaScriptSanitizer.RemoveTopLevelType(plan.Sanitized.Text, dup);
                        plan.Sanitized.Warnings.Add($"'{dup}' already exists in this project, so the parent's copy in this file was dropped (this project's version is used).");
                    }
                }

                if (plan.IsLevelScript) continue;
                string sanitizedMask = LunaScriptSanitizer.Mask(plan.Sanitized.Text);
                string still = ReferencedTypes(sanitizedMask).FirstOrDefault(t => result.UnavailableTypes.Contains(t));
                if (still != null)
                {
                    plan.Outcome = Outcome.Block;
                    plan.BlockReason = $"depends on '{still}', which only exists in SDK/monetization code";
                    plan.Sanitized = null;
                    changed = true;
                }
            }
            if (!changed) break;
        }
    }

    private static LunaSanitizeOptions Clone(LunaSanitizeOptions o) => new LunaSanitizeOptions
    {
        ConvertOnMouse = o.ConvertOnMouse,
        FixAnimatorSpeed = o.FixAnimatorSpeed,
        FixParticleClear = o.FixParticleClear,
        StripCalls = o.StripCalls,
        StripMissingSingletonCalls = o.StripMissingSingletonCalls,
        RemoveEmptyTryCatch = o.RemoveEmptyTryCatch,
        StripCallPatterns = new List<string>(o.StripCallPatterns),
        BlockedNamespaces = new List<string>(o.BlockedNamespaces),
        Catalog = o.Catalog,
    };

    /// <summary>Why a script is SDK/ads code with no place in a playable, or null.</summary>
    public static string MonetizationReason(string sourceRel, string mask, IEnumerable<string> blockedFolders)
    {
        string p = sourceRel.Replace('\\', '/');
        foreach (var f in blockedFolders)
        {
            string folder = f.Replace('\\', '/').TrimEnd('/');
            if (folder.Length > 0 && p.StartsWith(folder + "/", StringComparison.OrdinalIgnoreCase)) return "in blocked folder " + folder;
        }
        foreach (Match m in Regex.Matches(mask, @"^\s*using\s+([\w\.]+)\s*;", RegexOptions.Multiline))
        {
            string ns = m.Groups[1].Value;
            if (MonetizationNamespaces.Any(b => ns == b || ns.StartsWith(b + ".", StringComparison.Ordinal))) return "uses " + ns;
        }
        var id = MonetizationIdentifiers.Match(mask);
        return id.Success ? "uses " + id.Value : null;
    }

    /// <summary>Types declared at namespace/file scope (nested types are reached through their outer type).</summary>
    public static IEnumerable<string> TopLevelTypes(string mask)
    {
        var stack = new Stack<bool>(); // true = namespace block
        int last = 0;
        var decl = new Regex(@"\b(?:class|struct|enum|interface)\s+([A-Za-z_]\w*)");
        var found = new List<string>();
        for (int i = 0; i < mask.Length; i++)
        {
            char c = mask[i];
            if (c != '{' && c != '}') continue;

            if (stack.All(isNs => isNs))
                foreach (Match m in decl.Matches(mask.Substring(last, i - last)))
                    found.Add(m.Groups[1].Value);

            if (c == '{')
            {
                string header = mask.Substring(last, i - last);
                stack.Push(Regex.IsMatch(header, @"\bnamespace\s+[\w\.]+\s*$"));
            }
            else if (stack.Count > 0) stack.Pop();
            last = i + 1;
        }
        return found;
    }

    /// <summary>Capitalized identifiers used as types/static receivers (not member accesses like x.Foo).</summary>
    public static IEnumerable<string> ReferencedTypes(string mask)
    {
        var set = new HashSet<string>(StringComparer.Ordinal);
        foreach (Match m in Regex.Matches(mask, @"(?<![\.\w])([A-Z]\w*)\b"))
            set.Add(m.Groups[1].Value);
        return set;
    }
}
