/** A background animation function that takes a canvas element and returns a cleanup function. */
export type BackgroundFunction = (canvas: HTMLCanvasElement) => () => void;

export * from './ThemeBackground';
export * from './backgrounds';
