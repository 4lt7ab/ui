import { useState } from 'react';
import { Button, EmptyState, ErrorBoundary, Stack, semantic as t } from '@4lt7ab/ui';

// ---------------------------------------------------------------------------
// ErrorBoundary showcase — live example for 07-modals.md
// ---------------------------------------------------------------------------
//
// Two boundaries side by side so the reader can feel both branches:
//
//   1. Default fallback — renders the built-in themed error card with
//      message + "Show stack trace" toggle + "Try again" reset button.
//   2. Custom fallback — the consumer owns the fallback UI; this one
//      reaches for `EmptyState` with a reset action so the boundary
//      integrates with the rest of the library's zero-state surface.
//
// ErrorBoundary only catches render errors (not event handlers or async
// code), so the trigger uses a state flag that flips the child into a
// throwing render — not an `onClick` that throws directly.

function RiskyChild({ shouldThrow, label }: { shouldThrow: boolean; label: string }): React.JSX.Element {
  if (shouldThrow) {
    throw new Error(`${label} crashed while rendering the widget body.`);
  }
  return (
    <div
      style={{
        padding: t.spaceMd,
        background: t.colorSurfaceRaised,
        borderRadius: t.radiusMd,
        fontSize: t.fontSizeSm,
        color: t.colorTextMuted,
      }}
    >
      <strong style={{ color: t.colorText }}>{label}</strong> rendering happily. Click
      the trigger above to flip this subtree into a throwing render.
    </div>
  );
}

function BoundaryCase({ label }: { label: string }): React.JSX.Element {
  const [shouldThrow, setShouldThrow] = useState(false);
  return (
    <Stack gap="sm">
      <Stack direction="horizontal" gap="sm" wrap>
        <Button
          variant="destructive"
          onClick={() => setShouldThrow(true)}
          disabled={shouldThrow}
        >
          Trigger render error
        </Button>
        <Button variant="ghost" onClick={() => setShouldThrow(false)} disabled={!shouldThrow}>
          Untrigger
        </Button>
      </Stack>
      <ErrorBoundary
        key={label}
        onError={(error) => {
          // eslint-disable-next-line no-console
          console.log(`[${label}] boundary caught:`, error.message);
        }}
      >
        <RiskyChild shouldThrow={shouldThrow} label={label} />
      </ErrorBoundary>
    </Stack>
  );
}

function CustomFallbackCase(): React.JSX.Element {
  const [shouldThrow, setShouldThrow] = useState(false);
  return (
    <Stack gap="sm">
      <Stack direction="horizontal" gap="sm" wrap>
        <Button
          variant="destructive"
          onClick={() => setShouldThrow(true)}
          disabled={shouldThrow}
        >
          Trigger render error
        </Button>
        <Button variant="ghost" onClick={() => setShouldThrow(false)} disabled={!shouldThrow}>
          Untrigger
        </Button>
      </Stack>
      <ErrorBoundary
        fallback={({ error, resetErrorBoundary }) => (
          <EmptyState
            icon="error"
            message={`Something broke: ${error.message}`}
            action={
              <Button
                variant="secondary"
                onClick={() => {
                  setShouldThrow(false);
                  resetErrorBoundary();
                }}
              >
                Try again
              </Button>
            }
          />
        )}
      >
        <RiskyChild shouldThrow={shouldThrow} label="Custom fallback" />
      </ErrorBoundary>
    </Stack>
  );
}

export function ErrorBoundaryShowcase(): React.JSX.Element {
  return (
    <Stack gap="lg">
      <Stack gap="sm">
        <strong style={{ fontSize: t.fontSizeSm, color: t.colorText }}>
          Default fallback
        </strong>
        <BoundaryCase label="Default fallback" />
      </Stack>
      <Stack gap="sm">
        <strong style={{ fontSize: t.fontSizeSm, color: t.colorText }}>
          Custom fallback (EmptyState)
        </strong>
        <CustomFallbackCase />
      </Stack>
    </Stack>
  );
}
