import { Suspense } from "react";
import "@fontsource/inter";
import Scene3D from "./components/Scene3D";
import Portfolio from "./components/Portfolio";

function LoadingScreen() {
  return (
    <div className="fixed inset-0 bg-slate-900 flex items-center justify-center">
      <div className="text-center">
        <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mx-auto mb-4" />
        <p className="text-slate-300">Loading...</p>
      </div>
    </div>
  );
}

function App() {
  return (
    <div className="relative">
      <Suspense fallback={<LoadingScreen />}>
        <Scene3D />
      </Suspense>
      <Portfolio />
    </div>
  );
}

export default App;
