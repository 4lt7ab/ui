/**
 * Build script for @4lt7ab/ui JS bundles (ESM + CJS).
 *
 * Replaces `bun build` which has multiple bugs when react is externalized:
 *   - Always emits jsxDEV / react/jsx-dev-runtime regardless of NODE_ENV
 *   - Name-mangles forwardRef exports (ModalShell3 as ModalShell)
 *   - Minifier drops variable bindings
 *
 * bunup still runs first (in the package.json build script) to generate .d.ts
 * files, then this script overwrites the JS bundles with esbuild output.
 *
 * Usage: bun run scripts/build-ui.ts
 */

import { build } from 'esbuild';
import { readFileSync, writeFileSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

// Resolve all paths relative to the repo root (one level up from scripts/)
const __dirname = dirname(fileURLToPath(import.meta.url));
const root = resolve(__dirname, '..');

const entryPoint = resolve(root, 'packages/ui/src/index.ts');
const esmOut = resolve(root, 'packages/ui/dist/index.js');
const cjsOut = resolve(root, 'packages/ui/dist/index.cjs');

const shared = {
  entryPoints: [entryPoint],
  bundle: true,
  splitting: false,
  external: ['@4lt7ab/core', 'react', 'react-dom'],
  jsx: 'automatic' as const,
  minify: false,
  treeShaking: true,
  logLevel: 'warning' as const,
  logOverride: {
    'conditions-without-types': 'silent',
  },
};

// ESM
await build({
  ...shared,
  format: 'esm',
  outfile: esmOut,
});

// CJS
await build({
  ...shared,
  format: 'cjs',
  outfile: cjsOut,
});

// Rewrite @4lt7ab/core imports to relative paths so all packages
// share a single context instance without requiring a separate install.
function rewriteCorePaths(file: string, from: string, to: string): void {
  const content = readFileSync(file, 'utf-8');
  const updated = content.replaceAll(from, to);
  if (updated !== content) {
    writeFileSync(file, updated);
  }
}

rewriteCorePaths(esmOut, '"@4lt7ab/core"', '"../../core/dist/index.js"');
rewriteCorePaths(cjsOut, '"@4lt7ab/core"', '"../../core/dist/index.cjs"');
