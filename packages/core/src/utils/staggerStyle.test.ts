import { describe, it, expect } from 'vitest';
import { staggerStyle } from './staggerStyle';

describe('staggerStyle', () => {
  it('returns animation properties with defaults', () => {
    const style = staggerStyle(0);
    expect(style.animation).toContain('fade-in-up');
    expect(style.animationDelay).toBe('0ms');
  });

  it('calculates delay based on index', () => {
    const style = staggerStyle(5);
    expect(style.animationDelay).toBe('150ms');
  });

  it('caps delay at maxMs', () => {
    const style = staggerStyle(100);
    expect(style.animationDelay).toBe('300ms');
  });

  it('accepts custom options', () => {
    const style = staggerStyle(3, { delayMs: 50, maxMs: 200, duration: 0.5 });
    expect(style.animation).toContain('0.5s');
    expect(style.animationDelay).toBe('150ms');
  });

  it('includes ease timing and both fill mode', () => {
    const style = staggerStyle(0);
    expect(style.animation).toContain('ease');
    expect(style.animation).toContain('both');
  });

  it('uses default duration of 0.3s', () => {
    const style = staggerStyle(0);
    expect(style.animation).toContain('0.3s');
  });
});
