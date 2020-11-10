import React from "react";
import Button from "./components/common/Button";
import Button2 from "./components/common/Button2";
import "./assets/css/tailwind.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="text-blue-900">Testing Snowpack!XX!!!</h1>
        <Button2 size="lg" type="primary" loading={true}>
          Enable
        </Button2>
      </header>
    </div>
  );
}

export default App;
