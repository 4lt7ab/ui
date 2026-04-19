import type { ComponentType } from 'react';
import { THEMING_EXAMPLES } from './theming/registry';
import { MOTION_EXAMPLES } from './motion/registry';
import { CalendarShowcase } from './forms/CalendarShowcase';
import { DateRangePickerShowcase } from './forms/DateRangePickerShowcase';
import { ComboboxShowcase } from './forms/ComboboxShowcase';
import { DataTablePageShowcase } from './data/DataTablePageShowcase';
import { CommandPaletteShowcase } from './modals/CommandPaletteShowcase';
import { ModalShellShowcase } from './modals/ModalShellShowcase';

// ---------------------------------------------------------------------------
// Live-example registry (root)
// ---------------------------------------------------------------------------
//
// Single source of truth for which `<LiveExample id="..." />` ids exist in
// the concept-doc markdown. Concept docs write an HTML block with `id`; the
// `<LiveExample>` renderer (see `./LiveExample.tsx`) looks the id up here
// and renders the matching widget inside a bordered Card frame.
//
// Per design doc §2.7, per-concept sub-registries live at
// `demo/examples/<concept>/registry.ts` and are merged here. Concepts that
// haven't migrated yet still register their entries inline below — each
// migration is a mechanical move that happens inside the first widget task
// that touches the concept.
//
// Id convention (per design doc §2.3): `<concept-slug>-<kebab-widget-name>`.
// A missing id renders a visible `[missing live example: <id>]` fallback
// from `LiveExample.tsx` so gaps surface during authoring.

export const LIVE_EXAMPLES: Record<string, ComponentType> = {
  ...THEMING_EXAMPLES,
  ...MOTION_EXAMPLES,
  'forms-combobox': ComboboxShowcase,
  'forms-calendar': CalendarShowcase,
  'forms-daterangepicker': DateRangePickerShowcase,
  'data-datatablepage': DataTablePageShowcase,
  'modals-commandpalette': CommandPaletteShowcase,
  'modals-modalshell': ModalShellShowcase,
};
