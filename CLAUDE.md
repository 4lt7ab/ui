# @4lt7ab monorepo

**Mission.** A component earns its place in the library when a consumer reuses it across projects and it's built to primitive-level quality. Reuse without quality is copy-paste; quality without reuse is chrome. Both clauses are required. Also captured in KB doc [Reused + Quality — the v0.5 reframe](tab://document/01KPHD88W7WHDH3C3PEBAEGE7A).

Four React packages built on a shared theme platform, distributed via GitHub git dependencies.

- **`@4lt7ab/core`** -- Theme platform: tokens, themes, ThemeProvider, useTheme, useInjectStyles.
- **`@4lt7ab/ui`** -- Icons, utilities, and interactive UI components. Re-exports core's API for convenience.
- **`@4lt7ab/content`** -- Layout and prose components for blogs and docs.
- **`@4lt7ab/animations`** -- Canvas background animations tied to themes.

## Commands

```bash
bun install          # install all workspace deps
bun run build        # build all packages (core first, then ui + content + animations in parallel)
bun run typecheck    # tsc --noEmit across all packages
bun run test         # run all tests once (vitest)
bun run test:watch   # run tests in watch mode
bun run dev          # start the docs site (Vite) — the concept-organized docs experience at demo/
```

Build order matters: all packages depend on `@4lt7ab/core`, so the root build script runs core first, then ui, content, and animations in parallel. After building, `scripts/verify-exports.ts` runs automatically to confirm every source barrel export has a real definition in the compiled bundle. This catches silent bundler bugs (e.g. bunup dropping modules without error).

**Note:** `@4lt7ab/ui` uses esbuild for JS output instead of bunup due to a bunup v0.16.31 bug that silently drops certain components. bunup still runs first to generate `.d.ts` files, then `scripts/build-ui.ts` runs esbuild to produce the JS bundles (ESM + CJS) and rewrites `@4lt7ab/core` imports to relative paths. This replaced an earlier `bun build` approach which had its own bugs (always emitted dev JSX, name-mangled forwardRef exports). The docs site is a separate workspace (`demo/`) with its own dependencies, isolated from the library build.

## Architecture

`@4lt7ab/core` is the theme platform. It owns the token layer and theme system. The other three packages externalize core and import it via relative paths in dist (`../../core/dist/index.js`), ensuring a single shared context instance.

```
@4lt7ab/core  (tokens, themes, ThemeProvider, useTheme, useInjectStyles)
  ├── @4lt7ab/ui         (interactive components -- externalizes core, re-exports core API)
  ├── @4lt7ab/content    (prose/layout components -- externalizes core)
  └── @4lt7ab/animations (canvas backgrounds -- externalizes core)
```

Three token layers. Each layer only depends on the one below it.

```
Components  ->  consume semantic tokens only, never raw values
Semantic    ->  var(--...) references resolved by theme CSS
Primitives  ->  raw palette values (colors, spacing, radii, shadows, typography)
```

The token layer and themes live in `@4lt7ab/core`. `@4lt7ab/content` and `@4lt7ab/animations` import from core directly -- they do not depend on `@4lt7ab/ui`. `@4lt7ab/ui` externalizes core and re-exports its entire API for convenience. At build time, `@4lt7ab/core` imports in dist are rewritten to relative paths (`../../core/dist/`) so all packages share one context instance without requiring a separate `@4lt7ab/core` install.

## Design Tenets

Two tenets, paired. The first decides what doesn't belong in the library; the second decides what happens when two things that *do* belong overlap. Apply both before any retirement or consolidation proposal.

### 1. Keep consumer chrome to an absolute minimum

This is the load-bearing tenet the rest of the library answers to. "Chrome" is everything a consumer has to see, configure, or reason about that isn't the thing they came here to build. Every new component, prop, or API surface has to justify the attention it takes from the consumer.

In practice:

- **Prefer fewer components over more.** A component earns its place by carrying non-trivial behavior (accessibility, focus management, async lifecycles, rhythm subscriptions) that a consumer would otherwise rebuild. Thin wrappers that only arrange layout are retired as documented compositions -- the `FormModal` / `ShortcutHelpModal` retirements in 0.3.0 are the canonical examples.
- **Prefer tighter props over more props.** A new prop competes for the consumer's attention every time they read an API table. Before adding one, check whether composition already expresses the same thing. Before keeping a prop, check whether it's still earning the documentation real estate.
- **Defaults do the work.** Opt-in flags (`glow`, `hover`) default to off, and the zero-config call site renders correctly. Opt-outs are a last resort -- if a behavior is opt-out by default, it's chrome the consumer never asked for.
- **No chrome in the consumer's app shell.** The library renders inside the consumer's app, not around it. `usePageBackground()` is a hook precisely so the consumer decides whether, when, and where the body gets painted -- not a `<ThemeSurface>` that wraps their tree and assumes scope.
- **When a choice belongs to the consumer, return it to them.** `StatCard` presetting a metric layout was chrome; retiring it and documenting the composition lets the consuming app own the decisions their design calls for.

This tenet is why the 0.3.0 release shrank the public surface rather than grew it. When a consolidation proposal surfaces "we could fold these into one richer component," the answer is usually yes.

### 2. Merge before retire

A component reused across projects earns its place — find the duplication, don't cut the utility. When two or more components pass the reuse+quality test (see the mission statement above) and overlap in responsibility, the move is *merge*, not retire. Retiring destroys utility; merging preserves it while shrinking surface area. A merged component with one extra prop is almost always cheaper than two near-duplicate components.

This tenet is the counterweight to tenet 1. Chrome still goes — but before a retirement proposal, run the two-clause test. If a component passes, the question isn't "retire or keep," it's "keep or merge."

Canonical examples from v0.4.0 — the release that cemented this tenet:

- **`MarginNote` + `SideNote` → one component with a `side` prop.** Both passed the test; they differed only in which margin they rendered into. Merged, not retired.
- **`PullQuote` + `Epigraph` → one component with a `variant` prop.** Both were display-quotes with different typographic emphasis; the underlying rhythm-and-rule machinery was identical. Merged, not retired.
- **`LinkCard` → `Card asChild`.** The link affordance was the only distinguishing behavior; `Card` already carried the layout quality. Utility preserved as a composition seam on the primitive.
- **`TextSection` → `Markdown` editable mode.** `TextSection` was a thin shell around markdown rendering with an edit toggle. Folded into `Markdown` as a mode, not deleted.
- **`TableFilters` → `Table.FilterBar`.** The filter-bar UI was being shipped alongside every `Table` consumer and passed the reuse+quality test. Merged into the `Table.*` compound as a named slot rather than cut.

When a future retirement proposal surfaces, check the mission test first. Passing components merge; failing components retire. The atomic-design tier (atom/molecule/organism) is a taxonomy for reasoning about scope — not a retirement criterion. See also the KB doc [Reused + Quality — the v0.5 reframe](tab://document/01KPHD88W7WHDH3C3PEBAEGE7A) for the full rationale and the trap this tenet exists to prevent.

## Source Layout

```
packages/
├── core/
│   └── src/
│       ├── tokens/
│       │   ├── primitives.ts    # raw values -- never used directly by components
│       │   ├── semantic.ts      # var(--...) tokens -- the component API contract
│       │   ├── typography.ts    # font families, sizes, weights, line-heights
│       │   └── index.ts
│       ├── themes/
│       │   ├── ThemeProvider.tsx # React context + useTheme()
│       │   ├── types.ts         # ThemeTokens, ThemeDefinition interfaces
│       │   └── definitions/     # synthwave, slate, warm-sand, moss, coral, pipboy, neural, pacman
│       ├── utils/
│       │   └── useInjectStyles.ts  # singleton style injection hook
│       └── index.ts
├── ui/
│   └── src/
│       ├── icons/               # built-in icon components + registry
│       ├── utils/
│       │   └── useFocusTrap.ts     # focus trap for modals
│       ├── components/
│       │   ├── atoms/           # primitives with no internal library composition
│       │   │   ├── Badge/
│       │   │   ├── Button/
│       │   │   ├── Container/
│       │   │   ├── Divider/
│       │   │   ├── Grid/
│       │   │   ├── Icon/
│       │   │   ├── IconButton/
│       │   │   ├── Input/
│       │   │   ├── Overlay/
│       │   │   ├── ProgressBar/
│       │   │   ├── Skeleton/
│       │   │   ├── Stack/
│       │   │   ├── StatusDot/
│       │   │   ├── Surface/
│       │   │   ├── Text/
│       │   │   └── Textarea/
│       │   ├── molecules/       # small compositions with behavior
│       │   │   ├── AlertBanner/
│       │   │   ├── Card/
│       │   │   ├── ChipPicker/
│       │   │   ├── ConfirmDialog/
│       │   │   ├── EmptyState/
│       │   │   ├── ErrorBoundary/
│       │   │   ├── Field/
│       │   │   ├── Header/
│       │   │   ├── LinkCard/
│       │   │   ├── Pagination/
│       │   │   ├── SearchInput/
│       │   │   ├── SegmentedControl/
│       │   │   ├── TabStrip/
│       │   │   └── ThemePicker/
│       │   └── organisms/       # compound surfaces or large interaction systems
│       │       ├── AppShell/         # AppShell.* compound (viewport envelope)
│       │       ├── Calendar/         # Calendar.* compound
│       │       ├── Combobox/         # Combobox.* compound
│       │       ├── CommandPalette/   # CommandPalette.* compound (Cmd+K palette)
│       │       ├── DataTablePage/    # DataTablePage.* compound (CRUD envelope)
│       │       ├── DatePicker/
│       │       ├── DateRangePicker/
│       │       ├── DetailPage/       # DetailPage.* compound (entity-detail envelope)
│       │       ├── EmptyPage/        # EmptyPage.* compound (full-page zero-state)
│       │       ├── ModalShell/
│       │       ├── Select/           # Select.* compound
│       │       ├── Table/            # Table.* compound (incl. Table.FilterBar)
│       │       ├── Toast/
│       │       └── TopBar/           # TopBar.* compound
│       └── index.ts            # single public barrel — tier folders are internal
├── content/
│   └── src/
│       ├── components/
│       │   ├── MarginNote/
│       │   ├── Markdown/
│       │   ├── Prose/
│       │   ├── Quote/
│       │   └── ThinkingCycle/
│       └── index.ts
├── animations/
│   └── src/
│       ├── ThemeBackground.tsx
│       ├── backgrounds/
│       │   ├── synthwave.ts
│       │   ├── pipboy.ts
│       │   ├── neural.ts
│       │   └── pacman.ts
│       └── index.ts
scripts/
├── build-ui.ts                  # esbuild bundler for @4lt7ab/ui (replaces bun build + sed hacks)
├── verify-exports.ts            # post-build: confirms all source exports exist in dist bundles
demo/                            # Vite docs site — concept-organized, dogfoods @4lt7ab/content's Markdown
├── App.tsx                      # ThemeProvider + ThemeBackground + ConceptExplorer
├── main.tsx
├── views/
│   └── ConceptExplorer.tsx      # AppShell-based shell: hash-routed sidebar (#/<slug>) + Markdown render pane
├── docs/                        # concept markdown (filename prefix drives sidebar order)
│   ├── 01-getting-started.md
│   ├── 02-theming.md
│   ├── 03-prose.md
│   ├── 04-layout.md
│   ├── 05-forms.md
│   ├── 06-data.md
│   ├── 07-modals.md
│   ├── 08-motion.md
│   └── registry.ts              # import.meta.glob('./*.md', { query: '?raw', eager: true })
└── examples/                    # headline-organism live showcases embedded as <LiveExample id="..." />
    ├── LiveExample.tsx          # Card-framed renderer + visible fallback for unregistered ids
    ├── registry.ts              # { id → React.ComponentType } — single source of truth for ids
    ├── remarkLiveExample.ts     # mdast plugin that rewrites <LiveExample ...> HTML nodes into hast elements
    ├── theming/ThemePlaygroundLive.tsx
    ├── forms/{Calendar,DateRangePicker,Combobox}Showcase.tsx
    ├── data/DataTablePageShowcase.tsx
    └── modals/{CommandPalette,ModalShell}Showcase.tsx
```

### Retired in 0.3.0

Component surface reduction. Do not re-add these without revisiting the rationale (captured in the project's design docs in the Tab knowledgebase, attached to the `4lt7ab/component-library` project).

- **`ThemeSurface`** — page background is now the `usePageBackground()` hook in `@4lt7ab/core`; non-global uses collapse to `<Surface level="page">`.
- **`StatCard`** — retired as a documented `<Surface>` composition.
- **`FormModal`** — retired as a documented composition over `ModalShell`; `modalHeadingStyle` and `modalFooterStyle` are exported for consumers. The canonical replacement lives in `demo/examples/modals/ModalShellShowcase.tsx` (rendered inline in `demo/docs/07-modals.md`).
- **`ShortcutHelpModal`** — retired; consumers own their data shape and `<kbd>` styling.

### Retired in 0.4.0

- **`SectionLabel`** — retired; the uppercase + letter-spacing style block is exported as `sectionLabelStyle: CSSProperties` from `@4lt7ab/ui` so consumers can spread it onto any element.

## Conventions

- **Components use semantic tokens only.** Import `semantic` from the tokens barrel, reference `var(--...)` values. No hex colors, no pixel literals.
- **One folder per component.** `ComponentName/ComponentName.tsx` + `index.ts` barrel.
- **Exported functions need explicit return types.** bunup DTS generation requires `): React.JSX.Element {` on component functions.
- **React is a peer dependency.** Never bundle it. Consumers provide their own.
- **Content components use `useInjectStyles`** (from `@4lt7ab/core`) for CSS that requires pseudo-elements or hover states. Scoped via unique IDs.
- **Animations import `useTheme` from `@4lt7ab/core`.** Background functions are pure (canvas in, cleanup out). Only `ThemeBackground` uses React.

## Adding a Component

### To `@4lt7ab/ui`

1. Pick the tier folder. `atoms/` for primitives with no internal library composition; `molecules/` for small compositions with behavior; `organisms/` for compound surfaces or large interaction systems. The tier is internal — the public barrel flattens all three.
2. Create `packages/ui/src/components/<tier>/MyComponent/MyComponent.tsx`
3. Create `packages/ui/src/components/<tier>/MyComponent/index.ts` barrel
4. Export from `packages/ui/src/index.ts` (single public barrel; tier folders are not surfaced to consumers)
5. Use only `semantic` tokens (from `@4lt7ab/core`) for all visual values
6. **Add a docs entry** — mention the component in the concept doc it belongs to under `demo/docs/` (forms, data, modals, layout, …). A prose paragraph + one ` ```tsx ` code fence is the floor. The public API table in the package README is the matching reference surface; update both in the same commit. See §"Docs" below for the concept map.
7. **Only if the component is a headline organism** (see the list below), also build a live showcase widget — create `demo/examples/<concept>/MyComponentShowcase.tsx`, register it by id in `demo/examples/registry.ts`, and reference it from the concept doc with `<LiveExample id="<concept>-<kebab-name>" />`. Presentational components and non-headline organisms do not need widgets.
8. `bun run typecheck && bun run build`

### To `@4lt7ab/content`

1. Create `packages/content/src/components/MyComponent/MyComponent.tsx`
2. Create `packages/content/src/components/MyComponent/index.ts` barrel
3. Export from `packages/content/src/index.ts`
4. Import tokens and utilities from `@4lt7ab/core` (peer dep)
5. **Add a docs entry** in `demo/docs/03-prose.md` (or whichever concept the component serves) — same floor as above: prose paragraph + `tsx` code fence + package README update. Content components rarely need live showcase widgets; add one only if the behavior (e.g. an async editing surface, a scramble animation consumers need to *see*) clears clause 3 of the headline criteria.
6. `bun run typecheck && bun run build`

### To `@4lt7ab/animations`

1. Create a background function in `packages/animations/src/backgrounds/my-bg.ts`
2. Export from `packages/animations/src/backgrounds/index.ts`
3. Register in `ThemeBackground.tsx` (add to the `backgroundRegistry` map)
4. Export from `packages/animations/src/index.ts`

## Adding a Theme

1. Create `packages/core/src/themes/definitions/my-theme.ts` implementing `ThemeDefinition`
2. Export from `packages/core/src/themes/definitions/index.ts`
3. Register in `packages/core/src/themes/ThemeProvider.tsx` (add to the built-in registry map)
4. Export from `packages/core/src/index.ts`
5. If the theme has a background animation, add it to `@4lt7ab/animations`

Built-in themes: synthwave, slate, warm-sand, moss, coral, pipboy, neural, pacman. **Hard cap: 10 themes.** To add a new theme beyond the cap, retire an existing one first.

## Adding a Token

1. Add to `ThemeTokens` interface in `packages/core/src/themes/types.ts`
2. Add the `var(--...)` reference to `packages/core/src/tokens/semantic.ts`
3. Add the value to every theme definition in `packages/core/src/themes/definitions/`
4. If it maps to a new primitive, add to `packages/core/src/tokens/primitives.ts`

## Testing

```bash
bun run test             # run all tests once
bun run test:watch       # run in watch mode
```

Tests use **vitest** + **@testing-library/react** + **jsdom**. Config lives in `vitest.config.ts` at the repo root.

### Conventions

- **Test files live next to source.** `ComponentName.test.tsx` beside `ComponentName.tsx`. Utility tests use `.test.ts`.
- **Mock `@4lt7ab/core`** in component tests. Semantic tokens are CSS var references — a Proxy mock works:
  ```ts
  vi.mock("@4lt7ab/core", () => ({
    semantic: new Proxy({}, { get: (_t, prop) => `var(--mock-${String(prop)})` }),
    useInjectStyles: vi.fn(),
  }));
  ```
- **Test behavior, not styles.** Focus management, keyboard navigation, ARIA attributes, callback invocations, state transitions. Don't assert on inline style objects.
- **Use `userEvent` over `fireEvent`.** `userEvent.setup()` simulates real browser interaction sequences.
- **Clean up the DOM** between tests: `beforeEach(() => { document.body.innerHTML = ""; })` for portal-heavy components.

### Priority

Tests are being added incrementally. Prioritize components with the most logic and interaction surface:

1. **High** — ModalShell, Select, Combobox, DatePicker, DateRangePicker, useFocusTrap
2. **Medium** — ConfirmDialog, Toast, SearchInput, Pagination, SegmentedControl
3. **Low** — Presentational components (Badge, Card, Stack, Skeleton, etc.)

Pure utility functions (dateUtils, token helpers) should always have tests.

### Adding tests for a new component

When adding a component, tests are **recommended for components with logic** (keyboard handling, state management, async behavior). Presentational components that only map props to styles don't need tests.

## Pre-commit Checks

A git pre-commit hook (`scripts/pre-commit`) runs automatically on every commit. It typechecks, builds, verifies all exports, then spot-checks the `@4lt7ab/ui` dist for known bundler regressions:

1. Zero `jsxDEV` references (dev JSX crashes consumers at runtime)
2. No `ModalShell` name-mangling (bun's `forwardRef` export collision bug)
3. Production `react/jsx-runtime` import (not `react/jsx-dev-runtime`)

The hook is installed automatically via `bun install` (the `prepare` script sets `core.hooksPath`). To skip for WIP commits: `git commit --no-verify`.

## Changelog

`CHANGELOG.md` at the repo root. Keep it brief — version header + bullet list of what changed. Update the `## Unreleased` section with every commit that changes public API, adds features, or fixes bugs. The `deploy.sh` script automatically stamps `## Unreleased` with the release version and adds a fresh `## Unreleased` section.

**Do not commit without updating the changelog.** Every commit that adds, changes, or fixes user-facing behavior must have a corresponding entry in `## Unreleased` before the commit is created.

## Releasing

**Always use `make` targets, never call `deploy.sh` directly.**

```bash
make deploy              # bump patch  (0.2.6 → 0.2.7)
make deploy-minor        # bump minor  (0.2.6 → 0.3.0)
make deploy-major        # bump major  (0.2.6 → 1.0.0)
make deploy V=2.0.0      # exact version
```

The deploy target typechecks, builds, updates all `package.json` versions, stamps the changelog, commits, tags, and pushes.

## Documentation

Documentation has two surfaces:

- **Package READMEs** — the API reference. One file per package, kept in the source tree so consumers can read it on GitHub without running anything.
- **Docs site at `demo/`** — the concept-organized walkthrough. Eight concept pages (`demo/docs/01-getting-started.md` through `08-motion.md`) teach how the library *thinks* about problem spaces; headline organisms each get an inline live showcase via `<LiveExample id="..." />`. Run it with `bun run dev`. The site dogfoods `@4lt7ab/content`'s `Markdown` component, so gaps in the renderer surface during authoring.

**Files:**

- **`README.md`** (root) -- Monorepo overview, package table, quick start, pointer at `bun run dev` for the docs site.
- **`packages/core/README.md`** -- Theme platform: ThemeProvider, useTheme, token API, themes, useInjectStyles.
- **`packages/ui/README.md`** -- Component API reference, icons, utilities. Notes re-export of core API.
- **`packages/content/README.md`** -- Content component API reference.
- **`packages/animations/README.md`** -- ThemeBackground usage, standalone API, behavior notes.
- **`CLAUDE.md`** (root) -- LLM-facing codebase instructions. Update when conventions, architecture, or workflows change.
- **`demo/docs/*.md`** -- concept docs. Edit the one covering the concept a new component serves; reference its API in prose + a `tsx` code fence.
- **`demo/examples/**`** -- headline-organism live-showcase widgets + the `<LiveExample>` registry.

### Concept map (which docs file does a component belong in?)

| Concept file | Surface |
|---|---|
| `01-getting-started.md` | Install, subpath imports, `ThemeProvider`, first render. |
| `02-theming.md` | Tokens, themes, `useTheme`, `ThemePicker`, `usePageBackground`. |
| `03-prose.md` | `@4lt7ab/content` — `Markdown`, `Prose`, `Quote`, `MarginNote`, `ThinkingCycle`. |
| `04-layout.md` | `Stack`, `Container`, `Grid`, `Divider`, `Surface`, `Card`, page envelopes (`AppShell`, `DataTablePage`, `DetailPage`, `EmptyPage`). |
| `05-forms.md` | `Input`, `Textarea`, `Select`, `Combobox`, `ChipPicker`, `Field`, `SearchInput`, `DatePicker`, `DateRangePicker`, `Calendar`, `FormLayout`. |
| `06-data.md` | `Table` + `Table.FilterBar`, `Pagination`, `Badge`, `StatusDot`, `ProgressBar`, `Skeleton`, `EmptyState`. |
| `07-modals.md` | `Overlay`, `ModalShell`, `ConfirmDialog`, `CommandPalette`, `WizardDialog`, `Toast`, `AlertBanner`, `ErrorBoundary`. |
| `08-motion.md` | `@4lt7ab/animations` — `ThemeBackground`, per-theme canvas backgrounds, standalone usage. |

### Headline organisms (require a `<LiveExample>` widget)

A component earns a dedicated live-showcase widget only if **all three** clauses hold: it's an organism, it passes the reuse + quality test, *and* it benefits visibly from interaction (keyboard nav, async state, layout response that a screenshot undersells).

Current list (six widgets):

| Headline organism | Concept | Registry id |
|---|---|---|
| `Calendar` | forms | `forms-calendar` |
| `Combobox` | forms | `forms-combobox` |
| `DateRangePicker` | forms | `forms-daterangepicker` |
| `DataTablePage` | data | `data-datatablepage` |
| `CommandPalette` | modals | `modals-commandpalette` |
| `ModalShell` | modals | `modals-modalshell` |

`ThemePlayground` is also registered (`theming-theme-playground`) as the featured widget for `02-theming.md`, even though it's not a standalone organism — it sits inside the theming doc because showing two themes side-by-side is the clearest way to teach token flow.

Non-headline organisms (`AppShell`, `DetailPage`, `EmptyPage`, `TopBar`, `Select`, `Toast`, `WizardDialog`, `FormLayout`, etc.) live in their concept doc as prose + code fence and do not require a widget. If one later earns clause 3 via real consumer feedback, it graduates; the list is a default, not a cap.

**When adding a component:** update the package README, update the concept doc it belongs to, and (if headline) add a showcase widget + registry entry. Update the Source Layout tree here when the on-disk folder set changes.
**When adding a theme:** add it to the built-in themes list in both the root README and this file.

## Distribution

Single git dependency with subpath exports. Consumers add:

```json
"@4lt7ab/ui": "github:4lt7ab/ui#v0.2.2"
```

Import via subpaths:

```ts
import { ThemeProvider } from '@4lt7ab/ui/core';
import { Button } from '@4lt7ab/ui/ui';
import { Prose } from '@4lt7ab/ui/content';
import { ThemeBackground } from '@4lt7ab/ui/animations';
```

The root `package.json` has an `exports` map that routes subpaths to `packages/*/dist/`. `dist/` directories are committed to git. Tag after building.
