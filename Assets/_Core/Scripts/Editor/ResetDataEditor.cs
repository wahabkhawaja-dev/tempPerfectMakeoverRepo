using System.IO;
using UnityEngine;
using UnityEditor;

public class ResetDataEditor : EditorWindow
{
    static readonly string jsonFilePath = Application.persistentDataPath + "/SaveData.json";
    [MenuItem("Tools/Reset All Data")]
    public static void ResetAllData()
    {
        if (EditorUtility.DisplayDialog("Confirm Reset",
            $"This will delete the JSON file at:\n\n{jsonFilePath}\n\nand clear all PlayerPrefs.\n\nAre you sure?",
            "Yes", "Cancel"))
        {
            // Delete the JSON file if it exists
            try
            {
                if (File.Exists(jsonFilePath))
                {
                    File.Delete(jsonFilePath);
                    Debug.Log($"✅ Deleted JSON file at: {jsonFilePath}");
                }
                else
                {
                    Debug.LogWarning("⚠️ JSON file not found.");
                }
            }
            catch (IOException e)
            {
                Debug.LogError($"❌ Failed to delete file: {e.Message}");
            }

            // Clear PlayerPrefs
            PlayerPrefs.DeleteAll();
            PlayerPrefs.Save();

            Debug.Log("🧹 All PlayerPrefs have been cleared.");
        }
    }
}
