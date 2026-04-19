import { useState } from 'react';
import {
  CommandPalette, Stack, Card, Button, Badge, Icon, Surface, Text,
  SearchInput,
} from '@4lt7ab/ui';
import type { IconName } from '@4lt7ab/ui';

// GlobalCommands — canonical CommandPalette demo pattern. Shows the three-group
// shape (Navigation / Actions / Recent) consumers typically reach for, plus a
// visible trigger, a keyboard-shortcut hint, and a live activity log so the
// pattern demonstrates what onSelect fires. The document-level Cmd+K / Ctrl+K
// shortcut is on by default; visitors can press it or click the trigger.

// ---------------------------------------------------------------------------
// Platform shortcut glyph
// ---------------------------------------------------------------------------

function detectMod(): string {
  if (typeof navigator === 'undefined') return 'Ctrl';
  return /Mac|iPod|iPhone|iPad/.test(navigator.userAgent) ? '\u2318' : 'Ctrl';
}

// ---------------------------------------------------------------------------
// Recent-activity log — demonstrates what the palette fired
// ---------------------------------------------------------------------------

interface ActivityEntry {
  id: number;
  icon: IconName;
  label: string;
  time: string;
  group: 'Navigation' | 'Actions' | 'Recent';
}

function formatTime(): string {
  const d = new Date();
  const h = d.getHours().toString().padStart(2, '0');
  const m = d.getMinutes().toString().padStart(2, '0');
  const s = d.getSeconds().toString().padStart(2, '0');
  return `${h}:${m}:${s}`;
}

// ---------------------------------------------------------------------------
// Main
// ---------------------------------------------------------------------------

export function GlobalCommands(): React.JSX.Element {
  const [activity, setActivity] = useState<ActivityEntry[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  let nextId = activity.length + 1;

  const log = (label: string, icon: IconName, group: ActivityEntry['group']): void => {
    setActivity((prev) => [
      { id: nextId++, icon, label, time: formatTime(), group },
      ...prev,
    ].slice(0, 8));
  };

  return (
    <Stack gap="lg">
      <Stack gap="sm">
        <Text size="lg" weight="semibold">Global command palette</Text>
        <Text size="sm" tone="secondary">
          Press {detectMod()}K anywhere in this demo to open the palette, or click the trigger below.
          Pick a command to see it recorded in the activity log. Try typing {' '}
          <Text family="mono" size="xs">pref</Text> (matches Settings via keyword),{' '}
          <Text family="mono" size="xs">todo</Text> (matches New task), or{' '}
          <Text family="mono" size="xs">sprint</Text> (narrows to Recent).
        </Text>
      </Stack>

      {/* Trigger surface — a command palette is typically paired with a visible
          affordance in a TopBar or page header. Wrapping Trigger with asChild
          lets the consumer own the visual, here a Button with an icon + kbd hint. */}
      <Stack direction="horizontal" gap="sm" align="center">
        <CommandPalette.Root aria-label="Workspace command palette">
          <CommandPalette.Trigger asChild>
            <Button variant="secondary" size="sm">
              <Icon name="search" size="xs" />
              <Text size="sm">Search commands</Text>
              <Badge variant="default">{detectMod()}K</Badge>
            </Button>
          </CommandPalette.Trigger>

          <CommandPalette.Content placeholder="Type a command or search\u2026">
            <CommandPalette.Group label="Navigation">
              <CommandPalette.Item
                value="go-dashboard"
                icon="menu"
                shortcut={['G', 'D']}
                keywords={['home', 'overview']}
                onSelect={() => log('Go to Dashboard', 'menu', 'Navigation')}
              >
                Go to Dashboard
              </CommandPalette.Item>
              <CommandPalette.Item
                value="go-projects"
                icon="menu"
                shortcut={['G', 'P']}
                keywords={['list']}
                onSelect={() => log('Go to Projects', 'menu', 'Navigation')}
              >
                Go to Projects
              </CommandPalette.Item>
              <CommandPalette.Item
                value="go-settings"
                icon="settings"
                shortcut={['G', 'S']}
                keywords={['preferences', 'config']}
                onSelect={() => log('Go to Settings', 'settings', 'Navigation')}
              >
                Go to Settings
              </CommandPalette.Item>
            </CommandPalette.Group>

            <CommandPalette.Group label="Actions">
              <CommandPalette.Item
                value="new-task"
                icon="plus"
                shortcut={`${detectMod()}N`}
                keywords={['create', 'todo', 'add']}
                onSelect={() => log('Create new task', 'plus', 'Actions')}
              >
                New task\u2026
              </CommandPalette.Item>
              <CommandPalette.Item
                value="new-project"
                icon="plus"
                shortcut={[detectMod(), '\u21E7', 'N']}
                keywords={['create']}
                onSelect={() => log('Create new project', 'plus', 'Actions')}
              >
                New project\u2026
              </CommandPalette.Item>
              <CommandPalette.Item
                value="invite-teammate"
                icon="plus"
                keywords={['user', 'member', 'add']}
                onSelect={() => log('Invite teammate', 'plus', 'Actions')}
              >
                Invite teammate\u2026
              </CommandPalette.Item>
            </CommandPalette.Group>

            <CommandPalette.Group label="Recent">
              <CommandPalette.Item
                value="recent-sprint"
                icon="edit"
                onSelect={() => log('Reopen Sprint 12 notes', 'edit', 'Recent')}
              >
                Sprint 12 notes
              </CommandPalette.Item>
              <CommandPalette.Item
                value="recent-tokens"
                icon="edit"
                onSelect={() => log('Reopen Design tokens doc', 'edit', 'Recent')}
              >
                Design tokens doc
              </CommandPalette.Item>
              <CommandPalette.Item
                value="recent-api"
                icon="edit"
                onSelect={() => log('Reopen API rollout plan', 'edit', 'Recent')}
              >
                API rollout plan
              </CommandPalette.Item>
            </CommandPalette.Group>
          </CommandPalette.Content>
        </CommandPalette.Root>

        {/* Inline filter to demonstrate the palette is distinct from page-level
            search — consumers often ship both, with the palette handling
            navigation + quick actions and the inline SearchInput scoped to
            whatever the current view renders. */}
        <Stack gap="xs">
          <Text size="xs" tone="muted">Or filter this page:</Text>
          <SearchInput
            value={searchTerm}
            onSearch={setSearchTerm}
            placeholder="Filter on-page results\u2026"
          />
        </Stack>
      </Stack>

      {/* Activity log — every onSelect appends here so you can see what the
          palette fired. Surface keeps the log visually distinct. */}
      <Card padding="md">
        <Stack gap="md">
          <Stack direction="horizontal" justify="space-between" align="center">
            <Text size="sm" weight="semibold">Activity log</Text>
            {activity.length > 0 && (
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setActivity([])}
              >
                Clear
              </Button>
            )}
          </Stack>

          {activity.length === 0 ? (
            <Surface level="raised" padding="md" radius="md">
              <Stack gap="xs" align="center">
                <Text tone="muted"><Icon name="info" size="md" /></Text>
                <Text size="sm" tone="secondary">
                  No commands fired yet. Open the palette to try one.
                </Text>
              </Stack>
            </Surface>
          ) : (
            <Stack gap="sm">
              {activity.map((entry) => (
                <Surface key={entry.id} level="raised" padding="sm" radius="md">
                  <Stack direction="horizontal" gap="sm" align="center" justify="space-between">
                    <Stack direction="horizontal" gap="sm" align="center">
                      <Text tone="secondary"><Icon name={entry.icon} size="sm" /></Text>
                      <Stack gap="xs">
                        <Text size="sm" weight="medium">{entry.label}</Text>
                        <Text size="xs" tone="muted" family="mono">
                          {entry.time} \u00b7 {entry.group}
                        </Text>
                      </Stack>
                    </Stack>
                    <Badge variant={
                      entry.group === 'Navigation' ? 'info' :
                      entry.group === 'Actions' ? 'success' :
                      'default'
                    }>
                      {entry.group}
                    </Badge>
                  </Stack>
                </Surface>
              ))}
            </Stack>
          )}
        </Stack>
      </Card>
    </Stack>
  );
}
