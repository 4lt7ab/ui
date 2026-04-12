import { useState, useEffect, useRef } from 'react';
import { Card, Stack, Badge, Button, Input, Icon, useTheme } from '@4lt7ab/ui';
import type { ThemeDefinition, ThemeTokens } from '@4lt7ab/core';
import { tokenToCssProperty } from '@4lt7ab/core';

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

/** Apply all tokens from a ThemeDefinition as CSS variables on a DOM element. */
function applyTokensToElement(el: HTMLElement, tokens: ThemeTokens): void {
  const keys = Object.keys(tokens) as (keyof ThemeTokens)[];
  for (const key of keys) {
    el.style.setProperty(tokenToCssProperty(key), tokens[key]);
  }
}

// ---------------------------------------------------------------------------
// Token display data
// ---------------------------------------------------------------------------

const TOKEN_GROUPS = [
  { label: 'Text', keys: ['colorText', 'colorTextSecondary', 'colorTextMuted', 'colorTextLink', 'colorTextPlaceholder'] },
  { label: 'Surfaces', keys: ['colorSurface', 'colorSurfaceRaised', 'colorSurfaceInput', 'colorSurfaceDisabled'] },
  { label: 'Actions', keys: ['colorActionPrimary', 'colorActionSecondary', 'colorActionDestructive'] },
  { label: 'Feedback', keys: ['colorSuccess', 'colorWarning', 'colorError', 'colorInfo'] },
  { label: 'Borders', keys: ['colorBorder', 'colorBorderFocused', 'colorBorderError'] },
];

function tokenKeyToVar(key: string): string {
  // Convert camelCase to kebab-case CSS var
  const kebab = key.replace(/([A-Z])/g, '-$1').toLowerCase();
  return `var(--${kebab})`;
}

function tokenKeyToLabel(key: string): string {
  return key
    .replace(/^color/, '')
    .replace(/([A-Z])/g, '-$1')
    .toLowerCase()
    .replace(/^-/, '');
}

// ---------------------------------------------------------------------------
// Reference component set (rendered inside a themed scope)
// ---------------------------------------------------------------------------

function ReferenceComponents(): React.JSX.Element {
  return (
    <Stack gap="md">
      {/* Buttons */}
      <Stack gap="xs">
        <span style={{ fontSize: '0.7rem', fontWeight: 600, color: 'var(--color-text-muted)', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
          Buttons
        </span>
        <Stack direction="horizontal" gap="sm" wrap>
          <Button variant="primary" size="sm">Primary</Button>
          <Button variant="secondary" size="sm">Secondary</Button>
          <Button variant="destructive" size="sm">Destructive</Button>
          <Button variant="ghost" size="sm">Ghost</Button>
        </Stack>
      </Stack>

      {/* Badges */}
      <Stack gap="xs">
        <span style={{ fontSize: '0.7rem', fontWeight: 600, color: 'var(--color-text-muted)', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
          Badges
        </span>
        <Stack direction="horizontal" gap="sm" wrap>
          <Badge variant="default">default</Badge>
          <Badge variant="info">info</Badge>
          <Badge variant="success">success</Badge>
          <Badge variant="warning">warning</Badge>
          <Badge variant="error">error</Badge>
        </Stack>
      </Stack>

      {/* Input */}
      <Stack gap="xs">
        <span style={{ fontSize: '0.7rem', fontWeight: 600, color: 'var(--color-text-muted)', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
          Input
        </span>
        <Input placeholder="Type something..." />
      </Stack>

      {/* Card */}
      <Stack gap="xs">
        <span style={{ fontSize: '0.7rem', fontWeight: 600, color: 'var(--color-text-muted)', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
          Card
        </span>
        <Card variant="flat" padding="md">
          <Stack gap="xs">
            <span style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--color-text)' }}>
              Sample card
            </span>
            <span style={{ fontSize: '0.8rem', color: 'var(--color-text-secondary)' }}>
              Secondary text on a raised surface
            </span>
          </Stack>
        </Card>
      </Stack>

      {/* Typography */}
      <Stack gap="xs">
        <span style={{ fontSize: '0.7rem', fontWeight: 600, color: 'var(--color-text-muted)', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
          Typography
        </span>
        <div>
          <p style={{ margin: 0, fontSize: '1rem', fontWeight: 700, color: 'var(--color-text)', fontFamily: 'var(--font-sans)' }}>
            Heading text
          </p>
          <p style={{ margin: 0, fontSize: '0.85rem', color: 'var(--color-text-secondary)', fontFamily: 'var(--font-sans)' }}>
            Body text with secondary color
          </p>
          <p style={{ margin: 0, fontSize: '0.8rem', color: 'var(--color-text-muted)', fontFamily: 'var(--font-mono)' }}>
            Monospace muted text
          </p>
        </div>
      </Stack>
    </Stack>
  );
}

// ---------------------------------------------------------------------------
// Themed panel (scoped CSS variables)
// ---------------------------------------------------------------------------

function ThemedPanel({
  theme,
  themes,
  onChangeTheme,
}: {
  theme: string;
  themes: ReadonlyMap<string, ThemeDefinition>;
  onChangeTheme: (name: string) => void;
}): React.JSX.Element {
  const panelRef = useRef<HTMLDivElement>(null);
  const definition = themes.get(theme);

  useEffect(() => {
    if (panelRef.current && definition) {
      applyTokensToElement(panelRef.current, definition.tokens);
    }
  }, [theme, definition]);

  const themeList = Array.from(themes.values());

  return (
    <div
      ref={panelRef}
      style={{
        flex: 1,
        minWidth: 0,
        background: 'var(--color-surface)',
        borderRadius: 'var(--radius-md)',
        border: '1px solid var(--color-border)',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      {/* Panel header */}
      <div style={{
        padding: 'var(--space-sm) var(--space-md)',
        borderBottom: '1px solid var(--color-border)',
        background: 'var(--color-surface-panel)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}>
        <span style={{
          fontSize: '0.85rem',
          fontWeight: 600,
          color: 'var(--color-text)',
        }}>
          {definition?.label ?? theme}
        </span>
        <select
          value={theme}
          onChange={(e) => onChangeTheme(e.target.value)}
          style={{
            padding: '0.25rem 0.5rem',
            fontSize: '0.75rem',
            fontFamily: 'var(--font-mono)',
            background: 'var(--color-surface-input)',
            color: 'var(--color-text)',
            border: '1px solid var(--color-border)',
            borderRadius: 'var(--radius-sm)',
            cursor: 'pointer',
          }}
        >
          {themeList.map((t) => (
            <option key={t.name} value={t.name}>{t.label}</option>
          ))}
        </select>
      </div>

      {/* Reference components */}
      <div style={{ padding: 'var(--space-md)', overflowY: 'auto', flex: 1 }}>
        <ReferenceComponents />
      </div>
    </div>
  );
}

// ---------------------------------------------------------------------------
// Token palette
// ---------------------------------------------------------------------------

function TokenPalette({
  theme,
  themes,
}: {
  theme: string;
  themes: ReadonlyMap<string, ThemeDefinition>;
}): React.JSX.Element {
  const definition = themes.get(theme);
  if (!definition) return <span>Theme not found</span>;

  return (
    <Stack gap="lg">
      {TOKEN_GROUPS.map((group) => (
        <Stack key={group.label} gap="sm">
          <span style={{
            fontSize: '0.7rem',
            fontWeight: 600,
            color: 'var(--color-text-muted)',
            textTransform: 'uppercase',
            letterSpacing: '0.04em',
          }}>
            {group.label}
          </span>
          <Stack direction="horizontal" gap="sm" wrap>
            {group.keys.map((key) => {
              const value = definition.tokens[key as keyof ThemeTokens];
              if (!value) return null;
              return (
                <Stack key={key} direction="horizontal" gap="xs" align="center" style={{ minWidth: '11rem' }}>
                  <div style={{
                    width: '1.5rem',
                    height: '1.5rem',
                    borderRadius: 'var(--radius-sm)',
                    background: value,
                    border: '1px solid var(--color-border)',
                    flexShrink: 0,
                  }} />
                  <div>
                    <div style={{ fontSize: '0.7rem', fontFamily: 'var(--font-mono)', color: 'var(--color-text)' }}>
                      {tokenKeyToLabel(key)}
                    </div>
                    <div style={{ fontSize: '0.6rem', fontFamily: 'var(--font-mono)', color: 'var(--color-text-muted)' }}>
                      {value}
                    </div>
                  </div>
                </Stack>
              );
            })}
          </Stack>
        </Stack>
      ))}
    </Stack>
  );
}

// ---------------------------------------------------------------------------
// Theme Playground (main export)
// ---------------------------------------------------------------------------

export function ThemePlayground(): React.JSX.Element {
  const { resolved, themes } = useTheme();
  const themeList = Array.from(themes.values());

  const [leftTheme, setLeftTheme] = useState(resolved);
  const [rightTheme, setRightTheme] = useState(() => {
    // Pick a different theme for the right panel
    const other = themeList.find((t) => t.name !== resolved);
    return other?.name ?? resolved;
  });
  const [paletteTheme, setPaletteTheme] = useState(resolved);

  return (
    <div style={{ maxWidth: '72rem', margin: '0 auto', padding: 'var(--space-lg)' }}>
      <Stack gap="xl">
        {/* Header */}
        <Stack gap="sm">
          <h2 style={{
            margin: 0,
            fontSize: '1.25rem',
            fontWeight: 700,
            color: 'var(--color-text)',
          }}>
            Theme Playground
          </h2>
          <p style={{
            margin: 0,
            fontSize: '0.85rem',
            color: 'var(--color-text-secondary)',
            maxWidth: '40rem',
          }}>
            Compare themes side-by-side with a reference component set, and explore the
            token palette for any theme.
          </p>
        </Stack>

        {/* Side-by-side comparison */}
        <Stack gap="sm">
          <span style={{
            fontSize: '0.7rem',
            fontWeight: 600,
            color: 'var(--color-text-muted)',
            textTransform: 'uppercase',
            letterSpacing: '0.05em',
          }}>
            Side-by-side comparison
          </span>
          <div style={{
            display: 'flex',
            gap: 'var(--space-md)',
            minHeight: '28rem',
          }}>
            <ThemedPanel
              theme={leftTheme}
              themes={themes}
              onChangeTheme={setLeftTheme}
            />
            <ThemedPanel
              theme={rightTheme}
              themes={themes}
              onChangeTheme={setRightTheme}
            />
          </div>
        </Stack>

        {/* Token palette */}
        <Stack gap="sm">
          <Stack direction="horizontal" gap="md" align="center">
            <span style={{
              fontSize: '0.7rem',
              fontWeight: 600,
              color: 'var(--color-text-muted)',
              textTransform: 'uppercase',
              letterSpacing: '0.05em',
            }}>
              Token palette
            </span>
            <select
              value={paletteTheme}
              onChange={(e) => setPaletteTheme(e.target.value)}
              style={{
                padding: '0.25rem 0.5rem',
                fontSize: '0.75rem',
                fontFamily: 'var(--font-mono)',
                background: 'var(--color-surface-input)',
                color: 'var(--color-text)',
                border: '1px solid var(--color-border)',
                borderRadius: 'var(--radius-sm)',
                cursor: 'pointer',
              }}
            >
              {themeList.map((t) => (
                <option key={t.name} value={t.name}>{t.label}</option>
              ))}
            </select>
          </Stack>
          <Card variant="flat" padding="lg">
            <TokenPalette theme={paletteTheme} themes={themes} />
          </Card>
        </Stack>
      </Stack>
    </div>
  );
}
