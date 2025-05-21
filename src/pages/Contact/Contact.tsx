export function Contact() {
  return (
    <div className="container mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-6">Contact Us</h1>
      <p className="mb-8">
        Have questions or feedback about the Copilot Playground? We'd love to
        hear from you!
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <div>
          <h2 className="text-xl font-medium mb-4">Get in Touch</h2>
          <p className="mb-2">Email: copilot-playground@example.com</p>
          <p className="mb-2">Twitter: @CopilotPlayground</p>
          <p className="mb-2">GitHub: github.com/copilot-playground</p>
        </div>

        <div>
          <h2 className="text-xl font-medium mb-4">Visit Us</h2>
          <p className="mb-2">Copilot Playground HQ</p>
          <p className="mb-2">123 AI Avenue</p>
          <p className="mb-2">San Francisco, CA 94105</p>
          <p>United States</p>
        </div>
      </div>
    </div>
  );
}
