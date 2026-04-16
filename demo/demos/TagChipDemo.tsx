import { useState } from 'react';
import { TagChip, Stack } from '@4lt7ab/ui';
import { DocBlock, PropDemo, type PropMeta } from '../components/DocBlock';

const props: PropMeta[] = [
  { name: 'name', type: 'string', required: true, description: 'Tag display text.' },
  { name: 'prefix', type: 'string', description: 'Optional prefix rendered before the label in muted color (e.g. "lang" in "lang: typescript").' },
  { name: 'onRemove', type: '() => void', description: 'When provided, renders a close button that calls this handler on click.' },
];

export function TagChipDemo(): React.JSX.Element {
  const [tags, setTags] = useState(['React', 'TypeScript', 'Design Systems', 'UI']);

  return (
    <DocBlock props={props}>
      <PropDemo name="name" description="The tag label. Displayed as the primary text content of the chip.">
        <Stack direction="horizontal" gap="xs" wrap>
          <TagChip name="frontend" />
          <TagChip name="open-source" />
          <TagChip name="v2.0" />
        </Stack>
      </PropDemo>

      <PropDemo name="prefix" description="Rendered before the name in muted color with a colon separator. Useful for categorized tag sets.">
        <Stack direction="horizontal" gap="xs" wrap>
          <TagChip prefix="lang" name="typescript" />
          <TagChip prefix="status" name="active" />
          <TagChip prefix="env" name="production" />
        </Stack>
      </PropDemo>

      <PropDemo name="onRemove" description="When provided, a close button appears inside the chip. Clicking it calls this handler. Try removing some tags below.">
        <Stack gap="sm">
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
      </PropDemo>
    </DocBlock>
  );
}
