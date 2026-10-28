#if UNITY_EDITOR
using UnityEditor;
using UnityEngine;

/// <summary>Shared look for the Luna Playables editor windows (header, cards, badges, action buttons).</summary>
public static class LunaEditorUI
{
    public static readonly Color Accent = new Color(1.00f, 0.55f, 0.20f);
    public static readonly Color Good = new Color(0.30f, 0.72f, 0.42f);
    public static readonly Color Warn = new Color(0.90f, 0.66f, 0.15f);
    public static readonly Color Bad = new Color(0.86f, 0.33f, 0.30f);
    public static readonly Color Info = new Color(0.30f, 0.55f, 0.90f);
    public static readonly Color Muted = new Color(0.45f, 0.45f, 0.48f);
    public static readonly Color Purple = new Color(0.60f, 0.45f, 0.85f);

    private static GUIStyle title, subtitle, sectionTitle, badge, card, hint, rowLabel;

    public static GUIStyle Hint => hint ?? (hint = new GUIStyle(EditorStyles.miniLabel) { wordWrap = true, richText = true });
    public static GUIStyle RowLabel => rowLabel ?? (rowLabel = new GUIStyle(EditorStyles.label) { richText = true, clipping = TextClipping.Clip });

    private static void Init()
    {
        if (title != null) return;
        title = new GUIStyle(EditorStyles.boldLabel) { fontSize = 15, normal = { textColor = Color.white } };
        subtitle = new GUIStyle(EditorStyles.miniLabel) { normal = { textColor = new Color(1f, 1f, 1f, 0.8f) }, wordWrap = true };
        sectionTitle = new GUIStyle(EditorStyles.boldLabel) { fontSize = 12 };
        badge = new GUIStyle(EditorStyles.miniBoldLabel)
        {
            alignment = TextAnchor.MiddleCenter,
            normal = { textColor = Color.white },
            padding = new RectOffset(5, 5, 0, 0),
        };
        card = new GUIStyle(EditorStyles.helpBox) { padding = new RectOffset(10, 10, 8, 10), margin = new RectOffset(6, 6, 4, 4) };
    }

    /// <summary>Coloured banner with the window title.</summary>
    public static void Header(string text, string sub)
    {
        Init();
        var r = GUILayoutUtility.GetRect(0, string.IsNullOrEmpty(sub) ? 30 : 44, GUILayout.ExpandWidth(true));
        EditorGUI.DrawRect(r, new Color(0.13f, 0.13f, 0.15f));
        EditorGUI.DrawRect(new Rect(r.x, r.yMax - 3, r.width, 3), Accent);
        GUI.Label(new Rect(r.x + 10, r.y + 5, r.width - 20, 20), text, title);
        if (!string.IsNullOrEmpty(sub))
            GUI.Label(new Rect(r.x + 10, r.y + 23, r.width - 20, 16), sub, subtitle);
    }

    /// <summary>Starts a boxed card; pair with <see cref="EndCard"/>.</summary>
    public static void BeginCard(string heading = null, string hintText = null)
    {
        Init();
        EditorGUILayout.BeginVertical(card);
        if (!string.IsNullOrEmpty(heading)) GUILayout.Label(heading, sectionTitle);
        if (!string.IsNullOrEmpty(hintText)) GUILayout.Label(hintText, Hint);
        if (!string.IsNullOrEmpty(heading) || !string.IsNullOrEmpty(hintText)) GUILayout.Space(4);
    }

    public static void EndCard() => EditorGUILayout.EndVertical();

    /// <summary>Card whose body is collapsible. Returns the new open state; call <see cref="EndCard"/> regardless.</summary>
    public static bool BeginFoldoutCard(bool open, string heading, string badgeText = null, Color? badgeColor = null)
    {
        Init();
        EditorGUILayout.BeginVertical(card);
        EditorGUILayout.BeginHorizontal();
        open = EditorGUILayout.Foldout(open, heading, true, EditorStyles.foldoutHeader);
        if (!string.IsNullOrEmpty(badgeText)) Badge(badgeText, badgeColor ?? Muted);
        EditorGUILayout.EndHorizontal();
        if (open) GUILayout.Space(2);
        return open;
    }

    /// <summary>Small colour chip with white text.</summary>
    public static void Badge(string text, Color color, float minWidth = 0)
    {
        Init();
        var content = new GUIContent(text);
        float w = Mathf.Max(minWidth, badge.CalcSize(content).x + 4);
        var r = GUILayoutUtility.GetRect(w, 16, GUILayout.Width(w), GUILayout.Height(16));
        r.y += 1;
        EditorGUI.DrawRect(r, color);
        GUI.Label(r, content, badge);
    }

    /// <summary>Large coloured action button.</summary>
    public static bool BigButton(string text, Color color, float height = 34, bool enabled = true, string tooltip = null)
    {
        using (new EditorGUI.DisabledScope(!enabled))
        {
            var prev = GUI.backgroundColor;
            GUI.backgroundColor = color;
            bool clicked = GUILayout.Button(new GUIContent(text, tooltip), GUILayout.Height(height));
            GUI.backgroundColor = prev;
            return clicked;
        }
    }

    /// <summary>Search box with a clear button.</summary>
    public static string SearchField(string value, params GUILayoutOption[] options)
    {
        EditorGUILayout.BeginHorizontal();
        value = EditorGUILayout.TextField(value ?? "", EditorStyles.toolbarSearchField, options);
        if (!string.IsNullOrEmpty(value) && GUILayout.Button("×", EditorStyles.miniButton, GUILayout.Width(20)))
        {
            value = "";
            GUI.FocusControl(null);
        }
        EditorGUILayout.EndHorizontal();
        return value;
    }

    /// <summary>Numbered workflow pills, the current one highlighted.</summary>
    public static void Stepper(int current, params string[] labels)
    {
        Init();
        EditorGUILayout.BeginHorizontal();
        for (int i = 0; i < labels.Length; i++)
        {
            Color c = i < current ? Good : i == current ? Accent : Muted;
            Badge($"{i + 1}  {labels[i]}", c, 70);
            if (i < labels.Length - 1) GUILayout.Label("›", GUILayout.Width(10));
        }
        GUILayout.FlexibleSpace();
        EditorGUILayout.EndHorizontal();
    }

    /// <summary>Status message box.</summary>
    public static void Status(string message, MessageType type)
    {
        if (string.IsNullOrEmpty(message)) return;
        EditorGUILayout.HelpBox(message, type);
    }

    /// <summary>Horizontal separator line.</summary>
    public static void Separator()
    {
        var r = GUILayoutUtility.GetRect(0, 1, GUILayout.ExpandWidth(true));
        EditorGUI.DrawRect(r, new Color(0.5f, 0.5f, 0.5f, 0.3f));
    }
}
#endif
