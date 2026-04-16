import { useState } from 'react';
import { DateRangePicker, Stack } from '@4lt7ab/ui';
import type { DateRange } from '@4lt7ab/ui';
import { DocBlock, PropDemo, type PropMeta } from '../components/DocBlock';

const props: PropMeta[] = [
  { name: 'value', type: 'DateRange', description: 'Currently selected date range ({ from: Date, to: Date }).' },
  { name: 'onChange', type: '(range: DateRange | undefined) => void', required: true, description: 'Called when the range changes or is cleared.' },
  { name: 'minDate', type: 'Date', description: 'Earliest selectable date. Days before this are disabled.' },
  { name: 'maxDate', type: 'Date', description: 'Latest selectable date. Days after this are disabled.' },
  { name: 'disabledDates', type: 'Date[]', description: 'Specific dates that cannot be selected.' },
  { name: 'placeholder', type: 'string', default: "'Select date range'", description: 'Placeholder text when no range is selected.' },
  { name: 'hasError', type: 'boolean', default: 'false', description: 'Renders error border styling.' },
  { name: 'disabled', type: 'boolean', default: 'false', description: 'Disables the picker.' },
];

export function DateRangePickerDemo(): React.JSX.Element {
  const [range, setRange] = useState<DateRange | undefined>(undefined);
  const [constrainedRange, setConstrainedRange] = useState<DateRange | undefined>(undefined);

  const today = new Date();
  const minDate = new Date(today.getFullYear(), today.getMonth() - 1, 1);
  const maxDate = new Date(today.getFullYear(), today.getMonth() + 3, 0);

  return (
    <DocBlock props={props}>
      <PropDemo name="value + onChange" description="Two-click range selection. First click sets the start date, second click sets the end. Dates are auto-ordered.">
        <div style={{ maxWidth: '24rem' }}>
          <Stack gap="sm">
            <DateRangePicker
              value={range}
              onChange={setRange}
              placeholder="Pick a date range"
            />
            <span style={{ fontSize: '0.75rem', opacity: 0.6 }}>
              {range
                ? `${range.from.toLocaleDateString()} \u2013 ${range.to.toLocaleDateString()}`
                : 'No range selected'}
            </span>
          </Stack>
        </div>
      </PropDemo>

      <PropDemo name="minDate + maxDate" description="Constrains the selectable date range. Days outside the range are visually disabled.">
        <div style={{ maxWidth: '24rem' }}>
          <Stack gap="sm">
            <DateRangePicker
              value={constrainedRange}
              onChange={setConstrainedRange}
              minDate={minDate}
              maxDate={maxDate}
              placeholder="Constrained range"
            />
            <span style={{ fontSize: '0.75rem', opacity: 0.6 }}>
              Allowed: {minDate.toLocaleDateString()} to {maxDate.toLocaleDateString()}
            </span>
          </Stack>
        </div>
      </PropDemo>

      <PropDemo name="placeholder" description="Custom placeholder text shown when no range is selected.">
        <div style={{ maxWidth: '24rem' }}>
          <DateRangePicker value={undefined} onChange={() => {}} placeholder="Select booking dates" />
        </div>
      </PropDemo>

      <PropDemo name="hasError" description="Applies error border styling to the trigger button.">
        <div style={{ maxWidth: '24rem' }}>
          <DateRangePicker value={undefined} onChange={() => {}} placeholder="Error state" hasError />
        </div>
      </PropDemo>

      <PropDemo name="disabled" description="Disables the picker with muted styling. The calendar cannot be opened.">
        <div style={{ maxWidth: '24rem' }}>
          <DateRangePicker value={undefined} onChange={() => {}} placeholder="Disabled" disabled />
        </div>
      </PropDemo>
    </DocBlock>
  );
}
