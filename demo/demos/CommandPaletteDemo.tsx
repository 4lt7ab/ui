import { useState } from 'react';
import { CommandPalette, Stack, Button, semantic as t } from '@4lt7ab/ui';
import { DocBlock, PropDemo, type PropMeta } from '../components/DocBlock';

const rootProps: PropMeta[] = [
  { name: 'aria-label', type: 'string', required: true, description: 'Accessible label for the palette dialog.' },
  { name: 'open', type: 'boolean', description: 'Controlled open state.' },
  { name: 'defaultOpen', type: 'boolean', default: 'false', description: 'Uncontrolled initial open state.' },
  { name: 'onOpenChange', type: '(open: boolean) => void', description: 'Called when the palette wants to open or close.' },
  { name: 'shortcut', type: 'CommandPaletteShortcut | null', default: "{ key: 'k', mod: true }", description: "Global keyboard shortcut. `mod` means Cmd on Mac, Ctrl elsewhere. Pass null to disable." },
  { name: 'disabled', type: 'boolean', default: 'false', description: "Turns off the default shortcut (programmatic-only use)." },
];

const itemProps: PropMeta[] = [
  { name: 'value', type: 'string', required: true, description: 'Stable command id. Doubles as fallback match text.' },
  { name: 'onSelect', type: '() => void', required: true, description: 'Fires when the command is picked. Palette closes automatically.' },
  { name: 'icon', type: 'IconName', description: 'Optional leading icon from the built-in registry.' },
  { name: 'shortcut', type: 'string | string[]', description: "Right-aligned <kbd> hint. Array renders one <kbd> per part." },
  { name: 'keywords', type: 'string[]', description: 'Extra match tokens (aliases) that don\u2019t appear in the row.' },
];

// ---------------------------------------------------------------------------
// Demo 1 — task-switcher with three groups
// ---------------------------------------------------------------------------

function TaskSwitcherPalette(): React.JSX.Element {
  const [lastAction, setLastAction] = useState<string | null>(null);

  return (
    <Stack gap="sm">
      <CommandPalette.Root aria-label="Task switcher">
        <CommandPalette.Trigger>
          <span>Commands</span>
          <kbd
            style={{
              background: t.colorSurfaceRaised,
              border: `1px solid ${t.colorBorder}`,
              borderRadius: t.radiusSm,
              padding: `0 ${t.spaceXs}`,
              fontSize: t.fontSizeXs,
              fontFamily: t.fontMono,
            }}
          >
            {detectMod()}K
          </kbd>
        </CommandPalette.Trigger>

        <CommandPalette.Content placeholder="Type a command or search\u2026">
          <CommandPalette.Group label="Navigation">
            <CommandPalette.Item
              value="go-dashboard"
              icon="menu"
              shortcut={['G', 'D']}
              onSelect={() => setLastAction('Navigate to Dashboard')}
            >
              Go to Dashboard
            </CommandPalette.Item>
            <CommandPalette.Item
              value="go-settings"
              icon="settings"
              shortcut={['G', 'S']}
              keywords={['preferences', 'config']}
              onSelect={() => setLastAction('Navigate to Settings')}
            >
              Go to Settings
            </CommandPalette.Item>
            <CommandPalette.Item
              value="go-help"
              icon="info"
              shortcut="?"
              keywords={['docs', 'support']}
              onSelect={() => setLastAction('Navigate to Help')}
            >
              Open Help
            </CommandPalette.Item>
          </CommandPalette.Group>

          <CommandPalette.Group label="Actions">
            <CommandPalette.Item
              value="new-task"
              icon="plus"
              shortcut={`${detectMod()}N`}
              keywords={['create', 'todo', 'add']}
              onSelect={() => setLastAction('Create new task')}
            >
              New task\u2026
            </CommandPalette.Item>
            <CommandPalette.Item
              value="new-project"
              icon="plus"
              shortcut={[detectMod(), '\u21E7', 'N']}
              keywords={['create']}
              onSelect={() => setLastAction('Create new project')}
            >
              New project\u2026
            </CommandPalette.Item>
            <CommandPalette.Item
              value="delete"
              icon="trash"
              shortcut={[detectMod(), '\u232B']}
              keywords={['remove', 'archive']}
              onSelect={() => setLastAction('Delete current item')}
            >
              Delete current item
            </CommandPalette.Item>
          </CommandPalette.Group>

          <CommandPalette.Group label="Recent">
            <CommandPalette.Item
              value="recent-1"
              icon="edit"
              onSelect={() => setLastAction('Reopen \u201cDesign tokens doc\u201d')}
            >
              Design tokens doc
            </CommandPalette.Item>
            <CommandPalette.Item
              value="recent-2"
              icon="edit"
              onSelect={() => setLastAction('Reopen \u201cSprint 12 notes\u201d')}
            >
              Sprint 12 notes
            </CommandPalette.Item>
          </CommandPalette.Group>
        </CommandPalette.Content>
      </CommandPalette.Root>

      <span style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)' }}>
        Last action: {lastAction ?? '(none yet)'}
      </span>
    </Stack>
  );
}

// ---------------------------------------------------------------------------
// Demo 2 — programmatic open (shortcut disabled, Root controlled)
// ---------------------------------------------------------------------------

function ProgrammaticPalette(): React.JSX.Element {
  const [open, setOpen] = useState(false);
  const [picked, setPicked] = useState<string | null>(null);

  return (
    <Stack gap="sm">
      <Stack direction="horizontal" gap="sm">
        <Button variant="primary" onClick={() => setOpen(true)}>
          Open palette
        </Button>
        <Button variant="secondary" onClick={() => setOpen(false)}>
          Close palette
        </Button>
      </Stack>
      <CommandPalette.Root
        aria-label="Run command"
        open={open}
        onOpenChange={setOpen}
        disabled
      >
        <CommandPalette.Content placeholder="Run a command\u2026">
          <CommandPalette.Item
            value="build"
            icon="check"
            onSelect={() => setPicked('bun run build')}
          >
            bun run build
          </CommandPalette.Item>
          <CommandPalette.Item
            value="test"
            icon="check"
            onSelect={() => setPicked('bun run test')}
          >
            bun run test
          </CommandPalette.Item>
          <CommandPalette.Item
            value="deploy"
            icon="external-link"
            keywords={['ship', 'release']}
            onSelect={() => setPicked('make deploy')}
          >
            make deploy
          </CommandPalette.Item>
        </CommandPalette.Content>
      </CommandPalette.Root>

      <span style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)' }}>
        Last picked: {picked ?? '(none yet)'}
      </span>
    </Stack>
  );
}

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

/** Detect platform mod glyph at render time so the demo's `<kbd>` hints match
 * what the palette's default shortcut actually listens for. */
function detectMod(): string {
  if (typeof navigator === 'undefined') return 'Ctrl ';
  return /Mac|iPod|iPhone|iPad/.test(navigator.userAgent) ? '\u2318' : 'Ctrl ';
}

// ---------------------------------------------------------------------------
// Exported demo
// ---------------------------------------------------------------------------

export function CommandPaletteDemo(): React.JSX.Element {
  return (
    <DocBlock props={rootProps}>
      <PropDemo
        name="Task-switcher palette"
        description="Three groups (Navigation, Actions, Recent) with shortcut hints rendered as <kbd>. Press the default shortcut (Cmd+K on Mac, Ctrl+K elsewhere) to open, or click the trigger. Try typing `pref` to see Settings match via its keywords; `todo` matches New task via keyword; `sprint` narrows to the Recent group."
      >
        <TaskSwitcherPalette />
      </PropDemo>

      <PropDemo
        name="Programmatic open (disabled shortcut)"
        description="Passing `disabled` turns off the global listener so the palette only opens when the consumer tells it to. Useful in modal-within-modal flows or test fixtures."
      >
        <ProgrammaticPalette />
      </PropDemo>

      <div
        style={{
          marginTop: 'var(--space-lg)',
          paddingTop: 'var(--space-md)',
          borderTop: '1px solid var(--color-border)',
        }}
      >
        <h3
          style={{
            margin: 0,
            marginBottom: 'var(--space-sm)',
            fontSize: 'var(--font-size-md)',
            fontFamily: 'var(--font-sans)',
            color: 'var(--color-text)',
          }}
        >
          <code>CommandPalette.Item</code> props
        </h3>
        <DocBlock props={itemProps}>{null}</DocBlock>
      </div>
    </DocBlock>
  );
}
