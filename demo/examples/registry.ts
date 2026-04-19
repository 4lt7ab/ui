import type { ComponentType } from 'react';
import { THEMING_EXAMPLES } from './theming/registry';
import { MOTION_EXAMPLES } from './motion/registry';
import { CalendarShowcase } from './forms/CalendarShowcase';
import { DateRangePickerShowcase } from './forms/DateRangePickerShowcase';
import { ComboboxShowcase } from './forms/ComboboxShowcase';
import { DataTablePageShowcase } from './data/DataTablePageShowcase';
import { CommandPaletteShowcase } from './modals/CommandPaletteShowcase';
import { ModalShellShowcase } from './modals/ModalShellShowcase';
import { LAYOUT_EXAMPLES } from './layout/registry';

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
// `<concept>/registry.ts` so the six downstream widget tasks can run in
// parallel without contending on a single flat file. Adding a new concept
// here is additive: one import + one spread.
//
// Id convention (per design doc §2.3): `<concept-slug>-<kebab-widget-name>`.
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
  'forms-combobox': ComboboxShowcase,
  'forms-calendar': CalendarShowcase,
  'forms-daterangepicker': DateRangePickerShowcase,
  'data-datatablepage': DataTablePageShowcase,
  'modals-commandpalette': CommandPaletteShowcase,
  'modals-modalshell': ModalShellShowcase,
  ...LAYOUT_EXAMPLES,
};
