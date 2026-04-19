import type { ComponentType } from 'react';
import { ThemePlaygroundLive } from './theming/ThemePlaygroundLive';
import { CalendarShowcase } from './forms/CalendarShowcase';
import { DateRangePickerShowcase } from './forms/DateRangePickerShowcase';
import { ComboboxShowcase } from './forms/ComboboxShowcase';
import { DataTablePageShowcase } from './data/DataTablePageShowcase';
import { CommandPaletteShowcase } from './modals/CommandPaletteShowcase';
import { ModalShellShowcase } from './modals/ModalShellShowcase';

// ---------------------------------------------------------------------------
// Live-example registry
// ---------------------------------------------------------------------------
//
// Single source of truth for which `<LiveExample id="..." />` ids exist in
// the concept-doc markdown. Concept docs write an HTML block with `id`; the
// `<LiveExample>` renderer (see `./LiveExample.tsx`) looks the id up here
// and renders the matching widget inside a bordered Card frame.
//
// Id convention (per design doc §2.3): `<concept-slug>-<kebab-widget-name>`.
// Keeping the slug prefix out of the widget filename means a single widget
// can appear in more than one concept if the id points at the same
// component — but the common case is one id per widget.
//
// Adding a new live example:
//   1. Build the widget under `demo/examples/<concept>/<Widget>.tsx`.
//   2. Import and register it below keyed on its id.
//   3. Reference the id from the concept doc with `<LiveExample id="..." />`.
// Missing ids render a visible fallback in `LiveExample.tsx` so authoring
// gaps surface during `bun run dev` rather than silently rendering empty.

export const LIVE_EXAMPLES: Record<string, ComponentType> = {
  'theming-theme-playground': ThemePlaygroundLive,
  'forms-combobox': ComboboxShowcase,
  'forms-calendar': CalendarShowcase,
  'forms-daterangepicker': DateRangePickerShowcase,
  'data-datatablepage': DataTablePageShowcase,
  'modals-commandpalette': CommandPaletteShowcase,
  'modals-modalshell': ModalShellShowcase,
};
