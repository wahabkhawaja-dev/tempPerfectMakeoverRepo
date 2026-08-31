using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.Events;

public class BD_Action : MonoBehaviour
{
     BasicDrag tool;
    [Header("Sprite Render")]
    [SerializeField] bool setToolLayer;
    [SerializeField] SpriteRenderer tool_SP;
    int def_SO; //default sorting order

    [Header("Mouse Events")]
    public UnityEvent OnMouseDownEvent;
    public UnityEvent OnMouseUpEvent;

    private void Start()
    {
        TryGetComponent<BasicDrag>(out tool);

        if (tool) 
        {
            tool.OnMouseDownEvent += OnMouseDownCalled;
            tool.OnMouseUpEvent += OnMouseUpCalled;

            if (setToolLayer)
            {
                def_SO = tool_SP.sortingOrder;
                tool_SP.sortingOrder = tool_SP.sortingOrder + 500;

            }
        }
       
    }

    private void OnMouseDownCalled()
    {
        if (setToolLayer)
            tool_SP.sortingOrder = def_SO;

        OnMouseDownEvent?.Invoke();
    }

    private void OnMouseUpCalled()
    {
        OnMouseUpEvent?.Invoke();
    }

}
