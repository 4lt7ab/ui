import { useState } from "react";
import { describe, it, expect, vi, beforeEach } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { DateRangePicker } from "./DateRangePicker";
import type { DateRange } from "./DateRangePicker";

vi.mock("@4lt7ab/core", () => ({
  semantic: new Proxy(
    {},
    { get: (_t, prop) => `var(--mock-${String(prop)})` },
  ),
  useInjectStyles: vi.fn(),
}));

function Harness(props: {
  initialValue?: DateRange;
  disabledDates?: Date[];
  minDate?: Date;
  maxDate?: Date;
  onChangeSpy?: (v: DateRange | undefined) => void;
}): React.JSX.Element {
  const [value, setValue] = useState<DateRange | undefined>(props.initialValue);
  return (
    <DateRangePicker
      value={value}
      onChange={(v) => {
        setValue(v);
        props.onChangeSpy?.(v);
      }}
      disabledDates={props.disabledDates}
      minDate={props.minDate}
      maxDate={props.maxDate}
    />
  );
}

async function openPicker(): Promise<HTMLElement> {
  const trigger = screen.getByRole("button", { name: /select date range/i });
  await userEvent.click(trigger);
  return screen.getByRole("dialog");
}

function dayButton(dialog: HTMLElement, iso: string): HTMLButtonElement {
  const btn = dialog.querySelector(
    `button[data-calendar-cell="${iso}"]`,
  ) as HTMLButtonElement | null;
  if (!btn) throw new Error(`no button for ${iso}`);
  return btn;
}

async function navigateToMonth(
  dialog: HTMLElement,
  targetIso: string,
): Promise<void> {
  const [y, m] = targetIso.split("-").map(Number);
  const targetTime = new Date(y, m, 1).getTime();
  let safety = 24;
  while (safety-- > 0) {
    const label = dialog.querySelector('span[aria-live="polite"]')?.textContent ?? "";
    const [monthName, yearStr] = label.split(" ");
    const currentMonth = [
      "January","February","March","April","May","June",
      "July","August","September","October","November","December",
    ].indexOf(monthName);
    const currentTime = new Date(Number(yearStr), currentMonth, 1).getTime();
    if (currentTime === targetTime) return;
    const direction = currentTime < targetTime ? "Next month" : "Previous month";
    const btn = dialog.querySelector(
      `[aria-label="${direction}"]`,
    ) as HTMLButtonElement | null;
    if (!btn) return;
    await userEvent.click(btn);
  }
}

beforeEach(() => {
  document.body.innerHTML = "";
});

describe("DateRangePicker — two-click selection", () => {
  it("first click sets selectionStart; second click commits the range", async () => {
    const onChangeSpy = vi.fn();
    render(<Harness onChangeSpy={onChangeSpy} />);
    const dialog = await openPicker();
    await navigateToMonth(dialog,"2026-3-1"); // April 2026

    // First click: April 10. Should NOT commit.
    await userEvent.click(dayButton(dialog, "2026-3-10"));
    expect(onChangeSpy).not.toHaveBeenCalled();
    expect(screen.queryByRole("dialog")).toBeTruthy();

    // Second click: April 20. Should commit {from: 10, to: 20} and close.
    await userEvent.click(dayButton(dialog, "2026-3-20"));
    expect(onChangeSpy).toHaveBeenCalledTimes(1);
    const range = onChangeSpy.mock.calls[0][0] as DateRange;
    expect(range.from.toISOString().slice(0, 10)).toBe("2026-04-10");
    expect(range.to.toISOString().slice(0, 10)).toBe("2026-04-20");
    expect(screen.queryByRole("dialog")).toBeNull();
  });

  it("second click before the start swaps the endpoints", async () => {
    const onChangeSpy = vi.fn();
    render(<Harness onChangeSpy={onChangeSpy} />);
    const dialog = await openPicker();
    await navigateToMonth(dialog,"2026-3-1");
    await userEvent.click(dayButton(dialog, "2026-3-20")); // start
    await userEvent.click(dayButton(dialog, "2026-3-10")); // end < start
    const range = onChangeSpy.mock.calls[0][0] as DateRange;
    expect(range.from.getDate()).toBe(10);
    expect(range.to.getDate()).toBe(20);
  });
});

describe("DateRangePicker — month-boundary range", () => {
  it("commits a range spanning the April→May boundary", async () => {
    const onChangeSpy = vi.fn();
    render(<Harness onChangeSpy={onChangeSpy} />);
    const dialog = await openPicker();
    await navigateToMonth(dialog,"2026-3-1");

    // First click: April 28.
    await userEvent.click(dayButton(dialog, "2026-3-28"));

    // Navigate to May.
    const next = dialog.querySelector('[aria-label="Next month"]') as HTMLButtonElement;
    await userEvent.click(next);
    // May 5.
    await userEvent.click(dayButton(dialog, "2026-4-5"));

    const range = onChangeSpy.mock.calls[0][0] as DateRange;
    expect(range.from.getFullYear()).toBe(2026);
    expect(range.from.getMonth()).toBe(3);
    expect(range.from.getDate()).toBe(28);
    expect(range.to.getFullYear()).toBe(2026);
    expect(range.to.getMonth()).toBe(4);
    expect(range.to.getDate()).toBe(5);
  });
});

describe("DateRangePicker — DST-crossing range", () => {
  it("commits a range that crosses the US spring-forward DST boundary without drifting", async () => {
    // US DST spring-forward in 2026 is March 8. Range from March 1 → March 15
    // crosses it. Local-time Date constructors are used throughout, so no
    // drift is expected.
    const onChangeSpy = vi.fn();
    render(<Harness onChangeSpy={onChangeSpy} />);
    const dialog = await openPicker();
    await navigateToMonth(dialog,"2026-2-1"); // March 2026
    await userEvent.click(dayButton(dialog, "2026-2-1"));
    await userEvent.click(dayButton(dialog, "2026-2-15"));

    const range = onChangeSpy.mock.calls[0][0] as DateRange;
    expect(range.from.getMonth()).toBe(2);
    expect(range.from.getDate()).toBe(1);
    expect(range.to.getMonth()).toBe(2);
    expect(range.to.getDate()).toBe(15);
    // Sanity: the two local-time dates are exactly 14 calendar days apart —
    // if the DST boundary leaked in as a timezone shift we'd see 14.04… days.
    const calendarDays = Math.round(
      (range.to.getTime() - range.from.getTime()) / (1000 * 60 * 60 * 24),
    );
    expect(calendarDays).toBe(14);
  });
});

describe("DateRangePicker — disabled dates", () => {
  it("commits a range whose interior contains a disabled date (disabled date does not block commit)", async () => {
    const onChangeSpy = vi.fn();
    render(
      <Harness
        disabledDates={[new Date(2026, 3, 15)]}
        onChangeSpy={onChangeSpy}
      />,
    );
    const dialog = await openPicker();
    await navigateToMonth(dialog,"2026-3-1");
    // Confirm April 15 is disabled in the grid.
    const apr15 = dayButton(dialog, "2026-3-15");
    expect(apr15.getAttribute("aria-disabled")).toBe("true");

    // Select a range spanning April 10 → April 20 — April 15 is inside.
    await userEvent.click(dayButton(dialog, "2026-3-10"));
    await userEvent.click(dayButton(dialog, "2026-3-20"));

    const range = onChangeSpy.mock.calls[0][0] as DateRange;
    expect(range.from.getDate()).toBe(10);
    expect(range.to.getDate()).toBe(20);
  });

  it("clicking a disabled endpoint does not commit", async () => {
    const onChangeSpy = vi.fn();
    render(
      <Harness
        disabledDates={[new Date(2026, 3, 10)]}
        onChangeSpy={onChangeSpy}
      />,
    );
    const dialog = await openPicker();
    await navigateToMonth(dialog,"2026-3-1");
    // Disabled cells have pointer-events: none, so userEvent.click refuses.
    // Use fireEvent.click for a programmatic click the button's handler rejects.
    fireEvent.click(dayButton(dialog, "2026-3-10"));
    // No commit, no selectionStart, popover stays open.
    expect(onChangeSpy).not.toHaveBeenCalled();
    expect(screen.queryByRole("dialog")).toBeTruthy();
  });
});
