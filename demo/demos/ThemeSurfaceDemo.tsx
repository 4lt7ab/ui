import { ThemeSurface, Stack, semantic as t } from '@4lt7ab/ui';
import { DocBlock, PropDemo, type PropMeta } from '../components/DocBlock';

const props: PropMeta[] = [
  { name: 'children', type: 'ReactNode', required: true, description: 'Content rendered inside the theme surface.' },
  { name: 'global', type: 'boolean', default: 'false', description: 'When true, applies the page background to document.body instead of rendering a wrapper div.' },
];

export function ThemeSurfaceDemo(): React.JSX.Element {
  return (
    <DocBlock props={props}>
      <PropDemo name="children" description="In local mode (default), renders a div with the theme's page background color wrapping the children.">
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
      </PropDemo>

      <PropDemo name="global" description="When true, applies the page background and text color to document.body instead of rendering a wrapper div. Useful at the app root to ensure the entire page matches the active theme.">
        <Stack gap="sm">
          <p style={{ margin: 0, fontSize: '0.875rem', color: 'var(--color-text-secondary)' }}>
            Not demonstrated live since it would affect the entire demo page. Usage:
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
      </PropDemo>
    </DocBlock>
  );
}
