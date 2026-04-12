import { useState, useMemo, useCallback } from 'react';
import { ThemeProvider, useTheme, Button, Stack, Input } from '../src';
import { demos } from './demos';
import { examples } from './examples';
import type { DemoEntry, DemoSource } from './demos';

const categories = ['Foundation', 'Layout', 'Action', 'Navigation', 'Feedback', 'Form', 'Examples'] as const;

const sourceLabels: Record<DemoSource, string> = {
  ui: '@4lt7ab/ui',
  content: '@4lt7ab/ui/content',
};

function ThemeToggle(): React.JSX.Element {
  const { theme, resolved, themes, setTheme } = useTheme();

  const themeNames = Array.from(themes.keys());

  return (
    <Stack gap="xs">
      <span style={{
        fontSize: '0.65rem',
        fontWeight: 600,
        textTransform: 'uppercase',
        letterSpacing: '0.05em',
        color: 'var(--color-text-muted)',
      }}>
        Theme
      </span>
      <Stack direction="horizontal" gap="xs" style={{ flexWrap: 'wrap' }}>
        {themeNames.map((name) => (
          <Button
            key={name}
            variant={theme === name ? 'primary' : 'ghost'}
            size="sm"
            onClick={() => setTheme(name)}
            style={{ fontSize: '0.75rem', padding: '0.25rem 0.5rem' }}
          >
            {themes.get(name)?.label ?? name}
          </Button>
        ))}
      </Stack>
      <span style={{ fontSize: '0.65rem', color: 'var(--color-text-muted)' }}>
        Active: {resolved}
      </span>
    </Stack>
  );
}

function Chevron({ open }: { open: boolean }): React.JSX.Element {
  return (
    <span style={{
      display: 'inline-block',
      transition: 'transform 150ms ease',
      transform: open ? 'rotate(90deg)' : 'rotate(0deg)',
      fontSize: '0.6rem',
      lineHeight: 1,
    }}>
      &#9656;
    </span>
  );
}

function CategoryGroup({
  category,
  items,
  selected,
  onSelect,
  defaultOpen,
}: {
  category: string;
  items: DemoEntry[];
  selected: string;
  onSelect: (name: string) => void;
  defaultOpen: boolean;
}): React.JSX.Element {
  const hasActive = items.some((d) => d.name === selected);
  const [open, setOpen] = useState(defaultOpen || hasActive);

  return (
    <Stack gap="xs">
      <button
        onClick={() => setOpen((o) => !o)}
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '0.35rem',
          fontSize: '0.65rem',
          fontWeight: 600,
          textTransform: 'uppercase',
          letterSpacing: '0.05em',
          color: 'var(--color-text-muted)',
          padding: '0 0.5rem',
          background: 'none',
          border: 'none',
          cursor: 'pointer',
          fontFamily: 'inherit',
          width: '100%',
          textAlign: 'left',
        }}
      >
        <Chevron open={open} />
        {category}
      </button>
      {open && items.map((demo) => {
        const isActive = demo.name === selected;
        return (
          <button
            key={demo.name}
            onClick={() => onSelect(demo.name)}
            style={{
              display: 'block',
              width: '100%',
              textAlign: 'left',
              padding: '0.375rem 0.5rem 0.375rem 1.25rem',
              fontSize: '0.8rem',
              fontFamily: 'var(--font-sans)',
              fontWeight: isActive ? 500 : 400,
              color: isActive ? 'var(--color-text-inverse)' : 'var(--color-text)',
              background: isActive ? 'var(--color-action-primary)' : 'transparent',
              border: 'none',
              borderRadius: 'var(--radius-md)',
              cursor: 'pointer',
              transition: 'background 100ms ease',
            }}
          >
            {demo.name}
          </button>
        );
      })}
    </Stack>
  );
}

function SourceSection({
  source,
  items,
  selected,
  onSelect,
  defaultOpen,
}: {
  source: DemoSource;
  items: DemoEntry[];
  selected: string;
  onSelect: (name: string) => void;
  defaultOpen: boolean;
}): React.JSX.Element {
  const hasActive = items.some((d) => d.name === selected);
  const [open, setOpen] = useState(defaultOpen || hasActive);

  const grouped = useMemo(() => {
    const map = new Map<string, DemoEntry[]>();
    for (const cat of categories) {
      const catItems = items.filter((d) => d.category === cat);
      if (catItems.length > 0) map.set(cat, catItems);
    }
    return map;
  }, [items]);

  return (
    <Stack gap="md">
      <button
        onClick={() => setOpen((o) => !o)}
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '0.35rem',
          fontSize: '0.6rem',
          fontWeight: 700,
          fontFamily: 'var(--font-mono)',
          color: 'var(--color-text-link)',
          padding: '0.375rem 0.5rem',
          background: 'var(--color-surface-raised)',
          borderRadius: 'var(--radius-sm)',
          letterSpacing: '-0.01em',
          border: 'none',
          cursor: 'pointer',
          width: '100%',
          textAlign: 'left',
        }}
      >
        <Chevron open={open} />
        {sourceLabels[source]}
      </button>
      {open && Array.from(grouped.entries()).map(([category, catItems]) => (
        <CategoryGroup
          key={category}
          category={category}
          items={catItems}
          selected={selected}
          onSelect={onSelect}
          defaultOpen={defaultOpen}
        />
      ))}
    </Stack>
  );
}

function Sidebar({
  search,
  onSearchChange,
  selected,
  onSelect,
  filteredDemos,
}: {
  search: string;
  onSearchChange: (v: string) => void;
  selected: string;
  onSelect: (name: string) => void;
  filteredDemos: DemoEntry[];
}): React.JSX.Element {
  const uiItems = useMemo(() => filteredDemos.filter((d) => d.source === 'ui'), [filteredDemos]);
  const contentItems = useMemo(() => filteredDemos.filter((d) => d.source === 'content'), [filteredDemos]);

  return (
    <aside style={{
      width: '14rem',
      flexShrink: 0,
      borderRight: '1px solid var(--color-border)',
      height: '100vh',
      position: 'sticky',
      top: 0,
      display: 'flex',
      flexDirection: 'column',
      background: 'var(--color-surface-raised)',
    }}>
      <div style={{
        padding: '1rem',
        borderBottom: '1px solid var(--color-border)',
      }}>
        <h1 style={{
          margin: 0,
          fontSize: '0.875rem',
          fontWeight: 700,
          fontFamily: 'var(--font-mono)',
          letterSpacing: '-0.025em',
        }}>
          @4lt7ab/ui
        </h1>
        <span style={{
          fontSize: '0.7rem',
          color: 'var(--color-text-muted)',
        }}>
          Component Gallery
        </span>
      </div>

      <div style={{ padding: '0.75rem' }}>
        <Input
          placeholder="Search..."
          value={search}
          onChange={(e) => onSearchChange(e.target.value)}
          style={{ fontSize: '0.8rem', padding: '0.375rem 0.625rem' }}
        />
      </div>

      <nav style={{ flex: 1, overflow: 'auto', padding: '0 0.75rem 0.75rem' }}>
        <Stack gap="xl">
          {uiItems.length > 0 && (
            <SourceSection
              source="ui"
              items={uiItems}
              selected={selected}
              onSelect={onSelect}
              defaultOpen
            />
          )}
          {contentItems.length > 0 && (
            <SourceSection
              source="content"
              items={contentItems}
              selected={selected}
              onSelect={onSelect}
              defaultOpen
            />
          )}
        </Stack>
      </nav>

      <div style={{
        padding: '0.75rem',
        borderTop: '1px solid var(--color-border)',
      }}>
        <ThemeToggle />
      </div>
    </aside>
  );
}

function Gallery(): React.JSX.Element {
  const allDemos = useMemo(() => [...demos, ...examples], []);
  const [search, setSearch] = useState('');
  const [selected, setSelected] = useState(allDemos[0].name);

  const filteredDemos = useMemo(() => {
    if (!search.trim()) return allDemos;
    const q = search.toLowerCase();
    return allDemos.filter(
      (d) => d.name.toLowerCase().includes(q) || d.category.toLowerCase().includes(q),
    );
  }, [search, allDemos]);

  const activeDemo = filteredDemos.find((d) => d.name === selected) ?? filteredDemos[0];
  const ActiveComponent = activeDemo?.component;

  return (
    <div style={{
      display: 'flex',
      minHeight: '100vh',
      background: 'var(--color-surface)',
      fontFamily: 'var(--font-sans)',
      color: 'var(--color-text)',
      position: 'relative',
      zIndex: 1,
    }}>
      <Sidebar
        search={search}
        onSearchChange={setSearch}
        selected={activeDemo?.name ?? ''}
        onSelect={setSelected}
        filteredDemos={filteredDemos}
      />

      <main style={{
        flex: 1,
        padding: '2rem',
        maxWidth: '56rem',
        margin: '0 auto',
      }}>
        {activeDemo ? (
          <>
            <header style={{ marginBottom: '2rem' }}>
              <h2 style={{
                margin: 0,
                fontSize: '1.5rem',
                fontWeight: 700,
              }}>
                {activeDemo.name}
              </h2>
              <span style={{
                fontSize: '0.75rem',
                color: 'var(--color-text-muted)',
              }}>
                {activeDemo.category}
                {' \u00B7 '}
                <code style={{
                  fontSize: '0.7rem',
                  fontFamily: 'var(--font-mono)',
                  color: 'var(--color-text-link)',
                }}>
                  {sourceLabels[activeDemo.source]}
                </code>
              </span>
            </header>
            {ActiveComponent && <ActiveComponent />}
          </>
        ) : (
          <p style={{ color: 'var(--color-text-muted)' }}>
            No components match "{search}"
          </p>
        )}
      </main>
    </div>
  );
}

export function App(): React.JSX.Element {
  return (
    <ThemeProvider>
      <Gallery />
    </ThemeProvider>
  );
}
