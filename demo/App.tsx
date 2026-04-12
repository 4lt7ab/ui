import { useState } from 'react';
import { ThemeProvider, useTheme, Icon } from '../src';
import { CommandCenter } from './examples/CommandCenter';
import { OnboardingFlow } from './examples/OnboardingFlow';
import { BlogPost } from './examples/BlogPost';
import { ProjectHub } from './examples/ProjectHub';

// ---------------------------------------------------------------------------
// App registry
// ---------------------------------------------------------------------------

type AppId = 'command-center' | 'onboarding' | 'blog' | 'project-hub';

interface MockApp {
  id: AppId;
  label: string;
  description: string;
  icon: 'settings' | 'plus' | 'edit' | 'menu';
  component: () => React.JSX.Element;
}

const APPS: MockApp[] = [
  {
    id: 'command-center',
    label: 'Command Center',
    description: 'System monitor with tables, status indicators, and progress tracking',
    icon: 'settings',
    component: CommandCenter,
  },
  {
    id: 'onboarding',
    label: 'Onboarding',
    description: 'Multi-step workspace creation wizard with forms and validation',
    icon: 'plus',
    component: OnboardingFlow,
  },
  {
    id: 'blog',
    label: 'Blog Post',
    description: 'Long-form content with pull quotes, margin notes, and linked resources',
    icon: 'edit',
    component: BlogPost,
  },
  {
    id: 'project-hub',
    label: 'Project Hub',
    description: 'Project management with CRUD, loading states, and tag management',
    icon: 'menu',
    component: ProjectHub,
  },
];

// ---------------------------------------------------------------------------
// Theme selector (compact dropdown)
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
            style={{
              position: 'fixed',
              inset: 0,
              zIndex: 99,
            }}
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
  const [activeApp, setActiveApp] = useState<AppId>('command-center');

  const current = APPS.find((a) => a.id === activeApp) ?? APPS[0];
  const ActiveComponent = current.component;

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      minHeight: '100vh',
      background: 'var(--color-surface)',
      fontFamily: 'var(--font-sans)',
      color: 'var(--color-text)',
    }}>
      {/* Top nav bar */}
      <header style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0.625rem 1.25rem',
        borderBottom: '1px solid var(--color-border)',
        background: 'var(--color-surface-panel)',
        position: 'sticky',
        top: 0,
        zIndex: 10,
      }}>
        {/* Left: brand + nav */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
          <span style={{
            fontSize: '0.8rem',
            fontWeight: 700,
            fontFamily: 'var(--font-mono)',
            letterSpacing: '-0.025em',
            color: 'var(--color-text)',
          }}>
            @4lt7ab/ui
          </span>

          <nav style={{ display: 'flex', gap: '0.125rem' }}>
            {APPS.map((app) => {
              const isActive = activeApp === app.id;
              return (
                <button
                  key={app.id}
                  onClick={() => setActiveApp(app.id)}
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
                  {app.label}
                </button>
              );
            })}
          </nav>
        </div>

        {/* Right: theme picker */}
        <ThemeDropdown />
      </header>

      {/* Main content */}
      <main style={{
        flex: 1,
        padding: '1.5rem',
        maxWidth: '72rem',
        width: '100%',
        margin: '0 auto',
      }}>
        <ActiveComponent />
      </main>
    </div>
  );
}

export function App(): React.JSX.Element {
  return (
    <ThemeProvider>
      <Shell />
    </ThemeProvider>
  );
}
