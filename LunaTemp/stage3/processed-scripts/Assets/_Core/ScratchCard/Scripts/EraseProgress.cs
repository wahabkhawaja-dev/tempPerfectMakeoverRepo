using ScratchCardAsset.Tools;
using UnityEngine;
using UnityEngine.Rendering;

namespace ScratchCardAsset
{
    public class EraseProgress : MonoBehaviour
    {
        public ScratchCard Card;
        public event ProgressHandler OnProgress;
        public event ProgressHandler OnCompleted;

        public delegate void ProgressHandler(float progress);

        private ScratchCard.ScratchMode scratchMode;
        private RenderTexture percentRenderTexture;
        private RenderTargetIdentifier rti;
        private CommandBuffer commandBuffer;
        private Mesh mesh;
        private Texture2D progressTexture; // Reuse instead of new every frame
        private Rect readRect;             // Reuse rect to avoid allocation
        public float currentProgress;
        private bool isCompleted;

        void Start()
        {
            Init();
        }

        void OnDestroy()
        {
            if (percentRenderTexture != null)
            {
                percentRenderTexture.Release();
                Destroy(percentRenderTexture);
            }
            if (mesh != null) Destroy(mesh);
            if (commandBuffer != null) commandBuffer.Release();
            if (progressTexture != null) Destroy(progressTexture);
        }

        void Update()
        {
            if (Card.Mode != scratchMode)
            {
                scratchMode = Card.Mode;
                ResetProgress();
            }

            if (Card.IsScratched && !isCompleted)
            {
                UpdateProgress();
            }
        }

        private void Init()
        {
            scratchMode = Card.Mode;
            commandBuffer = new CommandBuffer { name = "EraseProgress" };
            percentRenderTexture = new RenderTexture(1, 1, 0, RenderTextureFormat.ARGB32);
            rti = new RenderTargetIdentifier(percentRenderTexture);
            mesh = MeshGenerator.GenerateQuad(Vector3.one, Vector3.zero);

            // Persistent 1x1 texture
            progressTexture = new Texture2D(1, 1, TextureFormat.ARGB32, false, true);
            readRect = new Rect(0, 0, 1, 1);
        }

        public float GiveProgress()
        {
            GL.LoadOrtho();
            commandBuffer.Clear();
            commandBuffer.SetRenderTarget(rti);
            commandBuffer.ClearRenderTarget(false, true, Color.clear);
            commandBuffer.DrawMesh(mesh, Matrix4x4.identity, Card.Progress);
            Graphics.ExecuteCommandBuffer(commandBuffer);

            var prevRT = RenderTexture.active;
            RenderTexture.active = percentRenderTexture;
            progressTexture.ReadPixels(readRect, 0, 0, false);
            progressTexture.Apply(false);
            RenderTexture.active = prevRT;

            float red = progressTexture.GetPixel(0, 0).r;
            currentProgress = red;
            OnProgress?.Invoke(red);
            return currentProgress;
        }

        private void CalcProgress()
        {
            if (!isCompleted)
            {
                var prevRT = RenderTexture.active;
                RenderTexture.active = percentRenderTexture;
                progressTexture.ReadPixels(readRect, 0, 0, false);
                progressTexture.Apply(false);
                RenderTexture.active = prevRT;

                float red = progressTexture.GetPixel(0, 0).r;
                currentProgress = red;
                OnProgress?.Invoke(red);

                var completeValue = Card.Mode == ScratchCard.ScratchMode.Erase ? 1f : 0f;
                if (Mathf.Approximately(red, completeValue))
                {
                    OnCompleted?.Invoke(red);
                    isCompleted = true;
                }
            }
        }

        public float GetProgress() => currentProgress;

        public void UpdateProgress()
        {
            GL.LoadOrtho();
            commandBuffer.Clear();
            commandBuffer.SetRenderTarget(rti);
            commandBuffer.ClearRenderTarget(false, true, Color.clear);
            commandBuffer.DrawMesh(mesh, Matrix4x4.identity, Card.Progress);
            Graphics.ExecuteCommandBuffer(commandBuffer);

            CalcProgress();
        }

        public void ResetProgress() => isCompleted = false;
    }
}
