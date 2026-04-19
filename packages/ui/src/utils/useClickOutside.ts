import { useEffect } from 'react';
import type { RefObject } from 'react';

/**
 * Internal hook that fires `handler` on a `mousedown` anywhere in the document
 * outside the element referenced by `ref`. Listener attaches only while
 * `enabled` is truthy, so popover-like surfaces pay no global listener cost
 * while closed.
 *
 * Listener kind is `mousedown` (not `click`) so the outside-press dismisses
 * the popover before focus / selection side-effects run on mouseup. Keep this
 * contract if the hook later grows iOS touch support or pointerdown fallbacks
 * — consumers rely on close-on-press, not close-on-release.
 *
 * Not exported from the public barrel — consumed internally by `Select`,
 * `Combobox`, `DatePicker`, and `DateRangePicker`.
 *
 * @example
 * ```tsx
 * const containerRef = useRef<HTMLDivElement>(null);
 * const [open, setOpen] = useState(false);
 *
 * useClickOutside(containerRef, () => setOpen(false), open);
 *
 * return <div ref={containerRef}>…</div>;
 * ```
 */
export function useClickOutside(
  ref: RefObject<HTMLElement | null>,
  handler: (event: MouseEvent) => void,
  enabled: boolean,
): void {
  useEffect(() => {
    if (!enabled) return;
    function handleMouseDown(event: MouseEvent): void {
      const el = ref.current;
      if (el && !el.contains(event.target as Node)) {
        handler(event);
      }
    }
    document.addEventListener('mousedown', handleMouseDown);
    return () => document.removeEventListener('mousedown', handleMouseDown);
  }, [ref, handler, enabled]);
}
