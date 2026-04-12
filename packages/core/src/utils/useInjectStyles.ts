import { useEffect } from 'react';

/**
 * Injects a <style> tag into <head>, identified by id.
 * Updates the tag's content if the CSS has changed.
 * Styles persist after unmount — they're inert when no matching elements exist.
 */
export function useInjectStyles(id: string, css: string): void {
  useEffect(() => {
    let el = document.getElementById(id) as HTMLStyleElement | null;
    if (el) {
      if (el.textContent !== css) {
        el.textContent = css;
      }
      return;
    }
    el = document.createElement('style');
    el.id = id;
    el.textContent = css;
    document.head.appendChild(el);
  }, [id, css]);
}
