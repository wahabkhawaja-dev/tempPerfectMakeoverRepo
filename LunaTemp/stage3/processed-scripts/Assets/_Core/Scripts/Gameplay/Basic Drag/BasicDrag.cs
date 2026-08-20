using System;
using UnityEngine;
using DG.Tweening;
using System.Collections;
using UnityEngine.EventSystems;

public class BasicDrag : MonoBehaviour
{
    [Space()]
    public bool canDrag = true;

    [Space()]
    public bool dragByDelta = false;

    [Space()]
    public bool isDragging = false;

    [Space()]
    public bool moveWithPointer;

    [Space()]
    public bool canReturn = true;
    public bool jumpOnReturn = false;
    public float returnTime = 0.2f;
    public Vector3 Tool_Offset = Vector3.zero;

    [Space()]
    public bool canScaleIncrease = false;
    public Vector3 Self_ScaleNew = Vector3.zero;

    [Space()]
    public bool canRotateOnPick = false;
    public Vector3 startRot = Vector3.zero;
    public Vector3 newRot = Vector3.zero;

    [Space()]
    public SpriteRenderer[] childSprite;

    [Space()]
    public AudioClip ToolSelectClip;
    public AudioSource ToolLoopClip;

    [Space()]
    public ParticleSystem thisParticles;

    [Space()]
    public bool onDragparticle;
    public ParticleSystem dragParticles;

    [Space()]
    public Animator anim;

    [Space()]
    public Vector3 startPos;
    public Vector3 startScale;

    [Space()]
    public bool Vibration = false;

    [Space()]
    public bool isPlacedCannotMove = false;
    public bool isObjectMovingWhileDragging = false;

    [Space()]
    public Action OnMouseDownEvent;
    public Action OnMouseUpEvent;

    [Space()]
    public Action ProgStartEvent;
    public Action ProgEndEvent;

    Vector3 offset;
    Vector3 previousPosition;
    Vector3 cachedMousePosition;
    Vector3 lastMouseWorldPosition;

    Camera thisCamera;
    float dragThreshold = 0.02f;
    bool saveStartTransform = false;

    [HideInInspector()]
    public bool canCallMouseUpWhenGamePaused = true;

    [HideInInspector()]
    public float ClampX_L = -2.5f, ClampX_H = 2.5f,
                 ClampY_L = -4f, ClampY_H = 4f;

    [HideInInspector()]
    public int startOrder = 0;

    [HideInInspector()]
    public bool dontResetItIsInCollider = false;

    [HideInInspector()]
    public Collider2D thisCollider;

    [HideInInspector()]
    public SpriteRenderer thisSR;

    [Space()]
    public Action OnMouseDownEventIndependentFromCanDrag;

    WaitForSeconds waitTemp = new WaitForSeconds(.1f);

    Vector3 dragStartPosition;
    float swipeThreshold = 0.5f;

    Coroutine co;

    bool isMouseDownPressed = false;

    void Start()
    {
        thisCamera = Camera.main;

        isPlacedCannotMove = false;

        ResetState();

        thisCollider = GetComponent<Collider2D>();

        try
        {
            thisSR = this.GetComponent<SpriteRenderer>();


            startOrder = thisSR.sortingOrder;
        }
        catch { }

        startRot = transform.eulerAngles;

        if (anim != null)
        {
            anim.Play(anim.GetCurrentAnimatorStateInfo(0).fullPathHash, 0, 0f);

            // Force animator to update this frame
            anim.Update(0f);
            anim.enabled = false;
        }
    }

    void OnEnable()
    {
        co = StartCoroutine(Exec());
    }

    void OnDisable()
    {
        if (co != null)
            StopCoroutine(co);
    }

    void Update()
    {
        //if (GameManager.instance.isPaused)
        //    return;

        if (isPlacedCannotMove || !canDrag)
            return;

        // Handle dragByDelta mode without collider
        if (dragByDelta)
        {
            if (Input.GetMouseButtonDown(0))
            {
                if (isOverUI())
                    return;

                Vector3 mouseWorld = thisCamera.ScreenToWorldPoint(Input.mousePosition);

                //

                if (thisParticles != null)
                    thisParticles.Play();

                if (moveWithPointer)
                    previousPosition = transform.position;

                OnDragStart_Delta();

                    
            }

            else if (Input.GetMouseButtonUp(0) && isDragging)
            {
                if (thisParticles != null)
                    thisParticles.Stop();

                    

                OnDragEnd();
            }
        }

        else
        {
            if (Input.GetMouseButtonDown(0))
            {
                if (PointerInput.IsOverCollider(thisCollider))
                    MouseDownPressed();
            }

            if (Input.GetMouseButtonUp(0))
            {
                if (isMouseDownPressed)
                    MouseUpPressed();
            }
        }

        if (isDragging)
        {
            HandleDragging();

            if (anim != null)
                anim.enabled = true;
        }

        else
        {
            isObjectMovingWhileDragging = false;

            if (anim != null)
            {
                anim.Play(anim.GetCurrentAnimatorStateInfo(0).fullPathHash, 0, 0f);

                // Force animator to update this frame
                anim.Update(0f);
                anim.enabled = false;
            }
        }

        if ((transform.position.x > 100 || transform.position.y > 100) || (transform.position.x < -100 || transform.position.y < -100))
        {
            transform.position = startPos;
        }
    }

    IEnumerator Exec()
    {
        previousPosition = transform.position;

        while (true)
        {
            if (isDragging)
            {
                float distTemp = Vector3.Distance(transform.position, previousPosition);

                isObjectMovingWhileDragging = distTemp > dragThreshold;
            }

            else
            {
                isObjectMovingWhileDragging = false;
            }

            if (dragParticles != null)
            {
                if (onDragparticle)
                    dragParticles.enableEmission = isObjectMovingWhileDragging;

                else
                    dragParticles.enableEmission = isDragging;
            }

            previousPosition = transform.position;

            yield return waitTemp;
        }
    }

    void MouseDownPressed()
    {
        if (isOverUI())
            return;

        if (dragByDelta)
            return;

        if (GameManager.instance.isPaused)
            return;

        if (isPlacedCannotMove)
            return;

        if (!canDrag)
        {
            OnMouseDownEventIndependentFromCanDrag?.Invoke();

            return;
        }

        isMouseDownPressed = true;

        OnDragStart();

        ProgStartEvent?.Invoke();
        OnMouseDownEvent?.Invoke();

        if (ToolSelectClip != null)
            AudioController.instance.PlayAnySfx(0, ToolSelectClip, 0f);

        if (ToolLoopClip != null)
            ToolLoopClip.Play();

        if (thisParticles != null)
            thisParticles.Play();

        

            
    }

    void MouseUpPressed()
    {
        isMouseDownPressed = false;

        if (dragByDelta)
            return;

        if (GameManager.instance.isPaused)
            return;

        if (isPlacedCannotMove || !canDrag)
            return;

        OnDragEnd();

        ProgEndEvent?.Invoke();

        OnMouseUpEvent?.Invoke();

        if (thisParticles != null)
            thisParticles.Stop();

        if (ToolLoopClip != null)
            ToolLoopClip.Pause();
    }

    // Original collider-based start
    void OnDragStart()
    {
        if (!saveStartTransform)
        {
            startPos = transform.position;
            startScale = transform.localScale;
            saveStartTransform = true;
        }

        IncreaseSR();
        ResetState();
        isDragging = true;

        cachedMousePosition = thisCamera.ScreenToWorldPoint(Input.mousePosition);
        offset = transform.position - cachedMousePosition;

        transform.DOKill();

        if (canScaleIncrease)
        {
            transform.DOScale(Self_ScaleNew, 0.25f);
        }

        if (canRotateOnPick)
        {
            transform.DOLocalRotate(newRot, 0.25f);
        }

        dragStartPosition = transform.position;
    }

    // New delta-based start
    void OnDragStart_Delta()
    {
        if (!saveStartTransform)
        {
            startPos = transform.position;
            startScale = transform.localScale;
            saveStartTransform = true;
        }

        IncreaseSR();

        ResetState();

        isDragging = true;

        lastMouseWorldPosition = thisCamera.ScreenToWorldPoint(Input.mousePosition);

        if (moveWithPointer)
        {
            Vector3 mouseWorld = lastMouseWorldPosition;
            transform.position = new Vector3(mouseWorld.x + Tool_Offset.x, mouseWorld.y + Tool_Offset.y, startPos.z);
        }


        transform.DOKill();

        if (canScaleIncrease)
        {
            transform.DOScale(Self_ScaleNew, 0.25f);
        }

        if (canRotateOnPick)
        {
            transform.DOLocalRotate(newRot, 0.25f);
        }

        ProgStartEvent?.Invoke();

        OnMouseDownEvent?.Invoke();

        if (ToolSelectClip != null)
            AudioController.instance.PlayAnySfx(0, ToolSelectClip, 0f);

        if (ToolLoopClip != null)
            ToolLoopClip.Play();
    }

    Vector3 tempPos;
    void HandleDragging()
    {
        Vector3 mouseWorld = thisCamera.ScreenToWorldPoint(Input.mousePosition);

        if (dragByDelta)
        {
            if (moveWithPointer)
            {
                // Move directly with pointer position
                Vector3 targetPosition = mouseWorld + Tool_Offset;
                // Vector3 targetPosition = mouseWorld;

                float ClampX = Mathf.Clamp(targetPosition.x, ClampX_L, ClampX_H);
                float ClampY = Mathf.Clamp(targetPosition.y, ClampY_L, ClampY_H);
                tempPos.x = ClampX;
                tempPos.y = ClampY;
                tempPos.z = startPos.z;


                transform.position = tempPos;

                /* if (moveWithPointer)
                 {
                     if (Input.GetMouseButtonDown(0))
                         previousPosition = transform.position;
                 }*/
            }
            else
            {
                // Existing delta-based movement
                Vector3 delta = mouseWorld - lastMouseWorldPosition;
                Vector3 newPos = transform.position + delta;

                float ClampX = Mathf.Clamp(newPos.x, ClampX_L, ClampX_H);
                float ClampY = Mathf.Clamp(newPos.y, ClampY_L, ClampY_H);
                tempPos.x = ClampX;
                tempPos.y = ClampY;
                tempPos.z = startPos.z;


                transform.position = tempPos;

                lastMouseWorldPosition = mouseWorld;
            }
        }
        else
        {
            // Original non-delta dragging with lerp
            Vector3 targetPosition = mouseWorld + offset + Tool_Offset;

            float ClampX = Mathf.Clamp(targetPosition.x, ClampX_L, ClampX_H);
            float ClampY = Mathf.Clamp(targetPosition.y, ClampY_L, ClampY_H);

            tempPos.x = ClampX;
            tempPos.y = ClampY;
            tempPos.z = startPos.z;

            targetPosition = tempPos;

            transform.position = Vector3.Lerp(transform.position, targetPosition, Time.deltaTime * 20f);
        }
    }

    public void OnDragEnd(bool overrideVal = false)
    {
        transform.DOKill();

        if (canScaleIncrease)
        {
            transform.DOScale(startScale, 0.25f);
        }

        if (canRotateOnPick)
        {
            transform.DOLocalRotate(startRot, 0.25f);
        }

        ResetState();

        if (overrideVal) // Only return in original mode
        {
            if (jumpOnReturn)
            {
                // Create a small jump effect before reaching startPos
                Vector3 jumpPeak = startPos + Vector3.up * 0.75f; // Adjust height as needed

                // First move to jump peak quickly, then come down to startPos
                transform.DOMove(jumpPeak, returnTime * 0.45f)
                    .SetEase(Ease.Linear)
                    .OnComplete(() =>
                    {
                        transform.DOMove(startPos, returnTime * 0.55f)
                            .SetEase(Ease.Linear)
                            .OnComplete(() =>
                            {
                            });
                                DecreaseSR();
                    });
            }
            else
            {
                // Normal return without jump
                transform.DOMove(startPos, returnTime)
                    .OnComplete(() =>
                    {
                        DecreaseSR();
                    });
            }
        }

        else if (canReturn && !dragByDelta) // Only return in original mode
        {
            if (jumpOnReturn)
            {
                // Create a small jump effect before reaching startPos
                Vector3 jumpPeak = startPos + Vector3.up * 0.75f; // Adjust height as needed

                // First move to jump peak quickly, then come down to startPos
                transform.DOMove(jumpPeak, returnTime * 0.45f)
                    .SetEase(Ease.Linear)
                    .OnComplete(() =>
                    {
                        transform.DOMove(startPos, returnTime * 0.55f)
                            .SetEase(Ease.Linear)
                            .OnComplete(() =>
                            {
                            });
                                DecreaseSR();
                    });
            }
            else
            {
                // Normal return without jump
                transform.DOMove(startPos, returnTime)
                    .OnComplete(() =>
                    {
                        DecreaseSR();
                    });
            }
        }

        else
        {
            DecreaseSR();
        }

        if (!dragByDelta)
            OffestReset();

        ProgEndEvent?.Invoke();

        OnMouseUpEvent?.Invoke();

        if (ToolLoopClip != null)
            ToolLoopClip.Pause();
    }

    void IncreaseSR()
    {
        if (thisSR != null)
        {
            thisSR.sortingOrder = 500;
        }

        if (childSprite.Length > 0)
        {
            for (int i = 0; i < childSprite.Length; i++)
            {
                childSprite[i].sortingOrder = (501 + i);
            }
        }
    }

    public void DecreaseSR()
    {
        if (thisSR != null)
        {
            thisSR.sortingOrder = startOrder;
        }

        if (childSprite.Length > 0)
        {
            for (int i = 0; i < childSprite.Length; i++)
            {
                childSprite[i].sortingOrder = startOrder + 1;
            }
        }
    }

    void ResetState()
    {
        isDragging = false;
        offset = Vector3.zero;
        cachedMousePosition = Vector3.zero;
    }

    void OffestReset()
    {
        if (Tool_Offset != Vector3.zero)
        {
            cachedMousePosition = thisCamera.ScreenToWorldPoint(Input.mousePosition);
            cachedMousePosition = new Vector3(transform.position.x, cachedMousePosition.y, startPos.z);
            Vector3 targetPosition;

            if (!dontResetItIsInCollider)
            {
                targetPosition = cachedMousePosition - offset - Tool_Offset;

                float ClampX = Mathf.Clamp(targetPosition.x, ClampX_L, ClampX_H);
                float ClampY = Mathf.Clamp(targetPosition.y, ClampY_L, ClampY_H);
                targetPosition = new Vector3(ClampX, ClampY, startPos.z);

                transform.position = Vector3.Lerp(transform.position, targetPosition, Time.deltaTime * 20f);
            }
        }
    }

    public void StopTheDrag()
    {
        isDragging = false;

        if (thisParticles != null)
            thisParticles.Stop();

            

        OnDragEnd();
    }

    public bool HasSwipedDown()
    {
        if (!isDragging)
            return false;

        float deltaY = transform.position.y - dragStartPosition.y;

        // Swipe is downward if delta is negative and exceeds threshold
        return deltaY < -swipeThreshold;
    }

    // UI Check

    public bool isOverUI()
    {
        // Ignore drag if pointer is over any UI element
        if (EventSystem.current != null && EventSystem.current.IsPointerOverGameObject())
        {
            return true;
        }

        if (Input.touchCount > 0)
        {
            if (EventSystem.current.IsPointerOverGameObject(Input.GetTouch(0).fingerId))
                return true;
        }

        return false;
    }
}
