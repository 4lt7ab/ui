# @4lt7ab monorepo

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
bun run dev          # start the demo app (Vite)
```

Build order matters: all packages depend on `@4lt7ab/core`, so the root build script runs core first, then ui, content, and animations in parallel.

## Architecture

`@4lt7ab/core` is the theme platform. It owns the token layer and theme system. The other three packages are independent consumers that peer-depend on core.

```
@4lt7ab/core  (tokens, themes, ThemeProvider, useTheme, useInjectStyles)
  ├── @4lt7ab/ui         (interactive components -- peer-depends on core, re-exports core API)
  ├── @4lt7ab/content    (prose/layout components -- peer-depends on core only)
  └── @4lt7ab/animations (canvas backgrounds -- peer-depends on core only)
```

Three token layers. Each layer only depends on the one below it.

```
Components  ->  consume semantic tokens only, never raw values
Semantic    ->  var(--...) references resolved by theme CSS
Primitives  ->  raw palette values (colors, spacing, radii, shadows, typography)
```

The token layer and themes live in `@4lt7ab/core`. `@4lt7ab/content` and `@4lt7ab/animations` peer-depend on core directly -- they do not depend on `@4lt7ab/ui`. `@4lt7ab/ui` also peer-depends on core and re-exports its entire API for convenience.

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
│       │   ├── Button/
│       │   ├── Card/
│       │   ├── Stack/
│       │   ├── Input/
│       │   ├── Textarea/
│       │   ├── Select/
│       │   ├── Field/
│       │   ├── Badge/
│       │   ├── Icon/
│       │   ├── IconButton/
│       │   ├── Overlay/
│       │   ├── ModalShell/
│       │   ├── ConfirmDialog/
│       │   ├── Skeleton/
│       │   ├── ProgressBar/
│       │   ├── EmptyState/
│       │   ├── Pagination/
│       │   ├── PageHeader/
│       │   ├── TagChip/
│       │   ├── ExpandableCard/
│       │   ├── Table/
│       │   ├── StatusDot/
│       │   ├── ThemePicker/
│       │   └── ThemeSurface/
│       └── index.ts
├── content/
│   └── src/
│       ├── components/
│       │   ├── Container/
│       │   ├── Prose/
│       │   ├── PullQuote/
│       │   ├── MarginNote/
│       │   ├── SideNote/
│       │   ├── Epigraph/
│       │   ├── LinkCard/
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
demo/                            # Vite demo app
```

## Conventions

- **Components use semantic tokens only.** Import `semantic` from the tokens barrel, reference `var(--...)` values. No hex colors, no pixel literals.
- **One folder per component.** `ComponentName/ComponentName.tsx` + `index.ts` barrel.
- **Exported functions need explicit return types.** bunup DTS generation requires `): React.JSX.Element {` on component functions.
- **React is a peer dependency.** Never bundle it. Consumers provide their own.
- **Content components use `useInjectStyles`** (from `@4lt7ab/core`) for CSS that requires pseudo-elements or hover states. Scoped via unique IDs.
- **Animations import `useTheme` from `@4lt7ab/core`.** Background functions are pure (canvas in, cleanup out). Only `ThemeBackground` uses React.

## Adding a Component

### To `@4lt7ab/ui`

1. Create `packages/ui/src/components/MyComponent/MyComponent.tsx`
2. Create `packages/ui/src/components/MyComponent/index.ts` barrel
3. Export from `packages/ui/src/index.ts`
4. Use only `semantic` tokens (from `@4lt7ab/core`) for all visual values
5. Update the demo app (`demo/`) to display the new component
6. `bun run typecheck && bun run build`

### To `@4lt7ab/content`

1. Create `packages/content/src/components/MyComponent/MyComponent.tsx`
2. Create `packages/content/src/components/MyComponent/index.ts` barrel
3. Export from `packages/content/src/index.ts`
4. Import tokens and utilities from `@4lt7ab/core` (peer dep)
5. Update the demo app
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

## Documentation

Each package has its own `README.md` for user-facing API docs. The root `README.md` is a monorepo overview.

- **`README.md`** (root) -- Monorepo overview, package table, quick start, dev commands.
- **`packages/core/README.md`** -- Theme platform: ThemeProvider, useTheme, token API, themes, useInjectStyles.
- **`packages/ui/README.md`** -- Component table, icons, utilities. Notes re-export of core API.
- **`packages/content/README.md`** -- Content component table, usage examples.
- **`packages/animations/README.md`** -- ThemeBackground usage, standalone API, behavior notes.
- **`CLAUDE.md`** (root) -- LLM-facing codebase instructions. Update when conventions, architecture, or workflows change.

When adding a component: add it to the relevant package README and update the source layout tree here.
When adding a theme: add it to the built-in themes list in both the root README and this file.

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
