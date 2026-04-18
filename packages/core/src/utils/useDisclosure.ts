import { useCallback, useId, useState } from 'react';

/** Options for the {@link useDisclosure} hook. */
export interface UseDisclosureOptions {
  /** Initial open state when uncontrolled. @default false */
  defaultOpen?: boolean;
  /** Controlled open state. When provided, the hook is controlled. */
  open?: boolean;
  /** Called when the open state changes. Receives the next open value. */
  onOpenChange?: (open: boolean) => void;
}

/** Props to spread on a trigger element (button). Wires `aria-expanded`, `aria-controls`, and `onClick`. */
export interface UseDisclosureTriggerProps {
  'aria-expanded': boolean;
  'aria-controls': string;
  onClick: () => void;
}

/** Props to spread on a content region. Wires `id`, `role="region"`, and `hidden` when closed. */
export interface UseDisclosureContentProps {
  id: string;
  role: 'region';
  hidden: boolean;
}

/** Return value of {@link useDisclosure}. */
export interface UseDisclosureReturn {
  /** Current open state. */
  open: boolean;
  /** Toggle open ↔ closed. */
  onToggle: () => void;
  /** Force open. */
  onOpen: () => void;
  /** Force closed. */
  onClose: () => void;
  /** Spread on the trigger element. */
  triggerProps: UseDisclosureTriggerProps;
  /** Spread on the collapsible content region. */
  contentProps: UseDisclosureContentProps;
}

/**
 * Boolean open/closed state with ARIA wiring for a disclosure widget
 * (ExpandableCard, Accordion, Collapsible, etc.). Supports controlled
 * and uncontrolled use: pass `open` + `onOpenChange` for controlled,
 * or just `defaultOpen` for uncontrolled.
 *
 * The returned `triggerProps` / `contentProps` wire up `aria-expanded`,
 * `aria-controls`, and the shared `id` so the consumer doesn't have to
 * generate it. Consumers that need the id directly can read it from
 * `contentProps.id`.
 */
export function useDisclosure(options: UseDisclosureOptions = {}): UseDisclosureReturn {
  const { defaultOpen = false, open: controlledOpen, onOpenChange } = options;

  const [internalOpen, setInternalOpen] = useState(defaultOpen);
  const isControlled = controlledOpen !== undefined;
  const open = isControlled ? controlledOpen : internalOpen;

  const contentId = useId();

  const setOpen = useCallback(
    (next: boolean): void => {
      if (!isControlled) setInternalOpen(next);
      onOpenChange?.(next);
    },
    [isControlled, onOpenChange],
  );

  const onToggle = useCallback((): void => {
    setOpen(!open);
  }, [open, setOpen]);

  const onOpen = useCallback((): void => {
    setOpen(true);
  }, [setOpen]);

  const onClose = useCallback((): void => {
    setOpen(false);
  }, [setOpen]);

  return {
    open,
    onToggle,
    onOpen,
    onClose,
    triggerProps: {
      'aria-expanded': open,
      'aria-controls': contentId,
      onClick: onToggle,
    },
    contentProps: {
      id: contentId,
      role: 'region',
      hidden: !open,
    },
  };
}
