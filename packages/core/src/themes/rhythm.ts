/**
 * Theme rhythm engine.
 *
 * A single shared `requestAnimationFrame` loop that advances a sine-wave phase
 * in time with the active theme's `rhythm.bpm`. Components subscribe via
 * `useThemeRhythm()` and receive the current phase 0..1 without triggering a
 * rerender per frame.
 *
 * Design principles:
 * - **Lazy.** Zero cost when no component subscribes. The rAF loop is only
 *   started when the first subscriber attaches and stopped when the last one
 *   detaches.
 * - **Shared clock.** All subscribers read from the same phase, so pulses are
 *   synchronized across components — a Card border glow and a StatusDot pulse
 *   will breathe together.
 * - **Reduced motion aware.** When the user prefers reduced motion, phase is
 *   pinned to `0.5` (neutral) and subscribers are only notified once.
 * - **No rerender per frame.** Subscribers read phase via a callback or a ref
 *   they control, never via React state.
 */

import type { MutableRefObject } from 'react';
import type { ThemeRhythm } from './types';

/** Easing function over phase [0, 1] → amplitude [0, 1]. */
type EasingFn = (t: number) => number;

const TAU = Math.PI * 2;

const easings: Record<NonNullable<ThemeRhythm['easing']>, EasingFn> = {
  /* Sine wave: smooth in/out. (1 - cos) / 2 runs 0..1..0 across one period. */
  sine: (t) => (1 - Math.cos(TAU * t)) / 2,
  /* Triangle: linear up, linear down. */
  triangle: (t) => 1 - Math.abs(t * 2 - 1),
  /* Square: on for first half of period, off for second. */
  square: (t) => (t < 0.5 ? 1 : 0),
  /* Sawtooth: ramp up, snap down. */
  sawtooth: (t) => t,
};

/**
 * Engine state. Module-scoped singleton — a rhythm clock is a global concept
 * (there's one active theme at a time, one shared tempo).
 */
interface EngineState {
  /** Active rhythm config. `null` when the active theme has no rhythm. */
  config: ThemeRhythm | null;
  /** Monotonic time in ms when the current rhythm started. */
  startedAt: number;
  /** Live phase 0..1, shaped by the easing. Updated every frame. */
  phase: number;
  /** rAF handle, or 0 when idle. */
  rafId: number;
  /** Subscribers called every frame with the updated phase. */
  subscribers: Set<(phase: number) => void>;
}

const engine: EngineState = {
  config: null,
  startedAt: 0,
  phase: 0.5,
  rafId: 0,
  subscribers: new Set(),
};

/** Cached `prefers-reduced-motion` matcher. */
function prefersReducedMotion(): boolean {
  if (typeof window === 'undefined' || !window.matchMedia) return false;
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

function tick(now: number): void {
  const { config, startedAt, subscribers } = engine;
  if (!config || subscribers.size === 0) {
    engine.rafId = 0;
    return;
  }

  /* Period in ms derived from bpm. bpm 60 → 1000ms per beat. */
  const periodMs = 60_000 / Math.max(1, config.bpm);
  const elapsed = now - startedAt;
  const t = (elapsed % periodMs) / periodMs;
  const easing = easings[config.easing ?? 'sine'];
  const intensity = config.intensity ?? 1;
  engine.phase = easing(t) * intensity;

  for (const cb of subscribers) cb(engine.phase);

  engine.rafId = requestAnimationFrame(tick);
}

function startIfNeeded(): void {
  if (engine.rafId !== 0) return;
  if (!engine.config || engine.subscribers.size === 0) return;
  if (typeof window === 'undefined') return;
  /* Reduced motion: pin phase, notify once, skip rAF. */
  if (prefersReducedMotion()) {
    engine.phase = 0.5;
    for (const cb of engine.subscribers) cb(engine.phase);
    return;
  }
  engine.startedAt = performance.now();
  engine.rafId = requestAnimationFrame(tick);
}

function stop(): void {
  if (engine.rafId !== 0) {
    cancelAnimationFrame(engine.rafId);
    engine.rafId = 0;
  }
}

/**
 * Set the active rhythm. Called by ThemeProvider when the theme changes.
 * Passing `null` stops the engine. Idempotent — safe to call with the same
 * config repeatedly.
 */
export function setActiveRhythm(config: ThemeRhythm | null | undefined): void {
  const normalized = config ?? null;
  const prev = engine.config;
  /* Cheap shallow compare to avoid restarting the clock on unrelated rerenders. */
  if (
    prev === normalized ||
    (prev &&
      normalized &&
      prev.bpm === normalized.bpm &&
      prev.easing === normalized.easing &&
      prev.intensity === normalized.intensity)
  ) {
    return;
  }
  engine.config = normalized;
  engine.phase = 0.5;
  if (normalized && engine.subscribers.size > 0) {
    engine.startedAt = typeof performance !== 'undefined' ? performance.now() : 0;
    if (engine.rafId === 0) startIfNeeded();
  } else if (!normalized) {
    stop();
  }
  /* Notify current subscribers about the config change so they can read new tempo. */
  rhythmConfigListeners.forEach((l) => l());
}

/* ── Config-change store (rerenders when the *config* changes, not when phase ticks) ── */

/** @internal — used by `useThemeRhythm` (defined in ThemeProvider.tsx). */
export const rhythmConfigListeners = new Set<() => void>();

/** @internal — subscriber for `useSyncExternalStore`. */
export function subscribeRhythmConfig(listener: () => void): () => void {
  rhythmConfigListeners.add(listener);
  return () => {
    rhythmConfigListeners.delete(listener);
  };
}

/** @internal — snapshot getter for `useSyncExternalStore`. */
export function getRhythmConfigSnapshot(): ThemeRhythm | null {
  return engine.config;
}

/** @internal — server snapshot getter for `useSyncExternalStore`. */
export function getRhythmServerSnapshot(): ThemeRhythm | null {
  return null;
}

/** @internal — imperative subscribe used by `useThemeRhythm`. */
export function subscribePhase(cb: (phase: number) => void): () => void {
  engine.subscribers.add(cb);
  startIfNeeded();
  /* Fire once immediately so the subscriber has a value even if reduced motion pins the clock. */
  cb(engine.phase);
  return () => {
    engine.subscribers.delete(cb);
    if (engine.subscribers.size === 0) stop();
  };
}

/** @internal — current phase read. */
export function getCurrentPhase(): number {
  return engine.phase;
}

/** Handle returned by `useThemeRhythm`. */
export interface ThemeRhythmHandle {
  /** Active rhythm config from the current theme. `null` if the theme has no rhythm. */
  config: ThemeRhythm | null;
  /**
   * Mutable ref whose `.current` holds the current phase 0..1 (shaped by easing
   * and scaled by intensity). Read it inside your own rAF or event handlers.
   * Only updated while at least one subscribe() callback is active.
   */
  phaseRef: MutableRefObject<number>;
  /**
   * Subscribe a callback that fires every frame with the latest phase.
   * Returns an unsubscribe function. Starts the shared rAF loop if this is the
   * first subscriber; stops it when the last subscriber unsubscribes.
   */
  subscribe: (cb: (phase: number) => void) => () => void;
  /**
   * Animation duration string derived from `config.bpm` (e.g. `'750ms'`),
   * suitable for CSS `animation-duration`. Returns `undefined` if no rhythm is
   * active, so callers can fall back to their default.
   */
  durationCss: string | undefined;
}

/* ── Test hook: reset engine between tests. Not exported from the package barrel. ── */
/** @internal */
export function __resetRhythmEngineForTests(): void {
  stop();
  engine.config = null;
  engine.phase = 0.5;
  engine.subscribers.clear();
  rhythmConfigListeners.clear();
}

