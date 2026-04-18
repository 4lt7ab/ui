import React from "react";
import { describe, it, expect, vi, beforeEach } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Select } from "./Select";

// Minimal mock — useInjectStyles is a side-effect-only hook
vi.mock("@4lt7ab/core", () => ({
  semantic: new Proxy(
    {},
    { get: (_t, prop) => `var(--mock-${String(prop)})` },
  ),
  useInjectStyles: vi.fn(),
}));

// A small helper that renders the canonical compound shape with three
// options. Disabled indices can be passed in; the component handles
// skipping them in keyboard nav.
function renderSelect(opts: {
  defaultValue?: string;
  value?: string;
  onValueChange?: (v: string) => void;
  onChange?: (e: { target: { value: string; name?: string } }) => void;
  disabled?: boolean;
  hasError?: boolean;
  disabledItems?: string[];
  name?: string;
  placeholder?: string;
}): ReturnType<typeof render> {
  const {
    defaultValue,
    value,
    onValueChange,
    onChange,
    disabled,
    hasError,
    disabledItems = [],
    name,
    placeholder,
  } = opts;
  return render(
    <Select.Root
      defaultValue={defaultValue}
      value={value}
      onValueChange={onValueChange}
      onChange={onChange}
      disabled={disabled}
      hasError={hasError}
      name={name}
    >
      <Select.Trigger aria-label="Test">
        <Select.Value placeholder={placeholder} />
      </Select.Trigger>
      <Select.Content>
        <Select.Item value="a" disabled={disabledItems.includes("a")}>Alpha</Select.Item>
        <Select.Item value="b" disabled={disabledItems.includes("b")}>Bravo</Select.Item>
        <Select.Item value="c" disabled={disabledItems.includes("c")}>Charlie</Select.Item>
      </Select.Content>
    </Select.Root>,
  );
}

describe("Select (compound)", () => {
  beforeEach(() => {
    document.body.innerHTML = "";
  });

  // -- Rendering -----------------------------------------------------------

  it("renders trigger with placeholder when no value", () => {
    renderSelect({ placeholder: "Pick one" });
    expect(screen.getByRole("combobox")).toHaveTextContent("Pick one");
  });

  it("renders trigger with selected label", () => {
    renderSelect({ value: "b" });
    expect(screen.getByRole("combobox")).toHaveTextContent("Bravo");
  });

  it("does not show listbox initially", () => {
    renderSelect({});
    expect(screen.queryByRole("listbox")).not.toBeInTheDocument();
  });

  // -- Opening and closing --------------------------------------------------

  it("opens listbox on click", async () => {
    const user = userEvent.setup();
    renderSelect({});
    await user.click(screen.getByRole("combobox"));
    expect(screen.getByRole("listbox")).toBeInTheDocument();
    expect(screen.getAllByRole("option")).toHaveLength(3);
  });

  it("closes listbox on second click", async () => {
    const user = userEvent.setup();
    renderSelect({});
    const trigger = screen.getByRole("combobox");
    await user.click(trigger);
    expect(screen.getByRole("listbox")).toBeInTheDocument();
    await user.click(trigger);
    expect(screen.queryByRole("listbox")).not.toBeInTheDocument();
  });

  it("closes on Escape", async () => {
    const user = userEvent.setup();
    renderSelect({});
    await user.click(screen.getByRole("combobox"));
    expect(screen.getByRole("listbox")).toBeInTheDocument();
    await user.keyboard("{Escape}");
    expect(screen.queryByRole("listbox")).not.toBeInTheDocument();
  });

  it("does not open when disabled", async () => {
    const user = userEvent.setup();
    renderSelect({ disabled: true });
    await user.click(screen.getByRole("combobox"));
    expect(screen.queryByRole("listbox")).not.toBeInTheDocument();
  });

  // -- Selection ------------------------------------------------------------

  it("selects an option on click", async () => {
    const user = userEvent.setup();
    renderSelect({});
    await user.click(screen.getByRole("combobox"));
    await user.click(screen.getByRole("option", { name: "Bravo" }));
    expect(screen.queryByRole("listbox")).not.toBeInTheDocument();
    expect(screen.getByRole("combobox")).toHaveTextContent("Bravo");
  });

  it("does not select a disabled option", async () => {
    const user = userEvent.setup();
    renderSelect({ disabledItems: ["b"] });
    await user.click(screen.getByRole("combobox"));
    await user.click(screen.getByRole("option", { name: "Bravo" }));
    // Listbox still open — click on disabled was a no-op.
    expect(screen.getByRole("listbox")).toBeInTheDocument();
  });

  // -- Keyboard navigation --------------------------------------------------

  it("opens on ArrowDown when closed", async () => {
    const user = userEvent.setup();
    renderSelect({});
    screen.getByRole("combobox").focus();
    await user.keyboard("{ArrowDown}");
    expect(screen.getByRole("listbox")).toBeInTheDocument();
  });

  it("opens on Enter when closed", async () => {
    const user = userEvent.setup();
    renderSelect({});
    screen.getByRole("combobox").focus();
    await user.keyboard("{Enter}");
    expect(screen.getByRole("listbox")).toBeInTheDocument();
  });

  it("opens on Space when closed", async () => {
    const user = userEvent.setup();
    renderSelect({});
    screen.getByRole("combobox").focus();
    await user.keyboard(" ");
    expect(screen.getByRole("listbox")).toBeInTheDocument();
  });

  it("navigates options with ArrowDown/ArrowUp (values reflected in aria-activedescendant)", async () => {
    const user = userEvent.setup();
    renderSelect({});
    const trigger = screen.getByRole("combobox");
    await user.click(trigger);

    // First option focused initially (no value set → first enabled item).
    expect(trigger.getAttribute("aria-activedescendant")).toMatch(/-opt-a$/);

    await user.keyboard("{ArrowDown}");
    expect(trigger.getAttribute("aria-activedescendant")).toMatch(/-opt-b$/);

    await user.keyboard("{ArrowDown}");
    expect(trigger.getAttribute("aria-activedescendant")).toMatch(/-opt-c$/);

    // Wraps to first.
    await user.keyboard("{ArrowDown}");
    expect(trigger.getAttribute("aria-activedescendant")).toMatch(/-opt-a$/);

    // ArrowUp wraps to last.
    await user.keyboard("{ArrowUp}");
    expect(trigger.getAttribute("aria-activedescendant")).toMatch(/-opt-c$/);
  });

  it("selects focused option on Enter", async () => {
    const user = userEvent.setup();
    renderSelect({});
    await user.click(screen.getByRole("combobox"));
    await user.keyboard("{ArrowDown}"); // focus Bravo
    await user.keyboard("{Enter}");
    expect(screen.queryByRole("listbox")).not.toBeInTheDocument();
    expect(screen.getByRole("combobox")).toHaveTextContent("Bravo");
  });

  it("Home jumps to first option, End jumps to last", async () => {
    const user = userEvent.setup();
    renderSelect({});
    const trigger = screen.getByRole("combobox");
    await user.click(trigger);

    await user.keyboard("{End}");
    expect(trigger.getAttribute("aria-activedescendant")).toMatch(/-opt-c$/);

    await user.keyboard("{Home}");
    expect(trigger.getAttribute("aria-activedescendant")).toMatch(/-opt-a$/);
  });

  it("skips disabled options during keyboard navigation", async () => {
    const user = userEvent.setup();
    renderSelect({ disabledItems: ["b"] });
    const trigger = screen.getByRole("combobox");
    await user.click(trigger);

    // Initial focus on Alpha.
    expect(trigger.getAttribute("aria-activedescendant")).toMatch(/-opt-a$/);

    // ArrowDown skips disabled Bravo → Charlie.
    await user.keyboard("{ArrowDown}");
    expect(trigger.getAttribute("aria-activedescendant")).toMatch(/-opt-c$/);
  });

  it("closes on Tab", async () => {
    const user = userEvent.setup();
    renderSelect({});
    await user.click(screen.getByRole("combobox"));
    expect(screen.getByRole("listbox")).toBeInTheDocument();
    await user.keyboard("{Tab}");
    expect(screen.queryByRole("listbox")).not.toBeInTheDocument();
  });

  // -- Controlled mode ------------------------------------------------------

  it("fires onValueChange with correct value in controlled mode (click)", async () => {
    const onValueChange = vi.fn();
    const user = userEvent.setup();

    function Controlled(): React.JSX.Element {
      const [value, setValue] = React.useState("");
      return (
        <Select.Root
          value={value}
          onValueChange={(v) => {
            onValueChange(v);
            setValue(v);
          }}
        >
          <Select.Trigger aria-label="Test">
            <Select.Value placeholder="Pick one" />
          </Select.Trigger>
          <Select.Content>
            <Select.Item value="a">Alpha</Select.Item>
            <Select.Item value="b">Bravo</Select.Item>
            <Select.Item value="c">Charlie</Select.Item>
          </Select.Content>
        </Select.Root>
      );
    }

    render(<Controlled />);
    expect(screen.getByRole("combobox")).toHaveTextContent("Pick one");

    await user.click(screen.getByRole("combobox"));
    await user.click(screen.getByRole("option", { name: "Bravo" }));

    expect(onValueChange).toHaveBeenCalledWith("b");
    expect(screen.getByRole("combobox")).toHaveTextContent("Bravo");
  });

  it("fires onValueChange with correct value in controlled mode (keyboard)", async () => {
    const onValueChange = vi.fn();
    const user = userEvent.setup();

    function Controlled(): React.JSX.Element {
      const [value, setValue] = React.useState("");
      return (
        <Select.Root
          value={value}
          onValueChange={(v) => {
            onValueChange(v);
            setValue(v);
          }}
        >
          <Select.Trigger aria-label="Test">
            <Select.Value placeholder="Pick one" />
          </Select.Trigger>
          <Select.Content>
            <Select.Item value="a">Alpha</Select.Item>
            <Select.Item value="b">Bravo</Select.Item>
            <Select.Item value="c">Charlie</Select.Item>
          </Select.Content>
        </Select.Root>
      );
    }

    render(<Controlled />);

    screen.getByRole("combobox").focus();
    await user.keyboard("{ArrowDown}"); // open, focus Alpha
    await user.keyboard("{ArrowDown}"); // focus Bravo
    await user.keyboard("{Enter}"); // select Bravo

    expect(onValueChange).toHaveBeenCalledWith("b");
    expect(screen.getByRole("combobox")).toHaveTextContent("Bravo");
  });

  // -- Legacy onChange shim -------------------------------------------------

  it("fires onChange with a synthetic event when selection changes", async () => {
    const onChange = vi.fn();
    const user = userEvent.setup();
    renderSelect({ onChange, name: "role" });

    await user.click(screen.getByRole("combobox"));
    await user.click(screen.getByRole("option", { name: "Bravo" }));

    expect(onChange).toHaveBeenCalledWith({
      target: { value: "b", name: "role" },
    });
  });

  // -- ARIA attributes ------------------------------------------------------

  it("sets correct ARIA attributes on trigger", () => {
    renderSelect({});
    const trigger = screen.getByRole("combobox");
    expect(trigger).toHaveAttribute("aria-haspopup", "listbox");
    expect(trigger).toHaveAttribute("aria-expanded", "false");
    expect(trigger).toHaveAttribute("aria-label", "Test");
  });

  it("sets aria-invalid when hasError", () => {
    renderSelect({ hasError: true });
    expect(screen.getByRole("combobox")).toHaveAttribute("aria-invalid", "true");
  });

  // -- Out-of-context guard -------------------------------------------------

  it("throws when a sub-component is rendered without Root", () => {
    const err = console.error;
    console.error = vi.fn();
    expect(() => render(<Select.Trigger>x</Select.Trigger>)).toThrow(
      /Select\.Trigger must be rendered inside <Select\.Root>/,
    );
    console.error = err;
  });
});
