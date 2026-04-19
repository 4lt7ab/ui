import type { ComponentType } from 'react';
import { ThemePlaygroundLive } from './ThemePlaygroundLive';
import { TokenInspector } from './TokenInspector';

// ---------------------------------------------------------------------------
// Theming concept — live-example sub-registry
// ---------------------------------------------------------------------------
//
// Widgets that teach theming (tokens, themes, ThemePicker, useTheme). The
// root `demo/examples/registry.ts` merges this map with every other
// concept's sub-registry into a single lookup table keyed by id. Ids follow
// the `<concept-slug>-<kebab-name>` convention from the design doc §2.3 so
// collisions across concepts are structurally impossible.

export const THEMING_EXAMPLES: Record<string, ComponentType> = {
  'theming-theme-playground': ThemePlaygroundLive,
  'theming-token-inspector': TokenInspector,
};
