import { useState, useCallback } from 'react';
import { ThemeProvider, Icon, ThemePicker } from '@4lt7ab/ui';
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
        <ThemePicker variant="compact" />
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
