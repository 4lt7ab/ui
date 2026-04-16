import { useState } from 'react';
import { Overlay, Button, Stack } from '@4lt7ab/ui';

export function OverlayDemo(): React.JSX.Element {
  const [showDefault, setShowDefault] = useState(false);
  const [showCustom, setShowCustom] = useState(false);

  return (
    <Stack gap="xl">
      <Stack gap="sm">
        <h3 style={{ margin: 0, fontSize: '1rem', fontWeight: 600 }}>Default overlay</h3>
        <p style={{ margin: 0, fontSize: '0.875rem', color: 'var(--color-text-muted)' }}>
          Click the overlay to dismiss it.
        </p>
        <Button onClick={() => setShowDefault(true)}>Show Overlay</Button>
        {showDefault && (
          <Overlay onClick={() => setShowDefault(false)} />
        )}
      </Stack>

      <Stack gap="sm">
        <h3 style={{ margin: 0, fontSize: '1rem', fontWeight: 600 }}>Custom z-index</h3>
        <p style={{ margin: 0, fontSize: '0.875rem', color: 'var(--color-text-muted)' }}>
          Overlay with zIndex=50 and custom style.
        </p>
        <Button onClick={() => setShowCustom(true)}>Show Custom Overlay</Button>
        {showCustom && (
          <Overlay
            onClick={() => setShowCustom(false)}
            zIndex={50}
          />
        )}
      </Stack>
    </Stack>
  );
}
