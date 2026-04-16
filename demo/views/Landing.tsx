import { Card, Stack, Badge, Icon, Button } from '@4lt7ab/ui';
import type { IconName } from '@4lt7ab/ui';

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

interface EntryPoint {
  id: string;
  icon: IconName;
  title: string;
  description: string;
  detail: string;
}

const ENTRY_POINTS: EntryPoint[] = [
  {
    id: 'components',
    icon: 'search',
    title: 'Components',
    description: '30+ interactive components across UI and content packages',
    detail: 'Buttons, forms, tables, modals, cards, and more',
  },
  {
    id: 'patterns',
    icon: 'menu',
    title: 'Patterns',
    description: 'Full-page application recipes built from real compositions',
    detail: 'Dashboards, wizards, CRUD flows, and content layouts',
  },
  {
    id: 'themes',
    icon: 'eye',
    title: 'Themes',
    description: '8 built-in themes with a three-layer token system',
    detail: 'Side-by-side comparison and token palette explorer',
  },
];

// ---------------------------------------------------------------------------
// Package architecture diagram
// ---------------------------------------------------------------------------

function ArchDiagram(): React.JSX.Element {
  return (
    <div style={{
      display: 'grid',
      gap: 'var(--space-sm)',
      maxWidth: '36rem',
      margin: '0 auto',
    }}>
      {/* Core */}
      <Card variant="flat" padding="sm">
        <Stack direction="horizontal" gap="sm" align="center" justify="center">
          <Badge variant="info">core</Badge>
          <span style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)' }}>
            tokens, themes, ThemeProvider, useTheme
          </span>
        </Stack>
      </Card>

      {/* Arrow */}
      <div style={{ textAlign: 'center', color: 'var(--color-text-muted)', fontSize: '0.75rem' }}>
        <Icon name="chevron-down" size={16} />
      </div>

      {/* Dependent packages */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 'var(--space-sm)' }}>
        {[
          { name: 'ui', desc: 'components' },
          { name: 'content', desc: 'prose & layout' },
          { name: 'animations', desc: 'backgrounds' },
        ].map((pkg) => (
          <Card key={pkg.name} variant="flat" padding="sm">
            <Stack gap="xs" align="center">
              <Badge variant="default">{pkg.name}</Badge>
              <span style={{ fontSize: '0.7rem', color: 'var(--color-text-muted)', textAlign: 'center' }}>
                {pkg.desc}
              </span>
            </Stack>
          </Card>
        ))}
      </div>
    </div>
  );
}

// ---------------------------------------------------------------------------
// Install snippet
// ---------------------------------------------------------------------------

function InstallSnippet(): React.JSX.Element {
  return (
    <div style={{ maxWidth: '36rem', margin: '0 auto' }}>
    <Card variant="flat" padding="md">
      <Stack gap="xs">
        <span style={{
          fontSize: '0.7rem',
          fontWeight: 600,
          color: 'var(--color-text-muted)',
          textTransform: 'uppercase',
          letterSpacing: '0.05em',
        }}>
          Quick start
        </span>
        <pre style={{
          margin: 0,
          padding: 'var(--space-sm)',
          background: 'var(--color-surface)',
          borderRadius: 'var(--radius-sm)',
          fontSize: '0.8rem',
          fontFamily: 'var(--font-mono)',
          color: 'var(--color-text)',
          overflowX: 'auto',
        }}>
{`// package.json
"@4lt7ab/ui": "github:4lt7ab/ui#v0.2.5"

// usage
import { ThemeProvider, Button } from '@4lt7ab/ui/ui';
import { Prose } from '@4lt7ab/ui/content';
import { ThemeBackground } from '@4lt7ab/ui/animations';`}
        </pre>
      </Stack>
    </Card>
    </div>
  );
}

// ---------------------------------------------------------------------------
// Landing
// ---------------------------------------------------------------------------

export function Landing({ onNavigate }: { onNavigate: (view: string) => void }): React.JSX.Element {
  return (
    <div style={{ maxWidth: '52rem', margin: '0 auto', padding: 'var(--space-2xl) var(--space-lg)' }}>
      <Stack gap="2xl" align="center">
        {/* Hero */}
        <div style={{ textAlign: 'center' }}>
        <Stack gap="md" align="center">
          <Stack direction="horizontal" gap="sm" align="center">
            <h1 style={{
              margin: 0,
              fontSize: '2rem',
              fontWeight: 700,
              fontFamily: 'var(--font-mono)',
              letterSpacing: '-0.03em',
              color: 'var(--color-text)',
            }}>
              @4lt7ab/ui
            </h1>
            <Badge variant="info">v0.2.5</Badge>
          </Stack>
          <p style={{
            margin: 0,
            fontSize: '1.05rem',
            color: 'var(--color-text-secondary)',
            maxWidth: '32rem',
            lineHeight: 1.5,
          }}>
            A theme-first React component library. Tokens, themes, and 30+ components
            distributed as a single git dependency with subpath exports.
          </p>
        </Stack>
        </div>

        {/* Architecture */}
        <div style={{ width: '100%' }}>
        <Stack gap="md" align="center">
          <span style={{
            fontSize: '0.7rem',
            fontWeight: 600,
            color: 'var(--color-text-muted)',
            textTransform: 'uppercase',
            letterSpacing: '0.05em',
          }}>
            Package architecture
          </span>
          <ArchDiagram />
        </Stack>
        </div>

        {/* Install */}
        <div style={{ width: '100%' }}>
          <InstallSnippet />
        </div>

        {/* Entry points */}
        <div style={{ width: '100%' }}>
        <Stack gap="md">
          <span style={{
            fontSize: '0.7rem',
            fontWeight: 600,
            color: 'var(--color-text-muted)',
            textTransform: 'uppercase',
            letterSpacing: '0.05em',
            textAlign: 'center',
          }}>
            Explore
          </span>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(14rem, 1fr))',
            gap: 'var(--space-md)',
          }}>
            {ENTRY_POINTS.map((ep) => (
              <button
                key={ep.id}
                onClick={() => onNavigate(ep.id)}
                style={{
                  all: 'unset',
                  cursor: 'pointer',
                  display: 'block',
                }}
              >
                <div style={{
                  height: '100%',
                  transition: 'box-shadow 150ms ease, border-color 150ms ease',
                  border: '1px solid var(--color-border)',
                  borderRadius: 'var(--radius-md)',
                }}>
                <Card padding="lg">
                  <Stack gap="sm">
                    <Stack direction="horizontal" gap="sm" align="center">
                      <Icon name={ep.icon} size={18} style={{ color: 'var(--color-action-primary)' }} />
                      <span style={{
                        fontSize: '1rem',
                        fontWeight: 600,
                        color: 'var(--color-text)',
                      }}>
                        {ep.title}
                      </span>
                    </Stack>
                    <span style={{ fontSize: '0.85rem', color: 'var(--color-text-secondary)', lineHeight: 1.4 }}>
                      {ep.description}
                    </span>
                    <span style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)' }}>
                      {ep.detail}
                    </span>
                  </Stack>
                </Card>
                </div>
              </button>
            ))}
          </div>
        </Stack>
        </div>
      </Stack>
    </div>
  );
}
