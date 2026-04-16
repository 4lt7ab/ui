import { useState } from 'react';
import { SearchInput, SegmentedControl, Stack } from '@4lt7ab/ui';
import { DocBlock, PropDemo, type PropMeta } from '../components/DocBlock';

const props: PropMeta[] = [
  { name: 'value', type: 'string', required: true, description: 'Current search value (controlled).' },
  { name: 'onSearch', type: '(value: string) => void', required: true, description: 'Debounced search callback -- fires after debounceMs of inactivity.' },
  { name: 'debounceMs', type: 'number', default: '300', description: 'Debounce delay in milliseconds.' },
  { name: 'trailing', type: 'ReactNode', description: 'Optional content rendered inside the input on the right side (toggle, clear button, etc.).' },
  { name: 'placeholder', type: 'string', default: "'Search...'", description: 'Placeholder text shown when empty.' },
  { name: 'disabled', type: 'boolean', default: 'false', description: 'Disables the input with muted styling.' },
  { name: 'name', type: 'string', description: 'Form field name for submission.' },
  { name: 'autoFocus', type: 'boolean', description: 'Automatically focus the input on mount.' },
  { name: 'tabIndex', type: 'number', description: 'Tab order override.' },
];

export function SearchInputDemo(): React.JSX.Element {
  const [query1, setQuery1] = useState('');
  const [result1, setResult1] = useState('');

  const [query2, setQuery2] = useState('');
  const [result2, setResult2] = useState('');
  const [mode, setMode] = useState('keyword');

  return (
    <DocBlock props={props}>
      <PropDemo name="value + onSearch" description="The input updates immediately on keystroke, but onSearch only fires after the debounce period.">
        <div style={{ maxWidth: '24rem' }}>
          <Stack gap="sm">
            <SearchInput
              value={query1}
              onSearch={(v) => { setQuery1(v); setResult1(v); }}
              placeholder="Search components..."
            />
            <span style={{ fontSize: '0.75rem', opacity: 0.6 }}>
              Debounced value: {result1 || '(empty)'}
            </span>
          </Stack>
        </div>
      </PropDemo>

      <PropDemo name="debounceMs" description="Controls how long to wait after the last keystroke before firing onSearch. Default is 300ms.">
        <div style={{ maxWidth: '24rem' }}>
          <Stack gap="sm">
            <SearchInput
              value={query2}
              onSearch={(v) => { setQuery2(v); setResult2(v); }}
              placeholder="500ms debounce..."
              debounceMs={500}
            />
            <span style={{ fontSize: '0.75rem', opacity: 0.6 }}>
              Debounced value: {result2 || '(empty)'}
            </span>
          </Stack>
        </div>
      </PropDemo>

      <PropDemo name="trailing" description="Renders content inside the input on the right side. Useful for mode toggles, clear buttons, or filter indicators.">
        <div style={{ maxWidth: '28rem' }}>
          <SearchInput
            value=""
            onSearch={() => {}}
            placeholder={mode === 'keyword' ? 'Search by keyword...' : 'Semantic search...'}
            trailing={
              <SegmentedControl
                size="sm"
                segments={[
                  { value: 'keyword', label: '', icon: 'search' },
                  { value: 'semantic', label: '', icon: 'settings' },
                ]}
                value={mode}
                onChange={setMode}
              />
            }
          />
        </div>
      </PropDemo>

      <PropDemo name="disabled" description="Disables the input with muted background and not-allowed cursor.">
        <div style={{ maxWidth: '24rem' }}>
          <SearchInput
            value=""
            onSearch={() => {}}
            placeholder="Disabled search"
            disabled
          />
        </div>
      </PropDemo>
    </DocBlock>
  );
}
