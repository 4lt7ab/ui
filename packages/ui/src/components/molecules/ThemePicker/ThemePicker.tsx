import { forwardRef } from 'react';
import { useTheme, useInjectStyles } from '@4lt7ab/core';
import { Card } from '../Card';
import {
  LINK_CARD_CLASS,
  LINK_CARD_DESC_CLASS,
  LINK_CARD_STYLES_ID,
  LINK_CARD_TITLE_CLASS,
  linkCardCSS,
} from '../LinkCard/linkCardStyles';
import { Select } from '../../organisms/Select';
import { StatusDot } from '../../atoms/StatusDot';

export interface ThemePickerProps {
  /** Optional descriptions for each theme, keyed by theme name. */
  descriptions?: Record<string, string>;
  /** Display variant. `'grid'` (default) renders a card grid; `'compact'` renders a dropdown for toolbars/headers. */
  variant?: 'grid' | 'compact';
}

// Grid variant — card grid container sits on top of the LinkCard stylesheet
// shared with `<LinkCard>`. The cards themselves are `<Card asChild variant=
// "ghost">` over a `<button>` with the LinkCard class, so border/hover/active
// visuals all come from `linkCardStyles` rather than a bespoke CSS block.
const GRID_STYLES_ID = 'alttab-theme-picker';
const gridCSS = /* css */ `
  .alttab-theme-picker {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 1.5rem;
  }
`;

// Compact variant — inline-flex row puts the <StatusDot> before the label with a gap.
const DOT_ROW: React.CSSProperties = {
  display: 'inline-flex',
  alignItems: 'center',
  gap: '0.5rem',
};

function GridView({ descriptions }: { descriptions: Record<string, string> }): React.JSX.Element {
  // Inject both stylesheets — `linkCardCSS` is shared with <LinkCard> (same
  // STYLES_ID, so `useInjectStyles` de-dupes) and supplies the card visuals;
  // `gridCSS` owns only the grid container layout.
  useInjectStyles(LINK_CARD_STYLES_ID, linkCardCSS);
  useInjectStyles(GRID_STYLES_ID, gridCSS);
  const { resolved, themes, setTheme } = useTheme();

  return (
    <div className="alttab-theme-picker">
      {Array.from(themes.values()).map((def) => {
        const isActive = resolved === def.name;
        return (
          <Card asChild variant="ghost" key={def.name}>
            <button
              type="button"
              className={LINK_CARD_CLASS}
              aria-current={isActive ? 'true' : undefined}
              onClick={() => setTheme(def.name)}
            >
              <span className={LINK_CARD_TITLE_CLASS}>{def.label}</span>
              {descriptions[def.name] && (
                <span className={LINK_CARD_DESC_CLASS}>{descriptions[def.name]}</span>
              )}
            </button>
          </Card>
        );
      })}
    </div>
  );
}

// Compact view — thin composition over <Select.Root>.
function CompactView(): React.JSX.Element {
  const { resolved, themes, setTheme } = useTheme();
  return (
    <Select.Root value={resolved} onValueChange={setTheme}>
      <Select.Trigger aria-label="Select theme">
        <span style={DOT_ROW}>
          <StatusDot variant="primary" />
          <Select.Value />
        </span>
      </Select.Trigger>
      <Select.Content>
        {Array.from(themes.values()).map((def) => (
          <Select.Item key={def.name} value={def.name} textValue={def.label}>
            <span style={DOT_ROW}>
              <StatusDot variant="primary" />
              {def.label}
            </span>
          </Select.Item>
        ))}
      </Select.Content>
    </Select.Root>
  );
}

/**
 * Theme selector wired into useTheme(). Must be rendered inside a <ThemeProvider>.
 *
 * - `variant="grid"` (default) -- card grid for settings pages / theme playgrounds.
 * - `variant="compact"` -- dropdown button for toolbars and headers.
 */
export const ThemePicker: React.ForwardRefExoticComponent<Omit<ThemePickerProps, 'ref'> & React.RefAttributes<HTMLDivElement>> = forwardRef<HTMLDivElement, ThemePickerProps>(
  function ThemePicker({ descriptions = {}, variant = 'grid' }, ref): React.JSX.Element {
    if (variant === 'compact') {
      return <div ref={ref} style={{ display: 'inline-block' }}><CompactView /></div>;
    }
    return <div ref={ref}><GridView descriptions={descriptions} /></div>;
  }
);
