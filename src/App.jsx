import React from "react";
import Button from "./components/common/Button";
import "./assets/css/tailwind.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="text-blue-900">Testing Snowpack!XX!!!</h1>
        <Button text="Testing" type="submit" loading="false">
          Testing 123
        </Button>
      </header>
    </div>
  );
}

export default App;
