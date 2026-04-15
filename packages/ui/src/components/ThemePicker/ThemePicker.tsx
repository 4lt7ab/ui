import { forwardRef, useState, useEffect, useRef, useCallback } from 'react';
import { useTheme } from '@4lt7ab/core';
import { useInjectStyles } from '@4lt7ab/core';
import { Icon } from '../Icon';

export interface ThemePickerProps {
  /** Optional descriptions for each theme, keyed by theme name. */
  descriptions?: Record<string, string>;
  /** Display variant. `'grid'` (default) renders a card grid; `'compact'` renders a dropdown for toolbars/headers. */
  variant?: 'grid' | 'compact';
}

// ---------------------------------------------------------------------------
// Grid variant styles
// ---------------------------------------------------------------------------

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

// ---------------------------------------------------------------------------
// Compact variant styles
// ---------------------------------------------------------------------------

const COMPACT_STYLES_ID = 'alttab-theme-picker-compact';

const compactCSS = /* css */ `
  .alttab-tp-trigger {
    display: flex;
    align-items: center;
    gap: 0.375rem;
    padding: 0.375rem 0.625rem;
    font-size: 0.75rem;
    font-family: var(--font-mono);
    color: var(--color-text-secondary);
    background: var(--color-surface-raised);
    border: var(--border-width-default) solid var(--color-border);
    border-radius: var(--radius-md);
    cursor: pointer;
    transition: border-color var(--transition-base);
  }

  .alttab-tp-trigger:hover {
    border-color: var(--color-text-link);
  }

  .alttab-tp-menu-item {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    width: 100%;
    text-align: left;
    padding: 0.375rem 0.5rem;
    font-size: 0.8rem;
    font-family: var(--font-sans);
    font-weight: 400;
    color: var(--color-text-secondary);
    background: transparent;
    border: none;
    border-radius: var(--radius-sm);
    cursor: pointer;
    transition: background 0.1s ease, color 0.1s ease;
  }

  .alttab-tp-menu-item:hover,
  .alttab-tp-menu-item--focused {
    background: var(--color-surface-raised);
    color: var(--color-text);
  }

  .alttab-tp-menu-item--active {
    font-weight: 600;
    color: var(--color-text);
    background: var(--color-surface-raised);
  }
`;

// ---------------------------------------------------------------------------
// Grid view (internal)
// ---------------------------------------------------------------------------

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

// ---------------------------------------------------------------------------
// Compact view (internal)
// ---------------------------------------------------------------------------

function CompactView(): React.JSX.Element {
  useInjectStyles(COMPACT_STYLES_ID, compactCSS);
  const { resolved, themes, setTheme } = useTheme();
  const [open, setOpen] = useState(false);
  const [focusedIndex, setFocusedIndex] = useState(-1);
  const containerRef = useRef<HTMLDivElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const themeList = Array.from(themes.values());

  // Close on click outside
  useEffect(() => {
    if (!open) return;
    function handleMouseDown(e: MouseEvent): void {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener('mousedown', handleMouseDown);
    return () => document.removeEventListener('mousedown', handleMouseDown);
  }, [open]);

  // Close on Escape, keyboard nav
  const handleKeyDown = useCallback((e: React.KeyboardEvent): void => {
    if (e.key === 'Escape') {
      setOpen(false);
      triggerRef.current?.focus();
      return;
    }

    if (!open) {
      if (e.key === 'ArrowDown' || e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        setOpen(true);
        setFocusedIndex(0);
      }
      return;
    }

    switch (e.key) {
      case 'ArrowDown':
        e.preventDefault();
        setFocusedIndex((i) => (i + 1) % themeList.length);
        break;
      case 'ArrowUp':
        e.preventDefault();
        setFocusedIndex((i) => (i - 1 + themeList.length) % themeList.length);
        break;
      case 'Enter':
      case ' ':
        e.preventDefault();
        if (focusedIndex >= 0 && focusedIndex < themeList.length) {
          setTheme(themeList[focusedIndex].name);
          setOpen(false);
          triggerRef.current?.focus();
        }
        break;
      case 'Home':
        e.preventDefault();
        setFocusedIndex(0);
        break;
      case 'End':
        e.preventDefault();
        setFocusedIndex(themeList.length - 1);
        break;
    }
  }, [open, focusedIndex, themeList, setTheme]);

  // Scroll focused item into view
  useEffect(() => {
    if (!open || focusedIndex < 0) return;
    const menu = menuRef.current;
    if (!menu) return;
    const items = menu.querySelectorAll('[role="option"]');
    items[focusedIndex]?.scrollIntoView({ block: 'nearest' });
  }, [open, focusedIndex]);

  // Reset focus index when opening
  useEffect(() => {
    if (open) {
      const activeIdx = themeList.findIndex((t) => t.name === resolved);
      setFocusedIndex(activeIdx >= 0 ? activeIdx : 0);
    }
  }, [open]); // eslint-disable-line react-hooks/exhaustive-deps

  const currentTheme = themeList.find((t) => t.name === resolved);

  return (
    <div ref={containerRef} style={{ position: 'relative' }} onKeyDown={handleKeyDown}>
      <button
        ref={triggerRef}
        className="alttab-tp-trigger"
        onClick={() => setOpen((o) => !o)}
        aria-haspopup="listbox"
        aria-expanded={open}
      >
        <span style={{
          width: 8,
          height: 8,
          borderRadius: '50%',
          background: 'var(--color-action-primary)',
          flexShrink: 0,
        }} />
        {currentTheme?.label ?? resolved}
        <Icon name={open ? 'chevron-up' : 'chevron-down'} size={12} />
      </button>

      {open && (
        <div
          ref={menuRef}
          role="listbox"
          aria-activedescendant={focusedIndex >= 0 ? `alttab-tp-item-${themeList[focusedIndex]?.name}` : undefined}
          style={{
            position: 'absolute',
            top: '100%',
            left: 0,
            marginTop: '0.25rem',
            background: 'var(--color-surface-panel)',
            border: 'var(--border-width-default) solid var(--color-border)',
            borderRadius: 'var(--radius-md)',
            padding: '0.25rem',
            minWidth: '10rem',
            zIndex: 'var(--z-index-sticky)',
            boxShadow: 'var(--shadow-md)',
          }}
        >
          {themeList.map((t, idx) => {
            const isActive = resolved === t.name;
            const isFocused = focusedIndex === idx;
            const classes = [
              'alttab-tp-menu-item',
              isActive ? 'alttab-tp-menu-item--active' : '',
              isFocused && !isActive ? 'alttab-tp-menu-item--focused' : '',
            ].filter(Boolean).join(' ');

            return (
              <button
                key={t.name}
                id={`alttab-tp-item-${t.name}`}
                role="option"
                aria-selected={isActive}
                className={classes}
                onClick={() => { setTheme(t.name); setOpen(false); triggerRef.current?.focus(); }}
                onMouseEnter={() => setFocusedIndex(idx)}
              >
                <span style={{
                  width: 6,
                  height: 6,
                  borderRadius: '50%',
                  background: isActive ? 'var(--color-action-primary)' : 'var(--color-text-muted)',
                  flexShrink: 0,
                }} />
                {t.label}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}

// ---------------------------------------------------------------------------
// ThemePicker (public)
// ---------------------------------------------------------------------------

/**
 * Theme selector wired into useTheme(). Must be rendered inside a <ThemeProvider>.
 *
 * - `variant="grid"` (default) -- card grid for settings pages / theme playgrounds.
 * - `variant="compact"` -- dropdown button for toolbars and headers.
 */
export const ThemePicker: React.ForwardRefExoticComponent<Omit<ThemePickerProps, 'ref'> & React.RefAttributes<HTMLDivElement>> = forwardRef<HTMLDivElement, ThemePickerProps>(
  function ThemePicker({ descriptions = {}, variant = 'grid' }, ref): React.JSX.Element {
    if (variant === 'compact') {
      return (
        <div ref={ref} style={{ display: 'inline-block' }}>
          <CompactView />
        </div>
      );
    }

    return (
      <div ref={ref}>
        <GridView descriptions={descriptions} />
      </div>
    );
  }
);
