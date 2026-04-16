import { LinkCard } from '@4lt7ab/content';
import { DocBlock, PropDemo, type PropMeta } from '../components/DocBlock';

const props: PropMeta[] = [
  { name: 'title', type: 'ReactNode', required: true, description: 'Card title rendered in serif font.' },
  { name: 'description', type: 'ReactNode', description: 'Optional description rendered smaller in muted text below the title.' },
  { name: 'href', type: 'string', description: 'Link destination URL.' },
  { name: 'external', type: 'boolean', description: 'Whether link opens in a new tab (sets target="_blank" and rel="noopener noreferrer").' },
  { name: 'target', type: 'string', description: 'Custom link target. Overridden by external when true.' },
  { name: 'rel', type: 'string', description: 'Custom link rel attribute. Overridden by external when true.' },
  { name: 'onClick', type: 'MouseEventHandler<HTMLAnchorElement>', description: 'Click handler for the card link.' },
];

export function LinkCardDemo(): React.JSX.Element {
  return (
    <DocBlock props={props}>
      <PropDemo name="title / description" description="Title is rendered in serif font. Description appears below in smaller muted text. Cards lift and accent-border on hover.">
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
          gap: '1.5rem',
        }}>
          <LinkCard
            href="#"
            title="Tab"
            description="An AI teammate that lives in your editor. Open source."
          />
          <LinkCard
            href="#"
            title="Hello, world"
            description="First post — who I am, what this site is, and what to expect."
          />
        </div>
      </PropDemo>

      <PropDemo name="external" description="When true, opens in a new tab with noopener/noreferrer for security.">
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
          gap: '1.5rem',
        }}>
          <LinkCard
            href="#"
            title="Photography"
            description="Landscapes and street. Opens in a new tab."
            external
          />
          <LinkCard
            href="#"
            title="Internal link"
            description="Same-tab navigation without external prop."
          />
        </div>
      </PropDemo>
    </DocBlock>
  );
}
