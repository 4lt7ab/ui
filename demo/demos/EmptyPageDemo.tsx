import { EmptyPage, Button, Icon, Stack } from '@4lt7ab/ui';
import { DocBlock, PropDemo, type PropMeta } from '../components/DocBlock';

const props: PropMeta[] = [
  {
    name: 'EmptyPage.Root',
    type: "{ level?: 'page' | 'section'; 'aria-label'?: string; children }",
    description:
      "Full-page zero-state container. level='page' → <h1> + hero padding (default); level='section' → <h2> + section padding. Sets <section aria-labelledby={Title.id}> when no aria-label is provided.",
  },
  {
    name: 'EmptyPage.Icon',
    type: '{ children: ReactNode }',
    description:
      'Hero icon slot — consumer passes <Icon size="xl" /> or custom illustration. Wrapper is aria-hidden; Title carries the label.',
  },
  {
    name: 'EmptyPage.Title',
    type: '{ children: ReactNode }',
    description: 'Heading. Renders <h1> when Root level is "page", <h2> when "section".',
  },
  {
    name: 'EmptyPage.Description',
    type: '{ children: ReactNode }',
    description: 'Muted <p> body copy. Max-width set for readable wrapping.',
  },
  {
    name: 'EmptyPage.Actions',
    type: '{ children }',
    description: 'Primary + secondary action row. Consumer composes <Button>s; organism does not preset variants.',
  },
  {
    name: 'EmptyPage.Tips',
    type: "{ 'aria-label'?: string; children }",
    description:
      'Optional row of tip chips. Renders null when it has zero Tip children — safe to map over an empty array. Default aria-label is "Getting started".',
  },
  {
    name: 'EmptyPage.Tip',
    type: '{ icon?: IconName; asChild?: boolean; children }',
    description:
      'Single tip entry. Renders a styled <li>. asChild slots a consumer <a> or router Link as the only child of the <li> — consumer owns the inner content (including any icon).',
  },
];

export function EmptyPageDemo(): React.JSX.Element {
  return (
    <DocBlock props={props}>
      <PropDemo
        name="level='page' (default)"
        description="Full hero treatment: <h1> title, generous vertical padding, centred layout. Typical use: empty app viewport (<AppShell.Main>) or a landing zero state."
      >
        <EmptyPage.Root>
          <EmptyPage.Icon>
            <Icon name="edit" size="xl" />
          </EmptyPage.Icon>
          <EmptyPage.Title>No projects yet</EmptyPage.Title>
          <EmptyPage.Description>
            Spin up your first project to see it here. Projects group tasks, notes, and
            references together so you can focus on one thing at a time.
          </EmptyPage.Description>
          <EmptyPage.Actions>
            <Button variant="primary">Create project</Button>
            <Button variant="secondary">Import from CSV</Button>
          </EmptyPage.Actions>
          <EmptyPage.Tips>
            <EmptyPage.Tip icon="info">Start from a template</EmptyPage.Tip>
            <EmptyPage.Tip icon="search">Explore community projects</EmptyPage.Tip>
            <EmptyPage.Tip icon="external-link" asChild>
              <a href="#docs" onClick={(e) => e.preventDefault()}>
                Read the docs
              </a>
            </EmptyPage.Tip>
          </EmptyPage.Tips>
        </EmptyPage.Root>
      </PropDemo>

      <PropDemo
        name="level='section'"
        description="Smaller treatment: <h2> title, reduced padding. Fits inside a DataTablePage or any section-scoped empty slot without overwhelming its container."
      >
        <EmptyPage.Root level="section">
          <EmptyPage.Icon>
            <Icon name="search" size="lg" />
          </EmptyPage.Icon>
          <EmptyPage.Title>No results</EmptyPage.Title>
          <EmptyPage.Description>
            Try broadening your filters or clearing the search.
          </EmptyPage.Description>
          <EmptyPage.Actions>
            <Button variant="secondary">Clear filters</Button>
          </EmptyPage.Actions>
        </EmptyPage.Root>
      </PropDemo>

      <PropDemo
        name="Tips auto-hides when empty"
        description="An empty Tip array renders nothing — no orphan border, no gap. Safe to pass a mapped array that may be empty."
      >
        <Stack gap="lg">
          <EmptyPage.Root level="section">
            <EmptyPage.Title>Inbox zero</EmptyPage.Title>
            <EmptyPage.Description>You're all caught up.</EmptyPage.Description>
            {/* An empty array passed to Tips leaves no trace in the DOM. */}
            <EmptyPage.Tips>{[].map((t) => <EmptyPage.Tip key={t}>{t}</EmptyPage.Tip>)}</EmptyPage.Tips>
          </EmptyPage.Root>
        </Stack>
      </PropDemo>

      <PropDemo
        name="Minimal (Title only)"
        description="Every slot after Root and Title is optional. A bare Title is a valid zero state."
      >
        <EmptyPage.Root level="section">
          <EmptyPage.Title>Nothing here yet</EmptyPage.Title>
        </EmptyPage.Root>
      </PropDemo>
    </DocBlock>
  );
}
