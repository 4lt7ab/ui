import { useState } from 'react';
import { TextSection } from '@4lt7ab/content';

const SAMPLE_MARKDOWN = `This is some **existing content** with [a link](https://example.com) and \`inline code\`.

It supports full markdown — lists, headings, code blocks, and more.`;

export function TextSectionDemo(): React.JSX.Element {
  // ── Section with content ──
  const [content1, setContent1] = useState<string | null>(SAMPLE_MARKDOWN);
  const [editing1, setEditing1] = useState(false);
  const [editValue1, setEditValue1] = useState('');

  const startEdit1 = (): void => {
    setEditValue1(content1 ?? '');
    setEditing1(true);
  };
  const save1 = (): void => {
    setContent1(editValue1 || null);
    setEditing1(false);
  };
  const cancel1 = (): void => {
    setEditing1(false);
  };

  // ── Empty section ──
  const [content2, setContent2] = useState<string | null>(null);
  const [editing2, setEditing2] = useState(false);
  const [editValue2, setEditValue2] = useState('');

  const startEdit2 = (): void => {
    setEditValue2(content2 ?? '');
    setEditing2(true);
  };
  const save2 = (): void => {
    setContent2(editValue2 || null);
    setEditing2(false);
  };
  const cancel2 = (): void => {
    setEditing2(false);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-xl)' }}>
      <div>
        <h3 style={{
          margin: '0 0 var(--space-sm)',
          fontSize: '0.8125rem',
          fontWeight: 600,
          color: 'var(--color-text-muted)',
          textTransform: 'uppercase',
          letterSpacing: '0.04em',
        }}>
          With content (click to edit)
        </h3>
        <TextSection
          content={content1}
          editing={editing1}
          editValue={editValue1}
          onStartEdit={startEdit1}
          onEditChange={setEditValue1}
          onSave={save1}
          onCancel={cancel1}
          fieldLabel="Summary"
          rows={6}
        />
      </div>

      <div>
        <h3 style={{
          margin: '0 0 var(--space-sm)',
          fontSize: '0.8125rem',
          fontWeight: 600,
          color: 'var(--color-text-muted)',
          textTransform: 'uppercase',
          letterSpacing: '0.04em',
        }}>
          Empty state (click to add)
        </h3>
        <TextSection
          content={content2}
          editing={editing2}
          editValue={editValue2}
          onStartEdit={startEdit2}
          onEditChange={setEditValue2}
          onSave={save2}
          onCancel={cancel2}
          fieldLabel="Notes"
          placeholder="Click to add notes..."
        />
      </div>
    </div>
  );
}
