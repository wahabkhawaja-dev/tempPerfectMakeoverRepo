# Step-complete playable builder

## Current workflow

Open **Playable > Step Wizard**, choose a local level prefab, select its playable steps,
and build. A selection of **2, 3, 4, 5, 6** builds those interactive steps and ends through
`LevelComplete` when step 6 finishes. The source level's completion animation/camera return
may run before that call. No step 7 is added as a tease.

The creator no longer offers On Step Start, tool-tap/OnToolAppear, or Fix-It-button CTA
options. A kept Fix-It button can enter an inner level, or the button can be excluded.
An inner level may return to the outer level or end on its final selected step.
Generated `PlayableCTA` components are reset to `Manual`: the gameplay completion path
fires them explicitly through the game manager. The standalone component's unrelated
optional triggers remain available for manually authored uses outside the creator.
The removed serialized tool-tease trigger value 5 migrates to Manual on activation.

Earlier steps can retain noninteractive setup/ForceComplete code and shared visual assets
needed to establish the selected range's starting state. Later playable step methods and
their unused tools are removed. Shared dependencies are retained when surviving code
still needs them; this is not an extra interactive step.

## Why the Casket 2–6 build failed

The old wizard silently extended the selection to step 7 as a tease. The script pruner
then removed steps 8–9, but its transition regex could not match this step-7 call:

```csharp
Invoke(nameof(StartStep8), AfterShowcase(1.2f));
```

It used a delay expression ending at the first `)`, rather than balancing nested
parentheses. `StartStep8` was therefore left referenced after its declaration had been
removed, producing CS0103. Removing tease alone would not have fixed the parser: step 6
has the same nested-delay pattern, inside the closing-animation callback.

The updated builder:

1. Matches `Invoke` syntax on comment/string-masked code and finds its balanced argument
   list. It preserves nested delay expressions, commas, callbacks and statement delimiters.
2. Rewrites transitions before pruning. Targets beyond the last kept step become
   `LevelComplete`; transitions across skipped steps retain the existing skip/setup behavior.
3. Removes standalone calls to helpers declared only in excluded step regions. This
   handles the Casket step-8 sanding coroutine's decorative `DropGargoyle_9` call when step
   9 is excluded, without retaining step 9 or its tool.
4. Retains field declarations referenced by surviving shared code. For example, the
   Casket opening helper needs `SpiderHolder_2` even in a step-1-only build. Such a field
   is excluded from the list of unused field-owned objects to remove.
5. Rejects remaining references to removed step methods/helpers before writing the
   generated script. Unsupported cross-step expressions produce a build error instead
   of leaving a new uncompilable C# file in `Assets`.

The affected output was rebuilt from
`Assets/_ImportedFromParent/Levels/Event1_3.prefab`, using variant `PlayableStep2to6`:

- `Assets/_Playable/Scripts/CG_Level4_Casket_Playable_PlayableStep2to6.cs`
- `Assets/_Playable/Levels/Event1_3_Playable_PlayableStep2to6.prefab`

The output paths and `.meta` files were retained, preserving the playable scene's asset
references. Other previously generated creatives should be rebuilt from their original
level if they used the old tease behavior.

## Validation and reproducing it

**Playable > Validate Step-Complete Builder** runs parser checks and generates all 45
contiguous ranges of the nine-step Casket level in `Library/PlayableBuilderValidation`.
It checks nested delays, string-based invokes, callback delimiters, comment/string
preservation, early rejection of missing steps, and absence of extra/tease methods.
The menu requires the imported Event1_3 source prefab to be present. It writes no game
assets and does not change the active scene.

`results.txt` records 52 checks. `compile_sources.txt` lists the generated sources for a
compiler check. During this repair, all 45 were compiled together using Unity's Roslyn
compiler and this project's assembly references, with zero compilation errors. This
matrix caught the shared-field and cross-step-helper issues described above.

The separate **Playable > Validate Prefab Importer** suite also passes its 34 checks.
These generation/compilation checks complement runtime testing; they do not prove every
drag, scratch, animation event or step in every creative behaves correctly.

For runtime verification, the rebuilt 2–6 prefab was used in `Gameplay_Playable`. The test
advanced the visual state to step 6, invoked its completion handler, and observed the
completion/CTA chain with no step-7 method present. No source prefab or saved scene setup
needed to be changed for that test.

## Build safety and the wider catalog audit

The builder now compiles each generated script with Unity's bundled Roslyn compiler
**before** writing it into Assets. Compiler diagnostics are retained in
`Library/PlayableBuildPreflight/<id>/diagnostics.txt`. A rejected script leaves existing
output untouched. Failures during prefab creation restore the previous script, prefab
and both meta files. This rollback covers exceptions in the build operation; it is not
a recovery journal for an editor/process crash.

Prefab trimming runs while the copy still uses its compiled source component. After
trimming, its script GUID is rebound to the generated script. This avoids losing
serialized data when a newly named class has not compiled yet. Source variants are
unpacked in the copied output, leaving the original variant unchanged. Objects referenced
by retained fields are protected during step/layer pruning. Scene placement is queued
across domain reload and waits for the generated outer and inner components to load.
The scene swap validates both prefabs before removing its previous level.

Step discovery uses declared numbered `StartStepN` methods. Comments cannot introduce
fake selectable steps. Generation removes source comments while preserving string
literals, line breaks and offsets, so commented blocks cannot be cut open by field or
step rewriting. Fixed-state predicates are resolved before their owning region is
pruned. Shared view declarations survive if retained code still uses them.

During the wider audit, **583 contiguous ranges** from local gameplay scripts were
generated and compiled together with zero errors. This exposed and fixed commented-code
corruption, missing shower fixed-state variables, and shared lipstick view references.
The report and compiler response file are under `Library/PlayableBuilderAudit`.
The subsequent prefab-catalog run compiled **563 ranges and modes**, including
alternating-step selections and inner-level modes, with zero errors. That run additionally
found a Manicure sound helper stored in a skipped step region; shared non-step helpers
are now retained when surviving code references them. A successful run is recorded in
`Library/PlayableCatalogValidation/20261029_123017/passed.txt`.

Use **Playable > Validate All Source Step Ranges** to regenerate a matrix from the
current prefab catalog. It checks every contiguous range, an alternating-step selection,
and full-range inner-level modes when detected. It advances once per editor update to
keep Unity responsive, then compiles the generated sources together. Reports, a source
manifest, compiler diagnostics, and `passed.txt` are written to
`Library/PlayableCatalogValidation/<timestamp>/`. Editing scripts or entering Play Mode
interrupts this validation; rerun it after compilation finishes. It changes no gameplay
assets or scenes.

The AllIn1 shader initializer also preserves the installed shader when an optional
render-pipeline template is absent, reporting the missing template as a warning instead
of throwing a file exception after each reload.

One separate SDK issue was observed: Luna's obfuscated asset postprocessor can raise
Windows IO error 1224 while writing `LunaTemp/luna-cache.json`. This is a cache file lock
inside the SDK, rather than a generated C# error. The builder does not delete that cache
or modify the SDK binary. This audit does not certify a complete Luna export or every
interaction in every generated range; source-specific runtime behavior still needs
creative-level play testing.
