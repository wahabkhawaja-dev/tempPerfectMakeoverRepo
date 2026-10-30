/// <summary>Extends the existing three-step creative with its final water rinse.</summary>
public sealed class HalloweenCrownGameManager : GameManagerPlayable
{
    public HalloweenCrownRinse rinse;
    public override void Complete()
    {
        if (rinse != null && !rinse.Finished) { rinse.Begin(); return; }
        base.Complete();
    }
}
