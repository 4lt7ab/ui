import { Card, Stack, Button } from '@4lt7ab/ui';
import { DocBlock, PropDemo, type PropMeta } from '../components/DocBlock';

const props: PropMeta[] = [
  { name: 'variant', type: "'default' | 'flat' | 'elevated' | 'live'", default: "'default'", description: 'Visual treatment of the card surface.' },
  { name: 'padding', type: "'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl'", default: "'lg'", description: 'Inner padding using spacing tokens.' },
  { name: 'hover', type: 'boolean', default: 'false', description: 'Enable interactive hover state with border highlight and lift effect.' },
  { name: 'children', type: 'ReactNode', required: true, description: 'Card content.' },
];

export function CardDemo(): React.JSX.Element {
  return (
    <DocBlock props={props}>
      <PropDemo name="variant" description="Controls the card's background, border, and shadow. The live variant adds a pulsing border glow for active/real-time state.">
        <Stack gap="md">
          <Card variant="default">
            <strong>Default</strong>
            <p style={{ margin: '0.25rem 0 0', color: 'var(--color-text-secondary)', fontSize: '0.875rem' }}>
              Subtle border with a light shadow. The standard container.
            </p>
          </Card>
          <Card variant="flat" padding="md">
            <strong>Flat</strong>
            <p style={{ margin: '0.25rem 0 0', color: 'var(--color-text-secondary)', fontSize: '0.875rem' }}>
              Raised background, no shadow. Good for inset or nested panels.
            </p>
          </Card>
          <Card variant="elevated">
            <strong>Elevated</strong>
            <p style={{ margin: '0.25rem 0 0', color: 'var(--color-text-secondary)', fontSize: '0.875rem' }}>
              Stronger shadow. Good for floating content, popovers, or prominent sections.
            </p>
          </Card>
          <Card variant="live">
            <strong>Live</strong>
            <p style={{ margin: '0.25rem 0 0', color: 'var(--color-text-secondary)', fontSize: '0.875rem' }}>
              Pulsing border glow to indicate real-time or active state. Respects prefers-reduced-motion.
            </p>
          </Card>
        </Stack>
      </PropDemo>

      <PropDemo name="padding" description="Inner spacing using the spacing token scale.">
        <Stack direction="horizontal" gap="md" wrap>
          {(['sm', 'md', 'lg', 'xl'] as const).map((p) => (
            <div key={p} style={{ flex: '1 1 8rem' }}>
              <Card padding={p} variant="flat">
                <span style={{ fontSize: '0.875rem' }}>padding="{p}"</span>
              </Card>
            </div>
          ))}
        </Stack>
      </PropDemo>

      <PropDemo name="hover" description="Adds a lift and border-highlight effect on mouse hover. Works with any variant.">
        <Stack direction="horizontal" gap="md" wrap>
          <div style={{ flex: '1 1 10rem' }}>
            <Card hover>
              <strong>Hoverable card</strong>
              <p style={{ margin: '0.25rem 0 0', color: 'var(--color-text-secondary)', fontSize: '0.875rem' }}>
                Lifts and highlights on hover. Good for clickable tiles.
              </p>
            </Card>
          </div>
          <div style={{ flex: '1 1 10rem' }}>
            <Card hover variant="flat">
              <strong>Flat + hover</strong>
              <p style={{ margin: '0.25rem 0 0', color: 'var(--color-text-secondary)', fontSize: '0.875rem' }}>
                Hover works with any variant.
              </p>
            </Card>
          </div>
          <div style={{ flex: '1 1 10rem' }}>
            <Card hover variant="live">
              <strong>Live + hover</strong>
              <p style={{ margin: '0.25rem 0 0', color: 'var(--color-text-secondary)', fontSize: '0.875rem' }}>
                Combines pulse animation with hover lift.
              </p>
            </Card>
          </div>
        </Stack>
      </PropDemo>
    </DocBlock>
  );
}
