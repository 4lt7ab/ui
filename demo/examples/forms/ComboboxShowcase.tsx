import { useMemo, useState } from 'react';
import { Combobox, Stack, semantic as t } from '@4lt7ab/ui';

// ---------------------------------------------------------------------------
// Combobox showcase — live example for 05-forms.md
// ---------------------------------------------------------------------------
//
// Demonstrates the behaviors a consumer can't see from a code fence:
//
//   - The consumer owns filtering — `Combobox` doesn't filter the Items
//     it renders; pass only the options that should currently be visible.
//   - `onValueChange` fires on every input edit (free-text + selection).
//   - `onSelect` fires only when an option is picked (distinguishes typed
//     values from selected ones).
//   - `Combobox.Empty` renders when the list has no items — useful for
//     async-loading and filtered-out states.

interface Option {
  value: string;
  label: string;
  hint: string;
}

const PEOPLE: readonly Option[] = [
  { value: 'alex', label: 'Alex Rivera', hint: 'Design' },
  { value: 'sam', label: 'Sam Patel', hint: 'Engineering' },
  { value: 'jordan', label: 'Jordan Kim', hint: 'Product' },
  { value: 'pat', label: 'Pat Nguyen', hint: 'Engineering' },
  { value: 'wren', label: 'Wren Ito', hint: 'Design' },
  { value: 'ari', label: 'Ari Okafor', hint: 'Research' },
  { value: 'lin', label: 'Lin Chen', hint: 'Engineering' },
];

function filterOptions(opts: readonly Option[], q: string): Option[] {
  if (!q) return [...opts];
  const needle = q.toLowerCase();
  return opts.filter(
    (o) => o.label.toLowerCase().includes(needle) || o.hint.toLowerCase().includes(needle),
  );
}

export function ComboboxShowcase(): React.JSX.Element {
  const [query, setQuery] = useState('');
  const [picked, setPicked] = useState<Option | null>(null);

  const visible = useMemo(() => filterOptions(PEOPLE, query), [query]);

  return (
    <div style={{ maxWidth: '24rem' }}>
    <Stack gap="md">
      <Combobox.Root
        value={query}
        onValueChange={setQuery}
        onSelect={(opt) => {
          const match = PEOPLE.find((p) => p.value === opt.value);
          if (match) setPicked(match);
        }}
      >
        <Combobox.Input placeholder="Assign to…" aria-label="Assignee" />
        <Combobox.List>
          {visible.length === 0 ? (
            <Combobox.Empty>No teammates match “{query}”.</Combobox.Empty>
          ) : (
            visible.map((o) => (
              <Combobox.Item key={o.value} value={o.value} textValue={o.label}>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  <span style={{ color: t.colorText }}>{o.label}</span>
                  <span style={{ fontSize: t.fontSizeXs, color: t.colorTextMuted }}>
                    {o.hint}
                  </span>
                </div>
              </Combobox.Item>
            ))
          )}
        </Combobox.List>
      </Combobox.Root>

      <div style={statusStyle}>
        <div>
          <strong style={{ color: t.colorTextMuted }}>Typed: </strong>
          <code>{query || '(empty)'}</code>
        </div>
        <div>
          <strong style={{ color: t.colorTextMuted }}>Last selected: </strong>
          <code>{picked ? picked.label : '(none)'}</code>
        </div>
      </div>
    </Stack>
    </div>
  );
}

const statusStyle: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  gap: t.spaceXs,
  fontSize: t.fontSizeXs,
  color: t.colorText,
  background: t.colorSurfacePanel,
  border: `${t.borderWidthDefault} solid ${t.colorBorder}`,
  borderRadius: t.radiusMd,
  padding: t.spaceSm,
};
