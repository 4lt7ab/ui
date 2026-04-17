# Modal / Overlay Consolidation

**Status:** design — no runtime changes in this doc. Ships with 0.3.0. Breaking changes allowed.
**Scope:** `Overlay`, `ModalShell`, `ConfirmDialog`, `FormModal`, `ShortcutHelpModal`. `Toast` is explicitly out of scope (notification primitive, not a modal).

## Goal

Keep the public API tight but rich. Every surviving modal component should either (a) be a load-bearing primitive other components compose on, or (b) carry non-trivial behavior (async lifecycle, role semantics, accessibility plumbing) that a consumer would rediscover the hard way.

A "thin wrapper over `ModalShell`" that only arranges a title, a body, and two buttons is not carrying its weight — we document the composition and retire the component.

## Inventory

| Component          | Source LOC | Capability (one line)                                                                                       | Decision      |
| ------------------ | ---------: | ----------------------------------------------------------------------------------------------------------- | ------------- |
| `Overlay`          |         33 | Fixed-inset semi-transparent backdrop with click handler and z-index control.                               | **Keep**      |
| `ModalShell`       |        159 | Portal-rendered centered panel with overlay, focus trap, focus restoration, Escape-to-close, width presets, ARIA role/labeling. Exports shared `modalHeadingStyle` and `modalFooterStyle` for composition. | **Keep**      |
| `ConfirmDialog`    |         98 | `alertdialog`-role confirmation with title/message/optional body, async `onConfirm` with internal loading state, destructive/info/warning variants mapping to button styles, autoFocus on Cancel. | **Keep**      |
| `FormModal`        |         89 | Thin wrapper: `ModalShell` + `<h2>` title + scrollable body + Cancel/Submit `Button` footer; internal+external loading merge for the submit button. | **Retire**    |
| `ShortcutHelpModal`|        185 | Opinionated keyboard-shortcut cheat-sheet: grouped `{keys, description}` rows, `<kbd>` styling with `useInjectStyles` for hover state, built-in close `IconButton`. | **Retire**    |

Total source under consideration: **564 LOC**. Post-consolidation surface: **290 LOC** (`Overlay` + `ModalShell` + `ConfirmDialog`), a **274 LOC** reduction — plus two fewer public components to learn, demo, and keep stable.

## Decisions and rationale

### Keep: `Overlay` (33 LOC)

Primitive. Used by `ModalShell`, plausibly by drawers / sheets / media lightboxes a consumer adds later. Tiny, stable, token-driven. Nothing to simplify.

### Keep: `ModalShell` (159 LOC)

The load-bearing primitive. Everything non-trivial a modal needs already lives here:

- `createPortal` to `document.body`
- focus trap via `useFocusTrap`
- focus-in-on-mount, focus-restore-on-unmount
- Escape key listener
- overlay-click dismisses
- ARIA: `aria-modal`, `role` override (`dialog` | `alertdialog`), `aria-labelledby` via `titleId` or `aria-label`
- width presets via `ModalWidth` + `modalWidthMap`
- z-index layering for overlay vs. panel

Also exports two shared style objects used by the other modal components:

```ts
export const modalHeadingStyle: React.CSSProperties
export const modalFooterStyle: React.CSSProperties
```

These remain part of the public re-export surface after consolidation — the migration snippets below depend on them.

### Keep: `ConfirmDialog` (98 LOC)

Survives because it carries behavior that a consumer would otherwise rebuild:

1. **`role="alertdialog"`** — the correct ARIA role for destructive confirmation. Not the `ModalShell` default.
2. **Async confirm lifecycle** — `onConfirm` may return a `Promise`; the component tracks loading state, disables both buttons, swaps the confirm label to `"Loading..."`, and only restores on settle. Internal-only; no external `loading` prop.
3. **Variant → button mapping** — `destructive | info | warning` maps to the `Button` variant used for Confirm. Keeps the destructive-red intent from leaking into the API surface at every call site.
4. **`autoFocus` on Cancel** — safer default for destructive flows (Enter defaults to the non-destructive action).

Documenting these as composition rules would force every consumer to re-implement them. Keep.

### Retire: `FormModal` (89 LOC)

`FormModal` is `ModalShell` + shared modal-heading style + a scrollable `<div>` + the shared modal-footer style + two `Button`s. The only behavior it owns is a loading-state merge:

```ts
const isLoading = externalLoading || internalLoading;
```

That's a one-line composition. The component's ergonomic savings (three fewer JSX nodes at the call site) do not justify a dedicated export, a demo, and a permanent API surface.

All primitives needed for the replacement composition already exist: `ModalShell`, `modalHeadingStyle`, `modalFooterStyle`, `Button` (which has its own `loading` prop).

### Retire: `ShortcutHelpModal` (185 LOC)

This is a consumer-app feature masquerading as a library primitive:

- The data shape (`{ keys: string[], description: string }[]`, grouped) is opinionated and app-specific.
- The rendering (`<kbd>` stack with `+` separators, uppercase group labels, right-aligned key column) is one of many valid shortcut-sheet designs.
- It reaches for `useInjectStyles` just to style `kbd:hover` — a smell for "this could be a consumer component."
- It's a single-consumer abstraction: nothing else in the library uses it or its shape.

Retire as a documented composition. Consumers with a shortcut sheet own their data shape and render their `<kbd>` styling.

## Migration snippets

Every snippet below assumes imports from `@4lt7ab/ui`:

```ts
import {
  ModalShell,
  modalHeadingStyle,
  modalFooterStyle,
  Button,
  IconButton,
  semantic as t,
} from '@4lt7ab/ui/ui';
```

(or `@4lt7ab/ui` directly if the consumer is using the unified import.)

### Migrating `FormModal`

**Before (0.2.x):**

```tsx
import { FormModal } from '@4lt7ab/ui/ui';

function EditUser({ onClose }: { onClose: () => void }) {
  const handleSubmit = async () => {
    await api.updateUser(values);
    onClose();
  };

  return (
    <FormModal
      title="Edit user"
      onSubmit={handleSubmit}
      onCancel={onClose}
      submitLabel="Save"
      width="md"
    >
      <Field label="Name"><Input value={name} onChange={setName} /></Field>
      <Field label="Email"><Input value={email} onChange={setEmail} /></Field>
    </FormModal>
  );
}
```

**After (0.3.0):**

```tsx
import { useId, useState } from 'react';
import {
  ModalShell,
  modalHeadingStyle,
  modalFooterStyle,
  Button,
  semantic as t,
} from '@4lt7ab/ui/ui';

function EditUser({ onClose }: { onClose: () => void }) {
  const titleId = useId();
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (): Promise<void> => {
    setSubmitting(true);
    try {
      await api.updateUser(values);
      onClose();
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <ModalShell onClose={onClose} titleId={titleId} width="md">
      <h2 id={titleId} style={modalHeadingStyle}>Edit user</h2>

      <div style={{ margin: `${t.spaceMd} 0 ${t.spaceLg}`, overflowY: 'auto' }}>
        <Field label="Name"><Input value={name} onChange={setName} /></Field>
        <Field label="Email"><Input value={email} onChange={setEmail} /></Field>
      </div>

      <div style={modalFooterStyle}>
        <Button variant="ghost" onClick={onClose}>Cancel</Button>
        <Button variant="primary" onClick={handleSubmit} loading={submitting}>
          Save
        </Button>
      </div>
    </ModalShell>
  );
}
```

Notes for consumers:

- The `loading` state is managed with one `useState` + `try/finally`. If the consumer already tracks submission state externally (e.g. from a mutation hook), they wire that state straight into `<Button loading={mutation.isPending} />` and drop the `useState`.
- `titleId` wired through `<h2 id>` + `<ModalShell titleId>` gives the same `aria-labelledby` behavior `FormModal` provided.
- The body's `overflowY: 'auto'` is the only piece of layout `FormModal` added — inline it as shown.

### Migrating `ShortcutHelpModal`

**Before (0.2.x):**

```tsx
import { ShortcutHelpModal } from '@4lt7ab/ui/ui';

<ShortcutHelpModal
  onClose={onClose}
  shortcuts={[
    { group: 'Navigation', shortcuts: [
      { keys: ['Cmd', 'K'], description: 'Open command palette' },
      { keys: ['G', 'H'],   description: 'Go home' },
    ]},
    { group: 'Editing', shortcuts: [
      { keys: ['Cmd', 'Z'], description: 'Undo' },
    ]},
  ]}
/>
```

**After (0.3.0) — consumer-owned composition:**

```tsx
import { useId } from 'react';
import {
  ModalShell,
  modalHeadingStyle,
  IconButton,
  semantic as t,
} from '@4lt7ab/ui/ui';

interface ShortcutDef { keys: string[]; description: string; }
interface ShortcutGroup { group: string; shortcuts: ShortcutDef[]; }

function ShortcutHelp({ shortcuts, onClose }: {
  shortcuts: ShortcutGroup[];
  onClose: () => void;
}): React.JSX.Element {
  const titleId = useId();

  return (
    <ModalShell onClose={onClose} titleId={titleId} width="lg">
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginBottom: t.spaceLg,
        }}
      >
        <h2 id={titleId} style={modalHeadingStyle}>Keyboard Shortcuts</h2>
        <IconButton icon="close" aria-label="Close" onClick={onClose} />
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: t.spaceLg }}>
        {shortcuts.map((group) => (
          <section key={group.group}>
            <h3
              style={{
                margin: 0,
                marginBottom: t.spaceSm,
                fontWeight: t.fontWeightMedium,
                fontFamily: t.fontSans,
                color: t.colorTextMuted,
                fontSize: t.fontSizeXs,
                textTransform: 'uppercase',
                letterSpacing: t.letterSpacingWide,
              }}
            >
              {group.group}
            </h3>

            {group.shortcuts.map((s) => (
              <div
                key={s.description}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: `${t.spaceXs} 0`,
                  borderBottom: `${t.borderWidthDefault} solid ${t.colorBorder}`,
                }}
              >
                <span
                  style={{
                    fontFamily: t.fontSans,
                    fontSize: t.fontSizeSm,
                    color: t.colorText,
                  }}
                >
                  {s.description}
                </span>
                <span
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: t.spaceXs,
                    flexShrink: 0,
                    marginLeft: t.spaceMd,
                  }}
                >
                  {s.keys.map((key, i) => (
                    <span
                      key={`${key}-${i}`}
                      style={{ display: 'inline-flex', alignItems: 'center', gap: t.spaceXs }}
                    >
                      {i > 0 && (
                        <span style={{ fontSize: t.fontSizeXs, color: t.colorTextMuted }}>+</span>
                      )}
                      <kbd
                        style={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          minWidth: 24,
                          height: 24,
                          padding: `0 ${t.spaceXs}`,
                          fontFamily: t.fontMono,
                          fontSize: t.fontSizeXs,
                          fontWeight: t.fontWeightMedium,
                          lineHeight: 1,
                          color: t.colorTextSecondary,
                          background: t.colorSurfaceInput,
                          border: `${t.borderWidthDefault} solid ${t.colorBorder}`,
                          borderRadius: t.radiusSm,
                          boxShadow: `0 1px 0 ${t.colorBorder}`,
                        }}
                      >
                        {key}
                      </kbd>
                    </span>
                  ))}
                </span>
              </div>
            ))}
          </section>
        ))}
      </div>
    </ModalShell>
  );
}
```

Notes for consumers:

- The `ShortcutDef` / `ShortcutGroup` types move into the consumer app. They are a handful of lines and app-specific anyway.
- The `<kbd>` hover-state that the old component injected via `useInjectStyles` is **a lost capability** — see below.

## Lost capabilities and recovery

### 1. FormModal's "internal loading when `loading` prop not supplied" convenience

`FormModal` merged `externalLoading || internalLoading`, so consumers who returned a Promise from `onSubmit` got a spinner for free without managing state.

**Recovery:** The migration snippet re-creates this with one `useState` + `try/finally` (4 lines). If a team has many form modals, they can lift that pattern into a local `useAsyncHandler()` hook in the consumer app. Not library concern.

### 2. ShortcutHelpModal's `<kbd>:hover` styling

The old component injected CSS so hovering a `<kbd>` chip highlighted it with the focused-border color — it relied on `useInjectStyles` because pseudo-classes can't be expressed in React inline styles.

**Recovery (option A — recover the effect):** consumers who want the hover state import `useInjectStyles` from `@4lt7ab/core` and inject the same two-line rule themselves, scoped with a `data-*` attribute on the container (the pattern the old component used):

```tsx
import { useInjectStyles, semantic as t } from '@4lt7ab/core';

useInjectStyles('my-app-shortcut-kbd', `
  [data-shortcut-help] kbd:hover {
    background: ${t.colorSurfaceRaised};
    border-color: ${t.colorBorderFocused};
  }
`);
```

Then wrap the shortcut list's outer `<div>` with `data-shortcut-help`.

**Recovery (option B — accept the loss):** most shortcut sheets are read, not hovered. Dropping the hover tint is defensible and what a first-pass consumer implementation will likely do.

### 3. No other behavioral capabilities are lost

`FormModal` contributed no ARIA, focus, or portal behavior beyond what `ModalShell` already provides. `ShortcutHelpModal` contributed no behavior beyond data iteration. Focus management, Escape-to-close, overlay dismissal, and focus restoration continue to work unchanged for the migration snippets because they all go through `ModalShell`.

## Downstream execution checklist (for the refactor task, not this doc)

These edits are **not** performed by this design task — listed so the execution task has a spec:

1. Delete `packages/ui/src/components/FormModal/` and `packages/ui/src/components/ShortcutHelpModal/`.
2. Remove `FormModal`, `FormModalProps`, `ShortcutHelpModal`, `ShortcutHelpModalProps`, `ShortcutDef`, `ShortcutGroup` exports from `packages/ui/src/index.ts`.
3. Remove the `FormModalDemo` and `ShortcutHelpModalDemo` entries from `demo/demos/index.ts` and from the `CATEGORIES` array in `demo/views/ComponentExplorer.tsx`. Delete the demo files.
4. Confirm `ModalShell` still exports `modalHeadingStyle` and `modalFooterStyle` (it does today — do not remove).
5. `bun run typecheck && bun run build && bun run test`.
6. Changelog entry under `## Unreleased` flagging the breaking change and pointing consumers at this doc.

## Summary

- **Surviving primitives:** `Overlay`, `ModalShell`, `ConfirmDialog`.
- **Retired as documented compositions:** `FormModal`, `ShortcutHelpModal`.
- **Net LOC removed from `packages/ui/src/components/`:** 274 (89 + 185).
- **Breaking API changes:** `FormModal`, `ShortcutHelpModal`, `FormModalProps`, `ShortcutHelpModalProps`, `ShortcutDef`, `ShortcutGroup` no longer exported.
- **Capabilities genuinely lost:** one — `<kbd>:hover` styling from `ShortcutHelpModal`. Recovery path documented above.
