import { useState, type ReactNode } from 'react';
import { Card, Badge, Button, Stack } from '@4lt7ab/ui';
import { semantic as t, useDisclosure } from '@4lt7ab/core';
import type { UseDisclosureOptions } from '@4lt7ab/core';
import { IconChevronRight } from '@4lt7ab/ui';
import { DocBlock, PropDemo, type PropMeta } from '../components/DocBlock';

// ---------------------------------------------------------------------------
// Disclosure primitive rebuilt as a Card + useDisclosure composition.
// This replaces the retired ExpandableCard. Consumers own the chevron,
// the label, and any header action; the hook owns state and ARIA wiring.
// ---------------------------------------------------------------------------

interface DisclosureCardProps extends UseDisclosureOptions {
  title: string;
  children: ReactNode;
  headerAction?: ReactNode;
}

function DisclosureCard({ title, children, headerAction, ...options }: DisclosureCardProps): React.JSX.Element {
  const { open, triggerProps, contentProps } = useDisclosure(options);

  return (
    <Card padding="xs">
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

const props: PropMeta[] = [
  { name: 'defaultOpen', type: 'boolean', default: 'false', description: 'useDisclosure option. Initial open state when uncontrolled.' },
  { name: 'open', type: 'boolean', description: 'useDisclosure option. Controlled open state; when provided, the hook is controlled.' },
  { name: 'onOpenChange', type: '(open: boolean) => void', description: 'useDisclosure option. Fires with the next open value.' },
  { name: 'triggerProps', type: "{ 'aria-expanded', 'aria-controls', onClick }", description: 'Return value. Spread onto the trigger button.' },
  { name: 'contentProps', type: "{ id, role: 'region', hidden }", description: 'Return value. Spread onto the collapsible region.' },
  { name: 'open / onToggle / onOpen / onClose', type: 'boolean | () => void', description: 'Return value. State + handlers if you need them directly.' },
];

export function ExpandableCardDemo(): React.JSX.Element {
  const [controlled, setControlled] = useState(false);

  return (
    <DocBlock props={props}>
      <PropDemo name="composition" description="ExpandableCard was retired in 0.4.0. The replacement is Card + useDisclosure (from @4lt7ab/core). The hook owns state + ARIA wiring; the consumer composes the chevron, label, and body.">
        <DisclosureCard title="Project Details">
          <p style={{ margin: 0, fontSize: t.fontSizeSm, color: t.colorTextSecondary }}>
            This content is hidden by default and revealed when the header is clicked.
            useDisclosure wires aria-expanded, aria-controls, and hidden automatically.
          </p>
        </DisclosureCard>
      </PropDemo>

      <PropDemo name="defaultOpen" description="Pass useDisclosure({ defaultOpen: true }) for uncontrolled 'starts open' behavior.">
        <DisclosureCard title="Release Notes" defaultOpen>
          <Stack gap="xs">
            <p style={{ margin: 0, fontSize: t.fontSizeSm, color: t.colorTextSecondary }}>
              v0.4.0 — ExpandableCard retired; useDisclosure hook extracted to @4lt7ab/core.
            </p>
            <p style={{ margin: 0, fontSize: t.fontSizeSm, color: t.colorTextSecondary }}>
              v0.3.0 — ThemeSurface, StatCard, FormModal, ShortcutHelpModal retired.
            </p>
          </Stack>
        </DisclosureCard>
      </PropDemo>

      <PropDemo name="open / onOpenChange" description="Controlled mode. Pass open + onOpenChange; the hook defers to the parent.">
        <Stack gap="sm">
          <Button size="sm" onClick={() => setControlled((o) => !o)}>
            {controlled ? 'Close' : 'Open'} externally
          </Button>
          <DisclosureCard title="Controlled Card" open={controlled} onOpenChange={setControlled}>
            <p style={{ margin: 0, fontSize: t.fontSizeSm, color: t.colorTextSecondary }}>
              Controlled via the open prop and toggled by an external button.
            </p>
          </DisclosureCard>
        </Stack>
      </PropDemo>

      <PropDemo name="headerAction slot" description="The composition owns its own slots — drop any element next to the title.">
        <DisclosureCard title="Active Tasks" defaultOpen headerAction={<Badge variant="info">3 items</Badge>}>
          <Stack gap="xs">
            <span style={{ fontSize: t.fontSizeSm }}>Review pull request #42</span>
            <span style={{ fontSize: t.fontSizeSm }}>Update documentation</span>
            <span style={{ fontSize: t.fontSizeSm }}>Fix CI pipeline</span>
          </Stack>
        </DisclosureCard>
      </PropDemo>
    </DocBlock>
  );
}
