import { useState, useCallback } from 'react';
import { ThemeProvider, useTheme, Icon } from '@4lt7ab/ui';
import type { IconName } from '@4lt7ab/ui';
import { ThemeBackground } from '@4lt7ab/animations';
import { Landing } from './views/Landing';
import { ComponentExplorer } from './views/ComponentExplorer';
import { PatternRecipes } from './views/PatternRecipes';
import { ThemePlayground } from './views/ThemePlayground';

// ---------------------------------------------------------------------------
// View routing
// ---------------------------------------------------------------------------

type ViewId = 'home' | 'components' | 'patterns' | 'themes';

interface NavItem {
  id: ViewId;
  label: string;
  icon: IconName;
}

const NAV_ITEMS: NavItem[] = [
  { id: 'home', label: 'Home', icon: 'arrow-right' },
  { id: 'components', label: 'Components', icon: 'search' },
  { id: 'patterns', label: 'Patterns', icon: 'menu' },
  { id: 'themes', label: 'Themes', icon: 'eye' },
];

// ---------------------------------------------------------------------------
// Theme dropdown (compact)
// ---------------------------------------------------------------------------

function ThemeDropdown(): React.JSX.Element {
  const { resolved, themes, setTheme } = useTheme();
  const [open, setOpen] = useState(false);
  const themeList = Array.from(themes.values());

  return (
    <div style={{ position: 'relative' }}>
      <button
        onClick={() => setOpen((o) => !o)}
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '0.375rem',
          padding: '0.375rem 0.625rem',
          fontSize: '0.75rem',
          fontFamily: 'var(--font-mono)',
          color: 'var(--color-text-secondary)',
          background: 'var(--color-surface-raised)',
          border: '1px solid var(--color-border)',
          borderRadius: 'var(--radius-md)',
          cursor: 'pointer',
        }}
      >
        <span style={{
          width: 8,
          height: 8,
          borderRadius: '50%',
          background: 'var(--color-action-primary)',
          flexShrink: 0,
        }} />
        {themeList.find((t) => t.name === resolved)?.label ?? resolved}
        <Icon name={open ? 'chevron-up' : 'chevron-down'} size={12} />
      </button>

      {open && (
        <>
          <div
            onClick={() => setOpen(false)}
            style={{ position: 'fixed', inset: 0, zIndex: 99 }}
          />
          <div style={{
            position: 'absolute',
            top: '100%',
            right: 0,
            marginTop: '0.25rem',
            background: 'var(--color-surface-panel)',
            border: '1px solid var(--color-border)',
            borderRadius: 'var(--radius-md)',
            padding: '0.25rem',
            minWidth: '10rem',
            zIndex: 100,
            boxShadow: 'var(--shadow-md)',
          }}>
            {themeList.map((t) => (
              <button
                key={t.name}
                onClick={() => { setTheme(t.name); setOpen(false); }}
                style={{
                  display: 'block',
                  width: '100%',
                  textAlign: 'left',
                  padding: '0.375rem 0.5rem',
                  fontSize: '0.8rem',
                  fontFamily: 'var(--font-sans)',
                  fontWeight: resolved === t.name ? 600 : 400,
                  color: resolved === t.name ? 'var(--color-text)' : 'var(--color-text-secondary)',
                  background: resolved === t.name ? 'var(--color-surface-raised)' : 'transparent',
                  border: 'none',
                  borderRadius: 'var(--radius-sm)',
                  cursor: 'pointer',
                }}
              >
                {t.label}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

// ---------------------------------------------------------------------------
// Shell
// ---------------------------------------------------------------------------

function Shell(): React.JSX.Element {
  const [activeView, setActiveView] = useState<ViewId>('home');
  const [componentTarget, setComponentTarget] = useState<string | undefined>(undefined);

  const navigateTo = useCallback((view: string): void => {
    if (view === 'components' || view === 'patterns' || view === 'themes' || view === 'home') {
      setActiveView(view as ViewId);
      setComponentTarget(undefined);
    }
  }, []);

  const navigateToComponent = useCallback((name: string): void => {
    setActiveView('components');
    setComponentTarget(name);
    window.location.hash = `#/components/${name}`;
  }, []);

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      height: '100vh',
      background: 'var(--color-surface)',
      fontFamily: 'var(--font-sans)',
      color: 'var(--color-text)',
      position: 'relative',
      zIndex: 1,
    }}>
      {/* Top nav bar */}
      <header style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0.5rem 1rem',
        borderBottom: '1px solid var(--color-border)',
        background: 'var(--color-surface-panel)',
        flexShrink: 0,
        zIndex: 10,
      }}>
        {/* Left: brand + nav */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem' }}>
          <button
            onClick={() => setActiveView('home')}
            style={{
              all: 'unset',
              cursor: 'pointer',
              fontSize: '0.8rem',
              fontWeight: 700,
              fontFamily: 'var(--font-mono)',
              letterSpacing: '-0.025em',
              color: 'var(--color-text)',
            }}
          >
            @4lt7ab/ui
          </button>

          <nav style={{ display: 'flex', gap: '0.125rem' }}>
            {NAV_ITEMS.filter((n) => n.id !== 'home').map((item) => {
              const isActive = activeView === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => navigateTo(item.id)}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.375rem',
                    padding: '0.375rem 0.75rem',
                    fontSize: '0.8rem',
                    fontFamily: 'var(--font-sans)',
                    fontWeight: isActive ? 600 : 400,
                    color: isActive ? 'var(--color-text)' : 'var(--color-text-muted)',
                    background: isActive ? 'var(--color-surface-raised)' : 'transparent',
                    border: 'none',
                    borderRadius: 'var(--radius-md)',
                    cursor: 'pointer',
                    transition: 'background 100ms ease, color 100ms ease',
                  }}
                >
                  <Icon name={item.icon} size={14} />
                  {item.label}
                </button>
              );
            })}
          </nav>
        </div>

        {/* Right: theme picker */}
        <ThemeDropdown />
      </header>

      {/* Main content — fills remaining height */}
      <main style={{
        flex: 1,
        overflow: 'auto',
        minHeight: 0,
      }}>
        {activeView === 'home' && (
          <Landing onNavigate={navigateTo} />
        )}
        {activeView === 'components' && (
          <ComponentExplorer initialComponent={componentTarget} />
        )}
        {activeView === 'patterns' && (
          <PatternRecipes onNavigateComponent={navigateToComponent} />
        )}
        {activeView === 'themes' && (
          <ThemePlayground />
        )}
      </main>
    </div>
  );
}

// ---------------------------------------------------------------------------
// App
// ---------------------------------------------------------------------------

export function App(): React.JSX.Element {
  return (
    <ThemeProvider>
      <ThemeBackground />
      <Shell />
    </ThemeProvider>
  );
}
