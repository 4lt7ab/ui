import { useState, type ReactNode } from 'react';
import {
  Card, Badge, Button, IconButton, Icon,
  ModalShell, ConfirmDialog, EmptyState, Stack, Header, Text,
  ProgressBar, tagChipStyle, ThemePicker,
  DataTablePage, FormLayout, Field, Input, Select, Textarea,
  Table, TableHeader, TableHeaderCell, TableBody, TableRow, TableCell,
  IconChevronRight,
} from '@4lt7ab/ui';
import type { CardVariant, IconName } from '@4lt7ab/ui';
import { semantic as t, useDisclosure } from '@4lt7ab/core';
import type { UseDisclosureOptions } from '@4lt7ab/core';

// Local Card + useDisclosure composition — canonical replacement for the
// retired ExpandableCard. Kept inline so this example stays self-contained.
interface DisclosureSectionProps extends UseDisclosureOptions {
  title: string;
  children: ReactNode;
  headerAction?: ReactNode;
  variant?: CardVariant;
}

function DisclosureSection({
  title,
  children,
  headerAction,
  variant = 'default',
  ...options
}: DisclosureSectionProps): React.JSX.Element {
  const { open, triggerProps, contentProps } = useDisclosure(options);

  return (
    <Card variant={variant} padding="xs">
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <button
          type="button"
          {...triggerProps}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: t.spaceSm,
            padding: `${t.spaceSm} ${t.spaceMd}`,
            cursor: 'pointer',
            borderRadius: t.radiusMd,
            background: 'none',
            border: 'none',
            color: 'inherit',
            font: 'inherit',
            flex: 1,
            textAlign: 'left',
          }}
        >
          <span
            style={{
              display: 'inline-flex',
              transition: 'transform 150ms ease-out',
              transform: open ? 'rotate(90deg)' : 'rotate(0deg)',
            }}
          >
            <IconChevronRight size={20} />
          </span>
          <span style={{ fontWeight: t.fontWeightSemibold, fontFamily: t.fontSans, color: t.colorText, fontSize: t.fontSizeSm }}>
            {title}
          </span>
        </button>
        {headerAction && <div style={{ padding: `0 ${t.spaceMd}` }}>{headerAction}</div>}
      </div>
      <div {...contentProps} style={{ padding: `${t.spaceSm} ${t.spaceMd} ${t.spaceMd}` }}>
        {children}
      </div>
    </Card>
  );
}

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
  // Allowlist: nav pill background depends on `active`. No existing atom
  // exposes a "highlighted when selected" container variant, and Surface's
  // levels are static. Kept narrow (3 props) and referenced via tokens only.
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

function ProjectDetail({ project, onClose, onDelete, onEdit }: {
  project: Project;
  onClose: () => void;
  onDelete: () => void;
  onEdit: () => void;
}): React.JSX.Element {
  const doneTasks = project.tasks.filter((t) => t.status === 'done').length;
  const totalTasks = project.tasks.length;

  return (
    <ModalShell onClose={onClose} width="xl">
      <Stack gap="xl">
        {/* Header */}
        <Stack direction="horizontal" justify="space-between" align="start">
          <Stack gap="xs">
            <Text as="p" size="lg" weight="bold">{project.name}</Text>
            <Text as="p" size="sm" tone="secondary">
              {project.description}
            </Text>
          </Stack>
          <Stack direction="horizontal" gap="xs" align="center">
            <Badge variant={projectBadge(project.status)}>{project.status}</Badge>
            <IconButton icon="edit" size="sm" onClick={onEdit} aria-label="Edit project" />
            <IconButton icon="trash" size="sm" onClick={onDelete} aria-label="Delete project" />
          </Stack>
        </Stack>

        {/* Overview */}
        <DisclosureSection title="Overview" defaultOpen variant="flat">
          <Stack gap="md">
            <Stack gap="xs">
              <Stack direction="horizontal" justify="space-between">
                <Text size="sm" tone="secondary">Progress</Text>
                <Text size="xs" family="mono" tone="muted">
                  {doneTasks}/{totalTasks} tasks
                </Text>
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
                <span key={tag} style={tagChipStyle}>{tag}</span>
              ))}
            </Stack>
          </Stack>
        </DisclosureSection>

        {/* Tasks */}
        <DisclosureSection
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
        </DisclosureSection>
      </Stack>
    </ModalShell>
  );
}

// ProjectEditModal — canonical FormLayout-inside-ModalShell pattern. The modal
// owns the dialog chrome; FormLayout owns the section headers, dirty-state
// gating, and the sticky action bar (container-sticky so the bar pins to the
// modal body instead of the viewport).
function ProjectEditModal({ project, onClose, onSave }: {
  project: Project;
  onClose: () => void;
  onSave: (patch: Pick<Project, 'name' | 'description' | 'status' | 'tags'>) => void;
}): React.JSX.Element {
  const [name, setName] = useState(project.name);
  const [description, setDescription] = useState(project.description);
  const [status, setStatus] = useState<Project['status']>(project.status);
  const [tagsText, setTagsText] = useState(project.tags.join(', '));

  const handleSave = async (): Promise<void> => {
    await new Promise((resolve) => setTimeout(resolve, 300));
    onSave({
      name,
      description,
      status,
      tags: tagsText.split(',').map((t) => t.trim()).filter((t) => t.length > 0),
    });
    onClose();
  };

  return (
    <ModalShell onClose={onClose} width="lg">
      <FormLayout.Root onSave={handleSave} onCancel={onClose} sticky="container">
        <FormLayout.Header
          title={`Edit ${project.name}`}
          description="Update project metadata. Changes apply immediately on save."
        />

        <FormLayout.DirtyOnChange>
          <FormLayout.Section>
            <FormLayout.SectionHeader
              title="General"
              description="Name and description visible across the workspace."
            />
            <FormLayout.SectionBody>
              <Field label="Name" required>
                <Input value={name} onChange={(e) => setName(e.target.value)} />
              </Field>
              <Field label="Description">
                <Textarea
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  rows={3}
                />
              </Field>
            </FormLayout.SectionBody>
          </FormLayout.Section>

          <FormLayout.Section>
            <FormLayout.SectionHeader
              title="Status"
              description="Used to filter the project list and drive automation."
            />
            <FormLayout.SectionBody>
              <Field label="Project status">
                <Select.Root
                  value={status}
                  onValueChange={(v) => setStatus(v as Project['status'])}
                >
                  <Select.Trigger>
                    <Select.Value />
                  </Select.Trigger>
                  <Select.Content>
                    <Select.Item value="planning">Planning</Select.Item>
                    <Select.Item value="active">Active</Select.Item>
                    <Select.Item value="complete">Complete</Select.Item>
                  </Select.Content>
                </Select.Root>
              </Field>
              <Field label="Tags" help="Comma-separated. Used for filtering and search.">
                <Input
                  value={tagsText}
                  onChange={(e) => setTagsText(e.target.value)}
                  placeholder="design, frontend, docs"
                />
              </Field>
            </FormLayout.SectionBody>
          </FormLayout.Section>
        </FormLayout.DirtyOnChange>

        <FormLayout.Actions>
          <FormLayout.CancelButton />
          <FormLayout.SaveButton>Save changes</FormLayout.SaveButton>
        </FormLayout.Actions>
      </FormLayout.Root>
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
  const [editingProject, setEditingProject] = useState<Project | null>(null);
  const [deleteTarget, setDeleteTarget] = useState<string | null>(null);
  const [page, setPage] = useState(1);

  const totalPages = Math.ceil(projects.length / PAGE_SIZE);
  const paginated = projects.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

  const handleDelete = async (): Promise<void> => {
    setProjects((prev) => prev.filter((p) => p.name !== deleteTarget));
    setDeleteTarget(null);
    setSelectedProject(null);
  };

  const handleSaveProject = (patch: Pick<Project, 'name' | 'description' | 'status' | 'tags'>): void => {
    if (editingProject === null) return;
    setProjects((prev) =>
      prev.map((p) => (p.id === editingProject.id ? { ...p, ...patch } : p)),
    );
    // Keep the detail modal in sync if the user opens it again.
    setSelectedProject((prev) => (prev && prev.id === editingProject.id ? { ...prev, ...patch } : prev));
  };

  const navItems: { icon: IconName; view: View; label: string }[] = [
    { icon: 'menu', view: 'projects', label: 'Projects' },
    { icon: 'check-circle', view: 'archived', label: 'Archived' },
    { icon: 'settings', view: 'settings', label: 'Settings' },
  ];

  return (
    // Allowlist: hub shell pin-height so the viewport stays stable while
    // switching views. Pure layout, no text semantics.
    <div style={{ minHeight: 500 }}>
      <Stack direction="horizontal" gap="md">
        {/* Sidebar navigation — allowlist: consumer-owned nav pill column with
            panel background. Pure layout wrapper around the NavButton group. */}
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

        {/* Main content — allowlist: flex-1 main column next to the fixed
            sidebar. `minWidth: 0` lets inner tables truncate correctly. */}
        <div style={{ flex: 1, minWidth: 0 }}>
          {/* Projects — DataTablePage compound */}
          {view === 'projects' && (
            <DataTablePage.Root rowCount={paginated.length}>
              <DataTablePage.Header
                title="Projects"
                subtitle={`${projects.length} project${projects.length !== 1 ? 's' : ''}`}
                trailing={
                  <Button size="sm">
                    <Icon name="plus" size="xs" /> New project
                  </Button>
                }
              />

              <DataTablePage.Table>
                <TableHeader>
                  <TableHeaderCell>Name</TableHeaderCell>
                  <TableHeaderCell>Status</TableHeaderCell>
                  <TableHeaderCell>Progress</TableHeaderCell>
                  <TableHeaderCell align="right">Tasks</TableHeaderCell>
                </TableHeader>
                <TableBody>
                  {paginated.map((project) => (
                    <TableRow
                      key={project.id}
                      hoverable
                      onClick={() => setSelectedProject(project)}
                    >
                      <TableCell>
                        <Stack gap="xs">
                          <Text size="sm" weight="semibold">{project.name}</Text>
                          <Text size="xs" tone="secondary">{project.description}</Text>
                        </Stack>
                      </TableCell>
                      <TableCell>
                        <Badge variant={projectBadge(project.status)}>{project.status}</Badge>
                      </TableCell>
                      <TableCell>
                        {/* Allowlist: fixed-width progress track inside a flex
                            table cell. ProgressBar itself is 100%-width. */}
                        <div style={{ width: '8rem' }}>
                          <ProgressBar
                            segments={[
                              { value: project.progress || 1, color: project.progress > 0 ? 'success' : 'muted' },
                              { value: Math.max(100 - project.progress, 1), color: 'muted' },
                            ]}
                            height="sm"
                          />
                        </div>
                      </TableCell>
                      <TableCell align="right" muted>
                        {project.tasks.length}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </DataTablePage.Table>

              <DataTablePage.Pagination
                page={page}
                totalPages={totalPages}
                total={projects.length}
                onPageChange={setPage}
              />

              <DataTablePage.Empty
                icon="check-circle"
                message="No projects yet. Create your first one to get started."
              />
            </DataTablePage.Root>
          )}

          {/* Archived */}
          {view === 'archived' && (
            <Stack gap="xl">
              <Header level="page" title="Archived" subtitle="Completed and archived projects" />
              <EmptyState icon="check-circle" message="No archived projects yet" variant="card" />
            </Stack>
          )}

          {/* Settings */}
          {view === 'settings' && (
            <Stack gap="xl">
              <Header level="page" title="Settings" subtitle="Workspace configuration" />

              <Card>
                <Stack gap="lg">
                  <Text size="sm" weight="semibold">Appearance</Text>
                  <ThemePicker />
                </Stack>
              </Card>

              <Card>
                <Stack gap="md">
                  <Text size="sm" weight="semibold" tone="error">
                    Danger zone
                  </Text>
                  <Stack direction="horizontal" justify="space-between" align="center">
                    <Stack gap="xs">
                      <Text size="sm">Delete workspace</Text>
                      <Text size="xs" tone="muted">
                        Permanently remove this workspace and all its data
                      </Text>
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
            onEdit={() => {
              setEditingProject(selectedProject);
              setSelectedProject(null);
            }}
          />
        )}

        {/* Project edit modal — FormLayout-inside-ModalShell */}
        {editingProject && (
          <ProjectEditModal
            project={editingProject}
            onClose={() => setEditingProject(null)}
            onSave={handleSaveProject}
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
