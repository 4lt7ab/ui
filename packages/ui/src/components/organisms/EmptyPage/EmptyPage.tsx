import { Children, createContext, forwardRef, useContext, useId } from 'react';
import { semantic as t, Slot } from '@4lt7ab/core';
import type { CSSProperties, ReactNode } from 'react';
import type { BaseComponentProps } from '../../../types';
import { Icon } from '../../atoms/Icon';
import type { IconName } from '../../../icons';

// ---------------------------------------------------------------------------
// Compound context
// ---------------------------------------------------------------------------
//
// EmptyPage is a full-page zero-state takeover organism. Distinct from the
// inline `<EmptyState>` molecule: EmptyState fits inside a Card or Table cell;
// EmptyPage owns the whole viewport (or the Main region of an AppShell), with
// hero-level breathing room, a heading, description, actions, and tip rows.
//
// Context carries the heading `level` so `<EmptyPage.Title>` picks the right
// tag (`<h1>` for `level='page'`, `<h2>` for `'section'`), plus the title's
// generated id so Root can set `aria-labelledby` on its `<section>`.

type EmptyPageLevel = 'page' | 'section';

interface EmptyPageContextValue {
  level: EmptyPageLevel;
  titleId: string;
}

const EmptyPageContext = createContext<EmptyPageContextValue | null>(null);

function useEmptyPageContext(component: string): EmptyPageContextValue {
  const ctx = useContext(EmptyPageContext);
  if (ctx === null) {
    throw new Error(
      `[@4lt7ab/ui] <EmptyPage.${component}> must be rendered inside <EmptyPage.Root>.`,
    );
  }
  return ctx;
}

// ---------------------------------------------------------------------------
// Root
// ---------------------------------------------------------------------------

/** Props for {@link EmptyPageRoot}. */
export interface EmptyPageRootProps extends BaseComponentProps {
  /** Heading scale — `'page'` renders Title as `<h1>` with page-level padding;
   * `'section'` renders Title as `<h2>` with section-level padding.
   * @default 'page'
   */
  level?: EmptyPageLevel;
  /** Accessible label fallback. If omitted, Root's `<section>` is labelled
   * by the title via `aria-labelledby`. */
  'aria-label'?: string;
  /** Children — typically `<EmptyPage.Icon>`, `<EmptyPage.Title>`,
   * `<EmptyPage.Description>`, `<EmptyPage.Actions>`, `<EmptyPage.Tips>`. */
  children?: ReactNode;
}

export const EmptyPageRoot: React.ForwardRefExoticComponent<
  Omit<EmptyPageRootProps, 'ref'> & React.RefAttributes<HTMLElement>
> = forwardRef<HTMLElement, EmptyPageRootProps>(function EmptyPageRoot(
  { level = 'page', children, ...rest },
  ref,
): React.JSX.Element {
  const titleId = useId();
  const isPage = level === 'page';

  return (
    <EmptyPageContext.Provider value={{ level, titleId }}>
      <section
        ref={ref}
        id={rest.id}
        data-testid={rest['data-testid']}
        data-level={level}
        aria-label={rest['aria-label']}
        aria-labelledby={rest['aria-label'] ? undefined : titleId}
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: t.spaceMd,
          textAlign: 'center',
          width: '100%',
          minHeight: isPage ? '60vh' : 'auto',
          padding: isPage
            ? `${t.space2xl} ${t.spaceLg}`
            : `${t.spaceXl} ${t.spaceLg}`,
          fontFamily: t.fontSans,
          boxSizing: 'border-box',
        }}
      >
        {children}
      </section>
    </EmptyPageContext.Provider>
  );
});

// ---------------------------------------------------------------------------
// Icon
// ---------------------------------------------------------------------------

/** Props for {@link EmptyPageIcon}. */
export interface EmptyPageIconProps {
  /** The hero icon or illustration. Typically `<Icon name="…" size="xl" />`
   * or a custom SVG. The wrapper applies muted color + hero-sized footprint
   * and marks itself `aria-hidden`; the Title carries the semantic label. */
  children: ReactNode;
}

export function EmptyPageIcon({ children }: EmptyPageIconProps): React.JSX.Element {
  useEmptyPageContext('Icon');
  return (
    <div
      aria-hidden="true"
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: t.colorTextMuted,
        marginBottom: t.spaceSm,
      }}
    >
      {children}
    </div>
  );
}

// ---------------------------------------------------------------------------
// Title
// ---------------------------------------------------------------------------

/** Props for {@link EmptyPageTitle}. */
export interface EmptyPageTitleProps {
  /** The heading text. Renders as `<h1>` when Root's `level='page'`,
   * `<h2>` when `level='section'`. */
  children: ReactNode;
}

export function EmptyPageTitle({ children }: EmptyPageTitleProps): React.JSX.Element {
  const { level, titleId } = useEmptyPageContext('Title');
  const isPage = level === 'page';
  const Tag = (isPage ? 'h1' : 'h2') as keyof React.JSX.IntrinsicElements;

  const style: CSSProperties = isPage
    ? {
        margin: 0,
        fontFamily: t.fontSans,
        fontWeight: t.fontWeightBold,
        fontSize: t.fontSizeXl,
        lineHeight: t.lineHeightTight,
        color: t.colorText,
      }
    : {
        margin: 0,
        fontFamily: t.fontSans,
        fontWeight: t.fontWeightSemibold,
        fontSize: t.fontSizeLg,
        lineHeight: t.lineHeightTight,
        color: t.colorText,
      };

  return (
    <Tag id={titleId} style={style}>
      {children}
    </Tag>
  );
}

// ---------------------------------------------------------------------------
// Description
// ---------------------------------------------------------------------------

/** Props for {@link EmptyPageDescription}. */
export interface EmptyPageDescriptionProps {
  /** Paragraph body copy explaining the zero state. */
  children: ReactNode;
}

export function EmptyPageDescription({
  children,
}: EmptyPageDescriptionProps): React.JSX.Element {
  useEmptyPageContext('Description');
  return (
    <p
      style={{
        margin: 0,
        maxWidth: '32rem',
        color: t.colorTextSecondary,
        fontSize: t.fontSizeSm,
        lineHeight: t.lineHeightBase,
        fontFamily: t.fontSans,
      }}
    >
      {children}
    </p>
  );
}

// ---------------------------------------------------------------------------
// Actions
// ---------------------------------------------------------------------------

/** Props for {@link EmptyPageActions}. */
export interface EmptyPageActionsProps {
  /** Action buttons — consumer composes primary + secondary `<Button>` children. */
  children?: ReactNode;
}

export function EmptyPageActions({
  children,
}: EmptyPageActionsProps): React.JSX.Element {
  useEmptyPageContext('Actions');
  return (
    <div
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'center',
        gap: t.spaceSm,
        marginTop: t.spaceSm,
      }}
    >
      {children}
    </div>
  );
}

// ---------------------------------------------------------------------------
// Tips — row of tip cards/links. Renders null when it has no Tip children.
// ---------------------------------------------------------------------------

/** Props for {@link EmptyPageTips}. */
export interface EmptyPageTipsProps {
  /** Accessible label for the tip list.
   * @default 'Getting started'
   */
  'aria-label'?: string;
  /** Tip entries — typically `<EmptyPage.Tip>` children. */
  children?: ReactNode;
}

export function EmptyPageTips({
  'aria-label': ariaLabel = 'Getting started',
  children,
}: EmptyPageTipsProps): React.JSX.Element | null {
  useEmptyPageContext('Tips');

  // Hide the whole list when there are no children so consumers who do
  // `{tips.map(...)}` with an empty array don't leave an orphan heading.
  const count = Children.toArray(children).filter(Boolean).length;
  if (count === 0) return null;

  return (
    <ul
      aria-label={ariaLabel}
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'stretch',
        gap: t.spaceSm,
        listStyle: 'none',
        margin: 0,
        marginTop: t.spaceMd,
        padding: 0,
      }}
    >
      {children}
    </ul>
  );
}

// ---------------------------------------------------------------------------
// Tip — a single entry. Supports `asChild` to wrap a consumer's <Link>.
// ---------------------------------------------------------------------------

/** Props for {@link EmptyPageTip}. */
export interface EmptyPageTipProps {
  /** Optional leading icon rendered before the content. */
  icon?: IconName;
  /** When true, renders the tip's styling onto the single child element
   * instead of the default `<span>` — plug in your router's Link or an `<a>`.
   * The wrapping `<li>` is always present for list semantics.
   * @default false
   */
  asChild?: boolean;
  /** Tip content. */
  children: ReactNode;
}

export function EmptyPageTip({
  icon,
  asChild = false,
  children,
}: EmptyPageTipProps): React.JSX.Element {
  useEmptyPageContext('Tip');

  const contentStyle: CSSProperties = {
    display: 'inline-flex',
    alignItems: 'center',
    gap: t.spaceXs,
    padding: `${t.spaceXs} ${t.spaceSm}`,
    border: `${t.borderWidthDefault} solid ${t.colorBorder}`,
    borderRadius: t.radiusMd,
    background: t.colorSurface,
    color: t.colorText,
    fontSize: t.fontSizeSm,
    fontFamily: t.fontSans,
    textDecoration: 'none',
    cursor: asChild ? 'pointer' : 'default',
  };

  // asChild: the consumer's element is the only child of <li>, carrying the
  // tip styling. Icon is not injected — consumers who want an icon put one
  // inside their element (keeps ownership of the link subtree with them).
  if (asChild) {
    return (
      <li style={{ display: 'flex' }}>
        <Slot style={contentStyle}>{children as React.ReactElement}</Slot>
      </li>
    );
  }

  return (
    <li style={{ display: 'flex' }}>
      <span style={contentStyle}>
        {icon && (
          <span
            aria-hidden="true"
            style={{ display: 'inline-flex', color: t.colorTextMuted }}
          >
            <Icon name={icon} size="sm" />
          </span>
        )}
        {children}
      </span>
    </li>
  );
}

// ---------------------------------------------------------------------------
// Compound export
// ---------------------------------------------------------------------------

/**
 * Full-page zero-state takeover. Distinct from the inline `<EmptyState>`
 * molecule: EmptyPage owns hero-level layout with title/description/action
 * tiers plus an optional tip row. Consumer composes the slots.
 *
 * @example
 * ```tsx
 * <EmptyPage.Root>
 *   <EmptyPage.Icon>
 *     <Icon name="edit" size="xl" />
 *   </EmptyPage.Icon>
 *   <EmptyPage.Title>No projects yet</EmptyPage.Title>
 *   <EmptyPage.Description>
 *     Spin up your first project to see it appear here.
 *   </EmptyPage.Description>
 *   <EmptyPage.Actions>
 *     <Button variant="primary">Create project</Button>
 *     <Button variant="secondary">Import from CSV</Button>
 *   </EmptyPage.Actions>
 *   <EmptyPage.Tips>
 *     <EmptyPage.Tip icon="info">Start from a template</EmptyPage.Tip>
 *     <EmptyPage.Tip icon="external-link" asChild>
 *       <a href="/docs">Read the docs</a>
 *     </EmptyPage.Tip>
 *   </EmptyPage.Tips>
 * </EmptyPage.Root>
 * ```
 */
export const EmptyPage = {
  Root: EmptyPageRoot,
  Icon: EmptyPageIcon,
  Title: EmptyPageTitle,
  Description: EmptyPageDescription,
  Actions: EmptyPageActions,
  Tips: EmptyPageTips,
  Tip: EmptyPageTip,
};
