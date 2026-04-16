import { useState } from 'react';
import { DatePicker, Stack } from '@4lt7ab/ui';
import { DocBlock, PropDemo, type PropMeta } from '../components/DocBlock';

const props: PropMeta[] = [
  { name: 'value', type: 'Date', description: 'Currently selected date.' },
  { name: 'onChange', type: '(date: Date | undefined) => void', required: true, description: 'Called when a date is selected or cleared.' },
  { name: 'minDate', type: 'Date', description: 'Earliest selectable date. Days before this are disabled.' },
  { name: 'maxDate', type: 'Date', description: 'Latest selectable date. Days after this are disabled.' },
  { name: 'disabledDates', type: 'Date[]', description: 'Specific dates that cannot be selected.' },
  { name: 'placeholder', type: 'string', default: "'Select date'", description: 'Placeholder text when no date is selected.' },
  { name: 'hasError', type: 'boolean', default: 'false', description: 'Renders error border styling.' },
  { name: 'disabled', type: 'boolean', default: 'false', description: 'Disables the picker.' },
];

export function DatePickerDemo(): React.JSX.Element {
  const [date, setDate] = useState<Date | undefined>(undefined);
  const [constrainedDate, setConstrainedDate] = useState<Date | undefined>(undefined);

  const today = new Date();
  const minDate = new Date(today.getFullYear(), today.getMonth() - 1, 1);
  const maxDate = new Date(today.getFullYear(), today.getMonth() + 3, 0);

  // Disable weekends for the disabledDates demo
  const disabledDates: Date[] = [];
  const start = new Date(today.getFullYear(), today.getMonth(), 1);
  const end = new Date(today.getFullYear(), today.getMonth() + 1, 0);
  for (let d = new Date(start); d <= end; d.setDate(d.getDate() + 1)) {
    if (d.getDay() === 0 || d.getDay() === 6) {
      disabledDates.push(new Date(d));
    }
  }

  return (
    <DocBlock props={props}>
      <PropDemo name="value + onChange" description="Controlled date selection. Click the trigger to open the calendar popover.">
        <div style={{ maxWidth: '24rem' }}>
          <Stack gap="sm">
            <DatePicker
              value={date}
              onChange={setDate}
              placeholder="Pick a date"
            />
            <span style={{ fontSize: '0.75rem', opacity: 0.6 }}>
              Selected: {date ? date.toLocaleDateString() : '(none)'}
            </span>
          </Stack>
        </div>
      </PropDemo>

      <PropDemo name="minDate + maxDate" description="Constrains the selectable date range. Days outside the range are visually disabled.">
        <div style={{ maxWidth: '24rem' }}>
          <Stack gap="sm">
            <DatePicker
              value={constrainedDate}
              onChange={setConstrainedDate}
              minDate={minDate}
              maxDate={maxDate}
              placeholder="Constrained range"
            />
            <span style={{ fontSize: '0.75rem', opacity: 0.6 }}>
              Range: {minDate.toLocaleDateString()} to {maxDate.toLocaleDateString()}
            </span>
          </Stack>
        </div>
      </PropDemo>

      <PropDemo name="disabledDates" description="Specific dates that cannot be selected, shown as disabled in the calendar. Here, all weekends in the current month are disabled.">
        <div style={{ maxWidth: '24rem' }}>
          <DatePicker
            value={undefined}
            onChange={() => {}}
            disabledDates={disabledDates}
            placeholder="No weekends"
          />
        </div>
      </PropDemo>

      <PropDemo name="placeholder" description="Custom placeholder text shown when no date is selected.">
        <div style={{ maxWidth: '24rem' }}>
          <Stack gap="md">
            <DatePicker value={undefined} onChange={() => {}} placeholder="Choose your birthday" />
            <DatePicker value={undefined} onChange={() => {}} placeholder="Start date" />
          </Stack>
        </div>
      </PropDemo>

      <PropDemo name="hasError" description="Applies error border styling to the trigger button.">
        <div style={{ maxWidth: '24rem' }}>
          <DatePicker value={undefined} onChange={() => {}} placeholder="Error state" hasError />
        </div>
      </PropDemo>

      <PropDemo name="disabled" description="Disables the picker with muted styling. The calendar cannot be opened.">
        <div style={{ maxWidth: '24rem' }}>
          <DatePicker value={undefined} onChange={() => {}} placeholder="Disabled" disabled />
        </div>
      </PropDemo>
    </DocBlock>
  );
}
