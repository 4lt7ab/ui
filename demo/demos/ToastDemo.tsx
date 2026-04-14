import { ToastProvider, useToast, Button, Stack } from '@4lt7ab/ui';

function ToastButtons(): React.JSX.Element {
  const { showToast } = useToast();

  return (
    <Stack gap="md">
      <Stack gap="sm">
        <h3 style={{ margin: 0, fontSize: '1rem', fontWeight: 600 }}>Toast types</h3>
        <p style={{ margin: 0, fontSize: '0.875rem', color: 'var(--color-text-muted)' }}>
          Click a button to trigger each toast variant.
        </p>
        <Stack direction="horizontal" gap="sm">
          <Button variant="primary" onClick={() => showToast('Item saved successfully.', 'success')}>
            Success
          </Button>
          <Button variant="destructive" onClick={() => showToast('Something went wrong.', 'error')}>
            Error
          </Button>
          <Button variant="secondary" onClick={() => showToast('New update available.', 'info')}>
            Info
          </Button>
          <Button variant="secondary" onClick={() => showToast('Storage almost full.', 'warning')}>
            Warning
          </Button>
        </Stack>
      </Stack>

      <Stack gap="sm">
        <h3 style={{ margin: 0, fontSize: '1rem', fontWeight: 600 }}>Custom duration</h3>
        <p style={{ margin: 0, fontSize: '0.875rem', color: 'var(--color-text-muted)' }}>
          This toast stays visible for 8 seconds instead of the default 4.
        </p>
        <Button
          variant="ghost"
          onClick={() => showToast('This message lasts 8 seconds.', { type: 'info', duration: 8000 })}
        >
          Long toast
        </Button>
      </Stack>
    </Stack>
  );
}

export function ToastDemo(): React.JSX.Element {
  return (
    <ToastProvider>
      <ToastButtons />
    </ToastProvider>
  );
}
