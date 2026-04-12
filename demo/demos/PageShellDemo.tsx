import { PageShell, SiteNav, Footer, Container, Prose } from '../../src/content';
import { Stack } from '../../src';

export function PageShellDemo(): React.JSX.Element {
  return (
    <div style={{
      border: '1px solid var(--color-border)',
      borderRadius: 'var(--radius-lg)',
      overflow: 'hidden',
      maxHeight: '600px',
      overflowY: 'auto',
    }}>
      <PageShell
        nav={
          <SiteNav
            brand="mysite.dev"
            links={[
              { label: 'About', href: '#' },
              { label: 'Posts', href: '#' },
              { label: 'Projects', href: '#' },
            ]}
          />
        }
        footer={
          <Footer
            copyright="2026 Your Name"
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
              Hello, world
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
              This is a complete page layout using PageShell, SiteNav, Footer,
              Container, and Prose together — a complete blog reading
              experience as composable React components.
            </p>

            <h2>The Structure</h2>

            <p>
              PageShell provides the vertical skeleton — nav slot, flex-grown
              main area, footer slot. Container constrains the width to 680px
              prose measure. Prose applies the typography system.
            </p>

            <p>
              Each piece is independent. Use Container without PageShell for
              embedding prose in an existing layout. Use SiteNav without
              PageShell if you already have a page wrapper.
            </p>

            <h2>Theme Aware</h2>

            <p>
              Switch themes using the gallery sidebar — every element here
              responds. The nav, footer, headings, body text, links, and
              section rules all adapt through CSS custom properties.
            </p>
          </Prose>
        </Container>
      </PageShell>
    </div>
  );
}
