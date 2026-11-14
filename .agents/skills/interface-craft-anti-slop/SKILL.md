---
name: interface-craft-anti-slop
description: >-
  High-craft UI design engineering, tactile micro-interactions, anti-AI-slop design and copywriting
  standards distilled from make-interfaces-feel-better, better-icons, no-ai-slop, superdesign,
  anti-ai-slop-writing, and humanizer. Use when building or auditing frontend components, writing UI copy,
  or polishing interfaces.
---

# Interface Craft & Anti-AI-Slop Skill

This skill enforces intentional design engineering, responsive tactile physics, consistent iconography, grounded visual design, and humanized, fluff-free writing.

## Reference Stack
- **Tactile Micro-interactions:** `jakubkrehel/make-interfaces-feel-better`
- **Iconography System:** `better-auth/better-icons`
- **Visual Design & Anti-Slop:** `petergyang/no-ai-slop`
- **Token Discipline & System:** `superdesign.dev`
- **Writing & Terminology Standards:** `jalaalrd/anti-ai-slop-writing`
- **Humanized Voice & Tone:** `blader/humanizer`

## Core Checklist for Every Component

### 1. Motion & Micro-interactions
- [ ] Active state responds instantly (10-20ms) with `active:scale-[0.98]` or micro-depression.
- [ ] Transitions target specific properties (`transform`, `opacity`, `background-color`)—never `all`.
- [ ] Spring curves feel weighted and physical rather than linear or sluggish.
- [ ] No unannounced layout jumps: skeleton loaders and charts maintain exact height/aspect-ratio.

### 2. Visual Density & Anti-Slop
- [ ] Zero gratuitous purple/magenta glow clouds or meaningless gradient washes.
- [ ] High data density: tabular numbers (`font-mono tabular-nums`), crisp 1px borders, clear column headers.
- [ ] Colors carry domain meaning:
  - Safety Amber: in-progress on-site work.
  - Critical Path Red: tasks with Total Float = 0.
  - Structural Slate / Concrete: finished milestones.
  - Blueprint Navy: interactive canvas controls.

### 3. Iconography
- [ ] Unified optical sizes: 16px, 20px, or 24px with consistent 1.5px/2px stroke weight.
- [ ] No decorative "icon salad": every icon serves an unambiguous navigational or state indicator function.

### 4. Humanized, Anti-Slop Copy
- [ ] Zero AI clichés: no "delve", "seamlessly", "empower", "unlock", "pivotal", "game changer".
- [ ] Plainspoken, active-voice descriptions.
- [ ] Errors clearly explain cause, statutory/operational impact, and exact recovery step.
