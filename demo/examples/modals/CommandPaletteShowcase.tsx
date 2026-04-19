import { useState } from 'react';
import { CommandPalette, Stack, semantic as t } from '@4lt7ab/ui';

// ---------------------------------------------------------------------------
// CommandPalette showcase — live example for 07-modals.md
// ---------------------------------------------------------------------------
//
// Two rails the prose/code-fence version can't carry:
//
//   - Default keyboard shortcut (Cmd+K / Ctrl+K). The trigger advertises it
//     via an inline <kbd>; detectMod() picks the correct glyph at render
//     time so the hint matches what the palette actually listens for.
//   - Groups + keyword aliases + <kbd> shortcut hints on each item.
//     Typing "pref" matches Settings via its `keywords` array; "sprint"
//     narrows to the Recent group; "todo" matches New task.

function detectMod(): string {
  if (typeof navigator === 'undefined') return 'Ctrl ';
  return /Mac|iPod|iPhone|iPad/.test(navigator.userAgent) ? '\u2318' : 'Ctrl ';
}

export function CommandPaletteShowcase(): React.JSX.Element {
  const [lastAction, setLastAction] = useState<string | null>(null);

  return (
    <Stack gap="md">
      <CommandPalette.Root aria-label="Task switcher">
        <CommandPalette.Trigger>
          <span>Open commands</span>
          <kbd
            style={{
              background: t.colorSurfaceRaised,
              border: `${t.borderWidthDefault} solid ${t.colorBorder}`,
              borderRadius: t.radiusSm,
              padding: `0 ${t.spaceXs}`,
              fontSize: t.fontSizeXs,
              fontFamily: t.fontMono,
              color: t.colorText,
            }}
          >
            {detectMod()}K
          </kbd>
        </CommandPalette.Trigger>

        <CommandPalette.Content placeholder="Type a command or search…">
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
              onSelect={() => setLastAction('Open Help')}
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
              New task…
            </CommandPalette.Item>
            <CommandPalette.Item
              value="new-project"
              icon="plus"
              shortcut={[detectMod(), '\u21E7', 'N']}
              keywords={['create']}
              onSelect={() => setLastAction('Create new project')}
            >
              New project…
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
              onSelect={() => setLastAction('Reopen "Sprint 12 notes"')}
            >
              Sprint 12 notes
            </CommandPalette.Item>
            <CommandPalette.Item
              value="recent-2"
              icon="edit"
              onSelect={() => setLastAction('Reopen "Design tokens doc"')}
            >
              Design tokens doc
            </CommandPalette.Item>
          </CommandPalette.Group>
        </CommandPalette.Content>
      </CommandPalette.Root>

      <span style={{ fontSize: t.fontSizeXs, color: t.colorTextMuted }}>
        Last action: <code>{lastAction ?? '(none yet)'}</code>
      </span>
    </Stack>
  );
}
