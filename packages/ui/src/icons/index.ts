import type { CSSProperties } from 'react';

export * from './icons';

import {
  IconClose, IconChevronRight, IconChevronDown, IconChevronLeft, IconChevronUp,
  IconCheck, IconCheckCircle, IconWarning, IconError, IconInfo,
  IconSearch, IconTrash, IconSettings, IconPlus, IconMinus,
  IconEdit, IconArrowLeft, IconArrowRight, IconMenu,
  IconEye, IconEyeOff, IconCopy, IconExternalLink, IconMoreVertical, IconFilter,
} from './icons';

export type IconName =
  | 'close' | 'chevron-right' | 'chevron-down' | 'chevron-left' | 'chevron-up'
  | 'check' | 'check-circle' | 'warning' | 'error' | 'info'
  | 'search' | 'trash' | 'settings' | 'plus' | 'minus'
  | 'edit' | 'arrow-left' | 'arrow-right' | 'menu'
  | 'eye' | 'eye-off' | 'copy' | 'external-link' | 'more-vertical' | 'filter';

export const iconRegistry: Record<IconName, (props: { size?: number; style?: CSSProperties }) => React.JSX.Element> = {
  'close': IconClose,
  'chevron-right': IconChevronRight,
  'chevron-down': IconChevronDown,
  'chevron-left': IconChevronLeft,
  'chevron-up': IconChevronUp,
  'check': IconCheck,
  'check-circle': IconCheckCircle,
  'warning': IconWarning,
  'error': IconError,
  'info': IconInfo,
  'search': IconSearch,
  'trash': IconTrash,
  'settings': IconSettings,
  'plus': IconPlus,
  'minus': IconMinus,
  'edit': IconEdit,
  'arrow-left': IconArrowLeft,
  'arrow-right': IconArrowRight,
  'menu': IconMenu,
  'eye': IconEye,
  'eye-off': IconEyeOff,
  'copy': IconCopy,
  'external-link': IconExternalLink,
  'more-vertical': IconMoreVertical,
  'filter': IconFilter,
};
