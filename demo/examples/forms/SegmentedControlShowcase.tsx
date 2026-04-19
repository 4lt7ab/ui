import { useState } from 'react';
import { SegmentedControl, Stack, semantic as t } from '@4lt7ab/ui';

// ---------------------------------------------------------------------------
// SegmentedControl showcase — live example for 05-forms.md
// ---------------------------------------------------------------------------
//
// Exercises the roving-tabindex keyboard pattern that a code fence can't
// show: Tab enters the group on the active segment, arrow keys move the
// selection + focus, Home/End jump to the ends, and the sliding pill
// indicator animates between segments (respects prefers-reduced-motion).
//
// Two sizes side-by-side so the 28px `sm` vs 32px `md` difference is
// visible, and a second instance with icon-only segments to show the
// layout delta.

export function SegmentedControlShowcase(): React.JSX.Element {
  const [view, setView] = useState<string>('summary');
  const [density, setDensity] = useState<string>('comfortable');

  return (
    <Stack gap="lg">
      <Stack gap="sm">
        <p style={hintStyle}>
          Tab into the control, then use Arrow keys (Home/End jumps to the
          ends). The pill indicator animates between segments.
        </p>
        <SegmentedControl
          aria-label="View"
          value={view}
          onChange={setView}
          segments={[
            { value: 'summary', label: 'Summary' },
            { value: 'details', label: 'Details' },
            { value: 'history', label: 'History' },
          ]}
        />
        <span style={resultStyle}>
          View: <code>{view}</code>
        </span>
      </Stack>

      <Stack gap="sm">
        <p style={hintStyle}>Compact (size="sm") with leading icons.</p>
        <SegmentedControl
          aria-label="Density"
          size="sm"
          value={density}
          onChange={setDensity}
          segments={[
            { value: 'compact', label: 'Compact', icon: 'minus' },
            { value: 'comfortable', label: 'Comfortable', icon: 'menu' },
            { value: 'spacious', label: 'Spacious', icon: 'plus' },
          ]}
        />
        <span style={resultStyle}>
          Density: <code>{density}</code>
        </span>
      </Stack>
    </Stack>
  );
}

const hintStyle: React.CSSProperties = {
  margin: 0,
  fontSize: t.fontSizeXs,
  color: t.colorTextMuted,
};

const resultStyle: React.CSSProperties = {
  fontSize: t.fontSizeXs,
  color: t.colorTextMuted,
};
