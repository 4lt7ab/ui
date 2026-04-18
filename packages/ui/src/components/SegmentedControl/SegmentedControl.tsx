import { useCallback, useLayoutEffect, useRef, useState } from 'react';
import { semantic as t, useInjectStyles } from '@4lt7ab/core';
import { Icon } from '../Icon';
import type { IconName } from '../../icons';

/** A single segment definition. */
export interface Segment {
  /** Unique value identifying this segment. */
  value: string;
  /** Display label — text shown in the segment button. */
  label: string;
  /** Optional icon name (built-in registry or icon-font name). */
  icon?: IconName | (string & {});
}

/** A generic segmented toggle control with a sliding pill indicator. */
export interface SegmentedControlProps {
  /** Segment definitions. */
  segments: Segment[];
  /** Controlled selected segment value. Omit for uncontrolled mode (use defaultValue). */
  value?: string;
  /** Uncontrolled initial value. Ignored when `value` is provided. Defaults to the first segment. */
  defaultValue?: string;
  /** Called when the user selects a segment. */
  onChange?: (value: string) => void;
  /** Control size.
   * @default 'md'
   */
  size?: 'sm' | 'md';
  /** Accessible label for the group. */
  'aria-label'?: string;
}

const STYLE_ID = '4lt7ab-segmented-control';

const hoverCSS = `
  .segmented-ctrl-btn:hover:not([aria-pressed="true"]) {
    color: ${t.colorText};
  }
  .segmented-ctrl-btn:focus-visible {
    outline: ${t.focusRingWidth} solid ${t.focusRingColor};
    outline-offset: ${t.focusRingOffset};
    border-radius: ${t.radiusFull};
    z-index: 2;
  }
  @media (prefers-reduced-motion: reduce) {
    .segmented-ctrl-indicator {
      transition: none !important;
    }
  }
`;

const sizes = {
  sm: { height: 28, px: 8, fontSize: 'var(--font-size-xs)', iconSize: 'xs' as const },
  md: { height: 32, px: 12, fontSize: 'var(--font-size-sm)', iconSize: 'sm' as const },
} as const;

export function SegmentedControl({
  segments,
  value: controlledValue,
  defaultValue,
  onChange,
  size = 'md',
  'aria-label': ariaLabel,
}: SegmentedControlProps): React.JSX.Element {
  useInjectStyles(STYLE_ID, hoverCSS);

  const isControlled = controlledValue !== undefined;
  const [internalValue, setInternalValue] = useState<string>(
    () => defaultValue ?? segments[0]?.value ?? '',
  );
  const value = isControlled ? controlledValue : internalValue;
  const handleSelect = useCallback(
    (next: string): void => {
      if (!isControlled) setInternalValue(next);
      onChange?.(next);
    },
    [isControlled, onChange],
  );

  const containerRef = useRef<HTMLDivElement>(null);
  const [indicator, setIndicator] = useState<{ left: number; width: number } | null>(null);
  const s = sizes[size];

  const updateIndicator = useCallback(() => {
    const container = containerRef.current;
    if (!container) return;
    const activeBtn = container.querySelector<HTMLButtonElement>('[aria-pressed="true"]');
    if (!activeBtn) {
      setIndicator(null);
      return;
    }
    const containerRect = container.getBoundingClientRect();
    const btnRect = activeBtn.getBoundingClientRect();
    setIndicator({
      left: btnRect.left - containerRect.left,
      width: btnRect.width,
    });
  }, []);

  // Update indicator position whenever value or segments change
  useLayoutEffect(() => {
    updateIndicator();
  }, [value, segments, updateIndicator]);

  // Also update on resize
  useLayoutEffect(() => {
    const observer = new ResizeObserver(() => updateIndicator());
    if (containerRef.current) observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, [updateIndicator]);

  return (
    <div
      ref={containerRef}
      role="group"
      aria-label={ariaLabel}
      style={{
        position: 'relative',
        display: 'inline-flex',
        alignItems: 'center',
        height: s.height,
        background: t.colorSurfaceInput,
        borderRadius: t.radiusFull,
        border: `${t.borderWidthDefault} solid ${t.colorBorder}`,
        padding: 2,
        boxSizing: 'border-box',
      }}
    >
      {/* Sliding indicator */}
      {indicator && (
        <div
          className="segmented-ctrl-indicator"
          style={{
            position: 'absolute',
            top: 2,
            left: indicator.left,
            width: indicator.width,
            height: s.height - 6,
            borderRadius: t.radiusFull,
            background: t.colorActionPrimary,
            transition: `left ${t.transitionSlow}, width ${t.transitionSlow}`,
            pointerEvents: 'none',
          }}
        />
      )}

      {/* Segment buttons */}
      {segments.map((seg) => {
        const isActive = seg.value === value;
        const hasIcon = !!seg.icon;
        const iconOnly = hasIcon && !seg.label;

        return (
          <button
            key={seg.value}
            type="button"
            className="segmented-ctrl-btn"
            aria-pressed={isActive}
            onClick={() => handleSelect(seg.value)}
            style={{
              position: 'relative',
              zIndex: 1,
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: t.spaceXs,
              height: s.height - 6,
              padding: iconOnly ? `0 ${s.px - 2}px` : `0 ${s.px}px`,
              border: 'none',
              borderRadius: t.radiusFull,
              background: 'transparent',
              color: isActive ? t.colorTextInverse : t.colorTextMuted,
              fontSize: s.fontSize,
              fontFamily: t.fontSans,
              fontWeight: isActive ? t.fontWeightSemibold : t.fontWeightNormal,
              cursor: 'pointer',
              transition: `color ${t.transitionBase}`,
              whiteSpace: 'nowrap',
              lineHeight: 1,
            }}
          >
            {hasIcon && <Icon name={seg.icon!} size={s.iconSize} />}
            {seg.label && <span>{seg.label}</span>}
          </button>
        );
      })}
    </div>
  );
}
