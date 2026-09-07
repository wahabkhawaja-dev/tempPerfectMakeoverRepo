#!/usr/bin/env python3
"""
Luna pre-flight checker.

Scans Assets/ for C# patterns that compile fine in Unity but are known to break, warn, or
misbehave in a Luna Playworks build. Every check here was learned the hard way this project:
found by uploading a build and reading the browser console, then fixed. This script exists so
that loop stops costing a build.

Run before every build:
    python Tools/luna_preflight.py

Exit code is nonzero if anything is flagged, so it can be wired into a pre-build step later.
"""

import os
import re
import sys

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
ASSETS = os.path.join(ROOT, "Assets")

# (name, regex, message, severity)  severity: "error" = known to break/throw, "warn" = known to misbehave
CHECKS = [
    (
        "Animator.enabled = false",
        re.compile(r'\.enabled\s*=\s*false\s*;\s*(//.*)?$'),
        None,  # needs the animator-type check below; see run()
        "error",
    ),
    (
        "LineRenderer field/type",
        re.compile(r'\bLineRenderer\b'),
        "LineRenderer is not supported by Luna. Use MeshFilter + MeshRenderer (see StaticFixedPipe.cs for the quad-strip pattern) or SpriteRenderer.",
        "error",
    ),
    (
        "OnMouseDown/Up/Drag/Over/Enter/Exit",
        re.compile(r'\bvoid\s+OnMouse(Down|Up|Drag|Over|Enter|Exit)\s*\('),
        "Luna only routes OnMouse* through 3D physics, so it never fires on a Collider2D. Poll Input.GetMouseButtonDown/Up + PointerInput.IsOverCollider instead (see BasicDrag.cs, ActionOnTap.cs).",
        "error",
    ),
    (
        "MeshFilter.mesh (write)",
        re.compile(r'\.mesh\s*=\s*[^=]'),
        "Luna's MeshFilter exposes sharedMesh/instancedMesh, not .mesh. Use filter.sharedMesh = ... instead.",
        "warn",
    ),
    (
        "SpriteSkin / 2D Animation runtime",
        re.compile(r'\bSpriteSkin\b'),
        "SpriteSkin (Unity 2D Animation bone deformation) has no Luna equivalent. Strip it from playable prefabs (see the Level1_3_Playable cleanup) or avoid rigged sprites in playables entirely.",
        "warn",
    ),
]

# Animator.enabled = false is only a problem when the target is actually an Animator. A plain
# text regex can't type-check, so this check runs its own scan below instead of the generic loop.
ANIM_ENABLED_FALSE = re.compile(r'(\w+)\.enabled\s*=\s*false\s*;')
ANIM_ENABLED_TRUE = re.compile(r'(\w+)\.enabled\s*=\s*true\s*;')
ANIM_FIELD_DECL = re.compile(r'\bAnimator\s+(\w+)\s*;')
ANIM_PLAY_UPDATE = re.compile(r'(\w+)\.(Play|Update)\s*\(')


def iter_cs_files():
    for dirpath, dirnames, filenames in os.walk(ASSETS):
        # skip generated/editor-only noise that never ships
        dirnames[:] = [d for d in dirnames if d not in (".git",)]
        for fn in filenames:
            if fn.endswith(".cs"):
                yield os.path.join(dirpath, fn)


def check_animator_enabled(path, text, findings):
    animator_vars = set(ANIM_FIELD_DECL.findall(text))
    # a field named exactly "anim" or "animator" is Animator-typed in ~every script in this
    # codebase even when the array/property declaration is on another line — cheap heuristic
    # that covers the cases the precise regex misses (arrays, properties, inherited fields).
    animator_vars |= {"anim", "animator"}

    lines = text.splitlines()
    for i, line in enumerate(lines, start=1):
        m = ANIM_ENABLED_FALSE.search(line)
        if m and m.group(1) in animator_vars:
            findings.append((path, i, "error",
                "Animator.enabled = false",
                f"'{m.group(1)}.enabled = false' — Luna does not tick a disabled Animator's Update(). "
                f"Use '{m.group(1)}.speed = 0.001f' instead (see BasicDrag.cs / BD_Sticky.cs)."))


def check_animator_play_on_inactive(path, text, findings):
    # Play()/Update() called without an activeInHierarchy guard nearby throws
    # "Game object with animator is inactive" once that branch runs on a disabled object.
    lines = text.splitlines()
    for i, line in enumerate(lines, start=1):
        m = ANIM_PLAY_UPDATE.search(line)
        if not m:
            continue
        var = m.group(1)
        if var not in ("anim", "animator") and not var.endswith("Anim") and not var.endswith("Animator"):
            continue
        window = "\n".join(lines[max(0, i - 4):i])
        if "activeInHierarchy" not in window and "activeSelf" not in window:
            findings.append((path, i, "warn",
                "Animator.Play/Update without activeInHierarchy guard",
                f"'{var}.{m.group(2)}(...)' with no nearby activeInHierarchy check — throws if this runs while the object is inactive (see the Lvl1_EyeOpenClose OnDisable spam)."))


def main():
    findings = []

    for path in iter_cs_files():
        rel = os.path.relpath(path, ROOT)
        try:
            with open(path, "r", encoding="utf-8-sig") as f:
                text = f.read()
        except UnicodeDecodeError:
            # A stray non-UTF8 byte (usually a pasted smart-quote/dash in a comment) — read it
            # anyway rather than silently skipping the file and missing real findings in it.
            with open(path, "r", encoding="latin-1") as f:
                text = f.read()
        except Exception as e:
            print(f"  [skip] {rel}: {e}")
            continue

        for name, pattern, message, severity in CHECKS:
            if message is None:
                continue
            for i, line in enumerate(text.splitlines(), start=1):
                if pattern.search(line):
                    findings.append((rel, i, severity, name, message))

        check_animator_enabled(rel, text, findings)
        check_animator_play_on_inactive(rel, text, findings)

    errors = [f for f in findings if f[2] == "error"]
    warns = [f for f in findings if f[2] == "warn"]

    findings.sort(key=lambda f: (f[0], f[1]))

    for rel, line, severity, name, message in findings:
        tag = "ERROR" if severity == "error" else "warn "
        print(f"[{tag}] {rel}:{line}  {name}")
        print(f"         {message}")
        print()

    print("-" * 70)
    print(f"{len(errors)} error(s), {len(warns)} warning(s) across {len(list(iter_cs_files()))} scripts.")

    if errors:
        print("\nFix ERRORs before building — these are confirmed to break or spam in the Luna build.")
        return 1

    if warns:
        print("\nNo blocking errors. Warnings are worth a look but won't necessarily break the build.")
        return 0

    print("\nClean. Nothing matched a known Luna-incompatible pattern.")
    return 0


if __name__ == "__main__":
    sys.exit(main())
