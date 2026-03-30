# Design System — Bowl Diaries

## Typography

### Display font
- **Baloo 2**

### Body font
- **Grift** (falls back to Geist Sans until Grift files are added)

### Type styles (CSS utility classes)
- **H1**: `ds-h1` — Baloo 2, Bold, 64px, line-height 100%
- **H2**: `ds-h2` — Baloo 2, Semi Bold, 40px, line-height 100%
- **H3**: `ds-h3` — Baloo 2, Medium, 28px, line-height 100%
- **H4**: `ds-h4` — Baloo 2, Medium, 20px, line-height 100%
- **Body Large**: `ds-body-lg` — Grift, Medium, 16px
- **Body Small**: `ds-body-sm` — Grift, Regular, 16px
- **Button/CTA**: `ds-cta` — Grift, Medium, 16px
- **Caption**: `ds-caption` — Grift, Medium, 14px
- **Overline**: `ds-overline` — Grift, Regular, 12px (uppercased)

## Where it lives
- **Fonts**: `src/app/layout.tsx`
- **Utilities**: `src/app/globals.css` (`@layer components`)

