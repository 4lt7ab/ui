import type { HTMLAttributes, ReactNode } from 'react';
import { useInjectStyles } from '../../utils/useInjectStyles';

export interface FooterLink {
  label: string;
  href: string;
  external?: boolean;
}

export interface FooterProps extends HTMLAttributes<HTMLElement> {
  /** Copyright line. e.g., "2026 Your Name" */
  copyright?: string;
  /** Footer links (GitHub, LinkedIn, etc.) */
  links?: FooterLink[];
  /** Custom content instead of/alongside default rendering. */
  children?: ReactNode;
}

const FOOTER_STYLES_ID = 'alttab-footer-styles';

const footerCSS = /* css */ `
  .alttab-footer {
    border-top: 1px solid var(--color-border);
    padding-block: 2.25rem;
  }

  .alttab-footer__inner {
    width: 100%;
    max-width: 680px;
    margin-inline: auto;
    padding-inline: 1.5rem;
    font-size: 0.875rem;
    color: var(--color-text-muted);
  }

  .alttab-footer__inner a {
    color: var(--color-text-muted);
    text-decoration: none;
    transition: color 0.15s ease;
  }

  .alttab-footer__inner a:hover {
    color: var(--color-text-link);
  }
`;

export function Footer({
  copyright,
  links = [],
  children,
  style,
  ...props
}: FooterProps): React.JSX.Element {
  useInjectStyles(FOOTER_STYLES_ID, footerCSS);

  return (
    <footer className="alttab-footer" style={style} {...props}>
      <div className="alttab-footer__inner">
        {children ?? (
          <p style={{ margin: 0 }}>
            {copyright && <>&copy; {copyright}</>}
            {links.map((link, i) => (
              <span key={link.href}>
                {(copyright || i > 0) && ' \u00B7 '}
                <a
                  href={link.href}
                  {...(link.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                >
                  {link.label}
                </a>
              </span>
            ))}
          </p>
        )}
      </div>
    </footer>
  );
}
