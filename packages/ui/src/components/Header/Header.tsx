import { forwardRef } from 'react';
import { semantic as t } from '@4lt7ab/core';
import type { ReactNode } from 'react';

/** Heading scale. `page` is the top-of-page heading; `section` is a sub-section heading. */
export type HeaderLevel = 'page' | 'section';

/**
 * A minimal heading with an optional subtitle, inline indicator, and trailing slot.
 * Replaces the retired `PageHeader` and `SectionHeader` components.
 *
 * Border, spacing, and icon presets are intentionally absent — those are
 * layout decisions the consumer expresses via `<Divider>` and `<Stack>`.
 */
export interface HeaderProps {
  /** Primary heading text. */
  title: string;
  /** Heading scale. @default 'section' */
  level?: HeaderLevel;
  /** Secondary text rendered below the title in muted style. */
  subtitle?: string;
  /** Inline content rendered next to the title (e.g. Badge, StatusDot, Icon). */
  indicator?: ReactNode;
  /** Content aligned to the right end of the header (e.g. action buttons, SearchInput). */
  trailing?: ReactNode;
}

export const Header: React.ForwardRefExoticComponent<
  Omit<HeaderProps, 'ref'> & React.RefAttributes<HTMLDivElement>
> = forwardRef<HTMLDivElement, HeaderProps>(
  function Header({ title, level = 'section', subtitle, indicator, trailing }, ref): React.JSX.Element {
    const isPage = level === 'page';
    const Tag = (isPage ? 'h1' : 'h2') as keyof React.JSX.IntrinsicElements;

    const titleStyle: React.CSSProperties = isPage
      ? {
          margin: 0,
          fontFamily: t.fontSans,
          fontWeight: t.fontWeightBold,
          color: t.colorText,
        }
      : {
          margin: 0,
          fontFamily: t.fontSans,
          fontWeight: t.fontWeightSemibold,
          fontSize: t.fontSizeBase,
          lineHeight: t.lineHeightTight,
          color: t.colorText,
        };

    return (
      <div
        ref={ref}
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: isPage ? 'flex-end' : 'center',
          gap: t.spaceMd,
        }}
      >
        <div style={{ minWidth: 0 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: t.spaceSm }}>
            <Tag style={titleStyle}>{title}</Tag>
            {indicator}
          </div>
          {subtitle && (
            <span style={{ color: t.colorTextMuted, fontSize: t.fontSizeSm, fontFamily: t.fontSans }}>
              {subtitle}
            </span>
          )}
        </div>
        {trailing && (
          <div style={{ display: 'flex', alignItems: 'center', gap: t.spaceSm, flexShrink: 0 }}>
            {trailing}
          </div>
        )}
      </div>
    );
  },
);
