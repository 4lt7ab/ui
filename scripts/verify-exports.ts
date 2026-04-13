/**
 * Post-build verification: ensures every named export in a package's
 * source barrel actually has a corresponding definition in the compiled
 * dist bundle (not just a name in the export list).
 *
 * Usage: bun run verify-exports.ts
 */

import { readFileSync } from 'fs';
import { join } from 'path';

interface PackageCheck {
  name: string;
  src: string;
  dist: string;
}

const packages: PackageCheck[] = [
  { name: '@4lt7ab/core', src: 'packages/core/src/index.ts', dist: 'packages/core/dist/index.js' },
  { name: '@4lt7ab/ui', src: 'packages/ui/src/index.ts', dist: 'packages/ui/dist/index.js' },
  { name: '@4lt7ab/content', src: 'packages/content/src/index.ts', dist: 'packages/content/dist/index.js' },
  { name: '@4lt7ab/animations', src: 'packages/animations/src/index.ts', dist: 'packages/animations/dist/index.js' },
];

// Extract named exports from a source barrel file.
// Handles: export { Foo } from '...', export { Foo, Bar } from '...',
//          export { Foo as Bar } from '...'
// Skips: export type { ... } (type-only exports don't appear in JS)
function getSourceExports(srcPath: string): string[] {
  const content = readFileSync(srcPath, 'utf-8');
  const exports: string[] = [];

  for (const line of content.split('\n')) {
    // Skip type-only exports
    if (/export\s+type\s+\{/.test(line)) continue;

    // Match export { A, B, C } or export { A as B }
    const braceMatch = line.match(/export\s+\{([^}]+)\}/);
    if (braceMatch) {
      for (const item of braceMatch[1].split(',')) {
        const trimmed = item.trim();
        // "Foo as Bar" → Bar is the exported name
        const asMatch = trimmed.match(/\w+\s+as\s+(\w+)/);
        exports.push(asMatch ? asMatch[1] : trimmed);
      }
      continue;
    }

    // Match export * from '...' — need to resolve what it re-exports
    const starMatch = line.match(/export\s+\*\s+from\s+['"]([^'"]+)['"]/);
    if (starMatch) {
      const modulePath = starMatch[1];
      // Resolve relative paths to find the barrel
      const resolved = resolveBarrelExports(srcPath, modulePath);
      exports.push(...resolved);
    }
  }

  return exports;
}

// Resolve export * by reading the target barrel file
function resolveBarrelExports(fromFile: string, modulePath: string): string[] {
  const dir = join(fromFile, '..');
  // Try index.ts in the directory, or the file directly
  const candidates = [
    join(dir, modulePath, 'index.ts'),
    join(dir, `${modulePath}.ts`),
    join(dir, `${modulePath}.tsx`),
  ];

  for (const candidate of candidates) {
    try {
      const content = readFileSync(candidate, 'utf-8');
      const exports: string[] = [];

      for (const line of content.split('\n')) {
        if (/export\s+type\s+\{/.test(line)) continue;
        if (/export\s+type\s+\w/.test(line)) continue;

        // export { Foo } or export { Foo, Bar }
        const braceMatch = line.match(/export\s+\{([^}]+)\}/);
        if (braceMatch) {
          for (const item of braceMatch[1].split(',')) {
            const trimmed = item.trim();
            if (!trimmed) continue;
            const asMatch = trimmed.match(/\w+\s+as\s+(\w+)/);
            exports.push(asMatch ? asMatch[1] : trimmed);
          }
          continue;
        }

        // export const/function/class
        const declMatch = line.match(/export\s+(?:const|let|var|function|class)\s+(\w+)/);
        if (declMatch) {
          exports.push(declMatch[1]);
          continue;
        }

        // Nested export * — recurse one level
        const nestedStar = line.match(/export\s+\*\s+from\s+['"]([^'"]+)['"]/);
        if (nestedStar) {
          exports.push(...resolveBarrelExports(candidate, nestedStar[1]));
        }
      }

      return exports;
    } catch {
      continue;
    }
  }

  return [];
}

// Check that an export name has an actual definition in the dist bundle.
// Handles both unminified bundles (var Button =) and minified bundles
// where identifiers are mangled but export aliases preserve names
// (export { e as Button }).
function isDefinedInBundle(distContent: string, exportName: string): boolean {
  // Direct definitions: var X =, const X =, function X, class X
  const definitionPatterns = [
    new RegExp(`(?:var|const|let)\\s+${exportName}\\s*=`),
    new RegExp(`function\\s+${exportName}[\\s(]`),
    new RegExp(`class\\s+${exportName}[\\s{]`),
  ];

  if (definitionPatterns.some((p) => p.test(distContent))) return true;

  // Minified export alias: "as ExportName" or "as ExportName," or "as ExportName}"
  // in an export { ... } block. This proves the name survived compilation —
  // the bundler mapped a mangled internal name to the correct export name.
  const aliasPattern = new RegExp(`\\bas\\s+${exportName}\\b`);
  if (aliasPattern.test(distContent)) return true;

  return false;
}

// --- Run ---

let failed = false;

for (const pkg of packages) {
  const exports = getSourceExports(pkg.src);
  if (exports.length === 0) {
    console.log(`⚠ ${pkg.name}: no exports found in source barrel`);
    continue;
  }

  let distContent: string;
  try {
    distContent = readFileSync(pkg.dist, 'utf-8');
  } catch {
    console.log(`✗ ${pkg.name}: dist bundle not found at ${pkg.dist}`);
    failed = true;
    continue;
  }

  const missing: string[] = [];
  for (const exp of exports) {
    if (!isDefinedInBundle(distContent, exp)) {
      missing.push(exp);
    }
  }

  if (missing.length > 0) {
    console.log(`✗ ${pkg.name}: ${missing.length} export(s) missing from bundle:`);
    for (const m of missing) {
      console.log(`    - ${m}`);
    }
    failed = true;
  } else {
    console.log(`✓ ${pkg.name}: all ${exports.length} exports verified`);
  }
}

if (failed) {
  console.log('\nExport verification failed.');
  process.exit(1);
}

console.log('\nAll exports verified.');
