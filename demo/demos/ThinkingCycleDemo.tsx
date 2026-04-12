import { ThinkingCycle } from '../../src/content';
import { Stack } from '../../src';

export function ThinkingCycleDemo(): React.JSX.Element {
  return (
    <Stack gap="xl">
      <Stack gap="sm">
        <span style={{
          fontSize: '0.75rem',
          fontWeight: 600,
          color: 'var(--color-text-muted)',
          textTransform: 'uppercase',
          letterSpacing: '0.05em',
        }}>
          Inline usage
        </span>
        <p style={{ fontSize: '1.125rem', lineHeight: 1.6 }}>
          Building with AI tools is{' '}
          <ThinkingCycle
            words={['powerful', 'incredible', 'unbelievable', 'wild', 'exciting', 'inspiring', 'radical', 'beautiful']}
          />.
        </p>
      </Stack>

      <Stack gap="sm">
        <span style={{
          fontSize: '0.75rem',
          fontWeight: 600,
          color: 'var(--color-text-muted)',
          textTransform: 'uppercase',
          letterSpacing: '0.05em',
        }}>
          In a heading
        </span>
        <h2 style={{
          fontFamily: 'var(--font-serif)',
          fontWeight: 600,
          fontSize: 'clamp(1.4rem, 3vw, 1.875rem)',
          margin: 0,
        }}>
          The future is{' '}
          <ThinkingCycle
            words={['bright', 'uncertain', 'ours', 'now']}
            holdMs={2500}
          />
        </h2>
      </Stack>

      <Stack gap="sm">
        <span style={{
          fontSize: '0.75rem',
          fontWeight: 600,
          color: 'var(--color-text-muted)',
          textTransform: 'uppercase',
          letterSpacing: '0.05em',
        }}>
          Faster cycle
        </span>
        <p style={{ fontSize: '1rem' }}>
          Status:{' '}
          <ThinkingCycle
            words={['thinking', 'processing', 'learning', 'adapting']}
            holdMs={1200}
            tickMs={35}
            scrambleTicks={3}
          />
        </p>
      </Stack>
    </Stack>
  );
}
