import { useState } from 'react';
import {
  Badge,
  Button,
  Header,
  SegmentedControl,
  Stack,
  StatusDot,
  semantic as t,
} from '@4lt7ab/ui';
import type { HeaderLevel } from '@4lt7ab/ui';

// ---------------------------------------------------------------------------
// Header showcase — live example for 04-layout.md
// ---------------------------------------------------------------------------
//
// `Header` itself is prop-driven, but the combinations of `level`,
// `subtitle`, `indicator`, and `trailing` are what consumers tune by hand
// every time they use it. The showcase gives you live toggles for those
// four axes so you can see how each prop flows into the rendered output
// without rebuilding the component tree in your head from a code fence.

type IndicatorOption = 'none' | 'badge' | 'status-live' | 'status-draft';

export function HeaderShowcase(): React.JSX.Element {
  const [level, setLevel] = useState<HeaderLevel>('page');
  const [showSubtitle, setShowSubtitle] = useState(true);
  const [indicator, setIndicator] = useState<IndicatorOption>('badge');
  const [showTrailing, setShowTrailing] = useState(true);

  const indicatorNode =
    indicator === 'badge' ? (
      <Badge variant="success">Active</Badge>
    ) : indicator === 'status-live' ? (
      <StatusDot variant="success" animate="pulse" aria-label="Live" />
    ) : indicator === 'status-draft' ? (
      <StatusDot variant="warning" aria-label="Draft" />
    ) : undefined;

  return (
    <Stack gap="lg">
      <Stack gap="sm">
        <div style={controlRowStyle}>
          <span style={labelStyle}>Level</span>
          <SegmentedControl
            value={level}
            onChange={(v) => setLevel(v as HeaderLevel)}
            segments={[
              { value: 'page', label: 'Page' },
              { value: 'section', label: 'Section' },
            ]}
            aria-label="Heading level"
            size="sm"
          />
        </div>

        <div style={controlRowStyle}>
          <span style={labelStyle}>Indicator</span>
          <SegmentedControl
            value={indicator}
            onChange={(v) => setIndicator(v as IndicatorOption)}
            segments={[
              { value: 'none', label: 'None' },
              { value: 'badge', label: 'Badge' },
              { value: 'status-live', label: 'Dot · live' },
              { value: 'status-draft', label: 'Dot · draft' },
            ]}
            aria-label="Indicator"
            size="sm"
          />
        </div>

        <div style={controlRowStyle}>
          <span style={labelStyle}>Subtitle</span>
          <SegmentedControl
            value={showSubtitle ? 'on' : 'off'}
            onChange={(v) => setShowSubtitle(v === 'on')}
            segments={[
              { value: 'off', label: 'Off' },
              { value: 'on', label: 'On' },
            ]}
            aria-label="Subtitle"
            size="sm"
          />
        </div>

        <div style={controlRowStyle}>
          <span style={labelStyle}>Trailing</span>
          <SegmentedControl
            value={showTrailing ? 'on' : 'off'}
            onChange={(v) => setShowTrailing(v === 'on')}
            segments={[
              { value: 'off', label: 'Off' },
              { value: 'on', label: 'Actions' },
            ]}
            aria-label="Trailing slot"
            size="sm"
          />
        </div>
      </Stack>

      <div style={frameStyle}>
        <Header
          level={level}
          title="Apollo"
          subtitle={showSubtitle ? 'Last updated 2 hours ago' : undefined}
          indicator={indicatorNode}
          trailing={
            showTrailing ? (
              <>
                <Button variant="secondary" size="sm">
                  Share
                </Button>
                <Button size="sm">Edit</Button>
              </>
            ) : undefined
          }
        />
      </div>
    </Stack>
  );
}

const controlRowStyle: React.CSSProperties = {
  display: 'flex',
  alignItems: 'center',
  gap: t.spaceMd,
  flexWrap: 'wrap',
};

const labelStyle: React.CSSProperties = {
  fontSize: t.fontSizeXs,
  color: t.colorTextMuted,
  textTransform: 'uppercase',
  letterSpacing: t.letterSpacingWide,
  fontWeight: t.fontWeightSemibold,
  minWidth: '5rem',
};

const frameStyle: React.CSSProperties = {
  border: `${t.borderWidthDefault} solid ${t.colorBorder}`,
  borderRadius: t.radiusLg,
  padding: `${t.spaceLg} ${t.spaceXl}`,
  background: t.colorSurfacePanel,
};
