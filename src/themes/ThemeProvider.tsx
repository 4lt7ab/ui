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
  pipboyTheme, neuralTheme, pacmanTheme,
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

export interface ThemeProviderProps {
  children: ReactNode;
  /** Additional themes beyond the built-ins. */
  themes?: ThemeDefinition[];
  /** Default theme when no stored preference exists. */
  defaultTheme?: Theme;
  /** localStorage key for persisting preference. */
  storageKey?: string;
}

export function ThemeProvider({
  children,
  themes: extraThemes,
  defaultTheme = 'synthwave',
  storageKey = 'ui-theme',
}: ThemeProviderProps): React.JSX.Element {
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

  // Apply tokens, injected CSS, and canvas background whenever resolved theme changes
  const styleElRef = useRef<HTMLStyleElement | null>(null);
  const bgContainerRef = useRef<HTMLDivElement | null>(null);
  const bgCleanupRef = useRef<(() => void) | null>(null);

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
      style.textContent = definition.css;
      document.head.appendChild(style);
      styleElRef.current = style;
    }

    // Canvas background — only on desktop, respects reduced motion
    if (bgCleanupRef.current) {
      bgCleanupRef.current();
      bgCleanupRef.current = null;
    }
    if (bgContainerRef.current) {
      bgContainerRef.current.remove();
      bgContainerRef.current = null;
    }

    if (
      definition.background &&
      window.innerWidth > 768 &&
      !window.matchMedia('(prefers-reduced-motion: reduce)').matches
    ) {
      const container = document.createElement('div');
      container.setAttribute('data-theme-bg', resolved);
      container.setAttribute('aria-hidden', 'true');
      container.style.cssText =
        'position:fixed;inset:0;z-index:0;pointer-events:none;overflow:hidden;';
      document.body.prepend(container);
      bgContainerRef.current = container;

      const canvas = document.createElement('canvas');
      canvas.style.cssText = 'width:100%;height:100%;';
      container.appendChild(canvas);

      bgCleanupRef.current = definition.background(canvas);
    }

    return () => {
      if (styleElRef.current) {
        styleElRef.current.remove();
        styleElRef.current = null;
      }
      if (bgCleanupRef.current) {
        bgCleanupRef.current();
        bgCleanupRef.current = null;
      }
      if (bgContainerRef.current) {
        bgContainerRef.current.remove();
        bgContainerRef.current = null;
      }
    };
  }, [resolved, registry]);

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
