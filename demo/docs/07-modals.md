# Modals

Interruption surfaces. Every component in this concept takes focus away from (or overlays) the page a consumer is already on. That's a load-bearing decision — the library owns focus trapping, Escape, overlay dismiss, ARIA roles, and portal placement so every dialog in a consuming app behaves identically.

## Component map

| Surface | Component | Use for |
|---|---|---|
| Backdrop | `Overlay` | Full-screen semi-transparent layer behind any custom modal |
| Modal primitive | `ModalShell` | Centered dialog panel with overlay, focus trap, Escape/overlay dismiss |
| Confirm dialog | `ConfirmDialog` | Modal with title + message + Cancel/Confirm (supports async confirm) |
| Cmd+K palette | `CommandPalette.*` | Filterable command launcher with keyboard shortcut activation |
| Stepper dialog | `WizardDialog.*` | Multi-step modal with progress indicator and Back/Next/Finish |
| Toast notifications | `ToastProvider` + `useToast` | Non-blocking stacked messages with auto-dismiss |
| Full-width alert | `AlertBanner` | In-page notification with severity variants and optional dismiss |
| Error containment | `ErrorBoundary` | Catches render errors in a subtree and renders a recoverable fallback |
| Shared styles | `modalHeadingStyle`, `modalFooterStyle` | CSS objects for consumers building custom modals on `ModalShell` |

All import from `@4lt7ab/ui`.

## Pick the right surface

- **Needs a decision before the user proceeds** — `ConfirmDialog`.
- **A full form or detail view that disrupts flow** — `ModalShell` with your own composition (see below).
- **Multi-step flow that shouldn't lose progress** — `WizardDialog.*`.
- **Command-palette / Cmd+K launcher** — `CommandPalette.*`.
- **Transient status message after an action** — `useToast()`.
- **Persistent in-page notification** (e.g. trial expiring, data stale) — `AlertBanner`.
- **A bare custom overlay** — `Overlay` alone, then compose.

## Overlay

The full-screen backdrop. Rendered behind everything else in this concept; also exported standalone for drawers, custom lightboxes, or anywhere a consumer needs the library's overlay token.

```tsx
<Overlay onClick={onClose} zIndex="var(--z-index-sticky)" />
```

`onClick` is the dismiss affordance — the modal components wire it to their `onClose` automatically. `zIndex` defaults to `t.zIndexSticky`; `ModalShell` raises it to `t.zIndexModal`.

## ModalShell

The primitive every non-toast modal builds on. Centered panel with backdrop overlay, focus trap, auto-focus into the panel on mount, focus restoration on unmount, Escape-to-close, and overlay-click-to-close.

```tsx
import { ModalShell, modalHeadingStyle, modalFooterStyle, Button } from '@4lt7ab/ui';

<ModalShell onClose={onClose} width="md" titleId="rename-title">
  <h2 id="rename-title" style={modalHeadingStyle}>Rename project</h2>
  <Field label="New name">
    <Input autoFocus value={name} onChange={(e) => setName(e.target.value)} />
  </Field>
  <div style={modalFooterStyle}>
    <Button onClick={onClose}>Cancel</Button>
    <Button variant="primary" onClick={save}>Save</Button>
  </div>
</ModalShell>;
```

### Props

- `onClose` *(required)* — fires on Escape and on overlay click. The component is uncontrolled on open/close; consumers unmount it to close.
- `width` — `'sm' | 'md' | 'lg' | 'xl'`. Default `'md'`.
- `zIndex` — defaults to the semantic `z-index-modal`. Pass a number or a CSS `calc(...)` string when stacking.
- `titleId` — DOM id of the element that titles the dialog. Resolves to `aria-labelledby`. If omitted, an auto-generated id is used.
- `aria-label` — alternative when no visible title exists. Takes precedence over `titleId`.
- `role` — `'dialog'` (default) or `'alertdialog'`. `ConfirmDialog` passes `'alertdialog'`.

### Accessibility

`ModalShell` sets `role="dialog"` + `aria-modal="true"`, traps focus inside its panel (Tab cycles; Shift+Tab cycles backward), captures the previously-focused element on mount and restores it on unmount, and binds document-level Escape to `onClose`.

### The "FormModal" composition

0.3.0 retired the former `FormModal` component; the canonical replacement is a `ModalShell` + `modalHeadingStyle` + `modalFooterStyle` composition at the call site. The two style objects are frozen `CSSProperties` re-exports; spread them onto your heading and footer wrappers for visual parity with `ConfirmDialog`.

## ConfirmDialog

Modal confirmation — title, message, optional body content, Cancel and Confirm buttons. Handles both sync and async `onConfirm` (the Confirm button enters a loading state for in-flight promises).

```tsx
<ConfirmDialog
  title="Archive project?"
  message="Archived projects are hidden from the dashboard but can be restored within 90 days."
  confirmLabel="Archive"
  variant="warning"
  onConfirm={async () => {
    await archiveProject(id);
    onClose();
  }}
  onCancel={onClose}
/>
```

`variant`:

- `'destructive'` (default) — red destructive button
- `'info'` — primary accent button
- `'warning'` — primary accent button

Cancel fires on the Cancel button, Escape, or overlay click — every path that doesn't commit. The child `children` slot lets you embed an input, a list, or custom body content between the message and the buttons.

`ConfirmDialog` uses `role="alertdialog"` — screen readers announce it more urgently than a plain dialog.

## CommandPalette

Filterable command launcher with document-level keyboard activation. Built on top of `Combobox` for the filter machinery, wrapped in a modal shell, and bound to Cmd+K / Ctrl+K by default.

```tsx
import { CommandPalette, Button } from '@4lt7ab/ui';

<CommandPalette.Root aria-label="Command palette">
  <CommandPalette.Trigger asChild>
    <Button>Commands <kbd>⌘K</kbd></Button>
  </CommandPalette.Trigger>
  <CommandPalette.Content placeholder="Type a command…">
    <CommandPalette.Group label="Navigation">
      <CommandPalette.Item
        value="home"
        icon="home"
        shortcut={['G', 'H']}
        onSelect={() => navigate('/')}
      >
        Go home
      </CommandPalette.Item>
      <CommandPalette.Item
        value="search"
        icon="search"
        shortcut="/"
        keywords={['find', 'filter']}
        onSelect={() => focusSearch()}
      >
        Focus search
      </CommandPalette.Item>
    </CommandPalette.Group>
    <CommandPalette.Group label="Actions">
      <CommandPalette.Item
        value="new-project"
        icon="plus"
        shortcut="⌘N"
        onSelect={openCreate}
      >
        New project
      </CommandPalette.Item>
    </CommandPalette.Group>
  </CommandPalette.Content>
</CommandPalette.Root>;
```

<LiveExample id="modals-commandpalette" />

### Root props

- `open` / `defaultOpen` / `onOpenChange` — controlled / uncontrolled parity.
- `aria-label` *(required)* — the dialog's accessible name.
- `shortcut` — defaults to `{ key: 'k', mod: true }` (Cmd on macOS, Ctrl elsewhere). Override to rebind (`{ key: '/', mod: false }`) or pass `null` to turn off the global listener entirely.
- `disabled` — gate the default shortcut without unmounting.

### Trigger

Optional. `asChild` merges the open-toggle behavior and ARIA props onto whatever single child element you pass (so you can wrap any button — the library's `Button`, a custom styled one, an icon-only affordance). Without `asChild`, a minimally-styled `<button>` is rendered.

### Item filtering

`CommandPalette.Item` matches on three things in this order:

1. `value` (the stable id).
2. String content of `children` (if `children` is a string).
3. Any entries in the `keywords` array (for aliases: `keywords={['cmd', 'terminal']}` on a "Run command" item).

Non-matching items return `null` and are hidden. A `Group` whose items all hide removes its own heading too — no orphan section labels above an empty group.

`shortcut` renders as one or more `<kbd>` spans on the right of each row. Pass `'⌘K'` or `['⌘', 'K']` — both work. The shortcut display is cosmetic; it does not bind the key. Consumers who want per-item shortcuts register their own listeners.

The palette auto-closes after `onSelect` runs. Re-open from the handler if you want it to stay.

## WizardDialog

Multi-step modal with a progress indicator, optional per-step validation, and Back/Next/Finish actions. Built on `ModalShell`.

```tsx
<WizardDialog.Root onComplete={runSetup}>
  <WizardDialog.Title>Set up your workspace</WizardDialog.Title>
  <WizardDialog.Progress mode="bar" stepLabels={['Basics', 'Team', 'Billing']} />

  <WizardDialog.Step index={0} validate={() => name.trim().length > 0}>
    <Field label="Workspace name" required>
      <Input value={name} onChange={(e) => setName(e.target.value)} />
    </Field>
  </WizardDialog.Step>

  <WizardDialog.Step index={1}>
    <ChipPicker items={roles} selected={selectedRoles} onChange={setSelectedRoles} />
  </WizardDialog.Step>

  <WizardDialog.Step index={2} validate={async () => await verifyCard(card)}>
    <BillingForm card={card} onChange={setCard} />
  </WizardDialog.Step>

  <WizardDialog.Actions nextLabel="Continue" finishLabel="Create workspace" />
</WizardDialog.Root>
```

### Progress modes

- `mode="numeric"` (default) — "Step N of M" + the current step label.
- `mode="bar"` — segmented `<ProgressBar>` filling step / total.

`stepLabels` is an array aligned to step index. Both modes use it — numeric for the right-aligned label, bar for `aria-label`.

### Validation

Each `WizardDialog.Step` accepts an optional `validate: () => boolean | Promise<boolean>`. On Next / Finish, Root awaits the current step's validator. Returning `false` (or a `Promise<false>`) blocks the advance. A returned Promise flips Actions into a loading state while it resolves — the label switches to `busyLabel` (default `"Working…"`) and Back is disabled.

The validator is a blocking gate, not a message source. Surface errors inside your step content — this is where `Field`'s `error` prop does its work.

### canClose

`canClose={false}` removes Escape dismiss, overlay dismiss, and the Back-as-Cancel affordance on step 0. For forced-onboarding flows where the user must complete or explicitly bail out through a visible affordance.

## Toast notifications

Non-blocking stacked notifications. Unlike the other surfaces in this concept, toasts don't take focus — they slide in, hang for a duration, and dismiss. Used for "Saved", "Copied", "Error updating name"-style status after an action.

### Setup

Wrap a subtree (usually at the app root) in `ToastProvider`:

```tsx
import { ToastProvider } from '@4lt7ab/ui';

<ThemeProvider>
  <ToastProvider position="top-right">
    <App />
  </ToastProvider>
</ThemeProvider>;
```

`position`: `'top-right'` (default), `'top-left'`, `'bottom-right'`, or `'bottom-left'`.

### Firing toasts

Call `useToast()` anywhere inside the provider:

```tsx
import { useToast } from '@4lt7ab/ui';

function SaveButton() {
  const { showToast } = useToast();

  return (
    <Button
      onClick={async () => {
        try {
          await save();
          showToast('Saved', 'success');
        } catch (err) {
          showToast('Could not save', { type: 'error', duration: 8000 });
        }
      }}
    >
      Save
    </Button>
  );
}
```

`showToast(message, type)` — shorthand with a string type.
`showToast(message, options)` — full object: `{ type?, duration? }`.

Types: `'success' | 'error' | 'info' | 'warning'` (default `'info'`).
Duration: milliseconds until auto-dismiss (default `4000`).

Toasts are rendered in a portal with `aria-live="polite"`. Consumers do not need to manage mounting, stacking, or timers.

## AlertBanner

Full-width in-page notification — not a modal. Four severity variants with matching icon defaults and a slide-in animation (respects `prefers-reduced-motion: reduce`). Renders inline at its JSX position; used for persistent state the user should know about (trial expiring, maintenance window, data stale).

```tsx
<AlertBanner variant="warning" onDismiss={() => setDismissed(true)}>
  Your trial expires in 3 days.{' '}
  <Button variant="ghost" onClick={openBilling}>Upgrade now</Button>
</AlertBanner>
```

Variants: `'info'` (default icon: info), `'warning'` (warning), `'error'` (error), `'success'` (check-circle). Pass `icon` to override.

`onDismiss` is optional — without it, no dismiss button renders. Consumers own timing — wrap `onDismiss` in `useEffect` + `setTimeout` if you want auto-dismiss.

## ErrorBoundary

Catches render errors in a subtree and displays a themed fallback with retry. A class component (React error boundaries must be class components), rendering inside a `Card` with a retry button.

```tsx
<ErrorBoundary
  onError={(err, info) => logToSentry(err, info)}
>
  <RiskyWidget />
</ErrorBoundary>
```

Custom fallback:

```tsx
<ErrorBoundary
  fallback={({ error, resetErrorBoundary }) => (
    <EmptyState
      icon="error"
      message={`Failed to load: ${error.message}`}
      action={<Button onClick={resetErrorBoundary}>Try again</Button>}
    />
  )}
>
  <Dashboard />
</ErrorBoundary>
```

The default fallback shows the error message, a "Try again" button that resets the boundary, and a collapsible stack-trace toggle. `onError` is called once per caught error — right for logging. Error boundaries do **not** catch errors in event handlers, async code, or SSR — only render errors inside the subtree.

Error boundaries pair well with the other surfaces here: wrap a `ModalShell`'s body in an `ErrorBoundary` so a crash inside the modal doesn't take down the whole page.

## Stacking and z-index

All modal surfaces portal to `document.body` to escape the ancestor stacking context. `ModalShell` uses `t.zIndexModal` for the overlay and `zIndexModal + 1` for the panel. Toasts render at the portal's default (inline in `document.body`, above most page content). If you stack modals — a confirm inside a modal — pass a higher `zIndex` explicitly; the library does not auto-stack.

## Where next

- **Forms** — [Forms](#/forms) covers `ConfirmDialog` in the validation flow and the inputs that go inside `ModalShell` / `WizardDialog` bodies.
- **Data** — [Data](#/data) covers `Toast` and `AlertBanner` as the result-announcement surfaces after data mutations.
- **App shell** — [Layout](#/layout) covers where `CommandPalette.Trigger` typically lives (inside `AppShell.Header` / `TopBar`).
