# Theming

Every visual decision in the library — colors, spacing, radii, shadows, typography, transitions — resolves through a three-layer token system at runtime. A consumer picks a theme (or ships their own), and every component recolors, rehyphens, and resizes itself without touching its source. This page is the map of that system.

## What this concept covers

| Surface | Purpose |
|---|---|
| `ThemeProvider` | Root provider. Installs the active theme onto `document.documentElement` as CSS custom properties and persists the choice to `localStorage`. |
| `useTheme()` | Hook for reading the active theme and switching it. |
| `useThemeRhythm()` | Hook for syncing UI pulses (glows, flickers) to a theme's declared BPM. |
| `usePageBackground()` | Opt-in hook that paints `document.body` with the active theme's page color. |
| `ThemePicker` | Prebuilt UI for theme switching (`grid` or `compact` variant). |
| `semantic` tokens | The single API components consume. `var(--color-text)`, `var(--space-md)`, etc. |
| Built-in themes | Nine palettes: Synthwave, Slate, Warm Sand, Moss, Coral, Pip-Boy, Neural, Pac-Man, Black Hole. |

## The three token layers

Every visual value in the library flows through one of three layers, and each layer only depends on the one below it.

```
Components  ->  consume semantic tokens only, never raw values
Semantic    ->  var(--...) references resolved by theme CSS
Primitives  ->  raw palette values (colors, spacing, radii, shadows, typography)
```

**Components use semantic tokens.** They never import raw colors, never write pixel literals, never reach down to primitives. That's what makes them theme-agnostic by construction.

```tsx
import { semantic as t } from '@4lt7ab/core';

function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span
      style={{
        background: t.colorSurfaceRaised,
        color: t.colorText,
        padding: `${t.spaceXs} ${t.spaceSm}`,
        borderRadius: t.radiusMd,
        fontFamily: t.fontSans,
        fontSize: t.fontSizeSm,
      }}
    >
      {children}
    </span>
  );
}
```

Each value is literally a `var(--...)` string. When the theme changes, the DOM's CSS custom properties change — no React rerenders required for the recolor to happen.

## `ThemeProvider`

Wrap the app once, at the root:

```tsx
import { ThemeProvider } from '@4lt7ab/core';
// (or from '@4lt7ab/ui', which re-exports the core API)

export function Root({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider defaultTheme="warm-sand" applyPageStyles={false}>
      {children}
    </ThemeProvider>
  );
}
```

**Props.**

| Prop | Type | Default | Notes |
|---|---|---|---|
| `defaultTheme` | `string` | `'warm-sand'` | Used only when no value is stored under `storageKey`. |
| `storageKey` | `string` | `'ui-theme'` | `localStorage` key for the persisted choice. |
| `themes` | `ThemeDefinition[]` | — | Extra custom themes merged on top of the nine built-ins. |
| `applyPageStyles` | `boolean` | `true` | When `true`, each theme's raw CSS (including body `background-color` rules) is injected. When `false`, only token CSS variables are applied — pair with `usePageBackground()` for body paint. |

`applyPageStyles` will default to `false` in v2. Set it explicitly today to silence the deprecation warning and lock your intent.

## `useTheme()` — reading and switching

```tsx
import { useTheme } from '@4lt7ab/core';

function Header() {
  const { theme, resolved, themes, setTheme } = useTheme();

  return (
    <select value={resolved} onChange={(e) => setTheme(e.target.value)}>
      {Array.from(themes.values()).map((def) => (
        <option key={def.name} value={def.name}>{def.label}</option>
      ))}
    </select>
  );
}
```

- `theme` — the value the consumer last set (or the default).
- `resolved` — the actual theme applied to the DOM. Identical to `theme` today; the distinction exists so future work (e.g. `system` → `light`/`dark`) doesn't break the hook contract.
- `themes` — a `ReadonlyMap<string, ThemeDefinition>` of every registered theme, keyed by `name`.
- `setTheme(name)` — updates state and persists to `localStorage`.

Calling `useTheme()` outside a `<ThemeProvider>` throws. That's deliberate — silently returning a default would produce components that render with stale tokens on mount.

## The built-in themes

Nine themes ship with `@4lt7ab/core`. Each has a `name` (machine identifier), a `label` (display string), a full `ThemeTokens` map, optional raw CSS (for keyframes or pseudo-element effects), and an optional `rhythm` (BPM-based pulse cadence).

| `name` | `label` | Rhythm |
|---|---|---|
| `synthwave` | Synthwave | Yes (slow disco pulse) |
| `slate` | Slate | No |
| `warm-sand` | Warm Sand | No |
| `moss` | Moss | No |
| `coral` | Coral | No |
| `pipboy` | Pip-Boy | Yes (CRT flicker) |
| `neural` | Neural | Yes (calm oscillation) |
| `pacman` | Pac-Man | No |
| `black-hole` | Black Hole | No |

**Hard cap: 10 themes.** To add a new theme beyond the cap, retire an existing one first.

Themes with a registered canvas or static background animation (see [Motion](#/motion)) are painted full-screen by `<ThemeBackground>` when mounted alongside `<ThemeProvider>`.

## The `ThemePicker` component

Two variants. `grid` for settings pages. `compact` for toolbars and app-shell headers.

<LiveExample id="theming-theme-playground" />

```tsx
import { ThemePicker } from '@4lt7ab/ui';

// Settings page — grid of theme cards
<ThemePicker
  descriptions={{
    synthwave: 'Retro neon, slow disco pulse.',
    slate: 'Calm blue-gray workhorse.',
  }}
/>

// Header — dropdown button with a status dot
<ThemePicker variant="compact" />
```

`ThemePicker` must be rendered inside `<ThemeProvider>`. The compact variant is the right pick anywhere a full card grid would be overkill — it's what the docs shell you're reading right now uses in its top-right corner.

## `usePageBackground()`

The library renders inside the consumer's app, not around it. That means the body's background paint is the consumer's decision — not a `<ThemeSurface>` wrapper that assumes scope.

`usePageBackground()` is the opt-in for that paint:

```tsx
import { usePageBackground } from '@4lt7ab/core';

export function RootLayout({ children }: { children: React.ReactNode }) {
  usePageBackground();
  return <>{children}</>;
}
```

On mount it sets `document.body.style.backgroundColor` to `var(--color-surface-page)` and `color` to `var(--color-text)`. On unmount it restores whatever was there before. Because it writes `var(...)` directly (not resolved values), the browser keeps the body in sync with theme changes without a React rerender.

If you set `applyPageStyles={false}` on `ThemeProvider` and don't call `usePageBackground()`, the body stays transparent — useful for apps that paint their own backdrop (e.g. an animated canvas or a gradient the consumer owns).

## `useThemeRhythm()` — pulse cadence

Some themes declare a `ThemeRhythm` — a BPM with an easing shape and intensity multiplier. Components can subscribe so their pulses, glows, and flickers feel like they share a heartbeat with the theme.

The hook rerenders only when the rhythm *config* changes (different theme, different BPM) — never per-frame. Per-frame updates go through an imperative subscription.

```tsx
import { useThemeRhythm } from '@4lt7ab/core';

function PulsingDot() {
  const { durationCss } = useThemeRhythm();
  return (
    <span
      style={{
        animationDuration: durationCss ?? '1.5s',
        animationName: 'pulse',
        animationIterationCount: 'infinite',
      }}
    />
  );
}
```

```tsx
// Per-frame imperative subscription — no React rerenders
const { subscribe } = useThemeRhythm();
const ref = useRef<HTMLDivElement>(null);
useEffect(() => subscribe((phase) => {
  if (ref.current) ref.current.style.opacity = String(0.5 + phase * 0.5);
}), [subscribe]);
```

Themes without a declared rhythm return `config: null` and `durationCss: undefined` — components should fall back to their own default timing in that case.

## The semantic token surface

The full `semantic` object is the components-facing contract. Grouped by concern:

| Group | Keys |
|---|---|
| Text | `colorText`, `colorTextSecondary`, `colorTextMuted`, `colorTextInverse`, `colorTextLink`, `colorTextPlaceholder`, `colorTextDisabled` |
| Surfaces | `colorSurface`, `colorSurfacePanel`, `colorSurfaceSolid`, `colorSurfaceRaised`, `colorSurfaceOverlay`, `colorSurfaceInput`, `colorSurfaceDisabled`, `colorSurfacePage` |
| Borders | `colorBorder`, `colorBorderFocused`, `colorBorderError` |
| Actions | `colorActionPrimary`/`Hover`, `colorActionSecondary`/`Hover`, `colorActionDestructive`/`Hover` |
| Feedback | `colorSuccess`/`Bg`, `colorWarning`/`Bg`, `colorError`/`Bg`, `colorInfo`/`Bg` |
| Spacing | `spaceXs`, `spaceSm`, `spaceMd`, `spaceLg`, `spaceXl`, `space2xl` |
| Radii | `radiusSm`, `radiusMd`, `radiusLg`, `radiusFull` |
| Shadows | `shadowSm`, `shadowMd`, `shadowLg` |
| Typography | `fontSans`, `fontSerif`, `fontMono`, `fontSize{Xs..3xl}`, `lineHeight{Tight,Base,Relaxed}`, `fontWeight{Normal,Medium,Semibold,Bold}`, `letterSpacing{Tight,Normal,Wide}` |
| Focus | `focusRingColor`, `focusRingWidth`, `focusRingOffset` |
| Transitions | `transitionFast`, `transitionBase`, `transitionSlow` |
| Border widths | `borderWidthDefault`, `borderWidthThick`, `borderWidthAccent` |
| Z-index | `zIndexDropdown`, `zIndexSticky`, `zIndexModal`, `zIndexToast`, `zIndexMax` |
| Layout sizing | `sizeSidebarExpanded`, `sizeSidebarCollapsed`, `sizeRightPanelDefault` |

Special note on `colorSurfaceSolid`: it's the opaque counterpart to `colorSurface`. On themes where `colorSurface` is transparent (canvas-backed themes), use `colorSurfaceSolid` when stacked content needs to fully obscure what's behind it.

Click through a few tokens below — the resolved value on the right is pulled from the DOM, so switching themes in the header re-runs the resolution without touching the widget's state.

<LiveExample id="theming-token-inspector" />

## Custom themes

A theme is a `ThemeDefinition` — `name`, `label`, a complete `ThemeTokens` map, optional raw `css`, optional `rhythm`. TypeScript enforces completeness: a partial token map is a type error.

```tsx
import { ThemeProvider, type ThemeDefinition } from '@4lt7ab/core';

const corpTheme: ThemeDefinition = {
  name: 'corp',
  label: 'Corp',
  tokens: {
    // … every key in ThemeTokens, no exceptions
  },
};

<ThemeProvider themes={[corpTheme]} defaultTheme="corp">
  {children}
</ThemeProvider>
```

Custom themes merge *on top of* the built-ins — the registry still exposes all nine defaults plus your additions. If you want to hide a built-in from the picker, wrap `<ThemePicker>` or write your own using `useTheme().themes` filtered down.

## Focus, keyframes, and theme CSS

`ThemeProvider` injects a small amount of global CSS the first time it mounts:

- A `:focus-visible` rule that draws an outline using the three focus tokens (`focusRingColor`, `focusRingWidth`, `focusRingOffset`) — applied to buttons, inputs, links, and `[tabindex]` elements.
- Two keyframes: `spin` (always available) and `fade-in-up` (full animation on `prefers-reduced-motion: no-preference`; opacity-only fallback under `reduce`). Reference them via `KEYFRAMES.spin` and `KEYFRAMES.fadeInUp` for type-safe lookups.

A theme's optional `css` field is injected whenever that theme is active and removed on theme change. Use it for `@keyframes`, animations, and pseudo-element effects — anything tokens can't express. The selector `[data-theme="<name>"]` is available for scoping. When `applyPageStyles={false}` is set on `ThemeProvider`, body `background-color` rules are stripped from the injected CSS so tokens-only mode really is tokens-only.

## Where to next

- **[Prose](#/prose)** — typography system that consumes these tokens end-to-end.
- **[Layout](#/layout)** — how `Surface`, `Stack`, and `Container` render token values into structural rhythm.
- **[Motion](#/motion)** — the canvas-background layer that turns a declared theme rhythm into a full-screen effect.
