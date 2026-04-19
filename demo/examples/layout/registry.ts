import type { ComponentType } from 'react';
import { AppShellMiniShowcase } from './AppShellMiniShowcase';
import { TopBarShowcase } from './TopBarShowcase';
import { HeaderShowcase } from './HeaderShowcase';
import { TabStripShowcase } from './TabStripShowcase';

// ---------------------------------------------------------------------------
// Layout live-example registry (demo-samples-v1 / §2.7)
// ---------------------------------------------------------------------------
//
// One entry per interactive layout component that earns a `<LiveExample>`
// under §2.4's interactivity rule. `Container`, `Stack`, `Grid`, `Divider`,
// `Surface`, and `Card` are presentational and stay as code fences in
// 04-layout.md — they do not appear here.
//
// Ids follow the `<concept-slug>-<kebab-widget-name>` convention locked by
// §2.3. The root registry at `demo/examples/registry.ts` merges this map
// into `LIVE_EXAMPLES`.

export const LAYOUT_EXAMPLES: Record<string, ComponentType> = {
  'layout-appshell-mini': AppShellMiniShowcase,
  'layout-topbar': TopBarShowcase,
  'layout-header': HeaderShowcase,
  'layout-tabstrip': TabStripShowcase,
};
