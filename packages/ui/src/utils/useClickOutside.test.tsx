import { describe, expect, it, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { useRef, useState } from 'react';
import { useClickOutside } from './useClickOutside';

function Harness({
  onOutside,
  initialEnabled = true,
}: {
  onOutside: () => void;
  initialEnabled?: boolean;
}): React.JSX.Element {
  const ref = useRef<HTMLDivElement>(null);
  const [enabled, setEnabled] = useState(initialEnabled);

  useClickOutside(ref, onOutside, enabled);

  return (
    <div>
      <div ref={ref} data-testid="inside">
        <button type="button">inner-button</button>
      </div>
      <button type="button" data-testid="outside">
        outside-button
      </button>
      <button
        type="button"
        data-testid="toggle"
        onClick={() => setEnabled((v) => !v)}
      >
        toggle
      </button>
    </div>
  );
}

describe('useClickOutside', () => {
  it('fires handler on mousedown outside the ref element', async () => {
    const user = userEvent.setup();
    const handler = vi.fn();
    render(<Harness onOutside={handler} />);

    await user.click(screen.getByTestId('outside'));
    expect(handler).toHaveBeenCalledTimes(1);
  });

  it('does not fire on mousedown inside the ref element', async () => {
    const user = userEvent.setup();
    const handler = vi.fn();
    render(<Harness onOutside={handler} />);

    await user.click(screen.getByRole('button', { name: 'inner-button' }));
    expect(handler).not.toHaveBeenCalled();
  });

  it('does not fire when disabled', async () => {
    const user = userEvent.setup();
    const handler = vi.fn();
    render(<Harness onOutside={handler} initialEnabled={false} />);

    await user.click(screen.getByTestId('outside'));
    expect(handler).not.toHaveBeenCalled();
  });

  it('attaches listener when toggled from disabled to enabled', async () => {
    const user = userEvent.setup();
    const handler = vi.fn();
    render(<Harness onOutside={handler} initialEnabled={false} />);

    // Disabled — outside click is silent.
    await user.click(screen.getByTestId('outside'));
    expect(handler).not.toHaveBeenCalled();

    // Enable (toggle is itself outside the ref — that press doesn't count
    // since the hook was disabled when it fired), then click outside.
    await user.click(screen.getByTestId('toggle'));
    expect(handler).not.toHaveBeenCalled();
    await user.click(screen.getByTestId('outside'));
    expect(handler).toHaveBeenCalledTimes(1);
  });

  it('removes listener when toggled from enabled to disabled', async () => {
    const user = userEvent.setup();
    const handler = vi.fn();
    render(<Harness onOutside={handler} initialEnabled={true} />);

    // Enabled — outside click fires.
    await user.click(screen.getByTestId('outside'));
    expect(handler).toHaveBeenCalledTimes(1);

    // Toggle itself is outside the ref — pressing it fires the handler one
    // more time before React commits the disabled state.
    await user.click(screen.getByTestId('toggle'));
    expect(handler).toHaveBeenCalledTimes(2);

    // Now disabled — subsequent outside clicks are silent.
    await user.click(screen.getByTestId('outside'));
    expect(handler).toHaveBeenCalledTimes(2);
  });

  it('responds to mousedown (not just click) so it closes before mouseup', () => {
    const handler = vi.fn();
    render(<Harness onOutside={handler} />);

    const outside = screen.getByTestId('outside');
    outside.dispatchEvent(
      new MouseEvent('mousedown', { bubbles: true, cancelable: true }),
    );
    expect(handler).toHaveBeenCalledTimes(1);
  });

  it('no-ops when the ref is unattached (ref.current === null)', () => {
    function DetachedHarness({
      onOutside,
    }: {
      onOutside: () => void;
    }): React.JSX.Element {
      const ref = useRef<HTMLDivElement>(null);
      useClickOutside(ref, onOutside, true);
      return (
        <button type="button" data-testid="somewhere">
          somewhere
        </button>
      );
    }

    const handler = vi.fn();
    render(<DetachedHarness onOutside={handler} />);

    screen
      .getByTestId('somewhere')
      .dispatchEvent(
        new MouseEvent('mousedown', { bubbles: true, cancelable: true }),
      );

    // ref.current is null → guarded; handler is not invoked.
    expect(handler).not.toHaveBeenCalled();
  });

  it('cleans up the listener on unmount', () => {
    const handler = vi.fn();
    const { unmount } = render(<Harness onOutside={handler} />);

    unmount();

    document.body.dispatchEvent(
      new MouseEvent('mousedown', { bubbles: true, cancelable: true }),
    );
    expect(handler).not.toHaveBeenCalled();
  });
});
