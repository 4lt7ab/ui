import { afterEach, describe, expect, it, vi } from 'vitest';
import {
  __resetRhythmEngineForTests,
  getCurrentPhase,
  getRhythmConfigSnapshot,
  setActiveRhythm,
  subscribePhase,
  subscribeRhythmConfig,
} from './rhythm';

describe('rhythm engine', () => {
  afterEach(() => {
    __resetRhythmEngineForTests();
    vi.restoreAllMocks();
  });

  it('starts in idle state with no config', () => {
    expect(getRhythmConfigSnapshot()).toBeNull();
    expect(getCurrentPhase()).toBe(0.5);
  });

  it('setActiveRhythm publishes config and notifies listeners', () => {
    const listener = vi.fn();
    const unsubscribe = subscribeRhythmConfig(listener);

    setActiveRhythm({ bpm: 80, easing: 'sine' });
    expect(listener).toHaveBeenCalledTimes(1);
    expect(getRhythmConfigSnapshot()).toEqual({ bpm: 80, easing: 'sine' });

    /* Idempotent: same config does not re-notify. */
    setActiveRhythm({ bpm: 80, easing: 'sine' });
    expect(listener).toHaveBeenCalledTimes(1);

    /* Different config notifies again. */
    setActiveRhythm({ bpm: 120 });
    expect(listener).toHaveBeenCalledTimes(2);

    unsubscribe();
  });

  it('setActiveRhythm(null) clears the rhythm', () => {
    setActiveRhythm({ bpm: 80 });
    expect(getRhythmConfigSnapshot()).not.toBeNull();

    setActiveRhythm(null);
    expect(getRhythmConfigSnapshot()).toBeNull();
  });

  it('does not start the rAF loop when no subscriber exists (lazy init)', () => {
    const rafSpy = vi.spyOn(globalThis, 'requestAnimationFrame');
    setActiveRhythm({ bpm: 80 });
    expect(rafSpy).not.toHaveBeenCalled();
  });

  it('starts the rAF loop when the first subscriber attaches', () => {
    const rafSpy = vi.spyOn(globalThis, 'requestAnimationFrame').mockImplementation(() => 1);
    setActiveRhythm({ bpm: 80 });
    const unsubscribe = subscribePhase(() => {});
    expect(rafSpy).toHaveBeenCalledTimes(1);
    unsubscribe();
  });

  it('fires subscriber once immediately with current phase', () => {
    vi.spyOn(globalThis, 'requestAnimationFrame').mockImplementation(() => 1);
    setActiveRhythm({ bpm: 80 });
    const cb = vi.fn();
    const unsubscribe = subscribePhase(cb);
    expect(cb).toHaveBeenCalledWith(expect.any(Number));
    unsubscribe();
  });

  it('stops the rAF loop when the last subscriber detaches', () => {
    vi.spyOn(globalThis, 'requestAnimationFrame').mockImplementation(() => 123);
    const cancelSpy = vi.spyOn(globalThis, 'cancelAnimationFrame');

    setActiveRhythm({ bpm: 80 });
    const a = subscribePhase(() => {});
    const b = subscribePhase(() => {});

    a();
    expect(cancelSpy).not.toHaveBeenCalled();

    b();
    expect(cancelSpy).toHaveBeenCalledWith(123);
  });

  it('respects prefers-reduced-motion by pinning phase and skipping rAF', () => {
    const mm = vi.fn((query: string) => ({
      matches: query.includes('reduce'),
      media: query,
      onchange: null,
      addEventListener: vi.fn(),
      removeEventListener: vi.fn(),
      addListener: vi.fn(),
      removeListener: vi.fn(),
      dispatchEvent: vi.fn(() => true),
    })) as unknown as typeof window.matchMedia;
    vi.stubGlobal('matchMedia', mm);

    const rafSpy = vi.spyOn(globalThis, 'requestAnimationFrame');

    setActiveRhythm({ bpm: 80 });
    const cb = vi.fn();
    const unsubscribe = subscribePhase(cb);

    /* Subscriber was notified with pinned phase (0.5) but rAF was never started. */
    expect(cb).toHaveBeenCalledWith(0.5);
    expect(rafSpy).not.toHaveBeenCalled();

    unsubscribe();
    vi.unstubAllGlobals();
  });
});
