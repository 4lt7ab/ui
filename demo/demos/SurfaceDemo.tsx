import { Surface, Stack, Badge } from '@4lt7ab/ui';
import type { SurfaceLevel, SemanticColor } from '@4lt7ab/ui';

const desc: React.CSSProperties = {
  margin: '0.25rem 0 0',
  color: 'var(--color-text-secondary)',
  fontSize: '0.875rem',
};

const levels: { level: SurfaceLevel; description: string }[] = [
  { level: 'page', description: 'Full-page background.' },
  { level: 'default', description: 'Standard component background (cards, inputs, modals).' },
  { level: 'solid', description: 'Opaque counterpart — good for nested/layered content.' },
  { level: 'raised', description: 'Elevated surface for hover states and nested containers.' },
  { level: 'panel', description: 'Side panel and navigation background.' },
  { level: 'input', description: 'Text input / select / textarea background.' },
  { level: 'overlay', description: 'Semi-transparent backdrop behind modals.' },
];

export function SurfaceDemo(): React.JSX.Element {
  return (
    <Stack gap="xl">
      <Stack gap="sm">
        <h3 style={{ margin: 0, fontSize: '1rem', fontWeight: 600 }}>Surface levels</h3>
        <p style={{ ...desc, margin: 0 }}>
          Each level maps to a semantic <code>colorSurface*</code> token.
        </p>
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
      </Stack>

      <Stack gap="sm">
        <h3 style={{ margin: 0, fontSize: '1rem', fontWeight: 600 }}>Border & shadow</h3>
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
      </Stack>

      <Stack gap="sm">
        <h3 style={{ margin: 0, fontSize: '1rem', fontWeight: 600 }}>Semantic tints</h3>
        <p style={{ ...desc, margin: 0 }}>
          The <code>tint</code> prop applies a 10% color-mix overlay using semantic tokens.
        </p>
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
      </Stack>

      <Stack gap="sm">
        <h3 style={{ margin: 0, fontSize: '1rem', fontWeight: 600 }}>Radius options</h3>
        <Stack direction="horizontal" gap="md" wrap>
          {(['none', 'sm', 'md', 'lg', 'full'] as const).map((r) => (
            <div key={r} style={{ flex: '1 1 6rem', textAlign: 'center' }}>
              <Surface level="raised" padding="md" radius={r} border>
                <span style={{ fontSize: '0.875rem' }}>radius="{r}"</span>
              </Surface>
            </div>
          ))}
        </Stack>
      </Stack>

      <Stack gap="sm">
        <h3 style={{ margin: 0, fontSize: '1rem', fontWeight: 600 }}>Nested surfaces</h3>
        <Surface level="solid" padding="lg" border shadow="sm">
          <Stack gap="md">
            <strong>Outer: level="solid"</strong>
            <Surface level="raised" padding="md" radius="md" border>
              <Stack gap="sm">
                <strong>Inner: level="raised"</strong>
                <Surface level="input" padding="sm" radius="sm" border>
                  <span style={{ fontSize: '0.875rem', color: 'var(--color-text-muted)' }}>
                    Deepest: level="input"
                  </span>
                </Surface>
              </Stack>
            </Surface>
          </Stack>
        </Surface>
      </Stack>

      <Stack gap="sm">
        <h3 style={{ margin: 0, fontSize: '1rem', fontWeight: 600 }}>Polymorphic element</h3>
        <Surface as="section" level="panel" padding="lg" radius="md" border>
          <span style={{ fontSize: '0.875rem' }}>
            Rendered as <code>&lt;section&gt;</code> via the <code>as</code> prop.
          </span>
        </Surface>
      </Stack>
    </Stack>
  );
}
