import { useState, useEffect, useRef } from 'react';
import { Card, Stack, Icon, Badge } from '@4lt7ab/ui';
import {
  StackDemo, ContainerDemo, ProseDemo, EpigraphDemo, PullQuoteDemo,
  MarginNoteDemo, SideNoteDemo, ThinkingCycleDemo, InputDemo,
  TextareaDemo, SelectDemo, FieldDemo, ButtonDemo, IconButtonDemo,
  TagChipDemo, BadgeDemo, StatusDotDemo, TableDemo, PaginationDemo,
  ProgressBarDemo, SkeletonDemo, CardDemo, ExpandableCardDemo,
  EmptyStateDemo, LinkCardDemo, OverlayDemo, ModalDemo,
  ConfirmDialogDemo, ThemePickerDemo, TokensDemo, PageHeaderDemo,
  IconDemo, DateRangePickerDemo, DatePickerDemo,
  MetadataTableDemo, ErrorBoundaryDemo, IconFontDemo,
} from '../demos';

// ---------------------------------------------------------------------------
// Component registry with categories and package source
// ---------------------------------------------------------------------------

type DemoSource = 'ui' | 'content';

interface ComponentDef {
  name: string;
  source: DemoSource;
  Demo: () => React.JSX.Element;
}

interface CategoryDef {
  name: string;
  components: ComponentDef[];
}

const CATEGORIES: CategoryDef[] = [
  {
    name: 'Foundation',
    components: [
      { name: 'Tokens', source: 'ui', Demo: TokensDemo },
    ],
  },
  {
    name: 'Layout',
    components: [
      { name: 'Stack', source: 'ui', Demo: StackDemo },
      { name: 'Container', source: 'content', Demo: ContainerDemo },
      { name: 'Card', source: 'ui', Demo: CardDemo },
      { name: 'ExpandableCard', source: 'ui', Demo: ExpandableCardDemo },
      { name: 'PageHeader', source: 'ui', Demo: PageHeaderDemo },
      { name: 'MetadataTable', source: 'ui', Demo: MetadataTableDemo },
    ],
  },
  {
    name: 'Typography & Content',
    components: [
      { name: 'Prose', source: 'content', Demo: ProseDemo },
      { name: 'Epigraph', source: 'content', Demo: EpigraphDemo },
      { name: 'PullQuote', source: 'content', Demo: PullQuoteDemo },
      { name: 'MarginNote', source: 'content', Demo: MarginNoteDemo },
      { name: 'SideNote', source: 'content', Demo: SideNoteDemo },
      { name: 'ThinkingCycle', source: 'content', Demo: ThinkingCycleDemo },
      { name: 'LinkCard', source: 'content', Demo: LinkCardDemo },
    ],
  },
  {
    name: 'Form Controls',
    components: [
      { name: 'Input', source: 'ui', Demo: InputDemo },
      { name: 'Textarea', source: 'ui', Demo: TextareaDemo },
      { name: 'Select', source: 'ui', Demo: SelectDemo },
      { name: 'Field', source: 'ui', Demo: FieldDemo },
      { name: 'DatePicker', source: 'ui', Demo: DatePickerDemo },
      { name: 'DateRangePicker', source: 'ui', Demo: DateRangePickerDemo },
    ],
  },
  {
    name: 'Actions',
    components: [
      { name: 'Button', source: 'ui', Demo: ButtonDemo },
      { name: 'Icon', source: 'ui', Demo: IconDemo },
      { name: 'IconButton', source: 'ui', Demo: IconButtonDemo },
      { name: 'Icon Font', source: 'ui', Demo: IconFontDemo },
      { name: 'TagChip', source: 'ui', Demo: TagChipDemo },
      { name: 'ThemePicker', source: 'ui', Demo: ThemePickerDemo },
    ],
  },
  {
    name: 'Data Display',
    components: [
      { name: 'Badge', source: 'ui', Demo: BadgeDemo },
      { name: 'StatusDot', source: 'ui', Demo: StatusDotDemo },
      { name: 'Table', source: 'ui', Demo: TableDemo },
      { name: 'Pagination', source: 'ui', Demo: PaginationDemo },
      { name: 'ProgressBar', source: 'ui', Demo: ProgressBarDemo },
      { name: 'Skeleton', source: 'ui', Demo: SkeletonDemo },
      { name: 'EmptyState', source: 'ui', Demo: EmptyStateDemo },
    ],
  },
  {
    name: 'Overlays',
    components: [
      { name: 'Overlay', source: 'ui', Demo: OverlayDemo },
      { name: 'ModalShell', source: 'ui', Demo: ModalDemo },
      { name: 'ConfirmDialog', source: 'ui', Demo: ConfirmDialogDemo },
      { name: 'ErrorBoundary', source: 'ui', Demo: ErrorBoundaryDemo },
    ],
  },
];

const ALL_COMPONENTS = CATEGORIES.flatMap((c) => c.components);

// ---------------------------------------------------------------------------
// Sidebar
// ---------------------------------------------------------------------------

function Sidebar({
  activeComponent,
  onSelect,
  collapsed,
  onToggle,
}: {
  activeComponent: string;
  onSelect: (name: string) => void;
  collapsed: boolean;
  onToggle: () => void;
}): React.JSX.Element {
  const [collapsedCategories, setCollapsedCategories] = useState<Set<string>>(new Set());

  const toggleCategory = (name: string): void => {
    setCollapsedCategories((prev) => {
      const next = new Set(prev);
      if (next.has(name)) next.delete(name);
      else next.add(name);
      return next;
    });
  };

  if (collapsed) {
    return (
      <div style={{
        width: '2.5rem',
        flexShrink: 0,
        borderRight: '1px solid var(--color-border)',
        background: 'var(--color-surface-panel)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        paddingTop: 'var(--space-sm)',
      }}>
        <button
          onClick={onToggle}
          style={{
            all: 'unset',
            cursor: 'pointer',
            padding: 'var(--space-xs)',
            color: 'var(--color-text-muted)',
            borderRadius: 'var(--radius-sm)',
          }}
          aria-label="Expand sidebar"
        >
          <Icon name="chevron-right" size={16} />
        </button>
      </div>
    );
  }

  return (
    <div style={{
      width: '14rem',
      flexShrink: 0,
      borderRight: '1px solid var(--color-border)',
      background: 'var(--color-surface-panel)',
      overflowY: 'auto',
      display: 'flex',
      flexDirection: 'column',
    }}>
      {/* Sidebar header */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 'var(--space-sm) var(--space-md)',
        borderBottom: '1px solid var(--color-border)',
      }}>
        <span style={{
          fontSize: '0.7rem',
          fontWeight: 600,
          color: 'var(--color-text-muted)',
          textTransform: 'uppercase',
          letterSpacing: '0.05em',
        }}>
          Components
        </span>
        <button
          onClick={onToggle}
          style={{
            all: 'unset',
            cursor: 'pointer',
            color: 'var(--color-text-muted)',
            display: 'flex',
            padding: '2px',
          }}
          aria-label="Collapse sidebar"
        >
          <Icon name="chevron-left" size={14} />
        </button>
      </div>

      {/* Categories */}
      <nav style={{ padding: 'var(--space-xs) 0', flex: 1 }}>
        {CATEGORIES.map((cat) => {
          const isCollapsed = collapsedCategories.has(cat.name);
          return (
            <div key={cat.name}>
              <button
                onClick={() => toggleCategory(cat.name)}
                style={{
                  all: 'unset',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: 'var(--space-xs)',
                  width: '100%',
                  boxSizing: 'border-box',
                  padding: 'var(--space-xs) var(--space-md)',
                  fontSize: '0.7rem',
                  fontWeight: 600,
                  color: 'var(--color-text-muted)',
                  textTransform: 'uppercase',
                  letterSpacing: '0.04em',
                }}
              >
                <Icon name={isCollapsed ? 'chevron-right' : 'chevron-down'} size={10} />
                {cat.name}
                <span style={{
                  marginLeft: 'auto',
                  fontSize: '0.65rem',
                  color: 'var(--color-text-muted)',
                  fontWeight: 400,
                }}>
                  {cat.components.length}
                </span>
              </button>

              {!isCollapsed && (
                <div style={{ padding: '0 0 var(--space-xs) 0' }}>
                  {cat.components.map((comp) => {
                    const isActive = comp.name === activeComponent;
                    return (
                      <button
                        key={comp.name}
                        onClick={() => onSelect(comp.name)}
                        style={{
                          all: 'unset',
                          cursor: 'pointer',
                          display: 'flex',
                          alignItems: 'center',
                          gap: 'var(--space-xs)',
                          width: '100%',
                          boxSizing: 'border-box',
                          padding: '0.25rem var(--space-md) 0.25rem 1.75rem',
                          fontSize: '0.8rem',
                          fontFamily: 'var(--font-mono)',
                          fontWeight: isActive ? 600 : 400,
                          color: isActive ? 'var(--color-text)' : 'var(--color-text-secondary)',
                          background: isActive ? 'var(--color-surface-raised)' : 'transparent',
                          borderRadius: 'var(--radius-sm)',
                          transition: 'background 80ms ease',
                        }}
                      >
                        {comp.name}
                        {comp.source === 'content' && (
                          <span style={{
                            fontSize: '0.6rem',
                            color: 'var(--color-text-muted)',
                            fontFamily: 'var(--font-sans)',
                            fontWeight: 400,
                          }}>
                            content
                          </span>
                        )}
                      </button>
                    );
                  })}
                </div>
              )}
            </div>
          );
        })}
      </nav>
    </div>
  );
}

// ---------------------------------------------------------------------------
// Component detail
// ---------------------------------------------------------------------------

function ComponentDetail({ name }: { name: string }): React.JSX.Element {
  const entry = ALL_COMPONENTS.find((c) => c.name === name);

  if (!entry) {
    return (
      <Stack gap="md" style={{ padding: 'var(--space-xl)' }}>
        <span style={{ color: 'var(--color-text-muted)' }}>Component not found: {name}</span>
      </Stack>
    );
  }

  const Demo = entry.Demo;
  const importPath = entry.source === 'content' ? '@4lt7ab/ui/content' : '@4lt7ab/ui/ui';

  return (
    <div style={{ padding: 'var(--space-lg)', maxWidth: '64rem' }}>
      <Stack gap="lg">
        {/* Header */}
        <Stack gap="sm">
          <Stack direction="horizontal" gap="sm" align="center">
            <h2 style={{
              margin: 0,
              fontSize: '1.25rem',
              fontWeight: 700,
              fontFamily: 'var(--font-mono)',
              color: 'var(--color-text)',
              letterSpacing: '-0.01em',
            }}>
              {'<'}{entry.name}{' />'}
            </h2>
            <Badge variant={entry.source === 'content' ? 'default' : 'info'}>
              {importPath}
            </Badge>
          </Stack>
          <code style={{
            fontSize: '0.75rem',
            fontFamily: 'var(--font-mono)',
            color: 'var(--color-text-muted)',
            background: 'var(--color-surface-raised)',
            padding: '0.2rem 0.5rem',
            borderRadius: 'var(--radius-sm)',
            alignSelf: 'flex-start',
          }}>
            {`import { ${entry.name} } from '${importPath}';`}
          </code>
        </Stack>

        {/* Demo */}
        <Card variant="flat" padding="lg">
          <Demo />
        </Card>
      </Stack>
    </div>
  );
}

// ---------------------------------------------------------------------------
// Component Explorer (main export)
// ---------------------------------------------------------------------------

export function ComponentExplorer({ initialComponent }: { initialComponent?: string }): React.JSX.Element {
  const [active, setActive] = useState(initialComponent ?? 'Button');
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const mainRef = useRef<HTMLDivElement>(null);

  // Sync hash → active component
  useEffect(() => {
    const handleHash = (): void => {
      const hash = window.location.hash;
      const match = hash.match(/^#\/components\/(.+)$/);
      if (match) {
        const name = decodeURIComponent(match[1]);
        const found = ALL_COMPONENTS.find((c) => c.name === name);
        if (found) setActive(found.name);
      }
    };
    handleHash();
    window.addEventListener('hashchange', handleHash);
    return () => window.removeEventListener('hashchange', handleHash);
  }, []);

  const handleSelect = (name: string): void => {
    setActive(name);
    window.location.hash = `#/components/${name}`;
    // Scroll main area to top
    if (mainRef.current) mainRef.current.scrollTop = 0;
  };

  return (
    <div style={{
      display: 'flex',
      height: '100%',
      minHeight: 0,
    }}>
      <Sidebar
        activeComponent={active}
        onSelect={handleSelect}
        collapsed={sidebarCollapsed}
        onToggle={() => setSidebarCollapsed((c) => !c)}
      />
      <div
        ref={mainRef}
        style={{
          flex: 1,
          overflowY: 'auto',
          minWidth: 0,
        }}
      >
        <ComponentDetail name={active} />
      </div>
    </div>
  );
}
