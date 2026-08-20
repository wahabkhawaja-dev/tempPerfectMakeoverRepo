public class RemoteManager
{
    public static readonly RemoteManager Instance = new RemoteManager();

    // Playable: skip inner "fix it" hops (shower / wax machine / stove).
    public bool FixInnerLevel()
    {
        return false;
    }
}
