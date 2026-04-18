import { describe, expect, it, vi } from 'vitest';
import { act, renderHook } from '@testing-library/react';
import { useDisclosure } from './useDisclosure';

describe('useDisclosure', () => {
  it('defaults to closed', () => {
    const { result } = renderHook(() => useDisclosure());
    expect(result.current.open).toBe(false);
    expect(result.current.triggerProps['aria-expanded']).toBe(false);
    expect(result.current.contentProps.hidden).toBe(true);
  });

  it('honors defaultOpen', () => {
    const { result } = renderHook(() => useDisclosure({ defaultOpen: true }));
    expect(result.current.open).toBe(true);
    expect(result.current.triggerProps['aria-expanded']).toBe(true);
    expect(result.current.contentProps.hidden).toBe(false);
  });

  it('toggles open state when uncontrolled', () => {
    const { result } = renderHook(() => useDisclosure());
    act(() => result.current.onToggle());
    expect(result.current.open).toBe(true);
    act(() => result.current.onToggle());
    expect(result.current.open).toBe(false);
  });

  it('onOpen and onClose set state directly', () => {
    const { result } = renderHook(() => useDisclosure());
    act(() => result.current.onOpen());
    expect(result.current.open).toBe(true);
    act(() => result.current.onClose());
    expect(result.current.open).toBe(false);
  });

  it('does not mutate internal state when controlled — defers to parent', () => {
    const onOpenChange = vi.fn();
    const { result, rerender } = renderHook(
      ({ open }) => useDisclosure({ open, onOpenChange }),
      { initialProps: { open: false } },
    );

    act(() => result.current.onToggle());
    expect(onOpenChange).toHaveBeenCalledWith(true);
    // open stays false until the parent rerenders with new prop
    expect(result.current.open).toBe(false);

    rerender({ open: true });
    expect(result.current.open).toBe(true);
  });

  it('wires shared id onto triggerProps.aria-controls and contentProps.id', () => {
    const { result } = renderHook(() => useDisclosure());
    const { triggerProps, contentProps } = result.current;
    expect(triggerProps['aria-controls']).toBe(contentProps.id);
    expect(contentProps.id).toBeTruthy();
  });

  it('triggerProps.onClick toggles open when uncontrolled', () => {
    const { result } = renderHook(() => useDisclosure());
    act(() => result.current.triggerProps.onClick());
    expect(result.current.open).toBe(true);
  });
});
