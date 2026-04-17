import { ToastProvider, useToast, Button, Stack } from '@4lt7ab/ui';
import { DocBlock, PropDemo, type PropMeta } from '../components/DocBlock';

const props: PropMeta[] = [
  // ToastProvider
  { name: 'position (Provider)', type: "'top-right' | 'top-left' | 'bottom-right' | 'bottom-left'", default: "'top-right'", description: 'Screen position of the toast stack.' },
  { name: 'children (Provider)', type: 'ReactNode', required: true, description: 'Application content that can access useToast().' },
  // showToast options
  { name: 'message (showToast)', type: 'string', required: true, description: 'Toast message text to display.' },
  { name: 'type (showToast)', type: "'success' | 'error' | 'info' | 'warning'", default: "'info'", description: 'Visual type controlling the toast color.' },
  { name: 'duration (showToast)', type: 'number', default: '4000', description: 'Auto-dismiss duration in milliseconds. Pass 0 to disable auto-dismiss (the toast stays until the user clicks ×).' },
];

function ToastButtons(): React.JSX.Element {
  const { showToast } = useToast();

  return (
    <DocBlock props={props}>
      <PropDemo name="type" description="Four toast types with distinct colors and left accent borders. Click to trigger each variant.">
        <Stack direction="horizontal" gap="sm" wrap>
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
      </PropDemo>

      <PropDemo name="duration" description="Override the default 4-second auto-dismiss. A drain bar at the bottom of each toast visualizes remaining time and pauses on hover. Pass 0 for a persistent toast (no bar).">
        <Stack direction="horizontal" gap="sm" wrap>
          <Button
            variant="ghost"
            onClick={() => showToast('This message lasts 8 seconds — hover to pause.', { type: 'info', duration: 8000 })}
          >
            Long toast (8s)
          </Button>
          <Button
            variant="ghost"
            onClick={() => showToast('Persistent — click × to dismiss.', { type: 'warning', duration: 0 })}
          >
            Persistent (no auto-dismiss)
          </Button>
        </Stack>
      </PropDemo>
    </DocBlock>
  );
}

export function ToastDemo(): React.JSX.Element {
  return (
    <ToastProvider>
      <ToastButtons />
    </ToastProvider>
  );
}
