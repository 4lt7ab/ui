import { useEffect, useRef, type ReactNode, type HTMLAttributes } from 'react';
import { useInjectStyles } from '../../utils/useInjectStyles';

export interface MarginSpotlightProps extends HTMLAttributes<HTMLElement> {
  /** Small uppercase label above the content (e.g. "Currently"). */
  label?: string;
  /** Scroll distance (px) before the fade begins. Default: 100 */
  fadeStart?: number;
  /** Scroll distance (px) at which the element is fully invisible. Default: 400 */
  fadeEnd?: number;
  children: ReactNode;
}

const STYLES_ID = 'alttab-margin-spotlight';

const spotlightCSS = /* css */ `
  .alttab-margin-spotlight {
    display: none;
  }

  @media (min-width: 1100px) {
    .alttab-margin-spotlight {
      display: block;
      position: fixed;
      left: calc(50% + 340px + 40px);
      top: 160px;
      width: 200px;
      font-family: var(--font-serif);
      font-size: 0.875rem;
      line-height: 1.5;
      color: color-mix(in srgb, var(--color-text-link) calc(var(--ms-fade, 1) * 100%), transparent);
      opacity: var(--ms-fade, 1);
      transform: translateY(calc(var(--ms-drift, 0) * 1px));
      transition: opacity 0.15s ease, transform 0.15s ease, color 0.15s ease;
      will-change: opacity, transform;
      pointer-events: auto;
      z-index: 1;
    }

    .alttab-margin-spotlight__label {
      display: block;
      font-family: var(--font-sans);
      font-size: 0.6875rem;
      font-weight: 600;
      letter-spacing: 0.08em;
      text-transform: uppercase;
      color: color-mix(in srgb, var(--color-text-muted) calc(var(--ms-fade, 1) * 100%), transparent);
      margin-bottom: 0.5rem;
    }

    .alttab-margin-spotlight a {
      color: inherit;
      text-decoration: none;
    }

    .alttab-margin-spotlight a:hover {
      text-decoration: underline;
      text-underline-offset: 3px;
    }

    .alttab-margin-spotlight small {
      display: block;
      font-family: var(--font-sans);
      font-size: 0.75rem;
      color: color-mix(in srgb, var(--color-text-muted) calc(var(--ms-fade, 1) * 100%), transparent);
      margin-top: 0.25rem;
    }
  }

  @media (prefers-reduced-motion: reduce) {
    .alttab-margin-spotlight {
      transition: none;
    }
  }
`;

export function MarginSpotlight({
  label,
  fadeStart = 100,
  fadeEnd = 400,
  children,
  style,
  ...props
}: MarginSpotlightProps): React.JSX.Element {
  useInjectStyles(STYLES_ID, spotlightCSS);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const range = Math.max(1, fadeEnd - fadeStart);
    let ticking = false;

    function update(): void {
      const y = window.scrollY;
      const progress = Math.min(1, Math.max(0, (y - fadeStart) / range));
      el!.style.setProperty('--ms-fade', String(1 - progress));
      el!.style.setProperty('--ms-drift', String(progress * -8));
      el!.style.pointerEvents = progress >= 1 ? 'none' : '';
      ticking = false;
    }

    function onScroll(): void {
      if (!ticking) {
        requestAnimationFrame(update);
        ticking = true;
      }
    }

    window.addEventListener('scroll', onScroll, { passive: true });
    update();
    return () => window.removeEventListener('scroll', onScroll);
  }, [fadeStart, fadeEnd]);

  return (
    <aside
      ref={ref}
      className="alttab-margin-spotlight"
      style={style}
      {...props}
    >
      {label && <span className="alttab-margin-spotlight__label">{label}</span>}
      {children}
    </aside>
  );
}
