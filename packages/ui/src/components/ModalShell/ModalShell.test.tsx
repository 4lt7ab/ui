import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { ModalShell } from "./ModalShell";

vi.mock("@4lt7ab/core", () => ({
  semantic: new Proxy(
    {},
    { get: (_t, prop) => `var(--mock-${String(prop)})` },
  ),
  useInjectStyles: vi.fn(),
}));

describe("ModalShell", () => {
  let onClose: ReturnType<typeof vi.fn>;

  beforeEach(() => {
    document.body.innerHTML = "";
    onClose = vi.fn();
  });

  // -- Rendering ---------------------------------------------------------------

  it("renders children inside a dialog", () => {
    render(
      <ModalShell onClose={onClose} aria-label="Test modal">
        <p>Hello world</p>
      </ModalShell>,
    );
    expect(screen.getByRole("dialog")).toBeInTheDocument();
    expect(screen.getByText("Hello world")).toBeInTheDocument();
  });

  it("renders as alertdialog when role is overridden", () => {
    render(
      <ModalShell onClose={onClose} role="alertdialog" aria-label="Confirm">
        <p>Are you sure?</p>
      </ModalShell>,
    );
    expect(screen.getByRole("alertdialog")).toBeInTheDocument();
  });

  it("sets aria-modal on the dialog", () => {
    render(
      <ModalShell onClose={onClose} aria-label="Test">
        <p>Content</p>
      </ModalShell>,
    );
    expect(screen.getByRole("dialog")).toHaveAttribute("aria-modal", "true");
  });

  it("uses aria-label when provided", () => {
    render(
      <ModalShell onClose={onClose} aria-label="My modal">
        <p>Content</p>
      </ModalShell>,
    );
    expect(screen.getByRole("dialog")).toHaveAttribute(
      "aria-label",
      "My modal",
    );
  });

  it("uses aria-labelledby with titleId when no aria-label", () => {
    render(
      <ModalShell onClose={onClose} titleId="heading-1">
        <h2 id="heading-1">Modal Title</h2>
      </ModalShell>,
    );
    expect(screen.getByRole("dialog")).toHaveAttribute(
      "aria-labelledby",
      "heading-1",
    );
  });

  // -- Close behavior ----------------------------------------------------------

  it("calls onClose when Escape is pressed", async () => {
    const user = userEvent.setup();
    render(
      <ModalShell onClose={onClose} aria-label="Test">
        <button>Inside</button>
      </ModalShell>,
    );

    await user.keyboard("{Escape}");
    expect(onClose).toHaveBeenCalledOnce();
  });

  it("calls onClose when overlay is clicked", async () => {
    const user = userEvent.setup();
    render(
      <ModalShell onClose={onClose} aria-label="Test">
        <button>Inside</button>
      </ModalShell>,
    );

    // The overlay is the first child in the portal — click outside the dialog
    const overlay = document.body.querySelector(
      '[style*="position: fixed"]',
    ) as HTMLElement;
    // The overlay is the element with onClick={onClose} — find it by its role/style
    // ModalShell renders <Overlay onClick={onClose} />
    // Let's click it directly
    if (overlay) await user.click(overlay);
    expect(onClose).toHaveBeenCalled();
  });

  // -- Focus management --------------------------------------------------------

  it("moves focus into the modal on mount", () => {
    render(
      <ModalShell onClose={onClose} aria-label="Test">
        <button>First button</button>
        <button>Second button</button>
      </ModalShell>,
    );

    // First focusable element inside the modal should receive focus
    expect(document.activeElement).toBe(
      screen.getByRole("button", { name: "First button" }),
    );
  });

  it("restores focus to previously focused element on unmount", () => {
    // Create and focus a button before mounting the modal
    const outer = document.createElement("button");
    outer.textContent = "Outer button";
    document.body.appendChild(outer);
    outer.focus();
    expect(document.activeElement).toBe(outer);

    const { unmount } = render(
      <ModalShell onClose={onClose} aria-label="Test">
        <button>Modal button</button>
      </ModalShell>,
    );

    // Focus moved into modal
    expect(document.activeElement).not.toBe(outer);

    unmount();

    // Focus restored
    expect(document.activeElement).toBe(outer);

    outer.remove();
  });

  it("focuses the container if no focusable elements inside", () => {
    render(
      <ModalShell onClose={onClose} aria-label="Test">
        <p>No focusable elements here</p>
      </ModalShell>,
    );

    // Should focus the dialog container itself (tabIndex={-1})
    expect(document.activeElement).toBe(screen.getByRole("dialog"));
  });
});
