using ScratchCardAsset.Tools;
using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.Rendering;
using UnityEngine.UIElements;

namespace ScratchCardAsset.Core
{
    public class ScratchCardRenderer
    {
        public bool IsScratched, useChangingHole;

        private ScratchCard scratchCard;
        private Mesh meshHole;
        private Mesh meshLine;
        private CommandBuffer commandBuffer;
        private RenderTargetIdentifier rti;
        private Bounds localBounds;
        private Vector2 imageSize;

        private const string MaskTexProperty = "_MaskTex";
        private const string MainTexProperty = "_MainTex";
        private const string SourceTexProperty = "_SourceTex";

        public ScratchCardRenderer(ScratchCard card)
        {
            scratchCard = card;
            localBounds = new Bounds(Vector2.one / 2f, Vector2.one);
            commandBuffer = new CommandBuffer { name = "ScratchCardRenderer" };
            meshHole = MeshGenerator.GenerateQuad(Vector3.zero, Vector2.zero);
        }

        public void Release()
        {
            if (commandBuffer != null)
            {
                commandBuffer.Release();
            }
            if (meshHole != null)
            {
                Object.Destroy(meshHole);
            }
            if (meshLine != null)
            {
                Object.Destroy(meshLine);
            }
        }

        public void CreateRenderTexture()
        {
            try
            {

                var renderTextureSize = new Vector2(imageSize.x / (float)scratchCard.RenderTextureQuality, imageSize.y / (float)scratchCard.RenderTextureQuality);
                scratchCard.RenderTexture = new RenderTexture((int)renderTextureSize.x, (int)renderTextureSize.y, 0, RenderTextureFormat.ARGB32);
                scratchCard.ScratchSurface.SetTexture(MaskTexProperty, scratchCard.RenderTexture);
                scratchCard.Progress.SetTexture(MainTexProperty, scratchCard.RenderTexture);
                if (scratchCard.Progress.HasProperty(SourceTexProperty))
                {
                    scratchCard.Progress.SetTexture(SourceTexProperty, scratchCard.ScratchSurface.mainTexture);
                }
                rti = new RenderTargetIdentifier(scratchCard.RenderTexture);

            }
            catch
            {
            }
        }

        bool IsInBounds([Bridge.Ref] Rect rect)
        {
            var upperLeft = new Vector2(rect.min.x, rect.max.y);
            var upperRight = rect.max;
            var bottomLeft = rect.min;
            var bottomRight = new Vector2(rect.max.x, rect.min.y);
            return localBounds.Contains(upperLeft) || localBounds.Contains(upperRight) ||
                   localBounds.Contains(bottomLeft) || localBounds.Contains(bottomRight);
        }

        public IEnumerator Filling([Bridge.Ref] Vector2 position)
        {
            ScratchHoleAddition(position, 1f);

            yield return null;
        }

        WaitForSeconds wait = new WaitForSeconds(0.02f);

        public IEnumerator FillingLine([Bridge.Ref] Vector2 startPosition, [Bridge.Ref] Vector2 endPosition)
        {
            yield return null;

            ScratchLineAddition(startPosition, endPosition, 1f);

            if (scratchCard.canSpreadMask)
            {
                yield return wait;
                ScratchLineAddition(startPosition, endPosition, 1.015f);

                yield return wait;
                ScratchLineAddition(startPosition, endPosition, 1.03f);

                yield return wait;
                ScratchLineAddition(startPosition, endPosition, 1.045f);

                yield return wait;
                ScratchLineAddition(startPosition, endPosition, 1.06f);

                yield return wait;
                ScratchLineAddition(startPosition, endPosition, 1.075f);

                yield return wait;
                ScratchLineAddition(startPosition, endPosition, 1.09f);

                yield return wait;
                ScratchLineAddition(startPosition, endPosition, 1.1f);
            }
        }

        public void ScratchHoleAddition([Bridge.Ref] Vector2 position, float multiplier)
        {
            if (scratchCard.canRotateTip)
            {
                ScratchHoleAddition(position, multiplier, scratchCard.ToolTip.transform.eulerAngles.z);

                return;
            }

            else
            {
                try
                {
                    var positionRect = new Rect(
                        (position.x - 0.5f * scratchCard.Eraser.mainTexture.width * scratchCard.BrushScale.x * multiplier) / imageSize.x,
                        (position.y - 0.5f * scratchCard.Eraser.mainTexture.height * scratchCard.BrushScale.y * multiplier) / imageSize.y,
                        scratchCard.Eraser.mainTexture.width * scratchCard.BrushScale.x * multiplier / imageSize.x,
                        scratchCard.Eraser.mainTexture.height * scratchCard.BrushScale.y * multiplier / imageSize.y);

                    if (IsInBounds(positionRect))
                    {
                        meshHole.vertices = new[]
                        {
                    new Vector3(positionRect.xMin, positionRect.yMax, 0),
                    new Vector3(positionRect.xMax, positionRect.yMax, 0),
                    new Vector3(positionRect.xMax, positionRect.yMin, 0),
                    new Vector3(positionRect.xMin, positionRect.yMin, 0)
                };
                        GL.LoadOrtho();
                        commandBuffer.Clear();
                        commandBuffer.SetRenderTarget(rti);
                        commandBuffer.DrawMesh(meshHole, Matrix4x4.identity, scratchCard.Eraser);
                        Graphics.ExecuteCommandBuffer(commandBuffer);
                        IsScratched = true;
                    }
                }

                catch
                {
                }
            }
        }

        void ScratchHoleAddition([Bridge.Ref] Vector2 position, float multiplier, float rotation = 0f)
        {
            try
            {
                var positionRect = new Rect(
                    (position.x - 0.5f * scratchCard.Eraser.mainTexture.width * scratchCard.BrushScale.x * multiplier) / imageSize.x,
                    (position.y - 0.5f * scratchCard.Eraser.mainTexture.height * scratchCard.BrushScale.y * multiplier) / imageSize.y,
                    scratchCard.Eraser.mainTexture.width * scratchCard.BrushScale.x * multiplier / imageSize.x,
                    scratchCard.Eraser.mainTexture.height * scratchCard.BrushScale.y * multiplier / imageSize.y);

                if (IsInBounds(positionRect))
                {
                    // Define the vertices for the quad (centered at origin)
                    Vector3[] quadVertices = new[]
                    {
                new Vector3(-positionRect.width * 0.5f, positionRect.height * 0.5f, 0),
                new Vector3(positionRect.width * 0.5f, positionRect.height * 0.5f, 0),
                new Vector3(positionRect.width * 0.5f, -positionRect.height * 0.5f, 0),
                new Vector3(-positionRect.width * 0.5f, -positionRect.height * 0.5f, 0)
            };

                    // Define UVs (standard quad UVs)
                    Vector2[] uvs = new[]
                    {
                new Vector2(0, 1),
                new Vector2(1, 1),
                new Vector2(1, 0),
                new Vector2(0, 0)
            };

                    // Create transformation matrix
                    Vector3 center = new Vector3(positionRect.center.x, positionRect.center.y, 0);
                    Matrix4x4 matrix = Matrix4x4.TRS(
                        center, // Position
                        Quaternion.Euler(0, 0, rotation), // Rotation
                        Vector3.one // Scale (handled by vertex positions)
                    );

                    // Transform vertices to world space
                    Vector3[] transformedVertices = new Vector3[quadVertices.Length];
                    for (int i = 0; i < quadVertices.Length; i++)
                    {
                        transformedVertices[i] = matrix.MultiplyPoint3x4(quadVertices[i]);
                    }

                    // Set up the mesh
                    meshHole.vertices = transformedVertices;
                    meshHole.uv = uvs;
                    meshHole.triangles = new[] { 0, 1, 2, 0, 2, 3 };

                    GL.LoadOrtho();
                    commandBuffer.Clear();
                    commandBuffer.SetRenderTarget(rti);
                    commandBuffer.DrawMesh(meshHole, Matrix4x4.identity, scratchCard.Eraser);
                    Graphics.ExecuteCommandBuffer(commandBuffer);
                    IsScratched = true;
                }
            }
            catch
            {
            }
        }

        Color white = Color.white;
        List<Vector3> positions = new List<Vector3>(512);
        List<Color> colors = new List<Color>(512);
        List<int> indices = new List<int>(768);
        List<Vector2> uv = new List<Vector2>(512);

        public void ScratchLineAddition([Bridge.Ref] Vector2 startPosition, [Bridge.Ref] Vector2 endPosition, float multiplier)
        {
            if (scratchCard.canRotateTip)
            {
                ScratchLineAddition(startPosition, endPosition, multiplier, scratchCard.ToolTip.transform.eulerAngles.z);

                return;
            }

            else
            {
                try
                {
                    var holesCount = (int)Vector2.Distance(startPosition, endPosition) / (int)scratchCard.RenderTextureQuality;
                    var count = 0;
                    for (var i = 0; i < holesCount; i++)
                    {
                        var holePosition = startPosition + (endPosition - startPosition) / holesCount * i;
                        var positionRect = new Rect(
                            (holePosition.x - 0.5f * scratchCard.Eraser.mainTexture.width * scratchCard.BrushScale.x * multiplier) / imageSize.x,
                            (holePosition.y - 0.5f * scratchCard.Eraser.mainTexture.height * scratchCard.BrushScale.y * multiplier) / imageSize.y,
                            scratchCard.Eraser.mainTexture.width * scratchCard.BrushScale.x * multiplier / imageSize.x,
                            scratchCard.Eraser.mainTexture.height * scratchCard.BrushScale.y * multiplier / imageSize.y);

                        if (IsInBounds(positionRect))
                        {
                            positions.Add(new Vector3(positionRect.xMin, positionRect.yMax, 0));
                            positions.Add(new Vector3(positionRect.xMax, positionRect.yMax, 0));
                            positions.Add(new Vector3(positionRect.xMax, positionRect.yMin, 0));
                            positions.Add(new Vector3(positionRect.xMin, positionRect.yMin, 0));

                            colors.Add(white);
                            colors.Add(white);
                            colors.Add(white);
                            colors.Add(white);

                            uv.Add(Vector2.up);
                            uv.Add(Vector2.one);
                            uv.Add(Vector2.right);
                            uv.Add(Vector2.zero);

                            indices.Add(0 + count * 4);
                            indices.Add(1 + count * 4);
                            indices.Add(2 + count * 4);
                            indices.Add(2 + count * 4);
                            indices.Add(3 + count * 4);
                            indices.Add(0 + count * 4);

                            count++;
                        }
                    }

                    if (positions.Count > 0)
                    {
                        if (meshLine != null)
                        {
                            meshLine.Clear(false);
                        }
                        else
                        {
                            meshLine = new Mesh();
                        }
                        meshLine.vertices = positions.ToArray();
                        meshLine.uv = uv.ToArray();
                        meshLine.triangles = indices.ToArray();
                        meshLine.colors = colors.ToArray();
                        GL.LoadOrtho();
                        commandBuffer.Clear();
                        commandBuffer.SetRenderTarget(rti);
                        commandBuffer.DrawMesh(meshLine, Matrix4x4.identity, scratchCard.Eraser);
                        Graphics.ExecuteCommandBuffer(commandBuffer);
                        IsScratched = true;

                        positions.Clear();
                        colors.Clear();
                        indices.Clear();
                        uv.Clear();
                    }
                }
                catch
                {

                }
            }
        }

        public void ScratchLineAddition([Bridge.Ref] Vector2 startPosition, [Bridge.Ref] Vector2 endPosition, float multiplier, float rotation = 0f)
        {
            try
            {
                var holesCount = (int)(Vector2.Distance(startPosition, endPosition) / (int)scratchCard.RenderTextureQuality);
                var count = 0;

                for (var i = 0; i < holesCount; i++)
                {
                    var holePosition = startPosition + (endPosition - startPosition) / holesCount * i;
                    var positionRect = new Rect(
                        (holePosition.x - 0.5f * scratchCard.Eraser.mainTexture.width * scratchCard.BrushScale.x * multiplier) / imageSize.x,
                        (holePosition.y - 0.5f * scratchCard.Eraser.mainTexture.height * scratchCard.BrushScale.y * multiplier) / imageSize.y,
                        scratchCard.Eraser.mainTexture.width * scratchCard.BrushScale.x * multiplier / imageSize.x,
                        scratchCard.Eraser.mainTexture.height * scratchCard.BrushScale.y * multiplier / imageSize.y);

                    if (IsInBounds(positionRect))
                    {
                        // Define the vertices for the quad (centered at origin)
                        Vector3[] quadVertices = new[]
                        {
                    new Vector3(-positionRect.width * 0.5f, positionRect.height * 0.5f, 0),
                    new Vector3(positionRect.width * 0.5f, positionRect.height * 0.5f, 0),
                    new Vector3(positionRect.width * 0.5f, -positionRect.height * 0.5f, 0),
                    new Vector3(-positionRect.width * 0.5f, -positionRect.height * 0.5f, 0)
                };

                        // Define UVs (standard quad UVs)
                        Vector2[] quadUvs = new[]
                        {
                    new Vector2(0, 1),
                    new Vector2(1, 1),
                    new Vector2(1, 0),
                    new Vector2(0, 0)
                };

                        // Create transformation matrix for this quad
                        Vector3 center = new Vector3(positionRect.center.x, positionRect.center.y, 0);
                        Matrix4x4 matrix = Matrix4x4.TRS(
                            center, // Position
                            Quaternion.Euler(0, 0, rotation), // Rotation
                            Vector3.one // Scale (handled by vertex positions)
                        );

                        // Transform vertices to world space
                        for (int j = 0; j < quadVertices.Length; j++)
                        {
                            positions.Add(matrix.MultiplyPoint3x4(quadVertices[j]));
                            colors.Add(white);
                            uv.Add(quadUvs[j]);
                        }

                        // Add triangle indices for this quad
                        indices.Add(0 + count * 4);
                        indices.Add(1 + count * 4);
                        indices.Add(2 + count * 4);
                        indices.Add(2 + count * 4);
                        indices.Add(3 + count * 4);
                        indices.Add(0 + count * 4);

                        count++;
                    }
                }

                if (positions.Count > 0)
                {
                    if (meshLine != null)
                    {
                        meshLine.Clear(false);
                    }
                    else
                    {
                        meshLine = new Mesh();
                    }
                    meshLine.vertices = positions.ToArray();
                    meshLine.uv = uv.ToArray();
                    meshLine.triangles = indices.ToArray();
                    meshLine.colors = colors.ToArray();

                    GL.LoadOrtho();
                    commandBuffer.Clear();
                    commandBuffer.SetRenderTarget(rti);
                    commandBuffer.DrawMesh(meshLine, Matrix4x4.identity, scratchCard.Eraser);
                    Graphics.ExecuteCommandBuffer(commandBuffer);
                    IsScratched = true;

                    positions.Clear();
                    colors.Clear();
                    indices.Clear();
                    uv.Clear();
                }
            }
            catch
            {
            }
        }
        public void FillRenderTextureWithColor([Bridge.Ref] Color color)
        {
            commandBuffer.SetRenderTarget(rti);
            commandBuffer.ClearRenderTarget(false, true, color);
            Graphics.ExecuteCommandBuffer(commandBuffer);
        }

        public void SetImageSize([Bridge.Ref] Vector2 size)
        {
            imageSize = size;
        }
    }
}