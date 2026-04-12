# @4lt7ab/ui

Icons and interactive UI components for React, built on the `@4lt7ab/core` theme platform.

## Install

```json
{
  "dependencies": {
    "@4lt7ab/core": "github:4lt7ab/ui#v0.1.0",
    "@4lt7ab/ui": "github:4lt7ab/ui#v0.1.0"
  }
}
```

Peer dependencies: `@4lt7ab/core`, `react`, `react-dom` ^19.0.0.

**Re-exports:** `@4lt7ab/ui` re-exports the entire `@4lt7ab/core` API for convenience. If you already have `@4lt7ab/ui`, you can import `ThemeProvider`, `useTheme`, `semantic`, `typography`, and `useInjectStyles` from either package.

## Setup

Wrap your app in `ThemeProvider` (from `@4lt7ab/core` or `@4lt7ab/ui`):

```tsx
import { ThemeProvider } from '@4lt7ab/core';
import { Button } from '@4lt7ab/ui';

function App() {
  return (
    <ThemeProvider defaultTheme="synthwave">
      <Button variant="primary">Click me</Button>
    </ThemeProvider>
  );
}
```

The selected theme persists to `localStorage` automatically.

---

## Components

### Button

Primary action trigger with variant and size options.

```tsx
<Button variant="primary" size="md">Save</Button>
<Button variant="destructive">Delete</Button>
<Button variant="ghost" size="sm">Cancel</Button>
```

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `variant` | `'primary' \| 'secondary' \| 'destructive' \| 'ghost'` | `'primary'` | Visual style |
| `size` | `'sm' \| 'md' \| 'lg'` | `'md'` | Controls padding and font size |

Extends `ButtonHTMLAttributes<HTMLButtonElement>`.

### Card

Content container with surface styling.

```tsx
<Card variant="elevated" padding="lg">
  <h2>Title</h2>
  <p>Card content.</p>
</Card>
```

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `variant` | `'default' \| 'flat' \| 'elevated'` | `'default'` | Visual treatment |
| `padding` | `'xs' \| 'sm' \| 'md' \| 'lg' \| 'xl' \| '2xl'` | `'lg'` | Inner padding |

Extends `HTMLAttributes<HTMLDivElement>`.

### Stack

Flex layout primitive with gap and direction.

```tsx
<Stack direction="horizontal" gap="md" align="center">
  <Button>One</Button>
  <Button>Two</Button>
</Stack>
```

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `direction` | `'vertical' \| 'horizontal'` | `'vertical'` | Stack axis |
| `gap` | `'xs' \| 'sm' \| 'md' \| 'lg' \| 'xl' \| '2xl'` | `'md'` | Space between children |
| `align` | `CSSProperties['alignItems']` | — | Cross-axis alignment |
| `justify` | `CSSProperties['justifyContent']` | — | Main-axis alignment |
| `wrap` | `boolean` | `false` | Whether children wrap on overflow |

Extends `HTMLAttributes<HTMLDivElement>`.

### Input

Text input with theme-aware styling.

```tsx
<Input placeholder="Email" hasError={!!errors.email} />
```

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `hasError` | `boolean` | `false` | Renders error border styling |

Extends `InputHTMLAttributes<HTMLInputElement>`.

### Textarea

Multi-line text input.

```tsx
<Textarea rows={4} hasError={!!errors.bio} />
```

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `hasError` | `boolean` | `false` | Renders error border styling |

Extends `TextareaHTMLAttributes<HTMLTextAreaElement>`.

### Select

Dropdown select with options or custom children.

```tsx
<Select
  options={[
    { value: 'a', label: 'Option A' },
    { value: 'b', label: 'Option B', disabled: true },
  ]}
  placeholder="Choose one"
/>
```

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `options` | `SelectOption[]` | — | Options to render (ignored when children provided) |
| `children` | `ReactNode` | — | Custom option/optgroup elements |
| `placeholder` | `string` | — | Shown as a disabled first option |
| `hasError` | `boolean` | `false` | Renders error border styling |

`SelectOption`: `{ value: string; label: string; disabled?: boolean }`

### Field

Label + input wrapper with error and help text.

```tsx
<Field label="Email" htmlFor="email" error={errors.email} required>
  <Input id="email" hasError={!!errors.email} />
</Field>
```

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `label` | `string` | *required* | Label text above the input |
| `htmlFor` | `string` | — | Associates the label with the input |
| `error` | `string` | — | Error message (triggers error state) |
| `help` | `string` | — | Help text below input (hidden when error is set) |
| `required` | `boolean` | `false` | Shows red asterisk on the label |
| `disabled` | `boolean` | `false` | Reduces field opacity |

### Badge

Status indicator label.

```tsx
<Badge variant="success">Active</Badge>
<Badge variant="error">Failed</Badge>
```

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `variant` | `'default' \| 'success' \| 'warning' \| 'error' \| 'info'` | `'default'` | Color variant |

Extends `HTMLAttributes<HTMLSpanElement>`.

### Icon

Renders an icon from the built-in registry.

```tsx
<Icon name="search" size={20} />
```

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `name` | `IconName` | *required* | Icon to render |
| `size` | `number` | `24` | Width and height in pixels |

### IconButton

Icon-only button with accessible label. Optionally shows a notification dot.

```tsx
<IconButton icon="settings" aria-label="Open settings" />
<IconButton icon="menu" aria-label="Menu" badge />
```

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `icon` | `IconName` | *required* | Icon to render |
| `size` | `number` | `24` | Icon dimensions in pixels |
| `badge` | `boolean` | `false` | Shows a red notification dot |
| `aria-label` | `string` | *required* | Accessible label |

Extends `ButtonHTMLAttributes<HTMLButtonElement>`.

### Overlay

Backdrop layer for modals and drawers.

```tsx
<Overlay onClick={handleClose} zIndex={100} />
```

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `onClick` | `() => void` | — | Called when overlay is clicked |
| `zIndex` | `number` | `100` | CSS z-index |
| `style` | `CSSProperties` | — | Additional inline styles |

### ModalShell

Modal container with focus trapping, portal rendering, and ARIA support. Provides the structural shell — you supply the content.

```tsx
<ModalShell onClose={handleClose} maxWidth={600} titleId="dialog-title">
  <h2 id="dialog-title">Edit Profile</h2>
  <p>Modal body content.</p>
  <Button onClick={handleClose}>Done</Button>
</ModalShell>
```

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `onClose` | `() => void` | *required* | Called on Escape key or overlay click |
| `maxWidth` | `number` | `480` | Maximum panel width in pixels |
| `zIndex` | `number` | `200` | Base z-index (panel renders at zIndex + 1) |
| `titleId` | `string` | — | ID of the labelling element (aria-labelledby) |
| `aria-label` | `string` | — | Alternative to titleId |
| `role` | `'dialog' \| 'alertdialog'` | `'dialog'` | ARIA role |
| `style` | `CSSProperties` | — | Additional styles for the panel |

### ConfirmDialog

Confirm/cancel dialog built on ModalShell. Handles the async confirm flow.

```tsx
<ConfirmDialog
  title="Delete item?"
  message="This action cannot be undone."
  variant="destructive"
  confirmLabel="Delete"
  onConfirm={async () => { await deleteItem(); }}
  onCancel={handleClose}
/>
```

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `title` | `string` | *required* | Dialog heading |
| `message` | `string` | *required* | Explanatory text |
| `confirmLabel` | `string` | `'Confirm'` | Confirm button text |
| `variant` | `'destructive' \| 'info' \| 'warning'` | `'destructive'` | Confirm button color |
| `onConfirm` | `() => Promise<void> \| void` | *required* | Called on confirm (can be async) |
| `onCancel` | `() => void` | *required* | Called on cancel |
| `children` | `ReactNode` | — | Custom content between message and buttons |

### Skeleton

Loading placeholder with shimmer animation. Includes two prebuilt variants.

```tsx
<Skeleton width={200} height={16} />
<CardSkeleton />
<RowSkeleton />
```

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `width` | `string \| number` | `'100%'` | Skeleton width (numbers = pixels) |
| `height` | `string \| number` | `16` | Skeleton height (numbers = pixels) |
| `borderRadius` | `string` | token default | Border radius |

`CardSkeleton` and `RowSkeleton` accept only `style`.

### ProgressBar

Segmented or single progress indicator.

```tsx
<ProgressBar
  segments={[
    { value: 60, color: semantic.colorSuccess, label: 'Complete' },
    { value: 20, color: semantic.colorWarning, label: 'In Progress' },
  ]}
  height={8}
/>
```

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `segments` | `ProgressBarSegment[]` | *required* | Segments to display |
| `height` | `number` | `6` | Bar height in pixels |
| `aria-label` | `string` | — | Accessible label |

`ProgressBarSegment`: `{ value: number; color: string; label?: string }`

### EmptyState

Placeholder for empty lists or views.

```tsx
<EmptyState
  icon="search"
  message="No results found"
  action={<Button variant="secondary">Clear filters</Button>}
/>
```

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `icon` | `IconName` | *required* | Icon above the message |
| `message` | `string` | *required* | Primary message |
| `variant` | `'plain' \| 'card'` | `'plain'` | Container style |
| `action` | `ReactNode` | — | CTA slot below the message |
| `children` | `ReactNode` | — | Additional content below message |

### Pagination

Page navigation controls.

```tsx
<Pagination
  page={currentPage}
  totalPages={10}
  total={97}
  onPageChange={setCurrentPage}
/>
```

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `page` | `number` | *required* | Current page (1-based) |
| `totalPages` | `number` | *required* | Total pages |
| `total` | `number` | *required* | Total items across all pages |
| `onPageChange` | `(page: number) => void` | *required* | Page change handler |
| `labels` | `PaginationLabels` | — | Custom text for prev/next/page-of |

### PageHeader

Page title with optional subtitle and trailing action slot.

```tsx
<PageHeader
  title="Dashboard"
  subtitle="Overview of your projects"
  trailing={<Button size="sm">New Project</Button>}
  level={1}
/>
```

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `title` | `string` | *required* | Primary heading |
| `subtitle` | `string` | — | Secondary text in muted style |
| `trailing` | `ReactNode` | — | Right-aligned content (actions) |
| `level` | `1 \| 2 \| 3 \| 4 \| 5 \| 6` | `2` | HTML heading level |

### TagChip

Removable tag/chip.

```tsx
<TagChip name="React" onRemove={() => removeTag('React')} />
<TagChip name="TypeScript" />
```

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `name` | `string` | *required* | Tag display text |
| `onRemove` | `() => void` | — | When provided, renders a close button |

### ExpandableCard

Card with a collapsible content section. Works controlled or uncontrolled.

```tsx
<ExpandableCard title="Advanced Settings" defaultOpen={false}>
  <p>Hidden content revealed on toggle.</p>
</ExpandableCard>
```

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `title` | `string` | *required* | Header text |
| `defaultOpen` | `boolean` | `false` | Initial state (uncontrolled) |
| `open` | `boolean` | — | Controlled open state |
| `onToggle` | `(open: boolean) => void` | — | Called when state changes |
| `variant` | `CardVariant` | `'default'` | Underlying Card variant |
| `headerAction` | `ReactNode` | — | Content in the header row, right of title |

### Table

Compound table component supporting row selection, hover states, group headers, and empty states.

```tsx
<Table variant="default" density="md">
  <TableHeader>
    <TableHeaderCell width={200}>Name</TableHeaderCell>
    <TableHeaderCell align="right">Count</TableHeaderCell>
  </TableHeader>
  <TableBody>
    <TableRow hoverable>
      <TableCell>Item A</TableCell>
      <TableCell align="right" muted>42</TableCell>
    </TableRow>
    <TableGroupHeader colSpan={2}>Section</TableGroupHeader>
    <TableEmptyRow colSpan={2}>No data</TableEmptyRow>
  </TableBody>
</Table>
```

**Table**

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `variant` | `'default' \| 'flat'` | `'default'` | Visual treatment |
| `density` | `'xs' \| 'sm' \| 'md' \| 'lg'` | `'md'` | Cell padding |

**TableHeaderCell**

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `align` | `'left' \| 'center' \| 'right'` | `'left'` | Text alignment |
| `width` | `number \| string` | — | Fixed column width |

**TableRow**

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `selected` | `boolean` | `false` | Highlights with raised background and accent border |
| `hoverable` | `boolean` | `false` | Enables hover background |

**TableCell**

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `align` | `'left' \| 'center' \| 'right'` | `'left'` | Text alignment |
| `truncate` | `boolean` | `false` | Truncates text with ellipsis |
| `muted` | `boolean` | `false` | Muted text color |
| `width` | `number \| string` | — | Fixed column width |

**TableGroupHeader** and **TableEmptyRow** both require a `colSpan` number.

### StatusDot

Colored dot for status indicators.

```tsx
<StatusDot variant="success" />
<StatusDot color="#ff00ff" size={12} />
```

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `variant` | `'default' \| 'success' \| 'warning' \| 'error' \| 'info'` | `'default'` | Semantic color |
| `color` | `string` | — | Raw color override (takes precedence) |
| `size` | `number` | `8` | Dot diameter in pixels |
| `aria-label` | `string` | — | Accessible status description |

### ThemePicker

Visual theme selector grid with color previews.

```tsx
<ThemePicker descriptions={{ synthwave: 'Neon retro', slate: 'Clean and minimal' }} />
```

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `descriptions` | `Record<string, string>` | — | Optional per-theme descriptions |

### ThemeSurface

Themed container that applies background and border tokens. Use it to layer content above canvas animations.

```tsx
<ThemeSurface>
  <p>Content on a themed surface.</p>
</ThemeSurface>

{/* Or apply theme background to the whole page: */}
<ThemeSurface global />
```

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `global` | `boolean` | `false` | When true, applies background to `document.body` instead of rendering a div |
| `style` | `CSSProperties` | — | Inline styles (only used when `global` is false) |

---

## Icons

25 built-in icons, usable as named components or dynamically via the `Icon` component:

```tsx
import { IconSearch, IconCheck, Icon } from '@4lt7ab/ui';

<IconSearch />
<Icon name="search" size={20} />
```

**Available icons:** `close`, `chevron-right`, `chevron-down`, `chevron-left`, `chevron-up`, `check`, `check-circle`, `warning`, `error`, `info`, `search`, `trash`, `settings`, `plus`, `minus`, `edit`, `arrow-left`, `arrow-right`, `menu`, `eye`, `eye-off`, `copy`, `external-link`, `more-vertical`, `filter`.

---

## Token API

These are re-exported from `@4lt7ab/core`. See the [core README](../core/README.md) for full documentation.

### Semantic Tokens

CSS custom property references that resolve to the active theme. Use these for custom components:

```tsx
import { semantic as t } from '@4lt7ab/core'; // or from '@4lt7ab/ui'

const style = {
  background: t.colorSurfaceRaised,
  border: `1px solid ${t.colorBorder}`,
  borderRadius: t.radiusLg,
  padding: t.spaceLg,
};
```

### Typography

```tsx
import { typography } from '@4lt7ab/core'; // or from '@4lt7ab/ui'

typography.fontSans   // sans-serif font-family
typography.fontSerif  // serif font-family
typography.fontMono   // monospace font-family
```

---

## Utilities

| Export | Description |
|--------|-------------|
| `useInjectStyles` | Singleton style injection for CSS requiring pseudo-elements or hover states. Scoped by unique ID. |
| `useFocusTrap` | Focus trap hook (used internally by ModalShell). |
