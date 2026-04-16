import { forwardRef } from 'react';
import type { ReactNode } from 'react';
import { useInjectStyles } from '@4lt7ab/core';

export interface LinkCardProps {
  /** Card title — rendered in serif. */
  title: ReactNode;
  /** Optional description — rendered smaller in muted text. */
  description?: ReactNode;
  /** Whether link opens in a new tab. */
  external?: boolean;
  href?: string;
  target?: string;
  rel?: string;
  onClick?: React.MouseEventHandler<HTMLAnchorElement>;
  id?: string;
  'aria-label'?: string;
  'data-testid'?: string;
}

const STYLES_ID = 'alttab-link-card';

const linkCardCSS = /* css */ `
  .alttab-link-card {
    display: block;
    background: var(--color-surface);
    border: var(--border-width-thick) solid var(--color-border);
    border-radius: 8px;
    padding: 1.5rem;
    text-decoration: none;
    color: inherit;
    transition: border-color var(--transition-base), transform var(--transition-base);
  }

  .alttab-link-card:hover {
    border-color: var(--color-text-link);
    transform: translateY(-2px);
  }

  .alttab-link-card__title {
    display: block;
    font-family: var(--font-serif);
    font-size: 1.125rem;
    font-weight: 600;
    color: var(--color-text);
    margin-bottom: 0.25rem;
  }

  .alttab-link-card__desc {
    display: block;
    font-size: 0.875rem;
    color: var(--color-text-muted);
  }
`;

/**
 * Clickable card with serif title and muted description.
 * Hover lifts and accent-borders. Good for project links, post previews, etc.
 */
export const LinkCard: React.ForwardRefExoticComponent<Omit<LinkCardProps, 'ref'> & React.RefAttributes<HTMLAnchorElement>> = forwardRef<HTMLAnchorElement, LinkCardProps>(
  function LinkCard({
    title,
    description,
    external,
    href,
    target,
    rel,
    onClick,
    id,
    'aria-label': ariaLabel,
    'data-testid': dataTestId,
  }, ref): React.JSX.Element {
    useInjectStyles(STYLES_ID, linkCardCSS);

    return (
      <a
        ref={ref}
        className="alttab-link-card"
        href={href}
        target={external ? '_blank' : target}
        rel={external ? 'noopener noreferrer' : rel}
        onClick={onClick}
        id={id}
        aria-label={ariaLabel}
        data-testid={dataTestId}
      >
        <span className="alttab-link-card__title">{title}</span>
        {description && <span className="alttab-link-card__desc">{description}</span>}
      </a>
    );
  }
);
