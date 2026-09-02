using UnityEngine;
using UnityEngine.UI;
using UnityEngine.UI;

public class ChatBubbleUI : MonoBehaviour
{
    public Transform avatarAnchor; // Prefab ke andar aik khali point (Transform)
    public Text nameText;
    public Text messageText;

    public void Setup(DialogueEntry data)
    {
        nameText.text = data.characterName;
        messageText.text = data.message;

        // Purana koi avatar ho to remove karna (just in case)
        foreach (Transform child in avatarAnchor)
        {
            Destroy(child.gameObject);
        }

        // Naya Emotion wala GameObject spawn karna
        if (data.avatarPrefab != null)
        {
            GameObject avatar = Instantiate(data.avatarPrefab, avatarAnchor);

            // UI ke hisab se position aur scale set karna
            avatar.transform.localPosition = Vector3.zero;

            // Agar aapke bone-animated characters bade hain to scale adjust karen
            // avatar.transform.localScale = new Vector3(100, 100, 1); 

            // Make sure avatar is on the right Layer to be seen by the UI Camera
            avatar.layer = LayerMask.NameToLayer("UI");
        }
    }
}