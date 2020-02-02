import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import Intro from "./components/Intro";
import Projects from "./components/Projects";
import { Box, Flex, Link, Text } from "rebass";

function App() {
  return (
    <div className="App">
      <Navbar name="Drew Patel" github="https://github.com/dewpey" />

      <header className="App-header">
        <Intro />
        <Projects />
      </header>
    </div>
  );
}

export default App;
