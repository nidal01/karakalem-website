# Design System Strategy: The Shadow & Substance

## 1. Overview & Creative North Star
**Creative North Star: "The Obsidian Gallery"**

This design system is an exercise in atmospheric restraint. It rejects the "flatness" of modern SaaS interfaces in favor of a tactile, high-end editorial experience. By treating the viewport as a dimly lit, private gallery, we shift the user's focus away from the interface and toward the "graphite work"—the content.

The system breaks away from standard grid-heavy templates through **intentional asymmetry** and **tonal depth**. Layouts should feel like an open sketchbook or a curated exhibition wall, utilizing generous negative space (white space) to let the typography breathe. We move beyond the "digital" feel by embracing the Newsreader serif, evoking the sensation of ink on heavy-stock paper under a soft spotlight.

---

## 2. Colors & Atmospheric Layering
The palette is rooted in the absence of light, using charcoal and graphite tones to create a sense of quiet luxury.

### The "No-Line" Rule
**Explicit Instruction:** Designers are prohibited from using 1px solid borders for sectioning or containment. Boundaries must be defined solely through:
1.  **Background Shifts:** Transitioning from `surface` (#0e0e0d) to `surface_container_low` (#131312).
2.  **Tonal Transitions:** Using soft gradients between `primary_container` and `surface`.
3.  **Negative Space:** Using the spacing scale to create mental boundaries.

### Surface Hierarchy & Nesting
Treat the UI as physical layers of graphite-treated paper. 
*   **Base:** The `surface` (#0e0e0d) is the floor of the gallery.
*   **Recessed Elements:** Use `surface_container_lowest` (#000000) for input fields or areas that should feel "carved into" the interface.
*   **Elevated Elements:** Use `surface_container_high` (#1f201e) or `highest` (#252623) for cards or floating menus. 

### The "Glass & Graphite" Rule
To add visual "soul," use **Glassmorphism** for floating overlays. Apply `surface_bright` (#2c2c29) at 60% opacity with a `24px` backdrop blur. This ensures the dark, charcoal world behind the element remains visible, preventing the UI from feeling claustrophobic.

---

## 3. Typography: The Editorial Voice
Typography is the primary vehicle for elegance in this system.

*   **Display & Headlines (Newsreader):** Use `display-lg` and `headline-md` to create a sense of scale. Headlines should never feel "bolded" in a traditional sense; let the serif’s high-contrast strokes and the `on_surface` (#e7e5e1) warmth convey authority.
*   **Body (Newsreader):** `body-lg` (1rem) is the standard for long-form content, maintaining a literary, tactile feel.
*   **Labels (Work Sans):** We introduce a secondary sans-serif for functional elements. `label-md` and `label-sm` provide a technical, modern contrast to the romantic serif, ensuring UI actions are clear and legible.

---

## 4. Elevation & Depth
In a gallery, light defines space. We mimic this through **Tonal Layering**.

*   **The Layering Principle:** Avoid shadows where possible. Instead, place a `surface_container_highest` card on a `surface` background. The subtle 2-3% shift in lightness is enough for the human eye to perceive a change in depth.
*   **Ambient Shadows:** If a floating element (like a modal) requires a shadow, use a large blur (40px+) with low opacity (6%) using the `on_surface` color as the shadow tint. This mimics light bouncing off the "paper" rather than a synthetic black drop-shadow.
*   **The "Ghost Border" Fallback:** If a border is required for accessibility, use `outline_variant` at 15% opacity. **Never use 100% opaque lines.**

---

## 5. Components

### Buttons
*   **Primary:** A soft gradient from `primary` (#c6c7c1) to `primary_dim` (#b8b9b4). Text uses `on_primary` (#3e413d). Shape: `md` (0.375rem) for a tailored feel.
*   **Secondary:** No background. Use a "Ghost Border" (`outline_variant` @ 20%) and `primary` text.
*   **Tertiary:** Text only in `primary_fixed`, using `label-md` (Work Sans) for a functional look.

### Cards & Lists
*   **Cards:** Forbid divider lines. Use `surface_container_low` for the card body. If multiple cards are stacked, use vertical white space (32px or 48px) to separate them.
*   **Lists:** Separate items with a subtle background shift on hover (`surface_bright`) rather than persistent lines.

### Input Fields
*   **Styling:** Use `surface_container_lowest` (#000000) for the field background to create a "recessed" effect.
*   **State:** The active state should not use a thick border. Instead, use a subtle underline in `primary` or a glow effect using the `primary` color at 10% opacity.

### Chips
*   **Selection:** Use `primary_container` with `on_primary_container` text. Roundedness: `full`. These should feel like small, smooth stones found in a gallery courtyard.

---

## 6. Do’s and Don’ts

### Do
*   **Do** use asymmetrical layouts (e.g., a headline aligned left with body text pushed further right).
*   **Do** embrace extreme scale differences (e.g., a `display-lg` headline next to a `label-sm` date).
*   **Do** use `tertiary` (#e9ffeb) sparingly as a "highlight" color for success states or subtle accents.

### Don't
*   **Don't** use 1px solid lines to separate content. It breaks the "atmospheric" illusion.
*   **Don't** use pure white (#FFFFFF). It is too harsh for this "dimly lit" aesthetic; always use `on_surface` (#e7e5e1).
*   **Don't** use standard "heavy" shadows. They feel like plastic; we want the weight of paper and stone.
*   **Don't** center-align everything. Modern editorial design thrives on the tension of off-center elements.