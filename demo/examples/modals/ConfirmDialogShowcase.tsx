import { useState } from 'react';
import { Button, ConfirmDialog, Stack, semantic as t } from '@4lt7ab/ui';

// ---------------------------------------------------------------------------
// ConfirmDialog showcase — live example for 07-modals.md
// ---------------------------------------------------------------------------
//
// Three rails the prose version can't carry:
//
//   - Three variants side-by-side (destructive / warning / info) so the
//     confirm-button color shift is visible without flipping between
//     code fences.
//   - Async `onConfirm`: the Confirm button flips to "Loading…" while the
//     returned promise is in flight; Cancel is disabled so the user
//     can't double-submit.
//   - Cancel paths: Cancel button, Escape, and overlay click all route
//     through `onCancel` — open the dialog and try each.
//
// A small activity log under the triggers shows which path fired so the
// reader can distinguish "confirmed" from "dismissed."

type Variant = 'destructive' | 'warning' | 'info';

interface Pending {
  variant: Variant;
  title: string;
  message: string;
  confirmLabel: string;
  async: boolean;
}

const pendingFor = (variant: Variant): Pending => {
  if (variant === 'destructive') {
    return {
      variant,
      title: 'Delete project?',
      message: 'This removes the project and all of its tasks. This action cannot be undone.',
      confirmLabel: 'Delete',
      async: false,
    };
  }
  if (variant === 'warning') {
    return {
      variant,
      title: 'Archive project?',
      message: 'Archived projects are hidden from the dashboard but can be restored within 90 days.',
      confirmLabel: 'Archive',
      async: true,
    };
  }
  return {
    variant,
    title: 'Publish changes?',
    message: 'Your updates will be visible to every teammate immediately.',
    confirmLabel: 'Publish',
    async: false,
  };
};

export function ConfirmDialogShowcase(): React.JSX.Element {
  const [pending, setPending] = useState<Pending | null>(null);
  const [lastAction, setLastAction] = useState<string | null>(null);

  const dismiss = (reason: string): void => {
    if (pending) {
      setLastAction(`${pending.title} — ${reason}`);
    }
    setPending(null);
  };

  const handleConfirm = async (): Promise<void> => {
    if (!pending) return;
    if (pending.async) {
      await new Promise((r) => setTimeout(r, 1200));
    }
    setLastAction(`${pending.title} — confirmed`);
    setPending(null);
  };

  return (
    <Stack gap="md">
      <Stack direction="horizontal" gap="sm" wrap>
        <Button variant="destructive" onClick={() => setPending(pendingFor('destructive'))}>
          Delete (destructive)
        </Button>
        <Button variant="primary" onClick={() => setPending(pendingFor('warning'))}>
          Archive (warning, async)
        </Button>
        <Button variant="secondary" onClick={() => setPending(pendingFor('info'))}>
          Publish (info)
        </Button>
      </Stack>

      <span style={{ fontSize: t.fontSizeXs, color: t.colorTextMuted }}>
        Last action: <code>{lastAction ?? '(none yet)'}</code>
      </span>

      {pending ? (
        <ConfirmDialog
          title={pending.title}
          message={pending.message}
          confirmLabel={pending.confirmLabel}
          variant={pending.variant}
          onConfirm={handleConfirm}
          onCancel={() => dismiss('dismissed')}
        />
      ) : null}
    </Stack>
  );
}
