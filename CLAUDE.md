# @4lt7ab/ui

Shared React component library. Tokens + themes + components, distributed via GitHub git dependencies.

## Commands

```bash
bun install          # install deps
bun run build        # bunup → dist/ (ESM + CJS + .d.ts)
bun run typecheck    # tsc --noEmit
```

## Two Entry Points

The library ships two separate bundles so consumers only pull what they need:

```ts
import { Button, Card, ThemeProvider } from '@4lt7ab/ui'           // app UI
import { Prose, PageShell, Container } from '@4lt7ab/ui/content'   // content/layout
```

- **`@4lt7ab/ui`** — Tokens, themes, icons, and interactive UI components (Button, Card, Input, Modal, etc.). For dashboards, apps, and tools.
- **`@4lt7ab/ui/content`** — Layout and prose components (Container, Prose, PageShell, SiteNav, Footer, PullQuote, MarginNote). For blogs, docs, and reading-oriented pages.

Both share the same token layer and themes. A component in either entry point uses `semantic` tokens and responds to the active theme.

## Architecture

Three layers. Each layer only depends on the one below it.

```
Components  →  consume semantic tokens only, never raw values
Semantic    →  var(--...) references resolved by theme CSS
Primitives  →  raw palette values (colors, spacing, radii, shadows, typography)
```

## Source Layout

```
src/
├── tokens/
│   ��── primitives.ts    # raw values — never used directly by components
│   ├── semantic.ts      # var(--...) tokens — the component API contract
│   ├��─ typography.ts    # font families (sans, serif, mono), sizes, weights, line-heights
│   └── index.ts
├── themes/
│   ├── ThemeProvider.tsx # React context + useTheme()
│   ├── types.ts         # ThemeTokens, ThemeDefinition interfaces
│   └── definitions/     # synthwave, slate, warm-sand, moss, coral, pipboy, neural, pacman
├── utils/
│   └── useInjectStyles.ts  # singleton style injection hook
├── components/
│   ├── Button/          # app UI components
│   ├── Card/
│   ├── StatusDot/       # colored status indicator dot
│   ├── Table/           # compound table (Table, Header, Row, Cell, etc.)
│   ├── ...
│   ├── Container/       # content components
│   ├── Prose/
│   ├── PageShell/
│   ├─�� SiteNav/
│   ├── Footer/
│   ├── PullQuote/
│   └── MarginNote/
├── content/
│   └── index.ts         # content entry point barrel
└── index.ts             # main entry point barrel (app UI)
```

## Conventions

- **Components use semantic tokens only.** Import `semantic` from `../../tokens/semantic`, reference `var(--...)` values. No hex colors, no pixel literals.
- **One folder per component.** `ComponentName/ComponentName.tsx` + `index.ts` barrel.
- **Exported functions need explicit return types.** bunup DTS generation requires `): React.JSX.Element {` on component functions.
- **React is a peer dependency.** Never bundle it. Consumers provide their own.
- **Content components use `useInjectStyles`** for CSS that requires pseudo-elements or hover states. Scoped via unique IDs.

## Adding a Component

1. Create `src/components/MyComponent/MyComponent.tsx`
2. Create `src/components/MyComponent/index.ts` barrel
3. Export from the appropriate barrel:
   - App UI → `src/index.ts`
   - Content/layout → `src/content/index.ts`
4. Use only `semantic` tokens for all visual values
5. Update the demo app (`demo/`) to display the new component with realistic usage scenarios
6. `bun run typecheck && bun run build`

## Adding a Theme

1. Create `src/themes/definitions/my-theme.ts` implementing `ThemeDefinition`
2. Export from `src/themes/definitions/index.ts`
3. Register in `ThemeProvider.tsx` (add to the built-in registry map)
4. Export from `src/index.ts`

Built-in themes: synthwave, slate, warm-sand, moss, coral, pipboy, neural, pacman.

## Adding a Token

1. Add to `ThemeTokens` interface in `src/themes/types.ts`
2. Add the `var(--...)` reference to `semantic.ts`
3. Add the value to every theme definition in `src/themes/definitions/`
4. If it maps to a new primitive, add to `primitives.ts`

## Documentation

Two docs files, each with a different audience:

- **`README.md`** — User-facing manual. Update when adding/removing components, themes, or entry points. Covers install, usage, component tables, and token API.
- **`CLAUDE.md`** — LLM-facing codebase instructions. Update when conventions, architecture, source layout, or workflows change.

When adding a component: add it to the README component table and update the source layout tree here if it introduces a new directory.
When adding a theme: add it to the built-in themes list in both files.
When changing tokens or architecture: update the relevant sections in both files.

## Distribution

Git dependency via tags. Consumers add:

```json
"@4lt7ab/ui": "github:username/component-library#v0.1.0"
```

`dist/` is committed to git. Tag after building.
