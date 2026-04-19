import { forwardRef } from 'react';
import { useTheme, useInjectStyles } from '@4lt7ab/core';
import { Select } from '../../organisms/Select';

export interface ThemePickerProps {
  /** Optional descriptions for each theme, keyed by theme name. */
  descriptions?: Record<string, string>;
  /** Display variant. `'grid'` (default) renders a card grid; `'compact'` renders a dropdown for toolbars/headers. */
  variant?: 'grid' | 'compact';
}

// Grid variant — CSS card grid injected once per mount.
const GRID_STYLES_ID = 'alttab-theme-picker';
const gridCSS = /* css */ `
  .alttab-theme-picker {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 1.5rem;
  }

  .alttab-theme-card {
    background: var(--color-surface);
    border: var(--border-width-thick) solid var(--color-border);
    border-radius: 8px;
    padding: 1.5rem;
    text-align: left;
    cursor: pointer;
    transition: border-color var(--transition-base), transform var(--transition-base);
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

// Compact variant — small color-dot affordance shared by trigger + items.
const DOT: React.CSSProperties = {
  display: 'inline-block',
  width: 8,
  height: 8,
  borderRadius: '50%',
  background: 'var(--color-action-primary)',
  flexShrink: 0,
  marginRight: '0.5rem',
  verticalAlign: 'middle',
};

function GridView({ descriptions }: { descriptions: Record<string, string> }): React.JSX.Element {
  useInjectStyles(GRID_STYLES_ID, gridCSS);
  const { resolved, themes, setTheme } = useTheme();

  return (
    <div className="alttab-theme-picker">
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

// Compact view — thin composition over <Select.Root>.
function CompactView(): React.JSX.Element {
  const { resolved, themes, setTheme } = useTheme();
  return (
    <Select.Root value={resolved} onValueChange={setTheme}>
      <Select.Trigger aria-label="Select theme">
        <span aria-hidden style={DOT} />
        <Select.Value />
      </Select.Trigger>
      <Select.Content>
        {Array.from(themes.values()).map((def) => (
          <Select.Item key={def.name} value={def.name} textValue={def.label}>
            <span aria-hidden style={DOT} />
            {def.label}
          </Select.Item>
        ))}
      </Select.Content>
    </Select.Root>
  );
}

/**
 * Theme selector wired into useTheme(). Must be rendered inside a <ThemeProvider>.
 *
 * - `variant="grid"` (default) -- card grid for settings pages / theme playgrounds.
 * - `variant="compact"` -- dropdown button for toolbars and headers.
 */
export const ThemePicker: React.ForwardRefExoticComponent<Omit<ThemePickerProps, 'ref'> & React.RefAttributes<HTMLDivElement>> = forwardRef<HTMLDivElement, ThemePickerProps>(
  function ThemePicker({ descriptions = {}, variant = 'grid' }, ref): React.JSX.Element {
    if (variant === 'compact') {
      return <div ref={ref} style={{ display: 'inline-block' }}><CompactView /></div>;
    }
    return <div ref={ref}><GridView descriptions={descriptions} /></div>;
  }
);
