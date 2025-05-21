export function Help() {
  return (
    <div className="container mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-6">Help & Resources</h1>

      <div className="space-y-8">
        <section>
          <h2 className="text-xl font-medium mb-4">Getting Started</h2>
          <p className="mb-4">
            This Copilot Playground is designed to showcase the capabilities of
            GitHub Copilot in building modern React applications. Here you'll
            find various examples and resources to help you understand how to
            leverage AI in your development workflow.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-medium mb-4">
            Frequently Asked Questions
          </h2>

          <div className="space-y-4">
            <div>
              <h3 className="font-medium">What is GitHub Copilot?</h3>
              <p>
                GitHub Copilot is an AI pair programmer that helps you write
                better code. It draws context from comments and code to suggest
                individual lines and whole functions instantly.
              </p>
            </div>

            <div>
              <h3 className="font-medium">How can I get GitHub Copilot?</h3>
              <p>
                GitHub Copilot is available as a subscription service. You can
                find more information on the{" "}
                <a
                  href="https://github.com/features/copilot"
                  className="text-primary underline"
                >
                  GitHub Copilot page
                </a>
                .
              </p>
            </div>

            <div>
              <h3 className="font-medium">
                Is this an official GitHub application?
              </h3>
              <p>
                No, this Copilot Playground is a demonstration project and is
                not affiliated with GitHub officially.
              </p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-medium mb-4">Additional Resources</h2>

          <ul className="list-disc pl-6">
            <li className="mb-2">
              <a
                href="https://github.com/features/copilot"
                className="text-primary underline"
              >
                GitHub Copilot Official Site
              </a>
            </li>
            <li className="mb-2">
              <a
                href="https://docs.github.com/en/copilot"
                className="text-primary underline"
              >
                Copilot Documentation
              </a>
            </li>
            <li className="mb-2">
              <a
                href="https://github.blog/tag/github-copilot/"
                className="text-primary underline"
              >
                GitHub Blog - Copilot Articles
              </a>
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
}
