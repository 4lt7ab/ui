# @4lt7ab/ui

Icons and interactive UI components for React, built on the `@4lt7ab/core` theme platform.

## Install

```json
{
  "dependencies": {
    "@4lt7ab/core": "github:4lt7ab/ui#v0.2.0",
    "@4lt7ab/ui": "github:4lt7ab/ui#v0.2.0"
  }
}
```

Peer dependencies: `@4lt7ab/core`, `react`, `react-dom` ^19.0.0.

**Re-exports:** `@4lt7ab/ui` re-exports the entire `@4lt7ab/core` API for convenience. If you already have `@4lt7ab/ui`, you can import `ThemeProvider`, `useTheme`, `semantic`, `typography`, and `useInjectStyles` from either package.

## Setup

Wrap your app in `ThemeProvider` (from `@4lt7ab/core` or `@4lt7ab/ui`):

```tsx
import { ThemeProvider } from '@4lt7ab/ui/core';
import { Button } from '@4lt7ab/ui/ui';

function App() {
  return (
    <ThemeProvider defaultTheme="warm-sand">
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

Compound API. `Select.Root` owns state + context; the parts are the rendered DOM.

```tsx
<Select.Root value={value} onValueChange={setValue} name="role">
  <Select.Trigger aria-label="Role">
    <Select.Value placeholder="Choose one" />
  </Select.Trigger>
  <Select.Content>
    <Select.Item value="a">Option A</Select.Item>
    <Select.Item value="b" disabled>Option B</Select.Item>
  </Select.Content>
</Select.Root>
```

**`Select.Root`**

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `value` | `string` | — | Controlled selected value |
| `defaultValue` | `string` | — | Uncontrolled initial value |
| `onValueChange` | `(value: string) => void` | — | Called when the user picks a new value |
| `onChange` | `(event: { target: { value, name } }) => void` | — | Legacy-shaped handler shim. Prefer `onValueChange` |
| `disabled` | `boolean` | `false` | Disables the trigger and blocks opening |
| `hasError` | `boolean` | `false` | Applies error border styling |
| `name`, `required`, `id`, `form` | — | — | Forwarded to a hidden native `<select>` so the value participates in form submission |

**`Select.Trigger`** — `aria-label`, `aria-labelledby`, `aria-describedby`, `data-testid`, `tabIndex`; children typically `<Select.Value />`.

**`Select.Value`** — `placeholder?: string`.

**`Select.Item`** — `value: string`, `disabled?: boolean`, `textValue?: string` (explicit label for non-string children). Children are the rendered label.

See the `Select` demo for controlled / uncontrolled, error state, and rich-item examples. Migration from the pre-0.4 flat API is in the [v0.4 upgrade guide §10](#) in the knowledgebase.

### Combobox

Compound API. Typeahead select with free-text input. Consumer owns filtering — render only the `Combobox.Item` children that should be visible.

```tsx
const [value, setValue] = useState('');
const filtered = useMemo(() => {
  if (!value) return OPTIONS;
  const q = value.toLowerCase();
  return OPTIONS.filter((o) => o.label.toLowerCase().includes(q));
}, [value]);

<Combobox.Root value={value} onValueChange={setValue} onSelect={(opt) => console.log(opt)}>
  <Combobox.Input placeholder="Search..." aria-label="Fruit" />
  <Combobox.List>
    {filtered.length === 0 ? (
      <Combobox.Empty>No results.</Combobox.Empty>
    ) : (
      filtered.map((o) => (
        <Combobox.Item key={o.value} value={o.value} textValue={o.label}>
          {o.label}
        </Combobox.Item>
      ))
    )}
  </Combobox.List>
</Combobox.Root>
```

**`Combobox.Root`**

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `value` | `string` | — | Controlled input value |
| `defaultValue` | `string` | — | Uncontrolled initial input value |
| `onValueChange` | `(value: string) => void` | — | Called on every input change — typing and selection |
| `onSelect` | `(option: { value, textValue }) => void` | — | Called only when an option is picked from the list |
| `disabled` | `boolean` | `false` | Disables the input and blocks opening |
| `hasError` | `boolean` | `false` | Applies error border styling |

**`Combobox.Input`** — accepts `placeholder`, `readOnly`, `maxLength`, `inputMode`, `name`, `required`, `autoFocus`, `autoComplete`, `id`, `form`, `tabIndex`, `aria-*`, `data-testid`, `onFocus`, `onBlur`. The combobox ARIA role lives on this element.

**`Combobox.List`** — the listbox popover. Always mounted; hidden via `[hidden]` when closed.

**`Combobox.Item`** — `value: string`, `textValue?: string` (text written into the input on select; defaults to string children). Children are the rendered label.

**`Combobox.Empty`** — render inside `Combobox.List` when no items match. Skipped by keyboard navigation.

See the `Combobox` demo for the consumer-filter pattern plus `onSelect`, error, and disabled states. Migration from the pre-0.4 flat API is in the v0.4 upgrade guide §11 in the knowledgebase.

`ComboboxOption`: `{ value: string; label: string }`

Keyboard: ArrowDown/Up to navigate, Enter to select, Escape to close. ARIA combobox pattern with `aria-activedescendant`.

### DateRangePicker

Calendar-based date range selector with zero external dependencies.

```tsx
const [range, setRange] = useState<DateRange | undefined>();

<DateRangePicker
  value={range}
  onChange={setRange}
  minDate={new Date(2025, 0, 1)}
  maxDate={new Date(2025, 11, 31)}
  placeholder="Pick dates"
/>
```

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `value` | `DateRange` | — | Currently selected range (`{ from: Date; to: Date }`) |
| `onChange` | `(range: DateRange \| undefined) => void` | *required* | Called when range changes |
| `minDate` | `Date` | — | Earliest selectable date |
| `maxDate` | `Date` | — | Latest selectable date |
| `disabledDates` | `Date[]` | — | Specific dates that cannot be selected |
| `placeholder` | `string` | `'Select date range'` | Placeholder text |
| `hasError` | `boolean` | `false` | Renders error border styling |
| `disabled` | `boolean` | `false` | Disables the picker |

`DateRange`: `{ from: Date; to: Date }`

### Calendar

Compound primitive for building custom calendar UIs. `DatePicker` and `DateRangePicker` are thin compositions over this — consumers who need a different trigger, a non-popover placement, multi-month layouts, or custom cell rendering can drop down to `Calendar.*` directly.

```tsx
import { Calendar } from '@4lt7ab/ui';

const [date, setDate] = useState<Date | undefined>();

<Calendar.Root mode="single" selected={date} onSelect={(v) => setDate(v as Date | undefined)}>
  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
    <Calendar.Nav direction="prev" />
    <Calendar.Header />
    <Calendar.Nav direction="next" />
  </div>
  <Calendar.Grid />
</Calendar.Root>
```

**Primitives:**

| Component | Role | Notes |
|-----------|------|-------|
| `Calendar.Root` | State + context provider | Owns `mode`, `selected`, `focusedDate`, and `viewDate` (the visible month). Focused/view state is controlled (via `focusedDate` / `viewDate` + `on*Change`) or uncontrolled (via `defaultFocusedDate` / `defaultViewDate`). |
| `Calendar.Header` | Month/year label | Renders as a single `<span aria-live="polite">`. Optional render-prop child for custom formatting: `<Calendar.Header>{({year, month}) => …}</Calendar.Header>`. |
| `Calendar.Nav` | Month navigation button | Props: `direction: 'prev' \| 'next'`, optional `step` (defaults to `1` month; pass `12` for year-jump). Renders as an `IconButton` with a chevron. |
| `Calendar.Grid` | 6×7 day grid | `role="grid"`. Owns keyboard nav, roving tabindex, and auto-scrolls `viewDate` when focus crosses a month boundary. Accepts optional `onEscape` for picker contexts and a children render-prop for custom cell rendering. |
| `Calendar.Cell` | Single day cell | Default renderer used by `Calendar.Grid`. Also usable standalone inside the render-prop. Pass-through props for `onMouseEnter` / `onMouseLeave` / `onFocus` / `onBlur` support range-preview and similar patterns. |

**`Calendar.Root` props:**

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `mode` | `'single' \| 'range'` | `'single'` | Selection mode |
| `selected` | `Date \| { from: Date; to: Date } \| undefined` | — | Current selection. Shape depends on `mode` |
| `onSelect` | `(value) => void` | — | Fired when a cell commits (`Enter` / `Space` / click) |
| `minDate` / `maxDate` | `Date` | — | Inclusive bounds |
| `disabledDate` | `(date: Date) => boolean` | — | Per-date disable predicate |
| `focusedDate` / `defaultFocusedDate` | `Date` | today | Roving tabindex target (controlled / uncontrolled) |
| `onFocusedDateChange` | `(d: Date) => void` | — | Fires whenever focus moves |
| `viewDate` / `defaultViewDate` | `Date` | focused date | Visible month's first day (controlled / uncontrolled) |
| `onViewDateChange` | `(d: Date) => void` | — | Fires when the visible month changes |

**Keyboard (on `Calendar.Grid`):** WAI-ARIA APG *grid* pattern.

| Key | Action |
|-----|--------|
| `ArrowLeft` / `ArrowRight` | Move focus ±1 day |
| `ArrowUp` / `ArrowDown` | Move focus ±1 week |
| `Home` / `End` | Move focus to Sunday / Saturday of the focused row |
| `PageUp` / `PageDown` | Move focus ±1 month |
| `Shift + PageUp` / `Shift + PageDown` | Move focus ±1 year |
| `Enter` / `Space` | Commit the focused date via `onSelect` |
| `Escape` | Calls `onEscape` if provided (picker popovers use this to close) |

When focus crosses a month boundary (e.g. `ArrowDown` on the last April row), `Calendar.Grid` automatically scrolls `viewDate` so the focused cell stays visible.

**ARIA:**

- `Calendar.Grid` is `role="grid"` with configurable `aria-label` (defaults to `"Calendar"`).
- Each `Calendar.Cell` wraps a `<button>` in a `<td role="gridcell">`. The button uses `aria-selected`, `aria-disabled`, and a roving `tabindex` (`0` for the focused cell, `-1` otherwise).
- `Calendar.Header` renders as `<span aria-live="polite">` so month changes are announced.

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
<Badge color="#6366f1">Running</Badge>
```

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `variant` | `'default' \| 'success' \| 'warning' \| 'error' \| 'info'` | `'default'` | Color variant |
| `color` | `string` | — | Custom CSS color override. When provided, variant styling is ignored. |

Extends `HTMLAttributes<HTMLSpanElement>`.

### Icon

Renders an icon from the built-in registry, or falls back to an icon font when the name is unregistered and a `fontClass` is available.

```tsx
{/* Built-in SVG icon */}
<Icon name="search" size={20} />

{/* Icon-font icon (e.g. Material Symbols) */}
<Icon name="home" fontClass="material-symbols-outlined" />
```

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `name` | `IconName \| string` | *required* | Icon to render (registry name or icon-font name) |
| `size` | `number` | `24` | Width and height in pixels |
| `fontClass` | `string` | — | CSS class for icon-font rendering (falls back to `IconFontProvider` context) |

#### IconFontProvider

Sets a default `fontClass` for all descendant `Icon` and `IconButton` components so you don't have to pass it on every instance.

```tsx
import { IconFontProvider, Icon } from '@4lt7ab/ui/ui';

<IconFontProvider fontClass="material-symbols-outlined">
  <Icon name="home" />     {/* renders via font */}
  <Icon name="search" />   {/* still renders built-in SVG */}
</IconFontProvider>
```

### IconButton

Icon-only button with accessible label. Optionally shows a notification dot. Supports both built-in and icon-font icons.

```tsx
<IconButton icon="settings" aria-label="Open settings" />
<IconButton icon="menu" aria-label="Menu" badge />
<IconButton icon="home" fontClass="material-symbols-outlined" aria-label="Home" />
```

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `icon` | `IconName \| string` | *required* | Icon to render (registry name or icon-font name) |
| `size` | `number` | `24` | Icon dimensions in pixels |
| `badge` | `boolean` | `false` | Shows a red notification dot |
| `fontClass` | `string` | — | CSS class for icon-font rendering (passed through to Icon) |
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

### ErrorBoundary

React error boundary with themed fallback UI. Catches render errors in its subtree and displays an error message with optional stack trace and retry button.

```tsx
<ErrorBoundary onError={(err, info) => logError(err)}>
  <MyComponent />
</ErrorBoundary>

{/* With custom fallback */}
<ErrorBoundary
  fallback={({ error, resetErrorBoundary }) => (
    <div>
      <p>Error: {error.message}</p>
      <button onClick={resetErrorBoundary}>Retry</button>
    </div>
  )}
>
  <MyComponent />
</ErrorBoundary>
```

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `fallback` | `(props: { error: Error; resetErrorBoundary: () => void }) => ReactNode` | themed UI | Custom fallback renderer |
| `onError` | `(error: Error, errorInfo: ErrorInfo) => void` | — | Error callback for logging |

### Toast

Ephemeral notification system with stacked, auto-dismissing messages. Provides a context-based API via `ToastProvider` and `useToast`.

```tsx
import { ToastProvider, useToast } from '@4lt7ab/ui/ui';

function App() {
  return (
    <ToastProvider position="top-right">
      <MyPage />
    </ToastProvider>
  );
}

function MyPage() {
  const { showToast } = useToast();

  return (
    <>
      <button onClick={() => showToast('Saved!', 'success')}>Save</button>
      <button onClick={() => showToast('Oops!', 'error')}>Fail</button>
      <button onClick={() => showToast('Heads up', { type: 'warning', duration: 8000 })}>
        Long warning
      </button>
    </>
  );
}
```

| Export | Type | Description |
|--------|------|-------------|
| `ToastProvider` | Component | Context provider. Wrap your app once. |
| `useToast` | Hook | Returns `{ showToast }` for triggering toasts |

**`ToastProvider` props:**

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `children` | `ReactNode` | — | Application content |
| `position` | `'top-right' \| 'top-left' \| 'bottom-right' \| 'bottom-left'` | `'top-right'` | Screen position of toast stack |

**`showToast(message, typeOrOptions?)`:**

| Param | Type | Default | Description |
|-------|------|---------|-------------|
| `message` | `string` | — | Toast text content |
| `typeOrOptions` | `ToastType \| ShowToastOptions` | `'info'` | Type string or options object with `type` and `duration` |

Toast types: `'success'`, `'error'`, `'info'`, `'warning'`. Default auto-dismiss: 4 seconds. Animations respect `prefers-reduced-motion`. Container uses `aria-live="polite"`.

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

### Header

Unified page/section heading. Replaces the retired `PageHeader` and `SectionHeader`.

```tsx
<Header
  level="page"
  title="Dashboard"
  subtitle="Overview of your projects"
  trailing={<Button size="sm">New Project</Button>}
/>
```

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `title` | `string` | *required* | Primary heading |
| `level` | `'page' \| 'section'` | `'section'` | Heading scale. `page` renders h1 in bold; `section` renders a smaller h2 |
| `subtitle` | `string` | — | Secondary text in muted style |
| `indicator` | `ReactNode` | — | Inline content next to the title (Badge, StatusDot, Icon) |
| `trailing` | `ReactNode` | — | Right-aligned content (actions, SearchInput) |

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

### TableFilters

Declarative filter bar for pairing with Table. Accepts a filter config array describing text inputs (debounced) and select dropdowns. Controlled via `values` and `onChange`.

```tsx
<TableFilters
  filters={[
    { type: 'text', key: 'title', placeholder: 'Search\u2026', debounceMs: 300 },
    { type: 'select', key: 'status', placeholder: 'All', options: [
      { value: '', label: 'All' },
      { value: 'active', label: 'Active' },
    ]},
  ]}
  values={filterValues}
  onChange={setFilterValues}
/>
```

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `filters` | `FilterConfig[]` | *required* | Ordered filter definitions |
| `values` | `Record<string, string>` | *required* | Current values keyed by filter key |
| `onChange` | `(values: Record<string, string>) => void` | *required* | Called with updated values on change |

**FilterConfig** is a union of `TextFilterConfig` and `SelectFilterConfig`:

- `TextFilterConfig`: `{ type: 'text'; key: string; placeholder?: string; debounceMs?: number }` (default debounce 300ms)
- `SelectFilterConfig`: `{ type: 'select'; key: string; placeholder?: string; options: Array<{ value: string; label: string }> }`

### ChipPicker

Multi-select toggle chip group with optional category grouping. Each chip is a pill-shaped button with `aria-pressed` for accessibility.

```tsx
const [selected, setSelected] = useState<string[]>([]);

<ChipPicker
  items={[
    { value: 'react', label: 'React', group: 'Frameworks' },
    { value: 'vue', label: 'Vue', group: 'Frameworks' },
    { value: 'ts', label: 'TypeScript', group: 'Languages' },
  ]}
  selected={selected}
  onChange={setSelected}
/>
```

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `items` | `ChipItem[]` | *required* | Available chip options |
| `selected` | `string[]` | *required* | Currently selected values (controlled) |
| `onChange` | `(selected: string[]) => void` | *required* | Called with updated selection |
| `style` | `CSSProperties` | — | Additional inline styles |

`ChipItem`: `{ value: string; label: string; group?: string }`

When items have a `group` set, they render under uppercase section headings (using `sectionLabelStyle`). Ungrouped items render first.

### SearchInput

Debounced text input with a leading search icon and an optional trailing slot for inline controls.

```tsx
const [query, setQuery] = useState('');

<SearchInput
  value={query}
  onSearch={setQuery}
  debounceMs={300}
  placeholder="Search..."
  trailing={<SegmentedControl size="sm" segments={[...]} value={mode} onChange={setMode} />}
/>
```

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `value` | `string` | *required* | Current search value (controlled) |
| `onSearch` | `(value: string) => void` | *required* | Debounced search callback |
| `debounceMs` | `number` | `300` | Debounce delay in milliseconds |
| `placeholder` | `string` | `'Search...'` | Input placeholder text |
| `trailing` | `ReactNode` | — | Content rendered inside the input on the right |

Extends `InputHTMLAttributes<HTMLInputElement>` (minus `onChange`). The input maintains local state for instant keystroke feedback and debounces the `onSearch` callback.

### SegmentedControl

Generic segmented toggle with a sliding pill indicator. Supports text, icon, or icon+text segments.

```tsx
<SegmentedControl
  segments={[
    { value: 'list', label: 'List' },
    { value: 'grid', label: 'Grid', icon: 'menu' },
  ]}
  value={view}
  onChange={setView}
/>
```

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `segments` | `Segment[]` | *required* | Segment definitions |
| `value` | `string` | *required* | Currently selected segment value |
| `onChange` | `(value: string) => void` | *required* | Called when a segment is selected |
| `size` | `'sm' \| 'md'` | `'md'` | Control size |

`Segment`: `{ value: string; label: string; icon?: IconName | string }`

Each segment button has `aria-pressed` for accessibility. The sliding indicator uses CSS transitions and respects `prefers-reduced-motion`. Small enough to fit inside SearchInput's `trailing` slot.

### sectionLabelStyle

Exported `CSSProperties` object (not a component) for uppercase section headings. Spread onto any element.

```tsx
import { sectionLabelStyle } from '@4lt7ab/ui';

<span style={sectionLabelStyle}>Dependencies</span>
<div style={{ ...sectionLabelStyle, color: semantic.colorActionPrimary }}>Custom</div>
```

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

Theme selector wired into `useTheme()`. Two variants:

- **`grid`** (default) -- card grid for settings pages and theme playgrounds.
- **`compact`** -- dropdown button for toolbars and headers with keyboard navigation.

```tsx
{/* Full grid for a settings page */}
<ThemePicker descriptions={{ synthwave: 'Neon retro', slate: 'Clean and minimal' }} />

{/* Compact dropdown for a toolbar */}
<ThemePicker variant="compact" />
```

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `variant` | `'grid' \| 'compact'` | `'grid'` | Display variant |
| `descriptions` | `Record<string, string>` | — | Optional per-theme descriptions (grid variant only) |

---

## Retired in 0.3.0

The 0.3.0 surface and modal consolidation retired four components.

- **`ThemeSurface`** — replaced by `usePageBackground()` in `@4lt7ab/core` for global page background, or `<Surface level="page">` for a scoped equivalent.
- **`StatCard`** — retired as a `<Surface>` composition.
- **`FormModal`** — retired as a documented composition over `ModalShell`; `modalHeadingStyle` and `modalFooterStyle` are exported directly from `@4lt7ab/ui`. See the `ModalShellFormPattern` demo.
- **`ShortcutHelpModal`** — retired; consumers own their data shape and `<kbd>` styling.

---

## Icons

25 built-in icons, usable as named components or dynamically via the `Icon` component:

```tsx
import { IconSearch, IconCheck, Icon } from '@4lt7ab/ui/ui';

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
import { semantic as t } from '@4lt7ab/ui/core'; // or from '@4lt7ab/ui/ui'

const style = {
  background: t.colorSurfaceRaised,
  border: `1px solid ${t.colorBorder}`,
  borderRadius: t.radiusLg,
  padding: t.spaceLg,
};
```

### Typography

```tsx
import { typography } from '@4lt7ab/ui/core'; // or from '@4lt7ab/ui/ui'

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
