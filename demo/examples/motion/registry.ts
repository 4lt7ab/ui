import type { ComponentType } from 'react';
import { ThemeBackgroundCycler } from './ThemeBackgroundCycler';

// ---------------------------------------------------------------------------
// Motion concept — live-example sub-registry
// ---------------------------------------------------------------------------
//
// Widgets that teach the `@4lt7ab/animations` background layer. Only one
// interactive component lives in this concept (`ThemeBackground`); the
// sub-registry still exists so the root registry's merge pattern is uniform
// across concepts.

export const MOTION_EXAMPLES: Record<string, ComponentType> = {
  'motion-themebackground': ThemeBackgroundCycler,
};
