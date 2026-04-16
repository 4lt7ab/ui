import { useState } from 'react';
import { Overlay, Button, Stack } from '@4lt7ab/ui';
import { DocBlock, PropDemo, type PropMeta } from '../components/DocBlock';

const props: PropMeta[] = [
  { name: 'onClick', type: '() => void', description: 'Called when the overlay is clicked (typically to close the parent modal).' },
  { name: 'zIndex', type: 'number | string', default: "'var(--z-index-sticky)'", description: 'CSS z-index for stacking control.' },
];

export function OverlayDemo(): React.JSX.Element {
  const [showDefault, setShowDefault] = useState(false);
  const [showCustom, setShowCustom] = useState(false);

  return (
    <DocBlock props={props}>
      <PropDemo name="onClick" description="Click the overlay to dismiss it. Typically wired to close the parent modal or drawer.">
        <Stack gap="sm">
          <Button onClick={() => setShowDefault(true)}>Show Overlay</Button>
          {showDefault && (
            <Overlay onClick={() => setShowDefault(false)} />
          )}
        </Stack>
      </PropDemo>

      <PropDemo name="zIndex" description="Override the default z-index for custom stacking contexts.">
        <Stack gap="sm">
          <Button onClick={() => setShowCustom(true)}>Show Overlay (zIndex=50)</Button>
          {showCustom && (
            <Overlay
              onClick={() => setShowCustom(false)}
              zIndex={50}
            />
          )}
        </Stack>
      </PropDemo>
    </DocBlock>
  );
}
