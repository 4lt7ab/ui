/** A background animation function that takes a canvas element and returns a cleanup function. */
export type BackgroundFunction = (canvas: HTMLCanvasElement) => () => void;

/** Re-export the static background function type for consumers building custom static backgrounds. */
export type { StaticBackgroundFunction } from './backgrounds/static';

export * from './ThemeBackground';
export * from './backgrounds';
