import type { ComponentType } from 'react';
import { MarkdownEditorLive } from './MarkdownEditorLive';
import { ThinkingCycleShowcase } from './ThinkingCycleShowcase';

// ---------------------------------------------------------------------------
// Prose live-example sub-registry
// ---------------------------------------------------------------------------
//
// Per-concept slice of the root `LIVE_EXAMPLES` map (see
// `demo/examples/registry.ts`). Keeping widget ids grouped by concept lets
// multiple concept-docs tasks edit their own registry file in parallel
// without colliding on a single shared file (per design doc §2.7).
//
// Id convention: `<concept-slug>-<kebab-widget-name>`. Prose slugs prefix
// with `prose-`; a missing or unknown id renders a visible fallback in
// `LiveExample.tsx` so authoring gaps surface during `bun run dev` rather
// than silently.

export const PROSE_EXAMPLES: Record<string, ComponentType> = {
  'prose-markdown-editor': MarkdownEditorLive,
  'prose-thinking-cycle': ThinkingCycleShowcase,
};
