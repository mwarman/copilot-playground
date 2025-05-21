import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import { Home } from "./Home";
import { BrowserRouter } from "react-router-dom";

// Mock the Hero component
vi.mock("./components/Hero/Hero", () => ({
  Hero: () => <div data-testid="hero-component">Mocked Hero</div>,
}));

// Mock Lucide icons
vi.mock("lucide-react", () => ({
  ArrowRight: () => <div data-testid="arrow-icon" />,
  Code: () => <div data-testid="code-icon" />,
  BookOpen: () => <div data-testid="book-icon" />,
  Video: () => <div data-testid="video-icon" />,
  Lightbulb: () => <div data-testid="lightbulb-icon" />,
  Rocket: () => <div data-testid="rocket-icon" />,
}));

describe("Home Component", () => {
  // Render with Router for Link components
  const renderWithRouter = (ui: React.ReactElement) => {
    return render(ui, { wrapper: BrowserRouter });
  };

  it("renders the Hero component", () => {
    renderWithRouter(<Home />);

    // Check if Hero component is rendered
    const heroComponent = screen.getByTestId("hero-component");
    expect(heroComponent).toBeDefined();
  });

  it("renders the featured content section", () => {
    renderWithRouter(<Home />);

    // Check if the featured content heading is rendered
    const heading = screen.getByText("Featured Content");
    expect(heading).toBeDefined();

    // Check if all 5 cards are rendered
    const cards = screen.getAllByRole("article");
    expect(cards.length).toBe(5);
  });
});
