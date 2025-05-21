Copilot Playground

An application for exploring and experimenting with GitHub Copilot's capabilities.

# Best Practices for Building a React App with Vite

This guide outlines **best practices** for building a React application using Vite. The goal is **readability and maintainability**, minimizing abstraction and complexity.

## Technologies

- React
- React Router
- shadcn/ui
- React Hook Form
- Zod
- Tailwind CSS
- React Query
- Axios
- Lodash
- TypeScript
- Vite
- Vitest
- Testing Library
- ESLint
- GitHub Actions

---

## Project Structure

Use a clear and consistent folder structure. Here’s a recommended structure:

```
src/
  common/                                  # Reusable components (e.g., Button, Modal)
    components/
      Button/                              # Each comon component has its own folder
        Button.tsx                         # A common React component
        Button.test.tsx                    # Tests for the common component
    hooks/                                 # Reusable hooks (e.g., useDebounce)
      useDebounce.ts                       # A common React hook
    utils/                                 # Reusable utility functions and constants
    types/                                 # Type definitions
  pages/                                   # Top-level pages (e.g., Home, About)
    Home/                                  # Each page has its own folder
      components/                          # Components specific to the Home page
        Hero/                              # Each page-level component has its own folder
          Hero.tsx                         # A component specific to the Home page
          Hero.test.tsx                    # Tests for the Hero component
      utils/                               # Utilities and constants specific to the Home page
      hooks/                               # Hooks specific to the Home page
      types/                               # Types specific to the Home page
      Home.tsx                             # A top-level page component
      Home.test.tsx                        # Tests for the top-level page component
    About/
      About.tsx                            # A top-level page component
      About.test.tsx                       # Tests for the top-level page component
  assets/                                  # Static assets (e.g., images, fonts)
    images/
      logo.png
    fonts/
      custom-font.woff2
  main.tsx                                 # Entry point for the application
  App.tsx                                  # Main application component
  .nvmrc                                   # Node version manager configuration
```

- Co-locate tests and types with components when possible.

## Rules

- Use **TypeScript** for type safety.
- Use **Vite** for fast development and build times.
- Use **React Router** for routing.
- Use **Zod** for schema validation.
- Use **React Hook Form** for form handling.
- Use **Axios** for HTTP requests.
- Use **Lodash** for utility functions.
- Use **shadcn/ui** for pre-built components with Tailwind CSS.
- Use **React Query** for data fetching and caching.
- Use **Tailwind CSS** for utility-first styling.
- Use **class-variance-authority** (CVA) for component variants.
- Use **lucide-react** for icons.
- Use **ESLint** for linting and code quality.
- Use **Vitest** for testing.
- Use **Testing Library** for component testing.
- Use **jest-dom** for DOM assertions.
- Use **@testing-library/user-event** for simulating user interactions.
- Use **GitHub Actions** for CI/CD.
- Every component should have its own test file.
- Every hook should have its own test file.
- Every utility function should have its own test file.
- Every page should have its own test file.
- Every utility function should have its own test file.

---

## React Rules

- Use **functional components** and **React hooks** (`useState`, `useEffect`, etc.).
- Use `React.memo` or `useMemo` only when you measure performance issues.
- React components should only export a single component.

---

## Routing (React Router) Rules

- Lazy-load routes with `React.lazy` and `Suspense`.
- Use nested routes and layout components effectively.
- Define route types for better safety with `useParams`.

---

## Styling Rules

- Use **Tailwind CSS** for utility-first styling.
- Use **class-variance-authority** (CVA) for component variants.

---

## Environment Variables

- Use `.env` files and prefix custom variables with `VITE_`:

  ```
  VITE_API_URL=https://api.example.com
  ```

- Access them via `import.meta.env.VITE_API_URL`.

---

## Linting and Formatting

- Use **ESLint** with a React + TypeScript configuration file.

---

## Testing

- Use **Vitest** (Vite-native test runner):
- Use **Testing Library** for component tests.
- Configure tests in `vite.config.ts` under `test` key.
- Configure jest-dom for DOM assertions.
- Use **@testing-library/user-event** for simulating user interactions.
- Use **screen** for accessing elements in the DOM.
- Use userEvent.setup to initialize user events:
- Write unit tests for components, hooks, and utilities.
- Write unit tests following the **Arrange-Act-Assert** pattern.
- Use `describe` and `it` blocks to group tests logically.
- Use `beforeEach` to set up common test conditions.
- Use `afterEach` to clean up after tests.

  ```ts
  import { render, screen } from "@testing-library/react";
  import userEvent from "@testing-library/user-event";

  test("should click button", async () => {
    // Arrange
    const user = userEvent.setup();
    const screen = render(<Button />);

    // Act
    await user.click(screen.getByRole("button"));

    // Assert
    expect(screen.getByText("Clicked")).toBeInTheDocument();
  });
  ```

---

## Performance Optimizations

- Split code via route-level `lazy()` and `Suspense`.
- Tree-shake unused code with ES modules.
- Use `vite-plugin-compression` for gzip or brotli compression.

---

## CI/CD & Deployment

- Add basic CI with GitHub Actions or similar.
- Set up environment-specific `.env` files.
- Use static deployments with AWS S3 with CloudFront.

---

## Vite-Specific Tips

- Use `vite.config.ts` wisely to configure aliases:

  ```ts
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  }
  ```

- Watch out for plugin compatibility with Vite’s fast refresh.

---

## References to documentation

Follow the official instructions for these libraries exactly as they are written:

- [Tailwind CSS installation](https://tailwindcss.com/docs/installation/using-vite)
- [React Router installation](https://reactrouter.com/start/declarative/installation)
- [shadcn/ui installation](https://ui.shadcn.com/docs/installation/vite)
