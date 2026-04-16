import { useState, type ReactNode } from 'react';
import {
  Stack, Badge, SegmentedControl, semantic as t,
  Table, TableHeader, TableHeaderCell, TableBody, TableRow, TableCell,
} from '@4lt7ab/ui';

// ---------------------------------------------------------------------------
// PropMeta — metadata for a single component prop
// ---------------------------------------------------------------------------

export interface PropMeta {
  /** Prop name as it appears in the interface. */
  name: string;
  /** Human-readable type string, e.g. "'sm' | 'md' | 'lg'" */
  type: string;
  /** Default value as a string, e.g. "'md'" or "false". Omit for required props with no default. */
  default?: string;
  /** Whether the prop is required. */
  required?: boolean;
  /** One-line description. */
  description: string;
}

// ---------------------------------------------------------------------------
// PropsTable — renders a table of props from metadata
// ---------------------------------------------------------------------------

const codeMono: React.CSSProperties = {
  fontFamily: 'var(--font-mono)',
  fontSize: 'var(--font-size-xs)',
};

function PropsTable({ props }: { props: PropMeta[] }): React.JSX.Element {
  return (
    <Table variant="flat" density="sm">
      <TableHeader>
        <TableHeaderCell>Prop</TableHeaderCell>
        <TableHeaderCell>Type</TableHeaderCell>
        <TableHeaderCell>Default</TableHeaderCell>
        <TableHeaderCell>Description</TableHeaderCell>
      </TableHeader>
      <TableBody>
        {props.map((p) => (
          <TableRow key={p.name}>
            <TableCell>
              <Stack direction="horizontal" gap="xs" align="center">
                <code style={{ ...codeMono, color: t.colorActionPrimary }}>{p.name}</code>
                {p.required && <Badge variant="warning" size="xs">required</Badge>}
              </Stack>
            </TableCell>
            <TableCell>
              <code style={{ ...codeMono, color: t.colorTextSecondary }}>{p.type}</code>
            </TableCell>
            <TableCell>
              {p.default
                ? <code style={{ ...codeMono, color: t.colorTextMuted }}>{p.default}</code>
                : <span style={{ color: t.colorTextMuted, fontSize: 'var(--font-size-xs)' }}>—</span>
              }
            </TableCell>
            <TableCell>
              <span style={{ fontSize: 'var(--font-size-sm)', color: t.colorText }}>{p.description}</span>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}

// ---------------------------------------------------------------------------
// PropDemo — a single prop example section
// ---------------------------------------------------------------------------

export function PropDemo({
  name,
  description,
  children,
}: {
  /** Prop name displayed as the section label. */
  name: string;
  /** Brief description of what this prop does. */
  description?: string;
  /** Live example(s) demonstrating the prop. */
  children: ReactNode;
}): React.JSX.Element {
  return (
    <Stack gap="sm">
      <Stack direction="horizontal" gap="xs" align="center">
        <code style={{
          fontFamily: 'var(--font-mono)',
          fontSize: 'var(--font-size-sm)',
          fontWeight: 600,
          color: t.colorText,
        }}>
          {name}
        </code>
      </Stack>
      {description && (
        <span style={{
          fontSize: 'var(--font-size-sm)',
          color: t.colorTextSecondary,
          lineHeight: 'var(--line-height-base)',
        }}>
          {description}
        </span>
      )}
      <div style={{
        padding: 'var(--space-md)',
        borderRadius: 'var(--radius-md)',
        background: `color-mix(in srgb, ${t.colorSurfaceRaised} 50%, transparent)`,
        border: `var(--border-width-default) solid color-mix(in srgb, ${t.colorBorder} 40%, transparent)`,
      }}>
        {children}
      </div>
    </Stack>
  );
}

// ---------------------------------------------------------------------------
// DocBlock — top-level documentation wrapper with view toggle
// ---------------------------------------------------------------------------

const VIEW_SEGMENTS = [
  { value: 'examples', label: 'Examples', icon: 'eye' as const },
  { value: 'api', label: 'API', icon: 'menu' as const },
];

export function DocBlock({
  props,
  children,
}: {
  /** Prop metadata for the API table view. */
  props: PropMeta[];
  /** PropDemo sections for the examples view. */
  children: ReactNode;
}): React.JSX.Element {
  const [view, setView] = useState('examples');

  return (
    <Stack gap="lg">
      {/* View toggle */}
      <div style={{ alignSelf: 'flex-start' }}>
        <SegmentedControl
          segments={VIEW_SEGMENTS}
          value={view}
          onChange={setView}
          size="sm"
        />
      </div>

      {/* Content */}
      {view === 'api' ? (
        <PropsTable props={props} />
      ) : (
        <Stack gap="lg">
          {children}
        </Stack>
      )}
    </Stack>
  );
}
