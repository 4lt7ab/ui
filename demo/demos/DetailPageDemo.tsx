import { useState } from 'react';
import {
  Badge,
  Button,
  DetailPage,
  Stack,
  TabStrip,
  Surface,
} from '@4lt7ab/ui';
import { DocBlock, PropDemo, type PropMeta } from '../components/DocBlock';

// ---------------------------------------------------------------------------
// Props metadata
// ---------------------------------------------------------------------------

const props: PropMeta[] = [
  {
    name: 'DetailPage.Root',
    type: "{ 'aria-label'?: string; children }",
    description:
      'Outer <section> with optional two-column grid (main + RightPanel). Sets aria-labelledby to the Header title when no aria-label is provided. JSX order is visual order — except DetailPage.Actions, which portals into the Header trailing slot.',
  },
  {
    name: 'DetailPage.Header',
    type: '{ title; subtitle?; indicator?; onBack?; backLabel? }',
    description:
      'Renders <h1> via <Header level="page"> plus an optional left-aligned <IconButton icon="arrow-left"> when onBack is set (default aria-label "Back", override with backLabel). Consumers own routing — the handler just fires on click.',
  },
  {
    name: 'DetailPage.Meta',
    type: '{ children }',
    description:
      'Semantic <dl> rendered as a two-column grid. Children must be <DetailPage.MetaItem>; other children render but trigger a dev warning (they lose the <dt>/<dd> association).',
  },
  {
    name: 'DetailPage.MetaItem',
    type: '{ label: string; children: ReactNode }',
    description:
      'One <dt>/<dd> pair. Label is the key (muted <dt>); children is the value (<dd>) — plain text, a Badge, a relative-time span, anything.',
  },
  {
    name: 'DetailPage.Body',
    type: "{ 'aria-label'?: string; id?; children }",
    description:
      'Main content region. Renders <main> when standalone; downgrades to <div> inside <AppShell.Main> so the page keeps exactly one <main> landmark. Compose with TabStrip / Stack / Surface for tabbed or sectioned bodies.',
  },
  {
    name: 'DetailPage.Actions',
    type: '{ children }',
    description:
      'Edit / Delete / Share / Publish buttons. Written as a sibling of Header in JSX; portals its children into the Header trailing slot at render time. Ergonomics: consumers think of actions as their own thing, not a child-of-header prop.',
  },
  {
    name: 'DetailPage.RightPanel',
    type: "{ 'aria-label'?: string; children }",
    description:
      "Optional right column <aside> (default aria-label 'Details'). Width comes from sizeRightPanelDefault. Consumer composes content — activity feeds, metadata tables, tip cards.",
  },
];

// ---------------------------------------------------------------------------
// Demo
// ---------------------------------------------------------------------------

const TABS = [
  { key: 'overview', label: 'Overview' },
  { key: 'activity', label: 'Activity' },
  { key: 'files', label: 'Files' },
];

export function DetailPageDemo(): React.JSX.Element {
  const [tab, setTab] = useState<string>('overview');
  const [backCount, setBackCount] = useState<number>(0);

  return (
    <DocBlock props={props}>
      <PropDemo
        name="Task detail — full compound with tabs + right panel"
        description="The canonical DetailPage layout. Back button wires onBack; Actions declared as a sibling of Header portal into the trailing slot; Meta renders semantic <dl>/<dt>/<dd>; Body is a <main> when DetailPage is standalone (no AppShell)."
      >
        <DetailPage.Root>
          <DetailPage.Header
            title="Ship DetailPage organism"
            subtitle="patterns-v06 · feature"
            indicator={<Badge variant="success">In progress</Badge>}
            onBack={() => setBackCount((n) => n + 1)}
          />
          <DetailPage.Actions>
            <Button variant="secondary">Edit</Button>
            <Button variant="primary">Publish</Button>
          </DetailPage.Actions>
          <DetailPage.Meta>
            <DetailPage.MetaItem label="Status">
              <Badge variant="success">In progress</Badge>
            </DetailPage.MetaItem>
            <DetailPage.MetaItem label="Owner">Alex</DetailPage.MetaItem>
            <DetailPage.MetaItem label="Created">2 days ago</DetailPage.MetaItem>
            <DetailPage.MetaItem label="Effort">medium</DetailPage.MetaItem>
            <DetailPage.MetaItem label="Impact">high</DetailPage.MetaItem>
          </DetailPage.Meta>
          <DetailPage.Body>
            <TabStrip
              tabs={TABS}
              activeKey={tab}
              onChange={(k) => {
                if (k !== null) setTab(k);
              }}
            />
            {tab === 'overview' && (
              <Surface level="raised" padding="md">
                <Stack gap="sm">
                  <span style={{ fontWeight: 600 }}>Overview</span>
                  <p style={{ margin: 0, color: 'var(--color-text-muted)' }}>
                    Every app with entities (tasks, projects, users, documents)
                    hand-rolls the same detail-view shell. DetailPage collapses
                    the assembly into a compound whose parts forward to the
                    underlying primitives. Actions declared as a sibling of
                    Header portal into the trailing slot automatically — try
                    reading the JSX source and comparing to the rendered output.
                  </p>
                  <span style={{ color: 'var(--color-text-muted)', fontSize: 'var(--font-size-sm)' }}>
                    Back button clicked {backCount} time{backCount === 1 ? '' : 's'}.
                  </span>
                </Stack>
              </Surface>
            )}
            {tab === 'activity' && (
              <Surface level="raised" padding="md">
                <Stack gap="sm">
                  <span style={{ fontWeight: 600 }}>Activity</span>
                  <span style={{ color: 'var(--color-text-muted)', fontSize: 'var(--font-size-sm)' }}>
                    Tab bodies are plain composition — DetailPage.Body doesn't
                    presume a tabbed layout; Stack, Surface, and TabStrip are
                    all composed by the consumer.
                  </span>
                </Stack>
              </Surface>
            )}
            {tab === 'files' && (
              <Surface level="raised" padding="md">
                <span style={{ color: 'var(--color-text-muted)' }}>
                  No files attached yet.
                </span>
              </Surface>
            )}
          </DetailPage.Body>
          <DetailPage.RightPanel aria-label="Activity">
            <Stack gap="sm">
              <span style={{ fontWeight: 600 }}>Recent activity</span>
              <span style={{ color: 'var(--color-text-muted)', fontSize: 'var(--font-size-sm)' }}>
                Alex · updated status · 2h ago
              </span>
              <span style={{ color: 'var(--color-text-muted)', fontSize: 'var(--font-size-sm)' }}>
                Sam · added owner · 6h ago
              </span>
              <span style={{ color: 'var(--color-text-muted)', fontSize: 'var(--font-size-sm)' }}>
                Alex · created · 2d ago
              </span>
            </Stack>
          </DetailPage.RightPanel>
        </DetailPage.Root>
      </PropDemo>

      <PropDemo
        name="Minimal — no back button, no RightPanel"
        description="Header / Meta / Body are the minimum meaningful detail page. Actions and RightPanel are optional; the grid collapses to one column when RightPanel is absent."
      >
        <DetailPage.Root aria-label="User profile detail">
          <DetailPage.Header
            title="Alex Rivera"
            subtitle="engineer · remote"
          />
          <DetailPage.Meta>
            <DetailPage.MetaItem label="Email">alex@example.com</DetailPage.MetaItem>
            <DetailPage.MetaItem label="Timezone">America/Los_Angeles</DetailPage.MetaItem>
            <DetailPage.MetaItem label="Joined">March 2024</DetailPage.MetaItem>
          </DetailPage.Meta>
          <DetailPage.Body>
            <Surface level="raised" padding="md">
              <Stack gap="sm">
                <span style={{ fontWeight: 600 }}>About</span>
                <span style={{ color: 'var(--color-text-muted)', fontSize: 'var(--font-size-sm)' }}>
                  Consumer composes body content freely — TabStrip, Markdown,
                  Prose, Table, whatever the detail page calls for.
                </span>
              </Stack>
            </Surface>
          </DetailPage.Body>
        </DetailPage.Root>
      </PropDemo>

      <PropDemo
        name="Actions portal reads as a sibling of Header"
        description="Actions is written below Header in the JSX, but the portal reparents its children into Header's trailing slot. Inspect the rendered DOM — the two buttons land inside the header row, not after it."
      >
        <DetailPage.Root aria-label="Portal demo">
          <DetailPage.Header title="Portal reparent" subtitle="Actions → Header trailing slot" />
          <DetailPage.Meta>
            <DetailPage.MetaItem label="Pattern">
              createPortal into context-registered slot
            </DetailPage.MetaItem>
          </DetailPage.Meta>
          <DetailPage.Actions>
            <Button variant="secondary">Discard</Button>
            <Button variant="primary">Save</Button>
          </DetailPage.Actions>
          <DetailPage.Body>
            <p style={{ margin: 0, color: 'var(--color-text-muted)' }}>
              Body content.
            </p>
          </DetailPage.Body>
        </DetailPage.Root>
      </PropDemo>
    </DocBlock>
  );
}
