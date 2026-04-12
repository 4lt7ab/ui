import { semantic as t } from '../../tokens/semantic';
import type { CSSProperties, ReactNode } from 'react';

export interface PageHeaderProps {
  title: string;
  subtitle?: string;
  trailing?: ReactNode;
  style?: CSSProperties;
}

export function PageHeader({
  title,
  subtitle,
  trailing,
  style,
}: PageHeaderProps): React.JSX.Element {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'flex-end',
        ...style,
      }}
    >
      <div>
        <h2
          style={{
            margin: 0,
            fontFamily: t.fontSans,
            fontWeight: 800,
            color: t.colorText,
          }}
        >
          {title}
        </h2>
        {subtitle && (
          <span
            style={{
              color: t.colorTextMuted,
              fontSize: '0.875rem',
            }}
          >
            {subtitle}
          </span>
        )}
      </div>
      {trailing && <div>{trailing}</div>}
    </div>
  );
}
