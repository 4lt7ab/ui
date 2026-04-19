import { useState } from "react";
import { describe, it, expect, vi, beforeEach } from "vitest";
import { render, screen, fireEvent, act } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Calendar, nextFocusedDate } from "./index";
import type { CalendarSelection } from "./index";

vi.mock("@4lt7ab/core", () => ({
  semantic: new Proxy(
    {},
    { get: (_t, prop) => `var(--mock-${String(prop)})` },
  ),
  useInjectStyles: vi.fn(),
}));

// Pinned anchor so the test is deterministic. April 15, 2026 is a Wednesday.
const ANCHOR = new Date(2026, 3, 15);

function Harness(props: {
  mode?: "single" | "range";
  defaultFocusedDate?: Date;
  defaultViewDate?: Date;
  minDate?: Date;
  maxDate?: Date;
  onEscape?: () => void;
  onSelectSpy?: (v: CalendarSelection) => void;
}): React.JSX.Element {
  const [selected, setSelected] = useState<CalendarSelection>(undefined);
  return (
    <Calendar.Root
      mode={props.mode ?? "single"}
      selected={selected}
      onSelect={(v) => {
        setSelected(v);
        props.onSelectSpy?.(v);
      }}
      defaultFocusedDate={props.defaultFocusedDate ?? ANCHOR}
      defaultViewDate={props.defaultViewDate ?? ANCHOR}
      minDate={props.minDate}
      maxDate={props.maxDate}
    >
      <Calendar.Header />
      <Calendar.Nav direction="prev" />
      <Calendar.Nav direction="next" />
      <Calendar.Grid onEscape={props.onEscape} />
    </Calendar.Root>
  );
}

function focusedButton(): HTMLButtonElement {
  return screen.getByRole("grid").querySelector(
    'button[tabindex="0"]',
  ) as HTMLButtonElement;
}

function headerLabel(): string {
  const live = document.querySelector('span[aria-live="polite"]');
  return live?.textContent ?? "";
}

beforeEach(() => {
  document.body.innerHTML = "";
});

describe("Calendar.Grid — structure", () => {
  it("renders a role=grid table with 42 role=gridcell buttons", () => {
    render(<Harness />);
    const grid = screen.getByRole("grid");
    expect(grid).toBeDefined();
    const cells = grid.querySelectorAll('[role="gridcell"]');
    expect(cells.length).toBe(42);
    const buttons = grid.querySelectorAll("button");
    expect(buttons.length).toBe(42);
  });

  it("assigns roving tabindex: one cell has tabindex=0, the rest -1", () => {
    render(<Harness />);
    const grid = screen.getByRole("grid");
    const buttons = [...grid.querySelectorAll("button")];
    const tabbable = buttons.filter(
      (b) => b.getAttribute("tabindex") === "0",
    );
    const untabbable = buttons.filter(
      (b) => b.getAttribute("tabindex") === "-1",
    );
    expect(tabbable.length).toBe(1);
    expect(untabbable.length).toBe(41);
    // The focused cell corresponds to the default focused date (April 15).
    expect(tabbable[0].textContent).toBe("15");
  });
});

describe("Calendar.Grid — keyboard navigation", () => {
  it("ArrowLeft moves focus one day back", async () => {
    render(<Harness />);
    focusedButton().focus();
    await userEvent.keyboard("{ArrowLeft}");
    expect(focusedButton().textContent).toBe("14");
  });

  it("ArrowRight moves focus one day forward", async () => {
    render(<Harness />);
    focusedButton().focus();
    await userEvent.keyboard("{ArrowRight}");
    expect(focusedButton().textContent).toBe("16");
  });

  it("ArrowUp moves focus up one week", async () => {
    render(<Harness />);
    focusedButton().focus();
    await userEvent.keyboard("{ArrowUp}");
    expect(focusedButton().textContent).toBe("8");
  });

  it("ArrowDown moves focus down one week", async () => {
    render(<Harness />);
    focusedButton().focus();
    await userEvent.keyboard("{ArrowDown}");
    expect(focusedButton().textContent).toBe("22");
  });

  it("Home moves focus to the Sunday of the current row", async () => {
    // April 15 is a Wednesday → Sunday of that week is April 12.
    render(<Harness />);
    focusedButton().focus();
    await userEvent.keyboard("{Home}");
    expect(focusedButton().textContent).toBe("12");
  });

  it("End moves focus to the Saturday of the current row", async () => {
    // April 15 is a Wednesday → Saturday of that week is April 18.
    render(<Harness />);
    focusedButton().focus();
    await userEvent.keyboard("{End}");
    expect(focusedButton().textContent).toBe("18");
  });

  it("PageDown advances to the same day next month and scrolls the view", async () => {
    render(<Harness />);
    expect(headerLabel()).toBe("April 2026");
    focusedButton().focus();
    await userEvent.keyboard("{PageDown}");
    expect(headerLabel()).toBe("May 2026");
    expect(focusedButton().textContent).toBe("15");
  });

  it("PageUp rewinds to the same day previous month", async () => {
    render(<Harness />);
    focusedButton().focus();
    await userEvent.keyboard("{PageUp}");
    expect(headerLabel()).toBe("March 2026");
    expect(focusedButton().textContent).toBe("15");
  });

  it("Shift+PageDown jumps one year forward", async () => {
    render(<Harness />);
    focusedButton().focus();
    await userEvent.keyboard("{Shift>}{PageDown}{/Shift}");
    expect(headerLabel()).toBe("April 2027");
  });

  it("ArrowDown crossing the last row scrolls the view into the next month", async () => {
    // April 29 is a Wednesday in the last grid row of April.
    render(<Harness defaultFocusedDate={new Date(2026, 3, 29)} />);
    expect(headerLabel()).toBe("April 2026");
    focusedButton().focus();
    await userEvent.keyboard("{ArrowDown}");
    // 29 + 7 = May 6
    expect(headerLabel()).toBe("May 2026");
    expect(focusedButton().textContent).toBe("6");
  });
});

describe("Calendar.Grid — selection", () => {
  it("Enter commits the focused date via onSelect", async () => {
    const onSelectSpy = vi.fn();
    render(<Harness onSelectSpy={onSelectSpy} />);
    focusedButton().focus();
    await userEvent.keyboard("{Enter}");
    expect(onSelectSpy).toHaveBeenCalledTimes(1);
    const arg = onSelectSpy.mock.calls[0][0] as Date;
    expect(arg.getFullYear()).toBe(2026);
    expect(arg.getMonth()).toBe(3);
    expect(arg.getDate()).toBe(15);
  });

  it("Space commits the focused date via onSelect", async () => {
    const onSelectSpy = vi.fn();
    render(<Harness onSelectSpy={onSelectSpy} />);
    focusedButton().focus();
    await userEvent.keyboard(" ");
    expect(onSelectSpy).toHaveBeenCalledTimes(1);
  });

  it("does not commit when the focused date is disabled", async () => {
    const onSelectSpy = vi.fn();
    // Disable dates ≤ April 15 → attempting to select April 15 is a no-op.
    render(
      <Harness
        onSelectSpy={onSelectSpy}
        minDate={new Date(2026, 3, 16)}
      />,
    );
    focusedButton().focus();
    await userEvent.keyboard("{Enter}");
    expect(onSelectSpy).not.toHaveBeenCalled();
  });

  it("clicking a cell selects it and moves focus", async () => {
    const onSelectSpy = vi.fn();
    render(<Harness onSelectSpy={onSelectSpy} />);
    const grid = screen.getByRole("grid");
    const cell20 = [...grid.querySelectorAll("button")].find(
      (b) =>
        b.textContent === "20" && b.getAttribute("data-calendar-cell") ===
          "2026-3-20",
    ) as HTMLButtonElement;
    await userEvent.click(cell20);
    expect(onSelectSpy).toHaveBeenCalledTimes(1);
    expect(focusedButton().textContent).toBe("20");
  });
});

describe("Calendar.Grid — onEscape", () => {
  it("fires onEscape when Escape is pressed inside the grid", () => {
    const onEscape = vi.fn();
    render(<Harness onEscape={onEscape} />);
    const grid = screen.getByRole("grid");
    // Use fireEvent instead of userEvent so Escape doesn't hit document-level
    // handlers first. The grid handles Escape on its own onKeyDown.
    fireEvent.keyDown(grid, { key: "Escape" });
    expect(onEscape).toHaveBeenCalledTimes(1);
  });

  it("does not preventDefault when onEscape is not provided", () => {
    render(<Harness />);
    const grid = screen.getByRole("grid");
    const evt = new KeyboardEvent("keydown", {
      key: "Escape",
      bubbles: true,
      cancelable: true,
    });
    const dispatched = grid.dispatchEvent(evt);
    // Not prevented → dispatchEvent returns true.
    expect(dispatched).toBe(true);
  });
});

describe("nextFocusedDate — pure helper", () => {
  const base = new Date(2026, 3, 15); // Wednesday

  it("returns null for unhandled keys", () => {
    expect(nextFocusedDate(base, "a", false)).toBeNull();
  });

  it("ArrowDown crosses month boundary (April 28 → May 5)", () => {
    const d = new Date(2026, 3, 28);
    const next = nextFocusedDate(d, "ArrowDown", false);
    expect(next?.getMonth()).toBe(4);
    expect(next?.getDate()).toBe(5);
  });

  it("Shift+PageUp jumps one year back", () => {
    const next = nextFocusedDate(base, "PageUp", true);
    expect(next?.getFullYear()).toBe(2025);
    expect(next?.getMonth()).toBe(3);
  });
});
