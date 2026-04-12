import type { AnchorHTMLAttributes, ReactNode } from 'react';
import { useInjectStyles } from '../../utils/useInjectStyles';

export interface LinkCardProps extends Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'title'> {
  /** Card title — rendered in serif. */
  title: ReactNode;
  /** Optional description — rendered smaller in muted text. */
  description?: ReactNode;
  /** Whether link opens in a new tab. */
  external?: boolean;
}

const STYLES_ID = 'alttab-link-card';

const linkCardCSS = /* css */ `
  .alttab-link-card {
    display: block;
    background: var(--color-surface);
    border: 2px solid var(--color-border);
    border-radius: 8px;
    padding: 1.5rem;
    text-decoration: none;
    color: inherit;
    transition: border-color 0.15s ease, transform 0.15s ease;
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
export function LinkCard({
  title,
  description,
  external,
  children,
  ...props
}: LinkCardProps): React.JSX.Element {
  useInjectStyles(STYLES_ID, linkCardCSS);

  return (
    <a
      className="alttab-link-card"
      {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      {...props}
    >
      <span className="alttab-link-card__title">{title}</span>
      {description && <span className="alttab-link-card__desc">{description}</span>}
      {children}
    </a>
  );
}
