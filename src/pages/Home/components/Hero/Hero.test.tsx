import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { Hero } from "./Hero";

describe("Hero Component", () => {
  it("renders the welcome message correctly", () => {
    render(<Hero />);

    // Check if the welcome message is rendered
    const heading = screen.getByText("Welcome to the Copilot Playground");
    expect(heading).toBeDefined();
  });

  it("applies custom className when provided", () => {
    render(<Hero className="custom-class" />);

    // Get the main container element (first div)
    const container = screen
      .getByText("Welcome to the Copilot Playground")
      .closest("div");

    // Check if the custom class is applied
    expect(container?.className).toContain("custom-class");
  });
});
