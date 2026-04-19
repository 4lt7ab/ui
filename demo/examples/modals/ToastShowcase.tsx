import { Button, Stack, ToastProvider, useToast, semantic as t } from '@4lt7ab/ui';

// ---------------------------------------------------------------------------
// Toast showcase — live example for 07-modals.md
// ---------------------------------------------------------------------------
//
// Toasts need a provider. The demo app doesn't install one globally (no
// chrome the consumer didn't ask for), so this widget wraps its own
// `ToastProvider` so the <LiveExample> frame stays self-contained.
//
// Triggers cover all four visual types (info / success / warning / error)
// plus a "queue three" trigger so readers can see the stacking + timer
// pause-on-hover behavior. Each toast auto-dismisses after ~4s; hovering
// the toast (or focusing the dismiss button) pauses the drain animation.

function Triggers(): React.JSX.Element {
  const { showToast } = useToast();

  return (
    <Stack gap="md">
      <Stack direction="horizontal" gap="sm" wrap>
        <Button
          variant="secondary"
          onClick={() => showToast('Copied link to clipboard', 'info')}
        >
          Info
        </Button>
        <Button
          variant="primary"
          onClick={() => showToast('Project saved', 'success')}
        >
          Success
        </Button>
        <Button
          variant="secondary"
          onClick={() =>
            showToast('Your trial expires in 3 days', { type: 'warning', duration: 6000 })
          }
        >
          Warning (6s)
        </Button>
        <Button
          variant="destructive"
          onClick={() => showToast('Could not save — try again', 'error')}
        >
          Error
        </Button>
      </Stack>

      <Stack direction="horizontal" gap="sm" wrap>
        <Button
          variant="ghost"
          onClick={() => {
            showToast('Task created', 'success');
            setTimeout(() => showToast('Task assigned', 'info'), 200);
            setTimeout(
              () => showToast('Notification sent', { type: 'success', duration: 6000 }),
              400,
            );
          }}
        >
          Queue three toasts
        </Button>
        <span style={{ fontSize: t.fontSizeXs, color: t.colorTextMuted, alignSelf: 'center' }}>
          Hover a toast to pause its auto-dismiss timer.
        </span>
      </Stack>
    </Stack>
  );
}

export function ToastShowcase(): React.JSX.Element {
  // Local provider so the widget is self-contained — the demo app root
  // intentionally doesn't install ToastProvider globally.
  return (
    <ToastProvider position="top-right">
      <Triggers />
    </ToastProvider>
  );
}
