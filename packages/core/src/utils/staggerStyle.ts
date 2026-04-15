import type { CSSProperties } from 'react';
import { KEYFRAMES } from '../themes/ThemeProvider';

export interface StaggerOptions {
  /** Delay between each item in ms. @default 30 */
  delayMs?: number;
  /** Maximum total delay in ms (caps the stagger). @default 300 */
  maxMs?: number;
  /** Animation duration in seconds. @default 0.3 */
  duration?: number;
}

/**
 * Returns CSSProperties for a staggered fadeInUp entrance animation.
 * Spread onto a list item's style prop: `style={{ ...staggerStyle(i) }}`
 *
 * Requires ThemeProvider to be mounted (it injects the fadeInUp keyframe).
 */
export function staggerStyle(
  index: number,
  options?: StaggerOptions,
): CSSProperties {
  const { delayMs = 30, maxMs = 300, duration = 0.3 } = options ?? {};
  const delay = Math.min(index * delayMs, maxMs);
  return {
    animation: `${KEYFRAMES.fadeInUp} ${duration}s ease both`,
    animationDelay: `${delay}ms`,
  };
}
