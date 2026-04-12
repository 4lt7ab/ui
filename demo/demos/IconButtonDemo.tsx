import { IconButton, Stack } from '@4lt7ab/ui';

export function IconButtonDemo(): React.JSX.Element {
  return (
    <Stack gap="xl">
      <Stack gap="sm">
        <h3 style={{ margin: 0, fontSize: '1rem', fontWeight: 600 }}>Different icons</h3>
        <Stack direction="horizontal" gap="sm" wrap align="center">
          <IconButton icon="settings" aria-label="Settings" />
          <IconButton icon="search" aria-label="Search" />
          <IconButton icon="edit" aria-label="Edit" />
          <IconButton icon="trash" aria-label="Delete" />
          <IconButton icon="copy" aria-label="Copy" />
          <IconButton icon="more-vertical" aria-label="More options" />
          <IconButton icon="filter" aria-label="Filter" />
          <IconButton icon="external-link" aria-label="Open link" />
        </Stack>
      </Stack>

      <Stack gap="sm">
        <h3 style={{ margin: 0, fontSize: '1rem', fontWeight: 600 }}>Sizes</h3>
        <Stack direction="horizontal" gap="sm" wrap align="center">
          <IconButton icon="settings" size={16} aria-label="Small" />
          <IconButton icon="settings" size={20} aria-label="Medium-small" />
          <IconButton icon="settings" size={24} aria-label="Default" />
          <IconButton icon="settings" size={32} aria-label="Large" />
        </Stack>
      </Stack>

      <Stack gap="sm">
        <h3 style={{ margin: 0, fontSize: '1rem', fontWeight: 600 }}>With badge</h3>
        <Stack direction="horizontal" gap="md" wrap align="center">
          <Stack align="center" gap="xs">
            <IconButton icon="info" badge aria-label="Notifications" />
            <span style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)' }}>badge=true</span>
          </Stack>
          <Stack align="center" gap="xs">
            <IconButton icon="info" aria-label="Notifications" />
            <span style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)' }}>badge=false</span>
          </Stack>
        </Stack>
      </Stack>

      <Stack gap="sm">
        <h3 style={{ margin: 0, fontSize: '1rem', fontWeight: 600 }}>Disabled</h3>
        <Stack direction="horizontal" gap="sm" wrap align="center">
          <IconButton icon="edit" disabled aria-label="Edit (disabled)" />
          <IconButton icon="trash" disabled aria-label="Delete (disabled)" />
        </Stack>
      </Stack>
    </Stack>
  );
}
