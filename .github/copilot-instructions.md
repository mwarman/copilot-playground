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
      Button/
        Button.tsx
        Button.test.tsx
    hooks/                                 # Reusable hooks (e.g., useDebounce)
      useDebounce.ts
    utils/                                 # Reusable utility functions and constants
    types/                                 # Type definitions
  pages/                                   # Top-level pages (e.g., Home, About)
    Home/
      components/                          # Components specific to the Home page
        Hero/
          Hero.tsx
          Hero.test.tsx
      utils/                               # Utilities and constants specific to the Home page
      hooks/                               # Hooks specific to the Home page
      types/                               # Types specific to the Home page
      Home.tsx
      Home.test.tsx
    About/
      About.tsx
      About.test.tsx
  assets/                                  # Static assets (e.g., images, fonts)
    images/
      logo.png
    fonts/
      custom-font.woff2
  main.tsx                                 # Entry point for the application
  App.tsx                                  # Main application component
```

- Co-locate tests and types with components when possible.

---

## React Best Practices

- Use **functional components** and **React hooks** (`useState`, `useEffect`, etc.).
- Use `React.memo` or `useMemo` only when you measure performance issues.
- Use **React Query** for data fetching.
- Use **shadcn/ui** for pre-built components with Tailwind CSS.

---

## Routing (React Router)

- Lazy-load routes with `React.lazy` and `Suspense`.
- Use nested routes and layout components effectively.
- Define route types for better safety with `useParams`.

---

## Styling

- Use **Tailwind CSS** for utility-first styling.
- Use **shadcn/ui** for pre-built components with Tailwind CSS.

---

## Environment Variables

- Use `.env` files and prefix custom variables with `VITE_`:

  ```
  VITE_API_URL=https://api.example.com
  ```

- Access them via `import.meta.env.VITE_API_URL`.

---

## Linting and Formatting

- Use **ESLint** with a React + TypeScript config:

---

## Testing

- Use **Vitest** (Vite-native test runner):
- Use **Testing Library** for component tests.
- Configure tests in `vite.config.ts` under `test` key.

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

- Use `define` for global constants.
- Watch out for plugin compatibility with Vite’s fast refresh.
