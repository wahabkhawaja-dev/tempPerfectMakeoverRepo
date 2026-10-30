#if UNITY_EDITOR
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using UnityEditor;
using UnityEditor.SceneManagement;
using UnityEditor.U2D.Sprites;
using UnityEngine;
using UnityEngine.U2D;
using UnityEngine.U2D.Animation;

public static class HalloweenCrownSetup
{
    public const string Root = "Assets/_Playable/Halloween2026/";
    public const string PrefabPath = Root + "Prefabs/Halloween_Crown_Playable.prefab";
    public const string ScenePath = "Assets/_Playable/Scenes/Gameplay_Playable.unity";
    const string Tools = Root + "Sprites/Crown/Tools/";

    [MenuItem("Playable/Halloween Crown/Build Rigs and Scene")]
    public static void Build()
    {
        if (EditorApplication.isPlayingOrWillChangePlaymode) throw new InvalidOperationException("Use Edit Mode.");
        RigSprite(Tools + "SprayBody.png", "HC_Bottle", 2);
        RigSprite(Tools + "SprayHead.png", "HC_Trigger", 1);
        RigSprite(Tools + "SprayHeadPressed.png", "HC_Trigger", 1);
        RigSprite(Tools + "BrushBody.png", "HC_Brush", 3);
        RigSprite(Tools + "BrushFoamHead.png", "HC_Bristles", 1);
        RigSprite(Tools + "WaterShower.png", "HC_Water", 2);

        var root = PrefabUtility.LoadPrefabContents(PrefabPath);
        try
        {
            HalloweenCrownRinseSetup.Configure(root);
            foreach (var renderer in root.GetComponentsInChildren<SpriteRenderer>(true))
            {
                if (renderer.sprite == null) continue;
                string path = AssetDatabase.GetAssetPath(renderer.sprite);
                if (!path.StartsWith(Tools, StringComparison.Ordinal) || path.EndsWith("/Duster.png")) continue;
                BuildHierarchy(renderer);
            }
            var cta = root.GetComponent<PlayableCTA>();
            if (cta == null) cta = root.AddComponent<PlayableCTA>();
            cta.trigger = PlayableCTA.Trigger.Manual;
            PrefabUtility.SaveAsPrefabAsset(root, PrefabPath);
        }
        finally { PrefabUtility.UnloadPrefabContents(root); }

        // The existing editor command changes this checkout's scene only.
        PlayableEditorMenu.SwapSceneLevel(PrefabPath);
        foreach (var router in UnityEngine.Object.FindObjectsOfType<PlayableRouter>(true))
        {
            using (var so = new SerializedObject(router))
            {
                SetObjectsActive(so.FindProperty("menuObjects"), false);
                SetObjectsActive(so.FindProperty("gameplayObjects"), true);
            }
            UnityEngine.Object.DestroyImmediate(router);
        }
        var gm = UnityEngine.Object.FindObjectOfType<GameManager>(true);
        if (gm == null) throw new InvalidOperationException("Playable scene has no GameManager.");
        gm.startLevelOnPlay = true;
        gm.isComplete = false;
        gm.isPaused = false;
        gm.currentLevel = UnityEngine.Object.FindObjectOfType<LevelData>();
        if (gm.currentLevel == null || gm.currentLevel.GetType() != typeof(Level3_Crown_Playable))
            throw new InvalidOperationException("Scene did not bind the original crown gameplay class.");
        using (var manager = new SerializedObject(gm))
        {
            manager.FindProperty("m_Script").objectReferenceValue = AssetDatabase.LoadAssetAtPath<MonoScript>(Root+"Scripts/HalloweenCrownGameManager.cs");
            manager.ApplyModifiedPropertiesWithoutUndo();
        }
        gm = UnityEngine.Object.FindObjectOfType<HalloweenCrownGameManager>(true);
        if(gm == null) throw new InvalidOperationException("Completion gate did not bind.");
        ((HalloweenCrownGameManager)gm).rinse = gm.currentLevel.GetComponent<HalloweenCrownRinse>();
        EditorSceneManager.MarkSceneDirty(gm.gameObject.scene);
        EditorSceneManager.SaveScene(gm.gameObject.scene);
        AssetDatabase.SaveAssets();
        Validate();
    }

    static void SetObjectsActive(SerializedProperty property, bool active)
    {
        if (property == null || !property.isArray) return;
        for (int i = 0; i < property.arraySize; i++)
        {
            var go = property.GetArrayElementAtIndex(i).objectReferenceValue as GameObject;
            if (go != null) go.SetActive(active);
        }
    }

    static void RigSprite(string path, string family, int boneCount)
    {
        var importer = AssetImporter.GetAtPath(path) as TextureImporter;
        if (importer == null) throw new FileNotFoundException(path);
        var settings = new TextureImporterSettings();
        importer.textureType = TextureImporterType.Sprite;
        importer.spriteImportMode = SpriteImportMode.Single;
        importer.alphaIsTransparency = true;
        importer.isReadable = true;
        importer.ReadTextureSettings(settings);
        settings.spriteMeshType = SpriteMeshType.Tight;
        importer.SetTextureSettings(settings);
        importer.spritePackingTag = "";
        importer.SaveAndReimport();

        var factories = new SpriteDataProviderFactories(); factories.Init();
        var provider = factories.GetSpriteEditorDataProviderFromObject(importer);
        provider.InitSpriteEditorDataProvider();
        var rect = provider.GetSpriteRects().Single();
        Vector2 size = rect.rect.size;
        Vector2 pivot = Vector2.Scale(size, rect.pivot);
        var texture = AssetDatabase.LoadAssetAtPath<Texture2D>(path);
        var pixels = texture.GetPixels32();
        int minX=texture.width, minY=texture.height, maxX=0,maxY=0;
        for(int y=0;y<texture.height;y++)for(int x=0;x<texture.width;x++)if(pixels[y*texture.width+x].a>16)
        {minX=Math.Min(minX,x);minY=Math.Min(minY,y);maxX=Math.Max(maxX,x);maxY=Math.Max(maxY,y);}
        var visible=new Rect(minX*size.x/texture.width,minY*size.y/texture.height,
            (maxX-minX+1)*size.x/texture.width,(maxY-minY+1)*size.y/texture.height);
        var bones = new List<SpriteBone> {
            new SpriteBone { name = family + "_Root", guid = family + "_Root", parentId = -1,
                position = new Vector3(pivot.x,pivot.y,0), rotation = Quaternion.identity, length = visible.height * .12f }
        };
        if (boneCount > 1) bones.Add(new SpriteBone { name = family + "_Neck", guid = family + "_Neck", parentId = 0,
            position = new Vector3(visible.center.x-pivot.x,visible.yMin+visible.height*.8f-pivot.y,0), rotation = Quaternion.identity, length = visible.height*.15f });
        if (boneCount > 2) bones.Add(new SpriteBone { name = family + "_Head", guid = family + "_Head", parentId = 1,
            position = new Vector3(-visible.width*.15f,visible.height*.10f,0), rotation = Quaternion.identity, length = visible.height*.08f });
        provider.GetDataProvider<ISpriteBoneDataProvider>().SetBones(rect.spriteID, bones);

        const int columns = 7, rows = 23;
        var vertices = new Vertex2DMetaData[(columns+1)*(rows+1)];
        var indices = new List<int>();
        for (int y=0; y<=rows; y++)
        for (int x=0; x<=columns; x++)
        {
            float fx=(float)x/columns, fy=(float)y/rows;
            float upper = boneCount > 1 ? Mathf.SmoothStep(0,1,Mathf.InverseLerp(.65f,.82f,fy)) : 0;
            float tip = boneCount > 2 ? upper * (1-Mathf.InverseLerp(.15f,.45f,fx)) : 0;
            vertices[y*(columns+1)+x] = new Vertex2DMetaData {
                position = visible.min+Vector2.Scale(new Vector2(fx,fy),visible.size),
                boneWeight = new BoneWeight { boneIndex0=0, weight0=1-upper, boneIndex1=boneCount>1?1:0,
                    weight1=upper-tip, boneIndex2=boneCount>2?2:0, weight2=tip }
            };
            if (x==columns || y==rows) continue;
            int a=y*(columns+1)+x;
            indices.AddRange(new[]{a,a+columns+1,a+1,a+1,a+columns+1,a+columns+2});
        }
        var mesh = provider.GetDataProvider<ISpriteMeshDataProvider>();
        mesh.SetVertices(rect.spriteID,vertices);
        mesh.SetIndices(rect.spriteID,indices.ToArray());
        mesh.SetEdges(rect.spriteID,new[]{new Vector2Int(0,columns),new Vector2Int(columns,vertices.Length-1),
            new Vector2Int(vertices.Length-1,rows*(columns+1)),new Vector2Int(rows*(columns+1),0)});
        provider.Apply(); importer.isReadable=false; importer.SaveAndReimport();
    }

    static void BuildHierarchy(SpriteRenderer renderer)
    {
        var existing = renderer.GetComponent<HalloweenToolRigFit>();
        // Rebuilds preserve the authored rectangle stored before skinning was installed.
        Vector2 size = existing != null ? existing.authoredSize : renderer.drawMode == SpriteDrawMode.Simple
            ? (Vector2)renderer.sprite.bounds.size : renderer.size;
        var pivot = new Vector2(renderer.sprite.pivot.x/renderer.sprite.rect.width,renderer.sprite.pivot.y/renderer.sprite.rect.height);
        Vector2 center = existing != null ? existing.authoredCenter : renderer.drawMode == SpriteDrawMode.Simple
            ? (Vector2)renderer.sprite.bounds.center : Vector2.Scale(Vector2.one*.5f-pivot,size);
        if (existing != null && existing.skinRoot != null) UnityEngine.Object.DestroyImmediate(existing.skinRoot.gameObject);
        renderer.drawMode = SpriteDrawMode.Simple;
        var data = SpriteDataAccessExtensions.GetBones(renderer.sprite);
        var transforms = new Transform[data.Length];
        for(int i=0;i<data.Length;i++)
        {
            transforms[i] = new GameObject(data[i].name).transform;
            transforms[i].SetParent(data[i].parentId < 0 ? renderer.transform : transforms[data[i].parentId],false);
            transforms[i].localPosition = data[i].position;
            transforms[i].localRotation = data[i].rotation;
        }
        var skin = renderer.GetComponent<SpriteSkin>();
        if (skin == null) skin = renderer.gameObject.AddComponent<SpriteSkin>();
        skin.enabled = false;
        using (var so = new SerializedObject(skin))
        {
            so.FindProperty("m_RootBone").objectReferenceValue = transforms[0];
            var array = so.FindProperty("m_BoneTransforms"); array.arraySize=transforms.Length;
            for(int i=0;i<transforms.Length;i++) array.GetArrayElementAtIndex(i).objectReferenceValue=transforms[i];
            so.FindProperty("m_AlwaysUpdate").boolValue = true;
            so.FindProperty("m_AutoRebind").boolValue = false;
            so.ApplyModifiedPropertiesWithoutUndo();
        }
        var fit = existing != null ? existing : renderer.gameObject.AddComponent<HalloweenToolRigFit>();
        fit.skinRoot=transforms[0]; fit.authoredSize=size; fit.authoredCenter=center; fit.ApplyFit();
        skin.enabled=true;
    }

    [MenuItem("Playable/Halloween Crown/Validate")]
    public static void Validate()
    {
        var errors = new List<string>();
        var prefab = AssetDatabase.LoadAssetAtPath<GameObject>(PrefabPath);
        if(prefab == null) throw new InvalidOperationException("Halloween prefab is missing.");
        foreach(var t in prefab.GetComponentsInChildren<Transform>(true))
        {
            if(GameObjectUtility.GetMonoBehavioursWithMissingScriptCount(t.gameObject)>0) errors.Add(t.name+": missing script");
            foreach(var c in t.GetComponents<Component>())
            {
                if(c==null)continue;
                using(var so=new SerializedObject(c))
                {
                    var p=so.GetIterator();
                    while(p.Next(true)) if(p.propertyType==SerializedPropertyType.ObjectReference && p.objectReferenceValue==null && p.objectReferenceInstanceIDValue!=0)
                        errors.Add(c.name+"."+p.propertyPath+": missing reference");
                }
            }
        }
        var fits=prefab.GetComponentsInChildren<HalloweenToolRigFit>(true);
        if(fits.Length!=5) errors.Add("Expected five additional renderer rigs, found "+fits.Length);
        foreach(var fit in fits)
        {
            var skin=fit.GetComponent<SpriteSkin>(); var sprite=fit.GetComponent<SpriteRenderer>().sprite;
            int count=SpriteDataAccessExtensions.GetBindPoses(sprite).Length;
            if(skin==null || skin.rootBone==null || skin.boneTransforms.Length!=count || skin.boneTransforms.Any(b=>b==null)) errors.Add(fit.name+": invalid rig binding");
        }
        if(prefab.GetComponent<Level3_Crown_Playable>()==null) errors.Add("Original crown gameplay script was replaced.");
        var rinse=prefab.GetComponent<HalloweenCrownRinse>();
        if(rinse==null || rinse.waterTool==null || rinse.impactTip==null || rinse.foamSurface==null || rinse.cleanCrown==null)
            errors.Add("Rinse references are incomplete.");
        else
        {
            var level=prefab.GetComponent<Level3_Crown_Playable>();
            if(level.AllScratches.Contains(rinse.foamSurface))errors.Add("Inactive rinse must initialize separately from LevelData.Setup.");
            if(level.AllScratches.Any(s=>s.SpriteCard==rinse.foamSurface.SpriteCard))errors.Add("Rinse shares an earlier scratch surface.");
            if(rinse.priorLayers.Any(g=>rinse.foamSurface.SpriteCard.transform.IsChildOf(g.transform)))errors.Add("Rinse surface would be hidden with earlier layers.");
        }
        if(prefab.GetComponent<PlayableCTA>().trigger!=PlayableCTA.Trigger.Manual) errors.Add("CTA must remain step-complete/manual.");
        Directory.CreateDirectory("Library/HalloweenCrownValidation");
        File.WriteAllLines("Library/HalloweenCrownValidation/references.txt",errors.Count==0?new[]{"PASS: rigs, scripts, references and CTA"}:errors);
        if(errors.Count>0)throw new InvalidOperationException(string.Join("\n",errors));
        Debug.Log("[Halloween Crown] Rig and reference validation passed.");
    }
}
#endif
