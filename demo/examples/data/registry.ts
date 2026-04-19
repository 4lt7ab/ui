import type { ComponentType } from 'react';
import { DataTablePageShowcase } from './DataTablePageShowcase';
import { TableShowcase } from './TableShowcase';
import { TableFilterBarShowcase } from './TableFilterBarShowcase';
import { PaginationShowcase } from './PaginationShowcase';
import { ProgressBarShowcase } from './ProgressBarShowcase';
import { EmptyStateShowcase } from './EmptyStateShowcase';

// ---------------------------------------------------------------------------
// Data concept — live-example sub-registry
// ---------------------------------------------------------------------------
//
// Per-concept registry files exist so the `demo-samples-v1` widget tasks can
// fan out without serializing on a single shared `demo/examples/registry.ts`
// (see design doc §2.7). The root registry at `demo/examples/registry.ts`
// shallow-merges this map with the other concept maps.
//
// Ids follow the §2.3 convention: `<concept-slug>-<kebab-widget-name>`.

export const DATA_EXAMPLES: Record<string, ComponentType> = {
  'data-datatablepage': DataTablePageShowcase,
  'data-table': TableShowcase,
  'data-table-filter-bar': TableFilterBarShowcase,
  'data-pagination': PaginationShowcase,
  'data-progress-bar': ProgressBarShowcase,
  'data-empty-state': EmptyStateShowcase,
};
