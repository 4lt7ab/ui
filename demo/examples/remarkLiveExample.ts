// ---------------------------------------------------------------------------
// remarkLiveExample
// ---------------------------------------------------------------------------
//
// Concept docs embed `<LiveExample id="..." />` HTML blocks to anchor a live
// React widget inline. `react-markdown` ships without `rehype-raw`, so raw
// HTML is stripped before reaching the component map. This plugin walks the
// mdast before `remark-rehype` runs and rewrites each matching `html` node
// into a synthetic `liveExample` node whose `data.hName` / `data.hProperties`
// steer `mdast-util-to-hast` into emitting a real `<liveexample id="..." />`
// hast element — which the concept-doc renderer then resolves via the
// `{ liveexample: LiveExample }` entry in `<Markdown>`'s `components` prop.
//
// The traversal is written inline rather than using `unist-util-visit` so
// the demo has no direct dep on a unified util that sits deep in the
// react-markdown transitive tree.
//
// The match is intentionally strict: one HTML block, one element, attributes
// in quoted form. Authoring errors (missing id, multi-line markup) pass
// through unchanged and render as escaped text, which makes the problem
// visible instead of silent.

const PATTERN = /^\s*<LiveExample\s+([^>]*?)\s*\/?\s*>\s*$/i;
const ATTR_PATTERN = /(\w+)\s*=\s*"([^"]*)"/g;

interface MdastNodeLike {
  type: string;
  value?: string;
  children?: MdastNodeLike[];
  data?: Record<string, unknown>;
}

function walk(node: MdastNodeLike, visitor: (n: MdastNodeLike) => void): void {
  visitor(node);
  if (Array.isArray(node.children)) {
    for (const child of node.children) walk(child, visitor);
  }
}

export function remarkLiveExample() {
  return (tree: unknown): void => {
    walk(tree as MdastNodeLike, (node) => {
      if (node.type !== 'html' || typeof node.value !== 'string') return;
      const match = node.value.match(PATTERN);
      if (!match) return;

      const attrs: Record<string, string> = {};
      ATTR_PATTERN.lastIndex = 0;
      let am: RegExpExecArray | null;
      while ((am = ATTR_PATTERN.exec(match[1]!)) !== null) {
        attrs[am[1]!] = am[2]!;
      }

      // Overwrite the node in place — keeps position info, keeps it a leaf.
      // `hName` / `hProperties` are the standard `mdast-util-to-hast` hooks
      // for emitting custom hast elements without parsing raw HTML.
      node.type = 'liveExample';
      node.data = {
        hName: 'liveexample',
        hProperties: attrs,
      };
    });
  };
}
