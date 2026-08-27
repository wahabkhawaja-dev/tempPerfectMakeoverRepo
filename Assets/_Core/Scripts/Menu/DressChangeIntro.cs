using DG.Tweening;
using UnityEngine;
using UnityEngine.SceneManagement;

public class DressChangeIntro : MonoBehaviour
{
    public MenuLevel menuLevel;

    public GameObject curtainMoveable;
    public GameObject curtainStatic;


    [Header("----------------- CURTAIN SLIDE IN ----------------------")]
    [Space()]
    public float slideInOffsetX = 12f;
    public float slideInDuration = 1f;
    public Ease slideInEase = Ease.OutSine;
    [Space()]
    public float startDelay = 0.25f;

    [Header("----------------- HAND + BONE_3 PEEK ----------------------")]
    [Space()]
    public GameObject handSmall;
    public Transform bone_3;
    [Space()]
    public float handSmallBackwardAmount = 0.3f;
    public float bone3BackwardAmount = 0.3f;
    [Space()]
    public float handPeekDuration = 0.4f;
    public Ease handPeekEase = Ease.OutQuad;

    [Header("----------------- ARM + CLOTH ----------------------")]
    [Space()]
    public GameObject armCloth;
    [Space()]
    public float armClothDelay = 0.2f;
    public float armClothDuration = 0.6f;
    public Ease armClothEase = Ease.OutQuad;

    [Header("----------------- BASKET SLIDE IN ----------------------")]
    [Space()]
    public Transform basket;
    [Space()]
    public float basketOffsetX = 12f;
    public float basketSlideDelay = 0.2f;
    public float basketSlideDuration = 1f;
    public Ease basketSlideEase = Ease.OutSine;

    [Header("----------------- CLOTH DRAG TO BASKET ----------------------")]
    [Space()]
    public MenuDraggable cloth;
    public SpriteRenderer clothRenderer;
    public Sprite clothPickedSprite;
    public Sprite clothBasketSprite;


    public GameObject handIndication;
    [Space()]
    public Transform basketDropTarget;
    public float dropRadius = 1f;
    [Space()]
    public float dropJumpHeight = 0.5f;
    public float dropJumpDuration = 0.2f;
    public float dropSinkDuration = 0.6f;
    [Space()]
    public int clothPickedSortingOrder = 110;

    [Space()]
    public AudioClip ToolPlaceClip;

    Vector3 curtainRestPos;
    Vector3 bone3RestPos;
    Vector3 handSmallRestPos;
    Vector3 armClothRestPos;
    Vector3 basketRestPos;

    Sprite clothDefaultSprite;
    bool clothPlaced;

    void Start()
    {
        curtainRestPos = transform.localPosition;
        bone3RestPos = bone_3.localPosition;
        handSmallRestPos = handSmall.transform.localPosition;
        armClothRestPos = armCloth.transform.localPosition;
        basketRestPos = basket.localPosition;
        clothDefaultSprite = clothRenderer.sprite;

        handSmall.SetActive(false);
        armCloth.SetActive(false);

        cloth.canDrag = false;
        cloth.OnPicked += OnClothPicked;
        cloth.OnReleased += OnClothReleased;

        CameraController.Instance.MoveCamera(new Vector3(0f, 0, -10f), 5f);

        DOVirtual.DelayedCall(1.7f, () =>
        {
            CameraController.Instance.MoveCamera(new Vector3(1.75f, 0, -10f), 5f);
        });

    }

    public void StartHandPeek()
    {
        curtainMoveable.SetActive(false);
        curtainStatic.SetActive(true);

        handSmall.SetActive(true);
        handSmall.transform.localPosition = handSmallRestPos;

        handSmall.transform.DOKill();
        handSmall.transform.DOLocalMoveX(handSmallRestPos.x - handSmallBackwardAmount, handPeekDuration)
            .SetEase(handPeekEase);

        bone_3.DOKill();
        bone_3.DOLocalMoveX(bone3RestPos.x - bone3BackwardAmount, handPeekDuration)
            .SetEase(handPeekEase)
            .OnComplete(StartArmCloth);

        StartBasketSlide();
    }

    void StartArmCloth()
    {
        armCloth.SetActive(true);
        armCloth.transform.localPosition = armClothRestPos;

        armCloth.transform.DOKill();
        armCloth.transform.DOLocalMoveX(0f, armClothDuration)
            .SetDelay(armClothDelay)
            .SetEase(armClothEase)
            .OnComplete(ClothUpdate);
    }

    void StartBasketSlide()
    {
        basket.localPosition = basketRestPos + new Vector3(basketOffsetX, 0f, 0f);

        basket.gameObject.SetActive(true);
        basket.DOKill();
        basket.DOLocalMoveX(basketRestPos.x, basketSlideDuration)
            .SetDelay(basketSlideDelay)
            .SetEase(basketSlideEase)
            .OnComplete(() =>
            {
                cloth.canDrag = true;

                DOVirtual.DelayedCall(0.25f, () =>
                {
                    handIndication.SetActive(true);

                });
            });
    }

    void ClothUpdate()
    {
        cloth.transform.parent = this.transform;
    }

    void OnClothPicked()
    {

        handIndication.SetActive(false);

        if (clothPlaced)
            return;

        if (clothPickedSprite != null)
            clothRenderer.sprite = clothPickedSprite;

        clothRenderer.sortingOrder = clothPickedSortingOrder;

    }

    void OnClothReleased()
    {
        if (clothPlaced)
            return;

        float dist = Vector3.Distance(cloth.transform.position, basketDropTarget.position);

        if (dist <= dropRadius)
        {
            PlaceClothInBasket();

            if (ToolPlaceClip != null)
                AudioController.instance.PlayAnySfx(0, ToolPlaceClip, 0.23f);
        }
        else
        {
            clothRenderer.sprite = clothDefaultSprite;
            //clothRenderer.sortingOrder = clothDefaultSortingOrder;
        }


        DOVirtual.DelayedCall(1f, () =>
        {
            if (clothPlaced)
                return;
            handIndication.SetActive(true);
        });
    }

    void PlaceClothInBasket()
    {

        handIndication.SetActive(false);

        clothPlaced = true;
        cloth.isPlaced = true;

        handSmall.SetActive(false);

        armCloth.transform.DOKill();
        armCloth.transform.DOLocalMoveX(armClothRestPos.x, armClothDuration).SetEase(armClothEase);

        bone_3.DOKill();
        bone_3.DOLocalMoveX(bone3RestPos.x, handPeekDuration).SetEase(handPeekEase);

        cloth.transform.DOKill();

        clothRenderer.sortingOrder = 110;

        Vector3 abovePos = basketDropTarget.position + Vector3.up * dropJumpHeight;

        Sequence dropSeq = DOTween.Sequence();
        dropSeq.Append(cloth.transform.DOMove(abovePos, dropJumpDuration).SetEase(Ease.OutQuad));
        dropSeq.Append(cloth.transform.DOMove(basketDropTarget.position, dropSinkDuration).SetEase(Ease.InSine));
        dropSeq.AppendCallback(() =>
        {
            if (clothBasketSprite != null)
                clothRenderer.sprite = clothBasketSprite;
        });
        dropSeq.OnComplete(() =>
        {
            handIndication.SetActive(false);
            cloth.canDrag = false;
            cloth.enabled = false;

            MenuManager.instance.msgController.HideMessage();

            SaveSystem.Instance.DataFields.partToPlay = 2;

            MenuManager.instance.currentLevel.ReverseBtnAnim();

            DOVirtual.DelayedCall(.9f, () =>
            {
                MenuManager.instance.TopBarAnim.DOPlayBackwards();
            });

            DOVirtual.DelayedCall(.5f, () =>
            {
                LoadingManager.instance.ShowFadeAnim(1f, 1.25f);

                DOVirtual.DelayedCall(1f, () => SceneManager.LoadScene(2));

            });

            PlayerPrefs.SetInt("PartyDress", 1);
        });
    }
}
