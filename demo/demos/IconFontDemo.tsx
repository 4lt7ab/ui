import { Icon, IconButton, IconFontProvider, Stack, Card } from '@4lt7ab/ui';

const FONT_CLASS = 'material-symbols-outlined';

export function IconFontDemo(): React.JSX.Element {
  return (
    <Stack gap="xl">
      {/* Per-icon fontClass */}
      <Stack gap="sm">
        <h3 style={{ margin: 0, fontSize: '1rem', fontWeight: 600 }}>Icon font fallback (per-icon)</h3>
        <p style={{ margin: 0, fontSize: '0.85rem', color: 'var(--color-text-secondary)' }}>
          Pass <code>fontClass</code> to render any icon-font name. The icon name becomes
          the text content of a <code>&lt;span&gt;</code> with that class.
        </p>
        <Stack direction="horizontal" gap="md" align="center">
          <Icon name="home" fontClass={FONT_CLASS} />
          <Icon name="favorite" fontClass={FONT_CLASS} />
          <Icon name="visibility" fontClass={FONT_CLASS} size="xl" />
          <Icon name="delete" fontClass={FONT_CLASS} size="sm" />
        </Stack>
      </Stack>

      {/* Global provider */}
      <Stack gap="sm">
        <h3 style={{ margin: 0, fontSize: '1rem', fontWeight: 600 }}>IconFontProvider (global default)</h3>
        <p style={{ margin: 0, fontSize: '0.85rem', color: 'var(--color-text-secondary)' }}>
          Wrap a subtree with <code>&lt;IconFontProvider&gt;</code> so every Icon
          falls back to the font automatically — no per-icon prop needed.
        </p>
        <IconFontProvider fontClass={FONT_CLASS}>
          <Stack direction="horizontal" gap="md" align="center">
            <Icon name="star" />
            <Icon name="bolt" />
            <Icon name="cloud" size="xl" />
            {/* Built-in registry names still render SVG */}
            <Icon name="search" />
          </Stack>
        </IconFontProvider>
      </Stack>

      {/* IconButton with font icon */}
      <Stack gap="sm">
        <h3 style={{ margin: 0, fontSize: '1rem', fontWeight: 600 }}>IconButton with font icons</h3>
        <Stack direction="horizontal" gap="sm" align="center">
          <IconButton icon="home" fontClass={FONT_CLASS} aria-label="Home" />
          <IconButton icon="favorite" fontClass={FONT_CLASS} aria-label="Favorite" badge />
          {/* Built-in icon for comparison */}
          <IconButton icon="settings" aria-label="Settings" />
        </Stack>
      </Stack>

      {/* Rendered markup preview */}
      <Stack gap="sm">
        <h3 style={{ margin: 0, fontSize: '1rem', fontWeight: 600 }}>Rendered markup</h3>
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
        <p style={{ margin: 0, fontSize: '0.8rem', color: 'var(--color-text-muted)' }}>
          Note: The font icons above render correctly only when the icon font CSS
          is loaded. Without it you will see the icon name as plain text, which
          confirms the markup is correct.
        </p>
      </Stack>
    </Stack>
  );
}
