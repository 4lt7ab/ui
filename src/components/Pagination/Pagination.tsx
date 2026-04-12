import { forwardRef } from 'react';
import { semantic as t } from '../../tokens/semantic';
import { Button } from '../Button';
import type { CSSProperties } from 'react';

export interface PaginationLabels {
  previous?: string;
  next?: string;
  pageOf?: (page: number, total: number) => string;
}

export interface PaginationProps {
  page: number;
  totalPages: number;
  total: number;
  onPageChange: (page: number) => void;
  labels?: PaginationLabels;
  className?: string;
  style?: CSSProperties;
}

const defaultLabels: Required<PaginationLabels> = {
  previous: 'Previous',
  next: 'Next',
  pageOf: (page, total) => `Page ${page} of ${total}`,
};

export const Pagination: React.ForwardRefExoticComponent<Omit<PaginationProps, 'ref'> & React.RefAttributes<HTMLDivElement>> = forwardRef<HTMLDivElement, PaginationProps>(
  function Pagination({
    page,
    totalPages,
    total,
    onPageChange,
    labels,
    className,
    style,
  }, ref): React.JSX.Element {
    const resolvedLabels = { ...defaultLabels, ...labels };

    return (
      <div
        ref={ref}
        className={className}
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: t.spaceSm,
        ...style,
      }}
    >
      <Button
        variant="ghost"
        size="sm"
        disabled={page <= 1}
        onClick={() => onPageChange(page - 1)}
      >
        {resolvedLabels.previous}
      </Button>
      <span
        style={{
          color: t.colorTextMuted,
          fontSize: t.fontSizeSm,
          fontFamily: t.fontSans,
        }}
      >
        {resolvedLabels.pageOf(page, totalPages)} ({total} total)
      </span>
      <Button
        variant="ghost"
        size="sm"
        disabled={page >= totalPages}
        onClick={() => onPageChange(page + 1)}
      >
        {resolvedLabels.next}
      </Button>
    </div>
    );
  }
);
