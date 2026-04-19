# Forms

The library ships inputs, layout wrappers for those inputs, and four richer controls (`Select`, `Combobox`, the date pickers, and `Calendar` itself) that own their own popovers and keyboard behavior. A fifth organism — `FormLayout` — is the full-page shell: sticky action bar, dirty-state tracking, and the "are you sure you want to leave?" gate.

## Component map

| Surface | Component | Use for |
|---|---|---|
| Text entry | `Input` | Single-line text, email, password, url, tel, number, search |
| Text entry | `Textarea` | Multi-line text |
| Label + wiring | `Field` | Label, help text, error message, and `aria-describedby` wiring around any input |
| Search | `SearchInput` | Debounced text search with leading icon and trailing slot |
| Toggle | `SegmentedControl` | Mutually-exclusive choice across 2–5 short options |
| Multi-toggle | `ChipPicker` | Multi-select tag/filter picker with optional grouping |
| Dropdown | `Select.Root` | Single-value dropdown with keyboard nav and hidden native `<select>` for form submit |
| Typeahead | `Combobox.Root` | Text input with a filterable listbox — consumer owns the filter |
| Date | `DatePicker` | Single-date popover picker |
| Date range | `DateRangePicker` | Two-click range picker with hover preview |
| Date primitive | `Calendar.*` | Bring-your-own-chrome calendar compound (used internally by the pickers) |
| Page shell | `FormLayout.*` | Sectioned form with sticky save/cancel bar, dirty tracking, and navigation guard |

All of these import from `@4lt7ab/ui`.

## The input shell

`Input`, `Textarea`, `SearchInput`, `Select.Trigger`, `Combobox.Input`, `DatePicker`, and `DateRangePicker` all render through the same shared input shell — the border, radius, background, focus ring, error state, and disabled state are identical across every control. Mixing them inside a single form does not produce visual mismatch.

When a `Field` wraps any of these controls, pass `hasError` down so the shell's error border picks up. `Field` takes `label`, `help`, `error`, and `required`; the error message supplants the help text when set and is announced via `role="alert"`.

```tsx
import { Field, Input } from '@4lt7ab/ui';

<Field
  label="Email"
  help="We only use this to send receipts."
  error={errors.email}
  required
>
  <Input
    type="email"
    value={email}
    onChange={(e) => setEmail(e.target.value)}
    hasError={!!errors.email}
  />
</Field>;
```

`Field` auto-generates an `id` for the wrapped control and wires `htmlFor` on the `<label>`. If you pass an explicit `htmlFor`, also pass `id` on the child input so the link holds.

<LiveExample id="forms-input-field" />

## Text and numeric input

`Input` supports every HTML5 text-like type (`text`, `email`, `password`, `url`, `tel`, `number`, `search`) plus `pattern`, `inputMode`, `min`/`max`/`step`, and `maxLength`. It forwards a ref to the underlying `<input>`. The component does not wrap the value — controlled and uncontrolled both work via the native `value` / `defaultValue` pair.

```tsx
<Input
  type="number"
  value={quantity}
  onChange={(e) => setQuantity(Number(e.target.value))}
  min={1}
  max={99}
  step={1}
/>
```

`Textarea` is the same shape for multi-line. It renders with `resize: vertical` and a 5rem minimum height; when `disabled` it locks resize off.

```tsx
<Textarea
  value={notes}
  onChange={(e) => setNotes(e.target.value)}
  rows={4}
  maxLength={500}
/>
```

## Search

`SearchInput` is `Input` plus a built-in debounce and a leading search icon. It's controlled via `value` / `onSearch`; the callback fires after `debounceMs` of keystroke inactivity (default 300ms). The `trailing` slot lets you render a clear button, a filter toggle, or a keyboard-shortcut hint inside the input shell.

```tsx
<SearchInput
  value={query}
  onSearch={runQuery}
  placeholder="Search orders"
  debounceMs={250}
  trailing={query && (
    <IconButton
      icon="x"
      aria-label="Clear search"
      onClick={() => runQuery('')}
    />
  )}
/>
```

`runQuery` receives the debounced value. The on-screen text updates immediately; the callback lags by `debounceMs`.

<LiveExample id="forms-search-input" />

## Toggles

`SegmentedControl` is a controlled toggle across a fixed set of short options. Segments are `{ value, label, icon? }`. Keyboard nav follows the roving-tabindex pattern: Tab enters the group on the active segment, arrow keys move the selection, Home/End jump to the ends. A sliding pill indicator animates between segments (respects `prefers-reduced-motion`).

```tsx
<SegmentedControl
  segments={[
    { value: 'list', label: 'List', icon: 'list' },
    { value: 'grid', label: 'Grid', icon: 'grid' },
    { value: 'map', label: 'Map', icon: 'map' },
  ]}
  value={view}
  onChange={setView}
  aria-label="View mode"
/>
```

Size defaults to `md` (32px tall); `sm` gives you a 28px version for dense chrome.

<LiveExample id="forms-segmented-control" />

`ChipPicker` is the multi-select equivalent — toggle chips with an optional `group` name that renders a section heading above groups of chips. Controlled via `selected` / `onChange`; uncontrolled via `defaultSelected`.

```tsx
<ChipPicker
  items={[
    { value: 'bug', label: 'Bug', group: 'Type' },
    { value: 'feat', label: 'Feature', group: 'Type' },
    { value: 'high', label: 'High', group: 'Priority' },
    { value: 'low', label: 'Low', group: 'Priority' },
  ]}
  selected={tags}
  onChange={setTags}
  aria-label="Filter tags"
/>
```

<LiveExample id="forms-chip-picker" />

## Select

`Select` is a compound — `Select.Root`, `Select.Trigger`, `Select.Value`, `Select.Content`, `Select.Item`. Root owns the value state, the open/closed state, and drop-direction calculation (it measures the viewport and flips up when there's more room above the trigger). A hidden native `<select>` is rendered inside Root so the value participates in regular `<form>` submission when you pass `name`.

```tsx
<Field label="Role">
  <Select.Root value={role} onValueChange={setRole} name="role">
    <Select.Trigger aria-label="Role">
      <Select.Value placeholder="Pick one…" />
    </Select.Trigger>
    <Select.Content>
      <Select.Item value="admin">Admin</Select.Item>
      <Select.Item value="editor">Editor</Select.Item>
      <Select.Item value="viewer" disabled>Viewer (seat limit)</Select.Item>
    </Select.Content>
  </Select.Root>
</Field>
```

Keyboard:

- `ArrowDown` / `ArrowUp` open the menu and move focus
- `Home` / `End` jump to the first / last enabled item
- `Enter` / `Space` select the focused item and close
- `Escape` closes and returns focus to the trigger
- Typing a letter jumps to the next item starting with that letter (typeahead)

All `Select.*` parts forward refs. `Select.Root` accepts `value` (controlled) or `defaultValue` (uncontrolled); pair controlled mode with `onValueChange`. A legacy `onChange` handler shape is still accepted for compatibility — prefer `onValueChange` for new code.

<LiveExample id="forms-select" />

## Combobox

`Combobox` is the compound for typeahead — `Combobox.Root`, `Combobox.Input`, `Combobox.List`, `Combobox.Item`, `Combobox.Empty`. Free-text typing updates Root's value via `onValueChange`; picking an item fires `onSelect` and writes the item's `textValue` into the input.

**Consumer owns filtering.** The library does not prescribe a match algorithm — you compute the filtered list and render only the `Combobox.Item`s that match.

```tsx
const [query, setQuery] = useState('');
const filtered = countries.filter((c) =>
  c.name.toLowerCase().includes(query.toLowerCase()),
);

<Combobox.Root
  value={query}
  onValueChange={setQuery}
  onSelect={(opt) => navigate(`/country/${opt.value}`)}
>
  <Combobox.Input aria-label="Country" placeholder="Search countries…" />
  <Combobox.List>
    {filtered.length === 0 && <Combobox.Empty>No matches</Combobox.Empty>}
    {filtered.map((c) => (
      <Combobox.Item key={c.code} value={c.code} textValue={c.name}>
        {c.name}
      </Combobox.Item>
    ))}
  </Combobox.List>
</Combobox.Root>;
```

Keyboard follows the WAI-ARIA combobox pattern: focus stays on the input, `ArrowDown` / `ArrowUp` / `Home` / `End` move a visual `aria-activedescendant`, `Enter` selects, `Escape` closes. `Tab` closes the popover and advances focus to the next tab stop.

<LiveExample id="forms-combobox" />

## Dates

Three date surfaces, one underlying primitive:

- **`Calendar.*`** — the compound primitive. `Calendar.Root` owns mode, selection, focused date, and visible month; `Calendar.Header`, `Calendar.Nav`, `Calendar.Grid`, and `Calendar.Cell` compose the visible calendar. Supports `single` and `range` modes.
- **`DatePicker`** — a single-date popover that composes `Calendar.Root mode="single"` inside a trigger + popover shell. Formats the selected date into the trigger, handles outside-click dismiss, and exposes a flat `value` / `onChange` API.
- **`DateRangePicker`** — the two-click range picker with hover-preview. `onChange` receives `{ from, to }` or `undefined`.

For most consumers, reach for `DatePicker` or `DateRangePicker`. Use `Calendar.*` when you need a calendar that lives inline (no popover), a custom visual shell, or both calendars side-by-side for a comparative range.

```tsx
// Single date
<Field label="Due date">
  <DatePicker
    value={dueDate}
    onChange={setDueDate}
    minDate={new Date()}
    placeholder="Pick a date"
  />
</Field>

// Range with preset limit
<Field label="Reporting window">
  <DateRangePicker
    value={range}
    onChange={setRange}
    minDate={startOfQuarter()}
    maxDate={endOfQuarter()}
  />
</Field>
```

<LiveExample id="forms-calendar" />

<LiveExample id="forms-daterangepicker" />

All three surfaces support `minDate`, `maxDate`, and `disabledDates` (an array of specific dates, compared by day, ignoring time). `Calendar.Root` also accepts a `disabledDate` predicate for rule-based exclusion (e.g. "no weekends").

Keyboard — identical across all three, defined by `Calendar.Grid`:

- Arrow keys move focus by one day
- `Home` / `End` — start / end of the week
- `PageUp` / `PageDown` — previous / next month (Shift adds years)
- `Enter` / `Space` — commit the focused date (single) or start/end a range

## Form layout

`FormLayout.*` is the page-level shell for a sectioned form — settings screens, create/edit pages, checkout steps. One or more `FormLayout.Section`s, a sticky `FormLayout.Actions` bar, and optional dirty-state tracking with a navigation guard.

```tsx
<FormLayout.Root
  onSave={handleSave}
  onCancel={() => navigate(-1)}
  sticky="viewport"
>
  <FormLayout.Header>
    <Header level="page" title="Account settings" />
  </FormLayout.Header>

  <FormLayout.Section>
    <FormLayout.SectionHeader title="Profile" />
    <FormLayout.SectionBody>
      <Field label="Name"><Input value={name} onChange={…} /></Field>
      <Field label="Email"><Input type="email" value={email} onChange={…} /></Field>
    </FormLayout.SectionBody>
  </FormLayout.Section>

  <FormLayout.Section>
    <FormLayout.SectionHeader title="Notifications" />
    <FormLayout.SectionBody>
      <Field label="Daily digest"><SegmentedControl … /></Field>
    </FormLayout.SectionBody>
  </FormLayout.Section>

  <FormLayout.Actions>
    <FormLayout.CancelButton />
    <FormLayout.SaveButton />
  </FormLayout.Actions>

  <FormLayout.DirtyOnChange />
  <FormLayout.NavigationGuard />
</FormLayout.Root>
```

### Dirty state

Dirty-state detection is **consumer-reported**, not sniffed. Two paths:

1. **Vanilla React** — drop a `<FormLayout.DirtyOnChange />` inside Root. It listens for bubbled `change` events on its subtree and calls `setDirty(true)`. You own the reset after save.
2. **Form library (RHF / Formik / TanStack Form)** — pass `dirty={formState.isDirty}` and `onDirtyChange` to `FormLayout.Root` directly. The built-in change listener is skipped.

The `useFormLayout()` hook lets consumer components reach in and render off the current `dirty` / `saving` state — e.g. a `*` next to a changed field, or a "unsaved changes" badge outside the Actions bar.

### Actions bar

`FormLayout.Actions` is the sticky save/cancel row. Three modes on `sticky`:

- `'container'` (default) — `position: sticky` inside the form's scroll container. Works inside a modal or a `DetailPage` body.
- `'viewport'` — portals into a fixed-position container pinned to the bottom of the viewport. Right for a full-page settings screen.
- `false` — renders inline at its JSX position. Right for cards where sticky looks awkward.

`FormLayout.SaveButton` is `type="submit"` and auto-disables when `dirty` is false; it fires `onSave` via native form submission. Pressing Enter inside any non-textarea field triggers the same submit. `FormLayout.CancelButton` is `type="button"` and calls `onCancel`.

### Navigation guard

`<FormLayout.NavigationGuard />` attaches a `beforeunload` listener while `dirty` is true, triggering the browser's "Leave site?" prompt. **In-app navigation is router-specific** — the library cannot block an intra-app route change without pulling a router dependency. If you need that, listen for `dirty` via `useFormLayout()` and wire your router's block hook (React Router `useBlocker`, TanStack Router `useBlocker`, etc.) in your own component.

<LiveExample id="forms-form-layout" />

## Confirmation

`ConfirmDialog` is a modal confirmation with a title, a message, optional body content, and Cancel + Confirm buttons. Fires `onConfirm` (can be async — the confirm button goes into a loading state for in-flight promises) and `onCancel` (Cancel button, Escape, or overlay click). See the `modals` concept for the full modal system.

```tsx
<ConfirmDialog
  title="Delete project?"
  message="This cannot be undone. All 42 tasks will be archived."
  confirmLabel="Delete"
  variant="destructive"
  onConfirm={async () => { await deleteProject(id); onClose(); }}
  onCancel={onClose}
/>
```

## Validation

The library does not ship validation — consumers own error text and timing. The pattern:

1. Run your validator (Zod, Yup, hand-rolled) on change or on submit.
2. Pass the message through `Field`'s `error` prop.
3. Pass `hasError` through to the wrapped control so the border picks up the error state.

`FormLayout.Root` sets `<form noValidate>` by default so the browser's native validation bubbles don't fight your own error rendering. Flip `noValidate={false}` if you want the native bubbles back.

## Where next

- **Data display** — [Data](#/data) covers how to render the results of the form (tables, pagination, empty states).
- **Modals** — [Modals](#/modals) covers `ConfirmDialog`, `ModalShell`, and the full-screen dialog system that often hosts forms.
- **Layout** — [Layout](#/layout) covers `Stack`, `Container`, and `Field`'s surrounding page chrome.
