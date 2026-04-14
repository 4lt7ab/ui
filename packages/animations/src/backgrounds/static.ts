/**
 * Static CSS background definitions for themes without canvas animations.
 * Each function returns a CSS string suitable for `element.style.cssText`.
 * Uses `var(--...)` theme tokens so backgrounds adapt automatically.
 */

/** A static background function that returns CSS to apply to a full-screen div. */
export type StaticBackgroundFunction = () => string;

/**
 * Slate: subtle vertical gradient from the surface color through a slightly
 * lighter blue-gray midpoint, creating depth without distraction.
 */
export function slateStaticBackground(): string {
  return [
    'background: linear-gradient(',
    '  160deg,',
    '  var(--color-surface-page) 0%,',
    '  var(--color-surface-raised) 40%,',
    '  color-mix(in srgb, var(--color-action-primary) 6%, var(--color-surface-page)) 70%,',
    '  var(--color-surface-page) 100%',
    ');',
  ].join('\n');
}

/**
 * Warm Sand: warm diagonal gradient with a subtle earthy glow at the center,
 * evoking sun-baked sandstone.
 */
export function warmSandStaticBackground(): string {
  return [
    'background: linear-gradient(',
    '  135deg,',
    '  var(--color-surface-page) 0%,',
    '  color-mix(in srgb, var(--color-action-primary) 8%, var(--color-surface-page)) 35%,',
    '  var(--color-surface-raised) 60%,',
    '  var(--color-surface-page) 100%',
    ');',
  ].join('\n');
}

/**
 * Moss: nature-inspired gradient with a soft green tint radiating from the
 * bottom-left, like light filtering through a canopy.
 */
export function mossStaticBackground(): string {
  return [
    'background:',
    '  radial-gradient(',
    '    ellipse at 20% 80%,',
    '    color-mix(in srgb, var(--color-action-primary) 10%, var(--color-surface-page)) 0%,',
    '    transparent 60%',
    '  ),',
    '  linear-gradient(',
    '    170deg,',
    '    var(--color-surface-page) 0%,',
    '    var(--color-surface-raised) 50%,',
    '    var(--color-surface-page) 100%',
    '  );',
  ].join('\n');
}

/**
 * Coral: warm radial glow from the top-right corner, suggesting sunset light
 * with a coral-toned accent.
 */
export function coralStaticBackground(): string {
  return [
    'background:',
    '  radial-gradient(',
    '    ellipse at 80% 20%,',
    '    color-mix(in srgb, var(--color-action-primary) 10%, var(--color-surface-page)) 0%,',
    '    transparent 55%',
    '  ),',
    '  linear-gradient(',
    '    200deg,',
    '    var(--color-surface-page) 0%,',
    '    var(--color-surface-raised) 45%,',
    '    var(--color-surface-page) 100%',
    '  );',
  ].join('\n');
}

/** Registry of static backgrounds keyed by theme name. */
export const staticBackgroundRegistry: Record<string, StaticBackgroundFunction> = {
  slate: slateStaticBackground,
  'warm-sand': warmSandStaticBackground,
  moss: mossStaticBackground,
  coral: coralStaticBackground,
};
