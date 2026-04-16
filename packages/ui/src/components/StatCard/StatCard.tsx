import { forwardRef } from 'react';
import { semantic as t } from '@4lt7ab/core';
import type { ReactNode } from 'react';
import { spacingMap, semanticColorMap } from '../../types';
import type { SemanticColor, BaseComponentProps } from '../../types';

/**
 * A compact metric display card: icon in a tinted circle + prominent value + label.
 *
 * Designed for dashboard summary sections where you show counts, percentages,
 * or other KPIs alongside a representative icon.
 *
 * @example
 * ```tsx
 * <StatCard
 *   icon="check_circle"
 *   color={t.colorSuccess}
 *   value={42}
 *   label="Completed"
 * />
 *
 * // Without icon — renders a colored dot instead
 * <StatCard
 *   color={t.colorWarning}
 *   value="3"
 *   label="In Progress"
 * />
 * ```
 */
export interface StatCardProps extends BaseComponentProps {
  /** The metric value displayed prominently. */
  value: ReactNode;

  /** Label text describing the metric. */
  label: string;

  /**
   * Accent color for the icon circle background tint and the icon itself.
   * Maps to a semantic token from the theme system.
   */
  color?: SemanticColor;

  /**
   * Material Symbols icon name rendered inside the tinted circle.
   * When omitted, a small colored dot is shown instead.
   */
  icon?: string;

  /**
   * Diameter of the icon circle in pixels.
   * @default 40
   */
  iconSize?: number;
}

export const StatCard: React.ForwardRefExoticComponent<
  Omit<StatCardProps, 'ref'> & React.RefAttributes<HTMLDivElement>
> = forwardRef<HTMLDivElement, StatCardProps>(
  function StatCard(
    {
      value,
      label,
      color,
      icon,
      iconSize = 40,
      ...rest
    },
    ref,
  ): React.JSX.Element {
    const resolvedColor = color ? semanticColorMap[color] : undefined;
    const tintBg = resolvedColor
      ? `color-mix(in srgb, ${resolvedColor} 10%, transparent)`
      : `color-mix(in srgb, ${t.colorBorder} 20%, transparent)`;

    return (
      <div
        ref={ref}
        id={rest.id}
        data-testid={rest['data-testid']}
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: spacingMap.md,
          padding: spacingMap.md,
          borderRadius: t.radiusMd,
          background: t.colorSurfaceRaised,
          border: `${t.borderWidthDefault} solid color-mix(in srgb, ${t.colorBorder} 40%, transparent)`,
          color: t.colorText,
        }}
      >
        {/* Icon circle */}
        <div
          style={{
            width: iconSize,
            height: iconSize,
            borderRadius: t.radiusFull,
            background: tintBg,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexShrink: 0,
          }}
        >
          {icon ? (
            <span
              className="material-symbols-outlined"
              style={{
                fontSize: iconSize * 0.5,
                color: resolvedColor ?? t.colorTextMuted,
                lineHeight: 1,
              }}
              aria-hidden="true"
            >
              {icon}
            </span>
          ) : (
            <div
              style={{
                width: 10,
                height: 10,
                borderRadius: t.radiusFull,
                background: resolvedColor ?? t.colorTextMuted,
              }}
            />
          )}
        </div>

        {/* Text column */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 2, minWidth: 0 }}>
          <span
            style={{
              fontFamily: t.fontMono,
              fontWeight: t.fontWeightBold,
              fontSize: t.fontSizeXl,
              lineHeight: 1,
              color: t.colorText,
            }}
          >
            {value}
          </span>
          <span
            style={{
              fontFamily: t.fontMono,
              fontSize: t.fontSizeXs,
              fontWeight: t.fontWeightMedium,
              color: t.colorTextMuted,
              textTransform: 'uppercase',
              letterSpacing: t.letterSpacingWide,
              lineHeight: 1,
            }}
          >
            {label}
          </span>
        </div>
      </div>
    );
  },
);
