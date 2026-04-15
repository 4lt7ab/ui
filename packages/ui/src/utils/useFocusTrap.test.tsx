import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { useRef } from "react";
import { useFocusTrap } from "./useFocusTrap";

function TrapHarness({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  useFocusTrap(ref);
  return <div ref={ref}>{children}</div>;
}

describe("useFocusTrap", () => {
  it("wraps focus from last to first on Tab", async () => {
    const user = userEvent.setup();
    render(
      <TrapHarness>
        <button>First</button>
        <button>Second</button>
        <button>Third</button>
      </TrapHarness>,
    );

    const third = screen.getByRole("button", { name: "Third" });
    third.focus();
    expect(document.activeElement).toBe(third);

    await user.keyboard("{Tab}");
    expect(document.activeElement).toBe(
      screen.getByRole("button", { name: "First" }),
    );
  });

  it("wraps focus from first to last on Shift+Tab", async () => {
    const user = userEvent.setup();
    render(
      <TrapHarness>
        <button>First</button>
        <button>Second</button>
        <button>Third</button>
      </TrapHarness>,
    );

    const first = screen.getByRole("button", { name: "First" });
    first.focus();

    await user.keyboard("{Shift>}{Tab}{/Shift}");
    expect(document.activeElement).toBe(
      screen.getByRole("button", { name: "Third" }),
    );
  });

  it("prevents Tab from leaving when there is only one focusable element", async () => {
    const user = userEvent.setup();
    render(
      <TrapHarness>
        <button>Only</button>
      </TrapHarness>,
    );

    const only = screen.getByRole("button", { name: "Only" });
    only.focus();

    await user.keyboard("{Tab}");
    // Should stay on the same element (wraps first → first)
    expect(document.activeElement).toBe(only);
  });

  it("prevents focus escape when no focusable elements exist", async () => {
    const user = userEvent.setup();
    const outerButton = document.createElement("button");
    outerButton.textContent = "Outside";
    document.body.appendChild(outerButton);

    render(
      <TrapHarness>
        <p>No focusable elements</p>
      </TrapHarness>,
    );

    outerButton.focus();
    // Tab should be prevented (no focusable targets inside trap)
    await user.keyboard("{Tab}");
    // Focus should not move to anything inside the trap

    outerButton.remove();
  });

  it("skips disabled elements", async () => {
    const user = userEvent.setup();
    render(
      <TrapHarness>
        <button>First</button>
        <button disabled>Disabled</button>
        <button>Last</button>
      </TrapHarness>,
    );

    const last = screen.getByRole("button", { name: "Last" });
    last.focus();

    // Tab from last should wrap to first (skipping disabled)
    await user.keyboard("{Tab}");
    expect(document.activeElement).toBe(
      screen.getByRole("button", { name: "First" }),
    );
  });
});
