import type { ComponentType } from 'react';
import { CommandPaletteShowcase } from './CommandPaletteShowcase';
import { ModalShellShowcase } from './ModalShellShowcase';
import { OverlayShowcase } from './OverlayShowcase';
import { ConfirmDialogShowcase } from './ConfirmDialogShowcase';
import { WizardDialogShowcase } from './WizardDialogShowcase';
import { ToastShowcase } from './ToastShowcase';
import { AlertBannerShowcase } from './AlertBannerShowcase';
import { ErrorBoundaryShowcase } from './ErrorBoundaryShowcase';

// ---------------------------------------------------------------------------
// Modals live-example registry (07-modals.md)
// ---------------------------------------------------------------------------
//
// Per-concept sub-registry — imported and merged into the root registry at
// `demo/examples/registry.ts`. Design doc §2.7 splits the registry per
// concept so widget tasks fan out in parallel without conflicting on a
// single shared file.
//
// Id convention (design doc §2.3): `modals-<kebab-widget-name>`.

export const MODALS_EXAMPLES: Record<string, ComponentType> = {
  'modals-commandpalette': CommandPaletteShowcase,
  'modals-modalshell': ModalShellShowcase,
  'modals-overlay': OverlayShowcase,
  'modals-confirm-dialog': ConfirmDialogShowcase,
  'modals-wizard-dialog': WizardDialogShowcase,
  'modals-toast': ToastShowcase,
  'modals-alert-banner': AlertBannerShowcase,
  'modals-error-boundary': ErrorBoundaryShowcase,
};
