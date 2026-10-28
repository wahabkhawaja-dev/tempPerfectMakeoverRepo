# Cross-project prefab importing

Implemented in `Assets/_Playable/Scripts/Editor`, adapted from the importer, script planner,
sanitizer, YAML patcher and editor UI in `D:/UNITY/LUNA/CleanAsmrPlayables`.
The reference project's `project_analysis.md`, `PLAYABLE_AND_CTA_REFERENCE.md` and
`Assets/_CORE/Scripts/Editor/PlayableCreatorTool.md` were reviewed with its creator/build code.

## Use

1. Open **Playable > Cross-Project Prefab Importer** (also available under
   **Tools > Luna Playables**).
2. The default parent is `D:/UNITY/PROJECTS/FashionMakeoverAnd`, when present. Choose the
   project root containing `Assets`, rather than its `Assets` directory.
3. Select levels, then **Scan Selected Levels**. All prefabs anywhere below a
   `BundledLevels` folder are listed, including `Event1/Event1_1` through `Event1_5`,
   `SP_1` through `SP_9`, and nested theme/event folders. Other prefabs with `Level` in
   their filename retain the reference importer's discovery behavior. Use **+ Other Prefab…**
   for arbitrary prefabs elsewhere.
4. Review the file list, adaptations and warnings. Existing assets remain local unless
   explicitly selected for replacement. An unrelated asset at a destination path cannot
   be overwritten with a different GUID: choose a different destination folder.
5. Import. Unity refreshes and compiles; automatic validation then reports success or
   rolls the import back. Wait for the `[Prefab Importer] Import validated` Console message.
6. **Make Playable** opens this project's Step Wizard. Default imported level prefabs are
   in `Assets/_ImportedFromParent/Levels`; dependencies are mirrored below
   `Assets/_ImportedFromParent`. A custom destination also works through **Make Playable**.

The parent project is read-only. Files and metadata are copied into this project or
references are mapped to an existing local asset. Imported prefabs have no runtime
dependency on the parent folder. Originals remain in the parent project.

## Dependency and reference handling

- Recursively follows external Unity object references in serialized assets **and their
  `.meta` importer settings**, including secondary sprite textures/default references.
- Follows quoted shader includes, including `include_with_pragmas`, and rewrites copied
  include paths to their local destinations. Unity/package built-in includes are retained.
- Copies asset `.meta` files so sprite sub-asset IDs and asset GUIDs survive. Source
  AssetBundle assignments are cleared to avoid exporting unrelated bundles with Luna.
- Does not treat sprite bone identifiers, audio mixer parameter IDs, or the `.meta` file's
  own identity GUID as external asset dependencies.
- Reuses matching local component scripts and remaps their GUIDs. Known `CG_` shared
  types in FashionMakeoverAnd map to local counterparts (for example `CG_BasicDrag` to
  `BasicDrag`); unique event/helper classes keep their names. Comments and strings are
  preserved; serialized UnityEvent type names are adapted separately.
- Resolves helper scripts used by code, including their serialized dependencies. Dependency
  discovery uses sanitized code so removed haptic calls do not pull in native SDKs.
- Adapts the parent's `SaveSystem.Instance.GetLevel(index)` to the playable's in-memory
  `DataFields.AllLevels[index]`. `LevelData.TryStartStep` preserves the parent's current
  always-true behavior without an energy gate.
- Preflight rejects missing dependencies, unsupported non-text serialized assets, duplicate
  source GUIDs, destination conflicts, path escapes, and source/destination changes made
  after review. Re-scan after changing the selection/settings/files.
- Missing references are **not automatically nulled by default**. Optional reference
  cleaning remains an explicit setting and changes appear in the report.
- Post-import validation checks compilation, asset GUIDs, missing prefab scripts and
  serialized object/sub-asset references. Failure restores the transaction.

The source project must have its required Unity packages installed here too. Code-driven
asset loading by dynamically constructed names is not a serialized reference; select those
prefabs as additional inputs and verify their runtime loader behavior. Import validation
does not replace playing each creative or checking a Luna export.

## Undo and recovery

**Undo Last Import** removes newly created assets/metas and restores overwritten bytes and
metadata. Partial copy failures roll back automatically. The journal survives script-domain
reloads; interrupted writes, compiler errors and failed reference validation also trigger
rollback. Backup prefabs are stored outside `Assets` so Luna cannot discover them.

Logs and backups are under `Library/PrefabImporter/<timestamp>_<label>_<unique-id>`:

- `report.txt`, `manifest.txt`, `transaction.json`: reviewed changes and recovery data.
- `validated.txt`: compilation and serialized-reference checks passed.
- `compilation_errors.txt` / `validation_errors.txt`: failure diagnostics when applicable.
- `rolled_back.txt` / `manifest.undone.txt`: the transaction has been restored.

Keep these logs until the import has been accepted; deleting `Library` discards undo history.

## Sprite downscaling removed

The Step Wizard / `PlayableLevelFactory` no longer creates `HalvedTextures`, downsamples
sprites/masks, or compensates their transforms. The former texture-resize/readback/cache
pipeline has been deleted. The inner and outer build no longer need a texture-reimport delay.
Existing generated prefabs and textures are retained to preserve their references; rebuild
from the original full-resolution level to replace an older downscaled creative. Luna's
independent export settings in `luna.json` are unchanged.

## Verification (2026-10-28)

**Playable > Validate Prefab Importer** runs disposable fixture tests without editing scenes
or production prefabs. The 31 checks exercise nested prefab imports, script remapping,
secondary textures in `.meta`, CG/save adaptation, event discovery, preserved sprite size
and transforms through the actual creator trim, conflict/missing-dependency/stale-plan
rejection, partial-write rollback, exact overwritten-file restoration, undo cleanup, and
byte-for-byte source preservation. Shader include relocation is also compiled and checked. Fixture assets are removed afterward; reports remain
under `Library/PrefabImporterTests`.

Unity 2022.3.62f2 compiled the project with no C# errors. The five actual Event1 levels were
also scanned together; their 26 adapted scripts were compiled separately using Unity's
Roslyn compiler and this project's assembly references, with zero errors (source warnings
about hidden methods, duplicate using directives and serialized fields remain).
Discovery found 39 prefabs total, including all 14 bundled prefabs.

One **existing source defect** remains: `FashionMakeoverAnd/Assets/BundledLevels/Event1/Event1_5.prefab`
has a `Bubbles` SpriteRenderer referencing missing sprite GUID
`50f18c8a6991e884db4a9507026c508e` (`m_Sprite`, fileID `21300000`). The asset is absent from
both projects' GUID indexes. Strict importing rejects that level until its source sprite
is restored or an explicit reference-cleaning choice is made. The importer does not guess
replacement artwork. The source project was not modified.

### Event1_3 reload/rollback fix

The first real import exposed historical native PrefabInstance records returned by
`LoadAllAssetsAtPath`. Event1_3 already contains 12 obsolete override targets and two
removed-GameObject records in the parent project. These authoring-history entries are
not effective gameplay references. Validation now distinguishes those exact native
history paths from live component references and the source-prefab binding; the latter
remain validated. Event1_3 was imported into this project and passed compilation and
reference validation after a domain reload, with zero missing scripts.

The latest import result is persisted in `Library/PrefabImporter/last_result.json` and
reappears in the window after reload, including failure details and the log-folder link.
A throttled editor update hook completes pending validation if a reload consumes the
original delayed callback. Running regression tests preserves the real import's result.

### Event1_3 runtime haptics fix

The first gameplay tap exposed a dependency that compilation/serialized-reference checks
cannot detect: `OpenCasket` called the source scene's `CG_VibrationManager.instance`, but
that singleton is not present in this project's Gameplay scene. The haptics stripping rule
originally matched only the unprefixed `VibrationManager` name. It now also matches `CG_`
and removes complete void haptic lambda bodies (including delayed DOTween callbacks),
while preserving the scheduling call and gameplay/audio logic. The existing imported
casket script was repaired in place, with its previous bytes backed up under
`Library/PrefabImporterRepairs`. Future imports apply the corrected sanitizer.

The regression suite now includes direct/prefixed calls, delayed callbacks with nested
arguments, preservation of non-haptic calls, and idempotent repair. The real level was also
exercised in Play Mode through `Step1Done` and `ActionOnTap.Tap` with the vibration singleton
absent; the lid opened without the reported exception. The closing method and its delayed
callbacks were exercised separately. This validates those paths, not every remaining level
interaction; compilation/reference validation alone is not a full gameplay test.
