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
import { semantic as t } from '@4lt7ab/core';
import type { CSSProperties, ReactNode } from 'react';
import { ModalShell } from '../ModalShell';
import { modalHeadingStyle } from '../ModalShell/ModalShell';
import { Button } from '../../atoms/Button';
import { ProgressBar } from '../../atoms/ProgressBar';
import type { ModalWidth } from '../../../types';

// ---------------------------------------------------------------------------
// Compound context
// ---------------------------------------------------------------------------
//
// WizardDialog is the stepped-form-in-a-modal organism. Generalizes the
// hand-assembled `demo/examples/OnboardingFlow.tsx` (392 LOC) pattern: a
// ModalShell wrapping a stack with a progress indicator, a single active
// step, and Back/Next/Finish buttons. Consumer owns field state, values,
// and the final submit.
//
// Compound parts:
//   Root      owns open state + current step index, renders ModalShell
//   Title     header, labels the dialog via aria-labelledby
//   Progress  step indicator — 'numeric' (step 2 of 4) or 'bar' (ProgressBar)
//   Step      a single step — only the current one renders. `validate` is
//             optional; returning a Promise opts into async mode where Root
//             flips the Next button into its loading state while the promise
//             is in flight.
//   Actions   Back / Next / Finish buttons, wired to Root state. Behaviour:
//             - Back on step 0: calls onClose (or hides, see canClose)
//             - Next runs the current step's validate(), advances if truthy
//             - Finish on the last step calls onComplete() and closes
//
// Steps register themselves with Root on mount so Actions knows the total
// count without iterating JSX children. The current step's validate is
// registered into a ref Root exposes to Actions.

/** Progress indicator mode. */
export type WizardDialogProgressMode = 'numeric' | 'bar';

interface WizardDialogContextValue {
  /** Current step index (0-based). */
  step: number;
  /** Total registered step count. Actions reads this to know when it's on the
   * final step (show Finish instead of Next). */
  totalSteps: number;
  /** Whether the wizard is saving / validating / advancing. When true, Next /
   * Finish go into loading state and Back is disabled. Auto-driven when the
   * current step's `validate` returns a Promise. */
  busy: boolean;
  /** Register a step. Returns an unregister fn. The index is used for the
   * aria-labelled step count, not for ordering — steps' JSX order is the
   * source of truth, so registration is numerically-indexed. */
  registerStep: (
    index: number,
    validate: (() => boolean | Promise<boolean>) | undefined,
  ) => () => void;
  /** Called by Actions to advance. Awaits the current step's validate if one
   * was registered; a falsy result blocks the advance. */
  next: () => Promise<void>;
  /** Called by Actions to go back. On step 0, calls close (respecting
   * `canClose`). */
  back: () => void;
  /** Called by Actions on the final step. Fires onComplete and closes. */
  finish: () => Promise<void>;
  /** Close the wizard. No-op if `canClose=false`. */
  close: () => void;
  /** Whether the consumer has allowed Escape / Back-on-step-0 to close the
   * dialog. */
  canClose: boolean;
  /** Id assigned to the Title, wired into ModalShell's `aria-labelledby`. */
  titleId: string;
}

const WizardDialogContext = createContext<WizardDialogContextValue | null>(null);

function useWizardDialogContext(part: string): WizardDialogContextValue {
  const ctx = useContext(WizardDialogContext);
  if (ctx === null) {
    throw new Error(
      `[@4lt7ab/ui] <WizardDialog.${part}> must be rendered inside <WizardDialog.Root>.`,
    );
  }
  return ctx;
}

// ---------------------------------------------------------------------------
// Controlled/uncontrolled helper (same shape FormLayout uses — duplicated to
// keep organisms self-contained, no cross-organism imports for plumbing).
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
        `<WizardDialog.Root> switched between controlled and uncontrolled for ${label}. Pick one and stick with it.`,
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

function useControllableNumber(params: {
  label: string;
  controlled: number | undefined;
  defaultValue: number;
  onChange: ((next: number) => void) | undefined;
}): [number, (next: number) => void] {
  const { label, controlled, defaultValue, onChange } = params;
  const isControlled = controlled !== undefined;
  const [uncontrolled, setUncontrolled] = useState(defaultValue);
  const value = isControlled ? (controlled as number) : uncontrolled;

  const wasControlled = useRef(isControlled);
  useEffect(() => {
    if (wasControlled.current !== isControlled) {
      // eslint-disable-next-line no-console
      console.warn(
        `<WizardDialog.Root> switched between controlled and uncontrolled for ${label}. Pick one and stick with it.`,
      );
      wasControlled.current = isControlled;
    }
  }, [isControlled, label]);

  const setValue = useCallback(
    (next: number) => {
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

/** Props for {@link WizardDialogRoot}. */
export interface WizardDialogRootProps {
  /** Controlled open state. When set, Root reads this and ignores
   * `defaultOpen`. */
  open?: boolean;
  /** Uncontrolled initial open state.
   * @default false
   */
  defaultOpen?: boolean;
  /** Fires when the dialog should open or close — Escape (if `canClose`),
   * overlay click, Finish, or the consumer calls `close()`. */
  onOpenChange?: (next: boolean) => void;
  /** Controlled current step (0-based). Pair with `onStepChange` to own the
   * state yourself. */
  step?: number;
  /** Uncontrolled initial step (0-based).
   * @default 0
   */
  defaultStep?: number;
  /** Fires when the step index changes — Next/Back, or consumer-driven
   * setters. */
  onStepChange?: (next: number) => void;
  /** Called when the last step's Finish button fires. Return a Promise to
   * delay the close; Root flips Actions into its loading state while the
   * promise is in flight. The dialog auto-closes after the promise resolves. */
  onComplete?: () => void | Promise<void>;
  /** Whether Escape / overlay click / Back-on-step-0 can close the dialog.
   * Useful for forced-onboarding flows where the user must complete the
   * wizard or explicitly Cancel out.
   * @default true
   */
  canClose?: boolean;
  /** Modal width preset, forwarded to ModalShell.
   * @default 'lg'
   */
  width?: ModalWidth;
  /** Children — typically `<WizardDialog.Title>`, `<WizardDialog.Progress>`,
   * one or more `<WizardDialog.Step>`s, and `<WizardDialog.Actions>`. */
  children?: ReactNode;
}

export const WizardDialogRoot = forwardRef<HTMLDivElement, WizardDialogRootProps>(
  function WizardDialogRoot(
    {
      open: openProp,
      defaultOpen = false,
      onOpenChange,
      step: stepProp,
      defaultStep = 0,
      onStepChange,
      onComplete,
      canClose = true,
      width = 'lg',
      children,
    },
    ref,
  ): React.JSX.Element | null {
    const [open, setOpen] = useControllableBoolean({
      label: 'open',
      controlled: openProp,
      defaultValue: defaultOpen,
      onChange: onOpenChange,
    });

    const [step, setStep] = useControllableNumber({
      label: 'step',
      controlled: stepProp,
      defaultValue: defaultStep,
      onChange: onStepChange,
    });

    const [busy, setBusy] = useState(false);

    // Step registration. Total count is the size of the registration map; the
    // current step's validate is looked up by step index at Next-time.
    // Refs (not state) so registration during render doesn't trigger extra
    // renders — we only need the count via a separate state slot.
    const validateByIndex = useRef(new Map<number, (() => boolean | Promise<boolean>) | undefined>());
    const [totalSteps, setTotalSteps] = useState(0);

    const registerStep = useCallback(
      (index: number, validate: (() => boolean | Promise<boolean>) | undefined) => {
        validateByIndex.current.set(index, validate);
        setTotalSteps(validateByIndex.current.size);
        return () => {
          validateByIndex.current.delete(index);
          setTotalSteps(validateByIndex.current.size);
        };
      },
      [],
    );

    const titleId = useId();

    const close = useCallback(() => {
      if (!canClose) return;
      setOpen(false);
    }, [canClose, setOpen]);

    const next = useCallback(async () => {
      if (busy) return;
      const validate = validateByIndex.current.get(step);
      if (validate !== undefined) {
        const result = validate();
        if (result && typeof (result as Promise<boolean>).then === 'function') {
          setBusy(true);
          try {
            const ok = await (result as Promise<boolean>);
            if (!ok) return;
          } finally {
            setBusy(false);
          }
        } else if (!result) {
          return;
        }
      }
      setStep(step + 1);
    }, [busy, setStep, step]);

    const back = useCallback(() => {
      if (busy) return;
      if (step === 0) {
        close();
        return;
      }
      setStep(step - 1);
    }, [busy, close, setStep, step]);

    const finish = useCallback(async () => {
      if (busy) return;
      const validate = validateByIndex.current.get(step);
      if (validate !== undefined) {
        const result = validate();
        if (result && typeof (result as Promise<boolean>).then === 'function') {
          setBusy(true);
          try {
            const ok = await (result as Promise<boolean>);
            if (!ok) return;
          } finally {
            setBusy(false);
          }
        } else if (!result) {
          return;
        }
      }
      const completion = onComplete?.();
      if (completion && typeof (completion as Promise<void>).then === 'function') {
        setBusy(true);
        try {
          await completion;
        } finally {
          setBusy(false);
        }
      }
      // Bypass canClose on Finish — the wizard has successfully completed, so
      // closing is the natural next step even if Escape is disabled.
      setOpen(false);
    }, [busy, onComplete, setOpen, step]);

    const value = useMemo<WizardDialogContextValue>(
      () => ({
        step,
        totalSteps,
        busy,
        registerStep,
        next,
        back,
        finish,
        close,
        canClose,
        titleId,
      }),
      [step, totalSteps, busy, registerStep, next, back, finish, close, canClose, titleId],
    );

    if (!open) {
      // Render nothing when closed — steps still call registerStep on mount
      // when the dialog opens, so totalSteps is populated for Actions.
      return (
        <WizardDialogContext.Provider value={value}>
          {null}
        </WizardDialogContext.Provider>
      );
    }

    return (
      <WizardDialogContext.Provider value={value}>
        <ModalShell
          ref={ref}
          onClose={close}
          width={width}
          titleId={titleId}
        >
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: t.spaceXl,
              fontFamily: t.fontSans,
              color: t.colorText,
            }}
            data-testid="wizarddialog-content"
          >
            {children}
          </div>
        </ModalShell>
      </WizardDialogContext.Provider>
    );
  },
);

// ---------------------------------------------------------------------------
// Title
// ---------------------------------------------------------------------------

/** Props for {@link WizardDialogTitle}. */
export interface WizardDialogTitleProps {
  /** Title text. Rendered as `<h2>` with the shared modal heading style. */
  children: ReactNode;
}

export function WizardDialogTitle({
  children,
}: WizardDialogTitleProps): React.JSX.Element {
  const { titleId } = useWizardDialogContext('Title');
  return (
    <h2 id={titleId} style={modalHeadingStyle}>
      {children}
    </h2>
  );
}

// ---------------------------------------------------------------------------
// Progress
// ---------------------------------------------------------------------------

/** Props for {@link WizardDialogProgress}. */
export interface WizardDialogProgressProps {
  /** Indicator mode.
   * - `'numeric'` — "Step N of M" text with the current step label (if any).
   * - `'bar'` — a segmented `<ProgressBar>` filling step / total.
   * @default 'numeric'
   */
  mode?: WizardDialogProgressMode;
  /** Labels for each step — used by the numeric mode as the right-aligned
   * label, and by both modes for the progressbar's `aria-label`. Length
   * should match the number of Step children; shorter arrays silently skip
   * the current step's label. */
  stepLabels?: string[];
}

export function WizardDialogProgress({
  mode = 'numeric',
  stepLabels,
}: WizardDialogProgressProps): React.JSX.Element {
  const { step, totalSteps } = useWizardDialogContext('Progress');

  // When no steps have registered yet (first mount), fall back to 1 to keep
  // the indicator from rendering a zero-of-zero state.
  const total = Math.max(totalSteps, 1);
  const current = Math.min(step + 1, total);
  const currentLabel = stepLabels?.[step];
  const progressLabel = currentLabel ?? `Step ${current} of ${total}`;

  if (mode === 'bar') {
    return (
      <ProgressBar
        aria-label={progressLabel}
        segments={[
          { value: current, color: 'primary' },
          { value: total - current, color: 'muted' },
        ]}
        height="sm"
      />
    );
  }

  return (
    <div
      role="status"
      aria-label={progressLabel}
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: t.spaceSm,
      }}
    >
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          fontFamily: t.fontSans,
        }}
      >
        <span
          style={{
            fontSize: t.fontSizeXs,
            color: t.colorTextMuted,
          }}
        >
          {`Step ${current} of ${total}`}
        </span>
        {currentLabel !== undefined && (
          <span
            style={{
              fontSize: t.fontSizeXs,
              fontWeight: t.fontWeightSemibold,
              color: t.colorText,
            }}
          >
            {currentLabel}
          </span>
        )}
      </div>
      <ProgressBar
        aria-label={progressLabel}
        segments={[
          { value: current, color: 'primary' },
          { value: total - current, color: 'muted' },
        ]}
        height="sm"
      />
    </div>
  );
}

// ---------------------------------------------------------------------------
// Step
// ---------------------------------------------------------------------------

const FOCUSABLE_SELECTOR = [
  'a[href]',
  'button:not(:disabled)',
  'input:not(:disabled)',
  'select:not(:disabled)',
  'textarea:not(:disabled)',
  '[tabindex]:not([tabindex="-1"])',
].join(', ');

/** Props for {@link WizardDialogStep}. */
export interface WizardDialogStepProps {
  /** Zero-based index of this step. Must be unique per step; JSX order is
   * the source of truth for the user-visible sequence. */
  index: number;
  /** Optional validator called when the user presses Next (or Finish on the
   * last step). Returning `false` (or a Promise that resolves to `false`)
   * blocks the advance. Returning a Promise puts the Next button into its
   * loading state while the promise is in flight. */
  validate?: () => boolean | Promise<boolean>;
  /** The step's content — typically a Stack of Field / Input / Select. */
  children: ReactNode;
}

export function WizardDialogStep({
  index,
  validate,
  children,
}: WizardDialogStepProps): React.JSX.Element | null {
  const { step, registerStep } = useWizardDialogContext('Step');
  const containerRef = useRef<HTMLDivElement | null>(null);

  // Register validator so Root's Next/Finish handlers can find it. Re-runs
  // when `validate` changes so consumer closures capturing fresh state win.
  useEffect(() => registerStep(index, validate), [index, registerStep, validate]);

  // When this step becomes active, move focus to the first focusable
  // descendant so keyboard users land on the right element (matches ModalShell's
  // initial-focus behavior, but for intra-dialog step transitions). The outer
  // ModalShell effect handles focus on initial mount; this one handles
  // step → step transitions.
  const isActive = step === index;
  useEffect(() => {
    if (!isActive) return;
    const container = containerRef.current;
    if (container === null) return;
    const first = container.querySelector<HTMLElement>(FOCUSABLE_SELECTOR);
    if (first !== null) {
      first.focus();
    }
  }, [isActive]);

  if (!isActive) return null;

  return (
    <div
      ref={containerRef}
      role="group"
      aria-label={`Step ${index + 1}`}
      data-wizard-step={index}
      style={{ display: 'flex', flexDirection: 'column', gap: t.spaceLg }}
    >
      {children}
    </div>
  );
}

// ---------------------------------------------------------------------------
// Actions
// ---------------------------------------------------------------------------

/** Props for {@link WizardDialogActions}. */
export interface WizardDialogActionsProps {
  /** Label for the Back button on step 0 — when `canClose` is true this
   * doubles as the Cancel button.
   * @default 'Cancel'
   */
  cancelLabel?: ReactNode;
  /** Label for the Back button on step > 0.
   * @default 'Back'
   */
  backLabel?: ReactNode;
  /** Label for the Next button.
   * @default 'Continue'
   */
  nextLabel?: ReactNode;
  /** Label for the Finish button on the last step.
   * @default 'Finish'
   */
  finishLabel?: ReactNode;
  /** Label shown on Next / Finish while async validation or `onComplete`
   * is in flight.
   * @default 'Working\u2026'
   */
  busyLabel?: ReactNode;
  /** Optional extra content rendered at the start of the action row — e.g.
   * a "Skip" link or a secondary action. Renders before the Back button
   * with `marginRight: auto` spacing. */
  children?: ReactNode;
}

export function WizardDialogActions({
  cancelLabel = 'Cancel',
  backLabel = 'Back',
  nextLabel = 'Continue',
  finishLabel = 'Finish',
  busyLabel = 'Working\u2026',
  children,
}: WizardDialogActionsProps): React.JSX.Element {
  const {
    step,
    totalSteps,
    busy,
    next,
    back,
    finish,
    canClose,
  } = useWizardDialogContext('Actions');

  const isFirst = step === 0;
  const isLast = totalSteps > 0 && step === totalSteps - 1;

  const backStyle: CSSProperties = {
    // On step 0 without `canClose`, there's nothing for Back to do — hide
    // it rather than show a dead button.
    visibility: isFirst && !canClose ? 'hidden' : undefined,
  };

  return (
    <div
      role="toolbar"
      aria-label="Wizard navigation"
      data-state={busy ? 'busy' : 'idle'}
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: t.spaceSm,
      }}
    >
      {children !== undefined && (
        <div style={{ marginRight: 'auto' }}>{children}</div>
      )}
      <div style={backStyle}>
        <Button
          variant="ghost"
          onClick={back}
          disabled={busy || (isFirst && !canClose)}
          type="button"
        >
          {isFirst ? cancelLabel : backLabel}
        </Button>
      </div>
      <Button
        variant="primary"
        onClick={() => {
          if (isLast) {
            void finish();
          } else {
            void next();
          }
        }}
        loading={busy}
        disabled={busy}
        type="button"
        // When the button flips into its loading state the Button primitive
        // swaps `children` for a spinner, which strips the accessible name.
        // Forward the busy label via aria-label so screen readers keep
        // announcing "Working…" (or whatever the consumer passed).
        aria-label={busy && typeof busyLabel === 'string' ? busyLabel : undefined}
      >
        {busy ? busyLabel : isLast ? finishLabel : nextLabel}
      </Button>
    </div>
  );
}

// ---------------------------------------------------------------------------
// Compound export
// ---------------------------------------------------------------------------

/**
 * Stepped form in a modal. Generalizes the hand-assembled OnboardingFlow
 * pattern (ModalShell + progress + stepped content + Back/Next/Finish).
 *
 * Consumer owns step content, field state, and validation. WizardDialog owns
 * the modal chrome, step bookkeeping, focus management between steps, and
 * the navigation affordance.
 *
 * @example
 * ```tsx
 * const [open, setOpen] = useState(false);
 * const [name, setName] = useState('');
 *
 * <WizardDialog.Root
 *   open={open}
 *   onOpenChange={setOpen}
 *   onComplete={async () => { await createWorkspace({ name }); }}
 * >
 *   <WizardDialog.Title>Create a workspace</WizardDialog.Title>
 *   <WizardDialog.Progress stepLabels={['Workspace', 'Team', 'Plan']} />
 *   <WizardDialog.Step index={0} validate={() => name.trim().length > 0}>
 *     <Field label="Workspace name" required>
 *       <Input value={name} onChange={(e) => setName(e.target.value)} />
 *     </Field>
 *   </WizardDialog.Step>
 *   <WizardDialog.Step index={1}> <TeamFields /> </WizardDialog.Step>
 *   <WizardDialog.Step index={2}> <PlanFields /> </WizardDialog.Step>
 *   <WizardDialog.Actions />
 * </WizardDialog.Root>
 * ```
 */
export const WizardDialog = {
  Root: WizardDialogRoot,
  Title: WizardDialogTitle,
  Progress: WizardDialogProgress,
  Step: WizardDialogStep,
  Actions: WizardDialogActions,
};
