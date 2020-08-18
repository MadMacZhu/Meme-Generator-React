import React from "react";
import Header from "./components/Header";
import MemeGenerator from "./components/MemeGenerator";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header id="top" />
      <br />
      <MemeGenerator />
      <a
        href="https://github.com/MadMacZhu/Meme-Generator-React"
        target="_blank"
      >
        Go to the GitHub page of this site
      </a>
      <br />
      <a href="#top">Go to top</a>
    </div>
  );
}

export default App;
