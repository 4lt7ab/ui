// ---------------------------------------------------------------------------
// Concept-doc registry
// ---------------------------------------------------------------------------
//
// Single source of truth for "which concept docs exist, in what order."
// Each .md file in this directory is eagerly glob-imported as a raw string;
// filename prefix drives ordering, and the first `# ` heading in the file
// supplies the display title.
//
// See Design: demo+docs architecture rebuild (demo-rebuild-v1) §2.2.

const modules = import.meta.glob('./*.md', {
  query: '?raw',
  import: 'default',
  eager: true,
}) as Record<string, string>;

export interface ConceptDoc {
  /** URL-safe slug with the filename prefix stripped (e.g. `theming`). */
  slug: string;
  /** Numeric sort order extracted from the filename prefix (e.g. `2`). */
  order: number;
  /** Display title pulled from the first `# ` heading in the file. */
  title: string;
  /** Raw markdown source — handed straight to the `<Markdown>` renderer. */
  content: string;
}

/**
 * Extract the first `# ` heading from a markdown source string. Returns a
 * fallback string when no heading is present so the sidebar still has
 * something to render.
 */
function extractTitle(source: string, fallback: string): string {
  const match = source.match(/^#\s+(.+?)\s*$/m);
  return match ? match[1]! : fallback;
}

/**
 * Parse a glob-import entry into a `ConceptDoc`. Filenames are expected to
 * look like `./NN-slug.md` — anything else falls back to order=9999 and the
 * raw filename as slug.
 */
function parseDoc(path: string, content: string): ConceptDoc {
  const base = path.replace(/^\.\//, '').replace(/\.md$/, '');
  const match = base.match(/^(\d+)-(.+)$/);
  const order = match ? Number(match[1]) : 9999;
  const slug = match ? match[2]! : base;
  const title = extractTitle(content, slug);
  return { slug, order, title, content };
}

export const CONCEPT_DOCS: ConceptDoc[] = Object.entries(modules)
  .map(([path, content]) => parseDoc(path, content))
  .sort((a, b) => a.order - b.order);

/** Look up a doc by slug. Returns `undefined` when no match. */
export function findConceptDoc(slug: string): ConceptDoc | undefined {
  return CONCEPT_DOCS.find((d) => d.slug === slug);
}
