using System.Collections.Generic;
using UnityEngine;

public class StaticFixedPipe : MonoBehaviour
{
    [Header("Attachments")]
    // Luna: rope is drawn as a generated quad-strip mesh instead of a LineRenderer.
    public MeshRenderer meshRenderer;
    public Transform toolTransform;
    public Transform toolDirectionPoint;
    public Transform fixedEndPoint;

    [Header("Settings")]
    public int segmentCount = 30;
    public float totalLength = 5f;
    public int constraintIterations = 50; // 500 iterations zyada hain, 50-100 kafi hain performance k liye
    public Vector3 gravity = new Vector3(0, -9.81f, 0);
    public float pipeWidth = 0.2f;

    private List<RopeSegment> ropeSegments = new List<RopeSegment>();
    private float segmentLength;

    private Mesh mesh;
    private Transform meshTransform;
    private Vector3[] vertices;

    void Start()
    {
        segmentLength = totalLength / segmentCount;

        Vector3 startPos = toolTransform.position;
        for (int i = 0; i < segmentCount; i++)
        {
            ropeSegments.Add(new RopeSegment(startPos));
        }

        BuildMesh();
    }

    void BuildMesh()
    {
        if (meshRenderer == null)
            return;

        meshTransform = meshRenderer.transform;

        var filter = meshRenderer.GetComponent<MeshFilter>();
        if (filter == null)
            filter = meshRenderer.gameObject.AddComponent<MeshFilter>();

        mesh = new Mesh();
        mesh.MarkDynamic();

        vertices = new Vector3[segmentCount * 2];
        Vector2[] uvs = new Vector2[segmentCount * 2];
        int[] triangles = new int[(segmentCount - 1) * 6];

        for (int i = 0; i < segmentCount - 1; i++)
        {
            int v = i * 2;
            int t = i * 6;
            triangles[t] = v;
            triangles[t + 1] = v + 2;
            triangles[t + 2] = v + 1;
            triangles[t + 3] = v + 1;
            triangles[t + 4] = v + 2;
            triangles[t + 5] = v + 3;
        }

        for (int i = 0; i < segmentCount; i++)
        {
            float u = (float)i / (segmentCount - 1);
            uvs[i * 2] = new Vector2(u, 0f);
            uvs[i * 2 + 1] = new Vector2(u, 1f);
        }

        mesh.vertices = vertices;
        mesh.uv = uvs;
        mesh.triangles = triangles;

        // Luna exposes MeshFilter.sharedMesh / instancedMesh, not .mesh
        filter.sharedMesh = mesh;
    }

    // Smooth movement k liye LateUpdate behtar hai taake tool move ho chuka ho
    void LateUpdate()
    {
        Simulate();
        DrawRope();
    }

    private void Simulate()
    {
        // 1. Physics Simulation (Skip first 2 points)
        // Yahan Time.deltaTime use krain agar LateUpdate me hain
        float dt = Time.deltaTime;

        for (int i = 2; i < segmentCount; i++)
        {
            var segment = ropeSegments[i];
            Vector3 velocity = segment.posNow - segment.posOld;
            segment.posOld = segment.posNow;
            segment.posNow += velocity + gravity * dt * dt;
            ropeSegments[i] = segment;
        }

        // 2. Constraints
        for (int i = 0; i < constraintIterations; i++)
        {
            ApplyConstraints();
        }
    }

    private void ApplyConstraints()
    {
        // POINT 0 & 1 KO HAR FRAME TOOL KI NAYI POSITION PR SET KRNA
        RopeSegment firstSegment = ropeSegments[0];
        firstSegment.posNow = toolTransform.position;
        firstSegment.posOld = toolTransform.position;
        ropeSegments[0] = firstSegment;

        RopeSegment secondSegment = ropeSegments[1];
        secondSegment.posNow = toolDirectionPoint.position;
        secondSegment.posOld = toolDirectionPoint.position;
        ropeSegments[1] = secondSegment;

        // Last Point Lock
        RopeSegment lastSegment = ropeSegments[segmentCount - 1];
        lastSegment.posNow = fixedEndPoint.position;
        ropeSegments[segmentCount - 1] = lastSegment;

        // Distance Constraints
        for (int i = 0; i < segmentCount - 1; i++)
        {
            RopeSegment seg1 = ropeSegments[i];
            RopeSegment seg2 = ropeSegments[i + 1];

            float dist = Vector3.Distance(seg1.posNow, seg2.posNow);
            float error = dist - segmentLength;
            Vector3 changeDir = (seg1.posNow - seg2.posNow).normalized;
            Vector3 changeAmount = changeDir * error;

            if (i == 0 || i == 1)
            {
                // Pehly 2 points tool k sath hain, sirf aglay points move hon gay
                seg2.posNow += changeAmount;
                ropeSegments[i + 1] = seg2;
            }
            else if (i < segmentCount - 2)
            {
                seg1.posNow -= changeAmount * 0.5f;
                seg2.posNow += changeAmount * 0.5f;
                ropeSegments[i] = seg1;
                ropeSegments[i + 1] = seg2;
            }
            else
            {
                seg1.posNow -= changeAmount;
                ropeSegments[i] = seg1;
            }
        }
    }

    // Quad strip: two verts per rope point, offset perpendicular to the rope in the XY plane.
    private void DrawRope()
    {
        if (mesh == null)
            return;

        float half = pipeWidth * 0.5f;

        for (int i = 0; i < segmentCount; i++)
        {
            Vector3 dir;
            if (i == 0)
                dir = ropeSegments[1].posNow - ropeSegments[0].posNow;
            else if (i == segmentCount - 1)
                dir = ropeSegments[i].posNow - ropeSegments[i - 1].posNow;
            else
                dir = ropeSegments[i + 1].posNow - ropeSegments[i - 1].posNow;

            Vector3 normal = new Vector3(-dir.y, dir.x, 0f);
            if (normal.sqrMagnitude < 0.0000001f)
                normal = Vector3.up;
            else
                normal = normal.normalized;

            Vector3 pos = ropeSegments[i].posNow;
            vertices[i * 2] = meshTransform.InverseTransformPoint(pos - normal * half);
            vertices[i * 2 + 1] = meshTransform.InverseTransformPoint(pos + normal * half);
        }

        mesh.vertices = vertices;
        mesh.RecalculateBounds();
    }

    public struct RopeSegment
    {
        public Vector3 posNow;
        public Vector3 posOld;
        public RopeSegment(Vector3 pos)
        {
            this.posNow = pos;
            this.posOld = pos;
        }
    }
}
