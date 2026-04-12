import { ButtonDemo } from './ButtonDemo';
import { StackDemo } from './StackDemo';
import { CardDemo } from './CardDemo';
import { FieldDemo } from './FieldDemo';
import { InputDemo } from './InputDemo';
import { TextareaDemo } from './TextareaDemo';
import { SelectDemo } from './SelectDemo';
import { TokensDemo } from './TokensDemo';
import { BadgeDemo } from './BadgeDemo';
import { IconDemo } from './IconDemo';
import { SkeletonDemo } from './SkeletonDemo';
import { ProgressBarDemo } from './ProgressBarDemo';
import { EmptyStateDemo } from './EmptyStateDemo';
import { PaginationDemo } from './PaginationDemo';
import { PageHeaderDemo } from './PageHeaderDemo';
import { TagChipDemo } from './TagChipDemo';
import { ExpandableCardDemo } from './ExpandableCardDemo';
import { ModalDemo } from './ModalDemo';
import { ContainerDemo } from './ContainerDemo';
import { ProseDemo } from './ProseDemo';
import { ThinkingCycleDemo } from './ThinkingCycleDemo';
import { LinkCardDemo } from './LinkCardDemo';
import { TableDemo } from './TableDemo';
import { StatusDotDemo } from './StatusDotDemo';
import { ThemePickerDemo } from './ThemePickerDemo';

export type DemoSource = 'ui' | 'content';

export interface DemoEntry {
  name: string;
  category: 'Layout' | 'Form' | 'Action' | 'Foundation' | 'Feedback' | 'Navigation' | 'Examples';
  source: DemoSource;
  component: () => React.JSX.Element;
}

export const demos: DemoEntry[] = [
  // ── @4lt7ab/ui ──
  // Foundation
  { name: 'Tokens', category: 'Foundation', source: 'ui', component: TokensDemo },

  // Layout
  { name: 'Stack', category: 'Layout', source: 'ui', component: StackDemo },
  { name: 'Card', category: 'Layout', source: 'ui', component: CardDemo },
  { name: 'ExpandableCard', category: 'Layout', source: 'ui', component: ExpandableCardDemo },
  { name: 'PageHeader', category: 'Layout', source: 'ui', component: PageHeaderDemo },
  { name: 'Table', category: 'Layout', source: 'ui', component: TableDemo },
  { name: 'Skeleton', category: 'Layout', source: 'ui', component: SkeletonDemo },

  // Action
  { name: 'Button', category: 'Action', source: 'ui', component: ButtonDemo },
  { name: 'Icon', category: 'Action', source: 'ui', component: IconDemo },
  { name: 'TagChip', category: 'Action', source: 'ui', component: TagChipDemo },
  { name: 'Pagination', category: 'Navigation', source: 'ui', component: PaginationDemo },

  // Feedback
  { name: 'Badge', category: 'Feedback', source: 'ui', component: BadgeDemo },
  { name: 'ProgressBar', category: 'Feedback', source: 'ui', component: ProgressBarDemo },
  { name: 'EmptyState', category: 'Feedback', source: 'ui', component: EmptyStateDemo },
  { name: 'StatusDot', category: 'Feedback', source: 'ui', component: StatusDotDemo },
  { name: 'Modal', category: 'Feedback', source: 'ui', component: ModalDemo },

  // Form
  { name: 'Field', category: 'Form', source: 'ui', component: FieldDemo },
  { name: 'Input', category: 'Form', source: 'ui', component: InputDemo },
  { name: 'Textarea', category: 'Form', source: 'ui', component: TextareaDemo },
  { name: 'Select', category: 'Form', source: 'ui', component: SelectDemo },

  // ── @4lt7ab/ui/content ──
  { name: 'Container', category: 'Layout', source: 'content', component: ContainerDemo },
  { name: 'Prose', category: 'Layout', source: 'content', component: ProseDemo },
  { name: 'ThinkingCycle', category: 'Action', source: 'content', component: ThinkingCycleDemo },
  { name: 'LinkCard', category: 'Layout', source: 'content', component: LinkCardDemo },
  { name: 'ThemePicker', category: 'Action', source: 'ui', component: ThemePickerDemo },
];
