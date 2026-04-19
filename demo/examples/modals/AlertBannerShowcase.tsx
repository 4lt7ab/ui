import { useState } from 'react';
import { AlertBanner, Button, Stack, semantic as t } from '@4lt7ab/ui';
import type { AlertBannerVariant } from '@4lt7ab/ui';

// ---------------------------------------------------------------------------
// AlertBanner showcase — live example for 07-modals.md
// ---------------------------------------------------------------------------
//
// All four severity variants stacked so the color + icon defaults are
// side-by-side. The warning banner wires an `onDismiss` that toggles it
// off (no auto-dismiss — consumers own timing). A "Reset" trigger brings
// every banner back so the dismiss + slide-in animation can be replayed.
//
// `AlertBanner` is inline, not portal-based — each banner lays out at its
// JSX position. The widget deliberately leaves a horizontal edge so the
// full-width fill is visible.

const VARIANTS: ReadonlyArray<{ variant: AlertBannerVariant; message: string }> = [
  { variant: 'info', message: 'Design tokens updated — refresh to pick up the new semantic layer.' },
  { variant: 'success', message: 'Deploy succeeded. 12 packages updated in 34s.' },
  { variant: 'warning', message: 'Your trial expires in 3 days.' },
  { variant: 'error', message: 'Connection lost. Changes made after the last sync are queued locally.' },
];

export function AlertBannerShowcase(): React.JSX.Element {
  const [dismissed, setDismissed] = useState<Set<AlertBannerVariant>>(new Set());

  const reset = (): void => setDismissed(new Set());
  const dismissOne = (variant: AlertBannerVariant): void => {
    setDismissed((prev) => {
      const next = new Set(prev);
      next.add(variant);
      return next;
    });
  };

  const visible = VARIANTS.filter((v) => !dismissed.has(v.variant));

  return (
    <Stack gap="md">
      <Stack direction="horizontal" gap="sm" wrap>
        <Button variant="ghost" onClick={reset} disabled={dismissed.size === 0}>
          Reset banners
        </Button>
        <span style={{ fontSize: t.fontSizeXs, color: t.colorTextMuted, alignSelf: 'center' }}>
          Each banner exposes a dismiss button via <code>onDismiss</code>.
        </span>
      </Stack>

      <Stack gap="sm">
        {visible.map((v) => (
          <AlertBanner
            key={v.variant}
            variant={v.variant}
            onDismiss={() => dismissOne(v.variant)}
          >
            <strong style={{ textTransform: 'capitalize', marginRight: t.spaceXs }}>
              {v.variant}:
            </strong>
            {v.message}
          </AlertBanner>
        ))}
        {visible.length === 0 ? (
          <span style={{ fontSize: t.fontSizeSm, color: t.colorTextMuted, fontStyle: 'italic' }}>
            All four banners dismissed. Reset to replay the slide-in animation.
          </span>
        ) : null}
      </Stack>
    </Stack>
  );
}
