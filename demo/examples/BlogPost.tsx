import { PageShell, SiteNav, Footer, Container, Prose, PullQuote, MarginNote } from '../../src/content';

export function BlogPost(): React.JSX.Element {
  return (
    <div style={{
      border: '1px solid var(--color-border)',
      borderRadius: 'var(--radius-lg)',
      overflow: 'hidden',
      maxHeight: '700px',
      overflowY: 'auto',
    }}>
      <PageShell
        nav={
          <SiteNav
            brand="acme.dev"
            links={[
              { label: 'Hey', href: '#' },
              { label: 'Posts', href: '#' },
              { label: 'Themes', href: '#' },
            ]}
          />
        }
        footer={
          <Footer
            copyright="2026"
            links={[
              { label: 'GitHub', href: '#', external: true },
              { label: 'LinkedIn', href: '#', external: true },
            ]}
          />
        }
      >
        <Container>
          <header style={{
            marginBottom: '2.25rem',
            paddingBottom: '2.25rem',
            borderBottom: '1px solid var(--color-border)',
          }}>
            <h1 style={{
              fontFamily: 'var(--font-serif)',
              fontWeight: 600,
              fontSize: 'clamp(2rem, 5vw, 2.75rem)',
              lineHeight: 1.25,
              margin: '0 0 0.5rem',
            }}>
              On building shared component libraries
            </h1>
            <span style={{
              fontSize: '0.875rem',
              color: 'var(--color-text-muted)',
            }}>
              April 11, 2026
            </span>
          </header>

          <Prose>
            <p>
              Every team eventually arrives at the same realization: copying
              button styles between projects is a tax on velocity. The question
              isn't whether to build a component library — it's when the cost of
              not having one exceeds the cost of maintaining one.
            </p>

            <p>
              That inflection point comes faster than most people think. Two
              projects sharing a color palette is already a library waiting to
              happen. Three projects sharing a Button component is a library
              that's being maintained poorly across three repos.
            </p>

            <h2>The three-layer contract</h2>

            <MarginNote>
              This pattern comes from design systems like Material and Carbon,
              but works at any scale — even a two-person team benefits from the
              separation.
            </MarginNote>

            <p>
              A durable component library separates concerns into three layers:
              primitives, semantic tokens, and components. Each layer only
              depends on the one below it, and consumers only touch the top.
            </p>

            <p>
              <strong>Primitives</strong> are raw values — your color palette,
              spacing scale, type ramp. They have no opinion about where they're
              used. <code>blue600</code> is just a hex code.
            </p>

            <p>
              <strong>Semantic tokens</strong> map primitives to purposes.
              <code>colorActionPrimary</code> means "the color for primary
              actions" — which blue that resolves to depends on the theme.
            </p>

            <p>
              <strong>Components</strong> consume semantic tokens exclusively.
              A Button never references <code>blue600</code> directly. It uses
              <code>colorActionPrimary</code>, which means it automatically
              works in any theme that defines that token.
            </p>

            <PullQuote>
              The best component library is one where adding a new theme
              requires zero changes to any component.
            </PullQuote>

            <h2>What makes a theme portable</h2>

            <p>
              If your theme is just a set of CSS custom properties, any
              application that loads the stylesheet gets the theme for free.
              No build step, no framework dependency, no import map to configure.
            </p>

            <p>
              The trick is keeping the token surface area small enough that
              creating a new theme is a thirty-minute task, not a three-day
              task. Five core tokens — background, text, accent, muted,
              border — carry an entire blog theme. A full application needs
              more, but the principle holds: every token you add is a token
              every theme must define.
            </p>

            <hr />

            <h2>Shipping the first version</h2>

            <p>
              The hardest part of a component library is the first release.
              Not because the code is hard, but because the scope is
              seductive. You'll want to build everything before shipping
              anything.
            </p>

            <p>
              Resist that. Ship the tokens and three components. Use them
              in a real project. Let the friction of real usage tell you
              what to build next. The library that survives is the one
              shaped by use, not by imagination.
            </p>
          </Prose>
        </Container>
      </PageShell>
    </div>
  );
}
