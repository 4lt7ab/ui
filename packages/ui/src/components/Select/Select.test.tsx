import React from "react";
import { describe, it, expect, vi, beforeEach } from "vitest";
import { render, screen, within } from "@testing-library/react";
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

const OPTIONS = [
  { value: "a", label: "Alpha" },
  { value: "b", label: "Bravo" },
  { value: "c", label: "Charlie" },
];

const OPTIONS_WITH_DISABLED = [
  { value: "a", label: "Alpha" },
  { value: "b", label: "Bravo", disabled: true },
  { value: "c", label: "Charlie" },
];

describe("Select", () => {
  beforeEach(() => {
    // Ensure clean DOM between tests
    document.body.innerHTML = "";
  });

  // -- Rendering --------------------------------------------------------------

  it("renders trigger with placeholder when no value", () => {
    render(
      <Select options={OPTIONS} placeholder="Pick one" aria-label="Test" />,
    );
    expect(screen.getByRole("combobox")).toHaveTextContent("Pick one");
  });

  it("renders trigger with selected label", () => {
    render(
      <Select options={OPTIONS} value="b" aria-label="Test" />,
    );
    expect(screen.getByRole("combobox")).toHaveTextContent("Bravo");
  });

  it("does not show listbox initially", () => {
    render(<Select options={OPTIONS} aria-label="Test" />);
    expect(screen.queryByRole("listbox")).not.toBeInTheDocument();
  });

  // -- Opening and closing ----------------------------------------------------

  it("opens listbox on click", async () => {
    const user = userEvent.setup();
    render(<Select options={OPTIONS} aria-label="Test" />);

    await user.click(screen.getByRole("combobox"));
    expect(screen.getByRole("listbox")).toBeInTheDocument();
    expect(screen.getAllByRole("option")).toHaveLength(3);
  });

  it("closes listbox on second click", async () => {
    const user = userEvent.setup();
    render(<Select options={OPTIONS} aria-label="Test" />);

    const trigger = screen.getByRole("combobox");
    await user.click(trigger);
    expect(screen.getByRole("listbox")).toBeInTheDocument();

    await user.click(trigger);
    expect(screen.queryByRole("listbox")).not.toBeInTheDocument();
  });

  it("closes on Escape", async () => {
    const user = userEvent.setup();
    render(<Select options={OPTIONS} aria-label="Test" />);

    await user.click(screen.getByRole("combobox"));
    expect(screen.getByRole("listbox")).toBeInTheDocument();

    await user.keyboard("{Escape}");
    expect(screen.queryByRole("listbox")).not.toBeInTheDocument();
  });

  it("does not open when disabled", async () => {
    const user = userEvent.setup();
    render(<Select options={OPTIONS} disabled aria-label="Test" />);

    await user.click(screen.getByRole("combobox"));
    expect(screen.queryByRole("listbox")).not.toBeInTheDocument();
  });

  // -- Selection --------------------------------------------------------------

  it("selects an option on click", async () => {
    const onChange = vi.fn();
    const user = userEvent.setup();
    render(
      <Select
        options={OPTIONS}
        onChange={onChange}
        aria-label="Test"
      />,
    );

    await user.click(screen.getByRole("combobox"));
    await user.click(screen.getByRole("option", { name: "Bravo" }));

    expect(screen.queryByRole("listbox")).not.toBeInTheDocument();
    // Trigger should now show the selected label
    expect(screen.getByRole("combobox")).toHaveTextContent("Bravo");
  });

  it("does not select a disabled option", async () => {
    const user = userEvent.setup();
    render(
      <Select options={OPTIONS_WITH_DISABLED} aria-label="Test" />,
    );

    await user.click(screen.getByRole("combobox"));
    await user.click(screen.getByRole("option", { name: "Bravo" }));

    // Listbox should still be open (disabled option click is a no-op)
    expect(screen.getByRole("listbox")).toBeInTheDocument();
  });

  // -- Keyboard navigation ----------------------------------------------------

  it("opens on ArrowDown when closed", async () => {
    const user = userEvent.setup();
    render(<Select options={OPTIONS} aria-label="Test" />);

    screen.getByRole("combobox").focus();
    await user.keyboard("{ArrowDown}");
    expect(screen.getByRole("listbox")).toBeInTheDocument();
  });

  it("opens on Enter when closed", async () => {
    const user = userEvent.setup();
    render(<Select options={OPTIONS} aria-label="Test" />);

    screen.getByRole("combobox").focus();
    await user.keyboard("{Enter}");
    expect(screen.getByRole("listbox")).toBeInTheDocument();
  });

  it("opens on Space when closed", async () => {
    const user = userEvent.setup();
    render(<Select options={OPTIONS} aria-label="Test" />);

    screen.getByRole("combobox").focus();
    await user.keyboard(" ");
    expect(screen.getByRole("listbox")).toBeInTheDocument();
  });

  it("navigates options with ArrowDown/ArrowUp", async () => {
    const user = userEvent.setup();
    render(<Select options={OPTIONS} aria-label="Test" id="sel" />);

    const trigger = screen.getByRole("combobox");
    await user.click(trigger);

    // First option should be focused initially (no value set → index 0)
    expect(trigger).toHaveAttribute(
      "aria-activedescendant",
      "alttab-select-opt-a",
    );

    await user.keyboard("{ArrowDown}");
    expect(trigger).toHaveAttribute(
      "aria-activedescendant",
      "alttab-select-opt-b",
    );

    await user.keyboard("{ArrowDown}");
    expect(trigger).toHaveAttribute(
      "aria-activedescendant",
      "alttab-select-opt-c",
    );

    // Wraps to first
    await user.keyboard("{ArrowDown}");
    expect(trigger).toHaveAttribute(
      "aria-activedescendant",
      "alttab-select-opt-a",
    );

    // ArrowUp wraps to last
    await user.keyboard("{ArrowUp}");
    expect(trigger).toHaveAttribute(
      "aria-activedescendant",
      "alttab-select-opt-c",
    );
  });

  it("selects focused option on Enter", async () => {
    const user = userEvent.setup();
    render(<Select options={OPTIONS} aria-label="Test" />);

    await user.click(screen.getByRole("combobox"));
    await user.keyboard("{ArrowDown}"); // focus Bravo (was on Alpha)
    await user.keyboard("{Enter}");

    expect(screen.queryByRole("listbox")).not.toBeInTheDocument();
    expect(screen.getByRole("combobox")).toHaveTextContent("Bravo");
  });

  it("Home jumps to first option, End jumps to last", async () => {
    const user = userEvent.setup();
    render(<Select options={OPTIONS} aria-label="Test" id="sel" />);

    const trigger = screen.getByRole("combobox");
    await user.click(trigger);

    await user.keyboard("{End}");
    expect(trigger).toHaveAttribute(
      "aria-activedescendant",
      "alttab-select-opt-c",
    );

    await user.keyboard("{Home}");
    expect(trigger).toHaveAttribute(
      "aria-activedescendant",
      "alttab-select-opt-a",
    );
  });

  it("skips disabled options during keyboard navigation", async () => {
    const user = userEvent.setup();
    render(
      <Select options={OPTIONS_WITH_DISABLED} aria-label="Test" id="sel" />,
    );

    const trigger = screen.getByRole("combobox");
    await user.click(trigger);

    // Initial focus on Alpha (index 0)
    expect(trigger).toHaveAttribute(
      "aria-activedescendant",
      "alttab-select-opt-a",
    );

    // ArrowDown should skip disabled Bravo, land on Charlie
    await user.keyboard("{ArrowDown}");
    expect(trigger).toHaveAttribute(
      "aria-activedescendant",
      "alttab-select-opt-c",
    );
  });

  it("closes on Tab", async () => {
    const user = userEvent.setup();
    render(<Select options={OPTIONS} aria-label="Test" />);

    await user.click(screen.getByRole("combobox"));
    expect(screen.getByRole("listbox")).toBeInTheDocument();

    await user.keyboard("{Tab}");
    expect(screen.queryByRole("listbox")).not.toBeInTheDocument();
  });

  // -- Controlled mode ---------------------------------------------------------

  it("fires onChange with correct value in controlled mode (click)", async () => {
    const onChange = vi.fn();
    const user = userEvent.setup();

    function Controlled() {
      const [value, setValue] = React.useState("");
      return (
        <Select
          value={value}
          onChange={(e) => {
            onChange(e.target.value);
            setValue(e.target.value);
          }}
          options={OPTIONS}
          placeholder="Pick one"
          aria-label="Test"
        />
      );
    }

    render(<Controlled />);
    expect(screen.getByRole("combobox")).toHaveTextContent("Pick one");

    await user.click(screen.getByRole("combobox"));
    await user.click(screen.getByRole("option", { name: "Bravo" }));

    expect(onChange).toHaveBeenCalledWith("b");
    expect(screen.getByRole("combobox")).toHaveTextContent("Bravo");
  });

  it("fires onChange with correct value in controlled mode (keyboard)", async () => {
    const onChange = vi.fn();
    const user = userEvent.setup();

    function Controlled() {
      const [value, setValue] = React.useState("");
      return (
        <Select
          value={value}
          onChange={(e) => {
            onChange(e.target.value);
            setValue(e.target.value);
          }}
          options={OPTIONS}
          placeholder="Pick one"
          aria-label="Test"
        />
      );
    }

    render(<Controlled />);

    screen.getByRole("combobox").focus();
    await user.keyboard("{ArrowDown}"); // open, focus Alpha
    await user.keyboard("{ArrowDown}"); // focus Bravo
    await user.keyboard("{Enter}");     // select Bravo

    expect(onChange).toHaveBeenCalledWith("b");
    expect(screen.getByRole("combobox")).toHaveTextContent("Bravo");
  });

  // -- ARIA attributes --------------------------------------------------------

  it("sets correct ARIA attributes on trigger", () => {
    render(<Select options={OPTIONS} aria-label="Test" id="sel" />);
    const trigger = screen.getByRole("combobox");

    expect(trigger).toHaveAttribute("aria-haspopup", "listbox");
    expect(trigger).toHaveAttribute("aria-expanded", "false");
    expect(trigger).toHaveAttribute("aria-label", "Test");
  });

  it("sets aria-invalid when hasError", () => {
    render(<Select options={OPTIONS} hasError aria-label="Test" />);
    expect(screen.getByRole("combobox")).toHaveAttribute(
      "aria-invalid",
      "true",
    );
  });
});
