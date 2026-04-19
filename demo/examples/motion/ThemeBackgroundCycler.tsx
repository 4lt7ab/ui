import { useEffect, useMemo, useRef, useState } from 'react';
import { Stack, Button, semantic as t, useTheme } from '@4lt7ab/ui';
import {
  synthwaveBackground,
  pipboyBackground,
  neuralBackground,
  pacmanBackground,
  blackHoleBackground,
  slateStaticBackground,
  warmSandStaticBackground,
  mossStaticBackground,
  coralStaticBackground,
} from '@4lt7ab/animations';
import type { BackgroundFunction, StaticBackgroundFunction } from '@4lt7ab/animations';
import { tokenToCssProperty } from '@4lt7ab/core';
import type { ThemeTokens } from '@4lt7ab/core';

// ---------------------------------------------------------------------------
// ThemeBackground Cycler — live example for 08-motion.md
// ---------------------------------------------------------------------------
//
// Button row to cycle through every theme that ships a registered backdrop
// (canvas or static), rendering it inside a constrained frame rather than
// full-viewport. The cycler drives the *same* background functions
// `ThemeBackground` uses under the hood — this is the "standalone" path the
// motion doc describes, scoped to one themed panel instead of the whole
// page.
//
// The panel's own tokens are locally overridden via `tokenToCssProperty`,
// so canvas backgrounds that read `getComputedStyle(...).getPropertyValue(...)`
// (e.g. `neural` picking up `--color-text-link`) recolor to the selected
// theme — even though the rest of the page keeps the consumer's chosen
// theme unchanged.

interface BackdropEntry {
  /** Theme name. */
  name: string;
  /** Pretty label. */
  label: string;
  kind: 'canvas' | 'static';
  canvas?: BackgroundFunction;
  static?: StaticBackgroundFunction;
}

const BACKDROPS: BackdropEntry[] = [
  { name: 'synthwave', label: 'Synthwave', kind: 'canvas', canvas: synthwaveBackground },
  { name: 'pipboy', label: 'Pip-Boy', kind: 'canvas', canvas: pipboyBackground },
  { name: 'neural', label: 'Neural', kind: 'canvas', canvas: neuralBackground },
  { name: 'pacman', label: 'Pac-Man', kind: 'canvas', canvas: pacmanBackground },
  { name: 'black-hole', label: 'Black Hole', kind: 'canvas', canvas: blackHoleBackground },
  { name: 'slate', label: 'Slate', kind: 'static', static: slateStaticBackground },
  { name: 'warm-sand', label: 'Warm Sand', kind: 'static', static: warmSandStaticBackground },
  { name: 'moss', label: 'Moss', kind: 'static', static: mossStaticBackground },
  { name: 'coral', label: 'Coral', kind: 'static', static: coralStaticBackground },
];

export function ThemeBackgroundCycler(): React.JSX.Element {
  const { themes } = useTheme();
  const [active, setActive] = useState<string>(BACKDROPS[0].name);
  const panelRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const staticLayerRef = useRef<HTMLDivElement>(null);

  const entry = useMemo(
    () => BACKDROPS.find((b) => b.name === active) ?? BACKDROPS[0],
    [active],
  );

  // Apply the active theme's tokens to the panel subtree so canvas
  // backgrounds that read CSS vars recolor per selection.
  useEffect(() => {
    const def = themes.get(entry.name);
    if (!panelRef.current || !def) return;
    const keys = Object.keys(def.tokens) as (keyof ThemeTokens)[];
    for (const key of keys) {
      panelRef.current.style.setProperty(tokenToCssProperty(key), def.tokens[key]);
    }
  }, [entry, themes]);

  // Run the matching backdrop function. Canvas → call function, keep cleanup.
  // Static → apply the returned CSS to a layer div.
  useEffect(() => {
    if (entry.kind === 'canvas' && canvasRef.current && entry.canvas) {
      const cleanup = entry.canvas(canvasRef.current);
      if (staticLayerRef.current) staticLayerRef.current.style.cssText = '';
      return cleanup;
    }
    if (entry.kind === 'static' && staticLayerRef.current && entry.static) {
      staticLayerRef.current.style.cssText = entry.static();
    }
    return undefined;
  }, [entry]);

  return (
    <Stack gap="md">
      <Stack direction="horizontal" gap="xs" wrap>
        {BACKDROPS.map((b) => (
          <Button
            key={b.name}
            size="sm"
            variant={b.name === active ? 'primary' : 'secondary'}
            onClick={() => setActive(b.name)}
          >
            {b.label}
          </Button>
        ))}
      </Stack>

      <div
        ref={panelRef}
        style={{
          position: 'relative',
          height: '18rem',
          borderRadius: t.radiusLg,
          border: `${t.borderWidthDefault} solid ${t.colorBorder}`,
          overflow: 'hidden',
          background: t.colorSurfacePage,
        }}
        aria-label={`${entry.label} backdrop preview`}
      >
        {entry.kind === 'canvas' ? (
          <canvas
            ref={canvasRef}
            style={{
              position: 'absolute',
              inset: 0,
              width: '100%',
              height: '100%',
            }}
            aria-hidden="true"
          />
        ) : (
          <div
            ref={staticLayerRef}
            style={{ position: 'absolute', inset: 0 }}
            aria-hidden="true"
          />
        )}
        <div style={labelOverlayStyle}>
          {entry.label} ({entry.kind})
        </div>
      </div>
    </Stack>
  );
}

const labelOverlayStyle: React.CSSProperties = {
  position: 'absolute',
  bottom: t.spaceSm,
  right: t.spaceSm,
  fontFamily: t.fontMono,
  fontSize: t.fontSizeXs,
  color: t.colorText,
  background: t.colorSurfaceOverlay,
  padding: `${t.spaceXs} ${t.spaceSm}`,
  borderRadius: t.radiusSm,
  pointerEvents: 'none',
};
