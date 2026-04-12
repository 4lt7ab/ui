import { forwardRef } from 'react';
import { useTheme } from '../../themes/ThemeProvider';
import { useInjectStyles } from '../../utils/useInjectStyles';

export interface ThemePickerProps {
  /** Optional descriptions for each theme, keyed by theme name. */
  descriptions?: Record<string, string>;
}

const STYLES_ID = 'alttab-theme-picker';

const pickerCSS = /* css */ `
  .alttab-theme-picker {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 1.5rem;
  }

  .alttab-theme-card {
    background: var(--color-surface);
    border: 2px solid var(--color-border);
    border-radius: 8px;
    padding: 1.5rem;
    text-align: left;
    cursor: pointer;
    transition: border-color 0.15s ease, transform 0.15s ease;
    font-family: inherit;
    color: inherit;
  }

  .alttab-theme-card:hover {
    border-color: var(--color-text-link);
    transform: translateY(-2px);
  }

  .alttab-theme-card--active {
    border-color: var(--color-text-link);
  }

  .alttab-theme-card__name {
    display: block;
    font-family: var(--font-serif);
    font-size: 1.25rem;
    font-weight: 600;
    margin-bottom: 0.25rem;
  }

  .alttab-theme-card__desc {
    display: block;
    font-size: 0.875rem;
    color: var(--color-text-muted);
  }
`;

/**
 * Grid of theme cards wired into useTheme(). Clicking a card switches the active theme.
 * Must be rendered inside a <ThemeProvider>.
 */
export const ThemePicker: React.ForwardRefExoticComponent<Omit<ThemePickerProps, 'ref'> & React.RefAttributes<HTMLDivElement>> = forwardRef<HTMLDivElement, ThemePickerProps>(
  function ThemePicker({ descriptions = {} }, ref): React.JSX.Element {
    useInjectStyles(STYLES_ID, pickerCSS);

    const { resolved, themes, setTheme } = useTheme();

    return (
      <div ref={ref} className="alttab-theme-picker">
        {Array.from(themes.values()).map((def) => {
          const isActive = resolved === def.name;
          return (
            <button
              key={def.name}
              className={`alttab-theme-card${isActive ? ' alttab-theme-card--active' : ''}`}
              onClick={() => setTheme(def.name)}
            >
              <span className="alttab-theme-card__name">{def.label}</span>
              {descriptions[def.name] && (
                <span className="alttab-theme-card__desc">{descriptions[def.name]}</span>
              )}
            </button>
          );
        })}
      </div>
    );
  }
);
