import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { Layout } from "./common/components/Layout/Layout";
import ErrorBoundary from "./common/components/ErrorBoundary/ErrorBoundary";
import LoadingFallback from "./common/components/LoadingFallback/LoadingFallback";

// Lazy load pages
const Home = lazy(() =>
  import("./pages/Home/Home").then((module) => ({ default: module.Home }))
);
const About = lazy(() =>
  import("./pages/About/About").then((module) => ({ default: module.About }))
);
const Contact = lazy(() =>
  import("./pages/Contact/Contact").then((module) => ({
    default: module.Contact,
  }))
);
const Help = lazy(() =>
  import("./pages/Help/Help").then((module) => ({ default: module.Help }))
);

function App() {
  return (
    <ErrorBoundary>
      <Layout>
        <Suspense fallback={<LoadingFallback />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/help" element={<Help />} />
          </Routes>
        </Suspense>
      </Layout>
    </ErrorBoundary>
  );
}

export default App;
