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
        ThisDrag.OnMouseDownEvent += () =>
        {
            if (isInArea)
                ThisLevel.CloseEye();
        };

        ThisDrag.OnMouseUpEvent += () =>
        {
            if (!isInArea)
                ThisLevel.OpenEye();
        };
    }

    void OnTriggerEnter2D(Collider2D collision)
    {
        if (collision != null)
        {
            if (collision.gameObject == Tip)
            {
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
                ThisLevel.OpenEye();

                isInArea = false;
            }
        }
    }

    void OnDisable()
    {
        isInArea = false;

        ThisLevel.OpenEye();
    }
}
