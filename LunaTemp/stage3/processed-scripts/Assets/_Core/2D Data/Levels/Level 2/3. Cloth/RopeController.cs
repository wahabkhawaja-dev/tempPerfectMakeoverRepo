using UnityEngine;
using System.Collections.Generic;

[RequireComponent(typeof(LineRenderer))]
public class RopeController : MonoBehaviour
{
    [Header("Rope Settings")]
    public Transform pointA;           // Start point
    public Transform pointB;           // End point
    public int segmentCount = 20;      // Kitne points (zyada = smoother lekin slow)
    public float ropeLength = 10f;     // Total rope length (agar points ke beech distance se zyada ho to sag hoga)
    public float gravity = 9.81f;
    public int constraintIterations = 10;  // Zyada = stiffer rope

    [Header("Visuals")]
    public float ropeWidth = 0.1f;
  /*  public Color startColor = Color.white;
    public Color endColor = Color.white;*/

    private LineRenderer lineRenderer;
    private List<Vector3> positions = new List<Vector3>();
    private List<Vector3> previousPositions = new List<Vector3>();

    private float segmentLength;

    void Start()
    {
        lineRenderer = GetComponent<LineRenderer>();
        lineRenderer.positionCount = segmentCount;
        lineRenderer.startWidth = ropeWidth;
        lineRenderer.endWidth = ropeWidth;
      //  lineRenderer.startColor = startColor;
      //  lineRenderer.endColor = endColor;

        InitializeRope();
    }

    void InitializeRope()
    {
        positions.Clear();
        previousPositions.Clear();

        if (pointA == null || pointB == null) return;

        Vector3 startPos = pointA.position;
        Vector3 endPos = pointB.position;

        segmentLength = ropeLength / (segmentCount - 1);

        for (int i = 0; i < segmentCount; i++)
        {
            float t = i / (float)(segmentCount - 1);
            Vector3 pos = Vector3.Lerp(startPos, endPos, t);
            positions.Add(pos);
            previousPositions.Add(pos);
        }
    }

    void Update()
    {
        if (pointA == null || pointB == null) return;

        Simulate();
        UpdateLineRenderer();
    }

    void Simulate()
    {
        // Apply gravity + Verlet integration
        for (int i = 1; i < positions.Count; i++)  // First point fixed
        {
            Vector3 velocity = positions[i] - previousPositions[i];
            previousPositions[i] = positions[i];
            positions[i] += velocity;
            positions[i] += Vector3.down * gravity * Time.deltaTime * Time.deltaTime;
        }

        // Constraints (distance + fixed ends)
        for (int iter = 0; iter < constraintIterations; iter++)
        {
            // Fix start
            positions[0] = pointA.position;

            // Fix end
            positions[positions.Count - 1] = pointB.position;

            // Distance constraints
            for (int i = 0; i < positions.Count - 1; i++)
            {
                Vector3 dir = positions[i + 1] - positions[i];
                float dist = dir.magnitude;
                float error = dist - segmentLength;

                if (dist > 0.001f)
                {
                    Vector3 correction = dir.normalized * (error * 0.5f);
                    positions[i] += correction;
                    positions[i + 1] -= correction;
                }
            }
        }
    }

    void UpdateLineRenderer()
    {
        for (int i = 0; i < positions.Count; i++)
        {
            lineRenderer.SetPosition(i, positions[i]);
        }
    }

    // Editor mein test karne ke liye
    void OnValidate()
    {
        if (Application.isPlaying && lineRenderer != null)
        {
            lineRenderer.startWidth = ropeWidth;
            lineRenderer.endWidth = ropeWidth;
        }
    }
}