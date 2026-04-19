import { useMemo, useState } from 'react';
import { Stack, SegmentedControl, semantic as t } from '@4lt7ab/ui';

// ---------------------------------------------------------------------------
// Token Inspector — live example for 02-theming.md
// ---------------------------------------------------------------------------
//
// Clickable browser over the `semantic` token surface. Pick a group (color /
// space / radius), click a token to see it applied to a preview tile and its
// resolved value pulled from the DOM via `getComputedStyle`. The resolved
// value changes immediately when the consumer switches themes in the header,
// demonstrating that the token layer is an indirection — components reference
// `var(--color-text)` while the active theme decides what that variable
// resolves to.
//
// All token strings are literal `var(--...)` references from `@4lt7ab/ui`'s
// `semantic` export — no raw values hand-rolled here.

type TokenGroup = 'color' | 'space' | 'radius';

interface TokenEntry {
  name: string;
  value: string;
  group: TokenGroup;
}

// Curated subset — enough to show breadth per group without overwhelming the
// widget. The full semantic surface is documented elsewhere in the same
// concept doc.
const TOKENS: TokenEntry[] = [
  { name: 'colorText', value: t.colorText, group: 'color' },
  { name: 'colorTextMuted', value: t.colorTextMuted, group: 'color' },
  { name: 'colorSurface', value: t.colorSurface, group: 'color' },
  { name: 'colorSurfaceRaised', value: t.colorSurfaceRaised, group: 'color' },
  { name: 'colorBorder', value: t.colorBorder, group: 'color' },
  { name: 'colorActionPrimary', value: t.colorActionPrimary, group: 'color' },
  { name: 'colorSuccess', value: t.colorSuccess, group: 'color' },
  { name: 'colorError', value: t.colorError, group: 'color' },
  { name: 'spaceXs', value: t.spaceXs, group: 'space' },
  { name: 'spaceSm', value: t.spaceSm, group: 'space' },
  { name: 'spaceMd', value: t.spaceMd, group: 'space' },
  { name: 'spaceLg', value: t.spaceLg, group: 'space' },
  { name: 'spaceXl', value: t.spaceXl, group: 'space' },
  { name: 'radiusSm', value: t.radiusSm, group: 'radius' },
  { name: 'radiusMd', value: t.radiusMd, group: 'radius' },
  { name: 'radiusLg', value: t.radiusLg, group: 'radius' },
  { name: 'radiusFull', value: t.radiusFull, group: 'radius' },
];

function resolveComputed(cssVar: string): string {
  if (typeof window === 'undefined') return cssVar;
  // `cssVar` is literally `var(--name)`. Pull the custom-property name out
  // and ask the document element for its computed value — that's the
  // concrete token the active theme resolves to.
  const match = cssVar.match(/^var\((--[\w-]+)\)$/);
  if (!match) return cssVar;
  const resolved = getComputedStyle(document.documentElement).getPropertyValue(match[1]).trim();
  return resolved || cssVar;
}

function Preview({ token }: { token: TokenEntry }): React.JSX.Element {
  const base: React.CSSProperties = {
    minHeight: '4rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    border: `${t.borderWidthDefault} solid ${t.colorBorder}`,
    borderRadius: t.radiusMd,
    padding: t.spaceMd,
    fontFamily: t.fontMono,
    fontSize: t.fontSizeSm,
  };

  if (token.group === 'color') {
    return (
      <div
        style={{
          ...base,
          background: token.value,
          color: token.name.startsWith('colorSurface') ? t.colorText : t.colorTextInverse,
        }}
      >
        {token.name}
      </div>
    );
  }

  if (token.group === 'space') {
    // Show the space as a gap between two tiles — visible without a ruler.
    return (
      <div style={{ ...base, gap: token.value, padding: token.value, justifyContent: 'flex-start' }}>
        <span style={swatchStyle} />
        <span style={swatchStyle} />
        <span style={swatchStyle} />
      </div>
    );
  }

  // radius — single filled tile showing the corner treatment
  return (
    <div style={{ ...base, padding: 0, minHeight: '5rem' }}>
      <div
        style={{
          width: '5rem',
          height: '3rem',
          background: t.colorActionPrimary,
          borderRadius: token.value,
        }}
      />
    </div>
  );
}

const swatchStyle: React.CSSProperties = {
  width: '1.25rem',
  height: '1.25rem',
  background: t.colorActionPrimary,
  borderRadius: t.radiusSm,
  display: 'inline-block',
};

export function TokenInspector(): React.JSX.Element {
  const [group, setGroup] = useState<TokenGroup>('color');
  const visible = useMemo(() => TOKENS.filter((tk) => tk.group === group), [group]);
  const [activeName, setActiveName] = useState<string>(visible[0]?.name ?? '');
  const active = visible.find((tk) => tk.name === activeName) ?? visible[0];
  // `resolveComputed` runs on every render, so when the consumer switches
  // themes in the header, the row below refreshes automatically on the next
  // parent render.
  const resolved = active ? resolveComputed(active.value) : '—';

  return (
    <Stack gap="md">
      <SegmentedControl
        value={group}
        onChange={(next) => {
          const g = next as TokenGroup;
          setGroup(g);
          const first = TOKENS.find((tk) => tk.group === g);
          if (first) setActiveName(first.name);
        }}
        segments={[
          { value: 'color', label: 'Color' },
          { value: 'space', label: 'Space' },
          { value: 'radius', label: 'Radius' },
        ]}
        aria-label="Token group"
      />

      <div style={listWrapStyle}>
        {visible.map((tk) => {
          const isActive = tk.name === active?.name;
          return (
            <button
              key={tk.name}
              type="button"
              onClick={() => setActiveName(tk.name)}
              style={{
                ...chipStyle,
                background: isActive ? t.colorSurfaceRaised : t.colorSurface,
                borderColor: isActive ? t.colorBorderFocused : t.colorBorder,
                color: isActive ? t.colorText : t.colorTextMuted,
              }}
            >
              {tk.name}
            </button>
          );
        })}
      </div>

      {active && (
        <Stack gap="sm">
          <Preview token={active} />
          <div style={resolvedRowStyle}>
            <code style={codeStyle}>{active.value}</code>
            <span style={arrowStyle}>→</span>
            <code style={codeStyle}>{resolved}</code>
          </div>
        </Stack>
      )}
    </Stack>
  );
}

const listWrapStyle: React.CSSProperties = {
  display: 'flex',
  flexWrap: 'wrap',
  gap: t.spaceXs,
};

const chipStyle: React.CSSProperties = {
  fontFamily: t.fontMono,
  fontSize: t.fontSizeXs,
  padding: `${t.spaceXs} ${t.spaceSm}`,
  border: `${t.borderWidthDefault} solid ${t.colorBorder}`,
  borderRadius: t.radiusSm,
  cursor: 'pointer',
};

const resolvedRowStyle: React.CSSProperties = {
  display: 'flex',
  alignItems: 'center',
  gap: t.spaceSm,
  flexWrap: 'wrap',
};

const codeStyle: React.CSSProperties = {
  fontFamily: t.fontMono,
  fontSize: t.fontSizeXs,
  color: t.colorTextMuted,
  background: t.colorSurfaceRaised,
  padding: `${t.spaceXs} ${t.spaceSm}`,
  borderRadius: t.radiusSm,
};

const arrowStyle: React.CSSProperties = {
  fontSize: t.fontSizeXs,
  color: t.colorTextMuted,
};
