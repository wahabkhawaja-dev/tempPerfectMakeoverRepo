using UnityEngine;

public class Lvl1_EyeOpenClose : MonoBehaviour
{
    [Space()]
    public Level1_Face ThisLevel;

    [Space()]
    public BasicDrag ThisDrag;

    [Space()]
    public GameObject Tip;

    bool isInArea = false;

    IEyeFace face;
    bool faceResolved;

    /// <summary>
    /// The level that owns the eyes. Uses the inspector reference when it is set (full game);
    /// in a playable that field is None - the level class there is Level1_Face_Playable, a
    /// sibling type Unity cannot store in a Level1_Face field - so fall back to whichever
    /// parent implements the eye interface. Resolved lazily: OnDisable can run before Start.
    /// </summary>
    IEyeFace Face
    {
        get
        {
            if (faceResolved)
                return face;

            faceResolved = true;
            face = ThisLevel;

            if (face == null)
            {
                MonoBehaviour[] parents = GetComponentsInParent<MonoBehaviour>(true);
                for (int i = 0; i < parents.Length; i++)
                {
                    IEyeFace candidate = parents[i] as IEyeFace;
                    if (candidate != null)
                    {
                        face = candidate;
                        break;
                    }
                }
            }

            return face;
        }
    }

    void Start()
    {
        // Playable builds leave ThisLevel / ThisDrag unassigned (the level script is
        // dropped there), so every use has to survive a null. In the full game they are
        // assigned and these checks never trigger.
        if (ThisDrag == null)
            return;

        ThisDrag.OnMouseDownEvent += () =>
        {
            if (isInArea && Face != null)
                Face.CloseEye();
        };

        ThisDrag.OnMouseUpEvent += () =>
        {
            if (!isInArea && Face != null)
                Face.OpenEye();
        };
    }

    void OnTriggerEnter2D(Collider2D collision)
    {
        if (collision != null)
        {
            if (collision.gameObject == Tip)
            {
                if (Face != null)
                    Face.CloseEye();

                isInArea = true;
            }
        }
    }

    void OnTriggerExit2D(Collider2D collision)
    {
        if (collision != null)
        {
            if (collision.gameObject == Tip)
            {
                if (Face != null)
                    Face.OpenEye();

                isInArea = false;
            }
        }
    }

    void OnDisable()
    {
        isInArea = false;

        if (Face != null)
            Face.OpenEye();
    }
}
