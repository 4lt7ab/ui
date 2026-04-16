import { Prose, PullQuote, MarginNote, SideNote, Epigraph, Container } from '@4lt7ab/content';
import { DocBlock, PropDemo, type PropMeta } from '../components/DocBlock';

const props: PropMeta[] = [
  { name: 'children', type: 'ReactNode', required: true, description: 'Content to render with prose typography. Supports headings, paragraphs, lists, blockquotes, figures, code, and more.' },
];

export function ProseDemo(): React.JSX.Element {
  return (
    <DocBlock props={props}>
      <PropDemo name="children" description="Prose applies a full typography system to long-form HTML content. Lead paragraphs get serif treatment, h2s get overline rules, hr becomes a three-dot ornament, and all elements respond to the active theme.">
        <Container width="prose" padding="none">
          <Epigraph cite="— Probably not Abraham Lincoln">
            The best way to predict the future is to create it.
          </Epigraph>

          <Prose>
            <p>
              The prose component applies a carefully tuned typography system to
              long-form content. This lead paragraph gets serif treatment
              automatically — larger, with tighter letter-spacing and a
              different font family.
            </p>

            <p>
              Regular paragraphs use the sans-serif body font at 17px with generous
              1.75 line-height. Comfortable reading measure at 680px max-width.
              Links like <a href="#">this one</a> have a subtle underline that
              appears on hover.
            </p>

            <h2>Section Headings</h2>

            <p>
              H2 headings get the overline rule — a thin 3rem line above them that
              creates visual breathing room between sections. They use the serif
              font with responsive sizing via <code>clamp()</code>.
            </p>

            <MarginNote>
              Margin notes appear inline on mobile and float into the left margin
              on screens wider than 1100px.
            </MarginNote>

            <p>
              Inline code like <code>const x = 42</code> gets a subtle background
              treatment. The <strong>strong text</strong> uses semibold weight.
            </p>

            <h3>Subsection</h3>

            <SideNote>
              Side notes mirror margin notes but float into the right margin on
              wide screens.
            </SideNote>

            <p>
              H3 headings are simpler — no overline, just a size bump and the serif
              face. Good for breaking up content within a section.
            </p>

            <blockquote>
              <p>
                Blockquotes get a 3px accent-colored left border with muted text.
                They're designed for attributed quotes and citations.
              </p>
              <footer>— Someone who said something worth quoting</footer>
            </blockquote>

            <hr />

            <p>
              The three-dot ornament above replaces the standard horizontal rule.
              Just write a regular <code>&lt;hr /&gt;</code> inside Prose and it
              transforms into the section break.
            </p>

            <PullQuote>
              Pull quotes are centered, serif, italic — designed to draw the
              eye to a key takeaway.
            </PullQuote>

            <p>
              Lists work naturally too:
            </p>

            <ul>
              <li>Unordered list items with comfortable spacing</li>
              <li>Each item has a half-em gap from the previous</li>
              <li>Standard left padding for the bullet</li>
            </ul>

            <ol>
              <li>Ordered lists follow the same pattern</li>
              <li>Consistent vertical rhythm throughout</li>
            </ol>

            <figure>
              <div style={{
                background: 'var(--color-border)',
                borderRadius: '4px',
                height: '200px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--color-text-muted)',
                fontSize: '0.875rem',
              }}>
                Image placeholder
              </div>
              <figcaption>
                Figures get vertical spacing and centered captions in muted text.
              </figcaption>
            </figure>

            <p>
              That covers the full prose system. Every element responds to the active
              theme via CSS custom properties — switch themes and watch it all adapt.
            </p>
          </Prose>
        </Container>
      </PropDemo>
    </DocBlock>
  );
}
