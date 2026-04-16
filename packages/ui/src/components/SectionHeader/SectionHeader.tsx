import { forwardRef } from 'react';
import { semantic as t } from '@4lt7ab/core';
import type { ReactNode } from 'react';
import { spacingMap } from '../../types';
import type { SpacingToken, BaseComponentProps } from '../../types';

/**
 * A section heading bar with icon, title, indicator slot, and trailing actions.
 *
 * Used at the top of page sections to label a group of content. More
 * slot-oriented than PageHeader — designed for sub-sections within a page.
 *
 * @example
 * ```tsx
 * <SectionHeader
 *   icon="task_alt"
 *   title="Tasks"
 *   indicator={<Badge variant="info">12</Badge>}
 *   trailing={<SearchInput onSearch={setQuery} />}
 *   border
 * />
 * ```
 */
export interface SectionHeaderProps extends BaseComponentProps {
  /** Section title text. */
  title: string;

  /** Material Symbols icon name rendered before the title. */
  icon?: string;

  /**
   * Content rendered inline after the title.
   * Typically a Badge with a count or a StatusDot.
   */
  indicator?: ReactNode;

  /**
   * Content aligned to the right end of the header.
   * Typically SearchInput, action buttons, or filter controls.
   */
  trailing?: ReactNode;

  /**
   * Show a bottom border.
   * @default false
   */
  border?: boolean;

  /**
   * Vertical spacing below the header (margin-bottom).
   */
  spacing?: SpacingToken;
}

export const SectionHeader: React.ForwardRefExoticComponent<
  Omit<SectionHeaderProps, 'ref'> & React.RefAttributes<HTMLDivElement>
> = forwardRef<HTMLDivElement, SectionHeaderProps>(
  function SectionHeader(
    {
      title,
      icon,
      indicator,
      trailing,
      border = false,
      spacing,
      ...rest
    },
    ref,
  ): React.JSX.Element {
    return (
      <div
        ref={ref}
        id={rest.id}
        data-testid={rest['data-testid']}
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: t.spaceMd,
          borderBottom: border
            ? `${t.borderWidthDefault} solid ${t.colorBorder}`
            : undefined,
          paddingBottom: border ? t.spaceMd : undefined,
          marginBottom: spacing ? spacingMap[spacing] : undefined,
        }}
      >
        {/* Left cluster: icon + title + indicator */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: t.spaceSm,
            minWidth: 0,
          }}
        >
          {icon && (
            <span
              className="material-symbols-outlined"
              style={{
                fontSize: 18,
                color: t.colorTextSecondary,
                lineHeight: 1,
              }}
              aria-hidden="true"
            >
              {icon}
            </span>
          )}
          <span
            style={{
              fontFamily: t.fontSans,
              fontWeight: t.fontWeightSemibold,
              fontSize: t.fontSizeBase,
              color: t.colorText,
              lineHeight: t.lineHeightTight,
              whiteSpace: 'nowrap',
            }}
          >
            {title}
          </span>
          {indicator}
        </div>

        {/* Right cluster: trailing actions */}
        {trailing && (
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: t.spaceSm,
              flexShrink: 0,
            }}
          >
            {trailing}
          </div>
        )}
      </div>
    );
  },
);
