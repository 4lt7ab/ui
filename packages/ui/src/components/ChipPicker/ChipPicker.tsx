import { useCallback, useId, useState } from 'react';
import { semantic as t, useInjectStyles } from '@4lt7ab/core';
import { sectionLabelStyle } from '../../styles/sectionLabelStyle';
import type { CSSProperties } from 'react';

/** A single chip option. */
export interface ChipItem {
  /** Unique value identifying this chip. */
  value: string;
  /** Display label. */
  label: string;
  /** Optional group name — chips sharing a group render under an uppercase section heading. */
  group?: string;
}

/** Props for ChipPicker. */
export interface ChipPickerProps {
  /** All available chip options. */
  items: ChipItem[];
  /** Controlled selection. Omit for uncontrolled mode (use defaultSelected). */
  selected?: string[];
  /** Uncontrolled initial selection. Ignored when `selected` is provided. */
  defaultSelected?: string[];
  /** Called with the updated selection array when a chip is toggled. */
  onChange?: (selected: string[]) => void;
  /** Accessible label for the group. */
  'aria-label'?: string;
}

/** Multi-select toggle chip group with optional category grouping. */
export function ChipPicker({
  items,
  selected: controlledSelected,
  defaultSelected,
  onChange,
  'aria-label': ariaLabel,
}: ChipPickerProps): React.JSX.Element {
  const uid = useId();
  const styleId = `chip-picker-${uid.replace(/:/g, '')}`;

  const isControlled = controlledSelected !== undefined;
  const [internalSelected, setInternalSelected] = useState<string[]>(
    () => defaultSelected ?? [],
  );
  const selected = isControlled ? controlledSelected : internalSelected;
  const applySelection = useCallback(
    (next: string[]): void => {
      if (!isControlled) setInternalSelected(next);
      onChange?.(next);
    },
    [isControlled, onChange],
  );

  useInjectStyles(
    styleId,
    `[data-chip-picker-id="${styleId}"] button:hover {
      background: ${t.colorSurfaceRaised} !important;
    }
    [data-chip-picker-id="${styleId}"] button[aria-pressed="true"]:hover {
      background: ${t.colorActionSecondaryHover} !important;
    }
    [data-chip-picker-id="${styleId}"] button:focus-visible {
      outline: ${t.focusRingWidth} solid ${t.focusRingColor};
      outline-offset: ${t.focusRingOffset};
    }`,
  );

  const toggle = (value: string): void => {
    if (selected.includes(value)) {
      applySelection(selected.filter((v) => v !== value));
    } else {
      applySelection([...selected, value]);
    }
  };

  // Group items: ungrouped first, then by group name in order of first appearance
  const groups: { label: string | null; chips: ChipItem[] }[] = [];
  const groupMap = new Map<string | null, ChipItem[]>();

  for (const item of items) {
    const key = item.group ?? null;
    let arr = groupMap.get(key);
    if (!arr) {
      arr = [];
      groupMap.set(key, arr);
      groups.push({ label: key, chips: arr });
    }
    arr.push(item);
  }

  // Move ungrouped to front if it exists
  const ungroupedIdx = groups.findIndex((g) => g.label === null);
  if (ungroupedIdx > 0) {
    const [ungrouped] = groups.splice(ungroupedIdx, 1);
    groups.unshift(ungrouped);
  }

  const chipStyle = (isSelected: boolean): CSSProperties => ({
    display: 'inline-flex',
    alignItems: 'center',
    padding: `${t.spaceXs} ${t.spaceSm}`,
    fontSize: t.fontSizeSm,
    fontFamily: t.fontSans,
    fontWeight: t.fontWeightMedium,
    lineHeight: t.lineHeightTight,
    color: isSelected ? t.colorActionPrimary : t.colorText,
    background: isSelected ? t.colorActionSecondary : 'transparent',
    border: `${t.borderWidthDefault} solid ${isSelected ? t.colorActionPrimary : t.colorBorder}`,
    borderRadius: t.radiusFull,
    cursor: 'pointer',
    transition: `background ${t.transitionFast}, border-color ${t.transitionFast}, color ${t.transitionFast}`,
    outline: 'none',
  });

  const renderChips = (chips: ChipItem[]): React.JSX.Element => (
    <div
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: t.spaceSm,
      }}
    >
      {chips.map((item) => {
        const isSelected = selected.includes(item.value);
        return (
          <button
            key={item.value}
            type="button"
            aria-pressed={isSelected}
            onClick={() => toggle(item.value)}
            style={chipStyle(isSelected)}
          >
            {item.label}
          </button>
        );
      })}
    </div>
  );

  return (
    <div
      data-chip-picker-id={styleId}
      role="group"
      aria-label={ariaLabel}
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: t.spaceMd,
      }}
    >
      {groups.map((group, i) => (
        <div key={group.label ?? '__ungrouped'} style={{ display: 'flex', flexDirection: 'column', gap: t.spaceSm }}>
          {group.label !== null && (
            <div style={i > 0 ? { marginTop: t.spaceXs } : undefined}>
              <div style={sectionLabelStyle}>
                {group.label}
              </div>
            </div>
          )}
          {renderChips(group.chips)}
        </div>
      ))}
    </div>
  );
}
