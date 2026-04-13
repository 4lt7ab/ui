import { useState } from 'react';
import { DateRangePicker, Stack } from '@4lt7ab/ui';
import type { DateRange } from '@4lt7ab/ui';

export function DateRangePickerDemo(): React.JSX.Element {
  const [range, setRange] = useState<DateRange | undefined>(undefined);
  const [errorRange, setErrorRange] = useState<DateRange | undefined>(undefined);

  const today = new Date();
  const minDate = new Date(today.getFullYear(), today.getMonth() - 1, 1);
  const maxDate = new Date(today.getFullYear(), today.getMonth() + 3, 0);

  return (
    <Stack gap="xl">
      <Stack gap="sm">
        <h3 style={{ margin: 0, fontSize: '1rem', fontWeight: 600 }}>States</h3>
        <Stack gap="md" style={{ maxWidth: '24rem' }}>
          <DateRangePicker
            value={range}
            onChange={setRange}
            placeholder="Pick a date range"
          />
          <DateRangePicker
            value={errorRange}
            onChange={setErrorRange}
            placeholder="Error state"
            hasError
          />
          <DateRangePicker
            value={undefined}
            onChange={() => {}}
            placeholder="Disabled"
            disabled
          />
        </Stack>
      </Stack>

      <Stack gap="sm">
        <h3 style={{ margin: 0, fontSize: '1rem', fontWeight: 600 }}>With constraints</h3>
        <Stack gap="md" style={{ maxWidth: '24rem' }}>
          <DateRangePicker
            value={range}
            onChange={setRange}
            minDate={minDate}
            maxDate={maxDate}
            placeholder="Min/max date constrained"
          />
        </Stack>
      </Stack>

      {range && (
        <p style={{ fontSize: '0.875rem', margin: 0 }}>
          Selected: {range.from.toLocaleDateString()} &ndash; {range.to.toLocaleDateString()}
        </p>
      )}
    </Stack>
  );
}
