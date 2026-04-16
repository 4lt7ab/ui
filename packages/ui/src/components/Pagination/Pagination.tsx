import { forwardRef } from 'react';
import { semantic as t } from '@4lt7ab/core';
import { Button } from '../Button';

/** Customizable text labels for the Pagination component. */
export interface PaginationLabels {
  /** Label for the previous button.
   * @default 'Previous'
   */
  previous?: string;
  /** Label for the next button.
   * @default 'Next'
   */
  next?: string;
  /** Formatter for the "Page X of Y" text. */
  pageOf?: (page: number, total: number) => string;
}

/** Previous/Next pagination controls with page indicator. */
export interface PaginationProps {
  /** Current page number (1-based). */
  page: number;
  /** Total number of pages. */
  totalPages: number;
  /** Total number of items across all pages (shown in the indicator text). */
  total: number;
  /** Called when the user navigates to a different page. */
  onPageChange: (page: number) => void;
  /** Custom text labels for buttons and page indicator. */
  labels?: PaginationLabels;
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
  }, ref): React.JSX.Element {
    const resolvedLabels = { ...defaultLabels, ...labels };

    return (
      <div
        ref={ref}
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: t.spaceSm,
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
