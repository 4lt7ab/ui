import { useState } from 'react';
import { ErrorBoundary, Button, Stack, Card } from '@4lt7ab/ui';
import { semantic as t } from '@4lt7ab/core';

/** A component that throws on demand, for demonstrating ErrorBoundary. */
function BuggyCounter({ shouldThrow }: { shouldThrow: boolean }): React.JSX.Element {
  if (shouldThrow) {
    throw new Error('Simulated render error: counter value is invalid');
  }
  return (
    <p style={{ margin: 0, fontFamily: t.fontSans, color: t.colorText }}>
      Content rendered successfully.
    </p>
  );
}

export function ErrorBoundaryDemo(): React.JSX.Element {
  const [shouldThrow, setShouldThrow] = useState(false);
  const [key, setKey] = useState(0);

  return (
    <Stack gap="xl">
      <Stack gap="sm">
        <h3 style={{ margin: 0, fontSize: '1rem', fontWeight: 600 }}>Default fallback</h3>
        <p style={{ margin: 0, fontFamily: t.fontSans, fontSize: t.fontSizeSm, color: t.colorTextMuted }}>
          Click the button to trigger a render error. The ErrorBoundary catches it and shows a themed fallback with retry.
        </p>
        <div style={{ display: 'flex', gap: t.spaceSm }}>
          <Button
            variant="destructive"
            size="sm"
            onClick={() => { setShouldThrow(true); setKey(k => k + 1); }}
          >
            Trigger error
          </Button>
          <Button
            variant="secondary"
            size="sm"
            onClick={() => { setShouldThrow(false); setKey(k => k + 1); }}
          >
            Reset (no error)
          </Button>
        </div>
        <ErrorBoundary key={key}>
          <BuggyCounter shouldThrow={shouldThrow} />
        </ErrorBoundary>
      </Stack>

      <Stack gap="sm">
        <h3 style={{ margin: 0, fontSize: '1rem', fontWeight: 600 }}>Custom fallback</h3>
        <p style={{ margin: 0, fontFamily: t.fontSans, fontSize: t.fontSizeSm, color: t.colorTextMuted }}>
          Uses the <code style={{ fontFamily: t.fontMono }}>fallback</code> render prop for a minimal custom UI.
        </p>
        <ErrorBoundary
          fallback={({ error, resetErrorBoundary }) => (
            <div style={{ borderColor: t.colorWarning, borderWidth: '2px' }}>
              <Card padding="md">
                <Stack gap="sm">
                  <span style={{ fontFamily: t.fontSans, color: t.colorWarning, fontWeight: t.fontWeightSemibold }}>
                    Custom fallback
                  </span>
                  <span style={{ fontFamily: t.fontMono, fontSize: t.fontSizeSm, color: t.colorTextSecondary }}>
                    {error.message}
                  </span>
                  <div>
                    <Button variant="secondary" size="sm" onClick={resetErrorBoundary}>
                      Retry
                    </Button>
                  </div>
                </Stack>
              </Card>
            </div>
          )}
        >
          <BuggyCounter shouldThrow />
        </ErrorBoundary>
      </Stack>
    </Stack>
  );
}
