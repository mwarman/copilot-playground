import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="min-h-screen min-w-screen flex items-center justify-center dark:bg-neutral-900 bg-neutral-100 dark:text-neutral-100 text-neutral-900">
      <div className="max-w-5xl w-full p-8 text-center">
        <div className="flex justify-center gap-8">
          <a href="https://vite.dev" target="_blank">
            <img
              src={viteLogo}
              className="h-24 p-6 transition-all duration-300 hover:drop-shadow-[0_0_2em_#646cffaa]"
              alt="Vite logo"
            />
          </a>
          <a href="https://react.dev" target="_blank">
            <img
              src={reactLogo}
              className="h-24 p-6 transition-all duration-300 hover:drop-shadow-[0_0_2em_#61dafbaa] animate-[spin_20s_linear_infinite]"
              alt="React logo"
            />
          </a>
        </div>
        <h1 className="text-5xl font-bold my-4">Vite + React</h1>
        <div className="p-8">
          <button
            className="rounded-lg border border-transparent px-5 py-2.5 bg-[#1a1a1a] cursor-pointer transition-colors hover:border-[#646cff] focus:outline-none focus:ring-4 focus:ring-opacity-25 focus:ring-[#646cff]"
            onClick={() => setCount((count) => count + 1)}
          >
            count is {count}
          </button>
          <p className="mt-4">
            Edit{" "}
            <code className="font-mono bg-gray-800 p-1 rounded">
              src/App.tsx
            </code>{" "}
            and save to test HMR
          </p>
        </div>
        <p className="text-gray-400">
          Click on the Vite and React logos to learn more
        </p>
      </div>
    </div>
  );
}

export default App;
