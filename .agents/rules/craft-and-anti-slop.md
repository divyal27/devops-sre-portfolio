# Craftsmanship & Anti-AI-Slop Directives

These guidelines are mandatory for all UI design, component engineering, copywriting, and documentation in OptiBuild. They synthesize best practices from:
1. `jakubkrehel/make-interfaces-feel-better` (Tactile motion & micro-interactions)
2. `better-auth/better-icons` (Consistent, functional iconography)
3. `petergyang/no-ai-slop` (Grounded, non-templated UI aesthetics)
4. `superdesign.dev` (Production design token discipline & spatial density)
5. `jalaalrd/anti-ai-slop-writing` (Zero-fluff technical copywriting)
6. `blader/humanizer` (Human, authentic, and direct communication)

---

## 1. Interface Feel & Tactile Physics (`make-interfaces-feel-better`)
- **Active States:** All clickable buttons and interactive cards must have an immediate, tactile press response (e.g., `active:scale-[0.98]` or `active:translate-y-[1px]`).
- **Targeted Transitions:** Never write `transition: all`. Always specify properties (e.g., `transition: transform 150ms cubic-bezier(0.16, 1, 0.3, 1), opacity 150ms ease`).
- **Layout Stability:** Reserve dimensions for charts, blueprints, and simulators to eliminate Cumulative Layout Shift (CLS).
- **Surface Elevation:** Depth should come from subtle 1px border contrast (`border-zinc-200 dark:border-zinc-800`) and tight, diffuse shadows—never heavy muddy drop shadows.

---

## 2. Iconography Standards (`better-icons`)
- **Pixel Alignment & Grid:** Icons must strictly adhere to standard grids (16×16px, 20×20px, 24×24px) with consistent stroke weight (`1.5px` or `2px`).
- **Function Over Decoration:** Do not place icons next to every label or header just to fill space. Every icon must represent a distinct action or status.
- **Accessible Indicators:** Status colors (Red/Amber/Green) must always pair with shape/icon differentiation for accessibility.

---

## 3. Visual Aesthetic & Anti-Slop (`no-ai-slop`)
- **No Generic AI Slop Elements:**
  - ❌ Avoid generic purple/violet mesh gradients on dark slate.
  - ❌ Avoid floating blurred glassmorphism blobs behind plain cards.
  - ❌ Avoid low-density layouts with 60px padding surrounding a single paragraph.
- **Domain-Grounded Aesthetics:** OptiBuild is civil engineering and construction software.
  - Use high-density data tables, monospaced tabular numbers (`font-mono tabular-nums`), and structured status badges.
  - Materials & colors must evoke construction reality: blueprint navy, structural concrete slate, safety amber, and critical path crimson.

---

## 4. Design System & Token Discipline (`superdesign.dev`)
- **Consistent Radii & Spacing:** Use consistent component tokens (`rounded-md` or `rounded-lg` for cards, `rounded-sm` for tags).
- **Tabular Alignment:** All currency values (₹), dates, durations, and float calculations must use `font-mono tabular-nums` to ensure columns align perfectly across rows.
- **Component States:** Always explicitly design Loading, Empty, Error, and Populated states.

---

## 5. Copywriting & Language Sanity (`anti-ai-slop-writing`)
Strictly avoid hollow AI filler words and marketing hyperbole across all UI text, tooltips, dialogs, and code comments:
- ❌ **Banned Words:** *delve, testament, tapestry, seamlessly, effortlessly, revolutionize, empower, elevate, game-changer, unlock, pivotal, beacon, spearhead, meticulously, navigate your journey, robust suite, cutting-edge*.
- ✅ **Direct, Functional Copy:**
  - *Instead of:* "Empower your construction journey with our cutting-edge WBS generator"
  - *Write:* "Generate 3-level CPWD work breakdown structure"
  - *Instead of:* "Seamlessly delve into escrow withdrawals"
  - *Write:* "Calculate MahaRERA 70% escrow withdrawal amount"

---

## 6. Human Tone & Error Handling (`humanizer`)
- Write like a senior site project manager or civil systems architect: direct, concise, and technically grounded.
- **Error Messages:** Always state:
  1. What failed (e.g., "MahaRERA PDF missing Section 4 declaration").
  2. The exact operational consequence (e.g., "Possession deadline cannot be calculated").
  3. The exact next action (e.g., "Upload the signed Form 1 certificate or enter the completion date manually").
