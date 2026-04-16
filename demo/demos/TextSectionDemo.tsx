import { useState } from 'react';
import { TextSection } from '@4lt7ab/content';
import { DocBlock, PropDemo, type PropMeta } from '../components/DocBlock';

const props: PropMeta[] = [
  { name: 'content', type: 'string | null', description: 'Current content (markdown string). Empty/null shows the empty state.' },
  { name: 'editing', type: 'boolean', required: true, description: 'Whether the section is in editing mode.' },
  { name: 'editValue', type: 'string', required: true, description: 'Current value in the textarea during editing.' },
  { name: 'onStartEdit', type: '() => void', required: true, description: 'Called when user clicks content or empty state to start editing.' },
  { name: 'onEditChange', type: '(value: string) => void', required: true, description: 'Called with new textarea value on change.' },
  { name: 'onSave', type: '() => void', required: true, description: 'Called when user saves (button or Cmd+Enter).' },
  { name: 'onCancel', type: '() => void', required: true, description: 'Called when user cancels (button or Escape).' },
  { name: 'fieldLabel', type: 'string', description: 'Accessible label for the section (e.g. "Summary", "Context").' },
  { name: 'rows', type: 'number', default: '4', description: 'Number of textarea rows in editing mode.' },
  { name: 'placeholder', type: 'string', default: "'Click to add content...'", description: 'Placeholder text for the empty state.' },
];

const SAMPLE_MARKDOWN = `This is some **existing content** with [a link](https://example.com) and \`inline code\`.

It supports full markdown — lists, headings, code blocks, and more.`;

function TextSectionWithState({
  initialContent,
  fieldLabel,
  placeholder,
  rows,
}: {
  initialContent: string | null;
  fieldLabel?: string;
  placeholder?: string;
  rows?: number;
}): React.JSX.Element {
  const [content, setContent] = useState<string | null>(initialContent);
  const [editing, setEditing] = useState(false);
  const [editValue, setEditValue] = useState('');

  const startEdit = (): void => {
    setEditValue(content ?? '');
    setEditing(true);
  };
  const save = (): void => {
    setContent(editValue || null);
    setEditing(false);
  };
  const cancel = (): void => {
    setEditing(false);
  };

  return (
    <TextSection
      content={content}
      editing={editing}
      editValue={editValue}
      onStartEdit={startEdit}
      onEditChange={setEditValue}
      onSave={save}
      onCancel={cancel}
      fieldLabel={fieldLabel}
      placeholder={placeholder}
      rows={rows}
    />
  );
}

export function TextSectionDemo(): React.JSX.Element {
  return (
    <DocBlock props={props}>
      <PropDemo name="content" description="When content is provided, it renders as Markdown. Click to start editing. When null, shows the empty-state placeholder.">
        <TextSectionWithState
          initialContent={SAMPLE_MARKDOWN}
          fieldLabel="Summary"
          rows={6}
        />
      </PropDemo>

      <PropDemo name="placeholder" description="Custom placeholder text shown in the empty state. Click to start editing.">
        <TextSectionWithState
          initialContent={null}
          fieldLabel="Notes"
          placeholder="Click to add notes..."
        />
      </PropDemo>
    </DocBlock>
  );
}
