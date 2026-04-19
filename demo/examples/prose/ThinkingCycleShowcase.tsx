import { useState } from 'react';
import { Button, Stack, semantic as t } from '@4lt7ab/ui';
import { ThinkingCycle } from '@4lt7ab/content';

// ---------------------------------------------------------------------------
// ThinkingCycle showcase — live example for 03-prose.md
// ---------------------------------------------------------------------------
//
// ThinkingCycle is a fire-and-forget animation: once mounted, it runs its
// own timers and DOM writes until unmount. The showcase exposes the two
// knobs that matter to a consumer — "is it running?" (mount/unmount the
// component) and "how fast is it cycling?" (swap `holdMs`). Cycling between
// word-sets via an `index` key forces React to remount so the measurement
// pass re-runs with the new content.

const WORD_SETS: readonly (readonly string[])[] = [
  ['powerful', 'wild', 'unprecedented', 'strange'],
  ['focused', 'recursive', 'scrappy', 'patient'],
  ['composable', 'legible', 'semantic', 'rhythmic'],
];

const HOLD_PRESETS: ReadonlyArray<{ label: string; value: number }> = [
  { label: 'Slow (3s)', value: 3000 },
  { label: 'Default (2s)', value: 2000 },
  { label: 'Fast (1s)', value: 1000 },
];

export function ThinkingCycleShowcase(): React.JSX.Element {
  const [running, setRunning] = useState(true);
  const [wordSetIdx, setWordSetIdx] = useState(0);
  const [holdMs, setHoldMs] = useState(2000);

  const words = WORD_SETS[wordSetIdx]!;

  // Remount-key bumps whenever the caller changes word set or hold duration,
  // so ThinkingCycle re-measures widths and re-runs its timer wiring. Without
  // this, it would keep cycling the stale word list because the effect deps
  // are the old array identity.
  const remountKey = `${wordSetIdx}-${holdMs}`;

  return (
    <Stack gap="lg">
      <Stack gap="sm">
        <span style={labelStyle}>Inline preview</span>
        <p style={sentenceStyle}>
          Building with AI tools is{' '}
          {running ? (
            <ThinkingCycle key={remountKey} words={[...words]} holdMs={holdMs} />
          ) : (
            <span style={stoppedStyle}>{words[0]}</span>
          )}
          .
        </p>
      </Stack>

      <Stack gap="sm">
        <span style={labelStyle}>Controls</span>
        <div style={rowStyle}>
          <Button
            variant={running ? 'secondary' : 'primary'}
            size="sm"
            onClick={() => setRunning((v) => !v)}
          >
            {running ? 'Stop' : 'Start'}
          </Button>
          <Button
            variant="secondary"
            size="sm"
            onClick={() => setWordSetIdx((i) => (i + 1) % WORD_SETS.length)}
          >
            Next word set
          </Button>
        </div>
      </Stack>

      <Stack gap="sm">
        <span style={labelStyle}>Hold duration</span>
        <div style={rowStyle}>
          {HOLD_PRESETS.map((p) => (
            <Button
              key={p.value}
              variant={holdMs === p.value ? 'primary' : 'secondary'}
              size="sm"
              onClick={() => setHoldMs(p.value)}
            >
              {p.label}
            </Button>
          ))}
        </div>
      </Stack>

      <span style={hintStyle}>
        The animation respects <code>prefers-reduced-motion</code>: when set, words swap instantly without a scramble step.
      </span>
    </Stack>
  );
}

const labelStyle: React.CSSProperties = {
  fontSize: t.fontSizeXs,
  fontWeight: t.fontWeightSemibold,
  color: t.colorTextMuted,
  textTransform: 'uppercase',
  letterSpacing: t.letterSpacingWide,
};

const sentenceStyle: React.CSSProperties = {
  margin: 0,
  fontSize: t.fontSizeLg,
  color: t.colorText,
  lineHeight: t.lineHeightRelaxed,
};

const stoppedStyle: React.CSSProperties = {
  color: t.colorTextMuted,
  fontStyle: 'italic',
};

const rowStyle: React.CSSProperties = {
  display: 'flex',
  flexWrap: 'wrap',
  gap: t.spaceSm,
};

const hintStyle: React.CSSProperties = {
  fontSize: t.fontSizeXs,
  color: t.colorTextMuted,
};
