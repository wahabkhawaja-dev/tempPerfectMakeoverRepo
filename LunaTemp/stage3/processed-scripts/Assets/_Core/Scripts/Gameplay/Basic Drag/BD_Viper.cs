using UnityEngine;
using DG.Tweening; // Required for DOTween

public class BD_Viper : MonoBehaviour
{
    [Space()]
    public BasicDrag BD;

    [Space()]
    public float rotationDuration = 0.3f; // Duration for smooth rotation

    private Vector2 lastPosition;

    // Start is called before the first frame update
    void Start()
    {
        // Ensure BD is assigned
        if (BD == null)
        {
            BD = GetComponent<BasicDrag>();
            if (BD == null)
            {
                Debug.LogError("BasicDrag component not found!");
            }
        }

        // Initialize lastPosition
        lastPosition = transform.position;

        BD.OnMouseDownEvent += OnPick;
        BD.OnMouseUpEvent += OnRelease;
    }

    bool isPicked;

    void OnPick() 
    {
        isPicked=true;
    }

    void OnRelease() 
    {
        isPicked = false;

        transform.DOKill();
        transform.DORotate(new Vector3(0, 0, 0), rotationDuration, RotateMode.Fast)
                .SetEase(Ease.Linear); // Smooth easing for rotation
    }


    // Update is called once per frame
    void Update()
    {

        if (!isPicked)
        {
            return;
        }
        // Calculate movement direction based on position change
        Vector2 currentPosition = transform.position;
        Vector2 movement = currentPosition - lastPosition;
        lastPosition = currentPosition;

        // Determine primary movement direction
        float targetRotation = transform.eulerAngles.z; // Default to current rotation

        if (movement.magnitude > 0.01f) // Ensure there's significant movement
        {
            // Check primary direction based on movement vector
            if (Mathf.Abs(movement.y) > Mathf.Abs(movement.x))
            {
                // Vertical movement
                targetRotation = movement.y > 0 ? 0f : 180f; // Up: 0, Down: 180
            }
            else
            {
                // Horizontal movement
                targetRotation = movement.x > 0 ? -90f : 90f; // Right: 90, Left: -90
            }

            // Apply smooth rotation using DOTween
            transform.DORotate(new Vector3(0, 0, targetRotation), rotationDuration, RotateMode.Fast)
                .SetEase(Ease.Linear); // Smooth easing for rotation
        }
    }
}