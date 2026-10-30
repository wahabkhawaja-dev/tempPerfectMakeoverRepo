using UnityEngine.Serialization;

/// <summary>Extends the existing three-step creative with its final cloth wipe.</summary>
public sealed class HalloweenCrownGameManager : GameManagerPlayable
{
    [FormerlySerializedAs("rinse")] public HalloweenCrownWipe wipe;
    public override void Complete()
    {
        if (wipe != null && !wipe.Finished) { wipe.Begin(); return; }
        base.Complete();
    }
}
