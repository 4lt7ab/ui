import { createElement, forwardRef } from 'react';
import { semantic as t } from '@4lt7ab/core';
import type { ReactNode } from 'react';

/** HTML heading level (h1-h6). */
export type HeadingLevel = 1 | 2 | 3 | 4 | 5 | 6;

/** A page-level heading with optional subtitle and trailing action slot. */
export interface PageHeaderProps {
  /** Primary heading text. */
  title: string;
  /** Secondary text rendered below the title in muted style. */
  subtitle?: string;
  /** Inline indicator rendered next to the title (e.g. Badge or StatusDot). */
  indicator?: ReactNode;
  /** Content aligned to the right of the header (e.g. action buttons). */
  trailing?: ReactNode;
  /** HTML heading level (1-6).
   * @default 2
   */
  level?: HeadingLevel;
}

export const PageHeader: React.ForwardRefExoticComponent<Omit<PageHeaderProps, 'ref'> & React.RefAttributes<HTMLDivElement>> = forwardRef<HTMLDivElement, PageHeaderProps>(
  function PageHeader({
    title,
    subtitle,
    indicator,
    trailing,
    level = 2,
  }, ref): React.JSX.Element {
    const heading = createElement(
      `h${level}`,
      {
        style: {
          margin: 0,
          fontFamily: t.fontSans,
          fontWeight: t.fontWeightBold,
          color: t.colorText,
        },
      },
      title,
    );

    return (
      <div
        ref={ref}
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-end',
        }}
      >
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: t.spaceSm }}>
            {heading}
            {indicator}
          </div>
          {subtitle && (
            <span
              style={{
                color: t.colorTextMuted,
                fontSize: t.fontSizeSm,
              }}
            >
              {subtitle}
            </span>
          )}
        </div>
        {trailing && <div>{trailing}</div>}
      </div>
    );
  }
);
