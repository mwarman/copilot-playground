import { describe, it, expect } from "vitest";
import { render } from "@testing-library/react";
import LoadingSpinner from "./LoadingSpinner";

describe("LoadingSpinner Component", () => {
  it("renders correctly with default props", () => {
    const { container } = render(<LoadingSpinner />);

    // Check if spinner element exists
    const spinnerElement = container.querySelector(".animate-spin");
    expect(spinnerElement).toBeInTheDocument();

    // Check if medium size classes are applied by default
    expect(spinnerElement).toHaveClass("h-8");
    expect(spinnerElement).toHaveClass("w-8");
    expect(spinnerElement).toHaveClass("border-3");
  });

  it("applies small size classes when size='sm'", () => {
    const { container } = render(<LoadingSpinner size="sm" />);

    const spinnerElement = container.querySelector(".animate-spin");
    expect(spinnerElement).toHaveClass("h-4");
    expect(spinnerElement).toHaveClass("w-4");
    expect(spinnerElement).toHaveClass("border-2");
  });

  it("applies large size classes when size='lg'", () => {
    const { container } = render(<LoadingSpinner size="lg" />);

    const spinnerElement = container.querySelector(".animate-spin");
    expect(spinnerElement).toHaveClass("h-12");
    expect(spinnerElement).toHaveClass("w-12");
    expect(spinnerElement).toHaveClass("border-4");
  });

  it("applies custom className when provided", () => {
    const { container } = render(<LoadingSpinner className="custom-class" />);

    // Check if the custom class is applied to the container div
    const containerDiv = container.firstChild;
    expect(containerDiv).toHaveClass("custom-class");
  });

  it("should have the correct border styles", () => {
    const { container } = render(<LoadingSpinner />);

    const spinnerElement = container.querySelector(".animate-spin");
    expect(spinnerElement).toHaveClass("border-primary");
    expect(spinnerElement).toHaveClass("border-t-transparent");
    expect(spinnerElement).toHaveClass("border-solid");
    expect(spinnerElement).toHaveClass("rounded-full");
  });

  it("renders with proper flex container styles", () => {
    const { container } = render(<LoadingSpinner />);

    const containerDiv = container.firstChild;
    expect(containerDiv).toHaveClass("flex");
    expect(containerDiv).toHaveClass("items-center");
    expect(containerDiv).toHaveClass("justify-center");
  });
});
