import { useState } from 'react';
import { TagChip, Stack } from '../../src';

export function TagChipDemo(): React.JSX.Element {
  const [tags, setTags] = useState(['React', 'TypeScript', 'Design Systems', 'UI']);

  return (
    <Stack gap="xl">
      <Stack gap="sm">
        <h3 style={{ margin: 0, fontSize: '1rem', fontWeight: 600 }}>Static tags</h3>
        <Stack direction="horizontal" gap="xs" wrap>
          <TagChip name="frontend" />
          <TagChip name="open-source" />
          <TagChip name="v2.0" />
        </Stack>
      </Stack>

      <Stack gap="sm">
        <h3 style={{ margin: 0, fontSize: '1rem', fontWeight: 600 }}>Removable tags</h3>
        <Stack direction="horizontal" gap="xs" wrap>
          {tags.map((tag) => (
            <TagChip
              key={tag}
              name={tag}
              onRemove={() => setTags((prev) => prev.filter((t) => t !== tag))}
            />
          ))}
        </Stack>
        {tags.length === 0 && (
          <span style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)' }}>
            All tags removed. Refresh to reset.
          </span>
        )}
      </Stack>
    </Stack>
  );
}
