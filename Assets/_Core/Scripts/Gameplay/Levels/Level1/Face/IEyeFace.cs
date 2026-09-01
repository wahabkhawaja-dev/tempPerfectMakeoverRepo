/// <summary>
/// Implemented by any level script that owns the eye open/close state (Level1_Face and its
/// generated playable twin). Lets the eye detectors talk to whichever one is in the scene:
/// the playable's level class is a sibling of Level1_Face, not a subclass, so a
/// Level1_Face-typed inspector reference cannot hold it and Unity serializes it as None.
/// </summary>
public interface IEyeFace
{
    void OpenEye();
    void CloseEye();
}
