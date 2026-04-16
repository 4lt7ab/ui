import { Surface, Stack, Badge } from '@4lt7ab/ui';
import type { SurfaceLevel, SemanticColor } from '@4lt7ab/ui';
import { DocBlock, PropDemo, type PropMeta } from '../components/DocBlock';

const desc: React.CSSProperties = {
  margin: '0.25rem 0 0',
  color: 'var(--color-text-secondary)',
  fontSize: '0.875rem',
};

const props: PropMeta[] = [
  { name: 'level', type: "'page' | 'default' | 'solid' | 'raised' | 'panel' | 'input' | 'overlay'", default: "'solid'", description: 'Background surface level from the token system.' },
  { name: 'tint', type: "'primary' | 'success' | 'warning' | 'error' | 'info' | 'muted'", description: 'Semantic color tint over the background (10% color-mix). Overrides level.' },
  { name: 'padding', type: "'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl'", description: 'Inner padding.' },
  { name: 'radius', type: "'none' | 'sm' | 'md' | 'lg' | 'full'", default: "'lg'", description: 'Border radius.' },
  { name: 'border', type: "boolean | SemanticColor", default: 'false', description: 'Show a border. true uses colorBorder; a semantic color name uses that token.' },
  { name: 'shadow', type: "'sm' | 'md' | 'lg'", description: 'Box shadow intensity.' },
  { name: 'as', type: "'div' | 'section' | 'article' | 'aside' | 'main'", default: "'div'", description: 'Render as a different HTML element.' },
  { name: 'children', type: 'ReactNode', required: true, description: 'Surface content.' },
];

const levels: { level: SurfaceLevel; description: string }[] = [
  { level: 'page', description: 'Full-page background.' },
  { level: 'default', description: 'Standard component background (cards, inputs, modals).' },
  { level: 'solid', description: 'Opaque counterpart for nested/layered content.' },
  { level: 'raised', description: 'Elevated surface for hover states and nested containers.' },
  { level: 'panel', description: 'Side panel and navigation background.' },
  { level: 'input', description: 'Text input / select / textarea background.' },
  { level: 'overlay', description: 'Semi-transparent backdrop behind modals.' },
];

export function SurfaceDemo(): React.JSX.Element {
  return (
    <DocBlock props={props}>
      <PropDemo name="level" description="Each level maps to a semantic colorSurface* token, controlling the background color.">
        <Stack gap="md">
          {levels.map(({ level, description }) => (
            <Surface key={level} level={level} padding="md" radius="md" border>
              <Stack direction="horizontal" align="center" gap="sm">
                <Badge size="xs">{level}</Badge>
                <span style={{ fontSize: '0.875rem', color: 'var(--color-text-secondary)' }}>
                  {description}
                </span>
              </Stack>
            </Surface>
          ))}
        </Stack>
      </PropDemo>

      <PropDemo name="tint" description="Applies a 10% color-mix overlay using a semantic color token. Takes precedence over level.">
        <Stack direction="horizontal" gap="md" wrap>
          {([
            { label: 'Success', tint: 'success' as SemanticColor },
            { label: 'Warning', tint: 'warning' as SemanticColor },
            { label: 'Error', tint: 'error' as SemanticColor },
            { label: 'Info', tint: 'info' as SemanticColor },
          ]).map(({ label, tint }) => (
            <div key={label} style={{ flex: '1 1 8rem' }}>
              <Surface tint={tint} padding="md" radius="md" border>
                <span style={{ fontSize: '0.875rem', fontWeight: 500 }}>{label}</span>
              </Surface>
            </div>
          ))}
        </Stack>
      </PropDemo>

      <PropDemo name="border / shadow" description="Border can be a boolean (uses colorBorder) or a semantic color name. Shadow controls elevation intensity.">
        <Stack direction="horizontal" gap="md" wrap>
          <div style={{ flex: '1 1 10rem' }}>
            <Surface padding="lg" border shadow="sm">
              <strong>border + shadow sm</strong>
              <p style={desc}>The classic card look.</p>
            </Surface>
          </div>
          <div style={{ flex: '1 1 10rem' }}>
            <Surface padding="lg" border shadow="md">
              <strong>border + shadow md</strong>
              <p style={desc}>Elevated.</p>
            </Surface>
          </div>
          <div style={{ flex: '1 1 10rem' }}>
            <Surface padding="lg" border="primary" shadow="lg">
              <strong>semantic border color</strong>
              <p style={desc}>Primary accent border + large shadow.</p>
            </Surface>
          </div>
        </Stack>
      </PropDemo>

      <PropDemo name="radius" description="Controls the border-radius using the radius token scale.">
        <Stack direction="horizontal" gap="md" wrap>
          {(['none', 'sm', 'md', 'lg', 'full'] as const).map((r) => (
            <div key={r} style={{ flex: '1 1 6rem', textAlign: 'center' }}>
              <Surface level="raised" padding="md" radius={r} border>
                <span style={{ fontSize: '0.875rem' }}>radius="{r}"</span>
              </Surface>
            </div>
          ))}
        </Stack>
      </PropDemo>

      <PropDemo name="padding" description="Inner spacing using the spacing token scale. Surfaces nest well at different padding levels.">
        <Surface level="solid" padding="lg" border shadow="sm">
          <Stack gap="md">
            <strong>Outer: padding="lg"</strong>
            <Surface level="raised" padding="md" radius="md" border>
              <Stack gap="sm">
                <strong>Inner: padding="md"</strong>
                <Surface level="input" padding="sm" radius="sm" border>
                  <span style={{ fontSize: '0.875rem', color: 'var(--color-text-muted)' }}>
                    Deepest: padding="sm"
                  </span>
                </Surface>
              </Stack>
            </Surface>
          </Stack>
        </Surface>
      </PropDemo>

      <PropDemo name="as" description="Renders the surface as a different HTML element. Useful for semantic markup (section, article, aside, main).">
        <Surface as="section" level="panel" padding="lg" radius="md" border>
          <span style={{ fontSize: '0.875rem' }}>
            Rendered as <code>&lt;section&gt;</code> via the <code>as</code> prop.
          </span>
        </Surface>
      </PropDemo>
    </DocBlock>
  );
}
