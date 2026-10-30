#if UNITY_EDITOR
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Reflection;
using UnityEditor;
using UnityEngine;

public partial class CrossProjectPrefabImporter
{
    // Exercises the actual planner, writer, Unity loading, and journal on disposable assets.
    // No scene is opened and no production prefab or source project is edited.
    [MenuItem("Playable/Validate Prefab Importer")]
    public static void RunRegressionChecks()
    {
        if (EditorApplication.isPlayingOrWillChangePlaymode || EditorApplication.isCompiling)
            throw new InvalidOperationException("Run importer regression checks in Edit Mode after compilation finishes.");
        string id = System.Guid.NewGuid().ToString("N");
        string fixture = "Assets/__ImporterValidation_" + id;
        string workspace = Path.Combine(ProjectRoot, "Library/PrefabImporterTests", id);
        string source = Path.Combine(workspace, "SourceProject");
        string dependencyRoot = fixture + "/Imported";
        CrossProjectPrefabImporter window = null;
        string transaction = null;
        var passed = new List<string>();
        string previousResult = File.Exists(PrefabImportTransaction.ResultPath) ? File.ReadAllText(PrefabImportTransaction.ResultPath) : null;
        void Check(bool condition, string name)
        {
            if (!condition) throw new InvalidOperationException("Importer regression failed: " + name);
            passed.Add(name);
        }
        void CompleteValidation() => typeof(PrefabImportTransaction).GetMethod("CompleteIfReady", BindingFlags.NonPublic | BindingFlags.Static).Invoke(null, null);
        try
        {
            Check(IsDiscoveredLevel("Assets/BundledLevels/Event1/Event1_1.prefab"), "bundled event prefab is discovered without Level in its name");
            Check(IsDiscoveredLevel("Assets/BundledLevels/SP_9.prefab"), "bundled special prefab is discovered");
            Check(IsDiscoveredLevel("Assets/BundledLevels/Theme7/Subfolder/Bonus.prefab"), "bundled nested folders are discovered recursively");
            Check(!IsDiscoveredLevel("Assets/Particles/Confetti.prefab"), "unrelated non-level prefab stays out of picker");
            string adapted = AdaptMakeoverTypes("CG_LevelData level; CG_BasicDrag drag; // CG_LevelData\nstring s = \"CG_LevelData\";", new ReflectionCatalog());
            Check(adapted.StartsWith("LevelData level; BasicDrag drag;") && adapted.Contains("// CG_LevelData") && adapted.Contains("\"CG_LevelData\""),
                "verified CG shared type adaptation preserves comments and strings");
            var hapticOptions = new LunaSanitizeOptions { ConvertOnMouse = false };
            string haptics = "void F() { CG_VibrationManager.instance.SoftImpact(); VibrationManager.Instance.LightImpact(); DOVirtual.DelayedCall(.1f, () => CG_VibrationManager.instance.Impact(Choose(1, 2))); AudioController.instance.PlayAnySfx(1, clip, 0); }";
            string sanitizedHaptics = LunaScriptSanitizer.Sanitize(haptics, hapticOptions).Text;
            string hapticMask = LunaScriptSanitizer.Mask(sanitizedHaptics);
            Check(!hapticMask.Contains("VibrationManager"), "CG and unprefixed haptic calls are removed from direct statements and delayed callbacks");
            Check(hapticMask.Contains("() => {") && hapticMask.Contains("AudioController.instance.PlayAnySfx"),
                "stripped haptic lambdas keep valid void callbacks and preserve audio/gameplay calls");
            Check(LunaScriptSanitizer.Sanitize(sanitizedHaptics, hapticOptions).Text == sanitizedHaptics,
                "repairing already imported haptic calls is idempotent");
            var skin = LunaScriptSanitizer.Sanitize("using UnityEngine.U2D.Animation;\nvoid F() { bones = Tool.GetComponent<UnityEngine.U2D.Animation.SpriteSkin>().boneTransforms; }", hapticOptions);
            Check(!skin.Text.Contains("SpriteSkin") && !skin.Text.Contains("U2D.Animation") && skin.Text.Contains("Skip(Tool.GetComponentsInChildren<Transform>(true), 1)") && skin.Warnings.Count == 0,
                "SpriteSkin bone lookups become Luna-safe child transforms");
            string apiGaps = "int[] order; float[] at; IComparer<float> cmp;\nvoid F() { if (Source.isActiveAndEnabled && isActiveAndEnabled) { } System.Array.Sort(at, order); Array.Sort(at, cmp); }";
            string apiFixed = LunaScriptSanitizer.Sanitize(apiGaps, hapticOptions).Text;
            Check(!apiFixed.Contains("isActiveAndEnabled") && apiFixed.Contains("(Source.enabled && Source.gameObject.activeInHierarchy)")
                  && apiFixed.Contains("(enabled && gameObject.activeInHierarchy)") && apiFixed.Contains("LunaArray.Sort(at, order)")
                  && apiFixed.Contains("Array.Sort(at, cmp)") && LunaScriptSanitizer.Sanitize(apiFixed, hapticOptions).Text == apiFixed,
                "Luna-missing isActiveAndEnabled and Array.Sort(keys, items) are rewritten; comparer sorts are left alone");
            string emitCode = "void F(ParticleSystem a) { var emit = new ParticleSystem.EmitParams(); emit.position = p; ParticleSystem ps = a; ps.Emit(emit, 1); a.Emit(3); }";
            string emitFixed = LunaScriptSanitizer.Sanitize(emitCode, hapticOptions).Text;
            Check(!emitFixed.Contains("ParticleSystem.EmitParams") && emitFixed.Contains("new LunaEmitParams()") && emitFixed.Contains("LunaParticles.Emit(ps, emit, 1)")
                  && emitFixed.Contains("a.Emit(3)") && LunaScriptSanitizer.Sanitize(emitFixed, hapticOptions).Text == emitFixed,
                "ParticleSystem.EmitParams emits go through LunaParticles.Emit; plain Emit(count) is left alone");
            string spreadCode = "void Add(params Vector2[] poly) { }\nvoid Tag(int id, params Color[] cs) { }\nvoid F(Vector2[] arr) { Add(a, b, F2(c, d)); Add(arr); Add(new[] { a }); Tag(1, c1, c2); Tag(2); }";
            string spreadFixed = LunaScriptSanitizer.Sanitize(spreadCode, hapticOptions).Text;
            Check(spreadFixed.Contains("Add(new Vector2[] { a, b, F2(c, d) })") && spreadFixed.Contains("Add(arr)") && spreadFixed.Contains("Add(new[] { a })")
                  && spreadFixed.Contains("Tag(1, new Color[] { c1, c2 })") && spreadFixed.Contains("Tag(2)") && spreadFixed.Contains("void Add(params Vector2[] poly)")
                  && LunaScriptSanitizer.Sanitize(spreadFixed, hapticOptions).Text == spreadFixed,
                "calls spreading arguments into a params Unity-struct array pass an explicit array (Bridge LP2007 crash)");
            string rangeCode = "void F() { mask.backSortingOrder = Outline.sortingOrder - 1; mask.frontSortingOrder = Outline.sortingOrder; }";
            string rangeFixed = LunaScriptSanitizer.Sanitize(rangeCode, hapticOptions).Text;
            Check(rangeFixed.Contains("mask.frontSortingOrder = Outline.sortingOrder + 1;") && rangeFixed.Contains("backSortingOrder = Outline.sortingOrder - 1;")
                  && LunaScriptSanitizer.Sanitize(rangeFixed, hapticOptions).Text == rangeFixed,
                "runtime SpriteMask front order is moved one past its sprite (Luna's front bound is exclusive)");
            string cloneCode = "public ParticleSystem Dust; public SpriteRenderer Weft; public GameObject Prefab; MyScript Mine;\nvoid F() { var d = Instantiate(Dust, parent, true); var w = Instantiate(Weft, Weft.transform.parent); var g = Instantiate(Prefab); var m = Instantiate(Mine); }";
            string cloneFixed = LunaScriptSanitizer.Sanitize(cloneCode, hapticOptions).Text;
            Check(cloneFixed.Contains("Instantiate(Dust.gameObject, parent, true).GetComponent<ParticleSystem>()")
                  && cloneFixed.Contains("Instantiate(Weft.gameObject, Weft.transform.parent).GetComponent<SpriteRenderer>()")
                  && cloneFixed.Contains("Instantiate(Prefab);") && cloneFixed.Contains("Instantiate(Mine);")
                  && LunaScriptSanitizer.Sanitize(cloneFixed, hapticOptions).Text == cloneFixed,
                "Instantiate of a built-in component clones its GameObject (Luna can't clone the component itself)");
            Check(AdaptMakeoverTypes("CG_SaveSystem.Instance.GetLevel(levelNo).subLevels[partNo].stepsDone = 2;", new ReflectionCatalog())
                == "SaveSystem.Instance.DataFields.AllLevels[levelNo].subLevels[partNo].stepsDone = 2;", "parent event save accessor adapts to local in-memory data");
            string identity = "guid: " + id + "\n  bones:\n  - guid: " + id + "\n  ref: {fileID: 7, guid: " + id + ", type: 3}";
            string remappedIdentity = LunaYamlPatcher.RemapGuids(identity, new Dictionary<string, string> { [id] = "11111111111111111111111111111111" }, out int remapCount);
            Check(LunaYamlPatcher.ReferencedGuids(identity).Count == 1 && remapCount == 1 && remappedIdentity.StartsWith("guid: " + id),
                "GUID scanning and remapping preserve asset, bone and mixer identities");
            Directory.CreateDirectory(Path.Combine(ProjectRoot, fixture));
            string texturePath = fixture + "/Art.png";
            var texture = new Texture2D(1024, 16, TextureFormat.RGBA32, false);
            File.WriteAllBytes(Path.Combine(ProjectRoot, texturePath), texture.EncodeToPNG());
            DestroyImmediate(texture);
            AssetDatabase.ImportAsset(texturePath, ImportAssetOptions.ForceSynchronousImport);
            var importer = (TextureImporter)AssetImporter.GetAtPath(texturePath);
            importer.textureType = TextureImporterType.Sprite;
            importer.spriteImportMode = SpriteImportMode.Single;
            importer.SaveAndReimport();
            string secondary = fixture + "/Secondary.png";
            File.Copy(Path.Combine(ProjectRoot, texturePath), Path.Combine(ProjectRoot, secondary));
            AssetDatabase.ImportAsset(secondary, ImportAssetOptions.ForceSynchronousImport);
            importer.secondarySpriteTextures = new[] { new SecondarySpriteTexture {
                name = "_NormalMap", texture = AssetDatabase.LoadAssetAtPath<Texture2D>(secondary) } };
            importer.SaveAndReimport();
            string secondaryGuid = AssetDatabase.AssetPathToGUID(secondary);

            string includePath = fixture + "/Color.cginc";
            File.WriteAllText(Path.Combine(ProjectRoot, includePath), "fixed4 ImportedColor() { return fixed4(1,1,1,1); }\n");
            AssetDatabase.ImportAsset(includePath, ImportAssetOptions.ForceSynchronousImport);
            string shaderPath = fixture + "/Fixture.shader";
            File.WriteAllText(Path.Combine(ProjectRoot, shaderPath), "Shader \"Hidden/ImporterValidation/" + id + "\" { SubShader { Pass {\nCGPROGRAM\n#pragma vertex vert\n#pragma fragment frag\n#include \"Color.cginc\"\nfloat4 vert(float4 v:POSITION):SV_POSITION { return v; }\nfixed4 frag():SV_Target { return ImportedColor(); }\nENDCG\n} } }");
            AssetDatabase.ImportAsset(shaderPath, ImportAssetOptions.ForceSynchronousImport);
            var material = new Material(AssetDatabase.LoadAssetAtPath<Shader>(shaderPath));
            AssetDatabase.CreateAsset(material, fixture + "/Fixture.mat");

            var child = new GameObject("NestedArt");
            child.transform.localScale = new Vector3(1.25f, 2.5f, 1f);
            child.AddComponent<SpriteRenderer>().sprite = AssetDatabase.LoadAssetAtPath<Sprite>(texturePath);
            child.GetComponent<SpriteRenderer>().sharedMaterial = material;
            var childPrefab = PrefabUtility.SaveAsPrefabAsset(child, fixture + "/Nested.prefab");
            DestroyImmediate(child);
            var root = new GameObject("ImportedLevel");
            root.AddComponent<PlayableCTA>();
            root.AddComponent<LevelData>();
            var nested = (GameObject)PrefabUtility.InstantiatePrefab(childPrefab);
            nested.transform.SetParent(root.transform, false);
            PrefabUtility.SaveAsPrefabAsset(root, fixture + "/LevelFixture.prefab");
            DestroyImmediate(root);
            AssetDatabase.SaveAssets();

            // Export fixture files (and metas) into a separate, disk-only source project.
            string sourceAssets = Path.Combine(source, "Assets/Fixture");
            Directory.CreateDirectory(sourceAssets);
            foreach (string file in Directory.GetFiles(Path.Combine(ProjectRoot, fixture)))
                File.Copy(file, Path.Combine(sourceAssets, Path.GetFileName(file)));
            string ctaGuid = AssetDatabase.FindAssets("PlayableCTA t:MonoScript").Select(AssetDatabase.GUIDToAssetPath)
                .Where(p => p.EndsWith("/PlayableCTA.cs", StringComparison.Ordinal)).Select(AssetDatabase.AssetPathToGUID).First();
            string foreignGuid = System.Guid.NewGuid().ToString("N");
            string ctaPath = AssetDatabase.GUIDToAssetPath(ctaGuid);
            Directory.CreateDirectory(Path.Combine(source, "Assets/Scripts"));
            File.Copy(Path.Combine(ProjectRoot, ctaPath), Path.Combine(source, "Assets/Scripts/PlayableCTA.cs"));
            File.WriteAllText(Path.Combine(source, "Assets/Scripts/PlayableCTA.cs.meta"), "fileFormatVersion: 2\nguid: " + foreignGuid + "\n");
            string seed = "Assets/Fixture/LevelFixture.prefab";
            string seedFull = Path.Combine(source, seed);
            File.WriteAllText(seedFull, File.ReadAllText(seedFull).Replace(ctaGuid, foreignGuid));
            string sourceDigest = string.Join("|", Directory.GetFiles(source, "*", SearchOption.AllDirectories).OrderBy(p => p).Select(FileHash));
            AssetDatabase.DeleteAsset(fixture);
            AssetDatabase.Refresh();

            window = CreateInstance<CrossProjectPrefabImporter>();
            window.sourceProjectRoot = source;
            window.destRoot = dependencyRoot;
            window.levelDest = fixture + "/Levels";
            window.nullUnresolved = false;
            window.autoReplaceLevels = false;
            Plan MakePlan()
            {
                var index = BuildGuidIndex(source, out var scripts);
                var result = window.BuildPlan(index, scripts, new List<string> { seed }, new HashSet<string>(StringComparer.OrdinalIgnoreCase) { seed },
                    new Dictionary<string, HashSet<string>>(), new Dictionary<string, bool>());
                result.Label = "regression";
                return result;
            }
            var candidate = MakePlan();
            Check(candidate.Items.Any(i => i.Guid == secondaryGuid && i.WillWrite), "secondary texture discovered through .meta");
            Check(candidate.Items.Any(i => i.SourceRel == "Assets/Fixture/Color.cginc" && i.WillWrite), "shader include discovered and copied");
            Check(candidate.Items.Any(i => i.Guid == foreignGuid && i.State == State.Remapped), "script class remaps to local GUID");
            var preflight = window.ValidatePlan(candidate);
            Check(preflight.Count == 0, "complete dependency plan passes preflight: " + string.Join("; ", preflight));
            transaction = window.WritePlan(candidate);
            CompleteValidation();
            Check(File.Exists(Path.Combine(transaction, "validated.txt")), "actual import passes Unity reference validation");
            var shaderItem = candidate.Items.Single(i => i.SourceRel == "Assets/Fixture/Fixture.shader");
            Check(shaderItem.Content.Contains(dependencyRoot + "/Fixture/Color.cginc")
                && !ShaderUtil.ShaderHasError(AssetDatabase.LoadAssetAtPath<Shader>(shaderItem.Dest)), "copied shader include resolves in local destination");
            string importedPath = candidate.Items.Single(i => i.IsLevelSeed).Dest;
            var imported = AssetDatabase.LoadAssetAtPath<GameObject>(importedPath);
            string spPath = fixture + "/Special/SP_99.prefab";
            string eventPath = fixture + "/Events/Bonus.prefab";
            Directory.CreateDirectory(Path.Combine(ProjectRoot, fixture, "Special"));
            Directory.CreateDirectory(Path.Combine(ProjectRoot, fixture, "Events"));
            AssetDatabase.Refresh();
            Check(AssetDatabase.CopyAsset(importedPath, spPath) && AssetDatabase.CopyAsset(importedPath, eventPath),
                "discovery fixtures created in custom SP/event folders");
            string variantPath = fixture + "/Events/Variant.prefab";
            var previewScene = UnityEditor.SceneManagement.EditorSceneManager.NewPreviewScene();
            try
            {
                var instance = (GameObject)PrefabUtility.InstantiatePrefab(imported, previewScene);
                PrefabUtility.SaveAsPrefabAsset(instance, variantPath);
            }
            finally { UnityEditor.SceneManagement.EditorSceneManager.ClosePreviewScene(previewScene); }
            var discoveredSources = PlayableLevelFactory.ListSourcePrefabs();
            Check(discoveredSources.Contains(importedPath) && discoveredSources.Contains(spPath) && discoveredSources.Contains(eventPath),
                "wizard discovers imported levels, SP names and arbitrary event names outside default folders");
            Check(discoveredSources.Contains(variantPath) && !discoveredSources.Contains(candidate.Items.Single(i => i.SourceRel == "Assets/Fixture/Nested.prefab").Dest),
                "wizard discovers inherited level variants and excludes non-level dependency prefabs");
            var renderer = imported.GetComponentInChildren<SpriteRenderer>(true);
            var nativeInstance = AssetDatabase.LoadAllAssetsAtPath(importedPath).First(a => a != null && a.GetType() == typeof(UnityEngine.Object));
            Check(PrefabImportTransaction.IsPrefabOverrideHistory(nativeInstance, "m_Modification.m_Modifications.Array.data[19].target")
                && PrefabImportTransaction.IsPrefabOverrideHistory(nativeInstance, "m_Modification.m_RemovedGameObjects.Array.data[0]")
                && !PrefabImportTransaction.IsPrefabOverrideHistory(nativeInstance, "m_SourcePrefab")
                && !PrefabImportTransaction.IsPrefabOverrideHistory(renderer, "m_Modification.m_Modifications.Array.data[19].target"),
                "native prefab override history is distinguished from live component and source-prefab references");
            Check(imported.GetComponent<PlayableCTA>() != null, "remapped component loads without missing script");
            Check(PrefabUtility.IsPartOfPrefabInstance(renderer.gameObject), "nested prefab connection survives");
            Check(renderer.sprite != null && renderer.sprite.texture.width == 1024 && renderer.transform.localScale == new Vector3(1.25f, 2.5f, 1f),
                "sprite resolution and transform remain unchanged");
            Check(AssetDatabase.GetDependencies(importedPath, true).Where(p => p.StartsWith("Assets/", StringComparison.Ordinal))
                .All(p => File.Exists(Path.Combine(ProjectRoot, p))), "all imported dependencies exist locally");
            string spriteGuid = AssetDatabase.AssetPathToGUID(AssetDatabase.GetAssetPath(renderer.sprite));
            typeof(PlayableLevelFactory).GetMethod("TrimPrefab", BindingFlags.NonPublic | BindingFlags.Static).Invoke(null,
                new object[] { importedPath, new List<int> { 1 }, PlayableLevelFactory.InnerMode.Exclude, new List<string>(), new List<string>(), "" });
            renderer = AssetDatabase.LoadAssetAtPath<GameObject>(importedPath).GetComponentInChildren<SpriteRenderer>(true);
            Check(AssetDatabase.AssetPathToGUID(AssetDatabase.GetAssetPath(renderer.sprite)) == spriteGuid
                && renderer.sprite.texture.width == 1024 && renderer.transform.localScale == new Vector3(1.25f, 2.5f, 1f),
                "playable creator trim preserves original sprites and transforms");
            PrefabImportTransaction.Rollback(transaction);
            transaction = null;
            Check(!File.Exists(Path.Combine(ProjectRoot, importedPath)) && !File.Exists(Path.Combine(ProjectRoot, importedPath) + ".meta"),
                "undo removes imported assets and their GUID metadata");

            var stale = MakePlan();
            File.AppendAllText(seedFull, "\n");
            Check(window.ValidatePlan(stale).Any(e => e.Contains("changed since scan")), "stale review rejected before writing");
            File.WriteAllText(seedFull, File.ReadAllText(seedFull).TrimEnd() + "\n");

            string blockedDest = dependencyRoot + "/Fixture/Art.png";
            Directory.CreateDirectory(Path.GetDirectoryName(Path.Combine(ProjectRoot, blockedDest)));
            File.Copy(Path.Combine(sourceAssets, "Art.png"), Path.Combine(ProjectRoot, blockedDest));
            File.WriteAllText(Path.Combine(ProjectRoot, blockedDest) + ".meta",
                File.ReadAllText(Path.Combine(sourceAssets, "Art.png.meta")).Replace(ReadMetaGuid(Path.Combine(sourceAssets, "Art.png.meta")), System.Guid.NewGuid().ToString("N")));
            AssetDatabase.ImportAsset(blockedDest, ImportAssetOptions.ForceSynchronousImport);
            string unrelatedGuid = AssetDatabase.AssetPathToGUID(blockedDest);
            var conflict = MakePlan();
            Check(window.ValidatePlan(conflict).Count > 0, "dependency conflict blocks import");
            Check(AssetDatabase.AssetPathToGUID(blockedDest) == unrelatedGuid, "conflict leaves unrelated asset GUID intact");
            AssetDatabase.DeleteAsset(fixture);
            var missing = MakePlan();
            string missingGuid = System.Guid.NewGuid().ToString("N");
            var missingItem = missing.Items.First(i => i.IsLevelSeed);
            missingItem.Content += "\n  missingDependency: {fileID: 123, guid: " + missingGuid + ", type: 3}\n";
            Check(window.ValidatePlan(missing).Any(e => e.Contains(missingGuid)), "unresolved dependency blocks import");
            bool escaped = false;
            try { NormalizeAssetsPath("Assets/../../outside", "Assets"); } catch (InvalidOperationException) { escaped = true; }
            Check(escaped, "destination path traversal rejected");

            // A real write failure after earlier files were copied must leave no partial import.
            var partial = MakePlan();
            string blockedWrite = Path.Combine(ProjectRoot, partial.Items.Last(i => i.WillWrite).Dest);
            Directory.CreateDirectory(blockedWrite); // a directory where a file must be written
            bool failedWrite = false;
            try { window.WritePlan(partial); }
            catch (IOException) { failedWrite = true; }
            catch (UnauthorizedAccessException) { failedWrite = true; }
            Check(failedWrite && partial.Items.Where(i => i.WillWrite).All(i => !File.Exists(Path.Combine(ProjectRoot, i.Dest))),
                "partial-copy failure rolls back every written file");
            AssetDatabase.DeleteAsset(fixture);

            // Undo restores both the original file bytes and the original .meta GUID.
            string restorePath = fixture + "/Restore.txt";
            Directory.CreateDirectory(Path.GetDirectoryName(Path.Combine(ProjectRoot, restorePath)));
            File.WriteAllText(Path.Combine(ProjectRoot, restorePath), "original");
            File.WriteAllText(Path.Combine(ProjectRoot, restorePath) + ".meta", "fileFormatVersion: 2\nguid: " + id + "\n");
            string restoreMeta = File.ReadAllText(Path.Combine(ProjectRoot, restorePath) + ".meta");
            string restoreLog = Path.Combine(workspace, "restore_transaction");
            PrefabImportTransaction.Begin(restoreLog, new[] { restorePath });
            File.WriteAllText(Path.Combine(ProjectRoot, restorePath), "changed");
            File.WriteAllText(Path.Combine(ProjectRoot, restorePath) + ".meta", "changed");
            PrefabImportTransaction.Rollback(restoreLog);
            Check(File.ReadAllText(Path.Combine(ProjectRoot, restorePath)) == "original"
                && File.ReadAllText(Path.Combine(ProjectRoot, restorePath) + ".meta") == restoreMeta,
                "rollback restores overwritten file and metadata bytes exactly");
            Check(string.Join("|", Directory.GetFiles(source, "*", SearchOption.AllDirectories).OrderBy(p => p).Select(FileHash)) == sourceDigest,
                "source project remains byte-for-byte unchanged");
            File.WriteAllLines(Path.Combine(workspace, "results.txt"), passed);
            Debug.Log("[Prefab Importer Validation] PASS: " + passed.Count + " checks\n" + string.Join("\n", passed));
        }
        finally
        {
            if (transaction != null && !File.Exists(Path.Combine(transaction, "rolled_back.txt"))) PrefabImportTransaction.Rollback(transaction);
            if (window != null) DestroyImmediate(window);
            AssetDatabase.DeleteAsset(fixture);
            EditorUtility.ClearProgressBar();
            AssetDatabase.Refresh();
            if (previousResult != null) File.WriteAllText(PrefabImportTransaction.ResultPath, previousResult);
            else if (File.Exists(PrefabImportTransaction.ResultPath)) File.Delete(PrefabImportTransaction.ResultPath);
        }
    }

    public static string InspectParentLevels(string sourceRoot, string seed)
    {
        var window = CreateInstance<CrossProjectPrefabImporter>();
        try
        {
            window.sourceProjectRoot = sourceRoot;
            window.DiscoverLevels();
            var report = new List<string> { "Discovered " + window.levels.Count + " levels." };
            report.AddRange(window.levels.Where(l => l.Rel.StartsWith("Assets/BundledLevels/", StringComparison.OrdinalIgnoreCase)).Select(l => l.Rel));
            var index = BuildGuidIndex(sourceRoot, out var scripts);
            var seeds = seed.Split(';').ToList();
            var candidate = window.BuildPlan(index, scripts, seeds, new HashSet<string>(seeds),
                new Dictionary<string, HashSet<string>>(), new Dictionary<string, bool>());
            var problems = window.ValidatePlan(candidate);
            report.Add(candidate.Summary());
            report.Add("Preflight problems: " + problems.Count);
            report.AddRange(problems.Take(80));
            report.AddRange(candidate.Items.Where(i => i.IsScript && i.WillWrite).Select(i => "SCRIPT " + i.Dest));
            var compileSources = new List<string>();
            foreach (var item in candidate.Items.Where(i => i.IsScript && i.WillWrite))
            {
                string script = Path.Combine(ProjectRoot, "Library/PrefabImporterTests/SanitizedScripts", item.SourceRel);
                Directory.CreateDirectory(Path.GetDirectoryName(script));
                File.WriteAllText(script, item.Content);
                compileSources.Add(script);
            }
            string path = Path.Combine(ProjectRoot, "Library/PrefabImporterTests/parent_scan.txt");
            Directory.CreateDirectory(Path.GetDirectoryName(path));
            File.WriteAllLines(Path.Combine(Path.GetDirectoryName(path), "compile_sources.txt"), compileSources);
            File.WriteAllLines(path, report);
            return string.Join("\n", report);
        }
        finally { DestroyImmediate(window); }
    }
}
#endif
