using UnityEngine;

public class Lvl2_EyeOpenClose : MonoBehaviour
{
    [Space()]
    public Level2_Face ThisLevel;

    [Space()]
    public BasicDrag ThisDrag;

    [Space()]
    public GameObject Tip;

    bool isInArea = false;

    void Start()
    {
        // Playable builds leave ThisLevel / ThisDrag unassigned (the level script is
        // dropped there), so every use has to survive a null. In the full game they are
        // assigned and these checks never trigger.
        if (ThisDrag == null)
            return;

        ThisDrag.OnMouseDownEvent += () =>
        {
            if (isInArea && ThisLevel != null)
                ThisLevel.CloseEye();
        };

        ThisDrag.OnMouseUpEvent += () =>
        {
            if (!isInArea && ThisLevel != null)
                ThisLevel.OpenEye();
        };
    }

    void OnTriggerEnter2D(Collider2D collision)
    {
        if (collision != null)
        {
            if (collision.gameObject == Tip)
            {
                if (ThisLevel != null)
                    ThisLevel.CloseEye();

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
                if (ThisLevel != null)
                    ThisLevel.OpenEye();

                isInArea = false;
            }
        }
    }

    void OnDisable()
    {
        isInArea = false;

        if (ThisLevel != null)
            ThisLevel.OpenEye();
    }
}
