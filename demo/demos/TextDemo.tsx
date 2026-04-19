import { Text, Stack } from '@4lt7ab/ui';
import type {
  TextSize,
  TextWeight,
  TextTone,
  TextFamily,
  TextAlign,
} from '@4lt7ab/ui';
import { DocBlock, PropDemo, type PropMeta } from '../components/DocBlock';

const sizes: TextSize[] = ['xs', 'sm', 'md', 'lg', 'xl'];
const weights: TextWeight[] = ['normal', 'medium', 'semibold', 'bold'];
const tones: TextTone[] = [
  'default',
  'muted',
  'secondary',
  'inverse',
  'link',
  'success',
  'warning',
  'error',
];
const families: TextFamily[] = ['sans', 'serif', 'mono'];
const alignments: TextAlign[] = ['left', 'center', 'right'];

const props: PropMeta[] = [
  {
    name: 'children',
    type: 'ReactNode',
    required: true,
    description: 'Text content.',
  },
  {
    name: 'size',
    type: "'xs' | 'sm' | 'md' | 'lg' | 'xl'",
    default: "'md'",
    description:
      'Font size token — maps to fontSize{Xs|Sm|Base|Lg|Xl} in the theme.',
  },
  {
    name: 'weight',
    type: "'normal' | 'medium' | 'semibold' | 'bold'",
    default: "'normal'",
    description: 'Font weight token.',
  },
  {
    name: 'tone',
    type:
      "'default' | 'muted' | 'secondary' | 'inverse' | 'link' | 'success' | 'warning' | 'error'",
    default: "'default'",
    description:
      'Semantic color tone — maps to colorText* tokens and status foregrounds.',
  },
  {
    name: 'family',
    type: "'sans' | 'serif' | 'mono'",
    default: "'sans'",
    description: 'Font family token.',
  },
  {
    name: 'as',
    type: "'span' | 'p' | 'div'",
    default: "'span'",
    description: 'Render element — kept deliberately small.',
  },
  {
    name: 'align',
    type: "'left' | 'center' | 'right'",
    description: 'Text alignment. Omit to inherit from the parent.',
  },
  {
    name: 'truncate',
    type: 'boolean',
    default: 'false',
    description:
      'Single-line ellipsis. Sets white-space: nowrap + overflow: hidden + text-overflow: ellipsis.',
  },
];

export function TextDemo(): React.JSX.Element {
  return (
    <DocBlock props={props}>
      <PropDemo
        name="size"
        description="Font size tokens, smallest to largest. Matches the existing fontSize{Xs|Sm|Base|Lg|Xl} semantic tokens."
      >
        <Stack gap="xs">
          {sizes.map((s) => (
            <Text key={s} size={s}>
              size="{s}" — the quick brown fox jumps over the lazy dog
            </Text>
          ))}
        </Stack>
      </PropDemo>

      <PropDemo
        name="weight"
        description="Font weight tokens from light-to-heavy emphasis."
      >
        <Stack gap="xs">
          {weights.map((w) => (
            <Text key={w} weight={w}>
              weight="{w}" — the quick brown fox
            </Text>
          ))}
        </Stack>
      </PropDemo>

      <PropDemo
        name="tone"
        description="Semantic color tokens. Use muted / secondary for de-emphasis; link, success, warning, error for feedback surfaces."
      >
        <Stack gap="xs">
          {tones.map((tone) => (
            <Text key={tone} tone={tone}>
              tone="{tone}" — the quick brown fox
            </Text>
          ))}
        </Stack>
      </PropDemo>

      <PropDemo
        name="family"
        description="Font family tokens. Mono is the typical choice for metrics, identifiers, and code."
      >
        <Stack gap="xs">
          {families.map((f) => (
            <Text key={f} family={f}>
              family="{f}" — the quick brown fox jumps over 42 lazy dogs
            </Text>
          ))}
        </Stack>
      </PropDemo>

      <PropDemo
        name="as"
        description="Render element. Span by default for inline use; p / div when block flow is needed."
      >
        <Stack gap="xs">
          <Text as="span">as="span" (inline, the default)</Text>
          <Text as="p">as="p" — a full paragraph block.</Text>
          <Text as="div">as="div" — a generic block container.</Text>
        </Stack>
      </PropDemo>

      <PropDemo
        name="align"
        description="Text alignment — useful on block elements (as='p' or 'div')."
      >
        <Stack gap="sm">
          {alignments.map((a) => (
            <Text key={a} as="div" align={a}>
              align="{a}" — aligned {a}
            </Text>
          ))}
        </Stack>
      </PropDemo>

      <PropDemo
        name="truncate"
        description="Single-line ellipsis. Requires a bounded width to trigger — try resizing the panel."
      >
        <div style={{ width: 240, border: '1px dashed var(--color-border)', padding: 'var(--space-sm)' }}>
          <Text truncate>
            This is a very long string of text that will definitely overflow a narrow
            container so the ellipsis kicks in.
          </Text>
        </div>
      </PropDemo>

      <PropDemo
        name="canonical use case"
        description="Pattern metric: replaces inline-styled spans like <span style={{ fontSize: '1.5rem', fontWeight: 700, fontFamily: 'var(--font-mono)' }}> with a token-aware primitive."
      >
        <Stack gap="sm">
          <Text size="xs" tone="muted" family="mono">
            TASKS COMPLETED
          </Text>
          <Text size="xl" weight="bold" family="mono">
            142
          </Text>
          <Text size="sm" tone="secondary">
            +18 this week
          </Text>
        </Stack>
      </PropDemo>
    </DocBlock>
  );
}
