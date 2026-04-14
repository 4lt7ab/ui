# @4lt7ab/core

Theme platform for React. Provides the token layer, theme system, and utilities that `@4lt7ab/ui`, `@4lt7ab/content`, and `@4lt7ab/animations` are built on.

## Install

```json
{
  "dependencies": {
    "@4lt7ab/core": "github:4lt7ab/ui#v0.2.0"
  }
}
```

Peer dependencies: `react` and `react-dom` ^19.0.0.

## Setup

Wrap your app in `ThemeProvider`:

```tsx
import { ThemeProvider } from '@4lt7ab/ui/core';

function App() {
  return (
    <ThemeProvider defaultTheme="warm-sand">
      {/* Your app */}
    </ThemeProvider>
  );
}
```

The selected theme persists to `localStorage` automatically.

---

## useTheme

Access the current theme and switch themes at runtime:

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

---

## Token API

### Semantic Tokens

CSS custom property references that resolve to the active theme. Use these when building components:

```tsx
import { semantic as t } from '@4lt7ab/ui/core';

const style = {
  background: t.colorSurface,       // card/panel background
  color: t.colorText,               // primary text
  border: `1px solid ${t.colorBorder}`,
  borderRadius: t.radiusMd,
  padding: t.spaceMd,
};
```

These are `var(--...)` references, not hard-coded values. They resolve at runtime based on the active theme.

### Typography

```tsx
import { typography } from '@4lt7ab/ui/core';

typography.fontSans   // sans-serif font-family
typography.fontSerif  // serif font-family
typography.fontMono   // monospace font-family
```

---

## Built-in Themes

Eight themes are included:

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

---

## Custom Themes

Create a theme by implementing the `ThemeDefinition` type:

```tsx
import type { ThemeDefinition } from '@4lt7ab/ui/core';

const myTheme: ThemeDefinition = {
  name: 'my-theme',
  label: 'My Theme',
  tokens: {
    colorBackground: '#0a0a0f',
    colorSurface: '#12121a',
    colorText: '#e0e0e0',
    colorBorder: '#2a2a3a',
    // ... all ThemeTokens fields
  },
};
```

Register custom themes by passing an array to `ThemeProvider`:

```tsx
<ThemeProvider
  defaultTheme="my-theme"
  themes={[myTheme]}
>
  {/* Your app */}
</ThemeProvider>
```

See the built-in theme definitions in `src/themes/definitions/` for complete examples of the `ThemeTokens` interface.

---

## Built-in Keyframes

ThemeProvider automatically injects common keyframe animations so consumers don't need to define them:

| Keyframe | Purpose | Reduced motion |
|----------|---------|----------------|
| `spin` | Loading spinners (continuous 360deg rotation) | Always available (functional) |
| `fade-in-up` | Enter animations (opacity + translateY) | Falls back to opacity-only fade |

Use them directly in CSS or reference the exported constants:

```tsx
import { KEYFRAMES } from '@4lt7ab/ui/core';

const style = {
  animation: `${KEYFRAMES.spin} 1s linear infinite`,
};
```

Keyframes are injected once via `useInjectStyles` and deduplicated across multiple ThemeProvider instances.

---

## useInjectStyles

Singleton style injection hook for CSS that requires pseudo-elements, hover states, or other features that can't be expressed with inline styles:

```tsx
import { useInjectStyles } from '@4lt7ab/ui/core';

function MyComponent() {
  useInjectStyles('my-component', `
    .my-component a:hover {
      color: var(--color-accent);
    }
  `);

  return <div className="my-component">...</div>;
}
```

Styles are injected once per unique ID regardless of how many instances mount.

---

## Building on Core

Third-party component libraries can depend on `@4lt7ab/core` to get the full theme platform without pulling in any UI components:

1. Add `@4lt7ab/core` as a peer dependency
2. Import `semantic` tokens for all visual values
3. Use `useTheme` to respond to theme changes
4. Use `useInjectStyles` for CSS that needs pseudo-elements or hover states

Components built on core will automatically work with any theme -- built-in or custom.
