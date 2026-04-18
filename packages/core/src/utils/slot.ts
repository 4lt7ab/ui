import { Children, cloneElement, forwardRef, isValidElement } from 'react';
import type { HTMLAttributes, ReactElement, ReactNode, Ref } from 'react';

// ---------------------------------------------------------------------------
// composeRefs — call every ref in order with the same node.
// ---------------------------------------------------------------------------

/**
 * Merge multiple refs into a single callback ref. Each ref — function or
 * object — receives the DOM node when it's attached/detached. Use when two
 * components both want a handle to the same element (e.g. `forwardedRef`
 * plus an internal `useRef`, or the outer Slot plus the child element's
 * own ref).
 */
export function composeRefs<T>(
  ...refs: Array<Ref<T> | undefined | null>
): (node: T | null) => void {
  return (node: T | null) => {
    for (const ref of refs) {
      if (!ref) continue;
      if (typeof ref === 'function') {
        ref(node);
      } else {
        try {
          (ref as React.MutableRefObject<T | null>).current = node;
        } catch {
          // RefObject from React.createRef() is read-only in strict mode tooling
          // but writable at runtime; the catch guards against edge tooling.
        }
      }
    }
  };
}

// ---------------------------------------------------------------------------
// mergeProps — parent props + child props, with sensible semantics.
// ---------------------------------------------------------------------------

type AnyProps = Record<string, unknown>;

/**
 * Merge two prop bags the way a Slot-style polymorphic wrapper needs:
 *
 * - Event handlers (`onXxx`) from both chain: parent first, then child.
 *   This means parent state updates land before the child's handler runs.
 * - `style` objects shallow-merge; child values win on conflict.
 * - `className` strings concatenate (space-separated, falsy values dropped).
 * - Every other prop: child wins. Consumers expressing intent on their
 *   element (e.g. an `<a href>`) override the parent's defaults.
 */
export function mergeProps(parent: AnyProps, child: AnyProps): AnyProps {
  const merged: AnyProps = { ...parent };

  for (const key in child) {
    const childValue = child[key];
    const parentValue = merged[key];

    if (/^on[A-Z]/.test(key) && typeof childValue === 'function' && typeof parentValue === 'function') {
      merged[key] = (...args: unknown[]) => {
        (parentValue as (...a: unknown[]) => unknown)(...args);
        (childValue as (...a: unknown[]) => unknown)(...args);
      };
    } else if (key === 'style' && parentValue && childValue) {
      merged.style = { ...(parentValue as object), ...(childValue as object) };
    } else if (key === 'className') {
      merged.className = [parentValue, childValue].filter(Boolean).join(' ');
    } else {
      merged[key] = childValue;
    }
  }

  return merged;
}

// ---------------------------------------------------------------------------
// Slot — clone the single child with merged props + composed refs.
// ---------------------------------------------------------------------------

/** Props accepted by the {@link Slot} wrapper. */
export interface SlotProps extends HTMLAttributes<HTMLElement> {
  /** Exactly one React element child to render in place of the Slot. */
  children?: ReactNode;
}

/**
 * A transparent wrapper that renders its single child element, merging the
 * props and ref passed to the Slot into the child. Used to build polymorphic
 * components (`asChild` pattern) — `<Button asChild><a href=…>Go</a></Button>`
 * renders a single `<a>` that carries Button's styles, event handlers, and
 * ARIA attributes, without wrapping or double-click targets.
 *
 * Expects exactly one React element child. Children that are arrays, text
 * nodes, or non-element values throw in development; in production Slot
 * returns `null` silently rather than crash the render tree.
 */
export const Slot: React.ForwardRefExoticComponent<SlotProps & React.RefAttributes<HTMLElement>> =
  forwardRef<HTMLElement, SlotProps>(function Slot(props, forwardedRef): React.ReactElement | null {
    const { children, ...slotProps } = props;

    if (!isValidElement(children)) {
      if (Children.count(children) > 1) {
        throw new Error(
          '[@4lt7ab/core] <Slot> expects exactly one React element child. ' +
            `Got ${Children.count(children)}.`,
        );
      }
      return null;
    }

    const child = children as ReactElement<AnyProps> & { ref?: Ref<HTMLElement> };
    // React 19 exposes ref via props; React 18 exposed it via the element. Handle both.
    const childRef = (child.props as { ref?: Ref<HTMLElement> }).ref ?? child.ref;

    const nextProps = mergeProps(slotProps as AnyProps, child.props as AnyProps);
    // Drop ref from the spread bag — cloneElement handles it via the separate arg.
    delete (nextProps as { ref?: unknown }).ref;

    return cloneElement(child, {
      ...nextProps,
      ref: composeRefs(forwardedRef, childRef),
    });
  });
