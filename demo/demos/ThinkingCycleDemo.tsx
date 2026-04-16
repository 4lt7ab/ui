import { ThinkingCycle } from '@4lt7ab/content';
import { DocBlock, PropDemo, type PropMeta } from '../components/DocBlock';

const props: PropMeta[] = [
  { name: 'words', type: 'string[]', required: true, description: 'Words to cycle through. Needs at least 2.' },
  { name: 'holdMs', type: 'number', default: '2000', description: 'How long each word stays visible (ms).' },
  { name: 'scrambleTicks', type: 'number', default: '4', description: 'Scramble iterations per character before settling.' },
  { name: 'tickMs', type: 'number', default: '50', description: 'Milliseconds between scramble frames.' },
  { name: 'staggerMs', type: 'number', default: '30', description: 'Stagger delay between each character starting its scramble (ms).' },
];

export function ThinkingCycleDemo(): React.JSX.Element {
  return (
    <DocBlock props={props}>
      <PropDemo name="words" description="The list of words to cycle through. The component scrambles letter-by-letter into each word, then holds it before moving to the next.">
        <p style={{ fontSize: '1.125rem', lineHeight: 1.6, margin: 0 }}>
          Building with AI tools is{' '}
          <ThinkingCycle
            words={['powerful', 'incredible', 'unbelievable', 'wild', 'exciting', 'inspiring', 'radical', 'beautiful']}
          />.
        </p>
      </PropDemo>

      <PropDemo name="holdMs" description="Controls how long each word stays visible before scrambling to the next. Shorter values create a more urgent feel.">
        <h2 style={{
          fontFamily: 'var(--font-serif)',
          fontWeight: 600,
          fontSize: 'clamp(1.4rem, 3vw, 1.875rem)',
          margin: 0,
        }}>
          The future is{' '}
          <ThinkingCycle
            words={['bright', 'uncertain', 'ours', 'now']}
            holdMs={2500}
          />
        </h2>
      </PropDemo>

      <PropDemo name="scrambleTicks / tickMs" description="Fine-tune the scramble animation speed. Fewer ticks and shorter tick duration create a snappier transition.">
        <p style={{ fontSize: '1rem', margin: 0 }}>
          Status:{' '}
          <ThinkingCycle
            words={['thinking', 'processing', 'learning', 'adapting']}
            holdMs={1200}
            tickMs={35}
            scrambleTicks={3}
          />
        </p>
      </PropDemo>
    </DocBlock>
  );
}
