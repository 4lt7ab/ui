import { Stack, Card } from '@4lt7ab/ui';

const colorTokens = [
  { group: 'Text', tokens: [
    ['text', 'var(--color-text)'],
    ['text-secondary', 'var(--color-text-secondary)'],
    ['text-muted', 'var(--color-text-muted)'],
    ['text-link', 'var(--color-text-link)'],
    ['text-placeholder', 'var(--color-text-placeholder)'],
  ]},
  { group: 'Surfaces', tokens: [
    ['surface', 'var(--color-surface)'],
    ['surface-raised', 'var(--color-surface-raised)'],
    ['surface-input', 'var(--color-surface-input)'],
    ['surface-disabled', 'var(--color-surface-disabled)'],
  ]},
  { group: 'Actions', tokens: [
    ['action-primary', 'var(--color-action-primary)'],
    ['action-secondary', 'var(--color-action-secondary)'],
    ['action-destructive', 'var(--color-action-destructive)'],
  ]},
  { group: 'Feedback', tokens: [
    ['success', 'var(--color-success)'],
    ['warning', 'var(--color-warning)'],
    ['error', 'var(--color-error)'],
    ['info', 'var(--color-info)'],
  ]},
  { group: 'Borders', tokens: [
    ['border', 'var(--color-border)'],
    ['border-focused', 'var(--color-border-focused)'],
    ['border-error', 'var(--color-border-error)'],
  ]},
];

const spacingTokens = [
  ['xs', 'var(--space-xs)'],
  ['sm', 'var(--space-sm)'],
  ['md', 'var(--space-md)'],
  ['lg', 'var(--space-lg)'],
  ['xl', 'var(--space-xl)'],
  ['2xl', 'var(--space-2xl)'],
];

function Swatch({ color, label }: { color: string; label: string }): React.JSX.Element {
  return (
    <Stack direction="horizontal" gap="sm" align="center" style={{ minWidth: '12rem' }}>
      <div style={{
        width: '2rem',
        height: '2rem',
        borderRadius: 'var(--radius-sm)',
        background: color,
        border: '1px solid var(--color-border)',
        flexShrink: 0,
      }} />
      <span style={{ fontSize: '0.8rem', fontFamily: 'var(--font-mono)' }}>{label}</span>
    </Stack>
  );
}

export function TokensDemo(): React.JSX.Element {
  return (
    <Stack gap="xl">
      {colorTokens.map(({ group, tokens }) => (
        <Stack key={group} gap="sm">
          <h3 style={{ margin: 0, fontSize: '1rem', fontWeight: 600 }}>{group}</h3>
          <Stack direction="horizontal" gap="md" wrap>
            {tokens.map(([label, color]) => (
              <Swatch key={label} label={label} color={color} />
            ))}
          </Stack>
        </Stack>
      ))}

      <Stack gap="sm">
        <h3 style={{ margin: 0, fontSize: '1rem', fontWeight: 600 }}>Spacing scale</h3>
        <Stack gap="sm">
          {spacingTokens.map(([label, size]) => (
            <Stack key={label} direction="horizontal" gap="md" align="center">
              <span style={{ fontSize: '0.8rem', fontFamily: 'var(--font-mono)', width: '2rem' }}>{label}</span>
              <div style={{
                height: '1.5rem',
                width: size,
                background: 'var(--color-action-primary)',
                borderRadius: 'var(--radius-sm)',
              }} />
            </Stack>
          ))}
        </Stack>
      </Stack>

      <Stack gap="sm">
        <h3 style={{ margin: 0, fontSize: '1rem', fontWeight: 600 }}>Shadows</h3>
        <Stack direction="horizontal" gap="lg" wrap>
          {['sm', 'md', 'lg'].map((s) => (
            <Card key={s} variant="default" padding="md" style={{
              boxShadow: `var(--shadow-${s})`,
              minWidth: '6rem',
              textAlign: 'center',
            }}>
              <span style={{ fontSize: '0.8rem', fontFamily: 'var(--font-mono)' }}>{s}</span>
            </Card>
          ))}
        </Stack>
      </Stack>

      <Stack gap="sm">
        <h3 style={{ margin: 0, fontSize: '1rem', fontWeight: 600 }}>Radii</h3>
        <Stack direction="horizontal" gap="md" wrap align="center">
          {['sm', 'md', 'lg', 'full'].map((r) => (
            <div key={r} style={{
              width: '3rem',
              height: '3rem',
              background: 'var(--color-action-primary)',
              borderRadius: `var(--radius-${r})`,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
              <span style={{ fontSize: '0.65rem', color: 'var(--color-text-inverse)', fontFamily: 'var(--font-mono)' }}>{r}</span>
            </div>
          ))}
        </Stack>
      </Stack>
    </Stack>
  );
}
