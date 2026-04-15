import "@testing-library/jest-dom/vitest";

// jsdom doesn't implement scrollIntoView — stub it globally
Element.prototype.scrollIntoView = () => {};
