/** Shared layout and typography constants for content components. */

// ── Breakpoints ──

/** Max-width for prose reading measure (~65ch). Used by Prose, Markdown, Container. */
export const BREAKPOINT_PROSE = '680px';
/** Max-width for wide content layouts. Used by Container. */
export const BREAKPOINT_WIDE = '900px';
/** Min-width at which margin/side notes become visible. */
export const BREAKPOINT_MARGIN_NOTES = '1100px';

// ── Prose typography scale ──

/** Body text size for prose content. */
export const PROSE_BODY_SIZE = '1.0625rem';
/** H1 heading size — fluid, clamped between 2rem and 2.75rem. */
export const PROSE_H1_SIZE = 'clamp(2rem, 5vw, 2.75rem)';
/** H2 heading size. */
export const PROSE_H2_SIZE = '1.35em';
/** Inline code font size. */
export const PROSE_CODE_SIZE = '0.875rem';
/** Blockquote font size. */
export const PROSE_BLOCKQUOTE_SIZE = '1.25rem';

// ── Color-mix ratios ──

/** Subtle background tint (zebra stripes, alternating rows). */
export const MIX_SUBTLE = '5%';
/** Hover background tint. */
export const MIX_HOVER = '8%';
/** Badge/tag background tint. */
export const MIX_BADGE = '14%';
