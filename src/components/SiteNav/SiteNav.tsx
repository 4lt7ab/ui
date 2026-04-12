import type { HTMLAttributes, ReactNode } from 'react';
import { useInjectStyles } from '../../utils/useInjectStyles';

export interface NavLink {
  label: string;
  href: string;
}

export interface SiteNavProps extends HTMLAttributes<HTMLElement> {
  /** Brand text or logo, displayed on the left. */
  brand: ReactNode;
  /** Brand link destination. Default: '/' */
  brandHref?: string;
  /** Navigation links displayed on the right. */
  links?: NavLink[];
  /** Optional children rendered after the links (e.g., theme toggle). */
  children?: ReactNode;
}

const NAV_STYLES_ID = 'alttab-sitenav-styles';

const navCSS = /* css */ `
  .alttab-sitenav {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-block: 1.5rem;
    font-size: 0.875rem;
    width: 100%;
    max-width: 680px;
    margin-inline: auto;
    padding-inline: 1.5rem;
  }

  .alttab-sitenav__brand {
    font-family: var(--font-serif);
    font-weight: 600;
    font-size: 1.125rem;
    color: var(--color-text);
    text-decoration: none;
    transition: color 0.15s ease;
  }

  .alttab-sitenav__brand:hover {
    color: var(--color-text-link);
  }

  .alttab-sitenav__links {
    display: flex;
    align-items: center;
    gap: 1.5rem;
  }

  .alttab-sitenav__links a {
    color: var(--color-text-muted);
    text-decoration: none;
    transition: color 0.15s ease;
  }

  .alttab-sitenav__links a:hover {
    color: var(--color-text-link);
  }

  @media (max-width: 480px) {
    .alttab-sitenav {
      flex-direction: column;
      align-items: flex-start;
      gap: 0.75rem;
    }
  }
`;

export function SiteNav({
  brand,
  brandHref = '/',
  links = [],
  children,
  style,
  ...props
}: SiteNavProps): React.JSX.Element {
  useInjectStyles(NAV_STYLES_ID, navCSS);

  return (
    <nav className="alttab-sitenav" aria-label="Site" style={style} {...props}>
      <a href={brandHref} className="alttab-sitenav__brand">
        {brand}
      </a>
      <div className="alttab-sitenav__links">
        {links.map((link) => (
          <a key={link.href} href={link.href}>
            {link.label}
          </a>
        ))}
        {children}
      </div>
    </nav>
  );
}
