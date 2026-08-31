#if UNITY_EDITOR
using UnityEditor;
using UnityEditor.SceneManagement;
using UnityEngine;

public static class PlayableEditorMenu
{
    const string PlayableScene = "Assets/_Playable/Scenes/Gameplay_Playable.unity";
    const string ManicureStepsPrefab = "Assets/_Playable/Levels/Level3_2_NailTrim_Playable.prefab";
    const string HairPrefab = "Assets/_Playable/Levels/Level1_1_Playable.prefab";

    [MenuItem("Playable/Open Playable Scene")]
    public static void OpenPlayableScene()
    {
        if (EditorSceneManager.SaveCurrentModifiedScenesIfUserWantsTo())
            EditorSceneManager.OpenScene(PlayableScene);
    }

    [MenuItem("Playable/Use Hair Prefab (Level1_1 copy)")]
    public static void UseHair()
    {
        SwapSceneLevel(HairPrefab);
    }

    [MenuItem("Playable/Use Last Built Playable")]
    public static void UseLastBuilt()
    {
        string path = EditorPrefs.GetString(PlayableLevelFactory.LastPrefabPref, ManicureStepsPrefab);
        SwapSceneLevel(path);
    }

    public static void SwapSceneLevel(string prefabPath)
    {
        SwapSceneLevel(prefabPath, null);
    }

    /// <summary>
    /// <paramref name="innerPrefabPath"/> is the built inner Fix-It playable. When set, a
    /// PlayableInnerLevel object is kept in the scene holding both prefabs — it outlives the
    /// level instances, which is the whole point (it destroys and re-creates them).
    /// </summary>
    public static void SwapSceneLevel(string prefabPath, string innerPrefabPath)
    {
        var scene = EditorSceneManager.OpenScene(PlayableScene);
        var existing = Object.FindObjectsOfType<LevelData>(true);
        for (int i = 0; i < existing.Length; i++)
        {
            if (existing[i] != null)
                Object.DestroyImmediate(existing[i].gameObject);
        }

        var prefab = AssetDatabase.LoadAssetAtPath<GameObject>(prefabPath);
        if (prefab == null)
        {
            Debug.LogError("Prefab missing: " + prefabPath);
            return;
        }

        var instance = (GameObject)PrefabUtility.InstantiatePrefab(prefab, scene);
        instance.transform.position = Vector3.zero;

        var gm = Object.FindObjectOfType<GameManager>();
        if (gm != null)
            gm.currentLevel = instance.GetComponent<LevelData>();

        WireInnerLevel(prefab, innerPrefabPath);

        EditorSceneManager.MarkSceneDirty(scene);
        EditorSceneManager.SaveScene(scene);
        Debug.Log("Playable scene now uses " + prefabPath);
    }

    static void WireInnerLevel(GameObject outerPrefab, string innerPrefabPath)
    {
        var existing = Object.FindObjectOfType<PlayableInnerLevel>(true);

        if (string.IsNullOrEmpty(innerPrefabPath))
        {
            // No inner level in this build — a stale one would resurrect the wrong prefab.
            if (existing != null)
                Object.DestroyImmediate(existing.gameObject);
            return;
        }

        var innerPrefab = AssetDatabase.LoadAssetAtPath<GameObject>(innerPrefabPath);
        if (innerPrefab == null)
        {
            Debug.LogError("Inner playable prefab missing: " + innerPrefabPath);
            return;
        }

        if (existing == null)
            existing = new GameObject("PlayableInnerLevel").AddComponent<PlayableInnerLevel>();

        var so = new SerializedObject(existing);
        so.FindProperty("outerPrefab").objectReferenceValue = outerPrefab;
        so.FindProperty("innerPrefab").objectReferenceValue = innerPrefab;
        so.ApplyModifiedPropertiesWithoutUndo();

        Debug.Log("PlayableInnerLevel wired: " + outerPrefab.name + " <-> " + innerPrefab.name);
    }
}
#endif
