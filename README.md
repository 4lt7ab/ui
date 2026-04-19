# @4lt7ab

**The components I reuse across my projects, built to primitive quality.** A component earns its place in this library when two clauses both hold: I reuse it across more than one project, and the implementation is good enough that the copy-pasted equivalent would be worse. Reuse without quality is copy-paste; quality without reuse is chrome. The full rationale — including the atomic-design retirement trap this framing exists to prevent — lives in the KB doc [Reused + Quality — the v0.5 reframe](tab://document/01KPHD88W7WHDH3C3PEBAEGE7A).

A React component library distributed as four packages built on a shared theme platform. Every component consumes semantic tokens and responds to the active theme at runtime.

## Packages

| Package | What it does |
|---------|--------------|
| [`@4lt7ab/core`](packages/core/README.md) | Theme platform: tokens, themes, ThemeProvider, useTheme, useInjectStyles |
| [`@4lt7ab/ui`](packages/ui/README.md) | Icons and interactive UI components |
| [`@4lt7ab/content`](packages/content/README.md) | Layout and prose components for blogs and docs |
| [`@4lt7ab/animations`](packages/animations/README.md) | Canvas background animations tied to themes |

`@4lt7ab/core` is the foundation — it provides the token layer and theme system that all other packages depend on. `@4lt7ab/ui`, `@4lt7ab/content`, and `@4lt7ab/animations` are independent of each other and each peer-depend on `@4lt7ab/core`.

## How to think about what belongs here

The library is organized into tiers that match the `packages/ui/src/components/` folder layout. The tiers are a taxonomy for reasoning about scope — not a retirement criterion.

- **Atoms** — primitives with no internal library composition (`Button`, `Input`, `Stack`, `Icon`, `Surface`).
- **Molecules** — small compositions with behavior (`Card`, `Field`, `SearchInput`, `ThemePicker`, `Pagination`).
- **Organisms** — compound surfaces or large interaction systems (`Calendar.*`, `Combobox.*`, `Select.*`, `Table.*`, `ModalShell`, `Toast`).

When two components in any tier overlap in responsibility, the default move is **merge before retire**. A component reused across projects earns its place; the fix for duplication is usually one extra prop on the shared component, not deletion of the duplicate. See the design tenets in [`CLAUDE.md`](CLAUDE.md#design-tenets) for the paired chrome-minimization and merge-before-retire rules.

## Install

Distributed as a single git dependency with subpath exports:

```json
{
  "dependencies": {
    "@4lt7ab/ui": "github:4lt7ab/ui#v0.2.2"
  }
}
```

```bash
bun install
# or: npm install, yarn install, pnpm install
```

Import from the subpath you need:

```ts
import { ThemeProvider, useTheme } from '@4lt7ab/ui/core';
import { Button, Card, Container } from '@4lt7ab/ui/ui';
import { Prose } from '@4lt7ab/ui/content';
import { ThemeBackground } from '@4lt7ab/ui/animations';
```

**Peer dependencies:** `react` and `react-dom` ^19.0.0. You provide React — the library doesn't bundle it.

## Quick Start

```tsx
import { ThemeProvider } from '@4lt7ab/ui/core';
import { Button, Card, Container } from '@4lt7ab/ui/ui';
import { Prose } from '@4lt7ab/ui/content';
import { ThemeBackground } from '@4lt7ab/ui/animations';

function App() {
  return (
    <ThemeProvider defaultTheme="warm-sand">
      <ThemeBackground />
      <Container width="prose">
        <Card>
          <Prose>
            <h1>Hello</h1>
            <p>Content goes here.</p>
          </Prose>
          <Button variant="primary">Click me</Button>
        </Card>
      </Container>
    </ThemeProvider>
  );
}
```

Everything lives inside a `ThemeProvider` (from `@4lt7ab/ui/core` or re-exported by `@4lt7ab/ui/ui`). It injects CSS custom properties for the active theme, and all components read from those variables. Switch themes at runtime and every component updates automatically.

## Themes

Eight built-in themes:

| Theme | Vibe |
|-------|------|
| `synthwave` | Neon on dark purple |
| `slate` | Clean neutral gray |
| `warm-sand` | Warm earth tones (default) |
| `moss` | Dark green, natural |
| `coral` | Warm coral accent on dark |
| `pipboy` | Green-on-black terminal |
| `neural` | Deep blue, data-viz feel |
| `pacman` | Retro arcade yellow |

Four themes have animated canvas backgrounds (`synthwave`, `pipboy`, `neural`, `pacman`). The rest use plain CSS backgrounds.

### Switching Themes

```tsx
import { useTheme } from '@4lt7ab/ui/core';

function ThemeSwitcher() {
  const { theme, setTheme, themes } = useTheme();

  return (
    <select value={theme} onChange={(e) => setTheme(e.target.value)}>
      {Array.from(themes.keys()).map((name) => (
        <option key={name} value={name}>{themes.get(name)?.label}</option>
      ))}
    </select>
  );
}
```

Or drop in the built-in visual picker:

```tsx
import { ThemePicker } from '@4lt7ab/ui/ui';

<ThemePicker />
```

Theme selection persists to `localStorage` automatically.

## Token System

Components never use raw color values or pixel literals. Instead, they reference semantic tokens — CSS custom properties that resolve to the active theme's values.

```tsx
import { semantic as t } from '@4lt7ab/ui/core';

// These are var(--...) references, not hard-coded values
t.colorBackground    // page background
t.colorSurface       // card/panel background
t.colorText          // primary text
t.colorBorder        // borders
t.spaceMd            // spacing
t.radiusMd           // border radius
```

Use these tokens when building custom components that should stay consistent with the design system.

## Versioning & Updates

The library uses git tags for versioning. To update, change the tag in your `package.json` and re-install:

```json
"@4lt7ab/ui": "github:4lt7ab/ui#v0.2.2"
```

### Release Process (for contributors)

```bash
bun run build
git add -A
git commit -m "feat: description of changes"
git tag v0.2.0
git push origin main --tags
```

`dist/` directories are committed to git so consumers don't need a build step.

## Development

```bash
bun install          # install all workspace dependencies
bun run build        # build all packages (core first, then ui + content + animations in parallel)
bun run typecheck    # type-check all packages
bun run dev          # start the Vite demo app
```

Build order matters: all packages depend on `@4lt7ab/core`, so the root build script runs core first.
