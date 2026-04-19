import React from 'react';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ThemePicker } from './ThemePicker';

// Mock @4lt7ab/core to override useTheme() with a predictable result. We
// keep the real `Slot`, `semantic`, `useInjectStyles`, and `useThemeRhythm`
// exports intact via importOriginal so that `<Card>` (used by the grid
// variant's `<Card asChild>` cards) and Surface work unmodified — only
// `useTheme` is swapped out for a spy-driven stub. `setTheme` is a fresh
// spy per test.
const setThemeSpy = vi.fn();

vi.mock('@4lt7ab/core', async (importOriginal) => {
  const actual = await importOriginal<typeof import('@4lt7ab/core')>();
  return {
    ...actual,
    useTheme: () => ({
      theme: 'slate',
      resolved: 'slate',
      themes: new Map([
        ['slate', { name: 'slate', label: 'Slate' }],
        ['synthwave', { name: 'synthwave', label: 'Synthwave' }],
        ['moss', { name: 'moss', label: 'Moss' }],
      ]),
      setTheme: setThemeSpy,
    }),
  };
});

describe('ThemePicker', () => {
  beforeEach(() => {
    document.body.innerHTML = '';
    setThemeSpy.mockReset();
  });

  describe('compact variant', () => {
    it('renders the current theme label in the trigger', () => {
      render(<ThemePicker variant="compact" />);
      expect(screen.getByRole('combobox')).toHaveTextContent('Slate');
    });

    it('opens the listbox and lists all themes on click', async () => {
      const user = userEvent.setup();
      render(<ThemePicker variant="compact" />);
      await user.click(screen.getByRole('combobox'));
      const options = screen.getAllByRole('option');
      expect(options).toHaveLength(3);
      expect(options[0]).toHaveTextContent('Slate');
      expect(options[1]).toHaveTextContent('Synthwave');
      expect(options[2]).toHaveTextContent('Moss');
    });

    it('calls setTheme on selection via click', async () => {
      const user = userEvent.setup();
      render(<ThemePicker variant="compact" />);
      await user.click(screen.getByRole('combobox'));
      await user.click(screen.getByRole('option', { name: /synthwave/i }));
      expect(setThemeSpy).toHaveBeenCalledWith('synthwave');
    });

    it('supports keyboard nav (ArrowDown + Enter) and Escape', async () => {
      const user = userEvent.setup();
      render(<ThemePicker variant="compact" />);
      const trigger = screen.getByRole('combobox');
      trigger.focus();
      await user.keyboard('{ArrowDown}'); // open, focus current (slate)
      await user.keyboard('{ArrowDown}'); // move to synthwave
      await user.keyboard('{Enter}');
      expect(setThemeSpy).toHaveBeenCalledWith('synthwave');
    });

    it('closes the listbox on Escape', async () => {
      const user = userEvent.setup();
      render(<ThemePicker variant="compact" />);
      const trigger = screen.getByRole('combobox');
      await user.click(trigger);
      expect(trigger).toHaveAttribute('aria-expanded', 'true');
      await user.keyboard('{Escape}');
      expect(trigger).toHaveAttribute('aria-expanded', 'false');
    });

    it('closes the listbox on click outside', async () => {
      const user = userEvent.setup();
      render(
        <div>
          <ThemePicker variant="compact" />
          <button type="button">Outside</button>
        </div>,
      );
      const trigger = screen.getByRole('combobox');
      await user.click(trigger);
      expect(trigger).toHaveAttribute('aria-expanded', 'true');
      await user.click(screen.getByRole('button', { name: 'Outside' }));
      expect(trigger).toHaveAttribute('aria-expanded', 'false');
    });
  });

  describe('grid variant', () => {
    it('renders a button per theme', () => {
      render(<ThemePicker />);
      // Grid buttons are plain <button> — filter out any Select trigger since
      // grid variant renders no combobox.
      const buttons = screen.getAllByRole('button');
      expect(buttons).toHaveLength(3);
      expect(buttons[0]).toHaveTextContent('Slate');
    });

    it('calls setTheme on click', async () => {
      const user = userEvent.setup();
      render(<ThemePicker />);
      await user.click(screen.getByRole('button', { name: /moss/i }));
      expect(setThemeSpy).toHaveBeenCalledWith('moss');
    });

    it('marks the active theme with aria-current="true"', () => {
      // The grid variant shares the LinkCard stylesheet — the active-theme
      // accent border is pinned via `aria-current="true"` on the <button>.
      render(<ThemePicker />);
      const active = screen.getByRole('button', { name: /slate/i });
      expect(active).toHaveAttribute('aria-current', 'true');
      // Non-active buttons omit the attribute entirely so the `:hover` rule
      // owns the accent border for them.
      const inactive = screen.getByRole('button', { name: /moss/i });
      expect(inactive).not.toHaveAttribute('aria-current');
    });
  });
});
