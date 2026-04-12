# @4lt7ab/ui

A React component library with design tokens, themes, and components.

## Install

Add the dependency to your `package.json`:

```json
{
  "dependencies": {
    "@4lt7ab/ui": "github:username/component-library#v0.1.0"
  }
}
```

Then install:

```bash
bun install
```

## Quick Start

Wrap your app in `ThemeProvider` and start using components:

```tsx
import { ThemeProvider, Button } from '@4lt7ab/ui';

function App() {
  return (
    <ThemeProvider>
      <Button variant="primary">Click me</Button>
    </ThemeProvider>
  );
}
```

The default theme is `synthwave`. Pass `defaultTheme` to change it:

```tsx
<ThemeProvider defaultTheme="slate">
```

## Themes

Eight built-in themes: synthwave, slate, warm-sand, moss, coral, pipboy, neural, pacman.

### Switching Themes

Use the `useTheme` hook to read or change the active theme at runtime:

```tsx
import { useTheme } from '@4lt7ab/ui';

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

The selected theme persists to `localStorage` automatically.

### ThemePicker Component

For a ready-made theme selector with visual previews:

```tsx
import { ThemePicker } from '@4lt7ab/ui';

<ThemePicker />
```

## Two Entry Points

The library ships two bundles so consumers only pull what they need:

```tsx
// App UI — buttons, cards, inputs, modals, etc.
import { Button, Card, ThemeProvider } from '@4lt7ab/ui';

// Content/layout — prose, page shells, navs, footers
import { Prose, PageShell, Container } from '@4lt7ab/ui/content';
```

Both share the same token layer and respond to the active theme.

## Components

### App UI (`@4lt7ab/ui`)

| Component | Description |
|-----------|-------------|
| `Button` | Primary, secondary, destructive, ghost variants. Sizes: sm, md, lg. |
| `Card` | Default, flat, elevated variants. Configurable padding. |
| `Stack` | Flex layout with gap, direction, alignment, and wrapping. |
| `Input` | Text input with semantic token styling. |
| `Textarea` | Multi-line text input. |
| `Select` | Dropdown select. |
| `Field` | Label + input wrapper with error state. |
| `Badge` | Status indicators in multiple color variants. |
| `Icon` | Renders icons from the built-in registry. |
| `IconButton` | Icon-only button with accessible label. |
| `Overlay` | Backdrop + centered content for modals. |
| `ModalShell` | Modal container with header, body, footer slots. |
| `ConfirmDialog` | Confirm/cancel dialog built on ModalShell. |
| `Skeleton` | Loading placeholder with shimmer animation. |
| `ProgressBar` | Segmented or single progress indicator. |
| `EmptyState` | Placeholder for empty lists/views. |
| `Pagination` | Page navigation controls. |
| `PageHeader` | Page title with optional actions slot. |
| `TagChip` | Removable tag/chip. |
| `ExpandableCard` | Card with collapsible content section. |
| `Table` | Compound table: `Table`, `TableHeader`, `TableHeaderCell`, `TableBody`, `TableRow`, `TableCell`, `TableGroupHeader`, `TableEmptyRow`. Default and flat variants. Supports row selection, hover, truncation, group headers, and empty states. |
| `StatusDot` | Colored dot for status indicators. Semantic variants or custom colors. |
| `ThemePicker` | Visual theme selector grid. |

### Content (`@4lt7ab/ui/content`)

| Component | Description |
|-----------|-------------|
| `Container` | Width-constrained wrapper (prose or wide). |
| `Prose` | Typography system for long-form content. |
| `PageShell` | Full-page layout with nav, main, and footer slots. |
| `SiteNav` | Top navigation bar with brand and links. |
| `Footer` | Site footer with copyright and links. |
| `PullQuote` | Centered, serif pull quote for key takeaways. |
| `MarginNote` | Side note that floats into the margin on wide screens. |
| `Epigraph` | Opening quote with optional citation. |
| `LinkCard` | Clickable card-style link with title and description. |

## Using Tokens Directly

For custom components that need to stay consistent with the design system:

```tsx
import { semantic as t } from '@4lt7ab/ui';

function CustomCard({ children }: { children: React.ReactNode }) {
  return (
    <div style={{
      background: t.colorSurfaceRaised,
      border: `1px solid ${t.colorBorder}`,
      borderRadius: t.radiusLg,
      padding: t.spaceLg,
    }}>
      {children}
    </div>
  );
}
```

Semantic tokens are `var(--...)` references that resolve to the active theme's values.

For rare cases where you need raw values (charts, canvas):

```tsx
import { colors, spacing } from '@4lt7ab/ui';

colors.blue600  // '#2563eb'
spacing[4]      // '1rem'
```

Prefer semantic tokens for anything rendered in the DOM.

## Development

```bash
bun install          # install dependencies
bun run typecheck    # type check
bun run build        # build to dist/
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
