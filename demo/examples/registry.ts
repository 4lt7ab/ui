import type { ComponentType } from 'react';
import { THEMING_EXAMPLES } from './theming/registry';
import { MOTION_EXAMPLES } from './motion/registry';
import { PROSE_EXAMPLES } from './prose/registry';
import { LAYOUT_EXAMPLES } from './layout/registry';
import { FORMS_EXAMPLES } from './forms/registry';
import { DATA_EXAMPLES } from './data/registry';
import { MODALS_EXAMPLES } from './modals/registry';

// ---------------------------------------------------------------------------
// Live-example registry (root)
// ---------------------------------------------------------------------------
//
// Single source of truth for which `<LiveExample id="..." />` ids exist in
// the concept-doc markdown. Concept docs write an HTML block with `id`; the
// `<LiveExample>` renderer (see `./LiveExample.tsx`) looks the id up here
// and renders the matching widget inside a bordered Card frame.
//
// Per §2.7 (amended 2026-04-19), this root file is a re-exporter that
// merges per-concept sub-registries. Each concept owns its own
// `<concept>/registry.ts` so the six `demo-samples-v1` widget tasks can run
// in parallel without contending on a single flat file. Adding a new concept
// here is additive: one import + one spread.
//
// Id convention (per design doc §2.3): `<concept-slug>-<kebab-widget-name>`.
// The concept prefix makes cross-concept collisions structurally impossible;
// intra-concept collisions surface as a duplicate-key error in the relevant
// sub-registry literal.
//
// Adding a new live example:
//   1. Build the widget under `demo/examples/<concept>/<Widget>.tsx`.
//   2. Import and register it in `<concept>/registry.ts`.
//   3. Reference the id from the concept doc with `<LiveExample id="..." />`.
// Missing ids render a visible `[missing live example: <id>]` fallback in
// `LiveExample.tsx` so authoring gaps surface during `bun run dev`.

export const LIVE_EXAMPLES: Record<string, ComponentType> = {
  ...THEMING_EXAMPLES,
  ...MOTION_EXAMPLES,
  ...PROSE_EXAMPLES,
  ...LAYOUT_EXAMPLES,
  ...FORMS_EXAMPLES,
  ...DATA_EXAMPLES,
  ...MODALS_EXAMPLES,
};
