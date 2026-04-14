import { forwardRef, useId } from 'react';
import { semantic as t, useInjectStyles } from '@4lt7ab/core';
import { ModalShell } from '../ModalShell';
import { IconButton } from '../IconButton';

/** A single keyboard shortcut definition. */
export interface ShortcutDef {
  /** Key combination display strings, e.g. ["Cmd", "K"] or ["Ctrl", "Shift", "P"]. */
  keys: string[];
  /** What the shortcut does. */
  description: string;
}

/** A named group of shortcuts. */
export interface ShortcutGroup {
  /** Group heading, e.g. "Navigation", "Editing". */
  group: string;
  /** Shortcuts in this group. */
  shortcuts: ShortcutDef[];
}

/** A modal displaying keyboard shortcuts grouped by category. Wraps ModalShell. */
export interface ShortcutHelpModalProps {
  /** Shortcut data grouped by category. */
  shortcuts: ShortcutGroup[];
  /** Called when the modal should close. */
  onClose: () => void;
  /** Modal heading.
   * @default 'Keyboard Shortcuts'
   */
  title?: string;
  /** Maximum width of the modal panel in pixels.
   * @default 520
   */
  maxWidth?: number;
}

export const ShortcutHelpModal: React.ForwardRefExoticComponent<Omit<ShortcutHelpModalProps, 'ref'> & React.RefAttributes<HTMLDivElement>> = forwardRef<HTMLDivElement, ShortcutHelpModalProps>(
  function ShortcutHelpModal({
    shortcuts,
    onClose,
    title = 'Keyboard Shortcuts',
    maxWidth = 520,
  }, ref): React.JSX.Element {
    const titleId = useId();
    const uid = useId();
    const styleId = `shortcut-help-${uid.replace(/:/g, '')}`;

    useInjectStyles(
      styleId,
      `[data-shortcut-help-id="${styleId}"] kbd:hover {
        background: ${t.colorSurfaceRaised} !important;
        border-color: ${t.colorBorderFocused} !important;
      }`,
    );

    return (
      <ModalShell ref={ref} onClose={onClose} maxWidth={maxWidth} titleId={titleId}>
        <div data-shortcut-help-id={styleId}>
          {/* Header */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginBottom: t.spaceLg,
            }}
          >
            <h2
              id={titleId}
              style={{
                margin: 0,
                fontWeight: t.fontWeightSemibold,
                fontFamily: t.fontSans,
                color: t.colorText,
                fontSize: t.fontSizeLg,
              }}
            >
              {title}
            </h2>
            <IconButton
              icon="close"
              aria-label="Close"
              onClick={onClose}
              style={{ marginRight: -8, marginTop: -8 }}
            />
          </div>

          {/* Groups */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: t.spaceLg }}>
            {shortcuts.map((group) => (
              <div key={group.group}>
                <h3
                  style={{
                    margin: 0,
                    marginBottom: t.spaceSm,
                    fontWeight: t.fontWeightMedium,
                    fontFamily: t.fontSans,
                    color: t.colorTextMuted,
                    fontSize: t.fontSizeXs,
                    textTransform: 'uppercase',
                    letterSpacing: t.letterSpacingWide,
                  }}
                >
                  {group.group}
                </h3>
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 0,
                  }}
                >
                  {group.shortcuts.map((shortcut) => (
                    <div
                      key={shortcut.description}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        padding: `${t.spaceXs} 0`,
                        borderBottom: `1px solid ${t.colorBorder}`,
                      }}
                    >
                      <span
                        style={{
                          fontFamily: t.fontSans,
                          fontSize: t.fontSizeSm,
                          color: t.colorText,
                        }}
                      >
                        {shortcut.description}
                      </span>
                      <span
                        style={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: t.spaceXs,
                          flexShrink: 0,
                          marginLeft: t.spaceMd,
                        }}
                      >
                        {shortcut.keys.map((key, i) => (
                          <span key={i} style={{ display: 'inline-flex', alignItems: 'center', gap: t.spaceXs }}>
                            {i > 0 && (
                              <span
                                style={{
                                  fontSize: t.fontSizeXs,
                                  color: t.colorTextMuted,
                                  fontFamily: t.fontSans,
                                }}
                              >
                                +
                              </span>
                            )}
                            <kbd
                              style={{
                                display: 'inline-flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                minWidth: 24,
                                height: 24,
                                padding: `0 ${t.spaceXs}`,
                                fontFamily: t.fontMono,
                                fontSize: t.fontSizeXs,
                                fontWeight: t.fontWeightMedium,
                                lineHeight: 1,
                                color: t.colorTextSecondary,
                                background: t.colorSurfaceInput,
                                border: `1px solid ${t.colorBorder}`,
                                borderRadius: t.radiusSm,
                                boxShadow: `0 1px 0 ${t.colorBorder}`,
                                transition: 'background 150ms ease, border-color 150ms ease',
                              }}
                            >
                              {key}
                            </kbd>
                          </span>
                        ))}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </ModalShell>
    );
  }
);
