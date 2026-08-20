using UnityEngine;
using System.Collections;

public class BD_SpriteChange : MonoBehaviour
{
    [Space()]
    public BasicDrag BD;

    [Space()]
    public SpriteRenderer SR;
    public Sprite Default;
    public Sprite Picked;


    public bool resetOnRelease = true;
    IEnumerator Start()
    {
        yield return new WaitForSeconds(.1f);

        BD.OnMouseDownEvent += ToolPicked;

        if(resetOnRelease)
            BD.OnMouseUpEvent += ToolReleased;

        ToolReleased();
    }

    public void ToolPicked()
    {
        SR.sprite = Picked;
    }

    public void ToolReleased()
    {
        SR.sprite = Default;
    }
}
