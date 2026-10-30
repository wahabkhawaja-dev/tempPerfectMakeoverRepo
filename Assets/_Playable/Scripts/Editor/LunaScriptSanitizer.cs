using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Text.RegularExpressions;

// Adapts parent-project C# so it compiles and behaves in a Luna playable. Pure text transforms
// with no Unity dependency, so the rules can be exercised outside the editor.
//
// Every rewrite works on a "masked" copy of the source (comments, strings and char literals
// blanked out, positions preserved) so braces/semicolons inside strings never confuse the
// statement and scope detection, while edits are applied to the original text by index.

public interface ILunaTypeCatalog
{
    /// <summary>True when the type already exists in this project and is NOT being replaced by the import.</summary>
    bool IsKnownType(string typeName);
    bool HasMember(string typeName, string memberName);
    /// <summary>True if the type or any base declares Update() (MonoBehaviour itself counts as no).</summary>
    bool TypeHasUpdate(string typeName);
}

public sealed class LunaSanitizeOptions
{
    public bool ConvertOnMouse = true;
    public bool FixAnimatorSpeed = true;
    public bool FixParticleClear = true;
    public bool StripCalls = true;
    public bool StripMissingSingletonCalls = true;
    public bool RemoveEmptyTryCatch = true;

    /// <summary>Regexes matching the START of an expression statement to strip (whole statement is removed).</summary>
    public List<string> StripCallPatterns = new List<string>(LunaScriptSanitizer.DefaultStripCallPatterns);
    /// <summary>`using X;` directives whose namespace starts with one of these are removed.</summary>
    public List<string> BlockedNamespaces = new List<string>(LunaScriptSanitizer.DefaultBlockedNamespaces);

    public ILunaTypeCatalog Catalog;
    /// <summary>Type names that won't exist after import (defined only in blocked scripts) — any use is reported.</summary>
    public ICollection<string> UnavailableTypes;
}

public sealed class LunaSanitizeResult
{
    public string Text;
    public bool Changed;
    public readonly SortedDictionary<string, int> RuleHits = new SortedDictionary<string, int>();
    /// <summary>Things the sanitizer could not fix safely — each one is likely a compile error or dead input.</summary>
    public readonly List<string> Warnings = new List<string>();
    /// <summary>(type, member) pairs this script uses that the project's current version of the type lacks.</summary>
    public readonly List<KeyValuePair<string, string>> MissingMembers = new List<KeyValuePair<string, string>>();

    internal void Hit(string rule, int count = 1)
    {
        if (count <= 0) return;
        RuleHits.TryGetValue(rule, out int c);
        RuleHits[rule] = c + count;
    }
}

public static class LunaScriptSanitizer
{
    public const string HeaderMarker = "// [Luna] Adapted for playables by Cross-Project Prefab Importer.";

    public static readonly string[] DefaultStripCallPatterns =
    {
        @"\bStatics\s*\.\s*\w+\s*\(",
        @"\b(?:CG_)?VibrationManager\s*\.\s*[Ii]nstance\s*\.\s*\w+\s*\(",
        @"\bMMVibrationManager\s*\.\s*\w+\s*\(",
        @"\bMMNViOS\s*\.\s*\w+\s*\(",
        @"\bMMNVAndroid\s*\.\s*\w+\s*\(",
        @"\bHandheld\s*\.\s*Vibrate\s*\(",
        @"\bPhysics2D\s*\.\s*queriesHitTriggers\s*=",
        @"\bGameAnalytics\s*\.\s*\w+\s*\(",
        @"\bFirebaseAnalytics\s*\.\s*\w+\s*\(",
        @"\bAppMetrica\s*\.\s*\w+\s*\(",
        @"\bAdjust\s*\.\s*\w+\s*\(",
    };

    public static readonly string[] DefaultBlockedNamespaces =
    {
        "Firebase", "GameAnalyticsSDK", "GoogleMobileAds", "com.adjust", "Io.AppMetrica", "AppodealAds",
        "UnityEngine.Purchasing", "UnityEngine.Advertisements", "Unity.Notifications", "Google.Play",
        "Facebook.Unity", "Unity.Services", "AppsFlyerSDK", "UnityEngine.U2D.Animation",
    };

    private static readonly string[] MouseMessages =
        { "OnMouseDown", "OnMouseDrag", "OnMouseUp", "OnMouseUpAsButton", "OnMouseEnter", "OnMouseExit", "OnMouseOver" };

    public static LunaSanitizeResult Sanitize(string source, LunaSanitizeOptions options)
    {
        var result = new LunaSanitizeResult();
        string nl = source.Contains("\r\n") ? "\r\n" : "\n";
        string text = source;

        text = RemoveBlockedUsings(text, options, result);
        if (options.StripCalls)
        {
            text = StripStatements(text, options.StripCallPatterns, "strip call", result);
            text = StripHapticLambdas(text, result);
        }
        if (options.StripMissingSingletonCalls && options.Catalog != null) text = StripMissingSingletonMembers(text, options.Catalog, result);
        if (options.RemoveEmptyTryCatch) text = RemoveEmptyTryCatch(text, result);
        if (options.FixAnimatorSpeed) text = FixAnimatorSpeed(text, result);
        if (options.FixParticleClear) text = FixParticleClear(text, result);
        text = FixSpriteSkinBones(text, result);
        text = FixMissingLunaApis(text, result);
        if (options.ConvertOnMouse) text = ConvertOnMouse(text, options.Catalog, nl, result);
        ReportTypedMemberGaps(text, options.Catalog, result);
        ReportUnavailableTypes(text, options.UnavailableTypes, result);

        result.Changed = !string.Equals(text, source, StringComparison.Ordinal);
        if (result.Changed && !text.StartsWith(HeaderMarker, StringComparison.Ordinal))
            text = HeaderMarker + nl + text;
        result.Text = text;
        return result;
    }

    // ─────────────────────────────────────────────────────────────────────
    // Masking
    // ─────────────────────────────────────────────────────────────────────

    /// <summary>Copy of the source with comments, strings and char literals replaced by spaces (newlines kept).</summary>
    public static string Mask(string s)
    {
        var m = s.ToCharArray();
        int n = s.Length, i = 0;

        void Blank(int from, int to)
        {
            for (int k = from; k < to && k < n; k++)
                if (m[k] != '\n' && m[k] != '\r') m[k] = ' ';
        }

        while (i < n)
        {
            char c = s[i];
            char next = i + 1 < n ? s[i + 1] : '\0';

            if (c == '/' && next == '/')
            {
                int e = s.IndexOf('\n', i); if (e < 0) e = n;
                Blank(i, e); i = e; continue;
            }
            if (c == '/' && next == '*')
            {
                int e = s.IndexOf("*/", i + 2, StringComparison.Ordinal); e = e < 0 ? n : e + 2;
                Blank(i, e); i = e; continue;
            }
            if (c == '#' && OnlyWhitespaceBeforeOnLine(s, i))
            {
                int e = s.IndexOf('\n', i); if (e < 0) e = n;
                Blank(i, e); i = e; continue;
            }
            if (c == '\'')
            {
                int e = i + 1;
                while (e < n && s[e] != '\'' && s[e] != '\n') { if (s[e] == '\\') e++; e++; }
                e = Math.Min(n, e + 1);
                Blank(i, e); i = e; continue;
            }

            bool verbatim = false, interpolated = false;
            int q = i;
            while (q < n && q - i < 2 && (s[q] == '@' || s[q] == '$'))
            {
                if (s[q] == '@') verbatim = true; else interpolated = true;
                q++;
            }
            if (q < n && s[q] == '"' && (q == i || verbatim || interpolated))
            {
                int e = SkipString(s, q, verbatim, interpolated);
                Blank(i, e); i = e; continue;
            }

            i++;
        }
        return new string(m);
    }

    private static bool OnlyWhitespaceBeforeOnLine(string s, int pos)
    {
        for (int k = pos - 1; k >= 0 && s[k] != '\n'; k--)
            if (!char.IsWhiteSpace(s[k])) return false;
        return true;
    }

    /// <summary>Returns the index just past the closing quote of a string starting at the quote at <paramref name="quote"/>.</summary>
    private static int SkipString(string s, int quote, bool verbatim, bool interpolated)
    {
        int n = s.Length, k = quote + 1, depth = 0;
        while (k < n)
        {
            char c = s[k];
            if (depth == 0)
            {
                if (interpolated && c == '{')
                {
                    if (k + 1 < n && s[k + 1] == '{') { k += 2; continue; }
                    depth = 1; k++; continue;
                }
                if (!verbatim && c == '\\') { k += 2; continue; }
                if (c == '"')
                {
                    if (verbatim && k + 1 < n && s[k + 1] == '"') { k += 2; continue; }
                    return k + 1;
                }
                if (!verbatim && c == '\n') return k; // unterminated — stop at line end
                k++;
            }
            else
            {
                if (c == '{') depth++;
                else if (c == '}') depth--;
                else if (c == '"') { k = SkipString(s, k, false, false); continue; }
                else if (c == '\'') { k++; while (k < n && s[k] != '\'') { if (s[k] == '\\') k++; k++; } }
                k++;
            }
        }
        return n;
    }

    // ─────────────────────────────────────────────────────────────────────
    // Structural helpers (operate on masked text)
    // ─────────────────────────────────────────────────────────────────────

    private static int MatchForward(string mask, int open)
    {
        char o = mask[open];
        char c = o == '{' ? '}' : o == '(' ? ')' : ']';
        int depth = 0;
        for (int k = open; k < mask.Length; k++)
        {
            if (mask[k] == o) depth++;
            else if (mask[k] == c && --depth == 0) return k;
        }
        return -1;
    }

    private static int MatchBackward(string mask, int close)
    {
        char c = mask[close];
        char o = c == '}' ? '{' : c == ')' ? '(' : '[';
        int depth = 0;
        for (int k = close; k >= 0; k--)
        {
            if (mask[k] == c) depth++;
            else if (mask[k] == o && --depth == 0) return k;
        }
        return -1;
    }

    private static int PrevNonWs(string mask, int pos)
    {
        int j = pos - 1;
        while (j >= 0 && char.IsWhiteSpace(mask[j])) j--;
        return j;
    }

    private static string WordEndingAt(string mask, int end)
    {
        int k = end;
        while (k >= 0 && (char.IsLetterOrDigit(mask[k]) || mask[k] == '_')) k--;
        return mask.Substring(k + 1, end - k);
    }

    /// <summary>True when <paramref name="pos"/> begins a statement (so the statement can be replaced by an empty block).</summary>
    private static bool IsStatementStart(string mask, int pos)
    {
        int j = PrevNonWs(mask, pos);
        if (j < 0) return true;
        char c = mask[j];
        if (c == ';' || c == '{' || c == '}') return true;

        if (c == ')')
        {
            int open = MatchBackward(mask, j);
            if (open < 0) return false;
            int w = PrevNonWs(mask, open);
            if (w < 0) return false;
            string word = WordEndingAt(mask, w);
            return word == "if" || word == "while" || word == "for" || word == "foreach" || word == "lock" || word == "using" || word == "fixed";
        }

        if (c == ':')
        {
            // Only switch labels — never the ':' of a ternary.
            int lineStart = mask.LastIndexOf('\n', j) + 1;
            string label = mask.Substring(lineStart, j - lineStart).Trim();
            return label == "default" || label.StartsWith("case ", StringComparison.Ordinal);
        }

        if (char.IsLetter(c))
        {
            string word = WordEndingAt(mask, j);
            return word == "else" || word == "do";
        }
        return false;
    }

    /// <summary>Index of the ';' ending the statement starting at <paramref name="pos"/>, or -1.</summary>
    private static int FindStatementEnd(string mask, int pos)
    {
        int depth = 0;
        for (int k = pos; k < mask.Length; k++)
        {
            char c = mask[k];
            if (c == '(' || c == '[' || c == '{') depth++;
            else if (c == ')' || c == ']' || c == '}') { if (--depth < 0) return -1; }
            else if (c == ';' && depth == 0) return k;
        }
        return -1;
    }

    private static int LineOf(string s, int pos)
    {
        int line = 1;
        for (int k = 0; k < pos && k < s.Length; k++) if (s[k] == '\n') line++;
        return line;
    }

    private struct Edit { public int Start, End; public string With; }

    private static string ApplyEdits(string text, List<Edit> edits)
    {
        if (edits.Count == 0) return text;
        var sb = new StringBuilder(text);
        foreach (var e in edits.OrderByDescending(e => e.Start))
        {
            sb.Remove(e.Start, e.End - e.Start);
            sb.Insert(e.Start, e.With);
        }
        return sb.ToString();
    }

    private static string StrippedBlock(string original)
    {
        string flat = Regex.Replace(original, @"\s+", " ").Trim().Replace("*/", "* /");
        if (flat.Length > 140) flat = flat.Substring(0, 137) + "...";
        return "{ /* [Luna] stripped: " + flat + " */ }";
    }

    // ─────────────────────────────────────────────────────────────────────
    // Rules
    // ─────────────────────────────────────────────────────────────────────

    private static string StripHapticLambdas(string text, LunaSanitizeResult result)
    {
        string mask = Mask(text);
        var edits = new List<Edit>();
        foreach (Match match in Regex.Matches(mask, @"=>\s*(?<call>(?:CG_)?VibrationManager\s*\.\s*[Ii]nstance\s*\.\s*\w+\s*\()"))
        {
            int start = match.Groups["call"].Index;
            int end = MatchForward(mask, match.Index + match.Length - 1);
            if (end < 0) continue;
            int next = end + 1;
            while (next < mask.Length && char.IsWhiteSpace(mask[next])) next++;
            // Only a complete void callback body. Leave composed/value expressions untouched.
            if (next < mask.Length && mask[next] != ')' && mask[next] != ',' && mask[next] != ';') continue;
            edits.Add(new Edit { Start = start, End = end + 1, With = StrippedBlock(text.Substring(start, end + 1 - start)) });
        }
        result.Hit("strip haptic callback", edits.Count);
        return ApplyEdits(text, edits);
    }


    private static string RemoveBlockedUsings(string text, LunaSanitizeOptions options, LunaSanitizeResult result)
    {
        if (options.BlockedNamespaces == null || options.BlockedNamespaces.Count == 0) return text;
        string mask = Mask(text);
        var edits = new List<Edit>();
        foreach (Match m in Regex.Matches(mask, @"^[ \t]*using\s+(?:static\s+)?([\w\.]+)\s*;[ \t]*\r?\n?", RegexOptions.Multiline))
        {
            string ns = m.Groups[1].Value;
            if (options.BlockedNamespaces.Any(b => ns == b || ns.StartsWith(b + ".", StringComparison.Ordinal)))
                edits.Add(new Edit { Start = m.Index, End = m.Index + m.Length, With = "" });
        }
        result.Hit("remove blocked using", edits.Count);
        return ApplyEdits(text, edits);
    }

    /// <summary>Replaces whole expression statements that START with a matching pattern by an empty block.</summary>
    private static string StripStatements(string text, IEnumerable<string> patterns, string rule, LunaSanitizeResult result)
    {
        string mask = Mask(text);
        var edits = new List<Edit>();
        var taken = new List<(int, int)>();

        foreach (var pattern in patterns)
        {
            foreach (Match m in Regex.Matches(mask, pattern))
            {
                int start = m.Index;
                if (taken.Any(t => start >= t.Item1 && start <= t.Item2)) continue;
                if (!IsStatementStart(mask, start)) continue; // used inside an expression — stubs keep it compiling

                int end = FindStatementEnd(mask, start);
                if (end < 0) continue;

                edits.Add(new Edit { Start = start, End = end + 1, With = StrippedBlock(text.Substring(start, end + 1 - start)) });
                taken.Add((start, end));
            }
        }
        result.Hit(rule, edits.Count);
        return ApplyEdits(text, edits);
    }

    /// <summary>`Type.instance.Member(...)` where Type exists in this project but Member does not → strip if it's a plain statement.</summary>
    private static string StripMissingSingletonMembers(string text, ILunaTypeCatalog catalog, LunaSanitizeResult result)
    {
        string mask = Mask(text);
        var edits = new List<Edit>();
        foreach (Match m in Regex.Matches(mask, @"\b([A-Z]\w*)\s*\.\s*(?:instance|Instance)\s*\.\s*(\w+)\b"))
        {
            string type = m.Groups[1].Value, member = m.Groups[2].Value;
            if (!catalog.IsKnownType(type) || catalog.HasMember(type, member)) continue;
            result.MissingMembers.Add(new KeyValuePair<string, string>(type, member));

            int start = m.Index;
            int end = IsStatementStart(mask, start) ? FindStatementEnd(mask, start) : -1;
            if (end >= 0 && !edits.Any(e => start >= e.Start && start < e.End))
            {
                edits.Add(new Edit { Start = start, End = end + 1, With = StrippedBlock(text.Substring(start, end + 1 - start)) });
                result.Warnings.Add($"line {LineOf(text, start)}: {type}.{member} isn't in this project's {type}, so the call was stripped. Port it into {type} if the behaviour matters.");
            }
            else
            {
                result.Warnings.Add($"line {LineOf(text, start)}: {type}.{member} isn't in this project's {type} and is used inside an expression. Needs a manual fix (compile error).");
            }
        }
        result.Hit("strip missing member call", edits.Count);
        return ApplyEdits(text, edits);
    }

    private static string RemoveEmptyTryCatch(string text, LunaSanitizeResult result)
    {
        string mask = Mask(text);
        var edits = new List<Edit>();
        foreach (Match m in Regex.Matches(mask, @"\btry\b"))
        {
            int tryOpen = NextNonWs(mask, m.Index + m.Length);
            if (tryOpen < 0 || mask[tryOpen] != '{' || !IsStatementStart(mask, m.Index)) continue;
            int tryClose = MatchForward(mask, tryOpen);
            if (tryClose < 0) continue;

            string body = Regex.Replace(mask.Substring(tryOpen + 1, tryClose - tryOpen - 1), @"\{\s*\}", "");
            if (!string.IsNullOrWhiteSpace(body)) continue;

            int catchKw = NextNonWs(mask, tryClose + 1);
            if (catchKw < 0 || !WordAt(mask, catchKw, "catch")) continue;
            int after = NextNonWs(mask, catchKw + 5);
            if (after >= 0 && mask[after] == '(')
            {
                int close = MatchForward(mask, after);
                if (close < 0) continue;
                after = NextNonWs(mask, close + 1);
            }
            if (after < 0 || mask[after] != '{') continue;
            int catchClose = MatchForward(mask, after);
            if (catchClose < 0 || !string.IsNullOrWhiteSpace(mask.Substring(after + 1, catchClose - after - 1))) continue;

            int tail = NextNonWs(mask, catchClose + 1);
            if (tail >= 0 && (WordAt(mask, tail, "catch") || WordAt(mask, tail, "finally"))) continue;

            // Swallow the whole line(s) when the construct stands alone on them.
            int start = m.Index, end = catchClose + 1;
            int lineStart = text.LastIndexOf('\n', start - 1) + 1;
            if (string.IsNullOrWhiteSpace(text.Substring(lineStart, start - lineStart))) start = lineStart;
            int lineEnd = text.IndexOf('\n', end);
            if (lineEnd >= 0 && string.IsNullOrWhiteSpace(text.Substring(end, lineEnd - end)) && start == lineStart) end = lineEnd + 1;

            edits.Add(new Edit { Start = start, End = end, With = "" });
        }
        result.Hit("remove empty try/catch", edits.Count);
        return ApplyEdits(text, edits);
    }

    private static int NextNonWs(string mask, int pos)
    {
        int j = pos;
        while (j < mask.Length && char.IsWhiteSpace(mask[j])) j++;
        return j < mask.Length ? j : -1;
    }

    private static bool WordAt(string mask, int pos, string word)
    {
        if (pos < 0 || pos + word.Length > mask.Length) return false;
        if (string.CompareOrdinal(mask, pos, word, 0, word.Length) != 0) return false;
        int after = pos + word.Length;
        return after >= mask.Length || !(char.IsLetterOrDigit(mask[after]) || mask[after] == '_');
    }

    /// <summary>Luna's WebGL animator can't evaluate speed == 0; the project convention is 0.0001f.</summary>
    private static string FixAnimatorSpeed(string text, LunaSanitizeResult result)
    {
        string mask = Mask(text);
        var animatorVars = new HashSet<string>(StringComparer.Ordinal);
        foreach (Match m in Regex.Matches(mask, @"\bAnimator(?:\s*\[\s*\])?\s+(\w+)\s*(?=[;=,)])")) animatorVars.Add(m.Groups[1].Value);
        foreach (Match m in Regex.Matches(mask, @"\b(\w+)\s*=\s*[^;]*?GetComponent(?:InChildren|InParent)?\s*<\s*Animator\s*>")) animatorVars.Add(m.Groups[1].Value);

        var edits = new List<Edit>();
        const string zero = @"(0(?:\.0*)?[fF]?)\s*;";
        foreach (Match m in Regex.Matches(mask, @"(\w+)\s*(?:\[[^\]\n]*\]\s*)?\.\s*speed\s*=\s*" + zero))
        {
            string receiver = m.Groups[1].Value;
            bool isAnimator = animatorVars.Contains(receiver) || receiver.IndexOf("anim", StringComparison.OrdinalIgnoreCase) >= 0;
            if (!isAnimator) continue;
            var val = m.Groups[2];
            edits.Add(new Edit { Start = val.Index, End = val.Index + val.Length, With = "0.0001f" });
        }
        foreach (Match m in Regex.Matches(mask, @"GetComponent(?:InChildren|InParent)?\s*<\s*Animator\s*>\s*\(\s*\)\s*\.\s*speed\s*=\s*" + zero))
        {
            var val = m.Groups[1];
            edits.Add(new Edit { Start = val.Index, End = val.Index + val.Length, With = "0.0001f" });
        }
        result.Hit("animator speed 0 -> 0.0001f", edits.Count);
        return ApplyEdits(text, edits);
    }

    /// <summary>Luna's ParticleSystem binding has no Clear(bool) overload.</summary>
    private static string FixParticleClear(string text, LunaSanitizeResult result)
    {
        string mask = Mask(text);
        var edits = new List<Edit>();
        foreach (Match m in Regex.Matches(mask, @"\.\s*Clear\s*(\(\s*(?:true|false)\s*\))"))
        {
            var g = m.Groups[1];
            edits.Add(new Edit { Start = g.Index, End = g.Index + g.Length, With = "()" });
        }
        result.Hit("ParticleSystem.Clear(bool) -> Clear()", edits.Count);
        return ApplyEdits(text, edits);
    }

    /// <summary>
    /// Members Luna's cut-down C# API lacks (Luna build errors CS1061 / CS1503):
    /// x.isActiveAndEnabled -> (x.enabled &amp;&amp; x.gameObject.activeInHierarchy), and Array.Sort(keys, items) ->
    /// LunaArray.Sort when the second argument is an array declared in this file (Array.Sort(array, comparer) has the
    /// same shape and Luna does support it), and ParticleSystem.EmitParams -> LunaEmitParams / LunaParticles.Emit.
    /// The stand-ins live in Assets/_Playable/Scripts/LunaCompat.cs.
    /// </summary>
    private static string FixMissingLunaApis(string text, LunaSanitizeResult result)
    {
        string mask = Mask(text);
        var edits = new List<Edit>();
        foreach (Match m in Regex.Matches(mask, @"(?<![\w.])((?:this\s*\.\s*)?(?:[A-Za-z_]\w*\s*\.\s*)*)isActiveAndEnabled\b"))
        {
            string target = Regex.Replace(text.Substring(m.Groups[1].Index, m.Groups[1].Length), @"\s+", "");
            edits.Add(new Edit { Start = m.Index, End = m.Index + m.Length,
                With = "(" + target + "enabled && " + target + "gameObject.activeInHierarchy)" });
        }
        result.Hit("isActiveAndEnabled -> enabled && activeInHierarchy", edits.Count);

        int sorts = 0;
        foreach (Match m in Regex.Matches(mask, @"\b(?:System\s*\.\s*)?Array\s*\.\s*Sort\s*\(\s*([A-Za-z_]\w*)\s*,\s*([A-Za-z_]\w*)\s*\)"))
        {
            if (!Regex.IsMatch(mask, @"[\w>]\s*\[\s*\]\s+" + Regex.Escape(m.Groups[2].Value) + @"\b")) continue; // a comparer, not an items array
            edits.Add(new Edit { Start = m.Index, End = m.Index + m.Length, With = "LunaArray.Sort(" + m.Groups[1].Value + ", " + m.Groups[2].Value + ")" });
            sorts++;
        }
        result.Hit("Array.Sort(keys, items) -> LunaArray.Sort", sorts);

        // ParticleSystem.EmitParams -> LunaEmitParams, and ps.Emit(thoseParams, n) -> LunaParticles.Emit(ps, thoseParams, n).
        var emitVars = new HashSet<string>(Regex.Matches(mask, @"\b(?:var|LunaEmitParams|ParticleSystem\s*\.\s*EmitParams)\s+(\w+)\s*(?:=\s*new\s+(?:ParticleSystem\s*\.\s*EmitParams|LunaEmitParams)\b|[;,)])")
            .Cast<Match>().Select(m => m.Groups[1].Value));
        int emits = 0;
        foreach (Match m in Regex.Matches(mask, @"\bParticleSystem\s*\.\s*EmitParams\b"))
        {
            edits.Add(new Edit { Start = m.Index, End = m.Index + m.Length, With = "LunaEmitParams" });
            emits++;
        }
        foreach (Match m in Regex.Matches(mask, @"(?<![\w.])([A-Za-z_][\w.]*?)\s*\.\s*Emit\s*\(\s*(\w+)\s*,"))
        {
            if (!emitVars.Contains(m.Groups[2].Value)) continue;
            edits.Add(new Edit { Start = m.Index, End = m.Index + m.Length,
                With = "LunaParticles.Emit(" + text.Substring(m.Groups[1].Index, m.Groups[1].Length) + ", " + m.Groups[2].Value + "," });
            emits++;
        }
        result.Hit("ParticleSystem.EmitParams -> LunaEmitParams / LunaParticles.Emit", emits);

        // Bridge (Luna's C#->JS step) crashes with "Index was outside the bounds of the array" (LP2007) on a call that
        // spreads separate arguments into a params array of a Unity struct (AddFragment(a, b, c) for params Vector2[]).
        // Passing the array explicitly means the same and avoids it.
        int spread = 0;
        foreach (Match decl in Regex.Matches(mask, @"\b(\w+)\s*\(([^()]*?)\bparams\s+(Vector[234](?:Int)?|Color(?:32)?|Quaternion|Rect|Bounds|Matrix4x4)\s*\[\s*\]\s*\w+\s*\)"))
        {
            string method = decl.Groups[1].Value, type = decl.Groups[3].Value;
            int fixedCount = decl.Groups[2].Value.Count(ch => ch == ','); // each fixed parameter is followed by a comma
            foreach (Match call in Regex.Matches(mask, @"(?<![\w.])" + Regex.Escape(method) + @"\s*\("))
            {
                if (call.Index == decl.Groups[1].Index) continue; // the declaration itself
                int open = call.Index + call.Length - 1, close = MatchForward(mask, open);
                if (close < 0) continue;
                var args = SplitTopLevel(mask, open + 1, close);
                if (args.Count <= fixedCount) continue;
                var spreadArgs = args.Skip(fixedCount).ToList();
                string first = mask.Substring(spreadArgs[0].start, spreadArgs[0].end - spreadArgs[0].start).Trim();
                if (spreadArgs.Count == 1 && (Regex.IsMatch(first, @"^(?:new\b|null\b)") ||
                    Regex.IsMatch(mask, @"\b" + Regex.Escape(type) + @"\s*\[\s*\]\s+" + Regex.Escape(first) + @"\b"))) continue; // already an array
                int from = spreadArgs[0].start, to = spreadArgs[spreadArgs.Count - 1].end;
                while (from < to && char.IsWhiteSpace(mask[from])) from++; // keep the caller's spacing
                edits.Add(new Edit { Start = from, End = to, With = "new " + type + "[] { " + text.Substring(from, to - from).Trim() + " }" });
                spread++;
            }
        }
        result.Hit("params struct[] spread call -> explicit array (Bridge crash)", spread);

        // Luna's SpriteMask front order is exclusive (Unity's is inclusive): a mask whose front is set to its sprite's
        // own order hides that sprite in the browser. One above keeps the same sprites inside in both.
        int ranges = 0;
        foreach (Match m in Regex.Matches(mask, @"\.\s*frontSortingOrder\s*=\s*([A-Za-z_][\w.]*\.\s*sortingOrder)\s*;"))
        {
            var g = m.Groups[1];
            edits.Add(new Edit { Start = g.Index + g.Length, End = g.Index + g.Length, With = " + 1" });
            ranges++;
        }
        result.Hit("SpriteMask front order -> +1 (Luna treats it as exclusive)", ranges);

        // Luna's Instantiate clones only a GameObject, a Transform or a script ("Don't know what should be instantiated"
        // for a built-in component - CG_ChalkTrace's Instantiate(Dust, ...) with Dust a ParticleSystem). Clone the
        // component's GameObject and take the component from the copy.
        int clones = 0;
        foreach (Match call in Regex.Matches(mask, @"(?<![\w.])Instantiate\s*\(\s*([A-Za-z_]\w*)\s*(?=[,)])"))
        {
            string name = call.Groups[1].Value;
            var decl = Regex.Match(mask, @"\b(" + LunaBuiltinComponents + @")\s+" + Regex.Escape(name) + @"\s*[;=,)]");
            if (!decl.Success) continue;
            int open = mask.IndexOf('(', call.Index), close = MatchForward(mask, open);
            if (close < 0) continue;
            var arg = call.Groups[1];
            edits.Add(new Edit { Start = arg.Index + arg.Length, End = arg.Index + arg.Length, With = ".gameObject" });
            edits.Add(new Edit { Start = close + 1, End = close + 1, With = ".GetComponent<" + decl.Groups[1].Value + ">()" });
            clones++;
        }
        result.Hit("Instantiate(builtin component) -> Instantiate(x.gameObject).GetComponent<T>()", clones);
        return ApplyEdits(text, edits);
    }

    /// <summary>Unity's built-in (non-script) component types Luna's Instantiate can't clone on their own.</summary>
    private const string LunaBuiltinComponents =
        "ParticleSystem|SpriteRenderer|MeshRenderer|LineRenderer|TrailRenderer|Renderer|AudioSource|Animator|Animation|" +
        "Rigidbody2D|Rigidbody|Collider2D|BoxCollider2D|CircleCollider2D|PolygonCollider2D|EdgeCollider2D|CapsuleCollider2D|" +
        "Collider|Camera|Light|SpriteMask|SortingGroup";

    /// <summary>Spans of the comma-separated arguments between <paramref name="from"/> and <paramref name="to"/> (exclusive).</summary>
    private static List<(int start, int end)> SplitTopLevel(string mask, int from, int to)
    {
        var parts = new List<(int, int)>();
        int depth = 0, start = from;
        for (int i = from; i < to; i++)
        {
            char c = mask[i];
            if (c == '(' || c == '[' || c == '{') depth++;
            else if (c == ')' || c == ']' || c == '}') depth--;
            else if (c == ',' && depth == 0) { parts.Add((start, i)); start = i + 1; }
        }
        if (mask.Substring(start, to - start).Trim().Length > 0 || parts.Count > 0) parts.Add((start, to));
        return parts;
    }

    /// <summary>Luna's C# API has no UnityEngine.U2D.Animation (the skinning itself still plays), so
    /// `x.GetComponent&lt;SpriteSkin&gt;().boneTransforms` becomes every transform under x (x itself excluded).</summary>
    private static string FixSpriteSkinBones(string text, LunaSanitizeResult result)
    {
        string mask = Mask(text);
        var edits = new List<Edit>();
        foreach (Match m in Regex.Matches(mask, @"\b(?<obj>[\w\.]+)\s*\.\s*GetComponent\s*<\s*(?:UnityEngine\s*\.\s*U2D\s*\.\s*Animation\s*\.\s*)?SpriteSkin\s*>\s*\(\s*\)\s*\.\s*boneTransforms\b"))
        {
            // ponytail: includes non-bone children too; fine for rest-pose capture/restore, the only use so far.
            string obj = text.Substring(m.Groups["obj"].Index, m.Groups["obj"].Length);
            edits.Add(new Edit { Start = m.Index, End = m.Index + m.Length,
                With = $"System.Linq.Enumerable.ToArray(System.Linq.Enumerable.Skip({obj}.GetComponentsInChildren<Transform>(true), 1))" });
        }
        result.Hit("SpriteSkin.boneTransforms -> child transforms", edits.Count);
        text = ApplyEdits(text, edits);
        Match left = Regex.Match(Mask(text), @"\bSpriteSkin\b");
        if (left.Success)
            result.Warnings.Add($"line {LineOf(text, left.Index)}: SpriteSkin isn't in Luna's C# API - this line won't compile in the playable.");
        return text;
    }

    // ─────────────────────────────────────────────────────────────────────
    // OnMouse* -> polled input
    // ─────────────────────────────────────────────────────────────────────

    private sealed class ClassSpan
    {
        public string Name, Base;
        public int HeaderStart, Open, Close;
    }

    private static List<ClassSpan> FindClasses(string mask)
    {
        var list = new List<ClassSpan>();
        foreach (Match m in Regex.Matches(mask, @"\b(?:class|struct)\s+(\w+)(?:\s*<[^>{]*>)?\s*(?::\s*([^{]+?))?\s*(?:where\s[^{]*)?\{"))
        {
            int open = m.Index + m.Length - 1;
            int close = MatchForward(mask, open);
            if (close < 0) continue;
            string baseList = m.Groups[2].Success ? m.Groups[2].Value : "";
            string first = baseList.Split(',').Select(x => x.Trim()).FirstOrDefault() ?? "";
            first = Regex.Replace(first, @"<.*", "").Trim();
            list.Add(new ClassSpan { Name = m.Groups[1].Value, Base = first, HeaderStart = m.Index, Open = open, Close = close });
        }
        return list;
    }

    /// <summary>True when <paramref name="pos"/> sits directly in the class body (not in a nested type or member body).</summary>
    private static bool IsDirectMember(string mask, ClassSpan cls, int pos)
    {
        int depth = 0;
        for (int k = cls.Open + 1; k < pos; k++)
        {
            if (mask[k] == '{') depth++;
            else if (mask[k] == '}') depth--;
        }
        return depth == 0;
    }

    private static string ConvertOnMouse(string text, ILunaTypeCatalog catalog, string nl, LunaSanitizeResult result)
    {
        // Process one class per pass (innermost/last first) because each conversion shifts offsets.
        var done = new HashSet<string>();
        for (int guard = 0; guard < 32; guard++)
        {
            string mask = Mask(text);
            ClassSpan target = null;
            List<Match> decls = null;

            foreach (var cls in FindClasses(mask).OrderByDescending(c => c.Open))
            {
                if (done.Contains(cls.Name)) continue;
                var found = Regex.Matches(mask.Substring(0, cls.Close), @"(?<mods>(?:\b(?:public|private|protected|internal|virtual|override|new|sealed|static)\s+)*)\b(?<ret>void|IEnumerator)\s+(?<name>OnMouse(?:Down|Drag|Up|UpAsButton|Enter|Exit|Over))\s*\(\s*\)")
                    .Cast<Match>()
                    .Where(d => d.Index > cls.Open && IsDirectMember(mask, cls, d.Index))
                    .ToList();
                if (found.Count == 0) { done.Add(cls.Name); continue; }
                target = cls; decls = found; break;
            }
            if (target == null) break;
            done.Add(target.Name);
            text = ConvertClass(text, mask, target, decls, catalog, nl, result);
        }
        return text;
    }

    private static string ConvertClass(string text, string mask, ClassSpan cls, List<Match> decls, ILunaTypeCatalog catalog, string nl, LunaSanitizeResult result)
    {
        int line = LineOf(text, cls.HeaderStart);

        if (decls.Any(d => d.Groups["mods"].Value.Contains("override") || d.Groups["mods"].Value.Contains("virtual") || d.Groups["mods"].Value.Contains("static")))
        {
            result.Warnings.Add($"line {line}: {cls.Name} has virtual/override/static OnMouse* methods — left unconverted; input may not fire in Luna.");
            return text;
        }

        string body = mask.Substring(cls.Open, cls.Close - cls.Open + 1);
        var polled = new Dictionary<string, bool>(); // message -> returns IEnumerator
        foreach (var d in decls)
        {
            string name = d.Groups["name"].Value;
            int refs = Regex.Matches(body, $@"\b{name}\b").Count;
            // Referenced beyond its own declaration (e.g. `drag.OnMouseDownEvent += OnMouseDown`) → driven by
            // an event, not by Unity; rename only so Unity stops ALSO calling it.
            if (refs <= 1) polled[name] = d.Groups["ret"].Value == "IEnumerator";
        }

        // Find Update() declared directly in this class.
        Match update = Regex.Matches(mask.Substring(0, cls.Close), @"\bvoid\s+Update\s*\(\s*\)\s*(\{|=>)")
            .Cast<Match>().FirstOrDefault(u => u.Index > cls.Open && IsDirectMember(mask, cls, u.Index));

        if (polled.Count > 0 && update == null)
        {
            bool baseIsPlain = cls.Base == "MonoBehaviour" || cls.Base == "UnityEngine.MonoBehaviour";
            bool baseSafe = baseIsPlain || (catalog != null && catalog.IsKnownType(cls.Base) && !catalog.TypeHasUpdate(cls.Base));
            if (!baseSafe)
            {
                result.Warnings.Add($"line {line}: {cls.Name} derives from '{cls.Base}' which may declare Update() — OnMouse* left unconverted to avoid hiding it; input may not fire in Luna.");
                return text;
            }
        }
        if (update != null && update.Groups[1].Value == "=>")
        {
            result.Warnings.Add($"line {line}: {cls.Name}.Update is expression-bodied — OnMouse* left unconverted.");
            return text;
        }

        var edits = new List<Edit>();

        // 1. Rename every code reference inside the class.
        foreach (var d in decls)
        {
            string name = d.Groups["name"].Value;
            string renamed = "__Luna" + name.Substring(2);
            foreach (Match r in Regex.Matches(body, $@"\b{name}\b"))
                edits.Add(new Edit { Start = cls.Open + r.Index, End = cls.Open + r.Index + r.Length, With = renamed });
        }

        if (polled.Count > 0)
        {
            string classIndent = LeadingIndent(text, cls.HeaderStart);
            string ind = classIndent + "    ";

            // 2. Drive the poll from Update (existing or new).
            if (update != null)
            {
                int braceIdx = update.Index + update.Length - 1;
                int nextLineStart = text.IndexOf('\n', braceIdx);
                string bodyIndent = nextLineStart >= 0 ? LeadingIndent(text, nextLineStart + 1) : ind + "    ";
                if (bodyIndent.Length <= ind.Length) bodyIndent = ind + "    ";
                edits.Add(new Edit { Start = braceIdx + 1, End = braceIdx + 1, With = nl + bodyIndent + "__LunaPollMouse();" });
            }

            // 3. Append the polling members before the class' closing brace.
            string code = BuildPollingCode(polled, update == null, ind, nl);
            int closeLineStart = text.LastIndexOf('\n', cls.Close - 1) + 1;
            if (string.IsNullOrWhiteSpace(text.Substring(closeLineStart, cls.Close - closeLineStart)))
                edits.Add(new Edit { Start = closeLineStart, End = closeLineStart, With = code });
            else
                edits.Add(new Edit { Start = cls.Close, End = cls.Close, With = nl + code + classIndent });
        }

        result.Hit("OnMouse* -> polled input", polled.Count);
        if (decls.Count > polled.Count) result.Hit("OnMouse* renamed (event-driven)", decls.Count - polled.Count);
        return ApplyEdits(text, edits);
    }

    private static string LeadingIndent(string text, int pos)
    {
        int lineStart = text.LastIndexOf('\n', Math.Max(0, pos - 1)) + 1;
        if (pos == 0) lineStart = 0;
        int k = lineStart;
        while (k < text.Length && (text[k] == ' ' || text[k] == '\t')) k++;
        return text.Substring(lineStart, k - lineStart);
    }

    private static string BuildPollingCode(Dictionary<string, bool> polled, bool addUpdate, string ind, string nl)
    {
        string i1 = ind, i2 = ind + "    ", i3 = i2 + "    ", i4 = i3 + "    ";
        var sb = new StringBuilder();
        void L(string s) => sb.Append(s).Append(nl);
        string Call(string msg) => polled[msg] ? $"StartCoroutine(__Luna{msg.Substring(2)}());" : $"__Luna{msg.Substring(2)}();";

        bool press = polled.ContainsKey("OnMouseDown") || polled.ContainsKey("OnMouseDrag") || polled.ContainsKey("OnMouseUp") || polled.ContainsKey("OnMouseUpAsButton");
        bool hover = polled.ContainsKey("OnMouseEnter") || polled.ContainsKey("OnMouseExit") || polled.ContainsKey("OnMouseOver");

        L("");
        L(i1 + "// [Luna] OnMouse* messages don't fire reliably in Luna/WebGL, so input is polled instead.");
        if (press) L(i1 + "bool __lunaMouseHeld;");
        if (hover) L(i1 + "bool __lunaMouseOver;");
        L("");
        if (addUpdate)
        {
            L(i1 + "void Update()");
            L(i1 + "{");
            L(i2 + "__LunaPollMouse();");
            L(i1 + "}");
            L("");
        }
        L(i1 + "void __LunaPollMouse()");
        L(i1 + "{");
        if (press)
        {
            L(i2 + "if (!__lunaMouseHeld)");
            L(i2 + "{");
            L(i3 + "if (UnityEngine.Input.GetMouseButtonDown(0) && __LunaPointerOverThis())");
            L(i3 + "{");
            L(i4 + "__lunaMouseHeld = true;");
            if (polled.ContainsKey("OnMouseDown")) L(i4 + Call("OnMouseDown"));
            L(i3 + "}");
            L(i2 + "}");
            // Release is keyed off the held state, not GetMouseButtonUp — Luna's touch-to-mouse
            // translation can drop the single-frame "up" edge.
            L(i2 + "else if (!UnityEngine.Input.GetMouseButton(0))");
            L(i2 + "{");
            L(i3 + "__lunaMouseHeld = false;");
            if (polled.ContainsKey("OnMouseUp")) L(i3 + Call("OnMouseUp"));
            if (polled.ContainsKey("OnMouseUpAsButton")) L(i3 + "if (__LunaPointerOverThis()) " + Call("OnMouseUpAsButton"));
            L(i2 + "}");
            if (polled.ContainsKey("OnMouseDrag"))
            {
                L(i2 + "else");
                L(i2 + "{");
                L(i3 + Call("OnMouseDrag"));
                L(i2 + "}");
            }
        }
        if (hover)
        {
            L(i2 + "bool over = __LunaPointerOverThis();");
            if (polled.ContainsKey("OnMouseEnter")) L(i2 + "if (over && !__lunaMouseOver) " + Call("OnMouseEnter"));
            if (polled.ContainsKey("OnMouseExit")) L(i2 + "if (!over && __lunaMouseOver) " + Call("OnMouseExit"));
            L(i2 + "__lunaMouseOver = over;");
            if (polled.ContainsKey("OnMouseOver")) L(i2 + "if (over) " + Call("OnMouseOver"));
        }
        L(i1 + "}");
        L("");
        L(i1 + "bool __LunaPointerOverThis()");
        L(i1 + "{");
        L(i2 + "UnityEngine.Camera cam = UnityEngine.Camera.main;");
        L(i2 + "if (cam == null) return false;");
        L(i2 + "if (GetComponent<UnityEngine.Collider2D>() != null)");
        L(i2 + "{");
        L(i3 + "UnityEngine.RaycastHit2D hit = UnityEngine.Physics2D.Raycast(cam.ScreenToWorldPoint(UnityEngine.Input.mousePosition), UnityEngine.Vector2.zero);");
        L(i3 + "return hit.collider != null && hit.collider.gameObject == gameObject;");
        L(i2 + "}");
        L(i2 + "UnityEngine.RaycastHit hit3D;");
        L(i2 + "return GetComponent<UnityEngine.Collider>() != null");
        L(i3 + "&& UnityEngine.Physics.Raycast(cam.ScreenPointToRay(UnityEngine.Input.mousePosition), out hit3D)");
        L(i3 + "&& hit3D.collider.gameObject == gameObject;");
        L(i1 + "}");
        return sb.ToString();
    }

    /// <summary>Removes a top-level class/struct/enum/interface declaration (with its attributes) — used when the
    /// type already exists in this project, so the parent's duplicate would be a compile error.</summary>
    public static string RemoveTopLevelType(string text, string typeName)
    {
        string mask = Mask(text);
        foreach (Match m in Regex.Matches(mask, @"\b(?:class|struct|enum|interface)\s+" + Regex.Escape(typeName) + @"\b"))
        {
            int open = mask.IndexOf('{', m.Index);
            if (open < 0) continue;
            int close = MatchForward(mask, open);
            if (close < 0) continue;

            int start = mask.LastIndexOf('\n', m.Index) + 1;
            // Pull in modifiers/attribute lines directly above ([Serializable], [System.Serializable] ...).
            while (start > 0)
            {
                int prevEnd = start - 1;
                int prevStart = mask.LastIndexOf('\n', Math.Max(0, prevEnd - 1)) + 1;
                string prev = mask.Substring(prevStart, prevEnd - prevStart).Trim();
                if (prev.StartsWith("[", StringComparison.Ordinal) && prev.EndsWith("]", StringComparison.Ordinal)) start = prevStart;
                else break;
            }
            int end = close + 1;
            if (end < mask.Length && mask[end] == ';') end++;
            int lineEnd = text.IndexOf('\n', end);
            if (lineEnd >= 0 && string.IsNullOrWhiteSpace(text.Substring(end, lineEnd - end))) end = lineEnd + 1;
            return text.Remove(start, end - start);
        }
        return text;
    }

    // ─────────────────────────────────────────────────────────────────────
    // Reports (no edits)
    // ─────────────────────────────────────────────────────────────────────

    private static readonly HashSet<string> ComponentMembers = new HashSet<string>(StringComparer.Ordinal)
    {
        "transform", "gameObject", "enabled", "name", "tag", "isActiveAndEnabled", "GetComponent", "GetComponents",
        "GetComponentInChildren", "GetComponentsInChildren", "GetComponentInParent", "CompareTag", "StartCoroutine",
        "StopCoroutine", "StopAllCoroutines", "Invoke", "CancelInvoke", "SendMessage", "TryGetComponent",
        "GetInstanceID", "ToString", "Equals", "GetType", "GetHashCode", "Length", "Count", "hideFlags", "useGUILayout", "runInEditMode"
    };

    /// <summary>Warn about `Type field; field.Member` uses where Type exists here but Member doesn't. Report only —
    /// variable names can be shadowed, so nothing is ever deleted on this evidence.</summary>
    private static void ReportTypedMemberGaps(string text, ILunaTypeCatalog catalog, LunaSanitizeResult result)
    {
        if (catalog == null) return;
        string mask = Mask(text);
        var vars = new Dictionary<string, string>(StringComparer.Ordinal);
        var ambiguous = new HashSet<string>(StringComparer.Ordinal);
        var arrays = new HashSet<string>(StringComparer.Ordinal);
        foreach (Match m in Regex.Matches(mask, @"\b([A-Z]\w*)(\s*\[\s*\])?\s+([A-Za-z_]\w*)\s*(?=[;=,)])"))
        {
            string type = m.Groups[1].Value;
            string name = m.Groups[3].Value;
            if (vars.TryGetValue(name, out string prior) && prior != type) ambiguous.Add(name);
            if (!vars.ContainsKey(name)) vars[name] = type;
            if (m.Groups[2].Success) arrays.Add(name);
        }
        var reported = new HashSet<string>();
        foreach (var kv in vars)
        {
            if (ambiguous.Contains(kv.Key) || !catalog.IsKnownType(kv.Value)) continue;
            foreach (Match u in Regex.Matches(mask, $@"(?<![\.\w]){Regex.Escape(kv.Key)}\s*(?:\[[^\]\n]*\]\s*)?\.\s*([A-Za-z_]\w*)"))
            {
                // Any/Length/etc. belong to the array or its extensions, not its element type.
                if (arrays.Contains(kv.Key) && u.Value.IndexOf('[') < 0) continue;
                string member = u.Groups[1].Value;
                if (ComponentMembers.Contains(member) || catalog.HasMember(kv.Value, member)) continue;
                if (reported.Add(kv.Value + "." + member))
                {
                    result.MissingMembers.Add(new KeyValuePair<string, string>(kv.Value, member));
                    result.Warnings.Add($"line {LineOf(text, u.Index)}: {kv.Key}.{member}: this project's {kv.Value} has no '{member}' (compile error unless '{kv.Key}' is a shadowed local).");
                }
            }
        }
    }

    private static void ReportUnavailableTypes(string text, ICollection<string> unavailable, LunaSanitizeResult result)
    {
        if (unavailable == null || unavailable.Count == 0) return;
        string mask = Mask(text);
        foreach (var type in unavailable)
        {
            var m = Regex.Match(mask, $@"(?<![\.\w]){Regex.Escape(type)}\b");
            if (m.Success)
                result.Warnings.Add($"line {LineOf(text, m.Index)}: uses '{type}', which only exists in a blocked (SDK/monetization) script — compile error.");
        }
    }
}
