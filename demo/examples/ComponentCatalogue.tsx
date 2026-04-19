import { Stack, Card, Divider, Text } from '@4lt7ab/ui';
import {
  StackDemo,
  ContainerDemo,
  ProseDemo,
  QuoteDemo,
  MarginNoteDemo,
  ThinkingCycleDemo,
  InputDemo,
  TextareaDemo,
  SelectDemo,
  FieldDemo,
  ButtonDemo,
  IconButtonDemo,
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
      { name: 'Quote', Demo: QuoteDemo },
      { name: 'MarginNote', Demo: MarginNoteDemo },
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
            <Stack gap="lg">
              <Stack gap="sm">
                <Text as="p" size="lg" weight="bold">
                  {section.category}
                </Text>
                <Divider />
              </Stack>
              <Stack gap="xl">
                {section.components.map(({ name, Demo }) => (
                  <Card key={name} variant="flat" padding="lg">
                    <Stack gap="md">
                      <Text as="p" size="md" weight="semibold" family="mono" tone="link">
                        {'<'}
                        {name}
                        {' />'}
                      </Text>
                      <Demo />
                    </Stack>
                  </Card>
                ))}
              </Stack>
            </Stack>
          </section>
        ))}
      </Stack>
    </div>
  );
}
