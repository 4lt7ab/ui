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
import { IconButtonDemo } from './IconButtonDemo';
import { SkeletonDemo } from './SkeletonDemo';
import { ProgressBarDemo } from './ProgressBarDemo';
import { EmptyStateDemo } from './EmptyStateDemo';
import { PaginationDemo } from './PaginationDemo';
import { HeaderDemo } from './HeaderDemo';
import { ExpandableCardDemo } from './ExpandableCardDemo';
import { ModalDemo } from './ModalDemo';
import { OverlayDemo } from './OverlayDemo';
import { ConfirmDialogDemo } from './ConfirmDialogDemo';
import { ModalShellFormPatternDemo } from './ModalShellFormPatternDemo';
import { ContainerDemo } from './ContainerDemo';
import { ProseDemo } from './ProseDemo';
import { MarkdownDemo } from './MarkdownDemo';
import { ThinkingCycleDemo } from './ThinkingCycleDemo';
import { LinkCardDemo } from './LinkCardDemo';
import { TableDemo } from './TableDemo';
import { StatusDotDemo } from './StatusDotDemo';
import { ThemePickerDemo } from './ThemePickerDemo';
import { EpigraphDemo } from './EpigraphDemo';
import { PullQuoteDemo } from './PullQuoteDemo';
import { MarginNoteDemo } from './MarginNoteDemo';
import { SideNoteDemo } from './SideNoteDemo';
import { DateRangePickerDemo } from './DateRangePickerDemo';
import { DatePickerDemo } from './DatePickerDemo';
import { CalendarDemo } from './CalendarDemo';
import { ErrorBoundaryDemo } from './ErrorBoundaryDemo';
import { IconFontDemo } from './IconFontDemo';
import { ToastDemo } from './ToastDemo';
import { ComboboxDemo } from './ComboboxDemo';
import { TableFiltersDemo } from './TableFiltersDemo';
import { ChipPickerDemo } from './ChipPickerDemo';
import { SearchInputDemo } from './SearchInputDemo';
import { SegmentedControlDemo } from './SegmentedControlDemo';
import { AlertBannerDemo } from './AlertBannerDemo';
import { TopBarDemo } from './TopBarDemo';
import { TextSectionDemo } from './TextSectionDemo';
import { SurfaceDemo } from './SurfaceDemo';
import { GridDemo } from './GridDemo';
import { DividerDemo } from './DividerDemo';
import { TabStripDemo } from './TabStripDemo';

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
  { name: 'Surface', category: 'Layout', source: 'ui', component: SurfaceDemo },
  { name: 'Grid', category: 'Layout', source: 'ui', component: GridDemo },
  { name: 'Divider', category: 'Layout', source: 'ui', component: DividerDemo },
  { name: 'Container', category: 'Layout', source: 'ui', component: ContainerDemo },
  { name: 'Stack', category: 'Layout', source: 'ui', component: StackDemo },
  { name: 'Card', category: 'Layout', source: 'ui', component: CardDemo },
  { name: 'LinkCard', category: 'Layout', source: 'ui', component: LinkCardDemo },
  { name: 'ExpandableCard', category: 'Layout', source: 'ui', component: ExpandableCardDemo },
  { name: 'Header', category: 'Layout', source: 'ui', component: HeaderDemo },
  { name: 'Table', category: 'Layout', source: 'ui', component: TableDemo },
  { name: 'Table.FilterBar', category: 'Layout', source: 'ui', component: TableFiltersDemo },
  { name: 'Skeleton', category: 'Layout', source: 'ui', component: SkeletonDemo },

  // Action
  { name: 'Button', category: 'Action', source: 'ui', component: ButtonDemo },
  { name: 'Icon', category: 'Action', source: 'ui', component: IconDemo },
  { name: 'IconButton', category: 'Action', source: 'ui', component: IconButtonDemo },
  { name: 'IconFont', category: 'Action', source: 'ui', component: IconFontDemo },
  { name: 'TopBar', category: 'Navigation', source: 'ui', component: TopBarDemo },
  { name: 'Pagination', category: 'Navigation', source: 'ui', component: PaginationDemo },

  // Feedback
  { name: 'Badge', category: 'Feedback', source: 'ui', component: BadgeDemo },
  { name: 'ProgressBar', category: 'Feedback', source: 'ui', component: ProgressBarDemo },
  { name: 'EmptyState', category: 'Feedback', source: 'ui', component: EmptyStateDemo },
  { name: 'StatusDot', category: 'Feedback', source: 'ui', component: StatusDotDemo },
  { name: 'Modal', category: 'Feedback', source: 'ui', component: ModalDemo },
  { name: 'Overlay', category: 'Feedback', source: 'ui', component: OverlayDemo },
  { name: 'ConfirmDialog', category: 'Feedback', source: 'ui', component: ConfirmDialogDemo },
  { name: 'ModalShellFormPattern', category: 'Feedback', source: 'ui', component: ModalShellFormPatternDemo },
  { name: 'ErrorBoundary', category: 'Feedback', source: 'ui', component: ErrorBoundaryDemo },
  { name: 'Toast', category: 'Feedback', source: 'ui', component: ToastDemo },
  { name: 'AlertBanner', category: 'Feedback', source: 'ui', component: AlertBannerDemo },

  // Form
  { name: 'Field', category: 'Form', source: 'ui', component: FieldDemo },
  { name: 'Input', category: 'Form', source: 'ui', component: InputDemo },
  { name: 'Textarea', category: 'Form', source: 'ui', component: TextareaDemo },
  { name: 'Select', category: 'Form', source: 'ui', component: SelectDemo },
  { name: 'DatePicker', category: 'Form', source: 'ui', component: DatePickerDemo },
  { name: 'DateRangePicker', category: 'Form', source: 'ui', component: DateRangePickerDemo },
  { name: 'Calendar', category: 'Form', source: 'ui', component: CalendarDemo },
  { name: 'Combobox', category: 'Form', source: 'ui', component: ComboboxDemo },
  { name: 'ChipPicker', category: 'Form', source: 'ui', component: ChipPickerDemo },
  { name: 'SearchInput', category: 'Form', source: 'ui', component: SearchInputDemo },

  // Molecules
  { name: 'TabStrip', category: 'Navigation', source: 'ui', component: TabStripDemo },

  // Action (additional)
  { name: 'SegmentedControl', category: 'Action', source: 'ui', component: SegmentedControlDemo },

  // ── @4lt7ab/ui/content ──
  { name: 'Prose', category: 'Layout', source: 'content', component: ProseDemo },
  { name: 'Markdown', category: 'Layout', source: 'content', component: MarkdownDemo },
  { name: 'Epigraph', category: 'Layout', source: 'content', component: EpigraphDemo },
  { name: 'PullQuote', category: 'Layout', source: 'content', component: PullQuoteDemo },
  { name: 'MarginNote', category: 'Layout', source: 'content', component: MarginNoteDemo },
  { name: 'SideNote', category: 'Layout', source: 'content', component: SideNoteDemo },
  { name: 'ThinkingCycle', category: 'Action', source: 'content', component: ThinkingCycleDemo },
  { name: 'TextSection', category: 'Form', source: 'content', component: TextSectionDemo },
  { name: 'ThemePicker', category: 'Action', source: 'ui', component: ThemePickerDemo },
];

// Re-export all individual demos for use in ComponentCatalogue
export {
  ButtonDemo, StackDemo, CardDemo, FieldDemo, InputDemo,
  TextareaDemo, SelectDemo, TokensDemo, BadgeDemo, IconDemo,
  IconButtonDemo, SkeletonDemo, ProgressBarDemo, EmptyStateDemo,
  PaginationDemo, HeaderDemo, ExpandableCardDemo,
  ModalDemo, OverlayDemo, ConfirmDialogDemo, ContainerDemo,
  ProseDemo, MarkdownDemo, ThinkingCycleDemo, LinkCardDemo, TableDemo,
  StatusDotDemo, ThemePickerDemo, EpigraphDemo, PullQuoteDemo,
  MarginNoteDemo, SideNoteDemo, DateRangePickerDemo, DatePickerDemo, CalendarDemo,
  ErrorBoundaryDemo,
  IconFontDemo,
  ToastDemo,
  ComboboxDemo,
  TableFiltersDemo,
  ChipPickerDemo,
  SearchInputDemo,
  SegmentedControlDemo,
  AlertBannerDemo,
  ModalShellFormPatternDemo,
  TopBarDemo,
  TextSectionDemo,
  SurfaceDemo,
  GridDemo,
  DividerDemo,
  TabStripDemo,
};
