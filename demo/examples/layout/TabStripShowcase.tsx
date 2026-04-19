import { useState } from 'react';
import { SegmentedControl, Stack, TabStrip, semantic as t } from '@4lt7ab/ui';
import type { Tab } from '@4lt7ab/ui';

// ---------------------------------------------------------------------------
// TabStrip showcase — live example for 04-layout.md
// ---------------------------------------------------------------------------
//
// `TabStrip` is always controlled — the consumer owns `activeKey` and
// renders the corresponding panel content. The showcase exercises:
//
//   - The controlled contract itself: current selection is stored here and
//     rendered below the strip.
//   - Keyboard navigation: roving tabindex (Left/Right/Home/End) cycles
//     across tabs; Enter/Space activates.
//   - `allowDeselect`: clicking the active tab returns `null` so the
//     consumer can close a panel entirely. Toggle the prop live to see
//     how the behavior changes.
//
// The "uncontrolled" column is a tiny helper that demonstrates the
// recommended call site when you don't need to read the active key from
// outside: pass an initial tab and a local `useState` callback — there is
// no `defaultActiveKey` prop on `TabStrip` itself.

const TABS: readonly Tab[] = [
  { key: 'summary', label: 'Summary', icon: 'description' },
  { key: 'activity', label: 'Activity', icon: 'schedule' },
  { key: 'context', label: 'Context' },
  { key: 'settings', label: 'Settings', icon: 'tune' },
];

const PANEL_COPY: Record<string, string> = {
  summary: 'A rollup of the current state — metrics, ownership, next steps.',
  activity: 'Chronological feed of edits, comments, and status transitions.',
  context: 'Related entities, tags, and long-form prose describing the thing.',
  settings: 'Configuration knobs for the surface itself (notifications, access).',
};

export function TabStripShowcase(): React.JSX.Element {
  const [tab, setTab] = useState<string | null>('summary');
  const [allowDeselect, setAllowDeselect] = useState(false);
  const [size, setSize] = useState<'sm' | 'md'>('md');

  return (
    <Stack gap="md">
      <Stack direction="horizontal" gap="md" align="center" wrap>
        <div style={controlRowStyle}>
          <span style={labelStyle}>Size</span>
          <SegmentedControl
            value={size}
            onChange={(v) => setSize(v as 'sm' | 'md')}
            segments={[
              { value: 'sm', label: 'sm' },
              { value: 'md', label: 'md' },
            ]}
            aria-label="Tab size"
            size="sm"
          />
        </div>
        <div style={controlRowStyle}>
          <span style={labelStyle}>allowDeselect</span>
          <SegmentedControl
            value={allowDeselect ? 'on' : 'off'}
            onChange={(v) => setAllowDeselect(v === 'on')}
            segments={[
              { value: 'off', label: 'Off' },
              { value: 'on', label: 'On' },
            ]}
            aria-label="Allow deselect"
            size="sm"
          />
        </div>
      </Stack>

      <div style={frameStyle}>
        <TabStrip
          tabs={TABS as Tab[]}
          activeKey={tab}
          onChange={setTab}
          allowDeselect={allowDeselect}
          size={size}
        />
        <div style={panelStyle}>
          {tab ? (
            <p style={bodyStyle}>{PANEL_COPY[tab]}</p>
          ) : (
            <p style={emptyStyle}>
              No tab selected. With <code>allowDeselect</code> on, clicking the
              active tab returns <code>null</code> and the consumer decides
              what to show.
            </p>
          )}
        </div>
      </div>

      <p style={statusStyle}>
        Active key: <code>{tab === null ? 'null' : JSON.stringify(tab)}</code>{' '}
        — try Left/Right/Home/End from inside the strip.
      </p>
    </Stack>
  );
}

const controlRowStyle: React.CSSProperties = {
  display: 'flex',
  alignItems: 'center',
  gap: t.spaceSm,
};

const labelStyle: React.CSSProperties = {
  fontSize: t.fontSizeXs,
  color: t.colorTextMuted,
  textTransform: 'uppercase',
  letterSpacing: t.letterSpacingWide,
  fontWeight: t.fontWeightSemibold,
};

const frameStyle: React.CSSProperties = {
  border: `${t.borderWidthDefault} solid ${t.colorBorder}`,
  borderRadius: t.radiusLg,
  overflow: 'hidden',
  background: t.colorSurfacePage,
};

const panelStyle: React.CSSProperties = {
  padding: t.spaceLg,
  background: t.colorSurface,
  borderTop: `${t.borderWidthDefault} solid ${t.colorBorder}`,
  minHeight: '5rem',
};

const bodyStyle: React.CSSProperties = {
  margin: 0,
  color: t.colorText,
  fontSize: t.fontSizeSm,
};

const emptyStyle: React.CSSProperties = {
  margin: 0,
  color: t.colorTextMuted,
  fontSize: t.fontSizeSm,
  fontStyle: 'italic',
};

const statusStyle: React.CSSProperties = {
  margin: 0,
  fontSize: t.fontSizeXs,
  color: t.colorTextMuted,
};
