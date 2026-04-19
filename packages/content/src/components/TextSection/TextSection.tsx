import { Markdown } from '../Markdown';

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

/**
 * @deprecated Use `<Markdown editable>` instead. `TextSection` is a
 * backward-compatibility alias for the editable-mode rendering in
 * `Markdown` and will be removed in a future major release. See the
 * 0.4.0 upgrade guide, §textsection, for the migration snippet.
 *
 * Three-state click-to-edit markdown section. Delegates to `Markdown`'s
 * editable mode — the behavioral contract (three states, Cmd/Ctrl+Enter
 * to save, Escape to cancel, Save/Cancel buttons matching the library's
 * primary + secondary Button variants) is owned by `Markdown` now.
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
  rows,
  placeholder,
}: TextSectionProps): React.JSX.Element {
  return (
    <Markdown
      editable
      editing={editing}
      value={editValue}
      onStartEdit={onStartEdit}
      onEditChange={onEditChange}
      onSave={onSave}
      onCancel={onCancel}
      fieldLabel={fieldLabel}
      rows={rows}
      placeholder={placeholder}
    >
      {content ?? ''}
    </Markdown>
  );
}
