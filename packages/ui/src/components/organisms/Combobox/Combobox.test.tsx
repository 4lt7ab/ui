import { describe, it, expect, vi, beforeEach } from "vitest";
import { useMemo, useState } from "react";
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

// Helper component: wires up consumer-owned filtering the same way the
// demo does. Tests go through this so we're exercising a realistic shape.
function FilteredCombobox({
  onSelect,
  onValueChange,
  hasError,
  disabled,
  initialValue = "",
}: {
  onSelect?: (opt: { value: string; textValue: string }) => void;
  onValueChange?: (v: string) => void;
  hasError?: boolean;
  disabled?: boolean;
  initialValue?: string;
}) {
  const [value, setValue] = useState(initialValue);
  const filtered = useMemo(
    () =>
      value
        ? OPTIONS.filter((o) => o.label.toLowerCase().includes(value.toLowerCase()))
        : OPTIONS,
    [value],
  );

  return (
    <Combobox.Root
      value={value}
      onValueChange={(v) => {
        setValue(v);
        onValueChange?.(v);
      }}
      onSelect={onSelect}
      hasError={hasError}
      disabled={disabled}
    >
      <Combobox.Input aria-label="Fruit" />
      <Combobox.List>
        {filtered.length === 0 ? (
          <Combobox.Empty>No results</Combobox.Empty>
        ) : (
          filtered.map((o) => (
            <Combobox.Item key={o.value} value={o.value} textValue={o.label}>
              {o.label}
            </Combobox.Item>
          ))
        )}
      </Combobox.List>
    </Combobox.Root>
  );
}

describe("Combobox (compound)", () => {
  beforeEach(() => {
    document.body.innerHTML = "";
  });

  // -- Rendering --------------------------------------------------------------

  it("renders an input with combobox role", () => {
    render(<FilteredCombobox />);
    expect(screen.getByRole("combobox")).toBeInTheDocument();
  });

  it("does not show a visible listbox initially", () => {
    render(<FilteredCombobox />);
    // List is always mounted but hidden when closed; `queryByRole` honors `hidden`.
    expect(screen.queryByRole("listbox")).not.toBeInTheDocument();
  });

  // -- Opening ----------------------------------------------------------------

  it("opens listbox on focus when options exist", async () => {
    const user = userEvent.setup();
    render(<FilteredCombobox />);
    await user.click(screen.getByRole("combobox"));
    expect(screen.getByRole("listbox")).toBeInTheDocument();
    expect(screen.getAllByRole("option")).toHaveLength(4);
  });

  it("opens on mount when defaultOpen is true", () => {
    // Regression for the CommandPalette autofocus bug: handleFocus gated
    // openMenu() on items.length > 0, but Items register via useEffect after
    // mount, so autoFocus saw items=[] and stayed closed. defaultOpen lets a
    // consumer (e.g. a modal palette) declare "open the listbox immediately"
    // without waiting on focus + items race conditions.
    render(
      <Combobox.Root defaultOpen>
        <Combobox.Input aria-label="Fruit" />
        <Combobox.List>
          {OPTIONS.map((o) => (
            <Combobox.Item key={o.value} value={o.value} textValue={o.label}>
              {o.label}
            </Combobox.Item>
          ))}
        </Combobox.List>
      </Combobox.Root>,
    );
    const input = screen.getByRole("combobox");
    expect(input).toHaveAttribute("aria-expanded", "true");
    expect(screen.getByRole("listbox")).toBeInTheDocument();
    expect(screen.getAllByRole("option")).toHaveLength(4);
  });

  it("position='inline' renders the listbox in normal flow without absolute positioning", () => {
    // Regression: the default 'absolute' mode positions the listbox at
    // top:100% of the wrapper, which gets clipped when the parent surface
    // (e.g. CommandPalette.Content's panel) sets overflow:hidden. The
    // 'inline' opt-in lets a host that owns its own panel + scroll envelope
    // render the listbox as a normal block child instead.
    render(
      <Combobox.Root defaultOpen>
        <Combobox.Input aria-label="Fruit" />
        <Combobox.List position="inline">
          {OPTIONS.map((o) => (
            <Combobox.Item key={o.value} value={o.value} textValue={o.label}>
              {o.label}
            </Combobox.Item>
          ))}
        </Combobox.List>
      </Combobox.Root>,
    );
    const listbox = screen.getByRole("listbox");
    expect(listbox.style.position).not.toBe("absolute");
    expect(listbox.style.top).toBe("");
    expect(listbox.style.bottom).toBe("");
    // Items still register and render — inline mode is layout-only.
    expect(screen.getAllByRole("option")).toHaveLength(4);
  });

  it("opens on ArrowDown when closed", async () => {
    const user = userEvent.setup();
    render(<FilteredCombobox />);
    await user.click(screen.getByRole("combobox"));
    await user.keyboard("{Escape}");
    expect(screen.queryByRole("listbox")).not.toBeInTheDocument();
    await user.keyboard("{ArrowDown}");
    expect(screen.getByRole("listbox")).toBeInTheDocument();
  });

  it("does not open when disabled", async () => {
    const user = userEvent.setup();
    render(<FilteredCombobox disabled />);
    await user.click(screen.getByRole("combobox"));
    expect(screen.queryByRole("listbox")).not.toBeInTheDocument();
  });

  // -- Filtering --------------------------------------------------------------

  it("shows only matching options when typing filters", async () => {
    const user = userEvent.setup();
    render(<FilteredCombobox />);
    const input = screen.getByRole("combobox");
    await user.click(input);
    expect(screen.getAllByRole("option")).toHaveLength(4);
    await user.type(input, "an"); // matches Banana
    expect(screen.getAllByRole("option")).toHaveLength(1);
    expect(screen.getByRole("option", { name: "Banana" })).toBeInTheDocument();
  });

  it("renders the Empty slot when no items match", async () => {
    const user = userEvent.setup();
    render(<FilteredCombobox />);
    const input = screen.getByRole("combobox");
    await user.click(input);
    await user.type(input, "zzz");
    expect(screen.queryAllByRole("option")).toHaveLength(0);
    expect(screen.getByText("No results")).toBeInTheDocument();
  });

  // -- Selection --------------------------------------------------------------

  it("calls onValueChange and onSelect when option is clicked, and closes", async () => {
    const onValueChange = vi.fn();
    const onSelect = vi.fn();
    const user = userEvent.setup();
    render(<FilteredCombobox onValueChange={onValueChange} onSelect={onSelect} />);

    await user.click(screen.getByRole("combobox"));
    await user.click(screen.getByRole("option", { name: "Cherry" }));

    expect(onValueChange).toHaveBeenCalledWith("Cherry");
    expect(onSelect).toHaveBeenCalledWith({ value: "cherry", textValue: "Cherry" });
    expect(screen.getByRole("combobox")).toHaveValue("Cherry");
    // APG pattern: menu stays closed after selection refocuses the input.
    expect(screen.queryByRole("listbox")).not.toBeInTheDocument();
  });

  // -- Keyboard navigation ----------------------------------------------------

  it("navigates with ArrowDown/ArrowUp (values reflected in aria-activedescendant)", async () => {
    const user = userEvent.setup();
    render(<FilteredCombobox />);
    const input = screen.getByRole("combobox");
    await user.click(input);

    expect(input.getAttribute("aria-activedescendant")).toBeNull();

    await user.keyboard("{ArrowDown}");
    expect(input.getAttribute("aria-activedescendant")).toMatch(/-opt-apple$/);

    await user.keyboard("{ArrowDown}");
    expect(input.getAttribute("aria-activedescendant")).toMatch(/-opt-banana$/);

    await user.keyboard("{ArrowUp}");
    expect(input.getAttribute("aria-activedescendant")).toMatch(/-opt-apple$/);
  });

  it("ArrowUp with no selection wraps to last", async () => {
    const user = userEvent.setup();
    render(<FilteredCombobox />);
    const input = screen.getByRole("combobox");
    await user.click(input);

    await user.keyboard("{ArrowUp}");
    expect(input.getAttribute("aria-activedescendant")).toMatch(/-opt-date$/);
  });

  it("selects focused option on Enter", async () => {
    const onValueChange = vi.fn();
    const user = userEvent.setup();
    render(<FilteredCombobox onValueChange={onValueChange} />);

    await user.click(screen.getByRole("combobox"));
    await user.keyboard("{ArrowDown}"); // Apple
    await user.keyboard("{ArrowDown}"); // Banana
    await user.keyboard("{Enter}");

    expect(onValueChange).toHaveBeenLastCalledWith("Banana");
    expect(screen.queryByRole("listbox")).not.toBeInTheDocument();
  });

  it("Home jumps to first, End jumps to last", async () => {
    const user = userEvent.setup();
    render(<FilteredCombobox />);
    const input = screen.getByRole("combobox");
    await user.click(input);

    await user.keyboard("{End}");
    expect(input.getAttribute("aria-activedescendant")).toMatch(/-opt-date$/);

    await user.keyboard("{Home}");
    expect(input.getAttribute("aria-activedescendant")).toMatch(/-opt-apple$/);
  });

  it("closes on Escape", async () => {
    const user = userEvent.setup();
    render(<FilteredCombobox />);
    await user.click(screen.getByRole("combobox"));
    expect(screen.getByRole("listbox")).toBeInTheDocument();
    await user.keyboard("{Escape}");
    expect(screen.queryByRole("listbox")).not.toBeInTheDocument();
  });

  it("closes on Tab", async () => {
    const user = userEvent.setup();
    render(<FilteredCombobox />);
    await user.click(screen.getByRole("combobox"));
    expect(screen.getByRole("listbox")).toBeInTheDocument();
    await user.keyboard("{Tab}");
    expect(screen.queryByRole("listbox")).not.toBeInTheDocument();
  });

  // -- ARIA attributes --------------------------------------------------------

  it("sets correct ARIA attributes", () => {
    render(<FilteredCombobox hasError />);
    const input = screen.getByRole("combobox");
    expect(input).toHaveAttribute("aria-haspopup", "listbox");
    expect(input).toHaveAttribute("aria-expanded", "false");
    expect(input).toHaveAttribute("aria-autocomplete", "list");
    expect(input).toHaveAttribute("aria-invalid", "true");
  });

  // -- Out-of-context guard ---------------------------------------------------

  it("throws when a sub-component is rendered without Root", () => {
    const err = console.error;
    console.error = vi.fn();
    expect(() => render(<Combobox.Input aria-label="x" />)).toThrow(
      /Combobox\.Input must be rendered inside <Combobox\.Root>/,
    );
    console.error = err;
  });
});
