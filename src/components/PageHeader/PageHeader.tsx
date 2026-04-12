import { createElement, forwardRef } from 'react';
import { semantic as t } from '../../tokens/semantic';
import type { CSSProperties, ReactNode } from 'react';

export type HeadingLevel = 1 | 2 | 3 | 4 | 5 | 6;

export interface PageHeaderProps {
  title: string;
  subtitle?: string;
  trailing?: ReactNode;
  style?: CSSProperties;
  className?: string;
  /** Heading level (1-6). Defaults to 2. */
  level?: HeadingLevel;
}

export const PageHeader = forwardRef<HTMLDivElement, PageHeaderProps>(
  function PageHeader({
    title,
    subtitle,
    trailing,
    style,
    className,
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
        className={className}
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-end',
          ...style,
        }}
      >
        <div>
          {heading}
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
