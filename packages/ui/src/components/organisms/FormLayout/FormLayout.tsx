import {
  createContext,
  forwardRef,
  useCallback,
  useContext,
  useEffect,
  useId,
  useMemo,
  useRef,
  useState,
} from 'react';
import { createPortal } from 'react-dom';
import { semantic as t } from '@4lt7ab/core';
import type { CSSProperties, FormEvent, ReactNode } from 'react';
import type { BaseComponentProps } from '../../../types';
import { Header } from '../../molecules/Header';
import { Button } from '../../atoms/Button';
import type { ButtonProps } from '../../atoms/Button';

// ---------------------------------------------------------------------------
// Compound context
// ---------------------------------------------------------------------------
//
// FormLayout is the sectioned-form shell with a sticky save/cancel action bar
// and an opt-in dirty-state gate. Generalizes the hand-assembled settings-page
// pattern (see `demo/examples/SettingsPage.tsx` pre-organism shape): a stack
// of sections, each with a heading + fields, a bottom bar that sticks to the
// viewport or the container, and "are you sure you want to leave?" on dirty
// state.
//
// Per the behavior-heavy organism design doc (`01KPHD5SXPHK7GENT5SKSNW08T`):
//
//   - Dirty-state detection is **consumer-reported**, not sniffed. Root takes
//     the standard controlled/uncontrolled parity on `dirty` + `saving`.
//     `FormLayout.DirtyOnChange` is an opt-in adapter — a capturing `<div>`
//     that listens for bubbled `change` events and calls `setDirty(true)`.
//     Consumers using RHF/Formik/TanStack Form pass `dirty={formState.isDirty}`
//     to Root; vanilla-React consumers wrap their fields in DirtyOnChange.
//   - `useFormLayout()` is the first public hook exposed from an organism
//     compound. Deliberate: the dirty-state decision returns flexibility to
//     the consumer, and the hook is how they reach in to render custom UI
//     (e.g. a `*` next to a changed field, a floating "unsaved changes" badge).
//   - `NavigationGuard` is `beforeunload`-only. In-app route blocking is
//     router-specific; the library cannot own it without pulling a router
//     dependency.
//   - `SaveButton` is `type='submit'` + auto-disabled when pristine. Pressing
//     Enter in any form field triggers native submit, which calls `onSave`.
//   - Sticky positioning: `'container'` (default) uses `position: sticky`
//     inline; `'viewport'` portals into a fixed-position container at the
//     bottom of the viewport; `false` renders inline with no sticky behavior.
//
// Every sub-part calls `useFormLayoutContext(part)` and throws the canonical
// orphan-check error per the compound-component ADR.

/** Sticky mode for `FormLayout.Actions`. */
export type FormLayoutSticky = 'viewport' | 'container' | false;

/** Public context shape exposed via `useFormLayout()`. */
export interface FormLayoutContextValue {
  /** Current dirty state. */
  dirty: boolean;
  /** Set the dirty state. Updates controlled consumers via `onDirtyChange`. */
  setDirty: (next: boolean) => void;
  /** Current saving state. */
  saving: boolean;
  /** Set the saving state. Updates controlled consumers via `onSavingChange`. */
  setSaving: (next: boolean) => void;
}

/** Internal context — includes the bits SaveButton/CancelButton/Actions need
 * that don't belong on the public `useFormLayout()` surface. */
interface FormLayoutInternalContext extends FormLayoutContextValue {
  onSave?: (event: FormEvent<HTMLFormElement>) => void | Promise<void>;
  onCancel?: () => void;
  sticky: FormLayoutSticky;
  formId: string;
}

const FormLayoutContext = createContext<FormLayoutInternalContext | null>(null);

function useFormLayoutInternal(part: string): FormLayoutInternalContext {
  const ctx = useContext(FormLayoutContext);
  if (ctx === null) {
    throw new Error(
      `[@4lt7ab/ui] <FormLayout.${part}> must be rendered inside <FormLayout.Root>.`,
    );
  }
  return ctx;
}

/**
 * Read the `<FormLayout.Root>` context from a consumer component. Exposes
 * `dirty`, `setDirty`, `saving`, `setSaving` so consumers can render custom
 * UI that reacts to form state (e.g. a `*` next to a changed field, a
 * floating "unsaved changes" badge outside the Actions bar).
 *
 * Throws if called outside `<FormLayout.Root>`.
 */
export function useFormLayout(): FormLayoutContextValue {
  const ctx = useFormLayoutInternal('<consumer>');
  // Project to the public shape (drop `onSave`, `onCancel`, `sticky`, `formId`).
  return { dirty: ctx.dirty, setDirty: ctx.setDirty, saving: ctx.saving, setSaving: ctx.setSaving };
}

// ---------------------------------------------------------------------------
// Controlled / uncontrolled helper (ADR §4) — shared with AppShell but
// duplicated here to keep organism modules self-contained (no cross-organism
// imports for plumbing).
// ---------------------------------------------------------------------------

function useControllableBoolean(params: {
  label: string;
  controlled: boolean | undefined;
  defaultValue: boolean;
  onChange: ((next: boolean) => void) | undefined;
}): [boolean, (next: boolean) => void] {
  const { label, controlled, defaultValue, onChange } = params;
  const isControlled = controlled !== undefined;
  const [uncontrolled, setUncontrolled] = useState(defaultValue);
  const value = isControlled ? (controlled as boolean) : uncontrolled;

  const wasControlled = useRef(isControlled);
  useEffect(() => {
    if (wasControlled.current !== isControlled) {
      // eslint-disable-next-line no-console
      console.warn(
        `<FormLayout.Root> switched between controlled and uncontrolled for ${label}. Pick one and stick with it.`,
      );
      wasControlled.current = isControlled;
    }
  }, [isControlled, label]);

  const setValue = useCallback(
    (next: boolean) => {
      if (!isControlled) setUncontrolled(next);
      onChange?.(next);
    },
    [isControlled, onChange],
  );

  return [value, setValue];
}

// ---------------------------------------------------------------------------
// Root
// ---------------------------------------------------------------------------

/** Props for {@link FormLayoutRoot}. */
export interface FormLayoutRootProps extends BaseComponentProps {
  /** Controlled dirty state. When set, Root reads this value and ignores
   * `defaultDirty`. Pair with `onDirtyChange` to own the state yourself
   * (the common path for React Hook Form / Formik / TanStack Form
   * consumers — `dirty={formState.isDirty}`). */
  dirty?: boolean;
  /** Uncontrolled initial dirty state. Only used when `dirty` is not
   * provided. Works with `FormLayout.DirtyOnChange` for vanilla-React forms.
   * @default false
   */
  defaultDirty?: boolean;
  /** Fires when the dirty state changes — either from controlled consumer
   * code, from `FormLayout.DirtyOnChange`, or from a custom `useFormLayout()`
   * caller. */
  onDirtyChange?: (next: boolean) => void;
  /** Controlled saving state. When set, Root reads this value and ignores
   * `defaultSaving`. */
  saving?: boolean;
  /** Uncontrolled initial saving state.
   * @default false
   */
  defaultSaving?: boolean;
  /** Fires when the saving state changes. */
  onSavingChange?: (next: boolean) => void;
  /** Called when the form submits — native `<form onSubmit>`, `SaveButton`
   * click (it's `type='submit'`), or Enter pressed inside any non-textarea
   * field. Consumer owns validation, serialization, and network calls. */
  onSave?: (event: FormEvent<HTMLFormElement>) => void | Promise<void>;
  /** Called when `FormLayout.CancelButton` is clicked or the consumer
   * calls the returned setter. */
  onCancel?: () => void;
  /** Sticky mode for `FormLayout.Actions`.
   * - `'container'` — sticky to the Root's scroll container via
   *   `position: sticky; bottom: 0` (works inside a modal or DetailPage body).
   * - `'viewport'` — portals into a fixed-position container at the bottom
   *   of the viewport (full-page settings screens).
   * - `false` — no sticky behavior; Actions renders inline at its JSX
   *   position (useful for small cards where sticky is awkward).
   * @default 'container'
   */
  sticky?: FormLayoutSticky;
  /** Disable HTML constraint validation. `<form noValidate>` is the default
   * — consumers own validation. Set `noValidate={false}` to re-enable native
   * validation bubbles.
   * @default true
   */
  noValidate?: boolean;
  /** Children — typically `<FormLayout.Header>`, `<FormLayout.Section>`s,
   * `<FormLayout.Actions>`, plus optional `<FormLayout.DirtyOnChange>` /
   * `<FormLayout.NavigationGuard>`. */
  children?: ReactNode;
}

export const FormLayoutRoot: React.ForwardRefExoticComponent<
  Omit<FormLayoutRootProps, 'ref'> & React.RefAttributes<HTMLFormElement>
> = forwardRef<HTMLFormElement, FormLayoutRootProps>(function FormLayoutRoot(
  {
    dirty: dirtyProp,
    defaultDirty = false,
    onDirtyChange,
    saving: savingProp,
    defaultSaving = false,
    onSavingChange,
    onSave,
    onCancel,
    sticky = 'container',
    noValidate = true,
    children,
    ...rest
  },
  ref,
): React.JSX.Element {
  const [dirty, setDirty] = useControllableBoolean({
    label: 'dirty',
    controlled: dirtyProp,
    defaultValue: defaultDirty,
    onChange: onDirtyChange,
  });

  const [saving, setSaving] = useControllableBoolean({
    label: 'saving',
    controlled: savingProp,
    defaultValue: defaultSaving,
    onChange: onSavingChange,
  });

  // Stable form id for the SaveButton's `form` attribute when viewport-sticky
  // portals it outside the <form> subtree (a button outside its form needs
  // `form=…` to participate in submission).
  const autoId = useId();
  const formId = rest.id ?? `formlayout-${autoId}`;

  const value = useMemo<FormLayoutInternalContext>(
    () => ({ dirty, setDirty, saving, setSaving, onSave, onCancel, sticky, formId }),
    [dirty, setDirty, saving, setSaving, onSave, onCancel, sticky, formId],
  );

  // Native submit handler: prevent default, drive saving state around the
  // user's onSave promise (if any), and leave controlled consumers free to
  // manage saving themselves (they'll set `saving` explicitly and we re-enter
  // with it).
  const handleSubmit = useCallback(
    async (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      if (onSave === undefined) return;
      const result = onSave(event);
      if (result && typeof (result as Promise<void>).then === 'function') {
        // Only auto-drive `saving` when consumer isn't controlling it — the
        // controllable helper is a no-op setter for controlled callers.
        setSaving(true);
        try {
          await result;
        } finally {
          setSaving(false);
        }
      }
    },
    [onSave, setSaving],
  );

  return (
    <FormLayoutContext.Provider value={value}>
      <form
        ref={ref}
        id={formId}
        data-testid={rest['data-testid']}
        data-state={dirty ? 'dirty' : 'pristine'}
        noValidate={noValidate}
        onSubmit={handleSubmit}
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: t.spaceLg,
          width: '100%',
          fontFamily: t.fontSans,
          color: t.colorText,
          boxSizing: 'border-box',
        }}
      >
        {children}
      </form>
    </FormLayoutContext.Provider>
  );
});

// ---------------------------------------------------------------------------
// Header — forwards to the `<Header>` primitive with level='page'.
// ---------------------------------------------------------------------------

/** Props for {@link FormLayoutHeader}. */
export interface FormLayoutHeaderProps {
  /** Page title. Rendered as `<h1>` via the underlying `<Header>` primitive. */
  title: string;
  /** Optional subtitle rendered below the title in muted style. */
  description?: string;
}

export function FormLayoutHeader({
  title,
  description,
}: FormLayoutHeaderProps): React.JSX.Element {
  useFormLayoutInternal('Header');
  return <Header level="page" title={title} subtitle={description} />;
}

// ---------------------------------------------------------------------------
// Section — <section> with its own SectionHeader + SectionBody.
// ---------------------------------------------------------------------------

interface FormLayoutSectionContextValue {
  headerId: string;
}

const FormLayoutSectionContext = createContext<FormLayoutSectionContextValue | null>(null);

function useFormLayoutSectionContext(part: string): FormLayoutSectionContextValue {
  const ctx = useContext(FormLayoutSectionContext);
  if (ctx === null) {
    throw new Error(
      `[@4lt7ab/ui] <FormLayout.${part}> must be rendered inside <FormLayout.Section>.`,
    );
  }
  return ctx;
}

/** Props for {@link FormLayoutSection}. */
export interface FormLayoutSectionProps extends BaseComponentProps {
  /** Children — typically `<FormLayout.SectionHeader>` + `<FormLayout.SectionBody>`. */
  children?: ReactNode;
}

export function FormLayoutSection({
  children,
  ...rest
}: FormLayoutSectionProps): React.JSX.Element {
  useFormLayoutInternal('Section');
  const headerId = useId();
  const value = useMemo(() => ({ headerId }), [headerId]);

  return (
    <FormLayoutSectionContext.Provider value={value}>
      <section
        id={rest.id}
        data-testid={rest['data-testid']}
        aria-labelledby={headerId}
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: t.spaceMd,
          padding: t.spaceMd,
          background: t.colorSurface,
          border: `${t.borderWidthDefault} solid ${t.colorBorder}`,
          borderRadius: t.radiusMd,
          minWidth: 0,
        }}
      >
        {children}
      </section>
    </FormLayoutSectionContext.Provider>
  );
}

// ---------------------------------------------------------------------------
// SectionHeader
// ---------------------------------------------------------------------------

/** Props for {@link FormLayoutSectionHeader}. */
export interface FormLayoutSectionHeaderProps {
  /** Section title rendered as `<h2>`. */
  title: string;
  /** Optional description rendered below the title in muted style. */
  description?: string;
}

export function FormLayoutSectionHeader({
  title,
  description,
}: FormLayoutSectionHeaderProps): React.JSX.Element {
  const { headerId } = useFormLayoutSectionContext('SectionHeader');
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: t.spaceXs }}>
      <h2
        id={headerId}
        style={{
          margin: 0,
          fontFamily: t.fontSans,
          fontWeight: t.fontWeightSemibold,
          fontSize: t.fontSizeBase,
          lineHeight: t.lineHeightTight,
          color: t.colorText,
        }}
      >
        {title}
      </h2>
      {description !== undefined && (
        <span
          style={{
            color: t.colorTextMuted,
            fontSize: t.fontSizeSm,
            fontFamily: t.fontSans,
            lineHeight: t.lineHeightBase,
          }}
        >
          {description}
        </span>
      )}
    </div>
  );
}

// ---------------------------------------------------------------------------
// SectionBody — the field-stack container.
// ---------------------------------------------------------------------------

/** Props for {@link FormLayoutSectionBody}. */
export interface FormLayoutSectionBodyProps {
  /** Children — consumer's `<Field>` / `<Input>` / `<Textarea>` / custom fields.
   * The organism does not wrap or transform them. */
  children?: ReactNode;
}

export function FormLayoutSectionBody({
  children,
}: FormLayoutSectionBodyProps): React.JSX.Element {
  useFormLayoutSectionContext('SectionBody');
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: t.spaceMd,
        minWidth: 0,
      }}
    >
      {children}
    </div>
  );
}

// ---------------------------------------------------------------------------
// Actions — sticky save/cancel bar with three positioning modes.
// ---------------------------------------------------------------------------

/** Props for {@link FormLayoutActions}. */
export interface FormLayoutActionsProps {
  /** Children — typically `<FormLayout.SaveButton>` + `<FormLayout.CancelButton>`,
   * or any buttons the consumer composes. */
  children?: ReactNode;
}

export function FormLayoutActions({
  children,
}: FormLayoutActionsProps): React.JSX.Element | null {
  const { saving, sticky } = useFormLayoutInternal('Actions');

  const barStyle: CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    gap: t.spaceSm,
    padding: `${t.spaceSm} ${t.spaceMd}`,
    background: t.colorSurface,
    border: `${t.borderWidthDefault} solid ${t.colorBorder}`,
    borderRadius: t.radiusMd,
    boxSizing: 'border-box',
  };

  const inlineStickyStyle: CSSProperties = {
    ...barStyle,
    position: 'sticky',
    bottom: 0,
    zIndex: 1,
  };

  const viewportStyle: CSSProperties = {
    ...barStyle,
    position: 'fixed',
    left: 0,
    right: 0,
    bottom: 0,
    borderRadius: 0,
    borderLeft: 'none',
    borderRight: 'none',
    borderBottom: 'none',
    boxShadow: t.shadowMd,
    zIndex: 100,
  };

  const commonProps = {
    role: 'toolbar' as const,
    'aria-label': 'Form actions',
    'data-state': saving ? 'saving' : 'idle',
  };

  if (sticky === 'viewport') {
    // Portal to document.body so the fixed bar escapes any overflow:hidden
    // ancestors (modals, cards). SSR guard: skip the portal on server render.
    if (typeof document === 'undefined') return null;
    return createPortal(
      <div {...commonProps} style={viewportStyle}>
        {children}
      </div>,
      document.body,
    );
  }

  const style = sticky === 'container' ? inlineStickyStyle : barStyle;
  return (
    <div {...commonProps} style={style}>
      {children}
    </div>
  );
}

// ---------------------------------------------------------------------------
// SaveButton — type='submit', auto-disabled when pristine, aria-busy while saving.
// ---------------------------------------------------------------------------

/** Props for {@link FormLayoutSaveButton}. */
export interface FormLayoutSaveButtonProps
  extends Omit<ButtonProps, 'children' | 'type' | 'loading' | 'form'> {
  /** Button label when idle.
   * @default 'Save'
   */
  children?: ReactNode;
  /** Button label while `saving` is true.
   * @default 'Saving…'
   */
  savingLabel?: ReactNode;
}

export function FormLayoutSaveButton({
  children = 'Save',
  savingLabel = 'Saving…',
  disabled: disabledProp,
  variant = 'primary',
  ...rest
}: FormLayoutSaveButtonProps): React.JSX.Element {
  const { dirty, saving, formId } = useFormLayoutInternal('SaveButton');
  // Auto-disabled when pristine, unless the consumer explicitly overrides
  // via `disabled` — the organism defaults to dirty-gated save, but a
  // controlled `disabled` prop wins (e.g. a consumer with extra validation
  // can keep the button disabled even after the form is dirty).
  const disabled = disabledProp ?? !dirty;

  return (
    <Button
      {...rest}
      type="submit"
      form={formId}
      variant={variant}
      disabled={disabled}
      loading={saving}
    >
      {saving ? savingLabel : children}
    </Button>
  );
}

// ---------------------------------------------------------------------------
// CancelButton
// ---------------------------------------------------------------------------

/** Props for {@link FormLayoutCancelButton}. */
export interface FormLayoutCancelButtonProps
  extends Omit<ButtonProps, 'children' | 'type' | 'form'> {
  /** Button label.
   * @default 'Cancel'
   */
  children?: ReactNode;
}

export function FormLayoutCancelButton({
  children = 'Cancel',
  variant = 'secondary',
  onClick,
  ...rest
}: FormLayoutCancelButtonProps): React.JSX.Element {
  const { onCancel } = useFormLayoutInternal('CancelButton');
  // Chain consumer's onClick first, then Root's onCancel — matches the
  // mergeProps convention (parent first, child second).
  const handleClick = useCallback<React.MouseEventHandler<HTMLButtonElement>>(
    (event) => {
      onClick?.(event);
      if (!event.defaultPrevented) onCancel?.();
    },
    [onClick, onCancel],
  );

  return (
    <Button {...rest} type="button" variant={variant} onClick={handleClick}>
      {children}
    </Button>
  );
}

// ---------------------------------------------------------------------------
// DirtyOnChange — opt-in adapter that calls setDirty(true) on any descendant
// change event. The escape hatch for consumers who don't want to wire
// `onChange → setDirty(true)` on every field manually.
// ---------------------------------------------------------------------------

/** Props for {@link FormLayoutDirtyOnChange}. */
export interface FormLayoutDirtyOnChangeProps {
  /** Fields to monitor. Any bubbled `change` event from an input/select/
   * textarea under this wrapper marks the form dirty. */
  children?: ReactNode;
}

export function FormLayoutDirtyOnChange({
  children,
}: FormLayoutDirtyOnChangeProps): React.JSX.Element {
  const { setDirty, dirty } = useFormLayoutInternal('DirtyOnChange');

  // React's synthetic onChange bubbles in React; a one-shot handler wired to
  // the wrapper fires when any descendant fires `change`. Once dirty, skip
  // the setter call so we don't trigger unnecessary re-renders on every
  // keystroke. The wrapper is a fragment-like `<div>` that doesn't perturb
  // layout (display: contents).
  const handleChange = useCallback(() => {
    if (!dirty) setDirty(true);
  }, [dirty, setDirty]);

  return (
    <div style={{ display: 'contents' }} onChange={handleChange}>
      {children}
    </div>
  );
}

// ---------------------------------------------------------------------------
// NavigationGuard — beforeunload-only unsaved-changes prompt.
// ---------------------------------------------------------------------------

/** Props for {@link FormLayoutNavigationGuard}. */
export interface FormLayoutNavigationGuardProps {
  /** Legacy message shown by older browsers. Modern browsers ignore the
   * custom string and show their canned prompt, but we still set it for
   * the cases that do.
   * @default 'You have unsaved changes. Are you sure you want to leave?'
   */
  message?: string;
}

export function FormLayoutNavigationGuard({
  message = 'You have unsaved changes. Are you sure you want to leave?',
}: FormLayoutNavigationGuardProps): null {
  const { dirty } = useFormLayoutInternal('NavigationGuard');

  useEffect(() => {
    if (!dirty) return;
    if (typeof window === 'undefined') return;

    const handler = (event: BeforeUnloadEvent): string | void => {
      event.preventDefault();
      // Legacy compat — modern browsers ignore the custom string but still
      // show their own prompt when `returnValue` is set.
      event.returnValue = message;
      return message;
    };

    window.addEventListener('beforeunload', handler);
    return () => window.removeEventListener('beforeunload', handler);
  }, [dirty, message]);

  return null;
}

// ---------------------------------------------------------------------------
// Compound export
// ---------------------------------------------------------------------------

/**
 * Sectioned form shell with a sticky save/cancel action bar and an opt-in
 * dirty-state gate. Generalizes the hand-assembled settings-page pattern.
 *
 * FormLayout is NOT a form library: it does not own field values, validation,
 * serialization, or submission. Bring React Hook Form, Formik, TanStack Form,
 * or plain `useState` — FormLayout is the chrome around the form plus the
 * dirty-state gate.
 *
 * **Dirty-state detection is consumer-reported.** Pass `dirty={…}` to Root
 * (controlled) or call `useFormLayout().setDirty(true)` from inside the form
 * (uncontrolled). The escape hatch for vanilla-React forms is
 * `<FormLayout.DirtyOnChange>` — a capturing wrapper that calls `setDirty(true)`
 * on any descendant `change` event.
 *
 * @example
 * ```tsx
 * <FormLayout.Root onSave={handleSave} onCancel={handleCancel}>
 *   <FormLayout.Header title="Settings" description="Manage your workspace." />
 *   <FormLayout.DirtyOnChange>
 *     <FormLayout.Section>
 *       <FormLayout.SectionHeader title="Profile" />
 *       <FormLayout.SectionBody>
 *         <Field label="Name"><Input name="name" /></Field>
 *         <Field label="Email"><Input name="email" type="email" /></Field>
 *       </FormLayout.SectionBody>
 *     </FormLayout.Section>
 *     <FormLayout.Section>
 *       <FormLayout.SectionHeader title="Notifications" />
 *       <FormLayout.SectionBody>
 *         <Field label="Digest frequency">
 *           <Select.Root defaultValue="weekly">…</Select.Root>
 *         </Field>
 *       </FormLayout.SectionBody>
 *     </FormLayout.Section>
 *   </FormLayout.DirtyOnChange>
 *   <FormLayout.Actions>
 *     <FormLayout.CancelButton />
 *     <FormLayout.SaveButton />
 *   </FormLayout.Actions>
 *   <FormLayout.NavigationGuard />
 * </FormLayout.Root>
 * ```
 */
export const FormLayout = {
  Root: FormLayoutRoot,
  Header: FormLayoutHeader,
  Section: FormLayoutSection,
  SectionHeader: FormLayoutSectionHeader,
  SectionBody: FormLayoutSectionBody,
  Actions: FormLayoutActions,
  SaveButton: FormLayoutSaveButton,
  CancelButton: FormLayoutCancelButton,
  DirtyOnChange: FormLayoutDirtyOnChange,
  NavigationGuard: FormLayoutNavigationGuard,
};
