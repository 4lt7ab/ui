# Surface consolidation (0.3.0)

Status: design — no runtime changes in this doc. Ships as part of the 0.3.0 container cleanup. Breaking changes are acceptable; there are no external consumers yet.

Scope: the four surface components under `packages/ui/src/components/`: `Card`, `Surface`, `ThemeSurface`, `StatCard`. `LinkCard` lives in `@4lt7ab/content` and is explicitly out of scope.

Motivation: the library has accreted four overlapping ways to render a rectangle with a background token. The API should be tight but rich — one primitive for arbitrary surfaces, one opinionated component for the common "card" case, and a narrow escape hatch for the page-level background. StatCard collapses into a composition of the survivors.

---

## (a) Today's surface components

| Component | LOC (`.tsx`) | Unique capability |
| --- | --- | --- |
| `Card` | 190 | Opinionated content container. Four variants (`default` / `flat` / `elevated` / `live`), `hover` lift, `glow` prop consuming the component-canvas bridge (`useThemeRhythm`), hard-coded `radiusLg` + padding from `spacingMap`. The only surface with rhythm-driven animation and the only one that ships a hover affordance. |
| `Surface` | 165 | Low-level container primitive. Maps to the full `colorSurface*` token family via `level` (`page` / `default` / `solid` / `raised` / `panel` / `input` / `overlay`), plus optional `tint` (10% `color-mix`), `padding`, `radius`, `border` (bool or semantic), `shadow`, and polymorphic `as` (`div`/`section`/`article`/`aside`/`main`). No hover, no animation. |
| `ThemeSurface` | 62 | Page-background wrapper. Default: renders a `div` with `colorSurfacePage`. With `global`, writes `--color-surface-page` and `--color-text` onto `document.body` (and restores on unmount). Pure effect-on-body behavior is unique — neither `Surface` nor `Card` can do it. |
| `StatCard` | 152 | Fixed-layout metric tile: tinted icon circle (40px) + monospace value + uppercase label. Hard-coded padding, radius, background (`colorSurfaceRaised`), and border (40%-alpha `colorBorder`). No variants, no composition surface — pure preset. |

Index barrels are all one line (`export * from './X'`) and not counted.

Total surviving-source baseline: 569 LOC across four components + 4 barrels.

---

## (b) Canonical surface after consolidation

**`Surface`** becomes the single primitive. **`Card`** survives as the opinionated preset layered on top of it.

### `Surface` (primitive — expanded)

Already close to right. Keep the existing API and add one prop to subsume the "tinted transparent background" pattern that `StatCard` currently hard-codes:

```ts
interface SurfaceProps {
  level?: 'page' | 'default' | 'solid' | 'raised' | 'panel' | 'input' | 'overlay'; // default 'solid'
  tint?: SemanticColor;           // 10% color-mix over level
  padding?: SpacingToken;
  radius?: RadiusToken;           // default 'lg'
  border?: boolean | SemanticColor;
  shadow?: ShadowToken;
  as?: 'div' | 'section' | 'article' | 'aside' | 'main';
  children: ReactNode;
}
```

Absorbs:
- `ThemeSurface` non-global: expressed as `<Surface level="page" />`.
- `StatCard`'s tinted-icon-circle background: `<Surface level="raised" tint={color} radius="full" />`.

### `Card` (opinionated preset — simplified)

```ts
interface CardProps {
  variant?: 'default' | 'flat' | 'elevated';   // 'live' retires; see §(d)
  padding?: SpacingToken;                      // default 'lg'
  hover?: boolean;                             // unchanged
  glow?: boolean;                              // unchanged — rhythm bridge consumer
  children: ReactNode;
}
```

Absorbs from retirees: nothing. Card stays narrow on purpose — it's the opinionated "grouped content" surface. Consumers who need the knobs `Card` doesn't expose (polymorphic tag, arbitrary `level`, `tint`, custom radius, no border) reach for `Surface` directly.

### Escape hatch for body-background behavior

The one capability `ThemeSurface` has that `Surface` cannot cover is painting `document.body`. See §(c) for the replacement: a tiny `usePageBackground()` hook in `@4lt7ab/core`. It's not a component at all — it's one `useEffect`. Preserving it as a component is what created the duplication in the first place.

---

## (c) Retirements and migration

### Retire `ThemeSurface`

Two use cases, two migrations:

**Non-global (renders a div):**

```tsx
// Before
<ThemeSurface>
  <App />
</ThemeSurface>

// After
<Surface level="page" style={{ minHeight: '100vh' }}>
  <App />
</Surface>
```

**Global (paints body):**

```tsx
// Before
<ThemeSurface global>
  <App />
</ThemeSurface>

// After — new hook in @4lt7ab/core (ships with this refactor)
function RootLayout({ children }: { children: ReactNode }) {
  usePageBackground(); // writes var(--color-surface-page) to document.body, restores on unmount
  return <>{children}</>;
}
```

The hook is ~15 LOC — the body of `ThemeSurface`'s `useEffect` lifted verbatim into a named hook. Wrapping children in a `<>…</>` component to get a side effect was never the right abstraction.

### Retire `StatCard`

Replaced by composition against `Surface` plus the existing text components. No capability is lost — the StatCard layout is trivial flexbox.

```tsx
// Before
<StatCard icon="check_circle" color="success" value={42} label="Completed" />

// After
<Surface
  level="raised"
  padding="md"
  radius="md"
  border
  style={{ display: 'flex', alignItems: 'center', gap: spacingMap.md }}
>
  <Surface
    level="raised"
    tint="success"
    radius="full"
    style={{ width: 40, height: 40, display: 'grid', placeItems: 'center', flexShrink: 0 }}
  >
    <Icon name="check_circle" color="success" size={20} />
  </Surface>
  <Stack gap="xs">
    <Text font="mono" size="xl" weight="bold">42</Text>
    <Text font="mono" size="xs" weight="medium" tone="muted" transform="uppercase" tracking="wide">
      Completed
    </Text>
  </Stack>
</Surface>
```

**Accepted loss:** consumers who want StatCard's exact visual preset now write ~15 lines instead of one. This is deliberate. StatCard was a dashboard-specific preset baked into a general-purpose library — the kind of thing a consuming app should own in its own `components/` directory, not the library's public surface. If enough apps want it back, it returns as a recipe in the `demo/` or a standalone `@4lt7ab/dashboard` package, not here.

One prerequisite: `Text` (or an equivalent typography primitive) needs to exist and expose `font`, `size`, `weight`, `tone`, `transform`, `tracking`. If it doesn't today, the migration falls back to a `<span style={{…}}>` — still fewer moving parts than a dedicated component.

### Barrel and demo cleanup (noted for the execution task)

The downstream refactor task will need to:

- Remove `ThemeSurface` and `StatCard` exports from `packages/ui/src/index.ts`.
- Remove the `ThemeSurface` and `StatCard` entries from `demo/demos/index.ts` and from the `CATEGORIES` array in `demo/views/ComponentExplorer.tsx`.
- Delete the four files: `packages/ui/src/components/ThemeSurface/{ThemeSurface.tsx,index.ts}` and `packages/ui/src/components/StatCard/{StatCard.tsx,index.ts}`.
- Add `usePageBackground` to `packages/core/src/utils/` and export from `packages/core/src/index.ts`.
- Re-export for convenience from `@4lt7ab/ui`.

Not touched in this doc.

---

## (d) Fate of Card's `variant: 'live'`

**Retire `'live'`.** The new `glow` prop is strictly a superset.

`variant: 'live'` is a fixed 2.5s CSS keyframe that cycles border color between `colorBorderFocused` and `colorActionPrimary` with a small box-shadow. It predates the component-canvas bridge and is not theme-aware — every theme pulses at the same cadence regardless of the `rhythm` config. `glow={true}` subscribes to `useThemeRhythm`, so its cadence tracks the active theme (80 bpm Synthwave sine, 140 bpm Pipboy square, 60 bpm Neural triangle, and static where `rhythm` is absent). It also correctly no-ops on themes without rhythm and under `prefers-reduced-motion`, both of which `'live'` handles only partially (`'live'` honors reduced-motion but cannot opt out per-theme).

Keeping both is API debt: two props doing the same thing, with the older one silently ignoring the theme system. Since 0.3.0 is the cleanup release, `'live'` goes.

Migration:

```tsx
// Before
<Card variant="live">Active session</Card>

// After
<Card glow>Active session</Card>
```

Themes without a `rhythm` definition will see no pulse at all under `glow` — that's a deliberate and correct behavior (the old `'live'` pulsed regardless, which is exactly the non-theme-aware behavior the bridge was built to replace). Themes that want a pulse on every theme should add a `rhythm` config to their definition.

---

## Totals

Before: 569 LOC across `Card` (190) + `Surface` (165) + `ThemeSurface` (62) + `StatCard` (152).

After (estimated):
- `Card` drops `'live'` variant styles and the `LIVE_STYLES_*` block → ~170 LOC (−20).
- `Surface` unchanged → 165 LOC.
- `ThemeSurface` deleted → 0 LOC; replaced by ~15 LOC `usePageBackground` hook in `@4lt7ab/core`.
- `StatCard` deleted → 0 LOC.

Projected: ~335 LOC in `@4lt7ab/ui` surface code + ~15 LOC hook in `@4lt7ab/core`. Net reduction: **~220 LOC**, two fewer public components, one prop removed from `Card`'s type.

---

## Open question flagged for the user

None of the decisions above hinge on user input. One soft dependency worth naming: the `StatCard` migration snippet leans on a typography primitive (`Text` with `font`/`size`/`weight`/`tone` props). If that component doesn't exist today, the execution task will use inline `<span>` styling in demos and docs — still correct, just verbose. If the user wants the execution task to first ship a `Text` primitive, that should be a separate grooming decision.
