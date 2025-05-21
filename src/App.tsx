import { useState } from "react";
import reactLogo from "@/assets/react.svg";
import viteLogo from "/vite.svg";

const App = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="max-w-5xl mx-auto p-8 text-center">
      <div className="flex justify-center gap-8">
        <a href="https://vite.dev" target="_blank" className="group">
          <img
            src={viteLogo}
            className="h-24 p-6 transition-filter duration-300 group-hover:drop-shadow-[0_0_2em_rgba(100,108,255,0.67)]"
            alt="Vite logo"
          />
        </a>
        <a href="https://react.dev" target="_blank" className="group">
          <img
            src={reactLogo}
            className="h-24 p-6 transition-filter duration-300 group-hover:drop-shadow-[0_0_2em_rgba(97,218,251,0.67)] animate-[spin_20s_linear_infinite]"
            alt="React logo"
          />
        </a>
      </div>
      <h1 className="text-3xl font-bold underline text-center mb-4">
        Vite + React + Tailwind CSS
      </h1>
      <div className="p-8">
        <button
          onClick={() => setCount((count) => count + 1)}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          count is {count}
        </button>
        <p className="mt-4">
          Edit <code className="bg-gray-200 p-1 rounded">src/App.tsx</code> and
          save to test HMR
        </p>
      </div>
      <p className="text-gray-500 text-sm mt-6">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  );
};

export default App;
