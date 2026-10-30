# Halloween crown playable

Branch: `MakeoverFashionASMRThemes_004_CrownHalloween_CTAComplete_30Oct2026`

This work is isolated in `C:/Users/Cigra Studio/.codex/worktrees/crown-halloween/PerfecrMakeoverASMR_Playables`. Branch 004 is based on branch 003's completed commit `653cc69a` (rebased from its original `818e105f` base). The original Halloween commit `882868e7` remains on `codex/backup-crown-halloween-882868e7`. Branch 003 and its checkout are unchanged by the rebase.

## Open and rebuild

Open this worktree with Unity 2022.3.62f2 and load `Assets/_Playable/Scenes/Gameplay_Playable.unity`. The configured level is `Assets/_Playable/Halloween2026/Prefabs/Halloween_Crown_Playable.prefab`.

Use **Playable > Halloween Crown > Build Rigs and Scene** in Edit Mode to rebuild the rigs, rinse setup and scene. This replaces the active scene's level and configures its game manager; save other scene work first. **Playable > Halloween Crown > Validate** checks missing scripts, broken object references, skin bindings, independent scratch surfaces and manual CTA configuration.

The Luna SDK package uses the existing relative `../../7.2.0/scripts` dependency. A sibling `7.2.0` junction points to `D:/UNITY/LUNA/7.2.0` for this worktree. Do not run simultaneous SDK exports from both checkouts.

## Intended sequence

1. Dust off the heavily encrusted crown.
2. Spray concentrated shampoo/foam onto the remaining dirt. `03_Spray.png` is a patchy shampoo application, **not a wet-water layer**.
3. Mix and spread the shampoo into the approved continuous foam layer, `04_Foam.png`.
4. Drag the water shower across the crown. Only the water impact removes the spread foam. At 94% coverage, the remaining foam fades, the shower exits, the clean crown is showcased and the completion CTA fires.

The original `Level3_Crown_Playable.cs` is unchanged. `HalloweenCrownGameManager` intercepts its third-step completion to enter the rinse; final completion delegates to `GameManagerPlayable`. The CTA is manual/step complete with no tease step.

## Art and tools

The existing Halloween pack supplies crown layers, room, podium, duster, shampoo sprayer and brush. Denser dust/dirt and the corrected shampoo application were generated as raster edits matching the approved rendered artwork. The water shower was generated to match the black/plum, gold and pumpkin tool theme. Generated alpha is preserved. The approved spread-foam and clean PNGs are unchanged:

- Foam SHA256: `7849F117370B7CD3FB42FABF7FA0C3FA4288863785079FC31914B759B17E85F7`
- Clean SHA256: `C63987CD68DCC37048153C8E4E3ADC58581305DF9C0BA20C947B042CB45CD51F`

Duster retains its existing four-bone binding. Bottle has two bones, trigger variants one each, brush three, foam head one and water shower two. Trigger variants share bone names. Imported weighted meshes fit visible alpha bounds; runtime fitting compensates for inherited nonuniform scaling and limits each fitted renderer to three world units high. Gameplay transforms remain authored. Tool bones are bound without adding idle wobble to the cleaning interactions.

## Rinse implementation and regression checks

The rinse uses an erase scratch surface with its own cloned sprite renderer and mask. The original dust renderer is external to its manager hierarchy, so cloning the manager alone would retain that reference. The setup explicitly clones and rebinds the surface. It also keeps the inactive rinse outside `LevelData.AllScratches`, because the base setup clears those masks before an inactive card has initialized. The rinse waits two frames on activation, then clears its erase mask to 0%; filling that mask would incorrectly mark it complete.

Water visuals run during dragging and stop on release. Erasure is limited to the crown bounds and uses the source scratch card's orthographic tool-tip position. Releasing the tool leaves the mask intact; there is no timed auto-clean.

Validation performed in the isolated Unity editor:

- Unity script compilation and prefab reference/rig validation.
- Original step-completion callbacks advanced through the first three steps; these were callback tests, not full pointer-driven playthroughs of those three steps.
- Rinse remained at 0%, foam visible, CTA false while idle.
- A 40 x 30 world-space tool-tip sweep exercised GPU mask erasure, reaching 97.25%; the clean reveal finished and CTA fired afterward.
- Portrait renders checked sprayer/brush proportions and the foam/rinse setup. Runtime console had no gameplay errors during the successful rinse test.

No browser/Luna export has been certified. During repeated imports the SDK intermittently reported Windows IO 1224 locks on its worktree cache files; that editor/export issue is separate from the successful Unity gameplay test. Validate the exported creative in Luna before shipping.
