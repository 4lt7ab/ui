import { useCallback, useRef } from 'react';
import type { KeyboardEvent } from 'react';

/** Options for {@link useRovingFocus}. */
export interface UseRovingFocusOptions {
  /** Total number of items in the roving set. */
  count: number;
  /**
   * Currently active item index, or `null` when no item is active. Controls
   * which item receives `tabIndex=0` (roving-tabindex pattern). When `null`,
   * the first item (index 0) gets `tabIndex=0`.
   */
  activeIndex: number | null;
  /**
   * Orientation of the item set. `'horizontal'` handles ArrowLeft/ArrowRight;
   * `'vertical'` handles ArrowUp/ArrowDown. Both orientations also handle
   * Home/End.
   * @default 'horizontal'
   */
  orientation?: 'horizontal' | 'vertical';
}

/** Return value of {@link useRovingFocus}. */
export interface UseRovingFocusReturn {
  /** Callback ref factory for a given item index. */
  itemRef: (index: number) => (el: HTMLButtonElement | null) => void;
  /** Keydown handler factory for a given item index. */
  onKeyDown: (index: number) => (e: KeyboardEvent<HTMLButtonElement>) => void;
  /** Returns the `tabIndex` value for the item at the given index. */
  getTabIndex: (index: number) => 0 | -1;
}

/**
 * Internal hook implementing the WAI-ARIA roving-tabindex pattern for a 1D
 * set of items (tablist, toggle-group, menubar). Arrow keys wrap around the
 * ends; Home / End jump to the first / last item. Vertical orientation swaps
 * the arrow key bindings.
 *
 * Not exported from the public barrel — consumed internally by `TabStrip` and
 * `SegmentedControl`.
 *
 * @example
 * ```tsx
 * const { itemRef, onKeyDown, getTabIndex } = useRovingFocus({
 *   count: items.length,
 *   activeIndex,
 * });
 *
 * return items.map((item, i) => (
 *   <button
 *     key={item.key}
 *     ref={itemRef(i)}
 *     tabIndex={getTabIndex(i)}
 *     onKeyDown={onKeyDown(i)}
 *   >…</button>
 * ));
 * ```
 */
export function useRovingFocus({
  count,
  activeIndex,
  orientation = 'horizontal',
}: UseRovingFocusOptions): UseRovingFocusReturn {
  const itemRefs = useRef<(HTMLButtonElement | null)[]>([]);

  const itemRef = useCallback(
    (index: number) => (el: HTMLButtonElement | null) => {
      itemRefs.current[index] = el;
    },
    [],
  );

  const onKeyDown = useCallback(
    (index: number) => (e: KeyboardEvent<HTMLButtonElement>) => {
      if (count === 0) return;
      let nextIndex: number | null = null;

      const nextKey = orientation === 'vertical' ? 'ArrowDown' : 'ArrowRight';
      const prevKey = orientation === 'vertical' ? 'ArrowUp' : 'ArrowLeft';

      if (e.key === nextKey) {
        nextIndex = (index + 1) % count;
      } else if (e.key === prevKey) {
        nextIndex = (index - 1 + count) % count;
      } else if (e.key === 'Home') {
        nextIndex = 0;
      } else if (e.key === 'End') {
        nextIndex = count - 1;
      }

      if (nextIndex != null) {
        e.preventDefault();
        itemRefs.current[nextIndex]?.focus();
      }
    },
    [count, orientation],
  );

  const getTabIndex = useCallback(
    (index: number): 0 | -1 => {
      if (activeIndex == null) {
        return index === 0 ? 0 : -1;
      }
      return index === activeIndex ? 0 : -1;
    },
    [activeIndex],
  );

  return { itemRef, onKeyDown, getTabIndex };
}
