import { Icon, IconButton, Stack } from '../../src';
import type { IconName } from '../../src';

const allIcons: IconName[] = [
  'close', 'chevron-right', 'chevron-down', 'chevron-left', 'chevron-up',
  'check', 'check-circle', 'warning', 'error', 'info',
  'search', 'trash', 'settings', 'plus', 'minus',
  'edit', 'arrow-left', 'arrow-right', 'menu',
  'eye', 'eye-off', 'copy', 'external-link', 'more-vertical', 'filter',
];

export function IconDemo(): React.JSX.Element {
  return (
    <Stack gap="xl">
      <Stack gap="sm">
        <h3 style={{ margin: 0, fontSize: '1rem', fontWeight: 600 }}>Icon sizes</h3>
        <Stack direction="horizontal" gap="md" align="center">
          <Icon name="search" size={16} />
          <Icon name="search" size={24} />
          <Icon name="search" size={32} />
          <Icon name="search" size={48} />
        </Stack>
      </Stack>

      <Stack gap="sm">
        <h3 style={{ margin: 0, fontSize: '1rem', fontWeight: 600 }}>All icons</h3>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(5rem, 1fr))',
          gap: 'var(--space-md)',
        }}>
          {allIcons.map((name) => (
            <Stack key={name} align="center" gap="xs" style={{ padding: 'var(--space-sm)' }}>
              <Icon name={name} />
              <span style={{ fontSize: '0.6rem', color: 'var(--color-text-muted)', textAlign: 'center' }}>{name}</span>
            </Stack>
          ))}
        </div>
      </Stack>

      <Stack gap="sm">
        <h3 style={{ margin: 0, fontSize: '1rem', fontWeight: 600 }}>IconButton</h3>
        <Stack direction="horizontal" gap="sm" align="center">
          <IconButton icon="settings" />
          <IconButton icon="info" badge />
          <IconButton icon="check-circle" />
          <IconButton icon="more-vertical" />
        </Stack>
      </Stack>
    </Stack>
  );
}
