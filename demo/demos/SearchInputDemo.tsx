import { useState } from 'react';
import { SearchInput, SegmentedControl, Stack } from '@4lt7ab/ui';

export function SearchInputDemo(): React.JSX.Element {
  const [query1, setQuery1] = useState('');
  const [result1, setResult1] = useState('');

  const [query2, setQuery2] = useState('');
  const [result2, setResult2] = useState('');
  const [mode, setMode] = useState('keyword');

  return (
    <Stack gap="xl">
      {/* Basic */}
      <Stack gap="sm">
        <h3 style={{ margin: 0, fontSize: '1rem', fontWeight: 600 }}>Basic</h3>
        <div style={{ maxWidth: '24rem' }}>
          <Stack gap="md">
            <SearchInput
              value={query1}
              onSearch={(v) => { setQuery1(v); setResult1(v); }}
              placeholder="Search components..."
            />
            <span style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)' }}>
              Debounced value: {result1 || '(empty)'}
            </span>
          </Stack>
        </div>
      </Stack>

      {/* With SegmentedControl trailing */}
      <Stack gap="sm">
        <h3 style={{ margin: 0, fontSize: '1rem', fontWeight: 600 }}>With trailing toggle</h3>
        <div style={{ maxWidth: '28rem' }}>
          <Stack gap="md">
            <SearchInput
              value={query2}
              onSearch={(v) => { setQuery2(v); setResult2(v); }}
              placeholder={mode === 'keyword' ? 'Search by keyword...' : 'Semantic search...'}
              debounceMs={500}
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
            <span style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)' }}>
              Mode: {mode} | Debounced value: {result2 || '(empty)'}
            </span>
          </Stack>
        </div>
      </Stack>

      {/* Disabled */}
      <Stack gap="sm">
        <h3 style={{ margin: 0, fontSize: '1rem', fontWeight: 600 }}>Disabled</h3>
        <div style={{ maxWidth: '24rem' }}>
          <Stack gap="md">
            <SearchInput
              value=""
              onSearch={() => {}}
              placeholder="Disabled search"
              disabled
            />
          </Stack>
        </div>
      </Stack>
    </Stack>
  );
}
