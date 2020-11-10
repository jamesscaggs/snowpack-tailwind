import React from "react";
import "./assets/css/tailwind.css";
import { Button } from "react-ui";

import { ThemeProvider } from "react-ui";
import { tokens, components } from "react-ui/themes/light";

function App() {
  return (
    <ThemeProvider tokens={tokens} components={components}>
      <div className="App">
        <header className="App-header">
          <h1 className="text-blue-900">Testing Snowpack!XX!!!</h1>
        </header>
        <Button className="ml-2">Testing</Button>
      </div>
    </ThemeProvider>
  );
}

export default App;
