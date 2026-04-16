import { useState } from 'react';
import { ErrorBoundary, Button, Stack, Card } from '@4lt7ab/ui';
import { semantic as t } from '@4lt7ab/core';
import { DocBlock, PropDemo, type PropMeta } from '../components/DocBlock';

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

const props: PropMeta[] = [
  { name: 'children', type: 'ReactNode', required: true, description: 'Content to render when no error has occurred.' },
  { name: 'fallback', type: '(props: { error, resetErrorBoundary }) => ReactNode', description: 'Custom fallback UI renderer. Receives the caught error and a reset function.' },
  { name: 'onError', type: '(error: Error, errorInfo: ErrorInfo) => void', description: 'Callback fired when an error is caught. Useful for logging.' },
];

export function ErrorBoundaryDemo(): React.JSX.Element {
  const [shouldThrow, setShouldThrow] = useState(false);
  const [key, setKey] = useState(0);

  return (
    <DocBlock props={props}>
      <PropDemo name="Default fallback" description="When no fallback prop is provided, a themed error card is shown with the error message, optional stack trace, and a retry button.">
        <Stack gap="sm">
          <Stack direction="horizontal" gap="sm">
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
          </Stack>
          <ErrorBoundary key={key}>
            <BuggyCounter shouldThrow={shouldThrow} />
          </ErrorBoundary>
        </Stack>
      </PropDemo>

      <PropDemo name="fallback" description="Use the fallback render prop for a custom error UI. Receives the error and a resetErrorBoundary function.">
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
      </PropDemo>
    </DocBlock>
  );
}
