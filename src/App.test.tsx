import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";

describe("App", () => {
  it("renders without crashing", () => {
    render(<App />);
    expect(screen.getByText(/vite \+ react/i)).toBeInTheDocument();
  });

  it("demonstrates user interactions", async () => {
    // Arrange
    const user = userEvent.setup();
    render(<App />);

    // Act - find the button and click it
    const button = screen.getByRole("button", { name: /count is/i });
    await user.click(button);

    // Assert - count should be incremented
    expect(button).toHaveTextContent(/count is 1/i);
  });
});
