# Halloween crown playable art pack

Prepared 30 October 2026 for Perfect Makeover ASMR. The selected direction is the crown; the basin concept is parked as a study.

## Use the finished copy

Drag `Assets/_Playable/Halloween2026/Prefabs/Halloween_Crown_Playable.prefab` into the playable scene in place of the existing crown level. It is an independent art-only copy of `Assets/_Playable/Levels/Level3_1_Playable.prefab`, using the same gameplay script and current step 1–3 flow. The original prefab and source artwork were not overwritten. Existing scene level/GameManager wiring still needs the normal playable scene swap workflow.

The five crown images are included for matching dust, dirty, sprayed, foamy and clean states. **The clean-state preview is an art preview, not proof that the existing three-step script plays a rinse step.** This copy preserves that existing script: it does not add step 4 or change completion/CTA timing.

The PNGs live in `Assets/_Playable/Halloween2026/Sprites/Crown/`:

| Asset | Purpose |
|---|---|
| `01_Dust.png` | Initial encrusted crown |
| `02_Dirty.png` | Tarnished crown after dusting |
| `03_Spray.png` | Wet droplet layer |
| `04_Foam.png` | Scrubbed/lathered layer, also used by Mix E |
| `05_Clean.png` | Restored silver/gold crown with amber stones |
| `Environment/Room.png` | Gothic room with moonlight, pumpkins, lanterns and cobwebs |
| `Environment/Podium.png` | Dark carved display stand with plum cushion |
| `Tools/Duster.png` | Black/plum/orange feathers and ebony/gold handle; original skinning transferred |
| `Tools/SprayBody.png` | Amber cleaner in plum glass with pumpkin label |
| `Tools/SprayHead.png` | Released sprayer-trigger part |
| `Tools/SprayHeadPressed.png` | Picked/pressed sprayer-trigger part |
| `Tools/BrushBody.png` | Charcoal scrub brush with amber trim |
| `Tools/BrushFoamHead.png` | Matching lathered brush-head overlay |

Thirteen PNGs, thirteen changed renderer bindings, three themed tool icons, and three remapped scratch-surface sprite references. The extra trigger image is used by `BD_SpriteChange`, rather than a separate initial renderer.

## Import and geometry details

These are generated image edits, not pixel-identical recolors. The PNG canvases and fine edge detail differ from the source. **Use the fitted prefab for a ready-to-place replacement.** Simply dragging individual PNGs onto legacy renderers can change their apparent dimensions because the old playable includes half-resolution textures with compensating transforms.

The copy fits static sprites with zero-border Sliced rendering, preserving the authored transforms and collider layout. The duster retains Simple rendering, four bones, weighted vertices, indices and original bone hierarchy. Import metadata retains the intended pivot and sets sprite mode, alpha, Full Rect geometry for fitted static parts, and appropriate pixels per unit. All generated textures are individual PNG assets with no packing tag; do not put the fitted sprites into a SpriteAtlas without testing the Playworks export. Unity documents a Sliced/Tiled sprite-atlas issue in its [Playworks guidance](https://docs.lunalabs.io/docs/playable/common-issues/sprite-atlas/sprites-with-drawmode/).

The scratch managers used original full-resolution source sprites even though the visible crown used legacy half-resolution copies. Both sets of bindings are remapped. Generated crown sprite world widths match those full-resolution scratch sources; existing fitted renderer rectangles retain the visible legacy layout.

Reproduction code is saved as an Editor method-body snippet in `research/assemble_crown.cs.txt`; it is not runtime code and is not automatically executed. `replacement_manifest.json` lists the source and destination assets. `generation_prompts.json` records the generation specifications. Built-in image generation was used, with the original sprites as edit/state references and the approved clean crown as the shared material reference. The saved PNG pixels were copied without subsequent raster repainting or resizing.

## What was checked

`unity_validation.json` records:

- 229 transforms compared with the original; zero position/rotation/scale changes.
- 83 colliders in both versions.
- Four imported duster bind poses, matching the original.
- No missing scripts, missing asset GUIDs or broken live serialized object references in the new prefab.
- Pressed-trigger reference resolves to the new Halloween image.

The isolated Unity preview shows the actual prefab composition; the current working scene was not replaced to make it. `Crown_Unity_Preview.png` shows the dirty state; `Crown_Clean_Unity_Preview.png` shows the manually selected clean state. PNG alpha, dimensions, and hashes are recorded in `asset_validation.json`.

This is an art integration/preview check. A complete hands-on drag/scratch playthrough and final Luna HTML export have not been certified for this new skin. The original gameplay script remains unchanged. The pre-existing inactive later-step/view objects remain in the copy; this is a theme for the current 1–3 playable, not an eight-step reskin of every unused object.

## Project and visual study

The live catalog snapshot taken during this audit recorded **40 level-containing prefabs**, **20 existing playable prefabs**, **2,525 Texture2D assets**, and **six scenes**. The texture count includes artwork present at that sampling time; the new themed prefab was created afterward. These are an inventory of the local project, not 40 unique gameplay designs. `research/project_inventory.json` contains paths, script types and declared step methods. Earlier methods can remain for ForceComplete initialization, so the declared-method list is not an interactive-step count.

The project combines Resources levels, generated playable variants, a shared playable scene/HUD and the Playworks exporter. More recent imported event content adds Dracula tailoring and casket restoration, including several Casket range tests. Older creatives still reference `HalvedTextures`; those files remain as dependencies even though the creator's sprite-downscaling feature was removed. The old project-analysis document describes an earlier package-path/configuration state; the current package manifest points to a relative `../../7.2.0/scripts` SDK path.

Existing playable families include hair cleaning/styling; armpit and shower cleaning; wax-machine repair; face treatments; basin washing; shoe cleaning; crown restoration; manicure; stove repair; Dracula tailoring; and casket restoration/sanding. Repeated NewTest/range variants are iterations of those families.

The crown source art is a realistic rendered-object style: reflective beveled gold, sharply faceted blue stones, detailed filigree and separate crust/droplet/foam treatments. Basin art uses dense textile microtexture, crumpled folds, wet sheen and layered hands. Environment art has modeled room perspective, natural material texture and baked lighting. It is not a flat/vector cartoon style. The Halloween direction retains this rendered material language, using antique silver, black walnut, amber jewels, plum velvet, pumpkin relief and restrained gold trim.

### Other candidates considered

| Candidate | Halloween treatment | Assessment |
|---|---|---|
| Crown — selected | Cursed crown restoration | Uses the user's proven creative and a readable dirty-to-restored object; complete selected art pack supplied |
| Basin washing | Pumpkin-orange cardigan and plum shirt with bat embroidery | Preserves the proven wash interaction; four concept state images were generated before crown selection and are parked outside Assets |
| Manicure | Amber/orange lacquer, dark tips, tiny bat/pumpkin nail details | Best additional reskin candidate in my judgment: visible treatment/reveal with little need to change interaction geometry |
| Existing Dracula casket | Dusting, cleaning or sanding a themed casket | Strong existing seasonal material; several playable variants already exist, so this is reuse rather than a new seasonal concept |
| Shoe cleaning | Halloween-colored sneaker with subtle bat stitching | Low-risk material reskin; converting the sneaker silhouette into a witch boot would require more collision/mask review |
| Tailoring/loom | Existing Dracula garment work | Rich seasonal presentation already imported, but more animation/pose assets to coordinate than the crown |

These rankings are production/art judgments, not measured campaign-performance predictions. Unity's [playable design guidance](https://docs.lunalabs.io/docs/playable/getting-started/creative-guide/playable-design/) and [creative best practices](https://docs.unity.com/en-us/user-acquisition/creatives/best-practices/playable) support clear onboarding, simple interaction and a readable outcome. They do not establish which of this project's Halloween concepts will perform best; that needs an A/B test.
