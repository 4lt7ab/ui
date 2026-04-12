import type { CSSProperties } from 'react';

interface IconComponentProps {
  size?: number;
  style?: CSSProperties;
}

function svgProps(size: number, style?: CSSProperties): Record<string, unknown> {
  return {
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 2,
    strokeLinecap: 'round' as const,
    strokeLinejoin: 'round' as const,
    style,
  };
}

export function IconClose({ size = 24, style }: IconComponentProps = {}): React.JSX.Element {
  return (
    <svg {...svgProps(size, style)}>
      <path d="M18 6L6 18M6 6l12 12" />
    </svg>
  );
}

export function IconChevronRight({ size = 24, style }: IconComponentProps = {}): React.JSX.Element {
  return (
    <svg {...svgProps(size, style)}>
      <path d="M9 18l6-6-6-6" />
    </svg>
  );
}

export function IconChevronDown({ size = 24, style }: IconComponentProps = {}): React.JSX.Element {
  return (
    <svg {...svgProps(size, style)}>
      <path d="M6 9l6 6 6-6" />
    </svg>
  );
}

export function IconChevronLeft({ size = 24, style }: IconComponentProps = {}): React.JSX.Element {
  return (
    <svg {...svgProps(size, style)}>
      <path d="M15 18l-6-6 6-6" />
    </svg>
  );
}

export function IconChevronUp({ size = 24, style }: IconComponentProps = {}): React.JSX.Element {
  return (
    <svg {...svgProps(size, style)}>
      <path d="M18 15l-6-6-6 6" />
    </svg>
  );
}

export function IconCheck({ size = 24, style }: IconComponentProps = {}): React.JSX.Element {
  return (
    <svg {...svgProps(size, style)}>
      <path d="M20 6L9 17l-5-5" />
    </svg>
  );
}

export function IconCheckCircle({ size = 24, style }: IconComponentProps = {}): React.JSX.Element {
  return (
    <svg {...svgProps(size, style)}>
      <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
      <path d="M22 4L12 14.01l-3-3" />
    </svg>
  );
}

export function IconWarning({ size = 24, style }: IconComponentProps = {}): React.JSX.Element {
  return (
    <svg {...svgProps(size, style)}>
      <path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z" />
      <line x1="12" y1="9" x2="12" y2="13" />
      <line x1="12" y1="17" x2="12.01" y2="17" />
    </svg>
  );
}

export function IconError({ size = 24, style }: IconComponentProps = {}): React.JSX.Element {
  return (
    <svg {...svgProps(size, style)}>
      <circle cx="12" cy="12" r="10" />
      <path d="M15 9l-6 6M9 9l6 6" />
    </svg>
  );
}

export function IconInfo({ size = 24, style }: IconComponentProps = {}): React.JSX.Element {
  return (
    <svg {...svgProps(size, style)}>
      <circle cx="12" cy="12" r="10" />
      <line x1="12" y1="16" x2="12" y2="12" />
      <line x1="12" y1="8" x2="12.01" y2="8" />
    </svg>
  );
}

export function IconSearch({ size = 24, style }: IconComponentProps = {}): React.JSX.Element {
  return (
    <svg {...svgProps(size, style)}>
      <circle cx="11" cy="11" r="8" />
      <path d="M21 21l-4.35-4.35" />
    </svg>
  );
}

export function IconTrash({ size = 24, style }: IconComponentProps = {}): React.JSX.Element {
  return (
    <svg {...svgProps(size, style)}>
      <path d="M3 6h18M19 6v14a2 2 0 01-2 2H7a2 2 0 01-2-2V6m3 0V4a2 2 0 012-2h4a2 2 0 012 2v2" />
    </svg>
  );
}

export function IconSettings({ size = 24, style }: IconComponentProps = {}): React.JSX.Element {
  return (
    <svg {...svgProps(size, style)}>
      <circle cx="12" cy="12" r="3" />
      <path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-2 2 2 2 0 01-2-2v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83 0 2 2 0 010-2.83l.06-.06A1.65 1.65 0 004.68 15a1.65 1.65 0 00-1.51-1H3a2 2 0 01-2-2 2 2 0 012-2h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 010-2.83 2 2 0 012.83 0l.06.06A1.65 1.65 0 009 4.68a1.65 1.65 0 001-1.51V3a2 2 0 012-2 2 2 0 012 2v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 0 2 2 0 010 2.83l-.06.06A1.65 1.65 0 0019.4 9a1.65 1.65 0 001.51 1H21a2 2 0 012 2 2 2 0 01-2 2h-.09a1.65 1.65 0 00-1.51 1z" />
    </svg>
  );
}

export function IconPlus({ size = 24, style }: IconComponentProps = {}): React.JSX.Element {
  return (
    <svg {...svgProps(size, style)}>
      <path d="M12 5v14M5 12h14" />
    </svg>
  );
}

export function IconMinus({ size = 24, style }: IconComponentProps = {}): React.JSX.Element {
  return (
    <svg {...svgProps(size, style)}>
      <path d="M5 12h14" />
    </svg>
  );
}

export function IconEdit({ size = 24, style }: IconComponentProps = {}): React.JSX.Element {
  return (
    <svg {...svgProps(size, style)}>
      <path d="M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7" />
      <path d="M18.5 2.5a2.121 2.121 0 013 3L12 15l-4 1 1-4 9.5-9.5z" />
    </svg>
  );
}

export function IconArrowLeft({ size = 24, style }: IconComponentProps = {}): React.JSX.Element {
  return (
    <svg {...svgProps(size, style)}>
      <path d="M19 12H5M12 19l-7-7 7-7" />
    </svg>
  );
}

export function IconArrowRight({ size = 24, style }: IconComponentProps = {}): React.JSX.Element {
  return (
    <svg {...svgProps(size, style)}>
      <path d="M5 12h14M12 5l7 7-7 7" />
    </svg>
  );
}

export function IconMenu({ size = 24, style }: IconComponentProps = {}): React.JSX.Element {
  return (
    <svg {...svgProps(size, style)}>
      <path d="M3 12h18M3 6h18M3 18h18" />
    </svg>
  );
}

export function IconEye({ size = 24, style }: IconComponentProps = {}): React.JSX.Element {
  return (
    <svg {...svgProps(size, style)}>
      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  );
}

export function IconEyeOff({ size = 24, style }: IconComponentProps = {}): React.JSX.Element {
  return (
    <svg {...svgProps(size, style)}>
      <path d="M17.94 17.94A10.07 10.07 0 0112 20c-7 0-11-8-11-8a18.45 18.45 0 015.06-5.94M9.9 4.24A9.12 9.12 0 0112 4c7 0 11 8 11 8a18.5 18.5 0 01-2.16 3.19m-6.72-1.07a3 3 0 11-4.24-4.24" />
      <path d="M1 1l22 22" />
    </svg>
  );
}

export function IconCopy({ size = 24, style }: IconComponentProps = {}): React.JSX.Element {
  return (
    <svg {...svgProps(size, style)}>
      <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
      <path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1" />
    </svg>
  );
}

export function IconExternalLink({ size = 24, style }: IconComponentProps = {}): React.JSX.Element {
  return (
    <svg {...svgProps(size, style)}>
      <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3" />
    </svg>
  );
}

export function IconMoreVertical({ size = 24, style }: IconComponentProps = {}): React.JSX.Element {
  return (
    <svg {...svgProps(size, style)}>
      <circle cx="12" cy="12" r="1" />
      <circle cx="12" cy="5" r="1" />
      <circle cx="12" cy="19" r="1" />
    </svg>
  );
}

export function IconFilter({ size = 24, style }: IconComponentProps = {}): React.JSX.Element {
  return (
    <svg {...svgProps(size, style)}>
      <path d="M22 3H2l8 9.46V19l4 2v-8.54L22 3z" />
    </svg>
  );
}
