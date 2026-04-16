import { ThemeSurface, Stack, semantic as t } from '@4lt7ab/ui';

const desc: React.CSSProperties = {
  margin: '0.25rem 0 0',
  color: 'var(--color-text-secondary)',
  fontSize: '0.875rem',
};

export function ThemeSurfaceDemo(): React.JSX.Element {
  return (
    <Stack gap="xl">
      <Stack gap="sm">
        <h3 style={{ margin: 0, fontSize: '1rem', fontWeight: 600 }}>Default (local) mode</h3>
        <p style={{ ...desc, margin: 0 }}>
          Renders a <code>&lt;div&gt;</code> with the theme's page background color.
        </p>
        <div style={{ padding: 'var(--space-lg)', borderRadius: 'var(--radius-md)' }}>
          <ThemeSurface>
            <Stack gap="sm">
              <strong>ThemeSurface content</strong>
              <span style={{ fontSize: '0.875rem', color: 'var(--color-text-secondary)' }}>
                This div uses <code>colorSurfacePage</code> as its background.
              </span>
            </Stack>
          </ThemeSurface>
        </div>
      </Stack>

      <Stack gap="sm">
        <h3 style={{ margin: 0, fontSize: '1rem', fontWeight: 600 }}>With wrapper styles</h3>
        <div style={{
          padding: 'var(--space-lg)',
          borderRadius: 'var(--radius-lg)',
          border: `1px solid ${t.colorBorder}`,
        }}>
          <ThemeSurface>
            <Stack gap="sm">
              <strong>Styled wrapper around surface</strong>
              <span style={{ fontSize: '0.875rem', color: 'var(--color-text-secondary)' }}>
                Layout styles live on a wrapper div, not on the component.
              </span>
            </Stack>
          </ThemeSurface>
        </div>
      </Stack>

      <Stack gap="sm">
        <h3 style={{ margin: 0, fontSize: '1rem', fontWeight: 600 }}>Global mode</h3>
        <p style={desc}>
          Pass <code>global</code> to apply the page background to <code>document.body</code> instead
          of rendering a wrapper div. Useful at the app root to ensure the entire page matches the
          active theme. Not demonstrated here since it would affect the whole demo page.
        </p>
        <code style={{
          fontSize: '0.8rem',
          fontFamily: 'var(--font-mono)',
          color: 'var(--color-text-muted)',
          background: 'var(--color-surface-raised)',
          padding: '0.5rem 0.75rem',
          borderRadius: 'var(--radius-sm)',
          display: 'block',
        }}>
          {'<ThemeSurface global>{children}</ThemeSurface>'}
        </code>
      </Stack>
    </Stack>
  );
}
