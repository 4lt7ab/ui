import { forwardRef, useCallback } from 'react';
import { semantic as t, useInjectStyles } from '@4lt7ab/core';
import { useRovingFocus } from '../../../utils/useRovingFocus';
import type { BaseComponentProps } from '../../../types';

/** A single tab definition. */
export interface Tab {
  /** Unique identifier for the tab. */
  key: string;
  /** Display label. */
  label: string;
  /** Optional Material Symbols icon name shown before the label. */
  icon?: string;
}

/**
 * A horizontal tab strip with an active indicator and keyboard navigation.
 *
 * This is a controlled component — the consumer manages which tab is active
 * via `activeKey` / `onChange` and renders the corresponding panel content.
 *
 * Supports `allowDeselect` for collapsible panels (click active tab to close).
 *
 * @example
 * ```tsx
 * const [tab, setTab] = useState<string | null>('summary');
 *
 * <TabStrip
 *   tabs={[
 *     { key: 'summary', label: 'Summary', icon: 'description' },
 *     { key: 'context', label: 'Context' },
 *   ]}
 *   activeKey={tab}
 *   onChange={setTab}
 *   allowDeselect
 * />
 * {tab === 'summary' && <div>Summary content</div>}
 * {tab === 'context' && <div>Context content</div>}
 * ```
 */
export interface TabStripProps extends BaseComponentProps {
  /** Tab definitions. */
  tabs: Tab[];

  /** Currently active tab key. `null` means no tab is selected. */
  activeKey: string | null;

  /**
   * Called when a tab is clicked.
   * Receives `null` when `allowDeselect` is true and the active tab is clicked.
   */
  onChange: (key: string | null) => void;

  /**
   * Allow clicking the active tab to deselect it (sets activeKey to null).
   * @default false
   */
  allowDeselect?: boolean;

  /**
   * Visual size of the tabs.
   * @default 'md'
   */
  size?: 'sm' | 'md';
}

const STYLES_ID = '4lt7ab-tab-strip';
const STYLES_CSS = `
[data-tab-btn] {
  transition: color ${t.transitionFast}, background ${t.transitionFast}, border-color ${t.transitionFast};
}
[data-tab-btn]:hover:not([aria-selected="true"]) {
  color: ${t.colorTextSecondary};
  background: color-mix(in srgb, ${t.colorBorder} 10%, transparent);
}
`;

export const TabStrip: React.ForwardRefExoticComponent<
  Omit<TabStripProps, 'ref'> & React.RefAttributes<HTMLDivElement>
> = forwardRef<HTMLDivElement, TabStripProps>(
  function TabStrip(
    {
      tabs,
      activeKey,
      onChange,
      allowDeselect = false,
      size = 'md',
      ...rest
    },
    ref,
  ): React.JSX.Element {
    useInjectStyles(STYLES_ID, STYLES_CSS);

    const activeIndex = tabs.findIndex((tab) => tab.key === activeKey);
    const { itemRef, onKeyDown, getTabIndex } = useRovingFocus({
      count: tabs.length,
      activeIndex: activeIndex === -1 ? null : activeIndex,
    });

    const handleClick = useCallback(
      (key: string) => {
        if (key === activeKey && allowDeselect) {
          onChange(null);
        } else {
          onChange(key);
        }
      },
      [activeKey, allowDeselect, onChange],
    );

    const isSm = size === 'sm';

    return (
      <div
        ref={ref}
        id={rest.id}
        data-testid={rest['data-testid']}
        role="tablist"
        style={{
          display: 'flex',
          gap: 2,
        }}
      >
        {tabs.map((tab, i) => {
          const isActive = tab.key === activeKey;

          return (
            <button
              key={tab.key}
              ref={itemRef(i)}
              role="tab"
              aria-selected={isActive}
              tabIndex={getTabIndex(i)}
              data-tab-btn=""
              onClick={() => handleClick(tab.key)}
              onKeyDown={onKeyDown(i)}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: t.spaceXs,
                padding: isSm ? `${t.spaceXs} ${t.spaceSm}` : `${t.spaceSm} ${t.spaceMd}`,
                border: 'none',
                borderBottom: `2px solid ${isActive ? t.colorActionPrimary : 'transparent'}`,
                borderRadius: 0,
                background: isActive
                  ? `color-mix(in srgb, ${t.colorActionPrimary} 8%, transparent)`
                  : 'transparent',
                color: isActive ? t.colorActionPrimary : t.colorTextMuted,
                fontFamily: t.fontSans,
                fontSize: isSm ? t.fontSizeXs : t.fontSizeSm,
                fontWeight: t.fontWeightSemibold,
                lineHeight: t.lineHeightTight,
                cursor: 'pointer',
                whiteSpace: 'nowrap',
              }}
            >
              {tab.icon && (
                <span
                  className="material-symbols-outlined"
                  style={{ fontSize: isSm ? 12 : 14, lineHeight: 1 }}
                  aria-hidden="true"
                >
                  {tab.icon}
                </span>
              )}
              {tab.label}
            </button>
          );
        })}
      </div>
    );
  },
);
