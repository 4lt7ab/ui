import { useState } from 'react';
import {
  Card, Badge, Button, IconButton, Icon,
  ModalShell, ConfirmDialog, EmptyState, Stack, PageHeader,
  ProgressBar, TagChip, Pagination, ThemePicker,
  Table, TableHeader, TableHeaderCell, TableBody, TableRow, TableCell,
} from '@4lt7ab/ui';
import type { IconName } from '@4lt7ab/ui';
import { DisclosureCard } from '../components/DisclosureCard';

// ---------------------------------------------------------------------------
// Data
// ---------------------------------------------------------------------------

interface Task {
  id: number;
  title: string;
  status: 'done' | 'in_progress' | 'todo';
  assignee: string;
}

interface Project {
  id: number;
  name: string;
  description: string;
  status: 'active' | 'planning' | 'complete';
  tags: string[];
  tasks: Task[];
  progress: number;
}

const INITIAL_PROJECTS: Project[] = [
  {
    id: 1,
    name: 'Design System',
    description: 'Shared component library with tokens, themes, and UI components.',
    status: 'active',
    tags: ['ui', 'design', 'components'],
    tasks: [
      { id: 1, title: 'Token audit', status: 'done', assignee: 'Alice' },
      { id: 2, title: 'Table component', status: 'in_progress', assignee: 'Bob' },
      { id: 3, title: 'Modal animations', status: 'in_progress', assignee: 'Alice' },
      { id: 4, title: 'Color contrast check', status: 'todo', assignee: 'Carol' },
      { id: 5, title: 'README update', status: 'todo', assignee: 'Bob' },
    ],
    progress: 65,
  },
  {
    id: 2,
    name: 'API v2',
    description: 'Next-generation REST API with improved auth and rate limiting.',
    status: 'active',
    tags: ['backend', 'api', 'auth'],
    tasks: [
      { id: 6, title: 'Auth middleware', status: 'done', assignee: 'Dan' },
      { id: 7, title: 'Rate limiter', status: 'done', assignee: 'Eve' },
      { id: 8, title: 'Schema validation', status: 'in_progress', assignee: 'Dan' },
      { id: 9, title: 'Load testing', status: 'todo', assignee: 'Eve' },
    ],
    progress: 50,
  },
  {
    id: 3,
    name: 'Mobile App',
    description: 'Cross-platform mobile client for iOS and Android.',
    status: 'active',
    tags: ['mobile', 'react-native'],
    tasks: [
      { id: 10, title: 'Navigation scaffold', status: 'done', assignee: 'Frank' },
      { id: 11, title: 'Auth flow', status: 'in_progress', assignee: 'Grace' },
      { id: 12, title: 'Push notifications', status: 'todo', assignee: 'Frank' },
    ],
    progress: 33,
  },
  {
    id: 4,
    name: 'Documentation',
    description: 'Developer docs, guides, and API reference.',
    status: 'complete',
    tags: ['docs'],
    tasks: [],
    progress: 100,
  },
  {
    id: 5,
    name: 'CI/CD Pipeline',
    description: 'Automated build, test, and deploy pipeline.',
    status: 'active',
    tags: ['infra', 'devops'],
    tasks: [
      { id: 13, title: 'GitHub Actions config', status: 'done', assignee: 'Heidi' },
      { id: 14, title: 'Docker builds', status: 'done', assignee: 'Heidi' },
      { id: 15, title: 'Staging deploys', status: 'in_progress', assignee: 'Ivan' },
      { id: 16, title: 'Production rollback', status: 'todo', assignee: 'Heidi' },
    ],
    progress: 50,
  },
  {
    id: 6,
    name: 'Analytics Dashboard',
    description: 'Internal metrics and reporting tool.',
    status: 'planning',
    tags: ['frontend', 'data'],
    tasks: [
      { id: 17, title: 'Requirements doc', status: 'in_progress', assignee: 'Alice' },
    ],
    progress: 0,
  },
];

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

type View = 'projects' | 'archived' | 'settings';

const PAGE_SIZE = 4;

function projectBadge(status: string): 'success' | 'info' | 'default' {
  if (status === 'active') return 'success';
  if (status === 'planning') return 'info';
  return 'default';
}

function taskBadge(status: string): 'success' | 'info' | 'warning' {
  if (status === 'done') return 'success';
  if (status === 'in_progress') return 'info';
  return 'warning';
}

// ---------------------------------------------------------------------------
// Sub-components
// ---------------------------------------------------------------------------

function NavButton({ icon, active, label, onClick }: {
  icon: IconName;
  active: boolean;
  label: string;
  onClick: () => void;
}): React.JSX.Element {
  return (
    <div style={{
      background: active ? 'var(--color-action-secondary-hover)' : 'transparent',
      borderRadius: 'var(--radius-md)',
      padding: 'var(--space-sm)',
    }}>
      <IconButton
        icon={icon}
        size="sm"
        onClick={onClick}
        aria-label={label}
      />
    </div>
  );
}

function ProjectCard({ project, onOpen }: {
  project: Project;
  onOpen: () => void;
}): React.JSX.Element {
  return (
    <div onClick={onOpen} style={{ cursor: 'pointer' }}>
    <Card padding="md" hover>
      <Stack gap="sm">
        <Stack direction="horizontal" justify="space-between" align="center">
          <span style={{ fontWeight: 600, fontSize: '0.875rem' }}>{project.name}</span>
          <Badge variant={projectBadge(project.status)}>{project.status}</Badge>
        </Stack>
        <span style={{ fontSize: '0.8rem', color: 'var(--color-text-secondary)', lineHeight: 1.4 }}>
          {project.description}
        </span>
        <ProgressBar
          segments={[
            { value: project.progress || 1, color: project.progress > 0 ? 'success' : 'muted' },
            { value: Math.max(100 - project.progress, 1), color: 'muted' },
          ]}
          height="sm"
        />
        <Stack direction="horizontal" justify="space-between" align="center">
          <span style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)' }}>
            {project.tasks.length} task{project.tasks.length !== 1 ? 's' : ''}
          </span>
          <span style={{ color: 'var(--color-text-muted)' }}><Icon name="chevron-right" size="xs" /></span>
        </Stack>
      </Stack>
    </Card>
    </div>
  );
}

function ProjectDetail({ project, onClose, onDelete }: {
  project: Project;
  onClose: () => void;
  onDelete: () => void;
}): React.JSX.Element {
  const doneTasks = project.tasks.filter((t) => t.status === 'done').length;
  const totalTasks = project.tasks.length;

  return (
    <ModalShell onClose={onClose} width="xl">
      <Stack gap="xl">
        {/* Header */}
        <Stack direction="horizontal" justify="space-between" align="start">
          <Stack gap="xs">
            <h3 style={{ margin: 0, fontSize: '1.25rem', fontWeight: 700 }}>{project.name}</h3>
            <span style={{ fontSize: '0.875rem', color: 'var(--color-text-secondary)' }}>
              {project.description}
            </span>
          </Stack>
          <Stack direction="horizontal" gap="xs" align="center">
            <Badge variant={projectBadge(project.status)}>{project.status}</Badge>
            <IconButton icon="trash" size="sm" onClick={onDelete} aria-label="Delete project" />
          </Stack>
        </Stack>

        {/* Overview */}
        <DisclosureCard title="Overview" defaultOpen variant="flat">
          <Stack gap="md">
            <Stack gap="xs">
              <Stack direction="horizontal" justify="space-between">
                <span style={{ fontSize: '0.8rem', color: 'var(--color-text-secondary)' }}>Progress</span>
                <span style={{ fontSize: '0.75rem', fontFamily: 'var(--font-mono)', color: 'var(--color-text-muted)' }}>
                  {doneTasks}/{totalTasks} tasks
                </span>
              </Stack>
              <ProgressBar
                segments={[
                  { value: project.progress || 1, color: project.progress > 0 ? 'success' : 'muted' },
                  { value: Math.max(100 - project.progress, 1), color: 'muted' },
                ]}
                height="md"
              />
            </Stack>
            <Stack direction="horizontal" gap="xs" wrap>
              {project.tags.map((tag) => (
                <TagChip key={tag} name={tag} />
              ))}
            </Stack>
          </Stack>
        </DisclosureCard>

        {/* Tasks */}
        <DisclosureCard
          title="Tasks"
          defaultOpen
          variant="flat"
          headerAction={<Badge variant="info">{totalTasks}</Badge>}
        >
          {totalTasks > 0 ? (
            <Table variant="flat" density="sm">
              <TableHeader>
                <TableHeaderCell>Task</TableHeaderCell>
                <TableHeaderCell>Status</TableHeaderCell>
                <TableHeaderCell>Assignee</TableHeaderCell>
              </TableHeader>
              <TableBody>
                {project.tasks.map((task) => (
                  <TableRow key={task.id} hoverable>
                    <TableCell>{task.title}</TableCell>
                    <TableCell>
                      <Badge variant={taskBadge(task.status)}>
                        {task.status.replace('_', ' ')}
                      </Badge>
                    </TableCell>
                    <TableCell muted>{task.assignee}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          ) : (
            <EmptyState icon="check-circle" message="No tasks \u2014 this project is complete" />
          )}
        </DisclosureCard>
      </Stack>
    </ModalShell>
  );
}

// ---------------------------------------------------------------------------
// Main
// ---------------------------------------------------------------------------

export function ProjectHub(): React.JSX.Element {
  const [view, setView] = useState<View>('projects');
  const [projects, setProjects] = useState(INITIAL_PROJECTS);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [deleteTarget, setDeleteTarget] = useState<string | null>(null);
  const [page, setPage] = useState(1);

  const totalPages = Math.ceil(projects.length / PAGE_SIZE);
  const paginated = projects.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

  const handleDelete = async () => {
    setProjects((prev) => prev.filter((p) => p.name !== deleteTarget));
    setDeleteTarget(null);
    setSelectedProject(null);
  };

  const navItems: { icon: IconName; view: View; label: string }[] = [
    { icon: 'menu', view: 'projects', label: 'Projects' },
    { icon: 'check-circle', view: 'archived', label: 'Archived' },
    { icon: 'settings', view: 'settings', label: 'Settings' },
  ];

  return (
    <div style={{ minHeight: 500 }}>
    <Stack direction="horizontal" gap="md">
      {/* Sidebar navigation */}
      <nav style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 'var(--space-xs)',
        padding: 'var(--space-sm)',
        background: 'var(--color-surface-panel)',
        borderRadius: 'var(--radius-lg)',
        border: '1px solid var(--color-border)',
        alignSelf: 'flex-start',
      }}>
        {navItems.map((item) => (
          <NavButton
            key={item.view}
            icon={item.icon}
            active={view === item.view}
            label={item.label}
            onClick={() => setView(item.view)}
          />
        ))}
      </nav>

      {/* Main content */}
      <div style={{ flex: 1, minWidth: 0 }}>
        {/* ── Projects ── */}
        {view === 'projects' && (
          <Stack gap="xl">
            <PageHeader
              title="Projects"
              subtitle={`${projects.length} project${projects.length !== 1 ? 's' : ''}`}
              trailing={<Button size="sm"><Icon name="plus" size="xs" /> New project</Button>}
            />

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(15rem, 1fr))',
              gap: 'var(--space-md)',
            }}>
              {paginated.map((project) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  onOpen={() => setSelectedProject(project)}
                />
              ))}
            </div>

            {totalPages > 1 && (
              <Pagination
                page={page}
                totalPages={totalPages}
                total={projects.length}
                onPageChange={setPage}
              />
            )}
          </Stack>
        )}

        {/* ── Archived ── */}
        {view === 'archived' && (
          <Stack gap="xl">
            <PageHeader title="Archived" subtitle="Completed and archived projects" />
            <EmptyState icon="check-circle" message="No archived projects yet" variant="card" />
          </Stack>
        )}

        {/* ── Settings ── */}
        {view === 'settings' && (
          <Stack gap="xl">
            <PageHeader title="Settings" subtitle="Workspace configuration" />

            <Card>
              <Stack gap="lg">
                <span style={{ fontSize: '0.875rem', fontWeight: 600 }}>Appearance</span>
                <ThemePicker />
              </Stack>
            </Card>

            <Card>
              <Stack gap="md">
                <span style={{ fontSize: '0.875rem', fontWeight: 600, color: 'var(--color-error)' }}>
                  Danger zone
                </span>
                <Stack direction="horizontal" justify="space-between" align="center">
                  <Stack gap="xs">
                    <span style={{ fontSize: '0.875rem' }}>Delete workspace</span>
                    <span style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)' }}>
                      Permanently remove this workspace and all its data
                    </span>
                  </Stack>
                  <Button variant="destructive" size="sm">Delete</Button>
                </Stack>
              </Stack>
            </Card>
          </Stack>
        )}
      </div>

      {/* Project detail modal */}
      {selectedProject && (
        <ProjectDetail
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
          onDelete={() => setDeleteTarget(selectedProject.name)}
        />
      )}

      {/* Delete confirmation */}
      {deleteTarget && (
        <ConfirmDialog
          title={`Delete ${deleteTarget}?`}
          message="This project and all its tasks will be permanently removed. This action cannot be undone."
          confirmLabel="Delete"
          onConfirm={handleDelete}
          onCancel={() => setDeleteTarget(null)}
        />
      )}
    </Stack>
    </div>
  );
}
