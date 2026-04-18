import { Stack, Card } from '@4lt7ab/ui';
import {
  StackDemo,
  ContainerDemo,
  ProseDemo,
  EpigraphDemo,
  PullQuoteDemo,
  MarginNoteDemo,
  SideNoteDemo,
  ThinkingCycleDemo,
  InputDemo,
  TextareaDemo,
  SelectDemo,
  FieldDemo,
  ButtonDemo,
  IconButtonDemo,
  TagChipDemo,
  BadgeDemo,
  StatusDotDemo,
  TableDemo,
  PaginationDemo,
  ProgressBarDemo,
  SkeletonDemo,
  CardDemo,
  ExpandableCardDemo,
  EmptyStateDemo,
  LinkCardDemo,
  OverlayDemo,
  ModalDemo,
  ConfirmDialogDemo,
  ThemePickerDemo,
  TokensDemo,
  HeaderDemo,
} from '../demos';

interface CatalogueSection {
  category: string;
  components: { name: string; Demo: () => React.JSX.Element }[];
}

const sections: CatalogueSection[] = [
  {
    category: 'Layout',
    components: [
      { name: 'Stack', Demo: StackDemo },
      { name: 'Container', Demo: ContainerDemo },
    ],
  },
  {
    category: 'Typography & Content',
    components: [
      { name: 'Prose', Demo: ProseDemo },
      { name: 'Epigraph', Demo: EpigraphDemo },
      { name: 'PullQuote', Demo: PullQuoteDemo },
      { name: 'MarginNote', Demo: MarginNoteDemo },
      { name: 'SideNote', Demo: SideNoteDemo },
      { name: 'ThinkingCycle', Demo: ThinkingCycleDemo },
    ],
  },
  {
    category: 'Form Controls',
    components: [
      { name: 'Input', Demo: InputDemo },
      { name: 'Textarea', Demo: TextareaDemo },
      { name: 'Select', Demo: SelectDemo },
      { name: 'Field', Demo: FieldDemo },
    ],
  },
  {
    category: 'Actions',
    components: [
      { name: 'Button', Demo: ButtonDemo },
      { name: 'IconButton', Demo: IconButtonDemo },
      { name: 'TagChip', Demo: TagChipDemo },
    ],
  },
  {
    category: 'Data Display',
    components: [
      { name: 'Badge', Demo: BadgeDemo },
      { name: 'StatusDot', Demo: StatusDotDemo },
      { name: 'Table', Demo: TableDemo },
      { name: 'Pagination', Demo: PaginationDemo },
      { name: 'ProgressBar', Demo: ProgressBarDemo },
      { name: 'Skeleton', Demo: SkeletonDemo },
    ],
  },
  {
    category: 'Containers',
    components: [
      { name: 'Card', Demo: CardDemo },
      { name: 'ExpandableCard', Demo: ExpandableCardDemo },
      { name: 'EmptyState', Demo: EmptyStateDemo },
      { name: 'LinkCard', Demo: LinkCardDemo },
    ],
  },
  {
    category: 'Overlays',
    components: [
      { name: 'Overlay', Demo: OverlayDemo },
      { name: 'ModalShell', Demo: ModalDemo },
      { name: 'ConfirmDialog', Demo: ConfirmDialogDemo },
    ],
  },
  {
    category: 'Theming',
    components: [
      { name: 'ThemePicker', Demo: ThemePickerDemo },
      { name: 'Tokens', Demo: TokensDemo },
    ],
  },
  {
    category: 'Navigation',
    components: [
      { name: 'Header', Demo: HeaderDemo },
    ],
  },
];

export function ComponentCatalogue(): React.JSX.Element {
  return (
    <div style={{ maxWidth: '64rem', margin: '0 auto' }}>
      <Stack gap="xl">
        {sections.map((section) => (
          <section key={section.category}>
            <h2 style={{
              margin: 0,
              fontSize: '1.25rem',
              fontWeight: 700,
              fontFamily: 'var(--font-sans)',
              color: 'var(--color-text)',
              borderBottom: '1px solid var(--color-border)',
              paddingBottom: 'var(--space-sm)',
              marginBottom: 'var(--space-lg)',
            }}>
              {section.category}
            </h2>
            <Stack gap="xl">
              {section.components.map(({ name, Demo }) => (
                <Card key={name} variant="flat" padding="lg">
                  <Stack gap="md">
                    <h3 style={{
                      margin: 0,
                      fontSize: '1rem',
                      fontWeight: 600,
                      fontFamily: 'var(--font-mono)',
                      color: 'var(--color-text-link)',
                      letterSpacing: '-0.01em',
                    }}>
                      {'<'}{name}{' />'}
                    </h3>
                    <Demo />
                  </Stack>
                </Card>
              ))}
            </Stack>
          </section>
        ))}
      </Stack>
    </div>
  );
}
