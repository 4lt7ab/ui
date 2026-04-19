import { useState } from 'react';
import { IconButton, SearchInput, Stack, semantic as t } from '@4lt7ab/ui';

// ---------------------------------------------------------------------------
// SearchInput showcase — live example for 05-forms.md
// ---------------------------------------------------------------------------
//
// What a code fence undersells: the debounce. On-screen keystrokes update
// the input immediately; `onSearch` only fires after `debounceMs` of
// typing inactivity. This widget surfaces the gap by only tracking the
// debounced callback — so the "last search" panel visibly lags behind
// what you see on screen. The `trailing` slot gets a clear button that
// resets both the visible value (via `value`) and the searched value
// (via the callback) so you can watch the debounce pause disappear too.

export function SearchInputShowcase(): React.JSX.Element {
  // `query` is the *committed* search term — what the app would actually
  // run a query against. Typed characters are held internally by
  // SearchInput; `query` only updates after the debounce window closes.
  const [query, setQuery] = useState('');
  const [runs, setRuns] = useState(0);

  const handleSearch = (next: string): void => {
    setQuery(next);
    setRuns((n) => n + 1);
  };

  return (
    <div style={{ maxWidth: '26rem' }}>
      <Stack gap="md">
        <SearchInput
          value={query}
          onSearch={handleSearch}
          debounceMs={350}
          aria-label="Search orders"
          placeholder="Search orders…"
          trailing={
            query ? (
              <IconButton
                icon="close"
                aria-label="Clear search"
                size="sm"
                onClick={() => handleSearch('')}
              />
            ) : undefined
          }
        />

        <div style={statusStyle}>
          <div>
            <strong style={{ color: t.colorTextMuted }}>
              Last committed search (debounced 350ms):{' '}
            </strong>
            <code>{query || '(empty)'}</code>
          </div>
          <div style={{ fontSize: t.fontSizeXs, color: t.colorTextMuted }}>
            onSearch has fired {runs} time{runs === 1 ? '' : 's'} — note how
            the committed value lags behind what you see on screen while
            you're actively typing.
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
  fontSize: t.fontSizeSm,
  color: t.colorText,
  background: t.colorSurfacePanel,
  border: `${t.borderWidthDefault} solid ${t.colorBorder}`,
  borderRadius: t.radiusMd,
  padding: t.spaceSm,
};
