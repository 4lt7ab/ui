import type { ComponentType } from 'react';
import { CalendarShowcase } from './CalendarShowcase';
import { ChipPickerShowcase } from './ChipPickerShowcase';
import { ComboboxShowcase } from './ComboboxShowcase';
import { DateRangePickerShowcase } from './DateRangePickerShowcase';
import { FormLayoutShowcase } from './FormLayoutShowcase';
import { InputFieldShowcase } from './InputFieldShowcase';
import { SearchInputShowcase } from './SearchInputShowcase';
import { SegmentedControlShowcase } from './SegmentedControlShowcase';
import { SelectShowcase } from './SelectShowcase';

// ---------------------------------------------------------------------------
// Forms concept — live-example sub-registry
// ---------------------------------------------------------------------------
//
// Per design doc §2.7, each concept owns its own `registry.ts` that maps
// `<concept-slug>-<kebab-widget-name>` ids to widget components. The root
// `demo/examples/registry.ts` shallow-merges each sub-registry into one
// lookup table — the split is there so the six parallel widget tasks in
// `demo-samples-v1` can run without serializing on a shared file.
//
// Ids are concept-prefixed (`forms-...`) per §2.3 so cross-concept
// collisions are structurally impossible. Intra-concept collisions
// surface as a duplicate-key diagnostic on the literal below.

export const FORMS_EXAMPLES: Record<string, ComponentType> = {
  'forms-calendar': CalendarShowcase,
  'forms-chip-picker': ChipPickerShowcase,
  'forms-combobox': ComboboxShowcase,
  'forms-daterangepicker': DateRangePickerShowcase,
  'forms-form-layout': FormLayoutShowcase,
  'forms-input-field': InputFieldShowcase,
  'forms-search-input': SearchInputShowcase,
  'forms-segmented-control': SegmentedControlShowcase,
  'forms-select': SelectShowcase,
};
