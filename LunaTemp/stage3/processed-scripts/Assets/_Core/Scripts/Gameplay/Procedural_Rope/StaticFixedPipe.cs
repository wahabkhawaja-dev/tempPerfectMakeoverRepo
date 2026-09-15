using System.Collections.Generic;
using UnityEngine;

public class StaticFixedPipe : MonoBehaviour
{
    [Header("Attachments")]
    public LineRenderer lineRenderer;
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

    void Start()
    {
        lineRenderer.startWidth = pipeWidth;
        lineRenderer.endWidth = pipeWidth;
        lineRenderer.positionCount = segmentCount;

        segmentLength = totalLength / segmentCount;

        Vector3 startPos = toolTransform.position;
        for (int i = 0; i < segmentCount; i++)
        {
            ropeSegments.Add(new RopeSegment(startPos));
        }
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

    private void DrawRope()
    {
        Vector3[] ropePositions = new Vector3[segmentCount];
        for (int i = 0; i < segmentCount; i++)
        {
            ropePositions[i] = ropeSegments[i].posNow;
        }

        // Ye line end pr honi chaye taake latest calculation display ho
        lineRenderer.SetPositions(ropePositions);
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