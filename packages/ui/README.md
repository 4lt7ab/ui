# @4lt7ab/ui

Tokens, themes, icons, and interactive UI components for React apps.

## Install

```json
{
  "dependencies": {
    "@4lt7ab/ui": "github:username/component-library#v0.1.0"
  }
}
```

Peer dependencies: `react` and `react-dom` (^19.0.0).

## Setup

Wrap your app in `ThemeProvider`:

```tsx
import { ThemeProvider, Button } from '@4lt7ab/ui';

function App() {
  return (
    <ThemeProvider defaultTheme="synthwave">
      <Button variant="primary">Click me</Button>
    </ThemeProvider>
  );
}
```

The default theme is `synthwave`. The selected theme persists to `localStorage` automatically.

## Switching Themes

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

Or use the built-in `ThemePicker` for a visual selector with theme previews:

```tsx
import { ThemePicker } from '@4lt7ab/ui';

<ThemePicker />
```

## Themes

Eight built-in themes: **synthwave**, **slate**, **warm-sand**, **moss**, **coral**, **pipboy**, **neural**, **pacman**.

### Custom Themes

Create a `ThemeDefinition` and register it with `ThemeProvider`:

```tsx
import type { ThemeDefinition } from '@4lt7ab/ui';

const myTheme: ThemeDefinition = {
  label: 'My Theme',
  tokens: {
    colorBackground: '#0a0a0a',
    colorSurface: '#1a1a1a',
    // ... all ThemeTokens properties
  },
};
```

See the built-in theme definitions in `src/themes/definitions/` for the full token interface.

## Components

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
| `ModalShell` | Modal container with header, body, footer slots. Focus trap, portal rendering, full ARIA support. |
| `ConfirmDialog` | Confirm/cancel dialog built on ModalShell. |
| `Skeleton` | Loading placeholder with shimmer animation. Compound exports: `CardSkeleton`, `RowSkeleton`. |
| `ProgressBar` | Segmented or single progress indicator. |
| `EmptyState` | Placeholder for empty lists/views. |
| `Pagination` | Page navigation controls. |
| `PageHeader` | Page title with optional actions slot. |
| `TagChip` | Removable tag/chip. |
| `ExpandableCard` | Card with collapsible content section. |
| `Table` | Compound table: `Table`, `TableHeader`, `TableHeaderCell`, `TableBody`, `TableRow`, `TableCell`, `TableGroupHeader`, `TableEmptyRow`. Default and flat variants. Supports row selection, hover, truncation, group headers, and empty states. |
| `StatusDot` | Colored dot for status indicators. Semantic variants or custom colors. |
| `ThemePicker` | Visual theme selector grid. |
| `ThemeSurface` | Themed container surface that applies background and border tokens. |

## Icons

25 built-in icons exported as named components:

```tsx
import { IconClose, IconCheck, IconSearch, IconPlus, Icon } from '@4lt7ab/ui';

// Named component
<IconSearch />

// Dynamic by name
<Icon name="search" />
```

Available: `IconClose`, `IconChevronRight`, `IconChevronDown`, `IconChevronLeft`, `IconChevronUp`, `IconCheck`, `IconCheckCircle`, `IconWarning`, `IconError`, `IconInfo`, `IconSearch`, `IconTrash`, `IconSettings`, `IconPlus`, `IconMinus`, `IconEdit`, `IconArrowLeft`, `IconArrowRight`, `IconMenu`, `IconEye`, `IconEyeOff`, `IconCopy`, `IconExternalLink`, `IconMoreVertical`, `IconFilter`.

## Token API

### Semantic Tokens

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

Semantic tokens are `var(--...)` references that resolve to the active theme's values. Prefer these for anything rendered in the DOM.

### Primitives

For rare cases where you need raw values (charts, canvas rendering):

```tsx
import { semantic } from '@4lt7ab/ui';
// Access raw primitive values via the theme definitions for canvas/chart work.
// For DOM rendering, always use semantic tokens.
```

### Typography

```tsx
import { typography } from '@4lt7ab/ui';

typography.fontSans   // font-family string
typography.fontSerif
typography.fontMono
```

## Utilities

| Export | Description |
|--------|-------------|
| `useInjectStyles` | Singleton style injection hook for CSS that requires pseudo-elements or hover states. |
| `useFocusTrap` | Focus trap hook used by ModalShell. |
