import { useId } from 'react';
import { semantic as t, useInjectStyles } from '@4lt7ab/core';
import { Icon } from '../Icon';

/** A single option in a PillSelect. */
export interface PillSelectOption {
  /** The option value. */
  value: string;
  /** The display label. */
  label: string;
}

/** Props for PillSelect. */
export interface PillSelectProps {
  /** Current selected value. */
  value: string;
  /** Available options. */
  options: PillSelectOption[];
  /** Called with new value on change. */
  onChange: (value: string) => void;
  /** Accessible label for the select. */
  ariaLabel: string;
  /** Whether the pill shows active styling. Defaults to !!value. */
  active?: boolean;
}

/** Pill-shaped native select for filter bars with active/inactive state coloring. */
export function PillSelect({
  value,
  options,
  onChange,
  ariaLabel,
  active: activeProp,
}: PillSelectProps): React.JSX.Element {
  const uid = useId();
  const styleId = `pill-select-${uid.replace(/:/g, '')}`;
  const isActive = activeProp ?? !!value;

  useInjectStyles(
    styleId,
    `[data-pill-select-id="${styleId}"] select:hover {
      border-color: ${t.colorActionPrimary};
    }`,
  );

  return (
    <div
      data-pill-select-id={styleId}
      style={{
        position: 'relative',
        display: 'inline-flex',
        alignItems: 'center',
      }}
    >
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        aria-label={ariaLabel}
        style={{
          appearance: 'none',
          WebkitAppearance: 'none',
          MozAppearance: 'none' as never,
          padding: `2px ${t.spaceXs}`,
          paddingRight: '1.5rem',
          fontSize: t.fontSizeSm,
          fontFamily: t.fontSans,
          fontWeight: t.fontWeightMedium,
          lineHeight: t.lineHeightTight,
          color: isActive ? t.colorActionPrimary : t.colorTextMuted,
          background: isActive
            ? `color-mix(in srgb, ${t.colorActionPrimary} 10%, transparent)`
            : 'transparent',
          border: `${t.borderWidthDefault} solid ${isActive ? t.colorActionPrimary : t.colorBorder}`,
          borderRadius: t.radiusFull,
          cursor: 'pointer',
          outline: 'none',
          transition: `background ${t.transitionFast}, border-color ${t.transitionFast}, color ${t.transitionFast}`,
        }}
      >
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
      <span
        style={{
          position: 'absolute',
          right: '6px',
          top: '50%',
          transform: 'translateY(-50%)',
          pointerEvents: 'none',
          display: 'flex',
          alignItems: 'center',
          color: isActive ? t.colorActionPrimary : t.colorTextMuted,
        }}
      >
        <Icon name="chevron-down" size="xs" />
      </span>
    </div>
  );
}
