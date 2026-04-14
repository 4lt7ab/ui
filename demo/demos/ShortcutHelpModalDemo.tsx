import { useState } from 'react';
import { ShortcutHelpModal, Button, Stack } from '@4lt7ab/ui';
import type { ShortcutGroup } from '@4lt7ab/ui';

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

export function ShortcutHelpModalDemo(): React.JSX.Element {
  const [open, setOpen] = useState(false);

  return (
    <Stack gap="sm">
      <p style={{ margin: 0, fontSize: '0.875rem', color: 'var(--color-text-muted)' }}>
        Opens a modal showing grouped keyboard shortcuts with styled kbd elements.
      </p>
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
  );
}
