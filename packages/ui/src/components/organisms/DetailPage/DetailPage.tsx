import {
  Children,
  createContext,
  forwardRef,
  isValidElement,
  useCallback,
  useContext,
  useId,
  useMemo,
  useState,
} from 'react';
import { createPortal } from 'react-dom';
import { semantic as t } from '@4lt7ab/core';
import type { CSSProperties, ReactNode } from 'react';
import type { BaseComponentProps } from '../../../types';
import { Header } from '../../molecules/Header';
import { IconButton } from '../../atoms/IconButton';
import { useIsInsideAppShell } from '../AppShell';

// ---------------------------------------------------------------------------
// Compound context
// ---------------------------------------------------------------------------
//
// DetailPage is the entity-detail envelope. Every app with entities
// (tasks, projects, users, documents) hand-rolls the same shell today:
// title + metadata key/value block + tabbed or sectioned body + actions +
// optional right panel. This organism collapses the assembly into a
// compound whose parts forward to the underlying primitives.
//
// Replaces the retired `<MetadataTable>` component (v0.4 component audit,
// `01KPE1EQB2T23FV6XH17APTD1T`) with a first-class `<DetailPage.Meta>` slot
// that renders semantic `<dl>/<dt>/<dd>` — instead of MetadataTable's
// opaque `items: { label, value }[]` prop bag.
//
// Per the layout-organism design doc (`01KPHCVPSKXJ6NDGA8BAC1A811`):
//
//   - Context is orphan-check + a portal slot ref for `Actions → Header`
//     reparenting. No shared state.
//   - JSX order is visual order for everything except `DetailPage.Actions`,
//     which internally portals into the Header's trailing slot. The
//     ergonomic gain (consumer writes Actions as a sibling of Header, not
//     as a child prop) justifies the one reparent in the subtree.
//   - `DetailPage.Body` is a plain `<div>` when `<AppShell.Main>` already
//     provides the single `<main>` per page; `<main>` otherwise. The
//     decision is read from `useIsInsideAppShell()` — no prop needed.

interface DetailPageContextValue {
  /** DOM id of the title for Root's `aria-labelledby` wiring. */
  titleId: string;
  /** Portal target for `DetailPage.Actions`. Updated by Header's trailing
   * ref callback so Actions (mounted as a sibling of Header) can portal its
   * children into the trailing slot Header already renders. */
  actionsSlot: HTMLDivElement | null;
  /** Setter for `actionsSlot`; invoked by Header on mount. */
  setActionsSlot: (el: HTMLDivElement | null) => void;
}

const DetailPageContext = createContext<DetailPageContextValue | null>(null);

function useDetailPageContext(part: string): DetailPageContextValue {
  const ctx = useContext(DetailPageContext);
  if (ctx === null) {
    throw new Error(
      `[@4lt7ab/ui] <DetailPage.${part}> must be rendered inside <DetailPage.Root>.`,
    );
  }
  return ctx;
}

// ---------------------------------------------------------------------------
// Root
// ---------------------------------------------------------------------------

/** Props for {@link DetailPageRoot}. */
export interface DetailPageRootProps extends BaseComponentProps {
  /** Accessible label fallback for the outer `<section>`. When omitted,
   * Root's `aria-labelledby` points at the Header title (if a Header is
   * present). */
  'aria-label'?: string;
  /** Children — any combination of `<DetailPage.Header>`,
   * `<DetailPage.Meta>`, `<DetailPage.Body>`, `<DetailPage.Actions>`,
   * `<DetailPage.RightPanel>`. JSX order is visual order — except
   * `DetailPage.Actions`, which portals into the Header's trailing slot. */
  children?: ReactNode;
}

/**
 * Walk children and split the RightPanel out so Root can render a
 * two-column grid: everything else goes in the main column; a single
 * RightPanel (if present) goes in the side column.
 */
function splitChildren(children: ReactNode): {
  main: ReactNode[];
  rightPanel: ReactNode;
} {
  const main: ReactNode[] = [];
  let rightPanel: ReactNode = null;
  Children.forEach(children, (child) => {
    if (isValidElement(child) && child.type === DetailPageRightPanel) {
      rightPanel = child;
    } else {
      main.push(child);
    }
  });
  return { main, rightPanel };
}

export const DetailPageRoot: React.ForwardRefExoticComponent<
  Omit<DetailPageRootProps, 'ref'> & React.RefAttributes<HTMLElement>
> = forwardRef<HTMLElement, DetailPageRootProps>(function DetailPageRoot(
  { children, ...rest },
  ref,
): React.JSX.Element {
  const titleId = useId();
  const [actionsSlot, setActionsSlot] = useState<HTMLDivElement | null>(null);

  const value = useMemo<DetailPageContextValue>(
    () => ({
      titleId,
      actionsSlot,
      setActionsSlot,
    }),
    [titleId, actionsSlot],
  );

  const { main, rightPanel } = splitChildren(children);

  // Grid template flexes between one column (no RightPanel) and two
  // (main + fixed right panel). Consumer composes a Surface panel inside
  // RightPanel for the painted look.
  const gridTemplateColumns = rightPanel !== null ? `1fr ${t.sizeRightPanelDefault}` : '1fr';

  return (
    <DetailPageContext.Provider value={value}>
      <section
        ref={ref}
        id={rest.id}
        data-testid={rest['data-testid']}
        aria-label={rest['aria-label']}
        aria-labelledby={rest['aria-label'] ? undefined : titleId}
        style={{
          display: 'grid',
          gridTemplateColumns,
          gap: t.spaceLg,
          width: '100%',
          fontFamily: t.fontSans,
          color: t.colorText,
          boxSizing: 'border-box',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: t.spaceLg,
            minWidth: 0,
          }}
        >
          {main}
        </div>
        {rightPanel}
      </section>
    </DetailPageContext.Provider>
  );
});

// ---------------------------------------------------------------------------
// Header — title + optional back button + portal target for Actions
// ---------------------------------------------------------------------------

/** Props for {@link DetailPageHeader}. */
export interface DetailPageHeaderProps {
  /** Page title. Rendered as `<h1>` via the underlying `<Header>` primitive. */
  title: string;
  /** Optional subtitle rendered below the title in muted style. */
  subtitle?: string;
  /** Inline content rendered next to the title (e.g. `<Badge>`,
   * `<StatusDot>`). */
  indicator?: ReactNode;
  /** When set, renders a left-aligned `<IconButton>` with an arrow-left
   * icon and `aria-label={backLabel}`. Consumer owns routing — the handler
   * fires on click; the library never imports a router.
   *
   * Consumers wanting breadcrumbs compose them above `<DetailPage.Root>`
   * themselves; DetailPage does not ship a breadcrumb primitive. */
  onBack?: () => void;
  /** Accessible label for the back button. Ignored when `onBack` is
   * undefined.
   * @default 'Back'
   */
  backLabel?: string;
}

export function DetailPageHeader({
  title,
  subtitle,
  indicator,
  onBack,
  backLabel = 'Back',
}: DetailPageHeaderProps): React.JSX.Element {
  const { titleId, setActionsSlot } = useDetailPageContext('Header');

  // Ref callback on the trailing wrapper: when Header's trailing slot mounts,
  // register it as the portal target so `DetailPage.Actions` (mounted as a
  // sibling) can portal into it. Using the callback form means state updates
  // cleanly drive a re-render of `<Actions>` once the element is attached.
  const slotRefCb = useCallback(
    (el: HTMLDivElement | null) => {
      setActionsSlot(el);
    },
    [setActionsSlot],
  );

  // The trailing slot is always rendered (an empty div) so Actions has a
  // stable portal target regardless of whether the consumer provides any.
  // The div contributes no visible layout when empty.
  const trailingSlot = (
    <div
      ref={slotRefCb}
      data-detailpage-actions-slot=""
      style={{ display: 'flex', alignItems: 'center', gap: t.spaceSm }}
    />
  );

  // Back button (when onBack provided) renders to the left of the title via
  // a flex row that wraps the Header primitive. We don't patch Header to
  // add an onBack prop — a compact left-wrapper keeps the primitive clean.
  const headerWithTitleId = (
    <div id={titleId} style={{ flex: 1, minWidth: 0 }}>
      <Header
        level="page"
        title={title}
        subtitle={subtitle}
        indicator={indicator}
        trailing={trailingSlot}
      />
    </div>
  );

  if (onBack !== undefined) {
    return (
      <div
        style={{
          display: 'flex',
          alignItems: 'flex-end',
          gap: t.spaceMd,
          minWidth: 0,
        }}
      >
        <IconButton
          icon="arrow-left"
          aria-label={backLabel}
          onClick={onBack}
        />
        {headerWithTitleId}
      </div>
    );
  }

  return headerWithTitleId;
}

// ---------------------------------------------------------------------------
// Meta — semantic <dl> of key/value pairs. Children must be MetaItem.
// ---------------------------------------------------------------------------

/** Props for {@link DetailPageMeta}. */
export interface DetailPageMetaProps {
  /** Children — typically `<DetailPage.MetaItem>` entries. Non-MetaItem
   * children render but trigger a dev-mode console.warn once per mount. */
  children?: ReactNode;
}

// Warn-once-per-render guard for non-MetaItem children. The ADR calls out
// this pattern for compound children filtering — a non-MetaItem renders
// (so the consumer isn't blocked) but loses the semantic `<dt>/<dd>`
// association the Meta slot is meant to guarantee.
function validateMetaChildren(children: ReactNode): void {
  let warned = false;
  Children.forEach(children, (child) => {
    if (!isValidElement(child)) return;
    if (child.type !== DetailPageMetaItem && !warned) {
      warned = true;
      // eslint-disable-next-line no-console
      console.warn(
        '[@4lt7ab/ui] <DetailPage.Meta> expects <DetailPage.MetaItem> children for semantic <dt>/<dd> pairs. Other children will render but lose the key/value association.',
      );
    }
  });
}

export function DetailPageMeta({
  children,
}: DetailPageMetaProps): React.JSX.Element {
  useDetailPageContext('Meta');
  validateMetaChildren(children);
  return (
    <dl
      style={{
        display: 'grid',
        gridTemplateColumns: 'max-content 1fr',
        columnGap: t.spaceLg,
        rowGap: t.spaceSm,
        margin: 0,
        padding: 0,
        fontFamily: t.fontSans,
        fontSize: t.fontSizeSm,
      }}
    >
      {children}
    </dl>
  );
}

// ---------------------------------------------------------------------------
// MetaItem — one <dt>/<dd> pair inside Meta.
// ---------------------------------------------------------------------------

/** Props for {@link DetailPageMetaItem}. */
export interface DetailPageMetaItemProps {
  /** The key label, rendered as `<dt>` in muted style. */
  label: string;
  /** The value, rendered as `<dd>`. Accepts any ReactNode so consumers can
   * slot in Badges, relative-time components, or plain strings. */
  children: ReactNode;
}

export function DetailPageMetaItem({
  label,
  children,
}: DetailPageMetaItemProps): React.JSX.Element {
  useDetailPageContext('MetaItem');
  // Use React.Fragment-like dual elements so the outer <dl> keeps its
  // grid layout (each dt/dd lands in its own grid cell row).
  return (
    <>
      <dt
        style={{
          margin: 0,
          color: t.colorTextMuted,
          fontWeight: t.fontWeightMedium,
        }}
      >
        {label}
      </dt>
      <dd style={{ margin: 0, color: t.colorText }}>{children}</dd>
    </>
  );
}

// ---------------------------------------------------------------------------
// Body — <main> when standalone, <div> inside AppShell (exactly one <main>
// per page).
// ---------------------------------------------------------------------------

/** Props for {@link DetailPageBody}. */
export interface DetailPageBodyProps extends BaseComponentProps {
  /** Accessible label for the Body landmark when rendered as `<main>`.
   * Ignored when inside an `<AppShell>` (Body is a `<div>` there). */
  'aria-label'?: string;
  children?: ReactNode;
}

export function DetailPageBody({
  children,
  ...rest
}: DetailPageBodyProps): React.JSX.Element {
  useDetailPageContext('Body');
  const insideAppShell = useIsInsideAppShell();

  // AppShell.Main already provides the single <main> landmark. Downgrade
  // Body to a <div> there to keep "exactly one <main> per page" intact.
  const Tag = (insideAppShell ? 'div' : 'main') as keyof React.JSX.IntrinsicElements;

  return (
    <Tag
      id={rest.id}
      data-testid={rest['data-testid']}
      aria-label={insideAppShell ? undefined : rest['aria-label']}
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: t.spaceMd,
        minWidth: 0,
      }}
    >
      {children}
    </Tag>
  );
}

// ---------------------------------------------------------------------------
// Actions — portals its children into the Header's trailing slot.
// ---------------------------------------------------------------------------

/** Props for {@link DetailPageActions}. */
export interface DetailPageActionsProps {
  /** Action buttons — consumer composes `<Button>` / `<IconButton>` children.
   * Rendered via portal into the Header's trailing slot, so Actions reads
   * as a sibling of `<DetailPage.Header>` in JSX even though it ends up
   * inside the header row at render time.
   *
   * When `DetailPage.Header` is not present, Actions renders nothing
   * (there's no slot to target). */
  children?: ReactNode;
}

export function DetailPageActions({
  children,
}: DetailPageActionsProps): React.JSX.Element | null {
  const { actionsSlot } = useDetailPageContext('Actions');
  // First render happens before Header's ref callback fires, so actionsSlot
  // is null on mount. Return null until the portal target is attached; a
  // second render kicks in once the ref callback updates state.
  if (actionsSlot === null) return null;
  return createPortal(<>{children}</>, actionsSlot);
}

// ---------------------------------------------------------------------------
// RightPanel — optional <aside>.
// ---------------------------------------------------------------------------

/** Props for {@link DetailPageRightPanel}. */
export interface DetailPageRightPanelProps {
  /** Accessible label for the `<aside>` landmark.
   * @default 'Details'
   */
  'aria-label'?: string;
  children?: ReactNode;
}

export function DetailPageRightPanel({
  'aria-label': ariaLabel = 'Details',
  children,
}: DetailPageRightPanelProps): React.JSX.Element {
  useDetailPageContext('RightPanel');
  const style: CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    gap: t.spaceMd,
    padding: t.spaceMd,
    background: t.colorSurfacePanel,
    border: `${t.borderWidthDefault} solid ${t.colorBorder}`,
    borderRadius: t.radiusMd,
    minWidth: 0,
  };
  return (
    <aside aria-label={ariaLabel} style={style}>
      {children}
    </aside>
  );
}

// ---------------------------------------------------------------------------
// Compound export
// ---------------------------------------------------------------------------

/**
 * Entity-detail envelope — the shell every app with entities (tasks,
 * projects, users, documents) hand-rolls today. Compound slots for title +
 * back affordance + metadata (semantic `<dl>`) + main body + trailing
 * actions + optional right panel.
 *
 * `DetailPage.Actions` is the one reparenting exception in this organism's
 * JSX → DOM mapping: consumers write Actions as a sibling of Header, and
 * the organism portals its children into the Header's trailing slot. This
 * keeps action composition ergonomic (not nested inside a `trailing` prop)
 * while preserving the visual result.
 *
 * `DetailPage.Body` is a `<div>` when rendered inside `<AppShell.Main>`
 * (so the page keeps exactly one `<main>` landmark) and a `<main>` when
 * used standalone. No prop needed — the decision comes from
 * `useIsInsideAppShell()`.
 *
 * Replaces the retired `<MetadataTable>` component (v0.4 audit) with a
 * first-class `<DetailPage.Meta>` / `<DetailPage.MetaItem>` compound that
 * renders the semantic `<dl>/<dt>/<dd>` markup directly.
 *
 * @example
 * ```tsx
 * <DetailPage.Root>
 *   <DetailPage.Header
 *     title="Ship DetailPage"
 *     subtitle="organism · feature"
 *     onBack={() => history.back()}
 *   />
 *   <DetailPage.Actions>
 *     <Button variant="secondary">Edit</Button>
 *     <Button variant="primary">Publish</Button>
 *   </DetailPage.Actions>
 *   <DetailPage.Meta>
 *     <DetailPage.MetaItem label="Status">
 *       <Badge variant="success">In progress</Badge>
 *     </DetailPage.MetaItem>
 *     <DetailPage.MetaItem label="Created">2 days ago</DetailPage.MetaItem>
 *     <DetailPage.MetaItem label="Owner">Alex</DetailPage.MetaItem>
 *   </DetailPage.Meta>
 *   <DetailPage.Body>
 *     <TabStrip ... />
 *   </DetailPage.Body>
 *   <DetailPage.RightPanel>
 *     <h3>Activity</h3>
 *   </DetailPage.RightPanel>
 * </DetailPage.Root>
 * ```
 */
export const DetailPage = {
  Root: DetailPageRoot,
  Header: DetailPageHeader,
  Meta: DetailPageMeta,
  MetaItem: DetailPageMetaItem,
  Body: DetailPageBody,
  Actions: DetailPageActions,
  RightPanel: DetailPageRightPanel,
};
