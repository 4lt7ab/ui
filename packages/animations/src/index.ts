/** A background animation function that takes a canvas element and returns a cleanup function. */
export type BackgroundFunction = (canvas: HTMLCanvasElement) => () => void;

export { ThemeBackground } from './ThemeBackground';
export type { ThemeBackgroundProps } from './ThemeBackground';

export {
  synthwaveBackground,
  pipboyBackground,
  neuralBackground,
  pacmanBackground,
} from './backgrounds';
