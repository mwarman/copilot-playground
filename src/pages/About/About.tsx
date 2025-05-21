export function About() {
  return (
    <div className="container mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-6">About Copilot Playground</h1>
      <p className="mb-4">
        The Copilot Playground is an application designed to showcase and
        experiment with the capabilities of GitHub Copilot, a powerful AI pair
        programming tool developed by GitHub and OpenAI.
      </p>
      <p className="mb-4">
        This application serves as a demonstration of how Copilot can be used to
        build modern React applications with best practices in mind, including:
      </p>
      <ul className="list-disc pl-6 mb-6">
        <li className="mb-2">Using React with TypeScript for type safety</li>
        <li className="mb-2">Building responsive layouts with Tailwind CSS</li>
        <li className="mb-2">Creating reusable components with shadcn/ui</li>
        <li className="mb-2">Implementing clean routing with React Router</li>
        <li className="mb-2">And much more!</li>
      </ul>
      <p>
        Feel free to explore the application and see how Copilot can help
        streamline the development process.
      </p>
    </div>
  );
}
