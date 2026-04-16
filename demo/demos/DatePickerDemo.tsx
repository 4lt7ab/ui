import { useState } from 'react';
import { DatePicker, Stack } from '@4lt7ab/ui';

export function DatePickerDemo(): React.JSX.Element {
  const [date, setDate] = useState<Date | undefined>(undefined);
  const [errorDate, setErrorDate] = useState<Date | undefined>(undefined);

  const today = new Date();
  const minDate = new Date(today.getFullYear(), today.getMonth() - 1, 1);
  const maxDate = new Date(today.getFullYear(), today.getMonth() + 3, 0);

  return (
    <Stack gap="xl">
      <Stack gap="sm">
        <h3 style={{ margin: 0, fontSize: '1rem', fontWeight: 600 }}>States</h3>
        <div style={{ maxWidth: '24rem' }}>
          <Stack gap="md">
            <DatePicker
              value={date}
              onChange={setDate}
              placeholder="Pick a date"
            />
            <DatePicker
              value={errorDate}
              onChange={setErrorDate}
              placeholder="Error state"
              hasError
            />
            <DatePicker
              value={undefined}
              onChange={() => {}}
              placeholder="Disabled"
              disabled
            />
          </Stack>
        </div>
      </Stack>

      <Stack gap="sm">
        <h3 style={{ margin: 0, fontSize: '1rem', fontWeight: 600 }}>With constraints</h3>
        <div style={{ maxWidth: '24rem' }}>
          <Stack gap="md">
            <DatePicker
              value={date}
              onChange={setDate}
              minDate={minDate}
              maxDate={maxDate}
              placeholder="Min/max constrained"
            />
          </Stack>
        </div>
      </Stack>

      {date && (
        <p style={{ fontSize: '0.875rem', margin: 0 }}>
          Selected: {date.toLocaleDateString()}
        </p>
      )}
    </Stack>
  );
}
