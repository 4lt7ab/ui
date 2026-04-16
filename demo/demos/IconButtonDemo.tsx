import { IconButton, Stack } from '@4lt7ab/ui';
import { DocBlock, PropDemo, type PropMeta } from '../components/DocBlock';

const props: PropMeta[] = [
  { name: 'icon', type: "IconName | string", required: true, description: 'Icon to render — built-in registry name or any icon-font name when fontClass is set.' },
  { name: 'aria-label', type: 'string', required: true, description: 'Required accessible label for icon-only buttons.' },
  { name: 'size', type: "'sm' | 'md' | 'lg'", default: "'md'", description: 'Button and icon size. sm=28px, md=36px, lg=44px.' },
  { name: 'badge', type: 'boolean', default: 'false', description: 'Shows a small red notification dot in the top-right corner.' },
  { name: 'fontClass', type: 'string', description: 'CSS class for an icon font. Passed through to Icon for font-based rendering.' },
  { name: 'onClick', type: 'MouseEventHandler', description: 'Called when the button is clicked.' },
  { name: 'disabled', type: 'boolean', description: 'Disables the button.' },
  { name: 'type', type: "'button' | 'submit' | 'reset'", description: 'HTML button type for form behavior.' },
  { name: 'tabIndex', type: 'number', description: 'Overrides the default tab order position.' },
];

export function IconButtonDemo(): React.JSX.Element {
  return (
    <DocBlock props={props}>
      <PropDemo name="icon" description="Selects which icon to render inside the circular button. Any built-in registry name works out of the box.">
        <Stack direction="horizontal" gap="sm" wrap align="center">
          <IconButton icon="settings" aria-label="Settings" />
          <IconButton icon="search" aria-label="Search" />
          <IconButton icon="edit" aria-label="Edit" />
          <IconButton icon="trash" aria-label="Delete" />
          <IconButton icon="copy" aria-label="Copy" />
          <IconButton icon="more-vertical" aria-label="More options" />
          <IconButton icon="filter" aria-label="Filter" />
          <IconButton icon="external-link" aria-label="Open link" />
        </Stack>
      </PropDemo>

      <PropDemo name="size" description="Controls the tap-target size and inner icon size. sm=28px button/16px icon, md=36px/20px, lg=44px/24px.">
        <Stack direction="horizontal" gap="sm" wrap align="center">
          {(['sm', 'md', 'lg'] as const).map((s) => (
            <Stack key={s} align="center" gap="xs">
              <IconButton icon="settings" size={s} aria-label={`${s} size`} />
              <span style={{ fontSize: '0.7rem', color: 'var(--color-text-muted)' }}>{s}</span>
            </Stack>
          ))}
        </Stack>
      </PropDemo>

      <PropDemo name="badge" description="Shows a small red notification dot in the top-right corner. Useful for indicating unread items or pending actions.">
        <Stack direction="horizontal" gap="md" wrap align="center">
          <Stack align="center" gap="xs">
            <IconButton icon="info" badge aria-label="Notifications (unread)" />
            <span style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)' }}>badge=true</span>
          </Stack>
          <Stack align="center" gap="xs">
            <IconButton icon="info" aria-label="Notifications" />
            <span style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)' }}>badge=false</span>
          </Stack>
        </Stack>
      </PropDemo>

      <PropDemo name="fontClass" description="Enables icon-font rendering for names not in the built-in registry. The class is passed through to the inner Icon component.">
        <Stack direction="horizontal" gap="sm" align="center">
          <IconButton icon="home" fontClass="material-symbols-outlined" aria-label="Home" />
          <IconButton icon="favorite" fontClass="material-symbols-outlined" aria-label="Favorite" badge />
          <IconButton icon="settings" aria-label="Settings (built-in)" />
        </Stack>
      </PropDemo>

      <PropDemo name="disabled" description="Disables the button and prevents hover/click interaction.">
        <Stack direction="horizontal" gap="sm" wrap align="center">
          <IconButton icon="edit" disabled aria-label="Edit (disabled)" />
          <IconButton icon="trash" disabled aria-label="Delete (disabled)" />
          <IconButton icon="settings" disabled aria-label="Settings (disabled)" />
        </Stack>
      </PropDemo>

      <PropDemo name="onClick" description="Callback fired when the button is clicked. Not called when disabled.">
        <Stack direction="horizontal" gap="sm" align="center">
          <IconButton icon="copy" aria-label="Copy to clipboard" onClick={() => alert('Copied!')} />
          <span style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)' }}>Click to trigger alert</span>
        </Stack>
      </PropDemo>
    </DocBlock>
  );
}
