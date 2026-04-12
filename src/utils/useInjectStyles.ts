import { useEffect } from 'react';

/**
 * Injects a <style> tag into <head> once, identified by id.
 * Subsequent calls with the same id are no-ops.
 * Styles persist after unmount — they're inert when no matching elements exist.
 */
export function useInjectStyles(id: string, css: string): void {
  useEffect(() => {
    if (document.getElementById(id)) return;
    const style = document.createElement('style');
    style.id = id;
    style.textContent = css;
    document.head.appendChild(style);
  }, [id, css]);
}
