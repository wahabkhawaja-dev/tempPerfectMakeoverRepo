using UnityEngine;
using System.Collections;

public class BD_SpriteAnim : MonoBehaviour
{
    [Space()]
    public BasicDrag BD; // Changed to match your previous script name

    [Space()]
    public SpriteRenderer SR;
    public Sprite[] AllSprites;

    [Space()]
    public float changeSpeed = .2f;

    private Coroutine _animRoutine;
    private int _currentSpriteIndex = 0;

    IEnumerator Start()
    {
        yield return new WaitForSeconds(.1f);

        // Subscribing to your custom events
        BD.OnMouseDownEvent += StartAnim;
        BD.OnMouseUpEvent += StopAnim;
    }

    public void StartAnim()
    {
        // Safety check to avoid starting multiple coroutines
        if (_animRoutine != null) StopCoroutine(_animRoutine);
        _animRoutine = StartCoroutine(PlaySpriteLoop());
    }

    public void StopAnim()
    {
        if (_animRoutine != null)
        {
            StopCoroutine(_animRoutine);

            _animRoutine = null;
        }

        // Reset to first frame when stopping
        if (AllSprites.Length > 0)
        {
            SR.sprite = AllSprites[0];

            _currentSpriteIndex = 0;
        }
    }

    private IEnumerator PlaySpriteLoop()
    {
        if (AllSprites.Length == 0) yield break;

        while (true)
        {
            SR.sprite = AllSprites[_currentSpriteIndex];

            // Increment index and loop back using modulo
            _currentSpriteIndex = (_currentSpriteIndex + 1) % AllSprites.Length;

            yield return new WaitForSeconds(changeSpeed);
        }
    }
}