import { useState } from 'react';
import { Card, Stack, Badge, Icon, Button } from '@4lt7ab/ui';
import type { IconName } from '@4lt7ab/ui';
import { CommandCenter } from '../examples/CommandCenter';
import { OnboardingFlow } from '../examples/OnboardingFlow';
import { BlogPost } from '../examples/BlogPost';
import { ProjectHub } from '../examples/ProjectHub';
import { DeleteFlow } from '../examples/DeleteFlow';
import { SettingsPage } from '../examples/SettingsPage';
import { TaskDashboard } from '../examples/TaskDashboard';
import { AnalyticsDashboard } from '../examples/AnalyticsDashboard';
import { GlobalCommands } from '../examples/GlobalCommands';

// ---------------------------------------------------------------------------
// Recipe registry
// ---------------------------------------------------------------------------

interface Recipe {
  id: string;
  title: string;
  description: string;
  icon: IconName;
  components: string[];
  category: 'dashboard' | 'workflow' | 'content' | 'crud';
  Component: () => React.JSX.Element;
}

const RECIPES: Recipe[] = [
  {
    id: 'command-center',
    title: 'Command Center',
    description: 'System monitoring dashboard with tables, status indicators, paginated data, and loading states.',
    icon: 'settings',
    components: ['AppShell', 'TopBar', 'DataTablePage', 'DetailPage', 'Header', 'Table', 'Card', 'Badge', 'StatusDot', 'ProgressBar', 'Skeleton', 'Text', 'Button'],
    category: 'dashboard',
    Component: CommandCenter,
  },
  {
    id: 'project-hub',
    title: 'Project Hub',
    description: 'Project management with CRUD operations, modal details, a FormLayout-based edit dialog, and tag management.',
    icon: 'menu',
    components: ['DataTablePage', 'FormLayout', 'Card', 'Badge', 'ProgressBar', 'ModalShell', 'ConfirmDialog', 'Table', 'EmptyState', 'ThemePicker', 'IconButton', 'Text', 'Field', 'Input', 'Select', 'Textarea'],
    category: 'crud',
    Component: ProjectHub,
  },
  {
    id: 'onboarding',
    title: 'Onboarding Wizard',
    description: 'Multi-step workspace creation flow built on WizardDialog — per-step validation, member management, and plan summary.',
    icon: 'plus',
    components: ['WizardDialog', 'Input', 'Select', 'Textarea', 'Field', 'Button', 'Badge', 'Card', 'Surface', 'Text', 'IconButton', 'Icon', 'Stack'],
    category: 'workflow',
    Component: OnboardingFlow,
  },
  {
    id: 'blog-post',
    title: 'Blog Post',
    description: 'Long-form content layout with pull quotes, margin notes, side notes, and linked resources.',
    icon: 'edit',
    components: ['Container', 'Text', 'Divider', 'Prose', 'Quote', 'MarginNote', 'ThinkingCycle', 'LinkCard'],
    category: 'content',
    Component: BlogPost,
  },
  {
    id: 'task-dashboard',
    title: 'Task Dashboard',
    description: 'Sprint tracking with progress visualization, expandable sections, and status badges.',
    icon: 'check-circle',
    components: ['Header', 'Card', 'Badge', 'ProgressBar', 'EmptyState', 'Skeleton', 'Button'],
    category: 'dashboard',
    Component: TaskDashboard,
  },
  {
    id: 'settings-page',
    title: 'Settings Page',
    description: 'Sectioned settings form built on FormLayout — dirty-state gating, sticky save/cancel, and DirtyOnChange auto-detection.',
    icon: 'settings',
    components: ['FormLayout', 'Field', 'Input', 'Select', 'Textarea'],
    category: 'workflow',
    Component: SettingsPage,
  },
  {
    id: 'global-commands',
    title: 'Global Commands',
    description: 'Cmd+K command palette with Navigation, Actions, and Recent groups — keyword matching, shortcut hints, and live activity log.',
    icon: 'search',
    components: ['CommandPalette', 'Card', 'Surface', 'Button', 'Badge', 'Icon', 'SearchInput', 'Text', 'Stack'],
    category: 'workflow',
    Component: GlobalCommands,
  },
  {
    id: 'analytics-dashboard',
    title: 'Analytics Dashboard',
    description: 'Traffic overview with date range filtering, channel breakdown, top pages, and theme switching.',
    icon: 'filter',
    components: ['AppShell', 'TopBar', 'Text', 'DateRangePicker', 'ThemePicker', 'Card', 'Field', 'Select', 'Table', 'Badge', 'StatusDot', 'ProgressBar', 'Button'],
    category: 'dashboard',
    Component: AnalyticsDashboard,
  },
  {
    id: 'delete-flow',
    title: 'Delete Confirmation',
    description: 'Resource list with destructive action pattern using confirmation dialogs.',
    icon: 'trash',
    components: ['Card', 'Badge', 'Icon', 'IconButton', 'ConfirmDialog', 'Stack', 'Text'],
    category: 'crud',
    Component: DeleteFlow,
  },
];

const CATEGORY_LABELS: Record<string, string> = {
  dashboard: 'Dashboard',
  workflow: 'Workflow',
  content: 'Content',
  crud: 'CRUD',
};

// ---------------------------------------------------------------------------
// Recipe index
// ---------------------------------------------------------------------------

function RecipeIndex({
  onSelect,
  onNavigateComponent,
}: {
  onSelect: (id: string) => void;
  onNavigateComponent: (name: string) => void;
}): React.JSX.Element {
  return (
    <div style={{ maxWidth: '60rem', margin: '0 auto', padding: 'var(--space-lg)' }}>
      <Stack gap="xl">
        <Stack gap="sm">
          <h2 style={{
            margin: 0,
            fontSize: '1.25rem',
            fontWeight: 700,
            color: 'var(--color-text)',
          }}>
            Pattern Recipes
          </h2>
          <p style={{
            margin: 0,
            fontSize: '0.85rem',
            color: 'var(--color-text-secondary)',
            maxWidth: '40rem',
          }}>
            Full-page application patterns that show how to compose components into real interfaces.
            Each recipe lists the components it uses — click any component name to see its docs.
          </p>
        </Stack>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(18rem, 1fr))',
          gap: 'var(--space-md)',
        }}>
          {RECIPES.map((recipe) => (
            <button
              key={recipe.id}
              onClick={() => onSelect(recipe.id)}
              style={{ all: 'unset', cursor: 'pointer', display: 'block' }}
            >
              <div style={{
                height: '100%',
                border: '1px solid var(--color-border)',
                transition: 'box-shadow 150ms ease',
                borderRadius: 'var(--radius-md)',
              }}>
              <Card padding="lg">
                <Stack gap="md">
                  <Stack direction="horizontal" gap="sm" align="center">
                    <span style={{ color: 'var(--color-action-primary)' }}><Icon name={recipe.icon} size="md" /></span>
                    <span style={{ fontSize: '0.95rem', fontWeight: 600, color: 'var(--color-text)' }}>
                      {recipe.title}
                    </span>
                    <span style={{ marginLeft: 'auto' }}><Badge variant="default">
                      {CATEGORY_LABELS[recipe.category]}
                    </Badge></span>
                  </Stack>

                  <span style={{
                    fontSize: '0.8rem',
                    color: 'var(--color-text-secondary)',
                    lineHeight: 1.4,
                  }}>
                    {recipe.description}
                  </span>

                  <Stack direction="horizontal" gap="xs" wrap>
                    {recipe.components.slice(0, 5).map((c) => (
                      <span key={c} style={{
                        fontSize: '0.65rem',
                        fontFamily: 'var(--font-mono)',
                        color: 'var(--color-text-muted)',
                        background: 'var(--color-surface-raised)',
                        padding: '0.1rem 0.35rem',
                        borderRadius: 'var(--radius-sm)',
                      }}>
                        {c}
                      </span>
                    ))}
                    {recipe.components.length > 5 && (
                      <span style={{
                        fontSize: '0.65rem',
                        color: 'var(--color-text-muted)',
                      }}>
                        +{recipe.components.length - 5} more
                      </span>
                    )}
                  </Stack>
                </Stack>
              </Card>
              </div>
            </button>
          ))}
        </div>
      </Stack>
    </div>
  );
}

// ---------------------------------------------------------------------------
// Recipe detail
// ---------------------------------------------------------------------------

function RecipeDetail({
  recipe,
  onBack,
  onNavigateComponent,
}: {
  recipe: Recipe;
  onBack: () => void;
  onNavigateComponent: (name: string) => void;
}): React.JSX.Element {
  const Component = recipe.Component;

  return (
    <div style={{ padding: 'var(--space-lg)' }}>
      <Stack gap="lg">
        {/* Back nav + header */}
        <Stack gap="md">
          <button
            onClick={onBack}
            style={{
              all: 'unset',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: 'var(--space-xs)',
              fontSize: '0.8rem',
              color: 'var(--color-text-link)',
            }}
          >
            <Icon name="arrow-left" size="xs" />
            All patterns
          </button>

          <Stack gap="sm">
            <Stack direction="horizontal" gap="sm" align="center">
              <span style={{ color: 'var(--color-action-primary)' }}><Icon name={recipe.icon} size="md" /></span>
              <h2 style={{
                margin: 0,
                fontSize: '1.25rem',
                fontWeight: 700,
                color: 'var(--color-text)',
              }}>
                {recipe.title}
              </h2>
              <Badge variant="default">{CATEGORY_LABELS[recipe.category]}</Badge>
            </Stack>
            <p style={{
              margin: 0,
              fontSize: '0.85rem',
              color: 'var(--color-text-secondary)',
            }}>
              {recipe.description}
            </p>
          </Stack>

          {/* Component manifest */}
          <Card variant="flat" padding="md">
            <Stack gap="sm">
              <span style={{
                fontSize: '0.7rem',
                fontWeight: 600,
                color: 'var(--color-text-muted)',
                textTransform: 'uppercase',
                letterSpacing: '0.05em',
              }}>
                Components used ({recipe.components.length})
              </span>
              <Stack direction="horizontal" gap="xs" wrap>
                {recipe.components.map((c) => (
                  <button
                    key={c}
                    onClick={() => onNavigateComponent(c)}
                    style={{
                      all: 'unset',
                      cursor: 'pointer',
                      fontSize: '0.75rem',
                      fontFamily: 'var(--font-mono)',
                      color: 'var(--color-text-link)',
                      background: 'var(--color-surface-raised)',
                      padding: '0.2rem 0.5rem',
                      borderRadius: 'var(--radius-sm)',
                      transition: 'background 80ms ease',
                    }}
                  >
                    {c}
                  </button>
                ))}
              </Stack>
            </Stack>
          </Card>
        </Stack>

        {/* Live demo */}
        <Card variant="flat" padding="lg">
          <Component />
        </Card>
      </Stack>
    </div>
  );
}

// ---------------------------------------------------------------------------
// Pattern Recipes (main export)
// ---------------------------------------------------------------------------

export function PatternRecipes({
  onNavigateComponent,
}: {
  onNavigateComponent: (name: string) => void;
}): React.JSX.Element {
  const [activeRecipe, setActiveRecipe] = useState<string | null>(null);

  const recipe = activeRecipe ? RECIPES.find((r) => r.id === activeRecipe) : null;

  if (recipe) {
    return (
      <RecipeDetail
        recipe={recipe}
        onBack={() => setActiveRecipe(null)}
        onNavigateComponent={onNavigateComponent}
      />
    );
  }

  return (
    <RecipeIndex
      onSelect={setActiveRecipe}
      onNavigateComponent={onNavigateComponent}
    />
  );
}
