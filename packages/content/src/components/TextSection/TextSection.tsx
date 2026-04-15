import { useCallback } from 'react';
import type { KeyboardEvent } from 'react';
import { semantic as t, useInjectStyles } from '@4lt7ab/core';
import { Markdown } from '../Markdown';
import { MIX_HOVER } from '../../constants';

export interface TextSectionProps {
  /** Current content (markdown string). Empty/null = empty state. */
  content?: string | null;
  /** Whether the section is in editing mode. */
  editing: boolean;
  /** Current value in the textarea during editing. */
  editValue: string;
  /** Called when user clicks content or empty state to start editing. */
  onStartEdit: () => void;
  /** Called with new textarea value on change. */
  onEditChange: (value: string) => void;
  /** Called when user saves (button or Cmd+Enter). */
  onSave: () => void;
  /** Called when user cancels (button or Escape). */
  onCancel: () => void;
  /** Accessible label for the section (e.g. "Summary", "Context"). */
  fieldLabel?: string;
  /** Number of textarea rows. @default 4 */
  rows?: number;
  /** Placeholder text for empty state. @default "Click to add content..." */
  placeholder?: string;
}

const STYLES_ID = 'alttab-text-section';

const textSectionCSS = /* css */ `
  .alttab-text-section-content {
    cursor: pointer;
    border-radius: ${t.radiusMd};
    transition: background ${t.transitionBase};
  }

  .alttab-text-section-content:hover {
    background: color-mix(in srgb, ${t.colorText} ${MIX_HOVER}, transparent);
  }

  .alttab-text-section-empty {
    cursor: pointer;
    border-radius: ${t.radiusMd};
    padding: ${t.spaceSm} ${t.spaceMd};
    font-style: italic;
    color: ${t.colorTextMuted};
    transition: background ${t.transitionBase};
  }

  .alttab-text-section-empty:hover {
    background: color-mix(in srgb, ${t.colorText} ${MIX_HOVER}, transparent);
  }
`;

/**
 * A three-state editable text section that couples Markdown rendering
 * with textarea editing. Click content or empty state to start editing;
 * save with a button or Cmd/Ctrl+Enter; cancel with a button or Escape.
 */
export function TextSection({
  content,
  editing,
  editValue,
  onStartEdit,
  onEditChange,
  onSave,
  onCancel,
  fieldLabel,
  rows = 4,
  placeholder = 'Click to add content...',
}: TextSectionProps): React.JSX.Element {
  useInjectStyles(STYLES_ID, textSectionCSS);

  const handleKeyDown = useCallback(
    (e: KeyboardEvent<HTMLTextAreaElement>): void => {
      if (e.key === 'Escape') {
        e.preventDefault();
        onCancel();
      } else if (e.key === 'Enter' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        onSave();
      }
    },
    [onCancel, onSave],
  );

  // ── Editing state ──
  if (editing) {
    return (
      <div role="group" aria-label={fieldLabel}>
        <textarea
          value={editValue}
          onChange={(e) => onEditChange(e.target.value)}
          onKeyDown={handleKeyDown}
          rows={rows}
          aria-label={fieldLabel ? `Edit ${fieldLabel}` : 'Edit content'}
          style={{
            display: 'block',
            width: '100%',
            boxSizing: 'border-box',
            padding: t.spaceSm,
            fontFamily: t.fontMono,
            fontSize: '0.875rem',
            lineHeight: '1.6',
            color: t.colorText,
            background: t.colorSurfacePage,
            border: `${t.borderWidthDefault} solid ${t.colorBorder}`,
            borderRadius: t.radiusMd,
            resize: 'vertical',
            outline: 'none',
          }}
        />
        <div
          style={{
            display: 'flex',
            gap: t.spaceSm,
            marginTop: t.spaceSm,
          }}
        >
          <button
            type="button"
            onClick={onSave}
            style={{
              padding: `${t.spaceXs} ${t.spaceMd}`,
              fontSize: '0.8125rem',
              fontWeight: 600,
              fontFamily: t.fontSans,
              color: t.colorTextInverse,
              background: t.colorActionPrimary,
              border: 'none',
              borderRadius: t.radiusSm,
              cursor: 'pointer',
            }}
          >
            Save
          </button>
          <button
            type="button"
            onClick={onCancel}
            style={{
              padding: `${t.spaceXs} ${t.spaceMd}`,
              fontSize: '0.8125rem',
              fontWeight: 600,
              fontFamily: t.fontSans,
              color: t.colorTextSecondary,
              background: 'transparent',
              border: `${t.borderWidthDefault} solid ${t.colorBorder}`,
              borderRadius: t.radiusSm,
              cursor: 'pointer',
            }}
          >
            Cancel
          </button>
        </div>
      </div>
    );
  }

  // ── Content state ──
  if (content) {
    return (
      <div
        className="alttab-text-section-content"
        role="button"
        tabIndex={0}
        aria-label={fieldLabel ? `Edit ${fieldLabel}` : 'Edit content'}
        onClick={onStartEdit}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            onStartEdit();
          }
        }}
      >
        <Markdown>{content}</Markdown>
      </div>
    );
  }

  // ── Empty state ──
  return (
    <div
      className="alttab-text-section-empty"
      role="button"
      tabIndex={0}
      aria-label={fieldLabel ? `Add ${fieldLabel}` : 'Add content'}
      onClick={onStartEdit}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onStartEdit();
        }
      }}
    >
      {placeholder}
    </div>
  );
}
