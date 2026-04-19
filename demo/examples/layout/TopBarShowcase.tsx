import { useState } from 'react';
import {
  Button,
  IconButton,
  SegmentedControl,
  Stack,
  ThemePicker,
  TopBar,
  semantic as t,
} from '@4lt7ab/ui';

// ---------------------------------------------------------------------------
// TopBar showcase — live example for 04-layout.md
// ---------------------------------------------------------------------------
//
// Exercises the three slots (`Leading`, `Nav`, `Trailing`) and the two
// interaction surfaces that a code fence undersells:
//
//   - `TopBar.Link` with `active` driving the `aria-current="page"` state
//     and the animated underline. Clicking a link selects it — the
//     selection lives here, not in `TopBar`, since routing is always the
//     consumer's concern.
//   - Variant switching between a primary-style top bar (Leading + Nav +
//     Trailing) and a utility-style top bar (Leading + Trailing only) so
//     the consumer can see how the Nav slot flexes away.

interface NavItem {
  key: string;
  label: string;
}

const NAV_ITEMS: readonly NavItem[] = [
  { key: 'home', label: 'Home' },
  { key: 'projects', label: 'Projects' },
  { key: 'inbox', label: 'Inbox' },
  { key: 'settings', label: 'Settings' },
];

type Variant = 'primary' | 'utility';

export function TopBarShowcase(): React.JSX.Element {
  const [variant, setVariant] = useState<Variant>('primary');
  const [active, setActive] = useState('home');

  return (
    <Stack gap="md">
      <Stack direction="horizontal" gap="sm" align="center" wrap>
        <span style={labelStyle}>Variant</span>
        <SegmentedControl
          value={variant}
          onChange={(v) => setVariant(v as Variant)}
          segments={[
            { value: 'primary', label: 'Leading + Nav + Trailing' },
            { value: 'utility', label: 'Leading + Trailing' },
          ]}
          aria-label="TopBar variant"
        />
      </Stack>

      <div style={frameStyle}>
        {variant === 'primary' ? (
          <TopBar.Root aria-label="Primary navigation">
            <TopBar.Leading>
              <span>Acme Inc.</span>
            </TopBar.Leading>
            <TopBar.Nav aria-label="Main">
              {NAV_ITEMS.map((item) => (
                <TopBar.Link
                  key={item.key}
                  active={item.key === active}
                  onClick={() => setActive(item.key)}
                >
                  {item.label}
                </TopBar.Link>
              ))}
            </TopBar.Nav>
            <TopBar.Trailing>
              <IconButton icon="search" size="sm" aria-label="Search" />
              <ThemePicker variant="compact" />
            </TopBar.Trailing>
          </TopBar.Root>
        ) : (
          <TopBar.Root aria-label="Utility bar">
            <TopBar.Leading>
              <span>Acme Admin</span>
            </TopBar.Leading>
            <TopBar.Trailing>
              <Button variant="secondary" size="sm">
                Invite
              </Button>
              <ThemePicker variant="compact" />
            </TopBar.Trailing>
          </TopBar.Root>
        )}
      </div>

      {variant === 'primary' && (
        <p style={statusStyle}>
          Active: <code>{active}</code> — the active link gets{' '}
          <code>aria-current="page"</code> and the accent underline.
        </p>
      )}
    </Stack>
  );
}

const frameStyle: React.CSSProperties = {
  border: `${t.borderWidthDefault} solid ${t.colorBorder}`,
  borderRadius: t.radiusLg,
  overflow: 'hidden',
  background: t.colorSurfacePage,
};

const labelStyle: React.CSSProperties = {
  fontSize: t.fontSizeXs,
  color: t.colorTextMuted,
  textTransform: 'uppercase',
  letterSpacing: t.letterSpacingWide,
  fontWeight: t.fontWeightSemibold,
};

const statusStyle: React.CSSProperties = {
  margin: 0,
  fontSize: t.fontSizeXs,
  color: t.colorTextMuted,
};
