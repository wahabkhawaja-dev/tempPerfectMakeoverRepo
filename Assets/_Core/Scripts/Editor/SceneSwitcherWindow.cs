#if UNITY_EDITOR
using System.Collections.Generic;
using System.IO;
using System.Linq;
using UnityEditor;
using UnityEditor.SceneManagement;
using UnityEngine;
using UnityEngine.SceneManagement;

public class SceneSwitcherWindow : EditorWindow
{
    Vector2 scroll;
    string search = "";
    bool showBuildScenesOnly = true;
    bool includeAdditive;
    List<SceneEntry> scenes = new List<SceneEntry>();

    class SceneEntry
    {
        public string name;
        public string path;
        public bool inBuild;
        public bool enabledInBuild;
        public int buildIndex;
    }

    [MenuItem("Tools/Scene Switcher %#s")]
    public static void Open()
    {
        var window = GetWindow<SceneSwitcherWindow>("Scene Switcher");
        window.minSize = new Vector2(360, 280);
        window.RefreshScenes();
        window.Show();
    }

    void OnEnable()
    {
        RefreshScenes();
    }

    void OnFocus()
    {
        RefreshScenes();
    }

    void RefreshScenes()
    {
        scenes.Clear();

        var buildPaths = new Dictionary<string, (int index, bool enabled)>();
        var buildScenes = EditorBuildSettings.scenes;
        for (int i = 0; i < buildScenes.Length; i++)
        {
            var bs = buildScenes[i];
            if (string.IsNullOrEmpty(bs.path))
                continue;

            buildPaths[bs.path.Replace('\\', '/')] = (i, bs.enabled);
        }

        if (showBuildScenesOnly)
        {
            foreach (var kv in buildPaths.OrderBy(k => k.Value.index))
            {
                scenes.Add(new SceneEntry
                {
                    name = Path.GetFileNameWithoutExtension(kv.Key),
                    path = kv.Key,
                    inBuild = true,
                    enabledInBuild = kv.Value.enabled,
                    buildIndex = kv.Value.index
                });
            }
        }
        else
        {
            string[] guids = AssetDatabase.FindAssets("t:Scene", new[] { "Assets" });
            foreach (string guid in guids)
            {
                string path = AssetDatabase.GUIDToAssetPath(guid).Replace('\\', '/');
                if (path.Contains("/Third Party/") || path.Contains("/ThirdParty/"))
                    continue;

                bool inBuild = buildPaths.TryGetValue(path, out var info);
                scenes.Add(new SceneEntry
                {
                    name = Path.GetFileNameWithoutExtension(path),
                    path = path,
                    inBuild = inBuild,
                    enabledInBuild = inBuild && info.enabled,
                    buildIndex = inBuild ? info.index : -1
                });
            }

            scenes = scenes
                .OrderByDescending(s => s.inBuild)
                .ThenBy(s => s.buildIndex < 0 ? int.MaxValue : s.buildIndex)
                .ThenBy(s => s.name)
                .ToList();
        }
    }

    void OnGUI()
    {
        EditorGUILayout.Space(6);

        using (new EditorGUILayout.HorizontalScope())
        {
            search = EditorGUILayout.TextField("Search", search);
            if (GUILayout.Button("Refresh", GUILayout.Width(70)))
                RefreshScenes();
        }

        bool newBuildOnly = EditorGUILayout.ToggleLeft("Build Settings scenes only", showBuildScenesOnly);
        if (newBuildOnly != showBuildScenesOnly)
        {
            showBuildScenesOnly = newBuildOnly;
            RefreshScenes();
        }

        includeAdditive = EditorGUILayout.ToggleLeft("Open Additive (keep current scenes)", includeAdditive);

        EditorGUILayout.Space(4);
        DrawActiveSceneBar();
        EditorGUILayout.Space(6);

        scroll = EditorGUILayout.BeginScrollView(scroll);

        string filter = (search ?? "").Trim().ToLowerInvariant();
        int drawn = 0;

        foreach (var scene in scenes)
        {
            if (!string.IsNullOrEmpty(filter) &&
                !scene.name.ToLowerInvariant().Contains(filter) &&
                !scene.path.ToLowerInvariant().Contains(filter))
                continue;

            DrawSceneRow(scene);
            drawn++;
        }

        if (drawn == 0)
            EditorGUILayout.HelpBox("No scenes found.", MessageType.Info);

        EditorGUILayout.EndScrollView();
    }

    void DrawActiveSceneBar()
    {
        var active = SceneManager.GetActiveScene();
        using (new EditorGUILayout.VerticalScope("box"))
        {
            EditorGUILayout.LabelField("Active Scene", EditorStyles.boldLabel);
            EditorGUILayout.LabelField(string.IsNullOrEmpty(active.path) ? "(unsaved / untitled)" : active.name);
            if (!string.IsNullOrEmpty(active.path))
                EditorGUILayout.LabelField(active.path, EditorStyles.miniLabel);
        }
    }

    void DrawSceneRow(SceneEntry scene)
    {
        bool isActive = SceneManager.GetActiveScene().path == scene.path;

        using (new EditorGUILayout.VerticalScope("box"))
        {
            using (new EditorGUILayout.HorizontalScope())
            {
                string label = scene.name;
                if (scene.inBuild)
                    label += scene.enabledInBuild ? $"  [{scene.buildIndex}]" : "  [disabled]";

                GUIStyle nameStyle = isActive ? EditorStyles.boldLabel : EditorStyles.label;
                EditorGUILayout.LabelField(label, nameStyle);

                if (isActive)
                {
                    var old = GUI.color;
                    GUI.color = new Color(0.45f, 0.9f, 0.45f);
                    GUILayout.Label("ACTIVE", EditorStyles.miniBoldLabel, GUILayout.Width(55));
                    GUI.color = old;
                }
            }

            EditorGUILayout.LabelField(scene.path, EditorStyles.miniLabel);

            using (new EditorGUILayout.HorizontalScope())
            {
                if (GUILayout.Button("Select", GUILayout.Height(22)))
                    SelectSceneAsset(scene.path);

                GUI.enabled = !isActive || includeAdditive;
                if (GUILayout.Button(includeAdditive ? "Open Additive" : "Open", GUILayout.Height(22)))
                    OpenScene(scene.path);
                GUI.enabled = true;

                if (GUILayout.Button("Ping", GUILayout.Width(50), GUILayout.Height(22)))
                    PingSceneAsset(scene.path);
            }
        }
    }

    static void SelectSceneAsset(string path)
    {
        var asset = AssetDatabase.LoadAssetAtPath<SceneAsset>(path);
        if (asset == null)
        {
            Debug.LogWarning($"Scene not found: {path}");
            return;
        }

        Selection.activeObject = asset;
        EditorGUIUtility.PingObject(asset);
    }

    static void PingSceneAsset(string path)
    {
        var asset = AssetDatabase.LoadAssetAtPath<SceneAsset>(path);
        if (asset != null)
            EditorGUIUtility.PingObject(asset);
    }

    void OpenScene(string path)
    {
        if (!File.Exists(path) && !File.Exists(Path.GetFullPath(path)))
        {
            // Unity project-relative path check
            if (AssetDatabase.LoadAssetAtPath<SceneAsset>(path) == null)
            {
                EditorUtility.DisplayDialog("Scene Switcher", $"Scene not found:\n{path}", "OK");
                return;
            }
        }

        if (!EditorSceneManager.SaveCurrentModifiedScenesIfUserWantsTo())
            return;

        var mode = includeAdditive ? OpenSceneMode.Additive : OpenSceneMode.Single;
        var scene = EditorSceneManager.OpenScene(path, mode);

        if (scene.IsValid())
        {
            if (includeAdditive)
                EditorSceneManager.SetActiveScene(scene);

            Debug.Log($"Opened scene: {path}");
        }
    }
}
#endif
