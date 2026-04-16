import { useState } from 'react';
import { ShortcutHelpModal, Button, Stack } from '@4lt7ab/ui';
import type { ShortcutGroup } from '@4lt7ab/ui';
import { DocBlock, PropDemo, type PropMeta } from '../components/DocBlock';

const sampleShortcuts: ShortcutGroup[] = [
  {
    group: 'General',
    shortcuts: [
      { keys: ['\u2318', 'K'], description: 'Open command palette' },
      { keys: ['\u2318', ','], description: 'Open settings' },
      { keys: ['\u2318', 'Shift', 'P'], description: 'Show all commands' },
      { keys: ['?'], description: 'Show keyboard shortcuts' },
    ],
  },
  {
    group: 'Navigation',
    shortcuts: [
      { keys: ['G', 'H'], description: 'Go to home' },
      { keys: ['G', 'N'], description: 'Go to notifications' },
      { keys: ['\u2318', '\u2190'], description: 'Go back' },
      { keys: ['\u2318', '\u2192'], description: 'Go forward' },
    ],
  },
  {
    group: 'Editing',
    shortcuts: [
      { keys: ['\u2318', 'S'], description: 'Save changes' },
      { keys: ['\u2318', 'Z'], description: 'Undo' },
      { keys: ['\u2318', 'Shift', 'Z'], description: 'Redo' },
    ],
  },
];

const props: PropMeta[] = [
  { name: 'shortcuts', type: 'ShortcutGroup[]', required: true, description: 'Shortcut data grouped by category. Each group has a heading and an array of shortcut definitions.' },
  { name: 'onClose', type: '() => void', required: true, description: 'Called when the modal should close.' },
  { name: 'title', type: 'string', default: "'Keyboard Shortcuts'", description: 'Modal heading text.' },
  { name: 'width', type: "'sm' | 'md' | 'lg' | 'xl'", default: "'lg'", description: 'Width preset for the modal panel.' },
];

export function ShortcutHelpModalDemo(): React.JSX.Element {
  const [open, setOpen] = useState(false);

  return (
    <DocBlock props={props}>
      <PropDemo name="shortcuts + onClose" description="Opens a modal showing grouped keyboard shortcuts with styled kbd elements. Supports multiple groups with headings.">
        <Stack gap="sm">
          <Button variant="secondary" onClick={() => setOpen(true)}>
            Show Keyboard Shortcuts
          </Button>
          {open && (
            <ShortcutHelpModal
              shortcuts={sampleShortcuts}
              onClose={() => setOpen(false)}
            />
          )}
        </Stack>
      </PropDemo>
    </DocBlock>
  );
}
