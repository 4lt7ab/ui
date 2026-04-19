import {
  Prose,
  PullQuote, MarginNote, SideNote, Epigraph,
  ThinkingCycle,
} from '@4lt7ab/content';
import { Container, LinkCard, Stack, Text, Divider } from '@4lt7ab/ui';

export function BlogPost(): React.JSX.Element {
  return (
    <Container>
      <Stack gap="xl">
        <Epigraph cite="— Frank Chimero, The Shape of Design">
          People ignore design that ignores people.
        </Epigraph>

        <header>
          <Stack gap="xs">
            <Text as="p" family="serif" weight="semibold" size="xl">
              On building shared component libraries
            </Text>
            <Text as="p" size="sm" tone="muted">
              April 11, 2026
            </Text>
          </Stack>
        </header>

        <Divider spacing="sm" />

        <Prose>
          <p>
            Every team eventually arrives at the same realization: copying
            button styles between projects is a tax on velocity. The question
            isn't <em>whether</em> to build a component library — it's when the cost of
            not having one exceeds the cost of maintaining one. That inflection
            point is <ThinkingCycle words={['closer', 'sooner', 'faster', 'nearer']} /> than
            most people think.
          </p>

          <p>
            Two projects sharing a color palette is already a library waiting to
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
            <strong>Semantic tokens</strong> map primitives to purposes.{' '}
            <code>colorActionPrimary</code> means "the color for primary
            actions" — which blue that resolves to depends on the theme.
          </p>

          <SideNote>
            If you're coming from Tailwind, think of semantic tokens as
            what you get when you replace <code>bg-blue-600</code> with
            <code>bg-primary</code> — but enforced at the system level.
          </SideNote>

          <p>
            <strong>Components</strong> consume semantic tokens exclusively.
            A Button never references <code>blue600</code> directly. It uses{' '}
            <code>colorActionPrimary</code>, which means it automatically
            works in any theme that defines that token.
          </p>

          <p>
            Here's what the token layer looks like in practice:
          </p>

          <pre><code>{`// semantic.ts — the component API contract
export const semantic = {
  colorSurface:       'var(--color-surface)',
  colorSurfacePanel:  'var(--color-surface-panel)',
  colorSurfaceRaised: 'var(--color-surface-raised)',
  colorActionPrimary: 'var(--color-action-primary)',
  colorText:          'var(--color-text)',
  // ...
} as const;`}</code></pre>

          <p>
            Components import <code>semantic</code> and reference these
            variables directly. <del>They never import primitives.</del> This
            is the load-bearing rule — break it, and themes stop working.
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
            creating a new theme is a <em>thirty-minute task</em>, not a three-day
            task. Here's a rough guide to the token budget:
          </p>

          <table>
            <thead>
              <tr>
                <th>Use case</th>
                <th>Tokens needed</th>
                <th>Time to theme</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Blog / docs site</td>
                <td>5–8 core tokens</td>
                <td>~30 minutes</td>
              </tr>
              <tr>
                <td>Dashboard app</td>
                <td>15–25 tokens</td>
                <td>1–2 hours</td>
              </tr>
              <tr>
                <td>Full design system</td>
                <td>40–60 tokens</td>
                <td>Half a day</td>
              </tr>
            </tbody>
          </table>

          <p>
            Every token you add is a token every theme must define. The
            principle holds: <strong>token count is theme cost</strong>.
          </p>

          <MarginNote>
            Our library ships eight themes — synthwave, slate, warm-sand,
            moss, coral, pipboy, neural, and pacman. Four of them include
            animated canvas backgrounds.
          </MarginNote>

          <h2>Animated backgrounds and surface tokens</h2>

          <p>
            Some themes go beyond colors and include canvas-rendered
            backgrounds — a synthwave sun, falling matrix characters, a
            neural network, pac-man ghosts. This creates an interesting
            design problem: if your base surface is transparent, the
            animation shows through. If it's opaque, you lose the effect.
          </p>

          <p>
            The solution is a split token:
          </p>

          <ul>
            <li><code>colorSurface</code> — the page-level background. Transparent on animated themes so the canvas shows through layouts.</li>
            <li><code>colorSurfacePanel</code> — opaque background for discrete UI components. Cards, tables, modals use this so content is always readable.</li>
          </ul>

          <p>
            The background lives in the negative space <em>between</em> components.
            Components themselves are solid ground.
          </p>

          <blockquote>
            <p>
              Think of it like a window: the glass is transparent, the frame
              is solid. You look through the layout, you read on the panels.
            </p>
          </blockquote>

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

          <h3>Related reading</h3>

          <Stack gap="sm">
            <LinkCard
              href="#"
              title="Design Tokens W3C Specification"
              description="The emerging standard for cross-platform design token formats."
              external
            />
            <LinkCard
              href="#"
              title="Theming with CSS Custom Properties"
              description="A practical guide to building theme systems without build tools."
            />
          </Stack>

          <p>
            The library that survives is the one shaped by use, not by
            imagination. <del>Build everything first, then ship.</del> Ship
            first, then build what's needed.
          </p>
        </Prose>
      </Stack>
    </Container>
  );
}
