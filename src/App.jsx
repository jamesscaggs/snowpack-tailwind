import React, { useState, useEffect } from "react";
import "./assets/css/tailwind.css";

function App() {
  // Create the count state.
  const [count, setCount] = useState(0);
  // Create the counter (+1 every second).
  useEffect(() => {
    const timer = setTimeout(() => setCount(count + 1), 1000);
    return () => clearTimeout(timer);
  }, [count, setCount]);
  // Return the App component.
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="text-blue-900">Testing Snowpack!XX!!!</h1>
      </header>
    </div>
  );
}

export default App;
