import { Icon, Stack } from '@4lt7ab/ui';
import type { IconName, IconSize } from '@4lt7ab/ui';
import { DocBlock, PropDemo, type PropMeta } from '../components/DocBlock';

const allIcons: IconName[] = [
  'close', 'chevron-right', 'chevron-down', 'chevron-left', 'chevron-up',
  'check', 'check-circle', 'warning', 'error', 'info',
  'search', 'trash', 'settings', 'plus', 'minus',
  'edit', 'arrow-left', 'arrow-right', 'menu',
  'eye', 'eye-off', 'copy', 'external-link', 'more-vertical', 'filter',
];

const sizes: IconSize[] = ['xs', 'sm', 'md', 'lg', 'xl'];

const props: PropMeta[] = [
  { name: 'name', type: "IconName | string", required: true, description: 'Icon name. Built-in names render SVGs; unregistered names fall back to icon-font rendering when fontClass is set.' },
  { name: 'size', type: "'xs' | 'sm' | 'md' | 'lg' | 'xl'", default: "'lg'", description: 'Icon size preset.' },
  { name: 'fontClass', type: 'string', description: 'CSS class for an icon font (e.g. "material-symbols-outlined"). Used when name is not in the built-in registry.' },
  { name: 'aria-label', type: 'string', description: 'Accessible label. When omitted, icon is treated as decorative (aria-hidden).' },
];

export function IconDemo(): React.JSX.Element {
  return (
    <DocBlock props={props}>
      <PropDemo name="name" description="Selects which icon to render. Built-in registry names render SVG components. Any string works as a font-icon fallback when fontClass is provided.">
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(5rem, 1fr))',
          gap: 'var(--space-md)',
        }}>
          {allIcons.map((name) => (
            <div key={name} style={{ padding: 'var(--space-sm)' }}>
              <Stack align="center" gap="xs">
                <Icon name={name} />
                <span style={{ fontSize: '0.6rem', color: 'var(--color-text-muted)', textAlign: 'center' }}>{name}</span>
              </Stack>
            </div>
          ))}
        </div>
      </PropDemo>

      <PropDemo name="size" description="Controls the rendered pixel size of the icon. All five presets shown at the same icon for comparison.">
        <Stack direction="horizontal" gap="md" align="center">
          {sizes.map((s) => (
            <Stack key={s} align="center" gap="xs">
              <Icon name="search" size={s} />
              <span style={{ fontSize: '0.7rem', color: 'var(--color-text-muted)' }}>{s}</span>
            </Stack>
          ))}
        </Stack>
      </PropDemo>

      <PropDemo name="fontClass" description="When the icon name is not in the built-in registry, fontClass enables icon-font rendering. The name becomes the text content of a span with the given class.">
        <Stack direction="horizontal" gap="md" align="center">
          <Icon name="home" fontClass="material-symbols-outlined" />
          <Icon name="favorite" fontClass="material-symbols-outlined" />
          <Icon name="visibility" fontClass="material-symbols-outlined" size="xl" />
          <Icon name="delete" fontClass="material-symbols-outlined" size="sm" />
        </Stack>
      </PropDemo>

      <PropDemo name="aria-label" description="When provided, the icon gets role='img' and the label is announced by screen readers. When omitted, the icon is treated as decorative with aria-hidden.">
        <Stack direction="horizontal" gap="md" align="center">
          <Stack align="center" gap="xs">
            <Icon name="warning" aria-label="Warning indicator" />
            <span style={{ fontSize: '0.7rem', color: 'var(--color-text-muted)' }}>with label</span>
          </Stack>
          <Stack align="center" gap="xs">
            <Icon name="warning" />
            <span style={{ fontSize: '0.7rem', color: 'var(--color-text-muted)' }}>decorative</span>
          </Stack>
        </Stack>
      </PropDemo>
    </DocBlock>
  );
}
