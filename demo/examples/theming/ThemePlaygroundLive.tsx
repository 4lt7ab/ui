import { useState, useEffect, useRef, useMemo } from 'react';
import { Button, Card, Stack, Badge, Input, Select, semantic as t, useTheme } from '@4lt7ab/ui';
import type { ThemeDefinition, ThemeTokens } from '@4lt7ab/core';
import { tokenToCssProperty } from '@4lt7ab/core';

// ---------------------------------------------------------------------------
// Theme Playground — live example for 02-theming.md
// ---------------------------------------------------------------------------
//
// Two side-by-side themed panels. Each panel applies a selected theme's
// tokens as CSS variables scoped to its own DOM subtree, so the same
// reference components render twice — once per theme — without switching the
// app-wide theme. Demonstrates:
//
//   1. Every theme shares the same semantic API; swapping primitives is the
//      only thing that changes per-theme.
//   2. CSS vars cascade — a scoped application of `ThemeTokens` via
//      `tokenToCssProperty(key)` is enough to retheme any subtree.
//   3. `useTheme().themes` is the canonical registry of built-in themes.

function applyTokens(el: HTMLElement, tokens: ThemeTokens): void {
  const keys = Object.keys(tokens) as (keyof ThemeTokens)[];
  for (const key of keys) {
    el.style.setProperty(tokenToCssProperty(key), tokens[key]);
  }
}

function ReferenceComponents(): React.JSX.Element {
  return (
    <Stack gap="md">
      <Stack direction="horizontal" gap="sm" wrap>
        <Button variant="primary" size="sm">
          Primary
        </Button>
        <Button variant="secondary" size="sm">
          Secondary
        </Button>
        <Button variant="destructive" size="sm">
          Destructive
        </Button>
        <Button variant="ghost" size="sm">
          Ghost
        </Button>
      </Stack>
      <Stack direction="horizontal" gap="sm" wrap>
        <Badge variant="default">default</Badge>
        <Badge variant="info">info</Badge>
        <Badge variant="success">success</Badge>
        <Badge variant="warning">warning</Badge>
        <Badge variant="error">error</Badge>
      </Stack>
      <Input placeholder="Type something..." />
      <Card variant="flat" padding="sm">
        <p style={{ margin: 0, fontSize: t.fontSizeSm, color: t.colorText }}>
          Surface content reads as <strong>text</strong> on{' '}
          <code style={{ fontFamily: t.fontMono }}>colorSurface</code>.
        </p>
      </Card>
    </Stack>
  );
}

interface ThemedPanelProps {
  theme: string;
  themes: ReadonlyMap<string, ThemeDefinition>;
  onChangeTheme: (name: string) => void;
  otherThemes: readonly string[];
}

function ThemedPanel({ theme, themes, onChangeTheme, otherThemes }: ThemedPanelProps): React.JSX.Element {
  const panelRef = useRef<HTMLDivElement>(null);
  const definition = themes.get(theme);

  useEffect(() => {
    if (panelRef.current && definition) applyTokens(panelRef.current, definition.tokens);
  }, [theme, definition]);

  const options = useMemo(
    () =>
      otherThemes.map((name) => {
        const def = themes.get(name);
        return { value: name, label: def?.label ?? name };
      }),
    [otherThemes, themes],
  );

  return (
    <div
      ref={panelRef}
      style={{
        flex: 1,
        minWidth: 0,
        background: t.colorSurface,
        border: `${t.borderWidthDefault} solid ${t.colorBorder}`,
        borderRadius: t.radiusMd,
        padding: t.spaceMd,
      }}
    >
      <Stack gap="md">
        <Stack direction="horizontal" gap="sm" align="center" justify="space-between">
          <span style={{ fontSize: t.fontSizeSm, fontWeight: t.fontWeightSemibold, color: t.colorText }}>
            {definition?.label ?? theme}
          </span>
          <Select.Root value={theme} onValueChange={onChangeTheme}>
            <Select.Trigger aria-label="Theme">
              <Select.Value />
            </Select.Trigger>
            <Select.Content>
              {options.map((o) => (
                <Select.Item key={o.value} value={o.value}>
                  {o.label}
                </Select.Item>
              ))}
            </Select.Content>
          </Select.Root>
        </Stack>
        <ReferenceComponents />
      </Stack>
    </div>
  );
}

export function ThemePlaygroundLive(): React.JSX.Element {
  const { resolved, themes } = useTheme();
  const themeNames = useMemo(() => Array.from(themes.keys()), [themes]);

  const [leftTheme, setLeftTheme] = useState(resolved);
  const [rightTheme, setRightTheme] = useState(
    () => themeNames.find((n) => n !== resolved) ?? resolved,
  );

  return (
    <div
      style={{
        display: 'flex',
        gap: t.spaceMd,
        flexWrap: 'wrap',
      }}
    >
      <ThemedPanel
        theme={leftTheme}
        themes={themes}
        onChangeTheme={setLeftTheme}
        otherThemes={themeNames}
      />
      <ThemedPanel
        theme={rightTheme}
        themes={themes}
        onChangeTheme={setRightTheme}
        otherThemes={themeNames}
      />
    </div>
  );
}
