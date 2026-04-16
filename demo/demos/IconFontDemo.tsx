import { Icon, IconButton, IconFontProvider, Stack, Card } from '@4lt7ab/ui';
import { DocBlock, PropDemo, type PropMeta } from '../components/DocBlock';

const FONT_CLASS = 'material-symbols-outlined';

const props: PropMeta[] = [
  { name: 'fontClass', type: 'string', required: true, description: 'CSS class applied to descendant Icons for font-based rendering (e.g. "material-symbols-outlined").' },
  { name: 'children', type: 'ReactNode', required: true, description: 'Subtree of components that inherit the default fontClass.' },
];

export function IconFontDemo(): React.JSX.Element {
  return (
    <DocBlock props={props}>
      <PropDemo name="fontClass (per-icon)" description="Pass fontClass directly on individual Icon components to enable icon-font rendering. The icon name becomes the text content of a span with that CSS class.">
        <Stack gap="sm">
          <Stack direction="horizontal" gap="md" align="center">
            <Icon name="home" fontClass={FONT_CLASS} />
            <Icon name="favorite" fontClass={FONT_CLASS} />
            <Icon name="visibility" fontClass={FONT_CLASS} size="xl" />
            <Icon name="delete" fontClass={FONT_CLASS} size="sm" />
          </Stack>
        </Stack>
      </PropDemo>

      <PropDemo name="fontClass (via provider)" description="Wrap a subtree with IconFontProvider so every descendant Icon falls back to the font automatically — no per-icon prop needed. Built-in registry names still render SVG.">
        <IconFontProvider fontClass={FONT_CLASS}>
          <Stack direction="horizontal" gap="md" align="center">
            <Stack align="center" gap="xs">
              <Icon name="star" />
              <span style={{ fontSize: '0.6rem', color: 'var(--color-text-muted)' }}>font</span>
            </Stack>
            <Stack align="center" gap="xs">
              <Icon name="bolt" />
              <span style={{ fontSize: '0.6rem', color: 'var(--color-text-muted)' }}>font</span>
            </Stack>
            <Stack align="center" gap="xs">
              <Icon name="cloud" size="xl" />
              <span style={{ fontSize: '0.6rem', color: 'var(--color-text-muted)' }}>font (xl)</span>
            </Stack>
            <Stack align="center" gap="xs">
              <Icon name="search" />
              <span style={{ fontSize: '0.6rem', color: 'var(--color-text-muted)' }}>SVG (built-in)</span>
            </Stack>
          </Stack>
        </IconFontProvider>
      </PropDemo>

      <PropDemo name="children" description="IconFontProvider works with any descendant component that uses Icon internally, including IconButton.">
        <Stack direction="horizontal" gap="sm" align="center">
          <IconButton icon="home" fontClass={FONT_CLASS} aria-label="Home" />
          <IconButton icon="favorite" fontClass={FONT_CLASS} aria-label="Favorite" badge />
          <IconButton icon="settings" aria-label="Settings (built-in)" />
        </Stack>
      </PropDemo>

      <PropDemo name="rendered markup" description="Font-icon rendering produces a span with the fontClass and the icon name as text content. The icon font CSS must be loaded for visual rendering.">
        <Card variant="flat" padding="md">
          <code style={{
            fontSize: '0.75rem',
            fontFamily: 'var(--font-mono)',
            color: 'var(--color-text-secondary)',
            whiteSpace: 'pre',
          }}>
            {`<span class="${FONT_CLASS}" style="font-size: 24px; ...">home</span>`}
          </code>
        </Card>
      </PropDemo>
    </DocBlock>
  );
}
