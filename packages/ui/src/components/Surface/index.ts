// Intentionally narrow — `getSurfaceStyle` / `SurfaceStyleOptions` are sibling
// helpers for Card and are NOT part of the public Surface API. Import them via
// the deep path (`../Surface/Surface`) from inside the package.
export { Surface } from './Surface';
export type { SurfaceLevel, SurfaceProps } from './Surface';
