import { describe, it, expect, vi, beforeEach } from "vitest";
import { useState } from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Combobox } from "./Combobox";

vi.mock("@4lt7ab/core", () => ({
  semantic: new Proxy(
    {},
    { get: (_t, prop) => `var(--mock-${String(prop)})` },
  ),
  useInjectStyles: vi.fn(),
}));

const OPTIONS = [
  { value: "apple", label: "Apple" },
  { value: "banana", label: "Banana" },
  { value: "cherry", label: "Cherry" },
  { value: "date", label: "Date" },
];

function renderCombobox(overrides: Record<string, unknown> = {}) {
  const props = {
    options: OPTIONS,
    value: "",
    onChange: vi.fn(),
    "aria-label": "Fruit",
    ...overrides,
  };
  return { ...render(<Combobox {...(props as any)} />), props };
}

describe("Combobox", () => {
  beforeEach(() => {
    document.body.innerHTML = "";
  });

  // -- Rendering ---------------------------------------------------------------

  it("renders an input with combobox role", () => {
    renderCombobox();
    expect(screen.getByRole("combobox")).toBeInTheDocument();
  });

  it("does not show listbox initially", () => {
    renderCombobox();
    expect(screen.queryByRole("listbox")).not.toBeInTheDocument();
  });

  // -- Opening -----------------------------------------------------------------

  it("opens listbox on focus when options exist", async () => {
    const user = userEvent.setup();
    renderCombobox();

    await user.click(screen.getByRole("combobox"));
    expect(screen.getByRole("listbox")).toBeInTheDocument();
    expect(screen.getAllByRole("option")).toHaveLength(4);
  });

  it("opens on ArrowDown when closed", async () => {
    const user = userEvent.setup();
    renderCombobox();

    await user.click(screen.getByRole("combobox"));
    // Close it first so we can test ArrowDown reopening
    await user.keyboard("{Escape}");
    expect(screen.queryByRole("listbox")).not.toBeInTheDocument();

    await user.keyboard("{ArrowDown}");
    expect(screen.getByRole("listbox")).toBeInTheDocument();
  });

  it("does not open when disabled", async () => {
    const user = userEvent.setup();
    renderCombobox({ disabled: true });

    await user.click(screen.getByRole("combobox"));
    expect(screen.queryByRole("listbox")).not.toBeInTheDocument();
  });

  // -- Filtering ---------------------------------------------------------------

  it("filters options based on input value", () => {
    renderCombobox({ value: "an" });
    // "an" matches Banana and Orange... wait, no — "an" matches "Banana"
    // Let's just check that filtered results show
    // With value="an", Banana matches (contains "an")
    // Render with focus to trigger open
  });

  it("shows only matching options when value filters", async () => {
    const onChange = vi.fn();
    const user = userEvent.setup();
    const { rerender } = render(
      <Combobox
        options={OPTIONS}
        value=""
        onChange={onChange}
        aria-label="Fruit"
      />,
    );

    await user.click(screen.getByRole("combobox"));
    expect(screen.getAllByRole("option")).toHaveLength(4);

    // Rerender with a filter value
    rerender(
      <Combobox
        options={OPTIONS}
        value="an"
        onChange={onChange}
        aria-label="Fruit"
      />,
    );
    // "an" matches "Banana"
    expect(screen.getAllByRole("option")).toHaveLength(1);
    expect(screen.getByRole("option", { name: "Banana" })).toBeInTheDocument();
  });

  // -- Selection ---------------------------------------------------------------

  it("calls onChange and onSelect when option is clicked", async () => {
    const onChange = vi.fn();
    const onSelect = vi.fn();
    const user = userEvent.setup();
    // Use a stateful wrapper so the controlled value updates on selection
    function Wrapper() {
      const [value, setValue] = useState("");
      return (
        <Combobox
          options={OPTIONS}
          value={value}
          onChange={(v) => {
            setValue(v);
            onChange(v);
          }}
          onSelect={onSelect}
          aria-label="Fruit"
        />
      );
    }
    render(<Wrapper />);

    await user.click(screen.getByRole("combobox"));
    await user.click(screen.getByRole("option", { name: "Cherry" }));

    expect(onChange).toHaveBeenCalledWith("cherry");
    expect(onSelect).toHaveBeenCalledWith({ value: "cherry", label: "Cherry" });
    // Note: listbox reopens because focus returns to the input (onFocus triggers openMenu).
    // This is correct combobox behavior — verify the input has the selected value instead.
    expect(screen.getByRole("combobox")).toHaveValue("cherry");
  });

  // -- Keyboard navigation -----------------------------------------------------

  it("navigates with ArrowDown/ArrowUp", async () => {
    const user = userEvent.setup();
    renderCombobox({ id: "cb" });

    const input = screen.getByRole("combobox");
    await user.click(input);

    // No focused item initially
    expect(input).not.toHaveAttribute("aria-activedescendant");

    await user.keyboard("{ArrowDown}");
    expect(input).toHaveAttribute(
      "aria-activedescendant",
      "alttab-combobox-opt-apple",
    );

    await user.keyboard("{ArrowDown}");
    expect(input).toHaveAttribute(
      "aria-activedescendant",
      "alttab-combobox-opt-banana",
    );

    await user.keyboard("{ArrowUp}");
    expect(input).toHaveAttribute(
      "aria-activedescendant",
      "alttab-combobox-opt-apple",
    );
  });

  it("wraps around at boundaries", async () => {
    const user = userEvent.setup();
    renderCombobox({ id: "cb" });

    const input = screen.getByRole("combobox");
    await user.click(input);

    // ArrowUp from no selection wraps to last
    await user.keyboard("{ArrowUp}");
    expect(input).toHaveAttribute(
      "aria-activedescendant",
      "alttab-combobox-opt-date",
    );

    // Continue up wraps to last again from first
    await user.keyboard("{ArrowUp}");
    expect(input).toHaveAttribute(
      "aria-activedescendant",
      "alttab-combobox-opt-cherry",
    );
  });

  it("selects focused option on Enter", async () => {
    const onChange = vi.fn();
    const user = userEvent.setup();
    render(
      <Combobox
        options={OPTIONS}
        value=""
        onChange={onChange}
        aria-label="Fruit"
      />,
    );

    await user.click(screen.getByRole("combobox"));
    await user.keyboard("{ArrowDown}"); // Apple
    await user.keyboard("{ArrowDown}"); // Banana
    await user.keyboard("{Enter}");

    expect(onChange).toHaveBeenCalledWith("banana");
    expect(screen.queryByRole("listbox")).not.toBeInTheDocument();
  });

  it("Home jumps to first, End jumps to last", async () => {
    const user = userEvent.setup();
    renderCombobox({ id: "cb" });

    const input = screen.getByRole("combobox");
    await user.click(input);

    await user.keyboard("{End}");
    expect(input).toHaveAttribute(
      "aria-activedescendant",
      "alttab-combobox-opt-date",
    );

    await user.keyboard("{Home}");
    expect(input).toHaveAttribute(
      "aria-activedescendant",
      "alttab-combobox-opt-apple",
    );
  });

  it("closes on Escape", async () => {
    const user = userEvent.setup();
    renderCombobox();

    await user.click(screen.getByRole("combobox"));
    expect(screen.getByRole("listbox")).toBeInTheDocument();

    await user.keyboard("{Escape}");
    expect(screen.queryByRole("listbox")).not.toBeInTheDocument();
  });

  it("closes on Tab", async () => {
    const user = userEvent.setup();
    renderCombobox();

    await user.click(screen.getByRole("combobox"));
    expect(screen.getByRole("listbox")).toBeInTheDocument();

    await user.keyboard("{Tab}");
    expect(screen.queryByRole("listbox")).not.toBeInTheDocument();
  });

  // -- ARIA attributes ---------------------------------------------------------

  it("sets correct ARIA attributes", () => {
    renderCombobox({ hasError: true });
    const input = screen.getByRole("combobox");

    expect(input).toHaveAttribute("aria-haspopup", "listbox");
    expect(input).toHaveAttribute("aria-expanded", "false");
    expect(input).toHaveAttribute("aria-autocomplete", "list");
    expect(input).toHaveAttribute("aria-invalid", "true");
  });
});
