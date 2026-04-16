import { useState } from 'react';
import { AlertBanner, Stack, Button } from '@4lt7ab/ui';
import type { AlertBannerVariant } from '@4lt7ab/ui';
import { DocBlock, PropDemo, type PropMeta } from '../components/DocBlock';

const variants: AlertBannerVariant[] = ['info', 'warning', 'error', 'success'];
const messages: Record<AlertBannerVariant, string> = {
  info: 'A new version of the app is available. Refresh to update.',
  warning: 'Your session will expire in 5 minutes.',
  error: 'Connection lost. Changes may not be saved.',
  success: 'All changes have been saved successfully.',
};

const props: PropMeta[] = [
  { name: 'variant', type: "'info' | 'warning' | 'error' | 'success'", required: true, description: 'Severity variant controlling the banner color and default icon.' },
  { name: 'children', type: 'ReactNode', required: true, description: 'Message content.' },
  { name: 'onDismiss', type: '() => void', description: 'If provided, shows a dismiss button and is called on dismiss.' },
  { name: 'autoDismiss', type: 'number', description: 'Milliseconds before auto-dismissing (calls onDismiss).' },
  { name: 'icon', type: 'ReactNode', description: 'Optional leading icon. Defaults to a variant-appropriate icon.' },
];

export function AlertBannerDemo(): React.JSX.Element {
  const [dismissed, setDismissed] = useState<Record<string, boolean>>({});
  const [autoDismissKey, setAutoDismissKey] = useState(0);
  const [autoDismissVisible, setAutoDismissVisible] = useState(false);

  const dismiss = (id: string) => setDismissed((prev) => ({ ...prev, [id]: true }));
  const reset = () => {
    setDismissed({});
    setAutoDismissVisible(false);
  };

  return (
    <DocBlock props={props}>
      <PropDemo name="variant" description="Four severity levels with color-coded backgrounds, borders, and default icons.">
        <Stack gap="xs">
          {variants.map((v) => (
            <AlertBanner key={v} variant={v}>
              {messages[v]}
            </AlertBanner>
          ))}
        </Stack>
      </PropDemo>

      <PropDemo name="onDismiss" description="Provide onDismiss to show a close button. Click the X to dismiss each banner.">
        <Stack gap="xs">
          {variants.map((v) =>
            dismissed[v] ? null : (
              <AlertBanner key={v} variant={v} onDismiss={() => dismiss(v)}>
                {messages[v]}
              </AlertBanner>
            ),
          )}
          {Object.keys(dismissed).length > 0 && (
            <Button variant="ghost" size="sm" onClick={reset}>
              Reset dismissed banners
            </Button>
          )}
        </Stack>
      </PropDemo>

      <PropDemo name="autoDismiss" description="The banner disappears automatically after the specified duration (5 seconds in this example).">
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
      </PropDemo>
    </DocBlock>
  );
}
