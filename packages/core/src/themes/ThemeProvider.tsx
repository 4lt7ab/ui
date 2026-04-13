import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
  type ReactNode,
} from 'react';
import type { ThemeDefinition, ThemeTokens } from './types';
import { tokenToCssProperty } from './types';
import {
  synthwaveTheme,
  slateTheme, warmSandTheme, mossTheme, coralTheme,
  pipboyTheme, neuralTheme, pacmanTheme, blackHoleTheme,
} from './definitions';

/** A theme name. */
export type Theme = string;

/** The resolved theme name that's actually applied. */
export type ResolvedTheme = string;

export interface ThemeContextValue {
  /** The active theme name. */
  theme: Theme;
  /** The actual resolved theme name applied to the DOM. */
  resolved: ResolvedTheme;
  /** All registered theme definitions, keyed by name. */
  themes: ReadonlyMap<string, ThemeDefinition>;
  /** Update the active theme. Persists to localStorage. */
  setTheme: (theme: Theme) => void;
}

const ThemeContext = createContext<ThemeContextValue | null>(null);

/** Applies every token from a theme definition as CSS custom properties. */
function applyTokens(
  element: HTMLElement,
  tokens: ThemeTokens,
): void {
  const keys = Object.keys(tokens) as (keyof ThemeTokens)[];
  for (const key of keys) {
    element.style.setProperty(tokenToCssProperty(key), tokens[key]);
  }
}

/** Strips body background-color rules from theme CSS so tokens-only mode doesn't force backgrounds. */
function stripBodyBackground(css: string): string {
  return css.replace(
    /[^{}]*\bbody\b[^{}]*\{[^}]*background-color:[^}]*\}/gi,
    (match) => match.replace(/background-color:[^;]+;?/gi, ''),
  );
}

let _applyPageStylesWarned = false;

/** Provides theme context to all descendant components. Applies CSS custom properties to the document root and persists the user's theme preference to localStorage. */
export interface ThemeProviderProps {
  /** Application content. All children can access the active theme via `useTheme()`. */
  children: ReactNode;
  /** Additional theme definitions beyond the built-in set. */
  themes?: ThemeDefinition[];
  /** Theme to use when no stored preference exists in localStorage.
   * @default 'warm-sand'
   */
  defaultTheme?: Theme;
  /** localStorage key for persisting the user's theme preference.
   * @default 'ui-theme'
   */
  storageKey?: string;
  /**
   * When true, applies body background-color from theme CSS.
   * When false, only token CSS variables are applied.
   * Defaults to true for backward compatibility.
   *
   * @default true
   */
  applyPageStyles?: boolean;
}

export function ThemeProvider({
  children,
  themes: extraThemes,
  defaultTheme = 'warm-sand',
  storageKey = 'ui-theme',
  applyPageStyles,
}: ThemeProviderProps): React.JSX.Element {
  // One-time deprecation warning when applyPageStyles is not explicitly set
  if (applyPageStyles === undefined && !_applyPageStylesWarned) {
    _applyPageStylesWarned = true;
    console.warn(
      'ThemeProvider: applyPageStyles will default to false in v2. ' +
      'Set it explicitly or use <ThemeSurface> for page backgrounds.',
    );
  }

  const shouldApplyPageStyles = applyPageStyles ?? true;
  // Build the theme registry: built-ins + extras
  const registry = useMemo(() => {
    const map = new Map<string, ThemeDefinition>();
    map.set(synthwaveTheme.name, synthwaveTheme);
    map.set(slateTheme.name, slateTheme);
    map.set(warmSandTheme.name, warmSandTheme);
    map.set(mossTheme.name, mossTheme);
    map.set(coralTheme.name, coralTheme);
    map.set(pipboyTheme.name, pipboyTheme);
    map.set(neuralTheme.name, neuralTheme);
    map.set(pacmanTheme.name, pacmanTheme);
    map.set(blackHoleTheme.name, blackHoleTheme);
    if (extraThemes) {
      for (const t of extraThemes) {
        map.set(t.name, t);
      }
    }
    return map;
  }, [extraThemes]);

  const [theme, setThemeState] = useState<Theme>(() => {
    if (typeof window === 'undefined') return defaultTheme;
    return localStorage.getItem(storageKey) ?? defaultTheme;
  });

  const resolved: ResolvedTheme = theme;

  const setTheme = useCallback(
    (next: Theme) => {
      setThemeState(next);
      localStorage.setItem(storageKey, next);
    },
    [storageKey],
  );

  // Inject global :focus-visible styles once (uses var() so adapts to any theme)
  const focusStyleRef = useRef<HTMLStyleElement | null>(null);
  useEffect(() => {
    if (focusStyleRef.current) return;
    const style = document.createElement('style');
    style.setAttribute('data-ui-focus', '');
    style.textContent = [
      'button:focus-visible,',
      '[role="button"]:focus-visible,',
      'input:focus-visible,',
      'select:focus-visible,',
      'textarea:focus-visible,',
      'a[href]:focus-visible,',
      '[tabindex]:not([tabindex="-1"]):focus-visible {',
      '  outline: var(--focus-ring-width) solid var(--focus-ring-color);',
      '  outline-offset: var(--focus-ring-offset);',
      '}',
    ].join('\n');
    document.head.appendChild(style);
    focusStyleRef.current = style;
    return () => {
      if (focusStyleRef.current) {
        focusStyleRef.current.remove();
        focusStyleRef.current = null;
      }
    };
  }, []);

  // Apply tokens and injected CSS whenever resolved theme changes
  const styleElRef = useRef<HTMLStyleElement | null>(null);

  useEffect(() => {
    const definition = registry.get(resolved);
    if (!definition) {
      console.warn(
        `[@4lt7ab/ui] Theme "${resolved}" not found in registry. ` +
        `Available: ${Array.from(registry.keys()).join(', ')}`,
      );
      return;
    }

    applyTokens(document.documentElement, definition.tokens);
    document.documentElement.setAttribute('data-theme', resolved);

    // Inject theme CSS (keyframes, animations, pseudo-elements, etc.)
    if (styleElRef.current) {
      styleElRef.current.remove();
      styleElRef.current = null;
    }
    if (definition.css) {
      const style = document.createElement('style');
      style.setAttribute('data-theme-css', resolved);
      style.textContent = shouldApplyPageStyles
        ? definition.css
        : stripBodyBackground(definition.css);
      document.head.appendChild(style);
      styleElRef.current = style;
    }

    return () => {
      if (styleElRef.current) {
        styleElRef.current.remove();
        styleElRef.current = null;
      }
    };
  }, [resolved, registry, shouldApplyPageStyles]);

  const value = useMemo<ThemeContextValue>(
    () => ({ theme, resolved, themes: registry, setTheme }),
    [theme, resolved, registry, setTheme],
  );

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme(): ThemeContextValue {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error('useTheme must be used within <ThemeProvider>');
  return ctx;
}
