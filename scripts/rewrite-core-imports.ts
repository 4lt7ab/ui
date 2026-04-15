/**
 * Rewrites @4lt7ab/core imports in dist bundles to relative paths.
 *
 * All packages that depend on @4lt7ab/core externalize it at build time,
 * producing dist files with `from "@4lt7ab/core"` or `require("@4lt7ab/core")`.
 * This script rewrites those to relative paths (`../../core/dist/index.js`
 * or `../../core/dist/index.cjs`) so all packages share a single context
 * instance without requiring a separate @4lt7ab/core install.
 *
 * Usage: bun run scripts/rewrite-core-imports.ts <package-dir>
 *   e.g. bun run scripts/rewrite-core-imports.ts packages/content
 *
 * Can also be run from within a package directory:
 *   bun run ../../scripts/rewrite-core-imports.ts .
 */

import { readdirSync, existsSync } from 'fs';
import { resolve, join } from 'path';

const pkgDir = resolve(process.argv[2] || '.');
const distDir = join(pkgDir, 'dist');

if (!existsSync(distDir)) {
  console.error(`Error: dist directory not found at ${distDir}`);
  process.exit(1);
}

// Verify the target core dist files exist.
// The import paths in dist files are relative to dist/ (e.g. ../../core/dist/index.js),
// but this script runs from the package root, so core is a sibling: ../core/dist/
const coreDistDir = resolve(pkgDir, '../core/dist');
const coreEsm = join(coreDistDir, 'index.js');
const coreCjs = join(coreDistDir, 'index.cjs');

if (!existsSync(coreEsm) || !existsSync(coreCjs)) {
  console.error(`Error: @4lt7ab/core dist not found at ${coreDistDir}`);
  console.error('Build @4lt7ab/core first.');
  process.exit(1);
}

// Match @4lt7ab/core in import/require/from statements.
// Handles: from "@4lt7ab/core", from '@4lt7ab/core', require("@4lt7ab/core"), require('@4lt7ab/core')
// Also handles spacing variants (from  "@4lt7ab/core") and re-exports.
const ESM_PATTERN = /(from\s*)["']@4lt7ab\/core["']/g;
const CJS_PATTERN = /(require\s*\(\s*)["']@4lt7ab\/core["'](\s*\))/g;

// For .d.ts files, only ESM-style imports matter
const DTS_PATTERN = /(from\s*)["']@4lt7ab\/core["']/g;

interface RewriteResult {
  file: string;
  count: number;
}

async function rewriteFile(filePath: string): Promise<RewriteResult> {
  const file = Bun.file(filePath);
  const content = await file.text();
  let updated = content;
  let count = 0;

  if (filePath.endsWith('.d.ts') || filePath.endsWith('.d.cts')) {
    // Type declarations always reference the ESM entry for type resolution
    updated = content.replace(DTS_PATTERN, (_match, pre) => {
      count++;
      return `${pre}"../../core/dist/index.js"`;
    });
  } else if (filePath.endsWith('.cjs')) {
    // CJS: rewrite require() calls
    updated = content.replace(CJS_PATTERN, (_match, pre, post) => {
      count++;
      return `${pre}"../../core/dist/index.cjs"${post}`;
    });
    // Also handle any ESM-style from statements in CJS (some bundlers emit these)
    updated = updated.replace(ESM_PATTERN, (_match, pre) => {
      count++;
      return `${pre}"../../core/dist/index.cjs"`;
    });
  } else if (filePath.endsWith('.js')) {
    // ESM: rewrite from statements
    updated = content.replace(ESM_PATTERN, (_match, pre) => {
      count++;
      return `${pre}"../../core/dist/index.js"`;
    });
    // Also handle any require() calls in ESM (dynamic requires)
    updated = updated.replace(CJS_PATTERN, (_match, pre, post) => {
      count++;
      return `${pre}"../../core/dist/index.js"${post}`;
    });
  }

  if (updated !== content) {
    await Bun.write(filePath, updated);
  }

  return { file: filePath, count };
}

// Collect all target files
const files = readdirSync(distDir)
  .filter((f) => f.endsWith('.js') || f.endsWith('.cjs') || f.endsWith('.d.ts') || f.endsWith('.d.cts'))
  .map((f) => join(distDir, f));

if (files.length === 0) {
  console.error(`Error: no .js, .cjs, .d.ts, or .d.cts files found in ${distDir}`);
  process.exit(1);
}

// Rewrite all files
const results = await Promise.all(files.map(rewriteFile));

const rewrittenFiles = results.filter((r) => r.count > 0);
const totalImports = rewrittenFiles.reduce((sum, r) => sum + r.count, 0);

if (totalImports > 0) {
  console.log(`Rewrote ${totalImports} import(s) in ${rewrittenFiles.length} file(s)`);
} else {
  console.log('No @4lt7ab/core imports found (already clean)');
}

// Verification: scan for any remaining @4lt7ab/core references
const remaining: string[] = [];

for (const filePath of files) {
  const content = await Bun.file(filePath).text();
  if (content.includes('@4lt7ab/core')) {
    remaining.push(filePath);
  }
}

if (remaining.length > 0) {
  console.error('\nError: unrewritten @4lt7ab/core references remain in:');
  for (const f of remaining) {
    console.error(`  ${f}`);
  }
  process.exit(1);
}
