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

        EditorSceneManager.MarkSceneDirty(scene);
        EditorSceneManager.SaveScene(scene);
        Debug.Log("Playable scene now uses " + prefabPath);
    }
}
#endif
