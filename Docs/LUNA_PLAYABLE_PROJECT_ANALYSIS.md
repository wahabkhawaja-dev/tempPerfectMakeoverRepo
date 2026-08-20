# Perfect Makeover ASMR — Luna Playable Project Analysis

Living reference doc for automating playable-ad generation from this project. Written 2026-08-20. No official docs existed in-repo before this file — everything here was reverse-engineered from the codebase plus Unity Playworks (Luna) official documentation.

---

## 1. What this project is

A Unity mobile game ("Perfect Makeover ASMR") that ships two parallel builds from one codebase:

- **`Assets/_Core`** — the full game (levels, save system, IAP, ads, analytics).
- **`Assets/_Playable`** — auto-generated, cut-down "playable ad" versions of individual levels, built for the **Unity Playworks (Luna) SDK**, which cross-compiles a subset of C#/Unity into a single self-contained HTML5 file via **Bridge.NET** (C#→JS transpiler), not standard Unity WebGL/Emscripten.

Luna SDK lives outside the repo at `C:/UNITY/LUNA/7.2.0` (referenced by absolute path — see §5.1, this is a red flag). Project is on Luna Playworks **v7.2.0**.

Git repo is otherwise fresh: 2 commits total, most of `_Playable` is currently untracked/uncommitted.

---

## 2. Folder map

```
Assets/
  _Core/                      Full game — do not modify for playable work
    Scripts/Gameplay/Levels/  Level1 (Hair), Level2 (Face/Cloth), Level3 (Crown/Dress/Face) — the "STEPn" gameplay scripts
    Scripts/Data Saving/      SaveSystem.cs (JSON to persistentDataPath)
    Scripts/Generic/          RemoteManager, Statics (analytics), LoadingManager
    Scripts/Ui/                UI_Manager.cs (1047 lines, DOTween-heavy HUD)
    Third Party/Demigiant/    DOTween, DOTweenPro, DemiLib — compiled DLLs (see §5.2)
    Scenes/Gameplay.unity      ~1.1 MB
  _Playable/                  Playable-ad output — THIS is what ships to ad networks
    Scripts/                  GameManagerPlayable, PlayableHudRuntime/Layout, PlayableInstall, LevelN_*_Playable.cs
    Scripts/Editor/           PlayableLevelFactory.cs, PlayableStepWizard.cs, PlayableEditorMenu.cs — the automation system (§3)
    Levels/                   Auto-generated *_Playable.prefab files
    Scenes/Gameplay_Playable.unity
Packages/
  manifest.json                com.unity.playworks.upp → local Luna SDK path
luna.json                      Luna Playworks build config (asset rules, compiler flags)
LunaTemp/                      Luna's own build cache (luna.log, luna-cache.json, PROJECTID)
Assets/SVC_Luna.asset          Luna's shader-variant collection scriptable object (see §5.4)
```

---

## 3. The playable-generation automation (already built — this is what you're extending)

Someone already built a real pipeline for turning a full level into a playable. Understand this before adding more automation on top of it.

### 3.1 `PlayableLevelFactory.cs` (`Assets/_Playable/Scripts/Editor/PlayableLevelFactory.cs`)

Static editor-only class, the actual engine. Given a source level prefab (from `Assets/Resources/Lvl_GP/`) and a set of "steps to keep":

1. **`Scan(prefabPath)`** — finds the `LevelData` component, its script, and reflection-free regex-scans the script text for `StartStepN(...)` calls and `#region ... STEP n` blocks to discover how many steps the level has. Also detects "inner levels" (Fix-It sub-puzzles / scene hops) via `FixInnerLevel` and `partToPlay=` + `LoadScene` markers.
2. **`Build(sourcePrefabPath, keepSteps, placeInScene)`** — the actual generation:
   - Copies the source script to `Assets/_Playable/Scripts/<Class>_Playable.cs`, renaming the class.
   - Rewrites `Start()` to skip save-resume logic and jump straight into the first kept step (`RewriteStart`).
   - Rewrites all `StartStepN()` call sites so that skipped steps are bridged via `ForceCompleteStepN()` chains, and calls past the last kept step become `LevelComplete()` (`FixStepChaining`, `RewriteNextCall`).
   - Strips the C# regions for unused steps entirely (`StripUnusedStepScript`).
   - Removes/flattens "Fix-It" inner-level branches so the playable never enters a sub-puzzle (`ExcludeInnerLevels`, `FlattenFixedGates`, `RewriteInnerHopMethods`).
   - Strips `SaveSystem` persistence calls (`StripSaveSystem`) — **playables never save progress**.
   - Copies the prefab, rebinds its `m_Script` GUID to the new playable script via raw YAML regex replace, then loads it with `PrefabUtility.LoadPrefabContents` and deletes GameObjects for unused tools/steps/layers/scratch-cards/inner-level objects (`TrimPrefab` and its `DestroyXxx` helpers).
   - Writes the result to `Assets/_Playable/Levels/<Name>_Playable.prefab`.
3. Everything is regex/string-rewriting over C# source, **not** an AST — brittle by nature (see §6 risks below), but it works today for `Level1_Hair`, `Level2_Face_New`, `Level2_Cloth`, `Level3_Crown`.

### 3.2 `PlayableStepWizard.cs` — `Playable/Step Wizard` editor window

GUI over the factory: pick a source level prefab, tick which steps to keep, click **Build Playable**. Persists last-used source/steps via `EditorPrefs`. This is the human-facing entry point today — **the natural target to script/CLI-ify for automation** (batch-mode Unity + a static method calling `PlayableLevelFactory.Build(...)` directly, bypassing the GUI).

### 3.3 `PlayableEditorMenu.cs`

`Playable/` menu: open the playable scene, and `SwapSceneLevel(prefabPath)` to hot-swap the placed `LevelData` prefab in `Gameplay_Playable.unity`. Editor-only, excluded from Luna builds automatically (`**/Editor/` in `luna.json`).

### 3.4 The CTA / install hook

`PlayableInstall.Go()` (`Assets/_Playable/Scripts/PlayableInstall.cs`) is the literal call-to-action:

```csharp
Luna.Unity.Playable.InstallFullGame();
Luna.Unity.LifeCycle.GameEnded();
```

wrapped in try/catch so it no-ops safely in the editor. Comment explicitly notes: **"Literal Luna calls are required for Playworks health check."** Luna's build pipeline (Bridge.NET's `forceIncludedClasses` list in `config.json`, plus a build-time health-check scan) looks for these literal call sites — do not refactor them behind an interface, event, or reflection call, or the health check will likely stop seeing them and flag the build.

`GameManagerPlayable : GameManager` overrides `Complete()` to skip the full-game "complete" UI and call `PlayableInstall.Go()` instead. `PlayableHudRuntime.cs` wires every `Button` in the HUD to the same CTA.

### 3.5 Automation target for future work

If the goal is "generate N playables automatically" (e.g. from a batch config, or CI), the shortest path is:

- A batch-mode static method (`-batchmode -executeMethod`) that calls `PlayableLevelFactory.Build(prefabPath, steps, placeInScene)` directly for each (level, step-range) pair, skipping `PlayableStepWizard`'s GUI.
- Reuse `PlayableLevelFactory.ListSourcePrefabs()` / `.Scan()` to auto-discover step counts instead of hardcoding them.
- After generation, the actual Luna **build/export** step still has to run through Playworks' own Unity Editor window/CLI (`jake` script exists at `C:/UNITY/LUNA/7.2.0/jake` — worth investigating as a possible CLI build entry point for full pipeline automation, not explored in this pass).

---

## 4. Luna Playworks config in this project

### 4.1 `luna.json` (project root) — build/export settings actually in effect

Key values as of this analysis:

| Setting | Value | Meaning |
|---|---|---|
| `unity.enableRealtimeShadows` | `false` | no realtime shadows in playable output |
| `unity.enableStaticBatching` / `enableDynamicBatching` | `false` / `false` | batching disabled |
| `unity.minify` | `true` | JS output minified |
| `unity.graphicsConstraint` | `24` | Luna-internal bitmask constraining graphics features for playable-sized output |
| `unity.disableAntiAliasing` | `true` | AA off |
| `unity.disableRuntimeAnalysisForCode` | `true` | code dead-stripping relies on `config.json`'s `forceIncludedClasses` list, not auto-detection |
| `assets.rules.texture.default` | 512×512 max, PNG32, quantSize compression, quality 65 | **every texture in the project gets downscaled to ≤512×512 on export**, regardless of source size |
| `assets.rules.sound.default` | mono, 128kbps | applies project-wide unless overridden |
| `assets.includes` | `Assets/Resources/DOTweenSettings.asset` | explicitly whitelisted (would otherwise be excluded as a Resources asset) |
| `logLevel_Cs` | `"error"` | C# build logging is quiet — **turn this to `"trace"` or `"info"` when debugging a failed build**, it's currently set to only show errors |

### 4.2 Luna SDK `config.json` (`C:/UNITY/LUNA/7.2.0/config.json`) — pipeline-level, not project-level

This is Luna's own engine config (not meant to be hand-edited per project, but worth knowing):

- `unity.scripts.excludes`: `**/Editor/`, `**/Luna/RuntimeScripts/` — these folders never get Bridge.NET-compiled.
- `unity.assets.excludes`: long list of ad-mediation/analytics/IAP SDK folders (Facebook, AdMob, InMobi, AudienceNetwork, Yandex, Fyber, FairBid, AppsFlyer, IronSource, Vungle, NiceVibrations, GameAnalytics, UnityAds, UnityPurchasing, Sirenix/Odin, Obi, UniWebView) plus matching `Stubs/*` — this project correctly leans on this exclusion list (see §6, `Statics.cs`/`RemoteManager.cs` are already stubbed to match).
- `unity.forceIncludedClasses`: ~181 `Luna.Unity.*` / `LunaUnity.*` classes force-kept regardless of static analysis (this is what makes `PlayableInstall.Go()`'s literal calls matter, per §3.4).
- `unity.usingWebWorkers`: `"off"` — single-threaded execution model confirmed; `System.Threading` will not work as expected here.
- `preloader.active`: `true`.

### 4.3 Package reference

`Packages/manifest.json`:
```json
"com.unity.playworks.upp": "file:C:/UNITY/LUNA/7.2.0/scripts"
```
See §5.1 — this was recently changed from a **relative** path and is a portability risk.

---

## 5. Concrete red flags found in THIS repo

These are specific, verified issues in this project's current state — not generic Luna trivia. Ordered by how likely they are to actually break a build or a teammate's machine.

### 5.1 🔴 Absolute, machine-specific Luna SDK path (highest-impact, easiest to hit)

`Packages/manifest.json` and `packages-lock.json` were just changed (uncommitted, per `git diff`) from:
```
"com.unity.playworks.upp": "file:../../../../../LunaSDk/7.2.0/scripts"
```
to:
```
"com.unity.playworks.upp": "file:C:/UNITY/LUNA/7.2.0/scripts"
```
This makes the whole project **only resolve packages on this exact machine**, at this exact drive letter and folder name. Any teammate, CI runner, or automation box that clones this repo will fail at Unity's package resolution step, before Luna even runs — this is very likely the actual cause of "some machines build, others don't" if that's been happening. **If build automation is the goal, this must go back to a relative path** (or be templated per-machine via an environment variable / local `manifest-overrides`), otherwise every automated runner needs the Luna SDK installed at the identical absolute path.

### 5.2 🟡 Compiled DLLs in the runtime asset path (DOTweenPro.dll, DemiLib.dll)

Luna's own limitations doc states plainly: **"DLLs are completely unsupported; C++ plugins cannot be used… Replace with C# source code equivalents."**

This project has:
- `Assets/_Core/Third Party/Demigiant/DOTween/DOTween.dll` — **but** Luna's pipeline templates (`C:/UNITY/LUNA/7.2.0/pipeline/templates/LunaCompiler/packages/com.dg.tweening/1.2.705`) ship their own Bridge.NET-compatible DOTween port, and Luna has a dedicated error code (**LP1027 — DOTween Version**) specifically to check version compatibility between the project's DOTween and the one Luna substitutes. **This is a known, supported integration** — but only if the DOTween version matches what Luna 7.2.0 expects. Worth explicitly confirming the DOTween version in this project against Luna's `com.dg.tweening` 1.2.705 template.
- `Assets/_Core/Third Party/Demigiant/DOTweenPro/DOTweenPro.dll` and `Assets/_Core/Third Party/Demigiant/DemiLib/Core/DemiLib.dll` — these are **not** in Luna's bundled template package list. If any runtime (non-editor) script actually calls into DOTweenPro-specific APIs (shortcuts, `DOTweenTextMeshPro`, `DOTweenTk2d`) or DemiLib, Bridge.NET has no way to transpile the DLL's IL and the build should fail with an LP2005/LP2007-class "Engine Build" or "Bridge crash" error, or silently no-op the calls. The Editor-only DLLs (`DOTweenEditor.dll`, `DemiEditor.dll`) are safe — they live under `Editor/` folders and are excluded automatically.
- **Action**: grep runtime (non-Editor) scripts for `DOTweenPro`/`Shortcuts`/`DemiLib` usage; if found and a build fails with an engine-build/type-load error, this DLL is the first suspect.

### 5.3 🟡 `SaveSystem.cs` uses `System.IO.File` + `Application.persistentDataPath`, all failures silently swallowed

Every file read/write in `SaveSystem.cs` is wrapped in an empty `try/catch`. If Bridge.NET's runtime doesn't support `System.IO.File.ReadAllText`/`WriteAllText` (a very plausible unsupported-API case per Luna's limitations list), the build will **compile and run fine**, but save/load will silently no-op — invisible until someone notices progress never persists. Since playables strip `SaveSystem` calls entirely anyway (`PlayableLevelFactory.StripSaveSystem`), this is **not a playable-build risk**, but it is a risk if any core-game-derived code path outside the known-stripped list still reaches `SaveSystem` in a Luna-targeted build. Verify empirically rather than assuming.

### 5.4 🟡 `Assets/SVC_Luna.asset` was just reset from ~14,000 lines to ~24 lines

`git diff --stat` shows this file dropped from 14,097 lines to essentially empty (`_shaderVariants: []`, `_includedShaderVariants: []`, `_modifiedShaders: []`, `invalidShaders: 0`). This is Luna's own shader-variant-collection cache asset, tied to error codes **LP1004 (Missing Shader Variant)**, **LP1005 (Invalid Shader Variant)**, and **LP1031 (Shader Runtime Analysis)**. Clearing it isn't necessarily wrong (Luna may be designed to regenerate it on next scan/build), but if this gets committed as-is and the next build doesn't regenerate it correctly, expect shader-variant-related build warnings/errors on the next full Luna export. Worth doing one full Luna build post-reset to confirm it repopulates correctly before relying on automation that assumes this file is stable.

### 5.5 🟢 `LunaTemp/luna-cache.json` shows a prior state with an *empty* MSBuild path

The cached config in `LunaTemp/luna-cache.json` has `"msbuildWin64":""`, while the current `luna.json` has it correctly set to `C:\Program Files\Microsoft Visual Studio\18\Community\MSBuild\Current\Bin\MSBuild.exe` (verified this path exists on this machine). This matches Luna's **LP3000 (MSBuild path)** error exactly — an empty/wrong MSBuild path is a documented, common failure. Currently fine on this machine, but confirms this specific error has likely been hit before on this project, and will hit again on any machine where VS "18" (a preview/Insiders channel — not the standard "2022" folder name) isn't installed at that path. **This is the same class of problem as §5.1** — a machine-specific absolute path baked into project config, dangerous for automation/CI.

### 5.6 🟢 Textures globally capped at 512×512 in `luna.json`

Not a build-*failure* risk, but relevant to "why does the playable look worse than the full game" — every texture, regardless of source resolution, gets downscaled to 512×512 PNG32 at 65% quality on Luna export. If any UI/character art genuinely needs higher fidelity, it needs a per-asset override entry in `luna.json`'s `assets.rules.texture.overrides` (one example override already exists for `Default-Particle`).

### 5.7 🟢 `GameCompressor.cs`'s audio compression tool is Android-only

`Assets/_Core/Scripts/Editor/GameCompressor.cs`'s live `AudioCompressionFunc()` only overrides `AudioImporter` platform settings for `"Android"`. It has no WebGL/Luna-specific override. Not a failure risk by itself (Luna's own `luna.json` sound rules apply regardless), but means this particular editor tool provides no help for playable audio sizing — don't assume running it does anything for the playable output.

---

## 6. General Luna / Playworks build-failure causes (from official docs research)

Source: [Unity Playworks Developer Docs](https://docs.lunalabs.io/) (limitations, common issues, error codes). This is the authoritative external reference — bookmark it.

### 6.1 Hard technology limitations (will not work, no workaround except replacement)

- **DLLs / compiled C++ plugins** — completely unsupported (see §5.2 above for this project's specific exposure).
- **Third-party ad/analytics SDKs** — must be stubbed or wrapped in `#if !UNITY_LUNA`. This project already does this correctly via `luna.json`'s asset excludes.
- **NavMesh** — unsupported (computationally expensive for WebGL/Bridge.NET target). Not used in this project (grep hits were inert `NavMeshSettings` boilerplate only, per background scan).
- **HDRP** — unsupported entirely. This project uses the built-in/URP-adjacent pipeline (not HDRP), so not applicable.
- **Legacy Unity GUI (`OnGUI`)** — unsupported; project uses `UnityEngine.UI` (uGUI), which is fine.
- **DOTS/ECS** — unsupported. Not used here.

### 6.2 Rendering restrictions

- WebGL shader features **Uniform Locations** and **Uniform Buffers** are not supported.
- Precompiled shader variants can throw `Cannot read property 'val' of null` at runtime — relates to LP1004/LP1005 (missing/invalid shader variant), tie back to §5.4 (`SVC_Luna.asset`).
- Multiple high-intensity lights over-light scenes due to summation under WebGL 1.0's lighting model — keep light counts low, this project already has `enableRealtimeShadows: false` which reduces exposure.

### 6.3 C# language limitations (Bridge.NET supports up to C# 7.0 only)

- No destructors (`~ClassName`) — use `OnDestroy()`.
- No `goto` inside `switch` cases.
- No circular interface inheritance.
- No inline casting without a prior variable declaration.
- `protected internal` and generic interface constraints (`where T : class`) are reportedly unrecognized per community reports (not confirmed in official docs, treat as anecdotal but worth avoiding).
- `unity.genericCheck: true` in this project's `luna.json` means risky generic usage should at least fail loudly at build time rather than silently miscompiling — don't disable this flag.

### 6.4 Automatic API Stubbing ("Stubber")

Luna has a feature that automatically strips/stubs SDK calls it doesn't understand rather than failing outright, reducing the amount of manual `#if !UNITY_LUNA` wrapping needed. This project's `luna.json` has an (currently disabled) `stubberData`/`stubberDataList` section — if a specific SDK needs stubbing that isn't already covered by the standard exclude list, this is the mechanism to use rather than hand-editing source.

### 6.5 The error-code catalog (LP1000–LP3016)

Luna's docs expose ~48 named error codes across three ranges. The ones most relevant to this project's actual asset/code makeup:

| Code | Meaning | Relevance here |
|---|---|---|
| LP1000 | Huge Mesh (>1MB) — bloats output, mesh colliders are expensive | Check `_Core/Prefabs` mesh sizes if any 3D-ish assets exist |
| LP1004/1005 | Missing / Invalid Shader Variant | Directly tied to §5.4, `SVC_Luna.asset` |
| LP1024 | Huge RAM Usage | Watch after adding new playable levels |
| LP1027 | DOTween Version mismatch | Directly tied to §5.2 — verify DOTween version against Luna 7.2.0's bundled `com.dg.tweening` 1.2.705 |
| LP1032 | Package(s) Not Supported | Check `Packages/manifest.json` — device-simulator, ide.visualstudio, and the `com.coplaydev.unity-mcp` dev-tooling package are non-Luna packages; confirm none of them get pulled into a Luna scan (they shouldn't, since Luna only scans `Assets/`, but worth a first build sanity check after adding new packages) |
| LP1034 | 65k Mesh Vertices Limit | Same as LP1000 — check any high-poly art |
| LP2004 | Custom Scripts (Bridge.NET compile error in project code) | The generic "your C# didn't transpile" bucket — first place to look after any `PlayableLevelFactory`-generated script |
| LP2005 | Engine Build (Bridge.NET) | Second most likely home for a DLL-related failure (§5.2) |
| LP3000 | MSBuild path wrong/empty | Already seen once in this project's history (§5.5) |
| LP3009 | API not supported | Generic "you called something Bridge.NET doesn't implement" — e.g. potential `System.IO.File` risk (§5.3) |

Full catalog: https://docs.lunalabs.io/docs/playable/code/error-codes/overview/

### 6.6 Common non-code gotchas (from the Common Issues section)

- **Wrong zip uploaded to ad network**: the file Luna exports is `PlayableName-Version-YYYY-MM-DD.zip`; that's a *wrapper* — you must unzip it and use the **inner** `PlayableVariantName-AdNetworkName.zip` per network. Automating export should account for this unwrap step, not just grab the outer zip.
- **`&` (ampersand) in scene/asset names** gets HTML-encoded to `&amp;` during export, breaking scene loading (black screen + 404). None of this project's scene/asset names currently use `&`, but worth adding as a naming-convention rule for any automation that generates scene/prefab names dynamically.
- **Audio autoplay**: browsers block autoplay without a user gesture; this is a platform limitation, not a Luna bug. This project's audio is already entirely event-driven (confirmed by background scan of `AudioController`/`MusicSource` — no autoplay-on-`Start()` calls found), which is correct.
- **Compilation error triage**: Luna's own "Project Diagnostics" panel is the first stop for any build failure — check it before assuming a specific root cause.

---

## 7. Recommended action items (priority order)

1. **Revert `Packages/manifest.json` / `packages-lock.json` to a relative Luna SDK path**, or otherwise parameterize it (env var / per-user override file that's gitignored), before relying on this repo for any multi-machine or CI automation. (§5.1)
2. **Verify DOTween version compatibility** against Luna 7.2.0's bundled `com.dg.tweening` 1.2.705 — check for an LP1027 warning on next full Luna build. (§5.2)
3. **Grep runtime (non-`Editor/`) scripts for `DOTweenPro`/DemiLib usage** — if any exist, either confirm Luna transpiles them successfully or replace with plain DOTween equivalents. (§5.2)
4. **Do one full clean Luna build and check `LunaTemp/luna.log`** (currently empty — meaning no build has run yet, or the log was cleared) with `logLevel_Cs` bumped to `"trace"` temporarily, to get a real baseline of current build health before automating anything further.
5. **Confirm `SVC_Luna.asset` regenerates correctly** after its reset, before treating it as stable input to any automated pipeline. (§5.4)
6. When scripting `PlayableLevelFactory.Build(...)` calls for batch automation, **wrap each call so factory failures produce a clear per-level report** rather than aborting a whole batch run — the existing `BuildResult.Error`/`.Log` fields already support this, just needs a batch-mode caller.
7. Investigate `C:/UNITY/LUNA/7.2.0/jake` as a possible CLI/task-runner entry point for the actual Luna export step, to complete the automation loop beyond just prefab/script generation.

---

## 8. Open questions / not yet verified

- Whether `Level1_Hair_Playable.cs`, `Level2_Face_New_Playable.cs`, `Level2_Cloth_Playable.cs`, `Level3_Crown_Playable.cs` were produced by `PlayableLevelFactory.Build()` or hand-written to match its output shape — structurally identical either way, but worth confirming before trusting the factory to regenerate them byte-for-byte.
- Actual current pass/fail state of a full Luna export for this project — `LunaTemp/luna.log` is empty, meaning no verified build log exists yet in this environment. Everything in §5 is static-analysis risk, not a confirmed build failure.
- Exact meaning of `graphicsConstraint: 24` (bitmask) — Luna-internal, not documented publicly in what was fetched.
- Whether `ProjectSettings/GraphicsSettings.asset` (always-included shaders, graphics tiers) has been tuned for WebGL/Luna specifically — not reviewed in this pass.
