# @4lt7ab

A React design system distributed as three packages: tokens, themes, and components for building apps and content sites.

## Packages

| Package | Description |
|---------|-------------|
| [`@4lt7ab/ui`](packages/ui/README.md) | Tokens, themes, icons, and interactive UI components |
| [`@4lt7ab/content`](packages/content/README.md) | Layout and prose components for blogs and docs |
| [`@4lt7ab/animations`](packages/animations/README.md) | Canvas background animations tied to themes |

## Quick Start

```tsx
import { ThemeProvider, Button, Card } from '@4lt7ab/ui';
import { Prose, Container } from '@4lt7ab/content';
import { ThemeBackground } from '@4lt7ab/animations';

function App() {
  return (
    <ThemeProvider defaultTheme="synthwave">
      <ThemeBackground />
      <Container width="prose">
        <Prose>
          <h1>Hello</h1>
          <p>Content goes here.</p>
        </Prose>
      </Container>
      <Card>
        <Button variant="primary">Click me</Button>
      </Card>
    </ThemeProvider>
  );
}
```

## Install

Add the packages you need to your `package.json`:

```json
{
  "dependencies": {
    "@4lt7ab/ui": "github:username/component-library#v0.1.0",
    "@4lt7ab/content": "github:username/component-library#v0.1.0",
    "@4lt7ab/animations": "github:username/component-library#v0.1.0"
  }
}
```

Then install:

```bash
bun install
```

All three packages share the same token layer and respond to the active theme. `@4lt7ab/content` and `@4lt7ab/animations` are peer dependencies of `@4lt7ab/ui` -- consumers must install the UI package for themes and tokens to work.

## Themes

Eight built-in themes: **synthwave**, **slate**, **warm-sand**, **moss**, **coral**, **pipboy**, **neural**, **pacman**.

The default is `synthwave`. Each theme provides a complete set of semantic tokens (colors, spacing, radii, shadows, typography) that all components consume.

## Development

```bash
bun install          # install all workspace dependencies
bun run build        # build all packages (UI first, then content + animations)
bun run typecheck    # type-check all packages
bun run dev          # start the demo app (Vite)
```

## Versioning

```bash
bun run build
git add -A
git commit -m "feat: description of changes"
git tag v0.2.0
git push origin main --tags
```

Consumers update the tag in their `package.json` and re-install.

## Package Details

Each package has its own README with full API documentation, component tables, and usage examples. See the links in the table above.
