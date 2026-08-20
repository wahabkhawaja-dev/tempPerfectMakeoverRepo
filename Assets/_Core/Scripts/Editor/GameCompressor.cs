using System;
using UnityEditor;
using UnityEngine;
using UnityEditor.U2D.Sprites;

namespace CompressSoundAndTexture
{
    public static class GameCompressor
    {
        /*

        #region ImageCompressor

        [MenuItem("XCompression/Compress Textures")]
        static void ImageCompressionFunc()
        {
            var destFmt = TextureImporterFormat.ASTC_6x6;

            var numChanges = 0;

            foreach (var guid in AssetDatabase.FindAssets("t:Texture", new String[] { "Assets/" }))
            {
                var path = AssetDatabase.GUIDToAssetPath(guid);
                var importer = TextureImporter.GetAtPath(path) as TextureImporter;
                // Skip things like TMPro font atlases
                if (importer == null)
                    continue;

                int textureHeight;
                FixTextureSize(path, importer, out textureHeight);

                var def = importer.GetDefaultPlatformTextureSettings();
                var changed = false;
                Action<TextureImporterPlatformSettings> maybeChange = (platSettings) =>
                {
                    if (
                        platSettings.format != destFmt ||
                        platSettings.compressionQuality != def.compressionQuality ||
                        platSettings.maxTextureSize != def.maxTextureSize ||
                        !platSettings.overridden
                    )
                    {
                        platSettings.format = destFmt;
                        Debug.Log(importer.maxTextureSize);
                        platSettings.compressionQuality = 100;
                        platSettings.maxTextureSize = def.maxTextureSize;
                        platSettings.overridden = true;
                        changed = true;
                        importer.SetPlatformTextureSettings(platSettings);
                    }
                };
                maybeChange(importer.GetPlatformTextureSettings("Android"));

                if (changed)
                {
                    importer.SaveAndReimport();
                    ++numChanges;
                }
            }

            Debug.Log(String.Format("Number Of Images Compressed: {0}", numChanges));
        }

        static int[] textureSizes = new int[] {
        32,
        64,
        128,
        256,
        512,
        1024,
        2048,
        4096
    };

        static void FixTextureSize(string path, TextureImporter importer, out int textureRealHeigh)
        {
            int width, height, max;

            GetImageSize(path, out width, out height);

            textureRealHeigh = height;

            max = Mathf.Max(width, height);

            int size = 1024; //Default size

            for (int i = 0; i < textureSizes.Length; i++)
            {
                if (textureSizes[i] < 1000)
                {
                    if (textureSizes[i] >= max)
                    {
                        size = textureSizes[i];

                        break;
                    }
                }

                else
                {
                    size = 1024;

                    break;
                }
            }

            importer.maxTextureSize = size;
        }

        private static bool GetImageSize(string assetPath, out int width, out int height)
        {
            SpriteDataProviderFactories dataProviderFactories = new SpriteDataProviderFactories();

            dataProviderFactories.Init();

            ISpriteEditorDataProvider importer = dataProviderFactories.GetSpriteEditorDataProviderFromObject(AssetImporter.GetAtPath(assetPath));
           
            if (importer != null)
            {
                importer.InitSpriteEditorDataProvider();

                ITextureDataProvider textureDataProvider = importer.GetDataProvider<ITextureDataProvider>();

                textureDataProvider.GetTextureActualWidthAndHeight(out width, out height);

                return true;
            }

            width = height = 0;

            return true;
        }

        #endregion

        */

        #region AudioCompressor

        [MenuItem("XCompression/Audio Compress")]
        static void AudioCompressionFunc()
        {
            var numChanges = 0;

            foreach (var guid in AssetDatabase.FindAssets("t:AudioClip", new String[] { "Assets/" }))
            {
                Debug.Log("Came");
                
                numChanges++;
                
                var path = AssetDatabase.GUIDToAssetPath(guid);

                AudioImporter importer = AudioImporter.GetAtPath(path) as AudioImporter;

                AudioImporterSampleSettings audioImporterSampleSettings = importer.defaultSampleSettings;

                if (importer == null) 
                    continue;

                importer.forceToMono = true;

                audioImporterSampleSettings.loadType = AudioClipLoadType.Streaming;

                audioImporterSampleSettings.quality = 0.1f;

                importer.SetOverrideSampleSettings("Android", audioImporterSampleSettings);

                importer.SaveAndReimport();
            }

            Debug.Log(String.Format("Number Of Audio Compressed : {0}", numChanges));
        }

        #endregion
    }
}
