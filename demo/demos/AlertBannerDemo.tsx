import { useState } from 'react';
import { AlertBanner, Stack, Button } from '@4lt7ab/ui';
import type { AlertBannerVariant } from '@4lt7ab/ui';

export function AlertBannerDemo(): React.JSX.Element {
  const [dismissed, setDismissed] = useState<Record<string, boolean>>({});
  const [autoDismissKey, setAutoDismissKey] = useState(0);
  const [autoDismissVisible, setAutoDismissVisible] = useState(false);

  const dismiss = (id: string) => setDismissed((prev) => ({ ...prev, [id]: true }));
  const reset = () => {
    setDismissed({});
    setAutoDismissVisible(false);
  };

  const variants: AlertBannerVariant[] = ['info', 'warning', 'error', 'success'];
  const messages: Record<AlertBannerVariant, string> = {
    info: 'A new version of the app is available. Refresh to update.',
    warning: 'Your session will expire in 5 minutes.',
    error: 'Connection lost. Changes may not be saved.',
    success: 'All changes have been saved successfully.',
  };

  return (
    <Stack gap="md">
      <Stack gap="sm">
        <h3 style={{ margin: 0, fontSize: '1rem', fontWeight: 600 }}>All variants</h3>
        <p style={{ margin: 0, fontSize: '0.875rem', color: 'var(--color-text-muted)' }}>
          Four severity levels with default icons.
        </p>
        <Stack gap="xs">
          {variants.map((v) => (
            <AlertBanner key={v} variant={v}>
              {messages[v]}
            </AlertBanner>
          ))}
        </Stack>
      </Stack>

      <Stack gap="sm">
        <h3 style={{ margin: 0, fontSize: '1rem', fontWeight: 600 }}>Dismissable</h3>
        <p style={{ margin: 0, fontSize: '0.875rem', color: 'var(--color-text-muted)' }}>
          Provide <code>onDismiss</code> to show a close button.
        </p>
        <Stack gap="xs">
          {variants.map((v) =>
            dismissed[v] ? null : (
              <AlertBanner key={v} variant={v} onDismiss={() => dismiss(v)}>
                {messages[v]}
              </AlertBanner>
            ),
          )}
        </Stack>
        {Object.keys(dismissed).length > 0 && (
          <Button variant="ghost" size="sm" onClick={reset}>
            Reset dismissed banners
          </Button>
        )}
      </Stack>

      <Stack gap="sm">
        <h3 style={{ margin: 0, fontSize: '1rem', fontWeight: 600 }}>Auto-dismiss (5 seconds)</h3>
        <p style={{ margin: 0, fontSize: '0.875rem', color: 'var(--color-text-muted)' }}>
          The banner disappears automatically after 5 seconds.
        </p>
        {autoDismissVisible ? (
          <AlertBanner
            key={autoDismissKey}
            variant="success"
            onDismiss={() => setAutoDismissVisible(false)}
            autoDismiss={5000}
          >
            This banner will auto-dismiss in 5 seconds.
          </AlertBanner>
        ) : (
          <Button
            variant="secondary"
            size="sm"
            onClick={() => {
              setAutoDismissKey((k) => k + 1);
              setAutoDismissVisible(true);
            }}
          >
            Show auto-dismiss banner
          </Button>
        )}
      </Stack>
    </Stack>
  );
}
