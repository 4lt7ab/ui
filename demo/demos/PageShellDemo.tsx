import { useState } from 'react';
import { PageShell, Card, Stack, PageHeader, Button, SegmentedControl } from '@4lt7ab/ui';

export function PageShellDemo(): React.JSX.Element {
  const [gap, setGap] = useState<'sm' | 'md' | 'lg'>('md');

  return (
    <Stack gap="lg">
      <Stack gap="sm">
        <h3 style={{ margin: 0, fontSize: '1rem', fontWeight: 600 }}>Gap control</h3>
        <SegmentedControl
          options={[
            { value: 'sm', label: 'Small' },
            { value: 'md', label: 'Medium' },
            { value: 'lg', label: 'Large' },
          ]}
          value={gap}
          onChange={(v) => setGap(v as 'sm' | 'md' | 'lg')}
        />
      </Stack>

      <div
        style={{
          display: 'flex',
          height: 420,
          border: '1px dashed var(--color-border)',
          borderRadius: 'var(--radius-md)',
          overflow: 'hidden',
        }}
      >
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
          <Card>
            <Stack gap="sm">
              <h4 style={{ margin: 0 }}>Project Delta</h4>
              <p style={{ margin: 0, color: 'var(--color-text-muted)', fontSize: 'var(--font-size-sm)' }}>
                Completed. Final report submitted.
              </p>
            </Stack>
          </Card>
          <Card>
            <Stack gap="sm">
              <h4 style={{ margin: 0 }}>Project Epsilon</h4>
              <p style={{ margin: 0, color: 'var(--color-text-muted)', fontSize: 'var(--font-size-sm)' }}>
                On hold pending budget approval.
              </p>
            </Stack>
          </Card>
        </PageShell>
      </div>

      <Stack gap="sm">
        <h3 style={{ margin: 0, fontSize: '1rem', fontWeight: 600 }}>Without top padding</h3>
        <div
          style={{
            display: 'flex',
            height: 200,
            border: '1px dashed var(--color-border)',
            borderRadius: 'var(--radius-md)',
            overflow: 'hidden',
          }}
        >
          <PageShell topPadding={false} maxWidth={600}>
            <Card>Content flush to the top edge</Card>
            <Card>Second card</Card>
          </PageShell>
        </div>
      </Stack>
    </Stack>
  );
}
