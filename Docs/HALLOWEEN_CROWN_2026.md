# Halloween crown playable

Branch: `MakeoverFashionASMRThemes_004_CrownHalloween_CTAComplete_30Oct2026`

This work is isolated in `C:/Users/Cigra Studio/.codex/worktrees/crown-halloween/PerfecrMakeoverASMR_Playables`. Branch 004 is based on branch 003's completed commit `653cc69a` (rebased from its original `818e105f` base). The original Halloween commit `882868e7` remains on `codex/backup-crown-halloween-882868e7`. Branch 003 and its checkout are unchanged by the rebase.

## Open and rebuild

Open this worktree with Unity 2022.3.62f2 and load `Assets/_Playable/Scenes/Gameplay_Playable.unity`. The configured level is `Assets/_Playable/Halloween2026/Prefabs/Halloween_Crown_Playable.prefab`.

Use **Playable > Halloween Crown > Build Rigs and Scene** in Edit Mode to rebuild the rigs, cloth wipe setup and scene. This replaces the active scene's level and configures its game manager; save other scene work first. **Playable > Halloween Crown > Validate** checks missing scripts, broken object references, skin bindings, the retained foam renderer, cloth camera-follow bindings, hidden future layers, absence of water particles and manual CTA configuration.

The Luna SDK package uses the existing relative `../../7.2.0/scripts` dependency. A sibling `7.2.0` junction points to `D:/UNITY/LUNA/7.2.0` for this worktree. Do not run simultaneous SDK exports from both checkouts.

## Intended sequence

1. Dust off the heavily encrusted crown.
2. Use the unchanged shampoo sprayer with `04_Foam.png` on Scratch 2.
3. Use the unchanged mixing brush with `03_Spray.png` on Scratch 3. These two scratch artworks were swapped at the user's request. `03_Spray.png` depicts shampoo/foam, **not water**. The same Mix renderer stays visible through completion and the cloth wipe. Mix E remains hidden.
4. Drag the Halloween cloth across the crown to wipe away the foam. At 94% coverage, completion is armed but the cloth stays under the player's control. Only after mouse-up does the remaining foam fade, the cloth exit, the clean crown appear and the completion CTA fire. Releasing below the threshold lets the player continue wiping. This replaces the previous water shower; the scene and prefab contain no water step or water effects.

`Level3_Crown_Playable.cs` now hides future layers at startup and fades them in when their steps begin. Only Dust and Dirty start visible. `LevelData.RevealRestoreLayersAtStart` defaults to true for other levels; this crown overrides it so the base setup cannot reveal future foam layers after one second. Layers that start disabled are enabled at zero opacity when needed; outgoing layers fade to zero without being disabled.

The Halloween prefab enables `useContinuousFoamSurface`: mixing completion smoothly fills the few remaining mask gaps on Mix, instead of blending two misaligned transparent crown copies. Mix E stays at zero opacity. Other crown prefabs retain their normal handoff unless they enable this option. `HalloweenCrownGameManager` intercepts third-step completion to enter `HalloweenCrownWipe`; final completion delegates to `GameManagerPlayable`. The CTA remains manual/step complete with no tease. Script GUIDs were preserved when renaming the former rinse scripts; `FormerlySerializedAs` migrates their manager/tool/tip fields.

## Art and tools

The existing Halloween pack supplies crown layers, room, podium, duster, shampoo sprayer and brush. Denser dust/dirt and the corrected shampoo application were generated as raster edits matching the approved rendered artwork. `Tools/Cloth.png` was generated from the original crown cloth and Halloween sprayer references: same folded terry-cloth silhouette and rendered fabric shading, recolored plum/charcoal with gold piping and pumpkin/bat embroidery. Generated alpha is preserved. The retired water-shower artwork is unused. The approved spread-foam and clean PNGs are unchanged:

- Foam SHA256: `7849F117370B7CD3FB42FABF7FA0C3FA4288863785079FC31914B759B17E85F7`
- Clean SHA256: `C63987CD68DCC37048153C8E4E3ADC58581305DF9C0BA20C947B042CB45CD51F`

Duster retains its existing four-bone binding. Bottle has two bones, trigger variants one each, brush three, foam head one and cloth three. Trigger variants share bone names. Imported weighted meshes fit visible alpha bounds; runtime fitting compensates for inherited nonuniform scaling and limits each fitted renderer to three world units high. The cloth reuses the original crown's drag tool, strips old level callbacks/progress behaviours, and uses a contact tip at its center. Its existing `BD_CameraFollow` is enabled once the cloth enters and disabled before completion, like the earlier tools. Rebuilds initialize newly added follow components with the original cloth settings and preserve an existing component's settings. Tool bones are bound without adding idle wobble.

## Wipe implementation and regression checks

The wipe has its own erase scratch manager and mask, and intentionally takes over the existing Mix renderer after brushing has finished. This preserves the exact geometry, sprite, texture coordinates and opacity, avoiding the edge shift and opacity dip from cross-fading duplicate layers. The old separate wipe renderer is removed. The wipe manager starts inactive outside `LevelData.AllScratches`, so the base setup does not access its uninitialized card. On activation it assigns its erase material to Mix, waits two frames, then clears its mask to 0%; filling the erase mask would incorrectly mark it complete. `ScratchCard.ClearSmoothlyRoutine` releases its temporary texture, material and render target after completing or stopping the remaining-mask fade.

Erasure runs only while dragging the cloth, is limited to the crown bounds and uses the source scratch card's orthographic contact-tip position. Releasing the cloth leaves the mask intact; there is no timed auto-clean. Rebuilds remove both the retired water objects and existing cloth objects before constructing a single final wipe step.

Validation performed in the isolated Unity editor:

- Unity script compilation and prefab reference/rig validation.
- Original step-completion callbacks advanced through the first three steps; these were callback tests, not full pointer-driven playthroughs of those three steps.
- Rinse remained at 0%, foam visible, CTA false while idle.
- A 40 x 30 world-space tool-tip sweep exercised GPU mask erasure, reaching 97.25%; the clean reveal finished and CTA fired afterward.
- Portrait renders checked sprayer/brush proportions and the foam/rinse setup. Runtime console had no gameplay errors during the successful rinse test.

The checks listed above document the earlier water implementation. After replacing it with the cloth, Unity compilation and prefab reference/rig validation were repeated, confirming four tool icons, three cloth bones and zero water objects/particles. The final cloth wipe was tested separately through its completion gate and GPU scratch surface: idle progress 0 with CTA false; a tool-tip sweep reached 100%, then `Finished=True` and `CTA=True` after the clean reveal. This was a simulated drag test, not a full manual playthrough.

Release-to-complete regression check: releasing below the threshold kept the step active; at 100% with the drag held, the cloth stayed active/draggable and CTA stayed false; after releasing, `Finished=True` and `CTA=True`. This used simulated drag state and a filled GPU mask to isolate the completion gate. Progress is refreshed immediately on mouse-up, independently of the normal 0.12-second poll interval.

Continuous-foam/follow regression checks: the original `Step3Done` callback kept Mix alpha at 1 and Mix E at 0 through the handoff; the cloth enabled `BD_CameraFollow` on entry and disabled it on finish. A simulated tool-tip sweep on the retained Mix renderer reached 100% GPU erasure, stayed incomplete while dragging, and completed with CTA only after release. Runtime console reported no errors in the successful test. Startup checks confirmed zero opacity for Spray, Mix, Mix E, Clean and the wipe surface after the base setup delay.

No browser/Luna export has been certified. During repeated imports the SDK intermittently reported Windows IO 1224 locks on its worktree cache files; that editor/export issue is separate from the successful Unity gameplay test. Validate the exported creative in Luna before shipping.
