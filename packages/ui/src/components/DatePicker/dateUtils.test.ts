import { describe, it, expect } from "vitest";
import {
  getDaysInMonth,
  getFirstDayOfMonth,
  isSameDay,
  isInRange,
  isDateDisabled,
  formatDate,
  buildCalendarGrid,
} from "../DateRangePicker/dateUtils";

describe("getDaysInMonth", () => {
  it("returns 31 for January", () => {
    expect(getDaysInMonth(2024, 0)).toBe(31);
  });

  it("returns 29 for February in a leap year", () => {
    expect(getDaysInMonth(2024, 1)).toBe(29);
  });

  it("returns 28 for February in a non-leap year", () => {
    expect(getDaysInMonth(2023, 1)).toBe(28);
  });

  it("returns 30 for April", () => {
    expect(getDaysInMonth(2024, 3)).toBe(30);
  });
});

describe("getFirstDayOfMonth", () => {
  it("returns correct weekday for a known date", () => {
    // January 1, 2024 was a Monday (1)
    expect(getFirstDayOfMonth(2024, 0)).toBe(1);
  });

  it("returns 0 for a month starting on Sunday", () => {
    // September 2024 starts on Sunday
    expect(getFirstDayOfMonth(2024, 8)).toBe(0);
  });
});

describe("isSameDay", () => {
  it("returns true for the same calendar day", () => {
    const a = new Date(2024, 5, 15, 10, 30);
    const b = new Date(2024, 5, 15, 22, 0);
    expect(isSameDay(a, b)).toBe(true);
  });

  it("returns false for different days", () => {
    const a = new Date(2024, 5, 15);
    const b = new Date(2024, 5, 16);
    expect(isSameDay(a, b)).toBe(false);
  });

  it("returns false for same day in different months", () => {
    const a = new Date(2024, 5, 15);
    const b = new Date(2024, 6, 15);
    expect(isSameDay(a, b)).toBe(false);
  });
});

describe("isInRange", () => {
  it("returns true for a date within the range", () => {
    const date = new Date(2024, 5, 15);
    const from = new Date(2024, 5, 10);
    const to = new Date(2024, 5, 20);
    expect(isInRange(date, from, to)).toBe(true);
  });

  it("returns true for the range boundaries (inclusive)", () => {
    const from = new Date(2024, 5, 10);
    const to = new Date(2024, 5, 20);
    expect(isInRange(from, from, to)).toBe(true);
    expect(isInRange(to, from, to)).toBe(true);
  });

  it("returns false for a date outside the range", () => {
    const date = new Date(2024, 5, 25);
    const from = new Date(2024, 5, 10);
    const to = new Date(2024, 5, 20);
    expect(isInRange(date, from, to)).toBe(false);
  });

  it("ignores time components", () => {
    const date = new Date(2024, 5, 15, 23, 59, 59);
    const from = new Date(2024, 5, 15, 0, 0, 0);
    const to = new Date(2024, 5, 15, 0, 0, 0);
    expect(isInRange(date, from, to)).toBe(true);
  });
});

describe("isDateDisabled", () => {
  it("returns false when no constraints", () => {
    expect(isDateDisabled(new Date(2024, 5, 15))).toBe(false);
  });

  it("returns true when before minDate", () => {
    const date = new Date(2024, 5, 10);
    const min = new Date(2024, 5, 15);
    expect(isDateDisabled(date, min)).toBe(true);
  });

  it("returns false when equal to minDate", () => {
    const date = new Date(2024, 5, 15);
    const min = new Date(2024, 5, 15);
    expect(isDateDisabled(date, min)).toBe(false);
  });

  it("returns true when after maxDate", () => {
    const date = new Date(2024, 5, 20);
    const max = new Date(2024, 5, 15);
    expect(isDateDisabled(date, undefined, max)).toBe(true);
  });

  it("returns true when in disabledDates", () => {
    const date = new Date(2024, 5, 15);
    const disabled = [new Date(2024, 5, 15), new Date(2024, 5, 20)];
    expect(isDateDisabled(date, undefined, undefined, disabled)).toBe(true);
  });

  it("returns false when not in disabledDates", () => {
    const date = new Date(2024, 5, 16);
    const disabled = [new Date(2024, 5, 15), new Date(2024, 5, 20)];
    expect(isDateDisabled(date, undefined, undefined, disabled)).toBe(false);
  });
});

describe("formatDate", () => {
  it("formats as YYYY-MM-DD", () => {
    expect(formatDate(new Date(2024, 0, 5))).toBe("2024-01-05");
  });

  it("pads single-digit months and days", () => {
    expect(formatDate(new Date(2024, 2, 3))).toBe("2024-03-03");
  });

  it("handles December correctly", () => {
    expect(formatDate(new Date(2024, 11, 31))).toBe("2024-12-31");
  });
});

describe("buildCalendarGrid", () => {
  it("always returns 42 cells (6 rows × 7 columns)", () => {
    expect(buildCalendarGrid(2024, 0)).toHaveLength(42);
    expect(buildCalendarGrid(2024, 1)).toHaveLength(42);
    expect(buildCalendarGrid(2024, 5)).toHaveLength(42);
  });

  it("includes all days of the target month", () => {
    const grid = buildCalendarGrid(2024, 0); // January 2024
    const janDays = grid.filter(
      (d) => d.getMonth() === 0 && d.getFullYear() === 2024,
    );
    expect(janDays).toHaveLength(31);
  });

  it("fills leading days from previous month", () => {
    // January 2024 starts on Monday (1), so Sunday (Dec 31) fills slot 0
    const grid = buildCalendarGrid(2024, 0);
    expect(grid[0].getMonth()).toBe(11); // December
    expect(grid[0].getDate()).toBe(31);
  });

  it("fills trailing days from next month", () => {
    const grid = buildCalendarGrid(2024, 0);
    const last = grid[grid.length - 1];
    expect(last.getMonth()).toBe(1); // February
  });

  it("handles months starting on Sunday with no leading fill", () => {
    // September 2024 starts on Sunday
    const grid = buildCalendarGrid(2024, 8);
    expect(grid[0].getMonth()).toBe(8);
    expect(grid[0].getDate()).toBe(1);
  });
});
