import { useState } from 'react';
import { PageShell, Card, Stack, PageHeader, SegmentedControl } from '@4lt7ab/ui';
import { DocBlock, PropDemo, type PropMeta } from '../components/DocBlock';

const props: PropMeta[] = [
  { name: 'children', type: 'ReactNode', required: true, description: 'Page content.' },
  { name: 'maxWidth', type: 'number', default: '1100', description: 'Maximum width of the content area in pixels.' },
  { name: 'gap', type: "'sm' | 'md' | 'lg'", default: "'md'", description: 'Gap between child elements.' },
  { name: 'topPadding', type: 'boolean', default: 'true', description: 'Whether to add top padding.' },
];

const shellFrame: React.CSSProperties = {
  display: 'flex',
  height: 320,
  border: '1px dashed var(--color-border)',
  borderRadius: 'var(--radius-md)',
  overflow: 'hidden',
};

export function PageShellDemo(): React.JSX.Element {
  const [gap, setGap] = useState<'sm' | 'md' | 'lg'>('md');

  return (
    <DocBlock props={props}>
      <PropDemo name="gap" description="Controls the vertical spacing between child elements inside the shell.">
        <Stack gap="sm">
          <SegmentedControl
            segments={[
              { value: 'sm', label: 'Small' },
              { value: 'md', label: 'Medium' },
              { value: 'lg', label: 'Large' },
            ]}
            value={gap}
            onChange={(v) => setGap(v as 'sm' | 'md' | 'lg')}
          />
          <div style={shellFrame}>
            <PageShell gap={gap} maxWidth={720}>
              <PageHeader title="Dashboard" subtitle="Overview of recent activity" />
              <Card>
                <Stack gap="sm">
                  <h4 style={{ margin: 0 }}>Project Alpha</h4>
                  <p style={{ margin: 0, color: 'var(--color-text-muted)', fontSize: 'var(--font-size-sm)' }}>
                    Last updated 2 hours ago. Build passing, 3 open issues.
                  </p>
                </Stack>
              </Card>
              <Card>
                <Stack gap="sm">
                  <h4 style={{ margin: 0 }}>Project Beta</h4>
                  <p style={{ margin: 0, color: 'var(--color-text-muted)', fontSize: 'var(--font-size-sm)' }}>
                    Deployed to staging. Awaiting QA review.
                  </p>
                </Stack>
              </Card>
              <Card>
                <Stack gap="sm">
                  <h4 style={{ margin: 0 }}>Project Gamma</h4>
                  <p style={{ margin: 0, color: 'var(--color-text-muted)', fontSize: 'var(--font-size-sm)' }}>
                    In planning phase. Kickoff scheduled for next week.
                  </p>
                </Stack>
              </Card>
            </PageShell>
          </div>
        </Stack>
      </PropDemo>

      <PropDemo name="maxWidth" description="Maximum width of the content area in pixels. The shell centers itself within its parent.">
        <div style={shellFrame}>
          <PageShell maxWidth={500}>
            <Card>Narrow shell (maxWidth=500)</Card>
            <Card>Content stays centered</Card>
          </PageShell>
        </div>
      </PropDemo>

      <PropDemo name="topPadding" description="When false, content starts flush against the top edge of the shell.">
        <div style={{ ...shellFrame, height: 200 }}>
          <PageShell topPadding={false} maxWidth={600}>
            <Card>Content flush to the top edge</Card>
            <Card>Second card</Card>
          </PageShell>
        </div>
      </PropDemo>
    </DocBlock>
  );
}
