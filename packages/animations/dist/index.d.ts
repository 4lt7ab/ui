/**
* Static CSS background definitions for themes without canvas animations.
* Each function returns a CSS string suitable for `element.style.cssText`.
* Uses `var(--...)` theme tokens so backgrounds adapt automatically.
*/
/** A static background function that returns CSS to apply to a full-screen div. */
type StaticBackgroundFunction = () => string;
/**
* Slate: subtle vertical gradient from the surface color through a slightly
* lighter blue-gray midpoint, creating depth without distraction.
*/
declare function slateStaticBackground(): string;
/**
* Warm Sand: warm diagonal gradient with a subtle earthy glow at the center,
* evoking sun-baked sandstone.
*/
declare function warmSandStaticBackground(): string;
/**
* Moss: nature-inspired gradient with a soft green tint radiating from the
* bottom-left, like light filtering through a canopy.
*/
declare function mossStaticBackground(): string;
/**
* Coral: warm radial glow from the top-right corner, suggesting sunset light
* with a coral-toned accent.
*/
declare function coralStaticBackground(): string;
/** Registry of static backgrounds keyed by theme name. */
declare const staticBackgroundRegistry: Record<string, StaticBackgroundFunction>;
/** Props for the ThemeBackground component. */
interface ThemeBackgroundProps {
	/**
	* Optional fallback rendered for themes without a registered canvas or
	* static background. Receives the current resolved theme name.
	*/
	fallback?: React.ComponentType<{
		theme: string;
	}>;
}
/**
* Side-effect-only component that renders a full-screen background matching
* the active theme. For themes with a canvas animation, renders an animated
* canvas. For themes with a static background definition, renders a CSS div.
* Renders nothing to the React tree (except when a fallback portal is active).
*
* Guards:
* - Only runs on viewports wider than 768px (desktop).
* - Respects `prefers-reduced-motion: reduce`.
* - Falls back to nothing (or the `fallback` prop) for unknown themes.
*/
declare function ThemeBackground(_props: ThemeBackgroundProps): React.JSX.Element | null;
declare function synthwaveBackground(canvas: HTMLCanvasElement): () => void;
declare function pipboyBackground(canvas: HTMLCanvasElement): () => void;
declare function neuralBackground(canvas: HTMLCanvasElement): () => void;
declare function pacmanBackground(canvas: HTMLCanvasElement): () => void;
declare function blackHoleBackground(canvas: HTMLCanvasElement): () => void;
/** A background animation function that takes a canvas element and returns a cleanup function. */
type BackgroundFunction = (canvas: HTMLCanvasElement) => () => void;
export { warmSandStaticBackground, synthwaveBackground, staticBackgroundRegistry, slateStaticBackground, pipboyBackground, pacmanBackground, neuralBackground, mossStaticBackground, coralStaticBackground, blackHoleBackground, ThemeBackgroundProps, ThemeBackground, StaticBackgroundFunction, BackgroundFunction };
