import { useState } from 'react';
import { Button, Overlay, Stack, semantic as t } from '@4lt7ab/ui';

// ---------------------------------------------------------------------------
// Overlay showcase — live example for 07-modals.md
// ---------------------------------------------------------------------------
//
// Overlay is the raw backdrop primitive — no dialog chrome, no focus trap,
// no Escape binding. Consumers reach for it when they need the library's
// themed semi-transparent layer under a custom surface (drawer, lightbox,
// sidebar sheet) that doesn't fit ModalShell's centered-panel shape.
//
// The widget shows the bare primitive: a trigger mounts the overlay with
// an `onClick` dismiss, and a small "sheet" rides on top to make the
// stacking order visible. Clicking the overlay (anywhere outside the
// sheet) dismisses; clicking the sheet doesn't.

export function OverlayShowcase(): React.JSX.Element {
  const [open, setOpen] = useState(false);

  return (
    <Stack gap="md">
      <Stack direction="horizontal" gap="sm" wrap>
        <Button variant="primary" onClick={() => setOpen(true)}>
          Show overlay
        </Button>
        <span style={{ fontSize: t.fontSizeXs, color: t.colorTextMuted, alignSelf: 'center' }}>
          Click the backdrop to dismiss; the sheet ignores clicks.
        </span>
      </Stack>

      {open ? (
        <>
          <Overlay onClick={() => setOpen(false)} zIndex={t.zIndexModal} />
          <div
            // Sheet sits above the overlay via zIndexModal + 1, mirroring how
            // ModalShell stacks its panel. Clicks here stop propagation so the
            // overlay's onClick doesn't fire and close the widget mid-read.
            role="dialog"
            aria-label="Overlay example sheet"
            onClick={(event) => event.stopPropagation()}
            style={{
              position: 'fixed',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              zIndex: `calc(${t.zIndexModal} + 1)`,
              background: t.colorSurfaceSolid,
              color: t.colorText,
              padding: t.spaceLg,
              borderRadius: t.radiusLg,
              border: `${t.borderWidthDefault} solid ${t.colorBorder}`,
              boxShadow: t.shadowLg,
              maxWidth: '22rem',
              fontFamily: t.fontSans,
            }}
          >
            <Stack gap="md">
              <strong style={{ fontSize: t.fontSizeBase }}>Custom sheet on top of Overlay</strong>
              <p style={{ margin: 0, fontSize: t.fontSizeSm, color: t.colorTextMuted }}>
                This sheet is <em>not</em> <code>ModalShell</code> — there is no focus trap
                or Escape binding here. The Overlay primitive only paints the backdrop and
                routes its <code>onClick</code>. Reach for it when ModalShell's centered
                panel doesn't fit.
              </p>
              <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                <Button variant="ghost" onClick={() => setOpen(false)}>
                  Close
                </Button>
              </div>
            </Stack>
          </div>
        </>
      ) : null}
    </Stack>
  );
}
