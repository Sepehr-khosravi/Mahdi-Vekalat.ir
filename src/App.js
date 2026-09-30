import { useEffect, useState } from "react";
import "./App.css";

import Home from "./pages/Home";
import LoadingScreen from "./components/Loading/LoadingScreen";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 900);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <LoadingScreen />;
  }

  return <Home />;
}

export default App;