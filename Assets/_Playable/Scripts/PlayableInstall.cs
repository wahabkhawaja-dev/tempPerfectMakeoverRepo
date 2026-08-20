using System;
using UnityEngine;

/// <summary>
/// Playworks CTA. Literal Luna calls are required for Playworks health check.
/// </summary>
public static class PlayableInstall
{
    public static void Go()
    {
        Debug.Log("[Playable] CTA called");
        try
        {
            Luna.Unity.Playable.InstallFullGame();
            Luna.Unity.LifeCycle.GameEnded();
        }
        catch (Exception e)
        {
            Debug.Log("[Playable] Install CTA (editor/no-Luna is ok): " + e.Message);
        }
    }
}
