import {
  Children,
  createContext,
  isValidElement,
  useCallback,
  useContext,
  useEffect,
  useId,
  useMemo,
  useRef,
  useState,
} from 'react';
import { createPortal } from 'react-dom';
import { semantic as t, Slot } from '@4lt7ab/core';
import type { ReactNode } from 'react';
import { Combobox } from '../Combobox';
import { Overlay } from '../../atoms/Overlay';
import { Icon } from '../../atoms/Icon';
import type { IconName } from '../../../icons';

// ---------------------------------------------------------------------------
// CommandPalette — Cmd+K-style command palette built on Combobox.
//
// The organism owns three things the consumer otherwise rebuilds:
//   1. Global keyboard shortcut (default Cmd+K / Ctrl+K), document-level
//      listener with an opt-out `disabled` prop per the task's resolved
//      open question ("Lean: document-level, with a disabled prop").
//   2. Portal + overlay so the palette escapes its parent stacking context
//      and renders centered near the top of the viewport.
//   3. Filtering against `value | keywords | rendered text` without forcing
//      consumers to maintain a parallel filter state — Items read the live
//      query from context and self-hide when they don't match. Groups hide
//      themselves when every child has filtered out.
//
// Filtering is intentionally different from Combobox's "consumer renders only
// matching Items" model: a command palette's child set is static (each Item is
// a command the consumer knows ahead of time), so pushing filtering down into
// the Item reads cleaner at the call site than asking consumers to branch on a
// query string over a flat list.
// ---------------------------------------------------------------------------

// ---------------------------------------------------------------------------
// Shortcut helpers
// ---------------------------------------------------------------------------

/**
 * Match spec for the global shortcut. Consumers pass a `key` (lowercase match
 * against `event.key.toLowerCase()`) plus optional `ctrl` / `meta` / `shift` /
 * `alt` modifier requirements. The default spec accepts Cmd+K on macOS and
 * Ctrl+K elsewhere — both typed with a single `{ key: 'k', mod: true }` where
 * `mod` means "platform primary modifier" (Cmd on Mac, Ctrl on Win/Linux).
 */
export interface CommandPaletteShortcut {
  /** Case-insensitive key match against `event.key`. */
  key: string;
  /** When true, require the platform primary modifier (Cmd on Mac, Ctrl elsewhere). */
  mod?: boolean;
  /** Require `ctrlKey` regardless of platform. */
  ctrl?: boolean;
  /** Require `metaKey` regardless of platform. */
  meta?: boolean;
  /** Require `shiftKey`. */
  shift?: boolean;
  /** Require `altKey`. */
  alt?: boolean;
}

function isMac(): boolean {
  if (typeof navigator === 'undefined') return false;
  // userAgent is used purely to pick Cmd vs. Ctrl for the default shortcut;
  // both branches produce a working palette. Keeps the check jsdom-safe.
  return /Mac|iPod|iPhone|iPad/.test(navigator.userAgent ?? '');
}

function matchesShortcut(
  event: KeyboardEvent,
  spec: CommandPaletteShortcut,
): boolean {
  if (event.key.toLowerCase() !== spec.key.toLowerCase()) return false;
  if (spec.mod) {
    const wantMod = isMac() ? event.metaKey : event.ctrlKey;
    if (!wantMod) return false;
  }
  if (spec.ctrl !== undefined && spec.ctrl !== event.ctrlKey) return false;
  if (spec.meta !== undefined && spec.meta !== event.metaKey) return false;
  if (spec.shift !== undefined && spec.shift !== event.shiftKey) return false;
  if (spec.alt !== undefined && spec.alt !== event.altKey) return false;
  return true;
}

const DEFAULT_SHORTCUT: CommandPaletteShortcut = { key: 'k', mod: true };

// ---------------------------------------------------------------------------
// Contexts
// ---------------------------------------------------------------------------

interface RootContextValue {
  open: boolean;
  setOpen: (next: boolean) => void;
  ariaLabel: string;
  titleId: string;
}

const RootContext = createContext<RootContextValue | null>(null);

function useRootContext(part: string): RootContextValue {
  const ctx = useContext(RootContext);
  if (!ctx) {
    throw new Error(
      `<CommandPalette.${part}> must be rendered inside <CommandPalette.Root>.`,
    );
  }
  return ctx;
}

interface QueryContextValue {
  query: string;
  matches: (value: string, keywords: string[], text: string) => boolean;
}

const QueryContext = createContext<QueryContextValue | null>(null);

function useQueryContext(part: string): QueryContextValue {
  const ctx = useContext(QueryContext);
  if (!ctx) {
    throw new Error(
      `<CommandPalette.${part}> must be rendered inside <CommandPalette.Content>.`,
    );
  }
  return ctx;
}

// ---------------------------------------------------------------------------
// Root
// ---------------------------------------------------------------------------

export interface CommandPaletteRootProps {
  /** Controlled open state. */
  open?: boolean;
  /** Uncontrolled initial open state.
   * @default false
   */
  defaultOpen?: boolean;
  /** Called when the palette wants to open or close (shortcut, Escape,
   * overlay click, selection). */
  onOpenChange?: (open: boolean) => void;
  /** Accessible label for the dialog — required. Picked up by `Content`'s
   * `aria-label`. */
  'aria-label': string;
  /** Override the default Cmd+K / Ctrl+K shortcut. Pass `null` to turn off
   * the document-level listener entirely.
   * @default { key: 'k', mod: true }
   */
  shortcut?: CommandPaletteShortcut | null;
  /** When true, the default shortcut is ignored even if `shortcut` is set.
   * Useful for programmatic-only palettes or when a parent wants to gate
   * activation on app state (e.g. "only while logged in").
   * @default false
   */
  disabled?: boolean;
  /** `CommandPalette.Trigger` and `CommandPalette.Content`. */
  children: ReactNode;
}

function Root({
  open: controlledOpen,
  defaultOpen = false,
  onOpenChange,
  'aria-label': ariaLabel,
  shortcut = DEFAULT_SHORTCUT,
  disabled = false,
  children,
}: CommandPaletteRootProps): React.JSX.Element {
  const [internalOpen, setInternalOpen] = useState(defaultOpen);
  const isControlled = controlledOpen !== undefined;
  const open = isControlled ? controlledOpen : internalOpen;
  const titleId = useId();

  const setOpen = useCallback(
    (next: boolean): void => {
      if (!isControlled) setInternalOpen(next);
      onOpenChange?.(next);
    },
    [isControlled, onOpenChange],
  );

  // Document-level shortcut. Attaches only when enabled + shortcut provided,
  // so a disabled/opt-out palette pays no global listener cost. Preventing
  // default on match keeps the browser's built-in Cmd+K behavior (Firefox/Safari
  // address-bar search focus) from racing the palette.
  useEffect(() => {
    if (disabled || !shortcut) return;
    const handler = (e: KeyboardEvent): void => {
      if (matchesShortcut(e, shortcut)) {
        e.preventDefault();
        setOpen(!open);
      }
    };
    document.addEventListener('keydown', handler);
    return () => document.removeEventListener('keydown', handler);
  }, [disabled, shortcut, open, setOpen]);

  const ctx = useMemo<RootContextValue>(
    () => ({ open, setOpen, ariaLabel, titleId }),
    [open, setOpen, ariaLabel, titleId],
  );

  return <RootContext.Provider value={ctx}>{children}</RootContext.Provider>;
}

// ---------------------------------------------------------------------------
// Trigger — optional visible affordance to open the palette.
// ---------------------------------------------------------------------------

export interface CommandPaletteTriggerProps {
  /** When true, merges Trigger's open-toggle behavior onto the single child
   * element instead of rendering a `<button>`. The child must accept `onClick`
   * and `aria-*` props.
   * @default false
   */
  asChild?: boolean;
  /** Trigger content. With `asChild=false` (default), renders inside a plain
   * unstyled `<button>` — consumers wrap their own Button atom for any styled
   * trigger, keeping the library out of the "which variant" decision.
   */
  children: ReactNode;
  /** Optional click handler chained before the open-toggle. Returning `false`
   * or calling `event.preventDefault()` does **not** cancel the toggle —
   * consumers who want gating should use `onOpenChange` on Root. */
  onClick?: React.MouseEventHandler<HTMLElement>;
}

function Trigger({
  asChild = false,
  children,
  onClick,
}: CommandPaletteTriggerProps): React.JSX.Element {
  const { open, setOpen, ariaLabel } = useRootContext('Trigger');

  const handleClick = useCallback(
    (e: React.MouseEvent<HTMLElement>): void => {
      onClick?.(e);
      setOpen(!open);
    },
    [onClick, open, setOpen],
  );

  // Slot merges onto the consumer's element. Button is the default when
  // asChild is off — unstyled (`all: unset`-equivalent reset) so the consumer's
  // visual call site owns the styling.
  if (asChild) {
    return (
      <Slot
        onClick={handleClick}
        aria-haspopup="dialog"
        aria-expanded={open}
        aria-label={ariaLabel}
      >
        {children as React.ReactElement}
      </Slot>
    );
  }

  return (
    <button
      type="button"
      onClick={handleClick}
      aria-haspopup="dialog"
      aria-expanded={open}
      aria-label={ariaLabel}
      style={{
        cursor: 'pointer',
        background: 'transparent',
        border: `${t.borderWidthDefault} solid ${t.colorBorder}`,
        color: t.colorText,
        borderRadius: t.radiusMd,
        padding: `${t.spaceXs} ${t.spaceSm}`,
        fontSize: t.fontSizeSm,
        fontFamily: t.fontSans,
        display: 'inline-flex',
        alignItems: 'center',
        gap: t.spaceXs,
      }}
    >
      {children}
    </button>
  );
}

// ---------------------------------------------------------------------------
// Content — the palette surface. Only mounts when Root is open.
// ---------------------------------------------------------------------------

export interface CommandPaletteContentProps {
  /** Placeholder shown in the filter input.
   * @default 'Type a command or search…'
   */
  placeholder?: string;
  /** Optional rendered-below fallback when no children match the query.
   * @default 'No results.'
   */
  emptyLabel?: ReactNode;
  /** `CommandPalette.Group` and/or `CommandPalette.Item` children. */
  children: ReactNode;
}

function Content({
  placeholder = 'Type a command or search…',
  emptyLabel = 'No results.',
  children,
}: CommandPaletteContentProps): React.JSX.Element | null {
  const { open, setOpen, ariaLabel, titleId } = useRootContext('Content');
  const [query, setQuery] = useState('');
  const panelRef = useRef<HTMLDivElement>(null);

  // Reset the filter on every open so a reopened palette starts clean.
  useEffect(() => {
    if (open) setQuery('');
  }, [open]);

  // Escape is owned at the document level so it beats browser defaults
  // (find-in-page on some platforms) and works whether focus is on the input
  // or a mouseover-focused option.
  useEffect(() => {
    if (!open) return;
    const handler = (e: KeyboardEvent): void => {
      if (e.key === 'Escape') {
        e.preventDefault();
        setOpen(false);
      }
    };
    document.addEventListener('keydown', handler);
    return () => document.removeEventListener('keydown', handler);
  }, [open, setOpen]);

  const matches = useCallback(
    (value: string, keywords: string[], text: string): boolean => {
      const q = query.trim().toLowerCase();
      if (!q) return true;
      if (value.toLowerCase().includes(q)) return true;
      if (text.toLowerCase().includes(q)) return true;
      for (const kw of keywords) {
        if (kw.toLowerCase().includes(q)) return true;
      }
      return false;
    },
    [query],
  );

  const queryCtx = useMemo<QueryContextValue>(
    () => ({ query, matches }),
    [query, matches],
  );

  if (!open) return null;

  // Count rendered items after filtering so we can toggle the Empty slot.
  // Groups hide themselves when they have no matching descendants; Items
  // return null when they don't match; walking the children tree with
  // `hasMatchingItem` over the raw JSX gives us the same count without
  // coordinating state across the subtree.
  const anyMatch = hasMatchingItem(children, query);

  return createPortal(
    <QueryContext.Provider value={queryCtx}>
      <Overlay onClick={() => setOpen(false)} zIndex={t.zIndexModal} />
      <div
        style={{
          position: 'fixed',
          inset: 0,
          display: 'flex',
          alignItems: 'flex-start',
          justifyContent: 'center',
          padding: t.spaceMd,
          paddingTop: '10vh',
          zIndex: `calc(${t.zIndexModal} + 1)`,
          pointerEvents: 'none',
        }}
      >
        <div
          ref={panelRef}
          role="dialog"
          aria-modal="true"
          aria-label={ariaLabel}
          aria-labelledby={undefined}
          data-testid="command-palette-content"
          style={{
            background: t.colorSurface,
            color: t.colorText,
            borderRadius: t.radiusLg,
            boxShadow: t.shadowLg,
            border: `${t.borderWidthDefault} solid ${t.colorBorder}`,
            width: '100%',
            maxWidth: '36rem',
            maxHeight: '70vh',
            display: 'flex',
            flexDirection: 'column',
            overflow: 'hidden',
            pointerEvents: 'auto',
            outline: 'none',
          }}
        >
          <span id={titleId} style={{ display: 'none' }}>
            {ariaLabel}
          </span>
          <Combobox.Root value={query} onValueChange={setQuery}>
            <div
              style={{
                borderBottom: `${t.borderWidthDefault} solid ${t.colorBorder}`,
                padding: t.spaceSm,
              }}
            >
              <Combobox.Input
                placeholder={placeholder}
                aria-label={ariaLabel}
                autoFocus
              />
            </div>
            <div
              style={{
                flex: 1,
                overflowY: 'auto',
                padding: t.spaceXs,
              }}
            >
              <Combobox.List>
                {anyMatch ? children : <Combobox.Empty>{emptyLabel}</Combobox.Empty>}
              </Combobox.List>
            </div>
          </Combobox.Root>
        </div>
      </div>
    </QueryContext.Provider>,
    document.body,
  );
}

// ---------------------------------------------------------------------------
// Group
// ---------------------------------------------------------------------------

export interface CommandPaletteGroupProps {
  /** Heading label rendered above the grouped items (e.g. "Navigation"). */
  label: string;
  /** `CommandPalette.Item` children. */
  children: ReactNode;
}

function Group({ label, children }: CommandPaletteGroupProps): React.JSX.Element | null {
  const { query } = useQueryContext('Group');

  // Hide the whole group (including its label) when none of its Items match
  // the current query. Keeps the "Navigation" heading from orphaning above
  // an empty section as the consumer types.
  if (!hasMatchingItem(children, query)) return null;

  // Intentionally no ARIA role — a `role="group"` wrapper inside `role="listbox"`
  // isn't a valid ARIA container (listbox only permits option children), so
  // assistive tech typically filters it out anyway. The group heading reads as
  // a visible, text-content section label; the listbox sequence and option
  // identities are already announced by the underlying Combobox pattern.
  return (
    <div
      data-command-palette-group
      data-label={label}
      style={{
        padding: `${t.spaceXs} 0`,
      }}
    >
      <div
        aria-hidden="true"
        style={{
          padding: `${t.spaceXs} ${t.spaceSm}`,
          fontSize: t.fontSizeXs,
          fontWeight: t.fontWeightSemibold,
          color: t.colorTextMuted,
          textTransform: 'uppercase',
          letterSpacing: '0.04em',
          fontFamily: t.fontSans,
        }}
      >
        {label}
      </div>
      {children}
    </div>
  );
}

// ---------------------------------------------------------------------------
// Item
// ---------------------------------------------------------------------------

export interface CommandPaletteItemProps {
  /** Stable identifier for the command. Also used as fallback match text. */
  value: string;
  /** Fires when the consumer picks this command (click or Enter on the
   * focused row). Root closes automatically after `onSelect` returns. */
  onSelect: () => void;
  /** Optional leading icon (library registry name). Consumers wanting a
   * custom icon pass a `ReactNode` via the `children` tree instead. */
  icon?: IconName;
  /** Keyboard hint rendered on the right as a `<kbd>` sequence. Pass either
   * the literal hint text (`'⌘K'`) or an array of key parts rendered as
   * separate `<kbd>` spans (`['⌘', 'K']`). */
  shortcut?: string | string[];
  /** Extra match text that isn't visible in the row. Useful for aliases —
   * `keywords={['cmd', 'terminal']}` on a "Run command…" item. */
  keywords?: string[];
  /** Row content. String children double as the match text; use a ReactNode
   * if you need formatting. */
  children: ReactNode;
}

function Item({
  value,
  onSelect,
  icon,
  shortcut,
  keywords = [],
  children,
}: CommandPaletteItemProps): React.JSX.Element | null {
  const { matches } = useQueryContext('Item');
  const { setOpen } = useRootContext('Item');

  const text = typeof children === 'string' ? children : value;
  if (!matches(value, keywords, text)) return null;

  // Close first, then run onSelect — matches the common pattern (the consumer
  // navigates or opens a second modal inside onSelect and doesn't need to see
  // the palette lingering behind it). Consumers that want to keep the palette
  // open after selection can reopen it from their handler.
  const handleSelect = (): void => {
    setOpen(false);
    onSelect();
  };

  const shortcutParts = Array.isArray(shortcut) ? shortcut : shortcut ? [shortcut] : [];

  return (
    <Combobox.Item value={value} textValue={text}>
      <span
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: t.spaceSm,
          width: '100%',
        }}
        onClick={handleSelect}
      >
        {icon && (
          <span
            aria-hidden="true"
            style={{
              display: 'inline-flex',
              color: t.colorTextMuted,
            }}
          >
            <Icon name={icon} size="sm" />
          </span>
        )}
        <span style={{ flex: 1, minWidth: 0 }}>{children}</span>
        {shortcutParts.length > 0 && (
          <span
            aria-hidden="true"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '2px',
              marginLeft: 'auto',
              flexShrink: 0,
            }}
          >
            {shortcutParts.map((part, i) => (
              <kbd
                key={`${value}-kbd-${i}`}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  padding: `0 ${t.spaceXs}`,
                  minWidth: '1.5em',
                  height: '1.5em',
                  justifyContent: 'center',
                  background: t.colorSurfaceRaised,
                  color: t.colorTextMuted,
                  border: `${t.borderWidthDefault} solid ${t.colorBorder}`,
                  borderRadius: t.radiusSm,
                  fontSize: t.fontSizeXs,
                  fontFamily: t.fontMono,
                  lineHeight: 1,
                }}
              >
                {part}
              </kbd>
            ))}
          </span>
        )}
      </span>
    </Combobox.Item>
  );
}

// ---------------------------------------------------------------------------
// Filter tree walk
// ---------------------------------------------------------------------------

/**
 * Returns true when at least one `CommandPalette.Item` descendant in the
 * children tree would render at the current query. Walks through `Group`s
 * (and any other pass-through wrappers) by recursing into their props.children.
 *
 * This runs every render of Content; the palette is an opened-then-closed
 * surface so the traversal cost is only paid while the user is typing.
 */
function hasMatchingItem(children: ReactNode, query: string): boolean {
  const q = query.trim().toLowerCase();
  let found = false;

  const visit = (node: ReactNode): void => {
    if (found) return;
    Children.forEach(node, (child) => {
      if (found) return;
      if (!isValidElement(child)) return;
      // Narrow the element's props via a structural cast. We only read the
      // fields each compound part is known to declare, so this stays safe.
      const props = child.props as {
        value?: string;
        keywords?: string[];
        children?: ReactNode;
        onSelect?: () => void;
      };
      // Heuristic: an element looks like an Item when it declares both
      // `value` and `onSelect`. That's the contract above. Avoids comparing
      // against `Item` identity, which doesn't survive re-exports and feels
      // brittle.
      const looksLikeItem =
        typeof props.value === 'string' &&
        typeof props.onSelect === 'function';
      if (looksLikeItem) {
        const itemValue = props.value ?? '';
        const keywords = props.keywords ?? [];
        const text =
          typeof props.children === 'string' ? props.children : itemValue;
        if (!q) {
          found = true;
          return;
        }
        if (
          itemValue.toLowerCase().includes(q) ||
          text.toLowerCase().includes(q) ||
          keywords.some((k) => k.toLowerCase().includes(q))
        ) {
          found = true;
          return;
        }
        return;
      }
      // Not an Item — recurse into its children if any.
      if (props.children !== undefined) visit(props.children);
    });
  };

  visit(children);
  return found;
}

// ---------------------------------------------------------------------------
// Compound export
// ---------------------------------------------------------------------------

/**
 * Cmd+K command palette built on the `Combobox` compound plus a document-level
 * shortcut, a modal-style portal, and a filtered subtree.
 *
 * ```tsx
 * <CommandPalette.Root aria-label="Command palette">
 *   <CommandPalette.Trigger>
 *     <span>Commands</span>
 *     <kbd>⌘K</kbd>
 *   </CommandPalette.Trigger>
 *   <CommandPalette.Content>
 *     <CommandPalette.Group label="Navigation">
 *       <CommandPalette.Item
 *         value="home"
 *         icon="arrow-left"
 *         shortcut={['G', 'H']}
 *         onSelect={() => router.push('/')}
 *       >
 *         Go to home
 *       </CommandPalette.Item>
 *     </CommandPalette.Group>
 *     <CommandPalette.Group label="Actions">
 *       <CommandPalette.Item
 *         value="new-task"
 *         icon="plus"
 *         shortcut="⌘N"
 *         keywords={['create', 'todo']}
 *         onSelect={() => openNewTask()}
 *       >
 *         New task
 *       </CommandPalette.Item>
 *     </CommandPalette.Group>
 *   </CommandPalette.Content>
 * </CommandPalette.Root>
 * ```
 */
export const CommandPalette = {
  Root,
  Trigger,
  Content,
  Group,
  Item,
};
