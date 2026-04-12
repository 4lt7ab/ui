/** Props for the ThemeBackground component. Currently empty — reserved for future options. */
interface ThemeBackgroundProps {}
/**
* Side-effect-only component that renders a full-screen canvas background
* animation matching the active theme. Renders nothing to the React tree.
*
* Guards:
* - Only runs on viewports wider than 768px (desktop).
* - Respects `prefers-reduced-motion: reduce`.
* - Only activates for themes that have a registered background animation.
*/
declare function ThemeBackground(_props: ThemeBackgroundProps): React.JSX.Element | null;
declare function synthwaveBackground(canvas: HTMLCanvasElement): () => void;
declare function pipboyBackground(canvas: HTMLCanvasElement): () => void;
declare function neuralBackground(canvas: HTMLCanvasElement): () => void;
declare function pacmanBackground(canvas: HTMLCanvasElement): () => void;
/** A background animation function that takes a canvas element and returns a cleanup function. */
type BackgroundFunction = (canvas: HTMLCanvasElement) => () => void;
export { synthwaveBackground, pipboyBackground, pacmanBackground, neuralBackground, ThemeBackgroundProps, ThemeBackground, BackgroundFunction };
